// ============================================================
// EXAM GRAPH RENDERERS — Mikroökonomik I
// Canvas graphs used in the Probeklausur (Hicks, Demand, Isoquant)
// ============================================================

/**
 * Read all graph colours from live CSS custom properties.
 * Works correctly in both light and dark mode without any
 * hard-coded hex values.
 */
function getExamGraphColors() {
  // Must read from document.body so body.light-mode overrides are resolved correctly
  const s  = getComputedStyle(document.body);
  const cv = n => s.getPropertyValue(n).trim();
  const resolvedFont = cv('--font-mono') || s.fontFamily || cv('--font-body') || 'system-ui, sans-serif';
  return {
    bg:     cv('--bg')      || '#f2f2f7',
    axis:   cv('--text')    || '#1c1c1e',
    grid:   cv('--border')  || '#d1d1d6',
    curve1: cv('--accent')  || '#3a6b00',
    curve2: cv('--accent2') || '#0066a0',
    curve3: cv('--accent3') || '#c0392b',
    text:   cv('--text')    || '#1c1c1e',
    muted:  cv('--muted')   || '#6c6c70',
    fontMono: cv('--font-mono') || resolvedFont,
    fontBody: resolvedFont,
  };
}

/**
 * DPR-aware canvas setup for exam canvases.
 * Reads the canvas's displayed size (CSS layout) and sets
 * the internal pixel buffer accordingly, then scales the
 * context so all draw calls use logical (CSS) pixels.
 *
 * @returns {{ w: number, h: number, ctx: CanvasRenderingContext2D } | null}
 */
function setupExamCanvas(canvas) {
  if (!canvas) return null;
  const dpr  = window.devicePixelRatio || 1;
  const dispW = canvas.clientWidth  || canvas.offsetWidth  || 600;
  const dispH = canvas.clientHeight || canvas.offsetHeight || Math.round(dispW * 0.625);
  if (dispW === 0) return null;

  const bufW = Math.round(dispW * dpr);
  const bufH = Math.round(dispH * dpr);
  // Only resize buffer when dimensions actually changed (avoids clearing mid-draw)
  if (canvas.width !== bufW || canvas.height !== bufH) {
    canvas.width  = bufW;
    canvas.height = bufH;
  }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { w: dispW, h: dispH, ctx };
}

// ── Shared helpers ─────────────────────────────────────────

function drawDot(ctx, cx, cy, r, fillColor, bgColor) {
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.fillStyle = fillColor; ctx.fill();
  ctx.strokeStyle = bgColor; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, 2 * Math.PI);
  ctx.stroke();
}

