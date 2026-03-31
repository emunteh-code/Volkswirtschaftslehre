// ============================================================
// ANSWER CHECKER — Standard v6.5 (Final Benchmark)
// Tolerant answer matching with numeric fuzzy comparison and symbolic logic
// ============================================================

/**
 * Normalize an answer string for comparison.
 * Strips whitespace, common math symbols, and lowercases.
 * @param {string} str
 * @returns {string}
 */
export function normalizeAnswer(str) {
  if (str === null || str === undefined) return '';
  return String(str).toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[_,]/g, '')
    .replace(/\*/g, '')
    // Standard alphanumeric + LaTeX fragments + Directional symbols + Logic
    .replace(/[^a-z0-9+\-\/=.<>λαβγδεζ↑↓→]/g, '')
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
  if (!input) return { correct: false };
  const val = input.toLowerCase().replace(/\s+/g, '');

  // 1. Check traps first (Specific feedback takes precedence)
  for (const trap of traps) {
    if (val.includes(trap.pattern.toLowerCase().replace(/\s+/g, ''))) {
      return { correct: false, trap: trap.msg };
    }
  }

  // 2. Numeric tolerance check (2%)
  const numInput = parseFloat(input.replace(',', '.'));
  if (!isNaN(numInput)) {
    for (const a of acceptedAnswers) {
      const numA = parseFloat(String(a).replace(',', '.'));
      if (!isNaN(numA) && Math.abs(numInput - numA) / Math.max(1, Math.abs(numA)) < 0.02) {
        return { correct: true };
      }
    }
  }

  // 3. Normalized String matching (Semantic/Keyword check)
  const normVal = normalizeAnswer(input);
  for (const a of acceptedAnswers) {
    const normA = normalizeAnswer(String(a));
    
    // Exact match for short strings/symbols
    if (normA.length <= 2 && normVal === normA) return { correct: true };
    
    // Inclusion match for longer explanations/keywords
    if (normA.length > 2 && (
      normVal.includes(normA) || 
      (normA.includes(normVal) && normVal.length >= Math.ceil(normA.length * 0.6))
    )) {
      return { correct: true };
    }
  }

  return { correct: false };
}
