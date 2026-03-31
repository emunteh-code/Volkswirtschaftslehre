// ============================================================
// VWL SEMANTIC LOGIC ENGINE — Adversarial Hardening v12.1
// PRECISION UNDER UNCERTAINTY: Anti-Gaming & Global Model Lock
// ============================================================

const TOKEN_MAP = {
  // Directions
  '↑': 'DIR_UP', 'steigt': 'DIR_UP', 'increase': 'DIR_UP', 'higher': 'DIR_UP', 'positive': 'DIR_UP', 'plus': 'DIR_UP', 'aufwertung': 'DIR_UP',
  '↓': 'DIR_DOWN', 'sinkt': 'DIR_DOWN', 'decrease': 'DIR_DOWN', 'lower': 'DIR_DOWN', 'negative': 'DIR_DOWN', 'minus': 'DIR_DOWN', 'abwertung': 'DIR_DOWN',
  'ambig': 'DIR_AMBIG', 'uncertain': 'DIR_AMBIG', 'unbestimmt': 'DIR_AMBIG', 'abhängig': 'DIR_AMBIG',
  // Concepts
  'se': 'CON_SE', 'substitution': 'CON_SE',
  'ie': 'CON_IE', 'ee': 'CON_IE', 'einkommen': 'CON_IE', 'income': 'CON_IE',
  'mu': 'CON_MU', 'f\'': 'CON_MU', 'dy/dx': 'CON_MU', 'grenz': 'CON_MU',
  'rand': 'CON_CORNER', 'corner': 'CON_CORNER',
  'innen': 'CON_INTERIOR', 'interior': 'CON_INTERIOR',
  // Variables
  'x1': 'VAR_X1', 'x2': 'VAR_X2', 'nachfrage': 'VAR_D', 'demand': 'VAR_D', 'angebot': 'VAR_S', 'supply': 'VAR_S',
  'output': 'VAR_Y', 'y': 'VAR_Y', 'konsum': 'VAR_C', 'c': 'VAR_C', 'kapital': 'VAR_K', 'k': 'VAR_K',
  // Causal Connectors
  'weil': 'CAUSAL', 'because': 'CAUSAL', 'da': 'CAUSAL', 'führt': 'CAUSAL', 'leads': 'CAUSAL', 'bewirkt': 'CAUSAL', 'due': 'CAUSAL',
  // Confidence Markers
  'klar': 'CONF_HIGH', 'eindeutig': 'CONF_HIGH', 'definitiv': 'CONF_HIGH', 'clearly': 'CONF_HIGH', 'certainly': 'CONF_HIGH'
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

function hasSyntacticStructure(tokens) {
  // Simple check for subject (Variable/Concept) -> Direction
  const hasSubject = tokens.some(t => t.startsWith('VAR_') || t.startsWith('CON_'));
  const hasDir = tokens.some(t => t.startsWith('DIR_'));
  return hasSubject && hasDir;
}

function validateAmbiguity(tokens) {
  const directions = tokens.filter(t => t === 'DIR_UP' || t === 'DIR_DOWN');
  const hasCausal = tokens.includes('CAUSAL');
  return directions.length >= 2 && hasCausal;
}

const MODEL_CONSTRAINTS = {
  'P1_DOWN': { 'CON_SE': 'DIR_UP', 'X1': 'DIR_UP' },
  'P1_UP':   { 'CON_SE': 'DIR_DOWN', 'X1': 'DIR_DOWN' },
  'OVERACCUM': { 'C': 'DIR_DOWN', 'W': 'DIR_DOWN' }
};

export class VWLBenchmarkEvaluator {
  constructor(problemId) {
    this.problemId = problemId;
    if (!SESSION_STATE.has(problemId)) {
      SESSION_STATE.set(problemId, { 
        steps: {}, 
        fatalErrorCount: 0, 
        modelLock: null 
      });
    }
    this.state = SESSION_STATE.get(problemId);
  }

  evaluate(input, options = {}) {
    const { 
      role = 'general', 
      premise = null, 
      dependsOn = null, 
      expectedAnswers = [], 
      isDecision = false,
      targetVar = null,
      modelId = null
    } = options;

    const tokens = tokenize(input);
    const dir = tokens.find(t => t.startsWith('DIR_')) || null;
    const hasConfidence = tokens.includes('CONF_HIGH');
    
    const res = { score: 1.0, logic_score: 1.0, calc_score: 1.0, correct: false, msg: '', state: this.state };

    // 1. Syntactic structure check (Anti-Token Gaming)
    if (input.length > 5 && !hasSyntacticStructure(tokens)) {
      res.logic_score *= 0.5;
      res.msg += "GAMING DETECTED: Bitte formulieren Sie eine strukturierte ökonomische Begründung. ";
    }

    // 2. Variable Target Validation
    if (targetVar && tokens.some(t => t.startsWith('VAR_'))) {
      const detectedVars = tokens.filter(t => t.startsWith('VAR_'));
      if (!detectedVars.includes(targetVar)) {
        res.logic_score *= 0.5;
        res.msg += `FALSCHE VARIABLE: Ihre Begründung bezieht sich nicht auf ${targetVar}. `;
      }
    }

    // 3. Ambiguity Hardening
    if (dir === 'DIR_AMBIG') {
      if (!validateAmbiguity(tokens)) {
        res.logic_score = 0;
        res.msg += "AMBIGUITY REJECTED: Kausale Begründung der konkurrierenden Effekte fehlt. ";
      }
    }

    // 4. Model Lock & Consistency
    if (modelId && isDecision) {
      this.state.modelLock = modelId;
    }
    if (this.state.modelLock && premise && premise !== this.state.modelLock) {
      res.logic_score *= 0.4;
      res.msg += `MODEL INCONSISTENCY: Sie widersprechen dem zuvor gewählten Modell (${this.state.modelLock}). `;
    }

    // 5. Model alignment (Directional)
    let logicError = false;
    if (premise && MODEL_CONSTRAINTS[premise]) {
      const expected = MODEL_CONSTRAINTS[premise][role];
      if (expected && dir && dir !== expected && dir !== 'DIR_AMBIG') {
        logicError = true;
        res.msg += `INCONSISTENCY with model ${premise}. `;
      }
    }

    // 6. Confidence Penalty
    if (hasConfidence && logicError) {
      res.logic_score *= 0.5;
      res.msg += "CONFIDENCE PENALTY: Übersteigerte Gewissheit bei falscher Logik. ";
    }

    // 7. Dependency & Escalation
    if (dependsOn && this.state.steps[dependsOn]) {
      const prev = this.state.steps[dependsOn];
      if (prev.logic_score < 0.5) {
        res.logic_score = Math.min(res.logic_score, 0.5);
        res.msg += "DEPENDENCY CAP. ";
      }
      if (prev.dir && dir && dir !== 'DIR_AMBIG' && prev.dir !== dir && role === prev.role) {
        logicError = true;
        res.msg += "LOGIC CONTRADICTION. ";
      }
    }

    // 8. Hard Zero Rule
    const numInput = parseFloat(String(input).replace(',', '.'));
    if (logicError) {
      res.logic_score = Math.min(res.logic_score, 0.4);
      res.calc_score = 0; // HARD ZERO
      res.msg += "HARD ZERO: Korrekte Logik ist Voraussetzung für numerische Punkte. ";
      if (isDecision) this.state.fatalErrorCount++;
    } else {
      let numericMatch = false;
      for (const a of expectedAnswers) {
        const numA = parseFloat(String(a).replace(',', '.'));
        if (!isNaN(numInput) && !isNaN(numA)) {
          if (Math.abs(numInput - numA) / Math.max(1, Math.abs(numA)) < (res.logic_score > 0.9 ? 0.10 : 0.02)) {
            numericMatch = true; 
            res.calc_score = Math.abs(numInput - numA) < 0.001 ? 1.0 : 0.8; 
            break;
          }
        } else if (input.toLowerCase().includes(String(a).toLowerCase())) {
          numericMatch = true;
          break;
        }
      }
      if (!numericMatch) { 
        res.calc_score = 0.2; 
        res.msg += "RECHENFEHLER. "; 
      }
    }

    // 9. Scoring & Global Caps
    res.score = res.logic_score * res.calc_score;
    if (this.state.fatalErrorCount > 1) {
      res.score = Math.min(res.score, 0.5); // Global escalation
      res.msg += "GLOBAL ESCALATION: Multiple Logikfehler im Problem. ";
    }

    if (role === 'VALIDATION' && res.score < 0.8) {
      res.score = logicError ? 0.25 : 0.4;
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
