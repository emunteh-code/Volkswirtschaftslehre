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
  const module = PUBLIC_MODULES.find((entry) => entry.slug === currentSlug) || null;
  const snapshot = module ? getModuleSnapshot(module) : null;
  if (typeof window !== "undefined") {
    // Devtools-facing bridge payload for diagnostics; no student-facing UI side effects.
    window.__portalBridgeSnapshot = {
      module_slug: currentSlug || null,
      found: Boolean(module),
      snapshot
    };
  }
  return snapshot;
}
