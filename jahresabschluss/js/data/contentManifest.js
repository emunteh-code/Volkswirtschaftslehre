// ============================================================
// CONTENT MANIFEST — Jahresabschluss (platform backbone)
// Provenance + mode index with accounting-specific notes.
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

const MODULE_SLUG = 'jahresabschluss';

/**
 * Primary chapter VL PDFs — paths relative to:
 *   source-materials/Jahresabschluss/Jahresabschluss/
 * Curated in docs/audits/jahresabschluss-provenance-curation-pass-1.md.
 * No folio/slide anchors; Probeklausur not used as per-concept primary.
 */
const JAHRESABSCHLUSS_PRIMARY_REFS_CURATED = {
  rechnungswesen_intro: ['Orga+Kapitel1.pdf'],
  gob_rechtsgrundlagen: ['Kapitel2.pdf', 'Tutorium/Tutorium_Kapitel2.pdf'],
  inventur_inventar_bilanzansatz: ['Kapitel2.pdf'],
  buchen_konten: ['Kapitel3.pdf'],
  buchfuehrung_orga: ['Kapitel4.pdf'],
  anlagevermoegen: ['Kapitel5.pdf'],
  umlauf_bewertung_verfahren: ['Kapitel6.1-6.5.pdf'],
  werkstoffe_erzeugnisse_buchungen: ['Kapitel6.1-6.5.pdf'],
  umlauf_waren_ust: ['Kapitel6.6-6.7.pdf'],
  eigenkapital_kapitalgesellschaften: ['Kapitel7.pdf'],
  eigenkapital_personengesellschaften: ['Kapitel7.pdf'],
  verbindlichkeiten: ['Kapitel8.pdf'],
  rueckstellungen: ['Kapitel8.pdf'],
  rechnungsabgrenzung: ['Kapitel9.pdf'],
  erfolgsrechnung: ['Kapitel10.pdf']
};

export const JAHRESABSCHLUSS_CONCEPT_PRIMARY_REFS = Object.fromEntries(
  CHAPTERS.map(({ id }) => [
    id,
    JAHRESABSCHLUSS_PRIMARY_REFS_CURATED[id] ? [...JAHRESABSCHLUSS_PRIMARY_REFS_CURATED[id]] : []
  ])
);

const NOTES_THEORY =
  'Accounting content is source-distilled and authored around Bilanz/GuV logic, booking flows, and periodization.';
const NOTES_GRAPH =
  'This module currently has no concept-specific graph layer; graph panel intentionally states the non-graph design.';
const NOTES_INTUITION = 'Compressed recall layer for account logic, sign conventions, and exam booking patterns.';
const NOTES_STEP =
  'Step problems preserve accounting notation, sign/booking conventions (Soll/Haben), and workflow structure.';
const NOTES_TASKS =
  'Tasks follow accounting-specific workflow (Kontierung, valuation, periodization) and are not flattened into generic drills.';

export const PROVENANCE_BY_CONCEPT = buildProvenanceByConceptFromPrimaryRefs({
  chapters: CHAPTERS,
  primaryPathsByConceptId: JAHRESABSCHLUSS_CONCEPT_PRIMARY_REFS,
  moduleSlug: MODULE_SLUG,
  hasGraph: (id) => GRAPH_CONCEPTS.has(id),
  hasStepProblems: (id) => Array.isArray(STEP_PROBLEMS[id]) && STEP_PROBLEMS[id].length > 0,
  hasIntuition: (id) => Boolean(INTUITION[id]),
  notesByLayer: {
    motivation: NOTES_THEORY,
    theory: NOTES_THEORY,
    formulas: 'Notation follows accounting conventions and renders booking logic aids.',
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
        'Probeklausur is authored accounting drill content aligned to course booking/valuation style; not a verbatim archived exam.'
    })
  ])
);

export function buildJahresabschlussModeIndex() {
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

export const JAHRESABSCHLUSS_MODE_INDEX = buildJahresabschlussModeIndex();
export const JAHRESABSCHLUSS_CONTENT_MANIFEST_VERSION = '2026.1';

export function getJahresabschlussContentManifestBridgePayload() {
  return buildContentManifestBridgePayload({
    schema: 'jahresabschluss.contentManifest',
    version: JAHRESABSCHLUSS_CONTENT_MANIFEST_VERSION,
    courseConfigManifestVersion: COURSE_CONFIG.contentManifestVersion,
    module_slug: MODULE_SLUG,
    chapters: CHAPTERS,
    modeIndex: JAHRESABSCHLUSS_MODE_INDEX,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    fullExamProvenance: FULL_EXAM_PROVENANCE
  });
}

export function getConceptProvenance(conceptId) {
  return PROVENANCE_BY_CONCEPT[conceptId] || null;
}

export function getConceptModeIndex(conceptId) {
  return JAHRESABSCHLUSS_MODE_INDEX[conceptId] || null;
}
