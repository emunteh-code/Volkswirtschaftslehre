// ============================================================
// VWL LOGIC ENGINE — Final Benchmark Standard v7.0
// Precision Under Uncertainty: Logic > Execution
// ============================================================

/**
 * Normalizes input for comparison.
 */
export function normalize(str) {
  if (!str) return '';
  return String(str).toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[_,]/g, '')
    .replace(/\*/g, '')
    .replace(/[^a-z0-9+\-\/=.<>λαβγδεζ↑↓→]/g, '')
    .trim();
}

/**
 * Global Domain Validation
 */
export function getDomainViolation(input, context = {}) {
  const val = parseFloat(String(input).replace(',', '.'));
  if (isNaN(val)) return null;

  if (val < 0 && (context.type === 'quantity' || context.type === 'price' || context.type === 'capital')) {
    return "DOMAIN VIOLATION: Negative Werte sind ökonomisch unzulässig. Korrigieren Sie Ihre Annahme.";
  }
  return null;
}

/**
 * Session Logic Tracker (Singleton-like)
 * Tracks reasoning path to enforce dependency.
 */
const LogicTracker = {
  lastDecision: null,
  setDecision(d) { this.lastDecision = d; },
  getDecision() { return this.lastDecision; }
};

/**
 * Main Answer Checker with Dependency & Contradiction Logic
 */
export function checkAnswerWithLogic(input, acceptedAnswers, options = {}) {
  const { traps = [], context = {}, requiredChain = null, isDecision = false } = options;
  const normInput = normalize(input);

  // 1. Domain Check (Automatic Contradiction)
  const domainError = getDomainViolation(input, context);
  if (domainError) {
    return { correct: false, trap: domainError, capScore: 0.6 };
  }

  // 2. Logic Chain Verification (Structural reasoning)
  if (requiredChain) {
    let score = 0;
    requiredChain.forEach(comp => {
      if (normInput.includes(normalize(comp))) score++;
    });
    const ratio = score / requiredChain.length;
    if (ratio >= 0.66) return { correct: true, logicScore: ratio };
  }

  // 3. Dependency Logic: Execution check vs. Previous Decision
  if (context.dependsOn) {
    const prev = LogicTracker.getDecision();
    if (prev && normalize(prev) !== normalize(context.dependsOn)) {
      return { 
        correct: false, 
        trap: `LOGIC INCONSISTENCY: Ihr Rechenergebnis widerspricht Ihrer vorherigen Entscheidung (${prev}).`,
        capScore: 0.5 
      };
    }
  }

  // 4. Trap matching
  for (const trap of traps) {
    if (normInput.includes(normalize(trap.pattern))) {
      return { correct: false, trap: trap.msg, capScore: 0.6 };
    }
  }

  // 5. Standard matching
  let isCorrect = false;
  for (const a of acceptedAnswers) {
    const normA = normalize(a);
    const numInput = parseFloat(String(input).replace(',', '.'));
    const numA = parseFloat(String(a).replace(',', '.'));

    if (!isNaN(numInput) && !isNaN(numA)) {
      if (Math.abs(numInput - numA) / Math.max(1, Math.abs(numA)) < 0.02) isCorrect = true;
    } else if (normA.length <= 2) {
      if (normInput === normA) isCorrect = true;
    } else {
      if (normInput.includes(normA) || normA.includes(normInput) && normInput.length > 3) isCorrect = true;
    }
    
    if (isCorrect) {
      if (isDecision) LogicTracker.setDecision(normInput);
      return { correct: true };
    }
  }

  return { correct: false };
}
