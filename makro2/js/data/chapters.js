// ============================================================
// CHAPTERS & CONTENT DATA — Makroökonomik II
// All 34 macroeconomics concepts (Blanchard & Illing, open economy + growth)
// ============================================================

export const CHAPTERS = [
  // Kapitel 1 — Offene Volkswirtschaft: Wechselkurse & Zahlungsbilanz (Blanchard Ch.17)
  { id:'wechselkurs',      title:'Wechselkurs & Kaufkraftparität',       cat:'Offene VW I',      short:'WK' },
  { id:'zinsparitaet',     title:'Zinsparität & Wechselkurserwartungen', cat:'Offene VW I',      short:'ZP' },
  { id:'zahlungsbilanz',   title:'Zahlungsbilanz',                       cat:'Offene VW I',      short:'ZB' },
  { id:'marshall_lerner',  title:'Marshall-Lerner-Bedingung & J-Kurve',  cat:'Offene VW I',      short:'ML' },
  // Kapitel 2 — IS in offener Volkswirtschaft (Blanchard Ch.18)
  { id:'offene_is',        title:'IS-Kurve in offener Volkswirtschaft',  cat:'Offene VW II',     short:'IS offen' },
  { id:'nettoexporte',     title:'Nettoexporte & Wechselkursmechanismus',cat:'Offene VW II',     short:'NX' },
  // Kapitel 3 — IS-LM-ZP: Mundell-Fleming (Blanchard Ch.19)
  { id:'mundell_fleming',  title:'Mundell-Fleming-Modell (IS-LM-ZP)',    cat:'Mundell-Fleming',  short:'MF' },
  { id:'zp_kurve',         title:'ZP-Kurve & Zahlungsbilanzgleichgewicht',cat:'Mundell-Fleming', short:'ZP-Kurve' },
  { id:'wirtschaftspolitik_offen', title:'Wirtschaftspolitik im MF-Modell', cat:'Mundell-Fleming', short:'WiPo offen' },
  // Kapitel 4 — Wechselkursregime & Krisen (Blanchard Ch.20)
  { id:'wk_regime',        title:'Wechselkursregime',                    cat:'WK-Regime & Krisen', short:'WK-Regime' },
  { id:'wk_krisen',        title:'Währungskrisen & spekulative Attacken', cat:'WK-Regime & Krisen', short:'WK-Krisen' },
  { id:'opt_waehrungsraum',title:'Optimaler Währungsraum (OWR)',          cat:'WK-Regime & Krisen', short:'OWR' },
  { id:'eurozone',         title:'Eurozone & Europäische Währungsunion', cat:'WK-Regime & Krisen', short:'EWU' },
  // Kapitel 5 — Geldpolitik: Zeitinkonsistenz & Schuldenregeln (Blanchard Ch.21)
  { id:'zeitinkonsistenz', title:'Zeitinkonsistenz der Geldpolitik',     cat:'Politische Ökonomie', short:'Zeitink.' },
  { id:'barro_gordon',     title:'Barro-Gordon-Modell',                  cat:'Politische Ökonomie', short:'B-G' },
  { id:'schuldenregeln',   title:'Schulden- & Defizitregeln',            cat:'Politische Ökonomie', short:'Regeln' },
  // Kapitel 6 — Staatsverschuldung (Blanchard Ch.22)
  { id:'budgetrestriktion',title:'Staatliche Budgetrestriktion',         cat:'Staatsverschuldung', short:'Budgetrest.' },
  { id:'schuldenquote',    title:'Schuldenquote & Schuldenentwicklung',  cat:'Staatsverschuldung', short:'Schuldquote' },
  { id:'ricardianisch',    title:'Ricardianische Äquivalenz',            cat:'Staatsverschuldung', short:'Ricardo' },
  // Kapitel 7 — Geldpolitik: Regeln & Strategien (Blanchard Ch.23)
  { id:'taylor_regel',     title:'Taylor-Regel & Zinspolitik',          cat:'Geldpolitik II',    short:'Taylor' },
  { id:'inflation_targeting', title:'Inflationssteuerung & EZB-Strategie', cat:'Geldpolitik II', short:'IT' },
  { id:'inflation_kosten', title:'Kosten der Inflation & Disinflation',  cat:'Geldpolitik II',   short:'Infl.-Kosten' },
  { id:'unkonv_geldpolitik', title:'Unkonventionelle Geldpolitik & QE', cat:'Geldpolitik II',   short:'QE' },
  // Kapitel 8 — Wachstum: Stilisierte Fakten & Produktionsfunktion (Blanchard Ch.10)
  { id:'wachstum_fakten',  title:'Stilisierte Fakten des Wachstums',    cat:'Wachstumstheorie I', short:'Fakten' },
  { id:'aggregierte_pf',   title:'Aggregierte Produktionsfunktion',     cat:'Wachstumstheorie I', short:'Agg. PF' },
  // Kapitel 9 — Solow-Modell ohne TF (Blanchard Ch.11)
  { id:'solow_basis',      title:'Solow-Modell: Grundstruktur',         cat:'Solow-Modell',      short:'Solow' },
  { id:'steady_state',     title:'Gleichgewicht (Steady State)',        cat:'Solow-Modell',      short:'SS' },
  { id:'goldene_sparquote',title:'Goldene Sparquote',                   cat:'Solow-Modell',      short:'Golden Rule' },
  // Kapitel 10 — Solow-Modell mit TF (Blanchard Ch.12)
  { id:'tech_fortschritt', title:'Technologischer Fortschritt im Solow-Modell', cat:'Solow mit TF', short:'TF' },
  { id:'solow_residuum',   title:'Solow-Residuum & Wachstumsquellen',  cat:'Solow mit TF',      short:'Residuum' },
  { id:'institutionen',    title:'Institutionen & langfristiges Wachstum', cat:'Solow mit TF',   short:'Institut.' },
  // Querschnittskonzepte
  { id:'phillipskurve',    title:'Phillipskurve & Okun-Gesetz',        cat:'Querschnitt',        short:'Phillips' },
  { id:'kaufkraftparitaet',title:'Kaufkraftparität (KKP)',             cat:'Querschnitt',        short:'KKP' },
  { id:'geldmengen',       title:'Geldmenge, Geldnachfrage & LM-Kurve',cat:'Querschnitt',        short:'LM' },
];

