const section = (title, body) => `
  <div class="section-block">
    <h3>${title}</h3>
    ${body}
  </div>
`;

const mathBlock = (eq) => `<div class="math-block">${eq}</div>`;

const warn = (title, body) => `<div class="warn-box"><strong>${title}</strong> ${body}</div>`;

const step = (text, eq = null) => ({ text, eq });

const task = (text, steps, result, hint = null) => ({
  text,
  steps,
  result,
  ...(hint ? { hint } : {})
});

export const CHAPTERS = [
  { id: 'handelsfakten', title: 'Handelsfakten und Grundfragen', cat: 'Handel I', short: 'Fakten' },
  { id: 'ricardo', title: 'Ricardo-Modell und komparativer Vorteil', cat: 'Handel I', short: 'Ricardo' },
  { id: 'heckscher_ohlin', title: 'Heckscher-Ohlin und Verteilungseffekte', cat: 'Handel I', short: 'H-O' },
  { id: 'krugman', title: 'Intraindustrieller Handel, Krugman und Gravitation', cat: 'Handel II', short: 'Krugman' },
  { id: 'tarifmodell', title: 'Importzoll, Wohlfahrt und Optimalzoll', cat: 'Handel II', short: 'Zoll' },
  { id: 'quoten_sanktionen', title: 'Quoten, Sanktionen und diskriminierende Handelspolitik', cat: 'Handel II', short: 'Quoten' },
  { id: 'wto_integration', title: 'WTO, Freihandelszonen, Zollunionen und Brexit', cat: 'Politik & Institutionen', short: 'WTO' },
  { id: 'wechselkurssysteme', title: 'Wechselkurssysteme, reale Kurse und Währungskrisen', cat: 'Offene Makro I', short: 'Regime' },
  { id: 'paritaeten', title: 'UIP, Kaufkraftparität und Gesetz des einheitlichen Preises', cat: 'Offene Makro I', short: 'Paritäten' },
  { id: 'monetaerer_ansatz', title: 'Monetärer Ansatz, Fisher-Effekt und reale Zinsparität', cat: 'Offene Makro II', short: 'Monetär' },
  { id: 'overshooting', title: 'Finanzmarktansatz und Overshooting', cat: 'Offene Makro II', short: 'Overshoot' },
  { id: 'trilemma', title: 'Trilemma der Währungspolitik und Balassa-Samuelson', cat: 'Offene Makro II', short: 'Trilemma' }
];

