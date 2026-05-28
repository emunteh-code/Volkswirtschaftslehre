// Shared, pure source-companion helpers.
// Keep module-specific rendering and academic content outside this file.

export const DEFAULT_COVERAGE_FILTERS = Object.freeze([
  { id: 'all', label: 'Alle Quellen' },
  { id: 'anchored', label: 'Page-anchored partial' },
  { id: 'partial', label: 'Reference-only' },
  { id: 'gap', label: 'Corpus-only' }
]);

export function normalizeSourcePath(value, { sourceRoot = '' } = {}) {
  const normalized = String(value || '').replace(/\\/g, '/');
  const prefix = String(sourceRoot || '').replace(/\\/g, '/').replace(/\/$/, '');
  if (!prefix) return normalized;
  return normalized.replace(new RegExp(`^${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/`), '');
}

export function collectConceptSourcePaths(layers, options = {}) {
  const out = new Set();
  for (const layer of Object.values(layers || {})) {
    for (const ref of layer?.source_refs || []) {
      out.add(normalizeSourcePath(ref?.path || ref, options));
    }
    for (const anchor of layer?.source_anchors || []) {
      out.add(normalizeSourcePath(anchor?.sourcePath || anchor?.path || '', options));
    }
  }
  return [...out].filter(Boolean);
}

export function buildConceptCoverage({ provenanceByConcept, titleById = {}, pathOptions = {} }) {
  return Object.entries(provenanceByConcept || {}).map(([conceptId, layers]) => ({
    conceptId,
    title: titleById[conceptId] || conceptId,
    paths: collectConceptSourcePaths(layers, pathOptions),
    hasPageAnchors: Object.values(layers || {}).some((layer) => Array.isArray(layer?.source_anchors) && layer.source_anchors.length)
  }));
}

export function pathsMatch(left, right) {
  return Boolean(left && right && (left === right || left.endsWith(right) || right.endsWith(left)));
}

export function mappedConceptsForDoc(doc, conceptCoverage) {
  return (conceptCoverage || []).filter((concept) => (concept.paths || []).some((path) => pathsMatch(path, doc?.path)));
}

export function anchorMatchesDoc(anchor, doc, pathOptions = {}) {
  if (!anchor || !doc) return false;
  const sourcePath = normalizeSourcePath(anchor.sourcePath || anchor.path || '', pathOptions);
  if (anchor.sourceId && anchor.sourceId === doc.id) return true;
  return pathsMatch(sourcePath, doc.path);
}

export function refMatchesDoc(ref, doc, pathOptions = {}) {
  if (!ref || !doc) return false;
  const refPath = normalizeSourcePath(ref?.path || ref, pathOptions);
  return pathsMatch(refPath, doc.path);
}

export function layerMatchesDoc(layer, doc, pathOptions = {}) {
  const hasAnchors = (layer?.source_anchors || []).some((anchor) => anchorMatchesDoc(anchor, doc, pathOptions));
  const hasRefs = (layer?.source_refs || []).some((ref) => refMatchesDoc(ref, doc, pathOptions));
  return { hasAnchors, hasRefs, matches: hasAnchors || hasRefs };
}

export function anchorSortPage(anchor) {
  const page = anchor?.locator?.page ?? anchor?.page;
  const parsed = Number.parseInt(page, 10);
  return Number.isFinite(parsed) ? parsed : 9999;
}

