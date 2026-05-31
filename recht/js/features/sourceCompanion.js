import { createSourceCompanionModule as createSharedSourceCompanionModule } from '../../../assets/js/portal-core/features/sourceCompanionModule.js';
import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';

function lectureSortKey(doc) {
  const title = String(doc?.title || '');
  const match = title.match(/§[_\s]*(\d+)/i) || title.match(/Recht[_\s-]*(\d+)/i);
  if (match) return Number.parseInt(match[1], 10);
  if (/Vorlesungsplanung/i.test(title)) return 0;
  return 999;
}

export function createSourceCompanionModule({ renderMath } = {}) {
  return createSharedSourceCompanionModule({
    moduleSlug: 'recht',
    moduleTitle: 'Recht',
    sourceRoot: 'source-materials/Recht',
    chapters: CHAPTERS,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    getLectureSortKey: lectureSortKey,
    headerDescription:
      'Starte bei den offiziellen Rechts-Vorlesungsunterlagen und prüfe transparent, welche Portal-Konzepte nur referenziert oder bereits page-level verankert sind.',
    matrixNote:
      'Recht nutzt geprüfte VL-PDFs und Seitenanker dort, wo sie im Provenance-Pass hinterlegt sind.',
    detailGapBody:
      'Dieses Dokument ist im offiziellen Rechts-Korpus registriert, aber aktuell verweist kein Portal-Konzept direkt darauf.',
    coverageGapBody:
      'Dieses Dokument liegt im Rechts-Korpus, ist aber noch keinem Portal-Konzept mit geprüftem Seitenanker zugeordnet.'
  }, { renderMath });
}
