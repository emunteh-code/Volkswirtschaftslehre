// ============================================================
// VWL LOGIC ENGINE — Final Benchmark Standard v14.0
// PRECISION UNDER UNCERTAINTY: Continuous Decay & Semantic Drift Detection
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
 * Context-aware primitives with model origin.
 */
export function mapToPrimitive(input, contextType = 'general') {
  const s = normalize(input);
  let dir = null;
  if (s.includes('↑') || s.includes('steigt') || s.includes('rises') || s.includes('increase') || s.includes('höher')) dir = 'UP';
  if (s.includes('↓') || s.includes('sinkt') || s.includes('falls') || s.includes('decrease') || s.includes('niedriger')) dir = 'DOWN';
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

  return { concept, dir, raw: s, context: contextType };
}

/**
 * Validates reasoning transitions to prevent semantic drift.
 */
function isTransitionValid(prev, next) {
  if (!prev || !next || prev.concept === next.concept) return true;
  
  const validTransitions = [
    ['SE', 'TOTAL_EFFECT'],
    ['OVERACCUM', 'GROWTH'],
    ['DEMAND', 'EXCESS_DEMAND']
  ];

  return validTransitions.some(([p, n]) => prev.concept === p && next.concept === n);
}

/**
 * VWL Final Benchmark Evaluator v14.0
 */
export class VWLBenchmarkEvaluator {
  constructor(problemId, state = {}) {
    this.problemId = problemId;
    this.state = state; // stepId -> prim
    this.path = []; // Sequence of primitives in this session
  }

  evaluate(input, options = {}) {
    const {
      role = 'general',
      allowedModels = [],
      premise = null,
      dependsOn = null,
      expectedAnswers = [],
      isDecision = false,
      contextType = 'general',
      ambiguityAllowed = false
    } = options;

    const prim = mapToPrimitive(input, contextType);
    const res = { score: 0, logic_score: 1.0, calc_score: 1.0, correct: false, msg: '', state: this.state };
    
    let logicPenalty = 0;
    let premiseError = false;

    // 1. Semantic Drift Detection
    const lastPrim = this.path[this.path.length - 1];
    if (lastPrim && !isTransitionValid(lastPrim, prim)) {
      logicPenalty += 0.20; // Drift Penalty
      res.msg += "Semantischer Drift erkannt: Unbegründeter Konzeptwechsel. ";
    }

    // 2. Ambiguity & Model Hierarchy
    if (prim.dir === 'AMBIGUOUS' && !ambiguityAllowed) {
      logicPenalty += 0.45;
      premiseError = true;
      res.msg += "Unzulässige Ambiguität. ";
    }

    if (allowedModels.length > 0 && this.state.model_choice) {
      const chosen = this.state.model_choice.concept;
      if (!allowedModels.includes(chosen)) {
        logicPenalty += 0.30;
        res.msg += "Modell-Fehlwahl. ";
      }
    }

    if (dependsOn && this.state[dependsOn]) {
      const prev = this.state[dependsOn];
      if (prev.dir && prim.dir && prim.dir !== 'AMBIGUOUS' && prev.dir !== prim.dir) {
        logicPenalty += 0.25;
        res.msg += "Logische Inkonsistenz. ";
      }
    }

    // 3. Logic Score & Premise Cap
    res.logic_score = Math.max(0, 1.0 - logicPenalty);
    if (premiseError) res.logic_score = Math.min(res.logic_score, 0.4);

    // 4. Continuous Calc Score (Linear Decay)
    let minError = Infinity;
    const numInput = parseFloat(input.replace(',', '.'));
    const tolerance = (res.logic_score > 0.7) ? 0.10 : 0.02;

    for (const a of expectedAnswers) {
      const numA = parseFloat(String(a).replace(',', '.'));
      if (!isNaN(numInput) && !isNaN(numA)) {
        const error = Math.abs(numInput - numA) / Math.max(1, Math.abs(numA));
        if (error < minError) minError = error;
      } else if (normalize(input).includes(normalize(a))) {
        minError = 0;
        break;
      }
    }

    if (minError <= tolerance) {
      res.calc_score = 1.0;
      res.correct = true;
    } else {
      // k=3 slope decay
      res.calc_score = Math.max(0.2, 1.0 - 3 * (minError - tolerance));
      res.correct = false;
    }

    // 5. Final Combined Score
    res.score = res.logic_score * res.calc_score;

    // Validation Override
    if (role === 'VALIDATION' && !res.correct) {
      res.score = Math.min(res.score, 0.4);
    }

    // Update State & Path
    this.path.push(prim);
    if (isDecision || res.correct || (res.logic_score > 0.5 && res.calc_score > 0.5)) {
      this.state[options.stepId || 'last'] = prim;
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
