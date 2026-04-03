// ============================================================
// CHAPTERS & CONTENT DATA — Statistik
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

import { renderRPracticeMarkup } from '../../../assets/js/portal-core/features/rPractice.js';

const STATISTIK_R_PRACTICE = [
  renderRPracticeMarkup({
    title: 'Daten zuerst lesen, dann rechnen',
    purpose: 'Der erste R-Schritt in Statistik ist nie der Testbefehl, sondern die saubere Orientierung im Datensatz: Variablentypen, Größenordnungen und erste Auffälligkeiten müssen vor jeder Inferenz sichtbar werden.',
    script: 'R-Workflow: Datenstruktur, summary() und erste Gruppensichtung',
    code: String.raw`str(df)
summary(df)
table(df$group)`,
    output: 'str(df) trennt numerische von kategorialen Variablen. summary(df) zeigt Lage, Streuung und Extremwerte; table(df$group) prüft sofort, ob Gruppenvergleiche sauber besetzt sind.',
    miniTask: 'Erweitere die Exploration um mean(df$x) und mean(df$y). Formuliere danach in einem Satz, welche Variable im Datensatz im Mittel höher liegt.',
    solution: 'Mit mean(df$x) und mean(df$y) siehst du direkt die Lage der beiden Variablen. Die richtige Kurzantwort nennt nicht nur die größere Zahl, sondern ordnet sie als durchschnittliches Niveau der jeweiligen Messgröße ein.',
    pitfalls: [
      'Mit dem Test starten, obwohl noch unklar ist, wie die Variablen im Datensatz codiert sind.',
      'summary() abzulesen, ohne Extremwerte oder Gruppengrößen sprachlich zu deuten.'
    ]
  }, { moduleSlug: 'statistik', blockId: 'statistik_rlab_explore' }),
  renderRPracticeMarkup({
    title: 'Lage, Streuung und Visualisierung verbinden',
    purpose: 'Deskriptive Statistik wird erst dann nützlich, wenn Kennzahlen und Visualisierung dieselbe Geschichte erzählen. Genau das trainiert dieser Block.',
    script: 'R-Workflow: Mittelwert, Standardabweichung, Histogramm',
    code: String.raw`mean(df$x)
sd(df$x)
hist(df$x, breaks = 4, main = "Verteilung von x", col = "lightblue")`,
    output: 'Mittelwert und Standardabweichung quantifizieren Lage und Streuung; das Histogramm zeigt, ob diese Kennzahlen zu einer eher symmetrischen, schiefen oder klumpigen Verteilung passen.',
    miniTask: 'Ersetze x durch z und vergleiche anschließend verbal, welche Variable stärker streut und warum das Histogramm diese Aussage stützt oder relativiert.',
    solution: 'Die saubere Lösung kombiniert Zahl und Bild: erst Streuung über sd(...) nennen, dann anhand des Histogramms prüfen, ob Ausreißer oder Schiefe die Kennzahl treiben.',
    pitfalls: [
      'Nur das Diagramm zu beschreiben, ohne die Kennzahlen zu nennen.',
      'Standardabweichung und Varianz sprachlich zu vermischen.'
    ]
  }, { moduleSlug: 'statistik', blockId: 'statistik_rlab_descriptives' }),
  renderRPracticeMarkup({
    title: 't-Test als Entscheidungslogik lesen',
    purpose: 'Ein Test ist im Portal nur dann verstanden, wenn die Ausgabe in Hypothese, Teststatistik, p-Wert und Entscheidung übersetzt werden kann.',
    script: 'R-Workflow: Einstichproben-t-Test',
    code: String.raw`t.test(df$z, mu = 115)`,
    output: 'Der Output liefert Teststatistik, Freiheitsgrade, p-Wert und Konfidenzintervall. Die ökonomische Kernfrage bleibt: Sprechen die Daten stark genug gegen $H_0: \mu = 115$?',
    miniTask: 'Formuliere nach dem Run in zwei Sätzen die vollständige Testentscheidung: Nullhypothese, p-Wert-Vergleich und inhaltliche Deutung.',
    solution: 'Die Musterlösung nennt immer zuerst $H_0$, vergleicht dann den p-Wert mit dem Signifikanzniveau und formuliert erst danach die ökonomische Aussage. "Signifikant" ersetzt nie die inhaltliche Interpretation.',
    pitfalls: [
      'Den p-Wert als Wahrscheinlichkeit der Nullhypothese zu lesen.',
      'Die Testentscheidung zu nennen, ohne den Richtungsbezug der Fragestellung zu erklären.'
    ]
  }, { moduleSlug: 'statistik', blockId: 'statistik_rlab_ttest' }),
  renderRPracticeMarkup({
    title: 'Regression: Output in Sprache übersetzen',
    purpose: 'Die Regressionsroutine ist nur der technische Teil. Studienrelevant wird sie erst, wenn Koeffizient, Signifikanz und Modellbild gemeinsam gedeutet werden.',
    script: 'R-Workflow: lm(), summary() und Streudiagramm mit Regressionsgerade',
    code: String.raw`model <- lm(y ~ x, data = df)
summary(model)$coefficients
plot(df$x, df$y, main = "y auf x", pch = 19, col = "steelblue")
abline(model, col = "red", lwd = 2)`,
    output: 'summary(model)$coefficients zeigt Interzept, Steigung, Standardfehler, t-Wert und p-Wert. Der Plot macht sichtbar, ob die geschätzte Gerade zur Datenwolke passt.',
    miniTask: 'Ergänze den Workflow um confint(model) und formuliere dann die Steigung als inhaltliche Veränderung von y bei einer Einheit mehr x.',
    solution: 'Die belastbare Antwort nennt die Steigung, erklärt sie ceteris paribus und ergänzt, ob das Konfidenzintervall die Null ausschließt. Plot und Output müssen dieselbe Geschichte erzählen.',
    pitfalls: [
      'Nur auf Sterne zu schauen und die Größe des Effekts zu ignorieren.',
      'Die Regressionsgerade als Kausalbeweis statt als linearen Zusammenhang zu lesen.'
    ]
  }, { moduleSlug: 'statistik', blockId: 'statistik_rlab_regression' })
];

