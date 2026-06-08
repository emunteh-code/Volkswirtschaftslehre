/**
 * Fleet learner-effectiveness helpers (Pass 1).
 * platform-added-explanation where content is synthesized.
 */

import { escapeHtml } from "../ui/semanticContent.js";

/** Learner-facing label renames */
export const LEARNER_LABELS = Object.freeze({
  transferpfad: "So erkennst du das in Aufgaben",
  formalerAnker: "Wichtigste Formel",
  quellanker: "In den Quellen prüfen",
  plattformSimulation: "Klausurähnliche Übung",
  pruefungsvorbereitung: "Klausurerkennung"
});

export function renderTabWorkflowHint() {
  return `<p class="tab-workflow-hint" id="tabWorkflowHint" role="note" hidden>
<span class="tab-workflow-hint__label">Empfohlener Ablauf:</span>
Theorie lesen → Formeln sichern → Aufgaben lösen → Quellen prüfen
</p>`;
}

/**
 * Action-based outcomes from entry.objectives or synthesized defaults.
 * @param {object} entry
 * @param {string} chapterTitle
 */
export function renderLessonOutcomes(entry, chapterTitle = "") {
  const raw = Array.isArray(entry?.objectives) ? entry.objectives : [];
  const verbs = /^(erkennen|erklären|unterscheiden|berechnen|anwenden|prüfen|ableiten|interpretieren|formulieren|zuordnen)/i;
  let items = raw
    .map((o) => String(o).trim())
    .filter(Boolean)
    .slice(0, 5)
    .map((o) => (verbs.test(o) ? o : `erklären: ${o}`));

  if (!items.length && chapterTitle) {
    items = [
      `erklären, worin das Kernproblem von „${chapterTitle}" besteht`,
      "die zentrale Formel oder Methode der Aufgabe zuordnen",
      "typische Klausurfehler vor der Rechnung benennen"
    ];
  }
  if (!items.length) return "";

  const lis = items.map((t) => `<li>${escapeHtml(t)}</li>`).join("");
  return `<aside class="lesson-outcomes" role="region" aria-labelledby="lesson-outcomes-h">
<h2 class="lesson-outcomes__title" id="lesson-outcomes-h">Nach dieser Lektion kannst du …</h2>
<ul class="lesson-outcomes__list">${lis}</ul>
<p class="pedagogy-source-note"><em>platform-added-explanation:</em> Lernziele aus Modulmetadaten und Kursstruktur verdichtet.</p>
</aside>`;
}

export function renderSourceUsePedagogy() {
  return `<details class="source-use-pedagogy">
<summary>In den Quellen prüfen — wann?</summary>
<ul>
<li>Notation und Symbole mit der Vorlesung abgleichen</li>
<li>Offizielle Definitionen und Randfälle nachlesen</li>
<li>Bei Widersprüchen: ILIAS-PDF hat Vorrang</li>
</ul>
<p class="pedagogy-source-note"><em>platform-added-explanation:</em> Quellen-Nutzungsregel des Portals.</p>
</details>`;
}

/**
 * @param {object} entry
 * @param {string} conceptId
 * @param {string} chapterTitle
 */
export function renderMasteryCheckpoint(entry, conceptId, chapterTitle = "") {
  const formula = entry?.formeln?.[0];
  const formulaLabel = formula?.label ? String(formula.label) : "Kernrelation";
  const title = escapeHtml(chapterTitle || "dieses Konzept");
  return `<section class="mastery-checkpoint" role="region" aria-labelledby="mastery-check-h">
<h2 class="mastery-checkpoint__title" id="mastery-check-h">Mastery Check</h2>
<ol class="mastery-checkpoint__list">
<li><strong>Konzept:</strong> Erkläre in einem Satz, wann ${title} in der Klausur relevant ist.</li>
<li><strong>Formel:</strong> Welche Größe liefert „${escapeHtml(formulaLabel)}" — ohne Rechnung?</li>
<li><strong>Anwendung:</strong> Nenne den ersten sinnvollen Rechenschritt bei einer Standardaufgabe.</li>
<li><strong>Fehler:</strong> Welche Annahme vergisst du am häufigsten?</li>
</ol>
<p class="mastery-checkpoint__cta">
<button type="button" class="btn btn--soft-primary mastery-checkpoint__link" onclick="window.__switchTab('aufgaben')">Zum Aufgaben-Tab →</button>
</p>
<p class="mastery-checkpoint__note"><em>platform-added-drill:</em> Selbsttest vor den Aufgaben.</p>
</section>`;
}

