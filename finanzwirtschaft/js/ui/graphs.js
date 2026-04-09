import GraphEngine from './graphEngine.js';
import { renderMath } from '../utils/mathjax.js';

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

function drawLineThroughPoints(plot, points, color, label = null) {
  const { ctx, px, py, col, fsBase } = plot;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.8;
  ctx.beginPath();
  points.forEach((point, index) => {
    const cx = px(point.x);
    const cy = py(point.y);
    if (index === 0) ctx.moveTo(cx, cy);
    else ctx.lineTo(cx, cy);
  });
  ctx.stroke();

  points.forEach((point) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(px(point.x), py(point.y), 4.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = col.bg;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(px(point.x), py(point.y), 4.8, 0, Math.PI * 2);
    ctx.stroke();
  });

  if (label) {
    const last = points[points.length - 1];
    ctx.fillStyle = color;
    ctx.font = `600 ${fsBase}px ${col.fontMono}`;
    ctx.textAlign = 'left';
    ctx.fillText(label, px(last.x) + 8, py(last.y) - 8);
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
    ctx.fillText(label, px(ranges.xMax) - 170, py(y) - 8);
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

function drawLiquiditaetsplanung() {
  const a0 = getNumber('g_liq_a0', 180);
  const a1 = getNumber('g_liq_a1', 90);
  const r2 = getNumber('g_liq_r2', 110);
  const r3 = getNumber('g_liq_r3', 210);
  setValueLabel('v_liq_a0', a0, 0);
  setValueLabel('v_liq_a1', a1, 0);
  setValueLabel('v_liq_r2', r2, 0);
  setValueLabel('v_liq_r3', r3, 0);

  const points = [
    { x: 0, y: -a0 },
    { x: 1, y: -a0 - a1 },
    { x: 2, y: -a0 - a1 + r2 },
    { x: 3, y: -a0 - a1 + r2 + r3 }
  ];
  const minPoint = points.reduce((best, current) => (current.y < best.y ? current : best), points[0]);
  const maxAbs = Math.max(...points.map((p) => Math.abs(p.y)), 80);
  const plot = setupPlot('Zeitpunkt t', 'Kumulierter Saldo', {
    xMin: 0,
    xMax: 3,
    yMin: -Math.ceil(maxAbs / 20) * 20 - 20,
    yMax: Math.ceil(Math.max(points[points.length - 1].y, 40) / 20) * 20 + 20
  });
  if (!plot) return;

  drawHorizontal(plot, 0, plot.col.muted, 'Nulllinie');
  drawLineThroughPoints(plot, points, plot.col.accent, 'Kumulierter Saldo');
  drawPoint(plot, minPoint.x, minPoint.y, plot.col.warn, 'Maximaler Kapitalbedarf');

  updateInfo(renderInfo(
    `K_t = \\sum Ein_t - \\sum Aus_t`,
    [
      { label: 'Kapitalbedarf', body: `Der tiefste Punkt liegt aktuell in t = ${minPoint.x} bei ${Math.abs(minPoint.y).toFixed(0)} GE Finanzierungsbedarf.` },
      { label: 'Fristenlogik', body: 'Der Endsaldo kann positiv sein und trotzdem zwischendurch eine erhebliche Liquiditätslücke erzeugen.' },
      { label: 'Prüfungsfokus', body: 'Gesucht ist hier nicht nur der Endsaldo, sondern vor allem der maximale Zwischenbedarf.' }
    ]
  ));
}

function drawIntertemporaleWahl() {
  const y0 = getNumber('g_it_y0', 90);
  const y1 = getNumber('g_it_y1', 90);
  const iPct = getNumber('g_it_i', 10);
  const i = iPct / 100;
  const c0 = getNumber('g_it_c0', 70);
  const c0Max = y0 + y1 / (1 + i);
  const c0Choice = Math.min(c0, c0Max);
  const c1Choice = y1 + (1 + i) * (y0 - c0Choice);
  const yIntercept = y1 + (1 + i) * y0;
  const xIntercept = c0Max;
  setValueLabel('v_it_y0', y0, 0);
  setValueLabel('v_it_y1', y1, 0);
  setValueLabel('v_it_i', iPct, 0);
  setValueLabel('v_it_c0', c0Choice, 0);

  const plot = setupPlot('Heutiger Konsum c₀', 'Zukünftiger Konsum c₁', {
    xMin: 0,
    xMax: Math.max(120, Math.ceil(xIntercept / 20) * 20 + 20),
    yMin: 0,
    yMax: Math.max(120, Math.ceil(yIntercept / 20) * 20 + 20)
  });
  if (!plot) return;

  drawCurve(plot, (x) => y1 + (1 + i) * (y0 - x), {
    color: plot.col.accent,
    xStart: 0,
    xEnd: xIntercept,
    label: 'Budgetgerade',
    labelX: Math.max(10, xIntercept * 0.55)
  });
  drawPoint(plot, y0, y1, plot.col.muted, 'Ausstattung E');
  drawPoint(plot, c0Choice, c1Choice, plot.col.warn, 'Wahlpunkt A');

  const mode = c0Choice > y0 ? 'Kreditaufnahme' : c0Choice < y0 ? 'Sparen' : 'keine Intertemporalverschiebung';

  updateInfo(renderInfo(
    `c_1 = ${y1.toFixed(0)} + (1+${i.toFixed(2)})( ${y0.toFixed(0)} - c_0 )`,
    [
      { label: 'Ausstattung E', body: `Ohne Kapitalmarktentscheidung läge der Konsumpunkt bei E = (${y0.toFixed(0)}, ${y1.toFixed(0)}).` },
      { label: 'Wahlpunkt A', body: `Der aktuelle Punkt A = (${c0Choice.toFixed(0)}, ${c1Choice.toFixed(1)}) bedeutet aktuell: ${mode}.` },
      { label: 'Budgetlogik', body: `Die Steigung der Budgetgeraden beträgt −(1+i) = ${(-(1 + i)).toFixed(2)} und misst den Preis des Zeittauschs.` }
    ]
  ));
}

function findIRR(fn, minR = 0, maxR = 0.5, steps = 600) {
  let prevX = minR;
  let prevY = fn(prevX);
  for (let index = 1; index <= steps; index += 1) {
    const x = minR + ((maxR - minR) / steps) * index;
    const y = fn(x);
    if (prevY === 0) return prevX;
    if (y === 0) return x;
    if (prevY * y < 0) {
      const weight = Math.abs(prevY) / (Math.abs(prevY) + Math.abs(y));
      return prevX + (x - prevX) * weight;
    }
    prevX = x;
    prevY = y;
  }
  return null;
}

function drawIZFKapitalwertfunktion() {
  const a0 = getNumber('g_npv_a0', 180);
  const cf1 = getNumber('g_npv_cf1', 110);
  const cf2 = getNumber('g_npv_cf2', 120);
  const iPct = getNumber('g_npv_i', 8);
  const i = iPct / 100;
  setValueLabel('v_npv_a0', a0, 0);
  setValueLabel('v_npv_cf1', cf1, 0);
  setValueLabel('v_npv_cf2', cf2, 0);
  setValueLabel('v_npv_i', iPct, 0);

  const npv = (r) => -a0 + cf1 / (1 + r) + cf2 / ((1 + r) * (1 + r));
  const irr = findIRR(npv, 0, 0.5);
  const npvAtI = npv(i);
  const values = Array.from({ length: 61 }, (_, idx) => npv(idx / 200));
  const minY = Math.min(...values, npvAtI, 0);
  const maxY = Math.max(...values, npvAtI, 0);
  const plot = setupPlot('Zinssatz r (in %)', 'Kapitalwert K(r)', {
    xMin: 0,
    xMax: 30,
    yMin: Math.floor((minY - 10) / 10) * 10,
    yMax: Math.ceil((maxY + 10) / 10) * 10
  });
  if (!plot) return;

  drawHorizontal(plot, 0, plot.col.muted, 'Nulllinie');
  drawCurve(plot, (x) => npv(x / 100), {
    color: plot.col.accent,
    xStart: 0,
    xEnd: 30,
    label: 'Kapitalwertfunktion',
    labelX: 11
  });
  drawVertical(plot, iPct, plot.col.warn, 'Kalkulationszins i');
  drawPoint(plot, iPct, npvAtI, plot.col.warn, 'Wert bei i');
  if (irr !== null && irr <= 0.30) {
    drawVertical(plot, irr * 100, plot.col.accent2, 'IZF');
    drawPoint(plot, irr * 100, 0, plot.col.accent2, 'Nullstelle');
  }

  updateInfo(renderInfo(
    `K(r) = -${a0.toFixed(0)} + \\frac{${cf1.toFixed(0)}}{1+r} + \\frac{${cf2.toFixed(0)}}{(1+r)^2}`,
    [
      { label: 'Kapitalwert bei i', body: `Beim aktuellen Kalkulationszins von ${iPct.toFixed(0)} % beträgt der Kapitalwert ${npvAtI.toFixed(2)}.` },
      { label: 'Interner Zinsfuß', body: irr !== null ? `Der IZF liegt näherungsweise bei ${(irr * 100).toFixed(2)} %.` : 'Im gewählten Bereich entsteht keine eindeutige Nullstelle.' },
      { label: 'Entscheidungslogik', body: 'Liegt der Kalkulationszins unter dem IZF, ist der Kapitalwert positiv; liegt er darüber, kippt das Urteil.' }
    ]
  ));
}

function drawKapitalstruktur() {
  const good = getNumber('g_lev_good', 12);
  const bad = getNumber('g_lev_bad', 4);
  const rd = getNumber('g_lev_rd', 6);
  const de = getNumber('g_lev_de', 1.0);
  setValueLabel('v_lev_good', good, 0);
  setValueLabel('v_lev_bad', bad, 0);
  setValueLabel('v_lev_rd', rd, 1);
  setValueLabel('v_lev_de', de, 1);

  const goodFn = (x) => good + x * (good - rd);
  const badFn = (x) => bad + x * (bad - rd);
  const yCandidates = [goodFn(0), goodFn(2.5), badFn(0), badFn(2.5), rd];
  const plot = setupPlot('Verschuldungsgrad D/E', 'Eigenkapitalrendite r_E (in %)', {
    xMin: 0,
    xMax: 2.5,
    yMin: Math.floor((Math.min(...yCandidates) - 4) / 2) * 2,
    yMax: Math.ceil((Math.max(...yCandidates) + 4) / 2) * 2
  });
  if (!plot) return;

  drawHorizontal(plot, rd, plot.col.muted, 'Fremdkapitalzins');
  drawCurve(plot, goodFn, { color: plot.col.accent, label: 'Gute Gesamtkapitalrendite', labelX: 1.15 });
  drawCurve(plot, badFn, { color: plot.col.warn, label: 'Schwache Gesamtkapitalrendite', labelX: 1.0, labelDy: 14 });
  drawPoint(plot, de, goodFn(de), plot.col.accent, 'Szenario A');
  drawPoint(plot, de, badFn(de), plot.col.warn, 'Szenario B', 10, 16);

  updateInfo(renderInfo(
    `r_E = r_U + \\frac{D}{E}(r_U-r_D)`,
    [
      { label: 'Gutes Szenario', body: `Bei r_U = ${good.toFixed(1)} % und D/E = ${de.toFixed(1)} steigt r_E auf ${goodFn(de).toFixed(2)} %.` },
      { label: 'Schwaches Szenario', body: `Bei r_U = ${bad.toFixed(1)} % und demselben Hebel fällt r_E auf ${badFn(de).toFixed(2)} %.` },
      { label: 'Leverage-Logik', body: 'Mehr Fremdkapital verstärkt die Rendite des Eigenkapitals nur dann positiv, wenn die Gesamtkapitalrendite über den Fremdkapitalkosten liegt.' }
    ]
  ));
}

function initGraph(conceptId) {
  switch (conceptId) {
    case 'liquiditaetsplanung':
      drawLiquiditaetsplanung();
      break;
    case 'intertemporale_wahl':
      drawIntertemporaleWahl();
      break;
    case 'izf_kapitalwertfunktion':
      drawIZFKapitalwertfunktion();
      break;
    case 'wacc_leverage':
      drawKapitalstruktur();
      break;
    default:
      break;
  }
}

function noop() {}

export { initGraph, noop as drawBudget, noop as drawIndiff, noop as drawHausopt, noop as drawMonopol, noop as drawSlutsky };
