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
 * Primary anchors — paths relative to:
 *   source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/
 * Curated in docs/audits/oekonometrie-provenance-curation-pass-1.md.
 * Some R filenames use U+F704 as a legacy placeholder for an umlaut (on-disk in this repo).
 */
const OE_PUA = '\uEF84';

const OE_LEC = 'Lecture_Einführung_in_die_Ökonometrie';
const OE_EXR = 'Exercises_Einführung_in_die_Ökonometrie_Übung/R';
const OE_TUTR = 'Tutorial_Einführung_in_die_Ökonometrie_Tutorium/R';

const VL = `${OE_LEC}/Einf_WiSe2024.pdf`;
const FORM = `${OE_LEC}/Formelsammlung.pdf`;
const TABLES = `${OE_LEC}/Statistical_Tables.pdf`;

const R01 = `${OE_EXR}/01_Das_lineare_Modell.R`;
const R02 = `${OE_EXR}/02_Annahmen.R`;
const R03 = `${OE_EXR}/03_Eigenschaften.R`;
const R04 = `${OE_EXR}/04_Sch${OE_PUA}tzen_der_Fehlervarianz.R`;
const R05 = `${OE_EXR}/05_Vorhersage.R`;
const R06 = `${OE_EXR}/06_Bestimmtheitsmass.R`;
const R07 = `${OE_EXR}/07_Multikollinearit${OE_PUA}t.R`;
const R09 = `${OE_EXR}/09_Intervallsch${OE_PUA}tzung_Hypothesentests.R`;
const R10 = `${OE_EXR}/10_Asymptotische_Eigenschaften.R`;
const R11 = `${OE_EXR}/11_Heteroskedastizit${OE_PUA}t.R`;
const R12 = `${OE_EXR}/12_Autokorrelation.R`;
const R_ALG = `${OE_EXR}/Wiederholung_Lineare_Algebra.R`;
const R_STAT = `${OE_EXR}/Wiederholung_Statistik.R`;
const TUT3 = `${OE_TUTR}/Tutorium_3.R`;
const TUT7 = `${OE_TUTR}/Tutorium_7.R`;
const TUT10 = `${OE_TUTR}/Tutorium_10.R`;

const OEKONOMETRIE_PRIMARY_REFS_CURATED = {
  matrix_notation: [VL, R_ALG, R01],
  sample_moments: [VL, R_STAT],
  distributions_df: [VL, R09, FORM, TABLES],
  model_objects: [VL, R01],
  ols_objective: [VL, R01],
  normal_equations: [VL, R01],
  partial_effects: [VL, R01],
  functional_forms: [VL, R01],
  no_perfect_multicollinearity: [VL, R02],
  exogeneity: [VL, R02],
  endogeneity_ovb: [VL, R02],
  unbiasedness: [VL, R03],
  gauss_markov: [VL, R03],
  consistency: [VL, R03],
  error_variance: [VL, R04],
  covariance_matrix: [VL, R04, FORM],
  prediction: [VL, R05],
  prediction_intervals: [VL, R05, TUT3],
  r_squared: [VL, R06],
  t_test: [VL, R09, FORM, TABLES],
  f_test: [VL, R09, FORM, TABLES],
  confidence_intervals: [VL, R09, FORM, TABLES],
  normal_linear_model_mle: [VL, FORM],
  linear_restrictions_ur: [VL, R09, FORM],
  asymptotic_normality: [VL, R10],
  monte_carlo: [VL, R10],
  vif_collinearity: [VL, R07],
  fwl_partial_regression: [VL, R07, TUT7],
  heteroskedasticity: [VL, R11, TUT10],
  robust_gls: [VL, R11, TUT10],
  autocorrelation: [VL, R12],
  hac_newey_west: [VL, R11, R12]
};

export const OEKONOMETRIE_CONCEPT_PRIMARY_REFS = Object.fromEntries(
  CHAPTERS.map(({ id }) => [
    id,
    OEKONOMETRIE_PRIMARY_REFS_CURATED[id] ? [...OEKONOMETRIE_PRIMARY_REFS_CURATED[id]] : []
  ])
);

const NOTES_THEORY =
  'Concept content is source-distilled from the module curriculum map; wording is portal-authored. File-level primary anchors: docs/audits/oekonometrie-provenance-curation-pass-1.md.';
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
