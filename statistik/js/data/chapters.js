// ============================================================
// CHAPTERS & CONTENT DATA — Statistik
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const R_BLOCKS_BY_ID = {
  deskriptiv: [
    {
      title: 'Daten zuerst lesen, dann rechnen',
      purpose: 'Der erste R-Schritt in Statistik ist nie der Testbefehl, sondern die saubere Orientierung im Datensatz. Genau diese Reihenfolge wird im R-Tutorium 1 trainiert.',
      script: 'Quelle: TUT_01 · Datenstruktur, summary() und erste Gruppensichtung',
      code: String.raw`str(df)
summary(df)
table(df$group)`,
      output: 'str(df) trennt numerische und kategoriale Variablen. summary(df) zeigt Lage, Streuung und Extremwerte; table(df$group) prüft, ob Gruppenvergleiche überhaupt sauber besetzt sind.',
      taskPrompt: 'Ergänze die Exploration um Mittelwerte für x und y und entscheide danach in einem Satz, welche Variable im Mittel höher liegt.',
      miniTask: 'Ergänze `mean(df$x)` und `mean(df$y)` unter den bisherigen Block und formuliere danach den Vergleichssatz.',
      solution: 'Die saubere Lösung nennt nicht nur die größere Zahl, sondern ordnet sie als durchschnittliches Niveau der jeweiligen Variable ein. Erst Datensatz lesen, dann Kennzahl deuten.',
      solutionChanges: [
        'Ergänze unter den vorhandenen Explorationsbefehlen genau zwei Zeilen: `mean(df$x)` und `mean(df$y)`.',
        'Lass `str(df)`, `summary(df)` und `table(df$group)` stehen, damit die Datensatzorientierung vollständig bleibt.'
      ],
      solutionCode: String.raw`str(df)
summary(df)
table(df$group)
mean(df$x)
mean(df$y)`,
      pitfalls: [
        'Mit dem Test starten, obwohl noch unklar ist, wie die Variablen codiert sind.',
        'summary() abzulesen, ohne Extremwerte oder Gruppengrößen sprachlich zu deuten.'
      ]
    },
    {
      title: 'Histogramm und Kennzahlen zusammen lesen',
      purpose: 'Im R-Tutorium 2 werden Histogramme nicht isoliert gezeichnet, sondern mit Lage- und Streuungsmaßen verbunden. Genau diese Kopplung macht deskriptive Statistik klausurfest.',
      script: 'Quelle: TUT_02 · Histogramm, Mittelwert und Standardabweichung',
      code: String.raw`mean(df$x)
sd(df$x)
hist(df$x, breaks = 4, main = "Verteilung von x", col = "lightblue")`,
      output: 'Mittelwert und Standardabweichung quantifizieren Lage und Streuung. Das Histogramm zeigt, ob diese Kennzahlen zu einer eher symmetrischen, schiefen oder klumpigen Verteilung passen.',
      taskPrompt: 'Ersetze die Variable x durch z und prüfe dann, welche Variable stärker streut und wie die Histogrammform dazu passt.',
      miniTask: 'Ersetze in allen drei Zeilen `x` durch `z`. Formuliere danach knapp, ob `z` stärker streut und ob die Grafik diese Aussage stützt oder relativiert.',
      solution: 'Die richtige Lösung verbindet Zahl und Bild: erst `sd(...)` nennen, dann prüfen, ob Schiefe oder Ausreißer die Kennzahl treiben. Genau diese Kopplung ist klausurrelevant.',
      solutionChanges: [
        'Ersetze in allen drei Befehlen `x` durch `z`, damit Kennzahlen und Grafik dieselbe Variable beschreiben.',
        'Lass die Plotstruktur mit `hist(...)` stehen und ändere nur die referenzierte Variable.'
      ],
      solutionCode: String.raw`mean(df$z)
sd(df$z)
hist(df$z, breaks = 4, main = "Verteilung von z", col = "lightblue")`,
      pitfalls: [
        'Nur das Diagramm zu beschreiben, ohne Kennzahlen zu nennen.',
        'Standardabweichung und Varianz sprachlich zu vermischen.'
      ]
    }
  ],
  bivariat: [
    {
      title: 'Pearson und Spearman bewusst unterscheiden',
      purpose: 'Das R-Tutorium 4 kombiniert Streudiagramm-Idee und Korrelationsmaß. Im Portal trainierst du dieselbe Frage ohne Syntaxrauschen: Welches Maß beschreibt hier den Zusammenhang sinnvoll?',
      script: 'Quelle: TUT_04 · Korrelationen und Zusammenhangslesen',
      code: String.raw`cor(df$x, df$y, method = "pearson")
cor(df$x, df$y, method = "spearman")
head(data.frame(x = df$x, y = df$y))`,
      output: 'Der Pearson-Koeffizient misst lineare Stärke, Spearman reagiert auf monotone Rangzusammenhänge. Der kleine Datenausschnitt hilft dir, Zahl und Datenbild zusammenzudenken.',
      taskPrompt: 'Ergänze einen vierten Befehl, der die Kovarianz von x und y ausgibt, und ordne danach Pearson, Spearman und Kovarianz sauber ein.',
      miniTask: 'Füge `cov(df$x, df$y)` hinzu und formuliere danach in einem Satz, wofür Kovarianz nützlich ist und warum sie ohne Normierung schwerer vergleichbar ist.',
      solution: 'Klausursicher ist die Dreiteilung: Kovarianz zeigt Richtung und gemeinsame Streuung, Pearson normiert auf lineare Stärke, Spearman auf Rang-/Monotonielogik.',
      solutionChanges: [
        'Ergänze unter den beiden `cor(...)`-Befehlen genau eine zusätzliche Zeile: `cov(df$x, df$y)`.',
        'Lass die beiden Korrelationsbefehle stehen, damit die drei Zusammenhangsmaße direkt vergleichbar bleiben.'
      ],
      solutionCode: String.raw`cor(df$x, df$y, method = "pearson")
cor(df$x, df$y, method = "spearman")
cov(df$x, df$y)
head(data.frame(x = df$x, y = df$y))`,
      pitfalls: [
        'Spearman als “schlechteren Pearson” zu lesen statt als anderes Zusammenhangsmaß.',
        'Aus einem hohen Koeffizienten direkt auf Kausalität zu schließen.'
      ]
    }
  ],
  schaetzen_eigenschaften_intervalle: [
    {
      title: 'Konfidenzintervall aus dem t-Test lesen',
      purpose: 'Schätzereigenschaften werden praktisch greifbar, wenn das Konfidenzintervall nicht als Zusatzspalte, sondern als Präzisionsaussage gelesen wird.',
      script: 'Quelle: Induktive Statistik · t-basierte Intervallschätzung',
      code: String.raw`t.test(df$z, conf.level = 0.95)`,
      output: 'Der Output bündelt Mittelwert, Freiheitsgrade und 95%-Konfidenzintervall. Die zentrale Frage lautet: Welche plausiblen Populationsmittelwerte bleiben mit dieser Stichprobe vereinbar?',
      taskPrompt: 'Ändere das Konfidenzniveau auf 99% und erkläre danach knapp, warum sich das Intervall verbreitert.',
      miniTask: 'Ersetze `conf.level = 0.95` durch `conf.level = 0.99` und vergleiche das neue Intervall mit dem alten.',
      solution: 'Mit höherem Sicherheitsniveau wird das Intervall breiter, weil mehr Populationswerte abgedeckt werden sollen. In der Klausur musst du das als Präzisionsverlust bei höherer Sicherheit formulieren können.',
      solutionChanges: [
        'Ändere im vorhandenen Befehl nur den Parameter `conf.level` von `0.95` auf `0.99`.',
        'Lass den übrigen `t.test(...)`-Aufruf unverändert, damit du wirklich nur den Niveaueffekt beobachtest.'
      ],
      solutionCode: String.raw`t.test(df$z, conf.level = 0.99)`,
      pitfalls: [
        'Das Konfidenzintervall als Wahrscheinlichkeit für den wahren Mittelwert zu lesen.',
        'Breiteres Intervall mit “präziserer Schätzung” zu verwechseln.'
      ]
    }
  ],
  testen: [
    {
      title: 't-Test als Entscheidungslogik lesen',
      purpose: 'Ein Test ist erst verstanden, wenn du den R-Output in Hypothese, Teststatistik, p-Wert und Entscheidung übersetzen kannst.',
      script: 'Quelle: Induktive Statistik · Einstichproben-t-Test',
      code: String.raw`t.test(df$z, mu = 115)`,
      output: 'Der Output liefert Teststatistik, Freiheitsgrade, p-Wert und Konfidenzintervall. Die Kernfrage bleibt: Sprechen die Daten stark genug gegen $H_0: \mu = 115$?',
      taskPrompt: 'Lies die vorhandene Ausgabe und formuliere danach die vollständige Testentscheidung in zwei sauberen Prüfungssätzen.',
      miniTask: 'Nenne Nullhypothese, p-Wert-Vergleich und inhaltliche Deutung — ohne am Code etwas zu ändern.',
      solution: 'Die Musterlösung nennt immer zuerst $H_0$, vergleicht danach den p-Wert mit dem Signifikanzniveau und formuliert erst dann die inhaltliche Aussage. “Signifikant” ersetzt nie die Deutung.',
      taskMode: 'interpret',
      solutionChanges: [
        'Keine Codeänderung nötig: Diese Übung trainiert das Lesen des vorhandenen t-Test-Outputs.',
        'Nutze die bestehende Ausgabe als Beleg für Nullhypothese, p-Wert-Vergleich und inhaltliche Deutung.'
      ],
      pitfalls: [
        'Den p-Wert als Wahrscheinlichkeit der Nullhypothese zu lesen.',
        'Die Testentscheidung zu nennen, ohne die Frage inhaltlich zurückzuübersetzen.'
      ]
    }
  ],
  regression_schaetzung_inferenz: [
    {
      title: 'Regression: Koeffizienten und Intervall gemeinsam lesen',
      purpose: 'Die Regressionsroutine ist nur der technische Teil. Studienrelevant wird sie erst, wenn Koeffizient, Signifikanz und Intervall gemeinsam gedeutet werden.',
      script: 'Quelle: Statistische Modellierung I · lm(), Koeffizienten, Konfidenzintervall',
      code: String.raw`model <- lm(y ~ x, data = df)
summary(model)$coefficients
confint(model)`,
      output: 'Die Koeffiziententabelle liefert Achsenabschnitt, Steigung, Standardfehler, t-Werte und p-Werte. Das Konfidenzintervall ergänzt, welche plausiblen Parameterwerte zur Stichprobe passen.',
      taskPrompt: 'Ergänze den Workflow um `coef(model)` und formuliere dann die Steigung als inhaltliche Veränderung von y bei einer Einheit mehr x.',
      miniTask: 'Füge unter der Koeffiziententabelle `coef(model)` ein und schreibe danach einen ceteris-paribus-Satz zur Steigung.',
      solution: 'Belastbar ist die Antwort erst, wenn Zahlen und Sprache zusammenpassen: Steigung nennen, ceteris paribus deuten und dann mit dem Intervall absichern, ob die Null plausibel bleibt.',
      solutionChanges: [
        'Füge nach `summary(model)$coefficients` eine zusätzliche Zeile `coef(model)` ein.',
        'Lass `confint(model)` stehen, damit Schätzwert und Intervall im selben Blickfeld bleiben.'
      ],
      solutionCode: String.raw`model <- lm(y ~ x, data = df)
summary(model)$coefficients
coef(model)
confint(model)`,
      pitfalls: [
        'Nur auf Signifikanzsterne zu schauen und die Größe des Effekts zu ignorieren.',
        'Die Steigung zu nennen, ohne die Einheit von x und y sprachlich zu verankern.'
      ]
    }
  ],
  regression_diagnostik_prognose: [
    {
      title: 'Prognoseintervall statt Punktschätzung lesen',
      purpose: 'Diagnostik und Prognose werden in Klausuren oft verwechselt. Dieser Block trennt geschätzten Mittelwert, Einzelprognose und Restunsicherheit sauber auseinander.',
      script: 'Quelle: Statistische Modellierung II · Vorhersage mit linearem Modell',
      code: String.raw`model <- lm(y ~ x, data = df)
predict(model, newdata = pred_df, interval = "prediction")`,
      output: 'predict(..., interval = "prediction") liefert für neue x-Werte nicht nur eine Punktschätzung, sondern ein Prognoseintervall. Genau hier zeigt sich der Unterschied zwischen Schätzung und neuer Einzelbeobachtung.',
      taskPrompt: 'Ändere das Intervall von `prediction` auf `confidence` und erkläre dann, welches Intervall breiter ist und warum.',
      miniTask: 'Ersetze im `predict(...)`-Aufruf `interval = "prediction"` durch `interval = "confidence"` und vergleiche die beiden Intervalltypen.',
      solution: 'Das Prognoseintervall ist breiter, weil es neben der Schätzunsicherheit auch die idiosynkratische Reststreuung einer neuen Beobachtung enthält. Diese Unterscheidung ist diagnostisch zentral.',
      solutionChanges: [
        'Ändere im `predict(...)`-Aufruf nur den Parameter `interval` von `"prediction"` auf `"confidence"`.',
        'Lass `pred_df` und das Modell unverändert, damit nur der Unterschied der Intervalllogik sichtbar wird.'
      ],
      solutionCode: String.raw`model <- lm(y ~ x, data = df)
predict(model, newdata = pred_df, interval = "confidence")`,
      pitfalls: [
        'Konfidenzintervall und Prognoseintervall als dasselbe zu behandeln.',
        'Den Punktwert zu lesen, ohne die Breite des Intervalls einzuordnen.'
      ]
    }
  ],
  varianzanalyse: [
    {
      title: 'ANOVA: Gruppenmittel und F-Test zusammen lesen',
      purpose: 'Im R-Tutorium 11 wird die Varianzanalyse nicht nur als `summary(aov(...))` gerechnet, sondern mit Gruppenmitteln zusammengedacht. Genau diese Verbindung trainiert dieser Block.',
      script: 'Quelle: TUT_11 · aov(), summary() und Gruppenmittel',
      code: String.raw`anova_model <- aov(score ~ group, data = anova_df)
summary(anova_model)
aggregate(score ~ group, data = anova_df, mean)`,
      output: 'Der F-Test sagt dir, ob nicht alle Gruppenmittel gleich sind. Die gruppierten Mittelwerte zeigen anschließend, wo die Unterschiede inhaltlich liegen könnten.',
      taskPrompt: 'Ergänze den Workflow um die Gesamtmittelwert-Zeile `mean(anova_df$score)` und formuliere danach, welche Gruppe über bzw. unter dem Gesamtniveau liegt.',
      miniTask: 'Füge `mean(anova_df$score)` hinzu und deute die Gruppenmittelwerte relativ zum Gesamtmittelwert.',
      solution: 'ANOVA ist erst klausursicher gelesen, wenn du den globalen F-Test mit den Gruppenmitteln zusammenbringst: Signifikanz bedeutet nicht “jedes Paar ist verschieden”, sondern nur “nicht alle Mittel sind gleich”.',
      solutionChanges: [
        'Ergänze unter den vorhandenen Befehlen genau eine zusätzliche Zeile: `mean(anova_df$score)`.',
        'Lass `summary(anova_model)` und `aggregate(...)` stehen, damit globaler Test und Gruppenmittel gemeinsam lesbar bleiben.'
      ],
      solutionCode: String.raw`anova_model <- aov(score ~ group, data = anova_df)
summary(anova_model)
aggregate(score ~ group, data = anova_df, mean)
mean(anova_df$score)`,
      pitfalls: [
        'Aus einem signifikanten F-Test sofort auf alle Paarunterschiede zu schließen.',
        'Nur den p-Wert zu nennen, ohne die Gruppenmittel inhaltlich zu lesen.'
      ]
    }
  ]
};

