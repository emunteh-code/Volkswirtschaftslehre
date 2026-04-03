// ============================================================
// GRAPH DRAW FUNCTIONS — Makroökonomik I
// Subject-correct interactive macro graphs for the portal
// ============================================================

import GraphEngine from './graphEngine.js';

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
  const engine = new GraphEngine('graph_canvas');
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
  const fsBase = Math.max(11, Math.round(Math.min(w, h) * 0.022));
  const fsBold = Math.max(12, Math.round(Math.min(w, h) * 0.026));

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  const ticks = (min, max, steps) => Array.from({ length: steps + 1 }, (_, index) => min + ((max - min) / steps) * index);

  ctx.setLineDash([4, 6]);
  ctx.lineWidth = 1;
  ctx.strokeStyle = col.grid;
  ctx.globalAlpha = 0.65;

  ticks(xMin, xMax, 5).forEach((tick) => {
    const x = px(tick);
    ctx.beginPath();
    ctx.moveTo(x, pad.top);
    ctx.lineTo(x, h - pad.bottom);
    ctx.stroke();
  });

  ticks(yMin, yMax, 5).forEach((tick) => {
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

  ctx.fillStyle = col.tick;
  ctx.font = `${fsBase}px ${col.fontMono}`;
  ctx.textAlign = 'center';
  ticks(xMin, xMax, 5).forEach((tick) => {
    ctx.fillText(tick.toFixed(xMax - xMin <= 10 ? 1 : 0), px(tick), h - pad.bottom + 18);
  });

  ctx.textAlign = 'right';
  ticks(yMin, yMax, 5).forEach((tick) => {
    ctx.fillText(tick.toFixed(yMax - yMin <= 10 ? 1 : 0), pad.left - 8, py(tick) + 4);
  });

  ctx.fillStyle = col.label;
  ctx.font = `600 ${fsBold}px ${col.fontMono}`;
  ctx.textAlign = 'center';
  ctx.fillText(xLabel, pad.left + innerW / 2, h - 18);
  ctx.save();
  ctx.translate(18, pad.top + innerH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();

  return { engine, ctx, col, w, h, pad, px, py, ranges, fsBase, fsBold };
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
    labelDy = -8
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
    if (y < plot.ranges.yMin - 0.5 || y > plot.ranges.yMax + 0.5) continue;
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
      ctx.fillStyle = color;
      ctx.font = `600 ${plot.fsBase}px ${plot.col.fontMono}`;
      ctx.textAlign = 'left';
      ctx.fillText(label, px(x) + 8, py(y) + labelDy);
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
    ctx.fillStyle = color;
    ctx.font = `600 ${fsBase}px ${col.fontMono}`;
    ctx.textAlign = 'left';
    ctx.fillText(label, px(ranges.xMax) - 130, py(y) - 8);
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
    ctx.fillStyle = color;
    ctx.font = `600 ${fsBase}px ${col.fontMono}`;
    ctx.textAlign = 'left';
    ctx.fillText(label, px(x) + 8, py(ranges.yMax) + 14);
  }
}

function drawPoint(plot, x, y, color, label, dx = 10, dy = -8) {
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
    ctx.fillStyle = color;
    ctx.font = `600 ${fsBase}px ${col.fontMono}`;
    ctx.textAlign = 'left';
    ctx.fillText(label, cx + dx, cy + dy);
  }
}

function updateInfo(html) {
  const info = document.getElementById('graph_info');
  if (info) info.innerHTML = html;
}

