/**
 * Stable devtools / loader payload shape (no UI). Modules pass their own `schema` if needed
 * to preserve backward compatibility (e.g. legacy `makro1.contentManifest`).
 *
 * @param {object} p
 * @param {string} p.schema
 * @param {string} p.version
 * @param {string} [p.courseConfigManifestVersion]
 * @param {string} p.module_slug
 * @param {{ id: string }[]} p.chapters
 * @param {Record<string, unknown>} p.modeIndex
 * @param {Record<string, unknown>} p.provenanceByConcept
 * @param {Record<string, unknown>} [p.fullExamProvenance]
 */
export function buildContentManifestBridgePayload({
  schema,
  version,
  courseConfigManifestVersion,
  module_slug,
  chapters,
  modeIndex,
  provenanceByConcept,
  fullExamProvenance = {}
}) {
  return {
    schema,
    version,
    ...(courseConfigManifestVersion != null ? { courseConfigManifestVersion } : {}),
    module_slug,
    conceptCount: chapters.length,
    conceptIds: chapters.map((c) => c.id),
    modeIndex,
    provenanceKeys: Object.keys(provenanceByConcept || {}),
    fullExamProvenanceKeys: Object.keys(fullExamProvenance || {})
  };
}
