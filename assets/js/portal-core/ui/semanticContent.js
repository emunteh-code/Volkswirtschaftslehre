const HTML_ENTITY_MAP = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'"
}

const CONNECTOR_MAP = {
  "\\rightarrow": "→",
  "\\Rightarrow": "⇒",
  "\\implies": "⇒",
  "\\iff": "⇔",
  "\\leftarrow": "←",
  "\\Leftarrow": "⇐",
  "\\leftrightarrow": "↔",
  "\\Leftrightarrow": "⇔",
  "\\uparrow": "↑",
  "\\downarrow": "↓",
  "\\leq": "≤",
  "\\geq": "≥",
  "\\neq": "≠",
  "\\approx": "≈",
  "\\propto": "∝",
  "\\times": "×",
  "\\cdot": "·",
  "\\neg": "¬",
  "\\infty": "∞",
  "\\gt": ">",
  "\\lt": "<",
  "->": "→",
  "<-": "←",
  "<->": "↔",
  "=>": "⇒",
  "<=>": "⇔",
  "→": "→",
  "⇒": "⇒",
  "←": "←",
  "⇐": "⇐",
  "↔": "↔",
  "⇔": "⇔",
  "↑": "↑",
  "↓": "↓",
  "≤": "≤",
  "≥": "≥",
  "≠": "≠",
  "≈": "≈",
  "∝": "∝",
  ">": ">",
  "<": "<",
  "×": "×",
  "·": "·",
  "∞": "∞",
  "¬": "¬",
  "+": "+",
  "=": "=",
  "/": "/",
  "-": "–",
  "–": "–"
}

