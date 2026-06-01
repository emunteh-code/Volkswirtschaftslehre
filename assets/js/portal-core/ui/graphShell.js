/**
 * Shared HTML shell for module graph panels (mikro1 benchmark layout).
 */
import { renderGraphPedagogyFooter } from "./graphPedagogy.js";
import {
  getGraphClarity,
  renderGraphLegendHtml,
  renderGraphSeeLine
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
  const subtitleBlock = subtitle
    ? `<p class="graph-panel-subtitle">${subtitle}</p>`
    : renderGraphSeeLine(conceptId, moduleHint);
  const hintBlock = controls
    ? `<p class="graph-control-hint">Regler anpassen — ${clarity.sliderEffect || "dann Kurven mit der Interpretation unten vergleichen."}</p>`
    : "";
  const controlsBlock = controls
    ? `<div class="graph-controls" role="group" aria-label="Grafikparameter">${controls}</div>`
    : "";
  const legendBlock = renderGraphLegendHtml(clarity.legend);

  return `${extraHtml}<div class="graph-container graph-shell" data-graph-concept="${conceptId}">
<h3 class="graph-panel-title">${title}</h3>
${subtitleBlock}
${legendBlock}
${hintBlock}
${controlsBlock}
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="${ariaLabel}"></canvas>
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
