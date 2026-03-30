import { describe, it, expect } from 'vitest';
import {
  createCard,
  applyReview,
  isDue,
  calcPerformance,
  SRS_EASE_DEFAULT,
  SRS_EASE_MIN,
  SRS_EASE_MAX,
} from '../utils/srsAlgorithm.js';

const DAY_MS = 86_400_000;
const NOW = new Date('2024-01-15T12:00:00Z').getTime();

// ============================================================
// createCard
// ============================================================

describe('createCard', () => {
  it('returns interval 1', () => {
    expect(createCard(NOW).interval).toBe(1);
  });

  it('returns default ease factor', () => {
    expect(createCard(NOW).easeFactor).toBe(SRS_EASE_DEFAULT);
  });

  it('returns 0 repetitions', () => {
    expect(createCard(NOW).repetitions).toBe(0);
  });

  it('sets dueDate to now as ISO string', () => {
    const card = createCard(NOW);
    expect(new Date(card.dueDate).getTime()).toBe(NOW);
  });
});

// ============================================================
// applyReview — correct answer
// ============================================================

describe('applyReview — correct', () => {
  it('increments repetitions', () => {
    const card = createCard(NOW);
    const next = applyReview(card, true, NOW);
    expect(next.repetitions).toBe(1);
  });

  it('multiplies interval by easeFactor', () => {
    const card = createCard(NOW);
    // interval=1, easeFactor=2.5 → next.interval = round(1*2.5) = 3
    const next = applyReview(card, true, NOW);
    expect(next.interval).toBe(Math.round(1 * SRS_EASE_DEFAULT));
  });

  it('increases easeFactor by 0.1', () => {
    const card = createCard(NOW);
    const next = applyReview(card, true, NOW);
    expect(next.easeFactor).toBeCloseTo(SRS_EASE_DEFAULT + 0.1, 10);
  });

  it('caps easeFactor at SRS_EASE_MAX', () => {
    const card = { ...createCard(NOW), easeFactor: SRS_EASE_MAX };
    const next = applyReview(card, true, NOW);
    expect(next.easeFactor).toBe(SRS_EASE_MAX);
  });

  it('sets dueDate = now + interval * 1 day', () => {
    const card = createCard(NOW);
    const next = applyReview(card, true, NOW);
    const expectedMs = NOW + next.interval * DAY_MS;
    expect(new Date(next.dueDate).getTime()).toBe(expectedMs);
  });

  it('does not mutate the input card', () => {
    const card = createCard(NOW);
    const original = { ...card };
    applyReview(card, true, NOW);
    expect(card).toEqual(original);
  });

  it('grows interval across multiple correct reviews', () => {
    let card = createCard(NOW);
    card = applyReview(card, true, NOW);
    const interval1 = card.interval;
    card = applyReview(card, true, NOW);
    expect(card.interval).toBeGreaterThan(interval1);
  });
});

// ============================================================
// applyReview — wrong answer
// ============================================================

describe('applyReview — wrong', () => {
  it('resets interval to 1', () => {
    // Start with a high interval
    const card = { ...createCard(NOW), interval: 30 };
    const next = applyReview(card, false, NOW);
    expect(next.interval).toBe(1);
  });

  it('decreases easeFactor by 0.3', () => {
    const card = createCard(NOW);
    const next = applyReview(card, false, NOW);
    expect(next.easeFactor).toBeCloseTo(SRS_EASE_DEFAULT - 0.3, 10);
  });

  it('clamps easeFactor to SRS_EASE_MIN', () => {
    const card = { ...createCard(NOW), easeFactor: SRS_EASE_MIN };
    const next = applyReview(card, false, NOW);
    expect(next.easeFactor).toBe(SRS_EASE_MIN);
  });

  it('sets dueDate to tomorrow', () => {
    const card = { ...createCard(NOW), interval: 10 };
    const next = applyReview(card, false, NOW);
    expect(new Date(next.dueDate).getTime()).toBe(NOW + DAY_MS);
  });

  it('increments repetitions even on wrong', () => {
    const card = createCard(NOW);
    const next = applyReview(card, false, NOW);
    expect(next.repetitions).toBe(1);
  });
});

// ============================================================
// isDue
// ============================================================

describe('isDue', () => {
  it('returns true when dueDate === now', () => {
    const card = createCard(NOW);
    expect(isDue(card, NOW)).toBe(true);
  });

  it('returns true when dueDate is in the past', () => {
    const card = createCard(NOW - DAY_MS);
    expect(isDue(card, NOW)).toBe(true);
  });

  it('returns false when dueDate is in the future', () => {
    const card = createCard(NOW + DAY_MS);
    expect(isDue(card, NOW)).toBe(false);
  });

  it('handles cards reviewed and pushed to future', () => {
    const card = applyReview(createCard(NOW), true, NOW); // due in ~3 days
    expect(isDue(card, NOW)).toBe(false);
    expect(isDue(card, NOW + 4 * DAY_MS)).toBe(true);
  });
});

// ============================================================
// calcPerformance
// ============================================================

describe('calcPerformance', () => {
  it('returns null when total is 0', () => {
    expect(calcPerformance(0, 0)).toBeNull();
  });

  it('calculates accuracy correctly', () => {
    const perf = calcPerformance(7, 3);
    expect(perf?.accuracy).toBeCloseTo(0.7, 10);
    expect(perf?.total).toBe(10);
    expect(perf?.correct).toBe(7);
    expect(perf?.wrong).toBe(3);
  });

  it('handles 100% accuracy', () => {
    const perf = calcPerformance(5, 0);
    expect(perf?.accuracy).toBe(1);
  });

  it('handles 0% accuracy', () => {
    const perf = calcPerformance(0, 5);
    expect(perf?.accuracy).toBe(0);
    expect(perf?.total).toBe(5);
  });
});
