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
  buildQuellenPanelHtml,
  hasConceptQuellenContent,
  initQuellenPanelInteractions
} from "./quellenPanel.js";
import { filterStudentVisibleTaskFamilies } from "../data/officialTaskIngestion.js";
import { studentizeMethodText, studentizeTaskGapNote } from "../utils/studentFacingText.js";
import { enrichTaskFamilyForDisplay } from "./klausurmethodikEnrichment.js";
import {
  FULL_EXAM_HOME_DESCRIPTION
} from "../data/examDisclosure.js";
import { renderMathTitle } from "./formatMathInTitle.js";
import { resolveEinsatzgrenzenDisplayTitle } from "./resolveEinsatzgrenzenDisplayTitle.js";
import {
  renderOfficialMaterialsNoticeHtml,
  sourcePdfOpenDisabledByDefault
} from "../utils/deployEnvironment.js";
import { ensureGraphPedagogyChrome } from "./graphPedagogy.js";
import {
  extractConceptHighlightTerms,
  highlightPracticeText
} from "../utils/learningHighlights.js";
import {
  LEARNER_LABELS,
  FORMULA_RULE_LABELS,
  KLAUSUR_METHOD_LABELS,
  renderLessonIntroCard,
  renderMasteryCheckpoint,
  renderConfidenceCheckpoint,
  renderLessonNextStepFooter,
  renderReviewControls,
  renderFehlerChecklist,
  renderExamRecognitionBlock,
  renderStagedPracticeCard,
  wrapCappedActionButtons,
  renderFormulaPedagogyExtras,
  renderSourceUsePedagogy,
  getDerivationStepRole
} from "../pedagogy/learnerPedagogy.js";

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
  "Konzept-Check (5 Min.): Makro I, Statistik, Makro II, Finanz, Recht und IWB — sonst Schnelltest & Aufgaben.";

