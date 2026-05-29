import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const RECHT_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Aufgabeninhalte.';

export const RECHT_OFFICIAL_TASK_DOC_BASELINE = Object.freeze({
  exercise: 17,
  solution: 0,
  tutorial: 0,
  exam: 0
});

export function normalizeRechtOfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter(
    (doc) => doc.module === 'recht'
  );
}

export function summarizeRechtOfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeRechtOfficialTaskDocuments(docs));
}

export function buildRechtOfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'recht',
    chapterIds,
    documents: normalizeRechtOfficialTaskDocuments(docs)
  });
}