export function documentAnchorsForDoc({ doc, provenanceByConcept, titleById = {}, layerLabels = {}, pathOptions = {} }) {
  const rowsByAnchorId = new Map();

  for (const [conceptId, layers] of Object.entries(provenanceByConcept || {})) {
    for (const [layerKey, layer] of Object.entries(layers || {})) {
      for (const anchor of layer?.source_anchors || []) {
        if (!anchorMatchesDoc(anchor, doc, pathOptions)) continue;
        const page = anchor?.locator?.page ?? anchor?.page ?? '';
        const section = anchor?.locator?.section || anchor?.section || '';
        const fallbackId = `${conceptId}:${normalizeSourcePath(anchor.sourcePath || anchor.path, pathOptions)}:${page}:${section}`;
        const id = anchor.id || fallbackId;
        const row = rowsByAnchorId.get(id) || {
          id,
          conceptId,
          conceptTitle: titleById[conceptId] || conceptId,
          anchor,
          layerLabels: new Set()
        };
        row.layerLabels.add(layerLabels[layerKey] || layerKey);
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

export function anchorDensityForDoc(doc, anchors) {
  const pages = Number.parseInt(doc?.pages, 10);
  const pageCount = Number.isFinite(pages) && pages > 0 ? pages : 0;
  const anchorCount = Array.isArray(anchors) ? anchors.length : 0;
  const density = pageCount ? Math.min(1, anchorCount / pageCount) : 0;
  return {
    anchors: anchorCount,
    pages: pageCount,
    density,
    densityPct: Math.round(density * 100),
    label: anchorCount
      ? `${anchorCount} geprüfte Anker${pageCount ? ` / ${pageCount} Seiten` : ''}`
      : '0 geprüfte Seitenanker',
    caveat: anchorCount ? 'page-level Rekonstruktion offen' : 'Mapping-Gap'
  };
}

export function documentLayerRowsForDoc({ doc, provenanceByConcept, titleById = {}, layerLabels = {}, sourceStatusLabels = {}, pathOptions = {} }) {
  const rows = [];
  for (const [conceptId, layers] of Object.entries(provenanceByConcept || {})) {
    for (const [layerKey, layer] of Object.entries(layers || {})) {
      const match = layerMatchesDoc(layer, doc, pathOptions);
      if (!match.matches) continue;
      rows.push({
        conceptId,
        conceptTitle: titleById[conceptId] || conceptId,
        layerKey,
        layerLabel: layerLabels[layerKey] || layerKey,
        sourceStatus: sourceStatusLabels[layer?.source_status] || layer?.source_status || 'unbekannt',
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

export function documentCoverageVerdict({ doc, conceptCoverage, anchors, layers }) {
  const mapped = mappedConceptsForDoc(doc, conceptCoverage);
  const referencedOnly = (layers || []).filter((row) => row.precision === 'Quellenreferenz').length;
  const pageAnchored = (layers || []).filter((row) => row.precision === 'Seitenanker').length;
  const anchorCount = Array.isArray(anchors) ? anchors.length : 0;

  if (!mapped.length && !(layers || []).length && !anchorCount) {
    return {
      tone: 'gap',
      label: 'Corpus-only',
      title: 'Offizielle Quelle registriert, aber noch nicht rekonstruiert',
      body: 'Dieses Dokument liegt im Korpus, ist aber noch keinem Portal-Konzept, keinem Portal-Layer und keinem geprüften Seitenanker direkt zugeordnet.',
      facts: ['Portalabdeckung offen', 'keine geprüften Seitenanker', 'Source-Parity-Pass erforderlich']
    };
  }

  if (!anchorCount) {
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
    facts: [`${anchorCount} geprüfte Seitenanker`, `${pageAnchored} page-level Portalbereiche`, `${referencedOnly} reference-only Portalbereiche`]
  };
}

export function coverageFilterForDoc(verdict) {
  return verdict?.tone || 'gap';
}

export function filterDocsByCoverage(docs, verdictByDocId, activeFilter = 'all') {
  if (activeFilter === 'all') return docs || [];
  return (docs || []).filter((doc) => coverageFilterForDoc(verdictByDocId?.[doc.id]) === activeFilter);
}

export function resolveDocIdBySourcePath(docs, sourcePath, pathOptions = {}) {
  const normalized = normalizeSourcePath(sourcePath, pathOptions);
  if (!normalized) return null;
  const match = (docs || []).find((doc) => pathsMatch(doc?.path, normalized) || pathsMatch(doc?.path, sourcePath));
  return match?.id || null;
}

export function buildConceptSourceSummaryFromProvenance(layers, options = {}) {
  const {
    anchoredTitle = 'Direkte Seitenanker vorhanden.',
    referencedTitle = 'Offizielle Quellenreferenz vorhanden, aber noch ohne Seitenanker.',
    supplementalTitle = 'Platform-added support ohne direkten offiziellen Quellenanker.',
    platformTitle = 'Platform-added support; Quelle muss noch geprüft werden.',
    unknownTitle = 'Für dieses Konzept liegt noch keine Provenienzmetadaten-Zuordnung vor.',
    supplementalLabel = 'Supplemental',
    anchoredLabel = 'Quelle',
    referencedLabel = 'Referenz',
    platformLabel = 'Plattform',
    unknownLabel = 'Quellenstatus offen'
  } = options;

  if (!layers) {
    return { status: 'unknown', label: unknownLabel, title: unknownTitle };
  }

  const values = Object.values(layers);
  const hasAnchor = values.some((layer) => Array.isArray(layer?.source_anchors) && layer.source_anchors.length > 0);
  const hasRef = values.some((layer) => Array.isArray(layer?.source_refs) && layer.source_refs.length > 0);
  const statuses = new Set(values.map((layer) => layer?.source_status).filter(Boolean));
  const isSupplemental = statuses.has('platform-added-explanation') || statuses.has('platform-added-drill');

  if (isSupplemental && !hasAnchor && !hasRef) {
    return { status: 'supplemental', label: supplementalLabel, title: supplementalTitle };
  }
  if (hasAnchor) {
    return { status: 'anchored', label: anchoredLabel, title: anchoredTitle };
  }
  if (hasRef) {
    return { status: 'referenced', label: referencedLabel, title: referencedTitle };
  }
  return { status: 'platform', label: platformLabel, title: platformTitle };
}

export function buildSourceParityActionPlan({ doc, verdict, density, messages = {} }) {
  const actionsByTone = {
    gap: messages.gap || [
      'Dokument sichten und als prüfungsrelevant, Zusatzmaterial oder nicht abdeckungsrelevant klassifizieren.',
      'Falls relevant: passende Portal-Konzepte, Formelgruppen oder Aufgabenlücken erfassen.',
      'Erste geprüfte Seitenanker anlegen, bevor dieses Dokument als rekonstruiert gilt.'
    ],
    partial: messages.partial || [
      'File-level Quellenreferenzen in konkrete Seiten- oder Abschnittsanker überführen.',
      'Notation, Graphkonventionen und Herleitungsstil gegen die offizielle Quelle prüfen.',
      'Aufgaben- und Formelbezüge erst nach Seitenprüfung als source-complete behandeln.'
    ],
    anchored: messages.anchored || [
      'Alle relevanten Seiten gegen Konzepte, Formeln und Aufgabenfamilien durchgehen.',
      'Verbleibende reference-only Portalbereiche in geprüfte Seitenanker umwandeln.',
      'Danach prüfen, ob offizielle Aufgaben und Probeklausuren vollständig task-family-mapped sind.'
    ]
  };
  const tone = verdict?.tone || 'gap';
  const actions = [...(actionsByTone[tone] || actionsByTone.gap)];
  if (doc?.kind === 'lecture-slide' && density?.pages && density.anchors < density.pages) {
    actions.push(
      `${density.pages - density.anchors} Seiten haben noch keinen reviewed anchor; diese Zahl ist ein Priorisierungssignal, kein automatischer Fehler.`
    );
  }
  return { label: verdict?.label || 'Source parity', actions };
}

export function renderAnchorContextPanel(anchorContext, escapeHtml) {
  if (!anchorContext?.title) return '';
  const esc = typeof escapeHtml === 'function' ? escapeHtml : (value) => String(value ?? '');
  const details = [
    anchorContext.sourceUrl ? `<span><strong>Direktziel:</strong> ${esc(anchorContext.sourceUrl)}</span>` : '',
    anchorContext.section ? `<span><strong>Abschnitt:</strong> ${esc(anchorContext.section)}</span>` : '',
    anchorContext.areas ? `<span><strong>Portalbereich:</strong> ${esc(anchorContext.areas)}</span>` : '',
    anchorContext.statuses ? `<span><strong>Status:</strong> ${esc(anchorContext.statuses)}</span>` : '',
    anchorContext.confidence ? `<span><strong>Konfidenz:</strong> ${esc(anchorContext.confidence)}</span>` : '',
    anchorContext.reviewedAt ? `<span><strong>Geprüft:</strong> ${esc(anchorContext.reviewedAt)}</span>` : ''
  ].filter(Boolean).join('');
  return `<div class="source-companion-anchor-context" role="note">
<span>Aus Konzeptanker geöffnet</span>
<strong>${esc(anchorContext.title)}</strong>
${details ? `<div>${details}</div>` : ''}
</div>`;
}
