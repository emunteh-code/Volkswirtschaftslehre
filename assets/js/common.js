import { FILTERS, PUBLIC_MODULES, getModuleBySlug } from "./modules.js";
import { getModuleContent } from "./module-content.js";
import { estimateGeneratedChapterCount } from "./generated-portal/dataFactory.js";
import { mountRLabs } from "./r-lab.js";

const THEME_KEY = "lernportal_theme_v1";
const ONBOARDING_KEY = "lernportal_onboarding_v1";

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
  if (button) button.textContent = theme === "dark" ? "Hell" : "Dunkel";
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

function readStoredJson(key) {
  if (!key) return {};
  try { return JSON.parse(localStorage.getItem(key) || "{}"); } catch { return {}; }
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
  if (typeof timestamp !== "number" || Number.isNaN(timestamp)) return "Noch kein Lernstand";
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

function pickInitialLandingModule() {
  const withVisits = PUBLIC_MODULES
    .map((module) => ({ module, visit: readVisitState(module) }))
    .filter(({ visit }) => typeof visit.visitedAt === "number");
  if (withVisits.length) return withVisits.sort((left, right) => right.visit.visitedAt - left.visit.visitedAt)[0].module;
  return null;
}

function showOnboarding() {
  if (localStorage.getItem(ONBOARDING_KEY)) return;
  const overlay = document.createElement("div");
  overlay.className = "onboarding-overlay";
  overlay.innerHTML = `
    <div class="onboarding-card">
      <h2>Willkommen im VWL Lernportal</h2>
      <p>Dieses System bewertet Ihr <strong>ökonomisches Verständnis</strong>, nicht nur das Endergebnis.</p>
      <ul class="onboarding-list">
        <li><strong>Logic First:</strong> Ein richtiges Ergebnis bei falscher Logik gibt 0 Punkte.</li>
        <li><strong>Validation:</strong> Jeder Schritt muss plausibel begründet werden.</li>
        <li><strong>Consistency:</strong> Das System erkennt Widersprüche in Ihrer Argumentation.</li>
      </ul>
      <button class="primary-btn" id="closeOnboarding">Verstanden</button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById("closeOnboarding").addEventListener("click", () => {
    overlay.remove();
    localStorage.setItem(ONBOARDING_KEY, "true");
  });
}

function renderLandingPage() {
  const gridNode = document.getElementById("moduleGrid");
  const continueSection = document.getElementById("continue");
  const continueTitle = document.getElementById("continueTitle");
  const continueProgress = document.getElementById("continueProgress");
  const continueLink = document.getElementById("continueLink");

  if (!gridNode) return;

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

  gridNode.innerHTML = PUBLIC_MODULES.map((module) => {
    const snapshot = getModuleSnapshot(module);
    const statusLabel = snapshot.started ? `${snapshot.percent}%` : "Start";
    
    return `
      <a href="${module.href}" class="module-tile">
        <div class="tile-head">
          <span class="difficulty-badge ${module.difficulty.toLowerCase()}">${module.difficulty}</span>
          <span class="time-badge">${module.time}</span>
        </div>
        <h3>${module.shortTitle}</h3>
        <p class="summary">${module.summary}</p>
        <div class="prereq">Voraussetzung: ${module.prereq}</div>
        <div class="meta">
          <span class="status-badge">${statusLabel}</span>
          <span class="action-hint">Modul öffnen →</span>
        </div>
      </a>
    `;
  }).join("");

  showOnboarding();
}

function renderModulePage() {
  const slug = inferModuleSlug();
  const module = getModuleBySlug(slug);
  if (!module) return;

  document.documentElement.style.setProperty("--accent", module.accent);
  document.documentElement.style.setProperty("--accent-strong", module.accent);
  document.documentElement.style.setProperty("--accent-soft", hexToSoft(module.accent));
  document.title = `${module.title} | VWL Lernportal`;

  const heroNode = document.getElementById("moduleHero");
  if (!heroNode) return;

  const snapshot = getModuleSnapshot(module);
  const visitState = readVisitState(module);
  const visitLabel = formatVisitDate(visitState.visitedAt);

  heroNode.innerHTML = `
    <div class="module-headline">
      <a class="back-link" href="../index.html">← Zurück zur Übersicht</a>
      <h1>${module.title}</h1>
      <p class="hero-summary">${module.summary}</p>
    </div>
    <aside class="module-meta-card">
      <div class="portal-progress-card">
        <strong>Dein Lernstand</strong>
        <div class="progress-meter"><div class="progress-meter-fill" style="width:${snapshot.percent}%"></div></div>
        <div class="resume-meta"><span>${snapshot.percent}% abgeschlossen</span><span>${visitLabel}</span></div>
      </div>
    </aside>
  `;
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
