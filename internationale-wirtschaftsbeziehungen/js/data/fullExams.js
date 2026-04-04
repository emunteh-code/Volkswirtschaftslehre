const textQuestion = (id, points, text, correct, feedback) => ({
  id,
  points,
  type: 'text',
  text,
  correct,
  feedback
});

const textBlock = (label, points, title, preamble, questions) => ({
  label,
  points,
  type: 'text-block',
  title,
  preamble,
  questions
});

function solutionBlock(title, paragraphs, math = []) {
  return [
    `<p><strong>${title}</strong></p>`,
    ...paragraphs.map((paragraph) => `<p>${paragraph}</p>`),
    ...math.map((eq) => `<div class="math-block">${eq}</div>`)
  ].join('');
}

export const FULL_EXAMS = {
  probeklausur_1: {
    id: 'probeklausur_1',
    title: 'Probeklausur I: Handelstheorie',
    subtitle: '90-Minuten-Klausur zu Ricardo, Heckscher-Ohlin und Neuer Handelstheorie',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 18,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch und begründen Sie kurz.',
        groups: [
          {
            context: 'Ricardo, H-O und Krugman',
            questions: [
              { id: 'iwb_pk1_1', text: 'Ein Land braucht absolute Vorteile in mindestens einem Gut, um vom Handel profitieren zu können.', correct: 'Falsch', feedback: 'Ricardo zeigt gerade, dass komparative und nicht absolute Vorteile entscheidend sind.' },
              { id: 'iwb_pk1_2', text: 'Im Heckscher-Ohlin-Modell unterscheiden sich die Länder primär durch ihre Faktorausstattung.', correct: 'Wahr', feedback: 'Genau das ist die Grundidee des Modells.' },
              { id: 'iwb_pk1_3', text: 'Intraindustrieller Handel lässt sich vollständig durch Ricardo erklären.', correct: 'Falsch', feedback: 'Dafür braucht man typischerweise Skalenerträge und Produktdifferenzierung.' },
              { id: 'iwb_pk1_4', text: 'Stolper-Samuelson ist eine Verteilungsaussage und keine reine Handelsrichtungsaussage.', correct: 'Wahr', feedback: 'Es beschreibt Gewinner und Verlierer des Handels im Inland.' },
              { id: 'iwb_pk1_5', text: 'Der Grubel-Lloyd-Index ist hoch, wenn Exporte und Importe in derselben Branche ähnlich groß sind.', correct: 'Wahr', feedback: 'Genau dann ist intraindustrieller Handel stark ausgeprägt.' },
              { id: 'iwb_pk1_6', text: 'Eine lineare PPF im Ricardo-Modell signalisiert steigende Opportunitätskosten.', correct: 'Falsch', feedback: 'Eine lineare PPF steht für konstante Opportunitätskosten.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Ricardo und komparativer Vorteil',
        String.raw`Home benötigt für 1 Einheit Wein $2$ Arbeitsstunden und für 1 Einheit Tuch $4$ Arbeitsstunden. Foreign benötigt für Wein $6$ und für Tuch $3$ Stunden.`,
        [
          textQuestion(
            'iwb_pk1_2a',
            8,
            'Berechnen Sie die Opportunitätskosten von Wein in beiden Ländern und bestimmen Sie das Exportland von Wein.',
            ['home exportiert wein', 'home', 'inland'],
            solutionBlock(
              'Opportunitätskosten vergleichen',
              [
                'Für Wein in Home beträgt der Verzicht auf Tuch 2/4 = 0,5.',
                'Für Wein in Foreign beträgt der Verzicht auf Tuch 6/3 = 2.',
                'Damit hat Home die geringeren Opportunitätskosten und exportiert Wein.'
              ],
              [
                String.raw`$$OK_W^H = \frac{2}{4} = 0{,}5,\qquad OK_W^F = \frac{6}{3} = 2.$$`
              ]
            )
          ),
          textQuestion(
            'iwb_pk1_2b',
            7,
            'Erläutern Sie in einem Satz, warum absolute Vorteile für diese Entscheidung nicht ausreichen.',
            ['weil relative kosten entscheidend sind', 'komparative vorteile', 'opportunitätskosten'],
            solutionBlock(
              'Absolute vs. komparative Vorteile',
              [
                'Absolute Produktivität sagt nur, wer schneller produziert.',
                'Für die Handelsrichtung zählt aber, welches Gut relativ billiger hergestellt wird.'
              ]
            )
          ),
          textQuestion(
            'iwb_pk1_2c',
            7,
            'Nennen Sie eine typische Grenze des Ricardo-Modells.',
            ['es erklärt keine verteilungswirkungen', 'keine verteilung', 'keine intraindustriellen handel', 'ähnliche länder'],
            solutionBlock(
              'Modellgrenzen',
              [
                'Ricardo erklärt Handel aus Technologieunterschieden, aber nicht gut den Handel ähnlicher Länder oder Verteilungswirkungen zwischen Faktoren.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        20,
        'Heckscher-Ohlin und Neue Handelstheorie',
        String.raw`Home ist kapitalreich, Foreign arbeitsreich. Maschinen sind kapitalintensiv, Textilien arbeitsintensiv.`,
        [
          textQuestion(
            'iwb_pk1_3a',
            7,
            'Leiten Sie das Handelsmuster im H-O-Modell ab.',
            ['home exportiert maschinen', 'maschinen'],
            solutionBlock(
              'Faktorreichlichkeit in Handelsrichtung übersetzen',
              [
                'Das kapitalreiche Land exportiert das kapitalintensive Gut.',
                'Daher exportiert Home Maschinen und importiert Textilien.'
              ]
            )
          ),
          textQuestion(
            'iwb_pk1_3b',
            7,
            'Wer profitiert im kapitalreichen Land relativ stärker von der Liberalisierung?',
            ['kapital', 'kapitalbesitzer'],
            solutionBlock(
              'Stolper-Samuelson anwenden',
              [
                'Im kapitalreichen Land gewinnt der reichlich vorhandene Faktor Kapital real.'
              ]
            )
          ),
          textQuestion(
            'iwb_pk1_3c',
            6,
            'Warum ist das gleichzeitige Exportieren und Importieren ähnlicher Autos kein H-O-Standardfall?',
            ['weil das intraindustrieller handel ist', 'skalenerträge', 'produktdifferenzierung'],
            solutionBlock(
              'Übergang zur Neuen Handelstheorie',
              [
                'Gleichzeitiger Export und Import ähnlicher Güter deutet auf intraindustriellen Handel hin.',
                'Dafür braucht man Skalenerträge und Produktdifferenzierung statt nur Faktorausstattung.'
              ]
            )
          )
        ]
      )
    ]
  },

  probeklausur_2: {
    id: 'probeklausur_2',
    title: 'Probeklausur II: Handelspolitik und Integration',
    subtitle: '90-Minuten-Klausur zu Zöllen, Quoten, WTO und Brexit',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 18,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Zoll, Quote, Integration',
            questions: [
              { id: 'iwb_pk2_1', text: 'Im kleinen Land verändert ein Importzoll den Weltmarktpreis.', correct: 'Falsch', feedback: 'Im kleinen Land ist der Weltmarktpreis exogen.' },
              { id: 'iwb_pk2_2', text: 'Eine äquivalente Importquote und ein äquivalenter Zoll unterscheiden sich vor allem darin, wem die Rente zufällt.', correct: 'Wahr', feedback: 'Beim Zoll dem Staat, bei der Quote den Lizenzinhabern.' },
              { id: 'iwb_pk2_3', text: 'Trade diversion ist immer wohlfahrtssteigernd, weil mehr Handel stattfindet.', correct: 'Falsch', feedback: 'Umlenkung kann teurere Partnerimporte an die Stelle billiger Drittlandimporte setzen.' },
              { id: 'iwb_pk2_4', text: 'Eine Zollunion hat einen gemeinsamen Außenzoll, eine Freihandelszone nicht.', correct: 'Wahr', feedback: 'Das ist der Kernunterschied beider Integrationsformen.' },
              { id: 'iwb_pk2_5', text: 'Brexit ist ökonomisch nur ein Fall höherer Zölle.', correct: 'Falsch', feedback: 'Wichtiger sind auch Grenzkosten, Regulierung und nichttarifäre Hemmnisse.' },
              { id: 'iwb_pk2_6', text: 'Das MFN-Prinzip soll diskriminierende Behandlung von Handelspartnern begrenzen.', correct: 'Wahr', feedback: 'Genau das ist die Idee der Meistbegünstigung.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Importzoll im kleinen Land',
        String.raw`Der Weltmarktpreis eines importierten Gutes beträgt $10$. Das Inland führt einen spezifischen Zoll von $3$ ein.`,
        [
          textQuestion(
            'iwb_pk2_2a',
            8,
            'Wie hoch ist der neue Inlandspreis und wie verändern sich Konsum, Produktion und Importmenge qualitativ?',
            ['13', 'preis 13', '13 und importe sinken'],
            solutionBlock(
              'Preis- und Mengenwirkung',
              [
                'Der Inlandspreis steigt auf 13.',
                'Die heimische Nachfrage sinkt, das heimische Angebot steigt und die Importmenge fällt.'
              ],
              [
                String.raw`$$P_{in} = P_w + t = 10 + 3 = 13.$$`
              ]
            )
          ),
          textQuestion(
            'iwb_pk2_2b',
            7,
            'Welche Gruppen gewinnen und verlieren?',
            ['produzenten und staat gewinnen, konsumenten verlieren', 'konsumenten verlieren'],
            solutionBlock(
              'Verteilungswirkung des Zolls',
              [
                'Konsumenten verlieren wegen des höheren Preises.',
                'Produzenten gewinnen durch höhere Preise und Mengen.',
                'Der Staat erhält Zolleinnahmen.'
              ]
            )
          ),
          textQuestion(
            'iwb_pk2_2c',
            7,
            'Warum bleibt netto dennoch ein Wohlfahrtsverlust?',
            ['deadweight loss', 'produktions und konsumverzerrung', 'verzerrung'],
            solutionBlock(
              'Nettowohlfahrtsverlust',
              [
                'Es entstehen Produktions- und Konsumverzerrungen.',
                'Diese Deadweight-Loss-Flächen werden durch Produzentenrenten und Staatseinnahmen nicht vollständig kompensiert.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        20,
        'Quote, WTO und Brexit',
        'Erläutern Sie die folgenden Transferfragen knapp, aber begründet.',
        [
          textQuestion(
            'iwb_pk2_3a',
            7,
            'Warum ist die Quotenrente der zentrale Unterschied zwischen Quote und Zoll?',
            ['weil die rente anders zufällt', 'quote rente', 'lizenzinhaber'],
            solutionBlock(
              'Rentenverteilung als Kernunterschied',
              [
                'Preis- und Mengenwirkung können ähnlich sein.',
                'Der Unterschied liegt darin, dass bei der Quote die künstliche Knappheitsrente an Lizenzinhaber fällt, nicht an den Staat.'
              ]
            )
          ),
          textQuestion(
            'iwb_pk2_3b',
            7,
            'Was ist der Unterschied zwischen trade creation und trade diversion?',
            ['trade creation ersetzt teure inlandsproduktion, trade diversion verdrängt billige drittlandimporte', 'trade creation', 'trade diversion'],
            solutionBlock(
              'Effizienz vs. Umlenkung',
              [
                'Trade creation ersetzt ineffiziente Inlandsproduktion durch günstigere Partnerimporte.',
                'Trade diversion verdrängt billige Drittlandimporte zugunsten teurerer Partnerimporte.'
              ]
            )
          ),
          textQuestion(
            'iwb_pk2_3c',
            6,
            'Warum ist Brexit ein Integrationsfall und kein reiner Zollfall?',
            ['nichttarifäre hemmnisse', 'regulierung', 'grenzformalitäten'],
            solutionBlock(
              'Tiefe der Marktintegration',
              [
                'Brexit betrifft auch Ursprungskontrollen, Regulierung, Dienstleistungszugang und Grenzformalitäten.',
                'Dadurch entstehen Handelskosten selbst dann, wenn reine Zollsätze nicht extrem hoch sind.'
              ]
            )
          )
        ]
      )
    ]
  },

  probeklausur_3: {
    id: 'probeklausur_3',
    title: 'Probeklausur III: Offene Makroökonomik',
    subtitle: '90-Minuten-Klausur zu Wechselkursen, Paritäten, Overshooting und Trilemma',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 18,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Wechselkurse und Paritäten',
            questions: [
              { id: 'iwb_pk3_1', text: 'Eine nominale Abwertung ist automatisch auch eine reale Abwertung.', correct: 'Falsch', feedback: 'Nur wenn Preisniveaus unverändert bleiben; sonst kann die reale Wirkung verschwinden.' },
              { id: 'iwb_pk3_2', text: 'UIP verbindet Zinsen mit erwarteten Wechselkursänderungen.', correct: 'Wahr', feedback: 'Genau das ist die Kernaussage der ungedeckten Zinsparität.' },
              { id: 'iwb_pk3_3', text: 'PPP ist typischerweise eher eine langfristige als eine kurzfristige Beziehung.', correct: 'Wahr', feedback: 'Kurzfristig dominieren oft Finanzmarktkräfte und Preisrigiditäten.' },
              { id: 'iwb_pk3_4', text: 'Overshooting bedeutet, dass der Kurs sofort auf das langfristige neue Gleichgewicht springt und dort bleibt.', correct: 'Falsch', feedback: 'Beim Overshooting schießt der Kurs zunächst über das Langfristniveau hinaus.' },
              { id: 'iwb_pk3_5', text: 'Fixkurs, freie Kapitalmobilität und autonome Geldpolitik sind vollständig vereinbar.', correct: 'Falsch', feedback: 'Das Trilemma schließt genau diese Dreierkombination aus.' },
              { id: 'iwb_pk3_6', text: 'Balassa-Samuelson kann systematische PPP-Abweichungen in reichen Ländern erklären.', correct: 'Wahr', feedback: 'Höhere Produktivität im handelbaren Sektor erhöht Löhne und Preise nicht-handelbarer Güter.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'UIP und Kaufkraftparität',
        String.raw`Gegeben seien $i = 4\%$, $i^* = 2\%$ und ein erwarteter Wechselkurs $E^e = 1{,}20$.`,
        [
          textQuestion(
            'iwb_pk3_2a',
            8,
            'Erklären Sie qualitativ, wie der heutige Kurs $E$ liegen muss, damit UIP erfüllt ist.',
            ['heutiger kurs muss so liegen dass der erwartete auslandsertrag sinkt', 'uip', 'ausgleich'],
            solutionBlock(
              'UIP qualitativ lesen',
              [
                'Der höhere Inlandszins muss durch einen entsprechend höheren erwarteten Auslandsertrag ausgeglichen werden.',
                'Je höher der heutige Wechselkurs E bereits ist, desto kleiner wird bei gegebenem E^e die erwartete Veränderung und damit der Auslandsertrag.'
              ]
            )
          ),
          textQuestion(
            'iwb_pk3_2b',
            7,
            'Warum beantwortet PPP eine andere Frage als UIP?',
            ['ppp arbeitet mit preisniveaus', 'uip mit zinsen', 'unterschiedliche variablen'],
            solutionBlock(
              'Preis- vs. Renditelogik',
              [
                'UIP vergleicht Kapitalerträge über Zinsen und erwartete Wechselkursänderungen.',
                'PPP verknüpft Preisniveaus oder Inflationsdifferenzen mit dem nominalen Wechselkurs.'
              ]
            )
          ),
          textQuestion(
            'iwb_pk3_2c',
            7,
            'Weshalb kann PPP kurzfristig verletzt wirken, ohne als langfristiger Bezugspunkt wertlos zu sein?',
            ['preisrigiditäten', 'finanzmarktkräfte', 'langfristiger anker'],
            solutionBlock(
              'Kurzfristige Friktionen und langfristiger Anker',
              [
                'Kurzfristig dominieren Erwartungen, Finanzmarktreaktionen und träge Preise.',
                'Langfristig wirken Preisniveaus und Inflationsdifferenzen aber weiterhin als wichtiger Anker.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        20,
        'Overshooting und Trilemma',
        'Beantworten Sie die folgenden Transferfragen präzise.',
        [
          textQuestion(
            'iwb_pk3_3a',
            7,
            'Warum sinkt nach einer expansiven Geldpolitik im Dornbusch-Modell zunächst der Zins?',
            ['weil die geldmenge steigt', 'mehr geldangebot', 'zins sinkt'],
            solutionBlock(
              'Kurzfristiger Geldmarktmechanismus',
              [
                'Bei gegebenem Preisniveau erhöht eine expansive Geldpolitik das reale Geldangebot.',
                'Damit fällt kurzfristig der Zins, der den Geldmarkt räumt.'
              ]
            )
          ),
          textQuestion(
            'iwb_pk3_3b',
            7,
            'Warum muss der Wechselkurs dann über sein langfristiges Niveau hinausschießen?',
            ['erwarteter rücklauf muss den zinsnachteil ausgleichen', 'uip', 'overshooting'],
            solutionBlock(
              'Overshooting logisch herleiten',
              [
                'Der niedrigere Inlandszins kann nur gehalten werden, wenn später eine Gegenbewegung des Kurses erwartet wird.',
                'Dafür muss der Kurs heute zunächst stärker steigen als langfristig nötig.'
              ]
            )
          ),
          textQuestion(
            'iwb_pk3_3c',
            6,
            'Welches Ziel muss ein Land mit Fixkurs und voller Kapitalmobilität im Trilemma aufgeben?',
            ['geldpolitische autonomie', 'geldpolitik', 'autonome geldpolitik'],
            solutionBlock(
              'Trilemma anwenden',
              [
                'Bei Fixkurs und Kapitalmobilität muss die Zinspolitik im Wesentlichen dem Ausland folgen.',
                'Damit fällt autonome Geldpolitik als drittes Ziel weg.'
              ]
            )
          )
        ]
      )
    ]
  }
};

