// ============================================================
// CONTENT MANIFEST — Ökonometrie (platform backbone)
// Provenance + mode index with explicit curriculum/R adapter notes.
// ============================================================

import { createProvenance } from '../../../assets/js/portal-core/data/provenance.js';
import { buildProvenanceByConceptFromPrimaryRefs } from '../../../assets/js/portal-core/data/learningObjectNormalize.js';
import { buildConceptModeIndex } from '../../../assets/js/portal-core/data/modeIndex.js';
import { buildContentManifestBridgePayload } from '../../../assets/js/portal-core/data/contentManifestAdapters.js';
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

const MODULE_SLUG = 'oekonometrie';

/**
 * Source PDF anchors are not attached per concept yet for this module.
 * We keep references empty rather than fabricating paths.
 */
export const OEKONOMETRIE_CONCEPT_PRIMARY_REFS = Object.fromEntries(CHAPTERS.map(({ id }) => [id, []]));

const NOTES_THEORY =
  'Concept content is source-distilled from the module curriculum map; wording is portal-authored and follows the structured sequence of the Oekonometrie line.';
const NOTES_GRAPH =
  'Interactive econometrics visualizations (estimation, diagnostics, asymptotics) are platform-added graph drills aligned to exam reasoning.';
const NOTES_INTUITION = 'Compressed recall layer derived from the module chapter narrative and exam patterns.';
const NOTES_STEP =
  'Step-problem items are generated from curriculum tasks to preserve the module-specific progression and stable IDs.';
const NOTES_TASKS =
  'Task flow keeps the chapter-specific curriculum structure (including model interpretation and diagnostics progression).';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: OEKONOMETRIE_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_THEORY,
    theory: NOTES_THEORY,
    formulas: 'Notation is aligned to the module line and normalized for Formula tab rendering.',
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
        'Probeklausur is portal-authored drill content aligned to Oekonometrie exercise/exam style; not a verbatim archived exam sheet.'
    })
  ])
);

export function buildOekonometrieModeIndex() {
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

export const OEKONOMETRIE_MODE_INDEX = buildOekonometrieModeIndex();
export const OEKONOMETRIE_CONTENT_MANIFEST_VERSION = '2026.1';

export function getOekonometrieContentManifestBridgePayload() {
  return buildContentManifestBridgePayload({
    schema: 'oekonometrie.contentManifest',
    version: OEKONOMETRIE_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: MODULE_SLUG,
    chapters: CHAPTERS,
    modeIndex: OEKONOMETRIE_MODE_INDEX,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    fullExamProvenance: FULL_EXAM_PROVENANCE
  });
}

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}

export function getConceptModeIndex(conceptId) {
  return OEKONOMETRIE_MODE_INDEX[conceptId] || null;
}
