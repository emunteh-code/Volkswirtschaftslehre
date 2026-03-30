// ============================================================
// GRAPH DRAW FUNCTIONS — Makroökonomik II
// Subject-correct interactive macro graphs for the portal
// ============================================================

import GraphEngine from "./graphEngine.js";

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
    labelX
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
      ctx.fillStyle = color;
      ctx.font = `600 ${plot.fsBase}px ${plot.col.fontMono}`;
      ctx.textAlign = "left";
      ctx.fillText(label, px(x) + 8, py(y) - 8);
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
    ctx.textAlign = "left";
    ctx.fillText(label, px(ranges.xMax) - 72, py(y) - 8);
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
    ctx.textAlign = "left";
    ctx.fillText(label, px(x) + 8, py(ranges.yMax) + 14);
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
    ctx.fillStyle = color;
    ctx.font = `600 ${fsBase}px ${col.fontMono}`;
    ctx.textAlign = "left";
    ctx.fillText(label, cx + 10, cy - 8);
  }
}

function updateInfo(html) {
  const info = document.getElementById("graph_info");
  if (info) info.innerHTML = html;
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
    label: "ε(E)",
    labelX: 1.22
  });

  if (ePpp >= plot.ranges.xMin && ePpp <= plot.ranges.xMax) {
    drawVertical(plot, ePpp, plot.col.accent2, "E_PPP");
  }

  drawPoint(plot, eNom, currentEpsilon, plot.col.warn, `ε = ${currentEpsilon.toFixed(2)}`);

  const classification = currentEpsilon > 1.02
    ? "reale Aufwertung des Inlands"
    : currentEpsilon < 0.98
      ? "reale Abwertung des Inlands"
      : "nahe an Kaufkraftparität";

  updateInfo(`
    <strong>Interpretation:</strong> Die Grafik nutzt die Kursformel <strong>ε = E·P / P*</strong>.
    Bei E = <strong>${eNom.toFixed(2)}</strong>, P = <strong>${pDom.toFixed(0)}</strong> und P* = <strong>${pFor.toFixed(0)}</strong>
    ergibt sich <strong>ε = ${currentEpsilon.toFixed(2)}</strong>. Das entspricht aktuell einer <strong>${classification}</strong>.
    Die PPP-Linie liegt bei ε = 1; der dazugehörige Paritätskurs wäre <strong>E = ${ePpp.toFixed(2)}</strong>.
  `);
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
    label: "UZP",
    labelX: 5.8
  });
  drawVertical(plot, iDom, plot.col.muted, "aktuelles i");
  drawPoint(plot, iDom, eqCurrent, plot.col.warn, `E = ${eqCurrent.toFixed(2)}`);

  const expectedRate = ((eFuture - eqCurrent) / eqCurrent) * 100;
  const expectationText = expectedRate < -0.05
    ? `eine erwartete Abwertung um ${Math.abs(expectedRate).toFixed(1)}%`
    : expectedRate > 0.05
      ? `eine erwartete Aufwertung um ${expectedRate.toFixed(1)}%`
      : "nahezu keine erwartete Wechselkursänderung";

  updateInfo(`
    <strong>Interpretation:</strong> Die Grafik nutzt die exakte UZP-Form <strong>E = ((1+i)/(1+i*))·E^e</strong>.
    Bei i = <strong>${iDom.toFixed(2)}%</strong>, i* = <strong>${iFor.toFixed(2)}%</strong> und E^e = <strong>${eFuture.toFixed(2)}</strong>
    ergibt sich aktuell <strong>E = ${eqCurrent.toFixed(3)}</strong>. Vom heutigen Kurs aus impliziert das <strong>${expectationText}</strong>,
    damit der Zinsvorteil bzw. -nachteil im Gleichgewicht kompensiert wird.
  `);
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
    label: "NX(ε)",
    labelX: 1.46
  });
  drawVertical(plot, eps, plot.col.accent2, "aktuelles ε");
  drawPoint(plot, eps, currentNx, plot.col.warn, `NX = ${currentNx.toFixed(0)}`);

  updateInfo(`
    <strong>Interpretation:</strong> Bei höherem realem Wechselkurs fällt NX. 
    Höhere Auslandsnachfrage (${foreign.toFixed(1)}) verschiebt die Kurve nach oben, höhere Inlandsnachfrage (${domestic.toFixed(1)}) nach unten.
    Aktuell liegt NX bei <strong>${currentNx.toFixed(0)}</strong> und damit ${currentNx >= 0 ? "im Überschuss" : "im Defizit"}.
  `);
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
    label: "IS alt",
    labelX: 102
  });
  drawCurve(plot, isShifted, {
    color: plot.col.accent,
    label: "IS neu",
    labelX: 90
  });
  drawHorizontal(plot, zp, plot.col.accent2, "ZP");
  drawPoint(plot, Math.max(plot.ranges.xMin, Math.min(plot.ranges.xMax, equilibriumY)), zp, plot.col.warn, "Gleichgewicht");

  updateInfo(`
    <strong>Interpretation:</strong> Der Fiskalimpuls (${fiscal.toFixed(1)}) verschiebt die IS-Kurve nach rechts. 
    Die ZP-Linie liegt bei <strong>i = ${(zp).toFixed(1)}%</strong> (${iWorld.toFixed(1)}% Weltzins + ${risk.toFixed(1)} PP Risikoprämie).
    Das resultierende Gleichgewicht liegt bei <strong>Y ≈ ${equilibriumY.toFixed(1)}</strong>. Ein höherer Weltzins oder eine höhere Risikoprämie drücken das MF-Gleichgewichtseinkommen nach links.
  `);
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
  updateInfo(`
    <strong>Interpretation:</strong> Bei r = ${(r * 100).toFixed(1)}%, g = ${(g * 100).toFixed(1)}% und Primärsaldo = ${(ps * 100).toFixed(1)}% entwickelt sich die Schuldenquote von <strong>${b0.toFixed(0)}%</strong> auf <strong>${last.toFixed(1)}%</strong> nach 10 Perioden.
    Zur unmittelbaren Stabilisierung der Startquote wäre ein Primärüberschuss von rund <strong>${stabilizingPs.toFixed(1)}%</strong> des BIP erforderlich.
  `);
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
    label: "r* + π",
    labelX: 4.5
  });
  drawCurve(plot, taylorLine, {
    color: plot.col.accent,
    label: "Taylor-Regel",
    labelX: 3.8
  });
  drawVertical(plot, piStar, plot.col.accent2, "π*");
  drawPoint(plot, piCurrent, currentI, plot.col.warn, `i = ${currentI.toFixed(1)}%`);

  updateInfo(`
    <strong>Interpretation:</strong> Die Grafik veranschaulicht die Regel
    <strong>i = r* + π + a(π - π*) + b(y - yₙ)</strong>.
    Bei r* = ${rStar.toFixed(1)}%, π* = ${piStar.toFixed(1)}%, a = ${a.toFixed(1)} und einer Outputlücke von <strong>${outputGap.toFixed(2)}</strong>
    empfiehlt die Regel bei aktueller Inflation von <strong>${piCurrent.toFixed(1)}%</strong> einen Leitzins von <strong>${currentI.toFixed(1)}%</strong>.
  `);
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
    label: "sf(k)",
    labelX: 18
  });
  drawCurve(plot, breakLine, {
    color: plot.col.accent2,
    label: "(δ+n)k",
    labelX: 17
  });
  if (kStar >= plot.ranges.xMin && kStar <= plot.ranges.xMax) {
    drawPoint(plot, kStar, investment(kStar), plot.col.warn, `k* = ${kStar.toFixed(1)}`);
  }

  updateInfo(`
    <strong>Interpretation:</strong> Die Investitionskurve <strong>sf(k)</strong> liegt bei höherer Sparquote oder Produktivität weiter oben.
    Bei den aktuellen Werten ergibt sich ein Steady State von rund <strong>k* = ${kStar.toFixed(1)}</strong>. 
    Links davon gilt sf(k) &gt; (δ+n)k, rechts davon schrumpft der Kapitalstock pro Kopf.
  `);
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
  drawVertical(plot, uNatural, plot.col.muted, "uₙ");
  drawCurve(plot, phillips, {
    color: plot.col.accent,
    label: "PK",
    labelX: 7.2
  });
  drawPoint(plot, uCurrent, currentPi, plot.col.warn, `π = ${currentPi.toFixed(1)}%`);

  updateInfo(`
    <strong>Interpretation:</strong> Liegt die Arbeitslosigkeit unter uₙ = ${uNatural.toFixed(1)}%, steigt die Inflation über die erwartete Inflation von ${piExpected.toFixed(1)}%.
    Beim aktuellen Punkt (${uCurrent.toFixed(1)}%, ${currentPi.toFixed(1)}%) ist die Inflation ${currentPi >= piExpected ? "höher" : "niedriger"} als erwartet.
  `);
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
    label: "LM",
    labelX: 95
  });
  drawPoint(plot, yCurrent, Math.max(plot.ranges.yMin, currentI), plot.col.warn, `i = ${currentI.toFixed(1)}%`);

  updateInfo(`
    <strong>Interpretation:</strong> Mehr reales Geldangebot (${mpReal.toFixed(0)}) verschiebt die LM-Kurve nach rechts/unten.
    Bei Y = <strong>${yCurrent.toFixed(0)}</strong> ergibt sich aktuell ein Gleichgewichtszins von rund <strong>${currentI.toFixed(1)}%</strong>.
    Höheres k macht die LM steiler, höheres h flacher.
  `);
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
    case "mundell_fleming":
      drawMundellFleming();
      break;
    case "schuldenquote":
      drawSchuldenquote();
      break;
    case "taylor_regel":
      drawTaylorRegel();
      break;
    case "solow_basis":
      drawSolowBasis();
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
