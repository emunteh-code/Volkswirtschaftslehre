// ============================================================
// ANSWER CHECKER — Mikroökonomik I
// Tolerant answer matching with numeric fuzzy comparison
// ============================================================

import type { AnswerResult, Trap } from '../types/index.js';

/**
 * Normalize an answer string for comparison.
 * Strips whitespace, common math symbols, and lowercases.
 */
export function normalizeAnswer(str: string): string {
  return String(str).toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[_,]/g, '')
    .replace(/\*/g, '')
    .replace(/[^a-z0-9+\-\/=.<>λαβγδεζ]/g, '')
    .trim();
}

/**
 * Check a user's answer against accepted answers and trap patterns.
 * Uses both numeric tolerance (2%) and normalized string matching.
 *
 * @param input - Raw user input
 * @param acceptedAnswers - List of accepted answer strings
 * @param traps - Common wrong answers that trigger specific feedback
 */
export function checkAnswerWithTolerance(
  input: string,
  acceptedAnswers: string[],
  traps: Trap[] = [],
): AnswerResult {
  const val = input.toLowerCase().replace(/\s+/g, '');

  // Check traps first
  for (const trap of traps) {
    if (val.includes(trap.pattern.toLowerCase().replace(/\s+/g, ''))) {
      return { correct: false, trap: trap.msg };
    }
  }

  // Numeric tolerance check (2%)
  const numInput = parseFloat(input.replace(',', '.'));
  for (const a of acceptedAnswers) {
    const numA = parseFloat(String(a).replace(',', '.'));
    if (!isNaN(numInput) && !isNaN(numA) &&
        Math.abs(numInput - numA) / Math.max(1, Math.abs(numA)) < 0.02) {
      return { correct: true };
    }
  }

  // String matching
  const normVal = normalizeAnswer(input);
  for (const a of acceptedAnswers) {
    const normA = normalizeAnswer(String(a));
    if (normA.length <= 1 && normVal === normA) return { correct: true };
    if (normA.length > 1 && (
      normVal.includes(normA) ||
      (normA.includes(normVal) && normVal.length >= Math.ceil(normA.length * 0.55))
    )) {
      return { correct: true };
    }
  }

  return { correct: false };
}
