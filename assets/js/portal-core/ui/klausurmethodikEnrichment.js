/**
 * Display-time enrichment for Klausurmethodik task-family cards.
 * Synthesizes actionable exam workflow from concept theory, Aufgaben, and intuition
 * when generated VL families only carry registry placeholders.
 */

import { stripHtml } from "./semanticContent.js";

const GENERIC_TRAP_PATTERNS = [
  /^VL-Methode mit Übungsblatt/i,
  /^Anker ohne Aufgabenbezug/i,
  /^Zwischenschritte aus der VL überspringen$/i,
  /^Ergebnis ohne ökonomische Interpretation abgeben$/i
];

const GENERIC_METHOD_PATTERNS = [
  /VL-Abschnitt\(e\) lesen/i,
  /Methode aus/i,
  /mit Kapitelaufgaben abgleichen/i,
  /Klausurtyp aus VL/i,
  /Portal-Aufgaben verknüpfen/i,
  /typische Fehlerquellen prüfen/i,
  /Vorlesungsabschnitt lesen, Methode notieren/i
];

/**
 * @param {string} title
 * @param {string} [courseLabel]
 */
export function stripModulePrefixFromTitle(title, courseLabel = "") {
  let t = String(title ?? "").trim();
  if (!t) return t;
  const label = String(courseLabel ?? "").trim();
  if (label && t.startsWith(`${label}:`)) {
    t = t.slice(label.length + 1).trim();
  }
  return t.replace(/^[A-ZÄÖÜ][\wäöüßÄÖÜ\s-]{1,48}:\s+/, "").trim();
}

function isGenericMethod(method) {
  const m = String(method ?? "");
  return !m || GENERIC_METHOD_PATTERNS.some((pattern) => pattern.test(m));
}

function isGenericTrap(trap) {
  const t = String(trap ?? "").trim();
  return !t || GENERIC_TRAP_PATTERNS.some((pattern) => pattern.test(t));
}

function isGenericTraps(traps) {
  const list = Array.isArray(traps) ? traps : [];
  if (!list.length) return true;
  return list.every(isGenericTrap);
}

function isApplyFamily(family) {
  return String(family?.id ?? "").endsWith("-vl-apply");
}

function isTitleLikeZiel(ziel, family, courseLabel) {
  const z = stripHtml(String(ziel ?? "")).trim();
  if (!z) return true;
  const topic = stripModulePrefixFromTitle(family?.topic ?? "", courseLabel);
  const title = stripModulePrefixFromTitle(family?.title ?? "", courseLabel);
  return z === topic || z === title || z === family?.topic || z === family?.title;
}

/**
 * @param {string} html
 * @returns {string[]}
 */
export function extractWarnBoxTraps(html) {
  const traps = [];
  const source = String(html ?? "");
  const re = /<div class="warn-box"><strong>([^<]+)<\/strong>\s*([\s\S]*?)<\/div>/gi;
  let match = re.exec(source);
  while (match) {
    const head = stripHtml(match[1]).trim();
    const body = stripHtml(match[2]).trim();
    if (head && body) traps.push(`${head} — ${body}`);
    else if (head) traps.push(head);
    match = re.exec(source);
  }
  return traps.slice(0, 3);
}

/**
 * @param {string} html
 * @returns {string[]}
 */
export function extractLoesungsrezeptSteps(html) {
  const block = String(html ?? "");
  const recipeMatch = block.match(/Lösungsrezept<\/h3>\s*<p>([\s\S]*?)<\/p>/i);
  if (!recipeMatch) return [];
  const text = stripHtml(recipeMatch[1]).trim();
  const numbered = text.match(/\d+\.\s+[^.]+(?:\.[^0-9]|$)/g);
  if (numbered?.length >= 2) {
    return numbered
      .map((step) => step.replace(/^\d+\.\s*/, "").replace(/\.\s*$/, "").trim())
      .filter(Boolean)
      .slice(0, 5);
  }
  const split = text
    .split(/\.\s+(?=\d+\.)/)
    .map((part) => part.replace(/^\d+\.\s*/, "").trim())
    .filter((part) => part.length > 4);
  return split.slice(0, 5);
}

/**
 * @param {object} family
 * @param {object} [ctx]
 * @returns {{ displayTitle: string, ziel: string, vorgehenSteps: string[], typicalQuestion: string, traps: string[] }}
 */
