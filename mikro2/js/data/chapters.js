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
      <p>Die Normalform fasst alle Informationen eines simultanen Spiels in einer Auszahlungsmatrix zusammen — jede Zelle enthält die Auszahlungen beider Spieler für das jeweilige Strategieprofil.</p>
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
      <p>Iteration der Elimination dominierter Strategien (IESDS) kann das Spiel schrittweise vereinfachen und Nash-Gleichgewichte isolieren.</p>
    </div>
    <div class="section-block">
      <h3>Gemischte Strategien</h3>
      <p>Falls kein Nash-Gleichgewicht in reinen Strategien existiert, gibt es stets ein Gleichgewicht in gemischten Strategien. Spieler randomisieren so, dass der Gegner indifferent zwischen seinen reinen Strategien ist.</p>
      <div class="math-block">$$E[u_i(\sigma_i^*, \sigma_{-i}^*)] \geq E[u_i(\sigma_i, \sigma_{-i}^*)] \quad \forall \sigma_i$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>NG vs. Pareto-Optimum:</strong> Ein Nash-Gleichgewicht muss nicht effizient sein (siehe Gefangenendilemma). Die Spieler optimieren individuell, nicht kollektiv.</div>
      <div class="warn-box"><strong>Mehrfache NG:</strong> Ein Spiel kann mehrere Nash-Gleichgewichte haben (z.B. Koordinationsspiele). Das Nash-Konzept sagt nichts darüber, auf welches GG die Spieler sich koordinieren — Gleichgewichtsselektion erfordert verfeinerte Konzepte (z.B. Risicodominanz, Payoff-Dominanz).</div>
    </div>
    `,
    formeln: [
      { label: 'Nash-Bedingung', eq: String.raw`$$s_i^* \in \arg\max_{s_i} u_i(s_i, s_{-i}^*)$$`, desc: 'Beste Antwort auf Gleichgewichtsstrategien', variables: { s_i: 'Strategie von Spieler i', s_minus_i: 'Strategien aller anderen Spieler' } },
      { label: 'Folk-Theorem', eq: String.raw`$$\delta \geq \frac{\pi_D - \pi_C}{\pi_D - \pi_P}$$`, desc: 'Kooperationsbedingung in wiederholten Spielen', variables: { delta: 'Diskontfaktor', pi_D: 'Defektionsgewinn', pi_C: 'Kooperationsgewinn', pi_P: 'Bestrafe-Gewinn' } }
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
      },
      {
        text: String.raw`Betrachten Sie ein Koordinationsspiel: A und B wählen gleichzeitig Links (L) oder Rechts (R). Auszahlungen: $(L,L)=(2,2)$, $(R,R)=(3,3)$, $(L,R)=(0,0)$, $(R,L)=(0,0)$. Bestimmen Sie alle Nash-Gleichgewichte in reinen Strategien.`,
        steps: [
          { text: `Beste Antwort von A: Wenn B L spielt?`, eq: String.raw`u_A(L,L)=2 > u_A(R,L)=0 \implies \text{A wählt L.}` },
          { text: `Beste Antwort von A: Wenn B R spielt?`, eq: String.raw`u_A(R,R)=3 > u_A(L,R)=0 \implies \text{A wählt R.}` },
          { text: `Symmetrie: B spiegelt dieselbe Logik. Wo treffen sich beide beste Antworten?`, eq: String.raw`(L,L) \text{ und } (R,R) \text{ sind beide gegenseitige beste Antworten.}` }
        ],
        result: String.raw`Zwei Nash-Gleichgewichte in reinen Strategien: $(L,L)$ und $(R,R)$. Im Unterschied zum Gefangenendilemma gibt es hier kein Problem kollektiver Rationalität — das Problem ist Koordination auf das gemeinsam vorzuziehende Gleichgewicht.`
      },
      {
        text: String.raw`Spieler A wählt oben (O) oder unten (U), Spieler B wählt links (L) oder rechts (R). Auszahlungsmatrix: $(O,L)=(3,3)$, $(O,R)=(0,5)$, $(U,L)=(5,0)$, $(U,R)=(1,1)$. Finden Sie alle Nash-Gleichgewichte in reinen Strategien.`,
        steps: [
          { text: `Beste Antwort von A auf L: $\max(3, 5)$.`, eq: String.raw`u_A(U,L) = 5 > u_A(O,L) = 3 \implies \text{A wählt U.}` },
          { text: `Beste Antwort von A auf R: $\max(0, 1)$.`, eq: String.raw`u_A(U,R) = 1 > u_A(O,R) = 0 \implies \text{A wählt U.}` },
          { text: `Beste Antwort von B auf O: $\max(3, 5)$.`, eq: String.raw`u_B(O,R) = 5 > u_B(O,L) = 3 \implies \text{B wählt R.}` },
          { text: `Beste Antwort von B auf U: $\max(0, 1)$.`, eq: String.raw`u_B(U,R) = 1 > u_B(U,L) = 0 \implies \text{B wählt R.}` },
          { text: `Nash-GG prüfen: Wo stimmen beide beste Antworten überein?`, eq: String.raw`(\text{U}, \text{R}) = (1,1) \text{ ist das einzige Nash-GG in reinen Strategien.}` }
        ],
        result: String.raw`Einziges Nash-Gleichgewicht: (U, R) mit Auszahlungen (1,1). Obwohl (O,L)=(3,3) Pareto-superior wäre, kein Spieler hat einen einseitigen Anreiz von (U,R) abzuweichen — das ist das klassische Gefangenendilemma-Muster in Matrixform.`
      },
      {
        text: String.raw`Im infinit wiederholten Gefangenendilemma mit Diskontfaktor $\delta \in (0,1)$: Kooperation liefert $\pi_C = 3$ pro Periode, Defektion (einmalig) $\pi_D = 5$, danach ewige Bestrafung $\pi_P = 1$. Unter welcher Bedingung kann Kooperation im Gleichgewicht (Grim-Trigger) aufrechterhalten werden?`,
        steps: [
          { text: `Wert der Kooperation (ab heute, ewig): Geometrische Reihe.`, eq: String.raw`V_C = \frac{\pi_C}{1-\delta} = \frac{3}{1-\delta}` },
          { text: `Wert des Abweichens: Einmaliger Gewinn $\pi_D$, dann ewige Bestrafung.`, eq: String.raw`V_D = \pi_D + \frac{\delta \pi_P}{1-\delta} = 5 + \frac{\delta}{1-\delta}` },
          { text: `Kooperation im GG, wenn $V_C \geq V_D$:`, eq: String.raw`\frac{3}{1-\delta} \geq 5 + \frac{\delta}{1-\delta}` },
          { text: `Umformen — Folk-Theorem-Bedingung:`, eq: String.raw`3 \geq 5(1-\delta) + \delta \implies 3 \geq 5 - 4\delta \implies \delta \geq \frac{2}{4} = \frac{1}{2}` }
        ],
        result: String.raw`Kooperation ist im Grim-Trigger-Gleichgewicht möglich, wenn $\delta \geq \frac{1}{2}$. Der Diskontfaktor muss ausreichend hoch sein — Spieler müssen die Zukunft genug wertschätzen, damit die langfristigen Kooperationsgewinne den kurzfristigen Anreiz zur Defektion überwiegen. Dies ist der Kerninhalt des Folk-Theorems.`
      },
      {
        text: String.raw`Nullsummenspiel (Matching Pennies): A erhält bei gleicher Wahl +1, bei unterschiedlicher Wahl -1. Zeigen Sie, dass kein reines Nash-Gleichgewicht existiert, und bestimmen Sie das gemischte Gleichgewicht.`,
        steps: [
          { text: `Reine Profile prüfen: In jedem Profil kann genau ein Spieler profitabel abweichen.`, eq: String.raw`\text{Kein Profil ist gegenseitige beste Antwort.}` },
          { text: `Gemischte Strategien: Sei $p$ die Wahrscheinlichkeit, dass A Kopf spielt. B muss indifferent zwischen Kopf und Zahl sein.`, eq: String.raw`E[u_B(K)] = -p + (1-p) = 1-2p,\quad E[u_B(Z)] = p-(1-p)=2p-1` },
          { text: `Indifferenzbedingung für B:`, eq: String.raw`1-2p = 2p-1 \implies p = \frac{1}{2}` },
          { text: `Symmetrisch für A folgt $q=\frac{1}{2}$ für B.`, eq: String.raw`(p^*,q^*)=\left(\frac12,\frac12\right)` }
        ],
        result: String.raw`Es gibt kein reines NG, aber ein gemischtes NG mit zufälliger Wahl beider Spieler: $p=q=\frac12$. Genau diese Randomisierung verhindert ausnutzbare Muster.`
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
      <p>Im Cournot-Nash-Gleichgewicht produziert jede Firma mehr als ein Monopolist, aber weniger als im vollkommenen Wettbewerb.</p>
    </div>
    <div class="section-block">
      <h3>Reaktionsfunktionen</h3>
      <p>Die Bedingung erster Ordnung ($MR_i = MC_i$) liefert die Reaktionsfunktion $q_i(q_{-i})$, welche die optimale Menge in Abhängigkeit der Konkurrenzmenge angibt.</p>
      <p>Grafisch: Das Cournot-GG liegt im Schnittpunkt beider Reaktionsfunktionen. Jede Reaktionsfunktion hat eine negative Steigung — mehr des Konkurrenten impliziert weniger eigene optimale Menge.</p>
    </div>
    <div class="section-block">
      <h3>Bertrand-Paradoxon</h3>
      <p>Im Preiswettbewerb mit homogenen Gütern und konstanten Grenzkosten $c$ unterbieten sich die Firmen so lange, bis $P = c$ gilt. Das Ergebnis entspricht dem vollkommenen Wettbewerb, obwohl nur zwei Firmen am Markt sind.</p>
      <p>Auflösungen des Paradoxons: Kapazitätsbeschränkungen, Produktdifferenzierung oder wiederholte Interaktion können zu Preisen oberhalb der GK führen.</p>
    </div>
    <div class="section-block">
      <h3>Stackelberg-Führerschaft</h3>
      <p>Sequenzieller Mengenwettbewerb: Der Führer antizipiert die Reaktionsfunktion des Folgers und wählt seine Menge unter Berücksichtigung dieser. Das Ergebnis: Führer produziert mehr, Folger weniger als im Cournot-GG.</p>
      <div class="math-block">$$q_1^{Stack} = \frac{a-c}{2b} > q^{Cournot} = \frac{a-c}{3b}$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Stackelberg-Vorteil:</strong> Im Stackelberg-Modell (sequenzieller Mengenwettbewerb) hat der Führer einen First-Mover-Advantage, da er die Reaktion des Folgers antizipiert.</div>
      <div class="warn-box"><strong>Cournot vs. Bertrand:</strong> Bei identischen Gütern und ohne Kapazitätsbeschränkungen führt Bertrand-Wettbewerb zu Wettbewerbspreisen — Cournot hingegen zu einem Ergebnis zwischen Monopol und Wettbewerb. Die Modellwahl hängt davon ab, ob Firmen über Preise oder Mengen entscheiden.</div>
    </div>
    `,
    formeln: [
      { label: 'Gewinnfunktion (i)', eq: String.raw`$$\pi_i = (a - b(q_i + q_j))q_i - c q_i$$`, desc: 'Lineare Nachfrage', variables: { a: 'Nachfrageabschnitt', b: 'Steigung der Nachfrage', c: 'Grenzkosten' } },
      { label: 'Cournot-Menge (symm.)', eq: String.raw`$$q^* = \frac{a-c}{3b}$$`, desc: 'Duopol-Gleichgewicht', variables: { a: 'Nachfrageabschnitt', c: 'Grenzkosten', b: 'Steigungsparameter' } }
    ],
    aufgaben: [
      {
        text: String.raw`Gegeben sei $P(Q) = 100 - Q$ und $c=10$. Berechnen Sie die Cournot-Gleichgewichtsmengen für zwei identische Firmen.`,
        steps: [
          { text: `Reaktionsfunktion aufstellen:`, eq: String.raw`100 - 2q_i - q_j - 10 = 0 \implies q_i(q_j) = \frac{90-q_j}{2}` },
          { text: `Symmetrie nutzen ($q_i = q_j = q^*$):`, eq: String.raw`q^* = \frac{90-q^*}{2} \implies 2q^* = 90 - q^* \implies 3q^* = 90` }
        ],
        result: String.raw`$q_1^* = q_2^* = 30$.`
      },
      {
        text: String.raw`Verwenden Sie dasselbe Marktumfeld ($P(Q)=100-Q$, $c=10$), aber Firma 1 ist jetzt Stackelberg-Führer. Berechnen Sie $q_1^*$, $q_2^*$ und vergleichen Sie Gesamtmenge und Preis mit dem Cournot-Ergebnis.`,
        steps: [
          { text: `Reaktionsfunktion des Folgers (aus Cournot bekannt):`, eq: String.raw`q_2(q_1) = \frac{90 - q_1}{2}` },
          { text: `Führer antizipiert Folger — setzt $q_2$ ein und maximiert:`, eq: String.raw`\pi_1 = \left(90 - q_1 - \frac{90-q_1}{2}\right)q_1 = \frac{90-q_1}{2}\cdot q_1 \implies q_1^* = 45` },
          { text: `Folger-Reaktion und Vergleich:`, eq: String.raw`q_2^* = \frac{90-45}{2} = 22{,}5;\quad Q_{Stack}=67{,}5 > Q_{Cournot}=60` }
        ],
        result: String.raw`Stackelberg: $q_1^*=45$, $q_2^*=22{,}5$, $P=32{,}5$. Cournot: je $30$, $P=40$. Der Führer produziert mehr und erzielt höheren Gewinn (First-Mover-Advantage).`
      },
      {
        text: String.raw`Cournot-Duopol mit $P = 120 - Q_1 - Q_2$ und $c_1 = c_2 = 0$. Leiten Sie die Reaktionsfunktionen ab, berechnen Sie die Gleichgewichtsmengen und vergleichen Sie mit Monopol und vollkommenem Wettbewerb.`,
        steps: [
          { text: `Gewinnmaximierung Firma 1: $\partial \pi_1 / \partial Q_1 = 0$.`, eq: String.raw`120 - 2Q_1 - Q_2 = 0 \implies Q_1^*(Q_2) = \frac{120 - Q_2}{2} = 60 - \frac{Q_2}{2}` },
          { text: `Symmetrie: $Q_2^*(Q_1) = 60 - Q_1/2$. Gleichungssystem lösen.`, eq: String.raw`Q_1^* = 60 - \frac{1}{2}\left(60 - \frac{Q_1^*}{2}\right) = 30 + \frac{Q_1^*}{4} \implies \frac{3Q_1^*}{4} = 30 \implies Q_1^* = 40` },
          { text: `Gesamtmenge und Preis im Cournot-GG:`, eq: String.raw`Q^C = 40 + 40 = 80, \quad P^C = 120 - 80 = 40` },
          { text: `Vergleich: Monopol ($MR = MC$): $120 - 2Q = 0 \implies Q^M = 60$, $P^M = 60$. Wettbewerb: $P = MC = 0 \implies Q^W = 120$.`, eq: String.raw`Q^M = 60 < Q^C = 80 < Q^W = 120 \quad P^M = 60 > P^C = 40 > P^W = 0` }
        ],
        result: String.raw`Cournot: $Q_1^* = Q_2^* = 40$, $Q^C = 80$, $P^C = 40$. Ergebnis liegt zwischen Monopol ($Q=60$, $P=60$) und Wettbewerb ($Q=120$, $P=0$): mehr Menge, niedrigerer Preis als Monopol, aber noch Marktmacht vorhanden.`
      },
      {
        text: String.raw`Verwenden Sie das gleiche Marktumfeld ($P = 120 - Q$, $c = 0$). Berechnen Sie Gewinne, Konsumentenrente und Wohlfahrtsverlust (DWL) unter Cournot und Monopol. Vergleichen Sie die Ergebnisse.`,
        steps: [
          { text: `Cournot-Gewinne: $\pi_i^C = P^C \cdot Q_i^C$.`, eq: String.raw`\pi_i^C = 40 \cdot 40 = 1600 \quad \pi_{ges}^C = 3200` },
          { text: `Cournot-KR: Dreieck über $P^C = 40$ bis Höchstpreis 120.`, eq: String.raw`KR^C = \frac{1}{2}(120-40) \cdot 80 = 3200` },
          { text: `Monopol-Gewinne und KR:`, eq: String.raw`\pi^M = 60 \cdot 60 = 3600 \quad KR^M = \frac{1}{2}(120-60) \cdot 60 = 1800` },
          { text: `DWL Cournot vs. Wettbewerb: Dreieck zwischen $Q^C=80$ und $Q^W=120$.`, eq: String.raw`DWL^C = \frac{1}{2}(P^C - c)(Q^W - Q^C) = \frac{1}{2} \cdot 40 \cdot 40 = 800` }
        ],
        result: String.raw`Cournot-GW: $KR = 3200$, $\pi_{ges} = 3200$, $DWL = 800$. Monopol: $KR = 1800$, $\pi = 3600$, $DWL = 1800$. Cournot ist wohlfahrtseffizienter als Monopol (kleinerer DWL), aber weniger effizient als vollkommener Wettbewerb (kein DWL).`
      },
      {
        text: String.raw`Graph/Formel-Link: Gegeben sind Reaktionsfunktionen $q_1 = 40 - 0{,}5q_2$ und $q_2 = 40 - 0{,}5q_1$. Bestimmen Sie den Schnittpunkt und erklären Sie, warum dieser Punkt das Cournot-Gleichgewicht ist.`,
        steps: [
          { text: `Eine Reaktionsfunktion in die andere einsetzen:`, eq: String.raw`q_1 = 40 - 0{,}5(40 - 0{,}5q_1) = 20 + 0{,}25q_1` },
          { text: `Nach $q_1$ auflösen:`, eq: String.raw`0{,}75q_1 = 20 \implies q_1^* = \frac{80}{3}` },
          { text: `Symmetrisch folgt:`, eq: String.raw`q_2^* = \frac{80}{3}` },
          { text: `Interpretation im Diagramm:`, eq: String.raw`\text{Im Schnittpunkt sind beide Firmen gleichzeitig auf ihrer besten Antwortkurve.}` }
        ],
        result: String.raw`Der Schnittpunkt $(q_1^*, q_2^*) = \left(\frac{80}{3}, \frac{80}{3}\right)$ ist genau das Cournot-Nash-Gleichgewicht: Keine Firma kann bei gegebener Konkurrenzmenge ihre Menge einseitig verbessern.`
      }
    ]
  },
  gleichgewicht: {
    motivation: 'Bisher haben wir Märkte isoliert betrachtet (Partialanalyse). Das allgemeine Gleichgewicht betrachtet alle Märkte gleichzeitig und analysiert Tausch- und Produktionseffizienz.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Die Edgeworth-Box</h3>
      <p>Zwei Konsumenten tauschen zwei Güter. Jeder Punkt in der Box stellt eine Aufteilung der Gesamtausstattung dar. Indifferenzkurven verlaufen für Konsument A vom Ursprung unten links, für B von oben rechts.</p>
      <p>Ein Tausch ist vorteilhaft, wenn er einen Konsumenten besser stellt, ohne den anderen schlechter zu stellen. Die Linse zwischen zwei sich schneidenden Indifferenzkurven zeigt alle solche Tauschrichtungen an.</p>
    </div>
    <div class="section-block">
      <h3>Pareto-Effizienz</h3>
      <p>Eine Allokation ist Pareto-effizient, wenn man keinen Spieler besser stellen kann, ohne einen anderen schlechter zu stellen. Grafisch sind dies die Tangentialpunkte der Indifferenzkurven.</p>
      <div class="math-block">$$GRS^A = GRS^B$$</div>
      <p>Die Tangentialbedingung garantiert, dass keine weiteren Tauschgewinne mehr möglich sind.</p>
    </div>
    <div class="section-block">
      <h3>Kontraktkurve</h3>
      <p>Die Menge aller Pareto-effizienten Punkte in der Edgeworth-Box wird als Kontraktkurve bezeichnet. Auf dieser Kurve ist jede Verbesserung für eine Person mit einer Verschlechterung für die andere verbunden.</p>
    </div>
    <div class="section-block">
      <h3>Walrasianisches Gleichgewicht</h3>
      <p>Ein Preisvektor $p^*$ räumt alle Märkte gleichzeitig. Das Walrassche Gesetz besagt: Wenn $n-1$ Märkte im Gleichgewicht sind, ist auch der $n$-te Markt geräumt.</p>
      <div class="math-block">$$\sum_i z_i(p) = 0 \quad \text{(Walrasches Gesetz)}$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Pareto-Effizienz ≠ Gerechtigkeit:</strong> Ein Punkt auf der Kontraktkurve kann extrem ungleich verteilt sein. Pareto-Effizienz ist ein schwaches Kriterium — es urteilt nicht über Verteilungsgerechtigkeit.</div>
      <div class="warn-box"><strong>Walrasianisches GG vs. allgemeines GG:</strong> Das Walrasianische GG setzt vollkommene Märkte, vollständige Information und Preisflexibilität voraus. In der Realität können Marktversagen und Preisrigiditäten ein allgemeines Ungleichgewicht erzeugen.</div>
    </div>
    `,
    formeln: [
      { label: 'Effizienzbedingung', eq: String.raw`$$\frac{MU_1^A}{MU_2^A} = \frac{MU_1^B}{MU_2^B}$$`, desc: 'Gleichheit der Grenzraten der Substitution', variables: { MU_1: 'Grenznutzen von Gut 1', MU_2: 'Grenznutzen von Gut 2' } }
    ],
    aufgaben: [
      {
        text: String.raw`In einer Tauschökonomie gilt $u^A = x_1^A x_2^A$ und $u^B = x_1^B x_2^B$. Gesamtausstattung ist $(10, 10)$. Prüfen Sie, ob der Punkt $x^A=(2,2), x^B=(8,8)$ Pareto-effizient ist.`,
        steps: [
          { text: `Berechne GRS für A:`, eq: String.raw`GRS^A = \frac{MU_1^A}{MU_2^A} = \frac{x_2^A}{x_1^A} = \frac{2}{2} = 1` },
          { text: `Berechne GRS für B:`, eq: String.raw`GRS^B = \frac{x_2^B}{x_1^B} = \frac{8}{8} = 1` },
          { text: `Entscheidung: Gilt $GRS^A = GRS^B$?`, eq: String.raw`1 = 1 \implies \text{Pareto-effizient.}` }
        ],
        result: String.raw`Die Allokation ist Pareto-effizient.`
      },
      {
        text: String.raw`In einer Edgeworth-Box gelten bei einer gegebenen Allokation $GRS^A = 4$ und $GRS^B = 1$. Kann diese Allokation Pareto-effizient sein? Wenn nicht: In welche Richtung sollte getauscht werden?`,
        steps: [
          { text: `Effizienzbedingung prüfen:`, eq: String.raw`GRS^A = GRS^B \text{ notwendig für Pareto-Effizienz.}\quad 4 \neq 1 \implies \text{nicht effizient.}` },
          { text: `Interpretation der Ungleichheit:`, eq: String.raw`GRS^A=4 \text{: A gibt bis zu 4 Einheiten Gut 2 für 1 Einheit Gut 1 auf. B gibt nur 1.}` },
          { text: `Handelsrichtung: A bewertet Gut 1 viel höher als B.`, eq: String.raw`\text{A gibt B Gut 2, B gibt A Gut 1} \implies \text{Pareto-Verbesserung bis } GRS^A = GRS^B.` }
        ],
        result: String.raw`Nein, die Allokation ist nicht Pareto-effizient. Gut 1 sollte von B zu A fließen (und Gut 2 umgekehrt), solange $GRS^A > GRS^B$. Erst bei $GRS^A = GRS^B$ liegt ein Punkt auf der Kontraktkurve vor.`
      },
      {
        text: String.raw`Tauschökonomie: $u^A = \min(x_1^A, x_2^A)$, $u^B = x_1^B + x_2^B$ (perfekte Komplemente vs. perfekte Substitute). Gesamtausstattung $(6,6)$. Beschreiben Sie die Kontraktkurve und leiten Sie das Walrasianische Gleichgewicht ab.`,
        steps: [
          { text: `Präferenzen A (Leontief): Optimum immer bei $x_1^A = x_2^A$.`, eq: String.raw`\text{A konsumiert immer gleiche Mengen beider Güter: } x_1^A = x_2^A = k` },
          { text: `Präferenzen B (linear): GRS ist konstant = 1. B ist indifferent zwischen Gütern, wenn $p_1 = p_2$.`, eq: String.raw`GRS^B = \frac{MU_1^B}{MU_2^B} = \frac{1}{1} = 1` },
          { text: `Im GG: $GRS^A$ (an Eckpunkt) nicht definiert, aber Bereich $[0, \infty)$. Preis-GG bei $p_1 = p_2$.`, eq: String.raw`p_1 = p_2 \implies \text{A wählt } x_1^A = x_2^A; \text{ B ist indifferent.}` },
          { text: `Budgetgerade von A bei $p_1 = p_2 = 1$, Endowment $(e_1^A, e_2^A)$:`, eq: String.raw`\text{GG: } x_1^A = x_2^A = 3; \; x_1^B = x_2^B = 3` }
        ],
        result: String.raw`Die Kontraktkurve besteht aus allen Punkten $(k, k, 6-k, 6-k)$ mit $k \in [0,6]$ — die Diagonale der Edgeworth-Box. Das Walrasianische GG bei $p_1/p_2 = 1$ liegt bei $(3,3,3,3)$, wenn beide anfänglich gleich ausgestattet sind.`
      },
      {
        text: String.raw`Zwei Güter, zwei Konsumenten. $u^A = x_1^{0{,}5} (x_2^A)^{0{,}5}$, $u^B = x_1^B x_2^B$. Endowments: $e^A = (4,0)$, $e^B = (0,4)$. Bestimmen Sie das Walrasianische Gleichgewicht (Preise und Allokation).`,
        steps: [
          { text: `Marshallsche Nachfragen A: $x_1^A = \frac{0{,}5 I^A}{p_1}$, $x_2^A = \frac{0{,}5 I^A}{p_2}$, $I^A = 4p_1$.`, eq: String.raw`x_1^A = \frac{0{,}5 \cdot 4p_1}{p_1} = 2, \quad x_2^A = \frac{0{,}5 \cdot 4p_1}{p_2} = \frac{2p_1}{p_2}` },
          { text: `Marshallsche Nachfragen B: $x_1^B = \frac{0{,}5 I^B}{p_1}$, $x_2^B = \frac{0{,}5 I^B}{p_2}$, $I^B = 4p_2$.`, eq: String.raw`x_1^B = \frac{2p_2}{p_1}, \quad x_2^B = 2` },
          { text: `Marktgleichgewicht Gut 1: $x_1^A + x_1^B = 4$.`, eq: String.raw`2 + \frac{2p_2}{p_1} = 4 \implies \frac{2p_2}{p_1} = 2 \implies p_1 = p_2` },
          { text: `Gleichgewichtsallokation bei $p_1 = p_2$:`, eq: String.raw`x_1^A = 2,\; x_2^A = 2,\; x_1^B = 2,\; x_2^B = 2` }
        ],
        result: String.raw`Walrasianisches GG: $p_1 = p_2$ (nur relative Preise bestimmt), Allokation $(2,2)$ für A und $(2,2)$ für B. Beide Konsumenten teilen Güter gleich auf — Effizienz durch Tausch von A's Gut-1-Überschuss gegen B's Gut-2-Überschuss.`
      }
    ]
  },
  wohlfahrt: {
    motivation: 'Die Wohlfahrtstheoreme schlagen die Brücke zwischen Marktgleichgewicht und gesellschaftlicher Wünschenswertigkeit.',
    theorie: String.raw`
    <div class="section-block">
      <h3>1. Hauptsatz der Wohlfahrtsökonomik</h3>
      <p>Jedes Wettbewerbsgleichgewicht (bei Abwesenheit von Marktversagen) führt zu einer Pareto-effizienten Allokation. Der Markt ist somit ein Mechanismus zur Erzielung von Effizienz.</p>
      <p>Voraussetzungen: Vollkommene Märkte, keine Externalitäten, keine öffentlichen Güter, vollständige Information. Bei Verletzung dieser Bedingungen ist Marktversagen möglich.</p>
    </div>
    <div class="section-block">
      <h3>2. Hauptsatz der Wohlfahrtsökonomik</h3>
      <p>Jede Pareto-effiziente Allokation kann als Wettbewerbsgleichgewicht realisiert werden, sofern eine geeignete Umverteilung der Anfangsausstattungen (via Pauschalsteuern) erfolgt.</p>
      <p>Der 2. Hauptsatz trennt Effizienz von Verteilung: Der Staat kann gesellschaftliche Verteilungsziele durch Pauschalumverteilung erreichen und danach den Markt Effizienz erzeugen lassen.</p>
    </div>
    <div class="section-block">
      <h3>Wohlfahrtsfunktionen</h3>
      <p>Wie bewertet man verschiedene Pareto-effiziente Punkte? Utilitaristisch ($\sum u_i$) oder nach Rawls ($\min u_i$).</p>
      <div class="math-block">$$W_{util} = \sum_{i=1}^n u_i \qquad W_{Rawls} = \min_i u_i$$</div>
    </div>
    <div class="section-block">
      <h3>Konsumenten- und Produzentenrente als Wohlfahrtsmaß</h3>
      <p>Gesamtwohlfahrt $W = KR + PR$. Deadweight Loss (DWL): der Wohlfahrtsverlust durch Abweichung vom Wettbewerbsoptimum (z.B. Monopol, Steuer, Mindestpreis).</p>
      <div class="math-block">$$DWL = W_{Wettbewerb} - (KR + PR)$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Utilitarismus vs. Rawls:</strong> Beide Wohlfahrtsfunktionen können zu unterschiedlichen Politikempfehlungen führen. Ein utilitaristischer Planer kann extreme Ungleichheit tolerieren, wenn der Gesamtnutzen steigt — ein Rawlsianischer nicht.</div>
      <div class="warn-box"><strong>Pauschalsteuern in der Praxis:</strong> Der 2. Hauptsatz erfordert beobachtbare individuelle Ausstattungen. Da diese Information oft nicht vorliegt (Informationsasymmetrie), ist die praktische Umsetzung stark eingeschränkt.</div>
    </div>
    `,
    formeln: [
      { label: 'Utilitaristisch', eq: String.raw`$$W = u_1 + u_2 + \dots + u_n$$`, desc: 'Summe der Nutzen', variables: { u_i: 'Nutzen von Person i' } },
      { label: 'Rawlsianisch', eq: String.raw`$$W = \min(u_1, \dots, u_n)$$`, desc: 'Fokus auf den Schwächsten', variables: { u_i: 'Nutzen von Person i' } }
    ],
    aufgaben: [
      {
        text: String.raw`Zwei Allokationen: I $(u_1=10, u_2=10)$ und II $(u_1=5, u_2=20)$. Welche wird nach Rawls bevorzugt?`,
        steps: [
          { text: `Minima bestimmen:`, eq: String.raw`\min(10,10)=10 \quad \text{vs} \quad \min(5,20)=5` },
          { text: `Vergleichen:`, eq: String.raw`10 > 5` }
        ],
        result: String.raw`Allokation I wird bevorzugt.`
      },
      {
        text: String.raw`Eine politische Partei schlägt vor, über Pauschalsteuern eine Umverteilung zu erreichen und danach den Markt spielen zu lassen. Auf welchen Hauptsatz der Wohlfahrtstheorie stützt sie sich, und welche zentrale Praxisschranke besteht?`,
        steps: [
          { text: `Identifizieren des relevanten Hauptsatzes:`, eq: String.raw`\text{2. Hauptsatz: Jede Pareto-effiziente Allokation lässt sich als Wettbewerbsgleichgewicht realisieren — nach geeigneter Umverteilung.}` },
          { text: `Das Instrument: Pauschalsteuern/-transfers sind verzerrungsfrei.`, eq: String.raw`\text{Anders als Einkommens- oder Mengensteuern ändern Pauschalsteuern keine Grenzpreise.}` },
          { text: `Die Praxisschranke:`, eq: String.raw`\text{Pauschalsteuern erfordern beobachtbare individuelle Ausstattungen. Das ist in der Realität kaum möglich (Informationsasymmetrie).}` }
        ],
        result: String.raw`Zweiter Hauptsatz der Wohlfahrtsökonomik. Kritische Praxisschranke: Informationsasymmetrie.`
      },
      {
        text: String.raw`Nachfrage $P_D = 20 - Q$, Angebot $P_S = Q + 4$. Berechnen Sie KR, PR und Gesamtwohlfahrt im Gleichgewicht. Dann: Welcher DWL entsteht bei einem Mindestpreis $P_{floor} = 12$?`,
        steps: [
          { text: `Gleichgewicht: $20 - Q = Q + 4 \implies 2Q = 16$.`, eq: String.raw`Q^* = 8, \quad P^* = 12` },
          { text: `KR und PR im GG:`, eq: String.raw`KR = \frac{1}{2}(20-12)\cdot 8 = 32 \quad PR = \frac{1}{2}(12-4)\cdot 8 = 32` },
          { text: `Bei Mindestpreis $P_{floor} = 12 = P^*$: Kein Einfluss, da Mindestpreis nicht bindend.`, eq: String.raw`P_{floor} = P^* = 12 \implies \text{nicht bindend} \implies DWL = 0` },
          { text: `Bei bindendem Mindestpreis $P_{floor} = 14 > P^*$: Nachfragemenge $Q_D = 20 - 14 = 6$.`, eq: String.raw`DWL = \frac{1}{2}(14-4)(8-6) - \frac{1}{2}(12-4)(8-6) = \frac{1}{2}\cdot 2 \cdot(10-8) = 2` }
        ],
        result: String.raw`GG: $P^*=12$, $Q^*=8$, $KR=PR=32$, $W=64$. Bei $P_{floor}=14$: Handelsvolumen fällt auf $Q=6$, DWL entsteht. Der Mindestpreis schützt Anbieter auf Kosten der Konsumenten und erzeugt Wohlfahrtsverlust.`
      },
      {
        text: String.raw`Erläutern Sie das Erste und Zweite Wohlfahrtstheorem formal und diskutieren Sie je eine zentrale Einschränkung in der Praxis. Geben Sie ein ökonomisches Beispiel für jedes Theorem.`,
        steps: [
          { text: `1. Hauptsatz: Wettbewerbsgleichgewicht $\Rightarrow$ Pareto-effizient.`, eq: String.raw`\text{Formal: } p^* \text{ räumt alle Märkte} \implies \text{Pareto-effiziente Allokation}` },
          { text: `Einschränkung 1. HS: Externe Effekte, öffentliche Güter, Marktmacht, Informationsasymmetrien.`, eq: String.raw`\text{Beispiel: Fabrikemissionen } \implies MSC > MPC \implies Q^{mkt} > Q^{soc}` },
          { text: `2. Hauptsatz: Jede Pareto-effiziente Allokation realisierbar als Wettbewerbs-GG nach Umverteilung.`, eq: String.raw`\text{Formal: } \forall \text{ Pareto-eff. } x^* \exists \text{ Ausstattungen } e^* \text{ und Preise } p^*: \text{ WGG} = x^*` },
          { text: `Einschränkung 2. HS: Informationsproblem bei Pauschalsteuern, politische Durchführbarkeit.`, eq: String.raw`\text{Beispiel: Um gleiche Bildungschancen zu erzeugen, müssten individuelle Fähigkeiten beobachtbar sein.}` }
        ],
        result: String.raw`1. HS: Märkte erzeugen Effizienz — aber nur bei Abwesenheit von Marktversagen. 2. HS: Effizienz und Verteilung trennbar — aber nur bei beobachtbaren Ausstattungen. Beide Theoreme sind Referenzpunkte, keine Blaupausen: Sie beschreiben ideale Bedingungen, die in der Praxis selten vollständig erfüllt sind.`
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
      <p>Eine Steuer $t$ in Höhe des Grenzschadens im Optimum ($MEC(Q^*)$) korrigiert das Marktverhalten exakt auf das gesellschaftliche Optimum.</p>
      <p>Das Instrument ist effizient, weil es Firmen Anreize gibt, Emissionen zu vermeiden — jede vermiedene Einheit spart Steuerkosten. Die Steuereinnahmen können für andere Zwecke verwendet werden (Doppeldividende).</p>
    </div>
    <div class="section-block">
      <h3>Coase-Theorem</h3>
      <p>Bei klar definierten Eigentumsrechten und null Transaktionskosten führen private Verhandlungen unabhängig von der Erstzuweisung der Rechte zu einer effizienten Lösung.</p>
      <p>Praktische Grenzen: Transaktionskosten bei vielen Betroffenen (z.B. Klimawandel), strategisches Verhalten, Informationsasymmetrien zwischen Verhandlungspartnern.</p>
    </div>
    <div class="section-block">
      <h3>Emissionshandel (Cap-and-Trade)</h3>
      <p>Alternative zur Pigou-Steuer: Der Staat setzt ein Mengenziel (Cap), verteilt Lizenzen und lässt diese handeln. Das Ergebnis ist effizient, wenn der Lizenzmarkt wettbewerblich ist.</p>
      <div class="math-block">$$t_{Pigou} = MEC(Q^*) \quad \Leftrightarrow \quad \text{Cap bei } Q^*$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Pigou-Steuer bei Unsicherheit:</strong> Die optimale Pigou-Steuer erfordert Kenntnis des gesellschaftlichen Optimums. Bei Unsicherheit über $MEC$ kann die Steuer zu hoch oder zu niedrig sein — dann ist Cap-and-Trade der Steuer vorzuziehen (bei steilen Grenzkostenkurven).</div>
      <div class="warn-box"><strong>Coase-Theorem in der Praxis:</strong> Das Coase-Theorem gilt nur bei null Transaktionskosten und wenigen Beteiligten. Bei Umweltproblemen mit vielen Betroffenen (Klimawandel, Luftverschmutzung) ist staatliche Intervention unumgänglich.</div>
    </div>
    `,
    formeln: [
      { label: 'Pigou-Steuer', eq: String.raw`$$t = MEC(Q^*)$$`, desc: 'Steuer = Grenzschaden im Optimum', variables: { MEC: 'marginale externe Kosten', Q_star: 'gesellschaftlich optimale Menge' } }
    ],
    aufgaben: [
      {
        text: String.raw`Nachfrage $P=100-Q$, private Grenzkosten $MPC=20$, externer Schaden $MEC=Q$. Berechnen Sie die gesellschaftlich optimale Menge und die optimale Pigou-Steuer.`,
        steps: [
          { text: `MSC bestimmen:`, eq: String.raw`MSC = MPC + MEC = 20 + Q` },
          { text: `Gleichgewicht ($P=MSC$):`, eq: String.raw`100 - Q = 20 + Q \implies 2Q = 80 \implies Q^* = 40` },
          { text: `Marktmenge ohne Eingriff ($P = MPC$):`, eq: String.raw`100 - Q = 20 \implies Q_{mkt} = 80` },
          { text: `Optimale Pigou-Steuer: $t = MEC(Q^*)$.`, eq: String.raw`t = MEC(40) = 40` }
        ],
        result: String.raw`$Q_{soc}^* = 40$, $t^* = 40$. Der Markt produziert ohne Eingriff $Q_{mkt} = 80$ — doppelt so viel wie sozial optimal.`
      },
      {
        text: String.raw`Firma A hat das Eigentumsrecht zu produzieren und erzielt dabei Gewinne von $50$. Produktion verursacht bei Firma B einen Schaden von $30$. Transaktionskosten sind null. Was sagt das Coase-Theorem über das Ergebnis?`,
        steps: [
          { text: `Fall 1: A hat Produktionsrecht.`, eq: String.raw`\text{B zahlt A bis zu 30, um Produktion zu stoppen. Aber A's Gewinn = 50 > 30.} \implies \text{A produziert.}` },
          { text: `Fall 2: B hat Verbotsrecht.`, eq: String.raw`\text{A zahlt B mindestens 30. Restgewinn: } 50-30=20>0. \implies \text{A produziert trotzdem.}` },
          { text: `Vergleich der Ergebnisse:`, eq: String.raw`\text{In beiden Fällen: Produktion findet statt. Effizienzresultat ist identisch.}` }
        ],
        result: String.raw`Coase-Theorem: Das Effizienzresultat ist unabhängig von der Rechtszuweisung. Produktion findet statt (Nettogewinn $50-30=20>0$). Die Verteilung des Überschusses hängt von der Rechtszuweisung ab — nicht aber die Effizienz.`
      },
      {
        text: String.raw`Pigouviansteuer: Markt mit $P_D = 50 - Q$, $MPC = 10$. Die Produktion verursacht einen konstanten externen Schaden von $t = 10$ Euro pro Einheit. Berechnen Sie: (a) Marktmenge ohne Steuer, (b) soziales Optimum, (c) Steueraufkommen, (d) DWL ohne Steuer.`,
        steps: [
          { text: `(a) Marktmenge: $P_D = MPC$.`, eq: String.raw`50 - Q = 10 \implies Q_{mkt} = 40, \quad P_{mkt} = 10` },
          { text: `(b) Soziales Optimum: $P_D = MSC = MPC + t = 10 + 10 = 20$.`, eq: String.raw`50 - Q = 20 \implies Q^* = 30, \quad P^* = 20` },
          { text: `(c) Steueraufkommen: $t \cdot Q^* = 10 \cdot 30 = 300$.`, eq: String.raw`T = t \cdot Q^* = 10 \cdot 30 = 300` },
          { text: `(d) DWL ohne Steuer: Dreieck zwischen $Q_{mkt}=40$ und $Q^*=30$.`, eq: String.raw`DWL = \frac{1}{2} \cdot t \cdot (Q_{mkt} - Q^*) = \frac{1}{2} \cdot 10 \cdot 10 = 50` }
        ],
        result: String.raw`$Q_{mkt}=40$, $Q^*=30$, Steueraufkommen $= 300$, $DWL = 50$. Die Pigou-Steuer beseitigt den DWL vollständig und lenkt die Produktion auf das gesellschaftliche Optimum.`
      },
      {
        text: String.raw`Coase-Theorem: Zwei Unternehmen — Fabrik F (produziert Stahl) und Fischer G (leidet unter Abwasser). Ohne Abwasser: $\pi_G = 100$. Mit Abwasser: $\pi_G = 40$. Stahlfabrik-Gewinn mit Abwasser: $\pi_F = 80$, ohne: $\pi_F = 30$. Transaktionskosten = 0. Analysieren Sie beide Eigentumsrechtszuweisungen und das effiziente Ergebnis.`,
        steps: [
          { text: `Effizienzanalyse: Gesamtwohlfahrt mit vs. ohne Abwasser.`, eq: String.raw`W_{mit} = \pi_F + \pi_G = 80 + 40 = 120 \quad W_{ohne} = 30 + 100 = 130` },
          { text: `Effizientes Ergebnis: Produktion ohne Abwasser ($W = 130 > 120$).`, eq: String.raw`\Delta W = 130 - 120 = 10 > 0 \implies \text{Abwasservermeidung ist effizient.}` },
          { text: `Fall 1: F hat Recht auf Abwasser. Kann G F bezahlen?`, eq: String.raw`G \text{ zahlt bis zu } 60 \text{ für Vermeidung}. \; F \text{ braucht mind. } 50. \implies \text{Einigung möglich.}` },
          { text: `Fall 2: G hat Recht auf sauberes Wasser. Produziert F trotzdem?`, eq: String.raw`F \text{ müsste G mind. } 60 \text{ zahlen, verdient aber nur } 80. \; 80-60=20 \text{ Restgewinn.} \implies \text{F vermeidet Abwasser.}` }
        ],
        result: String.raw`In beiden Fällen: kein Abwasser — effizientes Ergebnis. Coase-Theorem bestätigt: Bei null Transaktionskosten und klar definierten Rechten ist das Effizienzresultat invariant bezüglich der Rechtszuweisung. Verteilung: Im Fall 1 zahlt G zwischen 50 und 60 an F; im Fall 2 muss F G entschädigen (oder gar nicht produzieren und die Einigung zustande kommt zu anderen Bedingungen).`
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
      <h3>Marktversagen und Free-Riding</h3>
      <p>Auf dem Markt wird das öffentliche Gut oft gar nicht oder in zu geringer Menge bereitgestellt, da jeder hofft, dass die anderen die Kosten tragen (Free-Riding).</p>
      <p>Das Free-Rider-Problem ist strukturell identisch mit dem Gefangenendilemma: Individuelle Rationalität führt zu kollektiver Ineffizienz.</p>
    </div>
    <div class="section-block">
      <h3>Bereitstellung und Lösungsansätze</h3>
      <p>Private Bereitstellung: zu gering (Trittbrettfahren). Staatliche Bereitstellung: möglich, aber erfordert Information über Präferenzen (Revelation-Problem). Lindahl-Mechanismus: Personalisierte Preise entsprechend individueller Zahlungsbereitschaft.</p>
      <div class="math-block">$$P_i^{Lindahl} = MRS_i \quad \text{für alle } i$$</div>
    </div>
    <div class="section-block">
      <h3>Reine vs. unreine öffentliche Güter</h3>
      <p>Reine öffentliche Güter: vollständig nicht-rival und nicht-ausschließbar (nationale Verteidigung). Unreine öffentliche Güter (Klub-Güter, allmend-Ressourcen): teilweise Rivalität oder Ausschließbarkeit möglich.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Vertikale vs. horizontale Aggregation:</strong> Bei privaten Gütern addieren wir individuelle Nachfragen horizontal (gleicher Preis, verschiedene Mengen). Bei öffentlichen Gütern addieren wir Zahlungsbereitschaften vertikal (gleiche Menge, verschiedene Preise). Verwechslung führt zu falschen Optimalmengen.</div>
      <div class="warn-box"><strong>Lindahl-Gleichgewicht und strategisches Verhalten:</strong> Der Lindahl-Mechanismus ist theoretisch effizient, aber praktisch problematisch: Individuen haben einen Anreiz, ihre Zahlungsbereitschaft zu untertreiben, um einen niedrigeren Lindahl-Preis zu zahlen (Preference Revelation Problem).</div>
    </div>
    `,
    formeln: [
      { label: 'Samuelson', eq: String.raw`$$\sum_{i=1}^n MRS_i = MC$$`, desc: 'Effizienzbedingung für öffentliche Güter', variables: { MRS_i: 'Grenzrate der Substitution von Person i', MC: 'Grenzkosten der Bereitstellung' } }
    ],
    aufgaben: [
      {
        text: String.raw`Zwei Personen A und B haben Zahlungsbereitschaften $P_A = 10 - Q$ und $P_B = 20 - Q$. Grenzkosten sind konstant $MC = 10$. Bestimmen Sie die optimale Menge $Q^*$.`,
        steps: [
          { text: `Aggregierte Zahlungsbereitschaft (vertikal):`, eq: String.raw`P_{agg} = (10-Q) + (20-Q) = 30 - 2Q` },
          { text: `Bedingung ($P_{agg} = MC$):`, eq: String.raw`30 - 2Q = 10 \implies 2Q = 20` }
        ],
        result: String.raw`$Q^* = 10$.`
      },
      {
        text: String.raw`Zwei Individuen können jeweils $0$ oder $10$ in ein öffentliches Gut einzahlen. Jeder eingezahlte Euro erzeugt für jeden (da nicht-rival) einen Nutzen von $0{,}8$. Die Einzahlung kostet $10$, liefert also Eigennutzen $8 - 10 = -2$ wenn man allein zahlt, aber kostenlos $8$ wenn der andere zahlt. Analysieren Sie das Nash-Gleichgewicht.`,
        steps: [
          { text: `Beste Antwort von 1, wenn 2 einzahlt:`, eq: String.raw`\text{Nicht zahlen: Nutzen = 8 (kostenlos). Zahlen: Nutzen = 8+8-10=6.} \implies \text{Trittbrettfahren dominiert.}` },
          { text: `Beste Antwort von 1, wenn 2 nicht einzahlt:`, eq: String.raw`\text{Zahlen: Nutzen = 8-10=-2. Nicht zahlen: 0.} \implies \text{Nicht zahlen.}` },
          { text: `Nash-Gleichgewicht:`, eq: String.raw`\text{Nicht zahlen ist dominante Strategie für beide.} \implies (0,0).` }
        ],
        result: String.raw`Nash-Gleichgewicht: Keiner zahlt ein — trotz gesellschaftlichem Optimum bei $(10, 10)$. Free-Riding zerstört die private Bereitstellung öffentlicher Güter.`
      },
      {
        text: String.raw`Aggregation individueller Zahlungsbereitschaft: Konsument 1 hat $MB_1 = 10 - Q$, Konsument 2 hat $MB_2 = 8 - Q$. Grenzkosten $MC = 4$. Berechnen Sie die sozial optimale Menge des öffentlichen Gutes und vergleichen Sie mit privater Bereitstellung.`,
        steps: [
          { text: `Vertikale Aggregation der Zahlungsbereitschaften:`, eq: String.raw`MSB = MB_1 + MB_2 = (10-Q) + (8-Q) = 18 - 2Q` },
          { text: `Soziales Optimum: $MSB = MC$.`, eq: String.raw`18 - 2Q = 4 \implies 2Q = 14 \implies Q^* = 7` },
          { text: `Private Bereitstellung: Jeder maximiert eigenen Nutzen minus Kosten. Person 1: $MB_1 = MC$.`, eq: String.raw`10 - Q = 4 \implies Q_1^{priv} = 6` },
          { text: `Person 2 trittbrettfährt auf $Q_1 = 6$: $MB_2(6) = 8-6=2 < MC=4$ — zahlt nichts.`, eq: String.raw`Q^{priv} = \max(Q_1^{priv}, Q_2^{priv}) = 6 < Q^* = 7` }
        ],
        result: String.raw`Soziales Optimum: $Q^* = 7$. Private Bereitstellung: $Q^{priv} = 6$ (nur Person 1 zahlt, Person 2 fährt Trittbrett). Unterversorgung um 1 Einheit. Das Ausmaß des Free-Riding-Problems nimmt mit der Anzahl der Konsumenten zu.`
      },
      {
        text: String.raw`Free-Rider-Problem in Spieltheorie: Zwei Länder A und B können in Klimaschutz investieren (K) oder nicht investieren (N). Nutzen für beide bei (K,K): 10. Bei (K,N) oder (N,K): Investor erhält 3 (Kosten 7), Trittbrettfahrer erhält 10. Bei (N,N): 0. Bestimmen Sie das Nash-GG und das soziale Optimum.`,
        steps: [
          { text: `Beste Antwort von A auf K: $\max(10-7, 10) = \max(3, 10)$.`, eq: String.raw`u_A(N|K_B) = 10 > u_A(K|K_B) = 3 \implies \text{A wählt N.}` },
          { text: `Beste Antwort von A auf N: $\max(3, 0)$.`, eq: String.raw`u_A(K|N_B) = 3 > u_A(N|N_B) = 0 \implies \text{A wählt K.}` },
          { text: `Nash-GG: Dominante Strategie? Prüfe: Ist N dominant?`, eq: String.raw`\text{Auf K: N besser (10>3). Auf N: K besser (3>0). Keine dominante Strategie!}` },
          { text: `Gemischtes Nash-GG und soziales Optimum:`, eq: String.raw`W_{KK} = 3+3=6 < W_{KK\text{(ges.)}} = 10+10=20 \implies \text{Soz. Opt. bei (K,K), GG bei gem. Strat.}` }
        ],
        result: String.raw`Kein reines Nash-GG (keine dominante Strategie). Das soziale Optimum (K,K) mit Gesamtwohlfahrt 20 wird durch private Anreize untergraben. Internationale Klimaabkommen versuchen, durch Verträge und Monitoring das Koordinationsversagen zu überwinden.`
      },
      {
        text: String.raw`Lindahl-Logik als Mini-Fall: Für ein öffentliches Gut gilt $MB_A = 12 - Q$, $MB_B = 8 - Q$, Grenzkosten $MC = 6$. Bestimmen Sie (i) die effiziente Menge und (ii) die individuellen Lindahl-Preise bei dieser Menge.`,
        steps: [
          { text: `Samuelson-Bedingung anwenden:`, eq: String.raw`MB_A + MB_B = MC \implies (12-Q)+(8-Q)=6` },
          { text: `Effiziente Menge berechnen:`, eq: String.raw`20-2Q=6 \implies Q^*=7` },
          { text: `Lindahl-Preis von A bei $Q^*$:`, eq: String.raw`P_A^{L} = MB_A(7)=12-7=5` },
          { text: `Lindahl-Preis von B bei $Q^*$ und Kostendeckung prüfen:`, eq: String.raw`P_B^{L}=MB_B(7)=8-7=1,\quad P_A^L+P_B^L=6=MC` }
        ],
        result: String.raw`Die effiziente Menge ist $Q^*=7$. Individuelle Preise: $P_A^L=5$, $P_B^L=1$. Zusammen decken sie die Grenzkosten, genau wie es der Lindahl-Mechanismus fordert.`
      }
    ]
  },
  information: {
    motivation: 'Unterschiedliche Informationsstände zwischen Käufer und Verkäufer (asymmetrische Information) können Märkte destabilisieren oder zum Zusammenbruch führen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Adverse Selection (Negativauslese)</h3>
      <p>Tritt <strong>vor</strong> Vertragsschluss auf. Beispiel "Lemons-Market": Käufer kennen die Qualität gebrauchter Autos nicht und zahlen nur den Durchschnittspreis. Verkäufer guter Autos ziehen sich zurück, die Qualität sinkt weiter.</p>
      <p>Resultat: Nur schlechte Qualitäten bleiben am Markt ("race to the bottom"). Im Extremfall vollständiger Marktversagen.</p>
    </div>
    <div class="section-block">
      <h3>Moral Hazard (Verhaltensrisiko)</h3>
      <p>Tritt <strong>nach</strong> Vertragsschluss auf. Eine Versicherung führt dazu, dass der Versicherte weniger vorsichtig ist (Hidden Action). Arbeitgeber kann nicht beobachten, ob Arbeitnehmer angemessen arbeitet.</p>
      <p>Lösung: Anreizkompatible Verträge mit erfolgsabhängiger Vergütung. Tradeoff: Risikoübertragung auf risikoaversen Agenten.</p>
    </div>
    <div class="section-block">
      <h3>Signaling & Screening</h3>
      <p>Lösungen: Die informierte Seite sendet Signale (z.B. Diplome), die uninformierte Seite bietet Menüs an, um Typen zu trennen (Self-Selection).</p>
      <p>Spence-Signaling: Bildung als Signal für Fähigkeit, nicht unbedingt als direkte Produktivitätssteigerung. Separierendes GG: Hochfähige wählen hohes Bildungsniveau, Niedrigfähige nicht.</p>
    </div>
    <div class="section-block">
      <h3>Prinzipal-Agenten-Problem</h3>
      <p>Prinzipal (z.B. Arbeitgeber) delegiert Aufgabe an Agenten (z.B. Arbeitnehmer), dessen Handlungen nicht vollständig beobachtbar sind. Optimaler Vertrag maximiert Prinzipal-Nutzen unter Berücksichtigung der Partizipations- und Anreizkompatibilitätsbedingungen.</p>
      <div class="math-block">$$E[\pi_P] = E[y] - w \quad \text{s.t.} \quad IC: e=H, \quad PC: E[U_A] \geq \bar{U}$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Adverse Selection vs. Moral Hazard:</strong> Adverse Selection ist ein ex-ante-Problem (vor Vertragsschluss, über verborgene Typen). Moral Hazard ist ein ex-post-Problem (nach Vertragsschluss, über verborgene Aktionen). Verwechslung führt zur falschen Politikempfehlung.</div>
      <div class="warn-box"><strong>Separierendes vs. poolendes Gleichgewicht:</strong> Im separierenden GG werden Typen getrennt (teures Signal wirksam). Im poolenden GG handeln alle Typen gleich (Signal zu billig). Das Signal muss die Incentive-Compatibility-Bedingung erfüllen: für Niedrigfähige muss Signaling zu kostspielig sein.</div>
    </div>
    `,
    formeln: [
      { label: 'Erwarteter Wert', eq: String.raw`$$E[v] = q \cdot v_H + (1-q) \cdot v_L$$`, desc: 'Preis bei Unwissenheit', variables: { q: 'Anteil hoher Qualität', v_H: 'Wert hoher Qualität', v_L: 'Wert niedriger Qualität' } }
    ],
    aufgaben: [
      {
        text: String.raw`In einem Markt gibt es gute Autos ($v=5000$) und schlechte ($v=2000$) zu gleichen Teilen. Verkäufer guter Autos verkaufen nur ab $4500$. Was passiert?`,
        steps: [
          { text: `Berechne Erwartungswert des Käufers:`, eq: String.raw`E[v] = 0{,}5 \cdot 5000 + 0{,}5 \cdot 2000 = 3500` },
          { text: `Entscheidung: Verkaufen Besitzer guter Autos bei $P=3500$?`, eq: String.raw`3500 < 4500 \implies \text{Nein.}` },
          { text: `Folge: Welche Autos bleiben am Markt?`, eq: String.raw`\text{Nur die schlechten (Adverse Selection).}` }
        ],
        result: String.raw`Marktzusammenbruch für Qualität. Adverse Selection führt zu Lemons-Problem.`
      },
      {
        text: String.raw`Ein Arbeitnehmer kann hohen Effort ($e=H$, Kosten 5) oder niedrigen Effort ($e=L$, Kosten 0) wählen. Bei $e=H$ beträgt die Erfolgswahrscheinlichkeit 0{,}8, bei $e=L$ 0{,}4. Erfolg bringt 100, Misserfolg 0. Der Arbeitgeber zahlt einen fixen Lohn von 40. Welchen Effort wählt der Arbeitnehmer, und warum liegt Moral Hazard vor?`,
        steps: [
          { text: `Nutzen bei $e=H$: Lohn minus Anstrengungskosten.`, eq: String.raw`U(H) = 40 - 5 = 35` },
          { text: `Nutzen bei $e=L$: Lohn, keine Kosten.`, eq: String.raw`U(L) = 40 - 0 = 40 > 35 \implies \text{Arbeitnehmer wählt } e=L.` },
          { text: `Warum Moral Hazard? Effort ist nach Vertragsschluss nicht beobachtbar (Hidden Action).`, eq: String.raw`\text{Lösung: Erfolgsabhängige Vergütung } w(Erfolg) > w(Misserfolg) \text{ setzt Anreize.}` }
        ],
        result: String.raw`Moral Hazard (ex-post): Der Arbeitnehmer wählt $e=L$, da bei fixem Lohn kein Anreiz zu Anstrengung besteht.`
      },
      {
        text: String.raw`Akerlof-Markt für Lemons: Es gibt gute Gebrauchtwagen mit Wert $v_G = 8000$ und schlechte mit $v_S = 2000$. Käufer kennen die Qualität nicht. Verkäufer guter Autos reservieren ihren Wagen für mindestens $v_G = 8000$, schlechter für mindestens $v_S = 2000$. Anfangsanteil gut: $q = 0{,}5$. Zeigen Sie, wie adversarische Selektion zum vollständigen Marktversagen führt.`,
        steps: [
          { text: `Runde 1: Käufer zahlen $E[v] = 0{,}5 \cdot 8000 + 0{,}5 \cdot 2000 = 5000$.`, eq: String.raw`E_1[v] = 5000 < 8000 \implies \text{Verkäufer guter Autos verlassen Markt.}` },
          { text: `Runde 2: Nur schlechte Autos bleiben. Käufer zahlen $E[v] = 2000$.`, eq: String.raw`E_2[v] = 2000 = v_S \implies \text{Nur schlechte Autos gehandelt.}` },
          { text: `Wohlfahrtsverlust: Gute Autos werden nicht gehandelt trotz positivem Handelsgewinn.`, eq: String.raw`\Delta W_{verloren} = (v_G - v_S) \cdot N_G = (8000-2000) \cdot N_G > 0` },
          { text: `Lösung: Garantien, Zertifizierung oder Reputationsmechanismen.`, eq: String.raw`\text{Signaling: Verkäufer guter Autos sendet glaubwürdiges Signal (z.B. Garantie, TÜV).}` }
        ],
        result: String.raw`Vollständiges Marktversagen im Gleichgewicht: Nur schlechte Autos werden gehandelt. Der Markt für gute Autos bricht zusammen, obwohl Tausch für beide Seiten vorteilhaft wäre. Lösung erfordert Mechanismen zur Informationsübertragung (Signaling, Screening, staatliche Zertifizierung).`
      },
      {
        text: String.raw`Spence-Signaling: Es gibt zwei Arbeitertypen — hohe Fähigkeit (H) mit Produktivität $y_H = 100$ und niedrige Fähigkeit (L) mit $y_L = 40$. Bildungskosten: $c_H(e) = e$ (niedrig für H), $c_L(e) = 2e$ (hoch für L). Arbeitgeber zahlt $w = y_i$, wenn Typ erkannt. Leiten Sie die Bedingung für ein separierendes Gleichgewicht mit Bildungssignal $e^*$ ab.`,
        steps: [
          { text: `Anreizkompatibilität für Typ H: H bevorzugt hohes $e^*$ gegenüber $e=0$.`, eq: String.raw`100 - e^* \geq 40 \implies e^* \leq 60` },
          { text: `Anreizkompatibilität für Typ L: L bevorzugt $e=0$ (Lohn $w_L = 40$) gegenüber $e^*$ (Lohn $w_H = 100$).`, eq: String.raw`40 \geq 100 - 2e^* \implies 2e^* \geq 60 \implies e^* \geq 30` },
          { text: `Separierendes GG existiert, wenn beide IC gleichzeitig erfüllt sind:`, eq: String.raw`30 \leq e^* \leq 60` },
          { text: `Interpretation: Bildung als Signal, nicht direkt produktiv.`, eq: String.raw`\text{Typ H wählt } e^* \in [30,60]; \text{ Typ L wählt } e=0. \text{ Bildung trennt Typen.}` }
        ],
        result: String.raw`Separierendes Gleichgewicht für $e^* \in [30, 60]$. Schlüsseleinblick: Bildung muss für Niedrigfähige (L) relativ kostspieliger sein ($c_L > c_H$), damit sie das Signal nicht imitieren. Bildung hat hier keinen direkten Produktivitätseffekt — sie ist reines Kostensignal. Das single-crossing property ($c_H < c_L$) ist die entscheidende strukturelle Voraussetzung.`
      },
      {
        text: String.raw`Versicherungsmarkt-Fallunterscheidung: Ordnen Sie die Problemlage korrekt zu und wählen Sie je ein passendes Instrument. (i) Vor Vertragsabschluss kennt nur der Kunde sein Risikoprofil. (ii) Nach Vertragsabschluss sinkt seine Vorsicht.`,
        steps: [
          { text: `Fall (i): Zeitpunkt und Informationsart identifizieren.`, eq: String.raw`\text{Vor Vertrag + verborgener Typ } \Rightarrow \text{Adverse Selection}` },
          { text: `Passendes Instrument für (i):`, eq: String.raw`\text{Screening/Signaling (z.B. Tarifmenü, Selbstselektion, Zertifikate)}` },
          { text: `Fall (ii): Zeitpunkt und Informationsart identifizieren.`, eq: String.raw`\text{Nach Vertrag + verborgene Handlung } \Rightarrow \text{Moral Hazard}` },
          { text: `Passendes Instrument für (ii):`, eq: String.raw`\text{Anreizvertrag (Selbstbehalt, Bonus-Malus, Monitoring)}` }
        ],
        result: String.raw`Ex-ante verborgene Typen erfordern Trennmechanismen (Adverse Selection), ex-post verborgene Handlungen erfordern Verhaltensanreize (Moral Hazard). Diese saubere Zuordnung ist klausurkritisch.`
      }
    ]
  }
};
