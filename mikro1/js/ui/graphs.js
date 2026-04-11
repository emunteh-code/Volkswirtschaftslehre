// ============================================================
// GRAPH DRAW FUNCTIONS — Mikroökonomik I
// Individual canvas draw functions for each interactive graph
// ============================================================

import GraphEngine from './graphEngine.js';
import { renderMath } from '../utils/mathjax.js';
import { formalizeMarkupString } from '../utils/formalMath.js';

// ── Animation state ────────────────────────────────────────
let _rafId = null;

/**
 * Run drawFn(progress) over 400 ms with ease-out cubic.
 * Cancels any in-flight animation before starting.
 */
function animateGraph(drawFn) {
  if (_rafId) { cancelAnimationFrame(_rafId); _rafId = null; }
  const t0 = performance.now();
  const DURATION = 400;
  function step(now) {
    const raw  = Math.min((now - t0) / DURATION, 1);
    const ease = 1 - Math.pow(1 - raw, 3); // cubic ease-out
    drawFn(ease);
    if (raw < 1) _rafId = requestAnimationFrame(step);
    else _rafId = null;
  }
  _rafId = requestAnimationFrame(step);
}

// ── Tooltip ────────────────────────────────────────────────
let _tooltipEl   = null;
let _tooltipPts  = [];   // [{cx, cy, html}] — canvas display coords

function ensureTooltip() {
  if (_tooltipEl) return _tooltipEl;
  _tooltipEl = document.createElement('div');
  _tooltipEl.id        = 'graph-tooltip';
  _tooltipEl.className = 'graph-tooltip';
  _tooltipEl.setAttribute('role', 'tooltip');
  _tooltipEl.setAttribute('aria-live', 'polite');
  document.body.appendChild(_tooltipEl);
  return _tooltipEl;
}

function showTooltipNear(pageX, pageY, html) {
  const tip = ensureTooltip();
  tip.innerHTML = html;
  tip.classList.add('visible');
  const tx = Math.min(pageX + 14, window.innerWidth  - 230);
  const ty = Math.max(pageY - 10,  10);
  tip.style.left = tx + 'px';
  tip.style.top  = ty + 'px';
}

function hideTooltip() {
  if (_tooltipEl) _tooltipEl.classList.remove('visible');
}

function setGraphInfo(html) {
  const info = document.getElementById('graph_info');
  if (!info) return;
  info.innerHTML = formalizeMarkupString(html);
  if (typeof window !== 'undefined') {
    if (typeof window.__semanticizeElementContent === 'function') {
      window.__semanticizeElementContent(info);
    }
    Promise.resolve(renderMath(info)).finally(() => {
      if (typeof window.__decorateSemanticMathSurfaces === 'function') {
        window.__decorateSemanticMathSurfaces();
      }
    });
  }
}

function buildGraphInfo({ label = 'Interpretation', equation = '', rows = [] }) {
  const parts = [`<span class="gi-label">${label}</span>`];
  if (equation) {
    parts.push(`<div class="gi-eq">${equation}</div>`);
  }
  if (rows.length) {
    parts.push('<div class="gi-list">');
    rows.forEach((row) => {
      if (!row || !row.body) return;
      parts.push('<div class="gi-row">');
      if (row.title) {
        parts.push(`<div class="gi-row-head">${row.title}</div>`);
      }
      parts.push(`<div class="gi-row-body">${row.body}</div>`);
      parts.push('</div>');
    });
    parts.push('</div>');
  }
  return parts.join('');
}

function drawRoundedRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawLabelTag(ctx, text, x, y, color, options = {}) {
  const _cs = getComputedStyle(document.body);
  const {
    fontFamily = _cs.getPropertyValue('--font-body').trim() || _cs.fontFamily || 'system-ui, sans-serif',
    fontSize = 11,
    fontWeight = 700,
    align = 'left',
    valign = 'middle',
    paddingX = 8,
    paddingY = 6,
    lineGap = 2,
    radius = 8,
    bgColor = _cs.getPropertyValue('--card').trim() || '#1a1d21',
    borderColor = color,
    textColor = color
  } = options;

  const lines = Array.isArray(text) ? text : [text];
  ctx.save();
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  const widths = lines.map((line) => ctx.measureText(line).width);
  const textWidth = Math.max(...widths, 0);
  const lineHeight = Math.round(fontSize * 1.18);
  const boxWidth = textWidth + paddingX * 2;
  const boxHeight = lineHeight * lines.length + lineGap * (lines.length - 1) + paddingY * 2;

  let bx = x;
  if (align === 'center') bx -= boxWidth / 2;
  if (align === 'right') bx -= boxWidth;

  let by = y;
  if (valign === 'middle') by -= boxHeight / 2;
  if (valign === 'bottom') by -= boxHeight;

  ctx.fillStyle = bgColor;
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1.2;
  drawRoundedRectPath(ctx, bx, by, boxWidth, boxHeight, radius);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = textColor;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  lines.forEach((line, index) => {
    const lineY = by + paddingY + lineHeight / 2 + index * (lineHeight + lineGap);
    ctx.fillText(line, bx + boxWidth / 2, lineY);
  });
  ctx.restore();
}

function getCurveLabelPoint(axMax, utility, factor = 1.45) {
  let x = Math.sqrt(utility) * factor;
  let y = utility / x;
  const minV = axMax * 0.14;
  const maxV = axMax * 0.84;
  if (x < minV) x = minV;
  if (x > maxV) x = maxV;
  y = utility / x;
  if (y < minV) y = minV;
  if (y > maxV) y = maxV;
  return { x, y };
}

function registerTooltipPoints(canvas, points) {
  _tooltipPts = points;
  if (canvas._graphTooltipBound) return;
  canvas._graphTooltipBound = true;
  const RADIUS = 32; // px hit radius

  function check(canvasX, canvasY, pageX, pageY) {
    const rect = canvas.getBoundingClientRect();
    // canvasX/Y are already relative to canvas rect
    for (const pt of _tooltipPts) {
      const dx = canvasX - pt.cx;
      const dy = canvasY - pt.cy;
      if (Math.sqrt(dx * dx + dy * dy) < RADIUS) {
        showTooltipNear(pageX, pageY, pt.html);
        return;
      }
    }
    hideTooltip();
  }

  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    check(e.clientX - r.left, e.clientY - r.top, e.clientX, e.clientY);
  });
  canvas.addEventListener('touchstart', e => {
    const r = canvas.getBoundingClientRect();
    const t = e.touches[0];
    check(t.clientX - r.left, t.clientY - r.top, t.clientX, t.clientY);
  }, { passive: true });
  canvas.addEventListener('mouseleave', hideTooltip);
}

// ── Shared point-marker helper ─────────────────────────────
/**
 * Draw a filled circle with a theme-background border (lifts it off the curve).
 */
