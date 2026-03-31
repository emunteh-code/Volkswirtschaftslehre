// ============================================================
// CHAPTERS & CONTENT DATA — Int. Wirtschaftsbeziehungen
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'ricardo', title: 'Ricardo-Modell', cat: 'Handelstheorie', short: 'Ricardo' },
  { id: 'heckscher_ohlin', title: 'Heckscher-Ohlin-Modell', cat: 'Handelstheorie', short: 'H-O' },
  { id: 'skalenertraege', title: 'Neue Handelstheorie', cat: 'Handelstheorie', short: 'Skalen' },
  { id: 'handelspolitik', title: 'Instrumente der Handelspolitik', cat: 'Politik', short: 'Politik' },
  { id: 'zoelle', title: 'Zölle & Wohlfahrt', cat: 'Politik', short: 'Zölle' },
  { id: 'regionalismus', title: 'Regionalismus & Welthandel', cat: 'Politik', short: 'Region' },
];

export const CONTENT = {
  ricardo: {
    motivation: 'Warum handeln Länder miteinander? David Ricardo zeigt, dass Spezialisierung auch dann vorteilhaft ist, wenn ein Land in allen Bereichen absolut produktiver ist.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Absoluter vs. Komparativer Vorteil</h3>
      <p>Ein <strong>absoluter Vorteil</strong> liegt vor, wenn ein Land ein Gut mit weniger Arbeitseinsatz produzieren kann als ein anderes. Der <strong>komparative Vorteil</strong> betrachtet hingegen die Opportunitätskosten.</p>
    </div>
    <div class="section-block">
      <h3>Das Modell</h3>
      <p>Länder spezialisieren sich auf das Gut, bei dem sie die geringeren Opportunitätskosten haben. Handel führt zu einer Ausweitung der Konsummöglichkeiten über die eigene Produktionsgrenze hinaus.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Produktivitäts-Falle:</strong> Ein Land braucht keinen absoluten Vorteil, um vom Handel zu profitieren. Nur die relativen Kostenunterschiede zählen.</div>
    </div>
    `,
    formeln: [
      { label: 'Opportunitätskosten', eq: String.raw`OK_1 = \frac{a_{L1}}{a_{L2}}`, desc: 'Kosten von Gut 1 in Einheiten von Gut 2', variables: { 'a_{Li}': 'Arbeitskoeffizient' } }
    ],
    aufgaben: [
      {
        text: String.raw`Land A braucht 1h für Wein und 2h für Käse. Land B braucht 3h für Wein und 4h für Käse. Wer hat den komparativen Vorteil bei Wein?`,
        steps: [
          { text: `Opportunitätskosten Wein in A:`, eq: String.raw`1/2 = 0{,}5 \text{ Käse.}` },
          { text: `Opportunitätskosten Wein in B:`, eq: String.raw`3/4 = 0{,}75 \text{ Käse.}` },
          { text: `Entscheidung: Wer produziert Wein "billiger"?`, eq: String.raw`\text{Land A (0,5 < 0,75).}` }
        ],
        result: String.raw`Land A hat den komparativen Vorteil bei Wein.`
      }
    ]
  },
  heckscher_ohlin: {
    motivation: 'Ricardo erklärt Handel durch Produktivitätsunterschiede. Das Heckscher-Ohlin-Modell erklärt ihn durch unterschiedliche Faktorausstattungen — Länder exportieren das, was sie relativ reichlich haben.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Faktorausstattung und Faktorintensität</h3>
      <p>Zwei Länder, zwei Güter, zwei Faktoren (Arbeit $L$, Kapital $K$). Ein Land ist <strong>kapitalreich</strong>, wenn $K/L$ relativ hoch ist. Ein Gut ist <strong>kapitalintensiv</strong>, wenn seine Produktion relativ viel Kapital einsetzt.</p>
    </div>
    <div class="section-block">
      <h3>Das Heckscher-Ohlin-Theorem</h3>
      <p>Ein Land exportiert dasjenige Gut, das den relativ reichlich vorhandenen Faktor intensiv nutzt. Das kapitalreiche Land exportiert das kapitalintensive Gut.</p>
      <div class="math-block">$$\frac{K}{L}\bigg|_{\text{Inland}} > \frac{K}{L}\bigg|_{\text{Ausland}} \implies \text{Inland exportiert kapitalintensives Gut}$$</div>
    </div>
    <div class="section-block">
      <h3>Stolper-Samuelson-Theorem</h3>
      <p>Handelsliberalisierung erhöht den Realpreis des reichlich vorhandenen Faktors und senkt den des knappen. Im kapitalreichen Land profitieren Kapitalbesitzer, Arbeiter verlieren (relativ).</p>
    </div>
    <div class="section-block">
      <h3>Faktorpreisausgleich</h3>
      <p>Unter den Modellannahmen (identische Technologien, keine Handelskosten) führt freier Handel zum vollständigen Ausgleich der Faktorpreise zwischen den Ländern — auch ohne Faktormobilität.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>H-O vs. Ricardo:</strong> Bei Ricardo unterscheiden sich die Länder in der Technologie (Arbeitsproduktivität). Bei H-O ist die Technologie identisch — nur die Faktorausstattung unterscheidet sich.</div>
    </div>
    `,
    formeln: [
      { label: 'Faktorreichlichkeit', eq: String.raw`$$\frac{K}{L}\bigg|_{\text{Inland}} > \frac{K}{L}\bigg|_{\text{Ausland}}$$`, desc: 'Inland ist kapitalreich' },
      { label: 'Stolper-Samuelson', eq: String.raw`$$p_K \uparrow, \; w \downarrow \text{ (im kapitalreichen Land bei Liberalisierung)}$$`, desc: 'Verteilungswirkung' }
    ],
    aufgaben: [
      {
        text: String.raw`Land A hat viel Kapital und wenig Arbeit. Land B hat viel Arbeit und wenig Kapital. Gut X ist kapitalintensiv, Gut Y ist arbeitsintensiv. Welches Land exportiert welches Gut?`,
        steps: [
          { text: `Faktorreichlichkeit: Land A ist kapitalreich.`, eq: String.raw`K_A/L_A > K_B/L_B` },
          { text: `H-O-Theorem anwenden:`, eq: String.raw`\text{A exportiert X (kapitalintensiv), B exportiert Y (arbeitsintensiv).}` }
        ],
        result: String.raw`Land A exportiert das kapitalintensive Gut X, Land B exportiert das arbeitsintensive Gut Y.`
      }
    ]
  },
  skalenertraege: {
    motivation: 'Die Neue Handelstheorie (Krugman) erklärt, warum ähnliche Länder miteinander handeln — steigende Skalenerträge und Produktdifferenzierung erzeugen intra-industriellen Handel.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Grenzen von Ricardo und H-O</h3>
      <p>Die klassischen Modelle erklären inter-industriellen Handel (verschiedene Güter). Der Großteil des Welthandels ist aber <strong>intra-industriell</strong>: Deutschland exportiert und importiert Autos gleichzeitig. Dies erklären steigende Skalenerträge.</p>
    </div>
    <div class="section-block">
      <h3>Interne Skalenerträge</h3>
      <p>Die Stückkosten sinken mit der Produktionsmenge des einzelnen Unternehmens:</p>
      <div class="math-block">$$AC(q) = \frac{F}{q} + c$$</div>
      <p>Fixkosten $F$ werden auf mehr Einheiten verteilt. Dies begünstigt große Firmen und führt zu monopolistischem Wettbewerb.</p>
    </div>
    <div class="section-block">
      <h3>Monopolistischer Wettbewerb (Krugman-Modell)</h3>
      <p>Jede Firma produziert eine differenzierte Variante. Handel vergrößert den Markt, erlaubt mehr Varietäten bei niedrigeren Preisen. Beide Handelspartner gewinnen durch:</p>
      <ul>
        <li><strong>Größere Produktvielfalt</strong> (mehr Varianten verfügbar)</li>
        <li><strong>Niedrigere Preise</strong> (längere Produktionsserien, sinkende Stückkosten)</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Interne vs. externe Skalenerträge:</strong> Interne Skalenerträge (firmenbezogen) führen zu unvollkommenem Wettbewerb. Externe Skalenerträge (industriebezogen) sind mit vollkommenem Wettbewerb vereinbar.</div>
    </div>
    `,
    formeln: [
      { label: 'Durchschnittskosten', eq: String.raw`$$AC = \frac{F}{q} + c$$`, desc: 'Sinkend in q (Skalenerträge)' },
      { label: 'Grubel-Lloyd-Index', eq: String.raw`$$GL_i = 1 - \frac{|X_i - M_i|}{X_i + M_i}$$`, desc: 'Maß für intra-industriellen Handel (1 = nur intra)' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Unternehmen hat Fixkosten $F=1.000.000$ und variable Stückkosten $c=10$. Berechnen Sie die Durchschnittskosten bei $q=10.000$ und $q=100.000$.`,
        steps: [
          { text: `AC bei $q=10.000$:`, eq: String.raw`1.000.000/10.000 + 10 = 110` },
          { text: `AC bei $q=100.000$:`, eq: String.raw`1.000.000/100.000 + 10 = 20` }
        ],
        result: String.raw`Stückkosten sinken von $110$ auf $20$ — Skalenerträge.`
      }
    ]
  },
  handelspolitik: {
    motivation: 'Staaten greifen vielfältig in den Handel ein. Neben Zöllen gibt es Quoten, Subventionen und nicht-tarifäre Handelshemmnisse.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Instrumente</h3>
      <ul>
        <li><strong>Zoll:</strong> Steuer auf importierte Güter (Wertzoll: ad valorem; spezifischer Zoll: pro Einheit).</li>
        <li><strong>Importquote:</strong> Mengenbeschränkung. Ähnliche Preiswirkung wie ein Zoll, aber die Quotenrente fällt an den Lizenznehmer (nicht den Staat).</li>
        <li><strong>Exportsubvention:</strong> Staatliche Zahlung pro exportierter Einheit. Spiegelbild eines Zolls — senkt den Weltmarktpreis des Gutes.</li>
        <li><strong>Nicht-tarifäre Handelshemmnisse (NTB):</strong> Technische Standards, Kennzeichnungspflichten, bürokratische Verfahren.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Zoll vs. Quote</h3>
      <p>Ein äquivalenter Zoll und eine äquivalente Quote führen zum gleichen Inlandspreis und der gleichen Importmenge. Der Unterschied:</p>
      <ul>
        <li><strong>Zoll:</strong> Einnahmen gehen an den Staat.</li>
        <li><strong>Quote:</strong> Quotenrente geht an die Importlizenzinhaber (oft ausländische Firmen).</li>
      </ul>
      <p>Bei wachsender Nachfrage: Die Quote wird restriktiver (feste Menge), der Zoll erlaubt Anpassung.</p>
    </div>
    <div class="section-block">
      <h3>Argumente für Protektion</h3>
      <ul>
        <li><strong>Infant Industry:</strong> Neue Industrien brauchen temporären Schutz (umstritten).</li>
        <li><strong>Terms-of-Trade-Argument:</strong> Ein großes Land kann durch einen Optimalzoll seine Terms of Trade verbessern.</li>
        <li><strong>Strategische Handelspolitik:</strong> Subventionen verschieben Gewinne von ausländischen zu inländischen Firmen (Brander-Spencer).</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Quotenrente:</strong> Die Quotenrente entsteht durch den Preisaufschlag, den lizenzierte Importeure erzielen. Sie ist der entscheidende Unterschied zum Zoll — verwechseln Sie nicht, wem die Rente zufällt.</div>
    </div>
    `,
    formeln: [
      { label: 'Spezifischer Zoll', eq: String.raw`$$p_{\text{Inland}} = p^* + t$$`, desc: 'Preiswirkung im kleinen Land' },
      { label: 'Terms of Trade', eq: String.raw`$$ToT = \frac{p_{\text{Export}}}{p_{\text{Import}}}$$`, desc: 'Reales Austauschverhältnis' }
    ],
    aufgaben: [
      {
        text: String.raw`Vergleichen Sie die Wohlfahrtswirkung eines Zolls von $t=5$ mit einer äquivalenten Importquote. Weltmarktpreis $p^*=20$. Wem fällt die Rente zu?`,
        steps: [
          { text: `Inlandspreis bei Zoll:`, eq: String.raw`p = 20 + 5 = 25` },
          { text: `Bei äquivalenter Quote: gleicher Preis $p=25$.`, eq: null },
          { text: `Rente beim Zoll:`, eq: String.raw`\text{Staat (Zolleinnahmen).}` },
          { text: `Rente bei Quote:`, eq: String.raw`\text{Lizenzinhaber (Quotenrente).}` }
        ],
        result: String.raw`Gleiche Preis- und Mengenwirkung. Zoll: Einnahmen an den Staat. Quote: Rente an Lizenzinhaber.`
      }
    ]
  },
  zoelle: {
    motivation: 'Zölle sind das klassische Instrument der Handelspolitik. Ihre Wohlfahrtsanalyse zeigt, wer gewinnt und wer verliert — und warum der Nettoverlust fast immer überwiegt.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Mechanik eines Importzolls (kleines Land)</h3>
      <p>Ein spezifischer Zoll $t$ erhöht den Inlandspreis um genau $t$:</p>
      <div class="math-block">$$p_{Inland} = p^* + t$$</div>
      <p>Der Weltmarktpreis $p^*$ bleibt unverändert (Annahme: kleines Land). Inländische Produzenten produzieren mehr, Konsumenten konsumieren weniger, die Importmenge sinkt.</p>
    </div>
    <div class="section-block">
      <h3>Wohlfahrtsanalyse</h3>
      <ul>
        <li><strong>Konsumentenrente:</strong> Sinkt um Fläche $a + b + c + d$ (höherer Preis, weniger Konsum).</li>
        <li><strong>Produzentenrente:</strong> Steigt um Fläche $a$ (höherer Preis, mehr Produktion).</li>
        <li><strong>Staateinnahmen:</strong> Steigen um Fläche $c$ (Zoll × Importmenge).</li>
        <li><strong>Nettowohlfahrtsverlust:</strong> Dreiecke $b + d$ — <strong>Deadweight Loss</strong>.</li>
      </ul>
      <p>$b$ ist die Produktionsverzerrung (ineffiziente heimische Produktion), $d$ die Konsumverzerrung (entgangener Konsum).</p>
    </div>
    <div class="section-block">
      <h3>Großes Land: Optimalzoll</h3>
      <p>Ein großes Land kann durch einen Zoll seine Terms of Trade verbessern: Der Weltmarktpreis sinkt, weil die geringere Nachfrage auf den Weltmarkt drückt. Der <strong>Optimalzoll</strong> maximiert den nationalen Nettogewinn aus verbessertem ToT minus Deadweight Loss. Vergeltungszölle des Auslands können diesen Vorteil zunichtemachen.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Wohlfahrt = Summe, nicht Verteilung:</strong> Die Gesamtwohlfahrt sinkt ($b + d > 0$), obwohl Produzenten und Staat gewinnen. Das Ergebnis ist ein Verteilungskonflikt, kein Pareto-Gewinn.</div>
      <div class="warn-box"><strong>Kleines vs. großes Land:</strong> Im kleinen Land ist der Zoll immer wohlfahrtsmindernd. Im großen Land kann er wohlfahrtssteigernd sein (Optimalzoll) — aber nur unter Ignorierung von Vergeltungsmaßnahmen.</div>
    </div>
    `,
    formeln: [
      { label: 'Wohlfahrtsänderung', eq: String.raw`\Delta W = \Delta PR + \Delta KR + \Delta G`, desc: 'Gesamteffekt' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein kleines Land führt einen Importzoll ein. Wie ändert sich der Weltmarktpreis?`,
        steps: [
          { text: `Interpretation: Was definiert ein "kleines Land"?`, eq: String.raw`\text{Es kann den Weltmarktpreis nicht beeinflussen.}` },
          { text: `Schlussfolgerung:`, eq: String.raw`P^* \text{ bleibt unverändert.}` }
        ],
        result: String.raw`Weltmarktpreis bleibt gleich; nur der Inlandspreis steigt.`
      }
    ]
  },
  regionalismus: {
    motivation: 'Freihandelsabkommen und Zollunionen sind Sonderformen der Handelsliberalisierung. Sie schaffen Handel, können ihn aber auch umlenken.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Stufen der Integration</h3>
      <ol>
        <li><strong>Freihandelszone (FTA):</strong> Keine Binnenzölle, aber jedes Land behält eigene Außenzölle (z.B. NAFTA/USMCA).</li>
        <li><strong>Zollunion:</strong> Keine Binnenzölle + gemeinsamer Außenzoll (z.B. EU).</li>
        <li><strong>Gemeinsamer Markt:</strong> Zollunion + freier Faktorverkehr.</li>
        <li><strong>Wirtschaftsunion:</strong> Gemeinsamer Markt + harmonisierte Wirtschaftspolitik.</li>
      </ol>
    </div>
    <div class="section-block">
      <h3>Handelsschaffung vs. Handelsumlenkung (Viner)</h3>
      <p><strong>Handelsschaffung:</strong> Teure Inlandsproduktion wird durch billigere Importe aus dem Partnerland ersetzt. Wohlfahrtsgewinn.</p>
      <p><strong>Handelsumlenkung:</strong> Billige Importe aus Drittländern werden durch teurere Importe aus dem Partnerland ersetzt (weil der Partnerländer-Import zollfrei ist, der Drittland-Import nicht). Wohlfahrtsverlust.</p>
      <p>Die Gesamtwirkung einer Zollunion ist ambivalent und hängt von der relativen Stärke beider Effekte ab.</p>
    </div>
    <div class="section-block">
      <h3>WTO und Meistbegünstigung</h3>
      <p>Die WTO basiert auf dem <strong>Meistbegünstigungsprinzip (MFN)</strong>: Jeder Handelspartner erhält die gleichen Zollsätze. Regionale Abkommen sind eine Ausnahme (Art. XXIV GATT), die unter bestimmten Bedingungen zulässig sind.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Zollunion ≠ Freihandel:</strong> Eine Zollunion schafft internen Freihandel, errichtet aber möglicherweise Barrieren gegenüber Dritten. Handelsumlenkung kann die Wohlfahrt senken, obwohl intern liberalisiert wird.</div>
    </div>
    `,
    formeln: [
      { label: 'Nettowirkung Zollunion', eq: String.raw`$$\Delta W = \text{Handelsschaffung} - \text{Handelsumlenkung}$$`, desc: 'Viner-Kriterium' }
    ],
    aufgaben: [
      {
        text: String.raw`Land A (Zoll $20\%$) bildet eine Zollunion mit Land B. Land C ist effizienter als B. Vor der Union importiert A von C (mit Zoll). Nach der Union importiert A von B (zollfrei). Liegt Handelsschaffung oder -umlenkung vor?`,
        steps: [
          { text: `Vor Union: Import von C zum Preis $p_C \cdot 1{,}2$.`, eq: null },
          { text: `Nach Union: Import von B zum Preis $p_B$ (zollfrei), obwohl $p_B > p_C$.`, eq: null },
          { text: `Klassifikation: Import wechselt von günstigerem C zu teurerem B.`, eq: String.raw`\text{Handelsumlenkung.}` }
        ],
        result: String.raw`Handelsumlenkung — A ersetzt den effizienten Lieferanten C durch den ineffizienteren Partner B.`
      }
    ]
  }
};
