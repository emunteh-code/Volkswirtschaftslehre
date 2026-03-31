import { FILTERS, PUBLIC_MODULES, getModuleBySlug } from "./modules.js";
import { getModuleContent } from "./module-content.js";
import { estimateGeneratedChapterCount } from "./generated-portal/dataFactory.js";
import { mountRLabs } from "./r-lab.js";

const THEME_KEY = "lernportal_theme_v1";

function hexToSoft(hex, alpha = 0.14) {
  const normalized = hex.replace("#", "");
  const value = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized;

  const r = Number.parseInt(value.slice(0, 2), 16);
  const g = Number.parseInt(value.slice(2, 4), 16);
  const b = Number.parseInt(value.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function inferModuleSlug() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  if (!parts.length) return "";
  const last = parts[parts.length - 1];
  return last.endsWith(".html") ? parts[parts.length - 2] || "" : last;
}

function setTheme(theme) {
  document.body.classList.remove("theme-light", "theme-dark");
  document.body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  localStorage.setItem(THEME_KEY, theme);

  const button = document.getElementById("themeToggle");
  if (button) {
    button.textContent = theme === "dark" ? "Hell" : "Dunkel";
  }
}

function initTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(storedTheme || (preferredDark ? "dark" : "light"));

  const button = document.getElementById("themeToggle");
  if (button) {
    button.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
      setTheme(nextTheme);
    });
  }
}

function createStatCard(label, value) {
  return `
    <article class="stat-card">
      <span class="fact-label">${label}</span>
      <strong class="stat-value">${value}</strong>
    </article>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function getFilterLabel(filterId) {
  return FILTERS.find((filter) => filter.id === filterId)?.label || filterId;
}

function readStoredJson(key) {
  if (!key) return {};
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch {
    return {};
  }
}

function writeStoredJson(key, value) {
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(value));
}

function buildDocumentStudyUnits(module, content = getModuleContent(module.slug)) {
  const roadmapUnits = (content?.roadmap || []).map((item, index) => ({
    id: `roadmap_${index + 1}`,
    title: item.title,
    section: "roadmap"
  }));

  const practiceUnits = (content?.practice || []).map((item, index) => ({
    id: `practice_${index + 1}`,
    title: item.title,
    section: "practice"
  }));

  return [...roadmapUnits, ...practiceUnits];
}

function getPortalState(module) {
  if (module.portalState) return module.portalState;

  const content = getModuleContent(module.slug);
  if (!content) return null;

  return {
    progressKey: `${module.slug}_progress_v1`,
    srsKey: `${module.slug}_srs_v1`,
    lastKey: `${module.slug}_last_v1`,
    chapterCount: estimateGeneratedChapterCount(module, content)
  };
}

function readVisitState(module) {
  const state = getPortalState(module);
  return state?.lastKey ? readStoredJson(state.lastKey) : {};
}

function touchModuleVisit(module, patch = {}) {
  const state = getPortalState(module);
  if (!state?.lastKey) return;

  const current = readStoredJson(state.lastKey);
  writeStoredJson(state.lastKey, {
    ...current,
    ...patch,
    visitedAt: Date.now()
  });
}

function formatVisitDate(timestamp) {
  if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
    return "Noch kein Lernstand gespeichert";
  }

  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(timestamp);
}

function getModuleSnapshot(module) {
  const state = getPortalState(module);
  if (!state) {
    return {
      seen: 0,
      total: 0,
      due: 0,
      percent: 0,
      started: false
    };
  }

  const progress = readStoredJson(state.progressKey);
  const srs = readStoredJson(state.srsKey);
  const total = state.chapterCount || 0;
  const seen = Object.keys(progress).length;
  const due = Object.values(srs).filter((entry) => entry && typeof entry.due === "number" && entry.due <= Date.now()).length;
  const percent = total ? Math.round((seen / total) * 100) : 0;

  return {
    seen,
    total,
    due,
    percent,
    started: seen > 0
  };
}

function getModuleHighlights(module) {
  const content = getModuleContent(module.slug);
  const highlights = [];

  highlights.push(getStageLabel(module));

  if (content) {
    highlights.push("Kursnah");
  }

  if (module.rLab) {
    highlights.push("R-Lab");
  }

  if (content?.practice?.length) {
    highlights.push("Aufgabenbasis");
  }

  if (module.type === "text_doctrinal") {
    highlights.push("Fallschema");
  } else if (module.type === "quantitative_coding") {
    highlights.push("Code + Theorie");
  } else if (module.type === "quantitative") {
    highlights.push("Graphen");
  } else {
    highlights.push("Vergleichsmodus");
  }

  return highlights;
}

function getStageLabel(module) {
  if (module.status === "live" || getModuleContent(module.slug)) return "Live-Portal";
  return "Portal in Aufbau";
}

function getDisplayStageLabel(module) {
  return getStageLabel(module) === "Live-Portal" ? "Aktiv" : "In Vorbereitung";
}

function renderSourceList(sources = []) {
  return "";
}

const LANDING_DEGREE = "B.Sc. Volkswirtschaftslehre";
const LANDING_UNIVERSITY = "Georg-August-Universitaet Goettingen";

const LANDING_STORIES = {
  mikro1: {
    description: "Verstehe Haushalte, Unternehmen und Maerkte Schritt fuer Schritt mit sauberer Graphik, klaren Rechenwegen und klausurnahen Aufgaben.",
    tile: "Haushaltswahl, Unternehmen und Marktlogik",
    line: "Graphen, Aufgaben und Exam-Drills fuer die Mikro-Basis."
  },
  mikro2: {
    description: "Lerne Spieltheorie, Oligopole und Marktversagen in einer dichten, logikorientierten Lernspur mit interaktiven Nash-Gleichgewichten.",
    tile: "Strategie, Gleichgewicht und Marktversagen",
    line: "Fortgeschrittene Mikro mit Graphen, Logikketten und Drills."
  },
  makro2: {
    description: "Arbeite offene Makrooekonomik, Wachstum und Wirtschaftspolitik in einem Lernfluss durch, der Modelle, Intuition und Aufgaben sichtbar zusammenhaelt.",
    tile: "Offene Makro, Wachstum und Policy",
    line: "Globale Makrologik mit Visuals, Theorie und Pruefungsmodus."
  },
  makro1: {
    description: "Lerne Kennzahlen, Guetermarkt, IS-LM, Arbeitsmarkt und Phillipskurve als zusammenhaengende Makrospur mit echten Visuals und Exam-Routine.",
    tile: "BIP, Guetermarkt, IS-LM und Arbeitsmarkt",
    line: "Makrofundament mit Diagrammen, Richtungssinn und Klausurtraining."
  },
  statistik: {
    description: "Beschreibe, teste und interpretiere Daten mit Visualisierungen, Aufgaben und R-Praxis, die direkt auf Statistik-Tutorien und Uebungen aufbauen.",
    tile: "Daten, Tests und Verteilungen mit R",
    line: "Statistik mit Visuals, Datensaetzen und sauberer Output-Deutung."
  },
  oekonometrie: {
    description: "Baue OLS, Inferenz und Diagnostik so auf, dass Theorie, Regressionsoutput und R-Workflow in derselben Lernspur zusammenlaufen.",
    tile: "OLS, Inferenz, Diagnostik und R",
    line: "Oekonometrie mit Modelllogik, Outputlesen und Probeklausuren."
  },
  mathematik: {
    description: "Gehe von Algebra ueber Analysis und lineare Algebra bis zu Optimierung und Integralrechnung mit Rechendichte, Visuals und numerischer Praxis.",
    tile: "Algebra, Analysis und Optimierung",
    line: "Mathematik mit Rechenroutinen, Geometrie und numerischem Denken."
  },
  finanzwirtschaft: {
    description: "Lerne Zahlungsstroeme, Investitionsrechnung, Unsicherheit und Kapitalstruktur so, dass aus Formeln echte finanzwirtschaftliche Urteile werden.",
    tile: "Investition, Unsicherheit und Kapitalstruktur",
    line: "Finanzwirtschaft mit Entscheidungslogik, Zeitwert und Leverage."
  },
  "internationale-wirtschaftsbeziehungen": {
    description: "Arbeite Handel, Handelspolitik und offene Makrooekonomik vom Ricardo-Modell bis zu Wechselkursen, Overshooting und Trilemma durch.",
    tile: "Handel, Politik und Wechselkurse",
    line: "Globale VWL mit Modelllogik, Politikfolgen und offener Makro."
  },
  jahresabschluss: {
    description: "Uebe Bilanz, Bewertung und Abschlusslogik mit kontierter Praxis, klarer Struktur und exam-tauglicher Sicherheit bei Ausweis und Buchung.",
    tile: "Bilanz, Bewertung und Abschluss",
    line: "Accounting mit Buchungslogik, Bewertung und Abschlussroutine."
  },
  recht: {
    description: "Wiederhole Definitionen, Anspruchslogik und Faelle so, dass juristische Begriffe, Schemata und Subsumtion sofort abrufbar werden.",
    tile: "Definitionen, Schemata und Faelle",
    line: "Recht mit klaren Anspruchspfaden und klausurnaher Fallarbeit."
  },
  r: {
    description: "Trainiere R direkt an Daten, Matrizen, Optimierung und Modellen, damit Syntax, Debugging und Interpretation im selben Arbeitsfluss sitzen.",
    tile: "R-Praxis fuer Daten, Modelle und Visuals",
    line: "R mit Editorlogik, Outputkontrolle und numerischer Anwendung."
  },
  "politisches-system-brd": {
    description: "Arbeite Institutionen, Prozesse und Akteure des politischen Systems der BRD in einer klaren, textstarken Lernspur durch.",
    tile: "Institutionen, Prozesse und politische Ordnung",
    line: "BRD-System mit klaren Strukturen, Vergleichslogik und Klausurfragen."
  }
};

function svgToDataUri(svg) {
  return `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}")`;
}

