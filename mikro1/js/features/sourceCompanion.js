import { createSourceCompanionModule as createSharedSourceCompanionModule } from '../../../assets/js/portal-core/features/sourceCompanionModule.js';
import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';

function lectureSortKey(doc) {
  const title = String(doc?.title || '');
  const match = title.match(/Mikro_1_VL_(\d+)/i);
  if (match) return Number.parseInt(match[1], 10);
  if (/Vorlesungsplanung/i.test(title)) return 0;
  return 999;
}

function renderTaskArchivePanel(docs) {
  const taskDocs = docs.filter((doc) => ['exercise', 'solution', 'tutorial', 'exam'].includes(doc.kind));
  return `<section class="source-companion-task-gap" aria-label="Offizieller Aufgabenarchiv-Status">
<div class="source-coverage-head">
<div>
<span>Official Task Bank</span>
<h3>Offizielle Aufgaben noch nicht task-family-mapped</h3>
</div>
<p>${taskDocs.length} registrierte Klausur-/Aufgabendokumente · 0 gemappte offizielle Aufgabenfamilien</p>
</div>
<div class="source-task-gap-grid">
<div>
<span>Dokumentstatus</span>
<strong>${taskDocs.length ? `${taskDocs.length} offizielle Prüfungsdokumente registriert` : 'keine offiziellen Aufgabenquellen registriert'}</strong>
<em>Die Dateien sind im Korpus, aber noch nicht in eine erschöpfende Aufgabenbank zerlegt.</em>
</div>
<div>
<span>Release-Grenze</span>
<strong>exam-bank-complete: nein</strong>
<em>Probeklausuren/Altklausuren müssen noch in Themen, Methoden, Fallen und Rubrics gemappt werden.</em>
</div>
</div>
<p class="source-companion-note">Mikro1 bleibt der interaktive Benchmark, aber die offizielle Aufgabenbank ist erst nach Task-Family-Mapping vollständig.</p>
</section>`;
}

export function createSourceCompanionModule({ renderMath } = {}) {
  return createSharedSourceCompanionModule({
    moduleSlug: 'mikro1',
    moduleTitle: 'Mikro I',
    sourceRoot: 'source-materials/Mikroökonomik I',
    chapters: CHAPTERS,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    getLectureSortKey: lectureSortKey,
    shouldShowUnanchoredConcept: (concept) => !concept.hasPageAnchors,
    headerDescription: 'Starte bei den offiziellen Dokumenten und prüfe, welche Portal-Konzepte bereits file-level darauf verweisen. Fehlende Seitenanker und Aufgabenbank-Mappings bleiben sichtbar.',
    matrixNote: 'Diese Matrix zeigt den aktuellen Mapping-Status. Mikro1 hat bereits file-level Quellenreferenzen, aber noch keine vollständige page-level Rekonstruktion.',
    unanchoredTag: 'file-level reference',
    detailGapBody: 'Dieses Dokument ist im offiziellen Mikro-I-Korpus registriert, aber aktuell verweist kein Portal-Konzept direkt darauf. Es muss in einem späteren Source-Parity-Pass geprüft, gemappt oder als Zusatzmaterial eingeordnet werden.',
    coverageGapBody: 'Dieses Dokument liegt im Mikro-I-Korpus, ist aber noch keinem Portal-Konzept, keinem Portal-Layer und keinem geprüften Seitenanker direkt zugeordnet.',
    renderTaskArchivePanel
  }, { renderMath });
}
