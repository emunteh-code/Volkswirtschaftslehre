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
  const pad = { left: 74, right: 30, top: 28, bottom: 60 };
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

function drawAxes(plane, xLabel, yLabel, xTicks = 6, yTicks = 5) {
  const { ctx, colors, width, height, pad, xMin, xMax, yMin, yMax, sx, sy } = plane;
  ctx.save();
  ctx.strokeStyle = withAlpha(colors.border, 0.8);
  ctx.fillStyle = colors.axis;
  ctx.font = `12px ${colors.fontBody}`;
  ctx.lineWidth = 1;
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
  ctx.fillText(xLabel, pad.left + plane.plotW / 2, height - 18);
  ctx.save();
  ctx.translate(20, pad.top + plane.plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();
  ctx.restore();
}

function drawCurve(plane, fn, color, options = {}) {
  const { ctx, sx, sy, xMin, xMax } = plane;
  const { lineWidth = 2.4, dash = [], progress = 1 } = options;
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
  ctx.arc(cx, cy, options.radius || 5.3, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  if (label) {
    drawTag(plane, x, y, label, color, options.dx ?? 10, options.dy ?? -12);
  }
}

function drawTag(plane, x, y, text, color, dx = 10, dy = -10) {
  const { ctx, sx, sy, colors } = plane;
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

function drawLegend(plane, entries) {
  const { ctx, colors, width } = plane;
  const x = width - 250;
  const y = 22;
  const rowH = 20;
  const boxH = entries.length * rowH + 16;
  ctx.save();
  ctx.fillStyle = withAlpha(colors.card, 0.93);
  ctx.strokeStyle = withAlpha(colors.border, 0.9);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, y, 224, boxH, 12);
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

function bivariatPoints(rho, shift) {
  const xs = [-2.8, -2.2, -1.7, -1.2, -0.8, -0.2, 0.3, 0.9, 1.4, 1.9, 2.5, 3.1];
  const shocks = [-1.2, 0.8, -0.6, 1.1, -0.4, 0.7, -0.9, 0.4, -0.3, 1.0, -0.7, 0.2];
  const noiseScale = 1.5 * (1 - Math.abs(rho));
  return xs.map((x, index) => ({ x, y: shift + rho * x + shocks[index] * noiseScale }));
}

function drawBivariat(progress = 1) {
  const rho = Number(document.getElementById('g_biv_rho')?.value || 0.6);
  const shift = Number(document.getElementById('g_biv_shift')?.value || 0);
  setValue('v_biv_rho', rho, 2);
  setValue('v_biv_shift', shift, 2);

  const plane = setupPlane(-4, 4.5, -4, 4.5);
  if (!plane) return;
  drawAxes(plane, 'x', 'y');
  const points = bivariatPoints(rho, shift);
  drawCurve(plane, (x) => shift + rho * x, plane.colors.accent, { progress });
  points.forEach((point) => drawPoint(plane, point.x, point.y, plane.colors.accent2, '', { radius: 4.3 }));
  drawTag(plane, 2.4, shift + rho * 2.4, 'lineare Tendenz', plane.colors.accent, 12, -10);
  drawLegend(plane, [
    { label: 'Streudiagramm', color: plane.colors.accent2, dot: true },
    { label: 'lineare Tendenz', color: plane.colors.accent }
  ]);

  const direction = rho > 0.15 ? 'positiv' : rho < -0.15 ? 'negativ' : 'nahe null';
  const strength = Math.abs(rho) > 0.7 ? 'stark' : Math.abs(rho) > 0.35 ? 'mittel' : 'schwach';
  setGraphInfo(buildGraphInfo({
    equation: String.raw`\left|r_{xy}\right| \leq 1`,
    rows: [
      { title: 'Richtung', body: `Die Punktewolke zeigt aktuell einen ${direction}en linearen Zusammenhang.` },
      { title: 'Stärke', body: `Mit \(r \approx ${rho.toFixed(2)}\) wirkt der Zusammenhang ${strength}; je enger die Punkte an der Tendenzlinie liegen, desto höher ist \(|r|\).` },
      { title: 'Prüfungslesart', body: 'Im Klausurmodus erst Richtung und Stärke nennen, dann klar sagen: Korrelation ist kein Kausalitätsbeweis.' }
    ]
  }));
}

function drawKonfidenzintervall(progress = 1) {
  const xbar = Number(document.getElementById('g_ci_xbar')?.value || 64);
  const sigma = Number(document.getElementById('g_ci_sigma')?.value || 12);
  const n = Number(document.getElementById('g_ci_n')?.value || 36);
  setValue('v_ci_xbar', xbar, 0);
  setValue('v_ci_sigma', sigma, 0);
  setValue('v_ci_n', n, 0);

  const se = sigma / Math.sqrt(n);
  const half = 1.96 * se;
  const halfBetter = 1.96 * sigma / Math.sqrt(2 * n);
  const plane = setupPlane(30, 95, 0, 2.4);
  if (!plane) return;
  drawAxes(plane, 'Parameterwert', 'Intervall', 6, 4);

  drawLineSegment(plane, xbar - half, 1.6, xbar + half, 1.6, plane.colors.accent, { lineWidth: 4 });
  drawLineSegment(plane, xbar - halfBetter, 0.9, xbar + halfBetter, 0.9, plane.colors.accent2, { lineWidth: 4 });
  drawPoint(plane, xbar, 1.6, plane.colors.warn, '\\bar{x}', { dy: -16 });
  drawPoint(plane, xbar, 0.9, plane.colors.accent2, '2n', { dy: 18, dx: 10 });
  drawTag(plane, xbar + half, 1.6, '95%-KI', plane.colors.accent, 12, -8);
  drawLegend(plane, [
    { label: 'aktuelles 95%-Intervall', color: plane.colors.accent },
    { label: 'Vergleich bei doppeltem n', color: plane.colors.accent2 },
    { label: 'Punktschätzer', color: plane.colors.warn, dot: true }
  ]);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`\bar{x} \pm 1.96 \cdot \frac{s}{\sqrt{n}}`,
    rows: [
      { title: 'Punktschätzer', body: `Der Mittelpunkt des Intervalls ist der Schätzwert \(\bar{x} = ${xbar.toFixed(0)}\).` },
      { title: 'Präzision', body: `Bei \(s = ${sigma.toFixed(0)}\) und \(n = ${n.toFixed(0)}\) beträgt die Halbbreite aktuell ungefähr ${half.toFixed(2)}; mit größerer Stichprobe schrumpft das Intervall sichtbar.` },
      { title: 'Prüfungslesart', body: 'Das Intervall bewertet die Präzision des Schätzers, nicht die Wahrscheinlichkeit, dass der Parameter “drin liegt”.' }
    ]
  }));
}

