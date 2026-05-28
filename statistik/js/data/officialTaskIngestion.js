import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const STATISTIK_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Aufgabeninhalte.';

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
