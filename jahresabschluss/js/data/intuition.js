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
  gob_inventur: mk(
    'GoB, Inventur und Bilanzansatz entscheiden zuerst über die Zulässigkeit eines Abschlusses, erst danach über Zahlen.',
    'Wie bei einer Inventarliste im Lager muss zuerst klar sein, ob ein Gegenstand überhaupt aufgenommen wird, bevor man über seinen Wert spricht.',
    'Genau deshalb beginnt eine saubere Bilanzierungsprüfung immer mit Ansatz und Ordnung, nicht direkt mit der Bewertung.',
    [
      { if: 'Ein Bilanzposten fraglich ist', then: 'Ansatzfrage vor der Bewertungsfrage prüfen.' },
      { if: 'Vorsichtsprinzip genannt wird', then: 'Realisations- und Imparitätslogik ausdrücklich ansprechen.' }
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
  umlauf_werkstoffe: mk(
    'Beim Umlaufvermögen entscheidet die Bewertungsmethode direkt über Aufwand, Endbestand und damit den Gewinn.',
    'Wenn du im Lager zuerst alte oder neue Chargen „gedanklich verbrauchst“, ändert sich sofort, was am Ende noch mit welchem Wert im Regal liegt.',
    'FIFO, Durchschnittsmethode und Niederstwertprinzip sind deshalb keine isolierten Regeln, sondern greifen gemeinsam in den Abschluss ein.',
    [
      { if: 'Ein Verbrauchsfolgeverfahren genannt wird', then: 'Immer auch den Effekt auf Endbestand und Aufwand benennen.' },
      { if: 'Der Stichtagswert unter den AK liegt', then: 'Strenges Niederstwertprinzip anwenden.' }
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
  eigenkapital: mk(
    'Eigenkapital ist kein einheitlicher Block, sondern folgt je nach Rechtsform einer anderen Abschlusslogik.',
    'Bei der OHG ist das Eigenkapital eher ein bewegliches Kapitalkonto-System, bei der AG stärker formalisiert und rechtlich gebunden.',
    'Darum musst du in Aufgaben immer zuerst die Gesellschaftsform klären, bevor du Buchungen oder Gewinnverwendung einordnest.',
    [
      { if: 'Kapitalkonten gefragt sind', then: 'Zwischen Personen- und Kapitalgesellschaft unterscheiden.' },
      { if: 'Gewinnverwendung auftaucht', then: 'Rechtsformbedingte Eigenkapitalstruktur mitdenken.' }
    ]
  ),
  fremdkapital: mk(
    'Fremdkapital ist die Außenseite der Finanzierung und verlangt saubere Trennung zwischen sicheren Schulden und ungewissen Verpflichtungen.',
    'Eine Verbindlichkeit ist wie eine feste Rechnung mit bekanntem Adressaten und Betrag; eine Rückstellung eher wie eine erwartete, aber noch unscharfe Verpflichtung.',
    'Diese Unsicherheit ist der Kern fast jeder Klausur zu Rückstellungen.',
    [
      { if: 'Höhe und Fälligkeit sicher feststehen', then: 'Verbindlichkeit liegt nahe.' },
      { if: 'Nur Ursache und Wahrscheinlichkeit feststehen', then: 'An Rückstellung denken.' }
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
