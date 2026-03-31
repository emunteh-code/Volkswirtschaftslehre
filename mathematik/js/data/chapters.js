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
    motivation: 'Funktionen beschreiben die quantitativen Beziehungen zwischen ökonomischen Größen, wie z.B. Preis und Nachfragemenge.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Lineare Funktionen</h3>
      <p>Eine lineare Funktion hat die Form $f(x) = ax + b$. $a$ ist die Steigung, $b$ der y-Achsenabschnitt.</p>
    </div>
    <div class="section-block">
      <h3>Potenz- und Logarithmusfunktionen</h3>
      <p>In der Ökonomie sind Potenzfunktionen ($x^n$) und der natürliche Logarithmus ($\ln x$) zentral, um z.B. Cobb-Douglas-Nutzen oder elastische Beziehungen abzubilden.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Umkehrfunktionen:</strong> Achten Sie darauf, ob Sie $P(Q)$ oder $Q(P)$ betrachten. Die inverse Nachfragefunktion ist oft grafisch relevanter.</div>
    </div>
    `,
    formeln: [
      { label: 'Gerade', eq: String.raw`$$y = mx + n$$`, desc: 'Lineare Form' }
    ],
    aufgaben: [
      {
        text: String.raw`Bestimmen Sie die Nullstelle der Funktion $f(x) = 2x - 10$.`,
        steps: [
          { text: `Interpretation: Was ist die Bedingung für eine Nullstelle?`, eq: String.raw`f(x) = 0` },
          { text: `Execution: Nach x auflösen.`, eq: String.raw`2x = 10 \implies x = 5` }
        ],
        result: String.raw`$x = 5$.`
      }
    ]
  },
  ableitung: {
    motivation: 'Ableitungen messen die marginale Veränderung. In der Ökonomie entsprechen sie Grenzkosten, Grenznutzen oder Grenzproduktivität.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Definition</h3>
      <p>Die erste Ableitung $f'(x)$ gibt die Steigung der Tangente im Punkt $x$ an. Ökonomisch ist dies die <strong>marginale Rate</strong>.</p>
    </div>
    <div class="section-block">
      <h3>Regeln</h3>
      <ul>
        <li><strong>Produktregel:</strong> $(uv)' = u'v + uv'$</li>
        <li><strong>Quotientenregel:</strong> $(u/v)' = (u'v - uv')/v^2$</li>
        <li><strong>Kettenregel:</strong> $f(g(x))' = f'(g(x)) \cdot g'(x)$</li>
      </ul>
    </div>
    `,
    formeln: [
      { label: 'Kettenregel', eq: String.raw`$$(f \circ g)' = (f' \circ g) \cdot g'$$`, desc: 'Äußere mal innere Ableitung' }
    ],
    aufgaben: [
      {
        text: String.raw`Leiten Sie $f(x) = \ln(x^2 + 1)$ ab.`,
        steps: [
          { text: `Decision: Welche Regel ist hier primär anzuwenden?`, eq: String.raw`\text{Kettenregel (äußere: ln, innere: x² + 1).}` },
          { text: `Execution: Äußere mal innere Ableitung berechnen.`, eq: String.raw`\frac{1}{x^2 + 1} \cdot 2x` }
        ],
        result: String.raw`$f'(x) = \frac{2x}{x^2 + 1}$.`
      }
    ]
  },
  optimierung: {
    motivation: 'Ökonomisches Handeln bedeutet Optimieren unter Knappheit. Wir suchen Maxima (Nutzen, Gewinn) und Minima (Kosten).',
    theorie: String.raw`
    <div class="section-block">
      <h3>Bedingung erster Ordnung (BEO)</h3>
      <p>Notwendige Bedingung für ein lokales Extremum im Inneren: Die Steigung muss Null sein.</p>
      <div class="math-block">$$f'(x) = 0$$</div>
    </div>
    <div class="section-block">
      <h3>Bedingung zweiter Ordnung (BZO)</h3>
      <p>Prüft, ob ein Maximum oder Minimum vorliegt:</p>
      <ul>
        <li>$f''(x) < 0 \implies$ relatives Maximum</li>
        <li>$f''(x) > 0 \implies$ relatives Minimum</li>
      </ul>
    </div>
    `,
    formeln: [
      { label: 'BEO', eq: String.raw`$$f'(x) = 0$$`, desc: 'Notwendige Bedingung' }
    ],
    aufgaben: [
      {
        text: String.raw`Finden Sie das Maximum von $f(x) = -x^2 + 4x$.`,
        steps: [
          { text: `Execution: Erste Ableitung bilden und Null setzen.`, eq: String.raw`-2x + 4 = 0 \implies x = 2` },
          { text: `Validation: Prüfen der BZO.`, eq: String.raw`f''(x) = -2 < 0 \implies \text{Maximum.}` }
        ],
        result: String.raw`Maximum bei $x=2$.`
      }
    ]
  },
  lagrange: {
    motivation: 'In der Ökonomie sind Ressourcen meist begrenzt. Die Lagrange-Methode erlaubt Optimierung unter Gleichungsnebenbedingungen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Lagrange-Funktion</h3>
      <p>Kombiniert Zielfunktion $f(x,y)$ und Nebenbedingung $g(x,y) = c$:</p>
      <div class="math-block">$$\mathcal{L}(x, y, \lambda) = f(x, y) + \lambda [c - g(x, y)]$$</div>
    </div>
    <div class="section-block">
      <h3>Interpretation von lambda</h3>
      <p>Der Lagrange-Multiplikator $\lambda$ gibt an, wie stark sich der optimale Zielwert ändert, wenn die Nebenbedingung marginal gelockert wird (Schattenpreis).</p>
    </div>
    `,
    formeln: [
      { label: 'Lagrange-Ansatz', eq: String.raw`$$\mathcal{L} = f + \lambda(c-g)$$`, desc: 'Schattenpreis-Optimierung' }
    ],
    aufgaben: [
      {
        text: String.raw`Optimieren Sie $u(x,y) = x \cdot y$ unter $x + y = 10$.`,
        steps: [
          { text: `BEOs aufstellen:`, eq: String.raw`y - \lambda = 0, \quad x - \lambda = 0, \quad 10 - x - y = 0` },
          { text: `Decision: Was folgt aus den ersten beiden Gleichungen?`, eq: String.raw`x = y = \lambda` },
          { text: `Execution: Einsetzen in die Nebenbedingung.`, eq: String.raw`2x = 10 \implies x = 5, y = 5` }
        ],
        result: String.raw`$x=5, y=5$.`
      }
    ]
  }
};
