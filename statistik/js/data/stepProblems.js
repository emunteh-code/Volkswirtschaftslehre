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
    ,
    {
      title: 'Ausreißerfalle bei Lagemaßen',
      context: 'Datensatz mit starkem oberen Ausreißer; Mittelwert deutlich über Median.',
      steps: [
        {
          q: '[1. Decision] Welches Lagemaß ist robuster gegen Ausreißer?',
          answer: ['median'],
          options: { problemId: 'stat_desk_2', stepId: 'robust', isDecision: true },
          hint: 'Denke an Schiefe und Extremwerte.',
          explain: 'Der Median reagiert deutlich weniger auf einzelne Extremwerte.'
        },
        {
          q: '[2. Execution] Reicht es, nur den Mittelwert zu berichten?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_desk_2', stepId: 'report', dependsOn: 'robust' },
          hint: 'Interpretation soll Lage und Streuung trennen.',
          explain: 'Nein. Bei Ausreißern sind Median + Streuungsmaß notwendig.'
        },
        {
          q: '[3. Validation] Ist "höheres Mittel = typisch höheres Niveau" immer korrekt?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'stat_desk_2', role: 'VALIDATION' },
          hint: 'Ein Extremwert kann den Mittelwert ziehen.',
          explain: 'Nein. Das typische Niveau kann trotz höherem Mittel unverändert sein.'
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
    ,
    {
      title: 'p-Wert und Entscheidungsfalle',
      context: 'Gegeben: p = 0.08 bei alpha = 0.05.',
      steps: [
        {
          q: '[1. Decision] Wird H0 auf 5%-Niveau verworfen?',
          answer: ['nein', 'Nein', 'nicht verwerfen'],
          options: { problemId: 'stat_test_2', stepId: 'decision', isDecision: true },
          hint: 'Vergleiche p direkt mit alpha.',
          explain: 'p = 0.08 ist größer als 0.05; H0 wird nicht verworfen.'
        },
        {
          q: '[2. Execution] Bedeutet p=0.08, dass H0 mit 92% Wahrscheinlichkeit wahr ist?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'stat_test_2', stepId: 'pmean', dependsOn: 'decision' },
          hint: 'p-Wert ist nicht P(H0 wahr).',
          explain: 'Der p-Wert ist eine Wahrscheinlichkeit unter H0, nicht über H0.'
        },
        {
          q: '[3. Validation] Ist "nicht verworfen" gleichbedeutend mit "bewiesen wahr"?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'stat_test_2', role: 'VALIDATION' },
          hint: 'Denke an Teststärke und Fehler 2. Art.',
          explain: 'Nein. Ein nicht signifikanter Test beweist H0 nicht.'
        }
      ]
    }
  ],
  z_test: [
    {
      title: 'z oder t korrekt wählen',
      context: 'Mittelwerttest, sigma unbekannt, n=18.',
      steps: [
        {
          q: '[1. Decision] Welcher Test ist der saubere Standard?',
          answer: ['t-test', 't test', 't'],
          options: { problemId: 'stat_z_1', stepId: 'select', isDecision: true },
          hint: 'Unbekanntes sigma ist der Schlüssel.',
          explain: 'Bei unbekanntem sigma wird standardmäßig der t-Test verwendet.'
        },
        {
          q: '[2. Execution] Warum ist z hier riskant als Standard?',
          answer: ['df', 'dickere ränder', 't-verteilung', 'unsicherheit'],
          options: { problemId: 'stat_z_1', stepId: 'why', dependsOn: 'select' },
          hint: 'Kleine Stichprobe -> Verteilungsunterschied zählt.',
          explain: 'Die t-Verteilung ist bei kleinem n breiter; z wäre zu optimistisch.'
        },
        {
          q: '[3. Validation] Nähern sich z- und t-Test bei großem n an?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_z_1', role: 'VALIDATION' },
          hint: 'Grenzwertidee.',
          explain: 'Ja, mit wachsendem n konvergiert t gegen z.'
        }
      ]
    }
  ],
  zwei_stichproben: [
    {
      title: 'Paarstruktur korrekt erkennen',
      context: 'Vorher-Nachher-Messung an denselben 20 Personen.',
      steps: [
        {
          q: '[1. Decision] Verbundener oder unverbundener Test?',
          answer: ['verbunden', 'paired', 'gepaarter t-test'],
          options: { problemId: 'stat_2s_1', stepId: 'pair', isDecision: true },
          hint: 'Sind es dieselben Personen?',
          explain: 'Ja, es sind gepaarte Beobachtungen -> verbundener Test.'
        },
        {
          q: '[2. Execution] Welche Größe wird beim verbundenen Test analysiert?',
          answer: ['differenzen', 'd_i', 'vorher-nachher differenz'],
          options: { problemId: 'stat_2s_1', stepId: 'diff', dependsOn: 'pair' },
          hint: 'Pro Person eine Differenz.',
          explain: 'Getestet wird der Mittelwert der individuellen Differenzen.'
        },
        {
          q: '[3. Validation] Ist ein unverbundener Test hier meist konservativ und weniger effizient?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_2s_1', role: 'VALIDATION' },
          hint: 'Er ignoriert die Paarinformation.',
          explain: 'Ja, er wirft die Individualkontrolle weg und verliert häufig Teststärke.'
        }
      ]
    }
  ],
  regression: [
    {
      title: 'Signifikant vs. relevant',
      context: 'Regressionsoutput: beta1 = 0.02, p < 0.01, große Stichprobe.',
      steps: [
        {
          q: '[1. Decision] Ist der Effekt statistisch signifikant?',
          answer: ['ja', 'Ja'],
          options: { problemId: 'stat_reg_1', stepId: 'sig', isDecision: true },
          hint: 'Direkt p mit alpha vergleichen.',
          explain: 'Ja, p < 0.01 zeigt statistische Signifikanz.'
        },
        {
          q: '[2. Execution] Reicht Signifikanz allein für hohe praktische Relevanz?',
          answer: ['nein', 'Nein'],
          options: { problemId: 'stat_reg_1', stepId: 'rel', dependsOn: 'sig' },
          hint: 'Effektgröße separat betrachten.',
          explain: 'Nein, die Effektgröße (0.02) kann praktisch klein sein.'
        },
        {
          q: '[3. Validation] Ist hohes R² ein Kausalitätsbeweis?',
          answer: ['nein', 'falsch'],
          options: { problemId: 'stat_reg_1', role: 'VALIDATION' },
          hint: 'Denke an omitted variables und Design.',
          explain: 'Nein, R² misst Erklärungsanteil, nicht Kausalität.'
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
