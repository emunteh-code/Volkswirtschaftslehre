import GraphEngine from './graphEngine.js';
import { formalizeMarkupString } from '../utils/formalMath.js';
import { renderMath } from '../utils/mathjax.js';

let _rafId = null;

function animateGraph(drawFn) {
  if (_rafId) {
    cancelAnimationFrame(_rafId);
    _rafId = null;
  }
  const start = performance.now();
  const duration = 420;
  function step(now) {
    const raw = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - raw, 3);
    drawFn(eased);
    if (raw < 1) _rafId = requestAnimationFrame(step);
  }
  _rafId = requestAnimationFrame(step);
}

function withAlpha(color, alpha) {
  if (!color) return `rgba(0,0,0,${alpha})`;
  const hex = color.trim();
  if (hex.startsWith('#')) {
    const raw = hex.slice(1);
    const value = raw.length === 3 ? raw.split('').map((char) => char + char).join('') : raw;
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  const rgb = hex.match(/\d+(?:\.\d+)?/g);
  if (rgb && rgb.length >= 3) {
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
  }
  return color;
}

function palette() {
  const s = getComputedStyle(document.body);
  const pick = (name, fallback) => s.getPropertyValue(name).trim() || fallback;
  return {
    bg: pick('--bg', '#f2f2f7'),
    surface: pick('--surface', '#ffffff'),
    grid: pick('--border', '#d1d1d6'),
    axis: pick('--muted', '#6c6c70'),
    text: pick('--text', '#1c1c1e'),
    blue: pick('--accent', '#2c6fba'),
    red: pick('--accent3', '#c0392b'),
    magenta: pick('--math-ink', '#d81f74'),
    green: pick('--semantic-green', '#2d8659'),
    orange: pick('--sys-orange', '#cf7b2a'),
    neutral: pick('--nav-active-text', '#244a72')
  };
}

function readValue(id, fallback) {
  const input = document.getElementById(id);
  if (!input) return fallback;
  return Number(input.value);
}

function writeValue(id, value, digits = 2) {
  const target = document.getElementById(id);
  if (!target) return;
  target.textContent = Number(value).toFixed(digits);
}

function setGraphInfo(html) {
  const info = document.getElementById('graph_info');
  if (!info) return;
  info.innerHTML = formalizeMarkupString(html);
  if (typeof window.__semanticizeElementContent === 'function') {
    window.__semanticizeElementContent(info);
  }
  renderMath(info);
}

function buildGraphInfo({ label = 'Graph-Interpretation', equation = '', rows = [] }) {
  const rowMarkup = rows
    .map(
      ({ head, body }) => `
        <div class="gi-row">
          <div class="gi-row-head">${head}</div>
          <div class="gi-row-body">${body}</div>
        </div>`
    )
    .join('');

  return `
    <span class="gi-label">${label}</span>
    ${equation ? `<div class="gi-eq">${equation}</div>` : ''}
    ${rows.length ? `<div class="gi-list">${rowMarkup}</div>` : ''}
  `;
}

function buildPlot(ctx, w, h, {
  xmin,
  xmax,
  ymin,
  ymax,
  xLabel,
  yLabel,
  xTicks = 5,
  yTicks = 5
}) {
  const col = palette();
  const pad = { left: 78, right: 34, top: 40, bottom: 68 };
  const pw = w - pad.left - pad.right;
  const ph = h - pad.top - pad.bottom;
  const sx = (x) => pad.left + ((x - xmin) / (xmax - xmin)) * pw;
  const sy = (y) => h - pad.bottom - ((y - ymin) / (ymax - ymin)) * ph;

  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  ctx.setLineDash([4, 5]);
  ctx.strokeStyle = withAlpha(col.grid, 0.8);
  ctx.lineWidth = 1;
  ctx.font = `12px ${col.fontBody || '-apple-system, sans-serif'}`;
  ctx.fillStyle = col.axis;

  for (let i = 0; i <= xTicks; i += 1) {
    const x = xmin + ((xmax - xmin) * i) / xTicks;
    const cx = sx(x);
    ctx.beginPath();
    ctx.moveTo(cx, pad.top);
    ctx.lineTo(cx, h - pad.bottom);
    ctx.stroke();
    ctx.textAlign = 'center';
    ctx.fillText(Number.isInteger(x) ? String(x) : x.toFixed(1), cx, h - pad.bottom + 18);
  }

  for (let i = 0; i <= yTicks; i += 1) {
    const y = ymin + ((ymax - ymin) * i) / yTicks;
    const cy = sy(y);
    ctx.beginPath();
    ctx.moveTo(pad.left, cy);
    ctx.lineTo(w - pad.right, cy);
    ctx.stroke();
    ctx.textAlign = 'right';
    ctx.fillText(Number.isInteger(y) ? String(y) : y.toFixed(1), pad.left - 8, cy + 4);
  }
  ctx.setLineDash([]);

  ctx.strokeStyle = col.axis;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, h - pad.bottom);
  ctx.lineTo(w - pad.right, h - pad.bottom);
  ctx.stroke();

  ctx.fillStyle = col.text;
  ctx.font = `bold 14px ${col.fontBody || '-apple-system, sans-serif'}`;
  ctx.textAlign = 'center';
  ctx.fillText(xLabel, pad.left + pw / 2, h - 22);
  ctx.save();
  ctx.translate(20, pad.top + ph / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();

  return { sx, sy, pad };
}

function drawLegend(ctx, entries, w) {
  const col = palette();
  const x = w - 230;
  const y = 54;
  const lineHeight = 20;
  const width = 200;
  const height = entries.length * lineHeight + 16;

  ctx.fillStyle = withAlpha(col.surface, 0.92);
  ctx.strokeStyle = withAlpha(col.grid, 0.85);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, 10);
  ctx.fill();
  ctx.stroke();

  ctx.font = `12px ${col.fontBody || '-apple-system, sans-serif'}`;
  ctx.textBaseline = 'middle';

  entries.forEach((entry, index) => {
    const cy = y + 12 + lineHeight * index + 8;
    ctx.strokeStyle = entry.color;
    ctx.fillStyle = entry.color;
    ctx.lineWidth = entry.lw || 2.5;
    if (entry.dash) ctx.setLineDash(entry.dash);
    ctx.beginPath();
    ctx.moveTo(x + 12, cy);
    ctx.lineTo(x + 34, cy);
    ctx.stroke();
    ctx.setLineDash([]);
    if (entry.dot) {
      ctx.beginPath();
      ctx.arc(x + 23, cy, 4.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = col.text;
    ctx.textAlign = 'left';
    ctx.fillText(entry.label, x + 42, cy + 0.5);
  });
}

function drawLine(ctx, points, { color, lw = 2.5, dash = [] }) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lw;
  ctx.setLineDash(dash);
  ctx.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
  ctx.setLineDash([]);
}

function drawLabel(ctx, x, y, text, color, align = 'left') {
  const col = palette();
  ctx.font = `bold 12px ${col.fontBody || '-apple-system, sans-serif'}`;
  const width = ctx.measureText(text).width + 10;
  const boxX = align === 'right' ? x - width : x;
  const boxY = y - 18;
  ctx.fillStyle = withAlpha(col.surface, 0.94);
  ctx.strokeStyle = withAlpha(color, 0.35);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(boxX, boxY, width, 18, 7);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, boxX + 5, boxY + 9.5);
}

