import {
  getSourceMaterialsAvailability,
  primeSourceMaterialsAvailability
} from './utils/deployEnvironment.js';
import {
  parseConceptHash,
  replaceConceptHash,
  resolveAvailableTab,
  resolveConceptHashId
} from './utils/hashRouting.js';

export function createPortalApp({
  courseLabel,
  consentKey,
  chapters,
  /** Optional map of short hash slugs → canonical chapter ids */
  conceptHashAliases = {},
  appState,
  storage,
  navigation,
  renderer,
  rightPanel,
  graphs,
  quickExam,
  fullExam,
  mastery,
  srs,
  examGraphs,
  theme,
  keyboard,
  toast,
  math,
  portalBridge,
  /** Optional trap-MCQ concept check (5-min); see createConceptSchnelltestModule */
  conceptSchnelltest,
  /** Optional mistake log review; see createMistakeReviewModule */
  mistakeReview,
  /** Optional official-material companion browser. */
  sourceCompanion
}) {
  const {
    loadProgress,
    loadStreak,
    recordView,
    loadLastId,
    saveLastId,
    clearAllData
  } = storage;

  const {
    buildNav,
    filterNav,
    setActiveNav,
    updateNavBadges,
    updateProgressUI
  } = navigation;

  const {
    renderContent,
    renderHome,
    toggleSolution,
    toggleExamDrill: rendererToggleExamDrill,
    copyFormula,
    showDashboard,
    setRendererState
  } = renderer;

  const { renderRightPanel, clearRightPanel = () => {} } = rightPanel;
  const { initGraph, ...graphRegistry } = graphs || {};
  const { startExam, submitExamAnswer, skipExamQ } = quickExam;
  const { startFullExam, feSelectWF, feCheckText, feRevealAnswer, feText, submitFE, showFullExamSelect } = fullExam;
  const { toggleMastery } = mastery;
  const { getDueCards } = srs;
  const { drawHicksGraph, drawDemandGraph, drawIsoquantGraph } = examGraphs;
  const { toggleTheme, initTheme } = theme;
  const { initKeyboard } = keyboard;
  const { showToast } = toast;
  const { renderMath } = math;

  /** Prüfungstransfer cards call `window.__toggleExamDrill`; many modules forgot to re-export it from `createRenderer`. */
  const toggleExamDrill =
    typeof rendererToggleExamDrill === "function"
      ? rendererToggleExamDrill
      : function toggleExamDrillFallback(drillId) {
          const solution = document.getElementById(`examDrill_${drillId}`);
          const button = document.getElementById(`examDrillBtn_${drillId}`);
          if (!solution) return;
          const isVisible = solution.classList.toggle("show");
          solution.setAttribute("aria-expanded", isVisible ? "true" : "false");
          if (button) {
            const openLabel = button.dataset.openLabel || "Lösung verbergen";
            const closedLabel = button.dataset.closedLabel || "Lösung anzeigen";
            button.textContent = isVisible ? openLabel : closedLabel;
          }
          if (isVisible) renderMath(solution);
        };

  function debounce(fn, ms) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms);
    };
  }

  function setActiveTab(tab) {
    document.querySelectorAll("#tabRow button").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === tab);
      btn.setAttribute("aria-selected", btn.dataset.tab === tab ? "true" : "false");
    });
  }

  function syncRightPanelVisibility() {
    const panel = document.getElementById("rightPanel");
    if (!panel) return;

    const visibleSections = Array.from(panel.querySelectorAll(".rp-section"))
      .filter((section) => !section.hidden && section.textContent?.trim());
    const hasContent = visibleSections.length > 0;

    panel.classList.toggle("has-content", hasContent);
    panel.style.display = hasContent ? "" : "none";
  }

  let applyingHashRoute = false;
  const chapterIds = chapters.map((chapter) => chapter.id);

  function resolveHashChapterId(rawConceptId) {
    return resolveConceptHashId(rawConceptId, {
      chapterIds,
      aliases: conceptHashAliases
    });
  }

  function navigate(id, { tab = "theorie", updateHash = true, scrollKernidee = false } = {}) {
    const tabRow = document.getElementById("tabRow");
    if (id && tabRow) tabRow.classList.add("visible");
    const scrollToKernidee = scrollKernidee || tab === "intuition";
    const requestedTab = tab === "intuition" ? "theorie" : tab;
    const resolvedTab = id ? resolveAvailableTab(tabRow, requestedTab) : "theorie";

    appState.setCurrent(id);
    appState.setCurrentTab(resolvedTab);
    setRendererState(id, resolvedTab);

    // Scroll to top instantly when switching topics
    window.scrollTo(0, 0);

    if (id) {
      recordView(id);
      saveLastId(id);
      setActiveNav(id);
      window.__currentGraphId = id;
      updateProgressUI(loadProgress());
      updateNavBadges();
      renderContent(id, resolvedTab, initGraph, { scrollKernidee: scrollToKernidee });
      renderRightPanel(id, { navigate, currentTab: resolvedTab });
      syncRightPanelVisibility();
      setActiveTab(resolvedTab);
      if (updateHash && !applyingHashRoute) replaceConceptHash(id, resolvedTab);
      // Focus the main heading for keyboard and screen-reader users
      const heading = document.querySelector("#content h1");
      if (heading) heading.focus({ preventScroll: true });
    } else {
      setActiveNav(null);
      renderHome();
      clearRightPanel();
      syncRightPanelVisibility();
      if (updateHash && !applyingHashRoute) replaceConceptHash("", "theorie");
    }
  }

  function switchTab(tab, { updateHash = true } = {}) {
    if (!appState.current) return;
    const tabRow = document.getElementById("tabRow");
    const resolvedTab = resolveAvailableTab(tabRow, tab);
    appState.setCurrentTab(resolvedTab);
    setRendererState(appState.current, resolvedTab);
    setActiveTab(resolvedTab);
    renderContent(appState.current, resolvedTab, initGraph);
    renderRightPanel(appState.current, { navigate, currentTab: resolvedTab });
    if (updateHash && !applyingHashRoute) replaceConceptHash(appState.current, resolvedTab);
    const content = document.getElementById("content");
    if (content) content.focus();
  }

  function applyConceptHashRoute({ updateHash = false } = {}) {
    const { conceptId, tab, scrollKernidee } = parseConceptHash();
    if (!conceptId) {
      if (appState.current) navigate(null, { updateHash });
      else renderHome();
      return;
    }
    const resolvedId = resolveHashChapterId(conceptId);
    const chapter = resolvedId ? chapters.find((entry) => entry.id === resolvedId) : null;
    if (!chapter) return;
    applyingHashRoute = true;
    try {
      if (appState.current !== chapter.id) {
        navigate(chapter.id, { tab: tab || "theorie", updateHash, scrollKernidee });
      } else if (tab && tab !== appState.currentTab) {
        switchTab(tab, { updateHash });
        if (scrollKernidee) {
          renderContent(chapter.id, tab, initGraph, { scrollKernidee: true });
        }
      } else if (scrollKernidee) {
        renderContent(chapter.id, tab || appState.currentTab, initGraph, { scrollKernidee: true });
      }
    } finally {
      applyingHashRoute = false;
    }
  }

  function showSRSReview() {
    const due = getDueCards();
    const content = document.getElementById("content");
    const tabRow = document.getElementById("tabRow");
    const breadcrumb = document.getElementById("breadcrumb");
    if (!content) return;
    if (tabRow) tabRow.classList.remove("visible");
    clearRightPanel();
    syncRightPanelVisibility();
    if (breadcrumb) {
      breadcrumb.innerHTML = `<button class="breadcrumb-link" onclick="window.__renderHome()">Übersicht</button> / Wiederholung`;
    }

    if (!due.length) {
      content.innerHTML = `<div class="empty-state">
<h2 class="srs-heading">Alle Karten gelernt</h2>
<p>Heute gibt es keine Karten zu wiederholen. Komm morgen wieder!</p>
<div class="empty-state-actions">
<button class="btn" onclick="window.__renderHome()">Zurück zur Übersicht</button>
</div>
</div>`;
      return;
    }

    let html = `<div style="padding:32px 24px;">
<h2 class="srs-heading">Heute zu wiederholen</h2>
<p class="srs-subheading">${due.length} Konzept${due.length !== 1 ? "e" : ""} stehen zur Wiederholung an.</p>
<div class="home-grid">`;

    due.forEach((chapter) => {
      html += `<div class="home-card module-lesson-card" onclick="window.__navigate('${chapter.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')">
<div class="module-lesson-card__body">
<h3 class="module-lesson-card__title hc-title">${chapter.title}</h3>
<p class="badge badge--meta module-lesson-card__meta">${chapter.cat}</p>
</div>
<span class="badge badge--action module-lesson-card__action" aria-hidden="true">Wiederholen →</span>
</div>`;
    });

    html += "</div></div>";
    content.innerHTML = html;
    renderMath(content);
  }

  function updateStreakUI() {
    const streak = loadStreak();
    appState.setStreak(streak);
    const count = document.getElementById("streakCount");
    if (count) count.textContent = streak;
    const badge = document.getElementById("streakBadge");
    if (badge) badge.style.display = streak > 0 ? "inline-flex" : "none";
  }

  function initConsent() {
    if (localStorage.getItem(consentKey)) return;
    const notice = document.getElementById("consentNotice");
    const app = document.getElementById("app");
    if (!notice) return;
    notice.classList.add("show");
    if (app) app.setAttribute("inert", "");
    requestAnimationFrame(() => {
      const btn = notice.querySelector(".consent-btn-primary, button");
      if (btn) btn.focus();
    });
  }

  function acceptConsent() {
    localStorage.setItem(consentKey, "1");
    const notice = document.getElementById("consentNotice");
    const app = document.getElementById("app");
    if (notice) notice.classList.remove("show");
    if (app) app.removeAttribute("inert");
  }

  function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;
    const open = sidebar.classList.toggle("open");
    const overlay = document.getElementById("sidebarOverlay");
    if (overlay) overlay.classList.toggle("show", open);
    const btn = document.getElementById("mobileMenuBtn");
    if (btn) btn.setAttribute("aria-expanded", String(open));
  }

  function initResizeObserver() {
    const content = document.getElementById("content");
    if (!content || !window.ResizeObserver) return;
    let rafPending = false;
    const observer = new ResizeObserver(() => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        const canvas = document.getElementById("graph_canvas");
        if (canvas && appState.current) initGraph(appState.current, false);
        if (document.getElementById("canvas_hicks") && typeof window.__drawHicksGraph === "function") window.__drawHicksGraph();
        if (document.getElementById("canvas_demand") && typeof window.__drawDemandGraph === "function") window.__drawDemandGraph();
        if (document.getElementById("canvas_isoquant") && typeof window.__drawIsoquantGraph === "function") window.__drawIsoquantGraph();
      });
    });
    observer.observe(content);
  }

  function toggleFocus() {
    document.body.classList.toggle("focus-mode");
    const active = document.body.classList.contains("focus-mode");
    showToast(active ? "Fokus-Modus aktiviert (F zum Deaktivieren)" : "Fokus-Modus deaktiviert", "info");
  }

  function resetData() {
    if (!confirm("Nur der Lernfortschritt dieses Moduls wird gelöscht. Fortfahren?")) return;
    clearAllData();
    showToast("Der Fortschritt dieses Moduls wurde gelöscht.", "info");
    updateNavBadges();
    updateProgressUI(loadProgress());
    renderHome();
    clearRightPanel();
    syncRightPanelVisibility();
  }

  function openDashboard() {
    showDashboard();
    clearRightPanel();
    syncRightPanelVisibility();
  }

  function openQuickExam() {
    clearRightPanel();
    syncRightPanelVisibility();
    startExam();
  }

  function openConceptSchnelltest() {
    if (!conceptSchnelltest) return;
    clearRightPanel();
    syncRightPanelVisibility();
    conceptSchnelltest.startConceptSchnelltest();
  }

  function openMistakeReview() {
    if (!mistakeReview) return;
    clearRightPanel();
    syncRightPanelVisibility();
    mistakeReview.showMistakeReview();
  }

  function openFullExamOverview() {
    clearRightPanel();
    syncRightPanelVisibility();
    showFullExamSelect();
  }

  function openFullExam(id) {
    clearRightPanel();
    syncRightPanelVisibility();
    startFullExam(id);
  }

  function openSourceCompanion(options = {}) {
    if (!sourceCompanion?.showSourceCompanion) return;
    clearRightPanel();
    syncRightPanelVisibility();
    sourceCompanion.showSourceCompanion(options);
  }

  function openQuellen(options = {}) {
    if (appState.current) {
      const tabRow = document.getElementById("tabRow");
      const quellenBtn = tabRow?.querySelector('button[data-tab="quellen"]');
      const quellenVisible = quellenBtn && quellenBtn.style.display !== "none";
      if (quellenVisible) {
        if (tabRow) tabRow.classList.add("visible");
        switchTab("quellen");
        return;
      }
    }
    openSourceCompanion(options);
  }

  window.__navigate = navigate;
  window.__switchTab = switchTab;
  window.__renderHome = renderHome;
  window.__showDashboard = openDashboard;
  window.__startExam = openQuickExam;
  window.__submitExamAnswer = submitExamAnswer;
  window.__skipExamQ = skipExamQ;
  if (conceptSchnelltest) {
    window.__startConceptSchnelltest = openConceptSchnelltest;
    window.__conceptSchnelltestPrimary = conceptSchnelltest.handleConceptSchnelltestPrimary;
  }
  if (mistakeReview) {
    window.__showMistakeReview = openMistakeReview;
    window.__mistakeReviewRefresh = () => mistakeReview.refreshMistakeReview();
  }
  window.__showFullExamSelect = openFullExamOverview;
  window.__startFullExam = openFullExam;
  window.__showSRSReview = showSRSReview;
  if (sourceCompanion?.showSourceCompanion) {
    window.__showSourceCompanion = openSourceCompanion;
    window.__openQuellen = openQuellen;
  }
  window.__feSelectWF = feSelectWF;
  window.__feCheckText = feCheckText;
  window.__feRevealAnswer = feRevealAnswer;
  window.__feText = feText;
  window.__submitFE = submitFE;
  window.__toggleSolution = toggleSolution;
  window.__toggleExamDrill = toggleExamDrill;
  window.__copyFormula = copyFormula;
  window.__toggleMastery = (conceptId, itemIdx, checkbox) => {
    toggleMastery(conceptId, itemIdx, checkbox, () => {
      updateNavBadges();
      updateProgressUI(loadProgress());
    });
  };
  
  // Expose graph drawing functions from registry globally
  Object.entries(graphRegistry).forEach(([key, fn]) => {
    window[`__${key}`] = fn;
    // Keep standard name if required
    window[key] = fn;
  });

  window.__drawHicksGraph = drawHicksGraph;
  window.__drawDemandGraph = drawDemandGraph;
  window.__drawIsoquantGraph = drawIsoquantGraph;
  window.initGraph = initGraph;
  window.__startInterleavedExam = () => {
    const content = document.getElementById("content");
    if (content) {
      const intro = document.createElement("div");
      intro.className = "section-block interleaved-exam-intro";
      intro.setAttribute("role", "note");
      intro.innerHTML =
        "<h3>Gemischter Schnelltest</h3><p>Aufgaben aus verschiedenen Konzepten werden gemischt (wie bei der Klausur). Modulübergreifende Mischung folgt in einer späteren Version.</p>";
      content.prepend(intro);
      window.setTimeout(() => intro.remove(), 3200);
    }
    startExam();
  };
  window.__toggleTheme = toggleTheme;
  window.__toggleSidebar = toggleSidebar;
  window.__toggleFocus = toggleFocus;
  window.__resetData = resetData;
  window.__acceptConsent = acceptConsent;
  window.__updateStreakUI = updateStreakUI;
  window.__updateProgressUI = () => updateProgressUI(loadProgress());
  window.__updateNavBadges = updateNavBadges;

  document.addEventListener("DOMContentLoaded", () => {
    window.__jsLoaded = true;
    const jsError = document.getElementById("jsError");
    if (jsError) {
      jsError.remove();
    }
    primeSourceMaterialsAvailability();
    if (sourceCompanion) {
      void getSourceMaterialsAvailability();
    }
    initTheme();
    buildNav(navigate);

    const tabRow = document.getElementById("tabRow");
    if (tabRow) {
      tabRow.querySelectorAll("button[data-tab]").forEach((btn) => {
        btn.addEventListener("click", () => switchTab(btn.dataset.tab));
        btn.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            switchTab(btn.dataset.tab);
          }
        });
      });
    }

    window.addEventListener("hashchange", () => applyConceptHashRoute({ updateHash: false }));

    const searchInput = document.getElementById("navSearch");
    if (searchInput) {
      if (!searchInput.getAttribute("aria-label")) {
        searchInput.setAttribute("aria-label", "Konzepte durchsuchen");
      }
      const debouncedFilter = debounce(() => filterNav(searchInput.value), 200);
      searchInput.addEventListener("input", debouncedFilter);
      searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          searchInput.value = "";
          filterNav("");
        }
      });
    }

    const overlay = document.getElementById("sidebarOverlay");
    if (overlay) overlay.addEventListener("click", toggleSidebar);

    initKeyboard({
      get current() {
        return appState.current;
      },
      navigate,
      toggleSolution: (idx) => toggleSolution(idx),
      toggleFocus
    });

    initResizeObserver();
    updateStreakUI();
    initConsent();
    portalBridge?.();

    const hashRoute = parseConceptHash();
    const hashResolvedId = hashRoute.conceptId ? resolveHashChapterId(hashRoute.conceptId) : null;
    const hashChapter = hashResolvedId
      ? chapters.find((chapter) => chapter.id === hashResolvedId)
      : null;
    const lastId = loadLastId();
    const lastExists = lastId && chapters.find((chapter) => chapter.id === lastId);

    if (hashChapter) {
      applyingHashRoute = true;
      try {
        navigate(hashChapter.id, {
          tab: hashRoute.tab || "theorie",
          updateHash: false,
          scrollKernidee: hashRoute.scrollKernidee
        });
        if (hashRoute.tab && appState.currentTab !== hashRoute.tab) {
          switchTab(hashRoute.tab, { updateHash: false });
        }
      } finally {
        applyingHashRoute = false;
      }
    } else if (lastExists) {
      navigate(lastId);
    } else {
      setActiveNav(null);
      renderHome();
      clearRightPanel();
      syncRightPanelVisibility();
    }

    updateNavBadges();
    updateProgressUI(loadProgress());
  });
}
