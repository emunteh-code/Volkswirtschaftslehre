// ============================================================
// VWL LOGIC ENGINE — Final Benchmark Standard v8.0
// Precision Under Uncertainty: Semantic Logic & Contextual Constraints
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
 * Context-Aware Constraint Rules
 */
const CONSTRAINTS = {
  quantity: { min: 0, msg: "Mengen können nicht negativ sein." },
  price: { min: 0, msg: "Preise können nicht negativ sein." },
  capital: { min: 0, msg: "Kapitalstock muss ≥ 0 sein." },
  probability: { min: 0, max: 1, msg: "Wahrscheinlichkeiten liegen in [0, 1]." },
  variance: { min: 0, msg: "Varianz muss ≥ 0 sein." },
  net_demand: { unrestricted: true },
  excess_demand: { unrestricted: true }
};

/**
 * Semantic Relations for Logic Chain Validation
 */
const SEMANTIC_RELATIONS = {
  "k>kgr": { "c": "↓", "w": "↓", "y": "↑" },
  "k<kgr": { "c": "↑", "w": "↑" },
  "p1↓": { "se": "↑", "x1": "↑" },
  "p1↑": { "se": "↓", "x1": "↓" },
  "i↑": { "e": "↑", "cap": "inflow" },
  "i↓": { "e": "↓", "cap": "outflow" }
};

/**
 * Detects domain violations based on variable type.
 */
export function getDomainViolation(input, type) {
  const val = parseFloat(String(input).replace(',', '.'));
  if (isNaN(val)) return null;

  const rule = CONSTRAINTS[type];
  if (!rule || rule.unrestricted) return null;

  if (rule.min !== undefined && val < rule.min) return rule.msg;
  if (rule.max !== undefined && val > rule.max) return rule.msg;

  return null;
}

/**
 * Problem-Scoped Logic Tracking (Session-based)
 */
function updateLogicState(problemId, key, value) {
  if (!window.__VWL_LOGIC_STATE__) window.__VWL_LOGIC_STATE__ = {};
  if (!window.__VWL_LOGIC_STATE__[problemId]) window.__VWL_LOGIC_STATE__[problemId] = {};
  window.__VWL_LOGIC_STATE__[problemId][key] = normalize(value);
}

function getLogicState(problemId, key) {
  return window.__VWL_LOGIC_STATE__?.[problemId]?.[key] || null;
}

/**
 * Semantic Logic Chain Validation
 */
export function validateChain(input, premise) {
  const normInput = normalize(input);
  const normPremise = normalize(premise);
  const relations = SEMANTIC_RELATIONS[normPremise];
  
  if (!relations) return { valid: true }; // No semantic rules for this premise

  for (const [variable, expected] of Object.entries(relations)) {
    if (normInput.includes(normalize(variable))) {
      const actual = normInput.includes('↑') ? '↑' : normInput.includes('↓') ? '↓' : null;
      if (actual && actual !== expected) {
        return { valid: false, msg: `Widerspruch: Laut Modell folgt aus ${premise} ein Sinken (↓) von ${variable}.` };
      }
    }
  }
  return { valid: true };
}

/**
 * Main Answer Checker
 */
export function checkAnswerWithTolerance(input, acceptedAnswers, options = {}) {
  const { 
    problemId = 'default',
    stepId = 'default',
    traps = [], 
    context = {}, 
    isDecision = false,
    requiredChain = null
  } = options;

  const normInput = normalize(input);

  // 1. Contextual Domain Check
  const domainError = getDomainViolation(input, context.type);
  if (domainError) return { correct: false, trap: `DOMAIN ERROR: ${domainError}`, capScore: 0.6 };

  // 2. Semantic Chain Check
  if (requiredChain && context.premise) {
    const chainCheck = validateChain(input, context.premise);
    if (!chainCheck.valid) return { correct: false, trap: chainCheck.msg, capScore: 0.5 };
  }

  // 3. Dependency Logic (Inconsistency vs. Wrong Assumption)
  if (context.dependsOn) {
    const prevDecision = getLogicState(problemId, context.dependsOn);
    if (prevDecision) {
      // Check if current input contradicts the previous decision directionally
      const currentDir = normInput.includes('↑') ? '↑' : normInput.includes('↓') ? '↓' : null;
      const prevDir = prevDecision.includes('↑') ? '↑' : prevDecision.includes('↓') ? '↓' : null;
      
      if (currentDir && prevDir && currentDir !== prevDir) {
        return { 
          correct: false, 
          trap: `LOGIK-WIDERSPRUCH: Ihr Ergebnis (${currentDir}) widerspricht Ihrer Annahme (${prevDir}).`,
          capScore: 0.4 
        };
      }
    }
  }

  // 4. Trap Check
  for (const trap of traps) {
    if (normInput.includes(normalize(trap.pattern))) {
      return { correct: false, trap: trap.msg, capScore: 0.6 };
    }
  }

  // 5. Scoring & State Update
  let isCorrect = false;
  for (const a of acceptedAnswers) {
    const normA = normalize(a);
    const numInput = parseFloat(String(input).replace(',', '.'));
    const numA = parseFloat(String(a).replace(',', '.'));

    if (!isNaN(numInput) && !isNaN(numA)) {
      if (Math.abs(numInput - numA) / Math.max(1, Math.abs(numA)) < 0.02) isCorrect = true;
    } else if (normA.length <= 2) {
      if (normInput === normA) isCorrect = true;
    } else if (normInput.includes(normA) || (normA.includes(normInput) && normInput.length > 3)) {
      isCorrect = true;
    }

    if (isCorrect) {
      if (isDecision) updateLogicState(problemId, stepId, input);
      return { correct: true };
    }
  }

  return { correct: false };
}
