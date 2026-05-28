import { createSourceCompanionModule as createSharedSourceCompanionModule } from '../../../assets/js/portal-core/features/sourceCompanionModule.js';
import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';
import { TASK_FAMILIES } from '../data/taskFamilies.js';
import { MIKRO1_OFFICIAL_TASK_DOC_BASELINE_2026_05_28 } from '../data/officialTaskIngestion.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function lectureSortKey(doc) {
  const title = String(doc?.title || '');
  const match = title.match(/Mikro_1_VL_(\d+)/i);
  if (match) return Number.parseInt(match[1], 10);
  if (/Vorlesungsplanung/i.test(title)) return 0;
  return 999;
}

function renderTaskArchivePanel(docs) {
  const taskDocs = docs.filter((doc) => ['exercise', 'solution', 'tutorial', 'exam'].includes(doc.kind));
  const officialTaskFamilies = TASK_FAMILIES.filter(
    (family) => family.officialTaskCoverage === 'official-task-source'
  );
  const familiesWithoutOfficialTasks = TASK_FAMILIES.filter(
    (family) => family.officialTaskCoverage !== 'official-task-source' && !family.placeholderLabel
  );
  const missingKinds = [
    { kind: 'exercise', label: 'Übungsblätter' },
    { kind: 'solution', label: 'Lösungsschlüssel' },
    { kind: 'tutorial', label: 'Tutorien' }
  ].filter(({ kind }) => !docs.some((doc) => doc.kind === kind));
  const examCount =
    taskDocs.filter((doc) => doc.kind === 'exam').length ||
    MIKRO1_OFFICIAL_TASK_DOC_BASELINE_2026_05_28.exam;
  const lectureSlides = docs.filter((doc) => doc.kind === 'lecture-slide').length;

  return `<section class="source-companion-task-gap" aria-label="Offizieller Aufgabenarchiv-Status">
<div class="source-coverage-head">
<div>
<span>Official Task Bank</span>
<h3>Probeklausur-Artefakte noch nicht task-family-mapped</h3>
</div>
<p>${examCount} registrierte Klausur-/Probeklausur-Dokumente · ${officialTaskFamilies.length}/${TASK_FAMILIES.length} Familien mit offizieller Aufgabenquelle · ${lectureSlides} VL-Folien</p>
</div>
<div class="source-task-gap-grid">
<div>
<span>Fehlende Quellenarten</span>
<strong>${missingKinds.length ? missingKinds.map(({ label }) => escapeHtml(label)).join(', ') : 'keine'}</strong>
<em>Im Mikro-I-Korpus sind keine separaten Übungsblätter oder Lösungsschlüssel registriert.</em>
</div>
<div>
<span>Prüfungstransfer-Status</span>
<strong>${familiesWithoutOfficialTasks.length} VL-verankerte Klausurfamilien</strong>
<em>Familien folgen reviewed page anchors; Mapping aus JPG/PDF-Probeklausuren steht aus.</em>
</div>
</div>
<div class="source-task-family-list">
${familiesWithoutOfficialTasks
  .slice(0, 8)
  .map(
    (family) => `<button type="button" onclick="window.__navigate('${escapeHtml(family.conceptId)}')">
<span>${escapeHtml(family.examRelevance || 'Relevanz offen')} · ${escapeHtml(family.difficulty || 'Niveau offen')}</span>
<strong>${escapeHtml(family.title)}</strong>
</button>`
  )
  .join('')}
</div>
<p class="source-companion-note">Mikro I bleibt der interaktive Benchmark. <code>exam-bank-complete</code> bleibt blockiert, bis Probeklausur-Aufgaben nach OCR/Review in Familien mit offizieller Provenienz zerlegt sind.</p>
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
  return createSharedSourceCompanionModule(
    {
      moduleSlug: 'mikro1',
      moduleTitle: 'Mikro I',
      sourceRoot: 'source-materials/Mikroökonomik I',
      chapters: CHAPTERS,
      provenanceByConcept: PROVENANCE_BY_CONCEPT,
      getLectureSortKey: lectureSortKey,
      shouldShowUnanchoredConcept: (concept) => !concept.hasPageAnchors,
      includeAnchorMetadata: true,
      headerDescription:
        'Starte bei den offiziellen Mikro-I-Dokumenten und prüfe transparent, welche Portal-Konzepte file-level referenziert sind und wo page-level Anker noch fehlen.',
      matrixNote:
        'Diese Matrix zeigt den Mapping-Status. File-level Referenzen sind Orientierung, keine Vollständigkeitszusage — source-complete erst mit reviewed page anchors.',
      unanchoredTitle: 'Portalinhalt ohne geprüften Seitenanker',
      unanchoredDescription:
        'Alle Konzepte mit VL-Referenz, aber ohne reviewed page anchor, bleiben hier sichtbar bis der page-level Pass abgeschlossen ist.',
      unanchoredTag: 'file-level reference',
      unanchoredStatus: 'Noch nicht als page-anchored source-complete zertifiziert.',
      localSourceHint:
        'Dieser Button prüft zuerst, ob <code>source-materials/Mikroökonomik I/</code> in dieser Umgebung verfügbar ist. Konzeptanker öffnen die passende Datei mit Seitenfragment, sofern vorhanden.',
      detailGapBody:
        'Dieses Dokument ist im offiziellen Mikro-I-Korpus registriert, aber aktuell verweist kein Portal-Konzept direkt darauf. Es muss in einem nächsten Source-Parity-Pass eingeordnet werden.',
      coverageGapBody:
        'Dieses Dokument liegt im Mikro-I-Korpus, ist aber noch keinem Portal-Konzept, keinem Portal-Layer und keinem geprüften Seitenanker direkt zugeordnet.',
      sourceParityMessages: MIKRO1_SOURCE_PARITY_MESSAGES,
      renderTaskArchivePanel
    },
    { renderMath }
  );
}
