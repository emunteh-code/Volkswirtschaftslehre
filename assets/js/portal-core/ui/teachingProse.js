/**
 * Mixed teaching prose: escape plain text, preserve $...$/$$...$$ for MathJax,
 * map \texttt{...} to semantic <code> (not raw LaTeX).
 */
import { decodeHtmlEntities, escapeHtml, stripHtml } from "./semanticContent.js"

function consumeBalancedBrace(str, openIdx) {
  if (str[openIdx] !== "{") return null
  let depth = 0
  for (let i = openIdx; i < str.length; i++) {
    const c = str[i]
    if (c === "\\" && i + 1 < str.length) {
      i++
      continue
    }
    if (c === "{") depth++
    else if (c === "}") {
      depth--
      if (depth === 0) return { end: i, innerStart: openIdx + 1, innerEnd: i }
    }
  }
  return null
}

function normalizeTextttInner(inner) {
  return inner
    .replace(/\\textasciitilde\{\}/g, "~")
    .replace(/\\\$/g, "$")
    .replace(/\{,\}/g, ",")
    .replace(/\bvar\.equal=TRUE\b/g, "var.equal = TRUE")
    .replace(/\bvar\.equal=FALSE\b/g, "var.equal = FALSE")
}

const NON_MATH_SHORT_WORD =
  /^(?:und|der|die|das|den|dem|des|von|vom|für|ist|mit|oder|nicht|wenn|wie|aus|bei|auf|ein|eine|einer|einem|einen|sich|wird|sind|hat|haben|nach|über|unter|dass|weil|also|nur|noch|mehr|mind|min|max)$/i

/** Prevent MathJax from treating stray `$` as math delimiters. */
const DOLLAR_ENTITY = "&#36;"

/** Avoid pairing dollars in prose like "$5 and $10" as fake inline math. */
function isProbableInlineMathInner(inner) {
  const t = String(inner ?? "").trim()
  if (!t || t.length > 220) return false
  if (/\\|\^|_|\{,\}|\\hat|\\bar|\\mu|\\sigma|\\alpha|\\beta|\\rho|\\varepsilon|\\delta|\\partial|\\frac|\\sqrt|\\sum|\\int|\\text|\\implies|\\quad|\\cdot|\\times|\\leq|\\geq|\\neq|\\in|\\sim/.test(t)) return true
  if (/[=<>≤≥≠]/.test(t) && /\d/.test(t)) return true
  if (/^(?:H_[01]|df|r|t|p|n|F|z)(?:\s*[=<>≤≥]|\s*\\in\b|\s*:)/i.test(t)) return true
  if (/^[a-zA-Z]$/.test(t)) return true
  if (/^[A-Za-z]{1,4}$/.test(t) && !NON_MATH_SHORT_WORD.test(t)) return true
  return false
}

/**
 * @param {string} value
 * @param {{ stripMarkup?: boolean }} [options]
 * @returns {string} HTML fragment (safe: plain segments escaped; math/code trusted structure)
 */
export function renderTeachingProse(value, { stripMarkup = false } = {}) {
  let s = stripMarkup ? stripHtml(value) : decodeHtmlEntities(String(value ?? ""))
  if (!s) return ""

  const out = []
  let i = 0

  while (i < s.length) {
    const ttPrefix = "\\texttt{"
    if (s.startsWith(ttPrefix, i)) {
      const openBrace = i + ttPrefix.length - 1
      const br = consumeBalancedBrace(s, openBrace)
      if (!br) {
        out.push(escapeHtml(s[i]))
        i++
        continue
      }
      const innerRaw = s.slice(br.innerStart, br.innerEnd)
      const inner = normalizeTextttInner(innerRaw)
      out.push(`<code class="teaching-inline-code">${escapeHtml(inner)}</code>`)
      i = br.end + 1
      continue
    }

    if (s.startsWith("$$", i)) {
      const close = s.indexOf("$$", i + 2)
      if (close === -1) {
        out.push(escapeHtml(s[i]))
        i++
        continue
      }
      out.push("$$")
      out.push(s.slice(i + 2, close))
      out.push("$$")
      i = close + 2
      continue
    }

    if (s.startsWith("\\(", i)) {
      const close = s.indexOf("\\)", i + 2)
      if (close === -1) {
        out.push(escapeHtml(s[i]))
        i++
        continue
      }
      out.push(s.slice(i, close + 2))
      i = close + 2
      continue
    }

    if (s[i] === "$") {
      const close = s.indexOf("$", i + 1)
      if (close === -1) {
        out.push(DOLLAR_ENTITY)
        i++
        continue
      }
      const inner = s.slice(i + 1, close)
      if (!isProbableInlineMathInner(inner)) {
        out.push(DOLLAR_ENTITY)
        i++
        continue
      }
      out.push(s.slice(i, close + 1))
      i = close + 1
      continue
    }

    let plainEnd = i
    while (plainEnd < s.length) {
      if (s.startsWith(ttPrefix, plainEnd)) break
      if (s.startsWith("$$", plainEnd)) break
      if (s.startsWith("\\(", plainEnd)) break
      if (s[plainEnd] === "$") break
      plainEnd++
    }
    if (plainEnd > i) {
      out.push(escapeHtml(s.slice(i, plainEnd)))
      i = plainEnd
    } else {
      out.push(escapeHtml(s[i]))
      i++
    }
  }

  return out.join("")
}
