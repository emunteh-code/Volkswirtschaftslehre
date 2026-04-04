import GraphEngine from './graphEngine.js';

function getNumber(id, fallback = 0) {
  const input = document.getElementById(id);
  if (!input) return fallback;
  const value = Number.parseFloat(input.value);
  return Number.isFinite(value) ? value : fallback;
}

function setValueLabel(id, value, digits = 2, formatter = null) {
  const label = document.getElementById(id);
  if (!label) return;
  label.textContent = formatter ? formatter(value) : Number(value).toFixed(digits);
}

function setupPlot(xLabel, yLabel, ranges) {
  const engine = new GraphEngine('graph_canvas');
  const { w, h, ctx } = engine.setup();
  const col = engine.refreshColors();
  if (!ctx || !w || !h) return null;

  const pad = { left: 76, right: 28, top: 28, bottom: 58 };
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
    lineWidth = 2.7,
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
    const lx = labelX ?? (xStart + xEnd) / 2;
    const ly = fn(lx);
    if (Number.isFinite(ly) && ly >= plot.ranges.yMin && ly <= plot.ranges.yMax) {
      drawTag(plot, lx, ly, label, color, 10, labelDy);
    }
  }
}

function drawHorizontal(plot, y, color, label) {
  const { ctx, px, py, ranges } = plot;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.1;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.moveTo(px(ranges.xMin), py(y));
  ctx.lineTo(px(ranges.xMax), py(y));
  ctx.stroke();
  ctx.setLineDash([]);
  if (label) drawTag(plot, ranges.xMax, y, label, color, -140, -10);
}

function drawVertical(plot, x, color, label) {
  const { ctx, px, py, ranges } = plot;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.9;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.moveTo(px(x), py(ranges.yMin));
  ctx.lineTo(px(x), py(ranges.yMax));
  ctx.stroke();
  ctx.setLineDash([]);
  if (label) drawTag(plot, x, ranges.yMax, label, color, 10, 18);
}

function drawPoint(plot, x, y, color, label, dx = 10, dy = -10) {
  const { ctx, px, py, col } = plot;
  const cx = px(x);
  const cy = py(y);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(cx, cy, 5.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = col.bg;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, 5.4, 0, Math.PI * 2);
  ctx.stroke();
  if (label) drawTag(plot, x, y, label, color, dx, dy);
}

