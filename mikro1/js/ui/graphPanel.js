// ============================================================
// GRAPH PANEL RENDERER — Mikroökonomik I
// Returns the HTML for the interactive graph controls + canvas
// ============================================================

import { formalizeMarkupString } from '../utils/formalMath.js';

/** Set of concept IDs that have interactive graphs */
export const GRAPH_CONCEPTS = new Set([
  'budget',
  'indiff',
  'hausopt',
  'slutsky',
  'produktion',
  'grts',
  'kosten',
  'markt',
  'monopol'
]);

/**
 * Render the graph panel HTML for a given concept.
 * @param {string} id - concept ID
 * @returns {string} HTML string
 */
export function renderGraphPanel(id) {
  const graphConfigs = {
    budget: `
<div class="graph-container">
<h3 class="graph-panel-title">Interaktive Budgetgerade</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_m">Einkommen m</label><input type="range" id="g_m" min="20" max="200" value="100" oninput="window.__drawBudget()"><div class="val" id="v_m" aria-live="polite">100</div></div>
<div class="ctrl-group"><label for="g_p1">Preis p₁</label><input type="range" id="g_p1" min="1" max="20" value="2" oninput="window.__drawBudget()"><div class="val" id="v_p1" aria-live="polite">2</div></div>
<div class="ctrl-group"><label for="g_p2">Preis p₂</label><input type="range" id="g_p2" min="1" max="20" value="5" oninput="window.__drawBudget()"><div class="val" id="v_p2" aria-live="polite">5</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Budgetgerade — interaktiv. Verwenden Sie die Regler um Einkommen und Preise anzupassen."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    indiff: String.raw`
<div class="graph-container">
<h3 class="graph-panel-title">Indifferenzkurven $u(x_1,x_2) = x_1 \cdot x_2$</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_u1">Nutzenniveau ū₁</label><input type="range" id="g_u1" min="1" max="50" value="12" oninput="window.__drawIndiff()"><div class="val" id="v_u1" aria-live="polite">12</div></div>
<div class="ctrl-group"><label for="g_u2">Nutzenniveau ū₂</label><input type="range" id="g_u2" min="1" max="50" value="24" oninput="window.__drawIndiff()"><div class="val" id="v_u2" aria-live="polite">24</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Zwei Indifferenzkurven für u = x₁·x₂. Höherer Nutzen ist weiter vom Ursprung entfernt."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    hausopt: String.raw`
<div class="graph-container">
<h3 class="graph-panel-title">Haushaltsoptimum — $u(x_1,x_2) = x_1 \cdot x_2$</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_m">Einkommen m</label><input type="range" id="g_m" min="20" max="200" value="100" oninput="window.__drawHausopt()"><div class="val" id="v_m" aria-live="polite">100</div></div>
<div class="ctrl-group"><label for="g_p1">Preis p₁</label><input type="range" id="g_p1" min="1" max="20" value="4" oninput="window.__drawHausopt()"><div class="val" id="v_p1" aria-live="polite">4</div></div>
<div class="ctrl-group"><label for="g_p2">Preis p₂</label><input type="range" id="g_p2" min="1" max="20" value="5" oninput="window.__drawHausopt()"><div class="val" id="v_p2" aria-live="polite">5</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Haushaltsoptimum — Tangentialpunkt von Budgetgerade und Indifferenzkurve."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    produktion: `
<div class="graph-container">
<h3 class="graph-panel-title">Isoquanten der Produktionsfunktion</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_prod_alpha">Kapitalelastizität α</label><input type="range" id="g_prod_alpha" min="0.2" max="0.8" step="0.05" value="0.5" oninput="window.initGraph('produktion', false)"><div class="val" id="v_prod_alpha" aria-live="polite">0.50</div></div>
<div class="ctrl-group"><label for="g_prod_y">Outputniveau ȳ</label><input type="range" id="g_prod_y" min="2" max="8" step="0.5" value="4" oninput="window.initGraph('produktion', false)"><div class="val" id="v_prod_y" aria-live="polite">4.0</div></div>
<div class="ctrl-group"><label for="g_prod_l">Arbeit L</label><input type="range" id="g_prod_l" min="1" max="12" step="0.5" value="4" oninput="window.initGraph('produktion', false)"><div class="val" id="v_prod_l" aria-live="polite">4.0</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Isoquanten einer Cobb-Douglas-Produktionsfunktion mit markiertem Punkt."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    grts: `
<div class="graph-container">
<h3 class="graph-panel-title">GRTS entlang einer Isoquante</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_prod_alpha">Kapitalelastizität α</label><input type="range" id="g_prod_alpha" min="0.2" max="0.8" step="0.05" value="0.35" oninput="window.initGraph('grts', false)"><div class="val" id="v_prod_alpha" aria-live="polite">0.35</div></div>
<div class="ctrl-group"><label for="g_prod_y">Outputniveau ȳ</label><input type="range" id="g_prod_y" min="2" max="8" step="0.5" value="4" oninput="window.initGraph('grts', false)"><div class="val" id="v_prod_y" aria-live="polite">4.0</div></div>
<div class="ctrl-group"><label for="g_prod_l">Arbeit L</label><input type="range" id="g_prod_l" min="1" max="12" step="0.5" value="5" oninput="window.initGraph('grts', false)"><div class="val" id="v_prod_l" aria-live="polite">5.0</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Isoquante mit Tangente zur Veranschaulichung der GRTS."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    kosten: `
<div class="graph-container">
<h3 class="graph-panel-title">Kostenminimum: Isoquante und Isokostengerade</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_cost_alpha">Kapitalelastizität α</label><input type="range" id="g_cost_alpha" min="0.2" max="0.8" step="0.05" value="0.5" oninput="window.initGraph('kosten', false)"><div class="val" id="v_cost_alpha" aria-live="polite">0.50</div></div>
<div class="ctrl-group"><label for="g_cost_y">Output ȳ</label><input type="range" id="g_cost_y" min="2" max="8" step="0.5" value="4" oninput="window.initGraph('kosten', false)"><div class="val" id="v_cost_y" aria-live="polite">4.0</div></div>
<div class="ctrl-group"><label for="g_cost_w">Lohnsatz w</label><input type="range" id="g_cost_w" min="1" max="8" step="0.25" value="4" oninput="window.initGraph('kosten', false)"><div class="val" id="v_cost_w" aria-live="polite">4.00</div></div>
<div class="ctrl-group"><label for="g_cost_r">Kapitalpreis r</label><input type="range" id="g_cost_r" min="0.5" max="6" step="0.25" value="1" oninput="window.initGraph('kosten', false)"><div class="val" id="v_cost_r" aria-live="polite">1.00</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Kostenminimum mit Isoquante, Isokostengerade und Tangentialpunkt."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    markt: `
<div class="graph-container">
<h3 class="graph-panel-title">Marktgleichgewicht und Wohlfahrt</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_d_int">Nachfrage-Intercept a</label><input type="range" id="g_d_int" min="40" max="120" step="5" value="100" oninput="window.initGraph('markt', false)"><div class="val" id="v_d_int" aria-live="polite">100</div></div>
<div class="ctrl-group"><label for="g_d_slope">Nachfrage-Steigung b</label><input type="range" id="g_d_slope" min="0.2" max="1.2" step="0.05" value="0.6" oninput="window.initGraph('markt', false)"><div class="val" id="v_d_slope" aria-live="polite">0.60</div></div>
<div class="ctrl-group"><label for="g_s_int">Angebot-Intercept c</label><input type="range" id="g_s_int" min="0" max="60" step="5" value="20" oninput="window.initGraph('markt', false)"><div class="val" id="v_s_int" aria-live="polite">20</div></div>
<div class="ctrl-group"><label for="g_s_slope">Angebot-Steigung d</label><input type="range" id="g_s_slope" min="0.1" max="1.0" step="0.05" value="0.4" oninput="window.initGraph('markt', false)"><div class="val" id="v_s_slope" aria-live="polite">0.40</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Marktgleichgewicht mit Nachfrage, Angebot sowie Konsumenten- und Produzentenrente."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    monopol: String.raw`
<div class="graph-container">
<h3 class="graph-panel-title">Monopol: $p(y) = a - y$, $C(y) = c \cdot y^2$</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_a">Nachfragepreis a</label><input type="range" id="g_a" min="2" max="20" value="10" oninput="window.__drawMonopol()"><div class="val" id="v_a" aria-live="polite">10</div></div>
<div class="ctrl-group"><label for="g_c">Grenzkostenpar. c</label><input type="range" id="g_c" min="0.1" max="5" step="0.1" value="1" oninput="window.__drawMonopol()"><div class="val" id="v_c" aria-live="polite">1</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Monopoloptimum — Nachfrage, Grenzerlös, Grenzkosten und Wohlfahrtsverlust."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    slutsky: String.raw`
<div class="graph-container">
<h3 class="graph-panel-title">Slutsky-Zerlegung ($u(x_1,x_2) = x_1 \cdot x_2$)</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_m">Einkommen m</label><input type="range" id="g_m" min="20" max="200" value="100" step="1" oninput="window.__drawSlutsky()"><div class="val" id="v_m" aria-live="polite">100</div></div>
<div class="ctrl-group"><label for="g_p1_0">Preis p₁ (initial)</label><input type="range" id="g_p1_0" min="1" max="20" value="4" step="0.1" oninput="window.__drawSlutsky()"><div class="val" id="v_p1_0" aria-live="polite">4.0</div></div>
<div class="ctrl-group"><label for="g_p1_1">Preis p₁ (neu)</label><input type="range" id="g_p1_1" min="1" max="20" value="8" step="0.1" oninput="window.__drawSlutsky()"><div class="val" id="v_p1_1" aria-live="polite">8.0</div></div>
<div class="ctrl-group"><label for="g_p2">Preis p₂</label><input type="range" id="g_p2" min="1" max="20" value="5" step="0.1" oninput="window.__drawSlutsky()"><div class="val" id="v_p2" aria-live="polite">5</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Slutsky-Zerlegung — Substitutions- und Einkommenseffekt einer Preisänderung."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,
  };

  return `<div class="panel active">${formalizeMarkupString(graphConfigs[id] || '')}</div>`;
}
