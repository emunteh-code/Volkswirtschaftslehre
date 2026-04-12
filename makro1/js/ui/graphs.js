// ============================================================
// GRAPH DRAW FUNCTIONS — Makroökonomik I
// Subject-correct interactive macro graphs for the portal
// ============================================================

import GraphEngine from './graphEngine.js';
import { renderMath } from '../utils/mathjax.js';

const PHILLIPS_CURVE_CURVATURE = 0.075;

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

function phillipsGapEffect(gap, alpha) {
  return alpha * gap * (1 - PHILLIPS_CURVE_CURVATURE * gap);
}

function phillipsInflation(u, piExpected, uNatural, alpha, supply = 0) {
  return piExpected + supply - phillipsGapEffect(u - uNatural, alpha);
}

function setupPlot(xLabel, yLabel, ranges, layout = {}) {
  const engine = new GraphEngine('graph_canvas');
  const { w, h, ctx } = engine.setup();
  const col = engine.refreshColors();
  if (!ctx || !w || !h) return null;

  const pad = {
    left: layout.pad?.left ?? 74,
    right: layout.pad?.right ?? 28,
    top: layout.pad?.top ?? 26,
    bottom: layout.pad?.bottom ?? 58
  };
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
    legendMargin: layout.legendMargin ?? 18,
    legendTop: layout.legendTop ?? 46,
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

function drawTag(plot, x, y, text, color, dx = 10, dy = -10, align = 'left') {
  const { ctx, px, py, col } = plot;
  const tagX = px(x) + dx;
  const tagY = py(y) + dy;
  ctx.save();
  ctx.font = `600 ${Math.max(12, plot.fsBase)}px ${col.fontBody}`;
  const width = ctx.measureText(text).width + 18;
  const height = 24;
  const rectX = align === 'right' ? tagX - width + 4 : tagX - 4;
  ctx.fillStyle = `${col.bg}f2`;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(rectX, tagY - height + 5, width, height, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, rectX + 9, tagY - 6);
  ctx.restore();
}

function drawLegend(plot) {
  if (!plot.legendEntries.length) return;
  plot.engine.drawLegend(plot.ctx, plot.w, plot.legendEntries, plot.col.grid, {
    rightMargin: plot.legendMargin ?? 18,
    top: plot.legendTop ?? 46
  });
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
    labelAlign = 'left',
    /** If false, curve appears in legend only (no on-canvas tag). */
    canvasLabel = true
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
    registerLegend(plot, { color, label, dash, lw: lineWidth });
    if (canvasLabel) {
      const x = labelX ?? (xStart + xEnd) / 2;
      const y = fn(x);
      if (Number.isFinite(y) && y >= plot.ranges.yMin && y <= plot.ranges.yMax) {
        drawTag(plot, x, y, label, color, 10, labelDy, labelAlign);
      }
    }
  }
}

function drawHorizontal(plot, y, color, label, canvasLabel = true) {
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
    registerLegend(plot, { color, label, dash: [8, 6], lw: 2.4 });
    if (canvasLabel) {
      drawTag(plot, ranges.xMax, y, label, color, -138, -8, 'right');
    }
  }
}

function drawVertical(plot, x, color, label, canvasLabel = true) {
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
    registerLegend(plot, { color, label, dash: [8, 6], lw: 2 });
    if (canvasLabel) {
      drawTag(plot, x, ranges.yMax, label, color, 10, 14);
    }
  }
}

function drawPoint(plot, x, y, color, label, dx = 10, dy = -8, canvasLabel = true) {
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
    registerLegend(plot, { color, label, dot: true });
    if (canvasLabel) {
      drawTag(plot, x, y, label, color, dx, dy);
    }
  }
}

function updateInfo(plot, html) {
  drawLegend(plot);
  const info = document.getElementById('graph_info');
  if (!info) return;
  info.innerHTML = html;
  Promise.resolve(renderMath(info)).catch(() => {});
}

