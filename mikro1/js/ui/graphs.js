// ============================================================
// GRAPH DRAW FUNCTIONS — Mikroökonomik I
// Individual canvas draw functions for each interactive graph
// ============================================================

import GraphEngine from './graphEngine.js';

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
  const axMax  = Math.max(x1max, x2max) * 1.35;
  const fsBase = Math.max(11, Math.round(Math.min(w, h) * 0.022));
  const fsBold = Math.max(12, Math.round(Math.min(w, h) * 0.026));
  const { PAD, PW, PH, sx, sy } = ge.drawScene(w, h, ctx, axMax,
    'x₁ (Menge Gut 1)', 'x₂ (Menge Gut 2)');

  // Budget area fill (instant — appears immediately)
  ctx.fillStyle = col.accent + '12';
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(0));
  ctx.lineTo(sx(x1max), sy(0));
  ctx.lineTo(sx(0), sy(x2max));
  ctx.closePath();
  ctx.fill();

  // Budget line — animated reveal left → right
  const x1end = x1max * progress;
  const x2end = x2max - (x2max / x1max) * x1end;
  ctx.strokeStyle = col.accent;
  ctx.lineWidth   = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(x2max));
  ctx.lineTo(sx(x1end), sy(x2end));
  ctx.stroke();

  // Labels + dots — appear once line is nearly complete
  if (progress >= 0.9) {
    // y-intercept dot + label
    drawDot(ctx, sx(0), sy(x2max), 6, col.accent, col.bg);
    ctx.fillStyle   = col.text;
    ctx.font        = `bold ${fsBold}px ${col.fontBody}`;
    ctx.textAlign   = 'right';
    ctx.fillText('m/p₂=' + x2max.toFixed(1), sx(0) - 10, sy(x2max) + 4);

    // x-intercept dot + label
    drawDot(ctx, sx(x1max), sy(0), 6, col.accent, col.bg);
    ctx.fillStyle   = col.text;
    ctx.textAlign   = 'center';
    ctx.fillText('m/p₁=' + x1max.toFixed(1), sx(x1max), sy(0) + 28);
  }

  ge.drawLegend(ctx, w, [
    { color: col.accent, label: 'Budgetgerade p₁x₁+p₂x₂=m' },
    { color: col.label,  label: `Steigung: −p₁/p₂ = ${slope.toFixed(3)}` },
    { color: col.label,  label: `x₂-Abschn.: ${x2max.toFixed(1)}, x₁-Abschn.: ${x1max.toFixed(1)}` },
  ], col.accent2 + '59', 20);

  document.getElementById('graph_info').innerHTML =
    `<span class="gi-label">Interpretation</span>
    <div class="gi-eq">x₂ = ${x2max.toFixed(1)} − ${(p1 / p2).toFixed(2)} · x₁</div>
    Bei einem Einkommen von <strong>m = ${m}</strong> und Preisen <strong>p₁ = ${p1}</strong>, <strong>p₂ = ${p2}</strong>
    kann der Haushalt maximal <strong>${x1max.toFixed(1)}</strong> Einheiten von Gut 1 oder <strong>${x2max.toFixed(1)}</strong> Einheiten von Gut 2 kaufen.
    Die Steigung <strong>${slope.toFixed(2)}</strong> zeigt das Tauschverhältnis: für jede zusätzliche Einheit x₁ muss der Haushalt auf <strong>${(p1/p2).toFixed(2)}</strong> Einheiten x₂ verzichten.
    Alle Punkte unterhalb und auf der Geraden sind erreichbar — die Gerade selbst zeigt die Bündel, die das Budget genau ausschöpfen.
    <strong>Klausurtipp:</strong> Steigt p₁, dreht sich die Gerade um den y-Achsenabschnitt nach innen. Steigt m, verschiebt sich die Gerade parallel nach außen. Beides verändert die erreichbare Menge — Grundlage der komparativen Statik.`;

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

  const clr1 = col.accent, clr2 = col.accent2;
  const curves = [
    { u: u1, c: clr1, label: 'I₁ (ū=' + u1 + ')' },
    { u: u2, c: clr2, label: 'I₂ (ū=' + u2 + ')' },
  ];
  curves.sort((a, b) => a.u - b.u).forEach(cv =>
    ge.drawIK(ctx, axMax, cv.u, cv.c, cv.label, sx, sy, progress));

  // "higher utility" hint — placed in upper-right to avoid curve-label zone
  if (progress >= 0.9) {
    ctx.fillStyle = col.accent2 + '99';
    ctx.font      = `${fsBase + 2}px ${col.fontBody}`;
    ctx.textAlign = 'right';
    ctx.fillText('↗ höherer Nutzen', PAD + PW * 0.96, PAD + PH * 0.15);
  }

  ge.drawLegend(ctx, w, [
    { color: clr1,      label: 'I₁ — Indiff.kurve (ū=' + u1 + ')' },
    { color: clr2,      label: 'I₂ — Indiff.kurve (ū=' + u2 + ')' },
    { color: col.label, label: 'u(x₁,x₂) = x₁ · x₂ = ū' },
  ], col.accent2 + '66');

  document.getElementById('graph_info').innerHTML =
    `<span class="gi-label">Interpretation</span>
    <div class="gi-eq">u(x₁, x₂) = x₁ · x₂</div>
    Die Grafik zeigt zwei Indifferenzkurven mit den Nutzenniveaus <strong>ū₁ = ${u1}</strong> und <strong>ū₂ = ${u2}</strong>.
    Jeder Punkt auf einer Kurve liefert dem Haushalt exakt dasselbe Nutzenniveau — er ist zwischen allen diesen Bündeln indifferent.
    ${u2 > u1 ? `Die äußere Kurve (ū = ${u2}) liegt weiter vom Ursprung und repräsentiert <strong>höheren Nutzen</strong>.` : `Die innere Kurve (ū = ${u1}) liegt weiter vom Ursprung und repräsentiert <strong>höheren Nutzen</strong>.`}
    Die konvexe Form zeigt, dass Konsumenten gemischte Bündel gegenüber Extremen bevorzugen (abnehmende Grenzrate der Substitution).
    <strong>Klausurtipp:</strong> Indifferenzkurven schneiden sich nie — sonst wäre ein Bündel gleichzeitig besser und gleich gut, ein Widerspruch zur Transitivität.`;

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
  const axMax = Math.max(x1max, x2max) * 1.35;
  const fsBase = Math.max(11, Math.round(Math.min(w, h) * 0.022));
  const fsBold = Math.max(12, Math.round(Math.min(w, h) * 0.026));
  const { PAD, PW, PH, sx, sy } = ge.drawScene(w, h, ctx, axMax,
    'x₁ (Menge Gut 1)', 'x₂ (Menge Gut 2)');

  // Budget area fill
  ctx.fillStyle = col.accent + '0d';
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(0));
  ctx.lineTo(sx(x1max), sy(0));
  ctx.lineTo(sx(0), sy(x2max));
  ctx.closePath();
  ctx.fill();

  // Budget line — animated
  const x1end = x1max * progress;
  const x2end = x2max - (x2max / x1max) * x1end;
  ctx.strokeStyle = col.accent;
  ctx.lineWidth   = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(x2max));
  ctx.lineTo(sx(x1end), sy(x2end));
  ctx.stroke();

  // Indifference curve through optimum — animated (no direct label; legend covers it)
  ge.drawIK(ctx, axMax, ustar, col.accent2, null, sx, sy, progress);

  // Drop-lines to axes (dashed) — appear after curves
  if (progress >= 0.85) {
    ctx.strokeStyle = col.warn + '80';
    ctx.lineWidth   = 1.2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(sx(x1s), sy(x2s)); ctx.lineTo(sx(x1s), sy(0)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(x1s), sy(x2s)); ctx.lineTo(sx(0), sy(x2s)); ctx.stroke();
    ctx.setLineDash([]);

    // Axis value labels
    ctx.fillStyle = col.warn;
    ctx.font      = `bold ${fsBold}px ${col.fontBody}`;
    ctx.textAlign = 'center';
    ctx.fillText('x₁* = ' + x1s.toFixed(1), sx(x1s), sy(0) + 30);
    ctx.textAlign = 'right';
    ctx.fillText('x₂* = ' + x2s.toFixed(1), sx(0) - 6, sy(x2s) + 4);
  }

  // Optimum dot + GRS label — appear last
  if (progress >= 0.92) {
    drawDot(ctx, sx(x1s), sy(x2s), 6, col.warn, col.bg);
    ctx.fillStyle = col.text;
    ctx.font      = `bold ${fsBold + 1}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('E* (Optimum)', sx(x1s) + 10, sy(x2s) - 8);

    // GRS annotation — placed below optimum label, well clear of legend area
    ctx.fillStyle = col.warn + 'b3';
    ctx.font      = `${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('GRS = p₁/p₂ = ' + (p1 / p2).toFixed(2), sx(x1s) + 10, sy(x2s) + 8);
  }

  ge.drawLegend(ctx, w, [
    { color: col.accent,       label: 'Budgetgerade p₁x₁+p₂x₂=m' },
    { color: col.accent2,      label: 'Indifferenzkurve u=x₁·x₂=' + ustar.toFixed(1) },
    { color: col.warn, dot: true, label: 'Optimum E*: x₁*=' + x1s.toFixed(1) + ', x₂*=' + x2s.toFixed(1) },
    { color: col.warn + '80', dash: true, label: 'Hilfslinien zum Optimum' },
  ], col.accent2 + '59', 20);

  document.getElementById('graph_info').innerHTML =
    `<span class="gi-label">Interpretation</span>
    Das Haushaltsoptimum liegt bei <strong>x₁* = ${x1s.toFixed(2)}</strong>, <strong>x₂* = ${x2s.toFixed(2)}</strong> mit einem maximalen Nutzen von <strong>u* = ${ustar.toFixed(2)}</strong>.
    In diesem Punkt berührt die höchstmögliche Indifferenzkurve gerade noch die Budgetgerade — die Grenzrate der Substitution (GRS) entspricht exakt dem Preisverhältnis: <strong>GRS = p₁/p₂ = ${(p1/p2).toFixed(3)}</strong>.
    Das bedeutet: der Haushalt bewertet die letzte Einheit x₁ subjektiv genauso wie der Markt sie bepreist. Jede Umschichtung des Budgets würde den Nutzen senken.
    <strong>Klausurtipp:</strong> Die Tangentialbedingung GRS = p₁/p₂ ist die zentrale Optimierungsbedingung — sie wird fast immer abgefragt. In der Klausur: Lagrange aufstellen oder direkt GRS = MU₁/MU₂ = p₁/p₂ setzen.`;

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
  ctx.fillStyle = col.warn + '30';
  ctx.beginPath();
  ctx.moveTo(sx(ym), sy(pm));
  for (let y = ym; y <= yvk; y += (yvk - ym) / 60) ctx.lineTo(sx(y), sy(a - y));
  for (let y = yvk; y >= ym; y -= (yvk - ym) / 60) ctx.lineTo(sx(y), sy(2 * c * y));
  ctx.closePath();
  ctx.fill();

  // Profit rectangle — instant
  ctx.fillStyle = col.accent2 + '14';
  ctx.fillRect(sx(0), sy(pm), sx(ym) - sx(0), sy(mcAtYm) - sy(pm));

  // Region labels — appear once fills are shown
  if (progress >= 0.3) {
    const dwlCX = (ym + ym + yvk) / 3;
    const dwlCY = (pm + mcAtYm + pvk) / 3;
    ctx.fillStyle = col.warn + 'e6';
    ctx.font      = `bold ${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'center';
    ctx.fillText('DWL', sx(dwlCX), sy(dwlCY) - 2);

    ctx.fillStyle = col.accent2 + 'cc';
    ctx.font      = `bold ${Math.max(11, fsBase - 2)}px ${col.fontBody}`;
    ctx.fillText('π (Monopolgewinn)', sx(ym / 2), sy((pm + mcAtYm) / 2));
  }

  // Demand curve — animated (labelled in legend)
  ctx.strokeStyle = col.accent;
  ctx.lineWidth   = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(a));
  ctx.lineTo(sx(a * progress), sy(a - a * progress));
  ctx.stroke();

  // MR curve (dashed) — animated with slight delay (labelled in legend)
  if (progress >= 0.2) {
    const mrProg = Math.min(1, (progress - 0.2) / 0.8);
    ctx.strokeStyle = col.accent + 'b3';
    ctx.lineWidth   = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(a));
    ctx.lineTo(sx((a / 2) * mrProg), sy(a - 2 * (a / 2) * mrProg));
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // MC curve — animated with further delay (labelled in legend)
  if (progress >= 0.4) {
    const mcProg = Math.min(1, (progress - 0.4) / 0.6);
    ctx.strokeStyle = col.accent2;
    ctx.lineWidth   = 2.5;
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(0));
    ctx.lineTo(sx(xMax * mcProg), sy(2 * c * xMax * mcProg));
    ctx.stroke();
  }

  // Guide lines — appear after curves
  if (progress >= 0.85) {
    ctx.strokeStyle = col.warn + '99';
    ctx.lineWidth   = 1.2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(sx(0), sy(pm));  ctx.lineTo(sx(ym), sy(pm));  ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(ym), sy(0));  ctx.lineTo(sx(ym), sy(pm));  ctx.stroke();
    // Competitive guide lines
    ctx.strokeStyle = col.muted + '80';
    ctx.beginPath(); ctx.moveTo(sx(0), sy(pvk)); ctx.lineTo(sx(yvk), sy(pvk)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(yvk), sy(0)); ctx.lineTo(sx(yvk), sy(pvk)); ctx.stroke();
    ctx.setLineDash([]);

    // Axis value labels (monopoly)
    ctx.fillStyle = col.warn;
    ctx.font      = `bold ${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'center';
    ctx.fillText('yₘ=' + ym.toFixed(2), sx(ym), sy(0) + 30);
    ctx.textAlign = 'right';
    ctx.fillText('pₘ=' + pm.toFixed(2), sx(0) - 6, sy(pm) + 4);

    // Axis value labels (competitive) — use muted colour
    ctx.fillStyle = col.muted;
    ctx.font      = `${Math.max(10, fsBase - 1)}px ${col.fontBody}`;
    ctx.textAlign = 'center';
    ctx.fillText('y_vk=' + yvk.toFixed(2), sx(yvk), sy(0) + 44);
    ctx.textAlign = 'right';
    ctx.fillText('p_vk=' + pvk.toFixed(2), sx(0) - 6, sy(pvk) + 4);
  }

  // Equilibrium dots + labels — appear last
  if (progress >= 0.92) {
    // Monopoly (Cournotscher) point
    drawDot(ctx, sx(ym), sy(pm), 6, col.warn, col.bg);
    ctx.fillStyle = col.text;
    ctx.font      = `bold ${fsBold}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('Cournotscher Punkt', sx(ym) + 10, sy(pm) - 8);

    // Competitive equilibrium point
    drawDot(ctx, sx(yvk), sy(pvk), 6, col.muted, col.bg);
    ctx.fillStyle = col.muted;
    ctx.font      = `${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('Wettbewerb', sx(yvk) + 8, sy(pvk) + 4);
  }

  ge.drawLegend(ctx, w, [
    { color: col.accent,                             label: 'Nachfrage D (p = a−y)' },
    { color: col.accent + 'b3',   dash: true,        label: 'Grenzerlös MR (a−2y)' },
    { color: col.accent2,                            label: 'Grenzkosten MC (2cy)' },
    { color: col.warn,            dot: true,          label: 'Cournot: yₘ=' + ym.toFixed(2) + ', pₘ=' + pm.toFixed(2) },
    { color: col.warn,            fill: col.warn+'30', label: 'Wohlfahrtsverlust DWL' },
    { color: col.accent2,         fill: col.accent2+'14', label: 'Monopolgewinn π' },
  ], col.accent2 + '59', 20);

  { const profitM = (pm - mcAtYm) * ym;
  document.getElementById('graph_info').innerHTML =
    `<span class="gi-label">Interpretation</span>
    Der Monopolist wählt die Menge <strong>yₘ = ${ym.toFixed(2)}</strong> und setzt den Preis <strong>pₘ = ${pm.toFixed(2)}</strong> — dort, wo Grenzerlös gleich Grenzkosten ist (MR = MC).
    Im Vergleich zum Wettbewerbsgleichgewicht (<strong>y = ${yvk.toFixed(2)}</strong>, <strong>p = ${pvk.toFixed(2)}</strong>) produziert der Monopolist weniger und verlangt mehr.
    Der Monopolgewinn beträgt <strong>π ≈ ${profitM.toFixed(2)}</strong> (Rechteck zwischen pₘ und MC).
    Das orange Dreieck (DWL) zeigt den Wohlfahrtsverlust: Tauschgewinne, die weder Produzent noch Konsument realisieren. Je größer die Marktmacht, desto größer der Verlust.
    <strong>Klausurtipp:</strong> Optimierungsbedingung ist MR = MC, nicht P = MC. Das DWL-Dreieck lässt sich als ½ · (yᵥₖ − yₘ) · (pₘ − pᵥₖ) berechnen. Häufige Folgefrage: Wie verändert eine Steuer das Cournot-Gleichgewicht?`;
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

  // IK curves — animated
  ge.drawIK(ctx, axMax, u0, col.accent,  'I₀ (ū=' + u0.toFixed(1) + ')', sx, sy, progress);
  if (Math.abs(u1 - u0) > 0.01)
    ge.drawIK(ctx, axMax, u1, col.accent2, 'I₁ (ū=' + u1.toFixed(1) + ')', sx, sy, progress);

  // Budget lines helper — yFrac controls label vertical position to avoid overlap
  function bLine(p1, color, label, dash, yFrac = 0.72) {
    const xi = m / p1, yi = m / p2;
    // Animate the line along x-axis
    const xiEnd = xi * progress;
    ctx.strokeStyle = color;
    ctx.lineWidth   = 2.5;
    if (dash) ctx.setLineDash([8, 6]);
    else ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(yi));
    ctx.lineTo(sx(xiEnd), sy(yi - (yi / xi) * xiEnd));
    ctx.stroke();
    ctx.setLineDash([]);
    if (label && progress >= 0.8) {
      ctx.fillStyle = color;
      ctx.font      = `bold ${fsBold}px ${col.fontBody}`;
      ctx.textAlign = 'left';
      ctx.fillText(label, sx(xi * 0.75), sy(yi * yFrac));
    }
  }
  bLine(p1_0, col.accent, 'Budget (initial)', false, 0.72);
  // Offset the second label vertically to prevent overlap when prices are similar
  bLine(p1_1, col.warn,   'Budget (neu)',     false, 0.54);

  // Compensated budget line
  if (progress >= 0.5) {
    const compProg = Math.min(1, (progress - 0.5) / 0.5);
    const m_comp = p1_1 * x1_c + p2 * x2_c;
    const xi_c = m_comp / p1_1, yi_c = m_comp / p2;
    const xiEndC = xi_c * compProg;
    ctx.strokeStyle = col.accent2 + 'cc';
    ctx.lineWidth   = 2;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(yi_c));
    ctx.lineTo(sx(xiEndC), sy(yi_c - (yi_c / xi_c) * xiEndC));
    ctx.stroke();
    ctx.setLineDash([]);
    if (progress >= 0.85) {
      ctx.fillStyle = col.accent2;
      ctx.font      = `bold ${fsBold}px ${col.fontBody}`;
      ctx.textAlign = 'left';
      ctx.fillText('Kompensiertes Budget', sx(xi_c * 0.52), sy(yi_c * 0.48) - 8);
    }
  }

  // Points A, B, C — appear at end
  if (progress >= 0.88) {
    function dot(x, y, color, tag) {
      drawDot(ctx, sx(x), sy(y), 6, color, col.bg);
      ctx.fillStyle = col.text;
      ctx.font      = `${fsBase + 1}px ${col.fontBody}`;
      ctx.textAlign = 'left';
      ctx.fillText(tag, sx(x) + 9, sy(y) - 8);
      ctx.fillStyle = color;
      ctx.font      = `bold ${fsBase}px ${col.fontBody}`;
      ctx.fillText(`(${x.toFixed(2)}, ${y.toFixed(2)})`, sx(x) + 9, sy(y) + 5);
    }
    dot(x1_0, x2_0, col.accent,  'A');
    dot(x1_c, x2_c, col.accent2, 'B');
    dot(x1_1, x2_1, col.warn,    'C');

    // Effect arrows
    ctx.lineWidth   = 2;
    ctx.strokeStyle = col.accent2;
    ctx.beginPath(); ctx.moveTo(sx(x1_0), sy(x2_0)); ctx.lineTo(sx(x1_c), sy(x2_c)); ctx.stroke();
    ctx.strokeStyle = col.warn;
    ctx.beginPath(); ctx.moveTo(sx(x1_c), sy(x2_c)); ctx.lineTo(sx(x1_1), sy(x2_1)); ctx.stroke();
  }

  ge.drawLegend(ctx, w, [
    { color: col.accent,  dot: true, label: 'A – Initiales Optimum' },
    { color: col.accent2, dot: true, label: 'B – Kompensiertes Optimum (SE)' },
    { color: col.warn,    dot: true, label: 'C – Finales Optimum' },
    { color: col.accent2, dash: true, label: 'Kompensierte Budgetgerade' },
    { color: col.text,    label: 'A → B = Substitutionseffekt' },
    { color: col.text,    label: 'B → C = Einkommenseffekt' },
  ], col.accent2 + '59', 20);

  { const direction = p1_1 > p1_0 ? 'gestiegen' : 'gesunken';
  const seDir = SE > 0 ? 'erhöht' : 'gesenkt';
  const eeDir = EE > 0 ? 'erhöht' : 'gesenkt';
  document.getElementById('graph_info').innerHTML =
    `<span class="gi-label">Interpretation</span>
    Der Preis von Gut 1 ist von <strong>p₁ = ${p1_0.toFixed(2)}</strong> auf <strong>${p1_1.toFixed(2)}</strong> ${direction}.
    <strong>Substitutionseffekt (A → B):</strong> Bei konstantem Nutzenniveau u₀ = ${u0.toFixed(2)} ${seDir} der Haushalt x₁ um <strong>${Math.abs(SE).toFixed(3)}</strong> Einheiten — er substituiert entlang der ursprünglichen Indifferenzkurve.
    <strong>Einkommenseffekt (B → C):</strong> Die Kaufkraftveränderung ${eeDir} x₁ um weitere <strong>${Math.abs(EE).toFixed(3)}</strong> Einheiten.
    <strong>Gesamteffekt:</strong> x₁ verändert sich insgesamt um <strong>${total.toFixed(3)}</strong> Einheiten. ${Math.abs(SE) > Math.abs(EE) ? 'Der Substitutionseffekt dominiert.' : Math.abs(EE) > Math.abs(SE) ? 'Der Einkommenseffekt dominiert.' : 'Beide Effekte sind etwa gleich groß.'}
    <strong>Klausurtipp:</strong> ${total < 0 ? 'Die Nachfrage sinkt bei Preisanstieg — normales Gut. ' : total > 0 ? 'Die Nachfrage steigt bei Preisanstieg — Giffen-Gut (EE überwiegt SE). ' : ''}In der Zerlegung: zuerst das kompensierte Budget berechnen (Slutsky: m\' = p₁\'·x₁⁰ + p₂·x₂⁰), dann die Optima vergleichen.`;
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
    const labelLabor = Math.min(xMax * 0.7, Math.max(1.2, output * 1.2));
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

  drawIsoquantCurve(ctx, sx, sy, xMax, yMax, alpha, output, col.accent, `Isoquante ȳ=${output.toFixed(1)}`, fsBase, progress);

  if (!showGrts) {
    drawIsoquantCurve(ctx, sx, sy, xMax, yMax, alpha, output * 1.5, col.accent2, `Isoquante ${(output * 1.5).toFixed(1)}`, Math.max(11, fsBase - 1), progress, [6, 4]);
  }

  if (progress >= 0.85 && Number.isFinite(capitalPoint) && capitalPoint <= yMax) {
    drawDot(ctx, sx(laborPoint), sy(capitalPoint), 6, showGrts ? col.warn : col.accent2, col.bg);
    ctx.fillStyle = showGrts ? col.warn : col.text;
    ctx.font = `bold ${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText(showGrts ? 'Punkt mit GRTS' : 'Beobachteter Einsatz', sx(laborPoint) + 10, sy(capitalPoint) - 8);
  }

  if (showGrts && progress >= 0.88 && Number.isFinite(capitalPoint) && capitalPoint <= yMax) {
    const grts = ((1 - alpha) / alpha) * (capitalPoint / laborPoint);
    const slope = -grts;
    const leftL = Math.max(0.8, laborPoint - 1.4);
    const rightL = Math.min(xMax, laborPoint + 1.4);
    const leftK = capitalPoint + slope * (leftL - laborPoint);
    const rightK = capitalPoint + slope * (rightL - laborPoint);

    ctx.strokeStyle = col.warn;
    ctx.lineWidth = 2;
    ctx.setLineDash([7, 5]);
    ctx.beginPath();
    ctx.moveTo(sx(leftL), sy(leftK));
    ctx.lineTo(sx(rightL), sy(rightK));
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = col.warn;
    ctx.font = `bold ${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText(`Tangente: GRTS = ${grts.toFixed(2)}`, sx(Math.min(xMax * 0.58, laborPoint + 0.6)), sy(Math.min(yMax * 0.92, capitalPoint + 1.6)));

    document.getElementById('graph_info').innerHTML =
      `<span class="gi-label">Interpretation — GRTS</span>
      <div class="gi-eq">GRTS = MP_L / MP_K = ((1−α)/α) · K/L = ${grts.toFixed(2)}</div>
      Am markierten Punkt (L = ${laborPoint.toFixed(2)}, K = ${capitalPoint.toFixed(2)}) beträgt die Grenzrate der technischen Substitution <strong>${grts.toFixed(2)}</strong>.
      Das bedeutet: eine zusätzliche Einheit Arbeit kann bei konstantem Output <strong>${grts.toFixed(2)}</strong> Einheiten Kapital ersetzen.
      Die GRTS entspricht der Steigung der Isoquante — sie nimmt ab, je mehr Arbeit relativ zu Kapital eingesetzt wird (konvexe Isoquanten).
      <strong>Klausurtipp:</strong> Im Kostenminimum gilt GRTS = w/r. Ist die aktuelle GRTS größer als w/r, lohnt sich mehr Arbeit und weniger Kapital — und umgekehrt.`;

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
  document.getElementById('graph_info').innerHTML =
    `<span class="gi-label">Interpretation — Isoquanten</span>
    <div class="gi-eq">F(K, L) = K^${alpha.toFixed(2)} · L^${(1 - alpha).toFixed(2)}</div>
    Die innere Isoquante zeigt alle Kombinationen von Arbeit und Kapital, die den Output <strong>ȳ = ${output.toFixed(1)}</strong> erzeugen.
    Die äußere Kurve (ȳ = ${secondOutput.toFixed(1)}) erfordert durchweg mehr Inputs — sie liegt weiter vom Ursprung.
    Am markierten Punkt benötigt das Unternehmen für ȳ = ${output.toFixed(1)} rund <strong>L = ${laborPoint.toFixed(1)}</strong> Arbeit und <strong>K = ${capitalPoint.toFixed(2)}</strong> Kapital.
    Entlang jeder Isoquante kann Arbeit durch Kapital ersetzt werden (und umgekehrt) — die konvexe Form zeigt, dass diese Substitution zunehmend schwieriger wird.
    <strong>Klausurtipp:</strong> ${alpha.toFixed(2) === '0.50' ? 'Bei α = 0.5 sind die Skalenerträge konstant (α + (1−α) = 1) — eine Verdopplung aller Inputs verdoppelt den Output.' : parseFloat(alpha.toFixed(2)) + parseFloat((1 - alpha).toFixed(2)) > 1 ? 'Hier liegen steigende Skalenerträge vor (α + (1−α) > 1).' : parseFloat(alpha.toFixed(2)) + parseFloat((1 - alpha).toFixed(2)) < 1 ? 'Hier liegen sinkende Skalenerträge vor (α + (1−α) < 1).' : 'Bei α + (1−α) = 1 liegen konstante Skalenerträge vor.'}`;


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

  drawIsoquantCurve(ctx, sx, sy, xMax, yMax, alpha, output, col.accent, `Isoquante ȳ=${output.toFixed(1)}`, fsBase, progress);

  ctx.strokeStyle = col.accent2;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(yIntercept));
  ctx.lineTo(sx(xIntercept * progress), sy(yIntercept - (yIntercept / xIntercept) * (xIntercept * progress)));
  ctx.stroke();

  if (progress >= 0.82) {
    ctx.fillStyle = col.accent2;
    ctx.font = `bold ${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('Isokostengerade', sx(xIntercept * 0.45), sy(yIntercept * 0.45) - 10);

    drawDot(ctx, sx(laborStar), sy(capitalStar), 6, col.warn, col.bg);
    ctx.fillStyle = col.text;
    ctx.fillText('Kostenminimum', sx(laborStar) + 10, sy(capitalStar) - 8);

    ctx.strokeStyle = col.warn + '88';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(sx(laborStar), sy(capitalStar)); ctx.lineTo(sx(laborStar), sy(0)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(laborStar), sy(capitalStar)); ctx.lineTo(sx(0), sy(capitalStar)); ctx.stroke();
    ctx.setLineDash([]);
  }

  document.getElementById('graph_info').innerHTML =
    `<span class="gi-label">Interpretation — Kostenminimierung</span>
    <div class="gi-eq">min C = w·L + r·K  s.t. F(K,L) = ȳ</div>
    Bei Faktorpreisen <strong>w = ${wage.toFixed(2)}</strong> (Lohn) und <strong>r = ${rent.toFixed(2)}</strong> (Kapitalzins) und einem Zieloutput von <strong>ȳ = ${output.toFixed(1)}</strong>
    liegt das kostenminimale Inputbündel bei <strong>L* = ${laborStar.toFixed(2)}</strong>, <strong>K* = ${capitalStar.toFixed(2)}</strong>.
    Im Optimum gilt <strong>GRTS = w/r = ${(wage / rent).toFixed(2)}</strong> — die Isoquante berührt die Isokostengerade tangential.
    Die minimalen Gesamtkosten betragen <strong>C = ${totalCost.toFixed(2)}</strong>. Jede andere Inputkombination auf derselben Isoquante wäre teurer.
    <strong>Klausurtipp:</strong> Das Kostenminimum ergibt sich aus GRTS = w/r zusammen mit der Produktionsfunktion F(K,L) = ȳ — zwei Gleichungen, zwei Unbekannte. Steigt w relativ zu r, verschiebt sich das Optimum hin zu mehr Kapital.`;

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
    ctx.fillStyle = col.accent + '18';
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(a));
    ctx.lineTo(sx(qEq), sy(pEq));
    ctx.lineTo(sx(0), sy(pEq));
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = col.accent2 + '18';
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(c));
    ctx.lineTo(sx(qEq), sy(pEq));
    ctx.lineTo(sx(0), sy(pEq));
    ctx.closePath();
    ctx.fill();
  }

  ctx.strokeStyle = col.accent;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(a));
  ctx.lineTo(sx(qIntercept * progress), sy(a - b * qIntercept * progress));
  ctx.stroke();

  const supplyEnd = Math.min(xMax, (yMax - c) / d);
  ctx.strokeStyle = col.accent2;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(c));
  ctx.lineTo(sx(supplyEnd * progress), sy(c + d * supplyEnd * progress));
  ctx.stroke();

  if (progress >= 0.84) {
    ctx.fillStyle = col.accent;
    ctx.font = `bold ${fsBase}px ${col.fontBody}`;
    ctx.textAlign = 'left';
    ctx.fillText('Nachfrage', sx(xMax * 0.68), sy(a - b * xMax * 0.68) - 8);

    ctx.fillStyle = col.accent2;
    ctx.fillText('Angebot', sx(xMax * 0.62), sy(c + d * xMax * 0.62) + 18);
  }

  if (hasTrade && progress >= 0.88) {
    drawDot(ctx, sx(qEq), sy(pEq), 6, col.warn, col.bg);
    ctx.fillStyle = col.text;
    ctx.font = `bold ${fsBase}px ${col.fontBody}`;
    ctx.fillText('Gleichgewicht', sx(qEq) + 10, sy(pEq) - 8);

    ctx.strokeStyle = col.warn + '88';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(sx(qEq), sy(pEq)); ctx.lineTo(sx(qEq), sy(0)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sx(qEq), sy(pEq)); ctx.lineTo(sx(0), sy(pEq)); ctx.stroke();
    ctx.setLineDash([]);
  }

  document.getElementById('graph_info').innerHTML = hasTrade
    ? `<span class="gi-label">Interpretation — Marktgleichgewicht</span>
      <div class="gi-eq">D: p = ${a.toFixed(0)} − ${b.toFixed(2)}·q &nbsp;&nbsp; S: p = ${c.toFixed(0)} + ${d.toFixed(2)}·q</div>
      Im Gleichgewicht schneiden sich Angebots- und Nachfragekurve bei <strong>p* = ${pEq.toFixed(2)}</strong> und <strong>q* = ${qEq.toFixed(2)}</strong>.
      Die <strong>Konsumentenrente ≈ ${cs.toFixed(2)}</strong> misst die Ersparnis der Käufer gegenüber ihrer maximalen Zahlungsbereitschaft (Dreieck über dem Gleichgewichtspreis).
      Die <strong>Produzentenrente ≈ ${ps.toFixed(2)}</strong> misst den Gewinn der Verkäufer über ihre Mindestkosten hinaus (Dreieck unter dem Gleichgewichtspreis).
      Gemeinsam bilden sie die gesamte Wohlfahrt — im Wettbewerbsgleichgewicht ist diese maximal.
      <strong>Klausurtipp:</strong> Das Gleichgewicht ergibt sich aus D = S. Eine Steuer t verschiebt die Angebotskurve nach oben und erzeugt einen DWL. Typische Frage: Berechne die neue Gleichgewichtsmenge und die Steuerinzidenz.`
    : `<span class="gi-label">Interpretation</span>
      <strong>Kein Handel möglich:</strong> Die Mindestkosten der Anbieter liegen oberhalb der maximalen Zahlungsbereitschaft der Nachfrager. In diesem Parameterbereich existiert kein positives Marktgleichgewicht — die Kurven schneiden sich nicht im positiven Bereich.`;

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
