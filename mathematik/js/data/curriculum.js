const formula = (label, eq, desc, variables = {}, sourceStatus = 'source-distilled') => ({
  label,
  eq,
  desc,
  variables,
  sourceStatus
});

const task = (text, steps, result, sourceStatus = 'platform-added-drill') => ({
  text,
  steps,
  result,
  sourceStatus
});

const step = (text, eq = null) => ({ text, eq });
const warning = (title, body, sourceStatus = 'source-distilled') => ({ title, body, sourceStatus });

export const CURRICULUM = [
  {
    id: 'algebra_mengen',
    title: 'Algebra, Ungleichungen & Mengen',
    cat: 'Einführung',
    short: 'E1',
    sourceRefs: [
      '01Mathe_E1_AlgebraUndMengenlehre.pdf',
      'Kleinübung/E_1_-_Algebra_und_Mengenlehre/E1_-_Aufgaben.pdf'
    ],
    motivation: 'Dieser Block sichert die algebraische Basissprache, ohne die spätere Funktionen-, Optimierungs- und Lineare-Algebra-Aufgaben unnötig an simplen Umformungen scheitern.',
    cardsTitle: 'Woran du den Aufgabentyp erkennst',
    cards: [
      { title: 'Ungleichung', value: 'erst auf Nullform bringen', note: 'Dann Fallwechsel durch Multiplikation, Nenner und Definitionsbereich getrennt prüfen.', sourceStatus: 'source-distilled' },
      { title: 'Absolutbetrag', value: 'immer als Distanz lesen', note: '$|x-a| \\le b$ ist ein Intervall um $a$; $|x-a| \\ge b$ liefert die Außenzonen.', sourceStatus: 'source-distilled' },
      { title: 'Mengenaufgabe', value: 'sprachlich und symbolisch lesen', note: 'Vereinigung, Schnitt, Komplement und Teilmenge zuerst verbal, dann formal notieren.', sourceStatus: 'source-distilled' },
      { title: 'Klausurmuster', value: 'Umformen + Zulässigkeit', note: 'Viele scheinbar neue Aufgaben prüfen nur sauberes algebraisches Sortieren plus zulässige Werte.', sourceStatus: 'platform-added-explanation' }
    ],
    sections: [
      {
        title: 'Reelle Zahlen und Regeln der Algebra',
        body: [
          'Im Einstieg werden Rechenregeln nicht als Selbstzweck gebraucht, sondern als Prüfwerkzeug: Brüche, Potenzen, Wurzeln und Vorzeichen müssen so beherrscht werden, dass spätere Funktions- und Ableitungsaufgaben nicht an elementaren Umformungen scheitern.',
          'Besonders klausurrelevant ist die saubere Trennung zwischen äquivalentem Umformen und unzulässigem Kürzen. Wer etwa über Summanden „kürzt“ oder das Vorzeichen beim Multiplizieren mit einer negativen Zahl nicht dreht, zerstört den gesamten Lösungsweg schon im ersten Schritt.'
        ],
        math: [String.raw`$$a(b+c)=ab+ac,\qquad \frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd}$$`],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Ungleichungen, Intervalle und Absolutbetrag',
        body: [
          'Ungleichungen werden in der Mathematik für Wirtschaftswissenschaftler fast immer als Bereichsaufgaben geprüft: Welche Werte sind zulässig, wo ist der Ausdruck positiv, und welche Intervalle erfüllen die Nebenbedingung?',
          'Der Absolutbetrag ist dabei kein Sondermonster, sondern eine Distanzschreibweise. Genau diese Lesart macht Aufgaben schneller: $|x-a|\\le b$ bedeutet „x liegt höchstens b Einheiten von a entfernt“.'
        ],
        math: [
          String.raw`$$|x-a|\le b \iff a-b \le x \le a+b$$`,
          String.raw`$$|x-a|\ge b \iff x \le a-b \;\text{ oder }\; x \ge a+b$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Mengenlehre als Sprache für Definitionsbereiche',
        body: [
          'Mengenlehre taucht später nicht isoliert auf, sondern in Definitionsbereichen, Lösungs- und Zulässigkeitsmengen. Deshalb ist nicht die abstrakte Symbolsammlung wichtig, sondern das Übersetzen zwischen Sprache, Intervallschreibweise und Mengenoperation.',
          'Wer eine Aufgabe mit „für alle“, „es existiert“, „Teilmenge“ oder Intervallgrenzen nicht sauber liest, baut oft schon vor dem Rechnen die falsche Lösungsmenge.'
        ],
        math: [
          String.raw`$$A\cap B = \{x \mid x\in A \text{ und } x\in B\},\qquad A\cup B = \{x \mid x\in A \text{ oder } x\in B\}$$`
        ],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('Vorzeichenfehler', 'Beim Multiplizieren oder Dividieren einer Ungleichung mit einer negativen Zahl dreht sich das Ungleichheitszeichen um.'),
      warning('Scheinkürzen', 'Über Summanden darf nicht gekürzt werden; Kürzen ist nur bei gemeinsamen Faktoren zulässig.'),
      warning('Lösungsmenge ohne Domäne', 'Rationale oder Wurzel-Ausdrücke liefern oft rechnerische Kandidaten, die wegen Definitionsbereich oder Nennerverbot ausscheiden.')
    ],
    formeln: [
      formula('Intervallschreibweise', String.raw`$$[a,b],\;(a,b),\;(-\infty,a],\;[b,\infty)$$`, 'Intervalle kodieren, ob Randpunkte erlaubt sind.', {
        a: 'linke Grenze',
        b: 'rechte Grenze'
      }),
      formula('Absolutbetrag als Distanz', String.raw`$$|x-a|$$`, 'Abstand von $x$ zum Punkt $a$ auf der Zahlengeraden.', {
        x: 'gesuchte Zahl',
        a: 'Zentrum der Distanz'
      }),
      formula('Mengenoperationen', String.raw`$$A\setminus B,\qquad A^c,\qquad A\cap B,\qquad A\cup B$$`, 'Typische Schreibweisen für Differenz, Komplement, Schnitt und Vereinigung.', {
        A: 'erste Menge',
        B: 'zweite Menge'
      }),
      formula('Äquivalentes Umformen', String.raw`$$u=v \iff u-w=v-w,\qquad u=v \iff cu=cv\;(c\neq 0)$$`, 'Grundprinzip: derselbe zulässige Schritt auf beiden Seiten.', {
        u: 'linker Ausdruck',
        v: 'rechter Ausdruck',
        w: 'gleicher Summand',
        c: 'gleicher Faktor'
      })
    ],
    aufgaben: [
      task(
        String.raw`Lösen Sie die Ungleichung $\dfrac{x-1}{x+2} \ge 0$ und geben Sie die Lösungsmenge in Intervallschreibweise an.`,
        [
          step('Kritische Punkte bestimmen: Zähler-Nullstelle und Nenner-Verbot getrennt notieren.', String.raw`x-1=0 \Rightarrow x=1,\qquad x+2=0 \Rightarrow x=-2 \text{ ist ausgeschlossen}`),
          step('Vorzeichen in den Intervallen $(-\infty,-2)$, $(-2,1)$ und $(1,\infty)$ testen.', String.raw`\frac{x-1}{x+2} \text{ ist positiv auf } (-\infty,-2)\cup(1,\infty)`),
          step('Randpunkt $x=1$ ergänzen, verbotenen Punkt $x=-2$ ausschließen.', String.raw`L=\;(-\infty,-2)\cup[1,\infty)`),
        ],
        String.raw`Die Lösungsmenge lautet $(-\infty,-2)\cup[1,\infty)$.`
      ),
      task(
        String.raw`Bestimmen Sie die Menge aller $x$, für die $|x-3| \le 5$ gilt, und erklären Sie die Lesart des Ergebnisses.`,
        [
          step('Absolutbetrag als Distanz lesen.', String.raw`|x-3|\le 5 \iff 3-5 \le x \le 3+5`),
          step('Intervall vereinfachen.', String.raw`-2 \le x \le 8`),
          step('Ökonomische Lesart formulieren.', null)
        ],
        String.raw`$x$ darf höchstens fünf Einheiten vom Zentrum $3$ entfernt sein; also $x\in[-2,8]$.`
      )
    ],
    intuition: {
      core: 'Algebraaufgaben sind meist keine Rechenkunststücke, sondern Ordnungssysteme: Du bringst einen Ausdruck in eine Form, in der Struktur und zulässige Werte sichtbar werden.',
      analogy: 'Wie beim Aufräumen eines Schreibtischs: Erst wenn gleiche Dinge zusammenliegen, erkennst du, was fehlt, was doppelt ist und was nicht dahin gehört.',
      bridge: 'Diese Basissprache taucht später in jedem Definitionsbereich, jeder Nebenbedingung und jeder Stabilitätsprüfung wieder auf.',
      exam: [
        { if: 'Nenner, Wurzel oder Logarithmus vorhanden', then: 'Immer zuerst den Definitionsbereich prüfen; erst danach umformen.' },
        { if: 'Absolutbetrag', then: 'Nicht sofort quadrieren, sondern als Distanz oder Fallunterscheidung lesen.' },
        { if: 'Mengen gefragt', then: 'Antwort in sauberer Mengen- oder Intervallschreibweise abschließen.' },
        { if: 'Ungleichung mit Vorzeichenwechsel', then: 'Bei negativer Multiplikation / Division Ungleichheitszeichen drehen.' }
      ]
    },
    mastery: [
      'Algebraische Umformungen sicher von unzulässigem Kürzen unterscheiden',
      'Ungleichungen inklusive Vorzeichenwechsel und Definitionsbereich sauber lösen',
      'Absolutbetragsaufgaben in Intervalle oder Außenzonen übersetzen',
      'Mengen, Intervalle und Lösungsbereiche formal korrekt notieren'
    ],
    links: { uses: [], usedBy: ['funktionen_gleichungen', 'exp_log_inverse', 'lineare_algebra_grundlagen', 'analysis_ableitung_grundlagen'] },
    stepProblems: [
      {
        title: 'Intervall oder Außenzone?',
        context: 'Prüfe die Struktur, bevor du rechnest.',
        steps: [
          { q: '[1. Erkennen] Was beschreibt $|x-4|\\le 2$ grundsätzlich?', answer: ['intervall'], options: { problemId: 'ma_alg_1', stepId: 'type', isDecision: true }, hint: 'Höchstens eine gewisse Distanz.', explain: '„Kleiner gleich“ beim Absolutbetrag liefert das Intervall um das Zentrum.' },
          { q: '[2. Rechnen] Welche Grenzen folgen?', answer: ['2 bis 6', '2 und 6', '-'], options: { problemId: 'ma_alg_1', stepId: 'bounds', dependsOn: 'type' }, hint: '4 minus 2 und 4 plus 2.', explain: 'Es gilt $2\\le x\\le 6$.' }
        ]
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'funktionen_gleichungen',
    title: 'Funktionen, Gleichungen & Graphen',
    cat: 'Einführung',
    short: 'E2A',
    sourceRefs: [
      '02Mathe_E2_FunktionenUndGleichungen.pdf',
      'Kleinübung/E_2_-_Funktionen_und_Gleichungen/E_2_-_Aufgaben.pdf'
    ],
    motivation: 'Hier wird die Kursgrammatik für Funktionsklassen, Definitionsbereiche, Gleichungen und Graphleseaufgaben gelegt — genau die Oberfläche, auf der spätere Analysis- und Optimierungsklausuren operieren.',
    cardsTitle: 'Standardzugriffe',
    cards: [
      { title: 'Definitionsbereich', value: 'erst zulässige x-Werte', note: 'Nenner, Wurzeln und Logarithmen liefern die typischen Sperren.', sourceStatus: 'source-distilled' },
      { title: 'Gerade aus zwei Punkten', value: 'Steigung → Achsenabschnitt', note: 'Erst $m$, dann mit einem Punkt $n$ bestimmen.', sourceStatus: 'source-distilled' },
      { title: 'Quadratische Funktion', value: 'Nullstellen + Scheitel + Vorzeichen', note: 'Diese vier Lesarten decken den Großteil der Klausurfragen ab.', sourceStatus: 'source-distilled' },
      { title: 'Graph lesen', value: 'Klasse, Lage, Steigung', note: 'Nicht nur rechnen: aus dem Graphen Funktionsart und Veränderung sprachlich identifizieren.', sourceStatus: 'platform-added-explanation' }
    ],
    sections: [
      {
        title: 'Funktion, Definitionsbereich und Wertebereich',
        body: [
          'Eine Funktion ordnet jedem zulässigen Input genau einen Output zu. In den Übungen wird das nicht abstrakt, sondern sehr konkret geprüft: Werte berechnen, zusammengesetzte Argumente wie $f(1-s)$ einsetzen, Definitions- und Wertebereich benennen.',
          'Gerade in wirtschaftswissenschaftlichen Anwendungen ist der Definitionsbereich nicht Beiwerk. Preis, Menge, Kapital oder Zeit sind oft nur auf Teilmengen sinnvoll; genau deshalb ist „wo ist die Funktion definiert?“ eine Standardfrage.'
        ],
        math: [String.raw`$$f\colon D\to W,\qquad x\mapsto f(x)$$`],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Geraden, Polynome und Gleichungen',
        body: [
          'Die Kleinübungen prüfen lineare und quadratische Gleichungen besonders oft über Geometrie: Gerade aus zwei Punkten, graphischer Schnitt zweier Geraden, Nullstellen und Extrempunkt einer quadratischen Funktion.',
          'Die sichere Klausurlesart lautet deshalb: Funktionsklasse erkennen, Standardparameter bestimmen und das Ergebnis anschließend grafisch oder ökonomisch deuten.'
        ],
        math: [
          String.raw`$$y=mx+n,\qquad m=\frac{y_2-y_1}{x_2-x_1}$$`,
          String.raw`$$x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Graphen lesen und verschobene Strukturen erkennen',
        body: [
          'Im Kurs tauchen Funktionsaufgaben häufig in gemischter Form auf: Tabelle, Punktmenge, Graph oder Funktionsgleichung. Benchmark-Niveau heißt hier: dieselbe Struktur in allen Darstellungen wiedererkennen.',
          'Deshalb gehört zur Theorie nicht nur das Rechnen, sondern auch die Lesesprache: steigend/fallend, nach oben/unten geöffnet, Schnittpunkt, Scheitel, Spiegelung, Verschiebung.'
        ],
        math: [String.raw`$$g(x)=f(x-c)+d$$`],
        sourceStatus: 'platform-added-explanation'
      }
    ],
    warnings: [
      warning('Graph ohne Domäne', 'Auch ein sauber gezeichneter Graph beantwortet die Definitionsbereichsfrage nicht automatisch; bei rationalen oder Wurzelfunktionen muss die Zulässigkeit separat geprüft werden.'),
      warning('Steigung falsch gelesen', 'Bei zwei Punkten wird oft nur die y-Differenz gelesen. Die Steigung ist immer „Änderung in y pro Änderung in x“.'),
      warning('Quadratik ohne Vorzeichenanalyse', 'Nullstellen allein reichen nicht; in vielen Klausurfragen wird das Vorzeichen zwischen und außerhalb der Nullstellen mitgeprüft.')
    ],
    formeln: [
      formula('Geradengleichung', String.raw`$$y=mx+n$$`, 'Lineare Funktion mit konstanter Steigung.', { m: 'Steigung', n: 'Achsenabschnitt' }),
      formula('Steigung aus zwei Punkten', String.raw`$$m=\frac{y_2-y_1}{x_2-x_1}$$`, 'Standardzugang, wenn nur zwei Punkte gegeben sind.', { x_1: 'erste x-Koordinate', y_1: 'erste y-Koordinate', x_2: 'zweite x-Koordinate', y_2: 'zweite y-Koordinate' }),
      formula('Quadratische Lösungsformel', String.raw`$$x_{1,2}=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$$`, 'Nullstellen einer quadratischen Gleichung $ax^2+bx+c=0$.', { a: 'Quadratkoeffizient', b: 'Linearkoeffizient', c: 'Konstante' }),
      formula('Transformation', String.raw`$$g(x)=f(x-c)+d$$`, 'Innen horizontal, außen vertikal verschieben.', { c: 'horizontale Verschiebung', d: 'vertikale Verschiebung' })
    ],
    aufgaben: [
      task(
        String.raw`Die Punkte $(-3,5)$ und $(2,-5)$ liegen auf einer Geraden. Bestimmen Sie die Geradengleichung und interpretieren Sie die Steigung sprachlich.`,
        [
          step('Steigung aus den zwei Punkten bestimmen.', String.raw`m=\frac{-5-5}{2-(-3)}=\frac{-10}{5}=-2`),
          step('Achsenabschnitt mit einem Punkt bestimmen.', String.raw`5=-2\cdot(-3)+n \Rightarrow n=-1`),
          step('Geradengleichung und Lesart formulieren.', String.raw`y=-2x-1`)
        ],
        String.raw`Die Gerade lautet $y=-2x-1$. Bei einer Einheit mehr in $x$ sinkt $y$ jeweils um $2$.`
      ),
      task(
        String.raw`Eine quadratische Funktion lautet $f(x)=-\frac{3}{2}(x+1)(x-3)$. Bestimmen Sie Nullstellen, Vorzeichenbereiche und die Art des Extrempunkts.`,
        [
          step('Nullstellen direkt aus der faktorisierten Form ablesen.', String.raw`x_1=-1,\qquad x_2=3`),
          step('Vorzeichen über Faktoren oder Vorzeichendiagramm bestimmen.', String.raw`f(x)>0 \text{ für } -1<x<3,\qquad f(x)<0 \text{ außerhalb}`),
          step('Öffnung und Extrempunktsart lesen.', String.raw`a=-\frac{3}{2}<0 \Rightarrow \text{Parabel nach unten geöffnet, also Maximum}`),
        ],
        String.raw`Nullstellen: $-1$ und $3$; zwischen ihnen ist $f$ positiv. Wegen negativem Leitkoeffizienten liegt ein Maximum vor.`
      )
    ],
    intuition: {
      core: 'Eine Funktionsaufgabe ist meistens eine Übersetzungsaufgabe: zwischen Formel, Punkt, Tabelle und Graph dieselbe Struktur erkennen.',
      analogy: 'Wie bei einer Karte, einer Wegbeschreibung und einem Satellitenbild: Die Darstellung wechselt, der Weg bleibt derselbe.',
      bridge: 'Genau diese Übersetzungsroutine brauchst du später bei Ableitungen, Optimierung und Integralen.',
      exam: [
        { if: 'Zwei Punkte', then: 'Erst Steigung, dann Achsenabschnitt — nicht gleichzeitig alles einsetzen.' },
        { if: 'Quadratik', then: 'Nullstellen, Scheitel, Öffnung und Vorzeichen gehören gedanklich zusammen.' },
        { if: 'Rational oder Wurzel', then: 'Definitionsbereich ist Teil der Aufgabe, nicht Nachgedanke.' },
        { if: 'Graph gegeben', then: 'Funktionsklasse, Extrempunkt und Vorzeichen zuerst qualitativ benennen.' }
      ]
    },
    mastery: [
      'Definitions- und Wertebereich aus Funktionsterm oder Graph sauber bestimmen',
      'Lineare und quadratische Funktionen sicher zwischen Formel, Punkten und Graph übersetzen',
      'Geraden aus zwei Punkten und Schnittpunkte von Geraden ohne Schemafehler berechnen',
      'Vorzeichen, Nullstellen und Extrempunktsart einer Quadratik klausurfest lesen'
    ],
    links: { uses: ['algebra_mengen'], usedBy: ['exp_log_inverse', 'analysis_ableitung_grundlagen', 'analysis_multivariat', 'r_begleitpraxis'] },
    stepProblems: [
      {
        title: 'Gerade aus zwei Punkten',
        context: 'Nutze zuerst nur die Punktinformationen.',
        steps: [
          { q: '[1. Steigung] Welche Formel benutzt du bei zwei Punkten?', answer: ['(y2-y1)/(x2-x1)', 'steigung'], options: { problemId: 'ma_fun_1', stepId: 'form', isDecision: true }, hint: 'Differenz y geteilt durch Differenz x.', explain: 'Die Standardformel ist $m=(y_2-y_1)/(x_2-x_1)$. ' },
          { q: '[2. Reihenfolge] Was kommt nach der Steigung: Achsenabschnitt oder Nullstelle?', answer: ['achsenabschnitt', 'n'], options: { problemId: 'ma_fun_1', stepId: 'order', dependsOn: 'form' }, hint: 'Mit einem Punkt in $y=mx+n$ einsetzen.', explain: 'Nach der Steigung bestimmst du den Achsenabschnitt.' }
        ]
      }
    ],
    rBlocks: [
      {
        title: 'Funktionen plotten und Nullstellen grob lesen',
        purpose: 'Nutze R nicht zuerst zum Rechnen, sondern zum Sichtbarmachen: Welche Form hat die Funktion, wo liegen Nullstellen und wie verändert sich der Graph?',
        script: 'R.E2: Kurven lesen und vergleichen',
        learningGoal: 'Du nutzt den Plot als Sichtbarmacher einer quadratischen Funktion und prüfst, wie der Leitkoeffizient Öffnung und Vorzeichenbereiche verändert.',
        goalBullets: [
          'Erkenne die Funktionszeile als mathematischen Kern des Blocks.',
          'Halte Nullstellen und Plotaufbau fest und beobachte nur, was das Vorzeichen des Leitkoeffizienten ändert.',
          'Nutze den Plot als Beleg für deine algebraische Lesart, nicht als Ersatz dafür.'
        ],
        code: String.raw`f <- function(x) -1.5 * (x + 1) * (x - 3)
curve(f, from = -4, to = 5, col = "steelblue", lwd = 2)
abline(h = 0, lty = 2, col = "grey50")
points(c(-1, 3), c(0, 0), pch = 19, col = "firebrick")`,
        interpretation: 'Der Plot bestätigt Form, Lage und Nullstellen. R ersetzt die algebraische Lösung nicht, macht aber sichtbar, ob deine qualitative Lesart zur Funktion passt.',
        miniTask: 'Ändere den Leitkoeffizienten auf +1.5 und beschreibe dann, was sich an Öffnung und Vorzeichenbereichen ändert.',
        taskSteps: [
          'Finde zuerst die Funktionszeile mit dem Leitkoeffizienten.',
          'Ändere nur `-1.5` zu `1.5`.',
          'Führe den Block aus und lies Öffnung, Nullstellenlage und Vorzeichenbereiche gemeinsam.',
          'Formuliere danach in Worten, was gleich bleibt und was kippt.'
        ],
        outputChecklist: [
          'Der eigentliche Beleg liegt hier im Plot, nicht in einer langen Konsolenausgabe.',
          'Prüfe zuerst, ob die Nullstellen gleich bleiben.',
          'Prüfe danach, ob die Parabel nach oben statt nach unten öffnet und wie sich daraus die Vorzeichenbereiche ändern.'
        ],
        solution: 'Mit positivem Leitkoeffizienten öffnet die Parabel nach oben. Die Nullstellen bleiben gleich, aber zwischen ihnen ist die Funktion nun negativ statt positiv.',
        solutionChanges: [
          'Ersetze nur in der Funktionsdefinition `-1.5` durch `1.5`.',
          'Lass Plotintervall, Nullachse und markierte Nullstellen stehen und führe den Plot erneut aus.'
        ],
        solutionCode: String.raw`f <- function(x) 1.5 * (x + 1) * (x - 3)
curve(f, from = -4, to = 5, col = "steelblue", lwd = 2)
abline(h = 0, lty = 2, col = "grey50")
points(c(-1, 3), c(0, 0), pch = 19, col = "firebrick")`,
        pitfalls: ['Nicht zuerst plotten und dann blind ablesen, sondern Plot und algebraische Lösung gegeneinander prüfen.', 'Bei curve() immer das Intervall so wählen, dass Nullstellen und Extrempunkte überhaupt sichtbar sind.']
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'exp_log_inverse',
    title: 'Potenz-, Exponential-, Logarithmus- & inverse Funktionen',
    cat: 'Einführung',
    short: 'E2B',
    sourceRefs: [
      '02Mathe_E2_FunktionenUndGleichungen.pdf',
      'Kleinübung/E_2_-_Funktionen_und_Gleichungen/E_2_-_Aufgaben.pdf'
    ],
    motivation: 'Diese Funktionsfamilien liefern die Sprache für Wachstum, Elastizität, Umkehrbeziehungen und linearisierte ökonomische Modelle.',
    cardsTitle: 'Klausurlesart',
    cards: [
      { title: 'Exponent auf x', value: 'Exponentialfunktion', note: 'Konstante prozentuale Veränderung statt konstanter absoluter Veränderung.', sourceStatus: 'source-distilled' },
      { title: 'x als Basis', value: 'Potenzfunktion', note: 'Exponenten steuern Krümmung und Homogenität.', sourceStatus: 'source-distilled' },
      { title: 'Umkehrfunktion', value: 'Rollenwechsel von x und y', note: 'Nur bei eindeutiger Zuordnung bzw. Monotonie sinnvoll.', sourceStatus: 'source-distilled' },
      { title: 'Logarithmus', value: 'macht Produkte zu Summen', note: 'Zentrale Rechenhilfe und später Brücke zu Wachstums- und Elastizitätslogik.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Potenz versus Exponentialfunktion',
        body: [
          'Die beiden Klassen werden in Klausuren gern verwechselt, obwohl sie unterschiedliche ökonomische Geschichten erzählen: Potenzfunktionen modellieren elastische Krümmung oder Skaleneigenschaften, Exponentialfunktionen stetiges Wachstum oder Zerfall.',
          'Die erste saubere Lesefrage lautet daher: Steht die Variable in der Basis oder im Exponenten? Erst danach lohnt Rechnen.'
        ],
        math: [String.raw`$$f(x)=x^a,\qquad g(x)=b^x,\qquad h(x)=e^{kx}$$`],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Logarithmus als Umkehrung und Rechenwerkzeug',
        body: [
          'Der natürliche Logarithmus ist die Umkehrfunktion von $e^x$. Im Kurs ist er vor allem ein Werkzeug zum Lösen exponentieller Gleichungen und zum Umschreiben von Produkten, Quotienten und Potenzen.',
          'Die wichtigste Domänenregel ist nicht verhandelbar: Der Logarithmus ist nur für strikt positive Argumente definiert.'
        ],
        math: [
          String.raw`$$\ln(ab)=\ln a+\ln b,\qquad \ln\!\left(\frac{a}{b}\right)=\ln a-\ln b,\qquad \ln(a^n)=n\ln a$$`,
          String.raw`$$\ln(e^x)=x,\qquad e^{\ln x}=x\;(x>0)$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Inverse Funktionen und inverse Nachfrage',
        body: [
          'Eine Umkehrfunktion beantwortet dieselbe Beziehung aus der anderen Richtung: statt „welche Menge bei gegebenem Preis?“ nun „welcher Preis bei gegebener Menge?“.',
          'Gerade für ökonomische Anwendungen ist das wichtig, weil Graphen oft in inverser Form gelesen werden. Wer $Q(P)$ und $P(Q)$ vertauscht, liest Achsen und Steigungen falsch.'
        ],
        math: [String.raw`$$y=f(x)\;\Rightarrow\;x=f^{-1}(y)$$`],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('Logarithmus ohne Positivität', '$\\ln(x)$, $\\ln(2x-1)$ oder $\\ln(a/b)$ sind nur sinnvoll, wenn das gesamte Argument positiv ist.'),
      warning('Inverse Nachfrage vertauscht', 'Bei $Q(P)$ und $P(Q)$ ändern sich nicht nur Symbole, sondern auch Achsenrolle und Steigungsinterpretation.'),
      warning('Potenz und Exponential verwechselt', '„+3 pro Schritt“ ist linear, „mal 1,03 pro Schritt“ ist exponentiell; $x^a$ ist wieder etwas anderes.')
    ],
    formeln: [
      formula('Logarithmengesetze', String.raw`$$\ln(ab)=\ln a+\ln b,\qquad \ln\!\left(\frac{a}{b}\right)=\ln a-\ln b$$`, 'Produkte werden additiv, Quotienten subtraktiv.', { a: 'positiver erster Faktor', b: 'positiver zweiter Faktor' }),
      formula('Exponentielle Gleichung lösen', String.raw`$$e^{kt}=c \iff t=\frac{\ln c}{k}$$`, 'Standardmuster für Wachstum, Halbwerts- oder Verdopplungszeit.', { k: 'Wachstums- oder Zerfallsrate', t: 'Zeit', c: 'positiver Zielwert' }),
      formula('Inverse Funktion', String.raw`$$f^{-1}(y)=x \iff f(x)=y$$`, 'Rollenwechsel zwischen Input und Output.', { f: 'ursprüngliche Funktion', 'f^{-1}': 'Umkehrfunktion' }),
      formula('Log-Differenz', String.raw`$$\ln Y_t-\ln Y_{t-1}\approx \frac{Y_t-Y_{t-1}}{Y_{t-1}}$$`, 'Näherung der Wachstumsrate bei kleinen Veränderungen.', { 'Y_t': 'aktueller Wert', 'Y_{t-1}': 'Vorperiodenwert' })
    ],
    aufgaben: [
      task(
        String.raw`Lösen Sie $e^{0{,}04t}=1{,}2$ nach $t$ und erklären Sie die Rolle des Logarithmus.`,
        [
          step('Auf beiden Seiten den natürlichen Logarithmus anwenden.', String.raw`0{,}04t=\ln(1{,}2)`),
          step('Nach $t$ isolieren.', String.raw`t=\frac{\ln(1{,}2)}{0{,}04}`),
          step('Interpretation: Der Logarithmus „holt“ den Exponenten herunter.', null)
        ],
        String.raw`$t=\ln(1{,}2)/0{,}04$. Der Logarithmus ist genau das Werkzeug, das exponentielle Beziehungen linearisiert.`
      ),
      task(
        String.raw`Gegeben sei $Q(P)=60-3P$. Bestimmen Sie die inverse Nachfrage $P(Q)$ und erläutern Sie, was sich an der Lesart des Graphen ändert.`,
        [
          step('Nach $P$ auflösen.', String.raw`3P=60-Q \Rightarrow P(Q)=20-\frac{Q}{3}`),
          step('Achsenzuordnung sprachlich formulieren.', null),
          step('Steigungsinterpretation sauber abschließen.', null)
        ],
        String.raw`Die inverse Nachfrage lautet $P(Q)=20-\tfrac{Q}{3}$. Im Graphen steht nun der Preis auf der vertikalen Achse und die Steigung gibt Preisänderung pro Mengeneinheit an.`
      )
    ],
    intuition: {
      core: 'Logarithmus und Umkehrfunktion sind Lesewerkzeuge: Sie machen dieselbe Beziehung in einer anderen, oft klausurfreundlicheren Form sichtbar.',
      analogy: 'Wie zwei Ansichten derselben Strecke: einmal in Kilometern, einmal in Fahrzeit. Die Realität bleibt dieselbe, aber die Deutung ändert sich.',
      bridge: 'Diese Routinen tauchen später bei Ableitungen von Log-Funktionen, Wachstumsnäherungen und inversen ökonomischen Kurven wieder auf.',
      exam: [
        { if: 'e^{kt}=c', then: 'Mit ln linearisieren; Positivität von c mitdenken.' },
        { if: 'ln(Ausdruck)', then: 'Domäne zuerst: Argument muss positiv sein.' },
        { if: 'inverse Funktion', then: 'Variablen tauschen und anschließend nach der neuen Zielgröße auflösen.' },
        { if: 'Log-Differenz', then: 'Als Näherung relativer Änderung lesen, nicht als exakte Prozentzahl in jedem Fall.' }
      ]
    },
    mastery: [
      'Potenz-, Exponential- und Logarithmusfunktionen sicher unterscheiden',
      'Exponentielle Gleichungen mit dem Logarithmus systematisch lösen',
      'Inverse Funktionen und inverse Nachfrage korrekt bilden und lesen',
      'Logarithmengesetze nur bei zulässiger positiver Domäne fehlerfrei anwenden'
    ],
    links: { uses: ['funktionen_gleichungen'], usedBy: ['analysis_ableitung_grundlagen', 'analysis_monotonie_grenzwerte', 'integralrechnung', 'r_begleitpraxis'] },
    stepProblems: [
      {
        title: 'Log oder inverse Funktion?',
        context: 'Wähle zuerst den richtigen Zugriff.',
        steps: [
          { q: '[1. Struktur] Was ist der erste Schritt bei $e^{0,05t}=2$?', answer: ['ln', 'logarithmus'], options: { problemId: 'ma_log_1', stepId: 'first', isDecision: true }, hint: 'Den Exponenten „herunterholen“.', explain: 'Du wendest den Logarithmus auf beide Seiten an.' },
          { q: '[2. Domäne] Darf man $\\ln(-3)$ in den reellen Zahlen bilden?', answer: ['nein', 'no'], options: { problemId: 'ma_log_1', stepId: 'dom', dependsOn: 'first' }, hint: 'Das Argument muss positiv sein.', explain: 'Nein, der reelle Logarithmus ist nur für positive Argumente definiert.' }
        ]
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'summen_logik_beweise',
    title: 'Summen, Logik & Beweise',
    cat: 'Einführung',
    short: 'E3',
    sourceRefs: [
      '03Mathe_E3_SummenUndLogik.pdf',
      'Kleinübung/E_3_-_Summen_und_Logik/E_3_-_Aufgaben.pdf'
    ],
    motivation: 'Dieser Block macht Rechenausdrücke kompakt, Argumente sauber und Begründungen explizit — genau das braucht man später in Matrixformeln, Statistiknotation und ökonomischen Beweisskizzen.',
    cardsTitle: 'Was hier typischerweise geprüft wird',
    cards: [
      { title: 'Summenzeichen', value: 'Index + Grenze + Summand', note: 'Die erste Kontrollfrage lautet immer: Wer läuft, von wo bis wo, und was wird addiert?', sourceStatus: 'source-distilled' },
      { title: 'Doppelsumme', value: 'äußere und innere Schleife', note: 'Reihenfolge bewusst lesen; nicht jeden Index mit jeder Variablen verwechseln.', sourceStatus: 'source-distilled' },
      { title: 'Logik', value: 'Aussageform zuerst klären', note: 'Implikation, Äquivalenz, Negation und Quantoren sind Lesefragen, bevor sie Rechnungsfragen werden.', sourceStatus: 'source-distilled' },
      { title: 'Beweis', value: 'Behauptung → Strategie → Schluss', note: 'Im Kurs reichen saubere Standardschemata, kein formalistischer Selbstzweck.', sourceStatus: 'platform-added-explanation' }
    ],
    sections: [
      {
        title: 'Summenzeichen, Doppelsummen und Produktzeichen',
        body: [
          'Das Summenzeichen ist die kompakte Schreibweise für wiederholtes Addieren. Klausurrelevant ist dabei weniger eine einzelne Spezialformel als das sichere Lesen: Startindex, Endindex und Summand sauber identifizieren.',
          'Genau dieselbe Logik trägt später Matrixnotation, Statistikformeln und Regressionsschreibweisen.'
        ],
        math: [
          String.raw`$$\sum_{i=1}^n a_i,\qquad \sum_{i=1}^n\sum_{j=1}^m a_{ij},\qquad \prod_{i=1}^n a_i$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Logik als Lesewerkzeug',
        body: [
          'Viele mathematische Fehler sind in Wahrheit Logikfehler: eine Implikation als Äquivalenz lesen, Quantoren vertauschen oder eine Negation falsch setzen.',
          'Deshalb gehört Logik in dieses Modul nicht als Philosophie, sondern als Werkzeug zum Lesen und Prüfen von Behauptungen.'
        ],
        math: [
          String.raw`$$A\Rightarrow B,\qquad A\Leftrightarrow B,\qquad \neg A,\qquad \forall x,\qquad \exists x$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Beweisschemata, die im Kurs tatsächlich tragen',
        body: [
          'Die Vorlesung behandelt Beweise nicht als abstraktes Hochschulsymbol, sondern als wiederkehrende Standardschemata: direktes Begründen, Kontraposition, Widerspruch und vollständige Induktion in einfacher Form.',
          'Für die Klausur zählt weniger die perfekte formale Ausstaffierung als die saubere Struktur: Was ist die Behauptung, welches Werkzeug passt, und wo ist der logische Schluss?'
        ],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('Indexchaos', 'Bei Summen und Doppelsummen wird häufig nicht sauber getrennt, welche Variable gerade läuft und welche als fest behandelt wird.'),
      warning('Implikation als Äquivalenz', 'Aus „wenn A, dann B“ folgt nicht automatisch „wenn B, dann A“.'),
      warning('Beweis ohne Schluss', 'Viele Antworten beginnen richtig, nennen aber am Ende nicht klar, welche Behauptung damit tatsächlich gezeigt wurde.')
    ],
    formeln: [
      formula('Summenzeichen', String.raw`$$\sum_{i=1}^n a_i$$`, 'Addiert die Folgenglieder $a_1$ bis $a_n$.', { i: 'Laufindex', n: 'oberer Summenrand', 'a_i': 'i-tes Summenglied' }),
      formula('Doppelsumme', String.raw`$$\sum_{i=1}^n\sum_{j=1}^m a_{ij}$$`, 'Zweifaches Summieren über zwei Indizes.', { i: 'äußerer Index', j: 'innerer Index', 'a_{ij}': 'Eintrag mit zwei Indizes' }),
      formula('Produktzeichen', String.raw`$$\prod_{i=1}^n a_i$$`, 'Multiplikatives Gegenstück zum Summenzeichen.', { i: 'Laufindex', n: 'oberer Rand' }),
      formula('Kontraposition', String.raw`$$A\Rightarrow B \iff \neg B \Rightarrow \neg A$$`, 'Typischer Beweiszugang, wenn die direkte Richtung sperrig ist.', { A: 'Voraussetzung', B: 'Behauptung' })
    ],
    aufgaben: [
      task(
        String.raw`Schreiben Sie $a_1+a_2+\dots+a_n$ als Summenzeichen und erläutern Sie kurz, was der Laufindex bedeutet.`,
        [
          step('Kompakte Schreibweise notieren.', String.raw`a_1+a_2+\dots+a_n = \sum_{i=1}^n a_i`),
          step('Rolle des Index formulieren.', null),
          step('Grenzen sprachlich lesen.', null)
        ],
        String.raw`$i$ läuft von $1$ bis $n$ und wählt nacheinander jedes Summenglied $a_i$ aus.`
      ),
      task(
        String.raw`Zeigen Sie per Kontraposition: Wenn $n^2$ gerade ist, dann ist auch $n$ gerade.`,
        [
          step('Kontraposition formulieren.', String.raw`n \text{ ungerade} \Rightarrow n^2 \text{ ungerade}`),
          step('Ungerade Zahl darstellen.', String.raw`n=2k+1 \Rightarrow n^2=(2k+1)^2=4k^2+4k+1=2(2k^2+2k)+1`),
          step('Schluss zurück auf die ursprüngliche Aussage ziehen.', null)
        ],
        String.raw`Die Kontraposition ist wahr; also gilt auch: Ist $n^2$ gerade, dann ist $n$ gerade.`
      )
    ],
    intuition: {
      core: 'Summen und Logik sind Kompaktsprachen: Sie verkürzen Rechenwege und machen Aussagen präzise.',
      analogy: 'Wie Abkürzungen in einer Landkarte: Wer die Symbole nicht lesen kann, verläuft sich trotz korrekter Karte.',
      bridge: 'Diese Notation zieht sich später durch Matrizen, Statistik und ökonomische Modelle mit vielen Indizes.',
      exam: [
        { if: 'Sigma-Notation', then: 'Zuerst laut lesen: von wo bis wo und welcher Term wird summiert?' },
        { if: 'Doppelsumme', then: 'Äußeren und inneren Index nicht vertauschen.' },
        { if: 'Implikation', then: 'Nicht automatisch die Rückrichtung mitdenken.' },
        { if: 'Beweisfrage', then: 'Am Ende explizit sagen, was damit gezeigt ist.' }
      ]
    },
    mastery: [
      'Summen, Doppelsummen und Produktzeichen sicher lesen und umschreiben',
      'Logische Aussagen, Quantoren und Negationen präzise interpretieren',
      'Direkten Beweis, Kontraposition und Widerspruch als Standardschemata erkennen',
      'Saubere mathematische Begründungen statt bloßer Rechenfragmente formulieren'
    ],
    links: { uses: ['algebra_mengen'], usedBy: ['lineare_algebra_grundlagen', 'analysis_multivariat', 'r_begleitpraxis'] },
    stepProblems: [
      {
        title: 'Kontraposition erkennen',
        context: 'Beweiszugriff statt blindem Formalismus.',
        steps: [
          { q: '[1. Zugriff] Welche Standardmethode passt oft zu „Wenn A, dann B“?', answer: ['kontraposition', 'widerspruch'], options: { problemId: 'ma_sum_1', stepId: 'method', isDecision: true }, hint: 'Die Rückrichtung musst du nicht beweisen.', explain: 'Kontraposition ist ein typischer Standardzugang.' },
          { q: '[2. Form] Wie lautet die Kontraposition von $A\\Rightarrow B$?', answer: ['nicht b impliziert nicht a', '¬b => ¬a', 'neg b neg a'], options: { problemId: 'ma_sum_1', stepId: 'form', dependsOn: 'method' }, hint: 'Voraussetzung und Behauptung negiert vertauschen.', explain: 'Die Kontraposition lautet $\\neg B \\Rightarrow \\neg A$.' }
        ]
      }
    ],
    rBlocks: [
      {
        title: 'Sigma-Schreibweise in R lesen',
        purpose: 'Hier lernst du nicht primär R-Syntax, sondern die Übersetzung zwischen Sigma-/Produktnotation und aggregierendem R-Code.',
        script: 'R.E3: sum() und prod() lesen',
        learningGoal: 'Du liest eine mathematische Summe als R-Ausdruck und verstehst, was sich ändert, wenn aus $i^2$ ein $i^3$ wird.',
        goalBullets: [
          'Lies `sum((1:4)^2)` als `\\sum_{i=1}^4 i^2`.',
          'Erkenne: `1:4` erzeugt die Folge 1, 2, 3, 4; `^2` oder `^3` verändert jeden Summanden.',
          'Nutze den Output nur als Zahlenbeleg und benenne die neue Summe selbst in Worten oder Symbolen.'
        ],
        code: String.raw`x <- 1:5
sum(x)
prod(1:4)
sum((1:4)^2)`,
        mathCodeMap: [
          {
            math: String.raw`$\sum_{i=1}^4 i^2$`,
            code: 'sum((1:4)^2)',
            meaning: '1:4 erzeugt die Folge 1,2,3,4; ^2 quadriert jedes Glied; sum(...) addiert alle vier Werte.'
          },
          {
            math: String.raw`$\sum_{i=1}^4 i^3$`,
            code: 'sum((1:4)^3)',
            meaning: 'Nach deiner Änderung wird jedes Glied kubiert und erst danach aufsummiert.'
          },
          {
            math: String.raw`$\prod_{i=1}^4 i$`,
            code: 'prod(1:4)',
            meaning: 'Diese Zeile zeigt dieselbe Aggregationslogik für Produkte und bleibt heute nur Vergleichsfolie.'
          }
        ],
        coreLine: 'sum((1:4)^2)',
        coreCue: 'Ändere hier nur den Exponenten der Summanden von 2 auf 3.',
        coreEffect: 'Der Exponent verändert jeden Summanden der Folge und damit die gesamte Summe.',
        invariantHint: 'Die Folge 1 bis 4, die Vergleichszeile `prod(1:4)` und der restliche Block bleiben unverändert.',
        interpretation: 'Der Output zeigt dir nur den Zahlenwert der geänderten Summe. Die eigentliche Lernleistung ist die Rückübersetzung: Welche Sigma-Schreibweise steckt hinter genau dieser R-Zeile?',
        miniTask: 'Ersetze $(1:4)^2$ durch $(1:4)^3$ und formuliere, welche Summe du damit berechnet hast.',
        taskSteps: [
          'Finde die Zeile, die eine Summe von Quadraten berechnet.',
          'Ändere nur den Exponenten von `2` auf `3`.',
          'Führe den Code aus.',
          'Schreibe anschließend in Worten oder Symbolen auf, welche Summe jetzt berechnet wird.'
        ],
        outputEvidenceHint: 'Im Output erscheint nur der Zahlenwert der neuen Summe. Du musst selbst zurückübersetzen, dass `sum((1:4)^3)` genau `\\sum_{i=1}^4 i^3` bedeutet.',
        outputChecklist: [
          'Achte darauf, dass hier nur der Zahlenwert der geänderten Summe erscheint.',
          'Der Output zeigt nicht die Formel selbst; die Formel musst du mathematisch benennen.',
          '`prod(1:4)` und `sum(x)` sind hier Vergleichszeilen und nicht die Zielstelle deiner Änderung.'
        ],
        transferRule: 'Prüfungsregel: Lies bei `sum((1:n)^k)` immer zuerst Folge, dann Potenz auf jedem Glied, dann die abschließende Aggregation.',
        solution: 'Mit `sum((1:4)^3)` berechnest du die Summe der Kuben von 1 bis 4, also $\\sum_{i=1}^4 i^3$. Die R-Schreibweise ersetzt das Summenzeichen nicht magisch, sondern schreibt dieselbe Struktur explizit aus.',
        solutionChanges: [
          'Ändere nur den Exponenten in der letzten Zeile von `2` auf `3`.',
          'Die ersten beiden Zeilen bleiben als Vergleich für Summen- und Produktnotation unverändert.'
        ],
        solutionCode: String.raw`x <- 1:5
sum(x)
prod(1:4)
sum((1:4)^3)`,
        pitfalls: [
          'Nicht denken: „Ich programmiere etwas Neues.“ Du übersetzt hier nur eine bekannte mathematische Struktur in R.',
          'Verwechsele nicht `sum((1:4)^3)` mit dem Kubieren des Endergebnisses einer Summe. Kubiert werden die einzelnen Summanden.',
          'Lies `1:4` immer als konkrete Folge 1, 2, 3, 4 und nicht als bloßes Dekorationselement.'
        ],
        outputPlaceholder: '[Nach „Code ausführen“ erscheint hier nur der Zahlenwert der geänderten Summe.\nÜbersetze ihn anschließend selbst zurück als `sum((1:4)^3)` bzw. als `Σ i^3`-Schreibweise.]'
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'lineare_algebra_grundlagen',
    title: 'Lineare Algebra I: Matrizen, Vektoren & LGS',
    cat: 'Lineare Algebra',
    short: 'LA1',
    sourceRefs: [
      '04Mathe_LA1_LineareAlgebra1.pdf',
      'Kleinübung/LA_1_-_Matrizen_und_Matrix-Algebra/LA_I_-_Aufgaben.pdf'
    ],
    motivation: 'Lineare Algebra I liefert die Notation für Systeme, Input-Output-Zusammenhänge und spätere Datenmatrizen. Wer hier sicher liest, spart später Rechenchaos.',
    cardsTitle: 'Leseschema',
    cards: [
      { title: 'Dimensionen', value: 'immer zuerst prüfen', note: 'Vor jedem Produkt klären: passen Spaltenzahl links und Zeilenzahl rechts zusammen?', sourceStatus: 'source-distilled' },
      { title: 'Eintrag von AB', value: 'Zeile mal Spalte', note: 'Nicht elementweise multiplizieren.', sourceStatus: 'source-distilled' },
      { title: 'Transponierte', value: 'Zeilen ↔ Spalten', note: 'Besonders bei Produkten gilt die umgekehrte Reihenfolge.', sourceStatus: 'source-distilled' },
      { title: 'LGS in Matrixform', value: '$Ax=b$', note: 'Das System wird als ein Objekt lesbar — wichtig für Gauß, Invertierbarkeit und später OLS.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Matrizen, Vektoren und Typen',
        body: [
          'Die Vorlesung startet nicht mit großen Algorithmen, sondern mit Ordnung: Was ist eine $m\\times n$-Matrix, was ist ein Zeilen- oder Spaltenvektor, und welche Informationen trägt die Dimensionsangabe?',
          'Gerade diese Sprachpräzision wird in Klausuren schnell abgefragt, weil viele Rechenfehler nur verkleidete Dimensionsfehler sind.'
        ],
        math: [String.raw`$$A\in\mathbb{R}^{m\times n},\qquad x\in\mathbb{R}^n,\qquad b\in\mathbb{R}^m$$`],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Operationen und Matrixprodukte',
        body: [
          'Addition und Skalarmultiplikation laufen elementweise. Die eigentliche Kurslogik steckt aber im Matrixprodukt: eine lineare Kombination von Spalten bzw. Zeile-mal-Spalte für jeden Eintrag.',
          'Genau deshalb ist Matrixmultiplikation im Allgemeinen nicht kommutativ. Dieser Punkt ist im Kurs nicht Nebensache, sondern Kernverständnis.'
        ],
        math: [
          String.raw`$$(AB)_{ij}=\sum_{k=1}^n a_{ik}b_{kj}$$`,
          String.raw`$$(AB)^T=B^TA^T$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Matrixform linearer Gleichungssysteme',
        body: [
          'Ein lineares Gleichungssystem wird in der Matrixform $Ax=b$ lesbar und damit strukturell analysierbar. Die Frage ist dann nicht mehr nur „wie rechne ich?“, sondern „welche Matrixeigenschaft entscheidet über Lösbarkeit und Eindeutigkeit?“.',
          'Diese Umstellung ist didaktisch wichtig, weil sie direkt zu Rang, Determinante, Inverser und Eigenwerten überleitet.'
        ],
        math: [String.raw`$$\begin{aligned} a_{11}x_1+\dots+a_{1n}x_n&=b_1\\ \vdots \qquad\qquad&\vdots\\ a_{m1}x_1+\dots+a_{mn}x_n&=b_m \end{aligned}\quad\Longleftrightarrow\quad Ax=b$$`],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('Dimension ignoriert', 'Viele Produkte sind schon formal nicht definiert. Die Dimensionsprüfung ist immer der erste Schritt.'),
      warning('Elementweise statt Zeile-mal-Spalte', 'Beim Matrixprodukt wird nicht Eintrag für Eintrag multipliziert, sondern jede Zeile mit jeder Spalte verknüpft.'),
      warning('Transponieren ohne Reihenfolgewechsel', 'Für Produkte gilt $(AB)^T=B^TA^T$, nicht $A^TB^T$.')
    ],
    formeln: [
      formula('Matrixprodukt', String.raw`$$(AB)_{ij}=\sum_{k=1}^n a_{ik}b_{kj}$$`, 'Eintrag $(i,j)$ des Produkts als Zeile-mal-Spalte.', { i: 'Zeilenindex', j: 'Spaltenindex', k: 'Laufindex der Multiplikation' }),
      formula('Transponierte', String.raw`$$(AB)^T=B^TA^T$$`, 'Beim Transponieren eines Produkts kehrt sich die Reihenfolge um.', { A: 'erste Matrix', B: 'zweite Matrix' }),
      formula('Lineares Gleichungssystem', String.raw`$$Ax=b$$`, 'Kompakte Form eines Systems linearer Gleichungen.', { A: 'Koeffizientenmatrix', x: 'Vektor der Unbekannten', b: 'rechte Seite' }),
      formula('Einheitsmatrix', String.raw`$$I_nA=AI_n=A$$`, 'Neutrales Element der Matrixmultiplikation.', { 'I_n': 'Einheitsmatrix der Ordnung n' })
    ],
    aufgaben: [
      task(
        String.raw`Prüfen Sie, ob das Produkt $\left(1\;2\right)\left(\begin{smallmatrix}3\\1\end{smallmatrix}\right)$ definiert ist, und berechnen Sie es.`,
        [
          step('Dimension prüfen.', String.raw`(1\times 2)\cdot(2\times 1)\Rightarrow (1\times 1)`),
          step('Zeile-mal-Spalte rechnen.', String.raw`1\cdot 3+2\cdot 1=5`),
          step('Ergebnis sprachlich einordnen.', null)
        ],
        String.raw`Das Produkt ist definiert und ergibt den Skalar $5$.`
      ),
      task(
        String.raw`Bringen Sie das Gleichungssystem $2x+y=5$, $x-y=1$ in Matrixform und erläutern Sie, was Matrix, Variablenvektor und rechte Seite jeweils enthalten.`,
        [
          step('Koeffizienten zeilenweise notieren.', String.raw`A=\begin{pmatrix}2&1\\1&-1\end{pmatrix}`),
          step('Variablen- und RHS-Vektor ergänzen.', String.raw`x=\begin{pmatrix}x\\y\end{pmatrix},\qquad b=\begin{pmatrix}5\\1\end{pmatrix}`),
          step('Gesamtschreibweise bilden.', String.raw`Ax=b`)
        ],
        String.raw`Die Matrix enthält die Koeffizienten des Systems, $x$ die Unbekannten und $b$ die rechten Seiten.`
      )
    ],
    intuition: {
      core: 'Lineare Algebra ist verdichtete Struktur: Viele Gleichungen werden zu einem einzigen Objekt, das man lesen und prüfen kann.',
      analogy: 'Wie ein Stundenplan statt vieler einzelner Notizzettel: dieselben Informationen, aber endlich geordnet und dadurch bearbeitbar.',
      bridge: 'Diese Notation wird später bei Inversen, Rang, Eigenwerten und in datenorientierten Fächern wie Statistik oder Ökonometrie weiterverwendet.',
      exam: [
        { if: 'Produkt AB', then: 'Erst Dimension, dann Zeile-mal-Spalte.' },
        { if: 'Transponierte eines Produkts', then: 'Reihenfolge umdrehen.' },
        { if: 'LGS', then: 'Matrixform hilft, die Struktur und spätere Lösbarkeit zu sehen.' },
        { if: 'Vektoraufgabe', then: 'Zeilen- und Spaltenvektor nicht verwechseln.' }
      ]
    },
    mastery: [
      'Dimensionsprüfung vor jeder Matrixrechnung sicher durchführen',
      'Addition, Skalarmultiplikation, Matrixprodukt und Transposition fehlerfrei anwenden',
      'Den Eintrag eines Matrixprodukts als Zeile-mal-Spalte korrekt bestimmen',
      'Lineare Gleichungssysteme konsistent in Matrixform übersetzen'
    ],
    links: { uses: ['summen_logik_beweise'], usedBy: ['lineare_algebra_struktur', 'r_begleitpraxis'] },
    stepProblems: [
      {
        title: 'Zeile mal Spalte',
        context: 'Dimension zuerst, Wert danach.',
        steps: [
          { q: '[1. Prüfung] Ist $(2\\times 3)(3\\times 1)$ definiert?', answer: ['ja', 'yes'], options: { problemId: 'ma_la1_1', stepId: 'dim', isDecision: true }, hint: 'Innere Dimensionen vergleichen.', explain: 'Ja, weil die inneren Dimensionen beide 3 sind.' },
          { q: '[2. Ergebnisformat] Welche Dimension hat das Produkt?', answer: ['2x1', '2×1'], options: { problemId: 'ma_la1_1', stepId: 'shape', dependsOn: 'dim' }, hint: 'Äußere Dimensionen bleiben übrig.', explain: 'Das Produkt hat Dimension $2\\times 1$.' }
        ]
      }
    ],
    rBlocks: [
      {
        title: 'Matrizen in R aufbauen und multiplizieren',
        purpose: 'Der R-Begleiter zu LA I hilft vor allem beim Lesen: Dimensionen, Transposition und Matrixprodukt sollen sichtbar werden, nicht nur rechnerisch herausfallen.',
        script: 'R.LA I: matrix(), t() und %*%',
        code: String.raw`A <- matrix(c(1, 2, 3, 4), nrow = 2, byrow = TRUE)
B <- matrix(c(2, 0, 1, 1), nrow = 2, byrow = TRUE)
A
t(A)
A %*% B`,
        interpretation: 'R zeigt Matrix, Transponierte und Produkt in derselben Notation, die auch in der Vorlesung benutzt wird.',
        miniTask: 'Vertausche die Reihenfolge im Produkt zu `B %*% A` und beschreibe, was sich ändert.',
        solution: 'Wenn beide Produkte definiert sind, sind sie im Allgemeinen trotzdem verschieden. Genau das zeigt die Nicht-Kommutativität der Matrixmultiplikation.',
        solutionChanges: [
          'Lass die Matrixdefinitionen unverändert und ändere nur die letzte Produktzeile.',
          'Vergleiche danach das neue Ergebnis `B %*% A` direkt mit dem ursprünglichen Produkt.'
        ],
        solutionCode: String.raw`A <- matrix(c(1, 2, 3, 4), nrow = 2, byrow = TRUE)
B <- matrix(c(2, 0, 1, 1), nrow = 2, byrow = TRUE)
A
t(A)
B %*% A`,
        pitfalls: ['Matrixwerte in der falschen Zeilen-/Spaltenreihenfolge eingeben.', 'Aus einem definierten Produkt $AB$ fälschlich auf $BA$ schließen.']
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'lineare_algebra_struktur',
    title: 'Lineare Algebra II: Rang, Determinante, Inverse & Eigenwerte',
    cat: 'Lineare Algebra',
    short: 'LA2',
    sourceRefs: [
      '05Mathe_LA2_LineareAlgebra2.pdf',
      'Kleinübung/LA_2_-_Maßzahlen_von_Matrizen_und_inverse_Matrizen/LA_II_-_Aufgaben.pdf'
    ],
    motivation: 'Dieser Block macht aus Matrixrechnung echte Strukturdiagnostik: Rang, Determinante und Eigenwerte entscheiden über Eindeutigkeit, Stabilität und Lösbarkeit.',
    cardsTitle: 'Diagnostik statt bloßer Rechnung',
    cards: [
      { title: 'Spur', value: 'Summe der Diagonale', note: 'Schnellmaß, aber kein Eindeutigkeitskriterium.', sourceStatus: 'source-distilled' },
      { title: 'Rang', value: 'Zahl linear unabhängiger Zeilen/Spalten', note: 'Kernfrage für Lösbarkeit und Eindeutigkeit.', sourceStatus: 'source-distilled' },
      { title: 'Determinante', value: 'regulär oder singulär?', note: 'Für quadratische Matrizen liefert $\\det(A)\\neq 0$ die Invertierbarkeit.', sourceStatus: 'source-distilled' },
      { title: 'Eigenwerte', value: 'Skalierungsrichtungen', note: 'Vektoren, die ihre Richtung unter $A$ behalten.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Spur und Rang als Strukturmaße',
        body: [
          'Die Spur ist die Summe der Diagonalelemente. Sie ist leicht zu berechnen, aber ihre Aussagekraft ist begrenzt. Der Rang ist wichtiger: Er misst, wie viele Richtungen im System wirklich unabhängig sind.',
          'Genau deshalb fragen die Kleinübungen häufig nicht nur nach dem numerischen Rang, sondern nach der Begründung über lineare Unabhängigkeit oder Gauß.'
        ],
        math: [String.raw`$$\operatorname{tr}(A)=\sum_{i=1}^n a_{ii},\qquad \operatorname{rg}(A)=\text{Anzahl linear unabhängiger Zeilen/Spalten}$$`],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Determinante, Inverse und Eindeutigkeit',
        body: [
          'Für quadratische Matrizen gilt die zentrale Logik: $\\det(A)\\neq 0$ genau dann, wenn $A$ regulär und damit invertierbar ist. Dann hat $Ax=b$ für jedes $b$ genau eine Lösung.',
          'Die Inverse ist also kein isolierter Rechenkunstgriff, sondern das algebraische Zeichen dafür, dass die Matrixinformation vollständig und nicht redundant ist.'
        ],
        math: [
          String.raw`$$\det\begin{pmatrix}a&b\\ c&d\end{pmatrix}=ad-bc$$`,
          String.raw`$$A^{-1}=\frac{1}{ad-bc}\begin{pmatrix}d&-b\\ -c&a\end{pmatrix}\qquad(\det(A)\neq 0)$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Eigenwerte und Eigenvektoren',
        body: [
          'Eigenwerte beschreiben Skalierung in einer Richtung, Eigenvektoren die dazugehörigen Richtungen selbst. In der Vorlesung ist das kein Selbstzweck, sondern ein Standardzugang, um lineare Abbildungen strukturell zu lesen.',
          'Praktisch heißt das: Charakteristische Gleichung aufstellen, Eigenwerte bestimmen, dann zu jedem Eigenwert einen Eigenvektor aus $(A-\\lambda I)x=0$ berechnen.'
        ],
        math: [String.raw`$$Ax=\lambda x\qquad\Longleftrightarrow\qquad (A-\lambda I)x=0$$`],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('Determinante als bloße Zahl', 'Die Determinante ist nicht nur ein Rechenergebnis, sondern das Signal für regulär versus singulär.'),
      warning('Rang und Spur verwechselt', 'Die Spur sagt nichts über lineare Unabhängigkeit; für Eindeutigkeit ist der Rang zentral.'),
      warning('Eigenvektor ohne Nullgleichung', 'Nach dem Eigenwert muss immer $(A-\\lambda I)x=0$ gelöst werden, nicht einfach irgendein Vektor geraten.')
    ],
    formeln: [
      formula('Spur', String.raw`$$\operatorname{tr}(A)=\sum_{i=1}^n a_{ii}$$`, 'Summe der Diagonalelemente einer quadratischen Matrix.', { A: 'quadratische Matrix' }),
      formula('Determinante 2×2', String.raw`$$\det\begin{pmatrix}a&b\\ c&d\end{pmatrix}=ad-bc$$`, 'Schnelltest für Singularität im 2×2-Fall.', { a: 'oben links', b: 'oben rechts', c: 'unten links', d: 'unten rechts' }),
      formula('Inverse 2×2', String.raw`$$A^{-1}=\frac{1}{\det(A)}\begin{pmatrix}d&-b\\ -c&a\end{pmatrix}$$`, 'Nur definiert für $\\det(A)\\neq 0$.', { 'A^{-1}': 'Inverse Matrix' }),
      formula('Eigenwertproblem', String.raw`$$\det(A-\lambda I)=0$$`, 'Charakteristische Gleichung zur Bestimmung der Eigenwerte.', { lambda: 'Eigenwert', I: 'Einheitsmatrix' })
    ],
    aufgaben: [
      task(
        String.raw`Bestimmen Sie für $A=\left(\begin{smallmatrix}2&1\\4&3\end{smallmatrix}\right)$ die Determinante und entscheiden Sie, ob $A$ invertierbar ist.`,
        [
          step('Determinante berechnen.', String.raw`\det(A)=2\cdot 3-1\cdot 4=2`),
          step('Regulär/Singular entscheiden.', String.raw`\det(A)\neq 0 \Rightarrow A \text{ ist regulär}`),
          step('Schluss für $Ax=b$ formulieren.', null)
        ],
        String.raw`$A$ ist invertierbar; daher besitzt $Ax=b$ für jedes $b$ genau eine Lösung.`
      ),
      task(
        String.raw`Berechnen Sie Eigenwerte der Matrix $A=\left(\begin{smallmatrix}2&0\\0&5\end{smallmatrix}\right)$ und erläutern Sie die Eigenvektoren sprachlich.`,
        [
          step('Charakteristische Gleichung aufstellen.', String.raw`\det(A-\lambda I)=(2-\lambda)(5-\lambda)=0`),
          step('Eigenwerte bestimmen.', String.raw`\lambda_1=2,\qquad \lambda_2=5`),
          step('Richtungslesart angeben.', null)
        ],
        String.raw`Die Koordinatenachsen sind Eigenrichtungen: entlang der ersten Achse wird mit 2, entlang der zweiten mit 5 skaliert.`
      )
    ],
    intuition: {
      core: 'Rang, Determinante und Eigenwerte sind Strukturtests: Sie sagen dir, ob ein lineares System redundant, eindeutig oder richtungsgebunden ist.',
      analogy: 'Wie bei einem Schlüsselbund: Manche Schlüssel sind doppelt, manche öffnen gar nichts, und manche passen genau zu einer Tür — genau das trennt Rang, Singularität und Eigenrichtung.',
      bridge: 'Später taucht diese Logik wieder auf, wenn Invertierbarkeit, Mehrdeutigkeit oder Stabilität in Modellen begründet werden müssen.',
      exam: [
        { if: 'LGS eindeutig?', then: 'Rang und/oder Determinante begründen, nicht nur Ergebnis hinschreiben.' },
        { if: 'Inverse gefragt', then: 'Vorher Determinante prüfen.' },
        { if: 'Eigenwerte', then: 'Zuerst charakteristische Gleichung, dann Eigenvektorbedingung.' },
        { if: 'Singulär', then: 'Keine Inverse; je nach rechter Seite keine oder unendlich viele Lösungen.' }
      ]
    },
    mastery: [
      'Spur, Rang und lineare Unabhängigkeit sicher unterscheiden',
      'Determinante und Invertierbarkeit sauber miteinander verknüpfen',
      'Eindeutigkeit oder Mehrdeutigkeit eines LGS strukturell begründen',
      'Eigenwerte und Eigenvektoren über das Standardproblem $Ax=\\lambda x$ bestimmen'
    ],
    links: { uses: ['lineare_algebra_grundlagen'], usedBy: ['r_begleitpraxis'] },
    stepProblems: [
      {
        title: 'Regulär oder singulär?',
        context: 'Die Determinante ist hier die schnellste Diagnose.',
        steps: [
          { q: '[1. Kriterium] Was muss für eine 2×2-Matrix gelten, damit sie invertierbar ist?', answer: ['det ungleich 0', 'det != 0', 'determinante ungleich 0'], options: { problemId: 'ma_la2_1', stepId: 'crit', isDecision: true }, hint: 'Regulär = keine Null-Determinante.', explain: 'Invertierbar genau dann, wenn die Determinante ungleich Null ist.' },
          { q: '[2. Folge] Was bedeutet $\\det(A)=0$ für $A^{-1}$?', answer: ['existiert nicht', 'keine inverse', 'nicht invertierbar'], options: { problemId: 'ma_la2_1', stepId: 'inv', dependsOn: 'crit' }, hint: 'Singuläre Matrix.', explain: 'Dann existiert keine Inverse.' }
        ]
      }
    ],
    rBlocks: [
      {
        title: 'Determinante, Inverse und Eigenwerte in R prüfen',
        purpose: 'R hilft hier vor allem als Kontrollinstrument: Struktur zuerst theoretisch lesen, dann mit `det`, `solve` und `eigen` verifizieren.',
        script: 'R.LA II: det(), solve(), eigen()',
        code: String.raw`A <- matrix(c(2, 1, 4, 3), nrow = 2, byrow = TRUE)
det(A)
solve(A)
eigen(A)$values`,
        interpretation: 'Die Determinante zeigt sofort, ob die Inverse existiert. `solve(A)` bestätigt die Regularität, und `eigen(A)$values` liefert die Skalierungsfaktoren der Matrix.',
        miniTask: 'Ändere A zu einer Matrix mit proportionalen Zeilen und beschreibe, was bei `det(A)` und `solve(A)` passiert.',
        solution: 'Bei proportionalen Zeilen wird die Determinante null. `solve(A)` scheitert dann, weil die Matrix singulär ist.',
        solutionChanges: [
          'Ersetze die Matrixdefinition durch eine Matrix mit proportionalen Zeilen, zum Beispiel Zeile 2 = 2 · Zeile 1.',
          'Lass `det(A)`, `solve(A)` und `eigen(A)$values` stehen, damit du Singularität und Fehlermeldung direkt siehst.'
        ],
        solutionCode: String.raw`A <- matrix(c(2, 1, 4, 2), nrow = 2, byrow = TRUE)
det(A)
solve(A)
eigen(A)$values`,
        pitfalls: ['R-Ausgabe nicht nur abschreiben, sondern den Zusammenhang zu Rang/Regularität sprachlich erklären.', 'Ein numerischer Fehler in `solve(A)` ist oft ein strukturelles Problem der Matrix, nicht nur ein Softwareproblem.']
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'analysis_ableitung_grundlagen',
    title: 'Analysis I: Ableitung, Tangente & Regeln',
    cat: 'Analysis',
    short: 'AN1A',
    sourceRefs: [
      '06Mathe_AN1_Differentialrechnung.pdf',
      'Kleinübung/AN_1_-_Univariate_Differenzialrechnung/AN_I_-_Aufgaben.pdf'
    ],
    motivation: 'Ableitungen sind der zentrale Wechsel von Niveau zu Änderung: Ohne sie gibt es keine Steigung, keine Grenzgröße und keine saubere Optimierungslogik.',
    cardsTitle: 'Erste Fragen auf der Klausurseite',
    cards: [
      { title: 'Graph + Punkt', value: 'Steigung / Tangente', note: 'Geometrische Interpretation zuerst, Regelapparat erst danach.', sourceStatus: 'source-distilled' },
      { title: 'Geschachtelter Ausdruck', value: 'Kettenregel prüfen', note: 'Gerade bei Logarithmus, Wurzel, Exponentialfunktion und Potenzen häufig.', sourceStatus: 'source-distilled' },
      { title: 'Produkt oder Quotient', value: 'Regelwahl bewusst', note: 'Nicht alles in eine Potenzregel zwingen.', sourceStatus: 'source-distilled' },
      { title: 'Ökonomische Lesart', value: 'Grenzkosten, Grenzerlös, Grenzprodukt', note: 'Die Ableitung misst die marginale Veränderung.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Von Sekante zu Tangente',
        body: [
          'Die Vorlesung beginnt bewusst geometrisch: Die Ableitung ist nicht zuerst eine Regel, sondern die Steigung der Tangente. Genau deshalb tauchen Differenzenquotient, Sekante und Grenzübergang schon im ersten Aufgabenblock der Kleinübung auf.',
          'Diese Lesart ist für die Klausur zentral, weil man damit Steigung, Änderungsrate und Grenzgröße als dieselbe Idee erkennt.'
        ],
        math: [String.raw`$$f'(x_0)=\lim_{\Delta x\to 0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$$`],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Ableitungsregeln als Standardschemata',
        body: [
          'Die Regeln sind im Kurs Mittel zum Zweck: Potenz-, Produkt-, Quotienten- und Kettenregel decken den Großteil der Rechenfamilien ab. Klausurnah ist deshalb nicht das Auswendiglernen von Einzelfällen, sondern das Erkennen der Struktur.',
          'Gerade die Kleinübung AN I zeigt, dass derselbe Ausdruck oft auf mehreren Wegen differenziert werden kann. Das Ziel ist Regelkontrolle, nicht Regelmagie.'
        ],
        math: [
          String.raw`$$\frac{d}{dx}x^n=nx^{n-1},\qquad (uv)'=u'v+uv',\qquad \left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^2}$$`,
          String.raw`$$\frac{d}{dx}f(g(x))=f'(g(x))\cdot g'(x)$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Exponential-, Logarithmus- und implizites Differenzieren',
        body: [
          'AN I behandelt ausdrücklich auch die Differentiation von $e^x$, $\\ln x$ und implizit gegebenen Zusammenhängen. Das ist prüfungsrelevant, weil diese Familien häufig in Wirtschaftsmodellen auftauchen.',
          'Die inhaltliche Pointe bleibt dieselbe: erst Struktur erkennen, dann Regel sauber anwenden.'
        ],
        math: [
          String.raw`$$\frac{d}{dx}e^{ax}=ae^{ax},\qquad \frac{d}{dx}\ln x=\frac{1}{x}\;(x>0)$$`
        ],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('Kettenregel vergessen', 'Bei zusammengesetzten Ausdrücken fehlt oft die innere Ableitung.'),
      warning('Sekante mit Tangente verwechselt', 'Der Differenzenquotient ist noch keine Ableitung; erst der Grenzübergang liefert die Tangentensteigung.'),
      warning('Domäne bei ln oder Wurzel ignoriert', 'Auch die Ableitungsformel gilt nur im zulässigen Bereich des ursprünglichen Terms.')
    ],
    formeln: [
      formula('Differenzenquotient', String.raw`$$\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$$`, 'Sekantensteigung als Vorstufe der Ableitung.', { 'x_0': 'Ausgangspunkt', '\\Delta x': 'kleine Änderung in x' }),
      formula('Potenzregel', String.raw`$$\frac{d}{dx}x^n=nx^{n-1}$$`, 'Basisregel für Polynome und Potenzen.', { n: 'Exponent' }),
      formula('Kettenregel', String.raw`$$\frac{d}{dx}f(g(x))=f'(g(x))g'(x)$$`, 'Standardregel für geschachtelte Funktionen.', { f: 'äußere Funktion', g: 'innere Funktion' }),
      formula('Log- und Exp-Ableitung', String.raw`$$\frac{d}{dx}\ln x=\frac{1}{x},\qquad \frac{d}{dx}e^{ax}=ae^{ax}$$`, 'Wichtige Spezialfälle aus AN I.', { a: 'Konstante im Exponenten' })
    ],
    aufgaben: [
      task(
        String.raw`Leiten Sie $h(x)=(x+1)^3$ auf zwei Wegen ab: durch Ausmultiplizieren und mit der Kettenregel.`,
        [
          step('Ausmultiplizieren und gliedweise ableiten.', String.raw`(x+1)^3=x^3+3x^2+3x+1 \Rightarrow h'(x)=3x^2+6x+3`),
          step('Kettenregel anwenden.', String.raw`h'(x)=3(x+1)^2\cdot 1`),
          step('Beide Formen vergleichen.', String.raw`3(x+1)^2=3x^2+6x+3`)
        ],
        String.raw`Beide Wege liefern denselben Ausdruck. Das ist typische Regelkontrolle aus der Kleinübung.`
      ),
      task(
        String.raw`Bestimmen Sie die Ableitung von $k(Q)=\ln(5+2Q)$ und erklären Sie, warum der Nenner die marginale Wirkung abschwächt.`,
        [
          step('Äußere und innere Funktion trennen.', String.raw`k(Q)=\ln(u),\quad u=5+2Q`),
          step('Kettenregel anwenden.', String.raw`k'(Q)=\frac{1}{5+2Q}\cdot 2=\frac{2}{5+2Q}`),
          step('Ökonomische Lesart formulieren.', null)
        ],
        String.raw`$k'(Q)=\frac{2}{5+2Q}$. Mit wachsendem $Q$ steigt der Nenner, daher sinkt die marginale Wirkung.`
      )
    ],
    intuition: {
      core: 'Ableiten heißt, eine Funktion unter die Lupe zu legen: nicht „wie groß ist sie?“, sondern „wie schnell ändert sie sich gerade?“.',
      analogy: 'Der Kilometerzähler zeigt das bisherige Niveau, der Tacho die momentane Änderung — genau dieser Unterschied ist Funktion versus Ableitung.',
      bridge: 'Diese Steigungslogik ist die Voraussetzung für Monotonie, Optimierung und lineare Approximation.',
      exam: [
        { if: 'Graph + Punkt', then: 'Steigung als Tangente lesen, nicht nur formal ableiten.' },
        { if: 'geschachtelte Funktion', then: 'Kettenregel fast immer mitdenken.' },
        { if: 'Produkt / Quotient', then: 'Regelwahl explizit prüfen.' },
        { if: 'Grenzgröße gefragt', then: 'Ableitung sofort ökonomisch als marginale Änderung deuten.' }
      ]
    },
    mastery: [
      'Differenzenquotient, Tangente und Ableitung begrifflich sicher trennen',
      'Potenz-, Produkt-, Quotienten- und Kettenregel fehlerfrei anwenden',
      'Exp-, Log- und implizite Ableitungen sicher berechnen',
      'Ableitungen als Grenzkosten, Grenzerlös oder Steigung sprachlich interpretieren'
    ],
    links: { uses: ['funktionen_gleichungen', 'exp_log_inverse'], usedBy: ['analysis_monotonie_grenzwerte', 'univariate_optimierung', 'analysis_multivariat', 'lagrange', 'integralrechnung'] },
    stepProblems: [
      {
        title: 'Regelwahl',
        context: 'Der Ausdruck bestimmt die Regel, nicht umgekehrt.',
        steps: [
          { q: '[1. Struktur] Welche Regel prüfst du bei $\\ln(3+2x)$ zuerst?', answer: ['kettenregel'], options: { problemId: 'ma_der_1', stepId: 'rule', isDecision: true }, hint: 'Funktion in Funktion.', explain: 'Zuerst Kettenregel, weil ein Logarithmus eines linearen Terms vorliegt.' },
          { q: '[2. Ableitung] Was ist die innere Ableitung von $3+2x$?', answer: ['2'], options: { problemId: 'ma_der_1', stepId: 'inner', dependsOn: 'rule' }, hint: 'Lineare Funktion.', explain: 'Die innere Ableitung ist 2.' }
        ]
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'analysis_monotonie_grenzwerte',
    title: 'Analysis I: Monotonie, Grenzwerte, Approximation & Newton',
    cat: 'Analysis',
    short: 'AN1B',
    sourceRefs: [
      '06Mathe_AN1_Differentialrechnung.pdf',
      'Kleinübung/AN_1_-_Univariate_Differenzialrechnung/AN_I_-_Aufgaben.pdf'
    ],
    motivation: 'Dieser Block macht aus einzelnen Ableitungen eine vollständige Funktionsanalyse: Richtung, Krümmung, lokale Approximation und numerische Nullstellensuche.',
    cardsTitle: 'Was du hier sofort prüfen solltest',
    cards: [
      { title: 'Monotonie', value: 'Vorzeichen von $f\'$', note: 'Nicht nur an einem Punkt, sondern auf Intervallen prüfen.', sourceStatus: 'source-distilled' },
      { title: 'Krümmung', value: '$f\'\'$ lesen', note: 'Konkavität/Konvexität und Wendelogik hängen an der zweiten Ableitung.', sourceStatus: 'source-distilled' },
      { title: 'Approximation', value: 'Tangente als Näherung', note: 'Linearisiert eine Funktion lokal um einen Punkt.', sourceStatus: 'source-distilled' },
      { title: 'Newton', value: 'iterative Nullstellensuche', note: 'Immer Startwert und Tangentenidee mitdenken.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Monotonie und Ableitungen höherer Ordnung',
        body: [
          'Aus der ersten Ableitung folgt die Richtung: positiv bedeutet steigend, negativ fallend. Die zweite Ableitung beschreibt die Krümmung und wird damit zum Klassifikationswerkzeug für lokale Veränderungen.',
          'Im Kurs ist das keine reine Analysisästhetik, sondern die Basis für ökonomische Begriffe wie abnehmende Grenzerträge oder steigende Grenzkosten.'
        ],
        math: [
          String.raw`$$f'(x)>0 \Rightarrow f \text{ steigt},\qquad f'(x)<0 \Rightarrow f \text{ fällt}$$`,
          String.raw`$$f''(x)>0 \Rightarrow \text{konvex},\qquad f''(x)<0 \Rightarrow \text{konkav}$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Stetigkeit, Grenzwerte und L’Hôpital',
        body: [
          'AN I behandelt Grenzwerte ausdrücklich als Prüfgegenstand. Dabei ist die entscheidende Frage nicht nur „welcher Wert?“, sondern ob der Ausdruck überhaupt stetig ist oder ob eine unbestimmte Form vorliegt.',
          'L’Hôpital ist im Kurs kein Universalwerkzeug, sondern ein Sonderzugriff für echte Quotienten der Form $0/0$ oder $\\infty/\\infty$.'
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Approximationen, Differentiale und Newton-Verfahren',
        body: [
          'Die lineare Approximation nutzt die Tangente als lokale Ersatzfunktion. Genau daraus entwickelt sich das Newton-Verfahren: Tangente bilden, Nullstelle der Tangente nehmen, wiederholen.',
          'Diese Stufung ist didaktisch wichtig, weil sie Rechnen, Geometrie und numerische Logik verbindet.'
        ],
        math: [
          String.raw`$$f(x)\approx f(x_0)+f'(x_0)(x-x_0)$$`,
          String.raw`$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$$`
        ],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('Monotonie nur an einem Punkt', 'Für Monotonieintervalle musst du das Vorzeichen von $f\'$ auf Bereichen prüfen, nicht an einer Einzelstelle.'),
      warning('L’Hôpital zu früh', 'Erst prüfen, ob wirklich die Form $0/0$ oder $\\infty/\\infty$ vorliegt.'),
      warning('Newton ohne Startwertkontrolle', 'Ein schlechter Startwert kann das Verfahren weg vom gesuchten Nullstellenbereich treiben.')
    ],
    formeln: [
      formula('Monotoniebedingung', String.raw`$$f'(x)\gtrless 0$$`, 'Vorzeichen der ersten Ableitung entscheidet über Steigen oder Fallen.', { "f'(x)": 'marginale Änderung' }),
      formula('Lineare Approximation', String.raw`$$L(x)=f(x_0)+f'(x_0)(x-x_0)$$`, 'Tangente als lokale Ersatzfunktion.', { 'x_0': 'Entwicklungspunkt' }),
      formula('Newton-Verfahren', String.raw`$$x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}$$`, 'Numerische Iteration zur Nullstellensuche.', { 'x_n': 'aktueller Näherungswert' }),
      formula('L’Hôpital', String.raw`$$\lim\frac{f(x)}{g(x)}=\lim\frac{f'(x)}{g'(x)}$$`, 'Nur bei geeigneten unbestimmten Quotientenformen.', { f: 'Zählerfunktion', g: 'Nennerfunktion' })
    ],
    aufgaben: [
      task(
        String.raw`Untersuchen Sie $f(x)=x^3-3x$ auf Monotonieintervalle.`,
        [
          step('Erste Ableitung bilden.', String.raw`f'(x)=3x^2-3=3(x-1)(x+1)`),
          step('Vorzeichen in den Intervallen prüfen.', String.raw`f'(x)>0 \text{ für } x<-1 \text{ und } x>1,\qquad f'(x)<0 \text{ für } -1<x<1`),
          step('Monotonie sprachlich formulieren.', null)
        ],
        String.raw`$f$ steigt auf $(-\infty,-1)$ und $(1,\infty)$ und fällt auf $(-1,1)$.`
      ),
      task(
        String.raw`Formulieren Sie die lineare Approximation von $f(x)=\sqrt{x}$ im Punkt $x_0=4$ und nutzen Sie sie zur Näherung von $\sqrt{4{,}1}$.`,
        [
          step('Funktionswert und Ableitung im Entwicklungspunkt bestimmen.', String.raw`f(4)=2,\qquad f'(x)=\frac{1}{2\sqrt{x}},\qquad f'(4)=\frac14`),
          step('Tangente aufstellen.', String.raw`L(x)=2+\frac14(x-4)`),
          step('Bei $x=4{,}1$ einsetzen.', String.raw`L(4{,}1)=2+\frac14\cdot 0{,}1=2{,}025`)
        ],
        String.raw`$\sqrt{4{,}1}$ wird lokal durch $2{,}025$ approximiert.`
      )
    ],
    intuition: {
      core: 'Hier wird aus Ableitung echte Kurvendiskussion: Richtung, Krümmung und lokale Näherung greifen ineinander.',
      analogy: 'Wie beim Autofahren: Geschwindigkeit sagt, ob du vorwärts kommst; Beschleunigung, wie sich die Geschwindigkeit selbst verändert.',
      bridge: 'Diese Logik liefert später die Kandidaten- und Klassifikationsschritte für Optimierungsaufgaben.',
      exam: [
        { if: 'Monotonie gefragt', then: 'Nullstellen von $f\'$ finden und Vorzeichenintervalle anlegen.' },
        { if: 'Krümmung / Wendung', then: 'Zweite Ableitung lesen und Vorzeichenwechsel prüfen.' },
        { if: 'Approximation', then: 'Tangente im Entwicklungspunkt als Ersatzfunktion aufstellen.' },
        { if: 'Newton', then: 'Startwert, Tangente, Iterationsschritt in dieser Reihenfolge denken.' }
      ]
    },
    mastery: [
      'Monotonie- und Krümmungsinformationen aus ersten und zweiten Ableitungen gewinnen',
      'Grenzwerte und Stetigkeit sauber von bloßer Funktionsauswertung unterscheiden',
      'Lineare Approximationen und Differentiale als Tangentenlogik einsetzen',
      'Das Newton-Verfahren als iterative Nullstellensuche erklären und anwenden'
    ],
    links: { uses: ['analysis_ableitung_grundlagen'], usedBy: ['univariate_optimierung', 'integralrechnung'] },
    stepProblems: [
      {
        title: 'Monotonie lesen',
        context: 'Vorzeichen statt Einzelwert.',
        steps: [
          { q: '[1. Kern] Woraus liest du Monotonie ab?', answer: ['erste ableitung', "f'", 'f`'], options: { problemId: 'ma_mon_1', stepId: 'signal', isDecision: true }, hint: 'Die Richtung steckt in der marginalen Änderung.', explain: 'Monotonie liest du aus dem Vorzeichen der ersten Ableitung.' },
          { q: '[2. Vorsicht] Reicht ein einzelner Ableitungswert zur Intervallanalyse?', answer: ['nein', 'no'], options: { problemId: 'ma_mon_1', stepId: 'interval', dependsOn: 'signal' }, hint: 'Es geht um ganze Bereiche.', explain: 'Nein, du musst das Vorzeichen auf Intervallen prüfen.' }
        ]
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'univariate_optimierung',
    title: 'Univariate Optimierung',
    cat: 'Optimierung',
    short: 'OP1',
    sourceRefs: [
      '07Mathe_OP1_UnivOptimierung.pdf',
      'Kleinübung/OP_1_-_Univariate_Optimierung/OP_I_-_Aufgaben.pdf'
    ],
    motivation: 'Univariate Optimierung ist die erste vollständige Entscheidungskette des Kurses: Zielgröße lesen, Kandidaten bestimmen, Rand prüfen, Optimum begründen und ökonomisch deuten.',
    cardsTitle: 'Prüfungsschema',
    cards: [
      { title: 'Global oder lokal?', value: 'vor dem Rechnen klären', note: 'Die Aufgabenstellung entscheidet, ob nur innere Kandidaten oder auch Randpunkte geprüft werden müssen.', sourceStatus: 'source-distilled' },
      { title: 'BEO', value: '$f\'(x)=0$', note: 'Nur notwendige Bedingung für innere Kandidaten.', sourceStatus: 'source-distilled' },
      { title: 'BZO', value: '$f\'\'(x)$ oder Vorzeichenwechsel', note: 'Klassifiziert lokale Kandidaten.', sourceStatus: 'source-distilled' },
      { title: 'Kompakter Bereich', value: 'Rand immer mitprüfen', note: 'Das ist die zentrale Brücke zum Extremwertsatz.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Globale und lokale Extremstellen',
        body: [
          'Die Vorlesung trennt sauber zwischen globalem und lokalem Optimum. Genau diese Trennung verhindert Standardfehler: Ein stationärer Punkt ist nicht automatisch das globale Maximum.',
          'Für globale Aufgaben auf kompakten Intervallen gehören Randpunkte systematisch in die Kandidatenliste.'
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Erstordnung, Zweitordnung und Randlogik',
        body: [
          'Für innere lokale Optima ist $f\'(x)=0$ die notwendige Bedingung erster Ordnung. Die zweite Ableitung oder ein Vorzeichenwechsel von $f\'$ entscheidet dann über Maximum oder Minimum.',
          'Bei Intervallaufgaben ist das vollständige Schema entscheidend: innere Kandidaten, Randpunkte, Funktionswerte vergleichen.'
        ],
        math: [
          String.raw`$$f'(x^\*)=0,\qquad f''(x^\*)<0 \Rightarrow \text{lokales Maximum},\qquad f''(x^\*)>0 \Rightarrow \text{lokales Minimum}$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Ökonomische Optimierungslogik',
        body: [
          'In wirtschaftswissenschaftlichen Lesarten steht hinter derselben Mathematik Gewinn, Nutzen, Kosten oder Ertrag. Der formale Kern bleibt identisch: Zielfunktion bilden, Kandidaten bestimmen, ökonomisch interpretieren.',
          'Damit wird univariate Optimierung zur Schnittstelle zwischen Analysis und Fachanwendung.'
        ],
        sourceStatus: 'platform-added-explanation'
      }
    ],
    warnings: [
      warning('BEO als Endergebnis', 'Eine stationäre Stelle ist nur Kandidat; Klassifikation oder Randvergleich fehlen sonst.'),
      warning('Rand vergessen', 'Bei kompakten Intervallen können globale Optima am Rand liegen.'),
      warning('Ökonomische Zielfunktion nicht sauber gebildet', 'Vor der Ableitung muss klar sein, ob Gewinn, Kosten oder Nutzen optimiert wird.')
    ],
    formeln: [
      formula('Bedingung erster Ordnung', String.raw`$$f'(x^\*)=0$$`, 'Innere Kandidatenstelle.', { "x^*": 'Kandidat für Optimum' }),
      formula('Bedingung zweiter Ordnung', String.raw`$$f''(x^\*)<0\;\Rightarrow\;\text{lokales Maximum},\qquad f''(x^\*)>0\;\Rightarrow\;\text{lokales Minimum}$$`, 'Klassifikation bei differenzierbarer Funktion.', { "f''(x^*)": 'Krümmung im Kandidatenpunkt' }),
      formula('Randvergleich', String.raw`$$\{x^\*,a,b\}\ \text{prüfen auf}\ [a,b]$$`, 'Auf kompakten Intervallen gehören Randpunkte in die Kandidatenmenge.', { a: 'linker Rand', b: 'rechter Rand' })
    ],
    aufgaben: [
      task(
        String.raw`Maximieren Sie $\pi(x)=8x-x^2$ auf dem Intervall $[0,10]$.`,
        [
          step('Innere Kandidaten über die erste Ableitung bestimmen.', String.raw`\pi'(x)=8-2x=0 \Rightarrow x^\*=4`),
          step('Randpunkte mitprüfen.', String.raw`\pi(0)=0,\qquad \pi(4)=16,\qquad \pi(10)=-20`),
          step('Globales Ergebnis sprachlich abschließen.', null)
        ],
        String.raw`Das globale Maximum auf $[0,10]$ liegt bei $x=4$ mit Wert $16$.`
      ),
      task(
        String.raw`Ein Unternehmen hat Erlös $E(y)=10y-y^2$ und Kosten $C(y)=2y$. Bestimmen Sie die gewinnmaximale Menge.`,
        [
          step('Gewinnfunktion bilden.', String.raw`\pi(y)=E(y)-C(y)=8y-y^2`),
          step('BEO und BZO anwenden.', String.raw`\pi'(y)=8-2y=0 \Rightarrow y^\*=4,\qquad \pi''(y)=-2<0`),
          step('Ökonomische Lesart formulieren.', null)
        ],
        String.raw`Die gewinnmaximale Menge beträgt $y=4$. Dort ist die Zielgröße lokal und hier auch global maximal.`
      )
    ],
    intuition: {
      core: 'Optimierung ist kein isolierter Rechentrick, sondern eine Entscheidungskette: Kandidaten finden, prüfen, vergleichen, deuten.',
      analogy: 'Wie bei der Wohnungssuche: Ein guter Kandidat ist noch nicht automatisch die beste Wahl, solange du Randfälle und Alternativen nicht geprüft hast.',
      bridge: 'Dasselbe Schema wird später in multivariater Optimierung und Lagrange mit mehr Struktur wiederholt.',
      exam: [
        { if: 'globales Optimum auf Intervall', then: 'BEO + Randvergleich.' },
        { if: 'lokales Optimum im Inneren', then: 'BEO und dann BZO oder Vorzeichenwechsel.' },
        { if: 'ökonomische Aufgabe', then: 'Erst Zielfunktion bilden, dann differenzieren.' },
        { if: 'stationäre Stelle gefunden', then: 'Noch nicht aufhören: Klassifikation fehlt.' }
      ]
    },
    mastery: [
      'Globale und lokale Extremstellen sauber unterscheiden',
      'BEO/BZO sicher mit Randlogik kombinieren',
      'Univariate Zielprobleme formal lösen und ökonomisch deuten',
      'Kandidatenvergleich auf kompakten Intervallen vollständig durchführen'
    ],
    links: { uses: ['analysis_ableitung_grundlagen', 'analysis_monotonie_grenzwerte'], usedBy: ['multivariate_optimierung', 'lagrange', 'r_begleitpraxis'] },
    stepProblems: [
      {
        title: 'Kandidat oder Optimum?',
        context: 'BEO ist nur der Einstieg.',
        steps: [
          { q: '[1. Kern] Was liefert $f\'(x)=0$ zuerst?', answer: ['kandidat', 'stationäre stelle'], options: { problemId: 'ma_opt_1', stepId: 'cand', isDecision: true }, hint: 'Noch kein fertiges Optimum.', explain: 'Zuerst nur eine stationäre Kandidatenstelle.' },
          { q: '[2. Zusatz] Was musst du auf $[a,b]$ zusätzlich prüfen?', answer: ['rand', 'randpunkte'], options: { problemId: 'ma_opt_1', stepId: 'edge', dependsOn: 'cand' }, hint: 'Global heißt nicht nur innen.', explain: 'Auf einem kompakten Intervall musst du die Randpunkte mitprüfen.' }
        ]
      }
    ],
    rBlocks: [
      {
        title: 'Univariate Optimierung mit optimize() prüfen',
        purpose: 'R soll hier nicht das Schema ersetzen, sondern dein händisches Ergebnis absichern: erst Zielfunktion verstehen, dann numerisch kontrollieren.',
        script: 'R.OP I: optimize() für Maxima',
        code: String.raw`profit <- function(x) 8 * x - x^2
optimize(profit, interval = c(0, 10), maximum = TRUE)`,
        interpretation: 'Die Ausgabe liefert die optimale Stelle und den Zielfunktionswert im gewählten Intervall. Das passt genau zur globalen Intervalloptimierung aus OP I.',
        miniTask: 'Ändere das Intervall auf `c(5, 10)` und erkläre, warum sich das Ergebnis ändert.',
        solution: 'Im kleineren Intervall liegt das frühere Innenoptimum möglicherweise nicht mehr zulässig. Dann gewinnt einer der neuen Randbereiche oder der beste zulässige Innenpunkt.',
        solutionChanges: [
          'Ändere nur das Suchintervall in `optimize(...)` von `c(0, 10)` auf `c(5, 10)`.',
          'Die Zielfunktion `profit` bleibt unverändert; verändert wird nur der zulässige Bereich.'
        ],
        solutionCode: String.raw`profit <- function(x) 8 * x - x^2
optimize(profit, interval = c(5, 10), maximum = TRUE)`,
        pitfalls: ['Numerisches Ergebnis nicht ohne Intervallinterpretation übernehmen.', 'Ein globales Optimum hängt immer auch vom zulässigen Bereich ab.']
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'analysis_multivariat',
    title: 'Analysis II: Funktionen mehrerer Variablen',
    cat: 'Analysis',
    short: 'AN2',
    sourceRefs: [
      '08Mathe_AN2_FunktionenMultivariat.pdf',
      'Kleinübung/AN_2_-__Funktionen_mehrerer_Variablen_und_multivariate_Differenzialrechnung/AN_II_-_Aufgaben.pdf'
    ],
    motivation: 'Mit mehreren Variablen wird aus der eindimensionalen Steigung eine strukturierte Flächen- und Richtungslogik. Das ist die direkte Brücke zu Produktion, Nutzen und multivariater Optimierung.',
    cardsTitle: 'Was du sofort unterscheiden musst',
    cards: [
      { title: 'Bivariat / multivariat', value: 'mehrere Inputs, ein Output', note: 'Jetzt wird jeder Punkt durch ein Tupel statt durch eine einzige Zahl beschrieben.', sourceStatus: 'source-distilled' },
      { title: 'Partielle Ableitung', value: 'eine Variable ändern, andere festhalten', note: 'Genau das ist später Grenzprodukt / Grenzwirkung.', sourceStatus: 'source-distilled' },
      { title: 'Totale Ableitung', value: 'mehrere Kanäle gleichzeitig', note: 'Wichtig, wenn mehrere Einflussgrößen sich gleichzeitig ändern.', sourceStatus: 'source-distilled' },
      { title: 'Homogenität', value: 'Skaleneigenschaften lesen', note: 'Gemeinsame proportionale Änderung aller Inputs.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Bivariate Funktionen und ökonomische Lesart',
        body: [
          'In AN II wird die Funktion $f(x,y)$ als Zuordnung von Punktpaaren zu einem Output eingeführt. Der Definitionsbereich besteht also aus zulässigen Wertepaaren, nicht mehr aus einzelnen Zahlen.',
          'Gerade diese Perspektive ist für ökonomische Anwendungen zentral: Produktion hängt von Kapital und Arbeit ab, Nachfrage von Einkommen und Preis, Nutzen von mehreren Gütern.'
        ],
        math: [String.raw`$$z=f(x,y)$$`],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Partielle, totale und implizite Ableitungen',
        body: [
          'Die partielle Ableitung misst die marginale Wirkung einer Variablen bei festgehaltenen übrigen Variablen. Die totale Ableitung sammelt dagegen alle Veränderungskanäle ein.',
          'Damit wird klar, warum partielle und totale Lesart nicht verwechselt werden dürfen: Sie beantworten unterschiedliche Fragen.'
        ],
        math: [
          String.raw`$$\frac{\partial f}{\partial x},\qquad df=f_x\,dx+f_y\,dy$$`,
          String.raw`$$\frac{dz}{dt}=f_x\frac{dx}{dt}+f_y\frac{dy}{dt}$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Homogenität, Geometrie und lineare Approximation',
        body: [
          'Der Kurs verbindet formale Eigenschaften wie Homogenität mit geometrischer Darstellung durch Niveau- bzw. Konturlinien. Das ist keine Deko, sondern die visuelle Grundlage für spätere Optimierungs- und Lagrange-Grafiken.',
          'Auch lineare Approximation und Differentiale werden in dieser mehrdimensionalen Lesart aufgebaut: lokale Ebene statt lokale Gerade.'
        ],
        math: [
          String.raw`$$f(tx,ty)=t^k f(x,y)$$`,
          String.raw`$$L(x,y)=f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)$$`
        ],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('Partiell und total verwechselt', 'Eine partielle Ableitung hält die übrigen Variablen fest; die totale Ableitung nicht.'),
      warning('Konturlinie als Funktionsgraph gelesen', 'Niveau- oder Konturlinien zeigen gleiche Funktionswerte, nicht direkt den Graphen in 3D.'),
      warning('Homogenität ohne gemeinsame Skalierung', 'Homogenität bezieht sich auf proportionale Veränderung aller relevanten Inputs, nicht nur einer einzigen Variablen.')
    ],
    formeln: [
      formula('Partielle Ableitung', String.raw`$$f_x(x,y)=\frac{\partial f}{\partial x}(x,y)$$`, 'Marginale Änderung in x-Richtung bei festem y.', { x: 'erste Variable', y: 'zweite Variable' }),
      formula('Totales Differential', String.raw`$$df=f_x\,dx+f_y\,dy$$`, 'Lokale Gesamtänderung aus allen kleinen Einzeländerungen.', { df: 'Gesamtänderung', dx: 'kleine Änderung in x', dy: 'kleine Änderung in y' }),
      formula('Kettenregel mehrerer Variablen', String.raw`$$\frac{dz}{dt}=f_x\frac{dx}{dt}+f_y\frac{dy}{dt}$$`, 'Wenn x und y selbst von t abhängen.', { z: 'Zielfunktion', t: 'gemeinsamer Treiber' }),
      formula('Homogenität', String.raw`$$f(tx,ty)=t^k f(x,y)$$`, 'Skalierungstest einer Funktion vom Grad k.', { t: 'gemeinsamer Skalierungsfaktor', k: 'Homogenitätsgrad' })
    ],
    aufgaben: [
      task(
        String.raw`Für $f(x,y)=2x+x^2y^3$: Berechnen Sie $f(1,0)$, $f(0,1)$ und die partielle Ableitung $f_x(x,y)$.`,
        [
          step('Funktionswerte durch direktes Einsetzen bestimmen.', String.raw`f(1,0)=2,\qquad f(0,1)=0`),
          step('Partiell nach x ableiten, y festhalten.', String.raw`f_x(x,y)=2+2xy^3`),
          step('Lesart der partiellen Ableitung formulieren.', null)
        ],
        String.raw`$f_x(x,y)$ misst die marginale Änderung in x-Richtung, während $y$ konstant gehalten wird.`
      ),
      task(
        String.raw`Gegeben sei $f(x,y)=x^2+xy$. Bestimmen Sie das totale Differential und interpretieren Sie es als lineare Approximation.`,
        [
          step('Partielle Ableitungen bilden.', String.raw`f_x=2x+y,\qquad f_y=x`),
          step('Differential zusammensetzen.', String.raw`df=(2x+y)\,dx+x\,dy`),
          step('Lokale Lesart formulieren.', null)
        ],
        String.raw`Das totale Differential liefert die lineare Näherung der Funktionsänderung bei kleinen gleichzeitigen Änderungen von $x$ und $y$.`
      )
    ],
    intuition: {
      core: 'Mehrere Variablen bedeuten nicht „mehr Rechnen“, sondern „mehr Richtungen“. Jede Richtung hat ihre eigene marginale Wirkung.',
      analogy: 'Wie bei einer Wanderung auf einer Hügellandschaft: Je nachdem, ob du nach Osten oder Norden gehst, ändert sich die Höhe unterschiedlich.',
      bridge: 'Diese Richtungslogik wird in multivariater Optimierung und Lagrange zu Kandidaten-, Hesse- und Tangentialbedingungen verdichtet.',
      exam: [
        { if: 'f(x,y)', then: 'Immer fragen: welche Variable darf sich gerade ändern?' },
        { if: 'partielle Ableitung', then: 'Andere Variablen als konstant behandeln.' },
        { if: 'totale Änderung', then: 'Mehrere Änderungskanäle zusammenziehen.' },
        { if: 'Homogenität', then: 'Alle Inputs gemeinsam skalieren, nicht nur einen.' }
      ]
    },
    mastery: [
      'Bivariate und multivariate Funktionen mit Definitions- und Wertebereich sicher lesen',
      'Partielle, totale und implizite Ableitungen begrifflich und rechnerisch unterscheiden',
      'Homogenität und lineare Approximation im Mehrvariablenfall sauber interpretieren',
      'Kontur- bzw. Niveau-Linien als graphische Information korrekt lesen'
    ],
    links: { uses: ['analysis_ableitung_grundlagen', 'funktionen_gleichungen'], usedBy: ['multivariate_optimierung', 'lagrange', 'r_begleitpraxis'] },
    stepProblems: [
      {
        title: 'Partiell oder total?',
        context: 'Die Frage entscheidet den Zugriff.',
        steps: [
          { q: '[1. Deutung] Was hält $\\partial f/\\partial x$ fest?', answer: ['y', 'andere variablen'], options: { problemId: 'ma_an2_1', stepId: 'hold', isDecision: true }, hint: 'Partiell heißt: eine Richtung isolieren.', explain: 'Bei der partiellen Ableitung nach x bleiben die anderen Variablen fest.' },
          { q: '[2. Richtung] Geht es bei $df$ nur um x?', answer: ['nein', 'no'], options: { problemId: 'ma_an2_1', stepId: 'total', dependsOn: 'hold' }, hint: 'Das totale Differential sammelt mehrere Beiträge.', explain: 'Nein, $df$ berücksichtigt kleine Änderungen aller relevanten Variablen.' }
        ]
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'multivariate_optimierung',
    title: 'Optimierung II: Bivariate & multivariate Optimierung',
    cat: 'Optimierung',
    short: 'OP2A',
    sourceRefs: [
      '09Mathe_OP2_MultivOptimierung.pdf',
      'Kleinübung/OP_2_-__Multivariate_Optimierung/OP_II_-_Aufgaben.pdf'
    ],
    motivation: 'Hier wird die univariate Optimierungslogik in höhere Dimensionen übertragen: mehrere FOCs, Hesse-Matrix, lokale versus globale Optima und kompakte Bereiche.',
    cardsTitle: 'Standardkette',
    cards: [
      { title: 'Innere Stelle', value: 'FOCs = 0', note: 'Bei inneren Kandidaten müssen alle partiellen Ableitungen erster Ordnung verschwinden.', sourceStatus: 'source-distilled' },
      { title: 'Hesse-Matrix', value: 'lokale Klassifikation', note: 'Determinante und Vorzeichen von $f_{xx}$ liefern die 2D-Klassifikation.', sourceStatus: 'source-distilled' },
      { title: 'Global oder lokal?', value: 'Menge und Rand prüfen', note: 'Kompakte Bereiche machen Randanalyse unverzichtbar.', sourceStatus: 'source-distilled' },
      { title: 'Sattelpunkt', value: 'kein Optimum trotz Stationarität', note: 'Genau deshalb reicht die FOC nie allein.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Stationäre Punkte mehrerer Variablen',
        body: [
          'Die notwendige Bedingung erster Ordnung verallgemeinert sich direkt: Für innere Kandidaten müssen alle partiellen Ableitungen erster Ordnung null sein.',
          'Die Kleinübung OP II trainiert genau diese Routine in vielen Varianten und macht klar, dass stationär nicht automatisch optimal heißt.'
        ],
        math: [String.raw`$$f_x(x^\*,y^\*)=0,\qquad f_y(x^\*,y^\*)=0$$`],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Hesse-Matrix und Klassifikation',
        body: [
          'Im bivariaten Fall liefert die Hesse-Matrix die lokale Krümmungsinformation. Für die Klausur ist die 2×2-Determinantenlogik besonders wichtig, weil sie Maximum, Minimum und Sattelpunkt trennt.',
          'Die Vorlesung betont dabei zu Recht: selbst negative Krümmung in einzelnen Achsenschnitten reicht noch nicht aus — die gemischten Ableitungen zählen mit.'
        ],
        math: [
          String.raw`$$H=\begin{pmatrix}f_{xx}&f_{xy}\\ f_{yx}&f_{yy}\end{pmatrix},\qquad D=f_{xx}f_{yy}-f_{xy}^2$$`,
          String.raw`$$D>0,\ f_{xx}>0 \Rightarrow \text{lokales Minimum};\quad D>0,\ f_{xx}<0 \Rightarrow \text{lokales Maximum};\quad D<0 \Rightarrow \text{Sattelpunkt}$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Globale Optima auf kompakten Mengen',
        body: [
          'Die OP-II-Kleinübung enthält viele Aufgaben zu offenen, abgeschlossenen, beschränkten und kompakten Mengen. Das ist kein Nebenthema: Genau diese Eigenschaften entscheiden, ob globale Optima gesichert und wie Randfälle zu behandeln sind.',
          'Deshalb gehört zum Benchmark-Schema auch hier: innere stationäre Punkte, Randoptima und Ecken systematisch zusammenführen.'
        ],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('FOCs als Endpunkt', 'Stationarität allein klassifiziert nichts.'),
      warning('Hesse ohne Determinante', 'Nur auf $f_{xx}$ zu schauen reicht im bivariaten Fall nicht.'),
      warning('Rand und Ecken vergessen', 'Bei kompakten Mengen können globale Optima außerhalb der inneren stationären Punkte liegen.')
    ],
    formeln: [
      formula('FOCs im 2D-Fall', String.raw`$$f_x=0,\qquad f_y=0$$`, 'Innere stationäre Punkte.', { 'f_x': 'partielle Ableitung nach x', 'f_y': 'partielle Ableitung nach y' }),
      formula('Hesse-Matrix', String.raw`$$H=\begin{pmatrix}f_{xx}&f_{xy}\\ f_{yx}&f_{yy}\end{pmatrix}$$`, 'Sammelt die zweiten partiellen Ableitungen.', { 'f_{xx}': 'zweite Ableitung in x-Richtung', 'f_{xy}': 'gemischte Ableitung' }),
      formula('Hesse-Determinante', String.raw`$$D=f_{xx}f_{yy}-f_{xy}^2$$`, 'Zentrale Größe zur lokalen Klassifikation im 2×2-Fall.', { D: 'Determinante der Hesse-Matrix' })
    ],
    aufgaben: [
      task(
        String.raw`Bestimmen Sie die stationäre Stelle von $f(x,y)=2x^2+y^2+8x+2y$ und klassifizieren Sie sie.`,
        [
          step('FOCs lösen.', String.raw`f_x=4x+8=0 \Rightarrow x=-2,\qquad f_y=2y+2=0 \Rightarrow y=-1`),
          step('Hesse prüfen.', String.raw`H=\begin{pmatrix}4&0\\0&2\end{pmatrix},\qquad D=8>0,\qquad f_{xx}=4>0`),
          step('Klassifikation formulieren.', null)
        ],
        String.raw`$(-2,-1)$ ist ein lokales Minimum; wegen strenger Konvexität hier zugleich global.`
      ),
      task(
        String.raw`Erläutern Sie, warum bei einer Optimierungsaufgabe auf einem kompakten Rechteck nicht nur innere stationäre Punkte betrachtet werden dürfen.`,
        [
          step('Extremwertsatz in Worten nutzen.', null),
          step('Rand und Ecken als zusätzliche Kandidaten nennen.', null),
          step('Klausurfolge formulieren.', null)
        ],
        String.raw`Auf einer kompakten Menge existieren globale Extrema, sie können aber auch am Rand oder in Ecken liegen. Deshalb muss die Kandidatenliste innen und außen prüfen.`
      )
    ],
    intuition: {
      core: 'Im Mehrvariablenfall ist Optimierung eine Landschaftsfrage: stationäre Punkte finden, dann mit der lokalen Krümmung entscheiden, ob dort Tal, Gipfel oder Sattel liegt.',
      analogy: 'Auf einer Gebirgsoberfläche kann ein Punkt flach wirken und trotzdem kein Gipfel sein — genau dafür braucht man die Hesse-Logik.',
      bridge: 'Diese lokale Landschaftslogik wird bei Nebenbedingungen durch Lagrange um eine Restriktionsgeometrie ergänzt.',
      exam: [
        { if: 'stationär im Inneren', then: 'Alle FOCs null setzen.' },
        { if: 'lokal klassifizieren', then: 'Hesse-Determinante und Vorzeichen von $f_{xx}$ prüfen.' },
        { if: 'global auf kompakter Menge', then: 'Rand und Ecken ausdrücklich mitnehmen.' },
        { if: 'Sattelpunkt', then: 'Stationär heißt nicht automatisch Extremum.' }
      ]
    },
    mastery: [
      'Stationäre Punkte bivariater Funktionen systematisch bestimmen',
      'Lokale Maximum-, Minimum- und Sattelpunkte über die Hesse-Matrix klassifizieren',
      'Globale Optimierung auf kompakten Bereichen mit Randanalyse durchführen',
      'Offene, abgeschlossene, beschränkte und kompakte Mengen als Optimierungskontext deuten'
    ],
    links: { uses: ['analysis_multivariat', 'univariate_optimierung'], usedBy: ['lagrange', 'r_begleitpraxis'] },
    stepProblems: [
      {
        title: 'Was kommt nach den FOCs?',
        context: 'Die Hesse-Matrix ist kein Extra, sondern der zweite Pflichtschritt.',
        steps: [
          { q: '[1. FOCs] Wie viele Gleichungen brauchst du für eine bivariate innere Stelle?', answer: ['2', 'zwei'], options: { problemId: 'ma_op2_1', stepId: 'foc', isDecision: true }, hint: '$f_x=0$ und $f_y=0$.', explain: 'Für den bivariaten Fall brauchst du zwei FOCs.' },
          { q: '[2. Klassifikation] Welches Objekt nutzt du danach?', answer: ['hesse', 'hesse-matrix'], options: { problemId: 'ma_op2_1', stepId: 'hesse', dependsOn: 'foc' }, hint: 'Zweite Ableitungen bündeln.', explain: 'Danach kommt die Hesse-Matrix bzw. ihre Determinante.' }
        ]
      }
    ],
    rBlocks: [
      {
        title: 'Bivariate Optimierung mit optim() kontrollieren',
        purpose: 'Die OP-II-R-Blätter dienen als Rechenkontrolle: Du sollst die analytische Lösung zuerst verstehen und dann numerisch plausibilisieren.',
        script: 'R.OP II: optim() für zwei Variablen',
        code: String.raw`f <- function(v) (v[1] + 2)^2 + (v[2] + 1)^2
optim(c(0, 0), f)$par`,
        interpretation: 'Die Ausgabe liefert den numerischen Minimierer. Sie sollte mit der per FOCs bestimmten stationären Stelle übereinstimmen.',
        miniTask: 'Ersetze die Zielfunktion durch `-(...)` und erkläre, warum das Ergebnis dann als Maximum der ursprünglichen Funktion lesbar ist.',
        solution: 'Durch das Vorzeichen drehst du Minimum und Maximum um. Die numerische Optimierung bleibt dieselbe Methode, aber die ökonomische Lesart ändert sich.',
        solutionChanges: [
          'Setze in der Funktionsdefinition ein Minus vor den bisherigen Ausdruck.',
          'Starte `optim(...)` mit derselben Initialisierung neu und lies das Ergebnis jetzt als Maximum der ursprünglichen Funktion.'
        ],
        solutionCode: String.raw`f <- function(v) -((v[1] + 2)^2 + (v[2] + 1)^2)
optim(c(0, 0), f)$par`,
        pitfalls: ['Numerische Optimierung ohne analytisches Vorverständnis verwenden.', 'Nicht prüfen, ob die numerische Lösung zur Hesse-Klassifikation passt.']
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'lagrange',
    title: 'Lagrange-Methode & Nebenbedingungen',
    cat: 'Optimierung',
    short: 'OP2B',
    sourceRefs: [
      '09Mathe_OP2_MultivOptimierung.pdf',
      'Kleinübung/OP_2_-__Multivariate_Optimierung/OP_II_-_Aufgaben.pdf'
    ],
    motivation: 'Lagrange ist das Standardwerkzeug, wenn ein Optimum nicht frei, sondern durch Ressourcen, Budgets oder technische Restriktionen begrenzt ist.',
    cardsTitle: 'Standard-Schema',
    cards: [
      { title: 'Lagrange-Funktion', value: 'Zielfunktion + Restriktion', note: 'Mit konsistenter Vorzeichenkonvention arbeiten.', sourceStatus: 'source-distilled' },
      { title: 'Alle FOCs', value: 'inklusive Nebenbedingung', note: 'Ohne $g(x,y)=c$ ist die Lösung nicht zulässig abgesichert.', sourceStatus: 'source-distilled' },
      { title: 'Tangentialbedingung', value: 'nur Zwischenlesart', note: 'Sie ersetzt die vollständige Lösung des Systems nicht.', sourceStatus: 'source-distilled' },
      { title: 'Schattenpreis', value: '$\\lambda$ deuten', note: 'Wert einer marginalen Lockerung der Restriktion.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Aufbau der Lagrange-Funktion',
        body: [
          'Sobald eine Gleichungsnebenbedingung vorliegt, wird die Zielfunktion um die Restriktion erweitert. Damit wird aus einem eingeschränkten Problem wieder ein Gleichungssystem in mehreren Unbekannten inklusive Multiplikator.',
          'Für die Klausur zählt vor allem das saubere Schema: Zielfunktion, Restriktion, Lagrange-Funktion, FOCs, Rückeinsetzen.'
        ],
        math: [String.raw`$$\mathcal{L}(x,y,\lambda)=f(x,y)+\lambda\,(c-g(x,y))$$`],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'FOCs, Tangentialbedingung und Lösung',
        body: [
          'Aus der Lagrange-Funktion entstehen die ersten Ableitungen nach allen Variablen und nach dem Multiplikator. Erst gemeinsam liefern sie die zulässige Lösung.',
          'Die bekannte Tangentialbedingung ist nur eine Lesart dieser FOCs: Sie erklärt, warum sich Niveaukurve und Restriktionskurve im Optimum berühren.'
        ],
        math: [
          String.raw`$$\frac{\partial\mathcal{L}}{\partial x}=0,\qquad \frac{\partial\mathcal{L}}{\partial y}=0,\qquad \frac{\partial\mathcal{L}}{\partial \lambda}=0$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Interpretation von λ und Erweiterungen',
        body: [
          'Der Multiplikator $\\lambda$ misst den Wert einer marginalen Lockerung der Restriktion. Genau deshalb spricht man vom Schattenpreis.',
          'Die erweiterten Lagrange-Inhalte sind im Kurs keine neue Grundidee, sondern Variationen desselben Schemas: mehrere Restriktionen, andere Nebenbedingungen oder zusätzliche Randüberlegungen.'
        ],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('Nebenbedingung vergessen', 'Die Ableitung nach $\\lambda$ reproduziert die Restriktion — sie darf nie fehlen.'),
      warning('Tangentialbedingung als Endpunkt', 'Aus dem Ableitungsverhältnis allein folgt noch keine vollständige zulässige Lösung.'),
      warning('λ ohne ökonomische Lesart', 'Der Multiplikator ist nicht nur Hilfsvariable, sondern ein inhaltlich interpretierbarer Schattenpreis.')
    ],
    formeln: [
      formula('Lagrange-Funktion', String.raw`$$\mathcal{L}(x,y,\lambda)=f(x,y)+\lambda\,(c-g(x,y))$$`, 'Standardform für eine Gleichungsnebenbedingung.', { '\\mathcal{L}': 'Lagrange-Funktion', lambda: 'Multiplikator / Schattenpreis', c: 'vorgegebener Restriktionswert', g: 'Restriktionsfunktion' }),
      formula('FOC-System', String.raw`$$\mathcal{L}_x=0,\qquad \mathcal{L}_y=0,\qquad \mathcal{L}_\lambda=0$$`, 'Drei Gleichungen für zwei Wahlvariablen plus Multiplikator.', { '\\mathcal{L}_x': 'FOC nach x', '\\mathcal{L}_\\lambda': 'rekonstruiert die Restriktion' }),
      formula('Tangentiallesart', String.raw`$$\frac{f_x}{f_y}=\frac{g_x}{g_y}$$`, 'Verhältnis marginaler Wirkungen im inneren Optimum unter Restriktion.', { 'f_x': 'Grenzwirkung der Zielfunktion in x-Richtung', 'g_x': 'Grenzwirkung der Restriktion in x-Richtung' })
    ],
    aufgaben: [
      task(
        String.raw`Maximieren Sie $U(x_1,x_2)=x_1^{0{,}5}x_2^{0{,}5}$ unter $x_1+x_2=8$.`,
        [
          step('Lagrange-Funktion aufstellen.', String.raw`\mathcal{L}=x_1^{0{,}5}x_2^{0{,}5}+\lambda(8-x_1-x_2)`),
          step('FOCs bilden und Verhältnis lesen.', String.raw`\frac{1}{2}\sqrt{\frac{x_2}{x_1}}=\lambda,\qquad \frac{1}{2}\sqrt{\frac{x_1}{x_2}}=\lambda \Rightarrow x_1=x_2`),
          step('Nebenbedingung einsetzen.', String.raw`x_1+x_2=8 \Rightarrow x_1=x_2=4`)
        ],
        String.raw`Das Optimum liegt bei $(4,4)$. Die Tangentialbedingung liefert nur zusammen mit der Nebenbedingung die zulässige Lösung.`
      ),
      task(
        String.raw`Erläutern Sie die ökonomische Bedeutung des Multiplikators $\\lambda$ in einem Satz und geben Sie ein typisches Klausurbeispiel an.`,
        [
          step('Interpretation als marginale Lockerung formulieren.', null),
          step('Ressourcen- oder Budgetbeispiel nennen.', null),
          step('Grenzlesart explizit machen.', null)
        ],
        String.raw`$\\lambda$ misst den marginalen Wert einer zusätzlichen Einheit der knappen Ressource, zum Beispiel eines zusätzlichen Euro Budget oder einer weiteren Kapazitätseinheit.`
      )
    ],
    intuition: {
      core: 'Lagrange sagt: Das freie Optimum zählt nicht mehr — optimal ist nur, was auf der zulässigen Restriktion liegt und dort keine bessere zulässige Richtung mehr offenlässt.',
      analogy: 'Wie beim Klettern an einer Felswand mit Seil: Du suchst den besten Punkt, aber nur entlang der Linie, die dir das Seil erlaubt.',
      bridge: 'Die Methode verbindet multivariate Ableitungen mit ökonomischer Restriktionslogik und liefert den Zugang zu Schattenpreisen.',
      exam: [
        { if: 'Gleichungsnebenbedingung', then: 'Lagrange ist meist das Standardschema.' },
        { if: 'FOCs gelöst', then: 'Restriktion unbedingt rückeinsetzen.' },
        { if: 'λ gefragt', then: 'Als Wert einer marginal gelockerten Restriktion deuten.' },
        { if: 'Tangentialbedingung sichtbar', then: 'Als Zwischenschritt lesen, nicht als Endergebnis.' }
      ]
    },
    mastery: [
      'Lagrange-Funktionen mit konsistenter Restriktionsschreibweise aufstellen',
      'Alle FOCs inklusive Restriktion vollständig lösen',
      'Tangentialbedingung korrekt einordnen und mit der Nebenbedingung verknüpfen',
      'Den Multiplikator $\\lambda$ als Schattenpreis interpretieren'
    ],
    links: { uses: ['analysis_multivariat', 'multivariate_optimierung'], usedBy: ['integralrechnung', 'r_begleitpraxis'] },
    stepProblems: [
      {
        title: 'Welche Gleichung kommt von λ?',
        context: 'Die Restriktion darf in der Prüfung nicht verloren gehen.',
        steps: [
          { q: '[1. Ableitung nach λ] Was liefert $\\partial\\mathcal{L}/\\partial\\lambda=0$?', answer: ['nebenbedingung', 'restriktion'], options: { problemId: 'ma_lag_1', stepId: 'lambda', isDecision: true }, hint: 'Die Restriktion selbst.', explain: 'Die Ableitung nach λ stellt die Nebenbedingung wieder her.' },
          { q: '[2. Typischer Fehler] Reicht die Tangentialbedingung allein?', answer: ['nein', 'no'], options: { problemId: 'ma_lag_1', stepId: 'tangent', dependsOn: 'lambda' }, hint: 'Du brauchst weiterhin Zulässigkeit.', explain: 'Nein, ohne Restriktion ist die Lösung nicht vollständig bestimmt.' }
        ]
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'integralrechnung',
    title: 'Integralrechnung, Flächen & numerische Verfahren',
    cat: 'Analysis',
    short: 'AN3',
    sourceRefs: [
      '10Mathe_AN3_Integralrechnung.pdf',
      'Kleinübung/AN_3_-_Intergralrechnung/AN_III_-_Aufgaben.pdf'
    ],
    motivation: 'Integrale schließen die Brücke zwischen marginaler Größe und akkumuliertem Effekt: Fläche, Bestand, Gesamtwirkung und numerische Annäherung.',
    cardsTitle: 'Schnelllesart',
    cards: [
      { title: 'Unbestimmt', value: 'Stammfunktion + C', note: 'Ohne Grenzen geht es um eine ganze Funktionsfamilie.', sourceStatus: 'source-distilled' },
      { title: 'Bestimmt', value: 'Stammfunktion an Grenzen', note: 'Der Hauptsatz verbindet Niveau und Fläche.', sourceStatus: 'source-distilled' },
      { title: 'Partielle Integration / Substitution', value: 'Methode bewusst wählen', note: 'Der Kurs prüft beide Familien explizit in eigenen Aufgabenblöcken.', sourceStatus: 'source-distilled' },
      { title: 'Improper / numerisch', value: 'Grenz- oder Approximationsthema', note: 'Nicht jedes Integral ist elementar geschlossen lösbar.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Grundlagen und Hauptsatz',
        body: [
          'Die Integralrechnung startet im Kurs mit dem engen Zusammenhang zwischen Stammfunktion und bestimmtem Integral. Dadurch wird klar: Integration ist das Gegenstück zum Ableiten, aber nicht bloß dessen „Umkehrknopf“.',
          'Besonders prüfungsrelevant ist die saubere Unterscheidung zwischen unbestimmtem Integral, bestimmtem Integral und Flächeninhalt.'
        ],
        math: [
          String.raw`$$\int f(x)\,dx=F(x)+C,\qquad \int_a^b f(x)\,dx=F(b)-F(a)$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Partielle Integration und Substitution',
        body: [
          'AN III trennt die beiden Standardmethoden explizit. Genau deshalb muss eine klausurfeste Lösung nicht nur rechnen, sondern zuerst erkennen, welche Struktur vorliegt: Produkt mit „abnehmender“ Ableitungsstufe oder verketteter Ausdruck mit passendem inneren Term.',
          'Die Kleinübungen verbinden diese Methoden auch mit bestimmten Integralen und später mit numerischer Kontrolle in R.'
        ],
        math: [
          String.raw`$$\int u\,v'\,dx=uv-\int u'v\,dx$$`,
          String.raw`$$\int f(g(x))g'(x)\,dx=\int f(u)\,du$$`
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Uneigentliche, doppelte und numerische Integrale',
        body: [
          'Der Kurs endet nicht bei Standardstammfunktionen. Unendliche Intervalle, unbeschränkte Integranden, Doppelintegrale und numerische Integration machen deutlich, dass Integrale auch Grenz- und Approximationsobjekte sind.',
          'Gerade hier wird R als Begleitpraxis didaktisch sinnvoll: nicht als Ersatz für Theorie, sondern zur Kontrollrechnung und Approximation.'
        ],
        sourceStatus: 'source-distilled'
      }
    ],
    warnings: [
      warning('Stammfunktion ohne +C', 'Beim unbestimmten Integral gehört die Integrationskonstante dazu.'),
      warning('Integralwert mit Flächeninhalt verwechselt', 'Unterhalb der x-Achse zählt das bestimmte Integral negativ; ein Flächeninhalt verlangt ggf. Intervallsplitting oder Beträge.'),
      warning('Methode blind gewählt', 'Partielle Integration und Substitution müssen zur Struktur passen; sonst verkompliziert sich der Ausdruck.'),
    ],
    formeln: [
      formula('Hauptsatz der Analysis', String.raw`$$\int_a^b f(x)\,dx=F(b)-F(a)$$`, 'Berechnung bestimmter Integrale über eine Stammfunktion.', { a: 'untere Grenze', b: 'obere Grenze', F: 'Stammfunktion von f' }),
      formula('Partielle Integration', String.raw`$$\int u\,v'\,dx=uv-\int u'v\,dx$$`, 'Standardmethode für Produkte.', { u: 'geeignet zu differenzierender Faktor', "v'": 'geeignet zu integrierender Faktor' }),
      formula('Substitution', String.raw`$$u=g(x),\qquad du=g'(x)\,dx$$`, 'Standardmethode für verkettete Ausdrücke.', { u: 'Substitutionsvariable', g: 'innerer Term' }),
      formula('Newton-Leibniz', String.raw`$$\frac{d}{dt}\int_{a(t)}^{b(t)} f(x)\,dx=f(b(t))b'(t)-f(a(t))a'(t)$$`, 'Differenzieren von Integralen mit variablen Grenzen.', { t: 'Parameter', a: 'untere Grenze', b: 'obere Grenze' })
    ],
    aufgaben: [
      task(
        String.raw`Berechnen Sie $\int_1^2 (2x^2+2)\,dx$ und erläutern Sie, warum der Flächeninhalt hier direkt mit dem Integralwert übereinstimmt.`,
        [
          step('Stammfunktion bilden.', String.raw`F(x)=\frac{2}{3}x^3+2x`),
          step('Grenzen einsetzen.', String.raw`F(2)-F(1)=\left(\frac{16}{3}+4\right)-\left(\frac{2}{3}+2\right)=\frac{20}{3}`),
          step('Vorzeichenfrage klären.', null)
        ],
        String.raw`Der Integrand ist auf $[1,2]$ positiv, deshalb entspricht der Integralwert hier direkt dem Flächeninhalt.`
      ),
      task(
        String.raw`Bestimmen Sie $\int x e^x\,dx$ mittels partieller Integration und benennen Sie das gewählte Schema.`,
        [
          step('Wahl der Faktoren.', String.raw`u=x,\qquad v'=e^x`),
          step('Partielle Integration anwenden.', String.raw`\int xe^x\,dx=xe^x-\int 1\cdot e^x\,dx`),
          step('Restintegral abschließen.', String.raw`=xe^x-e^x+C=e^x(x-1)+C`)
        ],
        String.raw`Die passende Methode ist partielle Integration, weil ein Produkt aus Polynom und Exponentialfunktion vorliegt.`
      )
    ],
    intuition: {
      core: 'Integration sammelt kleine Wirkungen zu einer Gesamtwirkung auf. Aus einer Randgeschwindigkeit wird eine Gesamtstrecke, aus einer Grenzgröße ein Gesamtwert.',
      analogy: 'Wie ein Wasserzähler: Der Durchfluss zu einem Zeitpunkt ist etwas anderes als die über die Zeit aufgelaufene Gesamtmenge.',
      bridge: 'Diese Akkumulationslogik verbindet Ableitung, Fläche, numerische Approximation und ökonomische Größen wie Renten oder Bestände.',
      exam: [
        { if: 'ohne Grenzen', then: 'Stammfunktion plus Integrationskonstante.' },
        { if: 'mit Grenzen', then: 'Hauptsatz: erst Stammfunktion, dann Grenzen.' },
        { if: 'Produktstruktur', then: 'Partielle Integration prüfen.' },
        { if: 'verketteter Ausdruck mit passendem inneren Faktor', then: 'Substitution prüfen.' }
      ]
    },
    mastery: [
      'Unbestimmte und bestimmte Integrale sicher unterscheiden',
      'Den Hauptsatz der Analysis in Rechen- und Sprachform anwenden',
      'Partielle Integration und Substitution passend auswählen und durchführen',
      'Integralwert, Flächeninhalt und numerische Approximation sauber voneinander trennen'
    ],
    links: { uses: ['analysis_ableitung_grundlagen', 'analysis_monotonie_grenzwerte'], usedBy: ['r_begleitpraxis'] },
    stepProblems: [
      {
        title: 'Welche Methode passt?',
        context: 'Struktur erkennen, dann rechnen.',
        steps: [
          { q: '[1. Produkt] Was prüfst du bei $x e^x$ zuerst?', answer: ['partielle integration', 'partielle'], options: { problemId: 'ma_int_1', stepId: 'method', isDecision: true }, hint: 'Produkt aus Polynom und Exponentialfunktion.', explain: 'Hier ist partielle Integration der Standardzugriff.' },
          { q: '[2. Verkettung] Was prüfst du bei $(x^3+2)^3 x^2$?', answer: ['substitution'], options: { problemId: 'ma_int_1', stepId: 'subst', dependsOn: 'method' }, hint: 'Innerer Term plus fast passende Ableitung.', explain: 'Das ist ein typischer Substitutionsfall.' }
        ]
      }
    ],
    rBlocks: [
      {
        title: 'Bestimmte Integrale mit integrate() kontrollieren',
        purpose: 'R soll den Integralwert sichtbar machen, nachdem du den mathematischen Weg bereits verstanden hast.',
        script: 'R.AN III: integrate() und numerische Kontrolle',
        code: String.raw`f <- function(x) 2 * x^2 + 2
integrate(f, lower = 1, upper = 2)`,
        interpretation: 'R liefert eine numerische Approximation des bestimmten Integrals. Sie sollte mit deinem händisch berechneten Wert übereinstimmen.',
        miniTask: 'Ersetze `f` durch `function(x) x * exp(x)` und notiere, welchen Integraltyp du davor händisch gewählt hättest.',
        solution: 'Vor der numerischen Kontrolle würdest du hier partielle Integration wählen. R ersetzt die Methodenwahl nicht, sondern bestätigt den Wert.',
        solutionChanges: [
          'Ersetze nur die Funktionsdefinition `f <- function(x) ...` durch `f <- function(x) x * exp(x)`.',
          'Lass den `integrate(...)`-Aufruf mit denselben Grenzen stehen, damit nur der Integrand wechselt.'
        ],
        solutionCode: String.raw`f <- function(x) x * exp(x)
integrate(f, lower = 1, upper = 2)`,
        pitfalls: ['Numerische Ausgabe ohne Vorzeichen- und Intervallfrage interpretieren.', 'Die numerische Kontrolle als Ersatz für die methodische Begründung behandeln.']
      }
    ],
    sourceStatus: 'source-distilled'
  },
  {
    id: 'r_begleitpraxis',
    title: 'R-Begleitpraxis',
    cat: 'Anwendung',
    short: 'R',
    sourceRefs: [
      'R.E1_-_Aufgaben.pdf bis R.OP_II_-_Aufgaben.pdf'
    ],
    motivation: 'Die R-Begleitpraxis ist kein separates Coding-Spielzeug, sondern die rechnerische Begleitspur zu den Vorlesungs- und Kleinübungsinhalten der Mathematik.',
    cardsTitle: 'So nutzt du die R-Begleitpraxis',
    cards: [
      { title: 'Zuerst', value: 'mathematisches Ziel klären', note: 'R kommt nach dem Fachverständnis, nicht davor.', sourceStatus: 'source-distilled' },
      { title: 'Dann', value: 'Startcode lesen', note: 'Nicht alles editieren — nur die Zeilen, die der Mini-Task wirklich betrifft.', sourceStatus: 'platform-added-explanation' },
      { title: 'Output', value: 'fachlich deuten', note: 'Nicht nur Zahl oder Plot nennen, sondern die mathematische Bedeutung formulieren.', sourceStatus: 'platform-added-explanation' },
      { title: 'Typischer Nutzen', value: 'Kontrolle, Sichtbarkeit, Numerik', note: 'Plotten, Matrixdiagnostik, numerische Optimierung und Integralwerte.', sourceStatus: 'source-distilled' }
    ],
    sections: [
      {
        title: 'Was R im Mathematik-Modul leisten soll',
        body: [
          'Die R-Sheets im Kurs begleiten fast jeden Themenblock. Sie sind didaktisch am stärksten, wenn sie Funktionen sichtbar machen, numerische Rechnungen kontrollieren oder Matrix- und Optimierungsresultate verifizieren.',
          'Benchmark-Niveau heißt deshalb: klarer Arbeitsablauf, ehrlicher Runtime-Hinweis und ein fachlich formulierter Mini-Task statt bloßer Code-Dekoration.'
        ],
        sourceStatus: 'source-distilled'
      },
      {
        title: 'Arbeitsreihenfolge für Einsteiger',
        body: [
          '1. Lernziel lesen. 2. Code überfliegen und erkennen, welche mathematische Struktur darin steckt. 3. Nur die im Mini-Task verlangten Zeilen ändern. 4. Output lesen und in Fachsprache deuten.',
          'Genau diese Reihenfolge ist wichtig, damit R die Mathematik stützt statt sie zu verdecken.'
        ],
        sourceStatus: 'platform-added-explanation'
      }
    ],
    warnings: [
      warning('Mit der Software starten statt mit der Mathematik', 'Erst Begriff, Methode und Frage klären; dann R als Werkzeug nutzen.'),
      warning('Alles im Editor ändern', 'Die Startblöcke enthalten bewusst stabile Daten- oder Funktionsdefinitionen. Nur die Zielzeilen ändern.'),
      warning('Output nicht deuten', 'Eine Konsole oder ein Plot ist noch keine Antwort. Abschluss immer in mathematischer Sprache formulieren.')
    ],
    formeln: [
      formula('Plot-Workflow', String.raw`$$\texttt{curve(f,\ from=a,\ to=b)}$$`, 'Kurven einer Funktion im gewählten Intervall sichtbar machen.', { a: 'linke Plotgrenze', b: 'rechte Plotgrenze' }, 'platform-added-explanation'),
      formula('Matrix-Workflow', String.raw`$$\texttt{A \%*\% B},\ \texttt{solve(A)},\ \texttt{eigen(A)}$$`, 'Standardbefehle für Produkt, Inverse und Eigenwertkontrolle.', { A: 'erste Matrix', B: 'zweite Matrix' }, 'platform-added-explanation'),
      formula('Numerische Methoden', String.raw`$$\texttt{optimize(...)} ,\ \texttt{optim(...)} ,\ \texttt{integrate(...)}$$`, 'Kontrollbefehle für Optimierungs- und Integrationsaufgaben.', {}, 'platform-added-explanation')
    ],
    aufgaben: [
      task(
        'Formuliere in drei Sätzen eine gute Arbeitsreihenfolge für ein R-Blatt zu Optimierung oder Integralrechnung.',
        [
          step('Zuerst mathematisches Lernziel nennen.', null),
          step('Dann erklären, was im Startcode stabil bleiben soll.', null),
          step('Zum Schluss Output-Deutung statt bloßer Zahl formulieren.', null)
        ],
        'Eine gute Antwort nennt erst die mathematische Methode, dann den gezielten Codezugriff und zuletzt die inhaltliche Interpretation des Outputs.'
      )
    ],
    intuition: {
      core: 'R ist im Mathematik-Modul ein didaktischer Verstärker: Es macht Struktur sichtbar und kontrolliert Rechnungen, ersetzt aber nicht die mathematische Entscheidung.',
      analogy: 'Wie ein Taschenrechner mit Bildschirm: hilfreich, wenn du weißt, welche Frage du stellst; verwirrend, wenn du die Frage nicht verstanden hast.',
      bridge: 'Die R-Begleitpraxis verdichtet Plot-, Matrix-, Optimierungs- und Integralroutinen aus den einzelnen Themenblöcken.',
      exam: [
        { if: 'Plot-Aufgabe', then: 'Erst sagen, welche Form oder welcher Punkt sichtbar werden soll.' },
        { if: 'Matrix-Output', then: 'Determinante, Inverse oder Eigenwerte fachlich einordnen.' },
        { if: 'optimize/optim', then: 'Numerisches Ergebnis mit analytischem Kandidaten vergleichen.' },
        { if: 'integrate', then: 'Vorher klären, welche Methode du händisch gewählt hättest.' }
      ]
    },
    mastery: [
      'R-Blätter als Begleitpraxis statt als isolierte Programmieraufgabe nutzen',
      'Funktionen, Matrizen, Optimierung und Integrale mit passenden R-Befehlen kontrollieren',
      'Startcode gezielt bearbeiten statt blind umzuschreiben',
      'Output und Plots in mathematisch sauberer Sprache interpretieren'
    ],
    links: { uses: ['funktionen_gleichungen', 'lineare_algebra_grundlagen', 'lineare_algebra_struktur', 'univariate_optimierung', 'multivariate_optimierung', 'integralrechnung'], usedBy: [] },
    stepProblems: [
      {
        title: 'Wie arbeitest du mit einem R-Block?',
        context: 'Das Lernziel kommt vor dem Klick.',
        steps: [
          { q: '[1. Reihenfolge] Was kommt zuerst: Run oder Lernziel lesen?', answer: ['lernziel', 'lesen'], options: { problemId: 'ma_r_1', stepId: 'first', isDecision: true }, hint: 'Die Aufgabe steuert den Codezugriff.', explain: 'Zuerst das Lernziel bzw. den Mini-Task lesen.' },
          { q: '[2. Output] Reicht es, das Ergebnis nur abzuschreiben?', answer: ['nein', 'no'], options: { problemId: 'ma_r_1', stepId: 'interp', dependsOn: 'first' }, hint: 'Die Bedeutung gehört dazu.', explain: 'Nein, der Output muss immer mathematisch interpretiert werden.' }
        ]
      }
    ],
    rBlocks: [
      {
        title: 'Funktionen, Matrizen und Numerik in einem Workflow',
        purpose: 'Dieser Sammelblock bündelt die drei häufigsten R-Nutzen im Mathematik-Kurs: sichtbar machen, strukturell prüfen, numerisch kontrollieren.',
        script: 'R-Begleitpraxis: Überblick',
        code: String.raw`f <- function(x) x^2 - 3 * x + 2
curve(f, from = -1, to = 4, col = "steelblue", lwd = 2)
A <- matrix(c(2, 1, 4, 3), nrow = 2, byrow = TRUE)
det(A)
optimize(function(x) 8 * x - x^2, interval = c(0, 10), maximum = TRUE)
integrate(function(x) 2 * x^2 + 2, lower = 1, upper = 2)`,
        interpretation: 'Der Block zeigt in einem Durchgang die vier häufigsten R-Rollen im Modul: Plot, Matrixdiagnose, numerische Optimierung und numerisches Integral.',
        miniTask: 'Kommentiere im Code mit `#`, welche Zeile zu welchem mathematischen Themenblock gehört.',
        solution: 'Eine gute Lösung markiert Plot/Funktionen, Matrixdiagnose, Optimierung und Integral jeweils als eigenen mathematischen Zugriff.',
        solutionChanges: [
          'Füge vor den thematischen Blöcken kurze Kommentarzeilen mit `#` ein.',
          'Verändere die eigentlichen Befehle nicht; die Aufgabe prüft Strukturierung, nicht neue Berechnung.'
        ],
        solutionCode: String.raw`# Funktionen / Graph lesen
f <- function(x) x^2 - 3 * x + 2
curve(f, from = -1, to = 4, col = "steelblue", lwd = 2)

# Matrixdiagnose
A <- matrix(c(2, 1, 4, 3), nrow = 2, byrow = TRUE)
det(A)

# Numerische Optimierung
optimize(function(x) 8 * x - x^2, interval = c(0, 10), maximum = TRUE)

# Numerische Integration
integrate(function(x) 2 * x^2 + 2, lower = 1, upper = 2)`,
        pitfalls: ['Zu viele Dinge gleichzeitig ändern, statt Block für Block zu lesen.', 'Softwarebefehle aufzählen, ohne das mathematische Lernziel zu benennen.']
      }
    ],
    sourceStatus: 'source-distilled'
  }
];