function renderInfo(equation, rows) {
  const safeRows = rows.filter((row) => row?.body);
  return `
    <span class="gi-label">Graph-Interpretation</span>
    ${equation ? `<div class="gi-eq">\\(${equation}\\)</div>` : ''}
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

  updateInfo(plot, renderInfo(
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

  updateInfo(plot, renderInfo(
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

  updateInfo(plot, renderInfo(
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

  updateInfo(plot, renderInfo(
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

  updateInfo(plot, renderInfo(
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

  updateInfo(plot, renderInfo(
    `PS = 1 / (1 + μ) = ${ps.toFixed(2)}`,
    [
      { label: 'WS', body: 'Höheres z hebt die Lohnforderung an und verschiebt die WS-Kurve nach oben.' },
      { label: 'PS', body: `Bei μ = ${mu.toFixed(2)} zahlen Firmen einen Reallohn von ${ps.toFixed(2)}.` },
      { label: 'Gleichgewicht', body: `Die natürliche Arbeitslosenquote liegt aktuell bei etwa ${uStar.toFixed(1)}%.` }
    ]
  ));
}

function solveIslmpcEquilibrium(base, isSlope, isIntercept, yn, un, pie, alpha, betaOkun, i0, lam, pit, supply) {
  const unemploymentFromY = (Y) => un - betaOkun * ((Y - yn) / yn);
  const piFromY = (Y) => phillipsInflation(unemploymentFromY(Y), pie, un, alpha, supply);
  const iMp = (Y) => i0 + lam * (piFromY(Y) - pit);
  const iIs = (Y) => isIntercept - (Y - base) / isSlope;
  const f = (Y) => iIs(Y) - iMp(Y);

  let best = yn;
  let bestAbs = Infinity;
  for (let g = yn * 0.72; g <= yn * 1.32; g += 0.4) {
    const v = Math.abs(f(g));
    if (v < bestAbs) {
      bestAbs = v;
      best = g;
    }
  }

  let lo = yn * 0.78;
  let hi = yn * 1.28;
  let flo = f(lo);
  let fhi = f(hi);
  for (let e = 0; e < 22 && flo * fhi > 0; e += 1) {
    hi += yn * 0.035;
    lo -= yn * 0.035;
    flo = f(lo);
    fhi = f(hi);
  }

  if (flo * fhi <= 0) {
    for (let k = 0; k < 100; k += 1) {
      const mid = (lo + hi) / 2;
      const fm = f(mid);
      if (Math.abs(fm) < 0.004 || hi - lo < 0.012) return mid;
      if (flo * fm <= 0) {
        hi = mid;
        fhi = fm;
      } else {
        lo = mid;
        flo = fm;
      }
    }
    return (lo + hi) / 2;
  }
  return best;
}

function buildSubplotPlot(ctx, col, geom, ranges, fsBase, fsBold, xLabel, yLabel) {
  const { x0, y0, w, h, padL, padR, padT, padB } = geom;
  const { xMin, xMax, yMin, yMax } = ranges;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const px = (x) => x0 + padL + ((x - xMin) / (xMax - xMin)) * innerW;
  const py = (y) => y0 + padT + innerH - ((y - yMin) / (yMax - yMin)) * innerH;

  const ticks = (min, max, steps) => Array.from({ length: steps + 1 }, (_, index) => min + ((max - min) / steps) * index);

  ctx.strokeStyle = col.grid;
  ctx.globalAlpha = 0.6;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 6]);
  ticks(xMin, xMax, 5).forEach((tick) => {
    const x = px(tick);
    ctx.beginPath();
    ctx.moveTo(x, y0 + padT);
    ctx.lineTo(x, y0 + padT + innerH);
    ctx.stroke();
  });
  ticks(yMin, yMax, 5).forEach((tick) => {
    const y = py(tick);
    ctx.beginPath();
    ctx.moveTo(x0 + padL, y);
    ctx.lineTo(x0 + padL + innerW, y);
    ctx.stroke();
  });
  ctx.setLineDash([]);
  ctx.globalAlpha = 1;
  ctx.strokeStyle = col.axis;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x0 + padL, y0 + padT);
  ctx.lineTo(x0 + padL, y0 + padT + innerH);
  ctx.lineTo(x0 + padL + innerW, y0 + padT + innerH);
  ctx.stroke();

  ctx.fillStyle = col.tick;
  ctx.font = `${fsBase}px ${col.fontMono}`;
  ctx.textAlign = 'center';
  ticks(xMin, xMax, 5).forEach((tick) => {
    ctx.fillText(tick.toFixed(xMax - xMin <= 12 ? 1 : 0), px(tick), y0 + h - 22);
  });
  ctx.textAlign = 'right';
  ticks(yMin, yMax, 5).forEach((tick) => {
    ctx.fillText(tick.toFixed(yMax - yMin <= 10 ? 1 : 0), x0 + padL - 5, py(tick) + 4);
  });

  ctx.fillStyle = col.label;
  ctx.font = `600 ${fsBold}px ${col.fontMono}`;
  ctx.textAlign = 'center';
  if (xLabel) ctx.fillText(xLabel, x0 + padL + innerW / 2, y0 + h - 5);
  if (yLabel) {
    ctx.save();
    ctx.translate(x0 + 14, y0 + padT + innerH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();
  }

  return {
    ctx,
    col,
    px,
    py,
    ranges,
    fsBase,
    fsBold,
    legendEntries: [],
    legendSeen: new Set()
  };
}

function drawISLMPC() {
  const engine = new GraphEngine('graph_canvas');
  const { w, h, ctx } = engine.setup();
  const col = engine.refreshColors();
  if (!ctx || !w || !h) return;

  const base = getNumber('g_il_aut', 115);
  const yn = getNumber('g_il_yn', 100);
  const pie = getNumber('g_il_pie', 2);
  const alpha = getNumber('g_il_alpha', 0.9);
  const lam = getNumber('g_il_lam', 0.25);
  const supply = getNumber('g_il_shock', 0);

  const isSlope = 8;
  const isIntercept = 10;
  const un = 5;
  const betaOkun = 0.45;
  const i0 = 4;
  const pit = 2;

  setValueLabel('v_il_aut', base, 0);
  setValueLabel('v_il_yn', yn, 0);
  setValueLabel('v_il_pie', pie, 2);
  setValueLabel('v_il_alpha', alpha, 1);
  setValueLabel('v_il_lam', lam, 2);
  setValueLabel('v_il_shock', supply, 2);

  const yStar = solveIslmpcEquilibrium(base, isSlope, isIntercept, yn, un, pie, alpha, betaOkun, i0, lam, pit, supply);
  const uStar = un - betaOkun * ((yStar - yn) / yn);
  const piStar = phillipsInflation(uStar, pie, un, alpha, supply);
  const iStar = isIntercept - (yStar - base) / isSlope;

  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  const fsBase = Math.max(11, Math.round(Math.min(w, h) * 0.018));
  const fsBold = Math.max(13, Math.round(Math.min(w, h) * 0.022));
  const plotTop = 48;
  const bridgeGap = 12;
  const bridgeH = 40;
  const lowerGap = 12;
  const bottomPad = 20;
  const upperH = Math.max(250, Math.round((h - plotTop - bottomPad - bridgeGap - bridgeH - lowerGap) / 2));
  const bridgeTop = plotTop + upperH + bridgeGap;
  const lowerTop = bridgeTop + bridgeH + lowerGap;
  const lowerH = Math.max(250, h - lowerTop - bottomPad);
  const leftGutter = Math.max(92, Math.round(w * 0.074));
  const legendStrip = Math.max(208, Math.round(w * 0.2));

  ctx.fillStyle = col.label;
  ctx.font = `600 ${Math.max(15, fsBold + 1)}px ${col.fontBody}`;
  ctx.textAlign = 'center';
  ctx.fillText('IS-LM-PC: oben (Y, i), unten (u, π)', w / 2, 24);

  ctx.strokeStyle = col.grid;
  ctx.globalAlpha = 0.55;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(leftGutter - 12, bridgeTop);
  ctx.lineTo(w - legendStrip + 24, bridgeTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(leftGutter - 12, bridgeTop + bridgeH);
  ctx.lineTo(w - legendStrip + 24, bridgeTop + bridgeH);
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = col.muted;
  ctx.font = `${Math.max(10, fsBase)}px ${col.fontBody}`;
  ctx.fillText('Kette: Okun → Phillips → Zinsregel', w / 2, bridgeTop + (bridgeH / 2) + 4);

  const xMinY = Math.min(yn * 0.88, yStar - 28, base - 25, 45);
  const xMaxY = Math.max(yn * 1.14, yStar + 32, base + 40, 170);
  const rUp = { xMin: xMinY, xMax: xMaxY, yMin: 0, yMax: 10 };
  const geomUp = { x0: 0, y0: plotTop, w, h: upperH, padL: leftGutter, padR: legendStrip, padT: 18, padB: 60 };
  const plotUp = buildSubplotPlot(ctx, col, geomUp, rUp, fsBase, fsBold, 'Y', 'i (%)');

  const isCurve = (Y) => isIntercept - (Y - base) / isSlope;
  drawCurve(plotUp, isCurve, { color: col.accent, label: 'IS-Kurve', canvasLabel: false, steps: 320 });
  drawHorizontal(plotUp, iStar, col.warn, 'Zinsregel', false);
  drawVertical(plotUp, yn, col.muted, 'Yₙ', false);
  drawPoint(plotUp, yStar, iStar, col.warn, null, 0, 0, false);

  const uMin = Math.min(2.8, uStar - 1.2, un - 2.5);
  const uMax = Math.max(9.2, uStar + 1.2, un + 2.5);
  const pc = (u) => phillipsInflation(u, pie, un, alpha, supply);
  const pcNoShock = (u) => phillipsInflation(u, pie, un, alpha, 0);
  const sampleU = Array.from({ length: 32 }, (_, index) => uMin + ((uMax - uMin) / 31) * index);
  const lowerValues = sampleU.flatMap((u) => {
    const values = [pc(u)];
    if (supply > 0.06) values.push(pcNoShock(u));
    return values;
  });
  const piMin = Math.min(-0.8, ...lowerValues, piStar) - 0.2;
  const piMax = Math.max(6.0, ...lowerValues, piStar) + 0.45;
  const rLo = { xMin: uMin, xMax: uMax, yMin: piMin, yMax: piMax };
  const geomLo = { x0: 0, y0: lowerTop, w, h: lowerH, padL: leftGutter, padR: legendStrip, padT: 18, padB: 60 };
  const plotLo = buildSubplotPlot(ctx, col, geomLo, rLo, fsBase, fsBold, 'u (%)', 'π (%)');

  if (supply > 0.06) {
    drawCurve(plotLo, pcNoShock, {
      color: col.muted,
      lineWidth: 2,
      dash: [7, 7],
      label: 'Referenz: kurzfristige PC bei s = 0',
      canvasLabel: false,
      steps: 360
    });
  }
  const pcLegend =
    supply > 0.06
      ? 'Kurzfristige Phillipskurve (πᵉ + s)'
      : 'Kurzfristige Phillipskurve bei πᵉ';
  drawCurve(plotLo, pc, { color: col.accent, label: pcLegend, canvasLabel: false, steps: 360 });
  drawVertical(plotLo, un, col.muted, 'uₙ (natürliche ALQ)', false);
  drawPoint(plotLo, uStar, piStar, col.warn, null, 0, 0, false);

  plotUp.engine = engine;
  plotUp.w = w;
  plotUp.legendMargin = 28;
  plotUp.legendTop = plotTop + 22;
  plotUp.legendEntries = [...plotUp.legendEntries, ...plotLo.legendEntries];

  const shockNote =
    supply > 0.05
      ? ` Schock s = +${supply.toFixed(2)} PP verschiebt die kurzfristige Phillipskurve nach oben; über die Zinsregel steigt i.`
      : '';

  updateInfo(
    plotUp,
    renderInfo(String.raw`i = i_0 + \lambda(\pi - \bar\pi),\quad u-u_n \approx -\frac{\beta}{Y_n}(Y-Y_n),\quad \pi \approx \pi^e + s - \alpha (u-u_n)`, [
      {
        title: 'Lesart',
        body: `Oben: IS-Kurve und Zinsregel bei Y ≈ ${yStar.toFixed(1)}, i ≈ ${iStar.toFixed(
          2
        )}. Unten: dieselbe Konstellation bei u ≈ ${uStar.toFixed(2)} %, π ≈ ${piStar.toFixed(
          2
        )} %. Die Legende sitzt rechts außerhalb des Kernfelds, damit beide Panels frei lesbar bleiben.`
      },
      {
        title: 'Kette',
        body: 'Okun: Y relativ zu Yₙ → u relativ zu uₙ. Phillipskurve: u → π. Zinsregel: π → i. IS: i → Y — wie in der Theorie zu diesem Kapitel.'
      },
      {
        title: 'Gekrümmte Phillips-Seite',
        body: 'Die untere kurzfristige Phillipskurve ist bewusst sanft gekrümmt gezeichnet: weiter fallend, um uₙ verankert und mit derselben Shift-Logik für πᵉ und s. Der markierte Punkt bleibt auf der gezeichneten Kurve.'
      },
      {
        title: 'Angebotsschock',
        body: `Regler „Angebotsschock“: untere Referenzkurve (s = 0) und verschobene kurzfristige PC.${shockNote}`
      }
    ])
  );
}

function drawPhillips() {
  const pie = getNumber('g_pc_pie', 2.0);
  const un = getNumber('g_pc_un', 5.0);
  const alpha = getNumber('g_pc_alpha', 0.9);
  const uCurrent = getNumber('g_pc_u', 4.25);
  const supply = getNumber('g_pc_supply', 0);
  setValueLabel('v_pc_pie', pie, 2);
  setValueLabel('v_pc_un', un, 2);
  setValueLabel('v_pc_alpha', alpha, 1);
  setValueLabel('v_pc_u', uCurrent, 2);
  setValueLabel('v_pc_supply', supply, 2);

  const curveBase = (u) => phillipsInflation(u, pie, un, alpha, 0);
  const curve = (u) => phillipsInflation(u, pie, un, alpha, supply);
  const shifted = (u) => phillipsInflation(u, pie + 1, un, alpha, supply);
  const piCurrent = curve(uCurrent);
  const xMin = Math.max(1.8, Math.min(2.4, un - 2.7, uCurrent - 1.1));
  const xMax = Math.max(9.2, un + 3.2, uCurrent + 1.25);
  const sampleU = Array.from({ length: 32 }, (_, index) => xMin + ((xMax - xMin) / 31) * index);
  const curveValues = sampleU.flatMap((u) => {
    const values = [curve(u)];
    if (supply > 0.06) {
      values.push(curveBase(u));
    } else {
      values.push(shifted(u));
    }
    return values;
  });

  const plot = setupPlot('u (%)', 'π (%)', {
    xMin,
    xMax,
    yMin: Math.min(-0.8, ...curveValues, piCurrent) - 0.2,
    yMax: Math.max(6.2, ...curveValues, piCurrent) + 0.45
  }, {
    pad: { left: 94, right: 228, top: 38, bottom: 68 },
    legendMargin: 28,
    legendTop: 58
  });
  if (!plot) return;

  if (supply > 0.06) {
    drawCurve(plot, curveBase, {
      color: plot.col.muted,
      lineWidth: 2,
      dash: [7, 7],
      label: 'Referenz: kurzfristige PC bei s = 0',
      canvasLabel: false,
      steps: 360
    });
    drawCurve(plot, curve, {
      color: plot.col.accent,
      lineWidth: 2.8,
      dash: [],
      label: 'Kurzfristige Phillipskurve (πᵉ + s)',
      canvasLabel: false,
      steps: 360
    });
  } else {
    drawCurve(plot, curve, {
      color: plot.col.accent,
      lineWidth: 2.8,
      label: 'Kurzfristige Phillipskurve bei πᵉ',
      canvasLabel: false,
      steps: 360
    });
    drawCurve(plot, shifted, {
      color: plot.col.warn,
      lineWidth: 2.2,
      dash: [9, 6],
      label: 'Kurzfristige Phillipskurve bei höherem πᵉ',
      canvasLabel: false,
      steps: 360
    });
  }

  drawVertical(plot, un, plot.col.muted, 'uₙ (natürliche ALQ)', false);

  drawPoint(plot, uCurrent, piCurrent, plot.col.warn, null, 0, 0, false);

  const supplyRow =
    supply > 0.05
      ? {
          title: 'Angebotsschock',
          body: `s ≈ +${supply.toFixed(
            2
          )} PP: die durchgezogene Kurve ist die kurzfristige Phillipskurve bei πᵉ + s; die gestrichelte Kurve zeigt dieselbe πᵉ ohne Schock (Vergleich im Skript-Stil).`
        }
      : {
          title: 'Angebotsschock',
          body: 'Mit dem Regler s > 0 erscheint eine Referenzkurve (s = 0) und die verschobene kurzfristige Phillipskurve — Verschiebung, nicht Bewegung entlang derselben Kurve.'
        };

  const eqPhillips = String.raw`\pi \approx \pi^e + s - \alpha (u - u_n)`;

  const expectRow =
    supply > 0.06
      ? null
      : {
          title: 'Erwartungen',
          body: 'Die gestrichelte zweite Kurve: bei s = 0, aber um 1 Prozentpunkt höherem πᵉ — Verschiebung der kurzfristigen Phillipskurve nach oben (Vergleich zur durchgezogenen Kurve).'
        };

  const rows = [
    {
      title: 'Lesart',
      body: `Markierter Punkt: u = ${uCurrent.toFixed(2)} %, π = ${piCurrent.toFixed(
        2
      )} %. Die senkrechte Linie ist uₙ (NAIRU / natürliche Arbeitslosenquote), die Legende sitzt rechts außerhalb des Kernplots.`
    },
    {
      title: 'Gekrümmte Kursfigur',
      body: 'Die kurzfristige Phillipskurve ist hier nicht als starre Gerade, sondern als sanft gekrümmte Lehrfigur gezeichnet: weiter fallend, um uₙ verankert und mit derselben Shift-Logik für πᵉ und s.'
    },
    supplyRow,
    expectRow,
    {
      title: 'Hinweis',
      body: 'Verschiebung (πᵉ, s) vs. Bewegung: ändert sich nur u bei gegebener Kurve, wandert der Punkt entlang derselben kurzfristigen Phillipskurve.'
    }
  ].filter(Boolean);

  updateInfo(plot, renderInfo(eqPhillips, rows));
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
    case 'islmpc':
      drawISLMPC();
      break;
    default:
      break;
  }
}

function noop() {}

export { initGraph, noop as drawBudget, noop as drawIndiff, noop as drawHausopt, noop as drawMonopol, noop as drawSlutsky };
