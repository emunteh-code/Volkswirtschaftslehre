import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const FINANZWIRTSCHAFT_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Aufgabeninhalte.';

export const FINANZWIRTSCHAFT_OFFICIAL_TASK_DOC_BASELINE = Object.freeze({
  exercise: 0,
  solution: 0,
  tutorial: 0,
  exam: 0
});

export function normalizeFinanzwirtschaftOfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter(
    (doc) => doc.module === 'finanzwirtschaft'
  );
}

export function summarizeFinanzwirtschaftOfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeFinanzwirtschaftOfficialTaskDocuments(docs));
}

export function buildFinanzwirtschaftOfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'finanzwirtschaft',
    chapterIds,
    documents: normalizeFinanzwirtschaftOfficialTaskDocuments(docs)
  });
}
