import { renderMath } from '../utils/mathjax.js';

let rafId = null;

function animateGraph(drawFn) {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  const t0 = performance.now();
  const duration = 360;
  const step = (now) => {
    const raw = Math.min((now - t0) / duration, 1);
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
    bg: pick('--bg', '#0f1114'),
    card: pick('--card', '#1a1d21'),
    border: pick('--border', '#2e3338'),
    axis: pick('--muted', '#8a8f98'),
    text: pick('--text', '#e8e8ed'),
    accent: pick('--accent', '#4a90d9'),
    accent2: pick('--accent2', '#5a9fd4'),
    warn: pick('--accent3', '#e05252'),
    math: pick('--math-ink', '#E03AFB'),
    green: pick('--semantic-green', '#4caf7c'),
    fontBody: pick('--font-body', s.fontFamily || 'system-ui, sans-serif')
  };
}

function setValue(id, value, digits = 2) {
  const node = document.getElementById(id);
  if (!node) return;
  node.textContent = Number(value).toFixed(digits);
}

function setGraphInfo(html) {
  const info = document.getElementById('graph_info');
  if (!info) return;
  info.innerHTML = html;
  renderMath(info);
}

function buildGraphInfo({ label = 'Interpretation', equation = '', rows = [] }) {
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

function setupPlane(xMin, xMax, yMin, yMax) {
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
  const pad = { left: 68, right: 26, top: 24, bottom: 56 };
  const width = displayWidth;
  const height = displayHeight;
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;

  const sx = (x) => pad.left + ((x - xMin) / (xMax - xMin)) * plotW;
  const sy = (y) => height - pad.bottom - ((y - yMin) / (yMax - yMin)) * plotH;

  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, width, height);

  return { canvas, ctx, colors, width, height, pad, plotW, plotH, xMin, xMax, yMin, yMax, sx, sy };
}