export const CONTENT = {

// ─────────────────────────────────────────────────────────────
// 1. WECHSELKURS & KAUFKRAFTPARITÄT
// ─────────────────────────────────────────────────────────────
wechselkurs: {
  motivation: 'Der Wechselkurs ist das zentrale Preissignal in der offenen Volkswirtschaft — er verbindet inländische und ausländische Güter-, Kapital- und Arbeitsmärkte.',
  theorie: String.raw`
<div class="section-block">
<h3>Nominaler Wechselkurs</h3>
<p>Der <strong>nominale Wechselkurs</strong> $E$ gibt an, wie viele Einheiten ausländischer Währung man für eine Einheit inländischer Währung erhält (<em>Mengennotierung</em>). Im Kurs ist das die Blanchard/Illing-Notation: der Preis der inländischen Währung in ausländischer Währung.</p>
<div class="math-block">$$E = \frac{\text{Einheiten Fremdwährung}}{\text{Einheit Inlandswährung}}$$</div>
<p>Ein Anstieg von $E$ bedeutet <strong>Aufwertung</strong> der Inlandswährung (ein Euro kauft mehr Dollar); ein Rückgang bedeutet <strong>Abwertung</strong>.</p>
<div class="info-grid">
<div class="info-card"><div class="label">Aufwertung</div><div class="value">↑ E</div><p>Inlandswährung wird stärker. Exporte teurer, Importe billiger.</p></div>
<div class="info-card"><div class="label">Abwertung</div><div class="value">↓ E</div><p>Inlandswährung wird schwächer. Exporte billiger, Importe teurer.</p></div>
</div>
</div>
<div class="section-block">
<h3>Realer Wechselkurs</h3>
<p>Der <strong>reale Wechselkurs</strong> $\varepsilon$ misst den Preis inländischer Güter in Einheiten ausländischer Güter.</p>
<div class="math-block">$$\varepsilon = \frac{E \cdot P}{P^*}$$</div>
<p>wobei $P$ das inländische Preisniveau und $P^*$ das ausländische Preisniveau ist. Gilt $\varepsilon > 1$, dann sind inländische Güter relativ teuer.</p>
<p>Ein Anstieg von $\varepsilon$ bedeutet <strong>reale Aufwertung des Inlands</strong>: inländische Güter werden relativ teurer, Exporte werden gebremst und Importe attraktiver. Ein Rückgang von $\varepsilon$ ist eine reale Abwertung.</p>
</div>
<div class="section-block">
<h3>Absolute Kaufkraftparität (KKP)</h3>
<p>Im Gleichgewicht sollte derselbe Güterkorb überall gleich teuer sein (<em>Gesetz des einheitlichen Preises</em>). Daraus folgt die <strong>absolute KKP</strong>:</p>
<div class="math-block">$$E \cdot P = P^* \quad \Longleftrightarrow \quad E_{\text{KKP}} = \frac{P^*}{P}$$</div>
</div>
<div class="section-block">
<h3>Relative KKP</h3>
<p>Die <strong>relative KKP</strong> prognostiziert die <em>Veränderungsrate</em> des Wechselkurses:</p>
<div class="math-block">$$\frac{\Delta E}{E} \approx \pi^* - \pi$$</div>
<p>Ist die Inlandsinflation höher als die Auslandsinflation, dann fällt $E$: Die Inlandswährung wertet in Mengennotierung ab. Intuition: Höhere inländische Preise machen die heimischen Güter relativ teurer; der nominale Wechselkurs muss das langfristig teilweise ausgleichen.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Notierungskonvention verwechseln</strong> In diesem Kurs ist $E$ die Mengennotierung (Fremdwährung pro Inlandswährung). Eine Aufwertung bedeutet also <em>steigendes</em> $E$.</div>
<div class="warn-box"><strong>Realer ≠ nominaler WK</strong> Der reale Wechselkurs $\varepsilon = EP/P^*$ ergänzt den nominalen Kurs um das relative Preisniveau. KKP ist eine langfristige Tendenzaussage, keine Kurzfristregel.</div>
</div>
`,
  formeln: [
    { label:'Realer Wechselkurs', eq: String.raw`$$\varepsilon = \frac{E \cdot P}{P^*}$$`, desc:'Preis inländischer Güter in Einheiten ausländischer Güter', variables: { 'E': 'Nominaler Wechselkurs (Fremdwährung pro Inlandswährung)', 'P': 'Inländisches Preisniveau', 'P^*': 'Ausländisches Preisniveau', '\\varepsilon': 'Realer Wechselkurs' } },
    { label:'Absolute KKP', eq: String.raw`$$E_{\text{KKP}} = \frac{P^*}{P}$$`, desc:'KKP-konsistenter Wechselkurs in Mengennotierung', variables: { 'E_{\\text{KKP}}': 'KKP-konsistenter Wechselkurs', 'P': 'Inl. Preisniveau', 'P^*': 'Ausl. Preisniveau' } },
    { label:'Relative KKP', eq: String.raw`$$\frac{\Delta E}{E} \approx \pi^* - \pi$$`, desc:'WK-Änderung ≈ ausländische minus inländische Inflation', variables: { '\\Delta E/E': 'Änderungsrate des WK', '\\pi': 'Inlandsinflation', '\\pi^*': 'Auslandsinflation' } },
  ],
  aufgaben: [
    {
      text: String.raw`Der nominale Wechselkurs beträgt $E = 1{,}2$ (USD/EUR). Das inländische Preisniveau ist $P = 110$, das ausländische $P^* = 100$. Berechne den realen Wechselkurs $\varepsilon$ und interpretiere ihn.`,
      steps: [
        { text: 'Formel für den realen Wechselkurs:', eq: String.raw`$$\varepsilon = \frac{E \cdot P}{P^*}$$` },
        { text: 'Einsetzen:', eq: String.raw`$$\varepsilon = \frac{1{,}2 \cdot 110}{100} = 1{,}32$$` },
        { text: String.raw`Interpretation: $\varepsilon > 1$ bedeutet reale Aufwertung des Inlands. Inländische Güter sind relativ teuer, die Wettbewerbsfähigkeit leidet.`, eq: null },
      ],
      result: String.raw`$\varepsilon = 1{,}32$ — inländische Güter sind relativ teuer; das entspricht einer realen Aufwertung.`
    },
    {
      text: String.raw`Die Inlandsinflation beträgt $\pi = 4\%$, die Auslandsinflation $\pi^* = 1\%$. Um wie viel Prozent ändert sich der nominale Wechselkurs gemäß relativer KKP?`,
      steps: [
        { text: 'Relative KKP:', eq: String.raw`$$\frac{\Delta E}{E} \approx \pi^* - \pi = 1\% - 4\% = -3\%$$` },
        { text: String.raw`Da $\pi > \pi^*$, verliert die Inlandswährung an Wert. In Mengennotierung fällt $E$ daher um etwa 3%.`, eq: null },
      ],
      result: String.raw`Inlandswährung wertet um ca. $3\%$ ab (E sinkt).`
    },
    {
      text: String.raw`Was versteht man unter absolutem Gesetz des einheitlichen Preises? Unter welchen Bedingungen gilt es und warum versagt es in der Praxis?`,
      steps: [
        { text: 'Absolute KKP: Ein Gut kostet überall gleich viel, wenn man alles in derselben Währung ausdrückt:', eq: String.raw`$$E \cdot P_{\text{Inland}} = P_{\text{Ausland}}$$` },
        { text: 'Voraussetzungen: keine Handelsbarrieren, keine Transportkosten, homogene Güter.', eq: null },
        { text: 'Gründe für Versagen: Nicht-handelbare Güter (Friseur, Wohnungen), Transportkosten, Zölle, unterschiedliche Warenkörbe im Preisindex.', eq: null },
      ],
      result: 'Absolute KKP gilt nur als langfristige Tendenz für handelbare Güter.'
    },
    {
      text: String.raw`Der EUR/USD-Kurs steigt von $E = 1{,}10$ auf $E = 1{,}20$. Handelt es sich um eine Aufwertung oder Abwertung des Euro? Was sind die ökonomischen Konsequenzen?`,
      steps: [
        { text: String.raw`$E$ steigt: Man erhält mehr USD pro EUR $\Rightarrow$ Euro wertet auf.`, eq: null },
        { text: 'Konsequenz für Exporte: Europäische Güter werden für US-Käufer teurer → Exportrückgang.', eq: null },
        { text: 'Konsequenz für Importe: US-Güter werden für Europäer billiger → Importanstieg.', eq: null },
        { text: 'Realer Effekt:', eq: String.raw`$$\varepsilon = \frac{E \cdot P}{P^*} \quad \text{steigt} \Rightarrow \text{Inlandsgüter werden relativ teurer}$$` },
      ],
      result: 'Euro-Aufwertung: Exporte sinken, Importe steigen — Verschlechterung der Leistungsbilanz.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 2. ZINSPARITÄT
// ─────────────────────────────────────────────────────────────
zinsparitaet: {
  motivation: 'Die Zinsparität erklärt, wie Kapitalmärkte den Wechselkurs bestimmen: Investoren vergleichen In- und Auslandsrenditen und der Wechselkurs stellt sich so ein, dass Arbitrage unmöglich wird.',
  theorie: String.raw`
<div class="section-block">
<h3>Grundidee: Renditegleichgewicht</h3>
<p>Ein Anleger kann sein Kapital im Inland zum Zinssatz $i$ anlegen oder im Ausland zum Zinssatz $i^*$ — aber dann trägt er das Wechselkursrisiko. Im Gleichgewicht müssen beide Alternativen gleich rentabel sein.</p>
<p><strong>Inlandsanlage:</strong> 1 € heute → $(1+i)$ € nach einem Jahr.</p>
<p><strong>Auslandsanlage:</strong> 1 € → $E_t$ Fremdwährung → $E_t(1+i^*)$ nach einem Jahr → $\dfrac{(1+i^*)E_t}{E^e_{t+1}}$ € (beim erwarteten Kurs $E^e_{t+1}$ zurückgetauscht).</p>
</div>
<div class="section-block">
<h3>Ungedeckte Zinsparität (UZP)</h3>
<p>Im Gleichgewicht gilt Indifferenz zwischen beiden Anlagen:</p>
<div class="math-block">$$(1+i) = (1+i^*)\frac{E}{E^e}$$</div>
<p>Für kleine Zinsen gilt die Approximation:</p>
<div class="math-block">$$i \approx i^* - \frac{E^e - E}{E}$$</div>
<p>Ein höherer Inlandszins muss also durch eine erwartete <strong>Abwertung der Inlandswährung</strong> kompensiert werden. Deshalb liegt der heutige Wechselkurs bei hohem $i$ typischerweise über dem erwarteten zukünftigen Kurs.</p>
<p>Umgeformt ergibt sich der gleichgewichtige Wechselkurs:</p>
<div class="math-block">$$E = \frac{1+i}{1+i^*} E^e \approx (1 + i - i^*)E^e$$</div>
</div>
<div class="section-block">
<h3>Interpretation & Komparative Statik</h3>
<div class="info-grid">
<div class="info-card"><div class="label">↑ i (Inlandszins steigt)</div><div class="value">↑ E (Aufwertung)</div><p>Inlandswährung wird attraktiver → Kapitalzufluss → Aufwertung.</p></div>
<div class="info-card"><div class="label">↑ i* (Auslandszins steigt)</div><div class="value">↓ E (Abwertung)</div><p>Auslandsanlage attraktiver → Kapitalabfluss → Abwertung.</p></div>
<div class="info-card"><div class="label">↑ E^e (künftiger Kurs)</div><div class="value">↑ E (sofort)</div><p>Ein höher erwarteter zukünftiger Kurs hebt über die Zinsparität schon heute den aktuellen Kurs.</p></div>
</div>
</div>
<div class="section-block">
<h3>Gedeckte Zinsparität (GZP)</h3>
<p>Beim Devisenterminmarkt sichert man das Wechselkursrisiko ab. Die <strong>gedeckte Zinsparität</strong> gilt (fast) perfekt:</p>
<div class="math-block">$$(1+i) = (1+i^*)\frac{F}{E}$$</div>
<p>wobei $F$ der <strong>Terminkurs</strong> (forward rate) ist. Die GZP gilt durch Arbitrage erzwungen; die UZP setzt rationale Erwartungen und Risikoneutralität voraus.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Richtung der Kausalität</strong> Die UZP beschreibt ein Gleichgewicht, keine Kausalität. Sowohl $i$ als auch $E^e$ bestimmen $E$.</div>
<div class="warn-box"><strong>Aufwertung heute, Abwertung erwartet</strong> Wenn $i > i^*$, liegt der aktuelle Kurs $E$ über dem erwarteten zukünftigen Kurs $E^e$: Die Inlandswährung wertet heute auf, damit später eine erwartete Abwertung den Zinsvorteil kompensiert.</div>
</div>
`,
  formeln: [
    { label:'Exakte UZP', eq: String.raw`$$(1+i) = (1+i^*)\,\frac{E}{E^e}$$`, desc:'Gleichgewicht zwischen In- und Auslandsanlage', variables: { 'i': 'Inländischer Zinssatz', 'i^*': 'Ausländischer Zinssatz', 'E': 'Heutiger nominaler WK', 'E^e': 'Erwarteter WK (nächste Periode)' } },
    { label:'UZP (Approximation)', eq: String.raw`$$i \approx i^* - \frac{E^e - E}{E}$$`, desc:'Inlandszins ≈ Auslandszins minus erwartete WK-Änderung', variables: { 'i': 'Inlandszins', 'i^*': 'Auslandszins', '(E^e-E)/E': 'Erwartete Auf- bzw. Abwertungsrate' } },
    { label:'Gleichgewichtiger WK', eq: String.raw`$$E = \frac{1+i}{1+i^*}E^e$$`, desc:'Aktueller WK als Funktion von Zinsunterschied und Erwartungen', variables: { 'E': 'Gleichgewichtiger WK', 'E^e': 'Erwarteter zukünftiger WK', 'i - i^*': 'Zinsdifferential' } },
  ],
  aufgaben: [
    {
      text: String.raw`Der Inlandszins beträgt $i = 5\%$, der Auslandszins $i^* = 2\%$. Der erwartete Wechselkurs ist $E^e = 1{,}20$. Berechne den gleichgewichtigen heutigen Wechselkurs $E$ (Approximation).`,
      steps: [
        { text: 'UZP in umgeformter Form:', eq: String.raw`$$E = \frac{1+i}{1+i^*} E^e$$` },
        { text: 'Einsetzen:', eq: String.raw`$$E = \frac{1{,}05}{1{,}02} \cdot 1{,}20 \approx 1{,}235$$` },
        { text: 'Ergebnis:', eq: String.raw`$$E \approx 1{,}235$$` },
        { text: String.raw`Interpretation: $E > E^e$. Die Inlandswährung ist heute aufgewertet; die erwartete spätere Abwertung kompensiert den Zinsvorteil.`, eq: null },
      ],
      result: String.raw`$E \approx 1{,}235$ — die Inlandswährung ist heute aufgewertet und wird künftig teilweise wieder abwerten.`
    },
    {
      text: String.raw`Die EZB erhöht den Leitzins von $2\%$ auf $4\%$. $i^* = 2\%$ und $E^e = 1{,}0$ bleiben konstant. Wie verändert sich der Euro-Wechselkurs $E$?`,
      steps: [
        { text: 'Vor EZB-Erhöhung:', eq: String.raw`$$E_{\text{alt}} = \frac{1{,}02}{1{,}02}\cdot 1{,}0 = 1{,}00$$` },
        { text: 'Nach EZB-Erhöhung ($i = 4\%$):', eq: String.raw`$$E_{\text{neu}} = \frac{1{,}04}{1{,}02}\cdot 1{,}0 \approx 1{,}020$$` },
        { text: String.raw`$E$ steigt von 1,00 auf etwa 1,02. In der Kursnotation des Moduls bedeutet das eine nominale Aufwertung des Euro.`, eq: null },
        { text: 'Ökonomisch: Höhere Inlandszinsen machen Euro-Anlagen attraktiver. Kapital fließt ins Inland, die Nachfrage nach Euro steigt und der aktuelle Wechselkurs wertet auf.', eq: null },
      ],
      result: String.raw`Zinserhöhung → Kapitalzufluss → Aufwertung der Inlandswährung.`
    },
    {
      text: String.raw`Erkläre anhand der UZP, warum ein Land mit hohem Zinssatz nicht dauerhaft Kapitalzuflüsse erzeugen kann.`,
      steps: [
        { text: String.raw`UZP: $i \approx i^* - (E^e - E)/E$. Wenn $i > i^*$, muss gelten: $(E^e - E)/E < 0$, also $E > E^e$.`, eq: null },
        { text: String.raw`Die Währung ist also heute aufgewertet. Gerade deshalb erwarten Investoren für später eine Abwertung, die den Zinsvorteil wieder neutralisiert.`, eq: null },
        { text: 'Ergebnis: Der hohe Zinssatz lockt zwar Kapital an, aber die erwartete Abwertung hebt den Renditevorsprung auf. Im Gleichgewicht keine systematischen Kapitalflüsse.', eq: null },
      ],
      result: 'UZP: Zinsvorteil wird durch erwartete Abwertung exakt kompensiert — kein dauerhafter Kapitalstrom.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 3. ZAHLUNGSBILANZ
// ─────────────────────────────────────────────────────────────
zahlungsbilanz: {
  motivation: 'Die Zahlungsbilanz erfasst alle wirtschaftlichen Transaktionen zwischen Inländern und Ausländern — sie ist der makroökonomische Spiegel der offenen Volkswirtschaft.',
  theorie: String.raw`
<div class="section-block">
<h3>Struktur der Zahlungsbilanz</h3>
<p>Die Zahlungsbilanz (ZB) gliedert sich in drei Hauptkonten:</p>
<div class="info-grid">
<div class="info-card"><div class="label">Leistungsbilanz (LB)</div><div class="value">CA</div><p>Handel mit Gütern und Dienstleistungen + Faktorerträge + Transfers. Kern: Handelsbilanz (NX).</p></div>
<div class="info-card"><div class="label">Kapitalbilanz (KB)</div><div class="value">KA</div><p>Kauf und Verkauf von Vermögenswerten (Aktien, Anleihen, FDI). Kapitalzufluss = positiv.</p></div>
<div class="info-card"><div class="label">Devisenbilanzkonto</div><div class="value">Δ Reserven</div><p>Veränderung der Währungsreserven (bei festen WK). Ausgleichsposten.</p></div>
</div>
<p>Grundprinzip: Die Zahlungsbilanz muss immer ausgeglichen sein:</p>
<div class="math-block">$$\text{CA} + \text{KA} + \Delta \text{Reserven} = 0$$</div>
</div>
<div class="section-block">
<h3>Leistungsbilanz</h3>
<p>Die Leistungsbilanz misst:</p>
<div class="math-block">$$\text{CA} = \underbrace{NX}_{\text{Handelsbilanz}} + \underbrace{\text{NY}}_{\text{Faktoreinkommen}} + \underbrace{\text{NTR}}_{\text{Transfers}}$$</div>
<p>Vereinfachend gilt für Makromodelle: $\text{CA} \approx NX = X - M$.</p>
<p>Bei flexiblen Wechselkursen gilt: $\text{CA} + \text{KA} = 0$, d.h. ein Leistungsbilanzdefizit muss durch einen Kapitalbilanzzufluss finanziert werden.</p>
</div>
<div class="section-block">
<h3>Verbindung zur VGR</h3>
<p>Aus der Volkswirtschaftlichen Gesamtrechnung gilt:</p>
<div class="math-block">$$Y = C + I + G + NX$$</div>
<p>Umgeformt: $NX = Y - (C + I + G) = Y - \text{Absorption}$.</p>
<p>Ein Leistungsbilanzüberschuss ($NX > 0$) bedeutet: Das Inland produziert mehr als es absorbiert (konsumiert + investiert + Staatsausgaben) — das "Mehr" wird exportiert.</p>
</div>
<div class="section-block">
<h3>Leistungsbilanz & Ersparnisse</h3>
<p>Aus $Y = C + I + G + NX$ und $S_{\text{priv}} = Y - T - C$, $S_{\text{staat}} = T - G$:</p>
<div class="math-block">$$NX = \underbrace{(S_{\text{priv}} + S_{\text{staat}})}_{\text{Nationale Ersparnis}} - I$$</div>
<p>Ein Leistungsbilanzdefizit bedeutet: Investitionen übersteigen nationale Ersparnisse — das Fehlende wird aus dem Ausland finanziert (Kapitalimport).</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Zahlungsbilanz "im Defizit"</strong> Die Gesamtzahlungsbilanz ist buchhalterisch immer ausgeglichen. Was gemeint ist: Defizit in der Leistungsbilanz, kompensiert durch Kapitalzufluss.</div>
<div class="warn-box"><strong>Kapitalzufluss = Schulden?</strong> Ein Kapitalbilanzzufluss bedeutet, dass Ausländer Inlandsvermögen kaufen. Das ist keine Schuld im pejorativen Sinne — aber das Inland "konsumiert auf Pump".</div>
</div>
`,
  formeln: [
    { label:'ZB-Gleichgewicht', eq: String.raw`$$\text{CA} + \text{KA} + \Delta R = 0$$`, desc:'Buchhalterische Identität der Zahlungsbilanz', variables: { '\\text{CA}': 'Leistungsbilanz (Current Account)', '\\text{KA}': 'Kapitalbilanz (Capital/Financial Account)', '\\Delta R': 'Änderung der Währungsreserven' } },
    { label:'NX = Ersparnisse − Investitionen', eq: String.raw`$$NX = S - I$$`, desc:'Leistungsbilanz = nat. Ersparnisüberschuss', variables: { 'NX': 'Nettoexporte (Leistungsbilanz)', 'S': 'Nationale Ersparnis ($S_{\\text{priv}} + S_{\\text{staat}}$)', 'I': 'Inlandsinvestitionen' } },
  ],
  aufgaben: [
    {
      text: String.raw`Eine Volkswirtschaft hat: $Y = 5000$, $C = 3000$, $I = 800$, $G = 700$. Berechne $NX$ und interpretiere das Ergebnis im Hinblick auf nationale Ersparnisse.`,
      steps: [
        { text: 'VGR-Identität:', eq: String.raw`$$NX = Y - C - I - G = 5000 - 3000 - 800 - 700 = 500$$` },
        { text: 'Nationale Ersparnis:', eq: String.raw`$$S = Y - C - G = 5000 - 3000 - 700 = 1300$$` },
        { text: 'Leistungsbilanz als Spardifferenz:', eq: String.raw`$$NX = S - I = 1300 - 800 = 500 \checkmark$$` },
        { text: String.raw`Interpretation: Das Land spart mehr als es investiert ($S > I$) — der Überschuss wird exportiert (Kapitalexport).`, eq: null },
      ],
      result: String.raw`$NX = 500 > 0$: Leistungsbilanzüberschuss, Land ist Nettokapitalexporteur.`
    },
    {
      text: String.raw`Ein Land hat $\text{CA} = -200$ Mrd. €. Was muss in der Kapitalbilanz gelten? Was bedeutet das ökonomisch?`,
      steps: [
        { text: 'ZB-Gleichgewicht (bei frei flexiblem WK, keine Reservenänderung):', eq: String.raw`$$\text{CA} + \text{KA} = 0 \Rightarrow \text{KA} = -\text{CA} = +200$$` },
        { text: String.raw`Kapitalbilanzzufluss von 200 Mrd.: Ausländer kaufen netto Inlandsvermögen (Anleihen, Aktien, FDI) für 200 Mrd.`, eq: null },
        { text: 'Ökonomisch: Das Land konsumiert und investiert mehr als es produziert — finanziert durch ausländisches Kapital.', eq: null },
      ],
      result: String.raw`$\text{KA} = +200$ Mrd.: Kapitalzufluss finanziert das Leistungsbilanzdefizit.`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 4. MARSHALL-LERNER-BEDINGUNG & J-KURVE
// ─────────────────────────────────────────────────────────────
marshall_lerner: {
  motivation: 'Eine Abwertung verbessert die Wettbewerbsfähigkeit — aber verbessert sie auch den Leistungsbilanzsaldo? Das hängt von den Preiselastizitäten ab.',
  theorie: String.raw`
<div class="section-block">
<h3>Wirkung einer Abwertung auf NX</h3>
<p>Eine Abwertung (Rückgang von $E$ bzw. $\varepsilon$) macht Inlandsgüter relativ günstiger. Zwei gegenläufige Effekte wirken auf den Wert der Nettoexporte $NX = P_X \cdot X - P_M \cdot M$:</p>
<ul>
<li><strong>Mengeneffekt (positiv):</strong> Mehr Exporte, weniger Importe wegen Preisänderung.</li>
<li><strong>Werteffekt (negativ):</strong> Jede importierte Einheit kostet jetzt in Inlandswährung mehr — der Importwert steigt, auch wenn die Menge gleich bleibt.</li>
</ul>
</div>
<div class="section-block">
<h3>Marshall-Lerner-Bedingung</h3>
<p>Eine Abwertung verbessert die Leistungsbilanz genau dann, wenn die Summe der Betragswertelastizitäten von Export und Import den Wert 1 übersteigt:</p>
<div class="math-block">$$|\eta_X| + |\eta_M| > 1$$</div>
<p>wobei $\eta_X = \frac{\partial X}{\partial \varepsilon} \cdot \frac{\varepsilon}{X}$ die Preiselastizität der Exporte und $\eta_M$ die Preiselastizität der Importe.</p>
<p>Ist die Bedingung erfüllt, dominiert der Mengeneffekt — die Leistungsbilanz verbessert sich. Ist sie nicht erfüllt, dominiert der Werteffekt, und die Abwertung verschlechtert die Bilanz.</p>
</div>
<div class="section-block">
<h3>J-Kurve</h3>
<p>Die ML-Bedingung gilt langfristig. <strong>Kurzfristig</strong> sind Mengenreaktionen träge (laufende Verträge, Lieferverpflichtungen, Suche nach Alternativen). Deshalb:</p>
<ul>
<li><strong>Kurzfristig:</strong> Werteffekt dominiert → Leistungsbilanz verschlechtert sich zunächst.</li>
<li><strong>Langfristig:</strong> Mengeneffekt setzt sich durch → Leistungsbilanz verbessert sich.</li>
</ul>
<p>Der zeitliche Verlauf des Leistungsbilanzsaldos nach einer Abwertung hat die Form eines "J" — daher der Name <strong>J-Kurve</strong>.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>ML-Bedingung und Richtung</strong> Die Bedingung $|\eta_X| + |\eta_M| > 1$ gilt für eine Abwertung (Verbesserung). Bei Aufwertung: Leistungsbilanz verschlechtert sich, wenn ML gilt.</div>
<div class="warn-box"><strong>J-Kurve ignorieren</strong> Viele Klausuraufgaben fragen nach kurzfristiger vs. langfristiger Wirkung. Die kurzfristige Verschlechterung (trotz Abwertung) erfordert explizite Erwähnung der J-Kurve.</div>
</div>
`,
  formeln: [
    { label:'Marshall-Lerner-Bedingung', eq: String.raw`$$|\eta_X| + |\eta_M| > 1$$`, desc:'Bedingung für LB-Verbesserung nach Abwertung', variables: { '|\\eta_X|': 'Betrag der Preiselastizität der Exporte', '|\\eta_M|': 'Betrag der Preiselastizität der Importe' } },
  ],
  aufgaben: [
    {
      text: String.raw`Die Preiselastizität der Exporte beträgt $|\eta_X| = 0{,}8$ und die der Importe $|\eta_M| = 0{,}4$. Verbessert eine Abwertung die Leistungsbilanz?`,
      steps: [
        { text: 'ML-Bedingung prüfen:', eq: String.raw`$$|\eta_X| + |\eta_M| = 0{,}8 + 0{,}4 = 1{,}2 > 1$$` },
        { text: 'ML-Bedingung ist erfüllt → Abwertung verbessert die Leistungsbilanz langfristig.', eq: null },
      ],
      result: String.raw`$1{,}2 > 1$: ML-Bedingung erfüllt — Leistungsbilanz verbessert sich nach Abwertung.`
    },
    {
      text: `Beschreibe den Verlauf der J-Kurve. Warum verschlechtert sich die Leistungsbilanz zunächst nach einer Abwertung?`,
      steps: [
        { text: 'Unmittelbar nach Abwertung: laufende Import- und Exportverträge zu alten Preisen — Mengen ändern sich kaum.', eq: null },
        { text: String.raw`Werteffekt: Importpreise in Inlandswährung steigen sofort ($\varepsilon$ fällt) → Importwert steigt → $NX$ sinkt.`, eq: null },
        { text: 'Mittelfristig: Unternehmen passen Beschaffung/Absatz an — Exportmengen steigen, Importmengen sinken.', eq: null },
        { text: 'Langfristig (ML-Bedingung erfüllt): Mengeneffekt überwiegt → NX steigt über Ausgangsniveau.', eq: null },
      ],
      result: 'J-Kurve: kurzfristige LB-Verschlechterung (Werteffekt), langfristige Verbesserung (Mengeneffekt).'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 5. IS-KURVE IN OFFENER VW
// ─────────────────────────────────────────────────────────────
offene_is: {
  motivation: 'In der offenen Volkswirtschaft hängt die Güternachfrage nicht nur von inländischen Variablen ab, sondern auch vom Wechselkurs und dem Auslandseinkommen.',
  theorie: String.raw`
<div class="section-block">
<h3>Gütermarktgleichgewicht in offener VW</h3>
<p>Die IS-Kurve der offenen Volkswirtschaft ergibt sich aus:</p>
<div class="math-block">$$Y = C(Y-T) + I(Y,i) + G + NX(Y, Y^*, \varepsilon)$$</div>
<p>mit den Einflussfaktoren:</p>
<div class="info-grid">
<div class="info-card"><div class="label">$C(Y-T)$</div><div class="value">Konsum</div><p>Steigt mit verfügbarem Einkommen $(Y-T)$, marginale Konsumquote $c_1 \in (0,1)$.</p></div>
<div class="info-card"><div class="label">$I(Y,i)$</div><div class="value">Investitionen</div><p>Steigt mit $Y$ (Akzelerator), sinkt mit Zinssatz $i$.</p></div>
<div class="info-card"><div class="label">$NX(Y, Y^*, \varepsilon)$</div><div class="value">Nettoexporte</div><p>Sinkt mit $Y$ (↑ Importe), steigt mit $Y^*$ (↑ Exporte), sinkt mit $\varepsilon$ (↑ realer WK → Inlandsgüter teurer).</p></div>
</div>
</div>
<div class="section-block">
<h3>IS-Kurve in offener VW</h3>
<p>Die IS-Kurve zeigt alle $(Y, i)$-Kombinationen, bei denen der Gütermarkt im Gleichgewicht ist. Sie hat eine negative Steigung, da höhere Zinsen die Investitionen senken und so das Gleichgewichtseinkommen drücken.</p>
<p>Die IS-Kurve der offenen VW ist <strong>steiler</strong> als die der geschlossenen VW: Ein Einkommensanstieg erhöht auch die Importe, was den Multiplikator dämpft.</p>
<div class="math-block">$$\text{Multiplikator (offen)} = \frac{1}{1 - c_1(1-t) - b_1 + m_1} < \frac{1}{1-c_1(1-t)-b_1}$$</div>
<p>wobei $m_1 > 0$ die marginale Importneigung ist.</p>
</div>
<div class="section-block">
<h3>Verschiebungen der IS-Kurve</h3>
<p>Die IS-Kurve verschiebt sich nach rechts bei:</p>
<ul>
<li>Erhöhung der Staatsausgaben $G$ oder Steuersenkung $↓ T$</li>
<li>Anstieg des Auslandseinkommens $Y^*$ (↑ Exporte)</li>
<li>Reale Abwertung ($↓ \varepsilon$, also Inlandsgüter werden günstiger → ↑ NX)</li>
</ul>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Richtung des WK-Effekts</strong> Ein Anstieg von $\varepsilon = EP/P^*$ bedeutet reale Aufwertung des Inlands: inländische Güter werden relativ teurer, Nettoexporte sinken. Bei $↓\varepsilon$ liegt eine reale Abwertung vor.</div>
<div class="warn-box"><strong>Multiplikator kleiner als geschlossene VW</strong> Importe "lecken" Nachfrage ins Ausland — der Multiplikator ist kleiner. Fiskalische Expansion wirkt im Inland schwächer (dafür gibt es Spillover-Effekte ins Ausland).</div>
</div>
`,
  formeln: [
    { label:'IS offen', eq: String.raw`$$Y = C(Y-T) + I(Y,i) + G + NX(Y,Y^*,\varepsilon)$$`, desc:'Gütermarktgleichgewicht der offenen VW', variables: { 'Y': 'Inlandsproduktion', 'C': 'Konsum (↑ mit Y-T)', 'I': 'Investitionen (↓ mit i)', 'G': 'Staatsausgaben', 'NX': 'Nettoexporte (↓ mit Y, ↑ mit Y*, ↓ mit ε)' } },
    { label:'Multiplikator (offen)', eq: String.raw`$$\mu = \frac{1}{1 - c_1(1-t) - b_1 + m_1}$$`, desc:'Kleiner als in geschlossener VW wegen Importleck', variables: { 'c_1': 'Marginale Konsumquote', 't': 'Steuersatz', 'b_1': 'Einkommensabhängige Investitionsneigung', 'm_1': 'Marginale Importneigung' } },
  ],
  aufgaben: [
    {
      text: String.raw`Eine offene VW hat: $c_1 = 0{,}8$, $t = 0{,}25$, $b_1 = 0{,}1$, $m_1 = 0{,}2$. Berechne den Multiplikator und vergleiche mit der geschlossenen VW ($m_1 = 0$).`,
      steps: [
        { text: 'Multiplikator (offen):', eq: String.raw`$$\mu_{\text{offen}} = \frac{1}{1 - 0{,}8 \cdot 0{,}75 - 0{,}1 + 0{,}2} = \frac{1}{1 - 0{,}6 - 0{,}1 + 0{,}2} = \frac{1}{0{,}5} = 2$$` },
        { text: 'Multiplikator (geschlossen, $m_1 = 0$):', eq: String.raw`$$\mu_{\text{geschl.}} = \frac{1}{1 - 0{,}8 \cdot 0{,}75 - 0{,}1} = \frac{1}{0{,}3} \approx 3{,}33$$` },
        { text: 'Offene VW: deutlich kleinerer Multiplikator wegen Importleck.', eq: null },
      ],
      result: String.raw`$\mu_{\text{offen}} = 2 < \mu_{\text{geschl.}} \approx 3{,}33$ — Importleck dämpft Multiplikatoreffekt.`
    },
    {
      text: `Das Auslandseinkommen $Y^*$ steigt. Beschreibe die Wirkung auf die IS-Kurve und das gleichgewichtige Inlandseinkommen.`,
      steps: [
        { text: String.raw`$Y^*$ steigt → Ausländer kaufen mehr inländische Güter → Exporte $X$ steigen → $NX$ steigt.`, eq: null },
        { text: 'NX↑ erhöht die Güternachfrage bei gegebenem Zinssatz → IS-Kurve verschiebt sich nach rechts.', eq: null },
        { text: 'Im neuen Gleichgewicht: höheres Y (und ggf. höherer Zins, wenn LM-Kurve nach oben geneigt).', eq: null },
      ],
      result: String.raw`$Y^*\uparrow \Rightarrow NX\uparrow \Rightarrow$ IS-Kurve rechts $\Rightarrow Y\uparrow$ (internationaler Konjunkturverbund).`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 6. NETTOEXPORTE & WECHSELKURSMECHANISMUS
// ─────────────────────────────────────────────────────────────
nettoexporte: {
  motivation: 'Nettoexporte sind das Bindeglied zwischen Gütermarkt und Wechselkurs — sie übertragen Wechselkursbewegungen in reale Nachfrageeffekte.',
  theorie: String.raw`
<div class="section-block">
<h3>Nettoexportfunktion</h3>
<p>Die Nettoexporte hängen von drei Variablen ab:</p>
<div class="math-block">$$NX = NX(Y, Y^*, \varepsilon) = X(Y^*, \varepsilon) - M(Y, \varepsilon)$$</div>
<div class="info-grid">
<div class="info-card"><div class="label">Exporte $X$</div><div class="value">$↑$ mit $Y^*$, $↑$ mit $↓\varepsilon$</div><p>Steigen mit Auslandseinkommen und realer Abwertung (Inlandsgüter billiger).</p></div>
<div class="info-card"><div class="label">Importe $M$</div><div class="value">$↑$ mit $Y$, $↑$ mit $↑\varepsilon$</div><p>Steigen mit Inlandseinkommen und realer Aufwertung (Auslandsgüter billiger).</p></div>
<div class="info-card"><div class="label">Realer WK $\varepsilon$</div><div class="value">$\varepsilon = EP/P^*$</div><p>Steigt bei nominaler Aufwertung oder relativ höherem Preisniveau im Inland.</p></div>
</div>
</div>
<div class="section-block">
<h3>NX-Kurve (NX-Funktion von Y)</h3>
<p>Hält man $Y^*$ und $\varepsilon$ fest, ist $NX$ eine fallende Funktion von $Y$:</p>
<div class="math-block">$$\frac{\partial NX}{\partial Y} = -m_1 < 0$$</div>
<p>Höheres Inlandseinkommen zieht mehr Importe an, ohne die Exporte zu beeinflussen → NX sinkt.</p>
</div>
<div class="section-block">
<h3>Verbindung zu Wechselkurs und ZP-Kurve</h3>
<p>Die Zinsparität bestimmt $E$ als Funktion von $i$. Damit beeinflusst $i$ über $E \to \varepsilon \to NX$ den Gütermarkt:</p>
<ul>
<li>$i ↑$ → Kapitalzufluss → Aufwertung ($E ↑$) → $\varepsilon ↑$ → $NX ↓$ → IS-Kurve nach links.</li>
</ul>
<p>Dieser Effekt ist <strong>zusätzlich</strong> zum direkten Investitionseffekt von $i$ auf $I$.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Kurzfristige ML-Wirkung</strong> Kurzfristig gilt die ML-Bedingung nicht sicher — J-Kurve beachten. Die Nettoexportfunktion im statischen Modell impliziert bereits die langfristige Reaktion.</div>
<div class="warn-box"><strong>Einkommenseffekt auf Importe vergessen</strong> Wenn Y steigt (z.B. durch Fiskalpolitik), steigen die Importe mit → NX sinkt → Leistungsbilanz verschlechtert sich teilweise wieder.</div>
</div>
`,
  formeln: [
    { label:'Nettoexportfunktion', eq: String.raw`$$NX = X(Y^*, \varepsilon) - M(Y, \varepsilon)$$`, desc:'NX als Funktion von In- und Auslandseinkommen sowie realem WK', variables: { 'X': 'Exporte (↑ mit Y*, ↑ bei realer Abwertung)', 'M': 'Importe (↑ mit Y, ↑ bei realer Aufwertung)', '\\varepsilon': 'Realer Wechselkurs' } },
    { label:'NX und Zinsen (via WK)', eq: String.raw`$$i\uparrow \;\Rightarrow\; E\uparrow \;\Rightarrow\; \varepsilon\uparrow \;\Rightarrow\; NX\downarrow$$`, desc:'Transmissionsmechanismus: Zinsen → WK → NX', variables: { 'i': 'Inlandszins', 'E': 'Nominaler WK', '\\varepsilon': 'Realer WK', 'NX': 'Nettoexporte' } },
  ],
  aufgaben: [
    {
      text: String.raw`$NX = 200 + 0{,}3 Y^* - 0{,}2 Y - 100\varepsilon$. $Y^* = 1000$, $\varepsilon = 1{,}2$, $Y = 800$. Berechne $NX$.`,
      steps: [
        { text: 'Einsetzen:', eq: String.raw`$$NX = 200 + 0{,}3 \cdot 1000 - 0{,}2 \cdot 800 - 100 \cdot 1{,}2$$` },
        { text: 'Berechnen:', eq: String.raw`$$NX = 200 + 300 - 160 - 120 = 220$$` },
        { text: String.raw`$NX = 220 > 0$: Leistungsbilanzüberschuss.`, eq: null },
      ],
      result: String.raw`$NX = 220$ (Leistungsbilanzüberschuss).`
    },
    {
      text: String.raw`Eine Fiskalpolitik erhöht $G$ um 100. Der Einkommensanstieg sei $\Delta Y = 200$. Bei $m_1 = 0{,}2$ — wie verändert sich $NX$?`,
      steps: [
        { text: String.raw`Einkommenseffekt auf Importe: $\Delta M = m_1 \cdot \Delta Y = 0{,}2 \cdot 200 = 40$.`, eq: null },
        { text: 'Exporte bleiben konstant (inländische Nachfrageerhöhung wirkt nicht auf Exporte).', eq: null },
        { text: String.raw`$\Delta NX = -\Delta M = -40$.`, eq: null },
      ],
      result: String.raw`$\Delta NX = -40$: Fiskalpolitik verschlechtert Leistungsbilanz um 40 (Importleck).`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 7. MUNDELL-FLEMING-MODELL
// ─────────────────────────────────────────────────────────────
mundell_fleming: {
  motivation: 'Das Mundell-Fleming-Modell erweitert IS-LM um die offene Volkswirtschaft: Kapitalverkehr und Wechselkurs werden endogen bestimmt.',
  theorie: String.raw`
<div class="section-block">
<h3>Das Drei-Gleichungs-System</h3>
<p>Das MF-Modell besteht aus drei Gleichgewichtsbedingungen:</p>
<div class="info-grid">
<div class="info-card"><div class="label">IS-Kurve</div><div class="value">$Y = C + I + G + NX$</div><p>Gütermarktgleichgewicht. NX hängt vom WK ab.</p></div>
<div class="info-card"><div class="label">LM-Kurve</div><div class="value">$M/P = YL(i)$</div><p>Geldmarktgleichgewicht. Reale Geldnachfrage = Reales Geldangebot.</p></div>
<div class="info-card"><div class="label">ZP-Kurve</div><div class="value">$i = i^*$</div><p>Zinsparität. Bei perfekter Kapitalmobilität gilt $i = i^*$ (horizontal).</p></div>
</div>
</div>
<div class="section-block">
<h3>Gleichgewicht im MF-Modell</h3>
<p>Der Schnittpunkt von IS, LM und ZP bestimmt $(Y, i, E)$ simultan. Bei perfekter Kapitalmobilität ist $i = i^*$ fixiert — das Gleichgewichtseinkommen ergibt sich aus dem Schnittpunkt von IS und ZP.</p>
<p>Der Wechselkurs $E$ passt sich an, bis IS durch den Punkt $(Y^*, i^*)$ geht.</p>
</div>
<div class="section-block">
<h3>Fiskalpolitik (flexible WK, perfekte Kapitalmobilität)</h3>
<p>$G↑$ → IS nach rechts → bei $i = i^*$: Überschussnachfrage → $i$ tendiert zu steigen → Kapitalzufluss → Aufwertung ($↑ E$) → $NX ↓$ → IS-Kurve schiebt sich wieder zurück.</p>
<p><strong>Ergebnis:</strong> Fiskalpolitik ist wirkungslos bei flexiblem WK und perfekter Kapitalmobilität — vollständiges Crowding-out durch WK-Aufwertung.</p>
</div>
<div class="section-block">
<h3>Geldpolitik (flexible WK, perfekte Kapitalmobilität)</h3>
<p>$M↑$ → LM nach rechts → $i$ tendiert zu sinken → Kapitalabfluss → Abwertung ($↓ E$) → $NX ↑$ → IS nach rechts.</p>
<p><strong>Ergebnis:</strong> Geldpolitik ist sehr wirkungsvoll bei flexiblem WK — WK-Abwertung verstärkt expansiven Effekt.</p>
</div>
<div class="section-block">
<h3>Feste Wechselkurse</h3>
<p>Bei festem WK muss die Zentralbank $E$ konstant halten. Kapitalzuflüsse erzwingen Interventionen (Ankauf von Devisen, Ausweitung der Geldmenge). Dadurch:</p>
<ul>
<li><strong>Fiskalpolitik wirksam</strong> (kein WK-Crowding-out).</li>
<li><strong>Geldpolitik wirkungslos</strong> (Geldangebot muss für WK-Stabilisierung angepasst werden).</li>
</ul>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Perfekte vs. imperfekte Kapitalmobilität</strong> Das Standard-MF-Modell nimmt perfekte Kapitalmobilität an ($i = i^*$). Bei imperfekter Mobilität hat die ZP-Kurve eine positive Steigung, und Fiskalpolitik ist nicht vollständig wirkungslos.</div>
<div class="warn-box"><strong>Wirkungslosigkeit der Fiskalpolitik</strong> Gilt nur bei flexiblen WK und perfekter Kapitalmobilität. Im Festkurssystem ist Fiskalpolitik wirksam!</div>
</div>
`,
  formeln: [
    { label:'IS (offen)', eq: String.raw`$$Y = C(Y-T) + I(i) + G + NX(Y,Y^*,E)$$`, desc:'Gütermarkt mit WK-abhängigen NX', variables: { 'NX': 'Nettoexporte (↓ bei Aufwertung)', 'E': 'Nominaler Wechselkurs' } },
    { label:'LM', eq: String.raw`$$\frac{M}{P} = Y \cdot L(i)$$`, desc:'Geldmarktgleichgewicht', variables: { 'M/P': 'Reales Geldangebot', 'L(i)': 'Liquiditätspräferenz (↓ mit i)' } },
    { label:'ZP (perfekte Kapitalmobilität)', eq: String.raw`$$i = i^*$$`, desc:'Zinsparität bei perfekter Kapitalmobilität — ZP horizontal', variables: { 'i': 'Inlandszins', 'i^*': 'Exogen gegebener Weltmarktzins' } },
  ],
  aufgaben: [
    {
      text: `Erkläre den Mechanismus, durch den eine expansive Fiskalpolitik bei flexiblem Wechselkurs und perfekter Kapitalmobilität wirkungslos ist (vollständige Verdrängung).`,
      steps: [
        { text: String.raw`$G\uparrow$ → IS-Kurve nach rechts → Tendenz zu $Y\uparrow$ und $i\uparrow$.`, eq: null },
        { text: String.raw`$i > i^*$ → Arbitrage: Kapitalzufluss aus dem Ausland.`, eq: null },
        { text: String.raw`Kapitalzufluss → Aufwertung der Inlandswährung ($E\uparrow$).`, eq: null },
        { text: String.raw`Aufwertung → $NX\downarrow$ → IS-Kurve schiebt sich zurück nach links.`, eq: null },
        { text: String.raw`Gleichgewicht: IS ist exakt so weit zurückgewandert, dass $i = i^*$ und $Y$ = Ausgangsniveau.`, eq: null },
      ],
      result: 'Fiskalpolitik → Aufwertung → NX-Rückgang = vollständige Verdrängung bei flex. WK.'
    },
    {
      text: `Warum ist Geldpolitik bei flexiblen Wechselkursen besonders wirksam im MF-Modell?`,
      steps: [
        { text: String.raw`$M\uparrow$ → LM-Kurve nach rechts → $i\downarrow$ tendiert.`, eq: null },
        { text: String.raw`$i < i^*$ → Kapitalabfluss → Abwertung ($E\downarrow$).`, eq: null },
        { text: String.raw`Abwertung → $NX\uparrow$ → IS-Kurve nach rechts → $Y\uparrow$.`, eq: null },
        { text: 'Doppelte Wirkung: direkter Investitionseffekt (über $i$) + indirekter NX-Effekt (über WK).', eq: null },
      ],
      result: 'Geldpolitik wirkt doppelt: über Zinsen (I↑) und über Wechselkurs (NX↑).'
    },
    {
      text: `Vergleiche die Wirkung der Fiskalpolitik bei flexiblem und festem Wechselkurs. Welches Regime begünstigt fiskalpolitische Steuerung?`,
      steps: [
        { text: 'Flex. WK: $G↑$ → Aufwertung → $NX↓$ → vollständige Verdrängung → $\Delta Y = 0$.', eq: null },
        { text: 'Fester WK: $G↑$ → $i$ tendiert zu steigen → ZB muss Geldmenge ausweiten → $i$ bleibt bei $i^*$ → keine WK-Änderung → $NX$ bleibt stabil → volles Multiplikatoreffekt.', eq: null },
        { text: String.raw`Festes WK-Regime: Fiskalpolitik wirksam. Flexibles WK-Regime: Geldpolitik wirksam.`, eq: null },
      ],
      result: 'Fester WK: Fiskalpolitik wirksam. Flexibler WK: Geldpolitik wirksam (Mundell-Fleming-Theorem).'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 8. ZP-KURVE
// ─────────────────────────────────────────────────────────────
zp_kurve: {
  motivation: 'Die ZP-Kurve beschreibt alle Kombinationen von Einkommen Y und Zinssatz i, bei denen die Zahlungsbilanz (Leistungs- + Kapitalbilanz) ausgeglichen ist.',
  theorie: String.raw`
<div class="section-block">
<h3>Definition der ZP-Kurve</h3>
<p>Die ZP-Kurve (Zahlungsbilanz-Kurve) zeigt alle $(Y, i)$-Kombinationen, bei denen gilt:</p>
<div class="math-block">$$\text{CA}(Y, Y^*, \varepsilon) + \text{KA}(i - i^*) = 0$$</div>
<p>Die Leistungsbilanz sinkt mit steigendem $Y$ (mehr Importe). Die Kapitalbilanz steigt mit steigendem $i$ (mehr Kapitalzufluss). Im Gleichgewicht kompensieren sie sich.</p>
</div>
<div class="section-block">
<h3>Steigung der ZP-Kurve</h3>
<p>Die ZP-Kurve hat eine <strong>positive Steigung</strong> im $(Y, i)$-Raum:</p>
<ul>
<li>$Y↑$ → Importe↑ → CA↓ → ZB-Defizit.</li>
<li>Um Gleichgewicht wiederherzustellen: $i↑$ → Kapitalzufluss → KA↑ → ZB ausgeglichen.</li>
</ul>
<p>Je größer die Kapitalmobilität, desto flacher die ZP-Kurve. Bei perfekter Kapitalmobilität ist die ZP horizontal bei $i = i^*$.</p>
</div>
<div class="section-block">
<h3>Positionen relativ zur ZP-Kurve</h3>
<div class="info-grid">
<div class="info-card"><div class="label">Oberhalb ZP</div><div class="value">ZB-Überschuss</div><p>$i$ zu hoch oder $Y$ zu niedrig → Kapitalzufluss überwiegt → ZB-Surplus.</p></div>
<div class="info-card"><div class="label">Unterhalb ZP</div><div class="value">ZB-Defizit</div><p>$i$ zu niedrig oder $Y$ zu hoch → Leistungsbilanzdefizit überwiegt → ZB-Defizit.</p></div>
</div>
</div>
<div class="section-block">
<h3>Verschiebungen der ZP-Kurve</h3>
<p>Die ZP-Kurve verschiebt sich nach rechts (unten) bei:</p>
<ul>
<li>Anstieg des Auslandseinkommens $Y^*$ (↑ Exporte → mehr CA-Spielraum für höheres Y)</li>
<li>Reale Abwertung ($↓\varepsilon$) → NX verbessert sich → ZP nach rechts</li>
<li>Senkung des Weltmarktzinses $i^*$ → ZP-Kurve verschiebt sich nach unten</li>
</ul>
</div>
`,
  formeln: [
    { label:'ZP-Gleichgewicht', eq: String.raw`$$\text{CA}(Y, Y^*, \varepsilon) + \text{KA}(i - i^*) = 0$$`, desc:'Alle Kombinationen mit ausgeglichener Zahlungsbilanz', variables: { '\\text{CA}': 'Leistungsbilanz (↓ mit Y)', '\\text{KA}': 'Kapitalbilanz (↑ mit i)', 'i^*': 'Weltmarktzins' } },
    { label:'ZP bei perf. Kapitalmobilität', eq: String.raw`$$i = i^*$$`, desc:'Perfekte Kapitalmobilität: ZP-Kurve ist horizontal', variables: { 'i': 'Inlandszins', 'i^*': 'Exogener Weltmarktzins' } },
  ],
  aufgaben: [
    {
      text: `Erkläre, warum die ZP-Kurve eine positive Steigung im (Y, i)-Diagramm hat.`,
      steps: [
        { text: String.raw`Wenn $Y$ steigt, steigen die Importe → Leistungsbilanz verschlechtert sich ($\text{CA}\downarrow$).`, eq: null },
        { text: 'Um die ZB im Gleichgewicht zu halten, muss die Kapitalbilanz besser werden: mehr Kapitalzufluss nötig.', eq: null },
        { text: 'Kapitalzufluss erfordert höheren Inlandszins $i↑$.', eq: null },
        { text: 'Also: $Y↑$ erfordert $i↑$ für ZB-Gleichgewicht → positive Steigung.', eq: null },
      ],
      result: 'Positive Steigung: Höheres Y (→ mehr Importe) erfordert höheres i (→ mehr Kapitalzufluss).'
    },
    {
      text: `Was bedeutet es, wenn sich die Volkswirtschaft unterhalb der ZP-Kurve befindet?`,
      steps: [
        { text: 'Unterhalb der ZP-Kurve: Für gegebenes Y ist i zu niedrig.', eq: null },
        { text: 'Zu niedriger i → zu wenig Kapitalzufluss → KA zu gering.', eq: null },
        { text: 'Leistungsbilanzdefizit wird nicht durch Kapitalzufluss gedeckt → Zahlungsbilanzdefizit.', eq: null },
        { text: 'Konsequenz: Devisenverlust (bei festem WK) oder Abwertungsdruck (bei flexiblem WK).', eq: null },
      ],
      result: 'Unterhalb ZP = ZB-Defizit → Abwertungsdruck bzw. Devisenverlust.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 9. WIRTSCHAFTSPOLITIK IM MF-MODELL
// ─────────────────────────────────────────────────────────────
wirtschaftspolitik_offen: {
  motivation: 'Das Mundell-Fleming-Modell liefert klare, oft kontraintuitive Aussagen darüber, welche Politikinstrumente in welchem Wechselkursregime wirksam sind.',
  theorie: String.raw`
<div class="section-block">
<h3>Das Mundell-Fleming-Theorem</h3>
<p>Das zentrale Ergebnis lautet: <strong>Bei perfekter Kapitalmobilität ist immer genau ein Instrument wirksam</strong>:</p>
<div class="info-grid">
<div class="info-card"><div class="label">Flexibler WK</div><div class="value">Geldpolitik ✓, Fiskalpolitik ✗</div><p>Fiskalpolitik: vollständiges WK-Crowding-out. Geldpolitik: WK-Verstärkung.</p></div>
<div class="info-card"><div class="label">Fester WK</div><div class="value">Fiskalpolitik ✓, Geldpolitik ✗</div><p>Geldpolitik: durch WK-Bindung aufgezehrt. Fiskalpolitik: voller Multiplikatoreffekt.</p></div>
</div>
</div>
<div class="section-block">
<h3>Fiskalpolitik: Flexibler WK (Mechanismus)</h3>
<ol>
<li>$G↑$ → IS rechts → $i$ tendiert zu steigen über $i^*$</li>
<li>Kapitalzufluss → Aufwertung</li>
<li>Aufwertung → $NX↓$ → IS zurück links</li>
<li>Endergebnis: $\Delta Y = 0$, $i = i^*$, WK aufgewertet, NX gesunken</li>
</ol>
</div>
<div class="section-block">
<h3>Geldpolitik: Flexibler WK (Mechanismus)</h3>
<ol>
<li>$M↑$ → LM rechts → $i$ tendiert zu sinken unter $i^*$</li>
<li>Kapitalabfluss → Abwertung</li>
<li>Abwertung → $NX↑$ → IS rechts</li>
<li>Endergebnis: $Y↑$, $i = i^*$, WK abgewertet, NX gestiegen</li>
</ol>
</div>
<div class="section-block">
<h3>Fiskalpolitik: Fester WK (Mechanismus)</h3>
<ol>
<li>$G↑$ → IS rechts → $i$ tendiert zu steigen über $i^*$</li>
<li>Kapitalzufluss → Aufwertungsdruck</li>
<li>ZB kauft Devisen, verkauft eigene Währung → $M↑$ → LM rechts</li>
<li>Geldmengenexpansion bis $i = i^*$ → $Y↑$ mit vollem Multiplikator</li>
</ol>
</div>
<div class="section-block">
<h3>Unmögliche Dreieinigkeit</h3>
<p>Ein Land kann nicht gleichzeitig haben:</p>
<ul>
<li>Festen Wechselkurs</li>
<li>Freier Kapitalverkehr</li>
<li>Autonome Geldpolitik</li>
</ul>
<p>Nur zwei der drei sind gleichzeitig möglich (Trilemma der offenen Volkswirtschaft).</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Verwechslung der Regime</strong> Im Klausur: immer zuerst das WK-Regime identifizieren, dann die Schlussfolgerung ziehen. Das Mundell-Fleming-Theorem gilt streng nur bei perfekter Kapitalmobilität.</div>
<div class="warn-box"><strong>Trilemma-Formulierung</strong> Die unmögliche Dreieinigkeit bezieht sich auf Regime-Kompatibilität, nicht auf einzelne Politikmaßnahmen.</div>
</div>
`,
  formeln: [
    { label:'MF-Theorem (flex. WK)', eq: String.raw`$$\Delta G \neq 0 \;\Rightarrow\; \Delta Y = 0, \quad \Delta M \neq 0 \;\Rightarrow\; \Delta Y > 0$$`, desc:'Wirkungslosigkeit der Fiskalpolitik vs. Wirksamkeit der Geldpolitik', variables: { '\\Delta G': 'Änderung der Staatsausgaben', '\\Delta M': 'Änderung der Geldmenge', '\\Delta Y': 'Einkommensänderung' } },
    { label:'MF-Theorem (fester WK)', eq: String.raw`$$\Delta G \neq 0 \;\Rightarrow\; \Delta Y > 0, \quad \Delta M \neq 0 \;\Rightarrow\; \Delta Y = 0$$`, desc:'Umgekehrte Wirksamkeit beim festen Wechselkurs', variables: {} },
  ],
  aufgaben: [
    {
      text: `Ein Land mit flexiblem WK und perfekter Kapitalmobilität will durch Steuersenkungen ($\Delta T < 0$) das BIP erhöhen. Wird dies gelingen? Erkläre den vollständigen Mechanismus.`,
      steps: [
        { text: String.raw`$T\downarrow$ → $C\uparrow$ → IS nach rechts (wie $G\uparrow$).`, eq: null },
        { text: String.raw`IS rechts → Tendenz $Y\uparrow$ und $i\uparrow$ über $i^*$.`, eq: null },
        { text: 'Kapitalzufluss → Aufwertung → NX sinkt → IS wieder nach links.', eq: null },
        { text: String.raw`Gleichgewicht: IS zurück zur ursprünglichen Position. $\Delta Y = 0$.`, eq: null },
      ],
      result: 'Fiskalpolitik (auch Steuersenkung) wirkungslos bei flexiblem WK — vollständiges WK-Crowding-out.'
    },
    {
      text: `Erkläre das Trilemma der offenen Volkswirtschaft an einem Beispiel.`,
      steps: [
        { text: 'Die drei Ziele: (1) Fester WK, (2) Freier Kapitalverkehr, (3) Autonome Geldpolitik.', eq: null },
        { text: 'Beispiel Eurozone: (1) Fester WK innerhalb der EWU. (2) Freier Kapitalverkehr (EU-Recht). → (3) Keine nationale Geldpolitik möglich — aufgegeben an EZB.', eq: null },
        { text: 'Beispiel China: (1) Fester/verwalteter WK. (3) Autonome Geldpolitik. → (2) Kapitalverkehrskontrollen (kein freier Kapitalverkehr).', eq: null },
        { text: 'Beispiel UK (pre-ERM): (2) Freier Kapitalverkehr. (3) Autonome Geldpolitik. → (1) Flexibler WK.', eq: null },
      ],
      result: 'Trilemma: maximal 2 von 3 Zielen gleichzeitig. Reale Länder wählen unterschiedliche Kombinationen.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 10. WECHSELKURSREGIME
// ─────────────────────────────────────────────────────────────
wk_regime: {
  motivation: 'Die Wahl des Wechselkursregimes ist eine der zentralen wirtschaftspolitischen Entscheidungen — sie bestimmt, welche Instrumente wirksam sind und welche Schocks wie absorbiert werden.',
  theorie: String.raw`
<div class="section-block">
<h3>Spektrum der Wechselkursregime</h3>
<div class="info-grid">
<div class="info-card"><div class="label">Frei flexibel</div><div class="value">Clean Float</div><p>WK durch Angebot und Nachfrage. ZB interveniert nicht. Autonome Geldpolitik möglich.</p></div>
<div class="info-card"><div class="label">Managed Float</div><div class="value">Dirty Float</div><p>ZB interveniert gelegentlich, ohne festes Ziel. Kombination aus Flexibilität und Stabilität.</p></div>
<div class="info-card"><div class="label">Festes Band</div><div class="value">Target Zone</div><p>WK darf in einem Band schwanken (z.B. ±2,25% wie im EWS). ZB verteidigt Bandgrenzen.</p></div>
<div class="info-card"><div class="label">Fixer WK</div><div class="value">Hard Peg</div><p>WK unwiderruflich fixiert. Currency Board (z.B. Hongkong) oder Währungsunion.</p></div>
</div>
</div>
<div class="section-block">
<h3>Vor- und Nachteile fixer WK</h3>
<p><strong>Vorteile:</strong> Reduziert WK-Unsicherheit, senkt Transaktionskosten, importiert Glaubwürdigkeit der Ankerwährung (z.B. Anti-Inflationspolitik durch Dollar-Bindung).</p>
<p><strong>Nachteile:</strong> Verlust autonomer Geldpolitik (Trilemma), Anfälligkeit für spekulative Attacken, kein automatischer Anpassungsmechanismus bei asymmetrischen Schocks.</p>
</div>
<div class="section-block">
<h3>Vor- und Nachteile flexibler WK</h3>
<p><strong>Vorteile:</strong> Automatische Anpassung bei externen Schocks, autonome Geldpolitik möglich, kein Abwertungsdruck auf Reserven.</p>
<p><strong>Nachteile:</strong> WK-Volatilität erhöht Unsicherheit für Handel/Investitionen, spekulative Blasen möglich, importierte Inflation bei Abwertung.</p>
</div>
<div class="section-block">
<h3>Anpassung bei Schocks</h3>
<p>Bei einem <strong>negativen Nachfrageschock</strong>:</p>
<ul>
<li><em>Flexibler WK:</em> Abwertung → NX↑ → automatische Anpassung.</li>
<li><em>Fixer WK:</em> Keine WK-Anpassung → Anpassung über Preise/Löhne (langsam und schmerzhaft) oder Fiskalpolitik.</li>
</ul>
</div>
`,
  formeln: [
    { label:'Trilemma', eq: String.raw`$$\text{Fixer WK} + \text{Kapitalfreiheit} \;\Rightarrow\; i = i^* \text{ (keine GP)}$$`, desc:'Unmögliche Dreieinigkeit', variables: { 'i': 'Inlandszins', 'i^*': 'Weltmarktzins' } },
  ],
  aufgaben: [
    {
      text: `Ein Land wählt einen Currency Board (unwiderrufliche Bindung an den Dollar). Welche wirtschaftspolitischen Konsequenzen hat das?`,
      steps: [
        { text: '1. Trilemma: Mit freiem Kapitalverkehr und fixem WK ist autonome Geldpolitik unmöglich.', eq: null },
        { text: '2. Geldmenge muss so angepasst werden, dass $i = i_{\text{USA}}^*$ gilt.', eq: null },
        { text: '3. Bei negativem Schock: keine WK-Abwertung möglich → Anpassung über Deflation oder Fiskalpolitik.', eq: null },
        { text: '4. Vorteil: importierte Glaubwürdigkeit der Fed → niedrigere Inflation und Inflationserwartungen.', eq: null },
      ],
      result: 'Currency Board: keine autonome Geldpolitik, aber hohe Glaubwürdigkeit und WK-Stabilität.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 11. WÄHRUNGSKRISEN
// ─────────────────────────────────────────────────────────────
wk_krisen: {
  motivation: 'Spekulative Attacken können selbst fundamental gesunde Wechselkursbindungen zum Einsturz bringen — die Krisenmodelle erklären wann und warum.',
  theorie: String.raw`
<div class="section-block">
<h3>Erste Generation: Fundamentale Ungleichgewichte</h3>
<p>Krugman (1979): Eine WK-Bindung kollabiert, wenn die Regierung ein persistentes Budgetdefizit durch Geldschöpfung finanziert. Die Geldmenge wächst → Reserven schmelzen → bei kritischem Reserveniveau erfolgt eine <strong>spekulative Attacke</strong>.</p>
<p>Mechanismus: Spekulanten antizipieren die unvermeidliche Abwertung und kaufen Devisen, bevor die Reserven erschöpft sind. Die Attacke beschleunigt das Ende der Bindung.</p>
</div>
<div class="section-block">
<h3>Zweite Generation: Selbsterfüllende Erwartungen</h3>
<p>Obstfeld (1994): Eine WK-Bindung kann durch <strong>multiple Gleichgewichte</strong> kollabieren, auch ohne fundamentale Schwäche. Wenn Märkte eine Abwertung erwarten:</p>
<ul>
<li>Löhne steigen (Inflationserwartungen) → Wettbewerbsfähigkeit sinkt</li>
<li>Zinsen müssen steigen (ZP), um Kapitalflucht zu verhindern</li>
<li>Hohe Zinsen erhöhen Schuldenkosten → Fiskal- und Beschäftigungskosten</li>
<li>Politische Kosten des Festhaltens an der Bindung steigen</li>
<li>Regierung gibt auf → Abwertung → Erwartungen erfüllen sich</li>
</ul>
<p>Beispiel: EWS-Krise 1992/93 (UK, Italien).</p>
</div>
<div class="section-block">
<h3>EWS-Krise 1992</h3>
<p>Das Europäische Währungssystem (EWS) band europäische Währungen an die D-Mark. Nach der deutschen Wiedervereinigung erhöhte die Bundesbank die Zinsen stark → andere Länder mussten nachziehen → hohe Zinsen trotz Rezession → Spekulanten (Soros) griffen das Pfund und die Lira an → Austritt aus dem EWS.</p>
</div>
`,
  formeln: [
    { label:'Spekulative Attacke (Timing)', eq: String.raw`$$t^* : \text{Reserven} = R_{\min} \;\Rightarrow\; \text{Attacke antizipiert}$$`, desc:'Attacke erfolgt bei kritischem Reserveniveau', variables: { 'R_{\\min}': 'Minimale akzeptable Reserven', 't^*': 'Zeitpunkt der Attacke' } },
  ],
  aufgaben: [
    {
      text: `Erkläre den Unterschied zwischen einer Währungskrise der 1. und 2. Generation.`,
      steps: [
        { text: '1. Generation (Krugman): Krise ist fundamental determiniert — Defizitmonetisierung erschöpft Reserven zwangsläufig. Krise unausweichlich.', eq: null },
        { text: '2. Generation (Obstfeld): Krise entsteht durch selbsterfüllende Erwartungen. Ohne Attacke wäre Bindung haltbar. Multiple Gleichgewichte: gutes (Bindung hält) oder schlechtes (Attacke, Abwertung).', eq: null },
        { text: 'Schlüsselunterschied: Bei 2. Generation kann eine Bindung "nicht-fundamental" kollabieren — durch reinen Stimmungsumschwung.', eq: null },
      ],
      result: '1. Generation: fundamentale Ursache. 2. Generation: selbsterfüllende Erwartungen, multiple Gleichgewichte.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 12. OPTIMALER WÄHRUNGSRAUM
// ─────────────────────────────────────────────────────────────
opt_waehrungsraum: {
  motivation: 'Wann lohnt es sich, die eigene Währung aufzugeben? Die OWR-Theorie liefert die Kriterien.',
  theorie: String.raw`
<div class="section-block">
<h3>Mundells OWR-Kriterien</h3>
<p>Ein <strong>optimaler Währungsraum</strong> (OWR) nach Mundell (1961) liegt vor, wenn folgende Bedingungen erfüllt sind:</p>
<div class="info-grid">
<div class="info-card"><div class="label">Faktormobilität</div><div class="value">Hohe Arbeitsmobilität</div><p>Arbeitnehmer können leicht in Boom-Regionen ziehen → asymmetrische Schocks werden über Arbeitsmärkte ausgeglichen.</p></div>
<div class="info-card"><div class="label">Lohnflexibilität</div><div class="value">Flexible Preise</div><p>Löhne passen sich schnell an → WK-Anpassung weniger nötig.</p></div>
<div class="info-card"><div class="label">Fiskaltransfers</div><div class="value">Risikoverteilung</div><p>Zentraler Fiskalmechanismus gleicht Schocks zwischen Regionen aus (z.B. US-Bundeshaushalt).</p></div>
<div class="info-card"><div class="label">Symmetrische Schocks</div><div class="value">Gleichgerichtete Konjunktur</div><p>Wenn alle Länder dieselben Schocks erleiden, ist ein einheitlicher Zinssatz optimal.</p></div>
</div>
</div>
<div class="section-block">
<h3>Kosten einer Währungsunion</h3>
<p>Hauptkosten: Verlust des Wechselkurses als Anpassungsinstrument. Bei einem negativen asymmetrischen Schock (nur Land A betroffen, nicht Land B) kann Land A nicht mehr abwerten. Alternative Anpassung nur über Deflation, Lohnsenkung oder Migration — alles langsam und schmerzhaft.</p>
</div>
<div class="section-block">
<h3>Nutzen einer Währungsunion</h3>
<ul>
<li>Wegfall von WK-Transaktionskosten</li>
<li>Preistransparenz → stärkerer Wettbewerb</li>
<li>Eliminierung von WK-Risiken → mehr Handel und Investitionen</li>
<li>Importierte Glaubwürdigkeit der Ankerwährung (Inflationsdisziplin)</li>
</ul>
</div>
`,
  formeln: [
    { label:'OWR-Kosten-Nutzen', eq: String.raw`$$\text{Beitritt lohnt sich} \;\Leftrightarrow\; \text{Nutzen (Handel, Glaubw.)} > \text{Kosten (kein WK)}$$`, desc:'Grundsätzliches Abwägungskalkül', variables: {} },
  ],
  aufgaben: [
    {
      text: `Warum ist die Eurozone nach Mundells Kriterien kein optimaler Währungsraum? Welche Anpassungsmechanismen bestehen stattdessen?`,
      steps: [
        { text: 'Geringe Arbeitsmobilität: Sprachbarrieren, kulturelle Unterschiede → Arbeit fließt kaum von Krisenländern in Boomländer.', eq: null },
        { text: 'Lohnstarrheit: Löhne sind nach unten starr (insb. in Südeuropa) → interne Abwertung schmerzhaft.', eq: null },
        { text: 'Kein zentraler Fiskalmechanismus: EU-Haushalt zu klein für großzügige Transfers.', eq: null },
        { text: 'Asymmetrische Schocks: Irland, Spanien (Immobilienboom) vs. Deutschland (Exportboom) — sehr unterschiedliche Konjunkturzyklen.', eq: null },
        { text: 'Vorhandene Anpassungsmechanismen: interne Abwertung (Lohn-/Preissenkungen), ESM-Rettungsschirm, TARGET2-Salden.', eq: null },
      ],
      result: 'Eurozone verfehlt OWR-Kriterien (geringe Mobilität, kein Fiskalföderalismus). Anpassung über interne Abwertung.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 13. EUROZONE
// ─────────────────────────────────────────────────────────────
eurozone: {
  motivation: 'Die Europäische Währungsunion ist das größte währungspolitische Experiment der Neuzeit — ihre Architektur, Probleme und Reformen sind prüfungsrelevant.',
  theorie: String.raw`
<div class="section-block">
<h3>Architektur der EWU</h3>
<p>Die Europäische Währungsunion (EWU) seit 1999/2002: gemeinsame Währung Euro, gemeinsame Geldpolitik durch EZB, dezentrale Fiskalpolitik mit koordinierten Regeln (Stabilitäts- und Wachstumspakt).</p>
<div class="info-grid">
<div class="info-card"><div class="label">EZB</div><div class="value">Einheitliche GP</div><p>Setzt einheitlichen Leitzins für alle 20 Euroländer. Primärziel: Preisstabilität (Inflation ≈ 2%).</p></div>
<div class="info-card"><div class="label">SGP</div><div class="value">Defizitregeln</div><p>Defizit ≤ 3% BIP, Schulden ≤ 60% BIP (Maastricht-Kriterien).</p></div>
<div class="info-card"><div class="label">Bankenunion</div><div class="value">SRM, SSM</div><p>Seit 2014/15: Einheitliche Bankenaufsicht und Abwicklungsmechanismus.</p></div>
</div>
</div>
<div class="section-block">
<h3>Eurokrise 2010–2015</h3>
<p>Nach der Finanzkrise 2008: Defizite und Schulden stiegen stark. Für Peripherieländer (GR, PT, IE, ES, IT) stiegen die Zinsen auf Staatsanleihen dramatisch (Spread gegenüber Deutschland).</p>
<p>Ursachen: mangelnde Wettbewerbsfähigkeit, Leistungsbilanzdefizite, schwache Banken, kein "lender of last resort" für Staatsanleihen (bis Draghi 2012: "whatever it takes").</p>
</div>
<div class="section-block">
<h3>Reformmaßnahmen</h3>
<ul>
<li>ESM (Europäischer Stabilitätsmechanismus): Rettungsschirm</li>
<li>OMT (Outright Monetary Transactions): EZB kauft Staatsanleihen</li>
<li>QE-Programme: Quantitative Lockerung ab 2015</li>
<li>Bankenunion: einheitliche Aufsicht und Abwicklung</li>
</ul>
</div>
`,
  formeln: [
    { label:'Maastricht-Kriterien', eq: String.raw`$$\frac{\text{Defizit}}{Y} \leq 3\% \quad \text{und} \quad \frac{B}{Y} \leq 60\%$$`, desc:'Fiskaldisziplinregeln der EWU', variables: { 'B': 'Staatsschulden', 'Y': 'BIP', '3\\%': 'Defizitgrenze', '60\\%': 'Schuldengrenze' } },
  ],
  aufgaben: [
    {
      text: `Warum konnte die EZB 2010–2012 zunächst nicht als "lender of last resort" für Staatsanleihen agieren? Was änderte sich mit "whatever it takes"?`,
      steps: [
        { text: 'EZB-Mandat: Preisstabilität. Direkter Kauf von Staatsanleihen (monetäre Staatsfinanzierung) war vertraglich problematisch (Art. 123 AEUV).', eq: null },
        { text: 'Folge: Investoren zweifelten an der Zahlungsfähigkeit von Griechenland, Portugal etc. → Spreads stiegen explosiv.', eq: null },
        { text: 'Juli 2012: Draghi kündigt OMT an ("whatever it takes to preserve the Euro") — EZB würde unbegrenzt Staatsanleihen kaufen, wenn Bedingungen erfüllt.', eq: null },
        { text: 'Wirkung: Allein die Ankündigung beruhigte Märkte — Spreads sanken stark, ohne dass OMT je aktiviert werden musste.', eq: null },
      ],
      result: 'OMT-Ankündigung wirkte als "Bazooka": glaubwürdige Backstop-Funktion senkte Spreads ohne Ankäufe.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 14. ZEITINKONSISTENZ
// ─────────────────────────────────────────────────────────────
zeitinkonsistenz: {
  motivation: 'Warum führen diskretionäre Geldpolitiker selbst mit besten Absichten zu zu hoher Inflation? Das Zeitinkonsistenzproblem ist das fundamentale Argument für regelgebundene Geldpolitik.',
  theorie: String.raw`
<div class="section-block">
<h3>Das Grundproblem</h3>
<p>Kydland/Prescott (1977): Ein Geldpolitiker, der diskretionär handeln kann, steht vor einem <strong>Zeitinkonsistenzproblem</strong>:</p>
<ol>
<li>Ankündigung niedriger Inflation (glaubwürdig? → Lohnverhandlungen).</li>
<li>Nach Lohnfixierung: Anreiz zu Überraschungsinflation (↑ Beschäftigung kurzfristig).</li>
<li>Privater Sektor antizipiert diesen Anreiz → setzt Inflationserwartungen hoch.</li>
<li>Gleichgewicht: zu hohe Inflation, keine Beschäftigungsgewinne (Inflationsbias).</li>
</ol>
</div>
<div class="section-block">
<h3>Phillipskurve und Überraschungsinflation</h3>
<p>Kurzzeitige Phillipskurve mit Erwartungen:</p>
<div class="math-block">$$u = u_n - \alpha(\pi - \pi^e)$$</div>
<p>Überraschungsinflation ($\pi > \pi^e$) senkt kurzfristig Arbeitslosigkeit unter $u_n$. Aber langfristig passen Erwartungen an → Rückkehr zu $u_n$ mit dauerhaft höherer Inflation.</p>
</div>
<div class="section-block">
<h3>Inflationsbias im Gleichgewicht</h3>
<p>Im Nash-Gleichgewicht ohne Bindung gilt:</p>
<div class="math-block">$$\pi^* = \frac{\alpha \cdot \lambda}{\chi} \cdot (u_n - u^*) > 0$$</div>
<p>Der Gleichgewichtsinflationssatz ist positiv, obwohl Überraschungsinflation im Gleichgewicht keine Beschäftigungsgewinne erzeugt — ein reines Wohlfahrtsverlust.</p>
</div>
<div class="section-block">
<h3>Lösungsansätze</h3>
<div class="info-grid">
<div class="info-card"><div class="label">Regelgebundene GP</div><div class="value">Taylor-Regel</div><p>Vorab festgelegte Regel → kein Anreiz zu Überraschungsinflation.</p></div>
<div class="info-card"><div class="label">Zentralbank-Unabhängigkeit</div><div class="value">Konservativer ZB</div><p>Rogoffs konservativer ZB-Chef: stärkeres Gewicht auf Inflation reduziert Bias.</p></div>
<div class="info-card"><div class="label">Reputationsmodelle</div><p>Wiederholtes Spiel: Zentralbank baut Glaubwürdigkeit auf.</div></div>
</div>
</div>
`,
  formeln: [
    { label:'Erwartungsaugm. Phillipskurve', eq: String.raw`$$u = u_n - \alpha(\pi - \pi^e)$$`, desc:'Überraschungsinflation senkt kurzfristig Arbeitslosigkeit', variables: { 'u': 'Arbeitslosenquote', 'u_n': 'Natürliche Arbeitslosenquote', '\\alpha': 'Sensitivitätsparameter', '\\pi': 'Tatsächliche Inflation', '\\pi^e': 'Erwartete Inflation' } },
    { label:'Inflationsbias', eq: String.raw`$$\pi^* = \frac{\alpha\lambda}{\chi}(u_n - u^*) > 0$$`, desc:'Gleichgewichtsinflation ohne Bindung', variables: { '\\lambda': 'Gewicht auf Beschäftigung in ZB-Verlustfunktion', '\\chi': 'Gewicht auf Inflation', 'u^*': 'Angestrebte Arbeitslosenquote (< u_n)' } },
  ],
  aufgaben: [
    {
      text: `Erkläre das Zeitinkonsistenzproblem anhand eines zweistufigen Spiels zwischen Zentralbank und Lohnverhandlern.`,
      steps: [
        { text: 'Stufe 1 (vor Lohnverhandlung): ZB kündigt $\pi = 0\%$ an. Wenn glaubwürdig: Löhne werden bei $\pi^e = 0$ fixiert.', eq: null },
        { text: String.raw`Stufe 2 (nach Lohnfixierung): ZB kann Überraschungsinflation erzeugen ($\pi > 0$) → Reallöhne sinken → Beschäftigung steigt → $u < u_n$.`, eq: null },
        { text: 'Antizipation: Lohnverhandler wissen das und setzen $\pi^e > 0$. Im Gleichgewicht: hohe Inflation, kein Beschäftigungsgewinn.', eq: null },
        { text: String.raw`Zeitinkonsistenz: Die Ankündigung $\pi = 0$ ist <em>ex ante</em> optimal, aber <em>ex post</em> gibt es Anreiz abzuweichen.`, eq: null },
      ],
      result: 'Zeitinkonsistenz: Diskretionäre ZB kann keine niedrige Inflation glaubwürdig versprechen → Inflationsbias.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 15. BARRO-GORDON-MODELL
// ─────────────────────────────────────────────────────────────
barro_gordon: {
  motivation: 'Das Barro-Gordon-Modell formalisiert den Inflationsbias und zeigt, wie regelgebundene Geldpolitik Wohlfahrtsgewinne erzielt.',
  theorie: String.raw`
<div class="section-block">
<h3>Setup des Modells</h3>
<p>Zentralbank minimiert eine Verlustfunktion in Inflation und Arbeitslosigkeit:</p>
<div class="math-block">$$L = \frac{1}{2}\chi \pi^2 + \frac{1}{2}\lambda(u - u^*)^2$$</div>
<p>mit $\chi, \lambda > 0$. Phillipskurve: $u = u_n - \alpha(\pi - \pi^e)$.</p>
<p>Annahme: $u^* < u_n$ — ZB will Beschäftigung über dem natürlichen Niveau halten.</p>
</div>
<div class="section-block">
<h3>Diskretionäre Lösung (Nash-Gleichgewicht)</h3>
<p>ZB optimiert gegeben $\pi^e$. Optimalbedingung (FOC):</p>
<div class="math-block">$$\frac{\partial L}{\partial \pi} = 0 \;⇒\; \chi\pi - \lambda\alpha(u - u^*) = 0$$</div>
<p>Mit rationalen Erwartungen gilt im GG: $\pi = \pi^e$, also $u = u_n$. Einsetzen:</p>
<div class="math-block">$$\pi^D = \frac{\alpha\lambda}{\chi}(u_n - u^*) > 0$$</div>
<p>Dies ist der <strong>Inflationsbias</strong>: positive Gleichgewichtsinflation trotz null Beschäftigungsgewinn.</p>
</div>
<div class="section-block">
<h3>Regelgebundene Lösung</h3>
<p>Wenn die ZB sich glaubwürdig an $\pi = 0$ binden kann:</p>
<ul>
<li>$\pi^e = 0$ → $u = u_n$ (wie im diskretionären Fall)</li>
<li>Aber: $\pi = 0$ statt $\pi^D > 0$ → geringerer Wohlfahrtsverlust durch Inflation</li>
</ul>
<p>Die regelgebundene Lösung dominiert die diskretionäre: gleiche Arbeitslosigkeit, aber weniger Inflation.</p>
</div>
<div class="section-block">
<h3>Wohlfahrtsvergleich</h3>
<div class="math-block">$$L^{\text{Regel}} = \frac{1}{2}\lambda(u_n - u^*)^2 < L^D = \frac{1}{2}\lambda(u_n - u^*)^2 + \frac{1}{2}\chi(\pi^D)^2$$</div>
<p>Die Regel ist strikt besser — der Inflationsbias ist ein reiner Wohlfahrtsverlust.</p>
</div>
`,
  formeln: [
    { label:'ZB-Verlustfunktion', eq: String.raw`$$L = \tfrac{1}{2}\chi\pi^2 + \tfrac{1}{2}\lambda(u - u^*)^2$$`, desc:'Zentralbank minimiert Inflation + Abweichung vom Beschäftigungsziel', variables: { '\\chi': 'Gewicht auf Inflation', '\\lambda': 'Gewicht auf Beschäftigung', 'u^*': 'Angestrebte ALQ (< u_n)' } },
    { label:'Diskretionäre Inflation', eq: String.raw`$$\pi^D = \frac{\alpha\lambda}{\chi}(u_n - u^*)$$`, desc:'Gleichgewichtsinflationsbias ohne Bindung', variables: { '\\alpha': 'Phillipskurven-Steilheit', 'u_n - u^*': 'Gap zwischen natürlicher und angestrebter ALQ' } },
  ],
  aufgaben: [
    {
      text: String.raw`Im Barro-Gordon-Modell gilt: $\alpha = 0{,}5$, $\lambda = 2$, $\chi = 1$, $u_n = 6\%$, $u^* = 4\%$. Berechne den diskretionären Gleichgewichtsinflationssatz.`,
      steps: [
        { text: 'Formel für diskretionäre Inflation:', eq: String.raw`$$\pi^D = \frac{\alpha\lambda}{\chi}(u_n - u^*)$$` },
        { text: 'Einsetzen:', eq: String.raw`$$\pi^D = \frac{0{,}5 \cdot 2}{1} \cdot (6\% - 4\%) = 1 \cdot 2\% = 2\%$$` },
        { text: 'Im Gleichgewicht ist $\pi = \pi^e = 2\%$ und $u = u_n = 6\%$ — kein Beschäftigungsgewinn, aber 2% Inflation.', eq: null },
      ],
      result: String.raw`$\pi^D = 2\%$: Inflationsbias ohne Beschäftigungsgewinn.`
    },
    {
      text: `Wie verändert sich der Inflationsbias, wenn die ZB stärker inflationsavers wird (χ steigt)? Welche institutionelle Schlussfolgerung ergibt sich?`,
      steps: [
        { text: String.raw`$\pi^D = \frac{\alpha\lambda}{\chi}(u_n - u^*)$. Wenn $\chi$ steigt, sinkt $\pi^D$.`, eq: null },
        { text: 'Intuition: Eine ZB, die Inflation stärker gewichtet, hat geringeren Anreiz zu Überraschungsinflation.', eq: null },
        { text: 'Rogoffs Schlussfolgerung: Ernennung eines "konservativen" ZB-Chefs (hohes χ) reduziert Inflationsbias.', eq: null },
        { text: 'Kompromiss: Sehr hohes χ → geringe Stabilisierung von Schocks (übermäßige Austerität). Optimales χ > gesellschaftlich gewünschtes Niveau.', eq: null },
      ],
      result: 'Konservativer ZB-Chef (↑ χ): niedrigerer Inflationsbias, aber geringere Schockstabilisierung.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 16. SCHULDEN- UND DEFIZITREGELN
// ─────────────────────────────────────────────────────────────
schuldenregeln: {
  motivation: 'Schuldenregeln sollen das Zeitinkonsistenzproblem der Fiskalpolitik lösen und langfristige Tragfähigkeit der Staatsschulden sichern.',
  theorie: String.raw`
<div class="section-block">
<h3>Rationale für Schuldenregeln</h3>
<p>Ohne Regeln gibt es fiskalpolitische Defizitneigung:</p>
<ul>
<li><strong>Ausgabendruck:</strong> Politiker haben Anreiz, beliebte Ausgaben durch Defizite zu finanzieren.</li>
<li><strong>Intertemporale Verschiebung:</strong> Schulden wälzen Kosten auf zukünftige Generationen ab.</li>
<li><strong>Common-Pool-Problem:</strong> In Koalitionen überschätzen Ministerien ihren Anspruch auf öffentliche Mittel.</li>
</ul>
</div>
<div class="section-block">
<h3>Maastricht-Kriterien</h3>
<p>Für EWU-Beitritt und laufende Mitgliedschaft:</p>
<div class="math-block">$$\frac{\text{Defizit}}{Y} \leq 3\% \quad \text{und} \quad \frac{B}{Y} \leq 60\%$$</div>
<p>Ökonomische Herleitung: Bei Nominalwachstum von 5% (≈ 3% real + 2% Inflation) stabilisiert ein Defizit von 3% die Schuldenquote bei 60%:</p>
<div class="math-block">$$\Delta b \approx 0 \;\Leftrightarrow\; d = g \cdot b = 0{,}05 \cdot 0{,}60 = 3\%$$</div>
</div>
<div class="section-block">
<h3>Grenzen von Schuldenregeln</h3>
<ul>
<li><strong>Prozyklizität:</strong> In Rezessionen erzwingt die Defizitgrenze Austerität, die den Abschwung verschärft.</li>
<li><strong>Kreativbuchhaltung:</strong> Ausgliederung von Ausgaben (PPP, Sondervermögen) umgeht Regeln.</li>
<li><strong>Durchsetzung:</strong> SGP-Sanktionen wurden häufig nicht verhängt (politische Rücksichtnahme).</li>
</ul>
</div>
`,
  formeln: [
    { label:'Schuldenquoten-Stabilisierung', eq: String.raw`$$d^* = g \cdot b^* \quad \Rightarrow \quad d^* = 0{,}05 \cdot 0{,}60 = 3\%$$`, desc:'Herleitung der Maastricht-Defizitgrenze', variables: { 'd^*': 'Defizitquote (% BIP)', 'g': 'Nominales BIP-Wachstum', 'b^*': 'Angestrebte Schuldenquote' } },
  ],
  aufgaben: [
    {
      text: String.raw`Zeige, dass ein jährliches Defizit von 3\% des BIP die Schuldenquote bei nominalen 5\% BIP-Wachstum langfristig bei 60\% stabilisiert.`,
      steps: [
        { text: 'Dynamik der Schuldenquote (linearisiert):', eq: String.raw`$$\dot{b} \approx d - g \cdot b$$` },
        { text: String.raw`Gleichgewicht ($\dot{b} = 0$): $d = g \cdot b^*$.`, eq: null },
        { text: 'Einsetzen:', eq: String.raw`$$b^* = \frac{d}{g} = \frac{3\%}{5\%} = 60\% \checkmark$$` },
      ],
      result: String.raw`3\% Defizit bei 5\% Wachstum stabilisiert Schuldenquote bei 60\%.`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 17. STAATLICHE BUDGETRESTRIKTION
// ─────────────────────────────────────────────────────────────
budgetrestriktion: {
  motivation: 'Die intertemporale Budgetrestriktion zeigt, wie heutige Defizite zukünftige Überschüsse implizieren — die Grundlage für Tragfähigkeitsanalysen.',
  theorie: String.raw`
<div class="section-block">
<h3>Periodenweise Budgetrestriktion</h3>
<p>Das staatliche Defizit in Periode $t$:</p>
<div class="math-block">$$\text{Defizit}_t = r_t B_{t-1} + (G_t - T_t)$$</div>
<p>Das Defizit finanziert sich durch neue Schulden: $\text{Defizit}_t = B_t - B_{t-1}$.</p>
<p>Damit gilt die <strong>Akkumulationsgleichung</strong>:</p>
<div class="math-block">$$B_t = (1 + r_t) B_{t-1} + G_t - T_t$$</div>
</div>
<div class="section-block">
<h3>Primärdefizit und Primärüberschuss</h3>
<p>Das <strong>Primärdefizit</strong> (ohne Zinszahlungen):</p>
<div class="math-block">$$PD_t = G_t - T_t$$</div>
<p>Gesamtdefizit = Zinsen auf Altschulden + Primärdefizit:</p>
<div class="math-block">$$B_t - B_{t-1} = r_t B_{t-1} + PD_t$$</div>
</div>
<div class="section-block">
<h3>Intertemporale Budgetrestriktion</h3>
<p>Durch Vorwärtsiteration und unter der Transversalitätsbedingung ($\lim_{T\to\infty} B_T/(1+r)^T = 0$) ergibt sich:</p>
<div class="math-block">$$B_0 = \sum_{t=1}^{\infty} \frac{T_t - G_t}{(1+r)^t}$$</div>
<p>Die heutige Schuld entspricht dem Barwert aller zukünftigen Primärüberschüsse. <strong>Tragfähigkeit</strong> bedeutet, dass dieser Barwert existiert und mit $B_0$ übereinstimmt.</p>
</div>
<div class="section-block">
<h3>Seigniorage</h3>
<p>Ein weiterer Finanzierungsweg: Geldschöpfung (Seigniorage):</p>
<div class="math-block">$$\text{Seigniorage} = \frac{\Delta M}{P}$$</div>
<p>Persistente Monetisierung führt zu Inflation (Quantitätstheorie) — eine "Inflationssteuer".</p>
</div>
`,
  formeln: [
    { label:'Schuldenakkumulation', eq: String.raw`$$B_t = (1+r)B_{t-1} + G_t - T_t$$`, desc:'Periodische Budgetrestriktion des Staates', variables: { 'B_t': 'Schuldenstand Ende Periode t', 'r': 'Realzins', 'G_t': 'Staatsausgaben', 'T_t': 'Steuereinnahmen' } },
    { label:'Intertemporale BR', eq: String.raw`$$B_0 = \sum_{t=1}^{\infty} \frac{T_t - G_t}{(1+r)^t}$$`, desc:'Schuld = Barwert zukünftiger Primärüberschüsse', variables: { 'B_0': 'Anfangsschuldenstand', 'T_t - G_t': 'Primärüberschuss Periode t', '(1+r)^t': 'Diskontfaktor' } },
  ],
  aufgaben: [
    {
      text: String.raw`Staat hat $B_0 = 1000$, $r = 5\%$, $G_t = 200$, $T_t = 200$ (dauerhaft). Ist die Schuld tragfähig? Was müsste sich ändern?`,
      steps: [
        { text: 'Primärdefizit: $PD = G - T = 0$. Zinszahlungen: $rB_0 = 0{,}05 \cdot 1000 = 50$.', eq: null },
        { text: 'Schuldenakkumulation: $B_t = 1{,}05 \cdot B_{t-1}$ — Schulden wachsen exponentiell!', eq: null },
        { text: String.raw`Intertemporale BR: $B_0 = \sum_t (T-G)/(1+r)^t = 0 \neq 1000$.`, eq: null },
        { text: 'Nicht tragfähig: Primärüberschuss muss mindestens die Zinsen decken, also $T - G \geq rB_0 = 50$.', eq: null },
      ],
      result: 'Nicht tragfähig — permanenter Primärüberschuss von mind. 50 benötigt.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 18. SCHULDENQUOTE & SCHULDENENTWICKLUNG
// ─────────────────────────────────────────────────────────────
schuldenquote: {
  motivation: 'Die Schuldenquote (Schulden/BIP) ist das Standardmaß für fiskalische Tragfähigkeit. Ihre Dynamik hängt vom Zinssatz-Wachstums-Differential und dem Primärsaldo ab.',
  theorie: String.raw`
<div class="section-block">
<h3>Dynamik der Schuldenquote</h3>
<p>Sei $b_t = B_t / Y_t$ die Schuldenquote. Aus der Schuldenakkumulation ergibt sich:</p>
<div class="math-block">$$b_t \approx b_{t-1} + (r - g) b_{t-1} - ps_t = (1 + r - g) b_{t-1} - ps_t$$</div>
<p>wobei $ps_t = (T_t - G_t)/Y_t$ der Primärüberschuss in % des BIP und $g$ die Wachstumsrate des nominalen BIP.</p>
</div>
<div class="section-block">
<h3>Tragfähigkeitsbedingung</h3>
<p>Die Schuldenquote ist stabil ($\Delta b = 0$), wenn:</p>
<div class="math-block">$$ps^* = (r - g) \cdot b$$</div>
<p>Wenn $r > g$: positiver Primärüberschuss nötig. Wenn $r < g$: Schulden "wachsen weg" (Situation in Hochinflationsphasen und Boomphasen).</p>
</div>
<div class="section-block">
<h3>Zinssatz-Wachstums-Differential</h3>
<div class="info-grid">
<div class="info-card"><div class="label">$r > g$</div><div class="value">Dynamisch effizient</div><p>Schuldenquote explodiert ohne Primärüberschuss. Riskante Situation.</p></div>
<div class="info-card"><div class="label">$r < g$</div><div class="value">Dynamisch ineffizient</div><p>Schulden wachsen langsamer als BIP — kein Primärüberschuss nötig für Stabilisierung.</p></div>
<div class="info-card"><div class="label">$r = g$</div><div class="value">Grenzfall</div><p>Schuldenquote konstant bei $ps = 0$ — kein Primärsaldo erforderlich.</p></div>
</div>
</div>
<div class="section-block">
<h3>Schneeball-Effekt</h3>
<p>Wenn $r > g$: Zinsen auf Schulden übersteigen BIP-Wachstum → Schuldenquote steigt automatisch, selbst ohne neue Primärdefizite. Dieser <strong>Schneeball-Effekt</strong> kann zu explosiven Schulddynamiken führen.</p>
</div>
`,
  formeln: [
    { label:'Schuldenquoten-Dynamik', eq: String.raw`$$\Delta b_t \approx (r - g)\,b_{t-1} - ps_t$$`, desc:'Veränderung der Schuldenquote', variables: { 'b': 'Schuldenquote (B/Y)', 'r': 'Realzins auf Staatsschulden', 'g': 'Reales BIP-Wachstum', 'ps': 'Primärüberschuss (% BIP)' } },
    { label:'Stabilitätsbedingung', eq: String.raw`$$ps^* = (r - g) \cdot b$$`, desc:'Primärüberschuss für konstante Schuldenquote', variables: { 'ps^*': 'Erforderlicher Primärüberschuss', 'r-g': 'Zinssatz-Wachstums-Differential', 'b': 'Aktuelle Schuldenquote' } },
  ],
  aufgaben: [
    {
      text: String.raw`Ein Land hat $b = 80\%$, $r = 4\%$, $g = 2\%$, $ps = 0$. Wie entwickelt sich die Schuldenquote? Welcher Primärüberschuss stabilisiert sie?`,
      steps: [
        { text: 'Schuldendynamik:', eq: String.raw`$$\Delta b = (r - g) b - ps = (0{,}04 - 0{,}02) \cdot 0{,}80 - 0 = 0{,}016 = 1{,}6\%$$` },
        { text: 'Schuldenquote steigt jährlich um 1,6 Prozentpunkte (Schneeball-Effekt).', eq: null },
        { text: 'Stabilisierender Primärüberschuss:', eq: String.raw`$$ps^* = (r-g) \cdot b = 0{,}02 \cdot 0{,}80 = 1{,}6\% \text{ des BIP}$$` },
      ],
      result: String.raw`Ohne $ps$: Schuldenquote steigt um 1,6% p.a. Stabilisierung erfordert $ps = 1{,}6\%$ BIP.`
    },
    {
      text: String.raw`Erkläre, warum in einer Boomphase ($g$ sehr hoch) auch hoch verschuldete Länder die Schuldenquote reduzieren können, ohne zu sparen.`,
      steps: [
        { text: String.raw`$\Delta b = (r-g)b - ps$. Wenn $g > r$ und $ps \geq 0$: $\Delta b < 0$.`, eq: null },
        { text: 'BIP wächst schneller als die Zinsen auf Schulden → Schulden "wachsen weg" relativ zum BIP.', eq: null },
        { text: 'Beispiel Deutschland nach WK II: Schuldenquote sank trotz nominaler Schulden durch hohes Wachstum.', eq: null },
      ],
      result: String.raw`Bei $g > r$: Schuldenquote sinkt automatisch — "Herauswachsen" ohne Primärüberschuss möglich.`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 19. RICARDIANISCHE ÄQUIVALENZ
// ─────────────────────────────────────────────────────────────
ricardianisch: {
  motivation: 'Ricardianische Äquivalenz besagt, dass Staatsdefizite heute identisch sind mit Steuererhöhungen morgen — rational vorausschauende Haushalte reagieren darauf mit mehr Sparen.',
  theorie: String.raw`
<div class="section-block">
<h3>Das Ricardo-Barro-Theorem</h3>
<p>Kernaussage (Barro 1974): Unter bestimmten Bedingungen ist es für den privaten Konsum irrelevant, ob der Staat eine Ausgabe durch Steuern oder Defizite finanziert.</p>
<p><strong>Intuition:</strong> Heutige Steuersenkung finanziert durch Schulden impliziert künftige Steuererhöhung. Ein rational vorausschauender Haushalt spart die Steuersenkung komplett und konsumiert nicht mehr.</p>
</div>
<div class="section-block">
<h3>Formale Herleitung</h3>
<p>Haushalt lebt 2 Perioden. Budgetrestriktion:</p>
<div class="math-block">$$c_1 + \frac{c_2}{1+r} = (y_1 - T_1) + \frac{y_2 - T_2}{1+r}$$</div>
<p>Staat: $G_1 + G_2/(1+r) = T_1 + T_2/(1+r)$ (intertemporale BR).</p>
<p>Wenn $T_1$ sinkt und $T_2$ steigt (so dass Staatsbudget unverändert): Rechte Seite der Haushaltsbudgetrestriktion ist invariant → $c_1$ und $c_2$ unverändert.</p>
</div>
<div class="section-block">
<h3>Voraussetzungen</h3>
<ul>
<li>Vollkommene Kapitalmärkte (Haushalte können zum selben Zinssatz leihen wie der Staat)</li>
<li>Rationale Erwartungen und Voraussicht (kein "fiscal myopia")</li>
<li>Altruismus zwischen Generationen (Erbschaftsmotive)</li>
<li>Keine Liquiditätsbeschränkungen</li>
</ul>
</div>
<div class="section-block">
<h3>Empirische Evidenz</h3>
<p>In der Realität gilt Ricardianische Äquivalenz nur teilweise:</p>
<ul>
<li>Liquiditätsbeschränkungen (arme Haushalte konsumieren mehr bei Steuersenkungen)</li>
<li>Endlichkeit des Lebens (Schulden auf Enkeln überwälzt → fühlen sich reicher)</li>
<li>Keynesianische Haushalte (keine Vorausschau)</li>
</ul>
<p>Konsens: Fiskalpolitik hat echte Realeffekte, aber Ricardianische Äquivalenz dämpft den Multiplikator.</p>
</div>
`,
  formeln: [
    { label:'Äquivalenz-Bedingung', eq: String.raw`$$\Delta T_1 = -\frac{\Delta T_2}{1+r} \;\Rightarrow\; \Delta C_1 = 0$$`, desc:'Steuersenkung heute + Erhöhung morgen: kein Konsumeffekt', variables: { '\\Delta T_1': 'Steuersenkung heute', '\\Delta T_2/(1+r)': 'Barwert künftiger Steuererhöhung', '\\Delta C_1': 'Konsumeänderung' } },
  ],
  aufgaben: [
    {
      text: `Erkläre anhand eines 2-Perioden-Modells, warum ein defizitfinanzierter Steuererlass nach Ricardianischer Äquivalenz den Konsum nicht erhöht.`,
      steps: [
        { text: 'Staat senkt $T_1$ um 100, finanziert durch Anleihe → $T_2$ muss um $100(1+r)$ steigen.', eq: null },
        { text: 'Haushalt sieht: Lebenseinkommen (Barwert) unverändert:', eq: String.raw`$$(y_1 - T_1 - 100) + \frac{y_2 - T_2 + 100(1+r)}{1+r} = (y_1 - T_1) + \frac{y_2 - T_2}{1+r}$$` },
        { text: 'Optimale Reaktion: 100€ mehr sparen (kauft Staatsanleihe) → $c_1$ unverändert.', eq: null },
        { text: 'Private Ersparnisse steigen genau um das Staatdsdefizit → nationale Ersparnis konstant.', eq: null },
      ],
      result: 'Ricardianische Äquivalenz: $\Delta S_{\text{priv}} = -\Delta S_{\text{staat}}$ → Nationalersparnis, Investitionen und Zinsen unverändert.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 20. TAYLOR-REGEL
// ─────────────────────────────────────────────────────────────
taylor_regel: {
  motivation: 'Die Taylor-Regel beschreibt, wie eine Zentralbank den Leitzins systematisch auf Inflations- und Outputabweichungen reagieren sollte.',
  theorie: String.raw`
<div class="section-block">
<h3>Grundform der Taylor-Regel</h3>
<p>Taylor (1993) schlug folgende Reaktionsfunktion vor:</p>
<div class="math-block">$$i_t = r^* + \pi_t + a(\pi_t - \pi^*) + b(y_t - y_n)$$</div>
<p>oder äquivalent in der Blanchard-Form:</p>
<div class="math-block">$$i_t = i^* + a(\pi_t - \pi^*) - b(u_t - u_n)$$</div>
<p>mit $i^* = r^* + \pi^*$ als nominalem "natürlichem" Zinssatz.</p>
</div>
<div class="section-block">
<h3>Parameter und Interpretation</h3>
<div class="info-grid">
<div class="info-card"><div class="label">$r^*$</div><div class="value">Nat. Realzins</div><p>Langfristiger gleichgewichtiger Realzins (ca. 2% in Taylor 1993).</p></div>
<div class="info-card"><div class="label">$\pi^*$</div><div class="value">Inflationsziel</div><p>Angestrebte Inflation (EZB: ~2%).</p></div>
<div class="info-card"><div class="label">$a > 0$</div><div class="value">Inflationsreaktionskoeff.</div><p>Taylor-Prinzip: $a > 0$ nötig (realer Zins steigt bei Inflation).</p></div>
<div class="info-card"><div class="label">$b > 0$</div><div class="value">Outputreaktionskoeff.</div><p>Höhere Arbeitslosigkeit → niedrigerer Zinssatz (expansiv).</p></div>
</div>
</div>
<div class="section-block">
<h3>Taylor-Prinzip</h3>
<p>Das <strong>Taylor-Prinzip</strong> besagt: Der nominale Zinssatz muss bei Inflation mehr als 1:1 steigen ($1+a > 1$, d.h. $a > 0$), damit der <em>reale</em> Zinssatz steigt und Inflation dämpft.</p>
<div class="math-block">$$\frac{\partial i}{\partial \pi} = 1 + a > 1 \quad \Leftrightarrow \quad \frac{\partial r}{\partial \pi} = a > 0$$</div>
<p>Wenn $a \leq 0$: realer Zins sinkt bei Inflation → destabilisierend (Zinserhöhung reicht nicht aus).</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Taylor-Regel ≠ mechanische Regel</strong> Zentralbanken nutzen die Taylor-Regel als Orientierung, nicht als bindende Verpflichtung. Abweichungen (z.B. bei Finanzkrisen) sind möglich und sinnvoll.</div>
<div class="warn-box"><strong>Taylor-Prinzip vergessen</strong> Der Koeffizient $a > 0$ allein reicht nicht — der <em>Gesamtkoeffizient</em> auf $\pi$ ist $1 + a$, der real wirksame Koeffizient auf den Realzins ist $a$.</div>
</div>
`,
  formeln: [
    { label:'Taylor-Regel', eq: String.raw`$$i_t = r^* + \pi^* + (1+a)(\pi_t - \pi^*) + b(y_t - y_n)$$`, desc:'Zinssetzungsregel der Zentralbank', variables: { 'i_t': 'Leitzins in Periode t', 'r^*': 'Nat. Realzins', '\\pi^*': 'Inflationsziel', 'a': 'Inflationsreaktionskoeff. (>0)', 'b': 'Outputlückenkoeff. (>0)' } },
    { label:'Taylor-Prinzip', eq: String.raw`$$\frac{\partial r_t}{\partial \pi_t} = a > 0$$`, desc:'Realzins muss bei Inflation steigen', variables: { 'a': 'Inflationsreaktionsparameter der ZB' } },
  ],
  aufgaben: [
    {
      text: String.raw`EZB nutzt: $r^* = 2\%$, $\pi^* = 2\%$, $a = 0{,}5$, $b = 0{,}5$. Aktuell: $\pi = 4\%$, $y - y_n = -2\%$. Berechne den optimalen Leitzins.`,
      steps: [
        { text: 'Taylor-Regel:', eq: String.raw`$$i = r^* + \pi^* + (1+a)(\pi - \pi^*) + b(y - y_n)$$` },
        { text: 'Einsetzen:', eq: String.raw`$$i = 2\% + 2\% + 1{,}5 \cdot (4\% - 2\%) + 0{,}5 \cdot (-2\%)$$` },
        { text: 'Berechnen:', eq: String.raw`$$i = 4\% + 3\% - 1\% = 6\%$$` },
      ],
      result: String.raw`Leitzins = 6\%: hohe Inflation dominiert (6% trotz negativer Outputlücke).`
    },
    {
      text: `Erkläre, warum das Taylor-Prinzip ($a > 0$) für Preisstabilität notwendig ist.`,
      steps: [
        { text: String.raw`Angenommen $a = 0$: $i = r^* + \pi_t$ → Realzins $r = i - \pi = r^*$ konstant.`, eq: null },
        { text: 'Inflation steigt → Realzins bleibt gleich → keine dämpfende Wirkung → Inflation setzt sich fort oder steigt.', eq: null },
        { text: String.raw`Mit $a > 0$: $i = r^* + \pi_t + a(\pi_t - \pi^*)$ → $r = r^* + a(\pi_t - \pi^*)$ steigt bei $\pi > \pi^*$.`, eq: null },
        { text: 'Höherer Realzins → dämpft Nachfrage → Inflation sinkt zurück zum Ziel.', eq: null },
      ],
      result: 'Taylor-Prinzip: nur bei a > 0 steigt der Realzins bei Inflation und dämpft sie zurück.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 21. INFLATIONSSTEUERUNG
// ─────────────────────────────────────────────────────────────
inflation_targeting: {
  motivation: 'Inflation Targeting ist das meistverwendete geldpolitische Regime der letzten 30 Jahre — es kombiniert Transparenz, Glaubwürdigkeit und Flexibilität.',
  theorie: String.raw`
<div class="section-block">
<h3>Kernelemente des Inflation Targeting</h3>
<p>Inflation Targeting (IT) umfasst:</p>
<ol>
<li><strong>Explizites quantitatives Inflationsziel</strong> (z.B. 2% für EZB)</li>
<li><strong>Operative Unabhängigkeit</strong> der Zentralbank bei der Zielerreichung</li>
<li><strong>Transparenz und Kommunikation</strong> (Inflationsberichte, Pressekonferenzen)</li>
<li><strong>Accountability:</strong> Zentralbank rechenschaftspflichtig gegenüber Öffentlichkeit/Parlament</li>
</ol>
</div>
<div class="section-block">
<h3>EZB-Strategie</h3>
<p>EZB-Mandat: Preisstabilität = Inflation nahe aber unter 2% (seit 2021: symmetrisch um 2%). Zwei-Säulen-Strategie:</p>
<div class="info-grid">
<div class="info-card"><div class="label">Wirtschaftliche Analyse</div><div class="value">Säule 1</div><p>Kurzfristige Risiken für Preisstabilität (Nachfrage-, Angebotsschocks, Outputlücke).</p></div>
<div class="info-card"><div class="label">Monetäre Analyse</div><div class="value">Säule 2</div><p>Mittelfristige Inflationsrisiken über Geldmengenwachstum (M3-Referenzwert 4,5%).</p></div>
</div>
</div>
<div class="section-block">
<h3>Vorteile von Inflation Targeting</h3>
<ul>
<li>Löst Zeitinkonsistenz durch explizite Verpflichtung und Transparenz</li>
<li>Verankert Inflationserwartungen → weniger Lohn-Preis-Spiralen</li>
<li>Flexibel: "flexibles IT" erlaubt Reaktion auf Outputschwankungen</li>
</ul>
</div>
<div class="section-block">
<h3>Kritik</h3>
<ul>
<li>Fokus auf CPI ignoriert Vermögenspreisblasen (2008-Krise)</li>
<li>Ziel 2% möglicherweise zu niedrig (ZLB-Problem bei niedrigem natürlichen Zins)</li>
</ul>
</div>
`,
  formeln: [
    { label:'IT-Reaktionsfunktion', eq: String.raw`$$i_t = i^* + a(\pi_t - \pi^*) + b(y_t - y_n)$$`, desc:'Zinssetzung unter Inflation Targeting', variables: { '\\pi^*': 'Inflationsziel (z.B. 2%)', 'a, b': 'Reaktionsparameter' } },
  ],
  aufgaben: [
    {
      text: `Erkläre, wie Inflation Targeting das Zeitinkonsistenzproblem löst.`,
      steps: [
        { text: 'Problem: Diskretionäre ZB hat ex-post Anreiz zu Überraschungsinflation → Inflationsbias.', eq: null },
        { text: 'IT-Lösung: Explizites, öffentliches Inflationsziel → Abweichung sofort sichtbar und kostspielig (Glaubwürdigkeitsverlust).', eq: null },
        { text: 'Transparenz (Berichte, Pressekonferenzen): Märkte überwachen die ZB → Reputationskosten für Abweichung sehr hoch.', eq: null },
        { text: 'Ergebnis: niedrigere Inflationserwartungen → geringere tatsächliche Inflation im Gleichgewicht.', eq: null },
      ],
      result: 'IT löst Zeitinkonsistenz durch Transparenz und Reputationskosten bei Zielverfehlung.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 22. KOSTEN DER INFLATION
// ─────────────────────────────────────────────────────────────
inflation_kosten: {
  motivation: 'Inflation ist nicht neutral — sie hat reale Kosten, die eine aktive Stabilisierungspolitik rechtfertigen.',
  theorie: String.raw`
<div class="section-block">
<h3>Kosten der Inflation</h3>
<div class="info-grid">
<div class="info-card"><div class="label">Schuhsohlenkosten</div><div class="value">Geldnachfrage ↓</div><p>Höhere Inflation → höhere Nominalzinsen → Anreiz, weniger Kasse zu halten → häufigere Bankbesuche ("Schuhsohlen abgelaufen").</p></div>
<div class="info-card"><div class="label">Menükosten</div><div class="value">Preisanpassungskosten</div><p>Unternehmen müssen Preise häufiger ändern. Gilt auch für Kataloge, Websites, Automaten.</p></div>
<div class="info-card"><div class="label">Inflationssteuer</div><div class="value">Verteilungseffekt</div><p>Inflation entwertet Nominalvermögen (Geld, Anleihen). Gläubiger verlieren, Schuldner gewinnen.</p></div>
<div class="info-card"><div class="label">Relative Preisverzerrung</div><div class="value">Fehlallokation</div><p>Unternehmen passen Preise asynchron an → relative Preise verzerrt → Ressourcenfehlallokation.</p></div>
</div>
</div>
<div class="section-block">
<h3>Kosten der Disinflation</h3>
<p>Die Senkung der Inflation verursacht ebenfalls Kosten. Aus der Phillipskurve:</p>
<div class="math-block">$$\Delta u = -\frac{1}{\alpha} \Delta\pi$$</div>
<p>Um Inflation um $\Delta\pi$ zu senken, muss die Arbeitslosigkeit um $\Delta u = -\Delta\pi/\alpha$ steigen.</p>
<p>Das <strong>Opferquotient</strong> (Sacrifice Ratio) misst die kumulierten Outputverluste je Prozentpunkt Disinflation:</p>
<div class="math-block">$$SR = \frac{\Delta (Y_n - Y)}{\Delta \pi}$$</div>
</div>
<div class="section-block">
<h3>Glaubwürdige vs. gradulle Disinflation</h3>
<p>Glaubwürdige Disinflation ("kalter Entzug"): Inflationserwartungen fallen sofort → geringere Outputkosten. Graduelles Vorgehen: Erwartungen fallen langsam → höhere kumulative Verluste, aber weniger kurzfristige Schärfe.</p>
</div>
`,
  formeln: [
    { label:'Phillipskurven-Tradeoff', eq: String.raw`$$\Delta u = -\frac{\Delta\pi}{\alpha}$$`, desc:'Arbeitslosigkeitsanstieg für Prozentpunkt Disinflation', variables: { '\\Delta u': 'ALQ-Anstieg', '\\Delta\\pi': 'Disinflation (negativ)', '\\alpha': 'Phillipskurven-Parameter' } },
    { label:'Sacrifice Ratio', eq: String.raw`$$SR = \frac{\sum \Delta(Y_n - Y)/Y_n}{|\Delta\pi|}$$`, desc:'Kumulativer Outputverlust je % Disinflation', variables: { 'Y_n - Y': 'Outputlücke', '|\\Delta\\pi|': 'Inflationsrückgang in Prozentpunkten' } },
  ],
  aufgaben: [
    {
      text: String.raw`EZB will Inflation von 6\% auf 2\% reduzieren. Phillipskurvenparameter $\alpha = 0{,}5$. Wie stark muss die Arbeitslosigkeit steigen, wenn die Disinflation in einem Jahr erzielt wird?`,
      steps: [
        { text: 'Disinflation:', eq: String.raw`$$\Delta\pi = 2\% - 6\% = -4 \text{ Prozentpunkte}$$` },
        { text: 'Phillipskurve:', eq: String.raw`$$\Delta u = -\frac{\Delta\pi}{\alpha} = -\frac{-4\%}{0{,}5} = +8 \text{ Prozentpunkte}$$` },
        { text: 'Arbeitslosigkeit müsste um 8 PP steigen — enorme Kosten für schnelle Disinflation.', eq: null },
      ],
      result: String.raw`Arbeitslosigkeit steigt um 8 PP — hohe Kosten der Disinflation.`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 23. UNKONVENTIONELLE GELDPOLITIK / QE
// ─────────────────────────────────────────────────────────────
unkonv_geldpolitik: {
  motivation: 'An der Nullzinsgrenze sind konventionelle Zinsinstrumente erschöpft. Quantitative Lockerung und Forward Guidance sind die wichtigsten unkonventionellen Alternativen.',
  theorie: String.raw`
<div class="section-block">
<h3>Nullzinsgrenze (Zero Lower Bound)</h3>
<p>Der Nominalzins kann (praktisch) nicht unter null fallen — negative Nominalzinsen sind durch Bargeld begrenzt (Ausnahme: EZB setzte negative Einlagenzinsen 2014–2022). An der ZLB verliert die konventionelle Zinspolitik ihre Wirksamkeit: LM-Kurve wird horizontal (Liquiditätsfalle).</p>
</div>
<div class="section-block">
<h3>Quantitative Lockerung (QE)</h3>
<p>Bei $i \approx 0$: ZB kauft langfristige Vermögenswerte (Staatsanleihen, MBS) → erhöht Reserven der Banken → soll:</p>
<ul>
<li>Langfristige Zinsen senken (Portfolio Balance Channel)</li>
<li>Inflationserwartungen erhöhen (signaling)</li>
<li>Wechselkurs abwerten (Kapitalabfluss)</li>
</ul>
<p>EZB-APP/PEPP: ab 2015 (APP), 2020 (PEPP, COVID-19). Insgesamt über 5 Billionen € Ankäufe.</p>
</div>
<div class="section-block">
<h3>Forward Guidance</h3>
<p>Kommunikation über zukünftigen Zinspfad: "We expect rates to stay at current levels until..."</p>
<p>Wirkt durch Senkung der erwarteten kurzfristigen Zinsen → langfristige Zinsen sinken (Erwartungstheorie der Zinsstruktur).</p>
</div>
<div class="section-block">
<h3>Negative Zinsen</h3>
<p>EZB setzte Einlagenzins auf -0,5% (2019). Soll Banken incentivieren, Reserven zu verleihen statt zu horten. Transmissionsmechanismus umstritten; Kosten: Bankprofitabilität leidet.</p>
</div>
`,
  formeln: [
    { label:'ZLB', eq: String.raw`$$i \geq 0 \quad (\text{oder} \quad i \geq -\delta_{\text{Bargeldkosten}})$$`, desc:'Nominalzins kann nicht beliebig negativ werden', variables: { 'i': 'Nominalzins', '\\delta': 'Kosten der Bargeldhaltung' } },
    { label:'QE-Bilanzexpansion', eq: String.raw`$$\Delta M_{\text{ZB}} = \Delta \text{Anleiheankäufe}$$`, desc:'QE erhöht Zentralbankgeldmenge', variables: { '\\Delta M_{\\text{ZB}}': 'Änderung Zentralbankgeldmenge', '\\Delta \\text{Anleiheankäufe}': 'Nettoankäufe durch ZB' } },
  ],
  aufgaben: [
    {
      text: `Warum verliert konventionelle Geldpolitik an der Nullzinsgrenze ihre Wirkung? Welche Kanäle wirken bei QE stattdessen?`,
      steps: [
        { text: 'Konventionell: Zinssenkung → mehr Investitionen + günstigere Kredite. An ZLB: $i = 0$, kein weiteres Potenzial.', eq: null },
        { text: 'Liquiditätsfalle: Geldnachfrage perfekt elastisch bei $i = 0$ → Geldmengenerhöhung verpufft.', eq: null },
        { text: 'QE-Kanäle: (1) Portfolio Balance: Anleger kaufen risikoreichere Assets → Risikoprämien sinken, Investitionen steigen.', eq: null },
        { text: '(2) Signaling: ZB zeigt Entschlossenheit, ZLB lange zu halten → Erwartungen sinken → Langfristzinsen runter.', eq: null },
        { text: '(3) Wechselkurs: Kapitalabfluss → Abwertung → NX steigt.', eq: null },
      ],
      result: 'QE wirkt über Portfolio Balance, Signaling und Wechselkurs — umgeht die Zinsbeschränkung.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 24. STILISIERTE FAKTEN DES WACHSTUMS
// ─────────────────────────────────────────────────────────────
wachstum_fakten: {
  motivation: 'Bevor wir Wachstumsmodelle aufstellen, müssen wir wissen, was erklärt werden soll — die Kaldor-Fakten sind der empirische Anker.',
  theorie: String.raw`
<div class="section-block">
<h3>Kaldors stilisierte Fakten (1961)</h3>
<div class="info-grid">
<div class="info-card"><div class="label">Fakt 1</div><div class="value">Y/L wächst stetig</div><p>Pro-Kopf-Output wächst langfristig mit konstanter Rate.</p></div>
<div class="info-card"><div class="label">Fakt 2</div><div class="value">K/L wächst stetig</div><p>Kapital pro Kopf steigt mit ähnlicher Rate wie Output.</p></div>
<div class="info-card"><div class="label">Fakt 3</div><div class="value">K/Y konstant</div><p>Kapitalkoeffizient ist langfristig stabil (ca. 2,5–3 in Industrieländern).</p></div>
<div class="info-card"><div class="label">Fakt 4</div><div class="value">Kapitalrendite r konstant</div><p>Realzins/Kapitalrendite zeigt keinen Trend.</p></div>
<div class="info-card"><div class="label">Fakt 5</div><div class="value">Faktoranteile stabil</div><p>Arbeit und Kapital erhalten konstante Anteile am BIP (ca. 2/3 Arbeit, 1/3 Kapital).</p></div>
<div class="info-card"><div class="label">Fakt 6</div><div class="value">Wachstumsraten divergieren</div><p>Erhebliche Unterschiede in Pro-Kopf-Wachstumsraten zwischen Ländern.</p></div>
</div>
</div>
<div class="section-block">
<h3>Konvergenz vs. Divergenz</h3>
<p>Solow-Modell impliziert <strong>bedingte Konvergenz</strong>: Länder mit ähnlichen Strukturparametern konvergieren zum selben Steady State. Arme Länder wachsen schneller als reiche — wenn sie ähnliche Sparquoten, Institutionen etc. haben.</p>
<p>Empirisch: Konvergenz innerhalb von Ländergruppen (OECD, US-Bundesstaaten), aber wenig zwischen reichen und armen Ländern weltweit.</p>
</div>
<div class="section-block">
<h3>Pro-Kopf-Wachstum: Quellen</h3>
<div class="math-block">$$g_Y = g_A + \alpha_K g_K + (1-\alpha_K) g_N$$</div>
<p>Wachstum des Pro-Kopf-BIP stammt aus: technologischem Fortschritt $g_A$, Kapitalakkumulation $g_K$ und Beschäftigungswachstum $g_N$.</p>
</div>
`,
  formeln: [
    { label:'Wachstumszerlegung', eq: String.raw`$$g_Y = g_A + \alpha_K g_K + \alpha_N g_N$$`, desc:'Beiträge von TF, Kapital und Arbeit zum Wachstum', variables: { 'g_Y': 'BIP-Wachstumsrate', 'g_A': 'TFP-Wachstum (Solow-Residuum)', '\\alpha_K': 'Kapitaleinkommensanteil', '\\alpha_N': 'Arbeitseinkommensanteil (= 1 - α_K)' } },
  ],
  aufgaben: [
    {
      text: String.raw`BIP-Wachstum: 3\%. Kapitalwachstum: 2\%, Beschäftigungswachstum: 1\%. Kapitalanteil $\alpha_K = 1/3$. Berechne das TFP-Wachstum (Solow-Residuum).`,
      steps: [
        { text: 'Wachstumszerlegung:', eq: String.raw`$$g_Y = g_A + \alpha_K g_K + \alpha_N g_N$$` },
        { text: 'Umformen:', eq: String.raw`$$g_A = g_Y - \alpha_K g_K - \alpha_N g_N = 3\% - \tfrac{1}{3} \cdot 2\% - \tfrac{2}{3} \cdot 1\%$$` },
        { text: 'Berechnen:', eq: String.raw`$$g_A = 3\% - 0{,}67\% - 0{,}67\% = 1{,}66\%$$` },
      ],
      result: String.raw`TFP-Wachstum $\approx 1{,}67\%$ — erklärt über die Hälfte des BIP-Wachstums.`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 25. AGGREGIERTE PRODUKTIONSFUNKTION
// ─────────────────────────────────────────────────────────────
aggregierte_pf: {
  motivation: 'Die aggregierte Produktionsfunktion ist das Fundament aller Wachstumsmodelle — sie beschreibt, wie Kapital und Arbeit zu Output kombiniert werden.',
  theorie: String.raw`
<div class="section-block">
<h3>Grundform</h3>
<p>Blanchard/Illing (und Solow) verwenden:</p>
<div class="math-block">$$Y = A \cdot F(K, N)$$</div>
<p>wobei $A$ der <strong>totale Faktorproduktivität</strong> (TFP, auch "technologisches Niveau"), $K$ Kapitalstock und $N$ Beschäftigung.</p>
</div>
<div class="section-block">
<h3>Annahmen</h3>
<div class="info-grid">
<div class="info-card"><div class="label">Konstante Skalenerträge</div><div class="value">$F(\lambda K, \lambda N) = \lambda Y$</div><p>Verdopplung aller Inputs → Verdopplung des Outputs (CRS).</p></div>
<div class="info-card"><div class="label">Abnehmende Grenzerträge</div><div class="value">$F_{KK} < 0$, $F_{NN} < 0$</div><p>Jede zusätzliche Kapitaleinheit bringt weniger Output (bei konstantem N).</p></div>
<div class="info-card"><div class="label">Inada-Bedingungen</div><div class="value">$F_K \to \infty$ als $K \to 0$</div><p>Grenzprodukt geht gegen Unendlich wenn Faktor gegen null und gegen null wenn Faktor gegen Unendlich.</p></div>
</div>
</div>
<div class="section-block">
<h3>Pro-Kopf-Form</h3>
<p>Wegen CRS kann man durch $N$ dividieren:</p>
<div class="math-block">$$\frac{Y}{N} = A \cdot F\!\left(\frac{K}{N}, 1\right) \equiv A \cdot f(k)$$</div>
<p>mit $k = K/N$ (Kapital pro Kopf) und $y = Y/N$ (Output pro Kopf). Die Produktionsfunktion wird zur <strong>Pro-Kopf-Produktionsfunktion</strong> $y = A f(k)$.</p>
</div>
<div class="section-block">
<h3>Cobb-Douglas-Spezifikation</h3>
<div class="math-block">$$Y = A K^\alpha N^{1-\alpha}, \quad 0 < \alpha < 1$$</div>
<p>Eigenschaften: CRS (Exponenten summieren sich zu 1), $\alpha$ = Kapitaleinkommensanteil, $(1-\alpha)$ = Arbeitseinkommensanteil.</p>
<p>Pro-Kopf: $y = A k^\alpha$.</p>
</div>
`,
  formeln: [
    { label:'Aggregierte PF', eq: String.raw`$$Y = A \cdot F(K, N)$$`, desc:'Output als Funktion von TFP, Kapital und Arbeit', variables: { 'Y': 'Output (BIP)', 'A': 'TFP / technologisches Niveau', 'K': 'Kapitalstock', 'N': 'Beschäftigung' } },
    { label:'Cobb-Douglas', eq: String.raw`$$Y = A K^\alpha N^{1-\alpha}$$`, desc:'Standardspezifikation mit Kapitalanteil α', variables: { '\\alpha': 'Kapitaleinkommensanteil (~1/3)', '1-\\alpha': 'Arbeitseinkommensanteil (~2/3)' } },
    { label:'Pro-Kopf-PF (CD)', eq: String.raw`$$y = A k^\alpha$$`, desc:'Output pro Kopf als Funktion von Kapital pro Kopf', variables: { 'y': 'Output pro Kopf (Y/N)', 'k': 'Kapital pro Kopf (K/N)', 'A': 'TFP' } },
  ],
  aufgaben: [
    {
      text: String.raw`Zeige, dass die Cobb-Douglas-Funktion $Y = AK^\alpha N^{1-\alpha}$ konstante Skalenerträge aufweist.`,
      steps: [
        { text: 'Beide Faktoren mit λ multiplizieren:', eq: String.raw`$$F(\lambda K, \lambda N) = A(\lambda K)^\alpha (\lambda N)^{1-\alpha}$$` },
        { text: 'Ausklammern:', eq: String.raw`$$= A \lambda^\alpha \lambda^{1-\alpha} K^\alpha N^{1-\alpha} = \lambda^{\alpha+1-\alpha} A K^\alpha N^{1-\alpha} = \lambda Y$$` },
        { text: 'Da $\alpha + (1-\alpha) = 1$: konstante Skalenerträge. $\square$', eq: null },
      ],
      result: String.raw`CRS bewiesen: $\alpha + (1-\alpha) = 1$ gewährleistet Homogenität Grad 1.`
    },
    {
      text: String.raw`$Y = K^{1/3} N^{2/3}$ (mit $A=1$). Berechne das Grenzprodukt des Kapitals $MP_K$ und zeige, dass es bei $K=8$, $N=8$ dem Kapitaleinkommensanteil entspricht.`,
      steps: [
        { text: 'Grenzprodukt:', eq: String.raw`$$MP_K = \frac{\partial Y}{\partial K} = \frac{1}{3} K^{-2/3} N^{2/3} = \frac{1}{3} \cdot \frac{Y}{K}$$` },
        { text: 'Einsetzen:', eq: String.raw`$$Y = 8^{1/3} \cdot 8^{2/3} = 8 \qquad MP_K = \frac{1}{3} \cdot \frac{8}{8} = \frac{1}{3}$$` },
        { text: String.raw`Kapitaleinkommensanteil: $MP_K \cdot K / Y = \frac{1}{3} \cdot 8 / 8 = \frac{1}{3} = \alpha$. $\checkmark$`, eq: null },
      ],
      result: String.raw`$MP_K = 1/3$ — Kapitaleinkommensanteil = $\alpha = 1/3$.`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 26. SOLOW-MODELL: GRUNDSTRUKTUR
// ─────────────────────────────────────────────────────────────
solow_basis: {
  motivation: 'Das Solow-Modell (1956) ist das Grundmodell der Wachstumstheorie — es erklärt, wie Kapitalakkumulation und Abschreibung den langfristigen Kapitalstock und damit das Pro-Kopf-Einkommen bestimmen.',
  theorie: String.raw`
<div class="section-block">
<h3>Grundgleichungen</h3>
<p>Das Solow-Modell ruht auf drei Gleichungen:</p>
<p><strong>1. Produktionsfunktion:</strong> $y = f(k) = k^\alpha$ (Pro-Kopf)</p>
<p><strong>2. Kapitalakkumulation:</strong></p>
<div class="math-block">$$\dot{k} = k_{t+1} - k_t = s \cdot f(k_t) - \delta k_t$$</div>
<p><strong>3. Spargleichung:</strong> $i = s \cdot y$ (Investitionen = Sparquote × Output)</p>
</div>
<div class="section-block">
<h3>Intuition</h3>
<p>Der Kapitalstock pro Kopf wächst um Bruttoinvestitionen $sf(k)$ und schrumpft um Abschreibungen $\delta k$. Wenn Investitionen > Abschreibungen: $k$ steigt. Wenn Investitionen < Abschreibungen: $k$ fällt.</p>
<div class="info-grid">
<div class="info-card"><div class="label">$sf(k) > \delta k$</div><div class="value">$\dot{k} > 0$</div><p>Kapital und Output pro Kopf steigen.</p></div>
<div class="info-card"><div class="label">$sf(k) = \delta k$</div><div class="value">$\dot{k} = 0$</div><p>Steady State: kein weiteres Wachstum pro Kopf.</p></div>
<div class="info-card"><div class="label">$sf(k) < \delta k$</div><div class="value">$\dot{k} < 0$</div><p>Kapital und Output pro Kopf sinken.</p></div>
</div>
</div>
<div class="section-block">
<h3>Wachstum im Solow-Modell</h3>
<p>Ohne technologischen Fortschritt wächst die Pro-Kopf-Output <em>nicht dauerhaft</em>. Im Steady State ist $\dot{k} = 0$ — das Modell erzeugt <em>Niveau</em>-Unterschiede, aber keine dauerhaften Wachstumsunterschiede. Dauerhaftes Wachstum erfordert TFP-Wachstum (→ Solow mit TF).</p>
</div>
`,
  formeln: [
    { label:'Kapitalakkumulation', eq: String.raw`$$\dot{k} = s\,f(k) - \delta k$$`, desc:'Kern-Gleichung des Solow-Modells', variables: { '\\dot{k}': 'Änderung von Kapital pro Kopf', 's': 'Sparquote', 'f(k)': 'Output pro Kopf', '\\delta': 'Abschreibungsrate' } },
  ],
  aufgaben: [
    {
      text: String.raw`$f(k) = k^{1/2}$, $s = 0{,}3$, $\delta = 0{,}1$. Berechne $\dot{k}$ bei $k = 4$ und $k = 9$.`,
      steps: [
        { text: String.raw`Bei $k = 4$: $f(4) = 2$. Investitionen: $sf(4) = 0{,}3 \cdot 2 = 0{,}6$. Abschreibung: $\delta k = 0{,}1 \cdot 4 = 0{,}4$.`, eq: null },
        { text: String.raw`$\dot{k}(4) = 0{,}6 - 0{,}4 = 0{,}2 > 0$ → Kapital steigt.`, eq: null },
        { text: String.raw`Bei $k = 9$: $f(9) = 3$. Investitionen: $0{,}3 \cdot 3 = 0{,}9$. Abschreibung: $0{,}1 \cdot 9 = 0{,}9$.`, eq: null },
        { text: String.raw`$\dot{k}(9) = 0{,}9 - 0{,}9 = 0$ → Steady State bei $k^* = 9$.`, eq: null },
      ],
      result: String.raw`$k = 4$: $\dot{k} > 0$ (wächst noch). $k = 9$: Steady State ($\dot{k} = 0$).`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 27. STEADY STATE
// ─────────────────────────────────────────────────────────────
steady_state: {
  motivation: 'Der Steady State ist das langfristige Gleichgewicht des Solow-Modells — er bestimmt das Pro-Kopf-Einkommen einer Volkswirtschaft.',
  theorie: String.raw`
<div class="section-block">
<h3>Definition des Steady State</h3>
<p>Im Steady State gilt $\dot{k} = 0$:</p>
<div class="math-block">$$s\,f(k^*) = \delta k^*$$</div>
<p>Grafisch: Schnittpunkt der Investitionskurve $sf(k)$ mit der Abschreibungsgerade $\delta k$.</p>
</div>
<div class="section-block">
<h3>Steady State bei Cobb-Douglas</h3>
<p>Mit $f(k) = k^\alpha$:</p>
<div class="math-block">$$s\,k^{*\alpha} = \delta k^* \;⇒\; k^{*\alpha-1} = \frac{\delta}{s} \;⇒\; k^* = \left(\frac{s}{\delta}\right)^{1/(1-\alpha)}$$</div>
<p>und damit:</p>
<div class="math-block">$$y^* = k^{*\alpha} = \left(\frac{s}{\delta}\right)^{\alpha/(1-\alpha)}$$</div>
</div>
<div class="section-block">
<h3>Komparative Statik</h3>
<div class="info-grid">
<div class="info-card"><div class="label">↑ Sparquote s</div><div class="value">↑ k*, ↑ y*</div><p>Mehr Sparen → höherer Steady-State-Kapitalstock und -Output. Kein dauerhaftes Wachstum, nur Niveaueffekt.</p></div>
<div class="info-card"><div class="label">↑ Abschreibung δ</div><div class="value">↓ k*, ↓ y*</div><p>Mehr Verschleiß → niedrigerer SS.</p></div>
<div class="info-card"><div class="label">↑ Bevölkerung n</div><div class="value">↓ k*</div><p>Kapital pro Kopf sinkt, da mehr Köpfe gespeist werden müssen. (Mit Bevölkerungswachstum: Abschreibungsrate wird zu δ+n.)</p></div>
</div>
</div>
<div class="section-block">
<h3>Konvergenz</h3>
<p>Das Solow-Modell weist <strong>globale Stabilität</strong> auf: Von jedem Ausgangspunkt $k_0 > 0$ konvergiert die Wirtschaft zum Steady State $k^*$. Länder unterhalb des SS wachsen schneller als im SS; oberhalb sinken sie.</p>
</div>
`,
  formeln: [
    { label:'Steady-State-Bedingung', eq: String.raw`$$s\,f(k^*) = \delta k^*$$`, desc:'Investitionen = Abschreibungen im Gleichgewicht', variables: { 'k^*': 'Steady-State-Kapital pro Kopf', 's': 'Sparquote', 'f(k^*)': 'Output pro Kopf im SS', '\\delta': 'Abschreibungsrate' } },
    { label:'SS bei Cobb-Douglas', eq: String.raw`$$k^* = \left(\frac{s}{\delta}\right)^{\!\frac{1}{1-\alpha}}, \quad y^* = \left(\frac{s}{\delta}\right)^{\!\frac{\alpha}{1-\alpha}}$$`, desc:'Explizite SS-Lösung für Cobb-Douglas-PF', variables: { 's/\\delta': 'Verhältnis Spar- zu Abschreibungsrate', '\\alpha': 'Kapitaleinkommensanteil' } },
  ],
  aufgaben: [
    {
      text: String.raw`$f(k) = k^{1/3}$, $s = 0{,}4$, $\delta = 0{,}1$. Berechne den Steady-State-Kapitalstock $k^*$ und Output $y^*$.`,
      steps: [
        { text: 'SS-Formel:', eq: String.raw`$$k^* = \left(\frac{s}{\delta}\right)^{1/(1-\alpha)} = \left(\frac{0{,}4}{0{,}1}\right)^{1/(1-1/3)} = 4^{3/2} = 8$$` },
        { text: 'Output im SS:', eq: String.raw`$$y^* = k^{*1/3} = 8^{1/3} = 2$$` },
        { text: 'Überprüfung:', eq: String.raw`$$sf(k^*) = 0{,}4 \cdot 2 = 0{,}8 = \delta k^* = 0{,}1 \cdot 8 \checkmark$$` },
      ],
      result: String.raw`$k^* = 8$, $y^* = 2$.`
    },
    {
      text: String.raw`Erkläre, warum eine dauerhafte Erhöhung der Sparquote $s$ im Solow-Modell zwar das Einkommensniveau erhöht, aber nicht die dauerhaftes Wachstumsrate.`,
      steps: [
        { text: String.raw`Sparquote steigt: $sf(k)$ Kurve nach oben → neuer SS bei $k^{**} > k^*$.`, eq: null },
        { text: 'Übergangsphase: Wachstum pro Kopf ($\dot{k} > 0$) bis neuer SS erreicht.', eq: null },
        { text: 'Im neuen SS: $\dot{k} = 0$ — kein dauerhaftes Wachstum, nur höheres Niveau.', eq: null },
        { text: 'Dauerhaftes Wachstum erfordert TFP-Wachstum, nicht nur mehr Sparen.', eq: null },
      ],
      result: 'Sparquotenerhöhung: Niveaueffekt (höheres y*), kein dauerhafter Wachstumseffekt (g_{y,ss} = 0).'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 28. GOLDENE SPARQUOTE
// ─────────────────────────────────────────────────────────────
goldene_sparquote: {
  motivation: 'Nicht jeder Steady State ist gleich gut — die Goldene Regel bestimmt die Sparquote, die den Konsum pro Kopf maximiert.',
  theorie: String.raw`
<div class="section-block">
<h3>Zielgröße: Konsum im Steady State</h3>
<p>Im SS gilt: Konsum pro Kopf = Output − Investitionen = $f(k^*) - \delta k^*$.</p>
<p>Da $k^*$ von $s$ abhängt, ist $c^* = c^*(s)$ eine Funktion der Sparquote. Wir suchen die Sparquote, die $c^*$ maximiert.</p>
</div>
<div class="section-block">
<h3>Goldene Regel</h3>
<p>Maximiere $c^* = f(k^*) - \delta k^*$ über $k^*$ (da $s$ und $k^*$ positiv korreliert):</p>
<div class="math-block">$$\frac{\partial c^*}{\partial k^*} = f'(k^*) - \delta = 0 \quad ⇒ \quad f'(k^*_{\text{gold}}) = \delta$$</div>
<p>Die <strong>Goldene Regel</strong>: Im optimalen SS entspricht das Grenzprodukt des Kapitals der Abschreibungsrate.</p>
<p>Ökonomisch: Investiere eine weitere Einheit Kapital genau dann, wenn der Ertrag $f'(k)$ genauso groß ist wie der Kostenersatz (Abschreibung $\delta$).</p>
</div>
<div class="section-block">
<h3>Goldene Sparquote (Cobb-Douglas)</h3>
<p>Bei $f(k) = k^\alpha$: $f'(k) = \alpha k^{\alpha-1}$. Goldene Regel:</p>
<div class="math-block">$$\alpha k_{\text{gold}}^{\alpha-1} = \delta \;⇒\; k_{\text{gold}}^* = \left(\frac{\alpha}{\delta}\right)^{1/(1-\alpha)}$$</div>
<p>Die goldene Sparquote:</p>
<div class="math-block">$$s_{\text{gold}} = \alpha$$</div>
<p>Bemerkenswertes Ergebnis: Bei Cobb-Douglas entspricht die Goldene Sparquote dem Kapitaleinkommensanteil $\alpha$!</p>
</div>
<div class="section-block">
<h3>Dynamische Effizienz</h3>
<p>Wenn $r = f'(k) > \delta$ (und $r > g$): Wirtschaft ist <strong>dynamisch effizient</strong> — k liegt unterhalb des goldenen Niveaus. Mehr Sparen ist möglich, aber nicht nötig.<br>
Wenn $f'(k) < \delta$: <strong>dynamisch ineffizient</strong> — zu viel Kapital, Konsum könnte durch weniger Sparen erhöht werden.</p>
</div>
`,
  formeln: [
    { label:'Goldene Regel', eq: String.raw`$$f'(k^*_{\text{gold}}) = \delta$$`, desc:'Grenzprodukt Kapital = Abschreibungsrate im Optimum', variables: { "f'(k^*)": 'Grenzprodukt des Kapitals im SS', '\\delta': 'Abschreibungsrate' } },
    { label:'Goldene Sparquote (CD)', eq: String.raw`$$s_{\text{gold}} = \alpha$$`, desc:'Optimale Sparquote = Kapitaleinkommensanteil', variables: { 's_{\\text{gold}}': 'Goldene Sparquote', '\\alpha': 'Kapitalanteil in Cobb-Douglas-PF' } },
  ],
  aufgaben: [
    {
      text: String.raw`$f(k) = k^{1/3}$, $\delta = 0{,}1$. Bestimme den goldenen Kapitalstock $k_{\text{gold}}^*$ und den goldenen Konsum $c_{\text{gold}}^*$.`,
      steps: [
        { text: 'Goldene Regel:', eq: String.raw`$$f'(k) = \frac{1}{3}k^{-2/3} = \delta = 0{,}1 \;\Rightarrow\; k^{-2/3} = 0{,}3$$` },
        { text: String.raw`$k_{\text{gold}}^* = 0{,}3^{-3/2} = (10/3)^{3/2} \approx 6{,}09$`, eq: null },
        { text: String.raw`Alternativ mit Formel: $k_{\text{gold}}^* = (\alpha/\delta)^{1/(1-\alpha)} = (1/3 / 0{,}1)^{3/2} = (10/3)^{3/2} \approx 6{,}09$`, eq: null },
        { text: String.raw`Goldener Konsum: $c^* = f(k^*) - \delta k^* = 6{,}09^{1/3} - 0{,}1 \cdot 6{,}09 \approx 1{,}826 - 0{,}609 = 1{,}22$`, eq: null },
      ],
      result: String.raw`$k_{\text{gold}}^* \approx 6{,}09$, $c_{\text{gold}}^* \approx 1{,}22$.`
    },
    {
      text: `Warum entspricht die goldene Sparquote bei Cobb-Douglas genau dem Kapitaleinkommensanteil α?`,
      steps: [
        { text: String.raw`Im SS: $s \cdot f(k^*) = \delta k^*$ → $s = \delta k^* / f(k^*)$.`, eq: null },
        { text: String.raw`Goldene Regel: $f'(k^*_g) = \delta$. Bei CD: $f'(k) = \alpha k^{\alpha-1} = \alpha y/k$.`, eq: null },
        { text: String.raw`Also $\delta = \alpha y^*/k^*_g$ → $\delta k^*_g/y^* = \alpha$ → $s_g = \alpha$.`, eq: null },
      ],
      result: String.raw`$s_{\text{gold}} = \alpha$: goldene Sparquote = Kapitalanteil am BIP.`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 29. TECHNOLOGISCHER FORTSCHRITT IM SOLOW-MODELL
// ─────────────────────────────────────────────────────────────
tech_fortschritt: {
  motivation: 'Ohne technologischen Fortschritt erklärt das Solow-Modell kein dauerhaftes Wachstum pro Kopf. TF ist der Motor des Wachstums.',
  theorie: String.raw`
<div class="section-block">
<h3>Arbeitsvermehrender technologischer Fortschritt</h3>
<p>Blanchard/Illing modellieren TF als <strong>arbeitsvermehrend</strong> (Harrod-neutral):</p>
<div class="math-block">$$Y = F(K, A \cdot N)$$</div>
<p>$A$ wächst mit Rate $g_A$: $A_{t+1} = A_t(1 + g_A)$. Effektive Arbeit: $AN$ (Effizienzeinheiten).</p>
</div>
<div class="section-block">
<h3>Pro-Effizienzeinheiten-Form</h3>
<p>Definiere $\tilde{k} = K/(AN)$ (Kapital pro Effizienzeinheit). Dann:</p>
<div class="math-block">$$\dot{\tilde{k}} = s\,f(\tilde{k}) - (n + g_A + \delta)\,\tilde{k}$$</div>
<p>Die effektive Abschreibungsrate ist nun $(n + g_A + \delta)$: Kapital pro Effizienzeinheit wird durch Bevölkerungswachstum $n$, TF-Wachstum $g_A$ und Abschreibung $\delta$ "verdünnt".</p>
</div>
<div class="section-block">
<h3>Steady State mit TF</h3>
<p>Im Steady State ($\dot{\tilde{k}} = 0$):</p>
<div class="math-block">$$s\,f(\tilde{k}^*) = (n + g_A + \delta)\,\tilde{k}^*$$</div>
<p>$\tilde{k}^*$ ist konstant, aber $K/N = \tilde{k}^* \cdot A$ wächst mit Rate $g_A$: dauerhaftes Wachstum des Pro-Kopf-Einkommens!</p>
</div>
<div class="section-block">
<h3>Wachstumsraten im SS</h3>
<div class="info-grid">
<div class="info-card"><div class="label">$g_Y$</div><div class="value">$n + g_A$</div><p>BIP wächst mit Bevölkerung + TF.</p></div>
<div class="info-card"><div class="label">$g_{Y/N}$</div><div class="value">$g_A$</div><p>Pro-Kopf-Einkommen wächst mit TF-Rate.</p></div>
<div class="info-card"><div class="label">$g_K$</div><div class="value">$n + g_A$</div><p>Kapitalstock wächst genauso schnell wie BIP (konstante K/Y-Quote — Kaldor-Fakt 3).</p></div>
</div>
</div>
`,
  formeln: [
    { label:'Kapitalakkumulation mit TF', eq: String.raw`$$\dot{\tilde{k}} = s\,f(\tilde{k}) - (n + g_A + \delta)\,\tilde{k}$$`, desc:'Solow mit arbeitsvermehrendem TF', variables: { '\\tilde{k}': 'Kapital pro Effizienzeinheit K/(AN)', 'n': 'Bevölkerungswachstumsrate', 'g_A': 'TFP-Wachstumsrate', '\\delta': 'Abschreibungsrate' } },
    { label:'SS mit TF', eq: String.raw`$$s\,f(\tilde{k}^*) = (n + g_A + \delta)\,\tilde{k}^*$$`, desc:'Gleichgewicht in Effizienzeinheiten', variables: { '\\tilde{k}^*': 'SS-Kapital pro Effizienzeinheit' } },
  ],
  aufgaben: [
    {
      text: String.raw`$f(\tilde{k}) = \tilde{k}^{1/2}$, $s = 0{,}3$, $\delta = 0{,}05$, $n = 0{,}02$, $g_A = 0{,}03$. Berechne $\tilde{k}^*$ und die Wachstumsrate des Pro-Kopf-Einkommens im SS.`,
      steps: [
        { text: 'SS-Bedingung:', eq: String.raw`$$s\tilde{k}^{1/2} = (n + g_A + \delta)\tilde{k} \;\Rightarrow\; \tilde{k}^{-1/2} = \frac{n+g_A+\delta}{s}$$` },
        { text: 'Einsetzen:', eq: String.raw`$$\tilde{k}^{-1/2} = \frac{0{,}02+0{,}03+0{,}05}{0{,}3} = \frac{0{,}10}{0{,}3} = \frac{1}{3}$$` },
        { text: String.raw`$\tilde{k}^* = 9$.`, eq: null },
        { text: String.raw`Pro-Kopf-Wachstum im SS: $g_{Y/N} = g_A = 3\%$.`, eq: null },
      ],
      result: String.raw`$\tilde{k}^* = 9$; dauerhaftes Pro-Kopf-Wachstum = $g_A = 3\%$.`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 30. SOLOW-RESIDUUM
// ─────────────────────────────────────────────────────────────
solow_residuum: {
  motivation: 'Das Solow-Residuum misst, was Wachstum von Kapital und Arbeit nicht erklären kann — es ist die empirische Schätzung des technologischen Fortschritts.',
  theorie: String.raw`
<div class="section-block">
<h3>Wachstumsbuchhaltung</h3>
<p>Aus $Y = A K^\alpha N^{1-\alpha}$ folgt durch logarithmische Differentiation:</p>
<div class="math-block">$$g_Y = g_A + \alpha\, g_K + (1-\alpha)\, g_N$$</div>
<p>Das <strong>Solow-Residuum</strong> (TFP-Wachstum) ergibt sich als Restgröße:</p>
<div class="math-block">$$g_A = g_Y - \alpha\, g_K - (1-\alpha)\, g_N$$</div>
</div>
<div class="section-block">
<h3>Empirische Befunde</h3>
<p>Solow (1957): Für die USA 1909–1949 erklärte TFP-Wachstum etwa 87% des Pro-Kopf-Wachstums — Kapitalakkumulation nur ~13%.</p>
<p>Spätere Studien (nach Berücksichtigung von Humankapital): TFP weniger dominant, aber immer noch wichtig (~50% des Wachstums).</p>
</div>
<div class="section-block">
<h3>Interpretation</h3>
<p>Das Solow-Residuum ist ein "Maß unserer Unwissenheit" (Abramovitz) — es fasst alle Faktoren zusammen, die nicht explizit gemessen werden: technologischer Fortschritt, bessere Institutionen, Humankapital, Skaleneffekte etc.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Residuum ≠ rein technologisch</strong> Das Solow-Residuum enthält auch Messfehler, zyklische Kapazitätsauslastung, Humankapital. Es ist daher eine Obergrenze für TFP-Wachstum.</div>
</div>
`,
  formeln: [
    { label:'Solow-Residuum', eq: String.raw`$$g_A = g_Y - \alpha_K g_K - \alpha_N g_N$$`, desc:'TFP-Wachstum als nicht erklärter Restbetrag', variables: { 'g_A': 'TFP-/Solow-Residuum', 'g_Y': 'BIP-Wachstum', '\\alpha_K': 'Kapitaleinkommensanteil', '\\alpha_N = 1-\\alpha_K': 'Arbeitseinkommensanteil' } },
  ],
  aufgaben: [
    {
      text: String.raw`$g_Y = 3{,}5\%$, $g_K = 4\%$, $g_N = 1\%$, $\alpha_K = 1/3$. Berechne das Solow-Residuum und interpretiere es.`,
      steps: [
        { text: 'Solow-Residuum:', eq: String.raw`$$g_A = g_Y - \alpha_K g_K - (1-\alpha_K) g_N = 3{,}5\% - \tfrac{1}{3} \cdot 4\% - \tfrac{2}{3} \cdot 1\%$$` },
        { text: 'Berechnen:', eq: String.raw`$$g_A = 3{,}5\% - 1{,}33\% - 0{,}67\% = 1{,}5\%$$` },
        { text: '1,5% des Wachstums ist durch Kapital und Arbeit nicht erklärbar — TFP-Wachstum.', eq: null },
      ],
      result: String.raw`Solow-Residuum = 1,5\%: technologischer Fortschritt / TFP erklärt 1,5 von 3,5 PP Wachstum.`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 31. INSTITUTIONEN & LANGFRISTIGES WACHSTUM
// ─────────────────────────────────────────────────────────────
institutionen: {
  motivation: 'Warum sind manche Länder reich und andere arm? Institutionen — Eigentumsrechte, Rechtsstaatlichkeit, Demokratie — erklären einen Großteil der Wachstumsunterschiede.',
  theorie: String.raw`
<div class="section-block">
<h3>Proximate vs. tiefe Ursachen des Wachstums</h3>
<p><strong>Proximate Ursachen:</strong> Kapitalakkumulation, Arbeitsstunden, TFP — diese messen wir im Solow-Modell.</p>
<p><strong>Tiefe (fundamentale) Ursachen:</strong> Warum unterscheiden sich Sparquoten und TFP zwischen Ländern? Antwort: Institutionen, Geographie, Kultur.</p>
</div>
<div class="section-block">
<h3>Institutionen und Wachstum</h3>
<p>Acemoglu/Johnson/Robinson (2001): Historisch bedingte Unterschiede in Institutionen (Eigentumsrechte, rule of law) erklären Einkommensunterschiede. Naturexperiment: Kolonien mit europäischen Siedlern (gleiche Institutionen) → reich; Kolonien ohne Siedler → arm.</p>
<div class="info-grid">
<div class="info-card"><div class="label">Gute Institutionen</div><div class="value">Eigentumsrechte ✓</div><p>Investitionsanreize, Vertragserfüllung, geringe Korruption → hohes TFP und Kapitalakkumulation.</p></div>
<div class="info-card"><div class="label">Schlechte Institutionen</div><div class="value">Enteignungsrisiko ✗</div><p>Investitionsabschreckung, Ressourcenverschwendung → niedriges TFP, Kapitalflucht.</p></div>
</div>
</div>
<div class="section-block">
<h3>Ressourcenfluch</h3>
<p>Paradoxerweise wachsen ressourcenreiche Länder oft langsamer (Nigeria vs. Botswana vs. Korea). Mechanismus: Rohstoffeinnahmen unterminieren Institutionen ("Dutch Disease" → Deindustrialisierung, Rentenökonomie, Korruption).</p>
</div>
`,
  formeln: [
    { label:'Institutionen im Solow-Modell', eq: String.raw`$$A = A(\underbrace{\text{Institutionen}}_{\text{Rechtss., EP-Rechte}},\, \text{Humankapital},\, \text{Technologie})$$`, desc:'TFP als Funktion institutioneller Qualität', variables: { 'A': 'TFP / Totale Faktorproduktivität' } },
  ],
  aufgaben: [
    {
      text: `Erkläre anhand des Solow-Modells, wie schlechte Institutionen (hohes Enteignungsrisiko) zu dauerhaft niedrigem Einkommen führen.`,
      steps: [
        { text: 'Enteignungsrisiko → geringere private Investitionsbereitschaft → niedrigere effektive Sparquote s.', eq: null },
        { text: String.raw`Niedrigeres $s$ → niedrigerer Steady State $k^* = (s/\delta)^{1/(1-\alpha)}$ → niedrigeres $y^*$.`, eq: null },
        { text: 'Außerdem: schlechte Institutionen → niedrigere TFP $A$ → geringere Produktivität bei gegebenem k.', eq: null },
        { text: 'Kombination: beide Kanäle (s↓ und A↓) senken $y^*$ dauerhaft.', eq: null },
      ],
      result: 'Schlechte Institutionen → niedrigere Spar-/Investitionsquote + niedrigere TFP → dauerhaft geringeres Pro-Kopf-Einkommen.'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 32. PHILLIPSKURVE & OKUN-GESETZ
// ─────────────────────────────────────────────────────────────
phillipskurve: {
  motivation: 'Die Phillipskurve ist das zentrale Stück für die Verbindung von Gütermarkt (Inflation) und Arbeitsmarkt (Beschäftigung) — sie erscheint in allen Makromodellen.',
  theorie: String.raw`
<div class="section-block">
<h3>Ursprüngliche Phillipskurve</h3>
<p>Phillips (1958) entdeckte eine negative Beziehung zwischen Lohnwachstum/Inflation und Arbeitslosigkeit. Wirtschaftspolitischer Schluss (falsch): dauerhafter Tradeoff zwischen Inflation und Beschäftigung.</p>
</div>
<div class="section-block">
<h3>Erwartungsaugmentierte Phillipskurve</h3>
<p>Friedman/Phelps (1968): Langfristig kein Tradeoff. Kurzfristige Phillipskurve:</p>
<div class="math-block">$$\pi_t = \pi_t^e + \frac{\alpha}{L}(Y_t - Y_n) = \pi_t^e - \alpha(u_t - u_n)$$</div>
<p>Langfristig: $\pi = \pi^e$ → $u = u_n$ (natürliche Arbeitslosenquote). Die langfristige Phillipskurve ist senkrecht.</p>
</div>
<div class="section-block">
<h3>Neue Keynesianische Phillipskurve (NKPC)</h3>
<p>Mikrofundiert aus optimierendem Preissetzen (Calvo 1983):</p>
<div class="math-block">$$\pi_t = \beta E_t[\pi_{t+1}] + \kappa (y_t - y_n)$$</div>
<p>Inflation hängt von erwarteter zukünftiger Inflation und der Outputlücke ab.</p>
</div>
<div class="section-block">
<h3>Okun-Gesetz</h3>
<p>Empirische Beziehung zwischen Output-Wachstum und Arbeitslosigkeit:</p>
<div class="math-block">$$\Delta u_t = -\beta (g_t - \bar{g})$$</div>
<p>mit $\beta \approx 0{,}4$ (USA). Wenn BIP-Wachstum 1 PP über Trendwachstum: Arbeitslosigkeit sinkt um ca. 0,4 PP.</p>
</div>
`,
  formeln: [
    { label:'Erwartungs-Ph.-Kurve', eq: String.raw`$$\pi_t = \pi_t^e - \alpha(u_t - u_n)$$`, desc:'Kurzfristiger Inflations-Arbeitslosigkeits-Tradeoff', variables: { '\\pi_t': 'Tatsächliche Inflation', '\\pi_t^e': 'Inflationserwartung', '\\alpha': 'Sensitivität', 'u_n': 'Natürliche Arbeitslosenquote' } },
    { label:'Okun-Gesetz', eq: String.raw`$$\Delta u_t = -\beta(g_t - \bar{g})$$`, desc:'BIP-Wachstum über Trend → ALQ sinkt', variables: { '\\Delta u_t': 'Änderung der ALQ', '\\beta': 'Okun-Koeffizient (~0,4)', 'g_t': 'BIP-Wachstum', '\\bar{g}': 'Trendwachstum' } },
  ],
  aufgaben: [
    {
      text: String.raw`$\pi^e = 2\%$, $\alpha = 0{,}5$, $u_n = 5\%$. Welche Inflation ergibt sich bei $u = 3\%$? Bei $u = 7\%$?`,
      steps: [
        { text: String.raw`Bei $u = 3\%$: $\pi = 2\% - 0{,}5 \cdot (3\% - 5\%) = 2\% + 1\% = 3\%$.`, eq: null },
        { text: String.raw`Bei $u = 7\%$: $\pi = 2\% - 0{,}5 \cdot (7\% - 5\%) = 2\% - 1\% = 1\%$.`, eq: null },
      ],
      result: String.raw`$u = 3\%$: $\pi = 3\%$ (über Ziel). $u = 7\%$: $\pi = 1\%$ (unter Ziel).`
    },
    {
      text: String.raw`BIP wächst 3\%, Trend ist 2\%, Okun-Koeffizient $\beta = 0{,}4$. Um wie viel ändert sich die Arbeitslosenquote?`,
      steps: [
        { text: 'Okun-Gesetz:', eq: String.raw`$$\Delta u = -\beta(g - \bar{g}) = -0{,}4 \cdot (3\% - 2\%) = -0{,}4 \cdot 1\% = -0{,}4 \text{ PP}$$` },
        { text: 'ALQ sinkt um 0,4 Prozentpunkte.', eq: null },
      ],
      result: String.raw`ALQ sinkt um 0,4 PP bei 1 PP Überschusswachstum.`
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 33. KAUFKRAFTPARITÄT (KKP)
// ─────────────────────────────────────────────────────────────
kaufkraftparitaet: {
  motivation: 'KKP ist die langfristige Gleichgewichtstheorie des Wechselkurses — und der Ausgangspunkt für den realen Wechselkurs.',
  theorie: String.raw`
<div class="section-block">
<h3>Gesetz des einheitlichen Preises</h3>
<p>Für ein handelbares Gut $j$ muss gelten:</p>
<div class="math-block">$$E \cdot P_j = P_j^*$$</div>
<p>Gilt dies für alle Güter, folgt in aggregierter Form die absolute KKP: $E \cdot P = P^*$.</p>
</div>
<div class="section-block">
<h3>Relative KKP und realer WK</h3>
<p>Relative KKP: $\hat{E} = \pi^* - \pi$.</p>
<p>Wenn relative KKP gilt, bleibt der reale Wechselkurs $\varepsilon = EP/P^*$ langfristig konstant.</p>
</div>
<div class="section-block">
<h3>Big Mac Index</h3>
<p>Informeller Test der KKP (The Economist): vergleicht Preis eines Big Mac in verschiedenen Ländern. Abweichungen zeigen, ob Währungen über- oder unterbewertet sind.</p>
<p>Empirisch: KKP gilt nicht kurzfristig (Wechselkurse sehr volatil), aber als langfristige Tendenz für handelbare Güter.</p>
</div>
<div class="section-block">
<h3>Balassa-Samuelson-Effekt</h3>
<p>Erklärung, warum KKP systematisch verletzt ist: In reichen Ländern ist Produktivität im handelbaren Sektor höher → höhere Löhne → höhere Preise im nicht-handelbaren Sektor → höheres Preisniveau insgesamt. Daher erscheinen reiche Länder nach absolutem KKP-Vergleich "teuer".</p>
</div>
`,
  formeln: [
    { label:'Absolute KKP', eq: String.raw`$$E \cdot P = P^* \;\Rightarrow\; E_{\text{KKP}} = \frac{P^*}{P}$$`, desc:'Preisgleichgewicht bei vollkommenen Märkten', variables: { 'P': 'Inl. Preisniveau', 'P^*': 'Ausl. Preisniveau', 'E': 'Nominaler WK in Mengennotierung' } },
    { label:'Relative KKP', eq: String.raw`$$\hat{E} \approx \pi^* - \pi$$`, desc:'WK-Änderung = ausländische minus inländische Inflation', variables: { '\\hat{E}': 'WK-Änderungsrate', '\\pi, \\pi^*': 'Inl./Ausl. Inflation' } },
  ],
  aufgaben: [
    {
      text: String.raw`Eurozone: $\pi = 3\%$. USA: $\pi^* = 1\%$. Welche WK-Änderung prognostiziert relative KKP?`,
      steps: [
        { text: String.raw`$\hat{E} = \pi^* - \pi = 1\% - 3\% = -2\%$.`, eq: null },
        { text: 'Der Euro wertet in Mengennotierung um etwa 2% ab: Wegen der höheren Inflation in der Eurozone fällt langfristig der Dollar-pro-Euro-Kurs.', eq: null },
      ],
      result: 'Euro wertet um ca. 2% ab (relative KKP).'
    },
  ]
},

// ─────────────────────────────────────────────────────────────
// 34. GELDMENGE, GELDNACHFRAGE & LM-KURVE
// ─────────────────────────────────────────────────────────────
geldmengen: {
  motivation: 'Die LM-Kurve verbindet Geldmarkt und Zinssatz — sie ist die zweite Kurve im IS-LM-Modell und Grundlage für die Analyse der Geldpolitik.',
  theorie: String.raw`
<div class="section-block">
<h3>Geldnachfrage</h3>
<p>Liquiditätspräferenztheorie (Keynes): Haushalte halten Geld für Transaktionszwecke (↑ mit Y) und Spekulationsmotive (↓ mit i):</p>
<div class="math-block">$$M^d = P \cdot Y \cdot L(i), \quad L'(i) < 0$$</div>
</div>
<div class="section-block">
<h3>Geldmarktgleichgewicht (LM)</h3>
<p>Reales Geldangebot = Reale Geldnachfrage:</p>
<div class="math-block">$$\frac{M}{P} = Y \cdot L(i)$$</div>
<p>Die LM-Kurve zeigt alle $(Y, i)$-Kombinationen, bei denen der Geldmarkt im Gleichgewicht ist.</p>
</div>
<div class="section-block">
<h3>Steigung der LM-Kurve</h3>
<p>LM-Kurve hat positive Steigung: Wenn $Y$ steigt, steigt Geldnachfrage → bei fixem Angebot: $i$ muss steigen.</p>
<p>Sonderfall — <strong>Liquiditätsfalle</strong>: Bei $i = 0$ ist Geldnachfrage perfekt elastisch → LM horizontal → Geldpolitik wirkungslos.</p>
</div>
<div class="section-block">
<h3>Verschiebungen der LM-Kurve</h3>
<div class="info-grid">
<div class="info-card"><div class="label">$M ↑$ (expansive GP)</div><div class="value">LM rechts / runter</div><p>Mehr Geld → bei gleichem Y ist $i$ niedriger nötig für GG.</p></div>
<div class="info-card"><div class="label">$P ↑$ (Inflation)</div><div class="value">LM links / oben</div><p>Reale Geldmenge $M/P$ sinkt → LM nach links.</p></div>
</div>
</div>
<div class="section-block">
<h3>Quantitätstheorie</h3>
<p>Wenn $L(i) = 1/V$ (konstante Umlaufgeschwindigkeit):</p>
<div class="math-block">$$M \cdot V = P \cdot Y$$</div>
<p>Kurzfristig irreführend (V nicht konstant), langfristig gilt: Geldmengenwachstum → Inflation (monetäre Inflation).</p>
</div>
`,
  formeln: [
    { label:'LM-Gleichung', eq: String.raw`$$\frac{M}{P} = Y \cdot L(i)$$`, desc:'Geldmarktgleichgewicht', variables: { 'M/P': 'Reales Geldangebot', 'Y': 'Reales BIP (Transaktionsvolumen)', 'L(i)': 'Liquiditätspräferenz (↓ mit i)' } },
    { label:'Quantitätsgleichung', eq: String.raw`$$M \cdot V = P \cdot Y$$`, desc:'Gleichung des Geldkreislaufs', variables: { 'M': 'Geldmenge', 'V': 'Umlaufgeschwindigkeit', 'P': 'Preisniveau', 'Y': 'Reales BIP' } },
  ],
  aufgaben: [
    {
      text: `Erkläre, warum die LM-Kurve positiv geneigt ist, und was die Implikation einer horizontalen LM-Kurve ist.`,
      steps: [
        { text: 'Positiv geneigt: $Y↑$ → Transaktionsgeldnachfrage $↑$ → bei fixem $M/P$: $i↑$ für GG. Also: höheres Y → höherer i im GG.', eq: null },
        { text: 'Horizontal (Liquiditätsfalle bei $i = 0$): Geldnachfrage unendlich elastisch — jede Geldmenge wird gehalten.', eq: null },
        { text: 'Implikation: Geldmengenerhöhung erhöht nicht $M/P$ effektiv (Geld wird gehortet) → kein Zinssenkungseffekt → kein Investitionseffekt → GP wirkungslos.', eq: null },
      ],
      result: 'LM positiv wegen Transaktionsmotiv. Horizontal = Liquiditätsfalle: GP wirkungslos (ZLB-Problem).'
    },
    {
      text: String.raw`$M = 1000$, $P = 2$, $Y = 400$. Berechne $L(i) = M/(PY)$ und interpretiere.`,
      steps: [
        { text: 'Reale Geldmenge:', eq: String.raw`$$M/P = 1000/2 = 500$$` },
        { text: 'Gleichgewicht:', eq: String.raw`$$L(i) = \frac{M/P}{Y} = \frac{500}{400} = 1{,}25$$` },
        { text: 'Interpretation: Für jede Einheit Output werden 1,25 Einheiten reales Geld gehalten.', eq: null },
      ],
      result: String.raw`$L(i) = 1{,}25$: Geldnachfrage pro BIP-Einheit bei dem Gleichgewichtszinssatz.`
    },
  ]
},

};
