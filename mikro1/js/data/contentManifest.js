// ============================================================
// CONTENT MANIFEST — Mikroökonomik I (benchmark-compatible)
// Canonical manifest/provenance bridge without flattening renderer strengths.
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

const MODULE_SLUG = 'mikro1';

/**
 * Primary refs are repo-relative paths under:
 *   source-materials/Mikroökonomik I/Mikroökonomik I/
 * Curated in provenance curation pass 1 from Vorlesungsfolien + Vorlesungsplanung (SS 2025).
 * Concepts without a non-ambiguous match in those materials stay empty (see audit doc).
 */
const MIKRO1_PRIMARY_REFS_CURATED = {
  kmm: ['Vorlesungsfolien/Mikro_1_VL_1.pdf'],
  budget: ['Vorlesungsfolien/Mikro_1_VL_1.pdf'],
  praeferenz: ['Vorlesungsfolien/Mikro_1_VL_2.pdf'],
  indiff: ['Vorlesungsfolien/Mikro_1_VL_2.pdf'],
  ordinal: ['Vorlesungsfolien/Mikro_1_VL_2.pdf'],
  grs: ['Vorlesungsfolien/Mikro_1_VL_2.pdf'],
  lagrange: ['Vorlesungsfolien/Mikro_1_VL_2.pdf', 'Vorlesungsfolien/Mikro_1_VL_4.pdf'],
  cobbd: ['Vorlesungsfolien/Mikro_1_VL_4.pdf'],
  ces_u: ['Vorlesungsfolien/Mikro_1_VL_3.pdf', 'Vorlesungsfolien/Mikro_1_VL_4.pdf'],
  homothet: ['Vorlesungsfolien/Mikro_1_VL_3.pdf'],
  hausopt: ['Vorlesungsfolien/Mikro_1_VL_3.pdf', 'Vorlesungsfolien/Mikro_1_VL_4.pdf'],
  marshall: ['Vorlesungsfolien/Mikro_1_VL_4.pdf'],
  elast: [
    'Vorlesungsfolien/Mikro_1_VL_5.pdf',
    'Vorlesungsfolien/Mikro_1_VL_5_EmpirischeElastizitaeten.pdf'
  ],
  normal: ['Vorlesungsfolien/Mikro_1_VL_5.pdf'],
  hicks: ['Vorlesungsfolien/Mikro_1_VL_6.pdf'],
  ausgaben: ['Vorlesungsfolien/Mikro_1_VL_6.pdf'],
  shephard: ['Vorlesungsfolien/Mikro_1_VL_6.pdf'],
  indnutzen: ['Vorlesungsfolien/Mikro_1_VL_6.pdf'],
  lambda: ['Vorlesungsfolien/Mikro_1_VL_2.pdf', 'Vorlesungsfolien/Mikro_1_VL_4.pdf'],
  slutsky: ['Vorlesungsfolien/Mikro_1_VL_7.pdf', 'Vorlesungsfolien/Mikro_1_VL_8.pdf'],
  anfang: ['Vorlesungsfolien/Mikro_1_VL_8.pdf'],
  pkomp: ['Vorlesungsfolien/Mikro_1_VL_8.pdf'],
  arbeit: ['Vorlesungsfolien/Mikro_1_VL_9.pdf'],
  cv_ev: ['Vorlesungsfolien/Mikro_1_VL_10.pdf'],
  produktion: ['Vorlesungsfolien/Mikro_1_VL_11.pdf'],
  skalener: ['Vorlesungsfolien/Mikro_1_VL_11.pdf'],
  grts: ['Vorlesungsfolien/Mikro_1_VL_12.pdf'],
  kosten: ['Vorlesungsfolien/Mikro_1_VL_12.pdf'],
  gewinn: ['Vorlesungsfolien/Mikro_1_VL_13.pdf', 'Vorlesungsfolien/Mikro_1_VL_14.pdf'],
  gk_dk: ['Vorlesungsfolien/Mikro_1_VL_15.pdf'],
  markt: ['Vorlesungsfolien/Mikro_1_VL_16.pdf'],
  monopol: ['Vorlesungsfolien/Mikro_1_VL_17.pdf', 'Vorlesungsfolien/Mikro_1_VL_18.pdf']
};

export const MIKRO1_CONCEPT_PRIMARY_REFS = Object.fromEntries(
  CHAPTERS.map(({ id }) => [id, MIKRO1_PRIMARY_REFS_CURATED[id] ? [...MIKRO1_PRIMARY_REFS_CURATED[id]] : []])
);

const NOTES_THEORY =
  'Mikro I theory is source-distilled and rendered through a custom semantic surface with exam-transfer enrichment. Primary VL anchors per concept (file-level): docs/audits/mikro1-provenance-curation-pass-1.md.';
const NOTES_GRAPH =
  'Interactive graph layer is a benchmark strength of this module and remains module-specific beyond baseline graph support.';
const NOTES_INTUITION =
  'Intuition layer includes custom exam-pattern synthesis and semanticized recall copy.';
const NOTES_STEP =
  'Step-problem drills are integrated with custom renderer-enhanced practice/exam transfer behavior.';
const NOTES_TASKS =
  'Task handling remains richer than baseline modules (guided tasks + compact transfer prompts).';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: MIKRO1_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_THEORY,
    theory: NOTES_THEORY,
    formulas: 'Notation remains semantic-math enhanced by the Mikro I renderer pipeline.',
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
        'Probeklausur set is authored benchmark drill content aligned to Mikro I exam style; not a verbatim archived exam.'
    })
  ])
);

export function buildMikro1ModeIndex() {
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

export const MIKRO1_MODE_INDEX = buildMikro1ModeIndex();
export const MIKRO1_CONTENT_MANIFEST_VERSION = '2026.1';

export function getMikro1ContentManifestBridgePayload() {
  return buildContentManifestBridgePayload({
    schema: 'mikro1.contentManifest',
    version: MIKRO1_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: MODULE_SLUG,
    chapters: CHAPTERS,
    modeIndex: MIKRO1_MODE_INDEX,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    fullExamProvenance: FULL_EXAM_PROVENANCE
  });
}

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}

export function getConceptModeIndex(conceptId) {
  return MIKRO1_MODE_INDEX[conceptId] || null;
}