const PLAIN_CONNECTOR_PATTERN = /\s+(→|⇒|←|⇐|↔|⇔|≤|≥|≠|=|\+|\/|–|-)\s+/u

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export function decodeHtmlEntities(value) {
  return String(value ?? "")
    .replace(/&nbsp;/g, " ")
    .replace(/&(amp|lt|gt|quot|#39);/g, (entity) => HTML_ENTITY_MAP[entity] || entity)
}

export function stripHtml(value) {
  return String(value ?? "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function isDelimitedMath(value) {
  const trimmed = String(value || "").trim()
  if (!trimmed) return false
  return (
    /^\$\$[\s\S]*\$\$$/.test(trimmed)
    || /^\$[\s\S]*\$$/.test(trimmed)
    || /^\\\[[\s\S]*\\\]$/.test(trimmed)
    || /^\\\([\s\S]*\\\)$/.test(trimmed)
  )
}

function stripMathDelimiters(value) {
  const trimmed = String(value || "").trim()
  if (/^\$\$[\s\S]*\$\$$/.test(trimmed)) return trimmed.slice(2, -2).trim()
  if (/^\$[\s\S]*\$$/.test(trimmed)) return trimmed.slice(1, -1).trim()
  if (/^\\\[[\s\S]*\\\]$/.test(trimmed)) return trimmed.slice(2, -2).trim()
  if (/^\\\([\s\S]*\\\)$/.test(trimmed)) return trimmed.slice(2, -2).trim()
  return trimmed
}

function normalizeConnectorText(value) {
  const trimmed = String(value ?? "").trim()
  return CONNECTOR_MAP[trimmed] || null
}

function isConnectorToken(value) {
  return Boolean(normalizeConnectorText(value))
}

function normalizeSchemaPart(part) {
  if (part == null) return null

  if (typeof part === "string") {
    const connector = normalizeConnectorText(part)
    if (connector) return { type: "connector", text: connector }
    return { type: "term", text: decodeHtmlEntities(part) }
  }

  if (typeof part === "object") {
    const type = part.type || part.kind || null
    if (type === "connector") {
      return {
        type: "connector",
        text: normalizeConnectorText(part.text || part.value || "") || escapeHtml(part.text || part.value || ""),
        note: part.note ? decodeHtmlEntities(part.note) : ""
      }
    }
    return {
      type: "term",
      text: decodeHtmlEntities(part.text ?? part.term ?? ""),
      tone: part.tone || null
    }
  }

  return { type: "term", text: String(part) }
}

function normalizeReferenceEntry(entry) {
  if (typeof entry === "string") return { term: decodeHtmlEntities(entry), note: "" }
  return {
    term: decodeHtmlEntities(entry?.term ?? ""),
    note: decodeHtmlEntities(entry?.note ?? "")
  }
}

function cleanLatexText(value) {
  return String(value || "")
    .replace(/\\text\{([^}]*)\}/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
}

function normalizePlainSchemaText(value) {
  return String(value || "")
    .replace(/\\xleftrightarrow\[[^\]]+\]\{[^}]+\}/g, " ↔ ")
    .replace(/\\xrightarrow\{[^}]+\}/g, " → ")
    .replace(/\\xleftarrow\{[^}]+\}/g, " ← ")
    .replace(/\\rightarrow/g, " → ")
    .replace(/\\implies\b/g, " ⇒ ")
    .replace(/\\iff\b/g, " ⇔ ")
    .replace(/\\Rightarrow/g, " ⇒ ")
    .replace(/\\leftarrow/g, " ← ")
    .replace(/\\Leftarrow/g, " ⇐ ")
    .replace(/\\leftrightarrow/g, " ↔ ")
    .replace(/\\Leftrightarrow/g, " ⇔ ")
    .replace(/\\uparrow/g, " ↑ ")
    .replace(/\\downarrow/g, " ↓ ")
    .replace(/\\leq/g, " ≤ ")
    .replace(/\\geq/g, " ≥ ")
    .replace(/\\neq/g, " ≠ ")
    .replace(/\\approx/g, " ≈ ")
    .replace(/\\propto/g, " ∝ ")
    .replace(/\\times/g, " × ")
    .replace(/\\cdot/g, " · ")
    .replace(/\\infty/g, " ∞ ")
    .replace(/\\gt/g, " > ")
    .replace(/\\lt/g, " < ")
    .replace(/\\neg/g, " ¬ ")
    .replace(/\\\\/g, " || ")
    .replace(/\\quad|\\qquad/g, " || ")
    .replace(/\\;|\\,|\\!/g, " ")
    .replace(/\\\s+/g, " ")
    .replace(/\\Delta/g, " Δ ")
    .replace(/\\pi/g, " π ")
    .replace(/\\mu/g, " μ ")
    .replace(/\\lambda/g, " λ ")
    .replace(/\\min\b/g, " min ")
    .replace(/\\max\b/g, " max ")
    .replace(/\\text\{([^}]*)\}/g, "$1")
    .replace(/\\mathrm\{([^}]*)\}/g, "$1")
    .replace(/\\operatorname\{([^}]*)\}/g, "$1")
    .replace(/_\{([^}]*)\}/g, " $1 ")
    .replace(/\{([^{}]+)\}/g, "$1")
    .replace(/\s+/g, " ")
    .trim()
}

function looksLikeSchemaHtml(value) {
  return /(?:legal|semantic)-schema__/.test(value)
}

function looksLikeReferenceText(value) {
  const normalized = String(value || "").trim()
  return /^§{1,2}\s*[\dA-Za-z.,\-\s/()]+(?:BGB|HGB|GG|AO|UStG|EStG|AktG|GmbHG)?$/u.test(normalized)
}

/** Undelimited lines that use TeX `{,}` decimals with comparisons or fractions → one MathJax block (not connector-split schema). */
function shouldCoerceUndelimitedTexMathBlock(decoded) {
  const t = String(decoded || "").trim()
  if (!t || isDelimitedMath(t)) return false
  if (/\\/.test(t)) return false
  if (!/\{,\}/.test(t)) return false
  if (/[=<>≠≤≥≈/±∓]/.test(t)) return true
  return false
}

function splitPlainSchemaParts(value) {
  const text = String(value || "").trim()
  if (!text) return []
  const parts = text.split(/\s+(→|⇒|←|⇐|↔|⇔|≤|≥|≠|=|\+|\/|–|-)\s+/u).filter(Boolean)
  return parts.map((part) => {
    const trimmed = part.trim()
    return isConnectorToken(trimmed) ? normalizeConnectorText(trimmed) : trimmed
  })
}

