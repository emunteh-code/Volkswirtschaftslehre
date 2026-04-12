/**
 * Strips legacy student-facing prefixes from evaluator / feedback strings.
 * Copy-only; does not change scoring.
 */
export function scrubLegacyFeedbackPrefixes(text) {
  if (text == null || text === "") return ""
  let s = String(text)
    .replace(/\bRECHENFEHLER\.\s*/gi, "")
    .replace(/\bNicht ganz\.\s*/gi, "")
    .replace(/^\s*Achtung:\s*/i, "")
  return s.replace(/\s{2,}/g, " ").trim()
}
