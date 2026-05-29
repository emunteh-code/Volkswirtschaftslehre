import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const MIKRO1_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Mikro-I-Aufgabeninhalte.';

/** Probeklausur JPGs are not OCR-reviewed; companion PDF is a layout template (Lorem ipsum), not exam substance. */
export const MIKRO1_PROBEKLAUSUR_INGEST_BLOCKERS = Object.freeze([
  'exam-artefacts-are-jpg-without-reviewed-ocr',
  'klausur-pdf-is-template-not-item-bank'
]);

/** Inventory snapshot from source-corpus-registry (2026-05-28); no item-level OCR review. */
export const MIKRO1_PROBEKLAUSUR_REVIEW_STATUS = Object.freeze({
  ocrReviewed: false,
  humanItemMappingReviewed: false,
  jpgPageCount: 17,
  templatePdfPath: 'Weitere_Unterlagen/Klausur_Mikro1_ohneechtentext.pdf',
  templatePdfUsableAsItemBank: false,
  officialTaskSourceAllowed: false,
  nextStep: 'OCR + human review of Probeklausur JPGs before any official-task-source family'
});

/**
 * Guards task-family authoring: never emit official-task-source without reviewed mapping.
 * @param {{ officialTaskCoverage?: string }} family
 */
export function assertMikro1OfficialTaskSourcePolicy(family) {
  if (family?.officialTaskCoverage === 'official-task-source' && !MIKRO1_PROBEKLAUSUR_REVIEW_STATUS.officialTaskSourceAllowed) {
    throw new Error(
      'Mikro1 official-task-source blocked until Probeklausur OCR/human review completes (see MIKRO1_PROBEKLAUSUR_REVIEW_STATUS).'
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
