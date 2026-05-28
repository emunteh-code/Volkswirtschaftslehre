// ============================================================
// SOURCE COMPANION — Mikroökonomik II
// Source-first coverage browser over the generated source registry.
// ============================================================

import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';
import { TASK_FAMILIES } from '../data/taskFamilies.js';

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

function sourceMaterialUrl(doc) {
  if (!doc?.path) return '';
  return `../source-materials/Mikroökonomik II/${doc.path}`;
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

function unanchoredPortalConcepts(conceptCoverage) {
  return conceptCoverage
    .filter((concept) => !concept.hasPageAnchors && concept.paths.length === 0)
    .sort((a, b) => String(a.title).localeCompare(String(b.title), 'de', { numeric: true }));
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

function renderUnanchoredConceptsPanel(conceptCoverage) {
  const concepts = unanchoredPortalConcepts(conceptCoverage);
  if (!concepts.length) return '';
  return `<section class="source-companion-unanchored" aria-label="Portalinhalt ohne direkten Quellenanker">
<div class="source-coverage-head">
<div>
<span>Source Boundary</span>
<h3>Portalinhalt ohne direkten Quellenanker</h3>
</div>
<p>${concepts.length} Konzept${concepts.length === 1 ? '' : 'e'} bleiben supplemental</p>
</div>
<div class="source-companion-unanchored-grid">
${concepts.map((concept) => `<button type="button" onclick="window.__navigate('${escapeHtml(concept.conceptId)}')">
<span>platform-added support</span>
<strong>${escapeHtml(concept.title)}</strong>
<em>Nicht als offiziell prüfungsbewiesener Mikro-II-Stoff zertifiziert.</em>
</button>`).join('')}
</div>
<p class="source-companion-note">Diese Einträge bleiben sichtbar, zählen aber nicht als source-complete oder exam-proven, bis ein offizieller Mikro-II-Quellenanker vorliegt.</p>
</section>`;
}

function renderOfficialTaskArchivePanel(docs) {
  const taskDocs = docs.filter((doc) => ['exercise', 'solution', 'tutorial', 'exam'].includes(doc.kind));
  const officialTaskFamilies = TASK_FAMILIES.filter((family) => family.officialTaskCoverage === 'official-task-source');
  const missingKinds = [
    { kind: 'exercise', label: 'Übungsblätter' },
    { kind: 'solution', label: 'Lösungsschlüssel' },
    { kind: 'tutorial', label: 'Tutorien' },
    { kind: 'exam', label: 'Klausuren / Probeklausuren' }
  ].filter(({ kind }) => !docs.some((doc) => doc.kind === kind));
  const familiesWithoutOfficialTasks = TASK_FAMILIES.filter((family) => family.officialTaskCoverage !== 'official-task-source');

  return `<section class="source-companion-task-gap" aria-label="Offizieller Aufgabenarchiv-Status">
<div class="source-coverage-head">
<div>
<span>Official Task Bank</span>
<h3>Aufgabenarchiv noch nicht source-complete</h3>
</div>
<p>${taskDocs.length} offizielle Aufgabenquellen · ${officialTaskFamilies.length}/${TASK_FAMILIES.length} Familien mit offizieller Aufgabenquelle</p>
</div>
<div class="source-task-gap-grid">
<div>
<span>Fehlende Quellenarten</span>
<strong>${missingKinds.length ? missingKinds.map(({ label }) => escapeHtml(label)).join(', ') : 'keine'}</strong>
<em>Diese Dokumenttypen sind im aktuellen Mikro-II-Korpus nicht registriert.</em>
</div>
<div>
<span>Prüfungstransfer-Status</span>
<strong>${familiesWithoutOfficialTasks.length} Familien nur source-grounded</strong>
<em>Die Familien sind an Vorlesungsquellen ausgerichtet, aber nicht aus offiziellen Aufgaben rekonstruiert.</em>
</div>
</div>
<div class="source-task-family-list">
${familiesWithoutOfficialTasks.map((family) => `<button type="button" onclick="window.__navigate('${escapeHtml(family.conceptId)}')">
<span>${escapeHtml(family.examRelevance || 'Relevanz offen')} · ${escapeHtml(family.difficulty || 'Niveau offen')}</span>
<strong>${escapeHtml(family.title)}</strong>
<em>${escapeHtml(family.officialTaskGap || 'Offizielle Aufgabenquelle fehlt.')}</em>
</button>`).join('')}
</div>
<p class="source-companion-note">Bis Übungsblätter, Lösungen, Tutorien oder Altklausuren vorliegen, bleibt Mikro2 prüfungsnah, aber nicht als vollständige offizielle Aufgabenbank zertifiziert.</p>
</section>`;
}

function renderKindStats(docs) {
  const counts = new Map();
  for (const doc of docs) counts.set(doc.kindLabel, (counts.get(doc.kindLabel) || 0) + 1);
  return [...counts.entries()]
    .map(([label, count]) => `<div class="source-companion-stat"><span>${escapeHtml(label)}</span><strong>${count}</strong></div>`)
    .join('');
}

function defaultSelectedDocId(docs) {
  return docs.find((doc) => doc.kind === 'lecture-slide' && String(doc.extension || '').replace(/^\./, '') === 'pdf')?.id || docs[0]?.id || null;
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

function renderAnchorContext(anchorContext) {
  if (!anchorContext?.title) return '';
  const details = [
    anchorContext.sourceUrl ? `<span><strong>Direktziel:</strong> ${escapeHtml(anchorContext.sourceUrl)}</span>` : '',
    anchorContext.section ? `<span><strong>Abschnitt:</strong> ${escapeHtml(anchorContext.section)}</span>` : '',
    anchorContext.areas ? `<span><strong>Portalbereich:</strong> ${escapeHtml(anchorContext.areas)}</span>` : '',
    anchorContext.statuses ? `<span><strong>Status:</strong> ${escapeHtml(anchorContext.statuses)}</span>` : '',
    anchorContext.confidence ? `<span><strong>Konfidenz:</strong> ${escapeHtml(anchorContext.confidence)}</span>` : '',
    anchorContext.reviewedAt ? `<span><strong>Geprüft:</strong> ${escapeHtml(anchorContext.reviewedAt)}</span>` : ''
  ].filter(Boolean).join('');
  return `<div class="source-companion-anchor-context" role="note">
<span>Aus Konzeptanker geöffnet</span>
<strong>${escapeHtml(anchorContext.title)}</strong>
${details ? `<div>${details}</div>` : ''}
</div>`;
}

function renderDocumentDetail(doc, conceptCoverage, sourceOpenStatus = null, anchorContext = null) {
  if (!doc) {
    return `<div class="source-companion-empty">
<h3>Quelle auswählen</h3>
<p>Wähle links ein offizielles Dokument. Dann siehst du, welche Portal-Konzepte aktuell darauf verweisen und wo noch keine direkte Abdeckung besteht.</p>
</div>`;
  }
  const mapped = mappedConceptsForDoc(doc, conceptCoverage);
  const localUrl = anchorContext?.sourceUrl || sourceMaterialUrl(doc);
  const openLabel = anchorContext?.sourceUrl ? 'Lokale Ankerquelle öffnen' : 'Lokale Quelle öffnen';
  return `<div class="source-companion-detail-card">
<div class="source-companion-detail-head">
<span>${escapeHtml(doc.kindLabel)}</span>
<h3>${escapeHtml(doc.title)}</h3>
<p>${escapeHtml(doc.path)}</p>
</div>
<div class="source-companion-source-actions">
<button type="button" class="btn secondary" data-open-source-path="${escapeHtml(localUrl)}">${escapeHtml(openLabel)}</button>
<div class="source-companion-local-warning">
<strong>Lokale Datei</strong>
<span>Dieser Button prüft zuerst, ob <code>source-materials/Mikroökonomik II/</code> in dieser Umgebung verfügbar ist. Bei Konzeptankern wird die geprüfte Seitenposition mitgegeben, sofern der PDF-Viewer sie unterstützt.</span>
</div>
</div>
${sourceOpenStatus ? `<p class="source-companion-open-status source-companion-open-status--${escapeHtml(sourceOpenStatus.type)}">${escapeHtml(sourceOpenStatus.message)}</p>` : ''}
${renderAnchorContext(anchorContext)}
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
<p class="source-companion-note">Quellenöffnung bleibt bewusst lokal geprüft: Die Quelle wird nur geöffnet, wenn sie in der aktuellen Umgebung erreichbar ist.</p>
</div>`;
}

export function createSourceCompanionModule({ renderMath } = {}) {
  let state = {
    docs: [],
    conceptCoverage: [],
    selectedId: null,
    loaded: false,
    error: null,
    sourceOpenStatus: null,
    anchorContext: null
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

    const selected = state.docs.find((doc) => doc.id === state.selectedId)
      || state.docs.find((doc) => doc.id === defaultSelectedDocId(state.docs))
      || state.docs[0]
      || null;
    if (selected && !state.selectedId) state.selectedId = selected.id;
    const openStatus = state.sourceOpenStatus?.docId === selected?.id ? state.sourceOpenStatus : null;
    const anchorContext = state.anchorContext?.sourceId === selected?.id ? state.anchorContext : null;
    content.innerHTML = `<div class="source-companion">
<div class="source-companion-header">
<span>Official-Material Companion</span>
<h2>Mikro II Quellenbrowser</h2>
<p>Starte bei den offiziellen Dokumenten und prüfe, welche Portal-Konzepte bereits direkt darauf verweisen. Fehlende Abdeckung bleibt sichtbar.</p>
</div>
<div class="source-companion-stats">${renderKindStats(state.docs)}</div>
${renderCoverageMatrix(state.docs, state.conceptCoverage)}
${renderUnanchoredConceptsPanel(state.conceptCoverage)}
${renderOfficialTaskArchivePanel(state.docs)}
<div class="source-companion-layout">
<div class="source-companion-list" role="list">${renderDocumentList(state.docs, state.conceptCoverage)}</div>
<div class="source-companion-detail">${renderDocumentDetail(selected, state.conceptCoverage, openStatus, anchorContext)}</div>
</div>
</div>`;
    content.querySelectorAll('[data-source-doc]').forEach((button) => {
      button.classList.toggle('active', button.dataset.sourceDoc === state.selectedId);
      button.addEventListener('click', () => {
        state.selectedId = button.dataset.sourceDoc;
        state.sourceOpenStatus = null;
        state.anchorContext = null;
        render();
      });
    });
    content.querySelectorAll('[data-open-source-path]').forEach((button) => {
      button.addEventListener('click', async () => {
        const sourcePath = button.dataset.openSourcePath || '';
        if (!sourcePath || !selected) return;
        const checkPath = sourcePath.split('#')[0];
        button.disabled = true;
        const originalText = button.textContent;
        button.textContent = 'Quelle wird geprüft...';
        try {
          const response = await fetch(checkPath, { method: 'HEAD', cache: 'no-store' });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          window.open(sourcePath, '_blank', 'noopener,noreferrer');
          state.sourceOpenStatus = {
            docId: selected.id,
            type: 'success',
            message: 'Quelle wurde in einem neuen Tab geöffnet.'
          };
        } catch (error) {
          state.sourceOpenStatus = {
            docId: selected.id,
            type: 'missing',
            message: 'Diese offizielle Datei ist in der aktuellen Umgebung nicht direkt erreichbar. Prüfe lokal den Ordner source-materials/Mikroökonomik II/.'
          };
        } finally {
          button.disabled = false;
          button.textContent = originalText || 'Lokale Quelle öffnen';
          render();
        }
      });
    });
    renderMath?.(content);
  }

  async function showSourceCompanion(options = {}) {
    const requestedSourceId = typeof options === 'string' ? options : options?.sourceId;
    const requestedAnchorContext = requestedSourceId && options?.anchorContext
      ? { ...options.anchorContext, sourceId: requestedSourceId }
      : null;
    if (requestedSourceId) {
      state = {
        ...state,
        selectedId: requestedSourceId,
        sourceOpenStatus: null,
        anchorContext: requestedAnchorContext
      };
    }
    state = { ...state, error: null };
    render();
    try {
      if (!state.loaded) {
        const docs = await loadMikro2Documents();
        state = {
          docs,
          conceptCoverage: buildConceptCoverage(),
          selectedId: requestedSourceId || defaultSelectedDocId(docs),
          loaded: true,
          error: null,
          sourceOpenStatus: null,
          anchorContext: requestedAnchorContext
        };
      }
    } catch (error) {
      state = { ...state, error: error?.message || String(error) };
    }
    render();
  }

  return { showSourceCompanion };
}
