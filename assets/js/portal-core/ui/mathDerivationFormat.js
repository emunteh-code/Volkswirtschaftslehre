/**
 * Formats long chained equalities as ams aligned display math so each step is its own line
 * (intentional breaks after `=`, not browser word-wrap inside MathJax).
 */

/** At least three segments ⇒ at least two `=` signs in the chain. */
const MIN_SEGMENTS_FOR_CHAIN = 3
/** Short chains (e.g. `a = b = c`) stay one display line; typical two-step stats rows break above this. */
const MIN_CHARS_FOR_THREE_PART_CHAIN = 22

/**
 * @param {string} innerLatex stripped math (no $$ / $ delimiters)
 * @returns {string} same content, or \begin{aligned}...\end{aligned} when rules apply
 */
export function formatChainedEqualitiesForDisplay(innerLatex) {
  const s = String(innerLatex ?? "").trim()
  if (!s) return s
  if (/\\begin\{/.test(s)) return s

  const segs = s.split(/\s+=\s+/).map((p) => p.trim()).filter(Boolean)
  if (segs.length < MIN_SEGMENTS_FOR_CHAIN) return s

  const shouldBreak = segs.length >= 4 || s.length >= MIN_CHARS_FOR_THREE_PART_CHAIN

  if (!shouldBreak) return s

  let body = `${segs[0]} &= ${segs[1]}`
  for (let i = 2; i < segs.length; i += 1) {
    body += ` \\\\\n&= ${segs[i]}`
  }
  return `\\begin{aligned}\n${body}\n\\end{aligned}`
}