function drawDot(ctx, x, y, color, r = 4.5) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
}

function drawOLS(progress = 1) {
  writeValue('v_ols_noise', readValue('g_ols_noise', 1), 1);
  writeValue('v_ols_slope', readValue('g_ols_slope', 0.9), 2);

  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = palette();
  const slope = readValue('g_ols_slope', 0.9);
  const noise = readValue('g_ols_noise', 1.0);
  const { sx, sy } = buildPlot(ctx, w, h, { xmin: 0, xmax: 10, ymin: 0, ymax: 12, xLabel: 'Regressor x', yLabel: 'Zielvariable y' });

  const points = Array.from({ length: 12 }, (_, i) => {
    const x = 0.8 + i * 0.75;
    const yHat = 1.2 + slope * x;
    const y = yHat + noise * Math.sin(i * 1.35) * 0.8;
    return { x, y, yHat };
  });

  points.forEach((point, index) => {
    const px = sx(point.x);
    const py = sy(point.y);
    const pyHat = sy(point.yHat);
    ctx.strokeStyle = withAlpha(col.orange, 0.6);
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(px, pyHat);
    ctx.lineTo(px, py);
    ctx.stroke();
    drawDot(ctx, px, py, withAlpha(col.neutral, 0.92), 4);
    if (index === 7) drawLabel(ctx, px + 8, py - 6, 'Residuum', col.orange);
  });

  drawLine(ctx, [[sx(0.2), sy(1.2 + slope * 0.2)], [sx(9.6), sy(1.2 + slope * 9.6)]], { color: col.blue, lw: 3.2 });
  drawLabel(ctx, sx(8.2), sy(1.2 + slope * 8.2) - 8, 'OLS-Gerade', col.blue, 'right');

  drawLegend(ctx, [
    { color: col.blue, label: 'Fitted line' },
    { color: col.orange, label: 'Residuen', lw: 1.6 },
    { color: col.neutral, label: 'Beobachtungen', dot: true }
  ], w);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`$\hat{y}_i = \hat{\beta}_0 + \hat{\beta}_1 x_i,\quad \min \sum_i \hat{u}_i^2$`,
    rows: [
      {
        head: 'Was du siehst',
        body: String.raw`Die blaue Linie ist die geschätzte OLS-Gerade, die orange markierten vertikalen Strecken sind die Residuen. OLS minimiert genau die Summe der quadrierten Residuen $\sum_i \hat{u}_i^2$.`
      },
      {
        head: 'Interpretation',
        body: String.raw`Größere Fehlerstreuung $\sigma_u$ macht die Punktwolke breiter und die Anpassung weniger präzise; die Steigung $\beta_1$ kippt die Regressionslinie.`
      }
    ]
  }));
}

