// ============================================================
// STEP PROBLEMS DATA — Int. Wirtschaftsbeziehungen
// FINAL BENCHMARK STANDARD v14.0: Continuous Decay & Semantic Drift Detection
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  ricardo: [
    {
      title: 'Opportunitätskosten & Vorteil',
      context: 'Inland: 2h/Wein, 4h/Käse. Ausland: 6h/Wein, 8h/Käse.',
      steps: [
        { 
          q: '[1. Interpretation] Wie hoch sind die Opportunitätskosten für Wein im Inland (in Einheiten Käse)?', 
          answer: ['0.5', '0,5', '1/2'], 
          options: { problemId: 'iw_ri_1', stepId: 'opp_in', isDecision: true },
          hint: 'Teilen Sie die Arbeitszeit für Wein durch die für Käse.', 
          explain: '2 / 4 = 0,5 Käse.' 
        },
        { 
          q: '[2. Decision] Welches Land hat den komparativen Vorteil bei Wein?', 
          answer: ['Inland', 'Home'], 
          options: { problemId: 'iw_ri_1', stepId: 'comp_adv', dependsOn: 'opp_in' },
          hint: 'Vergleichen Sie mit den Kosten im Ausland (6/8 = 0,75).', 
          explain: 'Da 0,5 < 0,75, produziert das Inland Wein relativ günstiger.' 
        }
      ]
    }
  ],
  zoelle: [
    {
      title: 'Zollwirkung (Kleines Land)',
      context: 'Ein kleines Land führt einen Importzoll t ein.',
      steps: [
        { 
          q: '[1. Interpretation] Wie verändert sich der Inlandspreis P?', 
          answer: ['steigt', '↑', 'P + t'], 
          options: { problemId: 'iw_zo_1', isDecision: true },
          hint: 'Der Zoll wird auf den Weltmarktpreis aufgeschlagen.', 
          explain: 'Der Inlandspreis steigt auf P_w + t.' 
        },
        { 
          q: '[2. Decision] Wie reagiert die inländische Produktion auf den höheren Preis?', 
          answer: ['steigt', '↑', 'höher'], 
          options: { problemId: 'iw_zo_1', dependsOn: 'steigt' },
          hint: 'Blick auf die Angebotskurve.', 
          explain: 'Höhere Preise machen die heimische Produktion attraktiver.' 
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
