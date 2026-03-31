// ============================================================
// CHAPTERS & CONTENT DATA — Statistik
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'deskriptiv', title: 'Deskriptive Statistik', cat: 'Grundlagen', short: 'Desk.' },
  { id: 'bivariat', title: 'Bivariate Analyse', cat: 'Grundlagen', short: 'Biv.' },
  { id: 'wahrscheinlichkeit', title: 'Wahrscheinlichkeitsrechnung', cat: 'Theorie', short: 'Wkt.' },
  { id: 'verteilungen', title: 'Zufallsvariablen & Verteilungen', cat: 'Theorie', short: 'Vert.' },
  { id: 'schaetzen', title: 'Punktschätzung & Intervalle', cat: 'Induktion', short: 'Schätz.' },
  { id: 'testen', title: 'Hypothesentests', cat: 'Induktion', short: 'Test' },
  { id: 'regression', title: 'Lineare Regression', cat: 'Modelle', short: 'Regr.' },
  { id: 'rlab', title: 'R-Statistik Praxis', cat: 'Anwendung', short: 'R' },
];

export const CONTENT = {
  deskriptiv: {
    motivation: 'Daten ordnen und zusammenfassen. Lage- und Streuungsmaße geben uns einen ersten Überblick über die Verteilung.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Lagemaße</h3>
      <ul>
        <li><strong>Arithmetisches Mittel ($\bar{x}$):</strong> Schwerpunkt der Daten.</li>
        <li><strong>Median ($\tilde{x}$):</strong> Teilt die geordneten Daten in zwei gleich große Hälften (robust gegen Ausreißer).</li>
        <li><strong>Modus:</strong> Häufigster Wert.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Streuungsmaße</h3>
      <p>Die <strong>Varianz</strong> ($s^2$) misst die durchschnittliche quadrierte Abweichung vom Mittelwert. Die <strong>Standardabweichung</strong> ($s$) ist deren Wurzel.</p>
      <div class="math-block">$$s^2 = \frac{1}{n-1} \sum_{i=1}^n (x_i - \bar{x})^2$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Variationskoeffizient:</strong> Nutzen Sie diesen ($v = s/\bar{x}$), um die Streuung verschiedener Datensätze (z.B. Lohn in € vs. ¥) vergleichbar zu machen.</div>
    </div>
    `,
    formeln: [
      { label: 'Mittelwert', eq: String.raw`$$\bar{x} = \frac{1}{n} \sum x_i$$`, desc: 'Arithmetisches Mittel' },
      { label: 'Varianz (Stichprobe)', eq: String.raw`$$s^2 = \frac{\sum (x_i - \bar{x})^2}{n-1}$$`, desc: 'Korrigierte Stichprobenvarianz' }
    ],
    aufgaben: [
      {
        text: String.raw`Gegeben sind die Werte: $2, 4, 6$. Berechnen Sie das arithmetische Mittel und die Stichprobenvarianz.`,
        steps: [
          { text: `Mittelwert berechnen:`, eq: String.raw`\bar{x} = (2+4+6)/3 = 4` },
          { text: `Abweichungen quadrieren:`, eq: String.raw`(2-4)^2 + (4-4)^2 + (6-4)^2 = 4 + 0 + 4 = 8` },
          { text: `Durch (n-1) teilen:`, eq: String.raw`8 / (3-1) = 4` }
        ],
        result: String.raw`$\bar{x} = 4, s^2 = 4$.`
      }
    ]
  },
  bivariat: {
    motivation: 'Besteht ein Zusammenhang zwischen zwei Merkmalen? Wir untersuchen die gemeinsame Verteilung und Korrelation.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Kovarianz</h3>
      <p>Misst die Richtung des linearen Zusammenhangs. Positiv: beide steigen gleichzeitig. Negativ: einer steigt, einer sinkt.</p>
      <div class="math-block">$$s_{xy} = \frac{1}{n-1} \sum (x_i - \bar{x})(y_i - \bar{y})$$</div>
    </div>
    <div class="section-block">
      <h3>Korrelationskoeffizient (Pearson)</h3>
      <p>Normiert die Kovarianz auf das Intervall $[-1, 1]$.</p>
      <div class="math-block">$$r_{xy} = \frac{s_{xy}}{s_x \cdot s_y}$$</div>
      <ul>
        <li>$r = 1$: Perfekter positiver linearer Zusammenhang.</li>
        <li>$r = 0$: Kein linearer Zusammenhang.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Korrelation vs. Kausalität:</strong> Ein hoher Korrelationskoeffizient beweist keinen ursächlichen Zusammenhang (Scheinkorrelation).</div>
    </div>
    `,
    formeln: [
      { label: 'Pearson-Korr.', eq: String.raw`$$r = \frac{\text{Cov}(x,y)}{\sqrt{\text{Var}(x)\text{Var}(y)}}$$`, desc: 'Linearer Zusammenhang' }
    ],
    aufgaben: [
      {
        text: String.raw`Zwei Variablen haben eine Kovarianz von $10$. Die Varianzen sind $s_x^2=16$ and $s_y^2=25$. Berechnen Sie den Korrelationskoeffizienten.`,
        steps: [
          { text: `Standardabweichungen bestimmen:`, eq: String.raw`s_x = 4, s_y = 5` },
          { text: `Nenner berechnen:`, eq: String.raw`4 \cdot 5 = 20` },
          { text: `Korrelation berechnen:`, eq: String.raw`10 / 20 = 0{,}5` }
        ],
        result: String.raw`$r = 0{,}5$.`
      }
    ]
  },
  testen: {
    motivation: 'Hypothesentests entscheiden, ob ein beobachteter Effekt in der Stichprobe auch für die Grundgesamtheit gilt oder reiner Zufall ist.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Nullhypothese (H0)</h3>
      <p>Der Zustand, den man meist widerlegen möchte (z.B. "Zusatzmedikament hat keine Wirkung"). Wir verwerfen H0 nur, wenn die Daten massiv dagegen sprechen.</p>
    </div>
    <div class="section-block">
      <h3>Testentscheidung</h3>
      <p>Wir vergleichen eine Teststatistik (z.B. t-Wert) mit einem kritischen Wert oder nutzen den p-Wert.</p>
      <ul>
        <li><strong>p-Wert:</strong> Wahrscheinlichkeit für das Ergebnis unter H0.</li>
        <li><strong>Signifikanzniveau ($\alpha$):</strong> Fehlertoleranz (meist 5%).</li>
      </ul>
      <p>Entscheidungsregel: <strong>H0 ablehnen, wenn $p < \alpha$.</strong></p>
    </div>
    <div class="section-block">
      <h3>Fehlerarten</h3>
      <p><strong>Fehler 1. Art ($\alpha$):</strong> H0 ablehnen, obwohl sie wahr ist. <strong>Fehler 2. Art ($\beta$):</strong> H0 beibehalten, obwohl sie falsch ist.</p>
    </div>
    `,
    formeln: [
      { label: 't-Statistik', eq: String.raw`$$t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}$$`, desc: 'Einstichproben t-Test' }
    ],
    aufgaben: [
      {
        text: String.raw`Wir testen $H_0: \mu = 100$. Die Stichprobe liefert $\bar{x} = 105$ mit $s=10$ and $n=25$. Berechnen Sie den t-Wert.`,
        steps: [
          { text: `Standardfehler des Mittelwerts:`, eq: String.raw`10 / \sqrt{25} = 2` },
          { text: `Differenz zur Hypothese:`, eq: String.raw`105 - 100 = 5` },
          { text: `t-Wert berechnen:`, eq: String.raw`5 / 2 = 2{,}5` }
        ],
        result: String.raw`$t = 2{,}5$. (Bei $\alpha=0{,}05$ und kritischem Wert $2{,}06$ würden wir H0 ablehnen).`
      }
    ]
  }
};
