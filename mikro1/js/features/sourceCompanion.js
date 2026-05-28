// ============================================================
// SOURCE COMPANION — Mikroökonomik I
// Official-material browser over the generated source registry.
// ============================================================

import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';
import {
  DEFAULT_COVERAGE_FILTERS,
  anchorDensityForDoc as coreAnchorDensityForDoc,
  buildConceptCoverage as buildCoreConceptCoverage,
  documentAnchorsForDoc as coreDocumentAnchorsForDoc,
  documentCoverageVerdict as coreDocumentCoverageVerdict,
  documentLayerRowsForDoc as coreDocumentLayerRowsForDoc,
  filterDocsByCoverage as coreFilterDocsByCoverage,
  mappedConceptsForDoc as coreMappedConceptsForDoc,
  normalizeSourcePath
} from '../../../assets/js/portal-core/features/sourceCompanionCore.js';

const MODULE_SLUG = 'mikro1';
const REGISTRY_URL = '../docs/audits/source-corpus-registry.generated.json';

const KIND_LABELS = Object.freeze({
  'lecture-slide': 'Vorlesungsfolien',
  supplement: 'Weitere Unterlage',
  dataset: 'Datensatz',
  exercise: 'Übung',
  solution: 'Lösung',
  tutorial: 'Tutorium',
  exam: 'Klausur / Probeklausur'
});

const LAYER_LABELS = Object.freeze({
  motivation: 'Motivation',
  theory: 'Theorie',
  formulas: 'Formeln',
  tasks: 'Aufgaben',
  intuition: 'Intuition',
  graph: 'Grafik',
  stepProblems: 'Schnelltest'
});

const SOURCE_STATUS_LABELS = Object.freeze({
  'direct-source': 'direct-source',
  'source-distilled': 'source-distilled',
  'platform-added-explanation': 'platform-added-explanation',
  'platform-added-drill': 'platform-added-drill',
  'cross-link': 'cross-link'
});

const COVERAGE_FILTERS = DEFAULT_COVERAGE_FILTERS;
const PATH_OPTIONS = Object.freeze({ sourceRoot: 'source-materials/Mikroökonomik I' });

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function normalizePath(value) {
  return normalizeSourcePath(value, PATH_OPTIONS);
}

function sourceMaterialUrl(doc) {
  if (!doc?.path) return '';
  return `../source-materials/Mikroökonomik I/${doc.path}`;
}

function conceptTitleById() {
  return Object.fromEntries(CHAPTERS.map((chapter) => [chapter.id, chapter.title]));
}

function buildConceptCoverage() {
  return buildCoreConceptCoverage({
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    titleById: conceptTitleById(),
    pathOptions: PATH_OPTIONS
  });
}

async function loadMikro1Documents() {
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
  return coreMappedConceptsForDoc(doc, conceptCoverage);
}

function lectureSortKey(doc) {
  const title = String(doc?.title || '');
  const match = title.match(/Mikro_1_VL_(\d+)/i);
  if (match) return Number.parseInt(match[1], 10);
  if (/Vorlesungsplanung/i.test(title)) return 0;
  return 999;
}

function documentAnchorsForDoc(doc) {
  return coreDocumentAnchorsForDoc({
    doc,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    titleById: conceptTitleById(),
    layerLabels: LAYER_LABELS,
    pathOptions: PATH_OPTIONS
  });
}

function anchorDensityForDoc(doc) {
  return coreAnchorDensityForDoc(doc, documentAnchorsForDoc(doc));
}

function documentLayerRowsForDoc(doc) {
  return coreDocumentLayerRowsForDoc({
    doc,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    titleById: conceptTitleById(),
    layerLabels: LAYER_LABELS,
    sourceStatusLabels: SOURCE_STATUS_LABELS,
    pathOptions: PATH_OPTIONS
  });
}

function documentCoverageVerdict(doc, conceptCoverage) {
  const verdict = coreDocumentCoverageVerdict({
    doc,
    conceptCoverage,
    anchors: documentAnchorsForDoc(doc),
    layers: documentLayerRowsForDoc(doc)
  });
  if (verdict.tone !== 'gap') return verdict;
  return {
    ...verdict,
    body: 'Dieses Dokument liegt im Mikro-I-Korpus, ist aber noch keinem Portal-Konzept, keinem Portal-Layer und keinem geprüften Seitenanker direkt zugeordnet.'
  };
}

