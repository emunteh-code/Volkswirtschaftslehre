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

function summarizeTaskDocuments(docs) {
  const taskDocs = docs.filter((doc) => ['exercise', 'solution', 'tutorial', 'exam'].includes(doc.kind));
  const counts = { exercise: 0, solution: 0, tutorial: 0, exam: 0 };
  for (const doc of taskDocs) {
    if (counts[doc.kind] != null) counts[doc.kind] += 1;
  }
  return { total: taskDocs.length, counts };
}

function renderTaskArchivePanel(docs) {
  const { total, counts } = summarizeTaskDocuments(docs);
  const lectureSlides = docs.filter((doc) => doc.kind === 'lecture-slide').length;
  return `<section class="source-companion-task-gap" aria-label="Offizieller Aufgabenarchiv-Status">
<div class="source-coverage-head">
<div>
<span>Official Task Bank</span>
<h3>Offizielle Aufgaben noch nicht task-family-mapped</h3>
</div>
<p>${total} registrierte Aufgaben-/Prüfungsdokumente · ${lectureSlides} Vorlesungsfolien im Korpus</p>
</div>
<div class="source-task-gap-grid">
<div>
<span>Dokumenttypen</span>
<strong>Übung: ${counts.exercise} · Lösung: ${counts.solution} · Tutorium: ${counts.tutorial} · Klausur/Probeklausur: ${counts.exam}</strong>
<em>Zahlen stammen aus dem offiziellen Registry-Import; Inhalte werden nicht synthetisiert.</em>
</div>
<div>
<span>Release-Grenze</span>
<strong>exam-bank-complete: nein</strong>
<em>18+ offizielle Prüfungsartefakte sind registriert, aber noch nicht in Aufgabenfamilien mit Rubrics zerlegt.</em>
</div>
</div>
<p class="source-companion-note">Mikro I bleibt der interaktive Benchmark. Die offizielle Aufgabenbank wird erst nach Task-Family-Mapping und direct-source-Provenienz pro Aufgabe als vollständig gelten.</p>
</section>`;
}

const MIKRO1_SOURCE_PARITY_MESSAGES = {
  partial: [
    'File-level VL-Referenzen in geprüfte Seiten- oder Abschnittsanker überführen (Mikro II als Referenzworkflow).',
    'Notation, Graphkonventionen und Herleitungsstil gegen Mikro_1_VL_* Folien prüfen.',
    'Probeklausur-/Altklausur-Artefakte erst nach Task-Family-Mapping als prüfungsbewiesen behandeln.'
  ],
  anchored: [
    'Alle relevanten VL-Seiten gegen Konzepte, Formeln und Prüfungstransfer durchgehen.',
    'Reference-only Portalbereiche in reviewed page anchors umwandeln.',
    'Offizielle Klausursets in Aufgabenfamilien mit Methoden, Fallen und Rubrics mappen.'
  ]
};

export function createSourceCompanionModule({ renderMath } = {}) {
  return createSharedSourceCompanionModule({
    moduleSlug: 'mikro1',
    moduleTitle: 'Mikro I',
    sourceRoot: 'source-materials/Mikroökonomik I',
    chapters: CHAPTERS,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    getLectureSortKey: lectureSortKey,
    shouldShowUnanchoredConcept: (concept) => !concept.hasPageAnchors,
    includeAnchorMetadata: true,
    headerDescription: 'Starte bei den offiziellen Mikro-I-Dokumenten und prüfe transparent, welche Portal-Konzepte file-level referenziert sind und wo page-level Anker noch fehlen.',
    matrixNote: 'Diese Matrix zeigt den Mapping-Status. File-level Referenzen sind Orientierung, keine Vollständigkeitszusage — source-complete erst mit reviewed page anchors.',
    unanchoredTitle: 'Portalinhalt ohne geprüften Seitenanker',
    unanchoredDescription: 'Alle Konzepte mit VL-Referenz, aber ohne reviewed page anchor, bleiben hier sichtbar bis der page-level Pass abgeschlossen ist.',
    unanchoredTag: 'file-level reference',
    unanchoredStatus: 'Noch nicht als page-anchored source-complete zertifiziert.',
    localSourceHint: 'Dieser Button prüft zuerst, ob <code>source-materials/Mikroökonomik I/</code> in dieser Umgebung verfügbar ist. Konzeptanker öffnen die passende Datei mit Seitenfragment, sofern vorhanden.',
    detailGapBody: 'Dieses Dokument ist im offiziellen Mikro-I-Korpus registriert, aber aktuell verweist kein Portal-Konzept direkt darauf. Es muss in einem nächsten Source-Parity-Pass eingeordnet werden.',
    coverageGapBody: 'Dieses Dokument liegt im Mikro-I-Korpus, ist aber noch keinem Portal-Konzept, keinem Portal-Layer und keinem geprüften Seitenanker direkt zugeordnet.',
    sourceParityMessages: MIKRO1_SOURCE_PARITY_MESSAGES,
    renderTaskArchivePanel
  }, { renderMath });
}
