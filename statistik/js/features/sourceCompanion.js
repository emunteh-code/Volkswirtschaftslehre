import { createSourceCompanionModule as createSharedSourceCompanionModule } from '../../../assets/js/portal-core/features/sourceCompanionModule.js';
import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';
import {
  buildStatistikOfficialTaskPlaceholders,
  summarizeStatistikOfficialTaskDocuments,
  STATISTIK_TASK_PLACEHOLDER_POLICY
} from '../data/officialTaskIngestion.js';

function lectureSortKey(doc) {
  const title = String(doc?.title || '');
  const match = title.match(/Statistik[_\s-]*(\d+)/i) || title.match(/VL[_\s-]*(\d+)/i);
  if (match) return Number.parseInt(match[1], 10);
  if (/Vorlesungsplanung/i.test(title)) return 0;
  return 999;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderTaskArchivePanel(docs) {
  const summary = summarizeStatistikOfficialTaskDocuments(docs);
  const placeholders = buildStatistikOfficialTaskPlaceholders(docs);
  return `<section class="source-companion-task-gap" aria-label="Offizieller Aufgabenarchiv-Status">
<div class="source-coverage-head">
<div>
<span>Official Task Bank</span>
<h3>Statistik-Aufgaben ingestiert, Familien-Mapping offen</h3>
</div>
<p>${summary.total} offizielle Aufgabenquellen im Registry-Korpus</p>
</div>
<div class="source-task-gap-grid">
<div>
<span>Dokumenttypen</span>
<strong>Uebung: ${summary.countsByKind.exercise} · Loesung: ${summary.countsByKind.solution} · Tutorium: ${summary.countsByKind.tutorial} · Klausur: ${summary.countsByKind.exam}</strong>
<em>Diese Zahlen stammen direkt aus dem offiziellen Registry-Import.</em>
</div>
<div>
<span>Platzhalterstatus</span>
<strong>${placeholders.length} non-deceptive Platzhalterfamilie aktiv</strong>
<em>${escapeHtml(STATISTIK_TASK_PLACEHOLDER_POLICY)}</em>
</div>
</div>
<p class="source-companion-note">Es werden bewusst keine Aufgabeninhalte synthetisiert. Bis ein explizites Konzept-zu-Aufgabe-Mapping vorliegt, bleibt exam-bank-complete auf nein.</p>
</section>`;
}

export function createSourceCompanionModule({ renderMath } = {}) {
  return createSharedSourceCompanionModule({
    moduleSlug: 'statistik',
    moduleTitle: 'Statistik',
    sourceRoot: 'source-materials/Statistik',
    chapters: CHAPTERS,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    getLectureSortKey: lectureSortKey,
    renderTaskArchivePanel,
    headerDescription: 'Starte bei den offiziellen Statistik-Dokumenten und prüfe transparent, welche Portal-Konzepte nur referenziert oder bereits page-level verankert sind.',
    matrixNote: 'Statistik hat eine große offizielle Quellbasis. Der Companion zeigt ehrlich, wo page-level Anchors noch fehlen.',
    detailGapBody: 'Dieses Dokument ist im offiziellen Statistik-Korpus registriert, aber aktuell verweist kein Portal-Konzept direkt darauf. Es muss in einem nächsten Source-Parity-Pass eingeordnet werden.',
    coverageGapBody: 'Dieses Dokument liegt im Statistik-Korpus, ist aber noch keinem Portal-Konzept, keinem Portal-Layer und keinem geprüften Seitenanker direkt zugeordnet.'
  }, { renderMath });
}