export const CONTENT = {
  handelsfakten: {
    motivation: 'Bevor Modelle überzeugen, musst du wissen, welches reale Phänomen sie überhaupt erklären sollen: Handel wächst, ist politisch umkämpft und besteht oft gerade zwischen ähnlichen Ländern.',
    theorie: [
      section(
        'Welche Beobachtungen der Kurs erklären will',
        `<p>Internationale Wirtschaftsbeziehungen beginnen nicht mit einer Formel, sondern mit drei robusten Fakten: Erstens ist der Welthandel langfristig stark gewachsen. Zweitens handeln vor allem große, produktive Volkswirtschaften intensiv miteinander. Drittens besteht ein erheblicher Teil des Handels aus dem gleichzeitigen Export und Import ähnlicher Güter.</p>
         <p>Diese Fakten zeigen sofort, dass kein einzelnes Modell alles leisten kann. Ricardo erklärt Handel durch Technologieunterschiede, Heckscher-Ohlin durch Faktorausstattung, Krugman durch Skalenerträge und Produktvielfalt.</p>`
      ),
      section(
        'Positive Analyse vs. normative Debatte',
        `<p>Die positive Frage lautet: <em>Warum</em> wird gehandelt? Die normative Frage lautet: <em>Soll</em> Handelspolitik eingreifen? Prüfungsaufgaben springen oft zwischen beiden Ebenen. Deshalb musst du sauber trennen, ob ein Modell ein Handelsmuster erklärt oder ob es eine politische Maßnahme bewertet.</p>
         <p>Gerade in Einführungsaufgaben ist diese Trennung klausurentscheidend: Ein Modell kann Freihandelsgewinne zeigen, ohne jede Verteilungsfrage innerhalb eines Landes zu lösen.</p>`
      ),
      section(
        'Wie du Handelsmodelle erkennst',
        `<p>Wenn in der Aufgabe Arbeitskoeffizienten, Spezialisierung und Opportunitätskosten vorkommen, bist du bei Ricardo. Wenn von Kapital, Arbeit, Faktorausstattung oder Verteilungswirkungen die Rede ist, signalisiert das Heckscher-Ohlin. Bei Varietät, Produktdifferenzierung, Skalenerträgen oder ähnlichen Ländern liegt die Neue Handelstheorie nahe.</p>
         ${warn('Erkennungsfehler:', 'Viele Antworten bleiben auf der Ebene „Handel ist gut“. Das reicht nicht. Du musst benennen, <em>welcher</em> Mechanismus den beobachteten Handel erzeugt und welche Annahmen dahinterstehen.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Handelsquote', eq: String.raw`$$\text{Handelsquote} = \frac{X + M}{BIP}$$`, desc: 'Misst die Offenheit einer Volkswirtschaft.' },
      { label: 'Terms of Trade', eq: String.raw`$$ToT = \frac{P_X}{P_M}$$`, desc: 'Preis der Exporte relativ zu den Importen.' }
    ],
    aufgaben: [
      task(
        'Ein Land exportiert Maschinen, importiert aber gleichzeitig andere Maschinenbauteile. Welcher Modelltyp erklärt das besser: Ricardo, Heckscher-Ohlin oder Krugman?',
        [
          step('Zuerst die Handelsform identifizieren.', String.raw`\text{Gleichzeitiger Export und Import ähnlicher Güter = intraindustrieller Handel.}`),
          step('Dann den passenden Mechanismus zuordnen.', String.raw`\text{Produktdifferenzierung + Skalenerträge } \Rightarrow \text{ Neue Handelstheorie / Krugman.}`)
        ],
        'Der Fall passt am besten zur Neuen Handelstheorie: ähnliche Länder handeln ähnliche Güter, weil größere Märkte mehr Varianten und niedrigere Stückkosten erlauben.'
      ),
      task(
        'Warum reicht die bloße Beobachtung „Handelsquote steigt“ nicht aus, um sofort für oder gegen Zölle zu argumentieren?',
        [
          step('Die positive von der normativen Frage trennen.', String.raw`\text{Eine steigende Handelsquote beschreibt zunächst nur Offenheit, nicht automatisch Wohlfahrt oder Verteilung.}`),
          step('Politikurteil nur mit zusätzlicher Analyse ableiten.', String.raw`\text{Für ein Urteil braucht man Wohlfahrts-, Verteilungs- oder Strategieargumente.}`)
        ],
        'Eine Handelsquote ist ein Ausgangsindikator, aber noch kein Politikurteil. Erst Modelle zu Wohlfahrt, Verteilung oder strategischem Verhalten erlauben eine Bewertung.'
      )
    ]
  },

  ricardo: {
    motivation: 'Ricardo liefert das Grundargument für Spezialisierung: Auch wenn ein Land in allem produktiver ist, lohnt sich Handel, sobald sich Opportunitätskosten unterscheiden.',
    theorie: [
      section(
        'Absolute und komparative Vorteile sauber trennen',
        `<p>Ein absoluter Vorteil bedeutet: Ein Land benötigt weniger Arbeit pro Einheit eines Gutes. Ein komparativer Vorteil bedeutet: Ein Land opfert relativ weniger vom anderen Gut. Für die Handelsrichtung zählt nicht die absolute Produktivität, sondern die Relation der Opportunitätskosten.</p>
         ${mathBlock(String.raw`$$OK_X = \frac{a_{LX}}{a_{LY}}$$`)}
         <p>Genau deshalb kann ein Land mit absoluten Vorteilen in beiden Gütern dennoch nur eines exportieren: Dort ist sein relativer Kostenvorteil am größten.</p>`
      ),
      section(
        'Produktionsmöglichkeiten und Spezialisierung',
        `<p>Mit einem einzigen Produktionsfaktor Arbeit und konstanter Produktivität ist die Produktionsmöglichkeitenkurve linear. Ihre Steigung misst die Opportunitätskosten. Beim Öffnen zum Handel spezialisieren sich Länder auf das Gut mit dem niedrigeren relativen Preis im Autarkiefall und konsumieren anschließend außerhalb ihrer Autarkie-PPF.</p>
         <p>Prüfungsfragen verlangen oft genau diese Kette: Arbeitskoeffizienten → Opportunitätskosten → Handelsrichtung → Wohlfahrtsgewinn.</p>`
      ),
      section(
        'Was das Modell kann und was nicht',
        `<p>Ricardo erklärt Spezialisierung aus Technologieunterschieden. Das Modell erklärt nicht gut, warum ähnliche Länder ähnliche Güter handeln, und es sagt nichts über innerstaatliche Verteilungskonflikte zwischen Faktoren.</p>
         ${warn('Typischer Klausurfehler:', '„Land A ist in allem besser, also exportiert es alles.“ Falsch. Bei zwei Gütern exportiert jedes Land das Gut seines komparativen Vorteils; das andere Land exportiert das andere Gut.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Opportunitätskosten von X', eq: String.raw`$$OK_X = \frac{a_{LX}}{a_{LY}}$$`, desc: 'Arbeitsstunden für X relativ zu Y.' },
      { label: 'Spezialisierungsbedingung', eq: String.raw`$$OK_X^{H} < OK_X^{F} \Rightarrow H \text{ exportiert } X$$`, desc: 'Exportgut hat die geringeren relativen Kosten.' }
    ],
    aufgaben: [
      task(
        'Home benötigt 2 Stunden für Wein und 4 Stunden für Tuch. Foreign benötigt 6 Stunden für Wein und 3 Stunden für Tuch. Wer exportiert Wein?',
        [
          step('Opportunitätskosten von Wein in Home bestimmen.', String.raw`OK_W^H = 2/4 = 0{,}5 \text{ Tuch.}`),
          step('Opportunitätskosten von Wein in Foreign bestimmen.', String.raw`OK_W^F = 6/3 = 2 \text{ Tuch.}`),
          step('Die kleineren Opportunitätskosten identifizieren.', String.raw`0{,}5 < 2 \Rightarrow \text{Home exportiert Wein.}`)
        ],
        'Home exportiert Wein, obwohl Foreign bei Tuch produktiver sein kann. Entscheidend sind die relativen und nicht die absoluten Kosten.'
      ),
      task(
        'Ein Land ist in beiden Gütern absolut produktiver. Wie begründest du in der Prüfung trotzdem, dass Spezialisierung beider Länder sinnvoll bleibt?',
        [
          step('Absoluten Vorteil von komparativem Vorteil trennen.', String.raw`\text{Absolute Überlegenheit sagt noch nichts über relative Verzichtskosten.}`),
          step('Auf die gegenseitige Ergänzung der Opportunitätskosten verweisen.', String.raw`\text{Ein Land hat immer nur bei einem Gut den kleineren relativen Verzicht.}`)
        ],
        'Auch das absolut stärkere Land spezialisiert sich auf das Gut mit dem stärkeren relativen Vorteil. Das andere Land exportiert das zweite Gut und beide gewinnen an Konsummöglichkeiten.'
      )
    ]
  },

  heckscher_ohlin: {
    motivation: 'Heckscher-Ohlin verschiebt den Fokus von Technologie auf Faktorausstattung: Länder exportieren die Güter, die ihren reichlich vorhandenen Faktor intensiv nutzen.',
    theorie: [
      section(
        'Faktorreichlichkeit und Faktorintensität',
        `<p>Das Modell arbeitet mit zwei Ländern, zwei Gütern und zwei Faktoren, meist Arbeit $L$ und Kapital $K$. Ein Land ist kapitalreich, wenn sein Verhältnis $K/L$ relativ hoch ist. Ein Gut ist kapitalintensiv, wenn seine Produktion relativ mehr Kapital benötigt als das andere Gut.</p>
         ${mathBlock(String.raw`$$\frac{K}{L}\Big|_{H} > \frac{K}{L}\Big|_{F}$$`)}
         <p>Diese beiden Begriffe dürfen in der Klausur nicht vermischt werden: Faktorreichlichkeit beschreibt Länder, Faktorintensität beschreibt Güter.</p>`
      ),
      section(
        'Heckscher-Ohlin und Stolper-Samuelson',
        `<p>Das Heckscher-Ohlin-Theorem besagt: Ein Land exportiert das Gut, das den reichlich vorhandenen Faktor intensiv nutzt. Daraus folgt die Verteilungsaussage des Stolper-Samuelson-Theorems: Handel begünstigt den reichlich vorhandenen Faktor und belastet den knappen Faktor real.</p>
         <p>Deshalb erklärt das Modell nicht nur Handelsmuster, sondern auch, warum Handelsliberalisierung innenpolitisch umstritten ist.</p>`
      ),
      section(
        'Grenzen des Modells',
        `<p>Das Modell benötigt starke Annahmen: identische Technologien, keine Transportkosten, gleiche Präferenzen und keine Faktorumkehr. Wenn diese Annahmen nicht gelten, kann die reine Faktorausstattungserklärung schwächer werden.</p>
         ${warn('Verteilungsfalle:', 'Viele Antworten nennen nur „mehr Handel = alle gewinnen“. H-O ist gerade deshalb wichtig, weil es erklärt, warum einzelne Gruppen im Inland verlieren können.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Faktorreichlichkeit', eq: String.raw`$$\frac{K}{L}\Big|_{H} > \frac{K}{L}\Big|_{F}$$`, desc: 'Home ist relativ kapitalreich.' },
      { label: 'Handelsrichtung', eq: String.raw`$$H \text{ exportiert das } K\text{-intensive Gut}$$`, desc: 'Direkte Anwendung des H-O-Theorems.' }
    ],
    aufgaben: [
      task(
        'Home ist kapitalreich, Foreign arbeitsreich. Maschinen sind kapitalintensiv, Textilien arbeitsintensiv. Wie sieht das Handelsmuster aus?',
        [
          step('Faktorreichlichkeit zuordnen.', String.raw`\text{Home: kapitalreich, Foreign: arbeitsreich.}`),
          step('Güter nach Faktorintensität ordnen.', String.raw`\text{Maschinen: kapitalintensiv, Textilien: arbeitsintensiv.}`),
          step('H-O anwenden.', String.raw`\text{Home exportiert Maschinen, Foreign exportiert Textilien.}`)
        ],
        'Home exportiert Maschinen und importiert Textilien; Foreign tut das Gegenteil.'
      ),
      task(
        'Warum ist Stolper-Samuelson in politischen Debatten über Globalisierung so wichtig?',
        [
          step('Nicht nur aggregierte Gewinne betrachten.', String.raw`\text{Gesamtwohlfahrt und Verteilung sind unterschiedliche Ebenen.}`),
          step('Relative Faktorpreise in den Mittelpunkt stellen.', String.raw`\text{Der reichliche Faktor gewinnt real, der knappe Faktor verliert real.}`)
        ],
        'Das Theorem erklärt, warum es trotz gesamtwirtschaftlicher Handelsgewinne klare innenpolitische Gewinner und Verlierer gibt.'
      )
    ]
  },

  krugman: {
    motivation: 'Die Neue Handelstheorie erklärt, warum ähnliche Länder ähnliche Güter gleichzeitig exportieren und importieren: Skalenerträge und Produktdifferenzierung erzeugen Handel auch ohne große Faktorunterschiede.',
    theorie: [
      section(
        'Warum Ricardo und H-O hier nicht reichen',
        `<p>Zwischen Deutschland und Frankreich werden Autos in beide Richtungen gehandelt. Das ist kein klassischer interindustrieller Handel, sondern intraindustrieller Handel. Klassische Modelle mit konstanten Skalenerträgen und homogener Ware erklären das nur unzureichend.</p>`
      ),
      section(
        'Interne Skalenerträge und monopolistischer Wettbewerb',
        `<p>Mit Fixkosten und differenzierten Produkten sinken die Durchschnittskosten bei höherer Produktionsmenge:</p>
         ${mathBlock(String.raw`$$AC(q) = \frac{F}{q} + c$$`)}
         <p>Öffnung zum Handel vergrößert den Markt. Firmen können längere Serien produzieren, die Stückkosten sinken und Konsumenten erhalten mehr Varietäten. Das zentrale Argument lautet also: Handel schafft nicht nur Mengen-, sondern auch Vielfaltseffekte.</p>`
      ),
      section(
        'Gravitation und empirische Lesart',
        `<p>Die Gravitationsgleichung erklärt empirisch gut, warum große Länder viel miteinander handeln und Distanz Handelsströme dämpft. Sie ist keine Konkurrenz zu Krugman, sondern eine empirische Verdichtung ähnlicher Kräfte: Marktgröße fördert Handel, Distanz verteuert ihn.</p>
         ${warn('Modellverwechslung:', 'Wenn die Aufgabe nach Produktvielfalt, ähnlichen Ländern oder Firmengröße fragt, reicht Heckscher-Ohlin nicht. Dann brauchst du explizit steigende Skalenerträge oder monopolistischen Wettbewerb.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Durchschnittskosten', eq: String.raw`$$AC(q) = \frac{F}{q} + c$$`, desc: 'Fixkosten werden mit größerem Output verdünnt.' },
      { label: 'Grubel-Lloyd-Index', eq: String.raw`$$GL_i = 1 - \frac{|X_i - M_i|}{X_i + M_i}$$`, desc: 'Misst intraindustriellen Handel in Branche i.' },
      { label: 'Gravitation', eq: String.raw`$$Trade_{ij} \propto \frac{GDP_i \cdot GDP_j}{Dist_{ij}}$$`, desc: 'Große Länder handeln viel, Distanz bremst.' }
    ],
    aufgaben: [
      task(
        'Warum ist der Handel zwischen zwei ähnlich reichen Industrieländern kein Gegenbeispiel zu Handelsgewinnen, sondern ein Hinweis auf einen anderen Mechanismus?',
        [
          step('Beobachtung präzise benennen.', String.raw`\text{Ähnliche Länder handeln ähnliche Güter = intraindustrieller Handel.}`),
          step('Passenden Erklärungsmechanismus wählen.', String.raw`\text{Skalenerträge + Produktdifferenzierung } \Rightarrow \text{ Krugman.}`)
        ],
        'Handel zwischen ähnlichen Ländern ist kein Problemfall, sondern genau der Anwendungsbereich der Neuen Handelstheorie.'
      ),
      task(
        'Ein Sektor hat hohe Fixkosten und viele differenzierte Varianten. Was passiert bei Markterweiterung durch Handel typischerweise mit Stückkosten und Produktvielfalt?',
        [
          step('Fixkosten auf größere Menge verteilen.', String.raw`q \uparrow \Rightarrow F/q \downarrow \Rightarrow AC \downarrow`),
          step('Marktgröße und Anzahl der Varianten verknüpfen.', String.raw`\text{Größerer Markt } \Rightarrow \text{ mehr tragfähige Varianten.}`)
        ],
        'Stückkosten sinken und die Produktvielfalt steigt. Genau diese Doppelwirkung macht den Wohlfahrtsgewinn im Krugman-Modell aus.'
      )
    ]
  },

  tarifmodell: {
    motivation: 'Der Importzoll ist das Standardwerkzeug der Handelspolitik. Seine Analyse zeigt sauber, wie Preis, Menge, Wohlfahrt und Verteilung zusammenhängen.',
    theorie: [
      section(
        'Kleines Land: Preiswirkung und Importmenge',
        `<p>Im kleinen Land ist der Weltmarktpreis exogen. Ein spezifischer Zoll erhöht den Inlandspreis um genau den Zollsatz:</p>
         ${mathBlock(String.raw`$$P_{in} = P_w + t$$`)}
         <p>Die heimische Produktion steigt, der Konsum sinkt und die Importmenge schrumpft. Die zentrale Graphik arbeitet mit Nachfrage, Angebot, Weltmarktpreis und Zollpreis.</p>`
      ),
      section(
        'Wohlfahrt: Gewinner, Verlierer und Deadweight Loss',
        `<p>Konsumenten verlieren wegen des höheren Preises und des geringeren Konsums. Produzenten gewinnen durch den Preisanstieg. Der Staat erzielt Zolleinnahmen. Netto bleibt im kleinen Land jedoch ein Wohlfahrtsverlust, weil Produktions- und Konsumverzerrung nicht kompensiert werden.</p>
         <p>In Klausuren musst du diese Flächenargumente meist verbal sauber wiedergeben, auch wenn keine Zahlen angegeben sind.</p>`
      ),
      section(
        'Großes Land und Optimalzoll',
        `<p>Ein großes Land kann über seine Importnachfrage den Weltmarktpreis drücken und damit seine Terms of Trade verbessern. Dadurch entsteht das Optimalzoll-Argument. Es bleibt aber fragil, weil Retaliation, Gegenmaßnahmen und internationale Abkommen den Vorteil schnell zerstören.</p>
         ${warn('Standardfehler:', 'Im kleinen-Land-Fall gibt es keinen Terms-of-Trade-Gewinn. Wer dort einen Optimalzoll behauptet, vermischt zwei unterschiedliche Modelle.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Inlandspreis mit Zoll', eq: String.raw`$$P_{in} = P_w + t$$`, desc: 'Preiswirkung im kleinen Land.' },
      { label: 'Importmenge', eq: String.raw`$$M = D(P_{in}) - S(P_{in})$$`, desc: 'Importe als Lücke zwischen Nachfrage und Angebot.' }
    ],
    aufgaben: [
      task(
        'Der Weltmarktpreis beträgt 10, der Zoll 3. Wie verändern sich Inlandspreis und Importmenge im kleinen Land qualitativ?',
        [
          step('Preiswirkung notieren.', String.raw`P_{in} = 10 + 3 = 13`),
          step('Mengenreaktionen aus dem Preis ableiten.', String.raw`\text{Höherer Preis } \Rightarrow D \downarrow,\; S \uparrow,\; M \downarrow`)
        ],
        'Der Inlandspreis steigt auf 13. Konsum sinkt, Produktion steigt und die Importmenge fällt.'
      ),
      task(
        'Warum ist der Importzoll im kleinen Land trotz Produzentenrenten und Zolleinnahmen netto wohlfahrtsmindernd?',
        [
          step('Verteilungswirkungen separat nennen.', String.raw`\text{KR } \downarrow,\; \text{PR } \uparrow,\; \text{Staatseinnahmen } \uparrow`),
          step('Dann die Ineffizienzen benennen.', String.raw`\text{Produktions- und Konsumverzerrung } \Rightarrow \text{ Deadweight Loss}`)
        ],
        'Die Gewinne von Produzenten und Staat gleichen die Verzerrungsverluste nicht vollständig aus; deshalb sinkt die nationale Wohlfahrt netto.'
      )
    ]
  },

  quoten_sanktionen: {
    motivation: 'Nicht jede Handelspolitik sieht wie ein klassischer Zoll aus. Quoten, Sanktionen und diskriminierende Maßnahmen wirken ähnlich, verteilen die Rente aber anders und erzeugen neue politische Probleme.',
    theorie: [
      section(
        'Quote vs. Zoll',
        `<p>Eine äquivalente Importquote kann denselben Inlandspreis erzeugen wie ein Zoll. Der entscheidende Unterschied ist die Rentenverteilung: Beim Zoll fließen Einnahmen an den Staat, bei der Quote an die Inhaber der Importrechte.</p>
         <p>Bei steigender Nachfrage wird die Quote relativ restriktiver, weil die Menge fix ist. Genau deshalb ist die Wirkung dynamisch anders als beim Zoll.</p>`
      ),
      section(
        'Sanktionen und diskriminierende Zölle',
        `<p>Sanktionen wirken oft nicht nur über Preise, sondern auch über Umleitungseffekte, Lieferketten und politische Gegensanktionen. Diskriminierende Zölle verletzen zudem die Idee nichtdiskriminierender Handelsbehandlung und können Drittlandeffekte auslösen.</p>
         <p>In Klausuren geht es hier selten nur um ein Diagramm, sondern um den Transfer: Wer trägt die Last? Welche Ersatzkanäle entstehen? Wie verändern sich politische und ökonomische Ziele?</p>`
      ),
      section(
        'Warum Institutionen wichtig werden',
        `<p>Gerade Quoten und Sanktionen zeigen, warum internationale Regeln wichtig sind. Ohne übergeordnete Ordnung drohen Vergeltungsspiralen und ineffiziente Politikzyklen.</p>
         ${warn('Rentenfehler:', 'Wer Quote und Zoll gleichsetzt, ohne die Quotenrente zu diskutieren, verliert den zentralen ökonomischen Unterschied aus dem Blick.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Quote als Mengenrestriktion', eq: String.raw`$$M \leq \bar M$$`, desc: 'Importmenge wird direkt begrenzt.' },
      { label: 'Quotenrente', eq: String.raw`$$\text{Quotenrente} = (P_{in} - P_w)\cdot M$$`, desc: 'Erlös aus der künstlichen Verknappung.' }
    ],
    aufgaben: [
      task(
        'Warum kann eine Importquote bei wachsender Inlandsnachfrage restriktiver wirken als ein äquivalenter Zoll?',
        [
          step('Die Fixierung der Menge betonen.', String.raw`\bar M \text{ bleibt konstant, auch wenn die Nachfrage steigt.}`),
          step('Preisanpassung ableiten.', String.raw`\text{Mehr Nachfrage bei fixer Importmenge } \Rightarrow \text{ stärkerer Preisdruck im Inland.}`)
        ],
        'Die Quote begrenzt die Menge direkt. Bei höherer Nachfrage passt sich nicht die Importmenge, sondern stärker der Preis an.'
      ),
      task(
        'Ein Staat begründet Sanktionen rein moralisch. Welche zusätzliche ökonomische Analyse erwartet die Prüfung trotzdem?',
        [
          step('Die Wirkungsrichtung ökonomisch zerlegen.', String.raw`\text{Preise, Umleitung, Verteilung, Angebotsersatz, Gegenmaßnahmen}`),
          step('Politisches Ziel und ökonomische Kosten trennen.', String.raw`\text{Normatives Ziel } \neq \text{ automatisch effiziente Maßnahme}`)
        ],
        'Auch bei moralischer Begründung musst du ökonomisch analysieren, wer belastet wird, welche Umwege entstehen und ob die Maßnahme ihr Ziel überhaupt mit vertretbaren Kosten erreicht.'
      )
    ]
  },

  wto_integration: {
    motivation: 'Internationale Handelsordnung ist kein Randthema: WTO, Freihandelszonen und Zollunionen bestimmen, ob Handelskonflikte koordiniert oder eskalierend ausgetragen werden.',
    theorie: [
      section(
        'MFN, Gegenseitigkeit und Bindungen',
        `<p>Die WTO reduziert Unsicherheit, weil sie Zölle bindet, Transparenz schafft und Diskriminierung begrenzt. Das MFN-Prinzip verlangt, gleichartige Handelspartner gleich zu behandeln. Dadurch sinkt die Versuchung, unilateral immer wieder neue Barrieren zu errichten.</p>`
      ),
      section(
        'Freihandelszone vs. Zollunion',
        `<p>Eine Freihandelszone beseitigt Binnenzölle, lässt aber nationale Außenzölle bestehen. Eine Zollunion kombiniert Binnenfreihandel mit einem gemeinsamen Außenzoll. Prüfungsfragen fragen hier fast immer nach dem Unterschied zwischen <em>trade creation</em> und <em>trade diversion</em>.</p>
         <p>Trade creation ist wohlfahrtssteigernd, weil ineffiziente Inlandsproduktion durch günstigere Partnerimporte ersetzt wird. Trade diversion kann problematisch sein, weil nur der bisher billigste Drittlandanbieter verdrängt wird.</p>`
      ),
      section(
        'Brexit als Transferfall',
        `<p>Brexit ist didaktisch wertvoll, weil er institutionelle und reale Kosten verbindet: Grenzformalitäten, Ursprungsregeln, Unsicherheit und Dienstleistungshemmnisse. Wer diesen Fall erklären kann, versteht den Unterschied zwischen Marktintegration und bloß niedrigen Zöllen.</p>
         ${warn('Institutionsfalle:', 'Freihandel ist nicht nur „kein Zoll“. Gerade Standards, Ursprungskontrollen und Rechtsdurchsetzung prägen den tatsächlichen Integrationsgrad.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Trade creation', eq: String.raw`$$\Delta W > 0 \text{ durch Ersatz teurer Inlandsproduktion}$$`, desc: 'Zollunion erhöht Effizienz.' },
      { label: 'Trade diversion', eq: String.raw`$$\Delta W < 0 \text{ möglich durch Ersatz billiger Drittlandimporte}$$`, desc: 'Präferenz kann Handel umlenken statt verbessern.' }
    ],
    aufgaben: [
      task(
        'Warum kann eine Zollunion trotz Wegfall von Binnenzöllen wohlfahrtsmindernd sein?',
        [
          step('Trade diversion sauber benennen.', String.raw`\text{Günstiger Drittlandanbieter wird durch teureren Partner verdrängt.}`),
          step('Dann die Präferenzlogik erklären.', String.raw`\text{Nicht jede Umlenkung ist Effizienzgewinn.}`)
        ],
        'Wenn Handelsumlenkung billige Drittlandimporte verdrängt, kann die Zollunion trotz Binnenfreihandel ineffizient sein.'
      ),
      task(
        'Warum ist Brexit kein reiner „Zoll“-Fall, sondern ein Integrationsfall?',
        [
          step('Auf nichttarifäre Kosten verweisen.', String.raw`\text{Grenzkontrollen, Ursprung, Regulierung, Dienstleistungszugang}`),
          step('Institutionelle Tiefe betonen.', String.raw`\text{Binnenmarktintegration umfasst mehr als Zollsätze.}`)
        ],
        'Brexit betrifft institutionelle Marktintegration. Deshalb entstehen Handelskosten auch ohne spektakulär hohe Zölle.'
      )
    ]
  },

  wechselkurssysteme: {
    motivation: 'Mit dem Makroteil verschiebt sich der Fokus von Gütern auf Preise, Zinsen und Erwartungen. Der erste Schritt ist die saubere Unterscheidung von nominalem Wechselkurs, realem Wechselkurs und Regimewahl.',
    theorie: [
      section(
        'Nominaler und realer Wechselkurs',
        `<p>Der nominale Wechselkurs gibt an, wie viel Inlandswährung je Einheit Auslandswährung gezahlt wird. Der reale Wechselkurs korrigiert zusätzlich um Preisniveaus:</p>
         ${mathBlock(String.raw`$$q = E \cdot \frac{P^*}{P}$$`)}
         <p>Damit misst $q$, wie teuer ausländische Güter relativ zu inländischen Gütern sind. Eine reale Abwertung verbessert die preisliche Wettbewerbsfähigkeit des Inlandes.</p>`
      ),
      section(
        'Fixe vs. flexible Wechselkurse',
        `<p>Unter flexiblen Kursen absorbiert der Wechselkurs Schocks. Unter fixen Kursen muss die Geldpolitik den Kurs verteidigen; Anpassungslasten verlagern sich auf Zins, Reserven und Binnenwirtschaft. Deshalb ist die Regimefrage nie rein technisch, sondern immer auch eine Frage politischer Prioritäten.</p>`
      ),
      section(
        'Währungskrisen als Glaubwürdigkeitsproblem',
        `<p>Eine Währungskrise entsteht häufig dann, wenn ein fixiertes Regime nicht mehr glaubwürdig erscheint. Kapitalflucht, Reservenverlust und spekulative Attacken erzwingen dann häufig die Aufgabe des Kurses.</p>
         ${warn('Standardverwechslung:', 'Nominale Abwertung und reale Abwertung sind nicht dasselbe. Steigen die Inlandspreise mit, kann die reale Wirkung schnell verpuffen.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Realer Wechselkurs', eq: String.raw`$$q = E \cdot \frac{P^*}{P}$$`, desc: 'Ausländische Güter relativ zu inländischen Gütern.' },
      { label: 'Reale Abwertung', eq: String.raw`$$q \uparrow \Rightarrow \text{Wettbewerbsfähigkeit des Inlandes steigt}$$`, desc: 'Exportgüter werden relativ günstiger.' }
    ],
    aufgaben: [
      task(
        'Der nominale Wechselkurs steigt, die Inlandspreise steigen aber genauso stark wie die Auslands Preise. Was passiert mit dem realen Wechselkurs?',
        [
          step('Realen Wechselkurs über Nominalkurs und Preise definieren.', String.raw`q = E \cdot \frac{P^*}{P}`),
          step('Gleiche Preissteigerung im Zähler und Nenner beurteilen.', String.raw`\text{Wenn } E \text{ und } P \text{ gleich stark steigen, muss } q \text{ nicht zunehmen.}`)
        ],
        'Eine nominale Abwertung garantiert keine reale Abwertung. Entscheidend ist, wie sich die Preisniveaus mitbewegen.'
      ),
      task(
        'Warum kann ein fixes Wechselkursregime gerade dann instabil werden, wenn die Marktteilnehmer nicht mehr an seine Verteidigung glauben?',
        [
          step('Erwartungen und Kapitalbewegungen verknüpfen.', String.raw`\text{Erwartete Abwertung } \Rightarrow \text{ Kapitalabzug } \Rightarrow \text{ Reservendruck}`),
          step('Glaubwürdigkeitsproblem benennen.', String.raw`\text{Die Erwartung macht die Verteidigung erst recht teuer.}`)
        ],
        'Bei fixen Kursen kann ein Vertrauensverlust selbstverstärkend werden: Die erwartete Abwertung setzt die Zentralbank unter Druck und erhöht die Wahrscheinlichkeit einer tatsächlichen Aufgabe des Kurses.'
      )
    ]
  },

  paritaeten: {
    motivation: 'UIP und Kaufkraftparität sind die zentralen Referenzbeziehungen der offenen Makroökonomik: die eine verbindet Zinsen und Erwartungen, die andere Preise und Wechselkurse.',
    theorie: [
      section(
        'Ungedeckte Zinsparität',
        `<p>UIP vergleicht die erwarteten Erträge aus inländischen und ausländischen Anlagen. Im Gleichgewicht müssen beide, gemessen in derselben Währung und unter Erwartungsbildung, gleich sein.</p>
         ${mathBlock(String.raw`$$i = i^* + \frac{E^e - E}{E}$$`)}
         <p>Ist der heutige Wechselkurs bereits hoch, ist die erwartete zukünftige Aufwertung des Auslands geringer; damit sinkt der erwartete Auslandsertrag.</p>`
      ),
      section(
        'Gesetz des einheitlichen Preises und Kaufkraftparität',
        `<p>Das Gesetz des einheitlichen Preises gilt für identische handelbare Güter ohne Transport- und Handelskosten. Kaufkraftparität verallgemeinert diese Idee auf Preisniveaus. Die absolute PPP lautet $E = P/P^*$, die relative PPP erklärt Wechselkursänderungen durch Inflationsdifferenzen.</p>`
      ),
      section(
        'Warum die Paritäten nicht immer exakt gelten',
        `<p>Transportkosten, Marktmacht, nicht-handelbare Güter und unterschiedliche Konsumkörbe verhindern einen permanent exakten Gleichlauf. In Prüfungen musst du deshalb unterscheiden: UIP und PPP sind Referenzbeziehungen, keine Naturgesetze ohne Friktionen.</p>
         ${warn('Prüfungsfalle:', 'UIP arbeitet mit Zinsen und erwarteter Wechselkursänderung; PPP arbeitet mit Preisniveaus oder Inflation. Wer beides vermischt, landet schnell beim falschen Vorzeichen.')}`
      )
    ].join(''),
    formeln: [
      { label: 'UIP', eq: String.raw`$$i = i^* + \frac{E^e - E}{E}$$`, desc: 'Inlandszins entspricht Auslandsertrag in Inlandswährung.' },
      { label: 'Absolute PPP', eq: String.raw`$$E = \frac{P}{P^*}$$`, desc: 'Preisniveauverhältnis bestimmt den nominalen Kurs.' },
      { label: 'Relative PPP', eq: String.raw`$$\frac{\Delta E}{E} \approx \pi - \pi^*$$`, desc: 'Inflationsdifferenz entspricht Abwertungsrate.' }
    ],
    aufgaben: [
      task(
        'Gegeben sind i = 4 %, i* = 2 % und ein erwarteter Kurs Eᵉ = 1,20. Was sagt UIP qualitativ über den heutigen Gleichgewichtskurs E?',
        [
          step('Höheren Inlandszins interpretieren.', String.raw`\text{Damit Home attraktiv bleibt, muss der Auslandsertrag entsprechend höher erwartet werden.}`),
          step('Daraus den heutigen Kurs ableiten.', String.raw`\text{Ein höherer heutiger E senkt } \frac{E^e - E}{E} \text{ und kann UIP erfüllen.}`)
        ],
        'Bei höherem Inlandszins muss der heutige Kurs so liegen, dass die erwartete Abwertung des Auslands bzw. Aufwertung des Inlandes den Zinsvorteil ausgleicht.'
      ),
      task(
        'Warum kann Kaufkraftparität langfristig nützlich, kurzfristig aber oft schlecht passend sein?',
        [
          step('Langfristigen Preisanker nennen.', String.raw`\text{Preisniveaus und Inflation wirken über längere Horizonte auf } E.`),
          step('Kurzfristige Friktionen ergänzen.', String.raw`\text{Finanzmärkte, Erwartungen, starre Preise und nicht-handelbare Güter verzerren kurzfristig.}`)
        ],
        'PPP ist ein langfristiger Referenzanker, aber kurzfristig dominieren oft Finanzmarktkräfte und Preisanpassungen laufen nicht sofort mit.'
      )
    ]
  },

  monetaerer_ansatz: {
    motivation: 'Der monetäre Ansatz verbindet Geldmenge, Inflation, Zinsen und Wechselkurs im langen Horizont. Er liefert die Langfristlogik hinter PPP, Fisher-Effekt und realer Zinsparität.',
    theorie: [
      section(
        'Geldmarkt und langfristiges Preisniveau',
        `<p>Wenn reale Geldnachfrage stabil ist, schlägt dauerhaft höheres Geldmengenwachstum in höherer Inflation nieder. In offenen Volkswirtschaften verbindet sich diese Logik mit der PPP: Wer langfristig schneller inflationiert, wertet nominal ab.</p>`
      ),
      section(
        'Fisher-Effekt und reale Zinsparität',
        `<p>Der Fisher-Effekt verbindet Nominalzins und erwartete Inflation:</p>
         ${mathBlock(String.raw`$$i \approx r + \pi^e$$`)}
         <p>Wenn Kapital international mobil ist und langfristig reale Renditen angeglichen werden, entsteht reale Zinsparität als weitere Langfristbeziehung.</p>`
      ),
      section(
        'Welche Aussagen wirklich langfristig sind',
        `<p>Die monetäre Logik ist kein Kurzfristmodell. Sie erklärt Trendbewegungen, nicht jede Tagesbewegung des Wechselkurses. In Klausuren musst du deshalb explizit sagen, dass Preise, Erwartungen und Geldnachfrage Zeit zur Anpassung brauchen.</p>
         ${warn('Horizontfehler:', 'Wenn du kurzfristige Wechselkurssprünge mit PPP allein erklärst, verwechselst du Langfrist- und Kurzfristlogik.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Fisher-Effekt', eq: String.raw`$$i \approx r + \pi^e$$`, desc: 'Nominalzins zerfällt in Realzins und erwartete Inflation.' },
      { label: 'Relative PPP', eq: String.raw`$$\Delta E/E \approx \pi - \pi^*$$`, desc: 'Inflationsdifferenz als langfristige Abwertungsrate.' },
      { label: 'Reale Zinsparität', eq: String.raw`$$r \approx r^*$$`, desc: 'Langfristige Angleichung realer Renditen.' }
    ],
    aufgaben: [
      task(
        'Home hat 6 % Geldmengenwachstum, 2 % reales Wachstum; Foreign 3 % Geldmengenwachstum, 2 % reales Wachstum. Welche langfristige Inflations- und Wechselkursdynamik erwartest du grob?',
        [
          step('Inflation als Geldmengenwachstum minus reales Wachstum annähern.', String.raw`\pi_H \approx 6 - 2 = 4,\quad \pi_F \approx 3 - 2 = 1`),
          step('Relative PPP anwenden.', String.raw`\Delta E/E \approx \pi_H - \pi_F \approx 3\%`)
        ],
        'Home inflationiert langfristig stärker und sollte nominal ungefähr um 3 % pro Periode abwerten.'
      ),
      task(
        'Warum steigt bei stabilen realen Renditen der Nominalzins in Hochinflationsländern typischerweise mit der Inflation?',
        [
          step('Fisher-Effekt aufspalten.', String.raw`i \approx r + \pi^e`),
          step('Realzins und Inflation getrennt interpretieren.', String.raw`\text{Wenn } r \text{ ähnlich bleibt und } \pi^e \uparrow,\text{ dann } i \uparrow`)
        ],
        'Weil Nominalzinsen die erwartete Inflation kompensieren müssen. Ein höheres Inflationsumfeld hebt deshalb den beobachteten Nominalzins.'
      )
    ]
  },

  overshooting: {
    motivation: 'Kurzfristig reagieren Wechselkurse oft viel stärker als Preisniveaus. Das Overshooting-Modell erklärt diese Überreaktion aus Finanzmarktgleichgewicht und trägen Güterpreisen.',
    theorie: [
      section(
        'Warum Wechselkurse springen, Preise aber nicht',
        `<p>Auf Finanzmärkten passen sich Vermögenspreise sofort an. Güterpreise sind kurzfristig träge. Nach einem monetären Schock muss der Wechselkurs deshalb oft mehr springen als langfristig nötig wäre, damit die erwartete spätere Gegenbewegung UIP-kompatibel bleibt.</p>`
      ),
      section(
        'Logik des Dornbusch-Modells',
        `<p>Eine expansive Geldpolitik senkt kurzfristig den Zins. Damit Kapital im Inland bleibt, muss eine künftige Aufwertung des Inlandes erwartet werden. Diese erwartete Gegenbewegung setzt voraus, dass der Wechselkurs heute zunächst <em>zu stark</em> abwertet.</p>
         <p>Genau diese anfängliche Überreaktion ist Overshooting.</p>`
      ),
      section(
        'Was du in Aufgaben wirklich sagen musst',
        `<p>Die Standardkette lautet: Geldschock → Zins fällt → Kapital will ins Ausland → Wechselkurs springt nach oben → späterer Rücklauf bei langsam ansteigendem Preisniveau. Wenn du nur „Geldmenge steigt, also Abwertung“ schreibst, fehlt die eigentliche Modelllogik.</p>
         ${warn('Kernfehler:', 'Overshooting ist keine bloße „starke Abwertung“, sondern eine Abwertung über das langfristige Niveau hinaus mit anschließendem Rücklauf.')}`
      )
    ].join(''),
    formeln: [
      { label: 'UIP-Logik', eq: String.raw`$$i = i^* + \frac{E^e - E}{E}$$`, desc: 'Niedrigerer Inlandszins verlangt erwartete Aufwertung des Inlandes.' },
      { label: 'Overshooting-Idee', eq: String.raw`$$E_{kurz} > E_{lang}$$`, desc: 'Kurzfristiger Kurs liegt über dem langfristigen Endwert.' }
    ],
    aufgaben: [
      task(
        'Warum muss der Wechselkurs nach einer expansiven Geldpolitik im Dornbusch-Modell zunächst stärker reagieren als langfristig nötig?',
        [
          step('Kurzfristigen Zinskanal nennen.', String.raw`\text{Mehr Geld } \Rightarrow i \downarrow`),
          step('UIP mit erwarteter Gegenbewegung verbinden.', String.raw`\text{Damit trotz } i \downarrow \text{ Gleichgewicht herrscht, braucht es erwartete spätere Aufwertung.}`),
          step('Daraus den zu starken Anfangssprung folgern.', String.raw`E_{kurz} > E_{lang}`)
        ],
        'Der Kurs muss kurzfristig über das langfristige Niveau hinausschießen, damit der erwartete spätere Rücklauf den niedrigeren Inlandszins ausgleicht.'
      ),
      task(
        'Weshalb ist Overshooting ein Kurzfristmodell und kein Widerspruch zur Kaufkraftparität?',
        [
          step('Preisrigidität betonen.', String.raw`\text{Kurzfristig sind Güterpreise träge.}`),
          step('Langfristigen Anker ergänzen.', String.raw`\text{Mit der Zeit passen Preise an und der Kurs nähert sich dem PPP-kompatiblen Langfristniveau.}`)
        ],
        'Overshooting erklärt den Übergangspfad. PPP bleibt der langfristige Bezugspunkt, nur eben nicht der kurzfristige.'
      )
    ]
  },

  trilemma: {
    motivation: 'Das Trilemma bündelt die offene Makroökonomik in einer prägnanten Einsicht: freie Kapitalmobilität, fixer Wechselkurs und autonome Geldpolitik sind nicht gleichzeitig vollständig erreichbar.',
    theorie: [
      section(
        'Die drei Ziele',
        `<p>Politisch attraktiv sind oft drei Dinge gleichzeitig: ein fester Wechselkurs, offene Kapitalmärkte und geldpolitische Autonomie. Das Trilemma besagt, dass nur zwei davon zugleich erreichbar sind.</p>
         <p>Ökonomisch folgt dies daraus, dass freie Kapitalbewegungen und ein fixer Kurs die Zinssetzung eng an das Ausland binden.</p>`
      ),
      section(
        'Regimekombinationen lesen',
        `<p>Fixkurs + Kapitalmobilität erzwingt Zinsanpassung an das Ausland. Fixkurs + autonome Geldpolitik geht nur mit Kapitalverkehrskontrollen. Kapitalmobilität + autonome Geldpolitik erfordert flexible Wechselkurse. Diese Matrix musst du in der Klausur schnell abrufen können.</p>`
      ),
      section(
        'Balassa-Samuelson als KKP-Korrektur',
        `<p>Balassa-Samuelson erklärt, warum reiche, produktive Länder dauerhaft höhere Preisniveaus und damit systematische Abweichungen von einfacher Kaufkraftparität haben können: Produktivitätsgewinne im handelbaren Sektor treiben Löhne und damit Preise im nicht-handelbaren Sektor.</p>
         ${warn('Merksatzfehler:', 'Das Trilemma ist kein politisches Motto, sondern eine harte Restriktion aus Kapitalmobilität, Zinsarbitrage und Wechselkursbindung.')}`
      )
    ].join(''),
    formeln: [
      { label: 'Trilemma', eq: String.raw`$$\{\text{Fixkurs},\ \text{Kapitalmobilität},\ \text{Geldpolitik}\} \Rightarrow \text{nur zwei zugleich}$$`, desc: 'Makropolitischer Zielkonflikt.' },
      { label: 'Balassa-Samuelson', eq: String.raw`$$A_T \uparrow \Rightarrow w \uparrow \Rightarrow P_N \uparrow \Rightarrow q \neq 1$$`, desc: 'Produktivität im handelbaren Sektor hebt relative Preise nicht-handelbarer Güter.' }
    ],
    aufgaben: [
      task(
        'Ein Land will den Wechselkurs festhalten und die Zinsen unabhängig vom Ausland setzen, obwohl Kapital völlig mobil bleibt. Warum ist das dauerhaft nicht stabil?',
        [
          step('Das unvereinbare Zielbündel benennen.', String.raw`\text{Fixkurs + Kapitalmobilität + autonome Geldpolitik}`),
          step('Arbitrage- und Kursdruck erklären.', String.raw`\text{Abweichende Zinsen erzeugen Kapitalflüsse und setzen den Fixkurs unter Druck.}`)
        ],
        'Bei freier Kapitalmobilität kann ein Fixkurs nur stabil bleiben, wenn die Zinspolitik im Wesentlichen dem Ausland folgt. Sonst entstehen sofort Spannungen am Devisenmarkt.'
      ),
      task(
        'Warum kann Balassa-Samuelson erklären, dass reiche Länder dauerhaft „zu teuer“ wirken, ohne dass die PPP deswegen nutzlos wäre?',
        [
          step('Handelbare und nicht-handelbare Sektoren trennen.', String.raw`\text{Produktivitätsschub im handelbaren Sektor hebt gesamtwirtschaftliche Löhne.}`),
          step('Preiswirkung im nicht-handelbaren Sektor ableiten.', String.raw`P_N \uparrow \Rightarrow \text{ höheres Gesamtpreisniveau } \Rightarrow \text{ systematische PPP-Abweichung}`)
        ],
        'PPP bleibt ein nützlicher Referenzanker, aber Balassa-Samuelson erklärt, warum strukturell produktivere Länder dauerhaft höhere Preisniveaus aufweisen können.'
      )
    ]
  }
};