function drawDot(ctx, cx, cy, radius, fillColor, bgColor) {
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.strokeStyle = bgColor;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawRectIndifferenceCurve(ctx, sx, sy, xMax, yMax, utility, color, progress = 1) {
  const minX = Math.max(0.2, xMax * 0.02);
  const xStop = Math.max(minX, xMax * progress);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  let started = false;
  for (let x = minX; x <= xStop; x += xMax / 420) {
    const y = utility / x;
    if (y < minX || y > yMax * 1.05) continue;
    if (!started) {
      ctx.moveTo(sx(x), sy(y));
      started = true;
    } else {
      ctx.lineTo(sx(x), sy(y));
    }
  }
  ctx.stroke();
}

// ── Draw functions ─────────────────────────────────────────

function drawBudget(progress = 1) {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = ge.refreshColors();

  const mEl = document.getElementById('g_m');
  const p1El = document.getElementById('g_p1');
  const p2El = document.getElementById('g_p2');
  if (!mEl || !p1El || !p2El) return;
  const m  = +mEl.value;
  const p1 = +p1El.value;
  const p2 = +p2El.value;
  document.getElementById('v_m').textContent  = m;
  document.getElementById('v_p1').textContent = p1;
  document.getElementById('v_p2').textContent = p2;

  const x1max = m / p1, x2max = m / p2;
  const slope  = -(p1 / p2);
  const xMax = Math.max(10, x1max * 1.12);
  const yMax = Math.max(10, x2max * 1.28);
  const { sx, sy, fsBase, fsBold } = setupRectPlot(ge, w, h, ctx, xMax, yMax,
    'x₁ (Menge Gut 1)', 'x₂ (Menge Gut 2)');

  // Budget area fill (instant — appears immediately)
  ctx.fillStyle = col.budgetFill;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(0));
  ctx.lineTo(sx(x1max), sy(0));
  ctx.lineTo(sx(0), sy(x2max));
  ctx.closePath();
  ctx.fill();

  if (progress >= 0.55) {
    ctx.fillStyle = col.reference;
    ctx.font = `bold ${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('Budgetmenge B', sx(x1max * 0.2), sy(x2max * 0.36));
  }

  // Budget line — animated reveal left → right
  const x1end = x1max * progress;
  const x2end = x2max - (x2max / x1max) * x1end;
  ctx.strokeStyle = col.budgetBase;
  ctx.lineWidth   = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(x2max));
  ctx.lineTo(sx(x1end), sy(x2end));
  ctx.stroke();

  if (progress >= 0.84) {
    const labelX = x1max * 0.34;
    const labelY = x2max - (x2max / x1max) * labelX;
    drawLabelTag(ctx, 'Budgetgerade', sx(labelX) + 10, sy(labelY) - 18, col.budgetBase, {
      fontFamily: col.fontBody,
      fontSize: Math.max(11, fsBase - 1),
      bgColor: col.card,
      borderColor: col.budgetBase
    });
  }

  // Labels + dots — appear once line is nearly complete
  if (progress >= 0.9) {
    // y-intercept dot + label
    drawDot(ctx, sx(0), sy(x2max), 6, col.budgetBase, col.bg);
    ctx.fillStyle   = col.text;
    ctx.font        = `bold ${fsBold}px ${col.fontBody}`;
    ctx.textAlign   = 'right';
    ctx.fillText('m/p₂=' + x2max.toFixed(1), sx(0) - 10, sy(x2max) + 4);

    // x-intercept dot + label
    drawDot(ctx, sx(x1max), sy(0), 6, col.budgetBase, col.bg);
    ctx.fillStyle   = col.text;
    ctx.textAlign   = 'center';
    ctx.fillText('m/p₁=' + x1max.toFixed(1), sx(x1max), sy(0) + 28);
  }

  ge.drawLegend(ctx, w, [
    { color: col.budgetBase, label: 'Budgetgerade p₁x₁+p₂x₂=m' },
    { color: col.budgetBase, fill: col.budgetFill, label: 'Budgetmenge B (erreichbare Bündel)' },
    { color: col.reference,  label: `Steigung: −p₁/p₂ = ${slope.toFixed(3)}` },
    { color: col.reference,  label: `x₂-Abschnitt: ${x2max.toFixed(1)}, x₁-Abschnitt: ${x1max.toFixed(1)}` },
  ], col.grid, 20);

  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: `$x_2 = ${x2max.toFixed(1)} - ${(p1 / p2).toFixed(2)} \\cdot x_1$`,
    rows: [
      {
        title: 'Budgetgerade',
        body: `Bei einem Einkommen von <strong>$m = ${m}$</strong> und Preisen <strong>$p_1 = ${p1}$</strong>, <strong>$p_2 = ${p2}$</strong> kann der Haushalt maximal <strong>${x1max.toFixed(1)}</strong> Einheiten von Gut 1 oder <strong>${x2max.toFixed(1)}</strong> Einheiten von Gut 2 kaufen.`
      },
      {
        title: 'Steigung',
        body: `Die Steigung <strong>${slope.toFixed(2)}</strong> zeigt das Tauschverhältnis: Für jede zusätzliche Einheit $x_1$ muss der Haushalt auf <strong>${(p1 / p2).toFixed(2)}</strong> Einheiten $x_2$ verzichten.`
      },
      {
        title: 'Budgetmenge B',
        body: `Die schattierte <strong>Budgetmenge $B$</strong> enthält alle erreichbaren Bündel; die Budgetgerade selbst zeigt die Kombinationen, die das Budget genau ausschöpfen.`
      },
      {
        title: 'Klausurtipp',
        body: `Steigt $p_1$, dreht sich die Gerade um den y-Achsenabschnitt nach innen. Steigt $m$, verschiebt sich die Gerade parallel nach außen. Beides verändert die erreichbare Menge und ist die Grundlage der komparativen Statik.`
      }
    ]
  }));

  // Tooltip registration — after full draw
  registerTooltipPoints(canvas, [
    { cx: sx(0),     cy: sy(x2max), html: `<b>y-Abschnitt</b><br>x₂ = m/p₂ = ${x2max.toFixed(2)}` },
    { cx: sx(x1max), cy: sy(0),     html: `<b>x-Abschnitt</b><br>x₁ = m/p₁ = ${x1max.toFixed(2)}` },
  ]);
}

function drawIndiff(progress = 1) {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = ge.refreshColors();

  const u1El = document.getElementById('g_u1');
  const u2El = document.getElementById('g_u2');
  if (!u1El || !u2El) return;
  const u1 = +u1El.value;
  const u2 = +u2El.value;
  document.getElementById('v_u1').textContent = u1;
  document.getElementById('v_u2').textContent = u2;

  const axMax = Math.sqrt(Math.max(u1, u2)) * 4;
  const fsBase = Math.max(11, Math.round(Math.min(w, h) * 0.022));
  const { PAD, PW, PH, sx, sy } = ge.drawScene(w, h, ctx, axMax,
    'x₁ (Menge Gut 1)', 'x₂ (Menge Gut 2)');

  const clr1 = col.indiffBase;
  const clr2 = col.indiffAlt;
  const curves = [
    { u: u1, c: clr1, label: ['Indifferenzkurve', `ū = ${u1}`], dash: [], factor: 1.28 },
    { u: u2, c: clr2, label: ['Indifferenzkurve', `ū = ${u2}`], dash: [7, 4], factor: 1.65 },
  ];
  const sortedCurves = [...curves].sort((a, b) => a.u - b.u);
  sortedCurves.forEach(cv =>
    ge.drawIK(ctx, axMax, cv.u, cv.c, '', sx, sy, progress, cv.dash));

  if (progress >= 0.85) {
    sortedCurves.forEach((cv) => {
      const point = getCurveLabelPoint(axMax, cv.u, cv.factor);
      drawLabelTag(ctx, cv.label, sx(point.x) + 8, sy(point.y) - 10, cv.c, {
        fontFamily: col.fontBody,
        fontSize: Math.max(10, fsBase - 1),
        bgColor: col.card,
        borderColor: cv.c
      });
    });
  }

  // "higher utility" hint — placed in upper-right to avoid curve-label zone
  if (progress >= 0.9) {
    ctx.fillStyle = col.indiffAlt + '99';
    ctx.font      = `${fsBase + 2}px ${col.fontBody}`;
    ctx.textAlign = 'right';
    ctx.fillText('↗ höherer Nutzen', PAD + PW * 0.96, PAD + PH * 0.15);
  }

  ge.drawLegend(ctx, w, [
    { color: clr1,      label: 'Indifferenzkurve ū=' + u1 },
    { color: clr2, dash: true, label: 'Indifferenzkurve ū=' + u2 },
    { color: col.reference, label: 'u(x₁,x₂) = x₁ · x₂ = ū' },
  ], col.grid);

  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: `$u(x_1, x_2) = x_1 \\cdot x_2$`,
    rows: [
      {
        title: 'Indifferenzkurven',
        body: `Die Grafik zeigt zwei Indifferenzkurven mit den Nutzenniveaus <strong>ū₁ = ${u1}</strong> und <strong>ū₂ = ${u2}</strong>.`
      },
      {
        title: 'Bedeutung der Kurven',
        body: 'Jeder Punkt auf einer Kurve liefert dem Haushalt exakt dasselbe Nutzenniveau; er ist zwischen allen diesen Bündeln indifferent.'
      },
      {
        title: 'Höherer Nutzen',
        body: `${u2 > u1 ? `Die äußere Kurve (ū = ${u2}) liegt weiter vom Ursprung und repräsentiert <strong>höheren Nutzen</strong>.` : `Die innere Kurve (ū = ${u1}) liegt weiter vom Ursprung und repräsentiert <strong>höheren Nutzen</strong>.`}`
      },
      {
        title: 'Form der Kurven',
        body: 'Die konvexe Form zeigt, dass Konsumenten gemischte Bündel gegenüber Extremen bevorzugen; die Grenzrate der Substitution nimmt entlang der Kurve ab.'
      },
      {
        title: 'Klausurtipp',
        body: 'Indifferenzkurven schneiden sich nie; sonst wäre ein Bündel gleichzeitig besser und gleich gut, was der Transitivität widerspricht.'
      }
    ]
  }));

  registerTooltipPoints(canvas, []);
}

function drawHausopt(progress = 1) {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = ge.refreshColors();

  const mEl2 = document.getElementById('g_m');
  const p1El2 = document.getElementById('g_p1');
  const p2El2 = document.getElementById('g_p2');
  if (!mEl2 || !p1El2 || !p2El2) return;
  const m  = +mEl2.value;
  const p1 = +p1El2.value;
  const p2 = +p2El2.value;
  document.getElementById('v_m').textContent  = m;
  document.getElementById('v_p1').textContent = p1;
  document.getElementById('v_p2').textContent = p2;

  const x1s = m / (2 * p1), x2s = m / (2 * p2), ustar = x1s * x2s;
  const x1max = m / p1, x2max = m / p2;
  const xMax = Math.max(10, x1max * 1.12);
  const yMax = Math.max(10, x2max * 1.28);
  const { sx, sy, fsBase, fsBold } = setupRectPlot(ge, w, h, ctx, xMax, yMax,
    'x₁ (Menge Gut 1)', 'x₂ (Menge Gut 2)');

  // Budget area fill
  ctx.fillStyle = col.budgetFill;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(0));
  ctx.lineTo(sx(x1max), sy(0));
  ctx.lineTo(sx(0), sy(x2max));
  ctx.closePath();
  ctx.fill();

  // Budget line — animated
  const x1end = x1max * progress;
  const x2end = x2max - (x2max / x1max) * x1end;
  ctx.strokeStyle = col.budgetBase;
  ctx.lineWidth   = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(x2max));
  ctx.lineTo(sx(x1end), sy(x2end));
  ctx.stroke();

  if (progress >= 0.84) {
    const labelX = x1max * 0.28;
    const labelY = x2max - (x2max / x1max) * labelX;
    drawLabelTag(ctx, 'Budgetgerade', sx(labelX) + 10, sy(labelY) - 18, col.budgetBase, {
      fontFamily: col.fontBody,
      fontSize: Math.max(11, fsBase - 1),
      bgColor: col.card,
      borderColor: col.budgetBase
    });
  }

  // Indifference curve through optimum — animated (no direct label; legend covers it)
  drawRectIndifferenceCurve(ctx, sx, sy, xMax, yMax, ustar, col.indiffBase, progress);

  // Drop-lines to axes (dashed) — appear after curves
  if (progress >= 0.85) {
    ctx.strokeStyle = col.guide + '99';
    ctx.lineWidth   = 1.2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(sx(x1s), sy(x2s)); ctx.lineTo(sx(x1s), sy(0)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(x1s), sy(x2s)); ctx.lineTo(sx(0), sy(x2s)); ctx.stroke();
    ctx.setLineDash([]);

    // Axis value labels
    ctx.fillStyle = col.guide;
    ctx.font      = `bold ${fsBold}px ${col.fontBody}`;
    ctx.textAlign = 'center';
    ctx.fillText('x₁* = ' + x1s.toFixed(1), sx(x1s), sy(0) + 30);
    ctx.textAlign = 'right';
    ctx.fillText('x₂* = ' + x2s.toFixed(1), sx(0) - 6, sy(x2s) + 4);
  }

  // Optimum dot + GRS label — appear last
  if (progress >= 0.92) {
    drawDot(ctx, sx(x1s), sy(x2s), 6, col.optimum, col.bg);
    ctx.fillStyle = col.text;
    ctx.font      = `bold ${fsBold + 1}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('E* (Optimum)', sx(x1s) + 10, sy(x2s) - 8);

    // GRS annotation — placed below optimum label, well clear of legend area
    ctx.fillStyle = col.tangent + 'cc';
    ctx.font      = `${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('GRS = p₁/p₂ = ' + (p1 / p2).toFixed(2), sx(x1s) + 10, sy(x2s) + 8);
  }

  ge.drawLegend(ctx, w, [
    { color: col.budgetBase,   label: 'Budgetgerade p₁x₁+p₂x₂=m' },
    { color: col.indiffBase,   label: 'Indifferenzkurve u=x₁·x₂=' + ustar.toFixed(1) },
    { color: col.optimum, dot: true, label: 'Optimum E*: x₁*=' + x1s.toFixed(1) + ', x₂*=' + x2s.toFixed(1) },
    { color: col.guide, dash: true, label: 'Hilfslinien zum Optimum' },
  ], col.grid, 20);

  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: `$x_1^* = ${x1s.toFixed(2)}, \\; x_2^* = ${x2s.toFixed(2)}, \\; GRS = \\frac{p_1}{p_2} = ${(p1 / p2).toFixed(3)}$`,
    rows: [
      {
        title: 'Haushaltsoptimum',
        body: `Das Haushaltsoptimum liegt bei <strong>$x_1^* = ${x1s.toFixed(2)}$</strong>, <strong>$x_2^* = ${x2s.toFixed(2)}$</strong> mit einem maximalen Nutzen von <strong>$u^* = ${ustar.toFixed(2)}$</strong>.`
      },
      {
        title: 'Optimumpunkt E*',
        body: `Im Tangentialpunkt $E^* = (${x1s.toFixed(2)}, ${x2s.toFixed(2)})$ trifft die Budgetgerade genau die höchstmögliche Indifferenzkurve.`
      },
      {
        title: 'Tangentialbedingung',
        body: 'In diesem Punkt berührt die höchstmögliche Indifferenzkurve gerade noch die Budgetgerade; die Grenzrate der Substitution entspricht exakt dem Preisverhältnis.'
      },
      {
        title: 'Ökonomische Bedeutung',
        body: 'Der Haushalt bewertet die letzte Einheit $x_1$ subjektiv genauso wie der Markt sie bepreist. Jede Umschichtung des Budgets würde den Nutzen senken.'
      },
      {
        title: 'Klausurtipp',
        body: 'Die Tangentialbedingung $GRS = \\frac{p_1}{p_2}$ ist die zentrale Optimierungsbedingung. In der Klausur: Lagrange aufstellen oder direkt $GRS = \\frac{MU_1}{MU_2} = \\frac{p_1}{p_2}$ setzen.'
      }
    ]
  }));

  registerTooltipPoints(canvas, [
    {
      cx: sx(x1s), cy: sy(x2s),
      html: `<b>Haushaltsoptimum E*</b><br>x₁* = ${x1s.toFixed(3)}<br>x₂* = ${x2s.toFixed(3)}<br>u* = ${ustar.toFixed(3)}<br>GRS = p₁/p₂ = ${(p1/p2).toFixed(3)}`,
    },
  ]);
}

function drawMonopol(progress = 1) {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = ge.refreshColors();

  const aEl = document.getElementById('g_a');
  const cEl = document.getElementById('g_c');
  if (!aEl || !cEl) return;
  const a = +aEl.value;
  const c = +cEl.value;
  document.getElementById('v_a').textContent = a;
  document.getElementById('v_c').textContent = c;

  const ym      = a / (2 + 2 * c);
  const pm      = a - ym;
  const yvk     = a / (1 + 2 * c);
  const pvk     = a - yvk;
  const mcAtYm  = 2 * c * ym;

  const xMax = a * 1.08;
  const yMax = a * 1.05;
  const PAD  = 72;
  const PW   = w - PAD - 40;
  const PH   = h - PAD - 50;

  const sx = x => PAD + (x / xMax) * PW;
  const sy = y => h - PAD - (y / yMax) * PH;

  // Responsive font scale — based on min(w,h) so tall/narrow canvases stay readable
  const fsBase = Math.max(11, Math.round(Math.min(w, h) * 0.022));
  const fsBold = Math.max(12, Math.round(Math.min(w, h) * 0.026));

  // Background + grid
  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  ctx.setLineDash([4, 5]);
  for (let i = 1; i <= 5; i++) {
    const gvx = (xMax / 5) * i;
    const gvy = (yMax / 5) * i;
    ctx.strokeStyle  = col.grid;
    ctx.globalAlpha  = 0.55;
    ctx.lineWidth    = 1;
    ctx.beginPath(); ctx.moveTo(PAD, sy(gvy));   ctx.lineTo(w - 40, sy(gvy)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(gvx), h-PAD); ctx.lineTo(sx(gvx), 40);    ctx.stroke();
    ctx.globalAlpha  = 1;
    ctx.fillStyle    = col.tick;
    ctx.font         = `${fsBase}px ${col.fontBody}`;
    ctx.textAlign    = 'center'; ctx.fillText(gvx.toFixed(1), sx(gvx), h - PAD + 16);
    ctx.textAlign    = 'right';  ctx.fillText(gvy.toFixed(1), PAD - 6, sy(gvy) + 4);
  }
  ctx.setLineDash([]);

  // Axes
  ctx.strokeStyle = col.axis;
  ctx.lineWidth   = 1.5;
  ctx.beginPath();
  ctx.moveTo(PAD, 40); ctx.lineTo(PAD, h - PAD); ctx.lineTo(w - 40, h - PAD);
  ctx.stroke();

  // Axis labels
  ctx.fillStyle = col.label;
  ctx.font      = `bold ${fsBold}px ${col.fontBody}`;
  ctx.textAlign = 'center';
  ctx.fillText('Menge y', PAD + PW / 2, h - PAD + 34);
  ctx.save();
  ctx.translate(16, h - PAD - PH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('Preis p', 0, 0);
  ctx.restore();

  // DWL fill (triangle) — instant
  ctx.fillStyle = col.welfareFill;
  ctx.beginPath();
  ctx.moveTo(sx(ym), sy(pm));
  for (let y = ym; y <= yvk; y += (yvk - ym) / 60) ctx.lineTo(sx(y), sy(a - y));
  for (let y = yvk; y >= ym; y -= (yvk - ym) / 60) ctx.lineTo(sx(y), sy(2 * c * y));
  ctx.closePath();
  ctx.fill();

  // Profit rectangle — instant
  ctx.fillStyle = col.profitFill;
  ctx.fillRect(sx(0), sy(pm), sx(ym) - sx(0), sy(mcAtYm) - sy(pm));

  // Region labels — appear once fills are shown
  if (progress >= 0.3) {
    const dwlCX = (ym + ym + yvk) / 3;
    const dwlCY = (pm + mcAtYm + pvk) / 3;
    ctx.fillStyle = col.welfare;
    ctx.font      = `bold ${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'center';
    ctx.fillText('DWL', sx(dwlCX), sy(dwlCY) - 2);

    ctx.fillStyle = col.profit;
    ctx.font      = `bold ${Math.max(11, fsBase - 2)}px ${col.fontBody}`;
    ctx.fillText('π (Monopolgewinn)', sx(ym / 2), sy((pm + mcAtYm) / 2));
  }

  // Demand curve — animated (labelled in legend)
  ctx.strokeStyle = col.demand;
  ctx.lineWidth   = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(a));
  ctx.lineTo(sx(a * progress), sy(a - a * progress));
  ctx.stroke();

  // MR curve (dashed) — animated with slight delay (labelled in legend)
  if (progress >= 0.2) {
    const mrProg = Math.min(1, (progress - 0.2) / 0.8);
    ctx.strokeStyle = col.mr;
    ctx.lineWidth   = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(a));
    ctx.lineTo(sx((a / 2) * mrProg), sy(a - 2 * (a / 2) * mrProg));
    ctx.stroke();
    ctx.setLineDash([]);

    if (progress >= 0.84) {
      drawLabelTag(ctx, 'Grenzerlöskurve', sx(a * 0.23), sy(a - 2 * a * 0.23) + 18, col.mr, {
        fontFamily: col.fontBody,
        fontSize: Math.max(10, fsBase - 1),
        bgColor: col.card,
        borderColor: col.mr
      });
    }
  }

  // MC curve — animated with further delay (labelled in legend)
  if (progress >= 0.4) {
    const mcProg = Math.min(1, (progress - 0.4) / 0.6);
    ctx.strokeStyle = col.mc;
    ctx.lineWidth   = 2.5;
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(0));
    ctx.lineTo(sx(xMax * mcProg), sy(2 * c * xMax * mcProg));
    ctx.stroke();

    if (progress >= 0.84) {
      drawLabelTag(ctx, 'Grenzkostenkurve', sx(xMax * 0.54), sy(2 * c * xMax * 0.54) + 18, col.mc, {
        fontFamily: col.fontBody,
        fontSize: Math.max(10, fsBase - 1),
        bgColor: col.card,
        borderColor: col.mc
      });
    }
  }

  if (progress >= 0.84) {
    drawLabelTag(ctx, 'Nachfragekurve', sx(a * 0.56), sy(a - a * 0.56) - 22, col.demand, {
      fontFamily: col.fontBody,
      fontSize: Math.max(10, fsBase - 1),
      bgColor: col.card,
      borderColor: col.demand
    });
  }

  // Guide lines — appear after curves
  if (progress >= 0.85) {
    ctx.strokeStyle = col.monopoly + '99';
    ctx.lineWidth   = 1.2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(sx(0), sy(pm));  ctx.lineTo(sx(ym), sy(pm));  ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(ym), sy(0));  ctx.lineTo(sx(ym), sy(pm));  ctx.stroke();
    // Competitive guide lines
    ctx.strokeStyle = col.competition + '88';
    ctx.beginPath(); ctx.moveTo(sx(0), sy(pvk)); ctx.lineTo(sx(yvk), sy(pvk)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(yvk), sy(0)); ctx.lineTo(sx(yvk), sy(pvk)); ctx.stroke();
    ctx.setLineDash([]);

    // Axis value labels (monopoly)
    ctx.fillStyle = col.monopoly;
    ctx.font      = `bold ${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'center';
    ctx.fillText('yₘ=' + ym.toFixed(2), sx(ym), sy(0) + 30);
    ctx.textAlign = 'right';
    ctx.fillText('pₘ=' + pm.toFixed(2), sx(0) - 6, sy(pm) + 4);

    // Axis value labels (competitive) — use muted colour
    ctx.fillStyle = col.competition;
    ctx.font      = `${Math.max(10, fsBase - 1)}px ${col.fontBody}`;
    ctx.textAlign = 'center';
    ctx.fillText('y_vk=' + yvk.toFixed(2), sx(yvk), sy(0) + 44);
    ctx.textAlign = 'right';
    ctx.fillText('p_vk=' + pvk.toFixed(2), sx(0) - 6, sy(pvk) + 4);
  }

  // Equilibrium dots + labels — appear last
  if (progress >= 0.92) {
    // Monopoly (Cournotscher) point
    drawDot(ctx, sx(ym), sy(pm), 6, col.monopoly, col.bg);
    ctx.fillStyle = col.text;
    ctx.font      = `bold ${fsBold}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('Cournotscher Punkt', sx(ym) + 10, sy(pm) - 8);

    // Competitive equilibrium point
    drawDot(ctx, sx(yvk), sy(pvk), 6, col.competition, col.bg);
    ctx.fillStyle = col.competition;
    ctx.font      = `${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('Wettbewerb', sx(yvk) + 8, sy(pvk) + 4);
  }

  ge.drawLegend(ctx, w, [
    { color: col.demand,          label: 'Nachfragekurve D (p = a−y)' },
    { color: col.mr, dash: true,  label: 'Grenzerlöskurve MR (a−2y)' },
    { color: col.mc,              label: 'Grenzkostenkurve MC (2cy)' },
    { color: col.monopoly, dot: true, label: 'Cournot: yₘ=' + ym.toFixed(2) + ', pₘ=' + pm.toFixed(2) },
    { color: col.welfare, fill: col.welfareFill, label: 'Wohlfahrtsverlust DWL' },
    { color: col.profit, fill: col.profitFill, label: 'Monopolgewinn π' },
  ], col.grid, 20);

  { const profitM = (pm - mcAtYm) * ym;
  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: `$MR = MC,\\; y_m = ${ym.toFixed(2)},\\; p_m = ${pm.toFixed(2)}$`,
    rows: [
      {
        title: 'Monopolentscheidung',
        body: `Der Monopolist wählt die Menge <strong>$y_m = ${ym.toFixed(2)}$</strong> und setzt den Preis <strong>$p_m = ${pm.toFixed(2)}$</strong> dort, wo Grenzerlös und Grenzkosten übereinstimmen.`
      },
      {
        title: 'Cournot-Punkt',
        body: `Der markierte Cournot-Punkt verbindet die gewählte Menge $y_m$ direkt mit dem abgelesenen Preis $p_m$ auf der Nachfragekurve.`
      },
      {
        title: 'Vergleich zum Wettbewerb',
        body: `Im Vergleich zum Wettbewerbsgleichgewicht mit <strong>$y = ${yvk.toFixed(2)}$</strong> und <strong>$p = ${pvk.toFixed(2)}$</strong> produziert der Monopolist weniger und verlangt einen höheren Preis.`
      },
      {
        title: 'Gewinn und Wohlfahrt',
        body: `Der Monopolgewinn beträgt <strong>$\\pi \\approx ${profitM.toFixed(2)}$</strong>. Das markierte DWL-Dreieck zeigt den Wohlfahrtsverlust: Tauschgewinne, die weder Produzent noch Konsument realisieren.`
      },
      {
        title: 'Klausurtipp',
        body: 'Optimierungsbedingung ist $MR = MC$, nicht $P = MC$. Das DWL-Dreieck lässt sich als $\\tfrac{1}{2}(y_{vk} - y_m)(p_m - p_{vk})$ berechnen; eine typische Folgefrage ist die Wirkung einer Steuer auf das Cournot-Gleichgewicht.'
      }
    ]
  }));
  }

  registerTooltipPoints(canvas, [
    {
      cx: sx(ym), cy: sy(pm),
      html: `<b>Cournotscher Punkt</b><br>Menge yₘ = ${ym.toFixed(3)}<br>Preis pₘ = ${pm.toFixed(3)}<br>MC = ${mcAtYm.toFixed(3)}`,
    },
    {
      cx: sx(yvk), cy: sy(pvk),
      html: `<b>Wettbewerbsgleichgewicht</b><br>Menge y_vk = ${yvk.toFixed(3)}<br>Preis p_vk = ${pvk.toFixed(3)}`,
    },
  ]);
}

function drawSlutsky(progress = 1) {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = ge.refreshColors();

  const smEl   = document.getElementById('g_m');
  const sp10El = document.getElementById('g_p1_0');
  const sp11El = document.getElementById('g_p1_1');
  const sp2El  = document.getElementById('g_p2');
  if (!smEl || !sp10El || !sp11El || !sp2El) return;
  const m    = parseFloat(smEl.value);
  const p1_0 = parseFloat(sp10El.value);
  const p1_1 = parseFloat(sp11El.value);
  const p2   = parseFloat(sp2El.value);
  document.getElementById('v_m').innerText    = m;
  document.getElementById('v_p1_0').innerText = p1_0.toFixed(2);
  document.getElementById('v_p1_1').innerText = p1_1.toFixed(2);
  document.getElementById('v_p2').innerText   = p2;

  // Optima (Cobb-Douglas α=0.5)
  const x1_0 = m / (2 * p1_0), x2_0 = m / (2 * p2), u0 = x1_0 * x2_0;
  const x1_1 = m / (2 * p1_1), x2_1 = m / (2 * p2), u1 = x1_1 * x2_1;
  const x1_c = Math.sqrt(u0 * p2 / p1_1), x2_c = Math.sqrt(u0 * p1_1 / p2);
  const SE = x1_c - x1_0, EE = x1_1 - x1_c, total = x1_1 - x1_0;

  const x1max = Math.max(m / p1_0, m / p1_1, x1_c * 1.2);
  const x2max = Math.max(m / p2, x2_c * 1.2);
  const axMax = Math.max(x1max, x2max) * 1.35;
  const fsBase = Math.max(11, Math.round(Math.min(w, h) * 0.022));
  const fsBold = Math.max(12, Math.round(Math.min(w, h) * 0.026));
  const { sx, sy, PAD, PW, PH } = ge.drawScene(w, h, ctx, axMax,
    'x₁ (Menge Gut 1)', 'x₂ (Menge Gut 2)');

  function drawArrowSegment(fromX, fromY, toX, toY, color, dash = [8, 5]) {
    const startX = sx(fromX);
    const startY = sy(fromY);
    const endX = sx(toX);
    const endY = sy(toY);
    const angle = Math.atan2(endY - startY, endX - startX);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2.2;
    ctx.setLineDash(dash);
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.setLineDash([]);

    const head = 10;
    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(endX - head * Math.cos(angle - Math.PI / 7), endY - head * Math.sin(angle - Math.PI / 7));
    ctx.lineTo(endX - head * Math.cos(angle + Math.PI / 7), endY - head * Math.sin(angle + Math.PI / 7));
    ctx.closePath();
    ctx.fill();
  }

  function drawTaggedPoint(x, y, color, label, offsetX, offsetY) {
    const px = sx(x);
    const py = sy(y);
    drawDot(ctx, px, py, 6, color, col.bg);

    const badgeText = label;
    ctx.font = `bold ${fsBase}px ${col.fontBody}`;
    const textWidth = ctx.measureText(badgeText).width;
    const badgeWidth = textWidth + 12;
    const badgeHeight = fsBase + 8;
    const bx = px + offsetX;
    const by = py + offsetY;
    const radius = 7;

    ctx.save();
    ctx.fillStyle = col.card;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(bx + radius, by);
    ctx.lineTo(bx + badgeWidth - radius, by);
    ctx.quadraticCurveTo(bx + badgeWidth, by, bx + badgeWidth, by + radius);
    ctx.lineTo(bx + badgeWidth, by + badgeHeight - radius);
    ctx.quadraticCurveTo(bx + badgeWidth, by + badgeHeight, bx + badgeWidth - radius, by + badgeHeight);
    ctx.lineTo(bx + radius, by + badgeHeight);
    ctx.quadraticCurveTo(bx, by + badgeHeight, bx, by + badgeHeight - radius);
    ctx.lineTo(bx, by + radius);
    ctx.quadraticCurveTo(bx, by, bx + radius, by);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(badgeText, bx + badgeWidth / 2, by + badgeHeight / 2 + 1);
    ctx.restore();
  }

  // IK curves — animated
  ge.drawIK(ctx, axMax, u0, col.indiffBase, '', sx, sy, progress);
  if (Math.abs(u1 - u0) > 0.01) {
    ge.drawIK(ctx, axMax, u1, col.indiffAlt, '', sx, sy, progress, [9, 6]);
  }

  // Budget lines helper
  function bLine(p1, color, dash = [], labelLines = null, labelFactor = 0.2, tagOffsetY = -12) {
    const xi = m / p1, yi = m / p2;
    const xiEnd = xi * progress;
    ctx.strokeStyle = color;
    ctx.lineWidth   = 2.5;
    ctx.setLineDash(dash);
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(yi));
    ctx.lineTo(sx(xiEnd), sy(yi - (yi / xi) * xiEnd));
    ctx.stroke();
    ctx.setLineDash([]);

    if (labelLines && progress >= 0.84) {
      const labelX = xi * labelFactor;
      const labelY = yi - (yi / xi) * labelX;
      drawLabelTag(ctx, labelLines, sx(labelX) + 10, sy(labelY) + tagOffsetY, color, {
        fontFamily: col.fontBody,
        fontSize: Math.max(10, fsBase - 1),
        bgColor: col.card,
        borderColor: color
      });
    }
  }
  bLine(p1_0, col.budgetBase, [], ['Initiale', 'Budgetgerade'], 0.14, -18);
  bLine(p1_1, col.budgetShift, [], ['Finale', 'Budgetgerade'], 0.44, 10);

  // Compensated budget line
  if (progress >= 0.5) {
    const compProg = Math.min(1, (progress - 0.5) / 0.5);
    const m_comp = p1_1 * x1_c + p2 * x2_c;
    const xi_c = m_comp / p1_1, yi_c = m_comp / p2;
    const xiEndC = xi_c * compProg;
    ctx.strokeStyle = col.budgetComp;
    ctx.lineWidth   = 2;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(yi_c));
    ctx.lineTo(sx(xiEndC), sy(yi_c - (yi_c / xi_c) * xiEndC));
    ctx.stroke();
    ctx.setLineDash([]);

    if (progress >= 0.84) {
      const labelX = xi_c * 0.24;
      const labelY = yi_c - (yi_c / xi_c) * labelX;
      drawLabelTag(ctx, ['Kompensierte', 'Budgetgerade'], sx(labelX) + 10, sy(labelY) - 16, col.budgetComp, {
        fontFamily: col.fontBody,
        fontSize: Math.max(10, fsBase - 1),
        bgColor: col.card,
        borderColor: col.budgetComp
      });
    }
  }

  if (progress >= 0.85) {
    const u0Point = getCurveLabelPoint(axMax, u0, 1.18);
    drawLabelTag(ctx, 'Indifferenzkurve u₀', sx(u0Point.x) + 10, sy(u0Point.y) - 10, col.indiffBase, {
      fontFamily: col.fontBody,
      fontSize: Math.max(10, fsBase - 1),
      bgColor: col.card,
      borderColor: col.indiffBase
    });

    if (Math.abs(u1 - u0) > 0.01) {
      const u1Point = getCurveLabelPoint(axMax, u1, 1.52);
      drawLabelTag(ctx, 'Indifferenzkurve u₁', sx(u1Point.x) + 10, sy(u1Point.y) - 10, col.indiffAlt, {
        fontFamily: col.fontBody,
        fontSize: Math.max(10, fsBase - 1),
        bgColor: col.card,
        borderColor: col.indiffAlt
      });
    }
  }

  // Points A, B, C — appear at end
  if (progress >= 0.88) {
    const priceUp = p1_1 >= p1_0;
    drawArrowSegment(x1_0, x2_0, x1_c, x2_c, col.effectSub, [9, 6]);
    drawArrowSegment(x1_c, x2_c, x1_1, x2_1, col.effectIncome, [4, 4]);

    drawTaggedPoint(x1_0, x2_0, col.budgetBase, 'A', priceUp ? 10 : -28, priceUp ? 10 : -28);
    drawTaggedPoint(x1_c, x2_c, col.budgetComp, 'B', -14, -28);
    drawTaggedPoint(x1_1, x2_1, col.budgetShift, 'C', 10, -28);
  }

  ge.drawLegend(ctx, w, [
    { color: col.budgetBase, label: 'Initiale Budgetgerade' },
    { color: col.budgetComp, dash: true, label: 'Kompensierte Budgetgerade' },
    { color: col.budgetShift, label: 'Finale Budgetgerade' },
    { color: col.indiffBase, label: 'Indifferenzkurve u₀' },
    { color: col.indiffAlt, dash: true, label: 'Indifferenzkurve u₁' },
    { color: col.effectSub, dash: true, label: 'A → B Substitutionseffekt' },
    { color: col.effectIncome, dash: true, label: 'B → C Einkommenseffekt' },
  ], col.grid, 20);

  { const direction = p1_1 > p1_0 ? 'gestiegen' : 'gesunken';
  const seDir = SE > 0 ? 'erhöht' : 'senkt';
  const eeDir = EE > 0 ? 'erhöht' : 'senkt';
  setGraphInfo(buildGraphInfo({
    label: 'Interpretation',
    equation: `$A = (${x1_0.toFixed(2)}, ${x2_0.toFixed(2)})$, $B = (${x1_c.toFixed(2)}, ${x2_c.toFixed(2)})$, $C = (${x1_1.toFixed(2)}, ${x2_1.toFixed(2)})$`,
    rows: [
      {
        title: 'Preisänderung',
        body: `Der Preis von Gut 1 ist von <strong>$p_1 = ${p1_0.toFixed(2)}$</strong> auf <strong>$p_1' = ${p1_1.toFixed(2)}$</strong> ${direction}.`
      },
      {
        title: 'Initiales Optimum A',
        body: `Auf der <strong>initialen Budgetgeraden</strong> wählt der Haushalt <strong>$x_1^0 = ${x1_0.toFixed(2)}$</strong> und <strong>$x_2^0 = ${x2_0.toFixed(2)}$</strong>.`
      },
      {
        title: 'Kompensiertes Optimum B',
        body: `Auf der <strong>kompensierten Budgetgeraden</strong> bleibt das alte Nutzenniveau <strong>$u_0 = ${u0.toFixed(2)}$</strong> erreichbar; Punkt B isoliert deshalb den reinen Substitutionseffekt.`
      },
      {
        title: 'Finales Optimum C',
        body: `Auf der <strong>finalen Budgetgeraden</strong> landet der Haushalt nach voller Anpassung bei <strong>$x_1^1 = ${x1_1.toFixed(2)}$</strong> und <strong>$x_2^1 = ${x2_1.toFixed(2)}$</strong>.`
      },
      {
        title: 'Substitutionseffekt A → B',
        body: `Bei konstantem Nutzenniveau $u_0 = ${u0.toFixed(2)}$ ${seDir} der Haushalt $x_1$ um <strong>${Math.abs(SE).toFixed(3)}</strong> Einheiten.`
      },
      {
        title: 'Einkommenseffekt B → C',
        body: `Die Kaufkraftveränderung ${eeDir} $x_1$ um weitere <strong>${Math.abs(EE).toFixed(3)}</strong> Einheiten.`
      },
      {
        title: 'Gesamteffekt',
        body: `$x_1$ verändert sich insgesamt um <strong>${total.toFixed(3)}</strong> Einheiten. ${Math.abs(SE) > Math.abs(EE) ? 'Der Substitutionseffekt dominiert.' : Math.abs(EE) > Math.abs(SE) ? 'Der Einkommenseffekt dominiert.' : 'Beide Effekte sind etwa gleich groß.'}`
      },
      {
        title: 'Klausurtipp',
        body: `${total < 0 ? 'Die Nachfrage sinkt bei Preisanstieg — normales Gut. ' : total > 0 ? 'Die Nachfrage steigt bei Preisanstieg — Giffen-Gut (der Einkommenseffekt überwiegt den Substitutionseffekt). ' : ''}Für die Slutsky-Kompensation gilt $m' = p_1' x_1^0 + p_2 x_2^0$: erst das kompensierte Budget bestimmen, dann $A$, $B$ und $C$ vergleichen.`
      }
    ]
  }));
  }

  registerTooltipPoints(canvas, [
    { cx: sx(x1_0), cy: sy(x2_0), html: `<b>A — Initiales Optimum</b><br>x₁ = ${x1_0.toFixed(3)}<br>x₂ = ${x2_0.toFixed(3)}<br>u₀ = ${u0.toFixed(3)}` },
    { cx: sx(x1_c), cy: sy(x2_c), html: `<b>B — Kompensiertes Optimum</b><br>x₁ = ${x1_c.toFixed(3)}<br>x₂ = ${x2_c.toFixed(3)}<br>SE = ${SE.toFixed(3)}` },
    { cx: sx(x1_1), cy: sy(x2_1), html: `<b>C — Finales Optimum</b><br>x₁ = ${x1_1.toFixed(3)}<br>x₂ = ${x2_1.toFixed(3)}<br>u₁ = ${u1.toFixed(3)}<br>EE = ${EE.toFixed(3)}` },
  ]);
}