function drawOVB(progress = 1) {
  writeValue('v_ovb_gap', readValue('g_ovb_gap', 1.8), 1);
  writeValue('v_ovb_corr', readValue('g_ovb_corr', 0.55), 2);

  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = palette();
  const gap = readValue('g_ovb_gap', 1.8);
  const corr = readValue('g_ovb_corr', 0.55);
  const { sx, sy } = buildPlot(ctx, w, h, { xmin: 0, xmax: 10, ymin: 0, ymax: 12, xLabel: 'x (beobachteter Regressor)', yLabel: 'y' });

  const groupA = Array.from({ length: 8 }, (_, i) => {
    const x = 0.8 + i * 0.7;
    return { x, y: 1.1 + 0.7 * x + 0.3 * Math.cos(i) };
  });
  const groupB = Array.from({ length: 8 }, (_, i) => {
    const x = 1.2 + i * 0.7 + corr * 2.4;
    return { x, y: 1.1 + 0.7 * x + gap + 0.35 * Math.sin(i) };
  });

  drawLine(ctx, [[sx(0.4), sy(1.1 + 0.7 * 0.4)], [sx(8.8), sy(1.1 + 0.7 * 8.8)]], { color: col.blue, lw: 2.6, dash: [7, 5] });
  drawLine(ctx, [[sx(1.2), sy(1.1 + 0.7 * 1.2 + gap)], [sx(9.5), sy(1.1 + 0.7 * 9.5 + gap)]], { color: col.green, lw: 2.6, dash: [7, 5] });
  const pooledIntercept = 1.1 + 0.45 * gap;
  const pooledSlope = 0.7 + 0.18 * corr;
  drawLine(ctx, [[sx(0.6), sy(pooledIntercept + pooledSlope * 0.6)], [sx(9.4), sy(pooledIntercept + pooledSlope * 9.4)]], { color: col.magenta, lw: 3.1 });

  groupA.forEach((p) => drawDot(ctx, sx(p.x), sy(p.y), withAlpha(col.blue, 0.9), 4));
  groupB.forEach((p) => drawDot(ctx, sx(p.x), sy(p.y), withAlpha(col.green, 0.9), 4));

  drawLabel(ctx, sx(7.9), sy(1.1 + 0.7 * 7.9) - 8, 'wahre Linie z=0', col.blue, 'right');
  drawLabel(ctx, sx(7.4), sy(1.1 + 0.7 * 7.4 + gap) - 6, 'wahre Linie z=1', col.green, 'right');
  drawLabel(ctx, sx(8.7), sy(pooledIntercept + pooledSlope * 8.7) - 8, 'pooled OLS', col.magenta, 'right');

  drawLegend(ctx, [
    { color: col.blue, label: 'Gruppe z=0', dot: true },
    { color: col.green, label: 'Gruppe z=1', dot: true },
    { color: col.magenta, label: 'verzerrte Pooled-Linie' }
  ], w);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`$y_i = \beta_0 + \beta_1 x_i + \beta_2 z_i + u_i$`,
    rows: [
      {
        head: 'Was du siehst',
        body: String.raw`Die blauen und grünen Punkte folgen innerhalb ihrer Gruppe derselben strukturellen Beziehung, liegen aber auf unterschiedlichem Niveau. Wird die ausgelassene Variable $z$ nicht kontrolliert, kippt die magenta Pooled-Linie.`
      },
      {
        head: 'Interpretation',
        body: String.raw`Omitted variable bias entsteht, wenn die ausgelassene Variable $z$ das Ergebnis $y$ beeinflusst und zugleich mit dem beobachteten Regressor $x$ zusammenhängt.`
      }
    ]
  }));
}

