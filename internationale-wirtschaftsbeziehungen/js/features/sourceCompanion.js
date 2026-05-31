import { createSourceCompanionModule as createSharedSourceCompanionModule } from '../../../assets/js/portal-core/features/sourceCompanionModule.js';
import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';

function lectureSortKey(doc) {
  const title = String(doc?.title || '');
  const match = title.match(/IWB[_\s-]*(\d+)/i) || title.match(/VL[_\s-]*(\d+)/i);
  if (match) return Number.parseInt(match[1], 10);
  if (/Vorlesungsplanung/i.test(title)) return 0;
  return 999;
}

export function createSourceCompanionModule({ renderMath } = {}) {
  return createSharedSourceCompanionModule({
    moduleSlug: 'internationale-wirtschaftsbeziehungen',
    moduleTitle: 'Internationale Wirtschaftsbeziehungen',
    sourceRoot: 'source-materials/Grundlagen der internationalen Wirtschaftsbeziehungen',
    chapters: CHAPTERS,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    getLectureSortKey: lectureSortKey,
    headerDescription:
      'Starte bei den offiziellen IWB-Unterlagen und prüfe transparent, welche Portal-Konzepte nur referenziert oder bereits page-level verankert sind.',
    matrixNote:
      'IWB hat document-level Quellenbezüge; page-level Anchors werden schrittweise ergänzt.',
    detailGapBody:
      'Dieses Dokument ist im offiziellen IWB-Korpus registriert, aber aktuell verweist kein Portal-Konzept direkt darauf.',
    coverageGapBody:
      'Dieses Dokument liegt im IWB-Korpus, ist aber noch keinem Portal-Konzept mit geprüftem Seitenanker zugeordnet.'
  }, { renderMath });
}
