/**
 * Shared canvas layout — margins sized for German axis labels without overlap.
 */

/** @type {{ left: number, right: number, top: number, bottom: number }} */
export const SCENE_PAD = {
  left: 72,
  right: 48,
  top: 48,
  bottom: 64
};

/**
 * @param {number} w
 * @param {number} h
 * @param {{ left: number, right: number, top: number, bottom: number }} [pad]
 */
export function scenePlotRect(w, h, pad = SCENE_PAD) {
  return {
    pad,
    PW: w - pad.left - pad.right,
    PH: h - pad.top - pad.bottom,
    sx: (x, axMax) => pad.left + (x / axMax) * (w - pad.left - pad.right),
    sy: (y, axMax, hPx = h) =>
      hPx - pad.bottom - (y / axMax) * (hPx - pad.top - pad.bottom)
  };
}

/**
 * Responsive font sizes for axis ticks and labels.
 * @param {number} w
 * @param {number} h
 */
export function sceneFontSizes(w, h) {
  const base = Math.min(w, h);
  return {
    tick: Math.max(11, Math.round(base * 0.024)),
    axis: Math.max(12, Math.round(base * 0.03)),
    label: Math.max(13, Math.round(base * 0.032))
  };
}

/**
 * Pick tick count so labels do not crowd (max ~6 ticks per axis).
 * @param {number} span
 */
export function pickTickCount(span) {
  if (span <= 6) return Math.min(6, Math.ceil(span));
  if (span <= 12) return 6;
  return 5;
}

/**
 * Legend anchor — bottom-left when many series to avoid axis label clash top-right.
 * @param {number} w
 * @param {number} entryCount
 */
export function legendPlacement(w, entryCount) {
  if (entryCount >= 5 || w < 520) {
    return { corner: "bottom-left", top: null, rightMargin: 14, left: 14, bottom: 14 };
  }
  return { corner: "top-right", top: 50, rightMargin: 16, left: null, bottom: null };
}
