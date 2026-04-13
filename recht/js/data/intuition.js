const mk = (core, analogy, bridge, exam) => ({ core, analogy, bridge, exam });

export const INTUITION = {
  was_ist_recht: mk(
    'Recht ist die verbindliche Spielregel der Gesellschaft, nicht bloß ein moralischer Wunschzettel.',
    'Wie bei einem Turnier reicht es nicht, dass alle „fair“ sein wollen. Man braucht gemeinsame, durchsetzbare Regeln.',
    'Die Vorlesung ordnet dazu Gewaltenteilung, Rechtsquellen und Rechtsfindungslehren ein — die Klausur bleibt dennoch norm- und subsumtionsgetrieben.',
    [
      { if: 'Ein Fall nach Gerechtigkeit fragt', then: 'Zuerst die Norm suchen, nicht die spontane Wertung.' },
      { if: 'Der Sachverhalt diffus wirkt', then: 'Zuerst die Rechtsfrage präzisieren.' },
      { if: 'Rechtsquellen vs. Rechtsprechung', then: 'Gesetz und Vertrag als Quellen systematisch nennen; Urteile als Auslegung/Harmonisierung, nicht als Ersatzgesetz.' }
    ]
  ),
  privatrecht: mk(
    'Privatrecht ordnet Beziehungen zwischen rechtlich Gleichgeordneten.',
    'Zwei Marktteilnehmer verhandeln wie zwei Spieler auf demselben Feld. Keiner ist hoheitlich übergeordnet.',
    'Die BGB-Struktur hilft dir, in dieser Gleichordnungswelt schnell die richtige Normebene zu finden.',
    [
      { if: 'Beteiligte auf Augenhöhe handeln', then: 'Privatrecht liegt nahe.' },
      { if: 'Anspruch gesucht wird', then: 'AT und besondere Teile systematisch verbinden.' }
    ]
  ),
  methodik: mk(
    'Methodik ist im Recht kein Zusatz, sondern die eigentliche Leistung und die eigentliche Punktelogik der Klausur.',
    'Ein gut gebautes Skelett hält den ganzen Körper zusammen. Genauso trägt der Gutachtenstil die materielle Lösung.',
    'Vorlesung: einleitender Obersatz, dann je Tatbestandsmerkmal Obersatz, Definition, Subsumtion, zuletzt Ergebnis — plus Konjunktiv II bei Obersätzen.',
    [
      { if: 'Ein Ergebnis vorschnell feststeht', then: 'Trotzdem einleitenden Obersatz und pro Merkmal O–D–S sichtbar machen.' },
      { if: 'Definitionen bekannt sind', then: 'Die Punkte liegen in der Anwendung auf den Sachverhalt.' },
      { if: 'Mehrere Rechtsfolgen im Raum stehen', then: 'Anspruch entstanden, untergegangen und durchsetzbar sauber trennen.' }
    ]
  ),
  willenserklaerung: mk(
    'Ein Vertrag ist kein bloßes Einverständnis im Kopf, sondern rechtlich erkennbare Kommunikation.',
    'Beim Händedruck müssen beide sichtbar mitmachen; bloßes inneres Nicken reicht nicht.',
    'Deshalb stehen Angebot, Annahme und Zugang im Zentrum des Vertragsschlusses.',
    [
      { if: 'Schweigen vorkommt', then: 'Im Privatrecht grundsätzlich keine Annahme.' },
      { if: 'Jemand nur innerlich zustimmt', then: 'Es fehlt die Kundgabe und damit die Annahmeerklärung.' }
    ]
  ),
  dissens: mk(
    'Dissens heißt: Die Einigung fehlt bereits auf der Vertragsschlussebene.',
    'Wenn zwei Menschen aneinander vorbeireden, kann keine tragfähige gemeinsame Erklärung entstehen.',
    'Der Dissens-Pfad prüft also zuerst die Konsensfrage und noch nicht die nachträgliche Fehlerkorrektur.',
    [
      { if: 'Die Erklärungen decken sich objektiv nicht', then: 'Zuerst Dissens prüfen.' },
      { if: 'Essentialia betroffen sind', then: 'Vertragsschluss regelmäßig verneinen.' },
      { if: 'Objektiver Konsens doch feststeht', then: 'Aus dem Dissenspfad heraus und Anfechtung mitdenken.' }
    ]
  ),
  anfechtung: mk(
    'Anfechtung heißt: Die Einigung wirkt zunächst, kann aber aus gesetzlich geregelten Gründen wieder beseitigt werden.',
    'Wenn einer sich verspricht oder über den Inhalt irrt, bleibt die Erklärung zunächst wirksam, bis die Anfechtung greift.',
    'Der Kurs trennt Dissens und Anfechtung bewusst, weil nur die Anfechtung Vertrag, Frist und § 122-Folge nach sich zieht.',
    [
      { if: 'Die Erklärungen decken sich objektiv nicht', then: 'Zuerst Dissens prüfen.' },
      { if: 'Ein Irrtum nach Vertragsschluss auffällt', then: 'Anfechtungsgrund, Erklärung und Frist vollständig prüfen.' },
      { if: '§ 122 BGB auftaucht', then: 'Erst wirksame Anfechtung, dann separaten Folgeanspruch aufbauen.' }
    ]
  ),
  trennung_abstraktion: mk(
    'Deutsches Zivilrecht trennt Schuld und Verfügung bewusst in zwei Ebenen.',
    'Eine Restaurantreservierung und das tatsächliche Essen sind nicht dasselbe. Das eine verpflichtet, das andere verwirklicht.',
    'Genau diese Zweistufigkeit macht Eigentums- und Rückabwicklungsfälle systematisch prüfbar.',
    [
      { if: 'Ein Kaufvertrag unwirksam ist', then: 'Eigentumsübergang trotzdem separat prüfen.' },
      { if: 'Rückabwicklung auftaucht', then: 'Verpflichtungs- und Verfügungsebene auseinanderhalten.' }
    ]
  ),
  geschaeftsfaehigkeit: mk(
    'Geschäftsfähigkeit steuert, wer sich selbst wirksam rechtlich binden darf.',
    'Ein Kind kann Wünsche haben, aber nicht jeden Vertrag rechtlich selbst tragen.',
    'Deshalb fragt das Gesetz nach Schutz vor übereilten oder belastenden Bindungen.',
    [
      { if: 'Minderjährige betroffen sind', then: 'Rechtlicher Vorteil, Zustimmung und Taschengeldlogik prüfen.' },
      { if: 'Der Deal wirtschaftlich gut wirkt', then: 'Trotzdem rechtlichen Nachteil prüfen.' }
    ]
  ),
  stellvertretung: mk(
    'Stellvertretung verlagert das rechtliche Sprechen auf eine andere Person, nicht aber die Rechtsfolgen.',
    'Ein Assistent unterschreibt, aber die Firma wird verpflichtet.',
    'Die Prüfung konzentriert sich deshalb auf Erklärungstyp, Offenkundigkeit, Vertretungsmacht und erst danach auf Genehmigung oder § 179.',
    [
      { if: 'Jemand für einen anderen handelt', then: 'Immer Offenkundigkeit und Vertretungsmacht mitdenken.' },
      { if: 'Nur eine Nachricht weitergegeben wird', then: 'Botenproblem statt Stellvertretung prüfen.' },
      { if: 'Vertretungsmacht fehlt', then: 'Nicht direkt § 179; zuerst Genehmigung und Vertragspartnerfrage klären.' }
    ]
  ),
  agb: mk(
    'AGB-Recht schützt vor einseitig vorformulierten Vertragsbedingungen im Massengeschäft.',
    'Kleingedrucktes wirkt wie ein Regelpaket, das eine Seite in Serie verteilt. Das Recht prüft, ob diese Regeln überhaupt Vertragsbestandteil werden und erst danach, ob sie fair sind.',
    'Darum beginnt jeder AGB-Fall mit Vorliegen und Einbeziehung und erst danach mit Inhaltskontrolle.',
    [
      { if: 'AGB im Fall auftauchen', then: 'Nie direkt bei der Unwirksamkeit starten; zuerst Einbeziehung prüfen.' },
      { if: 'Die Klausel überraschend wirkt', then: 'An § 305c BGB denken.' },
      { if: 'Mündliche Abrede und Formular kollidieren', then: 'Zuerst § 305b BGB prüfen.' }
    ]
  ),
  schuldrecht_intro: mk(
    'Das Schuldrecht beschreibt nicht nur, dass ein Vertrag existiert, sondern wie sich aus ihm konkrete Pflichten, Ansprüche und Störungen ergeben.',
    'Ein Vertrag ist wie eine laufende Beziehung mit Haupt- und Rücksichtspflichten.',
    'Von hier aus verzweigen sich später Schadensersatz, Rücktritt und weitere Leistungsstörungspfade.',
    [
      { if: 'Eine Pflichtverletzung erwähnt wird', then: 'Immer nach dem konkreten Schuldverhältnis fragen.' },
      { if: 'Es geht nicht um die Hauptleistung', then: 'Nebenpflichten nicht vergessen.' },
      { if: 'Mehrere Rechtsfolgen im Raum stehen', then: 'Pflicht, Störung und Anspruchsschiene getrennt halten.' }
    ]
  ),
  schadensersatz: mk(
    'Schadensersatz ist die juristische Reaktion auf Pflichtverletzung, aber nur über ein genaues Anspruchsschema.',
    'Wie bei einer Checkliste im Cockpit darf kein Schritt übersprungen werden: Schuldverhältnis, Pflichtverletzung, Vertretenmüssen, Schaden.',
    'Besonders die Wahl der richtigen Schadensersatzschiene und die Fristsetzung entscheiden über Erfolg oder Misserfolg einer Klausurlösung.',
    [
      { if: 'Ersatz statt der Leistung verlangt wird', then: 'Fristsetzung als Pflichtstation prüfen.' },
      { if: 'Nur eine Schlechtleistung vorliegt', then: 'Nicht automatisch Schadensersatz bejahen.' },
      { if: 'Schadenssumme schon bekannt ist', then: 'Trotzdem zuerst Tatbestand sauber prüfen.' }
    ]
  ),
  ruecktritt: mk(
    'Rücktritt ist ein Lösungsrecht wegen Leistungsstörung im Schuldverhältnis.',
    'Rücktritt ist wie ein Notausstieg, wenn die geschuldete Leistung ausfällt oder mangelhaft bleibt.',
    'Der Rücktrittspfad wird durch Störung, Fristlogik, Erklärung und Rückgewähr bestimmt.',
    [
      { if: 'Leistungsstörung vorliegt', then: 'Rücktrittsvoraussetzungen zuerst prüfen.' },
      { if: 'Fristsetzung im Fall auftaucht', then: 'Rücktritts- und Schadensersatzpfad sauber trennen.' },
      { if: 'Rückgewähr diskutiert wird', then: 'Vorher prüfen, ob der Rücktritt überhaupt wirksam erklärt wurde.' }
    ]
  ),
  verbraucherwiderruf: mk(
    'Rücktritt und Widerruf führen beide zur Lösung vom Vertrag, aber aus völlig unterschiedlichen Gründen.',
    'Rücktritt ist wie ein Notausstieg wegen Vertragsstörung; Widerruf ist eher eine gesetzliche Bedenkzeit in Schutzsituationen.',
    'Diese Zweckdifferenz steuert die ganze Fallprüfung zusammen mit Vertragstyp, Parteienrolle, Erklärung und Frist.',
    [
      { if: 'Keine Pflichtverletzung vorliegt', then: 'Rücktritt ist nicht der natürliche Startpunkt.' },
      { if: 'Fernabsatz oder Verbraucherschutzlage auftaucht', then: 'Widerruf prüfen.' },
      { if: '§ 355 BGB genannt wird', then: 'Zusätzlich prüfen, ob überhaupt ein gesetzliches Widerrufsrecht eröffnet ist.' }
    ]
  )
};
