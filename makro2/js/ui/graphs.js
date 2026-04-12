// ============================================================
// GRAPH DRAW FUNCTIONS — Makroökonomik II
// Subject-correct interactive macro graphs for the portal
// ============================================================

import GraphEngine from "./graphEngine.js";
import { renderMath } from "../utils/mathjax.js";
import { ensureMathJaxEquationHtml } from "../../../assets/js/portal-core/ui/mathDelimiters.js";

function getNumber(id, fallback = 0) {
  const input = document.getElementById(id);
  if (!input) return fallback;
  const value = Number.parseFloat(input.value);
  return Number.isFinite(value) ? value : fallback;
}

function setValueLabel(id, value, digits = 2) {
  const label = document.getElementById(id);
  if (!label) return;
  label.textContent = Number(value).toFixed(digits);
}

function setupPlot(xLabel, yLabel, ranges) {
  const engine = new GraphEngine("graph_canvas");
  const { w, h, ctx } = engine.setup();
  const col = engine.refreshColors();
  if (!ctx || !w || !h) return null;

  const pad = { left: 74, right: 28, top: 26, bottom: 58 };
  const xMin = ranges.xMin;
  const xMax = ranges.xMax;
  const yMin = ranges.yMin;
  const yMax = ranges.yMax;
  const innerW = w - pad.left - pad.right;
  const innerH = h - pad.top - pad.bottom;

  const px = (x) => pad.left + ((x - xMin) / (xMax - xMin)) * innerW;
  const py = (y) => h - pad.bottom - ((y - yMin) / (yMax - yMin)) * innerH;

  // Responsive font scale — proportional to smaller canvas dimension
  const fsBase = Math.max(11, Math.round(Math.min(w, h) * 0.022));
  const fsBold = Math.max(12, Math.round(Math.min(w, h) * 0.026));

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  const drawTicks = (min, max, steps) => Array.from({ length: steps + 1 }, (_, index) => min + ((max - min) / steps) * index);

  ctx.setLineDash([4, 6]);
  ctx.lineWidth = 1;
  ctx.strokeStyle = col.grid;
  ctx.globalAlpha = 0.65;

  drawTicks(xMin, xMax, 5).forEach((tick) => {
    const x = px(tick);
    ctx.beginPath();
    ctx.moveTo(x, pad.top);
    ctx.lineTo(x, h - pad.bottom);
    ctx.stroke();
  });

  drawTicks(yMin, yMax, 5).forEach((tick) => {
    const y = py(tick);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(w - pad.right, y);
    ctx.stroke();
  });

  ctx.globalAlpha = 1;
  ctx.setLineDash([]);
  ctx.strokeStyle = col.axis;
  ctx.lineWidth = 1.6;

  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, h - pad.bottom);
  ctx.lineTo(w - pad.right, h - pad.bottom);
  ctx.stroke();

  if (yMin < 0 && yMax > 0) {
    ctx.strokeStyle = col.muted;
    ctx.setLineDash([7, 5]);
    ctx.beginPath();
    ctx.moveTo(pad.left, py(0));
    ctx.lineTo(w - pad.right, py(0));
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.fillStyle = col.tick;
  ctx.font = `${fsBase}px ${col.fontMono}`;
  ctx.textAlign = "center";
  drawTicks(xMin, xMax, 5).forEach((tick) => {
    ctx.fillText(tick.toFixed(xMax - xMin <= 10 ? 1 : 0), px(tick), h - pad.bottom + 18);
  });

  ctx.textAlign = "right";
  drawTicks(yMin, yMax, 5).forEach((tick) => {
    ctx.fillText(tick.toFixed(yMax - yMin <= 10 ? 1 : 0), pad.left - 8, py(tick) + 4);
  });

  ctx.fillStyle = col.label;
  ctx.font = `600 ${fsBold}px ${col.fontMono}`;
  ctx.textAlign = "center";
  ctx.fillText(xLabel, pad.left + innerW / 2, h - 18);
  ctx.save();
  ctx.translate(18, pad.top + innerH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();

  return {
    engine,
    ctx,
    col,
    w,
    h,
    pad,
    px,
    py,
    ranges,
    fsBase,
    fsBold,
    legendEntries: [],
    legendSeen: new Set()
  };
}

function registerLegend(plot, entry) {
  if (!entry?.label) return;
  const dashKey = Array.isArray(entry.dash) ? entry.dash.join(',') : '';
  const key = [entry.label, entry.color, dashKey, entry.dot ? 'dot' : 'line'].join('|');
  if (plot.legendSeen.has(key)) return;
  plot.legendSeen.add(key);
  plot.legendEntries.push(entry);
}

function drawTag(plot, x, y, text, color, dx = 10, dy = -10, align = "left") {
  const { ctx, px, py, col } = plot;
  const tagX = px(x) + dx;
  const tagY = py(y) + dy;
  ctx.save();
  ctx.font = `600 ${Math.max(12, plot.fsBase)}px ${col.fontBody}`;
  const width = ctx.measureText(text).width + 18;
  const height = 24;
  const rectX = align === "right" ? tagX - width + 4 : tagX - 4;
  ctx.fillStyle = `${col.bg}f2`;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(rectX, tagY - height + 5, width, height, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(text, rectX + 9, tagY - 6);
  ctx.restore();
}

function drawLegend(plot) {
  if (!plot.legendEntries.length) return;
  plot.engine.drawLegend(plot.ctx, plot.w, plot.legendEntries, plot.col.grid, 18);
}

function drawCurve(plot, fn, options = {}) {
  const {
    color = plot.col.accent,
    lineWidth = 2.8,
    xStart = plot.ranges.xMin,
    xEnd = plot.ranges.xMax,
    steps = 240,
    dash = [],
    label,
    labelX,
    labelDy = -8,
    labelAlign = "left"
  } = options;

  const { ctx, px, py } = plot;
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(dash);
  ctx.beginPath();

  let started = false;
  for (let index = 0; index <= steps; index += 1) {
    const x = xStart + ((xEnd - xStart) / steps) * index;
    const y = fn(x);
    if (!Number.isFinite(y)) continue;
    if (y < plot.ranges.yMin - 0.4 || y > plot.ranges.yMax + 0.4) continue;
    const cx = px(x);
    const cy = py(y);
    if (!started) {
      ctx.moveTo(cx, cy);
      started = true;
    } else {
      ctx.lineTo(cx, cy);
    }
  }

  ctx.stroke();
  ctx.setLineDash([]);

  if (label) {
    const x = labelX ?? (xStart + xEnd) / 2;
    const y = fn(x);
    if (Number.isFinite(y) && y >= plot.ranges.yMin && y <= plot.ranges.yMax) {
      drawTag(plot, x, y, label, color, 10, labelDy, labelAlign);
      registerLegend(plot, { color, label, dash, lw: lineWidth });
    }
  }
}

function drawHorizontal(plot, y, color, label) {
  const { ctx, px, py, ranges, col, fsBase } = plot;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.4;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.moveTo(px(ranges.xMin), py(y));
  ctx.lineTo(px(ranges.xMax), py(y));
  ctx.stroke();
  ctx.setLineDash([]);
  if (label) {
    drawTag(plot, ranges.xMax, y, label, color, -84, -8, "right");
    registerLegend(plot, { color, label, dash: [8, 6], lw: 2.4 });
  }
}

function drawVertical(plot, x, color, label) {
  const { ctx, px, py, ranges, col, fsBase } = plot;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.moveTo(px(x), py(ranges.yMin));
  ctx.lineTo(px(x), py(ranges.yMax));
  ctx.stroke();
  ctx.setLineDash([]);
  if (label) {
    drawTag(plot, x, ranges.yMax, label, color, 10, 14);
    registerLegend(plot, { color, label, dash: [8, 6], lw: 2 });
  }
}

function drawPoint(plot, x, y, color, label) {
  const { ctx, px, py, col, fsBase } = plot;
  const cx = px(x);
  const cy = py(y);

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx, cy, 5.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = col.bg;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, 5.5, 0, Math.PI * 2);
  ctx.stroke();

  if (label) {
    drawTag(plot, x, y, label, color, 10, -8);
    registerLegend(plot, { color, label, dot: true });
  }
}

function updateInfo(plot, html) {
  drawLegend(plot);
  const info = document.getElementById("graph_info");
  if (!info) return;
  info.innerHTML = html;
  Promise.resolve(renderMath(info)).catch(() => {});
}

function renderInfo(equation, rows) {
  const safeRows = rows.filter((row) => row?.body);
  return `
    <span class="gi-label">Graph-Interpretation</span>
    ${equation ? `<div class="gi-eq">${ensureMathJaxEquationHtml(equation)}</div>` : ''}
    <div class="gi-list">
      ${safeRows.map((row) => `
        <div class="gi-row">
          <div class="gi-row-head">${row.title || row.label || 'Lesart'}</div>
          <div class="gi-row-body">${row.body}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function drawWechselkurs() {
  const eNom = getNumber("g_e_nom", 1.13);
  const pDom = getNumber("g_p_dom", 100);
  const pFor = getNumber("g_p_for", 100);
  setValueLabel("v_e_nom", eNom, 2);
  setValueLabel("v_p_dom", pDom, 0);
  setValueLabel("v_p_for", pFor, 0);

  const epsilon = (e) => (e * pDom) / pFor;
  const currentEpsilon = epsilon(eNom);
  const ePpp = pFor / pDom;
  const maxY = Math.max(1.6, epsilon(1.5), currentEpsilon, 1.1);

  const plot = setupPlot("Nominaler Wechselkurs E ($/€)", "Realer Wechselkurs ε", {
    xMin: 0.8,
    xMax: 1.5,
    yMin: 0.6,
    yMax: Math.ceil((maxY + 0.1) * 10) / 10
  });
  if (!plot) return;

  drawHorizontal(plot, 1, plot.col.muted, "PPP: ε = 1");
  drawCurve(plot, epsilon, {
    color: plot.col.accent,
    label: "Realer Wechselkurs",
    labelX: 1.22
  });

  if (ePpp >= plot.ranges.xMin && ePpp <= plot.ranges.xMax) {
    drawVertical(plot, ePpp, plot.col.accent2, "PPP-Kurs");
  }

  drawPoint(plot, eNom, currentEpsilon, plot.col.warn, "Aktueller Punkt");

  const classification = currentEpsilon > 1.02
    ? "reale Aufwertung des Inlands"
    : currentEpsilon < 0.98
      ? "reale Abwertung des Inlands"
      : "nahe an Kaufkraftparität";

  updateInfo(plot, renderInfo(
    'ε = E · P / P*',
    [
      { label: 'Aktueller Punkt', body: `Bei E = ${eNom.toFixed(2)}, P = ${pDom.toFixed(0)} und P* = ${pFor.toFixed(0)} ergibt sich ε = ${currentEpsilon.toFixed(2)}.` },
      { label: 'Deutung', body: `Das entspricht aktuell einer ${classification}.` },
      { label: 'Kaufkraftparität', body: `Die PPP-Linie liegt bei ε = 1; der dazugehörige Paritätskurs wäre E = ${ePpp.toFixed(2)}.` }
    ]
  ));
}

function drawZinsparitaet() {
  const iDom = getNumber("g_i_dom", 5);
  const iFor = getNumber("g_i_for", 2);
  const eFuture = getNumber("g_e_future", 1.2);
  setValueLabel("v_i_dom", iDom, 2);
  setValueLabel("v_i_for", iFor, 2);
  setValueLabel("v_e_future", eFuture, 2);

  const currentE = (iValue) => ((1 + iValue / 100) / (1 + iFor / 100)) * eFuture;
  const eqCurrent = currentE(iDom);
  const yValues = [currentE(0), currentE(8), eFuture, eqCurrent];
  const yMin = Math.max(0.6, Math.floor((Math.min(...yValues) - 0.1) * 10) / 10);
  const yMax = Math.ceil((Math.max(...yValues) + 0.1) * 10) / 10;

  const plot = setupPlot("Inlandszins i (%)", "Aktueller Wechselkurs E", {
    xMin: 0,
    xMax: 8,
    yMin,
    yMax
  });
  if (!plot) return;

  drawHorizontal(plot, eFuture, plot.col.accent2, "E^e");
  drawCurve(plot, currentE, {
    color: plot.col.accent,
    label: "Zinsparität",
    labelX: 5.8
  });
  drawVertical(plot, iDom, plot.col.muted, "Aktueller Inlandszins");
  drawPoint(plot, iDom, eqCurrent, plot.col.warn, "Aktueller Kurs");

  const expectedRate = ((eFuture - eqCurrent) / eqCurrent) * 100;
  const expectationText = expectedRate < -0.05
    ? `eine erwartete Abwertung um ${Math.abs(expectedRate).toFixed(1)}%`
    : expectedRate > 0.05
      ? `eine erwartete Aufwertung um ${expectedRate.toFixed(1)}%`
      : "nahezu keine erwartete Wechselkursänderung";

  updateInfo(plot, renderInfo(
    'E = ((1 + i) / (1 + i*)) · Eᵉ',
    [
      { label: 'Aktueller Kurs', body: `Bei i = ${iDom.toFixed(2)}%, i* = ${iFor.toFixed(2)}% und Eᵉ = ${eFuture.toFixed(2)} ergibt sich E = ${eqCurrent.toFixed(3)}.` },
      { label: 'Arbitrageintuition', body: `Vom heutigen Kurs aus impliziert das ${expectationText}, damit der Zinsvorteil bzw. -nachteil im Gleichgewicht kompensiert wird.` },
      { label: 'Graphlogik', body: 'Die Kurve zeigt, welcher aktuelle Wechselkurs mit den gegebenen Zinssätzen und Wechselkurserwartungen vereinbar ist.' }
    ]
  ));
}

function drawNettoexporte() {
  const domestic = getNumber("g_domestic", 1.1);
  const foreign = getNumber("g_foreign", 1.2);
  const eps = getNumber("g_eps", 1.1);
  setValueLabel("v_domestic", domestic, 1);
  setValueLabel("v_foreign", foreign, 1);
  setValueLabel("v_eps", eps, 2);

  const plot = setupPlot("Realer Wechselkurs ε", "Nettoexporte NX", {
    xMin: 0.6,
    xMax: 1.8,
    yMin: -220,
    yMax: 260
  });
  if (!plot) return;

  const nx = (value) => 40 + 150 * foreign - 140 * domestic - 180 * (value - 1);
  const currentNx = nx(eps);

  drawCurve(plot, nx, {
    color: plot.col.accent,
    label: "Nettoexporte",
    labelX: 1.46
  });
  drawVertical(plot, eps, plot.col.accent2, "Aktueller realer WK");
  drawPoint(plot, eps, currentNx, plot.col.warn, "Beobachtete Lage");

  updateInfo(plot, renderInfo(
    'NX = X(Y*, ε) − IM(Y, ε) / ε',
    [
      { label: 'Kurvenverlauf', body: 'Bei höherem realem Wechselkurs fällt die Nettoexportfunktion: Das Inland wird relativ teuer und verliert preisliche Wettbewerbsfähigkeit.' },
      { label: 'Verschiebungen', body: `Höhere Auslandsnachfrage (${foreign.toFixed(1)}) verschiebt die Kurve nach oben, höhere Inlandsnachfrage (${domestic.toFixed(1)}) nach unten.` },
      { label: 'Aktuelle Lage', body: `Bei ε = ${eps.toFixed(2)} liegt NX bei ${currentNx.toFixed(0)} und damit ${currentNx >= 0 ? 'im Überschuss' : 'im Defizit'}.` }
    ]
  ));
}

function drawMarshallLerner() {
  const shortDrop = getNumber("g_ml_short", 14);
  const longGain = getNumber("g_ml_gain", 16);
  const speed = getNumber("g_ml_speed", 1.0);
  setValueLabel("v_ml_short", shortDrop, 0);
  setValueLabel("v_ml_gain", longGain, 0);
  setValueLabel("v_ml_speed", speed, 1);

  const jCurve = (t) => -shortDrop * Math.exp(-speed * t) + longGain * (1 - Math.exp(-0.58 * speed * t));
  const sample = Array.from({ length: 161 }, (_, index) => jCurve((8 / 160) * index));
  const minValue = Math.min(...sample, -shortDrop);
  const maxValue = Math.max(...sample, longGain);

  const plot = setupPlot("Zeit nach Abwertung", "Handelsbilanz", {
    xMin: 0,
    xMax: 8,
    yMin: Math.floor((minValue - 4) / 5) * 5,
    yMax: Math.ceil((maxValue + 4) / 5) * 5
  });
  if (!plot) return;

  drawHorizontal(plot, 0, plot.col.muted, "Ausgangssaldo");
  drawCurve(plot, jCurve, {
    color: plot.col.accent,
    label: "J-Kurve",
    labelX: 5.2
  });

  let troughIndex = 0;
  sample.forEach((value, index) => {
    if (value < sample[troughIndex]) troughIndex = index;
  });
  const troughT = (8 / 160) * troughIndex;
  const troughValue = sample[troughIndex];
  drawPoint(plot, troughT, troughValue, plot.col.warn, "Kurzfristiger Tiefpunkt");
  drawPoint(plot, 8, jCurve(8), plot.col.accent2, "Langfristige Wirkung", -132, -10);

  const mlSatisfied = longGain > shortDrop;
  updateInfo(plot, renderInfo(
    'Abwertung: kurzfristiger Preiseffekt, verzögerter Mengeneffekt',
    [
      { label: 'Kurzfristig', body: `Unmittelbar nach der Abwertung verschlechtert sich die Handelsbilanz um ${shortDrop.toFixed(0)} Einheiten, weil Importpreise steigen, während Mengen noch kaum reagieren.` },
      { label: 'Marshall-Lerner', body: mlSatisfied ? 'Der langfristige Mengeneffekt ist stark genug: Die J-Kurve dreht nach oben und die Handelsbilanz verbessert sich im Zeitablauf.' : 'Der langfristige Mengeneffekt bleibt zu schwach: Die Handelsbilanz erholt sich zwar, bleibt aber unter dem Ausgangsniveau.' },
      { label: 'Tiefpunkt', body: `Der deutlichste kurzfristige Belastungspunkt liegt ungefähr nach ${troughT.toFixed(1)} Perioden bei ${troughValue.toFixed(1)}.` }
    ]
  ));
}

function drawMundellFleming() {
  const fiscal = getNumber("g_fiscal", 0.6);
  const iWorld = getNumber("g_iworld", 2.5);
  const risk = getNumber("g_risk", 0.4);
  setValueLabel("v_fiscal", fiscal, 1);
  setValueLabel("v_iworld", iWorld, 1);
  setValueLabel("v_risk", risk, 1);

  const plot = setupPlot("Output Y", "Zins i (%)", {
    xMin: 40,
    xMax: 140,
    yMin: 0,
    yMax: 8
  });
  if (!plot) return;

  const baseIntercept = 8.6 - 0.25 * risk;
  const shiftedIntercept = baseIntercept + 0.75 * fiscal;
  const isBase = (y) => baseIntercept - 0.055 * (y - 40);
  const isShifted = (y) => shiftedIntercept - 0.055 * (y - 40);
  const zp = iWorld + risk;
  const equilibriumY = 40 + (shiftedIntercept - zp) / 0.055;

  drawCurve(plot, isBase, {
    color: plot.col.muted,
    dash: [7, 5],
    lineWidth: 2,
    label: "IS vor Fiskalimpuls",
    labelX: 102
  });
  drawCurve(plot, isShifted, {
    color: plot.col.accent,
    label: "IS nach Fiskalimpuls",
    labelX: 90
  });
  drawHorizontal(plot, zp, plot.col.accent2, "Zahlungsbilanzlinie");
  drawPoint(plot, Math.max(plot.ranges.xMin, Math.min(plot.ranges.xMax, equilibriumY)), zp, plot.col.warn, "Neues Gleichgewicht");

  updateInfo(plot, renderInfo(
    'Mundell-Fleming: IS-Kurve + horizontale Zahlungsbilanzlinie',
    [
      { label: 'Fiskalimpuls', body: `Der Impuls von ${fiscal.toFixed(1)} verschiebt die IS-Kurve nach rechts.` },
      { label: 'Kapitalmarkt', body: `Die Zahlungsbilanzlinie liegt bei i = ${zp.toFixed(1)}% (${iWorld.toFixed(1)}% Weltzins + ${risk.toFixed(1)} PP Risikoprämie).` },
      { label: 'Gleichgewicht', body: `Das resultierende Gleichgewicht liegt bei Y ≈ ${equilibriumY.toFixed(1)}. Ein höherer Weltzins oder eine höhere Risikoprämie drücken das Mundell-Fleming-Gleichgewicht nach links.` }
    ]
  ));
}

function drawZPKurve() {
  const iWorld = getNumber("g_zp_world", 2.5);
  const mobility = getNumber("g_zp_mobility", 1.4);
  const yCurrent = getNumber("g_zp_y", 92);
  const iCurrent = getNumber("g_zp_i", 3.4);
  setValueLabel("v_zp_world", iWorld, 1);
  setValueLabel("v_zp_mobility", mobility, 1);
  setValueLabel("v_zp_y", yCurrent, 0);
  setValueLabel("v_zp_i", iCurrent, 1);

  const slope = 0.035 / Math.max(0.5, mobility);
  const intercept = iWorld - slope * 78;
  const zp = (y) => intercept + slope * y;
  const iOnCurve = zp(yCurrent);

  const plot = setupPlot("Output Y", "Zins i (%)", {
    xMin: 50,
    xMax: 130,
    yMin: 0.5,
    yMax: 6.8
  });
  if (!plot) return;

  drawCurve(plot, zp, {
    color: plot.col.accent,
    label: "ZP-Kurve",
    labelX: 110
  });
  drawHorizontal(plot, iWorld, plot.col.muted, "Weltzins i*");
  drawVertical(plot, yCurrent, plot.col.accent2, "Aktuelles Y");
  drawPoint(plot, yCurrent, iCurrent, plot.col.warn, "Beobachtete Lage");
  drawPoint(plot, yCurrent, iOnCurve, plot.col.accent2, "ZP-Punkt");

  const gap = iCurrent - iOnCurve;
  const status = gap > 0.08
    ? 'oberhalb der ZP-Kurve: Kapitalzuflüsse dominieren, die Zahlungsbilanz weist einen Überschuss auf'
    : gap < -0.08
      ? 'unterhalb der ZP-Kurve: Der Zins ist für das gegebene Einkommen zu niedrig, es entsteht ein Defizit'
      : 'nahe am Zahlungsbilanzgleichgewicht';

  updateInfo(plot, renderInfo(
    'LB(Y,Y*,ε) + KB(i-i*) = 0',
    [
      { label: 'Steigung', body: `Mit Kapitalmobilität ${mobility.toFixed(1)} verläuft die ZP-Kurve ${mobility > 1.6 ? 'relativ flach' : 'sichtbar positiv steigend'}: Höheres Y belastet die Leistungsbilanz und verlangt höheren i.` },
      { label: 'Aktuelle Lage', body: `Bei Y = ${yCurrent.toFixed(0)} liegt der ausgleichende Zins bei ${iOnCurve.toFixed(2)}%. Beobachtet sind ${iCurrent.toFixed(2)}% — damit liegt der Punkt ${status}.` },
      { label: 'Merkregel', body: 'Unterhalb der ZP-Kurve: Defizit. Oberhalb der ZP-Kurve: Überschuss. Die Kurve gehört zur Außenbilanz, nicht zum Gütermarkt.' }
    ]
  ));
}

function drawWkRegime() {
  const shock = getNumber("g_regime_shock", 1.4);
  const flexSpeed = getNumber("g_regime_flex", 1.2);
  const pegDefense = getNumber("g_regime_peg", 1.1);
  setValueLabel("v_regime_shock", shock, 1);
  setValueLabel("v_regime_flex", flexSpeed, 1);
  setValueLabel("v_regime_peg", pegDefense, 1);

  const flexGap = (t) => -shock * Math.exp(-flexSpeed * t);
  const pegGap = (t) => -shock * (1 + 0.22 * pegDefense) * Math.exp(-(0.42 / Math.max(0.6, pegDefense)) * t);
  const plot = setupPlot("Zeit nach externem Schock", "Outputlücke", {
    xMin: 0,
    xMax: 8,
    yMin: -Math.ceil((shock * (1 + 0.25 * pegDefense) + 0.4) * 2) / 2,
    yMax: 0.4
  });
  if (!plot) return;

  drawHorizontal(plot, 0, plot.col.muted, "Kein Outputverlust");
  drawCurve(plot, flexGap, {
    color: plot.col.accent,
    label: "Flexibler Wechselkurs",
    labelX: 4.2
  });
  drawCurve(plot, pegGap, {
    color: plot.col.warn,
    label: "Fester Wechselkurs",
    labelX: 4.5,
    labelDy: 14
  });
  drawPoint(plot, 0, flexGap(0), plot.col.accent, "Schock A", 10, -12);
  drawPoint(plot, 0, pegGap(0), plot.col.warn, "Schock B", 10, 16);

  updateInfo(plot, renderInfo(
    'Regimevergleich: Wechselkursanpassung versus interne Anpassung',
    [
      { label: 'Flexibler Wechselkurs', body: 'Der Kurs wirkt als Stoßdämpfer. Die Outputlücke wird schneller abgebaut, weil der Wechselkurs relativ früh einen Teil der Anpassung übernimmt.' },
      { label: 'Fester Wechselkurs', body: `Je härter die Parität verteidigt wird (${pegDefense.toFixed(1)}), desto größer bleibt der anfängliche Outputverlust und desto langsamer erfolgt die Rückkehr zum Ausgangsniveau.` },
      { label: 'Trilemma', body: 'Der Vergleich macht sichtbar, warum feste Kurse bei freiem Kapitalverkehr geldpolitische Autonomie begrenzen: Stabilisierung läuft stärker über Zinsanpassung, Reserven und Binnenkontraktion.' }
    ]
  ));
}

function drawSchuldenquote() {
  const b0 = getNumber("g_b0", 70);
  const r = getNumber("g_r", 4) / 100;
  const g = getNumber("g_g", 2) / 100;
  const ps = getNumber("g_ps", 1) / 100;
  setValueLabel("v_b0", b0, 0);
  setValueLabel("v_r", r * 100, 1);
  setValueLabel("v_g", g * 100, 1);
  setValueLabel("v_ps", ps * 100, 1);

  const trajectory = [b0];
  for (let t = 1; t <= 10; t += 1) {
    const previous = trajectory[t - 1] / 100;
    const next = (((1 + r) / (1 + g)) * previous - ps) * 100;
    trajectory.push(next);
  }

  const maxY = Math.max(120, ...trajectory.map((value) => Math.max(0, value))) + 20;
  const plot = setupPlot("Zeit t", "Schuldenquote b (%)", {
    xMin: 0,
    xMax: 10,
    yMin: 0,
    yMax: Math.ceil(maxY / 20) * 20
  });
  if (!plot) return;

  const { ctx, px, py, col } = plot;
  ctx.strokeStyle = col.accent;
  ctx.lineWidth = 2.8;
  ctx.beginPath();
  trajectory.forEach((value, index) => {
    const x = px(index);
    const y = py(value);
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  trajectory.forEach((value, index) => {
    drawPoint(plot, index, value, index === trajectory.length - 1 ? col.warn : col.accent2);
  });

  const stabilizingPs = (r - g) * (b0 / 100) * 100;
  const last = trajectory[trajectory.length - 1];
  updateInfo(plot, renderInfo(
    'Δb ≈ (r − g) · b − ps',
    [
      { label: 'Ausgangslage', body: `Bei r = ${(r * 100).toFixed(1)}%, g = ${(g * 100).toFixed(1)}% und einem Primärsaldo von ${(ps * 100).toFixed(1)}% startet die Quote bei ${b0.toFixed(0)}%.` },
      { label: 'Verlauf', body: `Nach 10 Perioden liegt die Schuldenquote bei ${last.toFixed(1)}%.` },
      { label: 'Stabilisierung', body: `Zur unmittelbaren Stabilisierung der Startquote wäre ein Primärüberschuss von rund ${stabilizingPs.toFixed(1)}% des BIP erforderlich.` }
    ]
  ));
}

function drawTaylorRegel() {
  const rStar = getNumber("g_rstar", 2);
  const piStar = getNumber("g_pistar", 2);
  const a = getNumber("g_a", 0.5);
  const b = getNumber("g_b", 0.5);
  const piCurrent = getNumber("g_pi_current", 3);
  const outputGap = getNumber("g_y_gap", 0.5);
  setValueLabel("v_rstar", rStar, 2);
  setValueLabel("v_pistar", piStar, 2);
  setValueLabel("v_a", a, 1);
  setValueLabel("v_b", b, 1);
  setValueLabel("v_pi_current", piCurrent, 2);
  setValueLabel("v_y_gap", outputGap, 2);

  const neutralLine = (pi) => rStar + pi;
  const taylorLine = (pi) => rStar + pi + a * (pi - piStar) + b * outputGap;
  const currentI = taylorLine(piCurrent);
  const samplePis = [0, 6, piCurrent, piStar];
  const sampleValues = samplePis.flatMap((pi) => [neutralLine(pi), taylorLine(pi)]);
  const yMin = Math.min(-2, Math.floor(Math.min(...sampleValues) - 1));
  const yMax = Math.max(8, Math.ceil(Math.max(...sampleValues) + 1));

  const plot = setupPlot("Inflation π (%)", "Leitzins i (%)", {
    xMin: 0,
    xMax: 6,
    yMin,
    yMax
  });
  if (!plot) return;

  drawCurve(plot, neutralLine, {
    color: plot.col.muted,
    dash: [7, 5],
    lineWidth: 2,
    label: "Neutrale Zinslinie",
    labelX: 4.5
  });
  drawCurve(plot, taylorLine, {
    color: plot.col.accent,
    label: "Taylor-Regel",
    labelX: 3.8
  });
  drawVertical(plot, piStar, plot.col.accent2, "Inflationsziel");
  drawPoint(plot, piCurrent, currentI, plot.col.warn, "Regelzins");

  updateInfo(plot, renderInfo(
    'i = r* + π + a(π − π*) + b(y − yₙ)',
    [
      { label: 'Regelparameter', body: `r* = ${rStar.toFixed(1)}%, π* = ${piStar.toFixed(1)}%, a = ${a.toFixed(1)} und b = ${b.toFixed(1)}.` },
      { label: 'Aktuelle Lage', body: `Bei aktueller Inflation von ${piCurrent.toFixed(1)}% und einer Outputlücke von ${outputGap.toFixed(2)} empfiehlt die Regel einen Leitzins von ${currentI.toFixed(1)}%.` },
      { label: 'Taylor-Prinzip', body: a > 0 ? 'Die Reaktion auf Inflation ist stabilisierend: Mit steigender Inflation liegt die Taylor-Regel oberhalb der neutralen Zinslinie.' : 'Ohne ausreichende Inflationsreaktion würde der Realzins nicht stabilisierend ansteigen.' }
    ]
  ));
}

function drawSolowBasis() {
  const s = getNumber("g_s", 0.3);
  const a = getNumber("g_a", 1.2);
  const breakEven = getNumber("g_break", 0.12);
  setValueLabel("v_s", s, 2);
  setValueLabel("v_a", a, 1);
  setValueLabel("v_break", breakEven, 2);

  const plot = setupPlot("Kapital pro Kopf k", "Investition / Break-even", {
    xMin: 0,
    xMax: 25,
    yMin: 0,
    yMax: 6.5
  });
  if (!plot) return;

  const investment = (k) => s * a * Math.sqrt(Math.max(k, 0));
  const breakLine = (k) => breakEven * k;
  const kStar = Math.pow((s * a) / breakEven, 2);

  drawCurve(plot, investment, {
    color: plot.col.accent,
    label: "Investition sf(k)",
    labelX: 18
  });
  drawCurve(plot, breakLine, {
    color: plot.col.accent2,
    label: "Break-even-Investition",
    labelX: 17
  });
  if (kStar >= plot.ranges.xMin && kStar <= plot.ranges.xMax) {
    drawPoint(plot, kStar, investment(kStar), plot.col.warn, "Steady State");
  }

  updateInfo(plot, renderInfo(
    'Steady State: sf(k*) = (δ + n)k*',
    [
      { label: 'Kurvenlogik', body: 'Die Investitionskurve liegt bei höherer Sparquote oder Produktivität weiter oben; die Break-even-Investition steigt mit Abschreibung und Bevölkerungswachstum.' },
      { label: 'Steady State', body: `Bei den aktuellen Werten ergibt sich ein langfristiges Gleichgewicht von k* = ${kStar.toFixed(1)}.` },
      { label: 'Dynamik', body: 'Links vom Steady State gilt sf(k) > (δ+n)k, rechts davon schrumpft der Kapitalstock pro Kopf.' }
    ]
  ));
}

function drawSteadyState() {
  const s = getNumber("g_ss_s", 0.28);
  const loss = getNumber("g_ss_loss", 0.12);
  const a = getNumber("g_ss_a", 1.2);
  const kCurrent = getNumber("g_ss_k", 7.5);
  setValueLabel("v_ss_s", s, 2);
  setValueLabel("v_ss_loss", loss, 2);
  setValueLabel("v_ss_a", a, 1);
  setValueLabel("v_ss_k", kCurrent, 1);

  const plot = setupPlot("Kapital pro Kopf k", "Investition / Break-even", {
    xMin: 0,
    xMax: 24,
    yMin: 0,
    yMax: 6.8
  });
  if (!plot) return;

  const investment = (k) => s * a * Math.sqrt(Math.max(k, 0));
  const breakLine = (k) => loss * k;
  const kStar = Math.pow((s * a) / loss, 2);
  const invCurrent = investment(kCurrent);
  const breakCurrent = breakLine(kCurrent);

  drawCurve(plot, investment, {
    color: plot.col.accent,
    label: "sf(k)",
    labelX: 17
  });
  drawCurve(plot, breakLine, {
    color: plot.col.accent2,
    label: "(δ+n)k",
    labelX: 16
  });
  drawVertical(plot, kCurrent, plot.col.muted, "Aktuelles k");
  drawPoint(plot, kCurrent, invCurrent, plot.col.warn, "sf(k)");
  drawPoint(plot, kCurrent, breakCurrent, plot.col.warn, "Break-even");
  if (kStar <= plot.ranges.xMax) {
    drawPoint(plot, kStar, investment(kStar), plot.col.accent2, "Steady State");
  }

  const direction = invCurrent > breakCurrent + 0.05
    ? 'k steigt weiter'
    : invCurrent < breakCurrent - 0.05
      ? 'k sinkt in Richtung Steady State'
      : 'k liegt bereits nahe am Steady State';

  updateInfo(plot, renderInfo(
    'sf(k*) = (δ+n)k*',
    [
      { label: 'Steady State', body: `Bei s = ${s.toFixed(2)}, A = ${a.toFixed(1)} und δ+n = ${loss.toFixed(2)} ergibt sich k* = ${kStar.toFixed(1)}.` },
      { label: 'Aktuelle Lage', body: `Beim aktuellen Kapitalstock k = ${kCurrent.toFixed(1)} gilt ${direction}.` },
      { label: 'Komparative Statik', body: 'Höheres s oder höheres A schieben sf(k) nach oben; höheres δ+n macht die Break-even-Gerade steiler und drückt den Steady State nach links.' }
    ]
  ));
}

function drawGoldeneSparquote() {
  const alpha = getNumber("g_golden_alpha", 0.35);
  const loss = getNumber("g_golden_loss", 0.10);
  const a = getNumber("g_golden_a", 1.1);
  setValueLabel("v_golden_alpha", alpha, 2);
  setValueLabel("v_golden_loss", loss, 2);
  setValueLabel("v_golden_a", a, 1);

  const kGold = Math.pow((alpha * a) / loss, 1 / (1 - alpha));
  const c = (k) => a * Math.pow(Math.max(k, 0), alpha) - loss * k;
  const sample = Array.from({ length: 200 }, (_, idx) => c((24 / 199) * idx));
  const plot = setupPlot("Kapital pro Kopf k", "Steady-State-Konsum c*", {
    xMin: 0.1,
    xMax: 24,
    yMin: 0,
    yMax: Math.max(2.2, Math.ceil((Math.max(...sample) + 0.4) * 10) / 10)
  });
  if (!plot) return;

  drawCurve(plot, c, {
    color: plot.col.accent,
    label: "Konsum im SS",
    labelX: 16
  });
  if (kGold >= plot.ranges.xMin && kGold <= plot.ranges.xMax) {
    drawVertical(plot, kGold, plot.col.accent2, "k_gold");
    drawPoint(plot, kGold, c(kGold), plot.col.warn, "Konsummaximum");
  }

  updateInfo(plot, renderInfo(
    'f′(k_gold) = δ + n',
    [
      { label: 'Goldene Regel', body: `Bei α = ${alpha.toFixed(2)}, A = ${a.toFixed(1)} und δ+n = ${loss.toFixed(2)} liegt der goldene Kapitalstock bei k ≈ ${kGold.toFixed(1)}.` },
      { label: 'Lesart', body: 'Links vom Maximum erhöht mehr Kapital den langfristigen Konsum; rechts davon ist die Wirtschaft überakkumuliert und spart zu viel für das Konsumziel.' },
      { label: 'Merkregel', body: `Im Cobb-Douglas-Fall entspricht die goldene Sparquote dem Kapitalanteil: s_gold = α = ${alpha.toFixed(2)}.` }
    ]
  ));
}

function drawPhillipskurve() {
  const piExpected = getNumber("g_pie", 2);
  const uNatural = getNumber("g_un", 4.5);
  const alpha = getNumber("g_alpha", 0.8);
  const uCurrent = getNumber("g_u_current", 5.5);
  setValueLabel("v_pie", piExpected, 2);
  setValueLabel("v_un", uNatural, 2);
  setValueLabel("v_alpha", alpha, 1);
  setValueLabel("v_u_current", uCurrent, 2);

  const plot = setupPlot("Arbeitslosigkeit u (%)", "Inflation π (%)", {
    xMin: 2,
    xMax: 9,
    yMin: 0,
    yMax: 6
  });
  if (!plot) return;

  const phillips = (u) => piExpected - alpha * (u - uNatural);
  const currentPi = phillips(uCurrent);

  drawHorizontal(plot, piExpected, plot.col.accent2, "πᵉ");
  drawVertical(plot, uNatural, plot.col.muted, "Natürliche Arbeitslosigkeit");
  drawCurve(plot, phillips, {
    color: plot.col.accent,
    label: "Phillipskurve",
    labelX: 7.2
  });
  drawPoint(plot, uCurrent, currentPi, plot.col.warn, "Aktueller Punkt");

  updateInfo(plot, renderInfo(
    'π = πᵉ − α(u − uₙ)',
    [
      { label: 'Orientierung', body: `Die erwartete Inflation liegt bei ${piExpected.toFixed(1)}%; die natürliche Arbeitslosigkeit bei ${uNatural.toFixed(1)}%.` },
      { label: 'Aktueller Punkt', body: `Bei u = ${uCurrent.toFixed(1)}% ergibt sich π = ${currentPi.toFixed(1)}%. Damit liegt die Inflation ${currentPi >= piExpected ? 'über' : 'unter'} der erwarteten Inflation.` },
      { label: 'Deutung', body: 'Links von uₙ ist der Arbeitsmarkt angespannt und die Inflation liegt über πᵉ; rechts von uₙ fällt sie darunter.' }
    ]
  ));
}

function drawGeldmengen() {
  const mpReal = getNumber("g_mp_real", 45);
  const kappa = getNumber("g_kappa", 0.45);
  const h = getNumber("g_h", 9);
  const yCurrent = getNumber("g_y_current", 70);
  setValueLabel("v_mp_real", mpReal, 0);
  setValueLabel("v_kappa", kappa, 2);
  setValueLabel("v_h", h, 0);
  setValueLabel("v_y_current", yCurrent, 0);

  const plot = setupPlot("Einkommen Y", "Zins i (%)", {
    xMin: 20,
    xMax: 120,
    yMin: 0,
    yMax: 12
  });
  if (!plot) return;

  const lm = (y) => (kappa * y - mpReal) / h;
  const currentI = lm(yCurrent);

  drawCurve(plot, lm, {
    color: plot.col.accent,
    label: "LM-Kurve",
    labelX: 95
  });
  drawPoint(plot, yCurrent, Math.max(plot.ranges.yMin, currentI), plot.col.warn, "Geldmarktgleichgewicht");

  updateInfo(plot, renderInfo(
    'M / P = kY − hi',
    [
      { label: 'Geldangebot', body: `Mehr reales Geldangebot (${mpReal.toFixed(0)}) verschiebt die LM-Kurve nach rechts bzw. unten.` },
      { label: 'Aktueller Punkt', body: `Bei Y = ${yCurrent.toFixed(0)} ergibt sich aktuell ein Gleichgewichtszins von rund ${currentI.toFixed(1)}%.` },
      { label: 'Steigung', body: 'Ein höheres k macht die LM steiler, ein höheres h flacher.' }
    ]
  ));
}

function initGraph(conceptId) {
  switch (conceptId) {
    case "wechselkurs":
    case "kaufkraftparitaet":
      drawWechselkurs();
      break;
    case "zinsparitaet":
      drawZinsparitaet();
      break;
    case "nettoexporte":
      drawNettoexporte();
      break;
    case "marshall_lerner":
      drawMarshallLerner();
      break;
    case "mundell_fleming":
      drawMundellFleming();
      break;
    case "zp_kurve":
      drawZPKurve();
      break;
    case "wk_regime":
      drawWkRegime();
      break;
    case "schuldenquote_dynamik":
      drawSchuldenquote();
      break;
    case "schuldenfinanzierung_monetarisierung":
      drawSchuldenquote();
      break;
    case "taylor_regel":
      drawTaylorRegel();
      break;
    case "solow_basis":
      drawSolowBasis();
      break;
    case "steady_state":
      drawSteadyState();
      break;
    case "goldene_sparquote":
      drawGoldeneSparquote();
      break;
    case "phillipskurve":
      drawPhillipskurve();
      break;
    case "geldmengen":
      drawGeldmengen();
      break;
    default:
      break;
  }
}

function noop() {}

export { initGraph, noop as drawBudget, noop as drawIndiff, noop as drawHausopt, noop as drawMonopol, noop as drawSlutsky };
