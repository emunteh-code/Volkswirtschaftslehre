/**
 * Title / card-header math: convert unicode notation to inline $…$ for MathJax,
 * without the aggressive standalone-token wrapping used in body prose.
 */
import { decodeHtmlEntities } from "./semanticContent.js";
import { renderTeachingProse } from "./teachingProse.js";

const SUBSCRIPT_MAP = {
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ᵢ": "i",
  "ₘ": "m",
  "ₖ": "k",
  "ₗ": "l",
  "ᵥ": "v",
  "ₚ": "p"
};

const SUPERSCRIPT_MAP = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9"
};

const GREEK_TO_LATEX = {
  λ: "\\lambda",
  μ: "\\mu",
  ω: "\\omega",
  π: "\\pi",
  Δ: "\\Delta",
  ε: "\\varepsilon",
  α: "\\alpha",
  β: "\\beta",
  ρ: "\\rho",
  σ: "\\sigma",
  θ: "\\theta",
  γ: "\\gamma",
  δ: "\\delta"
};

const HAT_TOKENS = [
  ["β̂", "\\hat{\\beta}"],
  ["σ̂", "\\hat{\\sigma}"],
  ["ρ̂", "\\hat{\\rho}"],
  ["ŷ", "\\hat{y}"],
  ["û", "\\hat{u}"]
];

const SUBSCRIPT_CHARS = "₀₁₂₃₄₅₆₇₈₉";
const SUPERSCRIPT_CHARS = "⁰¹²³⁴⁵⁶⁷⁸⁹";
const MATH_HINT =
  /[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹λμωπΔεαβρσθγδ]|β̂|σ̂|ρ̂|ŷ|û|H₀|H₁|u₀|y₀|x₀|∂|∑|∞|≤|≥|→|·|×|\\|_\{|\b[A-Za-z]{1,8}_[a-z0-9](?=[,\s;:|)\]]|$)/u;

const LATEX_COMMAND_TOKEN =
  /\\[a-zA-Z]+(?:\{[^}]*\})*(?:(?:_\{[^}]+\})|(?:_[A-Za-z0-9]+)|(?:\^\{[^}]+\})|(?:\^[A-Za-z0-9+\-]+))*/g;

const BRACED_SUBSCRIPT_TOKEN = /(?<![$\\])([A-Za-z]+(?:\^[A-Za-z0-9+\-]+|\^\{[^}]+\})?)_\{([^}]+)\}/g;

const SINGLE_SUBSCRIPT_TOKEN = /\b([A-Za-z]{1,8})_([a-z0-9])(?=[,\s;:|)\]]|$)/g;

const TITLE_MATH_SEGMENT =
  /(?:β̂|σ̂|ρ̂|ŷ|û|H[₀₁₂]|u[₀₁₂]|y[₀₁₂]|x[₀₁₂]|p[₀₁₂]|(?:[xXpPuUvVeEhHmMqQwWrRLKCFy]|MU|MP|GRS|GRTS|MR|MC|AC|CV|EV|DWL|KR|PR|SE|EE|MZB)(?:[₀₁₂₃₄₅₆₇₈₉]+|[⁰¹²³⁴⁵⁶⁷⁸⁹]+|\*|\([^)]*\))?(?:\s*[·×/]\s*(?:[xXpPuUvVeEhHmMqQwWrRLKCFy]|MU|MP|p[₀₁₂]|x[₀₁₂])(?:[₀₁₂₃₄₅₆₇₈₉]+|\*)?)?|[λμωπΔεαβρσθγδ])(?:\*|[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹]+)?/gu;

function mergeAdjacentInlineMath(text) {
  let result = String(text ?? "");
  let previous = "";
  const adjacentInlineMath = /\$([^$]+)\$\s*\$([^$]+)\$/g;
  while (result !== previous) {
    previous = result;
    result = result.replace(adjacentInlineMath, (_, left, right) => `$${left} ${right}$`);
  }
  return result;
}

