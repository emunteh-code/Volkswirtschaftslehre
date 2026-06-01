import {
  decodeHtmlEntities,
  displayContentToPlainText,
  escapeHtml,
  getDisplayMode,
  hasMeaningfulDisplayContent,
  renderSemanticBlock,
  stripHtml
} from "./semanticContent.js"
import { renderTeachingProse } from "./teachingProse.js"
import { buildConceptConnectionsHtml } from "./rightPanel.js"
import { getWarningSystemData, renderMainFlowMistakesSection, renderTaskWarningCard } from "./warningSystem.js";
import {
  buildConceptProvenanceStripHtml,
  initConceptProvenanceInteractions
} from "./sourceProvenanceUi.js";
import {
  buildQuellenPanelHtml,
  hasConceptQuellenContent,
  initQuellenPanelInteractions
} from "./quellenPanel.js";
import { filterStudentVisibleTaskFamilies } from "../data/officialTaskIngestion.js";
import { studentizeMethodText, studentizeTaskGapNote, studentizeTheoryHtml } from "../utils/studentFacingText.js";
import {
  FULL_EXAM_HOME_DESCRIPTION
} from "../data/examDisclosure.js";
import { renderMathTitle } from "./formatMathInTitle.js";
import {
  renderOfficialMaterialsNoticeHtml,
  sourcePdfOpenDisabledByDefault
} from "../utils/deployEnvironment.js";

const HOME_ACTION_ACTIVATE = (handler) =>
  `onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${handler}}"`;

export const HOME_DASHBOARD_DISCLOSURE_NOTE =
  "Basiert auf Lernspuren aus diesem Browser; keine serverseitige Bewertung.";

export const KONCEPT_CHECK_HOME_ACTION_CARD_HTML = `<div class="home-action-card" onclick="window.__startConceptSchnelltest()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__startConceptSchnelltest()")}>
<div class="hac-title">Konzept-Check</div>
<div class="hac-desc">5 Minuten, typische Denkfallen</div>
</div>`;

/** Only mount when module ships conceptSchnelltestItems (currently makro1). */
export function buildKonzeptCheckHomeCardHtml(enabled = false) {
  return enabled ? KONCEPT_CHECK_HOME_ACTION_CARD_HTML : "";
}

export const KONCEPT_CHECK_SCOPE_NOTE =
  "Konzept-Check: in Makro I, Statistik und Makro II — andere Module nutzen Schnelltest & Aufgaben.";

