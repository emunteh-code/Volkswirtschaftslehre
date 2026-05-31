import {
  PUBLIC_MODULES,
  getModuleBySlug,
  getExamReadyCoreModules,
  getNonCorePublicModules,
  getReleaseTierLabel,
  getReleaseTierTooltip,
  RELEASE_TIERS
} from "./modules.js";
import { SITE_CONFIG } from "./siteConfig.js";
import { getModuleConceptCount } from "./module-progress-meta.js";
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
  if (button) {
    const label = theme === "dark" ? "☀ Hell" : "☾ Dunkel";
    button.textContent = label;
    button.setAttribute("aria-label", `Farbschema wechseln: ${label}`);
  }
}

function initTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(storedTheme || (preferredDark ? "dark" : "light"));
  const button = document.getElementById("themeToggle");
  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const nextTheme = document.body.classList.contains("theme-dark") ? "light" : "dark";
      setTheme(nextTheme);
    });
  }
}

function readStoredJson(key) {
  if (!key) return {};
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : {};
  } catch (err) {
    console.error(`Storage Error [${key}]:`, err);
    localStorage.removeItem(key);
    if (typeof document !== "undefined" && document.body) {
      showStorageRecoveryToast(key);
    }
    return {};
  }
}

function writeStoredJson(key, value) {
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Storage Write Error [${key}]:`, err);
  }
}

function getPortalState(module) {
  if (module.portalState) return module.portalState;
  return {
    progressKey: `${module.slug}_progress_v1`,
    srsKey: `${module.slug}_srs_v1`,
    lastKey: `${module.slug}_last_v1`,
    chapterCount: getModuleConceptCount(module.slug)
  };
}

function readVisitState(module) {
  const state = getPortalState(module);
  return state?.lastKey ? readStoredJson(state.lastKey) : {};
}

function showStorageRecoveryToast(key) {
  const toast = document.createElement("div");
  toast.className = "lp-storage-toast";
  toast.setAttribute("role", "status");
  toast.textContent = "Fortschritt zurückgesetzt (beschädigte Daten).";
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("is-visible"));
  window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => toast.remove(), 300);
  }, 4200);
  console.warn(`Storage reset [${key}]: corrupted JSON removed`);
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
  const total = state.chapterCount || getModuleConceptCount(module.slug) || 0;
  const seen = Math.min(Object.keys(progress).length, total || Object.keys(progress).length);
  const due = Object.values(srs).filter(
    (entry) => entry && typeof entry.due === "number" && entry.due <= Date.now()
  ).length;
  const seenForRatio = total > 0 ? Math.min(seen, total) : seen;
  const percent = total ? Math.min(100, Math.round((seenForRatio / total) * 100)) : 0;
  return { seen, total, due, percent, started: seen > 0 };
}

function pickInitialLandingModule() {
  const withVisits = PUBLIC_MODULES
    .map((module) => ({ module, visit: readVisitState(module) }))
    .filter(({ visit }) => typeof visit.visitedAt === "number");
  if (withVisits.length) return withVisits.sort((left, right) => right.visit.visitedAt - left.visit.visitedAt)[0].module;
  return null;
}

let selectedLandingIndex = -1;
let landingTileElements = [];
let landingKeyboardBound = false;
let heroRenderToken = 0;

function buildLandingRows() {
  const rows = [];
  landingTileElements.forEach((tile, index) => {
    const top = Math.round(tile.getBoundingClientRect().top);
    const existing = rows.find((row) => Math.abs(row.top - top) <= 6);
    if (existing) {
      existing.indices.push(index);
    } else {
      rows.push({ top, indices: [index] });
    }
  });
  return rows.sort((left, right) => left.top - right.top);
}

function getLandingPosition(index) {
  const rows = buildLandingRows();
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const colIndex = rows[rowIndex].indices.indexOf(index);
    if (colIndex !== -1) {
      return { rows, rowIndex, colIndex };
    }
  }
  return { rows, rowIndex: 0, colIndex: 0 };
}

function setLandingSelection(index, { focus = false } = {}) {
  if (index < 0 || index >= landingTileElements.length) return;

  landingTileElements.forEach((tile, tileIndex) => {
    const selected = tileIndex === index;
    tile.classList.toggle("is-selected", selected);
    tile.classList.toggle("is-focused", selected);
    tile.setAttribute("aria-selected", selected ? "true" : "false");
    tile.tabIndex = selected ? 0 : -1;
  });

  selectedLandingIndex = index;
  const selectedTile = landingTileElements[index];
  const module = PUBLIC_MODULES.find((item) => item.slug === selectedTile?.dataset.slug);
  if (module) void updateHeroShelf(module);
  if (focus && selectedTile) {
    selectedTile.focus({ preventScroll: true });
  }
}

function moveLandingSelection(direction) {
  if (!landingTileElements.length) return;
  if (selectedLandingIndex < 0) {
    setLandingSelection(0, { focus: true });
    return;
  }

  const { rows, rowIndex, colIndex } = getLandingPosition(selectedLandingIndex);
  let nextIndex = selectedLandingIndex;

  if (direction === "left") {
    nextIndex = Math.max(0, selectedLandingIndex - 1);
  } else if (direction === "right") {
    nextIndex = Math.min(landingTileElements.length - 1, selectedLandingIndex + 1);
  } else if (direction === "down") {
    const nextRow = rows[rowIndex + 1];
    if (nextRow) nextIndex = nextRow.indices[Math.min(colIndex, nextRow.indices.length - 1)];
  } else if (direction === "up") {
    const previousRow = rows[rowIndex - 1];
    if (previousRow) nextIndex = previousRow.indices[Math.min(colIndex, previousRow.indices.length - 1)];
  } else if (direction === "home") {
    nextIndex = 0;
  } else if (direction === "end") {
    nextIndex = landingTileElements.length - 1;
  }

  setLandingSelection(nextIndex, { focus: true });
}

function handleLandingKeydown(event) {
  if (document.body.dataset.page !== "landing" || !landingTileElements.length) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  const active = document.activeElement;
  if (active && active.closest("input, textarea, select")) return;
  const inModulePickers = active.closest("#trustedCoreGrid") || active.closest("#moduleGrid");
  if (active && active.closest("a, button, [role='button']") && !inModulePickers) return;

  switch (event.key) {
    case "ArrowRight":
      event.preventDefault();
      moveLandingSelection("right");
      break;
    case "ArrowLeft":
      event.preventDefault();
      moveLandingSelection("left");
      break;
    case "ArrowDown":
      event.preventDefault();
      moveLandingSelection("down");
      break;
    case "ArrowUp":
      event.preventDefault();
      moveLandingSelection("up");
      break;
    case "Home":
      event.preventDefault();
      moveLandingSelection("home");
      break;
    case "End":
      event.preventDefault();
      moveLandingSelection("end");
      break;
    case "Enter":
    case " ":
      if (selectedLandingIndex >= 0 && landingTileElements[selectedLandingIndex]) {
        event.preventDefault();
        landingTileElements[selectedLandingIndex].click();
      }
      break;
    default:
      break;
  }
}

function showOnboarding(force = false) {
  if (!force && localStorage.getItem(ONBOARDING_KEY)) return;
  const existing = document.querySelector(".onboarding-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.className = "onboarding-overlay";
  overlay.innerHTML = `
    <div class="onboarding-card">
      <h2>Willkommen im VWL Lernportal</h2>
      <p>Strukturierte Klausurvorbereitung: Theorie, Aufgaben und Wiederholung an einem Ort.</p>
      <ul class="onboarding-list">
        <li><strong>Schritt für Schritt:</strong> Geführte Aufgaben mit Musterlösungen und Prüfungstransfer.</li>
        <li><strong>Ehrliche Grenzen:</strong> Schnelltests und Probeklausuren sind Plattform-Simulationen — keine offiziellen PDFs.</li>
        <li><strong>Fortschritt lokal:</strong> Dein Lernstand bleibt in diesem Browser gespeichert.</li>
      </ul>
      <button class="lp-hero-btn" id="closeOnboarding">Verstanden & Starten</button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById("closeOnboarding").addEventListener("click", () => {
    overlay.remove();
    localStorage.setItem(ONBOARDING_KEY, "true");
    if (document.body.dataset.page === "landing" && selectedLandingIndex >= 0) {
      setLandingSelection(selectedLandingIndex, { focus: true });
    }
  });
}

