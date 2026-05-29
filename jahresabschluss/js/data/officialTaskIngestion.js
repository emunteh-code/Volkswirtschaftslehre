import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const JAHRESABSCHLUSS_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Aufgabeninhalte.';

export const JAHRESABSCHLUSS_OFFICIAL_TASK_DOC_BASELINE = Object.freeze({
  exercise: 0,
  solution: 0,
  tutorial: 10,
  exam: 3
});

export function normalizeJahresabschlussOfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter(
    (doc) => doc.module === 'jahresabschluss'
  );
}

export function summarizeJahresabschlussOfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeJahresabschlussOfficialTaskDocuments(docs));
}

export function buildJahresabschlussOfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'jahresabschluss',
    chapterIds,
    documents: normalizeJahresabschlussOfficialTaskDocuments(docs)
  });
}
