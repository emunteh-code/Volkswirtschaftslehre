/**
 * Shared identifiers for content-manifest payloads (devtools / future loaders).
 * Modules may use a scoped schema string for backward compatibility.
 */
export const LERNPORTAL_CONTENT_MANIFEST_BASE = 'lernportal.contentManifest';

/**
 * @param {string} moduleSlug
 * @returns {string}
 */
export function buildContentManifestSchemaId(moduleSlug) {
  return `${LERNPORTAL_CONTENT_MANIFEST_BASE}.${moduleSlug}`;
}

/**
 * @param {unknown} v
 * @param {string} label
 * @returns {string}
 */
export function assertNonEmptyString(v, label = 'value') {
  if (typeof v !== 'string' || !v.trim()) {
    throw new Error(`[schema] ${label} must be a non-empty string`);
  }
  return v.trim();
}
