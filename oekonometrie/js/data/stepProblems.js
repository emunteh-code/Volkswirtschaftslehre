// ============================================================
// STEP PROBLEMS DATA — Ökonometrie
// FINAL BENCHMARK STANDARD v14.0: Continuous Decay & Semantic Drift Detection
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  ols_intro: [
    {
      title: 'OLS Schätzung & Interpretation',
      context: 'Ein Regressionsmodell schätzt den Effekt von Berufserfahrung (exp) auf den Lohn (wage). n = 250.',
      steps: [
        { 
          q: '[1. Interpretation] Was ist die theoretische Bedeutung des Koeffizienten beta_1?', 
          answer: ['marginale wirkung', 'effekt von exp auf wage', 'steigung'], 
          options: { problemId: 'oe_ols_1', stepId: 'theory_id', isDecision: true },
          hint: 'Wie ändert sich y, wenn x um 1 steigt?', 
          explain: 'beta_1 misst die marginale Veränderung der abhängigen Variable bei Erhöhung der unabhängigen Variable um eine Einheit.' 
        },
        { 
          q: '[2. Execution] In der Schätzung ergibt sich beta_1 = 0.5. Interpretieren Sie diesen Wert konkret.', 
          answer: ['0.5 einheiten lohn', '0.5 mehr lohn', 'lohn steigt um 0.5'], 
          options: { problemId: 'oe_ols_1', stepId: 'exec_id', dependsOn: 'theory_id' },
          hint: 'Ein Jahr mehr Erfahrung führt zu...', 
          explain: 'Pro zusätzlichem Jahr Berufserfahrung steigt der geschätzte Lohn um 0,5 Einheiten (ceteris paribus).' 
        },
        { 
          q: '[3. Validation] Ist ein positives Vorzeichen für beta_1 ökonomisch plausibel? (ja/nein)', 
          answer: ['ja', 'yes'], 
          options: { problemId: 'oe_ols_1', role: 'VALIDATION' },
          hint: 'Führt mehr Erfahrung in der Regel zu höherem oder niedrigerem Lohn?', 
          explain: 'Ja, Humankapitaltheorie legt einen positiven Zusammenhang nahe.' 
        }
      ]
    }
  ],
  gauss_markov: [
    {
      title: 'Endogenitäts-Check',
      context: 'Modell: wage = b0 + b1*educ + u. Die Variable "Fähigkeit" (ability) ist im Fehlerterm u enthalten.',
      steps: [
        { 
          q: '[1. Interpretation] Korrelieren "Fähigkeit" und "Ausbildung" (educ) wahrscheinlich miteinander?', 
          answer: ['ja', 'positiv korreliert'], 
          options: { problemId: 'oe_gm_1', stepId: 'corr_id', isDecision: true },
          hint: 'Haben begabtere Menschen oft auch mehr Lust auf Bildung?', 
          explain: 'Ja, es ist anzunehmen, dass Personen mit höheren Fähigkeiten auch mehr Bildung erwerben.' 
        },
        { 
          q: '[2. Decision] Welche Gauss-Markov-Annahme ist hierdurch verletzt?', 
          answer: ['A4', 'Exogenität', 'E[u|x]=0'], 
          options: { problemId: 'oe_gm_1', stepId: 'violation_id', dependsOn: 'corr_id' },
          hint: 'Bedingter Erwartungswert des Fehlerterms.', 
          explain: 'Die Korrelation zwischen educ und ability (in u) führt zu E[u|educ] != 0.' 
        },
        { 
          q: '[3. Validation] Welche statistische Konsequenz hat diese Verletzung für den OLS-Schätzer?', 
          answer: ['verzerrt', 'biased', 'inkonsistent'], 
          options: { problemId: 'oe_gm_1', role: 'VALIDATION' },
          hint: 'Ist der Erwartungswert noch gleich dem wahren Parameter?', 
          explain: 'Der Schätzer ist verzerrt (Omitted Variable Bias). beta_1 wird den Effekt der Bildung wahrscheinlich überschätzen.' 
        }
      ]
    }
  ],
  fit: [
    {
      title: 'Bestimmtheitsmaß R²',
      context: 'SST = 200, SSE = 150.',
      steps: [
        { 
          q: '[1. Interpretation] Was misst das R² grundsätzlich?', 
          answer: ['erklärungsgehalt', 'fit', 'anteil erklärter varianz'], 
          options: { problemId: 'oe_fit_1', isDecision: true },
          hint: 'Variation in y.', 
          explain: 'R² gibt an, welcher Anteil der Gesamtvariation in y durch das Modell erklärt wird.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie das R².', 
          answer: ['0.75', '75%', '0,75'], 
          options: { problemId: 'oe_fit_1', role: 'probability' },
          hint: 'SSE / SST.', 
          explain: '150 / 200 = 0,75.' 
        },
        { 
          q: '[3. Validation] Bedeutet R² = 0.75, dass der Zusammenhang kausal ist? (ja/nein)', 
          answer: ['nein', 'no'], 
          options: { problemId: 'oe_fit_1', role: 'VALIDATION' },
          hint: 'Korrelation vs. Kausalität.', 
          explain: 'Nein, R² misst nur den statistischen Fit, nicht die kausale Güte.' 
        }
      ]
    }
  ],
  heteroskedasticity: [
    {
      title: 'Folgen der Heteroskedastizität',
      context: 'Ein Modell zeigt Heteroskedastizität in den Residuen.',
      steps: [
        { 
          q: '[1. Interpretation] Bleibt der OLS-Schätzer unter Heteroskedastizität unverzerrt?', 
          answer: ['ja', 'yes'], 
          options: { problemId: 'oe_het_1', isDecision: true },
          hint: 'Welche Annahmen sind für Unverzerrtheit nötig? (A1-A4)', 
          explain: 'Ja, Homoskedastizität (A5) ist nicht für Unverzerrtheit erforderlich.' 
        },
        { 
          q: '[2. Decision] Sind die Standard-t-Tests bei Heteroskedastizität noch gültig?', 
          answer: ['nein', 'no', 'ungültig'], 
          options: { problemId: 'oe_het_1', stepId: 'test_validity', dependsOn: 'yes' },
          hint: 'Denken Sie an die Berechnung der Standardfehler.', 
          explain: 'Nein, die Standardformeln für se(beta) unterstellen Homoskedastizität und liefern bei Verletzung falsche Werte.' 
        }
      ]
    }
  ]
};

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS
});
