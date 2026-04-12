import { getWarningSystemData, renderRightRailWarnings } from "./warningSystem.js";
import { displayContentToPlainText, getDisplayMode, renderSemanticBlock } from "./semanticContent.js";

export function createRightPanelRenderer({
  chapters,
  contentById,
  conceptLinks,
  renderMath,
  groupConnections = false,
  renderFormulaEqHtml = (formula) => renderSemanticBlock(formula?.eq, { variant: "sidebar" }),
  getFormulaCopyText = (formula) => displayContentToPlainText(formula?.eq),
  getFormulaDisplayMode = (formula) => getDisplayMode(formula?.eq) || "math"
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
    const links = conceptLinks[id];
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
      if (isFormulaTab) {
        formulasNode.innerHTML = "";
        if (formulasSection) formulasSection.hidden = true;
      } else if (entry?.formeln?.length) {
        formulasNode.innerHTML = entry.formeln.map((formula, index) => {
          const mode = getFormulaDisplayMode(formula) || "math";
          return `<div class="rp-formula rp-formula--${mode}" title="Klicken zum Kopieren" role="button" tabindex="0" data-formula-idx="${index}">
  <div class="rp-f-name">${formula.label}</div>
  <div class="rp-f-eq">${renderFormulaEqHtml(formula)}</div>
</div>`;
        }).join("");

        formulasNode.querySelectorAll("[data-formula-idx]").forEach((element) => {
          const formula = entry.formeln[Number.parseInt(element.dataset.formulaIdx || "0", 10)];
          const copy = () => navigator.clipboard.writeText(getFormulaCopyText(formula)).catch(() => {});
          element.addEventListener("click", copy);
          element.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              copy();
            }
          });
        });

        if (typeof renderMath === "function") renderMath(formulasNode);
        if (formulasSection) formulasSection.hidden = false;
      } else {
        formulasNode.innerHTML = "";
        if (formulasSection) formulasSection.hidden = true;
      }
    }

    if (connectionsNode) {
      if (links) {
        const uses = (links.uses || []).map((linkedId) => chapterMap[linkedId]).filter(Boolean);
        const usedBy = (links.usedBy || []).map((linkedId) => chapterMap[linkedId]).filter(Boolean);
        const html = groupConnections
          ? [
              uses.length ? `<div class="rp-link-group">
<div class="rp-group-label">Setzt voraus</div>
${uses.map((chapter) => `<div class="rp-conn" role="button" tabindex="0" onclick="window.__navigate('${chapter.id}')" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')"><span class="arrow" aria-hidden="true">←</span> ${chapter.title}</div>`).join("")}
</div>` : "",
              usedBy.length ? `<div class="rp-link-group">
<div class="rp-group-label">Wird gebraucht für</div>
${usedBy.map((chapter) => `<div class="rp-conn" role="button" tabindex="0" onclick="window.__navigate('${chapter.id}')" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')"><span class="arrow" aria-hidden="true">→</span> ${chapter.title}</div>`).join("")}
</div>` : ""
            ].join("")
          : [
              uses.map((chapter) => `<div class="rp-conn" role="button" tabindex="0" onclick="window.__navigate('${chapter.id}')" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')"><span class="arrow" aria-hidden="true">←</span> ${chapter.title}</div>`).join(""),
              usedBy.map((chapter) => `<div class="rp-conn" role="button" tabindex="0" onclick="window.__navigate('${chapter.id}')" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')"><span class="arrow" aria-hidden="true">→</span> ${chapter.title}</div>`).join("")
            ].join("");
        connectionsNode.innerHTML = html;
        if (connectionsSection) connectionsSection.hidden = !html;
      } else {
        connectionsNode.innerHTML = "";
        if (connectionsSection) connectionsSection.hidden = true;
      }
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