async function updateHeroShelf(module) {
  const renderToken = ++heroRenderToken;
  const kicker = document.getElementById("heroKicker");
  const title = document.getElementById("heroTitle");
  const desc = document.getElementById("heroDesc");
  const meta = document.getElementById("heroMeta");
  const btn = document.getElementById("heroBtn");
  const content = document.getElementById("heroContent");
  if (!title) return;

  if (!module) {
    // Default state
    if (kicker) kicker.textContent = "Willkommen";
    title.textContent = "VWL Lernportal";
    if (desc) desc.textContent = "Wähle ein Modul, um mit der Klausurvorbereitung zu beginnen.";
    if (meta) meta.innerHTML = "";
    if (btn) {
      btn.textContent = "Zum empfohlenen Einstieg";
      btn.href = "#trusted-core";
    }
    return;
  }

  const snapshot = getModuleSnapshot(module);
  if (renderToken !== heroRenderToken) return;

  // Animate transition
  if (content) {
    content.classList.add("transitioning");
    setTimeout(() => {
      applyHero();
      content.classList.remove("transitioning");
    }, 150);
  } else {
    applyHero();
  }

  function applyHero() {
    if (kicker) kicker.textContent = module.difficulty;
    title.textContent = module.title;
    if (desc) desc.textContent = module.summary;
    if (meta) {
      const items = [`<span class="lp-hero-meta-item">Dauer: <strong>${module.time}</strong></span>`];
      if (module.prereq !== "Keine") {
        items.push(`<span class="lp-hero-meta-item">Voraussetzung: <strong>${module.prereq}</strong></span>`);
      }
      if (snapshot.started) {
        items.push(`
          <span class="lp-hero-progress">
            <span class="lp-hero-progress-bar"><span class="lp-hero-progress-fill" style="width:${snapshot.percent}%"></span></span>
            ${snapshot.percent}%
          </span>
        `);
      }
      if (module.sourceCorpusInRepo === false) {
        items.push(`<span class="lp-hero-meta-item lp-hero-meta-item-status">Quellenstatus: <strong>Sonderstatus</strong></span>`);
      }
      meta.innerHTML = items.join("");
    }
    if (btn) {
      btn.textContent = snapshot.started ? "Fortsetzen →" : "Modul starten →";
      btn.href = module.href;
    }
  }
}

