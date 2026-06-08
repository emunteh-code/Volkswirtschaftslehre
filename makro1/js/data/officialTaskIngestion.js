import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const MAKRO1_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Makro-I-Aufgabeninhalte.';

export const MAKRO1_REVIEWED_OFFICIAL_TASK_FAMILY_IDS = Object.freeze([
  'makro1.official-task.klausur-2022-nachtermin-a1-short-answer-core',
  'makro1.official-task.klausur-2022-nachtermin-a2-goods-market-tax-multiplier',
  'makro1.official-task.klausur-2022-nachtermin-a3-ws-ps-markup-shock',
  'makro1.official-task.klausur-2022-nachtermin-a4-islmpc-energy-price-shock'
]);

export const MAKRO1_OFFICIAL_TASK_REVIEW_STATUS = Object.freeze({
  ocrReviewed: 'native-text-plus-visual-page-review',
  humanItemMappingReviewed: 'partial',
  reviewedDocuments: [
    {
      path: 'Makroökonomik I/Klausur_2022_Nachtermin (1).pdf',
      reviewedPages: [1, 2, 3, 4, 5, 6, 7],
      reviewedTaskFamilies: [
        'makro1.official-task.klausur-2022-nachtermin-a1-short-answer-core',
        'makro1.official-task.klausur-2022-nachtermin-a2-goods-market-tax-multiplier',
        'makro1.official-task.klausur-2022-nachtermin-a3-ws-ps-markup-shock',
        'makro1.official-task.klausur-2022-nachtermin-a4-islmpc-energy-price-shock'
      ],
      reviewedAt: '2026-06-08',
      reviewedBy: 'codex-official-task-review-makro1-pass-2'
    }
  ],
  officialTaskSourceAllowed: 'reviewed-family-ids-only',
  reviewedOfficialTaskFamilyIds: MAKRO1_REVIEWED_OFFICIAL_TASK_FAMILY_IDS,
  nextStep: 'Continue native-text extraction plus visual review for older Makro-I exams and add solution-key grading checklists only when official solutions are available'
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
