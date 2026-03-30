// ============================================================
// STEP PROBLEMS DATA — Makroökonomik II
// Quick-exam prompts derived from the provided exercises/tutorials
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  wechselkurs: [
    {
      title: 'KKP mit Mark und Schilling',
      context: 'Währungsnotation und Kaufkraftparität',
      steps: [
        {
          q: 'Wie lautet aus Sicht von Land A die Mengennotierung, wenn 1 Schilling = 3 Mark kostet?',
          answer: ['1/3', '0.333', '0,333', 'einsdrittel'],
          hint: 'Mengennotierung = Fremdwährung pro Inlandswährung.',
          explain: 'Wenn 1 Schilling 3 Mark kostet, dann gilt aus Sicht von Land A: 1 Mark = 1/3 Schilling.',
          traps: [{ pattern: '3', msg: '3 ist die Preisnotierung (Mark pro Schilling), nicht die Mengennotierung.' }],
        },
        {
          q: 'Welche Formel liefert den PPP-Kurs 2018 bei π_A = 10% und π_B = 20%?',
          answer: ['e2018=e2017*(1+πb)/(1+πa)', '1.2/1.1', '(1+πb)/(1+πa)'],
          hint: 'In Mengennotierung wächst E mit ausländischer und sinkt mit inländischer Inflation.',
          explain: 'Unter absoluter Kaufkraftparität in Mengennotierung gilt: E_2018 = E_2017 · (1+π_B)/(1+π_A).',
          traps: [{ pattern: '(1+πa)/(1+πb)', msg: 'Die Reihenfolge ist vertauscht: in Mengennotierung steht ausländische Inflation im Zähler.' }],
        },
        {
          q: 'Wie groß ist der PPP-Kurs 2018 numerisch?',
          answer: ['0.364', '0,364', '0.3636'],
          hint: 'Rechne (1/3)·1,2/1,1.',
          explain: 'E_2018 = (1/3)·1,2/1,1 ≈ 0,364 Schilling pro Mark.',
          traps: [],
        },
        {
          q: 'Wenn der tatsächliche Kurs 0,4 Schilling pro Mark beträgt: Ist die Mark real auf- oder abgewertet?',
          answer: ['aufgewertet', 'realaufgewertet', 'überbewertet', 'ueberbewertet'],
          hint: 'Vergleiche tatsächlichen Kurs mit dem PPP-Kurs.',
          explain: '0,4 liegt über 0,364. Die Mark kauft also mehr Schilling als im PPP-Fall und ist real aufgewertet.',
          traps: [{ pattern: 'abgewertet', msg: 'Der tatsächliche Mengenkurs liegt über dem KKP-Kurs, nicht darunter.' }],
        },
      ],
    },
  ],

  zinsparitaet: [
    {
      title: 'Hypothekenkredit Schweiz vs. Deutschland',
      context: 'Zinsdifferenz, Inflation und Erwartungslogik',
      steps: [
        {
          q: 'Wie groß ist der Nominalzinsunterschied zwischen Deutschland (8%) und der Schweiz (5%)?',
          answer: ['3', '3%', '3prozentpunkte'],
          hint: 'Einfach 8 minus 5.',
          explain: 'Der Nominalzinsunterschied beträgt 3 Prozentpunkte.',
          traps: [],
        },
        {
          q: 'Wenn die Realzinsen gleich sind: In welchem Land ist die erwartete Inflation höher?',
          answer: ['deutschland', 'in deutschland', 'de'],
          hint: 'Nach Fisher: höherer Nominalzins bei gleichem Realzins bedeutet höhere Inflationserwartung.',
          explain: 'Bei gleichem Realzins muss Deutschland die höhere erwartete Inflation haben, weil dort der Nominalzins höher ist.',
          traps: [{ pattern: 'schweiz', msg: 'Der niedrigere Schweizer Nominalzins spricht bei gleichem Realzins gerade gegen höhere Inflation in der Schweiz.' }],
        },
        {
          q: 'Welche Richtung impliziert die Zinsparität für die deutsche Währung gegenüber dem Franken?',
          answer: ['abwertung', 'abwerten', 'deutschewährungabwerten', 'markabwerten'],
          hint: 'Ein höherer Zinssatz wird durch erwartete Wechselkursverluste kompensiert.',
          explain: 'Unter Zinsparität wird der deutsche Zinsvorteil durch eine erwartete Abwertung der deutschen Währung kompensiert.',
          traps: [{ pattern: 'aufwertung', msg: 'Der Zinsvorteil darf kein Gratisgewinn sein; er wird durch erwartete Abwertung kompensiert.' }],
        },
      ],
    },
  ],

  zahlungsbilanz: [
    {
      title: 'Leistungs- und Kapitalbilanz',
      context: 'Leistungs- und Kapitalbilanz',
      steps: [
        {
          q: 'Exportiert Deutschland Autozubehör nach China und importiert für denselben Erlös Solarzellen: Wie groß ist ΔNX?',
          answer: ['0', 'null'],
          hint: 'Exporte und Importe steigen um denselben Betrag.',
          explain: 'Der Nettoexporteffekt ist null, weil sich Export- und Importwert gerade aufheben.',
          traps: [],
        },
        {
          q: 'Wie nennt man es in der Kapitalbilanz, wenn der Exporterlös an der chinesischen Börse angelegt wird?',
          answer: ['kapitalexport', 'kapitalabfluss', 'capitaloutflow', 'auslandsanlage'],
          hint: 'Deutschland erwirbt damit Auslandsvermögen.',
          explain: 'Der Kauf chinesischer Wertpapiere ist ein Kapitalexport bzw. Kapitalabfluss.',
          traps: [],
        },
        {
          q: 'Kann ein Land trotz gleicher Exporte und Importe eine von null abweichende Leistungsbilanz haben? (ja/nein)',
          answer: ['ja', 'yes'],
          hint: 'Denk an Primär- und Sekundäreinkommen.',
          explain: 'Ja. Die Leistungsbilanz umfasst zusätzlich Primär- und Sekundäreinkommen, nicht nur den Warenhandel.',
          traps: [{ pattern: 'nein', msg: 'Die Leistungsbilanz ist breiter als Exporte minus Importe.' }],
        },
      ],
    },
  ],

  kaufkraftparitaet: [
    {
      title: 'Big-Mac-Index',
      context: 'PPP und Big-Mac-Index',
      steps: [
        {
          q: 'Wie groß ist der implizite PPP-Kurs zwischen GBP und USD, wenn ein Big Mac 4,59 GBP bzw. 5,79 USD kostet?',
          answer: ['1.261', '1,261', '1.26', '1,26'],
          hint: 'Teile den US-Preis durch den UK-Preis.',
          explain: 'E_PPP = 5,79 / 4,59 ≈ 1,261 USD pro GBP.',
          traps: [],
        },
        {
          q: 'Der tatsächliche Kurs ist 1,33 USD pro GBP. Ist der US-Dollar gegenüber dem Pfund unter- oder überbewertet?',
          answer: ['unterbewertet', 'usdunterbewertet', 'dollarunterbewertet'],
          hint: 'Der tatsächliche Kurs liegt über dem impliziten PPP-Kurs.',
          explain: 'Der Dollar wirkt gegenüber dem Pfund leicht unterbewertet; das Pfund ist relativ stark.',
          traps: [{ pattern: 'überbewertet', msg: 'Ein höherer Marktwert des GBP bedeutet hier, dass eher das Pfund relativ teuer ist.' }],
        },
        {
          q: 'Nenne einen Grund, warum der Big-Mac-Index systematisch vom Marktwechselkurs abweichen kann.',
          answer: ['nichthandelbar', 'dienstleistung', 'miete', 'lohn', 'steuer', 'produktivität'],
          hint: 'Der Big Mac enthält mehr als nur handelbare Vorprodukte.',
          explain: 'Typische Gründe sind nicht handelbare Komponenten wie lokale Löhne/Mieten oder Unterschiede bei Steuern und Produktivität.',
          traps: [],
        },
      ],
    },
  ],

  offene_is: [
    {
      title: 'Offene Volkswirtschaft und Fiskalpolitik',
      context: 'Offene Nachfrage und Multiplikator',
      steps: [
        {
          q: 'Was passiert mit der Produktion, wenn in den USA die Steuern sinken und alle übrigen exogenen Größen konstant bleiben?',
          answer: ['steigt', 'höher', 'nimmtzu'],
          hint: 'Niedrigere Steuern erhöhen das verfügbare Einkommen.',
          explain: 'Die Produktion steigt, weil der private Konsum und damit die gesamtwirtschaftliche Nachfrage zunimmt.',
          traps: [],
        },
        {
          q: 'Was passiert dabei typischerweise mit der Handelsbilanz?',
          answer: ['verschlechtert', 'defizitsteigt', 'schlechter'],
          hint: 'Höheres Einkommen erhöht auch die Importe.',
          explain: 'Die Handelsbilanz verschlechtert sich, weil mit steigendem Einkommen auch die Importe zunehmen.',
          traps: [],
        },
        {
          q: 'Wie lautet der Nenner des offenen Staatsausgabenmultiplikators in Y = (...) / Nenner?',
          answer: ['1-c1-b1+q1', '1-c_1-b_1+q_1', '1-c1-b1+q_1'],
          hint: 'Das Importleck q1 tritt positiv im Nenner auf.',
          explain: 'Für die offene Volkswirtschaft lautet der Nenner 1 - c1 - b1 + q1.',
          traps: [{ pattern: '1-c1-b1', msg: 'Das wäre der Nenner ohne Importleck, also eher die geschlossene Volkswirtschaft.' }],
        },
      ],
    },
  ],

  marshall_lerner: [
    {
      title: 'Marshall-Lerner und J-Kurve',
      context: 'Abwertung, J-Kurve und Elastizitäten',
      steps: [
        {
          q: 'Wie lautet die Marshall-Lerner-Bedingung?',
          answer: ['|ηx|+|ηm|>1', '|etax|+|etam|>1', '>1'],
          hint: 'Addiere die Betragswerte der Preiselastizitäten von Exporten und Importen.',
          explain: 'Die Bedingung lautet |η_X| + |η_M| > 1.',
          traps: [],
        },
        {
          q: 'Was passiert bei erfüllter Marshall-Lerner-Bedingung langfristig mit NX nach einer Abwertung?',
          answer: ['steigt', 'verbessert', 'nimmtzu'],
          hint: 'Dann dominiert der Mengeneffekt.',
          explain: 'Langfristig steigen die Nettoexporte bzw. die Handelsbilanz verbessert sich.',
          traps: [],
        },
        {
          q: 'Wie verläuft die J-Kurve kurzfristig direkt nach einer Abwertung?',
          answer: ['verschlechtert', 'zunächst schlechter', 'erst schlechter'],
          hint: 'Verträge und Mengen reagieren träge.',
          explain: 'Kurzfristig verschlechtert sich die Handelsbilanz zunächst, bevor sie sich später verbessern kann.',
          traps: [],
        },
      ],
    },
  ],

  mundell_fleming: [
    {
      title: 'Feste Parität und Trilemma',
      context: 'Feste Parität und Trilemma',
      steps: [
        {
          q: 'Bei 50% Wahrscheinlichkeit einer 10%-Abwertung: Wie hoch ist die erwartete Abwertungsrate?',
          answer: ['5', '5%', '5prozent'],
          hint: 'Bildet den Erwartungswert aus Wahrscheinlichkeit mal Ereignis.',
          explain: '0,5 · 10% = 5%.',
          traps: [],
        },
        {
          q: 'Um wie viele Prozentpunkte muss der Zins erhöht werden, um die Parität zu halten?',
          answer: ['5', '5%', '5prozentpunkte'],
          hint: 'Nach UIP muss der Zinsaufschlag die erwartete Abwertung kompensieren.',
          explain: 'Die Zentralbank muss den Zins um 5 Prozentpunkte anheben.',
          traps: [],
        },
        {
          q: 'Kann ein Land gleichzeitig festen Wechselkurs, freien Kapitalverkehr und autonome Geldpolitik haben? (ja/nein)',
          answer: ['nein', 'no'],
          hint: 'Das ist genau die Kernaussage des Trilemmas.',
          explain: 'Nein. Das Trilemma erlaubt immer nur zwei dieser drei Ziele gleichzeitig.',
          traps: [{ pattern: 'ja', msg: 'Das widerspricht direkt dem Trilemma der Geld- und Währungspolitik.' }],
        },
      ],
    },
  ],

  barro_gordon: [
    {
      title: 'Inflationsbias im Barro-Gordon-Modell',
      context: 'Inflationsbias und Zeitinkonsistenz',
      steps: [
        {
          q: 'Bei L = 1,5π² + u² und π = πe − (u − 0,05), πe = 0: Welche Inflationsrate wählt die Zentralbank?',
          answer: ['0.02', '0,02', '2', '2%'],
          hint: 'Setze u = 0,05 − π in die Verlustfunktion ein und minimiere nach π.',
          explain: 'Es ergibt sich π = 0,02, also 2%.',
          traps: [],
        },
        {
          q: 'Welche Arbeitslosenquote folgt daraus?',
          answer: ['0.03', '0,03', '3', '3%'],
          hint: 'Nutze u = 0,05 − π.',
          explain: 'u = 0,05 − 0,02 = 0,03, also 3%.',
          traps: [],
        },
        {
          q: 'Was bleibt ohne glaubwürdiges Commitment bei rationalen Erwartungen übrig?',
          answer: ['inflationsbias', 'höhere inflation', 'naturalerbeitslosigkeit', 'natürlichearbeitslosigkeit'],
          hint: 'Denke an Zeitinkonsistenz: Inflation ja, dauerhafte Beschäftigungsgewinne nein.',
          explain: 'Ohne Commitment entsteht ein Inflationsbias: höhere Inflation, während die Arbeitslosigkeit zur natürlichen Rate zurückkehrt.',
          traps: [],
        },
      ],
    },
  ],

  budgetrestriktion: [
    {
      title: 'Einmalige Steuersenkung und Schuldenrückzahlung',
      context: 'Staatsschuld und Rückzahlungspfad',
      steps: [
        {
          q: 'Wie hoch ist die neu entstandene Staatsschuld direkt nach der einmaligen Steuersenkung von 1000 auf 900?',
          answer: ['100'],
          hint: 'Das Defizit entspricht genau der Steuersenkung.',
          explain: 'Die einmalige Steuersenkung erzeugt ein Defizit und damit eine Schuld von 100.',
          traps: [],
        },
        {
          q: 'Wie hoch ist die Zusatzsteuer in t=4 bei r = 10%?',
          answer: ['133.1', '133,1'],
          hint: 'Verzinse 100 drei Perioden lang mit 1,1.',
          explain: '100 · 1,1³ = 133,1.',
          traps: [],
        },
        {
          q: 'Wie hoch ist die Zusatzsteuer in t=10?',
          answer: ['235.79', '235,79', '235.8', '235,8'],
          hint: 'Verzinse 100 neun Perioden lang.',
          explain: '100 · 1,1⁹ ≈ 235,79.',
          traps: [],
        },
      ],
    },
  ],

  taylor_regel: [
    {
      title: 'Taylor-Regel und Taylor-Prinzip',
      context: 'Taylor-Regel und Realzins',
      steps: [
        {
          q: 'Wenn π = π* gilt und die Regel nur i_t = i* + α(π_t − π*) lautet: Bleibt der Zins unverändert, sinkt er oder steigt er?',
          answer: ['unverändert', 'gleich', 'bleibtgleich'],
          hint: 'Dann ist der gesamte Reaktionsterm null.',
          explain: 'Der Zins bleibt unverändert, weil die Inflationslücke null ist.',
          traps: [],
        },
        {
          q: 'Bei der erweiterten Taylor-Regel mit −β(u_t−u_n): Was passiert bei u_t > u_n mit dem Zins?',
          answer: ['sinkt', 'senkt', 'niedriger'],
          hint: 'Der zusätzliche Term ist dann negativ.',
          explain: 'Der Zins sinkt, weil die positive Arbeitslosigkeitslücke mit negativem Vorzeichen in die Regel eingeht.',
          traps: [],
        },
        {
          q: 'Was muss nach dem Taylor-Prinzip mit dem Realzins bei höherer Inflation passieren?',
          answer: ['steigen', 'höher', 'realzinssteigt'],
          hint: 'Der Nominalzins muss stärker als eins zu eins reagieren.',
          explain: 'Der Realzins muss steigen; nur dann wirkt Geldpolitik inflationsdämpfend.',
          traps: [],
        },
      ],
    },
  ],

  aggregierte_pf: [
    {
      title: 'Produktionsfunktion und Skalenerträge',
      context: 'Produktionsfunktion und Skalenerträge',
      steps: [
        {
          q: 'Wie groß ist Y bei Y = K^0,5 N^0,5, K = 21 und N = 7?',
          answer: ['12.12', '12,12', '12.1'],
          hint: 'Das ist die Wurzel aus 147.',
          explain: 'Y = √147 ≈ 12,12.',
          traps: [],
        },
        {
          q: 'Wie groß ist die Kapitalintensität K/N?',
          answer: ['3'],
          hint: 'Teile 21 durch 7.',
          explain: 'K/N = 21/7 = 3.',
          traps: [],
        },
        {
          q: 'Wenn beide Faktoren verdreifacht werden: Mit welchem Faktor steigt Y?',
          answer: ['3', 'dreifach', 'verdreifacht'],
          hint: 'Bei Cobb-Douglas mit Exponenten 0,5 und 0,5 addieren sich die Exponenten zu 1.',
          explain: 'Die Produktion steigt genau um den Faktor 3. Das sind konstante Skalenerträge.',
          traps: [],
        },
      ],
    },
  ],

  solow_basis: [
    {
      title: 'Solow-Grundmodell',
      context: 'Solow-Dynamik und Sparquote',
      steps: [
        {
          q: 'Was passiert mit der Kapitalintensität k* nach einem dauerhaften Anstieg der Sparquote?',
          answer: ['steigt', 'höher', 'nimmtzu'],
          hint: 'Mehr Sparen bedeutet mehr Investition je Kopf.',
          explain: 'Die Kapitalintensität steigt, weil die sf(k)-Kurve nach oben rückt.',
          traps: [],
        },
        {
          q: 'Wie hoch ist die langfristige Wachstumsrate von Y/N im Solow-Modell ohne technischen Fortschritt?',
          answer: ['0', 'null', '0%'],
          hint: 'Ohne technischen Fortschritt gibt es im Steady State kein dauerhaftes Wachstum pro Kopf.',
          explain: 'Langfristig ist die Wachstumsrate von Y/N gleich null.',
          traps: [],
        },
        {
          q: 'Führt mehr Sparen immer zu höherem langfristigem Konsum pro Kopf? (ja/nein)',
          answer: ['nein', 'no'],
          hint: 'Denk an die Goldene Regel.',
          explain: 'Nein. Oberhalb der Goldenen Regel kann eine höhere Sparquote den langfristigen Konsum pro Kopf senken.',
          traps: [{ pattern: 'ja', msg: 'Der langfristige Konsum steigt nur bis zur Goldenen Regel sicher an.' }],
        },
      ],
    },
  ],

  tech_fortschritt: [
    {
      title: 'Solow mit technischem Fortschritt',
      context: 'Technischer Fortschritt im Solow-Modell',
      steps: [
        {
          q: 'Wie groß ist k~* bei α = 0,4, s = 11%, g_N = 3%, g_A = 1%, δ = 7%?',
          answer: ['1'],
          hint: 'Hier gilt zufällig s = g_N + g_A + δ.',
          explain: 'k~* = (0,11 / 0,11)^(1/0,6) = 1.',
          traps: [],
        },
        {
          q: 'Wie groß ist der Konsum pro Arbeitseffizienzeinheit c~*?',
          answer: ['0.89', '0,89'],
          hint: 'c~* = (1−s) y~* und y~* = 1.',
          explain: 'c~* = 0,89 · 1 = 0,89.',
          traps: [],
        },
        {
          q: 'Wie hoch ist die Goldene-Regel-Sparquote bei Cobb-Douglas mit α = 0,4?',
          answer: ['0.4', '0,4', '40', '40%'],
          hint: 'Bei Cobb-Douglas gilt s_gold = α.',
          explain: 'Die Goldene-Regel-Sparquote beträgt 0,4 bzw. 40%.',
          traps: [],
        },
      ],
    },
  ],
};

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS
});
