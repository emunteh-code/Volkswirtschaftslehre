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
    title: 'Probeklausur I: Offene Volkswirtschaft & Wechselkursmechanik',
    subtitle: 'Kursnahe 90-Minuten-Klausur zu ZB, PPP, UIP und Mundell-Fleming',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 24,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch und begründen Sie Ihre Entscheidung knapp anhand der Makro-II-Logik.',
        groups: [
          {
            context: 'Wechselkurs, PPP und Zahlungsbilanz',
            questions: [
              { id: 'pk1_1', text: 'Bei Mengennotierung bedeutet ein Anstieg von $E$ eine nominale Abwertung des Inlands.', correct: 'Falsch', feedback: 'Im Kurs gilt Mengennotierung. Ein Anstieg von $E$ bedeutet, dass eine Einheit Inland mehr Fremdwährung kauft: nominale Aufwertung.' },
              { id: 'pk1_2', text: 'Absolute PPP ist eine Aussage über Inflationsdifferenzen, relative PPP eine Aussage über Preisniveaus.', correct: 'Falsch', feedback: 'Es ist genau umgekehrt: absolute PPP ist ein Niveaukonzept, relative PPP eine Änderungsratenbeziehung.' },
              { id: 'pk1_3', text: 'Ein Leistungsbilanzdefizit muss spiegelbildlich durch Kapitalzufluss oder Reserveabbau finanziert werden.', correct: 'Wahr', feedback: String.raw`Aus $LB + KB + \Delta R = 0$ folgt, dass ein negatives $LB$ eine Gegenbuchung auf Finanzierungsseite braucht.` },
              { id: 'pk1_4', text: 'Wenn die Inlandsinflation über der Auslandsinflation liegt, impliziert relative PPP ceteris paribus eine nominale Abwertung des Inlands.', correct: 'Wahr', feedback: String.raw`Bei relativer PPP gilt $\hat E \approx \pi^* - \pi$. Ist $\pi > \pi^*$, so ist $\hat E < 0$, also nominale Abwertung in Mengennotierung.` },
              { id: 'pk1_5', text: 'Bei ungedeckter Zinsparität ist ein höherer Inlandszins mit einer erwarteten Aufwertung der Inlandswährung vereinbar.', correct: 'Falsch', feedback: 'Ein höherer Inlandszins muss über eine erwartete Abwertung oder geringere Aufwertung kompensiert werden.' }
            ]
          },
          {
            context: 'Offene Gütermärkte und Regime',
            questions: [
              { id: 'pk1_6', text: 'Der Staatsausgabenmultiplikator ist in der offenen Volkswirtschaft typischerweise kleiner als in der geschlossenen, weil ein Teil zusätzlicher Nachfrage über Importe abfließt.', correct: 'Wahr', feedback: 'Importleckagen dämpfen die Reaktion der Nachfrage nach inländischen Gütern.' },
              { id: 'pk1_7', text: 'Gilt die Marshall-Lerner-Bedingung, muss eine reale Abwertung die Handelsbilanz bereits unmittelbar verbessern.', correct: 'Falsch', feedback: 'Marshall-Lerner ist eine Langfristaussage. Kurzfristig kann die J-Kurve zunächst eine Verschlechterung zeigen.' },
              { id: 'pk1_8', text: 'Bei flexiblem Wechselkurs und perfekter Kapitalmobilität ist Geldpolitik im Mundell-Fleming-Modell typischerweise wirksamer als Fiskalpolitik.', correct: 'Wahr', feedback: 'Geldpolitik wirkt zusätzlich über den Wechselkurskanal; Fiskalpolitik wird durch Aufwertung stärker ausgekontert.' },
              { id: 'pk1_9', text: 'Ein Land kann festen Wechselkurs, freie Kapitalmobilität und autonome Geldpolitik dauerhaft gleichzeitig haben, wenn es genügend Reserven besitzt.', correct: 'Falsch', feedback: 'Das Trilemma ist eine strukturelle Restriktion, kein reines Reserveproblem.' },
              { id: 'pk1_10', text: 'Ein Currency Board ist glaubwürdiger als ein gewöhnlicher Peg, weil die Geldbasis härter an Reserven gebunden ist.', correct: 'Wahr', feedback: 'Genau diese harte Bindung erhöht die Glaubwürdigkeit, macht aber auch die Anpassung rigider.' },
              { id: 'pk1_11', text: 'Die Zahlungsbilanzidentität schließt aus, dass ein Land dauerhaft einen Leistungsbilanzüberschuss ohne entsprechende Kapitalbilanzposition oder Reserveveränderung hat.', correct: 'Wahr', feedback: 'Aus LB + KB + ΔR = 0 folgt: Ein LB-Saldo muss sich in KB und/oder Reserven spiegeln.' },
              { id: 'pk1_12', text: 'Bei flexiblen Wechselkursen und perfekter Kapitalmobilität verschiebt eine expansive Geldpolitik im üblichen MF-Zweikurvenbild primär die IS-Kurve nach rechts.', correct: 'Falsch', feedback: 'Geldpolitik wirkt typischerweise über die LM- bzw. ZP-Seite; eine IS-Verschiebung nach rechts wäre vor allem fiskalischer Natur.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        20,
        'PPP, UIP und Arbitrageintuition',
        String.raw`In Land A liegt das Preisniveau bei $P = 120$, in Land B bei $P^* = 150$. Der aktuelle nominale Wechselkurs in Mengennotierung beträgt $E = 1{,}10$. Der Inlandszins liegt bei $5\%$, der Auslandszins bei $2\%$.`,
        [
          textQuestion(
            'pk1_2a',
            6,
            'Berechne den realen Wechselkurs und beurteile, ob das Inland relativ teuer oder relativ günstig ist.',
            ['1.10', '1,10', 'reale aufwertung', 'relativ teuer'],
            solutionBlock(
              'Realen Wechselkurs sauber lesen',
              [
                'Der reale Wechselkurs kombiniert nominalen Kurs und Preisniveaus. In Mengennotierung gilt: je höher $\\varepsilon$, desto teurer sind Inlandsgüter relativ zum Ausland.',
                'Mit den gegebenen Zahlen liegt das Inland leicht real aufgewertet.'
              ],
              [
                String.raw`$$\varepsilon = \frac{E \cdot P}{P^*} = \frac{1{,}10 \cdot 120}{150} = 0{,}88.$$`
              ]
            )
          ),
          textQuestion(
            'pk1_2b',
            7,
            'Welchen PPP-Kurs impliziert absolute Kaufkraftparität? Vergleiche ihn mit dem beobachteten Kurs.',
            ['1.25', '1,25', 'beobachteter kurs zu niedrig', 'inland unterbewertet'],
            solutionBlock(
              'PPP-Kurs vom Marktkurs trennen',
              [
                'Absolute PPP liefert einen Referenzkurs, bei dem der Güterkorb in beiden Ländern gleich teuer wäre.',
                'Liegt der beobachtete Kurs darunter, kauft die Inlandswährung weniger Fremdwährung als PPP nahelegt.'
              ],
              [
                String.raw`$$E_{PPP} = \frac{P^*}{P} = \frac{150}{120} = 1{,}25.$$`
              ]
            )
          ),
          textQuestion(
            'pk1_2c',
            7,
            'Welche erwartete Wechselkursänderung verlangt die approximative UIP bei diesen Zinssätzen? Interpretiere das Vorzeichen.',
            ['3%', '3 %', 'abwertung', 'erwartete abwertung'],
            solutionBlock(
              'Zinsvorteil heißt erwartete Abwertung',
              [
                'Bei UIP kompensiert die erwartete Kursänderung genau die Zinsdifferenz.',
                'Der höhere Inlandszins ist also nicht gratis, sondern spiegelt eine erwartete Abwertung wider.'
              ],
              [
                String.raw`$$i - i^* \approx -\frac{E^e - E}{E} \Rightarrow 5\%-2\% = 3\%.$$`,
                String.raw`$$\frac{E^e - E}{E} \approx -3\%.$$`
              ]
            )
          )
        ],
        'wechselkurs'
      ),
      textBlock(
        'Aufgabe 3',
        20,
        'Offener Gütermarkt, Mundell-Fleming und Regimevergleich',
        String.raw`Betrachte eine kleine offene Volkswirtschaft mit perfekter Kapitalmobilität. Die Regierung erhöht die Staatsausgaben dauerhaft. Vergleiche flexible und feste Wechselkurse.`,
        [
          textQuestion(
            'pk1_3a',
            8,
            'Erkläre die Wirkung expansiver Fiskalpolitik bei flexiblem Wechselkurs im Mundell-Fleming-Modell.',
            ['aufwertung', 'nx sinken', 'geldpolitik nicht', 'crowding'],
            solutionBlock(
              'Flexible Kurse: Fiskalpolitik stößt auf Aufwertung',
              [
                'Die Fiskalausweitung verschiebt die IS-Kurve nach rechts. Dadurch steigt zunächst der Zins bzw. der Aufwertungsdruck.',
                'Unter perfekter Kapitalmobilität kommt es zur Aufwertung, Nettoexporte sinken und neutralisieren einen Teil der anfänglichen Nachfrageausweitung.'
              ]
            )
          ),
          textQuestion(
            'pk1_3b',
            6,
            'Warum ist dieselbe Fiskalpolitik bei festem Wechselkurs wirksamer?',
            ['zentralbank akkommodiert', 'geldmenge steigt', 'kein aufwertungsdruck'],
            solutionBlock(
              'Fester Kurs macht Fiskalpolitik stark',
              [
                'Bei festem Wechselkurs darf der Kurs nicht aufwerten. Die Zentralbank muss daher intervenieren und die Geldmenge ausweiten, um den Kurs zu stabilisieren.',
                'Das verhindert ein Zins-Crowding-out und verstärkt den Gütermarkteffekt.'
              ]
            )
          ),
          textQuestion(
            'pk1_3c',
            6,
            'Formuliere das Trilemma in einem Satz und wende es auf den Fall fester Kurse an.',
            ['nicht alle drei', 'fester wechselkurs', 'freie kapitalmobilität', 'keine autonome geldpolitik'],
            solutionBlock(
              'Trilemma auf den Punkt bringen',
              [
                'Ein Land kann nicht gleichzeitig festen Wechselkurs, freien Kapitalverkehr und autonome Geldpolitik haben.',
                'Wer den Kurs bindet und Kapital frei zirkulieren lässt, muss auf geldpolitische Autonomie verzichten.'
              ]
            )
          )
        ],
        'mundell_fleming'
      )
    ]
  },

  probeklausur_2: {
    id: 'probeklausur_2',
    title: 'Probeklausur II: Phillipskurve, Barro-Gordon & Taylor-Regel',
    subtitle: '90-Minuten-Klausur zu geldpolitischer Glaubwürdigkeit und Reaktionsregeln',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 24,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Phillipskurve und Zeitinkonsistenz',
            questions: [
              { id: 'pk2_1', text: 'Die kurzfristige Phillipskurve verschiebt sich nach oben, wenn Inflationserwartungen steigen.', correct: 'Wahr', feedback: 'Höhere erwartete Inflation hebt bei gegebener Arbeitslosigkeit die beobachtete Inflation.' },
              { id: 'pk2_2', text: 'Zeitinkonsistenz bedeutet, dass Politik ex ante und ex post genau dieselben Anreize hat.', correct: 'Falsch', feedback: 'Gerade der Anreizwechsel zwischen Ankündigung und Entscheidung ist der Kern des Problems.' },
              { id: 'pk2_3', text: 'Im diskretionären Barro-Gordon-Gleichgewicht ist die Arbeitslosigkeit dauerhaft unter ihrer natürlichen Rate.', correct: 'Falsch', feedback: 'Mit rationalen Erwartungen bleibt die Arbeitslosigkeit langfristig bei ihrer natürlichen Rate; nur die Inflation ist höher.' },
              { id: 'pk2_4', text: 'Eine unabhängige und regelgebundene Zentralbank ist ein möglicher institutioneller Fix gegen Inflationsbias.', correct: 'Wahr', feedback: 'Commitment, Unabhängigkeit und Reputation sind klassische Antworten auf Zeitinkonsistenz.' },
              { id: 'pk2_5', text: 'Taylor-Prinzip heißt: Der Nominalzins soll bei höherer Inflation weniger als eins zu eins steigen.', correct: 'Falsch', feedback: 'Das Taylor-Prinzip verlangt mehr als eine Eins-zu-eins-Reaktion, damit auch der Realzins steigt.' },
              { id: 'pk2_6', text: 'Liegt Inflation genau am Ziel, kann die Taylor-Regel trotzdem eine Zinssenkung nahelegen, wenn die Output- oder Arbeitslosigkeitslücke negativ ist.', correct: 'Wahr', feedback: 'Sobald ein Aktivitätsterm in der Regel steht, kann die Reaktion auch bei zielgenauer Inflation von der Konjunktur abhängen.' },
              { id: 'pk2_7', text: 'Wenn die Phillipskurve die Inflation nur von der Arbeitslosigkeit abhängig macht und Erwartungen ignoriert werden, ist das Modell für mittelfristige Inflationsdynamik ausreichend.', correct: 'Falsch', feedback: 'Erwartungsbildung verschiebt die Kurve; ohne Erwartungsterm fehlt zentrale mittelfristige Logik.' },
              { id: 'pk2_8', text: 'Ein glaubwürdiges Inflationsziel kann helfen, Inflationserwartungen zu verankern und damit die kurzfristige Phillipskurve nach unten zu verschieben.', correct: 'Wahr', feedback: 'Niedrigere verankerte Erwartungen reduzieren bei gegebener Arbeitslosigkeit die beobachtete Inflation.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Barro-Gordon formal',
        String.raw`Gegeben seien die Verlustfunktion $L = \tfrac{1}{2}\chi \pi^2 + \tfrac{1}{2}\lambda (u-u^*)^2$ und die Phillipskurve $u = u_n - \alpha(\pi-\pi^e)$. Es gelte $\chi = 2$, $\lambda = 1$, $\alpha = 1$ sowie $u_n-u^* = 2$ Prozentpunkte.`,
        [
          textQuestion(
            'pk2_2a',
            8,
            'Bestimme den diskretionären Inflationsbias bei rationalen Erwartungen.',
            ['1', '1%', '1 %'],
            solutionBlock(
              'Inflationsbias aus der Standardformel',
              [
                'Für das diskretionäre Gleichgewicht genügt die bekannte Bias-Formel. Der Beschäftigungsgewinn wird antizipiert; übrig bleibt positive Inflation.',
              ],
              [
                String.raw`$$\pi^{D} = \frac{\alpha \lambda}{\chi}(u_n-u^*) = \frac{1\cdot 1}{2}\cdot 2 = 1.$$`
              ]
            )
          ),
          textQuestion(
            'pk2_2b',
            7,
            'Warum führt dieser Bias nicht zu dauerhaft niedrigerer Arbeitslosigkeit?',
            ['erwartungen', 'antizipiert', 'u_n', 'natürlich'],
            solutionBlock(
              'Erwartungen neutralisieren den Beschäftigungstrick',
              [
                'Private Akteure rechnen mit dem Inflationsanreiz und setzen ihre Inflationserwartungen entsprechend hoch.',
                'Damit verschwindet die Überraschungskomponente und die Arbeitslosigkeit kehrt auf ihre natürliche Rate zurück.'
              ]
            )
          ),
          textQuestion(
            'pk2_2c',
            7,
            'Wie verändert ein konservativer Zentralbanker mit höherem Inflationsgewicht $\\chi$ den Bias?',
            ['bias sinkt', 'geringer', 'niedriger'],
            solutionBlock(
              'Mehr Inflationsaversion senkt den Bias',
              [
                'Je höher das Gewicht auf Inflation in der Verlustfunktion, desto kleiner wird der diskretionäre Inflationsanreiz.',
                'Formal sinkt der Bias, weil $\\chi$ im Nenner steht.'
              ]
            )
          )
        ],
        'barro_gordon'
      ),
      textBlock(
        'Aufgabe 3',
        24,
        'Taylor-Regel und geldpolitische Reaktion',
        String.raw`Eine Zentralbank folgt der Regel $i_t = r^* + \pi_t + a(\pi_t-\pi^*) + b(y_t-y_n)$ mit $r^*=1$, $\pi^*=2$, $a=0{,}8$ und $b=0{,}5$.`,
        [
          textQuestion(
            'pk2_3a',
            6,
            'Berechne den Leitzins bei aktueller Inflation von 3% und einer positiven Outputlücke von 1 Prozentpunkt.',
            ['4.3', '4,3'],
            solutionBlock(
              'Regel sauber einsetzen',
              [
                'Der Zielzins ergibt sich direkt aus natürlichem Realzins, aktueller Inflation, Inflationsabweichung und Outputlücke.'
              ],
              [
                String.raw`$$i = 1 + 3 + 0{,}8(3-2) + 0{,}5(1) = 4{,}3.$$`
              ]
            )
          ),
          textQuestion(
            'pk2_3b',
            6,
            'Prüfe, ob die Regel das Taylor-Prinzip erfüllt.',
            ['ja', 'mehr als eins', '1.8'],
            solutionBlock(
              'Steigung des Nominalzinses gegenüber Inflation',
              [
                'Die Reaktion des Nominalzinses auf Inflation beträgt hier $1+a = 1{,}8$.',
                'Damit steigt der Zins mehr als eins zu eins mit Inflation; das Taylor-Prinzip ist erfüllt.'
              ]
            )
          ),
          textQuestion(
            'pk2_3c',
            5,
            'Warum ist diese Regel glaubwürdiger als rein diskretionäre Geldpolitik?',
            ['transparenz', 'erwartungen', 'bindung', 'vorhersehbar'],
            solutionBlock(
              'Regeln verankern Erwartungen',
              [
                'Eine bekannte Reaktionsregel macht künftige Politik berechenbarer und diszipliniert den diskretionären Anreiz.',
                'Dadurch lassen sich Inflationserwartungen besser verankern und Zeitinkonsistenzkosten reduzieren.'
              ]
            )
          ),
          textQuestion(
            'pk2_3d',
            7,
            String.raw`Transfer: Aktuelle Inflation betrage $1\%$, die Outputlücke $(y-y_n)$ sei $-1$ Prozentpunkt (Konjunkturschwäche). Berechne den Leitzins nach derselben Regel.`,
            ['0.7', '0,7'],
            solutionBlock(
              'Konjunktur- und Deflationsnähe in einer Rechnung',
              [
                'Unter dem Ziel liegt die Inflation; die negative Outputlücke zieht zusätzlich nach unten.',
                'Beide Terme wirken in dieselbe Richtung: expansiver Zinsdruck.'
              ],
              [
                String.raw`$$i = 1 + 1 + 0{,}8(1-2) + 0{,}5(-1) = 2 - 0{,}8 - 0{,}5 = 0{,}7.$$`
              ]
            )
          )
        ],
        'taylor_regel'
      )
    ]
  },

  probeklausur_3: {
    id: 'probeklausur_3',
    title: 'Probeklausur III: Wachstum, Goldene Regel & Staatsverschuldung',
    subtitle: '90-Minuten-Klausur zu Produktionsfunktion, Solow und Schuldenlogik',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 24,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Produktionsfunktion und Solow',
            questions: [
              { id: 'pk3_1', text: 'Konstante Skalenerträge bedeuten, dass die Grenzerträge eines einzelnen Faktors konstant sind.', correct: 'Falsch', feedback: 'CRS bezieht sich auf proportionale Skalierung aller Inputs; einzelne Grenzerträge können trotzdem abnehmen.' },
              { id: 'pk3_2', text: 'Im Solow-Grundmodell erhöht eine dauerhaft höhere Sparquote das langfristige Niveau des Outputs pro Kopf, aber nicht dessen dauerhafte Wachstumsrate.', correct: 'Wahr', feedback: 'Ohne technischen Fortschritt erzeugt mehr Sparen nur einen Niveausprung.' },
              { id: 'pk3_3', text: 'Die Goldene Regel maximiert den Output pro Kopf im Steady State.', correct: 'Falsch', feedback: 'Sie maximiert den Konsum pro Kopf, nicht den Output.' },
              { id: 'pk3_4', text: 'Mit arbeitsvermehrendem technischem Fortschritt wächst der Output pro Kopf im Steady State mit $g_A$.', correct: 'Wahr', feedback: 'Im Solow-Modell mit Harrod-neutralem Fortschritt ist $g_A$ die dauerhafte Pro-Kopf-Wachstumsrate.' },
              { id: 'pk3_5', text: 'Ein positiver Primärsaldo senkt immer die Schuldenquote, selbst wenn der Zins deutlich über der Wachstumsrate liegt.', correct: 'Falsch', feedback: 'Entscheidend ist, ob der Primärsaldo groß genug ist, um $(r-g)b$ zu kompensieren.' },
              { id: 'pk3_6', text: 'Monetarisierung staatlicher Defizite kann kurzfristig die Refinanzierungsnot lindern, erhöht aber potenziell den Inflationsdruck.', correct: 'Wahr', feedback: 'Genau deshalb wird im Kurs Kreditfinanzierung der Geldfinanzierung gegenübergestellt.' },
              { id: 'pk3_7', text: 'Im Solow-Modell ohne technischen Fortschritt und ohne Bevölkerungswachstum ist der Steady-State-Kapitalstock positiv, auch wenn die Sparquote null ist.', correct: 'Falsch', feedback: 'Ohne Sparen fließt kein Investitionsvolumen zur Aufrechterhaltung; ohne Tech./Bevölkerung kollabiert $k$ auf null.' },
              { id: 'pk3_8', text: 'Liegt die reale Wachstumsrate $g$ über dem realen Zins $r$, kann die Schuldenquote $b$ sinken, selbst wenn der Primärsaldo null ist.', correct: 'Wahr', feedback: 'Die Dynamik enthält typischerweise $(r-g)b$; ist $g>r$, wirkt der Nennerterm schuldenmindernd.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Produktionsfunktion und Solow-Steady-State',
        String.raw`Gegeben sei die aggregierte Produktionsfunktion $Y = K^{0{,}4}N^{0{,}6}$. Im Solow-Modell ohne technischen Fortschritt und ohne Bevölkerungswachstum gelte $s=0{,}25$ und $\delta=0{,}10$.`,
        [
          textQuestion(
            'pk3_2a',
            8,
            'Leite die intensive Form her und bestimme die Steady-State-Kapitalintensität.',
            ['k*', '6.25', '6,25', '0.4'],
            solutionBlock(
              'Intensive Form und Steady State',
              [
                'Bei Cobb-Douglas mit konstanten Skalenerträgen folgt $y = k^{0{,}4}$.',
                'Im Steady State gilt $s k^{0{,}4} = \delta k$.'
              ],
              [
                String.raw`$$y = k^{0{,}4}$$`,
                String.raw`$$0{,}25 k^{0{,}4} = 0{,}10 k \Rightarrow k^{0{,}6} = 2{,}5 \Rightarrow k^* = 2{,}5^{\frac{1}{0{,}6}} \approx 4{,}60.$$`
              ]
            )
          ),
          textQuestion(
            'pk3_2b',
            7,
            'Erkläre, wie sich eine dauerhafte Erhöhung der Sparquote auf Kapitalintensität, Output pro Kopf und langfristige Wachstumsrate auswirkt.',
            ['niveau', 'k steigt', 'y steigt', 'wachstumsrate unverändert'],
            solutionBlock(
              'Niveaueffekt statt Dauereffekt',
              [
                'Mehr Sparen hebt den Steady-State-Wert von $k$ und damit auch das Niveau von $y$.',
                'Die langfristige Wachstumsrate pro Kopf bleibt ohne technischen Fortschritt dennoch null.'
              ]
            )
          ),
          textQuestion(
            'pk3_2c',
            7,
            'Was prüft die Goldene Regel und warum kann "mehr sparen" auch zu viel sein?',
            ['konsum', 'nicht output', 'überakkumulation', 'goldene regel'],
            solutionBlock(
              'Goldene Regel als Konsumkriterium',
              [
                'Die Goldene Regel fragt, welche Kapitalintensität den langfristigen Konsum maximiert.',
                'Wer über dieses Niveau hinaus spart, bindet zu viele Ressourcen im Kapitalstock und senkt den langfristigen Konsum trotz höheren Outputs.'
              ]
            )
          )
        ],
        'solow_basis'
      ),
      textBlock(
        'Aufgabe 3',
        24,
        'Schuldenquote, Primärsaldo und Monetarisierung',
        String.raw`Die Schuldenquote eines Landes beträgt zu Beginn 90% des BIP. Der reale Zinssatz liegt bei 4%, die Wachstumsrate bei 1%.`,
        [
          textQuestion(
            'pk3_3a',
            6,
            'Welcher Primärsaldo stabilisiert die Schuldenquote ungefähr?',
            ['2.7', '2,7', '2.7%', '2,7%'],
            solutionBlock(
              'Stabilisierenden Primärsaldo aus $(r-g)b$ lesen',
              [
                'Bei stabiler Schuldenquote gilt näherungsweise $ps^* = (r-g)b$.'
              ],
              [
                String.raw`$$ps^* = (0{,}04-0{,}01)\cdot 0{,}90 = 0{,}027.$$`
              ]
            )
          ),
          textQuestion(
            'pk3_3b',
            6,
            'Warum ist die Schuldenquote der bessere Prüfungsanker als der absolute Schuldenstand?',
            ['relativ', 'bip', 'nenner', 'wachstum'],
            solutionBlock(
              'Relative statt absolute Tragfähigkeit',
              [
                'Tragfähigkeit hängt davon ab, wie groß die Schulden im Verhältnis zur Wirtschaftsleistung sind.',
                'Wachstum kann eine hohe absolute Schuld tragbar machen, während stagnierendes BIP auch kleinere Schulden problematisch werden lässt.'
              ]
            )
          ),
          textQuestion(
            'pk3_3c',
            5,
            'Vergleiche Kreditfinanzierung und Monetarisierung zusätzlicher Staatsausgaben in einem Satz mit Blick auf Inflation und Zinslast.',
            ['monetarisierung', 'inflation', 'kredit', 'zinslast'],
            solutionBlock(
              'Zwei Finanzierungswege, zwei Lastprofile',
              [
                'Kreditfinanzierung erhöht die zukünftige Zinslast und hält den Anpassungsdruck über den Kapitalmarkt aufrecht.',
                'Monetarisierung senkt kurzfristig den Refinanzierungsdruck, kann aber über die Geldmenge schneller Inflationsdruck erzeugen.'
              ]
            )
          ),
          textQuestion(
            'pk3_3d',
            7,
            String.raw`Transfer: Gleiche Schuldenquote $b=0{,}90$, aber $r=4\%$ und $g=2\%$. Welcher Primärsaldo (als Anteil des BIP) hält $b$ näherungsweise konstant?`,
            ['1.8', '1,8', '1.8%', '1,8%'],
            solutionBlock(
              'Andere $(r-g)$-Konstellation',
              [
                'Die Stabilisierungsformel bleibt dieselbe; nur die Differenz zwischen Zins und Wachstum ändert sich.'
              ],
              [
                String.raw`$$ps^* = (0{,}04-0{,}02)\cdot 0{,}90 = 0{,}018.$$`
              ]
            )
          )
        ],
        'schuldenfinanzierung_monetarisierung'
      )
    ]
  }
};
