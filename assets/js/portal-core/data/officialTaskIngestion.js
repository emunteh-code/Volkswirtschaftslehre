const OFFICIAL_TASK_KINDS = Object.freeze(['exercise', 'solution', 'tutorial', 'exam']);

function toCleanString(value) {
  return String(value || '').trim();
}

function normalizePath(pathValue, sourceRoot = 'source-materials') {
  const raw = toCleanString(pathValue).replace(/\\/g, '/');
  const root = toCleanString(sourceRoot).replace(/\\/g, '/').replace(/\/$/, '');
  if (!root) return raw;
  return raw.startsWith(`${root}/`) ? raw.slice(root.length + 1) : raw;
}

export function isOfficialTaskDocument(doc) {
  return OFFICIAL_TASK_KINDS.includes(toCleanString(doc?.kind));
}

export function normalizeOfficialTaskDocument(doc, { sourceRoot = 'source-materials' } = {}) {
  if (!doc || typeof doc !== 'object' || !isOfficialTaskDocument(doc)) return null;
  const kind = toCleanString(doc.kind);
  const path = normalizePath(doc.path, sourceRoot);
  return {
    id: toCleanString(doc.id),
    module: toCleanString(doc.module),
    kind,
    title: toCleanString(doc.title),
    group: toCleanString(doc.group || 'root'),
    path,
    sourceStatus: 'direct-source',
    sourceLabel:
      kind === 'exercise'
        ? 'Offizielles Uebungsblatt'
        : kind === 'solution'
          ? 'Offizieller Loesungsschluessel'
          : kind === 'tutorial'
            ? 'Offizielles Tutorium'
            : 'Offizielle Klausur',
    placeholderPolicy:
      'Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.'
  };
}

export function normalizeOfficialTaskDocuments(docs, options = {}) {
  return (Array.isArray(docs) ? docs : [])
    .map((doc) => normalizeOfficialTaskDocument(doc, options))
    .filter(Boolean);
}

export function summarizeOfficialTaskDocuments(docs) {
  const countsByKind = Object.fromEntries(OFFICIAL_TASK_KINDS.map((kind) => [kind, 0]));
  for (const doc of docs || []) {
    if (countsByKind[doc.kind] !== undefined) countsByKind[doc.kind] += 1;
  }
  return {
    total: (docs || []).length,
    countsByKind
  };
}

/** Ingestion-only placeholders must not appear on student practice tabs. */
export function isIngestionPlaceholderTaskFamily(family) {
  if (!family || typeof family !== 'object') return false;
  if (family.placeholderLabel === 'non-deceptive-placeholder') return true;
  const id = toCleanString(family.id);
  if (id.includes('.official-task.placeholder.')) return true;
  const coverage = toCleanString(family.officialTaskCoverage);
  const status = toCleanString(family.sourceStatus);
  if (coverage === 'missing-official-task-source' && status === 'platform-added-explanation') {
    return /placeholder/i.test(toCleanString(family.title));
  }
  return false;
}

/** Task families shown on concept practice surfaces (excludes ingestion placeholders). */
export function filterStudentVisibleTaskFamilies(families) {
  return (Array.isArray(families) ? families : []).filter((family) => !isIngestionPlaceholderTaskFamily(family));
}

export function buildOfficialTaskFamilyPlaceholders({ moduleSlug, chapterIds = [], documents = [] }) {
  const summary = summarizeOfficialTaskDocuments(documents);
  return chapterIds.map((conceptId) => ({
    id: `${moduleSlug}.official-task.placeholder.${conceptId}`,
    module: moduleSlug,
    conceptId,
    title: `Official-task mapping placeholder (${conceptId})`,
    sourceStatus: 'platform-added-explanation',
    officialTaskCoverage: 'missing-official-task-source',
    officialTaskGap:
      `Expliziter Platzhalter: ${summary.total} offizielle Aufgaben-Dokumente sind im Modul registriert, aber diese Konzeptfamilie ist noch nicht auf konkrete Aufgaben gemappt.`,
    placeholderLabel: 'non-deceptive-placeholder'
  }));
}
