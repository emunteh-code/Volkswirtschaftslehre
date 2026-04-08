// ============================================================
// FULL EXAMS DATA — Mikroökonomik I
// Benchmark-aligned mock exams integrated into the main module
// ============================================================

export const FULL_EXAMS = {
  probeklausur_1: {
    id: 'probeklausur_1',
    title: 'Probeklausur Mikroökonomik I',
    subtitle: 'Kursnahe 90-Minuten-Klausur mit Musterlösungen',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 40,
        type: 'wf-block',
        preamble: String.raw`Lesen Sie die folgenden Aussagen und kreuzen Sie an, ob diese wahr oder falsch sind. Für ein richtiges Kreuz erhalten Sie 2 Punkte.`,
        groups: [
          {
            context: String.raw`Ein Haushalt verfügt über das Einkommen $m > 0$ und kann die Güter 1 und 2 kaufen. Der Preis des Gutes 1 ist $p_1 = 5$ und der Preis des Gutes 2 ist $p_2 > 0$.`,
            conceptId: 'budget',
            questions: [
              { id: '1_1', text: String.raw`Für $m = 10$ kann sich der Haushalt maximal zwei Einheiten von Gut 1 kaufen.`, correct: 'Wahr', feedback: String.raw`$x_1^{\max} = m/p_1 = 10/5 = 2$. Der Haushalt kann genau zwei Einheiten von Gut 1 kaufen.` },
              { id: '1_2', text: String.raw`Sinkt der Preis des ersten Gutes auf $p_1 = 4$, vergrößert sich die Budgetmenge des Haushalts.`, correct: 'Wahr', feedback: String.raw`Bei sinkendem $p_1$ wird Gut 1 relativ billiger. Die Budgetgerade dreht sich nach außen, die Budgetmenge wird größer.` },
              { id: '1_3', text: String.raw`Der Relativpreis $\frac{5}{p_2}$ gibt an, wie viele Einheiten von Gut 1 der Haushalt mehr konsumieren kann, wenn er eine Einheit des zweiten Gutes weniger kauft.`, correct: 'Falsch', feedback: String.raw`$p_1/p_2$ misst, wie viele Einheiten von Gut 2 für eine zusätzliche Einheit von Gut 1 aufgegeben werden müssen. Umgekehrt wäre $p_2/p_1$ relevant.` }
            ]
          },
          {
            context: String.raw`Gegeben ist eine vollständige, reflexive, transitive, streng konvexe und streng monotone Präferenzrelation $\succeq$. Ferner seien $x=(3,8)$, $y=(4,6)$ und $z=(12,2)$ mit $x \sim y$ und $x \sim z$ gegeben.`,
            conceptId: 'praeferenz',
            questions: [
              { id: '1_4', text: String.raw`Es gilt $z \sim (3,6)$.`, correct: 'Falsch', feedback: String.raw`$(3,6)$ hat von beiden Gütern weniger als $x=(3,8)$. Wegen strenger Monotonie gilt $x \succ (3,6)$. Mit $x \sim z$ folgt also $z \succ (3,6)$.` },
              { id: '1_5', text: String.raw`Es gilt $x \sim (6,5)$.`, correct: 'Falsch', feedback: String.raw`Aus $x \sim y$ und strenger Konvexität folgt, dass innere Konvexkombinationen von $x$ und $y$ strikt bevorzugt werden. $(6,5)$ ist kein automatisch indifferentes Bündel.` },
              { id: '1_6', text: String.raw`Für alle $0 < t < 1$ gilt $(t \cdot 3 + (1-t)\cdot 4,\; t \cdot 8 + (1-t)\cdot 6) \sim z$.`, correct: 'Falsch', feedback: String.raw`Konvexkombinationen von zwei indifferenten Bündeln werden bei strenger Konvexität strikt bevorzugt. Also gilt $t x + (1-t)y \succ x \sim z$.` }
            ]
          },
          {
            context: String.raw`Ein Haushalt hat die Nutzenfunktion $u(x_1, x_2) = 2x_1 + x_2$.`,
            conceptId: 'psubst',
            questions: [
              { id: '1_7', text: 'Für den Haushalt stellen die beiden Güter perfekte Substitute dar.', correct: 'Wahr', feedback: String.raw`Die Nutzenfunktion ist linear. Die Indifferenzkurven sind Geraden; das ist der Standardfall perfekter Substitute.` },
              { id: '1_8', text: 'Im Optimum muss die Grenzrate der Substitution immer gleich dem Preisverhältnis sein.', correct: 'Falsch', feedback: String.raw`Bei perfekten Substituten liegen typischerweise Ecklösungen vor. Die Tangentialbedingung ist nur im Sonderfall identischer relativer Bewertungen relevant.` }
            ]
          },
          {
            context: 'Für die folgenden Teilaufgaben gelten keine zusätzlichen Vorgaben.',
            questions: [
              { id: '1_9', text: 'Die Grenzrate der Substitution ist ein Maß für die relative Wertschätzung zweier Güter durch einen Haushalt.', correct: 'Wahr', feedback: String.raw`Die GRS $= MU_1/MU_2$ misst die marginale Zahlungsbereitschaft in Gut 2 für eine zusätzliche Einheit von Gut 1.` },
              { id: '1_10', text: 'Eine Verdopplung aller Konsummengen hat in jedem Fall zur Folge, dass sich das Nutzenniveau eines Haushalts verdoppelt.', correct: 'Falsch', feedback: 'Nutzen ist ordinal. Nur bei speziellen Funktionen verdoppelt sich der numerische Nutzenwert.' },
              { id: '1_11', text: 'Die Marshallsche Nachfragekurve nach einem Gut muss zwingend negativ geneigt sein.', correct: 'Falsch', feedback: 'Giffen-Güter sind die klassische Ausnahme: Dort kann die Marshallsche Nachfrage positiv geneigt sein.' },
              { id: '1_12', text: 'Eine negative Kreuzpreiselastizität bedeutet, dass die beiden Güter Substitute sind.', correct: 'Falsch', feedback: 'Eine negative Kreuzpreiselastizität zeigt Komplementarität, nicht Substitution.' },
              { id: '1_13', text: 'Mit Shephards Lemma lässt sich die Hickssche Nachfrage durch Ableitung der Ausgabenfunktion ermitteln.', correct: 'Wahr', feedback: String.raw`Shephards Lemma lautet $h_i(p,\bar{u}) = \partial e(p,\bar{u})/\partial p_i$.` },
              { id: '1_14', text: 'Die kompensierende Variation gibt bei einer Preissenkung an, welchen Geldbetrag ein Haushalt maximal abgeben könnte, um zu den neuen Preisen sein altes Nutzenniveau zu halten.', correct: 'Wahr', feedback: String.raw`Bei einer Preissenkung gilt $CV = e(p^0,u^0) - e(p^1,u^0) > 0$.` },
              { id: '1_15', text: 'Bei Gewinnmaximierung unter vollkommener Konkurrenz wählen Unternehmen den Faktoreinsatz so, dass das Wertgrenzprodukt jedes Faktors dem Faktorpreis entspricht.', correct: 'Wahr', feedback: String.raw`Die Bedingung lautet $p \cdot MP_i = w_i$ bzw. $p \cdot F_L = w$, $p \cdot F_K = r$.` },
              { id: '1_16', text: 'Wenn die Produktionstechnologie abnehmende Skalenerträge aufweist, ist die partielle Produktionselastizität jedes Faktors kleiner als eins.', correct: 'Falsch', feedback: 'Abnehmende Skalenerträge bedeuten, dass die Summe der Elastizitäten kleiner als 1 ist. Einzelne Elastizitäten können dennoch größer als 1 sein.' },
              { id: '1_17', text: 'Die unbedingten Faktornachfragen lassen sich durch Ableitung der Kostenfunktion nach dem jeweiligen Faktorpreis bestimmen.', correct: 'Falsch', feedback: 'Die Ableitung der Kostenfunktion liefert die bedingte Faktornachfrage. Unbedingte Faktornachfragen folgen aus Gewinnmaximierung.' },
              { id: '1_18', text: 'Ein gewinnmaximierendes Monopolunternehmen wählt immer eine Preis-Mengen-Kombination im unelastischen Teil der Nachfragekurve.', correct: 'Falsch', feedback: String.raw`Im unelastischen Teil wäre $MR < 0$. Der Monopolist produziert im elastischen Bereich der Nachfrage.` },
              { id: '1_19', text: String.raw`Ein Unternehmen produziert mit $C(y) = y^2 + y + 16$. Bei einer Outputmenge von 4 sind die Durchschnittskosten minimal.`, correct: 'Wahr', feedback: String.raw`$AC(y)=y+1+16/y$. Aus $AC'(y)=1-16/y^2=0$ folgt $y=4$. In diesem Punkt gilt auch $MC=AC$.` },
              { id: '1_20', text: String.raw`Ein Monopolist mit $MC(y)=\alpha y$ und $\alpha>0$ sieht sich linearer Nachfrage gegenüber. Steigt $\alpha$, bietet er weniger an.`, correct: 'Wahr', feedback: 'Ein Anstieg von α verschiebt die Grenzkosten nach oben. Der Schnittpunkt mit dem Grenzerlös wandert nach links, also sinkt die optimale Menge.' }
            ]
          }
        ]
      },
      {
        label: 'Aufgabe 2',
        conceptId: 'hicks',
        points: 10,
        type: 'text-block',
        title: 'Haushaltstheorie',
        preamble: String.raw`Maximiliane frühstückt gerne Pfannkuchen ($x_1$) mit Ahornsirup ($x_2$). Die Nutzenfunktion lautet $U(x_1,x_2) = 8x_1^{0{,}4}x_2^{0{,}6}$.`,
        questions: [
          {
            id: '2a',
            points: 6,
            type: 'text',
            text: String.raw`Aufgrund eines Überangebots von Mehl sinkt der Preis von Pfannkuchen auf $p_1' < p_1$. Stellen Sie die Auswirkungen dieser Preissenkung für Maximiliane anhand der Hicks-Zerlegung grafisch dar und kennzeichnen Sie Substitutions-, Einkommens- und Gesamteffekt für Gut $x_2$.<br><br><canvas id="canvas_hicks" width="480" height="380" style="display:block;border:1px solid var(--border);border-radius:8px;margin:12px 0;background:var(--card);max-width:100%"></canvas>`,
            correct: ['substitutionseffekt', 'einkommenseffekt', 'gesamteffekt', 'hicks', 'se', 'ee', 'ge'],
            feedback: String.raw`Bei einer Preissenkung von $p_1$ auf $p_1'$ verläuft die Hicks-Zerlegung in drei Schritten: Erstens der Substitutionseffekt entlang der alten Indifferenzkurve $u^0$ bei neuer relativer Preisrelation. Zweitens der Einkommenseffekt von der kompensierten zur neuen Budgetlage. Drittens der Gesamteffekt als Summe aus beiden. Für Gut $x_2$ ist der Substitutionseffekt negativ, der Einkommenseffekt bei normalen Gütern positiv.` },
          {
            id: '2b',
            points: 2,
            type: 'text',
            text: String.raw`Berechnen Sie den Betrag der Grenzrate der Substitution $\left|\frac{dx_2}{dx_1}\right|$.`,
            correct: ['2x_2/(3x_1)', 'x_2/(1.5x_1)', 'grs'],
            feedback: String.raw`$MU_1 = 3{,}2\,x_1^{-0{,}6}x_2^{0{,}6}$ und $MU_2 = 4{,}8\,x_1^{0{,}4}x_2^{-0{,}4}$. Daher gilt $\left|GRS\right| = MU_1/MU_2 = \frac{2x_2}{3x_1}$.`
          },
          {
            id: '2c',
            points: 2,
            type: 'text',
            text: String.raw`Ermitteln Sie die Einkommenselastizität der Nachfrage nach Gut 2.`,
            correct: ['1', 'eins'],
            feedback: String.raw`Bei Cobb-Douglas gilt $x_2^* = \frac{0{,}6m}{p_2}$. Daraus folgt unmittelbar $\varepsilon_{x_2,m} = 1$.`
          }
        ]
      },
      {
        label: 'Aufgabe 3',
        conceptId: 'kosten',
        points: 10,
        type: 'text-block',
        title: 'Unternehmenstheorie',
        preamble: String.raw`Hanne produziert Orangensaft. Die Kostenfunktion lautet $C(y) = 5y^3 - 20y^2 + 130y + 20$, wobei $y$ die Zahl der Flaschen und $C(y)$ die Gesamtkosten in € bezeichnet.`,
        questions: [
          {
            id: '3a',
            points: 6,
            type: 'text',
            text: 'Geben Sie Grenzkosten, durchschnittliche Kosten und durchschnittliche variable Kosten an und berechnen Sie diese für die gegebene Kostenfunktion.',
            correct: ['15y^2 - 40y + 130', 'mc', 'ac', 'avc', '5y^2 - 20y + 130'],
            feedback: String.raw`Fixkosten: $FC=20$. Variable Kosten: $VC(y)=5y^3-20y^2+130y$. Grenzkosten: $MC(y)=15y^2-40y+130$. Durchschnittliche variable Kosten: $AVC(y)=5y^2-20y+130$. Durchschnittliche Gesamtkosten: $AC(y)=5y^2-20y+130+\frac{20}{y}$.`
          },
          {
            id: '3b',
            points: 2,
            type: 'text',
            text: String.raw`Berechnen Sie das Minimum der durchschnittlichen variablen Kosten und zeigen Sie, dass dort Grenzkosten und $AVC$ übereinstimmen.`,
            correct: ['y=2', '2', '110', 'mc = avc'],
            feedback: String.raw`$AVC'(y)=10y-20=0$ liefert $y^*=2$. Dann gilt $AVC(2)=110$ und zugleich $MC(2)=110$. Genau im Minimum der $AVC$ schneiden sich $AVC$ und $MC$.`
          },
          {
            id: '3c',
            points: 2,
            type: 'text',
            text: 'Wie hoch muss der Marktpreis pro Flasche mindestens sein, damit Hanne kurzfristig produziert?',
            correct: ['110', 'p >= 110', 'p ≥ 110'],
            feedback: String.raw`Kurzfristig produziert das Unternehmen genau dann, wenn der Preis mindestens die minimalen durchschnittlichen variablen Kosten deckt. Hier ist also $p \ge 110$.`
          }
        ]
      },
      {
        label: 'Aufgabe 4',
        conceptId: 'markt',
        points: 10,
        type: 'text-block',
        title: 'Marktgleichgewicht',
        preamble: String.raw`Es gibt drei Konsumententypen mit Nachfragefunktionen $x_1(p)=20-\frac{1}{4}p$, $x_2(p)=60-\frac{1}{2}p$ und $x_3(p)=100-p$.`,
        questions: [
          {
            id: '4a',
            points: 2,
            type: 'text',
            text: 'Berechnen Sie die Marktnachfrage nach Gut x.',
            correct: ['180 - 7p/4', '180-7p/4', '180 - 1.75p'],
            feedback: String.raw`Die horizontale Aggregation ergibt $X(p)=x_1(p)+x_2(p)+x_3(p)=180-\frac{7}{4}p$.`
          },
          {
            id: '4b',
            points: 2,
            type: 'text',
            text: String.raw`Bestimmen Sie die inverse Marktnachfrage $p(x_N)$.`,
            correct: ['720/7', '4/7(180-x)', '102.86', '0.571'],
            feedback: String.raw`Aus $X=180-\frac{7}{4}p$ folgt $p=\frac{4}{7}(180-X)=\frac{720}{7}-\frac{4}{7}X$.`
          },
          {
            id: '4c',
            points: 2,
            type: 'text',
            text: String.raw`Nehmen Sie nun an, die inverse Nachfrage sei $p = 100 - \frac{1}{2}x_N$. Bestimmen Sie die Preiselastizität der Nachfrage.`,
            correct: ['-p/(100-p)', 'epsilon', 'elastizität'],
            feedback: String.raw`Die direkte Nachfrage lautet $x = 200 - 2p$. Dann ist $\varepsilon_{x,p} = \frac{dx}{dp}\cdot\frac{p}{x} = (-2)\cdot\frac{p}{200-2p} = -\frac{p}{100-p}$.`
          },
          {
            id: '4d',
            points: 1,
            type: 'text',
            text: String.raw`Zeichnen Sie die Marktnachfragefunktion aus c) in das Koordinatensystem ein.<br><br><canvas id="canvas_demand" width="420" height="320" style="display:block;border:1px solid var(--border);border-radius:8px;margin:12px 0;background:var(--card);max-width:100%"></canvas>`,
            correct: ['fallend', 'linear', 'gerade', '100', '200'],
            feedback: String.raw`Die inverse Nachfrage $p = 100 - \frac{1}{2}x_N$ ist eine fallende Gerade mit $p$-Achsenabschnitt 100 und $x$-Achsenabschnitt 200.`
          },
          {
            id: '4e',
            points: 3,
            type: 'text',
            text: String.raw`Fügen Sie die Angebotsfunktion $S(p)=\frac{1}{2}p$ hinzu. Berechnen Sie Gleichgewichtspreis und Gleichgewichtsmenge und markieren Sie außerdem die Konsumentenrente.`,
            correct: ['80', '40', '400', 'gleichgewicht', 'konsumentenrente'],
            feedback: String.raw`Mit $S(p)=\frac{1}{2}p$ und $X(p)=200-2p$ folgt $\frac{1}{2}p = 200-2p \Rightarrow p^*=80$ und $x^*=40$. Die Konsumentenrente beträgt $\frac{1}{2}(100-80)\cdot 40 = 400$.`
          }
        ]
      },
      {
        label: 'Aufgabe 5',
        conceptId: 'cobbd',
        points: 10,
        type: 'text-block',
        title: 'Haushaltstheorie',
        preamble: String.raw`Gegeben sei die Nutzenfunktion $U = x_1^{\frac{1}{3}}x_2^{\frac{2}{3}}$.`,
        questions: [
          {
            id: '5a',
            points: 6,
            type: 'text',
            text: 'Leiten Sie die Marshallsche Nachfragefunktion für beide Güter mit dem Lagrange-Ansatz her.',
            correct: ['m/(3p_1)', '2m/(3p_2)', 'lagrange', '1/3', '2/3'],
            feedback: String.raw`Mit $\mathcal{L} = x_1^{1/3}x_2^{2/3} - \lambda(p_1x_1 + p_2x_2 - m)$ erhält man aus den FOCs das Verhältnis $x_2 = \frac{2p_1}{p_2}x_1$. In die Budgetrestriktion eingesetzt ergibt das $x_1^* = \frac{m}{3p_1}$ und $x_2^* = \frac{2m}{3p_2}$.`
          },
          {
            id: '5b',
            points: 2,
            type: 'text',
            text: 'Berechnen Sie den Betrag der Grenzrate der Substitution.',
            correct: ['x_2/(2x_1)', 'grs'],
            feedback: String.raw`Aus $MU_1 = \frac{1}{3}x_1^{-2/3}x_2^{2/3}$ und $MU_2 = \frac{2}{3}x_1^{1/3}x_2^{-1/3}$ folgt $|GRS| = \frac{MU_1}{MU_2} = \frac{x_2}{2x_1}$.`
          },
          {
            id: '5c',
            points: 2,
            type: 'text',
            text: 'Ermitteln Sie die Einkommenselastizität der Nachfrage nach Gut 2.',
            correct: ['1', 'eins'],
            feedback: String.raw`Da $x_2^* = \frac{2m}{3p_2}$ linear in $m$ ist, gilt unmittelbar $\varepsilon_{x_2,m}=1$.`
          }
        ]
      },
      {
        label: 'Aufgabe 6',
        conceptId: 'produktion',
        points: 10,
        type: 'text-block',
        title: 'Unternehmenstheorie',
        preamble: String.raw`Ein Unternehmen produziert nach $y = f(x_1,x_2) = (x_1^{1/3}+x_2^{1/3})^3$. Die Faktorpreise seien $w_1>0$ und $w_2>0$.`,
        questions: [
          {
            id: '6a',
            points: 2,
            type: 'text',
            text: 'Zeigen Sie, dass die Produktionsfunktion konstante Skalenerträge aufweist.',
            correct: ['grad 1', 'konstante skalenerträge', 'homogen'],
            feedback: String.raw`$f(\lambda x_1,\lambda x_2) = ((\lambda x_1)^{1/3}+(\lambda x_2)^{1/3})^3 = \lambda(x_1^{1/3}+x_2^{1/3})^3 = \lambda f(x_1,x_2)$. Also ist die Funktion homogen vom Grad 1.` },
          {
            id: '6b',
            points: 2,
            type: 'text',
            text: 'Zeigen Sie, dass die Grenzproduktivität beider Inputs mit steigender Menge des jeweiligen Inputs abnimmt.',
            correct: ['grenzprodukt', 'abnehm', 'zweite ableitung', 'mp'],
            feedback: String.raw`Beispielsweise gilt $MP_1 = \partial f/\partial x_1 = x_1^{-2/3}(x_1^{1/3}+x_2^{1/3})^2$. Die Ableitung von $MP_1$ nach $x_1$ ist negativ, also sinkt das Grenzprodukt mit steigendem $x_1$. Analog für $x_2$.` },
          {
            id: '6c',
            points: 2,
            type: 'text',
            text: 'Berechnen Sie den Betrag der technischen Rate der Substitution im Kostenminimum.',
            correct: ['w_1/w_2', 'w1/w2', 'trs', 'grts'],
            feedback: String.raw`Im Kostenminimum gilt $\left|TRS\right| = MP_1/MP_2 = w_1/w_2$. Die technische Austauschrate muss dem Faktorpreisverhältnis entsprechen.` },
          {
            id: '6d',
            points: 2,
            type: 'text',
            text: String.raw`Ermitteln Sie die bedingte Nachfrage nach dem ersten Produktionsfaktor in Abhängigkeit von $y$.<br><br><canvas id="canvas_isoquant" width="420" height="340" style="display:block;border:1px solid var(--border);border-radius:8px;margin:12px 0;background:var(--card);max-width:100%"></canvas>`,
            correct: ['x_1', 'bedingt', 'w_2^{3/2}', 'w_1^{1/2}+w_2^{1/2}'],
            feedback: String.raw`Aus $\left(\frac{x_2}{x_1}\right)^{2/3}=w_1/w_2$ folgt $x_2 = x_1(w_1/w_2)^{3/2}$. In die Produktionsfunktion eingesetzt ergibt sich $x_1^*(y,w_1,w_2)=y\cdot\frac{w_2^{3/2}}{(w_1^{1/2}+w_2^{1/2})^3}$.`
          },
          {
            id: '6e',
            points: 2,
            type: 'text',
            text: String.raw`Zeichnen Sie die minimale Isokostengerade für $\bar{y}=27$, $w_1=1$ und $w_2=4$ ein und markieren Sie den kostenminimierenden Punkt.`,
            correct: ['24', '3', '36', 'kostenminimum', 'isokoste'],
            feedback: String.raw`Bei $w_1=1$ und $w_2=4$ gilt im Kostenminimum $x_2/x_1 = (1/4)^{3/2} = 1/8$. Zusammen mit $\bar{y}=27$ ergibt sich $x_1^*=24$, $x_2^*=3$ und damit $C = 24 + 12 = 36$.`
          }
        ]
      }
    ]
  },
  transferklausur_kompakt: {
    id: 'transferklausur_kompakt',
    title: 'Transferklausur Mikroökonomik I',
    subtitle: 'Kompakte 60-Minuten-Diagnose für Slutsky und Ecklösungen',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        conceptId: 'slutsky',
        points: 30,
        type: 'text-block',
        title: 'Slutsky-Zerlegung',
        preamble: String.raw`Nutzenfunktion $u = x_1x_2$, $p_1^{alt}=4$, $p_1^{neu}=1$, $p_2=1$, $m=40$.`,
        questions: [
          {
            id: 'ta_1',
            points: 10,
            type: 'text',
            text: 'Welches Vorzeichen hat der Substitutionseffekt für Gut 1 bei dieser Preissenkung?',
            correct: ['positiv', 'se > 0', 'steigt'],
            feedback: 'Wird Gut 1 billiger, ist der reine Substitutionseffekt für Gut 1 positiv.'
          },
          {
            id: 'ta_2',
            points: 10,
            type: 'text',
            text: String.raw`Berechnen Sie den Substitutionseffekt $\Delta x_1^s$.`,
            correct: ['7.5', '7,5'],
            feedback: String.raw`Für diese Parametrisierung beträgt der kompensierte Nachfragesprung $\Delta x_1^s = 7{,}5$.`
          },
          {
            id: 'ta_3',
            points: 10,
            type: 'text',
            text: 'Ist ein berechneter Substitutionseffekt von -7,5 theoretisch plausibel?',
            correct: ['nein', 'falsch'],
            feedback: 'Nein. Für ein billiger gewordenes Gut kann der reine Substitutionseffekt nicht negativ sein.'
          }
        ]
      },
      {
        label: 'Block B',
        conceptId: 'hausopt',
        points: 30,
        type: 'text-block',
        title: 'Eckoptimum & Randbedingungen',
        preamble: String.raw`Nutzenfunktion $u=(x_1+2)x_2$, Preise $p_1=10$, $p_2=1$, Einkommen $m=10$.`,
        questions: [
          {
            id: 'tb_1',
            points: 15,
            type: 'text',
            text: 'Welcher Lösungstyp liegt vor: Innenlösung oder Randlösung?',
            correct: ['randlösung', 'ecklösung', 'corner'],
            feedback: 'Die Tangentiallösung würde auf ein negatives x₁ führen. Daher liegt eine Randlösung vor.'
          },
          {
            id: 'tb_2',
            points: 15,
            type: 'text',
            text: String.raw`Bestimmen Sie das optimale $x_1^*$.`,
            correct: ['0'],
            feedback: String.raw`Die gesamte Kaufkraft wird in Gut 2 gelenkt. Daher gilt $x_1^* = 0$.`
          }
        ]
      }
    ]
  }
};
