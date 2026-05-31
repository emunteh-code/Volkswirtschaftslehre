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
  intuition: "intuition",
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
  if (!raw) return { conceptId: null, tab: null };
  const parts = raw.split("/").filter(Boolean);
  if (!parts.length) return { conceptId: null, tab: null };
  const [conceptId, tabPart] = parts;
  return {
    conceptId: conceptId || null,
    tab: tabPart ? normalizeConceptTab(tabPart) : null
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
  const candidates = [preferred, "theorie", "aufgaben", "formeln", "intuition", "quellen", "graph", "r-anwendung"].filter(
    Boolean
  );
  for (const tab of candidates) {
    if (isTabAvailable(tabRow, tab)) return tab;
  }
  return "theorie";
}