export function renderConfidenceCheckpoint(conceptId) {
  const id = escapeHtml(conceptId || "");
  return `<section class="confidence-checkpoint" role="group" aria-labelledby="confidence-h-${id}">
<h3 class="confidence-checkpoint__title" id="confidence-h-${id}">Wie sicher bist du?</h3>
<p class="confidence-checkpoint__hint">0 = nicht verstanden · 1 = wiedererkannt · 2 = kann erklären · 3 = kann anwenden</p>
<div class="confidence-checkpoint__scale" data-concept-id="${id}">
${[0, 1, 2, 3].map((n) => `<button type="button" class="confidence-btn" data-level="${n}" aria-label="Stufe ${n}">${n}</button>`).join("")}
</div>
<p class="pedagogy-source-note"><em>platform-added-drill:</em> Selbsteinschätzung für Wiederholungsplanung.</p>
</section>`;
}

export function renderReviewControls(conceptId) {
  const id = escapeHtml(conceptId || "");
  return `<div class="review-controls" role="group" aria-label="Wiederholung markieren" data-concept-id="${id}">
<button type="button" class="review-control-btn" data-review="unsure">Unsicher</button>
<button type="button" class="review-control-btn" data-review="repeat">Wiederholen</button>
<button type="button" class="review-control-btn" data-review="mastered">Beherrscht</button>
<span class="pedagogy-source-note review-controls__note"><em>platform-added-drill:</em> Wiederholungsstatus im Browser speichern.</span>
</div>`;
}

/**
 * Convert rail warning titles into active self-check prompts.
 * @param {{ title?: string, body?: string }[]} warnings
 */
export function renderFehlerChecklist(warnings = []) {
  if (!warnings.length) return "";
  const items = warnings.slice(0, 6).map((w) => {
    const title = String(w.title || "Prüfpunkt").trim();
    const prompt = title.endsWith("?") ? title : `Habe ich „${title}" beachtet?`;
    return `<li><label class="fehler-check-item"><input type="checkbox" /> ${escapeHtml(prompt)}</label></li>`;
  });
return `<section class="fehler-checklist" role="region" aria-labelledby="fehler-check-h">
<h3 class="fehler-checklist__title" id="fehler-check-h">Selbsttest vor der Klausur</h3>
<ul class="fehler-checklist__list">${items.join("")}</ul>
<p class="pedagogy-source-note"><em>platform-added-drill:</em> Aus Warnhinweisen als aktive Checkliste abgeleitet.</p>
</section>`;
}

/**
 * @param {object} chapter
 * @param {object} entry
 * @param {object} [intuition]
 */
export function renderExamRecognitionBlock(chapter, entry, intuition = null) {
  const title = escapeHtml(chapter?.title || "Konzept");
  const formula = entry?.formeln?.[0];
  const method = formula?.label ? escapeHtml(String(formula.label)) : "passende Formel/Methode";
  const core = intuition?.core
    ? escapeHtml(String(intuition.core).slice(0, 200))
    : entry?.motivation
      ? escapeHtml(String(entry.motivation).slice(0, 200))
      : "";
  return `<section class="exam-recognition" role="region" aria-labelledby="exam-rec-h">
<h3 class="exam-recognition__title" id="exam-rec-h">${LEARNER_LABELS.pruefungsvorbereitung}</h3>
<dl class="exam-recognition__dl">
<dt>Woran erkennst du den Aufgabentyp?</dt>
<dd>Stichworte zu „${title}" in Aufgabenstellung oder Datenlayout.</dd>
<dt>Erste Entscheidung</dt>
<dd>Modell/Annahme benennen, dann ${method} zuordnen.</dd>
<dt>Erster Rechenschritt</dt>
<dd>Größen und Einheiten notieren; $H_0$ / Notation aus der VL fixieren.</dd>
<dt>Häufige Falle</dt>
<dd>Stichprobe und Population, bzw. Parameter und Schätzer, nicht vermischen.</dd>
</dl>
${core ? `<p class="exam-recognition__core"><strong>Kernsatz:</strong> ${core}</p>` : ""}
<p class="exam-recognition__note"><em>platform-added-explanation:</em> Klausurerkennung aus Konzeptmetadaten.</p>
</section>`;
}

