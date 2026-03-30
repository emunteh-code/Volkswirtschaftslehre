// ============================================================
// SRS ALGORITHM — Mikroökonomik I
// Pure SM-2 implementation (no side effects, fully testable)
// ============================================================

import type { SRSData } from '../types/index.js';

export const SRS_EASE_DEFAULT = 2.5;
export const SRS_EASE_MIN     = 1.3;
export const SRS_EASE_MAX     = 3.0;

/**
 * Create a new SRS card for a concept with the given current timestamp.
 */
export function createCard(nowMs: number): SRSData {
  return {
    interval: 1,
    easeFactor: SRS_EASE_DEFAULT,
    dueDate: new Date(nowMs).toISOString(),
    repetitions: 0,
  };
}

/**
 * Apply one SM-2 review step.
 * Returns a NEW card object — does not mutate the input.
 *
 * @param card    - Current SRS state for the concept
 * @param correct - Whether the user answered correctly
 * @param nowMs   - Current timestamp in milliseconds
 */
export function applyReview(card: SRSData, correct: boolean, nowMs: number): SRSData {
  const next = { ...card };
  next.repetitions += 1;

  if (correct) {
    next.interval = Math.round(card.interval * card.easeFactor);
    next.easeFactor = Math.min(card.easeFactor + 0.1, SRS_EASE_MAX);
  } else {
    next.interval = 1;
    next.easeFactor = Math.max(card.easeFactor - 0.3, SRS_EASE_MIN);
  }

  const dueMs = nowMs + next.interval * 86_400_000;
  next.dueDate = new Date(dueMs).toISOString();
  return next;
}

/**
 * Returns true if a card is due for review at or before nowMs.
 */
export function isDue(card: SRSData, nowMs: number): boolean {
  return new Date(card.dueDate).getTime() <= nowMs;
}

/**
 * Calculate accuracy from raw progress counters.
 * Returns null if no answers have been recorded.
 */
export function calcPerformance(correct: number, wrong: number): {
  accuracy: number;
  total: number;
  correct: number;
  wrong: number;
} | null {
  const total = correct + wrong;
  if (total === 0) return null;
  return { accuracy: correct / total, total, correct, wrong };
}
