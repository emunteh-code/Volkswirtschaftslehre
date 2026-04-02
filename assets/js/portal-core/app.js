export function createPortalApp({
  courseLabel,
  consentKey,
  chapters,
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
  portalBridge
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
    toggleExamDrill,
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

  function navigate(id) {
    appState.setCurrent(id);
    appState.setCurrentTab("theorie");
    setRendererState(id, "theorie");

    // Scroll to top instantly when switching topics
    window.scrollTo(0, 0);

    if (id) {
      recordView(id);
      saveLastId(id);
      setActiveNav(id);
      window.__currentGraphId = id;
      updateProgressUI(loadProgress());
      updateNavBadges();
      renderContent(id, "theorie", initGraph);
      renderRightPanel(id, navigate);
      syncRightPanelVisibility();
      setActiveTab("theorie");
      // Focus the main heading for keyboard and screen-reader users
      const heading = document.querySelector("#content h1");
      if (heading) heading.focus({ preventScroll: true });
    } else {
      setActiveNav(null);
      renderHome();
      clearRightPanel();
      syncRightPanelVisibility();
    }
  }

  function switchTab(tab) {
    if (!appState.current) return;
    appState.setCurrentTab(tab);
    setRendererState(appState.current, tab);
    setActiveTab(tab);
    renderContent(appState.current, tab, initGraph);
    renderRightPanel(appState.current, navigate);
    const content = document.getElementById("content");
    if (content) content.focus();
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
      html += `<div class="home-card" onclick="window.__navigate('${chapter.id}')" tabindex="0" role="button" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')">
<div class="hc-num srs-due-dot">Wiederholen</div>
<div class="hc-title">${chapter.title}</div>
<div class="hc-cat">${chapter.cat}</div>
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

  window.__navigate = navigate;
  window.__renderHome = renderHome;
  window.__showDashboard = openDashboard;
  window.__startExam = openQuickExam;
  window.__submitExamAnswer = submitExamAnswer;
  window.__skipExamQ = skipExamQ;
  window.__showFullExamSelect = openFullExamOverview;
  window.__startFullExam = openFullExam;
  window.__showSRSReview = showSRSReview;
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

    const searchInput = document.getElementById("navSearch");
    if (searchInput) {
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

    const lastId = loadLastId();
    const lastExists = lastId && chapters.find((chapter) => chapter.id === lastId);
    if (lastExists) navigate(lastId);
    else {
      setActiveNav(null);
      renderHome();
      clearRightPanel();
      syncRightPanelVisibility();
    }

    updateNavBadges();
    updateProgressUI(loadProgress());
  });
}
