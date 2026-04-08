const mk = (core, analogy, bridge, exam) => ({ core, analogy, bridge, exam });

export const INTUITION = {
  was_ist_recht: mk(
    'Recht ist die verbindliche Spielregel der Gesellschaft, nicht bloß ein moralischer Wunschzettel.',
    'Wie bei einem Turnier reicht es nicht, dass alle „fair“ sein wollen. Man braucht gemeinsame, durchsetzbare Regeln.',
    'Darum arbeitet der Kurs von Anfang an normgebunden und fallorientiert.',
    [
      { if: 'Ein Fall nach Gerechtigkeit fragt', then: 'Zuerst die Norm suchen, nicht die spontane Wertung.' },
      { if: 'Der Sachverhalt diffus wirkt', then: 'Zuerst die Rechtsfrage präzisieren.' }
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
    'Methodik ist im Recht kein Zusatz, sondern die eigentliche Leistung.',
    'Ein gut gebautes Skelett hält den ganzen Körper zusammen. Genauso trägt der Gutachtenstil die materielle Lösung.',
    'Deshalb wird jede Norm erst durch Definition und Subsumtion zur belastbaren Antwort.',
    [
      { if: 'Ein Ergebnis vorschnell feststeht', then: 'Trotzdem Obersatz, Definition und Subsumtion sichtbar machen.' },
      { if: 'Definitionen bekannt sind', then: 'Die Punkte liegen in der Anwendung auf den Sachverhalt.' }
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
    'Dissens heißt: Es fehlt an echter Einigung zwischen den Erklärungen.',
    'Wenn zwei Menschen aneinander vorbeireden, entsteht kein tragfähiger Konsens.',
    'Der Dissens-Pfad prüft, ob überhaupt ein Vertrag zustande gekommen ist.',
    [
      { if: 'Die Erklärungen decken sich objektiv nicht', then: 'Zuerst Dissens prüfen.' },
      { if: 'Essentialia betroffen sind', then: 'Vertragsschluss regelmäßig verneinen.' }
    ]
  ),
  anfechtung: mk(
    'Dissens heißt: Es fehlt an echter Einigung. Anfechtung heißt: Die Einigung wirkt zunächst, kann aber wieder beseitigt werden.',
    'Wenn zwei Menschen aneinander vorbeireden, gab es nie echten Konsens. Wenn einer sich verspricht, gibt es zunächst Konsens, aber mit Korrekturmöglichkeit.',
    'Der Kurs trennt diese beiden Fehlerquellen bewusst, weil sie unterschiedliche Rechtsfolgen haben.',
    [
      { if: 'Die Erklärungen decken sich objektiv nicht', then: 'Zuerst Dissens prüfen.' },
      { if: 'Ein Irrtum nach Vertragsschluss auffällt', then: 'Anfechtung samt Erklärung und Frist denken.' }
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
    'Die Prüfung konzentriert sich deshalb auf eigene Erklärung, fremden Namen und Vertretungsmacht.',
    [
      { if: 'Jemand für einen anderen handelt', then: 'Immer Offenkundigkeit und Vertretungsmacht mitdenken.' },
      { if: 'Nur eine Nachricht weitergegeben wird', then: 'Botenproblem statt Stellvertretung prüfen.' }
    ]
  ),
  agb: mk(
    'AGB-Recht schützt vor einseitig vorformulierten Vertragsbedingungen im Massengeschäft.',
    'Kleingedrucktes wirkt wie ein Regelpaket, das eine Seite in Serie verteilt. Das Recht prüft, ob diese Regeln fair und wirksam eingebunden sind.',
    'Darum beginnt jeder AGB-Fall mit Einbeziehung und erst danach mit Inhaltskontrolle.',
    [
      { if: 'AGB im Fall auftauchen', then: 'Nie direkt bei der Unwirksamkeit starten; zuerst Einbeziehung prüfen.' },
      { if: 'Die Klausel überraschend wirkt', then: 'An § 305c BGB denken.' }
    ]
  ),
  schuldrecht_intro: mk(
    'Das Schuldrecht beschreibt nicht nur, dass ein Vertrag existiert, sondern wie sich aus ihm Pflichten und Störungen ergeben.',
    'Ein Vertrag ist wie eine laufende Beziehung mit Haupt- und Rücksichtspflichten.',
    'Von hier aus verzweigen sich später Schadensersatz, Rücktritt und Leistungsstörungen.',
    [
      { if: 'Eine Pflichtverletzung erwähnt wird', then: 'Immer nach dem konkreten Schuldverhältnis fragen.' },
      { if: 'Es geht nicht um die Hauptleistung', then: 'Nebenpflichten nicht vergessen.' }
    ]
  ),
  schadensersatz: mk(
    'Schadensersatz ist die juristische Reaktion auf Pflichtverletzung, aber nur über ein genaues Anspruchsschema.',
    'Wie bei einer Checkliste im Cockpit darf kein Schritt übersprungen werden: Schuldverhältnis, Pflichtverletzung, Vertretenmüssen, Schaden.',
    'Besonders die Fristsetzung entscheidet oft über Erfolg oder Misserfolg einer Klausurlösung.',
    [
      { if: 'Ersatz statt der Leistung verlangt wird', then: 'Fristsetzung als Pflichtstation prüfen.' },
      { if: 'Nur eine Schlechtleistung vorliegt', then: 'Nicht automatisch Schadensersatz bejahen.' }
    ]
  ),
  ruecktritt: mk(
    'Rücktritt ist ein Lösungsrecht wegen Leistungsstörung im Schuldverhältnis.',
    'Rücktritt ist wie ein Notausstieg, wenn die geschuldete Leistung ausfällt oder mangelhaft bleibt.',
    'Der Rücktrittspfad wird durch Störung, Fristlogik und Rückgewähr bestimmt.',
    [
      { if: 'Leistungsstörung vorliegt', then: 'Rücktrittsvoraussetzungen zuerst prüfen.' },
      { if: 'Fristsetzung im Fall auftaucht', then: 'Rücktritts- und Schadensersatzpfad sauber trennen.' }
    ]
  ),
  verbraucherwiderruf: mk(
    'Rücktritt und Widerruf führen beide zur Lösung vom Vertrag, aber aus völlig unterschiedlichen Gründen.',
    'Rücktritt ist wie ein Notausstieg wegen Vertragsstörung; Widerruf ist eher eine gesetzliche Bedenkzeit in Schutzsituationen.',
    'Diese Zweckdifferenz steuert die ganze Fallprüfung.',
    [
      { if: 'Keine Pflichtverletzung vorliegt', then: 'Rücktritt ist nicht der natürliche Startpunkt.' },
      { if: 'Fernabsatz oder Verbraucherschutzlage auftaucht', then: 'Widerruf prüfen.' }
    ]
  )
};