function drawAxes(plane, xLabel, yLabel, xTicks = 8, yTicks = 6) {
  const { ctx, colors, width, height, pad, xMin, xMax, yMin, yMax, sx, sy } = plane;
  ctx.save();
  ctx.lineWidth = 1;
  ctx.strokeStyle = colors.border;
  ctx.fillStyle = colors.axis;
  ctx.font = `12px ${colors.fontBody}`;
  ctx.setLineDash([4, 4]);

  for (let i = 0; i <= xTicks; i += 1) {
    const x = xMin + ((xMax - xMin) * i) / xTicks;
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

  for (let i = 0; i <= yTicks; i += 1) {
    const y = yMin + ((yMax - yMin) * i) / yTicks;
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
  ctx.lineWidth = 1.6;

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
  ctx.fillText(xLabel, pad.left + plane.plotW / 2, height - 18);
  ctx.save();
  ctx.translate(18, pad.top + plane.plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();
  ctx.restore();
}

function drawCurve(plane, fn, color, options = {}) {
  const { ctx, sx, sy, xMin, xMax } = plane;
  const {
    lineWidth = 2.5,
    dash = [],
    progress = 1
  } = options;
  const stop = xMin + (xMax - xMin) * progress;
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(dash);
  ctx.beginPath();
  let started = false;
  const step = (xMax - xMin) / 500;
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

function drawLineSegment(plane, x1, y1, x2, y2, color, options = {}) {
  const { ctx, sx, sy } = plane;
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

function drawPoint(plane, x, y, color, label = '', options = {}) {
  const { ctx, sx, sy, colors } = plane;
  const cx = sx(x);
  const cy = sy(y);
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = colors.bg;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, options.radius || 5.5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  if (label) {
    drawLabelTag(ctx, label, cx + 12, cy - 16, color, { bgColor: colors.card, borderColor: color, textColor: color });
  }
}

function drawArrow(plane, x1, y1, x2, y2, color, label = '') {
  const { ctx, sx, sy, colors } = plane;
  const ax = sx(x1), ay = sy(y1), bx = sx(x2), by = sy(y2);
  const angle = Math.atan2(by - ay, bx - ax);
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  ctx.moveTo(ax, ay);
  ctx.lineTo(bx, by);
  ctx.stroke();
  const size = 8;
  ctx.beginPath();
  ctx.moveTo(bx, by);
  ctx.lineTo(bx - size * Math.cos(angle - Math.PI / 6), by - size * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(bx - size * Math.cos(angle + Math.PI / 6), by - size * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();
  ctx.restore();
  if (label) {
    drawLabelTag(ctx, label, (ax + bx) / 2 + 12, (ay + by) / 2 - 16, color, { bgColor: colors.card, borderColor: color, textColor: color });
  }
}

function drawShadedArea(plane, fn, from, to, color) {
  const { ctx, sx, sy, yMin } = plane;
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(sx(from), sy(0));
  const step = (to - from) / 160;
  for (let x = from; x <= to; x += step) {
    ctx.lineTo(sx(x), sy(fn(x)));
  }
  ctx.lineTo(sx(to), sy(0));
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawLegendBox(plane, entries) {
  const { ctx, width, colors } = plane;
  const x = width - 230;
  const y = 34;
  const rowH = 20;
  ctx.save();
  ctx.fillStyle = colors.bg;
  ctx.globalAlpha = 0.88;
  ctx.fillRect(x - 10, y - 10, 210, entries.length * rowH + 18);
  ctx.globalAlpha = 1;
  ctx.strokeStyle = colors.border;
  ctx.strokeRect(x - 10, y - 10, 210, entries.length * rowH + 18);
  ctx.font = `12px ${colors.fontBody}`;
  entries.forEach((entry, index) => {
    const cy = y + index * rowH;
    ctx.strokeStyle = entry.color;
    ctx.fillStyle = entry.color;
    ctx.lineWidth = 2.2;
    ctx.setLineDash(entry.dash || []);
    ctx.beginPath();
    ctx.moveTo(x, cy);
    ctx.lineTo(x + 18, cy);
    ctx.stroke();
    ctx.setLineDash([]);
    if (entry.dot) {
      ctx.beginPath();
      ctx.arc(x + 9, cy, 4, 0, 2 * Math.PI);
      ctx.fill();
    }
    ctx.fillStyle = colors.text;
    ctx.textAlign = 'left';
    ctx.fillText(entry.label, x + 28, cy + 4);
  });
  ctx.restore();
}

function drawLabelTag(ctx, text, x, y, color, options = {}) {
  const lines = Array.isArray(text) ? text : [text];
  const fontFamily = options.fontFamily || getComputedStyle(document.body).getPropertyValue('--font-body').trim() || getComputedStyle(document.body).fontFamily || 'system-ui, sans-serif';
  const fontSize = options.fontSize || 11;
  const paddingX = options.paddingX || 8;
  const paddingY = options.paddingY || 6;
  const bgColor = options.bgColor || '#ffffff';
  const borderColor = options.borderColor || color;
  const textColor = options.textColor || color;
  ctx.save();
  ctx.font = `700 ${fontSize}px ${fontFamily}`;
  const lineHeight = Math.round(fontSize * 1.18);
  const width = Math.max(...lines.map((line) => ctx.measureText(line).width), 0) + paddingX * 2;
  const height = lines.length * lineHeight + paddingY * 2;
  ctx.fillStyle = bgColor;
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1.2;
  drawRoundedRect(ctx, x, y, width, height, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  lines.forEach((line, index) => {
    ctx.fillText(line, x + width / 2, y + paddingY + lineHeight / 2 + index * lineHeight);
  });
  ctx.restore();
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') {
    ctx.roundRect(x, y, width, height, radius);
    return;
  }
  const r = Math.min(radius, width / 2, height / 2);
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawFunctionTransform(progress = 1) {
  const a = Number(document.getElementById('g_fun_a')?.value || 1);
  const c = Number(document.getElementById('g_fun_c')?.value || 1);
  const d = Number(document.getElementById('g_fun_d')?.value || -1);
  setValue('v_fun_a', a, 1);
  setValue('v_fun_c', c, 1);
  setValue('v_fun_d', d, 1);

  const plane = setupPlane(-4, 4, -4, 8);
  if (!plane) return;
  drawAxes(plane, 'x', 'y');
  const base = (x) => x * x;
  const transformed = (x) => a * (x - c) ** 2 + d;
  drawCurve(plane, base, plane.colors.axis, { dash: [6, 4], progress });
  drawCurve(plane, transformed, plane.colors.accent, { progress });
  drawLineSegment(plane, c, plane.yMin, c, plane.yMax, plane.colors.accent2, { dash: [5, 5], lineWidth: 1.4 });
  drawPoint(plane, c, d, plane.colors.math, 'Scheitel');
  drawLabelTag(plane.ctx, 'Grundgraph y = x²', plane.sx(-3.5), plane.sy(6.8), plane.colors.axis, { bgColor: plane.colors.card, borderColor: plane.colors.axis, textColor: plane.colors.axis });
  drawLabelTag(plane.ctx, 'transformierter Graph', plane.sx(0.9), plane.sy(transformed(0.9)) - 28, plane.colors.accent, { bgColor: plane.colors.card, borderColor: plane.colors.accent, textColor: plane.colors.accent });
  drawLegendBox(plane, [
    { color: plane.colors.axis, dash: [6, 4], label: 'Grundgraph y = x²' },
    { color: plane.colors.accent, label: 'transformierte Funktion a(x − c)² + d' },
    { color: plane.colors.math, dot: true, label: 'Scheitelpunkt' }
  ]);
  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: String.raw`$$g(x)=${a.toFixed(1)}(x-${c.toFixed(1)})^2+${d.toFixed(1)}$$`,
    rows: [
      { title: 'Streckung / Spiegelung', body: `$a=${a.toFixed(1)}$ steuert Öffnung und Steilheit; negatives $a$ spiegelt an der x-Achse.` },
      { title: 'Horizontale Verschiebung', body: `$c=${c.toFixed(1)}$ verschiebt den Scheitel nach rechts bzw. links.` },
      { title: 'Vertikale Verschiebung', body: `$d=${d.toFixed(1)}$ verschiebt den gesamten Graphen nach oben bzw. unten.` }
    ]
  }));
}

function drawDerivative(progress = 1) {
  const x0 = Number(document.getElementById('g_der_x0')?.value || 1);
  setValue('v_der_x0', x0, 2);
  const plane = setupPlane(-3.5, 3.5, -2.5, 2.5);
  if (!plane) return;
  drawAxes(plane, 'x', 'f(x)');
  const f = (x) => 0.12 * x ** 3 - 0.8 * x;
  const fp = (x) => 0.36 * x ** 2 - 0.8;
  const y0 = f(x0);
  const m = fp(x0);
  const tangent = (x) => y0 + m * (x - x0);
  drawCurve(plane, f, plane.colors.accent, { progress });
  drawCurve(plane, tangent, plane.colors.math, { dash: [6, 4], progress });
  drawPoint(plane, x0, y0, plane.colors.warn, 'P');
  drawLabelTag(plane.ctx, 'Tangente', plane.sx(x0 + 0.8), plane.sy(tangent(x0 + 0.8)) - 24, plane.colors.math, { bgColor: plane.colors.card, borderColor: plane.colors.math, textColor: plane.colors.math });
  drawLegendBox(plane, [
    { color: plane.colors.accent, label: 'Funktion f(x)' },
    { color: plane.colors.math, dash: [6, 4], label: 'Tangente in x₀' },
    { color: plane.colors.warn, dot: true, label: 'Berührpunkt P' }
  ]);
  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: String.raw`$$f'(x_0)=0.36\cdot (${x0.toFixed(2)})^2-0.8=${m.toFixed(2)}$$`,
    rows: [
      { title: 'Punkt P', body: `Bei $x_0=${x0.toFixed(2)}$ hat die Funktion den Wert $f(x_0)=${y0.toFixed(2)}$.` },
      { title: 'Momentane Änderungsrate', body: `Die Tangentensteigung ist $f'(x_0)=${m.toFixed(2)}$ und beschreibt die lokale Steigung im Punkt.` },
      { title: 'Klausurzugriff', body: 'Graphisch heißt Ableitung: Tangente lesen. Rechnerisch heißt Ableitung: passende Regel wählen und erst dann interpretieren.' }
    ]
  }));
}

function drawUnivariateOptimization(progress = 1) {
  const b = Number(document.getElementById('g_opt_b')?.value || 8);
  setValue('v_opt_b', b, 1);
  const plane = setupPlane(0, 10, -8, 20);
  if (!plane) return;
  drawAxes(plane, 'x', 'π(x)');
  const pi = (x) => -x * x + b * x - 4;
  const xStar = b / 2;
  const yStar = pi(xStar);
  drawCurve(plane, pi, plane.colors.accent, { progress });
  drawPoint(plane, xStar, yStar, plane.colors.math, 'Optimum');
  drawLineSegment(plane, xStar, plane.yMin, xStar, yStar, plane.colors.axis, { dash: [5, 5], lineWidth: 1.2 });
  drawLegendBox(plane, [
    { color: plane.colors.accent, label: 'Zielfunktion π(x)' },
    { color: plane.colors.math, dot: true, label: 'inneres Optimum' }
  ]);
  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: String.raw`$$\pi(x)=-x^2+${b.toFixed(1)}x-4,\qquad \pi'(x)=-2x+${b.toFixed(1)}$$`,
    rows: [
      { title: 'Kandidat', body: `Die BEO liefert $x^*=b/2=${xStar.toFixed(2)}$.` },
      { title: 'Klassifikation', body: 'Weil $\\pi\'\'(x)=-2<0$ gilt, ist der Kandidat ein lokales Maximum.' },
      { title: 'Lesart', body: `Hier liegt das Maximum bei $\\pi(x^*)=${yStar.toFixed(2)}$.` }
    ]
  }));
}

