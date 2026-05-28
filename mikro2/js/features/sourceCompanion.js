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

const COVERAGE_FILTERS = Object.freeze([
  { id: 'all', label: 'Alle Quellen' },
  { id: 'anchored', label: 'Page-anchored partial' },
  { id: 'partial', label: 'Reference-only' },
  { id: 'gap', label: 'Corpus-only' }
]);

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

function conceptTitleById() {
  return Object.fromEntries(CHAPTERS.map((chapter) => [chapter.id, chapter.title]));
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

function anchorMatchesDoc(anchor, doc) {
  if (!anchor || !doc) return false;
  const sourcePath = normalizePath(anchor.sourcePath || anchor.path || '');
  if (anchor.sourceId && anchor.sourceId === doc.id) return true;
  return Boolean(sourcePath && (sourcePath === doc.path || sourcePath.endsWith(doc.path) || doc.path.endsWith(sourcePath)));
}

function refMatchesDoc(ref, doc) {
  if (!ref || !doc) return false;
  const refPath = normalizePath(ref?.path || ref);
  return Boolean(refPath && (refPath === doc.path || refPath.endsWith(doc.path) || doc.path.endsWith(refPath)));
}

function layerMatchesDoc(layer, doc) {
  const hasAnchors = (layer?.source_anchors || []).some((anchor) => anchorMatchesDoc(anchor, doc));
  const hasRefs = (layer?.source_refs || []).some((ref) => refMatchesDoc(ref, doc));
  return { hasAnchors, hasRefs, matches: hasAnchors || hasRefs };
}

function anchorSortPage(anchor) {
  const page = anchor?.locator?.page ?? anchor?.page;
  const parsed = Number.parseInt(page, 10);
  return Number.isFinite(parsed) ? parsed : 9999;
}

function documentAnchorsForDoc(doc) {
  const titles = conceptTitleById();
  const rowsByAnchorId = new Map();

  for (const [conceptId, layers] of Object.entries(PROVENANCE_BY_CONCEPT)) {
    for (const [layerKey, layer] of Object.entries(layers || {})) {
      for (const anchor of layer?.source_anchors || []) {
        if (!anchorMatchesDoc(anchor, doc)) continue;
        const page = anchor?.locator?.page ?? anchor?.page ?? '';
        const section = anchor?.locator?.section || anchor?.section || '';
        const fallbackId = `${conceptId}:${normalizePath(anchor.sourcePath || anchor.path)}:${page}:${section}`;
        const id = anchor.id || fallbackId;
        const row = rowsByAnchorId.get(id) || {
          id,
          conceptId,
          conceptTitle: titles[conceptId] || conceptId,
          anchor,
          layerLabels: new Set()
        };
        row.layerLabels.add(LAYER_LABELS[layerKey] || layerKey);
        rowsByAnchorId.set(id, row);
      }
    }
  }

  return [...rowsByAnchorId.values()].sort((a, b) => {
    const pageDiff = anchorSortPage(a.anchor) - anchorSortPage(b.anchor);
    if (pageDiff) return pageDiff;
    return String(a.conceptTitle).localeCompare(String(b.conceptTitle), 'de', { numeric: true });
  });
}

function anchorDensityForDoc(doc) {
  const anchors = documentAnchorsForDoc(doc);
  const pages = Number.parseInt(doc?.pages, 10);
  const pageCount = Number.isFinite(pages) && pages > 0 ? pages : 0;
  const density = pageCount ? Math.min(1, anchors.length / pageCount) : 0;
  const label = anchors.length
    ? `${anchors.length} geprüfte Anker${pageCount ? ` / ${pageCount} Seiten` : ''}`
    : '0 geprüfte Seitenanker';
  const caveat = anchors.length
    ? 'page-level Rekonstruktion offen'
    : 'Mapping-Gap';
  return {
    anchors: anchors.length,
    pages: pageCount,
    density,
    densityPct: Math.round(density * 100),
    label,
    caveat
  };
}

function documentLayerRowsForDoc(doc) {
  const titles = conceptTitleById();
  const rows = [];

  for (const [conceptId, layers] of Object.entries(PROVENANCE_BY_CONCEPT)) {
    for (const [layerKey, layer] of Object.entries(layers || {})) {
      const match = layerMatchesDoc(layer, doc);
      if (!match.matches) continue;
      rows.push({
        conceptId,
        conceptTitle: titles[conceptId] || conceptId,
        layerKey,
        layerLabel: LAYER_LABELS[layerKey] || layerKey,
        sourceStatus: SOURCE_STATUS_LABELS[layer?.source_status] || layer?.source_status || 'unbekannt',
        precision: match.hasAnchors ? 'Seitenanker' : 'Quellenreferenz'
      });
    }
  }

  return rows.sort((a, b) => {
    const conceptDiff = String(a.conceptTitle).localeCompare(String(b.conceptTitle), 'de', { numeric: true });
    if (conceptDiff) return conceptDiff;
    return String(a.layerLabel).localeCompare(String(b.layerLabel), 'de', { numeric: true });
  });
}

function documentCoverageVerdict(doc, conceptCoverage) {
  const mapped = mappedConceptsForDoc(doc, conceptCoverage);
  const anchors = documentAnchorsForDoc(doc);
  const layers = documentLayerRowsForDoc(doc);
  const referencedOnly = layers.filter((row) => row.precision === 'Quellenreferenz').length;
  const pageAnchored = layers.filter((row) => row.precision === 'Seitenanker').length;

  if (!mapped.length && !layers.length && !anchors.length) {
    return {
      tone: 'gap',
      label: 'Corpus-only',
      title: 'Offizielle Quelle registriert, aber noch nicht rekonstruiert',
      body: 'Dieses Dokument liegt im Mikro-II-Korpus, ist aber noch keinem Portal-Konzept, keinem Portal-Layer und keinem geprüften Seitenanker direkt zugeordnet.',
      facts: ['Portalabdeckung offen', 'keine geprüften Seitenanker', 'Source-Parity-Pass erforderlich']
    };
  }

  if (!anchors.length) {
    return {
      tone: 'partial',
      label: 'Reference-only',
      title: 'Dokumentreferenz vorhanden, page-level Rekonstruktion offen',
      body: 'Portal-Inhalte verweisen auf diese Quelle, aber es gibt noch keine geprüften Seitenanker. Diese Abdeckung ist brauchbar zur Orientierung, aber nicht präzise genug für source-complete.',
      facts: [`${mapped.length} Konzept${mapped.length === 1 ? '' : 'e'}`, `${referencedOnly} referenzierte Portalbereiche`, 'keine Seitenanker']
    };
  }

  return {
    tone: 'anchored',
    label: 'Page-anchored partial',
    title: 'Geprüfte Seitenanker vorhanden, aber keine Vollständigkeitszusage',
    body: 'Dieses Dokument hat geprüfte Seitenanker und portalweite Layer-Zuordnungen. Es bleibt trotzdem partial, bis alle relevanten Seiten, Formeln und Aufgabenfamilien vollständig gegen die Quelle geprüft sind.',
    facts: [`${anchors.length} geprüfte Seitenanker`, `${pageAnchored} page-level Portalbereiche`, `${referencedOnly} reference-only Portalbereiche`]
  };
}

function sourceParityActionsForDoc(doc, conceptCoverage) {
  const verdict = documentCoverageVerdict(doc, conceptCoverage);
  const density = anchorDensityForDoc(doc);
  const actions = [];

  if (verdict.tone === 'gap') {
    actions.push(
      'Dokument sichten und als prüfungsrelevant, Zusatzmaterial oder nicht abdeckungsrelevant klassifizieren.',
      'Falls relevant: passende Portal-Konzepte oder neue Konzeptlücken erfassen.',
      'Mindestens erste geprüfte Seitenanker anlegen, bevor dieses Dokument als rekonstruiert gilt.'
    );
  } else if (verdict.tone === 'partial') {
    actions.push(
      'Bestehende Dokumentreferenzen in konkrete Seiten- oder Abschnittsanker überführen.',
      'Portal-Layer gegen offizielle Terminologie, Notation und Graphkonvention prüfen.',
      'Reference-only Layer erst nach Seitenprüfung als page-level abgedeckt behandeln.'
    );
  } else {
    actions.push(
      'Alle relevanten Folienseiten gegen Konzepte, Formeln und Aufgabenfamilien durchgehen.',
      'Reference-only Portalbereiche in geprüfte Seitenanker umwandeln.',
      'Nach Abschluss prüfen, ob Formeln, Herleitungen und Prüfungstransfer vollständig source-anchored sind.'
    );
  }

  if (doc?.kind === 'lecture-slide' && density.pages && density.anchors < density.pages) {
    actions.push(`${density.pages - density.anchors} Seiten haben noch keinen reviewed anchor; diese Zahl ist ein Priorisierungssignal, kein automatischer Fehler.`);
  }

  return {
    label: verdict.label,
    actions
  };
}

function coverageFilterForDoc(doc, conceptCoverage) {
  return documentCoverageVerdict(doc, conceptCoverage).tone;
}

function filterDocsByCoverage(docs, conceptCoverage, activeFilter = 'all') {
  if (activeFilter === 'all') return docs;
  return docs.filter((doc) => coverageFilterForDoc(doc, conceptCoverage) === activeFilter);
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
    const verdict = documentCoverageVerdict(doc, conceptCoverage);
    const uncovered = mapped.length === 0;
    return `<button type="button" class="source-companion-doc ${uncovered ? 'is-uncovered' : ''}" data-source-doc="${escapeHtml(doc.id)}">
<span class="source-companion-doc-kind">${escapeHtml(doc.kindLabel)} · ${escapeHtml(verdict.label)}</span>
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
  const confidence = typeof anchor?.confidence === 'number' ? `${Math.round(anchor.confidence * 100)}% Konfidenz` : 'Konfidenz offen';
  const reviewedAt = anchor?.reviewedAt ? `geprüft ${anchor.reviewedAt}` : 'Reviewdatum offen';
  const layers = [...layerLabels].sort((a, b) => String(a).localeCompare(String(b), 'de')).join(', ');
  return `<button type="button" onclick="window.__navigate('${escapeHtml(conceptId)}')">
<span>${escapeHtml(anchor?.publicLabel || 'Quelle')}${page ? ` · Seite ${escapeHtml(page)}` : ''}</span>
<strong>${escapeHtml(section)}</strong>
<em>${escapeHtml(conceptTitle)} · ${escapeHtml(layers || 'Portalanker')} · ${escapeHtml(confidence)} · ${escapeHtml(reviewedAt)}</em>
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
<p class="source-companion-note">Layer mit Seitenanker sind präzise auf geprüfte Seiten gemappt. Layer mit Quellenreferenz verweisen nur auf das Dokument und brauchen noch eine page-level Rekonstruktion.</p>
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

function renderDocumentDetail(doc, conceptCoverage, sourceOpenStatus = null, anchorContext = null) {
  if (!doc) {
    return `<div class="source-companion-empty">
<h3>Quelle auswählen</h3>
<p>Wähle links ein offizielles Dokument. Dann siehst du, welche Portal-Konzepte aktuell darauf verweisen und wo noch keine direkte Abdeckung besteht.</p>
</div>`;
  }
  const mapped = mappedConceptsForDoc(doc, conceptCoverage);
  const reviewedAnchors = documentAnchorsForDoc(doc);
  const layerRows = documentLayerRowsForDoc(doc);
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
    coverageFilter: 'all',
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

    const activeFilter = COVERAGE_FILTERS.some((filter) => filter.id === state.coverageFilter) ? state.coverageFilter : 'all';
    const filteredDocs = filterDocsByCoverage(state.docs, state.conceptCoverage, activeFilter);
    const selected = filteredDocs.find((doc) => doc.id === state.selectedId)
      || filteredDocs.find((doc) => doc.id === defaultSelectedDocId(filteredDocs))
      || filteredDocs[0]
      || null;
    if (selected && state.selectedId !== selected.id) state.selectedId = selected.id;
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
${renderCoverageFilters(state.docs, state.conceptCoverage, activeFilter)}
<div class="source-companion-layout">
<div class="source-companion-list" role="list">${filteredDocs.length ? renderDocumentList(filteredDocs, state.conceptCoverage) : `<div class="source-companion-empty"><h3>Keine Quellen in diesem Filter</h3><p>Für diesen Abdeckungsstatus sind aktuell keine Mikro-II-Dokumente registriert.</p></div>`}</div>
<div class="source-companion-detail">${renderDocumentDetail(selected, state.conceptCoverage, openStatus, anchorContext)}</div>
</div>
</div>`;
    content.querySelectorAll('[data-source-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        state.coverageFilter = button.dataset.sourceFilter || 'all';
        const nextDocs = filterDocsByCoverage(state.docs, state.conceptCoverage, state.coverageFilter);
        state.selectedId = nextDocs[0]?.id || null;
        state.sourceOpenStatus = null;
        state.anchorContext = null;
        render();
      });
    });
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
        coverageFilter: 'all',
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
          coverageFilter: requestedSourceId ? 'all' : state.coverageFilter || 'all',
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