function coverageFilterForDoc(doc, conceptCoverage) {
  return documentCoverageVerdict(doc, conceptCoverage).tone;
}

function filterDocsByCoverage(docs, conceptCoverage, activeFilter = 'all') {
  const verdictByDocId = Object.fromEntries((docs || []).map((doc) => [doc.id, documentCoverageVerdict(doc, conceptCoverage)]));
  return coreFilterDocsByCoverage(docs, verdictByDocId, activeFilter);
}

function buildCoverageRows(docs, conceptCoverage) {
  return docs
    .filter((doc) => doc.kind === 'lecture-slide')
    .slice()
    .sort((a, b) => lectureSortKey(a) - lectureSortKey(b) || String(a.title).localeCompare(String(b.title), 'de', { numeric: true }))
    .map((doc) => {
      const mapped = mappedConceptsForDoc(doc, conceptCoverage);
      const status = !mapped.length
        ? 'uncovered'
        : mapped.some((concept) => concept.hasPageAnchors)
          ? 'covered'
          : 'partial';
      return { doc, mapped, status };
    });
}

function unanchoredPortalConcepts(conceptCoverage) {
  return conceptCoverage
    .filter((concept) => !concept.hasPageAnchors)
    .sort((a, b) => String(a.title).localeCompare(String(b.title), 'de', { numeric: true }));
}

function sourceParityActionsForDoc(doc, conceptCoverage) {
  const verdict = documentCoverageVerdict(doc, conceptCoverage);
  const density = anchorDensityForDoc(doc);
  const actions = [];

  if (verdict.tone === 'gap') {
    actions.push(
      'Dokument sichten und als prüfungsrelevant, Zusatzmaterial oder nicht abdeckungsrelevant klassifizieren.',
      'Falls relevant: passende Portal-Konzepte, Formelgruppen oder Aufgabenlücken erfassen.',
      'Erste geprüfte Seitenanker anlegen, bevor dieses Dokument als rekonstruiert gilt.'
    );
  } else if (verdict.tone === 'partial') {
    actions.push(
      'File-level Quellenreferenzen in konkrete Seiten- oder Abschnittsanker überführen.',
      'Notation, Graphkonventionen und Herleitungsstil gegen die offizielle Folie prüfen.',
      'Aufgaben- und Formelbezüge erst nach Seitenprüfung als source-complete behandeln.'
    );
  } else {
    actions.push(
      'Alle relevanten Seiten gegen Konzepte, Formeln und Aufgabenfamilien durchgehen.',
      'Verbleibende reference-only Portalbereiche in geprüfte Seitenanker umwandeln.',
      'Danach prüfen, ob offizielle Aufgaben und Probeklausuren vollständig task-family-mapped sind.'
    );
  }

  if (doc?.kind === 'lecture-slide' && density.pages && density.anchors < density.pages) {
    actions.push(`${density.pages - density.anchors} Seiten haben noch keinen reviewed anchor; diese Zahl ist ein Priorisierungssignal, kein automatischer Fehler.`);
  }

  return { label: verdict.label, actions };
}

function renderKindStats(docs) {
  const counts = new Map();
  for (const doc of docs) counts.set(doc.kindLabel, (counts.get(doc.kindLabel) || 0) + 1);
  return [...counts.entries()]
    .map(([label, count]) => `<div class="source-companion-stat"><span>${escapeHtml(label)}</span><strong>${count}</strong></div>`)
    .join('');
}

function renderCoverageFilters(docs, conceptCoverage, activeFilter = 'all') {
  const counts = Object.fromEntries(COVERAGE_FILTERS.map((filter) => [filter.id, 0]));
  counts.all = docs.length;
  for (const doc of docs) {
    const key = coverageFilterForDoc(doc, conceptCoverage);
    counts[key] = (counts[key] || 0) + 1;
  }
  return `<div class="source-companion-filters" role="group" aria-label="Quellen nach Abdeckungsstatus filtern">
${COVERAGE_FILTERS.map((filter) => `<button type="button" class="${activeFilter === filter.id ? 'active' : ''}" data-source-filter="${escapeHtml(filter.id)}">
<span>${escapeHtml(filter.label)}</span>
<strong>${counts[filter.id] || 0}</strong>
</button>`).join('')}
</div>`;
}

function statusLabel(status) {
  if (status === 'covered') return 'Seitenanker vorhanden';
  if (status === 'partial') return 'nur Quellenreferenz';
  return 'noch unmapped';
}

