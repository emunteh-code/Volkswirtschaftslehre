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

  const shell = document.createElement("div");
  shell.className = "portal-switcher";
  shell.innerHTML = `
    <div class="portal-switcher-head">
      <span class="portal-switcher-label">Portal Hub</span>
      <a class="portal-switcher-home" href="../index.html">Alle Module</a>
    </div>
    <div class="portal-switcher-links">
      ${liveModules.map((module) => {
        const snapshot = getModuleSnapshot(module);
        const href = module.slug === currentSlug ? "./index.html" : `../${module.slug}/index.html`;
        return `
          <a class="portal-switcher-link ${module.slug === currentSlug ? "is-active" : ""}" href="${href}" style="--module-accent:${module.accent}">
            <span class="portal-switcher-title">${module.shortTitle}</span>
            ${snapshot ? `<span class="portal-switcher-meta">${snapshot.seen}/${snapshot.total} · ${snapshot.due} faellig</span>` : ""}
          </a>
        `;
      }).join("")}
    </div>
    ${currentModule ? `<div class="portal-switcher-note">Aktiv: ${currentModule.title}</div>` : ""}
  `;

  progressWrap.insertAdjacentElement("afterend", shell);
}
