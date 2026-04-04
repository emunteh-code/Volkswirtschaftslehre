const section = (title, body) => `
  <div class="section-block">
    <h3>${title}</h3>
    ${body}
  </div>
`;

const warn = (title, body) => `<div class="warn-box"><strong>${title}</strong> ${body}</div>`;
const mathBlock = (eq) => `<div class="math-block">${eq}</div>`;
const step = (text, eq = null) => ({ text, eq });
const task = (text, steps, result, hint = null) => ({ text, steps, result, ...(hint ? { hint } : {}) });

export const CHAPTERS = [
  { id: 'finanz_denkweise', title: 'Einführung in die finanzwirtschaftliche Denkweise', cat: 'Grundlagen', short: 'Einführung' },
  { id: 'liquiditaetsplanung', title: 'Liquiditätsplanung, Fristenkongruenz und goldene Bilanzregel', cat: 'Grundlagen', short: 'Liquidität' },
  { id: 'kapitalmarkt_institutionen', title: 'Kapitalmarkt, Präferenzen und Institutionen', cat: 'Grundlagen', short: 'Kapitalmarkt' },
  { id: 'intertemporale_wahl', title: 'Intertemporale Wahl, Zeitpräferenzen und Budgetgerade', cat: 'Investition', short: 'Intertemporal' },
  { id: 'kapitalwert_fisher', title: 'Kapitalwert, Fisher-Separation und unvollkommener Kapitalmarkt', cat: 'Investition', short: 'Kapitalwert' },
  { id: 'auf_abzinsen', title: 'Aufzinsen, Abzinsen und Gegenwartswerte', cat: 'Investition', short: 'Zeitwert' },
  { id: 'renten_endwert', title: 'Rentenfaktoren, Endwert und vollständiger Finanzplan', cat: 'Investition', short: 'Renten' },
  { id: 'izf_kapitalwertfunktion', title: 'Interner Zinsfuß und Kapitalwertfunktion', cat: 'Investition', short: 'IZF' },
  { id: 'izf_grenzen', title: 'IZF: Wiederanlageprämisse, Mehrdeutigkeit und Grenzen', cat: 'Investition', short: 'IZF-Grenzen' },
  { id: 'unsicherheit', title: 'Entscheidungen unter Unsicherheit', cat: 'Unsicherheit & Finanzierung', short: 'Unsicherheit' },
  { id: 'bezugsrecht', title: 'Kapitalerhöhung, Bezugsrecht und Verwässerungsschutz', cat: 'Unsicherheit & Finanzierung', short: 'Bezugsrecht' },
  { id: 'kapitalkosten', title: 'Eigen- und Fremdkapitalkosten', cat: 'Unsicherheit & Finanzierung', short: 'Kapitalkosten' },
  { id: 'kapitalstruktur', title: 'Kapitalstruktur, WACC und Leverage', cat: 'Unsicherheit & Finanzierung', short: 'WACC' }
];

