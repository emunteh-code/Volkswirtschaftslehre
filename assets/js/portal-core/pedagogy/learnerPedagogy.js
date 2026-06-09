/**
 * Fleet learner-effectiveness helpers (Pass 1).
 * platform-added-explanation where content is synthesized (author-only; not shown to learners).
 */

import { escapeHtml, stripHtml } from "../ui/semanticContent.js";
import { sanitizeLearnerPlainText } from "../utils/studentFacingText.js";

/** Learner-facing label renames */
export const LEARNER_LABELS = Object.freeze({
  transferpfad: "So erkennst du das in Aufgaben",
  formalerAnker: "Wichtigste Formel",
  quellanker: "In den Quellen prüfen",
  plattformSimulation: "Klausurähnliche Übung",
  pruefungsvorbereitung: "Klausurerkennung"
});

/** Einsatzgrenzen rule-card zone labels (§3) */
export const FORMULA_RULE_LABELS = Object.freeze({
  useWhen: "Wann du es benutzt",
  mustHold: "Das muss gelten",
  doNotUse: "Nicht verwenden, wenn",
  mistakes: "Häufige Fehler",
  shortcut: "Klausur-Shortcut"
});

/** Klausurmethodik playbook labels (§3) */
export const KLAUSUR_METHOD_LABELS = Object.freeze({
  recognize: "Woran du es erkennst",
  firstThought: "Erster Gedanke",
  firstStep: "Erster Schritt",
  disclose: "Methode & Fallen anzeigen",
  vorgehen: "Vorgehen",
  trap: "Häufige Falle",
  grading: "Prüfungslogik",
  sources: "Quellen ansehen",
  toTask: "Zur passenden Aufgabe"
});

function collapseBtn(panelId, label) {
  return `<button type="button" class="staged-reveal__collapse btn btn--ghost btn--xs" onclick="window.__closeReveal('${panelId}')" aria-label="${escapeHtml(label)} schließen">Schließen</button>`;
}

const CONCEPT_ANCHOR_PREVIEW_LEN = 200;