function renderStatistikRLabTheory() {
  return String.raw`
    <div class="section-block">
      <h3>R gehört jetzt in die Methoden-Konzepte</h3>
      <p>Die Live-R-Blöcke sitzen in Statistik nicht mehr gesammelt auf einer einzigen Praxis-Seite, sondern direkt dort, wo die Methode fachlich gelernt wird: bei Deskriptivstatistik, Bivariat, Intervallschätzung, Tests, Regression und ANOVA.</p>
      <p>Das macht den Zugriff klausurnäher: erst Konzept verstehen, dann denselben Zugriff in R lesen, ändern und deuten.</p>
    </div>
    <div class="section-block">
      <h3>Welche Arbeitsfrage jeder R-Tab beantworten soll</h3>
      <p>Die R-Tabs sind keine Zusatzspielerei, sondern trainieren immer dieselbe Folge: <strong>Frage erkennen → passende Methode aufrufen → zentrale Zeile lesen → Output als Evidenz deuten.</strong></p>
      <div class="warn-box" data-warning-placement="rail"><strong>Tool-first ist ein Fehler</strong> Wer mit dem Befehl anfängt und die statistische Frage erst später sucht, produziert schnell formal korrekte, aber fachlich falsche Aussagen.</div>
    </div>
    <div class="section-block">
      <h3>Wo du die R-Tabs jetzt findest</h3>
      <ul>
        <li><strong>Deskriptive Statistik:</strong> Datensatz lesen, summary(), Histogramm und Streuung zusammen deuten.</li>
        <li><strong>Bivariate Analyse:</strong> Pearson, Spearman und Kovarianz unterscheiden.</li>
        <li><strong>Schätzereigenschaften & Konfidenzintervalle:</strong> Intervallbreite und Sicherheitsniveau lesen.</li>
        <li><strong>Hypothesentests:</strong> t-Test-Output in Entscheidungssprache übersetzen.</li>
        <li><strong>Regression:</strong> Koeffizienten, Intervalle und Prognosen sauber deuten.</li>
        <li><strong>Varianzanalyse:</strong> F-Test und Gruppenmittel zusammen lesen.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Was im Output wirklich zählt</h3>
      <p>Die prüfungsrelevante Information ist fast nie “da steht irgendeine Zahl”, sondern z.B. <strong>p-Wert gegen alpha</strong>, <strong>Intervallbreite</strong>, <strong>Koeffizient plus Einheit</strong> oder <strong>F-Test plus Gruppenmittel</strong>. Genau diese Verknüpfung musst du beim Lesen sofort herstellen.</p>
    </div>
    <div class="section-block">
      <h3>Transferregel für Klausuren</h3>
      <p>Saubere Statistikantworten aus dem R-Output folgen immer diesem Schema: <strong>1. Methode nennen.</strong> <strong>2. entscheidende Ausgabezeile als Beleg nennen.</strong> <strong>3. fachlich zurückübersetzen.</strong> Wer nur den Code oder nur den p-Wert nennt, lässt den Kernpunkt liegen.</p>
    </div>
  `;
}

export const CHAPTERS = [
  { id: 'deskriptiv', title: 'Deskriptive Statistik', cat: 'Grundlagen', short: 'Desk.' },
  { id: 'bivariat', title: 'Bivariate Analyse', cat: 'Grundlagen', short: 'Biv.' },
  { id: 'wahrscheinlichkeit', title: 'Wahrscheinlichkeitsrechnung', cat: 'Theorie', short: 'Wkt.' },
  { id: 'verteilungen', title: 'Zufallsvariablen & Verteilungen', cat: 'Theorie', short: 'Vert.' },
  { id: 'schaetzen_verfahren', title: 'Schätzverfahren (MoM, KQ, ML)', cat: 'Induktion', short: 'Schätz-V' },
  { id: 'nichtparametrisch', title: 'Nichtparametrische Dichteschätzung', cat: 'Induktion', short: 'NP-D' },
  { id: 'schaetzen_eigenschaften_intervalle', title: 'Schätzereigenschaften & Konfidenzintervalle', cat: 'Induktion', short: 'Schätz-EI' },
  { id: 'testen', title: 'Hypothesentests', cat: 'Induktion', short: 'Test' },
  { id: 'regression_schaetzung_inferenz', title: 'Regression: Schätzung & Inferenz', cat: 'Modelle', short: 'Regr-SI' },
  { id: 'regression_diagnostik_prognose', title: 'Regression: Diagnostik & Prognose', cat: 'Modelle', short: 'Regr-DP' },
  { id: 'rlab', title: 'R-Statistik Praxis', cat: 'Anwendung', short: 'R' },
  { id: 'z_test', title: 'z-Test & Normalverteilungstest', cat: 'Induktion', short: 'z-Test' },
  { id: 'zwei_stichproben', title: 'Zwei-Stichproben-Tests', cat: 'Induktion', short: '2-Stpr.' },
  { id: 'varianzanalyse', title: 'Varianzanalyse (ANOVA)', cat: 'Modelle', short: 'ANOVA' },
];

