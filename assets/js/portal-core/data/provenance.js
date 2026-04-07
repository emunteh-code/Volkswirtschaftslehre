import { isValidSourceStatus } from './sourceStatus.js';

/**
 * @param {string} moduleSlug
 * @param {string} path
 * @param {string} [title]
 */
export function createSourceReference(moduleSlug, path, title = '') {
  const safe = String(path).replace(/[^a-zA-Z0-9._-]/g, '_');
  const ref = {
    ref_id: `${moduleSlug}:${safe}`,
    module_slug: moduleSlug,
    path: String(path)
  };
  if (title) ref.title = title;
  return ref;
}

/**
 * Strict builder for runtime manifests (throws on invalid status).
 * @param {{ source_status: string, source_refs?: object[], notes?: string }} p
 */
export function createProvenance(p) {
  if (!isValidSourceStatus(p.source_status)) {
    throw new Error(`[provenance] invalid source_status: ${p.source_status}`);
  }
  const out = {
    source_status: p.source_status,
    source_refs: Array.isArray(p.source_refs) ? p.source_refs : []
  };
  if (p.notes != null && p.notes !== '') out.notes = p.notes;
  return out;
}

/**
 * Migration / ingest: non-throwing check.
 * @param {unknown} obj
 * @returns {{ ok: boolean, errors: string[] }}
 */
export function validateProvenanceLoose(obj) {
  const errors = [];
  if (obj == null || typeof obj !== 'object') {
    errors.push('not_an_object');
    return { ok: false, errors };
  }
  if (!isValidSourceStatus(obj.source_status)) errors.push('invalid_source_status');
  if (obj.source_refs != null && !Array.isArray(obj.source_refs)) errors.push('source_refs_not_array');
  return { ok: errors.length === 0, errors };
}
