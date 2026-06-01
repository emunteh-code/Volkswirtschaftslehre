/**
 * Fleet semantic graph colors — same roles in every module (exam-readable).
 * Canvas reads live CSS variables; fallbacks keep contrast in light/dark.
 *
 * Color legend (economic roles):
 * | Role        | Typical use                          | Hue family   |
 * |-------------|--------------------------------------|--------------|
 * | demand      | Nachfrage, AD, Konsumfunktion         | Blue         |
 * | supply      | Angebot, AS, Produktionsgrenze       | Green        |
 * | budget      | Budget-, Isokosten-, LM-Gerade       | Blue accent  |
 * | indifference| IK, Isoquante, Nutzen                | Magenta/math |
 * | mc          | Grenzkosten                          | Orange       |
 * | mr          | Grenzerlös, MR                       | Red-wine     |
 * | isCurve     | IS-Kurve                             | Blue         |
 * | lmCurve     | LM-Kurve                             | Green        |
 * | optimum     | Gleichgewicht, Tangentialpunkt       | High-contrast|
 * | data        | Stichprobe, Wolke                    | Muted blue   |
 * | fit         | OLS / Schätzgerade                   | Accent       |
 * | residual    | Residuen, Fehler                     | Red          |
 * | reference   | 45°-Linie, Vergleich                 | Neutral      |
 */

function hexToRgba(hex, alpha) {
  hex = String(hex || "#888").replace("#", "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/**
 * @returns {Record<string, string>} Full palette for GraphEngine.refreshColors / custom plots
 */
export function getSemanticGraphColors() {
  const s = getComputedStyle(document.body);
  const cv = (n) => s.getPropertyValue(n).trim();
  const resolvedFont = s.fontFamily || cv("--font-body") || "system-ui, sans-serif";
  const isLight = document.body.classList.contains("light-mode");

  const demand = cv("--graph-demand") || cv("--accent") || "#2f77c7";
  const supply = cv("--graph-supply") || cv("--semantic-green") || "#2f8f58";
  const mc = cv("--graph-mc") || "#d98223";
  const mr = cv("--graph-mr") || "#8f2436";
  const mathInk = cv("--math-ink") || "#c45ae0";
  const warn = cv("--accent3") || "#e05252";
  const reference = isLight ? "#1c2530" : "#dde4ec";
  const budgetBase = demand;
  const budgetShift = cv("--graph-budget-shift") || "#cf4352";
  const budgetComp = cv("--graph-budget-comp") || "#228a5b";
  const indiffBase = mathInk;
  const indiffAlt = isLight ? "#465467" : "#d6dfe8";
  const isCurve = demand;
  const lmCurve = supply;

  return {
    bg: cv("--bg") || (isLight ? "#f2f2f7" : "#0f1114"),
    grid: cv("--border") || (isLight ? "#d1d1d6" : "#2e3338"),
    axis: cv("--muted") || "#8a8f98",
    tick: cv("--muted") || "#8a8f98",
    muted: cv("--muted") || "#8a8f98",
    label: cv("--text") || (isLight ? "#1c1c1e" : "#e8e8ed"),
    text: cv("--text") || (isLight ? "#1c1c1e" : "#e8e8ed"),
    accent: demand,
    accent2: cv("--accent2") || "#5a9fd4",
    warn,
    card: cv("--card") || (isLight ? "#ffffff" : "#1a1d21"),
    fontMono: cv("--font-mono") || resolvedFont,
    fontBody: resolvedFont,
    math: mathInk,
    reference,
    budgetBase,
    budgetShift,
    budgetComp,
    budgetFill: hexToRgba(budgetBase, 0.14),
    indiffBase,
    indiffAlt,
    isoquantBase: supply,
    isoquantAlt: cv("--graph-isoquant-alt") || "#79bf87",
    optimum: reference,
    tangent: mc,
    demand,
    supply,
    mr,
    mc,
    isCurve,
    lmCurve,
    monopoly: budgetShift,
    competition: reference,
    effectSub: mc,
    effectIncome: cv("--graph-income-effect") || "#8b3ea8",
    welfare: warn,
    welfareFill: hexToRgba(warn, 0.22),
    profit: mc,
    profitFill: hexToRgba(mc, 0.18),
    consumerFill: hexToRgba(demand, 0.16),
    producerFill: hexToRgba(supply, 0.18),
    data: cv("--graph-data") || demand,
    fit: demand,
    residual: warn,
    guide: reference,
    border: cv("--border") || "#38383a",
    green: supply
  };
}

/** @type {Record<string, string>} Role → human label for HTML legend */
export const COLOR_ROLE_LABELS = {
  demand: "Nachfrage / Nachfragefunktion",
  supply: "Angebot / Angebotsfunktion",
  budget: "Budget- oder Isokostenlinie",
  indifference: "Indifferenzkurve / Isoquante",
  mc: "Grenzkosten (MC)",
  mr: "Grenzerlös (MR)",
  isCurve: "IS-Kurve (Gütermarkt)",
  lmCurve: "LM-Kurve (Geldmarkt)",
  optimum: "Optimum / Gleichgewicht",
  data: "Daten / Stichprobe",
  fit: "Schätz- oder Regressionsgerade",
  residual: "Residuen / Abweichung",
  reference: "Referenz (z. B. 45°-Linie)"
};

/**
 * Resolve a theme role to a hex/rgb string.
 * @param {string} role
 */
export function colorForRole(role) {
  const col = getSemanticGraphColors();
  const map = {
    demand: col.demand,
    supply: col.supply,
    budget: col.budgetBase,
    indifference: col.indiffBase,
    mc: col.mc,
    mr: col.mr,
    isCurve: col.isCurve,
    lmCurve: col.lmCurve,
    optimum: col.optimum,
    data: col.data,
    fit: col.fit,
    residual: col.residual,
    reference: col.reference
  };
  return map[role] || col.accent;
}
