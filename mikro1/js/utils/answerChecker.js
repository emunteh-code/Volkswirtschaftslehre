// ============================================================
// VWL SEMANTIC LOGIC ENGINE — Final Benchmark Standard v11.0
// PRECISION UNDER UNCERTAINTY: Contextual Primitives & Deterministic Scoring
// ============================================================

/**
 * Normalizes mixed language and symbolic input into context-aware economic primitives.
 */
export function mapToPrimitive(input, contextType = 'general') {
  const s = String(input).toLowerCase().replace(/\s+/g, '');
  
  // 1. Directions (Global Primitives)
  let dir = null;
  if (s.includes('↑') || s.includes('steigt') || s.includes('rises') || s.includes('höher') || s.includes('increase')) dir = 'UP';
  if (s.includes('↓') || s.includes('sinkt') || s.includes('falls') || s.includes('niedriger') || s.includes('decrease')) dir = 'DOWN';
  if (s.includes('ambig') || s.includes('unbestimmt') || s.includes('uncertain') || s.includes('abhängig')) dir = 'AMBIGUOUS';

  // 2. Core Concepts with Context Awareness
  let concept = 'NONE';
  if (s.includes('se') || s.includes('substitution')) concept = 'SUBSTITUTION_EFFECT';
  if (s.includes('ee') || s.includes('einkommen') || s.includes('income')) concept = 'INCOME_EFFECT';
  
  if (contextType === 'growth') {
    if (s.includes('k>kgr') || s.includes('überakk') || s.includes('overaccum')) concept = 'OVERACCUM_STATIC';
    if (s.includes('transition') || s.includes('übergang')) concept = 'OVERACCUM_DYNAMIC';
  } else if (contextType === 'optimization') {
    if (s.includes('rand') || s.includes('corner')) concept = 'CORNER_SOLUTION';
    if (s.includes('innen') || s.includes('interior')) concept = 'INTERIOR_SOLUTION';
  }

  return { concept, dir, raw: s };
}

/**
 * Deterministic Model Rules
 */
const MODEL_RULES = {
  'P1_DOWN': { 'SE': 'UP', 'X1': 'UP' },
  'P1_UP':   { 'SE': 'DOWN', 'X1': 'DOWN' },
  'OVERACCUM_STATIC': { 'C': 'DOWN', 'W': 'DOWN' },
  'INFERIOR_GOOD': { 'IE': 'UP' }, // Price up -> real income down -> demand up
  'GIFFEN_GOOD': { 'TOTAL': 'UP' } // Price up -> demand up
};

/**
 * VWL Deterministic Benchmark Evaluator
 */
export class VWLBenchmarkEvaluator {
  constructor(problemId, state = {}) {
    this.problemId = problemId;
    this.state = state; // stepId -> { input, concept, dir }
    
    // Weights for deterministic scoring
    this.W = {
      PREMISE: 0.5,      // Wrong starting point
      MODEL: 0.4,        // Wrong framework
      INCONSISTENCY: 0.3, // Contradicting own steps
      CALC: 0.1          // Arithmetic slip
    };
  }

  evaluate(input, options = {}) {
    const { 
      role = 'general', 
      allowedModels = [], // Multiple valid models
      premise = null,
      dependsOn = null,
      expectedAnswers = [],
      isDecision = false,
      contextType = 'general'
    } = options;

    const prim = mapToPrimitive(input, contextType);
    const res = { score: 1.0, correct: false, msg: '', trap: null };
    let penalties = 0;

    // 1. Model Set Validation (Severity: High)
    if (allowedModels.length > 0 && this.state.model_choice) {
      const chosenModel = this.state.model_choice.concept;
      if (!allowedModels.includes(chosenModel)) {
        penalties += this.W.MODEL;
        res.msg += `MODEL MISMATCH: ${chosenModel} ist für dieses Szenario ungeeignet. `;
      }
    }

    // 2. Semantic Consistency (Severity: High)
    if (premise && MODEL_RULES[premise]) {
      const rule = MODEL_RULES[premise][role];
      if (rule && prim.dir && prim.dir !== rule && prim.dir !== 'AMBIGUOUS') {
        penalties += this.W.PREMISE;
        res.msg += `INCONSISTENCY: Ihr ${role}-Effekt widerspricht dem Modell ${premise}. `;
      }
    }

    // 3. Dependency Check (Severity: Med)
    if (dependsOn && this.state[dependsOn]) {
      const prev = this.state[dependsOn];
      if (prev.dir && prim.dir && prev.dir !== prim.dir && prim.dir !== 'AMBIGUOUS') {
        penalties += this.W.INCONSISTENCY;
        res.msg += `CONTRADICTION: Ihr Ergebnis widerspricht Ihrer vorherigen Entscheidung (${prev.dir}). `;
      }
    }

    // 4. Numeric Evaluation (Logic-First)
    let numericFound = false;
    const numInput = parseFloat(input.replace(',', '.'));
    
    for (const a of expectedAnswers) {
      const numA = parseFloat(String(a).replace(',', '.'));
      if (!isNaN(numInput) && !isNaN(numA)) {
        const error = Math.abs(numInput - numA) / Math.max(1, Math.abs(numA));
        
        // Tolerance only applies if no major logic penalties exist
        const tolerance = (penalties < 0.3) ? 0.10 : 0.02;
        
        if (error < tolerance) {
          numericFound = true;
          if (error >= 0.02) penalties += this.W.CALC; // Small slip
          break;
        }
      } else if (prim.raw.includes(a.toLowerCase().replace(/\s+/g, ''))) {
        numericFound = true;
        break;
      }
    }

    if (!numericFound) {
      // If the path was logical but the number is totally wrong
      res.score = Math.max(0, 1.0 - penalties - 0.5); 
    } else {
      res.score = Math.max(0, 1.0 - penalties);
      res.correct = true;
    }

    // Final Validation Override
    if (role === 'VALIDATION' && !res.correct) {
      res.score = Math.min(res.score, 0.6); // Validation fail caps the whole problem block
    }

    // Update State
    if (isDecision || res.correct) {
      this.state[options.stepId || 'last'] = prim;
    }

    return res;
  }
}

/**
 * Global Bridge
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
