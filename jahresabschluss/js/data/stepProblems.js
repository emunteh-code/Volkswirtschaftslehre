// ============================================================
// STEP PROBLEMS DATA — Jahresabschluss
// FINAL BENCHMARK STANDARD v14.0: Continuous Decay & Semantic Drift Detection
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  grundlagen: [
    {
      title: 'Buchungssatz & Bilanzwirkung',
      context: 'Zielkauf von Rohstoffen für 5.000 €.',
      steps: [
        { 
          q: '[1. Interpretation] Welche Kontenarten sind betroffen?', 
          answer: ['Aktiv und Passiv', 'Bestandskonten'], 
          options: { problemId: 'ja_gr_1', stepId: 'acc_id', isDecision: true },
          hint: 'Rohstoffe sind Vermögen, Verbindlichkeiten sind Schulden.', 
          explain: 'Rohstoffe (Aktiva) und Verbindlichkeiten (Passiva) sind betroffen.' 
        },
        { 
          q: '[2. Execution] Bilden Sie den Buchungssatz.', 
          answer: ['Rohstoffe an Verbindlichkeiten', 'Rohstoffe 5000 an Verbindlichkeiten 5000'], 
          options: { problemId: 'ja_gr_1', stepId: 'entry_exec', dependsOn: 'acc_id' },
          hint: 'Soll an Haben.', 
          explain: 'Rohstoffe 5.000 an Verbindlichkeiten aus LuL 5.000.' 
        },
        { 
          q: '[3. Validation] Wie verändert sich die Bilanzsumme?', 
          answer: ['steigt', '↑', 'Bilanzverlängerung'], 
          options: { problemId: 'ja_gr_1', role: 'VALIDATION' },
          hint: 'Beide Seiten der Bilanz nehmen zu.', 
          explain: 'Es liegt eine Bilanzverlängerung vor (+5.000 €).' 
        }
      ]
    }
  ],
  bewertung: [
    {
      title: 'Anschaffungskosten-Berechnung',
      context: 'Kaufpreis 20.000 €, Transport 1.000 €, Rabatt 10%.',
      steps: [
        { 
          q: '[1. Decision] Wie hoch ist der geminderte Anschaffungspreis?', 
          answer: ['18000', '18.000'], 
          options: { problemId: 'ja_bw_1', stepId: 'net_price', isDecision: true },
          hint: '20.000 * 0.9.', 
          explain: '20.000 - 10% = 18.000 €.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie die aktivierungspflichtigen Anschaffungskosten.', 
          answer: ['19000', '19.000'], 
          options: { problemId: 'ja_bw_1', dependsOn: 'net_price' },
          hint: 'Addieren Sie die Transportkosten zum geminderten Preis.', 
          explain: '18.000 + 1.000 = 19.000 €.' 
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
