// ============================================================
// CHAPTERS & CONTENT DATA — Ökonometrie
// Final Benchmark Standard v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'ols_intro', title: 'Das lineare Modell & OLS', cat: 'Grundlagen', short: 'OLS' },
  { id: 'gauss_markov', title: 'Gauss-Markov-Annahmen', cat: 'Grundlagen', short: 'G-M' },
  { id: 'properties', title: 'Eigenschaften des OLS-Schätzers', cat: 'Grundlagen', short: 'BLUE' },
  { id: 'fit', title: 'Bestimmtheitsmaß R²', cat: 'Modellgüte', short: 'R²' },
  { id: 'inference', title: 'Hypothesentests & Intervalle', cat: 'Inferenz', short: 'Test' },
  { id: 'multicollinearity', title: 'Multikollinearität', cat: 'Diagnostik', short: 'Multikol.' },
  { id: 'heteroskedasticity', title: 'Heteroskedastizität', cat: 'Diagnostik', short: 'Heterosked.' },
  { id: 'autocorrelation', title: 'Autokorrelation', cat: 'Diagnostik', short: 'Autokorr.' },
  { id: 'specification', title: 'Omitted Variable Bias (OVB)', cat: 'Spezifikation', short: 'OVB' },
];

export const CONTENT = {
  ols_intro: {
    motivation: 'Die Ökonometrie sucht nach quantitativen Antworten auf ökonomische Fragen. Das lineare Modell ist das Arbeitspferd, um Zusammenhänge zwischen Variablen zu schätzen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Das Modell</h3>
      <p>Das einfache lineare Regressionsmodell beschreibt die Beziehung zwischen einer abhängigen Variable $y$ und einer unabhängigen Variable $x$:</p>
      <div class="math-block">$$y_i = \beta_0 + \beta_1 x_i + u_i$$</div>
      <p>Hierbei ist $\beta_0$ der Interzept, $\beta_1$ die Steigung (der Effekt von $x$ auf $y$) und $u_i$ der Fehlerterm (Störterm), der alle anderen Einflüsse auf $y$ zusammenfasst.</p>
    </div>
    <div class="section-block">
      <h3>Kleinste-Quadrate-Schätzung (OLS)</h3>
      <p>Die <strong>Ordinary Least Squares (OLS)</strong> Methode minimiert die Summe der quadrierten Residuen (SSR), um die Schätzer $\hat{\beta}_0$ und $\hat{\beta}_1$ zu finden:</p>
      <div class="math-block">$$\min_{\hat{\beta}_0, \hat{\beta}_1} \sum_{i=1}^n (y_i - \hat{\beta}_0 - \hat{\beta}_1 x_i)^2$$</div>
      <p>Residuen $\hat{u}_i$ sind die Differenz zwischen beobachteten Werten $y_i$ und den geschätzten Werten $\hat{y}_i = \hat{\beta}_0 + \hat{\beta}_1 x_i$.</p>
    </div>
    <div class="section-block">
      <h3>Interpretation der Koeffizienten</h3>
      <p>$\hat{\beta}_1$ gibt an, um wie viele Einheiten sich $y$ im Durchschnitt ändert, wenn $x$ um eine Einheit steigt (ceteris paribus).</p>
      <div class="math-block">$$\hat{\beta}_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2} = \frac{\text{Cov}(x,y)}{\text{Var}(x)}$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Residuen vs. Störterme:</strong> Verwechseln Sie niemals $\hat{u}_i$ (beobachtbare Residuen aus der Schätzung) mit $u_i$ (unbeobachtbare Störterme der Grundgesamtheit).</div>
      <div class="warn-box"><strong>Kausalität:</strong> Eine OLS-Schätzung zeigt zunächst nur Korrelation. Für Kausalität müssen die Gauss-Markov-Annahmen (insb. Exogenität) erfüllt sein.</div>
    </div>
    `,
    formeln: [
      { label: 'Regressionsgleichung', eq: String.raw`$$y_i = \beta_0 + \beta_1 x_i + u_i$$`, desc: 'Populationsmodell', variables: { 'y': 'Abhängige Variable', 'x': 'Unabhängige Variable', 'u': 'Fehlerterm' } },
      { label: 'Steigungsschätzer', eq: String.raw`$$\hat{\beta}_1 = \frac{s_{xy}}{s_x^2}$$`, desc: 'OLS-Formel', variables: { 's_{xy}': 'Kovarianz', 's_x^2': 'Varianz von x' } }
    ],
    aufgaben: [
      {
        text: String.raw`In einem Datensatz mit $n=100$ Personen wird der Lohn ($y$) auf die Ausbildungjahre ($x$) regressiert. Es ergibt sich $\hat{\beta}_1 = 2{,}5$. Interpretieren Sie das Ergebnis und prüfen Sie die Plausibilität.`,
        steps: [
          { text: `Interpretation: Was bedeutet der Wert $2{,}5$?`, eq: String.raw`\text{Ein zusätzliches Jahr Ausbildung erhöht den Lohn im Schnitt um } 2{,}5 \text{ Einheiten.}` },
          { text: `Plausibilitätsprüfung: Erwarten wir ökonomisch ein positives oder negatives Vorzeichen?`, eq: String.raw`\text{Positiv (Humankapitaltheorie).}` },
          { text: `Entscheidung: Reicht dieser Koeffizient aus, um zu behaupten, dass Ausbildung den Lohn verursacht?`, eq: String.raw`\text{Nein, wegen möglicher Endogenität (z.B. Fähigkeiten).}` }
        ],
        result: String.raw`$\hat{\beta}_1 = 2{,}5$; Ausbildung korreliert positiv mit Lohn.`
      }
    ],
    r_code: String.raw`
# OLS Schätzung in R
model <- lm(y ~ x, data = df)
summary(model)

# Interpretation des R-Outputs:
# (Intercept): Schätzer für beta_0
# x: Schätzer für beta_1 (Steigung)
    `
  },
  gauss_markov: {
    motivation: 'Damit OLS-Schätzer zuverlässig sind, müssen bestimmte Bedingungen erfüllt sein. Diese bilden die Basis für die statistische Inferenz.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Die Annahmen</h3>
      <p><strong>A1: Linearität in den Parametern:</strong> Das Modell folgt der Form $y = \beta_0 + \beta_1 x + u$.</p>
      <p><strong>A2: Zufällige Stichprobenziehung:</strong> Die Daten $(x_i, y_i)$ sind i.i.d. (independent and identically distributed).</p>
      <p><strong>A3: Keine perfekte Multikollinearität:</strong> Die unabhängigen Variablen sind nicht perfekt linear abhängig.</p>
      <p><strong>A4: Bedingte Erwartungswert Null (Exogenität):</strong> $E[u|x] = 0$. Dies ist die wichtigste Annahme für Unverzerrtheit.</p>
      <p><strong>A5: Homoskedastizität:</strong> $\text{Var}(u|x) = \sigma^2$ (konstante Varianz der Fehlerterme).</p>
    </div>
    <div class="section-block">
      <h3>Bedeutung der Exogenität (A4)</h3>
      <p>Ist $E[u|x] \neq 0$, korreliert $x$ mit dem Fehlerterm. Man spricht von <strong>Endogenität</strong>. In diesem Fall ist der OLS-Schätzer verzerrt (biased).</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Korrelation mit Fehlern:</strong> Wenn eine wichtige Variable im Fehlerterm "versteckt" ist und mit $x$ korreliert, ist A4 verletzt (Omitted Variable Bias).</div>
    </div>
    `,
    formeln: [
      { label: 'Exogenität', eq: String.raw`$$E[u|x] = 0$$`, desc: 'Wichtigste Annahme für Unverzerrtheit' },
      { label: 'Homoskedastizität', eq: String.raw`$$\text{Var}(u|x) = \sigma^2$$`, desc: 'Konstante Fehlervarianz' }
    ],
    aufgaben: [
      {
        text: String.raw`Prüfen Sie die Exogenitätsannahme: Wir regressieren Testergebnisse auf die Klassengröße. Das Einkommen der Eltern ist im Fehlerterm $u$ enthalten. Korreliert das Einkommen mit der Klassengröße?`,
        steps: [
          { text: `Entscheidung: Ist $E[u|x] = 0$ erfüllt?`, eq: String.raw`\text{Nein, reiche Eltern wählen oft Schulen mit kleinen Klassen.}` },
          { text: `Folge: Was passiert mit dem OLS-Schätzer?`, eq: String.raw`\text{Er ist verzerrt (Biased).}` }
        ],
        result: String.raw`Endogenität durch OVB verletzt A4.`
      }
    ],
    r_code: String.raw`
# Prüfung von A4 (grafisch)
plot(model$residuals ~ df$x)
abline(h = 0, col = "red")
# Residuen sollten zufällig um Null streuen.
    `
  },
  properties: {
    motivation: 'Unter den Gauss-Markov-Annahmen besitzt der OLS-Schätzer optimale statistische Eigenschaften.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Unverzerrtheit (Unbiasedness)</h3>
      <p>Ein Schätzer ist unverzerrt, wenn sein Erwartungswert dem wahren Parameter entspricht: $E[\hat{\beta}] = \beta$. Dies erfordert A1-A4.</p>
    </div>
    <div class="section-block">
      <h3>BLUE-Eigenschaft</h3>
      <p>Das <strong>Gauss-Markov-Theorem</strong> besagt: Unter den Annahmen A1-A5 ist der OLS-Schätzer der <strong>Best Linear Unbiased Estimator (BLUE)</strong>.</p>
      <ul>
        <li><strong>Best:</strong> Er hat die kleinste Varianz unter allen linearen unverzerrten Schätzern (Effizienz).</li>
        <li><strong>Linear:</strong> Er ist eine Linearkombination der $y_i$.</li>
        <li><strong>Unbiased:</strong> Erwartungstreu.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Konsistenz</h3>
      <p>Ein Schätzer ist konsistent, wenn er mit wachsender Stichprobengröße ($n \to \infty$) gegen den wahren Parameter konvergiert.</p>
    </div>
    `,
    formeln: [
      { label: 'Unverzerrtheit', eq: String.raw`$$E[\hat{\beta}_1] = \beta_1$$`, desc: 'Bedingung: A1-A4 erfüllt' },
      { label: 'Varianz des Schätzers', eq: String.raw`$$\text{Var}(\hat{\beta}_1) = \frac{\sigma^2}{\sum (x_i - \bar{x})^2}$$`, desc: 'Hängt von Fehlervarianz und Streuung von x ab' }
    ],
    aufgaben: [
      {
        text: String.raw`Was passiert mit der Varianz von $\hat{\beta}_1$, wenn die Stichprobe $n$ größer wird?`,
        steps: [
          { text: `Interpretation: Wie ändert sich der Nenner der Varianzformel?`, eq: String.raw`\sum (x_i - \bar{x})^2 \uparrow` },
          { text: `Schlussfolgerung: Effekt auf die Präzision des Schätzers?`, eq: String.raw`\text{Varianz sinkt } \implies \text{ Schätzung wird präziser.}` }
        ],
        result: String.raw`Größeres $n$ erhöht die Effizienz.`
      }
    ]
  },
  fit: {
    motivation: 'Wie gut erklärt unser Modell die Daten? Das Bestimmtheitsmaß liefert eine Kennzahl für den Erklärungsgehalt.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Zerlegung der Quadratsummen</h3>
      <p>Die gesamte Variation in $y$ (SST) lässt sich zerlegen in die erklärte Variation (SSE) und die nicht erklärte Variation (SSR):</p>
      <div class="math-block">$$\underbrace{\sum (y_i - \bar{y})^2}_{\text{SST}} = \underbrace{\sum (\hat{y}_i - \bar{y})^2}_{\text{SSE}} + \underbrace{\sum \hat{u}_i^2}_{\text{SSR}}$$</div>
    </div>
    <div class="section-block">
      <h3>Das Bestimmtheitsmaß R²</h3>
      <p>Das $R^2$ ist der Anteil der erklärten Variation an der Gesamvariation:</p>
      <div class="math-block">$$R^2 = \frac{\text{SSE}}{\text{SST}} = 1 - \frac{\text{SSR}}{\text{SST}}$$</div>
      <p>Es liegt zwischen 0 (kein Erklärungsgehalt) und 1 (perfekter Fit).</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>R² und Kausalität:</strong> Ein hohes $R^2$ bedeutet nicht, dass das Modell kausal korrekt ist. Es misst lediglich die Korrelation (den "Fit").</div>
      <div class="warn-box"><strong>Variablen-Spam:</strong> Das einfache $R^2$ steigt immer, wenn man mehr Variablen hinzufügt, selbst wenn diese keinen Sinn ergeben. Nutzen Sie das korrigierte $\bar{R}^2$.</div>
    </div>
    `,
    formeln: [
      { label: 'R-Quadrat', eq: String.raw`$$R^2 = 1 - \frac{SSR}{SST}$$`, desc: 'Anteil erklärter Varianz' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Modell hat $SST = 100$ und $SSR = 20$. Berechnen Sie $R^2$ und interpretieren Sie den Wert.`,
        steps: [
          { text: `Berechnung:`, eq: String.raw`$$R^2 = 1 - 20/100 = 0{,}8$$` },
          { text: `Interpretation:`, eq: String.raw`\text{Das Modell erklärt } 80\% \text{ der Variation in y.}` }
        ],
        result: String.raw`$R^2 = 0{,}8$.`
      }
    ],
    r_code: String.raw`
# R-Quadrat in R
summary(model)$r.squared
# Adjustiertes R-Quadrat
summary(model)$adj.r.squared
    `
  },
  inference: {
    motivation: 'Können wir unsere Ergebnisse verallgemeinern? Hypothesentests prüfen, ob Effekte statistisch signifikant sind.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Der t-Test</h3>
      <p>Um zu prüfen, ob $x$ einen signifikanten Effekt auf $y$ hat, testen wir $H_0: \beta_1 = 0$ gegen $H_1: \beta_1 \neq 0$.</p>
      <div class="math-block">$$t = \frac{\hat{\beta}_1 - 0}{\text{se}(\hat{\beta}_1)}$$</div>
      <p>Die Teststatistik folgt unter $H_0$ einer t-Verteilung mit $n-k-1$ Freiheitsgraden.</p>
    </div>
    <div class="section-block">
      <h3>p-Wert und Signifikanz</h3>
      <p>Der p-Wert gibt die Wahrscheinlichkeit an, einen solchen (oder extremeren) Effekt zu beobachten, falls $H_0$ wahr ist. Ist $p < \alpha$ (z.B. 0,05), lehnen wir $H_0$ ab.</p>
    </div>
    <div class="section-block">
      <h3>Konfidenzintervalle</h3>
      <p>Ein $95\%$-KI deckt den wahren Parameter in $95\%$ aller Stichproben ab:</p>
      <div class="math-block">$$\hat{\beta}_1 \pm t_{crit} \cdot \text{se}(\hat{\beta}_1)$$</div>
    </div>
    `,
    formeln: [
      { label: 't-Statistik', eq: String.raw`$$t = \frac{\hat{\beta}_j}{se(\hat{\beta}_j)}$$`, desc: 'Prüfgröße für Signifikanz' }
    ],
    aufgaben: [
      {
        text: String.raw`Gegeben sei $\hat{\beta}_1 = 4{,}0$ und $se(\hat{\beta}_1) = 1{,}0$. Ist der Koeffizient auf dem $5\%$-Niveau signifikant? (Nutzen Sie die Faustregel $t > 2$).`,
        steps: [
          { text: `Berechne t-Wert:`, eq: String.raw`$$t = 4{,}0 / 1{,}0 = 4{,}0$$` },
          { text: `Entscheidung: Ist $t > 2$?`, eq: String.raw`\text{Ja, } 4 > 2.` },
          { text: `Schlussfolgerung:`, eq: String.raw`\text{H0 ablehnen, Effekt ist statistisch signifikant.}` }
        ],
        result: String.raw`Effekt signifikant ($t=4$).`
      }
    ],
    r_code: String.raw`
# Hypothesentest in R
summary(model)

# Output lesen:
# Estimate: beta_hat
# Std. Error: se(beta_hat)
# t value: t-Statistik
# Pr(>|t|): p-Wert
    `
  },
  multicollinearity: {
    motivation: 'Wenn die erklärenden Variablen stark miteinander korreliert sind, werden die OLS-Schätzer unpräzise. Die Koeffizienten sind weiterhin unverzerrt, aber die Standardfehler explodieren.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Definition</h3>
      <p><strong>Multikollinearität</strong> liegt vor, wenn zwei oder mehr unabhängige Variablen stark linear korreliert sind. Perfekte Multikollinearität ($r_{x_1,x_2} = \pm 1$) macht die OLS-Schätzung unmöglich (Matrix $X'X$ ist singulär). Hohe, aber nicht perfekte Multikollinearität führt zu großen Standardfehlern.</p>
    </div>
    <div class="section-block">
      <h3>Variance Inflation Factor (VIF)</h3>
      <p>Der VIF misst, um welchen Faktor die Varianz eines Schätzers durch Multikollinearität aufgeblasen wird:</p>
      <div class="math-block">$$VIF_j = \frac{1}{1 - R_j^2}$$</div>
      <p>Hierbei ist $R_j^2$ das Bestimmtheitsmaß der Hilfsregression von $x_j$ auf alle übrigen $x$-Variablen. Faustregel: $VIF > 10$ deutet auf problematische Multikollinearität hin.</p>
    </div>
    <div class="section-block">
      <h3>Konsequenzen</h3>
      <ul>
        <li><strong>Unverzerrtheit bleibt:</strong> OLS-Schätzer sind weiterhin erwartungstreu (Gauss-Markov-Annahmen sind nicht verletzt).</li>
        <li><strong>Effizienz sinkt:</strong> Die Varianz der Schätzer steigt stark.</li>
        <li><strong>t-Statistiken werden klein:</strong> Einzelne Koeffizienten erscheinen insignifikant, obwohl sie gemeinsam signifikant sein können (hohes $R^2$, aber kein signifikanter Koeffizient).</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Gegenmaßnahmen</h3>
      <ul>
        <li>Variable weglassen (Achtung: OVB-Risiko!)</li>
        <li>Mehr Beobachtungen sammeln</li>
        <li>Variablen transformieren (z.B. Differenzen bilden)</li>
        <li>Ridge-Regression (außerhalb des Grundkurses)</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Multikollinearität ≠ Verzerrung:</strong> OLS bleibt unverzerrt. Das Problem ist die Präzision, nicht die Richtung der Schätzer. Verwechseln Sie dies nicht mit Omitted Variable Bias.</div>
      <div class="warn-box"><strong>VIF-Falle:</strong> Ein hoher VIF bedeutet nicht automatisch, dass das Modell falsch ist. Wenn die Prognose im Vordergrund steht (statt Koeffizienteninterpretation), kann Multikollinearität toleriert werden.</div>
    </div>
    `,
    formeln: [
      { label: 'Variance Inflation Factor', eq: String.raw`$$VIF_j = \frac{1}{1 - R_j^2}$$`, desc: 'Maß für Kollinearität', variables: { 'R_j^2': 'Bestimmtheitsmaß der Hilfsregression von x_j auf alle anderen x' } },
      { label: 'Varianz bei Multikollinearität', eq: String.raw`$$\text{Var}(\hat{\beta}_j) = \frac{\sigma^2}{SST_j \cdot (1 - R_j^2)}$$`, desc: 'Aufgeblähte Varianz' }
    ],
    aufgaben: [
      {
        text: String.raw`In einer Regression mit zwei erklärenden Variablen ($x_1$, $x_2$) beträgt die Korrelation $r_{12} = 0{,}95$. Berechnen Sie den VIF und interpretieren Sie das Ergebnis.`,
        steps: [
          { text: `Hilfsregression: $R_1^2 \approx r_{12}^2$ bei nur zwei Regressoren.`, eq: String.raw`R_1^2 = 0{,}95^2 = 0{,}9025` },
          { text: `VIF berechnen:`, eq: String.raw`VIF = \frac{1}{1 - 0{,}9025} = \frac{1}{0{,}0975} \approx 10{,}26` },
          { text: `Interpretation: VIF > 10.`, eq: String.raw`\text{Problematische Multikollinearität. Standardfehler sind ca. 10-fach aufgeblasen.}` }
        ],
        result: String.raw`$VIF \approx 10{,}3$; Koeffizienten einzeln kaum interpretierbar, aber weiterhin unverzerrt.`
      }
    ],
    r_code: String.raw`
# VIF in R berechnen
library(car)
vif(model)

# Korrelationsmatrix
cor(data[, c("x1", "x2", "x3")])
    `
  },
  heteroskedasticity: {
    motivation: 'Wenn die Fehlervarianz nicht konstant ist, verliert OLS seine Effizienz und Standardfehler werden ungültig.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Problemstellung</h3>
      <p>Heteroskedastizität bedeutet $\text{Var}(u|x) = \sigma_i^2$. Die Streuung der Fehler hängt von $x$ ab (z.B. streut der Konsum bei hohem Einkommen stärker).</p>
    </div>
    <div class="section-block">
      <h3>Folgen</h3>
      <p>OLS bleibt <strong>unverzerrt</strong> und konsistent, aber:</p>
      <ul>
        <li>OLS ist nicht mehr BLUE (nicht mehr effizient).</li>
        <li>Standardfehler sind verzerrt ⟹ t-Tests und Intervalle sind ungültig!</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Abhilfe</h3>
      <p>Nutzen Sie <strong>robuste Standardfehler</strong> (White-Standardfehler) oder WLS (Weighted Least Squares).</p>
    </div>
    `,
    formeln: [
      { label: 'Robuste Varianz', eq: String.raw`$$\text{Var}_{robust}(\hat{\beta}) = \dots$$`, desc: 'Korrektur nach White' }
    ],
    aufgaben: [
      {
        text: String.raw`Beeinflusst Heteroskedastizität die Unverzerrtheit des OLS-Schätzers?`,
        steps: [
          { text: `Interpretation: Welche Annahme wird durch Heteroskedastizität verletzt?`, eq: String.raw`\text{A5 (Homoskedastizität).}` },
          { text: `Entscheidung: Ist A5 für Unverzerrtheit nötig?`, eq: String.raw`\text{Nein, für Unverzerrtheit sind nur A1-A4 nötig.}` }
        ],
        result: String.raw`Schätzer bleibt unverzerrt, aber Inferenz ist falsch.`
      }
    ],
    r_code: String.raw`
# Robuste Standardfehler in R
library(lmtest)
library(sandwich)
coeftest(model, vcov = vcovHC(model, type = "HC1"))
    `
  },
  autocorrelation: {
    motivation: 'In Zeitreihen hängen Fehlerterme oft zeitlich voneinander ab. Dies zerstört die Effizienz von OLS.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Problemstellung</h3>
      <p>Autokorrelation bedeutet $\text{Cov}(u_t, u_{t-s}) \neq 0$. Fehler aus der Vergangenheit beeinflussen die Gegenwart (z.B. Schocks in der Wirtschaft).</p>
    </div>
    <div class="section-block">
      <h3>Durbin-Watson Test</h3>
      <p>Ein klassischer Test auf AR(1)-Autokorrelation. Der DW-Wert liegt zwischen 0 and 4. Ein Wert nahe 2 spricht gegen Autokorrelation.</p>
    </div>
    `,
    formeln: [
      { label: 'Durbin-Watson', eq: String.raw`$$d \approx 2(1-\hat{\rho})$$`, desc: 'Approximation via Korrelation' }
    ],
    aufgaben: [
      {
        text: String.raw`Was passiert mit den OLS-Standardfehlern bei positiver Autokorrelation?`,
        steps: [
          { text: `Interpretation:`, eq: String.raw`\text{Sie werden unterschätzt.}` },
          { text: `Folge:`, eq: String.raw`\text{Die t-Werte werden künstlich zu groß (Scheinsignifikanz).}` }
        ],
        result: String.raw`Unterschätzung der Varianz.`
      }
    ]
  },
  specification: {
    motivation: 'Ein falsches Modell liefert falsche Antworten. Der Omitted Variable Bias ist das Hauptproblem der angewandten Ökonometrie.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Omitted Variable Bias (OVB)</h3>
      <p>Wenn eine relevante Variable $z$ nicht im Modell ist UND $z$ mit $x$ korreliert, ist der OLS-Schätzer für $\beta_1$ verzerrt.</p>
      <div class="math-block">$$E[\hat{\beta}_1] = \beta_1 + \beta_2 \frac{\text{Cov}(x,z)}{\text{Var}(x)}$$</div>
    </div>
    <div class="section-block">
      <h3>Richtung des Bias</h3>
      <p>Der Bias hängt vom Vorzeichen des Effekts der ausgelassenen Variable ($\beta_2$) und ihrer Korrelation mit $x$ ab.</p>
    </div>
    `,
    formeln: [
      { label: 'OVB Formel', eq: String.raw`$$\text{Bias} = \beta_2 \cdot \delta_1$$`, desc: 'Effekt von z mal Korrelation x,z' }
    ],
    aufgaben: [
      {
        text: String.raw`Regressiere Lohn auf Bildung. Die Variable "Fähigkeit" (positiver Effekt auf Lohn) wird ausgelassen. Fähigkeit und Bildung korrelieren positiv. In welche Richtung wirkt der Bias?`,
        steps: [
          { text: `Effekt von Fähigkeit (beta_2):`, eq: String.raw`\text{Positiv (+)}` },
          { text: `Korrelation Bildung/Fähigkeit:`, eq: String.raw`\text{Positiv (+)}` },
          { text: `Produkt (+ * +):`, eq: String.raw`\text{Positiver Bias.}` }
        ],
        result: String.raw`Der Effekt der Bildung wird überschätzt.`
      }
    ]
  }
};
