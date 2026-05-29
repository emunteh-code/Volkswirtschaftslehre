import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const IWB_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Aufgabeninhalte.';

export const IWB_OFFICIAL_TASK_DOC_BASELINE = Object.freeze({
  exercise: 0,
  solution: 0,
  tutorial: 0,
  exam: 0
});

export function normalizeInternationaleWirtschaftsbeziehungenOfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter(
    (doc) => doc.module === 'internationale-wirtschaftsbeziehungen'
  );
}

export function summarizeInternationaleWirtschaftsbeziehungenOfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalizeInternationaleWirtschaftsbeziehungenOfficialTaskDocuments(docs));
}

export function buildInternationaleWirtschaftsbeziehungenOfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: 'internationale-wirtschaftsbeziehungen',
    chapterIds,
    documents: normalizeInternationaleWirtschaftsbeziehungenOfficialTaskDocuments(docs)
  });
}
