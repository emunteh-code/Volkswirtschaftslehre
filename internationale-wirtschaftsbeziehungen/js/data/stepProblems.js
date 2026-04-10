import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  handelsfakten: [
    {
      title: 'Modell richtig zuordnen',
      context: 'Zwei ähnliche Industrieländer exportieren und importieren gleichzeitig Autos.',
      steps: [
        {
          q: '[1. Interpretation] Welche Handelsform liegt vor?',
          answer: ['intraindustrieller handel', 'intra industrieller handel'],
          options: { problemId: 'iwb_hf_1', stepId: 'trade_type', isDecision: true },
          hint: 'Die Güter sind ähnlich, nicht vollkommen verschieden.',
          explain: 'Gleichzeitiger Export und Import ähnlicher Güter ist intraindustrieller Handel.'
        },
        {
          q: '[2. Decision] Welches Modell erklärt den Fall am besten?',
          answer: ['krugman', 'neue handelstheorie', 'skalenerträge'],
          options: { problemId: 'iwb_hf_1', stepId: 'model_pick', dependsOn: 'trade_type' },
          hint: 'Denk an Produktvielfalt und Skalenerträge.',
          explain: 'Ähnliche Länder handeln ähnliche Güter vor allem wegen Skalenerträgen und Produktdifferenzierung.'
        }
      ]
    }
  ],
  ricardo: [
    {
      title: 'Komparativer Vorteil',
      context: 'Home: 2 h für Wein, 4 h für Tuch. Foreign: 6 h für Wein, 3 h für Tuch.',
      steps: [
        {
          q: '[1. Execution] Wie hoch sind die Opportunitätskosten von Wein in Home?',
          answer: ['0.5', '0,5', '1/2'],
          options: { problemId: 'iwb_ric_1', stepId: 'ok_home' },
          hint: 'Arbeitszeit für Wein durch Arbeitszeit für Tuch teilen.',
          explain: '2/4 = 0,5 Tuch.'
        },
        {
          q: '[2. Decision] Wer exportiert Wein?',
          answer: ['home', 'inland'],
          options: { problemId: 'iwb_ric_1', stepId: 'exporter', dependsOn: 'ok_home' },
          hint: 'Vergleiche 0,5 mit den Opportunitätskosten im Ausland.',
          explain: 'Foreign hat 6/3 = 2. Home hat die geringeren Opportunitätskosten und exportiert Wein.'
        }
      ]
    }
  ],
  heckscher_ohlin: [
    {
      title: 'Faktorreichlichkeit lesen',
      context: 'Home ist kapitalreich, Foreign arbeitsreich. Maschinen sind kapitalintensiv.',
      steps: [
        {
          q: '[1. Interpretation] Welches Land exportiert Maschinen?',
          answer: ['home', 'inland'],
          options: { problemId: 'iwb_ho_1', stepId: 'export_machine', isDecision: true },
          hint: 'Kapitalreiches Land exportiert das kapitalintensive Gut.',
          explain: 'Nach H-O exportiert Home Maschinen.'
        },
        {
          q: '[2. Decision] Wer profitiert im kapitalreichen Land relativ stärker vom Handel?',
          answer: ['kapitalbesitzer', 'kapital', 'der faktor kapital'],
          options: { problemId: 'iwb_ho_1', stepId: 'ss_gain', dependsOn: 'export_machine' },
          hint: 'Stolper-Samuelson auf den reichlichen Faktor anwenden.',
          explain: 'Der reichlich vorhandene Faktor Kapital gewinnt real.'
        }
      ]
    }
  ],
  verteilung_handel: [
    {
      title: 'Gewinner und Verlierer des Handels',
      context: 'Home ist kapitalreich und liberalisiert den Handel im kapitalintensiven Sektor.',
      steps: [
        {
          q: '[1. Interpretation] Welcher Faktor gewinnt relativ?',
          answer: ['kapital', 'kapitalbesitzer', 'der faktor kapital'],
          options: { problemId: 'iwb_dist_1', stepId: 'winner', isDecision: true },
          hint: 'Stolper-Samuelson auf den reichlichen Faktor anwenden.',
          explain: 'Im kapitalreichen Land profitiert Kapital real relativ stärker.'
        },
        {
          q: '[2. Decision] Warum reicht die Aussage „das Land gewinnt“ nicht aus?',
          answer: ['weil es inländische verlierer gibt', 'verlierer', 'verteilung', 'weil arbeit verlieren kann'],
          options: { problemId: 'iwb_dist_1', stepId: 'distribution', dependsOn: 'winner' },
          hint: 'Gesamtwohlfahrt und Faktorverteilung sind verschiedene Ebenen.',
          explain: 'Gesamtgewinne schließen reale Verluste des knappen Faktors nicht aus.'
        }
      ]
    }
  ],
  krugman: [
    {
      title: 'Skalenerträge erkennen',
      context: 'Ein Sektor hat hohe Fixkosten, differenzierte Produkte und großen Binnenmarkt.',
      steps: [
        {
          q: '[1. Interpretation] Welche Handelsform ist besonders wahrscheinlich?',
          answer: ['intraindustrieller handel', 'intra industrieller handel'],
          options: { problemId: 'iwb_kr_1', stepId: 'iit', isDecision: true },
          hint: 'Ähnliche Länder handeln ähnliche Varianten.',
          explain: 'Produktdifferenzierung und Skalenerträge führen typischerweise zu intraindustriellem Handel.'
        },
        {
          q: '[2. Decision] Was passiert bei größerem Markt typischerweise mit den Durchschnittskosten?',
          answer: ['sie sinken', 'sinken', 'fallen'],
          options: { problemId: 'iwb_kr_1', stepId: 'ac', dependsOn: 'iit' },
          hint: 'Fixkosten verteilen sich auf mehr Stücke.',
          explain: 'Mit höherem Output sinken die Durchschnittskosten.'
        }
      ]
    }
  ],
  gravitation: [
    {
      title: 'Gravitationslogik erkennen',
      context: 'Zwei große Nachbarländer handeln intensiv miteinander, obwohl ihre Faktorstrukturen ähnlich sind.',
      steps: [
        {
          q: '[1. Interpretation] Welcher erste empirische Zugriff passt hier?',
          answer: ['gravitation', 'gravitationsgleichung', 'gravity'],
          options: { problemId: 'iwb_grav_1', stepId: 'gravity', isDecision: true },
          hint: 'Denk an Marktgröße und Distanz statt sofort an Wohlfahrtsdiagramme.',
          explain: 'Das ist ein klassischer Gravitationsfall: große Länder handeln viel, Distanz bremst.'
        },
        {
          q: '[2. Decision] Was bedeutet Distanz ökonomisch außer Kilometern?',
          answer: ['transportkosten', 'informationskosten', 'institutionelle kosten', 'handelskosten'],
          options: { problemId: 'iwb_grav_1', stepId: 'distance', dependsOn: 'gravity' },
          hint: 'Distanz ist breiter als reine Geografie.',
          explain: 'Distanz steht auch für Transport-, Informations- und institutionelle Handelskosten.'
        }
      ]
    }
  ],
  tarifmodell: [
    {
      title: 'Zoll im kleinen Land',
      context: 'Weltmarktpreis 10, Zoll 3.',
      steps: [
        {
          q: '[1. Execution] Wie hoch ist der neue Inlandspreis?',
          answer: ['13', '13.0'],
          options: { problemId: 'iwb_tar_1', stepId: 'pin' },
          hint: 'Weltmarktpreis plus Zoll.',
          explain: 'Im kleinen Land steigt der Inlandspreis auf 13.'
        },
        {
          q: '[2. Decision] Wie verändert sich die Importmenge?',
          answer: ['sie sinkt', 'sinkt', 'geringer'],
          options: { problemId: 'iwb_tar_1', stepId: 'imports', dependsOn: 'pin' },
          hint: 'Nachfrage fällt, Angebot steigt.',
          explain: 'Die Importlücke wird kleiner, also sinken die Importe.'
        }
      ]
    }
  ],
  quoten_sanktionen: [
    {
      title: 'Quote vs. Zoll',
      context: 'Eine Quote erzeugt denselben Inlandspreis wie ein äquivalenter Zoll.',
      steps: [
        {
          q: '[1. Interpretation] Worin liegt der zentrale Unterschied zum Zoll?',
          answer: ['quotenrente', 'rente', 'die rente fällt anders an'],
          options: { problemId: 'iwb_qs_1', stepId: 'rent', isDecision: true },
          hint: 'Preiswirkung ähnlich, Rentenempfänger anders.',
          explain: 'Bei der Quote entsteht eine Quotenrente, die nicht automatisch an den Staat fällt.'
        },
        {
          q: '[2. Decision] Wer erhält beim Zoll typischerweise die Einnahmen?',
          answer: ['der staat', 'staat'],
          options: { problemId: 'iwb_qs_1', stepId: 'state', dependsOn: 'rent' },
          hint: 'Denk an Zolleinnahmen.',
          explain: 'Beim Zoll fließen die Einnahmen an den Staat.'
        }
      ]
    }
  ],
  wto_integration: [
    {
      title: 'Trade creation vs. diversion',
      context: 'Eine Zollunion ersetzt teure Inlandsproduktion durch günstigere Partnerimporte.',
      steps: [
        {
          q: '[1. Interpretation] Wie heißt dieser Effekt?',
          answer: ['trade creation', 'handelschaffung'],
          options: { problemId: 'iwb_wto_1', stepId: 'creation', isDecision: true },
          hint: 'Der Handel wird effizienter, nicht nur umgelenkt.',
          explain: 'Das ist trade creation.'
        },
        {
          q: '[2. Decision] Ist dieser Effekt eher wohlfahrtssteigernd oder wohlfahrtsmindernd?',
          answer: ['wohfahrtssteigernd', 'wohlfahrtssteigernd', 'steigernd'],
          options: { problemId: 'iwb_wto_1', stepId: 'welfare', dependsOn: 'creation' },
          hint: 'Ineffiziente Inlandsproduktion wird ersetzt.',
          explain: 'Trade creation erhöht typischerweise die Wohlfahrt.'
        }
      ]
    }
  ],
  wechselkurssysteme: [
    {
      title: 'Nominal vs. real',
      context: 'Der nominale Wechselkurs steigt, zugleich steigen die Inlandspreise stark.',
      steps: [
        {
          q: '[1. Interpretation] Welcher Kurs ist für Wettbewerbsfähigkeit entscheidend?',
          answer: ['realer wechselkurs', 'realwechselkurs', 'q'],
          options: { problemId: 'iwb_ws_1', stepId: 'real', isDecision: true },
          hint: 'Preise müssen mitgedacht werden.',
          explain: 'Entscheidend ist der reale Wechselkurs q.'
        },
        {
          q: '[2. Decision] Kann eine nominale Abwertung ohne weiteres eine reale Abwertung garantieren?',
          answer: ['nein', 'no'],
          options: { problemId: 'iwb_ws_1', stepId: 'no', dependsOn: 'real' },
          hint: 'Denke an mitlaufende Preisniveaus.',
          explain: 'Nein. Wenn die Inlandspreise mitsteigen, kann die reale Wirkung ausbleiben.'
        }
      ]
    }
  ],
  zinsparitaet: [
    {
      title: 'UIP erkennen',
      context: 'Gegeben sind i, i*, E und E^e.',
      steps: [
        {
          q: '[1. Interpretation] Welche Paritätsbeziehung ist gefragt?',
          answer: ['uip', 'ungedeckte zinsparität', 'zinsparität'],
          options: { problemId: 'iwb_par_1', stepId: 'uip', isDecision: true },
          hint: 'Zinsen plus erwartete Wechselkursänderung.',
          explain: 'Das ist der klassische UIP-Fall.'
        },
        {
          q: '[2. Decision] Geht es hier primär um Preise oder um erwartete Renditen?',
          answer: ['erwartete renditen', 'renditen'],
          options: { problemId: 'iwb_par_1', stepId: 'returns', dependsOn: 'uip' },
          hint: 'Zinsparität vergleicht Anlageerträge.',
          explain: 'UIP ist eine Renditegleichgewichtsbedingung.'
        }
      ]
    }
  ],
  kaufkraftparitaet: [
    {
      title: 'PPP als Preislogik erkennen',
      context: 'Eine Aufgabe vergleicht Preisniveaus, Inflationsraten und reale Wettbewerbsfähigkeit.',
      steps: [
        {
          q: '[1. Interpretation] Welche Beziehung ist der erste Zugriff?',
          answer: ['kaufkraftparität', 'ppp', 'purchasing power parity'],
          options: { problemId: 'iwb_kkp_1', stepId: 'ppp', isDecision: true },
          hint: 'Preisniveau und Inflation sprechen nicht für UIP.',
          explain: 'Preisniveaus und Inflationsdifferenzen sind der klassische PPP-Fall.'
        },
        {
          q: '[2. Decision] Welche Größe liest Wettbewerbsfähigkeit besser: nominaler oder realer Wechselkurs?',
          answer: ['realer wechselkurs', 'realwechselkurs', 'q'],
          options: { problemId: 'iwb_kkp_1', stepId: 'real', dependsOn: 'ppp' },
          hint: 'Preise müssen mit in die Betrachtung.',
          explain: 'Wettbewerbsfähigkeit liest du über den realen Wechselkurs, nicht nur über den nominalen.'
        }
      ]
    }
  ],
  monetaerer_ansatz: [
    {
      title: 'Langfristige Abwertung',
      context: 'Home inflationiert langfristig stärker als Foreign.',
      steps: [
        {
          q: '[1. Interpretation] Welche Richtung hat die langfristige nominale Wechselkursänderung von Home?',
          answer: ['abwertung', 'nominale abwertung'],
          options: { problemId: 'iwb_mon_1', stepId: 'dep', isDecision: true },
          hint: 'Relative PPP mit höherer Inflation anwenden.',
          explain: 'Das Land mit höherer Inflation wertet langfristig nominal ab.'
        },
        {
          q: '[2. Decision] Welcher Zusammenhang verbindet Nominalzins und erwartete Inflation?',
          answer: ['fisher effekt', 'fisher', 'fisher-effekt'],
          options: { problemId: 'iwb_mon_1', stepId: 'fisher', dependsOn: 'dep' },
          hint: 'i zerfällt in Realzins und Inflation.',
          explain: 'Das ist der Fisher-Effekt.'
        }
      ]
    }
  ],
  overshooting: [
    {
      title: 'Überschießender Kurs',
      context: 'Nach expansiver Geldpolitik fällt der Zins kurzfristig.',
      steps: [
        {
          q: '[1. Interpretation] Muss der Wechselkurs kurzfristig nur bis zum langfristigen neuen Niveau steigen?',
          answer: ['nein', 'no'],
          options: { problemId: 'iwb_over_1', stepId: 'no', isDecision: true },
          hint: 'Der spätere Rücklauf muss bereits heute eingepreist werden.',
          explain: 'Nein. Im Dornbusch-Modell overshoottet der Kurs zunächst.'
        },
        {
          q: '[2. Decision] Wie heißt diese kurzfristige Überreaktion?',
          answer: ['overshooting', 'overshoot'],
          options: { problemId: 'iwb_over_1', stepId: 'name', dependsOn: 'no' },
          hint: 'Standardbegriff der offenen Makro.',
          explain: 'Die Überreaktion heißt Overshooting.'
        }
      ]
    }
  ],
  trilemma: [
    {
      title: 'Unmögliche Dreierkombination',
      context: 'Ein Land will Fixkurs, volle Kapitalmobilität und autonome Geldpolitik gleichzeitig.',
      steps: [
        {
          q: '[1. Interpretation] Wie heißt dieser Zielkonflikt?',
          answer: ['trilemma', 'unmögliche dreifaltigkeit', 'impossible trinity'],
          options: { problemId: 'iwb_tri_1', stepId: 'tri', isDecision: true },
          hint: 'Drei Ziele, aber nur zwei sind gemeinsam erreichbar.',
          explain: 'Das ist das Trilemma der Währungspolitik.'
        },
        {
          q: '[2. Decision] Welches Ziel muss bei Fixkurs und Kapitalmobilität geopfert werden?',
          answer: ['geldpolitische autonomie', 'geldpolitik', 'autonome geldpolitik'],
          options: { problemId: 'iwb_tri_1', stepId: 'autonomy', dependsOn: 'tri' },
          hint: 'Die Zinspolitik kann dann nicht frei gewählt werden.',
          explain: 'Die autonome Geldpolitik muss geopfert werden.'
        }
      ]
    }
  ],
  balassa_samuelson: [
    {
      title: 'Strukturelle PPP-Abweichung',
      context: 'Ein Land mit stark steigender Produktivität im handelbaren Sektor weist dauerhaft höhere Preisniveaus bei Dienstleistungen auf.',
      steps: [
        {
          q: '[1. Interpretation] Welcher Mechanismus erklärt den Befund am besten?',
          answer: ['balassa-samuelson', 'balassa samuelson', 'balassa'],
          options: { problemId: 'iwb_bs_1', stepId: 'bs', isDecision: true },
          hint: 'Produktivität, Löhne und nicht-handelbare Güter zusammendenken.',
          explain: 'Das ist der Balassa-Samuelson-Mechanismus.'
        },
        {
          q: '[2. Decision] Warum ist das nicht einfach eine „Fehlbewertung“ des Wechselkurses?',
          answer: ['weil die preisniveauunterschiede strukturell sind', 'strukturell', 'weil nicht-handelbare güter teurer werden'],
          options: { problemId: 'iwb_bs_1', stepId: 'structure', dependsOn: 'bs' },
          hint: 'Nicht jede PPP-Abweichung ist ein Marktfehler.',
          explain: 'Höhere Produktivität im handelbaren Sektor kann über Löhne die Preise nicht-handelbarer Güter dauerhaft anheben.'
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
