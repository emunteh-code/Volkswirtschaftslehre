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
  { id: 'z_test', title: 'z-Test & Normalverteilungstest', cat: 'Induktion', short: 'z-Test' },
  { id: 'zwei_stichproben', title: 'Zwei-Stichproben-Tests', cat: 'Induktion', short: '2-Stpr.' },
  { id: 'varianzanalyse', title: 'Varianzanalyse (ANOVA)', cat: 'Modelle', short: 'ANOVA' },
  { id: 'nichtparametrisch', title: 'Nichtparametrische Tests', cat: 'Modelle', short: 'Nichtpar.' },
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
      },
      {
        text: String.raw`Die Monatsgehälter fünf zufällig gewählter Beschäftigter lauten: $2000, 2500, 3000, 3500, 9000$. Berechnen Sie Median, arithmetisches Mittel und Variationskoeffizienten. Welches Lagemaß ist hier vorzuziehen?`,
        steps: [
          { text: `Geordnete Reihe, Median (mittlerer Wert bei $n=5$):`, eq: String.raw`\tilde{x} = 3000` },
          { text: `Arithmetisches Mittel:`, eq: String.raw`\bar{x} = \frac{2000+2500+3000+3500+9000}{5} = \frac{20000}{5} = 4000` },
          { text: `Standardabweichung berechnen (Abweichungsquadrate):`, eq: String.raw`s^2 = \frac{(2000-4000)^2+(2500-4000)^2+(3000-4000)^2+(3500-4000)^2+(9000-4000)^2}{4} = \frac{4{,}000{,}000+2{,}250{,}000+1{,}000{,}000+250{,}000+25{,}000{,}000}{4} = 8{,}125{,}000` },
          { text: `Variationskoeffizient:`, eq: String.raw`v = \frac{s}{\bar{x}} = \frac{\sqrt{8{,}125{,}000}}{4000} \approx \frac{2850}{4000} \approx 0{,}71` }
        ],
        result: String.raw`$\tilde{x} = 3000$, $\bar{x} = 4000$, $v \approx 0{,}71$. Der Ausreißer $9000$ zieht das Mittel deutlich nach oben. Bei schiefen Verteilungen mit Ausreißern ist der Median das robustere Lagemaß.`
      },
      {
        text: String.raw`Ein Datensatz hat $n = 10$ Werte mit $\sum x_i = 80$ und $\sum x_i^2 = 700$. Berechnen Sie die Stichprobenvarianz über den Verschiebungssatz.`,
        steps: [
          { text: `Mittelwert:`, eq: String.raw`\bar{x} = \frac{80}{10} = 8` },
          { text: `Verschiebungssatz anwenden:`, eq: String.raw`s^2 = \frac{1}{n-1}\left(\sum x_i^2 - n\bar{x}^2\right) = \frac{1}{9}(700 - 10 \cdot 64)` },
          { text: `Auswerten:`, eq: String.raw`s^2 = \frac{700 - 640}{9} = \frac{60}{9} \approx 6{,}67` }
        ],
        result: String.raw`$s^2 \approx 6{,}67$, $s \approx 2{,}58$. Der Verschiebungssatz vermeidet die direkte Berechnung aller Abweichungen vom Mittelwert und ist besonders bei großen Datensätzen recheneffizient.`
      },
      {
        text: String.raw`Berechnen Sie für die gruppierten Daten den approximierten Mittelwert und die approximierte Standardabweichung. Klassen: $[0,10)$ mit Häufigkeit $n_1=4$, $[10,20)$ mit $n_2=6$, $[20,30)$ mit $n_3=10$. Gesamtumfang $n=20$.`,
        steps: [
          { text: `Klassenmitten bestimmen:`, eq: String.raw`m_1 = 5,\quad m_2 = 15,\quad m_3 = 25` },
          { text: `Gewichteter Mittelwert:`, eq: String.raw`\bar{x} = \frac{4 \cdot 5 + 6 \cdot 15 + 10 \cdot 25}{20} = \frac{20+90+250}{20} = \frac{360}{20} = 18` },
          { text: `Gewichtete Abweichungsquadrate:`, eq: String.raw`s^2 = \frac{4(5-18)^2 + 6(15-18)^2 + 10(25-18)^2}{20-1} = \frac{4 \cdot 169 + 6 \cdot 9 + 10 \cdot 49}{19} = \frac{676+54+490}{19} = \frac{1220}{19} \approx 64{,}2` },
          { text: `Standardabweichung:`, eq: String.raw`s = \sqrt{64{,}2} \approx 8{,}01` }
        ],
        result: String.raw`$\bar{x} = 18$, $s \approx 8{,}0$. Bei gruppierten Daten sind Mittelwert und Streuung Näherungswerte, da innerhalb einer Klasse nur die Klassenmitte bekannt ist.`
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
      },
      {
        text: String.raw`Gegeben sind die Datenpunkte $(x_i, y_i)$: $(1,2)$, $(2,4)$, $(3,5)$, $(4,4)$, $(5,5)$. Berechnen Sie die Kovarianz $s_{xy}$ und den Pearson-Korrelationskoeffizienten $r$.`,
        steps: [
          { text: `Mittelwerte berechnen:`, eq: String.raw`\bar{x} = \frac{1+2+3+4+5}{5} = 3, \quad \bar{y} = \frac{2+4+5+4+5}{5} = 4` },
          { text: `Kovarianz: Summe der Kreuzabweichungen geteilt durch $n-1$:`, eq: String.raw`s_{xy} = \frac{(1-3)(2-4)+(2-3)(4-4)+(3-3)(5-4)+(4-3)(4-4)+(5-3)(5-4)}{4} = \frac{4+0+0+0+2}{4} = 1{,}5` },
          { text: `Varianzen berechnen:`, eq: String.raw`s_x^2 = \frac{4+1+0+1+4}{4} = 2{,}5 \quad s_y^2 = \frac{4+0+1+0+1}{4} = 1{,}5` },
          { text: `Korrelationskoeffizient:`, eq: String.raw`r = \frac{s_{xy}}{s_x \cdot s_y} = \frac{1{,}5}{\sqrt{2{,}5} \cdot \sqrt{1{,}5}} = \frac{1{,}5}{\sqrt{3{,}75}} \approx \frac{1{,}5}{1{,}936} \approx 0{,}775` }
        ],
        result: String.raw`$s_{xy} = 1{,}5$, $r \approx 0{,}775$. Ein positiver Korrelationskoeffizient nahe 1 zeigt einen starken positiven linearen Zusammenhang zwischen $x$ und $y$.`
      },
      {
        text: String.raw`Ein Forscher findet $r = 0{,}92$ zwischen Eiscremeverkauf und Ertrinkungsunfällen. Erläutern Sie das Konzept der Scheinkorrelation und nennen Sie die wahrscheinliche Drittvariable.`,
        steps: [
          { text: `Definition Scheinkorrelation:`, eq: String.raw`r_{xy} \neq 0 \text{, aber kein kausaler Zusammenhang zwischen } x \text{ und } y` },
          { text: `Identifiziere Drittvariable $z$:`, eq: String.raw`z = \text{Temperatur/Sommerzeit} \implies z \to x \text{ (mehr Eis)} \text{ und } z \to y \text{ (mehr Badende, mehr Unfälle)}` },
          { text: `Korrelation bei Kontrolle für $z$: Partialkorrelation nahe null.`, eq: String.raw`r_{xy \cdot z} \approx 0 \implies \text{kein direkter Zusammenhang zwischen Eisverkauf und Unfällen}` }
        ],
        result: String.raw`Die Scheinkorrelation wird durch die Drittvariable Temperatur erzeugt. Hohe Temperaturen erhöhen sowohl den Eiscremeverkauf als auch die Zahl der Badenden — und damit die Unfallgefahr. Die Partialkorrelation bei konstanter Temperatur wäre nahe null. Merksatz: Korrelation impliziert keine Kausalität.`
      },
      {
        text: String.raw`Rangkorrelation nach Spearman: Sieben Studenten erhalten Noten in Mathematik und Statistik (je Rang 1–7). Rangdifferenzen $d_i$: $1, -1, 2, 0, -2, 1, -1$. Berechnen Sie den Spearman-Korrelationskoeffizienten $r_S$.`,
        steps: [
          { text: `Rangdifferenzen quadrieren und summieren:`, eq: String.raw`\sum d_i^2 = 1+1+4+0+4+1+1 = 12` },
          { text: `Spearman-Formel anwenden ($n=7$):`, eq: String.raw`r_S = 1 - \frac{6 \sum d_i^2}{n(n^2-1)} = 1 - \frac{6 \cdot 12}{7 \cdot 48} = 1 - \frac{72}{336}` },
          { text: `Auswerten:`, eq: String.raw`r_S = 1 - 0{,}214 = 0{,}786` }
        ],
        result: String.raw`$r_S \approx 0{,}786$. Es besteht ein deutlich positiver monotoner Zusammenhang zwischen den Leistungen in Mathematik und Statistik. Der Spearman-Koeffizient ist gegenüber Ausreißern robuster als Pearson, da er nur die Ränge verwendet.`
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
      },
      {
        text: String.raw`Ein linksseitiger t-Test soll prüfen, ob der mittlere Lohn unter $\mu_0 = 2800$ Euro liegt ($H_1: \mu < 2800$). Stichprobe: $n=16$, $\bar{x}=2650$, $s=400$. Signifikanzniveau $\alpha=0{,}05$. Kritischer Wert: $t_{15;\,0{,}05} = -1{,}753$. Treffen Sie die Testentscheidung.`,
        steps: [
          { text: `Teststatistik berechnen:`, eq: String.raw`t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}} = \frac{2650-2800}{400/\sqrt{16}} = \frac{-150}{100} = -1{,}5` },
          { text: `Ablehnbereich für linksseitigen Test:`, eq: String.raw`K = \{t \mid t < -1{,}753\}` },
          { text: `Vergleich: $t = -1{,}5 > -1{,}753$, also $t \notin K$.`, eq: String.raw`-1{,}5 > -1{,}753 \implies H_0 \text{ wird nicht abgelehnt.}` }
        ],
        result: String.raw`$H_0$ kann nicht abgelehnt werden. Die Daten liefern auf dem $5\%$-Niveau keine ausreichende Evidenz dafür, dass der mittlere Lohn unter $2800$ Euro liegt.`
      },
      {
        text: String.raw`Erläutern Sie den Unterschied zwischen Fehler 1. Art und Fehler 2. Art. Wie hängen $\alpha$, $\beta$ und die Teststärke $1-\beta$ zusammen? Welche Konsequenz hat eine Verringerung von $\alpha$ bei festem $n$?`,
        steps: [
          { text: `Fehler 1. Art: $H_0$ abgelehnt, obwohl sie wahr ist. Wahrscheinlichkeit = $\alpha$.`, eq: String.raw`\alpha = P(\text{ablehnen } H_0 \mid H_0 \text{ wahr})` },
          { text: `Fehler 2. Art: $H_0$ beibehalten, obwohl $H_1$ wahr ist. Wahrscheinlichkeit = $\beta$.`, eq: String.raw`\beta = P(\text{beibehalten } H_0 \mid H_1 \text{ wahr})` },
          { text: `Teststärke: Wahrscheinlichkeit, einen wahren Effekt zu entdecken.`, eq: String.raw`1-\beta = P(\text{ablehnen } H_0 \mid H_1 \text{ wahr})` },
          { text: `Tradeoff: Bei festem $n$ sinkt $\alpha$ $\Rightarrow$ kritischer Bereich kleiner $\Rightarrow$ $\beta$ steigt.`, eq: String.raw`\alpha \downarrow \implies K \text{ kleiner} \implies \beta \uparrow \implies 1-\beta \downarrow` }
        ],
        result: String.raw`Senkung von $\alpha$ (konservativerer Test) erhöht bei gleichem Stichprobenumfang $\beta$ (Verlust an Teststärke). Um beide Fehlerwahrscheinlichkeiten gleichzeitig zu senken, muss $n$ erhöht werden.`
      },
      {
        text: String.raw`p-Wert Interpretation: Ein t-Test ergibt $t = 2{,}1$ bei $df = 20$. Aus der t-Tabelle entnehmen Sie: $P(T > 2{,}086) = 0{,}025$ (einseitig). Berechnen Sie den zweiseitigen p-Wert und fällen Sie die Entscheidung bei $\alpha = 0{,}05$.`,
        steps: [
          { text: `Einseitiger p-Wert für $t = 2{,}1 > 2{,}086$:`, eq: String.raw`p_{einseitig} < 0{,}025` },
          { text: `Zweiseitiger p-Wert (da $|t|$ symmetrisch):`, eq: String.raw`p_{zweiseitig} = 2 \cdot p_{einseitig} < 2 \cdot 0{,}025 = 0{,}05` },
          { text: `Entscheidung: $p < \alpha = 0{,}05$.`, eq: String.raw`p < 0{,}05 \implies H_0 \text{ ablehnen (gerade noch signifikant)}` }
        ],
        result: String.raw`$p_{zweiseitig} < 0{,}05$: $H_0$ wird auf dem $5\%$-Niveau abgelehnt. Der p-Wert misst die Wahrscheinlichkeit, unter $H_0$ ein so extremes oder extremeres Ergebnis zu erhalten — er ist kein Maß für die Wahr­scheinlichkeit der Nullhypothese selbst.`
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
      },
      {
        text: String.raw`Eine Urne enthält $3$ rote und $7$ blaue Kugeln. Zwei Kugeln werden ohne Zurücklegen gezogen. Berechnen Sie $P(\text{beide rot})$, $P(\text{erste rot, zweite blau})$ und $P(\text{mindestens eine rot})$.`,
        steps: [
          { text: `$P(\text{beide rot})$: Bedingte Wahrscheinlichkeit.`, eq: String.raw`P(R_1 \cap R_2) = P(R_1) \cdot P(R_2 \mid R_1) = \frac{3}{10} \cdot \frac{2}{9} = \frac{6}{90} = \frac{1}{15}` },
          { text: `$P(\text{erste rot, zweite blau})$:`, eq: String.raw`P(R_1 \cap B_2) = \frac{3}{10} \cdot \frac{7}{9} = \frac{21}{90} = \frac{7}{30}` },
          { text: `$P(\text{mindestens eine rot})$ über Gegenwahrscheinlichkeit:`, eq: String.raw`P(\text{mind. eine rot}) = 1 - P(\text{keine rot}) = 1 - \frac{7}{10} \cdot \frac{6}{9} = 1 - \frac{42}{90} = 1 - \frac{7}{15} = \frac{8}{15}` }
        ],
        result: String.raw`$P(\text{beide rot}) = \tfrac{1}{15} \approx 0{,}067$; $P(R_1, B_2) = \tfrac{7}{30} \approx 0{,}233$; $P(\text{mind. eine rot}) = \tfrac{8}{15} \approx 0{,}533$.`
      },
      {
        text: String.raw`Zwei Ereignisse $A$ und $B$ erfüllen: $P(A) = 0{,}4$, $P(B) = 0{,}3$, $P(A \cup B) = 0{,}58$. Sind $A$ und $B$ unabhängig? Berechnen Sie $P(A \cap B)$ und $P(A \mid B)$.`,
        steps: [
          { text: `$P(A \cap B)$ aus Additionsformel:`, eq: String.raw`P(A \cap B) = P(A) + P(B) - P(A \cup B) = 0{,}4 + 0{,}3 - 0{,}58 = 0{,}12` },
          { text: `Unabhängigkeitstest: Vergleiche $P(A) \cdot P(B)$ mit $P(A \cap B)$.`, eq: String.raw`P(A) \cdot P(B) = 0{,}4 \cdot 0{,}3 = 0{,}12 = P(A \cap B) \implies \text{unabhängig}` },
          { text: `Bedingte Wahrscheinlichkeit:`, eq: String.raw`P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{0{,}12}{0{,}3} = 0{,}4 = P(A)` }
        ],
        result: String.raw`$P(A \cap B) = 0{,}12$. Da $P(A \cap B) = P(A) \cdot P(B)$, sind $A$ und $B$ stochastisch unabhängig. Daher gilt $P(A \mid B) = P(A) = 0{,}4$ — das Wissen um $B$ ändert die Wahrscheinlichkeit von $A$ nicht.`
      },
      {
        text: String.raw`Drei Maschinen $M_1$, $M_2$, $M_3$ produzieren $50\%$, $30\%$ und $20\%$ der Teile. Ihre Ausschussquoten sind $2\%$, $4\%$ und $6\%$. Ein zufällig entnommenes Teil ist defekt. Mit welcher Wahrscheinlichkeit stammt es von $M_3$?`,
        steps: [
          { text: `Totale Wahrscheinlichkeit für Defekt:`, eq: String.raw`P(D) = 0{,}5 \cdot 0{,}02 + 0{,}3 \cdot 0{,}04 + 0{,}2 \cdot 0{,}06 = 0{,}01 + 0{,}012 + 0{,}012 = 0{,}034` },
          { text: `Bayes für $M_3$:`, eq: String.raw`P(M_3 \mid D) = \frac{P(D \mid M_3) \cdot P(M_3)}{P(D)} = \frac{0{,}06 \cdot 0{,}2}{0{,}034} = \frac{0{,}012}{0{,}034}` },
          { text: `Auswerten:`, eq: String.raw`P(M_3 \mid D) \approx 0{,}353` }
        ],
        result: String.raw`$P(M_3 \mid D) \approx 35{,}3\%$. Obwohl $M_3$ nur $20\%$ der Teile liefert, stammt mehr als ein Drittel der Defekte von ihr — wegen ihrer hohen Ausschussquote von $6\%$. Bayes aktualisiert die Prior-Wahrscheinlichkeit $P(M_3) = 0{,}2$ zu $P(M_3 \mid D) = 0{,}353$.`
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
      },
      {
        text: String.raw`$X \sim B(8,\, 0{,}3)$. Berechnen Sie $P(X = 2)$, $E[X]$ und $\text{Var}(X)$.`,
        steps: [
          { text: `Binomialwahrscheinlichkeit $P(X=2)$:`, eq: String.raw`P(X=2) = \binom{8}{2}(0{,}3)^2(0{,}7)^6 = 28 \cdot 0{,}09 \cdot 0{,}1176 \approx 28 \cdot 0{,}01059 \approx 0{,}296` },
          { text: `Erwartungswert:`, eq: String.raw`E[X] = np = 8 \cdot 0{,}3 = 2{,}4` },
          { text: `Varianz:`, eq: String.raw`\text{Var}(X) = np(1-p) = 8 \cdot 0{,}3 \cdot 0{,}7 = 1{,}68` }
        ],
        result: String.raw`$P(X=2) \approx 0{,}296$, $E[X] = 2{,}4$, $\text{Var}(X) = 1{,}68$, $\sigma \approx 1{,}30$.`
      },
      {
        text: String.raw`$X \sim N(50,\, 100)$ (d.h. $\mu=50$, $\sigma^2=100$, $\sigma=10$). Berechnen Sie $P(X > 65)$ und $P(40 < X < 60)$.`,
        steps: [
          { text: `Standardisierung für $P(X>65)$:`, eq: String.raw`z = \frac{65-50}{10} = 1{,}5 \implies P(X>65) = 1 - \Phi(1{,}5) = 1 - 0{,}9332 = 0{,}0668` },
          { text: `Standardisierung für $P(40 < X < 60)$:`, eq: String.raw`z_1 = \frac{40-50}{10} = -1, \quad z_2 = \frac{60-50}{10} = 1` },
          { text: `Berechnung:`, eq: String.raw`P(40 < X < 60) = \Phi(1) - \Phi(-1) = 0{,}8413 - 0{,}1587 = 0{,}6827` }
        ],
        result: String.raw`$P(X > 65) \approx 6{,}68\%$; $P(40 < X < 60) \approx 68{,}3\%$. Die 68-95-99,7-Regel: Innerhalb $\pm 1\sigma$ liegen ca. $68{,}3\%$ der Werte.`
      },
      {
        text: String.raw`Erläutern Sie den Zentralen Grenzwertsatz (ZGS) und seine Bedeutung für die Statistik. Stichprobenumfang $n=36$ aus einer Verteilung mit $\mu=20$, $\sigma^2=144$. Wie ist $\bar{X}$ verteilt, und mit welcher Wahrscheinlichkeit liegt $\bar{X}$ zwischen $18$ und $22$?`,
        steps: [
          { text: `ZGS: Für großes $n$ gilt näherungsweise:`, eq: String.raw`\bar{X} \overset{\text{approx}}{\sim} N\!\left(\mu,\, \frac{\sigma^2}{n}\right) = N\!\left(20,\, \frac{144}{36}\right) = N(20,\, 4)` },
          { text: `Standardfehler des Mittelwerts: $SE = \sigma/\sqrt{n}$.`, eq: String.raw`SE = \sqrt{4} = 2` },
          { text: `Standardisierung: $z_1 = (18-20)/2 = -1$, $z_2 = (22-20)/2 = 1$.`, eq: String.raw`P(18 < \bar{X} < 22) = P(-1 < Z < 1) \approx 0{,}6827` }
        ],
        result: String.raw`$\bar{X} \approx N(20,\, 4)$. $P(18 < \bar{X} < 22) \approx 68{,}3\%$. Der ZGS ist die Basis nahezu aller inferenzstatistischen Methoden: Egal wie die Grundgesamtheit verteilt ist — für großes $n$ ist der Stichprobenmittelwert annähernd normalverteilt.`
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
      },
      {
        text: String.raw`Ein Meinungsforschungsinstitut möchte den Anteil $p$ der Wahlberechtigten, die Partei A unterstützen, auf $\pm 2$ Prozentpunkte genau schätzen ($\alpha = 0{,}05$). Wie groß muss $n$ mindestens sein? Nutzen Sie $p = 0{,}5$ als konservative Schätzung.`,
        steps: [
          { text: `Formel für Stichprobengröße (KI für Anteil):`, eq: String.raw`n \geq \left(\frac{z_{1-\alpha/2}}{d}\right)^2 p(1-p)` },
          { text: `Werte einsetzen ($z_{0{,}975} = 1{,}96$, $d = 0{,}02$, $p = 0{,}5$):`, eq: String.raw`n \geq \left(\frac{1{,}96}{0{,}02}\right)^2 \cdot 0{,}25 = 98^2 \cdot 0{,}25 = 9604 \cdot 0{,}25 = 2401` }
        ],
        result: String.raw`Mindestens $n = 2401$ Befragte. Bei $p = 0{,}5$ ist die Varianz $p(1-p) = 0{,}25$ maximal — die konservative Wahl ergibt immer den größten Stichprobenumfang.`
      },
      {
        text: String.raw`Vergleichen Sie die Eigenschaften der Schätzer $\hat{\mu}_1 = \bar{X}$ (Stichprobenmittelwert) und $\hat{\mu}_2 = X_1$ (erster Beobachtungswert) für den Erwartungswert $\mu$ einer normalverteilten Population. Prüfen Sie Erwartungstreue und Effizienz.`,
        steps: [
          { text: `Erwartungstreue von $\hat{\mu}_1$:`, eq: String.raw`E[\bar{X}] = \frac{1}{n}\sum E[X_i] = \mu \implies \text{erwartungstreu}` },
          { text: `Erwartungstreue von $\hat{\mu}_2$:`, eq: String.raw`E[X_1] = \mu \implies \text{auch erwartungstreu}` },
          { text: `Varianzen vergleichen:`, eq: String.raw`\text{Var}(\bar{X}) = \frac{\sigma^2}{n} \quad \text{vs.} \quad \text{Var}(X_1) = \sigma^2` },
          { text: `Effizienz: Cramér-Rao-Schranke für $\mu$:`, eq: String.raw`\text{Var}(\bar{X}) = \frac{\sigma^2}{n} \leq \sigma^2 = \text{Var}(X_1) \implies \bar{X} \text{ ist effizienter}` }
        ],
        result: String.raw`Beide Schätzer sind erwartungstreu. Aber $\bar{X}$ hat Varianz $\sigma^2/n$, während $X_1$ Varianz $\sigma^2$ hat. Mit wachsendem $n$ wird $\bar{X}$ beliebig präzise — $X_1$ bleibt konstant ungenau. $\bar{X}$ erreicht die Cramér-Rao-Schranke und ist der BLUE (Best Linear Unbiased Estimator).`
      },
      {
        text: String.raw`Ein $99\%$-KI für $\mu$ soll bei bekanntem $\sigma = 20$ berechnet werden. Stichprobengröße $n = 25$, $\bar{x} = 80$. Berechnen Sie das Intervall und erläutern Sie, wie es sich von einem $95\%$-KI unterscheidet.`,
        steps: [
          { text: `Kritischer z-Wert für $99\%$: $z_{0{,}995} = 2{,}576$.`, eq: String.raw`z_{0{,}995} = 2{,}576` },
          { text: `Standardfehler:`, eq: String.raw`SE = \frac{\sigma}{\sqrt{n}} = \frac{20}{\sqrt{25}} = 4` },
          { text: `$99\%$-KI:`, eq: String.raw`80 \pm 2{,}576 \cdot 4 = 80 \pm 10{,}3 = [69{,}7;\; 90{,}3]` },
          { text: `Vergleich mit $95\%$-KI ($z = 1{,}96$):`, eq: String.raw`95\%\text{-KI}: 80 \pm 1{,}96 \cdot 4 = [72{,}2;\; 87{,}8] \quad \text{(schmaler)}` }
        ],
        result: String.raw`$99\%$-KI: $[69{,}7;\; 90{,}3]$. Das $99\%$-Intervall ist breiter als das $95\%$-Intervall: Mehr Sicherheit kostet Präzision. Für höhere Konfidenzniveaus muss man bereit sein, ein ungenaueres (breiteres) Intervall zu akzeptieren.`
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
      },
      {
        text: String.raw`Datenpunkte: $(1,3)$, $(2,5)$, $(3,7)$, $(4,9)$. Schätzen Sie die einfache Regressionsgerade $\hat{y} = \hat{\beta}_0 + \hat{\beta}_1 x$ per KQ-Methode und berechnen Sie $R^2$.`,
        steps: [
          { text: `Mittelwerte: $\bar{x} = 2{,}5$, $\bar{y} = 6$.`, eq: String.raw`\bar{x} = \frac{1+2+3+4}{4} = 2{,}5 \quad \bar{y} = \frac{3+5+7+9}{4} = 6` },
          { text: `Schätzer $\hat{\beta}_1$:`, eq: String.raw`\hat{\beta}_1 = \frac{\sum(x_i-\bar{x})(y_i-\bar{y})}{\sum(x_i-\bar{x})^2} = \frac{(-1{,}5)(-3)+(-0{,}5)(-1)+(0{,}5)(1)+(1{,}5)(3)}{2{,}25+0{,}25+0{,}25+2{,}25} = \frac{4{,}5+0{,}5+0{,}5+4{,}5}{5} = \frac{10}{5} = 2` },
          { text: `Schätzer $\hat{\beta}_0$:`, eq: String.raw`\hat{\beta}_0 = \bar{y} - \hat{\beta}_1\bar{x} = 6 - 2 \cdot 2{,}5 = 1` },
          { text: `$R^2$: Da alle Punkte exakt auf der Geraden liegen, gilt $SSR = 0$.`, eq: String.raw`R^2 = 1 - \frac{SSR}{SST} = 1 - 0 = 1` }
        ],
        result: String.raw`$\hat{y} = 1 + 2x$, $R^2 = 1{,}00$. Die Datenpunkte liegen exakt auf der Geraden — ein perfekter linearer Zusammenhang. In der Praxis ist $R^2 = 1$ verdächtig und kann auf Multikollinearität, Datenfehler oder zu wenige Beobachtungen hinweisen.`
      },
      {
        text: String.raw`Ein Regressionsmodell $\hat{y} = 10 + 2{,}5x$ wurde an $n=30$ Beobachtungen geschätzt. $SST = 500$, $SSR = 100$. Berechnen Sie $R^2$, die Modellgüte und den $F$-Wert für den globalen Signifikanztest.`,
        steps: [
          { text: `Erklärte Streuung: $SSE = SST - SSR$.`, eq: String.raw`SSE = 500 - 100 = 400` },
          { text: `Bestimmtheitsmaß:`, eq: String.raw`R^2 = \frac{SSE}{SST} = \frac{400}{500} = 0{,}80` },
          { text: `$F$-Statistik (1 Regressor, $k=1$, $df_1=1$, $df_2=n-2=28$):`, eq: String.raw`F = \frac{SSE/k}{SSR/(n-k-1)} = \frac{400/1}{100/28} = \frac{400}{3{,}571} \approx 112` },
          { text: `Entscheidung: $F_{krit}(1, 28; 0{,}05) \approx 4{,}20$. Da $F \gg F_{krit}$:`, eq: String.raw`F = 112 \gg 4{,}20 \implies H_0: \beta_1 = 0 \text{ wird abgelehnt}` }
        ],
        result: String.raw`$R^2 = 0{,}80$: Das Modell erklärt $80\%$ der Varianz von $y$. Der globale $F$-Test ist hochsignifikant ($F \approx 112$), d.h. der Regressor $x$ trägt signifikant zur Erklärung von $y$ bei.`
      },
      {
        text: String.raw`Erläutern Sie die vier Gauss-Markov-Annahmen für das klassische lineare Modell und begründen Sie, warum der OLS-Schätzer unter diesen Annahmen der BLUE (Best Linear Unbiased Estimator) ist.`,
        steps: [
          { text: `GM1: Linearität im Parameter.`, eq: String.raw`y = X\beta + \varepsilon \quad \text{(Modell korrekt spezifiziert)}` },
          { text: `GM2: Strikte Exogenität der Regressoren.`, eq: String.raw`E[\varepsilon \mid X] = 0 \implies \text{kein Omitted Variable Bias}` },
          { text: `GM3: Sphärische Störterme (Homoskedastizität + keine Autokorrelation).`, eq: String.raw`\text{Var}(\varepsilon \mid X) = \sigma^2 I_n \implies \text{kein Effizienzproblem}` },
          { text: `GM4: Voller Rang der Regressorenmatrix (keine Multikollinearität).`, eq: String.raw`\text{rank}(X) = k \implies (X'X)^{-1} \text{ existiert}` }
        ],
        result: String.raw`Unter GM1–GM4 gilt nach dem Gauss-Markov-Theorem: $\hat{\beta}_{OLS} = (X'X)^{-1}X'y$ ist unter allen linearen erwartungstreuen Schätzern derjenige mit minimaler Varianz. Verletzungen (Heteroskedastizität $\to$ GM3, Endogenität $\to$ GM2) zerstören Effizienz bzw. Erwartungstreue und erfordern alternative Schätzer (WLS, IV/2SLS).`
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
      },
      {
        text: String.raw`In R führen Sie \texttt{t.test(x, mu = 50, alternative = "greater")} aus. Das Ergebnis zeigt $t = 1{,}84$, $df = 24$, $p = 0{,}039$. Formulieren Sie die vollständige Testentscheidung bei $\alpha = 0{,}05$ und interpretieren Sie das Konfidenzintervall.`,
        steps: [
          { text: `Hypothesen identifizieren:`, eq: String.raw`H_0: \mu \leq 50 \quad H_1: \mu > 50 \quad (\text{rechtsseitiger Test})` },
          { text: `Entscheidungsregel:`, eq: String.raw`p = 0{,}039 < \alpha = 0{,}05 \implies H_0 \text{ ablehnen}` },
          { text: `Konfidenzintervall \texttt{alternative="greater"}: einseitiges KI.`, eq: String.raw`[\bar{x} - t_{24;\,0{,}95} \cdot SE;\; +\infty) \implies \text{Untergrenze des einseitigen KI liegt über 50}` }
        ],
        result: String.raw`$H_0$ wird auf dem $5\%$-Niveau abgelehnt. Es gibt statistisch signifikante Evidenz dafür, dass $\mu > 50$. Das einseitige KI schließt $50$ nicht ein, was die Entscheidung bestätigt.`
      },
      {
        text: String.raw`In R wird \texttt{cor.test(df\$x, df\$y)} ausgeführt. Ergebnis: $r = 0{,}71$, $t = 3{,}84$, $df = 18$, $p = 0{,}0012$. Interpretieren Sie den Korrelationskoeffizienten, prüfen Sie die Signifikanz und nennen Sie die zugrundeliegende Nullhypothese.`,
        steps: [
          { text: `Nullhypothese von \texttt{cor.test}:`, eq: String.raw`H_0: \rho = 0 \quad (\text{kein linearer Zusammenhang in der Population})` },
          { text: `Teststatistik: t-Wert für Korrelationstest.`, eq: String.raw`t = r \sqrt{\frac{n-2}{1-r^2}} = 0{,}71 \cdot \sqrt{\frac{18}{1-0{,}504}} = 0{,}71 \cdot \sqrt{36{,}3} \approx 3{,}84` },
          { text: `Entscheidung: $p = 0{,}0012 < 0{,}01$.`, eq: String.raw`H_0 \text{ ablehnen auf 1\%-Niveau: Die Korrelation ist hochsignifikant von null verschieden.}` }
        ],
        result: String.raw`$r = 0{,}71$ zeigt einen starken positiven linearen Zusammenhang. Der Test ist hochsignifikant ($p < 0{,}01$). Aber: Auch $r = 0{,}71$ erklärt nur $r^2 = 0{,}504$, also ca. $50\%$ der Varianz. Signifikanz und Effektgröße müssen stets gemeinsam beurteilt werden.`
      },
      {
        text: String.raw`In R soll geprüft werden, ob zwei Gruppen denselben Mittelwert haben: \texttt{t.test(x \textasciitilde{} gruppe, data=df, var.equal=TRUE)}. Ergebnis: $t = -2{,}31$, $df = 38$, $p = 0{,}026$. Was bedeutet \texttt{var.equal=TRUE}? Wann ist der Welch-Test (\texttt{var.equal=FALSE}) vorzuziehen?`,
        steps: [
          { text: `\texttt{var.equal=TRUE}: Pooled-t-Test, setzt $\sigma_1^2 = \sigma_2^2$ voraus.`, eq: String.raw`t_{pool} = \frac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{1/n_1 + 1/n_2}}, \quad s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}` },
          { text: `Entscheidung: $p = 0{,}026 < 0{,}05$.`, eq: String.raw`H_0: \mu_1 = \mu_2 \text{ wird abgelehnt} \implies \text{Gruppenunterschiede signifikant}` },
          { text: `Welch-Test (\texttt{var.equal=FALSE}): Robuster bei unterschiedlichen Varianzen.`, eq: String.raw`\sigma_1^2 \neq \sigma_2^2 \implies \text{Welch } df < n_1+n_2-2 \implies \text{konservativer Test}` }
        ],
        result: String.raw`Der Pooled-t-Test ist effizienter, wenn die Varianzen wirklich gleich sind. Der Welch-Test ist sicherer, wenn die Varianzhomogenität unsicher ist — er verliert bei gleichen Varianzen kaum Power. In der Praxis wird \texttt{var.equal=FALSE} (Welch) standardmäßig empfohlen.`
      }
    ]
  },
  z_test: {
    motivation: 'Der z-Test ist der einfachste Signifikanztest. Er ist anwendbar, wenn die Populationsvarianz bekannt ist oder der Stichprobenumfang groß genug für die Normalapproximation ist.',
    theorie: String.raw`
    <div class="section-block">
      <h3>z-Test für den Mittelwert (bekanntes $\sigma$)</h3>
      <p>Ist die Populationsstandardabweichung $\sigma$ bekannt, nutzen wir die z-Statistik:</p>
      <div class="math-block">$$z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$$</div>
      <p>Unter $H_0$ folgt $z$ einer Standardnormalverteilung $N(0,1)$.</p>
    </div>
    <div class="section-block">
      <h3>Entscheidungsregeln</h3>
      <ul>
        <li><strong>Zweiseitig ($H_1: \mu \neq \mu_0$):</strong> $|z| > z_{1-\alpha/2}$ (z.B. $|z| > 1{,}96$ bei $\alpha=5\%$).</li>
        <li><strong>Rechtsseitig ($H_1: \mu > \mu_0$):</strong> $z > z_{1-\alpha}$ (z.B. $z > 1{,}645$).</li>
        <li><strong>Linksseitig ($H_1: \mu < \mu_0$):</strong> $z < -z_{1-\alpha}$.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>z-Test für Anteile</h3>
      <p>Für den Hypothesentest $H_0: p = p_0$ mit großem $n$:</p>
      <div class="math-block">$$z = \frac{\hat{p} - p_0}{\sqrt{p_0(1-p_0)/n}}$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>z vs. t:</strong> Den z-Test nur verwenden, wenn $\sigma$ wirklich bekannt ist. In der Praxis ist $\sigma$ fast nie bekannt — dann ist der t-Test korrekt. Bei sehr großem $n$ nähern sich $z$ und $t$ an, da $t_\infty = z$.</div>
    </div>
    `,
    formeln: [
      { label: 'z-Statistik', eq: String.raw`$$z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}$$`, desc: 'Bekannte Populationsvarianz' },
      { label: 'z-Test Anteil', eq: String.raw`$$z = \frac{\hat{p} - p_0}{\sqrt{p_0(1-p_0)/n}}$$`, desc: 'Anteilstest' }
    ],
    aufgaben: [
      {
        text: String.raw`Eine Maschine soll Schrauben mit $\mu_0 = 50$ mm Länge herstellen. Die Populationsstandardabweichung ist bekannt: $\sigma = 2$ mm. Eine Stichprobe von $n = 25$ Schrauben ergibt $\bar{x} = 50{,}8$ mm. Testen Sie zweiseitig bei $\alpha = 0{,}05$.`,
        steps: [
          { text: `z-Statistik berechnen:`, eq: String.raw`z = \frac{50{,}8 - 50}{2/\sqrt{25}} = \frac{0{,}8}{0{,}4} = 2{,}0` },
          { text: `Kritischer Wert: $z_{0{,}975} = 1{,}96$.`, eq: String.raw`|z| = 2{,}0 > 1{,}96 \implies z \in K` },
          { text: `p-Wert berechnen: $P(|Z| > 2{,}0) = 2(1-\Phi(2{,}0))$.`, eq: String.raw`p = 2(1-0{,}9772) = 2 \cdot 0{,}0228 = 0{,}0456 < 0{,}05` }
        ],
        result: String.raw`$H_0: \mu = 50$ wird abgelehnt ($z = 2{,}0 > 1{,}96$, $p \approx 0{,}046$). Es gibt signifikante Evidenz dafür, dass die Maschine außerhalb der Toleranz produziert.`
      },
      {
        text: String.raw`In einer Befragung von $n = 400$ Personen gaben $\hat{p} = 0{,}56$ an, Partei A zu wählen. Testen Sie $H_0: p = 0{,}50$ gegen $H_1: p > 0{,}50$ bei $\alpha = 0{,}01$.`,
        steps: [
          { text: `z-Statistik für Anteilstest:`, eq: String.raw`z = \frac{0{,}56 - 0{,}50}{\sqrt{0{,}50 \cdot 0{,}50 / 400}} = \frac{0{,}06}{\sqrt{0{,}000625}} = \frac{0{,}06}{0{,}025} = 2{,}4` },
          { text: `Kritischer Wert (rechtsseitig, $\alpha = 0{,}01$): $z_{0{,}99} = 2{,}326$.`, eq: String.raw`z = 2{,}4 > 2{,}326 \implies H_0 \text{ ablehnen}` },
          { text: `p-Wert: $P(Z > 2{,}4) = 1 - \Phi(2{,}4)$.`, eq: String.raw`p = 1 - 0{,}9918 = 0{,}0082 < 0{,}01` }
        ],
        result: String.raw`$H_0$ wird auf dem $1\%$-Niveau abgelehnt. Es gibt hochsignifikante Evidenz, dass die Zustimmung zu Partei A über $50\%$ liegt.`
      },
      {
        text: String.raw`Erklären Sie die Beziehung zwischen dem z-Test und dem $95\%$-Konfidenzintervall. Wenn $\mu_0$ im $95\%$-KI liegt, was folgt für den zweiseitigen z-Test bei $\alpha = 0{,}05$?`,
        steps: [
          { text: `$95\%$-KI bei bekanntem $\sigma$:`, eq: String.raw`\left[\bar{x} - 1{,}96\frac{\sigma}{\sqrt{n}};\; \bar{x} + 1{,}96\frac{\sigma}{\sqrt{n}}\right]` },
          { text: `Äquivalenz: $\mu_0$ liegt im KI $\iff |z| \leq 1{,}96$.`, eq: String.raw`\left|\frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}\right| \leq 1{,}96 \iff \mu_0 \in \text{KI}` },
          { text: `Schlussfolgerung:`, eq: String.raw`\mu_0 \in \text{KI}_{95\%} \implies |z| \leq 1{,}96 \implies H_0 \text{ nicht ablehnen bei } \alpha = 0{,}05` }
        ],
        result: String.raw`KI und zweiseitiger Test sind formal äquivalent: $H_0$ wird genau dann nicht abgelehnt, wenn $\mu_0$ im KI liegt. Diese Dualität gilt allgemein und erlaubt, aus einem KI direkt auf die Testentscheidung zu schließen.`
      },
      {
        text: String.raw`Eine historische Datenreihe zeigt, dass Tagesrenditen einer Aktie normalverteilt sind mit bekanntem $\sigma = 1{,}5\%$. Im letzten Monat ($n=20$ Handelstage) betrug $\bar{x} = 0{,}3\%$ täglich. Testen Sie $H_0: \mu = 0$ (kein Trend) gegen $H_1: \mu \neq 0$ bei $\alpha = 0{,}05$.`,
        steps: [
          { text: `z-Statistik:`, eq: String.raw`z = \frac{0{,}3 - 0}{1{,}5/\sqrt{20}} = \frac{0{,}3}{1{,}5/4{,}472} = \frac{0{,}3}{0{,}3354} \approx 0{,}894` },
          { text: `Kritischer Wert: $z_{0{,}975} = 1{,}96$.`, eq: String.raw`|z| = 0{,}894 < 1{,}96 \implies H_0 \text{ nicht ablehnen}` },
          { text: `p-Wert: $P(|Z| > 0{,}894) \approx 2(1-0{,}814) = 0{,}372$.`, eq: String.raw`p \approx 0{,}37 \gg 0{,}05 \implies \text{kein signifikanter Trend}` }
        ],
        result: String.raw`$H_0$ kann nicht abgelehnt werden. Die beobachtete durchschnittliche Tagesrendite von $0{,}3\%$ ist statistisch nicht von null verschieden — sie könnte rein zufällig entstanden sein. Bei $n = 20$ Tagen ist die Teststärke für kleine Effekte begrenzt.`
      }
    ]
  },
  zwei_stichproben: {
    motivation: 'Häufig interessiert uns nicht ein einzelner Mittelwert, sondern der Unterschied zwischen zwei Gruppen. Zwei-Stichproben-Tests vergleichen Mittelwerte, Varianzen oder Anteile.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Zwei-Stichproben t-Test (unverbunden)</h3>
      <p>Vergleich zweier unabhängiger Gruppen. Pooled-t-Test bei Varianzhomogenität ($\sigma_1^2 = \sigma_2^2$):</p>
      <div class="math-block">$$t = \frac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{\tfrac{1}{n_1}+\tfrac{1}{n_2}}}, \quad s_p^2 = \frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}$$</div>
      <p>Welch-t-Test bei ungleichen Varianzen: angepasste Freiheitsgrade nach Satterthwaite.</p>
    </div>
    <div class="section-block">
      <h3>Verbundener t-Test (Paarvergleich)</h3>
      <p>Bei gepaarten Beobachtungen (z.B. Vor/Nachher) bildet man Differenzen $d_i = x_{1i} - x_{2i}$ und wendet einen Einstichproben-t-Test auf die Differenzen an:</p>
      <div class="math-block">$$t = \frac{\bar{d}}{s_d/\sqrt{n}}$$</div>
    </div>
    <div class="section-block">
      <h3>F-Test auf Varianzhomogenität</h3>
      <p>Vor dem Pooled-t-Test prüft man $H_0: \sigma_1^2 = \sigma_2^2$:</p>
      <div class="math-block">$$F = \frac{s_1^2}{s_2^2} \sim F(n_1-1,\, n_2-1)$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Unverbunden vs. verbunden:</strong> Wird eine Paarstruktur ignoriert und stattdessen ein unverbundener Test durchgeführt, verliert man die Kontrolle über individuelle Unterschiede. Der verbundene Test hat bei echter Paarung mehr Teststärke.</div>
    </div>
    `,
    formeln: [
      { label: 'Pooled s²', eq: String.raw`$$s_p^2 = \frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}$$`, desc: 'Gepoolte Varianz' },
      { label: 'Verbundener t', eq: String.raw`$$t = \frac{\bar{d}}{s_d/\sqrt{n}}$$`, desc: 'Paarvergleich' }
    ],
    aufgaben: [
      {
        text: String.raw`Gruppe A ($n_1=10$, $\bar{x}_1=25$, $s_1^2=9$) und Gruppe B ($n_2=12$, $\bar{x}_2=22$, $s_2^2=16$). Führen Sie einen zweiseitigen Welch-t-Test bei $\alpha=0{,}05$ durch. Kritischer Wert $t_{krit} \approx 2{,}09$ (Satterthwaite $df \approx 19$).`,
        steps: [
          { text: `Standardfehler der Differenz:`, eq: String.raw`SE = \sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}} = \sqrt{\frac{9}{10}+\frac{16}{12}} = \sqrt{0{,}9+1{,}333} = \sqrt{2{,}233} \approx 1{,}494` },
          { text: `t-Statistik:`, eq: String.raw`t = \frac{25-22}{1{,}494} = \frac{3}{1{,}494} \approx 2{,}007` },
          { text: `Entscheidung: $|t| = 2{,}007 < 2{,}09 = t_{krit}$.`, eq: String.raw`|t| < t_{krit} \implies H_0: \mu_1 = \mu_2 \text{ nicht ablehnen}` }
        ],
        result: String.raw`$H_0$ kann auf dem $5\%$-Niveau nicht abgelehnt werden. Die Differenz $\bar{x}_1 - \bar{x}_2 = 3$ ist nicht signifikant — allerdings liegt $t$ knapp unter dem kritischen Wert, sodass ein größerer Stichprobenumfang möglicherweise zur Ablehnung führen würde.`
      },
      {
        text: String.raw`Eine Studie misst den Blutdruck von $n=8$ Patienten vor und nach einem Training. Differenzen (vorher − nachher): $5, 3, 8, 2, 6, 4, 7, 1$. Führen Sie den verbundenen t-Test bei $\alpha=0{,}05$ durch ($t_{7;\,0{,}975} = 2{,}365$).`,
        steps: [
          { text: `Mittelwert der Differenzen:`, eq: String.raw`\bar{d} = \frac{5+3+8+2+6+4+7+1}{8} = \frac{36}{8} = 4{,}5` },
          { text: `Standardabweichung der Differenzen ($s_d$):`, eq: String.raw`s_d^2 = \frac{\sum(d_i-\bar{d})^2}{7} = \frac{(0{,}5)^2+(-1{,}5)^2+(3{,}5)^2+(-2{,}5)^2+(1{,}5)^2+(-0{,}5)^2+(2{,}5)^2+(-3{,}5)^2}{7} = \frac{42}{7} = 6 \implies s_d \approx 2{,}449` },
          { text: `t-Statistik:`, eq: String.raw`t = \frac{4{,}5}{2{,}449/\sqrt{8}} = \frac{4{,}5}{0{,}866} \approx 5{,}20` },
          { text: `Entscheidung: $|t| = 5{,}20 > 2{,}365$.`, eq: String.raw`H_0: \mu_d = 0 \text{ ablehnen} \implies \text{Training senkt Blutdruck signifikant}` }
        ],
        result: String.raw`$H_0$ wird abgelehnt. Das Training hat eine statistisch signifikante blutdrucksenkende Wirkung ($t \approx 5{,}2$, $p < 0{,}01$). Der verbundene Test ist hier korrekt, da dieselben Patienten gemessen wurden.`
      },
      {
        text: String.raw`F-Test auf Varianzhomogenität: Gruppe 1 ($n_1=11$, $s_1^2=24$), Gruppe 2 ($n_2=9$, $s_2^2=8$). Testen Sie $H_0: \sigma_1^2 = \sigma_2^2$ zweiseitig bei $\alpha=0{,}10$. Kritische Werte: $F_{10,8;\,0{,}95} = 3{,}35$ (obere Schranke).`,
        steps: [
          { text: `F-Statistik (größere durch kleinere Varianz):`, eq: String.raw`F = \frac{s_1^2}{s_2^2} = \frac{24}{8} = 3{,}0` },
          { text: `Zweiseitiger Test: Obere Grenze $F_{0{,}95} = 3{,}35$.`, eq: String.raw`F = 3{,}0 < 3{,}35 \implies H_0 \text{ nicht ablehnen}` }
        ],
        result: String.raw`Die Varianzen unterscheiden sich nicht signifikant auf dem $10\%$-Niveau ($F = 3{,}0 < 3{,}35$). Der Pooled-t-Test wäre daher gerechtfertigt. Beachte: Der F-Test ist selbst nicht robust gegenüber Normalverteilungsverletzungen — bei Zweifeln besser Levene-Test.`
      },
      {
        text: String.raw`Zwei Kurse A und B haben dieselbe Klausur geschrieben. Kurs A: $n_A=15$, $\bar{x}_A=72$, $s_A=8$. Kurs B: $n_B=15$, $\bar{x}_B=68$, $s_B=10$. Pooled-t-Test ($df=28$, $t_{krit}=2{,}048$). Berechnen Sie die gepoolte Standardabweichung, die t-Statistik und fällen Sie die Entscheidung.`,
        steps: [
          { text: `Gepoolte Varianz:`, eq: String.raw`s_p^2 = \frac{14 \cdot 64 + 14 \cdot 100}{28} = \frac{896+1400}{28} = \frac{2296}{28} = 82 \implies s_p = \sqrt{82} \approx 9{,}055` },
          { text: `t-Statistik:`, eq: String.raw`t = \frac{72-68}{9{,}055\sqrt{1/15+1/15}} = \frac{4}{9{,}055 \cdot 0{,}3651} = \frac{4}{3{,}307} \approx 1{,}209` },
          { text: `Entscheidung: $|t| = 1{,}209 < 2{,}048$.`, eq: String.raw`H_0: \mu_A = \mu_B \text{ nicht ablehnen bei } \alpha = 0{,}05` }
        ],
        result: String.raw`$H_0$ kann nicht abgelehnt werden. Trotz der Differenz von $4$ Punkten ist der Unterschied statistisch nicht signifikant — die Streuung innerhalb der Kurse ist zu groß. Für einen machtstarken Test wäre ein größerer Stichprobenumfang nötig.`
      }
    ]
  },
  varianzanalyse: {
    motivation: 'Die Varianzanalyse (ANOVA) erweitert den Gruppenvergleich auf mehr als zwei Gruppen. Sie testet, ob mindestens eine Gruppe einen anderen Mittelwert hat.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Einfaktorielle ANOVA</h3>
      <p>Gegeben $k$ Gruppen mit Gesamtbeobachtungen $N$. Die Gesamtstreuung wird zerlegt:</p>
      <div class="math-block">$$SST = SSB + SSW$$</div>
      <p>$SSB$ (Between): Streuung zwischen den Gruppen. $SSW$ (Within): Streuung innerhalb der Gruppen.</p>
    </div>
    <div class="section-block">
      <h3>F-Test der ANOVA</h3>
      <div class="math-block">$$F = \frac{SSB/(k-1)}{SSW/(N-k)} = \frac{MSB}{MSW}$$</div>
      <p>Unter $H_0: \mu_1 = \dots = \mu_k$ folgt $F \sim F(k-1,\, N-k)$. Großes $F$ spricht gegen $H_0$.</p>
    </div>
    <div class="section-block">
      <h3>Post-hoc-Tests</h3>
      <p>Ein signifikanter F-Test sagt nur, dass <em>irgendeine</em> Gruppe verschieden ist. Post-hoc-Tests (Tukey, Bonferroni) identifizieren, welche Gruppen sich unterscheiden, und kontrollieren den familienweisen Fehler 1. Art.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>ANOVA-Voraussetzungen:</strong> Normalverteilung innerhalb der Gruppen, Varianzhomogenität (Levene-Test), unabhängige Beobachtungen. Bei Verletzung: Kruskal-Wallis-Test als nichtparametrische Alternative.</div>
    </div>
    `,
    formeln: [
      { label: 'F-Statistik ANOVA', eq: String.raw`$$F = \frac{MSB}{MSW} = \frac{SSB/(k-1)}{SSW/(N-k)}$$`, desc: 'Varianzzerlegung' }
    ],
    aufgaben: [
      {
        text: String.raw`Drei Gruppen: A ($n_A=4$, $\bar{x}_A=10$), B ($n_B=4$, $\bar{x}_B=14$), C ($n_C=4$, $\bar{x}_C=12$). Gesamtmittelwert $\bar{x}=12$. $SSW = 24$. Berechnen Sie $SSB$, $F$ und entscheiden Sie bei $\alpha=0{,}05$ ($F_{krit}(2,9)=4{,}26$).`,
        steps: [
          { text: `$SSB$ berechnen:`, eq: String.raw`SSB = \sum_j n_j(\bar{x}_j - \bar{x})^2 = 4(10-12)^2 + 4(14-12)^2 + 4(12-12)^2 = 16+16+0 = 32` },
          { text: `Mittlere Quadratsummen:`, eq: String.raw`MSB = \frac{32}{k-1} = \frac{32}{2} = 16 \quad MSW = \frac{24}{N-k} = \frac{24}{9} = 2{,}667` },
          { text: `F-Statistik:`, eq: String.raw`F = \frac{16}{2{,}667} \approx 6{,}0` },
          { text: `Entscheidung: $F = 6{,}0 > 4{,}26$.`, eq: String.raw`H_0: \mu_A = \mu_B = \mu_C \text{ ablehnen} \implies \text{mind. eine Gruppe unterscheidet sich}` }
        ],
        result: String.raw`$F \approx 6{,}0 > F_{krit} = 4{,}26$: $H_0$ wird abgelehnt. Es gibt signifikante Unterschiede zwischen den Gruppen. Ein Post-hoc-Test (z.B. Tukey) würde zeigen, dass B sich von A unterscheidet.`
      },
      {
        text: String.raw`Erläutern Sie das Problem der multiplen Vergleiche. Wenn man 3 Gruppen paarweise vergleicht (3 Tests), wie groß ist die familienweise Fehlerrate, wenn jeder einzelne Test $\alpha = 0{,}05$ hat? Welche Korrektur wäre angemessen?`,
        steps: [
          { text: `Anzahl paarweiser Vergleiche bei $k=3$ Gruppen: $\binom{3}{2}$.`, eq: String.raw`\binom{3}{2} = 3 \text{ Tests}` },
          { text: `Familienweiser Fehler 1. Art (Bonferroni-Approximation):`, eq: String.raw`\alpha_{FW} = 1 - (1-\alpha)^m = 1 - (0{,}95)^3 = 1 - 0{,}857 = 0{,}143` },
          { text: `Bonferroni-Korrektur: Adjustiertes Niveau pro Test.`, eq: String.raw`\alpha_{adj} = \frac{\alpha}{m} = \frac{0{,}05}{3} \approx 0{,}017` }
        ],
        result: String.raw`Ohne Korrektur beträgt die familienweise Fehlerrate ca. $14{,}3\%$ — weit über dem gewünschten $5\%$. Die Bonferroni-Korrektur verwendet $\alpha_{adj} = 0{,}017$ pro Test. Alternativen: Tukey-Korrektur (exakt für alle Paarvergleiche), Holm-Bonferroni (weniger konservativ).`
      },
      {
        text: String.raw`ANOVA-Tabelle ausfüllen: $k=4$ Gruppen, $N=20$ Beobachtungen insgesamt. $SSB = 60$, $SST = 140$. Berechnen Sie alle fehlenden Größen und den F-Wert ($F_{krit}(3,16) = 3{,}24$ bei $\alpha = 0{,}05$).`,
        steps: [
          { text: `$SSW$ aus $SST = SSB + SSW$:`, eq: String.raw`SSW = SST - SSB = 140 - 60 = 80` },
          { text: `Freiheitsgrade: $df_B = k-1$, $df_W = N-k$.`, eq: String.raw`df_B = 3, \quad df_W = 16` },
          { text: `Mittlere Quadratsummen:`, eq: String.raw`MSB = 60/3 = 20 \quad MSW = 80/16 = 5` },
          { text: `F-Wert und Entscheidung:`, eq: String.raw`F = 20/5 = 4{,}0 > 3{,}24 \implies H_0 \text{ ablehnen}` }
        ],
        result: String.raw`$SSW = 80$, $MSB = 20$, $MSW = 5$, $F = 4{,}0 > 3{,}24$: Signifikante Unterschiede zwischen den $4$ Gruppen auf dem $5\%$-Niveau. Das Effektmaß $\eta^2 = SSB/SST = 60/140 \approx 0{,}43$ zeigt einen starken Effekt.`
      },
      {
        text: String.raw`Drei Werbestrategien wurden je an $5$ Kunden getestet. Umsätze: A: $(10, 12, 11, 13, 9)$, B: $(14, 16, 15, 17, 13)$, C: $(11, 13, 12, 10, 14)$. Berechnen Sie die Gruppenstreuung $SSB$ und die Innergruppen-Streuung $SSW$.`,
        steps: [
          { text: `Gruppenmsittelwerte:`, eq: String.raw`\bar{x}_A = 11, \quad \bar{x}_B = 15, \quad \bar{x}_C = 12 \quad \bar{x}_{ges} = \frac{55+75+60}{15} = \frac{190}{15} \approx 12{,}67` },
          { text: `$SSB$:`, eq: String.raw`SSB = 5(11-12{,}67)^2 + 5(15-12{,}67)^2 + 5(12-12{,}67)^2 = 5 \cdot 2{,}789 + 5 \cdot 5{,}429 + 5 \cdot 0{,}449 \approx 43{,}3` },
          { text: `$SSW$ (Abweichungen innerhalb jeder Gruppe):`, eq: String.raw`SSW_A = (10-11)^2+(12-11)^2+(11-11)^2+(13-11)^2+(9-11)^2 = 1+1+0+4+4 = 10` },
          { text: `$SSW_B = (14-15)^2+\ldots+(13-15)^2 = 10$, $SSW_C = 10$. Gesamt:`, eq: String.raw`SSW = 10+10+10 = 30` }
        ],
        result: String.raw`$SSB \approx 43{,}3$, $SSW = 30$. $F = (43{,}3/2)/(30/12) = 21{,}65/2{,}5 = 8{,}66 > F_{krit}(2,12) \approx 3{,}89$: Die drei Werbestrategien unterscheiden sich signifikant in ihrem Effekt auf den Umsatz.`
      }
    ]
  },
  nichtparametrisch: {
    motivation: 'Nichtparametrische Tests setzen keine spezifische Verteilungsform voraus. Sie sind robuster bei kleinen Stichproben, ordinalen Daten oder wenn Normalverteilung nicht gesichert ist.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Wilcoxon-Vorzeichen-Rang-Test</h3>
      <p>Nichtparametrische Alternative zum verbundenen t-Test. Verwendet die Ränge der absoluten Differenzen mit Vorzeichen. Nullhypothese: Der Median der Differenzen ist null.</p>
    </div>
    <div class="section-block">
      <h3>Mann-Whitney-U-Test</h3>
      <p>Nichtparametrische Alternative zum unverbundenen t-Test. Testet, ob die Werte einer Gruppe tendenziell höher sind als die der anderen. Berechnung über Ränge in der kombinierten Stichprobe.</p>
      <div class="math-block">$$U = n_1 n_2 + \frac{n_1(n_1+1)}{2} - R_1$$</div>
      <p>wobei $R_1$ die Rangsumme der Gruppe 1 in der kombinierten Rangordnung ist.</p>
    </div>
    <div class="section-block">
      <h3>Kruskal-Wallis-Test</h3>
      <p>Nichtparametrische Alternative zur einfaktoriellen ANOVA. Nutzt Ränge aller Beobachtungen zur Berechnung der Teststatistik.</p>
      <div class="math-block">$$H = \frac{12}{N(N+1)}\sum_{j=1}^k \frac{R_j^2}{n_j} - 3(N+1)$$</div>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Effizienz vs. Robustheit:</strong> Nichtparametrische Tests sind robuster, aber weniger mächtig als ihre parametrischen Pendants, wenn die Verteilungsannahmen tatsächlich erfüllt sind. Bei normalverteilten Daten ist der t-Test dem Wilcoxon-Test vorzuziehen.</div>
    </div>
    `,
    formeln: [
      { label: 'Mann-Whitney U', eq: String.raw`$$U = n_1 n_2 + \frac{n_1(n_1+1)}{2} - R_1$$`, desc: 'Rangsummentest' },
      { label: 'Kruskal-Wallis H', eq: String.raw`$$H = \frac{12}{N(N+1)}\sum_j \frac{R_j^2}{n_j} - 3(N+1)$$`, desc: 'k-Gruppenvergleich' }
    ],
    aufgaben: [
      {
        text: String.raw`Wilcoxon-Vorzeichen-Rang-Test: Paarweise Differenzen $d_i$: $+5, -2, +8, +1, -3, +6$ (n=6). Führen Sie den Test durch. Kritischer Wert $W_{krit} = 2$ (zweiseitig, $\alpha=0{,}05$).`,
        steps: [
          { text: `Absolutwerte und Ränge der $|d_i|$:`, eq: String.raw`|d|: 5, 2, 8, 1, 3, 6 \implies \text{Ränge: } 4, 2, 6, 1, 3, 5` },
          { text: `Vorzeichen zuordnen: $W^+$ (positive Ränge), $W^-$ (negative Ränge).`, eq: String.raw`W^+ = 4+6+1+5 = 16 \quad W^- = 2+3 = 5` },
          { text: `Teststatistik: $W = \min(W^+, W^-)$.`, eq: String.raw`W = \min(16, 5) = 5 > W_{krit} = 2` }
        ],
        result: String.raw`$W = 5 > W_{krit} = 2$: $H_0$ (Median der Differenzen = 0) wird nicht abgelehnt. Beachte: Nulldifferenzen werden vor der Rangbildung ausgeschlossen, und Bindungen erhalten den mittleren Rang.`
      },
      {
        text: String.raw`Mann-Whitney-U-Test: Gruppe 1: $\{3, 5, 7\}$, Gruppe 2: $\{4, 6, 8, 9\}$. Berechnen Sie $U$ und $U'$ und bestimmen Sie den kleineren Wert.`,
        steps: [
          { text: `Kombinierte Rangordnung (alle 7 Werte):`, eq: String.raw`3(R=1),\; 4(R=2),\; 5(R=3),\; 6(R=4),\; 7(R=5),\; 8(R=6),\; 9(R=7)` },
          { text: `Rangsumme Gruppe 1 ($R_1$):`, eq: String.raw`R_1 = 1 + 3 + 5 = 9` },
          { text: `U-Statistik ($n_1=3$, $n_2=4$):`, eq: String.raw`U = n_1 n_2 + \frac{n_1(n_1+1)}{2} - R_1 = 12 + 6 - 9 = 9` },
          { text: `$U' = n_1 n_2 - U$:`, eq: String.raw`U' = 12 - 9 = 3 \implies U_{min} = \min(9, 3) = 3` }
        ],
        result: String.raw`$U_{min} = 3$. Bei $n_1=3$, $n_2=4$ und $\alpha=0{,}05$ (zweiseitig) liegt der kritische Wert bei $U_{krit} = 0$ — $H_0$ wird nicht abgelehnt. Interpretation: Die Werte von Gruppe 1 und 2 zeigen keine signifikant unterschiedliche Tendenz.`
      },
      {
        text: String.raw`Vergleichen Sie parametrische und nichtparametrische Tests anhand dreier Kriterien: Voraussetzungen, Teststärke und Anwendungsbereich. Nennen Sie je eine konkrete Situation, in der der nichtparametrische Test klar vorzuziehen ist.`,
        steps: [
          { text: `Voraussetzungen: Parametrisch vs. nichtparametrisch.`, eq: String.raw`\text{Param.: Normalvert. + Homoskedastizität. Nichtparam.: nur Unabhängigkeit + ordinales Skalenniveau}` },
          { text: `Teststärke: Relative Effizienz des Wilcoxon vs. t-Test.`, eq: String.raw`\text{Asymp. rel. Effizienz (ARE): Wilcoxon/t-Test} = 3/\pi \approx 0{,}955 \text{ (bei Normalvert.)}` },
          { text: `Anwendungsfall für nichtparam. Tests:`, eq: String.raw`\text{Ordinale Daten (Schulnoten, Likert-Skala), kleine } n\text{, starke Ausreißer, unbekannte Verteilung}` }
        ],
        result: String.raw`Nichtparametrische Tests sind klar vorzuziehen bei: (1) ordinalen oder nicht-metrischen Daten, (2) kleinen Stichproben ohne Normalverteilungsgarantie, (3) starken Ausreißern. Der Effizienzunterschied zu parametrischen Tests ist bei Normalverteilung gering (ARE $\approx 0{,}955$), sodass nichtparametrische Tests in der Praxis eine sichere Wahl sind.`
      },
      {
        text: String.raw`Kruskal-Wallis-Test: Drei Gruppen ($k=3$, $N=9$): A: $\{2, 4, 6\}$, B: $\{1, 5, 9\}$, C: $\{3, 7, 8\}$. Berechnen Sie die H-Statistik. Kritischer Wert $\chi^2_{2;\,0{,}05} = 5{,}991$.`,
        steps: [
          { text: `Ränge in der kombinierten Stichprobe ($N=9$):`, eq: String.raw`1(R=1),2(R=2),3(R=3),4(R=4),5(R=5),6(R=6),7(R=7),8(R=8),9(R=9)` },
          { text: `Rangsummen: $R_A = 2+4+6=12$, $R_B=1+5+9=15$, $R_C=3+7+8=18$.`, eq: String.raw`R_A = 12, \quad R_B = 15, \quad R_C = 18` },
          { text: `H-Statistik ($n_j=3$ für alle $j$):`, eq: String.raw`H = \frac{12}{9 \cdot 10}\left(\frac{12^2}{3}+\frac{15^2}{3}+\frac{18^2}{3}\right) - 3 \cdot 10 = \frac{12}{90}(48+75+108) - 30 = \frac{12 \cdot 231}{90} - 30 = 30{,}8 - 30 = 0{,}8` },
          { text: `Entscheidung: $H = 0{,}8 < 5{,}991$.`, eq: String.raw`H_0 \text{ nicht ablehnen} \implies \text{keine signifikanten Gruppenunterschiede}` }
        ],
        result: String.raw`$H = 0{,}8 < 5{,}991$: $H_0$ (alle Gruppen haben dieselbe Verteilung) wird nicht abgelehnt. Die Unterschiede in den Rangsummen sind zu klein für eine statistisch gesicherte Schlussfolgerung. Der Kruskal-Wallis-Test folgt approximativ einer $\chi^2$-Verteilung mit $k-1$ Freiheitsgraden.`
      }
    ]
  }
};
