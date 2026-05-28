import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const MAKRO2_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Makro-II-Aufgabeninhalte.';

export function normalizeMakro2OfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter((doc) => doc.module === 'makro2');
}

export function summarizeMakro2OfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeMakro2OfficialTaskDocuments(docs));
}

export function buildMakro2OfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'makro2',
    chapterIds,
    documents: normalizeMakro2OfficialTaskDocuments(docs)
  });
}
