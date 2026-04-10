const mk = (core, analogy, bridge, exam) => ({ core, analogy, bridge, exam });

export const INTUITION = {
  handelsfakten: mk(
    'GIWB startet mit der Frage, welches beobachtbare Handelsmuster überhaupt erklärt werden soll. Erst danach lohnt sich die Wahl eines Modells.',
    'Wenn du verschiedene Verkehrsstaus erklären willst, reicht nicht die Beobachtung „viele Autos“. Du musst wissen, ob der Engpass an der Ampel, an der Autobahn oder an der Baustelle liegt. Genau so funktionieren Handelsmodelle.',
    'Darum ist Handelsfaktenwissen kein Vorspann, sondern die Sortiermaschine für Ricardo, H-O, Krugman, Handelspolitik und offene Makro.',
    [
      { if: 'Die Aufgabe beschreibt nur Datenmuster', then: 'Noch kein Politikurteil fällen. Zuerst das Muster einem Mechanismus zuordnen.' },
      { if: 'Von ähnlichen Ländern und ähnlichen Gütern die Rede ist', then: 'Nicht reflexhaft Ricardo nennen, sondern an intraindustriellen Handel denken.' }
    ]
  ),
  ricardo: mk(
    'Ricardo fragt nicht „Wer ist insgesamt besser?“, sondern „Wer gibt relativ weniger vom anderen Gut auf?“',
    'Auch wenn eine Person im Team alles schneller kann, lohnt Arbeitsteilung, wenn ihr Vorsprung bei einer Aufgabe besonders groß ist. Handel ist dieselbe Logik in Länderform.',
    'Die sichere Prüfungskette lautet: Arbeitskoeffizienten → Opportunitätskosten → Handelsrichtung → Spezialisierung.',
    [
      { if: 'Ein Land ist in beiden Gütern absolut produktiver', then: 'Nicht abbrechen. Gerade dann musst du relative Verzichtskosten statt absoluter Stärke prüfen.' },
      { if: 'Die Aufgabe gibt nur Arbeitszeiten', then: 'Keine langen Worte: zuerst Opportunitätskosten ausrechnen.' }
    ]
  ),
  heckscher_ohlin: mk(
    'Heckscher-Ohlin verschiebt den Erklärungsfokus von Technologie auf Faktorausstattung.',
    'Wenn zwei Küchen dieselben Rezepte haben, aber eine viel mehr Ofenfläche und die andere viel mehr Arbeitskräfte, entstehen trotzdem unterschiedliche Spezialisierungen.',
    'Das Modell erklärt, welches Gut ein Land exportiert, wenn du sauber zwischen Faktorreichlichkeit der Länder und Faktorintensität der Güter trennst.',
    [
      { if: 'K/L oder arbeits- bzw. kapitalintensive Güter vorkommen', then: 'Du bist im H-O-Block, nicht bei Ricardo.' },
      { if: 'Die Aufgabe nur die Handelsrichtung wissen will', then: 'Verteilungsfolgen noch zurückhalten und erst im nächsten Schritt ergänzen.' }
    ]
  ),
  verteilung_handel: mk(
    'Stolper-Samuelson macht aus Handelstheorie Innenpolitik: Der gleiche Freihandelsprozess erzeugt Gewinner und Verlierer innerhalb eines Landes.',
    'Ein Konzert kann für die Arena als Ganzes profitabel sein und trotzdem die Menschen in den hinteren Reihen benachteiligen. Gesamtgewinn und Verteilung sind verschiedene Aussagen.',
    'Sobald nach Faktorpreisen, Globalisierungsverlierern oder politischem Widerstand gefragt wird, reicht H-O allein nicht; dann kommt die Verteilungsebene dazu.',
    [
      { if: 'Die Aufgabe fragt nach Gewinnern und Verlierern', then: 'Nicht bei Exportgütern stehen bleiben. Den reichlichen und den knappen Faktor explizit nennen.' },
      { if: 'Jemand sagt „Handel erhöht die Wohlfahrt, also gewinnen alle“', then: 'Genau dort Stolper-Samuelson als Gegenkorrektur einsetzen.' }
    ]
  ),
  krugman: mk(
    'Krugman erklärt Handel durch Marktgröße, Skalenerträge und Produktvielfalt statt durch große Länderunterschiede.',
    'Eine größere Innenstadt trägt mehr Cafés und Restaurants, obwohl die Menschen dort nicht grundsätzlich andere Grundbedürfnisse haben. Größe macht Vielfalt tragfähig.',
    'Der Mehrwert des Modells liegt darin, ähnliche Länder und intraindustriellen Handel erklärbar zu machen.',
    [
      { if: 'Die Aufgabe betont ähnliche Länder oder ähnliche Güter', then: 'Nicht H-O erzwingen. Frage nach Skalenerträgen und Varietät.' },
      { if: 'Von Fixkosten oder monopolistischem Wettbewerb die Rede ist', then: 'Die Krugman-Kette Marktgröße → AC sinkt → Vielfalt steigt aufrufen.' }
    ]
  ),
  gravitation: mk(
    'Die Gravitationsgleichung ist die datennahe Kurzfassung vieler Handelsmuster: große Volkswirtschaften handeln viel, Distanz bremst.',
    'Zwei große Städte erzeugen mehr Pendelverkehr als zwei kleine Dörfer, und lange Wege dämpfen ihn. Handelsströme folgen oft derselben Logik.',
    'Gravitation ersetzt kein Wohlfahrtsmodell, aber sie ist oft der schnellste Zugriff auf empirische Handelsfragen.',
    [
      { if: 'Nur Größe, Entfernung und Partnerstruktur beschrieben werden', then: 'Mit Gravitation starten, nicht sofort mit Zoll- oder Wohlfahrtsflächen.' },
      { if: 'Distanz klein wirkt, aber Handel trotzdem schwach ist', then: 'Denke Distanz weit: Transport, Information, Regulierung, Politik.' }
    ]
  ),
  tarifmodell: mk(
    'Der Zoll schafft einen Keil zwischen Weltmarkt und Inland und macht dadurch Preis-, Mengen- und Wohlfahrtswirkungen gleichzeitig sichtbar.',
    'Ein künstlicher Aufpreis vor dem Eingang verändert, wer hineingeht, wie viel verkauft wird und wer das Geld bekommt. Genau so wirkt der Zoll.',
    'Im Examen zählt die Dreifachlesart: Preis und Mengen, Verteilung im Inland, internationale Rückwirkung über die Terms of Trade.',
    [
      { if: 'Ein kleines Land ausdrücklich genannt ist', then: 'Den Weltmarktpreis als exogen festhalten; kein Terms-of-Trade-Gewinn.' },
      { if: 'Nur Gewinner aufgezählt werden', then: 'Immer auch Deadweight Loss und Nettoeffekt benennen.' }
    ]
  ),
  quoten_sanktionen: mk(
    'Quoten und Sanktionen können ähnliche Preiswirkungen wie Zölle erzeugen, aber sie verteilen Renten und politische Kosten anders.',
    'Zwei Sperren können denselben Stau erzeugen, aber wenn eine über Gebühren und die andere über begrenzte Zufahrtskarten arbeitet, landet das Geld an völlig verschiedenen Stellen.',
    'Die Kernfrage ist daher nicht nur „wird Import gebremst?“, sondern „wer bekommt die Rente und wie reagiert das Umfeld?“',
    [
      { if: 'Quote und Zoll denselben Inlandspreis erzeugen', then: 'Nicht aufhören. Jetzt ist die Rentenverteilung der Prüfstein.' },
      { if: 'Sanktionen diskutiert werden', then: 'Auch Umleitung, Ersatzkanäle und Gegenmaßnahmen explizit mitdenken.' }
    ]
  ),
  wto_integration: mk(
    'Institutionen sind in GIWB keine Randfolie, sondern das Gegenmittel gegen Vergeltung, Unsicherheit und Handelsumlenkung.',
    'Ein Ligabetrieb funktioniert nur, wenn fouls, Tabellen und Einsprüche geregelt sind. Sonst verhandelt jede Mannschaft bei jedem Spiel die Regeln neu.',
    'WTO, FTA, Zollunion und Brexit musst du deshalb als Ordnungsformen lesen, nicht nur als Schlagworte.',
    [
      { if: 'Binnenmarkt, FTA und Zollunion vermischt werden', then: 'Gemeinsamen Außenzoll und Tiefe der Integration explizit trennen.' },
      { if: 'Brexit vorkommt', then: 'Nicht bei Zöllen stehen bleiben; Regulierung und Grenzfriktionen sind zentral.' }
    ]
  ),
  wechselkurssysteme: mk(
    'Offene Makro beginnt mit der Leserichtung des Wechselkurses: Wer trägt den Schock, der Kurs oder die Binnenwirtschaft?',
    'Ein Stoßdämpfer kann den Schlag abfedern. Wenn du ihn blockierst, landet dieselbe Erschütterung an anderer Stelle. Flexible Kurse sind genau dieser Stoßdämpfer.',
    'Nominaler Kurs, realer Kurs und Regimewahl sind deshalb die Pflichtvokabeln vor PPP, UIP, Overshooting und Trilemma.',
    [
      { if: 'Wettbewerbsfähigkeit gefragt ist', then: 'Zum realen Wechselkurs wechseln; der nominale allein reicht nicht.' },
      { if: 'Ein Fixkurs verteidigt wird', then: 'Sofort an Reserven, Zinsbindung und Glaubwürdigkeit denken.' }
    ]
  ),
  zinsparitaet: mk(
    'Zinsparität ist Renditelogik: Sie verbindet Zinssätze mit erwarteten Wechselkursänderungen, nicht mit Preisniveaus.',
    'Zwei Geldanlagen mit verschiedenen Zinsschildern sind nur dann gleich attraktiv, wenn der Wechselkurs die Differenz ausgleicht. Sonst gäbe es Arbitrage.',
    'UIP/CIP sind deshalb die Brücke von Finanzmarktgleichgewicht zu kurzfristiger Wechselkursdynamik.',
    [
      { if: 'i, i* und ein erwarteter oder Termin-Kurs auftauchen', then: 'Du bist in der Zinsparität, nicht in PPP.' },
      { if: 'Vorzeichen unsicher werden', then: 'Die Wechselkursnotation zuerst sauber fixieren, erst dann interpretieren.' }
    ]
  ),
  kaufkraftparitaet: mk(
    'Kaufkraftparität ist Preislogik: Wechselkurse werden langfristig an Preisniveaus und Inflationsdifferenzen gebunden.',
    'Wenn derselbe Warenkorb in zwei Läden dauerhaft unterschiedlich teuer wäre und man ihn problemlos hin- und herschieben könnte, entstünde sofort Arbitrage. PPP verallgemeinert genau diese Idee.',
    'Die Modellkunst besteht darin, PPP als langfristigen Referenzanker zu lesen, ohne daraus eine Tageskursformel zu machen.',
    [
      { if: 'Preisniveaus, Inflation oder reale Kurse im Zentrum stehen', then: 'PPP/LOP sind der erste Zugriff.' },
      { if: 'Nur Tages- oder Krisenschwankungen erklärt werden sollen', then: 'PPP nicht überdehnen; dann sind Finanzmarktmodelle meist näher.' }
    ]
  ),
  monetaerer_ansatz: mk(
    'Der monetäre Ansatz verbindet Geldmarkt, Inflation, Nominalzins und Wechselkurs im langen Horizont.',
    'Wenn zwei Rolltreppen dauerhaft unterschiedlich schnell laufen, driftet ihr Abstand mit der Zeit systematisch auseinander. Kurzfristige Sprünge sind etwas anderes.',
    'Deshalb ist der monetäre Ansatz die Trendlogik hinter PPP, Fisher-Effekt und realer Zinsparität, nicht das Modell für jede Tagesbewegung.',
    [
      { if: 'Geldmengenwachstum und Inflation gegeben sind', then: 'Langfristige Abwertungsrate über Inflationsdifferenzen aufziehen.' },
      { if: 'Nominalzins steigt mit Inflation', then: 'Den Fisher-Effekt explizit nennen, nicht nur das Ergebnis hinschreiben.' }
    ]
  ),
  overshooting: mk(
    'Overshooting ist die saubere Kurzfristbrücke: Finanzmärkte springen sofort, Güterpreise nur langsam.',
    'Ein Thermostat mit Verzögerung dreht erst zu weit, bevor sich die Raumtemperatur einpendelt. Genau dieses Überziehen steckt im Wechselkurs.',
    'Der Prüfungswert des Modells liegt darin, den Anfangssprung und den späteren Rücklauf gemeinsam zu erklären.',
    [
      { if: 'Ein monetärer Schock und ein kurzfristiger Kurs gefragt sind', then: 'Zinsreaktion → UIP → Overshoot → späterer Rücklauf als Kette formulieren.' },
      { if: 'Nur „Abwertung“ gesagt wird', then: 'Den Overshoot-Teil ergänzen: über das langfristige Niveau hinaus und danach zurück.' }
    ]
  ),
  trilemma: mk(
    'Das Trilemma ist die harte Auswahlregel der offenen Makro: Drei politisch attraktive Ziele, aber nur zwei passen gleichzeitig zusammen.',
    'Du kannst in einem Flugzeug nicht gleichzeitig Fensterplatz, Gangplatz und unendliche Bewegungsfreiheit haben. Zwei Wünsche gehen, der dritte fällt heraus.',
    'Der Fixkursfall mit Kapitalmobilität ist die sichtbarste Illustration dieser Restriktion, weil dort die Zinsautonomie direkt verschwindet.',
    [
      { if: 'Fixkurs und Kapitalmobilität gleichzeitig gesetzt sind', then: 'Geldpolitische Autonomie als Opfer nennen.' },
      { if: 'Eine Regimefrage unscharf bleibt', then: 'Die Dreiermatrix explizit durchgehen: Welche zwei Ziele werden gehalten, welches fällt weg?' }
    ]
  ),
  balassa_samuelson: mk(
    'Balassa-Samuelson erklärt, warum produktive Länder systematisch teurer wirken können, ohne dass dies bloß Fehlbewertung sein muss.',
    'Wenn in einer Stadt die exportstarken Tech-Firmen die Löhne nach oben ziehen, werden auch Haarschnitte und Mieten teurer, obwohl dort keine Tech-Revolution stattfindet.',
    'Das Modell ergänzt PPP um eine strukturelle Preisniveau- und reale Aufwertungslogik.',
    [
      { if: 'Produktivität, Löhne und nicht-handelbare Güter im Zentrum stehen', then: 'Balassa-Samuelson statt Overshooting oder einfacher PPP wählen.' },
      { if: 'PPP scheinbar „verletzt“ ist', then: 'Prüfen, ob die Abweichung strukturell durch Produktivität und relative Preise erklärt werden kann.' }
    ]
  )
};
