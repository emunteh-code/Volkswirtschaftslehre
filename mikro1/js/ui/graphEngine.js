// ============================================================
// GRAPH ENGINE — Mikroökonomik I
// Base canvas drawing class for all interactive graphs
// ============================================================

// ── Colour helper ──────────────────────────────────────────
/** Convert a 3- or 6-digit hex colour + alpha (0-1) to an rgba() string. */
function hexToRgba(hex, alpha) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

class GraphEngine {
    constructor(canvasId) {
        this.canvas = null;
        this.ctx    = null;  // initialised before early-return so methods can guard on it

        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.padding = { top: 40, right: 40, bottom: 60, left: 60 };

        this.graphWidth = this.width - this.padding.left - this.padding.right;
        this.graphHeight = this.height - this.padding.top - this.padding.bottom;

        // Read live CSS custom properties from <body> so light-mode overrides apply
        const s = getComputedStyle(document.body);
        const cv = n => s.getPropertyValue(n).trim();
        // Use the browser's resolved font stack so canvas matches page typography exactly
        const resolvedFont = cv('--font-mono') || s.fontFamily || cv('--font-body') || 'system-ui, sans-serif';

        this.colors = {
            grid:         cv('--border')     || '#38383a',
            axis:         cv('--muted')      || '#8e8e93',
            budget:       cv('--accent')     || '#d4ff5c',
            indifference: cv('--accent2')    || '#5cf0ff',
            optimum:      cv('--sys-orange') || '#ff9f0a',
            vector:       cv('--accent3')    || '#ff6b6b',
            text:         cv('--text')       || '#f5f5f7',
            fontBody:     resolvedFont,
            fontMono:     cv('--font-mono')  || resolvedFont,
        };

        this.scale = { x: 10, y: 10 };
        this.origin = { x: this.padding.left, y: this.height - this.padding.bottom };
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    // Coordinate transformation
    toCanvas(x, y) {
        return {
            x: this.origin.x + x * (this.graphWidth / this.scale.x),
            y: this.origin.y - y * (this.graphHeight / this.scale.y)
        };
    }

    fromCanvas(cx, cy) {
        return {
            x: (cx - this.origin.x) * (this.scale.x / this.graphWidth),
            y: (this.origin.y - cy) * (this.scale.y / this.graphHeight)
        };
    }

    // Draw grid and axes (legacy — kept for backwards compat)
    drawAxes() {
        const ctx = this.ctx;
        const col = this.colors;

        ctx.strokeStyle = col.grid;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([2, 4]);

        for (let i = 1; i <= this.scale.x; i += 2) {
            const pos = this.toCanvas(i, 0);
            ctx.beginPath();
            ctx.moveTo(pos.x, this.padding.top);
            ctx.lineTo(pos.x, this.origin.y);
            ctx.stroke();
        }

        for (let i = 1; i <= this.scale.y; i += 2) {
            const pos = this.toCanvas(0, i);
            ctx.beginPath();
            ctx.moveTo(this.origin.x, pos.y);
            ctx.lineTo(this.width - this.padding.right, pos.y);
            ctx.stroke();
        }

        ctx.setLineDash([]);

        ctx.strokeStyle = col.axis;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(this.origin.x, this.origin.y);
        ctx.lineTo(this.width - this.padding.right, this.origin.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.origin.x, this.origin.y);
        ctx.lineTo(this.origin.x, this.padding.top);
        ctx.stroke();

        ctx.fillStyle = col.text;
        ctx.font = `18px ${col.fontBody}`;
        ctx.textAlign = 'center';
        ctx.fillText('x₁', this.width - this.padding.right + 15, this.origin.y + 5);
        ctx.textAlign = 'right';
        ctx.fillText('x₂', this.origin.x - 10, this.padding.top - 10);

        ctx.font = `14px ${col.fontBody}`;
        ctx.fillStyle = col.axis;

        for (let i = 0; i <= this.scale.x; i += 5) {
            const pos = this.toCanvas(i, 0);
            ctx.textAlign = 'center';
            ctx.fillText(i.toString(), pos.x, this.origin.y + 20);
        }

        for (let i = 0; i <= this.scale.y; i += 5) {
            const pos = this.toCanvas(0, i);
            ctx.textAlign = 'right';
            ctx.fillText(i.toString(), this.origin.x - 8, pos.y + 4);
        }
    }

    // Draw budget line (legacy)
    drawBudgetLine(p1, p2, m, label = 'Budget', color = null) {
        const ctx = this.ctx;
        const col = this.colors;
        const xIntercept = m / p1;
        const yIntercept = m / p2;

        const start = this.toCanvas(0, yIntercept);
        const end = this.toCanvas(xIntercept, 0);

        ctx.strokeStyle = color || col.budget;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        if (label) {
            ctx.fillStyle = color || col.budget;
            ctx.font = `bold 14px ${col.fontBody}`;
            ctx.textAlign = 'left';
            ctx.fillText(label, end.x + 5, end.y - 5);
        }

        return { xIntercept, yIntercept, slope: -p1/p2 };
    }

    // Draw indifference curve (Cobb-Douglas) (legacy)
    drawIndifferenceCurve(alpha, utility, color = null, label = null) {
        const ctx = this.ctx;
        const col = this.colors;
        ctx.strokeStyle = color || col.indifference;
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        const steps = 100;
        let first = true;

        for (let i = 0; i <= steps; i++) {
            const x1 = (i / steps) * this.scale.x * 0.95 + 0.1;
            const x2 = Math.pow(utility / Math.pow(x1, alpha), 1 / (1 - alpha));

            if (x2 > 0 && x2 <= this.scale.y) {
                const pos = this.toCanvas(x1, x2);
                if (first) { ctx.moveTo(pos.x, pos.y); first = false; }
                else ctx.lineTo(pos.x, pos.y);
            }
        }
        ctx.stroke();

        if (label) {
            const lx = this.scale.x * 0.7;
            const ly = Math.pow(utility / Math.pow(lx, alpha), 1 / (1 - alpha));
            const labelPos = this.toCanvas(lx, ly);
            ctx.fillStyle = color || col.indifference;
            ctx.font = `14px ${col.fontBody}`;
            ctx.textAlign = 'left';
            ctx.fillText(label, labelPos.x, labelPos.y - 5);
        }
    }

    // Draw optimum point (legacy)
    drawOptimum(x1, x2, label = 'Optimum') {
        const ctx = this.ctx;
        const col = this.colors;
        const pos = this.toCanvas(x1, x2);

        // Theme-aware glow using --sys-orange
        const s = getComputedStyle(document.documentElement);
        const sysOrange = s.getPropertyValue('--sys-orange').trim() || '#ff9f0a';
        const glowA = hexToRgba(sysOrange, 0.45);
        const glowB = hexToRgba(sysOrange, 0);

        const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 15);
        gradient.addColorStop(0, glowA);
        gradient.addColorStop(1, glowB);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 15, 0, Math.PI * 2);
        ctx.fill();

