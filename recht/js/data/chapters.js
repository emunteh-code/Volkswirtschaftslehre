const section = (title, body) => `
  <div class="section-block">
    <h3>${title}</h3>
    ${body}
  </div>
`;

const warn = (title, body) => `<div class="warn-box"><strong>${title}</strong> ${body}</div>`;

const scheme = (text) => `<div class="math-block">${text}</div>`;

const step = (text, eq = null) => ({ text, eq });

const task = (text, steps, result, hint = null) => ({
  text,
  steps,
  result,
  ...(hint ? { hint } : {})
});

export const CHAPTERS = [
  { id: 'was_ist_recht', title: 'Was ist Recht?', cat: 'Grundlagen', short: 'Recht' },
  { id: 'privatrecht', title: 'Privatrecht und BGB-Struktur', cat: 'Grundlagen', short: 'BGB' },
  { id: 'methodik', title: 'Juristische Methodik und Gutachtenstil', cat: 'Grundlagen', short: 'Methodik' },
  { id: 'willenserklaerung', title: 'Willenserklärung und Vertragsschluss', cat: 'Vertrag', short: 'Vertrag' },
  { id: 'dissens_anfechtung', title: 'Dissens und Anfechtung', cat: 'Vertrag', short: 'Anfechtung' },
  { id: 'trennung_abstraktion', title: 'Trennungs- und Abstraktionsprinzip', cat: 'Vertrag', short: 'Abstraktion' },
  { id: 'geschaeftsfaehigkeit', title: 'Rechts- und Geschäftsfähigkeit', cat: 'Personen & Zurechnung', short: 'Fähigkeit' },
  { id: 'stellvertretung', title: 'Stellvertretung', cat: 'Personen & Zurechnung', short: 'Vertretung' },
  { id: 'agb', title: 'AGB-Recht', cat: 'Personen & Zurechnung', short: 'AGB' },
  { id: 'schuldrecht_intro', title: 'Schuldrecht AT: Grundlagen', cat: 'Schuldrecht AT', short: 'Schuldrecht' },
  { id: 'schadensersatz', title: 'Schuldrecht AT: Schadensersatz', cat: 'Schuldrecht AT', short: 'SE' },
  { id: 'ruecktritt_widerruf', title: 'Rücktritt und Verbraucherwiderruf', cat: 'Schuldrecht AT', short: 'Rücktritt' }
];