function renderInfo(equation, rows) {
  return `
    ${equation ? `<div class="graph-equation">${equation}</div>` : ''}
    <div class="graph-insights">
      ${rows.map((row) => `
        <div class="graph-insight-row">
          <span class="graph-insight-label">${row.label}</span>
          <span>${row.body}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function solvePolicyIntersection(base, slope, intercept, lmBase, lmSlope, yRef = 120) {
  return (intercept + base / slope - lmBase + lmSlope * yRef) / ((1 / slope) + lmSlope);
}

function drawGuetermarkt() {
  const A = getNumber('g_goods_a', 150);
  const c1 = getNumber('g_goods_c1', 0.7);
  setValueLabel('v_goods_a', A, 0);
  setValueLabel('v_goods_c1', c1, 2);

  const yStar = A / (1 - c1);
  const xMax = Math.max(300, yStar * 1.25);
  const plot = setupPlot('Einkommen / Produktion Y', 'Geplante Nachfrage Z', {
    xMin: 0,
    xMax,
    yMin: 0,
    yMax: xMax
  });
  if (!plot) return;

  const demand = (y) => A + c1 * y;
  drawCurve(plot, (y) => y, { color: plot.col.muted, label: '45°-Linie', labelX: xMax * 0.72 });
  drawCurve(plot, demand, { color: plot.col.accent, label: 'Geplante Nachfrage Z', labelX: xMax * 0.45 });
  drawPoint(plot, yStar, yStar, plot.col.warn, `Y* = ${yStar.toFixed(0)}`);

  updateInfo(renderInfo(
    `Z = ${A.toFixed(0)} + ${c1.toFixed(2)}Y`,
    [
      { label: 'Gleichgewicht', body: `Die 45°-Linie schneidet die Nachfrage bei Y* = ${yStar.toFixed(0)}.` },
      { label: 'Steigung', body: `Die Nachfrage steigt pro zusätzlicher Einkommenseinheit nur um c₁ = ${c1.toFixed(2)} und bleibt deshalb flacher als die 45°-Linie.` },
      { label: 'Lesart', body: 'Mehr autonome Nachfrage verschiebt die Z-Kurve nach oben und erhöht das kurzfristige Gleichgewichtseinkommen.' }
    ]
  ));
}

function drawMultiplikator() {
  const A0 = getNumber('g_mult_a0', 130);
  const impulse = getNumber('g_mult_impulse', 40);
  const c1 = getNumber('g_mult_c1', 0.75);
  setValueLabel('v_mult_a0', A0, 0);
  setValueLabel('v_mult_impulse', impulse, 0);
  setValueLabel('v_mult_c1', c1, 2);

  const A1 = A0 + impulse;
  const y0 = A0 / (1 - c1);
  const y1 = A1 / (1 - c1);
  const multiplier = 1 / (1 - c1);
  const xMax = Math.max(280, y1 * 1.2);
  const plot = setupPlot('Einkommen / Produktion Y', 'Geplante Nachfrage Z', {
    xMin: 0,
    xMax,
    yMin: 0,
    yMax: xMax
  });
  if (!plot) return;

  const oldDemand = (y) => A0 + c1 * y;
  const newDemand = (y) => A1 + c1 * y;

  drawCurve(plot, (y) => y, { color: plot.col.muted, label: '45°-Linie', labelX: xMax * 0.72 });
  drawCurve(plot, oldDemand, { color: plot.col.accent, label: 'Ausgangsnachfrage', labelX: xMax * 0.36 });
  drawCurve(plot, newDemand, { color: plot.col.warn, label: 'Nachfrage nach Impuls', labelX: xMax * 0.44, labelDy: 14 });
  drawPoint(plot, y0, y0, plot.col.accent, `Y₀* = ${y0.toFixed(0)}`);
  drawPoint(plot, y1, y1, plot.col.warn, `Y₁* = ${y1.toFixed(0)}`);
  drawVertical(plot, y0, plot.col.accent + 'aa', 'Y₀*');
  drawVertical(plot, y1, plot.col.warn + 'aa', 'Y₁*');

  updateInfo(renderInfo(
    `Multiplikator = 1 / (1 - c₁) = ${multiplier.toFixed(2)}`,
    [
      { label: 'Erstimpuls', body: `Der fiskalische Erstimpuls beträgt ΔG = ${impulse.toFixed(0)} und hebt die Nachfragekurve parallel an.` },
      { label: 'Gesamteffekt', body: `Das Gleichgewichtseinkommen steigt von ${y0.toFixed(0)} auf ${y1.toFixed(0)}; insgesamt also um ${(y1 - y0).toFixed(0)}.` },
      { label: 'Interpretation', body: 'Je höher c₁, desto stärker werden zusätzliche Einkommen wieder konsumiert und desto größer ist die Verstärkung.' }
    ]
  ));
}

function drawGeldnachfrage() {
  const mp = getNumber('g_money_mp', 45);
  const y = getNumber('g_money_y', 100);
  const h = getNumber('g_money_h', 10);
  const k = 0.45;
  setValueLabel('v_money_mp', mp, 0);
  setValueLabel('v_money_y', y, 0);
  setValueLabel('v_money_h', h, 0);

  const moneyDemand = (mReal) => (k * y - mReal) / h;
  const iStar = Math.max(0, moneyDemand(mp));
  const xMax = Math.max(100, k * y + 30);
  const plot = setupPlot('Reale Geldmenge M/P', 'Nominalzins i', {
    xMin: 0,
    xMax,
    yMin: 0,
    yMax: 8
  });
  if (!plot) return;

  drawCurve(plot, moneyDemand, { color: plot.col.accent, label: 'Geldnachfrage', labelX: xMax * 0.3 });
  drawVertical(plot, mp, plot.col.warn, 'reales Geldangebot');
  drawPoint(plot, mp, iStar, plot.col.warn, `i* = ${iStar.toFixed(2)}`, 10, -12);

  updateInfo(renderInfo(
    `M/P = ${mp.toFixed(0)},  Geldnachfrage = ${k.toFixed(2)}Y - ${h.toFixed(0)}i`,
    [
      { label: 'Gleichgewicht', body: `Bei Y = ${y.toFixed(0)} ergibt sich aktuell ein Gleichgewichtszins von ${iStar.toFixed(2)}.` },
      { label: 'Einkommenseffekt', body: 'Ein höheres Einkommen verschiebt die Geldnachfrage nach rechts und erhöht bei gegebenem Angebot den Zins.' },
      { label: 'Geldpolitik', body: 'Mehr reale Geldmenge verschiebt das vertikale Angebot nach rechts und senkt den Gleichgewichtszins.' }
    ]
  ));
}

function drawISLM() {
  const base = getNumber('g_islm_aut', 110);
  const slope = getNumber('g_islm_slope', 8);
  const iBar = getNumber('g_islm_i', 4);
  const intercept = 10;
  setValueLabel('v_islm_aut', base, 0);
  setValueLabel('v_islm_slope', slope, 0);
  setValueLabel('v_islm_i', iBar, 2);

  const isCurve = (y) => intercept - (y - base) / slope;
  const yStar = base + slope * (intercept - iBar);
  const plot = setupPlot('Produktion Y', 'Zins i', {
    xMin: 40,
    xMax: Math.max(180, yStar + 35),
    yMin: 0,
    yMax: 10
  });
  if (!plot) return;

  drawCurve(plot, isCurve, { color: plot.col.accent, label: 'IS-Kurve', labelX: plot.ranges.xMax * 0.6 });
  drawHorizontal(plot, iBar, plot.col.warn, 'Zinsregel der Zentralbank');
  drawPoint(plot, yStar, iBar, plot.col.warn, `E = (${yStar.toFixed(0)}, ${iBar.toFixed(2)})`);

  updateInfo(renderInfo(
    `IS: i = ${intercept.toFixed(1)} - (Y - ${base.toFixed(0)}) / ${slope.toFixed(0)}`,
    [
      { label: 'Gleichgewicht', body: `Die Güternachfrage ist bei Y = ${yStar.toFixed(0)} mit dem Zielzins ī = ${iBar.toFixed(2)} vereinbar.` },
      { label: 'Fiskalpolitik', body: 'Mehr autonome Nachfrage verschiebt die IS-Kurve nach rechts und hebt bei gegebenem Zielzins den Output.' },
      { label: 'Geldpolitik', body: 'Eine Zinssenkung verschiebt die horizontale Zinsregel nach unten und stimuliert Investitionen sowie Produktion.' }
    ]
  ));
}

function drawPolitikmix() {
  const shift = getNumber('g_policy_shift', 35);
  const lmSlope = getNumber('g_policy_lm', 0.06);
  const i0 = getNumber('g_policy_i0', 3.5);
  const isBase = 100;
  const isSlope = 10;
  const isIntercept = 10;
  const yRef = 120;
  setValueLabel('v_policy_shift', shift, 0);
  setValueLabel('v_policy_lm', lmSlope, 2);
  setValueLabel('v_policy_i0', i0, 2);

  const isOld = (y) => isIntercept - (y - isBase) / isSlope;
  const isNew = (y) => isIntercept - (y - (isBase + shift)) / isSlope;
  const lm = (y) => i0 + lmSlope * (y - yRef);
  const yOld = solvePolicyIntersection(isBase, isSlope, isIntercept, i0, lmSlope, yRef);
  const yNew = solvePolicyIntersection(isBase + shift, isSlope, isIntercept, i0, lmSlope, yRef);
  const iOld = lm(yOld);
  const iNew = lm(yNew);

  const plot = setupPlot('Produktion Y', 'Zins i', {
    xMin: 40,
    xMax: Math.max(190, yNew + 35),
    yMin: 0,
    yMax: 10
  });
  if (!plot) return;

  drawCurve(plot, isOld, { color: plot.col.muted, label: 'IS vor Fiskalimpuls', labelX: 80 });
  drawCurve(plot, isNew, { color: plot.col.accent, label: 'IS nach Fiskalimpuls', labelX: 100, labelDy: 14 });
  drawCurve(plot, lm, { color: plot.col.warn, label: 'LM-Kurve', labelX: 145 });
  drawPoint(plot, yOld, iOld, plot.col.muted, 'E₀');
  drawPoint(plot, yNew, iNew, plot.col.warn, 'E₁');

  updateInfo(renderInfo(
    `IS-Verschiebung um ${shift.toFixed(0)} bei LM-Steigung ${lmSlope.toFixed(2)}`,
    [
      { label: 'Ausgangslage', body: `Vor dem Impuls liegt das Gleichgewicht bei Y = ${yOld.toFixed(0)} und i = ${iOld.toFixed(2)}.` },
      { label: 'Neues Gleichgewicht', body: `Nach der Fiskalexpansion steigt Y auf ${yNew.toFixed(0)}, zugleich steigt der Zins auf ${iNew.toFixed(2)}.` },
      { label: 'Crowding-Out', body: 'Je steiler die LM-Kurve, desto stärker wird der Fiskalimpuls durch höhere Zinsen und niedrigere Investitionen gedämpft.' }
    ]
  ));
}

function drawArbeitsmarkt() {
  const z = getNumber('g_labour_z', 1.0);
  const mu = getNumber('g_labour_mu', 0.2);
  setValueLabel('v_labour_z', z, 2);
  setValueLabel('v_labour_mu', mu, 2);

  const ws = (u) => z + 0.15 - 0.03 * u;
  const ps = 1 / (1 + mu);
  const uStar = (z + 0.15 - ps) / 0.03;

  const plot = setupPlot('Arbeitslosenquote u (in %)', 'Reallohn W/P', {
    xMin: 0,
    xMax: 20,
    yMin: 0.4,
    yMax: 1.4
  });
  if (!plot) return;

  drawCurve(plot, ws, { color: plot.col.accent, label: 'WS-Kurve', labelX: 6 });
  drawHorizontal(plot, ps, plot.col.warn, 'PS-Kurve');
  if (uStar >= plot.ranges.xMin && uStar <= plot.ranges.xMax) {
    drawPoint(plot, uStar, ps, plot.col.warn, `uₙ = ${uStar.toFixed(1)}%`);
  }

  updateInfo(renderInfo(
    `PS = 1 / (1 + μ) = ${ps.toFixed(2)}`,
    [
      { label: 'WS', body: 'Höheres z hebt die Lohnforderung an und verschiebt die WS-Kurve nach oben.' },
      { label: 'PS', body: `Bei μ = ${mu.toFixed(2)} zahlen Firmen einen Reallohn von ${ps.toFixed(2)}.` },
      { label: 'Gleichgewicht', body: `Die natürliche Arbeitslosenquote liegt aktuell bei etwa ${uStar.toFixed(1)}%.` }
    ]
  ));
}

function drawPhillips() {
  const pie = getNumber('g_pc_pie', 2.0);
  const un = getNumber('g_pc_un', 5.0);
  const alpha = getNumber('g_pc_alpha', 0.9);
  const uCurrent = getNumber('g_pc_u', 4.25);
  setValueLabel('v_pc_pie', pie, 2);
  setValueLabel('v_pc_un', un, 2);
  setValueLabel('v_pc_alpha', alpha, 1);
  setValueLabel('v_pc_u', uCurrent, 2);

  const curve = (u) => pie - alpha * (u - un);
  const shifted = (u) => pie + 1 - alpha * (u - un);
  const piCurrent = curve(uCurrent);

  const plot = setupPlot('Arbeitslosenquote u (in %)', 'Inflation π (in %)', {
    xMin: 2,
    xMax: 10,
    yMin: -1,
    yMax: 7
  });
  if (!plot) return;

  drawCurve(plot, curve, { color: plot.col.accent, label: 'Kurzfristige Phillipskurve', labelX: 3.7 });
  drawCurve(plot, shifted, { color: plot.col.warn, dash: [8, 6], label: 'bei höheren Erwartungen', labelX: 4.4, labelDy: 18 });
  drawVertical(plot, un, plot.col.muted, 'uₙ');
  drawPoint(plot, uCurrent, piCurrent, plot.col.warn, `Punkt A`, 10, -12);

  updateInfo(renderInfo(
    `π = πᵉ − α (u − uₙ)`,
    [
      { label: 'Aktueller Punkt', body: `Bei u = ${uCurrent.toFixed(2)}% ergibt sich eine Inflation von ${piCurrent.toFixed(2)}%.` },
      { label: 'NAIRU', body: `Bei uₙ = ${un.toFixed(2)}% bleibt Inflation bei gegebenen Erwartungen stabil.` },
      { label: 'Erwartungen', body: 'Steigende Inflationserwartungen verschieben die gesamte kurzfristige Phillipskurve nach oben.' }
    ]
  ));
}

function initGraph(conceptId) {
  switch (conceptId) {
    case 'guetermarkt':
      drawGuetermarkt();
      break;
    case 'multiplikator':
      drawMultiplikator();
      break;
    case 'geldnachfrage':
      drawGeldnachfrage();
      break;
    case 'islm':
      drawISLM();
      break;
    case 'politikmix':
      drawPolitikmix();
      break;
    case 'arbeitsmarkt':
      drawArbeitsmarkt();
      break;
    case 'phillips':
      drawPhillips();
      break;
    default:
      break;
  }
}

function noop() {}

export { initGraph, noop as drawBudget, noop as drawIndiff, noop as drawHausopt, noop as drawMonopol, noop as drawSlutsky };
