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

const MODULE_SLUG = 'statistik';

/**
 * Primary PDF anchors per concept: empty until course maps attach stable archive paths.
 * Layer notes in PROVENANCE_BY_CONCEPT still disclose source-distilled vs platform drill.
 */
export const STATISTIK_CONCEPT_PRIMARY_REFS = Object.fromEntries(CHAPTERS.map(({ id }) => [id, []]));

const NOTES_THEORY =
  'Portal theory follows the Statistik course line; wording is authored for the portal, not a verbatim lecture paste. Canonical VL/PDF paths are not yet attached per concept in this manifest — see migration audit.';
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

export const FULL_EXAM_PROVENANCE = {
  klausur_2024: createProvenance({
    source_status: 'platform-added-drill',
    source_refs: [],
    notes:
      'Probeklausur authored for portal practice (deskriptive Kennzahlen, Hypothesentest); not a verbatim archive paper. Attach course PDF refs when stable.'
  })
};

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
