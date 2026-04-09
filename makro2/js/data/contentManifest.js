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
 * Primary anchors — paths relative to:
 *   source-materials/Makroökonomik II/Makroökonomik II/
 * Mapped from Folien (Kapitel markers), Übungen, Tutorien, and Handout PDFs;
 * see docs/audits/makro2-provenance-curation-pass-1.md.
 */
const MAKRO2_PRIMARY_REFS_CURATED = {
  zahlungsbilanz: ['Folien/slides_01.pdf', 'Tutorien/Tutorienblatt_1.pdf'],
  wechselkurs: ['Folien/slides_01.pdf', 'Übungen/Uebungsblatt_1.pdf', 'Tutorien/Tutorienblatt_1.pdf'],
  kaufkraftparitaet: ['Folien/slides_01.pdf', 'Übungen/Uebungsblatt_1.pdf', 'Tutorien/Tutorienblatt_1.pdf'],
  zinsparitaet: ['Folien/slides_01.pdf', 'Übungen/Uebungsblatt_1.pdf', 'Tutorien/Tutorienblatt_1.pdf'],
  offene_is: ['Folien/slides_02.pdf', 'Übungen/Uebungsblatt_2.pdf', 'Tutorien/Tutorienblatt_2.pdf'],
  nettoexporte: ['Folien/slides_02.pdf', 'Übungen/Uebungsblatt_2.pdf', 'Tutorien/Tutorienblatt_2.pdf'],
  marshall_lerner: ['Folien/slides_02.pdf', 'Übungen/Uebungsblatt_2.pdf', 'Tutorien/Tutorienblatt_2.pdf'],
  geldmengen: ['Folien/slides_03.pdf', 'Übungen/Uebungsblatt_3.pdf'],
  mundell_fleming: ['Folien/slides_03.pdf', 'Übungen/Uebungsblatt_3.pdf'],
  zp_kurve: ['Folien/slides_03.pdf', 'Übungen/Uebungsblatt_3.pdf', 'Tutorien/Tutorienblatt_3.pdf'],
  wirtschaftspolitik_offen: ['Folien/slides_03.pdf', 'Übungen/Uebungsblatt_3.pdf', 'Tutorien/Tutorienblatt_3.pdf'],
  wk_regime: [
    'Folien/slides_04.pdf',
    'Übungen/Uebungsblatt_3.pdf',
    'Übungen/Uebungsblatt_4.pdf',
    'Tutorien/Tutorienblatt_3.pdf'
  ],
  wk_krisen: ['Folien/slides_04.pdf', 'Übungen/Uebungsblatt_4.pdf'],
  opt_waehrungsraum: ['Folien/slides_04.pdf', 'Übungen/Uebungsblatt_4.pdf', 'Tutorien/Tutorienblatt_3.pdf'],
  phillipskurve: ['Folien/slides_05.pdf', 'Übungen/Uebungsblatt_5.pdf', 'Tutorien/Tutorienblatt_4.pdf'],
  zeitinkonsistenz: ['Folien/slides_05.pdf', 'Übungen/Uebungsblatt_5.pdf', 'Tutorien/Tutorienblatt_4.pdf'],
  barro_gordon: ['Folien/slides_05.pdf', 'Übungen/Uebungsblatt_5.pdf', 'Tutorien/Tutorienblatt_4.pdf'],
  taylor_regel: [
    'Folien/slides_07.pdf',
    'Handout/Formeln.pdf',
    'Übungen/Uebungsblatt_7.pdf',
    'Tutorien/Tutorienblatt_5.pdf'
  ],
  inflation_targeting: ['Folien/slides_07.pdf', 'Handout/Formeln.pdf', 'Übungen/Uebungsblatt_7.pdf', 'Tutorien/Tutorienblatt_5.pdf'],
  inflation_kosten: ['Folien/slides_07.pdf', 'Übungen/Uebungsblatt_7.pdf', 'Tutorien/Tutorienblatt_5.pdf'],
  wachstum_fakten: ['Handout/Makro2_handout_V25.2.pdf', 'Übungen/Uebungsblatt_8.pdf'],
  aggregierte_pf: ['Handout/Makro2_handout_V25.2.pdf', 'Übungen/Uebungsblatt_8.pdf', 'Tutorien/Tutorienblatt_5.pdf'],
  solow_basis: ['Handout/Makro2_handout_V25.2.pdf', 'Übungen/Uebungsblatt_9.pdf', 'Tutorien/Tutorienblatt_6.pdf'],
  steady_state: ['Handout/Makro2_handout_V25.2.pdf', 'Übungen/Uebungsblatt_9.pdf', 'Tutorien/Tutorienblatt_6.pdf'],
  goldene_sparquote: ['Handout/Makro2_handout_V25.2.pdf', 'Übungen/Uebungsblatt_9.pdf', 'Tutorien/Tutorienblatt_6.pdf'],
  tech_fortschritt: ['Handout/Makro2_handout_V25.2.pdf', 'Übungen/Uebungsblatt_10.pdf', 'Tutorien/Tutorienblatt_6.pdf'],
  budgetrestriktion: ['Folien/slides_06.pdf', 'Übungen/Uebungsblatt_6.pdf', 'Tutorien/Tutorienblatt_4.pdf'],
  schuldenquote_dynamik: ['Folien/slides_06.pdf', 'Übungen/Uebungsblatt_6.pdf', 'Tutorien/Tutorienblatt_4.pdf'],
  ricardianisch: ['Folien/slides_06.pdf', 'Übungen/Uebungsblatt_6.pdf', 'Tutorien/Tutorienblatt_4.pdf'],
  schuldenfinanzierung_monetarisierung: ['Folien/slides_06.pdf', 'Übungen/Uebungsblatt_6.pdf', 'Tutorien/Tutorienblatt_4.pdf']
};

export const MAKRO2_CONCEPT_PRIMARY_REFS = Object.fromEntries(
  CHAPTERS.map(({ id }) => [
    id,
    MAKRO2_PRIMARY_REFS_CURATED[id] ? [...MAKRO2_PRIMARY_REFS_CURATED[id]] : []
  ])
);

const NOTES_THEORY =
  'Portal theory follows the Makro II line (Folien, Übungen, Tutorien, Handout). File-level primary anchors: docs/audits/makro2-provenance-curation-pass-1.md.';
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