function buildLandingTileHtml(module, snapshot, { examReadyCore = false } = {}) {
  const statusClass = snapshot.started ? " started" : "";
  const statusLabel = snapshot.started ? `${snapshot.percent}%` : "Neu";
  const progressBar = snapshot.started
    ? `<span class="lp-tile-progress"><span class="lp-tile-progress-fill" style="width:${snapshot.percent}%"></span></span>`
    : "";
  const specialStatus = module.sourceCorpusInRepo === false
    ? `<p class="lp-tile-note">Sonderstatus: offizieller Mikro-II-Quellenkorpus noch nicht im Repo.</p>`
    : module.sourceStatusNote
      ? `<p class="lp-tile-note">${module.sourceStatusNote} <a class="lp-tile-note-link" href="${module.href}">Modul öffnen →</a></p>`
      : "";
  const coreClass = examReadyCore ? " lp-tile--exam-ready" : "";
  const tier = module.releaseTier || "beta";
  const tierLabel = getReleaseTierLabel(tier);
  const tierTooltip = getReleaseTierTooltip(tier);
  const tierClass = tier === RELEASE_TIERS.core ? " lp-tier--core" : tier === RELEASE_TIERS.structural ? " lp-tier--structural" : " lp-tier--beta";
  const tierBadge = tier !== RELEASE_TIERS.core
    ? `<span class="lp-tier-badge${tierClass}" title="${tierTooltip.replace(/"/g, "&quot;")}">${tierLabel}</span>`
    : `<span class="lp-tier-badge lp-tier--core" title="${tierTooltip.replace(/"/g, "&quot;")}">${tierLabel}</span>`;

  return `
    <a href="${module.href}" class="lp-tile${coreClass}" role="option" data-slug="${module.slug}" id="lpTile_${module.slug}" aria-selected="false" tabindex="-1">
      <div class="lp-tile-head">
        <h3 class="lp-tile-title">${module.title}</h3>
        ${tierBadge}
      </div>
      <p class="lp-tile-summary">${module.summary}</p>
      ${specialStatus}
      <div class="lp-tile-footer">
        <span class="lp-tile-status${statusClass}">${statusLabel}</span>
        ${progressBar}
      </div>
    </a>
  `;
}