function buildLandingArtworkSvg(slug) {
  switch (slug) {
    case "mikro1":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <path d="M84 430H640" stroke="#F7F2EA" stroke-opacity=".42" stroke-width="2.5"/>
        <path d="M98 432V112" stroke="#F7F2EA" stroke-opacity=".42" stroke-width="2.5"/>
        <path d="M110 412L540 134" stroke="#F7F2EA" stroke-opacity=".54" stroke-width="3"/>
        <path d="M104 400C182 312 250 246 396 206C492 180 562 166 632 138" stroke="#F7F2EA" stroke-opacity=".86" stroke-width="4"/>
        <path d="M120 394C206 360 272 280 344 208C404 148 492 120 618 104" stroke="#F7F2EA" stroke-opacity=".38" stroke-width="3"/>
        <circle cx="394" cy="206" r="10" fill="#F7F2EA" fill-opacity=".18"/>
      </svg>`;
    case "mikro2":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <path d="M100 400L250 150L400 400Z" stroke="#F7F2EA" stroke-opacity=".4" stroke-width="3"/>
        <circle cx="250" cy="150" r="12" fill="#F7F2EA" fill-opacity=".2"/>
        <path d="M120 350C200 300 300 300 380 350" stroke="#F7F2EA" stroke-opacity=".7" stroke-width="4"/>
        <path d="M80 420H640" stroke="#F7F2EA" stroke-opacity=".3" stroke-width="2"/>
      </svg>`;
    case "makro2":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <circle cx="500" cy="198" r="126" stroke="#F7F2EA" stroke-opacity=".34" stroke-width="3"/>
        <path d="M388 198H612" stroke="#F7F2EA" stroke-opacity=".3" stroke-width="2"/>
        <path d="M500 74C548 118 572 158 572 198C572 238 548 278 500 322" stroke="#F7F2EA" stroke-opacity=".3" stroke-width="2"/>
        <path d="M420 132C478 158 538 184 612 196" stroke="#F7F2EA" stroke-opacity=".82" stroke-width="3.5"/>
        <path d="M406 274C478 248 534 224 610 214" stroke="#F7F2EA" stroke-opacity=".62" stroke-width="3"/>
        <path d="M118 374C178 318 240 280 336 252C410 230 494 226 618 248" stroke="#F7F2EA" stroke-opacity=".76" stroke-width="4"/>
        <path d="M118 420C204 374 278 342 370 328C454 314 522 322 618 356" stroke="#F7F2EA" stroke-opacity=".34" stroke-width="3"/>
      </svg>`;
    case "makro1":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <path d="M92 422H640" stroke="#F7F2EA" stroke-opacity=".38" stroke-width="2.5"/>
        <path d="M106 432V112" stroke="#F7F2EA" stroke-opacity=".38" stroke-width="2.5"/>
        <path d="M154 168C252 196 326 242 430 328C480 370 538 394 616 412" stroke="#F7F2EA" stroke-opacity=".82" stroke-width="4"/>
        <path d="M148 398C232 292 314 228 436 176C500 150 554 134 620 124" stroke="#F7F2EA" stroke-opacity=".68" stroke-width="4"/>
        <circle cx="422" cy="320" r="9" fill="#F7F2EA" fill-opacity=".18"/>
        <path d="M130 106H614" stroke="#F7F2EA" stroke-opacity=".12" stroke-width="2" stroke-dasharray="8 10"/>
      </svg>`;
    case "statistik":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <path d="M102 420H628" stroke="#F7F2EA" stroke-opacity=".42" stroke-width="2.5"/>
        <path d="M114 432V118" stroke="#F7F2EA" stroke-opacity=".42" stroke-width="2.5"/>
        <path d="M126 382C180 336 232 262 294 220C340 188 394 186 438 222C494 266 536 340 612 390" stroke="#F7F2EA" stroke-opacity=".84" stroke-width="4"/>
        <g fill="#F7F2EA" fill-opacity=".18">
          <circle cx="184" cy="334" r="8"/><circle cx="224" cy="308" r="8"/><circle cx="248" cy="282" r="8"/>
          <circle cx="312" cy="246" r="8"/><circle cx="344" cy="232" r="8"/><circle cx="408" cy="236" r="8"/>
          <circle cx="458" cy="270" r="8"/><circle cx="486" cy="298" r="8"/><circle cx="524" cy="344" r="8"/>
        </g>
        <path d="M148 164H600M148 228H600M148 292H600M148 356H600" stroke="#F7F2EA" stroke-opacity=".1" stroke-width="2"/>
      </svg>`;
    case "oekonometrie":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <path d="M106 420H628" stroke="#F7F2EA" stroke-opacity=".42" stroke-width="2.5"/>
        <path d="M118 432V118" stroke="#F7F2EA" stroke-opacity=".42" stroke-width="2.5"/>
        <path d="M160 386L552 178" stroke="#F7F2EA" stroke-opacity=".84" stroke-width="4"/>
        <g fill="#F7F2EA" fill-opacity=".18">
          <circle cx="176" cy="362" r="8"/><circle cx="212" cy="336" r="8"/><circle cx="246" cy="314" r="8"/>
          <circle cx="288" cy="282" r="8"/><circle cx="334" cy="252" r="8"/><circle cx="374" cy="230" r="8"/>
          <circle cx="414" cy="218" r="8"/><circle cx="460" cy="198" r="8"/><circle cx="506" cy="182" r="8"/>
        </g>
        <path d="M486 86H618V214H486" stroke="#F7F2EA" stroke-opacity=".34" stroke-width="3"/>
        <path d="M514 112H590M514 146H590M514 180H566" stroke="#F7F2EA" stroke-opacity=".62" stroke-width="3"/>
      </svg>`;
    case "mathematik":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <circle cx="486" cy="190" r="116" stroke="#F7F2EA" stroke-opacity=".34" stroke-width="3"/>
        <path d="M164 380L290 126L430 372Z" stroke="#F7F2EA" stroke-opacity=".78" stroke-width="4"/>
        <path d="M116 318C176 318 206 196 260 196C316 196 334 324 386 324C438 324 470 164 534 164C578 164 604 236 624 284" stroke="#F7F2EA" stroke-opacity=".58" stroke-width="3.5"/>
        <path d="M90 430H640" stroke="#F7F2EA" stroke-opacity=".2" stroke-width="2.5"/>
      </svg>`;
    case "finanzwirtschaft":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <path d="M120 370H616" stroke="#F7F2EA" stroke-opacity=".3" stroke-width="2.5"/>
        <path d="M140 370V232M248 370V198M356 370V280M464 370V148M572 370V222" stroke="#F7F2EA" stroke-opacity=".5" stroke-width="3"/>
        <path d="M140 232H200M248 198H308M356 280H416M464 148H524M572 222H616" stroke="#F7F2EA" stroke-opacity=".8" stroke-width="4"/>
        <path d="M132 118C192 144 252 168 324 194C394 220 458 226 586 196" stroke="#F7F2EA" stroke-opacity=".52" stroke-width="3.5"/>
        <path d="M560 184L596 198L572 226" stroke="#F7F2EA" stroke-opacity=".52" stroke-width="3"/>
      </svg>`;
    case "internationale-wirtschaftsbeziehungen":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <circle cx="352" cy="226" r="148" stroke="#F7F2EA" stroke-opacity=".28" stroke-width="3"/>
        <path d="M204 226H500" stroke="#F7F2EA" stroke-opacity=".24" stroke-width="2"/>
        <path d="M352 78C404 130 430 180 430 226C430 272 404 322 352 374" stroke="#F7F2EA" stroke-opacity=".24" stroke-width="2"/>
        <path d="M150 324C228 288 278 206 348 156C418 106 504 96 620 124" stroke="#F7F2EA" stroke-opacity=".78" stroke-width="4"/>
        <path d="M156 164C230 188 308 286 380 316C462 350 542 344 620 312" stroke="#F7F2EA" stroke-opacity=".44" stroke-width="3.5"/>
        <circle cx="150" cy="324" r="10" fill="#F7F2EA" fill-opacity=".14"/>
        <circle cx="620" cy="124" r="10" fill="#F7F2EA" fill-opacity=".14"/>
      </svg>`;
    case "jahresabschluss":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <rect x="126" y="126" width="460" height="270" rx="24" stroke="#F7F2EA" stroke-opacity=".3" stroke-width="3"/>
        <path d="M278 126V396M430 126V396M126 206H586M126 286H586" stroke="#F7F2EA" stroke-opacity=".2" stroke-width="2.5"/>
        <path d="M160 170H244M312 170H396M464 170H548M160 248H244M312 248H396M464 248H548M160 328H244M312 328H396M464 328H548" stroke="#F7F2EA" stroke-opacity=".66" stroke-width="4"/>
      </svg>`;
    case "recht":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <path d="M176 390H546" stroke="#F7F2EA" stroke-opacity=".32" stroke-width="3"/>
        <path d="M216 390V198M300 390V170M384 390V170M468 390V198" stroke="#F7F2EA" stroke-opacity=".38" stroke-width="4"/>
        <path d="M182 198H502" stroke="#F7F2EA" stroke-opacity=".72" stroke-width="5"/>
        <path d="M240 140C280 102 438 102 478 140" stroke="#F7F2EA" stroke-opacity=".72" stroke-width="5"/>
        <path d="M548 170L620 144L596 248" stroke="#F7F2EA" stroke-opacity=".48" stroke-width="4"/>
        <path d="M596 248H660" stroke="#F7F2EA" stroke-opacity=".28" stroke-width="3"/>
      </svg>`;
    case "r":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <rect x="118" y="110" width="484" height="296" rx="28" stroke="#F7F2EA" stroke-opacity=".32" stroke-width="3"/>
        <path d="M118 160H602" stroke="#F7F2EA" stroke-opacity=".18" stroke-width="2.5"/>
        <circle cx="158" cy="136" r="7" fill="#F7F2EA" fill-opacity=".22"/>
        <circle cx="184" cy="136" r="7" fill="#F7F2EA" fill-opacity=".16"/>
        <circle cx="210" cy="136" r="7" fill="#F7F2EA" fill-opacity=".12"/>
        <path d="M164 224H300M164 266H360M164 308H286M164 350H414" stroke="#F7F2EA" stroke-opacity=".72" stroke-width="4"/>
        <path d="M378 212L536 212M402 254L560 254M426 296L570 296M390 338L520 338" stroke="#F7F2EA" stroke-opacity=".38" stroke-width="3.5"/>
        <path d="M146 224L158 234L182 208" stroke="#F7F2EA" stroke-opacity=".76" stroke-width="3"/>
      </svg>`;
    case "politisches-system-brd":
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <path d="M176 368C220 262 302 202 360 202C418 202 500 262 544 368" stroke="#F7F2EA" stroke-opacity=".72" stroke-width="4"/>
        <g fill="#F7F2EA" fill-opacity=".16">
          <circle cx="236" cy="324" r="10"/><circle cx="274" cy="290" r="10"/><circle cx="320" cy="266" r="10"/>
          <circle cx="360" cy="258" r="10"/><circle cx="402" cy="266" r="10"/><circle cx="446" cy="290" r="10"/><circle cx="484" cy="324" r="10"/>
        </g>
        <path d="M194 390H528" stroke="#F7F2EA" stroke-opacity=".28" stroke-width="3"/>
        <path d="M292 170H428M314 144H406M330 118H390" stroke="#F7F2EA" stroke-opacity=".48" stroke-width="4"/>
      </svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" fill="none">
        <path d="M120 390H612" stroke="#F7F2EA" stroke-opacity=".28" stroke-width="3"/>
        <path d="M142 344C222 276 290 214 382 188C452 168 520 174 600 220" stroke="#F7F2EA" stroke-opacity=".76" stroke-width="4"/>
        <path d="M162 172H548" stroke="#F7F2EA" stroke-opacity=".12" stroke-width="2"/>
      </svg>`;
  }
}

function buildLandingBackdrop(module) {
  return [
    `radial-gradient(circle at 16% 18%, ${hexToSoft(module.accent, 0.34)}, rgba(255,255,255,0) 34%)`,
    `radial-gradient(circle at 84% 12%, ${hexToSoft(module.accent, 0.16)}, rgba(255,255,255,0) 38%)`,
    "linear-gradient(135deg, rgba(10, 12, 15, 0.84) 0%, rgba(14, 17, 21, 0.96) 60%, rgba(19, 22, 27, 1) 100%)",
    svgToDataUri(buildLandingArtworkSvg(module.slug))
  ].join(",");
}

function buildLandingArt(module) {
  return [
    `radial-gradient(circle at 20% 24%, ${hexToSoft(module.accent, 0.28)}, rgba(255,255,255,0) 34%)`,
    `linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)`,
    "linear-gradient(145deg, rgba(11, 13, 17, 0.48) 0%, rgba(15, 18, 24, 0.72) 100%)",
    svgToDataUri(buildLandingArtworkSvg(module.slug))
  ].join(",");
}

function buildLandingTileVisual(module) {
  return [
    `radial-gradient(circle at 18% 16%, ${hexToSoft(module.accent, 0.34)}, rgba(255,255,255,0) 34%)`,
    `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)`,
    "linear-gradient(155deg, rgba(12, 14, 18, 0.96) 0%, rgba(17, 20, 25, 1) 100%)",
    svgToDataUri(buildLandingArtworkSvg(module.slug))
  ].join(",");
}

function getLandingStory(module) {
  return LANDING_STORIES[module.slug] || {
    description: module.summary,
    tile: module.summary,
    line: "Theorie, Aufgaben und Wiederholung im selben Lernfluss."
  };
}

function formatShortVisitDate(timestamp) {
  if (typeof timestamp !== "number" || Number.isNaN(timestamp)) return "";
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "short"
  }).format(timestamp);
}

function getLandingModeLabel(module) {
  if (module.type === "quantitative_coding") return "Mit R-Lab";
  if (module.type === "text_doctrinal") return "Text und Falltraining";
  if (module.type === "quantitative") return "Modelle und Visuals";
  return "Theorie und Anwendung";
}

function getLandingChapterCount(module) {
  const content = getModuleContent(module.slug);
  const state = getPortalState(module);
  if (state?.chapterCount) return state.chapterCount;
  return (content?.roadmap?.length || 0) + (content?.practice?.length || 0) + (module.rLab ? 1 : 0);
}

function pickInitialLandingModule() {
  const withVisits = PUBLIC_MODULES
    .map((module) => ({ module, visit: readVisitState(module) }))
    .filter(({ visit }) => typeof visit.visitedAt === "number");

  if (withVisits.length) {
    return withVisits.sort((left, right) => right.visit.visitedAt - left.visit.visitedAt)[0].module;
  }

  const withProgress = PUBLIC_MODULES
    .map((module) => ({ module, snapshot: getModuleSnapshot(module) }))
    .filter(({ snapshot }) => snapshot.started);

  if (withProgress.length) {
    return withProgress.sort((left, right) => right.snapshot.percent - left.snapshot.percent)[0].module;
  }

  return PUBLIC_MODULES[0];
}

function renderLandingPage() {
  const shelfNode = document.getElementById("moduleShelf");
  const countNode = document.getElementById("moduleBrowserCount");
  const overlineNode = document.getElementById("stageOverline");
  const titleNode = document.getElementById("stageTitle");
  const descriptionNode = document.getElementById("stageDescription");
  const moduleLineNode = document.getElementById("stageModuleLine");
  const progressNode = document.getElementById("stageProgress");
  const progressTextNode = document.getElementById("stageProgressText");
  const progressPercentNode = document.getElementById("stageProgressPercent");
  const progressFillNode = document.getElementById("stageProgressFill");
  const footnoteNode = document.getElementById("stageFootnote");
  const primaryAction = document.getElementById("stagePrimaryAction");
  const backdropLayers = [
    document.getElementById("stageBackdropA"),
    document.getElementById("stageBackdropB")
  ];
  const artLayers = [
    document.getElementById("stageArtA"),
    document.getElementById("stageArtB")
  ];

  if (
    !shelfNode
    || !countNode
    || !overlineNode
    || !titleNode
    || !descriptionNode
    || !moduleLineNode
    || !progressNode
    || !progressTextNode
    || !progressPercentNode
    || !progressFillNode
    || !footnoteNode
    || !primaryAction
    || backdropLayers.some((layer) => !layer)
    || artLayers.some((layer) => !layer)
  ) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  let activeSlug = "";
  let activeBackdropIndex = 0;
  let activeArtIndex = 0;

  function buildModuleLine(module, snapshot) {
    const story = getLandingStory(module);
    const chapterCount = getLandingChapterCount(module);
    const segments = [
      story.line,
      chapterCount ? `${chapterCount} Kapitel` : "",
      getLandingModeLabel(module)
    ].filter(Boolean);

    return segments.map((segment) => `<span>${segment}</span>`).join("");
  }

  function updateVisualLayers(module) {
    document.documentElement.style.setProperty("--landing-accent", module.accent);
    document.documentElement.style.setProperty("--landing-accent-soft", hexToSoft(module.accent, 0.22));
    document.documentElement.style.setProperty("--landing-accent-faint", hexToSoft(module.accent, 0.08));

    const nextBackdropIndex = reducedMotion ? activeBackdropIndex : (activeBackdropIndex === 0 ? 1 : 0);
    const nextArtIndex = reducedMotion ? activeArtIndex : (activeArtIndex === 0 ? 1 : 0);

    backdropLayers[nextBackdropIndex].style.backgroundImage = buildLandingBackdrop(module);
    artLayers[nextArtIndex].style.backgroundImage = buildLandingArt(module);

    backdropLayers.forEach((layer, index) => layer.classList.toggle("is-active", index === nextBackdropIndex));
    artLayers.forEach((layer, index) => layer.classList.toggle("is-active", index === nextArtIndex));

    activeBackdropIndex = nextBackdropIndex;
    activeArtIndex = nextArtIndex;
  }

  function updateHero(module) {
    const story = getLandingStory(module);
    const snapshot = getModuleSnapshot(module);
    const visitState = readVisitState(module);
    const visitLabel = formatShortVisitDate(visitState.visitedAt);

    overlineNode.textContent = snapshot.started ? "Weiterlernen" : "Ausgewaehltes Modul";
    titleNode.textContent = module.title;
    descriptionNode.textContent = story.description;
    moduleLineNode.innerHTML = buildModuleLine(module, snapshot);

    if (snapshot.started && snapshot.total) {
      progressNode.hidden = false;
      progressTextNode.textContent = `${snapshot.seen} von ${snapshot.total} Lernbausteinen geoeffnet`;
      progressPercentNode.textContent = `${snapshot.percent}%`;
      progressFillNode.style.width = `${snapshot.percent}%`;
      footnoteNode.textContent = snapshot.due > 0
        ? `${snapshot.due} Wiederholungen warten auf dich.${visitLabel ? ` Zuletzt aktiv ${visitLabel}.` : ""}`
        : `${visitLabel ? `Zuletzt aktiv ${visitLabel}. ` : ""}Der Kurs oeffnet wieder an deinem letzten Lernstand.`;
    } else {
      const chapterCount = getLandingChapterCount(module);
      progressNode.hidden = true;
      progressFillNode.style.width = "0%";
      footnoteNode.textContent = chapterCount
        ? `${chapterCount} Lernbausteine stehen bereit. Starte mit Theorie, Aufgaben und Wiederholung im selben Arbeitsfluss.`
        : "Der Kurs ist bereit zum Einstieg.";
    }

    primaryAction.href = module.href;
    primaryAction.textContent = snapshot.started ? "Weiterlernen" : "Modul oeffnen";
    primaryAction.setAttribute("aria-label", `${snapshot.started ? "Weiterlernen in" : "Modul oeffnen:"} ${module.title}`);

    updateVisualLayers(module);
  }

  function syncTileState() {
    const tiles = shelfNode.querySelectorAll(".landing-module-tile");
    tiles.forEach((tile) => {
      const isActive = tile.dataset.slug === activeSlug;
      tile.classList.toggle("is-active", isActive);
      tile.setAttribute("aria-selected", String(isActive));
    });
    shelfNode.classList.toggle("has-active", Boolean(activeSlug));
  }

  function activateModule(slug, { scrollIntoView = false } = {}) {
    if (!slug || activeSlug === slug) return;
    const module = getModuleBySlug(slug);
    if (!module) return;

    activeSlug = slug;
    syncTileState();
    updateHero(module);

    if (scrollIntoView) {
      const tile = shelfNode.querySelector(`[data-slug="${slug}"]`);
      tile?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }

  function buildTileMarkup(module) {
    const snapshot = getModuleSnapshot(module);
    const story = getLandingStory(module);
    const metaParts = [
      getLandingModeLabel(module),
      snapshot.started ? `${snapshot.percent}% abgeschlossen` : "Bereit zum Einstieg"
    ];

    return `
      <button
        class="landing-module-tile"
        type="button"
        role="option"
        aria-selected="false"
        data-slug="${module.slug}"
      >
        <span class="landing-module-tile-media" aria-hidden="true"></span>
        <span class="landing-module-tile-scrim" aria-hidden="true"></span>
        <span class="landing-module-tile-copy">
          <span class="landing-tile-kicker">${getFilterLabel(module.type)}</span>
          <strong class="landing-tile-title">${module.shortTitle}</strong>
          <span class="landing-tile-description">${story.tile}</span>
          <span class="landing-tile-meta">
            ${metaParts.map((part) => `<span>${part}</span>`).join("")}
          </span>
        </span>
      </button>
    `;
  }

  function bindTileInteractions() {
    const tiles = Array.from(shelfNode.querySelectorAll(".landing-module-tile"));

    tiles.forEach((tile, index) => {
      const slug = tile.dataset.slug;
      const module = getModuleBySlug(slug);
      const media = tile.querySelector(".landing-module-tile-media");
      if (module && media) {
        media.style.backgroundImage = buildLandingTileVisual(module);
      }

      if (finePointer) {
        tile.addEventListener("pointerenter", () => activateModule(slug));
      }

      tile.addEventListener("focus", () => activateModule(slug));

      tile.addEventListener("click", () => {
        if (module && finePointer) {
          window.location.href = module.href;
          return;
        }

        if (activeSlug === slug && module) {
          window.location.href = module.href;
          return;
        }
        activateModule(slug, { scrollIntoView: true });
      });

      tile.addEventListener("keydown", (event) => {
        const horizontalKeys = ["ArrowRight", "ArrowLeft"];
        const verticalKeys = ["ArrowDown", "ArrowUp"];
        if (horizontalKeys.includes(event.key) || verticalKeys.includes(event.key)) {
          event.preventDefault();
          const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
          const nextIndex = (index + direction + tiles.length) % tiles.length;
          tiles[nextIndex].focus();
          return;
        }

        if (event.key === "Home") {
          event.preventDefault();
          tiles[0].focus();
          return;
        }

        if (event.key === "End") {
          event.preventDefault();
          tiles[tiles.length - 1].focus();
        }
      });
    });
  }

  const startedCount = PUBLIC_MODULES.filter((module) => getModuleSnapshot(module).started).length;
  countNode.textContent = `${PUBLIC_MODULES.length} Kurse${startedCount ? ` · ${startedCount} begonnen` : ""}`;

  shelfNode.innerHTML = PUBLIC_MODULES.map(buildTileMarkup).join("");
  bindTileInteractions();

  const initialModule = pickInitialLandingModule();
  if (initialModule) {
    activeSlug = initialModule.slug;
    syncTileState();
    updateHero(initialModule);
  }
}

function buildModuleModes(module) {
  const modeMap = {
    quantitative: [
      "Theorie in kompakten Schrittketten statt langer Bloecke",
      "Grafiken und visuelle Intuition fuer Rechen- und Modelllogik",
      "Aufgaben- und Klausurmodus streng aus Uebungen, Tutorien und Altklausuren"
    ],
    quantitative_coding: [
      "Theorie und Rechenwege werden mit R-nahem Workflow verbunden",
      "R-Lab fuer Syntax, Modellschritte, Debugging und Ergebnisinterpretation",
      "Graphen, Tests und Datensichten werden direkt mit Coding-Aufgaben verzahnt"
    ],
    text_doctrinal: [
      "Definitionen, Tatbestandsmerkmale und Ausnahmen in Pruefungsschemata",
      "Kurzfaelle statt rein graphischer Visualisierung",
      "Subsumtions- und Argumentationspfade fuer klausurnahe Anwendung"
    ],
    mixed: [
      "Theorie in kompakten Lernpfaden mit Kontext, Formel- oder Begriffsboxen",
      "Vergleichstabellen und strukturierte Anwendungen statt eindimensionaler Slides",
      "Klausurtraining mit problemorientierten Aufgaben und Entscheidungslogik"
    ]
  };

  return (modeMap[module.type] || modeMap.mixed).map((text, index) => ({
    title: `Lernmodus ${index + 1}`,
    body: text
  }));
}

function buildBlueprint(module) {
  const blueprints = {
    quantitative: [
      { title: "Theorie", body: "Kurze, verknuepfte Theoriepfade mit Formeln, Fehlerquellen und visualisierten Kurven." },
      { title: "Aufgaben", body: "Uebungs- und Tutoriumsaufgaben werden als loesbare Drill-Sequenzen mit Teilschritten abgebildet." },
      { title: "Klausur", body: "Exam-Modus mit Zeitdruck, Erwartungshorizont und Wiederholungslogik." }
    ],
    quantitative_coding: [
      { title: "Theorie + R", body: "Konzepte und Code stehen nebeneinander, damit sich Formel und Implementation gegenseitig verstaerken." },
      { title: "R-Lab", body: "Starter-Code, Run, Reset, Check, Hinweise und Musterloesung in derselben Oberflaeche." },
      { title: "Diagnostik", body: "Typische Fehler werden als Debugging- und Interpretationsfragen ausgespielt." }
    ],
    text_doctrinal: [
      { title: "Definitionen", body: "Begriffe, Voraussetzungen und Ausnahmen werden als aktive Karten und Checklisten organisiert." },
      { title: "Falltraining", body: "Kurzfaelle fuehren Schritt fuer Schritt durch Anspruch, Merkmal und Subsumtion." },
      { title: "Pruefungsschema", body: "Die Lernstruktur priorisiert issue-spotting und stringente Klausurgliederung." }
    ],
    mixed: [
      { title: "Kernstoff", body: "Zentrale Konzepte werden in kurzen, gut scanbaren Lerneinheiten gebuendelt." },
      { title: "Anwendung", body: "Tabellen, Schemata, Kennzahlen oder Beispiele greifen die Vorlesungslogik auf." },
      { title: "Vorbereitung", body: "Klausurnahe Aufgaben werden als wiederverwendbare Trainingsbausteine vorbereitet." }
    ]
  };

  return blueprints[module.type] || blueprints.mixed;
}

function buildFactCards(module) {
  const content = getModuleContent(module.slug);
  const codingState = module.rLab ? "R-Lab aktiv" : "Kein Codefokus";
  const statusText = getStageLabel(module) === "Live-Portal" ? "Aktiv" : "In Vorbereitung";
  const theoryCount = content?.roadmap?.length || module.portalState?.chapterCount || estimateGeneratedChapterCount(module, content) || 0;
  const practiceCount = content?.practice?.length || 0;

  return [
    { label: "Status", value: statusText },
    { label: "Kurstyp", value: getFilterLabel(module.type) },
    { label: "Theorie", value: theoryCount ? `${theoryCount} Bausteine` : "Enthalten" },
    { label: "Praxis", value: practiceCount ? `${practiceCount} Bausteine` : "Integriert" },
    { label: "Coding", value: codingState }
  ];
}

function renderEvidenceCards(items, group, progress) {
  return items.map((item, index) => {
    const unitId = `${group}_${index + 1}`;
    const isComplete = Boolean(progress[unitId]);

    return `
      <article class="evidence-card ${isComplete ? "is-complete" : ""}">
        <div class="evidence-head">
          <h3>${item.title}</h3>
          <button
            class="unit-toggle ${isComplete ? "is-complete" : ""}"
            type="button"
            data-unit-id="${unitId}"
            aria-pressed="${isComplete ? "true" : "false"}"
          >
            ${isComplete ? "Abgehakt" : "Abhaken"}
          </button>
        </div>
        <p>${item.body}</p>
      </article>
    `;
  }).join("");
}

function bindStudyUnitToggles(module) {
  const state = getPortalState(module);
  if (!state?.progressKey) return;

  document.querySelectorAll("[data-unit-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const progress = readStoredJson(state.progressKey);
      const unitId = button.dataset.unitId;
      if (!unitId) return;

      if (progress[unitId]) {
        delete progress[unitId];
      } else {
        progress[unitId] = { completedAt: Date.now() };
      }

      writeStoredJson(state.progressKey, progress);
      touchModuleVisit(module, { lastUnitId: unitId });

      const scrollY = window.scrollY;
      renderModulePage();
      window.scrollTo(0, scrollY);
    });
  });
}

function ensureModuleSection(referenceNode, id, className = "content-panel") {
  let section = document.getElementById(id);
  if (section) return section;
  if (!referenceNode?.parentNode) return null;

  section = document.createElement("section");
  section.id = id;
  section.className = className;
  referenceNode.parentNode.insertBefore(section, referenceNode);
  return section;
}

function wrapConceptLabel(label, maxChars = 16, maxLines = 3) {
  const words = String(label).trim().split(/\s+/).filter(Boolean);
  if (!words.length) return [""];

  const lines = [];
  let current = "";

  words.forEach((word) => {
    const proposal = current ? `${current} ${word}` : word;
    if (proposal.length <= maxChars || !current) {
      current = proposal;
      return;
    }
    lines.push(current);
    current = word;
  });

  if (current) lines.push(current);

  if (lines.length <= maxLines) return lines;

  const trimmed = lines.slice(0, maxLines);
  const last = trimmed[maxLines - 1];
  trimmed[maxLines - 1] = last.length > maxChars - 1
    ? `${last.slice(0, maxChars - 1).trim()}…`
    : `${last}…`;
  return trimmed;
}

function buildSourceConceptMapData(module, content) {
  if (!content?.roadmap?.length) return null;

  const labels = [
    ...content.roadmap.map((item) => item.title),
    ...(content.practice?.[0] ? [content.practice[0].title] : []),
    ...(module.rLab ? ["R-Lab Praxis"] : [])
  ].slice(0, 6);

  if (labels.length < 3) return null;

  const positionTemplates = {
    3: [
      { x: 120, y: 116 },
      { x: 320, y: 76 },
      { x: 520, y: 116 }
    ],
    4: [
      { x: 110, y: 106 },
      { x: 320, y: 70 },
      { x: 530, y: 106 },
      { x: 320, y: 258 }
    ],
    5: [
      { x: 96, y: 102 },
      { x: 262, y: 66 },
      { x: 498, y: 102 },
      { x: 196, y: 254 },
      { x: 434, y: 254 }
    ],
    6: [
      { x: 96, y: 98 },
      { x: 262, y: 62 },
      { x: 498, y: 98 },
      { x: 96, y: 252 },
      { x: 320, y: 252 },
      { x: 544, y: 252 }
    ]
  };

  const positions = positionTemplates[labels.length] || positionTemplates[6];
  const nodes = labels.map((label, index) => ({
    id: `source_${index + 1}`,
    label,
    lines: wrapConceptLabel(label),
    x: positions[index].x,
    y: positions[index].y
  }));

  const edges = nodes.slice(0, -1).map((node, index) => [node.id, nodes[index + 1].id]);

  return {
    caption: "Der Visualpfad ordnet die zentralen Themenblöcke in derselben Reihenfolge wie Theorie, Praxis und Klausurtraining.",
    nodes,
    edges
  };
}

function buildConceptMapData(module, content) {
  const sourceMap = buildSourceConceptMapData(module, content);
  if (sourceMap) return sourceMap;

  if (module.type === "text_doctrinal") {
    return {
      caption: "Die Lernlogik laeuft von Norm und Definition ueber Merkmale und Kurzfall zur Subsumtion.",
      nodes: [
        { id: "norm", label: "Norm / Ausgangspunkt", x: 90, y: 90 },
        { id: "defs", label: "Definitionen", x: 310, y: 60 },
        { id: "merkmale", label: "Merkmale", x: 540, y: 96 },
        { id: "fall", label: "Kurzfall", x: 236, y: 230 },
        { id: "subsumtion", label: "Subsumtion", x: 470, y: 238 },
        { id: "klausur", label: "Klausurstruktur", x: 320, y: 338 }
      ],
      edges: [
        ["norm", "defs"],
        ["defs", "merkmale"],
        ["defs", "fall"],
        ["merkmale", "subsumtion"],
        ["fall", "subsumtion"],
        ["subsumtion", "klausur"]
      ]
    };
  }

  if (module.type === "quantitative_coding") {
    return {
      caption: "Theorie, Aufgaben und Coding laufen in demselben Zyklus zusammen, damit Begriffe direkt in Ergebnisse uebersetzt werden.",
      nodes: [
        { id: "theorie", label: "Theorie", x: 90, y: 86 },
        { id: "formel", label: "Formel / Modell", x: 310, y: 60 },
        { id: "aufgabe", label: "Aufgabe", x: 552, y: 94 },
        { id: "rlab", label: "R-Lab", x: 206, y: 236 },
        { id: "interpretation", label: "Interpretation", x: 452, y: 236 },
        { id: "exam", label: "Klausurmodus", x: 320, y: 338 }
      ],
      edges: [
        ["theorie", "formel"],
        ["formel", "aufgabe"],
        ["formel", "rlab"],
        ["aufgabe", "interpretation"],
        ["rlab", "interpretation"],
        ["interpretation", "exam"]
      ]
    };
  }

  return {
    caption: "Die Lernstruktur priorisiert Kernlogik, Uebung und Klausurvorbereitung in einer wiederkehrenden Lernschleife.",
    nodes: [
      { id: "einstieg", label: "Kernidee", x: 96, y: 94 },
      { id: "theorie", label: "Theorie", x: 300, y: 60 },
      { id: "visual", label: "Visual / Schema", x: 534, y: 94 },
      { id: "aufgaben", label: "Aufgaben", x: 200, y: 236 },
      { id: "fehler", label: "Fehlerquellen", x: 456, y: 236 },
      { id: "exam", label: "Klausurtraining", x: 320, y: 336 }
    ],
    edges: [
      ["einstieg", "theorie"],
      ["theorie", "visual"],
      ["theorie", "aufgaben"],
      ["visual", "fehler"],
      ["aufgaben", "exam"],
      ["fehler", "exam"]
    ]
  };
}

function renderConceptMap(container, module) {
  const content = getModuleContent(module.slug);
  const { caption, nodes, edges } = buildConceptMapData(module, content);
  const nodeMarkup = nodes.map((node) => `
    <g transform="translate(${node.x}, ${node.y})">
      <rect x="-82" y="-36" rx="18" ry="18" width="164" height="72" fill="var(--surface-strong)" stroke="var(--accent)" stroke-opacity="0.26"></rect>
      <text text-anchor="middle" fill="var(--text)" font-family="var(--font-mono)" font-size="11.5">
        ${(node.lines || [node.label]).map((line, index, allLines) => {
          const firstDy = `${-((allLines.length - 1) * 7)}px`;
          const dy = index === 0 ? firstDy : "14px";
          return `<tspan x="0" dy="${dy}">${escapeHtml(line)}</tspan>`;
        }).join("")}
      </text>
    </g>
  `).join("");

  const edgeMarkup = edges.map(([fromId, toId]) => {
    const from = nodes.find((node) => node.id === fromId);
    const to = nodes.find((node) => node.id === toId);
    if (!from || !to) return "";
    return `<line x1="${from.x}" y1="${from.y}" x2="${to.x}" y2="${to.y}" stroke="var(--accent)" stroke-opacity="0.45" stroke-width="2" />`;
  }).join("");

  container.innerHTML = `
    <p class="map-caption">${caption}</p>
    <svg class="concept-map" viewBox="0 0 640 400" role="img" aria-label="Konzeptkarte fuer ${module.title}">
      <defs>
        <linearGradient id="mapGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="var(--accent)" stop-opacity="0.18"></stop>
          <stop offset="100%" stop-color="var(--accent)" stop-opacity="0.04"></stop>
        </linearGradient>
      </defs>
      <rect x="12" y="12" width="616" height="376" rx="24" fill="url(#mapGlow)"></rect>
      ${edgeMarkup}
      ${nodeMarkup}
    </svg>
  `;
}

function renderModulePage() {
  const slug = inferModuleSlug();
  const module = getModuleBySlug(slug);
  const content = getModuleContent(slug);

  if (!module) return;

  document.documentElement.style.setProperty("--accent", module.accent);
  document.documentElement.style.setProperty("--accent-strong", module.accent);
  document.documentElement.style.setProperty("--accent-soft", hexToSoft(module.accent));
  document.title = `${module.title} | VWL Lernportal`;

  const heroNode = document.getElementById("moduleHero");
  const factsNode = document.getElementById("moduleQuickFacts");
  const learningNode = document.getElementById("learningModes");
  const materialsNode = document.getElementById("sourceMaterials");
  const blueprintNode = document.getElementById("portalBlueprint");
  const mapNode = document.getElementById("conceptMapMount");
  const labSection = document.getElementById("rLabSection");
  const labMount = document.getElementById("rLabMount");
  const roadmapNode = ensureModuleSection(blueprintNode, "coverageRoadmap");
  const practiceNode = ensureModuleSection(blueprintNode, "practiceTracks");
  const qualityNode = ensureModuleSection(document.querySelector(".concept-map-shell"), "qualityAssurance");

  if (!heroNode || !factsNode || !learningNode || !materialsNode || !blueprintNode || !mapNode) return;

  const facts = buildFactCards(module);
  const modes = buildModuleModes(module);
  const blueprint = buildBlueprint(module);
  const snapshot = getModuleSnapshot(module);
  const visitState = readVisitState(module);
  const visitLabel = formatVisitDate(visitState.visitedAt);
  const progress = getPortalState(module)?.progressKey ? readStoredJson(getPortalState(module).progressKey) : {};
  const hasRoadmap = Boolean(content?.roadmap?.length);
  const hasPractice = Boolean(content?.practice?.length);
  const theoryCount = content?.roadmap?.length || 0;
  const practiceCount = content?.practice?.length || 0;
  const moduleMode = module.rLab ? "Theorie, Aufgaben, Exam und R-Lab" : "Theorie, Aufgaben und Exam";
  const scopeLabel = [
    theoryCount ? `${theoryCount} Theoriebausteine` : null,
    practiceCount ? `${practiceCount} Praxisbausteine` : null,
    module.rLab ? "R-Lab" : null
  ].filter(Boolean).join(" · ");
  const sectionLinks = [
    hasRoadmap ? `<a class="secondary-link" href="#coverageRoadmap">Theorie</a>` : "",
    hasPractice ? `<a class="secondary-link" href="#practiceTracks">Praxis</a>` : "",
    module.rLab ? `<a class="secondary-link" href="#rLabSection">R-Lab</a>` : ""
  ].filter(Boolean).join("");

  heroNode.innerHTML = `
    <div class="module-headline">
      <a class="back-link" href="../index.html">Zurueck zu allen Modulen</a>
      <p class="eyebrow">${getFilterLabel(module.type)} · ${getDisplayStageLabel(module)}</p>
      <h1>${module.title}</h1>
      <p class="hero-summary">${module.summary}</p>
      <div class="hero-actions section-nav">
        ${sectionLinks}
      </div>
    </div>
    <aside class="module-meta-card">
      <div class="meta-row">
        <strong>Lernmodus</strong>
        <span>${moduleMode}</span>
      </div>
      <div class="meta-row">
        <strong>Umfang</strong>
        <span>${scopeLabel || "Theorie und Praxis im selben Arbeitsfluss."}</span>
      </div>
      <div class="portal-progress-card">
        <div class="meta-row">
          <strong>Lernstand</strong>
          <span>${snapshot.seen}/${snapshot.total || 0} Bausteine markiert</span>
        </div>
        <div class="progress-meter" aria-label="Lernfortschritt">
          <div class="progress-meter-fill" style="width:${snapshot.percent}%"></div>
        </div>
        <div class="resume-meta">
          <span>${snapshot.percent}% abgeschlossen</span>
          <span>${visitLabel}</span>
        </div>
      </div>
    </aside>
  `;

  factsNode.innerHTML = facts.map((fact) => `
    <article class="fact-card">
      <span class="fact-label">${fact.label}</span>
      <strong class="fact-value">${fact.value}</strong>
    </article>
  `).join("");

  learningNode.innerHTML = `
    <div class="section-heading">
      <div>
        <p class="eyebrow">Lernmodus</p>
          <h2>Wie sich der Lernmodus an ${module.shortTitle} anpasst</h2>
      </div>
    </div>
    <div class="mode-grid">
      ${modes.map((mode) => `
        <article class="mode-card">
          <h3>${mode.title}</h3>
          <p>${mode.body}</p>
        </article>
      `).join("")}
    </div>
  `;

  materialsNode.innerHTML = "";
  materialsNode.hidden = true;

  if (roadmapNode) {
    roadmapNode.innerHTML = hasRoadmap ? `
      <div class="section-heading">
        <div>
          <p class="eyebrow">Theorie</p>
          <h2>Themenuebersicht</h2>
        </div>
        <p class="section-note">Arbeite die Themenlinie der Reihe nach durch oder springe direkt zu den Bausteinen, die du wiederholen willst.</p>
      </div>
      <div class="evidence-grid">
        ${renderEvidenceCards(content.roadmap, "roadmap", progress)}
      </div>
    ` : "";
    roadmapNode.hidden = !hasRoadmap;
  }

  if (practiceNode) {
    practiceNode.innerHTML = hasPractice ? `
      <div class="section-heading">
        <div>
          <p class="eyebrow">Praxis und Exam</p>
          <h2>Aufgaben- und Klausurpfad</h2>
        </div>
        <p class="section-note">Diese Bausteine verbinden Wiederholung, Transfer und klausurnahe Anwendung in derselben Reihenfolge wie der Stoff.</p>
      </div>
      <div class="evidence-grid">
        ${renderEvidenceCards(content.practice, "practice", progress)}
      </div>
    ` : "";
    practiceNode.hidden = !hasPractice;
  }

  blueprintNode.innerHTML = `
    <div class="section-heading">
      <div>
        <p class="eyebrow">Lernweg</p>
        <h2>So arbeitest du durch das Modul</h2>
      </div>
    </div>
    <div class="blueprint-grid">
      ${blueprint.map((item) => `
        <article class="blueprint-card">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `).join("")}
    </div>
  `;

  renderConceptMap(mapNode, module);

  if (qualityNode) {
    qualityNode.innerHTML = "";
    qualityNode.hidden = true;
  }

  if (module.rLab && labSection && labMount) {
    labSection.hidden = false;
    mountRLabs(labMount, module);
  } else if (labSection) {
    labSection.hidden = true;
  }

  bindStudyUnitToggles(module);
  touchModuleVisit(module, {
    lastPath: window.location.pathname,
    lastHash: window.location.hash || ""
  });
}

function initFooterYear() {
  const yearNode = document.getElementById("footerYear");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

function boot() {
  initTheme();
  initFooterYear();

  if (document.body.dataset.page === "landing") {
    renderLandingPage();
  } else if (document.body.dataset.page === "module") {
    renderModulePage();
    const footerCopy = document.querySelector(".site-footer p");
    const module = getModuleBySlug(inferModuleSlug());
    const content = module ? getModuleContent(module.slug) : null;
    if (footerCopy && content) {
      footerCopy.textContent = "Dieses Modul verbindet Theorie, Aufgaben, Visuals und Wiederholung in derselben klaren Navigationslogik wie die anderen Kurse.";
    }
  }
}

boot();
