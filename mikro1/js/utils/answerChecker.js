// ============================================================
// VWL LOGIC ENGINE — Final Benchmark Standard v13.0
// PRECISION UNDER UNCERTAINTY: Orthogonal Scoring & Contextual Hierarchy
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

  return { concept, dir, raw: s };
}

/**
 * Context-Dependent Model Priorities
 */
const MODEL_HIERARCHY = {
  'short_run_policy': { 'IS_LM': 1, 'AD_AS': 2 },
  'inflation_dynamics': { 'AD_AS': 1, 'IS_LM': 2 },
  'optimization': { 'CORNER': 1, 'INTERIOR': 2 },
  'growth': { 'OVERACCUM': 1 }
};

/**
 * VWL Final Benchmark Evaluator v13.0
 */
export class VWLBenchmarkEvaluator {
  constructor(problemId, state = {}) {
    this.problemId = problemId;
    this.state = state; // stepId -> prim
  }

  evaluate(input, options = {}) {
    const {
      role = 'general',
      allowedModels = [], // ['CORNER', 'INTERIOR']
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

    // 1. Ambiguity Constraint
    if (prim.dir === 'AMBIGUOUS' && !ambiguityAllowed) {
      logicPenalty += 0.45;
      premiseError = true;
      res.msg += "Unzulässige Ambiguität in deterministischem Kontext. ";
    }

    // 2. Model Hierarchy Validation
    if (allowedModels.length > 0 && this.state.model_choice) {
      const chosen = this.state.model_choice.concept;
      if (!allowedModels.includes(chosen)) {
        logicPenalty += 0.30;
        res.msg += "Modell-Fehlwahl. ";
      } else {
        const hierarchy = MODEL_HIERARCHY[contextType];
        if (hierarchy && hierarchy[chosen] > 1) {
          logicPenalty += 0.15; // Soft penalty for lower priority valid model
          res.msg += "Suboptimales Modell gewählt. ";
        }
      }
    }

    // 3. Premise & Consistency
    if (premise) {
      // Internal consistency vs model premise
      // MODEL_RULES logic (simplified check here)
      // If prim.dir contradicts required model direction...
    }

    if (dependsOn && this.state[dependsOn]) {
      const prev = this.state[dependsOn];
      if (prev.dir && prim.dir && prim.dir !== 'AMBIGUOUS' && prev.dir !== prim.dir) {
        logicPenalty += 0.20;
        res.msg += "Logische Inkonsistenz zur Vor-Entscheidung. ";
      }
    }

    // 4. Logic Score & Premise Cap
    res.logic_score = Math.max(0, 1.0 - logicPenalty);
    if (premiseError) {
      res.logic_score = Math.min(res.logic_score, 0.4);
    }

    // 5. Calculation Score (Orthogonal)
    let numericFound = false;
    const numInput = parseFloat(input.replace(',', '.'));
    const tolerance = (res.logic_score > 0.7) ? 0.10 : 0.02;

    for (const a of expectedAnswers) {
      const numA = parseFloat(String(a).replace(',', '.'));
      if (!isNaN(numInput) && !isNaN(numA)) {
        if (Math.abs(numInput - numA) / Math.max(1, Math.abs(numA)) < tolerance) {
          numericFound = true;
          break;
        }
      } else if (normalize(input).includes(normalize(a))) {
        numericFound = true;
        break;
      }
    }

    if (!numericFound) {
      res.calc_score = 0.2;
      res.msg += "Ergebnis inkorrekt. ";
    }

    // 6. Final Combined Score
    res.score = res.logic_score * res.calc_score;
    res.correct = res.score > 0.8;

    // Validation Override
    if (role === 'VALIDATION' && !numericFound) {
      res.score = Math.min(res.score, 0.4);
    }

    // Update State
    if (isDecision || res.correct || (res.logic_score > 0.5 && numericFound)) {
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
