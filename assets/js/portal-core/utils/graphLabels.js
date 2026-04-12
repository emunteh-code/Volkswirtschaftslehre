/**
 * Pass 61 — Canvas graph annotations cannot render LaTeX/MathJax.
 * Normalizes any TeX-like source into short, student-facing German labels.
 */

function collapseWs(s) {
  return String(s || "").replace(/\s+/g, " ").trim()
}

function stripDollars(s) {
  return String(s || "")
    .replace(/^\$+/, "")
    .replace(/\$+$/, "")
    .trim()
}

/**
 * @param {unknown} raw
 * @returns {string} Safe plain text for ctx.fillText / legend rows
 */
export function sanitizeGraphCanvasLabel(raw) {
  if (raw == null) return ""
  const original = String(raw).trim()
  if (!original) return ""

  const s = stripDollars(original).trim()
  if (!s) return ""

  const spaced = collapseWs(s)
  const flat = spaced.replace(/\s/g, "")

  if (!/\\/.test(s)) {
    return s
  }

  if (
    /\\hat\{?y\}?\s*=\s*\\hat\{?\\beta\}_0\s*\+\s*\\hat\{?\\beta\}_1\s*x/i.test(spaced)
    || /\\hat\{?y\}?\s*=\s*\\hat\{?\\beta\}_0\s*\+\s*\\hat\{?\\beta\}_1\s*x/i.test(flat)
  ) {
    return "OLS-Gerade"
  }

  if (/^\\bar\{x\}$/i.test(flat) || /^\\barx$/i.test(flat) || /^\\bar\s+x$/i.test(spaced)) {
    return "Mittelwert"
  }

  if (/^\\hat\{?y\}?$/i.test(flat) || /^\\haty$/i.test(flat)) {
    return "Schätzwert y"
  }

  return texToReadableShort(spaced)
}

function texToReadableShort(src) {
  let t = src
  t = t.replace(/\\mathrm\{([^}]*)\}/g, "$1")
  t = t.replace(/\\operatorname\*?\{([^}]*)\}/g, "$1")
  t = t.replace(/\\text\{([^}]*)\}/g, "$1")
  t = t.replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, "($1)/($2)")
  t = t.replace(/\\hat\{([^}]+)\}/g, "$1̂")
  t = t.replace(/\\hat\s+([a-zA-Z])/g, "$1̂")
  t = t.replace(/\\bar\{([^}]+)\}/g, "⌀$1")
  t = t.replace(/\\bar\s+([a-zA-Z])/g, "⌀$1")
  const greek = [
    [/\\beta/g, "β"],
    [/\\alpha/g, "α"],
    [/\\gamma/g, "γ"],
    [/\\delta/g, "δ"],
    [/\\pi/g, "π"],
    [/\\sigma/g, "σ"],
    [/\\mu/g, "μ"],
    [/\\lambda/g, "λ"],
    [/\\theta/g, "θ"],
    [/\\varepsilon/g, "ε"],
    [/\\phi/g, "φ"],
    [/\\omega/g, "ω"],
    [/\\Delta/g, "Δ"],
    [/\\Sigma/g, "Σ"]
  ]
  for (const [re, ch] of greek) {
    t = t.replace(re, ch)
  }
  t = t.replace(/\\cdot/g, "·")
  t = t.replace(/\\times/g, "×")
  t = t.replace(/\\pm/g, "±")
  t = t.replace(/\\leq/g, "≤")
  t = t.replace(/\\geq/g, "≥")
  t = t.replace(/\\neq/g, "≠")
  t = t.replace(/\\approx/g, "≈")
  t = t.replace(/\\rightarrow/g, "→")
  t = t.replace(/\\Rightarrow/g, "⇒")
  t = t.replace(/\\left|\\right|\\mid|\\quad|\\qquad|\\,/g, " ")
  t = t.replace(/\\[a-zA-Z]+/g, " ")
  t = t.replace(/[${}_^]/g, " ")
  t = collapseWs(t)
  if (!t || /^[·\s.,:;]+$/.test(t)) return "Beschriftung"
  return t.length > 44 ? `${t.slice(0, 41)}…` : t
}