export function enrichTaskFamilyForDisplay(
  family,
  { conceptId = "", contentEntry = null, intuitionEntry = null, formulaCards = [], courseLabel = "" } = {}
) {
  const pedagogy = family?.examPedagogy && typeof family.examPedagogy === "object" ? family.examPedagogy : {};
  const displayTitle =
    pedagogy.shortTitle ||
    stripModulePrefixFromTitle(family?.title || family?.topic || family?.id || "", courseLabel);
  const theoryHtml = contentEntry?.theorie ?? "";
  const apply = isApplyFamily(family);

  const hasCuratedZiel = Boolean(String(pedagogy.ziel ?? "").trim());
  let ziel = pedagogy.ziel || "";
  if (!hasCuratedZiel && (!ziel || isTitleLikeZiel(ziel, family, courseLabel))) {
    ziel = buildZiel({ family, apply, intuitionEntry, displayTitle, conceptId });
  }

  const hasCuratedVorgehen = Array.isArray(pedagogy.vorgehen) && pedagogy.vorgehen.length > 0;
  let vorgehenSteps = hasCuratedVorgehen ? pedagogy.vorgehen.filter(Boolean) : [];
  if (!hasCuratedVorgehen && (!vorgehenSteps.length || isGenericMethod(family?.method))) {
    vorgehenSteps = buildVorgehenSteps({
      family,
      apply,
      theoryHtml,
      intuitionEntry,
      formulaCards
    });
  }

  const hasCuratedQuestion = Boolean(String(pedagogy.typicalQuestion ?? "").trim());
  let typicalQuestion = pedagogy.typicalQuestion || "";
  if (
    !hasCuratedQuestion &&
    (!typicalQuestion || isTitleLikeZiel(typicalQuestion, family, courseLabel))
  ) {
    typicalQuestion = buildTypicalQuestion({ family, apply, contentEntry, displayTitle, conceptId });
  }

  const hasCuratedTraps = Array.isArray(pedagogy.traps) && pedagogy.traps.length > 0;
  let traps = hasCuratedTraps ? pedagogy.traps.filter(Boolean) : [];
  if (!hasCuratedTraps && (!traps.length || isGenericTraps(family?.commonTraps))) {
    traps = buildTraps({ family, apply, theoryHtml, contentEntry, formulaCards });
  }

  return {
    displayTitle,
    ziel,
    vorgehenSteps: vorgehenSteps.slice(0, 5),
    typicalQuestion,
    traps: traps.slice(0, 3)
  };
}

function buildZiel({ apply, intuitionEntry, displayTitle, conceptId }) {
  const exam = Array.isArray(intuitionEntry?.exam) ? intuitionEntry.exam : [];
  const core = stripHtml(intuitionEntry?.core ?? "").replace(/<[^>]+>/g, "");

  if (apply) {
    if (conceptId === "lagrange" || /haushaltsoptimum|nachfrage/i.test(displayTitle)) {
      return "Nach 10 Min kannst du aus gegebener Nutzenfunktion, Preisen und Einkommen die optimalen Mengen $x_1^*, x_2^*$ und $\\lambda^*$ berechnen und $\\lambda$ als Grenznutzen des Einkommens deuten.";
    }
    return `Nach 10 Min kannst du einen Klausurtyp zu „${displayTitle}“ vollständig rechnen und das Ergebnis in einem Satz ökonomisch interpretieren.`;
  }

  if (conceptId === "lagrange" || /nebenbedingung/i.test(displayTitle)) {
    return "Nach 10 Min kannst du $\\mathcal{L}=u+\\lambda(m-p_1x_1-p_2x_2)$ aufstellen, drei FOCs (inkl. Budget) ableiten, die Tangentialbedingung $MU_1/MU_2=p_1/p_2$ nutzen und $\\lambda$ als Grenznutzen des Einkommens erklären.";
  }

  if (exam.length) {
    const first = stripHtml(exam[0]?.then ?? "").trim();
    const second = stripHtml(exam[1]?.then ?? "").trim();
    const tail = second ? ` und ${second.replace(/\.$/, "")}` : "";
    if (first) {
      return `Nach 10 Min kannst du ${first.replace(/\.$/, "")}${tail}.`;
    }
  }

  if (core) {
    const shortCore = core.length > 120 ? `${core.slice(0, 117)}…` : core;
    return `Nach 10 Min kannst du die Kernidee anwenden: ${shortCore}`;
  }

  return `Nach 10 Min kannst du die Methode „${displayTitle}“ in der Klausur strukturiert und ohne Rechenlücken durchführen.`;
}