async function renderLandingPage() {
  const trustedGrid = document.getElementById("trustedCoreGrid");
  const gridNode = document.getElementById("moduleGrid");
  if (!gridNode) return;

  const coreModules = getExamReadyCoreModules();
  const furtherModules = getNonCorePublicModules();

  const countLabel = document.getElementById("moduleCountLabel");
  if (countLabel) countLabel.textContent = `${furtherModules.length} Module`;

  const examCramNode = document.getElementById("examCramActions");
  if (examCramNode) {
    examCramNode.innerHTML = `
      <a class="lp-exam-cram-btn lp-exam-cram-btn--primary" href="./mikro1/index.html#budget/aufgaben">
        Mikro I: Budget + Aufgaben starten →
      </a>
      <a class="lp-exam-cram-btn" href="./statistik/index.html#deskriptiv/aufgaben">
        Statistik: Deskriptiv + Aufgaben →
      </a>
    `;
  }

  const lastModule = pickInitialLandingModule();
  const defaultModule = lastModule || coreModules[0] || PUBLIC_MODULES[0] || null;
  await updateHeroShelf(defaultModule);

  const buildSnapshotsFromMeta = (modules) =>
    modules.map((module) => ({
      module,
      snapshot: {
        seen: 0,
        total: getModuleConceptCount(module.slug),
        due: 0,
        percent: 0,
        started: false
      }
    }));

  if (PUBLIC_MODULES.length === 0) {
    if (trustedGrid) trustedGrid.innerHTML = "";
    gridNode.innerHTML = `<div class="empty-state">Keine Module verfügbar.</div>`;
    landingTileElements = [];
  } else {
    let trustedSnapshots = coreModules.length && trustedGrid
      ? buildSnapshotsFromMeta(coreModules)
      : [];
    let furtherSnapshots = buildSnapshotsFromMeta(furtherModules);

    if (trustedGrid) {
      trustedGrid.innerHTML = trustedSnapshots.length
        ? trustedSnapshots
            .map(({ module, snapshot }) => buildLandingTileHtml(module, snapshot, { examReadyCore: true }))
            .join("")
        : `<div class="empty-state">Empfohlener Einstieg nicht verfügbar.</div>`;
    }

    gridNode.innerHTML = furtherSnapshots.length
      ? furtherSnapshots.map(({ module, snapshot }) => buildLandingTileHtml(module, snapshot)).join("")
      : `<div class="empty-state lp-shelf-empty--further">Keine weiteren Module in dieser Liste.</div>`;

    const trustedTiles = trustedGrid ? Array.from(trustedGrid.querySelectorAll(".lp-tile")) : [];
    const furtherTiles = Array.from(gridNode.querySelectorAll(".lp-tile"));
    landingTileElements = [...trustedTiles, ...furtherTiles];

    const initialIndex = Math.max(0, landingTileElements.findIndex((tile) => tile.dataset.slug === defaultModule?.slug));
    setLandingSelection(initialIndex, { focus: true });

    landingTileElements.forEach((tile, index) => {
      const slug = tile.dataset.slug;
      const module = PUBLIC_MODULES.find((m) => m.slug === slug);
      if (!module) return;

      tile.addEventListener("mouseenter", () => setLandingSelection(index));
      tile.addEventListener("focus", () => setLandingSelection(index));
    });

    const reapplyHoverAnchor = () => {
      if (selectedLandingIndex >= 0) setLandingSelection(selectedLandingIndex);
    };
    if (trustedGrid) trustedGrid.addEventListener("mouseleave", reapplyHoverAnchor);
    gridNode.addEventListener("mouseleave", reapplyHoverAnchor);

    queueMicrotask(() => {
      trustedSnapshots = coreModules.length
        ? coreModules.map((module) => ({
            module,
            snapshot: getModuleSnapshot(module)
          }))
        : [];
      furtherSnapshots = furtherModules.map((module) => ({
        module,
        snapshot: getModuleSnapshot(module)
      }));

      if (trustedGrid && trustedSnapshots.length) {
        trustedGrid.innerHTML = trustedSnapshots
          .map(({ module, snapshot }) => buildLandingTileHtml(module, snapshot, { trustedCore: true }))
          .join("");
      }
      if (furtherSnapshots.length) {
        gridNode.innerHTML = furtherSnapshots
          .map(({ module, snapshot }) => buildLandingTileHtml(module, snapshot))
          .join("");
      }

      landingTileElements = [
        ...(trustedGrid ? Array.from(trustedGrid.querySelectorAll(".lp-tile")) : []),
        ...Array.from(gridNode.querySelectorAll(".lp-tile"))
      ];
      const idx = Math.max(0, landingTileElements.findIndex((tile) => tile.dataset.slug === defaultModule?.slug));
      setLandingSelection(idx, { focus: false });
      landingTileElements.forEach((tile, index) => {
        tile.addEventListener("mouseenter", () => setLandingSelection(index));
        tile.addEventListener("focus", () => setLandingSelection(index));
      });
      if (defaultModule) void updateHeroShelf(defaultModule);
    });
  }

  if (!landingKeyboardBound) {
    document.addEventListener("keydown", handleLandingKeydown);
    window.addEventListener("resize", () => {
      if (document.body.dataset.page === "landing" && selectedLandingIndex >= 0) {
        setLandingSelection(selectedLandingIndex);
      }
    });
    landingKeyboardBound = true;
  }

  // Footer Actions
  const instructionsBtn = document.getElementById("showInstructions");
  if (instructionsBtn) {
    instructionsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showOnboarding(true);
    });
  }

  showOnboarding();
}

