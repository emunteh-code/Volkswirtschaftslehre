// ============================================================
// CONTENT MANIFEST — Makroökonomik II (platform backbone)
// Provenance + mode index. Shared builders: assets/js/portal-core/data/*
// See docs/audits/makro2-migration.md
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

const MODULE_SLUG = 'makro2';

/**
 * Primary anchors per concept mapped from assets/js/module-content.js (makro2 roadmap).
 * Keep only paths that are explicitly present in the curated source map.
 */
export const MAKRO2_CONCEPT_PRIMARY_REFS = {
  zahlungsbilanz: ['coursework_text/Tutorienblatt_1.txt'],
  wechselkurs: ['coursework_text/Uebungsblatt_1.txt', 'coursework_text/Tutorienblatt_1.txt'],
  kaufkraftparitaet: ['coursework_text/Uebungsblatt_1.txt', 'coursework_text/Tutorienblatt_1.txt'],
  zinsparitaet: ['coursework_text/Uebungsblatt_1.txt', 'coursework_text/Tutorienblatt_1.txt'],
  offene_is: ['coursework_text/Uebungsblatt_2.txt', 'coursework_text/Tutorienblatt_2.txt'],
  nettoexporte: ['coursework_text/Uebungsblatt_2.txt', 'coursework_text/Tutorienblatt_2.txt'],
  marshall_lerner: ['coursework_text/Uebungsblatt_2.txt', 'coursework_text/Tutorienblatt_2.txt'],
  geldmengen: [],
  mundell_fleming: ['coursework_text/Uebungsblatt_3.txt'],
  wk_regime: ['coursework_text/Tutorienblatt_3.txt', 'coursework_text/Uebungsblatt_3.txt', 'coursework_text/Uebungsblatt_4.txt'],
  wk_krisen: ['coursework_text/Uebungsblatt_4.txt'],
  phillipskurve: ['coursework_text/Tutorienblatt_4.txt', 'coursework_text/Uebungsblatt_5.txt'],
  zeitinkonsistenz: ['coursework_text/Tutorienblatt_4.txt', 'coursework_text/Uebungsblatt_5.txt'],
  barro_gordon: ['coursework_text/Tutorienblatt_4.txt', 'coursework_text/Uebungsblatt_5.txt'],
  taylor_regel: ['coursework_text/Tutorienblatt_5.txt', 'coursework_text/Uebungsblatt_7.txt'],
  aggregierte_pf: ['coursework_text/Tutorienblatt_5.txt', 'coursework_text/Uebungsblatt_8.txt'],
  solow_basis: ['coursework_text/Tutorienblatt_6.txt', 'coursework_text/Uebungsblatt_9.txt'],
  tech_fortschritt: ['coursework_text/Uebungsblatt_10.txt', 'coursework_text/Tutorienblatt_6.txt'],
  schuldenquote: ['coursework_text/Uebungsblatt_6.txt']
};

const NOTES_THEORY =
  'Portal theory follows the Makro II line (syllabus, Übungen, Tutorien). Per-concept anchors are mapped from the curated module-content roadmap where explicit sources exist.';
const NOTES_GRAPH =
  'Interactive graphs for exam-style intuition; not a single fixed course figure.';
const NOTES_INTUITION = 'Compressed recall layer for the closed learning loop.';
const NOTES_STEP =
  'Step-problem Schnelltest items; stable options.problemId / stepId where present.';
const NOTES_TASKS = 'Aufgaben including coursework-linked practice where defined.';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: MAKRO2_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_THEORY,
    theory: NOTES_THEORY,
    formulas: 'Notation aligned with Makro II materials; tab layout is portal-native.',
    tasks: NOTES_TASKS,
    intuition: NOTES_INTUITION,
    graph: NOTES_GRAPH,
    stepProblems: NOTES_STEP
  }
});

const EXAM_NOTE =
  'Portal-authored probeklausur for Makro II practice; topic mix follows module scope, not a verbatim archival scan.';

export const FULL_EXAM_PROVENANCE = {
  probeklausur_1: createProvenance({
    source_status: 'platform-added-drill',
    source_refs: [],
    notes: `${EXAM_NOTE} Set I: offene Volkswirtschaft & Wechselkursmechanik.`
  }),
  probeklausur_2: createProvenance({
    source_status: 'platform-added-drill',
    source_refs: [],
    notes: `${EXAM_NOTE} Set II.`
  }),
  probeklausur_3: createProvenance({
    source_status: 'platform-added-drill',
    source_refs: [],
    notes: `${EXAM_NOTE} Set III.`
  })
};

export function buildMakro2ModeIndex() {
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

export const MAKRO2_MODE_INDEX = buildMakro2ModeIndex();

export const MAKRO2_CONTENT_MANIFEST_VERSION = '2026.1-pilot';

export function getMakro2PilotBridgePayload() {
  return buildContentManifestBridgePayload({
    schema: 'makro2.contentManifest',
    version: MAKRO2_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: MODULE_SLUG,
    chapters: CHAPTERS,
    modeIndex: MAKRO2_MODE_INDEX,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    fullExamProvenance: FULL_EXAM_PROVENANCE
  });
}

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}

export function getConceptModeIndex(conceptId) {
  return MAKRO2_MODE_INDEX[conceptId] || null;
}
