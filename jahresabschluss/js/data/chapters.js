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
  { id: 'rechnungswesen_intro', title: 'Einführung in Rechnungswesen und Erfolgsermittlung', cat: 'Grundlagen', short: 'Einführung' },
  { id: 'gob_inventur', title: 'GoB, Inventur, Inventar und Bilanzansatz', cat: 'Grundlagen', short: 'GoB' },
  { id: 'buchen_konten', title: 'Buchen auf Bestands- und Erfolgskonten', cat: 'Buchführung', short: 'Buchen' },
  { id: 'buchfuehrung_orga', title: 'Organisation der Buchführung und Handelsbücher', cat: 'Buchführung', short: 'Organisation' },
  { id: 'anlagevermoegen', title: 'Anlagevermögen und Abschreibungen', cat: 'Bilanzposten', short: 'Anlage' },
  { id: 'umlauf_werkstoffe', title: 'Umlaufvermögen I: Werkstoffe und Erzeugnisse', cat: 'Bilanzposten', short: 'UV I' },
  { id: 'umlauf_waren_ust', title: 'Umlaufvermögen II: Waren und Umsatzsteuer', cat: 'Bilanzposten', short: 'UV II' },
  { id: 'eigenkapital', title: 'Eigenkapital in Kapital- und Personengesellschaften', cat: 'Bilanzposten', short: 'Eigenkapital' },
  { id: 'fremdkapital', title: 'Fremdkapital: Verbindlichkeiten und Rückstellungen', cat: 'Bilanzposten', short: 'Fremdkapital' },
  { id: 'rechnungsabgrenzung', title: 'Rechnungsabgrenzung', cat: 'Abschluss', short: 'RAP' },
  { id: 'erfolgsrechnung', title: 'Erfolgsrechnung mit GKV und UKV', cat: 'Abschluss', short: 'GKV / UKV' }
];