function drawTag(plot, x, y, text, color, dx = 8, dy = -8) {
  const { ctx, px, py, col, fsBase } = plot;
  const cx = px(x) + dx;
  const cy = py(y) + dy;
  ctx.font = `600 ${fsBase}px ${col.fontMono}`;
  const width = ctx.measureText(text).width + 12;
  const height = fsBase + 8;
  ctx.fillStyle = `${color}20`;
  ctx.strokeStyle = `${color}66`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(cx - 4, cy - height + 4, width, height, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.textAlign = 'left';
  ctx.fillText(text, cx + 2, cy - 4);
}

function drawLegend(plot, items) {
  const { ctx, col, w, fsBase } = plot;
  const x = w - 252;
  const y = 20;
  const lineH = fsBase + 8;
  const boxH = items.length * lineH + 16;
  ctx.fillStyle = `${col.card}e6`;
  ctx.strokeStyle = `${col.grid}`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, y, 228, boxH, 12);
  ctx.fill();
  ctx.stroke();

  items.forEach((item, index) => {
    const rowY = y + 20 + index * lineH;
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 2.4;
    ctx.setLineDash(item.dash || []);
    ctx.beginPath();
    ctx.moveTo(x + 12, rowY - 5);
    ctx.lineTo(x + 42, rowY - 5);
    ctx.stroke();
    ctx.setLineDash([]);
    if (item.point) {
      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.arc(x + 27, rowY - 5, 4.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = col.text;
    ctx.font = `${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText(item.label, x + 50, rowY);
  });
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

function updateInfo(html) {
  const info = document.getElementById('graph_info');
  if (info) info.innerHTML = html;
}

function drawRicardo() {
  const homeOc = getNumber('g_iwb_home_oc', 0.8);
  const foreignOc = getNumber('g_iwb_foreign_oc', 1.6);
  setValueLabel('v_iwb_home_oc', homeOc, 1);
  setValueLabel('v_iwb_foreign_oc', foreignOc, 1);

  const labor = 100;
  const homeX = labor * homeOc;
  const foreignX = labor * foreignOc;
  const xMax = Math.max(homeX, foreignX) * 1.08;
  const plot = setupPlot('Gut X', 'Gut Y', { xMin: 0, xMax, yMin: 0, yMax: 110 });
  if (!plot) return;

  drawCurve(plot, (x) => labor - x / homeOc, {
    color: plot.col.accent,
    xEnd: homeX,
    label: 'Home-PPF',
    labelX: homeX * 0.63,
    labelDy: -12
  });
  drawCurve(plot, (x) => labor - x / foreignOc, {
    color: plot.col.accent2,
    xEnd: foreignX,
    dash: [8, 5],
    label: 'Foreign-PPF',
    labelX: foreignX * 0.72,
    labelDy: 18
  });

  const homeExportsX = homeOc < foreignOc;
  drawLegend(plot, [
    { label: 'Home-PPF', color: plot.col.accent },
    { label: 'Foreign-PPF', color: plot.col.accent2, dash: [8, 5] }
  ]);

  updateInfo(renderInfo(
    `OK_X^H = ${homeOc.toFixed(1)},\quad OK_X^F = ${foreignOc.toFixed(1)}`,
    [
      { label: 'Steigung', body: 'Die Steigung der jeweiligen PPF misst die Opportunitätskosten von Gut X in Einheiten von Gut Y.' },
      { label: 'Handelsrichtung', body: homeExportsX ? 'Home hat die geringeren Opportunitätskosten von X und exportiert daher X.' : homeOc > foreignOc ? 'Foreign hat die geringeren Opportunitätskosten von X und exportiert daher X.' : 'Bei identischen Opportunitätskosten entsteht aus Ricardo kein klarer komparativer Vorteil.' },
      { label: 'Prüfungslogik', body: 'Erst Opportunitätskosten vergleichen, dann Spezialisierung und Handelsgewinn begründen.' }
    ]
  ));
}

function drawTariff() {
  const pw = getNumber('g_iwb_pw', 7);
  const tariff = getNumber('g_iwb_tariff', 2);
  setValueLabel('v_iwb_pw', pw, 1);
  setValueLabel('v_iwb_tariff', tariff, 1);

  const demand = (q) => Math.max(0, (120 - q) / 6);
  const supply = (q) => Math.max(0, (q - 10) / 5);
  const pTariff = pw + tariff;
  const qdFree = Math.max(0, 120 - 6 * pw);
  const qsFree = Math.max(0, 10 + 5 * pw);
  const qdTariff = Math.max(0, 120 - 6 * pTariff);
  const qsTariff = Math.max(0, 10 + 5 * pTariff);
  const importsFree = Math.max(0, qdFree - qsFree);
  const importsTariff = Math.max(0, qdTariff - qsTariff);

  const plot = setupPlot('Menge', 'Preis', { xMin: 0, xMax: 125, yMin: 0, yMax: 20 });
  if (!plot) return;

  drawCurve(plot, demand, { color: plot.col.accent, xEnd: 120, label: 'Nachfragekurve', labelX: 76, labelDy: -14 });
  drawCurve(plot, supply, { color: plot.col.accent2, xEnd: 110, label: 'Angebotskurve', labelX: 82, labelDy: 20 });
  drawHorizontal(plot, pw, plot.col.muted, 'Weltmarktpreis');
  drawHorizontal(plot, pTariff, plot.col.warn, 'Zollpreis im Inland');
  drawPoint(plot, qdFree, pw, plot.col.muted, 'Freihandel: Konsum');
  drawPoint(plot, qsFree, pw, plot.col.muted, 'Freihandel: Produktion', 10, 16);
  drawPoint(plot, qdTariff, pTariff, plot.col.warn, 'Mit Zoll: Konsum');
  drawPoint(plot, qsTariff, pTariff, plot.col.warn, 'Mit Zoll: Produktion', 10, 16);

  drawLegend(plot, [
    { label: 'Nachfragekurve', color: plot.col.accent },
    { label: 'Angebotskurve', color: plot.col.accent2 },
    { label: 'Zollpreis im Inland', color: plot.col.warn },
    { label: 'Freihandelspunkte', color: plot.col.muted, point: true }
  ]);

  updateInfo(renderInfo(
    `P_{in} = P_w + t = ${pw.toFixed(1)} + ${tariff.toFixed(1)} = ${pTariff.toFixed(1)}`,
    [
      { label: 'Preis', body: `Der Zoll hebt den Inlandspreis von ${pw.toFixed(1)} auf ${pTariff.toFixed(1)}, während der Weltmarktpreis im kleinen Land unverändert bleibt.` },
      { label: 'Importe', body: `Die Importmenge schrumpft von ${importsFree.toFixed(1)} auf ${importsTariff.toFixed(1)}, weil Konsum fällt und heimische Produktion steigt.` },
      { label: 'Wohlfahrt', body: 'Konsumenten verlieren, Produzenten und Staat gewinnen; netto bleibt im kleinen Land ein Verzerrungsverlust.' }
    ]
  ));
}

function drawUIP() {
  const iHome = getNumber('g_iwb_i_home', 4);
  const iForeign = getNumber('g_iwb_i_foreign', 2);
  const eExpected = getNumber('g_iwb_e_exp', 1.2);
  setValueLabel('v_iwb_i_home', iHome, 1);
  setValueLabel('v_iwb_i_foreign', iForeign, 1);
  setValueLabel('v_iwb_e_exp', eExpected, 2);

  const foreignReturn = (e) => iForeign + ((eExpected - e) / e) * 100;
  const equilibrium = eExpected * ((1 + iForeign / 100) / (1 + iHome / 100));
  const plot = setupPlot('heutiger Wechselkurs E', 'erwarteter Ertrag (%)', {
    xMin: 0.7,
    xMax: 2.0,
    yMin: -8,
    yMax: 12
  });
  if (!plot) return;

  drawCurve(plot, foreignReturn, {
    color: plot.col.accent,
    xStart: 0.72,
    xEnd: 1.95,
    label: 'Auslandsertrag',
    labelX: 1.55,
    labelDy: -12
  });
  drawHorizontal(plot, iHome, plot.col.accent2, 'Inlandsertrag');
  if (equilibrium >= 0.7 && equilibrium <= 2.0) {
    drawVertical(plot, equilibrium, plot.col.warn, 'UIP-Gleichgewicht');
    drawPoint(plot, equilibrium, iHome, plot.col.warn, 'Gleichgewichtspunkt A');
  }

  drawLegend(plot, [
    { label: 'Auslandsertrag', color: plot.col.accent },
    { label: 'Inlandsertrag', color: plot.col.accent2 },
    { label: 'UIP-Gleichgewicht', color: plot.col.warn, point: true }
  ]);

  updateInfo(renderInfo(
    `i = ${iHome.toFixed(1)}\\%,\quad i^* = ${iForeign.toFixed(1)}\\%,\quad E^e = ${eExpected.toFixed(2)}`,
    [
      { label: 'Ertragsvergleich', body: 'Die fallende Auslandsertragskurve zeigt: Je höher der heutige Kurs E, desto geringer ist die erwartete spätere Abwertung des Auslands und damit der Auslandsertrag.' },
      { label: 'Gleichgewicht', body: `Beim markierten Punkt A gilt UIP. Der heutige Gleichgewichtskurs liegt bei ungefähr ${equilibrium.toFixed(3)}.` },
      { label: 'Lesart', body: 'UIP verbindet Zinsen mit erwarteter Wechselkursänderung; Preisniveaus spielen hier noch keine direkte Rolle.' }
    ]
  ));
}

function drawMoney() {
  const muHome = getNumber('g_iwb_mu_home', 6);
  const muForeign = getNumber('g_iwb_mu_foreign', 3);
  const growthGap = getNumber('g_iwb_growth_gap', 0);
  setValueLabel('v_iwb_mu_home', muHome, 1);
  setValueLabel('v_iwb_mu_foreign', muForeign, 1);
  setValueLabel('v_iwb_growth_gap', growthGap, 1);

  const gForeign = 2;
  const gHome = 2 + growthGap;
  const piHome = muHome - gHome;
  const piForeign = muForeign - gForeign;
  const depreciation = piHome - piForeign;

  const home = [];
  const foreign = [];
  const exchange = [];
  let pHome = 100;
  let pForeign = 100;
  let e = 100;
  for (let t = 0; t <= 5; t += 1) {
    if (t > 0) {
      pHome *= 1 + piHome / 100;
      pForeign *= 1 + piForeign / 100;
      e *= 1 + depreciation / 100;
    }
    home.push({ x: t, y: pHome });
    foreign.push({ x: t, y: pForeign });
    exchange.push({ x: t, y: e });
  }

  const maxY = Math.max(...home.map((p) => p.y), ...foreign.map((p) => p.y), ...exchange.map((p) => p.y)) + 6;
  const minY = Math.min(...home.map((p) => p.y), ...foreign.map((p) => p.y), ...exchange.map((p) => p.y)) - 6;
  const plot = setupPlot('Periode', 'Index (t₀ = 100)', { xMin: 0, xMax: 5, yMin: minY, yMax: maxY });
  if (!plot) return;

  drawCurve(plot, (t) => interpolateLine(home, t), { color: plot.col.accent, xEnd: 5, label: 'Preisniveau Home', labelX: 4.2, labelDy: -14 });
  drawCurve(plot, (t) => interpolateLine(foreign, t), { color: plot.col.accent2, xEnd: 5, label: 'Preisniveau Foreign', labelX: 4.2, labelDy: 18 });
  drawCurve(plot, (t) => interpolateLine(exchange, t), { color: plot.col.warn, xEnd: 5, dash: [8, 5], label: 'Nominaler Wechselkurs', labelX: 3.4, labelDy: -18 });

  drawLegend(plot, [
    { label: 'Preisniveau Home', color: plot.col.accent },
    { label: 'Preisniveau Foreign', color: plot.col.accent2 },
    { label: 'Nominaler Wechselkurs', color: plot.col.warn, dash: [8, 5] }
  ]);

  updateInfo(renderInfo(
    `\\pi_H \\approx ${piHome.toFixed(1)}\\%,\quad \\pi_F \\approx ${piForeign.toFixed(1)}\\%,\quad \\Delta E/E \\approx ${depreciation.toFixed(1)}\\%`,
    [
      { label: 'Langfristlogik', body: 'Höheres Geldmengenwachstum in Home hebt langfristig die Inflation, sofern reales Wachstum und Geldnachfrage stabil bleiben.' },
      { label: 'PPP-Link', body: `Mit einer Inflationsdifferenz von ${(piHome - piForeign).toFixed(1)} Prozentpunkten ergibt sich eine entsprechend stärkere nominale Abwertung von Home.` },
      { label: 'Horizont', body: 'Die Grafik beschreibt Trendpfade über Zeit, nicht den kurzfristigen Sprung der Finanzmärkte.' }
    ]
  ));
}

function interpolateLine(points, x) {
  if (x <= points[0].x) return points[0].y;
  if (x >= points[points.length - 1].x) return points[points.length - 1].y;
  const lower = Math.floor(x);
  const upper = Math.ceil(x);
  if (lower === upper) return points[lower].y;
  const weight = x - lower;
  return points[lower].y * (1 - weight) + points[upper].y * weight;
}

function drawOvershooting() {
  const eLong = getNumber('g_iwb_e_long', 1.2);
  const overshootPct = getNumber('g_iwb_overshoot', 18);
  setValueLabel('v_iwb_e_long', eLong, 2);
  setValueLabel('v_iwb_overshoot', overshootPct, 0);

  const eShort = eLong * (1 + overshootPct / 100);
  const path = Array.from({ length: 9 }, (_, index) => {
    if (index === 0) return { x: 0, y: 1.0 };
    const decay = Math.exp(-0.5 * (index - 1));
    return { x: index, y: eLong + (eShort - eLong) * decay };
  });

  const plot = setupPlot('Zeit', 'Wechselkurs E', {
    xMin: 0,
    xMax: 8,
    yMin: Math.min(0.95, eLong - 0.08),
    yMax: Math.max(eShort + 0.08, 1.35)
  });
  if (!plot) return;

  drawCurve(plot, (t) => interpolateLine(path, t), {
    color: plot.col.accent,
    xEnd: 8,
    label: 'Wechselkurspfad',
    labelX: 4.4,
    labelDy: -16
  });
  drawHorizontal(plot, eLong, plot.col.accent2, 'Langfristiger Kurs');
  drawPoint(plot, 1, eShort, plot.col.warn, 'Overshooting-Punkt A');

  drawLegend(plot, [
    { label: 'Wechselkurspfad', color: plot.col.accent },
    { label: 'Langfristiger Kurs', color: plot.col.accent2 },
    { label: 'Overshoot-Punkt A', color: plot.col.warn, point: true }
  ]);

  updateInfo(renderInfo(
    `E_{lang} = ${eLong.toFixed(2)},\quad E_{kurz} = ${eShort.toFixed(2)}`,
    [
      { label: 'Kurzfristig', body: `Der Kurs springt am Punkt A sofort auf ${eShort.toFixed(2)} und liegt damit über dem langfristigen Zielwert.` },
      { label: 'Rücklauf', body: `Von dort kehrt er schrittweise zum langfristigen Niveau ${eLong.toFixed(2)} zurück, sobald Preise und Erwartungen sich anpassen.` },
      { label: 'Modellkern', body: 'Overshooting ist die Kombination aus sofortiger Finanzmarktreaktion, niedrigem Kurzfristzins und trägen Güterpreisen.' }
    ]
  ));
}

function drawTrilemma() {
  const regime = Math.round(getNumber('g_iwb_regime', 0));
  const labels = [
    {
      title: 'Fixkurs + Kapitalmobilität',
      sacrifice: 'Geldpolitische Autonomie',
      note: 'Die Zinspolitik muss dem Ausland folgen.',
      edge: 0
    },
    {
      title: 'Fixkurs + Geldpolitik',
      sacrifice: 'Freie Kapitalmobilität',
      note: 'Kapitalverkehrskontrollen halten den Zins unabhängig.',
      edge: 1
    },
    {
      title: 'Kapitalmobilität + Geldpolitik',
      sacrifice: 'Fester Wechselkurs',
      note: 'Der Wechselkurs muss flexibel reagieren.',
      edge: 2
    }
  ];
  const current = labels[Math.max(0, Math.min(labels.length - 1, regime))];
  setValueLabel('v_iwb_regime', regime, 0, () => current.title);

  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(520, Math.round(canvas.clientWidth || 800));
  const height = Math.max(360, Math.round(canvas.clientHeight || 500));
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const s = getComputedStyle(document.body);
  const col = {
    bg: s.getPropertyValue('--bg').trim(),
    text: s.getPropertyValue('--text').trim(),
    muted: s.getPropertyValue('--muted').trim(),
    accent: s.getPropertyValue('--accent').trim(),
    accent2: s.getPropertyValue('--accent2').trim(),
    warn: s.getPropertyValue('--accent3').trim(),
    card: s.getPropertyValue('--card').trim(),
    border: s.getPropertyValue('--border').trim(),
    fontBody: s.getPropertyValue('--font-body').trim() || 'system-ui, sans-serif',
    fontMono: s.getPropertyValue('--font-mono').trim() || 'system-ui, sans-serif'
  };

  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, width, height);

  const top = { x: width / 2, y: 72 };
  const left = { x: 150, y: height - 96 };
  const right = { x: width - 150, y: height - 96 };
  const edges = [
    [top, left],
    [top, right],
    [left, right]
  ];
  const activeEdge = edges[current.edge];

  ctx.strokeStyle = col.border;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(top.x, top.y);
  ctx.lineTo(left.x, left.y);
  ctx.lineTo(right.x, right.y);
  ctx.closePath();
  ctx.stroke();

  ctx.strokeStyle = col.accent;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(activeEdge[0].x, activeEdge[0].y);
  ctx.lineTo(activeEdge[1].x, activeEdge[1].y);
  ctx.stroke();

  const nodeInfo = [
    { point: top, label: 'Fester Wechselkurs', color: current.title.includes('Fixkurs') ? col.accent : col.muted },
    { point: left, label: 'Kapitalmobilität', color: current.title.includes('Kapitalmobilität') ? col.accent : col.muted },
    { point: right, label: 'Geldpolitische Autonomie', color: current.title.includes('Geldpolitik') ? col.accent : col.muted }
  ];

  nodeInfo.forEach(({ point, label, color }) => {
    ctx.fillStyle = `${color}22`;
    ctx.strokeStyle = `${color}`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = col.text;
    ctx.font = `600 15px ${col.fontBody}`;
    ctx.textAlign = 'center';
    ctx.fillText(label, point.x, point.y + (point === top ? -24 : 34));
  });

  ctx.fillStyle = `${col.warn}18`;
  ctx.strokeStyle = `${col.warn}66`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(width / 2 - 150, height / 2 - 34, 300, 68, 14);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = col.warn;
  ctx.font = `700 16px ${col.fontBody}`;
  ctx.textAlign = 'center';
  ctx.fillText(`Nicht gleichzeitig erreichbar: ${current.sacrifice}`, width / 2, height / 2 - 4);
  ctx.fillStyle = col.text;
  ctx.font = `14px ${col.fontBody}`;
  ctx.fillText(current.note, width / 2, height / 2 + 20);

  updateInfo(renderInfo(
    current.title,
    [
      { label: 'Gewählte Kombination', body: `Die aktive Kante markiert die Kombination „${current.title}“.` },
      { label: 'Opfer', body: `${current.sacrifice} kann in diesem Regime nicht vollständig gleichzeitig gehalten werden.` },
      { label: 'Lesart', body: current.note }
    ]
  ));
}

export function initGraph(conceptId) {
  switch (conceptId) {
    case 'ricardo':
      drawRicardo();
      break;
    case 'tarifmodell':
      drawTariff();
      break;
    case 'paritaeten':
      drawUIP();
      break;
    case 'monetaerer_ansatz':
      drawMoney();
      break;
    case 'overshooting':
      drawOvershooting();
      break;
    case 'trilemma':
      drawTrilemma();
      break;
    default:
      updateInfo('');
  }
}

