import { CURRICULUM } from './curriculum.js';

const GUIDED_PROMPT_BANK = {
  algebra_mengen: [
    'Bestimmen Sie den Definitionsbereich von $f(x)=\\dfrac{x+1}{(x-2)(x+4)}$ und geben Sie ihn in Intervallschreibweise an.',
    'Lösen Sie die Ungleichung $-3(2x-1)\\le 9$ und achten Sie auf den korrekten Vorzeichenwechsel.',
    'Bestimmen Sie die Lösungsmenge von $|x+2|\\ge 4$ in Intervallschreibweise.',
    'Gegeben seien $A=[-1,4]$ und $B=(2,\\infty)$. Bestimmen Sie $A\\cap B$, $A\\cup B$ und $A\\setminus B$.',
    'Ein Bearbeiter multipliziert bei einer Ungleichung mit $-2$, lässt das Ungleichheitszeichen aber unverändert. Korrigieren Sie den Lösungsweg.',
    'In einer Bruchgleichung wird über die Summe $x+3$ gekürzt. Erläutern Sie, warum das unzulässig ist, und stellen Sie den korrekten Rechenweg her.',
    'Für $g(x)=\\dfrac{x^2-9}{x-3}$ wird $x=3$ als Lösung akzeptiert. Prüfen Sie den Kandidaten und berichtigen Sie das Ergebnis.',
    'Entscheiden Sie, ob $|x-5|\\le 2$ ein Intervall oder zwei Außenzonen beschreibt, und bestimmen Sie die zugehörige Menge.'
  ],
  funktionen_gleichungen: [
    'Bestimmen Sie den Definitionsbereich von $g(x)=\\dfrac{1}{x-4}+\\sqrt{x+1}$.',
    'Bestimmen Sie die Geradengleichung durch die Punkte $(1,4)$ und $(5,-4)$.',
    'Gegeben ist $f(x)=2(x-1)(x+3)$. Bestimmen Sie Nullstellen, Vorzeichenbereiche und die Art des Extrempunkts.',
    'Skizzieren Sie aus $g(x)=-(x-2)^2+3$ die Lage des Scheitels und beschreiben Sie Öffnung und Verschiebung.',
    'Ein Bearbeiter behauptet, der Graph von $h(x)=\\dfrac{x+1}{x-2}$ sei für alle $x$ definiert. Korrigieren Sie den Ansatz.',
    'Bei zwei gegebenen Punkten wird nur die Differenz der y-Werte verwendet. Stellen Sie die korrekte Steigungsberechnung auf.',
    'Zu einer quadratischen Funktion werden nur die Nullstellen genannt. Ergänzen Sie die fehlende Vorzeichenanalyse.',
    'Berechnen Sie die Steigung der Geraden durch $(-2,7)$ und $(3,-3)$ als saubere Zwischenfrage.'
  ],
  exp_log_inverse: [
    'Lösen Sie $3\\cdot e^{0{,}2t}=9$ nach $t$ auf.',
    'Vergleichen Sie $f(x)=1{,}05^x$ mit $g(x)=1+0{,}05x$ und erläutern Sie, welche Funktion exponentiell wächst.',
    'Gegeben sei $Q(P)=120-4P$. Bestimmen Sie die inverse Nachfrage $P(Q)$.',
    'Bestimmen Sie den Definitionsbereich von $h(x)=\\ln(2x-5)$.',
    'Ein Bearbeiter setzt in $\\ln(x-1)$ auch Werte $x\\le 1$ ein. Korrigieren Sie die Rechnung und die Domäne.',
    'Zu $Q(P)=90-3P$ wird dieselbe Steigung für $P(Q)$ übernommen. Erläutern Sie den Fehler und korrigieren Sie die inverse Funktion.',
    'Ein Bearbeiter bezeichnet $x^3$ als Exponentialfunktion. Stellen Sie die korrekte Unterscheidung zwischen Potenz- und Exponentialfunktion her.',
    'Entscheiden Sie für die Gleichungen $e^{2x}=7$ und $Q(P)=60-2P$, bei welcher Aufgabe zuerst logarithmiert und bei welcher invertiert wird.'
  ],
  summen_logik_beweise: [
    'Schreiben Sie $2+4+6+\\dots+2n$ als Summenzeichen und benennen Sie Laufindex, Grenze und Summand.',
    'Bringen Sie $\\sum_{i=1}^2\\sum_{j=1}^3 (i+j)$ in ausgeschriebene Form.',
    'Schreiben Sie $3\\cdot 4\\cdot 5\\cdot \\dots \\cdot (n+2)$ mit dem Produktzeichen.',
    'Negieren Sie die Aussage: „Für alle $x>0$ gilt $f(x)>0$.“',
    'Ein Bearbeiter verwendet in einer Doppelsumme denselben Index innen und außen. Korrigieren Sie die Notation.',
    'Aus „Wenn $A$, dann $B$“ wird „Wenn $B$, dann $A$“ geschlossen. Erläutern Sie, warum das falsch ist.',
    'Ein Beweis endet nach den Rechenschritten ohne abschließenden Schlusssatz. Ergänzen Sie die fehlende Schlussformulierung.',
    'Beantworten Sie die Zwischenfrage, welche Aussage logisch äquivalent zur Kontraposition von „Wenn $n$ ungerade ist, dann ist $n^2$ ungerade“ ist.'
  ],
  lineare_algebra_grundlagen: [
    'Prüfen Sie, ob das Produkt $A\\cdot B$ mit $A\\in\\mathbb{R}^{2\\times 3}$ und $B\\in\\mathbb{R}^{3\\times 1}$ definiert ist, und nennen Sie den Typ des Ergebnisses.',
    'Berechnen Sie den Eintrag in Zeile 1, Spalte 2 von $AB$ für $A=\\begin{pmatrix}1&2\\\\0&3\\end{pmatrix}$ und $B=\\begin{pmatrix}4&1\\\\-1&2\\end{pmatrix}$.',
    'Bestimmen Sie $(AB)^T$ für zwei Matrizen und erläutern Sie die Reihenfolge beim Transponieren eines Produkts.',
    'Bringen Sie das Gleichungssystem $x+2y=4$, $3x-y=5$ in die Form $Ax=b$.',
    'Ein Bearbeiter multipliziert zwei Matrizen elementweise. Korrigieren Sie die Rechnung anhand des Prinzips „Zeile mal Spalte“.',
    'Zu einem Matrixprodukt wird die Dimensionsprüfung übersprungen. Zeigen Sie, welche Prüfung zuerst erfolgen muss.',
    'Ein Bearbeiter schreibt $(AB)^T=A^TB^T$. Stellen Sie die korrekte Regel auf.',
    'Beantworten Sie die Zwischenfrage, wie der Eintrag $(AB)_{21}$ gebildet wird.'
  ],
  lineare_algebra_struktur: [
    'Bestimmen Sie Spur und Rang der Matrix $A=\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$.',
    'Berechnen Sie die Determinante von $A=\\begin{pmatrix}3&1\\\\2&1\\end{pmatrix}$ und entscheiden Sie über die Invertierbarkeit.',
    'Bestimmen Sie die Eigenwerte von $A=\\begin{pmatrix}4&0\\\\0&1\\end{pmatrix}$.',
    'Erläutern Sie für $Ax=b$, warum $\\det(A)\\neq 0$ Eindeutigkeit der Lösung bedeutet.',
    'Ein Bearbeiter liest aus einer nichtverschwindenden Determinante nur eine Zahl ab, zieht aber keine Folgerung für $A^{-1}$. Ergänzen Sie die Schlussfolgerung.',
    'Für eine Matrix werden Rang und Spur verwechselt. Korrigieren Sie die beiden Begriffe an einem kurzen Beispiel.',
    'Ein Eigenwert ist bestimmt, aber der Bearbeiter prüft $(A-\\lambda I)x=0$ nicht weiter. Vervollständigen Sie den Eigenvektor-Schritt.',
    'Beantworten Sie die Zwischenfrage, woran Sie in einer 2x2-Aufgabe sofort erkennen, ob die Matrix regulär oder singulär ist.'
  ],
  analysis_ableitung_grundlagen: [
    'Bestimmen Sie die Tangentensteigung von $f(x)=x^2-4x$ im Punkt $x=3$.',
    'Leiten Sie $g(x)=(3x-1)^4$ mit der Kettenregel ab.',
    'Bestimmen Sie die Ableitung von $h(x)=x^2e^x$.',
    'Gegeben sei $K(q)=q^3-6q^2+9q$. Bestimmen Sie die Grenzkostenfunktion $K\'(q)$.',
    'Ein Bearbeiter leitet $(2x+1)^5$ zu $5(2x+1)^4$ ab. Korrigieren Sie den Kettenregel-Fehler.',
    'Die Steigung einer Sekante wird mit der Tangentensteigung verwechselt. Stellen Sie die saubere Unterscheidung auf.',
    'Für $m(x)=\\ln(x-2)$ wird die Ableitung angegeben, ohne die Domäne zu prüfen. Korrigieren Sie die Lösung.',
    'Beantworten Sie die Zwischenfrage, welche Regel Sie bei $f(x)=\\dfrac{x^2+1}{x-1}$ zuerst brauchen.'
  ],
  analysis_monotonie_grenzwerte: [
    'Untersuchen Sie $f(x)=x^3-6x^2+9x$ auf Monotonieintervalle.',
    'Bestimmen Sie für $f(x)=x^4-4x^2$ die Bereiche von Konvexität und Konkavität.',
    'Berechnen Sie den Grenzwert $\\lim_{x\\to 0}\\dfrac{e^x-1}{x}$.',
    'Führen Sie einen Newton-Schritt für $f(x)=x^2-5$ mit Startwert $x_0=2$ aus.',
    'Ein Bearbeiter entscheidet Monotonie nur anhand von $f\'(2)$. Erläutern Sie, warum Intervalle geprüft werden müssen.',
    'L’Hôpital wird angewendet, obwohl die Form nicht unbestimmt ist. Korrigieren Sie das Vorgehen.',
    'Beim Newton-Verfahren wird ein Startwert ohne Blick auf den Graphen gewählt. Beschreiben Sie die saubere Startwertkontrolle.',
    'Beantworten Sie die Zwischenfrage, welches Vorzeichenmuster von $f\'$ zu „erst steigend, dann fallend“ führt.'
  ],
  univariate_optimierung: [
    'Bestimmen Sie die lokalen Extremstellen von $f(x)=x^3-3x^2-9x$.',
    'Maximieren Sie $f(x)=12x-x^2$ auf dem Intervall $[0,15]$.',
    'Ein Unternehmen hat Gewinn $\\pi(q)=18q-q^2-20$. Bestimmen Sie die gewinnmaximale Menge.',
    'Prüfen Sie für eine stationäre Stelle mit $f\'(x)=0$ und $f\'\'(x)<0$, welche Art von Extremum vorliegt.',
    'Ein Bearbeiter endet nach $f\'(x)=0$ und nennt das bereits das Optimum. Ergänzen Sie die fehlende Klassifikation.',
    'Bei einem Intervallproblem werden die Randpunkte nicht geprüft. Korrigieren Sie den Lösungsweg.',
    'Aus Erlös und Kosten wird die Zielfunktion unsauber gebildet. Stellen Sie die korrekte Gewinnfunktion auf.',
    'Beantworten Sie die Zwischenfrage, wann eine gefundene stationäre Stelle nur Kandidat und noch kein gesichertes Optimum ist.'
  ],
  analysis_multivariat: [
    'Berechnen Sie für $f(x,y)=x^2+3xy$ die partiellen Ableitungen $f_x$ und $f_y$.',
    'Bestimmen Sie für $f(x,y)=x^2+xy$ das totale Differential $df$.',
    'Prüfen Sie, ob $f(x,y)=x^2+2xy+y^2$ homogen ist und wenn ja, welchen Grad die Funktion hat.',
    'Beschreiben Sie sprachlich, was eine Niveaukurve von $f(x,y)=4$ bedeutet.',
    'Ein Bearbeiter verwechselt partielle und totale Ableitung. Stellen Sie die saubere Unterscheidung auf.',
    'Eine Konturlinie wird wie ein gewöhnlicher Funktionsgraph in $(x,f(x))$ gelesen. Korrigieren Sie die Interpretation.',
    'Bei der Homogenitätsprüfung wird nur eine Variable skaliert. Stellen Sie das korrekte Vorgehen her.',
    'Beantworten Sie die Zwischenfrage, wann Sie bei mehreren sich ändernden Variablen die totale Ableitung statt einer partiellen Ableitung brauchen.'
  ],
  multivariate_optimierung: [
    'Bestimmen Sie die stationäre Stelle von $f(x,y)=x^2+y^2-4x+2y$.',
    'Klassifizieren Sie die stationäre Stelle von $f(x,y)=x^2+xy+y^2$ mit Hilfe der Hesse-Matrix.',
    'Erläutern Sie bei einem Optimierungsproblem auf $[0,2]\\times[0,3]$, warum Rand und Ecken mitgeprüft werden müssen.',
    'Zeigen Sie an einem Beispiel, dass eine stationäre Stelle auch ein Sattelpunkt sein kann.',
    'Ein Bearbeiter stoppt nach dem Lösen der FOCs. Ergänzen Sie die fehlende Klassifikation des stationären Punkts.',
    'Die Hesse-Matrix wird notiert, aber ihre Determinante nicht ausgewertet. Vervollständigen Sie den Test.',
    'Bei einer kompakten Menge werden Rand und Ecken übergangen. Korrigieren Sie die Lösungsstruktur.',
    'Beantworten Sie die Zwischenfrage, was nach den FOCs als nächster Prüfungsschritt folgt.'
  ],
  lagrange: [
    'Stellen Sie für $f(x,y)=xy$ unter der Nebenbedingung $x+y=10$ die Lagrange-Funktion auf und bestimmen Sie das Optimum.',
    'Interpretieren Sie den Multiplikator $\\lambda$ in einer Budgetrestriktion in einem präzisen Satz.',
    'Maximieren Sie $U(x_1,x_2)=x_1x_2$ unter $2x_1+x_2=12$.',
    'Leiten Sie aus den FOCs einer Lagrange-Aufgabe die Tangentialbedingung ab und erläutern Sie ihre Rolle.',
    'Ein Bearbeiter bildet die Ableitungen erster Ordnung, vergisst aber die Nebenbedingung. Korrigieren Sie den Lösungsweg.',
    'Die Tangentialbedingung wird als Endergebnis hingeschrieben. Ergänzen Sie die fehlenden Schritte bis zur zulässigen Lösung.',
    'Ein gefundener Multiplikator wird nur als Hilfsgröße erwähnt. Formulieren Sie die korrekte Schattenpreis-Interpretation.',
    'Beantworten Sie die Zwischenfrage, welche Gleichung aus der Ableitung nach $\\lambda$ entsteht.'
  ],
  integralrechnung: [
    'Bestimmen Sie das unbestimmte Integral $\\int (3x^2-4x+1)\\,dx$.',
    'Berechnen Sie das bestimmte Integral $\\int_0^2 (x+1)\\,dx$.',
    'Bestimmen Sie $\\int x\\cos(x)\\,dx$ mittels partieller Integration.',
    'Berechnen Sie $\\int 2x(x^2+1)^4\\,dx$ mit einer passenden Substitution.',
    'Ein Bearbeiter gibt beim unbestimmten Integral keine Integrationskonstante an. Korrigieren Sie die Lösung.',
    'Ein Integral unterhalb der x-Achse wird als positiver Flächeninhalt interpretiert. Stellen Sie den Unterschied klar.',
    'Für $\\int 2x(x^2+1)^4\\,dx$ wird partielle Integration gewählt. Begründen Sie, warum Substitution hier passender ist.',
    'Beantworten Sie die Zwischenfrage, welche Methode Sie bei $\\int xe^x\\,dx$ zuerst prüfen.'
  ],
  r_begleitpraxis: [
    'Formulieren Sie eine saubere Arbeitsreihenfolge, wenn Sie in R eine Optimierungsaufgabe kontrollieren wollen.',
    'Nennen Sie genau, welche Zeilen in einem Startskript für einen Plot typischerweise geändert werden dürfen und welche nicht.',
    'Beschreiben Sie, wie Sie einen Matrix-Output fachlich deuten, statt nur Zahlen abzulesen.',
    'Erläutern Sie, wann `optimize()` oder `optim()` als Kontrolle einer mathematischen Lösung sinnvoll ist.',
    'Ein Bearbeiter startet direkt mit R, ohne die mathematische Aufgabe zu klären. Beschreiben Sie das richtige Vorgehen.',
    'In einem R-Block werden wahllos alle Zeilen geändert. Korrigieren Sie die Arbeitsweise.',
    'Ein Plot oder Konsolenoutput wird ohne fachliche Deutung stehen gelassen. Ergänzen Sie die mathematische Interpretation.',
    'Beantworten Sie die Zwischenfrage, was Sie vor dem Klick auf „Run“ fachlich bereits wissen sollten.'
  ]
};

