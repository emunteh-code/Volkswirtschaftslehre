const textQuestion = (id, points, text, correct, feedback) => ({
  id,
  points,
  type: 'text',
  text,
  correct,
  feedback
});

const textBlock = (label, points, title, preamble, questions) => ({
  label,
  points,
  type: 'text-block',
  title,
  preamble,
  questions
});

function solutionBlock(title, paragraphs, math = []) {
  return [
    `<p><strong>${title}</strong></p>`,
    ...paragraphs.map((paragraph) => `<p>${paragraph}</p>`),
    ...math.map((eq) => `<div class="math-block">${eq}</div>`)
  ].join('');
}

export const FULL_EXAMS = {
  probeklausur_1: {
    id: 'probeklausur_1',
    title: 'Probeklausur I: Reisproduktion & lineares Modell',
    subtitle: 'Angelehnt an Probeklausur 1 aus der Übung',
    duration: 90,
    aufgaben: [
      textBlock(
        'Aufgabe 1',
        36,
        'Reisproduktion, Matrixnotation & Inferenz',
        'Ausgangspunkt ist ein Log-Log-Modell für Reisproduktion: $y_t = \\beta_1 + \\beta_2 x_{t2} + \\beta_3 x_{t3} + e_t$ mit $t=1,\\dots,43$. Interpretiere die Schätzer konsequent als Ökonometrie-Objekte und nicht nur als Rechenresultate.',
        [
          textQuestion(
            'pk1_1a',
            9,
            'Schreibe das Modell in Matrixnotation und gib die Dimensionen von $y$, $X$ und $\\beta$ an.',
            ['y = xβ + u', '43', '3', 'interzept'],
            solutionBlock(
              'Matrixform sauber aufziehen',
              [
                'Das Modell wird als $y = X\\beta + u$ geschrieben. Bei 43 Beobachtungen und zwei erklärenden Variablen plus Interzept hat die Designmatrix drei Spalten.',
                'Wichtig ist die Rollentrennung: $y$ sammelt die beobachteten logarithmierten Produktionen, $X$ enthält Interzept, $\\log(\\text{LABOUR})$ und $\\log(\\text{FERTILIZER})$, $\\beta$ ist der unbekannte Parametervektor.'
              ],
              [
                '$$y \\in \\mathbb{R}^{43 \\times 1}, \\qquad X \\in \\mathbb{R}^{43 \\times 3}, \\qquad \\beta \\in \\mathbb{R}^{3 \\times 1}.$$'
              ]
            )
          ),
          textQuestion(
            'pk1_1b',
            9,
            'Wie interpretierst du $\\hat\\beta_2$ in diesem Log-Log-Modell ökonomisch korrekt?',
            ['elastiz', '1%', 'produktion', 'arbeit'],
            solutionBlock(
              'Log-Log heißt Elastizität',
              [
                '$\\hat\\beta_2$ misst die prozentuale Änderung der erwarteten Reisproduktion, wenn der Arbeitseinsatz um 1% steigt und der Düngereinsatz konstant gehalten wird.',
                'Eine gute Klausurantwort nennt also Richtung, Prozentlogik und das ceteris-paribus-Element.'
              ],
              [
                '$$\\frac{\\partial \\log(y)}{\\partial \\log(x_{2})} = \\beta_2.$$'
              ]
            )
          ),
          textQuestion(
            'pk1_1c',
            10,
            'Nenne drei saubere Wege, um zu prüfen, ob $\\beta_3$ signifikant von Null verschieden ist.',
            ['t-test', 'konfidenzintervall', 'p-wert', 'kritischen wert'],
            solutionBlock(
              'Drei äquivalente Inferenzzugriffe',
              [
                'Erstens kann direkt die t-Statistik mit dem kritischen t-Quantil verglichen werden.',
                'Zweitens kann der p-Wert mit dem Signifikanzniveau verglichen werden.',
                'Drittens kann geprüft werden, ob das Konfidenzintervall für $\\beta_3$ die Null enthält oder nicht.'
              ],
              [
                '$$t = \\frac{\\hat\\beta_3 - 0}{se(\\hat\\beta_3)}$$',
                '$$0 \\notin CI_{1-\\alpha}(\\beta_3) \\iff \\text{Signifikanz auf Niveau } \\alpha.$$'
              ]
            )
          ),
          textQuestion(
            'pk1_1d',
            8,
            'Warum reicht ein hohes $R^2$ oder ein gutes Prognoseergebnis nicht aus, um das Modell als kausal überzeugend zu bezeichnen?',
            ['exogen', 'ovb', 'endogen', 'kausal'],
            solutionBlock(
              'Fit ist nicht Identifikation',
              [
                'Ein hohes $R^2$ zeigt nur, dass das Modell viel Variation in $y$ beschreibt. Es sagt nichts darüber, ob die Regressoren exogen sind.',
                'Kausalität braucht zusätzlich eine glaubwürdige Exogenitätsgeschichte. Bei ausgelassenen Variablen, Simultanität oder Messfehlern kann ein Modell gut passen und dennoch systematisch verzerrte Koeffizienten liefern.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 2',
        28,
        'Modellvergleich, BLUE & Exogenität',
        'Ein erweitertes Modell fügt die bepflanzte Fläche als zusätzlichen Regressor hinzu. Verglichen werden nun ein kleineres und ein größeres OLS-Modell.',
        [
          textQuestion(
            'pk1_2a',
            10,
            'Auf welcher Basis würdest du das größere Modell gegenüber dem kleineren bevorzugen oder verwerfen?',
            ['adjusted r', 'adj', 'f-test', 'theorie', 'signifikanz'],
            solutionBlock(
              'Modellwahl nie eindimensional',
              [
                'Ein sauberer Vergleich kombiniert Theorie und Statistik: angepasstes Bestimmtheitsmaß, Joint-Signifikanz des zusätzlichen Regressors und ökonomische Plausibilität.',
                'Das größere Modell ist attraktiv, wenn der neue Regressor theoretisch begründet ist und die zusätzliche Variation tatsächlich informationshaltig erklärt, ohne nur mechanisch Komplexität zu erhöhen.'
              ],
              [
                '$$H_0: \\beta_4 = 0 \\quad \\text{gegen} \\quad H_1: \\beta_4 \\neq 0.$$'
              ]
            )
          ),
          textQuestion(
            'pk1_2b',
            9,
            'Was bedeutet BLUE und unter welchen Bedingungen ist der KQ-Schätzer BLUE?',
            ['best linear unbiased estimator', 'homosked', 'exogen', 'vollrang'],
            solutionBlock(
              'BLUE vollständig auflösen',
              [
                'BLUE heißt Best Linear Unbiased Estimator. OLS ist also innerhalb der linearen unverzerrten Schätzer der varianzärmste.',
                'Dafür braucht man insbesondere lineares Modell, Zufallsstichprobe, Vollrang, Exogenität und Homoskedastizität.'
              ],
              [
                '$$E(u\\mid X)=0, \\qquad Var(u\\mid X)=\\sigma^2 I.$$'
              ]
            )
          ),
          textQuestion(
            'pk1_2c',
            9,
            'Nenne drei typische Quellen verletzter Exogenität und erkläre kurz, warum sie problematisch sind.',
            ['omitted', 'simultan', 'messfehler', 'selektion', 'endogen'],
            solutionBlock(
              'Exogenität ökonomisch prüfen',
              [
                'Typische Verletzungen sind ausgelassene relevante Variablen, Simultanität/Rückkopplung und Messfehler im Regressor.',
                'Alle drei Fälle erzeugen eine Korrelation zwischen $X$ und $u$ und verschieben damit den OLS-Koeffizienten systematisch weg vom gesuchten partiellen Effekt.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        26,
        'Autokorrelation, GLS und heteroskedastische Fehler',
        'Betrachte nun ein lineares Modell mit autoregressiven Fehlern erster Ordnung sowie eine zusätzliche Heteroskedastizitätsfrage.',
        [
          textQuestion(
            'pk1_3a',
            9,
            'Welche OLS-Annahme ist bei $e_t = \\rho e_{t-1} + v_t$ verletzt und welche Folgen hat das für Punktschätzung und Inferenz?',
            ['autokorrelation', 'serielle abhängigkeit', 'nicht blue', 'standardfehler'],
            solutionBlock(
              'Serielle Korrelation trifft vor allem die Inferenz',
              [
                'Verletzt ist die Annahme unkorrelierter Fehler. Die Fehler tragen Gedächtnis und sind damit seriell abhängig.',
                'Unter Exogenität bleiben OLS-Koeffizienten oft unverzerrt, aber OLS ist nicht mehr BLUE und klassische Standardfehler sind falsch. Tests werden typischerweise zu optimistisch.'
              ],
              [
                '$$Var(u\\mid X) \\neq \\sigma^2 I.$$'
              ]
            )
          ),
          textQuestion(
            'pk1_3b',
            9,
            'Wann verwendest du GLS und wann EGLS im Autokorrelationsmodell?',
            ['gls wenn', 'rho bekannt', 'egls', 'geschaetzt'],
            solutionBlock(
              'Bekannte versus unbekannte Fehlerstruktur',
              [
                'GLS ist möglich, wenn die Fehlerkovarianzmatrix oder der relevante Parameter $\\rho$ bekannt ist.',
                'Ist $\\rho$ unbekannt, muss er zuerst geschätzt werden. Dann arbeitet man mit EGLS beziehungsweise FGLS.'
              ],
              [
                '$$\\hat\\beta_{GLS}=(X\'\\Omega^{-1}X)^{-1}X\'\\Omega^{-1}y.$$'
              ]
            )
          ),
          textQuestion(
            'pk1_3c',
            8,
            'Worauf testet das Hypothesenpaar $H_0: \\sigma_t^2 = \\sigma^2$ gegen ein stückweise verändertes $\\sigma_t^2$ und welche Konsequenz hat ein Verwerfen von $H_0$?',
            ['heterosked', 'varianz', 'kovarianzmatrix', 'white', 'wls'],
            solutionBlock(
              'Heteroskedastizität als Varianzstruktur',
              [
                'Getestet wird auf Homoskedastizität gegen eine systematisch wechselnde Fehlervarianz.',
                'Wird $H_0$ verworfen, ist die klassische Varianzformel unpassend. Dann braucht man robuste Standardfehler oder ein gewichtetes/GLS-artiges Verfahren, falls die Struktur modellierbar ist.'
              ],
              [
                '$$H_0: Var(u\\mid X)=\\sigma^2 I \\quad \\text{gegen} \\quad H_1: Var(u\\mid X)=\\Omega \\neq \\sigma^2 I.$$'
              ]
            )
          )
        ]
      )
    ]
  },

  probeklausur_2: {
    id: 'probeklausur_2',
    title: 'Probeklausur II: NBA-Gehälter, Log-Modelle & AR(1)',
    subtitle: 'Angelehnt an Probeklausur 2 aus der Übung',
    duration: 90,
    aufgaben: [
      textBlock(
        'Aufgabe 1',
        35,
        'NBA-Gehälter: OLS, Signifikanz & Prognose',
        'Gegeben ist ein OLS-Modell für log. Jahresgehälter von NBA-Spielern mit den Regressoren Spielzeit, Alter, Punkte und Spiele pro Saison.',
        [
          textQuestion(
            'pk2_1a',
            8,
            'Wie interpretierst du den geschätzten Koeffizienten zur Spielzeit $MPG$, wenn die abhängige Variable logarithmiert ist?',
            ['semi-elast', 'prozent', 'eine zusätzliche minute', 'mpg'],
            solutionBlock(
              'Level-Regressor bei log. y',
              [
                'Wenn $\\log(WAGE)$ regressiert wird und $MPG$ im Level vorliegt, ist der Koeffizient eine Semi-Elastizität.',
                'Eine zusätzliche Minute Spielzeit verändert das erwartete Gehalt um ungefähr $100\\cdot \\hat\\beta_{MPG}$ Prozent, ceteris paribus.'
              ],
              [
                '$$\\Delta \\log(y) \\approx \\hat\\beta_{MPG} \\cdot \\Delta MPG.$$'
              ]
            )
          ),
          textQuestion(
            'pk2_1b',
            9,
            'Welche Größen brauchst du, um zu entscheiden, ob ein einzelner Koeffizient bei $\\alpha=5\\%$ und $\\alpha=1\\%$ signifikant ist?',
            ['p-wert', 't-stat', 'kritisch', 'standardfehler'],
            solutionBlock(
              'Signifikanz sauber entscheiden',
              [
                'Du brauchst entweder t-Statistik und kritisches Quantil oder direkt den p-Wert.',
                'Der Standardfehler ist nötig, um die t-Statistik aufzubauen. Eine saubere Lösung nennt außerdem das jeweilige Signifikanzniveau ausdrücklich.'
              ],
              [
                '$$t = \\frac{\\hat\\beta_j - 0}{se(\\hat\\beta_j)}.$$'
              ]
            )
          ),
          textQuestion(
            'pk2_1c',
            9,
            'Was ist der Unterschied zwischen $R^2$ und angepasstem $R^2$ und warum ist das im Modellvergleich relevant?',
            ['adjusted', 'parameter', 'straft', 'modellvergleich'],
            solutionBlock(
              'Fit gegen Komplexität abwägen',
              [
                '$R^2$ steigt schwach mit zusätzlichen Regressoren fast immer an. Das angepasste $R^2$ korrigiert diesen mechanischen Anstieg um die Zahl der geschätzten Parameter.',
                'Darum eignet sich das angepasste $R^2$ besser, wenn Modelle mit unterschiedlicher Größe verglichen werden.'
              ]
            )
          ),
          textQuestion(
            'pk2_1d',
            9,
            'Was muss eine gute Prognoseantwort in einer Regressionsklausur außer dem Zahlenwert noch enthalten?',
            ['einsetzen', 'ceteris paribus', 'intervall', 'einheit', 'x0'],
            solutionBlock(
              'Prognosen sind mehr als Einsetzen',
              [
                'Eine gute Antwort benennt das Einsetzen der gegebenen Regressorwerte, die Einheit der Zielvariable und die ökonomische Lesart der Vorhersage.',
                'Wenn Unsicherheit gefragt ist, muss zusätzlich zwischen Mittelwerts- und Prognoseintervall unterschieden werden.'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 2',
        30,
        'Lernerfolg, Log-Transformation & Schätzereigenschaften',
        'Ein nichtlineares Lernmodell $L = \\alpha \\cdot F^\\gamma$ soll in ein lineares Regressionsmodell überführt und anschließend mit aggregierten Daten analysiert werden.',
        [
          textQuestion(
            'pk2_2a',
            8,
            'Wie transformierst du $L = \\alpha \\cdot F^\\gamma$ in ein lineares Regressionsmodell und wie lesen sich die neuen Variablen?',
            ['log', 'beta1', 'beta2', 'ln l', 'ln f'],
            solutionBlock(
              'Multiplikatives Modell linearisieren',
              [
                'Durch Logarithmieren erhältst du ein lineares Regressionsmodell in den Parametern.',
                'Dann ist $y_t = \\log(L_t)$, $x_{t2} = \\log(F_t)$, $\\beta_1 = \\log(\\alpha)$ und $\\beta_2 = \\gamma$.'
              ],
              [
                '$$\\log(L_t) = \\log(\\alpha) + \\gamma \\log(F_t) + e_t.$$'
              ]
            )
          ),
          textQuestion(
            'pk2_2b',
            11,
            'Was bedeutet Erwartungstreue des KQ-Schätzers und was ändert sich, wenn ausgelassene Variablen zwar relevant, aber orthogonal zu den verwendeten Regressoren sind?',
            ['unverzerrt', 'erwartungswert', 'orthogonal', 'kein bias'],
            solutionBlock(
              'Erwartungstreue gegen OVB abgrenzen',
              [
                'Erwartungstreue heißt: Der Erwartungswert des Schätzers trifft den wahren Parameter.',
                'Lässt man relevante Variablen aus, entsteht nur dann Omitted Variable Bias, wenn diese Variablen mit den verwendeten Regressoren korreliert sind. Sind sie orthogonal, fehlt zwar ökonomische Information, aber es entsteht aus diesem Grund kein systematischer Bias im interessierenden Koeffizienten.'
              ],
              [
                '$$E(\\hat\\beta \\mid X)=\\beta, \\qquad Bias(\\hat\\gamma_1)=\\beta_2\\frac{Cov(x,z)}{Var(x)}.$$'
              ]
            )
          ),
          textQuestion(
            'pk2_2c',
            11,
            'Was bedeutet $\\operatorname{plim}(b)=\\beta$ und warum ist diese Eigenschaft in der Ökonometrie nützlich?',
            ['konsistenz', 'grenzwert', 'grosses n', 'identifikation'],
            solutionBlock(
              'Konsistenz als Lernfähigkeit',
              [
                'Die Aussage bedeutet, dass der Schätzer mit wachsender Stichprobe gegen den wahren Parameter konvergiert.',
                'Das ist nützlich, weil große Stichproben dann echte Lernkraft haben. Gleichzeitig zeigt die Aussage, dass ein misspezifiziertes oder endogenes Modell auch mit großem $n$ nur präziser den falschen Grenzwert lernt.'
              ],
              [
                '$$\\operatorname{plim}_{n\\to\\infty}\\hat\\beta = \\beta.$$'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        25,
        'Autokorrelation, Durbin-Watson & Cochrane-Orcutt',
        'Für zwei Modelle werden autoregressive Fehler erster Ordnung vermutet. Die Diagnose erfolgt über Fehlerplots und Testlogik.',
        [
          textQuestion(
            'pk2_3a',
            8,
            'Formuliere ein lineares Modell mit AR(1)-Fehlern und erkläre den ökonometrischen Kern dieser Zusatzstruktur.',
            ['rho', 'u_t', 'u_t-1', 'serielle abhängigkeit'],
            solutionBlock(
              'AR(1) knapp und sauber',
              [
                'Ein Standardmodell lautet $y_t = \\beta_1 + \\beta_2 x_t + u_t$ mit $u_t = \\rho u_{t-1} + v_t$.',
                'Der Kern ist, dass heutige Fehler teilweise von gestrigen Fehlern abhängen und damit Information über die Zeit fortschreiben.'
              ],
              [
                '$$u_t = \\rho u_{t-1} + v_t, \\qquad |\\rho|<1.$$'
              ]
            )
          ),
          textQuestion(
            'pk2_3b',
            8,
            'Warum ist OLS in diesem Szenario nicht mehr BLUE und wie hilft die Durbin-Watson-Logik bei der Diagnose?',
            ['blue', 'standardfehler', 'dw', '2(1-rho)', 'autokorrelation'],
            solutionBlock(
              'Diagnose und Folgewirkung verbinden',
              [
                'Bei seriell korrelierten Fehlern ist die homoskedastische Unabhängigkeitsstruktur der Gauss-Markov-Welt verletzt. OLS verliert deshalb seine BLUE-Eigenschaft.',
                'Durbin-Watson prüft, ob benachbarte Residuen systematisch ähnlich sind. Werte deutlich unter zwei sprechen für positive, Werte über zwei für negative Autokorrelation.'
              ],
              [
                '$$DW \\approx 2(1-\\hat\\rho).$$'
              ]
            )
          ),
          textQuestion(
            'pk2_3c',
            9,
            'Was ist das Cochrane-Orcutt-Verfahren und warum landet man dabei oft bei EGLS statt bei echtem GLS?',
            ['transform', 'rho schätzen', 'egls', 'iterativ'],
            solutionBlock(
              'Cochrane-Orcutt als transformierter Schätzweg',
              [
                'Cochrane-Orcutt schätzt zunächst die serielle Fehlerstruktur, transformiert anschließend Modell und Daten und schätzt das transformierte Modell erneut.',
                'Weil $\\rho$ in der Praxis meist nicht bekannt ist, wird die Transformation mit einem geschätzten Parameter durchgeführt. Deshalb spricht man typischerweise von EGLS bzw. FGLS.'
              ]
            )
          )
        ]
      )
    ]
  },

  probeklausur_3: {
    id: 'probeklausur_3',
    title: 'Probeklausur III: Löhne, Varianz und robuste Korrekturen',
    subtitle: 'Angelehnt an Probeklausur 3 aus der Übung',
    duration: 90,
    aufgaben: [
      textBlock(
        'Aufgabe 1',
        35,
        'Lohnmodell mit Alter, Bildung und Gewerkschaft',
        'Es wird ein log-lineares Lohnmodell mit den Regressoren Alter, Bildung und Gewerkschaftsmitgliedschaft geschätzt.',
        [
          textQuestion(
            'pk3_1a',
            8,
            'Wie interpretierst du den Koeffizienten zur Bildung und den Dummy-Koeffizienten für Gewerkschaftsmitgliedschaft korrekt?',
            ['bildung', 'semi-elast', 'dummy', 'basisgruppe', 'prozent'],
            solutionBlock(
              'Bildungsrendite und Dummy sauber lesen',
              [
                'Im log-linearen Lohnmodell ist der Bildungskoeffizient eine Semi-Elastizität: Ein zusätzliches Bildungsjahr verändert den erwarteten Lohn um ungefähr $100\\cdot\\hat\\beta_{ED}$ Prozent.',
                'Der Dummy-Koeffizient misst den Niveauunterschied der Gruppe $UNION=1$ relativ zur Basisgruppe $UNION=0$, ceteris paribus.'
              ]
            )
          ),
          textQuestion(
            'pk3_1b',
            9,
            'Warum ist der Vorschlag $EXP = AGE - ED - 6$ bei gleichzeitigem Interzept problematisch?',
            ['perfekte multikollinearität', 'lineare abhängigkeit', 'dummyfalle', 'vollrang'],
            solutionBlock(
              'Abgeleitete Variable kann Rang zerstören',
              [
                'Wenn $EXP$ exakt aus Alter, Bildung und einer Konstante konstruiert wird, enthält die Designmatrix keine neue Information mehr.',
                'Mit Interzept gilt dann eine exakte lineare Beziehung zwischen Regressoren. Vollrang geht verloren und OLS ist nicht mehr eindeutig identifiziert.'
              ],
              [
                '$$EXP = AGE - ED - 6 \\;\\Longrightarrow\\; 1, AGE, ED, EXP \\text{ sind linear abhängig.}$$'
              ]
            )
          ),
          textQuestion(
            'pk3_1c',
            9,
            'Was bedeutet Effizienz und unter welchen Bedingungen ist der KQ-Schätzer effizient?',
            ['kleinste varianz', 'blue', 'homosked', 'exogen', 'linear unbiased'],
            solutionBlock(
              'Effizienz innerhalb einer Vergleichsklasse',
              [
                'Effizienz meint hier: Unter den linearen unverzerrten Schätzern besitzt OLS die kleinste Varianz.',
                'Dafür braucht man die Gauss-Markov-Bedingungen, insbesondere Exogenität, Vollrang und Homoskedastizität.'
              ]
            )
          ),
          textQuestion(
            'pk3_1d',
            9,
            'Wie formulierst du einen gemeinsamen F-Test in Matrixnotation und was ist die ökonometrische Kernaussage dieses Tests?',
            ['rβ=r', 'f-test', 'gemeinsam', 'restriktionen'],
            solutionBlock(
              'Joint Test korrekt einordnen',
              [
                'Ein gemeinsamer F-Test prüft mehrere lineare Restriktionen gleichzeitig. In Matrixnotation lautet das allgemein $H_0: R\\beta = r$.',
                'Ökonometrisch fragt der Test, ob ein ganzer Block von Parametern gemeinsam zusätzliche Erklärungskraft liefert.'
              ],
              [
                '$$H_0: R\\beta = r \\qquad \\text{gegen} \\qquad H_1: R\\beta \\neq r.$$'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 2',
        40,
        'Aggregierte OLS-Rechnung, Standardfehler und Vorhersage',
        'Gegeben sind $X\'X$, $(X\'X)^{-1}$, $X\'y$ und $y\'y$ für ein landwirtschaftliches Log-Modell.',
        [
          textQuestion(
            'pk3_2a',
            10,
            'Wie konstruierst du aus $X\'X$ und $X\'y$ den effizienten KQ-Schätzer und was sagt $\\hat\\beta_2$ in einem Log-Log-Modell aus?',
            ['(x\'x)^-1', 'x\'y', 'elastiz', 'log-log'],
            solutionBlock(
              'Aggregierte Rechengrößen genügen',
              [
                'Der OLS-Schätzer ergibt sich direkt aus den aggregierten Kreuzprodukten. Die Rohdaten müssen nicht einzeln vorliegen.',
                'Im Log-Log-Modell ist $\\hat\\beta_2$ eine Elastizität des Outputs bezüglich des Arbeitseinsatzes.'
              ],
              [
                '$$\\hat\\beta = (X\'X)^{-1}X\'y.$$'
              ]
            )
          ),
          textQuestion(
            'pk3_2b',
            10,
            'Wie bestimmst du die Fehlervarianz und den Standardfehler eines einzelnen Koeffizienten aus den gegebenen Matrizen?',
            ['ssr', 'sigma', 'n-k', 'varianz', 'diagonale'],
            solutionBlock(
              'Von SSR zur Inferenzmatrix',
              [
                'Zuerst wird die Residuenquadratsumme aus $y\'y - \\hat\\beta\'X\'y$ oder äquivalenten Größen bestimmt. Dann folgt $\\hat\\sigma^2 = SSR/(n-k)$.',
                'Der Standardfehler des $j$-ten Koeffizienten ist die Wurzel aus dem $j$-ten Diagonalelement von $\\hat\\sigma^2 (X\'X)^{-1}$.'
              ],
              [
                '$$\\widehat{Var}(\\hat\\beta\\mid X)=\\hat\\sigma^2 (X\'X)^{-1}.$$'
              ]
            )
          ),
          textQuestion(
            'pk3_2c',
            10,
            'Wie liest du ein 99%-Konfidenzintervall für $\\beta_3$ und wann ist $\\beta_3$ in diesem Rahmen signifikant?',
            ['99', '0 nicht im intervall', 'kritischer wert', 'signifikant'],
            solutionBlock(
              'Intervall und Test zusammen lesen',
              [
                'Ein 99%-Intervall beschreibt einen plausiblen Bereich für den wahren Parameter auf diesem Sicherheitsniveau.',
                'Ist die Null nicht enthalten, ist $\\beta_3$ zweiseitig auf dem zugehörigen Signifikanzniveau signifikant. Gute Antworten verbinden Intervallgrenzen, Richtung und ökonomische Interpretation.'
              ]
            )
          ),
          textQuestion(
            'pk3_2d',
            10,
            'Was unterscheidet die Prognose selbst von der Varianz des Vorhersagefehlers?',
            ['punktprognose', 'unsicherheit', 'mittelwert', 'prognoseintervall', 'x0'],
            solutionBlock(
              'Punktschätzung versus Unsicherheit',
              [
                'Die Prognose selbst ist der geschätzte Mittelwert für ein gegebenes $x_0$. Die Varianz des Vorhersagefehlers ergänzt dazu, wie unsicher diese Aussage ist.',
                'Für eine neue Beobachtung muss neben der Schätzunsicherheit auch die irreduzible Fehlervarianz des Modells mitgedacht werden.'
              ],
              [
                '$$\\hat y_0 = x_0\'\\hat\\beta, \\qquad Var(y_0-\\hat y_0 \\mid X) = \\sigma^2 + \\sigma^2 x_0\'(X\'X)^{-1}x_0.$$'
              ]
            )
          )
        ]
      ),
      textBlock(
        'Aufgabe 3',
        15,
        'Hilfsregression, Heteroskedastizität und Korrektur',
        'Eine Hilfsregression deutet auf systematische Varianzprobleme im Ausgangsmodell hin.',
        [
          textQuestion(
            'pk3_3a',
            7,
            'Wozu dient eine Hilfsregression in diesem Zusammenhang und worauf weisen signifikante Ergebnisse typischerweise hin?',
            ['breusch', 'white', 'heterosked', 'hilfsregression', 'varianz'],
            solutionBlock(
              'Hilfsregression als Diagnosetool',
              [
                'Eine Hilfsregression prüft, ob die Varianz der Fehler systematisch mit Regressoren oder deren Transformationen zusammenhängt.',
                'Signifikante Ergebnisse sind ein Hinweis auf Heteroskedastizität. Das betrifft vor allem Standardfehler und Testentscheidungen.'
              ]
            )
          ),
          textQuestion(
            'pk3_3b',
            8,
            'Ist OLS unter Heteroskedastizität automatisch verzerrt, und welche Schätz- oder Inferenzmethode empfiehlst du dann?',
            ['nicht automatisch verzerrt', 'robuste standardfehler', 'white', 'wls', 'gls'],
            solutionBlock(
              'Bias und Varianz sauber trennen',
              [
                'Unter Exogenität bleibt OLS trotz Heteroskedastizität häufig unverzerrt; das Hauptproblem liegt bei Standardfehlern und Effizienz.',
                'Empfohlen werden White-robuste Standardfehler für verlässliche Inferenz. Ist die Varianzstruktur gut modellierbar, kann zusätzlich WLS/GLS sinnvoll sein.'
              ]
            )
          )
        ]
      )
    ]
  }
};
