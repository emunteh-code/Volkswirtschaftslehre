const formula = (label, eq, desc, variables = {}) => ({ label, eq, desc, variables });
const step = (text, eq = null) => ({ text, eq });
const task = (text, steps, result) => ({ text, steps, result });
const intuition = ({ core, analogy, bridge, exam = [], mistakes = [] }) => ({
  core,
  analogy,
  bridge,
  exam,
  mistakes
});
const rBlock = ({ script, purpose, code, output, miniTask, solution, pitfalls = [] }) => ({
  script,
  purpose,
  code,
  output,
  miniTask,
  solution,
  pitfalls
});

export const CURRICULUM = [
  {
    id: 'matrix_notation',
    title: 'Designmatrix & Matrixnotation',
    cat: 'Wiederholung für OLS',
    short: 'X',
    uses: [],
    motivation: 'Der Einstieg in die Ökonometrie ist kein Vorspann, sondern die Sprache des ganzen Moduls: Wer y, X, β und u nicht sicher liest, verliert später bei OLS, Standardfehlern und Diagnostik die Orientierung.',
    cardsTitle: 'Die Grundobjekte',
    cards: [
      { title: 'y', value: 'n × 1', note: 'Vektor der beobachteten Zielwerte' },
      { title: 'X', value: 'n × k', note: 'Designmatrix aus Interzept und Regressoren' },
      { title: 'β', value: 'k × 1', note: 'Unbekannte Parameter des linearen Modells' },
      { title: 'u', value: 'n × 1', note: 'Fehlervektor mit allen nicht modellierten Einflüssen' }
    ],
    sections: [
      {
        title: 'Vom Einzelbeobachtungsmodell zur kompakten Schreibweise',
        body: [
          'Im multiplen linearen Modell werden viele Einzelgleichungen zu einem einzigen Modellobjekt zusammengefasst. Dadurch wird sofort sichtbar, welche Größen Daten sind, welche Größen geschätzt werden und wo die Fehlerstruktur sitzt.',
          'Die Matrixnotation spart nicht nur Platz. Sie macht Rangbedingungen, Projektionen und die Logik der OLS-Lösung überhaupt erst transparent.'
        ],
        math: [String.raw`$$y = X\beta + u$$`]
      },
      {
        title: 'Dimensionskontrolle ist echte Ökonometrie',
        body: [
          'Bevor gerechnet wird, muss geprüft werden, ob Produkte wie X\'X, X\'y und y - Xβ überhaupt definiert sind. Dimensionsfehler zeigen fast immer, dass Rollen von Daten, Parametern und Schätzern durcheinandergeraten sind.',
          'Gerade in Klausuren ist diese Kontrolle ein Zeitsparer: Wer die Formen der Objekte sauber bestimmt, vermeidet lange Ketten falscher Umformungen.'
        ],
        math: [String.raw`$$X:(n \times k),\ \beta:(k \times 1),\ y:(n \times 1)$$`]
      },
      {
        title: 'Vollrang beginnt bereits hier',
        body: [
          'Dass X vollen Spaltenrang haben muss, ist keine Diagnose für später, sondern bereits in der algebraischen Basis angelegt. Nur dann ist X\'X invertierbar und eine eindeutige OLS-Lösung möglich.',
          'Perfekte Multikollinearität ist daher zuerst ein Matrixproblem und erst danach ein ökonometrisches Diagnosewort.'
        ]
      }
    ],
    warnings: [
      {
        title: 'X und X\' verwechseln',
        body: 'X enthält die Beobachtungen zeilenweise; X\' dreht die Datenstruktur. Wer diese Rolle verwechselt, liest Produkte wie X\'X oder X\'y falsch.'
      },
      {
        title: 'Matrixnotation als bloße Abkürzung behandeln',
        body: 'Die kompakte Form ist nicht kosmetisch. Sie bündelt genau die Information, auf der OLS, Standardfehler und Tests aufbauen.'
      }
    ],
    formeln: [
      formula(
        'Lineares Modell in Matrixform',
        String.raw`$$y = X\beta + u$$`,
        'Die gesamte Stichprobe in einer einzigen Modellgleichung.',
        { y: 'Beobachtete Zielvariable', X: 'Designmatrix', '\\beta': 'Parametervektor', u: 'Fehlervektor' }
      ),
      formula(
        'Dimensionsregel für OLS',
        String.raw`$$X'X \in \mathbb{R}^{k \times k}, \qquad X'y \in \mathbb{R}^{k \times 1}$$`,
        'Nur wenn die Dimensionen passen, ist die OLS-Logik konsistent.',
        { k: 'Anzahl der zu schätzenden Parameter', n: 'Anzahl der Beobachtungen' }
      )
    ],
    aufgaben: [
      task(
        'Ein Modell enthält n = 120 Beobachtungen, einen Interzept, Bildung, Erfahrung und eine Dummyvariable für Geschlecht. Bestimme die Dimensionen von X, β, X\'X und erkläre, warum X\'X quadratisch sein muss.',
        [
          step('Zähle zuerst die Parameter: Interzept + drei Regressoren ergeben k = 4.', String.raw`$$k = 4$$`),
          step('Die Designmatrix hat damit 120 Zeilen und 4 Spalten.', String.raw`$$X \in \mathbb{R}^{120 \times 4}$$`),
          step('Durch Transposition entsteht X\' in der Form 4 × 120; daher ist X\'X eine 4 × 4-Matrix.', String.raw`$$X\'X \in \mathbb{R}^{4 \times 4}$$`),
          step('Quadratisch muss X\'X sein, weil genau dieses Objekt invertiert wird, um auf einen k × 1-Schätzer zu kommen.')
        ],
        'Matrixnotation ist dann sicher, wenn Datenobjekte, Parameter und Dimensionen sauber auseinandergehalten werden.'
      )
    ],
    intuition: intuition({
      core: 'Die Designmatrix ist das Ordnungsblatt der Regression: Sie sagt, welche Beobachtungen es gibt und wie jede einzelne Information in die Schätzung eingeht.',
      analogy: 'Wie eine sauber beschriftete Tabelle im Labor: Erst wenn jede Spalte eindeutig ist, lässt sich das Experiment sinnvoll auswerten.',
      bridge: 'In jeder OLS-Aufgabe sollte die erste Kontrolle lauten: Welche Form haben y, X, β und u, und ist X\'X überhaupt invertierbar?',
      exam: [
        { if: 'X\'X auftaucht', then: 'denke sofort an Informationsgehalt, Rang und Invertierbarkeit.' },
        { if: 'eine Matrixformel unklar wirkt', then: 'zerlege sie zurück in Dimensionen und Rollen der Objekte.' }
      ],
      mistakes: [
        'Die Anzahl der Beobachtungen mit der Anzahl der Parameter verwechseln.',
        'X als Parameterobjekt statt als Datensammlung lesen.'
      ]
    }),
    mastery: [
      'Ich kann y, X, β und u in Matrixnotation korrekt zuordnen.',
      'Ich kann Dimensionsregeln für X, X\'X und X\'y sauber anwenden.',
      'Ich kann erklären, warum Vollrang bereits auf der Algebraebene wichtig ist.',
      'Ich kann die Matrixschreibweise wieder in ihre ökonomische Bedeutung zurückübersetzen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: Wiederholung Lineare Algebra + 01_Das_lineare_Modell.R',
      purpose: 'Das Material konstruiert X explizit und zeigt dann, dass dieselbe Logik auch in lm() steckt.',
      code: String.raw`x2 <- c(-3.40, -3.41, -3.42, -3.45, -3.46)
y  <- c(-4.02, -4.03, -4.04, -4.06, -4.08)
X  <- cbind(1, x2)

dim(X)
t(X) %*% X`,
      output: 'Du siehst direkt, dass X zwei Spalten hat: Interzept und x2. Das Kreuzprodukt X\'X ist 2 × 2 und damit genau das Objekt, das später invertiert wird.',
      miniTask: 'Erweitere X um einen dritten Regressor x3 und bestimme erneut die Dimensionen von X und X\'X.',
      solution: 'Mit drei Spalten in X wird X\'X zu einer 3 × 3-Matrix. Die Logik ändert sich nicht: Anzahl der Spalten von X = Anzahl der Parameter = Dimension von X\'X.',
      pitfalls: [
        'dim(X) lesen, ohne die ökonomische Rolle der Spalten zu benennen.',
        'X\'X als Datenmatrix missverstehen, obwohl es bereits ein verdichtetes Informationsobjekt ist.'
      ]
    })
  },
  {
    id: 'sample_moments',
    title: 'Stichprobenmomente & Kreuzprodukte',
    cat: 'Wiederholung für OLS',
    short: 'Momente',
    uses: ['matrix_notation'],
    motivation: 'Mittelwerte, Varianzen, Kovarianzen und Kreuzprodukte sind das Rohmaterial der Regression. Wer ihre ökonomische Lesart beherrscht, versteht später Steigung, Standardfehler und Korrelation schneller.',
    sections: [
      {
        title: 'Mittelwert, Varianz und Kovarianz als empirische Bausteine',
        body: [
          'Die OLS-Formeln bestehen inhaltlich aus nichts anderem als gut organisierten Stichprobenmomenten. Mittelwerte beschreiben Lage, Varianzen die Eigenstreuung einer Variable und Kovarianzen die gemeinsame Bewegung zweier Größen.',
          'Gerade die Steigung im einfachen Regressionsmodell liest sich ökonomisch als Verhältnis von gemeinsamer Bewegung in y und x zur Eigenvariation von x.'
        ],
        math: [String.raw`$$\hat{\beta}_1 = \frac{\operatorname{Cov}(x,y)}{\operatorname{Var}(x)}$$`]
      },
      {
        title: 'Zentrierung macht Regressionslogik sichtbar',
        body: [
          'Durch Mittelwertbereinigung werden Kreuzprodukte leichter lesbar: Abweichungen oberhalb des Mittelwerts, die gemeinsam auftreten, treiben die Steigung nach oben; gegenläufige Abweichungen drücken sie.',
          'Deshalb ist die Zentrierung kein Rechentrick, sondern eine inhaltliche Lesebrille für die OLS-Formel.'
        ]
      },
      {
        title: 'Von Summen zu Matrizen',
        body: [
          'Die Summen in der einfachen Regression werden im multiplen Modell durch X\'X und X\'y ersetzt. Die Matrixwelt ist damit nur die verdichtete Fortsetzung der Stichprobenmoment-Logik.',
          'Wer diesen Übergang versteht, sieht Multikollinearität und Standardfehler später nicht als neue Welt, sondern als Konsequenz derselben Momente.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Kovarianz und Korrelation gleichsetzen',
        body: 'Korrelation normiert die Kovarianz. Für OLS ist zunächst entscheidend, wie gemeinsame Bewegung und Eigenstreuung zusammenwirken.'
      }
    ],
    formeln: [
      formula(
        'Mittelwert und Kovarianz',
        String.raw`$$\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i,\qquad s_{xy} = \frac{1}{n}\sum_{i=1}^n (x_i-\bar{x})(y_i-\bar{y})$$`,
        'Die Standardmomente, aus denen viele Regressionsformeln gebaut werden.',
        { '\\bar{x}': 'Stichprobenmittel von x', 's_{xy}': 'Stichprobenkovarianz von x und y' }
      ),
      formula(
        'Steigung im einfachen Modell',
        String.raw`$$\hat{\beta}_1 = \frac{\sum (x_i-\bar{x})(y_i-\bar{y})}{\sum (x_i-\bar{x})^2}$$`,
        'Die OLS-Steigung als Verhältnis aus gemeinsamer und eigener Variation.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Eine Variable x streut stark, eine zweite Variable z ist fast konstant. Beide korrelieren gleich stark positiv mit y. Bei welcher Variable erwartest du die präzisere Schätzung des Koeffizienten und warum?',
        [
          step('Die gemeinsame Bewegung mit y hilft beiden Variablen ähnlich stark.'),
          step('Entscheidend ist nun die Eigenvariation im Nenner der Steigungsformel.', String.raw`$$\sum (x_i-\bar{x})^2$$`),
          step('Die stärker streuende Variable liefert mehr Information zur Trennung ihres Effekts.'),
          step('Daher ist der Koeffizient der variableren Größe in der Regel präziser schätzbar.')
        ],
        'Mehr Eigenvariation des Regressors stabilisiert die Schätzung seines Effekts.'
      )
    ],
    intuition: intuition({
      core: 'Stichprobenmomente sagen der Regression, was in den Daten gemeinsam läuft und was nur eigenes Rauschen ist.',
      analogy: 'Wie beim Mischen von Farben: Man muss wissen, welche Farbe selbst kräftig ist und welche nur gemeinsam mit einer anderen auftaucht.',
      bridge: 'Sobald in einer Formel Varianz oder Kovarianz auftaucht, solltest du an Informationsgehalt und Trennschärfe der Regressoren denken.',
      exam: [
        { if: 'Cov(x,y) positiv ist', then: 'erwarte im einfachen Modell eine positive OLS-Steigung.' },
        { if: 'Var(x) klein ist', then: 'denke an instabilere Schätzung und größere Standardfehler.' }
      ],
      mistakes: [
        'Die Steigungsformel nur algebraisch, aber nicht als Verhältnis von Signal zu Variation lesen.',
        'Zentrierung als reine Schreibvereinfachung sehen.'
      ]
    }),
    mastery: [
      'Ich kann Mittelwert, Varianz und Kovarianz als Regressionsbausteine erklären.',
      'Ich kann die OLS-Steigung als Verhältnis von gemeinsamer und eigener Variation lesen.',
      'Ich kann den Sinn der Zentrierung in der Regressionsformel begründen.',
      'Ich kann Summenlogik und Matrixlogik fachlich miteinander verbinden.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: Wiederholung Statistik',
      purpose: 'Die Wiederholungsdatei trainiert genau die Momente, die später in OLS, Standardfehlern und Korrelationen wieder auftauchen.',
      code: String.raw`x <- c(2, 3, 5, 7, 11)
y <- c(4, 5, 8, 10, 15)

mean(x)
var(x)
cov(x, y)
cor(x, y)`,
      output: 'mean(), var(), cov() und cor() liefern die Kennzahlen, die du auch in Regressionslogik wiederfindest. Die Korrelation standardisiert nur, was die Kovarianz in Rohgrößen misst.',
      miniTask: 'Berechne cov(x, y) und ändere danach y so, dass die Reihenfolge gleich bleibt, die Streuung aber zunimmt. Beobachte, wie sich cor(x, y) und cov(x, y) unterscheiden.',
      solution: 'Die Kovarianz steigt mit der Skalierung von y, die Korrelation bleibt bei gleicher linearer Struktur deutlich stabiler.',
      pitfalls: ['Korrelation als Ersatz für Varianz lesen.', 'cov() ohne Einheiten oder Vorzeichen zu interpretieren.']
    })
  },
  {
    id: 'distributions_df',
    title: 'Verteilungen, Quantile & Freiheitsgrade',
    cat: 'Wiederholung für OLS',
    short: 't/F',
    uses: ['sample_moments'],
    motivation: 'Sobald Schätzer in Tests und Intervalle überführt werden, braucht Ökonometrie Verteilungstabellen. Normal-, t- und F-Verteilung sind deshalb keine Statistikbeilage, sondern Inferenzwerkzeug.',
    cardsTitle: 'Welche Verteilung wofür?',
    cards: [
      { title: 'Normalverteilung', value: 'Z', note: 'Leitverteilung für Standardisierung und große Stichproben' },
      { title: 't-Verteilung', value: 'df = n-k', note: 'Einzelne Koeffiziententests mit geschätzter Fehlervarianz' },
      { title: 'F-Verteilung', value: 'df1 = J, df2 = n-k', note: 'Gemeinsame Restriktionen und Modellvergleiche' }
    ],
    sections: [
      {
        title: 'Warum Freiheitsgrade in der Ökonometrie auftauchen',
        body: [
          'Sobald Parameter aus Daten geschätzt werden, gehen Freiheitsgrade verloren. Deshalb hängt die passende Referenzverteilung für Tests nicht nur an n, sondern auch an der Zahl der geschätzten Koeffizienten.',
          'Die berühmte Zahl n-k ist also keine Notationslaune, sondern die Korrektur für bereits verbrauchte Information.'
        ]
      },
      {
        title: 't- und F-Logik lesen statt auswendig lernen',
        body: [
          'Der t-Test prüft eine einzelne lineare Restriktion. Der F-Test verallgemeinert dieselbe Idee auf mehrere Restriktionen gleichzeitig.',
          'Je kleiner die Freiheitsgrade, desto schwerer die Verteilungsschwänze. Gerade deshalb unterscheiden sich kleine und große Stichproben in der Inferenzqualität.'
        ]
      },
      {
        title: 'Quantile sind Entscheidungsgrenzen',
        body: [
          'Ein kritischer Wert ist die Grenze, ab der ein beobachteter Testwert unter H0 zu extrem wird. Gute Klausurantworten sagen deshalb nicht nur t = 2,4, sondern verbinden den Wert sofort mit Freiheitsgraden und Entscheidungsregel.',
          'Die Qualität einer Inferenzantwort hängt daran, ob Teststatistik, Quantil und Hypothese als zusammengehöriges System gelesen werden.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Die t-Verteilung als bloß kleine Normalverteilung behandeln',
        body: 'Mit wenigen Freiheitsgraden sind die Schwänze deutlich dicker. Das verändert kritische Werte und damit Testentscheidungen.'
      }
    ],
    formeln: [
      formula(
        'Freiheitsgrade der OLS-Inferenz',
        String.raw`$$df = n-k$$`,
        'Anzahl der Beobachtungen minus Anzahl der geschätzten Parameter.',
        { n: 'Beobachtungen', k: 'Parameter inklusive Interzept' }
      ),
      formula(
        'Kritische Quantile',
        String.raw`$$t_{1-\alpha/2,\, n-k}, \qquad F_{1-\alpha,\, J,\, n-k}$$`,
        'Die Ablehnungsgrenzen für Einzel- und Joint-Tests.',
        { '\\alpha': 'Signifikanzniveau', J: 'Anzahl der Restriktionen' }
      )
    ],
    aufgaben: [
      task(
        'Du testest eine einzelne Nullhypothese über einen Koeffizienten in einem Modell mit n = 80 und k = 5. Welche Referenzverteilung ist passend und wie viele Freiheitsgrade verwendest du?',
        [
          step('Eine einzelne Restriktion führt zum t-Test.'),
          step('Die Freiheitsgrade sind Beobachtungen minus geschätzte Parameter.', String.raw`$$df = 80 - 5 = 75$$`),
          step('Das passende Quantil kommt daher aus der t-Verteilung mit 75 Freiheitsgraden.')
        ],
        'Für einen Einzeltest im linearen Modell wird mit der t-Verteilung und df = n-k gearbeitet.'
      )
    ],
    intuition: intuition({
      core: 'Verteilungen sind die Brücke zwischen geschätzter Zahl und Prüfungsentscheidung.',
      analogy: 'Wie bei einer Notenskala: Erst die Skala sagt dir, ob ein Wert gewöhnlich oder außergewöhnlich ist.',
      bridge: 'Wenn ein Testwert auftaucht, musst du sofort mitlesen: Welche Verteilung, welche Freiheitsgrade, welche Grenze?',
      exam: [
        { if: 'eine Restriktion geprüft wird', then: 'denke an t-Logik und df = n-k.' },
        { if: 'mehrere Koeffizienten gemeinsam geprüft werden', then: 'wechsle in die F-Test-Perspektive.' }
      ],
      mistakes: ['Die Zahl der Regressoren ohne Interzept zählen.', 'Kritische Werte ohne Freiheitsgrade angeben.']
    }),
    mastery: [
      'Ich kann n-k als Freiheitsgradlogik im linearen Modell erklären.',
      'Ich kann t- und F-Verteilung dem passenden Testproblem zuordnen.',
      'Ich kann kritische Quantile als Entscheidungsgrenzen interpretieren.',
      'Ich kann kleine und große Stichproben in der Inferenz sprachlich unterscheiden.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 09_Intervallschätzung_Hypothesentests.R',
      purpose: 'Das Kursmaterial liest kritische Werte explizit aus qt() und qf() aus und macht damit die Entscheidungsgrenze sichtbar.',
      code: String.raw`qt(0.975, df = 75)
qf(0.95, df1 = 2, df2 = 75)`,
      output: 'qt() liefert das zweiseitige t-Quantil, qf() die Grenze für Joint-Tests. Genau diese Werte werden mit der beobachteten Teststatistik verglichen.',
      miniTask: 'Bestimme das 5%-kritische Quantil für einen t-Test mit df = 12 und vergleiche es mit dem Normalquantil 1.96.',
      solution: 'Das t-Quantil mit df = 12 liegt über 1.96. In kleinen Stichproben braucht man also stärkere Evidenz für dieselbe Signifikanzstufe.',
      pitfalls: ['Normalquantile reflexhaft statt t-Quantile verwenden.', 'df1 und df2 im F-Test vertauschen.']
    })
  },
  {
    id: 'model_objects',
    title: 'Populationsmodell, Stichprobenmodell & Fehlerterm',
    cat: 'Das lineare Regressionsmodell',
    short: 'Modell',
    uses: ['distributions_df'],
    motivation: 'Viele spätere Interpretationsfehler entstehen, weil Population, Stichprobe, Fehlerterm, Residuum und Schätzer nicht sauber getrennt werden. Dieses Kapitel setzt genau diese Rollen klar.',
    cardsTitle: 'Was ist was?',
    cards: [
      { title: 'β', value: 'Parameter', note: 'Unbekannter Populationswert im wahren Modell' },
      { title: 'β̂', value: 'Schätzer / Schätzung', note: 'Aus der Stichprobe berechnetes Objekt bzw. dessen Realisierung' },
      { title: 'u_i', value: 'Fehlerterm', note: 'Unbeobachtete Populationsgröße' },
      { title: 'û_i', value: 'Residuum', note: 'Beobachtbare Abweichung nach der Schätzung' }
    ],
    sections: [
      {
        title: 'Das Populationsmodell',
        body: [
          'Das theoretische Modell beschreibt den Erwartungszusammenhang in der Grundgesamtheit. Der Fehlerterm sammelt alle Einflüsse, die nicht explizit in X stehen, aber auf y wirken.',
          'Ökonometrie beginnt damit, diese unbeobachtete Restgröße nicht zu ignorieren, sondern methodisch mitzudenken.'
        ],
        math: [String.raw`$$y_i = \beta_0 + \beta_1 x_{i1} + \dots + \beta_k x_{ik} + u_i$$`]
      },
      {
        title: 'Von der Population zur Stichprobe',
        body: [
          'In der Stichprobe kennen wir die wahren β nicht. Wir ersetzen sie durch Schätzer und erzeugen daraus vorhergesagte Werte sowie Residuen.',
          'Gerade in Klausuren ist die Trennung zentral: Residuen sind beobachtbar und datenabhängig, Fehlerterme nicht.'
        ],
        math: [String.raw`$$\hat{y}_i = x_i'\hat{\beta}, \qquad \hat{u}_i = y_i - \hat{y}_i$$`]
      },
      {
        title: 'Warum diese Rollentrennung so wichtig ist',
        body: [
          'Exogenität, Unverzerrtheit und Diagnostik beziehen sich auf unterschiedliche Ebenen. Wer u_i und û_i verwechselt, zieht schnell falsche Schlüsse über Bias, Heteroskedastizität oder Modellgüte.',
          'Eine saubere ökonometrische Antwort benennt deshalb immer, auf welcher Ebene sie spricht: Population, Stichprobe, Schätzer oder Realisierung.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Residuum = Fehlerterm',
        body: 'Das Residuum ist die beobachtbare Restgröße nach der Schätzung. Der Fehlerterm ist das unbeobachtete Populationsobjekt hinter dem Modell.'
      }
    ],
    formeln: [
      formula(
        'Populationsmodell',
        String.raw`$$y_i = x_i'\beta + u_i$$`,
        'Theoretische Beziehung in der Grundgesamtheit.',
        { y_i: 'Beobachtete Zielgröße', x_i: 'Regressorvektor', u_i: 'Fehlerterm' }
      ),
      formula(
        'Vorhersage und Residuum',
        String.raw`$$\hat{y}_i = x_i'\hat{\beta}, \qquad \hat{u}_i = y_i - \hat{y}_i$$`,
        'Beobachtbare Größen nach der Schätzung.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Eine Regression liefert β̂_1 = 0.6, ŷ_i und û_i. Welche Größen sind Populationsobjekte, welche stammen aus der Stichprobe, und welche Größe bleibt unbeobachtet?',
        [
          step('β ist der wahre Populationsparameter; β̂_1 ist die stichprobenbasierte Schätzung.'),
          step('ŷ_i und û_i entstehen erst nach der Schätzung und sind daher beobachtbare Stichprobengrößen.'),
          step('Der Fehlerterm u_i bleibt unbeobachtet; genau deshalb braucht das Modell Annahmen über seine Beziehung zu X.')
        ],
        'Schätzer, Schätzung, Fehlerterm und Residuum müssen strikt getrennt werden, damit spätere Aussagen zu Bias und Inferenz korrekt bleiben.'
      )
    ],
    intuition: intuition({
      core: 'Das Populationsmodell ist die unsichtbare ökonomische Struktur; die Stichprobe ist nur der Ausschnitt, aus dem wir sie rekonstruieren.',
      analogy: 'Wie ein Bauplan und sein Foto: Das Foto zeigt die Realisierung, der Bauplan die zugrunde liegende Struktur.',
      bridge: 'Bei jeder Regressionsfrage hilft die Rückfrage: Spreche ich gerade über einen wahren Parameter, einen Schätzer, eine beobachtete Residuenfolge oder einen unbeobachteten Fehlerterm?',
      exam: [
        { if: 'u_i erwähnt wird', then: 'denke an unbeobachtete Populationseinflüsse.' },
        { if: 'û_i oder ŷ_i auftaucht', then: 'du bist bereits auf der Stichproben- und Diagnoseebene.' }
      ],
      mistakes: [
        'Ein Residuenplot als direkten Plot der echten Fehler interpretieren.',
        'β̂ mit β verwechseln und daraus zu starke Kausalbehauptungen ableiten.'
      ]
    }),
    mastery: [
      'Ich kann Populationsmodell und Stichprobenmodell sauber unterscheiden.',
      'Ich kann Fehlerterm und Residuum begrifflich trennen.',
      'Ich kann erklären, warum β und β̂ unterschiedliche Objekte sind.',
      'Ich kann Schätz- und Diagnosegrößen korrekt im Modell einordnen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 01_Das_lineare_Modell.R',
      purpose: 'Die Kursdatei setzt die Matrixlösung direkt neben lm() und macht sichtbar, dass beide Wege dasselbe Modellobjekt schätzen.',
      code: String.raw`reg1 <- lm(y ~ x2)
coef(reg1)
fitted(reg1)
resid(reg1)`,
      output: 'coef(reg1) liefert die Schätzung von β̂. fitted() liefert ŷ_i, resid() liefert û_i. Der Fehlerterm u_i bleibt dagegen unbeobachtet.',
      miniTask: 'Erkläre in einem Satz, warum resid(reg1) nicht dasselbe ist wie der wahre Fehlerterm u_i.',
      solution: 'Residuen sind daten- und modellspezifische Schätzreste; der wahre Fehlerterm ist das unbeobachtete Populationsobjekt, das wir nie direkt sehen.',
      pitfalls: ['fitted() mit beobachteten y-Werten verwechseln.', 'Residuen als Beweis für Kausalität lesen.']
    })
  },
  {
    id: 'ols_objective',
    title: 'OLS als Minimierung der Residuenquadrate',
    cat: 'Das lineare Regressionsmodell',
    short: 'SSR',
    uses: ['model_objects'],
    graph: true,
    motivation: 'Ordinary Least Squares ist kein Befehl, sondern ein Optimierungsprinzip: Die Schätzer werden so gewählt, dass die quadrierten Abweichungen zwischen Daten und Modell möglichst klein sind.',
    sections: [
      {
        title: 'Warum quadrierte Residuen?',
        body: [
          'Die OLS-Zielfunktion gewichtet große Abweichungen stärker als kleine und verhindert, dass positive und negative Fehler sich einfach wegheben.',
          'Gerade dadurch entsteht eine glatte Zielfunktion mit eindeutigen Bedingungen erster Ordnung.'
        ],
        math: [String.raw`$$\min_{\beta}\sum_{i=1}^n (y_i - x_i'\beta)^2$$`]
      },
      {
        title: 'Residuenlogik statt Formelsammlung',
        body: [
          'OLS sucht nicht die perfekte Anpassung jedes einzelnen Punkts, sondern die insgesamt beste lineare Approximation. Das Modell darf danebenliegen; entscheidend ist, wie groß die Gesamtabweichung wird.',
          'Diese Sicht ist wichtig für alle späteren Diagnosefragen: Residuen sind kein Misserfolg, sondern der unvermeidliche Rest zwischen Daten und Modell.'
        ]
      },
      {
        title: 'Die geometrische Idee',
        body: [
          'Im Vektorraum wird y auf den Spaltenraum von X projiziert. Der vorhergesagte Anteil liegt im durch X erzeugten Raum, die Residuen stehen orthogonal dazu.',
          'Diese Geometrie erklärt, warum OLS, Normalgleichungen und Variationzerlegung so eng zusammenhängen.'
        ]
      }
    ],
    warnings: [
      {
        title: 'OLS will jeden Punkt exakt treffen',
        body: 'Das Ziel ist die Minimierung der quadrierten Gesamtabweichung, nicht die punktgenaue Anpassung jeder einzelnen Beobachtung.'
      }
    ],
    formeln: [
      formula(
        'OLS-Zielfunktion',
        String.raw`$$SSR(\beta) = \sum_{i=1}^n (y_i - x_i'\beta)^2$$`,
        'Die zu minimierende Summe der quadrierten Residuen.',
        { SSR: 'Sum of Squared Residuals' }
      )
    ],
    aufgaben: [
      task(
        'Warum bestraft OLS einen Ausreißer besonders stark und was bedeutet das für die Schätzung?',
        [
          step('Weil Residuen quadriert werden und damit große Fehler überproportional in die Zielfunktion eingehen.'),
          step('Ein Ausreißer kann die Lage der Regressionsgeraden deshalb sichtbar beeinflussen.'),
          step('Genau darum gehören Einflussdiagnostik und Plausibilitätskontrolle später zu einer vollständigen Regressionsanalyse.')
        ],
        'OLS ist ein quadratisches Minimierungsverfahren und reagiert deshalb empfindlicher auf große Abweichungen als auf kleine.'
      )
    ],
    intuition: intuition({
      core: 'OLS legt die Gerade oder Hyperebene so, dass die Summe aller quadrierten vertikalen Abstände minimal wird.',
      analogy: 'Wie ein gespanntes Tuch über einer Punktwolke: Nicht jeder Punkt berührt das Tuch, aber die gesamte Spannung wird minimiert.',
      bridge: 'Wenn OLS auftaucht, denke nicht zuerst an eine fertige Formel, sondern an ein Optimierungsproblem über Residuen.',
      exam: [
        { if: 'die Zielfunktion gefragt wird', then: 'schreibe zuerst die Summe der quadrierten Residuen hin.' },
        { if: 'ein Ausreißer thematisiert wird', then: 'verbinde das sofort mit der Quadratisierung der Fehler.' }
      ],
      mistakes: [
        'Quadratisierung nur technisch, aber nicht als Gewichtung großer Fehler zu verstehen.',
        'Residuen als bloße Reste statt als Optimierungsgegenstand zu lesen.'
      ]
    }),
    mastery: [
      'Ich kann die OLS-Schätzung als Minimierungsproblem formulieren.',
      'Ich kann erklären, warum quadrierte Residuen verwendet werden.',
      'Ich kann die geometrische Idee hinter OLS in Worten beschreiben.',
      'Ich kann die Rolle von Ausreißern in der OLS-Zielfunktion einordnen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 01_Das_lineare_Modell.R',
      purpose: 'Die Datei zeigt den Weg von Handrechnung zu lm() und macht klar, dass OLS zuerst ein Rechenproblem über Residuen ist.',
      code: String.raw`reg1 <- lm(y ~ x2)
sum(resid(reg1)^2)
plot(x2, y)
abline(reg1, col = "blue", lwd = 2)`,
      output: 'Die Ausgabe von sum(resid(reg1)^2) ist die empirische Zielfunktion am geschätzten Optimum. Der Plot macht die vertikalen Anpassungsfehler sichtbar.',
      miniTask: 'Erkläre, warum dieselbe Gerade nicht jeden Punkt exakt treffen muss, obwohl OLS optimal ist.',
      solution: 'Optimalität bezieht sich auf die gesamte quadrierte Residuenlast, nicht auf punktweise Nullfehler. Residuen bleiben deshalb auch im Optimum bestehen.',
      pitfalls: ['Die visuelle Anpassung mit perfekter Passung verwechseln.', 'sum(resid(reg1)^2) ohne Bezug zur Zielfunktion lesen.']
    })
  },
  {
    id: 'normal_equations',
    title: 'Matrixlösung & Normalgleichungen',
    cat: 'Das lineare Regressionsmodell',
    short: 'X\'X',
    uses: ['ols_objective'],
    motivation: 'Aus der OLS-Zielfunktion folgt nicht nur ein Rechenrezept, sondern eine zentrale Einsicht: Im Optimum sind Residuen orthogonal zu allen Regressoren.',
    sections: [
      {
        title: 'Bedingungen erster Ordnung',
        body: [
          'Leitet man die Zielfunktion nach β ab, entsteht die Bedingung X\'(y - Xβ̂) = 0. Genau diese Gleichung verbindet das Optimierungsproblem mit der linearen Algebra.',
          'Sie sagt: Nach der Schätzung darf in den Residuen keine lineare Information mehr stecken, die systematisch mit den Regressoren zusammenhängt.'
        ],
        math: [String.raw`$$X'(y - X\hat{\beta}) = 0$$`]
      },
      {
        title: 'Die geschlossene OLS-Lösung',
        body: [
          'Wenn X\'X invertierbar ist, kann die Normalgleichung nach β̂ aufgelöst werden. Damit wird sichtbar, wie Datenmatrix und Zielvariable gemeinsam den Schätzer bestimmen.',
          'Die Lösung ist kompakt, aber inhaltlich reich: Viel Variation in X stabilisiert die Inversion und verbessert die Präzision der Schätzung.'
        ],
        math: [String.raw`$$\hat{\beta} = (X'X)^{-1}X'y$$`]
      },
      {
        title: 'Orthogonalität ist mehr als Geometrie',
        body: [
          'Aus X\'û = 0 folgen viele spätere Resultate: Die Residuen summieren sich bei vorhandenem Interzept zu null, die vorhergesagten Werte stehen in einer klaren Beziehung zur Variation von y, und OLS lässt sich als Projektion lesen.',
          'Wer die Normalgleichungen versteht, versteht deshalb auch einen großen Teil der restlichen Vorlesung.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Die OLS-Formel auswendig, aber nicht lesbar',
        body: 'β̂ = (X\'X)^(-1)X\'y ist kein magisches Rezept. Jeder Faktor sagt etwas über Information, Kreuzprodukte und Zielvariable.'
      }
    ],
    formeln: [
      formula(
        'Normalgleichung',
        String.raw`$$X'\hat{u} = X'(y - X\hat{\beta}) = 0$$`,
        'Die Residuen stehen orthogonal zu allen Spalten von X.',
        { '\\hat{u}': 'Residuenvektor' }
      ),
      formula(
        'OLS-Lösung in Matrixform',
        String.raw`$$\hat{\beta} = (X'X)^{-1}X'y$$`,
        'Die geschlossene Lösung bei vollem Spaltenrang von X.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Erkläre in Worten, was die Gleichung X\'û = 0 über die Residuen des OLS-Modells aussagt.',
        [
          step('Jede Spalte von X ist zu den Residuen orthogonal.'),
          step('Damit bleibt in den Residuen keine lineare Information übrig, die mit einem Regressor systematisch zusammenläuft.'),
          step('Genau deshalb ist OLS die beste lineare Projektion von y auf den von X aufgespannten Raum.')
        ],
        'Die Normalgleichung ist die inhaltliche Aussage, dass OLS alle lineare Information in X bereits ausgeschöpft hat.'
      )
    ],
    intuition: intuition({
      core: 'Die Normalgleichungen sind die Übersetzung des Minimierungsproblems in lineare Algebra.',
      analogy: 'Wie ein Lotrecht-Test beim Bauen: Im Optimum steht der Rest senkrecht auf der tragenden Struktur.',
      bridge: 'Wenn X\'û = 0 auftaucht, lies es als Aussage über ausgeschöpfte Information und nicht nur als Zwischenschritt der Herleitung.',
      exam: [
        { if: 'X\'(y - Xβ̂) = 0 gefragt wird', then: 'erkläre Orthogonalität zwischen Residuen und Regressoren.' },
        { if: 'β̂ = (X\'X)^(-1)X\'y auftaucht', then: 'verbinde X\'X mit Information und X\'y mit dem Signal aus y.' }
      ],
      mistakes: ['Die Invertierbarkeit von X\'X stillschweigend voraussetzen.', 'Orthogonalität mit Unabhängigkeit verwechseln.']
    }),
    mastery: [
      'Ich kann die Normalgleichung inhaltlich und formal erklären.',
      'Ich kann die OLS-Lösung in Matrixform herleiten oder lesen.',
      'Ich kann Orthogonalität von Residuen und Regressoren erklären.',
      'Ich kann die Bedeutung von X\'X und X\'y im Schätzer unterscheiden.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 01_Das_lineare_Modell.R',
      purpose: 'Das Material legt die Handlösung solve(t(X)%*%X)%*%t(X)%*%y direkt neben lm().',
      code: String.raw`X <- cbind(1, x2)
b_hand <- solve(t(X) %*% X) %*% t(X) %*% y
b_lm   <- coef(lm(y ~ x2))`,
      output: 'Beide Wege liefern dieselbe OLS-Lösung. Gerade das zeigt, dass lm() nur die lineare Algebra des Schätzers automatisiert.',
      miniTask: 'Beschreibe, warum solve(t(X) %*% X) im Fall perfekter Multikollinearität scheitert.',
      solution: 'Bei perfekter Multikollinearität ist X\'X singulär und nicht invertierbar. Die OLS-Lösung ist dann nicht eindeutig bestimmt.',
      pitfalls: ['Den Vergleich zwischen Handformel und lm() als zwei unterschiedliche Modelle lesen.', 'Singularität erst als Statistikproblem und nicht schon als Algebrafehler erkennen.']
    })
  },
  {
    id: 'partial_effects',
    title: 'Partielle Effekte & ceteris paribus',
    cat: 'Koeffizienten lesen',
    short: 'β_j',
    uses: ['normal_equations'],
    motivation: 'Regressionskoeffizienten sind nur dann ökonomisch wertvoll, wenn klar ist, was sie bei konstant gehaltenen übrigen Einflussgrößen tatsächlich messen.',
    sections: [
      {
        title: 'Koeffizienten sind partielle Steigungen',
        body: [
          'Im multiplen linearen Modell misst β_j die Änderung des bedingten Erwartungswerts von y, wenn x_j um eine Einheit steigt und alle anderen Regressoren konstant bleiben.',
          'Gerade dieses ceteris-paribus-Element unterscheidet Regressionsinterpretation von reiner Korrelation.'
        ],
        math: [String.raw`$$\frac{\partial E(y\mid X)}{\partial x_j} = \beta_j$$`]
      },
      {
        title: 'Einheiten, Vorzeichen und Größenordnung',
        body: [
          'Eine vollständige Interpretation nennt immer Richtung, Maßeinheit und Bezugsgröße. Ein positiver Koeffizient ist ohne Einheit oft wertlos; ein großer Koeffizient kann ökonomisch klein sein, wenn die Einheit sehr grob ist.',
          'Deshalb ist Koeffizientenlesen nie nur Vorzeichenlesen.'
        ]
      },
      {
        title: 'Was der Interzept leistet',
        body: [
          'Der Interzept ist der erwartete y-Wert bei Regressoren gleich null. Ökonomisch ist er nur dann stark interpretierbar, wenn dieser Nullpunkt inhaltlich Sinn ergibt.',
          'Trotzdem ist der Interzept modelltechnisch zentral, weil viele Zerlegungen und OLS-Eigenschaften ihn voraussetzen.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Koeffizient = Kausalität',
        body: 'Auch ein sauber interpretierter OLS-Koeffizient ist noch kein Kausalbeweis. Dafür braucht es zusätzlich glaubwürdige Exogenität.'
      }
    ],
    formeln: [
      formula(
        'Partieller Effekt im linearen Modell',
        String.raw`$$\Delta E(y \mid X) = \beta_j \cdot \Delta x_j$$`,
        'Ein linearer Koeffizient skaliert die erwartete Änderung in y.',
        { '\\beta_j': 'Partielle Steigung des Regressors x_j' }
      )
    ],
    aufgaben: [
      task(
        'In einem Lohnmodell ergibt sich β̂_educ = 0.9. Formuliere eine vollständige Interpretation des Koeffizienten.',
        [
          step('Ein zusätzliches Jahr Bildung erhöht den erwarteten Lohn um 0.9 Einheiten.'),
          step('Diese Aussage gilt ceteris paribus, also bei konstant gehaltener Erfahrung, Branche und allen weiteren Regressoren im Modell.'),
          step('Für eine gute Klausurantwort müssen Einheit, Richtung und Kontrollbedingung explizit genannt werden.')
        ],
        'Ein OLS-Koeffizient ist immer als partieller Effekt unter Kontrolle der übrigen Regressoren zu lesen.'
      )
    ],
    intuition: intuition({
      core: 'Der Regressionskoeffizient misst nicht rohe gemeinsame Bewegung, sondern den isolierten Effekt nach Herausrechnung der übrigen Variablen.',
      analogy: 'Wie beim Mischpult: Ein Regler wird beurteilt, während die anderen Regler festgehalten werden.',
      bridge: 'Bei jeder Koeffizientenfrage sollte automatisch die Formulierung “bei konstanten übrigen Regressoren” mitlaufen.',
      exam: [
        { if: 'ein β_j interpretiert werden soll', then: 'nenne Richtung, Einheit und ceteris-paribus-Bedingung.' },
        { if: 'nur Korrelation beschrieben wird', then: 'mache den Unterschied zur partiellen Regressionslogik explizit.' }
      ],
      mistakes: ['Vorzeichen nennen, aber keine Maßeinheit.', 'Das ceteris-paribus-Element weglassen.']
    }),
    mastery: [
      'Ich kann einen linearen Koeffizienten als partiellen Effekt interpretieren.',
      'Ich kann Richtung, Einheit und Kontrollbedingung explizit nennen.',
      'Ich kann erklären, warum ceteris paribus der Kern der Regressionsinterpretation ist.',
      'Ich kann die ökonomische Rolle des Interzepts einordnen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 01_Das_lineare_Modell.R',
      purpose: 'Auch bei lm() muss jede Zahl inhaltlich gelesen werden; das Kommando liefert nur die Schätzung, nicht die Interpretation.',
      code: String.raw`model <- lm(wage ~ educ + exper, data = df)
coef(model)["educ"]`,
      output: 'Der Koeffizient zur Bildung ist erst dann ökonometrisch sinnvoll gelesen, wenn er als Änderung des erwarteten Lohns bei konstant gehaltener Erfahrung beschrieben wird.',
      miniTask: 'Formuliere die Koeffizienteninterpretation für exper so, dass klar wird, welche anderen Regressoren im Modell konstant bleiben.',
      solution: 'Ein zusätzliches Jahr Erfahrung verändert den erwarteten Lohn um β̂_exper Einheiten, ceteris paribus zu Bildung und den restlichen Kontrollen.',
      pitfalls: ['coef(model) zitieren, ohne den Regressornamen mitzulesen.', 'Die Wirkung als reine Korrelation statt als partiellen Effekt formulieren.']
    })
  },
  {
    id: 'functional_forms',
    title: 'Dummies, Logs & Interaktionen',
    cat: 'Koeffizienten lesen',
    short: 'Formen',
    uses: ['partial_effects'],
    motivation: 'Ökonometrische Interpretation ändert sich mit der funktionalen Form. Wer Dummy-, Log- und Interaktionsmodelle mechanisch wie lineare Level-Level-Modelle liest, produziert sichere Klausurfehler.',
    cardsTitle: 'Interpretationsmuster',
    cards: [
      { title: 'Level-Level', value: 'β_j', note: 'absolute Änderung in y pro Einheit x_j' },
      { title: 'Log-Level', value: '100·β_j %', note: 'ungefähre Prozentänderung in y pro Einheit x_j' },
      { title: 'Level-Log', value: 'β_j/100', note: 'absolute Änderung in y bei 1% mehr x_j' },
      { title: 'Log-Log', value: 'β_j', note: 'Elastizität: Prozent in y pro Prozent in x_j' }
    ],
    sections: [
      {
        title: 'Warum funktionale Form die Sprache ändert',
        body: [
          'Ein Koeffizient in einem Log-Modell hat eine andere ökonomische Bedeutung als im Level-Modell. Die Schätzung mag technisch gleich aussehen, die Interpretation ist es nicht.',
          'Gerade hier zeigt sich, dass Ökonometrie nicht nur Rechnen, sondern Übersetzen von Modellsprache in ökonomische Sprache ist.'
        ]
      },
      {
        title: 'Dummyvariablen und Referenzgruppen',
        body: [
          'Eine Dummyvariable verschiebt den Interzept relativ zu einer Basisgruppe. Gute Antworten nennen deshalb immer, gegen welche Referenz gelesen wird.',
          'Wer alle Gruppen gleichzeitig als Dummies inklusive Interzept aufnimmt, landet in der Dummyfalle und damit in perfekter Multikollinearität.'
        ]
      },
      {
        title: 'Interaktionen erzwingen bedingte Interpretation',
        body: [
          'In einem Interaktionsmodell hängt die Wirkung eines Regressors vom Niveau eines anderen Regressors ab. Der Koeffizient der Interaktion ist damit keine Nebenbemerkung, sondern verändert die Lesart der Haupteffekte.',
          'Gerade deshalb sind Interaktionen in Klausuren beliebt: Sie prüfen, ob Koeffizienten wirklich als bedingte Aussagen gelesen werden.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Log-Koeffizienten wie Level-Koeffizienten lesen',
        body: 'Sobald ein Log im Modell steht, ändert sich die Einheit der Interpretation. Das muss aktiv mitgesprochen werden.'
      }
    ],
    formeln: [
      formula(
        'Log-Log-Modell',
        String.raw`$$\log(y_i) = \beta_0 + \beta_1 \log(x_i) + u_i$$`,
        'β_1 ist hier direkt eine Elastizität.',
        { '\\beta_1': 'Prozentänderung in y bei 1% mehr x' }
      ),
      formula(
        'Interaktionsmodell',
        String.raw`$$y_i = \beta_0 + \beta_1 x_i + \beta_2 d_i + \beta_3 (x_i d_i) + u_i$$`,
        'Die Steigung von x hängt hier davon ab, ob d_i = 0 oder 1 ist.',
        {}
      )
    ],
    aufgaben: [
      task(
        'In einem Log-Log-Modell ergibt sich β̂_1 = 0.08. Interpretiere den Koeffizienten korrekt.',
        [
          step('Im Log-Log-Modell ist β̂_1 eine Elastizität.'),
          step('Steigt x um 1%, steigt y im Mittel um etwa 0.08%.'),
          step('Die Aussage gilt ceteris paribus und nicht als absolute Änderung.')
        ],
        'Log-Log-Koeffizienten lesen sich als Elastizitäten, nicht als Niveauänderungen.'
      )
    ],
    intuition: intuition({
      core: 'Die Form des Modells entscheidet darüber, in welcher Sprache der Koeffizient spricht: Einheiten, Prozente oder Gruppenunterschiede.',
      analogy: 'Wie beim Wechsel der Währung: Dieselbe Zahl hat je nach Einheit eine andere Bedeutung.',
      bridge: 'Vor jeder Interpretation muss klar sein, ob du in Levels, Prozenten, Referenzgruppen oder bedingten Effekten sprichst.',
      exam: [
        { if: 'log(y) oder log(x) auftaucht', then: 'prüfe sofort, ob Elastizität oder Semi-Elastizität gemeint ist.' },
        { if: 'eine Dummyvariable im Modell steht', then: 'nenne die Basisgruppe explizit.' }
      ],
      mistakes: ['Eine Interaktion interpretieren, ohne den Haupteffekt mitzudenken.', 'Die Basisgruppe einer Dummyvariable nicht angeben.']
    }),
    mastery: [
      'Ich kann Level-, Log- und Log-Log-Koeffizienten korrekt unterscheiden.',
      'Ich kann Dummyvariablen über Referenzgruppen interpretieren.',
      'Ich kann erklären, wie Interaktionen die Lesart der Haupteffekte verändern.',
      'Ich kann funktionale Form und ökonomische Sprache sauber verbinden.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 01_Das_lineare_Modell.R + Tutoriumspraxis',
      purpose: 'R zeigt hier besonders gut, wie Modellsyntax und Interpretation zusammenhängen.',
      code: String.raw`model <- lm(log(wage) ~ educ + female + educ:female, data = df)
summary(model)`,
      output: 'Der Koeffizient zu educ ist nun eine Semi-Elastizität des Lohns; die Interaktion educ:female verändert die Steigung für die Dummygruppe female = 1.',
      miniTask: 'Beschreibe in einem Satz, wie sich die Bildungsrendite für die Dummygruppe female = 1 aus dem Output ergibt.',
      solution: 'Für female = 1 ist die Bildungswirkung gleich β̂_educ + β̂_educ:female. Interaktionskoeffizient und Haupteffekt müssen also addiert gelesen werden.',
      pitfalls: ['Nur den Interaktionskoeffizienten interpretieren und den Haupteffekt vergessen.', 'Die Referenzgruppe der Dummyvariable nicht benennen.']
    })
  },
  {
    id: 'no_perfect_multicollinearity',
    title: 'Vollrang & keine perfekte Multikollinearität',
    cat: 'Klassische Annahmen',
    short: 'Rang',
    uses: ['normal_equations'],
    motivation: 'Bevor Ökonometrie über Bias oder Signifikanz spricht, muss die Schätzung überhaupt definiert sein. Genau das sichert der Vollrang der Designmatrix.',
    sections: [
      {
        title: 'Warum OLS vollen Spaltenrang braucht',
        body: [
          'Ist ein Regressor exakt aus anderen Regressoren konstruierbar, bringt er keine eigene Information. Dann wird X\'X singulär und die OLS-Lösung ist nicht eindeutig.',
          'Perfekte Multikollinearität ist daher keine kleine Störung, sondern ein Identifikationsbruch.'
        ],
        math: [String.raw`$$\operatorname{rank}(X) = k \qquad \Longleftrightarrow \qquad (X'X)^{-1}\ \text{existiert}$$`]
      },
      {
        title: 'Typische Ursachen',
        body: [
          'Klassische Fälle sind die Dummyfalle, versehentlich doppelt codierte Variablen oder exakte lineare Beziehungen wie x_3 = 2x_2.',
          'In der Praxis steckt dahinter fast immer eine Daten- oder Modellierungsentscheidung, nicht ein statistischer Zufall.'
        ]
      },
      {
        title: 'Perfekt versus hochgradig',
        body: [
          'Perfekte Multikollinearität macht OLS unmöglich. Starke, aber nicht perfekte Multikollinearität lässt die Schätzung zu, verschlechtert aber später ihre Präzision.',
          'Diese Trennung ist klausurrelevant, weil sie Identifikation und Standardfehler sauber auseinanderhält.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Perfekte und starke Multikollinearität gleichsetzen',
        body: 'Perfekte Multikollinearität zerstört die Identifikation. Hohe, aber unvollständige Multikollinearität verschlechtert vor allem die Präzision.'
      }
    ],
    formeln: [
      formula(
        'Vollrangbedingung',
        String.raw`$$\operatorname{rank}(X) = k$$`,
        'Nur bei vollem Spaltenrang ist das OLS-Problem eindeutig lösbar.',
        { k: 'Anzahl der Spalten von X' }
      )
    ],
    aufgaben: [
      task(
        'In einem Modell gilt x_3 = 2x_2 für alle Beobachtungen. Was ist die Folge für die OLS-Schätzung?',
        [
          step('x_3 bringt keine eigenständige Information über x_2 hinaus.'),
          step('Die Spalten von X sind damit linear abhängig; der Rang ist kleiner als k.'),
          step('X\'X ist nicht invertierbar und die OLS-Lösung nicht eindeutig bestimmbar.')
        ],
        'Perfekte lineare Abhängigkeit zerstört die Identifikation des linearen Modells.'
      )
    ],
    intuition: intuition({
      core: 'Ein Regressor ohne eigene Variation ist für OLS wie ein zweites Etikett für dieselbe Information.',
      analogy: 'Wie zwei identische Schlüssel am Schlüsselbund: Mehr Metall, aber kein neuer Zugang.',
      bridge: 'Frage bei jeder Modellmatrix zuerst, ob jede Spalte wirklich neue Information trägt.',
      exam: [
        { if: 'x_3 = a + bx_2 beschrieben wird', then: 'denke an lineare Abhängigkeit und Rangverlust.' },
        { if: 'alle Gruppen-Dummies plus Interzept im Modell stehen', then: 'erkenne die Dummyfalle.' }
      ],
      mistakes: ['Rangprobleme erst als Testproblem statt als Existenzproblem der OLS-Lösung sehen.']
    }),
    mastery: [
      'Ich kann erklären, warum OLS Vollrang der Designmatrix benötigt.',
      'Ich kann perfekte lineare Abhängigkeit in Modellbeschreibungen erkennen.',
      'Ich kann die Dummyfalle als Fall perfekter Multikollinearität erklären.',
      'Ich kann Identifikationsproblem und Präzisionsproblem unterscheiden.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 02_Annahmen.R',
      purpose: 'Die Annahmendatei zeigt mit x3 = 2 * x2 einen exakten Rangbruch und macht den Fehler damit direkt sichtbar.',
      code: String.raw`x2 <- c(-3.40, -3.41, -3.42, -3.45, -3.46)
x3 <- 2 * x2
y  <- c(-4.02, -4.03, -4.04, -4.06, -4.08)

lm(y ~ x2 + x3)`,
      output: 'R meldet eine Singularität beziehungsweise lässt einen Koeffizienten weg. Das ist kein Rechenpech, sondern der Ausdruck perfekter Multikollinearität.',
      miniTask: 'Erkläre, warum das Problem nicht durch mehr Beobachtungen verschwindet, solange x3 exakt doppelt so groß wie x2 bleibt.',
      solution: 'Mehr Beobachtungen helfen nicht, wenn die lineare Beziehung exakt bestehen bleibt. Es fehlt strukturell an eigenständiger Information.',
      pitfalls: ['Das Weglassen eines Koeffizienten als Softwarefehler lesen.', 'Rangverlust mit bloßer statistischer Unsicherheit verwechseln.']
    })
  },
  {
    id: 'exogeneity',
    title: 'Exogenität: E(u|X) = 0',
    cat: 'Klassische Annahmen',
    short: 'A4',
    uses: ['model_objects'],
    motivation: 'Exogenität ist die zentrale Glaubwürdigkeitsbedingung der OLS-Schätzung. Ohne sie kann ein Koeffizient formal sauber geschätzt und doch systematisch in die falsche Richtung zeigen.',
    sections: [
      {
        title: 'Was E(u|X) = 0 wirklich bedeutet',
        body: [
          'Exogenität verlangt, dass nach Kontrolle der Regressoren keine systematische Information im Fehlerterm übrig bleibt, die mit X zusammenhängt.',
          'Genau deshalb ist die Annahme kein Statistikdetail, sondern die Verbindung zwischen ökonomischer Modellierung und unverzerrter Schätzung.'
        ],
        math: [String.raw`$$E(u \mid X) = 0$$`]
      },
      {
        title: 'Warum die Annahme so stark ist',
        body: [
          'Sobald X mit dem Fehlerterm korreliert, wird der geschätzte Koeffizient mit Einflüssen vermischt, die gar nicht zu seinem kausalen Effekt gehören.',
          'Damit bricht nicht die Rechenlogik der OLS-Formel, sondern ihre inhaltliche Glaubwürdigkeit.'
        ]
      },
      {
        title: 'Ökonomische Prüfung statt rein technischer Prüfung',
        body: [
          'Exogenität lässt sich selten allein aus Daten sichern. Typische Fragen sind deshalb: Welche relevante Variable fehlt? Gibt es Rückkopplung zwischen y und x? Ist die Messung von x verlässlich?',
          'Eine gute ökonometrische Antwort verbindet daher Modellgleichung und institutionelle Plausibilität.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Exogenität mit Unkorreliertheit der Regressoren verwechseln',
        body: 'Entscheidend ist die Beziehung zwischen X und u, nicht die Korrelation der Regressoren untereinander.'
      }
    ],
    formeln: [
      formula(
        'Exogenitätsbedingung',
        String.raw`$$E(u \mid X) = 0$$`,
        'Die Kernannahme für Unverzerrtheit des OLS-Schätzers.',
        {}
      )
    ],
    aufgaben: [
      task(
        'In einer Regression von Testerfolg auf Klassengröße steckt das Einkommen der Eltern im Fehlerterm. Warum ist Exogenität wahrscheinlich verletzt?',
        [
          step('Das Einkommen der Eltern beeinflusst typischerweise den Testerfolg.'),
          step('Zugleich hängt es oft mit der Wahl kleinerer Klassen oder besserer Schulen zusammen.'),
          step('Damit korreliert ein relevanter, ausgelassener Einfluss mit dem Regressor Klassengröße.'),
          step('Die Bedingung E(u|X)=0 ist deshalb nicht plausibel.')
        ],
        'Exogenität scheitert genau dann, wenn ein relevanter, unbeobachteter Einfluss mit dem Regressor systematisch zusammenhängt.'
      )
    ],
    intuition: intuition({
      core: 'Exogenität bedeutet: Der Regressor bringt keine versteckte Zusatzinformation aus dem Fehlerterm mit.',
      analogy: 'Wie bei einer sauberen Waage: Das gemessene Gewicht darf nicht schon von einem schiefen Untergrund verfälscht sein.',
      bridge: 'Sobald eine Modellgeschichte plausibel macht, dass X und ein unbeobachteter Einfluss gemeinsam laufen, musst du Bias vermuten.',
      exam: [
        { if: 'eine ausgelassene Variable sowohl y als auch x beeinflusst', then: 'erkenne sofort ein Exogenitätsproblem.' },
        { if: 'zwei Variablen sich gegenseitig bestimmen', then: 'denke an Simultanität und verletzte Exogenität.' }
      ],
      mistakes: ['Exogenität aus einem hübschen Fit ableiten.', 'Zu glauben, dass E(u|X)=0 direkt aus einem Residuenplot bewiesen werden kann.']
    }),
    mastery: [
      'Ich kann E(u|X)=0 in ökonomischer Sprache erklären.',
      'Ich kann sagen, warum Exogenität für unverzerrte OLS-Schätzung zentral ist.',
      'Ich kann typische ökonomische Quellen verletzter Exogenität benennen.',
      'Ich kann Exogenität als Identifikations- und nicht nur als Rechenbedingung lesen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 02_Annahmen.R',
      purpose: 'Die Annahmendatei zeigt, dass Regressionsrechnen allein Exogenität nicht garantiert; die eigentliche Arbeit ist die Modellkritik.',
      code: String.raw`model <- lm(testscore ~ classsize, data = school_df)
plot(resid(model) ~ school_df$classsize)
abline(h = 0, col = "red")`,
      output: 'Ein Residuenplot kann Hinweise auf Struktur geben, aber er beweist Exogenität nicht. Die entscheidende Frage bleibt, ob unbeobachtete Faktoren mit classsize zusammenhängen.',
      miniTask: 'Nenne zwei plausible Variablen, die in einem Bildungsbeispiel Exogenität verletzen könnten.',
      solution: 'Typische Kandidaten sind elterliches Einkommen, Schulqualität oder unbeobachtete Fähigkeit. Alle können sowohl den Regressor als auch die Zielvariable beeinflussen.',
      pitfalls: ['Aus zufällig wirkenden Residuen direkt auf Exogenität schließen.', 'Exogenität als rein technische Plotdiagnose behandeln.']
    })
  },
  {
    id: 'endogeneity_ovb',
    title: 'Endogenität & Omitted Variable Bias',
    cat: 'Klassische Annahmen',
    short: 'OVB',
    uses: ['exogeneity'],
    graph: true,
    motivation: 'Der Omitted Variable Bias ist der klassische Grund, warum ein scheinbar sauberer OLS-Koeffizient kausal falsch gelesen wird. Er ist Prüfungsstoff und Praxisproblem zugleich.',
    sections: [
      {
        title: 'Die zwei Bedingungen des OVB',
        body: [
          'Eine ausgelassene Variable z erzeugt nur dann Bias, wenn sie erstens einen eigenen Effekt auf y hat und zweitens mit dem interessierenden Regressor x korreliert.',
          'Fehlt nur eine der beiden Bedingungen, entsteht kein systematischer Omitted Variable Bias.'
        ],
        math: [String.raw`$$E[\hat{\gamma}_1] = \beta_1 + \beta_2 \frac{\operatorname{Cov}(x,z)}{\operatorname{Var}(x)}$$`]
      },
      {
        title: 'Richtung des Bias',
        body: [
          'Die Richtung des Bias ist das Produkt aus dem Effekt der ausgelassenen Variable auf y und ihrer Korrelation mit x. Genau deshalb lassen sich viele Klausurfragen bereits über Vorzeichenlogik lösen.',
          'Im Bildungsbeispiel führt positive Fähigkeit sowohl zu mehr Bildung als auch zu höherem Lohn. Lässt man Fähigkeit aus, wird der Bildungseffekt typischerweise überschätzt.'
        ]
      },
      {
        title: 'OVB ist nur ein Endogenitätsfall',
        body: [
          'Auch Simultanität, Messfehler oder Selektion können dazu führen, dass X mit u zusammenhängt. OVB ist aber der meistgeprüfte und didaktisch klarste Einstieg in Endogenität.',
          'Gerade deshalb solltest du Bias-Fragen nicht auf die Formel reduzieren, sondern die ökonomische Geschichte dahinter mitlesen.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Jede relevante Kontrollvariable reflexhaft aufnehmen',
        body: 'Kontrollen helfen nur, wenn sie vor der Wirkung von x liegen. Mediatoren oder kollidierende Variablen können neue Probleme erzeugen.'
      }
    ],
    formeln: [
      formula(
        'OVB-Formel',
        String.raw`$$\operatorname{Bias}(\hat{\gamma}_1) = \beta_2 \cdot \frac{\operatorname{Cov}(x,z)}{\operatorname{Var}(x)}$$`,
        'Bias entsteht aus Effekt der ausgelassenen Variable mal ihrer Korrelation mit x.',
        { z: 'Ausgelassene relevante Variable' }
      )
    ],
    aufgaben: [
      task(
        'Lohn wird auf Bildung regressiert. Fähigkeit hat einen positiven Effekt auf Lohn und korreliert positiv mit Bildung. Welche Richtung hat der OVB?',
        [
          step('Der Effekt der Fähigkeit auf den Lohn ist positiv.', String.raw`$$\beta_2 > 0$$`),
          step('Die Korrelation zwischen Bildung und Fähigkeit ist ebenfalls positiv.', String.raw`$$\operatorname{Cov}(x,z) > 0$$`),
          step('Das Produkt der beiden Vorzeichen ist positiv.'),
          step('Der Bildungseffekt wird daher überschätzt.')
        ],
        'Für die Richtung des OVB reicht oft saubere Vorzeichenlogik.'
      )
    ],
    intuition: intuition({
      core: 'OVB mischt dem Koeffizienten eines Regressors unbemerkt den Effekt einer fehlenden, aber relevanten Variable bei.',
      analogy: 'Wie bei einem Rezept, in dem eine Zutat fehlt, deren Geschmack trotzdem im Ergebnis steckt, weil sie immer mit einer anderen Zutat gemeinsam gekauft wurde.',
      bridge: 'Suche bei jeder Kausalfrage aktiv nach der Variablen, die im Fehlerterm “wohnt”, aber mit dem Regressor mitläuft.',
      exam: [
        { if: 'β_2 und Cov(x,z) dasselbe Vorzeichen haben', then: 'erwarte positiven Bias.' },
        { if: 'z keinen Effekt auf y hat', then: 'entsteht trotz Korrelation kein OVB.' }
      ],
      mistakes: ['Biasrichtung ohne Vorzeichenprodukt argumentieren.', 'OVB mit bloßer Multikollinearität verwechseln.']
    }),
    mastery: [
      'Ich kann die zwei Bedingungen für OVB klar benennen.',
      'Ich kann die Richtung eines OVB über Vorzeichenlogik bestimmen.',
      'Ich kann OVB als Endogenitätsproblem erklären.',
      'Ich kann zwischen ausgelassener Variable, Mediator und irrelevanter Kontrolle unterscheiden.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 02_Annahmen.R + Übungslogik',
      purpose: 'Das Modul nutzt hier bewusst eine kleine Simulation, um zu zeigen, dass der Koeffizient kippt, wenn eine relevante Variable fehlt.',
      code: String.raw`set.seed(1)
ability <- rnorm(200)
educ    <- 12 + 0.7 * ability + rnorm(200)
wage    <- 5 + 0.8 * educ + 1.2 * ability + rnorm(200)

summary(lm(wage ~ educ))
summary(lm(wage ~ educ + ability))`,
      output: 'Das einfache Modell ohne ability lädt deren Effekt in den Bildungskontext. Nimmt man ability auf, fällt der Bildungskoeffizient typischerweise zurück.',
      miniTask: 'Beschreibe in einem Satz, was der Unterschied zwischen beiden Regressionsoutputs über OVB zeigt.',
      solution: 'Der Koeffizient von educ im kleinen Modell enthält neben dem Bildungseffekt auch den positiven Effekt der Fähigkeit. Mit ability als Kontrolle wird diese Vermischung reduziert.',
      pitfalls: ['Zu glauben, jeder Koeffizientenunterschied zwischen Modellen sei automatisch OVB-Beweis.', 'Korrelation zwischen educ und ability nicht mit der Wirkung von ability auf wage zu verbinden.']
    })
  },
  {
    id: 'unbiasedness',
    title: 'Unverzerrtheit des KQ-Schätzers',
    cat: 'Eigenschaften des OLS-Schätzers',
    short: 'Unbiased',
    uses: ['exogeneity'],
    motivation: 'Unverzerrtheit ist die erste große Qualitätsaussage über OLS: Im Mittel vieler Stichproben trifft der Schätzer den wahren Parameter.',
    sections: [
      {
        title: 'Erwartungswert statt Einzelfall',
        body: [
          'Ein unverzerrter Schätzer ist im Durchschnitt vieler möglicher Stichproben richtig. Das heißt ausdrücklich nicht, dass jede einzelne Schätzung präzise oder exakt sein muss.',
          'Gerade diese Unterscheidung wird in Prüfungen häufig unterschlagen.'
        ],
        math: [String.raw`$$E(\hat{\beta}\mid X) = \beta$$`]
      },
      {
        title: 'Welche Annahmen tragen die Unverzerrtheit',
        body: [
          'Linearität in den Parametern, zufällige Ziehung, Vollrang und vor allem Exogenität sorgen gemeinsam dafür, dass der Erwartungswert des OLS-Schätzers den wahren Parameter trifft.',
          'Homoskedastizität ist dafür nicht nötig. Sie wird erst für Effizienz und klassische Standardfehler entscheidend.'
        ]
      },
      {
        title: 'Warum die Aussage trotzdem praktisch wichtig ist',
        body: [
          'Unverzerrtheit ist die Basissicherung gegen systematische Fehlrichtung. Sie beantwortet die Frage, ob OLS “im Mittel auf das richtige Ziel zielt”.',
          'Erst danach kann sinnvoll über Streuung und Effizienz gesprochen werden.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Unverzerrt = immer richtig',
        body: 'Ein unverzerrter Schätzer kann in einer konkreten Stichprobe stark danebenliegen. Unverzerrtheit ist eine Erwartungswertaussage, keine Perfektionsgarantie.'
      }
    ],
    formeln: [
      formula(
        'Unverzerrtheit',
        String.raw`$$E(\hat{\beta}_j \mid X) = \beta_j$$`,
        'Im Durchschnitt über viele Stichproben trifft der Schätzer den wahren Parameter.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Eine einzelne Stichprobe liefert β̂_1 = 1.4, der wahre Parameter ist β_1 = 1.0. Widerlegt das allein die Unverzerrtheit von OLS?',
        [
          step('Nein, denn Unverzerrtheit ist keine Aussage über eine einzelne Realisierung.'),
          step('Entscheidend ist, ob der Erwartungswert des Schätzers über viele Stichproben beim wahren β_1 liegt.'),
          step('Ein einzelner hoher Wert kann einfach Teil der normalen Stichprobenschwankung sein.')
        ],
        'Unverzerrtheit ist eine Durchschnitts- und keine Einzelfallaussage.'
      )
    ],
    intuition: intuition({
      core: 'Unverzerrtheit sagt: OLS zielt im Mittel nicht systematisch daneben.',
      analogy: 'Wie bei einer Zielscheibe: Die Treffer dürfen streuen, aber der Mittelpunkt der Trefferwolke sollte über dem echten Ziel liegen.',
      bridge: 'Wenn “biased oder unbiased?” gefragt wird, denke zuerst an Erwartungswert und nicht an den konkreten Schätzwert einer einzigen Stichprobe.',
      exam: [
        { if: 'eine einzelne Schätzung groß oder klein wirkt', then: 'trenne Realisierung und Erwartungswert sauber.' },
        { if: 'Exogenität fällt aus', then: 'erwarte typischerweise verzerrte OLS-Schätzer.' }
      ],
      mistakes: ['Unverzerrtheit mit kleiner Varianz verwechseln.', 'Homoskedastizität fälschlich als Voraussetzung für Unverzerrtheit nennen.']
    }),
    mastery: [
      'Ich kann Unverzerrtheit als Erwartungswertaussage erklären.',
      'Ich kann sagen, welche Annahmen OLS-Unverzerrtheit tragen.',
      'Ich kann Unverzerrtheit von Präzision unterscheiden.',
      'Ich kann erklären, warum eine einzelne Schätzung Unverzerrtheit nicht widerlegt.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 03_Eigenschaften.R',
      purpose: 'Die Simulationsdatei macht sichtbar, dass OLS-Schätzungen streuen dürfen und trotzdem im Mittel richtig liegen.',
      code: String.raw`b2 <- numeric()
for (i in 1:1000) {
  x <- 1:50
  e <- rnorm(50, 0, 1)
  y <- 1 + 0.5 * x + e
  b2 <- c(b2, coef(lm(y ~ x))[2])
}
hist(b2, breaks = 30)
abline(v = 0.5, col = "red", lwd = 2)`,
      output: 'Die Verteilung der Schätzungen streut um 0.5. Genau diese Zentrierung illustriert Unverzerrtheit.',
      miniTask: 'Beschreibe, was im Histogramm anders wäre, wenn die Verteilung klar links vom roten Strich läge.',
      solution: 'Dann würde der Schätzer im Mittel unter dem wahren Parameter liegen und wäre negativ verzerrt.',
      pitfalls: ['Das Histogramm nur optisch beschreiben, ohne auf Zentrierung versus Streuung zu achten.']
    })
  },
  {
    id: 'gauss_markov',
    title: 'Gauss-Markov & Effizienz',
    cat: 'Eigenschaften des OLS-Schätzers',
    short: 'BLUE',
    uses: ['unbiasedness', 'no_perfect_multicollinearity'],
    motivation: 'Gauss-Markov beantwortet die zweite große Qualitätsfrage: Wenn OLS unverzerrt ist, ist es unter den linearen unverzerrten Schätzern auch der präziseste Standardweg.',
    cardsTitle: 'BLUE aufgelöst',
    cards: [
      { title: 'Best', value: 'kleinste Varianz', note: 'innerhalb der Vergleichsklasse linearer unverzerrter Schätzer' },
      { title: 'Linear', value: 'Linearkombination der y_i', note: 'Die Vergleichsklasse ist eingeschränkt' },
      { title: 'Unbiased', value: 'E(β̂|X)=β', note: 'Unverzerrtheit bleibt Voraussetzung' },
      { title: 'Estimator', value: 'Schätzerklasse', note: 'Kein Urteil über alle denkbaren Verfahren' }
    ],
    sections: [
      {
        title: 'Was der Satz sagt',
        body: [
          'Unter den klassischen Annahmen und insbesondere unter Homoskedastizität ist OLS der Best Linear Unbiased Estimator. Das ist eine Präzisionsaussage innerhalb einer klar definierten Vergleichsklasse.',
          'BLUE bedeutet nicht “immer der beste Schätzer überhaupt”, sondern “varianzkleinster linearer unverzerrter Schätzer”.'
        ]
      },
      {
        title: 'Warum Homoskedastizität hier wichtig wird',
        body: [
          'Für Unverzerrtheit reicht Homoskedastizität nicht. Für den Effizienzvergleich des Gauss-Markov-Satzes ist sie aber zentral, weil sie die Varianzstruktur vereinheitlicht.',
          'Sobald Heteroskedastizität auftritt, kann OLS zwar weiterhin unverzerrt sein, verliert aber seine BLUE-Eigenschaft.'
        ]
      },
      {
        title: 'Was Gauss-Markov ausdrücklich nicht sagt',
        body: [
          'Der Satz spricht weder über Kausalität noch über nichtlineare oder verzerrte Schätzer außerhalb der Vergleichsklasse.',
          'Gerade diese Abgrenzung macht eine gute Antwort klausurreif.'
        ]
      }
    ],
    warnings: [
      {
        title: 'BLUE als Allzwecksuperlativ',
        body: 'Gauss-Markov ist ein Satz mit Bedingungen und Vergleichsrahmen. Ohne diese Zusätze ist die Aussage unvollständig.'
      }
    ],
    formeln: [
      formula(
        'Gauss-Markov-Aussage',
        String.raw`$$\operatorname{Var}(a'y \mid X) \ge \operatorname{Var}(\hat{\beta}_j \mid X)$$`,
        'OLS ist innerhalb der linearen unverzerrten Schätzer varianzminimal.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Warum reicht die Aussage “OLS ist unverzerrt” noch nicht, um OLS als guten Schätzer zu loben?',
        [
          step('Unverzerrtheit sagt nur, dass der Erwartungswert stimmt.'),
          step('Ein Schätzer kann trotzdem stark streuen und damit in einzelnen Stichproben unpräzise sein.'),
          step('Gauss-Markov ergänzt genau diese Präzisionsdimension und macht daraus BLUE.')
        ],
        'Ein guter Schätzer soll nicht nur im Mittel richtig liegen, sondern auch möglichst wenig streuen.'
      )
    ],
    intuition: intuition({
      core: 'Gauss-Markov sagt: Wenn die klassischen Regeln gelten, ist OLS unter den linearen unverzerrten Wegen der präziseste.',
      analogy: 'Wie bei mehreren gleich kalibrierten Messgeräten: Das beste ist das, das bei gleicher Richtigkeit am wenigsten schwankt.',
      bridge: 'Wenn BLUE gefragt wird, nenne immer Vergleichsklasse und Voraussetzungen mit.',
      exam: [
        { if: 'Homoskedastizität verletzt ist', then: 'sage: OLS kann unverzerrt bleiben, aber nicht mehr BLUE sein.' },
        { if: '“best” auftaucht', then: 'frage sofort: best in welcher Klasse?' }
      ],
      mistakes: ['Best mit kausal oder wahrheitsnäher verwechseln.', 'BLUE ohne Hinweis auf lineare unverzerrte Vergleichsschätzer formulieren.']
    }),
    mastery: [
      'Ich kann BLUE vollständig auflösen und erklären.',
      'Ich kann sagen, warum Homoskedastizität für Gauss-Markov relevant ist.',
      'Ich kann Unverzerrtheit und Effizienz unterscheiden.',
      'Ich kann den Geltungsbereich des Gauss-Markov-Satzes sauber abgrenzen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 03_Eigenschaften.R',
      purpose: 'Die Eigenschaftsdatei trainiert die Sicht auf Wiederholungsstichproben und zeigt damit, warum Varianz neben Erwartungstreue wichtig ist.',
      code: String.raw`b1 <- numeric()
for (i in 1:10000) {
  x <- 1:50
  e <- rnorm(50, 0, 1)
  y <- 1 + 0.5 * x + e
  b1 <- c(b1, coef(lm(y ~ x))[2])
}
sd(b1)`,
      output: 'Die Standardabweichung der wiederholten Schätzungen ist die Simulationssicht auf Präzision. Genau diese Streuung minimiert OLS unter den Gauss-Markov-Annahmen innerhalb seiner Vergleichsklasse.',
      miniTask: 'Formuliere in einem Satz, warum eine kleinere Streuung der Simulationen ein Effizienzargument ist.',
      solution: 'Wenn wiederholte Schätzungen enger um den wahren Parameter liegen, ist der Schätzer präziser und besitzt geringere Varianz.',
      pitfalls: ['Simulation nur als hübsche Illustration statt als Varianzargument lesen.']
    })
  },
  {
    id: 'consistency',
    title: 'Konsistenz & Identifikation',
    cat: 'Eigenschaften des OLS-Schätzers',
    short: 'plim',
    uses: ['unbiasedness'],
    motivation: 'Konsistenz verschiebt den Blick von kleinen Stichproben auf die Langfristlogik: Lernt der Schätzer mit mehr Daten tatsächlich den wahren Parameter?',
    sections: [
      {
        title: 'Was Konsistenz bedeutet',
        body: [
          'Ein konsistenter Schätzer konvergiert mit wachsender Stichprobengröße gegen den wahren Parameter. Große Stichproben verringern also die Wahrscheinlichkeit großer Abweichungen.',
          'Konsistenz ist damit eine Grenzaussage über Lernfähigkeit, nicht über den Erwartungswert in einer festen Stichprobengröße.'
        ],
        math: [String.raw`$$\operatorname{plim}_{n \to \infty}\hat{\beta} = \beta$$`]
      },
      {
        title: 'Warum mehr n nicht jedes Problem heilt',
        body: [
          'Wenn Exogenität verletzt ist, verschwindet systematischer Bias nicht einfach durch mehr Daten. Ein falsches Modell lernt mit mehr Daten nur präziser den falschen Grenzwert.',
          'Gerade deshalb ist Identifikation wichtiger als bloße Stichprobengröße.'
        ]
      },
      {
        title: 'Konsistenz und Unverzerrtheit sind nicht dasselbe',
        body: [
          'Ein Schätzer kann unverzerrt, aber in kleinen Stichproben sehr unpräzise sein. Umgekehrt kann ein Schätzer in kleinen Stichproben verzerrt, aber asymptotisch konsistent sein.',
          'Beide Eigenschaften beantworten deshalb unterschiedliche Qualitätsfragen.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Großes n als Heilmittel für Endogenität',
        body: 'Mehr Beobachtungen beseitigen keine systematische Korrelation zwischen Regressoren und Fehlerterm.'
      }
    ],
    formeln: [
      formula(
        'Konsistenz',
        String.raw`$$\operatorname{plim}\hat{\beta}_j = \beta_j$$`,
        'Der Schätzer nähert sich dem wahren Parameter im Grenzwert an.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Warum kann ein Schätzer trotz sehr großer Stichprobe noch problematisch sein, wenn X mit u korreliert?',
        [
          step('Weil der systematische Zusammenhang zwischen X und u nicht durch mehr Beobachtungen verschwindet.'),
          step('Die Schätzung konzentriert sich dann auf einen verzerrten Grenzwert statt auf den wahren Parameter.'),
          step('Mehr Daten verbessern in diesem Fall Präzision ohne inhaltliche Korrektur.')
        ],
        'Konsistenz setzt richtige Identifikation voraus; große Stichproben allein garantieren sie nicht.'
      )
    ],
    intuition: intuition({
      core: 'Konsistenz fragt nicht, ob ein Schätzer heute perfekt ist, sondern ob er mit mehr Information verlässlich zur Wahrheit lernt.',
      analogy: 'Wie beim Scharfstellen einer Kamera: Mehr Licht hilft nur, wenn die Linse nicht grundsätzlich schief eingebaut ist.',
      bridge: 'Wenn “großes n” in einer Aufgabe auftaucht, denke sofort an Konsistenz und frage danach, ob das Modell überhaupt richtig identifiziert ist.',
      exam: [
        { if: 'mehr Beobachtungen erwähnt werden', then: 'trenne Lerneffekt und mögliche Modellverzerrung.' },
        { if: 'Exogenität verletzt ist', then: 'sage explizit, dass große Stichproben das nicht reparieren.' }
      ],
      mistakes: ['Konsistenz mit Unverzerrtheit gleichsetzen.', 'Asymptotische Aussagen wie endliche Stichprobenaussagen formulieren.']
    }),
    mastery: [
      'Ich kann Konsistenz als Grenzwertaussage erklären.',
      'Ich kann Konsistenz von Unverzerrtheit unterscheiden.',
      'Ich kann begründen, warum große Stichproben Endogenität nicht heilen.',
      'Ich kann Identifikation als Voraussetzung für Konsistenz benennen.'
    ]
  },
  {
    id: 'error_variance',
    title: 'SSR, Fehlervarianz & Freiheitsgrade',
    cat: 'Fehlervarianz & Unsicherheit',
    short: 'σ²',
    uses: ['ols_objective', 'normal_equations', 'consistency'],
    motivation: 'Sobald OLS geschätzt ist, reicht der Koeffizientenvektor nicht mehr aus. Für Inferenz muss klar sein, wie groß die Reststreuung des Modells ist und warum dafür Freiheitsgrade verloren gehen.',
    cardsTitle: 'Die zentralen Objekte',
    cards: [
      { title: 'SSR', value: String.raw`$\sum \hat{u}_i^2$`, note: 'Residual Sum of Squares als gemessene Reststreuung' },
      { title: 'n-k', value: 'Freiheitsgrade', note: 'Beobachtungen minus geschätzte Parameter' },
      { title: 'σ̂²', value: String.raw`$SSR/(n-k)$`, note: 'Klassische Schätzung der Fehlervarianz' }
    ],
    sections: [
      {
        title: 'Warum die Fehlervarianz nicht beobachtbar ist',
        body: [
          'Die wahre Fehlervarianz beschreibt die Streuung des unbeobachteten Fehlerterms u. In der Stichprobe sehen wir aber nur Residuen û, also die nach der OLS-Anpassung verbleibenden Abweichungen.',
          'Deshalb wird σ² aus der Residuenquadratsumme approximiert. Das ist eine Schätzung von Unsicherheit, keine direkt beobachtete Modellgröße.'
        ],
        math: [String.raw`$$SSR = \hat{u}'\hat{u} = \sum_{i=1}^n \hat{u}_i^2$$`]
      },
      {
        title: 'Warum durch n-k geteilt wird',
        body: [
          'Die Residuen sind nicht frei, weil sie bereits die OLS-Restriktionen erfüllen. Mit jedem geschätzten Parameter geht deshalb ein Freiheitsgrad verloren.',
          'Teilt man durch n statt durch n-k, wird die Fehlervarianz systematisch zu klein geschätzt. Genau diese Korrektur macht die klassische Schätzung unverzerrt.'
        ],
        math: [String.raw`$$\hat{\sigma}^2 = \frac{SSR}{n-k}$$`]
      },
      {
        title: 'Warum das für Standardfehler entscheidend ist',
        body: [
          'Alle klassischen Standardfehler und damit auch t- und F-Tests setzen an dieser Schätzung an. Ein falscher Zugriff auf σ̂² zieht sofort falsche Unsicherheitseinschätzungen nach sich.',
          'In Klausuren ist σ̂² daher nie bloß ein Zwischenschritt, sondern die Brücke zwischen Residuen und Inferenz.'
        ]
      }
    ],
    warnings: [
      {
        title: 'SSR und σ̂² gleichsetzen',
        body: 'SSR ist die rohe Residuenquadratsumme. Erst die Division durch n-k liefert die skalenbereinigte Fehlervarianzschätzung.'
      }
    ],
    formeln: [
      formula(
        'Residual Sum of Squares',
        String.raw`$$SSR = \sum_{i=1}^n \hat{u}_i^2$$`,
        'Misst die gesamte verbleibende Modellabweichung in der Stichprobe.',
        { '\\hat{u}_i': 'Residuum der i-ten Beobachtung' }
      ),
      formula(
        'Fehlervarianzschätzer',
        String.raw`$$\hat{\sigma}^2 = \frac{SSR}{n-k}$$`,
        'Klassische Schätzung der Fehlerstreuung unter dem linearen Modell.',
        { n: 'Beobachtungszahl', k: 'Anzahl geschätzter Parameter' }
      )
    ],
    aufgaben: [
      task(
        'Ein Modell mit n = 80 und k = 5 liefert eine Residuenquadratsumme von SSR = 300. Berechne σ̂² und erkläre, warum nicht durch 80 geteilt wird.',
        [
          step('Bestimme zuerst die Freiheitsgrade.', String.raw`$$n-k = 80-5 = 75$$`),
          step('Teile die Residuenquadratsumme durch die Freiheitsgrade.', String.raw`$$\hat{\sigma}^2 = \frac{300}{75} = 4$$`),
          step('Die Division durch 75 statt 80 berücksichtigt, dass bereits fünf Parameter aus denselben Daten geschätzt wurden.')
        ],
        'Die Freiheitsgradkorrektur macht aus roher Reststreuung eine inferenzfähige Fehlervarianzschätzung.'
      )
    ],
    intuition: intuition({
      core: 'σ̂² misst nicht, wie gut das Modell aussehen soll, sondern wie viel unerklärte Streuung nach der Schätzung noch übrig bleibt.',
      analogy: 'Wie bei einer Waage nach Kalibrierung: Erst wenn die Restschwankung bekannt ist, weißt du, wie präzise die Anzeige wirklich ist.',
      bridge: 'Sobald Standardfehler oder Intervalle gefragt sind, denke zuerst an SSR, Freiheitsgrade und σ̂².',
      exam: [
        { if: 'n-k auftaucht', then: 'verbinde es sofort mit Freiheitsgradverlust durch geschätzte Parameter.' },
        { if: 'SSR gegeben ist', then: 'prüfe, ob bereits σ̂² oder erst die rohe Residuenquadratsumme vorliegt.' }
      ],
      mistakes: [
        'SSR direkt als Fehlervarianz zitieren.',
        'Freiheitsgrade als bloße Formalität statt als Informationsverlust lesen.'
      ]
    }),
    mastery: [
      'Ich kann SSR und σ̂² unterscheiden.',
      'Ich kann die Division durch n-k begründen.',
      'Ich kann erklären, warum σ̂² für Standardfehler zentral ist.',
      'Ich kann Freiheitsgrade inhaltlich statt nur formal lesen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 04_Schätzen_der_Fehlervarianz.R',
      purpose: 'Die Datei zeigt, wie sich Residuen, SSR und die Freiheitsgradkorrektur direkt aus einem geschätzten Modell lesen lassen.',
      code: String.raw`model <- lm(y ~ x1 + x2, data = df)
res <- resid(model)
SSR <- sum(res^2)
n <- nrow(df)
k <- length(coef(model))
sigma2_hat <- SSR / (n - k)
sigma2_hat`,
      output: 'Du erhältst die geschätzte Fehlervarianz als skalenbereinigte Reststreuung des Modells.',
      miniTask: 'Erkläre, warum length(coef(model)) und nicht nur die Zahl der Regressoren in k eingeht.',
      solution: 'Auch der Interzept ist ein geschätzter Parameter und verbraucht deshalb einen Freiheitsgrad.',
      pitfalls: ['k nur als Zahl der erklärenden Variablen lesen und den Interzept vergessen.']
    })
  },
  {
    id: 'covariance_matrix',
    title: 'Kovarianzmatrix & Standardfehler',
    cat: 'Fehlervarianz & Unsicherheit',
    short: 'Var(β̂)',
    uses: ['error_variance'],
    motivation: 'Die Fehlervarianz allein sagt noch nicht, wie unsicher einzelne Koeffizienten sind. Erst die Kovarianzmatrix verbindet Modellrauschen mit der Informationsstruktur von X.',
    sections: [
      {
        title: 'Die Matrix hinter allen Standardfehlern',
        body: [
          'Unter Homoskedastizität gilt die klassische OLS-Formel für die bedingte Kovarianzmatrix des Schätzers. Sie zeigt unmittelbar, wovon Unsicherheit abhängt: von σ² und von der Geometrie der Regressoren.',
          'Große Reststreuung macht alle Schätzer unsicherer; gut getrennte, informative Regressoren machen sie präziser.'
        ],
        math: [String.raw`$$\operatorname{Var}(\hat{\beta}\mid X) = \hat{\sigma}^2 (X'X)^{-1}$$`]
      },
      {
        title: 'Diagonale und Nebendiagonale lesen',
        body: [
          'Die Diagonalelemente liefern die Varianzen einzelner Koeffizienten; ihre Wurzel sind die Standardfehler. Die Nebendiagonalen zeigen, wie Unsicherheit zwischen Schätzern gemeinsam läuft.',
          'Gerade bei gemeinsamen Restriktionen und F-Tests ist diese gemeinsame Matrixsicht wichtiger als die isolierte Betrachtung eines einzelnen Koeffizienten.'
        ]
      },
      {
        title: 'Warum X\'X hier wieder auftaucht',
        body: [
          'Dass X\'X sowohl in der OLS-Lösung als auch in der Unsicherheitsmatrix auftaucht, ist kein Zufall. Dieselbe Regressorstruktur, die den Schätzer identifiziert, bestimmt auch seine Präzision.',
          'Hohe Regressorenkorrelation oder geringe Streuung wirken deshalb sofort als größere Standardfehler.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Standardfehler als feste Eigenschaft des Koeffizienten lesen',
        body: 'Standardfehler hängen nicht am Koeffizientenwert selbst, sondern an Reststreuung, Stichprobengröße und Regressorstruktur.'
      }
    ],
    formeln: [
      formula(
        'Kovarianzmatrix',
        String.raw`$$\widehat{\operatorname{Var}}(\hat{\beta}\mid X) = \hat{\sigma}^2 (X'X)^{-1}$$`,
        'Die gemeinsame Unsicherheitsstruktur der OLS-Schätzer.',
        { '\\hat{\\sigma}^2': 'Geschätzte Fehlervarianz' }
      ),
      formula(
        'Standardfehler eines Koeffizienten',
        String.raw`$$se(\hat{\beta}_j) = \sqrt{\widehat{\operatorname{Var}}(\hat{\beta}_j\mid X)}$$`,
        'Die Wurzel des passenden Diagonalelements der Kovarianzmatrix.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Zwei Modelle haben denselben Koeffizientenwert β̂₁ = 0,8. Modell A hat einen Standardfehler von 0,1, Modell B einen Standardfehler von 0,4. Was sagt das über Präzision und Inferenz aus?',
        [
          step('Der Punktschätzer ist in beiden Modellen gleich groß.'),
          step('Modell A misst den Effekt aber deutlich präziser, weil die geschätzte Streuung kleiner ist.'),
          step('Ein gleicher Koeffizient kann deshalb je nach Standardfehler sehr unterschiedlich überzeugend sein.'),
          step('Tests und Konfidenzintervalle werden im Modell A deutlich schärfer ausfallen.')
        ],
        'Inferenzeignung hängt am Verhältnis von Effektgröße zu Unsicherheit, nicht am Koeffizientenwert allein.'
      )
    ],
    intuition: intuition({
      core: 'Die Kovarianzmatrix ist das Unsicherheitslayout der Regression: Sie sagt, wie stark jede Schätzung schwankt und wie diese Schwankungen zusammenhängen.',
      analogy: 'Wie bei mehreren Messgeräten in einem Set: Nicht nur jede einzelne Ungenauigkeit zählt, sondern auch, ob sich Fehler gemeinsam bewegen.',
      bridge: 'Wenn Standardfehler, Intervalle oder F-Tests auftauchen, denke immer an die Matrix dahinter und nicht nur an eine einzelne Zahl.',
      exam: [
        { if: 'Standardfehler gefragt ist', then: 'sage, dass er aus der Diagonale von Var(β̂|X) kommt.' },
        { if: 'Multikollinearität erwähnt wird', then: 'verbinde sie direkt mit aufgeblähter Kovarianzmatrix.' }
      ],
      mistakes: [
        'Standardfehler mit Residuen verwechseln.',
        'Nur Diagonalelemente zu sehen und die gemeinsame Unsicherheitsstruktur zu ignorieren.'
      ]
    }),
    mastery: [
      'Ich kann Var(β̂|X) inhaltlich lesen.',
      'Ich kann Standardfehler als Diagonalelemente der Kovarianzmatrix erklären.',
      'Ich kann den Einfluss von X\'X auf Präzision beschreiben.',
      'Ich kann Unsicherheit eines Koeffizienten von der Unsicherheit des gesamten Modells unterscheiden.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 04_Schätzen_der_Fehlervarianz.R',
      purpose: 'Die Datei baut die Kovarianzmatrix aus σ̂² und X explizit nach und verbindet sie mit den Standardfehlern aus summary(lm()).',
      code: String.raw`X <- model.matrix(model)
sigma2_hat <- sum(resid(model)^2) / (nrow(X) - ncol(X))
vcov_hat <- sigma2_hat * solve(t(X) %*% X)
sqrt(diag(vcov_hat))`,
      output: 'Die Wurzel der Diagonale liefert die Standardfehler der einzelnen Koeffizienten.',
      miniTask: 'Prüfe, welches Diagonalelement zum Standardfehler von x2 gehört und lies den Wert aus.',
      solution: 'Das zweite oder dritte Diagonalelement hängt von der Reihenfolge in model.matrix(model) ab. Die Struktur der Matrix bestimmt den Zugriff.',
      pitfalls: ['solve(t(X)%*%X) mit der rohen Datenmatrix X verwechseln.']
    })
  },
  {
    id: 'prediction',
    title: 'Punktprognose & fitted values',
    cat: 'Prognose & Modellgüte',
    short: 'ŷ',
    uses: ['normal_equations', 'covariance_matrix'],
    motivation: 'Ökonometrie wird praktisch, wenn aus einem geschätzten Modell eine konkrete Vorhersage für neue Regressorwerte gemacht werden soll. Dabei muss klar bleiben, dass Punktprognose und Unsicherheit verschiedene Ebenen sind.',
    sections: [
      {
        title: 'Was die Punktprognose ausdrückt',
        body: [
          'Setzt man einen neuen Kovariatenvektor x₀ in das geschätzte Modell ein, erhält man die Prognose des bedingten Erwartungswerts. Die Formel ist damit keine beliebige Rechenschablone, sondern die geschätzte mittlere Antwort des Modells.',
          'Fitted values innerhalb der Stichprobe und neue Prognosen außerhalb der Stichprobe folgen derselben Logik.'
        ],
        math: [String.raw`$$\hat{y}_0 = x_0'\hat{\beta}$$`]
      },
      {
        title: 'Prognose ist keine Kausalbehauptung',
        body: [
          'Auch eine sehr gut funktionierende Vorhersage beweist noch keinen kausalen Effekt. Das Modell kann Muster sauber treffen, ohne dass die zugrunde liegende Interpretation kausal belastbar wäre.',
          'Gerade deshalb müssen Prognose und Strukturaussage in Klausuren getrennt formuliert werden.'
        ]
      },
      {
        title: 'Wann Punktprognosen heikel werden',
        body: [
          'Sobald x₀ weit außerhalb des beobachteten Datenbereichs liegt, wird aus Prognose schnell Extrapolation. Dann wird das Modell in einen Bereich geschickt, den es empirisch gar nicht gelernt hat.',
          'Eine starke Antwort nennt deshalb immer auch den Gültigkeitsbereich der Vorhersage.'
        ]
      }
    ],
    warnings: [
      {
        title: 'ŷ und y verwechseln',
        body: 'Die Punktprognose ist ein geschätzter Mittelwert. Eine einzelne tatsächliche Beobachtung kann trotzdem davon abweichen.'
      }
    ],
    formeln: [
      formula(
        'Punktprognose',
        String.raw`$$\hat{y}_0 = x_0'\hat{\beta}$$`,
        'Geschätzter bedingter Mittelwert für neue Kovariaten x₀.',
        { x_0: 'Neuer Regressorvektor' }
      )
    ],
    aufgaben: [
      task(
        'Ein Modell für monatlichen Konsum lautet C = β̂₀ + β̂₁Y mit β̂₀ = 50 und β̂₁ = 0,7. Wie lautet die Punktprognose für ein Einkommen Y = 400?',
        [
          step('Setze den neuen Einkommenswert in die geschätzte Geradengleichung ein.', String.raw`$$\hat{C} = 50 + 0.7 \cdot 400$$`),
          step('Rechne den Vorhersagewert aus.', String.raw`$$\hat{C} = 330$$`),
          step('Interpretiere den Wert als erwarteten Konsum, nicht als sicher eintretenden Einzelwert.')
        ],
        'Punktprognosen geben den geschätzten Mittelwert an, nicht die gesamte Unsicherheit der Vorhersage.'
      )
    ],
    intuition: intuition({
      core: 'Die Punktprognose ist der Mittelwert, den das Modell für einen bestimmten Dateneingang erwartet.',
      analogy: 'Wie ein Thermostat, das aus einer bestimmten Außentemperatur eine erwartete Raumtemperatur ableitet: Es liefert einen Zielwert, keinen garantierten Einzelfall.',
      bridge: 'Frage bei jeder Prognose zuerst: Wird ein Mittelwert oder ein einzelnes künftiges Ereignis prognostiziert?',
      exam: [
        { if: 'x₀ gegeben ist', then: 'denke sofort an x₀′β̂ als Prognose des Erwartungswerts.' },
        { if: 'eine neue Einzelbeobachtung gefragt ist', then: 'trenne Punktprognose und Prognoseintervall.' }
      ],
      mistakes: [
        'Punktprognose als sichere Einzelvorhersage lesen.',
        'Extrapolation nicht als eigenes Risiko benennen.'
      ]
    }),
    mastery: [
      'Ich kann x₀′β̂ als Mittelwertsprognose erklären.',
      'Ich kann fitted values und neue Prognosen fachlich unterscheiden.',
      'Ich kann Prognose und Kausalinterpretation trennen.',
      'Ich kann Extrapolationsrisiken benennen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 05_Vorhersage.R',
      purpose: 'Die Prognosedatei zeigt, wie aus einem geschätzten lm()-Objekt Punktprognosen für neue Datenpunkte berechnet werden.',
      code: String.raw`model <- lm(y ~ x1 + x2, data = df)
new_obs <- data.frame(x1 = 4, x2 = 10)
predict(model, newdata = new_obs)`,
      output: 'predict() liefert zunächst die Punktprognose des bedingten Erwartungswerts.',
      miniTask: 'Erkläre in einem Satz, warum dieser Output allein noch kein Prognoserisiko enthält.',
      solution: 'Weil der Output nur den erwarteten Mittelwert zurückgibt; die Unsicherheit kommt erst über Intervalle hinzu.',
      pitfalls: ['predict() ohne newdata interpretieren, obwohl dann fitted values der Stichprobe geliefert werden.']
    })
  },
  {
    id: 'prediction_intervals',
    title: 'Konfidenz- vs. Prognoseintervall',
    cat: 'Prognose & Modellgüte',
    short: 'CI/PI',
    uses: ['prediction', 'error_variance'],
    motivation: 'Die klassische Klausurverwechslung der Prognoselehre lautet: Mittelwertsunsicherheit und Einzelprognose werden vermischt. Dieses Kapitel trennt beide Ebenen sauber.',
    sections: [
      {
        title: 'Intervall für den bedingten Mittelwert',
        body: [
          'Das Konfidenzintervall um E(y₀|x₀) misst nur die Unsicherheit über den unbekannten Mittelwert. Es berücksichtigt also, dass β unbekannt ist, aber nicht die zusätzliche Zufallsschwankung einer einzelnen neuen Beobachtung.',
          'Deshalb ist dieses Intervall enger und für Aussagen über den durchschnittlichen Zusammenhang gedacht.'
        ],
        math: [String.raw`$$\hat{y}_0 \pm t_{\alpha/2,n-k}\, se(\hat{y}_0)$$`]
      },
      {
        title: 'Intervall für eine neue Beobachtung',
        body: [
          'Das Prognoseintervall muss zusätzlich den neuen Fehlerterm u₀ tragen. Es ist deshalb immer breiter als das Intervall für den Mittelwert.',
          'Wer diese Zusatzunsicherheit vergisst, unterschätzt das Vorhersagerisiko systematisch.'
        ],
        math: [String.raw`$$\hat{y}_0 \pm t_{\alpha/2,n-k}\, \sqrt{se(\hat{y}_0)^2 + \hat{\sigma}^2}$$`]
      },
      {
        title: 'Was in der Aufgabenstellung sprachlich zählt',
        body: [
          'Wörter wie erwarteter Wert, Durchschnitt oder bedingter Mittelwert deuten auf das engere Konfidenzintervall. Formulierungen wie nächster Haushalt, nächste Beobachtung oder konkrete Prognose sprechen für das Prognoseintervall.',
          'Der richtige Zugriff beginnt also mit Leseverständnis, nicht mit Rechnen.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Engeres Intervall für Einzelprognose verwenden',
        body: 'Sobald eine konkrete neue Beobachtung gemeint ist, muss die zusätzliche Störung u₀ im Intervall auftauchen.'
      }
    ],
    formeln: [
      formula(
        'Konfidenzintervall für den Mittelwert',
        String.raw`$$\hat{y}_0 \pm t_{\alpha/2,n-k}\, se(\hat{y}_0)$$`,
        'Unsicherheit über E(y₀|x₀).',
        {}
      ),
      formula(
        'Prognoseintervall',
        String.raw`$$\hat{y}_0 \pm t_{\alpha/2,n-k}\, \sqrt{se(\hat{y}_0)^2 + \hat{\sigma}^2}$$`,
        'Breiter, weil zusätzlich neue idiosynkratische Unsicherheit hinzukommt.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Warum ist das Prognoseintervall für den Absatz im nächsten Monat breiter als das Intervall für den erwarteten Durchschnittsabsatz bei denselben Regressorwerten?',
        [
          step('Beide Intervalle tragen die Unsicherheit über die geschätzten Koeffizienten.'),
          step('Für eine einzelne neue Beobachtung kommt zusätzlich der neue Fehlerterm hinzu.', String.raw`$$u_0$$`),
          step('Dadurch wird die Varianz der Einzelprognose größer und das Intervall breiter.'),
          step('Das Mittelwertsintervall beantwortet also eine andere, engere Frage.')
        ],
        'Die Differenz zwischen Mittelwerts- und Einzelprognose ist eine Unsicherheitsdifferenz.'
      )
    ],
    intuition: intuition({
      core: 'Das Konfidenzintervall sagt etwas über den erwarteten Mittelpunkt, das Prognoseintervall über einen einzelnen künftigen Treffer.',
      analogy: 'Wie beim Bogenschießen: Das Zielzentrum ist präziser schätzbar als der exakte Ort des nächsten einzelnen Pfeils.',
      bridge: 'Wenn eine Aufgabe zwischen “erwartetem Wert” und “nächster Beobachtung” wechselt, wechselt auch die richtige Intervalllogik.',
      exam: [
        { if: 'Durchschnitt oder Erwartungswert steht', then: 'wähle das Intervall für E(y₀|x₀).' },
        { if: 'konkreter neuer Fall steht', then: 'wähle das breitere Prognoseintervall.' }
      ],
      mistakes: [
        'CI und PI als zwei Namen für dasselbe Intervall behandeln.',
        'Die Breite des Prognoseintervalls nicht ökonomisch erklären können.'
      ]
    }),
    mastery: [
      'Ich kann Konfidenz- und Prognoseintervall sauber unterscheiden.',
      'Ich kann erklären, warum das Prognoseintervall breiter ist.',
      'Ich kann Aufgabenformulierungen korrekt in Intervalltypen übersetzen.',
      'Ich kann die Zusatzrolle von σ̂² in der Einzelprognose benennen.'
    ]
  },
  {
    id: 'r_squared',
    title: 'R², adjustiertes R² & Zerlegung der Variation',
    cat: 'Prognose & Modellgüte',
    short: 'R²',
    uses: ['ols_objective', 'prediction'],
    motivation: 'R² wird ständig zitiert, aber oft schlecht verstanden. Die eigentliche Kompetenz liegt nicht im Einsetzen der Formel, sondern im Lesen der Variationszerlegung und ihrer Grenzen.',
    cardsTitle: 'Die Zerlegung',
    cards: [
      { title: 'TSS / SST', value: String.raw`$\sum (y_i-\bar{y})^2$`, note: 'Gesamtvariation der Zielvariable' },
      { title: 'ESS', value: String.raw`$\sum (\hat{y}_i-\bar{y})^2$`, note: 'Erklärte Variation durch das Modell' },
      { title: 'SSR', value: String.raw`$\sum \hat{u}_i^2$`, note: 'Nicht erklärte Variation' }
    ],
    sections: [
      {
        title: 'Was R² eigentlich misst',
        body: [
          'R² misst, welcher Anteil der Variation von y durch das Modell erklärt wird. Es ist also eine Fit-Kennzahl, kein Kausalitäts- oder Qualitätsurteil über die inhaltliche Modellidee.',
          'Gerade deshalb kann ein Modell mit hohem R² kausal wertlos sein und ein kausal sinnvolles Modell durchaus ein moderates R² haben.'
        ],
        math: [String.raw`$$R^2 = 1 - \frac{SSR}{TSS}$$`]
      },
      {
        title: 'Warum das adjustierte R² existiert',
        body: [
          'Das einfache R² steigt nie, wenn zusätzliche Regressoren aufgenommen werden. Deshalb bestraft das adjustierte R² unnötige Komplexität und ist für Modellvergleiche oft informativer.',
          'Es verhindert nicht jede Überanpassung, ist aber ein besseres Warnsignal als das rohe R².'
        ],
        math: [String.raw`$$\bar{R}^2 = 1 - \frac{SSR/(n-k)}{TSS/(n-1)}$$`]
      },
      {
        title: 'Wann R² in Klausuren falsch gelesen wird',
        body: [
          'Typisch falsch ist es, R² als Signifikanznachweis oder als Kausalitätsbeweis zu verkaufen. Ebenso problematisch ist die Aussage, ein höheres R² mache automatisch jeden einzelnen Koeffizienten überzeugender.',
          'Modellgüte, Inferenz und Kausalität sind drei verschiedene Ebenen.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Hohes R² = gutes ökonomisches Modell',
        body: 'Ein hoher Fit sagt nur, dass das Modell Variation erklärt. Er ersetzt weder Identifikation noch plausible ökonomische Mechanismen.'
      }
    ],
    formeln: [
      formula(
        'Bestimmtheitsmaß',
        String.raw`$$R^2 = \frac{ESS}{TSS} = 1 - \frac{SSR}{TSS}$$`,
        'Anteil erklärter Variation.',
        {}
      ),
      formula(
        'Adjustiertes R²',
        String.raw`$$\bar{R}^2 = 1 - \frac{SSR/(n-k)}{TSS/(n-1)}$$`,
        'Korrigiert für zusätzliche Parameter.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Ein Modell hat TSS = 500 und SSR = 125. Berechne R² und erkläre, warum daraus noch keine Aussage über Kausalität folgt.',
        [
          step('Setze die Quadratsummen in die R²-Formel ein.', String.raw`$$R^2 = 1 - \frac{125}{500} = 0.75$$`),
          step('Das Modell erklärt also 75% der Variation von y.'),
          step('Diese Zahl sagt aber nur etwas über Fit, nicht über Exogenität oder Identifikation.')
        ],
        'R² misst Variationserklärung, nicht die Glaubwürdigkeit einer kausalen Interpretation.'
      )
    ],
    intuition: intuition({
      core: 'R² beantwortet die Frage: Wie viel der Datenbewegung fängt mein Modell ein?',
      analogy: 'Wie bei einer Lampe im Raum: R² sagt, wie viel Fläche beleuchtet wird, nicht ob die Geschichte hinter dem Licht kausal richtig ist.',
      bridge: 'Wenn R² in einer Aufgabe auftaucht, trenne sofort Fit, Signifikanz und Kausalität.',
      exam: [
        { if: 'R² hoch ist', then: 'sprich über Fit, nicht automatisch über gute Identifikation.' },
        { if: 'mehr Regressoren hinzukommen', then: 'prüfe, ob adjustiertes R² für den Vergleich sinnvoller ist.' }
      ],
      mistakes: [
        'R² als Hypothesentest lesen.',
        'Adjustiertes R² mit einem Signifikanzmaß verwechseln.'
      ]
    }),
    mastery: [
      'Ich kann die Quadratsummenzzerlegung erklären.',
      'Ich kann R² und adjustiertes R² unterscheiden.',
      'Ich kann die Grenzen von R² klar formulieren.',
      'Ich kann Fit, Signifikanz und Kausalität auseinanderhalten.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 06_Bestimmtheitsmass.R',
      purpose: 'Das Skript verbindet summary(lm()) mit der Zerlegung von TSS, ESS und SSR.',
      code: String.raw`model <- lm(y ~ x1 + x2, data = df)
y_hat <- fitted(model)
SSR <- sum(resid(model)^2)
TSS <- sum((df$y - mean(df$y))^2)
R2  <- 1 - SSR / TSS
R2`,
      output: 'Der berechnete Wert lässt sich direkt mit summary(model)$r.squared vergleichen.',
      miniTask: 'Erkläre, warum R2 steigt, wenn du irrelevante Regressoren hinzufügst, das adjustierte R2 aber nicht zwingend.',
      solution: 'Das rohe R² kann nur besser oder gleich werden, weil mehr Regressoren den Fit mechanisch verbessern. Das adjustierte R² bestraft dafür zusätzliche Freiheitsgrade.',
      pitfalls: ['R² aus summary(model) abzulesen, ohne die zugrunde liegende Zerlegung zu verstehen.']
    })
  },
  {
    id: 't_test',
    title: 't-Test für einzelne Koeffizienten',
    cat: 'Inferenz',
    short: 't',
    uses: ['covariance_matrix', 'r_squared'],
    motivation: 'Der t-Test ist die Standardbrücke von einem geschätzten Koeffizienten zu einer statistischen Entscheidung. Prüfungsrelevant ist dabei nicht nur die Formel, sondern die saubere Sprache um H₀, Standardfehler und Schlussfolgerung.',
    sections: [
      {
        title: 'Hypothesenlogik für einen Koeffizienten',
        body: [
          'Beim t-Test wird geprüft, ob ein einzelner Koeffizient mit einer hypothetischen Null oder einem anderen Referenzwert vereinbar ist. Meist lautet die Nullhypothese βⱼ = 0.',
          'Der Test vergleicht die beobachtete Abweichung vom Hypothesenwert mit dem geschätzten Standardfehler.'
        ],
        math: [String.raw`$$t = \frac{\hat{\beta}_j - \beta_{j,0}}{se(\hat{\beta}_j)}$$`]
      },
      {
        title: 'Warum Signifikanz nicht Größe bedeutet',
        body: [
          'Ein signifikanter Koeffizient kann ökonomisch klein sein. Umgekehrt kann ein ökonomisch großer Effekt insignifikant sein, wenn der Standardfehler hoch ist.',
          'Gerade deshalb müssen Effektgröße und statistische Präzision gemeinsam gelesen werden.'
        ]
      },
      {
        title: 'Wie die Testentscheidung sprachlich formuliert wird',
        body: [
          'Eine gute Antwort nennt Hypothesen, Teststatistik, Vergleich mit kritischem Wert oder p-Wert und eine verbale Schlussfolgerung auf dem gewählten Signifikanzniveau.',
          'Formulierungen wie “H₀ ist falsch” sind zu stark. Korrekt ist: Auf dem gewählten Niveau wird H₀ verworfen oder nicht verworfen.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Signifikant = wichtig',
        body: 'Statistische Signifikanz ist keine Aussage über ökonomische Relevanz oder Kausalität.'
      }
    ],
    formeln: [
      formula(
        't-Statistik',
        String.raw`$$t = \frac{\hat{\beta}_j - \beta_{j,0}}{se(\hat{\beta}_j)}$$`,
        'Einzeltest auf eine lineare Restriktion für einen Koeffizienten.',
        { '\\beta_{j,0}': 'Hypothesenwert unter H₀' }
      )
    ],
    aufgaben: [
      task(
        'Gegeben seien β̂₁ = 1,8 und se(β̂₁) = 0,6. Teste H₀: β₁ = 0 mit der Faustregel |t| > 2.',
        [
          step('Berechne die Teststatistik.', String.raw`$$t = \frac{1.8-0}{0.6} = 3$$`),
          step('Vergleiche den Betrag mit der kritischen Faustregel.', String.raw`$$|t| = 3 > 2$$`),
          step('Verwirf H₀ auf dem üblichen 5%-Niveau und formuliere das Ergebnis verbal.'),
          step('Signifikanz sagt aber noch nichts über Kausalität oder ökonomische Größe.')
        ],
        'Der t-Test verbindet Schätzwert und Unsicherheit zu einer regelgeleiteten Inferenzentscheidung.'
      )
    ],
    intuition: intuition({
      core: 'Der t-Test fragt: Ist der beobachtete Koeffizient groß genug relativ zu seiner Unsicherheit, um nicht mehr plausibel zufällig um den Hypothesenwert herum zu liegen?',
      analogy: 'Wie bei einer Waage: Nicht der rohe Ausschlag zählt, sondern ob er deutlich größer ist als das Messrauschen.',
      bridge: 'Sobald ein Koeffizient interpretiert werden soll, trenne immer Schätzwert, Standardfehler und Testentscheidung.',
      exam: [
        { if: 'βⱼ = 0 getestet wird', then: 'baue die Antwort als H₀/H₁ → t-Wert → Vergleich → verbale Entscheidung.' },
        { if: 'p-Wert gegeben ist', then: 'vergleiche ihn mit α und erkläre die Entscheidung in ganzen Sätzen.' }
      ],
      mistakes: [
        'Nicht-Verwerfen mit “H₀ ist wahr” übersetzen.',
        'Signifikanz mit ökonomischer Wichtigkeit gleichsetzen.'
      ]
    }),
    mastery: [
      'Ich kann die t-Statistik korrekt aufstellen.',
      'Ich kann H₀/H₁, Testwert und Schlussfolgerung sauber formulieren.',
      'Ich kann Signifikanz von Effektgröße trennen.',
      'Ich kann einen einzelnen Koeffiziententest sprachlich präzise auswerten.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 09_Intervallschätzung_Hypothesentests.R',
      purpose: 'Die R-Datei trainiert das Lesen von summary(lm()) und die Übersetzung der Outputspalten in Testlogik.',
      code: String.raw`model <- lm(y ~ x1 + x2, data = df)
summary(model)$coefficients`,
      output: 'Estimate, Std. Error, t value und Pr(>|t|) sind genau die vier Spalten, die im Kurs sprachlich beherrscht werden müssen.',
      miniTask: 'Erkläre, welche zwei Spalten du unmittelbar für den t-Test auf β₂ = 0 brauchst.',
      solution: 'Estimate und Std. Error reichen, um die Teststatistik zu bilden; der p-Wert ist die bereits fertig ausgewertete Entscheidungsgröße.',
      pitfalls: ['Den p-Wert zitieren, ohne vorher die getestete Nullhypothese zu nennen.']
    })
  },
  {
    id: 'f_test',
    title: 'F-Test für gemeinsame Restriktionen',
    cat: 'Inferenz',
    short: 'F',
    uses: ['t_test', 'covariance_matrix'],
    motivation: 'Viele ökonometrische Fragen betreffen nicht einen einzelnen Koeffizienten, sondern eine Gruppe von Restriktionen. Genau dafür ist der F-Test das Standardwerkzeug.',
    sections: [
      {
        title: 'Wann der F-Test gebraucht wird',
        body: [
          'Der F-Test prüft, ob mehrere lineare Restriktionen gemeinsam mit den Daten vereinbar sind. Typische Beispiele sind Blocksignifikanz, Gleichheit mehrerer Koeffizienten oder Restriktionen auf ganze Variablengruppen.',
          'Damit ist er der natürliche Test, sobald “gemeinsam”, “alle zusammen” oder “Modellvergleich” in der Aufgabe steht.'
        ]
      },
      {
        title: 'Restricted vs. unrestricted model',
        body: [
          'In vielen Klausuraufgaben wird der F-Test als Vergleich zwischen einem eingeschränkten und einem uneingeschränkten Modell formuliert. Die Frage lautet dann: Verbessert das weniger eingeschränkte Modell den Fit stark genug, um die zusätzlichen Freiheitsgrade zu rechtfertigen?',
          'Die Teststatistik basiert genau auf diesem zusätzlichen Fit relativ zur verbleibenden Reststreuung.'
        ],
        math: [String.raw`$$F = \frac{(SSR_R - SSR_{UR})/J}{SSR_{UR}/(n-k)}$$`]
      },
      {
        title: 'Beziehung zum t-Test',
        body: [
          'Für genau eine Restriktion ist der F-Test inhaltlich äquivalent zum t-Test. Bei mehreren Restriktionen wird er aber unverzichtbar, weil einzelne t-Tests die gemeinsame Struktur nicht korrekt abbilden.',
          'Gerade die Unterscheidung “einzeln insignifikant, gemeinsam signifikant” ist klausurklassisch.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Mehrere t-Tests statt eines F-Tests',
        body: 'Mehrere Einzeltests ersetzen keinen sauberen gemeinsamen Restriktionstest.'
      }
    ],
    formeln: [
      formula(
        'F-Statistik über SSR',
        String.raw`$$F = \frac{(SSR_R - SSR_{UR})/J}{SSR_{UR}/(n-k)}$$`,
        'Vergleicht zusätzlichen Fit pro Restriktion mit der Reststreuung des unrestricted model.',
        { J: 'Anzahl getesteter Restriktionen' }
      )
    ],
    aufgaben: [
      task(
        'Warum kann ein Modellblock gemeinsam signifikant sein, obwohl einzelne Koeffizienten nur schwach oder gar nicht signifikant aussehen?',
        [
          step('Einzelne t-Tests betrachten jeden Koeffizienten isoliert.'),
          step('Bei korrelierten Regressoren kann die gemeinsame Information im Block größer sein als die einzelne Trennschärfe.'),
          step('Der F-Test prüft genau diese gemeinsame Restriktion statt nur isolierter Einzelbeiträge.'),
          step('Deshalb können Blocksignifikanz und Einzelinsignifikanz zusammen auftreten.')
        ],
        'Der F-Test liest Modellstruktur auf Blockebene, nicht nur Koeffizienten für Koeffizienten.'
      )
    ],
    intuition: intuition({
      core: 'Der F-Test fragt, ob ein ganzer Restriktionsblock als Paket relevant ist.',
      analogy: 'Wie bei einem Team: Einzelne Spieler wirken unscheinbar, gemeinsam kann der Verbund trotzdem das Spiel entscheiden.',
      bridge: 'Wenn in einer Aufgabe mehrere Koeffizienten gemeinsam geprüft werden, denke sofort an F statt an viele einzelne t-Tests.',
      exam: [
        { if: 'restricted und unrestricted modell auftauchen', then: 'lies die Aufgabe als F-Test-Logik.' },
        { if: 'J Restriktionen erwähnt werden', then: 'ordne J in Zähler-Freiheitsgrade des F-Tests ein.' }
      ],
      mistakes: [
        'Blocktests durch Einzeltests ersetzen.',
        'Die Freiheitsgrade des restricted und unrestricted model nicht sauber zuordnen.'
      ]
    }),
    mastery: [
      'Ich kann erklären, wann ein F-Test statt eines t-Tests gebraucht wird.',
      'Ich kann restricted und unrestricted model unterscheiden.',
      'Ich kann die SSR-basierte F-Formel inhaltlich lesen.',
      'Ich kann Blocksignifikanz sprachlich korrekt interpretieren.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 09_Intervallschätzung_Hypothesentests.R',
      purpose: 'Das Kursmaterial arbeitet gemeinsame Restriktionen sowohl über Vergleichsmodelle als auch über lineare Hypothesentests aus.',
      code: String.raw`model_ur <- lm(y ~ x1 + x2 + x3, data = df)
model_r  <- lm(y ~ x1, data = df)
anova(model_r, model_ur)`,
      output: 'Die ANOVA-Ausgabe zeigt, ob die zusätzlichen Regressoren den Fit gemeinsam signifikant verbessern.',
      miniTask: 'Erkläre, welche Nullhypothese hier getestet wird.',
      solution: 'Getestet wird, ob die zusätzlich aufgenommenen Koeffizienten im eingeschränkten Modell gemeinsam null sind.',
      pitfalls: ['ANOVA-Ausgabe zu lesen, ohne das restricted model inhaltlich zu benennen.']
    })
  },
  {
    id: 'confidence_intervals',
    title: 'Konfidenzintervalle für Koeffizienten',
    cat: 'Inferenz',
    short: 'KI',
    uses: ['t_test'],
    motivation: 'Konfidenzintervalle machen die Unsicherheit eines Koeffizienten sichtbar, ohne sie auf eine Ja-Nein-Entscheidung zu verkürzen. Das ist didaktisch wie klausurpraktisch oft informativer als der nackte p-Wert.',
    sections: [
      {
        title: 'Intervalllogik statt Punktwertfixierung',
        body: [
          'Ein Koeffizientenschätzer ist nur zusammen mit seiner Unsicherheitsumgebung sinnvoll interpretierbar. Das Konfidenzintervall gibt genau diese Umgebung auf dem gewählten Sicherheitsniveau an.',
          'Je enger das Intervall, desto präziser die Schätzung; je näher es an null liegt oder null enthält, desto schwächer die Evidenz gegen H₀: βⱼ = 0.'
        ],
        math: [String.raw`$$\hat{\beta}_j \pm t_{\alpha/2,n-k}\, se(\hat{\beta}_j)$$`]
      },
      {
        title: 'Verhältnis zum Signifikanztest',
        body: [
          'Bei einem zweiseitigen Test auf βⱼ = 0 gilt: Enthält das 95%-Intervall die Null nicht, wird H₀ auf 5%-Niveau verworfen. Diese Verbindung ist klausurwichtig, weil sie Tests und Intervalle zu einer gemeinsamen Inferenzlogik macht.',
          'Trotzdem sollte das Intervall nicht nur als Testersatz gesehen werden. Es zeigt zusätzlich die plausible Größenordnung des Effekts.'
        ]
      },
      {
        title: 'Typische Fehlinterpretationen',
        body: [
          'Ein 95%-Intervall bedeutet nicht, dass mit 95% Wahrscheinlichkeit der wahre Parameter in genau diesem realisierten Intervall liegt. Es ist eine Aussage über die Trefferquote des Verfahrens über viele Stichproben.',
          'Gerade dieser Unterschied zwischen Verfahrenswahrscheinlichkeit und einzelner Realisierung ist klausurklassisch.'
        ]
      }
    ],
    warnings: [
      {
        title: '95% = Wahrscheinlichkeit für den wahren Parameter im konkreten Intervall',
        body: 'Das Sicherheitsniveau beschreibt die Langfrist-Trefferquote des Intervallverfahrens, nicht eine subjektive Wahrscheinlichkeit für die aktuelle Intervallschätzung.'
      }
    ],
    formeln: [
      formula(
        'Konfidenzintervall',
        String.raw`$$\hat{\beta}_j \pm t_{\alpha/2,n-k}\, se(\hat{\beta}_j)$$`,
        'Intervallschätzung für einen einzelnen Koeffizienten.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Ein 95%-Konfidenzintervall für β₁ lautet [0,2; 1,1]. Was sagt das über Signifikanz, Vorzeichen und Präzision aus?',
        [
          step('Da die Null nicht im Intervall liegt, wird H₀: β₁ = 0 auf 5%-Niveau verworfen.'),
          step('Das gesamte Intervall ist positiv, daher ist auch die Richtung des Effekts positiv abgesichert.'),
          step('Die Intervallbreite zeigt die verbleibende Unsicherheit über die genaue Größenordnung.'),
          step('Das Intervall liefert also mehr Information als ein bloßes Ja/Nein zur Signifikanz.')
        ],
        'Konfidenzintervalle verbinden Signifikanzfrage und plausible Effektgröße in einer einzigen Darstellung.'
      )
    ],
    intuition: intuition({
      core: 'Ein Konfidenzintervall legt einen plausiblen Korridor um den Koeffizienten, statt die Aussage auf “signifikant / nicht signifikant” zu reduzieren.',
      analogy: 'Wie eine Taschenlampe um einen Punkt auf der Landkarte: Der Punktwert zeigt die Mitte, das Intervall die Sichtweite.',
      bridge: 'Sobald ein Intervall gegeben ist, lies zuerst Nullbezug, Vorzeichen und Breite.',
      exam: [
        { if: 'Null im Intervall liegt', then: 'verbinde das direkt mit Nicht-Verwerfen von H₀ auf dem passenden Niveau.' },
        { if: 'Intervall komplett positiv oder negativ ist', then: 'sage die Richtung des Effekts explizit an.' }
      ],
      mistakes: [
        'Das Sicherheitsniveau als subjektive Wahrscheinlichkeitsaussage für das konkrete Intervall lesen.',
        'Aus Intervallen nur Signifikanz, aber nicht Präzision und Größenordnung herauslesen.'
      ]
    }),
    mastery: [
      'Ich kann ein Koeffizientenintervall korrekt aufstellen.',
      'Ich kann die Beziehung zwischen Intervall und zweiseitigem Test erklären.',
      'Ich kann Breite, Richtung und Nullbezug eines Intervalls interpretieren.',
      'Ich kann typische Fehlinterpretationen korrigieren.'
    ]
  },
  {
    id: 'asymptotic_normality',
    title: 'Asymptotische Normalität des OLS-Schätzers',
    cat: 'Asymptotik',
    short: '√n',
    uses: ['consistency', 'covariance_matrix'],
    motivation: 'Große Stichproben begründen, warum viele Inferenzverfahren auch jenseits idealer Endlichkeitsannahmen funktionieren. Asymptotische Normalität ist dabei die zentrale Brücke.',
    sections: [
      {
        title: 'Die Grenzverteilung des skalierten Schätzfehlers',
        body: [
          'Asymptotische Normalität betrachtet nicht β̂ direkt, sondern den mit √n skalierten Schätzfehler. Dadurch wird sichtbar, dass die Stichprobenverteilung mit wachsendem n eine stabile Form annimmt.',
          'Diese Grenzform ist die Grundlage moderner großer-Stichproben-Inferenz.'
        ],
        math: [String.raw`$$\sqrt{n}(\hat{\beta}-\beta)\ \xrightarrow{d}\ \mathcal{N}(0,\Omega)$$`]
      },
      {
        title: 'Warum das praktisch wichtig ist',
        body: [
          'Selbst wenn exakte t-Verteilungen oder kleine-Stichproben-Ergebnisse nicht sauber greifen, lässt sich mit asymptotischer Normalität oft trotzdem sinnvolle Inferenz betreiben.',
          'Gerade robuste Standardfehler und viele empirische Anwendungen stützen sich genau auf diese große-Stichproben-Logik.'
        ]
      },
      {
        title: 'Was große Stichproben nicht leisten',
        body: [
          'Asymptotik heilt keine Endogenität und ersetzt keine sinnvolle Spezifikation. Große Stichproben machen einen falschen Grenzwert nur präziser sichtbar.',
          'Mehr Daten verbessern also die Form der Inferenz, aber nicht automatisch die inhaltliche Glaubwürdigkeit des Modells.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Großes n repariert alles',
        body: 'Asymptotische Normalität liefert Verteilungskontrolle, aber keine Heilung von Identifikations- oder Spezifikationsfehlern.'
      }
    ],
    formeln: [
      formula(
        'Asymptotische Normalität',
        String.raw`$$\sqrt{n}(\hat{\beta}-\beta) \xrightarrow{d} \mathcal{N}(0,\Omega)$$`,
        'Grenzverteilung des Schätzfehlers bei wachsender Stichprobengröße.',
        { '\\Omega': 'Asymptotische Kovarianzmatrix' }
      )
    ],
    aufgaben: [
      task(
        'Warum ist asymptotische Normalität eine Aussage über die Verteilung des Schätzfehlers und nicht einfach nur eine schönere Form von Konsistenz?',
        [
          step('Konsistenz sagt nur, dass β̂ gegen β konvergiert.'),
          step('Asymptotische Normalität beschreibt zusätzlich, wie sich die Verteilung des skalierten Fehlers um β verhält.'),
          step('Damit liefert sie die Basis für Approximationen von Tests, Intervallen und robusten Standardfehlern.'),
          step('Sie ist also mehr als eine Grenzwertnäherung des Punktschätzers.')
        ],
        'Konsistenz beantwortet die Frage nach dem Zielwert, asymptotische Normalität die Frage nach der Form der Unsicherheit.'
      )
    ],
    intuition: intuition({
      core: 'Mit wachsender Stichprobe wird die Verteilung des Schätzfehlers berechenbar und nähert sich einer Normalform an.',
      analogy: 'Wie bei immer mehr Münzwürfen: Das Gesamtbild wird stabiler und berechenbarer, obwohl einzelne Würfe weiter zufällig sind.',
      bridge: 'Sobald von robusten Verfahren oder großen Stichproben gesprochen wird, denke an √n-Skalierung und Grenzverteilung.',
      exam: [
        { if: 'asymptotisch normal erwähnt wird', then: 'sage, dass es um die Verteilung von √n(β̂-β) geht, nicht nur um β̂ selbst.' },
        { if: 'große Stichprobe als Begründung dient', then: 'prüfe, ob damit Inferenzapproximation oder fälschlich Identifikation gemeint ist.' }
      ],
      mistakes: [
        'Asymptotische Normalität mit Konsistenz gleichsetzen.',
        'Große Stichproben als Heilmittel für Bias ausgeben.'
      ]
    }),
    mastery: [
      'Ich kann die Grenzverteilung von √n(β̂-β) interpretieren.',
      'Ich kann Konsistenz und asymptotische Normalität unterscheiden.',
      'Ich kann erklären, warum große-Stichproben-Inferenz auf dieser Aussage aufbaut.',
      'Ich kann die Grenzen asymptotischer Aussagen benennen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 10_Asymptotische_Eigenschaften.R',
      purpose: 'Die Simulationsdatei zeigt, wie sich die Schätzerverteilung mit wachsendem n sichtbar normalisiert und verengt.',
      code: String.raw`beta_hat <- numeric()
for (i in 1:5000) {
  x <- rnorm(200)
  u <- rnorm(200)
  y <- 1 + 0.8 * x + u
  beta_hat[i] <- coef(lm(y ~ x))[2]
}
hist(beta_hat, breaks = 35, probability = TRUE)`,
      output: 'Die Histogrammform nähert sich mit größerem n der glockenförmigen Grenzverteilung an.',
      miniTask: 'Erkläre, was sich im Histogramm ändert, wenn n statt 200 nur 25 beträgt.',
      solution: 'Die Verteilung wird breiter, unruhiger und weicht stärker von der glatten Normalform ab.',
      pitfalls: ['Simulationsergebnisse nur grafisch statt inferenzlogisch zu lesen.']
    })
  },
  {
    id: 'monte_carlo',
    title: 'Monte-Carlo-Simulation als Schätzerlabor',
    cat: 'Asymptotik',
    short: 'MC-Sim',
    uses: ['unbiasedness', 'asymptotic_normality'],
    motivation: 'Monte-Carlo-Simulation übersetzt abstrakte Schätzereigenschaften in wiederholte künstliche Stichproben. Damit werden Unverzerrtheit, Varianz und asymptotische Logik sichtbar statt nur behauptet.',
    sections: [
      {
        title: 'Was in einer Monte-Carlo-Studie variiert',
        body: [
          'Das Datenentstehungsmodell bleibt fest, aber es werden viele neue Stichproben gezogen. Für jede Stichprobe wird der Schätzer erneut berechnet.',
          'Erst über diese Wiederholung wird sichtbar, ob ein Schätzer im Mittel richtig liegt, wie stark er streut und wie sich die Verteilung mit n verändert.'
        ]
      },
      {
        title: 'Warum Simulation didaktisch stark ist',
        body: [
          'Eigenschaften wie Unverzerrtheit oder Konsistenz sind Aussagen über viele potenzielle Stichproben. Monte Carlo macht genau diese Welt sichtbar und ist deshalb mehr als bloße Computergrafik.',
          'Gerade in der Ökonometrie ist das der direkte Weg von Theorie zu Interpretation.'
        ]
      },
      {
        title: 'Was eine Simulation nicht ersetzen kann',
        body: [
          'Auch eine überzeugende Monte-Carlo-Studie beweist nicht, dass reale Daten genau demselben Prozess folgen. Sie erklärt die Theorie, ersetzt aber keine inhaltliche Modellprüfung.',
          'Man muss also immer zwischen didaktischer Laborwelt und empirischer Anwendung unterscheiden.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Monte Carlo als Realitätsbeweis lesen',
        body: 'Simulationen illustrieren Theorielogik unter selbst gesetzten Annahmen. Sie belegen nicht automatisch, dass die reale Welt genauso funktioniert.'
      }
    ],
    formeln: [
      formula(
        'Simulationsmittelwert',
        String.raw`$$\overline{\hat{\beta}} = \frac{1}{S}\sum_{s=1}^S \hat{\beta}^{(s)}$$`,
        'Der Durchschnitt vieler Wiederholungsschätzungen macht Unverzerrtheit sichtbar.',
        { S: 'Anzahl der Simulationen' }
      )
    ],
    aufgaben: [
      task(
        'Warum ist Monte Carlo besonders hilfreich, um den Unterschied zwischen “unverzerrt” und “präzise” zu verstehen?',
        [
          step('Über viele Simulationen kann der Mittelwert der Schätzungen mit dem wahren Parameter verglichen werden.'),
          step('Gleichzeitig zeigt die Streuung der Schätzungen, wie präzise oder unpräzise der Schätzer ist.'),
          step('Damit werden Erwartungstreue und Varianz als zwei getrennte Eigenschaften sichtbar.'),
          step('Genau das ist in einer einzelnen Stichprobe nicht beobachtbar.')
        ],
        'Monte Carlo macht aus abstrakten Schätzereigenschaften beobachtbare Muster über Wiederholungsstichproben.'
      )
    ],
    intuition: intuition({
      core: 'Monte Carlo ist das Experimentierlabor der Ökonometrie: gleiche Theorie, viele künstliche Stichproben, sichtbare Schätzereigenschaften.',
      analogy: 'Wie ein Windkanal im Ingenieurwesen: Das Modell wird unter kontrollierten Bedingungen immer wieder getestet, um sein Verhalten sichtbar zu machen.',
      bridge: 'Wenn im Kurs eine Simulation auftaucht, frage immer: Welche Eigenschaft des Schätzers soll gerade sichtbar werden?',
      exam: [
        { if: 'ein Histogramm vieler β̂-Werte gezeigt wird', then: 'lies Lage, Streuung und Form jeweils als andere Schätzereigenschaft.' },
        { if: 'n variiert wird', then: 'denke an Präzisionsgewinn und asymptotische Stabilisierung.' }
      ],
      mistakes: [
        'Simulation nur als Codeübung statt als Schätzerdiagnose zu lesen.',
        'Mittelwert und Streuung der Simulationsverteilung nicht getrennt zu interpretieren.'
      ]
    }),
    mastery: [
      'Ich kann erklären, was in einer Monte-Carlo-Studie variiert und was fest bleibt.',
      'Ich kann Lage und Streuung der Simulationsverteilung ökonometrisch deuten.',
      'Ich kann Unverzerrtheit und Präzision in Simulationen voneinander trennen.',
      'Ich kann die Grenze zwischen didaktischer Simulation und realer Anwendung benennen.'
    ]
  },
  {
    id: 'vif_collinearity',
    title: 'Multikollinearität & Variance Inflation Factor',
    cat: 'Multikollinearität & partielle Regression',
    short: 'VIF',
    uses: ['covariance_matrix', 'functional_forms'],
    motivation: 'Hohe Korrelation unter Regressoren zerstört OLS nicht automatisch, aber sie macht Schätzer unpräzise. Der VIF ist der klassische Indikator, um genau diese Aufblähung der Unsicherheit zu lesen.',
    sections: [
      {
        title: 'Warum Multikollinearität Standardfehler aufbläht',
        body: [
          'Wenn zwei Regressoren fast dieselbe empirische Bewegung tragen, kann OLS ihre partiellen Effekte nur noch schlecht trennen. Der Schätzer bleibt unter Exogenität zwar unverzerrt, wird aber unpräzise.',
          'Die Folge sind große Standardfehler, schwache t-Werte und oft instabile Vorzeichen.'
        ]
      },
      {
        title: 'Der VIF als Diagnosezahl',
        body: [
          'Der VIF misst, wie stark die Varianz eines Koeffizienten durch lineare Abhängigkeit zu den anderen Regressoren aufgeblasen wird. Je näher das Hilfsregressions-R² an eins liegt, desto problematischer wird die Trennung.',
          'Damit ist der VIF keine exotische Kennzahl, sondern direkt mit der Schätzpräzision verbunden.'
        ],
        math: [String.raw`$$VIF_j = \frac{1}{1-R_j^2}$$`]
      },
      {
        title: 'Was man aus hoher Kollinearität folgern darf',
        body: [
          'Hohe Multikollinearität macht Effekte schwer nachweisbar, aber nicht automatisch falsch. Ein insignifikanter Koeffizient kann trotzdem Teil eines inhaltlich relevanten Blocks sein.',
          'Deshalb sind Modelllogik, gemeinsame Tests und Diagnosezahlen zusammen zu lesen.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Multikollinearität = Verzerrung',
        body: 'Kollinearität ist primär ein Präzisionsproblem. Verzerrung entsteht nicht automatisch, solange Exogenität erhalten bleibt.'
      }
    ],
    formeln: [
      formula(
        'Variance Inflation Factor',
        String.raw`$$VIF_j = \frac{1}{1-R_j^2}$$`,
        'Je größer Rⱼ² in der Hilfsregression, desto stärker die aufgeblähte Unsicherheit.',
        { 'R_j^2': 'Bestimmtheitsmaß der Hilfsregression von xⱼ auf die übrigen Regressoren' }
      )
    ],
    aufgaben: [
      task(
        'Warum kann ein Modell mit hohem Gesamt-R² einzelne insignifikante Koeffizienten haben, wenn starke Multikollinearität vorliegt?',
        [
          step('Das Modell kann y insgesamt gut erklären und damit ein hohes R² haben.'),
          step('Starke Regressorenkorrelation erschwert aber die Trennung der einzelnen partiellen Beiträge.'),
          step('Dadurch werden Standardfehler einzelner Koeffizienten groß und t-Werte klein.'),
          step('Gesamtfit und Einzelpräzision müssen deshalb getrennt gelesen werden.')
        ],
        'Multikollinearität verschlechtert die Trennschärfe einzelner Koeffizienten, nicht zwingend den Gesamtfit.'
      )
    ],
    intuition: intuition({
      core: 'Multikollinearität heißt: Die Regressoren erzählen fast dieselbe Datengeschichte, sodass ihre Einzeleffekte nur noch verschwommen auseinanderzuhalten sind.',
      analogy: 'Wie zwei Stimmen im Chor, die fast dieselbe Melodie singen: Der Gesamtsound ist klar, aber die Einzelstimme schwer herauszuhören.',
      bridge: 'Bei ungewöhnlich großen Standardfehlern trotz inhaltlich relevantem Modell immer auch an VIF und Regressorenkorrelation denken.',
      exam: [
        { if: 'VIF > 10 genannt wird', then: 'sprich von problematisch aufgeblähter Varianz, nicht automatisch von Modellversagen.' },
        { if: 'hohes R² und schwache t-Werte zusammen auftreten', then: 'denke an Kollinearität.' }
      ],
      mistakes: [
        'Kollinearität mit Exogenitätsverletzung verwechseln.',
        'Einen hohen VIF sofort mit dem Weglassen einer wichtigen Variablen beantworten.'
      ]
    }),
    mastery: [
      'Ich kann Multikollinearität als Präzisionsproblem erklären.',
      'Ich kann den VIF inhaltlich lesen.',
      'Ich kann hohes R² und schwache Einzeltests gemeinsam deuten.',
      'Ich kann zwischen perfekter und hoher, aber nicht perfekter Kollinearität unterscheiden.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 07_Multikollinearität.R',
      purpose: 'Das R-Material zeigt die Hilfsregressionslogik hinter dem VIF und den Einfluss auf Standardfehler.',
      code: String.raw`model <- lm(y ~ x1 + x2 + x3, data = df)
aux   <- lm(x2 ~ x1 + x3, data = df)
R2j   <- summary(aux)$r.squared
VIF2  <- 1 / (1 - R2j)
VIF2`,
      output: 'Je näher das Hilfsregressions-R² an eins liegt, desto stärker wird die Varianz von β̂₂ aufgebläht.',
      miniTask: 'Erkläre, warum nicht der Koeffizientenwert, sondern sein Standardfehler über Kollinearitätsprobleme alarmiert.',
      solution: 'Kollinearität verändert primär die Präzision. Deshalb sieht man das Problem zuerst in großen Standardfehlern und schwachen t-Werten.',
      pitfalls: ['Hohe VIF-Werte zu melden, ohne die ökonomische Rolle der betroffenen Regressoren zu diskutieren.']
    })
  },
  {
    id: 'fwl_partial_regression',
    title: 'Frisch-Waugh-Lovell & partielle Regression',
    cat: 'Multikollinearität & partielle Regression',
    short: 'FWL',
    uses: ['partial_effects', 'vif_collinearity'],
    motivation: 'Das FWL-Theorem zeigt am klarsten, was ein multipler OLS-Koeffizient wirklich misst: den Zusammenhang zwischen bereinigten Resten von y und xⱼ nach Herausrechnung aller anderen Regressoren.',
    sections: [
      {
        title: 'Die bereinigte Sicht auf einen Koeffizienten',
        body: [
          'FWL sagt, dass der Koeffizient von xⱼ im multiplen Modell identisch zu der Steigung ist, die entsteht, wenn sowohl y als auch xⱼ zunächst auf die übrigen Regressoren regressiert und dann die Residuen gegeneinander regressiert werden.',
          'Damit wird ceteris paribus geometrisch sichtbar: Es zählt nur noch der Teil von xⱼ, der nicht schon in den anderen Regressoren steckt.'
        ]
      },
      {
        title: 'Warum das für Interpretation und Diagnose hilft',
        body: [
          'FWL macht unmittelbar sichtbar, warum hohe Kollinearität Standardfehler vergrößert: Wenn nach der Bereinigung kaum noch Variation in xⱼ übrig bleibt, wird der partielle Zusammenhang schwer messbar.',
          'Gleichzeitig ist das Theorem die sauberste Übersetzung der multiplen Koeffizienteninterpretation in eine zweistufige Rechenlogik.'
        ],
        math: [String.raw`$$\hat{\beta}_j = \frac{\tilde{x}_j'\tilde{y}}{\tilde{x}_j'\tilde{x}_j}$$`]
      },
      {
        title: 'Didaktischer Mehrwert',
        body: [
          'FWL ist mehr als ein Beweiswerkzeug. Es trennt Rohkorrelation von partiellem Effekt und erklärt, warum ein Koeffizient sich verändert, wenn Kontrollvariablen hinzukommen.',
          'Gerade diese Veränderung ist in der Ökonometrie oft inhaltlich der interessanteste Teil des Modells.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Partiellen Effekt als rohe Korrelation lesen',
        body: 'FWL zeigt gerade, dass im multiplen Modell nur die bereinigte, nicht die rohe Bewegung zählt.'
      }
    ],
    formeln: [
      formula(
        'FWL-Steigung',
        String.raw`$$\hat{\beta}_j = \frac{\tilde{x}_j'\tilde{y}}{\tilde{x}_j'\tilde{x}_j}$$`,
        'Regressiere Residuen von y auf Residuen von xⱼ nach Herausrechnung der anderen Regressoren.',
        { '\\tilde{x}_j': 'Residualisierte Variante von xⱼ', '\\tilde{y}': 'Residualisierte Variante von y' }
      )
    ],
    aufgaben: [
      task(
        'Warum erklärt FWL, dass ein Koeffizient sich verändert, wenn eine zusätzliche Kontrollvariable aufgenommen wird?',
        [
          step('Die zusätzliche Kontrollvariable zieht zuerst einen Teil der Variation aus y und aus dem betroffenen Regressor heraus.'),
          step('Der Koeffizient misst danach nur noch den Zusammenhang der bereinigten Restbewegung.'),
          step('Wenn die Kontrollvariable relevant ist, verändert sich genau dieser bereinigte Zusammenhang.'),
          step('Der neue Koeffizient ist also kein Rechenfehler, sondern Ausdruck einer anderen ceteris-paribus-Frage.')
        ],
        'Kontrollvariablen verändern Koeffizienten, weil sie die partielle Vergleichsbasis neu definieren.'
      )
    ],
    intuition: intuition({
      core: 'FWL sagt: Ein multipler Koeffizient ist der Zusammenhang dessen, was von xⱼ und y übrig bleibt, nachdem alles andere herausgerechnet wurde.',
      analogy: 'Wie zwei Spuren in einer Tonaufnahme, aus denen erst die Hintergrundmusik entfernt wird, damit die eigentliche Stimme hörbar wird.',
      bridge: 'Bei jeder ceteris-paribus-Interpretation kannst du gedanklich an residualisierte Größen denken.',
      exam: [
        { if: 'Kontrollvariable wird hinzugefügt', then: 'frage, welcher Teil der Variation jetzt herausgerechnet wird.' },
        { if: 'partielle Regression erwähnt wird', then: 'übersetze sie sofort in Residuen-auf-Residuen-Logik.' }
      ],
      mistakes: [
        'FWL nur als algebraischen Sonderbeweis behandeln.',
        'Residualisierung mit Weglassen von Variablen verwechseln.'
      ]
    }),
    mastery: [
      'Ich kann FWL in Worten erklären.',
      'Ich kann die Residuen-auf-Residuen-Logik formulieren.',
      'Ich kann FWL mit ceteris-paribus-Interpretation verbinden.',
      'Ich kann erklären, warum Kontrollvariablen Koeffizienten verändern.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: Tutorium_7.R',
      purpose: 'Im Tutorium wird die partielle Regression explizit nachgebaut, um die Koeffizientenlogik hinter OLS sichtbar zu machen.',
      code: String.raw`res_y  <- resid(lm(y  ~ x2 + x3, data = df))
res_x1 <- resid(lm(x1 ~ x2 + x3, data = df))
coef(lm(res_y ~ res_x1))[2]
coef(lm(y ~ x1 + x2 + x3, data = df))[2]`,
      output: 'Beide Zahlen stimmen überein und machen das FWL-Theorem rechnerisch greifbar.',
      miniTask: 'Erkläre, warum der Vergleich der beiden Koeffizienten ein Beleg für die partielle Interpretation ist.',
      solution: 'Weil er zeigt, dass der multiple OLS-Koeffizient genau dem Zusammenhang der residualisierten Größen entspricht.',
      pitfalls: ['Die Interzepte in den Hilfsregressionen zu ignorieren und dadurch andere Residuen zu erzeugen.']
    })
  },
  {
    id: 'heteroskedasticity',
    title: 'Heteroskedastizität erkennen & deuten',
    cat: 'Robuste Inferenz',
    short: 'Hetero',
    uses: ['gauss_markov', 'error_variance'],
    motivation: 'Heteroskedastizität ist der Standardfall, in dem OLS-Koeffizienten oft noch brauchbar sind, die klassische Inferenz aber brüchig wird. Deshalb muss der Unterschied zwischen Punktschätzung und Unsicherheit hier besonders sauber sitzen.',
    sections: [
      {
        title: 'Was Heteroskedastizität bedeutet',
        body: [
          'Heteroskedastizität liegt vor, wenn die Fehlervarianz nicht konstant ist, sondern mit X oder systematisch mit dem Niveau der Beobachtungen variiert.',
          'Typisch sind Fächerformen in Residuenplots: Bei kleinen x ist die Streuung gering, bei großen x stark.'
        ],
        math: [String.raw`$$\operatorname{Var}(u_i\mid X_i) = \sigma_i^2 \neq \sigma^2$$`]
      },
      {
        title: 'Was bleibt und was bricht',
        body: [
          'Unter Exogenität können OLS-Koeffizienten trotz Heteroskedastizität weiterhin unverzerrt und konsistent sein. Die klassische Varianzformel und damit Standardfehler, t- und F-Tests werden jedoch falsch.',
          'Deshalb ist Heteroskedastizität primär ein Inferenzproblem, nicht automatisch ein Biasproblem.'
        ]
      },
      {
        title: 'Warum Residuenplots didaktisch wichtig sind',
        body: [
          'Der Residuenplot ist die schnellste visuelle Diagnose: Gleichmäßige Streuung spricht für Homoskedastizität, Fächer- oder Trichterformen für Verletzungen.',
          'Gerade in Ökonometrie hilft dieser Plot, Theorie über Fehlerstruktur mit realen Datenmustern zu verbinden.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Heteroskedastizität = verzerrter OLS-Schätzer',
        body: 'Solange Exogenität hält, betrifft Heteroskedastizität primär Standardfehler und Effizienz, nicht automatisch den Erwartungswert der OLS-Koeffizienten.'
      }
    ],
    formeln: [
      formula(
        'Heteroskedastische Fehlervarianz',
        String.raw`$$\operatorname{Var}(u_i\mid X_i) = \sigma_i^2$$`,
        'Die Fehlerstreuung hängt von der Beobachtung i ab.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Ein Residuenplot zeigt, dass die Streuung der Residuen mit dem Einkommen zunimmt. Was bedeutet das für OLS-Koeffizienten und klassische Standardfehler?',
        [
          step('Die konstante Fehlervarianz ist verletzt; es liegt Heteroskedastizität vor.'),
          step('Unter Exogenität können die OLS-Koeffizienten trotzdem unverzerrt bleiben.'),
          step('Die klassischen Standardfehler werden aber falsch und damit auch die üblichen t- und F-Tests unsicher.'),
          step('Eine robuste Inferenzkorrektur ist deshalb nötig.')
        ],
        'Heteroskedastizität trifft zuerst die Unsicherheitsrechnung, nicht automatisch die Punktschätzung.'
      )
    ],
    intuition: intuition({
      core: 'Heteroskedastizität heißt: Einige Beobachtungsbereiche sind viel noisiger als andere.',
      analogy: 'Wie bei Messungen mit unterschiedlicher Luftunruhe: In manchen Zonen ist das Bild stabil, in anderen flimmert es stark.',
      bridge: 'Wenn die Punktschätzung plausibel bleibt, aber die Inferenz wackelt, ist Heteroskedastizität ein Hauptverdächtiger.',
      exam: [
        { if: 'Fächerform im Residuenplot gezeigt wird', then: 'sprich sofort von Heteroskedastizität.' },
        { if: 'klassische Standardfehler gefragt sind', then: 'frage, ob Homoskedastizität plausibel ist.' }
      ],
      mistakes: [
        'Aus Heteroskedastizität sofort Endogenität ableiten.',
        'Robuste Standardfehler mit einem komplett neuen Schätzer verwechseln.'
      ]
    }),
    mastery: [
      'Ich kann Heteroskedastizität als Varianzproblem definieren.',
      'Ich kann Punktschätzung und Inferenzfolgen trennen.',
      'Ich kann Residuenplots diagnostisch lesen.',
      'Ich kann begründen, warum robuste Standardfehler hier relevant werden.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 11_Heteroskedastizität.R',
      purpose: 'Die Heteroskedastizitätsdatei verbindet simulierte Fehlerstrukturen mit Residuenplots und Vergleich klassischer versus robuster Inferenz.',
      code: String.raw`model <- lm(y ~ x, data = df)
plot(fitted(model), resid(model))
abline(h = 0, col = "red", lty = 2)`,
      output: 'Die Form der Residuenwolke zeigt, ob die Fehlerstreuung ungefähr konstant bleibt oder systematisch aufweitet.',
      miniTask: 'Beschreibe, welches Plotmuster dich an Heteroskedastizität denken lässt und warum.',
      solution: 'Ein Fächer- oder Trichtermuster zeigt, dass die Streuung mit dem Niveau der fitted values zunimmt oder abnimmt.',
      pitfalls: ['Nur auf den Mittelwert der Residuen zu schauen und die Varianzform zu ignorieren.']
    })
  },
  {
    id: 'robust_gls',
    title: 'Robuste Standardfehler, WLS & GLS',
    cat: 'Robuste Inferenz',
    short: 'robust',
    uses: ['heteroskedasticity'],
    motivation: 'Wenn Heteroskedastizität sichtbar wird, stellt sich sofort die Frage nach der Reparatur. Dabei muss sauber zwischen robuster Inferenz und einem effizienteren Schätzverfahren unterschieden werden.',
    sections: [
      {
        title: 'Robuste Standardfehler',
        body: [
          'Robuste Standardfehler lassen die OLS-Koeffizienten selbst unangetastet, korrigieren aber ihre Unsicherheitsrechnung für heteroskedastische Fehlerstrukturen. Sie sind daher die Standardantwort, wenn Identifikation plausibel ist, aber Homoskedastizität nicht.',
          'Der praktische Vorteil ist groß: Die Punktschätzung bleibt interpretierbar, die Inferenz wird belastbarer.'
        ]
      },
      {
        title: 'WLS und GLS als alternative Schätzlogik',
        body: [
          'Wenn die Struktur der Fehlerstreuung bekannt oder gut modellierbar ist, kann statt OLS ein gewichtetes oder generalisiertes Verfahren effizienter sein. Dann wird nicht nur die Unsicherheitsrechnung, sondern schon die Schätzregel selbst angepasst.',
          'WLS/GLS sind damit nicht bloß robuste Standardfehler unter anderem Namen, sondern echte Alternativen zur OLS-Schätzung.'
        ],
        math: [String.raw`$$\hat{\beta}_{GLS} = (X'\Omega^{-1}X)^{-1}X'\Omega^{-1}y$$`]
      },
      {
        title: 'Wann welche Reaktion sinnvoll ist',
        body: [
          'Robuste Standardfehler sind die konservative Standardlösung, wenn man Unsicherheit korrekt messen will. GLS/WLS lohnt sich, wenn die Varianzstruktur selbst modelliert werden kann und Effizienzgewinne realistisch sind.',
          'In Klausuren zählt deshalb die saubere Entscheidung zwischen “Schätzer bleibt, Standardfehler ändern sich” und “Schätzverfahren selbst wird transformiert”.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Robuste Standardfehler = neue Koeffizienten',
        body: 'Robuste Standardfehler verändern in der Regel nicht β̂, sondern nur die zugehörige Unsicherheitsschätzung.'
      }
    ],
    formeln: [
      formula(
        'GLS-Schätzer',
        String.raw`$$\hat{\beta}_{GLS} = (X'\Omega^{-1}X)^{-1}X'\Omega^{-1}y$$`,
        'Nutzt bekannte oder modellierte Fehlerkovarianz Ω für effizientere Schätzung.',
        { '\\Omega': 'Fehlerkovarianzmatrix' }
      ),
      formula(
        'Robuste Inferenzidee',
        String.raw`$$\widehat{\operatorname{Var}}_{rob}(\hat{\beta}) = (X'X)^{-1}X'\hat{\Omega}X(X'X)^{-1}$$`,
        'Sandwich-Form der robusten Varianzschätzung.',
        { '\\hat{\\Omega}': 'Geschätzte heteroskedastische Fehlerstruktur' }
      )
    ],
    aufgaben: [
      task(
        'Wann würdest du in einer ökonometrischen Analyse robuste Standardfehler verwenden und wann würdest du über WLS/GLS nachdenken?',
        [
          step('Wenn OLS inhaltlich plausibel identifiziert ist, aber Homoskedastizität zweifelhaft erscheint, sind robuste Standardfehler der erste Zugriff.'),
          step('Wenn die Varianzstruktur systematisch modellierbar ist, kann WLS/GLS zusätzlich Effizienzgewinne liefern.'),
          step('Robuste Standardfehler korrigieren vor allem Inferenz; GLS verändert schon die Schätzregel.'),
          step('Die Wahl hängt also davon ab, ob nur Unsicherheit oder auch Effizienz aktiv verbessert werden soll.')
        ],
        'Robuste Inferenz und GLS lösen verwandte, aber nicht identische Probleme.'
      )
    ],
    intuition: intuition({
      core: 'Robuste Standardfehler reparieren die Brille, WLS/GLS verändert das Messverfahren selbst.',
      analogy: 'Wenn eine Kamera rauscht, kannst du entweder die Auswertung robuster machen oder die Aufnahmegewichte selbst anpassen.',
      bridge: 'Trenne immer sauber zwischen Korrektur der Inferenz und Änderung des Schätzers.',
      exam: [
        { if: 'robuste SE erwähnt werden', then: 'sage explizit, dass β̂ meist gleich bleibt.' },
        { if: 'GLS auftaucht', then: 'denke an Fehlerkovarianzmatrix und Gewichtung.' }
      ],
      mistakes: [
        'WLS/GLS als bloße kosmetische Standardfehlerkorrektur behandeln.',
        'Robuste Standardfehler einzusetzen, ohne die zugrunde liegende Identifikationsfrage zu reflektieren.'
      ]
    }),
    mastery: [
      'Ich kann robuste Standardfehler von GLS/WLS unterscheiden.',
      'Ich kann erklären, was sich bei robuster Inferenz ändert und was gleich bleibt.',
      'Ich kann die Rolle von Ω im GLS-Schätzer deuten.',
      'Ich kann situationsabhängig zwischen robustem und transformiertem Zugriff argumentieren.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 11_Heteroskedastizität.R + Tutorium_10.R',
      purpose: 'Das Kursmaterial kontrastiert klassische OLS-Inferenz, robuste Standardfehler und gewichtete Verfahren.',
      code: String.raw`library(sandwich)
library(lmtest)
model <- lm(y ~ x1 + x2, data = df)
coeftest(model, vcov = vcovHC(model, type = "HC1"))`,
      output: 'Die Koeffizienten bleiben gleich, aber Standardfehler, t-Werte und p-Werte können sich sichtbar ändern.',
      miniTask: 'Erkläre, woran du im Output erkennst, dass hier Inferenz und nicht die Punktschätzung verändert wurde.',
      solution: 'Die Estimates bleiben identisch zum OLS-Modell; nur die Unsicherheits- und Testspalten ändern sich.',
      pitfalls: ['Robuste Outputtabellen zu zitieren, ohne zu sagen, dass die Koeffizienten selbst gleich geblieben sind.']
    })
  },
  {
    id: 'autocorrelation',
    title: 'Autokorrelation & serielle Abhängigkeit',
    cat: 'Serielle Abhängigkeit',
    short: 'ρ',
    uses: ['heteroskedasticity'],
    motivation: 'Zeitreihen- oder Panelkontexte bringen häufig Fehler hervor, die nicht unabhängig über Beobachtungen laufen. Genau dann reicht der klassische OLS-Inferenzapparat nicht mehr aus.',
    sections: [
      {
        title: 'Was serielle Abhängigkeit bedeutet',
        body: [
          'Autokorrelation liegt vor, wenn Fehlerterme über die Zeit systematisch zusammenhängen. Positive Autokorrelation bedeutet etwa, dass ein positiver Fehler heute einen positiven Fehler morgen wahrscheinlicher macht.',
          'Gerade bei Zeitreihen ist diese Verletzung strukturell plausibel, weil Schocks oft nicht sofort vollständig verschwinden.'
        ],
        math: [String.raw`$$\operatorname{Cov}(u_t,u_{t-1}) \neq 0$$`]
      },
      {
        title: 'Folgen für OLS',
        body: [
          'Unter Exogenität bleiben OLS-Koeffizienten oft unverzerrt, aber klassische Standardfehler sind erneut falsch. Zusätzlich gehen Effizienzargumente aus der Gauss-Markov-Welt verloren.',
          'Autokorrelation ist damit das serielle Pendant zur Heteroskedastizität: Punktschätzung kann halten, klassische Inferenz nicht.'
        ]
      },
      {
        title: 'Durbin-Watson und intuitive Diagnose',
        body: [
          'Der Durbin-Watson-Gedanke misst, ob aufeinanderfolgende Residuen systematisch ähnlich sind. Werte deutlich unter zwei deuten auf positive Autokorrelation.',
          'Noch vor dem Test hilft oft schon ein Residuen-gegen-Zeit-Plot: glatte Laufmuster statt zufälliger Zickzackformen sind verdächtig.'
        ],
        math: [String.raw`$$DW \approx 2(1-\hat{\rho})$$`]
      }
    ],
    warnings: [
      {
        title: 'Autokorrelation mit Trend im y verwechseln',
        body: 'Entscheidend ist die serielle Struktur der Fehler, nicht nur eine sichtbare Entwicklung der Zielvariable selbst.'
      }
    ],
    formeln: [
      formula(
        'AR(1)-Fehlerintuition',
        String.raw`$$u_t = \rho u_{t-1} + \varepsilon_t$$`,
        'Standarddarstellung seriell korrelierter Fehler im einfachsten Fall.',
        { '\\rho': 'Autokorrelationsparameter' }
      ),
      formula(
        'Durbin-Watson-Näherung',
        String.raw`$$DW \approx 2(1-\hat{\rho})$$`,
        'Werte unter 2 sprechen für positive Autokorrelation.',
        {}
      )
    ],
    aufgaben: [
      task(
        'Warum ist positive Autokorrelation besonders problematisch für klassische Standardfehler im linearen Modell?',
        [
          step('Klassische Standardfehler unterstellen, dass Fehler über Beobachtungen nicht systematisch zusammenlaufen.'),
          step('Bei positiver Autokorrelation tragen benachbarte Beobachtungen ähnliche Fehler und damit weniger neue Information.'),
          step('Die klassische Unsicherheitsrechnung überschätzt dadurch oft den effektiven Informationsgehalt der Stichprobe.'),
          step('Tests werden zu optimistisch und Konfidenzintervalle zu eng.')
        ],
        'Serielle Fehlerabhängigkeit reduziert effektive Information, auch wenn n formal unverändert bleibt.'
      )
    ],
    intuition: intuition({
      core: 'Autokorrelation heißt: Fehler verschwinden nicht von einer Beobachtung zur nächsten, sondern tragen Gedächtnis.',
      analogy: 'Wie Wetterlagen: Ein warmer Tag erhöht die Wahrscheinlichkeit, dass auch der nächste Tag ungewöhnlich warm bleibt.',
      bridge: 'In Zeitreihenaufgaben immer prüfen, ob Fehler als unabhängige Einmalstörungen plausibel sind.',
      exam: [
        { if: 'DW < 2 erwähnt wird', then: 'denke an positive Autokorrelation.' },
        { if: 'Zeitstruktur im Fehler plausibel ist', then: 'sprich über serielle Abhängigkeit, nicht nur über Heteroskedastizität.' }
      ],
      mistakes: [
        'Autokorrelation nur als Eigenschaft von y statt der Fehler zu lesen.',
        'Zeitstruktur und Exogenitätsfrage vollständig zu vermischen.'
      ]
    }),
    mastery: [
      'Ich kann Autokorrelation als Fehlerkorrelation über die Zeit erklären.',
      'Ich kann Punktschätzung und Inferenzfolgen trennen.',
      'Ich kann die Durbin-Watson-Logik grob interpretieren.',
      'Ich kann serielle Abhängigkeit in Zeitreihenaufgaben diagnostisch benennen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 12_Autokorrelation.R',
      purpose: 'Das Skript simuliert seriell korrelierte Fehler und macht die Zeitstruktur im Residuenverlauf sichtbar.',
      code: String.raw`u <- arima.sim(model = list(ar = 0.7), n = 200)
plot.ts(u)
acf(u)`,
      output: 'Zeitplot und ACF zeigen, dass aufeinanderfolgende Fehler nicht unabhängig sind, sondern systematisch zusammenhängen.',
      miniTask: 'Beschreibe, wie sich positive Autokorrelation im Zeitplot typischerweise zeigt.',
      solution: 'Residuen wechseln weniger stark das Vorzeichen und laufen in längeren Blöcken über oder unter null.',
      pitfalls: ['Nur den ACF-Plot zu nennen, ohne seine inhaltliche Aussage für die Fehlerstruktur zu erklären.']
    })
  },
  {
    id: 'hac_newey_west',
    title: 'HAC / Newey-West & robuste Inferenz bei Serienabhängigkeit',
    cat: 'Serielle Abhängigkeit',
    short: 'HAC',
    uses: ['autocorrelation', 'robust_gls'],
    motivation: 'Wenn Fehler sowohl heteroskedastisch als auch seriell korreliert sein können, braucht die Inferenz einen Zugriff, der beides gleichzeitig auffängt. Genau dafür steht HAC beziehungsweise Newey-West.',
    sections: [
      {
        title: 'Warum HAC mehr ist als White robust',
        body: [
          'White-robuste Standardfehler korrigieren nur für heteroskedastische Varianzstrukturen, nicht für serielle Korrelation. HAC erweitert die Sandwich-Idee um Korrelationen über benachbarte Beobachtungen.',
          'Damit wird die Unsicherheitsrechnung für Zeitreihenkontexte deutlich realistischer.'
        ]
      },
      {
        title: 'Die Logik der Lag-Struktur',
        body: [
          'Newey-West gewichtet Kovarianzen über mehrere Lags ab und baut so eine robuste Langfristvarianz. Die Wahl der Lag-Länge ist dabei ein praktischer Abwägungsschritt zwischen zu kurzer und zu langer Gedächtnisannahme.',
          'In der Klausur reicht meist die inhaltliche Einsicht: HAC korrigiert Standardfehler für kombinierte Heteroskedastizität und Autokorrelation.'
        ]
      },
      {
        title: 'Was HAC nicht repariert',
        body: [
          'Auch HAC ändert normalerweise nicht die OLS-Koeffizienten selbst. Es liefert robustere Standardfehler für vorhandene Punktschätzungen.',
          'Identifikationsfehler, Endogenität oder ein grundsätzlich falsches dynamisches Modell werden dadurch nicht gelöst.'
        ]
      }
    ],
    warnings: [
      {
        title: 'Newey-West als neue Schätzung statt als Inferenzkorrektur lesen',
        body: 'HAC verändert in der Standardanwendung vor allem die Standardfehler, nicht automatisch die Koeffizienten.'
      }
    ],
    formeln: [
      formula(
        'HAC-Idee',
        String.raw`$$\widehat{\operatorname{Var}}_{HAC}(\hat{\beta}) = (X'X)^{-1}\hat{S}_{NW}(X'X)^{-1}$$`,
        'Robuste Varianzmatrix mit Heteroskedastizität und serieller Abhängigkeit.',
        { '\\hat{S}_{NW}': 'Newey-West-Langfristvarianzschätzer' }
      )
    ],
    aufgaben: [
      task(
        'Warum sind White-robuste Standardfehler in einer Zeitreihe mit seriell korrelierten Fehlern oft nicht ausreichend?',
        [
          step('White-robust korrigiert nur für nicht konstante Varianz, nicht für Korrelation über die Zeit.'),
          step('Wenn Fehler zusätzlich seriell zusammenhängen, bleibt ein Teil der Unsicherheitsverzerrung bestehen.'),
          step('HAC berücksichtigt genau diese kombinierte Struktur.'),
          step('Deshalb ist HAC in Zeitreihen der natürlichere robuste Inferenzzugriff.')
        ],
        'Serienabhängigkeit verlangt eine robustere Varianzschätzung als reine Heteroskedastizitätskorrektur.'
      )
    ],
    intuition: intuition({
      core: 'HAC ist die robuste Standardfehler-Antwort auf Zeitreihen, in denen Fehler sowohl unterschiedlich stark als auch über die Zeit verknüpft sein können.',
      analogy: 'Wie ein Sicherheitsabstand im Verkehr, der nicht nur auf schwankende Straßenbreite, sondern auch auf Bremsverzögerungen der vorausfahrenden Autos reagiert.',
      bridge: 'Wenn Heteroskedastizität und Autokorrelation zusammen plausibel sind, denke an HAC statt an nur White-robust.',
      exam: [
        { if: 'Newey-West fällt', then: 'sage klar: robuste Standardfehler bei Serienabhängigkeit.' },
        { if: 'Zeitreihe + robuste Inferenz gefragt ist', then: 'prüfe, ob HAC die passende Antwort ist.' }
      ],
      mistakes: [
        'HAC und GLS durcheinanderwerfen.',
        'Die Lag-Idee von Newey-West ganz zu verschweigen.'
      ]
    }),
    mastery: [
      'Ich kann HAC von White-robuster Inferenz unterscheiden.',
      'Ich kann erklären, warum HAC zu Zeitreihen passt.',
      'Ich kann HAC von GLS/WLS abgrenzen.',
      'Ich kann Newey-West als Inferenz- und nicht als Identifikationskorrektur einordnen.'
    ],
    rBlock: rBlock({
      script: 'R-Skriptpfad: 12_Autokorrelation.R',
      purpose: 'Die Kursdatei erlaubt den Übergang von Residuenstruktur zur robusten Zeitreiheninferenz.',
      code: String.raw`library(sandwich)
library(lmtest)
model <- lm(y ~ x1 + x2, data = df)
coeftest(model, vcov = NeweyWest(model, lag = 4, prewhite = FALSE))`,
      output: 'Die Estimates bleiben erhalten, aber die Standardfehler werden für serielle Abhängigkeit robust gemacht.',
      miniTask: 'Erkläre in einem Satz, warum der lag-Parameter in NeweyWest ökonomisch eine Gedächtnislänge repräsentiert.',
      solution: 'Der lag-Wert bestimmt, wie viele Nachbarschaftskovarianzen der Fehler in die robuste Langfristvarianz eingehen.',
      pitfalls: ['HAC einzusetzen, ohne zu sagen, gegen welche Fehlerstruktur die Korrektur gedacht ist.']
    })
  }
];
