// ============================================================
// VWL LOGIC ENGINE — Final Benchmark Standard v9.0
// PRECISION UNDER UNCERTAINTY: Role-Based Constraints & Stateless Evaluation
// ============================================================

/**
 * Normalizes input for robust comparison across German/English and Shorthand.
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
 * Role-Based Constraint System (Context-Aware)
 */
const ROLE_CONSTRAINTS = {
  consumption_quantity: { min: 0, msg: "Konsumengen können nicht negativ sein." },
  production_quantity:  { min: 0, msg: "Produktionsmengen können nicht negativ sein." },
  price:                { min: 0, msg: "Preise können nicht negativ sein." },
  capital_stock:        { min: 0, msg: "Der Kapitalstock muss ≥ 0 sein." },
  probability:          { min: 0, max: 1, msg: "Wahrscheinlichkeiten müssen in [0, 1] liegen." },
  variance:             { min: 0, msg: "Varianzen können nicht negativ sein." },
  // Unrestricted roles (contextual freedom)
  net_demand:           { unrestricted: true },
  excess_supply:        { unrestricted: true },
  portfolio_position:   { unrestricted: true }
};

/**
 * Semantic Knowledge Base for Full-Chain Validation
 */
const SEMANTIC_MODELS = {
  "k>kgr": { 
    sequence: ["k>kgr", "overaccumulation", "c↓"],
    logic: (chain) => !(chain.includes("c↑") || chain.includes("w↑"))
  },
  "p1↓": {
    sequence: ["p1↓", "se↑", "x1↑"],
    logic: (chain) => chain.includes("se↑") || chain.includes("positiv")
  },
  "i↑": {
    sequence: ["i↑", "cap_inflow", "e↑"],
    logic: (chain) => !chain.includes("e↓")
  }
};

/**
 * Stateless Logic Evaluator
 * Scoped per problem, no global window leaks.
 */
export class VWLLogicEvaluator {
  constructor(problemId, existingState = {}) {
    this.problemId = problemId;
    this.state = { ...existingState }; // Encapsulated state
  }

  evaluate(input, options = {}) {
    const { 
      role = null, 
      isDecision = false, 
      dependsOn = null, 
      premise = null,
      expectedAnswers = []
    } = options;

    const normInput = normalize(input);
    const result = { correct: false, trap: null, capScore: 1.0, state: this.state };

    // 1. Role-Based Constraint Check
    if (role && ROLE_CONSTRAINTS[role]) {
      const val = parseFloat(String(input).replace(',', '.'));
      const rule = ROLE_CONSTRAINTS[role];
      if (!isNaN(val) && !rule.unrestricted) {
        if ((rule.min !== undefined && val < rule.min) || (rule.max !== undefined && val > rule.max)) {
          result.trap = `CONSTRAINT VIOLATION: ${rule.msg}`;
          result.capScore = 0.6;
          return result;
        }
      }
    }

    // 2. Full Logic Chain Consistency
    if (premise && SEMANTIC_MODELS[premise]) {
      const model = SEMANTIC_MODELS[premise];
      if (!model.logic(normInput)) {
        result.trap = `LOGICAL INCONSISTENCY: Ihre Argumentationskette widerspricht dem Modell-Kern von ${premise}.`;
        result.capScore = 0.5;
        return result;
      }
    }

    // 3. Silent Inconsistency (Declared vs. Implied)
    if (dependsOn && this.state[dependsOn]) {
      const prevDir = this.state[dependsOn].includes('↑') ? '↑' : this.state[dependsOn].includes('↓') ? '↓' : null;
      const currentDir = normInput.includes('↑') ? '↑' : normInput.includes('↓') ? '↓' : null;
      if (prevDir && currentDir && prevDir !== currentDir) {
        result.trap = `SILENT INCONSISTENCY: Ihr Ergebnis (${currentDir}) widerspricht Ihrer expliziten Entscheidung (${prevDir}).`;
        result.capScore = 0.4;
        return result;
      }
    }

    // 4. Standard Matching (Numerical + Semantic)
    for (const a of expectedAnswers) {
      const normA = normalize(a);
      const numInput = parseFloat(String(input).replace(',', '.'));
      const numA = parseFloat(String(a).replace(',', '.'));

      // Numerical match (2% tolerance)
      if (!isNaN(numInput) && !isNaN(numA)) {
        if (Math.abs(numInput - numA) / Math.max(1, Math.abs(numA)) < 0.02) result.correct = true;
      } 
      // Semantic match
      else if (normA.length <= 2) {
        if (normInput === normA) result.correct = true;
      } else {
        if (normInput.includes(normA) || (normA.includes(normInput) && normInput.length > 3)) result.correct = true;
      }

      if (result.correct) {
        if (isDecision) this.state[options.stepId || 'last'] = input;
        return result;
      }
    }

    return result;
  }
}

/**
 * Bridge for existing UI components
 */
export function checkAnswerWithTolerance(input, acceptedAnswers, options = {}) {
  // Scoped evaluation to prevent global leaks
  const evaluator = new VWLLogicEvaluator(options.problemId || 'anon');
  const res = evaluator.evaluate(input, {
    ...options,
    expectedAnswers: acceptedAnswers
  });
  return { correct: res.correct, trap: res.trap, capScore: res.capScore };
}