function setupRectPlot(ge, w, h, ctx, xMax, yMax, xLabel, yLabel) {
  const col = ge.refreshColors();
  const PAD = 72;
  const PW = w - PAD - 40;
  const PH = h - PAD - 50;
  const fsBase = Math.max(11, Math.round(Math.min(w, h) * 0.022));
  const fsBold = Math.max(12, Math.round(Math.min(w, h) * 0.026));

  const sx = x => PAD + (x / xMax) * PW;
  const sy = y => h - PAD - (y / yMax) * PH;

  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  ctx.setLineDash([4, 5]);
  for (let i = 1; i <= 5; i += 1) {
    const gvx = (xMax / 5) * i;
    const gvy = (yMax / 5) * i;
    ctx.strokeStyle = col.grid;
    ctx.globalAlpha = 0.55;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD, sy(gvy)); ctx.lineTo(w - 40, sy(gvy)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(gvx), h - PAD); ctx.lineTo(sx(gvx), 40); ctx.stroke();
    ctx.globalAlpha = 1;

    ctx.fillStyle = col.tick;
    ctx.font = `${fsBase}px ${col.fontMono}`;
    ctx.textAlign = 'center';
    ctx.fillText(gvx.toFixed(xMax <= 20 ? 1 : 0), sx(gvx), h - PAD + 16);
    ctx.textAlign = 'right';
    ctx.fillText(gvy.toFixed(yMax <= 20 ? 1 : 0), PAD - 6, sy(gvy) + 4);
  }
  ctx.setLineDash([]);

  ctx.strokeStyle = col.axis;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(PAD, 40);
  ctx.lineTo(PAD, h - PAD);
  ctx.lineTo(w - 40, h - PAD);
  ctx.stroke();

  ctx.fillStyle = col.label;
  ctx.font = `bold ${fsBold}px ${col.fontMono}`;
  ctx.textAlign = 'center';
  ctx.fillText(xLabel, PAD + PW / 2, h - PAD + 34);
  ctx.save();
  ctx.translate(16, h - PAD - PH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yLabel, 0, 0);
  ctx.restore();

  return { col, PAD, PW, PH, sx, sy, fsBase, fsBold };
}

