import { createSourceCompanionModule as createSharedSourceCompanionModule } from '../../../assets/js/portal-core/features/sourceCompanionModule.js';
import { CHAPTERS } from '../data/chapters.js';
import { PROVENANCE_BY_CONCEPT } from '../data/contentManifest.js';
import { TASK_FAMILIES } from '../data/taskFamilies.js';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function lectureSortKey(doc) {
  const title = String(doc?.title || '');
  const match = title.match(/Mikro_2_(\d+)/i) || title.match(/Mikro2_(\d+)/i);
  if (match) return Number.parseInt(match[1], 10);
  if (/Vorlesungsplanung/i.test(title)) return 0;
  return 999;
}

function renderTaskArchivePanel(docs) {
  const taskDocs = docs.filter((doc) => ['exercise', 'solution', 'tutorial', 'exam'].includes(doc.kind));
  const officialTaskFamilies = TASK_FAMILIES.filter((family) => family.officialTaskCoverage === 'official-task-source');
  const missingKinds = [
    { kind: 'exercise', label: 'Übungsblätter' },
    { kind: 'solution', label: 'Lösungsschlüssel' },
    { kind: 'tutorial', label: 'Tutorien' },
    { kind: 'exam', label: 'Klausuren / Probeklausuren' }
  ].filter(({ kind }) => !docs.some((doc) => doc.kind === kind));
  const familiesWithoutOfficialTasks = TASK_FAMILIES.filter((family) => family.officialTaskCoverage !== 'official-task-source');
  return `<section class="source-companion-task-gap" aria-label="Offizieller Aufgabenarchiv-Status">
<div class="source-coverage-head">
<div>
<span>Official Task Bank</span>
<h3>Aufgabenarchiv noch nicht source-complete</h3>
</div>
<p>${taskDocs.length} offizielle Aufgabenquellen · ${officialTaskFamilies.length}/${TASK_FAMILIES.length} Familien mit offizieller Aufgabenquelle</p>
</div>
<div class="source-task-gap-grid">
<div>
<span>Fehlende Quellenarten</span>
<strong>${missingKinds.length ? missingKinds.map(({ label }) => escapeHtml(label)).join(', ') : 'keine'}</strong>
<em>Diese Dokumenttypen sind im aktuellen Mikro-II-Korpus nicht registriert.</em>
</div>
<div>
<span>Prüfungstransfer-Status</span>
<strong>${familiesWithoutOfficialTasks.length} Familien nur source-grounded</strong>
<em>Die Familien sind an Vorlesungsquellen ausgerichtet, aber nicht aus offiziellen Aufgaben rekonstruiert.</em>
</div>
</div>
<div class="source-task-family-list">
${familiesWithoutOfficialTasks.map((family) => `<button type="button" onclick="window.__navigate('${escapeHtml(family.conceptId)}')">
<span>${escapeHtml(family.examRelevance || 'Relevanz offen')} · ${escapeHtml(family.difficulty || 'Niveau offen')}</span>
<strong>${escapeHtml(family.title)}</strong>
<em>${escapeHtml(family.officialTaskGap || 'Offizielle Aufgabenquelle fehlt.')}</em>
</button>`).join('')}
</div>
<p class="source-companion-note">Bis Übungsblätter, Lösungen, Tutorien oder Altklausuren vorliegen, bleibt Mikro2 prüfungsnah, aber nicht als vollständige offizielle Aufgabenbank zertifiziert.</p>
</section>`;
}

const MIKRO2_SOURCE_PARITY_MESSAGES = {
  gap: [
    'Dokument sichten und als prüfungsrelevant, Zusatzmaterial oder nicht abdeckungsrelevant klassifizieren.',
    'Falls relevant: passende Portal-Konzepte oder neue Konzeptlücken erfassen.',
    'Mindestens erste geprüfte Seitenanker anlegen, bevor dieses Dokument als rekonstruiert gilt.'
  ],
  partial: [
    'Bestehende Dokumentreferenzen in konkrete Seiten- oder Abschnittsanker überführen.',
    'Portal-Layer gegen offizielle Terminologie, Notation und Graphkonvention prüfen.',
    'Reference-only Layer erst nach Seitenprüfung als page-level abgedeckt behandeln.'
  ],
  anchored: [
    'Alle relevanten Folienseiten gegen Konzepte, Formeln und Aufgabenfamilien durchgehen.',
    'Reference-only Portalbereiche in geprüfte Seitenanker umwandeln.',
    'Nach Abschluss prüfen, ob Formeln, Herleitungen und Prüfungstransfer vollständig source-anchored sind.'
  ]
};

export function createSourceCompanionModule({ renderMath } = {}) {
  return createSharedSourceCompanionModule({
    moduleSlug: 'mikro2',
    moduleTitle: 'Mikro II',
    sourceRoot: 'source-materials/Mikroökonomik II',
    chapters: CHAPTERS,
    provenanceByConcept: PROVENANCE_BY_CONCEPT,
    kindLabels: {
      'lecture-slide': 'Vorlesungsfolien',
      supplement: 'Weitere Unterlage',
      dataset: 'Dateiliste / Datensatz',
      exercise: 'Übung',
      solution: 'Lösung',
      tutorial: 'Tutorium',
      exam: 'Klausur'
    },
    getLectureSortKey: lectureSortKey,
    shouldShowUnanchoredConcept: (concept) => !concept.hasPageAnchors && concept.paths.length === 0,
    headerDescription: 'Starte bei den offiziellen Dokumenten und prüfe, welche Portal-Konzepte bereits direkt darauf verweisen. Fehlende Abdeckung bleibt sichtbar.',
    matrixNote: 'Diese Matrix ist ein Mapping-Status, kein Vollständigkeitszertifikat. Eine Vorlesung kann Seitenanker haben und trotzdem noch nicht vollständig rekonstruiert sein.',
    unanchoredTitle: 'Portalinhalt ohne direkten Quellenanker',
    unanchoredDescription: 'Diese Einträge bleiben sichtbar, zählen aber nicht als source-complete oder exam-proven, bis ein offizieller Mikro-II-Quellenanker vorliegt.',
    unanchoredTag: 'platform-added support',
    unanchoredStatus: 'Nicht als offiziell prüfungsbewiesener Mikro-II-Stoff zertifiziert.',
    localSourceHint: 'Dieser Button prüft zuerst, ob <code>source-materials/Mikroökonomik II/</code> in dieser Umgebung verfügbar ist. Bei Konzeptankern wird die geprüfte Seitenposition mitgegeben, sofern der PDF-Viewer sie unterstützt.',
    detailGapBody: 'Dieses Dokument ist im offiziellen Mikro-II-Korpus registriert, aber aktuell verweist kein Portal-Konzept direkt darauf. Es muss in einem späteren Source-Parity-Pass geprüft, gemappt oder als Zusatzmaterial eingeordnet werden.',
    coverageGapBody: 'Dieses Dokument liegt im Mikro-II-Korpus, ist aber noch keinem Portal-Konzept, keinem Portal-Layer und keinem geprüften Seitenanker direkt zugeordnet.',
    includeAnchorMetadata: true,
    sourceParityMessages: MIKRO2_SOURCE_PARITY_MESSAGES,
    renderTaskArchivePanel
  }, { renderMath });
}