function drawPrediction(progress = 1) {
  writeValue('v_pred_x0', readValue('g_pred_x0', 7.5), 1);
  writeValue('v_pred_sigma', readValue('g_pred_sigma', 1.0), 1);

  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = palette();
  const x0 = readValue('g_pred_x0', 7.5);
  const sigma = readValue('g_pred_sigma', 1.0);
  const { sx, sy } = buildPlot(ctx, w, h, { xmin: 0, xmax: 10, ymin: 0, ymax: 13, xLabel: 'Regressor x', yLabel: 'y' });

  const beta0 = 1.6;
  const beta1 = 0.85;
  const ciWidth = 0.5 + 0.06 * Math.abs(x0 - 5);
  const piWidth = ciWidth + sigma * 1.4;

  const scatter = Array.from({ length: 11 }, (_, i) => {
    const x = 0.8 + i * 0.8;
    const mu = beta0 + beta1 * x;
    const y = mu + sigma * Math.sin(i * 1.1) * 0.7;
    return { x, y };
  });
  scatter.forEach((p) => drawDot(ctx, sx(p.x), sy(p.y), withAlpha(col.neutral, 0.88), 4));

  const linePts = Array.from({ length: 80 }, (_, i) => {
    const x = 0.2 + i * 0.12;
    return [sx(x), sy(beta0 + beta1 * x)];
  });
  drawLine(ctx, linePts, { color: col.blue, lw: 3 });

  const bandPath = (widthFn) => {
    const upper = [];
    const lower = [];
    for (let i = 0; i <= 80; i += 1) {
      const x = 0.2 + i * 0.12;
      const mu = beta0 + beta1 * x;
      const width = widthFn(x);
      upper.push([sx(x), sy(mu + width)]);
      lower.push([sx(x), sy(mu - width)]);
    }
    return { upper, lower };
  };
  const ciBand = bandPath((x) => 0.35 + 0.05 * Math.abs(x - 5));
  const piBand = bandPath((x) => 0.95 + 0.05 * Math.abs(x - 5) + sigma * 0.35);

  ctx.fillStyle = withAlpha(col.orange, 0.12);
  ctx.beginPath();
  [...piBand.upper, ...piBand.lower.reverse()].forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = withAlpha(col.green, 0.18);
  ctx.beginPath();
  [...ciBand.upper, ...ciBand.lower.reverse()].forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
  ctx.closePath();
  ctx.fill();

  const y0 = beta0 + beta1 * x0;
  ctx.strokeStyle = withAlpha(col.magenta, 0.9);
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(sx(x0), sy(0));
  ctx.lineTo(sx(x0), sy(12.6));
  ctx.stroke();
  ctx.setLineDash([]);
  drawDot(ctx, sx(x0), sy(y0), col.magenta, 5.2);
  drawLabel(ctx, sx(x0) + 8, sy(y0) - 8, 'E(y₀|x₀)', col.magenta);
  drawLabel(ctx, sx(8.6), sy(beta0 + beta1 * 8.6) + 26, 'PI', col.orange, 'right');
  drawLabel(ctx, sx(8.6), sy(beta0 + beta1 * 8.6) - 12, 'CI', col.green, 'right');

  drawLegend(ctx, [
    { color: col.blue, label: 'Regressionslinie' },
    { color: col.green, label: 'Konfidenzband' },
    { color: col.orange, label: 'Prognoseband' },
    { color: col.magenta, label: 'Punkt x₀', dot: true }
  ], w);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`$\hat{y}_0 = x_0' \hat{\beta}$`,
    rows: [
      {
        head: 'Mittelwertsprognose',
        body: String.raw`Der magenta Punkt markiert $\hat{y}_0 = x_0' \hat{\beta}$ als geschätzten bedingten Mittelwert bei $x_0$.`
      },
      {
        head: 'Intervalllogik',
        body: String.raw`Das grüne Band beschreibt die Unsicherheit über $E(y_0 \mid x_0)$, das orange Band ist breiter, weil für eine konkrete neue Beobachtung zusätzlich der neue Fehlerterm $u_0$ hinzukommt.`
      }
    ]
  }));
}