function isoCapital(alpha, output, labor) {
  if (labor <= 0 || alpha <= 0 || alpha >= 1) return Number.NaN;
  return Math.pow(output / Math.pow(labor, 1 - alpha), 1 / alpha);
}

function drawIsoquantCurve(ctx, sx, sy, xMax, yMax, alpha, output, color, label, font, progress = 1, dash = []) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;
  ctx.setLineDash(dash);
  ctx.beginPath();
  let started = false;
  const xStop = Math.max(0.6, xMax * progress);
  for (let labor = 0.6; labor <= xStop; labor += xMax / 320) {
    const capital = isoCapital(alpha, output, labor);
    if (!Number.isFinite(capital) || capital < 0 || capital > yMax * 1.05) continue;
    if (!started) {
      ctx.moveTo(sx(labor), sy(capital));
      started = true;
    } else {
      ctx.lineTo(sx(labor), sy(capital));
    }
  }
  ctx.stroke();
  ctx.setLineDash([]);

  if (label && progress >= 0.82) {
    const labelLabor = Math.min(xMax * 0.78, Math.max(1.4, output * 1.7));
    const labelCapital = isoCapital(alpha, output, labelLabor);
    if (Number.isFinite(labelCapital) && labelCapital <= yMax * 0.95) {
      ctx.fillStyle = color;
      ctx.font = `bold ${font}px ${getComputedStyle(document.body).getPropertyValue('--font-mono').trim() || 'SF Mono, monospace'}`;
      ctx.textAlign = 'left';
      ctx.fillText(label, sx(labelLabor) + 8, sy(labelCapital) - 8);
    }
  }
}

