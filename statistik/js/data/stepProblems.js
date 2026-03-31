// ============================================================
// STEP PROBLEMS DATA — Statistik
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  deskriptiv: [
    {
      title: 'Lagemaße berechnen',
      context: 'Gegeben sind die Werte: 2, 4, 4, 5, 7, 9.',
      steps: [
        {
          q: '[1. Interpretation] Was ist der arithmetische Mittelwert?',
          answer: ['5.17', '5,17', '31/6'],
          options: { problemId: 'stat_desk_1', stepId: 'mean', isDecision: false },
          hint: 'Summe aller Werte geteilt durch Anzahl.',
          explain: '(2+4+4+5+7+9)/6 = 31/6 ≈ 5.17'
        },
        {
          q: '[2. Berechnung] Was ist der Median?',
          answer: ['4.5', '4,5'],
          options: { problemId: 'stat_desk_1', stepId: 'median', dependsOn: 'mean' },
          hint: 'Bei gerader Anzahl: Mittelwert der beiden mittleren Werte.',
          explain: 'Sortiert: 2,4,4,5,7,9. Median = (4+5)/2 = 4.5'
        }
      ]
    }
  ],
  testen: [
    {
      title: 'Einstichproben-t-Test',
      context: 'Stichprobe mit n=16, x̄=52, s=8. Hypothese: μ₀=50, α=0.05.',
      steps: [
        {
          q: '[1. Interpretation] Formulieren Sie die Nullhypothese.',
          answer: ['H0: mu = 50', 'H0: μ = 50', 'mu=50', 'μ=50'],
          options: { problemId: 'stat_test_1', stepId: 'h0', isDecision: true },
          hint: 'H₀ entspricht dem behaupteten Wert.',
          explain: 'H₀: μ = 50, H₁: μ ≠ 50 (zweiseitig).'
        },
        {
          q: '[2. Berechnung] Berechnen Sie die Teststatistik t.',
          answer: ['1', '1.0', '1,0'],
          options: { problemId: 'stat_test_1', stepId: 'tstat', dependsOn: 'h0' },
          hint: 't = (x̄ − μ₀) / (s/√n)',
          explain: 't = (52−50)/(8/4) = 2/2 = 1'
        },
        {
          q: '[3. Validierung] Wird H₀ zum 5%-Niveau abgelehnt?',
          answer: ['nein', 'Nein', 'nicht abgelehnt'],
          options: { problemId: 'stat_test_1', stepId: 'decision', dependsOn: 'tstat', role: 'VALIDATION' },
          hint: 'Vergleichen Sie |t| mit dem kritischen Wert t₀.₀₂₅,₁₅ ≈ 2.131.',
          explain: '|t| = 1 < 2.131, daher wird H₀ nicht abgelehnt.'
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
