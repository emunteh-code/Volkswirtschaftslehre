/**
 * Fleet learner-effectiveness helpers (Pass 1).
 * platform-added-explanation where content is synthesized (author-only; not shown to learners).
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

function collapseBtn(panelId, label) {
  return `<button type="button" class="staged-reveal__collapse btn btn--ghost btn--xs" onclick="window.__closeReveal('${panelId}')" aria-label="${escapeHtml(label)} schließen">Schließen</button>`;
}

function stagedPanel(id, kind, label, bodyHtml) {
  return `<div class="staged-reveal staged-reveal--${kind}" id="${id}" hidden>
<div class="staged-reveal__head">
<span class="staged-reveal__label">${escapeHtml(label)}</span>
${collapseBtn(id, label)}
</div>
<div class="staged-reveal__body">${bodyHtml}</div>
</div>`;
}

/**
 * Action-based outcomes from entry.objectives or synthesized defaults.
 * @param {object} entry
 * @param {string} chapterTitle
 */
function buildLessonOutcomeItems(entry, chapterTitle = "") {
  const raw = Array.isArray(entry?.objectives) ? entry.objectives : [];
  const verbs = /^(erkennen|erklären|unterscheiden|berechnen|anwenden|prüfen|ableiten|interpretieren|formulieren|zuordnen)/i;
  let items = raw
    .map((o) => String(o).trim())
    .filter(Boolean)
    .slice(0, 5)
    .map((o) => (verbs.test(o) ? o : `erklären: ${o}`));

  if (!items.length && chapterTitle) {
    const formulaLabels = (entry?.formeln || [])
      .slice(0, 3)
      .map((f) => (f?.label ? String(f.label).trim() : ""))
      .filter(Boolean);
    const title = chapterTitle.trim();
    items = [
      `erklären, worin das Kernproblem von „${title}" besteht`,
      formulaLabels.length
        ? `die Größen ${formulaLabels.join(", ")} in Klausuraufgaben zuordnen`
        : "die zentrale Formel oder Methode der Aufgabe zuordnen",
      `typische Klausurfehler zu „${title}" vor der Rechnung benennen`
    ];
    if (entry?.motivation) {
      const snippet = String(entry.motivation).trim().slice(0, 80);
      if (snippet) {
        items.push(`erkennen, wann Stichworte wie „${snippet.replace(/[.!?…]+$/, "")}…" auf dieses Konzept hindeuten`);
      }
    }
  }
  return items;
}

export function renderLessonOutcomes(entry, chapterTitle = "") {
  const items = buildLessonOutcomeItems(entry, chapterTitle);
  if (!items.length) return "";

  const lis = items.map((t) => `<li>${escapeHtml(t)}</li>`).join("");
  return `<aside class="lesson-outcomes" role="region" aria-labelledby="lesson-outcomes-h">
<h2 class="lesson-outcomes__title" id="lesson-outcomes-h">Nach dieser Lektion kannst du …</h2>
<ul class="lesson-outcomes__list">${lis}</ul>
</aside>`;
}

/**
 * Integrated theory opening card (Pass 4): Kurz erklärt, Warum wichtig?, outcomes, optional Mini-Check.
 * @param {object} entry
 * @param {string} chapterTitle
 * @param {object|null} [intuition]
 */
export function renderLessonIntroCard(entry, chapterTitle = "", intuition = null) {
  const title = String(chapterTitle || "").trim();
  const kurz =
    (entry?.motivation ? String(entry.motivation).trim() : "") ||
    (intuition?.core ? String(intuition.core).trim() : "") ||
    (title ? `${title} — Kernbaustein für Klausurtransfer in diesem Modulblock.` : "");
  const warum =
    (intuition?.bridge ? String(intuition.bridge).trim() : "") ||
    (title
      ? `In Klausuren zählt der sichere Zugriff auf Notation, Formelwahl und typische Fallen zu „${title}".`
      : "");
  const outcomes = buildLessonOutcomeItems(entry, chapterTitle);
  const microCheck = buildTheoryMicroCheck(entry, chapterTitle);

  const outcomesHtml = outcomes.length
    ? `<div class="lesson-intro-card__block lesson-intro-card__block--outcomes">
<h3 class="lesson-intro-card__label">Nach dieser Lektion kannst du …</h3>
<ul class="lesson-intro-card__list">${outcomes.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
</div>`
    : "";

  return `<section class="lesson-intro-card" role="region" aria-labelledby="lesson-intro-h">
<h2 class="lesson-intro-card__title" id="lesson-intro-h">Lektionseinstieg</h2>
<div class="lesson-intro-card__grid">
<div class="lesson-intro-card__block">
<h3 class="lesson-intro-card__label">Kurz erklärt</h3>
<p class="lesson-intro-card__copy">${escapeHtml(kurz)}</p>
</div>
<div class="lesson-intro-card__block">
<h3 class="lesson-intro-card__label">Warum wichtig?</h3>
<p class="lesson-intro-card__copy">${escapeHtml(warum)}</p>
</div>
${outcomesHtml}
</div>
${microCheck ? `<div class="lesson-intro-card__micro">${microCheck}</div>` : ""}
</section>`;
}

