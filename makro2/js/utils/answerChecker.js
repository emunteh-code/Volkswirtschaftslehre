// ============================================================
// ANSWER CHECKER — Mikroökonomik I
// Tolerant answer matching with numeric fuzzy comparison
// ============================================================

/**
 * Normalize an answer string for comparison.
 * Strips whitespace, common math symbols, and lowercases.
 * @param {string} str
 * @returns {string}
 */
export function normalizeAnswer(str) {
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
 * @param {string} input - Raw user input
 * @param {string[]} acceptedAnswers - List of accepted answer strings
 * @param {{pattern:string, msg:string}[]} [traps] - Common wrong answers
 * @returns {{ correct: boolean, trap?: string }}
 */
export function checkAnswerWithTolerance(input, acceptedAnswers, traps = []) {
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
