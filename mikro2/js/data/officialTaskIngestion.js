import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const MIKRO2_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Aufgabeninhalte.';

export const MIKRO2_OFFICIAL_TASK_DOC_BASELINE = Object.freeze({
  exercise: 0,
  solution: 0,
  tutorial: 0,
  exam: 0
});

export function normalizeMikro2OfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter(
    (doc) => doc.module === 'mikro2'
  );
}

export function summarizeMikro2OfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeMikro2OfficialTaskDocuments(docs));
}

export function buildMikro2OfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'mikro2',
    chapterIds,
    documents: normalizeMikro2OfficialTaskDocuments(docs)
  });
}
