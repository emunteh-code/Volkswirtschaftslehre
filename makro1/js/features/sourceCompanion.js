import { createSourceCompanionModule as createSharedSourceCompanionModule } from '../../../assets/js/portal-core/features/sourceCompanionModule.js';
import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';

function lectureSortKey(doc) {
  const title = String(doc?.title || '');
  const match = title.match(/Makro[_\s]*1[_\s]*VL[_\s]*(\d+)/i) || title.match(/Makro[_\s]*I[_\s]*VL[_\s]*(\d+)/i);
  if (match) return Number.parseInt(match[1], 10);
  if (/Vorlesungsplanung/i.test(title)) return 0;
  return 999;
}

export function createSourceCompanionModule({ renderMath } = {}) {
  return createSharedSourceCompanionModule({
    moduleSlug: 'makro1',
    moduleTitle: 'Makro I',
    sourceRoot: 'source-materials/Makroökonomik I',
    chapters: CHAPTERS,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    getLectureSortKey: lectureSortKey,
    headerDescription: 'Starte bei den offiziellen Makro-I-Dokumenten und prüfe transparent, welche Portal-Konzepte nur referenziert oder bereits page-level verankert sind.',
    matrixNote: 'Makro1 hat bereits document-level Quellenbezüge. Für source-parity fehlen noch systematische page-level Seitenanker.',
    detailGapBody: 'Dieses Dokument ist im offiziellen Makro-I-Korpus registriert, aber aktuell verweist kein Portal-Konzept direkt darauf. Es muss in einem nächsten Source-Parity-Pass eingeordnet werden.',
    coverageGapBody: 'Dieses Dokument liegt im Makro-I-Korpus, ist aber noch keinem Portal-Konzept, keinem Portal-Layer und keinem geprüften Seitenanker direkt zugeordnet.'
  }, { renderMath });
}
