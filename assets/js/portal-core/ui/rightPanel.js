import { getWarningSystemData, renderRightRailWarnings } from "./warningSystem.js";
import { displayContentToPlainText, getDisplayMode, renderSemanticBlock } from "./semanticContent.js";

/**
 * HTML for Verbindungen (prerequisite / dependent concepts). Used by the right rail and by
 * main-column fallbacks when the rail is hidden (tablet/mobile / focus mode).
 *
 * @param {object} opts
 * @param {{ id: string }[]} opts.chapters
 * @param {string} opts.conceptId
 * @param {Record<string, { uses?: string[], usedBy?: string[] }>} opts.conceptLinks
 * @param {boolean} [opts.groupConnections]
 * @param {'rail'|'main'} [opts.variant] rail = `.rp-*` classes; main = `.cf-*` for #content
 * @returns {string}
 */
export function buildConceptConnectionsHtml({
  chapters,
  conceptId,
  conceptLinks,
  groupConnections = true,
  variant = "rail"
}) {
  const links = conceptLinks[conceptId];
  const chapterMap = Object.fromEntries(chapters.map((chapter) => [chapter.id, chapter]));
  const isMain = variant === "main";
  const gLabel = (text) =>
    isMain ? `<div class="cf-group-label">${text}</div>` : `<div class="rp-group-label">${text}</div>`;
  const wrapOpen = isMain ? `<div class="cf-link-group">` : `<div class="rp-link-group">`;
  const wrapClose = `</div>`;
  const connClass = isMain ? "cf-conn" : "rp-conn";

  if (!links) return "";

  const uses = (links.uses || []).map((linkedId) => chapterMap[linkedId]).filter(Boolean);
  const usedBy = (links.usedBy || []).map((linkedId) => chapterMap[linkedId]).filter(Boolean);

  const row = (chapter, dir) =>
    `<div class="${connClass}" role="button" tabindex="0" onclick="window.__navigate('${chapter.id}')" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')"><span class="arrow arrow--dir-${dir}" aria-hidden="true">${dir === "back" ? "←" : "→"}</span> ${chapter.title}</div>`;

  if (groupConnections) {
    return [
      uses.length ? `${wrapOpen}${gLabel("Setzt voraus")}${uses.map((c) => row(c, "back")).join("")}${wrapClose}` : "",
      usedBy.length ? `${wrapOpen}${gLabel("Wird gebraucht für")}${usedBy.map((c) => row(c, "forward")).join("")}${wrapClose}` : ""
    ].join("");
  }

  return [
    uses.map((c) => row(c, "back")).join(""),
    usedBy.map((c) => row(c, "forward")).join("")
  ].join("");
}

export function createRightPanelRenderer({
  chapters,
  contentById,
  conceptLinks,
  renderMath,
  groupConnections = true,
  renderFormulaEqHtml = (formula) => renderSemanticBlock(formula?.eq, { variant: "sidebar" }),
  getFormulaCopyText = (formula) => displayContentToPlainText(formula?.eq),
  getFormulaDisplayMode = (formula) => getDisplayMode(formula?.eq) || "math",
  /** When set, hide sidebar formulas if the Formeln tab shows the same cards. */
  formulaCardsByConcept = {}
}) {
  function clearRightPanel() {
    const formulasNode = document.getElementById("rpFormulas");
    const connectionsNode = document.getElementById("rpConnections");
    const mistakesNode = document.getElementById("rpMistakes");
    const formulasSection = formulasNode?.closest(".rp-section");
    const connectionsSection = connectionsNode?.closest(".rp-section");
    const mistakesSection = mistakesNode?.closest(".rp-section");

    if (formulasNode) formulasNode.innerHTML = "";
    if (connectionsNode) connectionsNode.innerHTML = "";
    if (mistakesNode) mistakesNode.innerHTML = "";
    if (formulasSection) formulasSection.hidden = true;
    if (connectionsSection) connectionsSection.hidden = true;
    if (mistakesSection) {
      mistakesSection.hidden = true;
      mistakesSection.classList.add("rp-section--mistakes");
    }
  }

  function renderRightPanel(id, options = {}) {
    const entry = contentById[id];
    const chapterMap = Object.fromEntries(chapters.map((chapter) => [chapter.id, chapter]));
    const isFormulaTab = options?.currentTab === "formeln";
    const formulasNode = document.getElementById("rpFormulas");
    const formulasSection = formulasNode?.closest(".rp-section");
    const connectionsNode = document.getElementById("rpConnections");
    const connectionsSection = connectionsNode?.closest(".rp-section");
    const mistakesNode = document.getElementById("rpMistakes");
    const mistakesSection = mistakesNode?.closest(".rp-section");

    if (mistakesSection) mistakesSection.classList.add("rp-section--mistakes");

    if (formulasNode) {
      const formulas = Array.isArray(entry?.formeln) ? entry.formeln.filter((f) => f?.label) : [];
      const onFormelnTab = isFormulaTab;
      if (formulas.length) {
        const rows = formulas.slice(0, 5).map((formula, index) => {
          const label = String(formula.label || "").trim();
          const safeLabel = label.replace(/"/g, "&quot;");
          const handler = onFormelnTab
            ? `window.__scrollToFormulaCard?.(${index})`
            : `window.__switchTab?.('formeln');window.__scrollToFormulaCard?.(${index})`;
          const hint = `<span class="rp-formula-chip-hint">${onFormelnTab ? "Formeln-Tab" : "Formeln-Tab →"}</span>`;
          return `<button type="button" class="rp-formula-chip" data-formula-index="${index}" onclick="${handler}" aria-label="${onFormelnTab ? `Springe zur Formel ${safeLabel}` : `${safeLabel} — Im Formeln-Tab anzeigen`}"><span class="rp-formula-chip-label">${label}</span>${hint}<span class="rp-formula-chip-arrow" aria-hidden="true">→</span></button>`;
        });
        formulasNode.innerHTML = `<div class="rp-formula-index">${rows.join("")}</div>`;
        if (formulasSection) formulasSection.hidden = false;
      } else {
        formulasNode.innerHTML = "";
        if (formulasSection) formulasSection.hidden = true;
      }
    }

    if (connectionsNode) {
      const connHtml = buildConceptConnectionsHtml({
        chapters,
        conceptId: id,
        conceptLinks,
        groupConnections,
        variant: "rail"
      });
      connectionsNode.innerHTML = connHtml;
      if (connectionsSection) connectionsSection.hidden = !connHtml;
    }

    if (mistakesNode) {
      const warningData = getWarningSystemData(entry);
      if (warningData.railWarnings.length) {
        mistakesNode.innerHTML = renderRightRailWarnings(warningData.railWarnings);
        if (typeof renderMath === "function") renderMath(mistakesNode);
        if (mistakesSection) mistakesSection.hidden = false;
      } else {
        mistakesNode.innerHTML = "";
        if (mistakesSection) mistakesSection.hidden = true;
      }
    }
  }

  return { clearRightPanel, renderRightPanel };
}
