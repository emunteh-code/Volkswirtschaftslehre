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
    ,
    {
      title: 'Balanciertes Budget',
      context: 'Der Staat erhöht G und T jeweils um denselben Betrag bei c1 = 0,75.',
      steps: [
        { q: '[1. Decision] Warum sind Steuer- und Ausgabenimpuls nicht symmetrisch?', answer: ['weil steuern nur über konsum wirken', 'steuerimpuls läuft über c1', 'nur ein teil wird konsumiert'], options: { problemId: 'mk1_mult_2', stepId: 'asymmetry', isDecision: true }, hint: 'G wirkt direkt, T indirekt über Konsum.', explain: 'Ausgabenimpulse gehen 1:1 in die Nachfrage; Steuerimpulse nur über die marginale Konsumquote.' },
        { q: '[2. Execution] Wie groß ist der Steuermultiplikator bei c1 = 0,75?', answer: ['-3', '-3.0'], options: { problemId: 'mk1_mult_2', dependsOn: 'asymmetry' }, hint: '-c1/(1-c1).', explain: 'Bei c1=0,75 gilt -0,75/0,25 = -3.' },
        { q: '[3. Validation] Wenn ΔG = ΔT > 0, welches Vorzeichen hat ΔY?', answer: ['positiv', 'plus', 'y steigt'], options: { problemId: 'mk1_mult_2', role: 'VALIDATION' }, hint: 'Ausgabenwirkung übertrifft Steuerwirkung.', explain: 'Der Nettoeffekt bleibt positiv (balanciertes Budget mit positivem Multiplikatoreffekt).' }
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
    ,
    {
      title: 'IS-LM Graphdisziplin',
      context: 'Zentralbank senkt den Zielzins im (Y,i)-Diagramm.',
      steps: [
        { q: '[1. Decision] Welche Kurve verschiebt sich unmittelbar?', answer: ['lm', 'zinsregel', 'monetäre kurve'], options: { problemId: 'mk1_graph_islm', stepId: 'shift', isDecision: true }, hint: 'Zentralbankimpuls ist monetär.', explain: 'Die monetäre Kurve/Zinsregel verschiebt sich nach unten.' },
        { q: '[2. Execution] Was passiert mit dem Gleichgewichtspunkt (Y,i)?', answer: ['y steigt i sinkt', 'höheres y niedrigeres i', 'output steigt zins sinkt'], options: { problemId: 'mk1_graph_islm', stepId: 'endpoint', dependsOn: 'shift' }, hint: 'Neuer Schnittpunkt mit IS.', explain: 'Der neue Gleichgewichtspunkt liegt bei höherem Y und niedrigerem i.' },
        { q: '[3. Validation] Ist "IS verschiebt sich wegen Zinssenkung" korrekt?', answer: ['nein', 'falsch'], options: { problemId: 'mk1_graph_islm', role: 'VALIDATION' }, hint: 'IS verschiebt sich bei autonomen Nachfrageänderungen.', explain: 'Nein, bei reinem Zinsschock bewegt man sich entlang der IS zum neuen Punkt.' }
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
    ,
    {
      title: 'Policy-Mix-Falle',
      context: 'Fiskalexpansion bei steiler LM und alternativ bei horizontaler Zinsregel.',
      steps: [
        { q: '[1. Decision] In welchem Fall ist Crowding-Out typischerweise stärker?', answer: ['bei steiler lm', 'steile lm', 'lm steil'], options: { problemId: 'mk1_policy_2', stepId: 'steep_lm', isDecision: true }, hint: 'Dann reagiert der Zins stärker auf Y.', explain: 'Je steiler die LM, desto stärker steigt i bei gleichem IS-Impuls.' },
        { q: '[2. Execution] Welche Größe vermittelt den Dämpfungseffekt direkt?', answer: ['zins', 'i', 'nominalzins'], options: { problemId: 'mk1_policy_2', dependsOn: 'steep_lm' }, hint: 'Investitionen reagieren auf Finanzierungskosten.', explain: 'Der Zinsanstieg ist der unmittelbare Crowding-Out-Kanal.' },
        { q: '[3. Validation] Welche typische Kurzantwort ist falsch: "Fiskalpolitik wirkt immer gleich, weil IS gleich verschoben wird"?', answer: ['falsch', 'ist falsch', 'falsch weil lm wichtig ist'], options: { problemId: 'mk1_policy_2', role: 'VALIDATION' }, hint: 'Monetäre Reaktion gehört immer dazu.', explain: 'Die Endwirkung hängt von der monetären Bedingung ab, nicht nur von der IS-Verschiebung.' }
      ]
    }
    ,
    {
      title: 'Crowding-Out Regimevergleich',
      context: 'Gleicher Fiskalimpuls unter steiler LM vs. horizontaler Zinsregel.',
      steps: [
        { q: '[1. Decision] In welchem Fall ist der Zinsanstieg typischerweise stärker?', answer: ['steile lm', 'bei steiler lm'], options: { problemId: 'mk1_graph_policy', stepId: 'i_jump', isDecision: true }, hint: 'Geometrie der monetären Kurve.', explain: 'Bei steiler LM reagiert der Zins stärker auf denselben IS-Impuls.' },
        { q: '[2. Execution] In welchem Fall fällt der Outputzuwachs größer aus?', answer: ['horizontale zinsregel', 'zinsregel horizontal', 'flache lm'], options: { problemId: 'mk1_graph_policy', stepId: 'y_gain', dependsOn: 'i_jump' }, hint: 'Weniger Zinsanstieg = weniger Verdrängung.', explain: 'Unter horizontaler Zinsregel ist Crowding-Out schwächer, ΔY daher größer.' },
        { q: '[3. Validation] Ist "gleicher IS-Shift => gleiche Endwirkung" korrekt?', answer: ['nein', 'falsch'], options: { problemId: 'mk1_graph_policy', role: 'VALIDATION' }, hint: 'Vergleiche beide Endpunkte.', explain: 'Nein, die Endwirkung hängt von der monetären Kurvenform und damit von Δi ab.' }
      ]
    },
    {
      title: 'ELB Policy-Feasibility',
      context: 'Risikoprämie steigt stark; Zentralbank stößt bei i=0 an die effektive Zinsuntergrenze.',
      steps: [
        { q: '[1. Decision] Welche Größe begrenzt in diesem Szenario die zusätzliche geldpolitische Lockerung direkt?', answer: ['zinsuntergrenze', 'effective lower bound', 'elb', 'i=0'], options: { problemId: 'mk1_policy_elb_1', stepId: 'constraint', isDecision: true }, hint: 'Der Nominalzins kann nicht beliebig weiter sinken.', explain: 'An der ELB ist der Nominalzins als Instrument nach unten gebunden.' },
        { q: '[2. Execution] Wenn π^e nahe 0 liegt und i bereits 0 ist: Kann der Realzins noch stark weiter gesenkt werden?', answer: ['nein', 'kaum', 'nur sehr begrenzt'], options: { problemId: 'mk1_policy_elb_1', dependsOn: 'constraint' }, hint: 'r ≈ i − π^e.', explain: 'Bei i=0 und niedriger erwarteter Inflation ist zusätzlicher Realzins-Spielraum klein.' },
        { q: '[3. Validation] Welche Politikseite gewinnt in dieser Lage typischerweise an Bedeutung zur Stabilisierung?', answer: ['fiskalpolitik', 'fiskalischer impuls', 'staatliche nachfrage'], options: { problemId: 'mk1_policy_elb_1', role: 'VALIDATION' }, hint: 'Denke an Nachfragestützung, wenn Zinsinstrument limitiert ist.', explain: 'Wenn der geldpolitische Spielraum ausgereizt ist, wird fiskalische Stabilisierung relativ wichtiger.' }
      ]
    }
  ],
  realzins_fisher_erwartungen: [
    {
      title: 'Realzins und Inflationserwartungen',
      context: 'Der Nominalzins bleibt bei 5%, die erwartete Inflation fällt von 2% auf 0%.',
      steps: [
        { q: '[1. Decision] Welchen Realzins hatten Sie zunächst?', answer: ['3%', '3', '0.03', '0,03'], options: { problemId: 'mk1_real_1', stepId: 'r0', isDecision: true }, hint: 'r ≈ i − π^e.', explain: 'Anfangs gilt r ≈ 5% − 2% = 3%.' },
        { q: '[2. Execution] Wie hoch ist der neue Realzins?', answer: ['5%', '5', '0.05', '0,05'], options: { problemId: 'mk1_real_1', dependsOn: 'r0' }, hint: 'Nun ist π^e = 0.', explain: 'Der neue Realzins beträgt 5%.' },
        { q: '[3. Validation] Welche Wirkung hat das auf Investitionen?', answer: ['sie sinken', 'investitionen sinken'], options: { problemId: 'mk1_real_1', role: 'VALIDATION' }, hint: 'Höhere reale Finanzierungskosten bremsen Nachfrage.', explain: 'Steigende Realzinsen dämpfen Investitionen und Nachfrage.' }
      ]
    }
    ,
    {
      title: 'Doppelter Finanzierungsschock',
      context: 'Leitzins unverändert, Inflationserwartung sinkt, Risikoprämie steigt.',
      steps: [
        { q: '[1. Interpretation] Wie wirkt fallende erwartete Inflation auf den Realzins?', answer: ['realzins steigt', 'steigt'], options: { problemId: 'mk1_real_2', stepId: 'fisher', isDecision: true }, hint: 'r ≈ i − π^e.', explain: 'Sinkt π^e bei gegebenem i, steigt r.' },
        { q: '[2. Execution] Wie wirkt eine steigende Risikoprämie auf den Kreditzins?', answer: ['kreditzins steigt', 'steigt'], options: { problemId: 'mk1_real_2', dependsOn: 'fisher' }, hint: 'i_L = i + x.', explain: 'Ein höheres x erhöht direkt den Kreditzins.' },
        { q: '[3. Validation] Welche IS-Wirkung folgt aus beiden Effekten zusammen?', answer: ['is nach links', 'nach links', 'investitionen sinken'], options: { problemId: 'mk1_real_2', role: 'VALIDATION' }, hint: 'Höhere reale Finanzierungskosten bremsen Nachfrage.', explain: 'Beide Effekte dämpfen Investitionen und verschieben die IS-Kurve nach links.' }
      ]
    },
    {
      title: 'Krisentransmission über Spread',
      context: 'Ein TED-ähnlicher Spread steigt sprunghaft bei unverändertem Leitzins.',
      steps: [
        { q: '[1. Decision] Was signalisiert der höhere Spread im erweiterten IS-LM zuerst?', answer: ['höhere risikoprämie', 'kreditaufschlag steigt', 'x steigt'], options: { problemId: 'mk1_real_3', stepId: 'spread_signal', isDecision: true }, hint: 'Denke an den Keil zwischen Leitzins und Kreditzins.', explain: 'Der Spreadanstieg wird als höherer Risiko-/Liquiditätsaufschlag im Kreditkanal gelesen.' },
        { q: '[2. Execution] Wie reagiert bei gegebenem i der relevante Kreditzins i_L = i + x?', answer: ['er steigt', 'steigt'], options: { problemId: 'mk1_real_3', dependsOn: 'spread_signal' }, hint: 'x ist additiv auf dem Leitzins.', explain: 'Steigendes x erhöht den Kreditzins direkt.' },
        { q: '[3. Validation] Welche Makro-Kette ist korrekt?', answer: ['kreditzins hoch investitionen runter is nach links', 'investitionen sinken is nach links', 'rezessionsdruck'], options: { problemId: 'mk1_real_3', role: 'VALIDATION' }, hint: 'Verbinde Finanzierungskosten mit Nachfrage.', explain: 'Höhere Kreditkosten senken Investitionen; die IS-Kurve verschiebt sich nach links und der Output gerät unter Druck.' }
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
    ,
    {
      title: 'NAIRU-Trap',
      context: 'Eine Antwort nutzt nur das Niveau von u, nicht die Lücke zu u_n.',
      steps: [
        { q: '[1. Decision] Welche Lücke ist für die Inflationsdynamik entscheidend?', answer: ['u-u_n', 'arbeitslosenlücke', 'arbeitslosigkeitslücke'], options: { problemId: 'mk1_pc_2', stepId: 'gap_def', isDecision: true }, hint: 'Nicht u allein, sondern die Abweichung vom natürlichen Niveau.', explain: 'Die Phillips-Logik arbeitet mit der Lücke u-u_n.' },
        { q: '[2. Execution] Wenn u > u_n, was gilt für π_t − π_{t-1} (adaptive Erwartungen)?', answer: ['negativ', 'minus', 'inflation sinkt'], options: { problemId: 'mk1_pc_2', dependsOn: 'gap_def' }, hint: 'Minus α mal positive Lücke.', explain: 'Bei u>u_n fällt die Inflation relativ zur Vorperiode.' },
        { q: '[3. Validation] Warum ist die Aussage "u=6% bedeutet fallende Inflation" ohne u_n unvollständig?', answer: ['weil u_n fehlt', 'weil die lücke nicht bekannt ist', 'nairu fehlt'], options: { problemId: 'mk1_pc_2', role: 'VALIDATION' }, hint: '6% kann über oder unter u_n liegen.', explain: 'Ohne Referenz u_n ist die Richtung der Inflationsänderung nicht eindeutig.' }
      ]
    },
    {
      title: 'Erwartungsregime-Differenz',
      context: 'Vergleich: fest verankerte vs. adaptive Inflationserwartungen.',
      steps: [
        { q: '[1. Decision] In welchem Regime passt "u < u_n -> Inflation beschleunigt sich (π_t−π_{t-1} steigt)" besser?', answer: ['adaptive erwartungen', 'theta=1', 'nicht verankert'], options: { problemId: 'mk1_pc_3', stepId: 'regime', isDecision: true }, hint: 'Beschleunigungsform der Phillipskurve.', explain: 'Die Beschleunigungslogik passt zum adaptiven/persistenten Erwartungsregime.' },
        { q: '[2. Execution] In welchem Regime ist die Niveaubeziehung zur Ankerinflation zentraler?', answer: ['verankerte erwartungen', 'theta=0', 'anker'], options: { problemId: 'mk1_pc_3', dependsOn: 'regime' }, hint: 'Dann wird Inflation eher als Niveau um den Anker interpretiert.', explain: 'Bei verankerten Erwartungen ist die Level-Interpretation zentraler als die Beschleunigungsdiagnose.' },
        { q: '[3. Validation] Warum ist das Verwechseln der Regime ein Klausurfehler?', answer: ['weil man niveau und änderung verwechselt', 'falsche zielgröße', 'falsche interpretation der inflation'], options: { problemId: 'mk1_pc_3', role: 'VALIDATION' }, hint: 'Frage: spricht die Aufgabe über π oder über Δπ?', explain: 'Wer Regime verwechselt, diagnostiziert oft die falsche Zielgröße (Inflationsniveau statt Inflationsänderung oder umgekehrt).' }
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

BASE_STEP_PROBLEMS.realzins_risikopraemie_krisenkanal = BASE_STEP_PROBLEMS.realzins_fisher_erwartungen;

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS
});
