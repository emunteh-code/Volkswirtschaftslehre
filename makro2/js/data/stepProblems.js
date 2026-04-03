// ============================================================
// STEP PROBLEMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v12.1: Adversarial Hardening
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  wechselkurs: [
    {
      title: 'Wechselkurs-Anpassung (Validation)',
      context: 'Inflation pi = 5%, pi* = 2%. Nominalkurs E sinkt um 1%.',
      steps: [
        { 
          q: '[1. Decision] Liegt nominal eine Auf- oder Abwertung vor? (Symbol erlaubt)', 
          answer: ['abwertung', '↓'], 
          options: { problemId: 'm2_wk_strict', stepId: 'nom_dir', isDecision: true, targetVar: 'VAR_E' },
          hint: 'E sinkt in Mengennotierung.', 
          explain: 'E ↓ ⟹ Abwertung.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie die Änderung des realen Wechselkurses epsilon.', 
          answer: ['2', '2%', '0.02'], 
          options: { problemId: 'm2_wk_strict', stepId: 'real_calc', dependsOn: 'nom_dir' },
          hint: '%delta epsilon ≈ %delta E + pi - pi*.', 
          explain: '-1% + 5% - 2% = +2%.' 
        },
        { 
          q: '[3. Validation] Entspricht ein Anstieg von epsilon einer Verbesserung der Wettbewerbsfähigkeit?', 
          answer: ['nein', 'no', 'verschlechterung'], 
          options: { problemId: 'm2_wk_strict', role: 'VALIDATION' },
          hint: 'epsilon ↑ ⟹ Inlandsgüter werden relativ teurer.', 
          explain: 'Wettbewerbsfähigkeit sinkt.' 
        }
      ]
    }
  ],
  kaufkraftparitaet: [
    {
      title: 'Relative PPP sauber lesen',
      context: 'Inflation Inland 6%, Ausland 2%. Gesucht ist die nominale Kursbewegung in Mengennotierung.',
      steps: [
        {
          q: '[1. Decision] Welche Beziehung ist die richtige erste Formel?',
          answer: ['relative ppp', 'ppp', 'inflationsdifferenz'],
          options: { problemId: 'm2_ppp_strict', stepId: 'ppp_formula', isDecision: true },
          hint: 'Es geht um Änderungsraten, nicht um Niveaus.',
          explain: 'Bei Inflationsdifferenzen startet man mit der relativen PPP.'
        },
        {
          q: '[2. Execution] Berechne die approximative Wechselkursänderung.',
          answer: ['-4', '-4%', '-0.04'],
          options: { problemId: 'm2_ppp_strict', stepId: 'ppp_change', dependsOn: 'ppp_formula' },
          hint: 'Nutze pi* - pi.',
          explain: '2% - 6% = -4%.'
        },
        {
          q: '[3. Validation] Bedeutet das in Mengennotierung Auf- oder Abwertung?',
          answer: ['abwertung', 'abwertet', 'sinkt'],
          options: { problemId: 'm2_ppp_strict', role: 'VALIDATION' },
          hint: 'Ein negatives Vorzeichen drückt E nach unten.',
          explain: 'E sinkt; das Inland wertet nominal ab.'
        }
      ]
    }
  ],
  offene_is: [
    {
      title: 'Offener Multiplikator',
      context: 'c1 = 0.6, b1 = 0.1, q1 = 0.2, Delta G = 50.',
      steps: [
        {
          q: '[1. Decision] Welche Größe macht den offenen Multiplikator kleiner als den geschlossenen?',
          answer: ['importquote', 'q1', 'importe'],
          options: { problemId: 'm2_is_open', stepId: 'leak_id', isDecision: true },
          hint: 'Suche das Nachfrageleck.',
          explain: 'Die marginale Importquote q1 dämpft den Multiplikator.'
        },
        {
          q: '[2. Execution] Berechne den Multiplikator.',
          answer: ['3.33', '3,33', '10/3'],
          options: { problemId: 'm2_is_open', stepId: 'mult_calc', dependsOn: 'leak_id' },
          hint: '1 / (1 - c1 - b1 + q1)',
          explain: '1 / (1 - 0.6 - 0.1 + 0.2) = 1 / 0.3 = 3.33.'
        },
        {
          q: '[3. Validation] Wie groß ist Delta Y?',
          answer: ['166.7', '166,7', '500/3'],
          options: { problemId: 'm2_is_open', role: 'VALIDATION' },
          hint: 'Multipliziere mit Delta G.',
          explain: '3.33 mal 50 ergibt etwa 166.7.'
        }
      ]
    }
  ],
  mundell_fleming: [
    {
      title: 'Fiskalpolitik bei flexiblem WK',
      context: 'Kleine offene VW, perfekter Kapitalverkehr, flexibler Wechselkurs.',
      steps: [
        {
          q: '[1. Decision] Welches Instrument ist bei flexiblem WK im Mundell-Fleming-Modell typischerweise wirksamer?',
          answer: ['geldpolitik', 'monetary'],
          options: { problemId: 'm2_mf_flex', stepId: 'tool_choice', isDecision: true },
          hint: 'Denke an den Wechselkurskanal.',
          explain: 'Geldpolitik wirkt über Zins, Wechselkurs und Nettoexporte besonders stark.'
        },
        {
          q: '[2. Execution] Was passiert mit dem Wechselkurs nach expansiver Fiskalpolitik?',
          answer: ['aufwertung', 'wertet auf'],
          options: { problemId: 'm2_mf_flex', stepId: 'e_dir', dependsOn: 'tool_choice' },
          hint: 'IS nach rechts, Kapitalzufluss, ...',
          explain: 'Die Währung wertet auf.'
        },
        {
          q: '[3. Validation] Wirkt diese Aufwertung auf NX positiv oder negativ?',
          answer: ['negativ', 'nx sinken', 'verschlechtert'],
          options: { problemId: 'm2_mf_flex', role: 'VALIDATION' },
          hint: 'Aufwertung verteuert das Inland relativ.',
          explain: 'NX sinken; ein Teil des Fiskalimpulses wird neutralisiert.'
        }
      ]
    }
  ],
  phillipskurve: [
    {
      title: 'Inflation aus der Phillipskurve',
      context: 'pi^e = 2, u_n = 5, alpha = 0.8, u = 4.',
      steps: [
        {
          q: '[1. Decision] Liegt die Arbeitslosigkeit über oder unter dem natürlichen Niveau?',
          answer: ['unter', 'below'],
          options: { problemId: 'm2_pk_strict', stepId: 'u_gap', isDecision: true },
          hint: '4 im Vergleich zu 5.',
          explain: 'u liegt unter u_n.'
        },
        {
          q: '[2. Execution] Berechne die Inflation.',
          answer: ['2.8', '2,8'],
          options: { problemId: 'm2_pk_strict', stepId: 'pi_calc', dependsOn: 'u_gap' },
          hint: 'pi = pi^e - alpha(u-u_n).',
          explain: '2 - 0.8(4 - 5) = 2.8.'
        },
        {
          q: '[3. Validation] Liegt die Inflation über oder unter den Erwartungen?',
          answer: ['über', 'higher'],
          options: { problemId: 'm2_pk_strict', role: 'VALIDATION' },
          hint: 'Vergleiche 2.8 mit 2.',
          explain: 'Sie liegt über den Erwartungen.'
        }
      ]
    }
  ],
  taylor_regel: [
    {
      title: 'Taylor-Regel anwenden',
      context: 'r* = 1, pi = 3, pi* = 2, a = 0.8, outputluecke = 1, b = 0.5.',
      steps: [
        {
          q: '[1. Decision] Reagiert die Zentralbank auf zwei oder nur auf eine Abweichung?',
          answer: ['zwei', '2', 'inflation und output'],
          options: { problemId: 'm2_taylor_strict', stepId: 'inputs', isDecision: true },
          hint: 'Schau auf Inflation und Lücke.',
          explain: 'Die Regel reagiert hier auf Inflationsabweichung und Outputlücke.'
        },
        {
          q: '[2. Execution] Berechne den Leitzins.',
          answer: ['4.3', '4,3'],
          options: { problemId: 'm2_taylor_strict', stepId: 'i_calc', dependsOn: 'inputs' },
          hint: 'Setze alles in die Regel ein.',
          explain: '1 + 3 + 0.8(1) + 0.5(1) = 4.3.'
        },
        {
          q: '[3. Validation] Erfüllt die Regel das Taylor-Prinzip?',
          answer: ['ja', 'yes'],
          options: { problemId: 'm2_taylor_strict', role: 'VALIDATION' },
          hint: 'Reaktion auf Inflation ist 1 + a.',
          explain: 'Ja, 1 + a = 1.8 und damit mehr als eins zu eins.'
        }
      ]
    }
  ],
  solow_basis: [
    {
      title: 'Solow: Das Goldene-Regel-Limit',
      context: 'Steady State bei k > k_GR. Die Sparquote s sinkt.',
      steps: [
        { 
          q: '[1. Interpretation] Welcher Zustand der Kapitalakkumulation liegt hier vor?', 
          answer: ['überakkumulation', 'over-accumulation'], 
          options: { problemId: 'm2_solow_strict', stepId: 'state_id', isDecision: true, modelId: 'OVERACCUM' },
          hint: 'k > k_GR.', 
          explain: 'Die Wirtschaft hat zu viel Kapital.' 
        },
        { 
          q: '[2. Decision] Führt s↓ langfristig zu steigendem oder sinkendem Konsum c?', 
          answer: ['steigend', '↑', 'höher'], 
          options: { 
            problemId: 'm2_solow_strict', 
            stepId: 'cons_dir', 
            dependsOn: 'state_id',
            premise: 'OVERACCUM',
            targetVar: 'VAR_C'
          },
          hint: 'Überlegen Sie, ob das Land "zu viel" spart.', 
          explain: 'In der Überakkumulation erhöht weniger Sparen den Konsum.' 
        },
        { 
          q: '[3. Validation] Erklären Sie die J-Kurve bei der s-Senkung (Ambiguity erlaubt).', 
          answer: ['ambig', 'c↑ sofort'], 
          options: { problemId: 'm2_solow_strict', role: 'VALIDATION', ambiguityAllowed: true },
          hint: 'Hängt vom Zeithorizont ab.', 
          explain: 'Kurzfristig steigt der Konsum sofort (c=(1-s)y), langfristig konvergiert er gegen das höhere Steady-State-Niveau.' 
        }
      ]
    }
  ],
  tech_fortschritt: [
    {
      title: 'Solow mit technischem Fortschritt',
      context: 'Arbeitsvermehrender Fortschritt g_A = 1%.',
      steps: [
        {
          q: '[1. Decision] Wächst Y/N im Steady State dauerhaft mit der Sparquote oder mit g_A?',
          answer: ['g_a', 'technischer fortschritt', '1%'],
          options: { problemId: 'm2_tf_strict', stepId: 'growth_source', isDecision: true },
          hint: 'Mehr Sparen hebt Niveau, nicht Dauerwachstum.',
          explain: 'Dauerhaftes Pro-Kopf-Wachstum stammt aus g_A.'
        },
        {
          q: '[2. Execution] Wie hoch ist dann die langfristige Wachstumsrate von Y/N?',
          answer: ['1', '1%', '0.01'],
          options: { problemId: 'm2_tf_strict', stepId: 'growth_rate', dependsOn: 'growth_source' },
          hint: 'Sie entspricht g_A.',
          explain: 'Im Steady State wächst Y/N mit 1%.'
        },
        {
          q: '[3. Validation] Maximiert die Goldene Regel Output oder Konsum?',
          answer: ['konsum', 'consumption'],
          options: { problemId: 'm2_tf_strict', role: 'VALIDATION' },
          hint: 'Nicht das höchste y zählt.',
          explain: 'Die Goldene Regel maximiert den langfristigen Konsum.'
        }
      ]
    }
  ],
  schuldenquote: [
    {
      title: 'Schuldenquote stabilisieren',
      context: 'b = 90%, r = 4%, g = 1%.',
      steps: [
        {
          q: '[1. Decision] Wirkt die Zins-Wachstums-Differenz hier stabilisierend oder destabilisierend?',
          answer: ['destabilisierend', 'r>g', 'schneeball'],
          options: { problemId: 'm2_debt_strict', stepId: 'rg_compare', isDecision: true },
          hint: 'Vergleiche 4% und 1%.',
          explain: 'r > g; der Schneeballeffekt arbeitet gegen den Staat.'
        },
        {
          q: '[2. Execution] Berechne den stabilisierenden Primärsaldo in % des BIP.',
          answer: ['2.7', '2,7', '0.027'],
          options: { problemId: 'm2_debt_strict', stepId: 'ps_calc', dependsOn: 'rg_compare' },
          hint: '(r-g)b',
          explain: '(0.04 - 0.01) mal 0.90 = 0.027.'
        },
        {
          q: '[3. Validation] Ist ein Primärüberschuss oder ein Primärdefizit nötig?',
          answer: ['primärüberschuss', 'überschuss'],
          options: { problemId: 'm2_debt_strict', role: 'VALIDATION' },
          hint: 'Das Vorzeichen der Stabilisierung zählt.',
          explain: 'Es braucht einen Primärüberschuss von etwa 2.7% des BIP.'
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