function splitSemanticClauses(value) {
  return String(value || "")
    .split(/\s*\|\|\s*|\s*;\s*|\s*,\s*(?=[^,;]*(?:→|⇒|←|⇐|↔|⇔))/u)
    .map((part) => part.trim())
    .filter(Boolean)
}

function parseArrowReferenceMappings(text) {
  const clauses = splitSemanticClauses(text)
  if (!clauses.length) return null

  const entries = clauses.map((clause) => {
    const match = clause.match(/^(.*?)\s*(→|⇒|←|⇐|↔|⇔)\s*(.*?)$/u)
    if (!match) return null

    let [, left, arrow, right] = match
    left = left.trim()
    right = right.trim()

    if (!left || !right) return null
    if (/[→⇒←⇐↔⇔]/u.test(left) || /[→⇒←⇐↔⇔]/u.test(right)) return null

    if (arrow === "←" || arrow === "⇐") {
      return { term: right, note: left }
    }

    return { term: left, note: right }
  }).filter(Boolean)

  if (entries.length !== clauses.length || !entries.some((entry) => entry.note)) return null
  return referenceList(entries)
}

function parseLeadingConditionNote(text) {
  const normalized = String(text || "").trim()
  if (!normalized || /[→⇒←⇐↔⇔]/u.test(normalized)) return null
  if (/\\/.test(normalized)) return null
  if (/=\s*(?:min|max|log|ln|exp|det|sup|inf|arg)\s*\(/iu.test(normalized)) return null

  const match = normalized.match(/^(.+?(?:(?:[<>≤≥≈=≠∝]\s*[^\s]+)|↑|↓))(?:\s+)([A-Za-zÄÖÜäöü].+)$/u)
  if (!match) return null

  const [, term, note] = match
  if (!term.trim() || !note.trim()) return null
  if (term.trim().split(/\s+/).length > 8) return null

  return referenceList([{ term: term.trim(), note: note.trim() }])
}

function parseDelimitedReferencePairs(text) {
  const clauses = String(text || "")
    .split(/\s*\|\|\s*/u)
    .map((part) => part.trim())
    .filter(Boolean)

  if (clauses.length < 2) return null

  const entries = clauses.map((clause) => {
    const separatorIndex = clause.indexOf(":")
    if (separatorIndex <= 0 || separatorIndex >= clause.length - 1) return null
    return {
      term: clause.slice(0, separatorIndex).trim(),
      note: clause.slice(separatorIndex + 1).trim()
    }
  }).filter(Boolean)

  if (entries.length !== clauses.length) return null
  return referenceList(entries)
}

function parseMixedArrowChain(text) {
  const normalized = String(text || "").trim()
  if (!normalized) return null

  const arrowCount = (normalized.match(/[→⇒←⇐↔⇔]/gu) || []).length
  if (arrowCount < 2) return null

  const parts = splitPlainSchemaParts(normalized)
  const termCount = parts.filter((part) => !isConnectorToken(String(part))).length
  if (termCount < 3) return null

  return schemaSequence(parts)
}

function isTextDominatedLatex(value) {
  const core = stripMathDelimiters(value)
  if (!/\\(?:text|mathrm|operatorname)\{/.test(core)) return false
  return !/\\(?:frac|sum|int|prod|partial|sqrt|hat|bar|mathbb|mathcal|begin)\b/.test(core)
}

function parseTextDominatedLatex(value) {
  if (!isTextDominatedLatex(value)) return null

  const core = stripMathDelimiters(value)
  const withoutTextMacros = core.replace(/\\(?:text|mathrm|operatorname)\{[^}]*\}/g, " ")
  const scrubbed = withoutTextMacros
    .replace(/\\[ ,;:!]/g, " ")
    .replace(/\\(?:quad|qquad)/g, " ")
  if (/\\/.test(scrubbed)) {
    return null
  }

  const text = normalizePlainSchemaText(stripMathDelimiters(value))
  if (!text) return null

  return parseArrowReferenceMappings(text)
    || parseMixedArrowChain(text)
    || parseDelimitedReferencePairs(text)
    || parseLeadingConditionNote(text)
    || schemaPhrase(text)
}

function parseLabeledArrowSchema(value) {
  const core = stripMathDelimiters(value)
  const match = core.match(/^\\text\{([^}]*)\}\s*\\xleftrightarrow\[(.+?)\]\{(.+?)\}\s*\\text\{([^}]*)\}$/)
  if (!match) return null

  const [, from, below, above, to] = match
  const noteParts = [cleanLatexText(above), cleanLatexText(below)].filter(Boolean)

  return schemaSequence([
    from,
    { type: "connector", text: "↔", note: noteParts.join(" / ") },
    to
  ])
}