function normalDensity(x, mean, sd) {
  return (1 / (sd * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mean) / sd) ** 2);
}

function drawAsymptotic(progress = 1) {
  writeValue('v_asym_n', readValue('g_asym_n', 100), 0);
  writeValue('v_asym_bias', readValue('g_asym_bias', 0.1), 2);

  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = palette();
  const n = readValue('g_asym_n', 100);
  const bias = readValue('g_asym_bias', 0.1);
  const meanSmall = 0.8 + bias;
  const sdSmall = 0.42;
  const meanLarge = 0.8 + bias / Math.sqrt(n / 25);
  const sdLarge = 0.42 / Math.sqrt(n / 25);

  const { sx, sy } = buildPlot(ctx, w, h, { xmin: -0.2, xmax: 1.8, ymin: 0, ymax: 2.6, xLabel: 'möglicher Wert von β̂', yLabel: 'Dichte' });

  const curve = (mean, sd, color, label, dash = []) => {
    const pts = [];
    for (let x = -0.2; x <= 1.8; x += 0.01) {
      pts.push([sx(x), sy(normalDensity(x, mean, sd))]);
    }
    drawLine(ctx, pts, { color, lw: 3, dash });
    drawLabel(ctx, sx(mean + sd * 0.8), sy(normalDensity(mean + sd * 0.8, mean, sd)) - 10, label, color, 'right');
  };

  ctx.strokeStyle = withAlpha(col.neutral, 0.9);
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 5]);
  ctx.beginPath();
  ctx.moveTo(sx(0.8), sy(0));
  ctx.lineTo(sx(0.8), sy(2.5));
  ctx.stroke();
  ctx.setLineDash([]);
  drawLabel(ctx, sx(0.8) + 8, sy(2.3), 'wahrer β', col.neutral);

  curve(meanSmall, sdSmall, col.orange, 'kleines n');
  curve(meanLarge, Math.max(sdLarge, 0.08), col.magenta, 'großes n');

  drawLegend(ctx, [
    { color: col.orange, label: 'kleine Stichprobe' },
    { color: col.magenta, label: 'große Stichprobe' },
    { color: col.neutral, label: 'wahrer Parameter' }
  ], w);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`$\hat{\beta} \overset{d}{\longrightarrow} \mathcal{N}\!\left(\beta,\; \frac{V}{n}\right)$`,
    rows: [
      {
        head: 'Asymptotische Idee',
        body: String.raw`Mit wachsendem $n$ wird die Stichprobenverteilung von $\hat{\beta}$ enger und glatter.`
      },
      {
        head: 'Pädagogischer Punkt',
        body: String.raw`Das magenta Dichteband konzentriert sich stärker um den wahren Parameter. Ein systematischer Bias verschwindet aber nicht einfach, wenn das Modell falsch identifiziert ist.`
      }
    ]
  }));
}

