// ============================================================
// STEP PROBLEMS DATA — Recht
// FINAL BENCHMARK STANDARD v14.0: Continuous Decay & Semantic Drift Detection
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  rechtsgeschaeft: [
    {
      title: 'Vertragsschluss & Schweigen',
      context: 'A bietet B via E-Mail einen Laptop für 300 € an. B antwortet nicht.',
      steps: [
        { 
          q: '[1. Interpretation] Stellt die E-Mail des A ein rechtlich bindendes Angebot dar?', 
          answer: ['ja', 'yes'], 
          options: { problemId: 're_rg_1', stepId: 'offer_id', isDecision: true },
          hint: 'Bestimmtheit von Ware, Preis und Partner.', 
          explain: 'Ja, es enthält alle wesentlichen Vertragsbestandteile (essentialia negotii).' 
        },
        { 
          q: '[2. Decision] Gilt das Schweigen des B im Privatrecht grundsätzlich als Annahme?', 
          answer: ['nein', 'no'], 
          options: { problemId: 're_rg_1', stepId: 'silence_id', dependsOn: 'offer_id' },
          hint: 'Schweigen ist im BGB "keine Willenserklärung".', 
          explain: 'Im BGB-Privatrecht bedeutet Schweigen grundsätzlich Ablehnung (Ausnahme: Handelsrecht).' 
        },
        { 
          q: '[3. Validation] Ist ein Kaufvertrag zustande gekommen?', 
          answer: ['nein', 'kein vertrag'], 
          options: { problemId: 're_rg_1', role: 'VALIDATION' },
          hint: 'Zwei übereinstimmende WE nötig.', 
          explain: 'Mangels Annahmeerklärung liegt kein Vertrag vor.' 
        }
      ]
    }
  ],
  vertretung: [
    {
      title: 'Voraussetzungen der Stellvertretung',
      context: 'Der 10-jährige Sohn S kauft im Namen seines Vaters V ein Eis.',
      steps: [
        { 
          q: '[1. Interpretation] Kann ein beschränkt Geschäftsfähiger (7-17 Jahre) Vertreter sein?', 
          answer: ['ja', 'gemäß § 165'], 
          options: { problemId: 're_ve_1', isDecision: true },
          hint: 'Schauen Sie in § 165 BGB.', 
          explain: 'Ja, die Wirksamkeit einer von einem Vertreter abgegebenen WE wird nicht dadurch beeinträchtigt, dass er beschränkt geschäftsfähig ist.' 
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