/**
 * Kernidee ConceptAnchor: Kernsatz, Denkbild, Beispiel, Brücke zur Formel.
 * @param {object|null} intuition
 * @param {object} entry
 * @param {string} [formalAnchorHtml]
 */
export function renderConceptAnchor(intuition, entry, formalAnchorHtml = "") {
  const core = intuition?.core
    ? String(intuition.core).trim()
    : entry?.motivation
      ? String(entry.motivation).trim()
      : "";
  const analogy = intuition?.analogy ? String(intuition.analogy).trim() : "";
  const example =
    Array.isArray(intuition?.exam) && intuition.exam[0]?.if
      ? `${String(intuition.exam[0].if).trim()} → ${String(intuition.exam[0].then || "").trim()}`
      : Array.isArray(entry?.cards) && entry.cards[0]?.note
        ? String(entry.cards[0].note).trim()
        : "";
  const bridge = intuition?.bridge ? String(intuition.bridge).trim() : "";
  if (!core && !analogy && !example && !formalAnchorHtml && !bridge) return "";

  const rows = [
    core
      ? `<div class="concept-anchor__row"><span class="concept-anchor__label">Kernsatz</span><p class="concept-anchor__value">${escapeHtml(core)}</p></div>`
      : "",
    analogy
      ? `<div class="concept-anchor__row"><span class="concept-anchor__label">Denkbild</span><p class="concept-anchor__value">${escapeHtml(analogy)}</p></div>`
      : "",
    example
      ? `<div class="concept-anchor__row"><span class="concept-anchor__label">Beispiel</span><p class="concept-anchor__value">${escapeHtml(example)}</p></div>`
      : "",
    bridge || formalAnchorHtml
      ? `<div class="concept-anchor__row concept-anchor__row--formula"><span class="concept-anchor__label">Brücke zur Formel</span><div class="concept-anchor__value">${bridge ? `<p>${escapeHtml(bridge)}</p>` : ""}${formalAnchorHtml || ""}</div></div>`
      : ""
  ]
    .filter(Boolean)
    .join("");

  return `<aside class="concept-anchor" role="region" aria-labelledby="concept-anchor-h">
<h3 class="concept-anchor__title" id="concept-anchor-h">Kernidee</h3>
<div class="concept-anchor__rows">${rows}</div>
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
<div class="mastery-checkpoint__rows">
<div class="mastery-checkpoint__row">
<span class="mastery-checkpoint__label">Konzept</span>
<p class="mastery-checkpoint__prompt">Erkläre in einem Satz, wann ${title} in der Klausur relevant ist.</p>
</div>
<div class="mastery-checkpoint__row">
<span class="mastery-checkpoint__label">Formel</span>
<p class="mastery-checkpoint__prompt">Welche Größe liefert „${escapeHtml(formulaLabel)}" — ohne Rechnung?</p>
</div>
<div class="mastery-checkpoint__row">
<span class="mastery-checkpoint__label">Anwendung</span>
<p class="mastery-checkpoint__prompt">Nenne den ersten sinnvollen Rechenschritt bei einer Standardaufgabe.</p>
</div>
<div class="mastery-checkpoint__row">
<span class="mastery-checkpoint__label">Fehler</span>
<p class="mastery-checkpoint__prompt">Welche Annahme vergisst du am häufigsten?</p>
</div>
</div>
<p class="mastery-checkpoint__cta">
<button type="button" class="btn btn--soft-primary mastery-checkpoint__link" onclick="window.__switchTab('aufgaben')">Zum Aufgaben-Tab →</button>
</p>
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
</section>`;
}

