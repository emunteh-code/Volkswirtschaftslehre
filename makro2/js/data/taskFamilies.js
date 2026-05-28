import { buildMakro2OfficialTaskPlaceholders } from './officialTaskIngestion.js';

const MAKRO2_OFFICIAL_TASK_DOC_BASELINE_2026_05_28 = Object.freeze({
  exercise: 10,
  solution: 0,
  tutorial: 12,
  exam: 0
});

function familyFromPlaceholder(placeholder) {
  return {
    id: placeholder.id,
    module: 'makro2',
    conceptId: placeholder.conceptId,
    title: `Makro II official-task mapping placeholder (${placeholder.conceptId})`,
    topic: 'Official task ingestion',
    method: 'Dokumente sind ingestiert; Konzept-zu-Aufgabe-Mapping wird in einem separaten Task-Mapping-Pass erstellt.',
    sourceStatus: placeholder.sourceStatus,
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: [
      'Ingestion mit vollstaendigem Aufgaben-Mapping verwechseln',
      'Dokumentanzahl als Beleg fuer Konzeptabdeckung lesen'
    ],
    gradingRubric: [
      'Placeholder bleibt explizit als non-deceptive gekennzeichnet',
      'Keine synthetischen Aufgabeninhalte ohne offizielle Zuordnung'
    ],
    currentCoverage: {
      ingestion: `exercise=${MAKRO2_OFFICIAL_TASK_DOC_BASELINE_2026_05_28.exercise}, solution=${MAKRO2_OFFICIAL_TASK_DOC_BASELINE_2026_05_28.solution}, tutorial=${MAKRO2_OFFICIAL_TASK_DOC_BASELINE_2026_05_28.tutorial}, exam=${MAKRO2_OFFICIAL_TASK_DOC_BASELINE_2026_05_28.exam}`,
      mapping: 'concept-level Zuordnung offen'
    },
    officialTaskCoverage: placeholder.officialTaskCoverage,
    officialTaskGap: placeholder.officialTaskGap,
    placeholderLabel: placeholder.placeholderLabel
  };
}

const PLACEHOLDER_DOCS = [];

export const TASK_FAMILIES = Object.freeze(
  buildMakro2OfficialTaskPlaceholders(PLACEHOLDER_DOCS).map((placeholder) => familyFromPlaceholder(placeholder))
);

export const TASK_FAMILIES_BY_CONCEPT = Object.freeze(
  TASK_FAMILIES.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);
