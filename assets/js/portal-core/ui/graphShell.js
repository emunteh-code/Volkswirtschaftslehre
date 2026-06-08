/**
 * Shared HTML shell for module graph panels (mikro1 benchmark layout).
 */
import { renderGraphPedagogyFooter } from "./graphPedagogy.js";
import {
  getGraphClarity,
  renderGraphContextBlock,
  renderGraphLegendHtml
} from "./graphClarity.js";

/**
 * @param {object} opts
 * @param {string} opts.title
 * @param {string} [opts.subtitle]
 * @param {string} [opts.controls] — inner HTML for .graph-controls
 * @param {string} opts.ariaLabel — canvas aria-label (German, complete sentence)
 * @param {string} opts.conceptId — for pedagogy footer
 * @param {string} [opts.moduleHint] — module id for clarity fallback
 * @param {string} [opts.extraHtml] — e.g. source-boundary notice before shell
 * @returns {string}
 */
export function renderGraphShell({
  title,
  subtitle = "",
  controls = "",
  ariaLabel,
  conceptId,
  moduleHint = "",
  extraHtml = ""
}) {
  const clarity = getGraphClarity(conceptId, moduleHint);
  const contextBlock = renderGraphContextBlock(conceptId, moduleHint);
  const controlsBlock = controls
    ? `<div class="graph-controls" role="group" aria-label="Grafikparameter">${controls}</div>`
    : "";
  const legendBlock = clarity.legend?.length
    ? `<div class="graph-legend-wrap">${renderGraphLegendHtml(clarity.legend)}</div>`
    : "";

  return `${extraHtml}<div class="graph-container graph-shell" data-graph-concept="${conceptId}">
<h3 class="graph-panel-title">${title}</h3>
${contextBlock}
${controlsBlock}
<div class="graph-stage">
${legendBlock}
<canvas id="graph_canvas" width="1100" height="660" role="img" aria-label="${ariaLabel}"></canvas>
</div>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
${renderGraphPedagogyFooter(conceptId, moduleHint)}
</div>`;
}

/**
 * @param {string} innerGraphHtml — full graph-container or shell from renderGraphShell
 * @returns {string}
 */
export function wrapGraphPanel(innerGraphHtml) {
  return `<div class="panel active">${innerGraphHtml}</div>`;
}