function regressionPoints(beta0, beta1, noise) {
  const xs = [0.8, 1.4, 2.1, 2.8, 3.6, 4.4, 5.3, 6.1, 7.0, 7.8, 8.6];
  const shocks = [-1.1, 0.8, -0.4, 1.2, -0.7, 0.5, -0.9, 0.3, 0.7, -0.6, 0.2];
  return xs.map((x, index) => ({ x, y: beta0 + beta1 * x + shocks[index] * noise }));
}

function drawRegression(progress = 1) {
  const beta0 = Number(document.getElementById('g_reg_b0')?.value || 2);
  const beta1 = Number(document.getElementById('g_reg_b1')?.value || 1.1);
  const noise = Number(document.getElementById('g_reg_noise')?.value || 0.9);
  setValue('v_reg_b0', beta0, 1);
  setValue('v_reg_b1', beta1, 2);
  setValue('v_reg_noise', noise, 2);

  const plane = setupPlane(0, 10, 0, 18);
  if (!plane) return;
  drawAxes(plane, 'x', 'y');
  const points = regressionPoints(beta0, beta1, noise);
  drawCurve(plane, (x) => beta0 + beta1 * x, plane.colors.accent, { progress });
  points.forEach((point) => drawPoint(plane, point.x, point.y, plane.colors.accent2, '', { radius: 4.1 }));
  drawTag(plane, 7.2, beta0 + beta1 * 7.2, '\\hat{y}=\\hat{\\beta}_0+\\hat{\\beta}_1x', plane.colors.accent, 12, -12);
  drawLegend(plane, [
    { label: 'Beobachtungen', color: plane.colors.accent2, dot: true },
    { label: 'geschätzte Gerade', color: plane.colors.accent }
  ]);

  const fitSignal = Math.abs(beta1) / (Math.abs(beta1) + noise);
  setGraphInfo(buildGraphInfo({
    equation: String.raw`\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x`,
    rows: [
      { title: 'Steigung', body: `Eine zusätzliche Einheit \(x\) verändert den erwarteten Wert von \(y\) um ungefähr \(\hat{\\beta}_1 = ${beta1.toFixed(2)}\).` },
      { title: 'Streuung', body: `Je größer die Reststreuung (${noise.toFixed(2)}), desto breiter liegt die Datenwolke um die Gerade und desto unsicherer wird Inferenz über die Steigung.` },
      { title: 'Prüfungsfokus', body: `Hier ist das Modellbild ${fitSignal > 0.6 ? 'relativ klar' : 'nur mäßig klar'}: Steigung in Sprache übersetzen, dann Signifikanz und Modellgüte getrennt deuten.` }
    ]
  }));
}

