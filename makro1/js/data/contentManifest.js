// ============================================================
// CONTENT MANIFEST — Makroökonomik I (pilot)
// Provenance + mode index for canonical schema alignment.
// Shared builders: assets/js/portal-core/data/*
// See docs/audits/makro1-pilot-migration.md
// ============================================================

import { createSourceReference, createProvenance } from '../../../assets/js/portal-core/data/provenance.js';
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

const MODULE_SLUG = 'makro1';

/**
 * @param {string} path
 * @param {string} [title]
 */
export function makro1SourceRef(path, title = '') {
  return createSourceReference(MODULE_SLUG, path, title);
}

/**
 * Primary lecture / summary anchors per concept (course-map pilot).
 * Maps to roadmap ordering in module-content.js for makro1.
 */
export const MAKRO1_CONCEPT_PRIMARY_REFS = {
  makro_rahmen: ['Vorlesungen/VL_1.pdf', 'Zusammenfassungen/Makro I VL1.pdf'],
  vgr: ['Vorlesungen/VL_2.pdf', 'Zusammenfassungen/Makro I VL2.pdf'],
  guetermarkt: ['Vorlesungen/VL_3.pdf', 'Zusammenfassungen/Makro I VL3.pdf', 'Uebungen/Übung3.pdf'],
  multiplikator: ['Vorlesungen/VL_3.pdf', 'Zusammenfassungen/Makro I VL3.pdf', 'Uebungen/Übung3.pdf', 'Tutorium/Tutorienblatt-3.pdf'],
  geldnachfrage: ['Vorlesungen/VL_4.pdf', 'Zusammenfassungen/Makro I VL4.pdf'],
  banken: ['Vorlesungen/VL_4.pdf', 'Zusammenfassungen/Makro I VL4.pdf', 'Tutorium/Tutorium4.pdf'],
  islm: ['Vorlesungen/VL_5.pdf', 'Zusammenfassungen/Makro I VL5.pdf'],
  politikmix: ['Vorlesungen/VL_5.pdf', 'Zusammenfassungen/Makro I VL5.pdf', 'Uebungen/Uebung5.pdf'],
  realzins: ['Vorlesungen/Kap6.pdf', 'Zusammenfassungen/Makro I VL6.pdf'],
  arbeitsmarkt: ['Vorlesungen/VL_7.pdf', 'Zusammenfassungen/Makro I VL7.pdf'],
  phillips: ['Vorlesungen/VL_8.pdf', 'Zusammenfassungen/Makro I VL8.pdf', 'Tutorium/Tutorienblatt_6_Makro_1.pdf'],
  islmpc: ['Vorlesungen/VL_8.pdf', 'Zusammenfassungen/Makro I VL8.pdf'],
  erwartungen: ['Vorlesungen/VL_8.pdf', 'Zusammenfassungen/Makro I VL8.pdf']
};

const NOTES_THEORY =
  'Portal theory blocks follow the Makro I course line (Vorlesungs-/Übungslogik); wording is authored for the portal, not a verbatim PDF paste.';
const NOTES_GRAPH =
  'Interactive graph: parameter sliders for exam-style reasoning; not a reproduction of a single course figure.';
const NOTES_INTUITION = 'Compressed recall layer (Kernidee / Muster) for the closed learning loop.';
const NOTES_STEP =
  'Step-problem quick-exam items with stable options.problemId / stepId for future mistake routing.';
const NOTES_TASKS = 'Authored Aufgaben for guided practice; may synthesize several Übungsstile.';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: MAKRO1_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_THEORY,
    theory: NOTES_THEORY,
    formulas: 'Notation aligned with VL/Zusammenfassungen; rearranged for Formeln tab.',
    tasks: NOTES_TASKS,
    intuition: NOTES_INTUITION,
    graph: NOTES_GRAPH,
    stepProblems: NOTES_STEP
  }
});

/** Module-level assessment objects (full exams live in fullExams.js). */
export const FULL_EXAM_PROVENANCE = {
  probeklausur_1: createProvenance({
    source_status: 'platform-added-drill',
    source_refs: [
      makro1SourceRef('Klausur_2018_Haupttermin.pdf', 'Archiv-Stil'),
      makro1SourceRef('Klausur_2022_Haupttermin.pdf', 'Archiv-Stil')
    ],
    notes:
      'Probeklausur authored for portal practice; topic mix aligned with Makro I archive, not a single pasted paper.'
  }),
  probeklausur_2: createProvenance({
    source_status: 'platform-added-drill',
    source_refs: [
      makro1SourceRef('Klausur_2018_Haupttermin.pdf', 'Archiv-Stil'),
      makro1SourceRef('Klausur_2022_Haupttermin.pdf', 'Archiv-Stil')
    ],
    notes: 'Second probeklausur block in portal; exam-style training, not a verbatim archive scan.'
  }),
  probeklausur_3: createProvenance({
    source_status: 'platform-added-drill',
    source_refs: [
      makro1SourceRef('Klausur_2018_Haupttermin.pdf', 'Archiv-Stil'),
      makro1SourceRef('Klausur_2022_Haupttermin.pdf', 'Archiv-Stil')
    ],
    notes: 'Third probeklausur block in portal; exam-style training, not a verbatim archive scan.'
  })
};

export function buildMakro1ModeIndex() {
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

export const MAKRO1_MODE_INDEX = buildMakro1ModeIndex();

export const MAKRO1_CONTENT_MANIFEST_VERSION = '2026.1-pilot';

export function getMakro1PilotBridgePayload() {
  return buildContentManifestBridgePayload({
    schema: 'makro1.contentManifest',
    version: MAKRO1_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: MODULE_SLUG,
    chapters: CHAPTERS,
    modeIndex: MAKRO1_MODE_INDEX,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    fullExamProvenance: FULL_EXAM_PROVENANCE
  });
}

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}

export function getConceptModeIndex(conceptId) {
  return MAKRO1_MODE_INDEX[conceptId] || null;
}
