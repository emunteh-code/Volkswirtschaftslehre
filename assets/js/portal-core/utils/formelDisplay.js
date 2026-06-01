import { escapeHtml, renderSemanticBlock } from "../ui/semanticContent.js";

/**
 * Render a formula `eq` field (string | semantic object) for student-facing HTML.
 * @param {unknown} eq
 * @param {{ variant?: string }} [opts]
 * @returns {string}
 */
export function formatFormelEqForDisplay(eq, opts = {}) {
  const variant = opts.variant || "theory";
  if (eq == null || eq === "") return "";

  if (typeof eq === "string") {
    const trimmed = eq.trim();
    if (!trimmed || trimmed === "[object Object]") return "";
    const rendered = renderSemanticBlock(trimmed, { variant });
    return rendered || `<div class="math-block math-block--${variant}">${escapeHtml(trimmed)}</div>`;
  }

  if (typeof eq === "object") {
    const rendered = renderSemanticBlock(eq, { variant });
    return rendered || "";
  }

  const coerced = String(eq).trim();
  if (!coerced || coerced === "[object Object]") return "";
  return `<div class="math-block math-block--${variant}">${escapeHtml(coerced)}</div>`;
}

/**
 * @param {string|{ label?: string, eq?: unknown, desc?: string }} formel
 * @param {{ variant?: string }} [opts]
 * @returns {string}
 */
export function formatFormelForDisplay(formel, opts = {}) {
  if (formel == null) return "";
  if (typeof formel === "string") return formatFormelEqForDisplay(formel, opts);
  if (typeof formel === "object") {
    return formatFormelEqForDisplay(formel.eq, opts);
  }
  return formatFormelEqForDisplay(formel, opts);
}

function indexFormelnByLabel(formeln = []) {
  const map = new Map();
  for (const formel of formeln) {
    const label = String(formel?.label || "").trim();
    if (!label) continue;
    map.set(label, formel);
    const base = label.replace(/\s*\(Merksatz\)\s*$/i, "").trim();
    if (base && !map.has(base)) map.set(base, formel);
  }
  return map;
}

/**
 * Replace baked `[object Object]` math blocks using matching `formeln` labels.
 * @param {string} html
 * @param {Array<{ label?: string, eq?: unknown }>} [formeln]
 * @returns {string}
 */
export function repairTheoryObjectPlaceholders(html, formeln = []) {
  let out = String(html ?? "");
  if (!out.includes("[object Object]")) return out;

  const byLabel = indexFormelnByLabel(formeln);

  out = out.replace(
    /<p><strong>([^<]*)<\/strong><\/p>\s*<div class="math-block">\[object Object\]<\/div>/gi,
    (match, rawLabel) => {
      const label = rawLabel.trim();
      const formel = byLabel.get(label);
      if (!formel) return match;
      const block = formatFormelEqForDisplay(formel.eq, { variant: "theory" });
      return block ? `<p><strong>${rawLabel}</strong></p>${block}` : match;
    }
  );

  let orphanIndex = 0;
  out = out.replace(/<div class="math-block">\[object Object\]<\/div>/gi, (match) => {
    const formel = formeln[orphanIndex++];
    if (!formel) return match;
    const block = formatFormelEqForDisplay(formel.eq, { variant: "theory" });
    return block || match;
  });

  return out;
}

/**
 * Light typography cleanup for theory HTML (sentence case, double periods).
 * @param {string} html
 * @returns {string}
 */
export function polishTheoryTypography(html) {
  let out = String(html ?? "");
  if (!out) return out;

  out = out.replace(/(?<=[a-zäöüß])\.{2,}(?=\s|<|$)/gi, ".");
  out = out.replace(/(?<=[.!?])\s{2,}/g, " ");
  out = out.replace(/\b(dann|und|oder|aber|wenn)\s+([A-ZÄÖÜ][a-zäöüß]+)/g, (m, conj, word) => {
    if (/^(BGB|AGB|AT|IV|OLG|BGH|EuGH|§)/.test(word)) return m;
    return `${conj} ${word.charAt(0).toLowerCase()}${word.slice(1)}`;
  });

  out = out.replace(
    /(<p class="theory-intuition-lead">)([\s\S]*?)(<\/p>)/gi,
    (_m, open, body, close) => {
      const fixed = body.replace(/\b([A-ZÄÖÜ]{5,})\b/g, (word) => {
        if (/^(BGB|AGB|KLAUSUR|TRANSFER|MERKSATZ)$/.test(word)) return word;
        return word.charAt(0) + word.slice(1).toLowerCase();
      });
      return `${open}${fixed}${close}`;
    }
  );

  return out;
}

/**
 * Full student theory pipeline: repair objects, polish, strip dev labels.
 * @param {string} html
 * @param {{ formeln?: Array<{ label?: string, eq?: unknown }> }} [entry]
 */
export function prepareTheoryHtmlForStudent(html, entry = {}) {
  const repaired = repairTheoryObjectPlaceholders(html, entry.formeln);
  return polishTheoryTypography(repaired);
}