function renderStatistikRLabTheory() {
  return String.raw`
    <div class="section-block">
      <h3>R als Statistik-Workflow</h3>
      <p>Das Statistik-R-Lab ist kein Zusatztool, sondern der praktische Gegenpart zum Kurs: Daten lesen, passende Methode wählen, Output interpretieren und typische Fehlgriffe erkennen.</p>
      <p>Die Reihenfolge bleibt immer gleich: Datensatz prüfen, geeignete Kennzahl oder Methode wählen, Output fachlich lesen und erst dann das Ergebnis in einen Prüfungssatz übersetzen.</p>
    </div>
    <div class="section-block">
      <h3>Woran du einen guten R-Zugriff erkennst</h3>
      <ul>
        <li>Der Befehl passt zur statistischen Frage, nicht nur zur Syntax.</li>
        <li>Der Output wird in Sprache und Entscheidung übersetzt.</li>
        <li>Plots und Kennzahlen erzählen dieselbe inhaltliche Geschichte.</li>
      </ul>
    </div>
    ${STATISTIK_R_PRACTICE.join('\n')}
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>R ersetzt die Statistiklogik nicht:</strong> Erst Datentyp, Hypothese und Modellidee klären, dann den passenden Befehl verwenden. Wer direkt in die Konsole springt, produziert oft formal korrekte, aber fachlich falsche Antworten.</div>
    </div>
  `;
}

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
  },
  wahrscheinlichkeit: {
    motivation: 'Die Wahrscheinlichkeitsrechnung liefert die mathematische Sprache für Unsicherheit. Ohne sie sind weder Verteilungen noch statistische Schlüsse möglich.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Grundbegriffe</h3>
      <p>Ein <strong>Zufallsexperiment</strong> hat mehrere mögliche Ergebnisse. Die Menge aller Ergebnisse heißt <strong>Ergebnisraum</strong> $\Omega$. Ein <strong>Ereignis</strong> ist eine Teilmenge von $\Omega$.</p>
    </div>
    <div class="section-block">
      <h3>Axiome von Kolmogorov</h3>
      <ol>
        <li>$P(A) \geq 0$ für jedes Ereignis $A$.</li>
        <li>$P(\Omega) = 1$.</li>
        <li>Für disjunkte Ereignisse: $P(A \cup B) = P(A) + P(B)$.</li>
      </ol>
    </div>
    <div class="section-block">
      <h3>Bedingte Wahrscheinlichkeit</h3>
      <p>Die Wahrscheinlichkeit von $A$ gegeben $B$:</p>
      <div class="math-block">$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$</div>
      <p>Zwei Ereignisse sind <strong>unabhängig</strong>, wenn $P(A|B) = P(A)$, also $P(A \cap B) = P(A) \cdot P(B)$.</p>
    </div>
    <div class="section-block">
      <h3>Satz von Bayes</h3>
      <div class="math-block">$$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$</div>
      <p>Bayes erlaubt es, eine a-priori-Wahrscheinlichkeit $P(A)$ durch neue Daten $B$ zu aktualisieren.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Unabhängigkeit vs. Disjunktheit:</strong> Disjunkte Ereignisse ($A \cap B = \emptyset$) sind in der Regel nicht unabhängig — im Gegenteil: wenn $A$ eintritt, ist $B$ ausgeschlossen.</div>
    </div>
    `,
    formeln: [
      { label: 'Bedingte Wkt.', eq: String.raw`$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$`, desc: 'Definition' },
      { label: 'Bayes', eq: String.raw`$$P(A|B) = \frac{P(B|A)\,P(A)}{P(B)}$$`, desc: 'Aktualisierung' },
      { label: 'Totale Wkt.', eq: String.raw`$$P(B) = \sum_i P(B|A_i)\,P(A_i)$$`, desc: 'Zerlegung' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Test erkennt eine Krankheit mit $P(\text{positiv}|\text{krank})=0{,}99$. Die Krankheit betrifft $1\%$ der Bevölkerung. Der Test hat eine Falsch-Positiv-Rate von $5\%$. Wie hoch ist $P(\text{krank}|\text{positiv})$?`,
        steps: [
          { text: `Totale Wahrscheinlichkeit für positiven Test:`, eq: String.raw`P(+) = 0{,}99 \cdot 0{,}01 + 0{,}05 \cdot 0{,}99 = 0{,}0099 + 0{,}0495 = 0{,}0594` },
          { text: `Bayes anwenden:`, eq: String.raw`P(K|+) = \frac{0{,}99 \cdot 0{,}01}{0{,}0594} \approx 0{,}167` }
        ],
        result: String.raw`$P(\text{krank}|\text{positiv}) \approx 16{,}7\%$ — trotz gutem Test ist die Mehrheit der positiv Getesteten gesund (Basisraten-Effekt).`
      }
    ]
  },
  verteilungen: {
    motivation: 'Zufallsvariablen ordnen jedem Ergebnis eine Zahl zu. Ihre Verteilung beschreibt, welche Werte wie wahrscheinlich sind.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Zufallsvariable</h3>
      <p>Eine <strong>Zufallsvariable</strong> $X$ ist eine Funktion $X: \Omega \to \mathbb{R}$. Der <strong>Erwartungswert</strong> (Mittelwert der Verteilung) und die <strong>Varianz</strong> (Streuung) charakterisieren sie:</p>
      <div class="math-block">$$E[X] = \sum_x x \cdot P(X=x) \quad\text{(diskret)}$$</div>
      <div class="math-block">$$\text{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$$</div>
    </div>
    <div class="section-block">
      <h3>Binomialverteilung</h3>
      <p>Zählt die Erfolge bei $n$ unabhängigen Versuchen mit Erfolgswahrscheinlichkeit $p$:</p>
      <div class="math-block">$$P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$$</div>
      <p>Erwartungswert $E[X] = np$, Varianz $\text{Var}(X) = np(1-p)$.</p>
    </div>
    <div class="section-block">
      <h3>Normalverteilung</h3>
      <p>Die wichtigste stetige Verteilung. Die Dichte der Standardnormalverteilung ($\mu=0, \sigma=1$):</p>
      <div class="math-block">$$\varphi(z) = \frac{1}{\sqrt{2\pi}} e^{-z^2/2}$$</div>
      <p>Jede Normalverteilung $X \sim N(\mu, \sigma^2)$ kann standardisiert werden: $Z = (X - \mu)/\sigma$.</p>
    </div>
    <div class="section-block">
      <h3>Zentraler Grenzwertsatz</h3>
      <p>Für eine Summe von $n$ unabhängigen, identisch verteilten Zufallsvariablen mit Erwartungswert $\mu$ und Varianz $\sigma^2$ gilt für großes $n$:</p>
      <div class="math-block">$$\bar{X}_n \overset{approx}{\sim} N\!\left(\mu,\, \frac{\sigma^2}{n}\right)$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Varianz vs. Standardabweichung:</strong> Die Varianz hat die Einheit zum Quadrat. Für die Interpretation in Originaleinheiten immer die Standardabweichung $\sigma = \sqrt{\text{Var}}$ verwenden.</div>
    </div>
    `,
    formeln: [
      { label: 'Erwartungswert', eq: String.raw`$$E[X] = \sum x\,P(X=x)$$`, desc: 'Diskret' },
      { label: 'Verschiebungssatz', eq: String.raw`$$\text{Var}(X) = E[X^2] - (E[X])^2$$`, desc: 'Varianzberechnung' },
      { label: 'Binomial', eq: String.raw`$$P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}$$`, desc: 'Erfolge bei n Versuchen' },
      { label: 'Standardisierung', eq: String.raw`$$Z = \frac{X - \mu}{\sigma}$$`, desc: 'Transformation auf N(0,1)' }
    ],
    aufgaben: [
      {
        text: String.raw`Eine faire Münze wird $100$-mal geworfen. Wie groß ist die Wahrscheinlichkeit, zwischen $45$ und $55$ Mal Kopf zu erhalten? Nutzen Sie die Normalapproximation.`,
        steps: [
          { text: `Parameter: $n=100$, $p=0{,}5$.`, eq: String.raw`E[X] = 50, \; \sigma = \sqrt{25} = 5` },
          { text: `Standardisieren: $z_1 = (45-50)/5$, $z_2 = (55-50)/5$.`, eq: String.raw`z_1 = -1, \; z_2 = 1` },
          { text: `Nachschlagen: $P(-1 < Z < 1)$.`, eq: String.raw`\approx 0{,}6827` }
        ],
        result: String.raw`$P(45 \leq X \leq 55) \approx 68{,}3\%$.`
      }
    ]
  },
  schaetzen: {
    motivation: 'Wir beobachten eine Stichprobe und wollen auf die unbekannten Parameter der Grundgesamtheit schließen. Punktschätzer und Konfidenzintervalle sind die Werkzeuge dafür.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Punktschätzer</h3>
      <p>Ein <strong>Punktschätzer</strong> $\hat{\theta}$ ist eine Funktion der Stichprobe, die einen Populationsparameter $\theta$ approximiert. Zentrale Eigenschaften:</p>
      <ul>
        <li><strong>Erwartungstreue:</strong> $E[\hat{\theta}] = \theta$ (kein systematischer Fehler).</li>
        <li><strong>Effizienz:</strong> Unter allen erwartungstreuen Schätzern hat der effiziente die kleinste Varianz.</li>
        <li><strong>Konsistenz:</strong> $\hat{\theta} \overset{p}{\to} \theta$ für $n \to \infty$.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Konfidenzintervall</h3>
      <p>Ein $100(1-\alpha)\%$-Konfidenzintervall für $\mu$ bei bekanntem $\sigma$:</p>
      <div class="math-block">$$\bar{x} \pm z_{1-\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$$</div>
      <p>Bei unbekanntem $\sigma$ verwenden wir die t-Verteilung mit $n-1$ Freiheitsgraden:</p>
      <div class="math-block">$$\bar{x} \pm t_{n-1,\,1-\alpha/2} \cdot \frac{s}{\sqrt{n}}$$</div>
    </div>
    <div class="section-block">
      <h3>Interpretation</h3>
      <p>Ein 95%-Konfidenzintervall bedeutet: Bei wiederholter Stichprobenziehung enthalten $95\%$ aller so berechneten Intervalle den wahren Parameter. Es sagt <strong>nicht</strong>, dass der Parameter mit $95\%$ im Intervall liegt.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Fehlinterpretation KI:</strong> Das Konfidenzintervall ist eine Eigenschaft der Methode, nicht des Parameters. Der Parameter ist fix — das Intervall ist zufällig.</div>
    </div>
    `,
    formeln: [
      { label: 'KI (z)', eq: String.raw`$$\bar{x} \pm z_{1-\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}$$`, desc: 'Bei bekanntem σ' },
      { label: 'KI (t)', eq: String.raw`$$\bar{x} \pm t_{n-1,\,1-\alpha/2} \cdot \frac{s}{\sqrt{n}}$$`, desc: 'Bei unbekanntem σ' }
    ],
    aufgaben: [
      {
        text: String.raw`Aus einer Stichprobe mit $n=36$ ergibt sich $\bar{x}=120$ und $s=18$. Berechnen Sie das $95\%$-Konfidenzintervall für $\mu$.`,
        steps: [
          { text: `Standardfehler:`, eq: String.raw`SE = 18/\sqrt{36} = 3` },
          { text: `Kritischer Wert: $t_{35,\,0{,}975} \approx 2{,}03$.`, eq: null },
          { text: `Intervall berechnen:`, eq: String.raw`120 \pm 2{,}03 \cdot 3 = [113{,}91;\; 126{,}09]` }
        ],
        result: String.raw`$95\%$-KI: $[113{,}9;\; 126{,}1]$.`
      }
    ]
  },
  regression: {
    motivation: 'Die lineare Regression modelliert den Zusammenhang zwischen einer abhängigen und einer oder mehreren unabhängigen Variablen. Sie ist das Kernwerkzeug der empirischen Wirtschaftsforschung.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Einfache lineare Regression</h3>
      <p>Modell: $y_i = \beta_0 + \beta_1 x_i + \varepsilon_i$. Die Kleinste-Quadrate-Methode (KQ/OLS) minimiert $\sum \hat{\varepsilon}_i^2$:</p>
      <div class="math-block">$$\hat{\beta}_1 = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sum(x_i - \bar{x})^2} = \frac{s_{xy}}{s_x^2}$$</div>
      <div class="math-block">$$\hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$$</div>
    </div>
    <div class="section-block">
      <h3>Bestimmtheitsmaß R²</h3>
      <p>$R^2$ misst den Anteil der erklärten Streuung an der Gesamtstreuung:</p>
      <div class="math-block">$$R^2 = 1 - \frac{SSR}{SST} = \frac{SSE}{SST}$$</div>
      <p>Dabei: $SST = \sum(y_i - \bar{y})^2$, $SSE = \sum(\hat{y}_i - \bar{y})^2$, $SSR = \sum \hat{\varepsilon}_i^2$.</p>
    </div>
    <div class="section-block">
      <h3>Signifikanztest für β₁</h3>
      <p>H0: $\beta_1 = 0$ (kein linearer Zusammenhang). Teststatistik:</p>
      <div class="math-block">$$t = \frac{\hat{\beta}_1}{SE(\hat{\beta}_1)}$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>R² und Kausalität:</strong> Ein hohes $R^2$ beweist keinen kausalen Zusammenhang. Es misst nur den linearen Erklärungsanteil in der Stichprobe.</div>
    </div>
    `,
    formeln: [
      { label: 'Steigungsschätzer', eq: String.raw`$$\hat{\beta}_1 = \frac{s_{xy}}{s_x^2}$$`, desc: 'KQ-Schätzer' },
      { label: 'Bestimmtheitsmaß', eq: String.raw`$$R^2 = 1 - \frac{SSR}{SST}$$`, desc: 'Erklärte Varianz' }
    ],
    aufgaben: [
      {
        text: String.raw`Gegeben: $\bar{x}=5$, $\bar{y}=20$, $s_{xy}=15$, $s_x^2=5$. Bestimmen Sie die Regressionsgerade.`,
        steps: [
          { text: `Steigung berechnen:`, eq: String.raw`\hat{\beta}_1 = 15/5 = 3` },
          { text: `Achsenabschnitt berechnen:`, eq: String.raw`\hat{\beta}_0 = 20 - 3 \cdot 5 = 5` }
        ],
        result: String.raw`$\hat{y} = 5 + 3x$.`
      }
    ]
  },
  rlab: {
    motivation: 'R ist die Standardsprache für statistische Analysen in der Wissenschaft. Hier verbinden wir die gelernten Konzepte mit der praktischen Umsetzung.',
    theorie: renderStatistikRLabTheory(),
    formeln: [
      { label: 'R-Syntax Regression', eq: String.raw`\texttt{lm(y \sim x1 + x2, data)}`, desc: 'Lineare Regression in R' }
    ],
    aufgaben: [
      {
        text: String.raw`In R haben Sie ein Modell geschätzt: \texttt{model <- lm(Lohn ~ Bildung + Erfahrung, data=df)}. Der Output zeigt $\hat{\beta}_{\text{Bildung}} = 2{,}5$ mit $p = 0{,}003$. Interpretieren Sie.`,
        steps: [
          { text: `Koeffizient interpretieren:`, eq: String.raw`\text{Ein zusätzliches Bildungsjahr erhöht den Lohn um 2,5 Einheiten (ceteris paribus).}` },
          { text: `Signifikanz prüfen: $p = 0{,}003 < 0{,}05$.`, eq: String.raw`\text{H0 (}\beta = 0\text{) wird auf dem 5%-Niveau abgelehnt.}` }
        ],
        result: String.raw`Bildung hat einen signifikant positiven Effekt auf den Lohn ($p < 0{,}01$).`
      }
    ]
  }
};
