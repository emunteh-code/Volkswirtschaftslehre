// ============================================================
// CHAPTERS & CONTENT DATA — Mikroökonomik II
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'spieltheorie', title: 'Spieltheorie & Nash-Gleichgewicht', cat: 'Interaktion', short: 'Spiel' },
  { id: 'oligopol', title: 'Oligopoltheorie', cat: 'Interaktion', short: 'Oligopol' },
  { id: 'gleichgewicht', title: 'Allgemeines Gleichgewicht', cat: 'Wohlfahrt', short: 'Gleichgew.' },
  { id: 'wohlfahrt', title: 'Wohlfahrtstheoreme', cat: 'Wohlfahrt', short: 'Wohlfahrt' },
  { id: 'externa', title: 'Externe Effekte', cat: 'Marktversagen', short: 'Extern' },
  { id: 'public_goods', title: 'Öffentliche Güter', cat: 'Marktversagen', short: 'Öff. Güter' },
  { id: 'information', title: 'Asymmetrische Information', cat: 'Marktversagen', short: 'Info' },
];

export const CONTENT = {
  spieltheorie: {
    motivation: 'In strategischen Situationen hängt das eigene Ergebnis nicht nur vom eigenen Handeln ab, sondern auch von den Entscheidungen anderer. Die Spieltheorie liefert das formale Instrumentarium hierfür.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Normalform-Spiele</h3>
      <p>Ein Spiel in Normalform besteht aus einer Menge von Spielern $i \in \{1, \dots, n\}$, Strategieräumen $S_i$ und Auszahlungsfunktionen $u_i(s_1, \dots, s_n)$.</p>
    </div>
    <div class="section-block">
      <h3>Nash-Gleichgewicht (NG)</h3>
      <p>Ein Strategieprofil $s^* = (s_1^*, \dots, s_n^*)$ ist ein <strong>Nash-Gleichgewicht</strong>, wenn für jeden Spieler $i$ gilt:</p>
      <div class="math-block">$$u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*) \quad \forall s_i \in S_i$$</div>
      <p>Niemand hat einen Anreiz, einseitig von seiner Strategie abzuweichen. Es ist eine gegenseitige beste Antwort.</p>
    </div>
    <div class="section-block">
      <h3>Dominante Strategien</h3>
      <p>Eine Strategie ist <strong>strikt dominant</strong>, wenn sie unabhängig vom Verhalten der anderen Spieler immer die höchste Auszahlung liefert. Existiert für alle Spieler eine dominante Strategie, ist das daraus resultierende Profil das eindeutige Nash-Gleichgewicht.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>NG vs. Pareto-Optimum:</strong> Ein Nash-Gleichgewicht muss nicht effizient sein (siehe Gefangenendilemma). Die Spieler optimieren individuell, nicht kollektiv.</div>
    </div>
    `,
    formeln: [
      { label: 'Nash-Bedingung', eq: String.raw`$$s_i^* \in \arg\max_{s_i} u_i(s_i, s_{-i}^*)$$`, desc: 'Beste Antwort auf Gleichgewichtsstrategien' }
    ],
    aufgaben: [
      {
        text: String.raw`Betrachten Sie ein Gefangenendilemma mit den Optionen Kooperieren (K) und Defektieren (D). Die Auszahlung bei (D,D) ist (1,1), bei (K,K) (3,3) und bei (D,K) (5,0). Bestimmen Sie das Nash-Gleichgewicht.`,
        steps: [
          { text: `Interpretation: Was ist die beste Antwort auf K?`, eq: String.raw`\text{D (Auszahlung 5 > 3).}` },
          { text: `Decision: Was ist die beste Antwort auf D?`, eq: String.raw`\text{D (Auszahlung 1 > 0).}` },
          { text: `Execution: Gibt es eine dominante Strategie?`, eq: String.raw`\text{Ja, D ist für beide Spieler dominant.}` }
        ],
        result: String.raw`Nash-Gleichgewicht ist (D,D).`
      }
    ]
  },
  oligopol: {
    motivation: 'Oligopole beschreiben Märkte mit wenigen Anbietern, die strategisch interagieren. Wir unterscheiden Mengenwettbewerb (Cournot) und Preiswettbewerb (Bertrand).',
    theorie: String.raw`
    <div class="section-block">
      <h3>Cournot-Wettbewerb</h3>
      <p>Unternehmen wählen gleichzeitig ihre Produktionsmengen $q_i$. Der Preis bildet sich über die Marktnachfrage $P(Q)$ mit $Q = \sum q_i$.</p>
      <div class="math-block">$$\max_{q_i} \pi_i = P(q_i + q_{-i}) \cdot q_i - C_i(q_i)$$</div>
    </div>
    <div class="section-block">
      <h3>Reaktionsfunktionen</h3>
      <p>Die Bedingung erster Ordnung ($MR_i = MC_i$) liefert die Reaktionsfunktion $q_i(q_{-i})$, welche die optimale Menge in Abhängigkeit der Konkurrenzmenge angibt.</p>
    </div>
    <div class="section-block">
      <h3>Bertrand-Paradoxon</h3>
      <p>Im Preiswettbewerb mit homogenen Gütern und konstanten Grenzkosten $c$ unterbieten sich die Firmen so lange, bis $P = c$ gilt. Das Ergebnis entspricht dem vollkommenen Wettbewerb, obwohl nur zwei Firmen am Markt sind.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Stackelberg-Vorteil:</strong> Im Stackelberg-Modell (sequenzieller Mengenwettbewerb) hat der Führer einen First-Mover-Advantage, da er die Reaktion des Folgers antizipiert.</div>
    </div>
    `,
    formeln: [
      { label: 'Gewinnfunktion (i)', eq: String.raw`$$\pi_i = (a - b(q_i + q_j))q_i - c q_i$$`, desc: 'Lineare Nachfrage' },
      { label: 'Cournot-Menge (symm.)', eq: String.raw`$$q^* = \frac{a-c}{3b}$$`, desc: 'Duopol-Gleichgewicht' }
    ],
    aufgaben: [
      {
        text: String.raw`Gegeben sei $P(Q) = 100 - Q$ und $c=10$. Berechnen Sie die Cournot-Gleichgewichtsmengen für zwei identische Firmen.`,
        steps: [
          { text: `Reaktionsfunktion aufstellen:`, eq: String.raw`$$100 - 2q_i - q_j - 10 = 0 \implies q_i(q_j) = \frac{90-q_j}{2}$$` },
          { text: `Symmetrie nutzen ($q_i = q_j = q^*$):`, eq: String.raw`$$q^* = \frac{90-q^*}{2} \implies 2q^* = 90 - q^* \implies 3q^* = 90$$` }
        ],
        result: String.raw`$q_1^* = q_2^* = 30$.`
      }
    ]
  },
  gleichgewicht: {
    motivation: 'Bisher haben wir Märkte isoliert betrachtet (Partialanalyse). Das allgemeine Gleichgewicht betrachtet alle Märkte gleichzeitig und analysiert Tausch- und Produktionseffizienz.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Die Edgeworth-Box</h3>
      <p>Zwei Konsumenten tauschen zwei Güter. Jeder Punkt in der Box stellt eine Aufteilung der Gesamtausstattung dar. Indifferenzkurven verlaufen für Konsument A vom Ursprung unten links, für B von oben rechts.</p>
    </div>
    <div class="section-block">
      <h3>Pareto-Effizienz</h3>
      <p>Eine Allokation ist Pareto-effizient, wenn man keinen Spieler besser stellen kann, ohne einen anderen schlechter zu stellen. Grafisch sind dies die Tangentialpunkte der Indifferenzkurven.</p>
      <div class="math-block">$$GRS^A = GRS^B$$</div>
    </div>
    <div class="section-block">
      <h3>Kontraktkurve</h3>
      <p>Die Menge aller Pareto-effizienten Punkte in der Edgeworth-Box wird als Kontraktkurve bezeichnet.</p>
    </div>
    `,
    formeln: [
      { label: 'Effizienzbedingung', eq: String.raw`$$\frac{MU_1^A}{MU_2^A} = \frac{MU_1^B}{MU_2^B}$$`, desc: 'Gleichheit der Grenzraten der Substitution' }
    ],
    aufgaben: [
      {
        text: String.raw`In einer Tauschökonomie gilt $u^A = x_1^A x_2^A$ und $u^B = x_1^B x_2^B$. Gesamtausstattung ist $(10, 10)$. Prüfen Sie, ob der Punkt $x^A=(2,2), x^B=(8,8)$ Pareto-effizient ist.`,
        steps: [
          { text: `Berechne GRS für A:`, eq: String.raw`$$GRS^A = x_2^A / x_1^A = 2/2 = 1$$` },
          { text: `Berechne GRS for B:`, eq: String.raw`$$GRS^B = x_2^B / x_1^B = 8/8 = 1$$` },
          { text: `Entscheidung: Gilt $GRS^A = GRS^B$?`, eq: String.raw`\text{Ja, } 1 = 1.` }
        ],
        result: String.raw`Die Allokation ist Pareto-effizient.`
      }
    ]
  },
  wohlfahrt: {
    motivation: 'Die Wohlfahrtstheoreme schlagen die Brücke zwischen Marktgleichgewicht und gesellschaftlicher Wünschenswertigkeit.',
    theorie: String.raw`
    <div class="section-block">
      <h3>1. Hauptsatz der Wohlfahrtsökonomik</h3>
      <p>Jedes Wettbewerbsgleichgewicht (bei Abwesenheit von Marktversagen) führt zu einer Pareto-effizienten Allokation. Der Markt ist somit ein Mechanismus zur Erzielung von Effizienz.</p>
    </div>
    <div class="section-block">
      <h3>2. Hauptsatz der Wohlfahrtsökonomik</h3>
      <p>Jede Pareto-effiziente Allokation kann als Wettbewerbsgleichgewicht realisiert werden, sofern eine geeignete Umverteilung der Anfangsausstattungen (via Pauschalsteuern) erfolgt.</p>
    </div>
    <div class="section-block">
      <h3>Wohlfahrtsfunktionen</h3>
      <p>Wie bewertet man verschiedene Pareto-effiziente Punkte? Utilitaristisch ($\sum u_i$) oder nach Rawls ($\min u_i$).</p>
    </div>
    `,
    formeln: [
      { label: 'Utilitaristisch', eq: String.raw`$$W = u_1 + u_2 + \dots + u_n$$`, desc: 'Summe der Nutzen' },
      { label: 'Rawlsianisch', eq: String.raw`$$W = \min(u_1, \dots, u_n)$$`, desc: 'Fokus auf den Schwächsten' }
    ],
    aufgaben: [
      {
        text: String.raw`Zwei Allokationen: I $(u_1=10, u_2=10)$ and II $(u_1=5, u_2=20)$. Welche wird nach Rawls bevorzugt?`,
        steps: [
          { text: `Minima bestimmen:`, eq: String.raw`\min(10,10)=10 \quad \text{vs} \quad \min(5,20)=5` },
          { text: `Vergleichen:`, eq: String.raw`10 > 5` }
        ],
        result: String.raw`Allokation I wird bevorzugt.`
      }
    ]
  },
  externa: {
    motivation: 'Marktversagen tritt auf, wenn Marktpreise nicht die wahren gesellschaftlichen Kosten oder Nutzen widerspiegeln. Externe Effekte sind das klassische Beispiel.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Negative Externe Effekte</h3>
      <p>Die Produktion verursacht Kosten bei unbeteiligten Dritten (z.B. Verschmutzung). Die Grenzkosten des Unternehmens ($MPC$) sind niedriger als die gesellschaftlichen Grenzkosten ($MSC$).</p>
      <div class="math-block">$$MSC = MPC + MEC$$</div>
      <p>Im Wettbewerb wird zu viel produziert ($Q_{mkt} > Q_{soc}$).</p>
    </div>
    <div class="section-block">
      <h3>Internalisierung: Pigou-Steuer</h3>
      <p>Eine Steuer $t$ in Höhe des Grenzhadens im Optimum ($MEC(Q^*)$) korrigiert das Marktverhalten exakt auf das gesellschaftliche Optimum.</p>
    </div>
    <div class="section-block">
      <h3>Coase-Theorem</h3>
      <p>Bei klar definierten Eigentumsrechten und null Transaktionskosten führen private Verhandlungen unabhängig von der Erstzuweisung der Rechte zu einer effizienten Lösung.</p>
    </div>
    `,
    formeln: [
      { label: 'Pigou-Steuer', eq: String.raw`$$t = MEC(Q^*)$$`, desc: 'Steuer = Grenzhaden im Optimum' }
    ],
    aufgaben: [
      {
        text: String.raw`Nachfrage $P=100-Q$, private Grenzkosten $MPC=20$, externer Schaden $MEC=Q$. Berechnen Sie die gesellschaftlich optimale Menge.`,
        steps: [
          { text: `MSC bestimmen:`, eq: String.raw`$$MSC = 20 + Q$$` },
          { text: `Gleichgewicht ($P=MSC$):`, eq: String.raw`$$100 - Q = 20 + Q \implies 2Q = 80$$` }
        ],
        result: String.raw`$Q_{soc}^* = 40$.`
      }
    ]
  },
  public_goods: {
    motivation: 'Öffentliche Güter sind durch Nicht-Rivalität und Nicht-Ausschließbarkeit gekennzeichnet. Dies führt zum Trittbrettfahrer-Problem.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Samuelson-Bedingung</h3>
      <p>Die effiziente Menge eines öffentlichen Gutes ist erreicht, wenn die Summe der individuellen Zahlungsbereitschaften (Grenzraten der Substitution) den Grenzkosten der Bereitstellung entspricht.</p>
      <div class="math-block">$$\sum_{i=1}^n GRS_i = MRT$$</div>
      <p>Wichtig: Wir addieren die Zahlungsbereitschaften <strong>vertikal</strong>, nicht die Mengen horizontal.</p>
    </div>
    <div class="section-block">
      <h3>Marktversagen</h3>
      <p>Auf dem Markt wird das öffentliche Gut oft gar nicht oder in zu geringer Menge bereitgestellt, da jeder hofft, dass die anderen die Kosten tragen (Free-Riding).</p>
    </div>
    `,
    formeln: [
      { label: 'Samuelson', eq: String.raw`$$\sum MU_i / MU_z = MC_{goods}$$`, desc: 'Effizienzbedingung' }
    ],
    aufgaben: [
      {
        text: String.raw`Zwei Personen A und B haben Zahlungsbereitschaften $P_A = 10 - Q$ and $P_B = 20 - Q$. Grenzkosten sind konstant $MC = 10$. Bestimme die optimale Menge $Q^*$.`,
        steps: [
          { text: `Aggregierte Zahlungsbereitschaft (vertikal):`, eq: String.raw`$$P_{agg} = (10-Q) + (20-Q) = 30 - 2Q$$` },
          { text: `Bedingung ($P_{agg} = MC$):`, eq: String.raw`$$30 - 2Q = 10 \implies 2Q = 20$$` }
        ],
        result: String.raw`$Q^* = 10$.`
      }
    ]
  },
  information: {
    motivation: 'Unterschiedliche Informationsstände zwischen Käufer und Verkäufer (asymmetrische Information) können Märkte destabilisieren oder zum Zusammenbruch führen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Adverse Selection (Negativauslese)</h3>
      <p>Tritt <strong>vor</strong> Vertragsschluss auf. Beispiel "Lemons-Market": Käufer kennen die Qualität gebrauchter Autos nicht und zahlen nur den Durchschnittspreis. Verkäufer guter Autos ziehen sich zurück, die Qualität sinkt weiter.</p>
    </div>
    <div class="section-block">
      <h3>Moral Hazard (Verhaltensrisiko)</h3>
      <p>Tritt <strong>nach</strong> Vertragsschluss auf. Eine Versicherung führt dazu, dass der Versicherte weniger vorsichtig ist (Hidden Action).</p>
    </div>
    <div class="section-block">
      <h3>Signaling & Screening</h3>
      <p>Lösungen: Die informierte Seite sendet Signale (z.B. Diplome), die uninformierte Seite bietet Menüs an, um Typen zu trennen (Self-Selection).</p>
    </div>
    `,
    formeln: [
      { label: 'Erwarteter Wert', eq: String.raw`$$E[v] = q \cdot v_H + (1-q) \cdot v_L$$`, desc: 'Preis bei Unwissenheit' }
    ],
    aufgaben: [
      {
        text: String.raw`In einem Markt gibt es gute Autos ($v=5000$) and schlechte ($v=2000$) zu gleichen Teilen. Verkäufer guter Autos verkaufen nur ab $4500$. Was passiert?`,
        steps: [
          { text: `Berechne Erwartungswert des Käufers:`, eq: String.raw`$$0{,}5 \cdot 5000 + 0{,}5 \cdot 2000 = 3500$$` },
          { text: `Entscheidung: Verkaufen Besitzer guter Autos bei $P=3500$?`, eq: String.raw`\text{Nein, da } 3500 < 4500.` },
          { text: `Folge: Welche Autos bleiben am Markt?`, eq: String.raw`\text{Nur die schlechten (Adverse Selection).}` }
        ],
        result: String.raw`Marktzusammenbruch für Qualität.`
      }
    ]
  }
};
