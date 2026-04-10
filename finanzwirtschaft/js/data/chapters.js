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
  { id: 'kapitalmarkt_bewertung', title: 'Kapitalmarkt und kapitalmarktorientierte Bewertung', cat: 'Grundlagen', short: 'K-Markt' },
  { id: 'institutionen_marktunvollkommenheit', title: 'Institutionen bei Marktunvollkommenheit', cat: 'Grundlagen', short: 'Institutionen' },
  { id: 'intertemporale_wahl', title: 'Intertemporale Wahl, Zeitpräferenzen und Budgetgerade', cat: 'Investition', short: 'Intertemporal' },
  { id: 'kapitalwert_fisher', title: 'Kapitalwert, Fisher-Separation und unvollkommener Kapitalmarkt', cat: 'Investition', short: 'Kapitalwert' },
  { id: 'auf_abzinsen', title: 'Aufzinsen, Abzinsen und Gegenwartswerte', cat: 'Investition', short: 'Zeitwert' },
  { id: 'renten_endwert', title: 'Rentenfaktoren, Barwert und Endwert', cat: 'Investition', short: 'Renten' },
  { id: 'annuitaeten_finanzplan', title: 'Annuitätenmethode und vollständiger Finanzplan', cat: 'Investition', short: 'Annuität' },
  { id: 'izf_kapitalwertfunktion', title: 'Interner Zinsfuß und Kapitalwertfunktion', cat: 'Investition', short: 'IZF' },
  { id: 'izf_grenzen', title: 'IZF: Wiederanlageprämisse, Mehrdeutigkeit und Grenzen', cat: 'Investition', short: 'IZF-Grenzen' },
  { id: 'unsicherheit', title: 'Unsicherheit: Zustände, Dominanz und Erwartungswert', cat: 'Unsicherheit & Finanzierung', short: 'Unsicherheit' },
  { id: 'risikoadjustierter_kapitalwert', title: 'Risikoadjustierter Kapitalwert und Sicherheitsabschläge', cat: 'Unsicherheit & Finanzierung', short: 'Risiko-KW' },
  { id: 'bezugsrecht', title: 'Kapitalerhöhung, Bezugsrecht und Verwässerungsschutz', cat: 'Unsicherheit & Finanzierung', short: 'Bezugsrecht' },
  { id: 'eigenkapitalkosten', title: 'Kosten des Eigenkapitals', cat: 'Unsicherheit & Finanzierung', short: 'EK-Kosten' },
  { id: 'fremdkapitalkosten', title: 'Kosten des Fremdkapitals', cat: 'Unsicherheit & Finanzierung', short: 'FK-Kosten' },
  { id: 'wacc', title: 'Gesamtkapitalkosten (WACC)', cat: 'Kapitalstruktur', short: 'WACC' },
  { id: 'wacc_leverage', title: 'Leverage-Effekt', cat: 'Kapitalstruktur', short: 'Lev.' },
  { id: 'modigliani_miller', title: 'Modigliani-Miller als Benchmark', cat: 'Kapitalstruktur', short: 'MM' }
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

  kapitalmarkt_bewertung: {
    motivation: 'Sobald Finanzwirtschaft nicht mehr nur als Innenfinanzierung gelesen wird, tauchen Kapitalmarktpreise, Präferenzen und Institutionen auf. Genau hier beginnt die moderne Finanzierungstheorie.',
    theorie: [
      section(
        'Moderne Betrachtungsweise als Perspektivwechsel',
        `<p>Die moderne Finanzwirtschaft fragt nicht mehr nur nach Liquidität und Mittelherkunft, sondern nach wertmaximierenden Entscheidungen aus Sicht der Kapitalgeber. Marktpreise und Präferenzen werden damit zu Kernbausteinen der Analyse.</p>`
      ),
      section(
        'Marktpreise als Tauschpreise über die Zeit',
        `<p>Kapitalmärkte übersetzen Zeit in Preise. Zinssätze und Renditen sind damit keine Dekoration, sondern die objektive Marktlogik, mit der Gegenwarts- und Zukunftszahlungen gegeneinander bewertet werden.</p>
         ${mathBlock(String.raw`$$\text{heutige Zahlung} \xleftrightarrow[\text{Abzinsung}]{\text{Aufzinsung}} \text{künftige Zahlung}$$`)}
      `
      ),
      section(
        'Rolle von Präferenzen und Nutzen',
        `<p>Entscheider bewerten Gegenwart und Zukunft nicht neutral. Zeitpräferenzen entscheiden darüber, ob heutiger Konsum, Ersparnis oder spätere Rückflüsse attraktiver wirken. Marktpreis und Präferenz treffen sich später in der intertemporalen Wahl.</p>`
      ),
      section(
        'Kapitalmarktorientierung: Bewertung und Benchmark',
        `<p>In der kapitalmarktorientierten Ausprägung stehen Preisbildung auf vollkommenen Märkten und die Ableitung von Bewertungs- und Entscheidungskriterien im Vordergrund. Der vollkommene Kapitalmarkt ist dabei ein analytischer Referenzpunkt: Er liefert klare Tausch- und Bewertungslogik, ersetzt aber nicht die Beschreibung realer Friktionen.</p>
         ${warn('Verwechslungsfehler:', 'Kapitalmarktorientierung meint nicht „die Realität ist reibungslos“, sondern: Zins und Marktpreis strukturieren Vergleiche über die Zeit und liefern unter klaren Annahmen eindeutige Investitionsregeln.')}`
      ),
      section(
        'Warum diese Seite klausurrelevant ist',
        `<p>Viele Klausurfehler entstehen nicht in der Rechnung, sondern davor: Studierende sehen Zins, Preis und Präferenz nicht als gemeinsame Entscheidungslogik. Genau deshalb ist diese Seite kein Vorspann, sondern die methodische Brücke zum gesamten Investitionsblock.</p>`
      )
    ].join(''),
    formeln: [
      { label: 'Marktpreis der Zeit', eq: String.raw`\text{Zins} = \text{Preis des Zeittausches}`, desc: 'Der Zins verbindet Gegenwarts- und Zukunftszahlungen.', variables: { 'Zins': 'Marktpreis, zu dem Konsum zwischen Zeitpunkten getauscht wird' } },
      { label: 'Entscheidungslogik', eq: String.raw`\text{Zahlung} + \text{Zeitpunkt} + \text{Marktpreis} \Rightarrow \text{Bewertung}`, desc: 'Finanzentscheidungen entstehen aus Zahlungen, Zeitstruktur und Vergleichsmaßstab.' }
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
        'Warum ist der vollkommene Kapitalmarkt in der kapitalmarktorientierten Sicht kein Realitätsersatz?',
        [
          step('Rolle des Modells benennen.', String.raw`\text{Er strukturiert Bewertung und Tauschlogik unter idealisierten Annahmen.}`),
          step('Grenze einordnen.', String.raw`\text{Reale Märkte weichen durch Information, Transaktionskosten und weitere Friktionen ab.}`)
        ],
        'Der vollkommene Kapitalmarkt ist ein Bewertungs- und Argumentationsrahmen, keine Behauptung, dass alle Märkte reibungslos sind.'
      ),
      task(
        'Eine Aufgabe nennt Marktzinssatz, Konsumzeitpunkte und Alternativen. Was ist der erste strukturierende Gedanke?',
        [
          step('Objekt klären.', String.raw`\text{Es geht nicht nur um Finanzierung, sondern um Bewertung zeitverschiedener Zahlungen.}`),
          step('Preisfunktion benennen.', String.raw`\text{Der Marktzinssatz übersetzt diese Zahlungen auf einen gemeinsamen Vergleichsmaßstab.}`),
          step('Konsequenz ziehen.', String.raw`\text{Erst danach folgt die Wahl des passenden Bewertungsverfahrens.}`)
        ],
        'Sobald Marktzinssatz und Zeitpunkte gemeinsam auftauchen, ist die Aufgabe als Bewertungsproblem über den Zeittausch zu lesen.'
      )
    ]
  },

  institutionen_marktunvollkommenheit: {
    motivation: 'Institutionen werden finanzwirtschaftlich dort zentral, wo reale Kapitalmärkte unvollkommen sind und reine Preismechanik nicht mehr genügt.',
    theorie: [
      section(
        'Warum Institutionen wie Banken entstehen',
        `<p>In vollkommenen Märkten wären viele Finanzintermediäre theoretisch entbehrlich. In der Wirklichkeit senken Banken Suchkosten, bündeln Informationen, überwachen Kreditnehmer und transformieren Fristen. Sie sind damit Antworten auf Marktunvollkommenheit.</p>
         ${warn('Abstraktionsfehler:', 'Die Theorie vollkommener Märkte ist ein Benchmark, keine Beschreibung der Wirklichkeit.')}`
      ),
      section(
        'Welche Friktionen gemeint sind',
        `<p>Die Quelle für Institutionen sind nicht bloß „komplizierte Märkte“, sondern konkrete Friktionen: Informationsasymmetrien, Suchkosten, Transaktionskosten, Überwachungsprobleme und unvollständige Verträge. Erst diese Reibungen machen Intermediation ökonomisch wertvoll.</p>`
      ),
      section(
        'Kapitalmarktorientierung versus Institutionenorientierung',
        `<p>Die kapitalmarktorientierte Sicht fragt: Was würden Preise auf vollkommenen Märkten leisten? Die institutionenorientierte Sicht fragt: Welche Organisationen und Regeln braucht man gerade deshalb, weil reale Märkte das nicht vollständig leisten?</p>`
      ),
      section(
        'Klausurlogik',
        `<p>Wenn in einer Aufgabe Banken, Crowdfunding, Überwachung oder asymmetrische Information auftauchen, ist das fast immer ein Signal dafür, dass nicht mehr nur die reine Zinslogik, sondern institutionelle Problemlösung erklärt werden soll.</p>`
      )
    ].join(''),
    formeln: [
      { label: 'Marktunvollkommenheit', eq: String.raw`\text{Informationskosten} + \text{Transaktionskosten} \Rightarrow \text{Institutionen}`, desc: 'Institutionen werden durch Friktionen wirtschaftlich sinnvoll.' },
      { label: 'Orientierungsfrage', eq: String.raw`\text{vollkommener Markt?} \;\text{nein} \Rightarrow \text{Institution / Vertrag / Kontrolle prüfen}`, desc: 'Wenn Preismechanik nicht reicht, rückt institutionelle Gestaltung in den Vordergrund.' }
    ],
    aufgaben: [
      task(
        'Warum sind Banken auch dann sinnvoll, wenn Kapitalmärkte theoretisch Zeittausch erlauben?',
        [
          step('Benchmark-Modell nennen.', String.raw`\text{Auf vollkommenen Märkten wäre direkte Finanzierung einfacher möglich.}`),
          step('Friktionen als Begründung ergänzen.', String.raw`\text{In der Wirklichkeit rechtfertigen Informations-, Such- und Überwachungskosten die Bankfunktion.}`)
        ],
        'Banken werden gerade deshalb relevant, weil reale Märkte unvollkommen sind und Friktionen direkte Finanzierung verteuern.'
      ),
      task(
        'Eine Aufgabe spricht von Informationsasymmetrien zwischen Kapitalgebern und Unternehmen. Welche Blickrichtung ist jetzt gefragt?',
        [
          step('Signal lesen.', String.raw`\text{Informationsasymmetrie ist kein Preisdetail, sondern ein Institutionssignal.}`),
          step('Konsequenz nennen.', String.raw`\text{Gesucht sind Kontroll-, Vermittlungs- oder Vertragsmechanismen statt reiner Barwertarithmetik.}`)
        ],
        'Sobald Informationsasymmetrie im Vordergrund steht, ist institutionenorientierte Problemlösung gefragt.'
      ),
      task(
        'Warum ist „vollkommener Kapitalmarkt“ für dieses Kapitel trotzdem wichtig, obwohl reale Märkte unvollkommen sind?',
        [
          step('Benchmarkfunktion benennen.', String.raw`\text{Er zeigt, welche Funktionen Preise unter idealen Bedingungen übernehmen könnten.}`),
          step('Abweichung deuten.', String.raw`\text{Gerade die Differenz zur Realität erklärt den Bedarf an Institutionen.}`)
        ],
        'Der Benchmark ist didaktisch wertvoll, weil erst an ihm sichtbar wird, warum reale Institutionen überhaupt gebraucht werden.'
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
        'Welche Kosten in den Kapitalwert gehören',
        `<p>Für die Kapitalwertrechnung zählen nur zahlungswirksame und entscheidungsrelevante Größen. Versunkene Kosten gehören nicht hinein; Opportunitätskosten dagegen schon. Genau diese Trennung ist im Kurs ausdrücklich klausurrelevant.</p>`
      ),
      section(
        'Fisher-Separation',
        `<p>Bei vollkommenem Kapitalmarkt kann die Investitionsentscheidung von der Konsumentscheidung getrennt werden. Zuerst wird das Projekt mit dem höchsten positiven Kapitalwert gewählt, anschließend wird entlang des Kapitalmarkts der individuell gewünschte Konsumpfad eingestellt.</p>`
      ),
      section(
        'Grenzen am unvollkommenen Kapitalmarkt',
        `<p>Unterscheiden sich Soll- und Habenzins oder sind Finanzierungsbedingungen asymmetrisch, zerfällt diese Trennung. Dann beeinflussen Marktunvollkommenheiten die Investitionsentscheidung direkt.</p>
         ${warn('Kapitalwertfehler:', 'Der Kapitalwert ist kein „Gewinn in Prozent“, sondern ein absoluter Vermögenseffekt relativ zur Kapitalmarktalternative.')}`
      ),
      section(
        'Entscheidungsprobleme sauber unterscheiden',
        `<p>Der Kurs trennt drei Fälle: Vorteilhaftigkeitsproblem, mehrere voneinander unabhängige Projekte und Wahlproblem bei Ausschlussalternativen. Die Regel ändert sich leicht je nach Struktur, aber der Kapitalwert bleibt die führende Vermögensgröße.</p>`
      )
    ].join(''),
    formeln: [
      { label: 'Kapitalwert', eq: String.raw`$$K_0 = -A_0 + \sum_{t=1}^{n}\frac{CF_t}{(1+i)^t}$$`, desc: 'Alle entscheidungsrelevanten Zahlungen werden auf t=0 bezogen.', variables: { 'A_0': 'Anfangsauszahlung / Anschaffungsauszahlung', 'CF_t': 'Nettozahlung der Periode t', 'i': 'relevanter Kalkulationszins', 'K_0': 'Vermögenszuwachs im Zeitpunkt 0' } },
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
      ),
      task(
        'Zwei ausschließende Projekte: A hat höheren IZF, B höheren Kapitalwert bei gegebenem Kalkulationszins. Welches Projekt passt zur Vermögensmaximierung?',
        [
          step('Zielgröße zuerst festlegen.', String.raw`\text{Bei Ausschlussalternativen ist Vermögensmaximierung die Leitnorm.}`),
          step('Konfliktregel anwenden.', String.raw`\text{Bei IZF-Kapitalwert-Konflikt entscheidet der höhere } K_0 \text{ am relevanten Vergleichszins.}`),
          step('Ökonomisch einordnen.', String.raw`\text{Ein höherer Prozentwert kann trotzdem weniger absoluten Vermögenszuwachs erzeugen.}`)
        ],
        'Für Vermögensmaximierung wird das Projekt mit höherem Kapitalwert gewählt, auch wenn dessen IZF niedriger ist.'
      ),
      task(
        'Warum müssen versunkene Kosten und Opportunitätskosten in einer Kapitalwertaufgabe unterschiedlich behandelt werden?',
        [
          step('Versunkene Kosten einordnen.', String.raw`\text{Sie ändern sich durch die aktuelle Entscheidung nicht mehr und gehören nicht in } K_0.`),
          step('Opportunitätskosten einordnen.', String.raw`\text{Entgangene Alternativzahlungen sind entscheidungsrelevant und müssen mitgerechnet werden.}`),
          step('Entscheidungslogik schließen.', String.raw`\text{Nur zahlungswirksame und entscheidungsrelevante Größen dürfen das Vermögensurteil beeinflussen.}`)
        ],
        'Kapitalwertlogik heißt nicht „alle Zahlen eintragen“, sondern nur die entscheidungsrelevanten Zahlungswirkungen sauber erfassen.'
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
      ),
      task(
        'Wie gehst du mit variablen Zinssätzen über mehrere Perioden klausursicher um?',
        [
          step('Periodenschnitt explizit machen.', String.raw`\text{Jede Teilperiode erhält ihren eigenen Auf-/Abzinsungsfaktor.}`),
          step('Produkt statt Einheitsfaktor nutzen.', String.raw`\text{Bei wechselnden Sätzen wird mit } \prod_t (1+i_t) \text{ transformiert, nicht mit einem pauschalen } (1+i)^n.`),
          step('Signlogik prüfen.', String.raw`\text{Vor dem Rechnen klären: Wird auf den Zielzeitpunkt hin aufgezinst oder von ihm weg abgezinst?}`)
        ],
        'Variable Zinssätze erfordern periodenscharfe Faktorlogik; pauschale Exponenten führen hier systematisch zu Fehlurteilen.'
      )
    ]
  },

  renten_endwert: {
    motivation: 'Mehrperiodige Investitionsaufgaben werden erst dann klausursicher, wenn regelmäßige Zahlungen sauber über Rentenfaktoren, Barwert und Endwert gelesen werden können.',
    theorie: [
      section(
        'Rentenfaktoren',
        `<p>Rentenbarwert- und Rentenendwertfaktoren fassen regelmäßige Zahlungen in kompakter Form zusammen. Dadurch werden mehrperiodige Zahlungsreihen mit konstanten periodischen Zahlungen rechnerisch beherrschbar.</p>
         ${mathBlock(String.raw`$$RBWF = \frac{1-(1+i)^{-n}}{i} \qquad REWF = \frac{(1+i)^n-1}{i}$$`)}
      `
      ),
      section(
        'Barwert- und Endwertsicht',
        `<p>Barwert- und Endwertmethode bewerten dieselbe Zahlungsreihe, nur auf unterschiedlichen Zeitpunkten. Barwert bezieht sich auf den Startpunkt, Endwert auf den Endpunkt. Bei konsistenter Anwendung führen beide zur gleichen Entscheidung.</p>
         ${mathBlock(String.raw`$$EW_n = K_0(1+i)^n$$`)}
      `
      ),
      section(
        'Methodenauswahl in Aufgaben',
        `<p>Wenn regelmäßige Zahlungen gegeben sind, ist nicht jede Aufgabe automatisch eine Annuitätenaufgabe. Erst die Zielgröße entscheidet: Wird ein Gegenwartswert, ein Zukunftswert oder eine periodische Äquivalentgröße gesucht? Genau diese Auswahl ist klausurentscheidend.</p>
         ${warn('Methodenfehler:', 'Rentenfaktor, Barwert und Endwert sind keine konkurrierenden Regeln, sondern unterschiedliche Übersetzungen derselben Zahlungsstruktur.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Rentenbarwertfaktor', eq: String.raw`$$RBWF = \frac{1-(1+i)^{-n}}{i}$$`, desc: 'Periodische Zahlungen werden auf den Gegenwartszeitpunkt gebracht.', variables: { 'i': 'periodischer Zinssatz', 'n': 'Anzahl der Perioden' } },
      { label: 'Rentenendwertfaktor', eq: String.raw`$$REWF = \frac{(1+i)^n-1}{i}$$`, desc: 'Periodische Zahlungen werden auf den Endzeitpunkt gebracht.', variables: { 'i': 'periodischer Zinssatz', 'n': 'Anzahl der Perioden' } },
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
        'Wann ist in einer Aufgabe der Rentenbarwertfaktor der richtige Zugriff?',
        [
          step('Zahlungsstruktur lesen.', String.raw`\text{Gesucht ist eine Reihe gleicher periodischer Zahlungen.}`),
          step('Bewertungszeitpunkt bestimmen.', String.raw`\text{Wenn der Wert heute bzw. am Startpunkt gesucht ist, führt der Rentenbarwertfaktor.}`),
          step('Abgrenzung ergänzen.', String.raw`\text{Wird dagegen der Zukunftswert gesucht, ist der Rentenendwertfaktor naheliegender.}`)
        ],
        'Rentenfaktoren sind nur dann passend, wenn eine echte periodische Gleichzahlungsstruktur vorliegt und der Zielzeitpunkt sauber bestimmt ist.'
      ),
      task(
        'Warum ist „regelmäßige Zahlung“ allein noch kein vollständiger Methodenhinweis?',
        [
          step('Struktur von Zielgröße trennen.', String.raw`\text{Regelmäßige Zahlungen sagen noch nicht, ob Barwert, Endwert oder äquivalente Rente gesucht ist.}`),
          step('Methodenwahl schließen.', String.raw`\text{Erst Zielzeitpunkt und Entscheidungsfrage legen das passende Verfahren fest.}`)
        ],
        'Finanzwirtschaftliche Methodenwahl startet nicht bei der Formel, sondern bei Zahlungsstruktur plus Zielgröße.'
      )
    ]
  },

  annuitaeten_finanzplan: {
    motivation: 'Annuität und vollständiger Finanzplan machen aus bloßer Zeitwertrechnung eine echte Entscheidungs- und Finanzierungslogik über mehrere Perioden.',
    theorie: [
      section(
        'Annuität als äquivalente Periodengröße',
        `<p>Die Annuitätenmethode drückt den Kapitalwert einer Investition als äquivalente konstante Periodenzahlung aus: dieselbe Zahlungsreihe wird in eine Rente mit gleichem Barwert übersetzt. Damit wird der Wertbeitrag einer Investition periodisch lesbar und mit anderen periodischen Größen vergleichbar.</p>
         ${mathBlock(String.raw`$$a = \frac{K_0}{RBWF(n,i)} = K_0 \cdot WGF(n,i)$$`)}
      `
      ),
      section(
        'Vollständiger Finanzplan',
        `<p>Der vollständige Finanzplan zeigt periodisch, wann Investition, Rückflüsse, Zinsen, Tilgung und möglicher Wertzuwachs anfallen. Dadurch wird sichtbar, dass Investitionsrechnung immer zugleich auch eine Finanzierungsrechnung ist.</p>`
      ),
      section(
        'Wann die Annuität besonders nützlich ist',
        `<p>Die Annuität ist besonders hilfreich, wenn Projekte mit unterschiedlichen Laufzeiten oder periodischen Finanzierungsraten verglichen werden sollen. Sie übersetzt den gesamten Vermögenseffekt in eine gleichmäßige periodische Entscheidungsgröße.</p>`
      ),
      section(
        'Klausurfehler',
        `<p>Typische Fehler sind: Kapitalwert und Annuität gegeneinander auszuspielen, Laufzeitäquivalenz zu ignorieren oder den vollständigen Finanzplan als bloßes Rechenschema statt als Kapitalbedarfslogik zu behandeln.</p>
         ${warn('Äquivalenzfehler:', 'Annuitätenmethode und Kapitalwertmethode widersprechen sich nicht. Die Annuität ist nur eine andere Lesart desselben Vermögenseffekts.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Annuität aus Kapitalwert', eq: String.raw`$$a = \frac{K_0}{RBWF(n,i)}$$`, desc: 'Äquivalente konstante Periodenzahlung zum Kapitalwert.', variables: { 'a': 'äquivalente Periodenzahlung / Annuität', 'K_0': 'Kapitalwert im Zeitpunkt 0', 'RBWF(n,i)': 'Rentenbarwertfaktor bei Laufzeit n und Zinssatz i' } },
      { label: 'Wiedergewinnungsfaktor', eq: String.raw`$$WGF(n,i) = \frac{(1+i)^n i}{(1+i)^n-1}$$`, desc: 'Kehrwert des Rentenbarwertfaktors.' }
    ],
    aufgaben: [
      task(
        'Warum ist die Annuität bei Projektvergleich oft anschaulicher als der nackte Kapitalwert?',
        [
          step('Übersetzungsleistung nennen.', String.raw`\text{Sie macht den Vermögenseffekt als konstante periodische Größe lesbar.}`),
          step('Vergleichsvorteil erklären.', String.raw`\text{Damit lassen sich Projekte oder Finanzierungsraten mit unterschiedlicher Laufzeit leichter vergleichen.}`)
        ],
        'Die Annuität verdichtet den Kapitalwert in eine periodische Entscheidungsgröße und erleichtert dadurch projektübergreifende Vergleiche.'
      ),
      task(
        'Wozu dient der vollständige Finanzplan über die bloße Endwertrechnung hinaus?',
        [
          step('Periodische Sicht nennen.', String.raw`\text{Er zeigt, wann Finanzierungslücken oder Zwischenrückflüsse auftreten.}`),
          step('Verbindung von Investition und Finanzierung erklären.', String.raw`\text{Er macht sichtbar, dass Investitionsrechnung immer auch eine Kapitalbedarfsfrage ist.}`)
        ],
        'Der vollständige Finanzplan verbindet Zeitwertrechnung mit echter Finanzierungslogik über alle Perioden.'
      ),
      task(
        'Warum ist fehlende Laufzeitäquivalenz bei Annuitätenvergleichen eine echte Klausurfalle?',
        [
          step('Problem benennen.', String.raw`\text{Gleiche Methode heißt nicht automatisch gleiche Vergleichsbasis.}`),
          step('Lösung nennen.', String.raw`\text{Die Projekte müssen auf eine gemeinsame periodische Vergleichslogik gebracht werden.}`)
        ],
        'Annuitäten sind nur dann fair vergleichbar, wenn die zugrunde liegende Laufzeitproblematik sauber adressiert wird.'
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
        `<p>Die Kapitalwertfunktion zeigt, wie empfindlich der Projektwert auf Änderungen des Kalkulationszinssatzes reagiert. Bei einer typischen Investition (Auszahlung zuerst, spätere Einzahlungen) fällt sie mit steigendem Zinssatz; bei einer Finanzierungskonstellation kann das Profil spiegelbildlich ansteigen. Für die Einordnung von IZF-Regeln ist diese Unterscheidung klausurrelevant.</p>`
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
      ),
      task(
        'Warum ist „IZF > Kalkulationszins“ ein Einstiegstest und noch keine vollständige Projektentscheidung?',
        [
          step('Einstiegstest einordnen.', String.raw`\text{Die Regel liefert ein Ja/Nein zur Vorteilhaftigkeit eines einzelnen Projekts.}`),
          step('Vergleichsproblem ergänzen.', String.raw`\text{Bei mehreren Projekten mit unterschiedlicher Größe/Laufzeit braucht man zusätzlich die Kapitalwert- und Profilinformation.}`),
          step('Trade-off benennen.', String.raw`\text{Methodenselektion ist ein Strukturproblem: Prozenturteil vs. absoluter Vermögensbeitrag.}`)
        ],
        'Die IZF-Regel ist notwendig, aber bei Projektvergleichen ohne Kapitalwertprofil nicht hinreichend.'
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
        'Dominanz als erste Vorauswahl',
        `<p>Dominanz ist das erste Filtersieb: Wer in jedem Zustand schlechter ist, muss nicht weiter diskutiert werden. Erst wenn keine Alternative dominiert wird, lohnt sich die feinere Analyse über Erwartungswert und Risiko.</p>`
      ),
      section(
        'Erwartungswert, Varianz und Verlustseite',
        `<p>Dominanz ist das erste Filtersieb: Wer in jedem Zustand schlechter ist, muss nicht weiter diskutiert werden. Danach kommen Erwartungswert, Verlustwahrscheinlichkeit und gegebenenfalls weitere Risikomaße ins Spiel.</p>
         ${mathBlock(String.raw`$$E(X) = \sum_{s} p_s x_s \qquad Var(X)= \sum_s p_s(x_s-E(X))^2$$`)}
      `
      ),
      section(
        'Interpretation statt bloßer Kennzahl',
        `<p>Ein hoher Erwartungswert reicht nicht automatisch. Gerade im Kurs ist wichtig, dass Verlustwahrscheinlichkeit, downside risk und Streuung mitgelesen werden. Die Entscheidung ist deshalb immer eine Abwägung von Rendite und Risiko statt einer simplen Mittelwertregel.</p>
         ${warn('Unsicherheitsfehler:', 'Ein hoher Erwartungswert genügt noch nicht, wenn die Verlustseite oder die Streuung des Projekts nicht mitgelesen wird.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Erwartungswert', eq: String.raw`$$E(X) = \sum_s p_s x_s$$`, desc: 'Gewichteter Durchschnitt zustandsabhängiger Ergebnisse.', variables: { 'p_s': 'Wahrscheinlichkeit des Zustands s', 'x_s': 'Ergebnis / Auszahlung im Zustand s' } },
      { label: 'Varianz', eq: String.raw`$$Var(X)= \sum_s p_s(x_s-E(X))^2$$`, desc: 'Streuungsmaß der Ergebnisse um ihren Erwartungswert.' }
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
      ),
      task(
        'Zwei Alternativen haben denselben Erwartungswert, aber unterschiedliche Verlustseite. Welche Zusatzprüfung ist klausurentscheidend?',
        [
          step('Mean-only-Falle benennen.', String.raw`\text{Gleicher } E(X) \text{ bedeutet nicht gleiches Risikoprofil.}`),
          step('Downside prüfen.', String.raw`\text{Verlustwahrscheinlichkeit und Verlusthöhe in den schlechten Zuständen explizit vergleichen.}`),
          step('Regel konsistent machen.', String.raw`\text{Entscheidung erst nach Abgleich von Erwartungswert und Risikotoleranz treffen.}`)
        ],
        'Bei gleichem Erwartungswert entscheidet oft die Verlustseite; deshalb muss downside risk explizit mitbewertet werden.'
      )
    ]
  },

  risikoadjustierter_kapitalwert: {
    motivation: 'Unsicherheit wird erst finanzwirtschaftlich entscheidungsrelevant, wenn sie wieder in eine Bewertungsregel übersetzt wird. Genau das leisten Risikozuschlag und Sicherheitsabschlag.',
    theorie: [
      section(
        'Vom sicheren zum risikoadjustierten Kapitalwert',
        `<p>Der sichere Kapitalwert vergleicht Zahlungen mit einem sicheren Kalkulationszins. Unter Unsicherheit muss zusätzlich geklärt werden, wie Risiko in die Bewertung eingeht: über einen Zuschlag im Diskontsatz oder über Abschläge direkt auf die erwarteten Zahlungen.</p>`
      ),
      section(
        'Risikozuschlagsmethode',
        `<p>Bei der Risikozuschlagsmethode wird der sichere Kalkulationszins um einen Zuschlag erhöht. Riskantere Projekte werden dadurch stärker abgezinst.</p>
         ${mathBlock(String.raw`$$K_0^{risk} = -A_0 + \sum_{t=1}^{n}\frac{E(CF_t)}{(1+i+d)^t}$$`)}
      `
      ),
      section(
        'Sicherheitsabschlag auf Cashflows',
        `<p>Alternativ kann Risiko direkt auf der Zahlungsseite berücksichtigt werden: Statt die erwarteten Zahlungen unverändert zu verwenden, werden Risikoabschläge vorgenommen. So bleibt der Diskontsatz unverändert, während der Zahlungsstrom vorsichtiger angesetzt wird.</p>
         ${mathBlock(String.raw`$$K_0^{safe} = -A_0 + \sum_{t=1}^{n}\frac{E(CF_t)-D_t}{(1+i)^t}$$`)}
      `
      ),
      section(
        'Klausurfehler und Methodenwahl',
        `<p>Beide Methoden wollen dasselbe: Risiko in eine Vermögensregel übersetzen. Typische Fehler sind, Risiko doppelt zu berücksichtigen oder die ökonomische Bedeutung des Zuschlags/Abschlags nicht zu erklären.</p>
         ${warn('Doppelt-Risiko-Fehler:', 'Wer gleichzeitig den Diskontsatz erhöht und die Cashflows pauschal drückt, riskiert eine doppelte Risikobelastung ohne Begründung.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Risikozuschlag', eq: String.raw`$$K_0^{risk} = -A_0 + \sum_{t=1}^{n}\frac{E(CF_t)}{(1+i+d)^t}$$`, desc: 'Risiko geht über einen zusätzlichen Zuschlag im Diskontsatz ein.', variables: { 'd': 'Risikozuschlag auf den sicheren Kalkulationszins', 'E(CF_t)': 'erwarteter Cashflow der Periode t' } },
      { label: 'Sicherheitsabschlag', eq: String.raw`$$K_0^{safe} = -A_0 + \sum_{t=1}^{n}\frac{E(CF_t)-D_t}{(1+i)^t}$$`, desc: 'Risiko wird direkt als Abschlag auf die erwarteten Zahlungen modelliert.', variables: { 'D_t': 'Sicherheitsabschlag / Risikoabschlag in Periode t' } }
    ],
    aufgaben: [
      task(
        'Warum ist der risikoadjustierte Kapitalwert mehr als „normaler Kapitalwert mit größerem Zinssatz“?',
        [
          step('Ziel benennen.', String.raw`\text{Risiko soll systematisch in die Vermögensbewertung übersetzt werden.}`),
          step('Methoden unterscheiden.', String.raw`\text{Das kann über den Diskontsatz oder über die Cashflows geschehen.}`),
          step('Interpretation ergänzen.', String.raw`\text{Die Anpassung ist eine Risikobewertung, nicht bloß ein Rechentrick.}`)
        ],
        'Risikoadjustierter Kapitalwert macht aus Unsicherheit wieder eine finanzwirtschaftliche Entscheidungsregel.'
      ),
      task(
        'Wann ist ein Risikoabschlag auf die Zahlungsseite didaktisch oft klarer als ein Zuschlag im Diskontsatz?',
        [
          step('Zahlungsunsicherheit direkt benennen.', String.raw`\text{Wenn die Unsicherheit vor allem in der Höhe der Rückflüsse liegt, ist ein Cashflow-Abschlag oft anschaulicher.}`),
          step('Bewertungsgedanke schließen.', String.raw`\text{Der sichere Vergleichszins bleibt stehen, aber die erwarteten Zahlungen werden vorsichtiger angesetzt.}`)
        ],
        'Cashflow-Abschläge machen sichtbar, welche Teile der Zahlungsreihe risikobehaftet sind, statt nur pauschal den Diskontsatz anzuheben.'
      ),
      task(
        'Welche typische Überkorrektur muss in einer Klausurlösung aktiv vermieden werden?',
        [
          step('Doppelung nennen.', String.raw`\text{Nicht gleichzeitig denselben Risikoaspekt im Zins und in den Cashflows ohne Begründung abbilden.}`),
          step('Methodenreinheit fordern.', String.raw`\text{Die Lösung muss erklären, wo das Risiko modelliert wird und warum.}`)
        ],
        'Die saubere Lösung benennt genau eine konsistente Risikologik statt Risiko doppelt zu bestrafen.'
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

  eigenkapitalkosten: {
    motivation: 'Eigen- und Fremdkapital haben keinen gleichen Preis. Gute Finanzentscheidungen hängen deshalb daran, wie sauber diese Kostenquellen gemessen und interpretiert werden.',
    theorie: [
      section(
        'Eigenkapitalkosten über das Dividendenbarwertmodell',
        `<p>Beim Dividendenbarwertmodell wird der Aktienpreis als Barwert erwarteter Dividenden gelesen. Daraus lässt sich die von den Eigenkapitalgebern geforderte Rendite ableiten.</p>
         ${mathBlock(String.raw`$$k_E = \frac{D_1}{P_0} + g$$`)}
      `
      ),
      section(
        'Kurs, erwartete Rendite und Kalkulationszins',
        `<p>Im Marktgleichgewicht entspricht der aus Kurs und erwarteten künftigen Zahlungen implizite Diskontierungssatz der erwarteten Eigenkapitalrendite. Diese Größe ist zugleich der Kalkulationszins für die Bewertung unsicherer Projekte bei reiner Eigenfinanzierung in der entsprechenden Modelllogik.</p>`
      ),
      section(
        'Primär- und Sekundärmarkt sauber trennen',
        `<p>Das Kursniveau am Sekundärmarkt ist nicht bloß „Hintergrund“. Es liefert den Preis, aus dem die geforderte Rendite rückwärts gelesen wird. Damit werden Eigenkapitalkosten marktbasiert bestimmt und nicht willkürlich gesetzt.</p>`
      ),
      section(
        'Interpretation',
        `<p>Kapitalkosten sind Opportunitätskosten der Mittelüberlassung. Deshalb zählen sie später in Investitions- und Kapitalstrukturfragen als Vergleichsgröße, nicht bloß als Bankdetail.</p>
         ${warn('Kostenfehler:', 'Billiges Fremdkapital ist nicht automatisch „besseres“ Kapital, wenn damit andere Risiken oder Folgeansprüche steigen.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Eigenkapitalkosten', eq: String.raw`$$k_E = \frac{D_1}{P_0} + g$$`, desc: 'Gordon-Growth-Formel bei konstantem Dividendenwachstum.', variables: { 'D_1': 'erwartete Dividende der nächsten Periode', 'P_0': 'aktueller Aktienkurs', 'g': 'erwartete konstante Wachstumsrate der Dividenden' } },
      { label: 'Marktgleichgewichtslogik', eq: String.raw`$$P_0 = \sum_{t=1}^{\infty}\frac{E(D_t)}{(1+k_E)^t}$$`, desc: 'Der heutige Kurs ist der Barwert der erwarteten Ausschüttungen.' }
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
        'Warum ist bei Kapitalkosten immer die Verknüpfung „Formel -> Ergebnis -> Bedeutung“ zu prüfen?',
        [
          step('Formel korrekt anwenden.', String.raw`\text{Parameter wie } D_1, P_0 \text{ und } g \text{ müssen konsistent eingesetzt werden.}`),
          step('Ergebnis wirtschaftlich lesen.', String.raw`\text{Die Zahl ist eine Mindestanforderung der Kapitalgeber, keine bloße Rechengröße.}`),
          step('Entscheidungsbezug herstellen.', String.raw`\text{Erst im Vergleich mit Projekt- oder Finanzierungsertrag wird klar, ob Wert geschaffen wird.}`)
        ],
        'Kapitalkosten sind nur dann klausurrelevant verstanden, wenn Rechenergebnis und ökonomische Entscheidungslogik zusammengeführt werden.'
      ),
      task(
        'Warum ist der aktuelle Aktienkurs kein bloßer Datenpunkt, sondern Kern der Eigenkapitalkostenlogik?',
        [
          step('Preisfunktion benennen.', String.raw`\text{Der Kurs ist der Marktpreis, aus dem die geforderte Rendite rückwärts gelesen wird.}`),
          step('Konsequenz nennen.', String.raw`\text{Eigenkapitalkosten sind deshalb marktbasiert und nicht frei wählbar.}`)
        ],
        'Der aktuelle Kurs ist die Brücke zwischen erwarteten Ausschüttungen und gefordertem Eigenkapitalkostensatz.'
      )
    ]
  },

  fremdkapitalkosten: {
    motivation: 'Fremdkapital ist mehr als Nominalzins: Entscheidend sind die tatsächlich verursachten Finanzierungskosten und ihre Interpretation als Opportunitätskosten.',
    theorie: [
      section(
        'Nominalzins versus effektive Fremdkapitalkosten',
        `<p>Fremdkapital ist nicht nur der Nominalzins eines Kredits. Effektive Kosten können über interne Zinsfüße, Skonto, Gebühren oder Risikoprämien steigen. Gerade Lieferantenkredit und Skonto sind typische Klausurklassiker.</p>`
      ),
      section(
        'Fremdkapitalkosten als interner Zinsfuß der Finanzierungsreihe',
        `<p>Im Kurs werden Fremdkapitalkosten prinzipiell als interner Zinsfuß der durch die Finanzierung ausgelösten Zahlungsreihe gelesen. Damit ist sofort klar: Auch Finanzierung wird über Zahlungsreihen und Vergleichszinsen beurteilt, nicht nur Investition.</p>`
      ),
      section(
        'Skonto und Lieferantenkredit',
        `<p>Wer auf Skonto verzichtet, nutzt implizit einen kurzfristigen Lieferantenkredit. Genau deshalb kann ein kleiner Skontosatz auf Jahresbasis sehr hohe effektive Fremdkapitalkosten bedeuten.</p>
         ${mathBlock(String.raw`$$k_{Skonto} \approx \frac{s}{1-s}\cdot\frac{360}{T-Z}$$`)}
      `
      ),
      section(
        'Zeiteinheit, Vorzeichen und Vergleichszins',
        `<p>Viele Klausurfehler sind keine Rechenfehler, sondern Einheiten- und Interpretationsfehler: Skonto wird nicht annualisiert, Gebühren werden nicht in die Zahlungsreihe integriert oder Kreditaufnahme und Rückzahlung erhalten vertauschte Vorzeichen. Erst danach darf der gefundene Satz mit Alternativen wie Bankkredit oder Projektverzinsung verglichen werden.</p>
         ${warn('Einheitenfehler:', 'Ein 30-Tage-Kredit mit 2 % Kosten ist nicht „nur 2 % pro Jahr“. Ohne Annualisierung unterschätzt du die Fremdkapitalkosten systematisch.')}`
      ),
      section(
        'Interpretation und Fallen',
        `<p>Kapitalkosten sind Opportunitätskosten der Mittelüberlassung. Deshalb zählen sie später in Investitions- und Kapitalstrukturfragen als Vergleichsgröße, nicht bloß als Bankdetail.</p>
         ${warn('Kostenfehler:', 'Billiges Fremdkapital ist nicht automatisch „besseres“ Kapital, wenn damit andere Risiken oder Folgeansprüche steigen.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Skontokosten', eq: String.raw`$$k_{Skonto} \approx \frac{s}{1-s}\cdot\frac{360}{T-Z}$$`, desc: 'Verzicht auf Skonto kann einen sehr hohen effektiven Kreditzins bedeuten.', variables: { 's': 'Skontosatz', 'T': 'Zahlungsziel', 'Z': 'Skontofrist' } },
      { label: 'Finanzierungs-IZF', eq: String.raw`\text{FK-Kosten} = r^* \text{ der Finanzierungszahlungsreihe}`, desc: 'Fremdfinanzierung wird finanzwirtschaftlich wie eine eigene Zahlungsreihe gelesen.' },
      { label: 'Interpretationsregel', eq: String.raw`\text{niedriger Nominalzins} \neq \text{niedrige effektive Kosten}`, desc: 'Zusatzkosten, Fristen und Risikoprämien können den Effektivsatz deutlich erhöhen.' }
    ],
    aufgaben: [
      task(
        'Warum kann nicht genutztes Skonto ein teurer Finanzierungsvorgang sein?',
        [
          step('Ökonomische Alternative benennen.', String.raw`\text{Wer kein Skonto zieht, nutzt faktisch einen kurzfristigen Lieferantenkredit.}`),
          step('Effektivzins erklären.', String.raw`\text{Der Preis dieses Kredits kann auf das Jahr hochgerechnet sehr hoch sein.}`)
        ],
        'Skontoverzicht ist oft ein impliziter Kredit mit überraschend hohen effektiven Fremdkapitalkosten.'
      ),
      task(
        'Warum ist „Fremdkapital kostet 6 %“ häufig noch keine saubere finanzwirtschaftliche Aussage?',
        [
          step('Nominalzins relativieren.', String.raw`\text{Gebühren, Fristen, Skonto und Ausfallrisiko können die effektiven Kosten verändern.}`),
          step('Zahlungsreihe ergänzen.', String.raw`\text{Gesucht ist der ökonomische Kostensatz der tatsächlichen Finanzierungsreihe.}`)
        ],
        'Erst die vollständige Finanzierungsreihe zeigt, wie teuer Fremdkapital ökonomisch wirklich ist.'
      ),
      task(
        'Warum ist die Analogie „Investitions-IZF“ und „Finanzierungs-IZF“ didaktisch nützlich?',
        [
          step('Gemeinsame Sprache nennen.', String.raw`\text{Beide Fälle werden über Zahlungsreihen und interne Zinssätze strukturiert.}`),
          step('Entscheidungspunkt ergänzen.', String.raw`\text{Damit wird Finanzierung nicht als Sonderfall, sondern als eigenständiges Bewertungsproblem lesbar.}`)
        ],
        'Die IZF-Analogie macht sichtbar, dass Finanzierungsentscheidungen denselben Bewertungsprinzipien folgen wie Investitionen.'
      ),
      task(
        'Warum muss in einer Fremdfinanzierungsaufgabe vor jeder Deutung geprüft werden, auf welche Periode sich der angegebene Satz überhaupt bezieht?',
        [
          step('Nominal- und Periodenbezug klären: Monats-, Quartals- und Jahressätze sind nicht direkt vergleichbar.'),
          step('Kosten erst auf dieselbe Zeitbasis bringen und Gebühren/Skonto in die Zahlungsreihe integrieren.'),
          step('Erst dann lässt sich beurteilen, ob die Finanzierung ökonomisch günstig oder teuer ist.')
        ],
        'Vor jeder Interpretation gilt: gleiche Zeiteinheit, vollständige Zahlungsreihe, dann erst Kostenvergleich.'
      )
    ]
  },

  wacc: {
    motivation: 'Bevor Leverage gelesen werden kann, muss klar sein, was die gemischte Finanzierung insgesamt kostet. Genau diese Aggregationslogik liefert der WACC.',
    theorie: [
      section(
        'Gewichtete Gesamtkapitalkosten',
        `<p>Der WACC fasst die Kosten von Eigen- und Fremdkapital entsprechend ihrer Anteile an der Finanzierung zusammen. Er ist damit die aggregierte Preisgröße der gesamten Kapitalstruktur.</p>
         ${mathBlock(String.raw`$$WACC = \frac{E}{E+D}k_E + \frac{D}{E+D}k_D$$`)}
      `
      ),
      section(
        'Warum der WACC kein bloßer Durchschnitt ist',
        `<p>Die Gewichte spiegeln die reale Finanzierungsmischung. Verändert sich diese Struktur, ändern sich nicht nur die Gewichte, sondern oft auch die zugrunde liegenden Risiko- und Renditeforderungen der Kapitalgeber.</p>`
      ),
      section(
        'Wann der WACC als Kalkulationszins passt',
        `<p>Der WACC ist nur dann als Diskontsatz brauchbar, wenn das Bewertungsobjekt dieselbe Risiko- und Kapitalstruktur aufweist wie die Größen, aus denen der WACC abgeleitet wurde. Genau deshalb ist er kein Universalwerkzeug für jedes Projekt, sondern ein konditional passender Satz.</p>
         ${mathBlock(String.raw`$$K_0 = -A_0 + \sum_{t=1}^{n}\frac{CF_t}{(1+WACC)^t}$$`)}
      `
      ),
      section(
        'Methodenselektion: WACC, EK-Satz oder projektbezogener Satz',
        `<p>Eine klausurstabile Antwort prüft deshalb zuerst das Risikoobjekt: Geht es um das Gesamtunternehmen, ein Projekt mit ähnlichem Risiko oder um ein deutlich riskanteres Teilvorhaben? Erst danach wird entschieden, ob der WACC, ein reiner Eigenkapitalkostensatz oder eine andere Risikoadjustierung fachlich trägt.</p>`
      ),
      section(
        'Methodenwahl und Missbrauch',
        `<p>Der WACC ist nur dann ein sinnvoller Kalkulationszins, wenn die Projekt- und Finanzierungsrisiken zur zugrunde gelegten Kapitalstruktur passen. Genau hier entsteht in Klausuren oft ein stiller Missbrauch: Der WACC wird mechanisch eingesetzt, obwohl die Voraussetzungen gar nicht erklärt wurden.</p>
         ${warn('WACC-Fehler:', 'Ein WACC ist keine frei verfügbare Universalzahl. Er passt nur zu einer bestimmten Risiko- und Kapitalstruktur.')}`
      )
    ].join(''),
    formeln: [
      { label: 'WACC', eq: String.raw`$$WACC = \frac{E}{E+D}k_E + \frac{D}{E+D}k_D$$`, desc: 'Gewichteter Preis der Finanzierungsmischung.', variables: { 'E': 'Marktwert des Eigenkapitals', 'D': 'Marktwert des Fremdkapitals', 'k_E': 'Eigenkapitalkosten', 'k_D': 'Fremdkapitalkosten' } },
      { label: 'Einsatzbedingung', eq: String.raw`\text{passender WACC} \Rightarrow \text{Projekt- und Finanzierungsrisiko konsistent}`, desc: 'Der WACC muss zur Risiko- und Kapitalstruktur des Bewertungsobjekts passen.' },
      { label: 'WACC in der Bewertung', eq: String.raw`$$K_0 = -A_0 + \sum_{t=1}^{n}\frac{CF_t}{(1+WACC)^t}$$`, desc: 'Nur zulässig, wenn die WACC-Annahmen zur Aufgabe passen.', variables: { 'CF_t': 'erwarteter Cashflow in Periode t', 'A_0': 'Anfangsauszahlung' } }
    ],
    aufgaben: [
      task(
        'Warum ist der WACC nicht nur ein mechanischer Durchschnitt?',
        [
          step('Gewichtungslogik nennen.', String.raw`\text{Die Gewichte spiegeln die tatsächliche Finanzierungsmischung.}`),
          step('Ökonomische Aussage ergänzen.', String.raw`\text{Verändert sich die Mischung, verschieben sich nicht nur Kostenanteile, sondern oft auch Risikoprämien.}`)
        ],
        'Der WACC fasst nicht nur Zahlen zusammen, sondern verdichtet die Preis- und Risikologik der gesamten Kapitalstruktur.'
      ),
      task(
        'Wann ist ein WACC als Kalkulationszins fachlich plausibel und wann gefährlich mechanisch?',
        [
          step('Plausibilitätsbedingung nennen.', String.raw`\text{Projekt- und Kapitalstrukturrisiko müssen zum zugrunde gelegten WACC passen.}`),
          step('Missbrauch benennen.', String.raw`\text{Ohne diese Passung wird der WACC zur Scheingenauigkeit.}`)
        ],
        'Der WACC ist nur dann ein guter Kalkulationszins, wenn seine Risiko- und Kapitalstrukturannahmen zur Aufgabe passen.'
      ),
      task(
        'Warum ist es klausurwichtig, EK- und FK-Kosten vor der WACC-Rechnung wirtschaftlich zu deuten?',
        [
          step('Vorarbeit benennen.', String.raw`\text{WACC aggregiert nur; seine Qualität hängt von der Qualität der Einzelkostensätze ab.}`),
          step('Entscheidungslogik schließen.', String.raw`\text{Falsche EK-/FK-Interpretationen führen direkt zu einem falsch begründeten Gesamtkostensatz.}`)
        ],
        'Eine gute WACC-Antwort beginnt nicht beim Einsetzen, sondern bei der wirtschaftlichen Lesart der Teilkosten.'
      ),
      task(
        'Ein neues Projekt ist deutlich riskanter als das bestehende Kerngeschäft. Warum ist „diskontiere einfach mit dem Unternehmens-WACC“ eine potenziell falsche Kurzantwort?',
        [
          step('Der Unternehmens-WACC spiegelt die bestehende Risiko- und Kapitalstruktur wider, nicht automatisch das Risiko des neuen Projekts.'),
          step('Ist das Projekt riskanter, wäre derselbe Satz tendenziell zu niedrig und würde den Projektwert überschätzen.'),
          step('Die Lösung muss daher die Risikopassung prüfen, bevor der WACC als Kalkulationszins akzeptiert wird.')
        ],
        'WACC-Einsatz ist eine Passungsfrage: anderes Risikoobjekt -> möglicher anderer geeigneter Diskontsatz.'
      ),
      task(
        'Warum dürfen die Gewichte im WACC nicht bloß willkürlich aus Buchwerten übernommen werden, wenn die Aufgabe auf Marktlogik abstellt?',
        [
          step('Kapitalkosten spiegeln Renditeforderungen am Markt, nicht bloß historische Buchansätze.'),
          step('Deshalb müssen auch die Gewichte die ökonomisch relevante Finanzierungsmischung abbilden.'),
          step('Wer falsche Gewichte einsetzt, verändert den Gesamtkostensatz bereits vor jeder Interpretation.')
        ],
        'Die WACC-Gewichte sind Teil der ökonomischen Logik; sie bestimmen mit, welcher Finanzierungsmix überhaupt bepreist wird.'
      )
    ]
  },

  wacc_leverage: {
    motivation: 'Der Leverage-Effekt ist keine isolierte Prozentrechnung, sondern die systematische Frage, wie Verschuldung Ertrag und Risiko des Eigenkapitals gemeinsam verändert.',
    theorie: [
      section(
        'Leverage-Ertrag',
        `<p>Mehr Fremdkapital kann die Eigenkapitalrendite erhöhen, solange die Rendite des Gesamtkapitals über den Fremdkapitalkosten liegt. Dann arbeitet der Hebel zugunsten der Eigentümer.</p>
         ${mathBlock(String.raw`$$r_E = r_U + \frac{D}{E}(r_U-r_D)$$`)}
      `
      ),
      section(
        'Leverage-Risiko',
        `<p>Dieselbe Verschuldung verstärkt aber auch die Schwankung der Eigenkapitalrendite. Je kleiner der Eigenkapitalpuffer, desto stärker schlagen gute und schlechte Gesamtkapitalszenarien auf die Eigentümer durch.</p>`
      ),
      section(
        'Positiver versus negativer Hebel',
        `<p>Die Leverage-Formel ist kein Automatismus zugunsten der Eigentümer. Nur wenn die Gesamtkapitalrendite oberhalb der Fremdkapitalkosten liegt, wirkt der Hebel positiv. Fällt sie darunter, dreht sich derselbe Mechanismus gegen das Eigenkapital und verstärkt die Verluste.</p>`
      ),
      section(
        'Brücke zu WACC und Kapitalstruktur',
        `<p>Leverage ist deshalb nie isoliert zu lesen: Er verändert die Rendite-Risiko-Struktur des Eigenkapitals und damit mittelbar die Kostenlogik der Gesamtfinanzierung. Genau hier schließt die Diskussion an WACC und Modigliani-Miller an.</p>`
      ),
      section(
        'Leverage nur zusammen lesen',
        `<p>Der Kurs betont ausdrücklich: Leverage-Ertrag und Leverage-Risiko steigen gemeinsam. Wer nur den höheren Erwartungsertrag nennt, hat die Hälfte der ökonomischen Aussage übersehen.</p>
         ${warn('Hebelfehler:', 'Mehr Verschuldung ist nicht „besser“, sondern nur ein stärkerer Hebel auf Chancen und Verluste.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Leverage-Beziehung', eq: String.raw`$$r_E = r_U + \frac{D}{E}(r_U-r_D)$$`, desc: 'Mehr Verschuldung verstärkt die Eigenkapitalrendite, solange die Gesamtkapitalrendite über dem Fremdkapitalzins liegt.', variables: { 'r_E': 'Eigenkapitalrendite', 'r_U': 'Gesamtkapitalrendite / ungehebelte Rendite', 'r_D': 'Fremdkapitalrendite bzw. Fremdkapitalkostensatz', 'D/E': 'Verschuldungsgrad' } },
      { label: 'Leverage-Regel', eq: String.raw`r_U > r_D \Rightarrow \text{positiver Hebeleffekt auf } r_E`, desc: 'Nur dann wirkt Fremdkapital renditesteigernd auf das Eigenkapital.' },
      { label: 'Spannendiagnose', eq: String.raw`$$r_U-r_D > 0 \Rightarrow \text{positiver Hebel}, \qquad r_U-r_D < 0 \Rightarrow \text{negativer Hebel}$$`, desc: 'Vor jeder Interpretation muss die Renditespanne zwischen Gesamtkapital und Fremdkapital gelesen werden.', variables: { 'r_U-r_D': 'entscheidende Renditespanne für die Richtung des Hebeleffekts' } }
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
        'Welche Bedingung muss erfüllt sein, damit Leverage die Eigenkapitalrendite positiv hebt?',
        [
          step('Schwellengleichung nennen.', String.raw`\text{Die Gesamtkapitalrendite muss über den Fremdkapitalkosten liegen.}`),
          step('Interpretation ergänzen.', String.raw`\text{Liegt sie darunter, kehrt sich der Hebel gegen die Eigentümer.}`)
        ],
        'Positiver Leverage setzt voraus, dass das Gesamtkapital mehr verdient als das Fremdkapital kostet.'
      ),
      task(
        'Warum ist es fachlich unvollständig, Leverage nur über den Erwartungswert der EK-Rendite zu beschreiben?',
        [
          step('Ertragsseite nennen.', String.raw`\text{Mehr FK kann den erwarteten EK-Ertrag erhöhen.}`),
          step('Risikoseite ergänzen.', String.raw`\text{Die Streuung und Verlustempfindlichkeit des Eigenkapitals steigen aber gleichzeitig.}`)
        ],
        'Leverage ist erst dann korrekt erklärt, wenn Ertrag und Risiko gemeinsam genannt werden.'
      ),
      task(
        'Was passiert mit dem Hebel, wenn die Gesamtkapitalrendite unter die Fremdkapitalkosten fällt?',
        [
          step('Die Spanne $(r_U-r_D)$ wird negativ.'),
          step('Dann zieht derselbe Verschuldungsgrad die Eigenkapitalrendite nach unten statt nach oben.'),
          step('Die Lösung muss deshalb nicht nur „mehr Hebel“ sagen, sondern die Richtung der Renditespanne prüfen.')
        ],
        'Leverage kippt bei negativer Renditespanne: Verschuldung verstärkt dann nicht den Gewinn, sondern die Belastung des Eigenkapitals.'
      ),
      task(
        'Warum ist „mehr Verschuldung hebt immer die EK-Rendite“ als Klausurantwort gefährlich verkürzt?',
        [
          step('Die Aussage ignoriert die Bedingung $r_U>r_D$ und die steigende Risikobelastung.'),
          step('Sie blendet außerdem aus, dass höhere Verschuldung die Kapitalstruktur- und WACC-Diskussion verändert.'),
          step('Eine vollständige Antwort nennt Hebelchance, Hebelrisiko und die zugrunde liegende Renditespanne.')
        ],
        'Ohne Spannen- und Risikoprüfung ist die Aussage zu grob: Leverage ist konditional, nicht automatisch vorteilhaft.'
      )
    ]
  },

  modigliani_miller: {
    motivation: 'Die Modigliani-Miller-Irrelevanzthese ist der zentrale Benchmark, um reale Werttreiber der Kapitalstruktur sichtbar zu machen.',
    theorie: [
      section(
        'Modigliani-Miller als Benchmark',
        `<p>Die Irrelevanzthese zeigt, dass Kapitalstruktur unter sehr strengen Annahmen keinen Einfluss auf den Unternehmenswert hätte. Gerade deshalb ist sie didaktisch wertvoll: Sie macht sichtbar, welche realen Friktionen den Unterschied erzeugen.</p>
         ${warn('Benchmarkfehler:', 'Modigliani-Miller ist ein Referenzmodell unter starken Annahmen, keine 1:1-Beschreibung realer Kapitalmärkte.')}`
      ),
      section(
        'Annahmenraum und Irrelevanz',
        `<p>Unter vollkommenem und vollständigem Kapitalmarkt gleichen sich Ertrags- und Risikoeffekte einer höheren Verschuldung in der Benchmark-Logik aus: Weder die erwartete Gesamtkapitalrendite noch der Unternehmenswert hängen dann vom Verhältnis von Fremd- zu Eigenkapital ab. Leverage kann die Eigenkapitalrendite und das Eigenkapitalrisiko verändern, ohne den Gesamtwert zu verschieben.</p>`
      ),
      section(
        'Wertneutralität heißt nicht Renditeneutralität',
        `<p>Gerade hier entstehen typische Prüfungsfehler. MM sagt nicht, dass alle Renditen gleich bleiben. Im Gegenteil: Eigenkapitalrendite und -risiko reagieren auf Verschuldung. Wertneutral ist nur der Gesamtunternehmenswert im Benchmark-Modell.</p>`
      ),
      section(
        'Warum MM direkt an WACC und Leverage anschließt',
        `<p>MM erklärt, warum Leverage auf Eigentümerebene relevant sein kann, ohne dass der Unternehmenswert im Benchmark-Modell steigt. Genau deshalb ist MM kein Fremdkörper, sondern die theoretische Klammer um WACC- und Leverage-Debatten.</p>`
      ),
      section(
        'Von der Theorie zu realen Kapitalmärkten',
        `<p>Sobald Märkte unvollkommen oder unvollständig sind, gewinnen Steuern, Insolvenz- und Transaktionskosten, Informationsasymmetrien und unterschiedliche Finanzierungsbedingungen an Bedeutung. Genau diese Faktoren erklären, warum in der Praxis Kapitalstruktur doch wert- und entscheidungsrelevant werden kann.</p>`
      )
    ].join(''),
    formeln: [
      { label: 'Irrelevanz-Benchmark', eq: String.raw`\text{vollkommener Markt} \Rightarrow \text{Kapitalstruktur wertneutral}`, desc: 'Unter Benchmark-Annahmen beeinflusst die Finanzierungsmischung den Unternehmenswert nicht.' },
      { label: 'Benchmark-Aussage', eq: String.raw`\text{Leverage verändert } r_E \text{ und Risiko, aber nicht } \text{Value}`, desc: 'Unter MM wird der Unternehmenswert nicht durch die Kapitalstruktur getrieben.' },
      { label: 'Wertvergleich', eq: String.raw`$$V_L = V_U$$`, desc: 'Im MM-Benchmark haben verschuldetes und unverschuldetes Unternehmen denselben Gesamtwert.', variables: { 'V_L': 'Unternehmenswert mit Leverage', 'V_U': 'Unternehmenswert ohne Leverage' } }
    ],
    aufgaben: [
      task(
        'Warum ist Modigliani-Miller didaktisch wertvoll, obwohl reale Märkte unvollkommen sind?',
        [
          step('Benchmarkfunktion erklären.', String.raw`\text{Das Modell zeigt, unter welchen Bedingungen Kapitalstruktur keinen Wertbeitrag liefert.}`),
          step('Realitätsbezug ergänzen.', String.raw`\text{Abweichungen in der Praxis verweisen auf Friktionen wie Steuern, Insolvenzkosten und Informationsasymmetrien.}`)
        ],
        'MM dient als Referenzrahmen, um reale Werttreiber der Kapitalstruktur systematisch zu identifizieren.'
      ),
      task(
        'Warum widerspricht MM dem Leverage-Effekt nicht?',
        [
          step('Eigentümerebene nennen.', String.raw`\text{Leverage verändert die Rendite- und Risikoverteilung auf das Eigenkapital.}`),
          step('Wertebene ergänzen.', String.raw`\text{MM sagt nur, dass sich der Gesamtunternehmenswert im Benchmark dadurch nicht ändert.}`)
        ],
        'Leverage und MM sprechen über unterschiedliche Ebenen: EK-Rendite/Risiko einerseits, Gesamtwert andererseits.'
      ),
      task(
        'Welche realen Friktionen machen Kapitalstruktur in der Praxis doch relevant?',
        [
          step('Friktionscluster nennen.', String.raw`\text{Steuern, Insolvenzkosten, Transaktionskosten und Informationsasymmetrien.}`),
          step('Konsequenz ziehen.', String.raw`\text{Diese Faktoren durchbrechen die wertneutrale Benchmarkwelt.}`)
        ],
        'Sobald reale Friktionen ins Spiel kommen, wird Kapitalstruktur von einer neutralen Benchmarkgröße zu einer echten Wert- und Entscheidungsfrage.'
      ),
      task(
        'Zwei Unternehmen haben identische operative Cashflows, aber unterschiedliche Verschuldung. Welche Kernaussage verlangt MM in der Benchmarkwelt?',
        [
          step('Operative Seite isolieren: Die zugrunde liegenden Unternehmenscashflows sind identisch.'),
          step('Unter vollkommenen Märkten darf die Finanzierungsform allein keinen zusätzlichen Gesamtwert erzeugen.'),
          step('Leverage verteilt Rendite und Risiko nur anders auf die Kapitalgeber, ohne den Gesamtwert zu verändern.')
        ],
        'In der MM-Benchmark bleibt der Unternehmenswert trotz unterschiedlicher Verschuldung gleich, solange keine realen Friktionen wirken.'
      ),
      task(
        'Warum ist „MM widerlegt den WACC“ keine saubere Schlussfolgerung?',
        [
          step('MM liefert einen Benchmark unter starken Annahmen; WACC und Leverage sind daran anschließende Kosten- und Renditelogiken.'),
          step('Gerade weil Leverage Rendite und Risiko des Eigenkapitals verändert, bleibt die Kostenstruktur erklärungsbedürftig.'),
          step('MM sagt nur, dass unter Benchmark-Annahmen kein zusätzlicher Gesamtwert aus der Kapitalstruktur entsteht.')
        ],
        'MM ersetzt WACC nicht, sondern liefert den Referenzrahmen, in dem WACC- und Leverage-Aussagen eingeordnet werden.'
      )
    ]
  }
};
