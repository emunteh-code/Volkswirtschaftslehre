// ============================================================
// DASHBOARD — Mikroökonomik II
// Renders learning progress and backbone-derived metrics
// ============================================================

import {
  buildDashboardDerivedMetricsSnapshot,
  buildHonestDashboardPilotHtml
} from '../../../assets/js/portal-core/data/dashboardDerivedMetrics.js';
import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';
import { COURSE_CONFIG } from '../data/courseConfig.js';
import { MISTAKE_REVIEW_KEY } from '../data/srsConfig.js';
import { loadProgress, loadSRS, listLearnerAttempts, listMistakeLogEntries } from '../state/storage.js';
import { getDueCards, getPerformance } from './srs.js';

function conceptHasAnchors(conceptId) {
  return Object.values(PROVENANCE_BY_CONCEPT[conceptId] || {})
    .some((layer) => Array.isArray(layer?.source_anchors) && layer.source_anchors.length > 0);
}

function conceptHasRefs(conceptId) {
  return Object.values(PROVENANCE_BY_CONCEPT[conceptId] || {})
    .some((layer) => Array.isArray(layer?.source_refs) && layer.source_refs.length > 0);
}

function buildSourceStatusSummary() {
  const anchored = CHAPTERS.filter((chapter) => conceptHasAnchors(chapter.id)).length;
  const referenced = CHAPTERS.filter((chapter) => conceptHasRefs(chapter.id)).length;
  const supplemental = CHAPTERS.filter((chapter) => !conceptHasAnchors(chapter.id) && !conceptHasRefs(chapter.id));
  return { anchored, referenced, supplemental };
}

/**
 * Build and return the dashboard HTML.
 * @param {Function} onNavigate - navigate(id) callback
 * @returns {string} HTML string
 */
