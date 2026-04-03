// ============================================================
// INTUITION DATA — Makroökonomik I
// Core ideas, analogies, and exam patterns for each concept
// ============================================================

function mk(core, analogy, bridge, exam = []) {
  return { core, analogy, bridge, exam };
}

export const INTUITION = {
  makro_rahmen: mk(
    'Makroökonomik ist kein einzelnes Modell, sondern ein Staffelstab: Gütermarkt erklärt die kurze Frist, Arbeitsmarkt und Phillipskurve die mittlere Frist, Erwartungen verbinden die Übergänge.',
    'Wie ein Stadtplan mit verschiedenen Ebenen: Straßen, U-Bahn und Höhenlinien zeigen dieselbe Stadt, aber jeweils mit anderem Fokus.',
    'Wenn du zuerst den Zeithorizont sortierst, wird fast jede Klausurfrage sofort klarer.',
    [{ if: 'Schock oder Politikmaßnahme gelesen', then: 'Zuerst fragen: kurze Frist, mittlere Frist oder Erwartungskanal?' }]
  ),
  vgr: mk(
    'Die VGR ist das Messinstrument der Makroökonomik. Sie sagt nicht, warum etwas passiert, aber sie sagt sauber, was passiert ist.',
    'Wie ein Cockpit im Flugzeug: Bevor man steuert, muss man Instrumente lesen können.',
    'BIP, Preisniveau und Arbeitslosenquote sind die Messgrößen, auf denen die späteren Modelle aufsetzen.',
    [{ if: 'Nominal und real gleichzeitig auftauchen', then: 'Den Preiseffekt isolieren und erst dann das Mengenwachstum deuten.' }]
  ),
  guetermarkt: mk(
    'Im Gütermarkt reagiert die Produktion auf geplante Nachfrage. Unternehmen liefern, was die Wirtschaft bei gegebenem Preisniveau tatsächlich nachfragt.',
    'Wie ein Restaurant, das mehr einkauft, wenn es merkt, dass die Reservierungen steigen.',
    'Die 45°-Linie zeigt Gleichheit von Nachfrage und Produktion; der Schnitt mit der Nachfragekurve liefert das kurzfristige Gleichgewicht.',
    [{ if: 'Staatsausgaben oder Konsum steigen', then: 'Die Nachfragekurve verschiebt sich nach oben und das Gleichgewichtseinkommen steigt.' }]
  ),
  multiplikator: mk(
    'Ein erster Nachfrageimpuls bleibt nicht isoliert, sondern erzeugt weitere Einkommens- und Konsumrunden. Genau diese Verstärkung ist der Multiplikator.',
    'Wie ein Mikrofon, das den ersten Ton zurückspielt und damit weitere Echos erzeugt.',
    'Je höher die marginale Konsumquote, desto größer der Verstärkungsmechanismus.',
    [{ if: 'c1 steigt', then: 'Der Multiplikator wird größer und Fiskalimpulse wirken stärker.' }]
  ),
  geldnachfrage: mk(
    'Haushalte wählen zwischen Liquidität und Verzinsung. Der Zins ist der Preis dafür, auf Bargeldnähe zu verzichten.',
    'Wie die Entscheidung zwischen Geld im Portemonnaie und Geld auf einem Konto mit Rendite.',
    'Mehr Einkommen erhöht den Transaktionsbedarf, ein höherer Zins erhöht die Opportunitätskosten der Geldhaltung.',
    [{ if: 'Zentralbank erhöht die Geldmenge', then: 'Der Zins sinkt, weil die gleiche Geldnachfrage mit mehr Liquidität bedient werden kann.' }]
  ),
  banken: mk(
    'Banken schaffen Geld, weil Kreditvergabe und Einlagenbildung gleichzeitig entstehen. Gerade deshalb sind Reserven, Vertrauen und Liquiditätspolitik makroökonomisch relevant.',
    'Wie ein Wassersystem mit zentralem Speicher und vielen Leitungen: Sobald Vertrauen fehlt, wird der Druck im ganzen Netz zum Problem.',
    'Banken sind keine bloßen Weiterleiter vorhandener Mittel, sondern Teil der Geldschöpfung und des Krisenkanals.',
    [{ if: 'Bank-Run oder Reservenproblem', then: 'Bilanzlogik und Fristentransformation zuerst sauber benennen.' }]
  ),
  islm: mk(
    'IS-LM verbindet Nachfrage und Liquidität. Es zeigt, wie Output und Zins gleichzeitig bestimmt werden.',
    'Wie zwei Waagen, die nur dann zur Ruhe kommen, wenn beide Märkte gleichzeitig im Gleichgewicht sind.',
    'Die IS-Kurve kommt aus dem Gütermarkt, die monetäre Bedingung aus Geldmarkt oder Zinsregel.',
    [{ if: 'Zinssenkung der Zentralbank', then: 'Monetäre Kurve nach unten, Investitionen hoch, Output hoch.' }]
  ),
  politikmix: mk(
    'Politik im IS-LM heißt nicht nur verschieben, sondern mitdenken, wie das andere Instrument reagiert. Genau daraus entsteht Crowding-Out oder dessen Vermeidung.',
    'Wie zwei Personen am selben Steuerpult: Eine Bewegung des einen Hebels hängt in ihrer Wirkung davon ab, ob der andere mitzieht oder gegenhält.',
    'Fiskalpolitik ist bei horizontaler Zinsregel stark, bei steiler LM deutlich schwächer.',
    [{ if: 'Fiskalexpansion + konstanter Zins', then: 'Kaum Crowding-Out; der Outputeffekt ist groß.' }]
  ),
  realzins: mk(
    'Für Investitionen zählt nicht der reine Nominalzins, sondern wie teuer Finanzierung nach Inflation und Risiko wirklich ist.',
    'Ein nominell günstiger Kredit kann real teuer sein, wenn Preise nicht mehr steigen oder Risikoprämien anspringen.',
    'Fisher-Gleichung und Kreditzins mit Risikoaufschlag erklären, warum Finanzkrisen auch ohne Leitzinserhöhung rezessiv wirken.',
    [{ if: 'Inflationserwartungen fallen', then: 'Der Realzins steigt bei gegebenem Nominalzins.' }]
  ),
  arbeitsmarkt: mk(
    'Mittelfristig wird nicht mehr nur Nachfrage betrachtet, sondern was Beschäftigte fordern und Firmen zahlen können. Daraus entsteht die natürliche Arbeitslosenquote.',
    'Wie ein Tauziehen zwischen Lohnforderungen und Preissetzungsspielraum.',
    'WS und PS schneiden sich beim Reallohn- und Arbeitslosigkeitsniveau, das mittelfristig tragfähig ist.',
    [{ if: 'Markup steigt', then: 'PS sinkt und die natürliche Arbeitslosigkeit steigt.' }]
  ),
  phillips: mk(
    'Die Phillipskurve sagt: Ein heißer Arbeitsmarkt erzeugt Inflationsdruck, solange Erwartungen nicht vollständig angepasst sind.',
    'Wie ein Thermometer für Überhitzung: Je stärker der Arbeitsmarkt angespannt ist, desto eher steigen Löhne und Preise.',
    'Unterhalb der natürlichen Arbeitslosigkeit beschleunigt sich die Inflation; oberhalb davon lässt der Preisdruck nach.',
    [{ if: 'u < u_n', then: 'Inflation steigt relativ zu den Erwartungen oder zur Vorperiode.' }]
  ),
  islmpc: mk(
    'IS-LM-PC erklärt die Rückkehr vom Boom zur mittleren Frist. Nachfrage hebt Output, Output hebt Inflation, Inflation hebt den Realzins, und der höhere Realzins bremst die Nachfrage wieder.',
    'Wie ein Thermostat mit Verzögerung: Zuerst wird es zu warm, dann regelt die Anlage nach und bringt den Raum zurück zum Sollwert.',
    'Gerade die Kette Outputlücke → Arbeitslosigkeitslücke → Inflation → Realzins macht die mittelfristige Stabilisierung verständlich.',
    [{ if: 'dauerhafte Fiskalexpansion', then: 'Kurzfristig Boom, mittelfristig Rückkehr zu Y_n über steigende Inflation und geldpolitische Reaktion.' }]
  ),
  erwartungen: mk(
    'Erwartungen wirken heute, weil Menschen Konsum, Investition und Preissetzung an der Zukunft ausrichten.',
    'Wie eine Ankündigung im Straßenverkehr: Wenn alle wissen, dass gleich eine Spur gesperrt wird, ändert sich das Verhalten sofort und nicht erst in dem Moment der Sperrung.',
    'Glaubwürdige Politik beeinflusst deshalb sofort lange Zinsen, Konsumpläne und Lohnabschlüsse.',
    [{ if: 'temporäre vs. permanente Politik', then: 'Immer prüfen, wie stark das erwartete Lebenseinkommen oder die erwartete Zinsbahn verändert wird.' }]
  )
};
