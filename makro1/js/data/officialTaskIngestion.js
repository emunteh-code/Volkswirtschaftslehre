import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const MAKRO1_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Makro-I-Aufgabeninhalte.';

export const MAKRO1_REVIEWED_OFFICIAL_TASK_FAMILY_IDS = Object.freeze([
  'makro1.official-task.klausur-2022-nachtermin-a1-short-answer-core'
]);

export const MAKRO1_OFFICIAL_TASK_REVIEW_STATUS = Object.freeze({
  ocrReviewed: 'native-text-plus-visual-page-review',
  humanItemMappingReviewed: 'partial',
  reviewedDocuments: [
    {
      path: 'Makroökonomik I/Klausur_2022_Nachtermin (1).pdf',
      reviewedPages: [1, 2],
      reviewedTaskFamilies: ['makro1.official-task.klausur-2022-nachtermin-a1-short-answer-core'],
      reviewedAt: '2026-06-08',
      reviewedBy: 'codex-official-task-review-makro1-pass-1'
    }
  ],
  officialTaskSourceAllowed: 'reviewed-family-ids-only',
  reviewedOfficialTaskFamilyIds: MAKRO1_REVIEWED_OFFICIAL_TASK_FAMILY_IDS,
  nextStep: 'Continue native-text extraction plus visual review for Aufgabe 2-4 and older Makro-I exams before broader official-task-source promotion'
});

/**
 * Guards task-family authoring: never emit official-task-source without reviewed mapping.
 * @param {{ officialTaskCoverage?: string, id?: string }} family
 */
export function assertMakro1OfficialTaskSourcePolicy(family) {
  if (
    family?.officialTaskCoverage === 'official-task-source' &&
    !MAKRO1_REVIEWED_OFFICIAL_TASK_FAMILY_IDS.includes(family?.id)
  ) {
    throw new Error(
      'Makro1 official-task-source blocked unless the family id is explicitly listed in MAKRO1_REVIEWED_OFFICIAL_TASK_FAMILY_IDS.'
    );
  }
}

export function normalizeMakro1OfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter((doc) => doc.module === 'makro1');
}

export function summarizeMakro1OfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeMakro1OfficialTaskDocuments(docs));
}

export function buildMakro1OfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'makro1',
    chapterIds,
    documents: normalizeMakro1OfficialTaskDocuments(docs)
  });
}
