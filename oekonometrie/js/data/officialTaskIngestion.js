import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export function buildOekonometrieOfficialTaskPlaceholders(docs) {
  const normalized = normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter((doc) => doc.module === 'oekonometrie');
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'oekonometrie',
    chapterIds: CHAPTERS.slice(0, 1).map((chapter) => chapter.id),
    documents: normalized
  });
}
