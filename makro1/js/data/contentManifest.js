// ============================================================
// CONTENT MANIFEST — Makroökonomik I (pilot)
// Provenance + mode index for canonical schema alignment.
// Does not replace CHAPTERS/CONTENT; additive metadata only.
// See docs/audits/makro1-pilot-migration.md
// ============================================================

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

/** @typedef {'direct-source'|'source-distilled'|'platform-added-explanation'|'platform-added-drill'|'cross-link'} SourceStatus */

/**
 * @param {string} path - Path as in assets/js/module-content.js (makro1)
 * @param {string} [title]
 */
export function makro1SourceRef(path, title = '') {
  const safe = path.replace(/[^a-zA-Z0-9._-]/g, '_');
  return {
    ref_id: `makro1:${safe}`,
    module_slug: 'makro1',
    path,
    ...(title ? { title } : {})
  };
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

const NOTES_THEORY = 'Portal theory blocks follow the Makro I course line (Vorlesungs-/Übungslogik); wording is authored for the portal, not a verbatim PDF paste.';
const NOTES_GRAPH = 'Interactive graph: parameter sliders for exam-style reasoning; not a reproduction of a single course figure.';
const NOTES_INTUITION = 'Compressed recall layer (Kernidee / Muster) for the closed learning loop.';
const NOTES_STEP = 'Step-problem quick-exam items with stable options.problemId / stepId for future mistake routing.';
const NOTES_TASKS = 'Authored Aufgaben for guided practice; may synthesize several Übungsstile.';

/**
 * Per-concept provenance layers (canonical `provenance`-style fields).
 * @type {Record<string, {
 *   theory: { source_status: SourceStatus, source_refs: ReturnType<typeof makro1SourceRef>[], notes?: string },
 *   motivation: { source_status: SourceStatus, source_refs: ReturnType<typeof makro1SourceRef>[], notes?: string },
 *   formulas: { source_status: SourceStatus, source_refs: ReturnType<typeof makro1SourceRef>[], notes?: string },
 *   tasks: { source_status: SourceStatus, source_refs: ReturnType<typeof makro1SourceRef>[], notes?: string },
 *   intuition: { source_status: SourceStatus, source_refs: ReturnType<typeof makro1SourceRef>[], notes?: string },
 *   graph?: { source_status: SourceStatus, source_refs: ReturnType<typeof makro1SourceRef>[], notes?: string },
 *   stepProblems?: { source_status: SourceStatus, source_refs: ReturnType<typeof makro1SourceRef>[], notes?: string }
 * }>}
 */
export const PROVENANCE_BY_CONCEPT = Object.fromEntries(
  CHAPTERS.map(({ id }) => {
    const paths = MAKRO1_CONCEPT_PRIMARY_REFS[id] || [];
    const refs = paths.map((p) => makro1SourceRef(p));
    const hasGraph = GRAPH_CONCEPTS.has(id);
    const hasSteps = Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0;
    const hasIntuition = Boolean(INTUITION[id]);
    return [
      id,
      {
        motivation: {
          source_status: 'source-distilled',
          source_refs: refs,
          notes: NOTES_THEORY
        },
        theory: {
          source_status: 'source-distilled',
          source_refs: refs,
          notes: NOTES_THEORY
        },
        formulas: {
          source_status: 'source-distilled',
          source_refs: refs,
          notes: 'Notation aligned with VL/Zusammenfassungen; rearranged for Formeln tab.'
        },
        tasks: {
          source_status: 'platform-added-drill',
          source_refs: refs,
          notes: NOTES_TASKS
        },
        ...(hasIntuition
          ? {
              intuition: {
                source_status: 'platform-added-explanation',
                source_refs: refs,
                notes: NOTES_INTUITION
              }
            }
          : {}),
        ...(hasGraph
          ? {
              graph: {
                source_status: 'platform-added-explanation',
                source_refs: refs,
                notes: NOTES_GRAPH
              }
            }
          : {}),
        ...(hasSteps
          ? {
              stepProblems: {
                source_status: 'platform-added-drill',
                source_refs: refs,
                notes: NOTES_STEP
              }
            }
          : {})
      }
    ];
  })
);

/** Module-level assessment objects (full exams live in fullExams.js). */
export const FULL_EXAM_PROVENANCE = {
  probeklausur_1: {
    source_status: 'platform-added-drill',
    source_refs: [
      makro1SourceRef('Klausur_2018_Haupttermin.pdf', 'Archiv-Stil'),
      makro1SourceRef('Klausur_2022_Haupttermin.pdf', 'Archiv-Stil')
    ],
    notes: 'Probeklausur authored for portal practice; topic mix aligned with Makro I archive, not a single pasted paper.'
  },
  probeklausur_2: {
    source_status: 'platform-added-drill',
    source_refs: [
      makro1SourceRef('Klausur_2018_Haupttermin.pdf', 'Archiv-Stil'),
      makro1SourceRef('Klausur_2022_Haupttermin.pdf', 'Archiv-Stil')
    ],
    notes: 'Second probeklausur block in portal; exam-style training, not a verbatim archive scan.'
  },
  probeklausur_3: {
    source_status: 'platform-added-drill',
    source_refs: [
      makro1SourceRef('Klausur_2018_Haupttermin.pdf', 'Archiv-Stil'),
      makro1SourceRef('Klausur_2022_Haupttermin.pdf', 'Archiv-Stil')
    ],
    notes: 'Third probeklausur block in portal; exam-style training, not a verbatim archive scan.'
  }
};

/**
 * Hooks for future learn / practice / exam / mistake pipelines (no UI change).
 * Counts derived from live data objects to avoid drift.
 */
export function buildMakro1ModeIndex() {
  /** @type {Record<string, object>} */
  const out = {};
  for (const c of CHAPTERS) {
    const entry = CONTENT[c.id];
    const stepGroups = STEP_PROBLEMS[c.id];
    const aufgaben = entry?.aufgaben;
    out[c.id] = {
      learn: {
        enabled: Boolean(entry?.theorie),
        encoding: 'html_fragment',
        hasMotivation: Boolean(entry?.motivation)
      },
      practice: {
        authoredAufgabenCount: Array.isArray(aufgaben) ? aufgaben.length : 0,
        stepProblemGroupCount: Array.isArray(stepGroups) ? stepGroups.length : 0,
        masteryChecklist: true,
        supplementalTasksFromTheory: true
      },
      graph: {
        enabled: GRAPH_CONCEPTS.has(c.id),
        bindingKind: GRAPH_CONCEPTS.has(c.id) ? 'concept_canvas' : 'none'
      },
      exam: {
        quickExam: true,
        fullExamDocumentIds: Object.keys(FULL_EXAM_PROVENANCE),
        embeddedExamCanvases: false
      },
      mistakeTracking: {
        progressKey: PROGRESS_KEY,
        srsKey: SRS_KEY,
        questionStatsKey: QUESTION_STATS_KEY,
        fullExamStateKey: FE_STATE_KEY,
        aggregates: ['views', 'correct', 'wrong', 'solved', 'checks']
      }
    };
  }
  return out;
}

export const MAKRO1_MODE_INDEX = buildMakro1ModeIndex();

export const MAKRO1_CONTENT_MANIFEST_VERSION = '2026.1-pilot';

/**
 * Payload exposed via createPortalApp `portalBridge` for QA / future loaders (devtools).
 */
export function getMakro1PilotBridgePayload() {
  return {
    schema: 'makro1.contentManifest',
    version: MAKRO1_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: 'makro1',
    conceptCount: CHAPTERS.length,
    conceptIds: CHAPTERS.map((c) => c.id),
    modeIndex: MAKRO1_MODE_INDEX,
    provenanceKeys: Object.keys(PROVENANCE_BY_CONCEPT),
    fullExamProvenanceKeys: Object.keys(FULL_EXAM_PROVENANCE)
  };
}

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}

export function getConceptModeIndex(conceptId) {
  return MAKRO1_MODE_INDEX[conceptId] || null;
}
