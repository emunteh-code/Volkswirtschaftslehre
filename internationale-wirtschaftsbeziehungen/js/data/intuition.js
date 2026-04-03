const mk = (core, analogy, bridge, exam) => ({ core, analogy, bridge, exam });

export const INTUITION = {
  handelsfakten: mk(
    'Die Einstiegsfolie des Fachs lautet: Nicht ein Modell erklärt den Welthandel, sondern verschiedene Muster brauchen verschiedene Mechanismen.',
    'Wenn du nur auf das Endergebnis schaust, sehen alle Kochrezepte gleich aus. Erst wenn du in die Küche gehst, siehst du, ob Geschmack von Gewürzen, Garmethode oder Zutaten kommt. Genau so unterscheiden sich Handelsmodelle.',
    'Der Kurs beginnt deshalb mit Fakten und Modellzuordnung, nicht sofort mit Politikurteilen.',
    [
      { if: 'Ähnliche Länder handeln ähnliche Güter', then: 'Denke an Skalenerträge und Produktvielfalt, nicht sofort an Ricardo.' },
      { if: 'Die Frage ist normativ', then: 'Trenne positive Erklärung von politischer Bewertung.' }
    ]
  ),
  ricardo: mk(
    'Ricardo sagt: Nicht wer absolut besser ist, sondern wer relativ weniger aufgibt, bestimmt die Handelsrichtung.',
    'Auch wenn eine Person im Team alles schneller kann, lohnt Spezialisierung, wenn ihr Zeitvorsprung bei einer Aufgabe besonders groß ist.',
    'Komparativer Vorteil ist die erste saubere Brücke von Produktivität zu Spezialisierung.',
    [
      { if: 'Arbeitskoeffizienten gegeben sind', then: 'Zuerst Opportunitätskosten ausrechnen, dann erst über Exportgüter sprechen.' },
      { if: 'Ein Land ist in allem besser', then: 'Nicht abbrechen: Gerade dann musst du relative Kosten statt absolute Vorteile prüfen.' }
    ]
  ),
  heckscher_ohlin: mk(
    'Heckscher-Ohlin verschiebt die Frage von Technologie zu Ausstattung: Länder exportieren, was ihren reichlichen Faktor intensiv nutzt.',
    'Ein Land mit viel Wald und wenig Arbeit exportiert leichter holzintensive Güter; ein arbeitsreiches Land eher arbeitsintensive Güter.',
    'Das Modell erklärt Handelsmuster und zugleich Verteilungskonflikte innerhalb eines Landes.',
    [
      { if: 'Von K/L und arbeits- oder kapitalintensiven Gütern die Rede ist', then: 'Du bist im H-O-Modell, nicht bei Ricardo.' },
      { if: 'Die Aufgabe nach Gewinnern und Verlierern fragt', then: 'Stolper-Samuelson ergänzen.' }
    ]
  ),
  krugman: mk(
    'Krugman erklärt, warum ähnliche Länder ähnliche Güter handeln: größere Märkte erlauben mehr Varianten zu niedrigeren Stückkosten.',
    'Ein größerer Stadtmarkt kann mehr Restaurants tragen. Niemand gewinnt dort nur wegen anderer Bodenschätze, sondern weil Größe Vielfalt und Skaleneffekte ermöglicht.',
    'Diese Logik macht intraindustriellen Handel und die Gravitationsgleichung verständlich.',
    [
      { if: 'Produktvielfalt oder ähnliche Länder auftauchen', then: 'An monopolistischen Wettbewerb und interne Skalenerträge denken.' },
      { if: 'Die Aufgabe fragt nach Datenmustern', then: 'Gravitation als empirische Kurzfassung ergänzen.' }
    ]
  ),
  tarifmodell: mk(
    'Der Zoll keilt einen Preisabstand zwischen Weltmarkt und Inland auf und verschiebt damit Produktion, Konsum und Wohlfahrt.',
    'Ein künstlich verteuertes Importgut funktioniert wie eine Eintrittsbarriere: weniger Käufer gehen hinein, inländische Anbieter bekommen Luft, aber irgendwer zahlt die Rechnung.',
    'Das Standarddiagramm trainiert die saubere Übersetzung von Preisänderung in Verteilungs- und Effizienzfolgen.',
    [
      { if: 'Kleines Land ausdrücklich genannt wird', then: 'Weltmarktpreis bleibt fix; kein Terms-of-Trade-Gewinn.' },
      { if: 'Flächen a,b,c,d beschrieben werden', then: 'Nicht nur Gewinner nennen, sondern Deadweight Loss explizit benennen.' }
    ]
  ),
  quoten_sanktionen: mk(
    'Quoten und Sanktionen können ähnlich wirken wie Zölle, aber sie verteilen Rente und politische Lasten anders.',
    'Zwei Türsteher können denselben Club gleich voll machen: Einer verlangt Eintritt, der andere vergibt nur wenige Karten. Für die Besucher ist das ähnlich, für die Kasse aber nicht.',
    'Darum ist die Quotenrente didaktisch der Schlüsseldifferenzpunkt zum Zoll.',
    [
      { if: 'Quote und Zoll verglichen werden', then: 'Immer fragen: Wer bekommt die Rente?' },
      { if: 'Sanktionen thematisiert werden', then: 'Nicht nur Preiswirkung, sondern Umleitung, Ersatzkanäle und Gegenmaßnahmen prüfen.' }
    ]
  ),
  wto_integration: mk(
    'Internationale Regeln sind ökonomisch wertvoll, weil sie Unsicherheit und Vergeltungsspiralen begrenzen.',
    'Ein Sportturnier funktioniert nur, wenn alle dieselben Regeln akzeptieren. Sonst diskutiert jede Mannschaft nach jedem Tor neu, was erlaubt ist.',
    'WTO, FTA und Zollunionen unterscheiden sich weniger durch Schlagworte als durch die Tiefe ihrer Marktintegration.',
    [
      { if: 'Binnenmarkt und Zollunion verwechselt werden', then: 'Gemeinsamen Außenzoll und nichttarifäre Integration sauber trennen.' },
      { if: 'Brexit vorkommt', then: 'Nicht nur auf Zölle schauen, sondern auf Grenzformalitäten und Regulierung.' }
    ]
  ),
  wechselkurssysteme: mk(
    'Offene Makro beginnt mit dem Preis des Geldes über Ländergrenzen hinweg: Wechselkursregime bestimmen, wo Anpassungslasten landen.',
    'Ein Stoßdämpfer im Auto kann den Schlag abfedern. Nimmst du ihn weg, landet der gleiche Schlag an anderer Stelle. Flexible Kurse sind so ein Stoßdämpfer.',
    'Darum ist die Unterscheidung zwischen nominalem und realem Wechselkurs sowie zwischen fixen und flexiblen Regimen grundlegend.',
    [
      { if: 'Wettbewerbsfähigkeit gefragt ist', then: 'Realen, nicht nur nominalen Wechselkurs betrachten.' },
      { if: 'Fixkurs verteidigt wird', then: 'Immer an Reserven, Glaubwürdigkeit und Zinsbindung denken.' }
    ]
  ),
  paritaeten: mk(
    'UIP verbindet Zinsen und Erwartungen, PPP verbindet Preise und Wechselkurse. Beide sind Referenzbeziehungen, aber für unterschiedliche Ebenen.',
    'Zwei Geldanlagen in verschiedenen Ländern sind wie zwei Umwege zum selben Ziel. Im Gleichgewicht darf keiner systematisch besser sein, wenn du Wechselkursänderungen mitbedenkst.',
    'Die Kunst besteht darin, Zinslogik und Preislogik nicht zu vermischen.',
    [
      { if: 'i, i* und E^e vorkommen', then: 'UIP anwenden.' },
      { if: 'Preisniveaus oder Inflation auftauchen', then: 'An absolute oder relative PPP denken.' }
    ]
  ),
  monetaerer_ansatz: mk(
    'Der monetäre Ansatz sagt: Langfristig spiegeln Wechselkurse Unterschiede in Geldmengenwachstum, Inflation und Zinssätzen.',
    'Wenn zwei Rolltreppen unterschiedlich schnell laufen, driftet ihr Abstand langfristig auseinander. Kurzfristig springen die Leute, langfristig ist die Rolltreppengeschwindigkeit entscheidend.',
    'Damit erklärt der monetäre Ansatz Trendbewegungen, nicht jede kurzfristige Volatilität.',
    [
      { if: 'Geldmengenwachstum und Inflation gegeben sind', then: 'Langfristige Abwertungsrate über relative PPP ableiten.' },
      { if: 'Nominalzins steigt mit Inflation', then: 'Fisher-Effekt explizit nennen.' }
    ]
  ),
  overshooting: mk(
    'Overshooting bedeutet: Der Wechselkurs reagiert kurzfristig stärker als langfristig nötig, weil Finanzmärkte sofort und Güterpreise träge reagieren.',
    'Ein Thermostat mit Verzögerung dreht zunächst zu weit, bevor sich die Raumtemperatur stabilisiert. Genau so schießt der Kurs über.',
    'Die Modellintuition lebt von der Kombination aus Zinsparität, Erwartungen und Preisrigidität.',
    [
      { if: 'Monetärer Schock und kurzfristiger Kurs gefragt sind', then: 'Erst Zinsreaktion, dann UIP, dann Overshoot-Kette formulieren.' },
      { if: 'Nur von „Abwertung“ die Rede ist', then: 'Den Rücklauf zum langfristigen Niveau explizit ergänzen.' }
    ]
  ),
  trilemma: mk(
    'Das Trilemma ist die harte Auswahlregel der offenen Makro: Drei attraktive Ziele, aber nur zwei lassen sich gleichzeitig voll halten.',
    'Du kannst im Flugzeug nicht gleichzeitig Fensterplatz, Gangplatz und komplette Bewegungsfreiheit haben. Zwei Wünsche gehen, der dritte fällt weg.',
    'Balassa-Samuelson ergänzt dann, warum selbst bei freiem Handel Preisniveaus systematisch auseinanderlaufen können.',
    [
      { if: 'Fixkurs und Kapitalmobilität gleichzeitig gewünscht werden', then: 'Geldpolitische Autonomie als Opfer nennen.' },
      { if: 'PPP scheinbar verletzt ist', then: 'Prüfen, ob Balassa-Samuelson strukturelle Preisniveauunterschiede erklärt.' }
    ]
  )
};