export const CONTENT = {
  finanz_denkweise: {
    motivation: 'Finanzwirtschaft beginnt nicht mit einer Rechenformel, sondern mit einer Perspektive: Welche Alternative bindet wann Mittel, welche Rückflüsse entstehen und welches Vermögen wird dadurch geschaffen oder vernichtet?',
    theorie: [
      section(
        'Was Finanzwirtschaft betrachtet',
        `<p>Finanzwirtschaft liest Unternehmen über Zahlungsströme, Zeitpunkte und Risiko. Anders als reine Buchungstechnik fragt sie nicht nur, wie ein Vorgang verbucht wird, sondern ob er Liquidität bindet, Wert schafft und künftige Handlungsspielräume erweitert oder verengt.</p>`
      ),
      section(
        'Liquidität, Erfolg und Vermögen sauber trennen',
        `<p>Ein Vorgang kann liquiditätswirksam, aber nicht sofort erfolgswirksam sein, oder umgekehrt bilanziell harmlos erscheinen und finanzwirtschaftlich gefährlich werden. Gerade diese Trennung ist klausurwichtig, weil viele Fragen zwischen Zahlungsfähigkeit, Gewinn und Vermögenswirkung unterscheiden.</p>`
      ),
      section(
        'Die Leitfrage des ganzen Moduls',
        `<p>Fast jedes Kapitel des Moduls beantwortet dieselbe Kernfrage auf einer neuen Ebene: Welche Alternative ist unter Zeit, Knappheit und Risiko die bessere? Später heißen die Werkzeuge dafür Kapitalwert, Endwert, IZF, Erwartungswert, WACC oder Leverage.</p>
         ${warn('Einstiegsfehler:', 'Wer Finanzwirtschaft als bloße Sammlung von Kennzahlen lernt, erkennt später die gemeinsame Entscheidungslogik nicht wieder.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Leitobjekt', eq: String.raw`\text{Zahlungsreihe } \{z_0, z_1, \dots, z_n\}`, desc: 'Die Zahlungsreihe ist die gemeinsame Sprache des Moduls.' },
      { label: 'Leitfrage', eq: String.raw`\text{Zeitpunkt} + \text{Zahlung} + \text{Risiko} \Rightarrow \text{Entscheidung}`, desc: 'Gute Finanzwirtschaft verbindet alle drei Ebenen.' }
    ],
    aufgaben: [
      task(
        'Warum reicht eine rein buchhalterische Sicht für finanzwirtschaftliche Entscheidungen nicht aus?',
        [
          step('Buchhalterische Größen von Zahlungen trennen.', String.raw`\text{Bilanz und GuV zeigen nicht automatisch, wann Mittel gebunden oder frei werden.}`),
          step('Dann die Entscheidungslogik ergänzen.', String.raw`\text{Finanzwirtschaft bewertet Alternativen über Zahlungszeitpunkte, Vermögenswirkung und Risiko.}`)
        ],
        'Finanzwirtschaft braucht mehr als Buchungssprache, weil Entscheidungen an Zahlungen, Zeitstruktur und Alternativen hängen.'
      ),
      task(
        'Welche drei Kontrollfragen sollte man vor fast jeder Finanzwirtschaftsaufgabe stellen?',
        [
          step('Zahlungsstruktur klären.', String.raw`\text{Welche Ein- und Auszahlungen treten wann auf?}`),
          step('Bewertungszeitpunkt benennen.', String.raw`\text{Auf welchen Zeitpunkt wird verglichen?}`),
          step('Entscheidungskriterium festlegen.', String.raw`\text{Geht es um Wert, Rendite, Liquidität oder Risiko?}`)
        ],
        'Zeitpunkt, Zahlungsreihe und Entscheidungskriterium bilden das Grundgerüst fast jeder finanzwirtschaftlichen Lösung.'
      )
    ]
  },

  liquiditaetsplanung: {
    motivation: 'Viele Unternehmen scheitern nicht an fehlenden Gewinnen, sondern an falscher Fristenstruktur. Genau deshalb beginnt die Finanzwirtschaft mit Liquiditätsplanung und Kapitalbedarf statt sofort mit Renditerechnung.',
    theorie: [
      section(
        'Liquidität als Überlebensbedingung',
        `<p>Liquidität fragt, ob ein Unternehmen seine fälligen Zahlungen zum richtigen Zeitpunkt leisten kann. Ein Projekt kann langfristig rentabel sein und trotzdem kurzfristig eine Finanzierungslücke erzeugen, wenn Auszahlungen früh und Rückflüsse spät anfallen.</p>`
      ),
      section(
        'Goldene Bilanzregel und Fristenkongruenz',
        `<p>Die goldene Bilanzregel fordert, dass langfristig gebundenes Vermögen mit langfristig verfügbarem Kapital finanziert wird. Sie ist keine ästhetische Bilanzkennzahl, sondern eine Fristenregel gegen permanenten Refinanzierungsdruck.</p>
         ${mathBlock(String.raw`$$\text{langfristiges Vermögen} \le \text{langfristiges Kapital}$$`)}
      `
      ),
      section(
        'Kapitalbedarfsplanung',
        `<p>Im Kapitalbedarfsplan werden Ein- und Auszahlungen über die Zeit kumuliert. Der tiefste Punkt der kumulierten Kurve zeigt den maximalen Finanzierungsbedarf und damit den Mindestpuffer, der zur Aufrechterhaltung der Zahlungsfähigkeit gebraucht wird.</p>
         ${warn('Fristenfehler:', 'Ein positiver Gesamtsaldo am Ende beantwortet noch nicht die Frage, ob zwischendurch eine kritische Finanzierungslücke entsteht.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Kumulierter Saldo', eq: String.raw`$$K_t = \sum_{\tau=0}^{t} Ein_\tau - \sum_{\tau=0}^{t} Aus_\tau$$`, desc: 'Der tiefste kumulierte Saldo markiert den maximalen Kapitalbedarf.' },
      { label: 'Goldene Bilanzregel', eq: String.raw`\text{AV} \le \text{langfristiges Kapital}`, desc: 'Langfristige Bindung verlangt langfristige Finanzierung.' }
    ],
    aufgaben: [
      task(
        'Warum ist der maximale negative kumulierte Saldo wichtiger als der Endsaldo eines Projekts?',
        [
          step('Zeitliche Lücke beschreiben.', String.raw`\text{Der maximale negative Ausschlag zeigt, wann und wie stark Mittel zwischenfinanziert werden müssen.}`),
          step('Endsaldo relativieren.', String.raw`\text{Ein später positiver Endsaldo beseitigt die Zwischenlücke nicht.}`)
        ],
        'Der tiefste kumulierte Saldo misst den Mindestfinanzierungsbedarf und ist daher für die Liquiditätssicherung zentraler als der Endsaldo.'
      ),
      task(
        'Warum ist die goldene Bilanzregel mehr als eine Bilanzkennzahl?',
        [
          step('Fristenlogik benennen.', String.raw`\text{Sie verknüpft Laufzeit der Mittelverwendung mit Laufzeit der Finanzierung.}`),
          step('Risikoeffekt nennen.', String.raw`\text{Kurzfristige Finanzierung langfristiger Bindung erhöht das Refinanzierungsrisiko.}`)
        ],
        'Die goldene Bilanzregel schützt vor Fristeninkongruenz und damit vor Liquiditätskrisen trotz scheinbar tragbarer Bilanz.'
      )
    ]
  },

  kapitalmarkt_institutionen: {
    motivation: 'Sobald Finanzwirtschaft nicht mehr nur als Innenfinanzierung gelesen wird, tauchen Kapitalmarktpreise, Präferenzen und Institutionen auf. Genau hier beginnt die moderne Finanzierungstheorie.',
    theorie: [
      section(
        'Marktpreise als Tauschpreise über die Zeit',
        `<p>Kapitalmärkte übersetzen Zeit in Preise. Zinssätze und Renditen sind damit keine Dekoration, sondern die objektive Marktlogik, mit der Gegenwarts- und Zukunftszahlungen gegeneinander bewertet werden.</p>`
      ),
      section(
        'Rolle der Präferenzen',
        `<p>Entscheider bewerten Gegenwart und Zukunft nicht neutral. Zeitpräferenzen entscheiden darüber, ob heutiger Konsum, Ersparnis oder spätere Rückflüsse attraktiver wirken. Marktpreis und Präferenz treffen sich später in der intertemporalen Wahl.</p>`
      ),
      section(
        'Warum Institutionen wie Banken entstehen',
        `<p>In vollkommenen Märkten wären viele Finanzintermediäre theoretisch entbehrlich. In der Wirklichkeit senken Banken Suchkosten, bündeln Informationen, überwachen Kreditnehmer und transformieren Fristen. Sie sind damit Antworten auf Marktunvollkommenheit.</p>
         ${warn('Abstraktionsfehler:', 'Die Theorie vollkommener Märkte ist ein Benchmark, keine Beschreibung der Wirklichkeit.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Marktpreis der Zeit', eq: String.raw`\text{Zins} = \text{Preis des Zeittausches}`, desc: 'Der Zins verbindet Gegenwarts- und Zukunftszahlungen.' },
      { label: 'Marktunvollkommenheit', eq: String.raw`\text{Informationskosten} + \text{Transaktionskosten} \Rightarrow \text{Institutionen}`, desc: 'Institutionen werden durch Friktionen wirtschaftlich sinnvoll.' }
    ],
    aufgaben: [
      task(
        'Warum ergänzt die moderne Betrachtungsweise die traditionelle Liquiditätslogik, statt sie zu ersetzen?',
        [
          step('Traditionelle Logik festhalten.', String.raw`\text{Liquidität sichert Zahlungsfähigkeit und Fristenkongruenz.}`),
          step('Moderne Ergänzung nennen.', String.raw`\text{Kapitalmärkte und Präferenzen bewerten zusätzlich Wert und Alternativkosten.}`)
        ],
        'Die moderne Betrachtungsweise erweitert die Liquiditätsfrage um Marktpreise, Präferenzen und Bewertung, ersetzt sie aber nicht.'
      ),
      task(
        'Warum sind Banken auch dann sinnvoll, wenn Kapitalmärkte theoretisch Zeittausch erlauben?',
        [
          step('Benchmark-Modell nennen.', String.raw`\text{Auf vollkommenen Märkten wäre direkte Finanzierung einfacher möglich.}`),
          step('Friktionen als Begründung ergänzen.', String.raw`\text{In der Wirklichkeit rechtfertigen Informations-, Such- und Überwachungskosten die Bankfunktion.}`)
        ],
        'Banken werden gerade deshalb relevant, weil reale Märkte unvollkommen sind und Friktionen direkte Finanzierung verteuern.'
      )
    ]
  },

  intertemporale_wahl: {
    motivation: 'Die intertemporale Wahl ist die Mikrostruktur fast aller Finanzierungsfragen: Sparen, Kreditaufnahme und Investition sind letztlich verschiedene Formen desselben Tauschs zwischen heute und morgen.',
    theorie: [
      section(
        'Intertemporale Budgetgerade',
        `<p>Die Budgetgerade zeigt, welche Kombinationen aus heutigem und zukünftigem Konsum bei gegebenem Ausstattungspunkt und Zinssatz erreichbar sind. Sie wird steiler, wenn der Markt Gegenwartskonsum teurer macht, also der Zins steigt.</p>
         ${mathBlock(String.raw`$$c_1 = y_1 + (1+i)(y_0 - c_0)$$`)}
      `
      ),
      section(
        'Sparen und Kreditaufnahme',
        `<p>Wer unterhalb des heutigen Ausstattungskonsums wählt, spart und verschiebt Kaufkraft in die Zukunft. Wer darüber wählt, nimmt Kredit auf und holt Zukunftskonsum in die Gegenwart. Die Richtung des Tauschs ist damit unmittelbar ökonomisch lesbar.</p>`
      ),
      section(
        'Optimale Wahl',
        `<p>Das Optimum liegt dort, wo die individuelle Grenzrate der Substitution zwischen heutigem und zukünftigem Konsum dem Marktpreis des Zeittauschs entspricht. Genau diese Tangentiallogik wird später zur Basis der Fisher-Separation.</p>
         ${warn('Grafikfehler:', 'Die Budgetgerade ist keine bloße Skizze. Achsenabschnitte, Steigung und Ausstattungspunkt tragen jeweils eine finanzwirtschaftliche Aussage.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Budgetgerade', eq: String.raw`$$c_1 = y_1 + (1+i)(y_0 - c_0)$$`, desc: 'Sie zeigt die marktbestimmten Tauschmöglichkeiten zwischen Gegenwart und Zukunft.' },
      { label: 'Tangentialbedingung', eq: String.raw`$$MRS_{0,1} = 1+i$$`, desc: 'Marktpreis und Zeitpräferenz stimmen im Optimum überein.' }
    ],
    aufgaben: [
      task(
        'Was bedeutet es finanziell, wenn ein Haushalt links vom Ausstattungspunkt wählt?',
        [
          step('Richtung der Wahl lesen.', String.raw`\text{Der heutige Konsum liegt unter dem Ausstattungspunkt.}`),
          step('Finanzierungsform benennen.', String.raw`\text{Der Haushalt spart und verschiebt Mittel in die Zukunft.}`)
        ],
        'Links vom Ausstattungspunkt liegt die Logik der Geldanlage: Gegenwartskonsum wird zugunsten künftiger Rückflüsse reduziert.'
      ),
      task(
        'Warum ist die Steigung der Budgetgeraden inhaltlich wichtiger als ihre bloße Form?',
        [
          step('Steigung interpretieren.', String.raw`\text{Sie misst den Marktpreis des Tauschs zwischen heutigem und zukünftigem Konsum.}`),
          step('Zinsbezug ergänzen.', String.raw`\text{Ein höherer Zins erhöht den Preis heutiger Mittel relativ zur Zukunft.}`)
        ],
        'Die Steigung übersetzt den Zinssatz in eine reale Tauschrate zwischen heute und morgen.'
      )
    ]
  },

  kapitalwert_fisher: {
    motivation: 'Mit dem Kapitalwert beginnt die eigentliche Investitionstheorie: Aus einer Zahlungsreihe wird ein Vermögensurteil, und aus einer Vermögensregel folgt eine saubere Entscheidungslogik.',
    theorie: [
      section(
        'Kapitalwert als Vermögenszuwachs',
        `<p>Der Kapitalwert bringt alle projektbedingten Zahlungen auf einen gemeinsamen Gegenwartszeitpunkt. Ein positiver Kapitalwert bedeutet, dass das Projekt gegenüber der Kapitalmarktalternative Vermögen schafft; ein negativer Kapitalwert vernichtet Vermögen.</p>
         ${mathBlock(String.raw`$$K_0 = -A_0 + \sum_{t=1}^{n}\frac{CF_t}{(1+i)^t}$$`)}
      `
      ),
      section(
        'Fisher-Separation',
        `<p>Bei vollkommenem Kapitalmarkt kann die Investitionsentscheidung von der Konsumentscheidung getrennt werden. Zuerst wird das Projekt mit dem höchsten positiven Kapitalwert gewählt, anschließend wird entlang des Kapitalmarkts der individuell gewünschte Konsumpfad eingestellt.</p>`
      ),
      section(
        'Grenzen am unvollkommenen Kapitalmarkt',
        `<p>Unterscheiden sich Soll- und Habenzins oder sind Finanzierungsbedingungen asymmetrisch, zerfällt diese Trennung. Dann beeinflussen Marktunvollkommenheiten die Investitionsentscheidung direkt.</p>
         ${warn('Kapitalwertfehler:', 'Der Kapitalwert ist kein „Gewinn in Prozent“, sondern ein absoluter Vermögenseffekt relativ zur Kapitalmarktalternative.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Kapitalwertregel', eq: String.raw`$$K_0 > 0 \Rightarrow \text{vorteilhaft}$$`, desc: 'Positiver Kapitalwert bedeutet Vermögenszuwachs.' },
      { label: 'Wahlregel', eq: String.raw`\max K_0`, desc: 'Bei Ausschlussalternativen wählt man das Projekt mit dem höchsten positiven Kapitalwert.' }
    ],
    aufgaben: [
      task(
        'Warum ist der Kapitalwert eine Vermögensregel und nicht nur eine Renditeregel?',
        [
          step('Gegenwartsvergleich benennen.', String.raw`\text{Alle Zahlungen werden relativ zur Kapitalmarktalternative auf } t=0 \text{ bezogen.}`),
          step('Urteilstyp nennen.', String.raw`\text{Das Ergebnis ist ein absoluter Mehrwert, keine bloße Prozentzahl.}`)
        ],
        'Der Kapitalwert misst, wie viel Vermögen nach korrektem Zeitvergleich zusätzlich geschaffen wird.'
      ),
      task(
        'Warum funktioniert Fisher-Separation nur unter starken Marktannahmen?',
        [
          step('Einheitliche Finanzierungskonditionen nennen.', String.raw`\text{Soll- und Habenzins müssen symmetrisch und der Markt vollkommen sein.}`),
          step('Konsequenz erläutern.', String.raw`\text{Nur dann kann Konsumwahl unabhängig von der Investitionswahl über den Markt nachgesteuert werden.}`)
        ],
        'Ohne vollkommene Kapitalmärkte beeinflussen Finanzierungskonditionen die Investitionsentscheidung selbst, und die Trennung zerfällt.'
      )
    ]
  },

  auf_abzinsen: {
    motivation: 'Auf- und Abzinsung sind die Grammatik jeder dynamischen Investitionsrechnung. Wer diese Transformationslogik nicht sicher beherrscht, liest spätere Kapitalwert- und Endwertaufgaben unsauber.',
    theorie: [
      section(
        'Warum Zeitwertrechnung nötig ist',
        `<p>100 € heute und 100 € in einem Jahr sind finanziell nicht gleichwertig. Erst über Auf- oder Abzinsung werden Zahlungen auf einen gemeinsamen Bewertungszeitpunkt transformiert und damit vergleichbar.</p>`
      ),
      section(
        'Aufzinsen und Abzinsen',
        `<p>Aufzinsen bringt Zahlungen in die Zukunft, Abzinsen in die Gegenwart. Beide Operationen sind Spiegelbilder und müssen immer mit Blick auf den Zielzeitpunkt eingesetzt werden.</p>
         ${mathBlock(String.raw`$$EW_n = BW_0 (1+i)^n \qquad BW_0 = \frac{EW_n}{(1+i)^n}$$`)}
      `
      ),
      section(
        'Variable Zinssätze',
        `<p>Wenn sich der Zinssatz zwischen den Perioden ändert, muss periodenscharf transformiert werden. Genau hier passieren in Klausuren viele Fehler, weil stillschweigend mit einem konstanten Satz gerechnet wird.</p>
         ${warn('Zeitachsenfehler:', 'Vor jeder Rechnung muss klar sein, auf welchen Zeitpunkt alle Zahlungen gebracht werden.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Endwert', eq: String.raw`$$EW_n = BW_0 (1+i)^n$$`, desc: 'Aus Gegenwartswert wird Zukunftswert.' },
      { label: 'Barwert', eq: String.raw`$$BW_0 = \frac{EW_n}{(1+i)^n}$$`, desc: 'Aus Zukunftswert wird Gegenwartswert.' }
    ],
    aufgaben: [
      task(
        'Warum ist eine Zeitachse in Zinsrechnungen oft wichtiger als die erste Formel?',
        [
          step('Strukturfunktion benennen.', String.raw`\text{Sie klärt Zahlungszeitpunkte, Zielzeitpunkt und Richtung der Transformation.}`),
          step('Fehlerquelle benennen.', String.raw`\text{Ohne Zeitachse werden Zahlungen oft doppelt oder in die falsche Richtung transformiert.}`)
        ],
        'Die Zeitachse diszipliniert die Rechenrichtung und verhindert die teuersten Strukturfehler vor dem eigentlichen Rechnen.'
      ),
      task(
        'Warum führen Auf- und Abzinsung nicht zu verschiedenen ökonomischen Aussagen?',
        [
          step('Zielzeitpunkt erklären.', String.raw`\text{Beide beziehen dieselbe Zahlung nur auf unterschiedliche Vergleichszeitpunkte.}`),
          step('Äquivalenz festhalten.', String.raw`\text{Bei konsistenter Anwendung bleibt das Vorteilhaftigkeitsurteil identisch.}`)
        ],
        'Auf- und Abzinsung sind nur zwei Transformationsrichtungen derselben Zeitwertlogik.'
      )
    ]
  },

  renten_endwert: {
    motivation: 'Mehrperiodige Investitionsaufgaben werden erst dann klausursicher, wenn Einmal- und Rentenzahlungen sauber in Kapitalwert, Endwert und vollständigen Finanzplan übersetzt werden können.',
    theorie: [
      section(
        'Rentenfaktoren',
        `<p>Rentenbarwert- und Rentenendwertfaktoren fassen regelmäßige Zahlungen in kompakter Form zusammen. Dadurch werden mehrperiodige Zahlungsreihen mit konstanten periodischen Zahlungen rechnerisch beherrschbar.</p>
         ${mathBlock(String.raw`$$RBWF = \frac{1-(1+i)^{-n}}{i} \qquad REWF = \frac{(1+i)^n-1}{i}$$`)}
      `
      ),
      section(
        'Kapitalwertmethode und Endwertmethode',
        `<p>Beide Methoden bewerten dieselbe Zahlungsreihe, nur auf unterschiedlichen Zeitpunkten. Kapitalwert bezieht sich auf den Startpunkt, Endwert auf den Endpunkt. Bei konsistenter Anwendung führen beide zur gleichen Entscheidung.</p>`
      ),
      section(
        'Vollständiger Finanzplan',
        `<p>Der vollständige Finanzplan zeigt periodisch, wann Investition, Rückflüsse und eventuelle Anschlussfinanzierung oder Wiederanlage anfallen. Dadurch wird sichtbar, dass die Investitionsrechnung immer zugleich eine Finanzierungsrechnung ist.</p>
         ${warn('Methodenfehler:', 'Kapitalwert- und Endwertmethode sind keine konkurrierenden Entscheidungsregeln, sondern zwei Perspektiven auf dieselbe Zahlungsreihe.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Rentenbarwertfaktor', eq: String.raw`$$RBWF = \frac{1-(1+i)^{-n}}{i}$$`, desc: 'Periodische Zahlungen werden auf den Gegenwartszeitpunkt gebracht.' },
      { label: 'Äquivalenz', eq: String.raw`$$EW_n = K_0 (1+i)^n$$`, desc: 'Endwert und Kapitalwert führen bei gleichem Zinssatz zum selben Urteil.' }
    ],
    aufgaben: [
      task(
        'Warum führen Kapitalwert- und Endwertmethode bei korrekter Anwendung zur gleichen Entscheidung?',
        [
          step('Gleiche Zahlungsreihe festhalten.', String.raw`\text{Beide Methoden bewerten dieselben Zahlungen.}`),
          step('Unterschied nur im Vergleichszeitpunkt benennen.', String.raw`\text{K_0 \text{ misst Wert in } t=0,\ EW_n \text{ in } t=n.}`)
        ],
        'Die Methoden unterscheiden nur den Bewertungszeitpunkt; deshalb muss das Vorteilhaftigkeitsurteil gleich bleiben.'
      ),
      task(
        'Wozu dient der vollständige Finanzplan über die bloße Endwertrechnung hinaus?',
        [
          step('Periodische Sicht nennen.', String.raw`\text{Er zeigt, wann Finanzierungslücken oder Zwischenrückflüsse auftreten.}`),
          step('Verbindung von Investition und Finanzierung erklären.', String.raw`\text{Er macht sichtbar, dass Investitionsrechnung immer auch eine Kapitalbedarfsfrage ist.}`)
        ],
        'Der vollständige Finanzplan verbindet Zeitwertrechnung mit echter Finanzierungslogik über alle Perioden.'
      )
    ]
  },

  izf_kapitalwertfunktion: {
    motivation: 'Der interne Zinsfuß bringt die Sprache der Rendite in die Investitionsrechnung. Genau deshalb muss er über die Kapitalwertfunktion sauber gelesen und gegen den Marktzinssatz gespiegelt werden.',
    theorie: [
      section(
        'IZF als Nullstelle der Kapitalwertfunktion',
        `<p>Der interne Zinsfuß ist der Zinssatz, bei dem der Kapitalwert einer Zahlungsreihe null wird. Er sagt also: Bei welchem Marktzinssatz wäre das Projekt gerade noch wertneutral?</p>
         ${mathBlock(String.raw`$$0 = -A_0 + \sum_{t=1}^{n}\frac{CF_t}{(1+r)^t}$$`)}
      `
      ),
      section(
        'Kapitalwertfunktion lesen',
        `<p>Die Kapitalwertfunktion zeigt, wie empfindlich der Projektwert auf Änderungen des Kalkulationszinssatzes reagiert. Bei einer Normalinvestition fällt sie typischerweise mit steigendem Zinssatz.</p>`
      ),
      section(
        'Entscheidungsregel',
        `<p>Liegt der relevante Marktzinssatz unter dem internen Zinsfuß, ist der Kapitalwert positiv; liegt er darüber, ist der Kapitalwert negativ. Der IZF ist also nur im Zusammenspiel mit dem Vergleichszins sinnvoll interpretierbar.</p>
         ${warn('Renditefehler:', 'Der IZF ist keine selbstständige Vermögensgröße. Er muss immer gegen Kapitalwert und Kalkulationszins gelesen werden.')}`
      )
    ].join(''),
    formeln: [
      { label: 'IZF-Definition', eq: String.raw`$$K(r^*) = 0$$`, desc: 'Beim internen Zinsfuß schneidet die Kapitalwertfunktion die Nulllinie.' },
      { label: 'Entscheidungsregel', eq: String.raw`$$r^* > i \Rightarrow K_0(i) > 0$$`, desc: 'Der Vergleichszins entscheidet über Vorteilhaftigkeit.' }
    ],
    aufgaben: [
      task(
        'Warum ist der IZF ohne den Vergleich mit dem Kalkulationszins noch kein vollständiges Urteil?',
        [
          step('IZF als Schwellenzins erklären.', String.raw`\text{Er zeigt nur die Renditeschwelle, bei der der Kapitalwert null wird.}`),
          step('Entscheidung erst über Marktvergleich ergänzen.', String.raw`\text{Ob das Projekt vorteilhaft ist, hängt vom Vergleich mit dem relevanten Marktzinssatz ab.}`)
        ],
        'Der IZF liefert erst zusammen mit dem Kalkulationszins eine echte Vorteilhaftigkeitsaussage.'
      ),
      task(
        'Was zeigt die Kapitalwertfunktion zusätzlich zum nackten IZF?',
        [
          step('Sensitivität benennen.', String.raw`\text{Sie zeigt, wie stark der Projektwert auf Zinsänderungen reagiert.}`),
          step('Strukturinformation ergänzen.', String.raw`\text{Sie macht mögliche Mehrdeutigkeiten oder flache Wertprofile sichtbar.}`)
        ],
        'Die Kapitalwertfunktion zeigt den ganzen Zusammenhang zwischen Zinssatz und Projektwert, nicht nur den Nullpunkt.'
      )
    ]
  },

  izf_grenzen: {
    motivation: 'Gerade weil der IZF so eingängig wirkt, muss man seine Grenzen kennen: Wiederanlageprämisse, Mehrdeutigkeit und Größenunterschiede können Prozentzahlen täuschen.',
    theorie: [
      section(
        'Wiederanlageprämisse',
        `<p>Der IZF unterstellt implizit, dass Zwischenrückflüsse zum internen Zinsfuß wiederangelegt werden können. Diese Annahme ist oft stärker als diejenige der Kapitalwertmethode, die nur den Marktzinssatz als Maßstab braucht.</p>`
      ),
      section(
        'Mehrdeutige Kapitalwertprofile',
        `<p>Bei Zahlungsreihen mit mehreren Vorzeichenwechseln kann die Kapitalwertfunktion mehrere Nullstellen besitzen. Dann verliert der IZF seine Eindeutigkeit als Entscheidungsregel.</p>`
      ),
      section(
        'Skalierungsproblem',
        `<p>Ein kleines Projekt kann einen hohen IZF, aber einen geringen Kapitalwert haben. Bei Ausschlussalternativen bleibt deshalb der Kapitalwert das robustere Kriterium, wenn Vermögensmaximierung das Ziel ist.</p>
         ${warn('Prozentfehler:', 'Eine hohe Renditezahl ersetzt kein Werturteil. Bei Projektvergleichen zählt die Frage, welches Projekt mehr Vermögen schafft.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Mehrdeutigkeit', eq: String.raw`\text{mehrere Vorzeichenwechsel} \Rightarrow \text{mehrere mögliche } r^*`, desc: 'Der IZF kann seine Eindeutigkeit verlieren.' },
      { label: 'Referenzregel', eq: String.raw`\max K_0`, desc: 'Bei Konflikten bleibt der Kapitalwert die Vermögensregel.' }
    ],
    aufgaben: [
      task(
        'Warum ist die Wiederanlageprämisse beim IZF problematisch?',
        [
          step('Implizite Annahme benennen.', String.raw`\text{Zwischenrückflüsse werden gedanklich zum internen Zinsfuß reinvestiert.}`),
          step('Praktische Kritik ergänzen.', String.raw`\text{Dieser Zinssatz steht am Markt oft gerade nicht für sichere Wiederanlage zur Verfügung.}`)
        ],
        'Der IZF baut auf einer starken impliziten Wiederanlageannahme auf und ist deshalb nicht automatisch robuster als der Kapitalwert.'
      ),
      task(
        'Warum kann ein Projekt mit niedrigerem IZF trotzdem vorzuziehen sein?',
        [
          step('Skalierung nennen.', String.raw`\text{Ein größeres Projekt kann trotz niedrigerem IZF den höheren Kapitalwert erzeugen.}`),
          step('Zielgröße festhalten.', String.raw`\text{Wenn Vermögensmaximierung zählt, ist das größere absolute Werturteil entscheidend.}`)
        ],
        'Bei Ausschlussalternativen bleibt der Kapitalwert maßgeblich, weil er den absoluten Vermögenszuwachs misst.'
      )
    ]
  },

  unsicherheit: {
    motivation: 'Sobald Rückflüsse nicht sicher sind, reicht die sichere Zeitwertrechnung nicht mehr. Dann müssen Zustände, Wahrscheinlichkeiten und Risikokorrekturen in die Entscheidung integriert werden.',
    theorie: [
      section(
        'Alternativen, Umweltzustände und Ergebnisse',
        `<p>Unsicherheit wird im Kurs über Zustände und zustandsabhängige Ergebnisse modelliert. Für jede Alternative wird gefragt, welche Auszahlung in welchem Zustand entsteht und wie plausibel diese Zustände sind.</p>`
      ),
      section(
        'Dominanz, Erwartungswert und Verlustwahrscheinlichkeit',
        `<p>Dominanz ist das erste Filtersieb: Wer in jedem Zustand schlechter ist, muss nicht weiter diskutiert werden. Danach kommen Erwartungswert, Verlustwahrscheinlichkeit und gegebenenfalls weitere Risikomaße ins Spiel.</p>
         ${mathBlock(String.raw`$$E(X) = \sum_{s} p_s x_s$$`)}
      `
      ),
      section(
        'Risikoadjustierter Kapitalwert',
        `<p>Risiko lässt sich etwa über einen Risikozuschlag im Diskontsatz oder über Sicherheitsäquivalente in den Cashflows berücksichtigen. Wichtig ist, dass das Fach Risiko nicht ignoriert, sondern explizit in die Entscheidungsregel übersetzt.</p>
         ${warn('Unsicherheitsfehler:', 'Ein hoher Erwartungswert genügt noch nicht, wenn die Verlustseite oder die Streuung des Projekts nicht mitgelesen wird.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Erwartungswert', eq: String.raw`$$E(X) = \sum_s p_s x_s$$`, desc: 'Gewichteter Durchschnitt zustandsabhängiger Ergebnisse.' },
      { label: 'Risikozuschlag', eq: String.raw`$$K_0^{risk} = -A_0 + \sum_{t=1}^{n}\frac{E(CF_t)}{(1+i+z)^t}$$`, desc: 'Risiko kann über einen höheren Diskontsatz in die Kapitalwertregel eingehen.' }
    ],
    aufgaben: [
      task(
        'Warum sollte man bei unsicheren Alternativen zuerst Dominanz prüfen und nicht sofort rechnen?',
        [
          step('Dominanzfunktion nennen.', String.raw`\text{Dominanz eliminiert Alternativen, die in allen Zuständen schlechter sind.}`),
          step('Effizienzvorteil benennen.', String.raw`\text{Erst danach lohnt sich die feinere Bewertung über Erwartungswert oder Risikokorrektur.}`)
        ],
        'Dominanz spart Rechenaufwand und verhindert, dass offensichtlich unterlegene Alternativen unnötig weiter analysiert werden.'
      ),
      task(
        'Warum reicht der höchste Erwartungswert nicht immer als Entscheidungskriterium?',
        [
          step('Erwartungswert relativieren.', String.raw`\text{Er mittelt nur, wie stark die Zustände gewichtet sind.}`),
          step('Risikoprofil ergänzen.', String.raw`\text{Sehr hohe Verlustrisiken oder starke Streuung können das Urteil verändern.}`)
        ],
        'Unter Unsicherheit muss der Erwartungswert gegen Verlustwahrscheinlichkeit und Risikoprofil gespiegelt werden.'
      )
    ]
  },

  bezugsrecht: {
    motivation: 'Kapitalerhöhungen sind klausurtypisch, weil hier Marktwert, neue Mittelaufnahme und Schutz alter Aktionäre in einer einzigen Logik zusammenlaufen.',
    theorie: [
      section(
        'Warum es ein Bezugsrecht gibt',
        `<p>Bei einer ordentlichen Kapitalerhöhung werden neue Aktien oft unter dem alten Börsenkurs ausgegeben. Ohne Bezugsrecht würden Altaktionäre durch Verwässerung benachteiligt. Das Bezugsrecht gleicht genau diesen Nachteil aus.</p>`
      ),
      section(
        'Theoretischer Ex-Kurs und Bezugsrechtswert',
        `<p>Der theoretische Ex-Kurs ergibt sich aus dem Gesamtwert von alten und neuen Aktien nach der Kapitalerhöhung geteilt durch die neue Aktienzahl. Aus der Differenz zwischen altem Kurs und Ex-Kurs lässt sich der Wert des Bezugsrechts ableiten.</p>
         ${mathBlock(String.raw`$$P_{ex} = \frac{nP_0 + mP_N}{n+m} \qquad BR = P_0 - P_{ex}$$`)}
      `
      ),
      section(
        'Ökonomische Interpretation',
        `<p>Das Bezugsrecht ist kein Zusatzgeschenk, sondern ein Kompensationsmechanismus. Unter vollkommenem Kapitalmarkt bleibt die Vermögensposition des Altaktionärs bei korrekter Berücksichtigung des Bezugsrechts unverändert.</p>
         ${warn('Verwässerungsfehler:', 'Ohne Bezug auf den Ex-Kurs bleibt oft unklar, warum Altaktionäre trotz niedrigen Emissionskurses wirtschaftlich nicht zwingend schlechter gestellt sind.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Theoretischer Ex-Kurs', eq: String.raw`$$P_{ex} = \frac{nP_0 + mP_N}{n+m}$$`, desc: 'Neuer Mischkurs nach Ausgabe alter und neuer Aktien.' },
      { label: 'Bezugsrechtswert', eq: String.raw`$$BR = P_0 - P_{ex}$$`, desc: 'Das Bezugsrecht gleicht den Verwässerungseffekt aus.' }
    ],
    aufgaben: [
      task(
        'Warum braucht es bei einer Kapitalerhöhung überhaupt ein Bezugsrecht?',
        [
          step('Verwässerungseffekt benennen.', String.raw`\text{Neue Aktien zu niedrigerem Preis würden sonst den Wert alter Aktien verwässern.}`),
          step('Schutzzweck erklären.', String.raw`\text{Das Bezugsrecht kompensiert diesen Nachteil für Altaktionäre.}`)
        ],
        'Das Bezugsrecht schützt Altaktionäre vor einer wertmäßigen Benachteiligung durch die Kapitalerhöhung.'
      ),
      task(
        'Warum darf der Emissionskurs nicht isoliert beurteilt werden?',
        [
          step('Ex-Kurs-Logik nennen.', String.raw`\text{Erst der Mischkurs aus alten und neuen Aktien zeigt die Nach-Kapitalerhöhungsposition.}`),
          step('Bezugsrecht ergänzen.', String.raw`\text{Zusammen mit dem Bezugsrecht wird die Vermögensposition vollständig.}`)
        ],
        'Der Emissionskurs allein ist irreführend, weil erst Ex-Kurs und Bezugsrecht die ökonomische Gesamtwirkung auf alte Aktionäre zeigen.'
      )
    ]
  },

  kapitalkosten: {
    motivation: 'Eigen- und Fremdkapital haben keinen gleichen Preis. Gute Finanzentscheidungen hängen deshalb daran, wie sauber diese Kostenquellen gemessen und interpretiert werden.',
    theorie: [
      section(
        'Eigenkapitalkosten über das Dividendenbarwertmodell',
        `<p>Beim Dividendenbarwertmodell wird der Aktienpreis als Barwert erwarteter Dividenden gelesen. Daraus lässt sich die von den Eigenkapitalgebern geforderte Rendite ableiten.</p>
         ${mathBlock(String.raw`$$k_E = \frac{D_1}{P_0} + g$$`)}
      `
      ),
      section(
        'Fremdkapitalkosten',
        `<p>Fremdkapital ist nicht nur der Nominalzins eines Kredits. Effektive Kosten können über interne Zinsfüße, Skonto, Gebühren oder Risikoprämien steigen. Gerade Lieferantenkredit und Skonto sind typische Klausurklassiker.</p>`
      ),
      section(
        'Interpretation',
        `<p>Kapitalkosten sind Opportunitätskosten der Mittelüberlassung. Deshalb zählen sie später in Investitions- und Kapitalstrukturfragen als Vergleichsgröße, nicht bloß als Bankdetail.</p>
         ${warn('Kostenfehler:', 'Billiges Fremdkapital ist nicht automatisch „besseres“ Kapital, wenn damit andere Risiken oder Folgeansprüche steigen.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Eigenkapitalkosten', eq: String.raw`$$k_E = \frac{D_1}{P_0} + g$$`, desc: 'Gordon-Growth-Formel bei konstantem Dividendenwachstum.' },
      { label: 'Skontokosten', eq: String.raw`$$k_{Skonto} \approx \frac{s}{1-s}\cdot\frac{360}{T-Z}$$`, desc: 'Verzicht auf Skonto kann einen sehr hohen effektiven Kreditzins bedeuten.' }
    ],
    aufgaben: [
      task(
        'Warum ist das Dividendenbarwertmodell mehr als eine Aktienpreisformel?',
        [
          step('Preisaussage erklären.', String.raw`\text{Der heutige Kurs wird als Barwert erwarteter Ausschüttungen gelesen.}`),
          step('Kostenaussage ergänzen.', String.raw`\text{Daraus lässt sich die geforderte Rendite der Eigenkapitalgeber ableiten.}`)
        ],
        'Das Dividendenbarwertmodell verknüpft Preis und Eigenkapitalkosten in einer gemeinsamen Bewertungslogik.'
      ),
      task(
        'Warum kann nicht genutztes Skonto ein teurer Finanzierungsvorgang sein?',
        [
          step('Ökonomische Alternative benennen.', String.raw`\text{Wer kein Skonto zieht, nutzt faktisch einen kurzfristigen Lieferantenkredit.}`),
          step('Effektivzins erklären.', String.raw`\text{Der Preis dieses Kredits kann auf das Jahr hochgerechnet sehr hoch sein.}`)
        ],
        'Skontoverzicht ist oft ein impliziter Kredit mit überraschend hohen effektiven Fremdkapitalkosten.'
      )
    ]
  },

  kapitalstruktur: {
    motivation: 'Kapitalstruktur bündelt das Modul: Nicht nur die Einzelkosten einer Finanzierungsquelle zählen, sondern ihre Mischung und die Frage, wie Rendite und Risiko gemeinsam auf das Eigenkapital durchschlagen.',
    theorie: [
      section(
        'Gewichtete Gesamtkapitalkosten',
        `<p>Der WACC fasst die Kosten von Eigen- und Fremdkapital entsprechend ihrer Anteile an der Finanzierung zusammen. Er ist damit die aggregierte Preisgröße der gesamten Kapitalstruktur.</p>
         ${mathBlock(String.raw`$$WACC = \frac{E}{E+D}k_E + \frac{D}{E+D}k_D$$`)}
      `
      ),
      section(
        'Leverage',
        `<p>Mehr Fremdkapital kann die Eigenkapitalrendite erhöhen, solange die Rendite des Gesamtkapitals über den Fremdkapitalkosten liegt. Gleichzeitig steigt das Risiko des Eigenkapitals, weil Schwankungen stärker auf den kleineren Eigenkapitalpuffer durchschlagen.</p>`
      ),
      section(
        'Modigliani-Miller als Benchmark',
        `<p>Die Irrelevanzthese zeigt, dass Kapitalstruktur unter sehr strengen Annahmen keinen Einfluss auf den Unternehmenswert hätte. Gerade deshalb ist sie didaktisch wertvoll: Sie macht sichtbar, welche realen Friktionen den Unterschied erzeugen.</p>
         ${warn('Leveragefehler:', 'Mehr Fremdkapital ist kein Gratishebel. Renditechance und Risikoverstärkung gehören immer in dieselbe Antwort.')}`
      )
    ].join(''),
    formeln: [
      { label: 'WACC', eq: String.raw`$$WACC = \frac{E}{E+D}k_E + \frac{D}{E+D}k_D$$`, desc: 'Gewichteter Preis der Finanzierungsmischung.' },
      { label: 'Leverage-Beziehung', eq: String.raw`$$r_E = r_U + \frac{D}{E}(r_U-r_D)$$`, desc: 'Mehr Verschuldung verstärkt die Eigenkapitalrendite, solange die Gesamtkapitalrendite über dem Fremdkapitalzins liegt.' }
    ],
    aufgaben: [
      task(
        'Warum kann mehr Fremdkapital die Eigenkapitalrendite erhöhen und trotzdem riskanter machen?',
        [
          step('Hebeleffekt beschreiben.', String.raw`\text{Feste Fremdkapitalkosten verteilen die Restgewinne auf weniger Eigenkapital.}`),
          step('Risikoeffekt ergänzen.', String.raw`\text{Gleichzeitig werden Verluste und Schwankungen stärker auf das Eigenkapital durchgereicht.}`)
        ],
        'Leverage ist immer Doppelbewegung: höhere Renditechance bei gleichzeitig höherem Eigenkapitalrisiko.'
      ),
      task(
        'Warum ist der WACC nicht nur ein mechanischer Durchschnitt?',
        [
          step('Gewichtungslogik nennen.', String.raw`\text{Die Gewichte spiegeln die tatsächliche Finanzierungsmischung.}`),
          step('Ökonomische Aussage ergänzen.', String.raw`\text{Verändert sich die Mischung, verschieben sich nicht nur Kostenanteile, sondern oft auch Risikoprämien.}`)
        ],
        'Der WACC fasst nicht nur Zahlen zusammen, sondern verdichtet die Preis- und Risikologik der gesamten Kapitalstruktur.'
      )
    ]
  }
};
