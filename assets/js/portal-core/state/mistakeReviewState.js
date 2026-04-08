/**
 * Mistake review — pure grouping/filtering over learner backbone mistake entries.
 * Persistence of "reviewed" lives in a separate localStorage key (per module).
 *
 * @see docs/architecture/mistake-review-pilot.md
 */

/**
 * @param {Array<{ entry_id?: string, timestamp?: number }>} entries
 * @param {Record<string, number>} reviewedMap entry_id -> marked-at timestamp
 * @returns {{ open: typeof entries, done: typeof entries }}
 */
export function partitionByReviewed(entries, reviewedMap) {
  const open = [];
  const done = [];
  const map = reviewedMap && typeof reviewedMap === "object" ? reviewedMap : {};
  for (const e of entries) {
    if (!e || !e.entry_id) continue;
    if (map[e.entry_id]) done.push(e);
    else open.push(e);
  }
  return { open, done };
}

/**
 * @param {Array<{ timestamp?: number }>} entries
 */
export function sortEntriesByTimeDesc(entries) {
  return [...entries].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
}

/**
 * @param {Array<{ source?: string, concept_id?: string }>} entries
 * @param {{ source?: string, concept_id?: string }} filter
 */
export function filterEntries(entries, filter = {}) {
  const { source, concept_id } = filter;
  let list = entries;
  if (source) list = list.filter((e) => e && e.source === source);
  if (concept_id) list = list.filter((e) => e && e.concept_id === concept_id);
  return list;
}

export function distinctSources(entries) {
  const s = new Set();
  for (const e of entries) {
    if (e && e.source) s.add(e.source);
  }
  return [...s].sort();
}

export function distinctConceptIds(entries) {
  const s = new Set();
  for (const e of entries) {
    if (e && e.concept_id) s.add(e.concept_id);
  }
  return [...s].sort();
}

/**
 * @param {Storage|null|undefined} storage
 * @param {string} key
 * @returns {Record<string, number>}
 */
export function loadReviewedMap(storage, key) {
  if (!storage || !key) return {};
  try {
    const raw = storage.getItem(key);
    const o = JSON.parse(raw || "{}");
    return o.reviewed && typeof o.reviewed === "object" ? o.reviewed : {};
  } catch {
    return {};
  }
}

/**
 * @param {Storage|null|undefined} storage
 * @param {string} key
 * @param {Record<string, number>} reviewed
 */
export function saveReviewedMap(storage, key, reviewed) {
  if (!storage || !key) return;
  try {
    storage.setItem(key, JSON.stringify({ reviewed }));
  } catch {
    /* quota */
  }
}

/**
 * @param {Storage|null|undefined} storage
 * @param {string} key
 * @param {string} entryId
 */
export function markEntryReviewed(storage, key, entryId) {
  if (!entryId) return;
  const map = { ...loadReviewedMap(storage, key) };
  map[entryId] = Date.now();
  saveReviewedMap(storage, key, map);
}