function drawProduktionBase(progress = 1, showGrts = false) {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;

  const alphaEl = document.getElementById('g_prod_alpha');
  const outputEl = document.getElementById('g_prod_y');
  const laborEl = document.getElementById('g_prod_l');
  if (!alphaEl || !outputEl || !laborEl) return;

  const alpha = parseFloat(alphaEl.value);
  const output = parseFloat(outputEl.value);
  const laborPoint = parseFloat(laborEl.value);
  const capitalPoint = isoCapital(alpha, output, laborPoint);

  document.getElementById('v_prod_alpha').textContent = alpha.toFixed(2);
  document.getElementById('v_prod_y').textContent = output.toFixed(1);
  document.getElementById('v_prod_l').textContent = laborPoint.toFixed(1);

  const yMax = Math.max(12, capitalPoint * 1.35, isoCapital(alpha, output * 1.5, 1.2) || 0);
  const xMax = Math.max(12, laborPoint * 2.1, output * 2.2);
  const { col, sx, sy, fsBase } = setupRectPlot(ge, w, h, ctx, xMax, yMax, 'Arbeit L', 'Kapital K');

  drawIsoquantCurve(ctx, sx, sy, xMax, yMax, alpha, output, col.isoquantBase, `Isoquante ȳ=${output.toFixed(1)}`, fsBase, progress);

  if (!showGrts) {
    drawIsoquantCurve(ctx, sx, sy, xMax, yMax, alpha, output * 1.5, col.isoquantAlt, `Isoquante ${(output * 1.5).toFixed(1)}`, Math.max(11, fsBase - 1), progress, [6, 4]);
  }

  if (progress >= 0.85 && Number.isFinite(capitalPoint) && capitalPoint <= yMax) {
    drawDot(ctx, sx(laborPoint), sy(capitalPoint), 6, showGrts ? col.optimum : col.competition, col.bg);
    drawLabelTag(ctx, showGrts ? 'Punkt mit GRTS' : 'Beobachteter Einsatz', sx(laborPoint) + 12, sy(capitalPoint) - 18, showGrts ? col.optimum : col.competition, {
      fontFamily: col.fontBody,
      fontSize: Math.max(10, fsBase - 1),
      bgColor: col.card,
      borderColor: showGrts ? col.optimum : col.competition
    });
  }

  if (showGrts && progress >= 0.88 && Number.isFinite(capitalPoint) && capitalPoint <= yMax) {
    const grts = ((1 - alpha) / alpha) * (capitalPoint / laborPoint);
    const slope = -grts;
    const leftL = Math.max(0.8, laborPoint - 1.4);
    const rightL = Math.min(xMax, laborPoint + 1.4);
    const leftK = capitalPoint + slope * (leftL - laborPoint);
    const rightK = capitalPoint + slope * (rightL - laborPoint);

    ctx.strokeStyle = col.tangent;
    ctx.lineWidth = 2;
    ctx.setLineDash([7, 5]);
    ctx.beginPath();
    ctx.moveTo(sx(leftL), sy(leftK));
    ctx.lineTo(sx(rightL), sy(rightK));
    ctx.stroke();
    ctx.setLineDash([]);

    drawLabelTag(ctx, ['Tangente', `GRTS = ${grts.toFixed(2)}`], sx(Math.min(xMax * 0.72, laborPoint + 2.4)), sy(Math.min(yMax * 0.7, capitalPoint + 3.2)), col.tangent, {
      fontFamily: col.fontBody,
      fontSize: Math.max(10, fsBase - 1),
      bgColor: col.card,
      borderColor: col.tangent
    });

    ge.drawLegend(ctx, w, [
      { color: col.isoquantBase, label: `Isoquante ȳ=${output.toFixed(1)}` },
      { color: col.tangent, dash: true, label: `Tangente / GRTS = ${grts.toFixed(2)}` },
      { color: col.optimum, dot: true, label: 'Markierter Produktionspunkt' },
    ], col.grid, 20);

    setGraphInfo(buildGraphInfo({
      label: 'Interpretation — GRTS',
      equation: `$GRTS = \\frac{MP_L}{MP_K} = \\frac{1-\\alpha}{\\alpha} \\cdot \\frac{K}{L} = ${grts.toFixed(2)}$`,
      rows: [
        {
          title: 'Markierter Punkt',
          body: `Am markierten Punkt <strong>$L = ${laborPoint.toFixed(2)}$</strong>, <strong>$K = ${capitalPoint.toFixed(2)}$</strong> beträgt die Grenzrate der technischen Substitution <strong>${grts.toFixed(2)}</strong>.`
        },
        {
          title: 'Ökonomische Bedeutung',
          body: `Eine zusätzliche Einheit Arbeit kann bei konstantem Output <strong>${grts.toFixed(2)}</strong> Einheiten Kapital ersetzen.`
        },
        {
          title: 'Tangente an die Isoquante',
          body: 'Die GRTS entspricht der Steigung der Isoquante; sie nimmt ab, je mehr Arbeit relativ zu Kapital eingesetzt wird.'
        },
        {
          title: 'Klausurtipp',
          body: 'Im Kostenminimum gilt $GRTS = \\frac{w}{r}$. Ist die aktuelle GRTS größer als $\\frac{w}{r}$, lohnt sich mehr Arbeit und weniger Kapital; andernfalls mehr Kapital und weniger Arbeit.'
        }
      ]
    }));

    registerTooltipPoints(canvas, [
      {
        cx: sx(laborPoint),
        cy: sy(capitalPoint),
        html: `<b>Isoquantenpunkt</b><br>L = ${laborPoint.toFixed(2)}<br>K = ${capitalPoint.toFixed(2)}<br>GRTS = ${grts.toFixed(2)}`
      }
    ]);
    return;
  }

  const secondOutput = output * 1.5;
  ge.drawLegend(ctx, w, [
    { color: col.isoquantBase, label: `Isoquante ȳ=${output.toFixed(1)}` },
    { color: col.isoquantAlt, dash: true, label: `Isoquante ȳ=${secondOutput.toFixed(1)}` },
    { color: col.competition, dot: true, label: 'Beobachteter Einsatzpunkt' },
  ], col.grid, 20);

  setGraphInfo(buildGraphInfo({
    label: 'Interpretation — Isoquanten',
    equation: `$F(K, L) = K^{${alpha.toFixed(2)}} \\cdot L^{${(1 - alpha).toFixed(2)}}$`,
    rows: [
      {
        title: 'Innere Isoquante',
        body: `Die innere Isoquante zeigt alle Kombinationen von Arbeit und Kapital, die den Output <strong>$\\bar{y} = ${output.toFixed(1)}$</strong> erzeugen.`
      },
      {
        title: 'Äußere Isoquante',
        body: `Die äußere Kurve <strong>$\\bar{y} = ${secondOutput.toFixed(1)}$</strong> erfordert durchweg mehr Inputs und liegt weiter vom Ursprung entfernt.`
      },
      {
        title: 'Markierter Einsatzpunkt',
        body: `Am markierten Punkt benötigt das Unternehmen für <strong>$\\bar{y} = ${output.toFixed(1)}$</strong> rund <strong>$L = ${laborPoint.toFixed(1)}$</strong> Arbeit und <strong>$K = ${capitalPoint.toFixed(2)}$</strong> Kapital.`
      },
      {
        title: 'Substitutionslogik',
        body: 'Entlang jeder Isoquante kann Arbeit durch Kapital ersetzt werden und umgekehrt; die konvexe Form zeigt, dass diese Substitution zunehmend schwieriger wird.'
      },
      {
        title: 'Klausurtipp',
        body: `${alpha.toFixed(2) === '0.50' ? 'Bei $\\alpha = 0.5$ sind die Skalenerträge konstant ($\\alpha + (1-\\alpha) = 1$); eine Verdopplung aller Inputs verdoppelt den Output.' : parseFloat(alpha.toFixed(2)) + parseFloat((1 - alpha).toFixed(2)) > 1 ? 'Hier liegen steigende Skalenerträge vor ($\\alpha + (1-\\alpha) > 1$).' : parseFloat(alpha.toFixed(2)) + parseFloat((1 - alpha).toFixed(2)) < 1 ? 'Hier liegen sinkende Skalenerträge vor ($\\alpha + (1-\\alpha) < 1$).' : 'Bei $\\alpha + (1-\\alpha) = 1$ liegen konstante Skalenerträge vor.'}`
      }
    ]
  }));


  registerTooltipPoints(canvas, Number.isFinite(capitalPoint) ? [
    {
      cx: sx(laborPoint),
      cy: sy(capitalPoint),
      html: `<b>Isoquantenpunkt</b><br>L = ${laborPoint.toFixed(2)}<br>K = ${capitalPoint.toFixed(2)}<br>Output = ${output.toFixed(2)}`
    }
  ] : []);
}

