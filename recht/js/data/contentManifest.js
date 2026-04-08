// ============================================================
// CONTENT MANIFEST — Recht (platform backbone)
// Provenance + mode index with law-module specific notes.
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

const MODULE_SLUG = 'recht';

/**
 * Primary anchors — paths relative to:
 *   source-materials/Recht/Recht/
 * Curated from `assets/js/module-content.js` (recht roadmap) + on-disk PDF names;
 * see docs/audits/recht-provenance-curation-pass-1.md.
 */
const RECHT_PRIMARY_REFS_CURATED = {
  was_ist_recht: ['Vorlesungen/§_1_Was_ist_Recht-K.pdf'],
  privatrecht: ['Vorlesungen/§_2_Privatrecht-K.pdf'],
  methodik: [
    'Vorlesungen/§_3_Juristische_Methodik-K.pdf',
    'Übungen/Juristische_Gliederungsebenen_im_Gutachten.pdf'
  ],
  willenserklaerung: [
    'Vorlesungen/§_4_Willenserklärung,_Vertragsschluss-K.pdf',
    'Übungen/SoSe_5.5.2025_2._Einheit.pdf',
    'Übungen/Übersicht_Definitionen.pdf'
  ],
  dissens: ['Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf', 'Übungen/SoSe_2025_Einheit_3.pdf'],
  anfechtung: ['Vorlesungen/§_5_Dissens_und_Anfechtung-K.pdf', 'Übungen/SoSe_2025_Einheit_3.pdf'],
  trennung_abstraktion: [
    'Vorlesungen/§_6_Verpflichtungs-_und_Verfügungsgeschäfte-K.pdf',
    'Übungen/SoSe_2025_Einheit_3.pdf'
  ],
  geschaeftsfaehigkeit: [
    'Vorlesungen/§_7_Rechts-_und_Geschäftsfähigkeit-K.pdf',
    'Übungen/SoSe_2025_Einheit_3.pdf',
    'Übungen/_Einheit_3_Übersicht_beschr._Geschäftsfähigkeit.pdf'
  ],
  stellvertretung: ['Vorlesungen/§_8_Stellvertretung-K.pdf'],
  agb: ['Vorlesungen/§_9_AGB-Recht-K.pdf'],
  schuldrecht_intro: ['Vorlesungen/§_10_Schuldrecht_AT_-_Einführung-K.pdf'],
  schadensersatz: ['Vorlesungen/§_11_Schuldrecht_AT_-_Schadenersatz-K.pdf'],
  ruecktritt: ['Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf'],
  verbraucherwiderruf: ['Vorlesungen/§_12_Schuldrecht_AT_-_Rücktritt_und_Verbraucher-Widerruf-K.pdf']
};

export const RECHT_CONCEPT_PRIMARY_REFS = Object.fromEntries(
  CHAPTERS.map(({ id }) => [
    id,
    RECHT_PRIMARY_REFS_CURATED[id] ? [...RECHT_PRIMARY_REFS_CURATED[id]] : []
  ])
);

const NOTES_THEORY =
  'Law content follows the curated Vorlesungsreihe (units 1–12) and linked Übungs-PDFs where the portal roadmap names them; file-level anchors: docs/audits/recht-provenance-curation-pass-1.md.';
const NOTES_GRAPH =
  'This module currently has no concept-specific graph layer; graph panel intentionally shows an explicit no-graph placeholder.';
const NOTES_INTUITION = 'Compressed recall support for legal doctrine and exam-style case reasoning.';
const NOTES_STEP =
  'Step-problem drills preserve legal answer structure and clause-based reasoning prompts.';
const NOTES_TASKS =
  'Tasks are legal case-oriented and maintain module-specific method sequence (Obersatz, Definition, Subsumtion, Ergebnis).';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: RECHT_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_THEORY,
    theory: NOTES_THEORY,
    formulas: 'Legal formulas are normalized rendering aids (not mathematical derivations).',
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
        'Probeklausur is authored legal drill content aligned to course method and case style; not a verbatim archived legal exam sheet.'
    })
  ])
);

export function buildRechtModeIndex() {
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

export const RECHT_MODE_INDEX = buildRechtModeIndex();
export const RECHT_CONTENT_MANIFEST_VERSION = '2026.1';

export function getRechtContentManifestBridgePayload() {
  return buildContentManifestBridgePayload({
    schema: 'recht.contentManifest',
    version: RECHT_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: MODULE_SLUG,
    chapters: CHAPTERS,
    modeIndex: RECHT_MODE_INDEX,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    fullExamProvenance: FULL_EXAM_PROVENANCE
  });
}

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}

export function getConceptModeIndex(conceptId) {
  return RECHT_MODE_INDEX[conceptId] || null;
}
