// ============================================================
// STEP PROBLEMS DATA — Makroökonomik I
// Benchmark-grade step problems for quick exam generation
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  makro_rahmen: [
    {
      title: 'Zeithorizonte zuordnen',
      context: 'Ordnen Sie Nachfrageboom, Inflationserwartungen und Produktivitätswachstum den richtigen Fristen zu.',
      steps: [
        { q: '[1. Interpretation] Welche Frist beschreibt einen Nachfrageboom bei trägen Preisen?', answer: ['kurze frist', 'kurzfrist'], options: { problemId: 'mk1_frame_1', stepId: 'short_run', isDecision: true }, hint: 'Denke an Gütermarkt und IS-LM.', explain: 'Nachfrageschocks bei trägen Preisen gehören in die kurze Frist.' },
        { q: '[2. Execution] Welche Frist ist für Lohn- und Preisreaktionen mit Phillipskurve zentral?', answer: ['mittlere frist', 'mittelfrist'], options: { problemId: 'mk1_frame_1', dependsOn: 'short_run' }, hint: 'Dort passen sich Löhne und Preise an.', explain: 'Die mittlere Frist wird über Arbeitsmarkt und Phillipskurve analysiert.' },
        { q: '[3. Validation] Wo ordnen Sie technologischen Fortschritt und Trendwachstum ein?', answer: ['lange frist', 'langfrist'], options: { problemId: 'mk1_frame_1', role: 'VALIDATION' }, hint: 'Kapital und Produktivität sind Langfristthemen.', explain: 'Produktivität und Trendwachstum sind langfristige Größen.' }
      ]
    }
  ],
  vgr: [
    {
      title: 'Reales Wachstum',
      context: 'Nominales BIP wächst um 7%, das Preisniveau um 2%.',
      steps: [
        { q: '[1. Decision] Welche Näherung nutzen Sie?', answer: ['nominales wachstum = reales wachstum + inflation', 'reales wachstum + inflation'], options: { problemId: 'mk1_vgr_1', stepId: 'rule', isDecision: true }, hint: 'Nominal = real + Preiseffekt.', explain: 'Für moderate Raten genügt die Wachstumsnäherung nominal = real + Inflation.' },
        { q: '[2. Execution] Wie hoch ist das reale Wachstum?', answer: ['5%', '5', '0.05', '0,05'], options: { problemId: 'mk1_vgr_1', dependsOn: 'rule' }, hint: 'Subtrahiere Inflation vom nominalen Wachstum.', explain: 'Das reale Wachstum beträgt 5%.' },
        { q: '[3. Validation] Warum ist die Quote kleiner als das nominale Wachstum?', answer: ['weil inflation enthalten ist', 'preiseffekt', 'preise steigen'], options: { problemId: 'mk1_vgr_1', role: 'VALIDATION' }, hint: 'Nominal enthält Preis- und Mengeneffekt.', explain: 'Ein Teil des nominalen Wachstums ist bloß Preissteigerung.' }
      ]
    }
  ],
  guetermarkt: [
    {
      title: 'Güternachfrage aufstellen',
      context: 'c0 = 120, c1 = 0.75, T = 100, I = 180, G = 140.',
      steps: [
        { q: '[1. Interpretation] Welche Konsumfunktion setzen Sie ein?', answer: ['120 + 0.75(y-100)', '120+0.75(y-100)'], options: { problemId: 'mk1_goods_1', stepId: 'consumption', isDecision: true }, hint: 'c0 + c1(Y-T).', explain: 'Die Konsumfunktion lautet C = 120 + 0,75(Y-100).' },
        { q: '[2. Execution] Wie lautet Z als Funktion von Y?', answer: ['365 + 0.75y', '365+0.75y', '0.75y + 365'], options: { problemId: 'mk1_goods_1', dependsOn: 'consumption' }, hint: 'Konsum + I + G zusammenfassen.', explain: 'Z = 365 + 0,75Y.' },
        { q: '[3. Validation] Verläuft die Z-Kurve flacher oder steiler als die 45°-Linie?', answer: ['flacher'], options: { problemId: 'mk1_goods_1', role: 'VALIDATION' }, hint: 'Vergleiche die Steigung 0,75 mit 1.', explain: 'Da c1 = 0,75 < 1, ist die Nachfragekurve flacher als die 45°-Linie.' }
      ]
    }
  ],
  multiplikator: [
    {
      title: 'Multiplikatoreffekt',
      context: 'c1 = 0.8 und G steigt um 40.',
      steps: [
        { q: '[1. Decision] Wie groß ist der Staatsausgabenmultiplikator?', answer: ['5', '5.0'], options: { problemId: 'mk1_mult_1', stepId: 'multiplier', isDecision: true }, hint: '1 / (1 - 0,8).', explain: 'Der Multiplikator beträgt 5.' },
        { q: '[2. Execution] Wie hoch ist die Änderung von Y?', answer: ['200'], options: { problemId: 'mk1_mult_1', dependsOn: 'multiplier' }, hint: 'Multiplikator mal Impuls.', explain: 'ΔY = 5 · 40 = 200.' },
        { q: '[3. Validation] Warum ist der Effekt größer als 40?', answer: ['weil folgerunden entstehen', 'weil zusätzliche einkommen wieder konsumiert werden', 'multiplikator'], options: { problemId: 'mk1_mult_1', role: 'VALIDATION' }, hint: 'Denke an weitere Konsumrunden.', explain: 'Die erste Ausgabenrunde erzeugt Einkommen, das wiederum teilweise konsumiert wird.' }
      ]
    }
  ],
  geldnachfrage: [
    {
      title: 'Geldmarktlogik',
      context: 'Einkommen steigt bei konstantem Preisniveau und unveränderter realer Geldmenge.',
      steps: [
        { q: '[1. Interpretation] Wie reagiert die reale Geldnachfrage?', answer: ['sie steigt', 'steigt'], options: { problemId: 'mk1_money_1', stepId: 'demand', isDecision: true }, hint: 'Mehr Einkommen bedeutet mehr Transaktionen.', explain: 'Mit höherem Einkommen steigt die Geldnachfrage.' },
        { q: '[2. Execution] Wie muss sich der Zins anpassen, um den Geldmarkt zu räumen?', answer: ['steigen', 'er steigt'], options: { problemId: 'mk1_money_1', dependsOn: 'demand' }, hint: 'Höherer Zins reduziert die Geldnachfrage.', explain: 'Der Zins steigt, um die zusätzliche Geldnachfrage zu dämpfen.' },
        { q: '[3. Validation] Was passiert gleichzeitig mit dem Anleihenpreis?', answer: ['er sinkt', 'sinkt'], options: { problemId: 'mk1_money_1', role: 'VALIDATION' }, hint: 'Preis und Zins laufen gegenläufig.', explain: 'Steigt der Zins, fällt der Anleihenpreis.' }
      ]
    }
  ],
  banken: [
    {
      title: 'Einlagenmultiplikator',
      context: 'Der Mindestreservesatz beträgt 0,1.',
      steps: [
        { q: '[1. Decision] Welche Formel nutzen Sie für den einfachen Einlagenmultiplikator?', answer: ['1/theta', '1 / theta', '1/0.1'], options: { problemId: 'mk1_bank_1', stepId: 'formula', isDecision: true }, hint: 'Im einfachen Modell ist m_D = 1/θ.', explain: 'Im Lehrbuchmodell gilt der Einlagenmultiplikator 1/θ.' },
        { q: '[2. Execution] Wie groß ist der Multiplikator?', answer: ['10'], options: { problemId: 'mk1_bank_1', dependsOn: 'formula' }, hint: '1 / 0,1.', explain: 'Der Einlagenmultiplikator beträgt 10.' },
        { q: '[3. Validation] Warum ist das nur ein vereinfachtes Obergrenzenmodell?', answer: ['weil kreditvergabe auch von kapital risiko und kreditnachfrage abhängt', 'weil es nur eine vereinfachung ist', 'weil banken nicht nur durch reserven begrenzt sind'], options: { problemId: 'mk1_bank_1', role: 'VALIDATION' }, hint: 'Denke an reale Beschränkungen des Bankensystems.', explain: 'In der Realität begrenzen auch Kapitalvorschriften, Risikoaufschläge und Kreditnachfrage die Geldschöpfung.' }
      ]
    }
  ],
  islm: [
    {
      title: 'IS-LM-Gleichgewicht',
      context: 'Die Zentralbank senkt den Zielzins bei unveränderter Fiskalpolitik.',
      steps: [
        { q: '[1. Interpretation] Welche Kurve bewegt sich im Diagramm?', answer: ['lm', 'zinsregel', 'monetäre kurve'], options: { problemId: 'mk1_islm_1', stepId: 'curve', isDecision: true }, hint: 'Die Zentralbank setzt den Zins.', explain: 'Die monetäre Kurve bzw. Zinsregel verschiebt sich nach unten.' },
        { q: '[2. Execution] Wie reagieren Investitionen und Output?', answer: ['steigen', 'beide steigen', 'investitionen steigen, output steigt'], options: { problemId: 'mk1_islm_1', dependsOn: 'curve' }, hint: 'Niedrigerer Zins stimuliert die Nachfrage.', explain: 'Investitionen steigen und damit auch der Output.' },
        { q: '[3. Validation] Warum bleibt das ein Kurzfristmodell?', answer: ['weil preisniveau gegeben ist', 'preise sind träge', 'preisniveau fix'], options: { problemId: 'mk1_islm_1', role: 'VALIDATION' }, hint: 'Arbeitsmarkt und Inflation kommen erst später dazu.', explain: 'IS-LM erklärt Nachfrage und Zins bei gegebenem Preisniveau.' }
      ]
    }
  ],
  politikmix: [
    {
      title: 'Crowding-Out',
      context: 'Eine Fiskalexpansion trifft auf eine steigende LM-Kurve.',
      steps: [
        { q: '[1. Interpretation] Was passiert zunächst mit der IS-Kurve?', answer: ['nach rechts', 'sie verschiebt sich nach rechts'], options: { problemId: 'mk1_policy_1', stepId: 'is_shift', isDecision: true }, hint: 'Mehr G erhöht die Nachfrage.', explain: 'Die IS-Kurve verschiebt sich nach rechts.' },
        { q: '[2. Execution] Wie reagiert der Zins im neuen Gleichgewicht?', answer: ['er steigt', 'steigt'], options: { problemId: 'mk1_policy_1', dependsOn: 'is_shift' }, hint: 'Bewege dich entlang der steigenden LM.', explain: 'Der Zins steigt im neuen Gleichgewicht.' },
        { q: '[3. Validation] Warum ist der Outputeffekt kleiner als im reinen Gütermarktmodell?', answer: ['weil investitionen verdrängt werden', 'crowding out', 'weil der höhere zins investitionen senkt'], options: { problemId: 'mk1_policy_1', role: 'VALIDATION' }, hint: 'Der Zins reagiert.', explain: 'Der höhere Zins verdrängt private Investitionen teilweise.' }
      ]
    }
  ],
  realzins: [
    {
      title: 'Realzins und Inflationserwartungen',
      context: 'Der Nominalzins bleibt bei 5%, die erwartete Inflation fällt von 2% auf 0%.',
      steps: [
        { q: '[1. Decision] Welchen Realzins hatten Sie zunächst?', answer: ['3%', '3', '0.03', '0,03'], options: { problemId: 'mk1_real_1', stepId: 'r0', isDecision: true }, hint: 'r ≈ i − π^e.', explain: 'Anfangs gilt r ≈ 5% − 2% = 3%.' },
        { q: '[2. Execution] Wie hoch ist der neue Realzins?', answer: ['5%', '5', '0.05', '0,05'], options: { problemId: 'mk1_real_1', dependsOn: 'r0' }, hint: 'Nun ist π^e = 0.', explain: 'Der neue Realzins beträgt 5%.' },
        { q: '[3. Validation] Welche Wirkung hat das auf Investitionen?', answer: ['sie sinken', 'investitionen sinken'], options: { problemId: 'mk1_real_1', role: 'VALIDATION' }, hint: 'Höhere reale Finanzierungskosten bremsen Nachfrage.', explain: 'Steigende Realzinsen dämpfen Investitionen und Nachfrage.' }
      ]
    }
  ],
  arbeitsmarkt: [
    {
      title: 'WS-PS-Gleichgewicht',
      context: 'WS: W/P = 1.1 − 2u, PS: W/P = 0.8.',
      steps: [
        { q: '[1. Decision] Welche Bedingung bestimmt die natürliche Arbeitslosigkeit?', answer: ['ws = ps', 'w/p ws = w/p ps', 'gleichsetzen'], options: { problemId: 'mk1_labour_1', stepId: 'condition', isDecision: true }, hint: 'Der Schnittpunkt von WS und PS ist entscheidend.', explain: 'Die natürliche Arbeitslosigkeit liegt dort, wo WS und PS gleich hoch sind.' },
        { q: '[2. Execution] Wie groß ist u_n?', answer: ['0.15', '15%', '0,15'], options: { problemId: 'mk1_labour_1', dependsOn: 'condition' }, hint: '1,1 − 2u = 0,8.', explain: '2u = 0,3, also u = 0,15 = 15%.' },
        { q: '[3. Validation] Was passiert mit u_n, wenn der Markup steigt?', answer: ['u_n steigt', 'steigt'], options: { problemId: 'mk1_labour_1', role: 'VALIDATION' }, hint: 'PS sinkt.', explain: 'Ein höherer Markup senkt PS und erhöht die natürliche Arbeitslosigkeit.' }
      ]
    }
  ],
  phillips: [
    {
      title: 'Inflationsdynamik',
      context: 'u = 4%, u_n = 5%, α = 0.8, adaptive Erwartungen.',
      steps: [
        { q: '[1. Interpretation] Wie ist das Vorzeichen von (u − u_n)?', answer: ['negativ', '-'], options: { problemId: 'mk1_pc_1', stepId: 'gap', isDecision: true }, hint: '4% liegt unter 5%.', explain: 'Die Arbeitslosenlücke ist negativ.' },
        { q: '[2. Execution] Was bedeutet das für π_t − π_{t-1}?', answer: ['positiv', '+', 'inflation steigt'], options: { problemId: 'mk1_pc_1', dependsOn: 'gap' }, hint: 'Minus mal negativ ergibt positiv.', explain: 'Die Inflationsänderung ist positiv; Inflation steigt.' },
        { q: '[3. Validation] Welche Rolle spielt u_n in dieser Logik?', answer: ['es ist die quote stabiler inflation', 'nairu', 'bei u_n bleibt inflation konstant'], options: { problemId: 'mk1_pc_1', role: 'VALIDATION' }, hint: 'Dort beschleunigt sich Inflation nicht.', explain: 'Bei u = u_n bleibt Inflation unter adaptiven Erwartungen konstant.' }
      ]
    }
  ],
  islmpc: [
    {
      title: 'Mittelfristige Rückkehr',
      context: 'Eine dauerhafte Fiskalexpansion hebt den Output zunächst über Y_n.',
      steps: [
        { q: '[1. Interpretation] Was passiert mit der Arbeitslosigkeit relativ zu u_n?', answer: ['sie fällt unter u_n', 'unter u_n', 'arbeitslosigkeit sinkt unter u_n'], options: { problemId: 'mk1_islmpc_1', stepId: 'labour_gap', isDecision: true }, hint: 'Nutze Okun qualitativ.', explain: 'Bei Output über Y_n liegt die Arbeitslosigkeit unter u_n.' },
        { q: '[2. Execution] Wie reagiert die Inflation?', answer: ['sie steigt', 'inflation steigt'], options: { problemId: 'mk1_islmpc_1', dependsOn: 'labour_gap' }, hint: 'Phillipskurve.', explain: 'Die Inflation steigt, weil der Arbeitsmarkt zu angespannt ist.' },
        { q: '[3. Validation] Was macht die Zentralbank in der Zinsregel?', answer: ['sie erhöht den realzins', 'realzins steigt', 'zins steigt'], options: { problemId: 'mk1_islmpc_1', role: 'VALIDATION' }, hint: 'Sie reagiert auf höhere Inflation.', explain: 'Die Zentralbank erhöht den Realzins und bremst so die Nachfrage zurück.' }
      ]
    }
  ],
  erwartungen: [
    {
      title: 'Temporär vs. permanent',
      context: 'Die Regierung kündigt eine nur einjährige Steuersenkung an.',
      steps: [
        { q: '[1. Interpretation] Ändert sich das erwartete Lebenseinkommen stark oder schwach?', answer: ['schwach', 'nur schwach'], options: { problemId: 'mk1_exp_1', stepId: 'income', isDecision: true }, hint: 'Ein Jahr ist nur ein kleiner Teil des Lebenszyklus.', explain: 'Das erwartete Lebenseinkommen steigt nur schwach.' },
        { q: '[2. Execution] Wie reagiert der Konsum im Vergleich zu einer permanenten Senkung?', answer: ['schwächer', 'deutlich schwächer'], options: { problemId: 'mk1_exp_1', dependsOn: 'income' }, hint: 'Permanente Politik verschiebt Erwartungen stärker.', explain: 'Der Konsum reagiert deutlich schwächer als bei permanenter Steuerentlastung.' },
        { q: '[3. Validation] Warum ist Glaubwürdigkeit hier wichtig?', answer: ['weil erwartungen nur reagieren wenn die ankündigung geglaubt wird', 'glaubwürdigkeit', 'weil nur glaubwürdige politik erwartungen ändert'], options: { problemId: 'mk1_exp_1', role: 'VALIDATION' }, hint: 'Ankündigung allein reicht nicht.', explain: 'Nur glaubwürdige Politik verändert Erwartungen und damit heutiges Verhalten.' }
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
