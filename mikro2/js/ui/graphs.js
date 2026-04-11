import { renderMath } from '../utils/mathjax.js';

let rafId = null;

function animateGraph(drawFn) {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  const start = performance.now();
  const duration = 360;
  const step = (now) => {
    const raw = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - raw, 3);
    drawFn(eased);
    if (raw < 1) rafId = requestAnimationFrame(step);
    else rafId = null;
  };
  rafId = requestAnimationFrame(step);
}

function readColors() {
  const s = getComputedStyle(document.body);
  const pick = (name, fallback) => s.getPropertyValue(name).trim() || fallback;
  return {
    bg: pick('--bg', '#f2f2f7'),
    card: pick('--card', '#ffffff'),
    border: pick('--border', '#d1d1d6'),
    axis: pick('--muted', '#6c6c70'),
    text: pick('--text', '#1c1c1e'),
    accent: pick('--accent', '#2c6fba'),
    accent2: pick('--accent2', '#3a7ab8'),
    warn: pick('--accent3', '#c0392b'),
    math: pick('--math-ink', '#E03AFB'),
    green: pick('--semantic-green', '#2d8659'),
    fontBody: pick('--font-body', s.fontFamily || 'system-ui, sans-serif'),
    fontMono: pick('--font-mono', 'SF Mono, Menlo, monospace')
  };
}

function withAlpha(color, alpha) {
  if (!color) return `rgba(0,0,0,${alpha})`;
  const hex = color.trim();
  if (hex.startsWith('#')) {
    const raw = hex.slice(1);
    const full = raw.length === 3 ? raw.split('').map((char) => char + char).join('') : raw;
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  const rgb = hex.match(/\d+(?:\.\d+)?/g);
  if (rgb && rgb.length >= 3) {
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
  }
  return color;
}

function setGraphInfo(html) {
  const info = document.getElementById('graph_info');
  if (!info) return;
  info.innerHTML = html;
  renderMath(info);
}

function buildGraphInfo({ label = 'Graph-Interpretation', equation = '', rows = [] }) {
  const parts = [`<span class="gi-label">${label}</span>`];
  if (equation) parts.push(`<div class="gi-eq">${equation}</div>`);
  if (rows.length) {
    parts.push('<div class="gi-list">');
    rows.forEach((row) => {
      parts.push(`<div class="gi-row"><div class="gi-row-head">${row.title}</div><div class="gi-row-body">${row.body}</div></div>`);
    });
    parts.push('</div>');
  }
  return parts.join('');
}

function setupCanvas() {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return null;
  const dpr = window.devicePixelRatio || 1;
  const displayWidth = canvas.clientWidth || 920;
  const displayHeight = canvas.clientHeight || 560;
  canvas.width = Math.round(displayWidth * dpr);
  canvas.height = Math.round(displayHeight * dpr);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const colors = readColors();
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, displayWidth, displayHeight);
  return { canvas, ctx, colors, width: displayWidth, height: displayHeight };
}

