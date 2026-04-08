// ============================================================
// GRAPH DRAW FUNCTIONS — Mikroökonomik II
// Final Benchmark Standard v14.0
// ============================================================

import GraphEngine from './graphEngine.js';

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

function drawNash(progress = 1) {
  const canvas = document.getElementById('graph_canvas');
  if (!canvas) return;
  const ge = new GraphEngine('graph_canvas');
  const { w, h, ctx } = ge.setup();
  if (!w) return;
  const col = ge.refreshColors();

  ctx.fillStyle = col.bg;
  ctx.fillRect(0, 0, w, h);

  // Draw 2x2 Matrix Placeholder
  const PAD = 100;
  const cellW = (w - 2 * PAD) / 2;
  const cellH = (h - 2 * PAD) / 2;

  ctx.strokeStyle = col.axis;
  ctx.lineWidth = 2;
  
  // Outer frame
  ctx.strokeRect(PAD, PAD, 2 * cellW, 2 * cellH);
  // Grid lines
  ctx.beginPath();
  ctx.moveTo(PAD + cellW, PAD); ctx.lineTo(PAD + cellW, h - PAD);
  ctx.moveTo(PAD, PAD + cellH); ctx.lineTo(w - PAD, PAD + cellH);
  ctx.stroke();

  ctx.font = 'bold 16px SF Mono, monospace';
  ctx.fillStyle = col.text;
  ctx.textAlign = 'center';

  // Strategy Labels
  ctx.fillText('H', PAD + cellW / 2, PAD - 20);
  ctx.fillText('N', PAD + cellW * 1.5, PAD - 20);
  ctx.save();
  ctx.translate(PAD - 40, PAD + cellH / 2); ctx.rotate(-Math.PI / 2);
  ctx.fillText('H', 0, 0); ctx.restore();
  ctx.save();
  ctx.translate(PAD - 40, PAD + cellH * 1.5); ctx.rotate(-Math.PI / 2);
  ctx.fillText('N', 0, 0); ctx.restore();

  if (progress > 0.5) {
    // Payoffs
    ctx.fillText('10, 10', PAD + cellW / 2, PAD + cellH / 2 + 5);
    ctx.fillText('0, 12', PAD + cellW * 1.5, PAD + cellH / 2 + 5);
    ctx.fillText('12, 0', PAD + cellW / 2, PAD + cellH * 1.5 + 5);
    ctx.fillStyle = col.accent;
    ctx.fillText('1, 1', PAD + cellW * 1.5, PAD + cellH * 1.5 + 5);
  }

  if (progress > 0.8) {
    // Highlight Nash
    ctx.strokeStyle = col.accent;
    ctx.lineWidth = 4;
    ctx.strokeRect(PAD + cellW + 10, PAD + cellH + 10, cellW - 20, cellH - 20);
  }
}

function initGraph(type, animate = true) {
  const fns = {
    spieltheorie_statisch: p => drawNash(p),
    spieltheorie_dynamisch: p => drawNash(p),
  };
  if (!fns[type]) return;
  if (animate) animateGraph(fns[type]);
  else fns[type](1);
}

export {
  initGraph
};
