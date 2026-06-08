import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const STATISTIK_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Aufgabeninhalte.';

export const STATISTIK_REVIEWED_OFFICIAL_TASK_FAMILY_IDS = Object.freeze([
  'statistik.official-task.teil-a-klausur-2022-a1-a2-descriptive-core',
  'statistik.official-task.teil-a-klausur-2022-a3-a4-probability-core',
  'statistik.official-task.teil-a-klausur-2022-a5-regression-output',
  'statistik.official-task.teil-a-klausur-2022-a6-correlation-causality',
  'statistik.official-task.teil-a-klausur-2022-a7-weibull-ml',
  'statistik.official-task.teil-a-klausur-2022-a8-unbiased-estimator',
  'statistik.official-task.teil-a-klausur-2022-a9-normal-test-anova',
  'statistik.official-task.teil-b-klausur-2022-a8a-e-r-data-descriptive',
  'statistik.official-task.teil-b-klausur-2022-a8f-g-poisson-likelihood-ml',
  'statistik.official-task.teil-b-klausur-2022-a8h-r-function-yennefer'
]);

export const STATISTIK_OFFICIAL_TASK_REVIEW_STATUS = Object.freeze({
  ocrReviewed: 'native-text-plus-visual-page-review',
  humanItemMappingReviewed: 'partial',
  reviewedDocuments: [
    {
      path: 'Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Teil_A_Klausur.pdf',
      reviewedPages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      reviewedTaskFamilies: [
        'statistik.official-task.teil-a-klausur-2022-a1-a2-descriptive-core',
        'statistik.official-task.teil-a-klausur-2022-a3-a4-probability-core',
        'statistik.official-task.teil-a-klausur-2022-a5-regression-output',
        'statistik.official-task.teil-a-klausur-2022-a6-correlation-causality',
        'statistik.official-task.teil-a-klausur-2022-a7-weibull-ml',
        'statistik.official-task.teil-a-klausur-2022-a8-unbiased-estimator',
        'statistik.official-task.teil-a-klausur-2022-a9-normal-test-anova'
      ],
      reviewedAt: '2026-06-08',
      reviewedBy: 'codex-official-task-review-statistik-pass-4'
    },
    {
      path: 'Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/KlausurE2122K1_upd.pdf',
      reviewedPages: [1, 2, 3, 4, 5],
      reviewedTaskFamilies: [
        'statistik.official-task.teil-b-klausur-2022-a8a-e-r-data-descriptive',
        'statistik.official-task.teil-b-klausur-2022-a8f-g-poisson-likelihood-ml',
        'statistik.official-task.teil-b-klausur-2022-a8h-r-function-yennefer'
      ],
      reviewedAt: '2026-06-08',
      reviewedBy: 'codex-official-task-review-statistik-pass-5'
    }
  ],
  officialTaskSourceAllowed: 'reviewed-family-ids-only',
  reviewedOfficialTaskFamilyIds: STATISTIK_REVIEWED_OFFICIAL_TASK_FAMILY_IDS,
  nextStep: 'Continue native-text extraction plus visual review for additional Statistik exams/exercises and OCR the image-only Klausurfragen PDFs before broader official-task-source promotion'
});

/**
 * Guards task-family authoring: never emit official-task-source without reviewed mapping.
 * @param {{ officialTaskCoverage?: string, id?: string }} family
 */
export function assertStatistikOfficialTaskSourcePolicy(family) {
  if (
    family?.officialTaskCoverage === 'official-task-source' &&
    !STATISTIK_REVIEWED_OFFICIAL_TASK_FAMILY_IDS.includes(family?.id)
  ) {
    throw new Error(
      'Statistik official-task-source blocked unless the family id is explicitly listed in STATISTIK_REVIEWED_OFFICIAL_TASK_FAMILY_IDS.'
    );
  }
}

export function normalizeStatistikOfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter((doc) => doc.module === 'statistik');
}

export function summarizeStatistikOfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeStatistikOfficialTaskDocuments(docs));
}

export function buildStatistikOfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'statistik',
    chapterIds,
    documents: normalizeStatistikOfficialTaskDocuments(docs)
  });
}