/** @param {string} text @param {string} [modifier] */
function renderConceptAnchorValue(text, modifier = "") {
  const clean = sanitizeLearnerPlainText(text);
  if (!clean) return "";
  const modClass = modifier ? ` concept-anchor__value-wrap--${modifier}` : "";
  if (clean.length <= CONCEPT_ANCHOR_PREVIEW_LEN) {
    return `<div class="concept-anchor__value-wrap${modClass}"><p class="concept-anchor__value">${escapeHtml(clean)}</p></div>`;
  }
  const preview = `${escapeHtml(clean.slice(0, CONCEPT_ANCHOR_PREVIEW_LEN).trim())}…`;
  return `<div class="concept-anchor__value-wrap concept-anchor__value-wrap--expandable${modClass}">
<p class="concept-anchor__value concept-anchor__value--preview">${preview}</p>
<details class="concept-anchor__more"><summary class="concept-anchor__more-summary">Mehr anzeigen</summary><p class="concept-anchor__value">${escapeHtml(clean)}</p></details>
</div>`;
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
  const verbs = /^(erkennen|erklären|unterscheiden|berechnen|anwenden|prüfen|ableiten|interpretieren|formulieren|zuordnen|nennen|lesen|deuten)/i;
  let items = raw
    .map((o) => sanitizeLearnerPlainText(o))
    .filter(Boolean)
    .slice(0, 5)
    .map((o) => (verbs.test(o) ? o : `erklären: ${o}`));

  if (!items.length && chapterTitle) {
    const title = chapterTitle.trim();
    const key = title.toLowerCase();
    const formulaLabels = (entry?.formeln || [])
      .slice(0, 3)
      .map((f) => sanitizeLearnerPlainText(f?.label || ""))
      .filter(Boolean);

    if (/deskriptiv/.test(key)) {
      items = [
        "Lage (Mittelwert/Median) und Streuung (Varianz, s) aus Rohdaten berechnen",
        "erkennen, wann Ausreißer oder Schiefe den Median dem Mittelwert vorziehen",
        "die Bessel-korrigierte Stichprobenvarianz mit Nenner (n−1) anwenden",
        "Lage, Streuung und Formhinweis in einer Klausurantwort verbinden"
      ];
    } else if (/anova|varianzanalyse/.test(key)) {
      items = [
        "F-Test und Gruppenmittel aus dem ANOVA-Output gemeinsam lesen",
        "Aufgaben mit mehreren Gruppen und einer metrischen Zielgröße als ANOVA zuordnen",
        "den Unterschied zwischen globalem F-Test und paarweisen Nachprüfungen benennen",
        "Post-hoc-Ergebnisse nur bei abgelehntem H₀ fachlich interpretieren"
      ];
    } else if (/bivariat|korrelation|regression/.test(key)) {
      items = [
        "Kovarianz, Korrelation und Steigung in Aufgabenstellungen unterscheiden",
        formulaLabels.length
          ? `${formulaLabels.join(", ")} aus Tabellen oder R-Output zuordnen`
          : "bivariate Kennzahlen aus Tabellen oder R-Output zuordnen",
        "Richtung und Stärke eines Zusammenhangs ohne Überinterpretation deuten",
        "typische Fehler bei n, Einheiten und Linearität vor der Rechnung prüfen"
      ];
    } else if (/wahrscheinlichkeit|bedingte|binom|poisson|zufallsvariable/.test(key)) {
      items = [
        "Ereignisse, Unabhängigkeit und bedingte Wahrscheinlichkeit in Aufgaben unterscheiden",
        "Baumdiagramm oder Formelpfad (Satz von Bayes, Total) passend wählen",
        formulaLabels.length
          ? `${formulaLabels.join(", ")} bei gegebenen p, n oder λ zuordnen`
          : "diskrete Modelle (Binomial, Poisson) an Aufgabenstellungen anknüpfen",
        "Punkt- vs. Bereichswahrscheinlichkeit bei stetigen Verteilungen nicht verwechseln"
      ];
    } else if (/cobb|douglas|produktion/.test(key)) {
      items = [
        "Isoquanten und Grenzprodukte einer CD-Produktionsfunktion interpretieren",
        "Skalenelastizität α+β und ihre ökonomische Bedeutung erklären",
        "Kostenminimierung und Faktornachfrage aus der Produktion ableiten",
        "Marshallsche Nachfrage und Einkommens-/Preiselastizität bei CD-Nutzen zuordnen"
      ];
    } else {
      items = [
        formulaLabels.length
          ? `${formulaLabels.join(", ")} in Klausuraufgaben zuordnen`
          : `die zentrale Methode von „${title}" benennen`,
        `den ersten sinnvollen Rechenschritt bei Standardaufgaben zu „${title}" skizzieren`,
        `typische Klausurfehler zu „${title}" vor der Rechnung benennen`,
        `Stichworte und Datenlayout von „${title}" sicher erkennen`
      ];
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
  const kurz = sanitizeLearnerPlainText(
    (intuition?.core ? stripHtml(String(intuition.core)) : "") ||
      (entry?.motivation ? stripHtml(String(entry.motivation)) : "") ||
      (title ? `${title} strukturiert den Klausurpfad in diesem Modulblock.` : "")
  );
  const warum = sanitizeLearnerPlainText(
    (intuition?.bridge ? stripHtml(String(intuition.bridge)) : "") ||
      (Array.isArray(intuition?.exam) && intuition.exam[0]?.then
        ? stripHtml(String(intuition.exam[0].then))
        : "") ||
      (title
        ? `In Klausuraufgaben erkennst du ${title} an Stichworten, Datenlayout und der gesuchten Größe — dann Formeln-Tab und Aufgaben nutzen.`
        : "Verbinde Begriff, Formel und typische Aufgabenstellung, bevor du rechnest.")
  );
  const outcomes = buildLessonOutcomeItems(entry, chapterTitle);
  const microCheck = buildTheoryMicroCheck(entry, chapterTitle);

  const chipsHtml = outcomes.length
    ? `<div class="lesson-hero-card__chips" aria-label="Lernziele">${outcomes
        .slice(0, 5)
        .map((t) => {
          const short = t.length > 72 ? `${t.slice(0, 69).trim()}…` : t;
          return `<span class="lesson-hero-chip">${escapeHtml(short)}</span>`;
        })
        .join("")}</div>`
    : "";

  return `<section class="lesson-hero-card" role="region" aria-labelledby="lesson-hero-h">
<h2 class="lesson-hero-card__title" id="lesson-hero-h">Lektionseinstieg</h2>
<div class="lesson-hero-card__grid">
<div class="lesson-hero-card__col">
<h3 class="lesson-hero-card__label">Kurz erklärt</h3>
<p class="lesson-hero-card__copy">${escapeHtml(kurz)}</p>
</div>
<div class="lesson-hero-card__col lesson-hero-card__col--why">
<h3 class="lesson-hero-card__label">Warum wichtig?</h3>
<p class="lesson-hero-card__copy">${escapeHtml(warum)}</p>
</div>
</div>
${chipsHtml}
${microCheck ? `<div class="lesson-hero-card__micro-strip">${microCheck}</div>` : ""}
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
    ? sanitizeLearnerPlainText(intuition.core)
    : entry?.motivation
      ? sanitizeLearnerPlainText(entry.motivation)
      : "";
  const analogy = intuition?.analogy ? sanitizeLearnerPlainText(intuition.analogy) : "";
  const example =
    Array.isArray(intuition?.exam) && intuition.exam[0]?.if
      ? sanitizeLearnerPlainText(
          `${String(intuition.exam[0].if).trim()} → ${String(intuition.exam[0].then || "").trim()}`
        )
      : Array.isArray(entry?.cards) && entry.cards[0]?.note
        ? sanitizeLearnerPlainText(entry.cards[0].note)
        : "";
  const bridge = intuition?.bridge ? sanitizeLearnerPlainText(intuition.bridge) : "";
  if (!core && !analogy && !example && !formalAnchorHtml && !bridge) return "";

  const rows = [
    core
      ? `<div class="concept-anchor__row concept-anchor__row--core"><span class="concept-anchor__label">Kernsatz</span>${renderConceptAnchorValue(core, "core")}</div>`
      : "",
    analogy
      ? `<div class="concept-anchor__row"><span class="concept-anchor__label">Denkbild</span>${renderConceptAnchorValue(analogy)}</div>`
      : "",
    example
      ? `<div class="concept-anchor__row"><span class="concept-anchor__label">Beispiel</span>${renderConceptAnchorValue(example)}</div>`
      : "",
    bridge || formalAnchorHtml
      ? `<div class="concept-anchor__row concept-anchor__row--formula"><span class="concept-anchor__label">Brücke zur Formel</span><div class="concept-anchor__value-wrap concept-anchor__value-wrap--formula">${bridge ? renderConceptAnchorValue(bridge) : ""}${formalAnchorHtml || ""}</div></div>`
      : ""
  ]
    .filter(Boolean)
    .join("");

  return `<aside class="concept-anchor concept-anchor-card" role="region" aria-labelledby="concept-anchor-h">
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
<p class="mastery-checkpoint__intro">Prüfe, ob du die Lektion wirklich abrufen kannst.</p>
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

const CONFIDENCE_LEVELS = Object.freeze([
  { level: 0, label: "Nicht verstanden" },
  { level: 1, label: "Wiedererkannt" },
  { level: 2, label: "Kann erklären" },
  { level: 3, label: "Kann anwenden" }
]);

/** @returns {boolean} */
export function canUseLearnerLocalStorage() {
  try {
    const probe = "__lp_storage_probe__";
    localStorage.setItem(probe, "1");
    localStorage.removeItem(probe);
    return true;
  } catch {
    return false;
  }
}

export function renderConfidenceCheckpoint(conceptId) {
  if (!canUseLearnerLocalStorage()) return "";
  const id = escapeHtml(conceptId || "");
  const segments = CONFIDENCE_LEVELS.map(
    ({ level, label }) =>
      `<button type="button" class="confidence-segment" data-level="${level}" aria-label="Stufe ${level}: ${escapeHtml(label)}">
<span class="confidence-segment__num" aria-hidden="true">${level}</span>
<span class="confidence-segment__label">${escapeHtml(label)}</span>
</button>`
  ).join("");
  return `<section class="confidence-checkpoint" role="group" aria-labelledby="confidence-h-${id}">
<h3 class="confidence-checkpoint__title" id="confidence-h-${id}">Wie sicher bist du?</h3>
<div class="confidence-checkpoint__scale confidence-segmented" data-concept-id="${id}" role="radiogroup" aria-label="Selbsteinschätzung">
${segments}
</div>
<p class="confidence-checkpoint__storage-note">Gespeichert nur in diesem Browser (localStorage).</p>
</section>`;
}

/**
 * Tab-aware next-step footer for concept views.
 * @param {string} activeTab
 * @param {object} chapter
 * @param {object} entry
 * @param {{ tabAvailability?: object, chapters?: object[], conceptId?: string }} [opts]
 */
export function renderLessonNextStepFooter(activeTab, chapter, entry, opts = {}) {
  if (!chapter || !activeTab || activeTab === "quellen") return "";
  const { tabAvailability = {}, chapters = [], conceptId = "" } = opts;
  const idx = chapters.findIndex((c) => c.id === conceptId);
  const nextChapter = idx >= 0 && idx < chapters.length - 1 ? chapters[idx + 1] : null;

  let title = "Weiter im Lernpfad";
  let body = "";
  let cta = "";

  switch (activeTab) {
    case "theorie":
      if (tabAvailability.formeln) {
        body = "Formeln und Merksätze festigen, bevor du rechnest.";
        cta = `<button type="button" class="btn btn--secondary lesson-next-step-footer__cta" onclick="window.__switchTab('formeln')">Zum Formeln-Tab →</button>`;
      } else if (tabAvailability.graph) {
        body = "Die Grafik vertieft das Verständnis — danach Aufgaben üben.";
        cta = `<button type="button" class="btn btn--secondary lesson-next-step-footer__cta" onclick="window.__switchTab('graph')">Zur Grafik →</button>`;
      } else {
        body = "Jetzt mit einer Klausuraufgabe prüfen, ob du es anwenden kannst.";
        cta = `<button type="button" class="btn btn--secondary lesson-next-step-footer__cta" onclick="window.__switchTab('aufgaben')">Zu den Aufgaben →</button>`;
      }
      break;
    case "formeln":
      body = "Methode notiert — als Nächstes rechnen und Fehler checken.";
      cta = `<button type="button" class="btn btn--secondary lesson-next-step-footer__cta" onclick="window.__switchTab('aufgaben')">Zu den Aufgaben →</button>`;
      break;
    case "graph":
      body = tabAvailability["r-anwendung"]
        ? "Grafik verstanden? Optional R-Übung, dann Aufgaben."
        : "Grafik verstanden? Jetzt Aufgaben üben.";
      cta = tabAvailability["r-anwendung"]
        ? `<button type="button" class="btn btn--secondary lesson-next-step-footer__cta" onclick="window.__switchTab('r-anwendung')">Zur R-Übung →</button>`
        : `<button type="button" class="btn btn--secondary lesson-next-step-footer__cta" onclick="window.__switchTab('aufgaben')">Zu den Aufgaben →</button>`;
      break;
    case "r-anwendung":
    case "r-practice":
    case "r":
      body = "Code nachvollzogen? Aufgaben festigen den Transfer.";
      cta = `<button type="button" class="btn btn--secondary lesson-next-step-footer__cta" onclick="window.__switchTab('aufgaben')">Zu den Aufgaben →</button>`;
      break;
    case "aufgaben":
      if (nextChapter) {
        title = "Nächstes Konzept";
        body = `„${sanitizeLearnerPlainText(nextChapter.title)}" setzt hier an.`;
        cta = `<button type="button" class="btn btn--secondary lesson-next-step-footer__cta" onclick="window.__navigate('${escapeHtml(nextChapter.id)}')">Weiter: ${escapeHtml(nextChapter.title)} →</button>`;
      } else {
        title = "Block abgeschlossen";
        body = "Wiederholung oder Schnelltest sichert den Stoff.";
        cta = `<button type="button" class="btn btn--secondary lesson-next-step-footer__cta" onclick="window.__showSRSReview?.()">Wiederholung starten →</button>`;
      }
      break;
    default:
      return "";
  }

  return `<footer class="lesson-next-step-footer" role="navigation" aria-label="Nächster Lernschritt">
<div class="lesson-next-step-footer__copy">
<span class="lesson-next-step-footer__eyebrow">Nächster Schritt</span>
<h3 class="lesson-next-step-footer__title">${escapeHtml(title)}</h3>
<p class="lesson-next-step-footer__body">${escapeHtml(body)}</p>
</div>
<div class="lesson-next-step-footer__actions">${cta}</div>
</footer>`;
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
    const title = sanitizeLearnerPlainText(w.title || "Prüfpunkt");
    const bodyHint = w.body ? sanitizeLearnerPlainText(w.body).slice(0, 140) : "";
    const prompt = bodyHint
      ? `Habe ich „${title}" beachtet — ${bodyHint}${bodyHint.length >= 140 ? "…" : ""}?`
      : title.endsWith("?")
        ? title
        : `Habe ich „${title}" beachtet?`;
    return `<li class="fehler-checklist__row"><label class="fehler-checklist__label"><input type="checkbox" class="fehler-checklist__check" aria-label="Prüfpunkt abhaken" /><span class="fehler-checklist__text">${escapeHtml(prompt)}</span></label></li>`;
  });
  return `<section class="fehler-checklist" role="region" aria-labelledby="fehler-check-h">
<h3 class="fehler-checklist__title" id="fehler-check-h">Selbsttest vor der Klausur</h3>
<p class="fehler-checklist__intro">Prüfe die häufigsten Fehler, bevor du weitergehst.</p>
<ul class="fehler-checklist__rows">${items.join("")}</ul>
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
    ? escapeHtml(sanitizeLearnerPlainText(intuition.core).slice(0, 200))
    : entry?.motivation
      ? escapeHtml(sanitizeLearnerPlainText(entry.motivation).slice(0, 200))
      : "";
  const erkennen =
    Array.isArray(intuition?.exam) && intuition.exam.length
      ? escapeHtml(
          intuition.exam
            .slice(0, 2)
            .map((p) => sanitizeLearnerPlainText(p.if || ""))
            .filter(Boolean)
            .join(" · ")
        )
      : `Stichworte zu „${title}" in Aufgabenstellung, Datenlayout oder gesuchter Größe.`;
  const ersteEntscheidung = intuition?.bridge
    ? escapeHtml(sanitizeLearnerPlainText(intuition.bridge).slice(0, 220))
    : `Modell/Annahme benennen, dann ${method} zuordnen.`;
  const ersterRechenschritt = "Größen und Einheiten notieren; Notation aus der Vorlesung fixieren, dann ersten formalen Schritt skizzieren.";
  const haeufigeFalle = "Stichprobe und Population bzw. Parameter und Schätzer nicht vermischen; Annahmen vor der Rechnung benennen.";
  return `<section class="exam-recognition" role="region" aria-labelledby="exam-rec-h">
<h3 class="exam-recognition__title" id="exam-rec-h">${LEARNER_LABELS.pruefungsvorbereitung}</h3>
<dl class="exam-recognition__dl">
<div class="exam-recognition__row">
<dt class="exam-recognition__label">Erkennen</dt>
<dd class="exam-recognition__value">${erkennen}</dd>
</div>
<div class="exam-recognition__row">
<dt class="exam-recognition__label">Erste Entscheidung</dt>
<dd class="exam-recognition__value">${ersteEntscheidung}</dd>
</div>
<div class="exam-recognition__row">
<dt class="exam-recognition__label">Erster Rechenschritt</dt>
<dd class="exam-recognition__value">${ersterRechenschritt}</dd>
</div>
<div class="exam-recognition__row">
<dt class="exam-recognition__label">Häufige Falle</dt>
<dd class="exam-recognition__value">${haeufigeFalle}</dd>
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
  const key = title.toLowerCase();
  const objective = Array.isArray(entry?.objectives) ? String(entry.objectives[0] || "").trim() : "";
  if (objective) {
    return renderMicroRetrievalCheck(
      `Kannst du „${sanitizeLearnerPlainText(objective)}" in eigenen Worten erklären — ohne ins Skript zu schauen?`,
      sanitizeLearnerPlainText(objective)
    );
  }
  if (/wahrscheinlichkeit|bedingte/.test(key)) {
    return renderMicroRetrievalCheck(
      "Wann nutzt du bedingte Wahrscheinlichkeit statt Unabhängigkeit?",
      "Wenn neue Information die Eintrittswahrscheinlichkeit ändert — sonst P(A∩B)=P(A)P(B) prüfen."
    );
  }
  if (/deskriptiv/.test(key)) {
    return renderMicroRetrievalCheck(
      "Wann wählst du Median statt Mittelwert?",
      "Bei Ausreißern, starker Schiefe oder ordinalen Daten — Lage und Streuung gemeinsam berichten."
    );
  }
  if (/bivariat|korrelation|regression/.test(key)) {
    return renderMicroRetrievalCheck(
      "Was unterscheidet Kovarianz von Korrelation in der Interpretation?",
      "Kovarianz hängt von Einheiten ab; Korrelation standardisiert auf [−1, 1] und misst lineare Stärke."
    );
  }
  if (/cobb|douglas/.test(key)) {
    return renderMicroRetrievalCheck(
      "Was sagt α+β bei einer Cobb-Douglas-Produktionsfunktion aus?",
      "Skalenelastizität: α+β>1 steigende, =1 lineare, <1 fallende Skalenerträge."
    );
  }
  if (title) {
    return renderMicroRetrievalCheck(
      `Wann ist „${title}" in einer Klausuraufgabe das richtige Werkzeug?`,
      "Wenn Stichworte, Datenlayout oder die gesuchte Größe zum Konzept passen — dann Formeln-Tab und Klausurerkennung prüfen."
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
<button type="button" class="btn btn--secondary micro-retrieval-check__btn" data-forward-only="1" aria-expanded="false" aria-controls="${id}" onclick="window.__toggleReveal('${id}', this)">Mini-Check starten</button>
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
  const forwardBtn = (panelId, text, variant = "tertiary") =>
    `<button type="button" class="btn btn--${variant}" data-forward-only="1" onclick="window.__toggleReveal('${panelId}', this)" aria-controls="${panelId}">${text}</button>`;

  const hintBtn = hint ? forwardBtn(hintId, "Hinweis", "tertiary") : "";
  const approachBtn = steps.length ? forwardBtn(approachId, "Ansatz", "tertiary") : "";
  const stepBtn = steps.length ? forwardBtn(stepId, "Nächster Schritt", "tertiary") : "";

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
<button type="button" class="btn btn--secondary" id="solBtn_${idx}" data-forward-only="1" onclick="window.__toggleSolution(${idx})">Lösung prüfen</button>
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
