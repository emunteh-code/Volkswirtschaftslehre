// ============================================================
// SOURCE COMPANION — Mikroökonomik II
// Source-first coverage browser over the generated source registry.
// ============================================================

import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';

const MODULE_SLUG = 'mikro2';
const REGISTRY_URL = '../docs/audits/source-corpus-registry.generated.json';

const KIND_LABELS = Object.freeze({
  'lecture-slide': 'Vorlesungsfolien',
  supplement: 'Weitere Unterlage',
  dataset: 'Dateiliste / Datensatz',
  exercise: 'Übung',
  solution: 'Lösung',
  tutorial: 'Tutorium',
  exam: 'Klausur'
});

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function normalizePath(value) {
  return String(value || '')
    .replace(/^source-materials\/Mikroökonomik II\//, '')
    .replace(/\\/g, '/');
}

function collectConceptSourcePaths(layers) {
  const out = new Set();
  for (const layer of Object.values(layers || {})) {
    for (const ref of layer?.source_refs || []) {
      out.add(normalizePath(ref?.path || ref));
    }
    for (const anchor of layer?.source_anchors || []) {
      out.add(normalizePath(anchor?.sourcePath || anchor?.path || ''));
    }
  }
  return [...out].filter(Boolean);
}

function buildConceptCoverage() {
  const titleById = Object.fromEntries(CHAPTERS.map((chapter) => [chapter.id, chapter.title]));
  return Object.entries(PROVENANCE_BY_CONCEPT).map(([conceptId, layers]) => ({
    conceptId,
    title: titleById[conceptId] || conceptId,
    paths: collectConceptSourcePaths(layers),
    hasPageAnchors: Object.values(layers || {}).some((layer) => Array.isArray(layer?.source_anchors) && layer.source_anchors.length)
  }));
}

async function loadMikro2Documents() {
  const response = await fetch(REGISTRY_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error(`source registry unavailable: ${response.status}`);
  const registry = await response.json();
  return (registry.sourceDocuments || [])
    .filter((doc) => doc.module === MODULE_SLUG)
    .map((doc) => ({
      id: doc.id,
      kind: doc.kind,
      kindLabel: KIND_LABELS[doc.kind] || doc.kind,
      title: doc.title,
      group: doc.group,
      pages: doc.pages,
      extension: doc.extension,
      path: normalizePath(doc.path),
      extractionStatus: doc.extractionStatus
    }))
    .sort((a, b) => {
      const group = String(a.group).localeCompare(String(b.group), 'de');
      if (group) return group;
      return String(a.title).localeCompare(String(b.title), 'de', { numeric: true });
    });
}

function mappedConceptsForDoc(doc, conceptCoverage) {
  return conceptCoverage.filter((concept) => concept.paths.some((p) => p === doc.path || p.endsWith(doc.path) || doc.path.endsWith(p)));
}

function lectureSortKey(doc) {
  const title = String(doc?.title || '');
  const match = title.match(/Mikro_2_(\d+)/i) || title.match(/Mikro2_(\d+)/i);
  if (match) return Number.parseInt(match[1], 10);
  if (/Vorlesungsplanung/i.test(title)) return 0;
  return 999;
}

function buildCoverageRows(docs, conceptCoverage) {
  return docs
    .filter((doc) => doc.kind === 'lecture-slide')
    .slice()
    .sort((a, b) => lectureSortKey(a) - lectureSortKey(b) || String(a.title).localeCompare(String(b.title), 'de', { numeric: true }))
    .map((doc) => {
      const mapped = mappedConceptsForDoc(doc, conceptCoverage);
      const hasMapped = mapped.length > 0;
      const status = !hasMapped
        ? 'uncovered'
        : mapped.some((concept) => concept.hasPageAnchors)
          ? 'covered'
          : 'partial';
      return { doc, mapped, status };
    });
}

function statusLabel(status) {
  if (status === 'covered') return 'mit Seitenankern';
  if (status === 'partial') return 'nur Quellenreferenz';
  return 'noch unmapped';
}

function renderCoverageMatrix(docs, conceptCoverage) {
  const rows = buildCoverageRows(docs, conceptCoverage);
  const covered = rows.filter((row) => row.status === 'covered').length;
  const partial = rows.filter((row) => row.status === 'partial').length;
  const uncovered = rows.filter((row) => row.status === 'uncovered').length;
  return `<section class="source-coverage-matrix" aria-label="Vorlesungsabdeckung">
<div class="source-coverage-head">
<div>
<span>Lecture Coverage</span>
<h3>Vorlesungsfolge gegen Portalabdeckung</h3>
</div>
<p>${covered} mit Seitenankern · ${partial} nur mit Quellenreferenz · ${uncovered} noch unmapped</p>
</div>
<div class="source-coverage-grid">
${rows.map(({ doc, mapped, status }) => `<button type="button" class="source-coverage-row source-coverage-row--${status}" data-source-doc="${escapeHtml(doc.id)}">
<span class="source-coverage-status">${escapeHtml(statusLabel(status))}</span>
<strong>${escapeHtml(doc.title)}</strong>
<span>${doc.pages ? `${doc.pages} Seiten` : escapeHtml(doc.extension || 'Datei')} · ${mapped.length ? `${mapped.length} Konzept${mapped.length === 1 ? '' : 'e'}` : 'keine direkte Portalzuordnung'}</span>
</button>`).join('')}
</div>
<p class="source-companion-note">Diese Matrix ist ein Mapping-Status, kein Vollständigkeitszertifikat. Eine Vorlesung kann Seitenanker haben und trotzdem noch nicht vollständig rekonstruiert sein.</p>
</section>`;
}

function renderKindStats(docs) {
  const counts = new Map();
  for (const doc of docs) counts.set(doc.kindLabel, (counts.get(doc.kindLabel) || 0) + 1);
  return [...counts.entries()]
    .map(([label, count]) => `<div class="source-companion-stat"><span>${escapeHtml(label)}</span><strong>${count}</strong></div>`)
    .join('');
}

function renderDocumentList(docs, conceptCoverage) {
  return docs.map((doc) => {
    const mapped = mappedConceptsForDoc(doc, conceptCoverage);
    const uncovered = mapped.length === 0;
    return `<button type="button" class="source-companion-doc ${uncovered ? 'is-uncovered' : ''}" data-source-doc="${escapeHtml(doc.id)}">
<span class="source-companion-doc-kind">${escapeHtml(doc.kindLabel)}</span>
<strong>${escapeHtml(doc.title)}</strong>
<span>${escapeHtml(doc.group || 'root')}${doc.pages ? ` · ${doc.pages} Seiten` : ''}</span>
<em>${mapped.length ? `${mapped.length} Portal-Konzept${mapped.length === 1 ? '' : 'e'}` : 'noch nicht direkt abgedeckt'}</em>
</button>`;
  }).join('');
}

function renderDocumentDetail(doc, conceptCoverage) {
  if (!doc) {
    return `<div class="source-companion-empty">
<h3>Quelle auswählen</h3>
<p>Wähle links ein offizielles Dokument. Dann siehst du, welche Portal-Konzepte aktuell darauf verweisen und wo noch keine direkte Abdeckung besteht.</p>
</div>`;
  }
  const mapped = mappedConceptsForDoc(doc, conceptCoverage);
  return `<div class="source-companion-detail-card">
<div class="source-companion-detail-head">
<span>${escapeHtml(doc.kindLabel)}</span>
<h3>${escapeHtml(doc.title)}</h3>
<p>${escapeHtml(doc.path)}</p>
</div>
<div class="source-companion-meta-grid">
<div><span>Gruppe</span><strong>${escapeHtml(doc.group || 'root')}</strong></div>
<div><span>Umfang</span><strong>${doc.pages ? `${doc.pages} Seiten` : escapeHtml(doc.extension || 'Datei')}</strong></div>
<div><span>Indexstatus</span><strong>${escapeHtml(doc.extractionStatus || 'unbekannt')}</strong></div>
<div><span>Portalabdeckung</span><strong>${mapped.length ? `${mapped.length} Konzepte` : 'offen'}</strong></div>
</div>
${mapped.length ? `<div class="source-companion-mapped">
<h4>Abgedeckte Portal-Konzepte</h4>
${mapped.map((concept) => `<button type="button" onclick="window.__navigate('${escapeHtml(concept.conceptId)}')">
<span>${concept.hasPageAnchors ? 'mit Seitenanker' : 'mit Quellenreferenz'}</span>
<strong>${escapeHtml(concept.title)}</strong>
</button>`).join('')}
</div>` : `<div class="source-companion-gap">
<h4>Noch nicht direkt abgedeckt</h4>
<p>Dieses Dokument ist im offiziellen Mikro-II-Korpus registriert, aber aktuell verweist kein Portal-Konzept direkt darauf. Es muss in einem späteren Source-Parity-Pass geprüft, gemappt oder als Zusatzmaterial eingeordnet werden.</p>
</div>`}
<p class="source-companion-note">PDF-Öffnung ist hier bewusst nicht als Button umgesetzt: Die offiziellen Dateien liegen lokal unter <code>source-materials/Mikroökonomik II/</code> und werden nicht mitdeployt.</p>
</div>`;
}

export function createSourceCompanionModule({ renderMath } = {}) {
  let state = {
    docs: [],
    conceptCoverage: [],
    selectedId: null,
    loaded: false,
    error: null
  };

  function render() {
    const content = document.getElementById('content');
    const tabRow = document.getElementById('tabRow');
    const breadcrumb = document.getElementById('breadcrumb');
    if (!content) return;
    if (tabRow) tabRow.classList.remove('visible');
    if (breadcrumb) {
      breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button> / Quellen`;
    }

    if (state.error) {
      content.innerHTML = `<div class="empty-state">
<h2>Quellen konnten nicht geladen werden</h2>
<p>${escapeHtml(state.error)}</p>
<div class="empty-state-actions"><button class="btn" onclick="window.__showSourceCompanion()">Erneut versuchen</button></div>
</div>`;
      return;
    }

    if (!state.loaded) {
      content.innerHTML = `<div class="empty-state"><h2>Quellen werden geladen</h2><p>Das offizielle Mikro-II-Quellenregister wird eingelesen.</p></div>`;
      return;
    }

    const selected = state.docs.find((doc) => doc.id === state.selectedId) || state.docs[0] || null;
    if (selected && !state.selectedId) state.selectedId = selected.id;
    content.innerHTML = `<div class="source-companion">
<div class="source-companion-header">
<span>Official-Material Companion</span>
<h2>Mikro II Quellenbrowser</h2>
<p>Starte bei den offiziellen Dokumenten und prüfe, welche Portal-Konzepte bereits direkt darauf verweisen. Fehlende Abdeckung bleibt sichtbar.</p>
</div>
<div class="source-companion-stats">${renderKindStats(state.docs)}</div>
${renderCoverageMatrix(state.docs, state.conceptCoverage)}
<div class="source-companion-layout">
<div class="source-companion-list" role="list">${renderDocumentList(state.docs, state.conceptCoverage)}</div>
<div class="source-companion-detail">${renderDocumentDetail(selected, state.conceptCoverage)}</div>
</div>
</div>`;
    content.querySelectorAll('[data-source-doc]').forEach((button) => {
      button.classList.toggle('active', button.dataset.sourceDoc === state.selectedId);
      button.addEventListener('click', () => {
        state.selectedId = button.dataset.sourceDoc;
        render();
      });
    });
    renderMath?.(content);
  }

  async function showSourceCompanion() {
    state = { ...state, error: null };
    render();
    try {
      if (!state.loaded) {
        const docs = await loadMikro2Documents();
        state = {
          docs,
          conceptCoverage: buildConceptCoverage(),
          selectedId: docs[0]?.id || null,
          loaded: true,
          error: null
        };
      }
    } catch (error) {
      state = { ...state, error: error?.message || String(error) };
    }
    render();
  }

  return { showSourceCompanion };
}