function normalizeTitleToken(token) {
  let normalized = String(token ?? "")
    .replace(/[−–]/g, "-")
    .replace(/·/g, "\\cdot ")
    .replace(/×/g, "\\times ")
    .replace(/≤/g, "\\le ")
    .replace(/≥/g, "\\ge ")
    .replace(/→/g, "\\to ");

  for (const [raw, latex] of HAT_TOKENS) {
    normalized = normalized.replaceAll(raw, latex);
  }

  normalized = normalized.replace(
    new RegExp(String.raw`([A-Za-z${Object.keys(GREEK_TO_LATEX).join("")}]+)([${SUBSCRIPT_CHARS}]+)(\*?)`, "gu"),
    (_, base, suffix, star) => {
      const sub = Array.from(suffix)
        .map((char) => SUBSCRIPT_MAP[char] || char)
        .join("");
      const subPart = sub.length > 1 ? `_{${sub}}` : `_${sub}`;
      return `${base}${subPart}${star ? "^*" : ""}`;
    }
  );

  normalized = normalized.replace(
    new RegExp(String.raw`([A-Za-z0-9])([${SUPERSCRIPT_CHARS}]+)`, "gu"),
    (_, base, suffix) => {
      const sup = Array.from(suffix)
        .map((char) => SUPERSCRIPT_MAP[char] || char)
        .join("");
      return `${base}^{${sup}}`;
    }
  );

  for (const [greek, latex] of Object.entries(GREEK_TO_LATEX)) {
    normalized = normalized.replace(new RegExp(greek, "g"), latex);
  }

  return normalized.replace(/\s+/g, " ").trim();
}

function wrapTitleMathSegment(segment) {
  const body = normalizeTitleToken(segment);
  if (!body) return segment;
  return `$${body}$`;
}

function isInsideInlineMath(text, index) {
  const prefix = text.slice(0, index);
  const dollars = (prefix.match(/(?<!\\)\$/g) || []).length;
  return dollars % 2 === 1;
}

function isSingleLetterInsideWord(text, start, end) {
  const slice = text.slice(start, end);
  if (slice.length !== 1 || !/^[A-Za-z]$/.test(slice)) return false;
  const before = start > 0 ? text[start - 1] : "";
  const after = end < text.length ? text[end] : "";
  return /[\p{L}\p{N}_]/u.test(before) || /[\p{L}\p{N}_]/u.test(after);
}

function wrapUndelimitedLatexSubscripts(text) {
  let out = String(text ?? "");

  out = out.replace(LATEX_COMMAND_TOKEN, (match, offset) => {
    if (isInsideInlineMath(out, offset)) return match;
    return `$${match}$`;
  });

  out = out.replace(BRACED_SUBSCRIPT_TOKEN, (match, base, sub, offset) => {
    if (isInsideInlineMath(out, offset)) return match;
    return `$${base}_{${sub}}$`;
  });

  out = out.replace(SINGLE_SUBSCRIPT_TOKEN, (match, base, sub, offset) => {
    if (isInsideInlineMath(out, offset)) return match;
    return `$${base}_${sub}$`;
  });

  return out.replace(TITLE_MATH_SEGMENT, (match, offset) => {
    if (isInsideInlineMath(out, offset)) return match;
    const end = offset + match.length;
    if (isSingleLetterInsideWord(out, offset, end)) return match;
    return wrapTitleMathSegment(match);
  });
}

function formatPlainTitleMath(text) {
  const raw = String(text ?? "");
  if (!raw || !MATH_HINT.test(raw)) return raw;
  return mergeAdjacentInlineMath(wrapUndelimitedLatexSubscripts(raw));
}

/**
 * @param {string} value
 * @returns {string}
 */
export function formatMathInTitle(value) {
  const raw = decodeHtmlEntities(String(value ?? "")).trim();
  if (!raw) return raw;

  const formatted = raw
    .split(/(\$\$[\s\S]+?\$\$|\$[^$]+\$)/g)
    .map((segment) => {
      if (!segment || segment.startsWith("$")) return segment;
      return formatPlainTitleMath(segment);
    })
    .join("");

  return mergeAdjacentInlineMath(formatted);
}

/**
 * Safe HTML for titles / card headers: escapes prose, preserves inline math.
 * @param {string} value
 * @returns {string}
 */
export function renderMathTitle(value) {
  const formatted = formatMathInTitle(value);
  if (!formatted) return "";
  return renderTeachingProse(formatted);
}
