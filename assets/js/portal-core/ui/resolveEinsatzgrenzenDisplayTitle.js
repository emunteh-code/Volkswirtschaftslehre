/**
 * Human-readable titles for Herleitung / Einsatzgrenzen formula-support blocks.
 */
import { displayContentToPlainText } from "./semanticContent.js";
import { formatMathInTitle } from "./formatMathInTitle.js";

const MODULE_CONCEPT_ID = /^[^.]+\.[^.]+\.[^.]+$/;
const NOTATION_ONLY = /^[A-Za-z](?:_[A-Za-z0-9]+)?$/;
const SLUG_LIKE = /^[a-z][a-z0-9_]*$/;

function hasMeaningfulText(value) {
  return String(value ?? "").trim().length > 0;
}

function normalizeEq(eq) {
  return displayContentToPlainText(eq).replace(/\s+/g, "").replace(/\$/g, "");
}

function humanizeSlugSegment(segment) {
  const raw = String(segment ?? "").trim();
  if (!raw) return "";
  return raw
    .split("_")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function slugFromCardId(id) {
  const parts = String(id ?? "").split(".").filter(Boolean);
  return parts.length ? parts[parts.length - 1] : "";
}

function getPrimaryDerivationLabel(card) {
  const steps = Array.isArray(card?.derivationSteps) ? card.derivationSteps : [];
  const step = steps.find((entry) => hasMeaningfulText(entry?.label) && entry.label !== "Anwendung");
  return step?.label?.trim() || "";
}

function getAppliesWhenLabel(card) {
  const applies = Array.isArray(card?.appliesWhen) ? card.appliesWhen : [];
  const candidate = applies.find((item) => {
    const text = String(item ?? "").trim();
    return text && !/^Klausuraufgaben\b/i.test(text);
  });
  return String(candidate ?? "").trim();
}

function findLinkedChapterFormula(card, concept) {
  const formeln = Array.isArray(concept?.entry?.formeln) ? concept.entry.formeln : [];
  if (!formeln.length) return null;

  const cardEq = normalizeEq(card?.displayFormula);
  if (cardEq) {
    const byEq = formeln.find((formula) => normalizeEq(formula?.eq) === cardEq);
    if (byEq) return byEq;
  }

  const cardLabel = getPrimaryDerivationLabel(card) || getAppliesWhenLabel(card);
  if (cardLabel) {
    const norm = cardLabel.toLowerCase();
    const byLabel = formeln.find((formula) => String(formula?.label ?? "").trim().toLowerCase() === norm);
    if (byLabel) return byLabel;
  }

  const idSlug = slugFromCardId(card?.id);
  if (idSlug) {
    const normSlug = idSlug.toLowerCase();
    const bySlug = formeln.find((formula) => {
      const label = String(formula?.label ?? "").trim().toLowerCase().replace(/\s+/g, "");
      return label && (label === normSlug || normSlug.includes(label) || label.includes(normSlug));
    });
    if (bySlug) return bySlug;
  }

  return null;
}

function lookupVariableDefinition(notation, concept, linkedFormula) {
  const key = String(notation ?? "").trim();
  if (!key) return "";

  const buckets = [
    linkedFormula?.variables,
    ...(Array.isArray(concept?.entry?.formeln)
      ? concept.entry.formeln.map((formula) => formula?.variables)
      : [])
  ];

  for (const variables of buckets) {
    if (!variables || typeof variables !== "object") continue;
    const hit = variables[key];
    if (hasMeaningfulText(hit)) return String(hit).trim();
  }

  return "";
}

function isConceptSlugNotation(notation, card, concept) {
  const value = String(notation ?? "").trim();
  if (!value || !SLUG_LIKE.test(value)) return false;
  const conceptId = String(card?.conceptId || concept?.chapter?.id || "").trim();
  return Boolean(conceptId) && value === conceptId;
}

function buildBezugTitle(germanName, notation) {
  const math = formatMathInTitle(notation);
  const name = germanName.trim();
  return name ? `Bezug: ${name} (${math})` : `Bezug: ${math}`;
}

function shouldUseSubtitle(subtitle, title) {
  if (!hasMeaningfulText(subtitle)) return "";
  const sub = subtitle.trim();
  const tit = title.trim().toLowerCase();
  if (tit.includes(sub.toLowerCase())) return "";
  return sub;
}

/**
 * @param {object} block - formula card (exam-OS block)
 * @param {object} formulaCard - same card or linked formula metadata
 * @param {{ chapter?: { id?: string, title?: string }, entry?: { formeln?: object[] } }} concept
 * @returns {{ title: string, subtitle: string }}
 */
export function resolveEinsatzgrenzenDisplayTitle(block, formulaCard, concept) {
  const card = formulaCard || block || {};
  const linked = findLinkedChapterFormula(card, concept);
  const derivationLabel = getPrimaryDerivationLabel(card);
  const appliesLabel = getAppliesWhenLabel(card);
  const chapterTitle = String(concept?.chapter?.title ?? "").trim();
  const notation = String(card.officialNotation ?? "").trim();
  const cardLabel = String(card.label ?? linked?.label ?? "").trim();
  const subtitleSource =
    String(linked?.desc ?? "").trim() ||
    String(card.intuition ?? "").trim();

  if (cardLabel) {
    return {
      title: cardLabel,
      subtitle: shouldUseSubtitle(subtitleSource, cardLabel)
    };
  }

  if (linked?.label) {
    return {
      title: linked.label,
      subtitle: shouldUseSubtitle(subtitleSource, linked.label)
    };
  }

  if (NOTATION_ONLY.test(notation)) {
    const def = lookupVariableDefinition(notation, concept, linked);
    const title = buildBezugTitle(def || derivationLabel || appliesLabel, notation);
    return { title, subtitle: shouldUseSubtitle(subtitleSource, title) };
  }

  if (!notation && MODULE_CONCEPT_ID.test(String(card.id ?? ""))) {
    const title = derivationLabel || appliesLabel || humanizeSlugSegment(slugFromCardId(card.id));
    return { title, subtitle: shouldUseSubtitle(subtitleSource, title) };
  }

  if (isConceptSlugNotation(notation, card, concept)) {
    const title = derivationLabel || appliesLabel || chapterTitle || humanizeSlugSegment(notation);
    return { title, subtitle: shouldUseSubtitle(subtitleSource, title) };
  }

  if (notation && SLUG_LIKE.test(notation) && !NOTATION_ONLY.test(notation)) {
    const title = derivationLabel || appliesLabel || humanizeSlugSegment(notation);
    return { title, subtitle: shouldUseSubtitle(subtitleSource, title) };
  }

  if (derivationLabel) {
    return {
      title: derivationLabel,
      subtitle: shouldUseSubtitle(subtitleSource, derivationLabel)
    };
  }

  if (appliesLabel) {
    return { title: appliesLabel, subtitle: shouldUseSubtitle(subtitleSource, appliesLabel) };
  }

  if (notation) {
    return {
      title: formatMathInTitle(notation),
      subtitle: shouldUseSubtitle(subtitleSource, notation)
    };
  }

  if (MODULE_CONCEPT_ID.test(String(card.id ?? ""))) {
    const title = humanizeSlugSegment(slugFromCardId(card.id));
    return { title, subtitle: shouldUseSubtitle(subtitleSource, title) };
  }

  const fallback = String(card.id ?? chapterTitle ?? "Formel").trim();
  return { title: fallback, subtitle: shouldUseSubtitle(subtitleSource, fallback) };
}