function isPureSemanticLatex(value) {
  const core = stripMathDelimiters(value)
  if (!/\\text\{/.test(core)) return false

  const cleaned = core
    .replace(/\\text\{[^}]*\}/g, "")
    .replace(/\\xleftrightarrow\[[^\]]+\]\{[^}]+\}/g, "")
    .replace(/\\xrightarrow\{[^}]+\}/g, "")
    .replace(/\\xleftarrow\{[^}]+\}/g, "")
    .replace(/\\(?:rightarrow|Rightarrow|leftarrow|Leftarrow|leftrightarrow|Leftrightarrow|neq|times|leq|geq|neg|approx|equiv|cdot|quad|qquad)/g, "")
    .replace(/[+\-=<>\s\\,;:|()/[\]{}]/g, "")

  return cleaned.trim() === ""
}

function parseLegacyString(value) {
  const decoded = decodeHtmlEntities(String(value ?? "")).trim()
  if (!decoded) return null

  if (looksLikeSchemaHtml(decoded)) {
    return parseLegacyString(stripHtml(decoded))
  }

  if (shouldCoerceUndelimitedTexMathBlock(decoded)) {
    return { mode: "math", latex: `$$${decoded}$$`, raw: decoded }
  }

  if (isDelimitedMath(decoded)) {
    const inner = stripMathDelimiters(decoded).trim()
    if (inner && (isPureSemanticLatex(decoded) || isTextDominatedLatex(decoded))) {
      const semanticInside = parseTextDominatedLatex(decoded)
      if (semanticInside && semanticInside.mode && semanticInside.mode !== "math") return semanticInside
    }
    return { mode: "math", latex: decoded, raw: inner }
  }

  const labeledArrow = parseLabeledArrowSchema(decoded)
  if (labeledArrow) return labeledArrow

  const textDominatedLatex = parseTextDominatedLatex(decoded)
  if (textDominatedLatex) return textDominatedLatex

  const normalizedText = normalizePlainSchemaText(stripMathDelimiters(decoded))
  const hasSemanticArrowSyntax = /\\(?:xleftrightarrow|xrightarrow|xleftarrow|Rightarrow|Leftrightarrow|rightarrow|leftarrow|implies|iff)|[→⇒←⇐↔⇔]/u.test(decoded)
  const hasStructuredTextSyntax = /\\(?:text|mathrm|operatorname)\{/.test(decoded)

  if (!decoded.includes("\\") || hasSemanticArrowSyntax || hasStructuredTextSyntax) {
    const mappedReference = parseArrowReferenceMappings(normalizedText)
    if (mappedReference) return mappedReference

    const mappedChain = parseMixedArrowChain(normalizedText)
    if (mappedChain) return mappedChain
  }

  if (hasStructuredTextSyntax) {
    const leadingCondition = parseLeadingConditionNote(normalizedText)
    if (leadingCondition) return leadingCondition
  }

  if (isPureSemanticLatex(decoded)) {
    if (looksLikeReferenceText(normalizedText)) return referenceList([normalizedText])
    const parts = splitPlainSchemaParts(normalizedText)
    if (parts.length > 1) return schemaSequence(parts)
    return schemaPhrase(normalizedText)
  }

  if (!decoded.includes("\\") && PLAIN_CONNECTOR_PATTERN.test(decoded)) {
    const parts = splitPlainSchemaParts(decoded)
    if (parts.length > 1) return schemaSequence(parts)
  }

  if (!decoded.includes("\\") && looksLikeReferenceText(decoded)) {
    return referenceList([decoded])
  }

  const math = isDelimitedMath(decoded) ? decoded : `$$${stripMathDelimiters(decoded)}$$`
  return { mode: "math", latex: math, raw: decoded }
}

function filterMeaningfulSchemaParts(rawParts) {
  let parts = (rawParts || []).map(normalizeSchemaPart).filter(Boolean).filter((part) => {
    if (part.type === "connector") return true
    return String(part.text || "").trim().length > 0
  })
  while (parts.length && parts[0].type === "connector") parts = parts.slice(1)
  while (parts.length && parts[parts.length - 1].type === "connector") parts = parts.slice(0, -1)
  return parts.some((p) => p.type === "term") ? parts : null
}

export function normalizeDisplayContent(value) {
  if (value == null || value === "") return null

  if (typeof value === "object" && !Array.isArray(value)) {
    const mode = value.mode || value.kind || (
      Array.isArray(value.entries) ? "reference" :
      Array.isArray(value.parts) || Array.isArray(value.items) ? "schema" :
      value.latex || value.eq ? "math" :
      null
    )

    if (mode === "schema") {
      const rawParts = Array.isArray(value.parts) ? value.parts : value.items
      const parts = filterMeaningfulSchemaParts(rawParts)
      if (!parts?.length) return null
      return {
        mode: "schema",
        layout: value.layout || (parts.length > 1 ? "chain" : "phrase"),
        parts
      }
    }

    if (mode === "reference") {
      const entries = Array.isArray(value.entries) ? value.entries : [value.term || value]
      const cleaned = entries.map(normalizeReferenceEntry).filter((entry) => String(entry.term || "").trim())
      if (!cleaned.length) return null
      return {
        mode: "reference",
        layout: value.layout || "stack",
        entries: cleaned
      }
    }

    if (mode === "math") {
      const source = String(value.latex ?? value.eq ?? "").trim()
      if (!source) return null
      return {
        mode: "math",
        latex: isDelimitedMath(source) ? source : `$$${stripMathDelimiters(source)}$$`,
        raw: source
      }
    }
  }

  const parsed = parseLegacyString(value)
  if (!parsed) return null

  if (parsed.mode === "schema") {
    const parts = filterMeaningfulSchemaParts(parsed.parts)
    if (!parts?.length) return null
    return {
      mode: "schema",
      layout: parsed.layout || (parts.length > 1 ? "chain" : "phrase"),
      parts
    }
  }

  if (parsed.mode === "reference") {
    const entries = (parsed.entries || []).map(normalizeReferenceEntry).filter((entry) => String(entry.term || "").trim())
    if (!entries.length) return null
    return {
      mode: "reference",
      layout: parsed.layout || "stack",
      entries
    }
  }

  return parsed
}

export function hasMeaningfulDisplayContent(value) {
  const normalized = normalizeDisplayContent(value)
  if (!normalized) return false
  if (normalized.mode === "math") return Boolean(stripMathDelimiters(normalized.latex))
  if (normalized.mode === "schema") return normalized.parts.some((part) => part.type === "term" && String(part.text || "").trim())
  if (normalized.mode === "reference") return normalized.entries.some((entry) => String(entry.term || "").trim())
  return false
}

export function getDisplayMode(value) {
  return normalizeDisplayContent(value)?.mode || null
}

export function displayContentToPlainText(value) {
  const normalized = normalizeDisplayContent(value)
  if (!normalized) return ""

  if (normalized.mode === "math") return stripMathDelimiters(normalized.raw || normalized.latex)

  if (normalized.mode === "schema") {
    return normalized.parts
      .map((part) => {
        if (part.type === "connector") return ` ${part.text} `
        return part.text
      })
      .join("")
      .replace(/\s+/g, " ")
      .trim()
  }

  if (normalized.mode === "reference") {
    return normalized.entries
      .map((entry) => entry.note ? `${entry.term}: ${entry.note}` : entry.term)
      .join(" | ")
  }

  return ""
}

function inferSemanticPresentationClass(mode, payload, variant) {
  const v = variant || "default"
  if (!["formula-card", "sidebar", "formula", "theory"].includes(v)) return ""
  if (mode === "math") return ""
  if (mode === "reference") {
    const entries = payload.entries || []
    if (entries.length >= 2) return "semantic-display--pres-contrast"
    return "semantic-display--pres-anchor"
  }
  if (mode === "schema") {
    const parts = payload.parts || []
    const layout = payload.layout || (parts.length > 1 ? "chain" : "phrase")
    if (layout === "chain") return "semantic-display--pres-bridge"
    return "semantic-display--pres-anchor"
  }
  return ""
}

function renderSchemaPart(part) {
  if (part.type === "connector") {
    return `<span class="semantic-schema__connector-wrap">${part.note ? `<span class="semantic-schema__connector-note">${escapeHtml(part.note)}</span>` : ""}<span class="semantic-schema__connector" aria-hidden="true">${escapeHtml(part.text)}</span></span>`
  }
  return `<span class="semantic-schema__item">${escapeHtml(part.text)}</span>`
}

function renderSchemaContent(content, variant) {
  const layout = content.layout || (content.parts.length > 1 ? "chain" : "phrase")
  const pres = inferSemanticPresentationClass("schema", { ...content, layout, parts: content.parts }, variant)
  const rootClass = [
    "semantic-display",
    "semantic-display--schema",
    `semantic-display--${variant}`,
    "semantic-schema",
    `semantic-schema--${layout}`,
    pres
  ].filter(Boolean).join(" ")
  return `<div class="${rootClass}" role="group">${content.parts.map(renderSchemaPart).join("")}</div>`
}

function renderReferenceContent(content, variant) {
  const isSinglePill = content.entries.length === 1 && !content.entries[0].note
  const layout = isSinglePill ? "pill" : (content.layout || "stack")
  const pres = inferSemanticPresentationClass("reference", { entries: content.entries, layout }, variant)
  const rootClass = [
    "semantic-display",
    "semantic-display--reference",
    `semantic-display--${variant}`,
    "semantic-reference",
    `semantic-reference--${layout}`,
    pres
  ].filter(Boolean).join(" ")

  return `<div class="${rootClass}" role="group">${content.entries.map((entry) => `<div class="semantic-reference__entry"><span class="semantic-reference__term">${escapeHtml(entry.term)}</span>${entry.note ? `<span class="semantic-reference__note">${escapeHtml(entry.note)}</span>` : ""}</div>`).join("")}</div>`
}

export function renderSemanticBlock(value, { variant = "default" } = {}) {
  const normalized = normalizeDisplayContent(value)
  if (!normalized) return ""

  if (normalized.mode === "math") {
    const inner = stripMathDelimiters(normalized.latex)
    if (!String(inner || "").trim()) return ""
    return `<div class="math-block math-block--${variant}">${normalized.latex}</div>`
  }

  if (normalized.mode === "reference") {
    return renderReferenceContent(normalized, variant)
  }

  return renderSchemaContent(normalized, variant)
}

export function schemaSequence(parts, options = {}) {
  return {
    mode: "schema",
    layout: options.layout || (Array.isArray(parts) && parts.length > 1 ? "chain" : "phrase"),
    parts
  }
}

export function schemaPhrase(text, options = {}) {
  return schemaSequence([text], { layout: options.layout || "phrase" })
}

export function referenceList(entries, options = {}) {
  return {
    mode: "reference",
    layout: options.layout || "stack",
    entries: Array.isArray(entries) ? entries : [entries]
  }
}

export function mathContent(latex) {
  return { mode: "math", latex }
}
