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