/** One lightweight recall prompt from lesson objectives or concept title. */
export function buildTheoryMicroCheck(entry, chapterTitle = "") {
  const title = String(chapterTitle || "").trim();
  const objective = Array.isArray(entry?.objectives) ? String(entry.objectives[0] || "").trim() : "";
  if (objective) {
    return renderMicroRetrievalCheck(
      `Kannst du „${objective}" in eigenen Worten erklären — ohne ins Skript zu schauen?`,
      objective
    );
  }
  if (title) {
    return renderMicroRetrievalCheck(
      `Wann ist „${title}" in einer Klausuraufgabe das richtige Werkzeug?`,
      "Wenn Stichworte, Datenlayout oder die gesuchte Größe zum Konzept passen — dann Formel-Tab und Klausurerkennung prüfen."
    );
  }
  return "";
}

export function renderMicroRetrievalCheck(question, answer) {
  const q = escapeHtml(question);
  const a = escapeHtml(answer);
  const id = `mc_${Math.random().toString(36).slice(2, 9)}`;
  return `<div class="micro-retrieval-check">
<p class="micro-retrieval-check__q">${q}</p>
<button type="button" class="btn btn--soft-primary micro-retrieval-check__btn" aria-expanded="false" aria-controls="${id}" onclick="window.__toggleMicroCheck('${id}', this)">Antwort prüfen</button>
<div class="micro-retrieval-check__a" id="${id}" hidden>${a}</div>
<p class="pedagogy-source-note"><em>platform-added-drill:</em> Abrufcheck vor dem Weiterlesen.</p>
</div>`;
}

/**
 * Staged practice actions for guided tasks.
 */
