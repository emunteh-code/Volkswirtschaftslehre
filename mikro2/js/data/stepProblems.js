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
    },
    {
      title: 'Cournot vs. Bertrand: Modellwahl unter Prüfungsdruck',
      context: 'Zwei Anbieter, homogenes Gut, keine Kapazitätsgrenzen.',
      steps: [
        {
          q: '[1. Interpretation] Wenn Firmen Preise statt Mengen wählen: Welches Modell ist der Standardzugriff?',
          answer: ['Bertrand', 'bertrand'],
          options: { problemId: 'm2_cournot_2', stepId: 'model_pick', isDecision: true },
          hint: 'Entscheidungsvariable identifizieren.',
          explain: 'Preisentscheidung bei homogenem Gut ohne Kapazitätsgrenzen führt zum Bertrand-Rahmen.'
        },
        {
          q: '[2. Decision] Welches Preisresultat folgt im Bertrand-Basismodell?',
          answer: ['P=MC', 'p=mc', 'preis gleich grenzkosten'],
          options: { problemId: 'm2_cournot_2', stepId: 'bertrand_result', dependsOn: 'model_pick' },
          hint: 'Unterbietungslogik bis kein profitables Unterbieten mehr möglich ist.',
          explain: 'Im Bertrand-Paradoxon fällt der Preis bis auf Grenzkosten.'
        },
        {
          q: '[3. Validation] Nenne einen strukturellen Grund, warum in der Realität oft P > MC beobachtet wird.',
          answer: ['Produktdifferenzierung', 'Kapazitätsbeschränkung', 'wiederholte interaktion'],
          options: { problemId: 'm2_cournot_2', role: 'VALIDATION' },
          hint: 'Suche eine Annahme, die das Bertrand-Paradoxon entschärft.',
          explain: 'Produktdifferenzierung, Kapazitätsgrenzen oder wiederholte Interaktion halten Preise über MC.'
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
    },
    {
      title: 'Adverse Selection vs. Moral Hazard',
      context: 'Versicherungsmarkt mit Risiko- und Verhaltensproblemen.',
      steps: [
        {
          q: '[1. Interpretation] Versteckter Risikotyp vor Vertragsabschluss: Adverse Selection oder Moral Hazard?',
          answer: ['Adverse Selection', 'adverse', 'negativauslese'],
          options: { problemId: 'm2_info_2', stepId: 'type_before', isDecision: true },
          hint: 'Zeitpunkt ist entscheidend: vor oder nach Vertrag?',
          explain: 'Verborgene Typen vor Vertragsschluss sind adverse Selektion.'
        },
        {
          q: '[2. Decision] Geringere Vorsicht nach Abschluss einer Vollkaskoversicherung ist welches Problem?',
          answer: ['Moral Hazard', 'moral', 'verhaltensrisiko'],
          options: { problemId: 'm2_info_2', stepId: 'type_after', dependsOn: 'type_before' },
          hint: 'Denke an hidden action nach Vertragsbeginn.',
          explain: 'Verhaltensanpassung nach Vertragsschluss ist Moral Hazard.'
        },
        {
          q: '[3. Validation] Welches Instrument passt primär zu Adverse Selection: Signaling oder Selbstbehalt?',
          answer: ['Signaling', 'screening', 'signaling/screening'],
          options: { problemId: 'm2_info_2', role: 'VALIDATION' },
          hint: 'Typtrennung statt Verhaltenssteuerung.',
          explain: 'Adverse Selection wird über Typtrennung (Signaling/Screening) adressiert, Selbstbehalte zielen eher auf Moral Hazard.'
        }
      ]
    }
  ],
  wohlfahrt: [
    {
      title: 'Wohlfahrtstheoreme: Effizienz vs. Verteilung',
      context: 'Prüfungsschema zu 1. und 2. Hauptsatz.',
      steps: [
        {
          q: '[1. Interpretation] Welcher Hauptsatz begründet: Wettbewerbsgleichgewicht ist Pareto-effizient?',
          answer: ['1', 'erster', '1. hauptsatz'],
          options: { problemId: 'm2_welfare_1', stepId: 'first_thm', isDecision: true },
          hint: 'Markt -> Effizienz.',
          explain: 'Der 1. Hauptsatz verknüpft Wettbewerbsgleichgewicht und Pareto-Effizienz.'
        },
        {
          q: '[2. Decision] Welcher Hauptsatz trennt Verteilung und Effizienz über Umverteilung + Markt?',
          answer: ['2', 'zweiter', '2. hauptsatz'],
          options: { problemId: 'm2_welfare_1', stepId: 'second_thm', dependsOn: 'first_thm' },
          hint: 'Geeignete Anfangsausstattung + Wettbewerb.',
          explain: 'Der 2. Hauptsatz erlaubt, jede Pareto-effiziente Allokation als Wettbewerbsgleichgewicht zu dezentralisieren.'
        },
        {
          q: '[3. Validation] Warum ist Pauschalumverteilung praktisch oft begrenzt? (ein Kernbegriff genügt)',
          answer: ['Informationsasymmetrie', 'beobachtbarkeit', 'information'],
          options: { problemId: 'm2_welfare_1', role: 'VALIDATION' },
          hint: 'Der Staat kennt Ausstattungen/Fähigkeiten nicht perfekt.',
          explain: 'Die Umverteilung via Pauschalsteuern scheitert oft an Informationsproblemen über individuelle Merkmale.'
        }
      ]
    }
  ],
  externa: [
    {
      title: 'Pigou-Steuer: Marktmenge vs. Sozialoptimum',
      context: 'Negative Externalität mit linearem Grenzschaden.',
      steps: [
        {
          q: '[1. Interpretation] Wie lautet die Grundbeziehung zwischen sozialen und privaten Grenzkosten?',
          answer: ['MSC=MPC+MEC', 'msc = mpc + mec', 'msc=mpc+mec'],
          options: { problemId: 'm2_external_1', stepId: 'msc_identity', isDecision: true },
          hint: 'Externer Grenzschaden addiert sich auf private Grenzkosten.',
          explain: 'Soziale Grenzkosten entsprechen privaten Grenzkosten plus externem Grenzschaden.'
        },
        {
          q: '[2. Decision] Welche Menge ist typischerweise größer bei negativen Externalitäten: Q_mkt oder Q_soc?',
          answer: ['Q_mkt', 'qmkt', 'marktmenge'],
          options: { problemId: 'm2_external_1', stepId: 'quantity_compare', dependsOn: 'msc_identity' },
          hint: 'Wenn externe Kosten nicht im Preis stecken, wird zu viel produziert.',
          explain: 'Ohne Internalisierung liegt Überproduktion vor: Q_mkt > Q_soc.'
        },
        {
          q: '[3. Validation] Wie wird die optimale Pigou-Steuer im Optimum definiert?',
          answer: ['t=MEC(Q*)', 't = mec(q*)', 'grenzschaden im optimum'],
          options: { problemId: 'm2_external_1', role: 'VALIDATION' },
          hint: 'Steuerhöhe entspricht marginalem externen Schaden bei Q*.',
          explain: 'Die effiziente Steuer setzt t gleich MEC im sozialen Optimum.'
        }
      ]
    }
  ],
  public_goods: [
    {
      title: 'Samuelson-Bedingung sicher anwenden',
      context: 'Öffentliche-Güter-Optimum und Aggregationsfalle.',
      steps: [
        {
          q: '[1. Interpretation] Werden bei öffentlichen Gütern individuelle Zahlungsbereitschaften horizontal oder vertikal aggregiert?',
          answer: ['vertikal', 'vertical'],
          options: { problemId: 'm2_public_1', stepId: 'agg_rule', isDecision: true },
          hint: 'Gleiche Menge, unterschiedliche Zahlungsbereitschaften.',
          explain: 'Bei öffentlichen Gütern addiert man Zahlungsbereitschaften vertikal.'
        },
        {
          q: '[2. Decision] Welche Effizienzbedingung gilt im Optimum?',
          answer: ['sum mrs = mc', 'ΣMRS=MC', 'samuelson'],
          options: { problemId: 'm2_public_1', stepId: 'samuelson', dependsOn: 'agg_rule' },
          hint: 'Summe individueller Grenzbewertungen gegen Grenzkosten.',
          explain: 'Die Samuelson-Bedingung lautet: Sum_i MRS_i = MC.'
        },
        {
          q: '[3. Validation] Warum unterversorgt der Markt öffentliche Güter typischerweise?',
          answer: ['free-riding', 'trittbrett', 'nicht-ausschließbarkeit'],
          options: { problemId: 'm2_public_1', role: 'VALIDATION' },
          hint: 'Individuelle Zahlungsanreize weichen vom kollektiven Nutzen ab.',
          explain: 'Nicht-Ausschließbarkeit erzeugt Trittbrettfahren, daher wird privat zu wenig bereitgestellt.'
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