function drawProduktion(progress = 1) {
  drawProduktionBase(progress, false);
}

function drawGrts(progress = 1) {
  drawProduktionBase(progress, true);
}

function drawKosten(progress = 1) {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;

  const alphaEl = document.getElementById('g_cost_alpha');
  const outputEl = document.getElementById('g_cost_y');
  const wageEl = document.getElementById('g_cost_w');
  const rentEl = document.getElementById('g_cost_r');
  if (!alphaEl || !outputEl || !wageEl || !rentEl) return;

  const alpha = parseFloat(alphaEl.value);
  const output = parseFloat(outputEl.value);
  const wage = parseFloat(wageEl.value);
  const rent = parseFloat(rentEl.value);

  document.getElementById('v_cost_alpha').textContent = alpha.toFixed(2);
  document.getElementById('v_cost_y').textContent = output.toFixed(1);
  document.getElementById('v_cost_w').textContent = wage.toFixed(2);
  document.getElementById('v_cost_r').textContent = rent.toFixed(2);

  const ratio = (alpha / (1 - alpha)) * (wage / rent);
  const laborStar = output / Math.pow(ratio, alpha);
  const capitalStar = output * Math.pow(ratio, 1 - alpha);
  const totalCost = wage * laborStar + rent * capitalStar;
  const xIntercept = totalCost / wage;
  const yIntercept = totalCost / rent;

  const xMax = Math.max(12, xIntercept * 1.2, laborStar * 2.2);
  const yMax = Math.max(12, yIntercept * 1.15, capitalStar * 2.2);
  const { col, sx, sy, fsBase } = setupRectPlot(ge, w, h, ctx, xMax, yMax, 'Arbeit L', 'Kapital K');

  drawIsoquantCurve(ctx, sx, sy, xMax, yMax, alpha, output, col.isoquantBase, `Isoquante ȳ=${output.toFixed(1)}`, fsBase, progress);

  ctx.strokeStyle = col.budgetShift;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(yIntercept));
  ctx.lineTo(sx(xIntercept * progress), sy(yIntercept - (yIntercept / xIntercept) * (xIntercept * progress)));
  ctx.stroke();

  if (progress >= 0.82) {
    drawDot(ctx, sx(laborStar), sy(capitalStar), 6, col.optimum, col.bg);
    drawLabelTag(ctx, 'Isokostengerade', sx(xIntercept * 0.45), sy(yIntercept * 0.45) - 18, col.budgetShift, {
      fontFamily: col.fontBody,
      fontSize: Math.max(10, fsBase - 1),
      bgColor: col.card,
      borderColor: col.budgetShift
    });
    drawLabelTag(ctx, 'Kostenminimum', sx(laborStar) + 12, sy(capitalStar) - 18, col.optimum, {
      fontFamily: col.fontBody,
      fontSize: Math.max(10, fsBase - 1),
      bgColor: col.card,
      borderColor: col.optimum
    });

    ctx.strokeStyle = col.guide + '88';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(sx(laborStar), sy(capitalStar)); ctx.lineTo(sx(laborStar), sy(0)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(laborStar), sy(capitalStar)); ctx.lineTo(sx(0), sy(capitalStar)); ctx.stroke();
    ctx.setLineDash([]);
  }

  ge.drawLegend(ctx, w, [
    { color: col.isoquantBase, label: `Isoquante ȳ=${output.toFixed(1)}` },
    { color: col.budgetShift, label: 'Isokostengerade' },
    { color: col.optimum, dot: true, label: 'Kostenminimum' },
    { color: col.guide, dash: true, label: 'Hilfslinien zum Optimum' },
  ], col.grid, 20);

  setGraphInfo(buildGraphInfo({
    label: 'Interpretation — Kostenminimierung',
    equation: `$\\min C = w \\cdot L + r \\cdot K \\;\\text{s.t.}\\; F(K,L) = \\bar{y}$`,
    rows: [
      {
        title: 'Kostenminimum',
        body: `Bei Faktorpreisen <strong>$w = ${wage.toFixed(2)}$</strong> und <strong>$r = ${rent.toFixed(2)}$</strong> sowie einem Zieloutput von <strong>$\\bar{y} = ${output.toFixed(1)}$</strong> liegt das kostenminimale Inputbündel bei <strong>$L^* = ${laborStar.toFixed(2)}$</strong> und <strong>$K^* = ${capitalStar.toFixed(2)}$</strong>.`
      },
      {
        title: 'Tangentialpunkt',
        body: 'Der markierte Punkt zeigt genau das Bündel, in dem die Isokostengerade die Isoquante tangiert.'
      },
      {
        title: 'Bedingung im Optimum',
        body: `Im Optimum gilt <strong>$GRTS = \\frac{w}{r} = ${(wage / rent).toFixed(2)}$</strong>; die Isoquante berührt die Isokostengerade tangential.`
      },
      {
        title: 'Gesamtkosten',
        body: `Die minimalen Gesamtkosten betragen <strong>$C = ${totalCost.toFixed(2)}$</strong>. Jede andere Inputkombination auf derselben Isoquante wäre teurer.`
      },
      {
        title: 'Klausurtipp',
        body: 'Das Kostenminimum ergibt sich aus $GRTS = \\frac{w}{r}$ zusammen mit der Produktionsfunktion $F(K,L) = \\bar{y}$; steigt $w$ relativ zu $r$, verschiebt sich das Optimum hin zu mehr Kapital.'
      }
    ]
  }));

  registerTooltipPoints(canvas, [
    {
      cx: sx(laborStar),
      cy: sy(capitalStar),
      html: `<b>Kostenminimum</b><br>L* = ${laborStar.toFixed(2)}<br>K* = ${capitalStar.toFixed(2)}<br>C = ${totalCost.toFixed(2)}`
    }
  ]);
}

