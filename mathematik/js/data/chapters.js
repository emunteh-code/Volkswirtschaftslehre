// ============================================================
// CHAPTERS & CONTENT DATA — Mathematik
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'funktionen_grundlagen', title: 'Funktionen: linear & Potenz/Exp', cat: 'Grundlagen', short: 'Fkt. I' },
  { id: 'logarithmus_umkehr', title: 'Logarithmus & Umkehrfunktion', cat: 'Grundlagen', short: 'Fkt. II' },
  { id: 'ableitung', title: 'Differentialrechnung', cat: 'Analysis', short: 'Ableit.' },
  { id: 'optimierung', title: 'Optimierung', cat: 'Analysis', short: 'Opt.' },
  { id: 'lagrange', title: 'Lagrange-Methode', cat: 'Analysis', short: 'Lagrange' },
  { id: 'linalg_matrizen', title: 'Lineare Algebra I: Matrizen', cat: 'Algebra', short: 'LA I' },
  { id: 'linalg_det_inverse_lgs', title: 'Lineare Algebra II: Det, Inverse, LGS', cat: 'Algebra', short: 'LA II' },
  { id: 'integral', title: 'Integralrechnung', cat: 'Analysis', short: 'Integ.' },
];

export const CONTENT = {
  funktionen_grundlagen: {
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
    `,
    formeln: [
      { label: 'Gerade', eq: String.raw`$$y = mx + n$$`, desc: 'Lineare Form', variables: { m: 'Steigung', n: 'y-Achsenabschnitt' } },
      { label: 'Cobb-Douglas', eq: String.raw`$$Y = A K^\alpha L^{1-\alpha}$$`, desc: 'Potenzfunktion in der Produktion', variables: { A: 'Totale Faktorproduktivität', K: 'Kapital', L: 'Arbeit', alpha: 'Kapitalanteil' } },
    ],
    aufgaben: [
      {
        text: String.raw`Bestimmen Sie die Nullstelle der Funktion $f(x) = 2x - 10$ und interpretieren Sie sie als Marktgleichgewicht, wenn $f(x)$ die Überschussnachfrage ist.`,
        steps: [
          { text: `Interpretation: Was bedeutet die Nullstelle ökonomisch?`, eq: String.raw`\text{Überschussnachfrage} = 0 \implies \text{Markt geräumt.}` },
          { text: `Execution: $f(x) = 0$ lösen.`, eq: String.raw`2x = 10 \implies x = 5` },
          { text: `Validation: Vorzeichen links und rechts prüfen.`, eq: String.raw`f(4) = -2 < 0 \text{ (Überangebot)}, \; f(6) = 2 > 0 \text{ (Übernachfrage)}` }
        ],
        result: String.raw`Gleichgewicht bei $x = 5$. Links davon herrscht Überangebot, rechts Übernachfrage.`
      },
      {
        text: String.raw`Eine Cobb-Douglas-Produktionsfunktion lautet $Y = 2K^{0{,}5}L^{0{,}5}$. Berechnen Sie die Produktion bei $K=4$, $L=9$ sowie die Grenzproduktivität der Arbeit. Interpretieren Sie das Ergebnis.`,
        steps: [
          { text: `Output berechnen:`, eq: String.raw`Y = 2 \cdot 4^{0{,}5} \cdot 9^{0{,}5} = 2 \cdot 2 \cdot 3 = 12` },
          { text: `Grenzproduktivität der Arbeit: Partiell nach $L$ ableiten.`, eq: String.raw`MP_L = \frac{\partial Y}{\partial L} = 2 \cdot 0{,}5 \cdot K^{0{,}5} \cdot L^{-0{,}5} = \frac{K^{0{,}5}}{L^{0{,}5}}` },
          { text: `Einsetzen ($K=4$, $L=9$):`, eq: String.raw`MP_L = \frac{2}{3} \approx 0{,}67` }
        ],
        result: String.raw`$Y=12$, $MP_L = \tfrac{2}{3}$. Jede zusätzliche Arbeitsstunde erhöht die Produktion um $\tfrac{2}{3}$ Einheiten.`
      },
      {
        text: String.raw`Bestimmen Sie alle reellen Nullstellen von $f(x) = x^2 - 5x + 6$ und interpretieren Sie sie ökonomisch als Break-Even-Punkte.`,
        steps: [
          { text: `Quadratische Formel anwenden:`, eq: String.raw`x_{1,2} = \frac{5 \pm \sqrt{25 - 24}}{2} = \frac{5 \pm 1}{2}` },
          { text: `Nullstellen berechnen:`, eq: String.raw`x_1 = \frac{5-1}{2} = 2, \quad x_2 = \frac{5+1}{2} = 3` },
          { text: `Verifikation durch Einsetzen:`, eq: String.raw`f(2) = 4 - 10 + 6 = 0\; \checkmark \qquad f(3) = 9 - 15 + 6 = 0\; \checkmark` },
          { text: `Faktorisierte Form bestätigen:`, eq: String.raw`f(x) = (x-2)(x-3)` }
        ],
        result: String.raw`Nullstellen bei $x_1 = 2$ und $x_2 = 3$. Ökonomisch: Wenn $f(x)$ den Gewinn darstellt (Erlös minus Kosten), sind dies die beiden Break-Even-Punkte, bei denen das Unternehmen kostendeckend arbeitet.`
      },
      {
        text: String.raw`Gegeben sei $Y = A \cdot K^\alpha \cdot L^{1-\alpha}$ mit $0 < \alpha < 1$. Berechnen Sie die Grenzproduktivitäten $MP_K$ und $MP_L$ und zeigen Sie, dass $MP_K \cdot K + MP_L \cdot L = Y$ gilt (Euler-Theorem für konstante Skalenerträge).`,
        steps: [
          { text: `Grenzproduktivität des Kapitals:`, eq: String.raw`MP_K = \frac{\partial Y}{\partial K} = \alpha A K^{\alpha-1} L^{1-\alpha} = \alpha \frac{Y}{K}` },
          { text: `Grenzproduktivität der Arbeit:`, eq: String.raw`MP_L = \frac{\partial Y}{\partial L} = (1-\alpha) A K^\alpha L^{-\alpha} = (1-\alpha)\frac{Y}{L}` },
          { text: `Euler-Theorem prüfen: Faktoren mit GPs multiplizieren.`, eq: String.raw`MP_K \cdot K + MP_L \cdot L = \alpha \frac{Y}{K} \cdot K + (1-\alpha)\frac{Y}{L} \cdot L` },
          { text: `Vereinfachen:`, eq: String.raw`= \alpha Y + (1-\alpha)Y = Y \; \checkmark` }
        ],
        result: String.raw`$MP_K \cdot K + MP_L \cdot L = Y$. Das Euler-Theorem besagt: Bei konstanten Skalenerträgen ($\alpha + (1-\alpha) = 1$) erschöpfen die Faktorentlohnungen zu Grenzproduktivitäten genau den gesamten Output — keine Übergewinne möglich (Nullgewinn-Theorem).`
      }
    ]
  },
  logarithmus_umkehr: {
    motivation: 'Logarithmen und Umkehrfunktionen ordnen multiplikative Zusammenhänge und alternative Darstellungen derselben ökonomischen Relation (z.B. $Q(P)$ vs. $P(Q)$) einander zu — Grundlage für Elastizitäten und Wachstumsraten.',
    theorie: String.raw`
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
      { label: 'Log-Wachstum', eq: String.raw`$$g \approx \ln Y_t - \ln Y_{t-1}$$`, desc: 'Approximation der Wachstumsrate', variables: { g: 'Wachstumsrate', Y_t: 'Output in Periode t' } },
    ],
    aufgaben: [
      {
        text: String.raw`Drücken Sie $\ln\left(\dfrac{x^3 \sqrt{y}}{z}\right)$ für $x,y,z > 0$ mit den Logarithmengesetzen durch $\ln x$, $\ln y$ und $\ln z$ aus.`,
        steps: [
          { text: `Quotient und Produkt zerlegen.`, eq: String.raw`\ln(x^3\sqrt{y}) - \ln z` },
          { text: `Potenzen aus dem Logarithmus ziehen.`, eq: String.raw`3\ln x + \tfrac{1}{2}\ln y - \ln z` },
        ],
        result: String.raw`$\ln\left(\dfrac{x^3 \sqrt{y}}{z}\right) = 3\ln x + \tfrac{1}{2}\ln y - \ln z$.`
      },
    ],
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
      { label: 'Kettenregel', eq: String.raw`$$(f \circ g)' = f'(g(x)) \cdot g'(x)$$`, desc: 'Äußere mal innere Ableitung', variables: { f: 'äußere Funktion', g: 'innere Funktion' } },
      { label: 'Grenzkosten', eq: String.raw`$$MC(Q) = C'(Q)$$`, desc: 'Ökonomische Interpretation', variables: { C: 'Kostenfunktion', Q: 'Menge' } }
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
      },
      {
        text: String.raw`Die Nutzenfunktion sei $U(x) = \ln(x)$ mit $x > 0$. Bestimmen Sie den Grenznutzen bei $x=5$, prüfen Sie die zweite Ableitung und erklären Sie, warum daraus Risikoaversion folgt.`,
        steps: [
          { text: `Grenznutzen: Erste Ableitung.`, eq: String.raw`MU(x) = U'(x) = \frac{1}{x} \implies MU(5) = 0{,}2` },
          { text: `Zweite Ableitung prüfen.`, eq: String.raw`U''(x) = -\frac{1}{x^2} < 0 \text{ für alle } x > 0` },
          { text: `Schlussfolgerung: $U'' < 0$ bedeutet konkave Nutzenfunktion.`, eq: String.raw`E[U(x)] < U(E[x]) \implies \text{Risikoaversion (Jensen's Inequality).}` }
        ],
        result: String.raw`$MU(5) = 0{,}2$, $U'' < 0$: konkave Nutzenfunktion. Der Grenznutzen ist positiv, aber abnehmend — jeder zusätzliche Euro stiftet weniger Zusatznutzen. Daraus folgt Risikoaversion.`
      },
      {
        text: String.raw`Gewinnmaximierung: Gegeben $G(Q) = -Q^2 + 8Q - 10$. Finden Sie die gewinnmaximale Menge $Q^*$ und prüfen Sie mittels zweiter Ableitung, ob es sich um ein Maximum handelt.`,
        steps: [
          { text: `BEO: Erste Ableitung gleich Null setzen.`, eq: String.raw`G'(Q) = -2Q + 8 = 0 \implies Q^* = 4` },
          { text: `BZO: Zweite Ableitung berechnen.`, eq: String.raw`G''(Q) = -2 < 0 \implies \text{lokales Maximum} \; \checkmark` },
          { text: `Maximalen Gewinn berechnen:`, eq: String.raw`G(4) = -16 + 32 - 10 = 6` },
          { text: `Ökonomische Interpretation: $MR = MC$ im Optimum.`, eq: String.raw`G'(Q) = MR - MC = 0 \iff MR = MC` }
        ],
        result: String.raw`$Q^* = 4$, $G_{\max} = 6$. Die zweite Ableitung $G'' = -2 < 0$ bestätigt das Maximum. Das Unternehmen wählt die Menge, bei der Grenzerlös gleich Grenzkosten ist.`
      },
      {
        text: String.raw`Elastizität: Gegeben $Q = 100 - 2P$. Berechnen Sie die Preiselastizität der Nachfrage bei $P = 20$ und interpretieren Sie das Ergebnis.`,
        steps: [
          { text: `Ableitung $dQ/dP$ bestimmen:`, eq: String.raw`\frac{dQ}{dP} = -2` },
          { text: `Menge bei $P=20$ berechnen:`, eq: String.raw`Q(20) = 100 - 40 = 60` },
          { text: `Preiselastizität berechnen:`, eq: String.raw`\varepsilon = \frac{dQ}{dP} \cdot \frac{P}{Q} = -2 \cdot \frac{20}{60} = -\frac{2}{3} \approx -0{,}67` },
          { text: `Interpretation: $|\varepsilon| < 1$ bedeutet unelastische Nachfrage.`, eq: String.raw`|\varepsilon| = 0{,}67 < 1 \implies \text{inelastisch: } 1\% \text{ Preisanstieg} \implies 0{,}67\% \text{ Mengenrückgang}` }
        ],
        result: String.raw`$\varepsilon \approx -0{,}67$. Die Nachfrage ist bei $P=20$ preisunelastisch: Ein Preisanstieg um $1\%$ reduziert die nachgefragte Menge nur um $0{,}67\%$. Der Gesamterlös steigt bei Preiserhöhung (da $|\varepsilon| < 1$).`
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
      { label: 'BEO', eq: String.raw`$$f'(x^*) = 0$$`, desc: 'Notwendige Bedingung', variables: { x_star: 'Kandidat für Extremum' } },
      { label: 'BZO', eq: String.raw`$$f''(x^*) < 0 \implies \text{Max}, \quad f''(x^*) > 0 \implies \text{Min}$$`, desc: 'Hinreichende Bedingung', variables: { f_pp: 'zweite Ableitung im Kandidatpunkt' } },
      { label: 'Gewinnmaximum', eq: String.raw`$$MR(Q^*) = MC(Q^*)$$`, desc: 'Ökonomische BEO', variables: { MR: 'Grenzerlös', MC: 'Grenzkosten' } }
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
      },
      {
        text: String.raw`Ein Unternehmen mit Kostenfunktion $C(Q) = 0{,}5Q^2 + 2Q + 10$ erhält einen fixen Marktpreis $P = 8$ (Wettbewerb). Bestimmen Sie die gewinnmaximale Menge $Q^*$, den Gewinn und prüfen Sie die BZO.`,
        steps: [
          { text: `Gewinnfunktion aufstellen:`, eq: String.raw`\pi(Q) = 8Q - (0{,}5Q^2 + 2Q + 10) = 6Q - 0{,}5Q^2 - 10` },
          { text: `BEO: $\pi'(Q) = 0$.`, eq: String.raw`\pi'(Q) = 6 - Q = 0 \implies Q^* = 6` },
          { text: `BZO und Gewinn:`, eq: String.raw`\pi''(Q) = -1 < 0 \; \checkmark \qquad \pi(6) = 36 - 18 - 10 = 8` }
        ],
        result: String.raw`$Q^* = 6$, $\pi = 8$. Die BZO ($\pi'' < 0$) bestätigt das Maximum.`
      },
      {
        text: String.raw`Kostenfunktion $C(Q) = Q^3 - 6Q^2 + 15Q + 10$. Finden Sie das Minimum der Grenzkosten (d.h. die Menge, bei der $MC$ minimal ist).`,
        steps: [
          { text: `Grenzkosten berechnen:`, eq: String.raw`MC(Q) = C'(Q) = 3Q^2 - 12Q + 15` },
          { text: `BEO für MC-Minimum: $MC'(Q) = 0$.`, eq: String.raw`MC'(Q) = 6Q - 12 = 0 \implies Q^* = 2` },
          { text: `BZO prüfen: $MC''(Q) > 0$?`, eq: String.raw`MC''(Q) = 6 > 0 \implies \text{Minimum bei } Q^* = 2 \; \checkmark` },
          { text: `Minimalwert der GK:`, eq: String.raw`MC(2) = 3 \cdot 4 - 12 \cdot 2 + 15 = 12 - 24 + 15 = 3` }
        ],
        result: String.raw`Das Minimum der Grenzkosten liegt bei $Q^* = 2$ mit $MC_{\min} = 3$. Ökonomisch ist dies der Wendepunkt der Kostenfunktion — links davon fallen die Grenzkosten, rechts davon steigen sie. Der Betriebspunkt minimaler Grenzkosten entspricht dem effizientesten Produktionsniveau.`
      },
      {
        text: String.raw`Haushaltsproblem: $U = x_1 \cdot x_2$, Budget $2x_1 + 3x_2 = 60$. Lösen Sie ohne Lagrange-Methode durch direkte Substitution und bestimmen Sie das Nutzenmaximum.`,
        steps: [
          { text: `$x_1$ aus Budgetrestriktion isolieren:`, eq: String.raw`x_1 = \frac{60 - 3x_2}{2} = 30 - \frac{3}{2}x_2` },
          { text: `In Nutzenfunktion einsetzen:`, eq: String.raw`U(x_2) = \left(30 - \frac{3}{2}x_2\right) \cdot x_2 = 30x_2 - \frac{3}{2}x_2^2` },
          { text: `BEO: $dU/dx_2 = 0$.`, eq: String.raw`\frac{dU}{dx_2} = 30 - 3x_2 = 0 \implies x_2^* = 10` },
          { text: `$x_1^*$ und maximalen Nutzen berechnen:`, eq: String.raw`x_1^* = 30 - \frac{3}{2} \cdot 10 = 15 \qquad U^* = 15 \cdot 10 = 150` }
        ],
        result: String.raw`$x_1^* = 15$, $x_2^* = 10$, $U^* = 150$. Budget-Check: $2 \cdot 15 + 3 \cdot 10 = 30 + 30 = 60$ ✓. Die Substitutionsmethode liefert dasselbe Ergebnis wie Lagrange, ist aber direkt anwendbar, wenn nur eine Nebenbedingung vorliegt.`
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
      { label: 'Lagrange-Ansatz', eq: String.raw`$$\mathcal{L} = f(x,y) + \lambda\,[c - g(x,y)]$$`, desc: 'Schattenpreis-Optimierung', variables: { lambda: 'Schattenpreis (Grenznutzen der NB)', c: 'Nebenbedingungsniveau' } },
      { label: 'Tangentialbedingung', eq: String.raw`$$\frac{f_x}{f_y} = \frac{g_x}{g_y}$$`, desc: 'GRS = Preisverhältnis', variables: { f_x: 'partielle Ableitung nach x', g_x: 'partielle Ableitung der NB nach x' } }
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
      },
      {
        text: String.raw`Ein Unternehmen minimiert Kosten $C = 4K + L$ unter der Produktionsnebenbedingung $K^{0{,}5}L^{0{,}5} = 4$. Bestimmen Sie $K^*$, $L^*$ und die minimalen Kosten.`,
        steps: [
          { text: `Kostenminimierungsbedingung: $\frac{MP_K}{MP_L} = \frac{w_K}{w_L}$.`, eq: String.raw`\frac{0{,}5 K^{-0{,}5}L^{0{,}5}}{0{,}5 K^{0{,}5}L^{-0{,}5}} = \frac{L}{K} = \frac{4}{1} \implies L = 4K` },
          { text: `In Nebenbedingung einsetzen:`, eq: String.raw`K^{0{,}5}(4K)^{0{,}5} = 4 \implies K \cdot \sqrt{4} = 4 \implies 2K = 4 \implies K^* = 2,\; L^* = 8` },
          { text: `Minimale Kosten berechnen:`, eq: String.raw`C^* = 4 \cdot 2 + 8 = 16` }
        ],
        result: String.raw`$K^* = 2$, $L^* = 8$, $C_{\min} = 16$. Das Unternehmen substituiert das teurere Kapital (Preis 4) durch den günstigeren Faktor Arbeit (Preis 1) bis zum optimalen Verhältnis $L/K = 4$.`
      },
      {
        text: String.raw`Produktionsminimierung: Minimiere $C = 2K + 3L$ unter der Nebenbedingung $K^{0{,}5}L^{0{,}5} = 10$. Bestimmen Sie das optimale Faktoreinsatzverhältnis und die Mindestkosten.`,
        steps: [
          { text: `Lagrange-Funktion aufstellen:`, eq: String.raw`\mathcal{L} = 2K + 3L + \lambda(10 - K^{0{,}5}L^{0{,}5})` },
          { text: `BEOs ableiten und gleichsetzen:`, eq: String.raw`\frac{\partial \mathcal{L}}{\partial K} = 2 - \lambda \cdot 0{,}5 K^{-0{,}5}L^{0{,}5} = 0 \quad \frac{\partial \mathcal{L}}{\partial L} = 3 - \lambda \cdot 0{,}5 K^{0{,}5}L^{-0{,}5} = 0` },
          { text: `Tangentialbedingung: Teile erste BEO durch zweite.`, eq: String.raw`\frac{2}{3} = \frac{L}{K} \implies L = \frac{2K}{3}` },
          { text: `In NB einsetzen und lösen:`, eq: String.raw`K^{0{,}5}\left(\frac{2K}{3}\right)^{0{,}5} = 10 \implies K\sqrt{\frac{2}{3}} = 10 \implies K^* = 10\sqrt{\frac{3}{2}} \approx 12{,}25` },
          { text: `$L^*$ und Mindestkosten:`, eq: String.raw`L^* = \frac{2 \cdot 12{,}25}{3} \approx 8{,}16 \qquad C^* = 2(12{,}25) + 3(8{,}16) \approx 49{,}0` }
        ],
        result: String.raw`$K^* \approx 12{,}25$, $L^* \approx 8{,}16$, $C^*_{\min} \approx 49$. Das optimale Verhältnis $L/K = 2/3$ entspricht dem inversen Preisverhältnis gewichtet nach Produktionselastizitäten — hier gleiche Exponententen, also $L/K = w_K/w_L = 2/3$.`
      },
      {
        text: String.raw`Allgemeine Cobb-Douglas-Nutzenmaximierung: $U = x_1^\alpha x_2^{1-\alpha}$, Budget $p_1 x_1 + p_2 x_2 = m$. Leiten Sie die allgemeinen Marshallschen Nachfragefunktionen her.`,
        steps: [
          { text: `Tangentialbedingung aufstellen: $MU_1/MU_2 = p_1/p_2$.`, eq: String.raw`\frac{\alpha x_2}{(1-\alpha)x_1} = \frac{p_1}{p_2} \implies p_2 \alpha x_2 = p_1(1-\alpha)x_1` },
          { text: `$x_2$ durch $x_1$ ausdrücken:`, eq: String.raw`x_2 = \frac{p_1(1-\alpha)x_1}{p_2 \alpha}` },
          { text: `In Budgetrestriktion einsetzen:`, eq: String.raw`p_1 x_1 + p_1(1-\alpha)x_1/\alpha = m \implies p_1 x_1 \cdot \frac{1}{\alpha} = m \implies x_1^* = \frac{\alpha m}{p_1}` },
          { text: `$x_2^*$ analog ableiten:`, eq: String.raw`x_2^* = \frac{(1-\alpha)m}{p_2}` }
        ],
        result: String.raw`Marshallsche Nachfragefunktionen: $x_1^* = \frac{\alpha m}{p_1}$ und $x_2^* = \frac{(1-\alpha)m}{p_2}$. Der Haushalt gibt einen festen Anteil $\alpha$ seines Einkommens für Gut 1 und $(1-\alpha)$ für Gut 2 aus — unabhängig von den absoluten Preisen (Cobb-Douglas-Eigenschaft konstanter Ausgabenanteile).`
      }
    ]
  },
  linalg_matrizen: {
    motivation: 'Matrizen und Vektoren fassen lineare Strukturen kompakt; Matrixalgebra ist die Sprache von Gleichungssystemen, Input-Output-Modellen und der Regressionsrechnung.',
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
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Multiplikation nicht kommutativ:</strong> $AB \neq BA$ im Allgemeinen. Achten Sie auf die Reihenfolge, besonders bei Transponierung: $(AB)^T = B^T A^T$.</div>
    </div>
    `,
    formeln: [
      { label: 'Matrixmultiplikation', eq: String.raw`$$(AB)_{ij} = \sum_k a_{ik} b_{kj}$$`, desc: 'Zeile mal Spalte', variables: { A: 'Matrix', B: 'Matrix' } },
    ],
    aufgaben: [],
  },
  linalg_det_inverse_lgs: {
    motivation: 'Determinanten und inverse Matrizen entscheiden über Lösbarkeit von $Ax=b$; dieselbe Matrixlogik steckt hinter dem OLS-Operator in der Ökonometrie.',
    theorie: String.raw`
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
      <div class="warn-box"><strong>Singuläre Matrizen:</strong> Wenn $\det(A) = 0$, existiert keine Inverse. Das Gleichungssystem $Ax = b$ hat dann entweder keine oder unendlich viele Lösungen — multikollineare Regressoren führen in der Ökonometrie zu genau diesem Problem.</div>
    </div>
    `,
    formeln: [
      { label: 'Determinante (2×2)', eq: String.raw`$$\det(A) = a_{11}a_{22} - a_{12}a_{21}$$`, desc: 'Existenz der Inversen', variables: { a_ij: 'Matrixelement in Zeile i, Spalte j' } },
      { label: 'OLS-Schätzer (Matrix)', eq: String.raw`$$\hat{\beta} = (X'X)^{-1}X'y$$`, desc: 'Ökonometrische Anwendung', variables: { X: 'Regressorenmatrix', y: 'Abhängige Variable (Vektor)' } }
    ],
    aufgaben: [
      {
        text: String.raw`Berechnen Sie die Inverse von $A = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$.`,
        steps: [
          { text: `Determinante:`, eq: String.raw`\det(A) = 3 \cdot 4 - 1 \cdot 2 = 10` },
          { text: `Adjunkte bilden und durch det teilen:`, eq: String.raw`A^{-1} = \frac{1}{10}\begin{pmatrix} 4 & -1 \\ -2 & 3 \end{pmatrix}` }
        ],
        result: String.raw`$A^{-1} = \begin{pmatrix} 0{,}4 & -0{,}1 \\ -0{,}2 & 0{,}3 \end{pmatrix}$.`
      },
      {
        text: String.raw`Lösen Sie das Gleichungssystem $Ax = b$ mit $A = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$, $b = \begin{pmatrix} 8 \\ 18 \end{pmatrix}$.`,
        steps: [
          { text: `Determinante berechnen:`, eq: String.raw`\det(A) = 2 \cdot 3 - 1 \cdot 4 = 2 \neq 0 \implies \text{Inverse existiert.}` },
          { text: `Inverse aufstellen:`, eq: String.raw`A^{-1} = \frac{1}{2}\begin{pmatrix} 3 & -1 \\ -4 & 2 \end{pmatrix}` },
          { text: `Lösung: $x = A^{-1}b$.`, eq: String.raw`x = \frac{1}{2}\begin{pmatrix}3\cdot8 - 1\cdot18 \\ -4\cdot8 + 2\cdot18\end{pmatrix} = \frac{1}{2}\begin{pmatrix}6\\4\end{pmatrix} = \begin{pmatrix}3\\2\end{pmatrix}` }
        ],
        result: String.raw`$x_1 = 3$, $x_2 = 2$.`
      },
      {
        text: String.raw`Lösen Sie das $2\times2$-Gleichungssystem $2x + y = 7$, $x + 3y = 6$ mit der Cramerschen Regel.`,
        steps: [
          { text: `Koeffizientenmatrix und Determinante:`, eq: String.raw`A = \begin{pmatrix}2 & 1\\1 & 3\end{pmatrix}, \quad \det(A) = 6 - 1 = 5` },
          { text: `$x_1$ nach Cramer: Ersetze erste Spalte durch $b$.`, eq: String.raw`\det(A_1) = \begin{vmatrix}7 & 1\\6 & 3\end{vmatrix} = 21 - 6 = 15 \implies x = \frac{15}{5} = 3` },
          { text: `$x_2$ nach Cramer: Ersetze zweite Spalte durch $b$.`, eq: String.raw`\det(A_2) = \begin{vmatrix}2 & 7\\1 & 6\end{vmatrix} = 12 - 7 = 5 \implies y = \frac{5}{5} = 1` },
          { text: `Probe durch Einsetzen:`, eq: String.raw`2(3) + 1 = 7 \; \checkmark \qquad 3 + 3(1) = 6 \; \checkmark` }
        ],
        result: String.raw`$x = 3$, $y = 1$. Die Cramersche Regel eignet sich besonders für kleine Systeme und liefert eine geschlossene Formel. Für große Systeme ist der Gauß-Algorithmus effizienter.`
      },
      {
        text: String.raw`Matrix $A = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$. Berechnen Sie $\det(A)$, $A^{-1}$ und prüfen Sie $A \cdot A^{-1} = I$.`,
        steps: [
          { text: `Determinante:`, eq: String.raw`\det(A) = 2 \cdot 3 - 1 \cdot 4 = 6 - 4 = 2` },
          { text: `Inverse berechnen:`, eq: String.raw`A^{-1} = \frac{1}{2}\begin{pmatrix}3 & -1\\-4 & 2\end{pmatrix} = \begin{pmatrix}1{,}5 & -0{,}5\\-2 & 1\end{pmatrix}` },
          { text: `Probe: $A \cdot A^{-1}$ berechnen (Zeile 1 mal Spalte 1):`, eq: String.raw`2 \cdot 1{,}5 + 1 \cdot (-2) = 3 - 2 = 1 \; \checkmark` },
          { text: `Probe: $A \cdot A^{-1}$ (Zeile 1 mal Spalte 2) und (Zeile 2 mal Spalte 1):`, eq: String.raw`2(-0{,}5) + 1(1) = 0 \; \checkmark \qquad 4(1{,}5) + 3(-2) = 6 - 6 = 0 \; \checkmark` }
        ],
        result: String.raw`$\det(A) = 2$, $A^{-1} = \begin{pmatrix}1{,}5 & -0{,}5\\-2 & 1\end{pmatrix}$. Die Probe $A \cdot A^{-1} = I$ ist erfüllt. Die Inverse ist eindeutig bestimmt, weil $\det(A) \neq 0$.`
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
        <li>$\int e^{ax}\,dx = \frac{1}{a}e^{ax} + C$</li>
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
      <div class="warn-box"><strong>Integrationskonstante:</strong> Beim unbestimmten Integral immer $+C$ ergänzen. Beim bestimmten Integral kürzt sich $C$ heraus — vergessen Sie es trotzdem nicht bei Zwischenschritten.</div>
    </div>
    `,
    formeln: [
      { label: 'Hauptsatz', eq: String.raw`$$\int_a^b f(x)\,dx = F(b) - F(a)$$`, desc: 'Bestimmtes Integral', variables: { F: 'Stammfunktion von f', a: 'untere Grenze', b: 'obere Grenze' } },
      { label: 'Konsumentenrente', eq: String.raw`$$KR = \int_0^{Q^*} P(Q)\,dQ - p^* Q^*$$`, desc: 'Fläche unter Nachfragekurve', variables: { P_Q: 'inverse Nachfragefunktion', Q_star: 'Gleichgewichtsmenge', p_star: 'Gleichgewichtspreis' } }
    ],
    aufgaben: [
      {
        text: String.raw`Die inverse Nachfrage sei $P(Q) = 100 - 2Q$. Der Gleichgewichtspreis ist $p^* = 40$, die Menge $Q^* = 30$. Berechnen Sie die Konsumentenrente.`,
        steps: [
          { text: `Integral berechnen:`, eq: String.raw`\int_0^{30}(100-2Q)\,dQ = \bigl[100Q - Q^2\bigr]_0^{30} = 3000 - 900 = 2100` },
          { text: `Rechteckfläche abziehen:`, eq: String.raw`KR = 2100 - 40 \cdot 30 = 2100 - 1200 = 900` }
        ],
        result: String.raw`$KR = 900$ Geldeinheiten.`
      },
      {
        text: String.raw`Die Angebotsfunktion sei $S(Q) = 2Q + 10$. Der Gleichgewichtspreis ist $P^* = 30$, die Gleichgewichtsmenge $Q^* = 10$. Berechnen Sie die Produzentenrente.`,
        steps: [
          { text: `Produzentenrente = Erlös minus variable Kosten (Fläche über Angebotskurve).`, eq: String.raw`PR = P^* \cdot Q^* - \int_0^{Q^*} S(Q)\,dQ` },
          { text: `Integral berechnen:`, eq: String.raw`\int_0^{10}(2Q+10)\,dQ = \bigl[Q^2 + 10Q\bigr]_0^{10} = 100 + 100 = 200` },
          { text: `Produzentenrente:`, eq: String.raw`PR = 30 \cdot 10 - 200 = 300 - 200 = 100` }
        ],
        result: String.raw`$PR = 100$ Geldeinheiten.`
      },
      {
        text: String.raw`Konsumentenrente bei Mindestpreis: Nachfragekurve $P = 10 - Q$, Marktgleichgewichtspreis $P^* = 4$, Menge $Q^* = 6$. Berechnen Sie die Konsumentenrente grafisch und analytisch.`,
        steps: [
          { text: `Gleichgewichtsmenge bestimmen: $P = 10 - Q = 4$.`, eq: String.raw`Q^* = 10 - 4 = 6` },
          { text: `KR = Fläche unter Nachfragekurve minus Rechteck:`, eq: String.raw`KR = \int_0^6 (10-Q)\,dQ - 4 \cdot 6` },
          { text: `Integral ausrechnen:`, eq: String.raw`\int_0^6(10-Q)\,dQ = \bigl[10Q - \tfrac{Q^2}{2}\bigr]_0^6 = 60 - 18 = 42` },
          { text: `KR berechnen:`, eq: String.raw`KR = 42 - 24 = 18` }
        ],
        result: String.raw`$KR = 18$ Geldeinheiten. Grafisch ist dies das Dreieck zwischen der Nachfragekurve und der Preisgeraden $P^* = 4$: Basis = $Q^* = 6$, Höhe = $10 - 4 = 6$, Fläche = $\frac{1}{2} \cdot 6 \cdot 6 = 18$ ✓.`
      },
      {
        text: String.raw`Wachstumspfad: Die Wachstumsrate des BIP sei $Y'(t) = 2e^{0{,}1t}$. Berechnen Sie $Y(t)$ mit der Anfangsbedingung $Y(0) = 20$ und bestimmen Sie $Y(10)$.`,
        steps: [
          { text: `Unbestimmtes Integral berechnen:`, eq: String.raw`Y(t) = \int 2e^{0{,}1t}\,dt = \frac{2}{0{,}1}e^{0{,}1t} + C = 20e^{0{,}1t} + C` },
          { text: `Anfangsbedingung anwenden: $Y(0) = 20$.`, eq: String.raw`20e^{0} + C = 20 \implies 20 + C = 20 \implies C = 0` },
          { text: `Vollständige Lösung:`, eq: String.raw`Y(t) = 20e^{0{,}1t}` },
          { text: `$Y(10)$ berechnen:`, eq: String.raw`Y(10) = 20e^{0{,}1 \cdot 10} = 20e^1 = 20 \cdot 2{,}718 \approx 54{,}37` }
        ],
        result: String.raw`$Y(t) = 20e^{0{,}1t}$, $Y(10) \approx 54{,}4$. Das BIP wächst exponentiell mit einer kontinuierlichen Rate von $10\%$ pro Periode — ein typisches Wachstumsmodell. Nach 10 Perioden ist das Ausgangsniveau um den Faktor $e \approx 2{,}72$ gestiegen.`
      }
    ]
  }
};
