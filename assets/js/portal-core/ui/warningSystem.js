const RAIL_WARNING_SECTION_PATTERN = /^(fehleranalyse|typische fehler|haeufige fehler|haufige fehler|h[aä]ufige fehler|fallstricke|klausurtipps?|klausurfallen|traps?)$/iu;

const ALERT_ICON = `
<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
  <path d="M8.73 2.24l5.21 9.29A1.12 1.12 0 0 1 12.97 13H3.03a1.12 1.12 0 0 1-.97-1.47l5.21-9.29a.82.82 0 0 1 1.46 0Z" fill="currentColor" opacity="0.18"></path>
  <path d="M8 4.6c.39 0 .7.29.74.67l.01.11-.18 3.55a.57.57 0 0 1-1.14 0L7.25 5.38A.75.75 0 0 1 8 4.6Zm0 5.83a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.68Z" fill="currentColor"></path>
</svg>`;

function stripTrailingColon(value) {
  return String(value ?? "").replace(/[:\s]+$/u, "").trim();
}

function normalizeHeading(value) {
  return stripTrailingColon(value).replace(/\s+/g, " ").toLowerCase();
}

function buildWarningCardInner(title, bodyHtml) {
  return `<div class="warning-card-head">
<span class="warning-card-icon">${ALERT_ICON}</span>
<span class="warning-card-title">${title}</span>
</div>
<div class="warning-card-body">${bodyHtml}</div>`;
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

function isDedicatedRailSection(section) {
  const heading = section.querySelector(":scope > h3")?.textContent?.trim() || "";
  if (!RAIL_WARNING_SECTION_PATTERN.test(normalizeHeading(heading))) return false;
  return section.querySelectorAll(".warn-box").length > 0;
}

function shouldMoveWarningToRail(warningNode) {
  const placement = String(warningNode.dataset.warningPlacement || "").trim().toLowerCase();
  if (placement === "rail") return true;
  if (placement === "inline") return false;
  return isDedicatedRailSection(warningNode.closest(".section-block"));
}

function normalizeInlineWarningMarkup(warningNode, warning) {
  warningNode.classList.add("warning-card", "warning-card--inline");
  warningNode.dataset.warningPlacement = "inline";
  warningNode.innerHTML = buildWarningCardInner(warning.title, warning.bodyHtml);
}

export function getWarningSystemData(entry) {
  const theoryHtml = entry?.theorie || "";
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

    const inlineWarnings = [];
    const railWarnings = [];

    Array.from(root.querySelectorAll(".warn-box")).forEach((warningNode) => {
      const warning = normalizeWarningNode(warningNode);
      if (!warning.bodyHtml) {
        warningNode.remove();
        return;
      }

      if (shouldMoveWarningToRail(warningNode)) {
        railWarnings.push(warning);
        warningNode.remove();
        return;
      }

      inlineWarnings.push(warning);
      normalizeInlineWarningMarkup(warningNode, warning);
    });

    Array.from(root.querySelectorAll(".section-block")).forEach((section) => {
      const hasContent = Array.from(section.children).some((child) => {
        if (child.tagName === "H3") return false;
        const text = child.textContent?.replace(/\s+/g, " ").trim() || "";
        return text.length > 0;
      });
      if (!hasContent) section.remove();
    });

    return {
      theoryHtml: root.innerHTML,
      inlineWarnings,
      railWarnings,
      allWarnings: [...inlineWarnings, ...railWarnings]
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

export function renderRightRailWarnings(warnings = []) {
  return warnings
    .map((warning) => `<article class="rp-mistake warning-card warning-card--rail" data-warning-placement="rail">
${buildWarningCardInner(warning.title, warning.bodyHtml)}
</article>`)
    .join("");
}

export function renderTaskWarningCard(bodyHtml, title = "Klausurhinweis") {
  if (!String(bodyHtml || "").trim()) return "";
  return `<div class="warning-card warning-card--task" data-warning-placement="task">
${buildWarningCardInner(title, bodyHtml)}
</div>`;
}
