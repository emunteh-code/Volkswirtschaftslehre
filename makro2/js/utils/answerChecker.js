// ============================================================
// VWL SEMANTIC LOGIC ENGINE — Strict Hardening v12.0
// PRECISION UNDER UNCERTAINTY: Hard Zero & Global Consistency
// ============================================================

const TOKEN_MAP = {
  '↑': 'DIR_UP', 'steigt': 'DIR_UP', 'increase': 'DIR_UP', 'higher': 'DIR_UP', 'positive': 'DIR_UP', 'plus': 'DIR_UP', 'aufwertung': 'DIR_UP',
  '↓': 'DIR_DOWN', 'sinkt': 'DIR_DOWN', 'decrease': 'DIR_DOWN', 'lower': 'DIR_DOWN', 'negative': 'DIR_DOWN', 'minus': 'DIR_DOWN', 'abwertung': 'DIR_DOWN',
  'ambig': 'DIR_AMBIG', 'uncertain': 'DIR_AMBIG', 'unbestimmt': 'DIR_AMBIG', 'abhängig': 'DIR_AMBIG',
  'se': 'CON_SE', 'substitution': 'CON_SE',
  'ie': 'CON_IE', 'ee': 'CON_IE', 'einkommen': 'CON_IE', 'income': 'CON_IE',
  'mu': 'CON_MU', 'f\'': 'CON_MU', 'dy/dx': 'CON_MU', 'grenz': 'CON_MU',
  'rand': 'CON_CORNER', 'corner': 'CON_CORNER',
  'innen': 'CON_INTERIOR', 'interior': 'CON_INTERIOR'
};

const SESSION_STATE = new Map();

export function tokenize(input) {
  if (!input) return [];
  const clean = String(input).toLowerCase().replace(/[\(\)]/g, ' ');
  const rawTokens = clean.split(/[\s→\->,;:=]+/);
  const mapped = [];
  for (const t of rawTokens) {
    if (!t) continue;
    if (TOKEN_MAP[t]) { mapped.push(TOKEN_MAP[t]); continue; }
    let found = false;
    for (const [key, val] of Object.entries(TOKEN_MAP)) {
      if (t.includes(key) && key.length > 3) { mapped.push(val); found = true; break; }
    }
    if (!found) mapped.push(`RAW_${t}`);
  }
  return mapped;
}

function validateAmbiguity(tokens) {
  return tokens.filter(t => t === 'DIR_UP' || t === 'DIR_DOWN').length >= 2;
}

const MODEL_CONSTRAINTS = {
  'P1_DOWN': { 'CON_SE': 'DIR_UP', 'X1': 'DIR_UP' },
  'P1_UP':   { 'CON_SE': 'DIR_DOWN', 'X1': 'DIR_DOWN' },
  'OVERACCUM': { 'C': 'DIR_DOWN', 'W': 'DIR_DOWN' }
};

export class VWLBenchmarkEvaluator {
  constructor(problemId) {
    this.problemId = problemId;
    if (!SESSION_STATE.has(problemId)) SESSION_STATE.set(problemId, { steps: {}, fatalError: false });
    this.state = SESSION_STATE.get(problemId);
  }

  evaluate(input, options = {}) {
    const { role = 'general', premise = null, dependsOn = null, expectedAnswers = [], isDecision = false } = options;
    const tokens = tokenize(input);
    const dir = tokens.find(t => t.startsWith('DIR_')) || null;
    const res = { score: 1.0, logic_score: 1.0, calc_score: 1.0, correct: false, msg: '', state: this.state };

    // 1. Ambiguity check
    if (dir === 'DIR_AMBIG' && !validateAmbiguity(tokens)) {
      res.logic_score = 0; res.msg += "AMBIGUITY EXPLOIT REJECTED. ";
    }

    // 2. Model alignment
    let logicError = false;
    if (premise && MODEL_CONSTRAINTS[premise]) {
      const expected = MODEL_CONSTRAINTS[premise][role];
      if (expected && dir && dir !== expected && dir !== 'DIR_AMBIG') {
        logicError = true; res.msg += `INCONSISTENCY with model ${premise}. `;
      }
    }

    // 3. Dependency & Global Consistency
    if (dependsOn && this.state.steps[dependsOn]) {
      const prev = this.state.steps[dependsOn];
      if (prev.logic_score < 0.5) {
        res.logic_score = Math.min(res.logic_score, 0.5); res.msg += "DEPENDENCY CAP. ";
      }
      if (prev.dir && dir && dir !== 'DIR_AMBIG' && prev.dir !== dir && role === prev.role) {
        logicError = true; res.msg += "LOGIC CONTRADICTION. ";
      }
    }

    // 4. Hard Zero Rule
    const numInput = parseFloat(String(input).replace(',', '.'));
    if (logicError) {
      res.logic_score = Math.min(res.logic_score, 0.4);
      res.calc_score = 0; // HARD ZERO
      res.msg += "HARD ZERO: Correct reasoning required for numeric credit. ";
      if (isDecision) this.state.fatalError = true;
    } else {
      let numericMatch = false;
      for (const a of expectedAnswers) {
        const numA = parseFloat(String(a).replace(',', '.'));
        if (!isNaN(numInput) && !isNaN(numA)) {
          if (Math.abs(numInput - numA) / Math.max(1, Math.abs(numA)) < (res.logic_score > 0.9 ? 0.10 : 0.02)) {
            numericMatch = true; res.calc_score = Math.abs(numInput - numA) < 0.001 ? 1.0 : 0.8; break;
          }
        } else if (input.toLowerCase().includes(String(a).toLowerCase())) {
          numericMatch = true; break;
        }
      }
      if (!numericMatch) { res.calc_score = 0.2; res.msg += "CALC ERROR. "; }
    }

    // 5. Scoring & Global Caps
    res.score = res.logic_score * res.calc_score;
    if (this.state.fatalError) res.score = Math.min(res.score, 0.5); // Problem-level cap

    if (role === 'VALIDATION' && res.score < 0.8) {
      res.score = logicError ? 0.25 : 0.4; // Split cap
      res.msg = `VALIDATION CAP (${res.score}): ${res.msg}`;
    }

    res.correct = res.score > 0.8;
    if (isDecision || res.correct || res.score > 0.4) {
      this.state.steps[options.stepId || 'last'] = { dir, logic_score: res.logic_score, role };
    }
    return res;
  }
}

export function checkAnswerWithTolerance(input, acceptedAnswers, options = {}) {
  const evaluator = new VWLBenchmarkEvaluator(options.problemId || 'anon');
  const result = evaluator.evaluate(input, { ...options, expectedAnswers: acceptedAnswers });
  return { correct: result.correct, trap: result.msg, capScore: result.score };
}
