/**
 * Shared HTML shell for module graph panels (mikro1 benchmark layout).
 */
import { renderGraphPedagogyFooter } from "./graphPedagogy.js";

/**
 * @param {object} opts
 * @param {string} opts.title
 * @param {string} [opts.subtitle]
 * @param {string} [opts.controls] — inner HTML for .graph-controls
 * @param {string} opts.ariaLabel — canvas aria-label (German, complete sentence)
 * @param {string} opts.conceptId — for pedagogy footer
 * @param {string} [opts.extraHtml] — e.g. source-boundary notice before shell
 * @returns {string}
 */
export function renderGraphShell({
  title,
  subtitle = "",
  controls = "",
  ariaLabel,
  conceptId,
  extraHtml = ""
}) {
  const subtitleBlock = subtitle
    ? `<p class="graph-panel-subtitle">${subtitle}</p>`
    : "";
  const hintBlock = controls
    ? `<p class="graph-control-hint">Regler anpassen, dann die Kurveninterpretation unten prüfen.</p>`
    : "";
  const controlsBlock = controls
    ? `<div class="graph-controls" role="group" aria-label="Grafikparameter">${controls}</div>`
    : "";

  return `${extraHtml}<div class="graph-container graph-shell">
<h3 class="graph-panel-title">${title}</h3>
${subtitleBlock}
${hintBlock}
${controlsBlock}
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="${ariaLabel}"></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
${renderGraphPedagogyFooter(conceptId)}
</div>`;
}

/**
 * @param {string} innerGraphHtml — full graph-container or shell from renderGraphShell
 * @returns {string}
 */
export function wrapGraphPanel(innerGraphHtml) {
  return `<div class="panel active">${innerGraphHtml}</div>`;
}
