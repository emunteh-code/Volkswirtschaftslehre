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
    title: 'Probeklausur I: GoB, Buchungssätze und Abschlusslogik',
    subtitle: '90-Minuten-Klausur zu Bilanzansatz, Doppik und Buchführungsorganisation',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 18,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Grundlagen und Buchführung',
            questions: [
              { id: 'ja_pk1_1', text: 'Die Bilanz zeigt den Erfolg einer Periode vollständig, die GuV ist deshalb nur Zusatzinformation.', correct: 'Falsch', feedback: 'Die GuV erklärt erst die Erfolgsentstehung der Periode.' },
              { id: 'ja_pk1_2', text: 'Jeder Geschäftsvorfall berührt in der doppelten Buchführung mindestens zwei Konten.', correct: 'Wahr', feedback: 'Genau diese Mehrkontenlogik stabilisiert die Bilanzgleichung.' },
              { id: 'ja_pk1_3', text: 'Die Inventur ist schon die verdichtete Bilanzdarstellung.', correct: 'Falsch', feedback: 'Die Inventur liefert Einzelbestände; die Bilanz verdichtet sie erst.' },
              { id: 'ja_pk1_4', text: 'Das Imparitätsprinzip verlangt eine frühere Erfassung drohender Verluste als erwarteter Gewinne.', correct: 'Wahr', feedback: 'Das ist Ausdruck kaufmännischer Vorsicht.' },
              { id: 'ja_pk1_5', text: 'Auf Aktivkonten stehen Zugänge im Haben.', correct: 'Falsch', feedback: 'Aktivkonten verzeichnen Zugänge im Soll.' },
              { id: 'ja_pk1_6', text: 'Ohne Beleg kann ein Geschäftsvorfall zwar gebucht, aber später nicht geprüft werden.', correct: 'Falsch', feedback: 'Ordnungsmäßige Buchführung verlangt gerade die Beleggrundlage.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Bilanzansatz und Buchungssatz',
        'Ein Unternehmen kauft eine Maschine im Wert von 80.000 € auf Ziel. Außerdem besteht das Risiko eines Prozesses, dessen Ausgang noch ungewiss ist.',
        [
          textQuestion(
            'ja_pk1_2a',
            8,
            'Warum ist beim Maschinenkauf zunächst kein Erfolgsaufwand zu buchen?',
            ['weil ein aktivzugang im anlagevermögen vorliegt', 'anlagevermögen', 'kein sofortiger aufwand'],
            solutionBlock(
              'Investition statt Aufwand',
              [
                'Die Maschine dient dem Unternehmen dauerhaft und wird daher zunächst als Vermögensgegenstand aktiviert.',
                'Der Aufwand entsteht erst periodisiert über die Abschreibung.'
              ]
            )
          ),
          textQuestion(
            'ja_pk1_2b',
            7,
            'Wie lautet die Grundlogik des Buchungssatzes?',
            ['maschinen an verbindlichkeiten', 'sachanlagen an verbindlichkeiten', 'anlagevermögen an verbindlichkeiten'],
            solutionBlock(
              'Bilanzverlängerung',
              [
                'Es steigt eine Aktivposition und gleichzeitig eine Passivposition.',
                'Deshalb liegt eine Bilanzverlängerung vor.'
              ],
              [String.raw`$$\text{Maschinen} \uparrow \qquad \text{Verbindlichkeiten} \uparrow$$`]
            )
          ),
          textQuestion(
            'ja_pk1_2c',
            7,
            'Welche Prüffrage entscheidet beim Prozessrisiko zuerst: Ansatz oder Bewertung?',
            ['ansatz', 'ansatzfrage', 'bilanzansatz'],
            solutionBlock(
              'Ansatz kommt zuerst',
              [
                'Bevor ein Betrag geschätzt wird, muss geklärt werden, ob überhaupt eine Rückstellung anzusetzen ist.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        20,
        'Organisationslogik der Buchführung',
        'Ein Prüfer verlangt die lückenlose Nachvollziehbarkeit mehrerer Geschäftsvorfälle.',
        [
          textQuestion(
            'ja_pk1_3a',
            7,
            'Welche Funktion erfüllt das Grundbuch im Unterschied zum Hauptbuch?',
            ['chronologische erfassung', 'zeitliche ordnung', 'grundbuch chronologisch'],
            solutionBlock(
              'Chronologische Erfassung',
              [
                'Das Grundbuch hält Geschäftsvorfälle zeitlich geordnet fest.',
                'Das Hauptbuch übernimmt danach die sachliche Ordnung nach Konten.'
              ]
            )
          ),
          textQuestion(
            'ja_pk1_3b',
            7,
            'Warum ist das Belegprinzip nicht nur ein Organisationsdetail, sondern klausurrelevant?',
            ['weil ordnungsmäßigkeit und nachprüfbarkeit davon abhängen', 'nachprüfbarkeit', 'beleg als buchungsgrundlage'],
            solutionBlock(
              'Nachprüfbarkeit',
              [
                'Ohne Beleg fehlt die prüfbare Grundlage des Buchungssatzes.',
                'Gerade in Theoriefragen zeigt das Belegprinzip, warum Buchführung kontrollfähig bleiben muss.'
              ]
            )
          ),
          textQuestion(
            'ja_pk1_3c',
            6,
            'Welchen praktischen Nutzen hat ein Kontenrahmen in Klausuraufgaben?',
            ['systematische einordnung', 'richtige kontenklasse', 'ordnungsschema'],
            solutionBlock(
              'Ordnungsfunktion',
              [
                'Ein Kontenrahmen gruppiert ähnliche Geschäftsvorfälle und erleichtert so die schnelle Kontenfindung.'
              ]
            )
          )
        ],
        'buchfuehrung_orga'
      )
    ]
  },

  probeklausur_2: {
    id: 'probeklausur_2',
    title: 'Probeklausur II: Anlage- und Umlaufvermögen',
    subtitle: '90-Minuten-Klausur zu Abschreibungen, Vorratsbewertung, Warenverkehr und Umsatzsteuer',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 18,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Bewertung und Vorräte',
            questions: [
              { id: 'ja_pk2_1', text: 'Planmäßige Abschreibungen reagieren auf außergewöhnliche Wertverluste.', correct: 'Falsch', feedback: 'Planmäßige Abschreibungen bilden den regulären Nutzungsverzehr ab.' },
              { id: 'ja_pk2_2', text: 'Beim Umlaufvermögen gilt das strenge Niederstwertprinzip.', correct: 'Wahr', feedback: 'Der niedrigere Wert ist am Stichtag anzusetzen.' },
              { id: 'ja_pk2_3', text: 'FIFO beeinflusst nur die Lagerdarstellung, aber nicht den Erfolg.', correct: 'Falsch', feedback: 'Ein anderer Endbestand verändert zugleich den Periodenaufwand.' },
              { id: 'ja_pk2_4', text: 'Umsatzsteuer ist für das Unternehmen grundsätzlich eigener Ertrag.', correct: 'Falsch', feedback: 'Sie wird treuhänderisch vereinnahmt und separat verbucht.' },
              { id: 'ja_pk2_5', text: 'Außerplanmäßige Abschreibungen können bei dauerhafter Wertminderung erforderlich sein.', correct: 'Wahr', feedback: 'Sie korrigieren den Buchwert außerhalb des planmäßigen Verlaufs.' },
              { id: 'ja_pk2_6', text: 'Bei einem Warenverkauf genügt es, nur den Erlös zu buchen.', correct: 'Falsch', feedback: 'Auch Warenabgang und Steuerlogik müssen mitgedacht werden.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Lineare Abschreibung',
        String.raw`Eine Maschine kostet $150.000$ €, hat keinen Restwert und eine Nutzungsdauer von $6$ Jahren.`,
        [
          textQuestion(
            'ja_pk2_2a',
            8,
            'Wie hoch ist die jährliche lineare Abschreibung?',
            ['25000', '25.000'],
            solutionBlock(
              'Lineare AfA',
              [
                'Die Anschaffungskosten werden gleichmäßig auf die Nutzungsjahre verteilt.'
              ],
              [String.raw`$$AfA = \frac{150.000}{6} = 25.000$$`]
            )
          ),
          textQuestion(
            'ja_pk2_2b',
            7,
            'Wie hoch ist der Buchwert nach drei Jahren?',
            ['75000', '75.000'],
            solutionBlock(
              'Buchwert nach drei Jahren',
              [
                'Nach drei Jahren sind drei Jahresabschreibungen abgezogen.'
              ],
              [String.raw`$$BW_3 = 150.000 - 3 \cdot 25.000 = 75.000$$`]
            )
          ),
          textQuestion(
            'ja_pk2_2c',
            7,
            'Warum ist die planmäßige Abschreibung kein Sonderfall des Niederstwertprinzips?',
            ['weil sie normalen nutzungsverzehr abbildet', 'regelmäßiger wertverzehr', 'nicht stichtagsbedingte wertminderung'],
            solutionBlock(
              'Unterschiedliche Logik',
              [
                'Die planmäßige Abschreibung verteilt den normalen Nutzungsverzehr systematisch über die Nutzungsdauer.',
                'Das Niederstwertprinzip reagiert dagegen auf stichtagsbezogene niedrigere Wertansätze.'
              ]
            )
          )
        ],
        'anlagevermoegen'
      ),
      textBlock(
        'Aufgabe 3',
        20,
        'Vorräte, Waren und Umsatzsteuer',
        'Ein Warenverkauf wird brutto fakturiert. Gleichzeitig soll der Endbestand eines Rohstofflagers bewertet werden.',
        [
          textQuestion(
            'ja_pk2_3a',
            7,
            'Warum muss beim Warenverkauf der Steueranteil vom Erlös getrennt werden?',
            ['weil die umsatzsteuer kein eigener ertrag ist', 'steueranteil', 'umsatzsteuer getrennt'],
            solutionBlock(
              'Nettoerlös und Steuer',
              [
                'Der Umsatzsteueranteil steht dem Unternehmen nicht als eigener Erfolg zu.',
                'Er ist deshalb getrennt vom Nettoerlös auszuweisen.'
              ]
            )
          ),
          textQuestion(
            'ja_pk2_3b',
            7,
            'Welcher allgemeine Bewertungsgrundsatz begrenzt den Endbestand beim Umlaufvermögen am Stichtag?',
            ['strenges niederstwertprinzip', 'niederstwertprinzip'],
            solutionBlock(
              'Stichtagsbewertung',
              [
                'Beim Umlaufvermögen ist stets der niedrigere Wert aus Anschaffungskosten und beizulegendem Wert maßgeblich.'
              ]
            )
          ),
          textQuestion(
            'ja_pk2_3c',
            6,
            'Warum wirkt sich die Wahl eines Verbrauchsfolgeverfahrens direkt auf den Gewinn aus?',
            ['weil endbestand und materialaufwand sich gemeinsam ändern', 'aufwand ändert sich', 'periodenerfolg'],
            solutionBlock(
              'Gewinnwirkung',
              [
                'Ein anderer Endbestandswert bedeutet automatisch einen anderen Materialaufwand.',
                'Damit ändert sich auch der Periodenerfolg.'
              ]
            )
          )
        ],
        'umlauf_waren_ust'
      )
    ]
  },

  probeklausur_3: {
    id: 'probeklausur_3',
    title: 'Probeklausur III: Eigenkapital, Fremdkapital, RAP und Erfolgsrechnung',
    subtitle: '90-Minuten-Klausur zu Gesellschaftsformen, Rückstellungen, Abgrenzung und GKV/UKV',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 18,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Passiva und Erfolgsrechnung',
            questions: [
              { id: 'ja_pk3_1', text: 'Die Eigenkapitalstruktur ist unabhängig von der Rechtsform stets identisch.', correct: 'Falsch', feedback: 'Gerade zwischen Personen- und Kapitalgesellschaften bestehen deutliche Unterschiede.' },
              { id: 'ja_pk3_2', text: 'Rückstellungen betreffen ungewisse Verpflichtungen.', correct: 'Wahr', feedback: 'Unsicherheit über Höhe, Fälligkeit oder Eintritt ist ihr Kernmerkmal.' },
              { id: 'ja_pk3_3', text: 'Rechnungsabgrenzung folgt dem Zahlungszeitpunkt und nicht der wirtschaftlichen Ursache.', correct: 'Falsch', feedback: 'Genau diese Verwechslung soll das Periodenprinzip verhindern.' },
              { id: 'ja_pk3_4', text: 'GKV und UKV führen bei korrekter Anwendung zum selben Jahresergebnis.', correct: 'Wahr', feedback: 'Sie unterscheiden sich in der Gliederung, nicht im Ergebnis.' },
              { id: 'ja_pk3_5', text: 'Eine sichere Lieferantenrechnung ist typischerweise eine Rückstellung.', correct: 'Falsch', feedback: 'Wenn Höhe und Fälligkeit feststehen, liegt eher eine Verbindlichkeit vor.' },
              { id: 'ja_pk3_6', text: 'Ein aktiver RAP kann entstehen, wenn heute gezahlt wird, der Aufwand aber teilweise das nächste Jahr betrifft.', correct: 'Wahr', feedback: 'Das ist der klassische transitorische Fall.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Fremdkapital und Rechnungsabgrenzung',
        'Ein Unternehmen erwartet Prozesskosten unbekannter Höhe und zahlt am 1.12. eine Jahresversicherung im Voraus.',
        [
          textQuestion(
            'ja_pk3_2a',
            8,
            'Warum spricht der Prozessfall eher für eine Rückstellung als für eine Verbindlichkeit?',
            ['weil höhe oder fälligkeit ungewiss sind', 'ungewisse verpflichtung', 'rückstellung'],
            solutionBlock(
              'Ungewisse Verpflichtung',
              [
                'Bei Rückstellungen ist die wirtschaftliche Ursache bereits gesetzt, die genaue Höhe oder Fälligkeit aber noch ungewiss.'
              ]
            )
          ),
          textQuestion(
            'ja_pk3_2b',
            7,
            'Welcher Abschlussgedanke steckt hinter der Abgrenzung der Versicherungszahlung?',
            ['periodengerechte erfolgsermittlung', 'periodenprinzip', 'wirtschaftliche zugehörigkeit'],
            solutionBlock(
              'Periodenprinzip',
              [
                'Die Zahlung wird nicht nach Kassenzeitpunkt, sondern nach wirtschaftlicher Zugehörigkeit auf die Perioden verteilt.'
              ]
            )
          ),
          textQuestion(
            'ja_pk3_2c',
            7,
            'Welcher Posten ist bei einer Vorauszahlung für das Folgejahr typischerweise zu bilden?',
            ['aktiver rap', 'aktive rechnungsabgrenzung', 'arap'],
            solutionBlock(
              'Aktiver RAP',
              [
                'Eine Vorauszahlung für Aufwand der Zukunft wird als aktiver Rechnungsabgrenzungsposten bilanziert.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        20,
        'Eigenkapital und Erfolgsrechnung',
        'Verglichen werden eine OHG und eine AG sowie die Darstellung des Erfolgs nach GKV und UKV.',
        [
          textQuestion(
            'ja_pk3_3a',
            7,
            'Warum ist die Rechtsform die erste Orientierungsfrage bei Eigenkapitalaufgaben?',
            ['weil die eigenkapitalstruktur davon abhängt', 'rechtsform bestimmt kapitalkonten', 'gesellschaftsform'],
            solutionBlock(
              'Rechtsformlogik',
              [
                'Eigenkapital wird je nach Gesellschaftsform unterschiedlich gegliedert und behandelt.',
                'Deshalb steuert die Rechtsform den ganzen weiteren Lösungsweg.'
              ]
            )
          ),
          textQuestion(
            'ja_pk3_3b',
            7,
            'Worin liegt der Kernunterschied zwischen GKV und UKV?',
            ['kostenarten vs funktionen', 'gliederung', 'darstellungslogik'],
            solutionBlock(
              'Unterschied der Verfahren',
              [
                'Das GKV gliedert Aufwendungen nach Arten, das UKV nach Funktionen.',
                'Die ökonomische Erfolgsgröße bleibt jedoch dieselbe.'
              ]
            )
          ),
          textQuestion(
            'ja_pk3_3c',
            6,
            'Warum ist die Aussage „GKV und UKV liefern unterschiedliche Gewinne“ fachlich falsch?',
            ['weil nur die darstellung anders ist', 'gleiches jahresergebnis', 'nicht verschiedene gewinne'],
            solutionBlock(
              'Gleiches Ergebnis',
              [
                'Beide Verfahren verarbeiten denselben Jahresstoff; sie ordnen ihn nur unterschiedlich an.'
              ]
            )
          )
        ]
      )
    ]
  }
};
