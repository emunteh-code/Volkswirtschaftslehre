/**
 * @param {unknown} graphRegistry — Set, Array, or Record
 * @param {string} conceptId
 */
export function hasGraphConcept(graphRegistry, conceptId) {
  if (graphRegistry == null) return false;
  if (typeof graphRegistry.has === 'function') return graphRegistry.has(conceptId);
  if (Array.isArray(graphRegistry)) return graphRegistry.includes(conceptId);
  if (typeof graphRegistry === 'object') return Boolean(graphRegistry[conceptId]);
  return false;
}

/**
 * Generic concept mode index (makro1 pilot pattern). Module supplies storage key names.
 *
 * @param {object} opts
 * @param {{ id: string }[]} opts.chapters
 * @param {Record<string, { theorie?: unknown, motivation?: unknown, aufgaben?: unknown }>} opts.contentById
 * @param {Record<string, unknown[]>} [opts.stepProblemsById]
 * @param {unknown} [opts.graphConcepts] — Set preferred (GRAPH_CONCEPTS)
 * @param {{ progressKey: string, srsKey: string, questionStatsKey: string, fullExamStateKey: string }} opts.storageKeys
 * @param {string[]} [opts.fullExamDocumentIds]
 * @param {string} [opts.theoryEncoding]
 * @param {object} [opts.flags]
 * @param {boolean} [opts.flags.quickExam]
 * @param {boolean} [opts.flags.embeddedExamCanvases]
 * @param {boolean} [opts.flags.masteryChecklist]
 * @param {boolean} [opts.flags.supplementalTasksFromTheory]
 * @returns {Record<string, object>}
 */
export function buildConceptModeIndex({
  chapters,
  contentById,
  stepProblemsById = {},
  graphConcepts,
  storageKeys,
  fullExamDocumentIds = [],
  theoryEncoding = 'html_fragment',
  flags = {}
}) {
  const {
    quickExam = true,
    embeddedExamCanvases = false,
    masteryChecklist = true,
    supplementalTasksFromTheory = true
  } = flags;

  const examIds = [...fullExamDocumentIds];

  /** @type {Record<string, object>} */
  const out = {};
  for (const c of chapters) {
    const id = c.id;
    const entry = contentById[id];
    const stepGroups = stepProblemsById[id];
    const aufgaben = entry?.aufgaben;
    const hasGraph = hasGraphConcept(graphConcepts, id);
    out[id] = {
      learn: {
        enabled: Boolean(entry?.theorie),
        encoding: theoryEncoding,
        hasMotivation: Boolean(entry?.motivation)
      },
      practice: {
        authoredAufgabenCount: Array.isArray(aufgaben) ? aufgaben.length : 0,
        stepProblemGroupCount: Array.isArray(stepGroups) ? stepGroups.length : 0,
        masteryChecklist,
        supplementalTasksFromTheory
      },
      graph: {
        enabled: hasGraph,
        bindingKind: hasGraph ? 'concept_canvas' : 'none'
      },
      exam: {
        quickExam,
        fullExamDocumentIds: examIds,
        embeddedExamCanvases
      },
      mistakeTracking: {
        progressKey: storageKeys.progressKey,
        srsKey: storageKeys.srsKey,
        questionStatsKey: storageKeys.questionStatsKey,
        fullExamStateKey: storageKeys.fullExamStateKey,
        aggregates: ['views', 'correct', 'wrong', 'solved', 'checks']
      }
    };
  }
  return out;
}
