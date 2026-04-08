// ============================================================
// STEP PROBLEMS DATA — Mathematik
// FINAL BENCHMARK STANDARD v14.0: Continuous Decay & Semantic Drift Detection
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  funktionen_grundlagen: [
    {
      title: 'Nullstelle und ökonomische Lesart',
      context: 'Überschussnachfrage D(p) = 24 - 2p (nur zur Übung: lineare Form).',
      steps: [
        {
          q: '[1. Setup] Bei welchem Preis ist D(p)=0, wenn D(p)=24-2p?',
          answer: ['12', 'p=12', 'p = 12'],
          options: { problemId: 'ma_fg_1', stepId: 'solve', isDecision: true },
          hint: 'Lineare Gleichung 24-2p=0.',
          explain: '2p=24 ⇒ p=12.',
        },
        {
          q: '[2. Transfer] Wenn D(p) die Überschussnachfrage ist: Was bedeutet D(p)=0 ökonomisch?',
          answer: ['gleichgewicht', 'markt', 'geräumt', 'angebot', 'nachfrage', 'ausgeglichen'],
          options: { problemId: 'ma_fg_1', stepId: 'econ', dependsOn: 'solve' },
          hint: 'Kein Überschuss mehr auf einer Seite.',
          explain: 'Der Markt ist geräumt: Angebot und Nachfrage passen zusammen.',
        },
        {
          q: '[3. Vorzeichen] Für p<12: ist D(p) typischerweise positiv oder negativ? (ein Wort)',
          answer: ['positiv', 'positive'],
          options: { problemId: 'ma_fg_1', stepId: 'sign', dependsOn: 'econ' },
          hint: 'p klein ⇒ 2p klein ⇒ 24-2p groß.',
          explain: 'Unterhalb des Gleichgewichtspreises herrscht tendenziell Überschussnachfrage (positiv).',
        },
      ],
    },
  ],
  logarithmus_umkehr: [
    {
      title: 'Log-Gleichung und Domäne',
      context: 'Gleichung ln(5x-2)=ln 3 mit x>2/5.',
      steps: [
        {
          q: '[1. Algebra] Welche einfache Gleichung für x folgt (ln auf beiden Seiten weg)?',
          answer: ['5x-2=3', '5x = 5', '5x-2 = 3'],
          options: { problemId: 'ma_log_1', stepId: 'strip', isDecision: true },
          hint: 'ln ist injektiv auf (0,∞).',
          explain: '5x-2=3.',
        },
        {
          q: '[2. Lösung] Wert von x?',
          answer: ['1', 'x=1', 'x = 1'],
          options: { problemId: 'ma_log_1', stepId: 'x', dependsOn: 'strip' },
          hint: '5x=5.',
          explain: 'x=1.',
        },
        {
          q: '[3. Check] Liegt x in der Domäne 5x-2>0?',
          answer: ['ja', 'yes'],
          options: { problemId: 'ma_log_1', stepId: 'dom', dependsOn: 'x' },
          hint: 'Einsetzen.',
          explain: '5·1-2=3>0 — ja.',
        },
      ],
    },
  ],
  ableitung: [
    {
      title: 'Marginale Analyse',
      context: 'Kostenfunktion C(y) = y^2 + 4y + 10.',
      steps: [
        {
          q: '[1. Interpretation] Was gibt die erste Ableitung C\'(y) ökonomisch an?',
          answer: ['Grenzkosten', 'Marginal Costs', 'MC'],
          options: { problemId: 'ma_der_1', stepId: 'econ_meaning', isDecision: true },
          hint: 'Änderung der Kosten bei einer zusätzlichen Einheit Output.',
          explain: 'Die Ableitung der Gesamtkostenfunktion liefert die Grenzkosten (MC).',
        },
        {
          q: '[2. Execution] Berechnen Sie C\'(y).',
          answer: ['2y + 4'],
          options: { problemId: 'ma_der_1', stepId: 'calc_der', dependsOn: 'econ_meaning' },
          hint: 'Nutzen Sie die Potenzregel.',
          explain: 'C\'(y) = 2y + 4.',
        },
      ],
    },
    {
      title: 'Kettenregel unter Zeitdruck',
      context: 'R(Q) = (10 - Q)^3 für Q<10.',
      steps: [
        {
          q: '[1. Struktur] Äußere und innere Funktion? (Stichwort: innere = 10-Q)',
          answer: ['10-q', '10 - q', 'linear', 'äußer', 'potenz', 'hoch 3'],
          options: { problemId: 'ma_der_2', stepId: 'struct', isDecision: true },
          hint: 'u=10-Q, äußer u^3.',
          explain: 'Innere: 10-Q; äußere: Würfelfunktion.',
        },
        {
          q: '[2. Ableitung] R\'(Q) = ?',
          answer: ['-3(10-q)^2', '-3(10 - q)^2', '-3'],
          options: { problemId: 'ma_der_2', stepId: 'd', dependsOn: 'struct' },
          hint: '3u^2 mal du/dQ, du/dQ=-1.',
          explain: 'R\'(Q) = 3(10-Q)^2·(-1) = -3(10-Q)^2.',
        },
      ],
    },
  ],
  optimierung: [
    {
      title: 'Gewinnmaximierung',
      context: 'Erlös E(y) = 10y - y^2, Kosten C(y) = 2y.',
      steps: [
        {
          q: '[1. Decision] Wie lautet die Gewinnfunktion pi(y)?',
          answer: ['8y - y^2', '10y - y^2 - 2y'],
          options: { problemId: 'ma_opt_1', stepId: 'profit_id', isDecision: true },
          hint: 'Gewinn = Erlös - Kosten.',
          explain: 'pi(y) = 10y - y^2 - 2y = 8y - y^2.',
        },
        {
          q: '[2. Execution] Bestimmen Sie das Gewinnmaximum via BEO.',
          answer: ['4', 'y=4'],
          options: { problemId: 'ma_opt_1', stepId: 'exec_opt', dependsOn: 'profit_id' },
          hint: 'pi\'(y) = 0.',
          explain: '8 - 2y = 0 ⟹ y = 4.',
        },
        {
          q: '[3. Validation] Prüfen Sie die BZO. Ist es ein Maximum? (ja/nein)',
          answer: ['ja', 'yes'],
          options: { problemId: 'ma_opt_1', role: 'VALIDATION' },
          hint: 'Zweite Ableitung pi\'\'(y).',
          explain: 'pi\'\'(y) = -2 < 0. Ja, es ist ein Maximum.',
        },
      ],
    },
    {
      title: 'Rand vs. Inneres (Kurz)',
      context: 'Maximiere pi(x)=8x-x^2 auf [0,10].',
      steps: [
        {
          q: '[1. Inneres Kandidat] BEO: pi\'(x)=0 ergibt x=?',
          answer: ['4', 'x=4', 'x = 4'],
          options: { problemId: 'ma_opt_2', stepId: 'beo', isDecision: true },
          hint: '8-2x=0.',
          explain: 'x=4 liegt im Intervall [0,10].',
        },
        {
          q: '[2. Rand] Vergleichen Sie pi(0) und pi(10) kurz — wer gewinnt gegen pi(4)?',
          answer: ['4', 'innen', 'inner', 'x=4'],
          options: { problemId: 'ma_opt_2', stepId: 'cmp', dependsOn: 'beo' },
          hint: 'pi(4)=16, pi(0)=0, pi(10)=-20.',
          explain: 'Das globale Maximum auf [0,10] liegt im Inneren bei x=4.',
        },
      ],
    },
  ],
  lagrange: [
    {
      title: 'Haushalt mit Cobb-Douglas',
      context: 'U=x1^0.5 x2^0.5, Budget x1+x2=8 (Preise 1,1 vereinfacht).',
      steps: [
        {
          q: '[1. MRS] MU1/MU2 für U=x1^0.5 x2^0.5?',
          answer: ['x2/x1', 'x_2/x_1', 'verhältnis'],
          options: { problemId: 'ma_lag_1', stepId: 'ms', isDecision: true },
          hint: 'Partielle Ableitungen bilden und teilen.',
          explain: 'MU1/MU2 = x2/x1.',
        },
        {
          q: '[2. Tangential] Preisverhältnis p1/p2 hier?',
          answer: ['1', 'eins'],
          options: { problemId: 'ma_lag_1', stepId: 'price', dependsOn: 'ms' },
          hint: 'Beide Preise 1.',
          explain: 'p1/p2=1 ⇒ x2/x1=1 ⇒ x1=x2.',
        },
        {
          q: '[3. Budget] x1 und x2 aus x1+x2=8?',
          answer: ['4', 'x1=4', 'x2=4'],
          options: { problemId: 'ma_lag_1', stepId: 'bud', dependsOn: 'price' },
          hint: 'Gleich und summiert 8.',
          explain: 'x1=x2=4.',
        },
      ],
    },
  ],
  linalg_matrizen: [
    {
      title: 'Zeile-mal-Spalte',
      context: String.raw`A=(1\,2), B als Spalte (3,1)^T — Produkt (1×2)(2×1).`,
      steps: [
        {
          q: '[1. Dimension] Welches Format hat das Produkt AB?',
          answer: ['1x1', '1×1', 'skalar', 'zahl'],
          options: { problemId: 'ma_la1_1', stepId: 'dim', isDecision: true },
          hint: '(1×2)(2×1)→(1×1).',
          explain: 'Ein Skalar (1×1).',
        },
        {
          q: '[2. Rechnung] Wert von AB?',
          answer: ['5'],
          options: { problemId: 'ma_la1_1', stepId: 'val', dependsOn: 'dim' },
          hint: '1·3+2·1.',
          explain: 'AB=5.',
        },
      ],
    },
  ],
  linalg_det_inverse_lgs: [
    {
      title: 'Determinante entscheidet',
      context: String.raw`A=\begin{pmatrix}1&2\\2&4\end{pmatrix}.`,
      steps: [
        {
          q: '[1. det(A)]?',
          answer: ['0', '=0', 'null'],
          options: { problemId: 'ma_la2_1', stepId: 'det', isDecision: true },
          hint: '1·4-2·2.',
          explain: 'det(A)=0.',
        },
        {
          q: '[2. Inverse] Existiert A^{-1}? (ja/nein)',
          answer: ['nein', 'no'],
          options: { problemId: 'ma_la2_1', stepId: 'inv', dependsOn: 'det' },
          hint: 'Nur wenn det≠0.',
          explain: 'Keine Inverse bei singulärem A.',
        },
        {
          q: '[3. Transfer] Ökonomisch: was kann det(X\'X)=0 in der OLS-Notation signalisieren?',
          answer: ['multikollinear', 'kollinear', 'rang', 'nicht invertierbar'],
          options: { problemId: 'ma_la2_1', stepId: 'ols', dependsOn: 'inv' },
          hint: 'Siehe Warnbox singuläre Matrizen.',
          explain: 'Multikollinearität / kein eindeutiger OLS-Koeffizientenvektor.',
        },
      ],
    },
  ],
  integral: [
    {
      title: 'Konsumentenrente (Zahlen)',
      context: 'P(Q)=40-Q, Gleichgewicht Q*=10, p*=30.',
      steps: [
        {
          q: '[1. Integral] Wert von ∫_0^10 (40-Q) dQ ? (nur Zahl)',
          answer: ['350'],
          options: { problemId: 'ma_int_1', stepId: 'int', isDecision: true },
          hint: 'Stammfunktion 40Q-Q^2/2.',
          explain: '400-50=350.',
        },
        {
          q: '[2. Rechteck] p*·Q* = ?',
          answer: ['300'],
          options: { problemId: 'ma_int_1', stepId: 'rect', dependsOn: 'int' },
          hint: '30·10.',
          explain: '300.',
        },
        {
          q: '[3. KR] KR = Integral minus Rechteck?',
          answer: ['50'],
          options: { problemId: 'ma_int_1', stepId: 'kr', dependsOn: 'rect' },
          hint: '350-300.',
          explain: 'KR=50.',
        },
      ],
    },
  ],
};

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS,
});