function buildVorgehenSteps({ apply, theoryHtml, intuitionEntry, formulaCards }) {
  const fromRecipe = extractLoesungsrezeptSteps(theoryHtml);
  if (fromRecipe.length >= 3) return fromRecipe;

  const exam = Array.isArray(intuitionEntry?.exam) ? intuitionEntry.exam : [];
  const fromExam = exam
    .map((item) => {
      const cond = stripHtml(item?.if ?? "").trim();
      const action = stripHtml(item?.then ?? "").trim();
      if (cond && action) return `${cond}: ${action}`;
      return action || cond;
    })
    .filter(Boolean);
  if (fromExam.length >= 2) return fromExam.slice(0, 5);

  const shortcuts = (Array.isArray(formulaCards) ? formulaCards : [])
    .map((card) => stripHtml(card?.examShortcut ?? "").trim())
    .filter((s) => s.length > 8);
  if (shortcuts.length >= 2) {
    return shortcuts.slice(0, 3).map((s, i) => `Formel ${i + 1}: ${s}`);
  }

  if (apply) {
    return [
      "Zielfunktion und Budgetrestriktion notieren; Vorzeichenkonvention für $\\mathcal{L}$ festhalten.",
      "FOCs nach $x_1$, $x_2$ und $\\lambda$ ableiten und Tangentialbedingung $MU_1/MU_2=p_1/p_2$ bilden.",
      "Eine Menge als Funktion der anderen ausdrücken und in die Budgetrestriktion einsetzen.",
      "$x_1^*$, $x_2^*$ und $\\lambda^*$ berechnen; Probe: Budget bindet und $MU_i/p_i$ sind gleich.",
      "Ergebnis kurz interpretieren (z. B. $\\lambda$ = Grenznutzen des Einkommens)."
    ];
  }

  return [
    "Lagrange-Funktion $\\mathcal{L}=u(x_1,x_2)+\\lambda(m-p_1x_1-p_2x_2)$ aufstellen.",
    "Partielle Ableitungen $\\partial\\mathcal{L}/\\partial x_1$, $\\partial\\mathcal{L}/\\partial x_2$, $\\partial\\mathcal{L}/\\partial\\lambda$ gleich null setzen.",
    "Aus den ersten beiden FOCs die Tangentialbedingung $MU_1/MU_2=p_1/p_2$ ableiten.",
    "Dritte FOC explizit als Budgetrestriktion $p_1x_1+p_2x_2=m$ markieren.",
    "$\\lambda$ als $MU_i/p_i$ deuten (Grenznutzen pro Euro im Optimum)."
  ];
}

function buildTypicalQuestion({ apply, contentEntry, displayTitle, conceptId }) {
  const tasks = Array.isArray(contentEntry?.aufgaben) ? contentEntry.aufgaben : [];
  const firstText = tasks.map((t) => stripHtml(t?.text ?? "").trim()).find((t) => t.length > 24);
  if (firstText) return firstText;

  if (apply) {
    if (conceptId === "lagrange") {
      return "Gegeben $u(x_1,x_2)=x_1^{1/2}x_2^{1/2}$, $p_1=2$, $p_2=4$, $m=40$. Bestimmen Sie $x_1^*$, $x_2^*$ und $\\lambda^*$. Was misst $\\lambda$?";
    }
    return `Gegeben Modellgrößen zu „${displayTitle}“. Berechnen Sie die gesuchten Größen und interpretieren Sie das Ergebnis ökonomisch.`;
  }

  if (conceptId === "lagrange" || /nebenbedingung/i.test(displayTitle)) {
    return "Gegeben $u(x_1,x_2)$ und Budget $p_1x_1+p_2x_2=m$. Stellen Sie $\\mathcal{L}$ auf, leiten Sie die FOCs her und formulieren Sie die Tangentialbedingung.";
  }

  return `Typische Aufgabe zu „${displayTitle}“: gegebene Funktion/Parameter → gesuchte Größe mit kurzer Begründung.`;
}

function buildTraps({ apply, theoryHtml, contentEntry, formulaCards }) {
  const fromTheory = extractWarnBoxTraps(theoryHtml);
  if (fromTheory.length) return fromTheory;

  const fromCards = (Array.isArray(formulaCards) ? formulaCards : [])
    .flatMap((card) => (Array.isArray(card?.commonMistakes) ? card.commonMistakes : []))
    .map((m) => stripHtml(m).trim())
    .filter((m) => m.length > 8 && !isGenericTrap(m));
  if (fromCards.length) return fromCards.slice(0, 3);

  if (apply) {
    return [
      "Tangentialbedingung ohne Budgetrestriktion lösen — zwei Gleichungen, drei Unbekannte.",
      "FOC nach $\\lambda$ vergessen — Budgetbindung fehlt im Gleichungssystem.",
      "$\\lambda$ mit Preis $p_i$ verwechseln — $\\lambda$ ist Grenznutzen des Einkommens, nicht der Güterpreis."
    ];
  }

  return [
    "Dritte FOC (Ableitung nach $\\lambda$) vergessen — liefert die Budgetrestriktion.",
    "Vorzeichen bei $\\mathcal{L}=u-\\lambda(\\cdots)$ vertauscht — $\\lambda$ ändert dann das Vorzeichen.",
    "Tangentialbedingung mit Budgetsteigung $-p_1/p_2$ verwechseln — GRS ist $MU_1/MU_2>0$, nicht negativ."
  ];
}