function drawMultivariateAnalysis(progress = 1) {
  const px = Number(document.getElementById('g_multi_x')?.value || 1.5);
  const py = Number(document.getElementById('g_multi_y')?.value || 1);
  setValue('v_multi_x', px, 2);
  setValue('v_multi_y', py, 2);
  const plane = setupPlane(-3.5, 3.5, -3.5, 3.5);
  if (!plane) return;
  drawAxes(plane, 'x', 'y');
  const levels = [1.5, 4, 7, 10];
  levels.forEach((level, idx) => {
    const r = Math.sqrt(level);
    plane.ctx.save();
    plane.ctx.strokeStyle = idx % 2 === 0 ? plane.colors.accent2 : plane.colors.accent;
    plane.ctx.lineWidth = 2;
    plane.ctx.beginPath();
    for (let t = 0; t <= Math.PI * 2 + 0.05; t += 0.04) {
      const x = r * Math.cos(t);
      const y = r * Math.sin(t);
      const cx = plane.sx(x);
      const cy = plane.sy(y);
      if (t === 0) plane.ctx.moveTo(cx, cy);
      else plane.ctx.lineTo(cx, cy);
    }
    plane.ctx.stroke();
    plane.ctx.restore();
  });
  const value = px * px + py * py;
  const gradX = 2 * px;
  const gradY = 2 * py;
  const norm = Math.max(Math.hypot(gradX, gradY), 0.001);
  drawPoint(plane, px, py, plane.colors.warn, 'P');
  drawArrow(plane, px, py, px + (gradX / norm) * 0.9, py + (gradY / norm) * 0.9, plane.colors.math, 'Gradient');
  drawLegendBox(plane, [
    { color: plane.colors.accent, label: 'Niveaukurven x² + y² = c' },
    { color: plane.colors.warn, dot: true, label: 'Punkt P' },
    { color: plane.colors.math, label: 'Gradient' }
  ]);
  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: String.raw`$$f(x,y)=x^2+y^2,\qquad \nabla f(P)=\begin{pmatrix}2x\\2y\end{pmatrix}=\begin{pmatrix}${(2 * px).toFixed(2)}\\${(2 * py).toFixed(2)}\end{pmatrix}$$`,
    rows: [
      { title: 'Niveaukurve', body: `P liegt auf einer Konturlinie mit Wert $f(P)=${value.toFixed(2)}$.` },
      { title: 'Gradient', body: 'Der Gradientenpfeil zeigt die Richtung des stärksten Anstiegs und steht orthogonal auf der Niveaukurve.' },
      { title: 'Partielle Lesart', body: `Hier gilt $f_x(P)=${(2 * px).toFixed(2)}$ und $f_y(P)=${(2 * py).toFixed(2)}$.` }
    ]
  }));
}