export const CONTENT = {
  deskriptiv: {
    motivation: 'Deskriptive Statistik ist die erste Filterstufe jeder Analyse: erst Verteilung lesen, dann Kennzahl wählen. Mittelwert ohne Formdeutung und Streuung ohne Kontext sind nicht klausurfest.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Worum es in DS1 wirklich geht</h3>
      <p>Deskriptive Statistik beantwortet zuerst drei Fragen: <strong>Wo liegt das Zentrum?</strong> <strong>Wie breit streuen die Daten?</strong> <strong>Gibt es Schiefe, Klumpung oder Ausreißer?</strong> Genau diese Reihenfolge spiegelt die Vorlesungs- und Tutoriumslogik: Kennzahlen und Grafiken müssen sich gegenseitig absichern.</p>
    </div>
    <div class="section-block">
      <h3>Lagemaße gezielt auswählen</h3>
      <p>Das <strong>arithmetische Mittel</strong> $\bar{x}$ ist der rechnerische Schwerpunkt. Der <strong>Median</strong> $\tilde{x}$ halbiert die geordnete Reihe und bleibt auch dann stabil, wenn einzelne Extremwerte die Verteilung nach rechts oder links ziehen. Der <strong>Modus</strong> zeigt den häufigsten Wert, ist aber nur bei diskreten Daten oder klaren Klassenstrukturen wirklich informativ.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Median vs. Mittelwert</strong> Wenn Ausreißer oder starke Schiefe sichtbar sind, reicht der Mittelwert allein nicht. Dann muss der Median als robuste Gegenlesart mitberichtet werden.</div>
    </div>
    <div class="section-block">
      <h3>Streuung und Form gehören zusammen</h3>
      <p>Die <strong>Varianz</strong> ($s^2$) misst die durchschnittliche quadrierte Abweichung vom Mittelwert. Die <strong>Standardabweichung</strong> ($s$) bringt dieselbe Information wieder in Originaleinheiten zurück. Der <strong>Interquartilsabstand</strong> (IQR) liest die mittleren 50% der Daten und ist robuster gegen Extremwerte als $s$.</p>
      <div class="math-block">$$s^2 = \frac{1}{n-1} \sum_{i=1}^n (x_i - \bar{x})^2$$</div>
    </div>
    <div class="section-block">
      <h3>Boxplot-, Quantil- und Ausreißerlogik</h3>
      <p>DS1 trainiert nicht nur Rechnen, sondern Lesen: Quartile, Boxplot und IQR helfen dir, Schiefe, Spannweite und Ausreißer systematisch zu beschreiben. Ein Boxplot ersetzt keine Kennzahlen, aber er zeigt sofort, ob eine Kennzahl kritisch gelesen werden muss.</p>
      <p>Die klassische IQR-Regel lautet: Werte unter $Q_1 - 1{,}5\cdot IQR$ oder über $Q_3 + 1{,}5\cdot IQR$ sind potenzielle Ausreißer.</p>
    </div>
    <div class="section-block">
      <h3>Klausurzugriff</h3>
      <p>Prüfungssicher ist nie nur eine Zahl. Eine gute Antwort kombiniert <strong>Lage</strong>, <strong>Streuung</strong> und <strong>Formhinweis</strong>. Typischer Standardsatz: “Der Mittelwert liegt bei ..., der Median darunter/darüber, die Streuung beträgt ..., und die Verteilung wirkt wegen ... rechtsschief/linksschief/ausreißerbeeinflusst.”</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Variationskoeffizient</strong> Verwende $v = s / \bar{x}$ nur, wenn Verhältnisskalen vorliegen und $\bar{x}$ sinnvoll von null entfernt ist. Er ist nützlich für relative Streuungsvergleiche, nicht für jede Rohdatenbeschreibung.</div>
    </div>
    `,
    formeln: [
      {
        label: 'Arithmetisches Mittel',
        eq: String.raw`$$\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$$`,
        desc: 'Rechnerischer Schwerpunkt der Stichprobe',
        variables: { '\\bar{x}': 'Stichprobenmittel', 'n': 'Stichprobenumfang', 'x_i': 'i-ter Beobachtungswert' }
      },
      {
        label: 'Stichprobenvarianz',
        eq: String.raw`$$s^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i-\bar{x})^2$$`,
        desc: 'Korrigierte mittlere quadratische Abweichung',
        variables: { 's^2': 'Stichprobenvarianz', 'n-1': 'Bessel-Korrektur', '\\bar{x}': 'Stichprobenmittel' }
      },
      {
        label: 'Standardabweichung',
        eq: String.raw`$$s = \sqrt{s^2}$$`,
        desc: 'Streuung in Originaleinheiten',
        variables: { 's': 'Stichprobenstandardabweichung', 's^2': 'Stichprobenvarianz' }
      },
      {
        label: 'Variationskoeffizient',
        eq: String.raw`$$v = \frac{s}{\bar{x}}$$`,
        desc: 'Relative Streuung bei vergleichbarer Skala',
        variables: { 'v': 'Variationskoeffizient', 's': 'Standardabweichung', '\\bar{x}': 'Mittelwert' }
      }
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
      },
      {
        text: String.raw`Zwei Datensätze haben denselben Mittelwert $\bar{x}=50$: Datensatz A hat $s=5$, Datensatz B hat $s=20$. Ein dritter Datensatz C hat $\bar{x}=50$, aber einen starken Ausreißer. Welche Kombination aus Kennzahlen und kurzer Interpretation ist prüfungssicher?`,
        steps: [
          { text: `Gleiches Mittel heißt nicht gleiche Streuung oder gleiche Verteilungsform.`, eq: null },
          { text: `A und B unterscheiden sich klar über die Standardabweichung; B ist deutlich heterogener.`, eq: null },
          { text: `Bei Ausreißern muss der Median ergänzend berichtet werden, da er robuster als das Mittel ist.`, eq: null }
        ],
        result: String.raw`Prüfungssicher ist: Lage über Mittelwert/Median, Streuung über $s$ (oder IQR), plus kurzer Hinweis auf Ausreißerempfindlichkeit. "Gleicher Mittelwert" allein ist inhaltlich zu schwach.`
      }
    ]
  },
  bivariat: {
    motivation: 'Bivariate Statistik fragt nicht nur, ob zwei Merkmale zusammenlaufen, sondern welcher Typ von Zusammenhang vorliegt: Häufigkeitsstruktur, Richtung, lineare Stärke, Ranglogik oder Ausreißerfalle.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Von der gemeinsamen Tabelle zum Streudiagramm</h3>
      <p>DS2 beginnt nicht mit einer Formel, sondern mit der Frage, <strong>wie zwei Merkmale gemeinsam verteilt sind</strong>. Bei kategorialen Merkmalen helfen Kreuztabellen und bedingte Prozente; bei metrischen Merkmalen zeigt das Streudiagramm Richtung, Form und Ausreißer eines Zusammenhangs.</p>
    </div>
    <div class="section-block">
      <h3>Kovarianz: Richtung, aber keine Normierung</h3>
      <p>Die Kovarianz misst, ob hohe Werte von $x$ typischerweise mit hohen oder niedrigen Werten von $y$ zusammen auftreten. Ihr Vorzeichen ist informativ, ihre Größe hängt aber von den Einheiten beider Variablen ab.</p>
      <div class="math-block">$$s_{xy} = \frac{1}{n-1} \sum (x_i - \bar{x})(y_i - \bar{y})$$</div>
    </div>
    <div class="section-block">
      <h3>Pearson-Korrelation</h3>
      <p>Der Pearson-Koeffizient normiert die Kovarianz auf $[-1,1]$ und misst die Stärke eines <strong>linearen</strong> Zusammenhangs. Er reagiert empfindlich auf Ausreißer und kann bei gekrümmten Mustern klein sein, obwohl ein klarer systematischer Zusammenhang vorliegt.</p>
      <div class="math-block">$$r_{xy} = \frac{s_{xy}}{s_x \cdot s_y}$$</div>
      <ul>
        <li>$r = 1$: Perfekter positiver linearer Zusammenhang.</li>
        <li>$r = 0$: Kein <em>linearer</em> Zusammenhang — nicht automatisch “gar kein Zusammenhang”.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Spearman und robuste Zusammenhangslogik</h3>
      <p>Wenn nur Ränge verlässlich sind oder Ausreißer die metrische Skala verzerren, ist Spearman oft die bessere Wahl. Er fragt nach monotonichem statt streng linearem Zusammenhang.</p>
    </div>
    <div class="section-block">
      <h3>Klausurfalle: Korrelation ist keine Kausalität</h3>
      <div class="warn-box" data-warning-placement="rail"><strong>Korrelation vs. Kausalität</strong> Ein hoher Korrelationskoeffizient beweist keinen ursächlichen Zusammenhang. Drittvariablen, gemeinsame Trends oder Selektion können denselben Befund erzeugen.</div>
      <p>Prüfungssicher ist deshalb: Richtung + Stärke nennen, dann sofort die Grenzen der Aussage markieren.</p>
    </div>
    `,
    formeln: [
      {
        label: 'Kovarianz',
        eq: String.raw`$$s_{xy} = \frac{1}{n-1}\sum_{i=1}^n (x_i-\bar{x})(y_i-\bar{y})$$`,
        desc: 'Richtung der gemeinsamen Streuung',
        variables: { 's_{xy}': 'empirische Kovarianz', '\\bar{x},\\bar{y}': 'Mittelwerte der beiden Variablen', 'n-1': 'Bessel-Korrektur' }
      },
      {
        label: 'Pearson-Korrelation',
        eq: String.raw`$$r_{xy} = \frac{s_{xy}}{s_x s_y}$$`,
        desc: 'Normierte lineare Zusammenhangsstärke',
        variables: { 'r_{xy}': 'Korrelationskoeffizient', 's_{xy}': 'Kovarianz', 's_x,s_y': 'Standardabweichungen von x und y' }
      },
      {
        label: 'OLS-Steigung (bivariate Brücke)',
        eq: String.raw`$$\hat{\beta}_1 = \frac{s_{xy}}{s_x^2}$$`,
        desc: 'Verbindet bivariate Streuung mit dem linearen Regressionsanstieg',
        variables: { '\\hat{\\beta}_1': 'geschätzte Steigung', 's_{xy}': 'Kovarianz', 's_x^2': 'Varianz von x' }
      }
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
      },
      {
        text: String.raw`In einer Kreuztabelle zeigt sich: Von 100 Studierenden mit Vorkurs bestehen 78 die Klausur, von 80 ohne Vorkurs bestehen 40. Beschreiben Sie den Zusammenhang zunächst über bedingte Erfolgsanteile und erst danach verbal. Warum reicht der Unterschied der absoluten Fallzahlen allein nicht?`,
        steps: [
          { text: `Bedingte Erfolgsquote mit Vorkurs:`, eq: String.raw`\hat p(\text{bestanden}\mid \text{Vorkurs}) = \frac{78}{100} = 0{,}78` },
          { text: `Bedingte Erfolgsquote ohne Vorkurs:`, eq: String.raw`\hat p(\text{bestanden}\mid \text{kein Vorkurs}) = \frac{40}{80} = 0{,}50` },
          { text: `Vergleich:`, eq: String.raw`0{,}78 - 0{,}50 = 0{,}28` },
          { text: `Interpretation:`, eq: null }
        ],
        result: String.raw`Der Zusammenhang wird über bedingte Anteile sichtbar: Mit Vorkurs liegt die Erfolgsquote um 28 Prozentpunkte höher. Absolute Bestehenszahlen allein reichen nicht, weil die Gruppengrößen verschieden sind.`
      }
    ]
  },
  testen: {
    motivation: 'Hypothesentests sind Entscheidungslogik unter Unsicherheit. Die Klausur fragt nicht nur nach einer Teststatistik, sondern nach sauberer Hypothesenformulierung, Testwahl, p-Wert-Deutung und Fehlerkontrolle.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Hypothesenlogik vor jeder Rechnung</h3>
      <p>Ein Test beginnt immer mit einem Entscheidungsproblem: Welcher Parameter wird geprüft? Was ist der Status quo ($H_0$)? Welche Abweichung interessiert als Alternative ($H_1$)? Erst danach darf gerechnet werden.</p>
    </div>
    <div class="section-block">
      <h3>Teststatistik, kritischer Bereich und p-Wert</h3>
      <p>Die Teststatistik misst, wie weit die Daten von der Nullhypothese entfernt liegen. Diese Entfernung wird entweder über den <strong>kritischen Bereich</strong> oder den <strong>p-Wert</strong> beurteilt.</p>
      <ul>
        <li><strong>p-Wert:</strong> Wahrscheinlichkeit, unter $H_0$ ein mindestens so extremes Ergebnis zu beobachten.</li>
        <li><strong>Signifikanzniveau ($\alpha$):</strong> vorab festgelegte Toleranz für Fehler 1. Art.</li>
      </ul>
      <p>Entscheidungsregel: <strong>$H_0$ ablehnen, wenn $p < \alpha$</strong> oder die Teststatistik im Ablehnbereich liegt.</p>
    </div>
    <div class="section-block">
      <h3>Fehler 1. Art, Fehler 2. Art und Teststärke</h3>
      <p><strong>Fehler 1. Art ($\alpha$):</strong> $H_0$ ablehnen, obwohl sie wahr ist. <strong>Fehler 2. Art ($\beta$):</strong> $H_0$ nicht ablehnen, obwohl sie falsch ist. Die <strong>Power</strong> $1-\beta$ misst, wie gut ein Test einen echten Effekt entdeckt.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Alpha-Beta-Tradeoff</strong> Bei festem Stichprobenumfang macht ein kleineres $\alpha$ den Test konservativer, senkt aber meist die Teststärke. Beide Fehler gleichzeitig zu reduzieren gelingt vor allem über größeres $n$ oder klarere Effekte.</div>
    </div>
    <div class="section-block">
      <h3>Einseitig oder zweiseitig?</h3>
      <p>Die Richtung folgt aus der Fragestellung, nicht aus dem beobachteten Datensignal. “Besser”, “höher” oder “größer” kann einen einseitigen Test rechtfertigen. Fehlt eine Richtung oder ist nur “anders” gefragt, ist der Test zweiseitig.</p>
    </div>
    <div class="section-block">
      <h3>Testwahl als Entscheidungsbaum</h3>
      <p>Vor der Formel stehen Datentyp und Design: Mittelwert, Anteil oder Rang? Eine oder zwei Stichproben? Gepaart oder ungepaart? Bekannte oder unbekannte Streuung? Dieser Auswahlprozess ist selbst klausurrelevant.</p>
    </div>
    `,
    formeln: [
      {
        label: 't-Statistik',
        eq: String.raw`$$t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}$$`,
        desc: 'Standardtest für den Mittelwert bei unbekannter Populationsstreuung',
        variables: { '\\bar{x}': 'Stichprobenmittel', '\\mu_0': 'unter H0 behaupteter Mittelwert', 's': 'Stichprobenstandardabweichung', 'n': 'Stichprobenumfang' }
      },
      {
        label: 'Power',
        eq: String.raw`$$\text{Power} = 1-\beta$$`,
        desc: 'Wahrscheinlichkeit, einen echten Effekt zu entdecken',
        variables: { '\\beta': 'Fehler 2. Art', '1-\\beta': 'Teststärke' }
      }
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
          { text: String.raw`Vergleich: $t = -1{,}5 > -1{,}753$, also $t \notin K$.`, eq: String.raw`-1{,}5 > -1{,}753 \implies H_0 \text{ wird nicht abgelehnt.}` }
        ],
        result: String.raw`$H_0$ kann nicht abgelehnt werden. Die Daten liefern auf dem $5\%$-Niveau keine ausreichende Evidenz dafür, dass der mittlere Lohn unter $2800$ Euro liegt.`
      },
      {
        text: String.raw`Erläutern Sie den Unterschied zwischen Fehler 1. Art und Fehler 2. Art. Wie hängen $\alpha$, $\beta$ und die Teststärke $1-\beta$ zusammen? Welche Konsequenz hat eine Verringerung von $\alpha$ bei festem $n$?`,
        steps: [
          { text: String.raw`Fehler 1. Art: $H_0$ abgelehnt, obwohl sie wahr ist. Wahrscheinlichkeit = $\alpha$.`, eq: String.raw`\alpha = P(\text{ablehnen } H_0 \mid H_0 \text{ wahr})` },
          { text: String.raw`Fehler 2. Art: $H_0$ beibehalten, obwohl $H_1$ wahr ist. Wahrscheinlichkeit = $\beta$.`, eq: String.raw`\beta = P(\text{beibehalten } H_0 \mid H_1 \text{ wahr})` },
          { text: `Teststärke: Wahrscheinlichkeit, einen wahren Effekt zu entdecken.`, eq: String.raw`1-\beta = P(\text{ablehnen } H_0 \mid H_1 \text{ wahr})` },
          { text: String.raw`Tradeoff: Bei festem $n$ sinkt $\alpha$ $\Rightarrow$ kritischer Bereich kleiner $\Rightarrow$ $\beta$ steigt.`, eq: String.raw`\alpha \downarrow \implies K \text{ kleiner} \implies \beta \uparrow \implies 1-\beta \downarrow` }
        ],
        result: String.raw`Senkung von $\alpha$ (konservativerer Test) erhöht bei gleichem Stichprobenumfang $\beta$ (Verlust an Teststärke). Um beide Fehlerwahrscheinlichkeiten gleichzeitig zu senken, muss $n$ erhöht werden.`
      },
      {
        text: String.raw`p-Wert Interpretation: Ein t-Test ergibt $t = 2{,}1$ bei $df = 20$. Aus der t-Tabelle entnehmen Sie: $P(T > 2{,}086) = 0{,}025$ (einseitig). Berechnen Sie den zweiseitigen p-Wert und fällen Sie die Entscheidung bei $\alpha = 0{,}05$.`,
        steps: [
          { text: `Einseitiger p-Wert für $t = 2{,}1 > 2{,}086$:`, eq: String.raw`p_{einseitig} < 0{,}025` },
          { text: `Zweiseitiger p-Wert (da $|t|$ symmetrisch):`, eq: String.raw`p_{zweiseitig} = 2 \cdot p_{einseitig} < 2 \cdot 0{,}025 = 0{,}05` },
          { text: String.raw`Entscheidung: $p < \alpha = 0{,}05$.`, eq: String.raw`p < 0{,}05 \implies H_0 \text{ ablehnen (gerade noch signifikant)}` }
        ],
        result: String.raw`$p_{zweiseitig} < 0{,}05$: $H_0$ wird auf dem $5\%$-Niveau abgelehnt. Der p-Wert misst die Wahrscheinlichkeit, unter $H_0$ ein so extremes oder extremeres Ergebnis zu erhalten — er ist kein Maß für die Wahr­scheinlichkeit der Nullhypothese selbst.`
      },
      {
        text: String.raw`Eine Studie fragt explizit: "Ist der neue Lernansatz besser?" Formulieren Sie die passende Alternativhypothese, nennen Sie den Testtyp (ein- oder zweiseitig) und erklären Sie die Hauptrisiken einer falschen Richtungsauswahl.`,
        steps: [
          { text: String.raw`Bei gerichteter Forschungsfrage "besser" ist die natürliche Alternative rechtsseitig:`, eq: String.raw`H_1:\mu_{\text{neu}} > \mu_{\text{alt}}` },
          { text: String.raw`Ein zweiseitiger Test wäre konservativer, verteilt aber $\alpha$ auf beide Flanken.`, eq: null },
          { text: `Wird die Richtung ex post angepasst, steigt das Fehlentscheidungsrisiko (p-Hacking/Alpha-Inflation).`, eq: null }
        ],
        result: String.raw`Die Testseite muss vor Datensichtung aus der Fragestellung folgen. Richtung nachträglich wählen ist methodisch unzulässig und verzerrt die Evidenz.`
      },
      {
        text: String.raw`Testauswahl unter Zeitdruck: Ordnen Sie jeder Situation den passenden Testtyp zu und begründen Sie kurz. (1) Anteil defekter Teile gegen Sollwert $\pi_0$. (2) Mittelwertvergleich von drei unabhängigen Gruppen. (3) Vorher/Nachher-Messung derselben Personen.`,
        steps: [
          { text: `(1) Anteil gegen Referenzwert:`, eq: String.raw`\text{Binomial-/Anteilstest für } H_0:\pi=\pi_0` },
          { text: `(2) Drei Gruppenmittelwerte gleichzeitig:`, eq: String.raw`\text{ANOVA-}F\text{-Test statt multipler Einzeltests}` },
          { text: `(3) Paarstruktur vorhanden:`, eq: String.raw`\text{Verbundener t-Test auf Differenzen } D_i` },
          { text: `Trap-Hinweis:`, eq: String.raw`Falsche Testfamilie erzeugt fehlerhafte p-Werte und schwache Entscheidungen.` }
        ],
        result: String.raw`Saubere Testwahl folgt aus Datentyp, Gruppenstruktur und Fragestellung. Diese Zuordnung ist klausurrelevant, bevor überhaupt gerechnet wird.`
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
      <div class="warn-box" data-warning-placement="rail"><strong>Unabhängigkeit vs. Disjunktheit:</strong> Disjunkte Ereignisse ($A \cap B = \emptyset$) sind in der Regel nicht unabhängig — im Gegenteil: wenn $A$ eintritt, ist $B$ ausgeschlossen.</div>
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
          { text: String.raw`$P(\text{beide rot})$: Bedingte Wahrscheinlichkeit.`, eq: String.raw`P(R_1 \cap R_2) = P(R_1) \cdot P(R_2 \mid R_1) = \frac{3}{10} \cdot \frac{2}{9} = \frac{6}{90} = \frac{1}{15}` },
          { text: String.raw`$P(\text{erste rot, zweite blau})$:`, eq: String.raw`P(R_1 \cap B_2) = \frac{3}{10} \cdot \frac{7}{9} = \frac{21}{90} = \frac{7}{30}` },
          { text: String.raw`$P(\text{mindestens eine rot})$ über Gegenwahrscheinlichkeit:`, eq: String.raw`P(\text{mind. eine rot}) = 1 - P(\text{keine rot}) = 1 - \frac{7}{10} \cdot \frac{6}{9} = 1 - \frac{42}{90} = 1 - \frac{7}{15} = \frac{8}{15}` }
        ],
        result: String.raw`$P(\text{beide rot}) = \tfrac{1}{15} \approx 0{,}067$; $P(R_1, B_2) = \tfrac{7}{30} \approx 0{,}233$; $P(\text{mind. eine rot}) = \tfrac{8}{15} \approx 0{,}533$.`
      },
      {
        text: String.raw`Zwei Ereignisse $A$ und $B$ erfüllen: $P(A) = 0{,}4$, $P(B) = 0{,}3$, $P(A \cup B) = 0{,}58$. Sind $A$ und $B$ unabhängig? Berechnen Sie $P(A \cap B)$ und $P(A \mid B)$.`,
        steps: [
          { text: String.raw`$P(A \cap B)$ aus Additionsformel:`, eq: String.raw`P(A \cap B) = P(A) + P(B) - P(A \cup B) = 0{,}4 + 0{,}3 - 0{,}58 = 0{,}12` },
          { text: String.raw`Unabhängigkeitstest: Vergleiche $P(A) \cdot P(B)$ mit $P(A \cap B)$.`, eq: String.raw`P(A) \cdot P(B) = 0{,}4 \cdot 0{,}3 = 0{,}12 = P(A \cap B) \implies \text{unabhängig}` },
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
      <div class="warn-box" data-warning-placement="rail"><strong>Varianz vs. Standardabweichung:</strong> Die Varianz hat die Einheit zum Quadrat. Für die Interpretation in Originaleinheiten immer die Standardabweichung $\sigma = \sqrt{\text{Var}}$ verwenden.</div>
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
          { text: String.raw`Standardfehler des Mittelwerts: $SE = \sigma/\sqrt{n}$.`, eq: String.raw`SE = \sqrt{4} = 2` },
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
      <div class="warn-box" data-warning-placement="rail"><strong>Fehlinterpretation KI:</strong> Das Konfidenzintervall ist eine Eigenschaft der Methode, nicht des Parameters. Der Parameter ist fix — das Intervall ist zufällig.</div>
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
          { text: String.raw`Kritischer Wert: $t_{35,\,0{,}975} \approx 2{,}03$.`, eq: null },
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
          { text: String.raw`Erwartungstreue von $\hat{\mu}_1$:`, eq: String.raw`E[\bar{X}] = \frac{1}{n}\sum E[X_i] = \mu \implies \text{erwartungstreu}` },
          { text: String.raw`Erwartungstreue von $\hat{\mu}_2$:`, eq: String.raw`E[X_1] = \mu \implies \text{auch erwartungstreu}` },
          { text: `Varianzen vergleichen:`, eq: String.raw`\text{Var}(\bar{X}) = \frac{\sigma^2}{n} \quad \text{vs.} \quad \text{Var}(X_1) = \sigma^2` },
          { text: String.raw`Effizienz: Cramér-Rao-Schranke für $\mu$:`, eq: String.raw`\text{Var}(\bar{X}) = \frac{\sigma^2}{n} \leq \sigma^2 = \text{Var}(X_1) \implies \bar{X} \text{ ist effizienter}` }
        ],
        result: String.raw`Beide Schätzer sind erwartungstreu. Aber $\bar{X}$ hat Varianz $\sigma^2/n$, während $X_1$ Varianz $\sigma^2$ hat. Mit wachsendem $n$ wird $\bar{X}$ beliebig präzise — $X_1$ bleibt konstant ungenau. $\bar{X}$ erreicht die Cramér-Rao-Schranke und ist der BLUE (Best Linear Unbiased Estimator).`
      },
      {
        text: String.raw`Ein $99\%$-KI für $\mu$ soll bei bekanntem $\sigma = 20$ berechnet werden. Stichprobengröße $n = 25$, $\bar{x} = 80$. Berechnen Sie das Intervall und erläutern Sie, wie es sich von einem $95\%$-KI unterscheidet.`,
        steps: [
          { text: String.raw`Kritischer z-Wert für $99\%$: $z_{0{,}995} = 2{,}576$.`, eq: String.raw`z_{0{,}995} = 2{,}576` },
          { text: `Standardfehler:`, eq: String.raw`SE = \frac{\sigma}{\sqrt{n}} = \frac{20}{\sqrt{25}} = 4` },
          { text: String.raw`$99\%$-KI:`, eq: String.raw`80 \pm 2{,}576 \cdot 4 = 80 \pm 10{,}3 = [69{,}7;\; 90{,}3]` },
          { text: String.raw`Vergleich mit $95\%$-KI ($z = 1{,}96$):`, eq: String.raw`95\%\text{-KI}: 80 \pm 1{,}96 \cdot 4 = [72{,}2;\; 87{,}8] \quad \text{(schmaler)}` }
        ],
        result: String.raw`$99\%$-KI: $[69{,}7;\; 90{,}3]$. Das $99\%$-Intervall ist breiter als das $95\%$-Intervall: Mehr Sicherheit kostet Präzision. Für höhere Konfidenzniveaus muss man bereit sein, ein ungenaueres (breiteres) Intervall zu akzeptieren.`
      },
      {
        text: String.raw`Methodenvergleich (MoM vs. ML): Für eine Bernoulli-Variable mit $n=200$ Beobachtungen und $76$ Erfolgen soll $\pi$ geschätzt werden. Bestimmen Sie den Momentenschätzer und den Maximum-Likelihood-Schätzer und interpretieren Sie das Ergebnis.`,
        steps: [
          { text: `Stichprobenanteil als 1. Moment der Bernoulli-Verteilung:`, eq: String.raw`\bar{X} = \frac{76}{200} = 0{,}38` },
          { text: String.raw`Methode der Momente: Setze $E[X]=\pi$ gleich $\bar X$.`, eq: String.raw`\hat{\pi}_{MM} = \bar{X} = 0{,}38` },
          { text: `MLE bei Bernoulli/Binomial führt auf denselben Anteilsschätzer.`, eq: String.raw`\hat{\pi}_{ML} = \frac{76}{200} = 0{,}38` },
          { text: `Interpretation: Schätzerwert als plausibler Erfolgsanteil in der Population.`, eq: null }
        ],
        result: String.raw`In diesem Standardfall liefern Methode der Momente und Maximum-Likelihood denselben Schätzwert ($0{,}38$). Prüfungsrelevant ist, die gemeinsame Logik (Stichprobeninformation) und die unterschiedliche Begründung zu trennen.`
      },
      {
        text: String.raw`Bias/MSE-Drill: Für einen Schätzer $\hat\theta$ gilt $Var(\hat\theta)=4$ und $Bias(\hat\theta)=1{,}5$. Berechnen Sie den MSE und erklären Sie, warum die Varianz allein hier kein sauberer Qualitätsvergleich ist.`,
        steps: [
          { text: `MSE-Zerlegung verwenden:`, eq: String.raw`MSE(\hat\theta)=Var(\hat\theta)+Bias(\hat\theta)^2` },
          { text: `Einsetzen:`, eq: String.raw`MSE = 4 + (1{,}5)^2 = 4 + 2{,}25 = 6{,}25` },
          { text: `Interpretation:`, eq: String.raw`Ein verzerrter Schätzer kann trotz kleiner Varianz einen großen Gesamtfehler haben.` },
          { text: `Konsequenz für Vergleiche:`, eq: String.raw`Nur bei erwartungstreuen Schätzern reicht ein Varianzvergleich aus.` }
        ],
        result: String.raw`$MSE=6{,}25$. Der MSE kombiniert Streuung und systematischen Fehler und ist daher die belastbare Vergleichsgröße, wenn Bias ungleich null ist.`
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
      <div class="warn-box" data-warning-placement="rail"><strong>R² und Kausalität:</strong> Ein hohes $R^2$ beweist keinen kausalen Zusammenhang. Es misst nur den linearen Erklärungsanteil in der Stichprobe.</div>
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
          { text: String.raw`Mittelwerte: $\bar{x} = 2{,}5$, $\bar{y} = 6$.`, eq: String.raw`\bar{x} = \frac{1+2+3+4}{4} = 2{,}5 \quad \bar{y} = \frac{3+5+7+9}{4} = 6` },
          { text: String.raw`Schätzer $\hat{\beta}_1$:`, eq: String.raw`\hat{\beta}_1 = \frac{\sum(x_i-\bar{x})(y_i-\bar{y})}{\sum(x_i-\bar{x})^2} = \frac{(-1{,}5)(-3)+(-0{,}5)(-1)+(0{,}5)(1)+(1{,}5)(3)}{2{,}25+0{,}25+0{,}25+2{,}25} = \frac{4{,}5+0{,}5+0{,}5+4{,}5}{5} = \frac{10}{5} = 2` },
          { text: String.raw`Schätzer $\hat{\beta}_0$:`, eq: String.raw`\hat{\beta}_0 = \bar{y} - \hat{\beta}_1\bar{x} = 6 - 2 \cdot 2{,}5 = 1` },
          { text: String.raw`$R^2$: Da alle Punkte exakt auf der Geraden liegen, gilt $SSR = 0$.`, eq: String.raw`R^2 = 1 - \frac{SSR}{SST} = 1 - 0 = 1` }
        ],
        result: String.raw`$\hat{y} = 1 + 2x$, $R^2 = 1{,}00$. Die Datenpunkte liegen exakt auf der Geraden — ein perfekter linearer Zusammenhang. In der Praxis ist $R^2 = 1$ verdächtig und kann auf Multikollinearität, Datenfehler oder zu wenige Beobachtungen hinweisen.`
      },
      {
        text: String.raw`Ein Regressionsmodell $\hat{y} = 10 + 2{,}5x$ wurde an $n=30$ Beobachtungen geschätzt. $SST = 500$, $SSR = 100$. Berechnen Sie $R^2$, die Modellgüte und den $F$-Wert für den globalen Signifikanztest.`,
        steps: [
          { text: `Erklärte Streuung: $SSE = SST - SSR$.`, eq: String.raw`SSE = 500 - 100 = 400` },
          { text: `Bestimmtheitsmaß:`, eq: String.raw`R^2 = \frac{SSE}{SST} = \frac{400}{500} = 0{,}80` },
          { text: `$F$-Statistik (1 Regressor, $k=1$, $df_1=1$, $df_2=n-2=28$):`, eq: String.raw`F = \frac{SSE/k}{SSR/(n-k-1)} = \frac{400/1}{100/28} = \frac{400}{3{,}571} \approx 112` },
          { text: String.raw`Entscheidung: $F_{krit}(1, 28; 0{,}05) \approx 4{,}20$. Da $F \gg F_{krit}$:`, eq: String.raw`F = 112 \gg 4{,}20 \implies H_0: \beta_1 = 0 \text{ wird abgelehnt}` }
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
      },
      {
        text: String.raw`Diagnostik-Entscheidung: Ein Residuenplot zeigt einen klaren Trichter (Streuung steigt mit $x$), der QQ-Plot ist ansonsten relativ unauffällig. Was ist die naheliegende Modellwarnung und welche inferenzseitige Konsequenz ist prüfungssicher?`,
        steps: [
          { text: `Mustererkennung im Residuenplot:`, eq: String.raw`\text{Trichterform} \Rightarrow \text{Hinweis auf Heteroskedastizität}` },
          { text: `Kernkonsequenz:`, eq: String.raw`OLS\text{-Koeffizienten bleiben oft unverzerrt, Standardfehler/Teste können aber verzerrt sein.}` },
          { text: `Prüfungssichere Reaktion:`, eq: String.raw`\text{Heteroskedastizitätsrobuste Standardfehler oder angepasstes Modell berichten.}` },
          { text: `Trap:`, eq: String.raw`Hohes }R^2\text{ behebt Diagnostikprobleme nicht.` }
        ],
        result: String.raw`Die Hauptaussage ist nicht "Modell verwerfen", sondern "Inferenz absichern": bei heteroskedastischen Residuen sind robuste Standardfehler bzw. eine angepasste Spezifikation zentral.`
      },
      {
        text: String.raw`Konfidenz- vs. Prognoseintervall: Für dasselbe $x_0$ liefert ein Modell ein 95%-Konfidenzintervall für den Erwartungswert und ein 95%-Prognoseintervall für eine Einzelbeobachtung. Welches Intervall ist breiter und warum?`,
        steps: [
          { text: `Unterscheidung Zielgröße:`, eq: String.raw`CI \text{ zielt auf } E[Y|x_0],\quad PI \text{ auf eine neue Einzelrealisierung }Y_{neu}.` },
          { text: `Zusätzliche Unsicherheitskomponente beim PI:`, eq: String.raw`PI \text{ enthält neben Schätzunsicherheit auch idiosynkratische Störung.}` },
          { text: `Folgerung:`, eq: String.raw`PI \text{ ist bei gleichem Niveau stets breiter als } CI.` },
          { text: `Interpretationspflicht:`, eq: null }
        ],
        result: String.raw`Das Prognoseintervall ist breiter, weil eine neue Beobachtung zusätzlichen Zufall enthält. Diese Unterscheidung ist zentral für saubere Ergebnisdeutung in Modellierungsaufgaben.`
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
          { text: String.raw`Signifikanz prüfen: $p = 0{,}003 < 0{,}05$.`, eq: String.raw`\text{H0 (}\beta = 0\text{) wird auf dem 5%-Niveau abgelehnt.}` }
        ],
        result: String.raw`Bildung hat einen signifikant positiven Effekt auf den Lohn ($p < 0{,}01$).`
      },
      {
        text: String.raw`In R führen Sie \texttt{t.test(x, mu = 50, alternative = "greater")} aus. Das Ergebnis zeigt $t = 1{,}84$, $df = 24$, $p = 0{,}039$. Formulieren Sie die vollständige Testentscheidung bei $\alpha = 0{,}05$ und interpretieren Sie das Konfidenzintervall.`,
        steps: [
          { text: `Hypothesen identifizieren:`, eq: String.raw`H_0: \mu \leq 50 \quad H_1: \mu > 50 \quad (\text{rechtsseitiger Test})` },
          { text: `Entscheidungsregel:`, eq: String.raw`p = 0{,}039 < \alpha = 0{,}05 \implies H_0 \text{ ablehnen}` },
          { text: String.raw`Konfidenzintervall \texttt{alternative="greater"}: einseitiges KI.`, eq: String.raw`[\bar{x} - t_{24;\,0{,}95} \cdot SE;\; +\infty) \implies \text{Untergrenze des einseitigen KI liegt über 50}` }
        ],
        result: String.raw`$H_0$ wird auf dem $5\%$-Niveau abgelehnt. Es gibt statistisch signifikante Evidenz dafür, dass $\mu > 50$. Das einseitige KI schließt $50$ nicht ein, was die Entscheidung bestätigt.`
      },
      {
        text: String.raw`In R wird \texttt{cor.test(df\$x, df\$y)} ausgeführt. Ergebnis: $r = 0{,}71$, $t = 3{,}84$, $df = 18$, $p = 0{,}0012$. Interpretieren Sie den Korrelationskoeffizienten, prüfen Sie die Signifikanz und nennen Sie die zugrundeliegende Nullhypothese.`,
        steps: [
          { text: String.raw`Nullhypothese von \texttt{cor.test}:`, eq: String.raw`H_0: \rho = 0 \quad (\text{kein linearer Zusammenhang in der Population})` },
          { text: `Teststatistik: t-Wert für Korrelationstest.`, eq: String.raw`t = r \sqrt{\frac{n-2}{1-r^2}} = 0{,}71 \cdot \sqrt{\frac{18}{1-0{,}504}} = 0{,}71 \cdot \sqrt{36{,}3} \approx 3{,}84` },
          { text: String.raw`Entscheidung: $p = 0{,}0012 < 0{,}01$.`, eq: String.raw`H_0 \text{ ablehnen auf 1\%-Niveau: Die Korrelation ist hochsignifikant von null verschieden.}` }
        ],
        result: String.raw`$r = 0{,}71$ zeigt einen starken positiven linearen Zusammenhang. Der Test ist hochsignifikant ($p < 0{,}01$). Aber: Auch $r = 0{,}71$ erklärt nur $r^2 = 0{,}504$, also ca. $50\%$ der Varianz. Signifikanz und Effektgröße müssen stets gemeinsam beurteilt werden.`
      },
      {
        text: String.raw`In R soll geprüft werden, ob zwei Gruppen denselben Mittelwert haben: \texttt{t.test(x \textasciitilde{} gruppe, data=df, var.equal=TRUE)}. Ergebnis: $t = -2{,}31$, $df = 38$, $p = 0{,}026$. Was bedeutet \texttt{var.equal=TRUE}? Wann ist der Welch-Test (\texttt{var.equal=FALSE}) vorzuziehen?`,
        steps: [
          { text: String.raw`\texttt{var.equal=TRUE}: Pooled-t-Test, setzt $\sigma_1^2 = \sigma_2^2$ voraus.`, eq: String.raw`t_{pool} = \frac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{1/n_1 + 1/n_2}}, \quad s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}` },
          { text: String.raw`Entscheidung: $p = 0{,}026 < 0{,}05$.`, eq: String.raw`H_0: \mu_1 = \mu_2 \text{ wird abgelehnt} \implies \text{Gruppenunterschiede signifikant}` },
          { text: String.raw`Welch-Test (\texttt{var.equal=FALSE}): Robuster bei unterschiedlichen Varianzen.`, eq: String.raw`\sigma_1^2 \neq \sigma_2^2 \implies \text{Welch } df < n_1+n_2-2 \implies \text{konservativer Test}` }
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
      <div class="warn-box" data-warning-placement="rail"><strong>z vs. t:</strong> Den z-Test nur verwenden, wenn $\sigma$ wirklich bekannt ist. In der Praxis ist $\sigma$ fast nie bekannt — dann ist der t-Test korrekt. Bei sehr großem $n$ nähern sich $z$ und $t$ an, da $t_\infty = z$.</div>
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
          { text: String.raw`Kritischer Wert: $z_{0{,}975} = 1{,}96$.`, eq: String.raw`|z| = 2{,}0 > 1{,}96 \implies z \in K` },
          { text: String.raw`p-Wert berechnen: $P(|Z| > 2{,}0) = 2(1-\Phi(2{,}0))$.`, eq: String.raw`p = 2(1-0{,}9772) = 2 \cdot 0{,}0228 = 0{,}0456 < 0{,}05` }
        ],
        result: String.raw`$H_0: \mu = 50$ wird abgelehnt ($z = 2{,}0 > 1{,}96$, $p \approx 0{,}046$). Es gibt signifikante Evidenz dafür, dass die Maschine außerhalb der Toleranz produziert.`
      },
      {
        text: String.raw`In einer Befragung von $n = 400$ Personen gaben $\hat{p} = 0{,}56$ an, Partei A zu wählen. Testen Sie $H_0: p = 0{,}50$ gegen $H_1: p > 0{,}50$ bei $\alpha = 0{,}01$.`,
        steps: [
          { text: `z-Statistik für Anteilstest:`, eq: String.raw`z = \frac{0{,}56 - 0{,}50}{\sqrt{0{,}50 \cdot 0{,}50 / 400}} = \frac{0{,}06}{\sqrt{0{,}000625}} = \frac{0{,}06}{0{,}025} = 2{,}4` },
          { text: String.raw`Kritischer Wert (rechtsseitig, $\alpha = 0{,}01$): $z_{0{,}99} = 2{,}326$.`, eq: String.raw`z = 2{,}4 > 2{,}326 \implies H_0 \text{ ablehnen}` },
          { text: String.raw`p-Wert: $P(Z > 2{,}4) = 1 - \Phi(2{,}4)$.`, eq: String.raw`p = 1 - 0{,}9918 = 0{,}0082 < 0{,}01` }
        ],
        result: String.raw`$H_0$ wird auf dem $1\%$-Niveau abgelehnt. Es gibt hochsignifikante Evidenz, dass die Zustimmung zu Partei A über $50\%$ liegt.`
      },
      {
        text: String.raw`Erklären Sie die Beziehung zwischen dem z-Test und dem $95\%$-Konfidenzintervall. Wenn $\mu_0$ im $95\%$-KI liegt, was folgt für den zweiseitigen z-Test bei $\alpha = 0{,}05$?`,
        steps: [
          { text: String.raw`$95\%$-KI bei bekanntem $\sigma$:`, eq: String.raw`\left[\bar{x} - 1{,}96\frac{\sigma}{\sqrt{n}};\; \bar{x} + 1{,}96\frac{\sigma}{\sqrt{n}}\right]` },
          { text: String.raw`Äquivalenz: $\mu_0$ liegt im KI $\iff |z| \leq 1{,}96$.`, eq: String.raw`\left|\frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}\right| \leq 1{,}96 \iff \mu_0 \in \text{KI}` },
          { text: `Schlussfolgerung:`, eq: String.raw`\mu_0 \in \text{KI}_{95\%} \implies |z| \leq 1{,}96 \implies H_0 \text{ nicht ablehnen bei } \alpha = 0{,}05` }
        ],
        result: String.raw`KI und zweiseitiger Test sind formal äquivalent: $H_0$ wird genau dann nicht abgelehnt, wenn $\mu_0$ im KI liegt. Diese Dualität gilt allgemein und erlaubt, aus einem KI direkt auf die Testentscheidung zu schließen.`
      },
      {
        text: String.raw`Eine historische Datenreihe zeigt, dass Tagesrenditen einer Aktie normalverteilt sind mit bekanntem $\sigma = 1{,}5\%$. Im letzten Monat ($n=20$ Handelstage) betrug $\bar{x} = 0{,}3\%$ täglich. Testen Sie $H_0: \mu = 0$ (kein Trend) gegen $H_1: \mu \neq 0$ bei $\alpha = 0{,}05$.`,
        steps: [
          { text: `z-Statistik:`, eq: String.raw`z = \frac{0{,}3 - 0}{1{,}5/\sqrt{20}} = \frac{0{,}3}{1{,}5/4{,}472} = \frac{0{,}3}{0{,}3354} \approx 0{,}894` },
          { text: String.raw`Kritischer Wert: $z_{0{,}975} = 1{,}96$.`, eq: String.raw`|z| = 0{,}894 < 1{,}96 \implies H_0 \text{ nicht ablehnen}` },
          { text: String.raw`p-Wert: $P(|Z| > 0{,}894) \approx 2(1-0{,}814) = 0{,}372$.`, eq: String.raw`p \approx 0{,}37 \gg 0{,}05 \implies \text{kein signifikanter Trend}` }
        ],
        result: String.raw`$H_0$ kann nicht abgelehnt werden. Die beobachtete durchschnittliche Tagesrendite von $0{,}3\%$ ist statistisch nicht von null verschieden — sie könnte rein zufällig entstanden sein. Bei $n = 20$ Tagen ist die Teststärke für kleine Effekte begrenzt.`
      },
      {
        text: String.raw`Testauswahl-Fall: $\sigma$ ist unbekannt, $n=18$, die Daten wirken annähernd normal. Warum ist hier der t-Test die saubere Standardwahl und wann wird z als Approximation vertretbar?`,
        steps: [
          { text: String.raw`Bei unbekannter Populationsstreuung wird $\sigma$ durch $s$ ersetzt; die Teststatistik folgt dann t- statt z-Logik.`, eq: null },
          { text: String.raw`Bei kleinem/mittlerem $n$ ist dieser Unterschied substanziell, da die t-Verteilung dickere Ränder hat.`, eq: null },
          { text: String.raw`z-Approximation wird mit wachsendem $n$ vertretbar, weil sich t gegen z annähert.`, eq: String.raw`t_{\nu}\to z \text{ für } \nu\to\infty` }
        ],
        result: String.raw`Prüfungsregel: unbekanntes $\sigma$ $\Rightarrow$ t-Test als Default. z nur mit klarer Begründung (bekanntes $\sigma$ oder sehr großes $n$).`
      }
    ]
  },
  zwei_stichproben: {
    motivation: 'Häufig interessiert uns nicht ein einzelner Mittelwert, sondern der Unterschied zwischen zwei Gruppen. Zwei-Stichproben-Tests vergleichen Mittelwerte, Varianzen oder Anteile.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Testwahl zuerst: gepaart oder ungepaart?</h3>
      <p>Vor jeder Formel steht die Strukturfrage: dieselben Personen vor/nach einer Maßnahme oder zwei unabhängige Gruppen? Diese Entscheidung ist wichtiger als der spätere Taschenrechnerschritt.</p>
    </div>
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
      <div class="warn-box" data-warning-placement="rail"><strong>Unverbunden vs. verbunden:</strong> Wird eine Paarstruktur ignoriert und stattdessen ein unverbundener Test durchgeführt, verliert man die Kontrolle über individuelle Unterschiede. Der verbundene Test hat bei echter Paarung mehr Teststärke.</div>
    </div>
    `,
    formeln: [
      {
        label: 'Gepoolte Varianz',
        eq: String.raw`$$s_p^2 = \frac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}$$`,
        desc: 'Varianzschätzer bei Varianzhomogenität',
        variables: { 's_p^2': 'gepoolte Varianz', 'n_1,n_2': 'Gruppengrößen', 's_1^2,s_2^2': 'empirische Gruppenvarianzen' }
      },
      {
        label: 'Verbundener t-Test',
        eq: String.raw`$$t = \frac{\bar{d}}{s_d/\sqrt{n}}$$`,
        desc: 'Test auf den Mittelwert der Paar-Differenzen',
        variables: { '\\bar d': 'mittlere Differenz', 's_d': 'Standardabweichung der Differenzen', 'n': 'Anzahl der Paare' }
      },
      {
        label: 'F-Test auf Varianzgleichheit',
        eq: String.raw`$$F = \frac{s_1^2}{s_2^2}$$`,
        desc: 'Vorprüfung für pooled vs. Welch',
        variables: { 'F': 'Verhältnis der Stichprobenvarianzen', 's_1^2,s_2^2': 'Gruppenvarianzen' }
      }
    ],
    aufgaben: [
      {
        text: String.raw`Gruppe A ($n_1=10$, $\bar{x}_1=25$, $s_1^2=9$) und Gruppe B ($n_2=12$, $\bar{x}_2=22$, $s_2^2=16$). Führen Sie einen zweiseitigen Welch-t-Test bei $\alpha=0{,}05$ durch. Kritischer Wert $t_{krit} \approx 2{,}09$ (Satterthwaite $df \approx 19$).`,
        steps: [
          { text: `Standardfehler der Differenz:`, eq: String.raw`SE = \sqrt{\frac{s_1^2}{n_1}+\frac{s_2^2}{n_2}} = \sqrt{\frac{9}{10}+\frac{16}{12}} = \sqrt{0{,}9+1{,}333} = \sqrt{2{,}233} \approx 1{,}494` },
          { text: `t-Statistik:`, eq: String.raw`t = \frac{25-22}{1{,}494} = \frac{3}{1{,}494} \approx 2{,}007` },
          { text: String.raw`Entscheidung: $|t| = 2{,}007 < 2{,}09 = t_{krit}$.`, eq: String.raw`|t| < t_{krit} \implies H_0: \mu_1 = \mu_2 \text{ nicht ablehnen}` }
        ],
        result: String.raw`$H_0$ kann auf dem $5\%$-Niveau nicht abgelehnt werden. Die Differenz $\bar{x}_1 - \bar{x}_2 = 3$ ist nicht signifikant — allerdings liegt $t$ knapp unter dem kritischen Wert, sodass ein größerer Stichprobenumfang möglicherweise zur Ablehnung führen würde.`
      },
      {
        text: String.raw`Eine Studie misst den Blutdruck von $n=8$ Patienten vor und nach einem Training. Differenzen (vorher − nachher): $5, 3, 8, 2, 6, 4, 7, 1$. Führen Sie den verbundenen t-Test bei $\alpha=0{,}05$ durch ($t_{7;\,0{,}975} = 2{,}365$).`,
        steps: [
          { text: `Mittelwert der Differenzen:`, eq: String.raw`\bar{d} = \frac{5+3+8+2+6+4+7+1}{8} = \frac{36}{8} = 4{,}5` },
          { text: `Standardabweichung der Differenzen ($s_d$):`, eq: String.raw`s_d^2 = \frac{\sum(d_i-\bar{d})^2}{7} = \frac{(0{,}5)^2+(-1{,}5)^2+(3{,}5)^2+(-2{,}5)^2+(1{,}5)^2+(-0{,}5)^2+(2{,}5)^2+(-3{,}5)^2}{7} = \frac{42}{7} = 6 \implies s_d \approx 2{,}449` },
          { text: `t-Statistik:`, eq: String.raw`t = \frac{4{,}5}{2{,}449/\sqrt{8}} = \frac{4{,}5}{0{,}866} \approx 5{,}20` },
          { text: String.raw`Entscheidung: $|t| = 5{,}20 > 2{,}365$.`, eq: String.raw`H_0: \mu_d = 0 \text{ ablehnen} \implies \text{Training senkt Blutdruck signifikant}` }
        ],
        result: String.raw`$H_0$ wird abgelehnt. Das Training hat eine statistisch signifikante blutdrucksenkende Wirkung ($t \approx 5{,}2$, $p < 0{,}01$). Der verbundene Test ist hier korrekt, da dieselben Patienten gemessen wurden.`
      },
      {
        text: String.raw`F-Test auf Varianzhomogenität: Gruppe 1 ($n_1=11$, $s_1^2=24$), Gruppe 2 ($n_2=9$, $s_2^2=8$). Testen Sie $H_0: \sigma_1^2 = \sigma_2^2$ zweiseitig bei $\alpha=0{,}10$. Kritische Werte: $F_{10,8;\,0{,}95} = 3{,}35$ (obere Schranke).`,
        steps: [
          { text: `F-Statistik (größere durch kleinere Varianz):`, eq: String.raw`F = \frac{s_1^2}{s_2^2} = \frac{24}{8} = 3{,}0` },
          { text: String.raw`Zweiseitiger Test: Obere Grenze $F_{0{,}95} = 3{,}35$.`, eq: String.raw`F = 3{,}0 < 3{,}35 \implies H_0 \text{ nicht ablehnen}` }
        ],
        result: String.raw`Die Varianzen unterscheiden sich nicht signifikant auf dem $10\%$-Niveau ($F = 3{,}0 < 3{,}35$). Der Pooled-t-Test wäre daher gerechtfertigt. Beachte: Der F-Test ist selbst nicht robust gegenüber Normalverteilungsverletzungen — bei Zweifeln besser Levene-Test.`
      },
      {
        text: String.raw`Zwei Kurse A und B haben dieselbe Klausur geschrieben. Kurs A: $n_A=15$, $\bar{x}_A=72$, $s_A=8$. Kurs B: $n_B=15$, $\bar{x}_B=68$, $s_B=10$. Pooled-t-Test ($df=28$, $t_{krit}=2{,}048$). Berechnen Sie die gepoolte Standardabweichung, die t-Statistik und fällen Sie die Entscheidung.`,
        steps: [
          { text: `Gepoolte Varianz:`, eq: String.raw`s_p^2 = \frac{14 \cdot 64 + 14 \cdot 100}{28} = \frac{896+1400}{28} = \frac{2296}{28} = 82 \implies s_p = \sqrt{82} \approx 9{,}055` },
          { text: `t-Statistik:`, eq: String.raw`t = \frac{72-68}{9{,}055\sqrt{1/15+1/15}} = \frac{4}{9{,}055 \cdot 0{,}3651} = \frac{4}{3{,}307} \approx 1{,}209` },
          { text: String.raw`Entscheidung: $|t| = 1{,}209 < 2{,}048$.`, eq: String.raw`H_0: \mu_A = \mu_B \text{ nicht ablehnen bei } \alpha = 0{,}05` }
        ],
        result: String.raw`$H_0$ kann nicht abgelehnt werden. Trotz der Differenz von $4$ Punkten ist der Unterschied statistisch nicht signifikant — die Streuung innerhalb der Kurse ist zu groß. Für einen machtstarken Test wäre ein größerer Stichprobenumfang nötig.`
      },
      {
        text: String.raw`Testauswahl-Entscheidung: Vorher/Nachher-Messung bei denselben Personen, deutliche individuelle Baseline-Unterschiede. Welcher Test ist korrekt und warum ist ein unverbundener Test hier ein typischer Trap?`,
        steps: [
          { text: `Bei denselben Personen liegt eine Paarstruktur vor; analysiert werden Differenzen pro Person.`, eq: String.raw`d_i = x_{\text{vor},i} - x_{\text{nach},i}` },
          { text: String.raw`Korrekt ist daher der verbundene t-Test auf $\bar d$.`, eq: String.raw`t = \frac{\bar d}{s_d/\sqrt{n}}` },
          { text: `Ein unverbundener Test ignoriert die Paarinformation und bläht die Fehlervarianz.`, eq: null }
        ],
        result: String.raw`Der verbundene Test ist methodisch richtig und meist stärker. "Gleiche Personen, aber unverbundener Test" ist eine klassische Klausurfalle.`
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
      <div class="warn-box" data-warning-placement="rail"><strong>ANOVA-Voraussetzungen:</strong> Normalverteilung innerhalb der Gruppen, Varianzhomogenität (Levene-Test), unabhängige Beobachtungen. Bei klaren Verletzungen darf der F-Test nicht blind weitergelesen werden; zuerst müssen Annahmenproblem und geeignete Alternative sauber begründet werden.</div>
    </div>
    `,
    formeln: [
      {
        label: 'F-Statistik ANOVA',
        eq: String.raw`$$F = \frac{MSB}{MSW} = \frac{SSB/(k-1)}{SSW/(N-k)}$$`,
        desc: 'Varianzzerlegung in systematische und unsystematische Streuung',
        variables: { 'MSB': 'mittlere Quadratsumme zwischen Gruppen', 'MSW': 'mittlere Quadratsumme innerhalb der Gruppen', 'SSB,SSW': 'Quadratsummen', 'k,N': 'Gruppenanzahl und Gesamtumfang' }
      },
      {
        label: 'Varianzzerlegung',
        eq: String.raw`$$SST = SSB + SSW$$`,
        desc: 'Gesamtstreuung zerfällt in Zwischen- und Innergruppenanteil',
        variables: { 'SST': 'totale Quadratsumme', 'SSB': 'between-groups-Streuung', 'SSW': 'within-groups-Streuung' }
      },
      {
        label: 'Effektmaß',
        eq: String.raw`$$\eta^2 = \frac{SSB}{SST}$$`,
        desc: 'Anteil der Gesamtstreuung, der auf Gruppenunterschiede entfällt',
        variables: { '\\eta^2': 'Effektstärke der ANOVA', 'SSB': 'erklärte Gruppenstreuung', 'SST': 'Gesamtstreuung' }
      }
    ],
    aufgaben: [
      {
        text: String.raw`Drei Gruppen: A ($n_A=4$, $\bar{x}_A=10$), B ($n_B=4$, $\bar{x}_B=14$), C ($n_C=4$, $\bar{x}_C=12$). Gesamtmittelwert $\bar{x}=12$. $SSW = 24$. Berechnen Sie $SSB$, $F$ und entscheiden Sie bei $\alpha=0{,}05$ ($F_{krit}(2,9)=4{,}26$).`,
        steps: [
          { text: String.raw`$SSB$ berechnen:`, eq: String.raw`SSB = \sum_j n_j(\bar{x}_j - \bar{x})^2 = 4(10-12)^2 + 4(14-12)^2 + 4(12-12)^2 = 16+16+0 = 32` },
          { text: `Mittlere Quadratsummen:`, eq: String.raw`MSB = \frac{32}{k-1} = \frac{32}{2} = 16 \quad MSW = \frac{24}{N-k} = \frac{24}{9} = 2{,}667` },
          { text: `F-Statistik:`, eq: String.raw`F = \frac{16}{2{,}667} \approx 6{,}0` },
          { text: String.raw`Entscheidung: $F = 6{,}0 > 4{,}26$.`, eq: String.raw`H_0: \mu_A = \mu_B = \mu_C \text{ ablehnen} \implies \text{mind. eine Gruppe unterscheidet sich}` }
        ],
        result: String.raw`$F \approx 6{,}0 > F_{krit} = 4{,}26$: $H_0$ wird abgelehnt. Es gibt signifikante Unterschiede zwischen den Gruppen. Ein Post-hoc-Test (z.B. Tukey) würde zeigen, dass B sich von A unterscheidet.`
      },
      {
        text: String.raw`Erläutern Sie das Problem der multiplen Vergleiche. Wenn man 3 Gruppen paarweise vergleicht (3 Tests), wie groß ist die familienweise Fehlerrate, wenn jeder einzelne Test $\alpha = 0{,}05$ hat? Welche Korrektur wäre angemessen?`,
        steps: [
          { text: String.raw`Anzahl paarweiser Vergleiche bei $k=3$ Gruppen: $\binom{3}{2}$.`, eq: String.raw`\binom{3}{2} = 3 \text{ Tests}` },
          { text: `Familienweiser Fehler 1. Art (Bonferroni-Approximation):`, eq: String.raw`\alpha_{FW} = 1 - (1-\alpha)^m = 1 - (0{,}95)^3 = 1 - 0{,}857 = 0{,}143` },
          { text: `Bonferroni-Korrektur: Adjustiertes Niveau pro Test.`, eq: String.raw`\alpha_{adj} = \frac{\alpha}{m} = \frac{0{,}05}{3} \approx 0{,}017` }
        ],
        result: String.raw`Ohne Korrektur beträgt die familienweise Fehlerrate ca. $14{,}3\%$ — weit über dem gewünschten $5\%$. Die Bonferroni-Korrektur verwendet $\alpha_{adj} = 0{,}017$ pro Test. Alternativen: Tukey-Korrektur (exakt für alle Paarvergleiche), Holm-Bonferroni (weniger konservativ).`
      },
      {
        text: String.raw`ANOVA-Tabelle ausfüllen: $k=4$ Gruppen, $N=20$ Beobachtungen insgesamt. $SSB = 60$, $SST = 140$. Berechnen Sie alle fehlenden Größen und den F-Wert ($F_{krit}(3,16) = 3{,}24$ bei $\alpha = 0{,}05$).`,
        steps: [
          { text: String.raw`$SSW$ aus $SST = SSB + SSW$:`, eq: String.raw`SSW = SST - SSB = 140 - 60 = 80` },
          { text: String.raw`Freiheitsgrade: $df_B = k-1$, $df_W = N-k$.`, eq: String.raw`df_B = 3, \quad df_W = 16` },
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
          { text: String.raw`$SSW_B = (14-15)^2+\ldots+(13-15)^2 = 10$, $SSW_C = 10$. Gesamt:`, eq: String.raw`SSW = 10+10+10 = 30` }
        ],
        result: String.raw`$SSB \approx 43{,}3$, $SSW = 30$. $F = (43{,}3/2)/(30/12) = 21{,}65/2{,}5 = 8{,}66 > F_{krit}(2,12) \approx 3{,}89$: Die drei Werbestrategien unterscheiden sich signifikant in ihrem Effekt auf den Umsatz.`
      }
    ]
  },
  nichtparametrisch: {
    motivation: 'Wenn kein plausibles parametrisches Modell vorgegeben ist, schätzt die Vorlesung die Dichte direkt aus den Daten: erst über Histogramme, dann über fließende Histogramme und Kerndichteschätzung. Nichtparametrisch heißt hier also nicht “Rangtest”, sondern “Verteilungsform ohne feste Familienannahme sichtbar machen”.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Wann die Vorlesung nichtparametrisch schätzt</h3>
      <p>VL 09 öffnet den Block genau mit dieser Frage: <strong>Was tun, wenn kein spezielles parametrisches Modell sinnvoll vorgegeben ist?</strong> Dann wird die unbekannte Dichte direkt aus der Stichprobe geschätzt, statt erst eine Normal-, Exponential- oder andere Familie zu unterstellen.</p>
      <p>Der methodische Kern lautet deshalb: Nichtparametrische Schätzung ist eine Formfrage. Wie sieht die Verteilung aus, wo häufen sich Datenpunkte, und wie stark willst du glätten?</p>
    </div>
    <div class="section-block">
      <h3>Histogramm als Dichteschätzer</h3>
      <p>Das Histogramm ist im Kurs nicht nur Visualisierung, sondern ein erster Dichteschätzer: Die Balkenhöhe muss so skaliert werden, dass die Gesamtfläche interpretierbar bleibt. Genau deshalb hängt sie von Klassenhäufigkeit <em>und</em> Klassenbreite ab.</p>
      <div class="math-block">$$\hat f(x)=\frac{H_j}{n\,b_j}, \qquad x \in I_j$$</div>
      <p>$H_j$ zählt die Beobachtungen in Klasse $I_j$, $n$ ist der Stichprobenumfang und $b_j$ die Klassenbreite. Die Höhe misst also Dichte, nicht bloß rohe Häufigkeit.</p>
    </div>
    <div class="section-block">
      <h3>Fließendes Histogramm und Kernidee</h3>
      <p>Die Vorlesung schärft das Histogramm dann zu einem lokalen Fensterzugriff: Für jeden Punkt $x$ wird gezählt, wie viele Beobachtungen in ein Intervall um $x$ fallen. Daraus entsteht das <strong>fließende Histogramm</strong>.</p>
      <div class="math-block">$$\hat f(x)=\frac{1}{2b}\cdot\frac{\#\{x_i\in(x-b,x+b]\}}{n}$$</div>
      <p>Die Kerndichteschätzung verallgemeinert diese Idee: Beobachtungen im Umfeld von $x$ werden nicht alle gleich gewichtet, sondern über eine Kernfunktion gewichtet.</p>
      <div class="math-block">$$\hat f(x)=\frac{1}{nb}\sum_{i=1}^{n}K\!\left(\frac{x-x_i}{b}\right)$$</div>
    </div>
    <div class="section-block">
      <h3>Bandbreite schlägt Kernform</h3>
      <p>Der kursrelevante Steuerparameter ist die Bandbreite $b$. Kleine Bandbreiten machen die Schätzung sehr zackig und ausreißerempfindlich; große Bandbreiten glätten stark und können echte Struktur verdecken.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Glättungsfalle:</strong> Zu kleines $b$ verkauft Stichprobenrauschen als “echte Struktur”. Zu großes $b$ bügelt lokale Unterschiede weg. Für die Klausur ist meist wichtiger, die Wirkung von $b$ zu lesen, als eine bestimmte Kernfunktion auswendig aufzuzählen.</div>
    </div>
    `,
    formeln: [
      { label: 'Histogramm als Dichteschätzer', eq: String.raw`$$\hat f(x)=\frac{H_j}{n\,b_j}, \qquad x \in I_j$$`, desc: 'Klassenhäufigkeit pro Stichprobenumfang und Klassenbreite.' },
      { label: 'Fließendes Histogramm', eq: String.raw`$$\hat f(x)=\frac{1}{2b}\cdot\frac{\#\{x_i\in(x-b,x+b]\}}{n}$$`, desc: 'Lokales Fenster der Breite $2b$ um den Auswertungspunkt $x$.' },
      { label: 'Kerndichteschätzung', eq: String.raw`$$\hat f(x)=\frac{1}{nb}\sum_{i=1}^{n}K\!\left(\frac{x-x_i}{b}\right)$$`, desc: 'Die Bandbreite $b$ steuert die Glättung; die Kernfunktion gewichtet Beobachtungen im Umfeld von $x$.' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein Histogramm hat in einer Klasse die Breite $b_j=2$; in dieser Klasse liegen $H_j=18$ von insgesamt $n=100$ Beobachtungen. Berechnen Sie die zugehörige Dichtehöhe und erklären Sie kurz, warum man nicht einfach nur die rohe Häufigkeit 18 berichtet.`,
        steps: [
          { text: `Die Kursformel einsetzen.`, eq: String.raw`\hat f(x)=\frac{H_j}{n\,b_j}=\frac{18}{100\cdot 2}` },
          { text: `Dichtehöhe ausrechnen.`, eq: String.raw`\hat f(x)=0{,}09` },
          { text: `Interpretation ergänzen.`, eq: String.raw`\text{Die Klassenbreite gehört hinein, damit die Balkenfläche interpretierbar bleibt.}` }
        ],
        result: String.raw`Die Dichtehöhe beträgt $0{,}09$. Ein Histogramm berichtet nicht bloß rohe Häufigkeit, sondern skaliert nach Klassenbreite und Stichprobenumfang, damit die Fläche als Wahrscheinlichkeit bzw. Dichte interpretiert werden kann.`
      },
      {
        text: String.raw`Zwei Kerndichteschätzungen beruhen auf denselben Daten. Schätzung A verwendet $b=0{,}15$, Schätzung B verwendet $b=0{,}60$. Welche Schätzung ist typischerweise glatter, und welcher inhaltliche Preis wird dafür gezahlt?`,
        steps: [
          { text: `Bandbreite vergleichen.`, eq: String.raw`0{,}60 > 0{,}15 \Rightarrow \text{mehr Glättung}` },
          { text: `Direkte Folgerung für die Kurve.`, eq: String.raw`\hat f_B(x) \text{ ist typischerweise glatter als } \hat f_A(x)` },
          { text: `Preis der stärkeren Glättung benennen.`, eq: String.raw`\text{Lokale Struktur / Mehrgipfligkeit kann verdeckt werden}` }
        ],
        result: String.raw`Schätzung B mit $b=0{,}60$ ist glatter. Der Preis ist höhere Glättung bzw. möglicher Strukturverlust: kleine lokale Wellen können echtes Signal oder bloß Rauschen sein und werden durch großes $b$ leichter überdeckt.`
      },
      {
        text: String.raw`Warum ist in der Vorlesung die Bandbreite meist wichtiger als die konkrete Kernfunktion? Formulieren Sie den Punkt in zwei klausurtauglichen Sätzen.`,
        steps: [
          { text: `Bandbreite als Hauptregler benennen.`, eq: String.raw`\text{Klein } b \Rightarrow \text{zackiger}, \qquad \text{groß } b \Rightarrow \text{glatter}` },
          { text: `Kernfunktion relativieren.`, eq: String.raw`\text{Epanechnikov, Gauß, Bisquare ändern meist weniger als ein anderer } b\text{-Wert}` },
          { text: `Prüfungssatz formulieren.`, eq: String.raw`\text{Entscheidend ist, ob die Schätzung zu rau oder zu stark geglättet ist.}` }
        ],
        result: String.raw`Die Vorlesung nutzt die Kernfunktion eher als Bauform und die Bandbreite als den eigentlichen Glättungshebel. Deshalb wird klausurtypisch gefragt, welche Wirkung ein anderes $b$ auf Rauigkeit, Struktur und Verzerrung hat.`
      }
    ]
  }
};

// Benchmark reconstruction pass 1: the split concept pages must no longer
// collapse onto shared placeholder content. Keep the legacy backbone above as
// internal source material, but expose distinct benchmark-grade concept pages.
CONTENT.schaetzen_verfahren = {
  motivation: 'Schätzverfahren beantworten die Konstruktionsfrage: Wie wird aus einer Stichprobe ein plausibler Parameterwert? In diesem Kapitel stehen MoM, ML, KQ-Perspektive und MSE-Logik im Vordergrund.',
  theorie: String.raw`
    <div class="section-block">
      <h3>Vom Parameter zum Schätzer</h3>
      <p>Ein <strong>Punktschätzer</strong> $\hat{\theta}$ ist eine Zufallsvariable auf Stichprobenbasis. Die Kernfrage lautet nicht nur “Wie rechne ich?”, sondern “Warum ist genau diese Rechenvorschrift für den Parameter sinnvoll?”</p>
    </div>
    <div class="section-block">
      <h3>Methode der Momente (MoM)</h3>
      <p>MoM setzt theoretische Momente der Verteilung mit empirischen Momenten gleich. Bei Bernoulli-Daten ist das besonders anschaulich: $E[X]=\pi$ wird durch den Stichprobenanteil $\bar X$ ersetzt.</p>
    </div>
    <div class="section-block">
      <h3>Maximum Likelihood (ML)</h3>
      <p>ML wählt den Parameterwert, unter dem die beobachteten Daten am plausibelsten sind. Im Bernoulli-/Binomial-Standardfall führt ML ebenfalls auf den Stichprobenanteil, aber die Begründung ist eine andere als bei MoM.</p>
    </div>
    <div class="section-block">
      <h3>Qualitätskriterien: Bias, Varianz, MSE</h3>
      <p>Ein Schätzer kann erwartungstreu und trotzdem unpräzise sein. Deshalb müssen <strong>Bias</strong>, <strong>Varianz</strong> und <strong>MSE</strong> getrennt gelesen werden.</p>
      <ul>
        <li><strong>Bias:</strong> systematischer Abstand vom Zielparameter.</li>
        <li><strong>Varianz:</strong> Streuung des Schätzers über Wiederholungsstichproben.</li>
        <li><strong>MSE:</strong> Gesamtfehler aus Streuung und Verzerrung.</li>
      </ul>
    </div>
    <div class="section-block">
      <h3>Klausurzugriff</h3>
      <div class="warn-box" data-warning-placement="rail"><strong>Methodenwahl ist Prüfungsstoff</strong> Wenn die Aufgabe nach Konstruktion oder Güte fragt, reicht ein Intervall nicht. Dann musst du Schätzverfahren und Qualitätsmaß aktiv voneinander trennen.</div>
      <p>Merksatz: <strong>Verfahren</strong> beantwortet “Wie entsteht $\hat\theta$?”, <strong>Eigenschaft</strong> beantwortet “Wie gut ist $\hat\theta$?”.</p>
    </div>
  `,
  formeln: [
    {
      label: 'Momentenbedingung',
      eq: String.raw`$$m(\theta) = \bar{m}$$`,
      desc: 'Theoretisches Moment wird durch empirisches Moment ersetzt',
      variables: { 'm(\\theta)': 'theoretisches Moment als Funktion des Parameters', '\\bar m': 'empirisches Stichprobenmoment' }
    },
    {
      label: 'MSE-Zerlegung',
      eq: String.raw`$$MSE(\hat{\theta}) = Var(\hat{\theta}) + Bias(\hat{\theta})^2$$`,
      desc: 'Gesamtgüte eines Schätzers',
      variables: { 'MSE(\\hat{\\theta})': 'mittlerer quadratischer Fehler', 'Var(\\hat{\\theta})': 'Streuung des Schätzers', 'Bias(\\hat{\\theta})': 'systematische Verzerrung' }
    },
    {
      label: 'Bernoulli-Standardschätzer',
      eq: String.raw`$$\hat{\pi}_{MM} = \hat{\pi}_{ML} = \bar{X} = \frac{1}{n}\sum_{i=1}^n X_i$$`,
      desc: 'Standardfall, in dem MoM und ML zusammenfallen',
      variables: { '\\hat{\\pi}': 'Schätzer des Erfolgsanteils', '\\bar X': 'Stichprobenanteil', 'X_i': 'Bernoulli-Beobachtung' }
    }
  ],
  aufgaben: [
    {
      text: String.raw`Methodenvergleich (MoM vs. ML): Für eine Bernoulli-Variable mit $n=200$ Beobachtungen und $76$ Erfolgen soll $\pi$ geschätzt werden. Bestimmen Sie den Momentenschätzer und den Maximum-Likelihood-Schätzer und interpretieren Sie das Ergebnis.`,
      steps: [
        { text: `Stichprobenanteil:`, eq: String.raw`\bar X = \frac{76}{200} = 0{,}38` },
        { text: `MoM:`, eq: String.raw`\hat{\pi}_{MM} = \bar X = 0{,}38` },
        { text: `ML:`, eq: String.raw`\hat{\pi}_{ML} = 0{,}38` }
      ],
      result: String.raw`In diesem Standardfall liefern MoM und ML denselben Schätzwert. Prüfungsrelevant ist, die gleiche Zahl mit zwei verschiedenen Begründungen erklären zu können.`
    },
    {
      text: String.raw`Vergleichen Sie die Schätzer $\hat{\mu}_1 = \bar X$ und $\hat{\mu}_2 = X_1$ für den Erwartungswert $\mu$. Prüfen Sie Erwartungstreue und Effizienz.`,
      steps: [
        { text: `Erwartungstreue:`, eq: String.raw`E[\bar X] = \mu,\qquad E[X_1] = \mu` },
        { text: `Varianzvergleich:`, eq: String.raw`Var(\bar X) = \frac{\sigma^2}{n},\qquad Var(X_1)=\sigma^2` },
        { text: `Schluss:`, eq: null }
      ],
      result: String.raw`Beide Schätzer sind erwartungstreu, aber $\bar X$ ist deutlich effizienter. Genau diese Trennung zwischen Erwartungstreue und Präzision muss sitzen.`
    },
    {
      text: String.raw`Bias/MSE-Drill: Für einen Schätzer $\hat\theta$ gilt $Var(\hat\theta)=4$ und $Bias(\hat\theta)=1{,}5$. Berechnen Sie den MSE und erklären Sie, warum die Varianz allein hier kein sauberer Qualitätsvergleich ist.`,
      steps: [
        { text: `MSE-Zerlegung:`, eq: String.raw`MSE(\hat\theta)=Var(\hat\theta)+Bias(\hat\theta)^2` },
        { text: `Einsetzen:`, eq: String.raw`MSE = 4 + 1{,}5^2 = 6{,}25` },
        { text: `Interpretation:`, eq: null }
      ],
      result: String.raw`$MSE=6{,}25$. Sobald Bias im Spiel ist, reicht ein Varianzvergleich nicht mehr; Streuung und Verzerrung müssen gemeinsam gelesen werden.`
    },
    {
      text: String.raw`Methodenwahl unter Klausurdruck: Ein Parameter soll aus einer Bernoulli-Stichprobe geschätzt werden. Die Aufgabe fragt explizit nach “dem plausibelsten Parameterwert unter den beobachteten Daten”. Welcher Zugriff liegt begrifflich näher: MoM oder ML?`,
      steps: [
        { text: `“Plausibelster Wert unter den beobachteten Daten” verweist auf Likelihood-Logik.`, eq: null },
        { text: `MoM würde über Momentengleichung argumentieren, ML über Datenplausibilität.`, eq: null },
        { text: `Gleicher Zahlenwert bedeutet nicht gleiche Methodenbegründung.`, eq: null }
      ],
      result: String.raw`Die richtige Begriffsantwort ist ML. In Standardfällen können MoM und ML numerisch übereinstimmen, methodisch aber verschieden motiviert sein.`
    },
    {
      text: String.raw`KQ als Schätzlogik: Erläutern Sie, warum die Methode der kleinsten Quadrate zur Schätzlogik der linearen Regression gehört, obwohl sie etwas anderes löst als MoM oder ML.`,
      steps: [
        { text: `KQ minimiert die Summe quadrierter Residuen.`, eq: String.raw`\min_{\beta_0,\beta_1}\sum_{i=1}^n (y_i-\hat y_i)^2` },
        { text: `Damit werden konkrete Parameterschätzer für das Regressionsmodell erzeugt.`, eq: null },
        { text: `Die Logik ist Fehlerquadrate minimieren, nicht Momente oder Likelihood direkt angleichen.`, eq: null }
      ],
      result: String.raw`MoM, ML und KQ sind verschiedene Schätzverfahren. Das Prüfungsziel ist, die zugrunde liegende Konstruktionslogik sauber zu benennen.`
    }
  ]
};

CONTENT.schaetzen_eigenschaften_intervalle = {
  motivation: 'Dieses Kapitel fragt nicht nach der Konstruktion des Schätzers, sondern nach seiner Verlässlichkeit: Bias, Standardfehler, Intervallbreite und saubere Intervallinterpretation stehen im Zentrum.',
  theorie: String.raw`
    <div class="section-block">
      <h3>Erwartungstreue, Effizienz, Konsistenz</h3>
      <p>Ein guter Schätzer trifft den Parameter im Mittel (<strong>erwartungstreu</strong>), streut wenig (<strong>effizient</strong>) und nähert sich mit wachsendem $n$ dem wahren Wert an (<strong>konsistent</strong>).</p>
    </div>
    <div class="section-block">
      <h3>Standardfehler und Intervallbreite</h3>
      <p>Konfidenzintervalle basieren auf <strong>Punktschätzer ± kritischer Wert · Standardfehler</strong>. Je größer die Streuung und je kleiner $n$, desto breiter das Intervall.</p>
    </div>
    <div class="section-block">
      <h3>z- und t-basierte Konfidenzintervalle</h3>
      <p>Ist $\sigma$ bekannt, wird der z-Wert verwendet. In der Praxis ist $\sigma$ meist unbekannt; dann wird die t-Verteilung mit $n-1$ Freiheitsgraden genutzt.</p>
      <div class="math-block">$$\bar{x} \pm z_{1-\alpha/2}\cdot \frac{\sigma}{\sqrt{n}} \qquad \bar{x} \pm t_{n-1,1-\alpha/2}\cdot \frac{s}{\sqrt{n}}$$</div>
    </div>
    <div class="section-block">
      <h3>Interpretationsfalle Konfidenzintervall</h3>
      <p>Ein 95%-Konfidenzintervall bedeutet: <strong>Die Methode</strong> erzeugt in 95% der Wiederholungsstichproben Intervalle, die den wahren Parameter enthalten. Es bedeutet nicht, dass der feste Parameter mit 95% Wahrscheinlichkeit im konkreten Intervall liegt.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Breites Intervall</strong> Ein breites KI ist nicht “schlechter gerechnet”, sondern Ausdruck hoher Unsicherheit oder kleiner Stichprobe.</div>
    </div>
    <div class="section-block">
      <h3>Dualität von Intervall und Test</h3>
      <p>Bei zweiseitigen Tests gilt: Liegt der Nullwert $\theta_0$ außerhalb des $(1-\alpha)$-Konfidenzintervalls, wird $H_0$ auf Niveau $\alpha$ abgelehnt. Diese Verknüpfung spart in der Klausur Zeit.</p>
    </div>
  `,
  formeln: [
    {
      label: 'z-Konfidenzintervall',
      eq: String.raw`$$\bar{x} \pm z_{1-\alpha/2}\cdot \frac{\sigma}{\sqrt{n}}$$`,
      desc: 'Intervall bei bekannter Populationsstreuung',
      variables: { '\\bar{x}': 'Stichprobenmittel', 'z_{1-\\alpha/2}': 'kritischer z-Wert', '\\sigma': 'Populationsstandardabweichung', 'n': 'Stichprobenumfang' }
    },
    {
      label: 't-Konfidenzintervall',
      eq: String.raw`$$\bar{x} \pm t_{n-1,1-\alpha/2}\cdot \frac{s}{\sqrt{n}}$$`,
      desc: 'Standardintervall bei unbekannter Populationsstreuung',
      variables: { 't_{n-1,1-\\alpha/2}': 'kritischer t-Wert', 's': 'Stichprobenstandardabweichung', 'n-1': 'Freiheitsgrade' }
    },
    {
      label: 'Standardfehler',
      eq: String.raw`$$SE(\bar X)=\frac{\sigma}{\sqrt n}\quad \text{bzw.}\quad \frac{s}{\sqrt n}$$`,
      desc: 'Präzision des Mittelwertschätzers',
      variables: { 'SE(\\bar X)': 'Standardfehler des Mittelwerts', '\\sigma,s': 'Population/Stichprobe der Streuung', 'n': 'Stichprobenumfang' }
    }
  ],
  aufgaben: [
    {
      text: String.raw`Aus einer Stichprobe mit $n=36$ ergibt sich $\bar{x}=120$ und $s=18$. Berechnen Sie das $95\%$-Konfidenzintervall für $\mu$.`,
      steps: [
        { text: `Standardfehler:`, eq: String.raw`SE = 18/\sqrt{36} = 3` },
        { text: `Kritischer Wert:`, eq: String.raw`t_{35,\,0{,}975} \approx 2{,}03` },
        { text: `Intervall:`, eq: String.raw`120 \pm 2{,}03 \cdot 3 = [113{,}91;\;126{,}09]` }
      ],
      result: String.raw`Das $95\%$-KI lautet näherungsweise $[113{,}9;\;126{,}1]$. Prüfungsrelevant ist nicht nur die Zahl, sondern die Aussage: plausibler Parameterbereich statt Punktgewissheit.`
    },
    {
      text: String.raw`Ein Meinungsforschungsinstitut möchte den Anteil $p$ der Wahlberechtigten, die Partei A unterstützen, auf $\pm 2$ Prozentpunkte genau schätzen ($\alpha = 0{,}05$). Wie groß muss $n$ mindestens sein? Nutzen Sie $p = 0{,}5$ als konservative Schätzung.`,
      steps: [
        { text: `Formel für Stichprobengröße beim Anteil:`, eq: String.raw`n \ge \left(\frac{z_{1-\alpha/2}}{d}\right)^2 p(1-p)` },
        { text: `Einsetzen:`, eq: String.raw`n \ge \left(\frac{1{,}96}{0{,}02}\right)^2 \cdot 0{,}25 = 2401` },
        { text: `Konservative Wahl:`, eq: null }
      ],
      result: String.raw`Mindestens $n=2401$. Die Wahl $p=0{,}5$ ist konservativ, weil sie die Varianz und damit die benötigte Stichprobengröße maximiert.`
    },
    {
      text: String.raw`Ein $99\%$-KI für $\mu$ soll bei bekanntem $\sigma = 20$ berechnet werden. Stichprobengröße $n = 25$, $\bar{x} = 80$. Berechnen Sie das Intervall und erläutern Sie, wie es sich von einem $95\%$-KI unterscheidet.`,
      steps: [
        { text: `Kritischer z-Wert:`, eq: String.raw`z_{0{,}995}=2{,}576` },
        { text: `Standardfehler:`, eq: String.raw`SE = 20/\sqrt{25} = 4` },
        { text: `Intervall:`, eq: String.raw`80 \pm 2{,}576\cdot 4 = [69{,}7;\;90{,}3]` },
        { text: `Vergleich:`, eq: null }
      ],
      result: String.raw`Das 99%-Intervall ist breiter als das 95%-Intervall. Höhere Sicherheit kostet Präzision — genau dieser Tradeoff gehört in die Deutung.`
    },
    {
      text: String.raw`Dualität Intervall/Test: Für $\mu$ liegt das 95%-Konfidenzintervall bei $[49{,}2;\;50{,}8]$. Sie testen $H_0:\mu=51$ zweiseitig auf $\alpha=0{,}05$. Welche Entscheidung folgt sofort?`,
      steps: [
        { text: `Prüfe, ob der Nullwert im KI liegt.`, eq: String.raw`51 \notin [49{,}2;\;50{,}8]` },
        { text: `Dualität nutzen:`, eq: String.raw`\mu_0 \notin KI_{95\%} \iff H_0 \text{ wird auf } 5\% \text{-Niveau verworfen}` },
        { text: `Inhaltliche Deutung:`, eq: null }
      ],
      result: String.raw`$H_0$ wird abgelehnt. Die KI-Test-Dualität ist ein schneller und sauberer Klausurzugriff.`
    },
    {
      text: String.raw`Interpretationsfalle: Eine Studentin sagt: “Mit 95% Wahrscheinlichkeit liegt $\mu$ zwischen den Intervallgrenzen.” Korrigieren Sie die Aussage in einem sauberen Satz.`,
      steps: [
        { text: `Parameter ist fix, Intervall zufällig.`, eq: null },
        { text: `Korrekte Lesart:`, eq: String.raw`95\% \text{ der nach derselben Methode gebildeten Intervalle enthalten den wahren Parameter.}` },
        { text: `Keine Parameterwahrscheinlichkeit formulieren.`, eq: null }
      ],
      result: String.raw`Die Wahrscheinlichkeitsaussage gehört zur Methode, nicht zum festen Parameter. Genau diese Formulierung trennt Statistiklogik von Alltagsintuition.`
    }
  ]
};

CONTENT.regression_schaetzung_inferenz = {
  motivation: 'Regression erklärt nicht nur eine Gleichung, sondern einen Zusammenhang unter Unsicherheit. Dieses Kapitel fokussiert Modellaufbau, OLS-Schätzung, Koeffizientenlesen, Signifikanz und Relevanz.',
  theorie: String.raw`
    <div class="section-block">
      <h3>Modellidee</h3>
      <p>Die lineare Regression beschreibt den mittleren Zusammenhang zwischen einer Zielgröße $Y$ und einem oder mehreren Regressoren $X$. In der einfachen Form gilt:</p>
      <div class="math-block">$$Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i$$</div>
      <p>$\beta_0$ ist das Grundniveau, $\beta_1$ die durchschnittliche Änderung von $Y$ je zusätzlicher Einheit in $X$.</p>
    </div>
    <div class="section-block">
      <h3>OLS-Schätzung</h3>
      <p>Die Kleinste-Quadrate-Methode wählt die Gerade so, dass die quadrierten Residuen möglichst klein werden. In der einfachen Regression gilt:</p>
      <div class="math-block">$$\hat{\beta}_1 = \frac{\sum (x_i-\bar{x})(y_i-\bar{y})}{\sum (x_i-\bar{x})^2} = \frac{s_{xy}}{s_x^2}, \qquad \hat{\beta}_0 = \bar{y} - \hat{\beta}_1 \bar{x}$$</div>
    </div>
    <div class="section-block">
      <h3>Inferenz auf Koeffizienten</h3>
      <p>Eine geschätzte Steigung ist erst dann statistisch abgesichert, wenn Standardfehler, Konfidenzintervall oder t-Test dazukommen. Die Nullhypothese lautet oft $H_0:\beta_1=0$.</p>
      <div class="math-block">$$t = \frac{\hat{\beta}_1}{SE(\hat{\beta}_1)}$$</div>
    </div>
    <div class="section-block">
      <h3>R², Signifikanz und Relevanz</h3>
      <p>$R^2$ misst den erklärten Varianzanteil in der Stichprobe. Es sagt nichts darüber, ob der Effekt groß, kausal oder ökonomisch bedeutsam ist. Eine winzige Steigung kann bei großem $n$ signifikant werden, aber praktisch irrelevant bleiben.</p>
      <div class="warn-box" data-warning-placement="rail"><strong>Kausalitätsfalle</strong> Weder ein signifikanter Koeffizient noch ein hohes $R^2$ beweisen einen kausalen Effekt. Design, Theorie und mögliche Drittvariablen bleiben entscheidend.</div>
    </div>
    <div class="section-block">
      <h3>Klausurzugriff</h3>
      <p>Die sichere Reihenfolge lautet: Modell benennen, Koeffizient sprachlich deuten, Signifikanz prüfen, Intervall/Unsicherheit ergänzen und erst danach eine inhaltliche Schlussfolgerung ziehen.</p>
    </div>
  `,
  formeln: [
    {
      label: 'Regressionsmodell',
      eq: String.raw`$$Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i$$`,
      desc: 'Einfaches lineares Modell',
      variables: { 'Y_i': 'abhängige Variable', 'X_i': 'Regressor', '\\beta_0': 'Achsenabschnitt', '\\beta_1': 'Steigungsparameter', '\\varepsilon_i': 'Störterm' }
    },
    {
      label: 'OLS-Steigung',
      eq: String.raw`$$\hat{\beta}_1 = \frac{s_{xy}}{s_x^2}$$`,
      desc: 'Schätzer der durchschnittlichen marginalen Änderung',
      variables: { '\\hat{\\beta}_1': 'geschätzte Steigung', 's_{xy}': 'Kovarianz von X und Y', 's_x^2': 'Varianz von X' }
    },
    {
      label: 'Bestimmtheitsmaß',
      eq: String.raw`$$R^2 = 1 - \frac{SSR}{SST}$$`,
      desc: 'Anteil der erklärten Gesamtstreuung',
      variables: { 'R^2': 'Bestimmtheitsmaß', 'SSR': 'Residuenquadratsumme', 'SST': 'totale Quadratsumme' }
    }
  ],
  aufgaben: [
    {
      text: String.raw`Gegeben: $\bar{x}=5$, $\bar{y}=20$, $s_{xy}=15$, $s_x^2=5$. Bestimmen Sie die Regressionsgerade.`,
      steps: [
        { text: `Steigung:`, eq: String.raw`\hat{\beta}_1 = 15/5 = 3` },
        { text: `Achsenabschnitt:`, eq: String.raw`\hat{\beta}_0 = 20 - 3\cdot 5 = 5` },
        { text: `Gerade notieren:`, eq: String.raw`\hat y = 5 + 3x` }
      ],
      result: String.raw`$\hat y = 5 + 3x$. In Worten: Eine zusätzliche Einheit in $x$ erhöht den erwarteten Wert von $y$ um 3 Einheiten.`
    },
    {
      text: String.raw`Datenpunkte: $(1,3)$, $(2,5)$, $(3,7)$, $(4,9)$. Schätzen Sie die Regressionsgerade und berechnen Sie $R^2$.`,
      steps: [
        { text: `Mittelwerte:`, eq: String.raw`\bar{x}=2{,}5,\quad \bar{y}=6` },
        { text: `Steigung:`, eq: String.raw`\hat{\beta}_1 = 2` },
        { text: `Achsenabschnitt:`, eq: String.raw`\hat{\beta}_0 = 1` },
        { text: `Perfekter Fit in dieser Stichprobe:`, eq: String.raw`R^2 = 1` }
      ],
      result: String.raw`$\hat y = 1 + 2x$, $R^2 = 1$. Die Stichprobe ist perfekt linear; inhaltlich ersetzt das aber keine Kausalbegründung.`
    },
    {
      text: String.raw`Ein Koeffizient $\hat{\beta}_1 = 0{,}02$ ist auf dem 1%-Niveau signifikant. Erläutern Sie, warum “signifikant” und “wirtschaftlich relevant” hier sauber getrennt werden müssen.`,
      steps: [
        { text: String.raw`Signifikanz beantwortet die Nullfrage $H_0:\beta_1=0$.`, eq: null },
        { text: `Relevanz fragt nach der Größe des Effekts in Originaleinheiten.`, eq: null },
        { text: String.raw`Bei großem $n$ können sehr kleine Effekte hochsignifikant werden.`, eq: null }
      ],
      result: String.raw`Prüfungssicher ist: “Der Effekt ist statistisch signifikant, aber mit 0,02 pro x-Einheit möglicherweise praktisch klein.”`
    },
    {
      text: String.raw`Ein Regressionsoutput liefert $\hat{\beta}_1 = 1{,}8$, $SE(\hat{\beta}_1)=0{,}6$. Berechnen Sie die t-Statistik und deuten Sie das Ergebnis auf grobem 5%-Niveau.`,
      steps: [
        { text: `Teststatistik:`, eq: String.raw`t = \frac{1{,}8}{0{,}6} = 3` },
        { text: `Faustregel:`, eq: String.raw`|t| \approx 3 \Rightarrow \text{klarer Hinweis gegen } H_0:\beta_1=0` },
        { text: `Deutung:`, eq: null }
      ],
      result: String.raw`Die Steigung ist deutlich von null verschieden. Fachlich bleibt trotzdem zu klären, ob der Effekt groß genug und kausal interpretierbar ist.`
    },
    {
      text: String.raw`Ein Modell hat $R^2 = 0{,}78$. Welche Aussage ist korrekt, und welche zwei Überdehnungen müssen Sie vermeiden?`,
      steps: [
        { text: `Korrekte Aussage:`, eq: String.raw`78\% \text{ der Varianz von } Y \text{ werden in dieser Stichprobe erklärt.}` },
        { text: `Überdehnung 1:`, eq: String.raw`R^2 \neq \text{Kausalitätsbeweis}` },
        { text: `Überdehnung 2: Hohes $R^2$ bedeutet nicht automatisch gutes Prognoseverhalten außerhalb der Stichprobe.`, eq: null }
      ],
      result: String.raw`$R^2$ ist ein Fit-Maß in der Stichprobe. Es muss immer mit Modelllogik, Diagnostik und inhaltlicher Plausibilität zusammengedacht werden.`
    }
  ]
};

CONTENT.regression_diagnostik_prognose = {
  motivation: 'Nach der Schätzung beginnt die Modellkritik: Residuen, Heteroskedastizität, Ausreißer und der Unterschied zwischen Erwartungswert- und Einzelprognose entscheiden, wie belastbar die Regression wirklich ist.',
  theorie: String.raw`
    <div class="section-block">
      <h3>Diagnostik fragt nach Modelltragfähigkeit</h3>
      <p>Eine Regressionsgleichung ist keine Endstation. Residuenplots, QQ-Plot, Ausreißer- und Hebelpunktdiagnostik prüfen, ob die Inferenzbedingungen plausibel bleiben.</p>
    </div>
    <div class="section-block">
      <h3>Residuen und Heteroskedastizität</h3>
      <p>Die Residuen $e_i = y_i - \hat y_i$ sollten kein systematisches Muster zeigen. Ein Trichter im Residuenplot deutet auf <strong>Heteroskedastizität</strong> hin: die Streuung der Fehler hängt dann von $x$ oder $\hat y$ ab.</p>
    </div>
    <div class="section-block">
      <h3>Normalität, Ausreißer und Hebelpunkte</h3>
      <p>Starke Ausreißer oder einflussreiche Beobachtungen können Koeffizienten und Standardfehler verzerren. Der QQ-Plot prüft, ob die Residuen grob normal wirken; Hebelpunkte sind x-seitig auffällige Beobachtungen mit großem Einfluss auf die Gerade.</p>
    </div>
    <div class="section-block">
      <h3>Konfidenz- vs. Prognoseintervall</h3>
      <p>Ein <strong>Konfidenzintervall</strong> beschreibt Unsicherheit um den erwarteten Mittelwert $E[Y|x_0]$. Ein <strong>Prognoseintervall</strong> ist breiter, weil zusätzlich die Reststreuung einer neuen Einzelbeobachtung einfließt.</p>
    </div>
    <div class="section-block">
      <h3>Prüfungsrelevante Konsequenz</h3>
      <div class="warn-box" data-warning-placement="rail"><strong>Diagnostikproblem heißt nicht sofort “alles falsch”</strong> Häufig bleibt die Schätzung nutzbar, aber Standardfehler, Testaussagen oder Prognosen müssen robuster abgesichert oder vorsichtiger interpretiert werden.</div>
      <p>Die sichere Klausurantwort nennt immer: <strong>welches Muster sichtbar ist</strong>, <strong>welche Warnung daraus folgt</strong> und <strong>welche Inferenzgrenze sich daraus ergibt</strong>.</p>
    </div>
  `,
  formeln: [
    {
      label: 'Residuum',
      eq: String.raw`$$e_i = y_i - \hat y_i$$`,
      desc: 'Abweichung zwischen Beobachtung und modelliertem Wert',
      variables: { 'e_i': 'Residuum', 'y_i': 'beobachteter Wert', '\\hat y_i': 'geschätzter Wert' }
    },
    {
      label: 'Konfidenzintervall im Modell',
      eq: String.raw`$$\hat y(x_0) \pm t_{n-k-1,1-\alpha/2}\cdot SE\bigl(\hat y(x_0)\bigr)$$`,
      desc: 'Intervall für den Erwartungswert bei gegebenem x_0',
      variables: { '\\hat y(x_0)': 'geschätzter Mittelwert', 'SE(\\hat y(x_0))': 'Standardfehler des Mittelwerts bei x_0', 'n-k-1': 'Freiheitsgrade' }
    },
    {
      label: 'Prognoseintervall',
      eq: String.raw`$$\hat y(x_0) \pm t_{n-k-1,1-\alpha/2}\cdot \sqrt{SE\bigl(\hat y(x_0)\bigr)^2 + \hat\sigma^2}$$`,
      desc: 'Intervall für eine neue Einzelbeobachtung',
      variables: { '\\hat\sigma^2': 'geschätzte Restvarianz', '\\hat y(x_0)': 'Punktschätzung bei x_0' }
    }
  ],
  aufgaben: [
    {
      text: String.raw`Ein Residuenplot zeigt einen klaren Trichter: Mit wachsendem $x$ steigt die Streuung der Residuen deutlich. Welche Diagnose liegt nahe und welche Konsequenz ist prüfungssicher?`,
      steps: [
        { text: `Muster benennen:`, eq: String.raw`\text{Trichterform} \Rightarrow \text{Heteroskedastizität}` },
        { text: `Konsequenz für Inferenz:`, eq: String.raw`\text{Standardfehler und Tests können verzerrt sein.}` },
        { text: `Prüfungssichere Reaktion:`, eq: String.raw`\text{robuste Standardfehler oder angepasste Spezifikation erwähnen}` }
      ],
      result: String.raw`Nicht die Gerade selbst, sondern die Inferenz ist das erste Problem. Genau diese Trennung ist klausurwichtig.`
    },
    {
      text: String.raw`Konfidenz- vs. Prognoseintervall: Für dasselbe $x_0$ liefert ein Modell ein 95%-Konfidenzintervall für den Erwartungswert und ein 95%-Prognoseintervall für eine Einzelbeobachtung. Welches Intervall ist breiter und warum?`,
      steps: [
        { text: String.raw`CI zielt auf den Mittelwert $E[Y|x_0]$.`, eq: String.raw`CI \to E[Y|x_0]` },
        { text: `PI enthält zusätzlich die zufällige Einzelstreuung neuer Beobachtungen.`, eq: String.raw`PI \to Y_{neu}` },
        { text: `Folgerung:`, eq: String.raw`PI \text{ ist stets breiter als } CI` }
      ],
      result: String.raw`Das Prognoseintervall ist breiter, weil es neben Schätzunsicherheit auch die idiosynkratische Reststreuung neuer Beobachtungen enthält.`
    },
    {
      text: String.raw`Ein QQ-Plot wirkt weitgehend linear, aber zwei extreme Punkte liegen an den Enden deutlich abseits der Linie. Was ist die angemessene Diagnoseaussage?`,
      steps: [
        { text: `Grundmuster: Residuen wirken nicht komplett chaotisch, aber die Ränder sind auffällig.`, eq: null },
        { text: `Randabweichungen sprechen für mögliche Ausreißer- oder Schiefeffekte.`, eq: null },
        { text: `Konsequenz: Inferenz vorsichtig formulieren und ergänzende Diagnostik erwähnen.`, eq: null }
      ],
      result: String.raw`Sauber ist: grobe Normalitätsnähe mit Randwarnung. Weder blind akzeptieren noch blind verwerfen.`
    },
    {
      text: String.raw`Ein Modell prognostiziert für $x_0$ den Wert $\hat y = 120$ mit engem Konfidenzintervall, aber deutlich breiterem Prognoseintervall. Warum ist das kein Widerspruch?`,
      steps: [
        { text: `Konfidenzintervall: Unsicherheit des bedingten Mittelwerts.`, eq: null },
        { text: `Prognoseintervall: Mittelwertunsicherheit plus Reststreuung einer neuen Einzelbeobachtung.`, eq: null },
        { text: `Folgerung:`, eq: String.raw`\text{präziser Mittelwert} \not\Rightarrow \text{präzise Einzelrealisierung}` }
      ],
      result: String.raw`Kein Widerspruch: Das Modell kann den Mittelwert gut kennen, obwohl einzelne neue Beobachtungen stark streuen.`
    },
    {
      text: String.raw`Ein hoher Hebelpunkt liegt weit rechts im x-Bereich und zieht die Regressionsgerade sichtbar. Welche zwei Aussagen gehören in eine sichere Klausurantwort?`,
      steps: [
        { text: `Hebelpunkt definieren: x-seitig extreme Beobachtung mit großem Einfluss.`, eq: null },
        { text: `Ursache prüfen: Datenfehler, seltene aber legitime Beobachtung oder Spezifikationsproblem.`, eq: null },
        { text: `Keine reflexhafte Löschung ohne Begründung.`, eq: null }
      ],
      result: String.raw`Prüfungssicher ist: Einfluss benennen, Ursache prüfen, aber nicht automatisch “Ausreißer raus” schreiben.`
    }
  ]
};

delete CONTENT.schaetzen;
delete CONTENT.regression;
