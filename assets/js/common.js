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
  writeStoredJson(state.lastKey, { ...current, ...patch, visitedAt: Date.now() });
}

function formatVisitDate(timestamp) {
  if (typeof timestamp !== "number" || Number.isNaN(timestamp)) return "Noch kein Lernstand gespeichert";
  return new Intl.DateTimeFormat("de-DE", { dateStyle: "medium", timeStyle: "short" }).format(timestamp);
}

function getModuleSnapshot(module) {
  const state = getPortalState(module);
  if (!state) return { seen: 0, total: 0, due: 0, percent: 0, started: false };
  const progress = readStoredJson(state.progressKey);
  const srs = readStoredJson(state.srsKey);
  const total = state.chapterCount || 0;
  const seen = Object.keys(progress).length;
  const due = Object.values(srs).filter((entry) => entry && typeof entry.due === "number" && entry.due <= Date.now()).length;
  const percent = total ? Math.round((seen / total) * 100) : 0;
  return { seen, total, due, percent, started: seen > 0 };
}

function getLandingModeLabel(module) {
  if (module.type === "quantitative_coding") return "Mit R-Lab";
  if (module.type === "text_doctrinal") return "Falltraining";
  if (module.type === "quantitative") return "Modelle";
  return "Theorie";
}

function pickInitialLandingModule() {
  const withVisits = PUBLIC_MODULES
    .map((module) => ({ module, visit: readVisitState(module) }))
    .filter(({ visit }) => typeof visit.visitedAt === "number");
  if (withVisits.length) return withVisits.sort((left, right) => right.visit.visitedAt - left.visit.visitedAt)[0].module;
  return null;
}

function renderLandingPage() {
  const gridNode = document.getElementById("moduleGrid");
  const countLabel = document.getElementById("moduleCountLabel");
  const continueSection = document.getElementById("continue");
  const continueTitle = document.getElementById("continueTitle");
  const continueProgress = document.getElementById("continueProgress");
  const continueLink = document.getElementById("continueLink");

  if (!gridNode) return;

  // 1. Module Count
  if (countLabel) countLabel.textContent = `${PUBLIC_MODULES.length} Module verfügbar`;

  // 2. Continue Section
  const lastModule = pickInitialLandingModule();
  if (lastModule && continueSection && continueTitle && continueProgress && continueLink) {
    const snapshot = getModuleSnapshot(lastModule);
    if (snapshot.started) {
      continueSection.hidden = false;
      continueTitle.textContent = lastModule.title;
      continueProgress.textContent = `${snapshot.percent}% abgeschlossen · ${snapshot.due} Wiederholungen`;
      continueLink.href = lastModule.href;
    }
  }

  // 3. Module Grid
  gridNode.innerHTML = PUBLIC_MODULES.map((module) => {
    const snapshot = getModuleSnapshot(module);
    const modeLabel = getLandingModeLabel(module);
    const statusLabel = module.status === "live" ? "Aktiv" : "Vorschau";
    
    return `
      <a href="${module.href}" class="module-tile">
        <h3>${module.shortTitle}</h3>
        <p class="summary">${module.summary}</p>
        <div class="meta">
          <span class="mode-label">${modeLabel}</span>
          <span class="status-badge">${snapshot.started ? snapshot.percent + '%' : statusLabel}</span>
        </div>
      </a>
    `;
  }).join("");
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
  const blueprintNode = document.getElementById("portalBlueprint");
  const mapNode = document.getElementById("conceptMapMount");
  const labSection = document.getElementById("rLabSection");
  const labMount = document.getElementById("rLabMount");

  if (!heroNode || !factsNode || !learningNode || !blueprintNode || !mapNode) return;

  const snapshot = getModuleSnapshot(module);
  const visitState = readVisitState(module);
  const visitLabel = formatVisitDate(visitState.visitedAt);

  heroNode.innerHTML = `
    <div class="module-headline">
      <a class="back-link" href="../index.html">Zurück</a>
      <h1>${module.title}</h1>
      <p class="hero-summary">${module.summary}</p>
    </div>
    <aside class="module-meta-card">
      <div class="portal-progress-card">
        <strong>Lernstand</strong>
        <div class="progress-meter"><div class="progress-meter-fill" style="width:${snapshot.percent}%"></div></div>
        <div class="resume-meta"><span>${snapshot.percent}%</span><span>${visitLabel}</span></div>
      </div>
    </aside>
  `;
  
  // Minimal placeholder for existing UI nodes if they exist
  if (factsNode) factsNode.innerHTML = "<!-- Quick facts -->";
  if (learningNode) learningNode.innerHTML = "<!-- Learning modes -->";
  if (blueprintNode) blueprintNode.innerHTML = "<!-- Blueprint -->";

  if (module.rLab && labSection && labMount) {
    labSection.hidden = false;
    mountRLabs(labMount, module);
  } else if (labSection) {
    labSection.hidden = true;
  }

  touchModuleVisit(module, { lastPath: window.location.pathname });
}

function boot() {
  initTheme();
  const yearNode = document.getElementById("footerYear");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  if (document.body.dataset.page === "landing") {
    renderLandingPage();
  } else if (document.body.dataset.page === "module") {
    renderModulePage();
  }
}

boot();
