const mk = (core, analogy, bridge, exam) => ({ core, analogy, bridge, exam });

export const INTUITION = {
  finanz_denkweise: mk(
    'Finanzwirtschaft ist Entscheidungslogik über Zahlungsströme, Zeit und Risiko.',
    'Wie bei einer langen Reiseplanung zählt nicht nur das Ziel, sondern wann Geld gebraucht wird, welche Reserven verfügbar sind und welche Route riskanter ist.',
    'Darum beginnt jede gute Lösung mit Zahlungsreihe, Zeitpunkt und Entscheidungskriterium.',
    [
      { if: 'Ein Projekt „gut aussieht“', then: 'Frage zuerst nach Liquidität, Vermögenswirkung und Risiko.' },
      { if: 'Mehrere Kennzahlen vorkommen', then: 'Bestimme zuerst, welche davon wirklich die Entscheidung trägt.' }
    ]
  ),
  liquiditaetsplanung: mk(
    'Liquidität misst, ob Mittel zum richtigen Zeitpunkt verfügbar sind, nicht nur ob ein Projekt langfristig positiv endet.',
    'Wie bei einem Marathon reichen gute Schlusszeiten nicht, wenn man unterwegs verdurstet.',
    'Kumulierte Zahlungsreihen und Fristenkongruenz sind deshalb die natürliche Startlogik dieses Kapitels.',
    [
      { if: 'Zwischenzeitliche Zahlungsdefizite auftauchen', then: 'Suche sofort den maximalen Kapitalbedarf.' },
      { if: 'Langfristige Bindung kurzfristig finanziert wird', then: 'Denke an Refinanzierungsrisiko.' }
    ]
  ),
  kapitalmarkt_bewertung: mk(
    'Kapitalmärkte machen Zeit über Preise und Renditen vergleichbar.',
    'Wie auf einem Marktplatz liefert der Preis die gemeinsame Sprache, um heutige und künftige Ansprüche zu tauschen.',
    'Kapitalmarktorientierung übersetzt Zahlungsströme in vergleichbare Bewertungsurteile.',
    [
      { if: 'Vollkommener Markt unterstellt wird', then: 'Prüfe, welche Vereinfachungen dadurch entstehen.' },
      { if: 'Zins oder Rendite genannt werden', then: 'Lies sie als Preis des Zeittauschs und als Bewertungsmaßstab.' }
    ]
  ),
  institutionen_marktunvollkommenheit: mk(
    'Institutionen werden relevant, weil reale Märkte unvollkommen sind.',
    'Wie bei einem Marktplatz mit Informationslücken braucht es Vermittler und Regeln, damit Tausch überhaupt zuverlässig funktioniert.',
    'Institutionenorientierung ergänzt die Preislogik um Friktionen, Überwachung und Transaktionskosten.',
    [
      { if: 'Banken genannt werden', then: 'Erkläre ihre Rolle über Marktfriktionen und Information.' },
      { if: 'Vollkommener Markt als Vergleich auftaucht', then: 'Nutze ihn als Benchmark, nicht als Realitätsbeschreibung.' }
    ]
  ),
  intertemporale_wahl: mk(
    'Sparen und Kreditaufnahme sind nur zwei Richtungen desselben Tauschs zwischen heute und morgen.',
    'Wie auf einer Wippe zwischen Gegenwart und Zukunft bestimmt der Zins die Neigung, die Präferenz den Gleichgewichtspunkt.',
    'Die Budgetgerade ist deshalb ein echtes Finanzierungsdiagramm und keine reine Formskizze.',
    [
      { if: 'Links vom Ausstattungspunkt gewählt wird', then: 'Das ist Sparen bzw. Geldanlage.' },
      { if: 'Rechts vom Ausstattungspunkt gewählt wird', then: 'Das ist Kreditaufnahme gegen spätere Rückzahlung.' }
    ]
  ),
  kapitalwert_fisher: mk(
    'Der Kapitalwert fragt, wie viel Vermögen nach korrektem Zeitvergleich zusätzlich übrig bleibt.',
    'Wie bei zwei Investitionswegen entscheidet nicht die schönere Story, sondern welcher Weg nach Finanzierung tatsächlich mehr Nettovermögen schafft.',
    'Fisher trennt wertmaximierende Investition und individuellen Konsum nur unter passenden Marktannahmen.',
    [
      { if: 'Kapitalwert positiv ist', then: 'Das Projekt schlägt die Kapitalmarktalternative.' },
      { if: 'Soll- und Habenzins auseinanderfallen', then: 'Die Fisher-Separation verliert ihre saubere Trennung.' }
    ]
  ),
  auf_abzinsen: mk(
    'Auf- und Abzinsung sind Richtungen derselben Zeitwertübersetzung.',
    'Wie beim Übersetzen eines Textes in die Vergangenheit oder Zukunft bleibt der Inhalt derselbe, nur der Bezugspunkt ändert sich.',
    'Eine saubere Zeitachse schützt vor fast allen Standardfehlern dieses Kapitels.',
    [
      { if: 'Der Zielzeitpunkt unklar ist', then: 'Keine Formel, sondern zuerst die Zeitachse.' },
      { if: 'Variierende Zinssätze vorkommen', then: 'Periodenweise transformieren statt pauschal rechnen.' }
    ]
  ),
  renten_endwert: mk(
    'Rentenfaktoren, Barwert und Endwert sind verschiedene Übersetzungen derselben periodischen Zahlungsstruktur.',
    'Wie zwei Ansichten auf denselben Geldstrom zeigen Barwert und Endwert denselben Vermögenseffekt nur an unterschiedlichen Zeitpunkten.',
    'Die erste Klausurfrage lautet hier nicht „welche Formel kenne ich?“, sondern: Welche Zahlungsstruktur liegt vor und auf welchen Zeitpunkt soll ich bewerten?',
    [
      { if: 'Regelmäßige Zahlungen auftreten', then: 'Prüfe zuerst, ob Barwert oder Endwert gesucht ist und nutze dann den passenden Rentenfaktor.' },
      { if: 'Barwert und Endwert verglichen werden', then: 'Betone ihre Äquivalenz bei gleichem Zinssatz.' }
    ]
  ),
  annuitaeten_finanzplan: mk(
    'Die Annuität macht einen Gesamtwert als konstante Periodengröße lesbar; der vollständige Finanzplan zeigt dazu die periodische Finanzierungslogik.',
    'Wie eine große Einmalwirkung in gleich hohe Jahresraten übersetzt wird, macht die Annuität den Vermögenseffekt „in Raten“ sichtbar.',
    'Annuitäten helfen besonders dann, wenn Projekte oder Finanzierungsformen über Perioden vergleichbar gemacht werden sollen.',
    [
      { if: 'Gleiche periodische Vergleichsgröße gesucht ist', then: 'Denke an die Annuität als Übersetzung des Kapitalwerts.' },
      { if: 'Zwischenperioden und Restkredite sichtbar werden sollen', then: 'Nutze die Logik des vollständigen Finanzplans.' }
    ]
  ),
  izf_kapitalwertfunktion: mk(
    'Der IZF ist keine freie Renditezahl, sondern die Nullstelle der Kapitalwertfunktion.',
    'Wie ein Thermometer zeigt er die Schwelle, an der das Projekt gerade weder wärmt noch kühlt – das Urteil entsteht erst im Vergleich zur Umgebung.',
    'Darum gehören IZF, Kapitalwertprofil und Vergleichszins immer zusammen.',
    [
      { if: 'Der Marktzins unter dem IZF liegt', then: 'Der Kapitalwert ist positiv.' },
      { if: 'Nur eine Prozentzahl genannt wird', then: 'Frage nach dem zugehörigen Vergleichszins und Kapitalwertprofil.' }
    ]
  ),
  izf_grenzen: mk(
    'Gerade der anschauliche IZF braucht kritische Einordnung, sobald Wiederanlage, Skalierung oder Mehrdeutigkeit ins Spiel kommen.',
    'Wie bei einem Ranking mit Prozentwerten kann ein kleiner, scharfer Gewinner weniger Gesamtwert schaffen als ein größerer, solider Zweiter.',
    'Der Kapitalwert bleibt deshalb die robuste Referenzgröße bei Vermögensmaximierung.',
    [
      { if: 'Mehrere Vorzeichenwechsel auftreten', then: 'Rechne mit möglicher Mehrdeutigkeit des IZF.' },
      { if: 'Zwei Projekte unterschiedlich groß sind', then: 'Spiegle die Rendite immer am Kapitalwert.' }
    ]
  ),
  unsicherheit: mk(
    'Unter Unsicherheit zählt nicht nur der Mittelwert, sondern zuerst die Zustandsstruktur und die Frage, ob eine Alternative bereits dominiert wird.',
    'Wie bei zwei Wegen mit gleichem Durchschnitt, aber anderer Absturzgefahr muss nicht nur der Mittelwert, sondern die Verlustseite gelesen werden.',
    'Dominanz, Erwartungswert und Risikomaße bilden hier die feste Vorauswahllogik.',
    [
      { if: 'Eine Alternative in jedem Zustand schlechter ist', then: 'Dominanz prüfen und früh ausscheiden.' },
      { if: 'Nur der Erwartungswert genannt wird', then: 'Verlustwahrscheinlichkeit, Varianz und Downside mitprüfen.' }
    ]
  ),
  risikoadjustierter_kapitalwert: mk(
    'Risiko muss wieder in eine Vermögensregel übersetzt werden: entweder über den Diskontsatz oder über Abschläge auf die erwarteten Cashflows.',
    'Wie ein Sicherheitsabstand beim Planen wird derselbe erwartete Rückfluss vorsichtiger bewertet, wenn sein Eintreten unsicher ist.',
    'Die zentrale Klausurfrage lautet: Wo genau modellierst du das Risiko – im Zins oder in den Cashflows?',
    [
      { if: 'Ein Risikozuschlag im Zins verwendet wird', then: 'Erkläre, dass riskantere Zahlungen stärker abgezinst werden.' },
      { if: 'Cashflow-Abschläge verwendet werden', then: 'Mache klar, dass Risiko direkt auf der Zahlungsseite abgebildet wird.' }
    ]
  ),
  bezugsrecht: mk(
    'Das Bezugsrecht schützt Altaktionäre gegen Verwässerung bei der Kapitalerhöhung.',
    'Wie ein Gutschein beim vergünstigten Nachkauf sorgt es dafür, dass alte Eigentümer trotz neuer, billigerer Anteile wirtschaftlich nicht benachteiligt werden.',
    'Ex-Kurs und Bezugsrecht gehören daher immer in dieselbe Antwort.',
    [
      { if: 'Ein niedriger Emissionskurs irritiert', then: 'Berechne Ex-Kurs und Bezugsrechtswert gemeinsam.' },
      { if: 'Altaktionäre verglichen werden', then: 'Sprich über Verwässerungsschutz, nicht nur über neue Mittelzufuhr.' }
    ]
  ),
  eigenkapitalkosten: mk(
    'Eigenkapitalkosten sind die von Eigentümern geforderte Rendite auf bereitgestelltes Kapital.',
    'Wie ein Anspruch auf Mindestverzinsung spiegeln sie wider, welchen Ertrag Investoren für Risikoübernahme erwarten.',
    'Aus Aktienpreis und erwarteten Ausschüttungen wird die geforderte Eigenkapitalrendite abgeleitet.',
    [
      { if: 'Aktienpreis und Dividenden genannt werden', then: 'Lies daraus die Eigenkapitalkosten ab.' }
    ]
  ),
  fremdkapitalkosten: mk(
    'Fremdkapitalkosten erfassen den effektiven Preis der Kreditnutzung, nicht nur den Nominalzins.',
    'Wie ein scheinbar kleiner Aufschlag können Zahlungsziele, Skonto und Gebühren im Effekt sehr teuer werden.',
    'Die ökonomisch relevante Größe ist der Kostensatz der konkreten Finanzierungszahlungsreihe.',
    [
      { if: 'Skonto vorkommt', then: 'Denke an implizite Fremdkapitalkosten statt an bloßen Preisnachlass.' },
      { if: 'Nominalzins genannt wird', then: 'Prüfe, ob effektive Kosten durch Fristen und Zusatzkosten höher liegen.' }
    ]
  ),
  wacc: mk(
    'Der WACC ist der aggregierte Preis der Finanzierungsmischung und nur dann sinnvoll, wenn Risiko und Kapitalstruktur zur Aufgabe passen.',
    'Wie ein Mischpreis sagt der WACC nicht nur etwas über Gewichte, sondern auch über die Qualität der zugrunde liegenden Teilkosten.',
    'In Klausuren ist der WACC kein Automatismus, sondern eine Begründungsgröße mit Voraussetzungen.',
    [
      { if: 'Ein WACC eingesetzt wird', then: 'Prüfe, ob Projekt- und Kapitalstrukturrisiko dazu passen.' },
      { if: 'EK- und FK-Kosten vorher gegeben sind', then: 'Lies erst deren Bedeutung, dann den gewichteten Durchschnitt.' }
    ]
  ),
  wacc_leverage: mk(
    'WACC und Leverage zeigen gemeinsam, wie Finanzierungsmix Ertrag und Risiko verändert.',
    'Wie ein längerer Hebel macht mehr Verschuldung Bewegungen größer – nach oben und nach unten.',
    'Die Kernaussage ist die Doppelwirkung: potenziell höhere EK-Rendite bei höherem EK-Risiko.',
    [
      { if: 'Fremdkapitalanteil steigt', then: 'Prüfe Ertragseffekt und Risikoeffekt zugleich.' },
      { if: 'WACC fällt', then: 'Frage trotzdem, ob die Eigenkapitalkosten oder Insolvenzsorgen mitsteigen.' }
    ]
  ),
  modigliani_miller: mk(
    'Modigliani-Miller ist ein Benchmark für die Frage, wann Kapitalstruktur wertneutral wäre.',
    'Wie ein Nullmodell zeigt es, was ohne Friktionen gelten würde und macht dadurch reale Abweichungen sichtbar.',
    'Gerade weil die Annahmen streng sind, hilft MM beim systematischen Identifizieren realer Werttreiber.',
    [
      { if: 'MM erwähnt wird', then: 'Ordne es als Benchmark unter starken Annahmen ein.' },
      { if: 'Reale Märkte diskutiert werden', then: 'Nenne Friktionen wie Steuern, Insolvenzkosten und Informationsasymmetrien.' }
    ]
  )
};
