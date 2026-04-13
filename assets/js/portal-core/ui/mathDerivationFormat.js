/**
 * Formats long chained equalities as ams `aligned` display math so each step is its own line
 * (intentional breaks after `=`, not browser word-wrap inside MathJax).
 *
 * **Family guard (pass 71):** Not every long `=`-rich expression is a pure Class-A chain.
 * Parallel facts (`x_1^{\max}=… \qquad x_2^{\max}=…`) must not be forced into a *single*
 * continuation chain (that glued `x_2^{\max}` to the `30` line).
 *
 * **Pass Budgetmenge:** Exactly two clauses separated by `\qquad`, each an equality chain, become
 * a two-row `aligned` block — one row per LHS family (paired repeated-left-hand-side / parallel intercepts).
 */

/** At least three segments ⇒ at least two `=` signs in the chain. */
const MIN_SEGMENTS_FOR_CHAIN = 3
/** Short chains (e.g. `a = b = c`) stay one display line; typical two-step stats rows break above this. */
const MIN_CHARS_FOR_THREE_PART_CHAIN = 22

/** Class A only: naive &= layout is safe for these. */
export const LAYOUT_CHAINED_EQUALITY = 'chained-equality-candidate'

/** Class B/C/D / mixed: do not apply generic &= breaking. */
export const LAYOUT_PRESERVE_AS_AUTHORED = 'preserve-as-authored'

/**
 * Heuristic: segment starts a *new* named quantity (second budget intercept, new head), not a
 * typical RHS fragment (`\frac{…}{…}`, plain number).
 * @param {string} seg
 * @returns {boolean}
 */
function looksLikeRepeatedQuantityHead(seg) {
  const t = String(seg ?? '').trim()
  if (!t) return false
  // Common coordinate / choice variables in VWL problem sheets
  if (/^(x_|y_|z_|q_|k_|n_|i_|j_)/u.test(t)) return true
  if (/^\\(?:text|mathrm|operatorname)\{/.test(t)) return true
  // “max” intercept style (ASCII or TeX max)
  if (/\^\{\\max\}/.test(t) || /\^\{max\}/i.test(t) || /\^\\mathrm\{max\}/i.test(t) || /\^\\text\{max\}/i.test(t)) {
    return true
  }
  return false
}

/**
 * Class **paired parallel chains** (e.g. budget intercepts): `A = … = α \qquad B = … = β`.
 * Converts to two `aligned` rows with `&=` after each line’s head so the second equation starts clean.
 * @param {string} innerLatex stripped math (no $$)
 * @returns {string|null} `aligned` TeX or null if pattern does not apply
 */
function tryFormatPairedQquadDoubleChain(innerLatex) {
  const s = String(innerLatex ?? '').trim()
  if (!s || /\\begin\{/.test(s)) return null
  if (!/\\qquad/.test(s)) return null

  const parts = s.split(/\s*\\qquad\s*/).map((p) => p.trim()).filter(Boolean)
  if (parts.length !== 2) return null

  const rows = []
  for (const part of parts) {
    const segs = part.split(/\s+=\s+/).map((p) => p.trim()).filter(Boolean)
    if (segs.length < 2) return null
    rows.push(`${segs[0]} &= ${segs.slice(1).join(' = ')}`)
  }

  return `\\begin{aligned}\n${rows[0]} \\\\\n${rows[1]}\n\\end{aligned}`
}

/**
 * Decide whether `innerLatex` should receive automatic `aligned` / &= layout.
 * @param {string} innerLatex stripped math (no $$ / $ delimiters)
 * @returns {typeof LAYOUT_CHAINED_EQUALITY | typeof LAYOUT_PRESERVE_AS_AUTHORED}
 */
export function classifyEquationLayoutFamily(innerLatex) {
  const s = String(innerLatex ?? '').trim()
  if (!s) return LAYOUT_PRESERVE_AS_AUTHORED
  if (/\\begin\{/.test(s)) return LAYOUT_PRESERVE_AS_AUTHORED
  // Author already chose line breaks
  if (/\\\\/.test(s)) return LAYOUT_PRESERVE_AS_AUTHORED
  // Class D: parallel presentation almost always uses \qquad between clauses
  if (/\\qquad/.test(s)) return LAYOUT_PRESERVE_AS_AUTHORED

  const segs = s.split(/\s+=\s+/).map((p) => p.trim()).filter(Boolean)
  if (segs.length < MIN_SEGMENTS_FOR_CHAIN) return LAYOUT_PRESERVE_AS_AUTHORED

  for (let i = 1; i < segs.length; i += 1) {
    // \quad inside a “between-equals” segment usually means parallel layout (e.g. x1 max … x2 max)
    if (/\\qquad|\\quad/.test(segs[i])) return LAYOUT_PRESERVE_AS_AUTHORED
  }

  for (let i = 2; i < segs.length; i += 1) {
    if (looksLikeRepeatedQuantityHead(segs[i])) return LAYOUT_PRESERVE_AS_AUTHORED
  }

  return LAYOUT_CHAINED_EQUALITY
}

/**
 * @param {string} innerLatex stripped math (no $$ / $ delimiters)
 * @returns {string} same content, or \begin{aligned}...\end{aligned} when rules apply
 */
export function formatChainedEqualitiesForDisplay(innerLatex) {
  const s = String(innerLatex ?? '').trim()
  if (!s) return s

  const pairedQquad = tryFormatPairedQquadDoubleChain(s)
  if (pairedQquad) return pairedQquad

  if (classifyEquationLayoutFamily(s) !== LAYOUT_CHAINED_EQUALITY) {
    return s
  }

  const segs = s.split(/\s+=\s+/).map((p) => p.trim()).filter(Boolean)
  const shouldBreak = segs.length >= 4 || s.length >= MIN_CHARS_FOR_THREE_PART_CHAIN

  if (!shouldBreak) return s

  let body = `${segs[0]} &= ${segs[1]}`
  for (let i = 2; i < segs.length; i += 1) {
    body += ` \\\\\n&= ${segs[i]}`
  }
  return `\\begin{aligned}\n${body}\n\\end{aligned}`
}