// ── Hicks Decomposition Graph ──────────────────────────────
function drawHicksGraph() {
  const canvas = document.getElementById('canvas_hicks');
  const setup  = setupExamCanvas(canvas);
  if (!setup) return;
  const { w, h, ctx } = setup;
  const col = getExamGraphColors();

  const PAD = 52;
  const PW  = w - PAD - 30;
  const PH  = h - PAD - 30;

  // Responsive font
  const fs = Math.max(10, Math.round(w * 0.022));

  const xMax = 12, yMax = 10;
  const sx = x => PAD + (x / xMax) * PW;
  const sy = y => h - PAD - (y / yMax) * PH;

  // Background
  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  // Grid
  ctx.strokeStyle = col.grid;
  ctx.lineWidth   = 0.7;
  ctx.globalAlpha = 0.55;
  for (let i = 1; i <= xMax; i++) { ctx.beginPath(); ctx.moveTo(sx(i), PAD); ctx.lineTo(sx(i), h - PAD); ctx.stroke(); }
  for (let i = 1; i <= yMax; i++) { ctx.beginPath(); ctx.moveTo(PAD, sy(i)); ctx.lineTo(w - 30, sy(i)); ctx.stroke(); }
  ctx.globalAlpha = 1;

  // Axes + arrowheads
  ctx.strokeStyle = col.axis;
  ctx.lineWidth   = 2;
  ctx.beginPath(); ctx.moveTo(PAD, 20); ctx.lineTo(PAD, h - PAD); ctx.lineTo(w - 20, h - PAD); ctx.stroke();
  ctx.fillStyle = col.axis;
  ctx.beginPath(); ctx.moveTo(PAD, 20); ctx.lineTo(PAD - 5, 32); ctx.lineTo(PAD + 5, 32); ctx.fill();
  ctx.beginPath(); ctx.moveTo(w - 20, h - PAD); ctx.lineTo(w - 32, h - PAD - 5); ctx.lineTo(w - 32, h - PAD + 5); ctx.fill();

  // Axis labels
  ctx.fillStyle   = col.text;
  ctx.font        = `bold ${fs}px ${col.fontBody}`;
  ctx.textAlign   = 'center';
  ctx.fillText('x₁', w - 14, h - PAD + 4);
  ctx.save(); ctx.translate(16, h / 2); ctx.rotate(-Math.PI / 2); ctx.fillText('x₂', 0, 0); ctx.restore();

  // Old budget line: x₂ = 8 − 2x₁  (p₁=2, p₂=1, m=8)
  ctx.strokeStyle = col.curve1; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(sx(0), sy(8)); ctx.lineTo(sx(4), sy(0)); ctx.stroke();
  ctx.fillStyle = col.curve1; ctx.font = `${fs}px ${col.fontBody}`; ctx.textAlign = 'left';
  ctx.fillText('BG (alt)', sx(0.2), sy(7.6));

  // New budget line: x₂ = 8 − x₁  (p₁=1, p₂=1, m=8)
  ctx.strokeStyle = col.curve2; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(sx(0), sy(8)); ctx.lineTo(sx(8), sy(0)); ctx.stroke();
  ctx.fillStyle = col.curve2;
  ctx.fillText("BG (neu, p₁')", sx(5), sy(2.6));

  // Compensated budget line (same slope as new, tangent to old IC)
  const cIntercept = 6.4;
  ctx.strokeStyle = col.curve3; ctx.lineWidth = 2; ctx.setLineDash([6, 4]);
  ctx.beginPath(); ctx.moveTo(sx(0), sy(cIntercept)); ctx.lineTo(sx(cIntercept), sy(0)); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = col.curve3;
  ctx.fillText('BG (kompensiert)', sx(0.2), sy(cIntercept + 0.35));

  // Indifference curves
  // u₀ at A (old BG tangency)
  const u0 = 8 * Math.pow(1.6, 0.4) * Math.pow(4.8, 0.6);
  ctx.strokeStyle = col.muted; ctx.lineWidth = 2.5;
  ctx.beginPath();
  let first = true;
  for (let x1 = 0.15; x1 <= xMax; x1 += 0.05) {
    const x2 = Math.pow(u0 / (8 * Math.pow(x1, 0.4)), 1 / 0.6);
    if (x2 > yMax + 1 || x2 < 0) continue;
    if (first) { ctx.moveTo(sx(x1), sy(x2)); first = false; } else ctx.lineTo(sx(x1), sy(x2));
  }
  ctx.stroke();
  ctx.fillStyle = col.muted; ctx.font = `${Math.max(9, fs - 1)}px ${col.fontBody}`;
  ctx.fillText('u⁰', sx(5.2), sy(2.0));

  // u₁ at C (new BG tangency): x₁=3.2, x₂=4.8
  const Cx = 3.2, Cy = 4.8;
  const u1 = 8 * Math.pow(Cx, 0.4) * Math.pow(Cy, 0.6);
  ctx.strokeStyle = col.axis; ctx.lineWidth = 2.5;
  ctx.beginPath(); first = true;
  for (let x1 = 0.15; x1 <= xMax; x1 += 0.05) {
    const x2 = Math.pow(u1 / (8 * Math.pow(x1, 0.4)), 1 / 0.6);
    if (x2 > yMax + 1 || x2 < 0) continue;
    if (first) { ctx.moveTo(sx(x1), sy(x2)); first = false; } else ctx.lineTo(sx(x1), sy(x2));
  }
  ctx.stroke();
  ctx.fillStyle = col.axis; ctx.font = `${Math.max(9, fs - 1)}px ${col.fontBody}`;
  ctx.fillText('u¹', sx(7.2), sy(1.6));

  // Points A, B, C
  const Ax = 1.6, Ay = 4.8;
  const Bx = 2.18, By = Bx * 1.5;
  [[Ax, Ay, 'A'], [Bx, By, 'B'], [Cx, Cy, 'C']].forEach(([px, py, lbl]) => {
    drawDot(ctx, sx(px), sy(py), 5, col.text, col.bg);
    ctx.fillStyle   = col.text;
    ctx.font        = `bold ${fs}px ${col.fontBody}`;
    ctx.textAlign   = 'left';
    ctx.fillText(lbl, sx(px) + 8, sy(py) - 4);
  });

  // SE arrow (A → B, near x-axis)
  const arrowY = sy(0.35);
  ctx.strokeStyle = col.curve1; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(sx(Ax), arrowY); ctx.lineTo(sx(Bx), arrowY); ctx.stroke();
  ctx.fillStyle = col.curve1;
  ctx.beginPath(); ctx.moveTo(sx(Bx), arrowY); ctx.lineTo(sx(Bx) - 8, arrowY - 5); ctx.lineTo(sx(Bx) - 8, arrowY + 5); ctx.fill();
  ctx.font = `${Math.max(9, fs - 1)}px ${col.fontBody}`; ctx.textAlign = 'center';
  ctx.fillText('SE', sx((Ax + Bx) / 2), arrowY - 6);

  // EE arrow (B → C)
  const arrowY2 = sy(0.5);
  ctx.strokeStyle = col.curve2; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(sx(Bx), arrowY2); ctx.lineTo(sx(Cx), arrowY2); ctx.stroke();
  ctx.fillStyle = col.curve2;
  ctx.beginPath(); ctx.moveTo(sx(Cx), arrowY2); ctx.lineTo(sx(Cx) - 8, arrowY2 - 5); ctx.lineTo(sx(Cx) - 8, arrowY2 + 5); ctx.fill();
  ctx.fillText('EE', sx((Bx + Cx) / 2), arrowY2 - 6);

  // GE bracket (A → C)
  const arrowY3 = sy(0.08);
  ctx.strokeStyle = col.curve3; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(sx(Ax), arrowY3); ctx.lineTo(sx(Cx), arrowY3); ctx.stroke();
  ctx.fillStyle = col.curve3;
  ctx.beginPath(); ctx.moveTo(sx(Cx), arrowY3); ctx.lineTo(sx(Cx) - 8, arrowY3 - 5); ctx.lineTo(sx(Cx) - 8, arrowY3 + 5); ctx.fill();
  ctx.fillText('GE', sx((Ax + Cx) / 2), arrowY3 - 6);
}