export function createRenderer({
  courseLabel,
  courseTitle,
  homeIntro,
  chapters,
  contentById,
  intuitionById,
  conceptLinks,
  renderGraphPanel,
  graphConcepts,
  renderMastery,
  renderMath,
  loadProgress,
  loadLastId,
  getDueCards,
  renderDashboard,
  getPracticeTasks = (conceptId, contentEntry) => contentEntry?.aufgaben || [],
  minimumPracticeTasks = 10,
  hasRBlock = () => false,
  renderRAnwendungPanel = null,
  examDrillsById = null,
  /** Raw HTML inserted inside the home action row (optional; e.g. Konzept-Check card) */
  extraHomeActionCardsHtml = '',
  /** One-line disclosure under the Lern-Dashboard home card (fleet-wide default). */
  homeLernDashboardPilotNote = HOME_DASHBOARD_DISCLOSURE_NOTE,
  /** Show gemischter Schnelltest card (within-module interleaving; cross-module backlog). */
  showInterleavedExamCard = true,
  /** Optional home description for the Probeklausuren card. */
  fullExamHomeDescription = FULL_EXAM_HOME_DESCRIPTION,
  /** When false, omit the `entry.motivation` strip under the concept H1 (module opt-out). */
  showConceptMotivationBanner = true,
  /** Optional: per-concept provenance layers from contentManifest (metadata-driven UI strip). */
  getConceptProvenance = () => null,
  /** Optional: compact per-concept source badge for overview surfaces. */
  getConceptSourceSummary = () => null,
  /** Optional: local/deployed base URL for official source files used by provenance anchors. */
  sourceMaterialBaseUrl = '',
  /** Optional: exam-OS formula cards keyed by concept id. */
  formulaCardsByConcept = {},
  /** Optional: source-grounded task-family taxonomy keyed by concept id. */
  taskFamiliesByConcept = {}
}) {
  let current = null;
  let currentTab = "theorie";
  const chapterMap = Object.fromEntries(chapters.map((chapter) => [chapter.id, chapter]));

  function renderDecodedText(value) {
    return escapeHtml(decodeHtmlEntities(String(value ?? "")));
  }

  function renderStudentTaskGapNote(gap) {
    const studentized = studentizeTaskGapNote(gap);
    if (!hasMeaningfulText(studentized)) return "";
    return `<p class="klausurmethodik-gap-note">${renderSemanticPlainText(studentized)}</p>`;
  }

  function getCategoryPosition(conceptId) {
    const chapter = chapterMap[conceptId];
    if (!chapter) return null;
    const items = chapters.filter((item) => item.cat === chapter.cat);
    const localIdx = items.findIndex((item) => item.id === conceptId);
    if (localIdx < 0) return null;
    return { category: chapter.cat, index: localIdx + 1, total: items.length };
  }

  function findWeakestConcept(progress) {
    const candidates = chapters
      .map((chapter) => {
        const entry = progress[chapter.id];
        if (!entry) return null;
        const total = (entry.correct || 0) + (entry.wrong || 0);
        if (total < 2) return null;
        return { chapter, accuracy: (entry.correct || 0) / total };
      })
      .filter(Boolean)
      .sort((a, b) => a.accuracy - b.accuracy);
    return candidates[0]?.chapter || null;
  }

  function renderHomeSourceBadge(conceptId) {
    const summary = getConceptSourceSummary(conceptId);
    if (!summary?.label || !summary?.status) return "";
    return `<div class="hc-source-badge hc-source-badge--${escapeHtml(summary.status)}" title="${escapeHtml(summary.title || summary.label)}">${escapeHtml(summary.label)}</div>`;
  }

  function renderSemanticPlainText(value, options = {}) {
    return renderTeachingProse(value, options);
  }

  function shortenText(text, maxLength = 220) {
    const normalized = stripHtml(text);
    if (normalized.length <= maxLength) return normalized;
    return `${normalized.slice(0, maxLength - 1).trim()}…`;
  }

  function hasMeaningfulText(value) {
    const normalized = stripHtml(value);
    if (!normalized) return false;
    const lowered = normalized.toLowerCase();
    return ![
      "undefined",
      "null",
      "formeln folgen.",
      "intuitions-karte folgt in kuerze.",
      "intuitions-karte folgt in kürze."
    ].includes(lowered);
  }

  function normalizeIntuitionData(data) {
    if (!data) return null;

    const mentalModel = Array.isArray(data.mentalModel)
      ? data.mentalModel.filter((entry) => hasMeaningfulText(entry?.body))
      : [];

    const core = hasMeaningfulText(data.core)
      ? data.core
      : mentalModel[0]?.body || "";

    const analogy = hasMeaningfulText(data.analogy)
      ? data.analogy
      : mentalModel[1]?.body || "";

    const bridge = hasMeaningfulText(data.bridge) ? data.bridge : "";
    const exam = Array.isArray(data.exam)
      ? data.exam.filter((entry) => hasMeaningfulText(entry?.if) && hasMeaningfulText(entry?.then))
      : [];

    return {
      core,
      analogy,
      bridge,
      exam
    };
  }

  function hasMeaningfulIntuition(data) {
    const normalized = normalizeIntuitionData(data);
    if (!normalized) return false;
    return Boolean(
      hasMeaningfulText(normalized.core)
      || hasMeaningfulText(normalized.analogy)
      || hasMeaningfulText(normalized.bridge)
      || normalized.exam.length
    );
  }

  function hasFormulas(entry) {
    return Array.isArray(entry?.formeln) && entry.formeln.some((formula) => hasMeaningfulDisplayContent(formula?.eq));
  }

  function renderFormulaEq(eq) {
    if (!hasMeaningfulDisplayContent(eq)) return "";
    return renderSemanticBlock(eq, { variant: "formula" });
  }

  function renderTaskMathBlock(value) {
    if (!hasMeaningfulDisplayContent(value)) return "";
    return renderSemanticBlock(value, { variant: "task" });
  }

  function summarizeVariables(variables) {
    if (!variables || !Object.keys(variables).length) return "";
    return Object.entries(variables)
      .map(([key, value]) => `$${key}$: ${value}`)
      .join(" | ");
  }

  const AUTO_VARIABLE_MEANINGS = {
    "\\hat{\\beta}_0": "geschätzter Achsenabschnitt",
    "\\hat{\\beta}_1": "geschätzte Steigung / geschätzter Effekt von x auf y",
    "\\beta_0": "Achsenabschnitt / Grundniveau",
    "\\beta_1": "partieller Effekt / Steigungsparameter",
    "\\beta_j": "Koeffizient des j-ten Regressors",
    "R^2": "Bestimmtheitsmaß: erklärter Anteil der Gesamtstreuung",
    "SSR": "Residuenquadratsumme / nicht erklärte Streuung",
    "SST": "Totale Quadratsumme / Gesamtstreuung",
    "SSE": "erklärte Quadratsumme",
    "s_{xy}": "empirische Kovarianz bzw. Kreuzprodukt von x und y",
    "s_x^2": "empirische Varianz von x",
    "s_y^2": "empirische Varianz von y",
    "c_0": "Konsum in der Gegenwart",
    "c_1": "Konsum in der Zukunft",
    "y_0": "Einkommen in der Gegenwart",
    "y_1": "Einkommen in der Zukunft",
    "1+i": "Bruttozinsfaktor",
    "i": "Zinssatz",
    "MRS_{0,1}": "Grenzrate der Substitution zwischen Gegenwart und Zukunft",
    "AfA": "jährlicher Abschreibungsbetrag",
    "AK": "Anschaffungs- oder Herstellungskosten",
    "RW": "Restwert",
    "n": "Nutzungsdauer / Anzahl der Perioden",
    "BW_t": "Buchwert in Periode t",
    "t": "Zeitindex / Anzahl abgeschriebener Jahre",
    "E": "aktueller nominaler Wechselkurs",
    "E^e": "erwarteter zukünftiger Wechselkurs",
    "i^*": "Auslandszins",
    "NX": "Nettoexporte",
    "\\varepsilon": "realer Wechselkurs",
    "\\eta_X": "Preiselastizität der Exporte",
    "\\eta_M": "Preiselastizität der Importe",
    "\\lambda": "Lagrange-Multiplikator / Schattenpreis",
    "\\mathcal{L}": "Lagrange-Funktion"
  };

  const AUTO_VARIABLE_PATTERNS = [
    /\\hat\{\\beta\}_0/g,
    /\\hat\{\\beta\}_1/g,
    /\\beta_0/g,
    /\\beta_1/g,
    /\\beta_j/g,
    /R\^2/g,
    /\bSSR\b/g,
    /\bSST\b/g,
    /\bSSE\b/g,
    /s_\{xy\}/g,
    /s_x\^2/g,
    /s_y\^2/g,
    /MRS_\{0,1\}/g,
    /BW_t/g,
    /\bAfA\b/g,
    /\bAK\b/g,
    /\bRW\b/g,
    /\bc_0\b/g,
    /\bc_1\b/g,
    /\by_0\b/g,
    /\by_1\b/g,
    /1\+i/g,
    /i\^\*/g,
    /\bNX\b/g,
    /\\varepsilon/g,
    /\\eta_X/g,
    /\\eta_M/g,
    /\\mathcal\{L\}/g,
    /\\lambda/g,
    /\bi\b/g,
    /\bn\b/g,
    /\bt\b/g,
    /\bE\^e\b/g,
    /\bE\b/g
  ];

  function inferFormulaVariables(formula) {
    if (getDisplayMode(formula?.eq) !== "math") return [];

    const eq = displayContentToPlainText(formula?.eq);
    if (!eq.trim()) return [];
    if (eq.includes("\\text{") || eq.includes("\\mathrm{")) return [];

    const matches = [];
    AUTO_VARIABLE_PATTERNS.forEach((pattern) => {
      pattern.lastIndex = 0;
      const found = eq.match(pattern) || [];
      found.forEach((token) => {
        if (!matches.includes(token) && AUTO_VARIABLE_MEANINGS[token]) {
          matches.push(token);
        }
      });
    });

    return matches.map((token) => [token, AUTO_VARIABLE_MEANINGS[token]]);
  }

  function createPracticeTask(text, steps, result) {
    return {
      text,
      steps: steps
        .filter((step) => hasMeaningfulText(step?.text) || hasMeaningfulDisplayContent(step?.eq))
        .map((step) => ({
          text: step.text || "",
          eq: step.eq || null
        })),
      result
    };
  }

  function buildSupplementalPracticeTasks(chapter, entry, intuition) {
    const supplements = [];
    const { sections, warnings } = extractTheorySignals(entry);
    const normalizedIntuition = normalizeIntuitionData(intuition);
    const links = conceptLinks[chapter.id] || { uses: [], usedBy: [] };

    const pushTask = (task) => {
      if (!task?.text || !task?.steps?.length || !task?.result) return;
      const key = `${stripHtml(task.text)}|${stripHtml(task.result)}`.toLowerCase();
      if (!key.trim()) return;
      if (supplements.some((existing) => `${stripHtml(existing.text)}|${stripHtml(existing.result)}`.toLowerCase() === key)) {
        return;
      }
      supplements.push(task);
    };

    (entry?.formeln || []).forEach((formula, index) => {
      const warning = warnings[index % Math.max(1, warnings.length)];
      pushTask(createPracticeTask(
        `Arbeite "${formula.label}" bei "${chapter.title}" so auf, dass du die Beziehung in einer Klausur sicher einsetzen und deuten kannst.`,
        [
          { text: "Starte mit der zentralen Beziehung und halte die formale Struktur sauber fest.", eq: formula.eq },
          { text: formula.desc || `Beschreibe, welche ökonomische oder logische Beziehung diese Formel im Kapitel ${chapter.title} ausdrückt.` },
          { text: summarizeVariables(formula.variables) || "Ordne alle Variablen sauber zu und markiere, welche Größen geändert werden dürfen und welche als gegeben behandelt werden." },
          { text: warning ? `Fehlerkontrolle: ${warning.label}. ${warning.body}` : (normalizedIntuition?.bridge || `Leite aus der Beziehung eine typische Klausurfolge für ${chapter.title} ab.`) }
        ],
        `${formula.label}: Formel, Notation und Einsatzlogik sind für ${chapter.title} abrufbar.`
      ));
    });

    sections.forEach((section, index) => {
      const warning = warnings[index % Math.max(1, warnings.length)];
      const formula = entry?.formeln?.[index % Math.max(1, entry?.formeln?.length || 1)];
      pushTask(createPracticeTask(
        `Baue aus dem Theorieblock "${section.heading}" eine klausurfeste Argumentation für "${chapter.title}" auf.`,
        [
          { text: `Definiere zuerst den Kern des Abschnitts in einem sauberen Satz: ${section.paragraph}` },
          { text: entry?.motivation ? `Ordne den Abschnitt in das Kapitelziel ein: ${entry.motivation}` : `Ordne den Abschnitt in die Gesamtlogik von ${chapter.title} ein.` },
          formula?.eq
            ? { text: "Verbinde die Theorie mit dem passenden formalen Anker.", eq: formula.eq }
            : { text: normalizedIntuition?.bridge || "Leite daraus die wichtigste Mechanik oder Richtungsaussage für die Klausur ab." },
          { text: warning ? `Typischer Fehler: ${warning.label}. ${warning.body}` : "Schließe mit einer Kontrollfrage ab: Welche Konsequenz folgt aus dem Theorieblock für Anwendung, Interpretation oder Vorzeichen?" }
        ],
        `"${section.heading}" sitzt als Definition, Mechanismus und Konsequenz.`
      ));
    });

    warnings.forEach((warning, index) => {
      const section = sections[index % Math.max(1, sections.length)];
      const formula = entry?.formeln?.[index % Math.max(1, entry?.formeln?.length || 1)];
      pushTask(createPracticeTask(
        `Entschärfe den typischen Fehler "${warning.label}" bei "${chapter.title}" anhand eines sauberen Gegenbeispiels.`,
        [
          { text: `Formuliere die Fehlvorstellung offen: ${warning.body}` },
          { text: section ? `Stelle die korrekte Kapitel-Logik daneben: ${section.paragraph}` : `Stelle die korrekte Kapitel-Logik daneben und benenne den richtigen Zugriff auf ${chapter.title}.` },
          formula?.eq
            ? { text: "Verankere die Korrektur in der formalen Beziehung des Kapitels.", eq: formula.eq }
            : { text: "Verankere die Korrektur in der zentralen Definition oder dem korrekten Begriffsgebrauch." },
          { text: "Formuliere eine kurze Selbstkontrolle, mit der du diesen Fehler in der Klausur aktiv vermeidest." }
        ],
        `Fehler "${warning.label}" ist für ${chapter.title} aktiv abgesichert.`
      ));
    });

    if (normalizedIntuition && hasMeaningfulIntuition(normalizedIntuition)) {
      pushTask(createPracticeTask(
        `Nutze die Intuition von "${chapter.title}", um ein belastbares Klausurerkennungsmuster aufzubauen.`,
        [
          { text: normalizedIntuition.core || `Halte die Kernidee von ${chapter.title} in einem anschaulichen Satz fest.` },
          { text: normalizedIntuition.analogy || "Lege ein Bild oder eine Analogie fest, an der du die Richtung des Konzepts wiedererkennst." },
          { text: normalizedIntuition.bridge || "Verbinde die anschauliche Ebene mit der formalen oder argumentativen Lösung." },
          { text: normalizedIntuition.exam?.[0] ? `Klausurmuster: Wenn ${normalizedIntuition.exam[0].if}, dann ${normalizedIntuition.exam[0].then}.` : "Formuliere zum Schluss einen Satz, der den Sprung von Intuition zu Prüfungslösung ausdrückt." }
        ],
        `${chapter.title}: Intuition, formaler Zugriff und Klausurmuster greifen ineinander.`
      ));
    }

    if ((links.uses && links.uses.length) || (links.usedBy && links.usedBy.length)) {
      const previousTitle = links.uses?.[0] ? chapterMap[links.uses[0]]?.title : "";
      const nextTitle = links.usedBy?.[0] ? chapterMap[links.usedBy[0]]?.title : "";
      pushTask(createPracticeTask(
        `Ordne "${chapter.title}" sauber in den Konzeptfluss des Portals ein.`,
        [
          { text: previousTitle ? `Benenne zuerst, was aus "${previousTitle}" für ${chapter.title} vorausgesetzt wird.` : `Benenne zuerst, welche Vorkenntnisse du für ${chapter.title} aktivierst.` },
          { text: entry?.motivation || `${chapter.title} ist ein eigenständiger Baustein, der in die Kurslogik eingeordnet werden muss.` },
          { text: nextTitle ? `Leite daraus ab, warum "${nextTitle}" auf diesem Kapitel aufbaut.` : "Leite daraus ab, welche Anschlussfrage im weiteren Stoff als nächstes folgt." },
          { text: "Schließe mit einer Kontrollformel, Leitdefinition oder Kernaussage ab, damit der Übergang im Klausurkopf verankert ist." }
        ],
        `${chapter.title} ist als Vorkenntnis-Folge-Logik im Stofffluss verankert.`
      ));
    }

    for (let index = 0; supplements.length < 10 && index < 12; index += 1) {
      const anchor = supplements[supplements.length - 1];
      const formula = entry?.formeln?.[0];
      const focusLabel = ["Definition", "Mechanik", "Vorzeichen", "Transfer"][index % 4];
      pushTask(createPracticeTask(
        `Verdichte "${chapter.title}" zu einer klausurfesten Kontrollaufgabe mit Fokus auf ${focusLabel}.`,
        [
          { text: entry?.motivation || `${chapter.title} ist ein Kernbaustein des Themengebiets ${chapter.cat}.` },
          formula?.eq
            ? { text: "Nutze den formalen Hauptanker des Kapitels als Startpunkt.", eq: formula.eq }
            : { text: "Nutze die zentrale Definition oder den Kernmechanismus des Kapitels als Startpunkt." },
          { text: anchor?.result ? `Kontrolliere, ob deine Argumentation mit folgendem Leitresultat konsistent ist: ${anchor.result}` : "Kontrolliere, ob deine Argumentation von Definition über Mechanik bis Ergebnis geschlossen ist." },
          { text: `Formuliere abschließend den einen Satz, den du in einer Prüfung unter Zeitdruck sicher hinschreiben könntest, diesmal mit Schwerpunkt auf ${focusLabel}.` }
        ],
        `${chapter.title}: ${focusLabel} ist in einem kompakten Kontrollschema verfügbar.`
      ));
    }

    return supplements;
  }

  function buildPracticeTasks(chapter, entry, intuition) {
    const baseTasks = getPracticeTasks(chapter.id, entry).map((task) => ({
      ...task,
      steps: Array.isArray(task?.steps) ? task.steps : [],
      result: task?.result || "Arbeite den Lösungsweg sauber aus und sichere das Ergebnis formal."
    }));

    if (minimumPracticeTasks <= 0 || baseTasks.length >= minimumPracticeTasks) return baseTasks;

    const supplementalTasks = buildSupplementalPracticeTasks(chapter, entry, intuition);
    const seen = new Set(baseTasks.map((task) => stripHtml(task.text).toLowerCase()));

    supplementalTasks.forEach((task) => {
      const key = stripHtml(task.text).toLowerCase();
      if (!key || seen.has(key) || baseTasks.length >= minimumPracticeTasks) return;
      seen.add(key);
      baseTasks.push(task);
    });

    return baseTasks.slice(0, minimumPracticeTasks);
  }

  function updateTabButtons(activeTab, availability) {
    document.querySelectorAll("#tabRow button[data-tab]").forEach((button) => {
      const { tab } = button.dataset;
      // r-anwendung is opt-in: must be explicitly true to show
      const visible = tab === "theorie"
        || tab === "aufgaben"
        || (tab === "r-anwendung" ? availability[tab] === true : availability[tab] !== false);
      button.style.display = visible ? "" : "none";
      const isActive = visible && tab === activeTab;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", isActive ? "true" : "false");
      if (tab === "r-anwendung" && visible) {
        button.textContent = "R-Übung";
        button.title =
          "R-Code aus der Vorlesung: zuerst Output lesen, dann Mini-Task — wie im Ökonometrie-Portal; hier ausführen, falls WebR aktiv ist.";
      }
    });
  }

  function extractTheorySignals(entry) {
    const warningData = getWarningSystemData(entry);
    if (!warningData.theoryHtml || typeof DOMParser === "undefined") {
      return {
        sections: [],
        warnings: warningData.allWarnings.map((warning) => ({
          label: warning.title,
          body: warning.bodyText
        })),
        inlineWarnings: warningData.inlineWarnings.map((warning) => ({
          label: warning.title,
          body: warning.bodyText
        })),
        railWarnings: warningData.railWarnings.map((warning) => ({
          label: warning.title,
          body: warning.bodyText
        })),
        theoryHtml: warningData.theoryHtml
      };
    }

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<div>${warningData.theoryHtml}</div>`, "text/html");

      const sections = Array.from(doc.querySelectorAll(".section-block"))
        .map((section) => {
          const heading = section.querySelector("h3")?.textContent?.trim();
          const paragraph = section.querySelector("p")?.textContent?.trim();
          if (!heading || !paragraph) return null;
          return { heading, paragraph };
        })
        .filter(Boolean);

      const warnings = warningData.allWarnings.map((warning) => ({
        label: warning.title,
        body: warning.bodyText
      }));
      const inlineWarnings = warningData.inlineWarnings.map((warning) => ({
        label: warning.title,
        body: warning.bodyText
      }));
      const railWarnings = warningData.railWarnings.map((warning) => ({
        label: warning.title,
        body: warning.bodyText
      }));

      return { sections, warnings, inlineWarnings, railWarnings, theoryHtml: warningData.theoryHtml };
    } catch {
      return {
        sections: [],
        warnings: warningData.allWarnings.map((warning) => ({
          label: warning.title,
          body: warning.bodyText
        })),
        inlineWarnings: warningData.inlineWarnings.map((warning) => ({
          label: warning.title,
          body: warning.bodyText
        })),
        railWarnings: warningData.railWarnings.map((warning) => ({
          label: warning.title,
          body: warning.bodyText
        })),
        theoryHtml: warningData.theoryHtml
      };
    }
  }

  /** Intuition tab can show theory-derived Fehleranalyse / Vertiefung even when INTUITION data is thin. */
  function hasPortalIntuitionSurface(conceptId) {
    const entry = contentById[conceptId];
    const { sections, warnings } = extractTheorySignals(entry);
    return (warnings && warnings.length > 0) || (sections && sections.length > 1);
  }

  function renderNotationList(variables = {}) {
    const entries = Object.entries(variables || {});
    if (!entries.length) return "";
    return `<ul class="exam-drill-list">${entries
      .map(([key, value]) => `<li><strong>$${key}$</strong>: ${renderSemanticPlainText(value)}</li>`)
      .join("")}</ul>`;
  }

  function renderGuidedTasks(tasks) {
    if (!tasks.length) {
      return `<div class="section-block">
<h3>Geführte Aufgaben</h3>
<p>Für dieses Konzept liegt der Schwerpunkt im Prüfungstransfer. Nutze die Fragen unten, um Definition, Richtungsaussage und formalen Zugriff klausurfest zu machen.</p>
</div>`;
    }

    return tasks.map((task, index) => renderQuestionCard({
      label: `Aufgabe ${index + 1}`,
      question: task.text,
      buttonId: `solBtn_${index}`,
      answerId: `sol_${index}`,
      toggleCall: `window.__toggleSolution(${index})`,
      answerMarkup: `<h4>Musterlösung</h4>
${(task.steps || []).map((step, stepIndex) => `
<div class="step">
<div class="step-num" aria-hidden="true">${stepIndex + 1}</div>
<div class="step-body">
<div class="step-text">${renderSemanticPlainText(step.text || "")}</div>
<div class="step-math-slot">${renderTaskMathBlock(step.eq)}</div>
</div>
</div>`).join("")}
${hasMeaningfulText(task.hint) ? renderTaskWarningCard(renderSemanticPlainText(task.hint), "Klausurhinweis") : ""}
<div class="result-badge">Ergebnis: ${renderSemanticPlainText(task.result || "Arbeite das Ergebnis formal zu Ende aus.")}</div>`
    })).join("");
  }

  function classifyFormulaCardLayout(formula) {
    const displayMode = getDisplayMode(formula?.eq) || "math";
    const eq = displayContentToPlainText(formula?.eq).trim();
    const desc = String(formula?.desc || "").trim();
    const variableCount = Object.keys(formula?.variables || {}).length;
    const rawEq = typeof formula?.eq === "string"
      ? formula.eq
      : JSON.stringify(formula?.eq || "");
    const hasMultilineMath = /\\\\|\\begin\{(?:aligned|cases|array|matrix|pmatrix|bmatrix)\}/.test(rawEq);
    const arrowCount = (eq.match(/[→⇒←⇐↔⇔]/gu) || []).length;
    const hasTextHeavyMath = displayMode === "math" && (
      /\\text\{|\\mathrm\{|\\operatorname\{/.test(rawEq)
      || /\b(?:durch|weil|wenn|falls|bei|mit|ohne|möglich|nur|gleichzeitig|Voraussetzung|Bedingung|Interpretation)\b/ui.test(eq)
    );

    if (displayMode === "schema") {
      return "layout-schema";
    }
    if (displayMode === "reference") {
      return "layout-reference";
    }
    if (
      hasMultilineMath
      || variableCount >= 4
      || desc.length > 150
      || eq.length > 92
      || arrowCount >= 2
      || (hasTextHeavyMath && eq.length > 52)
    ) {
      return "layout-extended";
    }
    if (variableCount >= 3 || desc.length > 110 || eq.length > 52 || hasTextHeavyMath) {
      return "layout-medium";
    }
    return "layout-compact";
  }

  function buildExamDrills(chapter, entry, intuition) {
    const drills = [];
    const { sections } = extractTheorySignals(entry);
    const formula = entry?.formeln?.[0];
    const section = sections[0];
    const secondSection = sections[1];
    const tasks = Array.isArray(entry?.aufgaben) ? entry.aufgaben : [];
    const patterns = Array.isArray(intuition?.exam) ? intuition.exam : [];

    drills.push({
      tag: "Kernidee",
      question: `Was ist bei "${chapter.title}" der eine Kernsatz, den du in der Klausur sofort parat haben musst?`,
      answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Kernsatz</span>
<div class="exam-drill-copy">${intuition?.core || entry?.motivation || `${chapter.title} ist ein Kernbaustein aus ${chapter.cat}.`}</div>
</div>
${intuition?.bridge ? `<div class="exam-drill-line">
<span class="exam-drill-key">Warum das ökonomisch zählt</span>
<div class="exam-drill-copy">${renderSemanticPlainText(intuition.bridge)}</div>
</div>` : ""}`
    });

    if (formula && hasMeaningfulDisplayContent(formula.eq)) {
      drills.push({
        tag: formula.label,
        question: `Welche formale Beziehung trägt "${chapter.title}" in der Prüfung, und wie liest du sie richtig?`,
        answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Formaler Anker</span>
${renderFormulaEq(formula.eq)}
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Bedeutung</span>
<div class="exam-drill-copy">${renderSemanticPlainText(formula.desc || `Diese Beziehung ist der formale Einstieg in ${chapter.title}.`)}</div>
</div>
${formula.variables && Object.keys(formula.variables).length ? `<div class="exam-drill-line">
<span class="exam-drill-key">Notation</span>
${renderNotationList(formula.variables)}
</div>` : ""}`
      });
    }

    if (section) {
      drills.push({
        tag: "Theorieblock",
        question: `Wie erklärst du "${section.heading}" so, dass daraus direkt eine saubere Prüfungsantwort wird?`,
        answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Argumentationskern</span>
<div class="exam-drill-copy">${renderSemanticPlainText(section.paragraph)}</div>
</div>
${formula && hasMeaningfulDisplayContent(formula.eq) ? `<div class="exam-drill-line">
<span class="exam-drill-key">Formale Rückbindung</span>
${renderFormulaEq(formula.eq)}
</div>` : ""}`
      });
    }

    patterns.slice(0, 2).forEach((pattern, index) => {
      drills.push({
        tag: `Klausurmuster ${index + 1}`,
        question: `Wenn in der Prüfung ${pattern.if} auftaucht, welcher Zugriff ist dann der richtige?`,
        answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Erstes Signal</span>
<div class="exam-drill-copy">${renderSemanticPlainText(pattern.if)}</div>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Saubere Reaktion</span>
<div class="exam-drill-copy">${renderSemanticPlainText(pattern.then)}</div>
</div>
${formula && hasMeaningfulDisplayContent(formula.eq) ? `<div class="exam-drill-line">
<span class="exam-drill-key">Formel, die du notieren kannst</span>
${renderFormulaEq(formula.eq)}
</div>` : ""}`
      });
    });

    tasks.slice(0, 3).forEach((task, index) => {
      drills.push({
        tag: `Prüfungsfrage ${index + 1}`,
        question: `Wie würdest du die klausurnahe Aufgabe zu "${chapter.title}" lösen? ${task.text}`,
        answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Lösungslogik</span>
<ol class="exam-drill-steps">${(task.steps || []).map((step) => `<li class="exam-drill-step"><div class="exam-drill-step-body"><div class="exam-drill-step-text">${renderSemanticPlainText(step.text || "")}</div><div class="exam-drill-step-math">${renderTaskMathBlock(step.eq)}</div></div></li>`).join("")}</ol>
</div>
${hasMeaningfulText(task.hint) ? renderTaskWarningCard(renderSemanticPlainText(task.hint), "Klausurhinweis") : ""}
<div class="exam-drill-line">
<span class="exam-drill-key">Prüfungsresultat</span>
<div class="result-badge">${renderTeachingProse(task.result || "Arbeite das Ergebnis formal aus.")}</div>
</div>`
      });
    });

    if (secondSection) {
      drills.push({
        tag: "Transfer",
        question: `Welchen zweiten Gedanken solltest du nach dem ersten Kernsatz bei "${chapter.title}" direkt anschließen?`,
        answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Anschlussgedanke</span>
<div class="exam-drill-copy"><strong>${renderDecodedText(secondSection.heading)}:</strong> ${renderSemanticPlainText(secondSection.paragraph)}</div>
</div>
${intuition?.analogy ? `<div class="exam-drill-line">
<span class="exam-drill-key">Denkbild</span>
<div class="exam-drill-copy">${renderSemanticPlainText(intuition.analogy)}</div>
</div>` : ""}`
      });
    }

    return drills.slice(0, 8);
  }

  function renderExamDrillDeck(chapter, entry, intuition) {
    const drills = Array.isArray(examDrillsById?.[chapter.id]) && examDrillsById[chapter.id].length
      ? examDrillsById[chapter.id]
      : buildExamDrills(chapter, entry, intuition);
    function resolveExamDrillMetaLabel(tag, cardLabel) {
      const normalizedTag = String(tag || "").trim();
      if (!normalizedTag) return "";
      if (normalizedTag === cardLabel) return "";
      if (/^Prüfungsfrage\s+\d+$/u.test(normalizedTag)) return "";
      if (/^Klausurmuster\s+\d+$/u.test(normalizedTag)) return "Klausurmuster";
      return normalizedTag;
    }

    return `<div class="exam-drill-panel klausurmethodik-exam-transfer">
<span class="klausurmethodik-kicker">Prüfungsvorbereitung</span>
<div class="practice-section-header">Prüfungstransfer</div>
<div class="exam-drill-grid">
${drills.map((drill, index) => {
  const drillId = `${chapter.id.replace(/[^a-zA-Z0-9_]/g, "_")}_${index}`;
  const cardLabel = `Prüfungsfrage ${index + 1}`;
  const metaLabel = resolveExamDrillMetaLabel(drill.tag, cardLabel);
  return renderQuestionCard({
    label: cardLabel,
    question: drill.question,
    buttonId: `examDrillBtn_${drillId}`,
    buttonText: "Lösung anzeigen",
    openButtonText: "Lösung verbergen",
    toggleCall: `window.__toggleExamDrill('${drillId}')`,
    answerId: `examDrill_${drillId}`,
    cardClass: "exam-drill-card",
    answerMarkup: `<div class="exam-drill-answer-head">Musterlösung</div>
${metaLabel ? `<div class="exam-drill-meta">${metaLabel}</div>` : ""}
${drill.answer}`
  });
}).join("")}
</div>
</div>`;
  }

  function renderQuestionCard({
    label,
    question,
    buttonId,
    answerId,
    toggleCall,
    answerMarkup,
    buttonText = "Lösung anzeigen",
    openButtonText = "Lösung verbergen",
    cardClass = ""
  }) {
    const classes = ["problem-card", cardClass].filter(Boolean).join(" ");

    return `<div class="${classes}">
<div class="prob-num">${label}</div>
<div class="prob-text">${renderSemanticPlainText(question)}</div>
<div class="prob-actions">
<button class="btn" id="${buttonId}" data-closed-label="${buttonText}" data-open-label="${openButtonText}" onclick="${toggleCall}">${buttonText}</button>
</div>
<div class="solution-block${cardClass ? ` ${cardClass.replace("card", "answer")}` : ""}" id="${answerId}" aria-expanded="false">
${answerMarkup}
</div>
<span class="practice-platform-badge" title="Plattform-Übung — kein offizielles Übungsblatt">Plattform-Übung</span>
</div>`;
  }

  function setRendererState(nextCurrent, nextTab) {
    current = nextCurrent;
    currentTab = nextTab;
  }

  function hasTaskFamilies(conceptId) {
    return filterStudentVisibleTaskFamilies(taskFamiliesByConcept[conceptId]).length > 0;
  }

  function renderPracticePanel(entry, conceptId) {
    const chapter = chapters.find((item) => item.id === conceptId);
    const intuition = intuitionById[conceptId];
    const tasks = chapter ? buildPracticeTasks(chapter, entry, intuition) : getPracticeTasks(conceptId, entry);
    if (!tasks.length) {
      if (chapter) {
        return `<div class="panel active mikro1-practice">
<div class="practice-panel-header">
<span class="practice-platform-badge practice-platform-badge--panel" title="Plattform-Übung — kein offizielles Übungsblatt">Plattform-Übung</span>
</div>
<div class="section-block"><h3>Geführte Aufgaben</h3><p>Für dieses Konzept liegt der Schwerpunkt im Prüfungstransfer. Nutze die Fragen unten, um Definition, Richtungsaussage und formalen Zugriff klausurfest zu machen.</p></div>${renderExamDrillDeck(chapter, entry, intuition)}</div>`;
      }
      return `<div class="panel active mikro1-practice">
<div class="practice-panel-header">
<span class="practice-platform-badge practice-platform-badge--panel" title="Plattform-Übung — kein offizielles Übungsblatt">Plattform-Übung</span>
</div>
<div class="section-block"><h3>Aufgaben</h3><p>Arbeite hier mit Theorie, Verbindungen und Wiederholung weiter, bis neue Aufgabenbausteine geladen sind.</p></div></div>`;
    }
    let html = `<div class="panel active mikro1-practice">
<div class="practice-panel-header">
<span class="practice-platform-badge practice-platform-badge--panel" title="Plattform-Übung — kein offizielles Übungsblatt">Plattform-Übung</span>
</div>
<div class="practice-surface-intro">
<div class="practice-surface-column">
<span class="practice-surface-kicker">Geführte Aufgaben</span>
<p>Hier trainierst du den vollständigen Lösungsweg Schritt für Schritt. Ziel ist nicht nur das Ergebnis, sondern die saubere Reihenfolge der Argumentation.</p>
</div>
<div class="practice-surface-column">
<span class="practice-surface-kicker">Prüfungstransfer</span>
<p>Hier musst du zeigen, dass du Formel, Intuition und Fehlerkontrolle auch in komprimierter Klausurform sicher abrufen kannst.</p>
</div>
</div>
<div class="practice-section-header">Geführte Aufgaben</div>
${renderGuidedTasks(tasks)}`;
    if (chapter) {
      html += renderExamDrillDeck(chapter, entry, intuition);
    }
    html += "</div>";
    return html;
  }

  function methodToVorgehenBullets(method) {
    const sanitized = studentizeMethodText(method);
    if (!hasMeaningfulText(sanitized)) return [];
    const raw = String(sanitized).trim();
    const bySentence = raw
      .split(/(?:\.\s+|;\s+|\n+)/)
      .map((part) => part.trim())
      .filter((part) => part.length > 3);
    if (bySentence.length > 1) return bySentence.slice(0, 5);
    if (raw.includes(",")) {
      return raw.split(/,\s+/).map((part) => part.trim()).filter(Boolean).slice(0, 5);
    }
    return [raw];
  }

  function renderKlausurmethodikField(label, contentHtml, variant = "") {
    if (!contentHtml) return "";
    const variantClass = variant ? ` klausurmethodik-field--${variant}` : "";
    return `<div class="klausurmethodik-field${variantClass}">
<span class="klausurmethodik-label">${label}</span>
${contentHtml}
</div>`;
  }

  function renderKlausurmethodikDifficultyChip(difficulty) {
    if (!difficulty || String(difficulty).toLowerCase() === "offen") return "";
    const normalized = String(difficulty).toLowerCase();
    const tone = normalized.includes("schwer")
      ? "schwer"
      : normalized.includes("mittel")
        ? "mittel"
        : "neutral";
    return `<span class="klausurmethodik-difficulty klausurmethodik-difficulty--${tone}">${renderSemanticPlainText(difficulty)}</span>`;
  }

  function renderTaskFamilyPanel(conceptId) {
    const families = filterStudentVisibleTaskFamilies(taskFamiliesByConcept[conceptId]);
    if (!families.length) {
      return `<div class="section-block task-family-layer formula-klausurmethodik klausurmethodik-panel klausurmethodik-panel--empty">
<span class="klausurmethodik-kicker">Prüfungsvorbereitung</span>
<h3 class="klausurmethodik-heading">Klausurmethodik</h3>
<p class="klausurmethodik-empty">Für dieses Konzept sind noch keine Klausurfamilien hinterlegt.</p>
</div>`;
    }
    return `<div class="section-block task-family-layer formula-klausurmethodik klausurmethodik-panel">
<span class="klausurmethodik-kicker">Prüfungsvorbereitung</span>
<h3 class="klausurmethodik-heading">Klausurmethodik</h3>
<p class="klausurmethodik-intro">Typische Klausuraufgabentypen — Methode, Fallen und Bewertungslogik auf einen Blick. Üben im Tab <strong>Aufgaben</strong>.</p>
<div class="klausurmethodik-accordion-list task-family-grid">
${families.map((family, index) => renderTaskFamilyCard(family, index)).join("")}
</div>
</div>`;
  }

  function renderTaskFamilyCard(family, index = 0) {
    const stepNum = index + 1;
    const openAttr = index === 0 && !hasTaskFamilies(current) ? " open" : "";
    const familyKey = escapeHtml(String(family.id || `family-${index}`).replace(/[^\w.-]/g, "_"));
    const ziel = family.topic || family.title || "";
    const vorgehen = methodToVorgehenBullets(family.method);
    const typicalQuestion = family.title || family.topic || "";
    const traps = Array.isArray(family.commonTraps) ? family.commonTraps : [];
    const timeMeta = Number.isFinite(family.expectedTimeMinutes)
      ? `${family.expectedTimeMinutes} Min.`
      : "";
    const hasAnchors = Array.isArray(family.sourceAnchorIds) && family.sourceAnchorIds.length > 0;
    const vorgehenHtml = vorgehen.length
      ? `<ol class="klausurmethodik-steps">${vorgehen.map((step) => `<li>${renderSemanticPlainText(step)}</li>`).join("")}</ol>`
      : "";
    const trapHtml = traps.length
      ? `<ul class="klausurmethodik-list klausurmethodik-list--traps">${traps.map((trap) => `<li>${renderSemanticPlainText(trap)}</li>`).join("")}</ul>`
      : "";
    const sourceFootnote = hasAnchors
      ? `<p class="klausurmethodik-footnote"><button type="button" class="klausurmethodik-source-link" onclick="window.__openQuellen?.()">Quellen anzeigen</button><span class="klausurmethodik-footnote-sep" aria-hidden="true">·</span><span>${family.sourceAnchorIds.length} VL-Stelle${family.sourceAnchorIds.length === 1 ? "" : "n"}</span></p>`
      : "";
    return `<details class="task-family-card klausurmethodik-accordion"${openAttr} data-family-id="${familyKey}">
<summary class="klausurmethodik-accordion-head">
<span class="klausurmethodik-step-num" aria-hidden="true">${stepNum}</span>
<span class="klausurmethodik-accordion-title-wrap">
<span class="klausurmethodik-accordion-title">${renderMathTitle(family.title || family.id)}</span>
${timeMeta ? `<span class="klausurmethodik-time">${renderSemanticPlainText(timeMeta)}</span>` : ""}
</span>
${renderKlausurmethodikDifficultyChip(family.difficulty)}
</summary>
<div class="klausurmethodik-card-body">
${renderKlausurmethodikField("Ziel", ziel ? `<p class="klausurmethodik-text">${renderSemanticPlainText(ziel)}</p>` : "", "ziel")}
${renderKlausurmethodikField("Vorgehen", vorgehenHtml, "vorgehen")}
${renderKlausurmethodikField("Typische Klausurfrage", typicalQuestion ? `<p class="klausurmethodik-text">${renderSemanticPlainText(typicalQuestion)}</p>` : "", "frage")}
${renderKlausurmethodikField("Häufiger Fehler", trapHtml, "fehler")}
${family.officialTaskGap ? renderStudentTaskGapNote(family.officialTaskGap) : ""}
${sourceFootnote}
</div>
</details>`;
  }

  function toggleReveal(solutionId, buttonId) {
    const solution = document.getElementById(solutionId);
    const button = document.getElementById(buttonId);
    if (!solution) return;
    const isVisible = solution.classList.toggle("show");
    solution.setAttribute("aria-expanded", isVisible ? "true" : "false");
    if (button) {
      const openLabel = button.dataset.openLabel || "Lösung verbergen";
      const closedLabel = button.dataset.closedLabel || "Lösung anzeigen";
      button.textContent = isVisible ? openLabel : closedLabel;
    }
    if (isVisible) renderMath(solution);
  }

  function toggleSolution(idx) {
    toggleReveal(`sol_${idx}`, `solBtn_${idx}`);
  }

  function toggleExamDrill(drillId) {
    toggleReveal(`examDrill_${drillId}`, `examDrillBtn_${drillId}`);
  }

  function renderFormulaPanel(entry) {
    const taskFamiliesHtml = renderTaskFamilyPanel(current);
    const formulaCards = Array.isArray(formulaCardsByConcept[current]) ? formulaCardsByConcept[current] : [];
    const hasFormulaGrid = hasFormulas(entry);
    const hasKlausurmethodik = hasTaskFamilies(current);
    if (!hasFormulaGrid && !taskFamiliesHtml) {
      return '<div class="panel active"></div>';
    }
    let html = '<div class="panel active">';
    if (hasFormulaGrid) {
      const formulaBody = `<div class="formula-grid">${entry.formeln.map((formula, formulaIndex) => {
      const layoutClass = classifyFormulaCardLayout(formula);
      const displayMode = getDisplayMode(formula.eq) || "math";
      const explicitVariables = Object.entries(formula.variables || {}).filter(([, value]) => hasMeaningfulText(value));
      const inferredVariables = displayMode === "math" && !explicitVariables.length ? inferFormulaVariables(formula) : [];
      const variableEntries = explicitVariables.length ? explicitVariables : inferredVariables;
      const varsHtml = variableEntries.length
        ? `<ul class="f-variables">${variableEntries.map(([key, value]) =>
            `<li><span class="f-var-key">$${key}$</span><span class="f-var-sep">-</span><span class="f-var-def">${value}</span></li>`
          ).join("")}</ul>`
        : "";
      const varsHintMuted =
        'font-size:12px;color:var(--muted);margin-top:10px;line-height:1.55;max-width:52rem';
      const varsHint = displayMode === "math" ? varsHtml : "";
      const supportNote = displayMode === "math" && inferredVariables.length
        ? `<p class="f-var-hint" style="${varsHintMuted}">Automatisch ergänzte Symbolhilfe aus der Formelnotation; für modul-spezifische Feinheiten bleibt die Vorlesungsnotation maßgeblich.</p>`
        : "";
      return `<div class="formula-card formula-card--${displayMode} ${layoutClass}">
<button class="f-copy-btn" aria-label="Formel kopieren" onclick="window.__copyFormula(${formulaIndex}, event)">Kopieren</button>
<div class="f-label">${renderMathTitle(formula.label)}</div>
${hasMeaningfulDisplayContent(formula.eq) ? `<div class="f-eq">${renderSemanticBlock(formula.eq, { variant: "formula-card" })}</div>` : ""}
${formula.desc ? `<div class="f-desc">${renderTeachingProse(formula.desc)}</div>` : ""}
${varsHint}
${supportNote}
</div>`;
    }).join("")}</div>`;
      html += formulaBody;
    if (formulaCards.length) {
      const herleitungBlocks = formulaCards.map(renderFormulaHerleitungBlock).filter(Boolean);
      const einsatzgrenzenBlocks = formulaCards.map(renderFormulaEinsatzgrenzenBlock).filter(Boolean);
      if (herleitungBlocks.length || einsatzgrenzenBlocks.length) {
        html += '<div class="formula-support-layer">';
        if (herleitungBlocks.length) {
          html += `<section class="formula-herleitung-layer" aria-labelledby="formula-herleitung-heading">
<h3 id="formula-herleitung-heading" class="formula-support-heading">Herleitungen</h3>
<div class="formula-herleitung-stack">${herleitungBlocks.join("")}</div>
</section>`;
        }
        if (einsatzgrenzenBlocks.length) {
          html += `<section class="formula-einsatzgrenzen-layer" aria-labelledby="formula-einsatzgrenzen-heading">
<h3 id="formula-einsatzgrenzen-heading" class="formula-support-heading formula-support-heading--limits">Einsatzgrenzen</h3>
<div class="formula-einsatzgrenzen-stack">${einsatzgrenzenBlocks.join("")}</div>
</section>`;
        }
        html += "</div>";
      }
    }
    }
    if (taskFamiliesHtml) {
      html += taskFamiliesHtml;
    }
    html += "</div>";
    return html;
  }

  function renderFormulaHerleitungBlock(card) {
    const steps = Array.isArray(card.derivationSteps) ? card.derivationSteps : [];
    const hasSteps = steps.length > 0;
    const hasIntuition = hasMeaningfulText(card.intuition);
    if (!hasSteps && !hasIntuition) return "";

    const stepsHtml = hasSteps
      ? `<ol class="formula-herleitung-steps">${steps.map((step, index) => {
        const kicker = hasMeaningfulText(step.label)
          ? `<span class="formula-herleitung-step-kicker">${renderDecodedText(step.label)}</span>`
          : "";
        const math = hasMeaningfulDisplayContent(step.math)
          ? `<div class="formula-herleitung-math">${renderSemanticBlock(step.math, { variant: "formula-card" })}</div>`
          : "";
        return `<li class="formula-herleitung-step">
<span class="formula-herleitung-step-num" aria-hidden="true">${index + 1}</span>
<div class="formula-herleitung-step-body">
${kicker}
<span class="formula-herleitung-step-text">${renderSemanticPlainText(step.text || "")}</span>
${math}
</div>
</li>`;
      }).join("")}</ol>`
      : "";

    const anchor = hasMeaningfulDisplayContent(card.displayFormula)
      ? `<div class="formula-herleitung-anchor">${renderSemanticBlock(card.displayFormula, { variant: "formula-card" })}</div>`
      : "";

    return `<article class="formula-herleitung-block">
<div class="formula-herleitung-head">
<span class="formula-herleitung-kicker">Ableitung</span>
<h4 class="formula-herleitung-title">${renderMathTitle(card.officialNotation || card.id)}</h4>
</div>
${anchor}
${hasIntuition ? `<p class="formula-herleitung-intro">${renderTeachingProse(card.intuition)}</p>` : ""}
${stepsHtml}
</article>`;
  }

  function renderFormulaEinsatzgrenzenBlock(card) {
    const groups = [];
    const pushGroup = (modifier, title, items) => {
      if (!Array.isArray(items) || !items.length) return;
      groups.push(`<div class="formula-einsatzgrenzen-group formula-einsatzgrenzen-group--${modifier}">
<h5 class="formula-einsatzgrenzen-group-title">${title}</h5>
<ul class="formula-einsatzgrenzen-list">${items.map((item) => `<li>${renderSemanticPlainText(item)}</li>`).join("")}</ul>
</div>`);
    };
    pushGroup("assumptions", "Annahmen", card.assumptions);
    pushGroup("applies", "Gilt, wenn", card.appliesWhen);
    pushGroup("fails", "Scheitert, wenn", card.failsWhen);
    pushGroup("mistakes", "Typische Fehler", card.commonMistakes);

    const anchorBadge = Array.isArray(card.anchorIds) && card.anchorIds.length
      ? `<p class="formula-einsatzgrenzen-meta">Quellanker: ${card.anchorIds.length} geprüfte Stelle${card.anchorIds.length === 1 ? "" : "n"}</p>`
      : "";
    const shortcut = hasMeaningfulText(card.examShortcut)
      ? `<p class="formula-einsatzgrenzen-shortcut"><strong>Klausurshortcut:</strong> ${renderSemanticPlainText(card.examShortcut)}</p>`
      : "";

    if (!groups.length && !shortcut && !anchorBadge) return "";

    const trapIcon = `<span class="formula-einsatzgrenzen-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg></span>`;

    return `<article class="formula-einsatzgrenzen-block">
<div class="formula-einsatzgrenzen-head">
${trapIcon}
<h4 class="formula-einsatzgrenzen-title">${renderMathTitle(card.officialNotation || card.id)}</h4>
</div>
<div class="formula-einsatzgrenzen-body">
${groups.join("")}
${shortcut}
${anchorBadge}
</div>
</article>`;
  }

  function copyFormula(formulaIndex, event) {
    const card = event.target.closest(".formula-card");
    if (!card) return;
    const eq = card.querySelector(".f-eq");
    if (!eq) return;
    navigator.clipboard.writeText(eq.textContent).then(() => {
      const btn = event.target;
      const original = btn.textContent;
      btn.textContent = "Kopiert";
      btn.classList.add("copied");
      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove("copied");
      }, 1500);
    }).catch(() => {});
  }

  function renderIntuitionPanel(id) {
    const data = normalizeIntuitionData(intuitionById[id]) || { core: "", analogy: "", bridge: "", exam: [] };
    if (!hasMeaningfulIntuition(data) && !hasPortalIntuitionSurface(id)) {
      return '<div class="panel active"></div>';
    }

    const chapter = chapters.find((entry) => entry.id === id);
    const entry = contentById[id];
    const formula = entry?.formeln?.[0];
    const { sections: theorySections } = extractTheorySignals(entry);
    const recognitionItems = [
      ...(Array.isArray(data.exam) ? data.exam.slice(0, 2).map((pattern) => `Wenn ${pattern.if}, dann ${pattern.then}.`) : []),
      ...(theorySections[0] ? [`Achte auf ${theorySections[0].heading.toLowerCase()}: ${theorySections[0].paragraph}`] : [])
    ].slice(0, 4);

    function renderExamPatterns(intuition) {
      const patterns = Array.isArray(intuition?.exam) ? intuition.exam : [];
      if (!patterns.length) return "";
      return `<div class="intuition-detail intuition-patterns">
<span class="intuition-detail-label">Klausurmuster</span>
<div class="intuition-detail-copy">
${patterns.map((pattern) => `<div class="intuition-pattern-row">
<span class="intuition-pattern-if">Wenn</span>
<span class="intuition-pattern-then">${renderSemanticPlainText(pattern.if)}</span>
<span class="intuition-pattern-arrow" aria-hidden="true">→</span>
<span class="intuition-pattern-then">${renderSemanticPlainText(pattern.then)}</span>
</div>`).join("")}
</div>
</div>`;
    }

    return `<div class="panel active mikro1-intuition">
<div class="section-block intuition-hero">
<h3>Worum es wirklich geht</h3>
<p class="intuition-lead">${data.core || entry?.motivation || `${chapter.title} ordnet einen zentralen Mechanismus aus ${chapter.cat}.`}</p>
${formula && (hasMeaningfulDisplayContent(formula.eq) || hasMeaningfulText(formula.desc)) ? `<div class="intuition-callout">
<span class="intuition-callout-label">Formaler Anker</span>
<div class="intuition-callout-body">
${hasMeaningfulDisplayContent(formula.eq) ? `<div class="intuition-callout-anchor">${renderFormulaEq(formula.eq)}</div>` : ""}
${hasMeaningfulText(formula.desc) ? `<p class="intuition-callout-desc">${renderTeachingProse(formula.desc)}</p>` : ""}
</div>
</div>` : ""}
</div>

<div class="intuition-grid">
<div class="section-block intuition-card">
<h3>Denkbild</h3>
<p>${data.analogy || entry?.motivation || `${chapter.title} lässt sich am besten als geordnete Entscheidung unter gegebenen Bedingungen lesen.`}</p>
${theorySections[0] ? `<p class="intuition-support"><strong>${renderDecodedText(theorySections[0].heading)}:</strong> ${renderSemanticPlainText(theorySections[0].paragraph)}</p>` : ""}
</div>

<div class="section-block intuition-card">
<h3>Woran du das Konzept erkennst</h3>
<ul class="intuition-bullets">
${recognitionItems.map((item) => `<li>${renderSemanticPlainText(item, { stripMarkup: true })}</li>`).join("")}
</ul>
</div>
</div>

<div class="section-block intuition-bridge">
<div class="intuition-bridge-head">
<span class="intuition-bridge-kicker">Transferpfad</span>
<h3 class="intuition-bridge-title">Vom Bild zur Theorie</h3>
<p class="intuition-bridge-copy">${data.bridge || entry?.motivation || `${chapter.title} verbindet ökonomische Intuition mit einem formalen Prüfungszugriff.`}</p>
</div>
${theorySections[1] || (Array.isArray(data.exam) && data.exam.length) ? `<div class="intuition-detail-list">
${theorySections[1] ? `<div class="intuition-detail">
<span class="intuition-detail-label">Theoretische Vertiefung</span>
<div class="intuition-detail-copy"><strong>${renderDecodedText(theorySections[1].heading)}:</strong> ${renderSemanticPlainText(theorySections[1].paragraph)}</div>
</div>` : ""}
${renderExamPatterns(data)}
</div>` : ""}
</div>
</div>`;
  }

  function renderContent(conceptId, tab, initGraphFn) {
    current = conceptId;
    currentTab = tab;
    window.__lastRenderError = "";

    const content = document.getElementById("content");
    const breadcrumb = document.getElementById("breadcrumb");
    if (!content) return;

    if (!conceptId) {
      renderHome();
      return;
    }

    const tabRow = document.getElementById("tabRow");
    if (tabRow) tabRow.classList.add("visible");

    const chapter = chapters.find((entry) => entry.id === conceptId);
    const entry = contentById[conceptId];
    const idx = chapters.findIndex((item) => item.id === conceptId) + 1;

    const tabAvailability = {
      graph: graphConcepts.has(conceptId),
      formeln: hasFormulas(entry) || hasTaskFamilies(conceptId),
      intuition:
        hasMeaningfulIntuition(intuitionById[conceptId]) || hasPortalIntuitionSurface(conceptId),
      quellen: hasConceptQuellenContent(getConceptProvenance(conceptId)),
      "r-anwendung": Boolean(renderRAnwendungPanel) && hasRBlock(conceptId)
    };

    const activeTab = (tab === "graph" && !tabAvailability.graph)
      || (tab === "formeln" && !tabAvailability.formeln)
      || (tab === "intuition" && !tabAvailability.intuition)
      || (tab === "quellen" && !tabAvailability.quellen)
      || (tab === "r-anwendung" && !tabAvailability["r-anwendung"])
      ? "theorie"
      : tab;

    currentTab = activeTab;
    updateTabButtons(activeTab, tabAvailability);

    if (breadcrumb) {
      breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button> / ${escapeHtml(chapter.cat)} / ${renderMathTitle(chapter.title)}`;
    }

    if (!entry) {
      content.innerHTML = `<div class="concept-header">
<div class="concept-tag">${chapter.cat} · ${idx}</div>
<h1 class="concept-title">${renderMathTitle(chapter.title)}</h1>
</div>
<div class="section-block"><h3>Inhalt</h3><p>Nutze für dieses Thema die Kapitelverbindungen, den Schnelltest und die Wiederholung, um die Kernlogik im Kurszusammenhang zu sichern.</p></div>`;
      const emptyStrip = buildConceptProvenanceStripHtml({
        conceptId,
        activeTab,
        layers: getConceptProvenance(conceptId),
        sourceMaterialBaseUrl
      });
      if (emptyStrip) {
        content.insertAdjacentHTML("beforeend", emptyStrip);
        initConceptProvenanceInteractions(content);
      }
      renderMath(content);
      return;
    }

    const motivationStrip = showConceptMotivationBanner && entry.motivation
      ? `<div class="concept-motivation" role="note">${entry.motivation}</div>`
      : "";
    const objectivesBlock = Array.isArray(entry.objectives) && entry.objectives.length
      ? `<div class="concept-objectives" role="region" aria-label="Lernziele"><h3>Lernziele</h3><ul>${entry.objectives.map((o) => `<li>${escapeHtml(String(o))}</li>`).join("")}</ul><p class="concept-objectives-hint">Nach diesem Block kannst du die Lernziele selbst abhaken.</p></div>`
      : "";
    const syllabusIdx = chapters.findIndex((item) => item.id === conceptId) + 1;
    const catPos = getCategoryPosition(conceptId);
    const headerHTML = `<div class="concept-header">
<div class="concept-tag">${catPos ? `${escapeHtml(catPos.category)} · Stelle ${catPos.index} von ${catPos.total}` : `${escapeHtml(chapter.cat)} · ${syllabusIdx}`}</div>
<h1 class="concept-title">${renderMathTitle(chapter.title)}</h1>
${motivationStrip}
</div>`;

    content.scrollTo({ top: 0, behavior: "smooth" });

    try {
      if (activeTab === "theorie") {
        const theorySignals = extractTheorySignals(entry);
        const warningData = getWarningSystemData(entry);
        const mistakesMirror = renderMainFlowMistakesSection(warningData.railWarnings);
        content.innerHTML =
          headerHTML + `<div class="panel active">${objectivesBlock}${theorySignals.theoryHtml || entry.theorie}${mistakesMirror}</div>`;
      } else if (activeTab === "graph") {
        content.innerHTML = headerHTML + renderGraphPanel(conceptId);
        if (initGraphFn) initGraphFn(conceptId);
      } else if (activeTab === "aufgaben") {
        const masteryHtml = renderMastery(conceptId);
        content.innerHTML = headerHTML + renderPracticePanel(entry, conceptId) + masteryHtml;
      } else if (activeTab === "formeln") {
        content.innerHTML = headerHTML + renderFormulaPanel(entry);
      } else if (activeTab === "intuition") {
        content.innerHTML = headerHTML + renderIntuitionPanel(conceptId);
      } else if (activeTab === "quellen") {
        content.innerHTML = headerHTML + buildQuellenPanelHtml({
          conceptId,
          layers: getConceptProvenance(conceptId),
          sourceMaterialBaseUrl,
          getConceptSourceSummary
        });
      } else if (activeTab === "r-anwendung" && renderRAnwendungPanel) {
        content.innerHTML = headerHTML + renderRAnwendungPanel(conceptId);
      }
    } catch (err) {
      console.error("Render error:", err);
      window.__lastRenderError = String(err?.stack || err);
      content.innerHTML = `<div class="empty-state">
<p class="empty-state-error">Fehler beim Laden</p>
<p>Bitte Seite neu laden.</p>
<div class="empty-state-actions">
<button class="btn" onclick="location.reload()">Neu laden</button>
</div>
</div>`;
    }

    const connMainInner = buildConceptConnectionsHtml({
      chapters,
      conceptId,
      conceptLinks,
      groupConnections: true,
      variant: "main"
    });
    /* Verbindungen main-column mirror: Theorie tab only (avoid repeating on Grafik / Aufgaben / Formeln / R). */
    if (
      activeTab === "theorie" &&
      entry &&
      connMainInner.trim() &&
      !String(window.__lastRenderError || "").length
    ) {
      content.insertAdjacentHTML(
        "beforeend",
        `<section class="content-fallback content-fallback--connections content-fallback--rp-mirror" aria-labelledby="content-fallback-conn-h">
<h3 class="content-fallback__title" id="content-fallback-conn-h">Verbindungen</h3>
<div class="content-fallback__connections">${connMainInner}</div>
</section>`
      );
    }

    if (activeTab !== "quellen" && activeTab !== "aufgaben") {
      const provenanceStrip = buildConceptProvenanceStripHtml({
        conceptId,
        activeTab,
        layers: getConceptProvenance(conceptId),
        sourceMaterialBaseUrl
      });
      if (provenanceStrip && !String(window.__lastRenderError || "").length) {
        content.insertAdjacentHTML("beforeend", provenanceStrip);
        initConceptProvenanceInteractions(content);
      }
    } else if (!String(window.__lastRenderError || "").length) {
      initQuellenPanelInteractions(content);
    }

    renderMath(content);
  }

  function renderHome() {
    const content = document.getElementById("content");
    const breadcrumb = document.getElementById("breadcrumb");
    const tabRow = document.getElementById("tabRow");
    if (!content) return;
    if (tabRow) tabRow.classList.remove("visible");
    if (breadcrumb) {
      breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button>`;
    }

    const categories = {};
    chapters.forEach((chapter) => {
      if (!categories[chapter.cat]) categories[chapter.cat] = [];
      categories[chapter.cat].push({ ...chapter });
    });

    const progress = loadProgress();
    const seenCount = Object.keys(progress).filter((id) => chapters.find((chapter) => chapter.id === id)).length;
    const totalTasks = chapters.reduce((sum, chapter) => sum + buildPracticeTasks(chapter, contentById[chapter.id], intuitionById[chapter.id]).length, 0);
    const due = getDueCards();
    const lastId = loadLastId();
    const lastChapter = lastId && chapters.find((chapter) => chapter.id === lastId);
    const weakChapter = findWeakestConcept(progress);

    let html = `<div class="hero">
<h1>${courseTitle}<br><span>Interaktives Lernportal</span></h1>
<p>${homeIntro}</p>
<p class="home-exam-flow-hint" role="note">Prüfungsflow: <strong>1 Theorie</strong> → <strong>2 Aufgaben</strong> → <strong>3 Formeln &amp; Klausurmethodik</strong></p>
<div class="stat-row">
<div class="stat-item"><div class="s-val">${chapters.length}</div><div class="s-lab">Konzepte</div></div>
<div class="stat-item"><div class="s-val">${Object.keys(categories).length}</div><div class="s-lab">Themengebiete</div></div>
<div class="stat-item"><div class="s-val">${totalTasks}</div><div class="s-lab">Übungsaufgaben</div></div>
<div class="stat-item"><div class="s-val">${seenCount}</div><div class="s-lab">Angesehen</div></div>
</div>
</div>`;

    if (due.length > 0) {
      html += `<div class="home-srs-banner" onclick="window.__showSRSReview()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__showSRSReview()")}>
<span class="home-srs-banner-label">Wiederholung fällig</span>
<span class="home-srs-banner-text">${due.length} Konzept${due.length !== 1 ? "e" : ""} — jetzt wiederholen →</span>
</div>`;
    }

    if (sourcePdfOpenDisabledByDefault()) {
      html += renderOfficialMaterialsNoticeHtml().replace(
        'class="official-materials-notice"',
        'class="official-materials-notice module-home-pdf-notice"'
      );
    }

    const pilotDashNote = homeLernDashboardPilotNote
      ? String(homeLernDashboardPilotNote)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
      : "";

    const quickStartCard = lastChapter
      ? `<div class="home-action-card home-action-card--primary" onclick="window.__navigate('${lastChapter.id}', { tab: 'aufgaben' })" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE(`window.__navigate('${lastChapter.id}', { tab: 'aufgaben' })`)}>
<div class="hac-title">Aufgaben-Schnellstart</div>
<div class="hac-desc">${renderMathTitle(lastChapter.title)} — direkt üben</div>
<span class="home-action-sim-badge">Plattform-Übung</span>
</div>`
      : "";

    html += `<div class="home-action-row">
${quickStartCard}
<div class="home-action-card" onclick="window.__showDashboard()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__showDashboard()")}>
<div class="hac-title">Lern-Dashboard</div>
<div class="hac-desc">Fortschritt, schwache Bereiche, Wiederholungen</div>
${pilotDashNote ? `<p class="hac-pilot-note">${pilotDashNote}</p>` : ""}
</div>
<div class="home-action-card" onclick="window.__startExam()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__startExam()")}>
<div class="hac-title">Schnelltest</div>
<div class="hac-desc">20 Minuten, gemischte Konzepte</div>
<span class="home-action-sim-badge">Plattform-Simulation</span>
</div>
${showInterleavedExamCard && typeof window !== "undefined" && typeof window.__startInterleavedExam === "function" ? `
<div class="home-action-card" onclick="window.__startInterleavedExam()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__startInterleavedExam()")}>
<div class="hac-title">Gemischter Schnelltest</div>
<div class="hac-desc">Wie Schnelltest — Themenwechsel im Modul (Pilot)</div>
<span class="home-action-sim-badge">Plattform-Simulation</span>
</div>` : ""}
${extraHomeActionCardsHtml}
<div class="home-action-card" onclick="window.__showSRSReview()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__showSRSReview()")}>
<div class="hac-title">Wiederholung${due.length > 0 ? ` (${due.length})` : ""}</div>
<div class="hac-desc">Spaced Repetition für heute</div>
</div>
${typeof window !== "undefined" && typeof window.__showFullExamSelect === "function" ? `
<div class="home-action-card" onclick="window.__showFullExamSelect()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__showFullExamSelect()")}>
<div class="hac-title">Probeklausuren</div>
<div class="hac-desc">${renderDecodedText(fullExamHomeDescription)}</div>
<span class="home-action-sim-badge">Plattform-Simulation</span>
</div>
` : ""}
</div>`;

    if (!extraHomeActionCardsHtml) {
      html += `<p class="home-konzept-check-note" role="note">${KONCEPT_CHECK_SCOPE_NOTE}</p>`;
    }

    if (weakChapter) {
      html += `<p class="home-weak-teaser">Schwacher Bereich: <button type="button" class="link-btn" onclick="window.__navigate('${weakChapter.id}')">${renderMathTitle(weakChapter.title)}</button> — <button type="button" class="link-btn" onclick="window.__showDashboard()">Dashboard →</button></p>`;
    }

    if (lastChapter) {
      html += `<div class="home-continue-card" onclick="window.__navigate('${lastChapter.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${lastChapter.id}')">
<span class="hcc-label">Weitermachen</span>
<span class="hcc-title">${renderMathTitle(lastChapter.title)}</span>
<span class="hcc-cat">${lastChapter.cat}</span>
</div>`;
    }

    const recent = Object.entries(progress)
      .filter(([, entry]) => entry && entry.lastSeen)
      .sort(([, a], [, b]) => (b.lastSeen || 0) - (a.lastSeen || 0))
      .slice(0, 3)
      .map(([id]) => chapters.find((chapter) => chapter.id === id))
      .filter(Boolean);

    if (recent.length) {
      html += `<div class="home-recent-strip">
<div class="section-sep">Zuletzt geöffnet</div>
<div class="home-mini-grid">
${recent.map((chapter) => `<div class="home-mini-card" onclick="window.__navigate('${chapter.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')">
<div class="hc-num">${chapter.cat}</div>
<div class="hc-title">${renderMathTitle(chapter.title)}</div>
</div>`).join("")}
</div>
</div>`;
    }

    Object.entries(categories).forEach(([category, items]) => {
      html += `<div class="section-sep">${category}</div><div class="home-grid">`;
      items.forEach((item, localIdx) => {
        html += `<div class="home-card" onclick="window.__navigate('${item.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${item.id}')">
<div class="hc-num">${escapeHtml(category)} · Stelle ${localIdx + 1} von ${items.length}</div>
<div class="hc-title">${renderMathTitle(item.title)}</div>
${renderHomeSourceBadge(item.id)}
<div class="hc-cat">${item.cat}</div>
</div>`;
      });
      html += "</div>";
    });

    content.innerHTML = html;
    renderMath(content);
  }

  function showDashboard() {
    const content = document.getElementById("content");
    const tabRow = document.getElementById("tabRow");
    const breadcrumb = document.getElementById("breadcrumb");
    if (!content) return;
    if (tabRow) tabRow.classList.remove("visible");
    if (breadcrumb) breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button> / Dashboard`;
    content.innerHTML = renderDashboard();
    renderMath(content);
  }

  return {
    renderContent,
    renderHome,
    toggleSolution,
    toggleExamDrill,
    copyFormula,
    showDashboard,
    setRendererState,
    renderPracticePanel
  };
}
