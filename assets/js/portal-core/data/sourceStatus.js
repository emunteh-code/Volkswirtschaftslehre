/**
 * Canonical source_status values (content-pipeline.md / learning-data-model.md).
 * @readonly
 */
export const SOURCE_STATUSES = Object.freeze([
  'direct-source',
  'source-distilled',
  'platform-added-explanation',
  'platform-added-drill',
  'cross-link'
]);

const STATUS_SET = new Set(SOURCE_STATUSES);

/**
 * @param {unknown} status
 * @returns {boolean}
 */
export function isValidSourceStatus(status) {
  return typeof status === 'string' && STATUS_SET.has(status);
}

/** @typedef {'direct-source'|'source-distilled'|'platform-added-explanation'|'platform-added-drill'|'cross-link'} SourceStatus */

/** Higher = more caveat (for honest UI when mixing layers). */
export const SOURCE_STATUS_TRUST_RANK = Object.freeze({
  'direct-source': 0,
  'source-distilled': 1,
  'cross-link': 2,
  'platform-added-explanation': 3,
  'platform-added-drill': 4
});

/**
 * @param {string[]} statuses
 * @returns {string} Weakest valid status, or '' if none.
 */
export function pickWeakestSourceStatus(statuses) {
  const arr = (Array.isArray(statuses) ? statuses : []).filter(isValidSourceStatus);
  if (!arr.length) return '';
  const rank = SOURCE_STATUS_TRUST_RANK;
  return [...arr].sort((a, b) => (rank[b] ?? 0) - (rank[a] ?? 0))[0];
}

/**
 * One-line German hint for students (no internal enum names).
 * @param {string} status
 * @returns {string}
 */
export function studentHintForSourceStatus(status) {
  switch (status) {
    case 'direct-source':
      return 'An Primärmaterial ausgerichtet';
    case 'source-distilled':
      return 'Aus Kursmaterial zusammengeführte Darstellung';
    case 'cross-link':
      return 'Verknüpfter Überblick';
    case 'platform-added-explanation':
      return 'Didaktische Portal-Erweiterung';
    case 'platform-added-drill':
      return 'Portal-Übung / Transfer';
    default:
      return 'Portal-intern zusammengestellt';
  }
}
