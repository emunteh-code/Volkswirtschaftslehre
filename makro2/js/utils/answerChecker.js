// ============================================================
// VWL LOGIC ENGINE — Final Benchmark Standard v12.0
// PRECISION UNDER UNCERTAINTY: Multiplicative Logic Dominance & Model Hierarchy
// ============================================================

/**
 * Normalizes input for robust comparison.
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
 * Context-aware primitives.
 */
export function mapToPrimitive(input, contextType = 'general') {
  const s = normalize(input);
  let dir = null;
  if (s.includes('↑') || s.includes('steigt') || s.includes('rises') || s.includes('höher') || s.includes('increase')) dir = 'UP';
  if (s.includes('↓') || s.includes('sinkt') || s.includes('falls') || s.includes('niedriger') || s.includes('decrease')) dir = 'DOWN';
  if (s.includes('ambig') || s.includes('uncertain') || s.includes('unbestimmt') || s.includes('abhängig')) dir = 'AMBIGUOUS';

  let concept = 'NONE';
  if (s.includes('se') || s.includes('substitution')) concept = 'SE';
  if (s.includes('ie') || s.includes('ee') || s.includes('income')) concept = 'IE';
  
  if (contextType === 'growth') {
    if (s.includes('overaccum') || s.includes('k>kgr') || s.includes('überakk')) concept = 'OVERACCUM';
  } else if (contextType === 'optimization') {
    if (s.includes('corner') || s.includes('rand')) concept = 'CORNER';
    if (s.includes('interior') || s.includes('innen')) concept = 'INTERIOR';
  }

  return { concept, dir, raw: s };
}

/**
 * Deterministic Scoring Weights (Sum = 1.0)
 */
const WEIGHTS = {
  PREMISE: 0.45,
  MODEL: 0.30,
  INCONSISTENCY: 0.20,
  CALC: 0.05
};

/**
 * VWL Final Benchmark Evaluator
 */
export class VWLBenchmarkEvaluator {
  constructor(problemId, state = {}) {
    this.problemId = problemId;
    this.state = state; // stepId -> { input, concept, dir }
  }

  evaluate(input, options = {}) {
    const {
      role = 'general',
      allowedModels = [], // [{ model: 'CORNER', priority: 1 }]
      premise = null,
      dependsOn = null,
      expectedAnswers = [],
      isDecision = false,
      contextType = 'general',
      ambiguityAllowed = false
    } = options;

    const prim = mapToPrimitive(input, contextType);
    const res = { score: 0, correct: false, msg: '', state: this.state };
    
    let weightedPenalty = 0;
    let logicMultiplier = 1.0;
    let calcMultiplier = 1.0;

    // 1. Ambiguity Constraint
    if (prim.dir === 'AMBIGUOUS' && !ambiguityAllowed) {
      weightedPenalty += WEIGHTS.PREMISE;
      logicMultiplier = 0.4;
      res.msg += "Unbegründete Uneindeutigkeit. ";
    }

    // 2. Model Hierarchy Validation
    if (allowedModels.length > 0 && this.state.model_choice) {
      const chosen = this.state.model_choice.concept;
      const modelDef = allowedModels.find(m => m.model === chosen);
      
      if (!modelDef) {
        weightedPenalty += WEIGHTS.MODEL;
        logicMultiplier = Math.min(logicMultiplier, 0.5);
        res.msg += "Falsches Modell gewählt. ";
      } else if (modelDef.priority > 1) {
        weightedPenalty += (WEIGHTS.MODEL * 0.5); // Soft penalty for sub-optimal model
        res.msg += "Suboptimales Modell gewählt. ";
      }
    }

    // 3. Premise & Dependency Check
    if (dependsOn && this.state[dependsOn]) {
      const prev = this.state[dependsOn];
      if (prev.dir && prim.dir && prim.dir !== 'AMBIGUOUS' && prev.dir !== prim.dir) {
        weightedPenalty += WEIGHTS.INCONSISTENCY;
        logicMultiplier = Math.min(logicMultiplier, 0.6);
        res.msg += "Logischer Widerspruch zur vorherigen Entscheidung. ";
      }
    }

    // 4. Execution & Numeric Matching
    let numericFound = false;
    const numInput = parseFloat(input.replace(',', '.'));
    for (const a of expectedAnswers) {
      const numA = parseFloat(String(a).replace(',', '.'));
      if (!isNaN(numInput) && !isNaN(numA)) {
        const error = Math.abs(numInput - numA) / Math.max(1, Math.abs(numA));
        // Strict tolerance (2%) unless logic is perfect (10%)
        const tol = (weightedPenalty === 0) ? 0.10 : 0.02;
        if (error < tol) {
          numericFound = true;
          if (error >= 0.02) weightedPenalty += WEIGHTS.CALC;
          break;
        }
      } else if (normalize(input).includes(normalize(a))) {
        numericFound = true;
        break;
      }
    }

    if (!numericFound) {
      calcMultiplier = 0.2; // Heavy penalty for wrong result
      res.msg += "Ergebnis numerisch/inhaltlich inkorrekt. ";
    }

    // 5. Final Multiplicative Score Calculation
    const baseScore = Math.max(0, 1 - weightedPenalty);
    res.score = baseScore * logicMultiplier * calcMultiplier;
    res.correct = res.score > 0.8;

    // 6. Mandatory Validation Cap
    if (role === 'VALIDATION' && res.score < 0.5) {
      res.score = Math.min(res.score, 0.4); // Force fail on validation error
    }

    // Update State
    if (isDecision || (res.score > 0.5)) {
      this.state[options.stepId || 'last'] = prim;
    }

    return res;
  }
}

/**
 * Standard UI Bridge
 */
export function checkAnswerWithTolerance(input, acceptedAnswers, options = {}) {
  const evaluator = new VWLBenchmarkEvaluator(options.problemId || 'anon');
  const result = evaluator.evaluate(input, { ...options, expectedAnswers: acceptedAnswers });
  return {
    correct: result.correct,
    trap: result.msg,
    capScore: result.score
  };
}