// ── Supply & Demand Graph ──────────────────────────────────
function drawDemandGraph() {
  const canvas = document.getElementById('canvas_demand');
  const setup  = setupExamCanvas(canvas);
  if (!setup) return;
  const { w, h, ctx } = setup;
  const col = getExamGraphColors();

  const PAD = 52;
  const PW  = w - PAD - 30;
  const PH  = h - PAD - 30;
  const fs  = Math.max(10, Math.round(w * 0.022));

  const xMax = 220, yMax = 110;
  const sx = x => PAD + (x / xMax) * PW;
  const sy = y => h - PAD - (y / yMax) * PH;

  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  // Grid + tick labels
  ctx.globalAlpha = 0.55;
  [0, 50, 100, 150, 200].forEach(x => {
    ctx.strokeStyle = col.grid; ctx.lineWidth = 0.7;
    ctx.beginPath(); ctx.moveTo(sx(x), PAD); ctx.lineTo(sx(x), h - PAD); ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = col.muted; ctx.font = `${fs}px ${col.fontBody}`; ctx.textAlign = 'center';
    ctx.fillText(x, sx(x), h - PAD + 14);
    ctx.globalAlpha = 0.55;
  });
  [0, 25, 50, 75, 100].forEach(y => {
    ctx.strokeStyle = col.grid; ctx.lineWidth = 0.7;
    ctx.beginPath(); ctx.moveTo(PAD, sy(y)); ctx.lineTo(w - 30, sy(y)); ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = col.muted; ctx.font = `${fs}px ${col.fontBody}`; ctx.textAlign = 'right';
    ctx.fillText(y, PAD - 6, sy(y) + 4);
    ctx.globalAlpha = 0.55;
  });
  ctx.globalAlpha = 1;

  // Axes
  ctx.strokeStyle = col.axis; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(PAD, 20); ctx.lineTo(PAD, h - PAD); ctx.lineTo(w - 20, h - PAD); ctx.stroke();

  // Axis labels
  ctx.fillStyle = col.text; ctx.font = `bold ${fs}px ${col.fontBody}`;
  ctx.textAlign = 'center'; ctx.fillText('x_N (Menge)', PAD + PW / 2, h - PAD + 28);
  ctx.save(); ctx.translate(16, h / 2); ctx.rotate(-Math.PI / 2); ctx.fillText('p (Preis)', 0, 0); ctx.restore();

  // Demand curve: p = 100 − 0.5x
  ctx.strokeStyle = col.curve1; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(sx(0), sy(100)); ctx.lineTo(sx(200), sy(0)); ctx.stroke();
  ctx.fillStyle = col.curve1; ctx.font = `bold ${fs}px ${col.fontBody}`; ctx.textAlign = 'left';
  ctx.fillText('Nachfrage: p = 100 − ½x_N', sx(4), sy(95));

  // Supply curve: p = 2x (i.e. S(p)=0.5p inverted)
  ctx.strokeStyle = col.curve2; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(sx(0), sy(0)); ctx.lineTo(sx(110), sy(110 * 0.5)); ctx.stroke();
  ctx.fillStyle = col.curve2; ctx.font = `bold ${fs}px ${col.fontBody}`;
  ctx.fillText('Angebot: S(p) = ½p', sx(88), sy(40));

  // Equilibrium: p*=80, x*=40
  const px = 80, qx = 40;
  ctx.strokeStyle = col.muted; ctx.lineWidth = 1.2; ctx.setLineDash([5, 4]);
  ctx.beginPath(); ctx.moveTo(PAD, sy(px));  ctx.lineTo(sx(qx), sy(px));  ctx.stroke();
  ctx.beginPath(); ctx.moveTo(sx(qx), sy(0)); ctx.lineTo(sx(qx), sy(px)); ctx.stroke();
  ctx.setLineDash([]);

  drawDot(ctx, sx(qx), sy(px), 6, col.curve3, col.bg);
  ctx.fillStyle   = col.curve3;
  ctx.font        = `bold ${fs}px ${col.fontBody}`;
  ctx.textAlign   = 'left';
  ctx.fillText('GG: (x*=40, p*=80)', sx(qx) + 8, sy(px) - 6);

  // Consumer surplus shading
  ctx.fillStyle = col.curve1 + '30';
  ctx.beginPath();
  ctx.moveTo(sx(0), sy(100));
  ctx.lineTo(sx(qx), sy(px));
  ctx.lineTo(sx(0), sy(px));
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = col.curve1;
  ctx.font      = `${fs}px ${col.fontBody}`;
  ctx.textAlign = 'center';
  ctx.fillText('KR', sx(11), sy(88));
}