function drawDiagnostik(progress = 1) {
  const beta1 = Number(document.getElementById('g_diag_b1')?.value || 1.1);
  const hetero = Number(document.getElementById('g_diag_hetero')?.value || 0.45);
  const x0 = Number(document.getElementById('g_diag_x0')?.value || 8);
  const beta0 = 2;
  setValue('v_diag_b1', beta1, 2);
  setValue('v_diag_hetero', hetero, 2);
  setValue('v_diag_x0', x0, 1);

  const plane = setupPlane(0, 10.5, 0, 20);
  if (!plane) return;
  drawAxes(plane, 'x', 'y');

  const xs = [0.8, 1.5, 2.3, 3.1, 4.0, 4.8, 5.6, 6.5, 7.4, 8.2, 9.1];
  const shocks = [-1.1, 0.7, -0.5, 1.0, -0.7, 0.4, -1.0, 0.8, -0.6, 1.1, -0.2];
  const spreadAt = (x) => 0.6 + hetero * x * 0.28;
  const points = xs.map((x, index) => ({ x, y: beta0 + beta1 * x + shocks[index] * spreadAt(x) }));

  drawCurve(plane, (x) => beta0 + beta1 * x, plane.colors.accent, { progress });
  drawCurve(plane, (x) => beta0 + beta1 * x + 1.96 * spreadAt(x), withAlpha(plane.colors.accent2, 0.9), { dash: [6, 5], progress });
  drawCurve(plane, (x) => beta0 + beta1 * x - 1.96 * spreadAt(x), withAlpha(plane.colors.accent2, 0.9), { dash: [6, 5], progress });
  points.forEach((point) => drawPoint(plane, point.x, point.y, plane.colors.accent2, '', { radius: 4.1 }));

  const yHat = beta0 + beta1 * x0;
  const half = 1.96 * spreadAt(x0);
  drawLineSegment(plane, x0, yHat - half, x0, yHat + half, plane.colors.warn, { lineWidth: 2.4 });
  drawPoint(plane, x0, yHat, plane.colors.warn, 'Prognose', { dx: 12, dy: -12 });
  drawLegend(plane, [
    { label: 'geschätzte Gerade', color: plane.colors.accent },
    { label: 'Streuungsband / Prognoseintervall', color: plane.colors.accent2, dash: [6, 5] },
    { label: 'Prognosepunkt', color: plane.colors.warn, dot: true }
  ]);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`\hat{y}(x_0) \pm 1.96 \cdot \widehat{\sigma}(x_0)`,
    rows: [
      { title: 'Diagnostik', body: `Mit Heteroskedastizität ${hetero > 0.35 ? 'nimmt die Streuung sichtbar mit \(x\) zu' : 'bleibt die Streuung relativ konstant'}. Das ist die zentrale Residuenlesart.` },
      { title: 'Prognose', body: `Für \(x_0 = ${x0.toFixed(1)}\) liegt die Punktprognose bei etwa ${yHat.toFixed(2)}; das relevante Prüfungsobjekt ist aber das Intervall um diesen Wert.` },
      { title: 'Prüfungsfokus', body: 'Diagnostik fragt nach Muster der Reststreuung, Prognose nach Unsicherheit einzelner Vorhersagen — das sind zwei verschiedene Aussagen.' }
    ]
  }));
}

function initGraph(type, animate = true) {
  const renderers = {
    bivariat: drawBivariat,
    schaetzen_eigenschaften_intervalle: drawKonfidenzintervall,
    regression_schaetzung_inferenz: drawRegression,
    regression_diagnostik_prognose: drawDiagnostik
  };
  const drawFn = renderers[type];
  if (!drawFn) return;
  if (animate) animateGraph(drawFn);
  else drawFn(1);
}

export {
  initGraph
};
