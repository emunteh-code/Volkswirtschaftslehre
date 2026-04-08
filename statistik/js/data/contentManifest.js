// ============================================================
// CONTENT MANIFEST — Statistik (platform backbone)
// Provenance + mode index. Shared builders: assets/js/portal-core/data/*
// See docs/audits/statistik-migration.md
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

const MODULE_SLUG = 'statistik';

/**
 * Primary VL / course PDF anchors — paths relative to:
 *   source-materials/Statistik/Statistik/
 * Curated in docs/audits/statistik-provenance-curation-pass-1.md.
 */
const STATISTIK_PRIMARY_REFS_CURATED = {
  deskriptiv: [
    'Vorlesungen/VL_02_-_Deskriptive_Stat_1.1-1.2.pdf',
    'Vorlesungen/VL_03_-_Deskriptive_Stat_1.3-1.6.pdf'
  ],
  bivariat: ['Vorlesungen/VL_04_-_Deskriptive_Stat_2.pdf'],
  wahrscheinlichkeit: ['Vorlesungen/VL_05_-_Grundlagen_2.pdf'],
  verteilungen: [
    'Vorlesungen/VL_06_-_Grundlagen_3.1-3.pdf.pdf',
    'Vorlesungen/VL_07_-_Grundlagen_3.3.0-3.3.4.pdf',
    'Vorlesungen/VL_07_VL_08_Einschub.pdf',
    'Vorlesungen/VL_08_-_Grundlagen_3.3.5-3.3.6.pdf'
  ],
  schaetzen_verfahren: ['Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf'],
  schaetzen_eigenschaften_intervalle: [
    'Vorlesungen/VL_09_-_Induktive_Statistik_1.pdf',
    'Vorlesungen/VL_10_-_Induktive_Statistik_2.pdf'
  ],
  testen: [
    'Vorlesungen/VL_10_-_Induktive_Statistik_3.0-3.1.pdf',
    'Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf'
  ],
  regression_schaetzung_inferenz: [
    'Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf',
    'Vorlesungen/VL_13_-_Stat_Modellierung_1.5-1.8.pdf',
    'Vorlesungen/VL_14_-_Stat_Modellierung_2.pdf'
  ],
  regression_diagnostik_prognose: [
    'Vorlesungen/VL_12_-_Stat_Modellierung_1.0-1.4.pdf',
    'Vorlesungen/VL_13_-_Stat_Modellierung_1.5-1.8.pdf',
    'Vorlesungen/VL_14_-_Stat_Modellierung_2.pdf'
  ],
  rlab: ['R-Vorkurs.pdf'],
  z_test: [
    'Vorlesungen/VL_10_-_Induktive_Statistik_3.0-3.1.pdf',
    'Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf'
  ],
  zwei_stichproben: [
    'Vorlesungen/VL_11_-_Zwei-SP_t-Test.pdf',
    'Tutorien/Tutorium_11/Tutorium11.pdf'
  ],
  varianzanalyse: [
    'Vorlesungen/VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf',
    'Tutorien/Tutorium_11/Tutorium11.pdf'
  ],
  nichtparametrisch: []
};

export const STATISTIK_CONCEPT_PRIMARY_REFS = Object.fromEntries(
  CHAPTERS.map(({ id }) => [
    id,
    STATISTIK_PRIMARY_REFS_CURATED[id] ? [...STATISTIK_PRIMARY_REFS_CURATED[id]] : []
  ])
);

const NOTES_THEORY =
  'Portal theory follows the Statistik course line; wording is authored for the portal, not a verbatim lecture paste. Primary VL paths per concept: docs/audits/statistik-provenance-curation-pass-1.md (file-level only).';
const NOTES_GRAPH =
  'Graph panel: legacy Mikro-style stubs remain in graphPanel.js for this module; interactive binding for Statistik concepts is not asserted here.';
const NOTES_INTUITION = 'Compressed recall layer (Kernidee / Muster) for the closed learning loop.';
const NOTES_STEP =
  'Step-problem Schnelltest items with stable options for backbone logging when the module opts in.';
const NOTES_TASKS = 'Authored Aufgaben for guided practice.';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: STATISTIK_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_THEORY,
    theory: NOTES_THEORY,
    formulas: 'Notation aligned with the Statistik line; rearranged for Formeln tab.',
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
        'Portal-authored probeklausur / transfer drill aligned to Statistik module topics; not a verbatim archived exam. See docs/audits/statistik-second-wave-excellence-pass-1.md.'
    })
  ])
);

export function buildStatistikModeIndex() {
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

export const STATISTIK_MODE_INDEX = buildStatistikModeIndex();

export const STATISTIK_CONTENT_MANIFEST_VERSION = '2026.1';

export function getStatistikContentManifestBridgePayload() {
  return buildContentManifestBridgePayload({
    schema: 'statistik.contentManifest',
    version: STATISTIK_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: MODULE_SLUG,
    chapters: CHAPTERS,
    modeIndex: STATISTIK_MODE_INDEX,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    fullExamProvenance: FULL_EXAM_PROVENANCE
  });
}

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}

export function getConceptModeIndex(conceptId) {
  return STATISTIK_MODE_INDEX[conceptId] || null;
}
