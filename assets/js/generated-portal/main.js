import { createPortalApp } from "../portal-core/app.js";
import { createRenderer } from "../portal-core/ui/renderer.js";
import { createQuickExamModule } from "../portal-core/features/exam.js";
import { createFullExamModule } from "../portal-core/features/fullExam.js";
import { createStorageModule } from "../portal-core/state/storage.js";
import { getModuleBySlug } from "../modules.js";
import { getModuleContent } from "../module-content.js";
import { mountRLabs } from "../r-lab.js";
import { mountLivePortalBridge } from "../live-portal-bridge.js";
import { buildGeneratedPortalData } from "./dataFactory.js";

function inferSlug() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  const last = parts[parts.length - 1];
  return last?.endsWith(".html") ? parts[parts.length - 2] || "" : last || "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function accentForeground(hex) {
  const normalized = String(hex || "#7c3aed").replace("#", "");
  const full = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized;
  const r = Number.parseInt(full.slice(0, 2), 16);
  const g = Number.parseInt(full.slice(2, 4), 16);
  const b = Number.parseInt(full.slice(4, 6), 16);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.62 ? "#000000" : "#ffffff";
}

function ensureMathJax() {
  if (document.getElementById("MathJax-script")) return;
  window.MathJax = {
    tex: {
      inlineMath: [["$", "$"], ["\\(", "\\)"]],
      displayMath: [["$$", "$$"], ["\\[", "\\]"]]
    },
    options: {
      skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"]
    },
    startup: { typeset: false }
  };
  const script = document.createElement("script");
  script.id = "MathJax-script";
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-chtml.js";
  document.head.appendChild(script);
}

function renderMath(target) {
  const el = target || document.getElementById("content");
  if (!el) return;

  const typeset = () => {
    if (window.MathJax?.typesetPromise) {
      MathJax.typesetPromise([el]).catch(() => {});
    }
  };

  if (window.MathJax?.typesetPromise) {
    typeset();
    return;
  }

  if (window.MathJax?.startup?.promise) {
    MathJax.startup.promise.then(typeset).catch(() => {});
    return;
  }

  const poll = window.setInterval(() => {
    if (window.MathJax?.typesetPromise) {
      window.clearInterval(poll);
      typeset();
    }
  }, 120);
  window.setTimeout(() => window.clearInterval(poll), 10000);
}

function normalizeAnswer(value) {
  return String(value).toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[_,]/g, "")
    .replace(/\*/g, "")
    .replace(/[^a-z0-9+\-\/=.<>]/g, "")
    .trim();
}

function checkAnswerWithTolerance(input, acceptedAnswers, traps = []) {
  const normalizedInput = input.toLowerCase().replace(/\s+/g, "");

  for (const trap of traps) {
    if (normalizedInput.includes(String(trap.pattern).toLowerCase().replace(/\s+/g, ""))) {
      return { correct: false, trap: trap.msg };
    }
  }

  const numericInput = Number.parseFloat(String(input).replace(",", "."));
  for (const answer of acceptedAnswers) {
    const numericAnswer = Number.parseFloat(String(answer).replace(",", "."));
    if (!Number.isNaN(numericInput) && !Number.isNaN(numericAnswer)) {
      if (Math.abs(numericInput - numericAnswer) / Math.max(1, Math.abs(numericAnswer)) < 0.02) {
        return { correct: true };
      }
    }
  }

  const normInput = normalizeAnswer(input);
  for (const answer of acceptedAnswers) {
    const normAnswer = normalizeAnswer(String(answer));
    if (!normAnswer) continue;
    if (normAnswer.length <= 1 && normInput === normAnswer) return { correct: true };
    if (normAnswer.length > 1 && (normInput.includes(normAnswer) || normAnswer.includes(normInput))) {
      return { correct: true };
    }
  }

  return { correct: false };
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast-notif ${type}`;
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  toast.textContent = message;
  container.appendChild(toast);
  window.setTimeout(() => {
    toast.classList.add("dismissing");
    window.setTimeout(() => toast.remove(), 320);
  }, 3000);
}

function buildHomeIntro(module, contentProfile) {
  return contentProfile.roadmap?.[0]?.body
    || contentProfile.practice?.[0]?.body
    || module.summary;
}

function createAppState() {
  return {
    current: null,
    currentTab: "theorie",
    streak: 0,
    setCurrent(id) {
      this.current = id;
    },
    setCurrentTab(tab) {
      this.currentTab = tab;
    },
    setStreak(value) {
      this.streak = value;
    }
  };
}

function createNavigation(chapters, loadProgress, loadSRS) {
  function buildNav(onNavigate) {
    const categories = {};
    chapters.forEach((chapter, index) => {
      if (!categories[chapter.cat]) categories[chapter.cat] = [];
      categories[chapter.cat].push({ ...chapter, idx: index + 1 });
    });

    const navList = document.getElementById("navList");
    if (!navList) return;
    navList.innerHTML = "";

    Object.entries(categories).forEach(([category, items]) => {
      const section = document.createElement("div");
      section.className = "nav-section";
      section.innerHTML = `<div class="nav-section-title">${category}</div>`;
      items.forEach((item) => {
        const element = document.createElement("div");
        element.className = "nav-item";
        element.id = `nav-${item.id}`;
        element.dataset.id = item.id;
        element.setAttribute("role", "button");
        element.setAttribute("tabindex", "0");
        element.setAttribute("aria-label", `Konzept ${item.idx}: ${item.title}`);
        element.innerHTML = `<span class="num" aria-hidden="true">${item.idx}</span><span>${item.title}</span>`;
        element.onclick = () => onNavigate(item.id);
        element.onkeydown = (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onNavigate(item.id);
          }
        };
        section.appendChild(element);
      });
      navList.appendChild(section);
    });
  }

  function filterNav(query) {
    const normalized = query.toLowerCase().trim();
    document.querySelectorAll(".nav-item").forEach((element) => {
      const text = element.textContent.toLowerCase();
      element.classList.toggle("hidden", Boolean(normalized) && !text.includes(normalized));
    });
  }

  function setActiveNav(id) {
    document.querySelectorAll(".nav-item").forEach((element) => element.classList.remove("active"));
    const active = document.getElementById(`nav-${id}`);
    if (active) {
      active.classList.add("active");
      active.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  function updateNavBadges() {
    const progress = loadProgress();
    const srs = loadSRS();
    const now = Date.now();

    document.querySelectorAll(".nav-item[data-id]").forEach((element) => {
      const id = element.dataset.id;
      let badge = element.querySelector(".mastery");
      if (!badge) {
        badge = document.createElement("span");
        badge.className = "mastery";
        element.appendChild(badge);
      }

      element.querySelector(".nav-due-dot")?.remove();

      const entry = progress[id];
      if (entry) {
        const total = (entry.correct || 0) + (entry.wrong || 0);
        const accuracy = total > 0 ? Math.round(((entry.correct || 0) / total) * 100) : null;
        if (accuracy !== null && accuracy >= 80) {
          badge.textContent = `${accuracy}%`;
          badge.className = "mastery done";
        } else if (accuracy !== null) {
          badge.textContent = `${accuracy}%`;
          badge.className = "mastery partial";
        } else if (entry.views >= 1) {
          badge.textContent = "·";
          badge.className = "mastery partial";
        } else {
          badge.textContent = "";
          badge.className = "mastery";
        }
      } else {
        badge.textContent = "";
        badge.className = "mastery";
      }

      const srsEntry = srs[id];
      if (srsEntry && srsEntry.due <= now) {
        const dot = document.createElement("span");
        dot.className = "nav-due-dot";
        dot.title = "Wiederholung fällig";
        dot.setAttribute("aria-label", "Wiederholung fällig");
        element.appendChild(dot);
      }
    });
  }

  function updateProgressUI(progress) {
    const seen = Object.keys(progress).filter((id) => chapters.find((chapter) => chapter.id === id)).length;
    const total = chapters.length;
    const percent = total ? Math.round((seen / total) * 100) : 0;
    const fill = document.getElementById("progressFill");
    const text = document.getElementById("progressText");
    if (fill) fill.style.width = `${percent}%`;
    if (text) text.textContent = `${seen} / ${total}`;
  }

  return {
    buildNav,
    filterNav,
    setActiveNav,
    updateNavBadges,
    updateProgressUI
  };
}

function createRightPanel(chapters, contentById, conceptLinks) {
  function clearRightPanel() {
    const formulasNode = document.getElementById("rpFormulas");
    const formulasSection = document.getElementById("rpFormulasSection");
    const connectionsNode = document.getElementById("rpConnections");
    const connectionsSection = connectionsNode?.closest(".rp-section");
    const mistakesNode = document.getElementById("rpMistakes");
    const mistakesSection = document.getElementById("rpMistakesSection");

    if (formulasNode) formulasNode.innerHTML = "";
    if (connectionsNode) connectionsNode.innerHTML = "";
    if (mistakesNode) mistakesNode.innerHTML = "";
    if (formulasSection) formulasSection.hidden = true;
    if (connectionsSection) connectionsSection.hidden = true;
    if (mistakesSection) mistakesSection.hidden = true;
  }

  function renderRightPanel(id) {
    const data = contentById[id];
    const links = conceptLinks[id];
    const chapterMap = Object.fromEntries(chapters.map((chapter) => [chapter.id, chapter]));

    const formulasNode = document.getElementById("rpFormulas");
    const formulasSection = document.getElementById("rpFormulasSection");
    const connectionsSection = document.getElementById("rpConnections")?.closest(".rp-section");
    if (formulasNode) {
      if (data?.formeln?.length) {
        if (formulasSection) formulasSection.hidden = false;
        formulasNode.innerHTML = data.formeln.map((formula) => `
          <div class="rp-formula">
            <div class="rp-f-name">${formula.label}</div>
            <div class="rp-f-eq">${formula.eq}</div>
          </div>
        `).join("");
        renderMath(formulasNode);
      } else {
        if (formulasSection) formulasSection.hidden = true;
        formulasNode.innerHTML = "";
      }
    }

    const connectionsNode = document.getElementById("rpConnections");
    if (connectionsNode) {
      if (links) {
        let html = "";
        (links.uses || []).forEach((linkedId) => {
          const chapter = chapterMap[linkedId];
          if (chapter) {
            html += `<div class="rp-conn" role="button" tabindex="0" onclick="window.__navigate('${linkedId}')" onkeydown="if(event.key==='Enter')window.__navigate('${linkedId}')"><span class="arrow" aria-hidden="true">←</span> ${chapter.title}</div>`;
          }
        });
        (links.usedBy || []).forEach((linkedId) => {
          const chapter = chapterMap[linkedId];
          if (chapter) {
            html += `<div class="rp-conn" role="button" tabindex="0" onclick="window.__navigate('${linkedId}')" onkeydown="if(event.key==='Enter')window.__navigate('${linkedId}')"><span class="arrow" aria-hidden="true">→</span> ${chapter.title}</div>`;
          }
        });
        connectionsNode.innerHTML = html;
        if (connectionsSection) connectionsSection.hidden = !html;
      } else {
        connectionsNode.innerHTML = "";
        if (connectionsSection) connectionsSection.hidden = true;
      }
    }

    const mistakesNode = document.getElementById("rpMistakes");
    const mistakesSection = document.getElementById("rpMistakesSection");
    if (mistakesNode && data?.theorie) {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(`<div>${data.theorie}</div>`, "text/html");
        const warnings = doc.querySelectorAll(".warn-box");
        if (warnings.length) {
          if (mistakesSection) mistakesSection.hidden = false;
          mistakesNode.innerHTML = Array.from(warnings).map((warning) => {
            const strong = warning.querySelector("strong");
            const title = strong ? strong.textContent.trim() : "Fehler";
            if (strong) strong.remove();
            const body = warning.innerHTML.trim();
            return `<div class="rp-mistake"><div class="err">${title}</div><div class="fix">${body}</div></div>`;
          }).join("");
          renderMath(mistakesNode);
        } else {
          if (mistakesSection) mistakesSection.hidden = true;
          mistakesNode.innerHTML = "";
        }
      } catch {
        if (mistakesSection) mistakesSection.hidden = true;
        mistakesNode.innerHTML = "";
      }
    }
  }

  return { renderRightPanel, clearRightPanel };
}

function createMasteryModule(masteryById, loadProgress, saveMasteryChecks) {
  function renderMasteryBar(items, checks) {
    const done = Object.values(checks).filter(Boolean).length;
    const total = items.length;
    const percent = total ? Math.round((done / total) * 100) : 0;
    return `<div class="m-bar-wrap"><div class="m-bar-fill" style="width:${percent}%"></div></div><span class="mastery-bar-label">${done}/${total} Ziele erreicht (${percent}%)</span>`;
  }

  function renderMastery(conceptId) {
    const items = masteryById[conceptId];
    if (!items?.length) return "";
    const progress = loadProgress();
    const entry = progress[conceptId] || {};
    const checks = entry.checks || {};

    let html = `<div class="mastery-check" id="masteryCheck_${conceptId}">
<h3>Minimale Beherrschungsziele</h3>
<p style="color:var(--muted);font-size:12px;margin-bottom:12px">Hake ab, was du sicher kannst:</p>`;
    items.forEach((item, index) => {
      const checked = checks[index];
      html += `<label class="mastery-item ${checked ? "done" : ""}">
<input type="checkbox" ${checked ? "checked" : ""} data-concept="${conceptId}" data-idx="${index}" onchange="window.__toggleMastery('${conceptId}', ${index}, this)">
<span>${item}</span>
</label>`;
    });
    html += `<div class="mastery-progress" id="masteryProgress_${conceptId}">${renderMasteryBar(items, checks)}</div></div>`;
    return html;
  }

  function toggleMastery(conceptId, index, checkbox, onUpdate) {
    const progress = loadProgress();
    if (!progress[conceptId]) progress[conceptId] = {};
    if (!progress[conceptId].checks) progress[conceptId].checks = {};
    progress[conceptId].checks[index] = checkbox.checked;
    saveMasteryChecks(conceptId, progress[conceptId].checks);
    checkbox.parentElement?.classList.toggle("done", checkbox.checked);
    const node = document.getElementById(`masteryProgress_${conceptId}`);
    const items = masteryById[conceptId] || [];
    if (node) node.innerHTML = renderMasteryBar(items, progress[conceptId].checks);
    if (onUpdate) onUpdate();
  }

  return {
    renderMastery,
    toggleMastery
  };
}

function createSrsModule(chapters, loadSRS, saveSRS) {
  const SRS_EASE_DEFAULT = 2.5;
  const SRS_EASE_MIN = 1.3;
  const SRS_EASE_MAX = 3.0;

  function updateSRS(conceptId, correct) {
    const srs = loadSRS();
    if (!srs[conceptId]) {
      srs[conceptId] = { interval: 1, ease: SRS_EASE_DEFAULT, due: Date.now(), reviews: 0 };
    }

    const card = srs[conceptId];
    card.reviews += 1;
    if (correct) {
      card.interval = Math.round(card.interval * card.ease);
      card.ease = Math.min(card.ease + 0.1, SRS_EASE_MAX);
    } else {
      card.interval = 1;
      card.ease = Math.max(card.ease - 0.3, SRS_EASE_MIN);
    }
    card.due = Date.now() + card.interval * 86400000;
    saveSRS(srs);
  }

  function getDueCards() {
    const srs = loadSRS();
    const now = Date.now();
    return chapters
      .filter((chapter) => srs[chapter.id] && srs[chapter.id].due <= now)
      .map((chapter) => ({ ...chapter, ease: srs[chapter.id].ease, interval: srs[chapter.id].interval }))
      .sort((left, right) => srs[left.id].due - srs[right.id].due);
  }

  function getPerformance(conceptId, progress) {
    const entry = progress[conceptId];
    if (!entry) return null;
    const total = (entry.correct || 0) + (entry.wrong || 0);
    if (!total) return null;
    return {
      accuracy: (entry.correct || 0) / total,
      total,
      correct: entry.correct || 0,
      wrong: entry.wrong || 0
    };
  }

  return {
    updateSRS,
    getDueCards,
    getPerformance
  };
}

function createDashboard(chapters, loadProgress, loadSRS, getDueCards, getPerformance) {
  function renderDashboard() {
    const progress = loadProgress();
    const srs = loadSRS();
    const now = Date.now();
    const due = getDueCards();

    const stats = chapters.map((chapter) => {
      const performance = getPerformance(chapter.id, progress);
      const entry = progress[chapter.id];
      const srsCard = srs[chapter.id];
      return {
        id: chapter.id,
        title: chapter.title,
        cat: chapter.cat,
        accuracy: performance ? performance.accuracy : null,
        total: performance ? performance.total : 0,
        seen: Boolean(entry),
        due: Boolean(srsCard && srsCard.due <= now)
      };
    }).filter((stat) => stat.seen || stat.total > 0);

    const totalSeen = chapters.filter((chapter) => progress[chapter.id]).length;
    const avgAccuracy = stats.filter((stat) => stat.accuracy !== null)
      .reduce((sum, stat, _, array) => sum + stat.accuracy / array.length, 0);
    const weak = stats.filter((stat) => stat.accuracy !== null && stat.accuracy < 0.6)
      .sort((left, right) => left.accuracy - right.accuracy);
    const weakest = weak[0] || null;

    let html = `<div class="dashboard">
<div class="dash-header">
  <h2>Lern-Dashboard</h2>
  <p style="color:var(--muted);font-size:13px">Dein Fortschritt auf einen Blick</p>
</div>
<div class="dash-stats">
  <div class="dash-stat"><div class="ds-val">${totalSeen}</div><div class="ds-lab">Konzepte gesehen</div></div>
  <div class="dash-stat"><div class="ds-val">${chapters.length}</div><div class="ds-lab">Gesamt</div></div>
  <div class="dash-stat"><div class="ds-val">${stats.filter((stat) => stat.accuracy !== null).length ? `${Math.round(avgAccuracy * 100)}%` : "—"}</div><div class="ds-lab">Ø Genauigkeit</div></div>
  <div class="dash-stat"><div class="ds-val">${due.length}</div><div class="ds-lab">Wiederholung fällig</div></div>
</div>`;

    if (weakest) {
      html += `<div class="dash-focus-rec">
<h3>Fokusempfehlung</h3>
<p>Dein schwächstes Konzept ist <strong>${weakest.title}</strong> (Genauigkeit: ${Math.round(weakest.accuracy * 100)}%).</p>
<button class="btn" onclick="window.__navigate('${weakest.id}')">Jetzt üben</button>
</div>`;
    }

    if (due.length) {
      html += `<div class="dash-section"><h3>Heute wiederholen (${due.length})</h3><div class="dash-due-list">`;
      due.slice(0, 5).forEach((chapter) => {
        const srsCard = srs[chapter.id];
        const easePercent = Math.round(((srsCard.ease - 1.3) / (3.0 - 1.3)) * 100);
        const color = easePercent > 60 ? "var(--accent)" : easePercent > 30 ? "var(--accent2)" : "var(--accent3)";
        html += `<button class="dash-due-btn" onclick="window.__navigate('${chapter.id}')">${chapter.title} <span class="due-ease" style="color:${color}">${easePercent}%</span></button>`;
      });
      html += `</div></div>`;
    }

    if (weak.length) {
      html += `<div class="dash-section"><h3>Schwache Bereiche</h3><div class="dash-bars">`;
      weak.slice(0, 6).forEach((stat) => {
        const percent = Math.round(stat.accuracy * 100);
        const color = percent < 40 ? "var(--accent3)" : percent < 60 ? "#f0c040" : "var(--accent2)";
        html += `<div class="dash-bar-row">
<button class="dash-bar-label" onclick="window.__navigate('${stat.id}')">${stat.title}</button>
<div class="dash-bar-bg"><div class="dash-bar-fg" style="width:${percent}%;background:${color}"></div></div>
<span class="dash-bar-pct" style="color:${color}">${percent}%</span>
</div>`;
      });
      html += `</div></div>`;
    }

    if (!stats.length) {
      html += `<div class="dash-section"><p style="color:var(--muted);text-align:center;padding:40px">Noch keine Daten. Starte mit einem Konzept und beantworte Aufgaben.</p></div>`;
    }

    html += `<div class="dash-actions"><button class="btn secondary" onclick="window.__resetData()">Daten zurücksetzen</button></div></div>`;
    return html;
  }

  return { renderDashboard };
}

function createTheme(themeKey) {
  function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem(themeKey, isLight ? "light" : "dark");
    const button = document.getElementById("themeToggle");
    if (button) button.textContent = isLight ? "Dunkel" : "Hell";
    showToast(isLight ? "Helles Theme" : "Dunkles Theme", "info");
  }

  function initTheme() {
    const saved = localStorage.getItem(themeKey);
    if (saved !== "dark") {
      document.body.classList.add("light-mode");
    }
    const button = document.getElementById("themeToggle");
    const isLight = document.body.classList.contains("light-mode");
    if (button) button.textContent = isLight ? "Dunkel" : "Hell";
  }

  return {
    toggleTheme,
    initTheme
  };
}

function createKeyboard(chapters) {
  function initKeyboard(appState) {
    document.addEventListener("keydown", (event) => {
      const tag = event.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || event.target.isContentEditable) return;

      const index = chapters.findIndex((chapter) => chapter.id === appState.current);
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        if (index >= 0 && index < chapters.length - 1) appState.navigate(chapters[index + 1].id);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        if (index > 0) appState.navigate(chapters[index - 1].id);
      } else if (event.key === "Enter") {
        event.preventDefault();
        const first = document.querySelector(".solution-block:not(.show)");
        if (first) {
          const n = first.id.replace("sol_", "");
          appState.toggleSolution(Number.parseInt(n, 10));
        }
      } else if (event.key === "f" || event.key === "F") {
        appState.toggleFocus();
      } else if (event.key === "Escape") {
        document.getElementById("sidebar")?.classList.remove("open");
      }
    });
  }

  return { initKeyboard };
}

function graphValue(id, fallback = 0) {
  const element = document.getElementById(id);
  if (!element) return fallback;
  const value = Number.parseFloat(element.value);
  return Number.isFinite(value) ? value : fallback;
}

function setGraphLabel(id, value, digits = 2, formatter = null) {
  const element = document.getElementById(id);
  if (!element) return;
  element.textContent = formatter ? formatter(value) : value.toFixed(digits);
}

function graphPalette() {
  const styles = getComputedStyle(document.body);
  return {
    accent: styles.getPropertyValue("--accent").trim() || "#7c3aed",
    accent2: styles.getPropertyValue("--accent2").trim() || "#5cf0ff",
    warn: styles.getPropertyValue("--accent3").trim() || "#ff6b6b",
    text: styles.getPropertyValue("--text").trim() || "#f5f3ff",
    muted: styles.getPropertyValue("--muted").trim() || "#b8b5c6",
    border: styles.getPropertyValue("--border").trim() || "rgba(255,255,255,0.12)",
    grid: "rgba(255,255,255,0.08)",
    mono: styles.getPropertyValue("--font-mono").trim() || "'SF Mono', 'Cascadia Code', 'Fira Code', monospace"
  };
}

function updateGraphInfo(html) {
  const info = document.getElementById("graph_info");
  if (info) info.innerHTML = html;
}

function setupGraphCanvas(xLabel, yLabel, ranges) {
  const canvas = document.getElementById("graph_canvas");
  if (!canvas) return null;
  const ctx = canvas.getContext("2d");
  const width = Math.max(520, Math.round(canvas.clientWidth || 800));
  const height = Math.max(340, Math.round(canvas.clientHeight || 430));
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const col = graphPalette();
  const m = { left: 64, right: 24, top: 26, bottom: 56 };
  const plotWidth = width - m.left - m.right;
  const plotHeight = height - m.top - m.bottom;
  const px = (x) => m.left + ((x - ranges.xMin) / (ranges.xMax - ranges.xMin)) * plotWidth;
  const py = (y) => m.top + plotHeight - ((y - ranges.yMin) / (ranges.yMax - ranges.yMin)) * plotHeight;

  ctx.fillStyle = "rgba(255,255,255,0.015)";
  ctx.fillRect(m.left, m.top, plotWidth, plotHeight);

  ctx.strokeStyle = col.grid;
  ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i += 1) {
    const x = m.left + (plotWidth / 5) * i;
    const y = m.top + (plotHeight / 5) * i;
    ctx.beginPath();
    ctx.moveTo(x, m.top);
    ctx.lineTo(x, m.top + plotHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(m.left, y);
    ctx.lineTo(m.left + plotWidth, y);
    ctx.stroke();
  }

  ctx.strokeStyle = col.border;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(m.left, m.top);
  ctx.lineTo(m.left, m.top + plotHeight);
  ctx.lineTo(m.left + plotWidth, m.top + plotHeight);
  ctx.stroke();

  ctx.fillStyle = col.muted;
  ctx.font = `12px ${col.mono}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText(xLabel, m.left + plotWidth / 2, height - 28);

  ctx.textAlign = "left";
  ctx.fillText(yLabel, 12, 8);

  for (let i = 0; i <= 5; i += 1) {
    const xv = ranges.xMin + ((ranges.xMax - ranges.xMin) / 5) * i;
    const yv = ranges.yMin + ((ranges.yMax - ranges.yMin) / 5) * i;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(Number(xv).toFixed(1).replace(/\.0$/, ""), m.left + (plotWidth / 5) * i, m.top + plotHeight + 8);
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillText(Number(yv).toFixed(1).replace(/\.0$/, ""), m.left - 8, m.top + plotHeight - (plotHeight / 5) * i);
  }

  return { ctx, width, height, m, px, py, ranges, col };
}

