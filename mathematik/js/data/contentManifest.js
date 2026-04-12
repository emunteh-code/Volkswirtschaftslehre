// ============================================================
// CONTENT MANIFEST — Mathematik (platform backbone)
// Provenance + mode index for source-normalized portal bridge.
// ============================================================

import { createProvenance } from '../../../assets/js/portal-core/data/provenance.js';
import { buildProvenanceByConceptFromPrimaryRefs } from '../../../assets/js/portal-core/data/learningObjectNormalize.js';
import { buildConceptModeIndex } from '../../../assets/js/portal-core/data/modeIndex.js';
import { buildContentManifestBridgePayload } from '../../../assets/js/portal-core/data/contentManifestAdapters.js';
import { CURRICULUM } from './curriculum.js';
import { CHAPTERS, CONTENT } from './chapters.js';
import { STEP_PROBLEMS } from './stepProblems.js';
import { INTUITION } from './intuition.js';
import { GRAPH_CONCEPTS } from '../ui/graphPanel.js';
import {
  SRS_KEY,
  PROGRESS_KEY,
  QUESTION_STATS_KEY,
  FE_STATE_KEY
} from './srsConfig.js';
import { COURSE_CONFIG } from './courseConfig.js';
import { FULL_EXAMS } from './fullExams.js';

const MODULE_SLUG = 'mathematik';

/**
 * Primary anchors — paths relative to:
 *   source-materials/Mathematik/Mathematik/
 * Curated directly from CURRICULUM.sourceRefs for each concept.
 */
export const MATHEMATIK_CONCEPT_PRIMARY_REFS = Object.fromEntries(
  CURRICULUM.map(({ id, sourceRefs = [] }) => [id, [...sourceRefs]])
);

const NOTES_THEORY =
  'Portal theory follows the Mathematik lecture and Kleinübung line. Primary refs per concept are normalized from curriculum sourceRefs.';
const NOTES_GRAPH =
  'Interactive graphs visualize course-faithful function, optimization, and geometry reading; they are portal renderings, not fixed scans from the PDFs.';
const NOTES_INTUITION = 'Compressed recall layer for the closed learning loop.';
const NOTES_STEP =
  'Step-problem Schnelltest items synthesize recurring Kleinübung families for stable learner logging.';
const NOTES_TASKS = 'Guided Aufgaben remain source-distilled from lecture and Kleinübung structures.';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: MATHEMATIK_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_THEORY,
    theory: NOTES_THEORY,
    formulas: 'Notation aligned with the Mathematik course line; rendered in portal-native formula cards.',
    tasks: NOTES_TASKS,
    intuition: NOTES_INTUITION,
    graph: NOTES_GRAPH,
    stepProblems: NOTES_STEP
  }
});

export const FULL_EXAM_PROVENANCE = Object.fromEntries(
  Object.keys(FULL_EXAMS).map((examId) => [
    examId,
    createProvenance({
      source_status: 'platform-added-drill',
      source_refs: [],
      notes:
        'Portal-authored Übungsklausur-Simulation aligned to Mathematik course topics; not a verbatim archived exam.'
    })
  ])
);

export function buildMathematikModeIndex() {
  return buildConceptModeIndex({
    chapters: CHAPTERS,
    contentById: CONTENT,
    stepProblemsById: STEP_PROBLEMS,
    graphConcepts: GRAPH_CONCEPTS,
    storageKeys: {
      progressKey: PROGRESS_KEY,
      srsKey: SRS_KEY,
      questionStatsKey: QUESTION_STATS_KEY,
      fullExamStateKey: FE_STATE_KEY
    },
    fullExamDocumentIds: Object.keys(FULL_EXAM_PROVENANCE),
    theoryEncoding: 'html_fragment',
    flags: {
      quickExam: true,
      embeddedExamCanvases: false,
      masteryChecklist: true,
      supplementalTasksFromTheory: true
    }
  });
}

export const MATHEMATIK_MODE_INDEX = buildMathematikModeIndex();

export const MATHEMATIK_CONTENT_MANIFEST_VERSION = '2026.2';

export function getMathematikContentManifestBridgePayload() {
  return buildContentManifestBridgePayload({
    schema: 'mathematik.contentManifest',
    version: MATHEMATIK_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: MODULE_SLUG,
    chapters: CHAPTERS,
    modeIndex: MATHEMATIK_MODE_INDEX,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    fullExamProvenance: FULL_EXAM_PROVENANCE
  });
}

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}

export function getConceptModeIndex(conceptId) {
  return MATHEMATIK_MODE_INDEX[conceptId] || null;
}
