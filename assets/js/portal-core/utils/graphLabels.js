/**
 * Pass 61 — Canvas graph annotations cannot render LaTeX/MathJax.
 * Normalizes any TeX-like source into short, student-facing German labels.
 *
 * Pass 74 (fleet graph pedagogy) — fixed exam-ready strings for recurring motifs.
 */

/** @type {Record<string, string>} */
export const GRAPH_CANVAS_LABELS = {
  o_a: "O_A",
  o_b: "O_B",
  x1_a: "x₁ (A)",
  x2_a: "x₂ (A)",
  x1_b: "x₁ (B)",
  x2_b: "x₂ (B)",
  endowment: "E — Endausstattung",
  contract: "C — Vertragspunkt",
  ic_a: "Indifferenz A",
  ic_b: "Indifferenz B",
  contract_curve: "Kontraktkurve",
  trade_lens: "Tauschrichtung"
};

/**
 * @param {keyof typeof GRAPH_CANVAS_LABELS | string} key
 * @returns {string}
 */
export function graphCanvasLabel(key) {
  if (key && Object.prototype.hasOwnProperty.call(GRAPH_CANVAS_LABELS, key)) {
    return GRAPH_CANVAS_LABELS[key];
  }
  return sanitizeGraphCanvasLabel(key);
}

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
    const subSup = s.replace(/\^A\b/g, " (A)").replace(/\^B\b/g, " (B)");
    if (subSup !== s) return collapseWs(subSup);
    return s
  }

  if (/O[_\s]?A/i.test(flat) && flat.length <= 4) return GRAPH_CANVAS_LABELS.o_a
  if (/O[_\s]?B/i.test(flat) && flat.length <= 4) return GRAPH_CANVAS_LABELS.o_b
  if (/x[_\s]?1\^?A/i.test(flat) || /x_1\^\{A\}/i.test(spaced)) return GRAPH_CANVAS_LABELS.x1_a
  if (/x[_\s]?2\^?A/i.test(flat) || /x_2\^\{A\}/i.test(spaced)) return GRAPH_CANVAS_LABELS.x2_a
  if (/x[_\s]?1\^?B/i.test(flat) || /x_1\^\{B\}/i.test(spaced)) return GRAPH_CANVAS_LABELS.x1_b
  if (/x[_\s]?2\^?B/i.test(flat) || /x_2\^\{B\}/i.test(spaced)) return GRAPH_CANVAS_LABELS.x2_b

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
