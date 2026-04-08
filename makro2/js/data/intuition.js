// ============================================================
// INTUITION DATA — Makroökonomik II
// One entry per CHAPTERS id (closed coverage vs navigation graph).
// ============================================================

function mk(core, analogy, bridge, exam = []) {
  return { core, analogy, bridge, exam };
}

export const INTUITION = {
  wechselkurs: mk(
    'Der nominale Wechselkurs sagt, wie viele Einheiten Fremdwährung eine Einheit Inlandswährung kauft. Er ist das unmittelbare Preissignal zwischen zwei Währungsräumen.',
    'Wie ein Preisschild an der Grenze: Es sagt dir sofort, wie teuer ausländische Güter in deiner Währung werden.',
    'Nominaler Wechselkurs plus Preisniveaus ergibt den realen Wechselkurs.',
    [{ if: 'Mengennotierung steigt', then: 'Inlandswährung wertet auf.' }]
  ),
  zinsparitaet: mk(
    'Zinsparität heißt: Ein Zinsvorteil ist kein Gratisgewinn, sondern wird durch erwartete Wechselkursänderungen ausgeglichen.',
    'Ein höheres Sparbuch-Angebot in Fremdwährung wirkt attraktiv, bis du bemerkst, dass der Wechselkursgewinn wieder verschwinden kann.',
    'Zinsdifferenzen und Wechselkurserwartungen gehören immer zusammen.',
    [{ if: 'Inlandszins > Auslandszins', then: 'Erwartete Abwertung oder geringere erwartete Aufwertung des Inlands muss kompensieren.' }]
  ),
  zahlungsbilanz: mk(
    'Die Zahlungsbilanz ist die Gesamtbuchhaltung aller Transaktionen mit dem Ausland. Alles, was irgendwo hineingeht, muss anderswo wieder auftauchen.',
    'Wie doppelte Buchführung für eine Volkswirtschaft: Jede Forderung hat eine Gegenbuchung.',
    'Leistungsbilanz, Kapitalbilanz und Reserven bilden gemeinsam eine Identität.',
    [{ if: 'Leistungsbilanzdefizit', then: 'Dann braucht es spiegelbildlich einen Kapitalzufluss oder Reserveabbau.' }]
  ),
  kaufkraftparitaet: mk(
    'Kaufkraftparität verknüpft Preisniveaus mit Wechselkursen. Im Kern geht es darum, ob derselbe Warenkorb überall gleich teuer ist.',
    'Wenn derselbe Burger im Ausland viel billiger ist, fragt man sofort, ob die Währung falsch bewertet ist.',
    'Absolute PPP ist ein Niveaukonzept, relative PPP ein Änderungsratenkonzept.',
    [{ if: 'Inflationsdifferenz', then: 'Zuerst an relative PPP denken.' }]
  ),
  marshall_lerner: mk(
    'Eine Abwertung hilft nur dann sicher, wenn Mengen stark genug reagieren. Sonst werden Importe zuerst einfach nur teurer.',
    'Ein Rabatt bringt nur dann mehr Umsatz, wenn genug Kunden auch tatsächlich mehr kaufen.',
    'Marshall-Lerner ist die Langfristbedingung; die J-Kurve beschreibt den Übergang dorthin.',
    [{ if: 'Kurzfristige Frage nach Abwertung', then: 'Erst an J-Kurve denken, dann an Marshall-Lerner.' }]
  ),
  offene_is: mk(
    'In der offenen Volkswirtschaft ist Nachfrage nie nur inländisch: Ein Teil läuft über Importe ins Ausland weg.',
    'Wie ein Eimer mit Loch: Mehr Wasser hineingießen erhöht den Pegel, aber ein Teil läuft gleichzeitig ab.',
    'Das Importleck macht den Multiplikator kleiner als in der geschlossenen Volkswirtschaft.',
    [{ if: 'G steigt oder T sinkt', then: 'Y steigt, aber ein Teil verpufft über höhere Importe.' }]
  ),
  nettoexporte: mk(
    'Nettoexporte verbinden Gütermarkt, Auslandseinkommen und Wechselkurs. Sie reagieren auf relative Preise und auf Einkommen im In- und Ausland.',
    'Auslandsnachfrage ist wie zusätzlicher Kundschaft von außerhalb, während Importe wie Ausweichen auf Konkurrenzprodukte sind.',
    'NX steigen mit Auslandseinkommen und realer Abwertung, fallen aber mit Inlandseinkommen.',
    [{ if: 'Y steigt', then: 'Importe steigen meist mit und drücken NX.' }]
  ),
  geldmengen: mk(
    'Geldmarktgleichgewicht verbindet reale Geldmenge, Einkommen und Zinssatz.',
    'Wie ein Markt für Liquidität: Mehr Einkommen erhöht den Wunsch nach Kasse, höhere Zinsen machen Kassenhaltung teurer.',
    'Darum verläuft die LM-Kurve typischerweise positiv.',
    [{ if: 'M/P steigt', then: 'LM verschiebt sich nach rechts bzw. unten.' }]
  ),
  mundell_fleming: mk(
    'Mundell-Fleming kombiniert Gütermarkt, Geldmarkt und Außenbeziehung. Welches Politiktool wirkt, hängt am Wechselkursregime.',
    'Wie ein Steuerpult mit drei Leitungen: Inland, Finanzmarkt und Ausland reagieren gleichzeitig auf einen Impuls.',
    'Flexibler Wechselkurs stärkt Geldpolitik; fixer Wechselkurs stärkt Fiskalpolitik.',
    [
      { if: 'flexibler WK + perfekte Kapitalmobilität', then: 'Geldpolitik wirkt stark, Fiskalpolitik wird über den Wechselkurs ausgebremst.' },
      { if: 'ZP-Kurve / Zahlungsbilanz-Gleichgewicht', then: 'Mehr Y belastet die LB; höheres i zieht Kapital und kann das ausgleichen (positive ZP-Steigung).' }
    ]
  ),
  wk_regime: mk(
    'Wechselkursregime verteilen Anpassungslasten unterschiedlich: Entweder bewegt sich der Kurs oder die Binnenwirtschaft muss sich stärker anpassen.',
    'Ein flexibler Kurs ist wie ein Stoßdämpfer; ein fixer Kurs ist wie ein starres Fahrwerk mit mehr Stabilität, aber härteren Schlägen.',
    'Fixe Regime gewinnen Glaubwürdigkeit, verlieren aber Anpassungsflexibilität.',
    [
      { if: 'negativer externer Schock', then: 'Frag immer: darf der Wechselkurs reagieren oder nicht?' },
      { if: 'OWR / Währungsunion', then: 'Fehlender eigener WK muss durch Mobilität, Flexibilität oder Fiskaltransfers kompensiert werden.' }
    ]
  ),
  wk_krisen: mk(
    'Währungskrisen entstehen oft dann, wenn Märkte glauben, dass ein Regime nicht mehr glaubwürdig verteidigt werden kann.',
    'Wie ein Bank-Run: Wenn alle gleichzeitig an den Ausstieg glauben, wird der Ausstieg gerade dadurch wahrscheinlicher.',
    'Erwartungen können unter fixen Wechselkursen selbst zum Krisenauslöser werden.',
    [{ if: 'Erwartete Abwertung', then: 'Dann steigen die notwendigen Verteidigungszinsen sprunghaft.' }]
  ),
  phillipskurve: mk(
    'Die Phillipskurve beschreibt den kurzfristigen Zusammenhang zwischen Inflation, Erwartungen und konjunktureller Auslastung.',
    'Mehr Druck auf dem Arbeitsmarkt kann Preise schneller steigen lassen, aber nur solange Erwartungen nicht vollständig angepasst sind.',
    'Langfristig verschwindet dieser Trade-off, wenn Erwartungen nachziehen.',
    [
      { if: 'Erwartungen steigen', then: 'Die kurzfristige Phillipskurve verschiebt sich nach oben.' },
      { if: 'Disinflation', then: 'Opferquote und kurzfristiger Output-Arbeitsmarkt-Trade-off mitdenken.' }
    ]
  ),
  zeitinkonsistenz: mk(
    'Zeitinkonsistenz bedeutet: Was ex ante vernünftig klingt, ist ex post oft nicht mehr glaubwürdig.',
    'Wie eine angekündigte Diät, die im Moment der Versuchung wieder aufgegeben wird.',
    'Ohne Bindungsmechanismus erzeugt diskretionäre Geldpolitik systematisch einen Inflationsanreiz.',
    [{ if: 'Commitment vs. Diskretion', then: 'Suche nach Inflationsbias und Erwartungsanpassung.' }]
  ),
  barro_gordon: mk(
    'Barro-Gordon macht das Zeitinkonsistenzproblem formal: Überraschungsinflation wirkt nur solange Erwartungen noch nicht angepasst sind.',
    'Ein einmaliger Trick funktioniert nur, bis alle wissen, dass du trickst.',
    'Rationale Erwartungen verschieben die Wirtschaft zum Inflationsbias ohne dauerhaften Beschäftigungsgewinn.',
    [{ if: 'rationale Erwartungen', then: 'Inflation hoch, Arbeitslosigkeit wieder natürlich.' }]
  ),
  taylor_regel: mk(
    'Die Taylor-Regel macht Geldpolitik reaktionsbasiert: Höhere Inflation oder Überauslastung führen zu höheren Zinsen.',
    'Wie ein Thermostat: Je weiter die Temperatur vom Ziel abweicht, desto stärker reagiert das Gerät.',
    'Das Taylor-Prinzip sorgt dafür, dass auch der Realzins stabilisierend steigt.',
    [
      { if: 'Inflation über Ziel', then: 'Zuerst prüfen, ob der Nominalzins mehr als eins zu eins steigen soll.' },
      { if: 'Zins nahe untergrenze', then: 'Unkonventionelle Kanäle (Bilanz, Forward Guidance) als Zusatz zu Leitzinslogik einordnen.' }
    ]
  ),
  aggregierte_pf: mk(
    'Die aggregierte Produktionsfunktion fasst zusammen, wie Kapital, Arbeit und Produktivität gesamtwirtschaftlichen Output erzeugen.',
    'Wie ein großes Rezept: Nicht eine einzelne Maschine zählt, sondern das Zusammenspiel aller Produktionsfaktoren.',
    'Grenzerträge, Kapitalintensität und Skalenerträge folgen direkt aus ihrer Form.',
    [{ if: 'Cobb-Douglas', then: 'Exponenten lesen: sie verraten Verteilung und Skalenerträge.' }]
  ),
  solow_basis: mk(
    'Im Solow-Modell treibt Sparen den Kapitalaufbau, während Abschreibungen ihn wieder abbauen.',
    'Wie ein Wasserbecken: Zufluss sind Investitionen, Abfluss sind Abschreibungen.',
    'Das Gleichgewicht liegt dort, wo sich beide gerade ausgleichen.',
    [
      { if: 'sf(k) über δk', then: 'Kapitalintensität steigt.' },
      { if: 'Steady State pro Kopf', then: 'Konstante Verhältnisse, nicht stillstehende Ökonomie.' },
      { if: 'Goldene Regel', then: 'Maximiert langfristigen Konsum c*, nicht automatisch Output Y*.' }
    ]
  ),
  tech_fortschritt: mk(
    'Mit technischem Fortschritt kann Produktion pro Kopf dauerhaft wachsen, ohne dass Kapital allein immer weiter beschleunigen muss.',
    'Bessere Ideen wirken wie zusätzliche, unsichtbare Arbeitskraft pro Beschäftigtem.',
    'Arbeitsvermehrender Fortschritt macht aus dem Solow-Modell ein dauerhaft wachsendes System pro Kopf.',
    [
      { if: 'g_A > 0', then: 'Dann wächst Y/N im Steady State mit g_A.' },
      { if: 'Wachstumszerlegung / TFP', then: 'Residuum = Rest nach Faktorbeiträgen; nicht mit perfekter Messung verwechseln.' },
      { if: 'Ländervergleich', then: 'Institutionen und Anreize gehören zur langfristigen Erklärung neben Kapitaltiefstand.' }
    ]
  ),
  schuldenquote_dynamik: mk(
    'Für Tragfähigkeit zählt die Schuldenquote: Zins-Wachstums-Differenz und Primärsaldo bestimmen den Pfad.',
    'Wie ein Rollband: Wenn der Boden (g) langsamer läuft als die Gegenkraft (r), muss aktiv gegengesteuert werden.',
    'Die Kernfrage ist Stabilisierung der Quote, nicht der absolute Schuldenstand allein.',
    [
      { if: 'r > g', then: 'Dann arbeitet der Schneeballeffekt gegen den Staat und ein Primärüberschuss wird wichtiger.' },
      { if: 'Budgetrestriktion', then: 'B_t mit Zins und Primärsaldo fortentwickeln; Primär- vs. Gesamtdefizit trennen.' },
      { if: 'Ricardianische Äquivalenz', then: 'Steuersenkung ohne Vermögensgeschenk, wenn künftige Steuern antizipiert werden.' },
      { if: 'Schuldenregeln (z. B. 3%/60%)', then: 'Als Stabilisierungs- und Commitment-Logik lesen, nicht als Naturgesetz.' }
    ]
  ),
  schuldenfinanzierung_monetarisierung: mk(
    'Finanzierungsmodus ist eine eigene Makroentscheidung: Kreditaufnahme und Monetarisierung verteilen Lasten unterschiedlich über Zins- und Inflationskanal.',
    'Wie zwei Wege derselben Rechnung: entweder später höhere Schuldlast oder schnellerer Preisdruck.',
    'Monetarisierung ist kein kostenloses Entkommen aus der Budgetrestriktion, sondern ein Trade-off.',
    [{ if: 'Monetarisierung gewählt', then: 'Zusätzlichen Inflationskanal und mittelfristige Stabilitätskosten mitprüfen.' }]
  )
};
