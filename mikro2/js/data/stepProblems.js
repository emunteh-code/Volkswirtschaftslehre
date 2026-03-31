// ============================================================
// STEP PROBLEMS DATA — Mikroökonomik II
// FINAL BENCHMARK STANDARD v14.0: Continuous Decay & Semantic Drift Detection
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  spieltheorie: [
    {
      title: 'Nash-Gleichgewicht in reinen Strategien',
      context: 'Zwei Firmen A und B entscheiden über hohe (H) oder niedrige (N) Preise.',
      steps: [
        { 
          q: '[1. Interpretation] Was ist die beste Antwort von Firma A, wenn B hohe Preise (H) wählt? (Nutzen: A erhält 10 bei H, 12 bei N)', 
          answer: ['Niedrig', 'N', 'Low'], 
          options: { problemId: 'm2_game_1', stepId: 'br_a_h', isDecision: true },
          hint: 'Vergleichen Sie die Auszahlungen 10 und 12.', 
          explain: 'Da 12 > 10, ist N die beste Antwort auf H.' 
        },
        { 
          q: '[2. Decision] Angenommen, N ist für beide Firmen eine dominante Strategie. Welches Nash-Gleichgewicht resultiert?', 
          answer: ['(N,N)', 'N,N', 'N N'], 
          options: { problemId: 'm2_game_1', stepId: 'ng_choice', dependsOn: 'br_a_h' },
          hint: 'Wenn beide ihre dominante Strategie wählen...', 
          explain: 'Das Strategieprofil (N,N) ist dann das eindeutige NG.' 
        },
        { 
          q: '[3. Validation] Ist dieses NG zwingend Pareto-effizient? (ja/nein)', 
          answer: ['nein', 'no'], 
          options: { problemId: 'm2_game_1', role: 'VALIDATION' },
          hint: 'Denken Sie an das Gefangenendilemma.', 
          explain: 'Nein, im Gefangenendilemma ist das NG (D,D) nicht Pareto-effizient.' 
        }
      ]
    }
  ],
  oligopol: [
    {
      title: 'Cournot-Duopol: Reaktionsfunktion',
      context: 'Marktnachfrage P = 100 - Q. Grenzkosten c = 10.',
      steps: [
        { 
          q: '[1. Interpretation] Wie lautet die Gewinnfunktion von Firma 1 in Abhängigkeit von q1 und q2?', 
          answer: ['(100-q1-q2)q1 - 10q1', '100q1-q1^2-q1q2-10q1'], 
          options: { problemId: 'm2_cournot_1', stepId: 'profit_id', isDecision: true },
          hint: 'Gewinn = (P - c) * q.', 
          explain: 'pi_1 = (100 - (q1 + q2) - 10) * q1 = (90 - q1 - q2) * q1.' 
        },
        { 
          q: '[2. Execution] Bestimme die Reaktionsfunktion q1(q2).', 
          answer: ['(90-q2)/2', '45-0.5q2', '45-0,5q2'], 
          options: { problemId: 'm2_cournot_1', stepId: 'reac_calc', dependsOn: 'profit_id' },
          hint: 'Leite pi_1 nach q1 ab und setze gleich 0.', 
          explain: '90 - 2q1 - q2 = 0 ⟹ 2q1 = 90 - q2 ⟹ q1 = (90 - q2)/2.' 
        }
      ]
    }
  ],
  gleichgewicht: [
    {
      title: 'Edgeworth-Box: Pareto-Effizienz',
      context: 'Zwei Konsumenten A, B. uA = x1*x2, uB = x1*x2. Ausstattung (10, 10). Aktueller Punkt: A=(2,2), B=(8,8).',
      steps: [
        { 
          q: '[1. Interpretation] Berechne die GRS von Konsument A im Punkt (2,2).', 
          answer: ['1'], 
          options: { problemId: 'm2_ge_1', stepId: 'grs_a', isDecision: true },
          hint: 'GRS = x2/x1 für Cobb-Douglas.', 
          explain: 'GRS_A = 2/2 = 1.' 
        },
        { 
          q: '[2. Decision] Da GRS_B ebenfalls 1 ist: Ist dieser Punkt Pareto-effizient? (ja/nein)', 
          answer: ['ja', 'yes'], 
          options: { problemId: 'm2_ge_1', stepId: 'eff_choice', dependsOn: 'grs_a' },
          hint: 'Effizienzbedingung GRS_A = GRS_B.', 
          explain: 'Ja, da die Grenzraten der Substitution gleich sind, können sich beide nicht mehr durch Tausch verbessern, ohne den anderen schlechter zu stellen.' 
        }
      ]
    }
  ],
  information: [
    {
      title: 'Adverse Selection: Lemons Market',
      context: 'Gute Autos (v=5000), schlechte (v=2000). Anteil jeweils 50%.',
      steps: [
        { 
          q: '[1. Interpretation] Welchen Preis ist ein uninformierter Käufer maximal bereit zu zahlen?', 
          answer: ['3500'], 
          options: { problemId: 'm2_info_1', stepId: 'price_exp', isDecision: true },
          hint: 'Berechnen Sie den Erwartungswert.', 
          explain: 'E[v] = 0,5 * 5000 + 0,5 * 2000 = 3500.' 
        },
        { 
          q: '[2. Decision] Verkäufer guter Autos verlangen mindestens 4000. Bleiben diese Autos am Markt? (ja/nein)', 
          answer: ['nein', 'no'], 
          options: { problemId: 'm2_info_1', stepId: 'market_choice', dependsOn: 'price_exp' },
          hint: 'Vergleichen Sie den Marktpreis mit der Mindestforderung.', 
          explain: 'Da 3500 < 4000, ziehen sich die Besitzer guter Autos vom Markt zurück.' 
        },
        { 
          q: '[3. Validation] Wie ändert sich die Qualität im Markt durch diesen Prozess? (Symbol erlaubt)', 
          answer: ['sinkt', '↓', 'schlechter'], 
          options: { problemId: 'm2_info_1', role: 'VALIDATION' },
          hint: 'Nur schlechte Autos bleiben übrig.', 
          explain: 'Die Durchschnittsqualität sinkt auf 2000 (Adverse Selection).' 
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