export function renderDashboard(onNavigate) {
  const p = loadProgress();
  const srs = loadSRS();
  const now = Date.now();
  const due = getDueCards();

  const stats = CHAPTERS.map(c => {
    const perf = getPerformance(c.id, p);
    const entry = p[c.id];
    const srsCard = srs[c.id];
    return {
      id: c.id, title: c.title, cat: c.cat,
      accuracy: perf ? perf.accuracy : null,
      total: perf ? perf.total : 0,
      seen: !!entry,
      due: srsCard && srsCard.due <= now,
    };
  }).filter(s => s.seen || s.total > 0);

  const totalSeen = CHAPTERS.filter(c => p[c.id]).length;
  const avgAccuracy = stats.filter(s => s.accuracy !== null)
    .reduce((a, s, _, arr) => a + s.accuracy / arr.length, 0);
  const weak = stats.filter(s => s.accuracy !== null && s.accuracy < 0.6)
    .sort((a, b) => a.accuracy - b.accuracy);
  const weakest = weak.length ? weak[0] : null;
  const sourceStatus = buildSourceStatusSummary();

let html = `<div class="dashboard">
<div class="dash-header">
<h2>Lern-Dashboard</h2>
<p style="color:var(--muted);font-size:13px">Dein Fortschritt auf einen Blick</p>
</div>
<div class="dash-section">
<h3>Quellenstatus</h3>
<p style="color:var(--text);font-size:13px;line-height:1.55;margin:0">Der offizielle Mikro-II-Korpus liegt im Repo. Dieses Modul ist teilweise quellengestützt: ${sourceStatus.anchored}/${CHAPTERS.length} Konzepte haben Seitenanker, ${sourceStatus.supplemental.length} aktuelle Konzepte bleiben supplemental ohne direkten Primäranker. Eine vollständige offizielle Aufgabenbank fehlt noch.</p>
<div class="dash-source-grid" aria-label="Mikro II Quellenstatus">
<div><span>Seitenanker</span><strong>${sourceStatus.anchored}/${CHAPTERS.length}</strong></div>
<div><span>Quellenreferenzen</span><strong>${sourceStatus.referenced}/${CHAPTERS.length}</strong></div>
<div><span>Supplemental</span><strong>${sourceStatus.supplemental.length}</strong></div>
<div><span>Offizielle Aufgaben</span><strong>0</strong></div>
</div>
<button type="button" class="btn secondary" onclick="window.__showSourceCompanion?.()" style="width:100%;max-width:420px;margin-top:12px">Quellenbrowser öffnen</button>
<p style="color:var(--muted);font-size:12px;margin-top:8px;margin-bottom:0">Supplemental: ${sourceStatus.supplemental.map((chapter) => chapter.title).join(' · ') || 'keine'}.</p>
</div>
<div class="dash-section" style="margin-bottom:16px">
<button type="button" class="btn secondary" onclick="window.__showMistakeReview?.()" style="width:100%;max-width:420px">Fehlerprotokoll öffnen</button>
<p style="color:var(--muted);font-size:12px;margin-top:8px;margin-bottom:0">Eigene Fehler aus Schnelltest und Probeklausur werden lokal gesammelt, damit du wiederkehrende Denkfehler gezielt schließen kannst.</p>
</div>`;

  const derivedSnap = buildDashboardDerivedMetricsSnapshot({
    moduleSlug: COURSE_CONFIG.slug,
    listLearnerAttempts,
    listMistakeLogEntries,
    loadSRS,
    mistakeReviewKey: MISTAKE_REVIEW_KEY
  });
  const conceptTitleById = Object.fromEntries(CHAPTERS.map((c) => [c.id, c.title]));
  html += buildHonestDashboardPilotHtml(derivedSnap, { conceptTitleById });

  html += `<div class="dash-stats">
<div class="dash-stat"><div class="ds-val">${totalSeen}</div><div class="ds-lab">Konzepte gesehen</div></div>
<div class="dash-stat"><div class="ds-val">${CHAPTERS.length}</div><div class="ds-lab">Gesamt</div></div>
<div class="dash-stat"><div class="ds-val">${stats.filter(s => s.accuracy !== null).length > 0 ? Math.round(avgAccuracy * 100) + '%' : '—'}</div><div class="ds-lab">Ø Genauigkeit</div></div>
<div class="dash-stat"><div class="ds-val">${due.length}</div><div class="ds-lab">Wiederholung fällig</div></div>
</div>`;

  if (weakest) {
    html += `<div class="dash-focus-rec">
<h3>Fokusempfehlung</h3>
<p>Dein schwächstes Konzept ist <strong>${weakest.title}</strong> (Genauigkeit: ${Math.round(weakest.accuracy * 100)}%).</p>
<button class="btn" onclick="window.__navigate('${weakest.id}')">Jetzt üben</button>
</div>`;
  }

  if (due.length) {
    html += `<div class="dash-section"><h3>Heute wiederholen (${due.length})</h3><div class="dash-due-list">`;
    due.slice(0, 5).forEach(c => {
      const srsCard = srs[c.id];
      const easePct = Math.round(((srsCard.ease - 1.3) / (3.0 - 1.3)) * 100);
      const color = easePct > 60 ? 'var(--accent)' : easePct > 30 ? 'var(--accent2)' : 'var(--accent3)';
      html += `<button class="dash-due-btn" onclick="window.__navigate('${c.id}')">${c.title} <span class="due-ease" style="color:${color}">${easePct}%</span></button>`;
    });
    html += `</div></div>`;
  }

  if (weak.length) {
    html += `<div class="dash-section"><h3>Schwache Bereiche</h3><div class="dash-bars">`;
    weak.slice(0, 6).forEach(s => {
      const pct = Math.round(s.accuracy * 100);
      const color = pct < 40 ? 'var(--accent3)' : pct < 60 ? '#f0c040' : 'var(--accent2)';
      html += `<div class="dash-bar-row">
<button class="dash-bar-label" onclick="window.__navigate('${s.id}')">${s.title}</button>
<div class="dash-bar-bg"><div class="dash-bar-fg" style="width:${pct}%;background:${color}"></div></div>
<span class="dash-bar-pct" style="color:${color}">${pct}%</span>
</div>`;
    });
    html += `</div></div>`;
  }

  if (stats.length === 0) {
    html += `<div class="dash-section"><p style="color:var(--muted);text-align:center;padding:40px">Noch keine Daten. Starte mit einem Konzept und beantworte Aufgaben!</p></div>`;
  }

  html += `<div class="dash-actions">
<button class="btn secondary" onclick="window.__resetData()">Daten zurücksetzen</button>
</div>`;
  html += `</div>`;
  return html;
}
