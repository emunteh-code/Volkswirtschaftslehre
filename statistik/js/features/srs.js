// ============================================================
// SPACED REPETITION SYSTEM — Mikroökonomik I
// SM-2 inspired algorithm for scheduling concept reviews
// ============================================================

import { loadSRS, saveSRS } from '../state/storage.js';
import { CHAPTERS } from '../data/chapters.js';
import { SRS_EASE_DEFAULT, SRS_EASE_MIN, SRS_EASE_MAX } from '../data/srsConfig.js';

/**
 * Update SRS card after answering a question.
 * @param {string} conceptId
 * @param {boolean} correct
 */
export function updateSRS(conceptId, correct) {
  const srs = loadSRS();
  if (!srs[conceptId]) {
    srs[conceptId] = { interval: 1, ease: SRS_EASE_DEFAULT, due: Date.now(), reviews: 0 };
  }
  const card = srs[conceptId];
  card.reviews++;
  if (correct) {
    card.interval = Math.round(card.interval * card.ease);
    card.ease = Math.min(card.ease + 0.1, SRS_EASE_MAX);
  } else {
    card.interval = 1;
    card.ease = Math.max(card.ease - 0.3, SRS_EASE_MIN);
  }
  card.due = Date.now() + card.interval * 86400000;
  saveSRS(srs);
}

/**
 * Get all concepts due for review today (due <= now).
 * @returns {Array} sorted by due date ascending
 */
export function getDueCards() {
  const srs = loadSRS();
  const now = Date.now();
  return CHAPTERS
    .filter(c => srs[c.id] && srs[c.id].due <= now)
    .map(c => ({ ...c, ease: srs[c.id].ease, interval: srs[c.id].interval }))
    .sort((a, b) => srs[a.id].due - srs[b.id].due);
}

/**
 * Get accuracy performance for a concept.
 * @param {string} conceptId
 * @param {Object} progress - loaded progress data
 * @returns {{ accuracy, total, correct, wrong } | null}
 */
export function getPerformance(conceptId, progress) {
  const entry = progress[conceptId];
  if (!entry) return null;
  const total = (entry.correct || 0) + (entry.wrong || 0);
  if (total === 0) return null;
  return {
    accuracy: (entry.correct || 0) / total,
    total,
    correct: entry.correct || 0,
    wrong: entry.wrong || 0,
  };
}
