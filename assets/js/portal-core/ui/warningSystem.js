import { studentizeTheoryHtml } from "../utils/studentFacingText.js";
import { fuseIntuitionIntoTheoryHtml, theoryToHtml } from "../theory/theoryStructure.js";
import { stripHtml } from "./semanticContent.js";

function stripTrailingColon(value) {
  return String(value ?? "").replace(/[:\s]+$/u, "").trim();
}

function escapeHtmlText(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const ALERT_ICON = `
<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
  <path d="M8.73 2.24l5.21 9.29A1.12 1.12 0 0 1 12.97 13H3.03a1.12 1.12 0 0 1-.97-1.47l5.21-9.29a.82.82 0 0 1 1.46 0Z" fill="currentColor" opacity="0.18"></path>
  <path d="M8 4.6c.39 0 .7.29.74.67l.01.11-.18 3.55a.57.57 0 0 1-1.14 0L7.25 5.38A.75.75 0 0 1 8 4.6Zm0 5.83a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.68Z" fill="currentColor"></path>
</svg>`;

function buildWarningCardInner(title, bodyHtml) {
  return `<div class="warning-card-head">
<span class="warning-card-icon">${ALERT_ICON}</span>
<span class="warning-card-title">${title}</span>
</div>
<div class="warning-card-body">${bodyHtml}</div>`;
}

/** One row inside the unified main-flow „Häufige Fehler“ support surface (Pass 70). */
function buildTheorieFallbackEntryHtml(warning) {
  return `<div class="theorie-fallback-entry" data-warning-placement="main-flow">
<div class="theorie-fallback-entry__head">
<span class="theorie-fallback-entry__icon" aria-hidden="true">${ALERT_ICON}</span>
<span class="theorie-fallback-entry__title">${escapeHtmlText(warning.title)}</span>
</div>
<div class="theorie-fallback-entry__body">${warning.bodyHtml}</div>
</div>`;
}

function dedupeRailWarnings(warnings = []) {
  const merged = new Map();
  warnings.forEach((warning) => {
    const key = String(warning.title || "").trim().toLowerCase();
    if (!key) return;
    const existing = merged.get(key);
    if (!existing) {
      merged.set(key, { ...warning });
      return;
    }
    const bodyText = String(warning.bodyText || "").trim();
    const existingText = String(existing.bodyText || "").trim();
    if (bodyText && bodyText !== existingText && !existingText.includes(bodyText)) {
      existing.bodyHtml = `${existing.bodyHtml}<p class="rp-mistake-body-addendum">${warning.bodyHtml}</p>`;
      existing.bodyText = `${existingText} ${bodyText}`.trim();
    }
  });
  return Array.from(merged.values());
}

function normalizeWarningNode(node) {
  const clone = node.cloneNode(true);
  const strong = clone.querySelector("strong");
  const title = stripTrailingColon(strong?.textContent?.trim() || "Typischer Fehler");
  if (strong) strong.remove();
  const bodyHtml = clone.innerHTML.trim();
  const bodyText = clone.textContent?.replace(/\s+/g, " ").trim() || "";

  return { title, bodyHtml, bodyText };
}

/**
 * Pass 27: every `.warn-box` in `theorie` is recurring mistake-prevention content.
 * It is stripped from the main column and rendered only in the right panel
 * (`#rpMistakes` / „Häufige Fehler“). `data-warning-placement` is ignored for placement.
 */

export function getWarningSystemData(entry, intuition = null, fusionOpts = {}) {
  const moduleSlug = fusionOpts.moduleSlug || entry?.moduleSlug || "";
  const theoryHtml = studentizeTheoryHtml(
    fuseIntuitionIntoTheoryHtml(theoryToHtml(entry?.theorie), intuition, entry, {
      ...fusionOpts,
      moduleSlug,
      chapterTitle: fusionOpts.chapterTitle || entry?.title
    }),
    entry
  );
  if (!theoryHtml || typeof DOMParser === "undefined") {
    return {
      theoryHtml,
      inlineWarnings: [],
      railWarnings: [],
      allWarnings: []
    };
  }

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<div data-warning-root>${theoryHtml}</div>`, "text/html");
    const root = doc.body.querySelector("[data-warning-root]");
    if (!root) {
      return {
        theoryHtml,
        inlineWarnings: [],
        railWarnings: [],
        allWarnings: []
      };
    }

    const railWarnings = [];

    Array.from(
      root.querySelectorAll(".source-boundary-notice, .platform-added-banner, .platform-chrome-badge, .pedagogy-source-note, .mastery-checkpoint__note")
    ).forEach((node) => node.remove());

    const FOOTNOTE_ONLY =
      /^(?:Orientierungshilfe|Generischer Mechanismus-Pfad|Lern-Checkliste|Begriffe aus Formeln-Tab)/i;
    Array.from(root.querySelectorAll("p")).forEach((node) => {
      const em = node.querySelector("em");
      if (em && /^(?:platform-added-|source-distilled|direct-source|cross-link)/i.test(em.textContent || "")) {
        node.remove();
        return;
      }
      const text = (node.textContent || "").replace(/\s+/g, " ").trim();
      if (FOOTNOTE_ONLY.test(text)) node.remove();
    });

    Array.from(root.querySelectorAll(".warn-box")).forEach((warningNode) => {
      const warning = normalizeWarningNode(warningNode);
      if (!warning.bodyHtml) {
        warningNode.remove();
        return;
      }
      railWarnings.push(warning);
      warningNode.classList.add(
        "warn-box--theory-inset",
        "warning-card",
        "learning-trap"
      );
      warningNode.setAttribute("data-warning-placement", "theory-inset");
    });

    Array.from(root.querySelectorAll(".theory-recipe-placeholder")).forEach((node) => node.remove());

    Array.from(root.querySelectorAll(".section-block, .theory-recipe-section")).forEach((section) => {
      const hasContent = Array.from(section.children).some((child) => {
        if (child.tagName === "H3" || child.tagName === "H4") return false;
        if (child.classList?.contains("theory-recipe-heading")) return false;
        if (child.classList?.contains("theory-recipe-body")) {
          return (child.textContent?.replace(/\s+/g, " ").trim() || "").length > 0;
        }
        const text = child.textContent?.replace(/\s+/g, " ").trim() || "";
        return text.length > 0;
      });
      if (!hasContent) section.remove();
    });

    const dedupedRailWarnings = dedupeRailWarnings(railWarnings);

    return {
      theoryHtml: root.innerHTML,
      inlineWarnings: [],
      railWarnings: dedupedRailWarnings,
      allWarnings: [...dedupedRailWarnings]
    };
  } catch {
    return {
      theoryHtml,
      inlineWarnings: [],
      railWarnings: [],
      allWarnings: []
    };
  }
}

/** Compact right-rail mistake note — cap visible rows; overflow behind disclosure. */
const RAIL_BODY_PREVIEW_LEN = 320;

function renderRailWarningBody(warning) {
  const plain = String(warning.bodyText || stripHtml(warning.bodyHtml || "")).replace(/\s+/g, " ").trim();
  if (plain.length <= RAIL_BODY_PREVIEW_LEN) {
    return `<div class="rp-mistake-body">${warning.bodyHtml}</div>`;
  }
  const preview = escapeHtmlText(plain.slice(0, RAIL_BODY_PREVIEW_LEN).trim()) + "…";
  return `<div class="rp-mistake-body rp-mistake-body--truncated">
<p class="rp-mistake-body-preview">${preview}</p>
<details class="rp-mistake-body-more">
<summary class="rp-mistake-body-more__summary">Mehr anzeigen</summary>
<div class="rp-mistake-body-full">${warning.bodyHtml}</div>
</details>
</div>`;
}

export function renderRightRailWarnings(warnings = [], { expandedLimit = 2 } = {}) {
  if (!warnings.length) return "";
  const renderRow = (warning) =>
    `<article class="rp-mistake rp-mistake--rail" data-warning-placement="rail">
<div class="rp-mistake-title">${escapeHtmlText(warning.title)}</div>
${renderRailWarningBody(warning)}
</article>`;
  const primary = warnings.slice(0, expandedLimit).map(renderRow).join("");
  const overflow = warnings.slice(expandedLimit);
  if (!overflow.length) return primary;
  return `${primary}<details class="rp-mistakes-overflow">
<summary class="rp-mistakes-overflow__summary">Weitere Fehler anzeigen (${overflow.length})</summary>
<div class="rp-mistakes-overflow__body">${overflow.map(renderRow).join("")}</div>
</details>`;
}

/**
 * Main-column mirror of „Häufige Fehler“ when `#rightPanel` is hidden (narrow / focus mode).
 * Pass 70: one integrated theory-support surface + internal rows (not stacked `.warning-card` siblings).
 */
export function renderMainFlowMistakesSection(railWarnings = []) {
  if (!railWarnings.length) return "";
  const entries = railWarnings.map((w) => buildTheorieFallbackEntryHtml(w)).join("");
  return `<section class="content-fallback content-fallback--mistakes content-fallback--rp-mirror" aria-labelledby="content-fallback-mistakes-h">
<h3 class="content-fallback__title" id="content-fallback-mistakes-h">Häufige Fehler</h3>
<div class="theorie-fallback-support">${entries}</div>
</section>`;
}

export function renderTaskWarningCard(bodyHtml, title = "Klausurhinweis") {
  if (!String(bodyHtml || "").trim()) return "";
  return `<div class="warning-card warning-card--task" data-warning-placement="task">
${buildWarningCardInner(title, bodyHtml)}
</div>`;
}