function drawPolyline(plot, points, { color, lineWidth = 2.6, dash = [] } = {}) {
  const { ctx } = plot;
  ctx.save();
  ctx.strokeStyle = color || plot.col.accent;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(dash);
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = plot.px(point.x);
    const y = plot.py(point.y);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  ctx.restore();
}

function drawScatter(plot, points, { color, radius = 3.6, alpha = 0.92 } = {}) {
  const { ctx } = plot;
  ctx.save();
  ctx.fillStyle = color || plot.col.accent2;
  ctx.globalAlpha = alpha;
  points.forEach((point) => {
    ctx.beginPath();
    ctx.arc(plot.px(point.x), plot.py(point.y), radius, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

function drawBars(plot, bars) {
  const { ctx } = plot;
  bars.forEach((bar) => {
    const x0 = plot.px(bar.x - bar.width / 2);
    const x1 = plot.px(bar.x + bar.width / 2);
    const y = plot.py(bar.y);
    const base = plot.py(0);
    const top = Math.min(y, base);
    const height = Math.max(1, Math.abs(base - y));
    ctx.fillStyle = bar.color || plot.col.accent;
    ctx.fillRect(x0, top, Math.max(2, x1 - x0), height);
  });
}

function drawVerticalMarker(plot, x, label, color = plot.col.warn) {
  const { ctx, m, height } = plot;
  const px = plot.px(x);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.6;
  ctx.setLineDash([6, 5]);
  ctx.beginPath();
  ctx.moveTo(px, m.top);
  ctx.lineTo(px, height - m.bottom);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = color;
  ctx.font = `12px ${plot.col.mono}`;
  ctx.textAlign = "center";
  ctx.fillText(label, px, m.top - 16);
  ctx.restore();
}

function drawHorizontalMarker(plot, y, label, color = plot.col.muted) {
  const { ctx, m, width } = plot;
  const py = plot.py(y);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.4;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(m.left, py);
  ctx.lineTo(width - m.right, py);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = color;
  ctx.font = `12px ${plot.col.mono}`;
  ctx.textAlign = "left";
  ctx.fillText(label, m.left + 8, py - 16);
  ctx.restore();
}

function drawSegment(plot, x1, y1, x2, y2, color = plot.col.warn, width = 1.3) {
  const { ctx } = plot;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(plot.px(x1), plot.py(y1));
  ctx.lineTo(plot.px(x2), plot.py(y2));
  ctx.stroke();
  ctx.restore();
}

function drawPointMarker(plot, x, y, label, color = plot.col.warn) {
  const { ctx } = plot;
  const px = plot.px(x);
  const py = plot.py(y);
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(px, py, 4.8, 0, Math.PI * 2);
  ctx.fill();
  ctx.font = `12px ${plot.col.mono}`;
  ctx.textAlign = "left";
  ctx.textBaseline = "bottom";
  ctx.fillText(label, px + 8, py - 6);
  ctx.restore();
}

function drawLegend(plot, items) {
  const { ctx, width, m, col } = plot;
  let x = width - m.right - 176;
  const yStart = m.top + 14;
  items.forEach((item, index) => {
    const y = yStart + index * 18;
    ctx.save();
    ctx.strokeStyle = item.color;
    ctx.fillStyle = item.color;
    ctx.lineWidth = 2.4;
    ctx.setLineDash(item.dash || []);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 20, y);
    ctx.stroke();
    ctx.setLineDash([]);
    if (item.point) {
      ctx.beginPath();
      ctx.arc(x + 10, y, 3.6, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = col.muted;
    ctx.font = `12px ${col.mono}`;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(item.label, x + 28, y);
    ctx.restore();
  });
}

function drawFilledPolygon(plot, points, { fill = "rgba(124,58,237,0.18)", stroke = null, lineWidth = 1.8 } = {}) {
  const { ctx } = plot;
  if (!points?.length) return;
  ctx.save();
  ctx.beginPath();
  points.forEach((point, index) => {
    const x = plot.px(point.x);
    const y = plot.py(point.y);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
  ctx.restore();
}

function findZeroCrossings(fn, start, end, segments = 360) {
  const roots = [];
  let xPrev = start;
  let yPrev = fn(xPrev);

  for (let step = 1; step <= segments; step += 1) {
    const x = start + ((end - start) * step) / segments;
    const y = fn(x);

    if (Math.abs(yPrev) < 1e-9) {
      roots.push(xPrev);
    } else if (yPrev * y < 0) {
      let left = xPrev;
      let right = x;
      let leftValue = yPrev;
      for (let i = 0; i < 36; i += 1) {
        const mid = (left + right) / 2;
        const midValue = fn(mid);
        if (Math.abs(midValue) < 1e-10) {
          left = mid;
          right = mid;
          break;
        }
        if (leftValue * midValue <= 0) {
          right = mid;
        } else {
          left = mid;
          leftValue = midValue;
        }
      }
      roots.push((left + right) / 2);
    }

    xPrev = x;
    yPrev = y;
  }

  return roots.filter((root, index) => index === 0 || Math.abs(root - roots[index - 1]) > 0.08);
}

function normalPdf(x, mu = 0, sigma = 1) {
  const z = (x - mu) / sigma;
  return Math.exp(-0.5 * z * z) / (sigma * Math.sqrt(2 * Math.PI));
}

function confidenceToZ(level) {
  const table = {
    90: 1.645, 91: 1.695, 92: 1.751, 93: 1.812, 94: 1.881,
    95: 1.96, 96: 2.054, 97: 2.17, 98: 2.326, 99: 2.576
  };
  return table[Math.round(level)] || 1.96;
}

function binomialProbability(n, k, p) {
  if (k < 0 || k > n) return 0;
  let coeff = 1;
  for (let i = 1; i <= k; i += 1) {
    coeff *= (n - (k - i)) / i;
  }
  return coeff * (p ** k) * ((1 - p) ** (n - k));
}

function drawMathFunctions() {
  const a = graphValue("g_math_a", 1);
  const b = graphValue("g_math_b", -1);
  const c = graphValue("g_math_c", -2);
  const x0 = graphValue("g_math_x0", 1);
  setGraphLabel("v_math_a", a, 1);
  setGraphLabel("v_math_b", b, 1);
  setGraphLabel("v_math_c", c, 1);
  setGraphLabel("v_math_x0", x0, 1);

  const fx = (x) => a * x * x + b * x + c;
  const curve = Array.from({ length: 240 }, (_, index) => {
    const x = -6 + (12 * index) / 239;
    return { x, y: fx(x) };
  });
  const yValues = curve.map((point) => point.y);
  const plot = setupGraphCanvas("x", "f(x)", {
    xMin: -6,
    xMax: 6,
    yMin: Math.min(-10, ...yValues) - 1,
    yMax: Math.max(10, ...yValues) + 1
  });
  if (!plot) return;

  drawPolyline(plot, curve, { color: plot.col.accent, lineWidth: 2.8 });
  drawHorizontalMarker(plot, 0, "y = 0", plot.col.muted);
  const y0 = fx(x0);
  drawPointMarker(plot, x0, y0, "P", plot.col.warn);

  const disc = b * b - 4 * a * c;
  if (Math.abs(a) > 1e-8 && disc >= 0) {
    const root1 = (-b - Math.sqrt(disc)) / (2 * a);
    const root2 = (-b + Math.sqrt(disc)) / (2 * a);
    if (root1 >= -6 && root1 <= 6) drawPointMarker(plot, root1, 0, "x1", plot.col.accent2);
    if (root2 >= -6 && root2 <= 6 && Math.abs(root2 - root1) > 0.05) drawPointMarker(plot, root2, 0, "x2", plot.col.accent2);
  }

  if (Math.abs(a) > 1e-8) {
    const xVertex = -b / (2 * a);
    const yVertex = fx(xVertex);
    if (xVertex >= -6 && xVertex <= 6) drawPointMarker(plot, xVertex, yVertex, "S", plot.col.accent2);
  }

  drawLegend(plot, [
    { label: "f(x) = ax² + bx + c", color: plot.col.accent },
    { label: "markierter Funktionswert", color: plot.col.warn, point: true },
    { label: "Nullstellen / Scheitel", color: plot.col.accent2, point: true }
  ]);

  const rootText = Math.abs(a) < 1e-8
    ? "Bei a = 0 wird aus der Parabel eine Gerade."
    : disc < 0
      ? "Die Diskriminante ist negativ; es gibt keine reellen Nullstellen."
      : disc === 0
        ? "Die Parabel beruehrt die x-Achse in genau einer doppelten Nullstelle."
        : "Die Parabel schneidet die x-Achse in zwei reellen Nullstellen.";

  updateGraphInfo(`<strong>Interpretation:</strong> Die Funktion <strong>f(x) = ${a.toFixed(1)}x² ${b >= 0 ? "+" : "-"} ${Math.abs(b).toFixed(1)}x ${c >= 0 ? "+" : "-"} ${Math.abs(c).toFixed(1)}</strong> liefert bei <strong>x0 = ${x0.toFixed(1)}</strong> den Wert <strong>${y0.toFixed(2)}</strong>. ${rootText}`);
}

function drawMathMatrix() {
  const a11 = graphValue("g_math_m11", 1.5);
  const a12 = graphValue("g_math_m12", 0.5);
  const a21 = graphValue("g_math_m21", 0.25);
  const a22 = graphValue("g_math_m22", 1.25);
  setGraphLabel("v_math_m11", a11, 2);
  setGraphLabel("v_math_m12", a12, 2);
  setGraphLabel("v_math_m21", a21, 2);
  setGraphLabel("v_math_m22", a22, 2);

  const transform = (x, y) => ({ x: a11 * x + a12 * y, y: a21 * x + a22 * y });
  const unitSquare = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }];
  const imageSquare = unitSquare.map((point) => transform(point.x, point.y));
  const e1 = transform(1, 0);
  const e2 = transform(0, 1);
  const det = a11 * a22 - a12 * a21;

  const plot = setupGraphCanvas("x", "y", {
    xMin: -3,
    xMax: 3,
    yMin: -3,
    yMax: 3
  });
  if (!plot) return;

  drawFilledPolygon(plot, unitSquare, { fill: "rgba(255,255,255,0.06)", stroke: plot.col.muted, lineWidth: 1.4 });
  drawFilledPolygon(plot, imageSquare, { fill: "rgba(124,58,237,0.22)", stroke: plot.col.accent, lineWidth: 2.2 });
  drawSegment(plot, 0, 0, 1, 0, plot.col.muted, 1.5);
  drawSegment(plot, 0, 0, 0, 1, plot.col.muted, 1.5);
  drawSegment(plot, 0, 0, e1.x, e1.y, plot.col.accent2, 2.4);
  drawSegment(plot, 0, 0, e2.x, e2.y, plot.col.warn, 2.4);
  drawPointMarker(plot, e1.x, e1.y, "Ae1", plot.col.accent2);
  drawPointMarker(plot, e2.x, e2.y, "Ae2", plot.col.warn);
  drawLegend(plot, [
    { label: "Einheitsquadrat", color: plot.col.muted },
    { label: "Bild unter A", color: plot.col.accent },
    { label: "transformierte Basisvektoren", color: plot.col.accent2, point: true }
  ]);

  const invertible = Math.abs(det) > 1e-8;
  updateGraphInfo(`<strong>Interpretation:</strong> Die Matrix <strong>A = [[${a11.toFixed(2)}, ${a12.toFixed(2)}], [${a21.toFixed(2)}, ${a22.toFixed(2)}]]</strong> bildet das Einheitsquadrat auf die violette Figur ab. Die Determinante ist <strong>${det.toFixed(3)}</strong>; damit ist A ${invertible ? "<strong>invertierbar</strong>" : "<strong>nicht invertierbar</strong>"} und skaliert orientierte Flaechen um den Faktor <strong>${Math.abs(det).toFixed(3)}</strong>.`);
}

function drawMathDerivative() {
  const a = graphValue("g_math_der_a", 0.12);
  const b = graphValue("g_math_der_b", 0.5);
  const x0 = graphValue("g_math_der_x0", 1);
  setGraphLabel("v_math_der_a", a, 2);
  setGraphLabel("v_math_der_b", b, 2);
  setGraphLabel("v_math_der_x0", x0, 2);

  const fx = (x) => a * x ** 3 - x * x + b * x + 1;
  const dfx = (x) => 3 * a * x * x - 2 * x + b;
  const tangent = (x) => fx(x0) + dfx(x0) * (x - x0);
  const curve = Array.from({ length: 220 }, (_, index) => {
    const x = -4.5 + (9 * index) / 219;
    return { x, y: fx(x) };
  });
  const tangentLine = Array.from({ length: 2 }, (_, index) => {
    const x = index === 0 ? -4.5 : 4.5;
    return { x, y: tangent(x) };
  });
  const yValues = [...curve.map((point) => point.y), ...tangentLine.map((point) => point.y)];
  const plot = setupGraphCanvas("x", "f(x)", {
    xMin: -4.5,
    xMax: 4.5,
    yMin: Math.min(...yValues) - 1,
    yMax: Math.max(...yValues) + 1
  });
  if (!plot) return;

  drawPolyline(plot, curve, { color: plot.col.accent, lineWidth: 2.8 });
  drawPolyline(plot, tangentLine, { color: plot.col.accent2, lineWidth: 2.2, dash: [7, 5] });
  drawPointMarker(plot, x0, fx(x0), "P", plot.col.warn);
  drawLegend(plot, [
    { label: "Funktion", color: plot.col.accent },
    { label: "Tangente in x0", color: plot.col.accent2, dash: [7, 5] },
    { label: "Beruehrpunkt", color: plot.col.warn, point: true }
  ]);

  const slope = dfx(x0);
  updateGraphInfo(`<strong>Interpretation:</strong> Im Punkt <strong>x0 = ${x0.toFixed(2)}</strong> hat die Funktion die Steigung <strong>f'(x0) = ${slope.toFixed(2)}</strong>. Die gestrichelte Tangente visualisiert genau diese lokale lineare Approximation.`);
}

function drawMathUnivarOpt() {
  const a = graphValue("g_math_opt_a", 1.8);
  const b = graphValue("g_math_opt_b", 0.5);
  setGraphLabel("v_math_opt_a", a, 1);
  setGraphLabel("v_math_opt_b", b, 1);

  const fx = (x) => 0.06 * x ** 4 - a * x * x + b * x + 1;
  const dfx = (x) => 0.24 * x ** 3 - 2 * a * x + b;
  const ddfx = (x) => 0.72 * x * x - 2 * a;
  const curve = Array.from({ length: 240 }, (_, index) => {
    const x = -5 + (10 * index) / 239;
    return { x, y: fx(x) };
  });
  const yValues = curve.map((point) => point.y);
  const plot = setupGraphCanvas("x", "f(x)", {
    xMin: -5,
    xMax: 5,
    yMin: Math.min(...yValues) - 1,
    yMax: Math.max(...yValues) + 1
  });
  if (!plot) return;

  drawPolyline(plot, curve, { color: plot.col.accent, lineWidth: 2.8 });
  const roots = findZeroCrossings(dfx, -5, 5, 420);
  const labels = [];
  roots.forEach((root, index) => {
    const second = ddfx(root);
    const kind = second < -0.05 ? "lokales Maximum" : second > 0.05 ? "lokales Minimum" : "stationaer";
    const y = fx(root);
    drawPointMarker(plot, root, y, `S${index + 1}`, second < 0 ? plot.col.warn : plot.col.accent2);
    labels.push(`${kind} bei x ≈ ${root.toFixed(2)}`);
  });
  drawLegend(plot, [
    { label: "Zielfunktion", color: plot.col.accent },
    { label: "Maxima / Minima", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Stationaere Punkte entstehen dort, wo <strong>f'(x) = 0</strong>. Fuer die aktuelle Funktion wurden ${roots.length ? labels.join("; ") : "keine stationaeren Punkte im dargestellten Bereich"} gefunden. Genau danach folgt die Klassifikation ueber <strong>f''(x)</strong>.`);
}

function drawMathMultivar() {
  const k = graphValue("g_math_multi_k", 1.2);
  const c = graphValue("g_math_multi_c", 0.2);
  const x0 = graphValue("g_math_multi_x0", 1);
  const y0 = graphValue("g_math_multi_y0", 0.5);
  setGraphLabel("v_math_multi_k", k, 1);
  setGraphLabel("v_math_multi_c", c, 2);
  setGraphLabel("v_math_multi_x0", x0, 2);
  setGraphLabel("v_math_multi_y0", y0, 2);

  const q = (x, y) => x * x + k * y * y + c * x * y;
  const plot = setupGraphCanvas("x", "y", {
    xMin: -3,
    xMax: 3,
    yMin: -3,
    yMax: 3
  });
  if (!plot) return;

  const levels = [0.8, 1.6, 2.8, 4.2, 5.8];
  levels.forEach((level, levelIndex) => {
    const points = [];
    for (let angleIndex = 0; angleIndex <= 160; angleIndex += 1) {
      const angle = (Math.PI * 2 * angleIndex) / 160;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const denom = cos * cos + k * sin * sin + c * cos * sin;
      if (denom <= 0.05) continue;
      const r = Math.sqrt(level / denom);
      points.push({ x: r * cos, y: r * sin });
    }
    drawPolyline(plot, points, {
      color: levelIndex === levels.length - 1 ? plot.col.accent : "rgba(124,58,237,0.55)",
      lineWidth: levelIndex === levels.length - 1 ? 2.4 : 1.6
    });
  });

  const gradX = 2 * x0 + c * y0;
  const gradY = 2 * k * y0 + c * x0;
  const scale = 0.45 / Math.max(0.6, Math.hypot(gradX, gradY));
  drawPointMarker(plot, x0, y0, "P", plot.col.warn);
  drawSegment(plot, x0, y0, x0 + gradX * scale, y0 + gradY * scale, plot.col.accent2, 2.5);
  drawPointMarker(plot, x0 + gradX * scale, y0 + gradY * scale, "∇f", plot.col.accent2);
  drawLegend(plot, [
    { label: "Levelkurven", color: plot.col.accent },
    { label: "Gradient", color: plot.col.accent2, point: true },
    { label: "gewahlter Punkt", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Im Punkt <strong>P = (${x0.toFixed(2)}, ${y0.toFixed(2)})</strong> gilt <strong>f(P) = ${q(x0, y0).toFixed(2)}</strong> und der Gradient ist <strong>∇f(P) = (${gradX.toFixed(2)}, ${gradY.toFixed(2)})</strong>. Der Gradient steht senkrecht auf der Levelkurve und zeigt die Richtung des staerksten Anstiegs.`);
}

function drawMathLagrange() {
  const m = graphValue("g_math_lag_m", 8);
  const a = graphValue("g_math_lag_a", 1);
  setGraphLabel("v_math_lag_m", m, 1);
  setGraphLabel("v_math_lag_a", a, 1);

  const xMax = Math.max(4, m * 1.12);
  const yMax = Math.max(4, (m / a) * 1.12);
  const plot = setupGraphCanvas("x", "y", {
    xMin: 0,
    xMax,
    yMin: 0,
    yMax
  });
  if (!plot) return;

  const optimum = { x: m / 2, y: m / (2 * a) };
  const levels = [0.3, 0.55, 0.8, 1].map((factor) => factor * optimum.x * optimum.y);
  levels.forEach((level, index) => {
    const points = [];
    for (let i = 0; i <= 220; i += 1) {
      const x = 0.2 + (xMax - 0.2) * (i / 220);
      const y = level / x;
      if (y >= 0 && y <= yMax) points.push({ x, y });
    }
    drawPolyline(plot, points, {
      color: index === levels.length - 1 ? plot.col.accent : "rgba(124,58,237,0.42)",
      lineWidth: index === levels.length - 1 ? 2.5 : 1.4
    });
  });

  drawSegment(plot, 0, m / a, m, 0, plot.col.accent2, 2.4);
  drawPointMarker(plot, optimum.x, optimum.y, "Optimum", plot.col.warn);
  drawLegend(plot, [
    { label: "Niveaukurven von x·y", color: plot.col.accent },
    { label: "Nebenbedingung x + ay = m", color: plot.col.accent2 },
    { label: "Tangentialpunkt", color: plot.col.warn, point: true }
  ]);

  const lambda = optimum.y;
  updateGraphInfo(`<strong>Interpretation:</strong> Unter der Nebenbedingung <strong>x + ${a.toFixed(1)}y = ${m.toFixed(1)}</strong> liegt das Tangentialoptimum bei <strong>x* = ${optimum.x.toFixed(2)}</strong> und <strong>y* = ${optimum.y.toFixed(2)}</strong>. Der zugehoerige Lagrange-Multiplikator ist hier <strong>λ = ${lambda.toFixed(2)}</strong>.`);
}

function drawMathIntegral() {
  let a = graphValue("g_math_int_a", 0.5);
  let b = graphValue("g_math_int_b", 4);
  const n = Math.max(2, Math.round(graphValue("g_math_int_n", 8)));
  if (b <= a) [a, b] = [b, a];
  if (Math.abs(b - a) < 0.25) b = a + 0.25;
  setGraphLabel("v_math_int_a", a, 2);
  setGraphLabel("v_math_int_b", b, 2);
  setGraphLabel("v_math_int_n", n, 0);

  const fx = (x) => 1.5 + 0.45 * x + Math.sin(x);
  const antiderivative = (x) => 1.5 * x + 0.225 * x * x - Math.cos(x);
  const curve = Array.from({ length: 260 }, (_, index) => {
    const x = 0 + (6.5 * index) / 259;
    return { x, y: fx(x) };
  });
  const plot = setupGraphCanvas("x", "f(x)", {
    xMin: 0,
    xMax: 6.5,
    yMin: 0,
    yMax: Math.max(...curve.map((point) => point.y)) + 1
  });
  if (!plot) return;

  const areaPoints = [{ x: a, y: 0 }];
  for (let i = 0; i <= 120; i += 1) {
    const x = a + ((b - a) * i) / 120;
    areaPoints.push({ x, y: fx(x) });
  }
  areaPoints.push({ x: b, y: 0 });
  drawFilledPolygon(plot, areaPoints, { fill: "rgba(124,58,237,0.22)", stroke: "rgba(124,58,237,0.55)", lineWidth: 1.4 });
  drawPolyline(plot, curve, { color: plot.col.accent, lineWidth: 2.7 });

  const dx = (b - a) / n;
  let approx = 0;
  for (let i = 0; i < n; i += 1) {
    const xLeft = a + i * dx;
    const midpoint = xLeft + dx / 2;
    const height = fx(midpoint);
    approx += height * dx;
    plot.ctx.save();
    plot.ctx.fillStyle = "rgba(92,240,255,0.18)";
    plot.ctx.strokeStyle = "rgba(92,240,255,0.55)";
    plot.ctx.lineWidth = 1;
    const leftPx = plot.px(xLeft);
    const rightPx = plot.px(xLeft + dx);
    const topPy = plot.py(height);
    const basePy = plot.py(0);
    plot.ctx.fillRect(leftPx, topPy, rightPx - leftPx, basePy - topPy);
    plot.ctx.strokeRect(leftPx, topPy, rightPx - leftPx, basePy - topPy);
    plot.ctx.restore();
  }

  const exact = antiderivative(b) - antiderivative(a);
  drawLegend(plot, [
    { label: "Funktion", color: plot.col.accent },
    { label: "Integralfläche", color: plot.col.accent, point: false },
    { label: "Mittelpunkt-Rechtecke", color: plot.col.accent2 }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Das bestimmte Integral zwischen <strong>a = ${a.toFixed(2)}</strong> und <strong>b = ${b.toFixed(2)}</strong> betraegt hier exakt <strong>${exact.toFixed(3)}</strong>. Die Mittelpunktnaeherung mit <strong>n = ${n}</strong> Rechtecken liefert <strong>${approx.toFixed(3)}</strong>.`);
}

function drawIwbRicardo() {
  const homeOc = graphValue("g_iwb_home_oc", 0.8);
  const foreignOc = graphValue("g_iwb_foreign_oc", 1.6);
  setGraphLabel("v_iwb_home_oc", homeOc, 1);
  setGraphLabel("v_iwb_foreign_oc", foreignOc, 1);

  const labor = 100;
  const homeX = labor * homeOc;
  const foreignX = labor * foreignOc;
  const xMax = Math.max(homeX, foreignX) * 1.08;
  const plot = setupGraphCanvas("Gut X", "Gut Y", {
    xMin: 0,
    xMax,
    yMin: 0,
    yMax: 110
  });
  if (!plot) return;

  drawPolyline(plot, [{ x: 0, y: labor }, { x: homeX, y: 0 }], { color: plot.col.accent, lineWidth: 2.7 });
  drawPolyline(plot, [{ x: 0, y: labor }, { x: foreignX, y: 0 }], { color: plot.col.accent2, lineWidth: 2.5, dash: [7, 5] });
  drawLegend(plot, [
    { label: "Home-PPF", color: plot.col.accent },
    { label: "Foreign-PPF", color: plot.col.accent2, dash: [7, 5] }
  ]);

  const exporter = homeOc < foreignOc ? "Home exportiert X, Foreign exportiert Y." : homeOc > foreignOc ? "Foreign exportiert X, Home exportiert Y." : "Beide Laender haben identische Opportunitaetskosten; kein komparativer Vorteil." ;
  updateGraphInfo(`<strong>Interpretation:</strong> Die Steigung der PPF misst die Opportunitaetskosten von X in Einheiten von Y. Bei <strong>OCₕ(X) = ${homeOc.toFixed(1)}</strong> und <strong>OC_f(X) = ${foreignOc.toFixed(1)}</strong> gilt: ${exporter}`);
}

function drawIwbTariff() {
  const pw = graphValue("g_iwb_pw", 7);
  const tariff = graphValue("g_iwb_tariff", 2);
  setGraphLabel("v_iwb_pw", pw, 1);
  setGraphLabel("v_iwb_tariff", tariff, 1);

  const demand = Array.from({ length: 140 }, (_, index) => {
    const q = index;
    return { x: q, y: Math.max(0, (120 - q) / 6) };
  });
  const supply = Array.from({ length: 140 }, (_, index) => {
    const q = index;
    return { x: q, y: Math.max(0, (q - 10) / 5) };
  });
  const priceTariff = pw + tariff;
  const qdFree = Math.max(0, 120 - 6 * pw);
  const qsFree = Math.max(0, 10 + 5 * pw);
  const qdTariff = Math.max(0, 120 - 6 * priceTariff);
  const qsTariff = Math.max(0, 10 + 5 * priceTariff);
  const importsFree = Math.max(0, qdFree - qsFree);
  const importsTariff = Math.max(0, qdTariff - qsTariff);

  const plot = setupGraphCanvas("Menge", "Preis", {
    xMin: 0,
    xMax: 125,
    yMin: 0,
    yMax: 20
  });
  if (!plot) return;

  drawPolyline(plot, demand, { color: plot.col.accent, lineWidth: 2.7 });
  drawPolyline(plot, supply, { color: plot.col.accent2, lineWidth: 2.5 });
  drawHorizontalMarker(plot, pw, "Pw", plot.col.muted);
  drawHorizontalMarker(plot, priceTariff, "Pw+t", plot.col.warn);
  drawLegend(plot, [
    { label: "Nachfrage", color: plot.col.accent },
    { label: "Angebot", color: plot.col.accent2 },
    { label: "Zollpreis", color: plot.col.warn }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Bei Weltmarktpreis <strong>${pw.toFixed(1)}</strong> und Zoll <strong>${tariff.toFixed(1)}</strong> steigt der Inlandspreis auf <strong>${priceTariff.toFixed(1)}</strong>. Die Importe fallen von <strong>${importsFree.toFixed(1)}</strong> auf <strong>${importsTariff.toFixed(1)}</strong>; genau daraus ergeben sich Konsumentenverluste, Produzentengewinne und Zolleinnahmen.`);
}

function drawIwbUip() {
  const iHome = graphValue("g_iwb_i_home", 4);
  const iForeign = graphValue("g_iwb_i_foreign", 2);
  const eExpected = graphValue("g_iwb_e_exp", 1.2);
  setGraphLabel("v_iwb_i_home", iHome, 1);
  setGraphLabel("v_iwb_i_foreign", iForeign, 1);
  setGraphLabel("v_iwb_e_exp", eExpected, 2);

  const foreignReturn = (e) => iForeign + ((eExpected - e) / e) * 100;
  const curve = Array.from({ length: 150 }, (_, index) => {
    const e = 0.7 + (index * 1.3) / 149;
    return { x: e, y: foreignReturn(e) };
  });
  const equilibrium = eExpected * ((1 + iForeign / 100) / (1 + iHome / 100));
  const plot = setupGraphCanvas("aktueller Wechselkurs E", "erwarteter Ertrag (%)", {
    xMin: 0.7,
    xMax: 2.0,
    yMin: Math.min(-8, ...curve.map((point) => point.y)) - 1,
    yMax: Math.max(12, ...curve.map((point) => point.y), iHome) + 1
  });
  if (!plot) return;

  drawPolyline(plot, curve, { color: plot.col.accent, lineWidth: 2.7 });
  drawHorizontalMarker(plot, iHome, "Inland", plot.col.accent2);
  if (equilibrium >= 0.7 && equilibrium <= 2.0) {
    drawVerticalMarker(plot, equilibrium, "E*", plot.col.warn);
    drawPointMarker(plot, equilibrium, iHome, "A", plot.col.warn);
  }
  drawLegend(plot, [
    { label: "Auslandsertrag", color: plot.col.accent },
    { label: "Inlandsertrag", color: plot.col.accent2 },
    { label: "UIP-Gleichgewicht", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Bei <strong>i = ${iHome.toFixed(1)}%</strong>, <strong>i* = ${iForeign.toFixed(1)}%</strong> und <strong>Eᵉ = ${eExpected.toFixed(2)}</strong> liegt der UIP-Gleichgewichtskurs bei etwa <strong>${equilibrium.toFixed(3)}</strong>. Ein hoeherer heutiger Kurs senkt den erwarteten Auslandsertrag, weil die erwartete Abwertung kleiner wird.`);
}

function drawIwbMoney() {
  const muHome = graphValue("g_iwb_mu_home", 6);
  const muForeign = graphValue("g_iwb_mu_foreign", 3);
  const growthGap = graphValue("g_iwb_growth_gap", 0);
  setGraphLabel("v_iwb_mu_home", muHome, 1);
  setGraphLabel("v_iwb_mu_foreign", muForeign, 1);
  setGraphLabel("v_iwb_growth_gap", growthGap, 1);

  const gForeign = 2;
  const gHome = 2 + growthGap;
  const piHome = muHome - gHome;
  const piForeign = muForeign - gForeign;
  const depreciation = piHome - piForeign;

  const home = [];
  const foreign = [];
  const exchange = [];
  let pHome = 100;
  let pForeign = 100;
  let e = 100;
  for (let t = 0; t <= 5; t += 1) {
    if (t > 0) {
      pHome *= 1 + piHome / 100;
      pForeign *= 1 + piForeign / 100;
      e *= 1 + depreciation / 100;
    }
    home.push({ x: t, y: pHome });
    foreign.push({ x: t, y: pForeign });
    exchange.push({ x: t, y: e });
  }

  const maxY = Math.max(...home.map((point) => point.y), ...foreign.map((point) => point.y), ...exchange.map((point) => point.y)) + 8;
  const minY = Math.min(...home.map((point) => point.y), ...foreign.map((point) => point.y), ...exchange.map((point) => point.y)) - 8;
  const plot = setupGraphCanvas("Periode", "Index (t0 = 100)", {
    xMin: 0,
    xMax: 5,
    yMin: minY,
    yMax: maxY
  });
  if (!plot) return;

  drawPolyline(plot, home, { color: plot.col.accent, lineWidth: 2.7 });
  drawPolyline(plot, foreign, { color: plot.col.accent2, lineWidth: 2.4 });
  drawPolyline(plot, exchange, { color: plot.col.warn, lineWidth: 2.2, dash: [8, 5] });
  drawLegend(plot, [
    { label: "Preisniveau Home", color: plot.col.accent },
    { label: "Preisniveau Foreign", color: plot.col.accent2 },
    { label: "nominaler Wechselkurs", color: plot.col.warn, dash: [8, 5] }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Mit <strong>πₕ = ${piHome.toFixed(1)}%</strong>, <strong>π_f = ${piForeign.toFixed(1)}%</strong> und einer PPP-kompatiblen nominalen Abwertung von <strong>${depreciation.toFixed(1)}%</strong> pro Periode laufen Preisniveau und Wechselkurs genau so auseinander, wie es die monetare Langfristlogik vorhersagt.`);
}

function drawIwbOvershooting() {
  const eLong = graphValue("g_iwb_e_long", 1.2);
  const overshootPct = graphValue("g_iwb_overshoot", 18);
  setGraphLabel("v_iwb_e_long", eLong, 2);
  setGraphLabel("v_iwb_overshoot", overshootPct, 0);

  const eShort = eLong * (1 + overshootPct / 100);
  const path = Array.from({ length: 9 }, (_, index) => {
    if (index === 0) return { x: 0, y: 1.0 };
    const decay = Math.exp(-0.5 * (index - 1));
    return { x: index, y: eLong + (eShort - eLong) * decay };
  });
  const plot = setupGraphCanvas("Zeit", "Wechselkurs E", {
    xMin: 0,
    xMax: 8,
    yMin: Math.min(0.9, eLong - 0.1),
    yMax: Math.max(eShort + 0.08, 1.35)
  });
  if (!plot) return;

  drawPolyline(plot, path, { color: plot.col.accent, lineWidth: 2.7 });
  drawHorizontalMarker(plot, eLong, "E langfristig", plot.col.accent2);
  drawPointMarker(plot, 1, eShort, "Schock", plot.col.warn);
  drawLegend(plot, [
    { label: "Wechselkurspfad", color: plot.col.accent },
    { label: "Langfristiger Kurs", color: plot.col.accent2 },
    { label: "Overshoot", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Der Kurs springt nach dem monetaren Schock zunaechst auf <strong>${eShort.toFixed(3)}</strong> und kehrt dann schrittweise zum langfristigen Niveau <strong>${eLong.toFixed(3)}</strong> zurueck. Genau diese kurzfristige Ueberreaktion nennt der Kurs Overshooting.`);
}

function drawIwbTrilemma() {
  const regime = Math.round(graphValue("g_iwb_regime", 0));
  const labels = [
    { title: "Fixkurs + Kapitalmobilitaet", sacrifice: "geldpolitische Autonomie", note: "Der Inlandszins muss dem Auslandszins folgen." },
    { title: "Fixkurs + Geldpolitik", sacrifice: "freie Kapitalmobilitaet", note: "Kapitalverkehr muss begrenzt werden, damit der Zins unabhaengig bleibt." },
    { title: "Kapitalmobilitaet + Geldpolitik", sacrifice: "fester Wechselkurs", note: "Der Wechselkurs muss flexibel reagieren, damit der Zins autonom gesetzt werden kann." }
  ];
  const current = labels[Math.max(0, Math.min(labels.length - 1, regime))];
  setGraphLabel("v_iwb_regime", regime, 0, () => current.title);

  const canvas = document.getElementById("graph_canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = Math.max(520, Math.round(canvas.clientWidth || 800));
  const height = Math.max(340, Math.round(canvas.clientHeight || 430));
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const col = graphPalette();
  const top = { x: width / 2, y: 64 };
  const left = { x: 144, y: height - 92 };
  const right = { x: width - 144, y: height - 92 };
  const activePairs = [
    [top, left],
    [top, right],
    [left, right]
  ][regime];

  ctx.strokeStyle = col.border;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(top.x, top.y);
  ctx.lineTo(left.x, left.y);
  ctx.lineTo(right.x, right.y);
  ctx.closePath();
  ctx.stroke();

  ctx.strokeStyle = col.accent;
  ctx.lineWidth = 4.5;
  ctx.beginPath();
  ctx.moveTo(activePairs[0].x, activePairs[0].y);
  ctx.lineTo(activePairs[1].x, activePairs[1].y);
  ctx.stroke();

  [
    [top, "Fixer Wechselkurs"],
    [left, "Kapitalmobilitaet"],
    [right, "Geldpolitik"]
  ].forEach(([point, label]) => {
    ctx.fillStyle = (activePairs[0] === point || activePairs[1] === point) ? col.accent : col.accent2;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = col.text;
    ctx.font = `13px ${col.mono}`;
    ctx.textAlign = "center";
    ctx.fillText(label, point.x, point === top ? point.y - 18 : point.y + 28);
  });

  updateGraphInfo(`<strong>Interpretation:</strong> Gewaehlt ist <strong>${current.title}</strong>. Aufgegeben wird <strong>${current.sacrifice}</strong>. ${current.note}`);
}

function drawFinanceLiquidity() {
  const start = graphValue("g_fin_start", 40);
  const ops = graphValue("g_fin_ops", 55);
  const invest = graphValue("g_fin_invest", 80);
  setGraphLabel("v_fin_start", start, 0);
  setGraphLabel("v_fin_ops", ops, 0);
  setGraphLabel("v_fin_invest", invest, 0);

  const inflows = [ops - 5, ops, ops + 5, ops + 10];
  const outflows = [34, 36 + invest, 42, 48];
  const available = [{ x: 0, y: start }];
  const needed = [{ x: 0, y: 0 }];
  const balance = [{ x: 0, y: start }];
  let cumIn = start;
  let cumOut = 0;

  for (let q = 1; q <= 4; q += 1) {
    cumIn += inflows[q - 1];
    cumOut += outflows[q - 1];
    available.push({ x: q, y: cumIn });
    needed.push({ x: q, y: cumOut });
    balance.push({ x: q, y: cumIn - cumOut });
  }

  const minBalance = Math.min(...balance.map((point) => point.y));
  const maxValue = Math.max(...available.map((point) => point.y), ...needed.map((point) => point.y));
  const plot = setupGraphCanvas("Quartal", "kumulierte Mittel / Liquiditaet", {
    xMin: 0,
    xMax: 4,
    yMin: Math.min(-60, minBalance - 20),
    yMax: maxValue + 25
  });
  if (!plot) return;

  drawPolyline(plot, available, { color: plot.col.accent, lineWidth: 2.7 });
  drawPolyline(plot, needed, { color: plot.col.accent2, lineWidth: 2.5, dash: [8, 5] });
  drawPolyline(plot, balance, { color: plot.col.warn, lineWidth: 2.2 });
  drawHorizontalMarker(plot, 0, "Liquiditaetsgrenze", plot.col.muted);
  drawPointMarker(plot, balance[4].x, balance[4].y, "Saldo", plot.col.warn);
  drawLegend(plot, [
    { label: "kumulierte verfuegbare Mittel", color: plot.col.accent },
    { label: "kumulierte Mittelbindung", color: plot.col.accent2, dash: [8, 5] },
    { label: "Liquiditaetssaldo", color: plot.col.warn }
  ]);

  const deficit = Math.min(0, minBalance);
  updateGraphInfo(`<strong>Interpretation:</strong> Bei Anfangsbestand <strong>${start.toFixed(0)}</strong>, operativen Einzahlungen von rund <strong>${ops.toFixed(0)}</strong> je Quartal und einer Investitionsspitze von <strong>${invest.toFixed(0)}</strong> in Q2 sinkt der schlechteste Liquiditaetssaldo auf <strong>${minBalance.toFixed(1)}</strong>. ${deficit < 0 ? `Die Finanzierungsluecke betraegt in der Spitze etwa <strong>${Math.abs(deficit).toFixed(1)}</strong>.` : "Die Planung bleibt in allen Quartalen liquide."}`);
}

function drawFinanceBudget() {
  const wealth = graphValue("g_fin_wealth", 120);
  const ratePct = graphValue("g_fin_rate", 8);
  const pref = graphValue("g_fin_pref", 1.1);
  setGraphLabel("v_fin_wealth", wealth, 0);
  setGraphLabel("v_fin_rate", ratePct, 0);
  setGraphLabel("v_fin_pref", pref, 1);

  const rate = ratePct / 100;
  const budget = Array.from({ length: 121 }, (_, index) => {
    const c0 = (wealth * index) / 120;
    return { x: c0, y: Math.max(0, (wealth - c0) * (1 + rate)) };
  });

  let best = budget[0];
  let bestUtility = -Infinity;
  budget.forEach((point) => {
    const utility = Math.log(point.x + 1) + pref * Math.log(point.y + 1);
    if (utility > bestUtility) {
      bestUtility = utility;
      best = point;
    }
  });

  const plot = setupGraphCanvas("Konsum heute c₀", "Konsum morgen c₁", {
    xMin: 0,
    xMax: wealth * 1.02,
    yMin: 0,
    yMax: wealth * (1 + rate) * 1.06
  });
  if (!plot) return;

  drawPolyline(plot, budget, { color: plot.col.accent, lineWidth: 2.8 });
  drawVerticalMarker(plot, best.x, "c₀*", plot.col.warn);
  drawHorizontalMarker(plot, best.y, "c₁*", plot.col.warn);
  drawPointMarker(plot, best.x, best.y, "Optimum", plot.col.warn);
  drawLegend(plot, [
    { label: "Budgetgerade", color: plot.col.accent },
    { label: "optimales Konsumbuendel", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Bei <strong>W = ${wealth.toFixed(0)}</strong> und einem Zins von <strong>${ratePct.toFixed(0)}%</strong> liegt das markierte Konsumbuendel bei etwa <strong>c₀ = ${best.x.toFixed(1)}</strong> und <strong>c₁ = ${best.y.toFixed(1)}</strong>. Eine hoehere Zukunftspraeferenz verschiebt die Wahl entlang der Budgetgeraden zu mehr zukuenftigem Konsum.`);
}

function findApproxIrr(a0, e1, e2) {
  const npv = (r) => -a0 + e1 / (1 + r) + e2 / ((1 + r) ** 2);
  let left = 0;
  let leftValue = npv(left);
  for (let step = 1; step <= 300; step += 1) {
    const right = step / 300;
    const rightValue = npv(right);
    if (leftValue === 0) return left;
    if (leftValue * rightValue <= 0) {
      let lo = left;
      let hi = right;
      for (let i = 0; i < 40; i += 1) {
        const mid = (lo + hi) / 2;
        const midValue = npv(mid);
        if (leftValue * midValue <= 0) {
          hi = mid;
        } else {
          lo = mid;
          leftValue = midValue;
        }
      }
      return (lo + hi) / 2;
    }
    left = right;
    leftValue = rightValue;
  }
  return null;
}

function drawFinanceNpv() {
  const a0 = graphValue("g_fin_a0", 100);
  const e1 = graphValue("g_fin_e1", 50);
  const e2 = graphValue("g_fin_e2", 86);
  const evalRatePct = graphValue("g_fin_rate_eval", 10);
  setGraphLabel("v_fin_a0", a0, 0);
  setGraphLabel("v_fin_e1", e1, 0);
  setGraphLabel("v_fin_e2", e2, 0);
  setGraphLabel("v_fin_rate_eval", evalRatePct, 0);

  const npvAt = (pct) => {
    const r = pct / 100;
    return -a0 + e1 / (1 + r) + e2 / ((1 + r) ** 2);
  };
  const curve = Array.from({ length: 141 }, (_, index) => {
    const ratePct = (index * 35) / 140;
    return { x: ratePct, y: npvAt(ratePct) };
  });
  const currentNpv = npvAt(evalRatePct);
  const irr = findApproxIrr(a0, e1, e2);
  const yMin = Math.min(...curve.map((point) => point.y), 0, currentNpv) - 8;
  const yMax = Math.max(...curve.map((point) => point.y), 0, currentNpv) + 8;
  const plot = setupGraphCanvas("Zinssatz (%)", "Kapitalwert K₀", {
    xMin: 0,
    xMax: 35,
    yMin,
    yMax
  });
  if (!plot) return;

  drawPolyline(plot, curve, { color: plot.col.accent, lineWidth: 2.7 });
  drawHorizontalMarker(plot, 0, "K₀ = 0", plot.col.muted);
  drawVerticalMarker(plot, evalRatePct, "i", plot.col.accent2);
  drawPointMarker(plot, evalRatePct, currentNpv, "K₀(i)", plot.col.warn);
  if (irr !== null && irr * 100 <= 35) {
    drawVerticalMarker(plot, irr * 100, "r*", plot.col.warn);
  }
  drawLegend(plot, [
    { label: "Kapitalwertprofil", color: plot.col.accent },
    { label: "Kalkulationszins", color: plot.col.accent2 },
    { label: "aktueller Kapitalwert", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Bei <strong>A₀ = ${a0.toFixed(0)}</strong>, <strong>E₁ = ${e1.toFixed(0)}</strong>, <strong>E₂ = ${e2.toFixed(0)}</strong> und einem Kalkulationszins von <strong>${evalRatePct.toFixed(0)}%</strong> liegt der Kapitalwert bei <strong>${currentNpv.toFixed(2)}</strong>. ${irr !== null ? `Der interne Zinsfuss liegt bei rund <strong>${(irr * 100).toFixed(2)}%</strong>.` : "Im dargestellten Bereich ist keine eindeutige interne Rendite sichtbar."}`);
}

function drawFinanceUncertainty() {
  const bad = graphValue("g_fin_bad", -10);
  const good = graphValue("g_fin_good", 30);
  const safe = graphValue("g_fin_safe", 3);
  const riskAddPct = graphValue("g_fin_risk_add", 3);
  setGraphLabel("v_fin_bad", bad, 0);
  setGraphLabel("v_fin_good", good, 0);
  setGraphLabel("v_fin_safe", safe, 1);
  setGraphLabel("v_fin_risk_add", riskAddPct, 1);

  const risky = [bad, 10, good];
  const safeTrack = [safe, safe, safe];
  const riskyBars = risky.map((value, index) => ({
    x: index + 1 - 0.14,
    y: value,
    width: 0.22,
    color: "rgba(124,58,237,0.88)"
  }));
  const safeBars = safeTrack.map((value, index) => ({
    x: index + 1 + 0.14,
    y: value,
    width: 0.22,
    color: "rgba(59,130,246,0.78)"
  }));

  const riskyExpected = risky.reduce((sum, value) => sum + value, 0) / risky.length;
  const safeExpected = safe;
  const lossProbability = risky.filter((value) => value < 0).length / risky.length;
  const riskAdd = riskAddPct / 100;
  const baseRate = 0.05;
  const expectedPayoff = 100 * (1 + riskyExpected / 100);
  const riskAdjustedNpv = expectedPayoff / (1 + baseRate + riskAdd) - 100;
  const yMin = Math.min(-25, ...risky, ...safeTrack, 0) - 4;
  const yMax = Math.max(35, ...risky, ...safeTrack, 0) + 6;
  const plot = setupGraphCanvas("Umweltzustand", "Rendite (%)", {
    xMin: 0.5,
    xMax: 3.5,
    yMin,
    yMax
  });
  if (!plot) return;

  drawBars(plot, riskyBars);
  drawBars(plot, safeBars);
  drawHorizontalMarker(plot, 0, "0%", plot.col.muted);
  drawHorizontalMarker(plot, riskyExpected, "E[r riskant]", plot.col.accent);
  drawHorizontalMarker(plot, safeExpected, "r sicher", plot.col.accent2);
  drawLegend(plot, [
    { label: "riskante Anlage", color: plot.col.accent },
    { label: "sichere Anlage", color: plot.col.accent2 }
  ]);

  plot.ctx.save();
  plot.ctx.fillStyle = plot.col.text;
  plot.ctx.font = `12px ${plot.col.mono}`;
  plot.ctx.textAlign = "center";
  plot.ctx.textBaseline = "top";
  [
    { x: 1, label: "S1 schlecht" },
    { x: 2, label: "S2 mittel" },
    { x: 3, label: "S3 gut" }
  ].forEach((state) => {
    plot.ctx.fillText(state.label, plot.px(state.x), plot.height - 42);
  });
  plot.ctx.restore();

  updateGraphInfo(`<strong>Interpretation:</strong> Die riskante Anlage hat bei gleichen Wahrscheinlichkeiten einen Erwartungswert von <strong>${riskyExpected.toFixed(2)}%</strong> und eine Verlustwahrscheinlichkeit von <strong>${(lossProbability * 100).toFixed(0)}%</strong>. Die sichere Alternative liefert in jedem Zustand <strong>${safeExpected.toFixed(1)}%</strong>. Bei einem sicheren Kalkulationszins von <strong>5.0%</strong> und einem Risikozuschlag von <strong>${riskAddPct.toFixed(1)}%</strong> ergibt sich fuer einen Erwartungsrueckfluss aus 100 Geldeinheiten ein risikoadjustierter Kapitalwert von <strong>${riskAdjustedNpv.toFixed(2)}</strong>.`);
}

function drawFinanceLeverage() {
  const fkSharePct = graphValue("g_fin_fk_share", 50);
  const rfPct = graphValue("g_fin_rf", 6);
  setGraphLabel("v_fin_fk_share", fkSharePct, 0);
  setGraphLabel("v_fin_rf", rfPct, 1);

  const total = 100;
  const fk = total * (fkSharePct / 100);
  const ek = Math.max(5, total - fk);
  const rf = rfPct / 100;
  const scenarios = [0.04, 0.08, 0.12];
  const gkLine = scenarios.map((value, index) => ({ x: index + 1, y: value * 100 }));
  const ekLine = scenarios.map((value, index) => ({
    x: index + 1,
    y: ((value * total - rf * fk) / ek) * 100
  }));
  const yMin = Math.min(0, ...ekLine.map((point) => point.y), ...gkLine.map((point) => point.y)) - 4;
  const yMax = Math.max(...ekLine.map((point) => point.y), ...gkLine.map((point) => point.y)) + 4;
  const plot = setupGraphCanvas("Szenario", "Rendite (%)", {
    xMin: 0.6,
    xMax: 3.4,
    yMin,
    yMax
  });
  if (!plot) return;

  drawPolyline(plot, gkLine, { color: plot.col.accent2, lineWidth: 2.2, dash: [7, 5] });
  drawPolyline(plot, ekLine, { color: plot.col.accent, lineWidth: 2.7 });
  drawHorizontalMarker(plot, ekLine.reduce((sum, point) => sum + point.y, 0) / ekLine.length, "E[rEK]", plot.col.warn);
  ekLine.forEach((point, index) => {
    drawPointMarker(plot, point.x, point.y, `S${index + 1}`, plot.col.warn);
  });
  drawLegend(plot, [
    { label: "Gesamtkapitalrendite", color: plot.col.accent2, dash: [7, 5] },
    { label: "Eigenkapitalrendite", color: plot.col.accent },
    { label: "Szenarien", color: plot.col.warn, point: true }
  ]);

  const expected = ekLine.reduce((sum, point) => sum + point.y, 0) / ekLine.length;
  const spread = Math.max(...ekLine.map((point) => point.y)) - Math.min(...ekLine.map((point) => point.y));
  updateGraphInfo(`<strong>Interpretation:</strong> Bei einem FK-Anteil von <strong>${fkSharePct.toFixed(0)}%</strong> und <strong>rFK = ${rfPct.toFixed(1)}%</strong> liegt die erwartete Eigenkapitalrendite bei rund <strong>${expected.toFixed(2)}%</strong>. Die Spannweite zwischen schlechtem und gutem Szenario betraegt <strong>${spread.toFixed(2)}</strong> Prozentpunkte und zeigt direkt das Leverage-Risiko.`);
}

function drawMakroData() {
  const realGrowth = graphValue("g_real_growth", 2.0);
  const inflation = graphValue("g_inflation_macro", 3.0);
  setGraphLabel("v_real_growth", realGrowth, 1);
  setGraphLabel("v_inflation_macro", inflation, 1);

  const real = [];
  const nominal = [];
  const deflator = [];
  let realIndex = 100;
  let nominalIndex = 100;
  for (let t = 0; t <= 5; t += 1) {
    if (t > 0) {
      realIndex *= 1 + realGrowth / 100;
      nominalIndex *= 1 + (realGrowth + inflation) / 100;
    }
    real.push({ x: t, y: realIndex });
    nominal.push({ x: t, y: nominalIndex });
    deflator.push({ x: t, y: (nominalIndex / realIndex) * 100 });
  }

  const maxY = Math.max(...nominal.map((point) => point.y), ...deflator.map((point) => point.y)) + 8;
  const minY = Math.min(...real.map((point) => point.y), ...deflator.map((point) => point.y)) - 6;
  const plot = setupGraphCanvas("Periode t", "Index (t0 = 100)", {
    xMin: 0,
    xMax: 5,
    yMin: Math.max(70, minY),
    yMax: Math.min(180, maxY)
  });
  if (!plot) return;

  drawPolyline(plot, real, { color: plot.col.accent2, lineWidth: 2.5 });
  drawPolyline(plot, nominal, { color: plot.col.accent, lineWidth: 2.7 });
  drawPolyline(plot, deflator, { color: plot.col.warn, lineWidth: 2.1, dash: [8, 5] });
  drawScatter(plot, [real[5], nominal[5], deflator[5]], { color: plot.col.warn, radius: 0 });
  drawPointMarker(plot, real[5].x, real[5].y, "reales BIP", plot.col.accent2);
  drawPointMarker(plot, nominal[5].x, nominal[5].y, "nominales BIP", plot.col.accent);
  drawPointMarker(plot, deflator[5].x, deflator[5].y, "Deflator", plot.col.warn);
  drawLegend(plot, [
    { label: "reales BIP", color: plot.col.accent2 },
    { label: "nominales BIP", color: plot.col.accent },
    { label: "BIP-Deflator", color: plot.col.warn, dash: [8, 5] }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Bei realem Wachstum von <strong>${realGrowth.toFixed(1)}%</strong> und Inflation von <strong>${inflation.toFixed(1)}%</strong> steigt das reale BIP nach 5 Perioden auf <strong>${real[5].y.toFixed(1)}</strong>, das nominale BIP auf <strong>${nominal[5].y.toFixed(1)}</strong>. Die Lücke zwischen beiden Reihen ist genau der Preisniveaueffekt.`);
}

function drawMakroGoods() {
  const autonomous = graphValue("g_auto_macro", 90);
  const c1 = graphValue("g_c1_macro", 0.65);
  setGraphLabel("v_auto_macro", autonomous, 0);
  setGraphLabel("v_c1_macro", c1, 2);

  const multiplier = 1 / Math.max(0.05, 1 - c1);
  const yStar = autonomous * multiplier;
  const xMax = Math.max(220, Math.min(2200, yStar * 1.15));
  const zz = [
    { x: 0, y: autonomous },
    { x: xMax, y: autonomous + c1 * xMax }
  ];
  const diag = [
    { x: 0, y: 0 },
    { x: xMax, y: xMax }
  ];
  const plot = setupGraphCanvas("Produktion Y", "Geplante Nachfrage Z", {
    xMin: 0,
    xMax,
    yMin: 0,
    yMax: xMax
  });
  if (!plot) return;

  drawPolyline(plot, diag, { color: plot.col.accent2, lineWidth: 2.2, dash: [7, 5] });
  drawPolyline(plot, zz, { color: plot.col.accent, lineWidth: 2.8 });
  drawVerticalMarker(plot, yStar, "Y*", plot.col.warn);
  drawHorizontalMarker(plot, yStar, "Z = Y", plot.col.warn);
  drawPointMarker(plot, yStar, yStar, "A", plot.col.warn);
  drawLegend(plot, [
    { label: "45-Grad-Linie", color: plot.col.accent2, dash: [7, 5] },
    { label: "ZZ-Kurve", color: plot.col.accent },
    { label: "Gleichgewicht", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Mit autonomer Nachfrage <strong>A = ${autonomous.toFixed(0)}</strong> und marginaler Konsumquote <strong>c₁ = ${c1.toFixed(2)}</strong> liegt der Multiplikator bei <strong>${multiplier.toFixed(2)}</strong> und die Gleichgewichtsproduktion bei <strong>Y* = ${yStar.toFixed(1)}</strong>. Je steiler die ZZ-Kurve, desto staerker wirkt ein Nachfrageschock auf den Output.`);
}

function drawMakroMoney() {
  const income = graphValue("g_income_money", 140);
  const realMoney = graphValue("g_real_money", 110);
  setGraphLabel("v_income_money", income, 0);
  setGraphLabel("v_real_money", realMoney, 0);

  const demand = (balances, currentIncome) => Math.max(0, 10.4 - 0.055 * balances + 0.03 * (currentIncome - 140));
  const baseLine = Array.from({ length: 120 }, (_, index) => {
    const x = 40 + (index * 160) / 119;
    return { x, y: demand(x, 140) };
  });
  const currentLine = Array.from({ length: 120 }, (_, index) => {
    const x = 40 + (index * 160) / 119;
    return { x, y: demand(x, income) };
  });
  const iStar = demand(realMoney, income);
  const plot = setupGraphCanvas("Reale Geldbestaende M/P", "Zins i (%)", {
    xMin: 40,
    xMax: 200,
    yMin: 0,
    yMax: 10.5
  });
  if (!plot) return;

  drawPolyline(plot, baseLine, { color: plot.col.muted, lineWidth: 1.8, dash: [6, 5] });
  drawPolyline(plot, currentLine, { color: plot.col.accent, lineWidth: 2.7 });
  drawVerticalMarker(plot, realMoney, "M/P", plot.col.accent2);
  drawHorizontalMarker(plot, iStar, "i*", plot.col.warn);
  drawPointMarker(plot, realMoney, iStar, "A", plot.col.warn);
  drawLegend(plot, [
    { label: "Geldnachfrage (Y = 140)", color: plot.col.muted, dash: [6, 5] },
    { label: "Aktuelle Geldnachfrage", color: plot.col.accent },
    { label: "Reales Geldangebot", color: plot.col.accent2 },
    { label: "Gleichgewicht", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Bei Einkommen <strong>Y = ${income.toFixed(0)}</strong> und realem Geldangebot <strong>M/P = ${realMoney.toFixed(0)}</strong> ergibt sich ein Gleichgewichtszins von etwa <strong>${iStar.toFixed(2)}%</strong>. Höheres Einkommen verschiebt die Geldnachfrage nach rechts bzw. oben; ein größeres reales Geldangebot senkt den Gleichgewichtszins.`);
}

function drawMakroIslm() {
  const fiscalShift = graphValue("g_fiscal_shift", 0);
  const policyRate = graphValue("g_policy_rate", 3.0);
  setGraphLabel("v_fiscal_shift", fiscalShift, 0);
  setGraphLabel("v_policy_rate", policyRate, 1);

  const baselineIs = (y) => 8.4 - 0.018 * y;
  const shiftedIs = (y) => baselineIs(y) + 0.05 * fiscalShift;
  const baselineLine = Array.from({ length: 140 }, (_, index) => {
    const x = 80 + (index * 340) / 139;
    return { x, y: baselineIs(x) };
  });
  const currentLine = Array.from({ length: 140 }, (_, index) => {
    const x = 80 + (index * 340) / 139;
    return { x, y: shiftedIs(x) };
  });
  const yStar = (8.4 + 0.05 * fiscalShift - policyRate) / 0.018;
  const plot = setupGraphCanvas("Produktion Y", "Zins i (%)", {
    xMin: 80,
    xMax: 420,
    yMin: 0,
    yMax: 9
  });
  if (!plot) return;

  drawPolyline(plot, baselineLine, { color: plot.col.muted, lineWidth: 1.8, dash: [6, 5] });
  drawPolyline(plot, currentLine, { color: plot.col.accent, lineWidth: 2.7 });
  drawHorizontalMarker(plot, policyRate, "LM / i₀", plot.col.accent2);
  if (yStar >= 80 && yStar <= 420) {
    drawVerticalMarker(plot, yStar, "Y*", plot.col.warn);
    drawPointMarker(plot, yStar, policyRate, "A", plot.col.warn);
  }
  drawLegend(plot, [
    { label: "IS (Basis)", color: plot.col.muted, dash: [6, 5] },
    { label: "IS (aktuell)", color: plot.col.accent },
    { label: "LM bei Zinssteuerung", color: plot.col.accent2 },
    { label: "Gleichgewicht", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Ein Fiskalimpuls von <strong>${fiscalShift.toFixed(0)}</strong> verschiebt die IS-Kurve, waehrend die Zentralbank den Zins auf <strong>${policyRate.toFixed(1)}%</strong> fixiert. Daraus ergibt sich eine kurzfristige Gleichgewichtsproduktion von etwa <strong>${yStar.toFixed(1)}</strong>. Höhere Staatsausgaben oder niedrigere Steuern schieben die IS nach rechts, ein niedrigerer Zielzins hebt den Output zusaetzlich.`);
}

function drawMakroRisk() {
  const premium = graphValue("g_risk_premium", 1.0);
  const realRate = graphValue("g_policy_real", 1.5);
  setGraphLabel("v_risk_premium", premium, 2);
  setGraphLabel("v_policy_real", realRate, 2);

  const baseIs = (y) => 6.5 - 0.02 * y;
  const currentIs = (y) => baseIs(y) - 0.7 * premium;
  const baselineLine = Array.from({ length: 140 }, (_, index) => {
    const x = 80 + (index * 280) / 139;
    return { x, y: baseIs(x) };
  });
  const currentLine = Array.from({ length: 140 }, (_, index) => {
    const x = 80 + (index * 280) / 139;
    return { x, y: currentIs(x) };
  });
  const yBase = (6.5 - realRate) / 0.02;
  const yCurrent = (6.5 - realRate - 0.7 * premium) / 0.02;
  const creditRate = realRate + premium;
  const plot = setupGraphCanvas("Produktion Y", "Realzins r (%)", {
    xMin: 80,
    xMax: 360,
    yMin: 0,
    yMax: 7
  });
  if (!plot) return;

  drawPolyline(plot, baselineLine, { color: plot.col.muted, lineWidth: 1.8, dash: [6, 5] });
  drawPolyline(plot, currentLine, { color: plot.col.accent, lineWidth: 2.7 });
  drawHorizontalMarker(plot, realRate, "r₀", plot.col.accent2);
  if (yBase >= 80 && yBase <= 360) drawPointMarker(plot, yBase, realRate, "Basis", plot.col.muted);
  if (yCurrent >= 80 && yCurrent <= 360) {
    drawVerticalMarker(plot, yCurrent, "Y neu", plot.col.warn);
    drawPointMarker(plot, yCurrent, realRate, "A", plot.col.warn);
  }
  drawLegend(plot, [
    { label: "IS ohne Risikoschock", color: plot.col.muted, dash: [6, 5] },
    { label: "IS mit Praemie x", color: plot.col.accent },
    { label: "LM / Zielrealzins", color: plot.col.accent2 },
    { label: "Neues Gleichgewicht", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Bei Zielrealzins <strong>r₀ = ${realRate.toFixed(2)}%</strong> und Risikopraemie <strong>x = ${premium.toFixed(2)}%</strong> muessen Unternehmen und Haushalte effektiv einen Kreditzins von <strong>${creditRate.toFixed(2)}%</strong> tragen. Das drückt die Nachfrage und senkt die Produktion von rund <strong>${yBase.toFixed(1)}</strong> auf <strong>${yCurrent.toFixed(1)}</strong>, wenn die Zentralbank nicht reagiert.`);
}

function drawMakroLabor() {
  const zFactor = graphValue("g_z_factor", 0.08);
  const markup = graphValue("g_markup", 0.18);
  setGraphLabel("v_z_factor", zFactor, 2);
  setGraphLabel("v_markup", markup, 2);

  const ws = (u) => 1.0 + zFactor - 1.8 * u;
  const ps = 1 / (1 + markup);
  const un = Math.min(0.32, Math.max(0.01, (1.0 + zFactor - ps) / 1.8));
  const wsLine = Array.from({ length: 140 }, (_, index) => {
    const uPct = (index * 32) / 139;
    return { x: uPct, y: ws(uPct / 100) };
  });
  const plot = setupGraphCanvas("Arbeitslosenquote u (%)", "Reallohn W/P", {
    xMin: 0,
    xMax: 32,
    yMin: 0.65,
    yMax: 1.15
  });
  if (!plot) return;

  drawPolyline(plot, wsLine, { color: plot.col.accent, lineWidth: 2.7 });
  drawHorizontalMarker(plot, ps, "PS", plot.col.accent2);
  drawVerticalMarker(plot, un * 100, "uₙ", plot.col.warn);
  drawPointMarker(plot, un * 100, ps, "A", plot.col.warn);
  drawLegend(plot, [
    { label: "WS-Kurve", color: plot.col.accent },
    { label: "PS-Kurve", color: plot.col.accent2 },
    { label: "Natuerliche Quote", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Höheres <strong>z = ${zFactor.toFixed(2)}</strong> verschiebt die Lohnsetzung nach oben, höheres <strong>μ = ${markup.toFixed(2)}</strong> drueckt die Preissetzung nach unten. Daraus ergibt sich eine natuerliche Arbeitslosenquote von rund <strong>${(un * 100).toFixed(1)}%</strong>. Genau dieser Schnittpunkt bestimmt spaeter auch das Produktionspotenzial.`);
}

function drawMakroPhillips() {
  const piExpected = graphValue("g_pi_expected", 2.0);
  const uNatural = graphValue("g_u_natural", 6.0);
  const uActual = graphValue("g_u_actual", 5.0);
  setGraphLabel("v_pi_expected", piExpected, 1);
  setGraphLabel("v_u_natural", uNatural, 1);
  setGraphLabel("v_u_actual", uActual, 1);

  const alpha = 0.6;
  const curve = Array.from({ length: 140 }, (_, index) => {
    const u = (index * 14) / 139;
    return { x: u, y: piExpected - alpha * (u - uNatural) };
  });
  const piActual = piExpected - alpha * (uActual - uNatural);
  const maxPi = Math.max(...curve.map((point) => point.y), piActual, piExpected) + 0.8;
  const minPi = Math.min(...curve.map((point) => point.y), piActual, piExpected) - 0.8;
  const plot = setupGraphCanvas("Arbeitslosenquote u (%)", "Inflation π (%)", {
    xMin: 0,
    xMax: 14,
    yMin: Math.max(-4, minPi),
    yMax: Math.min(12, maxPi)
  });
  if (!plot) return;

  drawPolyline(plot, curve, { color: plot.col.accent, lineWidth: 2.7 });
  drawHorizontalMarker(plot, piExpected, "πᵉ", plot.col.accent2);
  drawVerticalMarker(plot, uNatural, "uₙ", plot.col.muted);
  drawVerticalMarker(plot, uActual, "u", plot.col.warn);
  drawPointMarker(plot, uActual, piActual, "A", plot.col.warn);
  drawLegend(plot, [
    { label: "Kurzfristige Phillips-Kurve", color: plot.col.accent },
    { label: "Erwartete Inflation", color: plot.col.accent2 },
    { label: "Beobachtetes Gleichgewicht", color: plot.col.warn, point: true }
  ]);

  updateGraphInfo(`<strong>Interpretation:</strong> Bei erwarteter Inflation <strong>${piExpected.toFixed(1)}%</strong> und natürlicher Arbeitslosenquote <strong>${uNatural.toFixed(1)}%</strong> führt eine tatsaechliche Arbeitslosenquote von <strong>${uActual.toFixed(1)}%</strong> zu einer Inflation von <strong>${piActual.toFixed(2)}%</strong>. Liegt <strong>u unter uₙ</strong>, dann liegt die tatsaechliche Inflation über der erwarteten; liegt <strong>u über uₙ</strong>, faellt die Inflation darunter.`);
}

function drawStatsDistribution() {
  const mu = graphValue("g_loc", 0);
  const sigma = graphValue("g_spread", 1.1);
  const skew = graphValue("g_skew", 0.4);
  setGraphLabel("v_loc", mu, 1);
  setGraphLabel("v_spread", sigma, 1);
  setGraphLabel("v_skew", skew, 1);

  const xs = Array.from({ length: 13 }, (_, index) => mu - 3 * sigma + (index * 6 * sigma) / 12);
  const raw = xs.map((x) => normalPdf(x, mu, sigma) * Math.exp((skew * (x - mu)) / (3 * sigma)));
  const total = raw.reduce((sum, value) => sum + value, 0);
  const bars = xs.map((x, index) => ({
    x,
    y: raw[index] / total,
    width: sigma * 0.4,
    color: "rgba(124,58,237,0.72)"
  }));
  const yMax = Math.max(...bars.map((bar) => bar.y)) * 1.35;
  const mean = mu + 0.55 * skew * sigma;
  const median = mu;
  const plot = setupGraphCanvas("Wert x", "relative Haeufigkeit", {
    xMin: Math.min(...xs) - sigma * 0.6,
    xMax: Math.max(...xs) + sigma * 0.6,
    yMin: 0,
    yMax
  });
  if (!plot) return;

  drawBars(plot, bars);
  drawVerticalMarker(plot, mean, "Mittelwert", plot.col.warn);
  drawVerticalMarker(plot, median, "Median", plot.col.accent2);

  const shapeText = skew > 0.2 ? "rechtsschief: Mittelwert liegt rechts vom Median" : skew < -0.2 ? "linksschief: Mittelwert liegt links vom Median" : "nahezu symmetrisch: Mittelwert und Median liegen dicht beieinander";
  updateGraphInfo(`<strong>Interpretation:</strong> Mit μ = ${mu.toFixed(1)}, σ = ${sigma.toFixed(1)} und Schiefe = ${skew.toFixed(1)} wirkt die Verteilung <strong>${shapeText}</strong>. Genau diese Kombination aus Lage, Streuung und Form ist der Kern der deskriptiven Statistik.`);
}

function drawStatsCorrelation() {
  const corr = graphValue("g_corr", 0.55);
  const outlier = Math.round(graphValue("g_outlier", 0));
  setGraphLabel("v_corr", corr, 2);
  setGraphLabel("v_outlier", outlier, 0, (value) => (value ? "an" : "aus"));

  const points = Array.from({ length: 24 }, (_, index) => {
    const x = -3 + index * 0.26;
    const noise = Math.sqrt(Math.max(0.05, 1 - corr * corr)) * Math.sin((index + 1) * 1.37) * 1.3;
    return { x, y: corr * x * 1.25 + noise };
  });
  if (outlier) points.push({ x: 2.8, y: -2.7 });

  const plot = setupGraphCanvas("x", "y", {
    xMin: -3.3,
    xMax: 3.3,
    yMin: -3.3,
    yMax: 3.3
  });
  if (!plot) return;

  drawScatter(plot, points, { color: plot.col.accent2 });
  drawPolyline(plot, [{ x: -3, y: -3 * corr * 1.25 }, { x: 3, y: 3 * corr * 1.25 }], { color: plot.col.accent, lineWidth: 2.2 });
  drawVerticalMarker(plot, 0, "x̄≈0", plot.col.muted);
  drawHorizontalMarker(plot, 0, "ȳ≈0", plot.col.muted);

  const effect = outlier ? "Ein einzelner Ausreisser kann Richtung und Staerke des Zusammenhangs sichtbar verziehen." : "Ohne Ausreisser folgt die Punktwolke der eingestellten Grundrichtung deutlich sauberer.";
  updateGraphInfo(`<strong>Interpretation:</strong> Bei r = ${corr.toFixed(2)} ist der lineare Zusammenhang ${Math.abs(corr) > 0.7 ? "stark" : Math.abs(corr) > 0.35 ? "mittelstark" : "eher schwach"}. ${effect}`);
}

function drawStatsBinomial() {
  const n = Math.round(graphValue("g_n", 10));
  const p = graphValue("g_p", 0.4);
  const k = Math.min(n, Math.round(graphValue("g_k", 4)));
  setGraphLabel("v_n", n, 0);
  setGraphLabel("v_p", p, 2);
  setGraphLabel("v_k", k, 0);

  const bars = Array.from({ length: n + 1 }, (_, x) => ({
    x,
    y: binomialProbability(n, x, p),
    width: 0.72,
    color: x === k ? "#ff6b6b" : "rgba(124,58,237,0.72)"
  }));
  const plot = setupGraphCanvas("Erfolge k", "P(X = k)", {
    xMin: -0.5,
    xMax: n + 0.5,
    yMin: 0,
    yMax: Math.max(...bars.map((bar) => bar.y)) * 1.35
  });
  if (!plot) return;

  drawBars(plot, bars);
  const expected = n * p;
  const variance = n * p * (1 - p);
  drawVerticalMarker(plot, expected, "E[X]", plot.col.accent2);
  updateGraphInfo(`<strong>Interpretation:</strong> Bei n = ${n} und p = ${p.toFixed(2)} liegt der Erwartungswert bei <strong>${expected.toFixed(2)}</strong>, die Varianz bei <strong>${variance.toFixed(2)}</strong> und die markierte Wahrscheinlichkeit P(X = ${k}) bei <strong>${bars[k].y.toFixed(3)}</strong>.`);
}

function drawStatsCi() {
  const xbar = graphValue("g_xbar", 2.4);
  const mu0 = graphValue("g_mu0", 2.0);
  const se = graphValue("g_se", 0.4);
  const conf = Math.round(graphValue("g_conf", 95));
  setGraphLabel("v_xbar", xbar, 1);
  setGraphLabel("v_mu0", mu0, 1);
  setGraphLabel("v_se", se, 2);
  setGraphLabel("v_conf", conf, 0);

  const z = confidenceToZ(conf);
  const low = xbar - z * se;
  const high = xbar + z * se;
  const xMin = Math.min(mu0, low) - 3 * se;
  const xMax = Math.max(mu0, high) + 3 * se;
  const points = Array.from({ length: 140 }, (_, index) => {
    const x = xMin + (index * (xMax - xMin)) / 139;
    return { x, y: normalPdf(x, xbar, se) };
  });
  const plot = setupGraphCanvas("Parameterwert", "Dichte", {
    xMin,
    xMax,
    yMin: 0,
    yMax: Math.max(...points.map((point) => point.y)) * 1.2
  });
  if (!plot) return;

  drawPolyline(plot, points, { color: plot.col.accent });
  drawVerticalMarker(plot, xbar, "x̄", plot.col.accent2);
  drawVerticalMarker(plot, low, "CI unten", plot.col.muted);
  drawVerticalMarker(plot, high, "CI oben", plot.col.muted);
  drawVerticalMarker(plot, mu0, "μ₀", plot.col.warn);

  const contains = mu0 >= low && mu0 <= high;
  updateGraphInfo(`<strong>Interpretation:</strong> Das ${conf}%-Intervall lautet <strong>[${low.toFixed(2)}, ${high.toFixed(2)}]</strong>. Der Vergleichswert μ₀ = ${mu0.toFixed(2)} liegt ${contains ? "<strong>innerhalb</strong>" : "<strong>außerhalb</strong>"} des Intervalls.`);
}

function drawStatsTest() {
  const mean = graphValue("g_test_mean", 2.6);
  const mu0 = graphValue("g_test_null", 2.0);
  const se = graphValue("g_test_se", 0.35);
  const alpha = Math.round(graphValue("g_alpha_level", 5));
  setGraphLabel("v_test_mean", mean, 1);
  setGraphLabel("v_test_null", mu0, 1);
  setGraphLabel("v_test_se", se, 2);
  setGraphLabel("v_alpha_level", alpha, 0);

  const zCrit = confidenceToZ(100 - alpha);
  const zStat = (mean - mu0) / se;
  const leftCrit = mu0 - zCrit * se;
  const rightCrit = mu0 + zCrit * se;
  const xMin = mu0 - 4.2 * se;
  const xMax = mu0 + 4.2 * se;
  const points = Array.from({ length: 140 }, (_, index) => {
    const x = xMin + (index * (xMax - xMin)) / 139;
    return { x, y: normalPdf(x, mu0, se) };
  });
  const plot = setupGraphCanvas("Pruefwert", "Dichte unter H0", {
    xMin,
    xMax,
    yMin: 0,
    yMax: Math.max(...points.map((point) => point.y)) * 1.2
  });
  if (!plot) return;

  drawPolyline(plot, points, { color: plot.col.accent });
  drawVerticalMarker(plot, leftCrit, "-krit", plot.col.muted);
  drawVerticalMarker(plot, rightCrit, "+krit", plot.col.muted);
  drawVerticalMarker(plot, mean, "beob.", plot.col.warn);
  drawVerticalMarker(plot, mu0, "μ₀", plot.col.accent2);

  const reject = Math.abs(zStat) > zCrit;
  updateGraphInfo(`<strong>Interpretation:</strong> Mit z = ${zStat.toFixed(2)} und kritischem Wert ±${zCrit.toFixed(2)} wird H₀ ${reject ? "<strong>verworfen</strong>" : "<strong>nicht verworfen</strong>"}. Die Grafik macht genau die Logik von Teststatistik, kritischem Bereich und Entscheidung sichtbar.`);
}

function drawRegressionCore({ intercept, slope, noise, pointColor, lineColor, residualColor }) {
  const points = Array.from({ length: 18 }, (_, index) => {
    const x = 0.6 + index * 0.52;
    const error = noise * Math.sin((index + 1) * 1.35);
    return { x, y: intercept + slope * x + error };
  });
  const yValues = points.map((point) => point.y).concat([intercept + slope * 0.6, intercept + slope * 9.5]);
  const plot = setupGraphCanvas("x", "y", {
    xMin: 0,
    xMax: 10,
    yMin: Math.min(...yValues) - 1.3,
    yMax: Math.max(...yValues) + 1.3
  });
  if (!plot) return null;

  drawPolyline(plot, [{ x: 0.4, y: intercept + slope * 0.4 }, { x: 9.7, y: intercept + slope * 9.7 }], { color: lineColor || plot.col.accent, lineWidth: 2.6 });
  drawScatter(plot, points, { color: pointColor || plot.col.accent2 });
  points.slice(0, 8).forEach((point) => {
    drawSegment(plot, point.x, intercept + slope * point.x, point.x, point.y, residualColor || plot.col.warn, 1.1);
  });
  return { plot, points };
}

function drawStatsRegression() {
  const b0 = graphValue("g_b0", 1.2);
  const b1 = graphValue("g_b1", 0.9);
  const noise = graphValue("g_noise", 0.7);
  setGraphLabel("v_b0", b0, 1);
  setGraphLabel("v_b1", b1, 1);
  setGraphLabel("v_noise", noise, 1);

  const graph = drawRegressionCore({
    intercept: b0,
    slope: b1,
    noise,
    pointColor: graphPalette().accent2,
    lineColor: graphPalette().accent
  });
  if (!graph) return;

  const varianceSignal = (b1 * b1 * 6.4) / ((b1 * b1 * 6.4) + noise * noise + 0.01);
  updateGraphInfo(`<strong>Interpretation:</strong> Die Punkte streuen um die Regressionsgerade <strong>y = ${b0.toFixed(1)} + ${b1.toFixed(1)}x</strong>. Bei Stoerung σ = ${noise.toFixed(1)} liegt die erklaerte Variation grob bei <strong>R² ≈ ${varianceSignal.toFixed(2)}</strong>.`);
}

function drawEconOls() {
  const b0 = graphValue("g_e_b0", 1.0);
  const b1 = graphValue("g_e_b1", 0.8);
  const sigma = graphValue("g_e_sigma", 0.8);
  setGraphLabel("v_e_b0", b0, 1);
  setGraphLabel("v_e_b1", b1, 1);
  setGraphLabel("v_e_sigma", sigma, 1);

  const graph = drawRegressionCore({
    intercept: b0,
    slope: b1,
    noise: sigma,
    pointColor: graphPalette().accent2,
    lineColor: graphPalette().accent,
    residualColor: graphPalette().warn
  });
  if (!graph) return;

  const ssr = graph.points.reduce((sum, point) => sum + (point.y - (b0 + b1 * point.x)) ** 2, 0);
  updateGraphInfo(`<strong>Interpretation:</strong> OLS waehlt die Gerade so, dass die quadrierten Residuen moeglichst klein werden. In dieser Skizze ergibt sich eine Residuenquadratsumme von rund <strong>${ssr.toFixed(2)}</strong>.`);
}

function drawEconAssumptions() {
  const bias = graphValue("g_bias", 0);
  const sigma = graphValue("g_ass_sigma", 0.7);
  setGraphLabel("v_bias", bias, 2);
  setGraphLabel("v_ass_sigma", sigma, 1);

  const intercept = 1.0;
  const slope = 0.8;
  const points = Array.from({ length: 18 }, (_, index) => {
    const x = 0.6 + index * 0.52;
    const systematic = bias * (x - 5) * 0.28;
    const noise = sigma * Math.sin((index + 1) * 1.28);
    return { x, y: intercept + slope * x + systematic + noise };
  });
  const plot = setupGraphCanvas("x", "y", {
    xMin: 0,
    xMax: 10,
    yMin: -1,
    yMax: 10
  });
  if (!plot) return;

  drawPolyline(plot, [{ x: 0.4, y: intercept + slope * 0.4 }, { x: 9.7, y: intercept + slope * 9.7 }], { color: plot.col.accent2, lineWidth: 2.2, dash: [7, 5] });
  drawPolyline(plot, [{ x: 0.4, y: intercept + (slope + bias * 0.28) * 0.4 - bias * 1.4 }, { x: 9.7, y: intercept + (slope + bias * 0.28) * 9.7 - bias * 1.4 }], { color: plot.col.accent, lineWidth: 2.6 });
  drawScatter(plot, points, { color: plot.col.warn, alpha: 0.82 });

  updateGraphInfo(`<strong>Interpretation:</strong> Die gestrichelte Linie steht fuer die saubere Struktur, die volle Linie fuer den beobachteten Zusammenhang. Bei Verletzungsgrad = <strong>${bias.toFixed(2)}</strong> ist <strong>E(u|x)=0</strong> nicht mehr plausibel; OLS wird dann systematisch verzerrt.`);
}

function drawEconSampling() {
  const n = Math.round(graphValue("g_n_obs", 80));
  const sigma = graphValue("g_sigma_u", 1.0);
  setGraphLabel("v_n_obs", n, 0);
  setGraphLabel("v_sigma_u", sigma, 1);

  const betaTrue = 1.0;
  const se = (sigma / Math.sqrt(n)) * 2.4;
  const xMin = betaTrue - 4 * se;
  const xMax = betaTrue + 4 * se;
  const points = Array.from({ length: 140 }, (_, index) => {
    const x = xMin + (index * (xMax - xMin)) / 139;
    return { x, y: normalPdf(x, betaTrue, se) };
  });
  const plot = setupGraphCanvas("moegliche β̂", "Dichte", {
    xMin,
    xMax,
    yMin: 0,
    yMax: Math.max(...points.map((point) => point.y)) * 1.2
  });
  if (!plot) return;

  drawPolyline(plot, points, { color: plot.col.accent });
  drawVerticalMarker(plot, betaTrue, "β wahr", plot.col.accent2);
  drawVerticalMarker(plot, betaTrue - 1.96 * se, "95%-Band", plot.col.muted);
  drawVerticalMarker(plot, betaTrue + 1.96 * se, "95%-Band", plot.col.muted);

  updateGraphInfo(`<strong>Interpretation:</strong> Mit n = ${n} und σ(u) = ${sigma.toFixed(1)} liegt der Standardfehler hier bei etwa <strong>${se.toFixed(3)}</strong>. Groessere Stichproben machen die Verteilung von β̂ enger, mehr Stoerung macht sie breiter.`);
}

function drawEconTest() {
  const betaHat = graphValue("g_beta_hat", 0.8);
  const betaNull = graphValue("g_beta_null", 0.0);
  const se = graphValue("g_beta_se", 0.2);
  const conf = Math.round(graphValue("g_beta_conf", 95));
  setGraphLabel("v_beta_hat", betaHat, 2);
  setGraphLabel("v_beta_null", betaNull, 2);
  setGraphLabel("v_beta_se", se, 2);
  setGraphLabel("v_beta_conf", conf, 0);

  const z = confidenceToZ(conf);
  const low = betaHat - z * se;
  const high = betaHat + z * se;
  const xMin = Math.min(low, betaNull) - 4 * se;
  const xMax = Math.max(high, betaNull) + 4 * se;
  const points = Array.from({ length: 140 }, (_, index) => {
    const x = xMin + (index * (xMax - xMin)) / 139;
    return { x, y: normalPdf(x, betaHat, se) };
  });
  const plot = setupGraphCanvas("Koeffizient", "Dichte", {
    xMin,
    xMax,
    yMin: 0,
    yMax: Math.max(...points.map((point) => point.y)) * 1.2
  });
  if (!plot) return;

  drawPolyline(plot, points, { color: plot.col.accent });
  drawVerticalMarker(plot, betaHat, "β̂", plot.col.accent2);
  drawVerticalMarker(plot, betaNull, "β₀", plot.col.warn);
  drawVerticalMarker(plot, low, "CI unten", plot.col.muted);
  drawVerticalMarker(plot, high, "CI oben", plot.col.muted);

  const significant = betaNull < low || betaNull > high;
  updateGraphInfo(`<strong>Interpretation:</strong> Das ${conf}%-Intervall fuer den Koeffizienten lautet <strong>[${low.toFixed(2)}, ${high.toFixed(2)}]</strong>. Der Nullwert β₀ = ${betaNull.toFixed(2)} ist ${significant ? "<strong>nicht</strong>" : ""} im Intervall enthalten.`);
}

function drawEconCollinearity() {
  const rho = graphValue("g_rho", 0.75);
  setGraphLabel("v_rho", rho, 2);

  const points = Array.from({ length: 24 }, (_, index) => {
    const x1 = -3 + index * 0.26;
    const x2 = rho * x1 + Math.sqrt(Math.max(0.02, 1 - rho * rho)) * Math.sin((index + 1) * 1.43);
    return { x: x1, y: x2 };
  });
  const plot = setupGraphCanvas("Regressor x1", "Regressor x2", {
    xMin: -3.3,
    xMax: 3.3,
    yMin: -3.3,
    yMax: 3.3
  });
  if (!plot) return;

  drawScatter(plot, points, { color: plot.col.accent2 });
  drawPolyline(plot, [{ x: -3, y: -3 * rho }, { x: 3, y: 3 * rho }], { color: plot.col.accent });
  const vif = 1 / Math.max(0.01, 1 - rho * rho);
  updateGraphInfo(`<strong>Interpretation:</strong> Bei ρ = ${rho.toFixed(2)} bewegen sich beide Regressoren fast gemeinsam. Das bläht Standardfehler auf; die grobe VIF-Intuition liegt hier bei <strong>${vif.toFixed(2)}</strong>.`);
}

function drawEconHetero() {
  const hetero = graphValue("g_hetero", 0.8);
  setGraphLabel("v_hetero", hetero, 1);

  const points = Array.from({ length: 22 }, (_, index) => {
    const fitted = 0.4 + index * 0.45;
    const scale = 0.25 + hetero * fitted * 0.12;
    const residual = scale * Math.sin((index + 1) * 1.41);
    return { x: fitted, y: residual };
  });
  const maxY = Math.max(...points.map((point) => Math.abs(point.y))) + 0.4;
  const plot = setupGraphCanvas("Fitted values", "Residuen", {
    xMin: 0,
    xMax: 10.5,
    yMin: -maxY,
    yMax: maxY
  });
  if (!plot) return;

  drawScatter(plot, points, { color: plot.col.accent2 });
  drawHorizontalMarker(plot, 0, "û = 0", plot.col.muted);

  updateGraphInfo(`<strong>Interpretation:</strong> Mit Hetero-Intensitaet ${hetero.toFixed(1)} faechert der Residuenplot nach rechts auf. Genau dieses Muster signalisiert <strong>nicht konstante Fehlervarianz</strong> und damit fehleranfaellige Standardfehler.`);
}

function drawEconAutocorr() {
  const rho = graphValue("g_ar", 0.55);
  setGraphLabel("v_ar", rho, 2);

  const points = [];
  let prev = 0;
  for (let t = 1; t <= 20; t += 1) {
    const shock = Math.sin(t * 1.37) * 0.55;
    const value = rho * prev + shock;
    points.push({ x: t, y: value });
    prev = value;
  }
  const maxY = Math.max(...points.map((point) => Math.abs(point.y))) + 0.4;
  const plot = setupGraphCanvas("Zeit t", "Residuum", {
    xMin: 1,
    xMax: 20,
    yMin: -maxY,
    yMax: maxY
  });
  if (!plot) return;

  drawPolyline(plot, points, { color: plot.col.accent, lineWidth: 2.4 });
  drawScatter(plot, points, { color: plot.col.accent2, radius: 3.1 });
  drawHorizontalMarker(plot, 0, "û = 0", plot.col.muted);

  updateGraphInfo(`<strong>Interpretation:</strong> Bei ρ = ${rho.toFixed(2)} häufen sich gleichgerichtete Residuen über mehrere Perioden. Positive Werte erzeugen Trägheit, negative Werte eher Zickzack-Muster; beides verletzt die Annahme unabhängiger Fehler.`);
}

function drawGeneratedGraph(kind) {
  switch (kind) {
    case "math_functions":
      drawMathFunctions();
      break;
    case "math_matrix":
      drawMathMatrix();
      break;
    case "math_derivative":
      drawMathDerivative();
      break;
    case "math_univar_opt":
      drawMathUnivarOpt();
      break;
    case "math_multivar":
      drawMathMultivar();
      break;
    case "math_lagrange":
      drawMathLagrange();
      break;
    case "math_integral":
      drawMathIntegral();
      break;
    case "iwb_ricardo":
      drawIwbRicardo();
      break;
    case "iwb_tariff":
      drawIwbTariff();
      break;
    case "iwb_uip":
      drawIwbUip();
      break;
    case "iwb_money":
      drawIwbMoney();
      break;
    case "iwb_overshooting":
      drawIwbOvershooting();
      break;
    case "iwb_trilemma":
      drawIwbTrilemma();
      break;
    case "fin_liquidity":
      drawFinanceLiquidity();
      break;
    case "fin_budget":
      drawFinanceBudget();
      break;
    case "fin_npv":
      drawFinanceNpv();
      break;
    case "fin_uncertainty":
      drawFinanceUncertainty();
      break;
    case "fin_leverage":
      drawFinanceLeverage();
      break;
    case "makro_data":
      drawMakroData();
      break;
    case "makro_goods":
      drawMakroGoods();
      break;
    case "makro_money":
      drawMakroMoney();
      break;
    case "makro_islm":
      drawMakroIslm();
      break;
    case "makro_risk":
      drawMakroRisk();
      break;
    case "makro_labor":
      drawMakroLabor();
      break;
    case "makro_phillips":
      drawMakroPhillips();
      break;
    case "stat_distribution":
      drawStatsDistribution();
      break;
    case "stat_correlation":
      drawStatsCorrelation();
      break;
    case "stat_binomial":
      drawStatsBinomial();
      break;
    case "stat_ci":
      drawStatsCi();
      break;
    case "stat_test":
      drawStatsTest();
      break;
    case "stat_regression":
      drawStatsRegression();
      break;
    case "econ_ols":
      drawEconOls();
      break;
    case "econ_assumptions":
      drawEconAssumptions();
      break;
    case "econ_sampling":
      drawEconSampling();
      break;
    case "econ_test":
      drawEconTest();
      break;
    case "econ_collinearity":
      drawEconCollinearity();
      break;
    case "econ_hetero":
      drawEconHetero();
      break;
    case "econ_autocorr":
      drawEconAutocorr();
      break;
    default:
      break;
  }
}

function createGraphs(graphPanelsById, graphConcepts, graphKindsById) {
  function renderGraphPanel(id) {
    return graphPanelsById[id] || `<div class="panel active"><div class="section-block"><h3>Visualisierung</h3><p>Dieses Thema wird hier ueber Theorie, Aufgaben und Formeln gelernt. Eine zusaetzliche Grafik ist fuer das Verstaendnis dieses Konzepts nicht noetig.</p></div></div>`;
  }

  function initGraph(id) {
    const kind = graphKindsById[id];
    if (!kind || kind === "code_workflow") return;
    drawGeneratedGraph(kind);
  }
  function noop() {}

  return {
    renderGraphPanel,
    GRAPH_CONCEPTS: graphConcepts,
    initGraph,
    drawBudget: noop,
    drawIndiff: noop,
    drawHausopt: noop,
    drawMonopol: noop,
    drawSlutsky: noop
  };
}

function createExamGraphs() {
  function noop() {}
  return {
    drawHicksGraph: noop,
    drawDemandGraph: noop,
    drawIsoquantGraph: noop
  };
}

function appendHomeSupplement(module, contentProfile) {
  const content = document.getElementById("content");
  if (!content) return;

  content.querySelector(".generated-home-addon")?.remove();

  const addon = document.createElement("div");
  addon.className = "generated-home-addon";
  const roadmapNotes = (contentProfile.roadmap || []).slice(0, 3);
  const practiceNotes = (contentProfile.practice || []).slice(0, 3);
  const homeLead = buildHomeIntro(module, contentProfile);
  addon.innerHTML = `
    <div class="generated-home-grid">
      <section class="generated-home-panel">
        <h3>Lernfokus</h3>
        <p>${escapeHtml(homeLead)}</p>
        <div class="generated-note-list">
          ${(roadmapNotes.length ? roadmapNotes : [{ title: module.title, body: module.summary }]).map((note) => `<div class="generated-note"><strong>${escapeHtml(note.title)}</strong><span>${escapeHtml(note.body)}</span></div>`).join("")}
        </div>
      </section>
      <section class="generated-home-panel">
        <h3>Praxis und Klausur</h3>
        <div class="generated-note-list">
          ${(practiceNotes.length ? practiceNotes : [{ title: "Klausurmodus", body: "Arbeite Theorie, Aufgaben und Exam-Level-Fragen immer gemeinsam durch." }]).map((note) => `<div class="generated-note"><strong>${escapeHtml(note.title)}</strong><span>${escapeHtml(note.body)}</span></div>`).join("")}
        </div>
      </section>
    </div>
    ${module.rLab ? `<section class="generated-r-lab-wrap"><div id="generatedRLabMount" class="lab-shell"></div></section>` : ""}
  `;

  content.appendChild(addon);
  if (module.rLab) {
    mountRLabs(document.getElementById("generatedRLabMount"), module);
  }
}

function buildShell(module, chapterCount) {
  return `
<div id="consentNotice" class="consent-notice" role="dialog" aria-modal="true" aria-labelledby="consentTitle">
  <p id="consentTitle"><strong>Datenspeicherung:</strong> Lernfortschritte werden ausschließlich lokal in deinem Browser gespeichert (localStorage). Keine Daten werden übertragen.</p>
  <div class="consent-actions">
    <button class="consent-btn-secondary" onclick="window.__acceptConsent()">Ignorieren</button>
    <button class="btn consent-btn-primary" onclick="window.__acceptConsent()">Verstanden &amp; Weiter</button>
  </div>
</div>

<div id="app">
  <nav id="sidebar" aria-label="Konzept-Navigation">
    <div class="sidebar-header"
         onclick="window.__renderHome()"
         role="button"
         tabindex="0"
         onkeydown="if(event.key==='Enter')window.__renderHome()"
         title="Zur Startseite"
         aria-label="Startseite">
      <a class="portal-home-link" href="../index.html" onclick="event.stopPropagation()">Alle Module</a>
      <h1>${escapeHtml(module.title)}</h1>
      <p>Georg-August-Universität Göttingen</p>
    </div>

    <div class="progress-bar-wrap">
      <div class="progress-label">
        <span>FORTSCHRITT</span>
        <span id="progressText">0 / ${chapterCount}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill" style="width:0%"></div>
      </div>
    </div>

    <div class="search-wrap">
      <input class="search-input" id="navSearch" type="search" placeholder="Konzept suchen…" aria-label="Konzepte durchsuchen" autocomplete="off" spellcheck="false">
    </div>

    <div id="navList" role="list" aria-label="Konzepte"></div>

    <div class="sidebar-footer-btns">
      <button class="sidebar-footer-btn" onclick="window.__showDashboard()" aria-label="Dashboard öffnen">Dashboard</button>
      <button class="sidebar-footer-btn" onclick="window.__startExam()" aria-label="Schnelltest starten">Schnelltest</button>
      <button class="sidebar-footer-btn" onclick="window.__showSRSReview()" aria-label="Wiederholungsrunde starten">Wiederholen</button>
    </div>
  </nav>

  <div id="main">
    <div id="topbar">
      <div id="topbar-main">
        <div class="breadcrumb" id="breadcrumb" aria-live="polite" role="navigation" aria-label="Breadcrumb">
          <button class="breadcrumb-link" onclick="window.__renderHome()">${escapeHtml(module.title)}</button> / Startseite
        </div>
        <div id="topbar-actions">
          <span id="streakBadge" class="streak-badge" style="display:none" aria-label="Lern-Streak"><span id="streakCount">0</span></span>
          <button class="focus-btn" onclick="window.__toggleFocus()" title="Fokus-Modus (F)" aria-label="Fokus-Modus umschalten">Fokus</button>
          <button class="theme-btn" id="themeToggle" onclick="window.__toggleTheme()" title="Hell/Dunkel umschalten (T)" aria-label="Farbschema wechseln">Dunkel</button>
          <button id="mobileMenuBtn" onclick="window.__toggleSidebar()" title="Navigation" aria-label="Seitenleiste öffnen" aria-expanded="false" aria-controls="sidebar">&#9776;</button>
        </div>
      </div>
      <div class="tab-row" id="tabRow" role="tablist" aria-label="Inhalt">
        <button class="tab-btn active" data-tab="theorie" role="tab" aria-selected="true" tabindex="0">Theorie</button>
        <button class="tab-btn" data-tab="graph" role="tab" aria-selected="false" tabindex="0">Grafik</button>
        <button class="tab-btn" data-tab="aufgaben" role="tab" aria-selected="false" tabindex="0">Aufgaben</button>
        <button class="tab-btn" data-tab="formeln" role="tab" aria-selected="false" tabindex="0">Formeln</button>
        <button class="tab-btn" data-tab="intuition" role="tab" aria-selected="false" tabindex="0">Intuition</button>
      </div>
    </div>

    <div id="content" role="main" aria-live="polite" aria-label="Konzept-Inhalt" tabindex="-1"></div>
  </div>

  <aside id="rightPanel" aria-label="Formeln und Verbindungen">
    <div class="rp-section" id="rpFormulasSection">
      <h4>Formeln</h4>
      <div id="rpFormulas"><p style="font-size:12px;color:var(--muted)">Konzept auswählen…</p></div>
    </div>
    <div class="rp-section">
      <h4>Verbindungen</h4>
      <div id="rpConnections"></div>
    </div>
    <div class="rp-section" id="rpMistakesSection">
      <h4>Häufige Fehler</h4>
      <div id="rpMistakes"></div>
    </div>
  </aside>
</div>

<div id="shortcutHint" aria-hidden="true">
  <span class="sc-item"><kbd class="sc-key">&#8592;</kbd><kbd class="sc-key">&#8594;</kbd> Navigation</span>
  <span class="sc-item"><kbd class="sc-key">F</kbd> Fokus</span>
  <span class="sc-item"><kbd class="sc-key">Enter</kbd> Lösung</span>
</div>
<div id="toastContainer" aria-live="polite" aria-atomic="false"></div>
<div id="sidebarOverlay" aria-hidden="true"></div>`;
}

const slug = inferSlug();
const module = getModuleBySlug(slug);
const contentProfile = getModuleContent(slug);

if (!module || !contentProfile) {
  throw new Error(`Kein generiertes Portal für ${slug} gefunden.`);
}

const data = buildGeneratedPortalData(module, contentProfile);
ensureMathJax();
document.title = `${module.title} — Lernportal`;
document.body.className = "";
document.body.removeAttribute("data-page");
document.body.style.setProperty("--accent", module.accent);
document.body.style.setProperty("--accent2", "#5cf0ff");
document.body.style.setProperty("--accent3", "#ff6b6b");
document.body.style.setProperty("--accent-fg", accentForeground(module.accent));
document.body.innerHTML = buildShell(module, data.chapters.length);

const appState = createAppState();
const storage = createStorageModule({ keys: data.keys });
const navigation = createNavigation(data.chapters, storage.loadProgress, storage.loadSRS);
const mastery = createMasteryModule(data.masteryById, storage.loadProgress, storage.saveMasteryChecks);
const srs = createSrsModule(data.chapters, storage.loadSRS, storage.saveSRS);
const dashboard = createDashboard(data.chapters, storage.loadProgress, storage.loadSRS, srs.getDueCards, srs.getPerformance);
const graphs = createGraphs(data.graphPanelsById, data.graphConcepts, data.graphKindsById);
const rightPanel = createRightPanel(data.chapters, data.contentById, data.conceptLinks);
const theme = createTheme(data.keys.THEME_KEY);
const keyboard = createKeyboard(data.chapters);
const examGraphs = createExamGraphs();

const baseRenderer = createRenderer({
  courseLabel: module.title,
  courseTitle: module.title,
  homeIntro: buildHomeIntro(module, contentProfile),
  chapters: data.chapters,
  contentById: data.contentById,
  intuitionById: data.intuitionById,
  conceptLinks: data.conceptLinks,
  renderGraphPanel: graphs.renderGraphPanel,
  graphConcepts: graphs.GRAPH_CONCEPTS,
  renderMastery: mastery.renderMastery,
  renderMath,
  loadProgress: storage.loadProgress,
  loadLastId: storage.loadLastId,
  getDueCards: srs.getDueCards,
  renderDashboard: dashboard.renderDashboard
});

const renderer = {
  ...baseRenderer,
  renderHome() {
    baseRenderer.renderHome();
    appendHomeSupplement(module, contentProfile);
    renderMath(document.getElementById("content"));
  }
};

const quickExam = createQuickExamModule({
  courseLabel: module.title,
  stepProblems: data.stepProblems,
  examQuestions: data.examQuestions,
  examDurationMs: data.examDurationMs,
  checkAnswerWithTolerance,
  recordAnswer: storage.recordAnswer,
  updateSRS: srs.updateSRS,
  renderMath
});

const fullExam = createFullExamModule({
  courseLabel: module.title,
  courseExamCollectionTitle: `Probeklausuren ${module.title}`,
  fullExams: data.fullExams,
  renderMath,
  showToast
});

createPortalApp({
  courseLabel: module.title,
  consentKey: `${module.slug}_consent_v1`,
  chapters: data.chapters,
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
  toast: { showToast },
  math: { renderMath }
});

document.addEventListener("DOMContentLoaded", () => {
  mountLivePortalBridge(module.slug);
});
