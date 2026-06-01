/**
 * Auto-highlight practice task prose: dataset values + concept glossary terms.
 * Safe on HTML from renderTeachingProse (escaped plain segments + preserved math).
 */
import { stripHtml } from "../ui/semanticContent.js";

const SPLIT_RE = /(\$\$[\s\S]*?\$\$|\$[^$\n]+\$|<[^>]+>)/g;

const NUMERIC_RE = /\b(\d{1,4}(?:[.,]\d+)?)\b/g;

/**
 * @param {object|null} entry
 * @param {object|null} intuition
 * @returns {string[]}
 */
export function extractConceptHighlightTerms(entry, intuition = null) {
  const terms = new Set();

  for (const formula of entry?.formeln || []) {
    if (formula?.label) terms.add(stripHtml(String(formula.label)).trim());
    for (const value of Object.values(formula?.variables || {})) {
      const v = stripHtml(String(value ?? "")).trim();
      if (v.length >= 3) terms.add(v);
    }
  }

  const theoryHtml = String(entry?.theorie ?? "");
  const strongRe = /<strong[^>]*>([^<]+)<\/strong>/gi;
  let match = strongRe.exec(theoryHtml);
  while (match) {
    const t = stripHtml(match[1]).trim();
    if (t.length >= 4 && t.length <= 56) terms.add(t);
    match = strongRe.exec(theoryHtml);
  }

  const subsectionRe = /<h4[^>]*class="theory-subsection-title"[^>]*>([^<]+)<\/h4>/gi;
  match = subsectionRe.exec(theoryHtml);
  while (match) {
    const t = stripHtml(match[1]).trim();
    if (t.length >= 4 && t.length <= 56) terms.add(t);
    match = subsectionRe.exec(theoryHtml);
  }

  if (intuition?.core) {
    const core = stripHtml(String(intuition.core)).trim();
    if (core.length >= 4 && core.length <= 80) terms.add(core);
  }

  return [...terms]
    .filter((t) => t && !/^\d+$/.test(t))
    .sort((a, b) => b.length - a.length);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * @param {string} segment Plain or escaped text segment (no tags/math).
 */
function highlightNumericSegment(segment) {
  return segment.replace(NUMERIC_RE, (full, num) => {
    if (!num || num.length < 1) return full;
    return `<span class="task-data">${num}</span>`;
  });
}

/**
 * @param {string} segment
 * @param {string[]} terms Longest first.
 */
function highlightTermSegment(segment, terms) {
  let out = segment;
  for (const term of terms) {
    if (!term || term.length < 4) continue;
    const re = new RegExp(`(?<![\\wäöüßÄÖÜ])(${escapeRegExp(term)})(?![\\wäöüßÄÖÜ])`, "gi");
    out = out.replace(re, '<strong class="learning-key">$1</strong>');
  }
  return out;
}

/**
 * @param {string} html From renderTeachingProse
 * @param {{ terms?: string[] }} [options]
 */
export function highlightPracticeText(html, { terms = [] } = {}) {
  const source = String(html ?? "");
  if (!source) return "";

  const parts = source.split(SPLIT_RE);
  const sortedTerms = [...terms].sort((a, b) => b.length - a.length);

  return parts
    .map((part) => {
      if (!part) return "";
      if (part.startsWith("<") || part.startsWith("$")) return part;
      let segment = highlightNumericSegment(part);
      if (sortedTerms.length) segment = highlightTermSegment(segment, sortedTerms);
      return segment;
    })
    .join("");
}
