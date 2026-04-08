// ============================================================
// CONTENT MANIFEST — Finanzwirtschaft (platform backbone)
// Provenance + mode index for rollout normalization.
// ============================================================

import { createProvenance } from '../../../assets/js/portal-core/data/provenance.js';
import { buildProvenanceByConceptFromPrimaryRefs } from '../../../assets/js/portal-core/data/learningObjectNormalize.js';
import { buildConceptModeIndex } from '../../../assets/js/portal-core/data/modeIndex.js';
import { buildContentManifestBridgePayload } from '../../../assets/js/portal-core/data/contentManifestAdapters.js';
import { CHAPTERS, CONTENT } from './chapters.js';
import { STEP_PROBLEMS } from './stepProblems.js';
import { INTUITION } from './intuition.js';
import { GRAPH_CONCEPTS } from '../ui/graphPanel.js';
import { SRS_KEY, PROGRESS_KEY, QUESTION_STATS_KEY, FE_STATE_KEY } from './srsConfig.js';
import { COURSE_CONFIG } from './courseConfig.js';
import { FULL_EXAMS } from './fullExams.js';

const MODULE_SLUG = 'finanzwirtschaft';

/**
 * Primary VL PDF anchors — paths relative to:
 *   source-materials/Finanzwirtschaft des Unternehmens/Finanzwirtschaft des Unternehmens/
 * Curated in docs/audits/finanzwirtschaft-provenance-curation-pass-1.md.
 * No slide/page anchors; file-level only.
 */
const FINANZWIRTSCHAFT_PRIMARY_REFS_CURATED = {
  finanz_denkweise: ['V1_StudIP.pdf'],
  liquiditaetsplanung: ['V2_StudIP.pdf'],
  kapitalmarkt_bewertung: ['V2_StudIP.pdf', 'V3_StudIP.pdf'],
  institutionen_marktunvollkommenheit: ['V2_StudIP.pdf', 'V3_StudIP.pdf'],
  intertemporale_wahl: ['V3_StudIP.pdf', 'V4_StudIP.pdf'],
  kapitalwert_fisher: ['V5_StudIP.pdf'],
  auf_abzinsen: ['V6_StudIP.pdf'],
  renten_endwert: ['V6_StudIP.pdf', 'V7_StudIP.pdf'],
  izf_kapitalwertfunktion: ['V8_StudIP.pdf', 'V9_StudIP.pdf'],
  izf_grenzen: ['V8_StudIP.pdf', 'V9_StudIP.pdf'],
  unsicherheit: ['V9_StudIP.pdf'],
  bezugsrecht: ['V10_StudIP.pdf'],
  eigenkapitalkosten: ['V10_StudIP.pdf', 'V11_StudIP.pdf'],
  fremdkapitalkosten: ['V11_StudIP.pdf'],
  wacc_leverage: ['V11_StudIP.pdf', 'V12_StudIP.pdf'],
  modigliani_miller: ['V12_StudIP.pdf']
};

export const FINANZWIRTSCHAFT_CONCEPT_PRIMARY_REFS = Object.fromEntries(
  CHAPTERS.map(({ id }) => [
    id,
    FINANZWIRTSCHAFT_PRIMARY_REFS_CURATED[id] ? [...FINANZWIRTSCHAFT_PRIMARY_REFS_CURATED[id]] : []
  ])
);

const NOTES_THEORY =
  'Finanzwirtschaft content is source-distilled and decision-oriented (Zeitwert, Kapitalwert, Risiko, Finanzierung).';
const NOTES_INTUITION = 'Intuition layer supports exam retrieval for finance decision logic.';
const NOTES_GRAPH = 'Graph support is concept-selective and preserved where module-specific visuals exist.';
const NOTES_STEP = 'Step drills are platform-added practice objects aligned to finance exam patterns.';
const NOTES_TASKS = 'Tasks preserve module-specific finance sequencing and method emphasis.';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: FINANZWIRTSCHAFT_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_THEORY,
    theory: NOTES_THEORY,
    formulas: 'Formula layer captures finance valuation and decision anchors.',
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
        'Full exams are module-aligned drill objects; no canonical source-sheet anchors attached in rollout pass 1.'
    })
  ])
);

export function buildFinanzwirtschaftModeIndex() {
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

export const FINANZWIRTSCHAFT_MODE_INDEX = buildFinanzwirtschaftModeIndex();
export const FINANZWIRTSCHAFT_CONTENT_MANIFEST_VERSION = '2026.1';

export function getFinanzwirtschaftContentManifestBridgePayload() {
  return buildContentManifestBridgePayload({
    schema: 'finanzwirtschaft.contentManifest',
    version: FINANZWIRTSCHAFT_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: MODULE_SLUG,
    chapters: CHAPTERS,
    modeIndex: FINANZWIRTSCHAFT_MODE_INDEX,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    fullExamProvenance: FULL_EXAM_PROVENANCE
  });
}