function renderCoverageMatrix(docs, conceptCoverage) {
  const rows = buildCoverageRows(docs, conceptCoverage);
  const covered = rows.filter((row) => row.status === 'covered').length;
  const partial = rows.filter((row) => row.status === 'partial').length;
  const uncovered = rows.filter((row) => row.status === 'uncovered').length;
  const reviewedAnchors = rows.reduce((sum, { doc }) => sum + anchorDensityForDoc(doc).anchors, 0);

  return `<section class="source-coverage-matrix" aria-label="Vorlesungsabdeckung">
<div class="source-coverage-head">
<div>
<span>Lecture Coverage</span>
<h3>Vorlesungsfolge gegen Portalabdeckung</h3>
</div>
<p>${covered} mit Seitenankern · ${partial} nur mit Quellenreferenz · ${uncovered} noch unmapped · ${reviewedAnchors} geprüfte Anker</p>
</div>
<div class="source-coverage-grid">
${rows.map(({ doc, mapped, status }) => {
  const density = anchorDensityForDoc(doc);
  return `<button type="button" class="source-coverage-row source-coverage-row--${status}" data-source-doc="${escapeHtml(doc.id)}">
<span class="source-coverage-status">${escapeHtml(statusLabel(status))}</span>
<strong>${escapeHtml(doc.title)}</strong>
<span>${doc.pages ? `${doc.pages} Seiten` : escapeHtml(doc.extension || 'Datei')} · ${mapped.length ? `${mapped.length} Konzept${mapped.length === 1 ? '' : 'e'}` : 'keine direkte Portalzuordnung'}</span>
<span class="source-coverage-anchor-density"><i style="--source-anchor-density:${density.densityPct}%"></i></span>
<em>${escapeHtml(density.label)} · ${escapeHtml(density.caveat)}</em>
</button>`;
}).join('')}
</div>
<p class="source-companion-note">Diese Matrix zeigt den aktuellen Mapping-Status. Mikro1 hat bereits file-level Quellenreferenzen, aber noch keine vollständige page-level Rekonstruktion.</p>
</section>`;
}

function renderUnanchoredConceptsPanel(conceptCoverage) {
  const concepts = unanchoredPortalConcepts(conceptCoverage);
  if (!concepts.length) return '';
  return `<section class="source-companion-unanchored" aria-label="Portalinhalt ohne geprüften Seitenanker">
<div class="source-coverage-head">
<div>
<span>Source Boundary</span>
<h3>Portalinhalt ohne geprüften Seitenanker</h3>
</div>
<p>${concepts.length} Konzept${concepts.length === 1 ? '' : 'e'} brauchen page-level Rekonstruktion</p>
</div>
<div class="source-companion-unanchored-grid">
${concepts.map((concept) => `<button type="button" onclick="window.__navigate('${escapeHtml(concept.conceptId)}')">
<span>${concept.paths.length ? 'file-level reference' : 'source reference offen'}</span>
<strong>${escapeHtml(concept.title)}</strong>
<em>Noch nicht als page-anchored source-complete zertifiziert.</em>
</button>`).join('')}
</div>
<p class="source-companion-note">Diese Liste ist bewusst streng: ein Konzept zählt erst mit geprüftem Seitenanker als präzise rückverfolgbar.</p>
</section>`;
}

function renderOfficialTaskArchivePanel(docs) {
  const taskDocs = docs.filter((doc) => ['exercise', 'solution', 'tutorial', 'exam'].includes(doc.kind));
  return `<section class="source-companion-task-gap" aria-label="Offizieller Aufgabenarchiv-Status">
<div class="source-coverage-head">
<div>
<span>Official Task Bank</span>
<h3>Offizielle Aufgaben noch nicht task-family-mapped</h3>
</div>
<p>${taskDocs.length} registrierte Klausur-/Aufgabendokumente · 0 gemappte offizielle Aufgabenfamilien</p>
</div>
<div class="source-task-gap-grid">
<div>
<span>Dokumentstatus</span>
<strong>${taskDocs.length ? `${taskDocs.length} offizielle Prüfungsdokumente registriert` : 'keine offiziellen Aufgabenquellen registriert'}</strong>
<em>Die Dateien sind im Korpus, aber noch nicht in eine erschöpfende Aufgabenbank zerlegt.</em>
</div>
<div>
<span>Release-Grenze</span>
<strong>exam-bank-complete: nein</strong>
<em>Probeklausuren/Altklausuren müssen noch in Themen, Methoden, Fallen und Rubrics gemappt werden.</em>
</div>
</div>
<p class="source-companion-note">Mikro1 bleibt der interaktive Benchmark, aber die offizielle Aufgabenbank ist erst nach Task-Family-Mapping vollständig.</p>
</section>`;
}

