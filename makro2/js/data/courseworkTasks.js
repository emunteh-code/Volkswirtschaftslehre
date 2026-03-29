// ============================================================
// COURSEWORK TASKS — Makroökonomik II
// Practice problems sourced from the provided exercises/tutorials
// ============================================================

function cloneTasks(tasks) {
  return tasks.map(task => ({
    ...task,
    text: stripSourcePrefix(task.text),
    steps: task.steps.map(step => ({ ...step })),
  }));
}

function stripSourcePrefix(text) {
  return text.replace(/^<em>Quelle:[^<]*<\/em><br>/, '');
}

const PRACTICE_SETS = {
  wechselkurs: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 1, Aufgabe 1</em><br>Die Währung in Land A sei Mark, in Land B Schilling. Am 1.1.2017 kostet ein Schilling drei Mark. Die Inflationsrate in Land A beträgt $10\%$, in Land B $20\%$. Bestimme aus Sicht von Land A den anfänglichen Wechselkurs in Mengen- und Preisnotierung und berechne den nominalen Wechselkurs am 1.1.2018 unter absoluter Kaufkraftparität.`,
      steps: [
        { text: 'Aus der Angabe folgt zunächst die Preisnotierung:', eq: String.raw`$$1\ \text{Schilling} = 3\ \text{Mark}$$` },
        { text: 'Aus Sicht von Land A lautet die Mengennotierung deshalb:', eq: String.raw`$$E_{2017} = \frac{1}{3}\ \text{Schilling pro Mark}$$` },
        { text: 'Unter absoluter KKP in Mengennotierung gilt:', eq: String.raw`$$E_{2018} = E_{2017}\cdot\frac{1+\pi_B}{1+\pi_A} = \frac{1}{3}\cdot\frac{1{,}20}{1{,}10}$$` },
        { text: 'Numerisch ergibt sich:', eq: String.raw`$$E_{2018} \approx 0{,}364\ \text{Schilling pro Mark}$$` },
      ],
      result: String.raw`Preisnotierung: $3$ Mark pro Schilling, Mengennotierung: $\tfrac{1}{3}$ Schilling pro Mark, PPP-Kurs 2018: $E_{2018}\approx 0{,}364$.`
    },
    {
      text: String.raw`<em>Quelle: Übungsblatt 1, Aufgabe 1d</em><br>Am 1.1.2018 bringt eine Mark tatsächlich $0{,}4$ Schilling. Beurteile, ob die Mark gegenüber dem Schilling real auf- oder abgewertet ist.`,
      steps: [
        { text: 'Der PPP-konforme nominale Wechselkurs aus Teilaufgabe c) beträgt:', eq: String.raw`$$E_{\text{KKP}} \approx 0{,}364$$` },
        { text: 'Tatsächlich beobachtet wird aber:', eq: String.raw`$$E_{\text{tatsächlich}} = 0{,}4$$` },
        { text: 'Da der tatsächliche Mengenkurs über dem KKP-Kurs liegt, kauft eine Mark mehr Schilling als nach KKP zu erwarten wäre.', eq: null },
        { text: 'Die Mark ist damit real stärker als im KKP-Fall.', eq: null },
      ],
      result: 'Die Mark ist gegenüber dem Schilling real aufgewertet.'
    },
  ],

  kaufkraftparitaet: [
    {
      text: String.raw`<em>Quelle: Tutorienblatt 1, Aufgabe 2</em><br>In Großbritannien kostet ein Big Mac $4{,}59$ GBP, in den USA $5{,}79$ USD. Der tatsächliche Wechselkurs sei $1$ GBP $= 1{,}33$ USD. Berechne den impliziten PPP-Wechselkurs in Mengennotierung und beurteile die Über- oder Unterbewertung.`,
      steps: [
        { text: 'Der implizite PPP-Kurs ergibt sich aus dem Preisverhältnis des gleichen Gutes:', eq: String.raw`$$E_{\text{PPP}} = \frac{5{,}79}{4{,}59} \approx 1{,}261\ \text{USD pro GBP}$$` },
        { text: 'Vergleich mit dem beobachteten Kurs:', eq: String.raw`$$E_{\text{tatsächlich}} = 1{,}33 > E_{\text{PPP}}$$` },
        { text: 'Das Pfund kauft am Markt mehr Dollar als nach PPP impliziert wäre.', eq: null },
        { text: 'Entsprechend wirkt der US-Dollar gegenüber dem Pfund leicht unterbewertet.', eq: null },
      ],
      result: String.raw`Impliziter PPP-Kurs: $1{,}261$ USD/GBP; der US-Dollar erscheint gegenüber dem Pfund leicht unterbewertet (bzw. das Pfund leicht überbewertet).`
    },
    {
      text: String.raw`<em>Quelle: Tutorienblatt 1, Aufgabe 2</em><br>Nenne zwei Gründe, warum der Big-Mac-Index systematisch vom nominalen Wechselkurs abweichen kann, ohne dass dies zwingend eine echte Fehlbewertung der Währung bedeutet.`,
      steps: [
        { text: 'Ein Big Mac enthält viele nicht handelbare Komponenten wie Mieten, lokale Löhne und Restaurantdienstleistungen.', eq: null },
        { text: 'Zusätzlich unterscheiden sich Mehrwertsteuern, Wettbewerbsintensität, Regulierung und Produktivitätsniveaus zwischen Ländern.', eq: null },
        { text: 'Deshalb misst der Big-Mac-Index nicht nur handelbare Güterpreise, sondern auch lokale Kostenstrukturen.', eq: null },
      ],
      result: 'Typische Gründe sind nicht handelbare Inputs und länderspezifische Steuer-, Kosten- oder Produktivitätsunterschiede.'
    },
  ],

  zinsparitaet: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 1, Aufgabe 2</em><br>Du kannst einen Kredit in Deutschland zu $8\%$ oder in der Schweiz zu $5\%$ aufnehmen. Solltest du dem scheinbar billigeren Schweizer Kredit blind vertrauen? Begründe mit Realzins- und Zinsparitätsargumenten.`,
      steps: [
        { text: 'Die bloße Differenz der Nominalzinsen genügt nicht, weil ein Fremdwährungskredit zusätzlich Wechselkursrisiken enthält.', eq: null },
        { text: 'Wenn Realzinsen in beiden Ländern gleich sind, muss der Nominalzinsunterschied auf unterschiedliche erwartete Inflation zurückgehen:', eq: String.raw`$$i \approx r + \pi^e$$` },
        { text: 'Unter Zinsparität wird ein scheinbarer Zinsvorteil durch eine erwartete Wechselkursänderung kompensiert.', eq: String.raw`$$i - i^* \approx -\frac{E^e - E}{E}$$` },
        { text: 'Der niedrigere Schweizer Zins bedeutet daher nicht automatisch geringere Finanzierungskosten in Euro.', eq: null },
      ],
      result: 'Nein. Der niedrigere Fremdwährungszins kann durch erwartete Wechselkursänderungen vollständig aufgezehrt werden.'
    },
    {
      text: String.raw`<em>Quelle: Übungsblatt 1, Aufgabe 2b-c</em><br>Angenommen, der Realzins ist in Deutschland und der Schweiz gleich groß. Deutschland hat einen Nominalzins von $8\%$, die Schweiz von $5\%$. Was folgt für erwartete Inflation und erwartete Wechselkursentwicklung?`,
      steps: [
        { text: 'Bei gleichem Realzins gilt nach der Fisher-Beziehung:', eq: String.raw`$$i - i^* = \pi^e - {\pi^*}^e$$` },
        { text: 'Da $8\%-5\%=3$ Prozentpunkte, ist die erwartete Inflation in Deutschland um etwa 3 Prozentpunkte höher.', eq: null },
        { text: 'Nach ungedeckter Zinsparität wird dieser Zinsunterschied durch eine erwartete Abwertung der höher verzinsten Währung kompensiert.', eq: null },
        { text: 'Die deutsche Währung müsste also gegenüber dem Schweizer Franken abwerten.', eq: null },
      ],
      result: 'Deutschland weist die höhere erwartete Inflation auf; entsprechend wird eine Abwertung der deutschen Währung gegenüber dem Franken erwartet.'
    },
  ],

  zahlungsbilanz: [
    {
      text: String.raw`<em>Quelle: Tutorienblatt 1, Aufgabe 1.2</em><br>Ein deutsches Unternehmen exportiert Autozubehör nach China und importiert für den Erlös im gleichen Wert Solarzellen nach Deutschland. Wie verändern sich Leistungsbilanz, Kapitalbilanz und Nettoverschuldung Deutschlands?`,
      steps: [
        { text: 'Der Export erhöht zunächst die Warenexporte, der gleich große Import erhöht aber auch die Warenimporte im selben Umfang.', eq: null },
        { text: 'Die Handelsbilanz ändert sich netto daher nicht.', eq: String.raw`$$\Delta NX = \Delta X - \Delta M = 0$$` },
        { text: 'Da keine zusätzlichen Auslandsforderungen aufgebaut oder abgebaut werden, bleibt auch die Kapitalbilanz unverändert.', eq: null },
        { text: 'Ohne Nettoforderung gegenüber dem Ausland ändert sich die Nettoverschuldung ebenfalls nicht.', eq: null },
      ],
      result: 'Leistungsbilanz unverändert, Kapitalbilanz unverändert, Nettoverschuldung unverändert.'
    },
    {
      text: String.raw`<em>Quelle: Tutorienblatt 1, Aufgabe 1.2-1.3</em><br>Ein deutsches Unternehmen exportiert Autozubehör nach China und investiert den Erlös an der chinesischen Börse. Warum muss dies nicht zu einem ausgeglichenen Leistungsbilanzsaldo von null führen, selbst wenn Exporte und Importe gleich groß wären?`,
      steps: [
        { text: 'Der Export verbessert zunächst die Handelsbilanz und damit die Leistungsbilanz.', eq: null },
        { text: 'Die Reinvestition des Erlöses in chinesische Wertpapiere ist ein Kapitalexport und erscheint spiegelbildlich in der Kapitalbilanz.', eq: null },
        { text: 'Außerdem umfasst die Leistungsbilanz mehr als nur Warenhandel: auch Primäreinkommen und Sekundäreinkommen gehen ein.', eq: String.raw`$$\text{LB} = \text{Handelsbilanz} + \text{Primäreinkommen} + \text{Sekundäreinkommen}$$` },
        { text: 'Selbst bei ausgeglichener Handelsbilanz kann die Leistungsbilanz deshalb wegen Faktor- oder Transferströmen von null abweichen.', eq: null },
      ],
      result: 'Export plus Auslandsanlage verbessert zunächst die Leistungsbilanz und erzeugt einen Kapitalexport; außerdem ist die Leistungsbilanz mehr als nur Exporte minus Importe.'
    },
  ],

  offeneVolkswirtschaft: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 2, Aufgabe 1b</em><br>Die USA betreiben nach einer Wahl eine expansive Fiskalpolitik über Steuersenkungen, während Wechselkurs und Staatsausgaben konstant bleiben. Welche Wirkung hat das auf Produktion und Handelsbilanz?`,
      steps: [
        { text: 'Sinkende Steuern erhöhen das verfügbare Einkommen und damit den Konsum der privaten Haushalte.', eq: null },
        { text: 'Die gesamtwirtschaftliche Nachfrage nach inländischen Gütern steigt, also erhöht sich die Produktion.', eq: null },
        { text: 'Mit höherem Einkommen steigen aber auch die Importe.', eq: null },
        { text: 'Dadurch verschlechtert sich die Handelsbilanz bzw. ein bestehendes Handelsbilanzdefizit weitet sich aus.', eq: null },
      ],
      result: 'Die Produktion steigt, die Handelsbilanz verschlechtert sich.'
    },
    {
      text: String.raw`<em>Quelle: Tutorienblatt 2, Aufgabe 2</em><br>Für die offene Volkswirtschaft gelte $Z = C + I + G + X - IM$ mit $C = c_0 + c_1(Y-T)$, $I = b_0 + b_1Y - b_2 i$, $IM = q_1Y$, $X = x_1Y^*$. Bestimme die Gleichgewichtsproduktion und den Staatsausgabenmultiplikator.`,
      steps: [
        { text: 'Im Gütermarktgleichgewicht gilt $Y = Z$:', eq: String.raw`$$Y = c_0 + c_1(Y-T) + b_0 + b_1Y - b_2 i + G + x_1Y^* - q_1Y$$` },
        { text: 'Alle endogenen $Y$-Terme auf die linke Seite bringen:', eq: String.raw`$$Y\bigl(1 - c_1 - b_1 + q_1\bigr) = c_0 - c_1T + b_0 - b_2 i + G + x_1Y^*$$` },
        { text: 'Nach $Y$ auflösen:', eq: String.raw`$$Y = \frac{c_0 - c_1T + b_0 - b_2 i + G + x_1Y^*}{1 - c_1 - b_1 + q_1}$$` },
        { text: 'Der Staatsausgabenmultiplikator ist damit:', eq: String.raw`$$\frac{\partial Y}{\partial G} = \frac{1}{1 - c_1 - b_1 + q_1}$$` },
        { text: 'Er ist kleiner als in der geschlossenen Volkswirtschaft, weil $q_1Y$ als Importleck einen Teil der Zusatznachfrage ins Ausland abfließen lässt.', eq: null },
      ],
      result: String.raw`$Y = \dfrac{c_0 - c_1T + b_0 - b_2 i + G + x_1Y^*}{1 - c_1 - b_1 + q_1}$ und $\dfrac{\partial Y}{\partial G} = \dfrac{1}{1 - c_1 - b_1 + q_1}$.`
    },
  ],

  marshallLerner: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 2, Aufgabe 1c</em><br>Während der expansiven Fiskalpolitik wertet der US-Dollar gegenüber dem Euro ab. Welche Wirkung hat diese nominale Abwertung bei konstanten Preisniveaus auf Produktion und Handelsbilanzdefizit, wenn die Marshall-Lerner-Bedingung gilt?`,
      steps: [
        { text: 'Bei konstanten Preisniveaus entspricht eine nominale Abwertung auch einer realen Abwertung.', eq: null },
        { text: 'Gilt die Marshall-Lerner-Bedingung, steigen die Nettoexporte nach einer Abwertung.', eq: String.raw`$$|\eta_X| + |\eta_M| > 1 \Rightarrow \Delta NX > 0$$` },
        { text: 'Damit erhöht sich die Nachfrage nach inländischer Produktion zusätzlich.', eq: null },
        { text: 'Das Handelsbilanzdefizit verringert sich, und die expansiven Effekte auf die Produktion werden verstärkt statt aufgehoben.', eq: null },
      ],
      result: 'Bei erfüllter Marshall-Lerner-Bedingung stärkt die Abwertung Produktion und verbessert die Handelsbilanz.'
    },
    {
      text: String.raw`<em>Quelle: Tutorienblatt 2, Aufgabe 1.2-1.3</em><br>Erkläre den Zusammenhang zwischen J-Kurve und Marshall-Lerner-Bedingung. Warum ist kurzfristig nicht immer eindeutig, ob eine reale Abwertung die Handelsbilanz verbessert?`,
      steps: [
        { text: 'Die Marshall-Lerner-Bedingung ist eine Langfristaussage über die Summe der Preiselastizitäten von Exporten und Importen.', eq: String.raw`$$|\eta_X| + |\eta_M| > 1$$` },
        { text: 'Kurzfristig reagieren Mengen oft nur träge; Verträge und Gewohnheiten fixieren das Handelsvolumen zunächst.', eq: null },
        { text: 'Dann dominiert anfangs der Preiseffekt: Importe werden teurer, bevor sich die Mengen ausreichend anpassen.', eq: null },
        { text: 'Genau dieser Übergang erzeugt die J-Kurve: zunächst Verschlechterung, später mögliche Verbesserung.', eq: null },
      ],
      result: 'Kurzfristig kann eine Abwertung die Handelsbilanz zunächst verschlechtern; erst mit Mengenanpassung entscheidet die Marshall-Lerner-Bedingung über die spätere Verbesserung.'
    },
  ],

  mundellFleming: [
    {
      text: String.raw`<em>Quelle: Tutorienblatt 3, Aufgabe 2d</em><br>Die Märkte geben der Aufrechterhaltung einer festen Parität eine Wahrscheinlichkeit von $50\%$; mit $50\%$ Wahrscheinlichkeit wird in der nächsten Periode um $10\%$ abgewertet. Um wie viele Prozentpunkte muss die Zentralbank den Zinssatz anheben, um den Wechselkurs konstant zu halten?`,
      steps: [
        { text: 'Die erwartete Abwertungsrate ist der Wahrscheinlichkeitsdurchschnitt:', eq: String.raw`$$\mathbb{E}[\Delta E/E] = 0{,}5\cdot 0 + 0{,}5\cdot 10\% = 5\%$$` },
        { text: 'Nach ungedeckter Zinsparität muss dieser erwartete Kursverlust durch einen Zinsaufschlag kompensiert werden.', eq: String.raw`$$i - i^* \approx \mathbb{E}[\Delta E/E]$$` },
        { text: 'Damit braucht das Inland einen um 5 Prozentpunkte höheren Zinssatz.', eq: null },
      ],
      result: 'Die Zentralbank muss den inländischen Zinssatz um 5 Prozentpunkte anheben.'
    },
    {
      text: String.raw`<em>Quelle: Übungsblatt 3, Aufgabe 2</em><br>Ordne China im Trilemma der Geldpolitik ein. Kann ein Land gleichzeitig festen Wechselkurs, freien Kapitalverkehr und autonome Geldpolitik haben?`,
      steps: [
        { text: 'Das Trilemma besagt, dass immer nur zwei der drei Ziele gleichzeitig erreichbar sind.', eq: null },
        { text: 'Ein Land mit festem Wechselkurs und freiem Kapitalverkehr kann keine vollständig unabhängige Geldpolitik betreiben.', eq: null },
        { text: 'China versucht den Zielkonflikt durch Wechselkursmanagement und unvollständige Kapitalmobilität abzufedern.', eq: null },
      ],
      result: 'Nein. Bei festem Wechselkurs und freiem Kapitalverkehr ist keine autonome Geldpolitik möglich; China arbeitet deshalb mit partiellen Kapitalverkehrsbeschränkungen.'
    },
  ],

  wechselkursregime: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 4, Aufgabe 1a-b</em><br>Argentinien hielt im Currency Board den nominalen Wechselkurs zum US-Dollar konstant. Wenn die argentinische Inflation von 1992 bis Anfang 1996 deutlich über der US-Inflation liegt, wie entwickelt sich der reale Wechselkurs und was bedeutet das ökonomisch?`,
      steps: [
        { text: 'Bei festem nominalem Wechselkurs gilt für den realen Wechselkurs vereinfacht:', eq: String.raw`$$\varepsilon = E\frac{P}{P^*}$$` },
        { text: 'Wenn $E$ konstant ist, aber das inländische Preisniveau schneller steigt als das ausländische, steigt $\varepsilon$.', eq: null },
        { text: 'Das bedeutet reale Aufwertung: inländische Güter werden relativ teurer.', eq: null },
        { text: 'Folge: Wettbewerbsfähigkeit sinkt, Exporte werden belastet und Importe attraktiver.', eq: null },
      ],
      result: 'Argentinien erlebt eine reale Aufwertung und verliert an Wettbewerbsfähigkeit.'
    },
    {
      text: String.raw`<em>Quelle: Übungsblatt 4, Aufgabe 1c-e</em><br>Warum hielt Argentinien trotz wachsender Probleme zunächst am Currency Board fest, und warum konnte es später dennoch zur Krise kommen?`,
      steps: [
        { text: 'Das Currency Board schuf nach der Hochinflation zunächst Glaubwürdigkeit und disziplinierte die Geldpolitik.', eq: null },
        { text: 'Mit anhaltender realer Aufwertung und fehlender Wechselkursanpassung wuchsen jedoch Rezession, Arbeitslosigkeit und externe Ungleichgewichte.', eq: null },
        { text: 'Ohne eigene Geldpolitik und ohne Abwertung blieb die Anpassung sehr schmerzhaft, was die Krise begünstigte.', eq: null },
      ],
      result: 'Das Regime brachte zuerst Glaubwürdigkeit, verschärfte später aber durch reale Überbewertung und fehlende Flexibilität die Krisendynamik.'
    },
  ],

  zeitinkonsistenz: [
    {
      text: String.raw`<em>Quelle: Tutorienblatt 4, Aufgabe 2a</em><br>Im Barro-Gordon-Modell minimiert die Zentralbank $L = 1{,}5\pi_t^2 + u_t^2$ unter der Phillipskurve $\pi_t = \pi_t^e - (u_t - 0{,}05)$. Bestimme die präferierte Inflationsrate und die Arbeitslosenquote, wenn der private Sektor stabile Preise erwartet ($\pi_t^e = 0$).`,
      steps: [
        { text: 'Aus der Phillipskurve folgt bei $\pi_t^e = 0$:', eq: String.raw`$$u_t = 0{,}05 - \pi_t$$` },
        { text: 'In die Verlustfunktion eingesetzt ergibt das:', eq: String.raw`$$L(\pi_t) = 1{,}5\pi_t^2 + (0{,}05 - \pi_t)^2 = 2{,}5\pi_t^2 - 0{,}1\pi_t + 0{,}0025$$` },
        { text: 'Ableiten und gleich null setzen:', eq: String.raw`$$\frac{dL}{d\pi_t} = 5\pi_t - 0{,}1 = 0 \Rightarrow \pi_t = 0{,}02$$` },
        { text: 'Die Arbeitslosenquote folgt aus der Phillipskurve:', eq: String.raw`$$u_t = 0{,}05 - 0{,}02 = 0{,}03$$` },
      ],
      result: String.raw`Die Zentralbank wählt $\pi_t = 2\%$, daraus folgt $u_t = 3\%$.`
    },
    {
      text: String.raw`<em>Quelle: Übungsblatt 5, Aufgabe 1d-i</em><br>Was passiert im Barro-Gordon-Modell ohne glaubwürdiges Commitment, wenn private Akteure den Inflationsanreiz der Zentralbank antizipieren?`,
      steps: [
        { text: 'Rationale Wirtschaftssubjekte bilden dann höhere Inflationserwartungen.', eq: null },
        { text: 'Die Zentralbank kann die Arbeitslosigkeit dadurch nicht dauerhaft unter ihre natürliche Rate drücken.', eq: null },
        { text: 'Es bleibt ein reiner Inflationsbias: höhere Inflation bei unveränderter Arbeitslosigkeit im Gleichgewicht.', eq: null },
      ],
      result: 'Ohne Commitment entsteht ein Inflationsbias: mehr Inflation, aber keine dauerhaft niedrigere Arbeitslosigkeit.'
    },
  ],

  staatsverschuldung: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 6, Aufgabe 1a</em><br>Ausgangslage: $B_0 = 0$, $G = 1000$, $r = 10\%$, Nullinflation. In Periode $t=1$ senkt die Regierung die Nettosteuern einmalig auf $900$, sodass ein Defizit von $100$ entsteht. Wie hoch müssen die zusätzlichen Steuereinnahmen in $t=4$ bzw. $t=10$ sein, wenn die Schuld genau dann vollständig getilgt wird?`,
      steps: [
        { text: 'Nach der einmaligen Steuersenkung beträgt die neu entstandene Schuld am Ende von Periode 1:', eq: String.raw`$$B_1 = 100$$` },
        { text: 'Tilgung in $t=4$ bei ausgeglichenem Primärsaldo in $t=2$ und $t=3$:', eq: String.raw`$$B_4 = 100\cdot(1{,}1)^3 = 133{,}1$$` },
        { text: 'Tilgung in $t=10$ analog:', eq: String.raw`$$B_{10} = 100\cdot(1{,}1)^9 \approx 235{,}79$$` },
        { text: 'Diese Beträge müssen jeweils zusätzlich zu den regulären Steuereinnahmen erhoben werden.', eq: null },
      ],
      result: String.raw`Zusätzliche Steuern: $133{,}1$ in $t=4$ bzw. etwa $235{,}8$ in $t=10$.`
    },
    {
      text: String.raw`<em>Quelle: Tutorienblatt 4, Aufgabe 1.1-1.3</em><br>Wie hängen Wachstumsrate, Schuldenquote und ricardianische Äquivalenz zusammen? Formuliere die Kernaussagen knapp.`,
      steps: [
        { text: 'Eine höhere Wachstumsrate senkt ceteris paribus die Schuldenquote, weil der Nenner des Quotienten schneller wächst.', eq: String.raw`$$\Delta b \approx (r-g)b - ps$$` },
        { text: 'Ricardianische Äquivalenz bedeutet: Eine Steuersenkung erhöht den Konsum nicht zwingend, weil private Haushalte für spätere Steuerzahlungen sparen.', eq: null },
        { text: 'Ob die Schuldenquote fällt oder steigt, hängt daher gemeinsam von Zins, Wachstum und Primärsaldo ab.', eq: null },
      ],
      result: 'Mehr Wachstum entlastet die Schuldenquote; unter ricardianischer Äquivalenz verpufft eine Steuersenkung teilweise über höhere private Ersparnis.'
    },
  ],

  geldpolitik: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 7, Aufgabe 3 und Tutorienblatt 5, Aufgabe 1</em><br>Die Zentralbank folge entweder $i_t = i^* + \alpha(\pi_t - \pi^*)$ oder $i_t = i^* + \alpha(\pi_t - \pi^*) - \beta(u_t-u_n)$. Was passiert mit dem Zinssatz, wenn Inflation genau am Ziel liegt, die Arbeitslosigkeit aber über ihrem natürlichen Niveau liegt?`,
      steps: [
        { text: 'In der reinen Inflationsregel verschwindet der einzige Reaktionsterm bei $\pi_t=\pi^*$.', eq: String.raw`$$i_t = i^* + \alpha(\pi_t-\pi^*) = i^*$$` },
        { text: 'Der Zinssatz bleibt dort also unverändert, obwohl die Arbeitslosigkeit zu hoch ist.', eq: null },
        { text: 'In der erweiterten Regel mit Arbeitslosigkeitslücke gilt dagegen $u_t-u_n>0$, sodass der Term $-\beta(u_t-u_n)$ den Zinssatz nach unten drückt.', eq: null },
      ],
      result: 'Ohne Arbeitslosigkeitsterm bleibt der Zins unverändert; mit Taylor-Regel inklusive Arbeitslosigkeitslücke wird der Zins gesenkt.'
    },
    {
      text: String.raw`<em>Quelle: Tutorienblatt 5, Aufgabe 1.3</em><br>Erkläre das Taylor-Prinzip und den Zusammenhang zum Realzins.`,
      steps: [
        { text: 'Das Taylor-Prinzip verlangt, dass der Nominalzins bei höherer Inflation mehr als eins zu eins steigt.', eq: null },
        { text: 'Nur dann steigt auch der Realzins.', eq: String.raw`$$r_t \approx i_t - \pi_t$$` },
        { text: 'Ein höherer Realzins dämpft Nachfrage und Inflation; ohne Taylor-Prinzip könnte Inflation sich selbst verstärken.', eq: null },
      ],
      result: 'Taylor-Prinzip: Der Nominalzins muss stärker steigen als die Inflation, damit auch der Realzins steigt und stabilisierend wirkt.'
    },
  ],

  geldmenge: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 6, Aufgabe 2</em><br>Vergleiche die Finanzierung zusätzlicher Staatsausgaben über Kredite mit einer Finanzierung durch Geldschöpfung im IS-LM-PC-Rahmen. Welche Variante erhöht kurz- und mittelfristig den Inflationsdruck stärker?`,
      steps: [
        { text: 'Kreditfinanzierung verschiebt zunächst die IS-Kurve nach rechts; Output und Zins steigen kurzfristig.', eq: null },
        { text: 'Monetisierung erhöht zusätzlich die Geldmenge und verschiebt deshalb auch die LM-Kurve nach rechts.', eq: null },
        { text: 'Damit fällt der kurzfristige Nachfrageschub unter Geldfinanzierung typischerweise stärker aus.', eq: null },
        { text: 'Mittelfristig schlägt dieser stärkere Nachfrageimpuls in höheren Inflationsdruck um.', eq: null },
      ],
      result: 'Die Monetisierung der Staatsschuld erzeugt den stärkeren Inflationsdruck, weil sie IS- und LM-Effekte kombiniert.'
    },
    {
      text: String.raw`<em>Quelle: Tutorienblatt 3, Aufgabe 2</em><br>Warum stößt eine Zentralbank ohne Devisenreserven bei einer unglaubwürdigen festen Parität schnell an Grenzen?`,
      steps: [
        { text: 'Verliert die Parität ihre Glaubwürdigkeit, erwarten Märkte eine Abwertung.', eq: null },
        { text: 'Zur Verteidigung des Wechselkurses muss die Zentralbank den Zins anheben und/oder Devisenreserven einsetzen.', eq: null },
        { text: 'Ohne Reserven bleibt im Wesentlichen nur die Zinserhöhung, was Output und Finanzstabilität belastet.', eq: null },
      ],
      result: 'Ohne Devisenreserven kann eine Zentralbank eine feste Parität nur über sehr hohe Zinsen verteidigen, was schnell destabilisiert.'
    },
  ],

  produktion: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 8, Aufgabe 1c-f</em><br>Gegeben sei die Produktionsfunktion $Y = K^{0{,}5}N^{0{,}5}$ mit $K = 21$ und $N = 7$. Berechne Gesamtproduktion, Kapitalintensität, Produktion pro Kopf und Produktion pro Kapitaleinheit.`,
      steps: [
        { text: 'Gesamtproduktion:', eq: String.raw`$$Y = 21^{0{,}5}\cdot 7^{0{,}5} = \sqrt{147} \approx 12{,}12$$` },
        { text: 'Kapitalintensität:', eq: String.raw`$$\frac{K}{N} = \frac{21}{7} = 3$$` },
        { text: 'Produktion pro Kopf:', eq: String.raw`$$\frac{Y}{N} = \frac{12{,}12}{7} \approx 1{,}73$$` },
        { text: 'Produktion pro Kapitaleinheit:', eq: String.raw`$$\frac{Y}{K} = \frac{12{,}12}{21} \approx 0{,}58$$` },
      ],
      result: String.raw`$Y \approx 12{,}12$, $K/N = 3$, $Y/N \approx 1{,}73$, $Y/K \approx 0{,}58$.`
    },
    {
      text: String.raw`<em>Quelle: Übungsblatt 8, Aufgabe 1d-e</em><br>Was passiert bei derselben Funktion $Y = K^{0{,}5}N^{0{,}5}$, wenn Kapital und Arbeit jeweils verdreifacht werden? Welche Art von Skalenerträgen liegt vor?`,
      steps: [
        { text: "Mit $K' = 3K$ und $N' = 3N$ gilt:", eq: String.raw`$$Y' = (3K)^{0{,}5}(3N)^{0{,}5} = 3^{0{,}5+0{,}5}K^{0{,}5}N^{0{,}5} = 3Y$$` },
        { text: 'Die Produktion steigt also im gleichen Verhältnis wie beide Inputs.', eq: null },
        { text: 'Das ist genau die Definition konstanter Skalenerträge.', eq: null },
      ],
      result: 'Die Produktion verdreifacht sich; die Funktion weist konstante Skalenerträge auf.'
    },
  ],

  solowBasis: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 9, Aufgabe 1d und Tutorienblatt 6, Aufgabe 1.3</em><br>Im Solow-Modell ohne technischen Fortschritt und ohne Bevölkerungswachstum steigt die Sparquote dauerhaft. Wie wirken sich diese Änderung auf Kapitalintensität, Produktion pro Kopf und die langfristige Wachstumsrate der Produktion pro Kopf aus?`,
      steps: [
        { text: 'Eine höhere Sparquote erhöht die Investitionen je Kopf und verschiebt die $sf(k)$-Kurve nach oben.', eq: null },
        { text: 'Dadurch steigt die langfristige Kapitalintensität $k^*$.', eq: null },
        { text: 'Mit höherem $k^*$ steigt auch die Produktion pro Kopf im neuen Steady State.', eq: null },
        { text: 'Die langfristige Wachstumsrate von $Y/N$ steigt aber nicht dauerhaft; sie ist ohne technischen Fortschritt im Steady State gleich null.', eq: null },
      ],
      result: 'Höhere Sparquote erhöht Niveau von Kapitalintensität und Produktion pro Kopf, aber nicht die dauerhafte Wachstumsrate pro Kopf.'
    },
    {
      text: String.raw`<em>Quelle: Tutorienblatt 6, Aufgabe 1.4 und Übungsblatt 9, Aufgabe 1e</em><br>Ist die Aussage richtig: „Eine dauerhafte Erhöhung der Sparquote führt langfristig immer zu höherem Konsum pro Kopf“? Begründe mit der Goldenen Regel.`,
      steps: [
        { text: 'Mehr Sparen erhöht zwar zunächst den Kapitalstock und die Produktion.', eq: null },
        { text: 'Langfristiger Konsum pro Kopf ist aber:', eq: String.raw`$$c^* = f(k^*) - \delta k^*$$` },
        { text: 'Ob $c^*$ steigt, hängt davon ab, ob die Wirtschaft unter oder über der Goldenen Regel spart.', eq: null },
        { text: 'Liegt die Sparquote bereits über der Goldenen Regel, kann mehr Sparen den langfristigen Konsum sogar senken.', eq: null },
      ],
      result: 'Die Aussage ist falsch. Ein höherer langfristiger Konsum pro Kopf ergibt sich nur bis zur Goldenen Regel, nicht darüber hinaus.'
    },
  ],

  solowTechnik: [
    {
      text: String.raw`<em>Quelle: Übungsblatt 10, Aufgabe 1a-c</em><br>Im Solow-Modell mit technischem Fortschritt gelte $Y = K^{0{,}4}(AN)^{0{,}6}$, $s=11\%$, $g_N=3\%$, $g_A=1\%$, $\delta=7\%$. Berechne Kapitalstock, Produktion und Konsum pro Arbeitseffizienzeinheit im Steady State.`,
      steps: [
        { text: 'Im Steady State pro Arbeitseffizienzeinheit gilt:', eq: String.raw`$$s\tilde{k}^{0{,}4} = (g_N + g_A + \delta)\tilde{k}$$` },
        { text: 'Da $g_N + g_A + \delta = 0{,}03 + 0{,}01 + 0{,}07 = 0{,}11$ und $s=0{,}11$, folgt:', eq: String.raw`$$\tilde{k}^* = \left(\frac{0{,}11}{0{,}11}\right)^{\frac{1}{1-0{,}4}} = 1$$` },
        { text: 'Produktion pro Arbeitseffizienzeinheit:', eq: String.raw`$$\tilde{y}^* = (\tilde{k}^*)^{0{,}4} = 1$$` },
        { text: 'Konsum pro Arbeitseffizienzeinheit:', eq: String.raw`$$\tilde{c}^* = (1-s)\tilde{y}^* = 0{,}89$$` },
      ],
      result: String.raw`$\tilde{k}^* = 1$, $\tilde{y}^* = 1$, $\tilde{c}^* = 0{,}89$.`
    },
    {
      text: String.raw`<em>Quelle: Übungsblatt 10, Aufgabe 1c-f</em><br>Bestimme in demselben Modell die Wachstumsrate des Konsums pro Kopf im Steady State und die Sparquote der Goldenen Regel.`,
      steps: [
        { text: 'Mit arbeitsvermehrendem technischem Fortschritt wächst der Konsum pro Kopf im Steady State mit der Rate des technischen Fortschritts.', eq: String.raw`$$g_{c/N} = g_A = 1\%$$` },
        { text: 'Für Cobb-Douglas gilt bei der Goldenen Regel:', eq: String.raw`$$s_{\text{gold}} = \alpha$$` },
        { text: 'Mit $\alpha = 0{,}4$ ergibt sich daher:', eq: String.raw`$$s_{\text{gold}} = 40\%$$` },
      ],
      result: 'Der Konsum pro Kopf wächst im Steady State mit 1% pro Jahr; die Goldene-Regel-Sparquote beträgt 40%.'
    },
  ],
};

export const COURSEWORK_TASKS = {
  wechselkurs: cloneTasks(PRACTICE_SETS.wechselkurs),
  kaufkraftparitaet: cloneTasks(PRACTICE_SETS.kaufkraftparitaet),
  zinsparitaet: cloneTasks(PRACTICE_SETS.zinsparitaet),
  zahlungsbilanz: cloneTasks(PRACTICE_SETS.zahlungsbilanz),
  offene_is: cloneTasks(PRACTICE_SETS.offeneVolkswirtschaft),
  nettoexporte: cloneTasks(PRACTICE_SETS.offeneVolkswirtschaft),
  marshall_lerner: cloneTasks(PRACTICE_SETS.marshallLerner),
  mundell_fleming: cloneTasks(PRACTICE_SETS.mundellFleming),
  zp_kurve: cloneTasks(PRACTICE_SETS.mundellFleming),
  wirtschaftspolitik_offen: cloneTasks(PRACTICE_SETS.mundellFleming),
  wk_regime: cloneTasks(PRACTICE_SETS.wechselkursregime),
  wk_krisen: cloneTasks(PRACTICE_SETS.wechselkursregime),
  opt_waehrungsraum: cloneTasks(PRACTICE_SETS.mundellFleming),
  eurozone: cloneTasks(PRACTICE_SETS.wechselkursregime),
  zeitinkonsistenz: cloneTasks(PRACTICE_SETS.zeitinkonsistenz),
  barro_gordon: cloneTasks(PRACTICE_SETS.zeitinkonsistenz),
  schuldenregeln: cloneTasks(PRACTICE_SETS.zeitinkonsistenz),
  budgetrestriktion: cloneTasks(PRACTICE_SETS.staatsverschuldung),
  schuldenquote: cloneTasks(PRACTICE_SETS.staatsverschuldung),
  ricardianisch: cloneTasks(PRACTICE_SETS.staatsverschuldung),
  taylor_regel: cloneTasks(PRACTICE_SETS.geldpolitik),
  inflation_targeting: cloneTasks(PRACTICE_SETS.geldpolitik),
  inflation_kosten: cloneTasks(PRACTICE_SETS.geldpolitik),
  unkonv_geldpolitik: cloneTasks(PRACTICE_SETS.geldmenge),
  geldmengen: cloneTasks(PRACTICE_SETS.geldmenge),
  wachstum_fakten: cloneTasks(PRACTICE_SETS.produktion),
  aggregierte_pf: cloneTasks(PRACTICE_SETS.produktion),
  solow_basis: cloneTasks(PRACTICE_SETS.solowBasis),
  steady_state: cloneTasks(PRACTICE_SETS.solowBasis),
  goldene_sparquote: cloneTasks(PRACTICE_SETS.solowBasis),
  tech_fortschritt: cloneTasks(PRACTICE_SETS.solowTechnik),
  solow_residuum: cloneTasks(PRACTICE_SETS.solowTechnik),
  institutionen: cloneTasks(PRACTICE_SETS.solowTechnik),
  phillipskurve: cloneTasks(PRACTICE_SETS.zeitinkonsistenz),
};
