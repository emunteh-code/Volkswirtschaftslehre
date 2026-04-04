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
  kapitalmarkt_institutionen: mk(
    'Kapitalmärkte machen Zeit tauschbar, Institutionen machen diesen Tausch in unvollkommenen Märkten erst praktikabel.',
    'Wie auf einem großen Marktplatz braucht es Preise für Zeit und zugleich Vermittler, wenn Informationen ungleich verteilt sind.',
    'Präferenzen, Marktpreise und Friktionen bilden zusammen die moderne Finanzierungssicht.',
    [
      { if: 'Vollkommener Markt unterstellt wird', then: 'Prüfe, welche Vereinfachungen dadurch entstehen.' },
      { if: 'Banken genannt werden', then: 'Erkläre ihre Rolle über Marktfriktionen und Information.' }
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
    'Kapitalwert- und Endwertmethode sind zwei Blickrichtungen auf dieselbe Zahlungsreihe.',
    'Wie zwei Karten desselben Geländes zeigen sie denselben Weg, aber mit anderem Startpunkt.',
    'Der vollständige Finanzplan macht sichtbar, dass Investitionsrechnung immer auch Finanzierung über die Zeit bedeutet.',
    [
      { if: 'Kapitalwert und Endwert gegeneinander ausgespielt werden', then: 'Betone ihre methodische Äquivalenz.' },
      { if: 'Regelmäßige Zahlungen auftreten', then: 'Denke an Rentenfaktoren statt jede Periode neu auszurechnen.' }
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
    'Unter Unsicherheit zählt nicht nur der Mittelwert, sondern auch die Verteilung der möglichen Ergebnisse.',
    'Wie bei zwei Wegen mit gleichem Durchschnittsnutzen, aber unterschiedlicher Absturzgefahr muss die Risikoform mitgelesen werden.',
    'Dominanz, Erwartungswert und Risikokorrektur bilden deshalb eine feste Prüfungsreihenfolge.',
    [
      { if: 'Eine Alternative in jedem Zustand schlechter ist', then: 'Dominanz prüfen und früh ausscheiden.' },
      { if: 'Nur der Erwartungswert genannt wird', then: 'Verlustwahrscheinlichkeit und Risikoform mitprüfen.' }
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
  kapitalkosten: mk(
    'Kapitalkosten sind Opportunitätskosten der Mittelüberlassung, nicht bloß Bankzinsen oder Börsendaten.',
    'Wie bei Mietkosten für Kapital zählt, welchen Preis Eigen- und Fremdkapitalgeber für ihre Mittel verlangen.',
    'Darum verbindet das Kapitel Aktienbewertung, Kreditzins und Skonto in einer gemeinsamen Kostenlogik.',
    [
      { if: 'Skonto vorkommt', then: 'Denke an implizite Fremdkapitalkosten statt an bloßen Preisnachlass.' },
      { if: 'Aktienpreis und Dividenden genannt werden', then: 'Lies daraus die Eigenkapitalkosten ab.' }
    ]
  ),
  kapitalstruktur: mk(
    'Kapitalstruktur ist die Kunst, billigeres Kapital nicht mit kostenlosem Risiko zu verwechseln.',
    'Wie ein längerer Hebel macht mehr Verschuldung Bewegungen größer – nach oben und nach unten.',
    'WACC, Leverage und Modigliani-Miller sind deshalb nur gemeinsam wirklich verständlich.',
    [
      { if: 'Fremdkapitalanteil steigt', then: 'Prüfe Ertragseffekt und Risikoeffekt zugleich.' },
      { if: 'WACC fällt', then: 'Frage trotzdem, ob die Eigenkapitalkosten oder Insolvenzsorgen mitsteigen.' }
    ]
  )
};