export function createRenderer({
  courseLabel,
  courseTitle,
  homeIntro,
  chapters,
  contentById,
  intuitionById = {},
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
  /** First-visit primary CTA when no local progress (e.g. budget, deskriptiv). */
  recommendedStartConceptId = null,
  recommendedStartTab = "aufgaben",
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
  /** Optional: exam-OS task-family taxonomy keyed by concept id. */
  taskFamiliesByConcept = {},
  /** Module slug for recipe synthesis (e.g. mikro1, statistik). */
  moduleSlug = ""
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

  function buildConceptPillHtml(conceptId) {
    const summary = getConceptSourceSummary(conceptId);
    if (!summary?.status) return "";
    let label = "Quelle";
    if (summary.status === "anchored") label = "Quelle geprüft";
    else if (summary.status === "referenced") label = "Quelle verknüpft";
    const title = summary.title || summary.label || label;
    return `<button type="button" class="concept-source-link" onclick="window.__openQuellen?.()" title="${escapeHtml(title)}">${escapeHtml(label)}</button>`;
  }

  function formatLessonPositionLabel(index, total) {
    if (index > 0 && total > 0) return `Lektion ${index}/${total}`;
    return "";
  }

  function buildConceptHeaderHtml(chapter, entry, conceptId, { hideSourceChrome = false } = {}) {
    const catPos = getCategoryPosition(conceptId);
    const syllabusIdx = chapters.findIndex((item) => item.id === conceptId) + 1;
    const positionLabel = catPos
      ? formatLessonPositionLabel(catPos.index, catPos.total)
      : (syllabusIdx > 0 ? `Abschnitt ${syllabusIdx}` : "");
    const tagLabel = catPos
      ? `${escapeHtml(catPos.category)} · ${positionLabel}`
      : `${escapeHtml(chapter.cat)} · ${positionLabel}`;
    const subtitle =
      chapter?.short && String(chapter.short).trim()
        ? `<p class="concept-subtitle">${escapeHtml(String(chapter.short).trim())}</p>`
        : "";
    const pillInner = hideSourceChrome ? "" : buildConceptPillHtml(conceptId);
    const pillsRow = hideSourceChrome
      ? ""
      : `<div class="concept-header-row concept-header-row--pills" aria-label="Quellenbezug"><div class="concept-pill-row">${pillInner}</div></div>`;
    const headerClass = hideSourceChrome ? "concept-header concept-header--theorie" : "concept-header";

    let motivationRow = "";
    if (showConceptMotivationBanner) {
      const motivationText = entry?.motivation ? String(entry.motivation).trim() : "";
      if (motivationText) {
        motivationRow = `<div class="concept-header-row concept-header-row--motivation"><p class="concept-motivation" role="note">${escapeHtml(motivationText)}</p></div>`;
      }
    }

    return `<div class="${headerClass}">
<div class="concept-header-row concept-header-row--tag"><span class="badge badge--meta concept-tag">${tagLabel}</span></div>
<div class="concept-header-row concept-header-row--title"><h1 class="concept-title">${renderMathTitle(chapter.title)}</h1>${subtitle}</div>
${pillsRow}
${motivationRow}
</div>`;
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

  function conceptHasGraph(conceptId) {
    if (!graphConcepts) return false;
    if (graphConcepts instanceof Set) return graphConcepts.has(conceptId);
    if (Array.isArray(graphConcepts)) return graphConcepts.includes(conceptId);
    return false;
  }

  function getLessonContentTypeLabel(conceptId) {
    if (typeof hasRBlock === "function" && hasRBlock(conceptId)) return "Anwendung";
    if (conceptHasGraph(conceptId)) return "Interaktiv";
    return "Theorie";
  }

  function getLessonCardActionLabel(conceptId, progress, lastId) {
    const entry = progress?.[conceptId];
    if (lastId === conceptId || entry?.lastSeen || (entry?.views || 0) > 0) {
      return "Weiterlernen →";
    }
    return "Öffnen →";
  }

  function buildLessonCardSubtitle(chapter) {
    const motivation = chapter?.motivation ? String(chapter.motivation).trim() : "";
    if (motivation && motivation.length <= 96) {
      return `<p class="module-lesson-card__subtitle">${escapeHtml(motivation)}</p>`;
    }
    return "";
  }

  function buildLessonCardMetaLine(conceptId, { category = "", index = 0, total = 0, includeCategory = false } = {}) {
    const parts = [];
    if (includeCategory && category) parts.push(escapeHtml(category));
    if (index > 0 && total > 0) parts.push(`Lektion ${index}/${total}`);
    parts.push(escapeHtml(getLessonContentTypeLabel(conceptId)));
    return parts.join(" · ");
  }

  const LESSON_CARD_ACTIVATE = (id) =>
    `onclick="window.__navigate('${id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${id}')"`;

  function buildHomeLessonCardHtml(item, { category, localIdx, total, progress, lastId, includeCategory = false, actionLabel = null } = {}) {
    const meta = buildLessonCardMetaLine(item.id, {
      category,
      index: localIdx + 1,
      total,
      includeCategory
    });
    const action = actionLabel || getLessonCardActionLabel(item.id, progress, lastId);
    const subtitle = buildLessonCardSubtitle(item);
    return `<div class="home-card module-lesson-card" ${LESSON_CARD_ACTIVATE(item.id)}>
<div class="module-lesson-card__body">
<h3 class="module-lesson-card__title hc-title">${renderMathTitle(item.title)}</h3>
${subtitle}
<p class="badge badge--meta module-lesson-card__meta">${meta}</p>
</div>
<span class="badge badge--action module-lesson-card__action" aria-hidden="true">${escapeHtml(action)}</span>
</div>`;
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
      ? stripHtml(String(data.core))
      : stripHtml(String(mentalModel[0]?.body || ""));

    const analogy = hasMeaningfulText(data.analogy)
      ? stripHtml(String(data.analogy))
      : stripHtml(String(mentalModel[1]?.body || ""));

    const bridge = hasMeaningfulText(data.bridge) ? stripHtml(String(data.bridge)) : "";
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
    const { sections, warnings } = extractTheorySignals(entry, chapter.id);
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
      if (tab === "intuition") {
        button.hidden = true;
        button.setAttribute("aria-hidden", "true");
        button.tabIndex = -1;
        return;
      }
      // r-anwendung is opt-in: must be explicitly true to show
      const visible = tab === "theorie"
        || tab === "aufgaben"
        || (tab === "r-anwendung" ? availability[tab] === true : availability[tab] !== false);
      button.classList.toggle("tab-btn--unavailable", !visible);
      button.style.display = visible ? "" : "none";
      button.setAttribute("aria-hidden", visible ? "false" : "true");
      button.tabIndex = visible ? 0 : -1;
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

  function buildIntuitionFusionOpts(entry, conceptId) {
    const intuition = normalizeIntuitionData(intuitionById[conceptId]);
    const formula = entry?.formeln?.[0];
    let formalAnchorHtml = "";
    if (formula && (hasMeaningfulDisplayContent(formula.eq) || hasMeaningfulText(formula.desc))) {
      formalAnchorHtml = `<span class="theory-intuition-callout-label">${LEARNER_LABELS.formalerAnker}</span>
<div class="theory-intuition-callout-body">
${hasMeaningfulDisplayContent(formula.eq) ? `<div class="theory-intuition-callout-anchor">${renderFormulaEq(formula.eq)}</div>` : ""}
${hasMeaningfulText(formula.desc) ? `<p class="theory-intuition-callout-desc">${renderTeachingProse(formula.desc)}</p>` : ""}
</div>`;
    }
    const recognitionItems = [];
    if (intuition?.exam?.length) {
      recognitionItems.push(
        ...intuition.exam.slice(0, 2).map((pattern) => `Wenn ${pattern.if}, dann ${pattern.then}.`)
      );
    }
    const { sections: theorySections } = extractTheorySignals(entry, conceptId, { skipFusion: true });
    if (theorySections[0]) {
      recognitionItems.push(
        `Achte auf ${theorySections[0].heading.toLowerCase()}: ${theorySections[0].paragraph}`
      );
    }
    return { formalAnchorHtml, recognitionItems: recognitionItems.slice(0, 4), entry };
  }

  function extractTheorySignals(entry, conceptId = null, opts = {}) {
    const chapterTitle = conceptId ? chapterMap[conceptId]?.title : entry?.title;
    const fusionBase = opts.skipFusion
      ? { moduleSlug, chapterTitle, conceptId: conceptId || "" }
      : {
        ...buildIntuitionFusionOpts(entry, conceptId),
        moduleSlug,
        chapterTitle,
        conceptId: conceptId || ""
      };
    const warningData = opts.skipFusion
      ? getWarningSystemData(entry, null, fusionBase)
      : getWarningSystemData(
          entry,
          conceptId ? intuitionById[conceptId] : null,
          fusionBase
        );
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

  function renderNotationList(variables = {}) {
    const entries = Object.entries(variables || {});
    if (!entries.length) return "";
    return `<ul class="exam-drill-list">${entries
      .map(([key, value]) => `<li><strong>$${key}$</strong>: ${renderSemanticPlainText(value)}</li>`)
      .join("")}</ul>`;
  }

  function renderHighlightedPracticeText(value, highlightTerms = []) {
    const prose = renderSemanticPlainText(value);
    if (!highlightTerms.length) return prose;
    return highlightPracticeText(prose, { terms: highlightTerms });
  }

  function renderGuidedTasks(tasks, highlightTerms = []) {
    if (!tasks.length) {
      return `<div class="section-block">
<h3>Geführte Aufgaben</h3>
<p>Für dieses Konzept liegt der Schwerpunkt im Prüfungstransfer. Nutze die Fragen unten, um Definition, Richtungsaussage und formalen Zugriff klausurfest zu machen.</p>
</div>`;
    }

    return tasks.map((task, index) => {
      const hasSimilarTask = index < tasks.length - 1;
      const answerMarkup = `<h4>Musterlösung</h4>
${(task.steps || []).map((step, stepIndex) => `
<div class="step">
<div class="step-num" aria-hidden="true">${stepIndex + 1}</div>
<div class="step-body">
<div class="step-text">${renderHighlightedPracticeText(step.text || "", highlightTerms)}</div>
<div class="step-math-slot">${renderTaskMathBlock(step.eq)}</div>
</div>
</div>`).join("")}
${hasMeaningfulText(task.hint) ? renderTaskWarningCard(renderSemanticPlainText(task.hint), "Klausurhinweis") : ""}
<div class="result-badge">Ergebnis: ${renderHighlightedPracticeText(task.result || "Arbeite das Ergebnis formal zu Ende aus.", highlightTerms)}</div>`;
      return renderStagedPracticeCard({
        label: `Aufgabe ${index + 1}`,
        questionHtml: renderHighlightedPracticeText(task.text, highlightTerms),
        taskIndex: index,
        hint: task.hint || "",
        steps: task.steps || [],
        result: task.result || "",
        answerMarkupFull: answerMarkup,
        hasSimilarTask
      });
    }).join("");
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
    const { sections } = extractTheorySignals(entry, chapter.id);
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
<span class="exam-drill-key">${LEARNER_LABELS.formalerAnker}</span>
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

  function parseExamTaskBlocks(questionText) {
    const decoded = decodeHtmlEntities(String(questionText ?? "")).trim();
    if (!decoded) return { lead: "", gegeben: "", gesucht: "", remainder: "" };

    const gegebenMatch = decoded.match(/\bGegeben\b\s*:?\s*/i);
    const gesuchtMatch = decoded.match(/\bGesucht\b\s*:?\s*/i);

    if (gegebenMatch || gesuchtMatch) {
      const gegebenStart = gegebenMatch ? gegebenMatch.index + gegebenMatch[0].length : -1;
      const gesuchtStart = gesuchtMatch ? gesuchtMatch.index : -1;
      const lead = gegebenMatch
        ? decoded.slice(0, gegebenMatch.index).trim()
        : gesuchtMatch
          ? decoded.slice(0, gesuchtMatch.index).trim()
          : "";
      const gegeben =
        gegebenStart >= 0
          ? decoded
              .slice(gegebenStart, gesuchtStart >= 0 ? gesuchtStart : undefined)
              .replace(/^[:\s—–-]+/, "")
              .trim()
          : "";
      const gesucht =
        gesuchtStart >= 0
          ? decoded.slice(gesuchtStart + (gesuchtMatch?.[0]?.length || 0)).replace(/^[:\s—–-]+/, "").trim()
          : "";
      return { lead, gegeben, gesucht, remainder: decoded };
    }

    return { lead: "", gegeben: "", gesucht: "", remainder: decoded };
  }

  function renderExamTaskBlocksHtml(questionText, highlightTerms = []) {
    const { lead, gegeben, gesucht, remainder } = parseExamTaskBlocks(questionText);
    const renderLine = (text) => renderHighlightedPracticeText(text, highlightTerms);
    const blocks = [];

    if (gegeben) {
      blocks.push(`<div class="exam-task-block exam-task-block--gegeben">
<span class="exam-task-block__label">Gegeben</span>
<p class="exam-task-block__body">${renderLine(gegeben)}</p>
</div>`);
    }
    if (gesucht) {
      blocks.push(`<div class="exam-task-block exam-task-block--gesucht">
<span class="exam-task-block__label">Gesucht</span>
<p class="exam-task-block__body">${renderLine(gesucht)}</p>
</div>`);
    }

    if (blocks.length) {
      const leadHtml = lead ? `<p class="exam-task-lead">${renderLine(lead)}</p>` : "";
      return `${leadHtml}<div class="exam-task-blocks">${blocks.join("")}</div>`;
    }

    return renderLine(remainder || questionText);
  }

  function renderExamDrillCard({
    eyebrow,
    questionText,
    highlightTerms,
    drillId,
    hintMarkup,
    approachMarkup,
    answerMarkup,
    metaLabel = ""
  }) {
    const hintId = `exam_hint_${drillId}`;
    const approachId = `exam_approach_${drillId}`;
    const solId = `examDrill_${drillId}`;
    const questionHtml = renderExamTaskBlocksHtml(questionText, highlightTerms);
    const forwardBtn = (panelId, text) =>
      `<button type="button" class="btn btn--tertiary" data-forward-only="1" onclick="window.__toggleReveal('${panelId}', this)" aria-controls="${panelId}">${text}</button>`;

    const actionButtons = wrapCappedActionButtons([
      hintMarkup ? forwardBtn(hintId, "Hinweis") : "",
      approachMarkup ? forwardBtn(approachId, "Ansatz") : "",
      `<button type="button" class="btn btn--secondary" id="examDrillBtn_${drillId}" data-forward-only="1" onclick="window.__toggleExamDrill('${drillId}')" aria-controls="${solId}">Lösung prüfen</button>`
    ]);

    return `<div class="problem-card exam-drill-card problem-card--staged" id="exam_card_${drillId}">
<span class="prob-eyebrow">${escapeHtml(eyebrow)}</span>
<div class="prob-text">${questionHtml}</div>
${actionButtons}
${hintMarkup ? `<div class="staged-reveal staged-reveal--hint" id="${hintId}" hidden>
<div class="staged-reveal__head"><span class="staged-reveal__label">Hinweis</span><button type="button" class="staged-reveal__collapse btn btn--ghost btn--xs" onclick="window.__closeReveal('${hintId}')" aria-label="Hinweis schließen">Schließen</button></div>
<div class="staged-reveal__body">${hintMarkup}</div>
</div>` : ""}
${approachMarkup ? `<div class="staged-reveal staged-reveal--approach" id="${approachId}" hidden>
<div class="staged-reveal__head"><span class="staged-reveal__label">Ansatz</span><button type="button" class="staged-reveal__collapse btn btn--ghost btn--xs" onclick="window.__closeReveal('${approachId}')" aria-label="Ansatz schließen">Schließen</button></div>
<div class="staged-reveal__body">${approachMarkup}</div>
</div>` : ""}
<div class="solution-block staged-reveal staged-reveal--solution exam-drill-answer" id="${solId}" aria-expanded="false">
<div class="staged-reveal__head">
<span class="staged-reveal__label">Musterlösung</span>
<button type="button" class="staged-reveal__collapse btn btn--ghost btn--xs" onclick="window.__toggleExamDrill('${drillId}')" aria-label="Lösung schließen">Schließen</button>
</div>
<div class="staged-reveal__body">
${metaLabel ? `<div class="exam-drill-meta">${escapeHtml(metaLabel)}</div>` : ""}
${answerMarkup}
</div>
</div>
</div>`;
  }

  function renderExamDrillDeck(chapter, entry, intuition, highlightTerms = []) {
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
<p class="exam-drill-panel-intro">Kompakter als die geführten Aufgaben — näher am Klausurblatt. Hinweis vor Lösung, nicht umgekehrt.</p>
<div class="exam-drill-grid">
${drills.map((drill, index) => {
  const drillId = `${chapter.id.replace(/[^a-zA-Z0-9_]/g, "_")}_${index}`;
  const cardLabel = `Prüfungsfrage ${index + 1}`;
  const metaLabel = resolveExamDrillMetaLabel(drill.tag, cardLabel);
  const decodedQuestion = decodeHtmlEntities(String(drill.question ?? ""));
  const hintMarkup = metaLabel
    ? `<p>${renderSemanticPlainText(`Typ: ${metaLabel}. Lies die Aufgabe erst ohne Hilfe — dann Formel aus dem Formeln-Tab zuordnen.`)}</p>`
    : `<p>${renderSemanticPlainText("Notiere Größen, Einheiten und Annahmen, bevor du rechnest.")}</p>`;
  const approachMarkup = `<p>${renderSemanticPlainText("Zielgröße benennen, passende Formel/Methode wählen, dann ersten formalen Schritt skizzieren.")}</p>`;
  return renderExamDrillCard({
    eyebrow: cardLabel,
    questionText: decodedQuestion,
    highlightTerms,
    drillId,
    hintMarkup,
    approachMarkup,
    answerMarkup: drill.answer,
    metaLabel
  });
}).join("")}
</div>
</div>`;
  }

  function renderQuestionCard({
    label,
    question,
    questionHtml = "",
    buttonId,
    answerId,
    toggleCall,
    answerMarkup,
    buttonText = "Lösung anzeigen",
    openButtonText = "Lösung verbergen",
    cardClass = ""
  }) {
    const classes = ["problem-card", cardClass].filter(Boolean).join(" ");
    const probBody = questionHtml || renderSemanticPlainText(question);

    return `<div class="${classes}">
<div class="prob-num">${label}</div>
<div class="prob-text">${probBody}</div>
<div class="prob-actions">
<button class="btn" id="${buttonId}" data-closed-label="${buttonText}" data-open-label="${openButtonText}" onclick="${toggleCall}">${buttonText}</button>
</div>
<div class="solution-block${cardClass ? ` ${cardClass.replace("card", "answer")}` : ""}" id="${answerId}" aria-expanded="false">
${answerMarkup}
</div>
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
    const highlightTerms = extractConceptHighlightTerms(entry, intuition);
    const tasks = chapter ? buildPracticeTasks(chapter, entry, intuition) : getPracticeTasks(conceptId, entry);
    if (!tasks.length) {
      if (chapter) {
        return `<div class="panel active mikro1-practice practice-tab-panel">
${renderPracticeModeIntro(true)}
${renderPracticeSectionHead(2, "Prüfungstransfer", "Bearbeite diese Aufgaben erst ohne Hilfe. Nutze danach die Lösung nur zur Kontrolle.")}
${renderExamDrillDeck(chapter, entry, intuition, highlightTerms)}</div>`;
      }
      return `<div class="panel active mikro1-practice practice-tab-panel">
${renderPracticeModeIntro(false)}
<div class="practice-empty-state"><p>Für diese Lektion sind noch keine Aufgaben hinterlegt.</p></div></div>`;
    }
    let html = `<div class="panel active mikro1-practice practice-tab-panel">
${renderPracticeModeIntro(Boolean(chapter))}
${renderPracticeSectionHead(1, "Geführte Aufgaben", "Schrittweise üben, bevor du die vollständige Lösung ansiehst.")}
${renderGuidedTasks(tasks, highlightTerms)}`;
    if (chapter) {
      html += renderTransferReadinessBridge();
      html += renderPracticeSectionHead(2, "Prüfungstransfer", "Klausurähnliche Aufgaben ohne starke Führung — nach den geführten Aufgaben.");
      html += renderExamDrillDeck(chapter, entry, intuition, highlightTerms);
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
    const variantClass = variant ? ` klausur-action-detail-row--${variant}` : "";
    return `<div class="klausur-action-detail-row${variantClass}">
<span class="klausur-action-detail-label">${label}</span>
<div class="klausur-action-detail-body">${contentHtml}</div>
</div>`;
  }

  function renderPracticeModeIntro(hasTransfer = true) {
    const transferTrack = hasTransfer
      ? `<div class="practice-mode-track">
<span class="practice-mode-track-num" aria-hidden="true">2</span>
<div class="practice-mode-track-copy">
<strong>Prüfungstransfer</strong>
<p>Klausurähnliche Aufgaben ohne starke Führung — erst nach den geführten Aufgaben.</p>
</div>
</div>`
      : "";
    return `<header class="practice-mode-header">
<div class="practice-mode-header__top">
<span class="practice-mode-kicker">Übungsmodus</span>
<span class="practice-mode-badge">${LEARNER_LABELS.plattformSimulation}</span>
</div>
<p class="practice-mode-lead">Trainiere erst geführt, dann im Klausurformat.</p>
<div class="practice-mode-tracks">
<div class="practice-mode-track">
<span class="practice-mode-track-num" aria-hidden="true">1</span>
<div class="practice-mode-track-copy">
<strong>Geführte Aufgaben</strong>
<p>Schrittweiser Lösungsweg mit Hinweisen und Fehlerkontrolle.</p>
</div>
</div>
${transferTrack}
</div>
</header>`;
  }

  function renderPracticeSectionHead(stepNum, title, purpose) {
    return `<div class="practice-section-head">
<span class="practice-section-head__num" aria-hidden="true">${stepNum}</span>
<div class="practice-section-head__copy">
<h3 class="practice-section-head__title">${title}</h3>
<p class="practice-section-head__purpose">${purpose}</p>
</div>
</div>`;
  }

  function renderTransferReadinessBridge() {
    return `<div class="practice-readiness-bridge" role="group" aria-labelledby="practice-readiness-h">
<h4 class="practice-readiness-bridge__title" id="practice-readiness-h">Bereit für Prüfungstransfer?</h4>
<ul class="practice-readiness-bridge__list">
<li><label><input type="checkbox" /> Ich erkenne den Aufgabentyp.</label></li>
<li><label><input type="checkbox" /> Ich kenne den ersten Rechenschritt.</label></li>
<li><label><input type="checkbox" /> Ich kann die zentrale Formel ohne Nachschauen wählen.</label></li>
<li><label><input type="checkbox" /> Ich kenne die häufigste Falle.</label></li>
</ul>
</div>`;
  }

  function renderKlausurmethodikDifficultyChip(difficulty) {
    if (!difficulty || String(difficulty).toLowerCase() === "offen") return "";
    const normalized = String(difficulty).toLowerCase();
    const tone = normalized.includes("schwer")
      ? "schwer"
      : normalized.includes("mittel")
        ? "mittel"
        : normalized.includes("leicht")
          ? "leicht"
          : "neutral";
    return `<span class="klausurmethodik-difficulty klausurmethodik-difficulty--${tone}">${renderSemanticPlainText(difficulty)}</span>`;
  }

  function renderKlausurmethodikDurationChip(minutes) {
    if (!Number.isFinite(minutes)) return "";
    return `<span class="klausurmethodik-duration">${minutes} Min.</span>`;
  }

  function renderKlausurPlaybookRow(label, contentHtml) {
    if (!contentHtml) return "";
    return `<div class="klausur-playbook-row">
<span class="klausur-playbook-row__label">${label}</span>
<div class="klausur-playbook-row__body">${contentHtml}</div>
</div>`;
  }

  function renderRuleZone(modifier, label, items) {
    if (!Array.isArray(items) || !items.length) return "";
    const visible = items.slice(0, modifier === "mistakes" ? 3 : items.length);
    const overflow = modifier === "mistakes" ? items.slice(3) : [];
    const listHtml = `<ul class="rule-zone__list">${visible.map((item) => `<li>${renderSemanticPlainText(item)}</li>`).join("")}</ul>`;
    const overflowHtml = overflow.length
      ? `<details class="rule-zone__overflow">
<summary class="rule-zone__overflow-summary">Weitere Hinweise anzeigen (${overflow.length})</summary>
<ul class="rule-zone__list">${overflow.map((item) => `<li>${renderSemanticPlainText(item)}</li>`).join("")}</ul>
</details>`
      : "";
    return `<section class="rule-zone rule-zone--${modifier}">
<h5 class="rule-zone__label">${label}</h5>
${listHtml}
${overflowHtml}
</section>`;
  }

  function renderFormulaTabSectionHead(sectionNum, title, lead, headingId = "") {
    const idAttr = headingId ? ` id="${headingId}"` : "";
    return `<div class="formula-tab-section-head">
<span class="formula-tab-section-num" aria-hidden="true">${sectionNum}</span>
<div class="formula-tab-section-head-copy">
<h3${idAttr}>${title}</h3>
${lead ? `<p class="formula-tab-section-lead">${lead}</p>` : ""}
</div>
</div>`;
  }

  function renderTaskFamilyPanel(conceptId, { sectionNum = null, headingId = "" } = {}) {
    const families = filterStudentVisibleTaskFamilies(taskFamiliesByConcept[conceptId]);
    const sectionHead = Number.isFinite(sectionNum)
      ? renderFormulaTabSectionHead(
        sectionNum,
        "Klausurmethodik",
        "Typische Klausuraufgabentypen — Methode, Fallen und Bewertungslogik. Üben im Tab <strong>Aufgaben</strong>.",
        headingId || "formula-tab-methodik-heading"
      )
      : `<span class="klausurmethodik-kicker">Prüfungsvorbereitung</span>
<h3 class="klausurmethodik-heading">Klausurmethodik</h3>
<p class="klausurmethodik-intro">Typische Klausuraufgabentypen — Methode, Fallen und Bewertungslogik auf einen Blick. Üben im Tab <strong>Aufgaben</strong>.</p>`;
    if (!families.length) {
      return `<section class="formula-tab-section formula-tab-section--methodik task-family-layer" aria-labelledby="${headingId || "formula-tab-methodik-heading"}">
${sectionHead}
<div class="formula-klausurmethodik klausurmethodik-panel klausurmethodik-panel--empty">
<p class="klausurmethodik-empty">Für dieses Konzept sind noch keine Klausurfamilien hinterlegt.</p>
</div>
</section>`;
    }
    return `<section class="formula-tab-section formula-tab-section--methodik task-family-layer" aria-labelledby="${headingId || "formula-tab-methodik-heading"}">
${sectionHead}
<div class="formula-klausurmethodik klausurmethodik-panel">
<div class="klausur-action-grid task-family-grid">
${families.map((family, index) => renderTaskFamilyCard(family, index)).join("")}
</div>
</div>
</section>`;
  }

  function renderTaskFamilyCard(family, index = 0) {
    const stepNum = index + 1;
    const familyKey = escapeHtml(String(family.id || `family-${index}`).replace(/[^\w.-]/g, "_"));
    const enriched = enrichTaskFamilyForDisplay(family, {
      conceptId: current,
      contentEntry: contentById[current],
      intuitionEntry: intuitionById[current],
      formulaCards: formulaCardsByConcept[current],
      courseLabel
    });
    const ziel = enriched.ziel;
    const vorgehen = enriched.vorgehenSteps.length
      ? enriched.vorgehenSteps
      : methodToVorgehenBullets(family.method);
    const typicalQuestion = enriched.typicalQuestion;
    const traps = enriched.traps.length
      ? enriched.traps
      : (Array.isArray(family.commonTraps) ? family.commonTraps : []).filter(
        (trap) => !/Anker|Übungsblatt-Muster/i.test(String(trap))
      );
    const displayTitle = enriched.displayTitle || family.title || family.id;
    const hasAnchors = Array.isArray(family.sourceAnchorIds) && family.sourceAnchorIds.length > 0;
    const vorgehenHtml = vorgehen.length
      ? `<ol class="klausurmethodik-steps">${vorgehen.map((step) => `<li>${renderSemanticPlainText(step)}</li>`).join("")}</ol>`
      : "";
    const trapHtml = traps.length
      ? `<ul class="klausurmethodik-list klausurmethodik-list--traps">${traps.map((trap) => `<li>${renderSemanticPlainText(trap)}</li>`).join("")}</ul>`
      : "";
    const pruefungslogikHtml = enriched.pruefungslogik
      ? `<p class="klausurmethodik-text">${renderSemanticPlainText(enriched.pruefungslogik)}</p>`
      : "";
    const erkennenText = typicalQuestion ? renderSemanticPlainText(typicalQuestion) : "";
    const firstThoughtText = enriched.firstThought ? renderSemanticPlainText(enriched.firstThought) : "";
    const firstStepText = enriched.firstStep ? renderSemanticPlainText(enriched.firstStep) : "";
    const durationChip = renderKlausurmethodikDurationChip(family.expectedTimeMinutes);
    const difficultyChip = renderKlausurmethodikDifficultyChip(family.difficulty);
    const metaChips = [durationChip, difficultyChip].filter(Boolean).join("");
    const metaHtml = metaChips
      ? `<div class="klausur-playbook-card__meta">${metaChips}</div>`
      : "";
    const playbookRows = [
      renderKlausurPlaybookRow(KLAUSUR_METHOD_LABELS.recognize, erkennenText),
      renderKlausurPlaybookRow(KLAUSUR_METHOD_LABELS.firstThought, firstThoughtText),
      renderKlausurPlaybookRow(KLAUSUR_METHOD_LABELS.firstStep, firstStepText)
    ].filter(Boolean).join("");
    const detailBody = [
      renderKlausurmethodikField(KLAUSUR_METHOD_LABELS.vorgehen, vorgehenHtml, "vorgehen"),
      renderKlausurmethodikField(KLAUSUR_METHOD_LABELS.trap, trapHtml, "fehler"),
      pruefungslogikHtml ? renderKlausurmethodikField(KLAUSUR_METHOD_LABELS.grading, pruefungslogikHtml, "grading") : "",
      family.officialTaskGap ? renderStudentTaskGapNote(family.officialTaskGap) : ""
    ].filter(Boolean).join("");
    const footerActions = [
      hasAnchors
        ? `<button type="button" class="klausur-playbook-card__action" onclick="window.__openQuellen?.()">${KLAUSUR_METHOD_LABELS.sources}</button>`
        : "",
      `<button type="button" class="klausur-playbook-card__action" onclick="window.__switchTab?.('aufgaben')">${KLAUSUR_METHOD_LABELS.toTask}</button>`
    ].filter(Boolean).join("");
    return `<article class="klausur-playbook-card klausur-action-card task-family-card" data-family-id="${familyKey}">
<header class="klausur-playbook-card__head">
<span class="klausur-playbook-card__num" aria-hidden="true">${stepNum}</span>
<div class="klausur-playbook-card__title-wrap">
<h4 class="klausur-playbook-card__title">${renderMathTitle(displayTitle)}</h4>
</div>
${metaHtml}
</header>
${playbookRows ? `<div class="klausur-playbook-card__rows">${playbookRows}</div>` : ""}
${detailBody ? `<details class="klausur-playbook-card__disclosure"${index === 0 ? " open" : ""}>
<summary class="klausur-playbook-card__disclosure-summary">${KLAUSUR_METHOD_LABELS.disclose}</summary>
<div class="klausur-playbook-card__disclosure-body">${detailBody}</div>
</details>` : ""}
<footer class="klausur-playbook-card__footer">${footerActions}</footer>
</article>`;
  }

  function toggleReveal(solutionId, buttonId) {
    const solution = document.getElementById(solutionId);
    const button = typeof buttonId === "string" ? document.getElementById(buttonId) : buttonId;
    if (!solution) return;
    const forwardOnly = button?.dataset?.forwardOnly === "1";
    const isVisible = solution.classList.contains("show");
    if (forwardOnly && isVisible) return;
    const nowVisible = solution.classList.toggle("show");
    solution.setAttribute("aria-expanded", nowVisible ? "true" : "false");
    if (button?.dataset && !forwardOnly) {
      const openLabel = button.dataset.openLabel || "Lösung verbergen";
      const closedLabel = button.dataset.closedLabel || "Lösung anzeigen";
      button.textContent = nowVisible ? openLabel : closedLabel;
    }
    if (button) button.setAttribute("aria-expanded", nowVisible ? "true" : "false");
    if (nowVisible) renderMath(solution);
  }

  function toggleSolution(idx) {
    toggleReveal(`sol_${idx}`, `solBtn_${idx}`);
  }

  function toggleExamDrill(drillId) {
    toggleReveal(`examDrill_${drillId}`, `examDrillBtn_${drillId}`);
  }

  function renderFormulaPanel(entry) {
    const formulaCards = Array.isArray(formulaCardsByConcept[current]) ? formulaCardsByConcept[current] : [];
    const hasFormulaGrid = hasFormulas(entry);
    const hasKlausurmethodik = hasTaskFamilies(current);
    const herleitungBlocks = formulaCards.map(renderFormulaHerleitungBlock).filter(Boolean);
    const einsatzgrenzenBlocks = formulaCards.map(renderFormulaEinsatzgrenzenBlock).filter(Boolean);
    if (!hasFormulaGrid && !hasKlausurmethodik) {
      return '<div class="panel active"></div>';
    }

    const introLead = hasFormulaGrid && hasKlausurmethodik
      ? "Kernformeln zum schnellen Abruf, Herleitung und Einsatzgrenzen — danach Klausurmethodik für den Prüfungstransfer."
      : hasFormulaGrid
        ? "Kernformeln, Herleitungen und Einsatzgrenzen für dieses Konzept — kompakt und klausurnah."
        : "Klausurmethodik für dieses Konzept: typische Aufgabentypen mit Methode und Fallen.";

    let sectionNum = 0;
    const nextSection = () => {
      sectionNum += 1;
      return sectionNum;
    };

    let html = `<div class="panel active formula-tab-panel">
<header class="formula-tab-intro">
<p class="formula-tab-intro-lead">${introLead}</p>
</header>`;

    if (hasFormulaGrid) {
      const cardsNum = nextSection();
      const formulaGridHtml = entry.formeln.map((formula, formulaIndex) => {
        const layoutClass = classifyFormulaCardLayout(formula);
        const displayMode = getDisplayMode(formula.eq) || "math";
        const explicitVariables = Object.entries(formula.variables || {}).filter(([, value]) => hasMeaningfulText(value));
        const inferredVariables = displayMode === "math" && !explicitVariables.length ? inferFormulaVariables(formula) : [];
        const variableEntries = explicitVariables.length ? explicitVariables : inferredVariables;
        const varsHtml = variableEntries.length
          ? `<dl class="f-vars-grid">${variableEntries.map(([key, value]) =>
              `<div class="f-var-row"><dt class="f-var-key">$${key}$</dt><dd class="f-var-def">${value}</dd></div>`
            ).join("")}</dl>`
          : "";
        const varsHint = displayMode === "math" ? varsHtml : "";
        const supportNote = displayMode === "math" && inferredVariables.length
          ? `<p class="f-var-hint">Automatisch ergänzte Symbolhilfe — VL-Notation in Quellen prüfen.</p>`
          : "";
        const meaning = formula.desc
          ? `<p class="f-meaning">${renderTeachingProse(formula.desc)}</p>`
          : "";
        const pedagogy = renderFormulaPedagogyExtras(formula);
        return `<article class="formula-card formula-ref-card formula-card--${displayMode} ${layoutClass}" id="formula-card-${formulaIndex}">
<header class="f-ref-head">
<h4 class="f-label">${renderMathTitle(formula.label)}</h4>
<button type="button" class="f-copy-btn" aria-label="Formel kopieren" onclick="window.__copyFormula(${formulaIndex}, event)">Kopieren</button>
</header>
${hasMeaningfulDisplayContent(formula.eq) ? `<div class="f-eq-panel f-eq">${renderSemanticBlock(formula.eq, { variant: "formula-card" })}</div>` : ""}
${meaning}
${varsHint}
${pedagogy}
${supportNote}
</article>`;
      }).join("");

      html += `<section class="formula-tab-section formula-tab-section--cards" aria-labelledby="formula-tab-cards-heading">
${renderFormulaTabSectionHead(
  cardsNum,
  "Formeln & Merksätze",
  "Notation und Kurzbeschreibung — Karten bleiben immer sichtbar.",
  "formula-tab-cards-heading"
)}
<div class="formula-grid">${formulaGridHtml}</div>
</section>`;

      if (herleitungBlocks.length) {
        const herleitungNum = nextSection();
        html += `<details class="formula-tab-section formula-tab-section--herleitung formula-herleitung-layer formula-herleitung-layer--collapsible" open>
<summary class="formula-tab-section-summary">
<span class="formula-tab-section-num" aria-hidden="true">${herleitungNum}</span>
<span class="formula-tab-section-title">Herleitungen</span>
<span class="formula-tab-section-sub">Schrittweise Ableitung — Ausgangspunkt, Schritte, Ergebnis</span>
</summary>
<div class="formula-herleitung-stack">${herleitungBlocks.join("")}</div>
</details>`;
      }

      if (einsatzgrenzenBlocks.length) {
        const limitsNum = nextSection();
        html += `<section class="formula-tab-section formula-tab-section--limits formula-einsatzgrenzen-layer" aria-labelledby="formula-tab-limits-heading">
${renderFormulaTabSectionHead(
  limitsNum,
  "Einsatzgrenzen",
  "Annahmen, Gültigkeit und typische Klausurfehler.",
  "formula-tab-limits-heading"
)}
<div class="formula-einsatzgrenzen-stack">${einsatzgrenzenBlocks.join("")}</div>
</section>`;
      }
    }

    if (hasKlausurmethodik) {
      html += renderTaskFamilyPanel(current, {
        sectionNum: nextSection(),
        headingId: "formula-tab-methodik-heading"
      });
    }

    html += "</div>";
    return html;
  }

  function getFormulaSupportConceptContext() {
    return {
      chapter: chapterMap[current] || null,
      entry: contentById[current] || null
    };
  }

  function renderFormulaSupportBlockHead(card, { includeSubtitle = false, subtitleClass = "formula-support-subtitle" } = {}) {
    const { title, subtitle } = resolveEinsatzgrenzenDisplayTitle(
      card,
      card,
      getFormulaSupportConceptContext()
    );
    const titleHtml = renderMathTitle(title);
    const subtitleHtml =
      includeSubtitle && hasMeaningfulText(subtitle)
        ? `<p class="${subtitleClass}">${renderTeachingProse(subtitle)}</p>`
        : "";
    return { titleHtml, subtitleHtml };
  }

  function renderFormulaHerleitungBlock(card) {
    const steps = Array.isArray(card.derivationSteps) ? card.derivationSteps : [];
    const hasSteps = steps.length > 0;
    const hasIntuition = hasMeaningfulText(card.intuition);
    if (!hasSteps && !hasIntuition) return "";

    const stepsInner = hasSteps
      ? steps.map((step, index) => {
        const role = getDerivationStepRole(index, steps.length, step);
        const roleBadge = `<span class="formula-derivation-step__role">${escapeHtml(role)}</span>`;
        const kicker = hasMeaningfulText(step.label)
          ? `<span class="formula-derivation-step__kicker">${renderDecodedText(step.label)}</span>`
          : "";
        const why = step.whyAllowed || step.why
          ? `<p class="formula-derivation-step__why"><strong>Warum erlaubt?</strong> ${renderSemanticPlainText(String(step.whyAllowed || step.why))}</p>`
          : "";
        const meaning = step.meaning
          ? `<p class="formula-derivation-step__meaning"><strong>Bedeutung:</strong> ${renderSemanticPlainText(String(step.meaning))}</p>`
          : "";
        const examRule = step.examRule || step.klausurregel
          ? `<p class="formula-derivation-step__rule"><strong>Klausurregel:</strong> ${renderSemanticPlainText(String(step.examRule || step.klausurregel))}</p>`
          : "";
        const math = hasMeaningfulDisplayContent(step.math)
          ? `<div class="formula-derivation-step__math">${renderSemanticBlock(step.math, { variant: "formula-card" })}</div>`
          : "";
        return `<li class="formula-derivation-step">
<span class="formula-derivation-step__num" aria-hidden="true">${index + 1}</span>
<div class="formula-derivation-step__body">
${roleBadge}
${kicker}
<p class="formula-derivation-step__text">${renderSemanticPlainText(step.text || "")}</p>
${why}
${math}
${meaning}
${examRule}
</div>
</li>`;
      }).join("")
      : "";

    const anchor = hasMeaningfulDisplayContent(card.displayFormula)
      ? `<div class="formula-herleitung-anchor">${renderSemanticBlock(card.displayFormula, { variant: "formula-card" })}</div>`
      : "";

    const { titleHtml } = renderFormulaSupportBlockHead(card);

    return `<article class="formula-derivation-chain formula-herleitung-block">
<header class="formula-derivation-chain__head">
<h4 class="formula-derivation-chain__title">${titleHtml}</h4>
${hasIntuition ? `<p class="formula-derivation-chain__intro">${renderTeachingProse(card.intuition)}</p>` : ""}
</header>
${anchor ? `<div class="formula-derivation-chain__anchor">${anchor}</div>` : ""}
${stepsInner ? `<ol class="formula-derivation-timeline">${stepsInner}</ol>` : ""}
</article>`;
  }

  function renderFormulaEinsatzgrenzenBlock(card) {
    const { titleHtml, subtitleHtml } = renderFormulaSupportBlockHead(card, {
      includeSubtitle: true,
      subtitleClass: "rule-card__function"
    });

    const formulaChip = hasMeaningfulDisplayContent(card.displayFormula)
      ? `<div class="rule-card__formula-chip">${renderSemanticBlock(card.displayFormula, { variant: "formula-card" })}</div>`
      : "";

    const zones = [
      renderRuleZone("use", FORMULA_RULE_LABELS.useWhen, (card.appliesWhen || []).slice(0, 2)),
      renderRuleZone("assumptions", FORMULA_RULE_LABELS.mustHold, card.assumptions),
      renderRuleZone("invalid", FORMULA_RULE_LABELS.doNotUse, card.failsWhen),
      renderRuleZone("mistakes", FORMULA_RULE_LABELS.mistakes, card.commonMistakes)
    ].filter(Boolean).join("");

    const shortcut = hasMeaningfulText(card.examShortcut)
      ? `<footer class="rule-card__shortcut">
<span class="rule-card__shortcut-label">${FORMULA_RULE_LABELS.shortcut}</span>
<p class="rule-card__shortcut-text">${renderSemanticPlainText(card.examShortcut)}</p>
</footer>`
      : "";

    const sourceMeta = Array.isArray(card.anchorIds) && card.anchorIds.length
      ? `<details class="rule-card__source-meta">
<summary class="rule-card__source-summary">Quellenbezug (${card.anchorIds.length})</summary>
<p class="rule-card__source-copy">Mit Vorlesungs-PDFs abgeglichen — Details im Quellen-Tab.</p>
</details>`
      : "";

    if (!zones && !shortcut && !sourceMeta) return "";

    return `<article class="rule-card formula-einsatzgrenzen-block formula-limits-card">
<header class="rule-card__head">
<h4 class="rule-card__title">${titleHtml}</h4>
${subtitleHtml}
${formulaChip}
</header>
${zones ? `<div class="rule-card__zones">${zones}</div>` : ""}
${shortcut}
${sourceMeta}
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

  function renderContent(conceptId, tab, initGraphFn, options = {}) {
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
    const scrollKernidee = Boolean(options.scrollKernidee) || tab === "intuition";

    const tabAvailability = {
      graph: graphConcepts.has(conceptId),
      formeln: hasFormulas(entry) || hasTaskFamilies(conceptId),
      quellen: hasConceptQuellenContent(getConceptProvenance(conceptId)),
      "r-anwendung": Boolean(renderRAnwendungPanel) && hasRBlock(conceptId)
    };

    const resolvedTab = tab === "intuition" ? "theorie" : tab;
    const activeTab = (resolvedTab === "graph" && !tabAvailability.graph)
      || (resolvedTab === "formeln" && !tabAvailability.formeln)
      || (resolvedTab === "quellen" && !tabAvailability.quellen)
      || (resolvedTab === "r-anwendung" && !tabAvailability["r-anwendung"])
      ? "theorie"
      : resolvedTab;

    currentTab = activeTab;
    updateTabButtons(activeTab, tabAvailability);

    if (breadcrumb) {
      breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button> / ${escapeHtml(chapter.cat)} / ${renderMathTitle(chapter.title)}`;
    }

    if (!entry) {
      content.innerHTML = `${buildConceptHeaderHtml(chapter, null, conceptId, { hideSourceChrome: activeTab === "theorie" })}
<div class="section-block"><h3>Inhalt</h3><p>Nutze für dieses Thema die Kapitelverbindungen, den Schnelltest und die Wiederholung, um die Kernlogik im Kurszusammenhang zu sichern.</p></div>`;
      renderMath(content);
      return;
    }

    const lessonIntro = renderLessonIntroCard(entry, chapter?.title, intuitionById[conceptId]);
    const headerHTML = buildConceptHeaderHtml(chapter, entry, conceptId, {
      hideSourceChrome: activeTab === "theorie"
    });

    content.scrollTo({ top: 0, behavior: "smooth" });

    try {
      if (activeTab === "theorie") {
        const warningData = getWarningSystemData(
          entry,
          intuitionById[conceptId],
          {
            ...buildIntuitionFusionOpts(entry, conceptId),
            moduleSlug,
            chapterTitle: chapter.title,
            conceptId
          }
        );
        const mistakesMirror = renderMainFlowMistakesSection(warningData.railWarnings);
        const fehlerChecklist = renderFehlerChecklist(
          warningData.railWarnings.map((w) => ({ title: w.title, body: w.bodyText || w.bodyHtml }))
        );
        const pedagogyTail = [
          renderExamRecognitionBlock(chapter, entry, intuitionById[conceptId]),
          renderMasteryCheckpoint(entry, conceptId, chapter.title),
          renderConfidenceCheckpoint(conceptId),
          renderReviewControls(conceptId),
          renderSourceUsePedagogy()
        ].join("");
        content.innerHTML =
          headerHTML
          + `<div class="panel active theory-tab-panel">${lessonIntro}${warningData.theoryHtml || entry.theorie}${fehlerChecklist}${mistakesMirror}${pedagogyTail}</div>`;
      } else if (activeTab === "graph") {
        content.innerHTML = headerHTML + renderGraphPanel(conceptId);
        ensureGraphPedagogyChrome(conceptId, content, moduleSlug);
        if (initGraphFn) initGraphFn(conceptId);
      } else if (activeTab === "aufgaben") {
        const masteryHtml = renderMastery(conceptId);
        content.innerHTML = headerHTML + renderPracticePanel(entry, conceptId) + masteryHtml;
      } else if (activeTab === "formeln") {
        content.innerHTML = headerHTML + renderFormulaPanel(entry);
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

    if (activeTab === "quellen" && !String(window.__lastRenderError || "").length) {
      initQuellenPanelInteractions(content);
    }

    const nextStepFooter = renderLessonNextStepFooter(activeTab, chapter, entry, {
      tabAvailability,
      chapters,
      conceptId
    });
    if (nextStepFooter && entry && !String(window.__lastRenderError || "").length) {
      const panel = content.querySelector(".panel.active") || content;
      panel.insertAdjacentHTML("beforeend", nextStepFooter);
    }

    renderMath(content);
    if (activeTab === "theorie") {
      const theoryPanel = content.querySelector(".theory-tab-panel");
      if (theoryPanel) renderMath(theoryPanel);
    }
    if (scrollKernidee && activeTab === "theorie") {
      requestAnimationFrame(() => {
        const kernAnchor = content.querySelector("#theory-kernidee-h, .theory-recipe-section--kernidee");
        kernAnchor?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
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
<span class="badge badge--status home-action-sim-badge">Klausurähnliche Übung</span>
</div>`
      : "";

    const startChapter =
      !seenCount && !lastChapter && recommendedStartConceptId
        ? chapters.find((chapter) => chapter.id === recommendedStartConceptId)
        : null;
    const firstVisitCard =
      startChapter && !quickStartCard
        ? `<div class="home-action-card home-action-card--primary" onclick="window.__navigate('${startChapter.id}', { tab: '${recommendedStartTab}' })" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE(`window.__navigate('${startChapter.id}', { tab: '${recommendedStartTab}' })`)}>
<div class="hac-title">Hier starten</div>
<div class="hac-desc">${renderMathTitle(startChapter.title)} — ${recommendedStartTab === "aufgaben" ? "Aufgaben" : "Theorie"}</div>
<span class="badge badge--status home-action-sim-badge">Klausurähnliche Übung</span>
</div>`
        : "";

    const konzeptCheckCardHtml =
      typeof window !== "undefined" && typeof window.__startConceptSchnelltest === "function"
        ? KONCEPT_CHECK_HOME_ACTION_CARD_HTML
        : "";

    html += `<div class="home-action-row">
${quickStartCard || firstVisitCard}
<div class="home-action-card" onclick="window.__showDashboard()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__showDashboard()")}>
<div class="hac-title">Lern-Dashboard</div>
<div class="hac-desc">Fortschritt, schwache Bereiche, Wiederholungen</div>
${pilotDashNote ? `<p class="hac-pilot-note">${pilotDashNote}</p>` : ""}
</div>
<div class="home-action-card" onclick="window.__startExam()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__startExam()")}>
<div class="hac-title">Schnelltest</div>
<div class="hac-desc">20 Minuten, gemischte Konzepte</div>
<span class="badge badge--status home-action-sim-badge">Klausurähnliche Übung</span>
</div>
${showInterleavedExamCard && typeof window !== "undefined" && typeof window.__startInterleavedExam === "function" ? `
<div class="home-action-card" onclick="window.__startInterleavedExam()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__startInterleavedExam()")}>
<div class="hac-title">Gemischter Schnelltest</div>
<div class="hac-desc">Wie Schnelltest — Themenwechsel im Modul (Pilot)</div>
<span class="badge badge--status home-action-sim-badge">Klausurähnliche Übung</span>
</div>` : ""}
${konzeptCheckCardHtml}${extraHomeActionCardsHtml}
<div class="home-action-card" onclick="window.__showSRSReview()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__showSRSReview()")}>
<div class="hac-title">Wiederholung${due.length > 0 ? ` (${due.length})` : ""}</div>
<div class="hac-desc">Spaced Repetition für heute</div>
</div>
${typeof window !== "undefined" && typeof window.__showFullExamSelect === "function" ? `
<div class="home-action-card" onclick="window.__showFullExamSelect()" tabindex="0" role="button" ${HOME_ACTION_ACTIVATE("window.__showFullExamSelect()")}>
<div class="hac-title">Probeklausuren</div>
<div class="hac-desc">${renderDecodedText(fullExamHomeDescription)}</div>
<span class="badge badge--status home-action-sim-badge">Klausurähnliche Übung</span>
</div>
` : ""}
</div>`;

    if (!konzeptCheckCardHtml && !extraHomeActionCardsHtml) {
      html += `<p class="home-konzept-check-note" role="note">${KONCEPT_CHECK_SCOPE_NOTE}</p>`;
    }

    if (weakChapter) {
      html += `<p class="home-weak-teaser">Schwacher Bereich: <button type="button" class="link-btn" onclick="window.__navigate('${weakChapter.id}')">${renderMathTitle(weakChapter.title)}</button> — <button type="button" class="link-btn" onclick="window.__showDashboard()">Dashboard →</button></p>`;
    }

    if (lastChapter) {
      const continuePos = getCategoryPosition(lastChapter.id);
      const continueMeta = continuePos
        ? buildLessonCardMetaLine(lastChapter.id, {
            category: continuePos.category,
            index: continuePos.index,
            total: continuePos.total,
            includeCategory: true
          })
        : buildLessonCardMetaLine(lastChapter.id, { includeCategory: true, category: lastChapter.cat });
      html += `<div class="home-continue-card module-lesson-card module-lesson-card--continue" onclick="window.__navigate('${lastChapter.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${lastChapter.id}')">
<div class="module-lesson-card__body">
<span class="badge badge--meta hcc-label">Weitermachen</span>
<span class="module-lesson-card__title hcc-title">${renderMathTitle(lastChapter.title)}</span>
<p class="badge badge--meta module-lesson-card__meta">${continueMeta}</p>
</div>
<span class="badge badge--action module-lesson-card__action" aria-hidden="true">Weiterlernen →</span>
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
${recent.map((chapter) => {
        const pos = getCategoryPosition(chapter.id);
        const meta = pos
          ? buildLessonCardMetaLine(chapter.id, {
              category: pos.category,
              index: pos.index,
              total: pos.total,
              includeCategory: true
            })
          : buildLessonCardMetaLine(chapter.id, { includeCategory: true, category: chapter.cat });
        return `<div class="home-mini-card module-lesson-card module-lesson-card--mini" ${LESSON_CARD_ACTIVATE(chapter.id)}>
<h3 class="module-lesson-card__title hc-title">${renderMathTitle(chapter.title)}</h3>
<p class="badge badge--meta module-lesson-card__meta">${meta}</p>
</div>`;
      }).join("")}
</div>
</div>`;
    }

    Object.entries(categories).forEach(([category, items]) => {
      html += `<div class="section-sep">${category}</div><div class="home-grid">`;
      items.forEach((item, localIdx) => {
        html += buildHomeLessonCardHtml(item, {
          category,
          localIdx,
          total: items.length,
          progress,
          lastId,
          includeCategory: false
        });
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