function drawLagrange(progress = 1) {
  const m = Number(document.getElementById('g_lag_m')?.value || 8);
  setValue('v_lag_m', m, 1);
  const max = Math.max(10, m + 1);
  const plane = setupPlane(0, max, 0, max);
  if (!plane) return;
  drawAxes(plane, 'x₁', 'x₂');
  const uStar = (m / 2) * (m / 2);
  [uStar * 0.5, uStar, uStar * 1.5].forEach((u, idx) => {
    drawCurve(plane, (x) => u / Math.max(x, 0.1), idx === 1 ? plane.colors.accent : plane.colors.accent2, { progress, dash: idx === 1 ? [] : [6, 4] });
  });
  drawLineSegment(plane, 0, m, m, 0, plane.colors.warn, { lineWidth: 2.5 });
  drawPoint(plane, m / 2, m / 2, plane.colors.math, 'Optimum');
  drawLabelTag(plane.ctx, 'Nebenbedingung', plane.sx(m * 0.58), plane.sy(m * 0.42) - 24, plane.colors.warn, { bgColor: plane.colors.card, borderColor: plane.colors.warn, textColor: plane.colors.warn });
  drawLegendBox(plane, [
    { color: plane.colors.accent, label: 'Niveaukurve im Optimum' },
    { color: plane.colors.accent2, dash: [6, 4], label: 'weitere Niveaukurven' },
    { color: plane.colors.warn, label: 'Nebenbedingung x₁ + x₂ = m' },
    { color: plane.colors.math, dot: true, label: 'Tangentialpunkt' }
  ]);
  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: String.raw`$$U(x_1,x_2)=x_1x_2,\qquad x_1+x_2=${m.toFixed(1)}$$`,
    rows: [
      { title: 'Nebenbedingung', body: `Die zulässigen Punkte liegen auf der Geraden $x_1+x_2=${m.toFixed(1)}$.` },
      { title: 'Tangentialpunkt', body: `Bei gleichen Preisen liegt das Optimum hier bei $x_1=x_2=${(m / 2).toFixed(2)}$.` },
      { title: 'Lagrange-Lesart', body: 'Im Optimum berührt die höchste erreichbare Niveaukurve die Restriktion gerade tangential.' }
    ]
  }));
}