function setupPlot(xMin, xMax, yMin, yMax, xLabel, yLabel) {
  const base = setupCanvas();
  if (!base) return null;
  const { ctx, colors, width, height } = base;
  const pad = { left: 76, right: 30, top: 28, bottom: 60 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const sx = (x) => pad.left + ((x - xMin) / (xMax - xMin)) * plotW;
  const sy = (y) => height - pad.bottom - ((y - yMin) / (yMax - yMin)) * plotH;

  ctx.save();
  ctx.strokeStyle = withAlpha(colors.border, 0.8);
  ctx.fillStyle = colors.axis;
  ctx.font = `12px ${colors.fontBody}`;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);

  for (let i = 0; i <= 5; i += 1) {
    const x = xMin + ((xMax - xMin) * i) / 5;
    const cx = sx(x);
    ctx.beginPath();
    ctx.moveTo(cx, pad.top);
    ctx.lineTo(cx, height - pad.bottom);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.textAlign = 'center';
    ctx.fillText(Number(x).toFixed(Math.abs(x) < 10 ? 1 : 0).replace('.0', ''), cx, height - pad.bottom + 20);
    ctx.setLineDash([4, 4]);
  }

  for (let i = 0; i <= 5; i += 1) {
    const y = yMin + ((yMax - yMin) * i) / 5;
    const cy = sy(y);
    ctx.beginPath();
    ctx.moveTo(pad.left, cy);
    ctx.lineTo(width - pad.right, cy);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.textAlign = 'right';
    ctx.fillText(Number(y).toFixed(Math.abs(y) < 10 ? 1 : 0).replace('.0', ''), pad.left - 8, cy + 4);
    ctx.setLineDash([4, 4]);
  }

  ctx.setLineDash([]);
  ctx.strokeStyle = colors.axis;
  ctx.lineWidth = 1.5;
  const zeroX = xMin <= 0 && xMax >= 0 ? sx(0) : pad.left;
  const zeroY = yMin <= 0 && yMax >= 0 ? sy(0) : height - pad.bottom;
  ctx.beginPath();
  ctx.moveTo(pad.left, zeroY);
  ctx.lineTo(width - pad.right, zeroY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(zeroX, pad.top);
  ctx.lineTo(zeroX, height - pad.bottom);
  ctx.stroke();

  ctx.fillStyle = colors.text;
  ctx.font = `600 13px ${colors.fontBody}`;
  ctx.textAlign = 'center';
  ctx.fillText(xLabel, pad.left + plotW / 2, height - 18);
  ctx.save();
  ctx.translate(20, pad.top + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();
  ctx.restore();

  return { ...base, pad, xMin, xMax, yMin, yMax, plotW, plotH, sx, sy };
}

function drawCurve(plot, fn, color, options = {}) {
  const { ctx, sx, sy, xMin, xMax } = plot;
  const { lineWidth = 2.5, dash = [], progress = 1 } = options;
  const stop = xMin + (xMax - xMin) * progress;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(dash);
  ctx.beginPath();
  let started = false;
  const step = (xMax - xMin) / 320;
  for (let x = xMin; x <= stop; x += step) {
    const y = fn(x);
    if (!Number.isFinite(y)) continue;
    const cx = sx(x);
    const cy = sy(y);
    if (!started) {
      ctx.moveTo(cx, cy);
      started = true;
    } else {
      ctx.lineTo(cx, cy);
    }
  }
  ctx.stroke();
  ctx.restore();
}

function drawLineSegment(plot, x1, y1, x2, y2, color, options = {}) {
  const { ctx, sx, sy } = plot;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = options.lineWidth || 2.2;
  ctx.setLineDash(options.dash || []);
  ctx.beginPath();
  ctx.moveTo(sx(x1), sy(y1));
  ctx.lineTo(sx(x2), sy(y2));
  ctx.stroke();
  ctx.restore();
}

function drawPoint(plot, x, y, color, label = '', options = {}) {
  const { ctx, sx, sy, colors } = plot;
  const cx = sx(x);
  const cy = sy(y);
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = colors.bg;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, options.radius || 5.4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  if (label) drawTag(plot, x, y, label, color, options.dx ?? 10, options.dy ?? -12);
}

function drawTag(plot, x, y, text, color, dx = 10, dy = -10) {
  const { ctx, sx, sy, colors } = plot;
  const px = sx(x) + dx;
  const py = sy(y) + dy;
  ctx.save();
  ctx.font = `600 12px ${colors.fontBody}`;
  const width = ctx.measureText(text).width + 14;
  const height = 24;
  ctx.fillStyle = withAlpha(colors.card, 0.95);
  ctx.strokeStyle = withAlpha(color, 0.7);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(px - 4, py - height + 5, width, height, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, px + 3, py - 6);
  ctx.restore();
}

function drawLegend(plot, entries) {
  const { ctx, colors, width } = plot;
  const x = width - 246;
  const y = 22;
  const rowH = 20;
  const boxH = entries.length * rowH + 16;
  ctx.save();
  ctx.fillStyle = withAlpha(colors.card, 0.93);
  ctx.strokeStyle = withAlpha(colors.border, 0.9);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, y, 220, boxH, 12);
  ctx.fill();
  ctx.stroke();

  entries.forEach((entry, index) => {
    const cy = y + 20 + index * rowH;
    ctx.strokeStyle = entry.color;
    ctx.lineWidth = entry.lineWidth || 2.5;
    ctx.setLineDash(entry.dash || []);
    ctx.beginPath();
    ctx.moveTo(x + 12, cy);
    ctx.lineTo(x + 34, cy);
    ctx.stroke();
    ctx.setLineDash([]);
    if (entry.dot) {
      ctx.fillStyle = entry.color;
      ctx.beginPath();
      ctx.arc(x + 23, cy, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = colors.text;
    ctx.font = `12px ${colors.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText(entry.label, x + 44, cy + 0.5);
  });
  ctx.restore();
}

function drawStaticGame(progress = 1) {
  const base = setupCanvas();
  if (!base) return;
  const { ctx, colors, width, height } = base;
  const pad = 110;
  const cellW = (width - 2 * pad) / 2;
  const cellH = (height - 2 * pad) / 2;

  ctx.strokeStyle = colors.axis;
  ctx.lineWidth = 2;
  ctx.strokeRect(pad, pad, 2 * cellW, 2 * cellH);
  ctx.beginPath();
  ctx.moveTo(pad + cellW, pad);
  ctx.lineTo(pad + cellW, height - pad);
  ctx.moveTo(pad, pad + cellH);
  ctx.lineTo(width - pad, pad + cellH);
  ctx.stroke();

  ctx.font = `700 16px ${colors.fontMono}`;
  ctx.fillStyle = colors.text;
  ctx.textAlign = 'center';
  ctx.fillText('H', pad + cellW / 2, pad - 22);
  ctx.fillText('N', pad + cellW * 1.5, pad - 22);
  ctx.save();
  ctx.translate(pad - 44, pad + cellH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('H', 0, 0);
  ctx.restore();
  ctx.save();
  ctx.translate(pad - 44, pad + cellH * 1.5);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('N', 0, 0);
  ctx.restore();

  if (progress > 0.45) {
    ctx.fillText('10, 10', pad + cellW / 2, pad + cellH / 2 + 5);
    ctx.fillText('0, 12', pad + cellW * 1.5, pad + cellH / 2 + 5);
    ctx.fillText('12, 0', pad + cellW / 2, pad + cellH * 1.5 + 5);
    ctx.fillStyle = colors.accent;
    ctx.fillText('1, 1', pad + cellW * 1.5, pad + cellH * 1.5 + 5);
  }
  if (progress > 0.75) {
    ctx.strokeStyle = colors.warn;
    ctx.lineWidth = 4;
    ctx.strokeRect(pad + cellW + 10, pad + cellH + 10, cellW - 20, cellH - 20);
  }

  setGraphInfo(buildGraphInfo({
    equation: String.raw`\pi_i(s_i, s_{-i})`,
    rows: [
      { title: 'Zellen lesen', body: 'Jede Zelle enthält die beiden Auszahlungen für das gewählte Strategiepaar.' },
      { title: 'Nash-Punkt', body: 'Das markierte Feld ist stabil, weil keine Seite durch einseitiges Abweichen ihren Wert verbessern kann.' },
      { title: 'Prüfungslogik', body: 'Bei 2x2-Spielen erst beste Antworten markieren, dann nur die Schnittzellen als Nash-Gleichgewichte nennen.' }
    ]
  }));
}

function drawMixedStrategies(progress = 1) {
  const plot = setupPlot(0, 1, 0, 12, 'Mischwahrscheinlichkeit q', 'Erwartungsnutzen');
  if (!plot) return;
  const uH = (q) => 12 - 8 * q;
  const uN = (q) => 4 + 12 * q;
  const qStar = 0.4;
  const uStar = uH(qStar);
  drawCurve(plot, uH, plot.colors.accent, { progress });
  drawCurve(plot, uN, plot.colors.accent2, { progress });
  drawPoint(plot, qStar, uStar, plot.colors.warn, 'q*', { dx: 12, dy: -10 });
  drawLegend(plot, [
    { label: 'U(H | q)', color: plot.colors.accent },
    { label: 'U(N | q)', color: plot.colors.accent2 },
    { label: 'Mischgleichgewicht', color: plot.colors.warn, dot: true }
  ]);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`U_H(q^*) = U_N(q^*)`,
    rows: [
      { title: 'Indifferenz', body: 'Im Mischgleichgewicht muss der Gegenspieler zwischen den reinen Strategien indifferent sein.' },
      { title: 'Lesart des Schnittpunkts', body: `Der markierte Punkt liefert die Mischung \(q^* = ${qStar.toFixed(2)}\), die beide Strategien gleich attraktiv macht.` },
      { title: 'Prüfungsfokus', body: 'Nicht “gemischt weil unentschieden”, sondern gemischt, weil nur so die Abweichung des Gegners unattraktiv bleibt.' }
    ]
  }));
}

function drawCournot(progress = 1) {
  const plot = setupPlot(0, 100, 0, 100, 'Menge Firma 1', 'Menge Firma 2');
  if (!plot) return;
  const r1 = (q1) => 60 - 0.5 * q1;
  const r2 = (q2) => 60 - 0.5 * q2;
  drawCurve(plot, r1, plot.colors.accent, { progress, xEnd: 100 });
  drawCurve(plot, (x) => r2(x), plot.colors.accent2, { progress, xEnd: 100 });
  drawPoint(plot, 40, 40, plot.colors.warn, 'Cournot-Nash');
  drawLegend(plot, [
    { label: 'Reaktionsfunktion F1', color: plot.colors.accent },
    { label: 'Reaktionsfunktion F2', color: plot.colors.accent2 },
    { label: 'Nash-Gleichgewicht', color: plot.colors.warn, dot: true }
  ]);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`R_i(q_j) = \frac{a-c-bq_j}{2b}`,
    rows: [
      { title: 'Beste Antworten', body: 'Jede Reaktionsfunktion zeigt die optimale eigene Menge für jede mögliche Menge des Rivalen.' },
      { title: 'Gleichgewicht', body: 'Am Schnittpunkt antworten beide Firmen bereits optimal aufeinander; deshalb ist dort kein Anreiz zur einseitigen Mengenanpassung mehr übrig.' },
      { title: 'Prüfungslesart', body: 'Immer Achsen benennen: auf jeder Achse steht eine Firmenmenge, nicht Preis oder Gewinn.' }
    ]
  }));
}

function drawStackelberg(progress = 1) {
  const plot = setupPlot(0, 100, 0, 100, 'Menge Führer', 'Menge Folger');
  if (!plot) return;
  const followerReaction = (q1) => 60 - 0.5 * q1;
  drawCurve(plot, followerReaction, plot.colors.accent2, { progress });
  drawLineSegment(plot, 60, 0, 60, 30, plot.colors.warn, { dash: [7, 5], lineWidth: 2.2 });
  drawPoint(plot, 60, 30, plot.colors.warn, 'Stackelberg-Punkt');
  drawLegend(plot, [
    { label: 'Reaktion des Folgers', color: plot.colors.accent2 },
    { label: 'Führerlösung', color: plot.colors.warn, dot: true }
  ]);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`q_2 = R_2(q_1)`,
    rows: [
      { title: 'Zeitliche Logik', body: 'Der Führer wählt zuerst und antizipiert die Reaktionsfunktion des Folgers.' },
      { title: 'Punktlesart', body: 'Der markierte Punkt zeigt die Führermenge zusammen mit der dazugehörigen optimalen Reaktion des Folgers.' },
      { title: 'Prüfungsfokus', body: 'Stackelberg ist kein symmetrisches Cournot-Bild: die Vorentscheidung des Führers ist der zentrale Unterschied.' }
    ]
  }));
}

function drawEdgeworth(progress = 1) {
  const base = setupCanvas();
  if (!base) return;
  const { ctx, colors, width, height } = base;
  const x = 130;
  const y = 90;
  const boxW = 620;
  const boxH = 340;
  ctx.strokeStyle = colors.axis;
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, boxW, boxH);
  ctx.font = `600 13px ${colors.fontBody}`;
  ctx.fillStyle = colors.text;
  ctx.fillText('Haushalt A', x + 8, y - 14);
  ctx.fillText('Haushalt B', x + boxW - 86, y + boxH + 28);

  ctx.strokeStyle = colors.accent;
  ctx.lineWidth = 2.6;
  ctx.beginPath();
  ctx.moveTo(x + 80, y + boxH - 34);
  ctx.bezierCurveTo(x + 210, y + 250, x + 390, y + 140, x + 530, y + 60);
  ctx.stroke();

  ctx.fillStyle = colors.warn;
  ctx.beginPath();
  ctx.arc(x + 220, y + 220, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = colors.warn;
  ctx.fillText('E', x + 234, y + 224);

  ctx.fillStyle = colors.green;
  ctx.beginPath();
  ctx.arc(x + 408, y + 160, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = colors.green;
  ctx.fillText('C', x + 420, y + 164);

  if (progress > 0.6) {
    ctx.strokeStyle = withAlpha(colors.accent2, 0.75);
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 5]);
    ctx.beginPath();
    ctx.moveTo(x + 220, y + 220);
    ctx.lineTo(x + 408, y + 160);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  setGraphInfo(buildGraphInfo({
    equation: String.raw`MRS_A = MRS_B`,
    rows: [
      { title: 'Endausstattung', body: 'E markiert den Ausgangspunkt der Tauschbeziehungen in der Box.' },
      { title: 'Kontraktkurve', body: 'Die blaue Kurve sammelt Pareto-effiziente Allokationen, bei denen sich die Indifferenzkurven gerade tangieren.' },
      { title: 'Prüfungslesart', body: 'Bei Edgeworth-Aufgaben immer zuerst sagen, wessen Ursprung wo liegt und was “Pareto-besser” geometrisch bedeutet.' }
    ]
  }));
}

function drawWalras(progress = 1) {
  const plot = setupPlot(0.5, 3.2, -2.5, 3.2, 'Preis p', 'Überschussnachfrage z(p)');
  if (!plot) return;
  const z = (p) => 2.7 - 1.5 * p;
  const pStar = 1.8;
  drawCurve(plot, z, plot.colors.accent, { progress });
  drawLineSegment(plot, pStar, -2.5, pStar, 3.2, plot.colors.warn, { dash: [7, 5] });
  drawPoint(plot, pStar, 0, plot.colors.warn, 'p*');
  drawLegend(plot, [
    { label: 'Überschussnachfrage', color: plot.colors.accent },
    { label: 'Markträumung', color: plot.colors.warn, dot: true }
  ]);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`z(p^*) = 0`,
    rows: [
      { title: 'Markträumung', body: 'Das Gleichgewicht liegt dort, wo die Überschussnachfrage verschwindet.' },
      { title: 'Preislogik', body: 'Liegt der Preis unter \(p^*\), ist die Überschussnachfrage positiv; liegt er darüber, entsteht Überschussangebot.' },
      { title: 'Prüfungsfokus', body: 'Walras beschreibt Preisanpassung, nicht sofortige Mengenanpassung wie in einem Mengenrationierungsmodell.' }
    ]
  }));
}

function drawPigou(progress = 1) {
  const plot = setupPlot(0, 12, 0, 12, 'Menge q', 'marginale Größen');
  if (!plot) return;
  const mb = (q) => 11 - 0.7 * q;
  const mpc = (q) => 2 + 0.35 * q;
  const msc = (q) => 4 + 0.35 * q;
  const qPrivate = (11 - 2) / 1.05;
  const qSocial = (11 - 4) / 1.05;

  drawCurve(plot, mb, plot.colors.accent, { progress });
  drawCurve(plot, mpc, plot.colors.accent2, { progress });
  drawCurve(plot, msc, plot.colors.warn, { progress });
  drawPoint(plot, qPrivate, mb(qPrivate), plot.colors.accent2, 'privat');
  drawPoint(plot, qSocial, mb(qSocial), plot.colors.warn, 'sozial', { dy: 18 });
  drawLegend(plot, [
    { label: 'Grenznutzen / Nachfrage', color: plot.colors.accent },
    { label: 'private Grenzkosten', color: plot.colors.accent2 },
    { label: 'soziale Grenzkosten', color: plot.colors.warn }
  ]);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`MB(q) = MSC(q)`,
    rows: [
      { title: 'Private Entscheidung', body: 'Ohne Internalisierung schneidet der Entscheider Grenznutzen nur mit den privaten Grenzkosten und wählt damit zu viel Aktivität.' },
      { title: 'Soziales Optimum', body: 'Das soziale Optimum liegt dort, wo auch der externe Schaden in die Grenzkosten eingerechnet wird.' },
      { title: 'Prüfungslesart', body: 'Pigou-Logik heißt: erst private und soziale Kurve trennen, dann die Wohlfahrtslücke zwischen beiden Mengen benennen.' }
    ]
  }));
}

function drawInstitutions(progress = 1) {
  const plot = setupPlot(0, 10, 0, 10, 'Vermeidung A', 'Grenzvermeidungskosten');
  if (!plot) return;
  const mac = (a) => 0.6 + 0.7 * a;
  const price = 4.1;
  const aStar = (price - 0.6) / 0.7;

  drawCurve(plot, mac, plot.colors.accent, { progress });
  drawLineSegment(plot, 0, price, 10, price, plot.colors.warn, { dash: [7, 5], lineWidth: 2.2 });
  drawPoint(plot, aStar, price, plot.colors.warn, 'A*');
  drawLegend(plot, [
    { label: 'Grenzvermeidungskosten', color: plot.colors.accent },
    { label: 'Steuer-/Zertifikatpreis', color: plot.colors.warn, dash: [7, 5] }
  ]);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`MAC(A^*) = p_E`,
    rows: [
      { title: 'Instrumentenlogik', body: 'Ein Emissionspreis setzt einen Anreiz zur Vermeidung bis genau dort, wo weitere Vermeidung teurer wäre als Emittieren.' },
      { title: 'Gleiche Grenzsignale', body: 'Steuer und Zertifikatpreis wirken beide über denselben Grenzvergleich \(MAC = p_E\); sie unterscheiden sich vor allem in der Mengensicherheit.' },
      { title: 'Prüfungsfokus', body: 'Ordne jedes Instrument seiner Steuerungslogik zu: Preissteuerung über Abgaben, Mengesteuerung über Emissionsrechte.' }
    ]
  }));
}

function initGraph(type, animate = true) {
  const renderers = {
    spieltheorie_statisch: drawStaticGame,
    spieltheorie_dynamisch: drawMixedStrategies,
    oligopol_cournot_bertrand: drawCournot,
    oligopol_stackelberg: drawStackelberg,
    gleichgewicht_tausch: drawEdgeworth,
    gleichgewicht_walras: drawWalras,
    externa_pigou: drawPigou,
    externa_institutionen: drawInstitutions
  };
  const drawFn = renderers[type];
  if (!drawFn) return;
  if (animate) animateGraph(drawFn);
  else drawFn(1);
}

export {
  initGraph
};
