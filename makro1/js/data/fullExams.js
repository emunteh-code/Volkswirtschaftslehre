const textQuestion = (id, points, text, correct, feedback) => ({
  id,
  points,
  type: 'text',
  text,
  correct,
  feedback
});

const textBlock = (label, points, title, preamble, questions, conceptId = null) => ({
  label,
  points,
  type: 'text-block',
  title,
  preamble,
  questions,
  ...(conceptId ? { conceptId } : {})
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
    title: 'Probeklausur I: Gütermarkt, Multiplikator und Geldmarkt',
    subtitle: '90-Minuten-Klausur zu VGR, Keynes-Kreuz und Geldnachfrage',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 27,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch und begründen Sie kurz.',
        groups: [
          {
            context: 'VGR und Gütermarkt',
            questions: [
              { id: 'm1_pk1_1', text: 'Das reale BIP steigt immer genauso stark wie das nominale BIP, wenn die Produktion zunimmt.', correct: 'Falsch', feedback: 'Nominales BIP enthält zusätzlich Preisbewegungen. Nur das reale BIP isoliert Mengenänderungen.' },
              { id: 'm1_pk1_2', text: 'Eine Erhöhung der Staatsausgaben verschiebt die Güternachfrage im Keynes-Kreuz nach oben.', correct: 'Wahr', feedback: 'G steigt direkt in Z ein und hebt damit die geplante Nachfrage.' },
              { id: 'm1_pk1_3', text: 'Der Steuermultiplikator ist betragsmäßig gleich groß wie der Staatsausgabenmultiplikator.', correct: 'Falsch', feedback: 'Steuersenkungen wirken nur über zusätzlichen Konsum, daher ist ihr Effekt kleiner.' },
              { id: 'm1_pk1_4', text: 'Das Sparparadox bedeutet, dass höhere Sparneigung gesamtwirtschaftlich das Einkommen senken kann.', correct: 'Wahr', feedback: 'Weniger Konsum senkt die Nachfrage und damit das Einkommen, sodass der Sparversuch aggregiert teilweise verpufft.' },
              { id: 'm1_pk1_5', text: 'Wenn Einkommen steigt, sinkt bei unveränderter Geldmenge der Gleichgewichtszins im Geldmarkt.', correct: 'Falsch', feedback: 'Höheres Einkommen erhöht die Geldnachfrage; bei unverändertem Angebot muss der Zins steigen.' },
              { id: 'm1_pk1_6', text: 'Steigt der Anleihenpreis, steigt in derselben Richtung auch der Zins.', correct: 'Falsch', feedback: 'Anleihenpreis und Zins bewegen sich gegensinnig.' }
            ]
          },
          {
            context: 'Geldmarkt, Zins und Erwartungen (Transferfallen)',
            questions: [
              { id: 'm1_pk1_7', text: 'Bei horizontaler Zinsregel verschiebt expansive Geldpolitik die IS-Kurve nach rechts.', correct: 'Falsch', feedback: 'Geldpolitik wirkt über die Zinsbedingung (LM bzw. Zinsregel), nicht über eine Verschiebung der IS-Kurve.' },
              { id: 'm1_pk1_8', text: 'Bleibt der Nominalzins konstant und steigen die Inflationserwartungen, steigt ceteris paribus der Realzins.', correct: 'Falsch', feedback: 'Mit $r \\approx i - \\pi^e$ senkt höheres $\\pi^e$ bei gegebenem $i$ den Realzins.' },
              { id: 'm1_pk1_9', text: 'Eine höhere marginale Konsumneigung aus verfügbarem Einkommen erhöht im Keynes-Kreuz den Betrag des Staatsausgabenmultiplikators.', correct: 'Wahr', feedback: 'Der Multiplikator hängt von $c_1$ ab; größeres $c_1$ vergrößert $1/(1-c_1)$.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Gütermarkt und Multiplikatorrechnung',
        String.raw`Gegeben seien $C = 120 + 0{,}75(Y-T)$, $I = 200$, $G = 180$ und $T = 100$.`,
        [
          textQuestion(
            'm1_pk1_2a',
            6,
            'Stelle die Güternachfrage auf und berechne die Gleichgewichtsproduktion.',
            ['1700', '1700.0'],
            solutionBlock(
              'Güternachfrage aufstellen und nach Y auflösen',
              [
                'Zuerst wird die Konsumfunktion eingesetzt, dann alles zu einer linearen Nachfragefunktion zusammengefasst.',
                'Anschließend wird die Gleichgewichtsbedingung Y = Z verwendet.'
              ],
              [
                String.raw`$$Z = 120 + 0{,}75(Y-100) + 200 + 180 = 425 + 0{,}75Y.$$`,
                String.raw`$$Y = 425 + 0{,}75Y \Rightarrow 0{,}25Y = 425 \Rightarrow Y = 1700.$$`
              ]
            )
          ),
          textQuestion(
            'm1_pk1_2b',
            6,
            'Wie groß ist der Staatsausgabenmultiplikator? Welche Produktionsänderung ergibt sich bei ΔG = 40?',
            ['4', '160', '4 und 160', '4, 160'],
            solutionBlock(
              'Multiplikator und Outputeffekt',
              [
                'Mit c1 = 0,75 beträgt der Staatsausgabenmultiplikator 1/(1-c1).',
                'Der Gesamtimpuls ergibt sich aus Multiplikator mal Erstimpuls.'
              ],
              [
                String.raw`$$\frac{\partial Y}{\partial G} = \frac{1}{1-0{,}75} = 4.$$`,
                String.raw`$$\Delta Y = 4 \cdot 40 = 160.$$`
              ]
            )
          ),
          textQuestion(
            'm1_pk1_2c',
            5,
            'Erkläre in einem Satz, warum eine gleich hohe Steuersenkung schwächer wirkt als der Anstieg von G.',
            ['weil nur ein teil konsumiert wird', 'weil der zusätzliche einkommenseffekt nur mit c1 in den konsum eingeht', 'teuermultiplikator kleiner'],
            solutionBlock(
              'Steuer- und Staatsausgabenmultiplikator unterscheiden',
              [
                'Staatsausgaben gehen unmittelbar eins zu eins in die Nachfrage ein.',
                'Eine Steuersenkung erhöht zunächst nur das verfügbare Einkommen; konsumiert wird davon nur der Anteil c1.'
              ]
            )
          ),
          textQuestion(
            'm1_pk1_2d',
            5,
            String.raw`Ausgangspunkt bleibt das Gleichgewicht aus (a). Wie ändert sich $Y$, wenn die Steuern um $\Delta T = -20$ gesenkt werden und $G$ sowie $I$ unverändert bleiben?`,
            ['60', '60.0', '+60'],
            solutionBlock(
              'Steuermultiplikator als Transfervariante',
              [
                'Die Steuer wirkt mit Verzögerung über das verfügbare Einkommen; der Steuermultiplikator ist $-c_1/(1-c_1)$.',
                'Eine Steuersenkung ($\\Delta T<0$) wirkt expansiv.'
              ],
              [
                String.raw`$$\Delta Y = -\frac{c_1}{1-c_1}\,\Delta T = -\frac{0{,}75}{0{,}25}\cdot(-20) = 3\cdot 20 = 60.$$`
              ]
            )
          )
        ],
        'multiplikator'
      ),
      {
        label: 'Aufgabe 3',
        conceptId: 'geldnachfrage',
        points: 20,
        type: 'text-block',
        title: 'Geldmarkt und Offenmarktpolitik',
        preamble: String.raw`Die reale Geldnachfrage sei gegeben durch $M^d/P = 0{,}5Y - 10i$. Das Einkommen liegt bei $Y = 100$. Die reale Geldmenge beträgt zunächst $M/P = 40$.`,
        questions: [
          textQuestion(
            'm1_pk1_3a',
            8,
            'Berechne den Gleichgewichtszins.',
            ['1', '1%', '1.0'],
            solutionBlock(
              'Geldmarktgleichgewicht nach i auflösen',
              [
                'Setze reale Geldmenge und reale Geldnachfrage gleich und löse nach dem Zins auf.'
              ],
              [
                String.raw`$$40 = 0{,}5 \cdot 100 - 10i = 50 - 10i$$`,
                String.raw`$$10i = 10 \Rightarrow i = 1.$$`
              ]
            )
          ),
          textQuestion(
            'm1_pk1_3b',
            6,
            'Die Zentralbank erhöht M/P auf 50. Wie ändert sich der Gleichgewichtszins?',
            ['0', '0%', 'sinkt auf 0'],
            solutionBlock(
              'Mehr Geldmenge senkt den Gleichgewichtszins',
              [
                'Bei unverändertem Einkommen genügt ein niedrigerer Zins, um die höhere reale Geldmenge zu halten.'
              ],
              [
                String.raw`$$50 = 50 - 10i \Rightarrow i = 0.$$`
              ]
            )
          ),
          textQuestion(
            'm1_pk1_3c',
            6,
            'Warum steigen bei höherem Einkommen die Opportunitätskosten der Geldhaltung nicht direkt, wohl aber der Gleichgewichtszins?',
            ['weil höheres einkommen erst die geldnachfrage erhöht und der markt dann über i räumt', 'geldnachfrage steigt und i passt sich an'],
            solutionBlock(
              'Einkommen wirkt über die Nachfrage, nicht direkt über den Preis',
              [
                'Ein höheres Einkommen erzeugt mehr Transaktionsbedarf und damit zusätzliche Geldnachfrage.',
                'Der Zins steigt erst als Marktreaktion, um das Gleichgewicht zwischen Geldangebot und Geldnachfrage wiederherzustellen.'
              ]
            )
          )
        ]
      }
    ]
  },

  probeklausur_2: {
    id: 'probeklausur_2',
    title: 'Probeklausur II: IS-LM, Politikmix und Finanzfriktionen',
    subtitle: '90-Minuten-Klausur zu IS-LM, Crowding-Out, Realzins und Risikoprämien',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 27,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'IS-LM und Politikmix',
            questions: [
              { id: 'm1_pk2_1', text: 'Die IS-Kurve verläuft fallend, weil höhere Zinsen die Investitionsnachfrage dämpfen.', correct: 'Wahr', feedback: 'Genau über den Investitionskanal sinkt das Gütermarktgleichgewicht bei höherem Zins.' },
              { id: 'm1_pk2_2', text: 'Bei horizontaler Zinsregel entsteht klassisches Crowding-Out genauso wie bei steiler LM-Kurve.', correct: 'Falsch', feedback: 'Bei horizontaler Zinsregel steigt der Zins gerade nicht mit an; Crowding-Out entfällt weitgehend.' },
              { id: 'm1_pk2_3', text: 'Expansive Geldpolitik verschiebt die IS-Kurve nach rechts.', correct: 'Falsch', feedback: 'Geldpolitik verschiebt die LM bzw. die Zinsregel, nicht die IS-Kurve.' },
              { id: 'm1_pk2_4', text: 'Eine höhere Risikoprämie kann die IS-Kurve nach links verschieben, obwohl der Leitzins konstant bleibt.', correct: 'Wahr', feedback: 'Entscheidend für Investitionen ist der Kreditzins i + x.' },
              { id: 'm1_pk2_5', text: 'Sinkende Inflationserwartungen senken bei gegebenem Nominalzins den Realzins.', correct: 'Falsch', feedback: 'r ≈ i − π^e. Sinkt π^e, steigt der Realzins.' },
              { id: 'm1_pk2_6', text: 'IS-LM ist ein Modell der mittleren Frist mit flexiblen Preisen.', correct: 'Falsch', feedback: 'IS-LM ist ein Kurzfristmodell mit gegebenem Preisniveau.' }
            ]
          },
          {
            context: 'Zinsuntergrenze, Erwartungen und Politikmix (Fallen)',
            questions: [
              { id: 'm1_pk2_7', text: 'Am liquiditätsfall („Zinsboden“) kann zusätzliche nominale Geldmenge den kurzfristigen Gleichgewichtszins oft nicht weiter senken und wirkt dann schwach auf den Gütermarkt.', correct: 'Wahr', feedback: 'Wenn die Geldnachfrage sehr zinselastisch ist, bleibt i am Boden; der klassische Zinskanal der Geldpolitik blockiert.' },
              { id: 'm1_pk2_8', text: 'Für private Investitionsentscheidungen ist der erwartete Realzins relevant, nicht der Nominalzins allein.', correct: 'Wahr', feedback: 'Entscheidungen hängen von erwarteter realer Finanzierungslast ab; Nominalzins und Inflationserwartungen müssen zusammen gedacht werden.' },
              { id: 'm1_pk2_9', text: 'Wenn Fiskal- und Geldpolitik gleichzeitig expansiv sind, muss sich im IS-LM-Rahmen notwendigerweise nur eine der beiden Kurven (IS oder LM) verschieben.', correct: 'Falsch', feedback: 'Beide Instrumente können gleichzeitig wirken: Fiskal verschiebt typischerweise die IS, Geldpolitik die monetäre Bedingung (LM/Zinsregel).' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        24,
        'IS-LM-Grundmodell',
        String.raw`Betrachte eine Volkswirtschaft, in der die Zentralbank den Zins direkt setzt. Eine Fiskalexpansion erhöht die Güternachfrage.`,
        [
          textQuestion(
            'm1_pk2_2a',
            6,
            'Beschreibe die Wirkung einer Fiskalexpansion auf IS-Kurve, Output und Zins, wenn die Zentralbank den Zins konstant hält.',
            ['is nach rechts', 'output steigt', 'zins bleibt konstant', 'kein crowding out'],
            solutionBlock(
              'Fiskalpolitik bei horizontaler Zinsregel',
              [
                'Die IS-Kurve verschiebt sich nach rechts, weil die Nachfrage steigt.',
                'Bei konstanter Zinsregel bleibt i unverändert; der Output steigt deutlich, Crowding-Out bleibt aus.'
              ]
            )
          ),
          textQuestion(
            'm1_pk2_2b',
            6,
            'Warum ist derselbe Fiskalimpuls bei steiler LM-Kurve schwächer?',
            ['zins steigt', 'investitionen sinken', 'crowding out'],
            solutionBlock(
              'Crowding-Out über den Zins',
              [
                'Wenn die monetäre Bedingung steigend ist, erzeugt die IS-Verschiebung einen Zinsanstieg.',
                'Der höhere Zins verdrängt private Investitionen teilweise; dadurch fällt der Outputeffekt kleiner aus.'
              ]
            )
          ),
          textQuestion(
            'm1_pk2_2c',
            6,
            'Formuliere in einem Satz, warum Geldpolitik im IS-LM-Modell über Investitionen auf Y wirkt.',
            ['weil der zins die investitionsnachfrage bestimmt', 'zinskanal', 'niedrigerer zins erhöht investitionen'],
            solutionBlock(
              'Zinskanal der Geldpolitik',
              [
                'Eine Zinssenkung reduziert Finanzierungskosten, steigert Investitionen und hebt damit die Güternachfrage sowie das Gleichgewichtseinkommen.'
              ]
            )
          ),
          textQuestion(
            'm1_pk2_2d',
            6,
            String.raw`Transferfall: Die Fiskalpolitik bleibt unverändert, die Zentralbank senkt dagegen den gesetzten Leitzins. Was passiert kurzfristig qualitativ mit Investitionsnachfrage und Gütermarkt-Output $Y$?`,
            ['investitionen steigen', 'y steigt', 'zinskanal expansiv'],
            solutionBlock(
              'Reine Geldpolitik bei Zinsregel',
              [
                'Ein niedrigerer Leitzins senkt Finanzierungskosten und erhöht ceteris paribus die Investitionsnachfrage.',
                'Über den Zinskanal verschiebt sich das Gütermarktgleichgewicht zu höherem $Y$.'
              ]
            )
          )
        ],
        'islm'
      ),
      textBlock(
        'Aufgabe 3',
        24,
        'Realzins und Risikoprämie',
        String.raw`Gegeben sei ein Leitzins von $4\%$, erwartete Inflation von $1\%$ und eine Risikoprämie von $2\%$.`,
        [
          textQuestion(
            'm1_pk2_3a',
            5,
            'Bestimme den Realzins und den Kreditzins.',
            ['3 und 6', '3%, 6%', '3% und 6%', '3 6'],
            solutionBlock(
              'Realzins und Kreditzins getrennt berechnen',
              [
                'Der Realzins ergibt sich aus Nominalzins minus erwarteter Inflation; der Kreditzins addiert die Risikoprämie.'
              ],
              [
                String.raw`$$r \approx 4\% - 1\% = 3\%$$`,
                String.raw`$$i_L = 4\% + 2\% = 6\%$$`
              ]
            )
          ),
          textQuestion(
            'm1_pk2_3b',
            6,
            'Erkläre die Wirkung eines Anstiegs der Risikoprämie auf Investitionen und IS-Kurve.',
            ['investitionen sinken', 'is nach links', 'kreditzins steigt'],
            solutionBlock(
              'Risikoprämie als Nachfrageschock',
              [
                'Steigt die Risikoprämie, erhöht sich der für Unternehmen relevante Kreditzins.',
                'Dadurch sinken Investitionen; die IS-Kurve verschiebt sich nach links.'
              ]
            )
          ),
          textQuestion(
            'm1_pk2_3c',
            5,
            'Warum kann eine Deflationsgefahr trotz niedriger Leitzinsen die Konjunktur bremsen?',
            ['weil der realzins steigt', 'fallende inflationserwartungen erhöhen den realzins'],
            solutionBlock(
              'Deflation über den Realzinskanal',
              [
                'Wenn Inflationserwartungen fallen, steigt bei gegebenem Nominalzins der Realzins.',
                'Damit verteuern sich reale Finanzierungskosten und die Nachfrage wird gebremst.'
              ]
            )
          ),
          textQuestion(
            'm1_pk2_3d',
            8,
            String.raw`Die Risikoprämie bleibe $2\%$. Der Leitzins bleibe $4\%$, die erwartete Inflation falle jedoch von $1\%$ auf $-0{,}5\%$. Wie hoch ist der neue erwartete Realzins (Fisher-Näherung)? Welche Richtungswirkung auf Investitionsanreize ist damit verbunden?`,
            ['4.5', '4,5', '4.5%', 'steigt', 'investitionen sinken'],
            solutionBlock(
              'Transfer: Erwartungsdeflation verschärft reale Konditionen',
              [
                'Bei unverändertem Nominalzins verschärft sinkende Inflationserwartungen die reale Finanzierungslast.',
                'Investitionsanreize werden ceteris paribus gedämpft.'
              ],
              [
                String.raw`$$r \approx 4\% - (-0{,}5\%) = 4{,}5\%.$$`
              ]
            )
          )
        ],
        'realzins_risikopraemie_krisenkanal'
      )
    ]
  },

  probeklausur_3: {
    id: 'probeklausur_3',
    title: 'Probeklausur III: Arbeitsmarkt, Phillipskurve und Erwartungen',
    subtitle: '90-Minuten-Klausur zur mittleren Frist und makroökonomischer Dynamik',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 27,
        type: 'wf-block',
        preamble: 'Entscheiden Sie wahr oder falsch.',
        groups: [
          {
            context: 'Arbeitsmarkt und Inflation',
            questions: [
              { id: 'm1_pk3_1', text: 'Eine höhere Marktmacht der Firmen senkt im WS-PS-Modell den von Firmen gezahlten Reallohn.', correct: 'Wahr', feedback: 'PS lautet W/P = 1/(1+μ); höheres μ senkt den Reallohn.' },
              { id: 'm1_pk3_2', text: 'Die NAIRU ist die Arbeitslosenquote, bei der Inflation gleich null ist.', correct: 'Falsch', feedback: 'Sie ist die Quote, bei der Inflation stabil bleibt, nicht zwingend null ist.' },
              { id: 'm1_pk3_3', text: 'Wenn u unter u_n liegt, beschleunigt sich unter adaptiven Erwartungen die Inflation.', correct: 'Wahr', feedback: 'Dann ist π_t − π_{t-1} positiv.' },
              { id: 'm1_pk3_4', text: 'Langfristig lässt sich die Arbeitslosigkeit dauerhaft durch etwas höhere Inflation unter u_n halten.', correct: 'Falsch', feedback: 'Mit angepassten Erwartungen verschwindet der dauerhafte Trade-off.' },
              { id: 'm1_pk3_5', text: 'Im IS-LM-PC-Modell führt ein positiver Nachfrageschock mittelfristig über höhere Inflation zu einer geldpolitischen Gegenreaktion.', correct: 'Wahr', feedback: 'Genau das ist die Rückkehrlogik zur mittleren Frist.' },
              { id: 'm1_pk3_6', text: 'Eine glaubwürdige dauerhafte Politikmaßnahme verändert Erwartungen stärker als eine temporäre.', correct: 'Wahr', feedback: 'Erwartetes Lebenseinkommen und erwartete Zinsbahn reagieren stärker auf permanente, glaubwürdige Maßnahmen.' }
            ]
          },
          {
            context: 'Phillipskurve, Schocks und Erwartungen (Transferfallen)',
            questions: [
              { id: 'm1_pk3_7', text: 'Ein Anstieg der Inflationserwartungen verschiebt die kurzfristige Phillipskurve nach oben.', correct: 'Wahr', feedback: 'Bei gegebener Arbeitslosigkeit führt höheres π^e zu höherer tatsächlicher Inflation.' },
              { id: 'm1_pk3_8', text: 'Ein negativer Angebotsschock kann die Inflation erhöhen, während das Output unter seinem natürlichen Niveau liegt.', correct: 'Wahr', feedback: 'Angebotsseitige Verschiebungen können Stagflationstypische Kombinationen erzeugen.' },
              { id: 'm1_pk3_9', text: 'Ein rein positiver aggregierter Nachfrageschock senkt kurzfristig stets die Inflation, solange die Zentralbank nicht reagiert.', correct: 'Falsch', feedback: 'Über höheres Output und geringere Arbeitslosigkeit wirkt ein Nachfrageschock typischerweise inflationär entlang der kurzfristigen PC.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        24,
        'WS-PS und natürliche Arbeitslosigkeit',
        String.raw`Es gelte $W/P = 1{,}2 - 2u$ für die WS-Kurve und $W/P = 1/(1+\mu)$ mit $\mu = 0{,}2$ für die PS-Kurve.`,
        [
          textQuestion(
            'm1_pk3_2a',
            7,
            'Bestimme den Reallohn auf der PS-Kurve.',
            ['0.833', '0,833', '5/6', '0.83'],
            solutionBlock(
              'PS-Reallohn berechnen',
              [
                'Der Reallohn auf der PS-Kurve hängt nur vom Markup ab.'
              ],
              [
                String.raw`$$\frac{W}{P} = \frac{1}{1+0{,}2} = \frac{1}{1{,}2} \approx 0{,}833.$$`
              ]
            )
          ),
          textQuestion(
            'm1_pk3_2b',
            7,
            'Berechne die natürliche Arbeitslosenquote u_n.',
            ['0.183', '18.3%', '0,183', '18,3%'],
            solutionBlock(
              'WS und PS gleichsetzen',
              [
                'Im Gleichgewicht muss die Reallohnforderung der Beschäftigten genau dem von Firmen gezahlten Reallohn entsprechen.'
              ],
              [
                String.raw`$$1{,}2 - 2u = 0{,}833 \Rightarrow 2u = 0{,}367 \Rightarrow u \approx 0{,}183.$$`
              ]
            )
          ),
          textQuestion(
            'm1_pk3_2c',
            5,
            'Welche qualitative Wirkung hätte ein Anstieg von z auf u_n?',
            ['u_n steigt', 'steigt'],
            solutionBlock(
              'WS-Verschiebung nach oben',
              [
                'Höheres z erhöht die Lohnforderung bei gegebener Arbeitslosigkeit.',
                'Die WS-Kurve verschiebt sich nach oben; der Schnittpunkt mit PS liegt bei höherem u_n.'
              ]
            )
          ),
          textQuestion(
            'm1_pk3_2d',
            5,
            String.raw`Transfer: Der Markup steigt auf $\mu = 0{,}25$, die WS-Kurve bleibe unverändert. Wie hoch ist der neue Reallohn auf der PS-Kurve? (Kein erneutes Gleichsetzen mit der WS nötig.)`,
            ['0.8', '0,8', '4/5'],
            solutionBlock(
              'Markup-Schock: nur PS verschieben',
              [
                'Auf der Preissetzungsseite gilt weiter $W/P = 1/(1+\mu)$.',
                'Höheres Markup drückt den von Firmen gezahlten Reallohn.'
              ],
              [
                String.raw`$$\frac{W}{P} = \frac{1}{1+0{,}25} = 0{,}8.$$`
              ]
            )
          )
        ],
        'arbeitsmarkt'
      ),
      textBlock(
        'Aufgabe 3',
        24,
        'Phillipskurve, Erwartungen und mittelfristige Dynamik',
        String.raw`Die Arbeitslosenquote sinkt nach einer expansiven Fiskalpolitik kurzfristig unter die natürliche Rate. Die Zentralbank verfolgt ein Inflationsziel und reagiert mit einer Zinsregel.`,
        [
          textQuestion(
            'm1_pk3_3a',
            6,
            'Erkläre die Wirkung des Schocks auf Inflation und Arbeitslosigkeit in der ersten Runde.',
            ['u unter u_n', 'inflation steigt', 'arbeitslosigkeit sinkt'],
            solutionBlock(
              'Erste Runde im IS-LM-PC-Modell',
              [
                'Der Nachfrageschock hebt Output und senkt damit über Okuns Gesetz die Arbeitslosigkeit unter die natürliche Rate.',
                'Die Phillipskurve übersetzt diese Arbeitsmarktanspannung in steigende Inflation.'
              ]
            )
          ),
          textQuestion(
            'm1_pk3_3b',
            6,
            'Warum kehrt der Output mittelfristig wieder zu Y_n zurück?',
            ['weil die zentralbank den realzins erhöht', 'höhere inflation führt zu geldpolitischer straffung', 'nachfrage wird zurückgedrückt'],
            solutionBlock(
              'Rückkehrmechanik',
              [
                'Die höhere Inflation löst über die Zinsregel einen höheren Realzins aus.',
                'Dieser höhere Realzins dämpft Investitionen und Nachfrage, sodass die Produktionslücke wieder verschwindet.'
              ]
            )
          ),
          textQuestion(
            'm1_pk3_3c',
            5,
            'Warum wirken permanente und glaubwürdige Politikankündigungen stärker auf heutiges Verhalten als bloß temporäre?',
            ['weil erwartungen stärker reagieren', 'lebenseinkommen', 'langfristige zinsen', 'glaubwürdigkeit'],
            solutionBlock(
              'Erwartungskanal',
              [
                'Permanente und glaubwürdige Politik verändert erwartetes Lebenseinkommen und erwartete zukünftige Zinsen stärker.',
                'Dadurch reagieren Konsum, Investitionen und Preissetzung bereits heute kräftiger.'
              ]
            )
          ),
          textQuestion(
            'm1_pk3_3d',
            7,
            String.raw`Fallvariante: Ein negativer Angebotsschock verschiebt die kurzfristige Phillipskurve nach oben, während die Güternachfrage zunächst unverändert bleibt. Was passiert kurzfristig typischerweise mit Inflation und Arbeitslosigkeit relativ zur Ausgangssituation?`,
            ['stagflation', 'inflation steigt', 'output sinkt', 'u steigt', 'arbeitslosigkeit steigt'],
            solutionBlock(
              'Angebotsschock entlang der Nachfragelage',
              [
                'Die nach oben verschobene PC liefert bei gleicher kurzfristiger Aktivität höhere Inflation.',
                'Gleichzeitig wird das Output oft gedrückt; über Okun steigt die Arbeitslosigkeit — Stagflationstypische Spannung.'
              ]
            )
          )
        ],
        'phillips'
      )
    ]
  }
};
