import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const MATHEMATIK_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Mathematik-Aufgabeninhalte.';

export function normalizeMathematikOfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter((doc) => doc.module === 'mathematik');
}

export function summarizeMathematikOfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeMathematikOfficialTaskDocuments(docs));
}

export function buildMathematikOfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'mathematik',
    chapterIds,
    documents: normalizeMathematikOfficialTaskDocuments(docs)
  });
}
