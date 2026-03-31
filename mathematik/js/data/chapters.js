// ============================================================
// CHAPTERS & CONTENT DATA — Mathematik
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'funktionen', title: 'Funktionen & Algebra', cat: 'Grundlagen', short: 'Fkt.' },
  { id: 'ableitung', title: 'Differentialrechnung', cat: 'Analysis', short: 'Ableit.' },
  { id: 'optimierung', title: 'Optimierung', cat: 'Analysis', short: 'Opt.' },
  { id: 'lagrange', title: 'Lagrange-Methode', cat: 'Analysis', short: 'Lagrange' },
  { id: 'linalg', title: 'Lineare Algebra', cat: 'Algebra', short: 'Matrix' },
  { id: 'integral', title: 'Integralrechnung', cat: 'Analysis', short: 'Integ.' },
];

export const CONTENT = {
  funktionen: {
    motivation: 'Funktionen beschreiben die quantitativen Beziehungen zwischen ökonomischen Größen. Ohne sie lassen sich Nachfrage, Kosten und Nutzen nicht formal darstellen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Lineare Funktionen</h3>
      <p>Eine lineare Funktion hat die Form $f(x) = ax + b$. Die Steigung $a$ gibt an, um wie viel $y$ steigt, wenn $x$ um eine Einheit zunimmt. Ökonomisch: $a$ ist die <strong>marginale Rate</strong> (z.B. Grenzkosten bei linearer Kostenfunktion).</p>
      <p><strong>Nullstelle:</strong> $x_0 = -b/a$. <strong>Schnittpunkt zweier Geraden:</strong> Gleichsetzen und nach $x$ auflösen.</p>
    </div>
    <div class="section-block">
      <h3>Potenz- und Exponentialfunktionen</h3>
      <p>Die Potenzfunktion $f(x) = x^n$ ist zentral für Produktionsfunktionen (Cobb-Douglas: $Y = A K^\alpha L^{1-\alpha}$). Die Exponentialfunktion $e^x$ modelliert stetiges Wachstum. Rechenregeln:</p>
      <ul>
        <li>$x^a \cdot x^b = x^{a+b}$</li>
        <li>$(x^a)^b = x^{ab}$</li>
        <li>$e^{a+b} = e^a \cdot e^b$</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Logarithmus</h3>
      <p>Der natürliche Logarithmus $\ln x$ ist die Umkehrfunktion von $e^x$. In der Ökonomie dient er zur Linearisierung (log-log-Modelle: Koeffizienten sind Elastizitäten) und Wachstumsanalyse ($\ln Y_t - \ln Y_{t-1} \approx$ Wachstumsrate).</p>
      <ul>
        <li>$\ln(ab) = \ln a + \ln b$</li>
        <li>$\ln(a^n) = n \ln a$</li>
        <li>$\ln(e^x) = x$</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Inverse und Umkehrfunktion</h3>
      <p>Die Nachfragefunktion $Q(P)$ und ihre Inverse $P(Q)$ beschreiben denselben Zusammenhang — aber die Achsenzuordnung wechselt. In der Graphik steht $P$ typischerweise auf der Vertikalen (inverse Form). Bedingung: Die Funktion muss streng monoton sein, damit die Inverse existiert.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Umkehrfunktionen:</strong> Achten Sie darauf, ob Sie $P(Q)$ oder $Q(P)$ betrachten. In der Mikroökonomik steht meist die inverse Nachfrage $P(Q)$ auf der y-Achse. Verwechslung führt zu falschen Achsenbeschriftungen und Steigungsvorzeichen.</div>
      <div class="warn-box"><strong>Logarithmus von Null oder Negativem:</strong> $\ln 0$ und $\ln(-x)$ sind nicht definiert. In ökonomischen Modellen muss die Variable strikt positiv sein.</div>
    </div>
    `,
    formeln: [
      { label: 'Gerade', eq: String.raw`$$y = mx + n$$`, desc: 'Lineare Form' },
      { label: 'Cobb-Douglas', eq: String.raw`$$Y = A K^\alpha L^{1-\alpha}$$`, desc: 'Potenzfunktion in der Produktion' },
      { label: 'Log-Wachstum', eq: String.raw`$$g \approx \ln Y_t - \ln Y_{t-1}$$`, desc: 'Approximation der Wachstumsrate' }
    ],
    aufgaben: [
      {
        text: String.raw`Bestimmen Sie die Nullstelle der Funktion $f(x) = 2x - 10$ und interpretieren Sie sie als Marktgleichgewicht, wenn $f(x)$ die Überschussnachfrage ist.`,
        steps: [
          { text: `Interpretation: Was bedeutet die Nullstelle ökonomisch?`, eq: String.raw`\text{Überschussnachfrage = 0 → Markt geräumt.}` },
          { text: `Execution: $f(x) = 0$ lösen.`, eq: String.raw`2x = 10 \implies x = 5` },
          { text: `Validation: Vorzeichen links und rechts prüfen.`, eq: String.raw`f(4) = -2 < 0 \text{ (Überangebot)}, \; f(6) = 2 > 0 \text{ (Übernachfrage)}` }
        ],
        result: String.raw`Gleichgewicht bei $x = 5$. Links davon herrscht Überangebot, rechts Übernachfrage.`
      }
    ]
  },
  ableitung: {
    motivation: 'Ableitungen messen die marginale Veränderung. In der Ökonomie sind das Grenzkosten, Grenznutzen, Grenzproduktivität — jede „Grenz-" Größe ist eine Ableitung.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Definition und ökonomische Bedeutung</h3>
      <p>Die erste Ableitung $f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}$ gibt die Steigung der Tangente im Punkt $x$ an. Ökonomisch: <strong>Grenzkosten</strong> $MC = C'(Q)$, <strong>Grenzerlös</strong> $MR = R'(Q)$, <strong>Grenznutzen</strong> $MU = U'(x)$.</p>
      <p>Die Ableitung beantwortet: <em>Um wie viel ändert sich die Zielgröße, wenn die Kontrollvariable marginal zunimmt?</em></p>
    </div>
    <div class="section-block">
      <h3>Ableitungsregeln</h3>
      <ul>
        <li><strong>Potenzregel:</strong> $(x^n)' = nx^{n-1}$ — Standardregel für Polynome.</li>
        <li><strong>Produktregel:</strong> $(uv)' = u'v + uv'$ — nötig z.B. bei $R(Q) = P(Q) \cdot Q$.</li>
        <li><strong>Quotientenregel:</strong> $(u/v)' = (u'v - uv')/v^2$ — z.B. für Durchschnittskostenfunktionen.</li>
        <li><strong>Kettenregel:</strong> $[f(g(x))]' = f'(g(x)) \cdot g'(x)$ — bei geschachtelten Ausdrücken (z.B. $\ln(C(Q))$).</li>
      </ul>
      <p>Spezialfälle: $(\ln x)' = 1/x$, $(e^x)' = e^x$, $(e^{ax})' = ae^{ax}$.</p>
    </div>
    <div class="section-block">
      <h3>Zweite Ableitung und Krümmung</h3>
      <p>$f''(x)$ beschreibt die <strong>Krümmung</strong>:</p>
      <ul>
        <li>$f''(x) < 0$: Konkav (abnehmende Grenzerträge, z.B. typische Nutzenfunktion).</li>
        <li>$f''(x) > 0$: Konvex (zunehmende Grenzkosten, z.B. quadratische Kostenfunktion).</li>
      </ul>
      <p>Ökonomisch: Abnehmende Grenzerträge ($U'' < 0$) bedeuten, dass jede zusätzliche Einheit weniger Nutzen stiftet — Grundlage für Risikoaversion und sinkende Grenzrate der Substitution.</p>
    </div>
    <div class="section-block">
      <h3>Partielle Ableitungen</h3>
      <p>Bei Funktionen mehrerer Variablen (z.B. $f(x,y)$) wird nach einer Variablen abgeleitet, während die andere konstant gehalten wird: $\frac{\partial f}{\partial x}$. In der Ökonomie: Grenzproduktivität der Arbeit $MP_L = \frac{\partial Y}{\partial L}$.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Kettenregel vergessen:</strong> Bei $\frac{d}{dx}\ln(2x) = \frac{1}{2x} \cdot 2 = \frac{1}{x}$, nicht $\frac{1}{2x}$. Die innere Ableitung wird häufig vergessen.</div>
      <div class="warn-box"><strong>Partielle vs. totale Ableitung:</strong> $\frac{\partial f}{\partial x}$ hält $y$ konstant. Das totale Differential $df = f_x\,dx + f_y\,dy$ berücksichtigt Änderungen beider Variablen.</div>
    </div>
    `,
    formeln: [
      { label: 'Kettenregel', eq: String.raw`$$(f \circ g)' = f'(g(x)) \cdot g'(x)$$`, desc: 'Äußere mal innere Ableitung' },
      { label: 'Grenzkosten', eq: String.raw`$$MC(Q) = C'(Q)$$`, desc: 'Ökonomische Interpretation' }
    ],
    aufgaben: [
      {
        text: String.raw`Die Kostenfunktion sei $C(Q) = Q^3 - 6Q^2 + 15Q + 10$. Berechnen Sie Grenzkosten und Durchschnittskosten bei $Q=3$ und prüfen Sie deren Verhältnis.`,
        steps: [
          { text: `Grenzkosten: Ableiten.`, eq: String.raw`MC = 3Q^2 - 12Q + 15 \implies MC(3) = 27 - 36 + 15 = 6` },
          { text: `Durchschnittskosten:`, eq: String.raw`AC(3) = \frac{27 - 54 + 45 + 10}{3} = \frac{28}{3} \approx 9{,}33` },
          { text: `Interpretation: $MC < AC$ bei $Q=3$.`, eq: String.raw`\text{Durchschnittskosten fallen noch (MC zieht AC nach unten).}` }
        ],
        result: String.raw`$MC(3) = 6$, $AC(3) \approx 9{,}33$. Da $MC < AC$, sinken die Durchschnittskosten bei steigender Menge.`
      }
    ]
  },
  optimierung: {
    motivation: 'Ökonomisches Handeln bedeutet Optimieren unter Knappheit. Gewinnmaximierung, Nutzenmaximierung und Kostenminimierung folgen alle demselben mathematischen Prinzip.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Bedingung erster Ordnung (BEO)</h3>
      <p>Notwendige Bedingung für ein lokales Extremum im Inneren des Definitionsbereichs:</p>
      <div class="math-block">$$f'(x^*) = 0$$</div>
      <p>Ökonomisch: Im Optimum ist der marginale Zugewinn gleich Null. Beispiel Gewinn: $\pi'(Q) = MR(Q) - MC(Q) = 0$, also $MR = MC$.</p>
    </div>
    <div class="section-block">
      <h3>Bedingung zweiter Ordnung (BZO)</h3>
      <p>Hinreichende Bedingung: Die BEO allein unterscheidet nicht zwischen Maximum, Minimum und Sattelpunkt.</p>
      <ul>
        <li>$f''(x^*) < 0 \implies$ lokales <strong>Maximum</strong> (konkav — abnehmende Grenzerträge).</li>
        <li>$f''(x^*) > 0 \implies$ lokales <strong>Minimum</strong> (konvex — zunehmende Grenzkosten).</li>
        <li>$f''(x^*) = 0 \implies$ Test versagt, weitere Analyse nötig.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Optimierung bei mehreren Variablen</h3>
      <p>Für $f(x_1, x_2)$ müssen beide partiellen Ableitungen Null sein: $\frac{\partial f}{\partial x_1} = 0$, $\frac{\partial f}{\partial x_2} = 0$. Die BZO erfordert die Hesse-Matrix:</p>
      <div class="math-block">$$H = \begin{pmatrix} f_{11} & f_{12} \\ f_{21} & f_{22} \end{pmatrix}$$</div>
      <p>Maximum, wenn $f_{11} < 0$ und $\det(H) > 0$. Minimum, wenn $f_{11} > 0$ und $\det(H) > 0$.</p>
    </div>
    <div class="section-block">
      <h3>Ökonomische Anwendung: Gewinnmaximierung</h3>
      <p>Gewinnfunktion $\pi(Q) = R(Q) - C(Q)$. BEO: $R'(Q) = C'(Q)$, also $MR = MC$. BZO: $R''(Q) < C''(Q)$, also die Grenzkostenkurve muss die Grenzerlöskurve von unten schneiden.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>BEO reicht nicht:</strong> $f'(x) = 0$ findet auch Sattelpunkte und Minima. Ohne BZO-Prüfung ist die Aussage „Maximum gefunden" nicht gesichert.</div>
      <div class="warn-box"><strong>Randlösungen:</strong> Wenn der Definitionsbereich beschränkt ist (z.B. $Q \geq 0$), kann das Optimum am Rand liegen, wo $f'(x) \neq 0$ gilt. Die BEO findet nur innere Extrema.</div>
    </div>
    `,
    formeln: [
      { label: 'BEO', eq: String.raw`$$f'(x^*) = 0$$`, desc: 'Notwendige Bedingung' },
      { label: 'BZO', eq: String.raw`$$f''(x^*) < 0 \implies \text{Max}, \quad f''(x^*) > 0 \implies \text{Min}$$`, desc: 'Hinreichende Bedingung' },
      { label: 'Gewinnmaximum', eq: String.raw`$$MR(Q^*) = MC(Q^*)$$`, desc: 'Ökonomische BEO' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Monopolist hat die Nachfrage $P(Q) = 100 - 2Q$ und die Kosten $C(Q) = Q^2 + 20Q$. Bestimmen Sie die gewinnmaximale Menge und den Gewinn.`,
        steps: [
          { text: `Erlösfunktion aufstellen:`, eq: String.raw`R(Q) = P \cdot Q = 100Q - 2Q^2` },
          { text: `BEO: $MR = MC$.`, eq: String.raw`100 - 4Q = 2Q + 20 \implies 6Q = 80 \implies Q^* = \frac{40}{3} \approx 13{,}33` },
          { text: `BZO prüfen:`, eq: String.raw`R'' = -4, \; C'' = 2 \implies R'' < C'' \; \checkmark` },
          { text: `Gewinn berechnen:`, eq: String.raw`\pi = R(Q^*) - C(Q^*) \approx 533{,}33` }
        ],
        result: String.raw`$Q^* \approx 13{,}3$, $\pi \approx 533{,}33$. Der Monopolist produziert dort, wo $MR = MC$.`
      }
    ]
  },
  lagrange: {
    motivation: 'In der Ökonomie sind Ressourcen begrenzt. Die Lagrange-Methode löst Optimierungsprobleme unter Gleichungsnebenbedingungen — Haushaltsoptimum, Kostenminimierung, Portfoliowahl.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Das Problem</h3>
      <p>Maximiere $f(x,y)$ unter der Nebenbedingung $g(x,y) = c$. Beispiel: Maximiere Nutzen $U(x_1, x_2)$ unter dem Budget $p_1 x_1 + p_2 x_2 = m$.</p>
    </div>
    <div class="section-block">
      <h3>Lagrange-Funktion und BEOs</h3>
      <p>Konstruiere die Lagrange-Funktion:</p>
      <div class="math-block">$$\mathcal{L}(x, y, \lambda) = f(x, y) + \lambda\,[c - g(x, y)]$$</div>
      <p>Bedingungen erster Ordnung (3 Gleichungen, 3 Unbekannte):</p>
      <div class="math-block">$$\frac{\partial \mathcal{L}}{\partial x} = 0, \quad \frac{\partial \mathcal{L}}{\partial y} = 0, \quad \frac{\partial \mathcal{L}}{\partial \lambda} = c - g(x,y) = 0$$</div>
    </div>
    <div class="section-block">
      <h3>Interpretation von λ (Schattenpreis)</h3>
      <p>$\lambda$ gibt an, um wie viel sich der optimale Zielwert ändert, wenn die Nebenbedingung marginal gelockert wird: $\lambda = \frac{df^*}{dc}$. Ökonomisch: <strong>Grenznutzen des Einkommens</strong> beim Haushaltsoptimum. Wenn $\lambda = 3$, bringt ein zusätzlicher Euro Budget 3 Nutzeneinheiten.</p>
    </div>
    <div class="section-block">
      <h3>Tangentialbedingung</h3>
      <p>Aus den ersten beiden BEOs folgt die <strong>Tangentialbedingung</strong>: Im Optimum ist die Grenzrate der Substitution gleich dem Preisverhältnis:</p>
      <div class="math-block">$$\frac{f_x}{f_y} = \frac{g_x}{g_y} \quad \Rightarrow \quad GRS = \frac{p_1}{p_2}$$</div>
      <p>Grafisch: Die Indifferenzkurve tangiert die Budgetgerade.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Nebenbedingung vergessen:</strong> Die dritte BEO ($\partial \mathcal{L}/\partial \lambda = 0$) liefert genau die Nebenbedingung zurück. Sie vergessen heißt, die Lösung liegt nicht auf dem Budget.</div>
      <div class="warn-box"><strong>Vorzeichen von λ:</strong> Konvention: Wenn die Lagrange-Funktion als $f + \lambda(c-g)$ geschrieben wird, ist $\lambda > 0$ beim Maximierungsproblem mit bindender Nebenbedingung. Bei $f - \lambda(g-c)$ ändert sich das Vorzeichen.</div>
    </div>
    `,
    formeln: [
      { label: 'Lagrange-Ansatz', eq: String.raw`$$\mathcal{L} = f(x,y) + \lambda\,[c - g(x,y)]$$`, desc: 'Schattenpreis-Optimierung' },
      { label: 'Tangentialbedingung', eq: String.raw`$$\frac{f_x}{f_y} = \frac{g_x}{g_y}$$`, desc: 'GRS = Preisverhältnis' }
    ],
    aufgaben: [
      {
        text: String.raw`Maximieren Sie $U(x,y) = x^{0{,}5} y^{0{,}5}$ unter $2x + 4y = 100$. Bestimmen Sie die optimalen Mengen und interpretieren Sie $\lambda$.`,
        steps: [
          { text: `BEOs aufstellen:`, eq: String.raw`\frac{0{,}5\,y^{0{,}5}}{x^{0{,}5}} = 2\lambda, \quad \frac{0{,}5\,x^{0{,}5}}{y^{0{,}5}} = 4\lambda, \quad 2x + 4y = 100` },
          { text: `Tangentialbedingung: Teile BEO 1 durch BEO 2.`, eq: String.raw`\frac{y}{x} = \frac{2}{4} = \frac{1}{2} \implies x = 2y` },
          { text: `In NB einsetzen:`, eq: String.raw`2(2y) + 4y = 100 \implies 8y = 100 \implies y = 12{,}5, \; x = 25` },
          { text: `$\lambda$ bestimmen: Aus BEO 1.`, eq: String.raw`\lambda = \frac{0{,}5 \cdot 12{,}5^{0{,}5}}{25^{0{,}5} \cdot 2} = \frac{0{,}5 \cdot 3{,}54}{5 \cdot 2} \approx 0{,}177` }
        ],
        result: String.raw`$x^* = 25$, $y^* = 12{,}5$. $\lambda \approx 0{,}18$: Ein zusätzlicher Euro Budget erhöht den Nutzen um ca. $0{,}18$ Einheiten.`
      }
    ]
  },
  linalg: {
    motivation: 'Lineare Algebra ist das Fundament für multivariate Analyse, Input-Output-Modelle und Ökonometrie. Matrizen komprimieren lineare Gleichungssysteme in handliche Notation.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Matrizen und Vektoren</h3>
      <p>Eine Matrix $A$ der Dimension $m \times n$ hat $m$ Zeilen und $n$ Spalten. Ein Vektor ist ein Spezialfall ($n \times 1$ oder $1 \times n$).</p>
      <div class="math-block">$$A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}$$</div>
    </div>
    <div class="section-block">
      <h3>Matrixoperationen</h3>
      <ul>
        <li><strong>Addition:</strong> Elementweise, nur bei gleicher Dimension.</li>
        <li><strong>Multiplikation:</strong> $(A \cdot B)_{ij} = \sum_k a_{ik} b_{kj}$. Voraussetzung: Spalten von $A$ = Zeilen von $B$.</li>
        <li><strong>Transponierte:</strong> Zeilen und Spalten tauschen: $(A^T)_{ij} = a_{ji}$.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Determinante und Inverse</h3>
      <p>Für eine $2 \times 2$-Matrix:</p>
      <div class="math-block">$$\det(A) = a_{11}a_{22} - a_{12}a_{21}$$</div>
      <p>Die Inverse existiert genau dann, wenn $\det(A) \neq 0$:</p>
      <div class="math-block">$$A^{-1} = \frac{1}{\det(A)} \begin{pmatrix} a_{22} & -a_{12} \\ -a_{21} & a_{11} \end{pmatrix}$$</div>
    </div>
    <div class="section-block">
      <h3>Lineare Gleichungssysteme</h3>
      <p>$Ax = b$ lösen: Falls $A$ invertierbar, ist $x = A^{-1}b$. In der Ökonometrie: Der OLS-Schätzer in Matrixform ist $\hat{\beta} = (X'X)^{-1}X'y$.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Multiplikation nicht kommutativ:</strong> $AB \neq BA$ im Allgemeinen. Achten Sie auf die Reihenfolge, besonders bei Transponierung: $(AB)^T = B^T A^T$.</div>
    </div>
    `,
    formeln: [
      { label: 'Determinante (2×2)', eq: String.raw`$$\det(A) = a_{11}a_{22} - a_{12}a_{21}$$`, desc: 'Existenz der Inversen' },
      { label: 'OLS-Schätzer (Matrix)', eq: String.raw`$$\hat{\beta} = (X'X)^{-1}X'y$$`, desc: 'Ökonometrische Anwendung' }
    ],
    aufgaben: [
      {
        text: String.raw`Berechnen Sie die Inverse von $A = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$.`,
        steps: [
          { text: `Determinante:`, eq: String.raw`\det(A) = 3 \cdot 4 - 1 \cdot 2 = 10` },
          { text: `Adjunkte bilden und durch det teilen:`, eq: String.raw`A^{-1} = \frac{1}{10}\begin{pmatrix} 4 & -1 \\ -2 & 3 \end{pmatrix}` }
        ],
        result: String.raw`$A^{-1} = \begin{pmatrix} 0{,}4 & -0{,}1 \\ -0{,}2 & 0{,}3 \end{pmatrix}$.`
      }
    ]
  },
  integral: {
    motivation: 'Integration berechnet Flächen unter Kurven. Ökonomisch sind das Konsumenten- und Produzentenrente, kumulierte Ströme und Barwerte stetiger Zahlungen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Bestimmtes Integral</h3>
      <p>Das bestimmte Integral $\int_a^b f(x)\,dx$ gibt die vorzeichenbehaftete Fläche zwischen $f(x)$ und der x-Achse im Intervall $[a, b]$ an.</p>
    </div>
    <div class="section-block">
      <h3>Stammfunktion (Hauptsatz der Analysis)</h3>
      <p>Wenn $F'(x) = f(x)$, dann:</p>
      <div class="math-block">$$\int_a^b f(x)\,dx = F(b) - F(a)$$</div>
      <p>Wichtige Stammfunktionen:</p>
      <ul>
        <li>$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ (für $n \neq -1$)</li>
        <li>$\int \frac{1}{x}\,dx = \ln|x| + C$</li>
        <li>$\int e^x\,dx = e^x + C$</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Ökonomische Anwendung: Konsumentenrente</h3>
      <p>Bei inverser Nachfrage $P(Q)$ und Gleichgewichtspreis $p^*$, Menge $Q^*$:</p>
      <div class="math-block">$$KR = \int_0^{Q^*} P(Q)\,dQ - p^* \cdot Q^*$$</div>
    </div>
    <div class="section-block">
      <h3>Integrationstechniken</h3>
      <ul>
        <li><strong>Substitution:</strong> $\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$ mit $u = g(x)$.</li>
        <li><strong>Partielle Integration:</strong> $\int u\,dv = uv - \int v\,du$.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Vorzeichen:</strong> Flächen unterhalb der x-Achse gehen negativ ein. Für den ökonomischen Flächeninhalt (z.B. Rente) muss ggf. der Betrag $|f(x)|$ integriert werden.</div>
    </div>
    `,
    formeln: [
      { label: 'Hauptsatz', eq: String.raw`$$\int_a^b f(x)\,dx = F(b) - F(a)$$`, desc: 'Bestimmtes Integral' },
      { label: 'Konsumentenrente', eq: String.raw`$$KR = \int_0^{Q^*} P(Q)\,dQ - p^* Q^*$$`, desc: 'Fläche unter Nachfragekurve' }
    ],
    aufgaben: [
      {
        text: String.raw`Die inverse Nachfrage sei $P(Q) = 100 - 2Q$. Der Gleichgewichtspreis ist $p^* = 40$, die Menge $Q^* = 30$. Berechnen Sie die Konsumentenrente.`,
        steps: [
          { text: `Integral berechnen:`, eq: String.raw`\int_0^{30}(100-2Q)\,dQ = [100Q - Q^2]_0^{30} = 3000 - 900 = 2100` },
          { text: `Rechteckfläche abziehen:`, eq: String.raw`KR = 2100 - 40 \cdot 30 = 2100 - 1200 = 900` }
        ],
        result: String.raw`$KR = 900$ Geldeinheiten.`
      }
    ]
  }
};
