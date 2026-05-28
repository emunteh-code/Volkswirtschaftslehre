import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const OEKONOMETRIE_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Ökonometrie-Aufgabeninhalte.';

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