const TRANSFER_PROMPT_BANK = GUIDED_PROMPT_BANK;

function stripHtml(html) {
  return String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isDelimitedMath(value) {
  const trimmed = String(value || '').trim();
  return /^\$\$[\s\S]*\$\$$/.test(trimmed)
    || /^\$[\s\S]*\$$/.test(trimmed)
    || /^\\\[[\s\S]*\\\]$/.test(trimmed)
    || /^\\\([\s\S]*\\\)$/.test(trimmed);
}

function renderMathBlock(value) {
  const trimmed = String(value || '').trim();
  if (!trimmed) return '';
  const math = isDelimitedMath(trimmed) ? trimmed : `$$${trimmed}$$`;
  return `<div class="math-block">${escapeHtml(math)}</div>`;
}

function renderNotationList(variables = {}) {
  const entries = Object.entries(variables || {});
  if (!entries.length) return '';
  return `<ul class="exam-drill-list">${entries
    .map(([key, value]) => `<li><strong>$${escapeHtml(key)}$</strong>: ${escapeHtml(value)}</li>`)
    .join('')}</ul>`;
}

function createTask(text, steps, result, sourceStatus = 'source-distilled') {
  return {
    text,
    steps: (steps || [])
      .filter((step) => step && (step.text || step.eq))
      .map((step) => ({
        text: step.text || '',
        eq: step.eq || null
      })),
    result,
    sourceStatus
  };
}

const step = (text, eq = null) => ({ text, eq });

const SOLVED_EXTRA_TASKS_BY_ID = {
  algebra_mengen: [
    createTask(
      String.raw`Bestimmen Sie den Definitionsbereich von $f(x)=\dfrac{x+1}{(x-2)(x+4)}$ und geben Sie ihn in Intervallschreibweise an.`,
      [
        step('Nennernullstellen bestimmen und als verbotene Werte markieren.', String.raw`x-2=0 \Rightarrow x=2,\qquad x+4=0 \Rightarrow x=-4`),
        step('Alle reellen Zahlen außer den verbotenen Werten zulassen.', String.raw`D_f=\mathbb{R}\setminus\{-4,2\}`),
        step('In Intervallschreibweise umformulieren.', String.raw`D_f=(-\infty,-4)\cup(-4,2)\cup(2,\infty)`)
      ],
      'Der Definitionsbereich enthält alle reellen Zahlen außer -4 und 2.'
    ),
    createTask(
      String.raw`Lösen Sie die Ungleichung $-3(2x-1)\le 9$ und achten Sie auf den korrekten Vorzeichenwechsel.`,
      [
        step('Zuerst ausmultiplizieren oder direkt teilen.', String.raw`-6x+3\le 9`),
        step('Konstante auf die andere Seite bringen.', String.raw`-6x\le 6`),
        step('Durch die negative Zahl -6 teilen und das Zeichen umdrehen.', String.raw`x\ge -1`)
      ],
      'Die Lösungsmenge lautet [−1,∞).'
    ),
    createTask(
      String.raw`Bestimmen Sie die Lösungsmenge von $|x+2|\ge 4$ in Intervallschreibweise.`,
      [
        step('Absolutbetrag als Distanz lesen.', String.raw`|x+2|=|x-(-2)|\ge 4`),
        step('Außenzonen um das Zentrum -2 bilden.', String.raw`x\le -6 \;\text{ oder }\; x\ge 2`),
        step('Intervallschreibweise angeben.', String.raw`L=(-\infty,-6]\cup[2,\infty)`)
      ],
      'Gesucht sind die beiden Außenzonen links von -6 und rechts von 2.'
    ),
    createTask(
      String.raw`Gegeben seien $A=[-1,4]$ und $B=(2,\infty)$. Bestimmen Sie $A\cap B$, $A\cup B$ und $A\setminus B$.`,
      [
        step('Schnittmenge als gemeinsame Werte lesen.', String.raw`A\cap B=(2,4]`),
        step('Vereinigung als alle Werte aus A oder B notieren.', String.raw`A\cup B=[-1,\infty)`),
        step('Differenzmenge A\\B als Teil von A ohne die Werte aus B schreiben.', String.raw`A\setminus B=[-1,2]`)
      ],
      'Schnitt, Vereinigung und Differenz sind sauber durch die Intervallgrenzen bestimmt.'
    ),
    createTask(
      String.raw`Ein Bearbeiter multipliziert in der Ungleichung $-2x<6$ mit $-1$, lässt das Zeichen aber unverändert. Korrigieren Sie den Lösungsweg.`,
      [
        step('Fehler markieren: Beim Multiplizieren mit -1 muss sich das Ungleichheitszeichen drehen.', null),
        step('Korrekt mit -1 multiplizieren.', String.raw`2x>-6`),
        step('Durch 2 teilen.', String.raw`x>-3`)
      ],
      'Nach dem Vorzeichenwechsel erhält man korrekt x > -3.'
    ),
    createTask(
      String.raw`In einer Bruchgleichung wird aus $\dfrac{x^2-9}{x-3}$ direkt $x+3$ gemacht und anschließend $x=3$ eingesetzt. Erläutern Sie den Fehler.`,
      [
        step('Zunächst faktorisiert schreiben.', String.raw`\frac{x^2-9}{x-3}=\frac{(x-3)(x+3)}{x-3}`),
        step('Kürzen ist nur für x ungleich 3 erlaubt.', String.raw`x\neq 3 \Rightarrow \frac{x^2-9}{x-3}=x+3`),
        step('Den ausgeschlossenen Wert festhalten.', String.raw`x=3 \text{ bleibt trotz gekürzter Form verboten}`)
      ],
      'Die gekürzte Form gilt nur für x ≠ 3; deshalb darf x = 3 nicht eingesetzt werden.'
    ),
    createTask(
      String.raw`Für $g(x)=\dfrac{x^2-9}{x-3}$ wird $x=3$ als Kandidat akzeptiert. Prüfen Sie den Kandidaten und berichtigen Sie das Ergebnis.`,
      [
        step('Nennerbedingung prüfen.', String.raw`x-3\neq 0 \Rightarrow x\neq 3`),
        step('Kandidaten mit der Domäne abgleichen.', String.raw`x=3 \text{ ist nicht zulässig}`),
        step('Nur die vereinfachte Funktion für zulässige x lesen.', String.raw`g(x)=x+3 \text{ für } x\neq 3`)
      ],
      'x = 3 gehört nicht zur zulässigen Menge und darf nicht als Lösung oder Einsetzpunkt auftauchen.'
    ),
    createTask(
      String.raw`Entscheiden Sie, ob $|x-5|\le 2$ ein Intervall oder zwei Außenzonen beschreibt, und bestimmen Sie die zugehörige Menge.`,
      [
        step('Die Form als Distanzbedingung lesen.', String.raw`|x-5|\le 2`),
        step('Eine Distanz höchstens 2 vom Zentrum 5 bedeutet Intervall.', String.raw`5-2\le x\le 5+2`),
        step('Grenzen vereinfachen.', String.raw`3\le x\le 7`)
      ],
      'Es handelt sich um ein Intervall: [3,7].'
    )
  ],
  funktionen_gleichungen: [
    createTask(
      String.raw`Bestimmen Sie den Definitionsbereich von $g(x)=\dfrac{1}{x-4}+\sqrt{x+1}$.`,
      [
        step('Die Wurzel verlangt x+1 ≥ 0.', String.raw`x\ge -1`),
        step('Der Nenner verlangt x ≠ 4.', String.raw`x\neq 4`),
        step('Beide Bedingungen kombinieren.', String.raw`D_g=[-1,4)\cup(4,\infty)`)
      ],
      'Zulässig sind alle x ab -1, außer x = 4.'
    ),
    createTask(
      String.raw`Bestimmen Sie die Geradengleichung durch die Punkte $(1,4)$ und $(5,-4)$.`,
      [
        step('Steigung aus den zwei Punkten berechnen.', String.raw`m=\frac{-4-4}{5-1}=\frac{-8}{4}=-2`),
        step('Achsenabschnitt mit einem Punkt bestimmen.', String.raw`4=-2\cdot 1+n \Rightarrow n=6`),
        step('Geradengleichung notieren.', String.raw`y=-2x+6`)
      ],
      'Die gesuchte Gerade lautet y = -2x + 6.'
    ),
    createTask(
      String.raw`Gegeben ist $f(x)=2(x-1)(x+3)$. Bestimmen Sie Nullstellen, Vorzeichenbereiche und die Art des Extrempunkts.`,
      [
        step('Nullstellen aus den Faktoren ablesen.', String.raw`x_1=1,\qquad x_2=-3`),
        step('Vorzeichen außen und zwischen den Nullstellen prüfen.', String.raw`f(x)>0 \text{ für } x<-3 \text{ und } x>1,\quad f(x)<0 \text{ für } -3<x<1`),
        step('Leitkoeffizienten lesen.', String.raw`a=2>0 \Rightarrow \text{Parabel nach oben geöffnet, also Minimum}`)
      ],
      'Die Funktion hat Nullstellen bei -3 und 1, ist dazwischen negativ und besitzt ein Minimum.'
    ),
    createTask(
      String.raw`Skizzieren Sie aus $g(x)=-(x-2)^2+3$ die Lage des Scheitels und beschreiben Sie Öffnung und Verschiebung.`,
      [
        step('Scheitel aus der Scheitelform ablesen.', String.raw`S=(2,3)`),
        step('Vorzeichen vor dem Quadrat lesen.', String.raw`-(x-2)^2 \Rightarrow \text{nach unten geöffnet}`),
        step('Verschiebung gegenüber -x^2 beschreiben.', String.raw`\text{2 nach rechts, 3 nach oben}`)
      ],
      'Der Scheitel liegt bei (2,3); die Parabel ist nach unten geöffnet und gegenüber -x² nach rechts und oben verschoben.'
    ),
    createTask(
      String.raw`Ein Bearbeiter behauptet, der Graph von $h(x)=\dfrac{x+1}{x-2}$ sei für alle $x$ definiert. Korrigieren Sie den Ansatz.`,
      [
        step('Nennerbedingung prüfen.', String.raw`x-2\neq 0 \Rightarrow x\neq 2`),
        step('Definitionsbereich entsprechend einschränken.', String.raw`D_h=\mathbb{R}\setminus\{2\}`),
        step('Folgerung für den Graphen nennen.', String.raw`x=2 \text{ ist eine senkrechte Asymptote / Definitionslücke}`)
      ],
      'Der Graph ist nicht für x = 2 definiert; dort liegt eine verbotene Stelle.'
    ),
    createTask(
      String.raw`Bei zwei gegebenen Punkten wird nur die Differenz der y-Werte verwendet. Stellen Sie die korrekte Steigungsberechnung auf.`,
      [
        step('Steigung ist Änderung in y pro Änderung in x.', String.raw`m=\frac{y_2-y_1}{x_2-x_1}`),
        step('Beide Differenzen gehören zusammen.', null),
        step('Erst danach lässt sich der Achsenabschnitt berechnen.', null)
      ],
      'Zur Steigung gehören immer y-Differenz und x-Differenz im Quotienten.'
    ),
    createTask(
      String.raw`Zu einer quadratischen Funktion werden nur die Nullstellen genannt. Ergänzen Sie die fehlende Vorzeichenanalyse.`,
      [
        step('Nullstellen zerlegen die Zahlengerade in Intervalle.', null),
        step('In jedem Intervall das Vorzeichen über Faktoren oder einen Testwert prüfen.', null),
        step('Außerdem die Öffnung über das Vorzeichen von a festhalten.', null)
      ],
      'Eine vollständige Klausurlösung braucht Nullstellen, Vorzeichenbereiche und Öffnung bzw. Extrempunktsart.'
    ),
    createTask(
      String.raw`Berechnen Sie die Steigung der Geraden durch $(-2,7)$ und $(3,-3)$ als saubere Zwischenfrage.`,
      [
        step('Differenzen bilden.', String.raw`y_2-y_1=-3-7=-10,\qquad x_2-x_1=3-(-2)=5`),
        step('Quotient ausrechnen.', String.raw`m=\frac{-10}{5}=-2`),
        step('Vorzeichen sprachlich deuten.', String.raw`\text{Bei einer Einheit mehr in x sinkt y um 2}`)
      ],
      'Die Gerade hat die Steigung -2.'
    )
  ],
  exp_log_inverse: [
    createTask(
      String.raw`Lösen Sie $3e^{0{,}2t}=9$ nach $t$ auf.`,
      [
        step('Zuerst durch 3 teilen.', String.raw`e^{0{,}2t}=3`),
        step('Natürlichen Logarithmus anwenden.', String.raw`0{,}2t=\ln(3)`),
        step('Nach t auflösen.', String.raw`t=\frac{\ln(3)}{0{,}2}=5\ln(3)`)
      ],
      'Die Lösung ist t = 5 ln(3).'
    ),
    createTask(
      String.raw`Vergleichen Sie $f(x)=1{,}05^x$ mit $g(x)=1+0{,}05x$ und erläutern Sie, welche Funktion exponentiell wächst.`,
      [
        step('Exponent auf x prüfen.', String.raw`f(x)=1{,}05^x \Rightarrow \text{Exponentialfunktion}`),
        step('Konstante Steigung bei g erkennen.', String.raw`g(x)=1+0{,}05x \Rightarrow \text{lineare Funktion}`),
        step('Wachstumslogik sprachlich formulieren.', null)
      ],
      'f wächst exponentiell mit konstantem Faktor 1,05; g ist nur linear mit konstanter Steigung 0,05.'
    ),
    createTask(
      String.raw`Gegeben sei $Q(P)=120-4P$. Bestimmen Sie die inverse Nachfrage $P(Q)$.`,
      [
        step('Nach P umstellen.', String.raw`4P=120-Q`),
        step('Durch 4 teilen.', String.raw`P(Q)=30-\frac{Q}{4}`),
        step('Neue Lesart festhalten.', null)
      ],
      'Die inverse Nachfrage lautet P(Q) = 30 - Q/4.'
    ),
    createTask(
      String.raw`Bestimmen Sie den Definitionsbereich von $h(x)=\ln(2x-5)$.`,
      [
        step('Logarithmus-Argument positiv setzen.', String.raw`2x-5>0`),
        step('Nach x auflösen.', String.raw`x>\frac{5}{2}`),
        step('Definitionsbereich notieren.', String.raw`D_h=\left(\frac{5}{2},\infty\right)`)
      ],
      'Zulässig sind nur Werte größer als 5/2.'
    ),
    createTask(
      String.raw`Ein Bearbeiter setzt in $\ln(x-1)$ auch Werte $x\le 1$ ein. Korrigieren Sie die Rechnung und die Domäne.`,
      [
        step('Positivitätsbedingung notieren.', String.raw`x-1>0`),
        step('Daraus die Domäne ableiten.', String.raw`x>1`),
        step('Nicht zulässige Werte ausschließen.', null)
      ],
      'Für ln(x-1) sind nur Werte x > 1 zulässig.'
    ),
    createTask(
      String.raw`Zu $Q(P)=90-3P$ wird dieselbe Steigung für $P(Q)$ übernommen. Erläutern Sie den Fehler und korrigieren Sie die inverse Funktion.`,
      [
        step('Nach P umstellen.', String.raw`3P=90-Q \Rightarrow P(Q)=30-\frac{Q}{3}`),
        step('Steigung der inversen Nachfrage ablesen.', String.raw`-\frac{1}{3}`),
        step('Fehler benennen.', null)
      ],
      'Die inverse Nachfrage hat nicht die Steigung -3, sondern -1/3.'
    ),
    createTask(
      String.raw`Ein Bearbeiter bezeichnet $x^3$ als Exponentialfunktion. Stellen Sie die korrekte Unterscheidung zwischen Potenz- und Exponentialfunktion her.`,
      [
        step('x als Basis erkennen.', String.raw`x^3 \Rightarrow \text{Potenzfunktion}`),
        step('Exponentielle Form gegenüberstellen.', String.raw`3^x \Rightarrow \text{Exponentialfunktion}`),
        step('Unterschied sprachlich benennen.', null)
      ],
      'Bei x³ steht x in der Basis; bei 3ˣ steht x im Exponenten. Deshalb ist nur 3ˣ exponentiell.'
    ),
    createTask(
      String.raw`Entscheiden Sie für $e^{2x}=7$ und $Q(P)=60-2P$, bei welcher Aufgabe zuerst logarithmiert und bei welcher invertiert wird.`,
      [
        step('Exponentgleichung erkennen.', String.raw`e^{2x}=7 \Rightarrow \text{zuerst logarithmieren}`),
        step('Lineare Nachfrage erkennen.', String.raw`Q(P)=60-2P \Rightarrow \text{nach P umstellen / invertieren}`),
        step('Beide Verfahren unterscheiden.', null)
      ],
      'Bei e^{2x}=7 logarithmiert man zuerst, bei Q(P)=60-2P invertiert man die lineare Beziehung.'
    )
  ],
  summen_logik_beweise: [
    createTask(
      String.raw`Schreiben Sie $2+4+6+\dots+2n$ als Summenzeichen und benennen Sie Laufindex, Grenze und Summand.`,
      [
        step('Gerade Zahlenfolge erkennen.', String.raw`2+4+\dots+2n=\sum_{i=1}^{n}2i`),
        step('Laufindex benennen.', String.raw`i \text{ läuft von } 1 \text{ bis } n`),
        step('Summand benennen.', String.raw`2i \text{ ist der Summand}`)
      ],
      'Die Summe lautet Σ von i=1 bis n über 2i.'
    ),
    createTask(
      String.raw`Bringen Sie $\sum_{i=1}^2\sum_{j=1}^3 (i+j)$ in ausgeschriebene Form.`,
      [
        step('Äußeren Index i=1 einsetzen.', String.raw`(1+1)+(1+2)+(1+3)`),
        step('Äußeren Index i=2 einsetzen.', String.raw`+(2+1)+(2+2)+(2+3)`),
        step('Gesamtausdruck zusammenfassen.', String.raw`=2+3+4+3+4+5`)
      ],
      'Die Doppelsumme wird als sechs Einzelterme ausgeschrieben.'
    ),
    createTask(
      String.raw`Schreiben Sie $3\cdot 4\cdot 5\cdot \dots \cdot (n+2)$ mit dem Produktzeichen.`,
      [
        step('Start- und Endwert erkennen.', String.raw`3=1+2,\quad 4=2+2,\dots,\quad n+2`),
        step('Index festlegen.', String.raw`\prod_{i=1}^{n}(i+2)`),
        step('Produktzeichen sprachlich lesen.', null)
      ],
      'Die kompakte Schreibweise lautet Produkt von i=1 bis n über (i+2).'
    ),
    createTask(
      String.raw`Negieren Sie die Aussage: „Für alle $x>0$ gilt $f(x)>0$.“`,
      [
        step('Quantor wechseln.', String.raw`\forall \Rightarrow \exists`),
        step('Aussagenkern negieren.', String.raw`f(x)>0 \Rightarrow f(x)\le 0`),
        step('Negierte Gesamtaussage formulieren.', String.raw`\exists x>0:\; f(x)\le 0`)
      ],
      'Die Negation lautet: Es gibt mindestens ein x > 0 mit f(x) ≤ 0.'
    ),
    createTask(
      String.raw`Ein Bearbeiter verwendet in einer Doppelsumme denselben Index innen und außen. Korrigieren Sie die Notation.`,
      [
        step('Innere und äußere Schleife trennen.', String.raw`\sum_{i=1}^{m}\sum_{j=1}^{n} a_{ij}`),
        step('Jedem Index eine eigene Rolle geben.', null),
        step('Korrekte Lesart formulieren.', null)
      ],
      'In Doppelsummen brauchen innere und äußere Summe unterschiedliche Indizes.'
    ),
    createTask(
      String.raw`Aus „Wenn $A$, dann $B$“ wird „Wenn $B$, dann $A$“ geschlossen. Erläutern Sie, warum das falsch ist.`,
      [
        step('Die ursprüngliche Aussage notieren.', String.raw`A\Rightarrow B`),
        step('Umkehrung als andere Aussage erkennen.', String.raw`B\Rightarrow A`),
        step('Fehler benennen.', null)
      ],
      'Aus einer Implikation folgt nicht automatisch die Umkehrung; das sind zwei verschiedene Aussagen.'
    ),
    createTask(
      String.raw`Ein Beweis endet nach den Rechenschritten ohne abschließenden Schlusssatz. Ergänzen Sie die fehlende Schlussformulierung.`,
      [
        step('Behauptung noch einmal aufnehmen.', null),
        step('Ergebnis explizit mit der Behauptung verknüpfen.', null),
        step('Schlusssatz formulieren.', String.raw`\text{Damit ist die Behauptung gezeigt.}`)
      ],
      'Ein Beweis ist erst vollständig, wenn klar ausgesprochen wird, was genau gezeigt wurde.'
    ),
    createTask(
      String.raw`Beantworten Sie die Zwischenfrage, welche Aussage logisch äquivalent zur Kontraposition von „Wenn $n$ ungerade ist, dann ist $n^2$ ungerade“ ist.`,
      [
        step('Ausgangsaussage notieren.', String.raw`n \text{ ungerade } \Rightarrow n^2 \text{ ungerade}`),
        step('Kontraposition bilden.', String.raw`n^2 \text{ gerade } \Rightarrow n \text{ gerade}`),
        step('Äquivalenz festhalten.', null)
      ],
      'Die äquivalente Kontraposition lautet: Wenn n² gerade ist, dann ist n gerade.'
    )
  ],
  lineare_algebra_grundlagen: [
    createTask(
      String.raw`Prüfen Sie, ob das Produkt $A\cdot B$ mit $A\in\mathbb{R}^{2\times 3}$ und $B\in\mathbb{R}^{3\times 1}$ definiert ist, und nennen Sie den Typ des Ergebnisses.`,
      [
        step('Innere Dimensionen vergleichen.', String.raw`2\times 3 \;\cdot\; 3\times 1`),
        step('Definiertheit prüfen.', String.raw`3=3 \Rightarrow A\cdot B \text{ ist definiert}`),
        step('Ergebnistyp bestimmen.', String.raw`A\cdot B\in\mathbb{R}^{2\times 1}`)
      ],
      'Das Produkt ist definiert und liefert einen 2x1-Vektor.'
    ),
    createTask(
      String.raw`Berechnen Sie den Eintrag in Zeile 1, Spalte 2 von $AB$ für $A=\begin{pmatrix}1&2\\0&3\end{pmatrix}$ und $B=\begin{pmatrix}4&1\\-1&2\end{pmatrix}$.`,
      [
        step('Zeile 1 von A und Spalte 2 von B auswählen.', String.raw`(1,2)\cdot \binom{1}{2}`),
        step('Skalarprodukt berechnen.', String.raw`1\cdot 1 + 2\cdot 2 = 5`),
        step('Eintrag zuordnen.', String.raw`(AB)_{12}=5`)
      ],
      'Der gesuchte Matrixeintrag ist 5.'
    ),
    createTask(
      String.raw`Bestimmen Sie $(AB)^T$ für zwei Matrizen und erläutern Sie die Reihenfolge beim Transponieren eines Produkts.`,
      [
        step('Regel für das Transponieren eines Produkts notieren.', String.raw`(AB)^T=B^TA^T`),
        step('Reihenfolge betonen.', null),
        step('Fehlschluss ausschließen.', String.raw`(AB)^T\neq A^TB^T \text{ im Allgemeinen}`)
      ],
      'Beim Transponieren eines Produkts kehrt sich die Reihenfolge um.'
    ),
    createTask(
      String.raw`Bringen Sie das Gleichungssystem $x+2y=4$, $3x-y=5$ in die Form $Ax=b$.`,
      [
        step('Koeffizientenmatrix notieren.', String.raw`A=\begin{pmatrix}1&2\\3&-1\end{pmatrix}`),
        step('Variablenvektor festlegen.', String.raw`x=\binom{x}{y}`),
        step('Rechte Seite notieren.', String.raw`b=\binom{4}{5}`)
      ],
      'Die Matrixform lautet A x = b mit der passenden Koeffizientenmatrix und rechter Seite.'
    ),
    createTask(
      String.raw`Ein Bearbeiter multipliziert zwei Matrizen elementweise. Korrigieren Sie die Rechnung anhand des Prinzips „Zeile mal Spalte“.`,
      [
        step('Fehler benennen.', null),
        step('Korrekte Regel notieren.', String.raw`(AB)_{ij}=\sum_k a_{ik}b_{kj}`),
        step('Einen Eintrag beispielhaft als Skalarprodukt bilden.', null)
      ],
      'Matrixmultiplikation erfolgt über Zeile-mal-Spalte, nicht elementweise.'
    ),
    createTask(
      String.raw`Zu einem Matrixprodukt wird die Dimensionsprüfung übersprungen. Zeigen Sie, welche Prüfung zuerst erfolgen muss.`,
      [
        step('Typen beider Matrizen notieren.', null),
        step('Innere Dimensionen vergleichen.', null),
        step('Erst dann Definiertheit und Ergebnistyp festhalten.', null)
      ],
      'Vor jedem Produkt müssen die inneren Dimensionen verglichen werden.'
    ),
    createTask(
      String.raw`Ein Bearbeiter schreibt $(AB)^T=A^TB^T$. Stellen Sie die korrekte Regel auf.`,
      [
        step('Falsche Reihenfolge markieren.', null),
        step('Richtige Formel notieren.', String.raw`(AB)^T=B^TA^T`),
        step('Warum die Reihenfolge wechselt, kurz erläutern.', null)
      ],
      'Die korrekte Transpositionsregel lautet (AB)^T = B^T A^T.'
    ),
    createTask(
      String.raw`Beantworten Sie die Zwischenfrage, wie der Eintrag $(AB)_{21}$ gebildet wird.`,
      [
        step('Zeile 2 von A wählen.', null),
        step('Spalte 1 von B wählen.', null),
        step('Beides als Skalarprodukt verrechnen.', String.raw`(AB)_{21}=\sum_k a_{2k}b_{k1}`)
      ],
      'Der Eintrag (AB)_{21} entsteht aus Zeile 2 von A mal Spalte 1 von B.'
    )
  ],
  lineare_algebra_struktur: [
    createTask(
      String.raw`Bestimmen Sie Spur und Rang der Matrix $A=\begin{pmatrix}1&2\\2&4\end{pmatrix}$.`,
      [
        step('Spur über die Diagonale bilden.', String.raw`\operatorname{spur}(A)=1+4=5`),
        step('Lineare Abhängigkeit der Zeilen prüfen.', String.raw`(2,4)=2\cdot(1,2)`),
        step('Rang folgern.', String.raw`\operatorname{rang}(A)=1`)
      ],
      'Die Spur ist 5, der Rang ist 1.'
    ),
    createTask(
      String.raw`Berechnen Sie die Determinante von $A=\begin{pmatrix}3&1\\2&1\end{pmatrix}$ und entscheiden Sie über die Invertierbarkeit.`,
      [
        step('2x2-Determinante bilden.', String.raw`\det(A)=3\cdot 1-1\cdot 2=1`),
        step('Determinante auf Null prüfen.', String.raw`\det(A)\neq 0`),
        step('Folgerung ziehen.', String.raw`A \text{ ist invertierbar}`)
      ],
      'Die Determinante ist 1, also ist A regulär und invertierbar.'
    ),
    createTask(
      String.raw`Bestimmen Sie die Eigenwerte von $A=\begin{pmatrix}4&0\\0&1\end{pmatrix}$.`,
      [
        step('Charakteristische Gleichung notieren.', String.raw`\det(A-\lambda I)=(4-\lambda)(1-\lambda)=0`),
        step('Nullstellen der Gleichung bestimmen.', String.raw`\lambda_1=4,\qquad \lambda_2=1`),
        step('Richtungslesart ergänzen.', null)
      ],
      'Die Eigenwerte sind 4 und 1.'
    ),
    createTask(
      String.raw`Erläutern Sie für $Ax=b$, warum $\det(A)\neq 0$ Eindeutigkeit der Lösung bedeutet.`,
      [
        step('Determinantenkriterium notieren.', String.raw`\det(A)\neq 0 \Rightarrow A^{-1} \text{ existiert}`),
        step('Inverse auf beiden Seiten anwenden.', String.raw`x=A^{-1}b`),
        step('Eindeutigkeit begründen.', null)
      ],
      'Wenn A invertierbar ist, gibt es genau eine Lösung x = A^{-1}b.'
    ),
    createTask(
      String.raw`Ein Bearbeiter liest aus einer nichtverschwindenden Determinante nur eine Zahl ab, zieht aber keine Folgerung für $A^{-1}$. Ergänzen Sie die Schlussfolgerung.`,
      [
        step('Determinantenkriterium aktivieren.', String.raw`\det(A)\neq 0`),
        step('Regulärität folgern.', String.raw`A \text{ ist regulär}`),
        step('Schluss für die Inverse notieren.', String.raw`A^{-1} \text{ existiert}`)
      ],
      'Aus einer nichtverschwindenden Determinante folgt direkt die Existenz der Inversen.'
    ),
    createTask(
      String.raw`Für eine Matrix werden Rang und Spur verwechselt. Korrigieren Sie die beiden Begriffe an einem kurzen Beispiel.`,
      [
        step('Spur definieren.', String.raw`\operatorname{spur}(A)=\text{Summe der Diagonale}`),
        step('Rang definieren.', String.raw`\operatorname{rang}(A)=\text{Anzahl linear unabhängiger Zeilen/Spalten}`),
        step('Unterschied sprachlich machen.', null)
      ],
      'Spur ist eine Diagonalensumme, Rang ein Strukturmaß für lineare Unabhängigkeit.'
    ),
    createTask(
      String.raw`Ein Eigenwert ist bestimmt, aber der Bearbeiter prüft $(A-\lambda I)x=0$ nicht weiter. Vervollständigen Sie den Eigenvektor-Schritt.`,
      [
        step('Eigenwert in die Nullgleichung einsetzen.', String.raw`(A-\lambda I)x=0`),
        step('Homogenes System lösen.', null),
        step('Nichttrivialen Richtungsvektor angeben.', null)
      ],
      'Nach dem Eigenwert muss immer noch ein nichttrivialer Eigenvektor aus der Nullgleichung bestimmt werden.'
    ),
    createTask(
      String.raw`Beantworten Sie die Zwischenfrage, woran Sie in einer 2x2-Aufgabe sofort erkennen, ob die Matrix regulär oder singulär ist.`,
      [
        step('Determinante bilden.', String.raw`\det(A)=ad-bc`),
        step('Auf Null testen.', null),
        step('Regulär/Singular ableiten.', String.raw`\det(A)\neq 0 \Rightarrow \text{regulär},\quad \det(A)=0 \Rightarrow \text{singulär}`)
      ],
      'Bei 2x2-Matrizen entscheidet die Determinante sofort über regulär oder singulär.'
    )
  ],
  analysis_ableitung_grundlagen: [
    createTask(
      String.raw`Bestimmen Sie die Tangentensteigung von $f(x)=x^2-4x$ im Punkt $x=3$.`,
      [
        step('Funktion ableiten.', String.raw`f'(x)=2x-4`),
        step('Am Punkt 3 auswerten.', String.raw`f'(3)=2\cdot 3-4=2`),
        step('Tangentensteigung sprachlich deuten.', null)
      ],
      'Die Tangentensteigung im Punkt x = 3 beträgt 2.'
    ),
    createTask(
      String.raw`Leiten Sie $g(x)=(3x-1)^4$ mit der Kettenregel ab.`,
      [
        step('Äußere und innere Funktion trennen.', String.raw`u=3x-1,\qquad g(x)=u^4`),
        step('Kettenregel anwenden.', String.raw`g'(x)=4(3x-1)^3\cdot 3`),
        step('Vereinfachen.', String.raw`g'(x)=12(3x-1)^3`)
      ],
      'Die Ableitung lautet 12(3x-1)^3.'
    ),
    createTask(
      String.raw`Bestimmen Sie die Ableitung von $h(x)=x^2e^x$.`,
      [
        step('Produktregel wählen.', String.raw`(uv)'=u'v+uv'`),
        step('Ableitungen der Faktoren bilden.', String.raw`(x^2)'=2x,\qquad (e^x)'=e^x`),
        step('Zusammensetzen.', String.raw`h'(x)=2xe^x+x^2e^x=e^x(2x+x^2)`)
      ],
      'Die Ableitung ist h\'(x)=e^x(2x+x^2).'
    ),
    createTask(
      String.raw`Gegeben sei $K(q)=q^3-6q^2+9q$. Bestimmen Sie die Grenzkostenfunktion $K'(q)$.`,
      [
        step('Polynom gliedweise ableiten.', String.raw`K'(q)=3q^2-12q+9`),
        step('Ergebnis als Grenzkostenfunktion lesen.', null),
        step('Marginale Wirkung benennen.', null)
      ],
      'Die Grenzkostenfunktion lautet K\'(q)=3q^2-12q+9.'
    ),
    createTask(
      String.raw`Ein Bearbeiter leitet $(2x+1)^5$ zu $5(2x+1)^4$ ab. Korrigieren Sie den Kettenregel-Fehler.`,
      [
        step('Inneren Faktor identifizieren.', String.raw`u=2x+1 \Rightarrow u'=2`),
        step('Kettenregel vollständig anwenden.', String.raw`\frac{d}{dx}(2x+1)^5=5(2x+1)^4\cdot 2`),
        step('Vereinfachen.', String.raw`=10(2x+1)^4`)
      ],
      'Der fehlende Faktor 2 stammt aus der Ableitung der inneren Funktion.'
    ),
    createTask(
      String.raw`Die Steigung einer Sekante wird mit der Tangentensteigung verwechselt. Stellen Sie die saubere Unterscheidung auf.`,
      [
        step('Sekantensteigung als Durchschnittsänderung notieren.', String.raw`\frac{f(x+h)-f(x)}{h}`),
        step('Tangentensteigung als Grenzwert formulieren.', String.raw`f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}`),
        step('Geometrischen Unterschied benennen.', null)
      ],
      'Die Sekante misst eine Durchschnittsänderung, die Tangente den Grenzfall lokaler Änderung.'
    ),
    createTask(
      String.raw`Für $m(x)=\ln(x-2)$ wird die Ableitung angegeben, ohne die Domäne zu prüfen. Korrigieren Sie die Lösung.`,
      [
        step('Domäne zuerst prüfen.', String.raw`x-2>0 \Rightarrow x>2`),
        step('Dann ableiten.', String.raw`m'(x)=\frac{1}{x-2}`),
        step('Ableitung nur auf der zulässigen Domäne lesen.', null)
      ],
      'Die Ableitung lautet 1/(x-2), aber nur für x > 2.'
    ),
    createTask(
      String.raw`Beantworten Sie die Zwischenfrage, welche Regel Sie bei $f(x)=\dfrac{x^2+1}{x-1}$ zuerst brauchen.`,
      [
        step('Bruchstruktur erkennen.', null),
        step('Passende Regel benennen.', String.raw`\text{Quotientenregel}`),
        step('Regel hinschreiben.', String.raw`\left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^2}`)
      ],
      'Bei diesem Ausdruck ist die Quotientenregel der erste Zugriff.'
    )
  ],
  analysis_monotonie_grenzwerte: [
    createTask(
      String.raw`Untersuchen Sie $f(x)=x^3-6x^2+9x$ auf Monotonieintervalle.`,
      [
        step('Ableitung bilden.', String.raw`f'(x)=3x^2-12x+9=3(x-1)(x-3)`),
        step('Kritische Punkte bestimmen.', String.raw`x=1,\qquad x=3`),
        step('Vorzeichen von f\' in den Intervallen prüfen.', String.raw`f \text{ steigt auf } (-\infty,1)\cup(3,\infty),\; f \text{ fällt auf } (1,3)`)
      ],
      'Die Funktion steigt bis 1, fällt zwischen 1 und 3 und steigt danach wieder.'
    ),
    createTask(
      String.raw`Bestimmen Sie für $f(x)=x^4-4x^2$ die Bereiche von Konvexität und Konkavität.`,
      [
        step('Zweite Ableitung bilden.', String.raw`f''(x)=12x^2-8=4(3x^2-2)`),
        step('Nullstellen von f\'\' bestimmen.', String.raw`x=\pm\sqrt{\frac{2}{3}}`),
        step('Vorzeichen von f\'\' prüfen.', String.raw`f''>0 \text{ außerhalb},\quad f''<0 \text{ zwischen den Nullstellen}`)
      ],
      'Die Funktion ist außerhalb der beiden Werte ±√(2/3) konvex und dazwischen konkav.'
    ),
    createTask(
      String.raw`Berechnen Sie den Grenzwert $\lim_{x\to 0}\dfrac{e^x-1}{x}$.`,
      [
        step('Unbestimmte Form erkennen.', String.raw`\frac{0}{0}`),
        step('L’Hôpital anwenden oder Standardgrenzwert nutzen.', String.raw`\lim_{x\to 0}\frac{e^x}{1}`),
        step('Grenzwert auswerten.', String.raw`=1`)
      ],
      'Der Grenzwert ist 1.'
    ),
    createTask(
      String.raw`Führen Sie einen Newton-Schritt für $f(x)=x^2-5$ mit Startwert $x_0=2$ aus.`,
      [
        step('Newton-Formel notieren.', String.raw`x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}`),
        step('Werte bei x0=2 einsetzen.', String.raw`f(2)=-1,\qquad f'(2)=4`),
        step('Nächsten Schritt berechnen.', String.raw`x_1=2-\frac{-1}{4}=2{,}25`)
      ],
      'Nach einem Newton-Schritt erhält man x1 = 2,25.'
    ),
    createTask(
      String.raw`Ein Bearbeiter entscheidet Monotonie nur anhand von $f'(2)$. Erläutern Sie, warum Intervalle geprüft werden müssen.`,
      [
        step('Ein Einzelwert zeigt nur lokales Verhalten an einem Punkt.', null),
        step('Monotonie ist eine Aussage über ganze Intervalle.', null),
        step('Dazu müssen die Nullstellen von f\' und ihre Vorzeichenintervalle betrachtet werden.', null)
      ],
      'Monotonie kann nicht aus einem einzigen Funktionswert von f\' abgelesen werden.'
    ),
    createTask(
      String.raw`L’Hôpital wird angewendet, obwohl die Form nicht unbestimmt ist. Korrigieren Sie das Vorgehen an einem passenden Beispiel.`,
      [
        step('Zuerst prüfen, ob wirklich 0/0 oder ∞/∞ vorliegt.', null),
        step('Ist die Form bestimmt, wird ohne L’Hôpital direkt ausgewertet oder vereinfacht.', null),
        step('L’Hôpital nur bei wirklich unbestimmten Quotienten einsetzen.', null)
      ],
      'L’Hôpital ist nur bei echten unbestimmten Formen zulässig.'
    ),
    createTask(
      String.raw`Beim Newton-Verfahren wird ein Startwert ohne Blick auf den Graphen gewählt. Beschreiben Sie die saubere Startwertkontrolle.`,
      [
        step('Zuerst Lage der Nullstelle grob aus Graph oder Vorzeichenwechsel schätzen.', null),
        step('Startwert in die Nähe der gesuchten Nullstelle legen.', null),
        step('Tangentenverlauf beobachten und Divergenz vermeiden.', null)
      ],
      'Ein guter Startwert liegt in der Nähe der gesuchten Nullstelle und wird nicht blind gewählt.'
    ),
    createTask(
      String.raw`Beantworten Sie die Zwischenfrage, welches Vorzeichenmuster von $f'$ zu „erst steigend, dann fallend“ führt.`,
      [
        step('Vorzeichenmuster lesen.', String.raw`f'>0 \text{ zuerst, dann } f'<0`),
        step('Übergang an kritischem Punkt notieren.', null),
        step('Extrempunkt folgern.', String.raw`\text{lokales Maximum}`)
      ],
      'Zuerst positives, dann negatives Vorzeichen von f\' bedeutet: erst steigend, dann fallend.'
    )
  ],
  univariate_optimierung: [
    createTask(
      String.raw`Bestimmen Sie die lokalen Extremstellen von $f(x)=x^3-3x^2-9x$.`,
      [
        step('Erste Ableitung bilden.', String.raw`f'(x)=3x^2-6x-9=3(x-3)(x+1)`),
        step('Kritische Punkte bestimmen.', String.raw`x=-1,\qquad x=3`),
        step('Zweite Ableitung oder Vorzeichenwechsel nutzen.', String.raw`f''(x)=6x-6 \Rightarrow \text{Maximum bei } -1,\; \text{Minimum bei } 3`)
      ],
      'Es gibt ein lokales Maximum bei x = -1 und ein lokales Minimum bei x = 3.'
    ),
    createTask(
      String.raw`Maximieren Sie $f(x)=12x-x^2$ auf dem Intervall $[0,15]$.`,
      [
        step('Erste Ableitung bilden.', String.raw`f'(x)=12-2x`),
        step('Inneren Kandidaten bestimmen.', String.raw`12-2x=0 \Rightarrow x=6`),
        step('Kandidaten und Randwerte vergleichen.', String.raw`f(0)=0,\; f(6)=36,\; f(15)=-45`)
      ],
      'Das globale Maximum auf [0,15] liegt bei x = 6 mit Funktionswert 36.'
    ),
    createTask(
      String.raw`Ein Unternehmen hat Gewinn $\pi(q)=18q-q^2-20$. Bestimmen Sie die gewinnmaximale Menge.`,
      [
        step('Gewinnfunktion ableiten.', String.raw`\pi'(q)=18-2q`),
        step('Kandidaten bestimmen.', String.raw`18-2q=0 \Rightarrow q=9`),
        step('Krümmung prüfen.', String.raw`\pi''(q)=-2<0 \Rightarrow \text{Maximum}`)
      ],
      'Die gewinnmaximale Menge beträgt q = 9.'
    ),
    createTask(
      String.raw`Prüfen Sie für eine stationäre Stelle mit $f'(x)=0$ und $f''(x)<0$, welche Art von Extremum vorliegt.`,
      [
        step('Stationäre Stelle als Kandidat erkennen.', null),
        step('Negative zweite Ableitung interpretieren.', String.raw`f''(x)<0 \Rightarrow \text{lokal konkav}`),
        step('Extremum folgern.', String.raw`\text{lokales Maximum}`)
      ],
      'Die Stelle ist ein lokales Maximum.'
    ),
    createTask(
      String.raw`Ein Bearbeiter endet nach $f'(x)=0$ und nennt das bereits das Optimum. Ergänzen Sie die fehlende Klassifikation.`,
      [
        step('f\'=0 liefert nur einen Kandidaten.', null),
        step('Zweite Ableitung oder Vorzeichenwechsel prüfen.', null),
        step('Erst danach Maximum, Minimum oder Sattelpunkt festhalten.', null)
      ],
      'Aus f\' = 0 allein folgt noch kein gesichertes Optimum.'
    ),
    createTask(
      String.raw`Bei einem Intervallproblem werden die Randpunkte nicht geprüft. Korrigieren Sie den Lösungsweg.`,
      [
        step('Innere Kandidaten bestimmen.', null),
        step('Zusätzlich beide Randpunkte auswerten.', null),
        step('Alle Werte vergleichen und erst dann das globale Optimum nennen.', null)
      ],
      'Auf kompakten Intervallen gehören Randpunkte immer in den Vergleich.'
    ),
    createTask(
      String.raw`Aus Erlös und Kosten wird die Zielfunktion unsauber gebildet. Stellen Sie die korrekte Gewinnfunktion auf.`,
      [
        step('Gewinn als Erlös minus Kosten notieren.', String.raw`\pi(q)=E(q)-C(q)`),
        step('Erst danach konkrete Funktionen einsetzen.', null),
        step('Die resultierende Funktion als Optimierungsobjekt verwenden.', null)
      ],
      'Die saubere Zielfunktion in der Ökonomik ist Gewinn = Erlös minus Kosten.'
    ),
    createTask(
      String.raw`Beantworten Sie die Zwischenfrage, wann eine gefundene stationäre Stelle nur Kandidat und noch kein gesichertes Optimum ist.`,
      [
        step('Immer direkt nach f\'=0.', null),
        step('Es fehlt noch die Klassifikation oder der Randvergleich.', null),
        step('Erst danach steht fest, ob wirklich ein Maximum oder Minimum vorliegt.', null)
      ],
      'Eine stationäre Stelle ist zunächst nur Kandidat; der Optimumsstatus muss noch geprüft werden.'
    )
  ],
  analysis_multivariat: [
    createTask(
      String.raw`Berechnen Sie für $f(x,y)=x^2+3xy$ die partiellen Ableitungen $f_x$ und $f_y$.`,
      [
        step('Nach x ableiten, y festhalten.', String.raw`f_x(x,y)=2x+3y`),
        step('Nach y ableiten, x festhalten.', String.raw`f_y(x,y)=3x`),
        step('Beide partiellen Ableitungen notieren.', null)
      ],
      'Die partiellen Ableitungen sind f_x = 2x + 3y und f_y = 3x.'
    ),
    createTask(
      String.raw`Bestimmen Sie für $f(x,y)=x^2+xy$ das totale Differential $df$.`,
      [
        step('Partielle Ableitungen bilden.', String.raw`f_x=2x+y,\qquad f_y=x`),
        step('Formel für das totale Differential einsetzen.', String.raw`df=f_x\,dx+f_y\,dy`),
        step('Ausdrücken.', String.raw`df=(2x+y)\,dx+x\,dy`)
      ],
      'Das totale Differential lautet df = (2x+y)dx + xdy.'
    ),
    createTask(
      String.raw`Prüfen Sie, ob $f(x,y)=x^2+2xy+y^2$ homogen ist und wenn ja, welchen Grad die Funktion hat.`,
      [
        step('Beide Variablen mit t skalieren.', String.raw`f(tx,ty)=t^2x^2+2t^2xy+t^2y^2`),
        step('Gemeinsamen Faktor ausklammern.', String.raw`f(tx,ty)=t^2f(x,y)`),
        step('Grad ablesen.', String.raw`\text{homogen vom Grad 2}`)
      ],
      'Die Funktion ist homogen vom Grad 2.'
    ),
    createTask(
      String.raw`Beschreiben Sie sprachlich, was eine Niveaukurve von $f(x,y)=4$ bedeutet.`,
      [
        step('Niveaukurve als Gleichung f(x,y)=konstant lesen.', null),
        step('Alle Punkte mit demselben Funktionswert sammeln.', null),
        step('Nicht mit einem Höhenprofil in einer Variablen verwechseln.', null)
      ],
      'Eine Niveaukurve enthält alle Punkte (x,y), an denen die Funktion den Wert 4 annimmt.'
    ),
    createTask(
      String.raw`Ein Bearbeiter verwechselt partielle und totale Ableitung. Stellen Sie die saubere Unterscheidung auf.`,
      [
        step('Partielle Ableitung: eine Variable ändern, andere festhalten.', null),
        step('Totale Ableitung: mehrere Veränderungskanäle gleichzeitig berücksichtigen.', null),
        step('Typische Einsatzfrage nennen.', null)
      ],
      'Partiell heißt ein Kanal, total heißt mehrere gleichzeitige Änderungen.'
    ),
    createTask(
      String.raw`Eine Konturlinie wird wie ein gewöhnlicher Funktionsgraph in $(x,f(x))$ gelesen. Korrigieren Sie die Interpretation.`,
      [
        step('Konturlinie liegt in der x-y-Ebene.', null),
        step('Sie verbindet Punkte gleichen Funktionswerts.', null),
        step('Sie ist kein Graph der Form y=f(x).', null)
      ],
      'Eine Konturlinie zeigt Gleichniveau-Punkte und ist kein gewöhnlicher Funktionsgraph.'
    ),
    createTask(
      String.raw`Bei der Homogenitätsprüfung wird nur eine Variable skaliert. Stellen Sie das korrekte Vorgehen her.`,
      [
        step('Alle Eingangsgrößen gleichzeitig mit t multiplizieren.', null),
        step('Dann f(tx,ty,...) mit f(x,y,...) vergleichen.', null),
        step('Erst daraus den Grad ablesen.', null)
      ],
      'Homogenität prüft eine gemeinsame proportionale Skalierung aller Variablen.'
    ),
    createTask(
      String.raw`Beantworten Sie die Zwischenfrage, wann Sie bei mehreren sich ändernden Variablen die totale Ableitung statt einer partiellen Ableitung brauchen.`,
      [
        step('Sobald mehr als eine Einflussgröße variiert.', null),
        step('Dann tragen mehrere partielle Wirkungen gemeinsam zur Gesamtänderung bei.', null),
        step('Diese Summe wird im totalen Differential gebündelt.', null)
      ],
      'Die totale Ableitung ist nötig, wenn mehrere Variablen gleichzeitig variieren.'
    )
  ],
  multivariate_optimierung: [
    createTask(
      String.raw`Bestimmen Sie die stationäre Stelle von $f(x,y)=x^2+y^2-4x+2y$.`,
      [
        step('Erste partielle Ableitungen bilden.', String.raw`f_x=2x-4,\qquad f_y=2y+2`),
        step('FOCs lösen.', String.raw`2x-4=0 \Rightarrow x=2,\qquad 2y+2=0 \Rightarrow y=-1`),
        step('Stationäre Stelle notieren.', String.raw`(x,y)=(2,-1)`)
      ],
      'Die stationäre Stelle liegt bei (2,-1).'
    ),
    createTask(
      String.raw`Klassifizieren Sie die stationäre Stelle von $f(x,y)=x^2+xy+y^2$ mit Hilfe der Hesse-Matrix.`,
      [
        step('Hesse-Matrix bilden.', String.raw`H=\begin{pmatrix}2&1\\1&2\end{pmatrix}`),
        step('Determinante und f_xx prüfen.', String.raw`\det(H)=3>0,\qquad f_{xx}=2>0`),
        step('Klassifikation folgern.', String.raw`\text{lokales Minimum}`)
      ],
      'Die stationäre Stelle ist ein lokales Minimum.'
    ),
    createTask(
      String.raw`Erläutern Sie bei einem Optimierungsproblem auf $[0,2]\times[0,3]$, warum Rand und Ecken mitgeprüft werden müssen.`,
      [
        step('Innere stationäre Punkte decken nur das Innere ab.', null),
        step('Globale Optima auf kompakten Mengen können am Rand oder in Ecken liegen.', null),
        step('Deshalb müssen alle Kandidatentypen verglichen werden.', null)
      ],
      'Auf kompakten Mengen müssen innere, Rand- und Eckkandidaten verglichen werden.'
    ),
    createTask(
      String.raw`Zeigen Sie an einem Beispiel, dass eine stationäre Stelle auch ein Sattelpunkt sein kann.`,
      [
        step('Beispiel wählen.', String.raw`f(x,y)=x^2-y^2`),
        step('Stationäre Stelle bestimmen.', String.raw`f_x=2x=0,\qquad f_y=-2y=0 \Rightarrow (0,0)`),
        step('Vorzeichen in verschiedenen Richtungen prüfen.', String.raw`f(x,0)=x^2>0,\qquad f(0,y)=-y^2<0`)
      ],
      'Die stationäre Stelle (0,0) ist ein Sattelpunkt.'
    ),
    createTask(
      String.raw`Ein Bearbeiter stoppt nach dem Lösen der FOCs. Ergänzen Sie die fehlende Klassifikation des stationären Punkts.`,
      [
        step('Nach den FOCs die Hesse-Matrix bilden.', null),
        step('Determinante und Vorzeichen von f_xx auswerten.', null),
        step('Erst dann Maximum, Minimum oder Sattelpunkt festhalten.', null)
      ],
      'FOCs liefern nur Kandidaten; die Klassifikation folgt erst mit dem zweiten Ordnungstest.'
    ),
    createTask(
      String.raw`Die Hesse-Matrix wird notiert, aber ihre Determinante nicht ausgewertet. Vervollständigen Sie den Test.`,
      [
        step('Hesse-Matrix H notieren.', null),
        step('Determinante berechnen.', String.raw`\det(H)=f_{xx}f_{yy}-f_{xy}^2`),
        step('Mit dem Vorzeichen von f_xx die Klassifikation abschließen.', null)
      ],
      'Ohne Determinante bleibt der Hesse-Test unvollständig.'
    ),
    createTask(
      String.raw`Bei einer kompakten Menge werden Rand und Ecken übergangen. Korrigieren Sie die Lösungsstruktur.`,
      [
        step('Innere Kandidaten bestimmen.', null),
        step('Randkurven als eindimensionale Probleme untersuchen.', null),
        step('Eckpunkte zusätzlich auswerten und alles vergleichen.', null)
      ],
      'Eine vollständige globale Optimierung auf kompakter Menge prüft Innen-, Rand- und Eckkandidaten.'
    ),
    createTask(
      String.raw`Beantworten Sie die Zwischenfrage, was nach den FOCs als nächster Prüfungsschritt folgt.`,
      [
        step('Lokale Klassifikation mittels Hesse-Matrix.', null),
        step('Bei Mengenproblemen zusätzlich Randanalyse.', null),
        step('Erst danach das Ergebnis festhalten.', null)
      ],
      'Nach den FOCs folgt die Klassifikation und gegebenenfalls die Randanalyse.'
    )
  ],
  lagrange: [
    createTask(
      String.raw`Stellen Sie für $f(x,y)=xy$ unter der Nebenbedingung $x+y=10$ die Lagrange-Funktion auf und bestimmen Sie das Optimum.`,
      [
        step('Lagrange-Funktion notieren.', String.raw`\mathcal{L}=xy+\lambda(10-x-y)`),
        step('FOCs aufstellen.', String.raw`\mathcal{L}_x=y-\lambda=0,\quad \mathcal{L}_y=x-\lambda=0,\quad \mathcal{L}_\lambda=10-x-y=0`),
        step('System lösen.', String.raw`x=y,\; x+y=10 \Rightarrow x=y=5`)
      ],
      'Das Optimum liegt bei x = 5 und y = 5.'
    ),
    createTask(
      String.raw`Interpretieren Sie den Multiplikator $\lambda$ in einer Budgetrestriktion in einem präzisen Satz.`,
      [
        step('Multiplikator als Schattenpreis lesen.', null),
        step('Marginale Lockerung der Restriktion benennen.', null),
        step('Satz ausformulieren.', null)
      ],
      'λ misst den marginalen Wert einer gelockerten Restriktion.'
    ),
    createTask(
      String.raw`Maximieren Sie $U(x_1,x_2)=x_1x_2$ unter $2x_1+x_2=12$.`,
      [
        step('Lagrange-Funktion aufstellen.', String.raw`\mathcal{L}=x_1x_2+\lambda(12-2x_1-x_2)`),
        step('FOCs bilden.', String.raw`x_2-2\lambda=0,\qquad x_1-\lambda=0,\qquad 12-2x_1-x_2=0`),
        step('System lösen.', String.raw`x_1=3,\qquad x_2=6`)
      ],
      'Das Optimum liegt bei (3,6).'
    ),
    createTask(
      String.raw`Leiten Sie aus den FOCs einer Lagrange-Aufgabe die Tangentialbedingung ab und erläutern Sie ihre Rolle.`,
      [
        step('FOCs der Zielfunktion notieren.', String.raw`f_x=\lambda g_x,\qquad f_y=\lambda g_y`),
        step('Verhältnisse bilden.', String.raw`\frac{f_x}{f_y}=\frac{g_x}{g_y}`),
        step('Rolle als Zwischenlesart einordnen.', null)
      ],
      'Die Tangentialbedingung ist eine Lesart der FOCs, ersetzt aber nicht das vollständige Lösen mit Restriktion.'
    ),
    createTask(
      String.raw`Ein Bearbeiter bildet die Ableitungen erster Ordnung, vergisst aber die Nebenbedingung. Korrigieren Sie den Lösungsweg.`,
      [
        step('Fehlende Gleichung ergänzen.', String.raw`\mathcal{L}_\lambda=0`),
        step('Restriktion daraus wiederherstellen.', String.raw`g(x,y)=c`),
        step('Erst mit dieser Gleichung das System vollständig lösen.', null)
      ],
      'Ohne die Ableitung nach λ fehlt die Nebenbedingung und die Lösung bleibt unvollständig.'
    ),
    createTask(
      String.raw`Die Tangentialbedingung wird als Endergebnis hingeschrieben. Ergänzen Sie die fehlenden Schritte bis zur zulässigen Lösung.`,
      [
        step('Tangentialbedingung nur als Verhältnis lesen.', null),
        step('Zusätzlich die Restriktion einsetzen.', null),
        step('Dann konkrete Werte bestimmen.', null)
      ],
      'Die Tangentialbedingung allein liefert noch keine vollständige zulässige Lösung.'
    ),
    createTask(
      String.raw`Ein gefundener Multiplikator wird nur als Hilfsgröße erwähnt. Formulieren Sie die korrekte Schattenpreis-Interpretation.`,
      [
        step('λ als marginale Lockerung lesen.', null),
        step('Bezug zur Restriktion benennen.', null),
        step('Wirkung auf den Zielfunktionswert formulieren.', null)
      ],
      'λ ist der Schattenpreis einer zusätzlichen Einheit der knappen Ressource.'
    ),
    createTask(
      String.raw`Beantworten Sie die Zwischenfrage, welche Gleichung aus der Ableitung nach $\lambda$ entsteht.`,
      [
        step('Ableitung nach λ bilden.', String.raw`\mathcal{L}_\lambda=c-g(x,y)`),
        step('Gleich Null setzen.', String.raw`c-g(x,y)=0`),
        step('Nebenbedingung notieren.', String.raw`g(x,y)=c`)
      ],
      'Die Ableitung nach λ reproduziert die Nebenbedingung.'
    )
  ],
  integralrechnung: [
    createTask(
      String.raw`Bestimmen Sie das unbestimmte Integral $\int (3x^2-4x+1)\,dx$.`,
      [
        step('Gliedweise integrieren.', String.raw`\int 3x^2\,dx=x^3,\quad \int -4x\,dx=-2x^2,\quad \int 1\,dx=x`),
        step('Terme zusammensetzen.', String.raw`x^3-2x^2+x+C`),
        step('Integrationskonstante ergänzen.', null)
      ],
      'Eine Stammfunktion ist x^3 - 2x^2 + x + C.'
    ),
    createTask(
      String.raw`Berechnen Sie das bestimmte Integral $\int_0^2 (x+1)\,dx$.`,
      [
        step('Stammfunktion bilden.', String.raw`F(x)=\frac{x^2}{2}+x`),
        step('Grenzen einsetzen.', String.raw`F(2)-F(0)=\left(2+2\right)-0`),
        step('Wert berechnen.', String.raw`=4`)
      ],
      'Der Integralwert beträgt 4.'
    ),
    createTask(
      String.raw`Bestimmen Sie $\int x\cos(x)\,dx$ mittels partieller Integration.`,
      [
        step('Faktoren wählen.', String.raw`u=x,\qquad v'=\cos(x)`),
        step('Partielle Integration anwenden.', String.raw`\int x\cos(x)\,dx=x\sin(x)-\int \sin(x)\,dx`),
        step('Restintegral abschließen.', String.raw`=x\sin(x)+\cos(x)+C`)
      ],
      'Das Integral ergibt x sin(x) + cos(x) + C.'
    ),
    createTask(
      String.raw`Berechnen Sie $\int 2x(x^2+1)^4\,dx$ mit einer passenden Substitution.`,
      [
        step('Inneren Term wählen.', String.raw`u=x^2+1,\qquad du=2x\,dx`),
        step('Integral umschreiben.', String.raw`\int u^4\,du`),
        step('Integrieren und zurücksubstituieren.', String.raw`\frac{(x^2+1)^5}{5}+C`)
      ],
      'Mit u = x² + 1 erhält man (x²+1)^5 / 5 + C.'
    ),
    createTask(
      String.raw`Ein Bearbeiter gibt beim unbestimmten Integral keine Integrationskonstante an. Korrigieren Sie die Lösung.`,
      [
        step('Unbestimmtes Integral als Stammfunktionsfamilie lesen.', null),
        step('Konstante ergänzen.', String.raw`+C`),
        step('Bedeutung kurz benennen.', null)
      ],
      'Beim unbestimmten Integral gehört immer die Integrationskonstante +C dazu.'
    ),
    createTask(
      String.raw`Ein Integral unterhalb der x-Achse wird als positiver Flächeninhalt interpretiert. Stellen Sie den Unterschied klar.`,
      [
        step('Bestimmtes Integral als orientierte Fläche lesen.', null),
        step('Unterhalb der x-Achse zählt der Beitrag negativ.', null),
        step('Für Flächeninhalt ggf. Beträge oder Intervallsplitting nutzen.', null)
      ],
      'Integralwert und Flächeninhalt sind nicht automatisch identisch.'
    ),
    createTask(
      String.raw`Für $\int 2x(x^2+1)^4\,dx$ wird partielle Integration gewählt. Begründen Sie, warum Substitution hier passender ist.`,
      [
        step('Inneren Term erkennen.', String.raw`x^2+1`),
        step('Dessen Ableitung ist vorhanden.', String.raw`(x^2+1)'=2x`),
        step('Deshalb Substitution wählen.', null)
      ],
      'Weil innerer Term und Ableitung zusammen vorliegen, ist Substitution der natürliche Zugriff.'
    ),
    createTask(
      String.raw`Beantworten Sie die Zwischenfrage, welche Methode Sie bei $\int xe^x\,dx$ zuerst prüfen.`,
      [
        step('Produkt aus Polynom und Exponentialfunktion erkennen.', null),
        step('Passende Methode nennen.', String.raw`\text{partielle Integration}`),
        step('Faktorwahl andeuten.', String.raw`u=x,\qquad v'=e^x`)
      ],
      'Bei xe^x ist partielle Integration der erste Zugriff.'
    )
  ],
  r_begleitpraxis: [
    createTask(
      'Formulieren Sie eine saubere Arbeitsreihenfolge, wenn Sie in R eine Optimierungsaufgabe kontrollieren wollen.',
      [
        step('Zuerst mathematische Frage und erwartetes Ergebnis klären.', null),
        step('Dann den Startcode lesen und nur die Zielzeilen anpassen.', null),
        step('Am Ende den Output fachlich mit der Handlösung vergleichen.', null)
      ],
      'Die saubere Reihenfolge lautet: Mathematik klären, gezielt editieren, Output fachlich deuten.'
    ),
    createTask(
      'Nennen Sie genau, welche Zeilen in einem Startskript für einen Plot typischerweise geändert werden dürfen und welche nicht.',
      [
        step('Funktionsdefinition oder Parameterzeilen identifizieren.', null),
        step('Hilfsdaten und stabile Setup-Zeilen unangetastet lassen.', null),
        step('Nur die Zeilen ändern, die die Aufgabe ausdrücklich betrifft.', null)
      ],
      'Geändert werden nur die aufgabenrelevanten Parameter- oder Funktionszeilen.'
    ),
    createTask(
      'Beschreiben Sie, wie Sie einen Matrix-Output fachlich deuten, statt nur Zahlen abzulesen.',
      [
        step('Zuerst klären, was die Matrix repräsentiert.', null),
        step('Dann Struktur lesen: Dimension, Rang, Invertierbarkeit oder Eigenwerte.', null),
        step('Zum Schluss die mathematische Bedeutung in Worten formulieren.', null)
      ],
      'Ein Matrix-Output ist erst mit Strukturdeutung und mathematischer Aussage vollständig verstanden.'
    ),
    createTask(
      'Erläutern Sie, wann optimize() oder optim() als Kontrolle einer mathematischen Lösung sinnvoll ist.',
      [
        step('Mathematische Kandidaten zuerst per Hand bestimmen.', null),
        step('R zur numerischen Kontrolle oder Approximation verwenden.', null),
        step('Handlösung und numerisches Ergebnis vergleichen.', null)
      ],
      'optimize() und optim() sind Kontrollwerkzeuge, nicht Ersatz für die mathematische Lösung.'
    ),
    createTask(
      'Ein Bearbeiter startet direkt mit R, ohne die mathematische Aufgabe zu klären. Beschreiben Sie das richtige Vorgehen.',
      [
        step('Zuerst Frage, Methode und Zielgröße benennen.', null),
        step('Dann erst den Codeblock öffnen.', null),
        step('Am Ende den Output mit der mathematischen Frage verknüpfen.', null)
      ],
      'R kommt nach dem mathematischen Verständnis, nicht davor.'
    ),
    createTask(
      'In einem R-Block werden wahllos alle Zeilen geändert. Korrigieren Sie die Arbeitsweise.',
      [
        step('Nur die aufgabenrelevanten Zeilen identifizieren.', null),
        step('Stabile Definitions- und Setup-Zeilen stehen lassen.', null),
        step('Änderung gezielt und begründet ausführen.', null)
      ],
      'Eine gute R-Arbeitsweise ändert nur die Zeilen, die zur Mini-Aufgabe gehören.'
    ),
    createTask(
      'Ein Plot oder Konsolenoutput wird ohne fachliche Deutung stehen gelassen. Ergänzen Sie die mathematische Interpretation.',
      [
        step('Zahl, Kurve oder Optimum korrekt benennen.', null),
        step('Dann in mathemischer Sprache deuten.', null),
        step('Bezug zur Ausgangsfrage herstellen.', null)
      ],
      'Output ist nur der Zwischenschritt; die eigentliche Antwort ist die mathematische Deutung.'
    ),
    createTask(
      'Beantworten Sie die Zwischenfrage, was Sie vor dem Klick auf „Run“ fachlich bereits wissen sollten.',
      [
        step('Welche Methode mathematisch passt.', null),
        step('Welche Größe oder welches Muster der Output zeigen soll.', null),
        step('Welche Zeilen des Startcodes geändert werden dürfen.', null)
      ],
      'Vor dem Ausführen sollten Methode, Zielgröße und Änderungsstelle fachlich klar sein.'
    ),
    createTask(
      'Erläutern Sie den Unterschied zwischen mathemischer Lösung und numerischer R-Kontrolle an einem kurzen Beispiel.',
      [
        step('Die Mathematik liefert den analytischen Weg.', null),
        step('R bestätigt numerisch oder visualisiert das Ergebnis.', null),
        step('Beides zusammen erhöht Sicherheit, ersetzt sich aber nicht gegenseitig.', null)
      ],
      'Die Mathematik liefert die Begründung, R liefert Kontrolle und Sichtbarkeit.'
    )
  ]
};

function uniqueBy(items, keyFn) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function firstMathAnchor(entry, index = 0) {
  const formulas = Array.isArray(entry.formeln) ? entry.formeln : [];
  if (formulas.length) {
    return formulas[index % formulas.length];
  }

  const sectionMath = Array.isArray(entry.sections)
    ? entry.sections.flatMap((section) => Array.isArray(section.math) ? section.math : [])
    : [];
  if (sectionMath.length) {
    return {
      label: 'Formaler Anker',
      eq: sectionMath[index % sectionMath.length],
      desc: 'Nutze diese Notation, um den Lösungsweg zu strukturieren.',
      variables: {}
    };
  }

  const taskMath = Array.isArray(entry.aufgaben)
    ? entry.aufgaben.flatMap((task) => (task.steps || []).map((step) => step.eq).filter(Boolean))
    : [];
  if (taskMath.length) {
    return {
      label: 'Rechenschritt',
      eq: taskMath[index % taskMath.length],
      desc: 'Typischer formaler Zwischenschritt aus der Kleinübungsfamilie.',
      variables: {}
    };
  }

  return null;
}

function buildBaseGuidedTasks(entry) {
  return (entry.aufgaben || []).map((task) => ({
    ...task,
    sourceStatus: task.sourceStatus || 'source-distilled'
  }));
}

function buildCardGuidedTasks(entry) {
  const warnings = Array.isArray(entry.warnings) ? entry.warnings : [];
  return (entry.cards || []).map((card, index) => {
    const warning = warnings[index % Math.max(1, warnings.length)];
    const anchor = firstMathAnchor(entry, index);
    return createTask(
      `Bearbeiten Sie eine Aufgabe zum Thema "${card.title}" und führen Sie den Zugriff "${card.value}" vollständig aus.`,
      [
        { text: `Erkenne zuerst das Signal in der Aufgabenstellung: ${card.title}.` },
        { text: `Nutze das Standardschema: ${card.value}. ${card.note}` },
        anchor?.eq
          ? { text: `Halte den formalen Anker fest: ${anchor.label}.`, eq: anchor.eq }
          : { text: 'Notiere den zentralen formalen Zwischenschritt sauber, bevor du interpretierst.' },
        warning
          ? { text: `Fehlerkontrolle: ${warning.title}. ${warning.body}` }
          : { text: 'Kontrolliere am Ende Zulässigkeit, Vorzeichen und Interpretation.' }
      ],
      `${card.title}: ${card.value} sitzt als wiederholbares Kleinübungsschema.`,
      card.sourceStatus || 'source-distilled'
    );
  });
}

function buildWarningGuidedTasks(entry) {
  const cards = Array.isArray(entry.cards) ? entry.cards : [];
  return (entry.warnings || []).map((warning, index) => {
    const card = cards[index % Math.max(1, cards.length)];
    const anchor = firstMathAnchor(entry, index + 1);
    return createTask(
      `In einem Lösungsweg tritt der Fehler "${warning.title}" auf. Korrigieren Sie den Ansatz und sichern Sie den Rechenweg bis zum Endergebnis ab.`,
      [
        { text: `Markiere das Fehlerbild: ${warning.body}` },
        card
          ? { text: `Setze stattdessen den richtigen Zugriff an: ${card.title} → ${card.value}. ${card.note}` }
          : { text: 'Setze stattdessen das korrekte Standardschema Schritt für Schritt an.' },
        anchor?.eq
          ? { text: 'Verankere die Korrektur im passenden formalen Schritt.', eq: anchor.eq }
          : { text: 'Verankere die Korrektur in einer sauberen Notation oder Gleichung.' },
        { text: 'Schließe mit einer kurzen Selbstkontrolle: Was prüfst du, bevor du das Ergebnis hinschreibst?' }
      ],
      `Der Fehler "${warning.title}" ist für ${entry.short} aktiv abgesichert.`,
      warning.sourceStatus || 'source-distilled'
    );
  });
}

function buildStepProblemGuidedTasks(entry) {
  return (entry.stepProblems || []).map((problem) => createTask(
    `Beantworten Sie die Zwischenfrage "${problem.title}" knapp, sauber und rechnerisch korrekt.`,
    (problem.steps || []).map((step, index) => ({
      text: `${stripHtml(step.q)}${step.hint ? ` Hinweis: ${step.hint}` : ''}${step.explain ? ` Saubere Reaktion: ${step.explain}` : ''}`,
      eq: null
    })).concat([
      {
        text: problem.context || `So sieht die kompakte Entscheidungskette für ${entry.title} unter Zeitdruck aus.`,
        eq: null
      }
    ]),
    problem.context || `${problem.title} sitzt als kurzer Prüfungsablauf für ${entry.short}.`,
    'source-distilled'
  ));
}

function buildFormulaGuidedTasks(entry) {
  return (entry.formeln || []).slice(0, 1).map((formula) => createTask(
    `Notieren Sie zuerst die Beziehung "${formula.label}" und arbeiten Sie dann den Lösungsweg geordnet bis zur Zielgröße aus.`,
    [
      { text: `Starte mit der passenden Gleichung: ${formula.desc || formula.label}.`, eq: formula.eq },
      { text: 'Benenne anschließend jede Variable, bevor du Werte oder Bedingungen einsetzt.' },
      { text: 'Leite daraus ab, welche Größe du isolierst, vergleichst oder interpretierst.' },
      { text: 'Kontrolliere zum Schluss, ob dein Ergebnis fachlich und rechnerisch plausibel ist.' }
    ],
    `${formula.label}: Notation, Einsatz und Zielgröße sind klausurfest sortiert.`,
    formula.sourceStatus || 'source-distilled'
  ));
}

function buildTaskDrill(task, index) {
  return {
    tag: '',
    question: task.text,
    answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Lösungslogik</span>
<ol class="exam-drill-steps">${(task.steps || []).map((step) => `<li>${escapeHtml(step.text || '')}${renderMathBlock(step.eq)}</li>`).join('')}</ol>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Prüfungsresultat</span>
<div class="result-badge">${escapeHtml(task.result || `Arbeite ${index + 1} sauber zu Ende aus.`)}</div>
</div>`
  };
}

function buildSolvedTaskDeck(entry) {
  return uniqueBy([
    ...buildBaseGuidedTasks(entry),
    ...(SOLVED_EXTRA_TASKS_BY_ID[entry.id] || [])
  ], (task) => stripHtml(task.text).toLowerCase()).slice(0, 10);
}

function buildPatternDrill(entry, pattern, index) {
  const anchor = firstMathAnchor(entry, index);
  const warning = (entry.warnings || [])[index % Math.max(1, (entry.warnings || []).length)];
  return {
    tag: '',
    question: `In der Klausur taucht bei "${entry.title}" das Signal "${pattern.if}" auf. Welcher Rechenzugriff kommt zuerst?`,
    answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Erstes Signal</span>
<div class="exam-drill-copy">${escapeHtml(pattern.if)}</div>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Sauberer Zugriff</span>
<div class="exam-drill-copy">${escapeHtml(pattern.then)}</div>
</div>
${anchor?.eq ? `<div class="exam-drill-line">
<span class="exam-drill-key">Formaler Anker</span>
${renderMathBlock(anchor.eq)}
</div>` : ''}
${warning ? `<div class="exam-drill-line">
<span class="exam-drill-key">Fehlerkontrolle</span>
<div class="exam-drill-copy"><strong>${escapeHtml(warning.title)}:</strong> ${escapeHtml(warning.body)}</div>
</div>` : ''}`
  };
}

function buildWarningDrill(entry, warning, index) {
  const card = (entry.cards || [])[index % Math.max(1, (entry.cards || []).length)];
  const anchor = firstMathAnchor(entry, index + 1);
  return {
    tag: '',
    question: `Wo verlierst du in ${entry.short} unter Zeitdruck Punkte, wenn "${warning.title}" passiert, und wie rettest du den Lösungsweg?`,
    answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Fehlerbild</span>
<div class="exam-drill-copy">${escapeHtml(warning.body)}</div>
</div>
${card ? `<div class="exam-drill-line">
<span class="exam-drill-key">Gegenregel</span>
<div class="exam-drill-copy"><strong>${escapeHtml(card.title)}:</strong> ${escapeHtml(card.value)}. ${escapeHtml(card.note)}</div>
</div>` : ''}
${anchor?.eq ? `<div class="exam-drill-line">
<span class="exam-drill-key">Sauberer Formalschritt</span>
${renderMathBlock(anchor.eq)}
</div>` : ''}
<div class="exam-drill-line">
<span class="exam-drill-key">Kurzcheck</span>
<div class="exam-drill-copy">Bevor du das Endergebnis hinschreibst, prüfe Zulässigkeit, Vorzeichen und Aufgabenfrage erneut.</div>
</div>`
  };
}

function buildFormulaDrill(entry, formula) {
  return {
    tag: '',
    question: `Welche Gleichung oder Notation schreibst du bei ${entry.short} zuerst hin, damit der Lösungsweg sauber geordnet bleibt?`,
    answer: `<div class="exam-drill-line">
<span class="exam-drill-key">${escapeHtml(formula.label)}</span>
${renderMathBlock(formula.eq)}
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Bedeutung</span>
<div class="exam-drill-copy">${escapeHtml(formula.desc || 'Diese Formel strukturiert den Rechenweg.')}</div>
</div>
${Object.keys(formula.variables || {}).length ? `<div class="exam-drill-line">
<span class="exam-drill-key">Notation</span>
${renderNotationList(formula.variables)}
</div>` : ''}`
  };
}

function buildCardDrill(entry, card, index) {
  const anchor = firstMathAnchor(entry, index);
  return {
    tag: '',
    question: `Welche Aufgabenfamilie liegt in ${entry.short} vor, wenn du das Signal "${card.title}" siehst, und wie gehst du dann vor?`,
    answer: `<div class="exam-drill-line">
<span class="exam-drill-key">Signal</span>
<div class="exam-drill-copy">${escapeHtml(card.title)}</div>
</div>
<div class="exam-drill-line">
<span class="exam-drill-key">Standardzugriff</span>
<div class="exam-drill-copy"><strong>${escapeHtml(card.value)}</strong> — ${escapeHtml(card.note)}</div>
</div>
${anchor?.eq ? `<div class="exam-drill-line">
<span class="exam-drill-key">Formaler Anker</span>
${renderMathBlock(anchor.eq)}
</div>` : ''}`
  };
}

function buildGuidedTasks(entry) {
  return buildSolvedTaskDeck(entry);
}

function buildTransferDrills(entry) {
  return buildSolvedTaskDeck(entry)
    .slice(0, 10)
    .map((task, index) => buildTaskDrill(task, index));
}

export const MATHEMATIK_GUIDED_TASKS_BY_ID = Object.fromEntries(
  CURRICULUM.map((entry) => [entry.id, buildGuidedTasks(entry)])
);

export const MATHEMATIK_EXAM_DRILLS_BY_ID = Object.fromEntries(
  CURRICULUM.map((entry) => [entry.id, buildTransferDrills(entry)])
);
