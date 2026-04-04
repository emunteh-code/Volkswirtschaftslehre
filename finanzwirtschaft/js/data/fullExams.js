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
    title: 'Probeklausur I: Liquidität, intertemporale Wahl und Kapitalwert',
    subtitle: '90-Minuten-Klausur zu Fristenlogik, Budgetgerade und Fisher-Separation',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 18,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Grundlagen und Investitionslogik',
            questions: [
              { id: 'fw_pk1_1', text: 'Ein Projekt mit positivem Endsaldo ist immer auch kurzfristig liquiditätssicher.', correct: 'Falsch', feedback: 'Zwischenzeitliche Finanzierungslücken können trotz positivem Endsaldo auftreten.' },
              { id: 'fw_pk1_2', text: 'Die goldene Bilanzregel ist eine Fristenregel.', correct: 'Wahr', feedback: 'Sie verbindet die Laufzeit von Vermögensbindung und Finanzierung.' },
              { id: 'fw_pk1_3', text: 'Links vom Ausstattungspunkt der intertemporalen Budgetgeraden liegt Kreditaufnahme.', correct: 'Falsch', feedback: 'Links liegt typischerweise Sparen; rechts Kreditaufnahme.' },
              { id: 'fw_pk1_4', text: 'Ein positiver Kapitalwert bedeutet Vermögenszuwachs relativ zur Kapitalmarktalternative.', correct: 'Wahr', feedback: 'Genau das ist die ökonomische Bedeutung des Kapitalwerts.' },
              { id: 'fw_pk1_5', text: 'Fisher-Separation funktioniert auch dann unverändert, wenn Soll- und Habenzinsen stark auseinanderfallen.', correct: 'Falsch', feedback: 'Gerade dann wird die Trennungslogik problematisch.' },
              { id: 'fw_pk1_6', text: 'Finanzwirtschaft fragt nur nach Rendite, nicht nach Liquidität.', correct: 'Falsch', feedback: 'Liquidität ist ein eigener Kern des Fachs.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Kapitalwert und Fisher-Separation',
        String.raw`Ein Projekt erfordert in $t=0$ eine Auszahlung von $1.000$ und liefert in $t=1$ einen sicheren Rückfluss von $1.120$. Der Marktzinssatz beträgt $8\%$.`,
        [
          textQuestion(
            'fw_pk1_2a',
            8,
            'Wie groß ist der Kapitalwert?',
            ['37.04', '37,04', '37'],
            solutionBlock(
              'Kapitalwert berechnen',
              [
                'Der sichere Rückfluss wird mit dem Marktzinssatz auf den Gegenwartszeitpunkt diskontiert und anschließend mit der Anschaffungsauszahlung verrechnet.'
              ],
              [String.raw`$$K_0 = -1.000 + \frac{1.120}{1{,}08} \approx 37{,}04$$`]
            )
          ),
          textQuestion(
            'fw_pk1_2b',
            7,
            'Welche Vorteilhaftigkeitsaussage folgt daraus?',
            ['projekt ist vorteilhaft', 'durchführen', 'vermoegenszuwachs'],
            solutionBlock(
              'Vermögensurteil',
              [
                'Der positive Kapitalwert zeigt, dass das Projekt gegenüber der Kapitalmarktalternative Vermögen schafft.'
              ]
            )
          ),
          textQuestion(
            'fw_pk1_2c',
            7,
            'Warum ist dies zugleich ein gutes Beispiel für Fisher-Separation?',
            ['weil investition und konsumwahl bei vollkommenem kapitalmarkt getrennt werden koennen', 'fisher separation'],
            solutionBlock(
              'Trennungslogik',
              [
                'Zuerst wird das wertmaximierende Projekt über den Kapitalwert gewählt.',
                'Danach kann der gewünschte Konsumpfad getrennt über den Kapitalmarkt eingestellt werden.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        20,
        'Liquiditätsplanung und Fristenstruktur',
        'Eine Investition erzeugt zunächst hohe Auszahlungen, der erste größere Rückfluss kommt aber erst spät.',
        [
          textQuestion(
            'fw_pk1_3a',
            7,
            'Welche Größe zeigt den minimal benötigten Finanzierungsrahmen?',
            ['maximaler negativer kumulierter saldo', 'kapitalbedarf', 'tiefster kumulierter saldo'],
            solutionBlock(
              'Kapitalbedarfsmaß',
              [
                'Der tiefste Punkt der kumulierten Zahlungsreihe markiert den maximalen Kapitalbedarf.'
              ]
            )
          ),
          textQuestion(
            'fw_pk1_3b',
            7,
            'Warum ist ein positiver Endsaldo allein keine Entwarnung?',
            ['weil zwischendurch eine liquiditaetsluecke entstehen kann', 'zwischenfinanzierung', 'liquiditaet'],
            solutionBlock(
              'Zwischenlücke',
              [
                'Liquiditätsrisiken entstehen an Zwischenzeitpunkten und nicht erst im Endergebnis.'
              ]
            )
          ),
          textQuestion(
            'fw_pk1_3c',
            6,
            'Welcher Grundgedanke steckt hinter der goldenen Bilanzregel?',
            ['langfristige bindung langfristig finanzieren', 'fristenkongruenz', 'langfristiges vermoegen'],
            solutionBlock(
              'Fristenkongruenz',
              [
                'Langfristige Vermögensbindung soll mit langfristig verfügbarem Kapital finanziert werden.'
              ]
            )
          )
        ]
      )
    ]
  },

  probeklausur_2: {
    id: 'probeklausur_2',
    title: 'Probeklausur II: Zeitwert, Renten und interner Zinsfuß',
    subtitle: '90-Minuten-Klausur zu Auf-/Abzinsung, Endwert, Kapitalwertprofil und IZF',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 18,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Dynamische Investitionsrechnung',
            questions: [
              { id: 'fw_pk2_1', text: 'Kapitalwert- und Endwertmethode müssen bei gleichem Zinssatz dasselbe Vorteilhaftigkeitsurteil liefern.', correct: 'Wahr', feedback: 'Sie bewerten nur auf unterschiedliche Zeitpunkte.' },
              { id: 'fw_pk2_2', text: 'Eine Zahlung in t=0 wird in der Kapitalwertmethode zusätzlich abgezinst.', correct: 'Falsch', feedback: 'Sie liegt bereits im Bewertungszeitpunkt.' },
              { id: 'fw_pk2_3', text: 'Der IZF ist der Zinssatz, bei dem die Kapitalwertfunktion Null wird.', correct: 'Wahr', feedback: 'Das ist die definitorische Kernidee.' },
              { id: 'fw_pk2_4', text: 'Ein höherer IZF bedeutet bei Projektvergleichen immer automatisch den besseren Vermögenseffekt.', correct: 'Falsch', feedback: 'Skalierungsprobleme machen den Kapitalwert oft zur robusteren Referenz.' },
              { id: 'fw_pk2_5', text: 'Mehrere Vorzeichenwechsel können mehrere interne Zinsfüße erzeugen.', correct: 'Wahr', feedback: 'Gerade dann wird der IZF mehrdeutig.' },
              { id: 'fw_pk2_6', text: 'Eine Zeitachse ist in dynamischen Finanzaufgaben nur optisches Hilfsmittel.', correct: 'Falsch', feedback: 'Sie verhindert die wichtigsten Strukturfehler.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Barwert und Endwert',
        String.raw`Ein Betrag von $2.000$ wird heute angelegt. Der Zinssatz beträgt konstant $5\%$ pro Jahr. Gesucht ist der Endwert nach drei Jahren.`,
        [
          textQuestion(
            'fw_pk2_2a',
            8,
            'Wie groß ist der Endwert nach drei Jahren?',
            ['2315.25', '2315,25', '2315'],
            solutionBlock(
              'Aufzinsung',
              [
                'Der Betrag wird mit dem Aufzinsungsfaktor über drei Perioden multipliziert.'
              ],
              [String.raw`$$EW_3 = 2.000 \cdot 1{,}05^3 = 2.315{,}25$$`]
            )
          ),
          textQuestion(
            'fw_pk2_2b',
            7,
            'Warum ist diese Rechnung das Spiegelbild einer Abzinsung?',
            ['weil nur die transformationsrichtung wechselt', 'gleiche zeitwertlogik', 'spiegelbild'],
            solutionBlock(
              'Spiegelbildliche Logik',
              [
                'Auf- und Abzinsung verwenden dieselbe Zeitwertlogik, nur mit unterschiedlicher Rechenrichtung.'
              ]
            )
          ),
          textQuestion(
            'fw_pk2_2c',
            7,
            'Welcher methodische Fehler wäre besonders typisch, wenn zusätzlich eine Zahlung in t=0 vorkommt?',
            ['sie noch einmal abzuzinsen', 't0 falsch transformieren', 'zahlung in t0 diskontieren'],
            solutionBlock(
              'Startzeitpunktfehler',
              [
                'Zahlungen im Bewertungszeitpunkt werden nicht noch einmal transformiert.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        20,
        'IZF und Kapitalwertfunktion',
        String.raw`Ein Projekt hat den internen Zinsfuß $r^* = 11\%$. Der relevante Kalkulationszins beträgt $7\%$.`,
        [
          textQuestion(
            'fw_pk2_3a',
            7,
            'Ist der Kapitalwert bei 7 % positiv oder negativ?',
            ['positiv'],
            solutionBlock(
              'Vergleich von IZF und Marktzins',
              [
                'Liegt der Kalkulationszins unter dem internen Zinsfuß, ist der Kapitalwert positiv.'
              ]
            )
          ),
          textQuestion(
            'fw_pk2_3b',
            7,
            'Welche zusätzliche Information liefert die Kapitalwertfunktion gegenüber dem bloßen IZF?',
            ['zinssensitivitaet', 'sensitivität', 'wie der wert auf zinsänderungen reagiert'],
            solutionBlock(
              'Profil statt Punkt',
              [
                'Die Kapitalwertfunktion zeigt die gesamte Zinsabhängigkeit des Projektwerts und nicht nur den Nullpunkt.'
              ]
            )
          ),
          textQuestion(
            'fw_pk2_3c',
            6,
            'Warum bleibt der Kapitalwert bei Ausschlussprojekten trotz IZF attraktivere Referenzgröße?',
            ['weil er den absoluten vermoegenszuwachs misst', 'vermoegenszuwachs', 'skalierung'],
            solutionBlock(
              'Absolute Wertregel',
              [
                'Der Kapitalwert misst den absoluten Vermögenseffekt und bleibt daher bei Projektgrößenunterschieden robuster.'
              ]
            )
          )
        ]
      )
    ]
  },

  probeklausur_3: {
    id: 'probeklausur_3',
    title: 'Probeklausur III: Unsicherheit, Kapitalkosten und Kapitalstruktur',
    subtitle: '90-Minuten-Klausur zu Risiko, Bezugsrecht, Eigen-/Fremdkapitalkosten und Leverage',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 18,
        type: 'wf-block',
        preamble: 'Beurteilen Sie die Aussagen als wahr oder falsch.',
        groups: [
          {
            context: 'Risiko und Finanzierung',
            questions: [
              { id: 'fw_pk3_1', text: 'Eine dominierte Alternative muss vor der Erwartungswertrechnung nicht mehr weiter geprüft werden.', correct: 'Wahr', feedback: 'Dominanz dient gerade als erstes Filtersieb.' },
              { id: 'fw_pk3_2', text: 'Ein hoher Erwartungswert macht ein Projekt unabhängig von seiner Verlustwahrscheinlichkeit automatisch überlegen.', correct: 'Falsch', feedback: 'Risiko und Verlustprofil bleiben eigenständige Entscheidungskriterien.' },
              { id: 'fw_pk3_3', text: 'Das Bezugsrecht schützt Altaktionäre vor Verwässerung.', correct: 'Wahr', feedback: 'Genau das ist seine Kernfunktion.' },
              { id: 'fw_pk3_4', text: 'Der Verzicht auf Skonto ist finanzwirtschaftlich oft neutral.', correct: 'Falsch', feedback: 'Er kann hohe implizite Fremdkapitalkosten bedeuten.' },
              { id: 'fw_pk3_5', text: 'Mehr Fremdkapital kann die Eigenkapitalrendite steigern und zugleich das Risiko erhöhen.', correct: 'Wahr', feedback: 'Leverage wirkt doppelt: auf Ertrag und Risiko.' },
              { id: 'fw_pk3_6', text: 'Modigliani-Miller beschreibt die Wirklichkeit exakt und ohne einschränkende Annahmen.', correct: 'Falsch', feedback: 'Die Irrelevanzthese ist ein Benchmark unter sehr starken Voraussetzungen.' }
            ]
          }
        ]
      },
      textBlock(
        'Aufgabe 2',
        22,
        'Bezugsrecht und Kapitalkosten',
        'Ein Unternehmen plant eine Kapitalerhöhung und möchte zugleich die Kosten des eingesetzten Kapitals beurteilen.',
        [
          textQuestion(
            'fw_pk3_2a',
            8,
            'Warum darf der Emissionskurs neuer Aktien nicht isoliert als „günstig“ oder „teuer“ bewertet werden?',
            ['weil ex-kurs und bezugsrecht mitberuecksichtigt werden muessen', 'verwässerungsschutz', 'ex kurs'],
            solutionBlock(
              'Gesamtwirkung statt Einzelpreis',
              [
                'Erst Ex-Kurs und Bezugsrecht zeigen, wie sich die Vermögensposition der Altaktionäre wirklich verändert.'
              ]
            )
          ),
          textQuestion(
            'fw_pk3_2b',
            7,
            'Welche Grundidee steckt hinter dem Dividendenbarwertmodell?',
            ['aktienpreis als barwert erwarteter dividenden', 'barwert der dividenden', 'gordon'],
            solutionBlock(
              'Barwert der Ausschüttungen',
              [
                'Der Aktienpreis wird als Gegenwartswert der erwarteten künftigen Dividenden gelesen und daraus werden Eigenkapitalkosten abgeleitet.'
              ]
            )
          ),
          textQuestion(
            'fw_pk3_2c',
            7,
            'Warum kann nicht genutztes Skonto als teurer Lieferantenkredit interpretiert werden?',
            ['weil der preisnachlass gegen spaetere zahlung getauscht wird', 'impliziter kredit', 'effektivzins'],
            solutionBlock(
              'Implizite Fremdkapitalkosten',
              [
                'Wer das Skonto nicht nutzt, verschiebt Zahlung und bezahlt dafür einen oft hohen impliziten Zinssatz.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        20,
        'Unsicherheit und Kapitalstruktur',
        'Verglichen werden zwei unsichere Projekte sowie eine mögliche Erhöhung des Fremdkapitalanteils.',
        [
          textQuestion(
            'fw_pk3_3a',
            7,
            'Welche Prüfungsstufe steht bei unsicheren Alternativen vor dem Erwartungswert?',
            ['dominanz', 'dominanzpruefung'],
            solutionBlock(
              'Vorsieb',
              [
                'Dominanz wird zuerst geprüft, weil offensichtlich unterlegene Alternativen sofort ausscheiden können.'
              ]
            )
          ),
          textQuestion(
            'fw_pk3_3b',
            7,
            'Warum genügt bei Leverage nicht die Aussage „Die Eigenkapitalrendite steigt“?',
            ['weil auch das risiko steigt', 'risikoeffekt', 'schwankungen'],
            solutionBlock(
              'Doppelwirkung',
              [
                'Leverage erhöht nicht nur die Renditechance, sondern auch das Risiko und die Schwankung des Eigenkapitals.'
              ]
            )
          ),
          textQuestion(
            'fw_pk3_3c',
            6,
            'Wozu dient der WACC in diesem Zusammenhang?',
            ['gewichtete gesamtkapitalkosten', 'preis der finanzierungsmischung', 'gesamtpreis'],
            solutionBlock(
              'Aggregierte Kostenlogik',
              [
                'Der WACC fasst die Kosten der gesamten Finanzierungsmischung in einer Kennzahl zusammen.'
              ]
            )
          )
        ]
      )
    ]
  }
};