function drawVIF(progress = 1) {
  writeValue('v_vif_rho', readValue('g_vif_rho', 0.82), 2);

  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = palette();
  const rho = readValue('g_vif_rho', 0.82);
  const { sx, sy } = buildPlot(ctx, w, h, { xmin: 0, xmax: 10, ymin: 0, ymax: 10, xLabel: 'Regressor x₁', yLabel: 'Regressor x₂' });

  const points = Array.from({ length: 18 }, (_, i) => {
    const x = 0.8 + i * 0.5;
    const y = rho * x + (1 - rho) * (5 + Math.sin(i) * 3);
    return { x, y };
  });
  points.forEach((p) => drawDot(ctx, sx(p.x), sy(p.y), withAlpha(col.blue, 0.9), 4));

  drawLine(ctx, [[sx(0.6), sy(rho * 0.6 + (1 - rho) * 5)], [sx(9.2), sy(rho * 9.2 + (1 - rho) * 5)]], { color: col.magenta, lw: 3 });
  drawLabel(ctx, sx(8.9), sy(rho * 8.9 + (1 - rho) * 5) - 8, 'nahe lineare Abhängigkeit', col.magenta, 'right');

  const vif = 1 / Math.max(1e-6, 1 - rho * rho);
  drawLegend(ctx, [
    { color: col.blue, label: 'beobachtete Regressoren', dot: true },
    { color: col.magenta, label: 'gemeinsamer Trend' }
  ], w);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`$VIF_j = \frac{1}{1-R_j^2} \approx ${vif.toFixed(2)}$`,
    rows: [
      {
        head: 'Was du siehst',
        body: String.raw`Wenn $x_1$ und $x_2$ fast dieselbe Bewegung tragen, bleibt für den partiellen Effekt nur wenig eigenständige Variation übrig.`
      },
      {
        head: 'Diagnose',
        body: String.raw`Bei der eingestellten Korrelation gilt ungefähr $VIF \approx ${vif.toFixed(2)}$. Hohe Werte blähen Standardfehler auf, ohne automatisch Bias zu erzeugen.`
      }
    ]
  }));
}

function drawFWL(progress = 1) {
  writeValue('v_fwl_strength', readValue('g_fwl_strength', 0.6), 2);
  writeValue('v_fwl_beta', readValue('g_fwl_beta', 0.9), 2);

  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = palette();
  const strength = readValue('g_fwl_strength', 0.6);
  const beta = readValue('g_fwl_beta', 0.9);
  const { sx, sy } = buildPlot(ctx, w, h, { xmin: -4, xmax: 4, ymin: -4, ymax: 5, xLabel: 'bereinigtes x̃₁', yLabel: 'bereinigtes ỹ' });

  const points = Array.from({ length: 18 }, (_, i) => {
    const x = -3.4 + i * 0.4;
    const y = beta * x + strength * Math.sin(i * 0.7);
    return { x, y };
  });
  points.forEach((p) => drawDot(ctx, sx(p.x), sy(p.y), withAlpha(col.blue, 0.9), 4));
  drawLine(ctx, [[sx(-3.6), sy(beta * -3.6)], [sx(3.6), sy(beta * 3.6)]], { color: col.magenta, lw: 3 });
  drawLabel(ctx, sx(3.4), sy(beta * 3.4) - 8, 'Residuen-Regression', col.magenta, 'right');

  drawLegend(ctx, [
    { color: col.blue, label: 'bereinigte Beobachtungen', dot: true },
    { color: col.magenta, label: 'partielle Steigung β₁' }
  ], w);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`$\tilde{y} = \beta_1 \tilde{x}_1 + \tilde{u}$`,
    rows: [
      {
        head: 'FWL-Logik',
        body: String.raw`Nach Herausrechnung der übrigen Regressoren bleibt nur der Zusammenhang zwischen $\tilde{x}_1$ und $\tilde{y}$ übrig.`
      },
      {
        head: 'Interpretation',
        body: String.raw`Die Steigung der magenta Linie entspricht genau dem Koeffizienten von $x_1$ im multiplen Ausgangsmodell.`
      }
    ]
  }));
}

