// ============================================================
// VWL SEMANTIC LOGIC ENGINE — Final Hardening v11.0
// PRECISION UNDER UNCERTAINTY: Logic Precedence & Global Validation
// ============================================================

/**
 * Notation Normalization Layer
 * Unifies math and economic notation.
 */
function normalizeNotation(s) {
  return s
    .replace(/f'\(x\)/g, 'mu')
    .replace(/∂u\/∂x[1₁]/g, 'mu1')
    .replace(/∂u\/∂x[2₂]/g, 'mu2')
    .replace(/marginalutility/g, 'mu')
    .replace(/marginaleffect/g, 'marginal')
    .replace(/dy\/dx/g, 'marginal');
}

/**
 * Normalizes input for robust comparison.
 */
export function normalize(str) {
  if (!str) return '';
  let s = String(str).toLowerCase().replace(/\s+/g, '');
  s = normalizeNotation(s);
  return s
    .replace(/[_,]/g, '')
    .replace(/\*/g, '')
    .replace(/[^a-z0-9+\-\/=.<>λαβγδεζ↑↓→]/g, '')
    .trim();
}

/**
 * Semantic Abstraction Mapping
 */
export function mapToPrimitive(input, contextType = 'general') {
  const s = normalize(input);
  let dir = null;
  if (s.includes('↑') || s.includes('steigt') || s.includes('increase') || s.includes('higher') || s.includes('plus')) dir = 'UP';
  if (s.includes('↓') || s.includes('sinkt') || s.includes('decrease') || s.includes('lower') || s.includes('minus')) dir = 'DOWN';
  if (s.includes('ambig') || s.includes('uncertain') || s.includes('unbestimmt')) dir = 'AMBIGUOUS';

  let concept = 'NONE';
  if (s.includes('mu') || s.includes('grenznutzen')) concept = 'MARGINAL_UTILITY';
  if (s.includes('se') || s.includes('substitution')) concept = 'SE';
  if (s.includes('ie') || s.includes('ie') || s.includes('einkommen')) concept = 'IE';
  
  return { concept, dir, raw: s };
}

/**
 * Model Consistency Matrix
 */
const MODEL_RULES = {
  'P1_DOWN': { 'SE': 'UP', 'X1': 'UP' },
  'P1_UP':   { 'SE': 'DOWN', 'X1': 'DOWN' },
  'OVERACCUM': { 'C': 'DOWN', 'W': 'DOWN' }
};

export class VWLBenchmarkEvaluator {
  constructor(problemId, state = {}) {
    this.problemId = problemId;
    this.state = state; // stepId -> { input, prim }
  }

  evaluate(input, options = {}) {
    const {
      role = 'general',
      premise = null,
      dependsOn = null,
      expectedAnswers = [],
      isDecision = false,
      contextType = 'general',
      ambiguityAllowed = false
    } = options;

    const prim = mapToPrimitive(input, contextType);
    const res = { score: 1.0, logic_score: 1.0, calc_score: 1.0, correct: false, msg: '', state: this.state };
    
    // 1. Ambiguity Validation (Must have justification)
    if (prim.dir === 'AMBIGUOUS') {
      const hasReasoning = prim.raw.length > 15 || (prim.raw.includes('↑') && prim.raw.includes('↓'));
      if (!ambiguityAllowed || !hasReasoning) {
        res.logic_score = 0.2;
        res.msg += "AMBIGUITY REJECTED: Ambiguität muss durch konkurrierende Effekte (z.B. SE↑ vs IE↓) begründet werden. ";
      }
    }

    // 2. Logic Precedence (Premise/Direction Check)
    let logicError = false;
    if (premise && MODEL_RULES[premise]) {
      const expectedDir = MODEL_RULES[premise][options.role];
      if (expectedDir && prim.dir && prim.dir !== expectedDir && prim.dir !== 'AMBIGUOUS') {
        logicError = true;
        res.msg += `INCONSISTENCY: Ihre Richtung widerspricht dem Modell ${premise}. `;
      }
    }

    // 3. Dependency Enforcement
    if (dependsOn && this.state[dependsOn]) {
      const prev = this.state[dependsOn];
      if (prev.prim.dir && prim.dir && prim.dir !== 'AMBIGUOUS' && prev.prim.dir !== prim.dir) {
        logicError = true;
        res.logic_score = Math.min(res.logic_score, 0.5);
        res.msg += "DEPENDENCY ERROR: Widerspruch zur vorherigen Entscheidung. ";
      }
    }

    // 4. Silent Inconsistency (Calculated Result Direction)
    // If input is numeric, we infer direction from its value relative to a baseline if provided
    // This is handled by comparing the numeric result to previous state in specific tasks

    // 5. Calculation Score (Conditional on Logic)
    let numericFound = false;
    const numInput = parseFloat(input.replace(',', '.'));
    
    // Logic must be correct for full tolerance
    const tolerance = (!logicError && res.logic_score > 0.8) ? 0.10 : 0.02;

    for (const a of expectedAnswers) {
      const numA = parseFloat(String(a).replace(',', '.'));
      if (!isNaN(numInput) && !isNaN(numA)) {
        const error = Math.abs(numInput - numA) / Math.max(1, Math.abs(numA));
        if (error < tolerance) {
          numericFound = true;
          res.calc_score = error < 0.02 ? 1.0 : 0.8;
          break;
        }
      } else if (normalize(input).includes(normalize(a))) {
        numericFound = true;
        break;
      }
    }

    if (!numericFound) {
      res.calc_score = 0.2;
      res.msg += "ERGEBNIS FEHLER: Wert inkorrekt oder unplausibel. ";
    }

    // Logic Precedence Rule: If logic is fundamentally wrong, numeric correctness is invalidated
    if (logicError) {
      res.calc_score = Math.min(res.calc_score, 0.2);
      res.logic_score = Math.min(res.logic_score, 0.4);
    }

    // 6. Final Score Calculation
    res.score = res.logic_score * res.calc_score;
    res.correct = res.score > 0.8;

    // 7. Global Validation Override
    if (role === 'VALIDATION' && (!res.correct || res.score < 0.6)) {
      res.score = Math.min(res.score, 0.4);
      res.msg = "VALIDATION FAILED: Fundamentaler Modell-Widerspruch erkannt. Gesamtes Problem-Ergebnis gedeckelt. " + res.msg;
    }

    // Update state
    if (isDecision || res.correct) {
      this.state[options.stepId || 'last'] = { input, prim };
    }

    return res;
  }
}

export function checkAnswerWithTolerance(input, acceptedAnswers, options = {}) {
  const evaluator = new VWLBenchmarkEvaluator(options.problemId || 'anon');
  const result = evaluator.evaluate(input, { ...options, expectedAnswers: acceptedAnswers });
  return {
    correct: result.correct,
    trap: result.msg,
    capScore: result.score
  };
}
