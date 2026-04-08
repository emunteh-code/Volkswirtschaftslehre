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

function solutionBlock(title, paragraphs) {
  return [
    `<p><strong>${title}</strong></p>`,
    ...paragraphs.map((paragraph) => `<p>${paragraph}</p>`)
  ].join('');
}

export const FULL_EXAMS = {
  probeklausur_1: {
    id: 'probeklausur_1',
    title: 'Probeklausur I: Methodik und Vertragsschluss',
    subtitle: '90-Minuten-Klausur zu Gutachtenstil, Willenserklärung, Dissens und Anfechtung',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 24,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Methodik und Vertrag',
            questions: [
              { id: 're_pk1_1', text: 'Im Gutachtenstil darf die Subsumtion entfallen, wenn das Ergebnis offensichtlich ist.', correct: 'Falsch', feedback: 'Gerade die Subsumtion zeigt, warum das Ergebnis trägt.' },
              { id: 're_pk1_2', text: 'Ein Vertrag setzt zwei korrespondierende Willenserklärungen voraus.', correct: 'Wahr', feedback: 'Angebot und Annahme bilden den Vertragsschluss.' },
              { id: 're_pk1_3', text: 'Schweigen ist im allgemeinen Privatrecht grundsätzlich eine Annahme.', correct: 'Falsch', feedback: 'Schweigen gilt grundsätzlich nicht als Willenserklärung.' },
              { id: 're_pk1_4', text: 'Dissens und Anfechtung sind identisch, weil in beiden Fällen kein wirksamer Vertrag bleibt.', correct: 'Falsch', feedback: 'Dissens betrifft fehlende Einigung, Anfechtung beseitigt ein zunächst wirksames Geschäft.' },
              { id: 're_pk1_5', text: 'Ein Erklärungsirrtum kann ein Anfechtungsgrund sein.', correct: 'Wahr', feedback: '§ 119 Abs. 1 Alt. 2 BGB ist gerade darauf zugeschnitten.' },
              { id: 're_pk1_6', text: 'Das bloße innere Einverständnis genügt für eine Annahme.', correct: 'Falsch', feedback: 'Es fehlt die nach außen gerichtete Kundgabe.' },
              { id: 're_pk1_7', text: 'Die Obersätze im Gutachten dürfen vage bleiben, wenn die Definitionen präzise sind.', correct: 'Falsch', feedback: 'Obersätze müssen die angekündigte Prüfungsstruktur klar widerspiegeln; Präzision gehört in alle Schichten.' },
              { id: 're_pk1_8', text: 'Wer im Gutachten das Ergebnis vor der Prüfung der letzten Tatbestandsmerkmale nennt, macht sich methodisch angreifbar.', correct: 'Wahr', feedback: 'Das Ergebnis soll aus der Subsumtion folgen, nicht ihr vorgreifen.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        24,
        'Willenserklärung und Vertragsschluss',
        'A bietet B per E-Mail seinen Laptop für 500 € an. B liest die Nachricht, antwortet zunächst nicht. Drei Tage später schreibt B: „Ich nehme zum Preis von 480 € an.“',
        [
          textQuestion(
            're_pk1_2a',
            6,
            'Liegt in As erster E-Mail ein Angebot vor?',
            ['ja', 'yes'],
            solutionBlock('Angebot', [
              'Ja. Die Erklärung ist auf einen Vertragsschluss gerichtet und enthält die wesentlichen Vertragsbestandteile.'
            ])
          ),
          textQuestion(
            're_pk1_2b',
            6,
            'Ist durch Bs erstes Schweigen ein Vertrag zu 500 € zustande gekommen?',
            ['nein', 'no'],
            solutionBlock('Schweigen', [
              'Nein. Schweigen ist im Privatrecht grundsätzlich keine Annahme.',
              'Mangels Annahmeerklärung fehlt es an einem Vertragsschluss.'
            ])
          ),
          textQuestion(
            're_pk1_2c',
            6,
            'Welcher methodische Fehler läge vor, wenn man nur schreibt: „B wollte den Vertrag innerlich, also liegt Annahme vor“?',
            ['fehlende kundgabe', 'innere zustimmung reicht nicht', 'keine willenserklärung'],
            solutionBlock('Kundgabeerfordernis', [
              'Eine Willenserklärung muss nach außen erkennbar abgegeben werden.',
              'Das bloße innere Einverständnis genügt nicht.'
            ])
          ),
          textQuestion(
            're_pk1_2d',
            6,
            'Was stellt Bs zweite E-Mail dar — Annahme des ursprünglichen Angebots oder ein neues (Gegen-)Angebot? Welche Konsequenz hat das für einen Vertrag zu 500 €?',
            ['gegenangebot', 'neues angebot', 'kein vertrag zu 500', 'keine annahme'],
            solutionBlock('Annahme mit Abweichung', [
              'Die Erklärung weicht im Preis vom Angebot ab und ist damit regelmäßig keine Annahme, sondern ein neues Angebot bzw. Gegenangebot.',
              'Ein Vertrag zu 500 € kommt dadurch nicht zustande; A müsste gesondert zusagen, will er zu 480 € verkaufen.'
            ])
          )
        ],
        'willenserklaerung'
      ),
      textBlock(
        'Aufgabe 3',
        24,
        'Dissens und Anfechtung',
        'A und B haben einen schriftlichen Kaufvertrag über den Laptop zu 500 € geschlossen. Später behauptet A, er habe 5.000 € meinen wollen, und wolle anfechten.',
        [
          textQuestion(
            're_pk1_3a',
            6,
            'Warum ist hier eher Anfechtung als Dissens zu prüfen?',
            ['weil zunächst deckungsgleiche erklärungen vorliegen', 'anfechtung', 'vertrag zunächst wirksam'],
            solutionBlock('Anknüpfungspunkt', [
              'Wenn Angebot und Annahme objektiv deckungsgleich sind, liegt zunächst ein Vertrag vor.',
              'Der Fehler wird dann über die Anfechtung korrigiert, nicht über Dissens.'
            ])
          ),
          textQuestion(
            're_pk1_3b',
            6,
            'Welche zusätzlichen Elemente braucht eine wirksame Anfechtung außer dem Irrtum?',
            ['anfechtungserklärung und frist', 'frist', 'erklärung'],
            solutionBlock('Vollständige Anfechtung', [
              'Es braucht eine Anfechtungserklärung und die Einhaltung der gesetzlichen Frist.'
            ])
          ),
          textQuestion(
            're_pk1_3c',
            6,
            'Welche Rechtsfolge hat eine erfolgreiche Anfechtung grundsätzlich?',
            ['nichtigkeit ex tunc', 'ex tunc', 'rückwirkend nichtig'],
            solutionBlock('Rechtsfolge', [
              'Das angefochtene Rechtsgeschäft ist grundsätzlich ex tunc nichtig.'
            ])
          ),
          textQuestion(
            're_pk1_3d',
            6,
            'Warum scheitert eine Anfechtung typischerweise, wenn A nur sagt, er habe sich „rechnend geirrt“, weil der Gewinn zu gering ist?',
            ['kalkulationsirrtum', 'kein erklärungsirrtum', 'nicht inhalt der erklärung'],
            solutionBlock('Abgrenzung Irrtumsarten', [
              'Ein bloßer Kalkulations- oder Motivationsirrtum betrifft regelmäßig nicht den Erklärungsinhalt im Sinne der anfechtungsfähigen Irrtumstypen.',
              'Prüfungslogik: Erklärungsinhalt vs. bloße interne Rechnung — sonst wäre jeder Preis nachträglich angreifbar.'
            ])
          )
        ],
        'anfechtung'
      )
    ]
  },

  probeklausur_2: {
    id: 'probeklausur_2',
    title: 'Probeklausur II: Zurechnung und AGB',
    subtitle: '90-Minuten-Klausur zu Geschäftsfähigkeit, Stellvertretung und AGB-Recht',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 24,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Geschäftsfähigkeit und Vertretung',
            questions: [
              { id: 're_pk2_1', text: 'Ein beschränkt Geschäftsfähiger ist stets geschäftsunfähig.', correct: 'Falsch', feedback: 'Er kann wirksam handeln, aber oft nur mit Zustimmung.' },
              { id: 're_pk2_2', text: 'Ein lediglich rechtlich vorteilhaftes Geschäft kann ein Minderjähriger grundsätzlich ohne Zustimmung abschließen.', correct: 'Wahr', feedback: 'Genau dafür enthält das Gesetz eine Erleichterung.' },
              { id: 're_pk2_3', text: 'Bei der Stellvertretung werden die Rechtsfolgen grundsätzlich dem Vertreter zugerechnet.', correct: 'Falsch', feedback: 'Sie treffen bei wirksamer Vertretung den Vertretenen.' },
              { id: 're_pk2_4', text: 'Ohne Vertretungsmacht ist ein Geschäft regelmäßig schwebend unwirksam.', correct: 'Wahr', feedback: 'Es hängt dann von der Genehmigung ab.' },
              { id: 're_pk2_5', text: 'AGB werden unabhängig von ihrer Einbeziehung inhaltlich kontrolliert.', correct: 'Falsch', feedback: 'Die Einbeziehung ist die vorgelagerte Prüfungsstufe.' },
              { id: 're_pk2_6', text: 'Überraschende Klauseln können schon vor der eigentlichen Inhaltskontrolle ausscheiden.', correct: 'Wahr', feedback: '§ 305c BGB greift auf dieser Stufe ein.' },
              { id: 're_pk2_7', text: 'Ein Geschäft ohne Vertretungsmacht ist von vornherein unwirksam und kann nicht mehr wirksam werden.', correct: 'Falsch', feedback: 'Regelmäßig liegt Schwebende Unwirksamkeit vor; Genehmigung kann wirksam machen.' },
              { id: 're_pk2_8', text: 'Wer im Namen eines anderen handelt, muss dem Vertragspartner erkennbar machen, für wen er rechtlich handelt.', correct: 'Wahr', feedback: 'Offenkundigkeit des Vertretungsverhältnisses ist prüfungsstandardsmäßig zentral.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        24,
        'Geschäftsfähigkeit und Stellvertretung',
        'Der 16-jährige S schließt ohne Zustimmung seiner Eltern einen Ratenkauf ab. Mitarbeiter M bestellt im Namen der GmbH Material. Intern gilt für M eine Einkaufsgrenze von 5.000 €; der Auftrag lautet über 8.000 €.',
        [
          textQuestion(
            're_pk2_2a',
            6,
            'Warum ist der Ratenkauf des S nicht lediglich rechtlich vorteilhaft?',
            ['weil zahlungspflichten entstehen', 'rechtlicher nachteil', 'verpflichtung'],
            solutionBlock('Rechtlicher Nachteil', [
              'Der Minderjährige verpflichtet sich zu Zahlungen.',
              'Schon diese rechtliche Belastung genügt, um die bloße Vorteilslogik auszuschließen.'
            ])
          ),
          textQuestion(
            're_pk2_2b',
            6,
            'Welche drei Punkte sind bei der Stellvertretung standardmäßig zu prüfen?',
            ['eigene willenserklärung fremder name vertretungsmacht', 'eigene willenserklärung', 'vertretungsmacht'],
            solutionBlock('Dreischritt der Stellvertretung', [
              'Eigene Willenserklärung des Vertreters, Handeln im fremden Namen und Vertretungsmacht.'
            ])
          ),
          textQuestion(
            're_pk2_2c',
            6,
            'Warum ist die Offenkundigkeit für den Geschäftspartner wichtig?',
            ['weil er wissen muss mit wem er kontrahiert', 'schutz des drittens', 'fremder name'],
            solutionBlock('Schutzfunktion', [
              'Der Geschäftspartner muss erkennen können, wem die Erklärung zugerechnet werden soll und wer sein Vertragspartner wird.'
            ])
          ),
          textQuestion(
            're_pk2_2d',
            6,
            'Welches zusätzliche Problem stellt die interne 5.000-€-Grenze für den Lieferanten dar, selbst wenn M Prokurist ist?',
            ['interne beschränkung', 'duldung', 'missbrauch', 'grenze dritter'],
            solutionBlock('Interne Zuständigkeiten vs. Außenverhältnis', [
              'Interne Limits binden Dritte regelmäßig nicht, sofern äußere Vertretungsmacht besteht und kein erkennbarer Missbrauch vorliegt.',
              'Prüfungsfalle: nicht mit fehlender Vertretungsmacht verwechseln — hier geht es um Organ-interne Kompetenz und Duldung durch die GmbH.'
            ])
          )
        ],
        'geschaeftsfaehigkeit'
      ),
      textBlock(
        'Aufgabe 3',
        24,
        'AGB-Recht',
        'Ein Unternehmen verwendet vorformulierte Bedingungen. Beim Vertragsschluss im Ladengeschäft werden sie nicht erwähnt; sie stehen nur auf der Rückseite des Kassenbons in Kleingedruckt und widersprechen klar dem, was der Kunde mündlich zugesagt bekam.',
        [
          textQuestion(
            're_pk2_3a',
            6,
            'Wo beginnt die Prüfung?',
            ['einbeziehung', 'einbeziehung der agb'],
            solutionBlock('Erste Prüfungsstufe', [
              'Zuerst ist zu prüfen, ob die AGB überhaupt wirksam einbezogen wurden.'
            ])
          ),
          textQuestion(
            're_pk2_3b',
            6,
            'Warum reicht eine möglicherweise harte Klausel allein noch nicht für eine saubere Lösung?',
            ['weil erst die einbeziehung geklärt werden muss', 'einbeziehung', 'prüfungsreihenfolge'],
            solutionBlock('Prüfungsreihenfolge', [
              'Ohne Einbeziehung gehört die Klausel noch nicht zum Vertrag.',
              'Erst danach ist die Inhaltskontrolle sinnvoll.'
            ])
          ),
          textQuestion(
            're_pk2_3c',
            6,
            'Welcher Gedanke steckt hinter der AGB-Kontrolle im Massengeschäft?',
            ['schutz vor einseitiger benachteiligung', 'schutz', 'unangemessene benachteiligung'],
            solutionBlock('Schutzzweck', [
              'Das Recht schützt den Vertragspartner vor unangemessener einseitiger Belastung durch vorformulierte Bedingungen.'
            ])
          ),
          textQuestion(
            're_pk2_3d',
            6,
            'Warum kann die Einbeziehung schon scheitern, bevor die eigentliche Inhaltskontrolle der AGB greift?',
            ['überraschend', 'unerwartet', 'transparenz', '305c', 'keine hinreichende einbeziehung'],
            solutionBlock('Einbeziehung und Überraschung', [
              'Überraschende oder intransparenterweise mitgeteilte Klauseln können bereits auf der Einbeziehungsstufe ausscheiden.',
              'Widerspruch zur mündlich Gesagten erschwert zusätzlich die Annahme wirksamer Einbeziehung.'
            ])
          )
        ],
        'agb'
      )
    ]
  },

  probeklausur_3: {
    id: 'probeklausur_3',
    title: 'Probeklausur III: Schuldrecht AT',
    subtitle: '90-Minuten-Klausur zu Pflichtverletzung, Schadensersatz, Rücktritt und Widerruf',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 24,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Schuldrecht AT',
            questions: [
              { id: 're_pk3_1', text: 'Schadensersatz setzt immer eine dem Schuldverhältnis zuordenbare Pflichtverletzung voraus.', correct: 'Wahr', feedback: 'Genau das ist der Ausgangspunkt des Anspruchs.' },
              { id: 're_pk3_2', text: 'Schadensersatz statt der Leistung kommt regelmäßig ohne Fristsetzung aus.', correct: 'Falsch', feedback: 'Gerade die Fristsetzung ist meist zentrale Voraussetzung.' },
              { id: 're_pk3_3', text: 'Nebenpflichtverletzungen können ebenfalls Schadensersatz auslösen.', correct: 'Wahr', feedback: 'Nicht nur Hauptleistungspflichten sind relevant.' },
              { id: 're_pk3_4', text: 'Rücktritt und Widerruf beruhen auf demselben Normzweck.', correct: 'Falsch', feedback: 'Rücktritt reagiert auf Leistungsstörung, Widerruf auf Verbraucherschutz.' },
              { id: 're_pk3_5', text: 'Ein Verbraucherwiderruf braucht keine Pflichtverletzung des Unternehmers.', correct: 'Wahr', feedback: 'Er ist ein eigenständiges Gestaltungsrecht.' },
              { id: 're_pk3_6', text: 'Rücktritt ist typischerweise ein Lösungsrecht wegen Vertragsstörung.', correct: 'Wahr', feedback: 'Genau das ist sein Kern.' },
              { id: 're_pk3_7', text: 'Der Verbraucher kann den Widerruf nur ausüben, wenn der Unternehmer mangelhaft geleistet hat.', correct: 'Falsch', feedback: 'Widerruf ist ein eigenständiges Fernabsatz-/Verbraucherschutzinstrument und knüpft nicht zwingend an Mängel.' },
              { id: 're_pk3_8', text: 'Neben Rücktritt wegen Pflichtverletzung kann unter weiteren Voraussetzungen auch Schadensersatz in Betracht kommen.', correct: 'Wahr', feedback: 'Je nach Fallkette sind mehrere Ansprüche parallel oder nacheinander zu prüfen.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        24,
        'Schadensersatz statt der Leistung',
        'V liefert mangelhaft. K setzt eine angemessene Nachfrist mit Ablehnungsandrohung; V liefert erneut mangelhaft. Jetzt verlangt K Schadensersatz statt der Leistung.',
        [
          textQuestion(
            're_pk3_2a',
            6,
            'Warum ist die Fristsetzung hier zentral, bevor über Schadensersatz statt der Leistung entschieden wird?',
            ['weil schadensersatz statt der leistung regelmäßig eine fristsetzung braucht', 'fristsetzung', 'zweite andienung'],
            solutionBlock('Fristsetzung', [
              'Bei Schadensersatz statt der Leistung soll der Schuldner regelmäßig noch eine Chance zur ordnungsgemäßen Leistung erhalten.',
              'Erst nach fruchtlosem Fristablauf ist der Weg frei — die Fallkette macht das sichtbar.'
            ])
          ),
          textQuestion(
            're_pk3_2b',
            6,
            'Welcher Prüfungspunkt wird neben der Pflichtverletzung fast immer mitabgefragt?',
            ['vertretenmüssen', 'vertretenmuessen'],
            solutionBlock('Vertretenmüssen', [
              'Neben der Pflichtverletzung ist regelmäßig auch das Vertretenmüssen des Schuldners zu prüfen.'
            ])
          ),
          textQuestion(
            're_pk3_2c',
            6,
            'Warum genügt bloße Unzufriedenheit mit der Leistung noch nicht für Schadensersatz?',
            ['weil eine konkrete pflichtverletzung vorliegen muss', 'pflichtverletzung', 'schuldverhältnis'],
            solutionBlock('Konkrete Pflichtverletzung', [
              'Schadensersatz knüpft an eine rechtlich relevante Pflichtverletzung an, nicht an bloße Enttäuschung.'
            ])
          ),
          textQuestion(
            're_pk3_2d',
            6,
            'Neben Schadensersatz statt der Leistung: Welches weitere Lösungsinstrument ist nach erfolgter Nachfrist mit Fristablauf typischerweise zusätzlich zu erwägen (nur Benennung)?',
            ['rücktritt', 'ruecktritt'],
            solutionBlock('Parallelstruktur', [
              'Nach fruchtlosem Fristablauf kommt neben Ersatz statt Leistung regelmäßig auch der Rücktritt vom Vertrag in den Blick.',
              'In der Klausur sauber trennen: Anspruchsgrundlagen nacheinander oder in Unterabschnitten prüfen.'
            ])
          )
        ],
        'schadensersatz'
      ),
      textBlock(
        'Aufgabe 3',
        24,
        'Rücktritt und Verbraucherwiderruf',
        'Ein Verbraucher kauft online. Die Ware ist mangelfrei und pünktlich geliefert. Innerhalb der Widerrufsfrist erklärt er den Widerruf, hat die Sache aber bereits stark benutzt und verschmutzt.',
        [
          textQuestion(
            're_pk3_3a',
            6,
            'Welcher Prüfungsweg liegt näher: Rücktritt oder Widerruf?',
            ['widerruf'],
            solutionBlock('Natürlicher Einstieg', [
              'Ohne Leistungsstörung ist der Widerruf der naheliegendere Weg, nicht der Rücktritt.'
            ])
          ),
          textQuestion(
            're_pk3_3b',
            6,
            'Warum wäre es methodisch falsch, sofort nur den Rücktritt zu prüfen?',
            ['weil keine leistungsstörung vorliegt', 'widerruf', 'falscher normzweck'],
            solutionBlock('Normzweck', [
              'Rücktritt reagiert auf Vertragsstörungen.',
              'Bei einer bloßen Umentscheidung des Verbrauchers passt der Verbraucherschutzgedanke des Widerrufs besser.'
            ])
          ),
          textQuestion(
            're_pk3_3c',
            6,
            'Welcher Unterschied im Normzweck sollte in der Klausur ausdrücklich benannt werden?',
            ['rücktritt leistungsstörung widerruf verbraucherschutz', 'verbraucherschutz', 'leistungsstörung'],
            solutionBlock('Zweckdifferenz', [
              'Rücktritt = Reaktion auf Störung.',
              'Widerruf = Schutzrecht für Verbraucher in besonders sensiblen Vertragssituationen.'
            ])
          ),
          textQuestion(
            're_pk3_3d',
            6,
            'Welche prüfungsrelevante Folge kann sich aus übermäßiger Benutzung für den Widerruf ergeben (qualitativ)?',
            ['wertersatz', 'wertminderung', 'verschlechterung', 'anspruch eingeschränkt'],
            solutionBlock('Wertersatz und Rückgabe', [
              'Hat der Verbraucher die Sache über das zur Prüfung Nötige hinaus genutzt, kann ein Wertersatz- oder Wertminderungsrisiko entstehen.',
              'Der Widerruf selbst kann stehen bleiben, die Abwicklung wird aber ökonomisch ungleicher — genau dafür ist Platz im Gutachten.'
            ])
          )
        ],
        'verbraucherwiderruf'
      )
    ]
  }
};

