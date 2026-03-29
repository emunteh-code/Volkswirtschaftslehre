// ============================================================
// FULL EXAMS DATA — Mikroökonomik I
// Complete practice exam with W/F and open-ended questions
// ============================================================

export const FULL_EXAMS = {
probe_2024: {
  id: 'probe_2024',
  title: 'Probeklausur Mikroökonomik I',
  subtitle: 'Prof. Marcela Ibanez, Georg-August-Universität Göttingen',
  duration: 90,
  aufgaben: [
    {
      label: 'Aufgabe 1', points: 40, type: 'wf-block',
      preamble: String.raw`Lesen Sie die folgenden Aussagen und kreuzen Sie an, ob diese wahr oder falsch sind. Für ein richtiges Kreuz erhalten Sie 2 Punkte.`,
      groups: [
        { context: String.raw`Ein Haushalt verfügt über das Einkommen $m > 0$ und kann die Güter 1 und 2 kaufen. Der Preis des Gutes 1 ist $p_1 = 5$ und der Preis des Gutes 2 ist $p_2 > 0$.`,
          questions: [
            { id:'1_1', text: String.raw`Für $m = 10$ kann sich der Haushalt maximal zwei Einheiten von Gut 1 kaufen.`, correct:'Wahr', feedback: String.raw`$x_1^{\max} = m/p_1 = 10/5 = 2$. Der Haushalt kann genau (maximal) 2 Einheiten kaufen.` },
            { id:'1_2', text: String.raw`Sinkt der Preis des ersten Gutes auf $p_1 = 4$, vergrößert sich die Konsummenge des Haushalts.`, correct:'Wahr', feedback: String.raw`Die Budgetmenge (Konsummenge) wird bei sinkendem $p_1$ größer, da sich der Haushalt mehr leisten kann.` },
            { id:'1_3', text: String.raw`Der Relativpreis $\frac{5}{p_2}$ gibt an, wie viele Einheiten des Gutes 1 der Haushalt mehr konsumieren kann, wenn er eine Einheit des zweiten Gutes weniger kauft.`, correct:'Falsch', feedback: String.raw`$p_1/p_2 = 5/p_2$ gibt an, wie viele Einheiten von Gut 2 man aufgeben muss für eine Einheit Gut 1. Umgekehrt: $p_2/p_1$ wäre die Menge Gut 1 pro aufgegebener Einheit Gut 2.` },
          ]},
        { context: String.raw`Gegeben ist eine vollständige, reflexive, transitive, streng konvexe und streng monotone Präferenzrelation $\succeq$. Ferner sind $x=(3,8)$, $y=(4,6)$, $z=(12,2)$ gegeben und es gilt $x \sim y$ und $x \sim z$.`,
          questions: [
            { id:'1_4', text: String.raw`Es gilt $z \sim (3,6)$.`, correct:'Falsch', feedback: String.raw`$(3,6)$ hat weniger von beiden Gütern als $x=(3,8)$. Per strenger Monotonie: $x \succ (3,6)$. Da $x \sim z$, folgt $z \succ (3,6)$.` },
            { id:'1_5', text: String.raw`Es gilt $x \sim (6,5)$.`, correct:'Falsch', feedback: String.raw`$(6,5)$ liegt oberhalb der Konvexkombination typischer IK-Punkte. Per strenger Konvexität und Monotonie lässt sich $x \sim (6,5)$ nicht bestätigen.` },
            { id:'1_6', text: String.raw`Es gilt $(t \cdot 3 + (1-t) \cdot 4,\; t \cdot 8 + (1-t) \cdot 6) \sim z$ für alle $0 < t < 1$.`, correct:'Falsch', feedback: String.raw`Konvexkombination von $x$ und $y$ (die indifferent sind) wird bei strenger Konvexität strikt bevorzugt: $tx+(1-t)y \succ x \sim z$.` },
          ]},
        { context: String.raw`Ein Haushalt hat die Nutzenfunktion $u(x_1, x_2) = 2x_1 + x_2$.`,
          questions: [
            { id:'1_7', text: 'Für den Haushalt stellen die beiden Güter Perfekte Substitute dar.', correct:'Wahr', feedback: String.raw`$u = 2x_1 + x_2$ ist linear; Indifferenzkurven sind Geraden. Standardform perfekter Substitute.` },
            { id:'1_8', text: 'Im Optimum muss die Grenzrate der Substitution immer gleich dem negativen Preisverhältnis sein.', correct:'Falsch', feedback: String.raw`Bei perfekten Substituten gibt es typischerweise Randlösungen. Nur wenn $p_1/p_2 = 2$ gilt Tangentiallösung.` },
          ]},
        { context: 'Für die folgenden Teilaufgaben gelten keine Vorgaben.',
          questions: [
            { id:'1_9', text: 'Die Grenzrate der Substitution ist ein Maß für die relative Wertschätzung zweier Güter durch einen Haushalt.', correct:'Wahr', feedback: String.raw`Die GRS $= MU_1/MU_2$ misst die marginale Zahlungsbereitschaft in Gut 2 für eine Einheit Gut 1.` },
            { id:'1_10', text: 'Eine Verdopplung aller Konsummengen hat in jedem Fall zur Folge, dass sich das Nutzenniveau eines Haushalts verdoppelt.', correct:'Falsch', feedback: 'Nutzen ist ordinal. Nur bei speziellen Funktionen verdoppelt sich der Nutzenwert.' },
            { id:'1_11', text: 'Die Marshallsche Nachfragekurve nach einem Gut muss zwingend eine negative Steigung aufweisen.', correct:'Falsch', feedback: 'Giffen-Güter haben eine positiv geneigte Marshallsche Nachfragekurve.' },
            { id:'1_12', text: 'Eine negative Kreuzpreiselastizität bedeutet, dass die beiden betreffenden Güter Substitute sind.', correct:'Falsch', feedback: 'Negative Kreuzpreiselastizität bedeutet Komplemente, nicht Substitute.' },
            { id:'1_13', text: 'Mithilfe von Shephards Lemma lässt sich die Hickssche Nachfragefunktion durch Ableitung aus der Ausgabenfunktion ermitteln.', correct:'Wahr', feedback: String.raw`Shephards Lemma: $h_i(p, \bar{u}) = \partial e(p, \bar{u})/\partial p_i$.` },
            { id:'1_14', text: 'Die kompensierende Variation gibt für eine Preissenkung an, welchen Geldbetrag ein Haushalt maximal abgeben könnte, um zu den neuen Preisen sein altes Nutzenniveau zu halten.', correct:'Wahr', feedback: String.raw`$CV = e(p^0, u^0) - e(p^1, u^0)$. Bei Preissenkung ist $CV > 0$.` },
            { id:'1_15', text: 'Bei Gewinnmaximierung unter vollkommener Konkurrenz wählen Unternehmen den Faktoreinsatz so, dass das Wertgrenzprodukt jedes Faktors dem Faktorpreis entspricht.', correct:'Wahr', feedback: String.raw`FOC: $p \cdot MP_i = w_i$.` },
            { id:'1_16', text: 'Wenn die Produktionstechnologie abnehmende Skalenerträge aufweist, ist die partielle Produktionselastizität eines jeden Produktionsfaktors kleiner als eins.', correct:'Falsch', feedback: 'Summe der Exponenten < 1, aber einzelne können > 1 sein.' },
            { id:'1_17', text: 'Die unbedingten Faktornachfragen lassen sich ermitteln durch Ableitung der Kostenfunktion nach dem jeweiligen Faktorpreis.', correct:'Falsch', feedback: 'Ableitung der Kostenfunktion ergibt die bedingte Faktornachfrage (Shephards Lemma).' },
            { id:'1_18', text: 'Ein gewinnmaximierendes Monopolunternehmen wird immer eine Preis-Mengen-Kombination wählen, die im unelastischen Teil der Nachfragekurve liegt.', correct:'Falsch', feedback: String.raw`Im unelastischen Bereich ist $MR < 0$. Der Monopolist produziert im elastischen Bereich.` },
            { id:'1_19', text: String.raw`Ein Unternehmen produziert mit $C(y) = y^2 + y + 16$. Bei einer Outputmenge von 4 sind die Durchschnittskosten minimal.`, correct:'Wahr', feedback: String.raw`$AC = y+1+16/y$. $AC'=1-16/y^2=0 \implies y=4$. $AC(4)=9=MC(4)$.` },
            { id:'1_20', text: String.raw`Ein Monopolist mit $MC(y) = \alpha y$ ($\alpha>0$) sieht sich linearer Nachfrage gegenüber. Steigt $\alpha$, bietet er weniger an.`, correct:'Wahr', feedback: 'Höheres $\\alpha$ dreht MC nach oben; Schnittpunkt mit MR verschiebt sich nach links.' },
          ]},
      ]
    },
    {
      label: 'Aufgabe 2', points: 10, type: 'text-block', title: 'Haushaltstheorie',
      preamble: String.raw`Maximiliane frühstückt morgens gerne Pfannkuchen ($x_1$) mit Ahornsirup ($x_2$). Der Preis von Pfannkuchen ist $p_1$ und der Preis des Ahornsirups durch $p_2$ angegeben. Maximilianes Nutzenfunktion lautet: $U(x_1, x_2) = 8x_1^{0{,}4}x_2^{0{,}6}$`,
      questions: [
        { id:'2a', points:6, type:'text',
          text: String.raw`Aufgrund eines Überangebots von Mehl auf dem Weltmarkt fällt der Preis für Pfannkuchen auf $p_1'$. Stellen Sie die Auswirkungen dieser Preissenkung für Maximiliane anhand der Hicks-Zerlegung graphisch dar (unter der Annahme, dass $x_1$ und $x_2$ normale Güter sind). Kennzeichnen Sie Substitutions-, Einkommens- und Gesamteffekt der Preissenkung für Gut $x_2$. (6 Punkte)<br><br><canvas id="canvas_hicks" width="480" height="380" style="display:block;border:1px solid var(--border);border-radius:8px;margin:12px 0;background:var(--card);max-width:100%"></canvas><script>setTimeout(()=>window.__drawHicksGraph&&window.__drawHicksGraph(),300)<\/script>`,
          correct:['substitutionseffekt','einkommenseffekt','hicks','normale','kompensiert','gesamteffekt','se','ee','ge'], feedback: String.raw`Hicks-Zerlegung bei Preissenkung von $p_1$ auf $p_1' < p_1$: (1) Substitutionseffekt (SE): Bewegung entlang der alten Indifferenzkurve $u^0$ zur neuen Preisrelation → kompensierte Nachfrageänderung. (2) Einkommenseffekt (EE): Bei normalen Gütern positiv — neue (reale) Kaufkraft erhöht Konsum beider Güter. (3) Gesamteffekt (GE) = SE + EE. Da $x_2$ normal: EE > 0, SE < 0 (da $x_2$ teurer relativ wird durch $p_1$-Senkung). GE = SE + EE kann positiv oder negativ sein.` },
        { id:'2b', points:2, type:'text',
          text: String.raw`Berechnen Sie den Betrag der Grenzrate der Substitution $\left|\frac{dx_2}{dx_1}\right|$. (2 Punkte)`,
          correct:['2/3','0.667','x2/x1','grs','mrs'], feedback: String.raw`$U = 8x_1^{0{,}4}x_2^{0{,}6}$. $MU_1 = 3{,}2\,x_1^{-0{,}6}x_2^{0{,}6}$, $MU_2 = 4{,}8\,x_1^{0{,}4}x_2^{-0{,}4}$. $\left|GRS\right| = \frac{MU_1}{MU_2} = \frac{3{,}2\,x_2}{4{,}8\,x_1} = \frac{2x_2}{3x_1}$.` },
        { id:'2c', points:2, type:'text',
          text: String.raw`Ermitteln Sie die Einkommenselastizität der Nachfrage des Haushalts nach Gut 2. (2 Punkte)`,
          correct:['1','eins','eine'], feedback: String.raw`Cobb-Douglas mit $\beta=0{,}6$: $x_2^* = \frac{0{,}6\,m}{p_2}$. Einkommenselastizität: $\varepsilon_{x_2,m} = \frac{\partial x_2^*}{\partial m}\cdot\frac{m}{x_2^*} = \frac{0{,}6}{p_2}\cdot\frac{m}{\frac{0{,}6m}{p_2}} = 1$.` },
      ]
    },
    {
      label: 'Aufgabe 3', points: 10, type: 'text-block', title: 'Unternehmenstheorie',
      preamble: String.raw`Hanne baut seit Jahren Orangen in Spanien für die Produktion von Orangensaft an. Ihre Kostenfunktion lautet: $C(y) = 5y^3 - 20y^2 + 130y + 20$. Hierbei bezeichnet $y$ die Anzahl an Orangensaft-Flaschen. Die Gesamtkosten $C(y)$ werden in € gemessen.`,
      questions: [
        { id:'3a', points:6, type:'text',
          text: 'Geben Sie die allgemeinen Funktionen der Grenzkosten, die Funktion der durchschnittlichen Kosten und die Funktion der durchschnittlichen variablen Kosten an, und berechnen Sie diese für die obige Kostenfunktion. (6 Punkte)',
          correct:['15y','grenzkosten','mc','avc','atc','ac','130'], feedback: String.raw`Fixkosten: $FC = 20$. Variable Kosten: $VC(y) = 5y^3 - 20y^2 + 130y$. Grenzkosten: $MC(y) = 15y^2 - 40y + 130$. Durchschn. variable Kosten: $AVC(y) = 5y^2 - 20y + 130$. Durchschn. Gesamtkosten: $AC(y) = 5y^2 - 20y + 130 + \frac{20}{y}$.` },
        { id:'3b', points:2, type:'text',
          text: 'Berechnen Sie das Minimum der durchschnittlichen variablen Kosten und zeigen Sie, dass diese den Grenzkosten in diesem Punkt entsprechen. (2 Punkte)',
          correct:['2','y=2','avc','mc','110','gleich'], feedback: String.raw`$AVC'(y) = 10y - 20 = 0 \implies y^* = 2$. $AVC(2) = 5(4) - 40 + 130 = 110$. $MC(2) = 15(4) - 80 + 130 = 110$. ✓` },
        { id:'3c', points:2, type:'text',
          text: 'Wie hoch muss der Marktpreis $p$ (in €) pro Flasche Orangensaft mindestens sein, damit Hanne in der kurzen Frist produziert? (Hinweis: Hierbei sind keine weiteren Berechnungen gefragt.) (2 Punkte)',
          correct:['110','p >= 110','p ≥ 110','mindestens 110','avc minimum'], feedback: String.raw`Kurzfristig produziert Hanne, wenn $p \geq \min AVC = 110$ €.` },
      ]
    },
    {
      label: 'Aufgabe 4', points: 10, type: 'text-block', title: 'Marktgleichgewicht',
      preamble: String.raw`Es gibt drei Arten von Konsumierenden ($t$), die gleichmäßig verteilt sind. Die Nachfragefunktionen nach dem Gut $x$ seien wie folgt gegeben: $x_1(p) = 20 - \tfrac{1}{4}p$ &nbsp;&nbsp; $x_2(p) = 60 - \tfrac{1}{2}p$ &nbsp;&nbsp; $x_3(p) = 100 - p$`,
      questions: [
        { id:'4a', points:2, type:'text',
          text: 'Berechnen Sie die Marktnachfragen nach Gut $x$. (2 Punkte)',
          correct:['180','180-7/4','1.75p','7/4','180 - 7p/4'], feedback: String.raw`$X(p) = x_1(p)+x_2(p)+x_3(p) = (20-\tfrac{p}{4})+(60-\tfrac{p}{2})+(100-p) = 180 - \tfrac{7}{4}p$.` },
        { id:'4b', points:2, type:'text',
          text: String.raw`Bestimmen Sie die inverse Marktnachfrage $p(x_N)$ nach diesem Gut. (2 Punkte)`,
          correct:['720/7','102.86','720','4/7','p=720/7'], feedback: String.raw`$X = 180 - \tfrac{7}{4}p \implies p = \tfrac{4}{7}(180-X) = \tfrac{720}{7} - \tfrac{4}{7}X \approx 102{,}86 - 0{,}571\,X$.` },
        { id:'4c', points:2, type:'text',
          text: String.raw`Unabhängig von Ihrem vorherigen Ergebnis, nehmen Sie nun an, dass die inverse Marktnachfragefunktion gegeben ist: $p = 100 - \tfrac{1}{2}x_N$. Bestimmen Sie die Preiselastizität der Nachfrage $\varepsilon_{x,p}$. (2 Punkte)`,
          correct:['p/(p-100)','elastizität','epsilon','-200'], feedback: String.raw`Inverse: $p = 100 - \tfrac{1}{2}x \implies x = 200 - 2p$. $\varepsilon_{x,p} = \frac{dx}{dp}\cdot\frac{p}{x} = (-2)\cdot\frac{p}{200-2p} = \frac{-p}{100-p}$.` },
        { id:'4d', points:1, type:'text',
          text: String.raw`Zeichnen Sie die Marktnachfragefunktion aus c) in das untenstehende Koordinatensystem. (1 Punkt)<br><br><canvas id="canvas_demand" width="420" height="320" style="display:block;border:1px solid var(--border);border-radius:8px;margin:12px 0;background:var(--card);max-width:100%"></canvas><script>setTimeout(()=>window.__drawDemandGraph&&window.__drawDemandGraph(),300)<\/script>`,
          correct:['fallend','negativ','linear','gerade','achse'], feedback: String.raw`Die inverse Nachfrage $p = 100 - \tfrac{1}{2}x_N$ ist eine fallende Gerade. $p$-Achsenabschnitt: $p=100$ bei $x=0$. $x$-Achsenabschnitt: $x=200$ bei $p=0$.` },
        { id:'4e', points:3, type:'text',
          text: String.raw`Fügen Sie die Angebotsfunktion $S(p) = \tfrac{1}{2}p$ zu obigem Graph hinzu. Berechnen Sie den Gleichgewichtspreis und die Gleichgewichtsmenge und kennzeichnen Sie diese. Kennzeichnen Sie zudem die Konsumentenrente. (3 Punkte)`,
          correct:['66.67','200/3','66','100/3','33.33','konsumentenrente'], feedback: String.raw`GG: $S(p) = \tfrac{1}{2}p$ und $X(p)=200-2p$. $\tfrac{1}{2}p = 200-2p \implies \tfrac{5}{2}p = 200 \implies p^* = 80$. $x^* = \tfrac{1}{2}(80)=40$. $KR = \tfrac{1}{2}(100-80)\cdot 40 = 400$.` },
      ]
    },
    {
      label: 'Aufgabe 5', points: 10, type: 'text-block', title: 'Haushaltstheorie',
      preamble: String.raw`Gegeben sei die Nutzenfunktion $U = x_1^{\frac{1}{3}} x_2^{\frac{2}{3}}$, wobei $x_1$ und $x_2$ die Konsummengen der Güter 1 und 2 bezeichnen.`,
      questions: [
        { id:'5a', points:6, type:'text',
          text: 'Leiten Sie die Marshallsche Nachfragefunktion unter der Nutzung des Lagrange-Ansatzes für beide Güter her. (6 Punkte)',
          correct:['m/(3p','m/3p','1/3','2/3','2m/3','lagrange'], feedback: String.raw`Lagrange: $\mathcal{L} = x_1^{1/3}x_2^{2/3} - \lambda(p_1 x_1 + p_2 x_2 - m)$. FOC: $\tfrac{1}{3}x_1^{-2/3}x_2^{2/3} = \lambda p_1$ und $\tfrac{2}{3}x_1^{1/3}x_2^{-1/3} = \lambda p_2$. Division: $\tfrac{x_2}{2x_1} = \tfrac{p_1}{p_2}$, also $x_2 = \tfrac{2p_1 x_1}{p_2}$. Einsetzen: $x_1^* = \tfrac{m}{3p_1}$, $x_2^* = \tfrac{2m}{3p_2}$.` },
        { id:'5b', points:2, type:'text',
          text: 'Berechnen Sie den Betrag der Grenzrate der Substitution $|GRS|$. (2 Punkte)',
          correct:['x2/(2x1)','grs','x_2/2x_1','substitution'], feedback: String.raw`$MU_1 = \tfrac{1}{3}x_1^{-2/3}x_2^{2/3}$, $MU_2 = \tfrac{2}{3}x_1^{1/3}x_2^{-1/3}$. $|GRS| = \tfrac{MU_1}{MU_2} = \tfrac{x_2}{2x_1}$.` },
        { id:'5c', points:2, type:'text',
          text: 'Ermitteln Sie die Einkommenselastizität der Nachfrage des Haushaltes nach Gut 2. (2 Punkte)',
          correct:['1','eins'], feedback: String.raw`$x_2^* = \tfrac{2m}{3p_2}$. $\varepsilon_{x_2,m} = \tfrac{\partial x_2^*}{\partial m}\cdot\tfrac{m}{x_2^*} = \tfrac{2}{3p_2}\cdot\tfrac{m}{\frac{2m}{3p_2}} = 1$.` },
      ]
    },
    {
      label: 'Aufgabe 6', points: 10, type: 'text-block', title: 'Unternehmenstheorie',
      preamble: String.raw`Ein Unternehmen minimiert seine Kosten und produziert gemäß der Produktionsfunktion $y = f(x_1, x_2) = (x_1^{1/3} + x_2^{1/3})^3$. Die Produktionsfaktoren $x_1$ bzw. $x_2$ werden von dem Unternehmen zu den Preisen $w_1 > 0$ bzw. $w_2 > 0$ gekauft. Das Unternehmen kann den Output $y$ zum Preis $p > 0$ verkaufen.`,
      questions: [
        { id:'6a', points:2, type:'text',
          text: 'Zeigen Sie, dass die Produktionsfunktion konstante Skalenerträge aufweist. (2 Punkte)',
          correct:['homogen','grad 1','linear homogen','skalenerträge','konstant'], feedback: String.raw`$f(\lambda x_1, \lambda x_2) = ((\lambda x_1)^{1/3} + (\lambda x_2)^{1/3})^3 = (\lambda^{1/3}(x_1^{1/3}+x_2^{1/3}))^3 = \lambda(x_1^{1/3}+x_2^{1/3})^3 = \lambda f(x_1,x_2)$. Homogen vom Grad 1 → konstante Skalenerträge.` },
        { id:'6b', points:2, type:'text',
          text: 'Zeigen Sie, dass die Grenzproduktivität beider Inputs mit steigender Menge des jeweiligen Inputs abnimmt. (2 Punkte)',
          correct:['grenzprodukt','abnehm','negativ','mp','zweite ableitung'], feedback: String.raw`$MP_1 = \frac{\partial f}{\partial x_1} = x_1^{-2/3}(x_1^{1/3}+x_2^{1/3})^2$. $\frac{\partial MP_1}{\partial x_1} = -\frac{2}{3}x_1^{-5/3}(x_1^{1/3}+x_2^{1/3})^2 + x_1^{-2/3}\cdot 2(x_1^{1/3}+x_2^{1/3})\cdot\frac{1}{3}x_1^{-2/3} < 0$ für $x_1$ groß genug → abnehmend.` },
        { id:'6c', points:2, type:'text',
          text: 'Berechnen Sie den Betrag der Technischen Rate der Substitution im Kostenminimum. (2 Punkte)',
          correct:['w1/w2','w_1/w_2','grts','trs'], feedback: String.raw`$TRS = \frac{MP_1}{MP_2} = \frac{x_1^{-2/3}}{x_2^{-2/3}} = \left(\frac{x_2}{x_1}\right)^{2/3}$. Im Kostenminimum: $|TRS| = \frac{w_1}{w_2}$.` },
        { id:'6d', points:2, type:'text',
          text: String.raw`Ermitteln Sie die bedingte Nachfrage nach dem ersten Produktionsfaktor in Abhängigkeit von $y$. (2 Punkte)<br><br><canvas id="canvas_isoquant" width="420" height="340" style="display:block;border:1px solid var(--border);border-radius:8px;margin:12px 0;background:var(--card);max-width:100%"></canvas><script>setTimeout(()=>window.__drawIsoquantGraph&&window.__drawIsoquantGraph(),300)<\/script>`,
          correct:['x1','w2','(w2/w1)','bedingt','conditional'], feedback: String.raw`Im Kostenmin: $(x_2/x_1)^{2/3} = w_1/w_2 \implies x_2 = x_1 (w_1/w_2)^{3/2}$. Einsetzen in $y = (x_1^{1/3}+x_2^{1/3})^3$: $x_1^* = \frac{y}{(1+(w_1/w_2)^{1/2})^3}\cdot\frac{1}{1}$. Vereinfacht: $x_1^*(y,w_1,w_2) = y\cdot\frac{(w_2)^{3/2}}{(w_1^{1/2}+w_2^{1/2})^3}$.` },
        { id:'6e', points:2, type:'text',
          text: String.raw`Zeichnen Sie in das obige Diagramm die minimale Isokostengerade, die es ermöglicht, das Nutzenniveau $\bar{y} = 27$ zu den Preisen $x_1 = 1$ und $x_2 = 4$ zu erreichen, und markieren Sie den kostenminimierenden Punkt. (2 Punkte)`,
          correct:['27','isokost','optimal','x1=27','x2=27','minimum','kosten'], feedback: String.raw`Bei $w_1=1, w_2=4$: $(x_2/x_1)^{2/3}=1/4 \implies x_2/x_1 = (1/4)^{3/2} = 1/8 \implies x_2 = x_1/8$. Einsetzen: $y = (x_1^{1/3}+x_2^{1/3})^3 = x_1^{1/3}(1+(1/8)^{1/3})^3 x_1 = 27 \implies x_1^* = 24, x_2^* = 3$. Kosten: $C = 1\cdot 24 + 4\cdot 3 = 36$.` },
      ]
    },
  ]
}
};