function drawIntegral(progress = 1) {
  let a = Number(document.getElementById('g_int_a')?.value || 0.5);
  let b = Number(document.getElementById('g_int_b')?.value || 3);
  if (a >= b) {
    b = Math.min(4, a + 0.25);
  }
  setValue('v_int_a', a, 2);
  setValue('v_int_b', b, 2);
  const plane = setupPlane(0, 4.2, 0, 6);
  if (!plane) return;
  drawAxes(plane, 'x', 'f(x)');
  const f = (x) => 2 * x - 0.25 * x * x + 0.5;
  drawShadedArea(plane, f, a, b, `${plane.colors.accent}33`);
  drawCurve(plane, f, plane.colors.accent, { progress });
  drawLineSegment(plane, a, 0, a, f(a), plane.colors.warn, { dash: [5, 5], lineWidth: 1.4 });
  drawLineSegment(plane, b, 0, b, f(b), plane.colors.warn, { dash: [5, 5], lineWidth: 1.4 });
  const F = (x) => x * x - x ** 3 / 12 + 0.5 * x;
  const area = F(b) - F(a);
  drawLegendBox(plane, [
    { color: plane.colors.accent, label: 'Funktionsgraph f(x)' },
    { color: plane.colors.warn, dash: [5, 5], label: 'Integrationsgrenzen' },
    { color: plane.colors.accent, label: 'schattierte Fläche' }
  ]);
  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: String.raw`$$\int_{${a.toFixed(2)}}^{${b.toFixed(2)}} f(x)\,dx=${area.toFixed(2)}$$`,
    rows: [
      { title: 'Grenzen', body: `Die Fläche wird zwischen $a=${a.toFixed(2)}$ und $b=${b.toFixed(2)}$ akkumuliert.` },
      { title: 'Hauptsatz', body: `Der Wert folgt aus $F(b)-F(a)$ und beträgt hier ${area.toFixed(2)}.` },
      { title: 'Lesart', body: 'Weil der Graph auf dem Intervall oberhalb der x-Achse liegt, stimmen Integralwert und Flächeninhalt hier überein.' }
    ]
  }));
}

function initGraph(type, animate = true) {
  window.__currentGraphId = type;
  const draw = (progress = 1) => {
    switch (type) {
      case 'funktionen_gleichungen':
        drawFunctionTransform(progress);
        break;
      case 'analysis_ableitung_grundlagen':
        drawDerivative(progress);
        break;
      case 'univariate_optimierung':
        drawUnivariateOptimization(progress);
        break;
      case 'analysis_multivariat':
        drawMultivariateAnalysis(progress);
        break;
      case 'lagrange':
        drawLagrange(progress);
        break;
      case 'integralrechnung':
        drawIntegral(progress);
        break;
      default:
        break;
    }
  };

  if (animate) animateGraph(draw);
  else draw(1);
}

export { initGraph };