async function renderModulePage() {
  const slug = inferModuleSlug();
  const module = getModuleBySlug(slug);
  if (!module) {
    console.warn("Module not found:", slug);
    return;
  }

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
        <div class="resume-meta"><span>${snapshot.percent}% abgeschlossen</span><span>Zuletzt: ${visitLabel}</span></div>
      </div>
    </aside>
  `;
}

function applySiteBranding() {
  document.querySelectorAll("[data-site-university]").forEach((el) => {
    el.textContent = SITE_CONFIG.universityName;
  });
  document.querySelectorAll("[data-site-degree]").forEach((el) => {
    el.textContent = SITE_CONFIG.degreeLabel;
  });
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && document.body.dataset.page === "landing") {
    metaDesc.setAttribute(
      "content",
      `${SITE_CONFIG.portalTitle}: Klausurvorbereitung für ${SITE_CONFIG.degreeLabel} an der ${SITE_CONFIG.universityName}.`
    );
  }
}

async function boot() {
  initTheme();
  applySiteBranding();
  const yearNode = document.getElementById("footerYear");
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  if (document.body.dataset.page === "landing") {
    await renderLandingPage();
  } else if (document.body.dataset.page === "module") {
    await renderModulePage();
  }
}

// Global error handler for UI resilience
window.onerror = function(msg, url, line) {
  console.error("Critical UI Error:", msg, "at", url, ":", line);
  return false;
};

boot().catch((err) => {
  console.error("Portal boot failed:", err);
});
