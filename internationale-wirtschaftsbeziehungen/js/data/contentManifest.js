// ============================================================
// CONTENT MANIFEST — Internationale Wirtschaftsbeziehungen (IWB)
// Provenance + mode index; parity with curated portal modules.
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

const MODULE_SLUG = 'internationale-wirtschaftsbeziehungen';

/**
 * Primary refs: paths relative to
 *   source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/
 * Curation: docs/audits/iwb-provenance-curation-pass-1.md (pdftotext verification of Vorlesung n ↔ IntWBn.pdf).
 * File-level only; no slide anchors.
 */
const IWB_PRIMARY_REFS_CURATED = {
  handelsfakten: [
    'Vorlesungsfolien/IntWB1.pdf',
    'Zusätzliche_Literatur/World_Trade_Statistical_Review_2023.pdf'
  ],
  ricardo: ['Vorlesungsfolien/IntWB2.pdf'],
  heckscher_ohlin: ['Vorlesungsfolien/IntWB3.pdf'],
  verteilung_handel: ['Vorlesungsfolien/IntWB3.pdf'],
  krugman: [
    'Vorlesungsfolien/IntWB4.pdf',
    'Zusätzliche_Literatur/Brülhart_WE2009.pdf'
  ],
  gravitation: ['Vorlesungsfolien/IntWB4.pdf'],
  tarifmodell: ['Vorlesungsfolien/IntWB5.pdf'],
  quoten_sanktionen: ['Vorlesungsfolien/IntWB6.pdf'],
  wto_integration: ['Vorlesungsfolien/IntWB7.pdf'],
  wechselkurssysteme: ['Vorlesungsfolien/IntWB8.pdf'],
  zinsparitaet: ['Vorlesungsfolien/IntWB9.pdf'],
  kaufkraftparitaet: ['Vorlesungsfolien/IntWB9.pdf'],
  monetaerer_ansatz: ['Vorlesungsfolien/IntWB10.pdf'],
  overshooting: ['Vorlesungsfolien/IntWB11.pdf'],
  trilemma: ['Vorlesungsfolien/IntWB12.pdf'],
  balassa_samuelson: ['Vorlesungsfolien/IntWB12.pdf']
};

export const IWB_CONCEPT_PRIMARY_REFS = Object.fromEntries(
  CHAPTERS.map(({ id }) => [
    id,
    IWB_PRIMARY_REFS_CURATED[id] ? [...IWB_PRIMARY_REFS_CURATED[id]] : []
  ])
);

const NOTES_THEORY =
  'Portal theory is source-distilled HTML; primary refs point to course VL PDFs under source-materials (file-level).';
const NOTES_GRAPH =
  'Interactive graphs are platform illustration; not reproductions of a specific slide figure.';
const NOTES_INTUITION =
  'Intuition cards synthesize exam-style patterns; not verbatim from VL PDFs.';
const NOTES_STEP =
  'Step drills are platform-authored practice; VL refs indicate topic context only.';
const NOTES_TASKS =
  'Embedded tasks follow portal authoring; see theory refs for course alignment.';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: IWB_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_THEORY,
    theory: NOTES_THEORY,
    formulas: NOTES_THEORY,
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
        'Authored Probeklausur-style sets for IWB; no archived course exam PDF found under GIWB source-materials (see iwb-provenance-curation-pass-1.md).'
    })
  ])
);

export function buildIwbModeIndex() {
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

export const IWB_MODE_INDEX = buildIwbModeIndex();
export const IWB_CONTENT_MANIFEST_VERSION = '2026.1';

export function getIwbContentManifestBridgePayload() {
  return buildContentManifestBridgePayload({
    schema: 'iwb.contentManifest',
    version: IWB_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: MODULE_SLUG,
    chapters: CHAPTERS,
    modeIndex: IWB_MODE_INDEX,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    fullExamProvenance: FULL_EXAM_PROVENANCE
  });
}

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}

export function getConceptModeIndex(conceptId) {
  return IWB_MODE_INDEX[conceptId] || null;
}