function defaultSelectedDocId(docs) {
  return docs.find((doc) => doc.kind === 'lecture-slide' && String(doc.extension || '').replace(/^\./, '') === 'pdf')?.id || docs[0]?.id || null;
}

function renderDocumentList(docs, conceptCoverage) {
  return docs.map((doc) => {
    const mapped = mappedConceptsForDoc(doc, conceptCoverage);
    const verdict = documentCoverageVerdict(doc, conceptCoverage);
    return `<button type="button" class="source-companion-doc ${mapped.length ? '' : 'is-uncovered'}" data-source-doc="${escapeHtml(doc.id)}">
<span class="source-companion-doc-kind">${escapeHtml(doc.kindLabel)} · ${escapeHtml(verdict.label)}</span>
<strong>${escapeHtml(doc.title)}</strong>
<span>${escapeHtml(doc.group || 'root')}${doc.pages ? ` · ${doc.pages} Seiten` : ''}</span>
<em>${mapped.length ? `${mapped.length} Portal-Konzept${mapped.length === 1 ? '' : 'e'}` : 'noch nicht direkt abgedeckt'}</em>
</button>`;
  }).join('');
}

function renderDocumentAnchorInventory(doc) {
  const rows = documentAnchorsForDoc(doc);
  if (!rows.length) {
    return `<div class="source-companion-anchor-list source-companion-anchor-list--empty">
<h4>Reviewed Source Anchors</h4>
<p>Für dieses Dokument sind noch keine geprüften Seitenanker im Portal registriert. Das ist ein Mapping-Gap, kein Beleg dafür, dass die Quelle prüfungsirrelevant ist.</p>
</div>`;
  }
  return `<div class="source-companion-anchor-list">
<div class="source-companion-anchor-list-head">
<h4>Reviewed Source Anchors</h4>
<span>${rows.length} geprüfte Seitenanker</span>
</div>
${rows.map(({ conceptId, conceptTitle, anchor, layerLabels }) => {
  const page = anchor?.locator?.page ?? anchor?.page;
  const section = anchor?.locator?.section || anchor?.section || 'Abschnitt geprüft';
  const layers = [...layerLabels].sort((a, b) => String(a).localeCompare(String(b), 'de')).join(', ');
  return `<button type="button" onclick="window.__navigate('${escapeHtml(conceptId)}')">
<span>${escapeHtml(anchor?.publicLabel || 'Quelle')}${page ? ` · Seite ${escapeHtml(page)}` : ''}</span>
<strong>${escapeHtml(section)}</strong>
<em>${escapeHtml(conceptTitle)} · ${escapeHtml(layers || 'Portalanker')}</em>
</button>`;
}).join('')}
</div>`;
}

function renderDocumentLayerMap(doc) {
  const rows = documentLayerRowsForDoc(doc);
  if (!rows.length) return '';
  return `<div class="source-companion-layer-map">
<div class="source-companion-anchor-list-head">
<h4>Portal-Layer aus dieser Quelle</h4>
<span>${rows.length} Portalbereiche</span>
</div>
${rows.map((row) => `<button type="button" onclick="window.__navigate('${escapeHtml(row.conceptId)}')">
<span>${escapeHtml(row.precision)} · ${escapeHtml(row.sourceStatus)}</span>
<strong>${escapeHtml(row.conceptTitle)}</strong>
<em>${escapeHtml(row.layerLabel)}</em>
</button>`).join('')}
<p class="source-companion-note">Layer mit Quellenreferenz verweisen auf das Dokument. Für source-complete braucht Mikro1 noch geprüfte Seitenanker.</p>
</div>`;
}

function renderDocumentCoverageVerdict(doc, conceptCoverage) {
  const verdict = documentCoverageVerdict(doc, conceptCoverage);
  return `<div class="source-companion-verdict source-companion-verdict--${escapeHtml(verdict.tone)}">
<span>${escapeHtml(verdict.label)}</span>
<strong>${escapeHtml(verdict.title)}</strong>
<p>${escapeHtml(verdict.body)}</p>
<div>
${verdict.facts.map((fact) => `<em>${escapeHtml(fact)}</em>`).join('')}
</div>
</div>`;
}