export const CONTENT = {
  was_ist_recht: {
    motivation: 'Der Kurs beginnt nicht mit Spezialnormen, sondern mit der Grundfrage, was Recht überhaupt leisten soll: Verbindlichkeit, Konfliktlösung und Erwartungssicherheit.',
    theorie: [
      section(
        'Recht als verbindliche Ordnung',
        `<p>Recht ist ein System verbindlicher Normen, das gesellschaftliches Verhalten ordnet und Konflikte kanalisiert. Es schafft Erwartungssicherheit: Wer Verträge schließt, Eigentum überträgt oder Ansprüche geltend macht, muss darauf vertrauen können, dass Regeln gelten und durchsetzbar sind.</p>`
      ),
      section(
        'Rechtsquellen und Ebenen',
        `<p>Für den Kurs besonders wichtig sind Gesetz, Rechtsprechung und juristische Methodik. In der Klausur wird das Recht nicht frei „erfunden“, sondern aus Normtext, Systematik und Fallanwendung entwickelt. Genau deshalb brauchst du früh eine saubere Trennung zwischen Rechtsquelle, Auslegung und Ergebnis.</p>`
      ),
      section(
        'Warum der Kurs fallbezogen arbeitet',
        `<p>Juristische Kompetenz zeigt sich nicht im bloßen Wiedergeben von Definitionen, sondern in der Subsumtion eines Sachverhalts unter gesetzliche Voraussetzungen. Der Fall ist deshalb kein Zusatz, sondern die eigentliche Arbeitsform des Rechts.</p>
         ${warn('Fehlstart:', 'Viele Antworten beginnen mit Meinungen oder Alltagsgerechtigkeit. Im Gutachten zählt zuerst die gesetzliche Anknüpfung und erst dann die Wertung.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Kernfrage', eq: String.raw`\text{Wer will was von wem woraus?}`, desc: 'Juristische Anspruchsarbeit beginnt mit einer präzisen Ausgangsfrage.' },
      { label: 'Normbezug', eq: String.raw`\text{Sachverhalt} \rightarrow \text{Tatbestandsmerkmal} \rightarrow \text{Rechtsfolge}`, desc: 'Das ist die elementare Struktur juristischer Arbeit.' }
    ],
    aufgaben: [
      task(
        'Warum ist ein Rechtsfall nicht schon dadurch gelöst, dass man intuitiv sagt, was „gerecht“ wäre?',
        [
          step('Recht und bloßes Gerechtigkeitsgefühl trennen.', String.raw`\text{Im Gutachten zählt die rechtliche Begründung aus Normen, nicht nur das intuitive Ergebnis.}`),
          step('Die Rolle der Norm herausarbeiten.', String.raw`\text{Erst Tatbestand und Rechtsfolge schaffen eine belastbare Lösung.}`)
        ],
        'Juristische Lösungen müssen normativ begründet werden. Ein gerechtes Bauchgefühl ersetzt weder Tatbestand noch Subsumtion.'
      ),
      task(
        'Ein Student nennt im Examen sofort das Ergebnis, prüft aber keine Voraussetzungen. Warum ist das methodisch problematisch?',
        [
          step('Gutachtenstil als Prüfungslogik benennen.', String.raw`\text{Das Ergebnis muss über Definition und Subsumtion hergeleitet werden.}`),
          step('Funktion der Begründung erklären.', String.raw`\text{Nur so wird sichtbar, ob die Rechtsfolge tatsächlich ausgelöst ist.}`)
        ],
        'Ohne Herleitung bleibt unklar, ob die relevanten Tatbestandsmerkmale überhaupt vorliegen. Recht verlangt begründete und nicht nur behauptete Ergebnisse.'
      )
    ]
  },

  privatrecht: {
    motivation: 'Bevor Einzelfälle lösbar werden, musst du wissen, wo im BGB du überhaupt suchst: Privatrecht ordnet Beziehungen zwischen Gleichgeordneten und bildet die Arbeitsgrundlage fast aller späteren Fälle.',
    theorie: [
      section(
        'Privatrecht innerhalb der Rechtsordnung',
        `<p>Das Privatrecht regelt Rechtsbeziehungen zwischen rechtlich Gleichgeordneten. Es unterscheidet sich damit vom öffentlichen Recht, in dem staatliche Über- und Unterordnungsverhältnisse dominieren. Für Wirtschaftswissenschaftler ist das Privatrecht zentral, weil Verträge, Sachenrecht und Haftung fast alle Marktbeziehungen strukturieren.</p>`
      ),
      section(
        'Grundaufbau des BGB',
        `<p>Das BGB ist kein loses Normbündel, sondern systematisch aufgebaut: Allgemeiner Teil, Schuldrecht, Sachenrecht, Familienrecht und Erbrecht. Klausuren arbeiten oft aus dem Allgemeinen Teil heraus, bevor sie in speziellere Anspruchsgrundlagen übergehen.</p>
         ${scheme(String.raw`\text{AT} \rightarrow \text{Schuldrecht} \rightarrow \text{Sachenrecht / Sondermaterien}`)}
      `
      ),
      section(
        'Warum die Systematik klausurentscheidend ist',
        `<p>Wer die Stellung einer Norm im System kennt, findet schneller die passende Anspruchsgrundlage und vermeidet Doppelprüfungen. Gerade im ersten Kontakt mit dem BGB entscheidet der systematische Zugriff darüber, ob Fälle geordnet oder chaotisch bearbeitet werden.</p>
         ${warn('Orientierungsfehler:', 'Viele Lernende merken sich Einzelnormen, ohne ihre Stellung im System zu kennen. Dann wird die Fallbearbeitung langsam und unsicher.')}`
      )
    ].join(''),
    formeln: [
      { label: 'BGB-System', eq: String.raw`\text{AT} + \text{Besonderer Teil}`, desc: 'Spezielle Normen bauen auf allgemeinen Regeln auf.' },
      { label: 'Privatrecht', eq: String.raw`\text{Gleichordnung der Beteiligten}`, desc: 'Grundidee der privatrechtlichen Beziehung.' }
    ],
    aufgaben: [
      task(
        'Warum beginnt eine vertragliche Fallprüfung häufig mit dem Allgemeinen Teil, obwohl der konkrete Anspruch etwa aus § 433 BGB stammt?',
        [
          step('Allgemeine Voraussetzungen identifizieren.', String.raw`\text{Vertragsschluss, Geschäftsfähigkeit, Anfechtung und Stellvertretung stehen im AT.}`),
          step('Dann die Spezialnorm ergänzen.', String.raw`\text{Erst danach wird die konkrete Anspruchsgrundlage geprüft.}`)
        ],
        'Spezialnormen setzen allgemeine Voraussetzungen voraus. Deshalb muss der Allgemeine Teil oft zuerst geklärt werden.'
      ),
      task(
        'Ein Student verwechselt öffentliches Recht und Privatrecht. Welche Abgrenzung ist in einer Grundklausur am wichtigsten?',
        [
          step('Auf die Stellung der Beteiligten schauen.', String.raw`\text{Gleichordnung spricht für Privatrecht, Über-/Unterordnung eher für öffentliches Recht.}`),
          step('Die Funktion der Norm mitdenken.', String.raw`\text{Im Privatrecht geht es um Beziehungen zwischen Privaten und ihren Ansprüchen.}`)
        ],
        'Die einfachste und wichtigste Ausgangsabgrenzung ist das Verhältnis der Beteiligten: gleichgeordnet oder hoheitlich strukturiert.'
      )
    ]
  },

  methodik: {
    motivation: 'Juristische Methodik ist das eigentliche Werkzeugfach des Moduls: Ohne Anspruchsaufbau, Definition, Subsumtion und saubere Gliederung werden auch bekannte Normen in der Klausur wertlos.',
    theorie: [
      section(
        'Anspruchsdenken',
        `<p>Das Grundschema jeder zivilrechtlichen Fallbearbeitung lautet: Wer will was von wem woraus? Diese Frage zwingt dazu, Anspruchsgegner, Anspruchsziel und Anspruchsgrundlage präzise zu benennen. Genau dadurch wird der Fall prüfbar.</p>`
      ),
      section(
        'Gutachtenstil',
        `<p>Der klassische Gutachtenstil besteht aus Obersatz, Definition, Subsumtion und Ergebnis. In einfachen Fällen darf knapp formuliert werden, aber die Struktur bleibt dieselbe: Tatbestandsmerkmal für Tatbestandsmerkmal wird geprüft, ob der Sachverhalt die Normvoraussetzungen erfüllt.</p>
         ${scheme(String.raw`\text{Obersatz} \rightarrow \text{Definition} \rightarrow \text{Subsumtion} \rightarrow \text{Ergebnis}`)}
      `
      ),
      section(
        'Subsumtion als Kernleistung',
        `<p>Die Subsumtion ist mehr als ein Wortersatz für „anwenden“: Du musst zeigen, <em>warum</em> konkrete Tatsachen ein Tatbestandsmerkmal erfüllen oder nicht erfüllen. Genau hier trennt sich reine Definitionenkenntnis von juristischem Arbeiten.</p>
         ${warn('Methodikfehler:', 'Definitionen ohne anschließende Subsumtion sind fast wertlos. Die Klausur bewertet nicht bloßes Wissen, sondern die Anwendung auf den Sachverhalt.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Anspruchsfrage', eq: String.raw`\text{Wer will was von wem woraus?}`, desc: 'Erste und wichtigste Sortierfrage des Falles.' },
      { label: 'Gutachtenstil', eq: String.raw`\text{O} - \text{D} - \text{S} - \text{E}`, desc: 'Obersatz, Definition, Subsumtion, Ergebnis.' }
    ],
    aufgaben: [
      task(
        'Warum ist „A hat einen Anspruch aus § 433 BGB“ ohne weitere Prüfung noch keine gute Klausurlösung?',
        [
          step('Anspruchsgrundlage von Anspruchsentstehung trennen.', String.raw`\text{Die Norm allein sagt noch nicht, dass ihre Voraussetzungen erfüllt sind.}`),
          step('Methodische Ergänzung nennen.', String.raw`\text{Es braucht Definition, Subsumtion und Ergebnis zu jedem relevanten Merkmal.}`)
        ],
        'Eine Anspruchsgrundlage muss vollständig hergeleitet werden. Erst die Prüfung ihrer Voraussetzungen macht aus der Norm eine tragfähige Lösung.'
      ),
      task(
        'Ein Bearbeiter zitiert Definitionen korrekt, zieht aber keine Verbindung zum Sachverhalt. Welcher Arbeitsschritt fehlt?',
        [
          step('Den fehlenden Schritt benennen.', String.raw`\text{Es fehlt die Subsumtion.}`),
          step('Seine Funktion erklären.', String.raw`\text{Nur die Subsumtion verbindet Tatbestandsmerkmal und konkrete Tatsachen.}`)
        ],
        'Ohne Subsumtion bleibt unklar, ob und warum der Sachverhalt die Norm wirklich erfüllt.'
      )
    ]
  },

  willenserklaerung: {
    motivation: 'Willenserklärung und Vertragsschluss sind das Herzstück des Allgemeinen Teils. Wer Angebot, Annahme, Zugang und Erklärungshandlung nicht sauber prüft, verliert fast jeden schuldrechtlichen Fall schon am Anfang.',
    theorie: [
      section(
        'Willenserklärung',
        `<p>Eine Willenserklärung ist eine auf einen rechtlichen Erfolg gerichtete Erklärung. Sie setzt objektiven Erklärungswert und subjektive Elemente wie Handlungswillen voraus. Für die Klausur ist entscheidend: Nicht jedes innere Wollen wird rechtlich relevant, sondern nur das rechtlich erkennbare Erklären.</p>`
      ),
      section(
        'Angebot, Annahme und Zugang',
        `<p>Ein Vertrag setzt zwei korrespondierende Willenserklärungen voraus: Angebot und Annahme. Das Angebot muss so bestimmt sein, dass ein einfaches „Ja“ zum Vertrag führt. Die Annahme muss inhaltlich übereinstimmen und dem Angebotenden zugehen, soweit sie empfangsbedürftig ist.</p>
         ${scheme(String.raw`\text{Vertrag} = \text{Angebot} + \text{Annahme}`)}
      `
      ),
      section(
        'Grenzfälle in Klausuren',
        `<p>Schweigen ist im Privatrecht grundsätzlich keine Annahme. Bloßes inneres Einverständnis reicht nicht. Wer nur „denkt“, aber nicht erklärt, schließt keinen Vertrag. Auch invitatio ad offerendum und rechtliche Bindungswirkung musst du sauber auseinanderhalten.</p>
         ${warn('Klassiker:', 'Das bloße Lesen eines Angebots und inneres Zustimmen ersetzen keine Annahmeerklärung. Ohne Kundgabe kein Vertrag.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Vertragsschluss', eq: String.raw`\text{Angebot} + \text{Annahme}`, desc: 'Zwei übereinstimmende Willenserklärungen.' },
      { label: 'Angebot', eq: String.raw`\text{essentialia negotii} + \text{Rechtsbindungswille}`, desc: 'So bestimmt, dass ein einfaches Ja genügt.' }
    ],
    aufgaben: [
      task(
        'A bietet B per E-Mail einen Laptop für 500 € an. B liest die Nachricht und denkt sich „einverstanden“, antwortet aber nicht. Ist ein Vertrag zustande gekommen?',
        [
          step('Angebot prüfen.', String.raw`\text{Ja, Sache und Preis sind bestimmt.}`),
          step('Annahme prüfen.', String.raw`\text{Nein, bloßes inneres Einverständnis ist keine Kundgabe.}`),
          step('Ergebnis ziehen.', String.raw`\text{Mangels Annahmeerklärung kein Vertrag.}`)
        ],
        'Ein Vertrag ist nicht zustande gekommen, weil es an einer nach außen erklärten Annahme fehlt.'
      ),
      task(
        'Warum ist ein Preisschild im Supermarkt häufig noch kein Angebot, sondern nur eine invitatio ad offerendum?',
        [
          step('Bindungswillen problematisieren.', String.raw`\text{Der Händler will sich nicht ohne Lager- und Kassenkontrolle sofort binden.}`),
          step('Rechtsfolge benennen.', String.raw`\text{Das eigentliche Angebot liegt dann regelmäßig im Vorlegen an der Kasse.}`)
        ],
        'Viele Alltagssituationen sind rechtlich nur Aufforderungen zur Abgabe eines Angebots. Das schützt vor ungewollter unmittelbarer Bindung.'
      )
    ]
  },

  dissens_anfechtung: {
    motivation: 'Dissens und Anfechtung sind die klassischen Korrekturinstrumente des Vertragsschlusses. Hier entscheidet sich oft, ob ein scheinbar geschlossener Vertrag tatsächlich wirksam bleibt.',
    theorie: [
      section(
        'Offener und versteckter Dissens',
        `<p>Dissens bedeutet fehlende Einigung. Beim offenen Dissens wissen die Parteien, dass noch kein Konsens besteht. Beim versteckten Dissens glauben sie an Einigkeit, obwohl sich ihre Erklärungen objektiv nicht decken. In beiden Fällen musst du sauber prüfen, ob überhaupt ein Vertrag entstanden ist.</p>`
      ),
      section(
        'Anfechtungsgründe und Erklärung',
        `<p>Die Anfechtung setzt einen anerkannten Anfechtungsgrund voraus, etwa Inhalts- oder Erklärungsirrtum. Hinzu kommen Anfechtungserklärung und Frist. Anders als beim Dissens entsteht der Vertrag hier zunächst, wird aber durch erfolgreiche Anfechtung ex tunc vernichtet.</p>
         ${scheme(String.raw`\text{Anfechtungsgrund} + \text{Erklärung} + \text{Frist} \Rightarrow \text{Nichtigkeit ex tunc}`)}
      `
      ),
      section(
        'Rechtsfolge und Schadensersatz',
        `<p>Die Anfechtung vernichtet das Geschäft rückwirkend. Gleichzeitig kann der Anfechtende nach § 122 BGB zum Vertrauensschaden verpflichtet sein. Gerade diese Doppelfolge wird in Kurzfällen häufig abgefragt.</p>
         ${warn('Beliebter Fehler:', 'Dissens und Anfechtung sind nicht dasselbe. Beim Dissens fehlt die Einigung schon, bei der Anfechtung wird ein zunächst wirksames Geschäft wieder beseitigt.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Anfechtung', eq: String.raw`\text{§§ 119 ff. BGB}`, desc: 'Irrtum oder ähnliche Anfechtungsgründe können ein Geschäft rückwirkend beseitigen.' },
      { label: 'Rechtsfolge', eq: String.raw`\text{ex tunc nichtig}`, desc: 'Erfolgreiche Anfechtung vernichtet das Geschäft rückwirkend.' }
    ],
    aufgaben: [
      task(
        'A will 100 Flaschen verkaufen, verschreibt sich aber und bietet 1000 an. B nimmt sofort an. Welcher Prüfungsweg ist naheliegend?',
        [
          step('Zunächst Vertragsschluss annehmen.', String.raw`\text{Angebot und Annahme liegen zunächst vor.}`),
          step('Dann Irrtum prüfen.', String.raw`\text{Erklärungsirrtum nach § 119 Abs. 1 Alt. 2 BGB naheliegend.}`),
          step('Rechtsfolge der erfolgreichen Anfechtung nennen.', String.raw`\text{Vertrag ex tunc nichtig; ggf. § 122 BGB.}`)
        ],
        'Hier liegt typischerweise kein Dissens, sondern ein zunächst geschlossener, später anfechtbarer Vertrag vor.'
      ),
      task(
        'Warum reicht es in einer Anfechtungsklausur nicht, nur den Irrtum zu erkennen?',
        [
          step('Weitere Voraussetzungen ergänzen.', String.raw`\text{Anfechtungserklärung und Frist müssen mitgeprüft werden.}`),
          step('Rechtsfolgen vollständig darstellen.', String.raw`\text{Nichtigkeit ex tunc plus möglicher Vertrauensschaden nach § 122 BGB.}`)
        ],
        'Eine erfolgreiche Anfechtung verlangt mehr als nur einen Irrtum. Erklärung, Frist und Rechtsfolgen gehören zwingend zur vollständigen Lösung.'
      )
    ]
  },

  trennung_abstraktion: {
    motivation: 'Das Trennungs- und Abstraktionsprinzip ist für viele Nichtjuristen der ungewohnteste, aber klausurprägendste Teil des deutschen Privatrechts.',
    theorie: [
      section(
        'Trennungsprinzip',
        `<p>Verpflichtungs- und Verfügungsgeschäft sind voneinander zu trennen. Der Kaufvertrag verpflichtet zur Übereignung, überträgt das Eigentum aber noch nicht. Erst das dingliche Verfügungsgeschäft bewirkt die Rechtsänderung am Gegenstand.</p>`
      ),
      section(
        'Abstraktionsprinzip',
        `<p>Die Wirksamkeit des Verfügungsgeschäfts hängt grundsätzlich nicht von der Wirksamkeit des Verpflichtungsgeschäfts ab. Deshalb kann eine Eigentumsübertragung trotz unwirksamen Kaufvertrags wirksam sein. Rückabwicklung läuft dann oft über Bereicherungsrecht.</p>
         ${scheme(String.raw`\text{Kaufvertrag} \neq \text{Übereignung}`)}
      `
      ),
      section(
        'Warum das klausurpraktisch wichtig ist',
        `<p>Wer Verpflichtungs- und Verfügungsgeschäft vermischt, verliert Eigentums- und Anspruchslagen aus dem Blick. Das Prinzip wirkt kompliziert, macht die Fallprüfung aber systematisch beherrschbar.</p>
         ${warn('Standardverwechslung:', '„Der Kaufvertrag ist unwirksam, also ging nie Eigentum über“ ist zu schnell. Zuerst musst du das Verfügungsgeschäft eigenständig prüfen.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Verpflichtung', eq: String.raw`\text{schuldrechtliches Geschäft}`, desc: 'Begründet Leistungspflichten.' },
      { label: 'Verfügung', eq: String.raw`\text{dingliche Rechtsänderung}`, desc: 'Überträgt, belastet oder hebt ein Recht auf.' }
    ],
    aufgaben: [
      task(
        'Warum kann ein unwirksamer Kaufvertrag nicht automatisch bedeuten, dass auch kein Eigentum übergegangen ist?',
        [
          step('Geschäfte trennen.', String.raw`\text{Kaufvertrag und Übereignung sind verschiedene Rechtsgeschäfte.}`),
          step('Abstraktion ergänzen.', String.raw`\text{Die Verfügung kann trotz Mangel im Verpflichtungsgeschäft wirksam sein.}`)
        ],
        'Weil das dingliche Geschäft eigenständig zu prüfen ist. Ein Fehler im Kaufvertrag schlägt nicht automatisch auf die Eigentumsübertragung durch.'
      ),
      task(
        'Welche Funktion hat das Abstraktionsprinzip in der Fallbearbeitung?',
        [
          step('Systematisierung benennen.', String.raw`\text{Es ordnet Pflichten und Rechtsänderungen in getrennte Prüfungsschritte.}`),
          step('Folgen für Rückabwicklung erklären.', String.raw`\text{Unwirksamkeit des Grundgeschäfts führt oft nicht direkt zur Eigentumslage, sondern zu Bereicherungsfragen.}`)
        ],
        'Das Prinzip zwingt zu einer sauberen Trennung der Ebenen und macht dadurch auch komplexe Rückabwicklungen systematisch lösbar.'
      )
    ]
  },

  geschaeftsfaehigkeit: {
    motivation: 'Geschäftsfähigkeit entscheidet, wer sich wirksam rechtlich binden kann. Gerade Minderjährigenfälle sind Standardstoff, weil sie Definition, Normlogik und Fallanwendung zugleich verlangen.',
    theorie: [
      section(
        'Rechtsfähigkeit vs. Geschäftsfähigkeit',
        `<p>Rechtsfähigkeit ist die Fähigkeit, Träger von Rechten und Pflichten zu sein. Geschäftsfähigkeit ist die Fähigkeit, durch eigene Willenserklärungen rechtliche Wirkungen herbeizuführen. Die Unterscheidung ist elementar und wird in Einsteigerklausuren häufig abgefragt.</p>`
      ),
      section(
        'Geschäftsunfähigkeit und beschränkte Geschäftsfähigkeit',
        `<p>Geschäftsunfähige können grundsätzlich keine wirksamen Willenserklärungen abgeben. Beschränkt Geschäftsfähige benötigen regelmäßig die Zustimmung der gesetzlichen Vertreter, soweit das Geschäft nicht lediglich rechtlich vorteilhaft ist oder vom Taschengeldparagraphen gedeckt wird.</p>
         ${scheme(String.raw`\text{§ 106 BGB} \Rightarrow \text{Wirksamkeit häufig nur mit Zustimmung}`)}
      `
      ),
      section(
        'Minderjährigenfälle lesen',
        `<p>Prüfungen verlangen hier meist kein bloßes Auswendiglernen, sondern eine saubere Fallreihenfolge: Alter, Art des Geschäfts, Vorteil/Nachteil, Zustimmung, Bewirkung mit eigenen Mitteln. Gerade diese Struktur musst du sicher beherrschen.</p>
         ${warn('Kurzschluss:', '„Der Minderjährige wollte es ja“ ersetzt keine Zustimmungslösung. Die rechtliche Prüfung läuft über §§ 104 ff. BGB.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Beschränkt geschäftsfähig', eq: String.raw`\text{§§ 106 ff. BGB}`, desc: 'Zwischen völliger Unfähigkeit und voller Geschäftsfähigkeit.' },
      { label: 'Lediglich rechtlich vorteilhaft', eq: String.raw`\text{kein rechtlicher Nachteil}`, desc: 'Dann ist keine Zustimmung nötig.' }
    ],
    aufgaben: [
      task(
        'Ein 16-Jähriger kauft ohne Zustimmung seiner Eltern ein Smartphone auf Raten. Welcher Kernpunkt entscheidet über die Wirksamkeit?',
        [
          step('Zunächst den Status bestimmen.', String.raw`\text{Der 16-Jährige ist beschränkt geschäftsfähig.}`),
          step('Dann das Geschäft bewerten.', String.raw`\text{Ein Ratenkauf ist nicht lediglich rechtlich vorteilhaft.}`),
          step('Zustimmungserfordernis nennen.', String.raw`\text{Ohne Zustimmung ist das Geschäft regelmäßig schwebend unwirksam.}`)
        ],
        'Entscheidend ist, dass der Minderjährige sich zu Zahlungen verpflichtet und damit rechtlich belastet wird. Deshalb braucht er grundsätzlich Zustimmung.'
      ),
      task(
        'Warum darfst du die Wirksamkeit eines Minderjährigengeschäfts nicht allein danach beurteilen, ob der Kauf wirtschaftlich „gut“ oder „schlecht“ war?',
        [
          step('Wirtschaftlichen und rechtlichen Vorteil unterscheiden.', String.raw`\text{Maßstab ist der rechtliche, nicht der wirtschaftliche Vorteil.}`),
          step('Normlogik betonen.', String.raw`\text{Schon eine Verpflichtung kann rechtlich nachteilig sein, selbst wenn der Preis günstig wirkt.}`)
        ],
        'Das Gesetz fragt nicht nach wirtschaftlicher Cleverness, sondern nach rechtlicher Belastung. Deshalb kann auch ein vermeintlich guter Deal zustimmungsbedürftig sein.'
      )
    ]
  },

  stellvertretung: {
    motivation: 'Stellvertretung ist die Standardtechnik, mit der rechtliche Handlungen arbeitsteilig möglich werden. Im Wirtschaftsleben ist sie allgegenwärtig; in der Klausur verlangt sie einen klaren Dreischritt.',
    theorie: [
      section(
        'Die drei Voraussetzungen',
        `<p>Wirksame Stellvertretung verlangt eine eigene Willenserklärung des Vertreters, Handeln im fremden Namen und Vertretungsmacht. Diese drei Merkmale sind strikt nacheinander zu prüfen. Gerade die Offenkundigkeit wird in Fällen schnell übersehen.</p>
         ${scheme(String.raw`\text{eigene WE} + \text{fremder Name} + \text{Vertretungsmacht}`)}
      `
      ),
      section(
        'Vertretungsmacht und ihre Quellen',
        `<p>Vertretungsmacht kann rechtsgeschäftlich, gesetzlich oder organschaftlich begründet sein. Fehlt sie, ist das Geschäft grundsätzlich schwebend unwirksam und hängt von der Genehmigung des Vertretenen ab.</p>`
      ),
      section(
        'Vertreter, Bote, Identitätstäuschung',
        `<p>Der Vertreter gibt eine eigene Willenserklärung ab, der Bote übermittelt nur eine fremde. Handeln unter fremdem Namen ist wiederum keine Stellvertretung, sondern ein Problem des Identitätsschutzes. Diese Unterscheidungen sind klausurtypisch.</p>
         ${warn('Vertreter-Boten-Falle:', 'Wer keine eigene Entscheidungsmacht hat, ist Bote und nicht Vertreter. Dann wird die fremde und nicht die eigene Erklärung zugerechnet.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Stellvertretung', eq: String.raw`\text{§ 164 Abs. 1 BGB}`, desc: 'Handeln in fremdem Namen mit Vertretungsmacht.' },
      { label: 'Ohne Vertretungsmacht', eq: String.raw`\text{§ 177 BGB}`, desc: 'Geschäft schwebend unwirksam bis zur Genehmigung.' }
    ],
    aufgaben: [
      task(
        'Mitarbeiter M schließt im Namen der GmbH einen Kaufvertrag über Büromaterial. Welche Frage muss zuerst geklärt werden, bevor du über Ansprüche sprichst?',
        [
          step('Die Zurechnungsebene prüfen.', String.raw`\text{Hat M wirksam als Vertreter der GmbH gehandelt?}`),
          step('Dazu die drei Voraussetzungen durchgehen.', String.raw`\text{Eigene WE, fremder Name, Vertretungsmacht.}`)
        ],
        'Bevor Ansprüche geprüft werden, muss geklärt sein, ob die Erklärung der GmbH zugerechnet wird oder M selbst Vertragspartner wurde.'
      ),
      task(
        'Warum ist die Offenkundigkeit für den Geschäftspartner so wichtig?',
        [
          step('Schutzfunktion benennen.', String.raw`\text{Der Vertragspartner muss wissen, mit wem er rechtlich kontrahiert.}`),
          step('Rechtsfolge erläutern.', String.raw`\text{Fehlt Offenkundigkeit, wird regelmäßig der Handelnde selbst verpflichtet.}`)
        ],
        'Offenkundigkeit schützt vor verdeckter Risikoverschiebung. Der Dritte soll erkennen können, wem die Erklärung zugerechnet werden soll.'
      )
    ]
  },

  agb: {
    motivation: 'AGB-Recht ist Massenvertragsrecht. Es verbindet Vertragstechnik mit Schutzgedanken und ist deshalb ein idealer Prüfungsstoff für saubere Einbeziehungs- und Kontrolllogik.',
    theorie: [
      section(
        'Einbeziehung',
        `<p>AGB gelten nicht automatisch. Sie müssen wirksam in den Vertrag einbezogen werden. Dazu gehören Hinweis, zumutbare Kenntnisnahmemöglichkeit und Einverständnis des Vertragspartners. Fehlt eines davon, scheitert bereits die Einbeziehung.</p>`
      ),
      section(
        'Inhaltskontrolle',
        `<p>Nach wirksamer Einbeziehung folgt die inhaltliche Kontrolle. Im Zentrum stehen unangemessene Benachteiligung, überraschende Klauseln und Transparenz. Viele Klausurprobleme hängen daran, ob eine Klausel den typischen Vertragspartner einseitig übermäßig belastet.</p>`
      ),
      section(
        'AGB-Fälle lesen',
        `<p>In AGB-Fällen darfst du nicht sofort „unwirksam“ rufen. Die Prüfungsreihenfolge lautet: AGB-Qualität, Einbeziehung, Vorrang individueller Abreden, überraschende Klausel, Inhaltskontrolle.</p>
         ${warn('Prüfungsreihenfolge:', 'Wer sofort in die Inhaltskontrolle springt, ohne die Einbeziehung zu prüfen, verschenkt einen der wichtigsten Klausurpunkte.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Einbeziehung', eq: String.raw`\text{Hinweis} + \text{Kenntnisnahme} + \text{Einverständnis}`, desc: 'Erst dann werden AGB Vertragsbestandteil.' },
      { label: 'Kontrolle', eq: String.raw`\text{§§ 305 ff. BGB}`, desc: 'Systematik von Einbeziehung bis Inhaltskontrolle.' }
    ],
    aufgaben: [
      task(
        'Warum ist eine sehr strenge Klausel noch nicht automatisch unwirksam, solange ihre Einbeziehung gar nicht feststeht?',
        [
          step('Prüfungsstufe bestimmen.', String.raw`\text{Ohne Einbeziehung gehört die Klausel noch nicht zum Vertrag.}`),
          step('Erst danach Kontrollstufe öffnen.', String.raw`\text{Inhaltskontrolle setzt wirksame Einbeziehung voraus.}`)
        ],
        'Die Kontrolle einer Klausel setzt voraus, dass sie überhaupt Vertragsbestandteil geworden ist. Deshalb steht die Einbeziehung logisch an erster Stelle.'
      ),
      task(
        'Ein Verkäufer druckt AGB nur in winziger Schrift auf die Rückseite, ohne darauf hinzuweisen. Wo setzt deine Prüfung an?',
        [
          step('Nicht direkt bei der unangemessenen Benachteiligung starten.', String.raw`\text{Zuerst Einbeziehung prüfen.}`),
          step('Hinweis- und Kenntnisnahmemöglichkeit benennen.', String.raw`\text{Ohne klaren Hinweis und zumutbare Kenntnis scheitert die Einbeziehung.}`)
        ],
        'Der Fall beginnt auf der Einbeziehungsebene. Fehlt diese, erledigt sich die spätere Inhaltskontrolle häufig bereits.'
      )
    ]
  },

  schuldrecht_intro: {
    motivation: 'Mit dem Schuldrecht AT verschiebt sich der Fokus von der Entstehung des Vertrags auf seine Durchführung: Wer schuldet was, wann und mit welchen Pflichten?',
    theorie: [
      section(
        'Schuldverhältnis und Leistungspflichten',
        `<p>Ein Schuldverhältnis ist die rechtliche Sonderbeziehung, aus der Leistungs- und Nebenpflichten folgen. Das Schuldrecht fragt damit nicht nur, ob ein Vertrag zustande kam, sondern wie er zu erfüllen ist und welche Folgen Pflichtverletzungen auslösen.</p>`
      ),
      section(
        'Primär- und Nebenpflichten',
        `<p>Primärpflichten betreffen die eigentliche Leistung, Nebenpflichten schützen Integritäts- und Vermögensinteressen. Gerade moderne Schadensersatzfälle hängen oft an Nebenpflichtverletzungen und nicht an der Hauptleistung.</p>`
      ),
      section(
        'Warum dieser Einstieg wichtig ist',
        `<p>Viele Klausuren scheitern daran, dass Pflichtverletzung, Verzug, Unmöglichkeit und Rücktritt ohne sauberes Grundverständnis zusammengeworfen werden. Der Schuldrecht-Einstieg ordnet diese Institute als Reaktionsformen auf Störungen eines bestehenden Schuldverhältnisses.</p>
         ${warn('Grundlagenfehler:', 'Schadensersatz setzt nicht „irgendwo einen Fehler“ voraus, sondern eine dem Schuldverhältnis zuordenbare Pflichtverletzung.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Schuldverhältnis', eq: String.raw`\text{Leistungspflichten} + \text{Nebenpflichten}`, desc: 'Beide Ebenen können verletzt werden.' },
      { label: 'Pflichtverletzung', eq: String.raw`\text{Abweichung von der geschuldeten Leistung oder Rücksichtnahme}`, desc: 'Ausgangspunkt vieler Ansprüche im Schuldrecht AT.' }
    ],
    aufgaben: [
      task(
        'Warum genügt in einer Schadensersatzklausur nicht der Satz „Der Schuldner hat sich falsch verhalten“?',
        [
          step('Verhaltensvorwurf präzisieren.', String.raw`\text{Es muss eine konkrete Pflicht aus einem Schuldverhältnis verletzt sein.}`),
          step('Anspruchslogik ergänzen.', String.raw`\text{Erst dann lässt sich prüfen, welche Rechtsfolge daran anknüpft.}`)
        ],
        'Schuldrechtlicher Schadensersatz setzt eine konkrete Pflichtverletzung voraus. Reines Missfallen oder schlechtes Benehmen reicht nicht.'
      ),
      task(
        'Welche Funktion haben Nebenpflichten neben der eigentlichen Leistungspflicht?',
        [
          step('Schutzdimension benennen.', String.raw`\text{Sie schützen Person, Eigentum und sonstige Interessen des Vertragspartners.}`),
          step('Klausurfolge ableiten.', String.raw`\text{Auch ohne Leistungsstörung können daraus Schadensersatzansprüche entstehen.}`)
        ],
        'Nebenpflichten sichern das Schuldverhältnis ab. Gerade dadurch wird vertragliche Haftung weiter als bloße Nichterfüllung der Hauptleistung.'
      )
    ]
  },

  schadensersatz: {
    motivation: 'Schadensersatz ist die Kernreaktion auf Pflichtverletzungen. Die Kunst liegt darin, die Anspruchsgrundlage und ihre Voraussetzungen sauber in Reihenfolge zu prüfen.',
    theorie: [
      section(
        'Grundschema',
        `<p>Das Grundschema des vertraglichen Schadensersatzes lautet: Schuldverhältnis, Pflichtverletzung, Vertretenmüssen, Schaden. Je nach Konstellation kommen zusätzliche Anforderungen wie Fristsetzung hinzu.</p>
         ${scheme(String.raw`\text{Schuldverhältnis} + \text{Pflichtverletzung} + \text{Vertretenmüssen} + \text{Schaden}`)}
      `
      ),
      section(
        'Neben der Leistung vs. statt der Leistung',
        `<p>Verzögerungsschäden und Integritätsschäden können Schadensersatz neben der Leistung auslösen. Schadensersatz statt der Leistung verlangt regelmäßig eine erfolglose Fristsetzung, weil dem Schuldner noch eine zweite Chance zur ordnungsgemäßen Leistung gegeben werden soll.</p>`
      ),
      section(
        'Vertretenmüssen und Fristsetzung',
        `<p>Das Vertretenmüssen wird grundsätzlich vermutet. Die Fristsetzung ist einer der häufigsten Klausurpunkte: Sie darf nicht vergessen werden und ist nur ausnahmsweise entbehrlich. Genau hier entscheidet sich, ob eine Lösung belastbar wirkt.</p>
         ${warn('Klausurklassiker:', 'Bei Schadensersatz statt der Leistung wird die Fristsetzung besonders oft übersehen. Ohne sie bricht die Prüfung schnell weg.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Schadensersatz neben der Leistung', eq: String.raw`\text{§ 280 I BGB}`, desc: 'Pflichtverletzung genügt, wenn keine Ersatzleistung an die Stelle der Hauptleistung tritt.' },
      { label: 'Schadensersatz statt der Leistung', eq: String.raw`\text{§§ 280 I, III, 281 BGB}`, desc: 'Regelmäßig mit erfolgloser Fristsetzung.' }
    ],
    aufgaben: [
      task(
        'Warum ist die Fristsetzung bei Schadensersatz statt der Leistung so wichtig?',
        [
          step('Zweite-Andienungs-Funktion benennen.', String.raw`\text{Der Schuldner soll noch ordnungsgemäß leisten können.}`),
          step('Abgrenzung zur bloßen Verzögerung ziehen.', String.raw`\text{Erst wenn diese Chance scheitert, tritt Ersatz an die Stelle der Leistung.}`)
        ],
        'Die Fristsetzung entscheidet, ob der Gläubiger die Leistung endgültig „umstellt“ und stattdessen Ersatz verlangen darf.'
      ),
      task(
        'Ein Verkäufer liefert mangelhaft, der Käufer setzt aber nie eine Nachfrist. Wo liegt der methodische Schwachpunkt?',
        [
          step('Anspruchsebene benennen.', String.raw`\text{Bei Schadensersatz statt der Leistung fehlt regelmäßig eine Voraussetzung.}`),
          step('Rechtsfolge erklären.', String.raw`\text{Ohne Fristsetzung scheitert der Anspruch meist, sofern keine Entbehrlichkeit vorliegt.}`)
        ],
        'Der Fall zeigt den Standardfehler im Schuldrecht AT: Die Pflichtverletzung wird erkannt, aber die Fristsetzungslogik fehlt.'
      )
    ]
  },

  ruecktritt_widerruf: {
    motivation: 'Rücktritt und Verbraucherwiderruf wirken beide auf einen Vertrag zurück, beruhen aber auf ganz unterschiedlichen Gründen und Prüfungsvoraussetzungen.',
    theorie: [
      section(
        'Rücktritt',
        `<p>Der Rücktritt ist ein Lösungsrecht wegen Leistungsstörung. Er setzt regelmäßig einen wirksamen Vertrag, eine Pflichtverletzung und häufig eine erfolglose Fristsetzung voraus. Seine Rechtsfolge ist die Rückabwicklung über das Rückgewährschuldverhältnis.</p>`
      ),
      section(
        'Verbraucherwiderruf',
        `<p>Der Verbraucherwiderruf ist kein Sanktionsinstrument wegen Pflichtverletzung, sondern ein gesetzlich gewährtes Schutzrecht in bestimmten Situationen, etwa Fernabsatz oder Haustürgeschäften. Er knüpft also an Schutzbedürftigkeit und nicht an Vertragsstörung an.</p>`
      ),
      section(
        'Saubere Abgrenzung',
        `<p>In Prüfungen musst du sauber trennen: Rücktritt = Reaktion auf Leistungsstörung. Widerruf = besondere Verbraucherschutzlage. Wer beides bloß als „Rückgängigmachung“ behandelt, verfehlt den Normzweck.</p>
         ${warn('Abgrenzungsfehler:', 'Widerruf braucht keine Pflichtverletzung. Rücktritt braucht regelmäßig gerade eine Störung im Schuldverhältnis.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Rücktritt', eq: String.raw`\text{§§ 323 ff. BGB}`, desc: 'Lösungsrecht wegen Leistungsstörung.' },
      { label: 'Widerruf', eq: String.raw`\text{Verbraucherschutzrecht mit Fristbindung}`, desc: 'Eigenständiges gesetzliches Gestaltungsrecht.' }
    ],
    aufgaben: [
      task(
        'Warum darfst du Verbraucherwiderruf und Rücktritt nicht einfach unter „Vertrag wird rückgängig gemacht“ zusammenfassen?',
        [
          step('Normzwecke trennen.', String.raw`\text{Rücktritt reagiert auf Störung, Widerruf schützt den Verbraucher in bestimmten Situationen.}`),
          step('Prüfungsfolgen nennen.', String.raw`\text{Die Voraussetzungen und damit auch die Aufbaufragen unterscheiden sich.}`)
        ],
        'Beide Institute führen zwar zur Rückabwicklung, beruhen aber auf völlig unterschiedlichen Anknüpfungspunkten. Genau diese Unterscheidung ist klausurwichtig.'
      ),
      task(
        'Ein Online-Kauf funktioniert technisch einwandfrei, der Verbraucher möchte sich aber umentscheiden. Welcher Prüfungsweg liegt näher: Rücktritt oder Widerruf?',
        [
          step('Nach einer Leistungsstörung fragen.', String.raw`\text{Liegt keine Störung vor, ist Rücktritt nicht der natürliche Startpunkt.}`),
          step('Verbraucherschutzlage erkennen.', String.raw`\text{Beim Fernabsatz kommt vielmehr der Widerruf in Betracht.}`)
        ],
        'Ohne Leistungsstörung spricht der Fall eher für einen Verbraucherwiderruf als für einen Rücktritt.'
      )
    ]
  }
};

