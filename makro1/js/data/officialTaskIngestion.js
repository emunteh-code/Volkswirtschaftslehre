import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const MAKRO1_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Makro-I-Aufgabeninhalte.';

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
