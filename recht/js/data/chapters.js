const section = (title, body) => `
  <div class="section-block">
    <h3>${title}</h3>
    ${body}
  </div>
`;

const warn = (title, body) => `<div class="warn-box"><strong>${title}</strong> ${body}</div>`;

const scheme = (text) => {
  const html = text
    .replace(/\\text\{([^}]*)\}/g, '<span class="schema-term">$1</span>')
    .replace(/\\rightarrow/g, '<span class="schema-arrow">\u2192</span>')
    .replace(/\\Rightarrow/g, '<span class="schema-arrow">\u21D2</span>')
    .replace(/\\leftarrow/g, '<span class="schema-arrow">\u2190</span>')
    .replace(/\s*\+\s*/g, ' <span class="schema-op">+</span> ')
    .trim();
  return `<div class="legal-schema">${html}</div>`;
};

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
  { id: 'dissens', title: 'Dissens', cat: 'Vertrag', short: 'Dissens' },
  { id: 'anfechtung', title: 'Anfechtung', cat: 'Vertrag', short: 'Anfechtung' },
  { id: 'trennung_abstraktion', title: 'Trennungs- und Abstraktionsprinzip', cat: 'Vertrag', short: 'Abstraktion' },
  { id: 'geschaeftsfaehigkeit', title: 'Rechts- und Geschäftsfähigkeit', cat: 'Personen & Zurechnung', short: 'Fähigkeit' },
  { id: 'stellvertretung', title: 'Stellvertretung', cat: 'Personen & Zurechnung', short: 'Vertretung' },
  { id: 'agb', title: 'AGB-Recht', cat: 'Personen & Zurechnung', short: 'AGB' },
  { id: 'schuldrecht_intro', title: 'Schuldrecht AT: Grundlagen', cat: 'Schuldrecht AT', short: 'Schuldrecht' },
  { id: 'schadensersatz', title: 'Schuldrecht AT: Schadensersatz', cat: 'Schuldrecht AT', short: 'SE' },
  { id: 'ruecktritt', title: 'Rücktritt', cat: 'Schuldrecht AT', short: 'Rücktritt' },
  { id: 'verbraucherwiderruf', title: 'Verbraucherwiderruf', cat: 'Schuldrecht AT', short: 'Widerruf' }
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
    motivation: 'Juristische Methodik ist das eigentliche Werkzeugfach des Moduls: Ohne Anspruchsaufbau, Definition, Subsumtion, Zwischenergebnisse und saubere Gliederung werden auch bekannte Normen in der Klausur wertlos.',
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
        'Anspruch entstanden, untergegangen, durchsetzbar',
        `<p>Die Übungen arbeiten zusätzlich mit einer zweiten Ordnungsebene: Zuerst prüfst du, ob ein Anspruch entstanden ist. Danach fragst du, ob er untergegangen ist. Erst am Ende prüfst du, ob er durchsetzbar bleibt. Diese Kette verhindert, dass Einwendungen, Gestaltungsrechte und Einreden ungeordnet vermischt werden.</p>
         ${scheme(String.raw`\text{Anspruch entstanden} \rightarrow \text{untergegangen} \rightarrow \text{durchsetzbar}`)}
      `
      ),
      section(
        'Subsumtion als Kernleistung',
        `<p>Die Subsumtion ist mehr als ein Wortersatz für „anwenden“: Du musst zeigen, <em>warum</em> konkrete Tatsachen ein Tatbestandsmerkmal erfüllen oder nicht erfüllen. Genau hier trennt sich reine Definitionenkenntnis von juristischem Arbeiten.</p>
         ${warn('Methodikfehler:', 'Definitionen ohne anschließende Subsumtion sind fast wertlos. Die Klausur bewertet nicht bloßes Wissen, sondern die Anwendung auf den Sachverhalt.')}`
      ),
      section(
        'Gliederungsebenen und Ergebniskontrolle',
        `<p>Die Fallskripte und Methodikblätter zeigen, dass gute Klausuren nicht nur materiell richtig, sondern auch formal steuerbar sein müssen: Obersätze gehören auf die richtige Ebene, Zwischenergebnisse leiten zum nächsten Prüfungsabschnitt über, und Rechtsfolgen dürfen nie vor den Tatbestandsvoraussetzungen stehen. Gerade Mehranspruchsfälle leben von dieser Disziplin.</p>
         ${warn('Strukturverlust:', 'Viele Bearbeitungen springen direkt zu Rückgewähr, Schadenshöhe oder „am Ende wohl ja“. Ohne klare Gliederung geht die Anspruchslogik verloren.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Anspruchsfrage', eq: String.raw`\text{Wer will was von wem woraus?}`, desc: 'Erste und wichtigste Sortierfrage des Falles.' },
      { label: 'Gutachtenstil', eq: String.raw`\text{O} - \text{D} - \text{S} - \text{E}`, desc: 'Obersatz, Definition, Subsumtion, Ergebnis.' },
      { label: 'Anspruchskette', eq: String.raw`\text{entstanden} \rightarrow \text{untergegangen} \rightarrow \text{durchsetzbar}`, desc: 'Saubere Ordnung für Einwendungen, Einreden und Gestaltungsrechte.' },
      { label: 'Tatbestand vor Rechtsfolge', eq: String.raw`\text{erst Voraussetzungen, dann Folgen}`, desc: 'Rückgewähr, Schadenshöhe und Konkurrenzfragen kommen erst nach tragfähigem Tatbestand.' }
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
      ),
      task(
        'Mini-Case (Gutachtenstil): K verlangt von V Rückzahlung des Kaufpreises, weil die gelieferte Sache mangelhaft ist. Wie baust du eine strukturfeste Erstprüfung auf, bevor du Details diskutierst?',
        [
          step('Issue: Anspruchsfrage präzisieren.', String.raw`\text{Wer will was von wem woraus?}`),
          step('Rule: Naheliegende Anspruchsgrundlage benennen und Tatbestandsmerkmale gliedern.'),
          step('Subsumption: Jeden relevanten Sachverhaltsbaustein einem Merkmal zuordnen.'),
          step('Result: Zwischenergebnis klar formulieren und erst dann zur nächsten Anspruchsstufe übergehen.')
        ],
        'Struktur vor Detail: Eine saubere IRSR-Kette (Issue/Rule/Subsumption/Result) verhindert methodische Sprünge und macht die Lösung klausurfest.'
      ),
      task(
        'Chain-Mini-Case (Anspruchsaufbau): K will von V primär Lieferung, hilfsweise Rücktritt und zusätzlich Schadensersatz. Wie vermeidest du im Gutachtenstil das Vermischen von Tatbestand, Rechtsfolge und Konkurrenz der Anspruchsziele?',
        [
          step('Issue: Primäres Anspruchsziel und Hilfsziele getrennt formulieren.'),
          step('Rule: Für jedes Ziel eigene Anspruchsgrundlage und Tatbestandsmerkmale aufbauen.'),
          step('Subsumption: Merkmale je Schiene vollständig prüfen; keine Rechtsfolge vorziehen.'),
          step('Result: Zwischenergebnisse pro Anspruchsebene notieren und erst am Ende Konkurrenz/Alternativen ordnen.')
        ],
        'Klausurdisziplin heißt Kettenführung: Jeder Anspruch wird vollständig geprüft, bevor zur nächsten Rechtsfolgeebene gewechselt wird.'
      ),
      task(
        'Prüfungsreihenfolge-Fall: K verlangt nach einem mangelhaften Kauf Nacherfüllung, Rücktritt und Schadensersatz. Welche methodische Reihenfolge macht die Lösung belastbar?',
        [
          step('Zuerst die Anspruchsziele und ihre Anspruchsgrundlagen trennen.'),
          step('Dann pro Anspruch die Tatbestandsmerkmale vollständig prüfen.'),
          step('Rückgewähr, Schadenshöhe und Konkurrenzfragen erst nach den Zwischenergebnissen behandeln.'),
          step('Die Kette ausdrücklich dokumentieren: entstanden, untergegangen, durchsetzbar.')
        ],
        'Die starke Klausurlösung steuert den Fall über getrennte Anspruchsschienen und nicht über spontane Ergebnisbehauptungen.'
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

  dissens: {
    motivation: 'Dissens ist kein nachträglicher Fehlerheilungsmechanismus, sondern die Frage, ob es überhaupt zu einer wirksamen Einigung gekommen ist. Genau daran scheitern Vertragsklausuren oft schon auf der ersten Stufe.',
    theorie: [
      section(
        'Konsens nach objektivem Empfängerhorizont',
        `<p>Ob Angebot und Annahme korrespondieren, bestimmst du nicht nach geheimen Vorstellungen, sondern nach der objektiven Auslegung empfangsbedürftiger Willenserklärungen gem. §§ 133, 157 BGB. Stimmen die Erklärungen danach überein, liegt grundsätzlich Konsens vor, auch wenn eine Partei innerlich etwas anderes wollte.</p>`
      ),
      section(
        'Totaldissens und offener Dissens',
        `<p>Fehlt die Einigung schon bei den <em>essentialia negotii</em>, kommt von vornherein kein Vertrag zustande. Beim offenen Dissens (§ 154 BGB) wissen die Parteien, dass noch ein Punkt offen ist; dann gilt im Zweifel: kein Vertrag. Der typische Klausurzugriff ist deshalb: erst Konsensfrage, dann erst überhaupt an Rechtsfolgen denken.</p>
         ${scheme(String.raw`\text{kein Konsens über essentialia} \Rightarrow \text{kein Vertrag}`)}
      `
      ),
      section(
        'Versteckter Dissens und seine Seltenheit',
        `<p>Beim versteckten Dissens (§ 155 BGB) glauben die Parteien an Einigkeit, obwohl sie objektiv aneinander vorbeireden. In der Vorlesung wird aber ausdrücklich betont, dass dieser Fall in Klausuren seltener ist, als viele denken: Häufig lässt sich über die objektive Auslegung doch eine Bedeutung feststellen, und dann liegt eher ein einseitiger Irrtum als echter Dissens vor.</p>
         ${warn('Prüfungsfalle:', 'Nicht jeder innere Unterschied ist Dissens. Wenn die Erklärungen objektiv deckungsgleich sind, musst du aus dem Dissenspfad heraus und in die Anfechtungsebene wechseln.')}`
      ),
      section(
        'Falsa demonstratio non nocet',
        `<p>Ein Sonderfall ist die falsa demonstratio: Beide Parteien wollen objektiv dasselbe, benutzen aber übereinstimmend die falsche Bezeichnung. Dann schadet die falsche Benennung nicht. Genau dieser Sonderfall zeigt, dass im Dissensrecht die gemeinsame Bedeutung und der Verkehrsschutz sauber gegeneinander abgewogen werden müssen.</p>`
      )
    ].join(''),
    formeln: [
      { label: 'Konsensfrage', eq: String.raw`\text{Angebot} \leftrightarrow \text{Annahme}`, desc: 'Zuerst prüfen, ob die Erklärungen objektiv korrespondieren.' },
      { label: 'Offener Dissens', eq: String.raw`\text{§ 154 BGB} \Rightarrow \text{im Zweifel kein Vertrag}`, desc: 'Bewusst offengelassener Punkt blockiert den Vertragsschluss regelmäßig.' },
      { label: 'Versteckter Dissens', eq: String.raw`\text{§ 155 BGB}`, desc: 'Nur bei wirklichem Nichtübereinstimmen und fortbestehendem Vertragswillen relevant.' },
      { label: 'Falsa demonstratio', eq: String.raw`\text{falsa demonstratio non nocet}`, desc: 'Gemeinsam gewollter Inhalt bleibt trotz falscher Bezeichnung maßgeblich.' }
    ],
    aufgaben: [
      task(
        'A und B wollen ein Fahrrad für 500 EUR verkaufen bzw. kaufen, können sich aber über Ratenzahlung und Übergabezeitpunkt noch nicht einigen. Welcher Dissens-Typ liegt nahe und was folgt?',
        [
          step('Zuerst fragen, ob den Parteien die fehlende Einigung bewusst ist.'),
          step('Hier liegt typischerweise offener Dissens vor.', String.raw`\text{§ 154 BGB}`),
          step('Im Zweifel folgt daraus: noch kein Vertragsschluss.')
        ],
        'Wenn ein offener Einigungsmangel bewusst fortbesteht, steht die Konsensfrage im Vordergrund und der Vertrag kommt im Zweifel nicht zustande.'
      ),
      task(
        'A und B einigen sich auf Übergabe bei „Kommilitonin C“, meinen aber unterschiedliche C-Personen. Warum ist das kein Standardfall für Anfechtung?',
        [
          step('Zuerst objektive Auslegung und Nebenpunktcharakter prüfen.'),
          step('Wenn nur ein Nebenpunkt betroffen ist, kommt § 155 BGB in Betracht.'),
          step('Erst wenn objektiv Konsens feststeht und nur ein innerer Irrtum vorliegt, wechselt die Prüfung zur Anfechtung.')
        ],
        'Der Fall ist zunächst eine Konsensfrage. Anfechtung setzt dagegen einen objektiv zunächst zustande gekommenen Vertrag voraus.'
      ),
      task(
        'Haakjöringsköd-Fall in Kurzform: Beide Parteien benutzen dieselbe falsche Bezeichnung, meinen aber übereinstimmend Walfleisch. Warum schadet das falsche Wort nicht automatisch?',
        [
          step('Die objektive Verkehrsauffassung zwar notieren, aber den gemeinsam gewollten Inhalt mitprüfen.'),
          step('Gerade bei übereinstimmendem Fehlgebrauch greift die falsa-demonstratio-Logik.'),
          step('Ergebnis: Maßgeblich bleibt der von beiden subjektiv gewollte Vertragsinhalt.')
        ],
        'Die falsa demonstratio zeigt, dass eine falsche Benennung den Vertrag nicht sprengt, wenn beide Seiten denselben Inhalt wollten.'
      ),
      task(
        'Methodik-Drill: A schreibt „5 EUR“, meint aber „15 EUR“. B nimmt „5 EUR“ an. Welche Reihenfolge schützt dich vor dem Standardfehler „Dissens vorschnell bejahen“?',
        [
          step('Erst Angebot und Annahme nach objektivem Empfängerhorizont auslegen.'),
          step('Bei objektiver Deckungsgleichheit den Vertragsschluss bejahen.'),
          step('Erst danach prüfen, ob ein Irrtum eine Anfechtung eröffnet.')
        ],
        'Dissens ist die Konsensfrage. Sobald objektiver Konsens steht, ist die richtige Korrekturebene die Anfechtung.'
      )
    ]
  },

  anfechtung: {
    motivation: 'Die Anfechtung korrigiert keinen fehlenden Konsens, sondern einen zunächst wirksamen Vertrag oder eine zunächst wirksame Erklärung. Genau diese zeitliche und methodische Trennung macht sie klausurprägend.',
    theorie: [
      section(
        'Warum es die Anfechtung braucht',
        `<p>Wer eine Willenserklärung abgibt, ist daran grundsätzlich gebunden. Das Gesetz löst den Konflikt zwischen Privatautonomie und Verkehrsschutz über die Anfechtung: Nur bestimmte, gesetzlich geregelte Fehler berechtigen dazu, die Erklärung nachträglich zu beseitigen. Ohne Anfechtungsgrund bleibt der Erklärende gebunden.</p>`
      ),
      section(
        'Anfechtungsgründe und Kausalität',
        `<p>Die Vorlesung nennt als Kernfälle Inhaltsirrtum, Erklärungsirrtum, Eigenschaftsirrtum sowie Täuschung und Drohung. Der Anfechtungsgrund muss für die Erklärung kausal gewesen sein: Ohne den Fehler wäre die Erklärung nicht oder nicht mit diesem Inhalt abgegeben worden.</p>
         ${scheme(String.raw`\text{Anfechtungsgrund} + \text{Kausalität}`)}
      `
      ),
      section(
        'Anfechtungserklärung und Frist',
        `<p>Die Anfechtung ist ein Gestaltungsrecht. Deshalb braucht es eine Anfechtungserklärung gegenüber dem richtigen Gegner und die Einhaltung der gesetzlichen Frist. Bei Irrtumsanfechtung gilt § 121 BGB („unverzüglich“), bei Täuschung oder Drohung § 124 BGB. Wer nur den Irrtum sieht, aber Erklärung und Frist weglässt, bleibt klausurisch unvollständig.</p>
         ${scheme(String.raw`\text{Anfechtungsgrund} + \text{Erklärung} + \text{Frist}`)}
      `
      ),
      section(
        'Rechtsfolgen und § 122 BGB',
        `<p>Die erfolgreiche Anfechtung vernichtet das Geschäft ex tunc. Gleichzeitig kann in den Irrtumsfällen ein Anspruch auf Vertrauensschaden nach § 122 BGB entstehen. Klausurtechnisch wichtig ist die Trennung: Erst Anfechtungstatbestand, dann Rechtsfolge, dann erst der separate § 122-Pfad.</p>
         ${warn('Anfechtungsfalle:', 'Nicht jeder Fehlkalkulations- oder Motivirrtum trägt eine Anfechtung. Und § 122 BGB wird nicht in den Tatbestand der Anfechtung hineingemischt, sondern danach eigenständig geprüft.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Anfechtungsgründe', eq: String.raw`\text{§ 119 BGB / § 123 BGB}`, desc: 'Irrtums-, Täuschungs- und Drohungsfälle nur innerhalb des gesetzlichen Katalogs.' },
      { label: 'Vollständige Prüfung', eq: String.raw`\text{Grund} + \text{Erklärung} + \text{Frist}`, desc: 'Der Irrtum allein reicht nie für eine vollständige Lösung.' },
      { label: 'Rechtsfolge', eq: String.raw`\text{ex tunc nichtig}`, desc: 'Das Geschäft wird rückwirkend beseitigt.' },
      { label: 'Vertrauensschaden', eq: String.raw`\text{§ 122 BGB}`, desc: 'Eigener Folgeanspruch nach wirksamer Irrtumsanfechtung.' }
    ],
    aufgaben: [
      task(
        'A will 100 Flaschen verkaufen, verschreibt sich aber und bietet 1000 an. B nimmt sofort an. Welcher Prüfungsweg ist naheliegend?',
        [
          step('Zunächst Vertragsschluss nach objektiver Erklärungslage bejahen.'),
          step('Dann den Erklärungsirrtum als Anfechtungsgrund prüfen.', String.raw`\text{§ 119 Abs. 1 Alt. 2 BGB}`),
          step('Anfechtungserklärung, Frist und Rechtsfolge sauber ergänzen.')
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
      ),
      task(
        'Warum ist der Satz „Ich habe mich verkalkuliert, also fechte ich an“ oft zu schnell?',
        [
          step('Zuerst den konkreten Irrtumstyp bestimmen.'),
          step('Bloße Motiv- oder Kalkulationsirrtümer nicht vorschnell mit Erklärungs- oder Inhaltsirrtum verwechseln.'),
          step('Nur gesetzlich anerkannte Anfechtungsgründe tragen die Rückabwicklung über §§ 119 ff. BGB.')
        ],
        'Die Anfechtung ist kein allgemeines Korrekturrecht für unkluge Entscheidungen. Sie greift nur bei den gesetzlich geregelten Fehlerarten.'
      ),
      task(
        'Subsumtions-Mini-Case: E verkauft ein Buch für 700 EUR, irrt sich über dessen Eigenschaft als Erstauflage und ficht später an. Welche mehrstufige Prüfung trennt Anspruch aus Vertrag und § 122 BGB sauber?',
        [
          step('Zuerst den vertraglichen Primäranspruch aufbauen.'),
          step('Dann prüfen, ob der Anspruch wegen wirksamer Anfechtung untergeht.'),
          step('Erst danach § 122 BGB als eigene Anspruchsschiene eröffnen und den Vertrauensschaden subsumieren.'),
          step('Die Begrenzung des Ersatzes sauber auf der Rechtsfolgenseite behandeln.')
        ],
        'Tatbestandsklarheit ist der Schlüssel: Vertragsebene, Anfechtungsebene und § 122-Folge dürfen nicht in einem Mischschritt aufgehen.'
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
        `<p>Vertretungsmacht kann rechtsgeschäftlich, gesetzlich oder organschaftlich begründet sein. Fehlt sie, ist das Geschäft grundsätzlich schwebend unwirksam und hängt von der Genehmigung des Vertretenen ab. Die Vorlesung macht zudem deutlich, dass interne Weisungen und Außenvollmacht nicht vorschnell gleichgesetzt werden dürfen: Interne Grenzen schlagen nicht automatisch ins Außenverhältnis durch.</p>`
      ),
      section(
        'Vertreter, Bote, Identitätstäuschung',
        `<p>Der Vertreter gibt eine eigene Willenserklärung ab, der Bote übermittelt nur eine fremde. Handeln unter fremdem Namen ist wiederum keine Stellvertretung, sondern ein Problem des Identitätsschutzes. Diese Unterscheidungen sind klausurtypisch.</p>
         ${warn('Vertreter-Boten-Falle:', 'Wer keine eigene Entscheidungsmacht hat, ist Bote und nicht Vertreter. Dann wird die fremde und nicht die eigene Erklärung zugerechnet.')}`
      ),
      section(
        'Klausurfolge bei fehlender Vertretungsmacht',
        `<p>Die saubere Reihenfolge lautet: erst Offenkundigkeit, dann Vertretungsmacht, dann Genehmigung und erst danach gegebenenfalls § 179 BGB. Gerade diese Reihenfolge verhindert, dass Eigenbindung, schwebende Unwirksamkeit und Vertreterhaftung durcheinandergeraten.</p>
         ${warn('Folgenfehler:', '§ 179 BGB wird oft zu früh geprüft. Wenn schon keine Offenkundigkeit vorliegt, ist der Handelnde regelmäßig selbst Vertragspartner und nicht bloß falsus procurator.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Stellvertretung', eq: String.raw`\text{§ 164 Abs. 1 BGB}`, desc: 'Handeln in fremdem Namen mit Vertretungsmacht.' },
      { label: 'Vertretungsmacht', eq: String.raw`\text{rechtsgeschäftlich / gesetzlich / organschaftlich}`, desc: 'Quellen der Zurechnungsmacht müssen sauber getrennt werden.' },
      { label: 'Ohne Vertretungsmacht', eq: String.raw`\text{§ 177 BGB}`, desc: 'Geschäft schwebend unwirksam bis zur Genehmigung.' },
      { label: 'Haftung des falsus procurator', eq: String.raw`\text{§ 179 BGB}`, desc: 'Folgeebene erst nach Offenkundigkeit und ausbleibender Genehmigung prüfen.' }
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
      ),
      task(
        'Doctrinal Distinction Case: S übermittelt nur wörtlich die Nachricht des Chefs („Verkauf für 10.000 €“), ohne eigene Entscheidungsmacht. Warum ist das regelmäßig Boten- und nicht Vertreterkonstellation, und was folgt für die Prüfung?',
        [
          step('Issue: Eigene Willenserklärung oder reine Übermittlung?'),
          step('Rule: Vertreter gibt eigene Erklärung ab; Bote überbringt fremde Erklärung.'),
          step('Subsumption: Ohne Entscheidungsspielraum liegt typischerweise Botenstellung vor.'),
          step('Result: Zurechnung läuft über den Geschäftsherrn als Erklärenden; Vertretungsmachtsprüfung tritt zurück.')
        ],
        'Die Vertreter-Boten-Abgrenzung ist ein Kerntrap: Erst Erklärungstyp klären, dann erst Vertretungsmachtfragen.'
      ),
      task(
        'Mehrschrittfall Stellvertretung: A unterschreibt im Laden nur mit seinem Namen, erwähnt die GmbH nicht und hatte intern keine wirksame Vollmacht. Wie gehst du in der Klausurkette vor?',
        [
          step('Issue: Zuerst Offenkundigkeit nach objektivem Empfängerhorizont prüfen.'),
          step('Rule: Fehlt erkennbares Handeln in fremdem Namen, bindet der Vertrag regelmäßig den Handelnden selbst.'),
          step('Subsumption: Nur wenn Offenkundigkeit bejaht wird, Vertretungsmacht prüfen; bei Fehlen Genehmigung/§ 179 BGB als Folgeebene öffnen.'),
          step('Result: Vertragspartner und ggf. Haftungsadressat getrennt ausweisen (Tatbestandsebene vs. Rechtsfolgeebene).')
        ],
        'Stellvertretungsfälle werden robust, wenn Offenkundigkeit, Vertretungsmacht und § 179-Folge strikt nacheinander geprüft werden.'
      ),
      task(
        'Innen- und Außenverhältnis-Fall: M darf intern nur bis 5.000 EUR einkaufen, bestellt aber für 8.000 EUR. Warum darfst du interne Kompetenzgrenzen nicht vorschnell mit fehlender Vertretungsmacht gleichsetzen?',
        [
          step('Zuerst die äußere Vertretungsmacht aus Sicht des Dritten klären.'),
          step('Interne Weisungen getrennt als Innenverhältnis problematisieren.'),
          step('Nur bei erkennbarer Überschreitung oder fehlender äußerer Vollmacht den § 177/§ 179-Pfad sauber eröffnen.')
        ],
        'Die Klausurstärke liegt darin, Innen- und Außenverhältnis getrennt zu halten: Nicht jede interne Überschreitung zerstört automatisch die Außenwirkung.'
      )
    ]
  },

  agb: {
    motivation: 'AGB-Recht ist Massenvertragsrecht. Es verbindet Vertragstechnik mit Schutzgedanken und ist deshalb ein idealer Prüfungsstoff für saubere Einbeziehungs- und Kontrolllogik.',
    theorie: [
      section(
        'Was überhaupt AGB sind',
        `<p>AGB sind für eine Vielzahl von Verträgen vorformulierte Vertragsbedingungen, die eine Partei der anderen bei Vertragsschluss stellt. Schon diese Ausgangsfrage musst du sauber von der späteren Einbeziehung und Kontrolle trennen. Nicht jede unangenehme Vertragsklausel ist automatisch AGB im technischen Sinn.</p>`
      ),
      section(
        'Einbeziehung',
        `<p>AGB gelten nicht automatisch. Sie müssen wirksam in den Vertrag einbezogen werden. Dazu gehören Hinweis, zumutbare Kenntnisnahmemöglichkeit und Einverständnis des Vertragspartners. Fehlt eines davon, scheitert bereits die Einbeziehung.</p>`
      ),
      section(
        'Die Fünf-Stufen-Logik',
        `<p>Die Vorlesung arbeitet mit einer festen Prüfungsreihenfolge: Anwendungsbereich, Vorliegen von AGB, Einbeziehung, überraschende Klauseln bzw. Vorrang individueller Abreden und erst dann die Inhaltskontrolle. Diese Reihenfolge ist der eigentliche Punkteträger, weil AGB-Fälle sonst vorschnell in die Wertung rutschen.</p>
         ${scheme(String.raw`\text{Anwendungsbereich} \rightarrow \text{AGB} \rightarrow \text{Einbeziehung} \rightarrow \text{§ 305b / § 305c} \rightarrow \text{§§ 307-309}`)}
      `
      ),
      section(
        'Inhaltskontrolle und Abredenkonkurrenz',
        `<p>Nach wirksamer Einbeziehung folgt die Kontrolle auf unangemessene Benachteiligung, Überraschung und Transparenz. Zugleich darfst du nie vergessen, dass individuelle Abreden gem. § 305b BGB Vorrang haben. Viele Fälle lösen sich gerade dadurch, dass das mündlich Vereinbarte und das Kleingedruckte nicht deckungsgleich sind.</p>`
      ),
      section(
        'AGB-Fälle lesen',
        `<p>In AGB-Fällen darfst du nicht sofort „unwirksam“ rufen. Erst die saubere Prüfungsreihenfolge zeigt, ob die Klausel überhaupt Vertragsbestandteil wurde und auf welcher Stufe sie scheitert.</p>
         ${warn('Prüfungsreihenfolge:', 'Wer sofort in die Inhaltskontrolle springt, ohne die Einbeziehung zu prüfen, verschenkt einen der wichtigsten Klausurpunkte.')}`
      )
    ].join(''),
    formeln: [
      { label: 'AGB-Begriff', eq: String.raw`\text{vorformuliert} + \text{für Vielzahl} + \text{gestellt}`, desc: 'Vorliegen von AGB ist eine eigene erste Sachfrage.' },
      { label: 'Einbeziehung', eq: String.raw`\text{Hinweis} + \text{Kenntnisnahme} + \text{Einverständnis}`, desc: 'Erst dann werden AGB Vertragsbestandteil.' },
      { label: 'Vorrang Individualabrede', eq: String.raw`\text{§ 305b BGB}`, desc: 'Das konkret Vereinbarte verdrängt kollidierende AGB.' },
      { label: 'Überraschende Klausel', eq: String.raw`\text{§ 305c BGB}`, desc: 'Kann schon vor der eigentlichen Inhaltskontrolle ausscheiden.' },
      { label: 'Kontrolle', eq: String.raw`\text{§§ 307-309 BGB}`, desc: 'Inhaltskontrolle kommt erst nach Einbeziehung und Vorfragen.' }
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
      ),
      task(
        'Mündliche Abrede vs. Formulartext: Verkäufer und Kunde vereinbaren mündlich kostenlose Lieferung, das Formular sieht Versandkosten vor. Welche Weiche musst du vor jeder Inhaltskontrolle setzen?',
        [
          step('Zuerst die Konkurrenz von Individualabrede und AGB prüfen.', String.raw`\text{§ 305b BGB}`),
          step('Das individuell Vereinbarte hat Vorrang vor dem Formulartext.'),
          step('Erst wenn keine Individualabrede greift, wird die Klauselkontrolle relevant.')
        ],
        'AGB-Fälle werden oft schon auf der Ebene des Vorrangs individueller Abreden entschieden und nicht erst über § 307 BGB.'
      ),
      task(
        'Überraschungsklausel-Fall: Auf der Rückseite eines Kassenbons steht plötzlich ein weitgehender Haftungsausschluss. Warum ist „ist unfair“ nicht der beste erste Satz?',
        [
          step('Zuerst fragen, ob die Klausel überhaupt wirksam einbezogen wurde.'),
          step('Dann § 305c BGB als Überraschungsstufe prüfen.'),
          step('Erst danach, falls nötig, zur Inhaltskontrolle übergehen.')
        ],
        'Die starke Lösung ordnet die Klausel sauber ein: Einbeziehung und Überraschung kommen vor der abstrakten Fairnesswertung.'
      )
    ]
  },

  schuldrecht_intro: {
    motivation: 'Mit dem Schuldrecht AT verschiebt sich der Fokus von der Entstehung des Vertrags auf seine Durchführung: Wer schuldet was, wann und mit welchen Pflichten?',
    theorie: [
      section(
        'Schuldverhältnis und Anspruch',
        `<p>Ein Schuldverhältnis ist die rechtliche Sonderbeziehung, aus der Leistungs- und Nebenpflichten folgen. Ein Anspruch ist demgegenüber das konkrete Recht, von einem anderen ein Tun oder Unterlassen zu verlangen. Diese Unterscheidung ist klausurpraktisch wichtig, weil du aus einem Schuldverhältnis mehrere verschiedene Ansprüche entwickeln kannst.</p>`
      ),
      section(
        'Primär- und Nebenpflichten',
        `<p>Primärpflichten betreffen die eigentliche Leistung, Nebenpflichten schützen Integritäts- und Vermögensinteressen. Gerade moderne Schadensersatzfälle hängen oft an Nebenpflichtverletzungen und nicht an der Hauptleistung.</p>`
      ),
      section(
        'Anspruchsprüfung im Schuldrecht AT',
        `<p>Die Übungen übertragen die allgemeine Methodik in das Schuldrecht: Anspruch entstanden, Anspruch untergegangen, Anspruch durchsetzbar. Gerade im Leistungsstörungsrecht schützt diese Reihenfolge davor, Rücktritt, Schadensersatz und Rückgewährfolgen unkontrolliert zu vermischen.</p>
         ${scheme(String.raw`\text{Schuldverhältnis} \rightarrow \text{Pflicht} \rightarrow \text{Störung} \rightarrow \text{Rechtsfolge}`)}
      `
      ),
      section(
        'Warum dieser Einstieg wichtig ist',
        `<p>Viele Klausuren scheitern daran, dass Pflichtverletzung, Verzug, Unmöglichkeit und Rücktritt ohne sauberes Grundverständnis zusammengeworfen werden. Der Schuldrecht-Einstieg ordnet diese Institute als Reaktionsformen auf Störungen eines bestehenden Schuldverhältnisses.</p>
         ${warn('Grundlagenfehler:', 'Schadensersatz setzt nicht „irgendwo einen Fehler“ voraus, sondern eine dem Schuldverhältnis zuordenbare Pflichtverletzung.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Schuldverhältnis', eq: String.raw`\text{Leistungspflichten} + \text{Nebenpflichten}`, desc: 'Beide Ebenen können verletzt werden.' },
      { label: 'Anspruch', eq: String.raw`\text{Recht, ein Tun oder Unterlassen zu verlangen}`, desc: 'Ein Schuldverhältnis kann mehrere konkrete Ansprüche enthalten.' },
      { label: 'Pflichtverletzung', eq: String.raw`\text{Abweichung von Leistung oder Rücksichtnahme}`, desc: 'Ausgangspunkt vieler Ansprüche im Schuldrecht AT.' },
      { label: 'Prüfungskette', eq: String.raw`\text{entstanden} \rightarrow \text{untergegangen} \rightarrow \text{durchsetzbar}`, desc: 'Auch im Schuldrecht bleibt die Methodik leitend.' }
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
      ),
      task(
        'Warum ist „Zwischen K und V besteht ein Vertrag“ noch kein vollständiger schuldrechtlicher Einstieg, wenn später Schadensersatz oder Rücktritt geprüft werden sollen?',
        [
          step('Zwischen Schuldverhältnis und konkretem Anspruch unterscheiden.'),
          step('Die verletzte Pflicht benennen, nicht nur den Vertrag als Ganzes.'),
          step('Erst danach die passende Rechtsfolge im Leistungsstörungsrecht aufbauen.')
        ],
        'Der Vertrag ist nur die Ausgangsbasis. Klausurpunkte gibt es für die konkrete Zuordnung von Pflicht, Störung und Rechtsfolge.'
      ),
      task(
        'Mehranspruchs-Fall: K verlangt Lieferung, hilfsweise Rücktritt und außerdem Schadensersatz. Warum hilft der schuldrechtliche Grundlagenblock schon auf der ersten Seite der Klausur?',
        [
          step('Er zeigt, dass mehrere Reaktionsformen an dasselbe Schuldverhältnis anknüpfen können.'),
          step('Er zwingt zur Trennung von Primäranspruch, Gestaltungsrecht und Ersatzanspruch.'),
          step('Er verhindert, dass Rechtsfolgen ohne Pflichtverletzung oder Anspruchsgrundlage diskutiert werden.')
        ],
        'Die Grundlagen machen sichtbar, dass Leistungsstörungen unterschiedliche Rechtsfolgen auslösen können, die methodisch getrennt geprüft werden müssen.'
      )
    ]
  },

  schadensersatz: {
    motivation: 'Schadensersatz ist die Kernreaktion auf Pflichtverletzungen. Die Kunst liegt darin, die Anspruchsgrundlage und ihre Voraussetzungen sauber in Reihenfolge zu prüfen.',
    theorie: [
      section(
        'Überblick über § 280 ff. BGB',
        `<p>Die Vorlesung ordnet den Schadensersatz nicht als Einzelnorm, sondern als System: Schadensersatz neben der Leistung, statt der Leistung, wegen Verzugs, wegen Unmöglichkeit und wegen Schutzpflichtverletzung. Gerade diese Einordnung hilft in Fällen mit mehreren Störungen, weil sie die richtige Anspruchsgrundlage vorgibt.</p>`
      ),
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
      ),
      section(
        'Tatbestand und Rechtsfolge getrennt halten',
        `<p>Der Schaden gehört als eigener Prüfungspunkt in den Tatbestand; Schadenshöhe und konkrete Berechnung gehören erst danach in die Rechtsfolge- bzw. Subsumtionsebene. Wer bereits bei der Fristsetzung mit der Schadenssumme argumentiert, verliert schnell die klare Struktur des Anspruchs.</p>`
      )
    ].join(''),
    formeln: [
      { label: 'Schadensersatz neben der Leistung', eq: String.raw`\text{§ 280 I BGB}`, desc: 'Pflichtverletzung genügt, wenn keine Ersatzleistung an die Stelle der Hauptleistung tritt.' },
      { label: 'Schadensersatz statt der Leistung', eq: String.raw`\text{§§ 280 I, III, 281 BGB}`, desc: 'Regelmäßig mit erfolgloser Fristsetzung.' },
      { label: 'Verzugsschaden', eq: String.raw`\text{§§ 280 I, II, 286 BGB}`, desc: 'Eigene Schiene bei Verzögerung der Leistung.' },
      { label: 'Unmöglichkeit', eq: String.raw`\text{§§ 280 I, III, 283 BGB}`, desc: 'Schadensersatzpfad bei endgültiger Leistungshindernis.' }
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
      ),
      task(
        'Warum darfst du „Schadensersatz“ in einer Klausur nicht als einheitliches Allerweltsrecht behandeln?',
        [
          step('Zuerst die Störungsart einordnen: Neben der Leistung, statt der Leistung, Verzug oder Unmöglichkeit.'),
          step('Erst dann die passende Anspruchsgrundlage aus § 280 ff. BGB benennen.'),
          step('Zusatzvoraussetzungen wie Fristsetzung oder Mahnung erst auf der richtigen Schiene prüfen.')
        ],
        'Die Anspruchsgrundlage hängt von der Störungsart ab. Wer das nicht trennt, prüft schnell die falschen Voraussetzungen.'
      ),
      task(
        'Tatbestand-vs-Rechtsfolge Fall: K nennt sofort seine Schadenssumme, prüft aber weder Vertretenmüssen noch Fristsetzung. Warum wirkt die Lösung trotz richtiger Zahl schwach?',
        [
          step('Weil die Tatbestandsvoraussetzungen den Anspruch tragen und nicht die Schadenssumme.'),
          step('Vertretenmüssen und ggf. Fristsetzung sind eigenständige Prüfungspunkte.'),
          step('Erst nach einem bejahten Anspruch wird die Schadenshöhe sinnvoll subsumiert.')
        ],
        'Im Schuldrecht gibt es keine Punkte für bloße Endzahlen ohne saubere Anspruchsprüfung. Die Rechtsfolge lebt vom tragfähigen Tatbestand.'
      )
    ]
  },

  ruecktritt: {
    motivation: 'Der Rücktritt ist das klassische Lösungsrecht des Leistungsstörungsrechts. Er ist nicht bloß „Rückgängigmachung“, sondern ein streng aufgebautes Gestaltungsrecht mit eigener Frist- und Folgeebene.',
    theorie: [
      section(
        'Rücktritt als Leistungsstörungsrecht',
        `<p>Der Rücktritt gehört wie der Schadensersatz zum allgemeinen Leistungsstörungsrecht des Schuldrecht AT. Er setzt einen wirksamen gegenseitigen Vertrag voraus und reagiert auf Nicht-, Schlecht- oder Unmöglichkeitsfälle. Anders als beim Schadensersatz geht es nicht um Ersatz, sondern um Lösung vom Vertrag.</p>`
      ),
      section(
        'Rücktrittsschemata',
        `<p>Die Vorlesung arbeitet mit zwei Standardpfaden: Rücktritt wegen Nicht- oder Schlechtleistung über §§ 323, 346 BGB und Rücktritt wegen Unmöglichkeit über §§ 326 Abs. 5, 323, 346 BGB. Im ersten Pfad ist die Fristsetzung regelmäßig zentral, im zweiten tritt an ihre Stelle die Unmöglichkeit.</p>
         ${scheme(String.raw`\text{gegenseitiger Vertrag} + \text{Störung} + \text{Frist / Unmöglichkeit} + \text{Erklärung}`)}
      `
      ),
      section(
        'Rücktrittserklärung und Rückgewähr',
        `<p>Der Rücktritt braucht eine Erklärung nach § 349 BGB. Rechtsfolge ist das Rückgewährschuldverhältnis: Die ursprünglichen Hauptleistungspflichten kehren sich um. Dadurch unterscheidet sich der Rücktritt sowohl vom Schadensersatz als auch von der Anfechtung.</p>
         ${scheme(String.raw`\text{Rücktritt} \Rightarrow \text{Rückgewährschuldverhältnis}`)}
      `
      ),
      section(
        'Abgrenzung zu Anfechtung und Schadensersatz',
        `<p>Im Unterschied zur Anfechtung wirkt der Rücktritt nicht ex tunc, sondern stellt das Vertragsverhältnis erst ab der Ausübung auf Rückabwicklung um. Im Unterschied zum Schadensersatz erhält der Gläubiger grundsätzlich nicht den Erfüllungswert, sondern nur das bereits Geleistete zurück.</p>
         ${warn('Standardfehler:', 'Rücktritt verlangt regelmäßig eine Leistungsstörung und oft eine Fristsetzung. Wer ihn wie eine freie „Umentscheidung“ behandelt, landet methodisch im falschen Institut.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Rücktritt wegen Schlechtleistung', eq: String.raw`\text{§§ 323, 346 BGB}`, desc: 'Standardpfad bei Nicht- oder Schlechtleistung trotz Fristsetzung.' },
      { label: 'Rücktritt wegen Unmöglichkeit', eq: String.raw`\text{§§ 326 V, 323, 346 BGB}`, desc: 'Wichtiger Sonderpfad ohne klassische Nachfristlogik.' },
      { label: 'Rücktrittserklärung', eq: String.raw`\text{§ 349 BGB}`, desc: 'Gestaltungsrecht braucht eine klare Erklärung.' },
      { label: 'Rechtsfolge', eq: String.raw`\text{§ 346 BGB}`, desc: 'Rückgewähr und ggf. Wertersatz gehören auf die Folgeebene.' }
    ],
    aufgaben: [
      task(
        'Warum genügt es für den Rücktritt nicht, dass K „unzufrieden“ mit der Leistung ist?',
        [
          step('Zuerst einen gegenseitigen Vertrag und eine echte Leistungsstörung verlangen.'),
          step('Dann prüfen, ob Fristsetzung nötig und erfolgt ist oder ausnahmsweise entbehrlich war.'),
          step('Erst danach die Rücktrittserklärung und Rechtsfolge anschließen.')
        ],
        'Rücktritt ist ein strukturiertes Leistungsstörungsrecht und kein freies Lösungsrecht aus bloßer Unzufriedenheit.'
      ),
      task(
        'Warum ist die Rücktrittserklärung ein eigener Prüfungspunkt und nicht bloß Formalität?',
        [
          step('Weil der Rücktritt ein Gestaltungsrecht ist, das durch Erklärung ausgeübt werden muss.'),
          step('Ohne wirksame Ausübung bleibt es trotz Tatbestandsnähe beim ursprünglichen Schuldverhältnis.'),
          step('Die Rückgewährfolgen setzen also nicht automatisch ein.')
        ],
        'Die Erklärung ist der Umschaltpunkt vom Primärschuldverhältnis zum Rückgewährschuldverhältnis.'
      ),
      task(
        'Welche Differenz zum Schadensersatz solltest du in einer Klausur ausdrücklich ansprechen, wenn beide Rechte parallel im Raum stehen?',
        [
          step('Rücktritt führt zur Lösung vom Vertrag und Rückgewähr, nicht zum Ersatz des Erfüllungsinteresses.'),
          step('Schadensersatz verlangt regelmäßig zusätzliche Tatbestandsvoraussetzungen wie Vertretenmüssen.'),
          step('Beide Schienen getrennt aufbauen und erst am Ende ihr Verhältnis klären.')
        ],
        'Klausurpunkte liegen oft gerade in der sauberen Trennung von Rücktritt und Ersatzanspruch.'
      ),
      task(
        'Mehrschrittfall Rücktritt: V liefert mangelhaft, setzt aber später doch noch eine mangelfreie Sache ein. Wo liegt die methodische Weiche?',
        [
          step('Zuerst prüfen, ob eine wirksame Frist gesetzt und fruchtlos abgelaufen ist.'),
          step('Dann fragen, ob vor Erklärung des Rücktritts noch ordnungsgemäß geleistet wurde.'),
          step('Erst bei fortbestehender Störung den Rücktritt erklären und die Rückgewährfolge eröffnen.')
        ],
        'Der Rücktritt lebt von seiner zeitlichen Ordnung: Störung, Frist, Erklärung, erst dann Rückgewähr.'
      )
    ]
  },

  verbraucherwiderruf: {
    motivation: 'Der Verbraucherwiderruf ist kein Sanktionsrecht wegen Schlechterfüllung, sondern ein europarechtlich geprägtes Schutzrecht. Gerade deshalb muss er scharf vom Rücktritt getrennt werden.',
    theorie: [
      section(
        'Widerruf als gesetzliches Schutzrecht',
        `<p>Der Verbraucherwiderruf basiert auf § 355 BGB, setzt aber immer voraus, dass das Gesetz für einen bestimmten Vertragstyp überhaupt ein Widerrufsrecht eröffnet. § 355 BGB allein verleiht also noch kein allgemeines Widerrufsrecht. Diese Vorfrage ist im Gutachten der natürliche Einstieg.</p>`
      ),
      section(
        'Vertragstyp und persönliche Voraussetzungen',
        `<p>Geprüft werden müssen der widerrufsfähige Vertragstyp sowie Verbraucher- und Unternehmereigenschaft. Die Vorlesung nennt besonders Fernabsatz, Haustürsituationen, Verbraucherdarlehen und Ratenlieferungsverträge. Der Widerruf knüpft also an Schutzlage und Vertragstyp an, nicht an eine Pflichtverletzung.</p>
         ${scheme(String.raw`\text{Widerrufsrecht} + \text{Verbraucher} + \text{Unternehmer}`)}
      `
      ),
      section(
        'Erklärung und Frist',
        `<p>Erforderlich ist eine gegenüber dem Unternehmer erklärte Widerrufsabsicht innerhalb der gesetzlichen Frist von grundsätzlich 14 Tagen. Eine Begründung ist nicht nötig. Klausurtypisch ist dabei die Klarstellung, dass für die Fristwahrung die rechtzeitige Absendung genügt.</p>
         ${scheme(String.raw`\text{Widerrufserklärung} + \text{14 Tage}`)}
      `
      ),
      section(
        'Rechtsfolge und Abgrenzung',
        `<p>Auch der Widerruf führt zu einem Rückgewährschuldverhältnis. Dennoch bleibt die dogmatische Trennung entscheidend: Rücktritt reagiert auf Leistungsstörung, Widerruf auf Verbraucherschutz. Bei digitaler Nutzung oder starker Ingebrauchnahme können zusätzliche Folgefragen wie Wertersatz oder Nutzungsgrenzen aufkommen, aber erst nachdem der Tatbestand steht.</p>
         ${warn('Normzweckfehler:', 'Wenn keine Leistungsstörung vorliegt, ist der Rücktritt nicht der natürliche Startpunkt. Der Widerruf wird nicht über Mängel, sondern über Schutzlage, Erklärung und Frist erschlossen.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Basisnorm', eq: String.raw`\text{§ 355 BGB}`, desc: 'Regelt Erklärung, Frist und Rechtsfolge, schafft aber nicht allein den Vertragstyp.' },
      { label: 'Persönliche Voraussetzungen', eq: String.raw`\text{Verbraucher} + \text{Unternehmer}`, desc: '§§ 13, 14 BGB sind Standardbausteine der Prüfung.' },
      { label: 'Frist', eq: String.raw`\text{14 Tage}`, desc: 'Regelmäßig ab Vertragsschluss; rechtzeitige Absendung genügt.' },
      { label: 'Rechtsfolge', eq: String.raw`\text{Rückgewährschuldverhältnis}`, desc: 'Ähnelt dem Rücktritt, beruht aber auf anderem Normzweck.' }
    ],
    aufgaben: [
      task(
        'Ein Online-Kauf funktioniert technisch einwandfrei, der Verbraucher möchte sich aber umentscheiden. Welcher Prüfungsweg liegt näher: Rücktritt oder Widerruf?',
        [
          step('Zuerst nach einer Leistungsstörung fragen.', String.raw`\text{Liegt keine Störung vor, ist Rücktritt nicht der natürliche Startpunkt.}`),
          step('Dann die Verbraucherschutzlage und den Vertragstyp prüfen.'),
          step('Erklärung und Frist des Widerrufs vollständig anschließen.')
        ],
        'Ohne Leistungsstörung spricht der Fall eher für einen Verbraucherwiderruf als für einen Rücktritt.'
      ),
      task(
        'Warum reicht der Satz „§ 355 BGB gibt dem Verbraucher ein Widerrufsrecht“ allein noch nicht aus?',
        [
          step('Weil zunächst ein Vertragstyp mit gesetzlichem Widerrufsrecht vorliegen muss.'),
          step('Danach sind Verbraucher- und Unternehmereigenschaft gesondert zu prüfen.'),
          step('Erst anschließend folgen Erklärung, Frist und Rechtsfolge.')
        ],
        '§ 355 BGB ist Basisnorm, aber nicht Freifahrtschein. Der Tatbestand beginnt mit der widerrufsfähigen Vertragssituation.'
      ),
      task(
        'Welche Prüfungsaussage zeigt in einer Klausur, dass du den Normzweck des Widerrufs verstanden hast?',
        [
          step('Benennen, dass der Widerruf gerade keine Pflichtverletzung des Unternehmers voraussetzt.'),
          step('Die Schutzlage des Verbrauchers als Anknüpfungspunkt hervorheben.'),
          step('Rücktritt und Widerruf ausdrücklich über ihren unterschiedlichen Zweck abgrenzen.')
        ],
        'Der Widerruf ist Schutzrecht, nicht Sanktion. Diese kurze Normzweckklarstellung macht eine Lösung sofort belastbarer.'
      ),
      task(
        'Tatbestand-vs-Rechtsfolge Drillcase: K widerruft fristgerecht, hat die Sache aber bereits stark benutzt. Wie gehst du methodisch vor?',
        [
          step('Zuerst den Widerrufstatbestand vollständig prüfen: Vertragstyp, Parteien, Erklärung, Frist.'),
          step('Den Widerruf nicht wegen der Benutzung vorschnell verneinen.'),
          step('Wertersatz- oder Rückabwicklungsprobleme erst auf der Rechtsfolgeebene anschließen.')
        ],
        'Der Standardfehler ist, Folgeprobleme vor den Tatbestand zu ziehen. Zuerst steht die Wirksamkeit des Widerrufs, danach die Abwicklung.'
      )
    ]
  }
};
