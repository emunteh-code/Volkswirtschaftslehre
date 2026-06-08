import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const MIKRO1_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Mikro-I-Aufgabeninhalte.';

/** Probeklausur JPGs are only partially OCR-reviewed; companion PDF is a layout template (Lorem ipsum), not exam substance. */
export const MIKRO1_PROBEKLAUSUR_INGEST_BLOCKERS = Object.freeze([
  'most-exam-artefacts-are-jpg-without-reviewed-ocr',
  'klausur-pdf-is-template-not-item-bank'
]);

export const MIKRO1_REVIEWED_OFFICIAL_TASK_FAMILY_IDS = Object.freeze([
  'mikro1.official-task.probeklausur-a1-budget-true-false',
  'mikro1.official-task.probeklausur-a1-preferences-convexity',
  'mikro1.official-task.probeklausur-a1-household-optimum-true-false',
  'mikro1.official-task.probeklausur-a1-consumer-theory-mixed-true-false',
  'mikro1.official-task.probeklausur-a1-production-cost-monopoly-true-false',
  'mikro1.official-task.probeklausur-a2-hicks-decomposition',
  'mikro1.official-task.probeklausur-a3-cost-function'
]);

/** Inventory snapshot from source-corpus-registry (2026-05-28); item-level OCR review is partial. */
export const MIKRO1_PROBEKLAUSUR_REVIEW_STATUS = Object.freeze({
  ocrReviewed: 'partial',
  humanItemMappingReviewed: 'partial',
  jpgPageCount: 17,
  reviewedJpgPages: [
    'IMG_8767.JPG',
    'IMG_8768.JPG',
    'IMG_8769.JPG',
    'IMG_8770.JPG',
    'IMG_8771.JPG',
    'IMG_8772.JPG',
    'IMG_8773.JPG',
    'IMG_8774.JPG'
  ],
  templatePdfPath: 'Weitere_Unterlagen/Klausur_Mikro1_ohneechtentext.pdf',
  templatePdfUsableAsItemBank: false,
  officialTaskSourceAllowed: 'reviewed-family-ids-only',
  reviewedOfficialTaskFamilyIds: MIKRO1_REVIEWED_OFFICIAL_TASK_FAMILY_IDS,
  nextStep: 'Continue OCR + human review for remaining Probeklausur JPGs before broader official-task-source promotion'
});

/**
 * Guards task-family authoring: never emit official-task-source without reviewed mapping.
 * @param {{ officialTaskCoverage?: string }} family
 */
export function assertMikro1OfficialTaskSourcePolicy(family) {
  if (
    family?.officialTaskCoverage === 'official-task-source' &&
    !MIKRO1_REVIEWED_OFFICIAL_TASK_FAMILY_IDS.includes(family?.id)
  ) {
    throw new Error(
      'Mikro1 official-task-source blocked unless the family id is explicitly listed in MIKRO1_REVIEWED_OFFICIAL_TASK_FAMILY_IDS.'
    );
  }
}

/** Registry baseline `source-corpus-registry.generated.json` (2026-05-28). */
export const MIKRO1_OFFICIAL_TASK_DOC_BASELINE_2026_05_28 = Object.freeze({
  exercise: 0,
  solution: 0,
  tutorial: 0,
  exam: 18
});

export function normalizeMikro1OfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter(
    (doc) => doc.module === 'mikro1'
  );
}

export function summarizeMikro1OfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeMikro1OfficialTaskDocuments(docs));
}

export function buildMikro1OfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'mikro1',
    chapterIds,
    documents: normalizeMikro1OfficialTaskDocuments(docs)
  });
}