export const CONTENT = {
  rechnungswesen_intro: {
    motivation: 'Bevor einzelne Kontierungen Sinn ergeben, musst du die Logik des gesamten Rechnungswesens verstehen: Wer soll informiert werden, was misst Bilanz, was misst GuV, und warum bleibt die Bilanzgleichung immer erhalten?',
    theorie: [
      section(
        'Zweck des Jahresabschlusses',
        `<p>Der Jahresabschluss informiert externe und interne Adressaten über Vermögens-, Finanz- und Ertragslage. Für Gläubiger zählt insbesondere Vorsicht und Verlässlichkeit, für Eigentümer zusätzlich der Erfolgsnachweis und die Grundlage der Gewinnverwendung.</p>`
      ),
      section(
        'Bilanz und GuV als zwei Perspektiven',
        `<p>Die Bilanz ist stichtagsbezogen und zeigt Vermögen und Kapital am Abschlussstichtag. Die GuV ist periodenbezogen und erklärt, wie der Jahreserfolg entstanden ist. Beide zusammen liefern erst das vollständige Bild des Unternehmens.</p>
         ${mathBlock(String.raw`$$\text{Aktiva} = \text{Passiva} = \text{Eigenkapital} + \text{Fremdkapital}$$`)}
      `
      ),
      section(
        'Doppelte Buchführung als Stabilitätsmechanismus',
        `<p>Jeder Geschäftsvorfall berührt mindestens zwei Konten. Dadurch bleibt die Bilanzgleichung erhalten und jede Veränderung wird nachvollziehbar dokumentiert. Genau diese Doppik ist die Grundlage der späteren Abschlusslogik.</p>
         ${warn('Einstiegsfehler:', 'Viele Antworten behandeln Bilanz und GuV wie zwei unverbundene Tabellen. Tatsächlich erklärt die GuV die periodische Veränderung des Eigenkapitals.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Bilanzgleichung', eq: String.raw`$$A = P = EK + FK$$`, desc: 'Mittelverwendung entspricht Mittelherkunft.' },
      { label: 'Jahresergebnis', eq: String.raw`$$Jahresergebnis = Erträge - Aufwendungen$$`, desc: 'Die GuV erklärt die Erfolgsänderung der Periode.' }
    ],
    aufgaben: [
      task(
        'Warum reicht es für den Jahresabschluss nicht, nur die Bilanz zu kennen?',
        [
          step('Die Stichtagslogik der Bilanz benennen.', String.raw`\text{Die Bilanz zeigt nur den Zustand am Abschlussstichtag.}`),
          step('Dann die Funktion der GuV ergänzen.', String.raw`\text{Die GuV erklärt, wie Gewinn oder Verlust in der Periode entstanden sind.}`)
        ],
        'Die Bilanz zeigt den Endzustand, aber nicht den Entstehungsweg des Erfolgs. Dafür braucht es die GuV.'
      ),
      task(
        'Ein Unternehmen kauft eine Maschine bar. Warum bleibt die Bilanzsumme unverändert?',
        [
          step('Die betroffenen Seiten identifizieren.', String.raw`\text{Maschinen } \uparrow,\; \text{Kasse/Bank } \downarrow`),
          step('Den Typ der Veränderung benennen.', String.raw`\text{Aktivtausch}`)
        ],
        'Es findet nur ein Aktivtausch statt: Eine Aktivposition steigt, eine andere sinkt im selben Betrag.'
      )
    ]
  },

  gob_inventur: {
    motivation: 'GoB, Inventur und Bilanzansatz legen fest, was überhaupt wie in den Abschluss hinein darf. Ohne diese Grundlage ist jede spätere Bewertung und Buchung unsauber.',
    theorie: [
      section(
        'Grundsätze ordnungsmäßiger Buchführung',
        `<p>Die GoB sichern Klarheit, Vollständigkeit, Nachprüfbarkeit und Vorsicht. Für Klausuren besonders wichtig sind Realisationsprinzip, Imparitätsprinzip und Stetigkeit, weil sie entscheiden, wann Erfolg ausgewiesen werden darf und wann Risiken bereits zu erfassen sind.</p>`
      ),
      section(
        'Inventur, Inventar und Bilanz',
        `<p>Die Inventur ist die tatsächliche Bestandsaufnahme. Ihr Ergebnis ist das Inventar, also das geordnete Bestandsverzeichnis. Die Bilanz verdichtet diese Einzelinformationen zu einer gegliederten Gegenüberstellung von Vermögen und Kapital.</p>`
      ),
      section(
        'Bilanzansatz',
        `<p>Bilanzansatz fragt, ob ein Vermögensgegenstand oder eine Schuld überhaupt bilanziert werden darf oder muss. In der Prüfung musst du deshalb sauber zwischen Ansatz- und Bewertungsfrage unterscheiden.</p>
         ${warn('Prüfungsfehler:', 'Viele Lösungen springen sofort auf den Wert, obwohl zunächst ungeklärt ist, ob der Posten überhaupt angesetzt werden darf.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Realisationsprinzip', eq: String.raw`\text{Gewinne erst bei Realisation}`, desc: 'Noch nicht realisierte Gewinne dürfen grundsätzlich nicht vorgezogen werden.' },
      { label: 'Imparitätsprinzip', eq: String.raw`\text{Verluste früh, Gewinne spät}`, desc: 'Asymmetrische Vorsicht im HGB.' }
    ],
    aufgaben: [
      task(
        'Warum ist „Was steht in der Bilanz?“ eine andere Frage als „Mit welchem Wert steht es dort?“',
        [
          step('Ansatz und Bewertung trennen.', String.raw`\text{Ansatz = Ob der Posten bilanziert wird; Bewertung = Mit welchem Wert.}`),
          step('Die Prüfungsreihenfolge erklären.', String.raw`\text{Erst der Ansatz, dann die Wertfrage.}`)
        ],
        'Bilanzansatz entscheidet über die Existenz des Postens in der Bilanz; Bewertung entscheidet erst danach über seine Höhe.'
      ),
      task(
        'Warum verlangt das Imparitätsprinzip eine frühere Erfassung drohender Verluste als erwarteter Gewinne?',
        [
          step('Gläubigerschutz ansprechen.', String.raw`\text{Das HGB will eine zu optimistische Darstellung vermeiden.}`),
          step('Asymmetrie bewusst benennen.', String.raw`\text{Risiken sollen früh, Chancen erst bei Realisation erfasst werden.}`)
        ],
        'Die Asymmetrie ist gewollt: Sie schützt Gläubiger vor überhöht dargestellter Vermögens- und Ertragslage.'
      )
    ]
  },

  buchen_konten: {
    motivation: 'Die doppelte Buchführung wird erst dann klausursicher, wenn du Bestands- und Erfolgskonten nicht nur benennen, sondern sauber in Soll und Haben denken kannst.',
    theorie: [
      section(
        'Bestandskonten',
        `<p>Bestandskonten leiten sich direkt aus der Bilanz ab. Aktivkonten nehmen Zugänge im Soll und Abgänge im Haben auf; bei Passivkonten ist es umgekehrt. Dieses Grundschema trägt alle späteren Buchungssätze.</p>`
      ),
      section(
        'Erfolgskonten',
        `<p>Erfolgskonten erfassen Aufwendungen und Erträge und werden am Periodenende über die GuV abgeschlossen. Aufwendungen mindern das Eigenkapital, Erträge erhöhen es. Genau deshalb ist die Verbindung zur Bilanz immer mitzudenken.</p>`
      ),
      section(
        'Buchungssätze lesen und bilden',
        `<p>Der Buchungssatz folgt der Logik „Soll an Haben“. In Klausuren zählt nicht bloß das Ergebnis, sondern die Begründung über Kontenart und Bewegungsrichtung.</p>
         ${warn('Kontenfehler:', 'Wenn Soll und Haben auswendig statt systematisch gelernt werden, kippen besonders gemischte Geschäftsvorfälle schnell in falsche Buchungssätze.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Aktivkonto', eq: String.raw`\text{AB im Soll,\ Zugänge Soll,\ Abgänge Haben}`, desc: 'Grundlogik eines Aktivkontos.' },
      { label: 'Passivkonto', eq: String.raw`\text{AB im Haben,\ Zugänge Haben,\ Abgänge Soll}`, desc: 'Spiegelbildliche Logik des Passivkontos.' }
    ],
    aufgaben: [
      task(
        'Ein Unternehmen kauft Waren auf Ziel. Welche Grundlogik bestimmt den Buchungssatz?',
        [
          step('Zuerst die Kontenarten bestimmen.', String.raw`\text{Warenbestand/Aufwand } \uparrow,\; \text{Verbindlichkeiten } \uparrow`),
          step('Dann Soll und Haben zuordnen.', String.raw`\text{Zugang im Aktiv- bzw. Aufwandsbereich ins Soll, Zugang der Verbindlichkeit ins Haben.}`)
        ],
        'Der Geschäftsvorfall ist eine Bilanzverlängerung: Auf der einen Seite steigt Vermögen bzw. Aufwand, auf der anderen die Schuld.'
      ),
      task(
        'Warum sind Erfolgskonten trotz Periodenbezug immer mit der Bilanz verbunden?',
        [
          step('Eigenkapitalbezug erläutern.', String.raw`\text{Erträge und Aufwendungen verändern am Ende das Eigenkapital.}`),
          step('Abschlusslogik ergänzen.', String.raw`\text{Über die GuV werden Erfolgskonten in die Bilanzlogik zurückgeführt.}`)
        ],
        'Erfolgskonten sind keine losgelöste Parallelwelt: Sie erklären die periodische Veränderung des Eigenkapitals.'
      )
    ]
  },

  buchfuehrung_orga: {
    motivation: 'Rechnungslegung ist nicht nur Kontierung, sondern auch Organisation: Ohne Belege, Bücher und Ordnungssysteme wäre der Abschluss weder prüfbar noch verlässlich.',
    theorie: [
      section(
        'Grundbuch, Hauptbuch und Nebenbücher',
        `<p>Das Grundbuch dokumentiert Geschäftsvorfälle chronologisch, das Hauptbuch systematisch nach Konten. Nebenbücher vertiefen spezielle Teilbereiche wie Debitoren, Kreditoren oder Anlagen. Zusammen schaffen sie Nachvollziehbarkeit und Ordnung.</p>`
      ),
      section(
        'Kontenrahmen und Kontenplan',
        `<p>Kontenrahmen bieten ein allgemeines Ordnungsschema, der Kontenplan konkretisiert es für das Unternehmen. In Klausuren hilft diese Struktur, Geschäftsvorfälle zügig der richtigen Kontenklasse zuzuordnen.</p>`
      ),
      section(
        'Belegprinzip',
        `<p>Keine Buchung ohne Beleg: Jeder Buchungssatz braucht eine nachvollziehbare Dokumentationsbasis. Dieses Prinzip ist organisatorisch und klausurmethodisch wichtig, weil es zeigt, dass Rechnungslegung prüfungs- und kontrollfähig bleiben muss.</p>
         ${warn('Organisationsblindheit:', 'Viele Lernende sehen nur den Kontenplan. Für ordnungsmäßige Buchführung gehören aber immer auch Belege und Buchungsnachweise dazu.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Belegprinzip', eq: String.raw`\text{Keine Buchung ohne Beleg}`, desc: 'Organisatorischer Kern ordnungsmäßiger Buchführung.' },
      { label: 'Systemlogik', eq: String.raw`\text{chronologisch} \rightarrow \text{sachlich geordnet}`, desc: 'Vom Grundbuch zum Hauptbuch.' }
    ],
    aufgaben: [
      task(
        'Warum braucht eine ordnungsmäßige Buchführung sowohl chronologische als auch sachliche Ordnung?',
        [
          step('Funktion des Grundbuchs nennen.', String.raw`\text{Es sichert die zeitliche Nachvollziehbarkeit.}`),
          step('Funktion des Hauptbuchs ergänzen.', String.raw`\text{Es ordnet die Vorgänge kontenbezogen und auswertbar.}`)
        ],
        'Chronologie schafft Nachprüfbarkeit, sachliche Ordnung schafft Auswertbarkeit. Beides zusammen macht Buchführung kontrollfähig.'
      ),
      task(
        'Welche praktische Klausurhilfe bietet ein Kontenrahmen?',
        [
          step('Ordnungsfunktion erläutern.', String.raw`\text{Er gruppiert ähnliche Geschäftsvorfälle systematisch.}`),
          step('Nutzen für Buchungssätze erklären.', String.raw`\text{Die richtige Kontenklasse wird schneller gefunden.}`)
        ],
        'Ein Kontenrahmen reduziert Suchaufwand und hilft, Buchungsfehler durch systematische Einordnung zu vermeiden.'
      )
    ]
  },

  anlagevermoegen: {
    motivation: 'Anlagevermögen und Abschreibungen prägen den langfristigen Bilanzaufbau. Gerade hier zeigt sich, wie Bewertung, Vorsicht und Erfolgsermittlung zusammenspielen.',
    theorie: [
      section(
        'Was zum Anlagevermögen gehört',
        `<p>Anlagevermögen umfasst Gegenstände, die dem Geschäftsbetrieb dauerhaft dienen. Dazu zählen immaterielle Vermögensgegenstände, Sachanlagen und Finanzanlagen. Die Zugehörigkeit richtet sich nicht nach dem Gegenstand an sich, sondern nach seiner betrieblichen Zweckbestimmung.</p>`
      ),
      section(
        'Planmäßige und außerplanmäßige Abschreibung',
        `<p>Planmäßige Abschreibungen verteilen Anschaffungs- oder Herstellungskosten über die Nutzungsdauer. Außerplanmäßige Abschreibungen greifen bei Wertminderungen. Beide sind klausurtypisch, weil sie Bilanzwert und Periodenerfolg zugleich beeinflussen.</p>
         ${mathBlock(String.raw`$$AfA_{linear} = \frac{AK - RW}{n}$$`)}
      `
      ),
      section(
        'Zuschreibung und Grenzen',
        `<p>Entfällt der Grund einer außerplanmäßigen Abschreibung, kann oder muss zugeschrieben werden, jedoch nur bis zu den fortgeführten Anschaffungskosten. Auch diese Obergrenze ist klausurwichtig.</p>
         ${warn('Abschreibungsfehler:', 'Lineare AfA ist nur die Standardtechnik. In der Prüfung musst du trotzdem immer zuerst fragen, welche Wertminderung vorliegt und ob planmäßig oder außerplanmäßig abzuschreiben ist.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Lineare AfA', eq: String.raw`$$AfA = \frac{AK - RW}{n}$$`, desc: 'Jährlicher planmäßiger Abschreibungsbetrag.' },
      { label: 'Buchwert', eq: String.raw`$$BW_t = AK - t \cdot AfA$$`, desc: 'Fortgeführter Wert nach t Jahren.' }
    ],
    aufgaben: [
      task(
        'Eine Maschine mit AK 120.000 €, Nutzungsdauer 10 Jahre und Restwert 0 wird linear abgeschrieben. Wie hoch ist der Buchwert nach 4 Jahren?',
        [
          step('Jährliche AfA bestimmen.', String.raw`120.000 / 10 = 12.000`),
          step('Kumulierte AfA nach 4 Jahren berechnen.', String.raw`4 \cdot 12.000 = 48.000`),
          step('Buchwert ableiten.', String.raw`120.000 - 48.000 = 72.000`)
        ],
        'Der Buchwert nach vier Jahren beträgt 72.000 €.'
      ),
      task(
        'Warum ist eine außerplanmäßige Abschreibung nicht einfach nur eine „zusätzliche AfA“?',
        [
          step('Auslöser benennen.', String.raw`\text{Sie reagiert auf eine besondere Wertminderung, nicht auf den normalen planmäßigen Nutzungsverzehr.}`),
          step('Bilanzpolitische Bedeutung erklären.', String.raw`\text{Sie korrigiert den Bilanzansatz an eine niedrigere Wertlage.}`)
        ],
        'Außerplanmäßige Abschreibungen folgen einer besonderen Wertminderung und korrigieren den Bilanzwert außerhalb des normalen Abschreibungsplans.'
      )
    ]
  },

  umlauf_werkstoffe: {
    motivation: 'Umlaufvermögen ist bilanzpolitisch sensibel, weil Bewertung, Verbrauchsfolgen und Bestandsänderungen direkt auf den Erfolg wirken.',
    theorie: [
      section(
        'Werkstoffe und Erzeugnisse',
        `<p>Zum Umlaufvermögen zählen Roh-, Hilfs- und Betriebsstoffe, unfertige und fertige Erzeugnisse sowie Waren. Für den Kurs ist wichtig, wie sich Zugänge, Verbräuche und Bestände periodengerecht im Abschluss niederschlagen.</p>`
      ),
      section(
        'Bewertungsvereinfachungsverfahren',
        `<p>Verbrauchsfolgeverfahren wie FIFO, LIFO oder Durchschnittsmethode ordnen Zugangswerte dem Verbrauch bzw. Endbestand zu. In der Klausur musst du weniger historisch erzählen als vielmehr sauber rechnen und den Bestandswert logisch begründen.</p>`
      ),
      section(
        'Strenges Niederstwertprinzip',
        `<p>Beim Umlaufvermögen gilt das strenge Niederstwertprinzip: Liegt der beizulegende Wert unter den Anschaffungskosten, ist auf den niedrigeren Wert abzuschreiben. Genau hier zeigt sich die besondere Vorsicht des HGB.</p>
         ${warn('Verbrauchsfehler:', 'FIFO oder Durchschnitt sind keine bloßen Rechentricks. Sie beeinflussen Endbestand, Aufwand und damit unmittelbar den Periodenerfolg.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Strenges Niederstwertprinzip', eq: String.raw`\text{Bilanzwert} = \min(AK,\ beizulegender\ Wert)`, desc: 'Beim Umlaufvermögen zählt stets der niedrigere Wert.' },
      { label: 'Durchschnittspreis', eq: String.raw`$$\bar p = \frac{\sum Anschaffungskosten}{\sum Menge}$$`, desc: 'Typische Bewertungsvereinfachung.' }
    ],
    aufgaben: [
      task(
        'Ein Rohstoffposten hat AK 10.000 €, der Stichtagswert beträgt 9.000 €. Wie ist zu bewerten?',
        [
          step('Das maßgebliche Prinzip benennen.', String.raw`\text{Strenges Niederstwertprinzip}`),
          step('Den niedrigeren Wert ansetzen.', String.raw`\min(10.000,\ 9.000) = 9.000`)
        ],
        'Der Posten ist mit 9.000 € anzusetzen.'
      ),
      task(
        'Warum beeinflussen Bewertungsvereinfachungsverfahren den ausgewiesenen Gewinn?',
        [
          step('Endbestand und Aufwand verbinden.', String.raw`\text{Ein anderer Endbestand führt zu anderem Materialaufwand.}`),
          step('Erfolgswirkung erklären.', String.raw`\text{Materialaufwand } \uparrow/\downarrow \Rightarrow Jahresergebnis \downarrow/\uparrow`)
        ],
        'Weil die Zuordnung von Anschaffungskosten zu Verbrauch und Endbestand den Periodenaufwand und damit den Gewinn verändert.'
      )
    ]
  },

  umlauf_waren_ust: {
    motivation: 'Sobald Warenverkehr und Umsatzsteuer hinzukommen, wird Jahresabschluss besonders klausurnah: Preisnachlässe, Vorsteuer, Zahllast und Warenkontensysteme greifen ineinander.',
    theorie: [
      section(
        'Warenkontensysteme',
        `<p>Waren können im gemischten oder getrennten Warenkonto erfasst werden. Für die Klausur ist entscheidend, wie der Warenverbrauch, der Warenbestand und der Erfolg sichtbar gemacht werden.</p>`
      ),
      section(
        'Vorsteuer und Umsatzsteuer',
        `<p>Die Umsatzsteuer ist für das Unternehmen regelmäßig ein durchlaufender Posten. Vorsteuer aus Eingangsrechnungen und Umsatzsteuer aus Ausgangsrechnungen werden am Ende zur Zahllast verrechnet.</p>
         ${mathBlock(String.raw`$$Zahllast = Umsatzsteuer - Vorsteuer$$`)}
      `
      ),
      section(
        'Skonto, Rabatt und Rücksendung',
        `<p>Preisnachlässe verändern nicht nur den Zahlungsvorgang, sondern auch die Steuerbasis. In diesen Fällen musst du daher immer an den Brutto-/Netto-Zusammenhang und die USt-Korrektur denken.</p>
         ${warn('USt-Fehler:', 'Umsatzsteuer ist kein Aufwand und keine Betriebseinnahme im engeren Sinn. Wer sie in der Erfolgsermittlung wie normalen Aufwand behandelt, verfehlt die Systematik.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Zahllast', eq: String.raw`$$Zahllast = USt - VSt$$`, desc: 'Abzuführende Umsatzsteuer nach Vorsteuerabzug.' },
      { label: 'Netto aus Brutto', eq: String.raw`$$Netto = \frac{Brutto}{1 + Steuersatz}$$`, desc: 'Hilft bei Skonto- und Umsatzsteuerfällen.' }
    ],
    aufgaben: [
      task(
        'Ein Unternehmen hat 19.000 € Umsatzsteuer und 14.000 € Vorsteuer. Wie hoch ist die Zahllast?',
        [
          step('Differenz bilden.', String.raw`19.000 - 14.000 = 5.000`)
        ],
        'Die Zahllast beträgt 5.000 €.'
      ),
      task(
        'Warum muss bei einem Skonto nicht nur der Kaufpreis, sondern auch die Umsatzsteuer mitkorrigiert werden?',
        [
          step('Steuerbasis erkennen.', String.raw`\text{Die USt knüpft an das Entgelt an.}`),
          step('Folge ableiten.', String.raw`\text{Sinkt das Entgelt, sinkt auch die darauf entfallende Umsatzsteuer.}`)
        ],
        'Skonto mindert das Entgelt. Deshalb verändert sich auch die steuerliche Bemessungsgrundlage und damit die USt/VSt.'
      )
    ]
  },

  eigenkapital: {
    motivation: 'Eigenkapital ist kein einheitlicher Block. Seine Gliederung und Ergebnisverwendung unterscheiden sich je nach Rechtsform und sind für Bilanzanalyse und Klausuraufbau zentral.',
    theorie: [
      section(
        'Eigenkapital in Kapitalgesellschaften',
        `<p>Bei Kapitalgesellschaften ist das Eigenkapital gegliedert, etwa in gezeichnetes Kapital, Kapitalrücklage, Gewinnrücklagen, Gewinnvortrag und Jahresüberschuss. Diese Differenzierung spiegelt Haftungsstruktur und Ausschüttungslogik wider.</p>`
      ),
      section(
        'Eigenkapital in Personengesellschaften',
        `<p>Bei Personengesellschaften steht stärker die Gesellschafterbezogenheit im Vordergrund. Privatentnahmen und Privateinlagen prägen die Veränderung des Kapitals anders als bei Kapitalgesellschaften.</p>`
      ),
      section(
        'Ergebnisverwendung',
        `<p>Jahresüberschüsse werden nicht automatisch ausgeschüttet. Sie können eingestellt, vorgetragen oder ausgeschüttet werden. Gerade diese Übergänge sind in Abschlussaufgaben regelmäßig zu erklären.</p>
         ${warn('Kapitalfehler:', 'Eigenkapital ist nicht einfach „Restgröße“. Seine Gliederung trägt konkrete Rechtsfolgen für Haftung, Ausschüttung und Bilanzanalyse.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Eigenkapitalquote', eq: String.raw`$$EK\text{-Quote} = \frac{EK}{Bilanzsumme}$$`, desc: 'Zentrale Kennzahl zur Finanzierungsstruktur.' },
      { label: 'Jahresüberschuss', eq: String.raw`\text{Teil des Eigenkapitals nach Erfolgsrechnung}`, desc: 'Verbindet GuV und Bilanz.' }
    ],
    aufgaben: [
      task(
        'Warum ist die Ergebnisverwendung mehr als ein bloßer „Nachklapp“ zur GuV?',
        [
          step('Bilanzbezug benennen.', String.raw`\text{Sie entscheidet, wie der Erfolg im Eigenkapital weitergeführt wird.}`),
          step('Rechtsformbezug ergänzen.', String.raw`\text{Ausschüttung und Rücklagenbildung unterscheiden sich je nach Gesellschaftsform.}`)
        ],
        'Die Ergebnisverwendung strukturiert den Übergang vom Periodenerfolg zur Eigenkapitaldarstellung und ist deshalb bilanziell zentral.'
      ),
      task(
        'Warum ist die Eigenkapitalquote für die Analyse eines Jahresabschlusses wichtig?',
        [
          step('Finanzierungsfunktion erläutern.', String.raw`\text{Sie misst, wie stark das Unternehmen durch Eigen- statt Fremdkapital getragen ist.}`),
          step('Risikolage verknüpfen.', String.raw`\text{Eine höhere Quote bedeutet tendenziell mehr Puffer gegenüber Verlusten.}`)
        ],
        'Die Eigenkapitalquote zeigt Stabilität und Haftungspuffer und ist deshalb eine zentrale Abschlusskennzahl.'
      )
    ]
  },

  fremdkapital: {
    motivation: 'Verbindlichkeiten und Rückstellungen sehen ähnlich aus, sind aber bilanzrechtlich gerade wegen ihrer unterschiedlichen Sicherheit sauber zu trennen.',
    theorie: [
      section(
        'Verbindlichkeiten',
        `<p>Verbindlichkeiten sind dem Grunde und der Höhe nach feststehende Schulden. Typische Fälle sind Lieferantenverbindlichkeiten, Darlehen oder Steuerverbindlichkeiten. Ihr Ansatz und ihre Bewertung folgen der vergleichsweise sicheren Verpflichtungslage.</p>`
      ),
      section(
        'Rückstellungen',
        `<p>Rückstellungen erfassen ungewisse Verbindlichkeiten oder drohende Verluste aus schwebenden Geschäften. Die Verpflichtung besteht dem Grunde nach, Höhe oder Fälligkeit sind aber noch unsicher. Genau das macht sie zum klausurtypischen Abgrenzungsproblem.</p>`
      ),
      section(
        'Typische Bewertungsfragen',
        `<p>Gerade Rückstellungen verlangen eine vernünftige kaufmännische Beurteilung. Bei Fremdwährungsverbindlichkeiten kommen zusätzlich Kursfragen ins Spiel. In der Klausur musst du immer zuerst sauber klassifizieren und erst dann bewerten.</p>
         ${warn('Abgrenzungsfalle:', 'Nicht jede unsichere Zahlung ist automatisch eine Rückstellung. Zuerst ist zu klären, ob bereits eine Verpflichtung dem Grunde nach besteht.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Verbindlichkeit', eq: String.raw`\text{sicher dem Grunde und der Höhe nach}`, desc: 'Feste Schuldposition.' },
      { label: 'Rückstellung', eq: String.raw`\text{ungewisse Verbindlichkeit}`, desc: 'Verpflichtung steht fest, Höhe oder Fälligkeit aber nicht vollständig.' }
    ],
    aufgaben: [
      task(
        'Warum ist die Unterscheidung zwischen Verbindlichkeit und Rückstellung in Prüfungen so wichtig?',
        [
          step('Sicherheitsgrad der Schuld benennen.', String.raw`\text{Verbindlichkeiten sind sicherer bestimmt als Rückstellungen.}`),
          step('Folgen für Bewertung und Ausweis erklären.', String.raw`\text{Die Bilanzierung hängt an der richtigen Klassifikation.}`)
        ],
        'Die richtige Einordnung steuert Ansatz, Bewertung und Ausweis und ist deshalb ein Kernpunkt jeder Abschlussklausur.'
      ),
      task(
        'Ein Prozessrisiko ist wahrscheinlich, die genaue Zahlungshöhe aber offen. Welche Denkrichtung ist naheliegend?',
        [
          step('Auf die Unsicherheit achten.', String.raw`\text{Dem Grunde nach besteht eine Verpflichtung, die Höhe ist offen.}`),
          step('Bilanzkategorie zuordnen.', String.raw`\text{Das spricht für eine Rückstellung.}`)
        ],
        'Bei bestehender, aber noch ungewisser Verpflichtung ist regelmäßig an eine Rückstellung zu denken.'
      )
    ]
  },

  rechnungsabgrenzung: {
    motivation: 'Rechnungsabgrenzung macht Periodenerfolg erst sinnvoll: Ohne sie würden Zahlungen und Erfolg ständig in die falsche Periode rutschen.',
    theorie: [
      section(
        'Warum abgegrenzt wird',
        `<p>Die GuV soll nur die Aufwendungen und Erträge der laufenden Periode enthalten. Deshalb müssen Zahlungen, die wirtschaftlich in eine andere Periode gehören, abgegrenzt werden. Genau hier setzt die Rechnungsabgrenzung an.</p>`
      ),
      section(
        'Transitorische und antizipative Abgrenzung',
        `<p>Transitorische Posten betreffen Zahlungen vor oder nach dem Stichtag, die wirtschaftlich teilweise in andere Perioden gehören. Antizipative Posten erfassen Erträge oder Aufwendungen, die wirtschaftlich bereits entstanden sind, aber erst später zahlungswirksam werden.</p>`
      ),
      section(
        'Abgrenzung zu Forderungen und Verbindlichkeiten',
        `<p>Rechnungsabgrenzung darf nicht mit sonstigen Forderungen oder Verbindlichkeiten verwechselt werden. In der Klausur entscheidet häufig der Satz „ist die wirtschaftliche Ursache schon in dieser Periode gesetzt?“ über die richtige Einordnung.</p>
         ${warn('Zeitfehler:', 'Wer nur auf den Zahlungszeitpunkt schaut, verfehlt das Periodenprinzip. Für die Abgrenzung zählt die wirtschaftliche Zugehörigkeit.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Periodenzuordnung', eq: String.raw`\text{wirtschaftliche Zugehörigkeit} \neq \text{Zahlungszeitpunkt}`, desc: 'Kernlogik der Rechnungsabgrenzung.' },
      { label: 'RAP', eq: String.raw`\text{Zahlung heute, Erfolg teilweise morgen}`, desc: 'Transitorische Abgrenzung.' }
    ],
    aufgaben: [
      task(
        'Warum kann eine Zahlung im alten Jahr trotzdem teilweise Aufwand des neuen Jahres sein?',
        [
          step('Periodenprinzip in den Mittelpunkt stellen.', String.raw`\text{Aufwand richtet sich nach wirtschaftlicher Verursachung, nicht nur nach Zahlung.}`),
          step('Rechtsfolge nennen.', String.raw`\text{Dann ist ein aktiver oder passiver RAP zu prüfen.}`)
        ],
        'Weil Erfolg periodengerecht ermittelt werden soll. Eine Zahlung kann deshalb bilanziell auf verschiedene Perioden verteilt werden.'
      ),
      task(
        'Woran erkennst du im Fall, dass eher an eine Rechnungsabgrenzung als an eine normale Forderung zu denken ist?',
        [
          step('Zeitliche Komponente prüfen.', String.raw`\text{Es geht um die richtige periodische Zuordnung eines bereits geleisteten oder empfangenen Betrags.}`),
          step('Nicht bloß Rechtsanspruch suchen.', String.raw`\text{Der Fokus liegt auf Periodengerechtigkeit, nicht primär auf der Durchsetzbarkeit einer Forderung.}`)
        ],
        'Rechnungsabgrenzung ist dann naheliegend, wenn der Zeitpunkt von Zahlung und wirtschaftlicher Zugehörigkeit auseinanderfällt.'
      )
    ]
  },

  erfolgsrechnung: {
    motivation: 'Mit GKV und UKV endet der Kurs dort, wo sich Bilanzierung, Bewertung und Periodisierung im Jahresergebnis bündeln.',
    theorie: [
      section(
        'Gesamtkostenverfahren',
        `<p>Das GKV gliedert Aufwendungen nach Kostenarten. Bestandsveränderungen und aktivierte Eigenleistungen korrigieren dabei den Rohaufwand zu einem periodengerechten Ergebnis. Das Verfahren ist besonders anschlussfähig an die klassische Buchführungslogik.</p>`
      ),
      section(
        'Umsatzkostenverfahren',
        `<p>Das UKV gliedert die Aufwendungen nach Funktionsbereichen, insbesondere Herstellung, Vertrieb und Verwaltung. Dadurch rückt stärker die Erfolgsbeziehung zu den umgesetzten Leistungen in den Vordergrund.</p>`
      ),
      section(
        'Warum beide zum selben Ergebnis führen',
        `<p>GKV und UKV unterscheiden sich nicht im Jahresergebnis, sondern in der Darstellungslogik. Gerade diese Aussage gehört in fast jede Vergleichsaufgabe.</p>
         ${warn('Vergleichsfehler:', 'Wer GKV und UKV wie alternative Gewinnermittlungen behandelt, verfehlt den Kern. Das Ergebnis ist gleich, nur die Struktur der Darstellung ändert sich.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Jahresergebnis', eq: String.raw`$$JÜ = Erträge - Aufwendungen$$`, desc: 'Beide Verfahren führen dorthin.' },
      { label: 'Kostenart vs. Funktion', eq: String.raw`\text{GKV: Was für Kosten? \quad UKV: Wofür Kosten?}`, desc: 'Merksatz zur Darstellungslogik.' }
    ],
    aufgaben: [
      task(
        'Warum können GKV und UKV trotz unterschiedlicher Aufwandsdarstellung zum gleichen Jahresüberschuss führen?',
        [
          step('Auf die Darstellung statt den Erfolg fokussieren.', String.raw`\text{Beide erfassen denselben wirtschaftlichen Gesamtvorgang.}`),
          step('Den Unterschied präzisieren.', String.raw`\text{Sie ordnen Kosten nur unterschiedlich an: nach Arten oder nach Funktionen.}`)
        ],
        'Beide Verfahren sind nur unterschiedliche Darstellungsformen derselben Erfolgsrechnung und führen deshalb zum gleichen Jahresergebnis.'
      ),
      task(
        'Wann ist das GKV in der Klausur oft leichter zugänglich als das UKV?',
        [
          step('An die Kontenlogik der Buchführung anknüpfen.', String.raw`\text{Aufwendungen werden direkt nach Arten gezeigt.}`),
          step('Praktischen Rechenvorteil nennen.', String.raw`\text{Material, Personal, Abschreibungen und sonstige Aufwendungen lassen sich unmittelbar zuordnen.}`)
        ],
        'Das GKV ist oft näher an den üblichen Kontenbewegungen und daher in Einsteigerklausuren leichter nachvollziehbar.'
      )
    ]
  }
};

