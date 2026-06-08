import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const OEKONOMETRIE_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Ökonometrie-Aufgabeninhalte.';

export const OEKONOMETRIE_REVIEWED_OFFICIAL_TASK_FAMILY_IDS = Object.freeze([
  'oekonometrie.official-task.probeklausur-1-a1-loglog-ols-inference'
]);

export const OEKONOMETRIE_OFFICIAL_TASK_REVIEW_STATUS = Object.freeze({
  ocrReviewed: 'native-text-plus-visual-page-review',
  humanItemMappingReviewed: 'partial',
  reviewedDocuments: [
    {
      path: 'Ökonometrie/Exercises_Einführung_in_die_Ökonometrie_Übung/Probeklausuren/Probeklausur_1.pdf',
      reviewedPages: [1, 2],
      reviewedTaskFamilies: ['oekonometrie.official-task.probeklausur-1-a1-loglog-ols-inference'],
      reviewedAt: '2026-06-08',
      reviewedBy: 'codex-official-task-review-oekonometrie-pass-1'
    }
  ],
  officialTaskSourceAllowed: 'reviewed-family-ids-only',
  reviewedOfficialTaskFamilyIds: OEKONOMETRIE_REVIEWED_OFFICIAL_TASK_FAMILY_IDS,
  nextStep: 'Continue native-text extraction plus visual review for Probeklausur_1 Aufgaben 2-3 and exercise sheets before broader official-task-source promotion'
});

/**
 * Guards task-family authoring: never emit official-task-source without reviewed mapping.
 * @param {{ officialTaskCoverage?: string, id?: string }} family
 */
export function assertOekonometrieOfficialTaskSourcePolicy(family) {
  if (
    family?.officialTaskCoverage === 'official-task-source' &&
    !OEKONOMETRIE_REVIEWED_OFFICIAL_TASK_FAMILY_IDS.includes(family?.id)
  ) {
    throw new Error(
      'Oekonometrie official-task-source blocked unless the family id is explicitly listed in OEKONOMETRIE_REVIEWED_OFFICIAL_TASK_FAMILY_IDS.'
    );
  }
}

export function normalizeOekonometrieOfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter((doc) => doc.module === 'oekonometrie');
}

export function summarizeOekonometrieOfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeOekonometrieOfficialTaskDocuments(docs));
}

export function buildOekonometrieOfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'oekonometrie',
    chapterIds,
    documents: normalizeOekonometrieOfficialTaskDocuments(docs)
  });
}