        // Dot with theme-background border (lifts dot off curve)
        ctx.fillStyle = col.optimum;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
        ctx.fill();
        const bg = s.getPropertyValue('--bg').trim() || '#000';
        ctx.strokeStyle = bg;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = col.text;
        ctx.font = `bold 14px ${col.fontBody}`;
        ctx.textAlign = 'left';
        ctx.fillText(label, pos.x + 10, pos.y - 5);

        ctx.font = `13px ${col.fontBody}`;
        ctx.fillStyle = col.text;
        ctx.fillText(`(${x1.toFixed(1)}, ${x2.toFixed(1)})`, pos.x + 10, pos.y + 10);
    }

    // Draw arrow (legacy)
    drawArrow(from, to, label = null, color = null) {
        const ctx = this.ctx;
        const col = this.colors;
        const c = color || col.vector;
        const start = this.toCanvas(from.x, from.y);
        const end = this.toCanvas(to.x, to.y);

        ctx.strokeStyle = c;
        ctx.fillStyle = c;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        const angle = Math.atan2(end.y - start.y, end.x - start.x);
        const arrowLength = 10;
        ctx.beginPath();
        ctx.moveTo(end.x, end.y);
        ctx.lineTo(end.x - arrowLength * Math.cos(angle - Math.PI / 6), end.y - arrowLength * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(end.x - arrowLength * Math.cos(angle + Math.PI / 6), end.y - arrowLength * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();

        if (label) {
            ctx.font = `13px ${col.fontBody}`;
            ctx.textAlign = 'center';
            ctx.fillText(label, (start.x + end.x) / 2, (start.y + end.y) / 2 - 10);
        }
    }

    // ── Shared utility methods used by all standalone draw functions ──

    // DPR-aware canvas setup; returns {w, h, ctx}
    setup() {
      if (!this.canvas) return { w: 0, h: 0, ctx: null };
      const canvas = this.canvas;
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth  || canvas.width / dpr || 700;
      const h = canvas.clientHeight || canvas.height / dpr || 420;
      if (w === 0 || h === 0) {
        requestAnimationFrame(() => this.setup());
        return { w: 0, h: 0, ctx: canvas.getContext('2d') };
      }
      canvas.width  = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      this._w = w; this._h = h; this._ctx = ctx;
      return { w, h, ctx };
    }

    // Read live CSS custom properties for all semantic colors.
    // Must read from document.body (not documentElement) so that
    // body.light-mode custom property overrides are correctly resolved.
    refreshColors() {
      const s = getComputedStyle(document.body);
      const cv = n => s.getPropertyValue(n).trim();
      // Use the browser's resolved font so canvas always matches page typography
      const resolvedFont = s.fontFamily || cv('--font-body') || 'system-ui, sans-serif';
      this._col = {
        bg:       cv('--bg')        || '#f2f2f7',
        grid:     cv('--border')    || '#38383a',
        axis:     cv('--muted')     || '#8e8e93',
        tick:     cv('--muted')     || '#8e8e93',
        muted:    cv('--muted')     || '#8e8e93',
        label:    cv('--text')      || '#1c1c1e',
        text:     cv('--text')      || '#1c1c1e',
        accent:   cv('--accent')    || '#3a6b00',
        accent2:  cv('--accent2')   || '#0066a0',
        warn:     cv('--accent3')   || '#ff6b6b',
        card:     cv('--card')      || '#ffffff',
        fontMono: cv('--font-mono') || resolvedFont,
        fontBody: resolvedFont,
      };
      return this._col;
    }

    // Draw background + grid + axes + tick labels + axis name labels
    // xLabel/yLabel default to 'x₁ (Menge Gut 1)' / 'x₂ (Menge Gut 2)'
    drawScene(w, h, ctx, axMax, xLabel, yLabel) {
      const col = this._col;
      const PAD = 75;
      const PW = w - PAD - 40;
      const PH = h - PAD - 50;

      // Responsive font sizes
      const fsSm = Math.max(11, Math.round(Math.min(w, h) * 0.026));
      const fsMd = Math.max(12, Math.round(Math.min(w, h) * 0.032));

      // Background
      ctx.fillStyle = col.bg;
      ctx.fillRect(0, 0, w, h);

      // Grid lines + tick labels
      ctx.setLineDash([4, 5]);
      for (let i = 1; i <= 5; i++) {
        const gv = (axMax / 5) * i;
        const gx = PAD + (gv / axMax) * PW;
        const gy = h - PAD - (gv / axMax) * PH;

        ctx.strokeStyle = col.grid;
        ctx.globalAlpha = 0.55;
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(PAD, gy);     ctx.lineTo(w - 30, gy);    ctx.stroke();
        ctx.beginPath(); ctx.moveTo(gx, h - PAD); ctx.lineTo(gx, 40);        ctx.stroke();
        ctx.globalAlpha = 1;

        ctx.fillStyle = col.tick;
        ctx.font = `${fsSm}px ${col.fontBody}`;
        ctx.textAlign = 'center'; ctx.fillText(gv.toFixed(0), gx, h - PAD + 16);
        ctx.textAlign = 'right';  ctx.fillText(gv.toFixed(0), PAD - 6, gy + 4);
      }
      ctx.setLineDash([]);

      // Axes
      ctx.strokeStyle = col.axis;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(PAD, 40);
      ctx.lineTo(PAD, h - PAD);
      ctx.lineTo(w - 30, h - PAD);
      ctx.stroke();

      // Axis name labels
      ctx.fillStyle = col.label;
      ctx.font = `bold ${fsMd}px ${col.fontBody}`;
      ctx.textAlign = 'center';
      ctx.fillText(xLabel || 'x₁ (Menge Gut 1)', PAD + PW / 2, h - PAD + 34);
      ctx.save();
      ctx.translate(16, h - PAD - PH / 2);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText(yLabel || 'x₂ (Menge Gut 2)', 0, 0);
      ctx.restore();

      const sx = x => PAD + (x / axMax) * PW;
      const sy = y => h - PAD - (y / axMax) * PH;
      return { PAD, PW, PH, sx, sy };
    }

    // Draw indifference curve u = x·y = const (Cobb-Douglas α = 0.5)
    // progress (0-1): reveal fraction of curve for entry animation
    drawIK(ctx, axMax, u, color, label, sx, sy, progress = 1) {
      if (u <= 0) return;
      const minX = axMax * 0.012;
      const xStop = axMax * progress;

      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      let started = false;
      for (let x = minX; x <= xStop; x += axMax / 500) {
        const y = u / x;
        if (y > axMax * 1.1 || y < minX) continue;
        if (!started) { ctx.moveTo(sx(x), sy(y)); started = true; }
        else ctx.lineTo(sx(x), sy(y));
      }
      ctx.stroke();

      // Label — only draw when curve is mostly complete
      if (label && progress >= 0.85) {
        let lx = Math.sqrt(u) * 1.5;
        let ly = u / lx;
        const minV = axMax * 0.1, maxV = axMax * 0.9;
        if (lx < minV) lx = minV;
        if (lx > maxV) lx = maxV;
        if (ly < minV) ly = minV;
        if (ly > maxV) ly = maxV;
        const col = this._col;
        ctx.fillStyle = color;
        ctx.font = `bold 15px ${col.fontBody}`;
        ctx.textAlign = 'left';
        ctx.fillText(label, sx(lx) + 5, sy(ly) - 6);
      }
    }

    // Draw a legend box (top-right); entries = [{color, dash, dot, fill, label, lw}]
    drawLegend(ctx, w, entries, borderColor, margin) {
      const col = this._col;
      const lh = 20;
      const swatchW = 20;
      const textX = swatchW + 6;
      const rightMargin = (typeof margin === 'number') ? margin : 14;

      ctx.font = `13px ${col.fontBody}`;
      let maxW = 0;
      entries.forEach(e => {
        const tw = ctx.measureText(e.label).width;
        if (tw > maxW) maxW = tw;
      });
      const blockW = textX + maxW + 4;
      let x = w - blockW - rightMargin;
      if (x < 20) x = 20;
      const y = 46;

      ctx.save();
      ctx.textBaseline = 'middle';

      entries.forEach((entry, i) => {
        const cy = y + i * lh;

        ctx.shadowColor = 'rgba(0,0,0,0.7)';
        ctx.shadowBlur = 0;

        if (entry.dot) {
          ctx.fillStyle = entry.color;
          ctx.beginPath();
          ctx.arc(x + 10, cy, 4, 0, 2 * Math.PI);
          ctx.fill();
        } else if (entry.fill) {
          ctx.fillStyle = entry.fill;
          ctx.fillRect(x + 3, cy - 5, 14, 10);
        } else {
          ctx.strokeStyle = entry.color;
          ctx.lineWidth = entry.lw || 2.5;
          if (entry.dash) ctx.setLineDash([5, 3]);
          else ctx.setLineDash([]);
          ctx.beginPath();
          ctx.moveTo(x + 3, cy);
          ctx.lineTo(x + 17, cy);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Subtle text shadow for readability — works on both light and dark backgrounds
        ctx.shadowColor = 'rgba(0,0,0,0.55)';
        ctx.shadowBlur = 3;
        ctx.fillStyle = entry.color;
        ctx.font = `13px ${col.fontBody}`;
        ctx.textAlign = 'left';
        ctx.fillText(entry.label, x + textX, cy + 1);
      });

      ctx.restore();
    }

    // Animate budget line shift (legacy)
    animateBudgetShift(p1_old, p2_old, m_old, p1_new, p2_new, m_new, duration = 1000) {
        const startTime = Date.now();
        const self = this;

        function animate() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            const p1 = p1_old + (p1_new - p1_old) * ease;
            const p2 = p2_old + (p2_new - p2_old) * ease;
            const m = m_old + (m_new - m_old) * ease;

            self.clear();
            self.drawAxes();
            self.drawBudgetLine(p1, p2, m, 'Budget');

            if (progress < 1) requestAnimationFrame(animate);
        }

        animate();
    }
}

export default GraphEngine;