function drawMarkt(progress = 1) {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;

  const dIntEl = document.getElementById('g_d_int');
  const dSlopeEl = document.getElementById('g_d_slope');
  const sIntEl = document.getElementById('g_s_int');
  const sSlopeEl = document.getElementById('g_s_slope');
  if (!dIntEl || !dSlopeEl || !sIntEl || !sSlopeEl) return;

  const a = parseFloat(dIntEl.value);
  const b = parseFloat(dSlopeEl.value);
  const c = parseFloat(sIntEl.value);
  const d = parseFloat(sSlopeEl.value);
  document.getElementById('v_d_int').textContent = a.toFixed(0);
  document.getElementById('v_d_slope').textContent = b.toFixed(2);
  document.getElementById('v_s_int').textContent = c.toFixed(0);
  document.getElementById('v_s_slope').textContent = d.toFixed(2);

  const hasTrade = a > c;
  const qEq = hasTrade ? (a - c) / (b + d) : 0;
  const pEq = hasTrade ? a - b * qEq : a;
  const cs = hasTrade ? 0.5 * (a - pEq) * qEq : 0;
  const ps = hasTrade ? 0.5 * (pEq - c) * qEq : 0;
  const qIntercept = a / b;

  const xMax = Math.max(120, qIntercept * 1.05, qEq * 1.4 || 0);
  const yMax = Math.max(100, a * 1.1);
  const { col, sx, sy, fsBase } = setupRectPlot(ge, w, h, ctx, xMax, yMax, 'Menge q', 'Preis p');

  if (hasTrade) {
    ctx.fillStyle = col.consumerFill;
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(a));
    ctx.lineTo(sx(qEq), sy(pEq));
    ctx.lineTo(sx(0), sy(pEq));
    ctx.closePath();
    ctx.fill();

    if (progress >= 0.34) {
      drawLabelTag(ctx, 'Konsumentenrente', sx(qEq * 0.32), sy((a + 2 * pEq) / 3), col.demand, {
        fontFamily: col.fontBody,
        fontSize: Math.max(10, fsBase - 2),
        bgColor: col.card,
        borderColor: col.demand,
        align: 'center'
      });
    }

    ctx.fillStyle = col.producerFill;
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(c));
    ctx.lineTo(sx(qEq), sy(pEq));
    ctx.lineTo(sx(0), sy(pEq));
    ctx.closePath();
    ctx.fill();

    if (progress >= 0.34) {
      drawLabelTag(ctx, 'Produzentenrente', sx(qEq * 0.36), sy((c + 2 * pEq) / 3), col.supply, {
        fontFamily: col.fontBody,
        fontSize: Math.max(10, fsBase - 2),
        bgColor: col.card,
        borderColor: col.supply,
        align: 'center'
      });
    }
  }

  ctx.strokeStyle = col.demand;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(a));
  ctx.lineTo(sx(qIntercept * progress), sy(a - b * qIntercept * progress));
  ctx.stroke();

  const supplyEnd = Math.min(xMax, (yMax - c) / d);
  ctx.strokeStyle = col.supply;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(c));
  ctx.lineTo(sx(supplyEnd * progress), sy(c + d * supplyEnd * progress));
  ctx.stroke();

  if (progress >= 0.84) {
    drawLabelTag(ctx, 'Nachfragekurve', sx(xMax * 0.68), sy(a - b * xMax * 0.68) - 22, col.demand, {
      fontFamily: col.fontBody,
      fontSize: Math.max(10, fsBase - 1),
      bgColor: col.card,
      borderColor: col.demand
    });

    drawLabelTag(ctx, 'Angebotskurve', sx(xMax * 0.62), sy(c + d * xMax * 0.62) + 6, col.supply, {
      fontFamily: col.fontBody,
      fontSize: Math.max(10, fsBase - 1),
      bgColor: col.card,
      borderColor: col.supply
    });
  }

  if (hasTrade && progress >= 0.88) {
    drawDot(ctx, sx(qEq), sy(pEq), 6, col.competition, col.bg);
    ctx.fillStyle = col.text;
    ctx.font = `bold ${fsBase}px ${col.fontBody}`;
    ctx.fillText('Gleichgewicht', sx(qEq) + 10, sy(pEq) - 8);

    ctx.strokeStyle = col.competition + '88';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(sx(qEq), sy(pEq)); ctx.lineTo(sx(qEq), sy(0)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(qEq), sy(pEq)); ctx.lineTo(sx(0), sy(pEq)); ctx.stroke();
    ctx.setLineDash([]);
  }

  ge.drawLegend(ctx, w, hasTrade ? [
    { color: col.demand, label: 'Nachfragekurve D' },
    { color: col.supply, label: 'Angebotskurve S' },
    { color: col.competition, dot: true, label: 'Gleichgewichtspunkt E*' },
    { color: col.demand, fill: col.consumerFill, label: 'Konsumentenrente KR' },
    { color: col.supply, fill: col.producerFill, label: 'Produzentenrente PR' },
  ] : [
    { color: col.demand, label: 'Nachfragekurve D' },
    { color: col.supply, label: 'Angebotskurve S' },
  ], col.grid, 20);

  setGraphInfo(hasTrade
    ? buildGraphInfo({
      label: 'Interpretation — Marktgleichgewicht',
      equation: `$D: p = ${a.toFixed(0)} - ${b.toFixed(2)} \\cdot q \\qquad S: p = ${c.toFixed(0)} + ${d.toFixed(2)} \\cdot q$`,
      rows: [
        {
          title: 'Gleichgewichtspunkt E*',
          body: `Im Gleichgewicht schneiden sich Angebots- und Nachfragekurve bei <strong>$p^* = ${pEq.toFixed(2)}$</strong> und <strong>$q^* = ${qEq.toFixed(2)}$</strong>.`
        },
        {
          title: 'Konsumentenrente',
          body: `Die <strong>Konsumentenrente $\\approx ${cs.toFixed(2)}$</strong> misst die Ersparnis der Käufer gegenüber ihrer maximalen Zahlungsbereitschaft; im Graphen ist das das Dreieck über dem Gleichgewichtspreis.`
        },
        {
          title: 'Produzentenrente',
          body: `Die <strong>Produzentenrente $\\approx ${ps.toFixed(2)}$</strong> misst den Gewinn der Verkäufer über ihre Mindestkosten hinaus; im Graphen ist das das Dreieck unter dem Gleichgewichtspreis.`
        },
        {
          title: 'Gesamtwohlfahrt',
          body: 'Konsumentenrente und Produzentenrente bilden gemeinsam die gesamte Wohlfahrt; im Wettbewerbsgleichgewicht ist sie maximal.'
        },
        {
          title: 'Klausurtipp',
          body: 'Das Gleichgewicht ergibt sich aus $D = S$. Eine Steuer $t$ verschiebt die Angebotskurve nach oben und erzeugt einen DWL; typische Folgefragen betreffen die neue Gleichgewichtsmenge und die Steuerinzidenz.'
        }
      ]
    })
    : buildGraphInfo({
      label: 'Interpretation',
      rows: [
        {
          title: 'Kein Handel möglich',
          body: 'Die Mindestkosten der Anbieter liegen oberhalb der maximalen Zahlungsbereitschaft der Nachfrager. In diesem Parameterbereich existiert kein positives Marktgleichgewicht; die Kurven schneiden sich nicht im positiven Bereich.'
        }
      ]
    })
  );

  registerTooltipPoints(canvas, hasTrade ? [
    {
      cx: sx(qEq),
      cy: sy(pEq),
      html: `<b>Marktgleichgewicht</b><br>q* = ${qEq.toFixed(2)}<br>p* = ${pEq.toFixed(2)}<br>KR ≈ ${cs.toFixed(2)}<br>PR ≈ ${ps.toFixed(2)}`
    }
  ] : []);
}

// ── initGraph ──────────────────────────────────────────────
/**
 * Entry point called on tab switch and theme/resize events.
 * @param {string}  type    — active concept id with graph support
 * @param {boolean} animate — true = 400 ms draw-in animation (default); false = instant
 */
function initGraph(type, animate = true) {
  const fns = {
    budget:  p => drawBudget(p),
    indiff:  p => drawIndiff(p),
    hausopt: p => drawHausopt(p),
    produktion: p => drawProduktion(p),
    grts: p => drawGrts(p),
    kosten: p => drawKosten(p),
    markt: p => drawMarkt(p),
    monopol: p => drawMonopol(p),
    slutsky: p => drawSlutsky(p),
  };
  if (!fns[type]) return;
  if (animate) {
    animateGraph(fns[type]);
  } else {
    fns[type](1);
  }
}

export {
  drawBudget,
  drawIndiff,
  drawHausopt,
  drawProduktion,
  drawGrts,
  drawKosten,
  drawMarkt,
  drawMonopol,
  drawSlutsky,
  initGraph
};
