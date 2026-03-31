// ============================================================
// I18N — Mikroökonomik I
// Minimal i18n wrapper around a flat JSON locale file.
// Supports dot-notation keys and {{placeholder}} interpolation.
// ============================================================

/** @type {Record<string, unknown>} */
let _strings = {};

/**
 * Load a locale object. Call once at startup before using t().
 * @param {Record<string, unknown>} locale
 */
export function loadLocale(locale) {
  _strings = locale;
}

/**
 * Look up a dot-notation key, e.g. t('nav.search_placeholder').
 * Returns the key itself if not found (fail-visible in dev).
 * @param {string} key
 * @param {Record<string, string>} [vars] — placeholder values
 * @returns {string}
 */
export function t(key, vars = {}) {
  const parts = key.split('.');
  let node = _strings;
  for (const part of parts) {
    if (typeof node !== 'object' || node === null) return key;
    node = /** @type {Record<string, unknown>} */ (node)[part];
  }
  if (typeof node !== 'string') return key;

  // Replace {{placeholder}} tokens
  return node.replace(/\{\{(\w+)\}\}/g, (_, name) => vars[name] ?? `{{${name}}}`);
}