export function renderReviewControls(conceptId) {
  const id = escapeHtml(conceptId || "");
  return `<div class="review-controls" role="group" aria-label="Wiederholung markieren" data-concept-id="${id}">
<button type="button" class="review-control-btn" data-review="unsure">Unsicher</button>
<button type="button" class="review-control-btn" data-review="repeat">Wiederholen</button>
<button type="button" class="review-control-btn" data-review="mastered">Beherrscht</button>
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
  const signalWords =
    Array.isArray(intuition?.exam) && intuition.exam.length
      ? escapeHtml(
          intuition.exam
            .slice(0, 2)
            .map((p) => String(p.if || "").trim())
            .filter(Boolean)
            .join(" · ")
        )
      : `Stichworte zu „${title}" in Aufgabenstellung, Datenlayout oder gesuchter Größe.`;
  return `<section class="exam-recognition" role="region" aria-labelledby="exam-rec-h">
<h3 class="exam-recognition__title" id="exam-rec-h">${LEARNER_LABELS.pruefungsvorbereitung}</h3>
<dl class="exam-recognition__dl">
<div class="exam-recognition__row">
<dt class="exam-recognition__label">Signalwörter</dt>
<dd class="exam-recognition__value">${signalWords}</dd>
</div>
<div class="exam-recognition__row">
<dt class="exam-recognition__label">Erster Gedanke</dt>
<dd class="exam-recognition__value">Modell/Annahme benennen, dann ${method} zuordnen.</dd>
</div>
<div class="exam-recognition__row">
<dt class="exam-recognition__label">Erster Schritt</dt>
<dd class="exam-recognition__value">Größen und Einheiten notieren; $H_0$ / Notation aus der VL fixieren.</dd>
</div>
<div class="exam-recognition__row">
<dt class="exam-recognition__label">Häufige Falle</dt>
<dd class="exam-recognition__value">Stichprobe und Population, bzw. Parameter und Schätzer, nicht vermischen.</dd>
</div>
${core ? `<div class="exam-recognition__row exam-recognition__row--core">
<dt class="exam-recognition__label">Kernsatz</dt>
<dd class="exam-recognition__value">${core}</dd>
</div>` : ""}
</dl>
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
<button type="button" class="btn btn--soft-primary micro-retrieval-check__btn" data-forward-only="1" aria-expanded="false" aria-controls="${id}" onclick="window.__toggleReveal('${id}', this)">Antwort prüfen</button>
<div class="micro-retrieval-check__a" id="${id}" hidden>
${collapseBtn(id, "Antwort")}
<p>${a}</p>
</div>
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
  const forwardBtn = (panelId, text, variant = "soft-primary") =>
    `<button type="button" class="btn btn--${variant}" data-forward-only="1" onclick="window.__toggleReveal('${panelId}', this)" aria-controls="${panelId}">${text}</button>`;

  const hintBtn = hint ? forwardBtn(hintId, "Hinweis anzeigen") : "";
  const approachBtn = steps.length ? forwardBtn(approachId, "Ansatz anzeigen") : "";
  const stepBtn = steps.length ? forwardBtn(stepId, "Nächster Schritt") : "";

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
<button type="button" class="btn btn--soft-primary" id="solBtn_${idx}" data-forward-only="1" onclick="window.__toggleSolution(${idx})">Lösung prüfen</button>
${forwardBtn(errId, "Fehlercheck", "ghost")}
${similarBtn}
</div>
${hint ? stagedPanel(hintId, "hint", "Hinweis", `<p>${escapeHtml(hint)}</p>`) : ""}
${steps.length ? stagedPanel(approachId, "approach", "Ansatz", "<p>Zielgröße benennen, dann Formel aus dem Formeln-Tab zuordnen.</p>") : ""}
${steps.length ? stagedPanel(stepId, "step", "Schritt 1", `<p>${firstStep}</p>`) : ""}
${stagedPanel(
  errId,
  "fehlercheck",
  "Selbstcheck vor der Abgabe",
  `<ul class="staged-reveal__checklist">
<li>Habe ich die richtige Formel/Methode gewählt?</li>
<li>Sind Einheiten und Stichprobengröße konsistent?</li>
<li>Habe ich Annahmen (Verteilung, Unabhängigkeit) genannt?</li>
</ul>`
)}
<div class="solution-block staged-reveal staged-reveal--solution" id="${solId}" aria-expanded="false">
<div class="staged-reveal__head">
<span class="staged-reveal__label">Lösung</span>
<button type="button" class="staged-reveal__collapse btn btn--ghost btn--xs" onclick="window.__toggleSolution(${idx})" aria-label="Lösung schließen">Schließen</button>
</div>
<div class="staged-reveal__body">${answerMarkupFull || `<p>${escapeHtml(result || "Musterlösung im Modul ergänzen.")}</p>`}</div>
</div>
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