// ── Isoquant & Isocost Graph ───────────────────────────────
function drawIsoquantGraph() {
  const canvas = document.getElementById('canvas_isoquant');
  const setup  = setupExamCanvas(canvas);
  if (!setup) return;
  const { w, h, ctx } = setup;
  const col = getExamGraphColors();

  const PAD = 52;
  const PW  = w - PAD - 30;
  const PH  = h - PAD - 30;
  const fs  = Math.max(10, Math.round(w * 0.022));

  const xMax = 35, yMax = 35;
  const sx = x => PAD + (x / xMax) * PW;
  const sy = y => h - PAD - (y / yMax) * PH;

  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  // Grid + tick labels
  ctx.globalAlpha = 0.55;
  [0, 5, 10, 15, 20, 25, 30].forEach(v => {
    ctx.strokeStyle = col.grid; ctx.lineWidth = 0.7;
    ctx.beginPath(); ctx.moveTo(sx(v), PAD); ctx.lineTo(sx(v), h - PAD); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(PAD, sy(v)); ctx.lineTo(w - 30, sy(v)); ctx.stroke();
    ctx.globalAlpha = 1;
    ctx.fillStyle = col.muted; ctx.font = `${fs}px ${col.fontBody}`;
    ctx.textAlign = 'center'; ctx.fillText(v, sx(v), h - PAD + 14);
    ctx.textAlign = 'right';  ctx.fillText(v, PAD - 6, sy(v) + 4);
    ctx.globalAlpha = 0.55;
  });
  ctx.globalAlpha = 1;

  // Axes
  ctx.strokeStyle = col.axis; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(PAD, 20); ctx.lineTo(PAD, h - PAD); ctx.lineTo(w - 20, h - PAD); ctx.stroke();

  // Axis labels
  ctx.fillStyle = col.text; ctx.font = `bold ${fs}px ${col.fontBody}`;
  ctx.textAlign = 'center'; ctx.fillText('x₁', PAD + PW / 2, h - PAD + 28);
  ctx.save(); ctx.translate(16, h / 2); ctx.rotate(-Math.PI / 2); ctx.fillText('x₂', 0, 0); ctx.restore();

  // Isoquant ȳ=27: (x₁^(1/3) + x₂^(1/3))³ = 27
  ctx.strokeStyle = col.curve1; ctx.lineWidth = 2.5;
  ctx.beginPath();
  let first = true;
  for (let x1 = 0.1; x1 <= 27.5; x1 += 0.2) {
    const inner = 3 - Math.pow(x1, 1 / 3);
    if (inner <= 0) break;
    const x2 = Math.pow(inner, 3);
    if (x2 > xMax + 1) { first = true; continue; }
    if (first) { ctx.moveTo(sx(x1), sy(x2)); first = false; } else ctx.lineTo(sx(x1), sy(x2));
  }
  ctx.stroke();
  ctx.fillStyle = col.curve1; ctx.font = `bold ${fs}px ${col.fontBody}`; ctx.textAlign = 'left';
  ctx.fillText('ȳ = 27', sx(1), sy(29));

  // Isocost: w₁=1, w₂=4, C=12 → x₂ = (12−x₁)/4
  ctx.strokeStyle = col.curve2; ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(sx(0), sy(12 / 4)); ctx.lineTo(sx(12), sy(0)); ctx.stroke();
  ctx.fillStyle = col.curve2; ctx.font = `${fs}px ${col.fontBody}`;
  ctx.fillText('Isokost (C=12)', sx(0.5), sy(2.8));

  // Optimal point: x₁=8, x₂=1
  const optX1 = 8, optX2 = 1;
  drawDot(ctx, sx(optX1), sy(optX2), 6, col.curve3, col.bg);
  ctx.fillStyle = col.curve3; ctx.font = `bold ${fs}px ${col.fontBody}`; ctx.textAlign = 'left';
  ctx.fillText(`Optimum (${optX1}, ${optX2})`, sx(optX1) + 8, sy(optX2) + 4);
}

export { drawHicksGraph, drawDemandGraph, drawIsoquantGraph };
