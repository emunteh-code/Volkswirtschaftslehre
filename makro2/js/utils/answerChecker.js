// ============================================================
// VWL SEMANTIC LOGIC ENGINE — Final Benchmark Standard v10.0
// PRECISION UNDER UNCERTAINTY: Semantic Abstraction & Continuous Scoring
// ============================================================

/**
 * Normalizes mixed language and symbolic input into economic primitives.
 */
export function mapToPrimitive(input) {
  const s = String(input).toLowerCase().replace(/\s+/g, '');
  
  // 1. Directions
  if (s.includes('↑') || s.includes('steigt') || s.includes('rises') || s.includes('höher') || s.includes('increase')) return 'UP';
  if (s.includes('↓') || s.includes('sinkt') || s.includes('falls') || s.includes('niedriger') || s.includes('decrease')) return 'DOWN';
  
  // 2. Core Concepts (DE/EN)
  if (s.includes('se') || s.includes('substitution')) return 'SE';
  if (s.includes('ee') || s.includes('einkommen') || s.includes('income')) return 'IE';
  if (s.includes('k>kgr') || s.includes('überakkumulation') || s.includes('overaccumulation') || s.includes('dynamicinefficiency')) return 'OVERACCUM';
  if (s.includes('rand') || s.includes('corner')) return 'CORNER';
  if (s.includes('innen') || s.includes('interior')) return 'INTERIOR';
  
  return s;
}

/**
 * Parses reasoning chains into primitive-direction pairs.
 */
export function parseChain(chain) {
  return chain.split(/[→\->,;]+/).map(part => {
    const p = part.trim();
    if (p.includes('↓')) return [p.replace('↓', ''), 'DOWN'];
    if (p.includes('↑')) return [p.replace('↑', ''), 'UP'];
    if (p.includes('sinkt')) return [p.replace('sinkt', ''), 'DOWN'];
    if (p.includes('steigt')) return [p.replace('steigt', ''), 'UP'];
    return [p, null];
  });
}

/**
 * Model Consistency Matrix
 */
const MODEL_RULES = {
  'P1_DOWN': { 'SE': 'UP', 'X1': 'UP' },
  'P1_UP':   { 'SE': 'DOWN', 'X1': 'DOWN' },
  'OVERACCUM': { 'C': 'DOWN', 'W': 'DOWN' },
  'UNDERACCUM': { 'C': 'UP', 'W': 'UP' }
};

/**
 * Continuous Scoring Evaluator
 */
export class VWLBenchmarkEvaluator {
  constructor(problemId, state = {}) {
    this.problemId = problemId;
    this.state = state; 
  }

  evaluate(input, options = {}) {
    const { 
      role = null, 
      expectedModel = null, 
      premise = null,
      dependsOn = null,
      expectedAnswers = []
    } = options;

    const normInput = input.toLowerCase().replace(/\s+/g, '');
    const res = { correct: false, score: 0, trap: null, msg: '' };

    // 1. Model Awareness (Critical Override)
    if (expectedModel && this.state.model_choice && this.state.model_choice !== expectedModel) {
      res.msg = `MODEL MISMATCH: Sie verwenden Logik aus ${this.state.model_choice}, aber das Szenario erfordert ${expectedModel}.`;
      res.score = 0.3; 
      return res;
    }

    // 2. Semantic Chain Validation
    if (premise) {
      const actualDir = normInput.includes('↑') ? 'UP' : normInput.includes('↓') ? 'DOWN' : null;
      const expectedDir = MODEL_RULES[premise]?.[role];
      if (actualDir && expectedDir && actualDir !== expectedDir) {
        res.msg = `INCONSISTENCY: Ihre Schlussfolgerung für ${role} widerspricht dem Modell ${premise}.`;
        res.score = 0.2;
        return res;
      }
    }

    // 3. Dependency Check (Silent Inconsistency)
    if (dependsOn && this.state[dependsOn]) {
      const prev = this.state[dependsOn];
      const currentDir = normInput.includes('↑') ? 'UP' : normInput.includes('↓') ? 'DOWN' : null;
      if (prev.dir && currentDir && prev.dir !== currentDir) {
        res.msg = `CONTRADICTION: Ihr Ergebnis widerspricht Ihrer vorherigen Entscheidung (${prev.input}).`;
        res.score = 0.4;
        return res;
      }
    }

    // 4. Scoring (Continuous)
    for (const a of expectedAnswers) {
      const numInput = parseFloat(input.replace(',', '.'));
      const numA = parseFloat(String(a).replace(',', '.'));

      if (!isNaN(numInput) && !isNaN(numA)) {
        const error = Math.abs(numInput - numA) / Math.max(1, Math.abs(numA));
        if (error < 0.02) {
          res.correct = true;
          res.score = 1.0;
        } else if (error < 0.10) {
          res.correct = true;
          res.score = 0.7; 
          res.msg = "Rechenungenauigkeit erkannt.";
        }
      } else if (normInput.includes(a.toLowerCase().replace(/\s+/g, ''))) {
        res.correct = true;
        res.score = 1.0;
      }
    }

    // State Update
    if (res.correct || res.score > 0.5) {
      this.state[options.stepId || 'last'] = {
        input,
        dir: normInput.includes('↑') ? 'UP' : normInput.includes('↓') ? 'DOWN' : null
      };
    }

    return res;
  }
}

/**
 * Legacy Bridge
 */
export function checkAnswerWithTolerance(input, acceptedAnswers, options = {}) {
  const evalInstance = new VWLBenchmarkEvaluator(options.problemId);
  const result = evalInstance.evaluate(input, { ...options, expectedAnswers: acceptedAnswers });
  return { 
    correct: result.correct, 
    trap: result.msg, 
    capScore: result.score 
  };
}