export function renderStagedPracticeCard({
  label,
  questionHtml,
  taskIndex,
  hint = "",
  steps = [],
  result = "",
  answerMarkupFull = "",
  hasSimilarTask = false
}) {
  const idx = taskIndex;
  const hintId = `hint_${idx}`;
  const approachId = `approach_${idx}`;
  const stepId = `step_${idx}`;
  const solId = `sol_${idx}`;
  const errId = `err_${idx}`;

  const firstStep = steps[0]?.text ? escapeHtml(steps[0].text) : "Ersten Lösungsschritt skizzieren.";
  const hintBtn = hint
    ? `<button type="button" class="btn btn--soft-primary" onclick="window.__toggleReveal('${hintId}', this)" data-closed-label="Hinweis anzeigen" data-open-label="Hinweis verbergen">Hinweis anzeigen</button>`
    : "";
  const approachBtn = steps.length
    ? `<button type="button" class="btn btn--soft-primary" onclick="window.__toggleReveal('${approachId}', this)" data-closed-label="Ansatz anzeigen" data-open-label="Ansatz verbergen">Ansatz anzeigen</button>`
    : "";
  const stepBtn = steps.length
    ? `<button type="button" class="btn btn--soft-primary" onclick="window.__toggleReveal('${stepId}', this)" data-closed-label="Nächster Schritt" data-open-label="Schritt verbergen">Nächster Schritt</button>`
    : "";

  const similarBtn = hasSimilarTask
    ? `<button type="button" class="btn btn--ghost" onclick="window.__scrollToSimilarTask(${idx + 1})">Ähnliche Aufgabe</button>`
    : "";

  return `<div class="problem-card problem-card--staged" id="prob_card_${idx}">
<div class="prob-num">${escapeHtml(label)}</div>
<div class="prob-text">${questionHtml}</div>
<div class="prob-actions prob-actions--staged">
${hintBtn}
${approachBtn}
${stepBtn}
<button type="button" class="btn btn--soft-primary" id="solBtn_${idx}" data-closed-label="Vollständige Lösung" data-open-label="Lösung verbergen" onclick="window.__toggleSolution(${idx})">Vollständige Lösung</button>
<button type="button" class="btn btn--ghost" onclick="window.__toggleReveal('${errId}', this)" data-closed-label="Fehlercheck" data-open-label="Fehlercheck schließen">Fehlercheck</button>
${similarBtn}
</div>
${hint ? `<div class="staged-reveal" id="${hintId}" hidden><strong>Hinweis:</strong> ${escapeHtml(hint)}</div>` : ""}
${steps.length ? `<div class="staged-reveal" id="${approachId}" hidden><strong>Ansatz:</strong> Zielgröße benennen, dann Formel aus dem Formeln-Tab zuordnen.</div>` : ""}
${steps.length ? `<div class="staged-reveal" id="${stepId}" hidden><strong>Schritt 1:</strong> ${firstStep}</div>` : ""}
<div class="staged-reveal fehler-check-inline" id="${errId}" hidden>
<ul>
<li>Habe ich die richtige Formel/Methode gewählt?</li>
<li>Sind Einheiten und Stichprobengröße konsistent?</li>
<li>Habe ich Annahmen (Verteilung, Unabhängigkeit) genannt?</li>
</ul>
<p class="pedagogy-source-note"><em>platform-added-drill:</em> Generischer Fehlercheck, nicht offizielle Lösung.</p>
</div>
<div class="solution-block" id="${solId}" aria-expanded="false">${answerMarkupFull || `<p>${escapeHtml(result || "Musterlösung im Modul ergänzen.")}</p>`}</div>
</div>`;
}

/** Beginner-safe role label for derivation step chains. */
export function getDerivationStepRole(index, total, step = {}) {
  if (step.role) return String(step.role);
  if (step.whyAllowed || step.why) return "Warum erlaubt?";
  if (step.examRule || step.klausurregel) return "Klausurregel";
  if (index === 0) return "Ausgangspunkt";
  if (index === total - 1) return "Ergebnis";
  if (index === total - 2 && total > 3) return "Bedeutung";
  return "Schritt";
}

export function renderFormulaPedagogyExtras(formula) {
  if (!formula) return "";
  const label = formula.label ? escapeHtml(String(formula.label)) : "Formel";
  const desc = formula.desc ? escapeHtml(String(formula.desc)) : "";
  const when = formula.whenToUse
    ? escapeHtml(String(formula.whenToUse))
    : "Wenn die Aufgabenstellung diese Relation oder Größe verlangt.";
  const mistake = formula.commonMistake
    ? escapeHtml(String(formula.commonMistake))
    : "Symbole vertauschen oder Annahmen vor der Rechnung nicht benennen.";
  return `<footer class="formula-pedagogy-extras">
<p class="formula-pedagogy-extras__why"><span class="formula-pedagogy-extras__tag">Warum</span> ${desc || `${label} strukturiert den Klausurpfad.`}</p>
<p class="formula-pedagogy-extras__when"><span class="formula-pedagogy-extras__tag">Wann</span> ${when}</p>
<p class="formula-pedagogy-extras__mistake"><span class="formula-pedagogy-extras__tag">Fehler</span> ${mistake}</p>
</footer>`;
}

export function getLandingNextAction(snapshot) {
  if (snapshot.due > 0) return "Wiederholen →";
  if (!snapshot.started) return "Starten →";
  if (snapshot.percent >= 70) return "Test starten →";
  return "Weiterlernen →";
}