function renderSourceParityActions(doc, conceptCoverage) {
  const plan = sourceParityActionsForDoc(doc, conceptCoverage);
  return `<div class="source-companion-action-plan">
<div class="source-companion-anchor-list-head">
<h4>Source-Parity Next Steps</h4>
<span>${escapeHtml(plan.label)}</span>
</div>
<ol>
${plan.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join('')}
</ol>
</div>`;
}

function renderDocumentDetail(doc, conceptCoverage, sourceOpenStatus = null) {
  if (!doc) {
    return `<div class="source-companion-empty">
<h3>Quelle auswählen</h3>
<p>Wähle links ein offizielles Dokument. Dann siehst du, welche Portal-Konzepte aktuell darauf verweisen und wo noch keine direkte Abdeckung besteht.</p>
</div>`;
  }
  const mapped = mappedConceptsForDoc(doc, conceptCoverage);
  const reviewedAnchors = documentAnchorsForDoc(doc);
  const layerRows = documentLayerRowsForDoc(doc);
  const localUrl = sourceMaterialUrl(doc);
  return `<div class="source-companion-detail-card">
<div class="source-companion-detail-head">
<span>${escapeHtml(doc.kindLabel)}</span>
<h3>${escapeHtml(doc.title)}</h3>
<p>${escapeHtml(doc.path)}</p>
</div>
<div class="source-companion-source-actions">
<button type="button" class="btn secondary" data-open-source-path="${escapeHtml(localUrl)}">Lokale Quelle öffnen</button>
<div class="source-companion-local-warning">
<strong>Lokale Datei</strong>
<span>Dieser Button prüft zuerst, ob <code>source-materials/Mikroökonomik I/</code> in dieser Umgebung verfügbar ist.</span>
</div>
</div>
${sourceOpenStatus ? `<p class="source-companion-open-status source-companion-open-status--${escapeHtml(sourceOpenStatus.type)}">${escapeHtml(sourceOpenStatus.message)}</p>` : ''}
${renderDocumentCoverageVerdict(doc, conceptCoverage)}
${renderSourceParityActions(doc, conceptCoverage)}
<div class="source-companion-meta-grid">
<div><span>Gruppe</span><strong>${escapeHtml(doc.group || 'root')}</strong></div>
<div><span>Umfang</span><strong>${doc.pages ? `${doc.pages} Seiten` : escapeHtml(doc.extension || 'Datei')}</strong></div>
<div><span>Indexstatus</span><strong>${escapeHtml(doc.extractionStatus || 'unbekannt')}</strong></div>
<div><span>Portalabdeckung</span><strong>${mapped.length ? `${mapped.length} Konzepte` : 'offen'}</strong></div>
<div><span>Seitenanker</span><strong>${reviewedAnchors.length ? `${reviewedAnchors.length} geprüft` : 'offen'}</strong></div>
<div><span>Portalbereiche</span><strong>${layerRows.length ? `${layerRows.length} gemappt` : 'offen'}</strong></div>
</div>
${renderDocumentAnchorInventory(doc)}
${renderDocumentLayerMap(doc)}
${mapped.length ? `<div class="source-companion-mapped">
<h4>Abgedeckte Portal-Konzepte</h4>
${mapped.map((concept) => `<button type="button" onclick="window.__navigate('${escapeHtml(concept.conceptId)}')">
<span>${concept.hasPageAnchors ? 'mit Seitenanker' : 'mit Quellenreferenz'}</span>
<strong>${escapeHtml(concept.title)}</strong>
</button>`).join('')}
</div>` : `<div class="source-companion-gap">
<h4>Noch nicht direkt abgedeckt</h4>
<p>Dieses Dokument ist im offiziellen Mikro-I-Korpus registriert, aber aktuell verweist kein Portal-Konzept direkt darauf. Es muss in einem späteren Source-Parity-Pass geprüft, gemappt oder als Zusatzmaterial eingeordnet werden.</p>
</div>`}
<p class="source-companion-note">Quellenöffnung bleibt bewusst lokal geprüft: Die Quelle wird nur geöffnet, wenn sie in der aktuellen Umgebung erreichbar ist.</p>
</div>`;
}

