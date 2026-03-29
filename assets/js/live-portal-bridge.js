import { PUBLIC_MODULES } from "./modules.js";
import { getModuleContent } from "./module-content.js";
import { estimateGeneratedChapterCount } from "./generated-portal/dataFactory.js";

function readStoredJson(key) {
  if (!key) return {};
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch {
    return {};
  }
}

function getModuleSnapshot(module) {
  const content = getModuleContent(module.slug);
  const state = module.portalState || (content ? {
    progressKey: `${module.slug}_progress_v1`,
    srsKey: `${module.slug}_srs_v1`,
    chapterCount: estimateGeneratedChapterCount(module, content)
  } : null);
  if (!state) return null;
  const progress = readStoredJson(state.progressKey);
  const srs = readStoredJson(state.srsKey);
  const seen = Object.keys(progress).length;
  const total = state.chapterCount || 0;
  const due = Object.values(srs).filter((entry) => entry && typeof entry.due === "number" && entry.due <= Date.now()).length;
  return {
    seen,
    total,
    due
  };
}

export function mountLivePortalBridge(currentSlug) {
  const sidebar = document.getElementById("sidebar");
  const progressWrap = document.querySelector(".progress-bar-wrap");
  if (!sidebar || !progressWrap) return;

  const liveModules = PUBLIC_MODULES.filter((module) => module.status === "live");
  const currentModule = liveModules.find((module) => module.slug === currentSlug);
  const currentSnapshot = currentModule ? getModuleSnapshot(currentModule) : null;
  const otherModuleCount = Math.max(0, liveModules.length - 1);

  const shell = document.createElement("div");
  shell.className = "portal-switcher";
  shell.innerHTML = `
    <div class="portal-switcher-head">
      <span class="portal-switcher-label">Kursnavigation</span>
      <a class="portal-switcher-home" href="../index.html">Alle Module</a>
    </div>
    ${currentModule ? `
      <div class="portal-switcher-current" aria-label="Aktiver Kurs">
        <div class="portal-switcher-current-copy">
          <span class="portal-switcher-current-label">Aktiv</span>
          <span class="portal-switcher-current-title">${currentModule.title}</span>
        </div>
        <div class="portal-switcher-current-stats">
          ${currentSnapshot ? `<span>${currentSnapshot.seen}/${currentSnapshot.total}</span><span>${currentSnapshot.due} fällig</span>` : `<span>Lernportal</span>`}
        </div>
      </div>
    ` : ""}
    ${otherModuleCount ? `
      <button class="portal-switcher-toggle" type="button" aria-expanded="false" aria-controls="portalSwitcherLinks">
        <span class="portal-switcher-toggle-copy">Module anzeigen</span>
        <span class="portal-switcher-toggle-badge">${otherModuleCount}</span>
      </button>
    ` : ""}
    <div class="portal-switcher-links" id="portalSwitcherLinks" hidden>
      ${liveModules.map((module) => {
        const snapshot = getModuleSnapshot(module);
        const href = module.slug === currentSlug ? "./index.html" : `../${module.slug}/index.html`;
        return `
          <a class="portal-switcher-link ${module.slug === currentSlug ? "is-active" : ""}" href="${href}">
            <span class="portal-switcher-title">${module.shortTitle}</span>
            ${snapshot ? `<span class="portal-switcher-meta">${snapshot.seen}/${snapshot.total} · ${snapshot.due} fällig</span>` : ""}
          </a>
        `;
      }).join("")}
    </div>
  `;

  progressWrap.insertAdjacentElement("afterend", shell);

  const toggle = shell.querySelector(".portal-switcher-toggle");
  const links = shell.querySelector(".portal-switcher-links");
  if (toggle && links) {
    const label = toggle.querySelector(".portal-switcher-toggle-copy");
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      if (label) label.textContent = open ? "Module ausblenden" : "Module anzeigen";
      links.hidden = !open;
      links.setAttribute("aria-hidden", open ? "false" : "true");
      shell.classList.toggle("is-open", open);
    };

    setOpen(false);
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    });
  }
}
