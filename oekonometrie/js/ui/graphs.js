// ============================================================
// GRAPH DRAW FUNCTIONS — Ökonometrie
// Final Benchmark Standard v14.0
// ============================================================

import GraphEngine from './graphEngine.js';

// ── Animation state ────────────────────────────────────────
let _rafId = null;

function animateGraph(drawFn) {
  if (_rafId) { cancelAnimationFrame(_rafId); _rafId = null; }
  const t0 = performance.now();
  const DURATION = 400;
  function step(now) {
    const raw  = Math.min((now - t0) / DURATION, 1);
    const ease = 1 - Math.pow(1 - raw, 3);
    drawFn(ease);
    if (raw < 1) _rafId = requestAnimationFrame(step);
    else _rafId = null;
  }
  _rafId = requestAnimationFrame(step);
}

// ── Draw functions ─────────────────────────────────────────

function drawOLS(progress = 1) {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = ge.refreshColors();

  // Simple hardcoded OLS example
  const xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yValues = [2.1, 3.9, 4.2, 6.1, 5.8, 8.2, 9.1, 10.5, 11.8, 12.2];
  
  const xMax = 12, yMax = 15;
  const PAD = 72;
  const PW = w - PAD - 40;
  const PH = h - PAD - 50;
  const sx = x => PAD + (x / xMax) * PW;
  const sy = y => h - PAD - (y / yMax) * PH;

  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  // Axes
  ctx.strokeStyle = col.axis;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(PAD, 40); ctx.lineTo(PAD, h - PAD); ctx.lineTo(w - 40, h - PAD);
  ctx.stroke();

  // Data points
  if (progress > 0.5) {
    ctx.fillStyle = col.accent;
    xValues.forEach((x, i) => {
      ctx.beginPath();
      ctx.arc(sx(x), sy(yValues[i]), 4, 0, 2 * Math.PI);
      ctx.fill();
    });
  }

  // Regression line
  if (progress > 0.8) {
    ctx.strokeStyle = col.warn;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(sx(0), sy(1));
    ctx.lineTo(sx(11), sy(1 + 1.2 * 11));
    ctx.stroke();
  }
}

function initGraph(type, animate = true) {
  const fns = {
    ols_intro: p => drawOLS(p),
  };
  if (!fns[type]) return;
  if (animate) animateGraph(fns[type]);
  else fns[type](1);
}

export {
  drawOLS,
  initGraph
};
