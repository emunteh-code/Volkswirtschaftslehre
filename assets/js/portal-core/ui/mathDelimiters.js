import { isDelimitedMath } from "./semanticContent.js"

/**
 * Graph panels often pass bare LaTeX (no delimiters). MathJax then leaves it as plain text.
 * If the string is already fully delimited, or contains inline/display markers MathJax should
 * parse, return unchanged. Otherwise wrap as display math ($$…$$) so it survives mikro1-style
 * formalizeMarkupString splitting (which preserves segments starting with $).
 *
 * @param {string} value
 * @returns {string}
 */
export function ensureMathJaxEquationHtml(value) {
  const s = String(value ?? "").trim()
  if (!s) return ""
  if (isDelimitedMath(s)) return s
  // Prose + inline math, or explicit TeX delimiters inside the string
  if (/\$(?!\$)/.test(s) || /\\\(|\\\[/.test(s)) return s
  return `$$${s}$$`
}