export function createSourceCompanionModule({ renderMath } = {}) {
  let state = {
    docs: [],
    conceptCoverage: [],
    selectedId: null,
    coverageFilter: 'all',
    loaded: false,
    error: null,
    sourceOpenStatus: null
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
      content.innerHTML = `<div class="empty-state"><h2>Quellen werden geladen</h2><p>Das offizielle Mikro-I-Quellenregister wird eingelesen.</p></div>`;
      return;
    }

    const activeFilter = COVERAGE_FILTERS.some((filter) => filter.id === state.coverageFilter) ? state.coverageFilter : 'all';
    const filteredDocs = filterDocsByCoverage(state.docs, state.conceptCoverage, activeFilter);
    const selected = filteredDocs.find((doc) => doc.id === state.selectedId)
      || filteredDocs.find((doc) => doc.id === defaultSelectedDocId(filteredDocs))
      || filteredDocs[0]
      || null;
    if (selected && state.selectedId !== selected.id) state.selectedId = selected.id;
    const openStatus = state.sourceOpenStatus?.docId === selected?.id ? state.sourceOpenStatus : null;

    content.innerHTML = `<div class="source-companion">
<div class="source-companion-header">
<span>Official-Material Companion</span>
<h2>Mikro I Quellenbrowser</h2>
<p>Starte bei den offiziellen Dokumenten und prüfe, welche Portal-Konzepte bereits file-level darauf verweisen. Fehlende Seitenanker und Aufgabenbank-Mappings bleiben sichtbar.</p>
</div>
<div class="source-companion-stats">${renderKindStats(state.docs)}</div>
${renderCoverageMatrix(state.docs, state.conceptCoverage)}
${renderUnanchoredConceptsPanel(state.conceptCoverage)}
${renderOfficialTaskArchivePanel(state.docs)}
${renderCoverageFilters(state.docs, state.conceptCoverage, activeFilter)}
<div class="source-companion-layout">
<div class="source-companion-list" role="list">${filteredDocs.length ? renderDocumentList(filteredDocs, state.conceptCoverage) : `<div class="source-companion-empty"><h3>Keine Quellen in diesem Filter</h3><p>Für diesen Abdeckungsstatus sind aktuell keine Mikro-I-Dokumente registriert.</p></div>`}</div>
<div class="source-companion-detail">${renderDocumentDetail(selected, state.conceptCoverage, openStatus)}</div>
</div>
</div>`;

    content.querySelectorAll('[data-source-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        state.coverageFilter = button.dataset.sourceFilter || 'all';
        const nextDocs = filterDocsByCoverage(state.docs, state.conceptCoverage, state.coverageFilter);
        state.selectedId = nextDocs[0]?.id || null;
        state.sourceOpenStatus = null;
        render();
      });
    });

    content.querySelectorAll('[data-source-doc]').forEach((button) => {
      button.classList.toggle('active', button.dataset.sourceDoc === state.selectedId);
      button.addEventListener('click', () => {
        state.selectedId = button.dataset.sourceDoc;
        state.sourceOpenStatus = null;
        render();
      });
    });

    content.querySelectorAll('[data-open-source-path]').forEach((button) => {
      button.addEventListener('click', async () => {
        const sourcePath = button.dataset.openSourcePath || '';
        if (!sourcePath || !selected) return;
        button.disabled = true;
        const originalText = button.textContent;
        button.textContent = 'Quelle wird geprüft...';
        try {
          const response = await fetch(sourcePath, { method: 'HEAD', cache: 'no-store' });
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
            message: 'Diese offizielle Datei ist in der aktuellen Umgebung nicht direkt erreichbar. Prüfe lokal den Ordner source-materials/Mikroökonomik I/.'
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
    if (requestedSourceId) {
      state = {
        ...state,
        selectedId: requestedSourceId,
        coverageFilter: 'all',
        sourceOpenStatus: null
      };
    }
    state = { ...state, error: null };
    render();
    try {
      if (!state.loaded) {
        const docs = await loadMikro1Documents();
        state = {
          docs,
          conceptCoverage: buildConceptCoverage(),
          selectedId: requestedSourceId || defaultSelectedDocId(docs),
          coverageFilter: requestedSourceId ? 'all' : state.coverageFilter || 'all',
          loaded: true,
          error: null,
          sourceOpenStatus: null
        };
      }
    } catch (error) {
      state = { ...state, error: error?.message || String(error) };
    }
    render();
  }

  return { showSourceCompanion };
}