function drawHeterosk(progress = 1) {
  writeValue('v_het_strength', readValue('g_het_strength', 0.9), 1);

  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = palette();
  const lambda = readValue('g_het_strength', 0.9);
  const { sx, sy } = buildPlot(ctx, w, h, { xmin: 0, xmax: 10, ymin: -4, ymax: 4, xLabel: 'fitted values', yLabel: 'Residuen' });

  const points = Array.from({ length: 24 }, (_, i) => {
    const x = 0.7 + i * 0.37;
    const width = 0.4 + lambda * (x / 10) * 2.2;
    const y = Math.sin(i * 1.27) * width;
    return { x, y, width };
  });

  points.forEach((p) => drawDot(ctx, sx(p.x), sy(p.y), withAlpha(col.blue, 0.9), 4));

  drawLine(ctx, [[sx(0.4), sy(0.4 + lambda * 0.1)], [sx(9.7), sy(0.4 + lambda * 2.35)]], { color: col.red, lw: 2.2, dash: [6, 5] });
  drawLine(ctx, [[sx(0.4), sy(-(0.4 + lambda * 0.1))], [sx(9.7), sy(-(0.4 + lambda * 2.35))]], { color: col.red, lw: 2.2, dash: [6, 5] });
  drawLabel(ctx, sx(8.8), sy(2.5), 'Fan-Shape', col.red, 'right');

  drawLegend(ctx, [
    { color: col.blue, label: 'Residuen', dot: true },
    { color: col.red, label: 'zunehmende Streuung', dash: [6, 5], lw: 2.2 }
  ], w);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`$\operatorname{Var}(u_i \mid X_i) \neq \sigma^2$`,
    rows: [
      {
        head: 'Diagnosebild',
        body: String.raw`Die blaue Wolke öffnet sich nach rechts. Genau diese Fan-Shape ist das klassische visuelle Signal für Heteroskedastizität.`
      },
      {
        head: 'Folge',
        body: String.raw`OLS-Koeffizienten können unter Exogenität weiter sinnvoll sein, aber klassische Standardfehler werden unzuverlässig.`
      }
    ]
  }));
}

function drawAutocorrelation(progress = 1) {
  writeValue('v_auto_rho', readValue('g_auto_rho', 0.65), 2);

  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = palette();
  const rho = readValue('g_auto_rho', 0.65);
  const { sx, sy } = buildPlot(ctx, w, h, { xmin: 1, xmax: 20, ymin: -3.4, ymax: 3.4, xLabel: 'Zeit t', yLabel: 'Residuen ûₜ' });

  const series = [];
  let prev = -0.2;
  for (let t = 1; t <= 20; t += 1) {
    const shock = Math.sin(t * 1.13) * 0.85;
    const value = rho * prev + (1 - rho) * shock * 2.1;
    series.push({ t, value });
    prev = value;
  }

  drawLine(ctx, series.map((p) => [sx(p.t), sy(p.value)]), { color: col.blue, lw: 2.8 });
  series.forEach((p) => drawDot(ctx, sx(p.t), sy(p.value), withAlpha(col.blue, 0.92), 3.7));
  drawLine(ctx, [[sx(1), sy(0)], [sx(20), sy(0)]], { color: withAlpha(col.neutral, 0.65), lw: 1.2, dash: [5, 5] });
  drawLabel(ctx, sx(18.5), sy(series[18].value) - 10, 'serielle Runs', col.magenta, 'right');

  drawLegend(ctx, [
    { color: col.blue, label: 'Residuenverlauf', dot: true },
    { color: withAlpha(col.neutral, 0.65), label: 'Null-Linie', dash: [5, 5], lw: 1.2 }
  ], w);

  setGraphInfo(buildGraphInfo({
    equation: String.raw`$u_t = \rho u_{t-1} + \varepsilon_t$`,
    rows: [
      {
        head: 'Was du siehst',
        body: String.raw`Die Residuen wechseln bei hoher positiver Autokorrelation seltener abrupt das Vorzeichen und laufen in Blöcken über oder unter null.`
      },
      {
        head: 'Interpretation',
        body: String.raw`Positive serielle Abhängigkeit bedeutet, dass ein Fehler heute Information über den Fehler morgen enthält. Genau deshalb werden klassische Standardfehler in Zeitreihen oft zu optimistisch.`
      }
    ]
  }));
}

function initGraph(type, animate = true) {
  const fns = {
    ols_objective: drawOLS,
    endogeneity_ovb: drawOVB,
    prediction_intervals: drawPrediction,
    asymptotic_normality: drawAsymptotic,
    vif_collinearity: drawVIF,
    fwl_partial_regression: drawFWL,
    heteroskedasticity: drawHeterosk,
    autocorrelation: drawAutocorrelation
  };
  const fn = fns[type];
  if (!fn) return;
  if (animate) animateGraph(fn);
  else fn(1);
}

export {
  drawOLS,
  drawOVB,
  drawPrediction,
  drawAsymptotic,
  drawVIF,
  drawFWL,
  drawHeterosk,
  drawAutocorrelation,
  initGraph
};
