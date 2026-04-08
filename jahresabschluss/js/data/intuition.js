const mk = (core, analogy, bridge, exam) => ({ core, analogy, bridge, exam });

export const INTUITION = {
  rechnungswesen_intro: mk(
    'Bilanz und GuV sind zwei Perspektiven auf denselben Betrieb: Die Bilanz zeigt den Zustand, die GuV erklärt die Veränderung.',
    'Wie bei einem Unternehmen als Filmset ist die Bilanz das Standbild am Jahresende, die GuV die Schnittfolge aller erfolgswirksamen Szenen.',
    'Deshalb musst du in Klausuren immer fragen, ob ein Vorgang eher Bestandswirkung, Erfolgswirkung oder beides hat.',
    [
      { if: 'Nur der Endbestand gefragt wird', then: 'Bilanzlogik zuerst sauber aufspannen.' },
      { if: 'Die Erfolgsentstehung erklärt werden soll', then: 'GuV und Eigenkapitalveränderung verbinden.' }
    ]
  ),
  gob_rechtsgrundlagen: mk(
    'GoB und Rechtsgrundlagen setzen den normativen Rahmen dafür, welche Abschlussaussagen zulässig und vorsichtig sind.',
    'Wie bei Spielregeln in einem Turnier zählen nicht nur Punkte, sondern auch die verbindlichen Regeln, nach denen gewertet wird.',
    'Deshalb beginnt eine saubere Lösung mit dem Prinzipbezug (z.B. Realisation/Imparität), bevor Einzelfragen gerechnet werden.',
    [
      { if: 'Ein Bilanzierungsproblem begründet werden soll', then: 'GoB und Rechtsgrundlage explizit als Maßstab nennen.' },
      { if: 'Vorsichtsprinzip genannt wird', then: 'Realisations- und Imparitätslogik ausdrücklich ansprechen.' }
    ]
  ),
  inventur_inventar_bilanzansatz: mk(
    'Inventur, Inventar und Bilanzansatz bilden die methodische Eingangsschleuse zur Bilanz.',
    'Wie bei einer Lagerprüfung werden erst die Bestände erhoben, dann geordnet und erst danach in die Abschlussstruktur überführt.',
    'Darum gilt in Klausuren: erst Ansatz klären, dann bewerten.',
    [
      { if: 'Ein Posten mit Zahl genannt wird', then: 'Zuerst Bilanzierungsfähigkeit prüfen, nicht direkt rechnen.' },
      { if: 'Inventur und Bilanz verwechselt werden', then: 'Inventur als Erhebung und Bilanz als Verdichtung trennen.' }
    ]
  ),
  buchen_konten: mk(
    'Buchungssätze sind keine Merksätze für Soll und Haben, sondern die sichtbare Übersetzung der Bilanzlogik.',
    'Jeder Geschäftsvorfall ist wie ein Türöffner, der immer mindestens zwei Räume gleichzeitig bewegt: einen Zugang hier, einen Abgang oder Zugang dort.',
    'Wenn du Kontenart und Bewegungsrichtung sauber erkennst, ergibt sich der Buchungssatz fast automatisch.',
    [
      { if: 'Ein Aktivkonto zunimmt', then: 'Der Zugang steht im Soll.' },
      { if: 'Ein Erfolgsvorgang auftaucht', then: 'Immer den Eigenkapitalbezug im Hintergrund mitdenken.' }
    ]
  ),
  buchfuehrung_orga: mk(
    'Ordnungsmäßige Buchführung ist mehr als richtige Kontierung: Sie muss auch dokumentierbar, prüfbar und rekonstruierbar sein.',
    'Wie in einer gut geführten Kanzlei reicht nicht der richtige Fallausgang; jeder Schritt muss über Akte, Beleg und Register nachvollziehbar bleiben.',
    'Darum spielen Grundbuch, Hauptbuch, Nebenbücher und das Belegprinzip in der Prüfung eine eigene Rolle.',
    [
      { if: 'Nach der Funktion eines Buchs gefragt wird', then: 'Chronologie und Systematik sauber trennen.' },
      { if: 'Ordnungsmäßigkeit geprüft wird', then: 'Belegprinzip ausdrücklich erwähnen.' }
    ]
  ),
  anlagevermoegen: mk(
    'Anlagevermögen bindet Werte langfristig und macht Abschreibungen zur Verbindung von Bilanz und Erfolg.',
    'Eine Maschine wird nicht in einem Jahr „verbraucht“, sondern über viele Jahre in kleinen Erfolgsscheiben abgetragen.',
    'Darum musst du lineare AfA, außerplanmäßige Abschreibung und Zuschreibung als drei verschiedene Bewertungslogiken unterscheiden.',
    [
      { if: 'Nutzungsdauer gegeben ist', then: 'Planmäßige Abschreibung zuerst prüfen.' },
      { if: 'Dauerhafte Wertminderung auftritt', then: 'Außerplanmäßige Abschreibung gesondert würdigen.' }
    ]
  ),
  umlauf_bewertung_verfahren: mk(
    'Beim Umlaufvermögen entscheidet die Bewertungsmethode direkt über Aufwand, Endbestand und damit den Gewinn.',
    'Wenn du im Lager zuerst alte oder neue Chargen „gedanklich verbrauchst“, ändert sich sofort, was am Ende noch mit welchem Wert im Regal liegt.',
    'FIFO, Durchschnittsmethode und Niederstwertprinzip sind deshalb keine isolierten Regeln, sondern greifen gemeinsam in den Abschluss ein.',
    [
      { if: 'Ein Verbrauchsfolgeverfahren genannt wird', then: 'Immer auch den Effekt auf Endbestand und Aufwand benennen.' },
      { if: 'Der Stichtagswert unter den AK liegt', then: 'Strenges Niederstwertprinzip anwenden.' }
    ]
  ),
  werkstoffe_erzeugnisse_buchungen: mk(
    'Werkstoff- und Erzeugnisbuchungen übersetzen Materialfluss in Bestands- und Erfolgswirkung.',
    'Wie bei einer Produktionslinie muss jeder Entnahmeschritt entweder laufend erfasst oder am Ende über den Bestandvergleich sauber rekonstruiert werden.',
    'Deshalb werden Verbrauchsermittlung, Bestandsveränderung und GuV-Abschluss als zusammenhängende Kette geprüft.',
    [
      { if: 'Fortschreibungs- und Inventurmethode verglichen werden', then: 'Buchungsweg und Ergebniswirkung getrennt erklären.' },
      { if: 'Unfertige/fertige Erzeugnisse auftauchen', then: 'Bestandsveränderung als Erfolgsbrücke zur GuV hervorheben.' }
    ]
  ),
  umlauf_waren_ust: mk(
    'Warenbuchungen und Umsatzsteuer zeigen, dass Rechnungswesen nie nur Bestände erfasst, sondern zugleich Zahlungs-, Erfolgs- und Steuerlogik verbindet.',
    'Ein Warenverkauf ist wie ein Doppelvorgang: wirtschaftlich entsteht Umsatz, buchhalterisch laufen aber gleichzeitig Forderung, Erlös, Lagerabgang und Steuer mit.',
    'Genau deshalb werden Warenverkehr und Umsatzsteuer in Klausuren oft gemeinsam geprüft.',
    [
      { if: 'Ein Warenverkauf gebucht wird', then: 'Erlösseite und Bestands-/Aufwandsseite getrennt denken.' },
      { if: 'Umsatzsteuer auftaucht', then: 'Steuer nie mit eigenem Ertrag verwechseln.' }
    ]
  ),
  eigenkapital_kapitalgesellschaften: mk(
    'Eigenkapital in Kapitalgesellschaften ist formal gegliedert und eng mit Rücklagen- und Gewinnverwendungslogik verknüpft.',
    'Wie bei einer festen Schubladenordnung hat jeder Eigenkapitalbestandteil einen klaren Platz und eine spezifische Funktion.',
    'Darum steht in Aufgaben zur AG/GmbH die Ausweis- und Verwendungslogik im Vordergrund.',
    [
      { if: 'Gewinnverwendung auftaucht', then: 'Jahresüberschuss, Rücklagen und Ausweisfolge sauber trennen.' },
      { if: 'Eigenkapitalgliederung gefragt ist', then: 'Gezeichnetes Kapital, Rücklagen und Ergebnispositionen systematisch aufbauen.' }
    ]
  ),
  eigenkapital_personengesellschaften: mk(
    'Eigenkapital in Personengesellschaften ist gesellschafterbezogen und kontenorientiert geführt.',
    'Wie getrennte Kontenhefte für jeden Gesellschafter werden Einlagen, Entnahmen und Gewinnanteile individuell nachverfolgt.',
    'Darum sind Kapitalkonten und Privatkonten der methodische Startpunkt bei Personengesellschaftsfällen.',
    [
      { if: 'Entnahmen oder Einlagen genannt werden', then: 'Zuerst Privatkonto-Logik anwenden, dann Abschluss auf Kapitalkonto.' },
      { if: 'Gewinnverteilung gefragt ist', then: 'Zuweisung auf Gesellschafterkonten ausdrücklich darstellen.' }
    ]
  ),
  verbindlichkeiten: mk(
    'Verbindlichkeiten sind sichere Schulden mit klarer Verpflichtungsstruktur.',
    'Wie eine feststehende Rechnung sind Betrag und Verpflichtungslage ausreichend bestimmt.',
    'Deshalb ist in Klausuren zuerst die sichere Schuldqualität zu prüfen, bevor bewertet wird.',
    [
      { if: 'Höhe und Fälligkeit sicher feststehen', then: 'Verbindlichkeit liegt nahe.' },
      { if: 'Unsicherheitsargumente dominieren', then: 'Abgrenzung zur Rückstellung explizit aufmachen.' }
    ]
  ),
  rueckstellungen: mk(
    'Rückstellungen erfassen ungewisse, aber wirtschaftlich bereits verursachte Verpflichtungen.',
    'Wie ein erwarteter, aber noch nicht exakt bezifferbarer Aufwand brauchen sie eine begründete kaufmännische Schätzung.',
    'Deshalb stehen bei Rückstellungen Unsicherheitsgrad, Schätzung und Folgebehandlung im Zentrum.',
    [
      { if: 'Verpflichtung wahrscheinlich, aber Betrag offen', then: 'Rückstellung statt Verbindlichkeit prüfen.' },
      { if: 'Folgejahr weicht von Schätzung ab', then: 'Inanspruchnahme, Auflösung oder Nachbelastung sauber buchen.' }
    ]
  ),
  rechnungsabgrenzung: mk(
    'Rechnungsabgrenzung schützt das Periodenprinzip gegen den Zufall des Zahlungszeitpunkts.',
    'Wie bei einem Jahresabo gehört die Zahlung nicht automatisch vollständig in den Monat, in dem sie überwiesen wurde.',
    'Darum musst du in Abgrenzungsaufgaben immer wirtschaftliche Ursache und Zahlungszeitpunkt getrennt lesen.',
    [
      { if: 'Eine Zahlung zwei Perioden betrifft', then: 'An RAP und periodengerechte Erfolgsermittlung denken.' },
      { if: 'Schon verdiente, aber noch nicht gezahlte Beträge auftauchen', then: 'Antizipative Logik von Forderung/Verbindlichkeit prüfen.' }
    ]
  ),
  erfolgsrechnung: mk(
    'GKV und UKV erzählen dieselbe Erfolgsstory in zwei unterschiedlichen Ordnungssprachen.',
    'Beim GKV sortierst du nach Kostenarten wie Material oder Personal, beim UKV nach Funktionen wie Produktion oder Vertrieb.',
    'In der Klausur ist daher fast nie die Frage „welches Ergebnis?“, sondern „warum führt die andere Gliederung trotzdem zum selben Ergebnis?“ entscheidend.',
    [
      { if: 'GKV und UKV verglichen werden', then: 'Gemeinsames Ergebnis, unterschiedliche Darstellungslogik betonen.' },
      { if: 'Bestandsveränderungen auftauchen', then: 'Besonders die GKV-Logik explizit erklären.' }
    ]
  )
};
