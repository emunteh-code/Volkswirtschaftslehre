// ============================================================
// INTUITION DATA — Makroökonomik II
// Core ideas, analogies, and exam patterns for each concept
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
  mundell_fleming: mk(
    'Mundell-Fleming kombiniert Gütermarkt, Geldmarkt und Außenbeziehung. Welches Politiktool wirkt, hängt am Wechselkursregime.',
    'Wie ein Steuerpult mit drei Leitungen: Inland, Finanzmarkt und Ausland reagieren gleichzeitig auf einen Impuls.',
    'Flexibler Wechselkurs stärkt Geldpolitik; fixer Wechselkurs stärkt Fiskalpolitik.',
    [{ if: 'flexibler WK + perfekte Kapitalmobilität', then: 'Geldpolitik wirkt stark, Fiskalpolitik wird über den Wechselkurs ausgebremst.' }]
  ),
  zp_kurve: mk(
    'Die ZP-Kurve zeigt alle Kombinationen aus Einkommen und Zins, bei denen die Zahlungsbilanz ausgeglichen ist.',
    'Wie eine Balance-Linie: Zu viel Nachfrage braucht mehr Kapitalzufluss, also meist einen höheren Zins.',
    'Mehr Einkommen verschlechtert die Leistungsbilanz; deshalb braucht das Gleichgewicht oft einen höheren Zins.',
    [{ if: 'Y steigt', then: 'Für ZB-Gleichgewicht muss typischerweise i steigen.' }]
  ),
  wirtschaftspolitik_offen: mk(
    'Offene Volkswirtschaftspolitik ist immer Regimepolitik: Dasselbe Instrument wirkt unter fixen und flexiblen Wechselkursen unterschiedlich.',
    'Wie Fahren auf trockener Straße oder Eis: Das gleiche Lenkrad reagiert je nach Untergrund ganz anders.',
    'Die Wirksamkeit von Geld- und Fiskalpolitik folgt aus Wechselkursregel, Kapitalmobilität und Erwartungsbildung.',
    [{ if: 'Politikvergleich gefragt', then: 'Immer zuerst das Wechselkursregime nennen.' }]
  ),
  wk_regime: mk(
    'Wechselkursregime verteilen Anpassungslasten unterschiedlich: Entweder bewegt sich der Kurs oder die Binnenwirtschaft muss sich stärker anpassen.',
    'Ein flexibler Kurs ist wie ein Stoßdämpfer; ein fixer Kurs ist wie ein starres Fahrwerk mit mehr Stabilität, aber härteren Schlägen.',
    'Fixe Regime gewinnen Glaubwürdigkeit, verlieren aber Anpassungsflexibilität.',
    [{ if: 'negativer externer Schock', then: 'Frag immer: darf der Wechselkurs reagieren oder nicht?' }]
  ),
  wk_krisen: mk(
    'Währungskrisen entstehen oft dann, wenn Märkte glauben, dass ein Regime nicht mehr glaubwürdig verteidigt werden kann.',
    'Wie ein Bank-Run: Wenn alle gleichzeitig an den Ausstieg glauben, wird der Ausstieg gerade dadurch wahrscheinlicher.',
    'Erwartungen können unter fixen Wechselkursen selbst zum Krisenauslöser werden.',
    [{ if: 'Erwartete Abwertung', then: 'Dann steigen die notwendigen Verteidigungszinsen sprunghaft.' }]
  ),
  opt_waehrungsraum: mk(
    'Ein optimaler Währungsraum braucht Wege, asymmetrische Schocks ohne eigenen Wechselkurs abzufedern.',
    'Wenn mehrere Regionen denselben Mantel tragen, muss er gut genug passen oder es braucht Ausgleich an anderer Stelle.',
    'Arbeitsmobilität, Lohnflexibilität und Fiskaltransfers ersetzen den fehlenden Wechselkurs.',
    [{ if: 'OWR-Bewertung', then: 'Frage immer: Wie wird ein asymmetrischer Schock abgefedert?' }]
  ),
  eurozone: mk(
    'Die Eurozone verbindet gemeinsame Geldpolitik mit nationaler Fiskalpolitik. Genau daraus entstehen Spannungen bei Krisen und Schuldenfragen.',
    'Ein gemeinsames Dach schützt alle vor Wetter, aber jede Wohnung darunter hat ihre eigenen Leitungen und Probleme.',
    'Die EWU ist ein Praxisfall für OWR, Staatsverschuldung und Zentralbankglaubwürdigkeit zugleich.',
    [{ if: 'Eurokrise gefragt', then: 'Wettbewerbsfähigkeit, Schulden, Banken und fehlende Wechselkursanpassung zusammendenken.' }]
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
  schuldenregeln: mk(
    'Schuldenregeln sollen politische Kurzfristigkeit begrenzen und Tragfähigkeit sichern.',
    'Wie ein Haushaltslimit, das verhindern soll, dass jede Regierung heute mehr verspricht und die Rechnung morgen weiterreicht.',
    'Regeln bekämpfen Defizitneigung, können aber in Krisen auch prozyklisch wirken.',
    [{ if: '3%-/60%-Regel', then: 'Mit Schuldenstabilisierung und politischer Bindung argumentieren.' }]
  ),
  budgetrestriktion: mk(
    'Die staatliche Budgetrestriktion sagt: Alte Schulden, Zinsen und Primärsaldo bestimmen die neue Verschuldung.',
    'Wie beim Dispokredit: Wer die Zinsen nicht mitbezahlt, schiebt das Problem weiter in die Zukunft.',
    'Jede heutige Steuersenkung taucht später als höhere Steuern, geringere Ausgaben oder höhere Schulden wieder auf.',
    [{ if: 'einmalige Steuersenkung', then: 'Direkt an spätere Tilgung und Zinseszins denken.' }]
  ),
  schuldenquote: mk(
    'Entscheidend ist nicht nur die Schuldenhöhe, sondern Schulden relativ zur Wirtschaftsleistung.',
    'Ein 1.000-Euro-Kredit ist für einen Studierenden etwas anderes als für einen Großkonzern.',
    'Wachstum kann die Schuldenquote entlasten; hohe Zinsen können sie hochziehen.',
    [{ if: 'r > g', then: 'Dann arbeitet der Schneeballeffekt gegen den Staat.' }]
  ),
  ricardianisch: mk(
    'Ricardianische Äquivalenz sagt: Eine Steuersenkung ist kein Vermögensgeschenk, wenn Haushalte spätere Steuern voll antizipieren.',
    'Wie wenn Eltern Taschengeld vorziehen, aber das Kind weiß, dass es später genauso viel weniger bekommt.',
    'Dann verschiebt Fiskalpolitik nur den Zahlungszeitpunkt, nicht den Ressourcenwert.',
    [{ if: 'Steuersenkung unter Ricardianischer Äquivalenz', then: 'Zusätzliche private Ersparnis statt höherem Konsum erwarten.' }]
  ),
  taylor_regel: mk(
    'Die Taylor-Regel macht Geldpolitik reaktionsbasiert: Höhere Inflation oder Überauslastung führen zu höheren Zinsen.',
    'Wie ein Thermostat: Je weiter die Temperatur vom Ziel abweicht, desto stärker reagiert das Gerät.',
    'Das Taylor-Prinzip sorgt dafür, dass auch der Realzins stabilisierend steigt.',
    [{ if: 'Inflation über Ziel', then: 'Zuerst prüfen, ob der Nominalzins mehr als eins zu eins steigen soll.' }]
  ),
  inflation_targeting: mk(
    'Inflationssteuerung verankert Erwartungen über ein klares Ziel und transparente Kommunikation.',
    'Wie ein Navigationsgerät, das den Zielort offen anzeigt, damit alle wissen, wohin gesteuert wird.',
    'Glaubwürdigkeit und Kommunikation sind hier fast so wichtig wie der Zinsschritt selbst.',
    [{ if: 'Inflation Targeting', then: 'Denke an Ziel, Transparenz und Erwartungsanker.' }]
  ),
  inflation_kosten: mk(
    'Inflation kostet nicht nur Kaufkraft, sondern verzerrt Preise, Steuerlasten und Planung.',
    'Wie ein leicht schiefes Lineal: Selbst kleine Verzerrungen summieren sich über viele Entscheidungen hinweg.',
    'Disinflation hat kurzfristige Beschäftigungskosten, verspricht aber stabilere Erwartungen mittelfristig.',
    [{ if: 'Disinflation', then: 'Phillipskurve und Opferquote mitdenken.' }]
  ),
  unkonv_geldpolitik: mk(
    'Unkonventionelle Geldpolitik beginnt dort, wo der Leitzins allein nicht mehr reicht.',
    'Wenn das normale Lenkrad blockiert, braucht man zusätzliche Hebel wie Käufe, Zusagen und Liquiditätshilfen.',
    'QE, Forward Guidance und Krisenprogramme wirken über Erwartungen, Portfolios und Risikoprämien.',
    [{ if: 'Zins an Nullgrenze', then: 'Nach Bilanzpolitik und Erwartungskanälen suchen.' }]
  ),
  wachstum_fakten: mk(
    'Wachstumsfakten ordnen, was sich langfristig gemeinsam bewegt: Kapital, Output, Produktivität und Konvergenz.',
    'Wie das Lesen eines Stadtplans vor der Fahrt: Erst die groben Muster verstehen, dann die Details.',
    'Sie liefern die empirische Bühne, auf der Solow und Produktivitätsanalyse erklärt werden.',
    [{ if: 'Langfristiges Wachstum', then: 'Zwischen Niveaueffekten und dauerhaften Wachstumsraten unterscheiden.' }]
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
    [{ if: 'sf(k) über δk', then: 'Kapitalintensität steigt.' }]
  ),
  steady_state: mk(
    'Der Steady State ist kein Stillstand der Volkswirtschaft, sondern ein Zustand konstanter Verhältnisse pro Kopf oder pro Effizienzeinheit.',
    'Wie ein Laufband: Man bewegt sich weiter, aber die relative Position bleibt gleich.',
    'Niveauänderungen sind möglich, dauerhafte Wachstumsänderungen ohne technischen Fortschritt nicht.',
    [{ if: 'k < k*', then: 'Die Wirtschaft akkumuliert Kapital und konvergiert nach oben.' }]
  ),
  goldene_sparquote: mk(
    'Die Goldene Regel fragt nicht nach maximalem Output, sondern nach maximalem Konsum im langfristigen Gleichgewicht.',
    'Zu wenig sparen lässt Potenzial liegen; zu viel sparen opfert heutigen und sogar langfristigen Konsum.',
    'Sie ist die Konsumoptimum-Version des Solow-Modells.',
    [{ if: 'Sparquote erhöhen', then: 'Immer fragen, ob man unter oder über der Goldenen Regel startet.' }]
  ),
  tech_fortschritt: mk(
    'Mit technischem Fortschritt kann Produktion pro Kopf dauerhaft wachsen, ohne dass Kapital allein immer weiter beschleunigen muss.',
    'Bessere Ideen wirken wie zusätzliche, unsichtbare Arbeitskraft pro Beschäftigtem.',
    'Arbeitsvermehrender Fortschritt macht aus dem Solow-Modell ein dauerhaft wachsendes System pro Kopf.',
    [{ if: 'g_A > 0', then: 'Dann wächst Y/N im Steady State mit g_A.' }]
  ),
  solow_residuum: mk(
    'Das Solow-Residuum misst den Teil des Wachstums, der nicht durch mehr Kapital oder Arbeit erklärt wird.',
    'Wie eine Restgröße nach einer Abrechnung: Was übrig bleibt, nennt man Produktivitätsfortschritt.',
    'Es ist kein perfektes Maß, aber zentral für Wachstumszerlegung und TFP-Interpretation.',
    [{ if: 'Wachstumszerlegung', then: 'Residuum = Rest nach Abzug der Faktorbeiträge.' }]
  ),
  institutionen: mk(
    'Institutionen beeinflussen Wachstum, weil sie Investitionsanreize, Eigentumsrechte und Innovationsbedingungen prägen.',
    'Gute Regeln sind wie gute Straßen: Sie machen Bewegung und Austausch leichter, auch wenn sie selbst nichts produzieren.',
    'Langfristiges Wachstum ist deshalb nicht nur Technik, sondern auch Politik und Ordnung.',
    [{ if: 'Ländervergleich Wachstum', then: 'Nicht nur an Kapital denken, sondern an Anreize und Spielregeln.' }]
  ),
  phillipskurve: mk(
    'Die Phillipskurve beschreibt den kurzfristigen Zusammenhang zwischen Inflation, Erwartungen und konjunktureller Auslastung.',
    'Mehr Druck auf dem Arbeitsmarkt kann Preise schneller steigen lassen, aber nur solange Erwartungen nicht vollständig angepasst sind.',
    'Langfristig verschwindet dieser Trade-off, wenn Erwartungen nachziehen.',
    [{ if: 'Erwartungen steigen', then: 'Die kurzfristige Phillipskurve verschiebt sich nach oben.' }]
  ),
  kaufkraftparitaet: mk(
    'Kaufkraftparität verknüpft Preisniveaus mit Wechselkursen. Im Kern geht es darum, ob derselbe Warenkorb überall gleich teuer ist.',
    'Wenn derselbe Burger im Ausland viel billiger ist, fragt man sofort, ob die Währung falsch bewertet ist.',
    'Absolute PPP ist ein Niveaukonzept, relative PPP ein Änderungsratenkonzept.',
    [{ if: 'Inflationsdifferenz', then: 'Zuerst an relative PPP denken.' }]
  ),
  geldmengen: mk(
    'Geldmarktgleichgewicht verbindet reale Geldmenge, Einkommen und Zinssatz.',
    'Wie ein Markt für Liquidität: Mehr Einkommen erhöht den Wunsch nach Kasse, höhere Zinsen machen Kassenhaltung teurer.',
    'Darum verläuft die LM-Kurve typischerweise positiv.',
    [{ if: 'M/P steigt', then: 'LM verschiebt sich nach rechts bzw. unten.' }]
  ),
};
