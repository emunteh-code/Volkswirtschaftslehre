/**
 * Shareable concept URLs: #conceptId/tab (e.g. #budget/aufgaben, #lagrange/grafik).
 * Tab aliases in hash: grafik → graph, r → r-anwendung.
 */

const TAB_ALIASES = Object.freeze({
  grafik: "graph",
  graph: "graph",
  theorie: "theorie",
  aufgaben: "aufgaben",
  formeln: "formeln",
  /** Legacy hash — fused into Theorie (scroll to Kernidee). */
  intuition: "theorie",
  quellen: "quellen",
  r: "r-anwendung",
  "r-anwendung": "r-anwendung",
  "r-uebung": "r-anwendung"
});

const TAB_TO_HASH = Object.freeze({
  graph: "grafik",
  "r-anwendung": "r"
});

/**
 * @param {string} [tab]
 * @returns {string|null}
 */
export function normalizeConceptTab(tab) {
  if (!tab) return null;
  const key = String(tab).trim().toLowerCase();
  return TAB_ALIASES[key] || null;
}

/**
 * @returns {{ conceptId: string|null, tab: string|null }}
 */
export function parseConceptHash(rawHash = typeof location !== "undefined" ? location.hash : "") {
  const raw = String(rawHash || "").replace(/^#/, "").trim();
  if (!raw) return { conceptId: null, tab: null, scrollKernidee: false };
  const parts = raw.split("/").filter(Boolean);
  if (!parts.length) return { conceptId: null, tab: null, scrollKernidee: false };
  const [conceptId, tabPart] = parts;
  const rawTab = tabPart ? String(tabPart).trim().toLowerCase() : null;
  const scrollKernidee = rawTab === "intuition";
  return {
    conceptId: conceptId || null,
    tab: tabPart ? normalizeConceptTab(tabPart) : null,
    scrollKernidee
  };
}

/**
 * @param {string} conceptId
 * @param {string} [tab] internal tab id (graph, r-anwendung, …)
 * @returns {string}
 */
export function buildConceptHash(conceptId, tab) {
  if (!conceptId) return "";
  const internal = tab && tab !== "theorie" ? tab : null;
  const outwardTab = internal && TAB_TO_HASH[internal] ? TAB_TO_HASH[internal] : internal;
  return outwardTab ? `#${conceptId}/${outwardTab}` : `#${conceptId}`;
}

/**
 * @param {string} conceptId
 * @param {string} tab
 */
export function replaceConceptHash(conceptId, tab) {
  if (typeof location === "undefined") return;
  const next = buildConceptHash(conceptId, tab);
  const current = location.hash || "";
  if (current === next) return;
  const url = `${location.pathname}${location.search}${next}`;
  history.replaceState(null, "", url);
}

/**
 * @param {HTMLElement|null|undefined} tabRow
 * @param {string} tab internal tab id
 * @returns {boolean}
 */
export function isTabAvailable(tabRow, tab) {
  if (!tabRow || !tab) return false;
  const btn = tabRow.querySelector(`button[data-tab="${tab}"]`);
  if (!btn) return false;
  if (btn.hidden || btn.getAttribute("aria-hidden") === "true") return false;
  if (btn.style?.display === "none") return false;
  return true;
}

/**
 * Pick first available tab from preference list.
 * @param {HTMLElement|null|undefined} tabRow
 * @param {string|null} preferred
 * @returns {string}
 */
export function resolveAvailableTab(tabRow, preferred) {
  const normalizedPreferred = preferred === "intuition" ? "theorie" : preferred;
  const candidates = [normalizedPreferred, "theorie", "aufgaben", "formeln", "quellen", "graph", "r-anwendung"].filter(
    Boolean
  );
  for (const tab of candidates) {
    if (isTabAvailable(tabRow, tab)) return tab;
  }
  return "theorie";
}

/**
 * Map hash slug to a live chapter id (exact id, alias table, or unique prefix).
 * @param {string|null|undefined} rawId
 * @param {{ chapterIds?: string[], aliases?: Record<string, string> }} [opts]
 * @returns {string|null}
 */
export function resolveConceptHashId(rawId, { chapterIds = [], aliases = {} } = {}) {
  if (!rawId) return null;
  const id = String(rawId).trim();
  if (!id) return null;
  if (chapterIds.includes(id)) return id;
  const aliased = aliases[id];
  if (aliased && chapterIds.includes(aliased)) return aliased;
  const prefixMatches = chapterIds.filter(
    (chapterId) => chapterId === id || chapterId.startsWith(`${id}_`)
  );
  if (prefixMatches.length === 1) return prefixMatches[0];
  return null;
}
