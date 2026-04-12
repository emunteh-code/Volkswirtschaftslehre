import { mathContent, renderSemanticBlock } from '../../../assets/js/portal-core/ui/semanticContent.js';

const section = (title, body) => `
  <div class="section-block">
    <h3>${title}</h3>
    ${body}
  </div>
`;

const warn = (title, body) => `<div class="warn-box" data-warning-placement="rail"><strong>${title}</strong> ${body}</div>`;
const mathBlock = (content) => renderSemanticBlock(content, { variant: 'theory' });
const step = (text, eq = null) => ({ text, eq });
const task = (text, steps, result, hint = null) => ({ text, steps, result, ...(hint ? { hint } : {}) });

export const CHAPTERS = [
  { id: 'rechnungswesen_intro', title: 'Einführung in Rechnungswesen und Erfolgsermittlung', cat: 'Grundlagen', short: 'Einführung' },
  { id: 'gob_rechtsgrundlagen', title: 'GoB und Rechtsgrundlagen der Rechnungslegung', cat: 'Grundlagen', short: 'GoB' },
  { id: 'inventur_inventar_bilanzansatz', title: 'Inventur, Inventar und Bilanzansatz', cat: 'Grundlagen', short: 'Inventur' },
  { id: 'buchen_konten', title: 'Buchen auf Bestands- und Erfolgskonten', cat: 'Buchführung', short: 'Buchen' },
  { id: 'buchfuehrung_orga', title: 'Organisation der Buchführung und Handelsbücher', cat: 'Buchführung', short: 'Organisation' },
  { id: 'anlagevermoegen', title: 'Anlagevermögen und Abschreibungen', cat: 'Bilanzposten', short: 'Anlage' },
  { id: 'umlauf_bewertung_verfahren', title: 'Umlaufvermögen I: Bewertung und Verfahren', cat: 'Bilanzposten', short: 'UV I' },
  { id: 'werkstoffe_erzeugnisse_buchungen', title: 'Umlaufvermögen II: Werkstoffe und Erzeugnisbuchungen', cat: 'Bilanzposten', short: 'UV II' },
  { id: 'umlauf_waren_ust', title: 'Umlaufvermögen III: Waren und Umsatzsteuer', cat: 'Bilanzposten', short: 'UV III' },
  { id: 'eigenkapital_kapitalgesellschaften', title: 'Eigenkapital in Kapitalgesellschaften', cat: 'Bilanzposten', short: 'EK KGes' },
  { id: 'eigenkapital_personengesellschaften', title: 'Eigenkapital in Personengesellschaften', cat: 'Bilanzposten', short: 'EK PGes' },
  { id: 'verbindlichkeiten', title: 'Fremdkapital I: Verbindlichkeiten', cat: 'Bilanzposten', short: 'Verb.' },
  { id: 'rueckstellungen', title: 'Fremdkapital II: Rückstellungen', cat: 'Bilanzposten', short: 'Rückst.' },
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
         ${mathBlock(mathContent(String.raw`$$\text{Aktiva} = \text{Passiva} = \text{Eigenkapital} + \text{Fremdkapital}$$`))}
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

  gob_rechtsgrundlagen: {
    motivation: 'GoB und Rechtsgrundlagen bestimmen den normativen Rahmen der Rechnungslegung. Ohne diesen Rahmen bleibt unklar, welche Informations- und Vorsichtslogik der Abschluss erfüllen muss.',
    theorie: [
      section(
        'GoB und Rechtsrahmen',
        `<p>Die GoB sichern Klarheit, Vollständigkeit, Nachprüfbarkeit und Vorsicht. Für Klausuren besonders wichtig sind Realisationsprinzip, Imparitätsprinzip und Stetigkeit, weil sie entscheiden, wann Erfolg ausgewiesen werden darf und wann Risiken bereits zu erfassen sind.</p>`
      ),
      section(
        'Rechnungslegungsrecht als Strukturvorgabe',
        `<p>Die Rechnungslegung folgt nicht bloß Rechenregeln, sondern gesetzlichen Rahmenbedingungen (u.a. HGB). Für die Klausur heißt das: Rechtsgrundlage, GoB-Logik und Informationszweck sind zusammen zu denken.</p>`
      ),
      section(
        'Vorsicht als Leitplanke',
        `<p>Realisations- und Imparitätsprinzip wirken als vorsichtsorientierte Leitplanken der Gewinnermittlung. In Prüfungen zeigt sich das an der asymmetrischen Behandlung von Chancen und Risiken.</p>
         ${warn('Prüfungsfehler:', 'GoB werden oft nur genannt, aber nicht auf den Fall angewendet. Klausurstark ist erst die konkrete Ableitung der Bilanzierungsentscheidung aus dem Prinzip.')}`
      ),
      section(
        '§ 252 HGB: Realisation und Vorsicht klausurnah verbinden',
        `<p>In der Klausur werden Realisations- und Vorsichtsprinzip regelmäßig ausdrücklich mit § 252 HGB verknüpft. Methodisch wichtig ist: Gewinne werden erst bei Realisation erfasst; vorhersehbare Risiken und Verluste sind dagegen vorsichtig zu berücksichtigen.</p>
         ${mathBlock(String.raw`\text{§ 252 HGB: Vorsicht + Realisation} \Rightarrow \text{asymmetrischer Erfolgsausweis}`)}
      `
      ),
      section(
        'Maßgeblichkeitsprinzip und latente Steuern',
        `<p>Übungs- und Probeklausurmaterial fordert explizit den Maßgeblichkeitsgrundsatz samt Ausnahmen sowie die Funktion latenter Steuern. Latente Steuern zeigen zukünftige steuerliche Mehr- oder Minderbelastungen aus unterschiedlichen handels- und steuerrechtlichen Wertansätzen.</p>
         ${warn('Exam-Trap:', 'Maßgeblichkeit und latente Steuern werden oft getrennt gelernt. Klausurstark ist die Brücke: Abweichende Wertansätze heute -> steuerliche Wirkungen in Folgeperioden.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Realisationsprinzip', eq: String.raw`\text{Gewinne erst bei Realisation}`, desc: 'Noch nicht realisierte Gewinne dürfen grundsätzlich nicht vorgezogen werden.' },
      { label: 'Imparitätsprinzip', eq: String.raw`\text{Verluste früh, Gewinne spät}`, desc: 'Asymmetrische Vorsicht im HGB.' },
      { label: 'Latente Steuern (Richtung)', eq: String.raw`\Delta_{HGB-Steuer} > 0 \Rightarrow \text{passive latent};\; \Delta_{HGB-Steuer} < 0 \Rightarrow \text{aktive latent}`, desc: 'Prüfungsnaher Merksatz zur Richtung zukünftiger Steuermehr-/-minderbelastung.' }
    ],
    aufgaben: [
      task(
        'Warum sind GoB in der Klausur mehr als reine Definitionssätze?',
        [
          step('Normative Funktion benennen.', String.raw`\text{GoB steuern, wie Informationszweck und Vorsicht in Bilanzentscheidungen umgesetzt werden.}`),
          step('Anwendungsbezug herstellen.', String.raw`\text{Erst die Fallanwendung zeigt, ob ein Prinzip wirklich verstanden wurde.}`)
        ],
        'GoB sind Entscheidungsmaßstäbe. Klausurrelevant werden sie erst durch saubere Anwendung auf konkrete Bilanzierungsfragen.'
      ),
      task(
        'Warum verlangt das Imparitätsprinzip eine frühere Erfassung drohender Verluste als erwarteter Gewinne?',
        [
          step('Gläubigerschutz ansprechen.', String.raw`\text{Das HGB will eine zu optimistische Darstellung vermeiden.}`),
          step('Asymmetrie bewusst benennen.', String.raw`\text{Risiken sollen früh, Chancen erst bei Realisation erfasst werden.}`)
        ],
        'Die Asymmetrie ist gewollt: Sie schützt Gläubiger vor überhöht dargestellter Vermögens- und Ertragslage.'
      ),
      task(
        'Wie hängt das Realisationsprinzip mit § 252 HGB zusammen, wenn ein erwarteter, aber noch nicht realisierter Gewinn vorliegt?',
        [
          step('Rechtsanker benennen.', String.raw`\text{§ 252 HGB verankert die vorsichtige Erfolgsermittlung.}`),
          step('Konsequenz für den Fall ableiten.', String.raw`\text{Ohne Realisation darf der Gewinn noch nicht erfolgswirksam vorgezogen werden.}`)
        ],
        'Die erwartete Chance bleibt bis zur Realisation erfolgsneutral; genau darin zeigt sich die vorsichtsorientierte Systematik des § 252 HGB.'
      ),
      task(
        'Warum tauchen Maßgeblichkeitsprinzip und latente Steuern in Klausuren oft gemeinsam auf?',
        [
          step('Zusammenhang erklären.', String.raw`\text{Abweichungen zwischen Handels- und Steuerbilanz erzeugen zukünftige steuerliche Effekte.}`),
          step('Latente Steuerwirkung zuordnen.', String.raw`\text{Künftige Mehrbelastung -> passive latente Steuer; künftige Entlastung -> aktive latente Steuer.}`)
        ],
        'Maßgeblichkeit beschreibt die Beziehung der Wertansätze; latente Steuern bilden deren intertemporale Steuerfolgen im Abschluss ab.'
      )
    ]
  },

  inventur_inventar_bilanzansatz: {
    motivation: 'Inventur, Inventar und Bilanzansatz bilden die technische Eingangsschleuse in den Abschluss. Hier entscheidet sich, welche Posten überhaupt bilanziell erscheinen.',
    theorie: [
      section(
        'Inventur und Inventar',
        `<p>Die Inventur ist die tatsächliche Bestandsaufnahme. Ihr Ergebnis ist das Inventar als geordnetes Bestandsverzeichnis. Erst aus dieser Grundlage wird die Bilanz systematisch verdichtet.</p>`
      ),
      section(
        'Bilanzansatz als Ob-Frage',
        `<p>Bilanzansatz fragt, ob ein Vermögensgegenstand oder eine Schuld überhaupt bilanziert werden darf oder muss. Das ist logisch von der späteren Wertfrage getrennt.</p>`
      ),
      section(
        'Ansatz vor Bewertung',
        `<p>In der Prüfung gilt: Erst Ansatzfähigkeit und Bilanzierungsfähigkeit klären, dann erst bewerten. Diese Reihenfolge ist methodisch zwingend und fehleranfällig.</p>
         ${warn('Reihenfolgefehler:', 'Viele Lösungen springen direkt zur Zahl. Ohne geklärten Ansatz ist jede Bewertung methodisch verfrüht.')}`
      ),
      section(
        'Vom Einzelbestand zum Abschlussausweis',
        `<p>Zwischen Inventur und Bilanz liegt mehr als bloß ein Abschreibprozess. Aus dem Einzelbestand muss ein bilanzfähiger Posten mit richtiger Kategorie, Ansatzentscheidung und späterem Ausweis werden. Gerade diese Kette macht aus Rohdaten Abschlusswissen.</p>
         <p>Deshalb genügt in Klausuren weder „ist da“ noch „hat einen Wert“. Erst die saubere Übersetzung vom realen Bestand zum Bilanzposten beantwortet die eigentliche Abschlussfrage.</p>`
      ),
      section(
        'Prüfungskette statt Definitionsinsel',
        `<p>Eine belastbare Lösung arbeitet deshalb in fester Reihenfolge: Bestand identifizieren, dem Abschlusszweck zuordnen, Ansatzfähigkeit prüfen, Bilanzansatz bejahen oder verneinen und erst anschließend zur Bewertung bzw. zum Ausweis weitergehen.</p>
         ${warn('Körperliche Existenz überschätzen:', 'Dass etwas physisch vorhanden ist, entscheidet noch nicht allein über den Bilanzansatz. Eigentum, wirtschaftliche Zuordnung und Bilanzierungslogik müssen mitgeprüft werden.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Inventurfolge', eq: String.raw`\text{Inventur} \rightarrow \text{Inventar} \rightarrow \text{Bilanz}`, desc: 'Vom Einzelbestand zur Abschlussverdichtung.' },
      { label: 'Prüfungsfolge', eq: String.raw`\text{Ansatz} \rightarrow \text{Bewertung}`, desc: 'Existenzfrage vor Wertfrage.' },
      { label: 'Abschlusskette', eq: String.raw`\text{Inventur} \rightarrow \text{Inventar} \rightarrow \text{Ansatz} \rightarrow \text{Bewertung} \rightarrow \text{Ausweis}`, desc: 'Vom Rohbestand bis zur sichtbaren Abschlusswirkung.' }
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
        'Worin liegt der methodische Unterschied zwischen Inventur und Bilanz?',
        [
          step('Inventur als Erhebungsebene benennen.', String.raw`\text{Inventur erfasst Bestände konkret und einzeln.}`),
          step('Bilanz als Verdichtungsebene ergänzen.', String.raw`\text{Die Bilanz ordnet und verdichtet diese Informationen abschlusssystematisch.}`)
        ],
        'Inventur liefert Rohdaten der Bestände, die Bilanz erzeugt daraus die strukturierte Abschlussdarstellung.'
      ),
      task(
        'Warum reicht die Aussage „Der Gegenstand ist vorhanden“ in einer Ansatzaufgabe fast nie aus?',
        [
          step('Körperliche Existenz ist nur der Startpunkt, nicht die Abschlusslösung.'),
          step('Zusätzlich sind wirtschaftliche Zuordnung und Bilanzierungsfähigkeit zu prüfen.'),
          step('Erst danach lässt sich entscheiden, ob ein Bilanzposten anzusetzen ist und wie er weiterbehandelt wird.')
        ],
        'Ansatzaufgaben prüfen die Bilanzlogik eines Bestands, nicht bloß seine physische Existenz.'
      ),
      task(
        'Welche Prüfungsreihenfolge sollte in einer Mini-Falllösung zu Inventur und Bilanzansatz sichtbar sein?',
        [
          step('Zuerst den realen Bestand bzw. Sachverhalt eindeutig identifizieren.'),
          step('Dann prüfen, ob daraus überhaupt ein bilanzierungsfähiger Posten wird.'),
          step('Erst nach bejahtem Ansatz zur Bewertung und zum Ausweis übergehen.')
        ],
        'Die Abschlussroutine lautet: Bestand -> Ansatz -> Bewertung -> Ausweis.'
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

  umlauf_bewertung_verfahren: {
    motivation: 'Bewertung des Umlaufvermögens ist klausurentscheidend, weil Verfahren und Niederstwertlogik direkt den ausgewiesenen Periodenerfolg beeinflussen.',
    theorie: [
      section(
        'Grundlagen der UV-Bewertung',
        `<p>Zum Umlaufvermögen zählen u.a. Vorräte und kurzfristige Vermögensposten. Für die Klausur ist die Bewertungslogik zentral: Zugangsbewertung über Anschaffungs-/Herstellungskosten und stichtagsbezogene Folgebewertung.</p>`
      ),
      section(
        'Bewertungsvereinfachungsverfahren',
        `<p>Verbrauchsfolgeverfahren wie FIFO, LIFO oder Durchschnittsmethode ordnen Zugangswerte dem Verbrauch bzw. Endbestand zu. In der Klausur musst du sauber rechnen und den Bestandswert methodisch begründen.</p>`
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

  werkstoffe_erzeugnisse_buchungen: {
    motivation: 'Werkstoff- und Erzeugnisbuchungen verbinden Lagerbewegung, Aufwandserfassung und GuV-Abschluss. Gerade hier entstehen typische mehrstufige Buchungsfehler.',
    theorie: [
      section(
        'Werkstoffbuchungen',
        `<p>Roh-, Hilfs- und Betriebsstoffe werden über Bestandskonten und Aufwandskonten erfasst. Die Fortschreibungs- und Inventurmethode führen zum gleichen Verbrauch, aber über unterschiedliche Buchungswege.</p>`
      ),
      section(
        'Unfertige und fertige Erzeugnisse',
        `<p>Bestandsveränderungen unfertiger und fertiger Erzeugnisse wirken direkt in die Erfolgsrechnung hinein. Deshalb müssen Bestandskonto und GuV-Logik sauber verknüpft werden.</p>`
      ),
      section(
        'Korrekturbuchungen im Materialfluss',
        `<p>Rücksendungen, Gutschriften und Preisnachlässe sind keine Randnotiz, sondern verändern Bestände und Erfolgsgrößen unmittelbar. Korrekturbuchungen müssen daher kontensystematisch sauber erfolgen.</p>
         ${warn('Buchungsfalle:', 'Wer nur den Zielbuchungssatz lernt, verpasst häufig die Bestandsveränderung und die korrekte GuV-Wirkung.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Inventurmethode', eq: String.raw`\text{Verbrauch} = AB + Zugänge - SB`, desc: 'Verbrauchsermittlung über Bestandvergleich.' },
      { label: 'Bestandsveränderung', eq: String.raw`\Delta Bestand = SB - AB`, desc: 'Steuert die Erfolgswirkung bei Erzeugnissen.' }
    ],
    aufgaben: [
      task(
        'Worin unterscheiden sich Fortschreibungs- und Inventurmethode bei Werkstoffen, obwohl beide zum gleichen Verbrauch führen können?',
        [
          step('Den Erfassungszeitpunkt trennen.', String.raw`\text{Fortschreibung bucht laufend; Inventurmethode ermittelt den Verbrauch periodenendbezogen.}`),
          step('Das gemeinsame Ergebnis einordnen.', String.raw`\text{Beide Verfahren können rechnerisch denselben Verbrauch liefern, aber mit anderer Buchungsroute.}`)
        ],
        'Der Unterschied liegt im Buchungsweg, nicht zwingend im Endergebnis: laufende Entnahmebuchung versus Verbrauchsermittlung aus Bestandsvergleich.'
      ),
      task(
        'Warum gehören Bestandsveränderungen bei unfertigen/fertigen Erzeugnissen in die Erfolgslogik?',
        [
          step('Produktions- und Absatzmenge auseinanderhalten.', String.raw`\text{Nicht jede hergestellte Einheit ist bereits umsatzwirksam verkauft.}`),
          step('GuV-Effekt erläutern.', String.raw`\text{Bestandsmehrung/-minderung korrigiert den periodengerechten Erfolgsausweis.}`)
        ],
        'Bestandsveränderungen überführen Produktions- und Lagerbewegung in einen periodengerechten Erfolgsbeitrag.'
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

  eigenkapital_kapitalgesellschaften: {
    motivation: 'Eigenkapital in Kapitalgesellschaften folgt einer formal gegliederten Struktur mit Rücklagen- und Gewinnverwendungslogik. Diese Struktur ist eigenständig klausurrelevant.',
    theorie: [
      section(
        'Gliederung des Eigenkapitals',
        `<p>Bei Kapitalgesellschaften ist das Eigenkapital gegliedert, etwa in gezeichnetes Kapital, Kapitalrücklage, Gewinnrücklagen, Gewinnvortrag und Jahresüberschuss. Diese Differenzierung spiegelt Haftungsstruktur und Ausschüttungslogik wider.</p>`
      ),
      section(
        'Rücklagen und Ausweisfragen',
        `<p>Gesetzliche und andere Gewinnrücklagen sowie die Ausweisvarianten des Ergebnisses prägen die Kapitalgesellschaftslogik. In Aufgaben ist die Reihenfolge von Jahresergebnis, Rücklageneinstellung und Gewinnverwendung zentral.</p>`
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
        'Warum ist die Ergebnisverwendung in Kapitalgesellschaften mehr als ein bloßer „Nachklapp“ zur GuV?',
        [
          step('Bilanzbezug benennen.', String.raw`\text{Sie entscheidet, wie der Erfolg im Eigenkapital weitergeführt wird.}`),
          step('Kapitalgesellschaftsbezug ergänzen.', String.raw`\text{Rücklagenbildung und Ausweislogik folgen spezifischen gesellschaftsrechtlichen Regeln.}`)
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

  eigenkapital_personengesellschaften: {
    motivation: 'In Personengesellschaften ist Eigenkapital gesellschafterbezogen geführt. Kapitalkonten, Privatkonten und Gewinnanteile bilden eine eigene Abschlusslogik.',
    theorie: [
      section(
        'Gesellschafterbezogene Kapitalkonten',
        `<p>Das Eigenkapital wird den Gesellschaftern über eigene Kapitalkonten zugeordnet. Dadurch unterscheidet sich die Darstellung deutlich von der formalisierten Kapitalgesellschaftsstruktur.</p>`
      ),
      section(
        'Privatkonto-Logik',
        `<p>Einlagen und Entnahmen werden über Privatkonten geführt und anschließend in die Kapitalkonten überführt. Diese Technik ist prüfungsrelevant, weil sie Bewegungen zwischen Unternehmen und Gesellschaftern sichtbar macht.</p>`
      ),
      section(
        'Gewinnanteile und Abschluss',
        `<p>Gewinnanteile werden den Kapitalkonten zugerechnet und verändern die Gesellschafterpositionen. Für die Klausur ist die saubere Abschlusskette Privatkonto -> Kapitalkonto entscheidend.</p>
         ${warn('Kontenfalle:', 'Einlagen/Entnahmen und Gewinnanteile werden oft auf derselben Ebene vermischt. Klausurstabil ist die getrennte Kontenführung mit anschließendem Abschluss.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Privatkonto-Abschluss', eq: String.raw`\text{Privatkonto} \rightarrow \text{Kapitalkonto}`, desc: 'Einlagen/Entnahmen werden periodisch überführt.' },
      { label: 'Gewinnzuweisung', eq: String.raw`\text{GuV-Ergebnis} \rightarrow \text{Kapitalkonten der Gesellschafter}`, desc: 'Erfolgszuordnung nach Beteiligungslogik.' }
    ],
    aufgaben: [
      task(
        'Warum sind Privatkonten bei Personengesellschaften kein Nebenthema, sondern zentral für die Eigenkapitalabbildung?',
        [
          step('Funktion benennen.', String.raw`\text{Privatkonten erfassen Einlagen/Entnahmen getrennt von der laufenden GuV-Logik.}`),
          step('Abschlusswirkung erklären.', String.raw`\text{Erst über den Abschluss auf Kapitalkonten entsteht die korrekte Gesellschafterdarstellung.}`)
        ],
        'Privatkonten sichern die saubere Trennung zwischen Gesellschafterbewegungen und periodischem Unternehmenserfolg.'
      ),
      task(
        'Warum ist die Gewinnzuweisung auf Gesellschafterkonten methodisch etwas anderes als die Rücklagenlogik einer AG?',
        [
          step('Strukturunterschied benennen.', String.raw`\text{Personengesellschaften arbeiten gesellschafterbezogen über Kapitalkonten statt über AG-typische Rücklagenstufen.}`),
          step('Folge für Buchungstechnik erläutern.', String.raw`\text{Gewinnanteile werden direkt kontenbezogen zugeordnet.}`)
        ],
        'Die Personengesellschaftslogik ist kontenbezogen-gesellschafterindividuell, nicht formal-rücklagenzentriert wie bei Kapitalgesellschaften.'
      )
    ]
  },

  verbindlichkeiten: {
    motivation: 'Verbindlichkeiten sind die sichere Fremdkapitalschiene. Für Klausuren ist die klare Abgrenzung zu Rückstellungen und die Bewertungslogik zentral.',
    theorie: [
      section(
        'Wesen der Verbindlichkeit',
        `<p>Verbindlichkeiten sind dem Grunde und der Höhe nach feststehende Schulden. Typische Fälle sind Lieferantenverbindlichkeiten, Darlehen oder Steuerverbindlichkeiten.</p>`
      ),
      section(
        'Bewertung',
        `<p>Verbindlichkeiten werden mit dem Erfüllungsbetrag angesetzt. Bei Änderungen der Belastung sind die Bewertungsgrundsätze konsistent anzuwenden.</p>`
      ),
      section(
        'Typische Klausurfälle',
        `<p>Fremdwährungsverbindlichkeiten und Umgliederungen innerhalb der Verbindlichkeiten gehören zu den klassischen Prüfungsfällen. Zuerst wird klassifiziert, dann bewertet.</p>
         ${warn('Abgrenzungsfalle:', 'Nicht jede unklare künftige Zahlung ist eine Verbindlichkeit. Verbindlichkeiten setzen eine ausreichend sichere Verpflichtung voraus.')}`
      ),
      section(
        'Abgrenzung zu Rückstellung und RAP',
        `<p>Die Verbindlichkeit ist die sichere Schuldkategorie. Fehlen sichere Höhe oder Fälligkeit, wandert der Fall eher in die Rückstellungsschiene. Geht es stattdessen primär um die periodische Zuordnung bereits gezahlter oder empfangener Beträge, ist Rechnungsabgrenzung zu prüfen.</p>
         ${warn('Sichere Schuld zu schnell als Rückstellung lesen', 'In unsauberen Lösungen wird jede künftige Zahlung als „irgendwie ungewiss“ beschrieben. Entscheidend ist aber, ob die Verpflichtung in Grund und Höhe schon belastbar feststeht.')}`
      ),
      section(
        'Von der Schuld zur Abschlusswirkung',
        `<p>Prüfungsrelevant ist nicht nur der Ansatz, sondern die Folgefrage: Wie wirkt die Verbindlichkeit auf Bilanzstruktur, spätere Zahlung und Erfolgsrechnung? Gerade Tilgung, Umgliederung und Währungsfälle verlangen deshalb eine Kette aus Klassifikation -> Bewertung -> Folgeausweis.</p>`
      )
    ].join(''),
    formeln: [
      { label: 'Verbindlichkeit', eq: String.raw`\text{sicher dem Grunde und der Höhe nach}`, desc: 'Feste Schuldposition.' },
      { label: 'Bewertung', eq: String.raw`\text{Ansatz zum Erfüllungsbetrag}`, desc: 'Maßgeblicher Bewertungsmaßstab nach HGB-Logik.' },
      { label: 'Prüfungskette', eq: String.raw`\text{sichere Schuld} \Rightarrow \text{Verbindlichkeit} \Rightarrow \text{Erfüllungsbetrag} \Rightarrow \text{Folgeausweis}`, desc: 'Von der Klassifikation zur Abschlusswirkung.' }
    ],
    aufgaben: [
      task(
        'Warum zählt die sichere Bestimmbarkeit von Höhe und Fälligkeit als Kernmerkmal der Verbindlichkeit?',
        [
          step('Sicherheitsgrad erklären.', String.raw`\text{Verbindlichkeiten sind konkret verpflichtende Schulden, nicht bloße Erwartungswerte.}`),
          step('Abgrenzung zur Rückstellung ergänzen.', String.raw`\text{Fehlt die sichere Bestimmbarkeit, ist eher die Rückstellungsschiene zu prüfen.}`)
        ],
        'Die Verbindlichkeit lebt von der sicheren Verpflichtungslage; genau dadurch ist ihre Bilanzierung von Rückstellungen abgrenzbar.'
      ),
      task(
        'Warum sollten Verbindlichkeiten in Klausuren zuerst klassifiziert und erst danach bewertet werden?',
        [
          step('Klassifikation als Ausgangspunkt nennen.', String.raw`\text{Die Art der Schuld bestimmt den richtigen Bewertungsmaßstab.}`),
          step('Bewertungsfolge ableiten.', String.raw`\text{Erst nach klarer Zuordnung ist der Erfüllungsbetrag sauber zu ermitteln.}`)
        ],
        'Die richtige Schuldenkategorie steuert die zulässige Bewertung und verhindert methodische Kurzschlüsse.'
      ),
      task(
        'Ein Prozessrisiko ist wahrscheinlich, aber der Betrag nur grob schätzbar. Warum ist das keine klassische Verbindlichkeit?',
        [
          step('Für die Verbindlichkeit muss die Schuld dem Grunde und der Höhe nach hinreichend sicher feststehen.'),
          step('Wenn gerade die Höhe oder Fälligkeit noch unscharf ist, fehlt die Kernstabilität der Verbindlichkeit.'),
          step('Dann ist zuerst die Rückstellungsschiene zu prüfen.')
        ],
        'Die Verbindlichkeit lebt von Sicherheit; ungewisse Belastungen gehören methodisch zunächst in die Rückstellungskategorie.'
      ),
      task(
        'Warum sollte eine gute Verbindlichkeitslösung nicht beim Ansatzsatz enden, sondern die Folgezahlung oder Umgliederung mitdenken?',
        [
          step('Die Verbindlichkeit verändert zunächst die Bilanzstruktur als sichere Schuld.'),
          step('Spätere Zahlung, Tilgung oder Umgliederung zeigen, wie der Posten wieder aus der Bilanz herausläuft.'),
          step('Erst diese Folgeperspektive macht den Abschlusszusammenhang klausurstabil.')
        ],
        'Gute Abschlusslösungen zeigen nicht nur die Schuld, sondern auch ihren späteren bilanziellen Abbau.'
      )
    ]
  },

  rueckstellungen: {
    motivation: 'Rückstellungen sind die ungewisse Fremdkapitalschiene und ein zentraler Prüfungsbereich. Entscheidend ist die Trennung von sicherer Schuld und wahrscheinlicher, aber unscharfer Verpflichtung.',
    theorie: [
      section(
        'Wesen der Rückstellung',
        `<p>Rückstellungen erfassen ungewisse Verbindlichkeiten oder drohende Verluste aus schwebenden Geschäften. Die Verpflichtung besteht dem Grunde nach, Höhe oder Fälligkeit sind aber noch unsicher.</p>`
      ),
      section(
        'Abgrenzung: Rückstellung, Verbindlichkeit oder RAP?',
        `<p>Die erste Klausurfrage ist fast nie die Bewertung, sondern die richtige Schublade. Ist die Schuld dem Grunde und der Höhe nach sicher, spricht das für eine Verbindlichkeit. Geht es primär um Periodenzuordnung bereits gezahlter oder empfangener Beträge, ist eher Rechnungsabgrenzung zu prüfen. Rückstellungen bleiben für wirtschaftlich verursachte, aber noch ungewisse Belastungen.</p>
         ${warn('Abgrenzungsfehler:', 'Wer jede unklare künftige Zahlung vorschnell als Rückstellung bucht, verliert die saubere Trennung zu Verbindlichkeit und Rechnungsabgrenzung.')}`
      ),
      section(
        'Bewertung der ungewissen Verpflichtung',
        `<p>Rückstellungen folgen einer vernünftigen kaufmännischen Beurteilung des notwendigen Erfüllungsbetrags. Das verlangt risikosensitives Schätzen statt schematischer Einzelwerte.</p>`
      ),
      section(
        'Ansatz -> Folgejahr -> Erfolgswirkung',
        `<p>Prüfungsstabil wird das Thema erst, wenn der gesamte Pfad steht: Im Ansatzjahr wird Aufwand antizipiert, im Folgejahr entscheidet die tatsächliche Inanspruchnahme darüber, ob die Rückstellung passgenau war, aufgelöst werden muss oder nachdotiert wird. Genau diese Dreiteilung trennt gute Lösungen von reinen Definitionsantworten.</p>`
      ),
      section(
        'Folgebuchungen und Auflösung',
        `<p>Bei späterer Inanspruchnahme, Wegfall oder Mehrbelastung wirken sich Rückstellungen erfolgsseitig unterschiedlich aus. Diese Folgepfade sind klausurtypisch.</p>
         ${warn('Bewertungsfalle:', 'Rückstellungen dürfen nicht pauschal als Restgröße angesetzt werden. Maßgeblich ist die nachvollziehbare Schätzung auf Basis der wirtschaftlichen Verhältnisse.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Rückstellung', eq: String.raw`\text{ungewisse Verbindlichkeit}`, desc: 'Verpflichtung steht dem Grunde nach, Höhe/Fälligkeit sind unsicher.' },
      { label: 'Bewertung', eq: String.raw`\text{notwendiger Erfüllungsbetrag nach kaufmännischer Beurteilung}`, desc: 'Schätzbasierter Ansatz.' },
      { label: 'Ansatzlogik', eq: String.raw`\text{Aufwand} \rightarrow \text{Rückstellung} \rightarrow \text{spätere Inanspruchnahme / Auflösung}`, desc: 'Rückstellungen sind eine Periodisierungs- und Folgebuchungslogik, nicht nur ein Bilanzetikett.' }
    ],
    aufgaben: [
      task(
        'Warum ist ein wahrscheinliches Prozessrisiko mit unsicherer Höhe ein Rückstellungsthema?',
        [
          step('Unsicherheitsstruktur benennen.', String.raw`\text{Die Verpflichtung ist wahrscheinlich, aber nicht betragsgenau feststehend.}`),
          step('Bilanzfolge ableiten.', String.raw`\text{Damit ist eine Rückstellung statt einer festen Verbindlichkeit zu prüfen.}`)
        ],
        'Rückstellungen erfassen genau solche unsicheren, aber wirtschaftlich verursachten Belastungen.'
      ),
      task(
        'Warum ist die spätere Auflösung einer Rückstellung klausurrelevant?',
        [
          step('Folgepfade unterscheiden.', String.raw`\text{Inanspruchnahme, Wegfall oder Mehrbelastung führen zu unterschiedlichen Buchungs- und Erfolgswirkungen.}`),
          step('Periodenbezug ergänzen.', String.raw`\text{Die ursprüngliche Schätzung wird über die Folgeperiode bilanziell und erfolgsseitig konkretisiert.}`)
        ],
        'Die Rückstellungslogik endet nicht beim Ansatz: erst die Folgebehandlung zeigt die vollständige Abschlusswirkung.'
      ),
      task(
        'Ein Unternehmen rechnet am Jahresende mit Prozesskosten von 80.000 €. Im Folgejahr werden tatsächlich 75.000 € gezahlt. Welche Erfolgslogik muss in der Lösung sichtbar werden?',
        [
          step('Im Ansatzjahr wird die erwartete Belastung über Aufwand und Rückstellung periodengerecht vorweggenommen.'),
          step('Im Folgejahr wird die Zahlung gegen die Rückstellung verrechnet.'),
          step('Weil die tatsächliche Zahlung unter der Schätzung liegt, bleibt ein Rest der Rückstellung übrig, der erfolgswirksam aufgelöst wird.')
        ],
        'Die Klausurlogik lautet: Aufwand im Ansatzjahr, Inanspruchnahme im Folgejahr, Restauflösung als positiver Erfolgseffekt bei Übervorsicht.'
      ),
      task(
        'Ein Betrag ist sicher geschuldet, aber erst nächstes Jahr zu zahlen. Warum ist das nicht automatisch eine Rückstellung?',
        [
          step('Sicherheitsgrad prüfen: Ist Grund und Höhe feststehend, liegt keine ungewisse Verpflichtung mehr vor.'),
          step('Dann ist zunächst die Schiene „Verbindlichkeit“ zu prüfen.'),
          step('Rückstellungen bleiben nur für wirtschaftlich verursachte, aber noch unsichere Belastungen reserviert.')
        ],
        'Die Rückstellung setzt Unsicherheit voraus; bei sicherer Schuld ist regelmäßig die Verbindlichkeit der richtige Ansatz.'
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
        'Vier-Felder-Logik für die Klausur',
        `<p>Eine robuste Lösung prüft immer zwei Fragen zusammen: <em>Wann fließt Geld?</em> und <em>Zu welcher Periode gehört der Erfolg wirtschaftlich?</em> Daraus entsteht die Vier-Felder-Logik aus Zahlung vor/nach dem Stichtag und Aufwand/Ertrag vor/nach dem Stichtag. Genau diese Ordnung trennt aktiven/passiven RAP von sonstigen Forderungen oder Verbindlichkeiten.</p>`
      ),
      section(
        'Abgrenzung zu Forderungen und Verbindlichkeiten',
        `<p>Rechnungsabgrenzung darf nicht mit sonstigen Forderungen oder Verbindlichkeiten verwechselt werden. In der Klausur entscheidet häufig der Satz „ist die wirtschaftliche Ursache schon in dieser Periode gesetzt?“ über die richtige Einordnung.</p>
         ${warn('Zeitfehler:', 'Wer nur auf den Zahlungszeitpunkt schaut, verfehlt das Periodenprinzip. Für die Abgrenzung zählt die wirtschaftliche Zugehörigkeit.')}
         ${warn('Nicht jede Jahresendposition ist RAP', 'Antizipative Fälle können auch als sonstige Forderung oder Verbindlichkeit zu lesen sein. Entscheidend ist, ob die Position primär Periodisierung oder Anspruch/Schuldcharakter abbildet.')}
      `),
      section(
        'Von der Zahlung zum Abschlusseffekt',
        `<p>Didaktisch wichtig ist die Kette Zahlung -> Bilanzposten -> Erfolgswirkung der richtigen Periode. Gute Klausurlösungen nennen nicht nur „aktiver/passiver RAP“, sondern schließen mit der Wirkung auf Aufwand, Ertrag und Bilanzgliederung ab.</p>`
      ),
    ].join(''),
    formeln: [
      { label: 'Periodenzuordnung', eq: String.raw`\text{wirtschaftliche Zugehörigkeit} \neq \text{Zahlungszeitpunkt}`, desc: 'Kernlogik der Rechnungsabgrenzung.' },
      { label: 'Aktiver / passiver RAP', eq: String.raw`\text{Ausgabe heute, Aufwand morgen} \Rightarrow aRAP \qquad \text{Einnahme heute, Ertrag morgen} \Rightarrow pRAP`, desc: 'Merkschema für die transitorische Abgrenzung.' },
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
      ),
      task(
        'Eine Jahresmiete für Januar bis März des Folgejahres wird im Dezember vollständig überwiesen. Welche Richtung der Abgrenzung muss die Lösung zeigen?',
        [
          step('Die Zahlung liegt bereits im alten Jahr, der Aufwand gehört wirtschaftlich überwiegend ins Folgejahr.'),
          step('Damit ist die Ausgabe von der Erfolgszugehörigkeit zu trennen.'),
          step('Die Lösung muss deshalb einen aktiven RAP als Bilanzbrücke zur Folgeperiode sichtbar machen.')
        ],
        'Prepaid-Aufwand ist der Standardfall des aktiven RAP: Zahlung alt, Aufwand neu.'
      ),
      task(
        'Zinsen für Dezember werden erst im Januar des Folgejahres gutgeschrieben. Warum reicht die Antwort „Geld kommt später“ nicht aus?',
        [
          step('Wirtschaftliche Verursachung prüfen: Die Zinsleistung gehört bereits in die ablaufende Periode.'),
          step('Deshalb muss der Ertrag periodengerecht im alten Jahr erfasst werden.'),
          step('Die Lösung braucht also nicht nur den Zahlungszeitpunkt, sondern die bereits verdiente Ertragskomponente.')
        ],
        'Antizipative Abgrenzung lebt vom bereits entstandenen Erfolg, nicht vom künftigen Geldeingang allein.'
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
        'Von der Buchung zum Statement-Effekt',
        `<p>Gerade in Prüfungen zählt nicht nur der Name des Verfahrens, sondern der Weg vom Einzelvorgang zur Ergebniszeile. Bestandsveränderungen, aktivierte Eigenleistungen und Herstellkosten der abgesetzten Leistungen sind die Brücken, über die Buchungen in die Erfolgsrechnung übersetzt werden.</p>`
      ),
      section(
        'Warum beide zum selben Ergebnis führen',
        `<p>GKV und UKV unterscheiden sich nicht im Jahresergebnis, sondern in der Darstellungslogik. Gerade diese Aussage gehört in fast jede Vergleichsaufgabe.</p>
         ${warn('Vergleichsfehler:', 'Wer GKV und UKV wie alternative Gewinnermittlungen behandelt, verfehlt den Kern. Das Ergebnis ist gleich, nur die Struktur der Darstellung ändert sich.')}`
      ),
      section(
        'Prüfungsschema für Vergleichsaufgaben',
        `<p>Eine belastbare Antwort arbeitet deshalb in vier Schritten: Verfahren identifizieren, Ordnungskriterium nennen, Bestands-/Leistungsbrücke erklären und erst dann das Ergebnis vergleichen. Diese Reihenfolge macht aus einer Definitionsfrage eine echte Abschlussantwort.</p>
         ${warn('Bestandsänderung nicht als Randnotiz behandeln', 'Gerade hier entscheidet sich oft, ob das Verfahren periodengerecht erklärt wird oder nur auswendig gelernt wirkt.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Jahresergebnis', eq: String.raw`$$JÜ = Erträge - Aufwendungen$$`, desc: 'Beide Verfahren führen dorthin.' },
      { label: 'Kostenart vs. Funktion', eq: String.raw`\text{GKV: Was für Kosten? \quad UKV: Wofür Kosten?}`, desc: 'Merksatz zur Darstellungslogik.' },
      { label: 'Brückenlogik', eq: String.raw`\text{Bestandsveränderung / HK der abgesetzten Leistung} \Rightarrow \text{periodengerechter Erfolg}`, desc: 'Die Brücke erklärt, warum GKV und UKV trotz anderer Zeilen zum gleichen Ergebnis führen.' }
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
      ),
      task(
        'Ein Unternehmen produziert mehr, als es verkauft. Warum muss eine gute GKV-Lösung dann Bestandsveränderungen ausdrücklich nennen?',
        [
          step('Produktion und Absatz trennen: Nicht jede hergestellte Leistung ist schon erfolgswirksam verkauft.'),
          step('Die Mehrproduktion erhöht den Bestand und korrigiert im GKV den Rohaufwand zur periodengerechten Erfolgsgröße.'),
          step('Ohne diesen Schritt würde der Aufwand der Periode zu hoch und das Ergebnis zu niedrig erscheinen.')
        ],
        'Bestandsveränderungen sind im GKV die zentrale Brücke zwischen Produktionsmenge und periodengerechtem Erfolg.'
      ),
      task(
        'Wie erkennst du in einer Vergleichsfrage, dass nicht nach zwei verschiedenen Gewinnzahlen, sondern nach zwei Darstellungslogiken gefragt wird?',
        [
          step('Die Aufgabe spricht über GKV und UKV als alternative Gliederungsformen derselben Erfolgsrechnung.'),
          step('Dann muss die Antwort das gemeinsame Jahresergebnis und die unterschiedliche Ordnung der Aufwendungen sauber trennen.'),
          step('Erst die Gegenüberstellung „Kostenarten“ versus „Funktionsbereiche“ macht die Vergleichsfrage vollständig.')
        ],
        'Bei GKV/UKV ist die Leitfrage fast immer Darstellungslogik statt Ergebnisabweichung.'
      )
    ]
  }
};
