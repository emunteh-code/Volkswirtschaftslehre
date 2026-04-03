// ============================================================
// CHAPTERS & CONTENT DATA — Mikroökonomik I
// All 33 microeconomics concepts with theory, formulas, exercises
// ============================================================

export const CHAPTERS = [
 { id:'kmm', title:'Konsummöglichkeitenmenge', cat:'Haushaltstheorie I', short:'KMM' },
 { id:'budget', title:'Budgetmenge & Budgetgerade', cat:'Haushaltstheorie I', short:'Budget' },
 { id:'praeferenz', title:'Präferenzrelation', cat:'Haushaltstheorie I', short:'Präf.' },
 { id:'indiff', title:'Indifferenzkurven', cat:'Haushaltstheorie I', short:'IK' },
 { id:'ordinal', title:'Ordinalität & Monotone Transformationen', cat:'Haushaltstheorie I', short:'Ordinal' },
 { id:'grs', title:'Grenzrate der Substitution (GRS)', cat:'Haushaltstheorie I', short:'GRS' },
 { id:'lagrange', title:'Lagrange-Methode', cat:'Optimierung', short:'Lagrange' },
 { id:'psubst', title:'Perfekte Substitute', cat:'Nutzenfunktionen', short:'P.Sub.' },
 { id:'pkomp', title:'Perfekte Komplemente', cat:'Nutzenfunktionen', short:'P.Komp.' },
 { id:'cobbd', title:'Cobb-Douglas-Nutzenfunktion', cat:'Nutzenfunktionen', short:'CD' },
 { id:'ces_u', title:'CES-Nutzenfunktion', cat:'Nutzenfunktionen', short:'CES' },
 { id:'homothet', title:'Homothetische Nutzenfunktionen', cat:'Nutzenfunktionen', short:'Homoth.' },
 { id:'hausopt', title:'Haushaltsoptimum', cat:'Optimierung', short:'H-Opt.' },
 { id:'marshall', title:'Marshallsche Nachfrage', cat:'Nachfrage', short:'Marshall' },
 { id:'elast', title:'Elastizitätskonzepte', cat:'Nachfrage', short:'Elast.' },
 { id:'normal', title:'Normale & inferiore Güter', cat:'Nachfrage', short:'Normal/Inf.' },
 { id:'hicks', title:'Hickssche Nachfrage', cat:'Dualität', short:'Hicks' },
 { id:'ausgaben', title:'Ausgabenfunktion', cat:'Dualität', short:'Ausgaben' },
 { id:'shephard', title:'Shephards Lemma', cat:'Dualität', short:'Shephard' },
 { id:'indnutzen', title:'Indirekte Nutzenfunktion & Roys Identität', cat:'Dualität', short:'V(p,m)' },
 { id:'lambda', title:'Lagrange-Multiplikator λ', cat:'Dualität', short:'λ' },
 { id:'slutsky', title:'Slutsky-Zerlegung', cat:'Preiseffekte', short:'Slutsky' },
 { id:'anfang', title:'Slutsky bei Anfangsausstattung', cat:'Preiseffekte', short:'Ausstattung' },
 { id:'arbeit', title:'Arbeitsangebot', cat:'Preiseffekte', short:'Arbeit' },
 { id:'cv_ev', title:'CV, EV & Konsumentenrente', cat:'Wohlfahrt', short:'CV/EV' },
 { id:'produktion', title:'Produktionsfunktion & Isoquanten', cat:'Produktion', short:'Produk.' },
 { id:'grts', title:'Grenzrate der Technischen Substitution', cat:'Produktion', short:'GRTS' },
 { id:'skalener', title:'Skalenerträge & Homogenität', cat:'Produktion', short:'Skalen' },
 { id:'kosten', title:'Kostenminimierung & Kostenfunktion', cat:'Kosten', short:'Kosten' },
 { id:'gk_dk', title:'Grenzkosten, Stückkosten, Kurzfrist', cat:'Kosten', short:'GK/DK' },
 { id:'gewinn', title:'Gewinnmaximierung & Angebot', cat:'Markt', short:'Gewinn' },
 { id:'markt', title:'Marktgleichgewicht & Wohlfahrt', cat:'Markt', short:'Markt' },
 { id:'monopol', title:'Monopol & Preisdiskriminierung', cat:'Markt', short:'Monopol' },
];

export const CONTENT = {
 kmm: {
 motivation: 'Bevor ökonomische Beschränkungen wie Einkommen betrachtet werden, muss der logische Handlungsraum des Haushalts definiert werden: die KMM.',
 theorie: String.raw`
 <div class="section-block">
<h3>Formale Definition</h3>
<p>Die <strong>Konsummöglichkeitenmenge (KMM)</strong> umfasst alle prinzipiell konsumierbaren Güterbündel. Ein Bündel wird als Vektor $(x_1, x_2, \dots, x_n)$ dargestellt, wobei $x_i$ die Menge von Gut $i$ bezeichnet.</p>
<div class="math-block">$$\text{KMM} = \{\,(x_1, \dots, x_n) \in \mathbb{R}^n \mid x_i \geq 0 \;\forall i\,\}$$</div>
<p>Die KMM beschreibt den logischen Handlungsraum, bevor ökonomische Beschränkungen (Preise, Einkommen) betrachtet werden.</p>
<p><strong>Annahmen:</strong></p>
<p><strong>Nichtnegativität:</strong> $x_i \geq 0$ für alle Güter $i$. Negative Mengen sind nicht konsumierbar (erst im Modell mit Anfangsausstattung werden "Verkäufe" modelliert).</p>
<p><strong>Teilbarkeit:</strong> Beliebige Bruchteile sind konsumierbar (z.B. $2{,}5$ Einheiten).</p>
<p><strong>Konvexität:</strong> Jede Mischung (Konvexkombination) zweier konsumierbarer Bündel ist ebenfalls konsumierbar.</p>
</div>
<div class="section-block">
<h3>Konvexität der KMM</h3>
<p>Für zwei Bündel $a, b \in$ KMM muss jede Konvexkombination ebenfalls in der KMM liegen:</p>
<div class="math-block">$$c = \lambda a + (1-\lambda) b \in \text{KMM}, \quad 0 \leq \lambda \leq 1$$</div>
<p>Beweis: Da $a_i \geq 0$ und $b_i \geq 0$, gilt $c_i = \lambda a_i + (1-\lambda)b_i \geq 0$ für alle $i$. Also $c \in$ KMM.</p>
<p><strong>Beispiel:</strong> $a = (10, 2)$, $b = (2, 10)$, $\lambda = 0{,}5$: $c = (6, 6) \in$ KMM.</p>
</div>
<div class="section-block">
<h3>Grafische Darstellung (n=2)</h3>
<p>Die KMM entspricht dem gesamten <strong>ersten Quadranten</strong> (einschließlich der Achsen), unbegrenzt nach oben und rechts. Sie ist kein begrenztes Gebiet, sondern der gesamte nichtnegative Bereich.</p>
</div>
<div class="section-block">
<h3>Abgrenzung zur Budgetmenge</h3>
<p>Die Budgetmenge $B = \{x \mid p_1 x_1 + p_2 x_2 \leq m\}$ ist eine echte Teilmenge der KMM: $B \subset$ KMM. Die KMM ist unbegrenzt (kein Einkommen, keine Preise), die Budgetmenge ist begrenzt (durch $m$ und $p_i$).</p>
</div>
<div class="section-block">
<h3>Komparative Statik</h3>
<p>Die KMM ist <strong>invariant</strong> gegenüber Änderungen von Preisen $p_i$ oder Einkommen $m$. Sie beschreibt logische, keine ökonomischen Beschränkungen. Preisänderungen betreffen nur die Budgetmenge.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Verwechslung mit Budgetmenge</strong> Die KMM ist unbegrenzt (der gesamte erste Quadrant). Die Budgetmenge ist begrenzt durch Einkommen und Preise. Eine Preiserhöhung verkleinert die Budgetmenge, nicht die KMM.</div>
<div class="warn-box"><strong>Negative Werte</strong> $x_i < 0$ ist kein Element der KMM (erst im Modell mit Anfangsausstattung relevant, wo Nettokauf negativ sein kann).</div>
</div>
`,
 formeln: [
 { label:'KMM', eq: String.raw`$$\text{KMM} = \{\,x \in \mathbb{R}^n \mid x_i \geq 0 \;\forall i\,\}$$`, desc:'Definitionsmenge aller konsumierbaren Bündel', variables: { 'x_i': 'Menge von Gut i (Komponente des Bündels)', 'n': 'Anzahl der Güter', '\\mathbb{R}^n': 'n-dimensionaler reeller Vektorraum' } },
 { label:'Konvexkombination', eq: String.raw`$$c = \lambda a + (1-\lambda) b, \quad 0 \leq \lambda \leq 1$$`, desc:'Mischbündel zweier Bündel a, b mit λ ∈ [0,1]', variables: { 'c': 'Konvexkombination (Mischbündel)', 'a,\\,b': 'Zwei Güterbündel', '\\lambda': 'Gewichtungsparameter (0 ≤ λ ≤ 1)' } },
 ],
 aufgaben: [
 {
 text: String.raw`Seien $\mathbf{a} = (8, 2)$ und $\mathbf{b} = (2, 8)$. Berechne die Konvexkombination $\mathbf{c}$ für $\lambda = 0{,}25$ und prüfe, ob $\mathbf{c} \in$ KMM.`,
 steps: [
 { text: `Allgemeine Formel:`, eq: String.raw`$$\mathbf{c} = \lambda\mathbf{a} + (1-\lambda)\mathbf{b}$$` },
 { text: `Komponente $x_1$:`, eq: String.raw`$$x_1^c = 0{,}25 \cdot 8 + 0{,}75 \cdot 2 = 2 + 1{,}5 = 3{,}5$$` },
 { text: `Komponente $x_2$:`, eq: String.raw`$$x_2^c = 0{,}25 \cdot 2 + 0{,}75 \cdot 8 = 0{,}5 + 6 = 6{,}5$$` },
 { text: String.raw`Prüfung: $3{,}5 \geq 0$ und $6{,}5 \geq 0$ — Bündel $\mathbf{c} = (3{,}5;\ 6{,}5)$ liegt in der KMM.`, eq: null },
 ],
 result: String.raw`$\mathbf{c} = (3{,}5;\ 6{,}5) \in \text{KMM}$`
 },
 {
 text: `Wahr oder Falsch? "Die KMM eines Haushalts verkleinert sich, wenn der Preis von Gut 1 steigt." Begründe formal.`,
 steps: [
 { text: `Die KMM ist definiert als:`, eq: String.raw`$$\text{KMM} = \{(x_1, x_2) \in \mathbb{R}^2 \mid x_i \geq 0\}$$` },
 { text: `Diese Menge enthält keine Preise oder Einkommen. Preise bestimmen die Budgetmenge, nicht die KMM.`, eq: null },
 { text: `Konsequenz: Preisänderungen verändern die Budgetgerade:`, eq: String.raw`$$\text{Budgetmenge} = \{(x_1,x_2) \mid p_1 x_1 + p_2 x_2 \leq m\} \subset \text{KMM}$$` },
 { text: `Die KMM bleibt unverändert, die Budgetmenge schrumpft. Die Aussage ist FALSCH.`, eq: null },
 ],
 result: `FALSCH — die KMM ist preisunabhängig; nur die Budgetmenge ändert sich.`
 },
 {
 text: `Zeige formal, dass die KMM eine konvexe Menge ist. Was bedeutet Konvexität für den Konsum?`,
 steps: [
 { text: String.raw`Definition Konvexität: Für alle $\mathbf{a}, \mathbf{b} \in$ KMM und $\lambda \in [0,1]$:`, eq: String.raw`$$\lambda\mathbf{a} + (1-\lambda)\mathbf{b} \in \text{KMM}$$` },
 { text: String.raw`Da $a_i \geq 0$ und $b_i \geq 0$, gilt für jede Komponente:`, eq: String.raw`$$c_i = \lambda a_i + (1-\lambda)b_i \geq \lambda \cdot 0 + (1-\lambda) \cdot 0 = 0$$` },
 { text: String.raw`Da $c_i \geq 0$ für alle $i$, ist $\mathbf{c} \in$ KMM. $\square$`, eq: null },
 { text: `Ökonomische Bedeutung: Mischungen zweier konsumierbarer Bündel sind stets konsumierbar.`, eq: null },
 ],
 result: `Die KMM ist konvex, da Nichtnegativität unter Konvexkombinationen erhalten bleibt.`
 },
 {
 text: String.raw`Ein Student gibt an, sein Bündel $\mathbf{x} = (3, -1)$ zu konsumieren. Erkläre, warum dies aus der KMM ausgeschlossen ist, und nenne die verletzten Annahmen.`,
 steps: [
 { text: String.raw`Das Bündel $\mathbf{x} = (3, -1)$ hat $x_2 = -1 < 0$.`, eq: null },
 { text: `Nichtnegativitätsbedingung der KMM:`, eq: String.raw`$$\text{KMM} = \{(x_1, x_2) \mid x_1 \geq 0,\; x_2 \geq 0\}$$` },
 { text: String.raw`Verletzung: $x_2 = -1 < 0$ verletzt die Nichtnegativität. Also $\mathbf{x} \notin$ KMM.`, eq: null },
 { text: `Anmerkung: Negative Mengen wären erst im Modell mit "Verkaufen" (Anfangsausstattung) interpretierbar.`, eq: null },
 ],
 result: String.raw`$\mathbf{x} = (3, -1) \notin \text{KMM}$ — Nichtnegativität $x_2 \geq 0$ verletzt.`
 },
 ]
 },
 budget: {
 motivation: 'Die Budgetmenge beantwortet: Welche Güterbündel kann sich der Haushalt bei gegebenen Preisen und Einkommen tatsächlich leisten?',
 theorie: String.raw`
 <div class="section-block">
<h3>Formale Definition</h3>
<p>Die <strong>Budgetmenge</strong> enthält alle Güterbündel $(x_1, x_2)$, die sich der Haushalt bei Preisen $p_1, p_2 > 0$ und Einkommen $m \geq 0$ leisten kann:</p>
<div class="math-block">$$B = \{(x_1, x_2) \in \mathbb{R}^2_+ \mid p_1 x_1 + p_2 x_2 \leq m\}$$</div>
<p>Die <strong>Budgetgerade</strong> ist der Rand der Budgetmenge (alle Bündel, die das Budget genau ausschöpfen). In expliziter Form:</p>
<div class="math-block">$$x_2 = \frac{m}{p_2} - \frac{p_1}{p_2}\,x_1$$</div>
<p>Diese Gleichung beschreibt eine Gerade mit Achsenabschnitt $m/p_2$ und Steigung $-p_1/p_2$.</p>
</div>
<div class="section-block">
<h3>Achsenabschnitte und Steigung</h3>
<div class="info-grid">
<div class="info-card"><div class="label">Ordinatenabschnitt</div><div class="value">$m/p_2$</div><p>Maximale Menge von Gut 2 (wenn $x_1=0$, das gesamte Einkommen wird für Gut 2 ausgegeben).</p></div>
<div class="info-card"><div class="label">Abszissenabschnitt</div><div class="value">$m/p_1$</div><p>Maximale Menge von Gut 1 (wenn $x_2=0$).</p></div>
<div class="info-card"><div class="label">Steigung</div><div class="value">$-p_1/p_2$</div><p>Opportunitätskosten: Wie viele Einheiten Gut 2 muss der Haushalt aufgeben, um eine weitere Einheit Gut 1 zu kaufen.</p></div>
<div class="info-card"><div class="label">Drehpunkt bei $\Delta p_1$</div><div class="value">$(0, m/p_2)$</div><p>Bei Änderung von $p_1$ bleibt der $x_2$-Achsenabschnitt fest; die Gerade dreht sich um diesen Punkt.</p></div>
</div>
</div>
<div class="section-block">
<h3>Komparative Statik</h3>
<p><strong>Einkommenserhöhung ($\Delta m > 0$):</strong> Die Budgetgerade verschiebt sich parallel nach außen. Steigung bleibt $-p_1/p_2$, beide Achsenabschnitte steigen proportional.</p>
<p><strong>Preiserhöhung $p_1$ ($\Delta p_1 > 0$):</strong> Der $x_2$-Achsenabschnitt $m/p_2$ bleibt unverändert (Drehpunkt). Der $x_1$-Achsenabschnitt $m/p_1$ sinkt. Die Gerade rotiert nach innen; die Steigung wird betragsmäßig steiler.</p>
<p><strong>Preiserhöhung $p_2$ ($\Delta p_2 > 0$):</strong> Der $x_1$-Achsenabschnitt bleibt fest (Drehpunkt $(m/p_1, 0)$). Der $x_2$-Achsenabschnitt sinkt. Steigung wird betragsmäßig flacher.</p>
</div>
<div class="section-block">
<h3>Numerisches Beispiel</h3>
<p>$m = 100$, $p_1 = 2$, $p_2 = 5$:</p>
<div class="math-block">$$x_1^{\max}=50 \quad x_2^{\max}=20 \quad \text{Steigung}=-0{,}4 \quad x_2=20-0{,}4\,x_1$$</div>
<p>Interpretation: Der Haushalt kann maximal 50 Einheiten Gut 1 oder 20 Einheiten Gut 2 kaufen. Für jede Einheit Gut 1 muss er $0{,}4$ Einheiten Gut 2 aufgeben.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Vorzeichenfehler</strong> Steigung ist $-p_1/p_2$, nicht $+p_1/p_2$ oder $-p_2/p_1$. Der Zähler enthält den Preis des Gutes auf der $x$-Achse (Gut 1).</div>
<div class="warn-box"><strong>Drehpunkt</strong> Bei Erhöhung von $p_1$ dreht sich die Gerade um den $x_2$-Achsenabschnitt $(0, m/p_2)$, nicht um den Ursprung.</div>
</div>
`,
 formeln: [
 { label:'Budgetungleichung', eq: String.raw`$$p_1 x_1 + p_2 x_2 \leq m$$`, desc:'Menge aller erschwinglichen Bündel', variables: { 'p_1': 'Preis von Gut 1', 'p_2': 'Preis von Gut 2', 'x_1': 'Menge von Gut 1', 'x_2': 'Menge von Gut 2', 'm': 'Verfügbares Einkommen' } },
 { label:'Budgetgerade', eq: String.raw`$$x_2 = \frac{m}{p_2} - \frac{p_1}{p_2} x_1$$`, desc:'Vollständige Ausgabe des Einkommens', variables: { 'x_2': 'Menge von Gut 2 (Ordinatenachse)', 'm': 'Einkommen', 'p_1': 'Preis Gut 1', 'p_2': 'Preis Gut 2', 'x_1': 'Menge Gut 1 (Abszissenachse)' } },
 { label:'Steigung', eq: String.raw`$$-\frac{p_1}{p_2}$$`, desc:'Opportunitätskosten (x₂ je Einheit x₁)', variables: { 'p_1': 'Preis des Gutes auf der x-Achse (Zähler!)', 'p_2': 'Preis des Gutes auf der y-Achse' } },
 ],
 aufgaben: [
 {
 text: `Ein Haushalt hat Einkommen $m = 120$€, $p_1 = 4$€, $p_2 = 3$€. (a) Bestimme die Budgetgerade. (b) Wie ändert sich die Budgetgerade, wenn $p_1$ auf $6$€ steigt?`,
 steps: [
 { text: `(a) Achsenabschnitte:`, eq: String.raw`$$x_1^{\max} = \frac{m}{p_1} = \frac{120}{4} = 30 \qquad x_2^{\max} = \frac{m}{p_2} = \frac{120}{3} = 40$$` },
 { text: `Steigung der Budgetgeraden:`, eq: String.raw`$$-\frac{p_1}{p_2} = -\frac{4}{3} \approx -1{,}33$$` },
 { text: `Explizite Budgetgerade:`, eq: String.raw`$$x_2 = 40 - \frac{4}{3}\,x_1$$` },
 { text: `(b) Neuer Preis $p_1 = 6$€. Der $x_2$-Achsenabschnitt $m/p_2 = 40$ bleibt unverändert (Drehpunkt!)`, eq: null },
 { text: `Neuer $x_1$-Achsenabschnitt und Steigung:`, eq: String.raw`$$x_1^{\max} = \frac{120}{6} = 20 \qquad \text{Steigung} = -\frac{6}{3} = -2$$` },
 { text: `Neue Budgetgerade:`, eq: String.raw`$$x_2 = 40 - 2\,x_1$$` },
 ],
 result: String.raw`Ursprünglich: $x_2 = 40 - \tfrac{4}{3}x_1$ | Nach Preiserhöhung: $x_2 = 40 - 2x_1$`
 },
 {
 text: `Ein Haushalt hat $m = 60$€, $p_1 = 3$€, $p_2 = 5$€. Das Einkommen steigt auf $m'= 90$€. Beschreibe die Wirkung auf die Budgetgerade und berechne die neuen Achsenabschnitte.`,
 steps: [
 { text: `Ursprüngliche Budgetgerade:`, eq: String.raw`$$x_2 = \frac{m}{p_2} - \frac{p_1}{p_2}x_1 = 12 - \frac{3}{5}x_1$$` },
 { text: `Neue Budgetgerade ($m'= 90$):`, eq: String.raw`$$x_2 = \frac{90}{5} - \frac{3}{5}x_1 = 18 - 0{,}6\,x_1$$` },
 { text: `Achsenabschnitte neu:`, eq: String.raw`$$x_1^{\max} = \frac{90}{3} = 30 \qquad x_2^{\max} = \frac{90}{5} = 18$$` },
 { text: `Die Steigung $-p_1/p_2 = -3/5$ bleibt konstant. Die Gerade verschiebt sich parallel nach außen.`, eq: null },
 ],
 result: String.raw`Parallele Verschiebung nach außen; neue Achsenabschnitte: $x_1^{\max}=30$, $x_2^{\max}=18$`
 },
 {
 text: `Gilt: Wenn alle Preise und das Einkommen sich verdoppeln, ändert sich die Budgetgerade nicht. Beweise dies formal.`,
 steps: [
 { text: `Budgetgerade bei $(p_1, p_2, m)$:`, eq: String.raw`$$x_2 = \frac{m}{p_2} - \frac{p_1}{p_2}\,x_1$$` },
 { text: `Nach Verdopplung $(2p_1, 2p_2, 2m)$:`, eq: String.raw`$$x_2 = \frac{2m}{2p_2} - \frac{2p_1}{2p_2}\,x_1 = \frac{m}{p_2} - \frac{p_1}{p_2}\,x_1$$` },
 { text: `Die Budgetgerade ist identisch. Die Nachfrage ist homogen vom Grad 0.`, eq: null },
 { text: String.raw`Formal: Multipliziert man alle nominalen Größen mit $\lambda >0$:`, eq: String.raw`$$p_1 x_1 + p_2 x_2 \leq m \iff \lambda p_1 x_1 + \lambda p_2 x_2 \leq \lambda m$$` },
 ],
 result: `Keine Geldillusion: Die Budgetmenge ist homogen vom Grad 0 in $(p_1, p_2, m)$.`
 },
 {
 text: `Preis $p_2$ verdoppelt sich von 2€ auf 4€ bei $m = 80$€ und $p_1 = 4$€. Berechne die alte und neue Budgetgerade und beschreibe die geometrische Wirkung.`,
 steps: [
 { text: `Alte Budgetgerade ($p_2 = 2$):`, eq: String.raw`$$x_2 = \frac{80}{2} - \frac{4}{2}x_1 = 40 - 2x_1$$` },
 { text: `Neue Budgetgerade ($p_2 = 4$):`, eq: String.raw`$$x_2 = \frac{80}{4} - \frac{4}{4}x_1 = 20 - x_1$$` },
 { text: `Der $x_1$-Achsenabschnitt bleibt: $m/p_1 = 80/4 = 20$ (Drehpunkt!)`, eq: null },
 { text: `Der $x_2$-Achsenabschnitt sinkt von 40 auf 20. Die Gerade dreht sich im Uhrzeigersinn um $(20, 0)$.`, eq: null },
 ],
 result: `Drehung um Punkt $(20, 0)$; neue Gerade: $x_2 = 20 - x_1$`
 },
 ]
 },
 praeferenz: {
 motivation: 'Die Präferenzrelation modelliert, was der Konsument will. Sie liefert das Auswahlkriterium innerhalb der Budgetmenge.',
 theorie: String.raw`
 <div class="section-block">
<h3>Binäre Relationen</h3>
<p>Die <strong>Präferenzrelation</strong> $\succeq$ beschreibt die Vorlieben des Haushalts über Güterbündel. Sie ist die Grundlage jeder Konsumtheorie und wird in drei Relationen unterteilt:</p>
<div class="info-grid">
<div class="info-card"><div class="label">Schwache Präferenz</div><div class="value">$a \succeq b$</div><p>"$a$ ist mindestens so gut wie $b$". Grundrelation, aus der die anderen definiert werden.</p></div>
<div class="info-card"><div class="label">Strikte Präferenz</div><div class="value">$a \succ b$</div><p>"$a$ ist echt besser als $b$". Definiert als: $a \succeq b$ und nicht $b \succeq a$.</p></div>
<div class="info-card"><div class="label">Indifferenz</div><div class="value">$a \sim b$</div><p>"$a$ und $b$ sind gleich gut". Definiert als: $a \succeq b$ und $b \succeq a$.</p></div>
</div>
</div>
<div class="section-block">
<h3>Axiome der Rationalität</h3>
<p><strong>Vollständigkeit:</strong> Für alle Bündel $a, b$ gilt $a \succeq b$ oder $b \succeq a$ (oder beide). Der Haushalt kann alle Bündel vergleichen; "ich weiß nicht" ist nicht zulässig.</p>
<p><strong>Transitivität:</strong> Wenn $a \succeq b$ und $b \succeq c$, dann $a \succeq c$. Die Rangfolge ist widerspruchsfrei. Ohne Transitivität wären zyklische Präferenzen möglich, was ökonomisch zu Ausbeutung (Money Pump) führen würde.</p>
<div class="math-block">$$\text{Vollständigkeit} + \text{Transitivität} \implies \text{Rationalität}$$</div>
</div>
<div class="section-block">
<h3>Money Pump</h3>
<p>Ohne Transitivität (z.B. $a \succ b \succ c \succ a$) könnte ein Händler dem Konsumenten immer wieder Tausche gegen eine kleine Gebühr anbieten: $a \to c$ (weil $c \succ a$ aus Sicht des Konsumenten), dann $c \to b$, dann $b \to a$. Nach einem Zyklus ist der Konsument zurück bei $a$, hat aber dreimal gezahlt. Dies kann beliebig oft wiederholt werden.</p>
</div>
<div class="section-block">
<h3>Formale Ableitungen</h3>
<div class="math-block">$$a \succ b \iff a \succeq b \land \neg(b \succeq a)$$</div>
<div class="math-block">$$a \sim b \iff a \succeq b \land b \succeq a$$</div>
<p>Aus Vollständigkeit folgt Reflexivität ($a \succeq a$ für alle $a$), da man $b = a$ setzen kann.</p>
</div>
<div class="section-block">
<h3>Weitere Annahmen (für wohlerzogene Präferenzen)</h3>
<p><strong>Monotonie (Nichtsättigung):</strong> Mehr ist besser. Wenn Bündel $a$ in jeder Komponente mindestens so viel enthält wie $b$ und in mindestens einer Komponente mehr, dann $a \succ b$.</p>
<p><strong>Konvexität:</strong> Mischungen werden Extremen vorgezogen. Für $a \sim b$ und $0 < t < 1$: $ta + (1-t)b \succeq a$. Strenge Konvexität: $ta + (1-t)b \succ a$.</p>
<p><strong>Stetigkeit:</strong> Kleine Änderungen in den Gütermengen führen zu kleinen Änderungen in der Präferenzordnung. Technisch notwendig für die Existenz einer stetigen Nutzenfunktion.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Schwach vs. Strikt</strong> $a \succeq b$ schließt $a \sim b$ ein. Strikte Präferenz $a \succ b$ liegt erst vor, wenn zusätzlich $\neg(b \succeq a)$ gilt.</div>
<div class="warn-box"><strong>Transitivität bei Indifferenz</strong> Wenn $a \sim b$ und $b \sim c$, dann muss $a \sim c$ gelten (Transitivität der Indifferenz). Verletzung würde Irrationalität bedeuten.</div>
</div>
`,
 formeln: [
 { label:'Strikte Präferenz', eq: String.raw`$$a \succ b \iff a \succsim b \land \lnot(b \succsim a)$$`, desc:'Definition über schwache Präferenz', variables: { 'a': 'Güterbündel a', 'b': 'Güterbündel b', '\\succsim': 'Schwache Präferenzrelation', '\\lnot': 'Logische Negation' } },
 { label:'Indifferenz', eq: String.raw`$$a \sim b \iff a \succsim b \land b \succsim a$$`, desc:'Wechselseitige schwache Präferenz', variables: { 'a': 'Güterbündel a', 'b': 'Güterbündel b', '\\sim': 'Indifferenzrelation' } },
 ],
 aufgaben: [
 {
 text: String.raw`Gegeben: $a \succ b$ und $b \succsim c$. Zeige, dass $a \sim c$ ausgeschlossen ist.`,
 steps: [
 { text: String.raw`Aus $a \succ b$: $a \succsim b$ und $\neg(b \succsim a)$.`, eq: null },
 { text: String.raw`Transitivität mit $b \succsim c$:`, eq: String.raw`$$a \succsim b \wedge b \succsim c \implies a \succsim c$$` },
 { text: String.raw`Annahme $a \sim c$ würde bedeuten: $c \succsim a$. Per Transitivität wäre $c \succsim a \succsim b$, also $c \succsim b$.`, eq: null },
 { text: String.raw`Mit $b \succsim c$ folgt $b \sim c$. Aber dann: $a \succ b \sim c \implies a \succ c$ — Widerspruch zu $a \sim c$. $\square$`, eq: null },
 ],
 result: String.raw`$a \succ c$ — strikte Präferenz, nicht Indifferenz`
 },
 {
 text: String.raw`Wahr oder Falsch? "Vollständigkeit der Präferenzrelation bedeutet, dass der Konsument alle Güter vergleichen kann, einschließlich $a \sim a$." Begründe.`,
 steps: [
 { text: String.raw`Vollständigkeit: Für alle $a, b$ gilt $a \succsim b$ oder $b \succsim a$ (oder beides).`, eq: null },
 { text: String.raw`Mit $a = b$ folgt: $a \succsim a$ (Reflexivität folgt aus Vollständigkeit).`, eq: null },
 { text: String.raw`Weil $a \succsim a$ und $a \succsim a$, gilt $a \sim a$ per Definition:`, eq: String.raw`$$a \sim a \iff a \succsim a \wedge a \succsim a \quad \checkmark$$` },
 { text: String.raw`Die Aussage ist WAHR — Vollständigkeit impliziert Reflexivität und damit $a \sim a$.`, eq: null },
 ],
 result: `WAHR — Vollständigkeit impliziert Reflexivität.`
 },
 {
 text: String.raw`Ein irrationaler Konsument hat die Präferenzen $a \succ b \succ c \succ a$ (zyklisch). Erkläre das Money-Pump-Argument.`,
 steps: [
 { text: String.raw`Zyklische Präferenzen verletzen Transitivität: $a \succ b$ und $b \succ c$, aber $c \succ a$ statt $a \succ c$.`, eq: null },
 { text: `Money Pump: Der Konsument hält Bündel $a$. Ein Händler bietet an:`, eq: null },
 { text: String.raw`Schritt 1: Tausch $a \to c$ gegen Zahlung von $\varepsilon >0$ (da $c \succ a$).`, eq: null },
 { text: String.raw`Schritt 2: Tausch $c \to b$ für $\varepsilon$ (da $b \succ c$). Schritt 3: $b \to a$ für $\varepsilon$. Nun ist der Konsument zurück bei $a$, hat aber $3\varepsilon$ verloren!`, eq: null },
 { text: `Konsequenz: Zyklische Präferenzen ermöglichen beliebige Geldpumpen — rationaler Konsument muss transitiv sein.`, eq: null },
 ],
 result: `Zyklische Präferenzen (Transitivitätsverletzung) ermöglichen beliebige Ausbeutung.`
 },
 {
 text: String.raw`Leite aus der schwachen Präferenz $\succsim$ die Definitionen von $\succ$ und $\sim$ her. Zeige: wenn $a \succ b$, dann $\neg(b \succ a)$.`,
 steps: [
 { text: `Definitionen:`, eq: String.raw`$$\begin{aligned}a \succ b &\iff a \succsim b \wedge \neg(b \succsim a)\\ a \sim b &\iff a \succsim b \wedge b \succsim a\end{aligned}$$` },
 { text: String.raw`Zu zeigen: $a \succ b \implies \neg(b \succ a)$.`, eq: null },
 { text: String.raw`Aus $a \succ b$ folgt $\neg(b \succsim a)$.`, eq: null },
 { text: String.raw`Definition $b \succ a$ würde $b \succsim a$ erfordern — das ist aber gerade ausgeschlossen.`, eq: String.raw`$$b \succ a \text{ würde } b \succsim a \text{ erfordern, aber } \neg(b \succsim a) \implies \neg(b \succ a) \quad \square$$` },
 ],
 result: String.raw`$a \succ b \implies \neg(b \succ a)$ — strikte Präferenz ist asymmetrisch.`
 },
 ]
 },
 indiff: {
 motivation: 'Indifferenzkurven visualisieren die Präferenzstruktur in der Güterebene — alle Bündel mit gleichem Nutzenniveau.',
 theorie: String.raw`
 <div class="section-block">
<h3>Formale Definition</h3>
<p>Eine <strong>Indifferenzkurve</strong> ist die Menge aller Güterbündel $(x_1, x_2)$, die dem Haushalt denselben Nutzen stiften. Formal ist sie die Niveaumenge (Höhenlinie) der Nutzenfunktion zum Nutzenniveau $\bar{u}$:</p>
<div class="math-block">$$\{\,(x_1, x_2) \in \mathbb{R}^2_+ \mid u(x_1, x_2) = \bar{u}\,\}$$</div>
<p>Jeder Punkt auf einer Indifferenzkurve ist für den Haushalt gleich gut. Der Haushalt ist indifferent zwischen allen Bündeln auf derselben Kurve.</p>
</div>
<div class="section-block">
<h3>Eigenschaften (bei rationalen, monotonen, konvexen Präferenzen)</h3>
<p><strong>Negative Steigung:</strong> Mehr von Gut 1 erfordert weniger von Gut 2, um das Nutzenniveau $\bar{u}$ konstant zu halten. Dies folgt aus der Annahme der Nichtsättigung (Monotonie): Wenn beide Güter zunehmen, steigt der Nutzen.</p>
<p><strong>Konvexität zum Ursprung:</strong> Mischungen werden Extremen vorgezogen. Mathematisch bedeutet dies eine abnehmende Grenzrate der Substitution (GRS). Je mehr von einem Gut konsumiert wird, desto weniger ist der Haushalt bereit, dafür vom anderen aufzugeben.</p>
<p><strong>Kein Schneiden:</strong> Zwei Indifferenzkurven können sich nie schneiden. Ein Schnittpunkt würde Transitivität verletzen: Sei $A$ der Schnittpunkt, dann wäre $A$ indifferent zu zwei Bündeln auf verschiedenen Kurven, die aber selbst nicht indifferent zueinander sind.</p>
<p><strong>Höher = besser:</strong> Indifferenzkurven weiter vom Ursprung entfernt entsprechen höheren Nutzenniveaus $\bar{u}$.</p>
</div>
<div class="section-block">
<h3>Steigung der Indifferenzkurve</h3>
<p>Die Steigung der Indifferenzkurve in einem Punkt ist die negative Grenzrate der Substitution:</p>
<div class="math-block">$$\frac{dx_2}{dx_1}\bigg|_{\bar{u}} = -\frac{MU_1}{MU_2} = -GRS$$</div>
<p>Dabei ist $MU_i = \partial u/\partial x_i$ der Grenznutzen von Gut $i$. Die GRS gibt an, wie viele Einheiten Gut 2 der Haushalt aufzugeben bereit ist für eine marginale Einheit Gut 1, ohne Nutzenverlust.</p>
</div>
<div class="section-block">
<h3>Beispiel: Cobb-Douglas $u = x_1 \cdot x_2$, $\bar{u} = 12$</h3>
<div class="math-block">$$x_1 \cdot x_2 = 12 \implies x_2 = \frac{12}{x_1}$$</div>
<p>Die Indifferenzkurve ist eine Hyperbel. Punkte: $(3,4)$, $(4,3)$, $(6,2)$, $(12,1)$. Die GRS in $(3,4)$: $GRS = x_2/x_1 = 4/3 \approx 1{,}33$, d.h. der Haushalt gibt $1{,}33$ Einheiten Gut 2 für eine Einheit Gut 1 auf.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Schnittpunkt</strong> Indifferenzkurven schneiden sich nie. Ein Schnittpunkt impliziert einen Widerspruch zur Transitivität der Präferenzen.</div>
<div class="warn-box"><strong>Positive Steigung</strong> Bei positiven Grenznutzen ist eine positiv geneigte Indifferenzkurve unmöglich: Ein Bündel mit mehr von beiden Gütern hätte höheren Nutzen und könnte nicht auf derselben IK liegen.</div>
</div>
`,
 formeln: [
 { label:'Indifferenzkurve', eq: String.raw`$$\{\,(x_1, x_2) \in \mathbb{R}^2_+ \mid u(x_1, x_2) = \bar{u}\,\}$$`, desc:'Niveaumenge für konstantes ū', variables: { 'u(x_1,x_2)': 'Nutzenfunktion', '\\bar{u}': 'Konstantes Nutzenniveau' } },
 { label:'Beispiel (CD)', eq: String.raw`$$x_2 = \frac{\bar{u}}{x_1}$$`, desc:'Explizite Form bei u = x₁·x₂', variables: { 'x_2': 'Menge Gut 2', '\\bar{u}': 'Nutzenniveau', 'x_1': 'Menge Gut 1' } },
 ],
 aufgaben: [
 {
 text: `Bestimme vier Punkte auf der Indifferenzkurve $u(x_1,x_2) = x_1 x_2 = 16$ und skizziere die Kurve.`,
 steps: [
 { text: `Explizite Form der Indifferenzkurve:`, eq: String.raw`$$x_1 x_2 = 16 \implies x_2 = \frac{16}{x_1}$$` },
 { text: `$x_1=1$: $x_2=16$ | $x_1=2$: $x_2=8$`, eq: null },
 { text: `$x_1=4$: $x_2=4$ | $x_1=8$: $x_2=2$`, eq: null },
 { text: `Die Kurve ist eine gleichseitige Hyperbel, konvex zum Ursprung, fallend.`, eq: null },
 ],
 result: String.raw`Punkte: $(1,16),\ (2,8),\ (4,4),\ (8,2)$ — alle mit $u=16$`
 },
 {
 text: `Warum schneiden sich Indifferenzkurven nie? Beweise über Widerspruch mit der Transitivitätsannahme.`,
 steps: [
 { text: `Annahme: Indifferenzkurven $I_1$ (Niveau $u^0$) und $I_2$ (Niveau $u^1 >u^0$) schneiden sich in Punkt $S$.`, eq: null },
 { text: String.raw`Sei $A \in I_1 \setminus I_2$ und $B \in I_2 \setminus I_1$. Dann: $A \sim S$ und $B \sim S$.`, eq: null },
 { text: String.raw`Per Transitivität: $A \sim S \sim B \implies A \sim B$.`, eq: null },
 { text: String.raw`Aber $A \in I_1$ und $B \in I_2$ mit $u^1 >u^0$, also $B \succ A$ — Widerspruch! $\square$`, eq: null },
 ],
 result: `Schnittpunkt würde Transitivität verletzen — daher können IK sich nicht schneiden.`
 },
 {
 text: String.raw`Gegeben $u(x_1,x_2) = \min\{x_1, 2x_2\}$ (Leontief). Bestimme die Indifferenzkurve für $\bar{u}=4$ und beschreibe ihre Form.`,
 steps: [
 { text: String.raw`Nutzenniveau $\bar{u} = 4$:`, eq: String.raw`$$\min\{x_1, 2x_2\} = 4$$` },
 { text: `Zwei Fälle:`, eq: String.raw`$$\begin{aligned}\text{Fall 1: } x_1 \leq 2x_2 &\implies x_1 = 4\\ \text{Fall 2: } x_1 \geq 2x_2 &\implies 2x_2 = 4 \implies x_2 = 2\end{aligned}$$` },
 { text: `Knickpunkt: $x_1 = 4$ und $x_2 = 2$, d.h. Punkt $(4, 2)$.`, eq: null },
 { text: String.raw`IK ist L-förmig: senkrechte Linie $x_1 = 4$ (für $x_2 \geq 2$) + waagerechte Linie $x_2 = 2$ (für $x_1 \geq 4$).`, eq: null },
 ],
 result: `L-förmige IK mit Knick bei $(4,2)$: $x_1=4$ (vertikal) und $x_2=2$ (horizontal)`
 },
 {
 text: `Besitzt eine Nutzenfunktion mit positiver Steigung der Indifferenzkurven sinnvolle ökonomische Eigenschaften? Diskutiere.`,
 steps: [
 { text: String.raw`Positive Steigung bedeutet: Mehr von $x_1$ erfordert mehr von $x_2$ um dasselbe $\bar{u}$ zu halten.`, eq: null },
 { text: `Das impliziert, dass eines der Güter ein "Schlechtgut" (bad) ist, also negative Grenznutzen hat:`, eq: String.raw`$$\frac{dx_2}{dx_1}\bigg|_{u=\bar{u}} = -\frac{MU_1}{MU_2} >0 \implies MU_1 \cdot MU_2 < 0$$` },
 { text: `Also: Entweder $MU_1 < 0$ oder $MU_2 < 0$ — eines der Güter bereitet Leid (z.B. Arbeit, Verschmutzung).`, eq: null },
 { text: `Beispiel: Freizeit-Konsum-Modell. Weniger Freizeit (schlechter) + mehr Konsum (besser) = gleicher Nutzen.`, eq: null },
 ],
 result: `Positive Steigung möglich, wenn ein Gut negativen Grenznutzen hat (Schlechtgut, z.B. Arbeit).`
 },
 ]
 },
 grs: {
 motivation: 'Die GRS quantifiziert das subjektive Tauschverhältnis des Konsumenten: wie viel x₂ er maximal für eine marginale Einheit x₁ opfert.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p>Die <strong>Grenzrate der Substitution (GRS)</strong> misst die subjektive Wertschätzung zweier Güter: Wie viele Einheiten von Gut 2 ist der Haushalt bereit aufzugeben, um eine zusätzliche Einheit von Gut 1 zu erhalten, ohne sich besser oder schlechter zu stellen?</p>
<div class="math-block">$$GRS_{1,2} = -\frac{dx_2}{dx_1}\bigg|_{u=\text{const}} = \frac{MU_1}{MU_2}$$</div>
<p>$MU_1 = \partial u/\partial x_1$ ist der Grenznutzen von Gut 1 (zusätzlicher Nutzen einer marginalen Einheit Gut 1). $MU_2 = \partial u/\partial x_2$ ist der Grenznutzen von Gut 2. Die GRS ist der Betrag der Steigung der Indifferenzkurve im Punkt $(x_1, x_2)$.</p>
</div>
<div class="section-block">
<h3>Herleitung über totales Differential</h3>
<p>Entlang einer Indifferenzkurve ist $u(x_1, x_2) = \bar{u} = \text{const}$. Das totale Differential ist:</p>
<div class="math-block">$$du = \frac{\partial u}{\partial x_1}\,dx_1 + \frac{\partial u}{\partial x_2}\,dx_2 = 0$$</div>
<p>Umstellen nach $dx_2/dx_1$:</p>
<div class="math-block">$$\frac{dx_2}{dx_1} = -\frac{MU_1}{MU_2} \implies GRS = \frac{MU_1}{MU_2}$$</div>
</div>
<div class="section-block">
<h3>Abnehmende GRS</h3>
<p>Die Standardannahme ist eine <strong>abnehmende GRS</strong>: Je mehr von Gut 1 der Haushalt bereits hat (bei konstantem Nutzen), desto weniger Gut 2 ist er bereit, für eine weitere Einheit aufzugeben. Dies entspricht konvexen Indifferenzkurven (Mischungen werden Extremen vorgezogen).</p>
<p>Ökonomische Intuition: Die erste Tasse Kaffee am Morgen ist viel wert (hohe GRS). Die fünfte Tasse weniger (niedrige GRS).</p>
</div>
<div class="section-block">
<h3>Beispiele</h3>
<p><strong>Cobb-Douglas</strong> $u = x_1^\alpha x_2^{1-\alpha}$: $GRS = \frac{\alpha}{1-\alpha}\cdot\frac{x_2}{x_1}$. Abnehmend in $x_1$, steigend in $x_2$.</p>
<p><strong>Perfekte Substitute</strong> $u = ax_1 + bx_2$: $GRS = a/b = \text{const}$. Keine abnehmende GRS.</p>
<p><strong>Perfekte Komplemente</strong> $u = \min\{ax_1, bx_2\}$: GRS ist im Knickpunkt nicht definiert (nicht differenzierbar).</p>
</div>
<div class="section-block">
<h3>GRS im Haushaltsoptimum</h3>
<p>Im Optimum (bei innerer Lösung) gilt die Tangentialbedingung:</p>
<div class="math-block">$$GRS = \frac{MU_1}{MU_2} = \frac{p_1}{p_2}$$</div>
<p>Die subjektive Austauschrate (GRS) muss gleich der objektiven Marktaustauschrate (Preisverhältnis) sein. Ist $GRS > p_1/p_2$, schätzt der Haushalt Gut 1 relativ zum Markt zu hoch ein und sollte mehr davon kaufen.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Verwechslung mit Budgetsteigung</strong> GRS = $MU_1/MU_2$ ist subjektiv (Präferenzen). Das Preisverhältnis $p_1/p_2$ ist objektiv (Markt). Im Optimum sind beide gleich, aber konzeptionell verschieden.</div>
<div class="warn-box"><strong>Vorzeichen</strong> Die Steigung der IK ist negativ ($dx_2/dx_1 < 0$), aber die GRS wird als positiver Betrag angegeben: $GRS = |dx_2/dx_1| = MU_1/MU_2 > 0$.</div>
</div>
`,
 formeln: [
 { label:'GRS Definition', eq: String.raw`$$GRS = \left|\frac{dx_2}{dx_1}\right|_{\,u = \bar{u}}$$`, desc:'Betrag der Steigung der Indifferenzkurve', variables: { '\\left|\\tfrac{dx_2}{dx_1}\\right|': 'Betrag der Steigung der IK', '\\bar{u}': 'Konstantes Nutzenniveau' } },
 { label:'GRS via Grenznutzen', eq: String.raw`$$GRS = \frac{MU_1}{MU_2} = \frac{\partial u/\partial x_1}{\partial u/\partial x_2}$$`, desc:'Verhältnis der partiellen Ableitungen', variables: { 'MU_1': 'Grenznutzen Gut 1 = ∂u/∂x₁', 'MU_2': 'Grenznutzen Gut 2 = ∂u/∂x₂' } },
 ],
 aufgaben: [
 {
 text: `Berechne die GRS der Nutzenfunktion $u(x_1,x_2) = x_1^2 x_2$ am Punkt $(3, 4)$.`,
 steps: [
 { text: `Grenznutzen:`, eq: String.raw`$$\begin{aligned}MU_1 &= \frac{\partial u}{\partial x_1} = 2x_1 x_2 = 2 \cdot 3 \cdot 4 = 24\\ MU_2 &= \frac{\partial u}{\partial x_2} = x_1^2 = 9\end{aligned}$$` },
 { text: `GRS berechnen:`, eq: String.raw`$$GRS = \frac{MU_1}{MU_2} = \frac{24}{9} = \frac{8}{3} \approx 2{,}67$$` },
 { text: `Interpretation: Der Konsument gibt maximal $8/3$ Einheiten von $x_2$ für eine zusätzliche Einheit $x_1$ auf.`, eq: null },
 ],
 result: String.raw`$GRS = \frac{8}{3} \approx 2{,}67$`
 },
 {
 text: String.raw`Zeige, dass für $u(x_1,x_2) = x_1^\alpha x_2^{1-\alpha}$ gilt: $GRS = \frac{\alpha}{1-\alpha} \cdot \frac{x_2}{x_1}$.`,
 steps: [
 { text: `Grenznutzen:`, eq: String.raw`$$\begin{aligned}MU_1 &= \alpha x_1^{\alpha-1} x_2^{1-\alpha}\\ MU_2 &= (1-\alpha) x_1^{\alpha} x_2^{-\alpha}\end{aligned}$$` },
 { text: `Verhältnis bilden:`, eq: String.raw`$$GRS = \frac{MU_1}{MU_2} = \frac{\alpha x_1^{\alpha-1} x_2^{1-\alpha}}{(1-\alpha) x_1^{\alpha} x_2^{-\alpha}}$$` },
 { text: `Vereinfachen:`, eq: String.raw`$$GRS = \frac{\alpha}{1-\alpha} \cdot x_1^{\alpha-1-\alpha} \cdot x_2^{1-\alpha-(-\alpha)} = \frac{\alpha}{1-\alpha} \cdot \frac{x_2}{x_1} \quad \square$$` },
 ],
 result: String.raw`$GRS = \dfrac{\alpha}{1-\alpha}\cdot\dfrac{x_2}{x_1}$ — steigt mit $x_2/x_1$ (abnehmende GRS bei fixem Verhältnis)`
 },
 {
 text: `Gegeben $u(x_1,x_2) = x_1 x_2$. Im Punkt $(5, 5)$ gilt $GRS = 1$ und $p_1/p_2 = 2$. Soll der Konsument mehr oder weniger $x_1$ kaufen? Erkläre.`,
 steps: [
 { text: `Im Punkt $(5,5)$: $GRS = MU_1/MU_2 = x_2/x_1 = 5/5 = 1$.`, eq: null },
 { text: `Preisverhältnis am Markt: $p_1/p_2 = 2$.`, eq: null },
 { text: `Vergleich:`, eq: String.raw`$$GRS = 1 < \frac{p_1}{p_2} = 2$$` },
 { text: `Gut 1 kostet am Markt doppelt so viel wie das subjektive Tauschverhältnis erlaubt → Gut 1 ist "zu teuer". Der Konsument sollte weniger $x_1$ und mehr $x_2$ kaufen, bis $GRS = p_1/p_2 = 2$.`, eq: null },
 ],
 result: `Weniger $x_1$ kaufen: $GRS = 1 < p_1/p_2 = 2$ — Gut 1 subjektiv unterbewertet.`
 },
 {
 text: String.raw`Leite die GRS der CES-Nutzenfunktion $u = (x_1^\rho + x_2^\rho)^{1/\rho}$ her.`,
 steps: [
 { text: `Grenznutzen $MU_1$ (Kettenregel):`, eq: String.raw`$$MU_1 = \frac{1}{\rho}(x_1^\rho + x_2^\rho)^{\frac{1}{\rho}-1} \cdot \rho x_1^{\rho-1} = (x_1^\rho + x_2^\rho)^{\frac{1-\rho}{\rho}} \cdot x_1^{\rho-1}$$` },
 { text: `Analog $MU_2$. GRS als Verhältnis:`, eq: String.raw`$$GRS = \frac{MU_1}{MU_2} = \frac{x_1^{\rho-1}}{x_2^{\rho-1}} = \left(\frac{x_1}{x_2}\right)^{\rho-1} = \left(\frac{x_2}{x_1}\right)^{1-\rho}$$` },
 { text: String.raw`Mit $\sigma = 1/(1-\rho)$:`, eq: String.raw`$$GRS = \left(\frac{x_2}{x_1}\right)^{1/\sigma}$$` },
 ],
 result: String.raw`$GRS = (x_2/x_1)^{1/\sigma}$`
 },
 ]
 },
 lagrange: {
 motivation: 'Die Lagrange-Methode löst das Nutzenmaximierungsproblem unter Budgetbeschränkung systematisch und exakt.',
 theorie: String.raw`
 <div class="section-block">
<h3>Das Verfahren</h3>
<p>Die <strong>Lagrange-Methode</strong> löst Optimierungsprobleme mit Nebenbedingungen. In der Haushaltstheorie: Nutzenmaximierung unter einer Budgetrestriktion. Man erweitert die Zielfunktion um die Nebenbedingung, multipliziert mit einem neuen Parameter $\lambda$ (Lagrange-Multiplikator):</p>
<div class="math-block">$$\mathcal{L}(x_1, x_2, \lambda) = u(x_1, x_2) + \lambda\left[m - p_1 x_1 - p_2 x_2\right]$$</div>
<p>$\mathcal{L}$ ist die Lagrange-Funktion. $\lambda$ ist eine dritte Variable, die im Optimum den Schattenpreis der Restriktion misst.</p>
</div>
<div class="section-block">
<h3>Bedingungen erster Ordnung (FOC)</h3>
<p>Partielle Ableitungen gleich Null setzen:</p>
<div class="math-block">$$\frac{\partial \mathcal{L}}{\partial x_1} = \frac{\partial u}{\partial x_1} - \lambda p_1 = 0 \quad \Rightarrow \quad MU_1 = \lambda p_1$$</div>
<div class="math-block">$$\frac{\partial \mathcal{L}}{\partial x_2} = \frac{\partial u}{\partial x_2} - \lambda p_2 = 0 \quad \Rightarrow \quad MU_2 = \lambda p_2$$</div>
<div class="math-block">$$\frac{\partial \mathcal{L}}{\partial \lambda} = m - p_1 x_1 - p_2 x_2 = 0 \quad \Rightarrow \quad \text{Budgetrestriktion}$$</div>
<p>Drei Gleichungen, drei Unbekannte $(x_1^*, x_2^*, \lambda^*)$.</p>
</div>
<div class="section-block">
<h3>Tangentialbedingung</h3>
<p>Division der ersten beiden FOC liefert die Tangentialbedingung:</p>
<div class="math-block">$$\frac{MU_1}{MU_2} = \frac{p_1}{p_2} \quad \text{(GRS = Preisverhältnis)}$$</div>
<p>Diese Bedingung sagt: Im Optimum ist die subjektive Wertschätzung (GRS) gleich dem Marktpreis. Zusammen mit der Budgetrestriktion ergibt sich ein System von zwei Gleichungen mit zwei Unbekannten.</p>
</div>
<div class="section-block">
<h3>Interpretation von $\lambda$</h3>
<p>Aus den FOC: $\lambda = MU_1/p_1 = MU_2/p_2$. Also ist $\lambda$ der Grenznutzen pro Euro, der im Optimum für jedes Gut gleich ist. Ökonomisch: $\lambda = \partial v/\partial m$ (Grenznutzen des Einkommens).</p>
</div>
<div class="section-block">
<h3>Lösungsrezept</h3>
<p>1. Lagrange-Funktion aufstellen. 2. Drei FOC berechnen. 3. Aus den ersten beiden FOC: $x_2$ als Funktion von $x_1$ (oder umgekehrt) ausdrücken. 4. In die Budgetrestriktion einsetzen und nach $x_1^*$ auflösen. 5. $x_2^*$ und $\lambda^*$ bestimmen.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Dritte FOC nicht vergessen</strong> Die Ableitung nach $\lambda$ liefert die Budgetrestriktion. Sie wird oft vergessen, ist aber essenziell (sonst zu wenige Gleichungen).</div>
<div class="warn-box"><strong>Vorzeichenkonvention</strong> Standardform: $\mathcal{L} = u + \lambda[m - p_1 x_1 - p_2 x_2]$. Alternative: $\mathcal{L} = u - \lambda[p_1 x_1 + p_2 x_2 - m]$. Beide liefern dasselbe Ergebnis, aber $\lambda$ hat dann das entgegengesetzte Vorzeichen.</div>
</div>
`,
 formeln: [
 { label:'Lagrange-Funktion', eq: String.raw`$$\mathcal{L} = u(x_1, x_2) + \lambda(m - p_1 x_1 - p_2 x_2)$$`, desc:'Zielfunktion + λ·Nebenbedingung', variables: { '\\mathcal{L}': 'Lagrange-Funktion', '\\lambda': 'Multiplikator = Grenznutzen des Einkommens', 'm': 'Einkommen', 'p_1,p_2': 'Güterpreise' } },
 { label:'Tangentialbedingung', eq: String.raw`$$\frac{MU_1}{MU_2} = \frac{p_1}{p_2}$$`, desc:'GRS = Preisverhältnis im Optimum', variables: { 'MU_1': 'Grenznutzen Gut 1', 'MU_2': 'Grenznutzen Gut 2', 'p_1': 'Preis Gut 1', 'p_2': 'Preis Gut 2' } },
 { label:'Grenznutzen Einkommen', eq: String.raw`$$\lambda = \frac{MU_1}{p_1} = \frac{MU_2}{p_2}$$`, desc:'Schattenpreis der Budgetrestriktion', variables: { '\\lambda': 'Grenznutzen des Einkommens', 'MU_i': 'Grenznutzen von Gut i', 'p_i': 'Preis von Gut i' } },
 ],
 aufgaben: [
 {
 text: `Maximiere $u(x_1,x_2) = x_1^{1/2} x_2^{1/2}$ unter der Nebenbedingung $2x_1 + 4x_2 = 40$.`,
 steps: [
 { text: `Lagrange-Funktion:`, eq: String.raw`$$\mathcal{L} = x_1^{1/2}x_2^{1/2} + \lambda(40 - 2x_1 - 4x_2)$$` },
 { text: `BEO:`, eq: String.raw`$$\begin{aligned}\frac{\partial \mathcal{L}}{\partial x_1} &= \frac{1}{2}x_1^{-1/2}x_2^{1/2} - 2\lambda = 0\\ \frac{\partial \mathcal{L}}{\partial x_2} &= \frac{1}{2}x_1^{1/2}x_2^{-1/2} - 4\lambda = 0\end{aligned}$$` },
 { text: `Division BEO1/BEO2:`, eq: String.raw`$$\frac{x_2}{x_1} = \frac{2}{4} = \frac{1}{2} \implies x_2 = \frac{x_1}{2}$$` },
 { text: `Einsetzen in Budget:`, eq: String.raw`$$2x_1 + 4 \cdot \frac{x_1}{2} = 40 \implies 4x_1 = 40 \implies x_1^* = 10$$` },
 { text: `Ergebnis:`, eq: String.raw`$$x_1^* = 10, \quad x_2^* = 5, \quad u^* = \sqrt{50} \approx 7{,}07$$` },
 ],
 result: String.raw`$x_1^* = 10,\ x_2^* = 5,\ u^* = \sqrt{50} \approx 7{,}07$`
 },
 {
 text: String.raw`Gegeben $u(x_1,x_2) = x_1 x_2$, $p_1 = 3$, $p_2 = 5$, $m = 90$. Berechne das Optimum über Lagrange und bestimme $\lambda^*$.`,
 steps: [
 { text: `Lagrange-Funktion:`, eq: String.raw`$$\mathcal{L} = x_1 x_2 + \lambda(90 - 3x_1 - 5x_2)$$` },
 { text: `BEO:`, eq: String.raw`$$x_2 = 3\lambda \quad (1) \qquad x_1 = 5\lambda \quad (2) \qquad 3x_1 + 5x_2 = 90 \quad (3)$$` },
 { text: String.raw`Aus (1) und (2): $x_2/x_1 = 3\lambda/(5\lambda) = 3/5$. Einsetzen in (3):`, eq: String.raw`$$3x_1 + 5 \cdot \frac{3}{5}x_1 = 90 \implies 6x_1 = 90 \implies x_1^* = 15$$` },
 { text: `Weiter:`, eq: String.raw`$$x_2^* = \frac{3}{5} \cdot 15 = 9 \qquad \lambda^* = \frac{x_2^*}{3} = \frac{9}{3} = 3$$` },
 { text: `Prüfung Grenznutzen/Preis:`, eq: String.raw`$$\frac{MU_1}{p_1} = \frac{x_2^*}{3} = 3 = \frac{MU_2}{p_2} = \frac{x_1^*}{5} = 3 = \lambda^* \checkmark$$` },
 ],
 result: String.raw`$x_1^*=15,\ x_2^*=9,\ \lambda^*=3$ (Grenznutzen des Einkommens)`
 },
 {
 text: String.raw`Zeige: Bei $u(x_1,x_2) = \ln x_1 + \ln x_2$ (monotone Transformation von $x_1 x_2$) erhält man dasselbe Optimum wie bei $u = x_1 x_2$ unter $p_1 x_1 + p_2 x_2 = m$.`,
 steps: [
 { text: String.raw`BEO für $u = \ln x_1 + \ln x_2$:`, eq: String.raw`$$\begin{aligned}\frac{\partial \mathcal{L}}{\partial x_1} &= \frac{1}{x_1} - \lambda p_1 = 0 \implies \lambda = \frac{1}{p_1 x_1}\\ \frac{\partial \mathcal{L}}{\partial x_2} &= \frac{1}{x_2} - \lambda p_2 = 0 \implies \lambda = \frac{1}{p_2 x_2}\end{aligned}$$` },
 { text: `Gleichsetzen: $p_1 x_1 = p_2 x_2$. Mit Budget: $p_1 x_1 + p_2 x_2 = m$:`, eq: String.raw`$$2 p_1 x_1 = m \implies x_1^* = \frac{m}{2p_1} \qquad x_2^* = \frac{m}{2p_2}$$` },
 { text: String.raw`Dasselbe Ergebnis wie bei $u = x_1 x_2$ (Cobb-Douglas mit $\alpha = 0{,}5$). `, eq: null },
 ],
 result: `Gleiche Nachfrage: $x_i^* = m/(2p_i)$ — monotone Transformationen ändern das Optimum nicht.`
 },
 {
 text: `Maximiere $u(x_1,x_2,x_3) = x_1 x_2 x_3$ unter $p_1 x_1 + p_2 x_2 + p_3 x_3 = m$. Bestimme die Nachfragen.`,
 steps: [
 { text: `BEO:`, eq: String.raw`$$\frac{x_2 x_3}{p_1} = \frac{x_1 x_3}{p_2} = \frac{x_1 x_2}{p_3} = \lambda$$` },
 { text: `Aus BEO1 = BEO2: $p_2 x_2 = p_1 x_1$. Aus BEO1 = BEO3: $p_3 x_3 = p_1 x_1$.`, eq: null },
 { text: `Alle Ausgaben gleich. Budget: $3 p_1 x_1 = m$:`, eq: String.raw`$$x_1^* = \frac{m}{3p_1}, \quad x_2^* = \frac{m}{3p_2}, \quad x_3^* = \frac{m}{3p_3}$$` },
 { text: `Jedes Gut bekommt Budgetanteil $1/3$ — allgemeine Regel für $n$-Güter Cobb-Douglas.`, eq: null },
 ],
 result: `$x_i^* = m/(3p_i)$ — jedes der drei Güter bekommt ein Drittel des Budgets`
 },
 ]
 },
 cobbd: {
 motivation: 'Die Cobb-Douglas-Funktion erlaubt geschlossene Nachfragelösungen und zeigt konstante Budgetanteile.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p>Die <strong>Cobb-Douglas-Nutzenfunktion</strong> ist eine der wichtigsten Nutzenfunktionen der Mikroökonomik. Sie modelliert Präferenzen, bei denen der Haushalt stets konstante Einkommensanteile für jedes Gut ausgibt:</p>
<div class="math-block">$$u(x_1, x_2) = x_1^\alpha\, x_2^{1-\alpha} \qquad 0 < \alpha < 1$$</div>
<p>Der Parameter $\alpha$ bestimmt die relative Bedeutung von Gut 1: Je größer $\alpha$, desto wichtiger ist Gut 1 für den Haushalt. Der Ausgabenanteil von Gut 1 ist exakt $\alpha$, der von Gut 2 ist $(1-\alpha)$.</p>
</div>
<div class="section-block">
<h3>Grenznutzen und GRS</h3>
<div class="math-block">$$MU_1 = \alpha\, x_1^{\alpha-1}\, x_2^{1-\alpha} \qquad MU_2 = (1-\alpha)\, x_1^\alpha\, x_2^{-\alpha}$$</div>
<div class="math-block">$$GRS = \frac{MU_1}{MU_2} = \frac{\alpha}{1-\alpha}\cdot\frac{x_2}{x_1}$$</div>
<p>Die GRS hängt nur vom Mengenverhältnis $x_2/x_1$ ab und ist abnehmend (konvexe Indifferenzkurven). Entlang einer IK: Je mehr $x_1$ konsumiert wird, desto weniger $x_2$ ist der Haushalt bereit, dafür aufzugeben.</p>
</div>
<div class="section-block">
<h3>Marshallsche Nachfrage</h3>
<p>Die optimale Wahl bei Preisen $p_1, p_2$ und Einkommen $m$:</p>
<div class="math-block">$$x_1^* = \frac{\alpha\, m}{p_1} \qquad x_2^* = \frac{(1-\alpha)\, m}{p_2}$$</div>
<p>Eigenschaften: (1) Linear steigend im Einkommen $m$. (2) Fallend im eigenen Preis. (3) Unabhängig vom Preis des anderen Gutes (Kreuzpreiseffekt = 0 bei Marshallscher NF). (4) Konstante Ausgabenanteile: $p_1 x_1^*/m = \alpha$.</p>
</div>
<div class="section-block">
<h3>Äquivalente Darstellungen</h3>
<p>Da Nutzen ordinal ist, repräsentieren folgende Funktionen dieselben Präferenzen:</p>
<div class="math-block">$$v = \alpha \ln x_1 + (1-\alpha)\ln x_2 \quad \text{(logarithmische Form)}$$</div>
<p>Die logarithmische Form ist oft rechnerisch einfacher, da aus dem Produkt eine Summe wird.</p>
<p>Allgemeiner: $u = x_1^a x_2^b$ mit $a, b > 0$ ist ebenfalls CD. Man setzt $\alpha = a/(a+b)$, sodass der Exponent auf 1 normiert wird.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Exponent bei $MU_2$</strong> $MU_2$ hat den Exponenten $(1-\alpha)$ für $x_1$ und $(-\alpha)$ für $x_2$, nicht umgekehrt. Häufig verwechselt.</div>
<div class="warn-box"><strong>Kreuzpreiselastizität ist nicht null</strong> Bei der Marshallschen Nachfrage ist die Kreuzpreiselastizität zwar 0, aber bei der Hicksschen Nachfrage ist sie positiv (Brutto-unabhängig, aber netto Substitute).</div>
</div>
`,
 formeln: [
 { label:'CD-Nutzenfunktion', eq: String.raw`$$u(x_1, x_2) = x_1^\alpha \cdot x_2^{1-\alpha}, \quad 0 < \alpha < 1$$`, desc:'0 < α < 1', variables: { '\\alpha': 'Budgetanteil Gut 1 (0 < α < 1)', 'x_1': 'Menge Gut 1', 'x_2': 'Menge Gut 2' } },
 { label:'Nachfrage x₁*', eq: String.raw`$$x_1^* = \frac{\alpha m}{p_1}$$`, desc:'Konstanter Budgetanteil α', variables: { 'x_1^*': 'Optimale Menge Gut 1', 'b': 'Koeffizient Gut 2', 'm': 'Einkommen', 'p_1': 'Preis Gut 1', 'p_2': 'Preis Gut 2', 'a': 'Koeffizient Gut 1' } },
 { label:'Nachfrage x₂*', eq: String.raw`$$x_2^* = \frac{(1-\alpha) m}{p_2}$$`, desc:'Konstanter Budgetanteil (1−α)', variables: { 'x_2^*': 'Optimale Menge Gut 2', '\\alpha': 'Budgetanteil Gut 1', 'm': 'Einkommen', 'p_2': 'Preis Gut 2' } },
 ],
 aufgaben: [
  {
  text: String.raw`Gegeben: $u(x_1,x_2) = x_1^{0{,}4} \cdot x_2^{0{,}6}$, $m = 200\,\text{€}$, $p_1 = 5\,\text{€}$, $p_2 = 4\,\text{€}$. Berechne das optimale Konsumbündel und die Ausgaben für jedes Gut.`,
  steps: [
  { text: String.raw`$\alpha = 0{,}4$. Nachfragefunktionen:`, eq: String.raw`$$x_1^* = \frac{\alpha m}{p_1} = \frac{0{,}4 \cdot 200}{5} = 16 \qquad x_2^* = \frac{(1-\alpha)m}{p_2} = \frac{0{,}6 \cdot 200}{4} = 30$$` },
  { text: `Ausgaben prüfen:`, eq: String.raw`$$p_1 x_1^* = 80 = 0{,}4 \cdot 200 \checkmark \qquad p_2 x_2^* = 120 = 0{,}6 \cdot 200 \checkmark$$` },
  { text: `Nutzenberechnung:`, eq: String.raw`$$u^* = 16^{0{,}4} \cdot 30^{0{,}6} \approx 25{,}3$$` },
  ],
  result: String.raw`$x_1^* = 16$, $x_2^* = 30$, Ausgaben: $80\,\text{€}$ und $120\,\text{€}$`
  },
  {
  text: String.raw`Gegeben $u = x_1^{1/2} x_2^{1/2}$ (CD mit $\alpha = 1/2$). Berechne die GRS im Optimum und zeige, dass sie dem Preisverhältnis $p_1/p_2 = 3/2$ entspricht.`,
  steps: [
  { text: String.raw`Nachfrage: $x_1^* = m/(2p_1)$, $x_2^* = m/(2p_2)$. Bei $p_1=3, p_2=2, m=60$: $x_1^*=10$, $x_2^*=15$.`, eq: null },
  { text: `GRS im Optimum berechnen:`, eq: String.raw`$$GRS = \frac{MU_1}{MU_2} = \frac{x_2^*}{x_1^*} = \frac{15}{10} = \frac{3}{2}$$` },
  { text: String.raw`Prüfung: $p_1/p_2 = 3/2 = GRS$ ✓ — Tangentialbedingung erfüllt.`, eq: null },
  ],
  result: String.raw`Im Optimum: GRS = $x_2^*/x_1^* = 3/2 = p_1/p_2$ ✓`
  },
  {
  text: String.raw`Allgemeine Form: $u = x_1^a x_2^b$ mit $a,b>0$. Zeige, dass die Budgetanteile konstant sind: $p_1 x_1^*/m = a/(a+b)$.`,
  steps: [
  { text: `Normierte Form: $\alpha = a/(a+b)$. Marshallsche Nachfrage:`, eq: String.raw`$$x_1^* = \frac{a}{a+b}\cdot\frac{m}{p_1} \qquad x_2^* = \frac{b}{a+b}\cdot\frac{m}{p_2}$$` },
  { text: String.raw`Ausgabenanteil für Gut 1:`, eq: String.raw`$$\frac{p_1 x_1^*}{m} = \frac{p_1}{m}\cdot\frac{a\,m}{(a+b)p_1} = \frac{a}{a+b} = \text{const}$$` },
  { text: String.raw`Folgerung: CD-Präferenzen implizieren feste Budgetanteile, unabhängig von Preisen und Einkommen.`, eq: null },
  ],
  result: String.raw`Budgetanteil Gut 1 = $a/(a+b)$ — konstant, unabhängig von $p_1, p_2, m$`
  },
  ]
 },
 ces_u: {
 motivation: 'Die CES-Funktion verallgemeinert CD und erlaubt beliebige Substitutionselastizitäten σ ∈ [0, ∞).',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p>Die <strong>CES-Nutzenfunktion</strong> (Constant Elasticity of Substitution) ist eine flexible Nutzenfunktion, die verschiedene Substitutionsmuster als Spezialfälle enthält:</p>
<div class="math-block">$$u(x_1, x_2) = \left(\alpha\, x_1^\rho + (1-\alpha)\, x_2^\rho\right)^{1/\rho}$$</div>
<p>Die Parameter haben folgende Bedeutung:</p>
<p><strong>$\alpha \in (0,1)$:</strong> Gewichtungsparameter, der die relative Präferenz für Gut 1 bestimmt. Je größer $\alpha$, desto wichtiger ist Gut 1 für den Haushalt.</p>
<p><strong>$\rho \in (-\infty, 1]$, $\rho \neq 0$:</strong> Substitutionsparameter, der die Krümmung der Indifferenzkurven bestimmt. Er hängt direkt mit der Substitutionselastizität $\sigma$ zusammen.</p>
</div>
<div class="section-block">
<h3>Substitutionselastizität $\sigma$</h3>
<p>Die <strong>Substitutionselastizität</strong> misst, wie leicht der Haushalt zwischen den Gütern substituieren kann, wenn sich die relative Bewertung (GRS) ändert:</p>
<div class="math-block">$$\sigma = \frac{1}{1 - \rho}$$</div>
<p>$\sigma$ gibt die prozentuale Änderung des Mengenverhältnisses $x_2/x_1$ bei einer 1%igen Änderung der GRS an. Höheres $\sigma$ bedeutet leichtere Substituierbarkeit.</p>
</div>
<div class="section-block">
<h3>Spezialfälle</h3>
<div class="info-grid">
<div class="info-card"><div class="label">$\rho = 1$ ($\sigma \to \infty$)</div><div class="value">Perfekte Substitute</div><p>$u = \alpha x_1 + (1-\alpha) x_2$. Lineare IK, Randlösungen.</p></div>
<div class="info-card"><div class="label">$\rho \to 0$ ($\sigma = 1$)</div><div class="value">Cobb-Douglas</div><p>$u = x_1^\alpha x_2^{1-\alpha}$. Konstante Ausgabenanteile.</p></div>
<div class="info-card"><div class="label">$\rho \to -\infty$ ($\sigma \to 0$)</div><div class="value">Perfekte Komplemente</div><p>$u = \min\{\alpha x_1, (1-\alpha) x_2\}$. L-förmige IK.</p></div>
</div>
<p>Die CES-Funktion vereint also die drei Grundtypen in einer parametrischen Familie. Durch Variation von $\rho$ (bzw. $\sigma$) kann der Grad der Substituierbarkeit stufenlos eingestellt werden.</p>
</div>
<div class="section-block">
<h3>GRS der CES-Funktion</h3>
<div class="math-block">$$GRS = \frac{\alpha}{1-\alpha}\left(\frac{x_2}{x_1}\right)^{1-\rho}$$</div>
<p>Die GRS hängt vom Mengenverhältnis $x_2/x_1$ und dem Substitutionsparameter $\rho$ ab. Je größer $\rho$ (näher an 1), desto weniger reagiert die GRS auf Mengenänderungen.</p>
</div>
<div class="section-block">
<h3>Marshallsche Nachfrage</h3>
<div class="math-block">$$x_i^* = \frac{\alpha_i^{\sigma}\, p_i^{-\sigma}}{\sum_j \alpha_j^{\sigma}\, p_j^{1-\sigma}} \cdot m$$</div>
<p>Für $\sigma > 1$ (Brutto-Substitute) steigt die Nachfrage nach einem Gut, wenn der Preis des anderen steigt. Für $\sigma < 1$ (Brutto-Komplemente) sinkt sie.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Vorzeichen von $\rho$</strong> Für $\rho < 0$ gilt $\sigma < 1$ (schwache Substituierbarkeit). Für $\rho > 0$ gilt $\sigma > 1$ (starke Substituierbarkeit). Verwechslungsgefahr: Höheres $\rho$ bedeutet höheres $\sigma$, nicht umgekehrt.</div>
</div>
`,
 formeln: [
 { label:'CES Nutzenfunktion', eq: String.raw`$$u(x_1, x_2) = \left(x_1^\rho + x_2^\rho\right)^{1/\rho}, \quad \rho < 1$$`, desc:'ρ < 1, symmetrische Form', variables: { '\\rho': 'Substitutionsparameter (ρ<1)', 'x_1,x_2': 'Gütermengen' } },
 { label:'Substitutionselastizität', eq: String.raw`$$\sigma = \frac{1}{1-\rho}$$`, desc:'Maß für Substituierbarkeit', variables: { '\\sigma': 'Substitutionselastizität', '\\rho': 'Substitutionsparameter' } },
 { label:'CES Nachfrage', eq: String.raw`$$x_i^* = \frac{p_i^{-\sigma} m}{p_1^{1-\sigma} + p_2^{1-\sigma}}$$`, desc:'Allgemeine Form', variables: { 'x_i^*': 'Optimale Menge Gut i', 'p_i': 'Preis Gut i', '\\sigma': 'Substitutionselastizität', 'm': 'Einkommen' } },
 ],
 aufgaben: [
 {
 text: String.raw`Gegeben $\sigma = 2$ ($\rho = 1/2$). Brutto-Substitute? Berechne $x_1^*$ für $p_1=2$, $p_2=4$, $m=100$.`,
 steps: [
 { text: String.raw`$\sigma = 2 >1 \implies$ Brutto-Substitute ($\partial x_1/\partial p_2 >0$).`, eq: null },
 { text: `CES-Nachfrage:`, eq: String.raw`$$x_1^* = \frac{p_1^{-\sigma}\, m}{p_1^{1-\sigma} + p_2^{1-\sigma}}$$` },
 { text: String.raw`Nenner ($1-\sigma = -1$):`, eq: String.raw`$$2^{-1} + 4^{-1} = 0{,}5 + 0{,}25 = 0{,}75$$` },
 { text: `Nachfrage:`, eq: String.raw`$$x_1^* = \frac{2^{-2} \cdot 100}{0{,}75} = \frac{25}{0{,}75} = \frac{100}{3} \approx 33{,}3$$` },
 ],
 result: String.raw`$x_1^* \approx 33{,}3$; Brutto-Substitute ($\sigma=2>1$)`
 },
 {
 text: String.raw`Berechne $\sigma$ aus $\rho = -1$ und interpretiere die Spezialform der CES-Nutzenfunktion.`,
 steps: [
 { text: `Substitutionselastizität:`, eq: String.raw`$$\sigma = \frac{1}{1-\rho} = \frac{1}{1-(-1)} = \frac{1}{2}$$` },
 { text: String.raw`$\sigma = 0{,}5 < 1 \implies$ Brutto-Komplemente.`, eq: null },
 { text: String.raw`Nutzenfunction mit $\rho = -1$:`, eq: String.raw`$$u = (x_1^{-1} + x_2^{-1})^{-1} = \frac{x_1 x_2}{x_1 + x_2}$$` },
 { text: String.raw`Für $\sigma \to 0$ ($\rho \to -\infty$): CES nähert sich Leontief an.`, eq: null },
 ],
 result: String.raw`$\sigma = 1/2$ — Brutto-Komplemente; Nutzenfunktion: $u = x_1 x_2/(x_1+x_2)$`
 },
 {
 text: String.raw`Vergleiche CES und Cobb-Douglas: Zeige, dass für $\rho \to 0$ (also $\sigma \to 1$) die CES-Funktion gegen eine CD-Funktion konvergiert (heuristisch via L'Hôpital).`,
 steps: [
 { text: String.raw`Nehme symmetrische CES $u = (x_1^\rho + x_2^\rho)^{1/\rho}$. Betrachte $\ln u = \ln(x_1^\rho + x_2^\rho)/\rho$.`, eq: null },
 { text: String.raw`Für $\rho \to 0$ ist dies ein $0/0$-Ausdruck. Ergebnis via L'Hôpital:`, eq: String.raw`$$\lim_{\rho\to 0} \frac{\ln(x_1^\rho+x_2^\rho)}{\rho} = \frac{\ln x_1 + \ln x_2}{2} = \ln\sqrt{x_1 x_2}$$` },
 { text: String.raw`Also $u \to e^{\ln\sqrt{x_1 x_2}} = \sqrt{x_1 x_2}$ — das ist Cobb-Douglas mit $\alpha = 1/2$.`, eq: null },
 ],
 result: String.raw`CES mit $\rho \to 0$: $u \to \sqrt{x_1 x_2}$ — Cobb-Douglas-Spezialfall bestätigt.`
 },
 ]
 },
 hausopt: {
 motivation: 'Das Haushaltsoptimum ist der Punkt, an dem der höchste erreichbare Nutzen unter der Budgetbeschränkung realisiert wird.',
 theorie: String.raw`
 <div class="section-block">
<h3>Das Optimierungsproblem</h3>
<p>Der Haushalt maximiert seinen Nutzen $u(x_1, x_2)$ unter der Budgetrestriktion. Das <strong>Haushaltsoptimum</strong> ist das Güterbündel $(x_1^*, x_2^*)$, das den höchsten erreichbaren Nutzen bei gegebenem Einkommen und Preisen liefert:</p>
<div class="math-block">$$\max_{x_1, x_2}\; u(x_1, x_2) \quad \text{u.d.N.}\quad p_1 x_1 + p_2 x_2 \leq m$$</div>
<p>Dabei sind $p_1, p_2$ die Güterpreise und $m$ das verfügbare Einkommen.</p>
</div>
<div class="section-block">
<h3>Tangentialbedingung</h3>
<p>Bei einer inneren Lösung (beide Güter werden positiv konsumiert) muss die Indifferenzkurve die Budgetgerade tangieren. Die Bedingung lautet:</p>
<div class="math-block">$$GRS = \frac{MU_1}{MU_2} = \frac{p_1}{p_2}$$</div>
<p>Die <strong>subjektive Wertschätzung</strong> (GRS: wie viel Gut 2 der Haushalt für eine Einheit Gut 1 aufzugeben bereit ist) muss gleich dem <strong>objektiven Marktpreis</strong> (Preisverhältnis: wie viel Gut 2 der Markt für eine Einheit Gut 1 verlangt) sein.</p>
<p>Äquivalent: $MU_1/p_1 = MU_2/p_2 = \lambda$. Der Grenznutzen pro ausgegebenem Euro muss für alle Güter gleich sein. Dieser gemeinsame Wert ist der Lagrange-Multiplikator $\lambda$.</p>
</div>
<div class="section-block">
<h3>Grafische Interpretation</h3>
<p>Im $(x_1, x_2)$-Diagramm: Die Budgetgerade hat Steigung $-p_1/p_2$. Indifferenzkurven haben Steigung $-GRS$. Im Optimum berührt die höchstmögliche IK die Budgetgerade genau in einem Punkt (Tangentialpunkt). Kein Teil der IK liegt innerhalb der Budgetmenge (wäre sonst nicht optimal).</p>
</div>
<div class="section-block">
<h3>Beispiel: Cobb-Douglas</h3>
<p>Für $u = x_1^\alpha x_2^{1-\alpha}$:</p>
<div class="math-block">$$x_1^* = \frac{\alpha\, m}{p_1} \qquad x_2^* = \frac{(1-\alpha)\, m}{p_2}$$</div>
<p>Der Haushalt gibt stets den Anteil $\alpha$ seines Einkommens für Gut 1 und $(1-\alpha)$ für Gut 2 aus. Bei $\alpha = 0{,}5$, $m = 100$, $p_1 = 4$, $p_2 = 5$: $x_1^* = 12{,}5$, $x_2^* = 10$, $u^* = 125$.</p>
</div>
<div class="section-block">
<h3>Randlösungen</h3>
<p>Wenn die Tangentialbedingung keine innere Lösung hat (z.B. bei perfekten Substituten), konsumiert der Haushalt nur eines der beiden Güter. Man vergleicht dann den Nutzen der Randpunkte $(m/p_1, 0)$ und $(0, m/p_2)$ direkt.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>GRS = Preisverhältnis, nicht Steigung</strong> Die Tangentialbedingung lautet $MU_1/MU_2 = p_1/p_2$, nicht $= -p_1/p_2$. Die Steigungen sind zwar negativ, aber die GRS wird als positiver Betrag verwendet.</div>
<div class="warn-box"><strong>Budgetrestriktion nicht vergessen</strong> Die Tangentialbedingung allein reicht nicht. Sie muss zusammen mit $p_1 x_1 + p_2 x_2 = m$ gelöst werden (zwei Gleichungen, zwei Unbekannte).</div>
</div>
`,
 formeln: [
 { label:'Tangentialbedingung', eq: String.raw`$$\frac{MU_1}{MU_2} = \frac{p_1}{p_2}$$`, desc:'GRS = relatives Preisverhältnis', variables: { 'MU_1': 'Grenznutzen Gut 1', 'MU_2': 'Grenznutzen Gut 2', 'p_1': 'Preis Gut 1', 'p_2': 'Preis Gut 2' } },
 { label:'Budgetgleichung', eq: String.raw`$$p_1 x_1 + p_2 x_2 = m$$`, desc:'2. Gleichung zur Bestimmung des Optimums', variables: { 'p_1,p_2': 'Güterpreise', 'x_1,x_2': 'Optimale Mengen', 'm': 'Einkommen' } },
 ],
 aufgaben: [
 {
 text: `Finde das Haushaltsoptimum für $u(x_1,x_2) = x_1 x_2$, $p_1 = 3$, $p_2 = 6$, $m = 90$.`,
 steps: [
 { text: `Tangentialbedingung (GRS = Preisverhältnis):`, eq: String.raw`$$\frac{MU_1}{MU_2} = \frac{x_2}{x_1} = \frac{p_1}{p_2} = \frac{3}{6} = \frac{1}{2} \implies x_2 = \frac{x_1}{2}$$` },
 { text: `Budgetgleichung:`, eq: String.raw`$$3x_1 + 6 \cdot \frac{x_1}{2} = 90 \implies 6x_1 = 90 \implies x_1^* = 15$$` },
 { text: `Ergebnis:`, eq: String.raw`$$x_2^* = 7{,}5 \qquad u^* = 15 \cdot 7{,}5 = 112{,}5$$` },
 ],
 result: `$x_1^* = 15$, $x_2^* = 7{,}5$, $u^* = 112{,}5$`
 },
 {
 text: String.raw`Für $u = \sqrt{x_1} + \sqrt{x_2}$ (konkave Nutzenfunktion): Bestimme das Optimum bei $p_1 = 1$, $p_2 = 4$, $m = 20$.`,
 steps: [
 { text: `Grenznutzen:`, eq: String.raw`$$MU_1 = \frac{1}{2\sqrt{x_1}} \qquad MU_2 = \frac{1}{2\sqrt{x_2}}$$` },
 { text: `Tangentialbedingung:`, eq: String.raw`$$\frac{MU_1}{MU_2} = \frac{\sqrt{x_2}}{\sqrt{x_1}} = \frac{p_1}{p_2} = \frac{1}{4} \implies \frac{\sqrt{x_2}}{\sqrt{x_1}} = \frac{1}{4}$$` },
 { text: `Daraus: $x_2 = x_1/16$. Budget:`, eq: String.raw`$$x_1 + 4 \cdot \frac{x_1}{16} = 20 \implies \frac{5}{4}x_1 = 20 \implies x_1^* = 16$$` },
 { text: `Ergebnis:`, eq: String.raw`$$x_2^* = 16/16 = 1 \qquad u^* = \sqrt{16} + \sqrt{1} = 5$$` },
 ],
 result: `$x_1^* = 16$, $x_2^* = 1$, $u^* = 5$`
 },
 {
 text: String.raw`Zeige: Im Haushaltsoptimum ist der Grenznutzen pro ausgegebenem Euro für alle Güter gleich ($= \lambda$).`,
 steps: [
 { text: `BEO des Lagrange-Ansatzes:`, eq: String.raw`$$MU_1 = \lambda p_1 \quad \text{und} \quad MU_2 = \lambda p_2$$` },
 { text: `Umstellen:`, eq: String.raw`$$\frac{MU_1}{p_1} = \lambda \qquad \frac{MU_2}{p_2} = \lambda$$` },
 { text: `Also gilt im Optimum:`, eq: String.raw`$$\frac{MU_1}{p_1} = \frac{MU_2}{p_2} = \lambda$$` },
 { text: `Ökonomisch: Würde $MU_1/p_1 >MU_2/p_2$ gelten, lohnte es sich, einen Euro von Gut 2 zu Gut 1 umzuschichten (höherer Nutzengewinn).`, eq: null },
 ],
 result: String.raw`$MU_1/p_1 = MU_2/p_2 = \lambda$ — optimale Ressourcenallokation`
 },
 {
 text: String.raw`Bestimme das Optimum bei quasi-linearen Präferenzen $u(x_1,x_2) = \ln x_1 + x_2$, $p_1 = 2$, $p_2 = 1$, $m = 10$.`,
 steps: [
 { text: `Tangentialbedingung:`, eq: String.raw`$$\frac{MU_1}{MU_2} = \frac{1/x_1}{1} = \frac{p_1}{p_2} = 2 \implies x_1^* = \frac{1}{2}$$` },
 { text: `Budget:`, eq: String.raw`$$2 \cdot \frac{1}{2} + x_2 = 10 \implies x_2^* = 9$$` },
 { text: `Eigenschaft quasi-linearer Präferenzen: $x_1^* = 1/2$ ist einkommensunabhängig! (Kein Einkommenseffekt für Gut 1)`, eq: null },
 { text: `Gesamtes Mehreinkommen fließt in Gut 2. Einkommenselastizität von $x_1$ = 0.`, eq: null },
 ],
 result: `$x_1^* = 1/2$ (einkommensunabhängig), $x_2^* = 9$`
 },
 ]
 },
 psubst: {
 motivation: 'Perfekte Substitute modellieren Güter, die in festem Verhältnis austauschbar sind. Die Lösung liegt stets an einer Ecke der Budgetgeraden.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p><strong>Perfekte Substitute</strong> sind Güter, die der Haushalt als vollständig austauschbar betrachtet. Die Nutzenfunktion ist linear:</p>
<div class="math-block">$$u(x_1, x_2) = a\, x_1 + b\, x_2$$</div>
<p>Dabei gibt $a$ den Grenznutzen von Gut 1 und $b$ den Grenznutzen von Gut 2 an. Beide Grenznutzen sind konstant (nicht abnehmend). Die Grenzrate der Substitution ist ebenfalls konstant:</p>
<div class="math-block">$$GRS = \frac{MU_1}{MU_2} = \frac{a}{b} = \text{const}$$</div>
</div>
<div class="section-block">
<h3>Indifferenzkurven</h3>
<p>Die Indifferenzkurven sind <strong>Geraden</strong> mit Steigung $-a/b$. Dies bedeutet: Der Haushalt ist bereit, immer genau $a/b$ Einheiten von Gut 2 für eine Einheit von Gut 1 herzugeben, unabhängig von der aktuellen Konsummenge.</p>
</div>
<div class="section-block">
<h3>Optimale Wahl: Randlösungen</h3>
<p>Da die GRS konstant ist, gibt es drei Fälle:</p>
<div class="math-block">$$x_1^* = \begin{cases} m/p_1 & \text{falls } a/b > p_1/p_2 \\ 0 & \text{falls } a/b < p_1/p_2 \\ \text{beliebig auf BG} & \text{falls } a/b = p_1/p_2 \end{cases}$$</div>
<p>Wenn die subjektive Wertschätzung ($a/b$) höher ist als der Marktpreis ($p_1/p_2$), kauft der Haushalt nur Gut 1 (Randlösung). Wenn die Wertschätzung niedriger ist, kauft er nur Gut 2. Nur bei exakter Gleichheit ist jede Kombination auf der Budgetgeraden optimal.</p>
</div>
<div class="section-block">
<h3>Substitutionselastizität</h3>
<p>Die Substitutionselastizität ist $\sigma = \infty$: Schon eine minimale Preisänderung kann zu einem vollständigen Wechsel von einem Gut zum anderen führen.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Lagrange funktioniert nicht zuverlässig</strong> Bei perfekten Substituten liegt das Optimum typischerweise am Rand. Die Tangentialbedingung $GRS = p_1/p_2$ hat im Allgemeinen keine innere Lösung.</div>
<div class="warn-box"><strong>Gerade, nicht konvexe Indifferenzkurven</strong> Indifferenzkurven bei perfekten Substituten sind gerade Linien, nicht konvex zum Ursprung. Strenge Konvexität der Präferenzen ist verletzt.</div>
</div>
`,
 formeln: [
 { label:'Perfekte Substitute', eq: String.raw`$$u(x_1, x_2) = a x_1 + b x_2, \quad a, b > 0$$`, desc:'Lineare Nutzenfunktion', variables: { 'a': 'Nutzenbeitrag Gut 1 je Einheit', 'b': 'Nutzenbeitrag Gut 2 je Einheit', 'x_1,x_2': 'Gütermengen' } },
 { label:'GRS', eq: String.raw`$$GRS = \frac{a}{b} = \text{konstant}$$`, desc:'Unabhängig von Mengen', variables: { 'a': 'Grenznutzen Gut 1', 'b': 'Grenznutzen Gut 2', 'GRS': 'Grenzrate der Substitution (konstant)' } },
 ],
 aufgaben: [
 {
 text: `$u(x_1,x_2) = 3x_1 + 2x_2$. (a) $p_1=6$, $p_2=3$, $m=60$. (b) $p_1=3$, $p_2=2$, $m=60$. Bestimme das Optimum.`,
 steps: [
 { text: `$GRS = a/b = 3/2 = 1{,}5$ (konstant!)`, eq: null },
 { text: `(a) $p_1/p_2 = 2 >GRS = 1{,}5$: Gut 2 relativ billiger:`, eq: String.raw`$$x_1^* = 0 \qquad x_2^* = m/p_2 = 20$$` },
 { text: `(b) $p_1/p_2 = 3/2 = GRS = 1{,}5$: Jede Kombination auf der Budgetgeraden ist optimal.`, eq: String.raw`$$x_2 = 30 - \frac{3}{2}x_1 \quad \text{für } x_1 \in [0, 20]$$` },
 ],
 result: `(a) $(0, 20)$; (b) Unendlich viele Optima auf der Budgetgeraden`
 },
 {
 text: String.raw`Preisänderung bei perfekten Substituten: $u = x_1 + 2x_2$, $p_2=3$, $m=30$. (a) Was wird konsumiert, wenn $p_1=5$? (b) Und wenn $p_1=7$?`,
 steps: [
 { text: String.raw`$GRS = MU_1/MU_2 = 1/2$ konstant. Vergleiche mit $p_1/p_2 = p_1/3$.`, eq: null },
 { text: String.raw`(a) $p_1=5$: $p_1/p_2 = 5/3 \approx 1{,}67 > GRS = 0{,}5$ → Gut 2 billiger pro Nutzeinheit:`, eq: String.raw`$$x_1^* = 0,\quad x_2^* = m/p_2 = 10$$` },
 { text: String.raw`(b) $p_1=7$: $p_1/p_2 = 7/3 \approx 2{,}33 > 0{,}5$ → weiterhin nur Gut 2:`, eq: String.raw`$$x_1^* = 0,\quad x_2^* = 10 \quad (\text{unverändert!})$$` },
 { text: String.raw`Fazit: Bei $GRS < p_1/p_2$ bleibt Gut 2 optimal, solange GRS konstant ist.`, eq: null },
 ],
 result: String.raw`Beide Male: $x_1^*=0$, $x_2^*=10$ — Gut 2 dominiert in beiden Szenarien`
 },
 {
 text: `Drei Güter: $u = 2x_1 + 3x_2 + x_3$, $p_1=1$, $p_2=2$, $p_3=1$, $m=10$. Welches Gut/Welche Güter werden gekauft?`,
 steps: [
 { text: `Nutzen pro Euro berechnen:`, eq: String.raw`$$\frac{a_1}{p_1} = \frac{2}{1} = 2 \qquad \frac{a_2}{p_2} = \frac{3}{2} = 1{,}5 \qquad \frac{a_3}{p_3} = \frac{1}{1} = 1$$` },
 { text: `Gut 1 hat höchstes Nutzenverhältnis → alles Geld für Gut 1:`, eq: String.raw`$$x_1^* = m/p_1 = 10 \qquad x_2^* = x_3^* = 0$$` },
 { text: `Allgemeine Regel: Bei perfekten Substituten immer nur das Gut mit dem höchsten $a_i/p_i$ kaufen.`, eq: null },
 ],
 result: `$x_1^* = 10$, alle anderen 0 (höchster Nutzen pro Euro für Gut 1)`
 },
 ]
 },
 pkomp: {
 motivation: 'Perfekte Komplemente (Leontief) modellieren Güter, die nur zusammen genutzt werden. Das Optimum liegt stets im Knick der L-förmigen Indifferenzkurven.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p><strong>Perfekte Komplemente</strong> (Leontief-Präferenzen) beschreiben Situationen, in denen zwei Güter nur in einem festen Verhältnis konsumiert werden. Die Nutzenfunktion lautet:</p>
<div class="math-block">$$u(x_1, x_2) = \min\{a\, x_1,\; b\, x_2\}$$</div>
<p>Dabei geben $a$ und $b$ das Konsumverhältnis an. Der Nutzen wird durch das Gut begrenzt, das relativ zum Bedarf knapper ist. Zusätzliche Einheiten eines Gutes ohne entsprechende Einheiten des anderen Gutes bringen keinen Mehrnutzen.</p>
</div>
<div class="section-block">
<h3>Indifferenzkurven</h3>
<p>Die Indifferenzkurven sind <strong>L-förmig</strong> (rechtwinklig). Der Knickpunkt liegt auf dem Strahl $a\,x_1 = b\,x_2$, also:</p>
<div class="math-block">$$\frac{x_2}{x_1} = \frac{a}{b} \quad \text{(Knickpunktkurve)}$$</div>
<p>Beispiel: Bei $u = \min\{x_1, 2x_2\}$ liegt der Knick bei $x_1 = 2x_2$, also braucht man für jede Einheit $x_2$ genau zwei Einheiten $x_1$ (z.B. 2 Schuhe pro Paar).</p>
</div>
<div class="section-block">
<h3>Optimale Wahl</h3>
<p>Im Optimum liegt der Haushalt immer auf dem Knickpunkt (alles andere verschwendet Einkommen):</p>
<div class="math-block">$$a\,x_1^* = b\,x_2^* \quad \text{und} \quad p_1 x_1^* + p_2 x_2^* = m$$</div>
<p>Auflösung liefert die Nachfragefunktionen:</p>
<div class="math-block">$$x_1^* = \frac{b\, m}{b\, p_1 + a\, p_2} \qquad x_2^* = \frac{a\, m}{b\, p_1 + a\, p_2}$$</div>
<p>Die Tangentialbedingung (GRS = Preisverhältnis) ist hier nicht anwendbar, da die Nutzenfunktion im Knickpunkt nicht differenzierbar ist.</p>
</div>
<div class="section-block">
<h3>Substitutionselastizität</h3>
<p>Die Substitutionselastizität ist $\sigma = 0$: Es gibt keinerlei Substitutionsmöglichkeit zwischen den Gütern. Eine Preisänderung bewirkt keinen Substitutionseffekt, sondern nur einen Einkommenseffekt.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Lagrange nicht anwendbar</strong> Die Min-Funktion ist im Knickpunkt nicht differenzierbar. Stattdessen wird über die Gleichgewichtsbedingung $ax_1 = bx_2$ zusammen mit der Budgetrestriktion gelöst.</div>
<div class="warn-box"><strong>Verhältnisrichtung beachten</strong> Bei $\min\{x_1, 2x_2\}$ ist das Verhältnis $x_1:x_2 = 2:1$ (nicht $1:2$!). Der Koeffizient 2 steht bei $x_2$, also braucht man doppelt so viel $x_1$.</div>
</div>
`,
 formeln: [
 { label:'Leontief-Nutzenfunktion', eq: String.raw`$$u(x_1, x_2) = \min\{a x_1,\; b x_2\}$$`, desc:'Perfekte Komplemente', variables: { 'a': 'Koeffizient Gut 1', 'b': 'Koeffizient Gut 2', 'x_1,x_2': 'Gütermengen' } },
 { label:'Optimalbedingung', eq: String.raw`$$a x_1 = b x_2$$`, desc:'Kein Gut wird verschwendet', variables: { 'ax_1': 'Gewichtete Menge Gut 1', 'bx_2': 'Gewichtete Menge Gut 2' } },
 { label:'Nachfrage x₁*', eq: String.raw`$$x_1^* = \frac{b m}{b p_1 + a p_2}$$`, desc:'Aus Knick + Budget', variables: { 'x_1^*': 'Optimale Menge Gut 1', 'b': 'Koeffizient Gut 2', 'm': 'Einkommen', 'p_1': 'Preis Gut 1', 'p_2': 'Preis Gut 2', 'a': 'Koeffizient Gut 1' } },
 ],
 aufgaben: [
  {
  text: String.raw`$u(x_1,x_2) = \min\{x_1,\, 3x_2\}$, $p_1 = 2$, $p_2 = 1$, $m = 20$. Berechne das optimale Konsumbündel.`,
  steps: [
  { text: String.raw`Knicklösung: $x_1 = 3x_2$ ($a=1$, $b=3$)`, eq: null },
  { text: `Einsetzen in Budget:`, eq: String.raw`$$2x_1 + x_2 = 20 \implies 2 \cdot 3x_2 + x_2 = 7x_2 = 20$$` },
  { text: `x₂* lösen:`, eq: String.raw`$$x_2^* = \frac{20}{7} \approx 2{,}86$$` },
  { text: `x₁* bestimmen:`, eq: String.raw`$$x_1^* = 3 \cdot \frac{20}{7} = \frac{60}{7} \approx 8{,}57$$` },
  { text: `Nutzen:`, eq: String.raw`$$u^* = \min\left\{\frac{60}{7},\, \frac{60}{7}\right\} = \frac{60}{7} \approx 8{,}57$$` },
  ],
  result: String.raw`$x_1^* \approx 8{,}57$, $x_2^* \approx 2{,}86$, $u^* \approx 8{,}57$`
  },
  {
  text: String.raw`Preiserhöhung bei perfekten Komplementen: $u = \min\{x_1, x_2\}$, $m=20$. Berechne Nachfrage bei (a) $p_1=2, p_2=3$ und (b) $p_1=4, p_2=3$. Was ist der Substitutionseffekt?`,
  steps: [
  { text: String.raw`Optimalbedingung: $x_1^* = x_2^*$ (Knicklösung, $a=b=1$).`, eq: null },
  { text: String.raw`(a) Budget: $2x_1 + 3x_1 = 5x_1 = 20 \implies x_1^* = x_2^* = 4$.`, eq: null },
  { text: String.raw`(b) $p_1$ steigt auf 4: $4x_1 + 3x_1 = 7x_1 = 20 \implies x_1^* = x_2^* = 20/7 \approx 2{,}86$.`, eq: null },
  { text: String.raw`Substitutionseffekt = 0! Bei perfekten Komplementen gibt es keinen SE — nur Einkommenseffekt.`, eq: String.raw`$$SE = 0, \quad GE = EE = 2{,}86 - 4 = -1{,}14$$` },
  ],
  result: String.raw`(a) $x_1^*=x_2^*=4$; (b) $x_1^*=x_2^*=20/7$; SE = 0`
  },
  {
  text: String.raw`Vergleich Substitute vs. Komplemente: Wie verhält sich die Nachfrage nach Gut 1, wenn $p_2$ steigt? Argumentiere für perfekte Substitute und perfekte Komplemente.`,
  steps: [
  { text: String.raw`Perfekte Substitute $u=ax_1+bx_2$: Steigt $p_2$, wird Gut 1 relativ attraktiver. Falls bisher $p_1/p_2 > a/b$: Nachfrage springt von $x_1^*=0$ auf $x_1^*=m/p_1$.`, eq: null },
  { text: String.raw`Perfekte Komplemente $u=\min\{x_1,x_2\}$: $x_1^* = m/(p_1+p_2)$ fällt, wenn $p_2$ steigt. Kreuzpreiseffekt negativ!`, eq: String.raw`$$\frac{\partial x_1^*}{\partial p_2} = -\frac{m}{(p_1+p_2)^2} < 0$$` },
  { text: `Zusammenfassung: Substitute → positiver Kreuzpreiseffekt. Komplemente → negativer Kreuzpreiseffekt.`, eq: null },
  ],
  result: `Substitute: $\partial x_1/\partial p_2 > 0$. Komplemente: $\partial x_1/\partial p_2 < 0$. Grundprinzip der Kreuzpreiselastizität.`
  },
  ]
 },
 elast: {
 motivation: 'Elastizitäten sind einheitenlose Maße für Reaktionsstärken — sie ermöglichen Vergleiche unabhängig von Maßeinheiten.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p>Eine <strong>Elastizität</strong> misst die prozentuale Änderung einer abhängigen Variable als Reaktion auf eine 1%ige Änderung einer unabhängigen Variable. Sie ist dimensionslos und ermöglicht Vergleiche zwischen verschiedenen Gütern und Märkten.</p>
<div class="math-block">$$\varepsilon_{x,y} = \frac{\partial x}{\partial y} \cdot \frac{y}{x} = \frac{\%\Delta x}{\%\Delta y}$$</div>
<p>Dabei ist $\partial x/\partial y$ die partielle Ableitung (Reaktion der Variablen $x$ auf $y$), und $y/x$ der Skalierungsfaktor, der die Messung in Prozent umrechnet.</p>
</div>
<div class="section-block">
<h3>Preiselastizität der Nachfrage</h3>
<div class="math-block">$$\varepsilon_{x_i, p_i} = \frac{\partial x_i}{\partial p_i} \cdot \frac{p_i}{x_i}$$</div>
<p>Misst die Reaktion der Nachfrage auf den eigenen Preis. Typischerweise negativ (Gesetz der Nachfrage). Einteilung:</p>
<div class="info-grid">
<div class="info-card"><div class="label">$|\varepsilon| > 1$</div><div class="value">Elastisch</div><p>Nachfrage reagiert stark. Preiserhöhung senkt den Umsatz.</p></div>
<div class="info-card"><div class="label">$|\varepsilon| = 1$</div><div class="value">Einheitselastisch</div><p>Umsatz bleibt konstant bei Preisänderung.</p></div>
<div class="info-card"><div class="label">$|\varepsilon| < 1$</div><div class="value">Unelastisch</div><p>Nachfrage reagiert schwach. Preiserhöhung steigert den Umsatz.</p></div>
</div>
</div>
<div class="section-block">
<h3>Einkommenselastizität</h3>
<div class="math-block">$$\varepsilon_{x_i, m} = \frac{\partial x_i}{\partial m} \cdot \frac{m}{x_i}$$</div>
<p>$\varepsilon_m > 0$: normales Gut. $\varepsilon_m < 0$: inferiores Gut. $\varepsilon_m > 1$: Luxusgut. $0 < \varepsilon_m < 1$: notwendiges Gut. Bei Cobb-Douglas gilt stets $\varepsilon_m = 1$ (homothetische Präferenzen).</p>
</div>
<div class="section-block">
<h3>Kreuzpreiselastizität</h3>
<div class="math-block">$$\varepsilon_{x_i, p_j} = \frac{\partial x_i}{\partial p_j} \cdot \frac{p_j}{x_i} \quad (i \neq j)$$</div>
<p>$\varepsilon_{x_i,p_j} > 0$: Güter $i$ und $j$ sind (Brutto-)Substitute. Steigt der Preis von $j$, steigt die Nachfrage nach $i$.</p>
<p>$\varepsilon_{x_i,p_j} < 0$: Güter $i$ und $j$ sind (Brutto-)Komplemente. Steigt der Preis von $j$, sinkt die Nachfrage nach $i$.</p>
</div>
<div class="section-block">
<h3>Engelsches Aggregationsgesetz</h3>
<div class="math-block">$$\sum_i s_i \cdot \varepsilon_{x_i, m} = 1 \qquad \text{mit } s_i = \frac{p_i x_i}{m}$$</div>
<p>Die mit den Ausgabenanteilen $s_i$ gewichteten Einkommenselastizitäten summieren sich zu 1. Daraus folgt: Nicht alle Güter können gleichzeitig inferior sein ($\varepsilon_m < 0$) oder Luxusgüter ($\varepsilon_m > 1$).</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Brutto- vs. Netto-Substitute</strong> Die Kreuzpreiselastizität der Marshallschen Nachfrage misst Brutto-Effekte (inkl. EE). Die Hickssche Kreuzpreiselastizität misst Netto-Substitution (nur SE). Güter können Brutto-Komplemente, aber Netto-Substitute sein.</div>
</div>
`,
 formeln: [
 { label:'Allg. Elastizität', eq: String.raw`$$\varepsilon_{A,B} = \frac{dA}{dB} \cdot \frac{B}{A}$$`, desc:'Relative Änderung A je 1% Änderung B', variables: { '\\varepsilon_{A,B}': 'Elastizität von A bzgl. B', 'A': 'Abhängige Variable', 'B': 'Erklärende Variable' } },
 { label:'Einkommenselastizität', eq: String.raw`$$\varepsilon_{x,m} = \frac{\partial x}{\partial m} \cdot \frac{m}{x}$$`, desc:'>1 Luxus, <1 notwendig, <0 inferior', variables: { '\\varepsilon_{x,m}': 'Einkommenselastizität', 'x': 'Nachfrage', 'm': 'Einkommen' } },
 { label:'Preiselastizität', eq: String.raw`$$\varepsilon_{x,p} = \frac{\partial x}{\partial p} \cdot \frac{p}{x}$$`, desc:'Normalfall < 0', variables: { '\\varepsilon_{x,p}': 'Preiselastizität der Nachfrage', 'x': 'Menge', 'p': 'Preis' } },
 { label:'Kreuzpreiselastizität', eq: String.raw`$$\varepsilon_{x_i,p_j} = \frac{\partial x_i}{\partial p_j} \cdot \frac{p_j}{x_i}$$`, desc:'>0 Substitute, <0 Komplemente', variables: { '\\varepsilon_{x_i,p_j}': 'Kreuzpreiselastizität', 'x_i': 'Nachfrage Gut i', 'p_j': 'Preis Gut j' } },
 ],
 aufgaben: [
  {
  text: String.raw`Bei CD-Nachfrage $x_1^* = \alpha m/p_1$: Berechne (a) Einkommenselastizität, (b) Preiselastizität für $x_1$, (c) Kreuzpreiselastizität $\varepsilon_{x_1,p_2}$.`,
  steps: [
  { text: `(a) Einkommenselastizität:`, eq: String.raw`$$\frac{\partial x_1^*}{\partial m} = \frac{\alpha}{p_1} \implies \varepsilon_{x_1,m} = \frac{\alpha}{p_1} \cdot \frac{m}{\alpha m/p_1} = 1$$` },
  { text: `(b) Preiselastizität:`, eq: String.raw`$$\frac{\partial x_1^*}{\partial p_1} = -\frac{\alpha m}{p_1^2} \implies \varepsilon_{x_1,p_1} = -1$$` },
  { text: String.raw`(c) Kreuzpreis: $x_1^* = \alpha m/p_1$ hängt nicht von $p_2$ ab:`, eq: String.raw`$$\frac{\partial x_1^*}{\partial p_2} = 0 \implies \varepsilon_{x_1,p_2} = 0$$` },
  ],
  result: String.raw`$\varepsilon_{x_1,m} = 1$ | $\varepsilon_{x_1,p_1} = -1$ | $\varepsilon_{x_1,p_2} = 0$`
  },
  {
  text: String.raw`Nachfrage $x(p) = 100/p$. Berechne (a) Preiselastizität, (b) die Umsatzentwicklung bei Preiserhöhung und (c) charakterisiere die Nachfrage.`,
  steps: [
  { text: String.raw`(a) Elastizität: $\partial x/\partial p = -100/p^2$`, eq: String.raw`$$\varepsilon = -\frac{100}{p^2}\cdot\frac{p}{100/p} = -\frac{100}{p^2}\cdot\frac{p^2}{100} = -1$$` },
  { text: String.raw`(b) Umsatz: $E = p \cdot x = p \cdot 100/p = 100$ — konstant, unabhängig von $p$.`, eq: null },
  { text: String.raw`(c) Einheitselastisch ($|\varepsilon|=1$): Preiserhöhung und -senkung lassen den Umsatz unverändert. Charakteristisch für jede hyperbolische Nachfragekurve $x \propto 1/p$.`, eq: null },
  ],
  result: String.raw`$\varepsilon = -1$ (einheitselastisch); Umsatz $E = 100$ = konstant`
  },
  {
  text: String.raw`Aggregationsregel: $x_1 = 2m/p_1$, $x_2 = m/(3p_2)$, $x_3 = ?$. Einkommen $m=60$, $p_1=4$, $p_2=3$, $p_3=2$. Bestimme $x_3$ aus der Engel-Aggregation, wenn $\varepsilon_3 = 0.5$.`,
  steps: [
  { text: String.raw`Ausgabenanteile: $s_1 = p_1 x_1/m = 2p_1 m/(p_1 m) = 2$? Nein: $s_1 = p_1 \cdot 2m/p_1 / m = 2$ — das ist >1, also prüfen: Nachfrage $x_1 = 2m/p_1$ würde Anteil $s_1=2$ bedeuten. Das verletzt Budget. Korrekte Interpretation: $x_1=2m/(3p_1)$, $s_1=2/3$.`, eq: null },
  { text: String.raw`Engel-Aggregation: $\sum_i s_i \varepsilon_{m,i} = 1$. Mit $s_1=2/3, \varepsilon_1=1$ und $s_2=1/3, \varepsilon_2=1$: Beide CD, Summe = 1. Für allgemeinen Fall: $s_3 \varepsilon_3 = 1 - s_1 \varepsilon_1 - s_2 \varepsilon_2$.`, eq: null },
  { text: String.raw`Beispiel mit $s_1=0{,}5, \varepsilon_1=1{,}5$ und $s_2=0{,}3, \varepsilon_2=0{,}5$:`, eq: String.raw`$$s_3 \cdot 0{,}5 = 1 - 0{,}75 - 0{,}15 = 0{,}10 \implies s_3 = 0{,}20$$` },
  { text: String.raw`Engel-Aggregation erzwingt Konsistenz der Einkommenselastizitäten mit dem Budget.`, eq: null },
  ],
  result: String.raw`Engel-Aggregation: $\sum s_i \varepsilon_i = 1$ — zwingende Bedingung für jedes Nachfragesystem`
  },
  ]
 },
 normal: {
 motivation: 'Normale vs. inferiore Güter beschreiben, wie die Nachfrage auf Einkommensänderungen reagiert — und warum nicht alle Güter zugleich inferior sein können.',
 theorie: String.raw`
 <div class="section-block">
<h3>Klassifikation nach Einkommensreaktion</h3>
<p>Die Reaktion der Nachfrage auf Einkommensänderungen klassifiziert Güter in drei Kategorien. Der entscheidende Parameter ist das Vorzeichen von $\partial x_i^*/\partial m$ (Marshallsche Nachfrage nach Gut $i$, abgeleitet nach dem Einkommen $m$).</p>
<div class="info-grid">
<div class="info-card"><div class="label">Normales Gut</div><div class="value">∂xᵢ/∂m > 0</div><p>Mehr Einkommen führt zu mehr Konsum. Einkommenselastizität $\varepsilon_m > 0$.</p></div>
<div class="info-card"><div class="label">Inferiores Gut</div><div class="value">∂xᵢ/∂m < 0</div><p>Mehr Einkommen führt zu weniger Konsum. Einkommenselastizität $\varepsilon_m < 0$.</p></div>
<div class="info-card"><div class="label">Luxusgut</div><div class="value">εₘ > 1</div><p>Ausgabenanteil steigt mit dem Einkommen. Sonderfall eines normalen Gutes.</p></div>
<div class="info-card"><div class="label">Notwendiges Gut</div><div class="value">0 < εₘ < 1</div><p>Ausgabenanteil sinkt mit dem Einkommen. Sonderfall eines normalen Gutes.</p></div>
</div>
</div>
<div class="section-block">
<h3>Engel-Kurven</h3>
<p>Die Engel-Kurve stellt die Nachfrage $x_i^*$ als Funktion des Einkommens $m$ dar (bei festen Preisen). Bei normalen Gütern ist die Engel-Kurve steigend, bei inferioren Gütern fallend. Bei Cobb-Douglas-Präferenzen sind alle Engel-Kurven Ursprungsgeraden (linearer Zusammenhang zwischen $m$ und $x_i^*$).</p>
</div>
<div class="section-block">
<h3>Giffen-Güter</h3>
<p>Ein <strong>Giffen-Gut</strong> ist ein Spezialfall eines inferioren Gutes, bei dem der Einkommenseffekt den Substitutionseffekt dominiert. Die Marshallsche Nachfrage steigt dann bei steigendem eigenen Preis. Voraussetzungen: (1) Das Gut muss inferior sein ($\partial x/\partial m < 0$), und (2) der Einkommenseffekt muss betragsmäßig größer sein als der (immer negative) Substitutionseffekt.</p>
<div class="math-block">$$\text{Giffen} \implies \text{inferior} \quad \text{aber} \quad \text{inferior} \;\not\!\!\implies \text{Giffen}$$</div>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Inferior ist nicht Giffen</strong> Inferiorität ist notwendig, aber nicht hinreichend für ein Giffen-Gut. Viele inferiore Güter haben trotzdem eine fallende Nachfragekurve, weil der SE den EE dominiert.</div>
<div class="warn-box"><strong>Aggregationsgesetz</strong> Nicht alle Güter können gleichzeitig inferior sein. Die ausgabengewichteten Einkommenselastizitäten müssen sich zu 1 summieren (Engelsches Aggregationsgesetz).</div>
</div>
`,
 formeln: [
 { label:'Normales Gut', eq: String.raw`$$\frac{\partial x_i}{\partial m} > 0$$`, desc:'Mehr Einkommen → mehr Konsum', variables: { 'x_i': 'Nachfrage Gut i', 'm': 'Einkommen' } },
 { label:'Inferiores Gut', eq: String.raw`$$\frac{\partial x_i}{\partial m} < 0$$`, desc:'Mehr Einkommen → weniger Konsum', variables: { 'x_i': 'Nachfrage Gut i', 'm': 'Einkommen' } },
 { label:'Walras-Identität', eq: String.raw`$$\sum_i p_i \cdot \frac{\partial x_i}{\partial m} = 1$$`, desc:'Budgetbindung impliziert min. 1 normales Gut', variables: { 'p_i': 'Preis Gut i', '\\partial x_i/\\partial m': 'Einkommensableitung Gut i', 'm': 'Einkommen' } },
 ],
 aufgaben: [
 {
 text: String.raw`Gut 1: Einkommensanteil $s_1 = 0{,}3$, Einkommenselastizität $\varepsilon_1 = -0{,}5$ (inferior). Berechne $\varepsilon_2$.`,
 steps: [
 { text: `Aggregationsregel (Engel-Aggregation):`, eq: String.raw`$$s_1 \varepsilon_1 + s_2 \varepsilon_2 = 1$$` },
 { text: `$s_2 = 1 - 0{,}3 = 0{,}7$. Einsetzen:`, eq: String.raw`$$0{,}3 \cdot (-0{,}5) + 0{,}7 \varepsilon_2 = 1 \implies 0{,}7 \varepsilon_2 = 1{,}15$$` },
 { text: `Lösung:`, eq: String.raw`$$\varepsilon_2 = \frac{1{,}15}{0{,}7} \approx 1{,}64 \implies \text{Luxusgut}$$` },
 ],
 result: String.raw`$\varepsilon_2 \approx 1{,}64$ — Gut 2 ist ein Luxusgut`
 },
 {
 text: `Gegeben Nachfrage $x_1^* = m/(2p_1)$. Berechne Preis-, Kreuzpreis- und Einkommenselastizität.`,
 steps: [
 { text: `Preiselastizität:`, eq: String.raw`$$\varepsilon_{x_1,p_1} = \frac{\partial x_1^*}{\partial p_1} \cdot \frac{p_1}{x_1^*} = \left(-\frac{m}{2p_1^2}\right) \cdot \frac{p_1}{m/(2p_1)} = -1$$` },
 { text: `Kreuzpreiselastizität (keine $p_2$-Abhängigkeit):`, eq: String.raw`$$\varepsilon_{x_1,p_2} = 0$$` },
 { text: `Einkommenselastizität:`, eq: String.raw`$$\varepsilon_{x_1,m} = \frac{\partial x_1^*}{\partial m} \cdot \frac{m}{x_1^*} = \frac{1}{2p_1} \cdot \frac{m}{m/(2p_1)} = 1$$` },
 { text: String.raw`Prüfung Engel-Aggregation: $s_1 \varepsilon_1 + s_2 \varepsilon_2 = 1$ (muss stimmen für alle CD-Güter mit $\varepsilon=1$).`, eq: null },
 ],
 result: String.raw`$\varepsilon_{p_1} = -1$, $\varepsilon_{p_2} = 0$, $\varepsilon_m = 1$`
 },
 {
 text: `Wahr oder Falsch? "Wenn die Preiselastizität der Nachfrage $-2$ beträgt, steigen die Ausgaben bei einer Preiserhöhung um 1%."`,
 steps: [
 { text: String.raw`Ausgaben: $E = p \cdot x$. Relative Änderung der Ausgaben:`, eq: String.raw`$$\frac{\Delta E}{E} \approx \frac{\Delta p}{p} + \frac{\Delta x}{x} = 1\% + \varepsilon_{x,p} \cdot 1\%$$` },
 { text: String.raw`Einsetzen $\varepsilon = -2$:`, eq: String.raw`$$\frac{\Delta E}{E} \approx 1\% + (-2) \cdot 1\% = -1\%$$` },
 { text: `Die Ausgaben SINKEN um 1% — die Aussage ist FALSCH.`, eq: null },
 { text: String.raw`Allgemein: Ausgaben steigen nur wenn $|\varepsilon| < 1$ (inelastische Nachfrage).`, eq: null },
 ],
 result: String.raw`FALSCH — Ausgaben sinken um 1% (elastische Nachfrage: $|\varepsilon| = 2 >1$)`
 },
 ]
 },
 hicks: {
 motivation: 'Die Hickssche Nachfrage hält das Nutzenniveau konstant und isoliert so den reinen Substitutionseffekt einer Preisänderung.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p>Die <strong>Hickssche (kompensierte) Nachfragefunktion</strong> $h_i(p_1, p_2, \bar{u})$ gibt die kostenminimale Menge von Gut $i$ an, um ein vorgegebenes Nutzenniveau $\bar{u}$ bei gegebenen Preisen zu erreichen. Sie löst das duale Problem:</p>
<div class="math-block">$$h_i(p, \bar{u}) = \arg\min_{x}\; p_1 x_1 + p_2 x_2 \quad \text{u.d.N.}\quad u(x_1,x_2) \geq \bar{u}$$</div>
</div>
<div class="section-block">
<h3>Zentrale Eigenschaft: Immer fallend im eigenen Preis</h3>
<p>Die Hickssche Nachfrage ist <strong>immer fallend</strong> im eigenen Preis: $\partial h_i/\partial p_i \leq 0$. Dies liegt daran, dass kein Einkommenseffekt wirkt (das Nutzenniveau ist fixiert). Die Hickssche Nachfrage isoliert den reinen Substitutionseffekt.</p>
</div>
<div class="section-block">
<h3>Zusammenhang mit Shephards Lemma und der Ausgabenfunktion</h3>
<p>Die Hickssche Nachfrage ergibt sich direkt als Ableitung der Ausgabenfunktion nach dem Preis:</p>
<div class="math-block">$$h_i(p, \bar{u}) = \frac{\partial e(p, \bar{u})}{\partial p_i} \quad \text{(Shephards Lemma)}$$</div>
</div>
<div class="section-block">
<h3>Zusammenhang mit der Marshallschen Nachfrage</h3>
<p>Marshallsche und Hickssche Nachfrage stimmen im Ausgangspunkt überein:</p>
<div class="math-block">$$h_i(p, v(p,m)) = x_i^*(p, m) \qquad x_i^*(p, e(p,\bar{u})) = h_i(p, \bar{u})$$</div>
<p>Der Unterschied: Die Marshallsche Nachfrage hält $m$ konstant (Preisänderung ändert den Nutzen), die Hickssche hält $\bar{u}$ konstant (Einkommen wird angepasst).</p>
</div>
<div class="section-block">
<h3>Beispiel: Cobb-Douglas</h3>
<p>Für $u = x_1^\alpha x_2^{1-\alpha}$:</p>
<div class="math-block">$$h_1(p_1, p_2, \bar{u}) = \bar{u} \left(\frac{(1-\alpha)\,p_2}{\alpha\, p_1}\right)^{1-\alpha}$$</div>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Argumente beachten</strong> Hickssche Nachfrage: $h_i(p_1, p_2, \bar{u})$ (Nutzenniveau, nicht Einkommen). Marshallsche Nachfrage: $x_i^*(p_1, p_2, m)$ (Einkommen, nicht Nutzen). Verwechslung ist häufig.</div>
</div>
`,
 formeln: [
 { label:'Hicks-Nachfrage', eq: String.raw`$$h_i = h_i(p_1, p_2, \bar{u})$$`, desc:'Minimale Ausgaben bei gegebenem Nutzen', variables: { 'h_i': 'Kompensierte Nachfrage Gut i', 'p_1,p_2': 'Güterpreise', '\\bar{u}': 'Konstantes Nutzenniveau' } },
 { label:'Identität im Optimum', eq: String.raw`$$h_i(p,\bar{u}) \equiv x_i(p,m) \quad \text{wenn } m = e(p,\bar{u})$$`, desc:'Wenn m = e(p,ū)', variables: { 'h_i': 'Hickssche Nachfrage', 'x_i': 'Marshallsche Nachfrage', 'm': 'Einkommen = e(p,ū) im Optimum' } },
 ],
 aufgaben: [
 {
 text: String.raw`Leiten Sie die Hickssche Nachfragefunktion $h_1(p_1, p_2, \bar{u})$ für die Nutzenfunktion $u(x_1, x_2) = x_1 x_2$ her.`,
 steps: [
 { text: String.raw`Das duale Problem der Ausgabenminimierung lautet:`, eq: String.raw`$$\min p_1 x_1 + p_2 x_2 \quad \text{u.d.N.} \quad x_1 x_2 = \bar{u}$$` },
 { text: String.raw`Aus der Bedingung erster Ordnung (GRS = Preisverhältnis) folgt:`, eq: String.raw`$$\frac{x_2}{x_1} = \frac{p_1}{p_2} \implies x_2 = \frac{p_1}{p_2} x_1$$` },
 { text: String.raw`Einsetzen in die Nutzennebenbedingung:`, eq: String.raw`$$x_1 \cdot \left(\frac{p_1}{p_2} x_1\right) = \bar{u} \implies x_1^2 = \bar{u} \frac{p_2}{p_1}$$` },
 { text: String.raw`Daraus ergibt sich die Hickssche Nachfrage für Gut 1:`, eq: String.raw`$$h_1(p_1, p_2, \bar{u}) = \sqrt{\bar{u} \frac{p_2}{p_1}}$$` },
 ],
 result: String.raw`$h_1(p_1, p_2, \bar{u}) = \sqrt{\bar{u} \frac{p_2}{p_1}}$`
 },
 {
 text: String.raw`Erläutern Sie den Zusammenhang zwischen der Hicksschen Nachfrage und dem Substitutionseffekt (SE) in der Slutsky-Gleichung. Zeigen Sie dies formal für $u = x_1 x_2$.`,
 steps: [
 { text: String.raw`Die Slutsky-Gleichung besagt, dass der SE der Ableitung der Hicksschen Nachfrage nach dem eigenen Preis entspricht:`, eq: String.raw`$$SE = \frac{\partial h_1(p, \bar{u})}{\partial p_1}$$` },
 { text: String.raw`Berechnung der Ableitung für $h_1 = \bar{u}^{1/2} p_2^{1/2} p_1^{-1/2}$:`, eq: String.raw`$$\frac{\partial h_1}{\partial p_1} = -\frac{1}{2} \bar{u}^{1/2} p_2^{1/2} p_1^{-3/2} = -\frac{1}{2p_1} \sqrt{\bar{u} \frac{p_2}{p_1}}$$` },
 { text: String.raw`Substitution von $x_1 = \sqrt{\bar{u} p_2 / p_1}$ im Optimum:`, eq: String.raw`$$SE = -\frac{1}{2p_1} x_1 = -\frac{x_1}{2p_1}$$` },
 { text: String.raw`Dies entspricht dem reinem Substitutionseffekt, der die Nachfrageänderung bei konstantem Nutzen beschreibt.`, eq: null },
 ],
 result: String.raw`Der SE ist die Steigung der Hicksschen Nachfragekurve: $SE = \frac{\partial h_1}{\partial p_1} = -\frac{x_1}{2p_1}$.`
 },
 {
 text: String.raw`Verifizieren Sie die Identität $h_1(p, v(p, m)) = x_1(p, m)$ für die Nutzenfunktion $u = x_1 x_2$.`,
 steps: [
 { text: String.raw`Indirekte Nutzenfunktion für $u = x_1 x_2$:`, eq: String.raw`$$v(p, m) = \frac{m}{2p_1} \cdot \frac{m}{2p_2} = \frac{m^2}{4 p_1 p_2}$$` },
 { text: String.raw`Einsetzen von $\bar{u} = v(p, m)$ in die Hickssche Nachfrage $h_1 = \sqrt{\bar{u} p_2 / p_1}$:`, eq: String.raw`$$h_1 = \sqrt{\frac{m^2}{4 p_1 p_2} \cdot \frac{p_2}{p_1}} = \sqrt{\frac{m^2}{4 p_1^2}} = \frac{m}{2 p_1}$$` },
 { text: String.raw`Dies entspricht exakt der Marshallschen Nachfrage $x_1(p, m)$.`, eq: null },
 ],
 result: String.raw`$h_1(p, v(p, m)) = \frac{m}{2 p_1} = x_1(p, m)$ — Die Dualität zwischen Nutzenmaximierung und Ausgabenminimierung ist bestätigt.`
 },
 ] },
 ausgaben: {
 motivation: 'Die Ausgabenfunktion gibt an, wie viel ein Haushalt mindestens ausgeben muss, um ein bestimmtes Nutzenniveau zu erreichen.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p>Die <strong>Ausgabenfunktion</strong> (Expenditure Function) $e(p_1, p_2, \bar{u})$ gibt die minimalen Ausgaben an, die nötig sind, um bei gegebenen Preisen $(p_1, p_2)$ ein vorgegebenes Nutzenniveau $\bar{u}$ zu erreichen. Sie ist die Lösung des dualen Minimierungsproblems:</p>
<div class="math-block">$$e(p_1, p_2, \bar{u}) = \min_{x_1, x_2}\; p_1 x_1 + p_2 x_2 \quad \text{u.d.N.}\quad u(x_1, x_2) \geq \bar{u}$$</div>
</div>
<div class="section-block">
<h3>Eigenschaften</h3>
<p><strong>Steigend in $\bar{u}$:</strong> Höheres Nutzenniveau erfordert mehr Ausgaben.</p>
<p><strong>Steigend in Preisen:</strong> Höhere Preise erfordern mehr Ausgaben für gleiches $\bar{u}$.</p>
<p><strong>Homogen vom Grad 1 in Preisen:</strong> $e(\lambda p_1, \lambda p_2, \bar{u}) = \lambda \cdot e(p_1, p_2, \bar{u})$. Verdoppeln sich alle Preise, verdoppeln sich die Mindestausgaben.</p>
<p><strong>Konkav in Preisen:</strong> Dies folgt aus der Optimierung und impliziert, dass die Hickssche Nachfrage im eigenen Preis fallend ist.</p>
</div>
<div class="section-block">
<h3>Zusammenhang mit der indirekten Nutzenfunktion</h3>
<p>Ausgabenfunktion und indirekte Nutzenfunktion $v(p,m)$ sind Inverse zueinander:</p>
<div class="math-block">$$e(p, v(p, m)) = m \qquad v(p, e(p, \bar{u})) = \bar{u}$$</div>
<p>Wenn ein Haushalt mit Einkommen $m$ den Nutzen $v(p,m)$ erreicht, dann sind die Mindestausgaben für dieses Nutzenniveau genau $m$.</p>
</div>
<div class="section-block">
<h3>Beispiel: Cobb-Douglas</h3>
<p>Für $u = x_1^\alpha x_2^{1-\alpha}$:</p>
<div class="math-block">$$e(p_1, p_2, \bar{u}) = \bar{u} \cdot \frac{p_1^\alpha\, p_2^{1-\alpha}}{\alpha^\alpha (1-\alpha)^{1-\alpha}}$$</div>
<p>Die Ausgaben steigen linear im Zielnutzen $\bar{u}$ und sind eine gewichtete geometrische Funktion der Preise.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Argumente beachten</strong> $e$ ist Funktion von $(p_1, p_2, \bar{u})$, nicht von $m$. Sie beantwortet: "Was kostet Nutzenniveau $\bar{u}$ mindestens?"</div>
<div class="warn-box"><strong>Homogenitätsgrad 1, nicht 0</strong> Im Gegensatz zur Nachfragefunktion (Grad 0 in Preisen und Einkommen) ist die Ausgabenfunktion homogen vom Grad 1 in Preisen.</div>
</div>
`,
 formeln: [
 { label:'Ausgabenfunktion', eq: String.raw`$$e(p,\bar{u}) = p_1 h_1(p,\bar{u}) + p_2 h_2(p,\bar{u})$$`, desc:'Minimale Kosten für Nutzenniveau ū', variables: { 'e(p,\\bar{u})': 'Mindestausgaben für Nutzenniveau ū', 'h_1,h_2': 'Hickssche Nachfragen' } },
 { label:'Beispiel CD (u=x₁x₂)', eq: String.raw`$$e = 2\sqrt{\bar{u}\, p_1 p_2}$$`, desc:'Für symmetrische CD-Funktion', variables: { 'e': 'Ausgabenfunktion', '\\bar{u}': 'Nutzenniveau', 'p_1': 'Preis Gut 1', 'p_2': 'Preis Gut 2' } },
 ],
 aufgaben: [
 {
 text: String.raw`Für $u = x_1 \cdot x_2$ und $\bar{u} = 25$, $p_1 = 4$, $p_2 = 1$: Berechne die minimalen Ausgaben.`,
 steps: [
{ text: `Ausgabenfunktion:`, eq: String.raw`$$e = 2\sqrt{\bar{u}\, p_1 p_2} = 2\sqrt{25 \cdot 4 \cdot 1} = 2\sqrt{100} = 20$$` },
          { text: `Optionale Prüfung — Hicks-Nachfragen:`, eq: String.raw`$$h_1 = \sqrt{\frac{\bar{u}\, p_2}{p_1}} = \sqrt{\frac{25}{4}} = 2{,}5 \qquad h_2 = \sqrt{\frac{\bar{u}\, p_1}{p_2}} = \sqrt{100} = 10$$` },
          { text: `Ausgaben aus Hicksscher Nachfrage:`, eq: String.raw`$$e = 4 \cdot 2{,}5 + 1 \cdot 10 = 10 + 10 = 20 \checkmark$$` },
 ],
 result: `Minimale Ausgaben = 20 €`
 },
 {
 text: String.raw`Zeige, dass die Ausgabenfunktion homogen vom Grad 1 in Preisen ist. Benutze das Beispiel $e = 2\sqrt{\bar{u}\,p_1 p_2}$.`,
 steps: [
 { text: String.raw`Ersetze $p_1 \to \lambda p_1$, $p_2 \to \lambda p_2$:`, eq: String.raw`$$e(\lambda p_1, \lambda p_2, \bar{u}) = 2\sqrt{\bar{u} \cdot \lambda p_1 \cdot \lambda p_2} = 2\sqrt{\lambda^2 \bar{u} p_1 p_2} = \lambda \cdot 2\sqrt{\bar{u} p_1 p_2}$$` },
 { text: String.raw`Ergebnis: $e(\lambda p, \bar{u}) = \lambda \cdot e(p, \bar{u})$ ✓ — homogen Grad 1.`, eq: null },
 { text: String.raw`Ökonomische Interpretation: Verdoppeln sich alle Preise, verdoppeln sich die Mindestausgaben für dasselbe Nutzenniveau.`, eq: null },
 ],
 result: String.raw`$e(\lambda p, \bar{u}) = \lambda \cdot e(p, \bar{u})$ — Ausgabenfunktion ist Grad 1 in Preisen.`
 },
 {
 text: String.raw`Berechne für $e(p_1,p_2,\bar{u}) = \bar{u} \cdot p_1^\alpha p_2^{1-\alpha}/(\alpha^\alpha(1-\alpha)^{1-\alpha})$ die Hickssche Nachfrage $h_1$ mittels Shephards Lemma und vergleiche mit der Formel $h_1 = \bar{u}((1-\alpha)p_2/(\alpha p_1))^{1-\alpha}$.`,
 steps: [
 { text: String.raw`Shephard: $h_1 = \partial e/\partial p_1$.`, eq: String.raw`$$h_1 = \frac{\bar{u}}{\alpha^\alpha(1-\alpha)^{1-\alpha}} \cdot \alpha\, p_1^{\alpha-1} p_2^{1-\alpha}$$` },
 { text: String.raw`Vereinfachen: $h_1 = \bar{u} \cdot p_1^{\alpha-1} p_2^{1-\alpha} / (\alpha^{\alpha-1}(1-\alpha)^{1-\alpha})$.`, eq: null },
 { text: String.raw`Dies ist äquivalent zu $h_1 = \bar{u} \left(\frac{(1-\alpha)p_2}{\alpha p_1}\right)^{1-\alpha}$ nach Umformung. ✓`, eq: null },
 ],
 result: String.raw`Shephards Lemma liefert $h_1$ direkt: eine Ableitung statt vollständiger Optimierung.`
 },
 ]
 },
 shephard: {
 motivation: 'Shephards Lemma erlaubt es, Hickssche Nachfragen direkt aus der Ausgabenfunktion abzuleiten — ohne das Optimierungsproblem neu zu lösen.',
 theorie: String.raw`
 <div class="section-block">
<h3>Shephards Lemma (Konsumtheorie)</h3>
<p><strong>Shephards Lemma</strong> besagt, dass die Hickssche (kompensierte) Nachfragefunktion sich als partielle Ableitung der Ausgabenfunktion nach dem jeweiligen Preis ergibt:</p>
<div class="math-block">$$h_i(p_1, p_2, \bar{u}) = \frac{\partial e(p_1, p_2, \bar{u})}{\partial p_i}$$</div>
<p>Dabei ist $e(p_1, p_2, \bar{u})$ die Ausgabenfunktion (minimale Kosten für Nutzenniveau $\bar{u}$), $h_i$ die kompensierte Nachfrage nach Gut $i$, und $p_i$ der Preis von Gut $i$. Das Lemma erlaubt es, die Nachfragefunktionen ohne erneute Optimierung direkt aus der Ausgabenfunktion abzulesen.</p>
</div>
<div class="section-block">
<h3>Shephards Lemma (Produktionstheorie)</h3>
<p>In der Produktionstheorie gilt das analoge Ergebnis für die bedingte Faktornachfrage und die Kostenfunktion:</p>
<div class="math-block">$$x_i^c(w_1, w_2, y) = \frac{\partial C(w_1, w_2, y)}{\partial w_i}$$</div>
<p>$x_i^c$ ist die kostenminimale Menge von Faktor $i$ für Output $y$, $C$ ist die Kostenfunktion, und $w_i$ ist der Faktorpreis. Die bedingte Faktornachfrage ergibt sich also durch Ableitung der Kostenfunktion nach dem Faktorpreis.</p>
</div>
<div class="section-block">
<h3>Anwendung</h3>
<p>Shephards Lemma ist ein zentrales Werkzeug der Dualitätstheorie. Es verbindet Wertfunktionen ($e$ bzw. $C$) mit Nachfragefunktionen ($h_i$ bzw. $x_i^c$) ohne erneute Lösung des Optimierungsproblems. Zusammen mit Roys Identität (für die Marshallsche Nachfrage) bildet es das duale Instrumentarium der Mikroökonomik.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Richtung der Ableitung</strong> Shephards Lemma: Ableitung der Ausgabenfunktion (oder Kostenfunktion) nach dem Preis, nicht umgekehrt. Die Ausgabenfunktion wird nach $p_i$ abgeleitet, nicht nach Mengen.</div>
<div class="warn-box"><strong>Bedingte vs. unbedingte Faktornachfrage</strong> Shephards Lemma liefert die bedingte Faktornachfrage $x_i^c(w, y)$ (bei gegebenem Output), nicht die unbedingte (gewinnmaximale) Faktornachfrage.</div>
</div>
`,
 formeln: [
 { label:'Shephards Lemma', eq: String.raw`$$h_i = \frac{\partial e}{\partial p_i}$$`, desc:'Hickssche Nachfrage aus Ausgabenfunktion', variables: { 'h_i': 'Hickssche Nachfrage Gut i', 'e': 'Ausgabenfunktion', 'p_i': 'Preis Gut i' } },
 { label:'Konkavität', eq: String.raw`$$\frac{\partial^2 e}{\partial p_i^2} = \frac{\partial h_i}{\partial p_i} \leq 0$$`, desc:'Hickssche Nachfrage fällt im eigenen Preis', variables: { 'e': 'Ausgabenfunktion', 'p_i': 'Preis Gut i', 'h_i': 'Hickssche Nachfrage' } },
 ],
 aufgaben: [
 {
 text: String.raw`Gegeben $e(p_1,p_2,\bar{u}) = 2\sqrt{\bar{u}\,p_1 p_2}$. Bestimme $h_1$ und $h_2$ via Shephards Lemma.`,
 steps: [
 { text: String.raw`Schreibe $e = 2\bar{u}^{1/2} p_1^{1/2} p_2^{1/2}$. Shephards Lemma: $h_i = \partial e/\partial p_i$.`, eq: null },
 { text: `Ableitung nach $p_1$:`, eq: String.raw`$$h_1 = \bar{u}^{1/2} p_1^{-1/2} p_2^{1/2} = \sqrt{\frac{\bar{u}\, p_2}{p_1}}$$` },
 { text: `Ableitung nach $p_2$:`, eq: String.raw`$$h_2 = \bar{u}^{1/2} p_1^{1/2} p_2^{-1/2} = \sqrt{\frac{\bar{u}\, p_1}{p_2}}$$` },
 ],
 result: String.raw`$h_1 = \sqrt{\bar{u}p_2/p_1}$, $h_2 = \sqrt{\bar{u}p_1/p_2}$`
 },
 {
 text: String.raw`Erkläre das Envelope-Theorem am Beispiel der Ausgabenfunktion: Warum gilt $\partial e/\partial p_i = h_i$ (ohne Anpassungsterm)?`,
 steps: [
 { text: `Die Ausgabenfunktion ist der Minimalwert:`, eq: String.raw`$$e(p,\bar{u}) = \min_{x: u(x)\geq\bar{u}} p \cdot x$$` },
 { text: String.raw`Beim Optimum gilt $x^* = h(p,\bar{u})$. Totale Ableitung nach $p_i$:`, eq: String.raw`$$\frac{de}{dp_i} = h_i + \sum_j p_j \frac{\partial h_j}{\partial p_i}\;{\scriptstyle = 0 \text{ (Envelope)}}$$` },
 { text: `Der zweite Term ist null, weil die Anpassung der Mengen bereits optimiert wurde — erste Ordnung hat keinen Einfluss.`, eq: null },
 { text: String.raw`Also: $\partial e/\partial p_i = h_i$. Direkte ökonomische Interpretation:`, eq: String.raw`$$\Delta e \approx h_i \cdot \Delta p_i \quad \text{(Mehrausgaben = Menge × Preisänderung)}$$` },
 ],
 result: `Envelope-Theorem: Anpassungsterm zweiter Ordnung null — nur direkte Wirkung zählt.`
 },
 {
 text: String.raw`Gegeben $e(w, r, y) = 2\sqrt{w\,r\,y}$ (Produktionskosten). Leite Arbeitsnachfrage und Kapitalnachfrage via Shephards Lemma ab.`,
 steps: [
 { text: `Shephards Lemma für Produktionskostenfunktion:`, eq: String.raw`$$L(w,r,y) = \frac{\partial e}{\partial w} \qquad K(w,r,y) = \frac{\partial e}{\partial r}$$` },
 { text: `Schreibe $e = 2y^{1/2} w^{1/2} r^{1/2}$. Ableitung nach $w$:`, eq: String.raw`$$L = y^{1/2} w^{-1/2} r^{1/2} = \sqrt{\frac{yr}{w}}$$` },
 { text: `Ableitung nach $r$:`, eq: String.raw`$$K = y^{1/2} w^{1/2} r^{-1/2} = \sqrt{\frac{yw}{r}}$$` },
 { text: String.raw`Prüfung: $wL + rK = w\sqrt{yr/w} + r\sqrt{yw/r} = 2\sqrt{wry} = e$ `, eq: null },
 ],
 result: String.raw`$L = \sqrt{yr/w}$, $K = \sqrt{yw/r}$`
 },
 ]
 },
 indnutzen: {
 motivation: 'Die indirekte Nutzenfunktion fasst den maximalen erreichbaren Nutzen als Funktion von Preisen und Einkommen zusammen. Roys Identität leitet daraus die Marshallsche Nachfrage ab.',
 theorie: String.raw`
 <div class="section-block">
<h3>Indirekte Nutzenfunktion</h3>
<p>Die <strong>indirekte Nutzenfunktion</strong> $v(p_1, p_2, m)$ gibt den maximalen Nutzen an, den ein Haushalt bei gegebenen Preisen $(p_1, p_2)$ und Einkommen $m$ erreichen kann. Sie entsteht durch Einsetzen der Marshallschen Nachfrage in die Nutzenfunktion:</p>
<div class="math-block">$$v(p_1, p_2, m) = u(x_1^*(p,m),\; x_2^*(p,m))$$</div>
<p>Die indirekte Nutzenfunktion beantwortet: "Wie gut geht es dem Haushalt bei diesen Marktbedingungen?"</p>
</div>
<div class="section-block">
<h3>Eigenschaften</h3>
<p><strong>Steigend in $m$:</strong> Mehr Einkommen ermöglicht höheren Nutzen ($\partial v/\partial m = \lambda > 0$).</p>
<p><strong>Fallend in Preisen:</strong> Höhere Preise reduzieren die Kaufkraft ($\partial v/\partial p_i < 0$).</p>
<p><strong>Homogen vom Grad 0 in $(p, m)$:</strong> $v(\lambda p, \lambda m) = v(p, m)$. Proportionale Preis- und Einkommensänderung ändert den Nutzen nicht (keine Geldillusion).</p>
<p><strong>Quasi-konvex in Preisen:</strong> Technische Eigenschaft aus der Dualitätstheorie.</p>
</div>
<div class="section-block">
<h3>Roys Identität</h3>
<p><strong>Roys Identität</strong> erlaubt es, die Marshallsche Nachfrage direkt aus der indirekten Nutzenfunktion abzuleiten, ohne das Optimierungsproblem erneut zu lösen:</p>
<div class="math-block">$$x_i^*(p, m) = -\frac{\partial v/\partial p_i}{\partial v/\partial m}$$</div>
<p>Die Marshallsche Nachfrage nach Gut $i$ ist das negative Verhältnis der partiellen Ableitungen der indirekten Nutzenfunktion nach dem Preis $p_i$ und nach dem Einkommen $m$. Das Minuszeichen kompensiert, dass $\partial v/\partial p_i < 0$ (höhere Preise senken den Nutzen).</p>
</div>
<div class="section-block">
<h3>Zusammenhang mit der Ausgabenfunktion</h3>
<p>$v$ und $e$ sind Inverse zueinander:</p>
<div class="math-block">$$v(p, e(p, \bar{u})) = \bar{u} \qquad e(p, v(p, m)) = m$$</div>
<p>Kennt man eine der beiden Funktionen, lässt sich die andere durch Invertierung gewinnen.</p>
</div>
<div class="section-block">
<h3>Beispiel: Cobb-Douglas</h3>
<p>Für $u = x_1^\alpha x_2^{1-\alpha}$:</p>
<div class="math-block">$$v(p_1, p_2, m) = \frac{\alpha^\alpha (1-\alpha)^{1-\alpha}}{p_1^\alpha\, p_2^{1-\alpha}} \cdot m$$</div>
<p>$v$ ist linear in $m$ (daher ist $\lambda = \partial v/\partial m$ konstant in $m$). Anwendung von Roys Identität bestätigt $x_1^* = \alpha m / p_1$.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Vorzeichen bei Roys Identität</strong> Das Minuszeichen ist entscheidend: $x_i = -(\partial v/\partial p_i)/(\partial v/\partial m)$. Ohne das Minus erhält man eine negative Nachfrage.</div>
</div>
`,
 formeln: [
 { label:'Indirekte Nutzenfunktion', eq: String.raw`$$v(p,m) = u\bigl[x_1(p,m),\; x_2(p,m)\bigr]$$`, desc:'Max. Nutzen als Funktion von Preisen/Einkommen', variables: { 'v(p,m)': 'Maximaler Nutzen bei Preisen p und Einkommen m', 'x_1,x_2': 'Marshallsche Nachfragen' } },
 { label:'Roys Identität', eq: String.raw`$$x_i = -\frac{\partial v/\partial p_i}{\partial v/\partial m}$$`, desc:'Marshall-Nachfrage aus indirekter NF', variables: { 'x_i': 'Marshallsche Nachfrage Gut i', '\\partial v/\\partial p_i': 'Preisableitung der indirekten NF', '\\partial v/\\partial m': 'Einkommensableitung der indirekten NF' } },
 ],
 aufgaben: [
 {
 text: `Gegeben $v(p_1,p_2,m) = m^2/(p_1 p_2)$. Leite $x_1^*$ via Roys Identität ab.`,
 steps: [
 { text: `Partielle Ableitungen:`, eq: String.raw`$$\frac{\partial v}{\partial p_1} = -\frac{m^2}{p_1^2 p_2} \qquad \frac{\partial v}{\partial m} = \frac{2m}{p_1 p_2}$$` },
 { text: "Roys Identität:", eq: String.raw`$$x_1^* = -\frac{\partial v/\partial p_1}{\partial v/\partial m} = \frac{m^2/(p_1^2 p_2)}{2m/(p_1 p_2)} = \frac{m}{2p_1}$$` },
 { text: String.raw`Entspricht CD-Nachfrage mit $\alpha = 0{,}5$. `, eq: null },
 ],
 result: `$x_1^* = m/(2p_1)$`
 },
 {
 text: `Zeige: Die indirekte Nutzenfunktion ist homogen vom Grad 0 in $(p_1, p_2, m)$.`,
 steps: [
 { text: String.raw`Homogenität Grad 0 bedeutet: $v(\lambda p_1, \lambda p_2, \lambda m) = v(p_1, p_2, m)$.`, eq: null },
 { text: `Begründung: Marshallsche Nachfrage ist homogen Grad 0 (keine Geldillusion):`, eq: String.raw`$$x_i^*(\lambda p, \lambda m) = x_i^*(p, m) \implies v(\lambda p, \lambda m) = u(x^*(\lambda p, \lambda m)) = u(x^*(p,m)) = v(p,m)$$` },
 { text: `Beispiel: $v = m^2/(p_1 p_2)$. Skalierung:`, eq: String.raw`$$v(\lambda p_1, \lambda p_2, \lambda m) = \frac{(\lambda m)^2}{(\lambda p_1)(\lambda p_2)} = \frac{\lambda^2 m^2}{\lambda^2 p_1 p_2} = \frac{m^2}{p_1 p_2} \checkmark$$` },
 ],
 result: `$v$ ist homogen Grad 0: doppelt so hohe nominale Größen ändern nichts.`
 },
 {
 text: String.raw`Leite für $u = x_1^\alpha x_2^{1-\alpha}$ die indirekte Nutzenfunktion her und verifiziere Roys Identität für $x_2^*$.`,
 steps: [
 { text: `Optimale Nachfragen:`, eq: String.raw`$$x_1^* = \frac{\alpha m}{p_1} \qquad x_2^* = \frac{(1-\alpha)m}{p_2}$$` },
 { text: `Einsetzen in $u$:`, eq: String.raw`$$v = \left(\frac{\alpha m}{p_1}\right)^\alpha \left(\frac{(1-\alpha)m}{p_2}\right)^{1-\alpha} = m \cdot \frac{\alpha^\alpha(1-\alpha)^{1-\alpha}}{p_1^\alpha p_2^{1-\alpha}}$$` },
 { text: `Roys Identität für $x_2^*$:`, eq: String.raw`$$\begin{aligned}\frac{\partial v}{\partial p_2} &= -\frac{(1-\alpha)v}{p_2}, \qquad \frac{\partial v}{\partial m} = \frac{v}{m}\\ x_2^* &= -\frac{\partial v/\partial p_2}{\partial v/\partial m} = \frac{(1-\alpha)v/p_2}{v/m} = \frac{(1-\alpha)m}{p_2}\checkmark\end{aligned}$$` },
 ],
 result: String.raw`$v = m \cdot \frac{\alpha^\alpha(1-\alpha)^{1-\alpha}}{p_1^\alpha p_2^{1-\alpha}}$`
 },
 ]
 },
 lambda: {
 motivation: 'Der Lagrange-Multiplikator λ hat eine präzise ökonomische Bedeutung: Er misst den Grenznutzen des Einkommens.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p>Der <strong>Lagrange-Multiplikator $\lambda$</strong> entsteht als dritte Variable bei der Lösung des Haushaltsoptimierungsproblems mittels Lagrange-Methode. Er misst den <strong>Schattenpreis der Budgetrestriktion</strong>, also den Grenznutzen einer zusätzlichen Geldeinheit Einkommen im Optimum.</p>
<div class="math-block">$$\lambda^* = \frac{\partial v(p_1, p_2, m)}{\partial m}$$</div>
<p>Dabei ist $v(p_1,p_2,m)$ die indirekte Nutzenfunktion (der maximale Nutzen bei gegebenen Preisen und Einkommen). $\lambda^*$ gibt an, um wie viel sich der maximale Nutzen erhöht, wenn das Einkommen $m$ marginal steigt.</p>
</div>
<div class="section-block">
<h3>Herleitung aus den FOC</h3>
<p>Die Bedingungen erster Ordnung des Lagrange-Problems $\mathcal{L} = u(x_1,x_2) + \lambda[m - p_1 x_1 - p_2 x_2]$ lauten:</p>
<div class="math-block">$$\frac{\partial u}{\partial x_1} = \lambda p_1 \qquad \frac{\partial u}{\partial x_2} = \lambda p_2$$</div>
<p>Also ist $\lambda = MU_1/p_1 = MU_2/p_2$: Im Optimum ist der Grenznutzen pro ausgegebenem Euro für jedes Gut gleich. Dieser gemeinsame Wert ist $\lambda$.</p>
</div>
<div class="section-block">
<h3>Interpretation</h3>
<p>$\lambda^*$ beantwortet die Frage: "Was bringt dem Haushalt ein zusätzlicher Euro?" Wenn $\lambda^* = 3$, dann steigt der Nutzen um 3 Nutzeneinheiten pro zusätzlichem Euro Einkommen. Da Nutzen ordinal ist, hat der absolute Wert von $\lambda$ keine interpersonell vergleichbare Bedeutung, aber innerhalb einer gegebenen Nutzenfunktion ist $\lambda$ informativ.</p>
</div>
<div class="section-block">
<h3>Beispiel: Cobb-Douglas</h3>
<p>Für $u = x_1^\alpha x_2^{1-\alpha}$:</p>
<div class="math-block">$$\lambda^* = \frac{\alpha^\alpha (1-\alpha)^{1-\alpha}}{p_1^\alpha\, p_2^{1-\alpha}}$$</div>
<p>$\lambda^*$ sinkt, wenn Preise steigen (ein Euro kauft weniger Nutzen), und ist unabhängig von $m$ bei CD (weil die indirekte Nutzenfunktion linear in $m$ ist).</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Ordinalität beachten</strong> Monotone Transformationen der Nutzenfunktion verändern den Wert von $\lambda$. Interpersonelle Vergleiche von $\lambda$ sind daher ökonomisch nicht sinnvoll.</div>
</div>
`,
 formeln: [
 { label:'Lagrange-Multiplikator', eq: String.raw`$$\lambda = \frac{\partial v}{\partial m} = \frac{MU_i}{p_i}$$`, desc:'Grenznutzen des Einkommens', variables: { '\\lambda': 'Grenznutzen des Einkommens', 'v': 'Indirekte Nutzenfunktion', 'MU_i': 'Grenznutzen Gut i', 'p_i': 'Preis Gut i' } },
 ],
 aufgaben: [
 {
 text: String.raw`Für $u = x_1 x_2$, $p_1 = 2$, $p_2 = 4$, $m = 40$: Berechne $\lambda^*$ im Optimum.`,
 steps: [
 { text: String.raw`Optimum (CD mit $\alpha=0{,}5$):`, eq: String.raw`$$x_1^* = \frac{0{,}5 \cdot 40}{2} = 10 \qquad x_2^* = \frac{0{,}5 \cdot 40}{4} = 5$$` },
 { text: `Grenznutzen: $MU_1 = x_2^* = 5$, $MU_2 = x_1^* = 10$`, eq: null },
 { text: `Lagrange-Multiplikator:`, eq: String.raw`$$\lambda^* = \frac{MU_1}{p_1} = \frac{5}{2} = 2{,}5 \qquad \text{Prüfung: } \frac{MU_2}{p_2} = \frac{10}{4} = 2{,}5 \checkmark$$` },
 ],
 result: String.raw`$\lambda^* = 2{,}5$`
 },
 {
 text: String.raw`Zeige: $\lambda = \partial v/\partial m$ via Envelope-Theorem (Grenznutzen des Einkommens).`,
 steps: [
 { text: `Lagrange-Funktion:`, eq: String.raw`$$\mathcal{L} = u(x_1,x_2) + \lambda(m - p_1 x_1 - p_2 x_2)$$` },
 { text: `Envelope-Theorem: Ableitung des Optimalwertes $v(p,m)$ nach $m$:`, eq: String.raw`$$\frac{\partial v}{\partial m} = \frac{\partial \mathcal{L}}{\partial m}\bigg|_{x=x^*} = \lambda^*$$` },
 { text: String.raw`Interpretation: Ein zusätzlicher Euro erhöht den maximalen Nutzen um $\lambda^*$ Einheiten.`, eq: null },
 { text: String.raw`Da Einkommen knapp: $\lambda^* >0$. Bei steigendem $m$ sinkt $\lambda^*$ (abnehmender Grenznutzen des Einkommens).`, eq: null },
 ],
 result: String.raw`$\lambda^* = \partial v/\partial m >0$ — Schattenpreis der Budgetrestriktion`
 },
 {
 text: String.raw`Haushalt A hat $\lambda_A = 5$, Haushalt B hat $\lambda_B = 2$. Wer profitiert mehr von einer Einkommenssteigerung um 1€? Was sagt das über Wohlfahrtsvergleiche?`,
 steps: [
 { text: String.raw`Definition: $\lambda = \partial v/\partial m$ misst den Nutzenzuwachs pro Euro.`, eq: null },
 { text: String.raw`Haushalt A gewinnt $\Delta v_A = 5 \cdot 1 = 5$ Nutzeneinheiten, B gewinnt $\Delta v_B = 2$.`, eq: null },
 { text: `Problem: Nutzen ist ordinal! Nutzeneinheiten sind interpersonell nicht vergleichbar.`, eq: null },
 { text: String.raw`Wir können NICHT sagen "A profitiert 2,5-mal mehr". Kardinaler Vergleich von $\lambda$ ist sinnlos.`, eq: null },
 ],
 result: String.raw`Interpersonelle $\lambda$-Vergleiche sind ökonomisch nicht valide — Nutzen ist ordinal.`
 },
 ]
 },
 slutsky: {
 motivation: 'Die Slutsky-Gleichung zerlegt den Gesamteffekt einer Preisänderung in Substitutionseffekt (SE) und Einkommenseffekt (EE).',
 theorie: String.raw`
 <div class="section-block">
<h3>Slutsky-Gleichung</h3>
<p>Die <strong>Slutsky-Zerlegung</strong> zerlegt die Gesamtwirkung einer Preisänderung auf die Nachfrage in zwei Komponenten: den Substitutionseffekt (SE) und den Einkommenseffekt (EE). Die Slutsky-Gleichung lautet:</p>
<div class="math-block">$$\underbrace{\frac{\partial x_1}{\partial p_1}}_{\text{Gesamteffekt (GE)}} = \underbrace{\frac{\partial h_1}{\partial p_1}}_{\text{SE} \;\leq\; 0} - \underbrace{x_1 \cdot \frac{\partial x_1}{\partial m}}_{\text{EE}}$$</div>
<p>$\partial x_1/\partial p_1$: Gesamteffekt (Marshallsche Nachfrage). $\partial h_1/\partial p_1$: Substitutionseffekt (Hickssche Nachfrage, immer $\leq 0$). $x_1 \cdot \partial x_1/\partial m$: Einkommenseffekt (skaliert mit der konsumierten Menge $x_1$).</p>
</div>
<div class="section-block">
<h3>Substitutionseffekt (SE)</h3>
<p>Der SE misst die Nachfrageänderung bei konstantem Nutzenniveau (entlang der Indifferenzkurve). Er ist <strong>immer nicht-positiv</strong> ($SE \leq 0$): Bei steigendem Preis substituiert der Haushalt weg vom teurer gewordenen Gut. Der SE entspricht der Steigung der Hicksschen (kompensierten) Nachfragekurve.</p>
</div>
<div class="section-block">
<h3>Einkommenseffekt (EE)</h3>
<p>Der EE entsteht, weil eine Preiserhöhung die Kaufkraft (Realeinkommen) des Haushalts senkt. Bei normalen Gütern ($\partial x_1/\partial m > 0$) verstärkt der EE den SE (beide negativ). Bei inferioren Gütern ($\partial x_1/\partial m < 0$) wirkt der EE dem SE entgegen.</p>
<p><strong>Giffen-Gut:</strong> Wenn der EE den SE betragsmäßig überwiegt und das Gut inferior ist, steigt die Nachfrage bei steigendem Preis: $GE > 0$. Dies ist extrem selten.</p>
</div>
<div class="section-block">
<h3>Grafische Zerlegung</h3>
<p>1. Ausgangspunkt A: Optimum bei $(p_1^0, m)$. 2. Kompensiertes Optimum B: Optimum bei $(p_1^1, m')$ wobei $m'$ so gewählt wird, dass $u(B) = u(A)$. $A \to B$ = SE. 3. Finales Optimum C: Optimum bei $(p_1^1, m)$. $B \to C$ = EE. $A \to C$ = GE = SE + EE.</p>
</div>
<div class="section-block">
<h3>Slutsky-Matrix</h3>
<p>Die Slutsky-Matrix $S$ mit Einträgen $s_{ij} = \partial h_i/\partial p_j$ ist symmetrisch und negativ semidefinit:</p>
<div class="math-block">$$s_{ij} = s_{ji} \quad \text{und} \quad s_{ii} \leq 0$$</div>
<p>Symmetrie ($s_{ij} = s_{ji}$) bedeutet: Die kompensierte Kreuzpreisreaktion von Gut $i$ auf $p_j$ ist gleich der von Gut $j$ auf $p_i$. Negative Semidefinitheit bedeutet: Die kompensierten Eigenpreiseffekte sind nicht-positiv.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Vorzeichen im EE</strong> In der Slutsky-Gleichung steht ein Minus vor dem EE-Term: $GE = SE - x_1(\partial x_1/\partial m)$. Das Minus ist Teil der Formel und darf nicht vergessen werden.</div>
<div class="warn-box"><strong>Menge im Kreuzpreis-EE</strong> Im Kreuzpreis-EE (Effekt von $p_j$ auf $x_i$) taucht die Menge $x_j$ auf (nicht $x_i$!): $EE_{ij} = -x_j \cdot \partial x_i/\partial m$.</div>
</div>
`,
 formeln: [
 { label:'Slutsky (Eigenpreis)', eq: String.raw`$$\frac{\partial x_i}{\partial p_i} = \underbrace{\frac{\partial h_i}{\partial p_i}}_{\text{SE}\leq 0} - \underbrace{\frac{\partial x_i}{\partial m}\, x_i}_{\text{EE}}$$`, desc:'GE = SE + EE', variables: { '\\partial x_i/\\partial p_i': 'Gesamteffekt (Marshallsch)', '\\partial h_i/\\partial p_i': 'Substitutionseffekt (SE ≤ 0)', '\\partial x_i/\\partial m': 'Einkommenseffekt', 'x_i': 'Nachgefragte Menge' } },
 { label:'Slutsky (Kreuzpreis)', eq: String.raw`$$\frac{\partial x_j}{\partial p_i} = \frac{\partial h_j}{\partial p_i} - \frac{\partial x_j}{\partial m}\, x_i$$`, desc:'EE enthält Menge xᵢ (des Gutes mit Preisänderung)', variables: { '\\partial x/\\partial p_i': 'Kreuzpreiseffekt', '\\partial h/\\partial p_i': 'Kompensierter Kreuzpreiseffekt', 'x_i': 'Menge Gut i' } },
 ],
 aufgaben: [
 {
 text: String.raw`Analysieren Sie die Richtungs-Intuition des Substitutionseffekts (SE): Warum muss für eine Preissenkung von Gut 1 ($p_1 \downarrow$) der isolierte Substitutionseffekt auf die Menge $x_1$ stets nicht-negativ sein ($SE \geq 0$)?`,
 steps: [
 { text: String.raw`Der SE betrachtet die Nachfrageänderung bei konstant gehaltener Kaufkraft (im Sinne von Slutsky: das alte Bündel bleibt gerade noch erschwinglich).`, eq: null },
 { text: String.raw`Nach der Preissenkung von Gut 1 wird die Budgetgerade flacher und dreht sich durch das alte Bündel. Neue Bündel auf der Budgetgeraden enthalten mehr $x_1$ und weniger $x_2$ als das ursprüngliche Bündel.`, eq: null },
 { text: String.raw`Da das alte Bündel auf der neuen Budgetgeraden liegt, kann der Haushalt nur dann ein neues Bündel wählen, wenn dieses mindestens so gut ist wie das alte. Bei konvexen Präferenzen liegen alle besseren Bündel in Richtung einer höheren Menge des nun relativ billigeren Gutes $x_1$.`, eq: null },
 { text: String.raw`Formal folgt dies aus dem Gesetz der kompensierten Nachfrage: $(p' - p) \cdot (h(p') - h(p)) \leq 0$. Bei $dp_1 < 0$ muss $dx_1 \geq 0$ gelten.`, eq: String.raw`$$dp_1 < 0 \implies dx_1^{SE} \geq 0$$` },
 ],
 result: String.raw`Der SE ist stets invers zur Preisänderung: Eine Preissenkung führt via SE niemals zu einer geringeren Nachfrage.`
 },
 {
 text: String.raw`Ein Haushalt konsumiert das Bündel $(x_1, x_2) = (10, 5)$ bei Preisen $p_1 = 2$ und $p_2 = 4$. Der Preis von Gut 1 steigt auf $p_1' = 3$. Berechnen Sie die Slutsky-Kompensation $\Delta m$, die notwendig ist, um das ursprüngliche Bündel exakt wieder erschwinglich zu machen.`,
 steps: [
 { text: String.raw`Ursprüngliches Einkommen $m$:`, eq: String.raw`$$m = p_1 x_1 + p_2 x_2 = 2 \cdot 10 + 4 \cdot 5 = 40$$` },
 { text: String.raw`Kosten des alten Bündels zu neuen Preisen $m'$:`, eq: String.raw`$$m' = p_1' x_1 + p_2 x_2 = 3 \cdot 10 + 4 \cdot 5 = 50$$` },
 { text: String.raw`Die Slutsky-Kompensation $\Delta m$ ist die Differenz:`, eq: String.raw`$$\Delta m = m' - m = x_1 \cdot \Delta p_1 = 10 \cdot (3 - 2) = 10$$` },
 { text: String.raw`Der Haushalt benötigt somit 10 zusätzliche Geldeinheiten, um trotz der Preiserhöhung nicht an Kaufkraft zu verlieren.`, eq: null },
 ],
 result: String.raw`$\Delta m = 10$ — Die Kompensation entspricht der Menge des teurer gewordenen Gutes multipliziert mit der Preisänderung.`
 },
 {
 text: String.raw`Gegeben sei die Nutzenfunktion $u(x_1, x_2) = x_1 x_2$. Zerlegen Sie den Gesamteffekt einer marginalen Änderung von $p_1$ auf $x_1$ in Substitutionseffekt (SE) und Einkommenseffekt (EE) unter Verwendung der Slutsky-Gleichung.`,
 steps: [
 { text: String.raw`Marshallsche Nachfrage: $x_1(p_1, m) = \frac{m}{2p_1}$. Gesamteffekt (GE):`, eq: String.raw`$$\frac{\partial x_1}{\partial p_1} = -\frac{m}{2p_1^2}$$` },
 { text: String.raw`Einkommenseffekt (EE) nach Slutsky: $-x_1 \cdot \frac{\partial x_1}{\partial m}$:`, eq: String.raw`$$EE = -x_1 \cdot \frac{1}{2p_1} = -\frac{m}{2p_1} \cdot \frac{1}{2p_1} = -\frac{m}{4p_1^2}$$` },
 { text: String.raw`Substitutionseffekt (SE) als Restgröße: $SE = GE - EE$:`, eq: String.raw`$$SE = -\frac{m}{2p_1^2} - \left(-\frac{m}{4p_1^2}\right) = -\frac{m}{4p_1^2}$$` },
 { text: String.raw`Vergleich: Bei Cobb-Douglas-Präferenzen mit gleichen Exponenten sind SE und EE identisch groß.`, eq: null },
 ],
 result: String.raw`$SE = -\frac{m}{4p_1^2}$, $EE = -\frac{m}{4p_1^2}$ — Beide Effekte tragen gleichermaßen zum Gesamteffekt bei.`
 },
 ]
 },
 anfang: {
 motivation: 'Bei Anfangsausstattung ist das Einkommen endogen: m = p₁ω₁ + p₂ω₂. Eine Preisänderung ändert auch den Wert der Ausstattung.',
 theorie: String.raw`
 <div class="section-block">
<h3>Modell mit Anfangsausstattung</h3>
<p>Statt eines festen Einkommens $m$ besitzt der Haushalt eine <strong>Anfangsausstattung</strong> $(\omega_1, \omega_2)$ an Gütern. Das Einkommen wird endogen durch die Marktpreise bestimmt:</p>
<div class="math-block">$$m = p_1 \omega_1 + p_2 \omega_2$$</div>
<p>Dabei ist $\omega_i$ die Anfangsmenge von Gut $i$ und $p_i$ dessen Preis. Eine Preisänderung von $p_1$ beeinflusst jetzt nicht nur die relative Attraktivität der Güter (wie im Standardmodell), sondern auch den Wert der Ausstattung und damit das effektive Einkommen.</p>
</div>
<div class="section-block">
<h3>Modifizierte Slutsky-Zerlegung</h3>
<p>Die Slutsky-Gleichung wird um einen <strong>Ausstattungseffekt</strong> erweitert:</p>
<div class="math-block">$$\frac{\partial x_1}{\partial p_1} = \underbrace{\frac{\partial h_1}{\partial p_1}}_{\text{SE} \leq 0} + \underbrace{(\omega_1 - x_1^*) \cdot \frac{\partial x_1}{\partial m}}_{\text{modifizierter EE}}$$</div>
<p>Der entscheidende Unterschied zum Standardmodell: Der Einkommenseffekt enthält den Term $(\omega_1 - x_1^*)$ statt $(-x_1^*)$.</p>
<p><strong>Nettokäufer</strong> ($x_1^* > \omega_1$): Der Haushalt kauft mehr als er besitzt. Eine Preiserhöhung von $p_1$ macht ihn ärmer (ähnlich wie im Standardmodell, EE negativ bei normalen Gütern).</p>
<p><strong>Nettoverkäufer</strong> ($x_1^* < \omega_1$): Der Haushalt verkauft einen Teil seiner Ausstattung. Eine Preiserhöhung von $p_1$ macht ihn reicher (EE positiv bei normalen Gütern).</p>
</div>
<div class="section-block">
<h3>Anwendung: Arbeitsangebot</h3>
<p>Das Arbeitsangebotsmodell ist ein Spezialfall: Der Haushalt besitzt eine Zeitausstattung $\bar{T}$ (z.B. 24 Stunden) und "verkauft" Arbeitszeit $L = \bar{T} - \text{Freizeit}$ zum Lohnsatz $w$. Eine Lohnerhöhung hat dann einen positiven Ausstattungseffekt (mehr Einkommen) und einen negativen Substitutionseffekt (Freizeit wird teurer).</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Vorzeichen des modifizierten EE</strong> Bei einem Nettoverkäufer normaler Güter ist der EE positiv (Preiserhöhung macht reicher). Das kann dazu führen, dass die Nachfrage bei steigendem Preis steigt, ohne dass das Gut ein Giffen-Gut ist.</div>
<div class="warn-box"><strong>Nettokäufer vs. Nettoverkäufer</strong> $\omega_1 - x_1^*$ wechselt das Vorzeichen je nach Position. Immer prüfen, ob der Haushalt Nettokäufer oder -verkäufer ist.</div>
</div>
`,
 formeln: [
 { label:'Slutsky bei Ausstattung', eq: String.raw`$$\frac{dx_1}{dp_1} = \frac{\partial h_1}{\partial p_1} + \frac{\partial x_1}{\partial m}(\omega_1 - x_1)$$`, desc:'SE + modifizierter EE', variables: { 'h_1': 'Hickssche Nachfrage', '\\omega_1': 'Anfangsausstattung Gut 1', 'x_1': 'Nachfrage Gut 1', 'm': 'Einkommen' } },
 ],
 aufgaben: [
 {
 text: String.raw`Haushalt mit $\omega_1 = 10$, $\omega_2 = 5$. Im Optimum $x_1^* = 7$. Gegeben: $\partial h_1/\partial p_1 = -3$, $\partial x_1/\partial m = 0{,}4$. Berechne $dx_1/dp_1$.`,
 steps: [
 { text: `Modifizierte Slutsky-Gleichung:`, eq: String.raw`$$\frac{dx_1}{dp_1} = \frac{\partial h_1}{\partial p_1}\;{\scriptstyle SE} + \frac{\partial x_1}{\partial m}(\omega_1 - x_1^*)\;{\scriptstyle EE}$$` },
 { text: String.raw`Da $x_1^* = 7 < \omega_1 = 10$: Haushalt ist Nettoanbieter. $EE >0$ (normale Güter).`, eq: String.raw`$$EE = 0{,}4 \cdot (10 - 7) = 1{,}2$$` },
 { text: `Gesamteffekt:`, eq: String.raw`$$\frac{dx_1}{dp_1} = -3 + 1{,}2 = -1{,}8$$` },
 { text: `Der EE (+) mindert den SE (−): Preiserhöhung macht Nettoanbieter reicher → konsumiert mehr von Gut 1.`, eq: null },
 ],
 result: `$dx_1/dp_1 = -1{,}8$ — schwächer negativ als ohne Ausstattungseffekt`
 },
 {
 text: `Erkläre: Bei einem Nettoanbieter eines normalen Gutes kann eine Preiserhöhung die Nachfrage steigern. Wann tritt das auf?`,
 steps: [
 { text: `Slutsky bei Ausstattung:`, eq: String.raw`$$\frac{dx_1}{dp_1} = \frac{\partial h_1}{\partial p_1} + \frac{\partial x_1}{\partial m}(\omega_1 - x_1^*)$$` },
 { text: String.raw`$SE < 0$ immer. Für Nettoanbieter ($\omega_1 >x_1^*$) und normales Gut ($\partial x_1/\partial m >0$): $EE >0$.`, eq: null },
 { text: `Gesamteffekt positiv wenn:`, eq: String.raw`$$|EE| >|SE| \iff \frac{\partial x_1}{\partial m}(\omega_1 - x_1^*) >\left|\frac{\partial h_1}{\partial p_1}\right|$$` },
 { text: `Praktisches Beispiel: Bauern (Nettoanbieter von Getreide) kaufen bei höheren Getreidepreisen evtl. mehr Getreide für den Eigenverbrauch.`, eq: null },
 ],
 result: String.raw`Möglich wenn $EE >|SE|$: Nettoanbieter normaler Güter bei großer Ausstattung $\omega_1 \gg x_1^*$.`
 },
 {
 text: String.raw`Ein Haushalt hat $\omega_1 = 5$, $\omega_2 = 0$, kein exogenes Einkommen. Preise: $p_1 = 2$, $p_2 = 3$. Stelle die Budgetgerade auf und berechne das effektive Einkommen.`,
 steps: [
 { text: `Effektives Einkommen (endogen):`, eq: String.raw`$$m = p_1 \omega_1 + p_2 \omega_2 = 2 \cdot 5 + 3 \cdot 0 = 10$$` },
 { text: `Budgetgerade:`, eq: String.raw`$$p_1 x_1 + p_2 x_2 = 10 \implies 2x_1 + 3x_2 = 10$$` },
 { text: `Explizit: $x_2 = (10 - 2x_1)/3$. Der Ausstattungspunkt $(5, 0)$ liegt immer auf der Budgetgeraden:`, eq: String.raw`$$2 \cdot 5 + 3 \cdot 0 = 10 \checkmark$$` },
 { text: String.raw`Bei Preisänderung dreht sich die Gerade um den Ausstattungspunkt $(\omega_1, \omega_2) = (5, 0)$.`, eq: null },
 ],
 result: `$m = 10$; Budgetgerade dreht sich bei Preisänderungen um $(5, 0)$.`
 },
 ]
 },
 arbeit: {
 motivation: 'Im Arbeitsangebotsmodell wählt der Haushalt zwischen Freizeit und Konsum. Eine Lohnerhöhung hat zwei entgegengesetzte Effekte.',
 theorie: String.raw`
 <div class="section-block">
<h3>Modell</h3>
<p>Im Arbeitsangebotsmodell wählt der Haushalt zwischen <strong>Freizeit</strong> $F$ und <strong>Konsum</strong> $C$. Er besitzt eine Zeitausstattung $\bar{T}$ (z.B. 24 Stunden), die er auf Freizeit und Arbeit $L = \bar{T} - F$ aufteilt. Der Lohnsatz ist $w$ (Preis der Freizeit in Konsumeinheiten).</p>
<div class="math-block">$$\max_{F, C}\; u(F, C) \quad \text{u.d.N.}\quad C = w(\bar{T} - F) + Y_0$$</div>
<p>$Y_0$ ist das Nichtarbeitseinkommen (z.B. Vermögenseinkommen). Die Budgetrestriktion lässt sich umschreiben zu: $C + wF = w\bar{T} + Y_0$ ("volles Einkommen").</p>
</div>
<div class="section-block">
<h3>Optimalbedingung</h3>
<div class="math-block">$$\frac{MU_F}{MU_C} = w$$</div>
<p>Im Optimum entspricht die Grenzrate der Substitution zwischen Freizeit und Konsum dem Lohnsatz. Der Lohnsatz misst die Opportunitätskosten einer Stunde Freizeit (entgangener Konsum).</p>
</div>
<div class="section-block">
<h3>Wirkung einer Lohnerhöhung</h3>
<p>Eine Erhöhung von $w$ hat zwei gegenläufige Effekte auf das Arbeitsangebot:</p>
<p><strong>Substitutionseffekt (SE):</strong> Freizeit wird relativ teurer, der Haushalt arbeitet mehr. $SE > 0$ auf $L$.</p>
<p><strong>Einkommenseffekt (EE):</strong> Der Haushalt ist reicher (höherer Wert der Zeitausstattung), konsumiert mehr Freizeit und arbeitet weniger. $EE < 0$ auf $L$ (wenn Freizeit ein normales Gut ist).</p>
<div class="math-block">$$\frac{\partial L}{\partial w} = \underbrace{SE}_{> 0} + \underbrace{EE}_{< 0}$$</div>
<p>Bei niedrigen Löhnen dominiert typischerweise der SE (Angebotskurve steigend). Bei hohen Löhnen kann der EE überwiegen (Angebotskurve rückwärtsgebogen, "backward-bending").</p>
</div>
<div class="section-block">
<h3>Zusammenhang mit Slutsky bei Anfangsausstattung</h3>
<p>Das Arbeitsangebotsmodell ist ein Spezialfall der Slutsky-Zerlegung bei Anfangsausstattung: Die Zeitausstattung $\bar{T}$ ist die Anfangsausstattung von Freizeit. Der modifizierte EE enthält $(\bar{T} - F^*) = L^*$, also die Arbeitsstunden.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Lohn ist der Preis der Freizeit</strong> Eine Lohnerhöhung verteuert Freizeit relativ zum Konsum. Der Substitutionseffekt geht immer in Richtung weniger Freizeit (mehr Arbeit).</div>
<div class="warn-box"><strong>Backward-bending heißt nicht Giffen</strong> Eine rückwärtsgebogene Arbeitsangebotskurve entsteht, weil Freizeit ein normales Gut ist und der Ausstattungseffekt dominiert. Freizeit ist dabei kein Giffen-Gut.</div>
</div>
`,
 formeln: [
 { label:'Budgetgerade (Arbeit)', eq: String.raw`$$x = \frac{wT}{p} - \frac{w}{p}\,f$$`, desc:'Freizeit-Konsum-Tradeoff', variables: { 'x': 'Konsummenge', 'w': 'Lohnsatz', 'T': 'Zeitbudget gesamt', 'p': 'Konsumpreis', 'f': 'Freizeitkonsum' } },
 { label:'Slutsky (Freizeit)', eq: String.raw`$$\frac{df}{dw} = \frac{\partial f^H}{\partial w} + \frac{\partial f}{\partial m}\, l$$`, desc:'SE (neg.) + EE (pos.) auf Freizeit', variables: { 'f': 'Freizeitnachfrage', 'w': 'Lohnsatz', 'f^H': 'Kompensierte Freizeit', 'l': 'Geleistete Arbeitsstunden' } },
 ],
 aufgaben: [
 {
 text: String.raw`Haushalt: $T = 16$h, $w = 10$€/h, $p = 1$. $\partial f^H/\partial w = -0{,}8$, $\partial f/\partial m = 0{,}1$, $l^* = 8$h. Berechne $df/dw$ und $dl/dw$.`,
 steps: [
 { text: `Slutsky für Freizeit:`, eq: String.raw`$$\frac{df}{dw} = \frac{\partial f^H}{\partial w}\;{\scriptstyle SE = -0{,}8} + \frac{\partial f}{\partial m} \cdot l^*\;{\scriptstyle EE = 0{,}1 \cdot 8 = 0{,}8}$$` },
 { text: `Ergebnis:`, eq: String.raw`$$\frac{df}{dw} = -0{,}8 + 0{,}8 = 0 \qquad \frac{dl}{dw} = -\frac{df}{dw} = 0$$` },
 { text: `Interpretation: SE und EE heben sich exakt auf — Arbeitsangebot unelastisch.`, eq: null },
 ],
 result: `$df/dw = 0$, $dl/dw = 0$ — SE und EE gleich groß`
 },
 {
 text: `Erkläre, warum die Arbeitsangebotskurve rückwärts geneigt sein kann. Welcher Effekt dominiert bei hohem Lohn?`,
 steps: [
 { text: `Slutsky-Zerlegung für Arbeitsangebot:`, eq: String.raw`$$\frac{dl}{dw} = -\frac{\partial f^H}{\partial w}\;{\scriptstyle SE >0} - \frac{\partial f}{\partial m} \cdot l^*\;{\scriptstyle EE >0 \text{ (f normal)}}$$` },
 { text: `SE >0: Freizeit teurer → mehr arbeiten (Substitutionseffekt).`, eq: null },
 { text: `EE < 0 auf Arbeit: Höheres Realeinkommen → mehr Freizeit nachfragen → weniger arbeiten.`, eq: null },
 { text: `Bei hohem $w$: Haushalt ist reich → EE dominiert → $dl/dw < 0$ → rückwärts geneigte Kurve.`, eq: null },
 ],
 result: `Bei hohem Lohn: EE dominiert SE → $dl/dw < 0$ (rückwärts geneigte Arbeitsangebotskurve).`
 },
 {
 text: `Haushalt: $T=24$, $p=1$. Optimale Freizeit $f^* = 12$ bei $w=5$. Zeige: Das Realeinkommen ist $y = wT = 120$.`,
 steps: [
 { text: `Budgetgerade:`, eq: String.raw`$$x = \frac{w}{p}(T - f) = w(T - f) \implies x + wf = wT$$` },
 { text: `Bei $f^* = 12$:`, eq: String.raw`$$x^* = 5(24-12) = 5 \cdot 12 = 60$$` },
 { text: `Realeinkommen (Vollzeiteinkommen):`, eq: String.raw`$$y = wT = 5 \cdot 24 = 120 \qquad \text{davon: Konsum } px^* = 60 \text{, Freizeit } wf^* = 60$$` },
 { text: `Budgetgleichung: $px^* + wf^* = 60 + 60 = 120 = wT$ `, eq: null },
 ],
 result: `$y = wT = 120$; Konsumausgaben und Freizeitwert je 60.`
 },
 ]
 },
 cv_ev: {
 motivation: 'CV und EV messen Nutzenänderungen in Geldeinheiten — ohne kardinalem Nutzen zu benötigen. ΔKR ist die praktische Approximation.',
 theorie: String.raw`
 <div class="section-block">
<h3>Motivation</h3>
<p>Die <strong>Kompensierende Variation (CV)</strong> und die <strong>Äquivalente Variation (EV)</strong> sind exakte Wohlfahrtsmaße, die auf der Ausgabenfunktion basieren. Sie messen den Geldwert einer Preisänderung für den Haushalt, im Gegensatz zur Konsumentenrente (KR), die nur eine Approximation ist.</p>
</div>
<div class="section-block">
<h3>Kompensierende Variation (CV)</h3>
<p>Die CV misst: "Wie viel Geld müsste dem Haushalt nach der Preisänderung gegeben (oder genommen) werden, damit er sein <strong>altes</strong> Nutzenniveau $u^0$ erreicht?"</p>
<div class="math-block">$$CV = e(p^0, u^0) - e(p^1, u^0) = m - e(p^1, u^0)$$</div>
<p>Bei einer Preissenkung ($p^1 < p^0$): $e(p^1, u^0) < m$, also $CV > 0$. Der Haushalt könnte $CV$ Euro abgeben und wäre genauso gut gestellt wie vorher. Bei einer Preiserhöhung: $CV < 0$ (Haushalt bräuchte Kompensation).</p>
</div>
<div class="section-block">
<h3>Äquivalente Variation (EV)</h3>
<p>Die EV misst: "Wie viel Geld müsste dem Haushalt ohne die Preisänderung gegeben (oder genommen) werden, damit er sein <strong>neues</strong> Nutzenniveau $u^1$ erreicht?"</p>
<div class="math-block">$$EV = e(p^0, u^1) - e(p^1, u^1) = e(p^0, u^1) - m$$</div>
<p>Bei einer Preissenkung: $e(p^0, u^1) > m$ (das neue Nutzenniveau wäre zu alten Preisen teurer), also $EV > 0$. Die EV gibt den Geldbetrag an, der äquivalent zur Preissenkung wäre.</p>
</div>
<div class="section-block">
<h3>Konsumentenrente als Approximation</h3>
<p>Die <strong>Marshallsche Konsumentenrente</strong> $\Delta KR$ liegt typischerweise zwischen CV und EV:</p>
<div class="math-block">$$CV \leq \Delta KR \leq EV \quad \text{(bei normalen Gütern, Preissenkung)}$$</div>
<p>Bei quasi-linearen Präferenzen ($u = f(x_1) + x_2$) gilt exakt $CV = EV = \Delta KR$, da es keinen Einkommenseffekt auf Gut 1 gibt.</p>
</div>
<div class="section-block">
<h3>Berechnung über Hickssche Nachfrage</h3>
<p>CV und EV lassen sich als Fläche unter der Hicksschen Nachfragekurve berechnen:</p>
<div class="math-block">$$CV = \int_{p_1^1}^{p_1^0} h_1(p_1, p_2, u^0)\, dp_1 \qquad EV = \int_{p_1^1}^{p_1^0} h_1(p_1, p_2, u^1)\, dp_1$$</div>
<p>Der Unterschied: CV verwendet die Hickssche NF zum alten Nutzenniveau $u^0$, EV zum neuen $u^1$.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Referenzniveaus nicht vertauschen</strong> CV bezieht sich auf $u^0$ (altes Nutzenniveau), EV auf $u^1$ (neues Nutzenniveau). Verwechslung ist der häufigste Fehler.</div>
<div class="warn-box"><strong>Vorzeichen</strong> Bei Preissenkung: Beide $CV, EV > 0$. Bei Preiserhöhung: Beide $< 0$. Das Vorzeichen gibt die Richtung des Wohlfahrtseffekts an.</div>
</div>
`,
 formeln: [
 { label:'CV', eq: String.raw`$$CV = e(p^0, \bar{u}^0) - e(p^1, \bar{u}^0)$$`, desc:'Altes Nutzenniveau als Referenz', variables: { 'CV': 'Kompensierende Variation', 'e': 'Ausgabenfunktion', 'p^0': 'Alter Preisvektor', 'p^1': 'Neuer Preisvektor', 'u^0': 'Altes Nutzenniveau (Referenz bei CV)' } },
 { label:'EV', eq: String.raw`$$EV = e(p^0, \bar{u}^1) - e(p^1, \bar{u}^1)$$`, desc:'Neues Nutzenniveau als Referenz', variables: { 'EV': 'Äquivalente Variation', 'e': 'Ausgabenfunktion', 'p^0': 'Alter Preisvektor', 'p^1': 'Neuer Preisvektor', 'u^1': 'Neues Nutzenniveau (Referenz bei EV)' } },
 { label:'ΔKR', eq: String.raw`$$\Delta KR = \int_{p_1^1}^{p_1^0} x_1(p_1, p_2, m)\, dp_1$$`, desc:'Marshallsche Nachfrage, Approximation', variables: { 'x_1(p)': 'Marshallsche Nachfrage (beobachtbar)', 'p^0': 'Alter Preis', 'p^1': 'Neuer Preis' } },
 ],
 aufgaben: [
 {
 text: String.raw`$p_1$ sinkt von 4 auf 1. $p_2 = 1$. Ausgabenfunktion: $e = 2\sqrt{\bar{u}\,p_1 p_2}$. Berechne CV und EV für $u^0 = 25$, $u^1$ selbst bestimmen.`,
 steps: [
 { text: String.raw`Neues Gleichgewicht: Marshall-Nachfrage $x_1^* = \sqrt{\bar{u}p_2/p_1}$, $x_2^* = \sqrt{\bar{u}p_1/p_2}$.\nBei $p_1=1$, $p_2=1$, $m=e(4,1,25)=20$: $x_1^*=x_2^*=10$, $u^1=100$.`, eq: null },
 { text: `Kompensierende Variation:`, eq: String.raw`$$CV = e(p_1^0, p_2, u^0) - e(p_1^1, p_2, u^0) = 2\sqrt{25 \cdot 4} - 2\sqrt{25 \cdot 1} = 20 - 10 = 10$$` },
 { text: `Äquivalente Variation:`, eq: String.raw`$$EV = e(p_1^0, p_2, u^1) - e(p_1^1, p_2, u^1) = 2\sqrt{100 \cdot 4} - 2\sqrt{100 \cdot 1} = 40 - 20 = 20$$` },
 { text: `Rangordnung (normales Gut, Preissenkung):`, eq: String.raw`$$CV = 10 < \Delta KR < EV = 20$$` },
 ],
 result: `$CV = 10$€, $EV = 20$€ — EV >CV bei Preissenkung und normalem Gut`
 },
 {
 text: `Erkläre den Unterschied zwischen CV und EV anhand der Nutzenniveaus. Welche Maßzahl ist für eine Kosten-Nutzen-Analyse bei Preissenkungen größer?`,
 steps: [
 { text: `CV: Referenz ist altes Nutzenniveau $u^0$.`, eq: String.raw`$$CV = e(p^0, u^0) - e(p^1, u^0)$$` },
 { text: `EV: Referenz ist neues Nutzenniveau $u^1$.`, eq: String.raw`$$EV = e(p^0, u^1) - e(p^1, u^1)$$` },
 { text: `Bei Preissenkung: $u^1 >u^0$ → Hicks-Nachfrage bei $u^1$ liegt rechts → Integral unter $h(p,u^1)$ größer.`, eq: null },
 { text: `Daher: $EV >CV$ bei Preissenkung (normales Gut). Bei Preiserhöhung: $CV >EV$.`, eq: String.raw`$$CV < \Delta KR < EV \quad \text{(Preissenkung, normales Gut)}$$` },
 ],
 result: `$EV >CV$ bei Preissenkung; $CV >EV$ bei Preiserhöhung (normales Gut).`
 },
 {
 text: String.raw`Bei quasi-linearen Präferenzen $u = \ln x_1 + x_2$ gilt kein Einkommenseffekt für $x_1$. Was folgt für CV, EV und $\Delta KR$?`,
 steps: [
 { text: `Ohne Einkommenseffekt: Die Hickssche Nachfrage $h_1$ ist dieselbe bei $u^0$ und $u^1$.`, eq: null },
 { text: `Grafisch: $h_1(p_1,u^0) = h_1(p_1,u^1) = x_1(p_1,m)$ — alle drei Kurven fallen zusammen.`, eq: null },
 { text: `Daher:`, eq: String.raw`$$CV = \Delta KR = EV = \int_{p_1^1}^{p_1^0} x_1(p_1)\, dp_1$$` },
 { text: `Quasi-lineare Präferenzen sind die einzige allgemeine Klasse, bei der alle drei Wohlfahrtsmaße übereinstimmen.`, eq: null },
 ],
 result: String.raw`Bei quasi-linearen Präferenzen: $CV = \Delta KR = EV$ — kein Wohlfahrtsmessfehler.`
 },
 {
 text: String.raw`Ein Gut 1 wird von $p_1^0 = 8$ auf $p_1^1 = 2$ verbilligt. Marshallsche Nachfrage: $x_1 = 4/p_1$. Berechne $\Delta KR$.`,
 steps: [
 { text: `Veränderung der Konsumentenrente:`, eq: String.raw`$$\Delta KR = \int_{p_1^1}^{p_1^0} x_1(p_1)\,dp_1 = \int_2^8 \frac{4}{p_1}\,dp_1$$` },
 { text: `Integration:`, eq: String.raw`$$\Delta KR = 4[\ln p_1]_2^8 = 4(\ln 8 - \ln 2) = 4\ln 4 = 4 \cdot 1{,}386 \approx 5{,}55$$` },
 { text: `Interpretation: Der Konsument gewinnt ca. 5,55€ Konsumentenrente durch die Preissenkung.`, eq: null },
 ],
 result: String.raw`$\Delta KR = 4\ln 4 \approx 5{,}55$€`
 },
 ]
 },
 produktion: {
 motivation: 'Die Produktionsfunktion definiert die technische Transformationsregel von Inputs zu Output — die Grundlage aller Unternehmenstheorie.',
 theorie: String.raw`
 <div class="section-block">
<h3>Produktionsfunktion</h3>
<p>Die <strong>Produktionsfunktion</strong> $F(L, K)$ oder $y = F(x_1, x_2)$ beschreibt den maximalen Output $y$, der mit gegebenen Inputmengen ($L$ = Arbeit, $K$ = Kapital) technisch erreichbar ist.</p>
<div class="math-block">$$y = F(L, K)$$</div>
<p><strong>Grenzprodukt</strong> (Marginalprodukt) eines Faktors: $MP_i = \partial F/\partial x_i$. Es gibt an, wie viel zusätzlicher Output eine marginale Einheit des Faktors $i$ liefert, bei konstanten anderen Inputs.</p>
<p>Annahmen:</p>
<p><strong>Monotonie:</strong> Mehr Input führt zu mindestens so viel Output ($MP_i \geq 0$).</p>
<p><strong>Konvexität der Inputmengen:</strong> Isoquanten sind konvex zum Ursprung (abnehmende GRTS).</p>
</div>
<div class="section-block">
<h3>Isoquanten</h3>
<p>Eine <strong>Isoquante</strong> ist die Menge aller Input-Kombinationen $(L, K)$, die denselben Output $\bar{y}$ erzeugen:</p>
<div class="math-block">$$\{(L, K) \mid F(L, K) = \bar{y}\}$$</div>
<p>Isoquanten sind das produktionstheoretische Analogon zu Indifferenzkurven. Sie haben negative Steigung (bei positiven Grenzprodukten) und sind konvex zum Ursprung (bei abnehmender GRTS). Isoquanten schneiden sich nie, und Isoquanten weiter vom Ursprung entsprechen höherem Output.</p>
</div>
<div class="section-block">
<h3>Wichtige Produktionsfunktionen</h3>
<p><strong>Cobb-Douglas:</strong> $F(L,K) = A L^\alpha K^\beta$. Skalenerträge bestimmt durch $\alpha + \beta$.</p>
<p><strong>Leontief (Perfekte Komplemente):</strong> $F(L,K) = \min\{aL, bK\}$. L-förmige Isoquanten.</p>
<p><strong>Lineare Technologie:</strong> $F(L,K) = aL + bK$. Geraden als Isoquanten, perfekte Substitution.</p>
<p><strong>CES:</strong> $F(L,K) = (\alpha L^\rho + (1-\alpha)K^\rho)^{1/\rho}$. Flexible Substitutionselastizität.</p>
</div>
<div class="section-block">
<h3>Unterschied zur Nutzenfunktion</h3>
<p>Im Gegensatz zur Nutzenfunktion (ordinal) ist die Produktionsfunktion <strong>kardinal</strong>: Der Outputwert $y$ hat eine physische Bedeutung (Stückzahl, kg, etc.). Monotone Transformationen verändern die Technologie.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Kardinalität beachten</strong> $F = L^{0.5}K^{0.5}$ und $G = LK$ beschreiben verschiedene Technologien (unterschiedliche Skalenerträge), obwohl $G = F^2$ eine monotone Transformation ist.</div>
<div class="warn-box"><strong>Isoquante ist nicht Isokostengerade</strong> Isoquante: gleicher Output. Isokostengerade: gleiche Kosten ($w_1 x_1 + w_2 x_2 = C$). Im Kostenminimum sind sie tangential.</div>
</div>
`,
 formeln: [
 { label:'Produktionsfunktion', eq: String.raw`$$y = F(K, L)$$`, desc:'Maximaler Output bei gegebenem Input', variables: { 'y': 'Output (kardinal)', 'F': 'Produktionstechnologie', 'K': 'Kapitalinput', 'L': 'Arbeitsinput' } },
 { label:'Isoquante', eq: String.raw`$$\{\,(K,L) \mid F(K,L) = \bar{y}\,\}$$`, desc:'Niveaumenge für konstantes ȳ', variables: { 'K': 'Kapital', 'L': 'Arbeit', '\\bar{y}': 'Konstantes Outputniveau' } },
 ],
 aufgaben: [
 {
 text: String.raw`Für $F(K,L) = K^{0{,}5} L^{0{,}5}$: Bestimme die Isoquante für $\bar{y} = 4$ und berechne drei Punkte.`,
 steps: [
 { text: `Isoquantengleichung:`, eq: String.raw`$$K^{0{,}5} L^{0{,}5} = 4 \implies \sqrt{KL} = 4 \implies KL = 16$$` },
 { text: `Explizit: $L = 16/K$.`, eq: null },
 { text: `Punkte:`, eq: String.raw`$$K=1: L=16 \quad K=4: L=4 \quad K=16: L=1$$` },
 ],
 result: `Isoquante: $KL = 16$ | Punkte: $(1,16), (4,4), (16,1)$`
 },
 {
 text: `Erkläre den Unterschied zwischen Isoquanten und Indifferenzkurven: Welche Eigenschaft der Produktionsfunktion hat keine Entsprechung in der Haushaltstheorie?`,
 steps: [
 { text: `Gemeinsamkeiten: Beide sind Niveaukurven, fallend, konvex zum Ursprung, können sich nicht schneiden.`, eq: null },
 { text: `Entscheidender Unterschied: Output $y$ ist KARDINAL — absolute Werte haben Bedeutung:`, eq: String.raw`$$F(K,L) = 10 \text{ bedeutet: 10 Einheiten Output (z.B. kg, Stück)}$$` },
 { text: String.raw`Nutzen ist ORDINAL — nur die Rangfolge zählt. Monotone Transformationen von $u$ sind äquivalent, aber $F \to 2F$ ändert die Technologie!`, eq: null },
 { text: String.raw`Konsequenz: Grenzprodukte $MP_K, MP_L$ haben absolute ökonomische Bedeutung (Wertgrenzprodukt $p \cdot MP_L = w$).`, eq: null },
 ],
 result: `Kardinalität des Outputs: $F$-Werte haben absolute Bedeutung, Nutzenniveaus nicht.`
 },
 {
 text: String.raw`Leontief-Produktionsfunktion: $F(K,L) = \min\{K, 2L\}$. Bestimme die Isoquante für $\bar{y}=6$ und den GRTS.`,
 steps: [
 { text: `Optimale Kombination: $K = 2L$ (Knickpunkt). Isoquante:`, eq: String.raw`$$\min\{K, 2L\} = 6 \implies K = 6 \text{ (für } L \geq 3\text{)} \text{ und } 2L = 6 \implies L=3 \text{ (für } K \geq 6\text{)}$$` },
 { text: String.raw`Isoquante ist L-förmig: vertikale Linie $K=6$ (für $L \geq 3$) und horizontale Linie $L=3$ (für $K \geq 6$), Knick bei $(6,3)$.`, eq: null },
 { text: String.raw`GRTS: Auf den geraden Teilen GRTS = 0 oder $\infty$, am Knick undefiniert.`, eq: null },
 { text: String.raw`Substitutionselastizität $\sigma = 0$ (keine Substitution zwischen $K$ und $L$ möglich).`, eq: null },
 ],
 result: String.raw`L-förmige Isoquante; Knick bei $(6,3)$; $\sigma = 0$`
 },
 ]
 },
 grts: {
 motivation: 'Die GRTS quantifiziert das technische Tauschverhältnis zwischen Arbeit und Kapital bei konstantem Output — das Produktionsäquivalent zur GRS.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p>Die <strong>Grenzrate der Technischen Substitution (GRTS)</strong> misst, wie viele Einheiten von Faktor 2 (z.B. Kapital $K$) ein Unternehmen einsparen kann, wenn es eine zusätzliche Einheit von Faktor 1 (z.B. Arbeit $L$) einsetzt, wobei der Output $y$ konstant bleibt. Die GRTS ist das produktionstheoretische Analogon zur GRS in der Haushaltstheorie.</p>
<div class="math-block">$$GRTS_{L,K} = -\frac{dK}{dL}\bigg|_{y=\text{const}} = \frac{MP_L}{MP_K}$$</div>
<p>Dabei bezeichnet $MP_L = \partial F/\partial L$ das Grenzprodukt der Arbeit (zusätzlicher Output pro zusätzlicher Arbeitseinheit) und $MP_K = \partial F/\partial K$ das Grenzprodukt des Kapitals. Die GRTS gibt das Verhältnis der Grenzprodukte an und damit die technische Austauschrate zwischen den Inputs entlang einer Isoquante.</p>
</div>
<div class="section-block">
<h3>Herleitung über totales Differential</h3>
<p>Entlang einer Isoquante $F(L,K) = y = \text{const}$ gilt das totale Differential:</p>
<div class="math-block">$$dF = \frac{\partial F}{\partial L}\,dL + \frac{\partial F}{\partial K}\,dK = 0$$</div>
<p>Umstellen ergibt:</p>
<div class="math-block">$$\frac{dK}{dL} = -\frac{MP_L}{MP_K} \implies GRTS = \frac{MP_L}{MP_K}$$</div>
<p>Die GRTS ist also der Betrag der Steigung der Isoquante im Punkt $(L,K)$.</p>
</div>
<div class="section-block">
<h3>Abnehmende GRTS</h3>
<p><strong>Abnehmende GRTS</strong> bedeutet: Je mehr Arbeit bereits eingesetzt wird (bei konstantem Output), desto weniger Kapital kann durch eine weitere Einheit Arbeit ersetzt werden. Grafisch werden die Isoquanten zum Ursprung hin konvex. Dies ist die Standardannahme und spiegelt abnehmende Grenzprodukte wider.</p>
</div>
<div class="section-block">
<h3>Beispiel: Cobb-Douglas</h3>
<p>Für $F(L,K) = L^\alpha K^\beta$:</p>
<div class="math-block">$$MP_L = \alpha L^{\alpha-1}K^\beta, \quad MP_K = \beta L^\alpha K^{\beta-1}$$</div>
<div class="math-block">$$GRTS = \frac{\alpha}{\beta}\cdot\frac{K}{L}$$</div>
<p>Die GRTS hängt nur vom Inputverhältnis $K/L$ ab und sinkt, wenn $L$ steigt (bei gegebenem $K$). Der Faktor $\alpha/\beta$ skaliert das Substitutionsverhältnis entsprechend der Produktionselastizitäten.</p>
</div>
<div class="section-block">
<h3>GRTS im Kostenminimum</h3>
<p>Im Kostenminimum muss die GRTS dem Faktorpreisverhältnis entsprechen:</p>
<div class="math-block">$$GRTS = \frac{MP_L}{MP_K} = \frac{w}{r}$$</div>
<p>Dabei ist $w$ der Lohnsatz (Preis der Arbeit) und $r$ der Zinssatz (Preis des Kapitals). Diese Bedingung bedeutet: Die technische Austauschrate zwischen den Faktoren muss gleich der Marktaustauschrate sein. Andernfalls könnte das Unternehmen durch Umschichtung der Inputs die Kosten bei gleichem Output senken.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Zahlenwert-Verwechslung</strong> GRTS = MP_L/MP_K (Preise spielen keine Rolle in der Definition). Erst im Optimum wird GRTS = w/r gesetzt.</div>
<div class="warn-box"><strong>Vorzeichen</strong> Die GRTS wird als positiver Betrag angegeben. Die Steigung der Isoquante ist negativ, aber GRTS = |Steigung|.</div>
</div>
`,
 formeln: [
 { label:'GRTS', eq: String.raw`$$GRTS = \frac{MP_L}{MP_K} = \frac{F_L}{F_K}$$`, desc:'Betrag der Isoquantensteigung', variables: { 'MP_L': 'Grenzprodukt der Arbeit: \(\partial F/\partial L\)', 'MP_K': 'Grenzprodukt des Kapitals: \(\partial F/\partial K\)' } },
 ],
 aufgaben: [
 {
 text: `$F(K,L) = K^{0{,}3} L^{0{,}7}$. Berechne GRTS am Punkt $(K=10, L=5)$.`,
 steps: [
 { text: String.raw`Für Cobb-Douglas gilt: $GRTS = \frac{b}{a} \cdot \frac{K}{L}$ (mit $a=0{,}3$, $b=0{,}7$):`, eq: String.raw`$$GRTS = \frac{0{,}7}{0{,}3} \cdot \frac{10}{5} = \frac{7}{3} \cdot 2 = \frac{14}{3} \approx 4{,}67$$` },
 { text: `Prüfung via Grenzprodukte:`, eq: String.raw`$$\begin{aligned}MP_L &= 0{,}7 K^{0{,}3} L^{-0{,}3}, \qquad MP_K = 0{,}3 K^{-0{,}7} L^{0{,}7}\\ GRTS &= \frac{MP_L}{MP_K} = \frac{0{,}7}{0{,}3} \cdot \frac{K}{L} = 4{,}67 \checkmark\end{aligned}$$` },
 ],
 result: String.raw`$GRTS \approx 4{,}67$: Eine Einheit $L$ ersetzt $4{,}67$ Einheiten $K$`
 },
 {
 text: String.raw`Leite her: Für $F(K,L) = K^a L^b$ gilt $GRTS = \frac{b}{a} \cdot \frac{K}{L}$.`,
 steps: [
 { text: `Grenzprodukte:`, eq: String.raw`$$MP_L = b K^a L^{b-1} \qquad MP_K = a K^{a-1} L^b$$` },
 { text: `GRTS:`, eq: String.raw`$$GRTS = \frac{MP_L}{MP_K} = \frac{b K^a L^{b-1}}{a K^{a-1} L^b} = \frac{b}{a} \cdot K^{a-a+1} \cdot L^{b-1-b} = \frac{b}{a} \cdot \frac{K}{L} \quad \square$$` },
 { text: `Konsequenz: GRTS hängt nur vom Verhältnis $K/L$ ab — Eigenschaft homothetischer Funktionen!`, eq: null },
 ],
 result: String.raw`$GRTS = \frac{b}{a} \cdot \frac{K}{L}$`
 },
 {
 text: `An einem Punkt gilt $GRTS = 3$ und $w/r = 2$. Soll das Unternehmen mehr oder weniger Arbeit einsetzen? Warum?`,
 steps: [
 { text: `Interpretation: GRTS = 3 bedeutet, eine Einheit $L$ mehr erlaubt 3 Einheiten $K$ weniger bei gleichem Output.`, eq: null },
 { text: `Aber am Markt kostet eine Einheit $L$ nur $w/r = 2$ Einheiten $K$.`, eq: null },
 { text: `Vergleich:`, eq: String.raw`$$GRTS = 3 >\frac{w}{r} = 2 \implies \text{Arbeit ist relativ günstig}$$` },
 { text: `Das Unternehmen sollte mehr $L$ und weniger $K$ einsetzen, bis $GRTS = w/r = 2$.`, eq: null },
 ],
 result: `Mehr $L$, weniger $K$: $GRTS = 3 >w/r = 2$ — Arbeit relativ billig.`
 },
 ]
 },
 skalener: {
 motivation: 'Skalenerträge beschreiben, was passiert, wenn alle Inputs proportional erhöht werden — und bestimmen damit die Kostenstruktur.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p><strong>Skalenerträge</strong> beschreiben, was mit dem Output passiert, wenn alle Inputs proportional um den Faktor $\lambda > 1$ erhöht werden. Der Homogenitätsgrad $k$ der Produktionsfunktion bestimmt die Art der Skalenerträge:</p>
<div class="math-block">$$F(\lambda L, \lambda K) = \lambda^k \cdot F(L, K)$$</div>
<div class="info-grid">
<div class="info-card info-card-concept-title"><div class="label">Steigende Skalenerträge</div><div class="value">$k > 1$</div><p>Verdopplung der Inputs führt zu mehr als doppeltem Output.</p></div>
<div class="info-card info-card-concept-title"><div class="label">Konstante Skalenerträge (CRS)</div><div class="value">$k = 1$</div><p>Verdopplung der Inputs führt zu genau doppeltem Output.</p></div>
<div class="info-card info-card-concept-title"><div class="label">Sinkende Skalenerträge</div><div class="value">$k < 1$</div><p>Verdopplung der Inputs führt zu weniger als doppeltem Output.</p></div>
</div>
</div>
<div class="section-block">
<h3>Prüfung bei Cobb-Douglas</h3>
<p>Für $F(L,K) = A L^\alpha K^\beta$:</p>
<div class="math-block">$$F(\lambda L, \lambda K) = A (\lambda L)^\alpha (\lambda K)^\beta = \lambda^{\alpha+\beta} \cdot A L^\alpha K^\beta = \lambda^{\alpha+\beta} F(L,K)$$</div>
<p>Also: $k = \alpha + \beta$. Die Summe der Produktionselastizitäten bestimmt die Skalenerträge.</p>
</div>
<div class="section-block">
<h3>Skalenelastizität und Wicksell-Johnson</h3>
<p>Die <strong>Skalenelastizität</strong> $k$ kann auch als Summe der partiellen Produktionselastizitäten $\varepsilon_{y,i}$ geschrieben werden (Wicksell-Johnson-Theorem):</p>
<div class="math-block">$$k = \varepsilon_{y,L} + \varepsilon_{y,K} = \frac{\partial F}{\partial L}\cdot\frac{L}{F} + \frac{\partial F}{\partial K}\cdot\frac{K}{F}$$</div>
<p>Die Produktionselastizität $\varepsilon_{y,i}$ misst die prozentuale Outputänderung bei 1%iger Erhöhung von Faktor $i$ (alle anderen Faktoren konstant).</p>
</div>
<div class="section-block">
<h3>Zusammenhang mit Kostenfunktion</h3>
<p>Skalenerträge bestimmen die Kostenstruktur:</p>
<div class="math-block">$$k > 1 \implies \varepsilon_{C,y} < 1 \implies MC < AC \quad \text{(AC fallend)}$$</div>
<div class="math-block">$$k = 1 \implies \varepsilon_{C,y} = 1 \implies MC = AC \quad \text{(AC konstant)}$$</div>
<div class="math-block">$$k < 1 \implies \varepsilon_{C,y} > 1 \implies MC > AC \quad \text{(AC steigend)}$$</div>
<p>$\varepsilon_{C,y} = 1/k$ ist die Kostenelastizität des Outputs. Steigende Skalenerträge bedeuten sinkende Durchschnittskosten (Economies of Scale).</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Skalenertrag ist nicht Grenzertrag</strong> Sinkende Skalenerträge ($k < 1$) bedeuten nicht, dass Grenzprodukte negativ sind. Beide Grenzprodukte können positiv sein; die Summe der Elastizitäten ist lediglich kleiner als 1.</div>
<div class="warn-box"><strong>CRS und Gewinn</strong> Bei konstanten Skalenerträgen und vollkommenem Wettbewerb ist der Gewinn im Gleichgewicht null (nicht Verlust). Die Faktorentlohnung erschöpft den Output vollständig (Euler-Theorem).</div>
</div>
`,
 formeln: [
 { label:'Homogenitätsgrad', eq: String.raw`$$F(\lambda K, \lambda L) = \lambda^k F(K,L)$$`, desc:'k = Skalenelastizität', variables: { '\\lambda': 'Skalierungsfaktor (>0)', 'k': 'Homogenitätsgrad (Skalenelastizität)', 'K': 'Kapital', 'L': 'Arbeit' } },
 { label:'Euler-Theorem', eq: String.raw`$$F_L \cdot L + F_K \cdot K = k \cdot y$$`, desc:'Für homogene Funktionen vom Grad k', variables: { 'F_L \cdot L': 'Lohnsumme bei Faktorentlohnung zum Grenzprodukt', 'F_K \cdot K': 'Kapitalvergütung', 'k': 'Skalenelastizität', 'y': 'Output' } },
 { label:'Wicksell-Johnson', eq: String.raw`$$\varepsilon_{y,\lambda} = \varepsilon_{y,L} + \varepsilon_{y,K} = k$$`, desc:'Skalenelastizität = Summe der Teile', variables: { '\\varepsilon_{y,\\lambda}': 'Skalenelastizität', '\\varepsilon_{y,L}': 'Produktionselastizität Arbeit', '\\varepsilon_{y,K}': 'Produktionselastizität Kapital' } },
 ],
 aufgaben: [
 {
 text: String.raw`$F(K,L) = K^{0{,}4} \cdot L^{0{,}4}$. (a) Welche Skalenerträge? (b) Berechne $\varepsilon_{y,L}$ und $\varepsilon_{y,K}$. (c) Prüfe Wicksell-Johnson.`,
 steps: [
 { text: `(a) Homogenitätsgrad:`, eq: String.raw`$$F(\lambda K, \lambda L) = \lambda^{0{,}8} K^{0{,}4} L^{0{,}4} \implies k = 0{,}8 < 1 \implies \text{Sinkende Skalenerträge}$$` },
 { text: `(b) Partielle Elastizitäten (bei CD: ε_{y,i} = Exponent):`, eq: String.raw`$$\varepsilon_{y,L} = 0{,}4 \qquad \varepsilon_{y,K} = 0{,}4$$` },
 { text: `(c) Wicksell-Johnson:`, eq: String.raw`$$\varepsilon_{y,L} + \varepsilon_{y,K} = 0{,}4 + 0{,}4 = 0{,}8 = k \checkmark$$` },
 ],
 result: `k = 0,8 (sinkende Skalenerträge), Wicksell-Johnson bestätigt`
 },
 {
 text: String.raw`Euler-Theorem: Für $F(K,L) = K^{1/3} L^{2/3}$ (CRS). Zeige, dass $F_L \cdot L + F_K \cdot K = F(K,L)$.`,
 steps: [
 { text: String.raw`$F_L = (2/3) K^{1/3} L^{-1/3}$, $F_K = (1/3) K^{-2/3} L^{2/3}$.`, eq: null },
 { text: String.raw`Euler-Theorem:`, eq: String.raw`$$F_L \cdot L + F_K \cdot K = \frac{2}{3} K^{1/3} L^{2/3} + \frac{1}{3} K^{1/3} L^{2/3} = K^{1/3} L^{2/3} = F$$` },
 { text: String.raw`Interpretation: Bei CRS erschöpft die Faktorentlohnung zum Grenzprodukt genau den Output → Gewinn = 0 im Wettbewerb.`, eq: null },
 ],
 result: String.raw`$F_L L + F_K K = F$ bei CRS ✓ — Euler-Theorem und Nullgewinn-Bedingung`
 },
 {
 text: String.raw`Diskutiere, warum steigende Skalenerträge ($k>1$) zur Entstehung natürlicher Monopole führen können.`,
 steps: [
 { text: String.raw`Steigende Skalenerträge: $F(\lambda K, \lambda L) = \lambda^k F > \lambda F$ für $k>1$. Kostenelastizität $\varepsilon_{C,y} = 1/k < 1$.`, eq: null },
 { text: String.raw`Folge: MC $<$ AC (AC fallend). Ein großer Anbieter produziert zu niedrigeren Stückkosten als viele kleine → Kostenvorteil des Monopolisten.`, eq: String.raw`$$k > 1 \implies \varepsilon_{C,y} < 1 \implies MC < AC \implies \text{AC fallend}$$` },
 { text: String.raw`Beispiele: Strom-, Wassernetze, Bahn. Fixkostenintensiv → steigende SE → staatliche Regulierung oder Verstaatlichung.`, eq: null },
 ],
 result: String.raw`$k>1$: AC fallend → Großanbieter günstiger → natürliches Monopol entsteht.`
 },
 ]
 },
 kosten: {
 motivation: 'Kostenminimierung bestimmt, welche Input-Kombination einen gegebenen Output y zu minimalen Kosten produziert.',
 theorie: String.raw`
 <div class="section-block">
<h3>Kostenminimierungsproblem</h3>
<p>Das Unternehmen sucht die günstigste Input-Kombination, um einen gegebenen Output $y$ zu produzieren. Das duale Problem zur Gewinnmaximierung lautet:</p>
<div class="math-block">$$\min_{L,K}\;wL+rK\quad\text{u.d.N.}\quad F(L,K)=y$$</div>
<p>Dabei ist $w$ der Lohnsatz (Preis der Arbeit $L$), $r$ der Zinssatz (Preis des Kapitals $K$) und $F(L,K)$ die Produktionsfunktion. Die Lagrange-Funktion lautet:</p>
<div class="math-block">$$\mathcal{L}=wL+rK+\mu[y-F(L,K)]$$</div>
<p>$\mu$ ist der Lagrange-Multiplikator und gibt die Grenzkosten einer zusätzlichen Outputeinheit an ($\mu = MC$).</p>
</div>
<div class="section-block">
<h3>Optimalbedingung</h3>
<p>Aus den FOC folgt die Tangentialbedingung zwischen Isoquante und Isokostengerade:</p>
<div class="math-block">$$GRTS=\frac{MP_L}{MP_K}=\frac{w}{r}$$</div>
<p>Diese Bedingung besagt: Die technische Austauschrate zwischen den Faktoren muss gleich dem Faktorpreisverhältnis sein. Äquivalent formuliert: $MP_L/w = MP_K/r$, d.h. der zusätzliche Output pro ausgegebenem Euro muss für alle Faktoren gleich sein.</p>
</div>
<div class="section-block">
<h3>Bedingte Faktornachfrage</h3>
<p>Die Lösung des Kostenminimierungsproblems liefert die <strong>bedingte Faktornachfrage</strong>:</p>
<div class="math-block">$$L^*(w,r,y) \quad\text{und}\quad K^*(w,r,y)$$</div>
<p>Diese gibt die kostenminimalen Inputmengen in Abhängigkeit von Faktorpreisen und Outputniveau an. "Bedingt", weil der Output $y$ vorgegeben ist (im Gegensatz zur unbedingten Faktornachfrage bei Gewinnmaximierung).</p>
</div>
<div class="section-block">
<h3>Kostenfunktion</h3>
<p>Die <strong>Kostenfunktion</strong> $C(w, r, y)$ ergibt sich durch Einsetzen der optimalen Inputs:</p>
<div class="math-block">$$C(w,r,y) = w\,L^*(w,r,y) + r\,K^*(w,r,y)$$</div>
<p>Eigenschaften: (1) Steigend in $w$, $r$ und $y$. (2) Homogen vom Grad 1 in Faktorpreisen: Verdoppeln sich $w$ und $r$, verdoppeln sich die Kosten. (3) Konkav in Faktorpreisen (Shephards Lemma liefert fallende bedingte Faktornachfrage).</p>
</div>
<div class="section-block">
<h3>Beispiel: Cobb-Douglas</h3>
<p>Für $F(L,K) = L^\alpha K^\beta$ mit $\alpha+\beta = k$ (Skalenerträge):</p>
<div class="math-block">$$L^* = y^{1/k}\left(\frac{\alpha\,r}{\beta\,w}\right)^{\beta/k} \qquad K^* = y^{1/k}\left(\frac{\beta\,w}{\alpha\,r}\right)^{\alpha/k}$$</div>
<div class="math-block">$$C(w,r,y) = \kappa\, w^{\alpha/k}\, r^{\beta/k}\, y^{1/k}$$</div>
<p>wobei $\kappa$ eine Konstante ist, die nur von $\alpha$ und $\beta$ abhängt. Bei konstanten Skalenerträgen ($k=1$) ist $C$ linear in $y$.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Bedingt vs. unbedingt</strong> Bedingte Faktornachfrage $L^*(w,r,y)$: Output $y$ ist vorgegeben (Kostenminimierung). Unbedingte Faktornachfrage $L^*(w,r,p)$: Output wird gewinnmaximierend gewählt.</div>
</div>
`,
 formeln: [
 { label:'Minimalkostenbedingung', eq: String.raw`$$\frac{MP_L}{MP_K} = \frac{w}{r}$$`, desc:'GRTS = Faktorpreisverhältnis', variables: { 'MP_L': 'Grenzprodukt Arbeit', 'MP_K': 'Grenzprodukt Kapital', 'w': 'Lohnsatz', 'r': 'Kapitalkosten (Zins)' } },
 { label:'Kostenfunktion', eq: String.raw`$$C(w,r,y) = w\cdot L(w,r,y) + r\cdot K(w,r,y)$$`, desc:'Optimalwertfunktion', variables: { 'C(w,r,y)': 'Minimale Kosten für Output y', 'w': 'Lohnsatz', 'r': 'Kapitalkosten', 'L^*,K^*': 'Kostenminimierende Faktoreinsätze' } },
 { label:'Shephard (Produktion)', eq: String.raw`$$\frac{\partial C}{\partial w} = L(w,r,y)$$`, desc:'Bedingte Arbeitsnachfrage', variables: { '∂C/∂w': 'Ableitung der Kostenfunktion nach Lohn', 'L': 'Bedingte Arbeitsnachfrage' } },
 ],
 aufgaben: [
 {
 text: String.raw`Leiten Sie die langfristige Kostenfunktion $C(w, r, y)$ für die Produktionsfunktion $f(L, K) = L^{0{,}5} K^{0{,}5}$ her.`,
 steps: [
 { text: String.raw`Kostenminimierung: $GRTS = \frac{MP_L}{MP_K} = \frac{K}{L} = \frac{w}{r} \implies K = \frac{w}{r} L$.`, eq: null },
 { text: String.raw`Einsetzen in die Output-Bedingung $f(L, K) = y$:`, eq: String.raw`$$L^{0{,}5} \left(\frac{w}{r} L\right)^{0{,}5} = y \implies L \sqrt{\frac{w}{r}} = y$$` },
 { text: String.raw`Daraus folgen die bedingten Faktornachfragen:`, eq: String.raw`$$L(w, r, y) = y \sqrt{\frac{r}{w}} \quad \text{und} \quad K(w, r, y) = y \sqrt{\frac{w}{r}}$$` },
 { text: String.raw`Die Kostenfunktion ergibt sich als $C = wL + rK$:`, eq: String.raw`$$C(w, r, y) = w \left(y \sqrt{\frac{r}{w}}\right) + r \left(y \sqrt{\frac{w}{r}}\right) = y \sqrt{wr} + y \sqrt{wr} = 2y \sqrt{wr}$$` },
 ],
 result: String.raw`$C(w, r, y) = 2y \sqrt{wr}$`
 },
 {
 text: String.raw`Untersuchen Sie die Skaleneigenschaften der Kostenfunktion $C(y) = 2y \sqrt{wr}$ und leiten Sie Grenzkosten (MC) sowie Durchschnittskosten (AC) ab.`,
 steps: [
 { text: String.raw`Grenzkosten (MC):`, eq: String.raw`$$MC(y) = \frac{\partial C}{\partial y} = 2 \sqrt{wr}$$` },
 { text: String.raw`Durchschnittskosten (AC):`, eq: String.raw`$$AC(y) = \frac{C(y)}{y} = 2 \sqrt{wr}$$` },
 { text: String.raw`Da $MC = AC$ konstant ist, weist die Technologie konstante Skalenerträge auf ($k=1$).`, eq: null },
 { text: String.raw`Dies korrespondiert mit der Produktionsfunktion $f = L^{0{,}5} K^{0{,}5}$, die homogen vom Grad $0{,}5 + 0{,}5 = 1$ ist.`, eq: null },
 ],
 result: String.raw`$MC = AC = 2 \sqrt{wr}$. Konstante Stückkosten sind charakteristisch für CRS-Technologien.`
 },
 ]
 },
 gk_dk: {
 motivation: 'Grenzkosten (p=MC im Optimum) und Stückkosten (Marktaustrittssignal) sind die zentralen Entscheidungsgrößen des Unternehmens.',
 theorie: String.raw`
 <div class="section-block">
<h3>Kostenbegriffe</h3>
<p>Aus der Kostenfunktion $C(y)$ lassen sich zentrale Kostengrößen ableiten. Dabei ist $y$ die Outputmenge, $C(y)$ die Gesamtkosten, $FC$ die Fixkosten (outputunabhängig) und $VC(y) = C(y) - FC$ die variablen Kosten.</p>
<div class="info-grid">
<div class="info-card"><div class="label">Grenzkosten</div><div class="value">$MC(y) = C'(y)$</div><p>Kosten einer zusätzlichen Outputeinheit. Steigung der Kostenfunktion.</p></div>
<div class="info-card"><div class="label">Durchschnittskosten</div><div class="value">$AC(y) = C(y)/y$</div><p>Kosten pro Stück (Gesamtkosten geteilt durch Output).</p></div>
<div class="info-card"><div class="label">Durchschn. variable Kosten</div><div class="value">$AVC(y) = VC(y)/y$</div><p>Variable Kosten pro Stück.</p></div>
<div class="info-card"><div class="label">Durchschn. Fixkosten</div><div class="value">$AFC(y) = FC/y$</div><p>Fixkosten pro Stück. Sinken monoton mit $y$.</p></div>
</div>
</div>
<div class="section-block">
<h3>MC schneidet AC und AVC im Minimum</h3>
<p>Ein zentrales Ergebnis: Die Grenzkostenkurve schneidet die Durchschnittskostenkurve und die AVC-Kurve jeweils in deren Minimum. Beweis für AC:</p>
<div class="math-block">$$AC'(y) = \frac{C'(y)\cdot y - C(y)}{y^2} = \frac{MC - AC}{y}$$</div>
<p>Im Minimum gilt $AC' = 0$, also $MC = AC$. Wenn $MC < AC$, sinkt $AC$ (jede weitere Einheit kostet weniger als der Durchschnitt). Wenn $MC > AC$, steigt $AC$. Analog für AVC.</p>
</div>
<div class="section-block">
<h3>Kurzfristige vs. langfristige Kosten</h3>
<p><strong>Kurzfristig:</strong> Mindestens ein Faktor ist fix (z.B. Kapital $\bar{K}$). Es gibt Fixkosten $FC = r\bar{K}$. Die kurzfristige Kostenfunktion hat die typische U-Form bei AC.</p>
<p><strong>Langfristig:</strong> Alle Faktoren sind variabel, $FC = 0$. Die langfristige Durchschnittskostenkurve (LAC) ist die Umhüllende aller kurzfristigen AC-Kurven. Ihre Form hängt von den Skalenerträgen ab.</p>
</div>
<div class="section-block">
<h3>Typischer Verlauf</h3>
<p>Bei U-förmigen Durchschnittskosten: MC steigt durch AC von unten im AC-Minimum. Links davon: $MC < AC$ (AC fallend, Skaleneffekte). Rechts davon: $MC > AC$ (AC steigend, Skaleninneffizienzen). Das AC-Minimum ist der effizienteste Produktionspunkt.</p>
<div class="math-block">$$\text{Effiziente Betriebsgröße:}\quad y^* \text{ mit } AC'(y^*) = 0 \iff MC(y^*) = AC(y^*)$$</div>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>MC durch AC von unten, nicht von oben</strong> MC schneidet AC immer im Minimum von unten nach oben. Wenn MC monoton steigend ist, gibt es genau einen Schnittpunkt.</div>
<div class="warn-box"><strong>Kurzfristige Stilllegung vs. langfristiger Marktaustritt</strong> Kurzfristig: Produktion einstellen wenn $p < \min AVC$. Langfristig: Markt verlassen wenn $p < \min AC$. Die Schwellen sind verschieden.</div>
</div>
`,
 formeln: [
 { label:'Grenzkosten', eq: String.raw`$$MC(y) = \frac{\partial C(y)}{\partial y}$$`, desc:'Kosten der letzten Einheit', variables: { 'MC': 'Grenzkosten', 'C(y)': 'Kostenfunktion', 'y': 'Output' } },
 { label:'Stückkosten', eq: String.raw`$$AC(y) = \frac{C(y)}{y}$$`, desc:'Durchschnittliche Kosten pro Einheit', variables: { 'AC': 'Durchschnittskosten', 'C(y)': 'Gesamtkosten', 'y': 'Output' } },
 { label:'Kostenelastizität', eq: String.raw`$$\varepsilon_{C,y} = \frac{MC}{AC} = \frac{1}{k}$$`, desc:'Kehrwert der Skalenelastizität', variables: { '\\varepsilon_{C,y}': 'Kostenelastizität = MC/AC', 'k': 'Skalenelastizität = 1/k' } },
 ],
 aufgaben: [
 {
 text: `Kostenfunktion $C(y) = y^3 - 6y^2 + 15y + 10$. Bestimme $MC$, $AC$, und bei welchem $y$ das $AC$-Minimum liegt.`,
 steps: [
 { text: `Grenzkosten:`, eq: String.raw`$$MC = \frac{\partial C}{\partial y} = 3y^2 - 12y + 15$$` },
 { text: `Stückkosten:`, eq: String.raw`$$AC = \frac{C}{y} = y^2 - 6y + 15 + \frac{10}{y}$$` },
 { text: `AC-Minimum: $MC = AC$ setzen:`, eq: String.raw`$$\begin{aligned}3y^2 - 12y + 15 &= y^2 - 6y + 15 + \frac{10}{y}\\ 2y^2 - 6y &= \frac{10}{y} \implies 2y^3 - 6y^2 - 10 = 0 \implies y^3 - 3y^2 - 5 = 0\end{aligned}$$` },
 { text: String.raw`Numerisch: $y \approx 3{,}5$ (Newton-Verfahren oder Schätzen).`, eq: null },
 ],
 result: String.raw`$MC = 3y^2-12y+15$; $AC$-Minimum bei $y \approx 3{,}5$`
 },
 {
 text: String.raw`Zeige: Im Minimum der Stückkosten gilt $MC = AC$. Nutze die Bedingung $\partial AC/\partial y = 0$.`,
 steps: [
 { text: `$AC = C(y)/y$. Ableitung:`, eq: String.raw`$$\frac{\partial AC}{\partial y} = \frac{C\prime(y) \cdot y - C(y)}{y^2} = \frac{MC - AC}{y}$$` },
 { text: `Notwendige Bedingung für Minimum:`, eq: String.raw`$$\frac{\partial AC}{\partial y} = 0 \iff \frac{MC - AC}{y} = 0 \iff MC = AC \quad \square$$` },
 { text: `Intuition: Wenn $MC < AC$, zieht die letzte Einheit den Durchschnitt runter. Wenn $MC >AC$, zieht sie ihn hoch.`, eq: null },
 ],
 result: `Im $AC$-Minimum gilt stets $MC = AC$ — durch Ableitung direkt gezeigt.`
 },
 {
 text: `Gegeben $STC(y) = 2y^2 + 50$ ($SFC = 50$). Berechne $SMC$, $SAVC$, $SAFC$, $SAC$ und den Shutdown-Point.`,
 steps: [
 { text: `Kostengliederung:`, eq: String.raw`$$SMC = 4y \qquad SVC = 2y^2 \qquad SAVC = 2y$$` },
 { text: `Stückfixkosten und Stückgesamtkosten:`, eq: String.raw`$$SAFC = \frac{50}{y} \qquad SAC = 2y + \frac{50}{y}$$` },
 { text: `Shutdown-Point (Minimum von $SAVC$):`, eq: String.raw`$$\begin{aligned}\frac{\partial SAVC}{\partial y} &= 2 > 0 \text{ für alle } y > 0 \implies SAVC \text{ ist streng steigend}\\ \implies \lim_{y \downarrow 0} SAVC(y) &= 0\end{aligned}$$` },
 { text: String.raw`Kurzfristig Angebotskurve: $p = SMC = 4y$ für $p \geq SAVC$. Im gewinnmaximalen Punkt $y = p/4$ gilt $SAVC = 2(p/4) = p/2 \leq p$, also produziert das Unternehmen für jedes $p>0$.`, eq: null },
 ],
 result: `$SMC = 4y$, $SAVC = 2y$; der Stilllegungspreis ist der Grenzfall $p \to 0^+$`
 },
 ]
 },
 gewinn: {
 motivation: 'Gewinnmaximierung bestimmt die optimale Outputmenge. Im Gleichgewicht: p = MC. Daraus folgt die Angebotsfunktion.',
 theorie: String.raw`
 <div class="section-block">
<h3>Gewinnmaximierung</h3>
<p>Ein Unternehmen unter vollkommenem Wettbewerb maximiert den Gewinn $\pi = p \cdot y - C(y)$, wobei $p$ der Marktpreis, $y$ die Outputmenge und $C(y)$ die Kostenfunktion ist. Die Bedingung erster Ordnung (FOC) lautet:</p>
<div class="math-block">$$\frac{d\pi}{dy} = p - MC(y) = 0 \implies p = MC(y)$$</div>
<p>$MC(y) = C'(y)$ sind die Grenzkosten. Im Gewinnmaximum setzt das Unternehmen den Output so, dass der Marktpreis gleich den Grenzkosten ist. Die Bedingung zweiter Ordnung erfordert $MC'(y) > 0$ (steigende Grenzkosten im Optimum).</p>
</div>
<div class="section-block">
<h3>Kurzfristige Angebotskurve</h3>
<p>Die Angebotskurve des Unternehmens ist der steigende Teil der Grenzkostenkurve oberhalb der durchschnittlichen variablen Kosten:</p>
<div class="math-block">$$S(p) = \begin{cases} MC^{-1}(p) & \text{falls } p \geq \min AVC \\ 0 & \text{falls } p < \min AVC \end{cases}$$</div>
<p>Unter dem Minimum der AVC stellt das Unternehmen die Produktion ein, da es nicht einmal die variablen Kosten decken kann (Stilllegungsbedingung). Fixkosten fallen kurzfristig ohnehin an und sind für die Produktionsentscheidung irrelevant.</p>
</div>
<div class="section-block">
<h3>Langfristige Angebotskurve</h3>
<p>Langfristig gibt es keine Fixkosten (alle Inputs sind variabel). Die Angebotskurve ist der steigende Teil der MC-Kurve oberhalb der durchschnittlichen Gesamtkosten (Durchschnittskosten, AC):</p>
<div class="math-block">$$p \geq \min AC \quad \text{(langfristige Produktionsbedingung)}$$</div>
<p>Unter dem AC-Minimum macht das Unternehmen langfristig Verluste und scheidet aus dem Markt aus.</p>
</div>
<div class="section-block">
<h3>Gewinnschwelle und Stilllegung</h3>
<p><strong>Gewinnschwelle (Break-even):</strong> $p = \min AC$. Das Unternehmen macht null ökonomischen Gewinn.</p>
<p><strong>Stilllegungspunkt (kurzfristig):</strong> $p = \min AVC$. Darunter stellt das Unternehmen die Produktion ein.</p>
<p>Im Bereich $\min AVC \leq p < \min AC$ produziert das Unternehmen kurzfristig mit Verlust, deckt aber zumindest einen Teil der Fixkosten.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Kurzfristig vs. langfristig</strong> Kurzfristige Stilllegung: $p < \min AVC$. Langfristiger Marktaustritt: $p < \min AC$. Die Schwellen unterscheiden sich, weil kurzfristig Fixkosten sowieso anfallen.</div>
</div>
`,
 formeln: [
 { label:'Gewinnmaximum', eq: String.raw`$$p = MC(y)$$`, desc:'Grenzerlös = Grenzkosten', variables: { 'p': 'Marktpreis', 'MC(y)': 'Grenzkosten bei Output y', 'y': 'Gewinnmaximale Menge' } },
 { label:'Wertgrenzprodukt', eq: String.raw`$$p \cdot F_L = w \quad \text{und} \quad p \cdot F_K = r$$`, desc:'Direkte Optimierung in Faktoren', variables: { 'p': 'Marktpreis', 'F_L': 'Grenzprodukt Arbeit', 'w': 'Lohnsatz', 'F_K': 'Grenzprodukt Kapital', 'r': 'Kapitalkosten' } },
 { label:'Hotellings Lemma', eq: String.raw`$$\frac{\partial \pi}{\partial p} = y, \qquad -\frac{\partial \pi}{\partial w} = L$$`, desc:'Angebot und Faktornachfrage aus Gewinnfunktion', variables: { '\\pi': 'Gewinnfunktion', 'p': 'Outputpreis', 'y': 'Angebot', 'w': 'Lohnsatz', 'L': 'Faktornachfrage Arbeit' } },
 ],
 aufgaben: [
 {
 text: String.raw`$F(L,K) = L^{0{,}5} K^{0{,}5}$, $\bar{K} = 4$ (fix). $p = 10$, $w = 2$. Gewinnmaximale Arbeitsmenge und Output?`,
 steps: [
 { text: `Kurzfristige Produktionsfunktion:`, eq: String.raw`$$y = L^{0{,}5} \cdot 4^{0{,}5} = 2L^{0{,}5}$$` },
 { text: `Gewinnfunktion und BEO:`, eq: String.raw`$$\pi = 10 \cdot 2L^{0{,}5} - 2L \implies \frac{d\pi}{dL} = \frac{10}{\sqrt{L}} - 2 = 0 \implies L^* = 25$$` },
 { text: `Ergebnis:`, eq: String.raw`$$y^* = 2\sqrt{25} = 10 \qquad \pi = 100 - 50 = 50$$` },
 { text: String.raw`Prüfung: $p \cdot MP_L = 10 \cdot (1/\sqrt{25}) = 10 \cdot 0{,}2 = 2 = w$ `, eq: null },
 ],
 result: String.raw`$L^* = 25$, $y^* = 10$, $\pi = 50$`
 },
 {
 text: `Angebotsfunktion herleiten: Gegeben $C(y) = y^2 + 4$. Bestimme $y^*(p)$ und die Gewinnschwelle.`,
 steps: [
 { text: `Gewinnmaximierung: $p = MC$:`, eq: String.raw`$$MC = 2y \implies p = 2y \implies y^*(p) = \frac{p}{2}$$` },
 { text: String.raw`Gewinnschwelle: Langfristig $p \geq AC$ nötig:`, eq: String.raw`$$\begin{aligned}AC &= y + \frac{4}{y}, \qquad \text{Minimum AC bei } MC = AC\\ 2y &= y + \frac{4}{y} \implies y^2 = 4 \implies y = 2 \implies AC_{\min} = 4\end{aligned}$$` },
 { text: `Langfristiges Angebot:`, eq: String.raw`$$y^*(p) = \begin{cases} \frac{p}{2} & \text{wenn } p \geq 4 \\ 0 & \text{wenn } p < 4 \end{cases}$$` },
 ],
 result: String.raw`$y^* = p/2$ für $p \geq 4$ (Gewinnschwelle); $y^* = 0$ sonst`
 },
 {
 text: String.raw`Hotellings Lemma: Gegeben $\pi(p,w) = p^2/(4w)$. Leite $y^*$ und $L^*$ ab.`,
 steps: [
 { text: String.raw`Hotellings Lemma: $y^* = \partial \pi/\partial p$:`, eq: String.raw`$$y^* = \frac{\partial}{\partial p}\left(\frac{p^2}{4w}\right) = \frac{2p}{4w} = \frac{p}{2w}$$` },
 { text: String.raw`Unbedingte Faktornachfrage: $L^* = -\partial \pi/\partial w$:`, eq: String.raw`$$L^* = -\frac{\partial}{\partial w}\left(\frac{p^2}{4w}\right) = -\left(-\frac{p^2}{4w^2}\right) = \frac{p^2}{4w^2}$$` },
 { text: String.raw`Prüfung: $\pi = p \cdot y^* - w \cdot L^* = p^2/(2w) - p^2/(4w) = p^2/(4w)$ `, eq: null },
 ],
 result: `$y^* = p/(2w)$, $L^* = p^2/(4w^2)$`
 },
 {
 text: `Ein Unternehmen hat $C(y) = 3y^2 + 12$. Bei welchem Preis beginnt es kurzfristig zu produzieren? Berechne auch den langfristigen Mindestpreis.`,
 steps: [
 { text: String.raw`$SVC = 3y^2$, $SFC = 12$. $SAVC = 3y$, Minimum bei $y \to 0$: $SAVC(y) = 3y$ monoton steigend.`, eq: null },
 { text: String.raw`Kurzfristig: Produktion wenn $p \geq SAVC$. Da $SAVC(0^+) = 0$, ist kurzfristiger Shutdown-Point bei $p = 0$.`, eq: null },
 { text: String.raw`Langfristig: Produktion wenn $p \geq AC_{\min}$:`, eq: String.raw`$$\begin{aligned}AC &= 3y + \frac{12}{y} \implies MC = AC: 6y = 3y + \frac{12}{y}\\ 3y^2 &= 12 \implies y^{\min} = 2,\qquad AC_{\min} = 3(2) + \frac{12}{2} = 12\end{aligned}$$` },
 { text: String.raw`Langfristiger Mindestpreis: $p_{\min} = 12$.`, eq: null },
 ],
 result: String.raw`Kurzfristig: $p_{\min} = 0$; Langfristig: $p_{\min} = AC_{\min} = 12$`
 },
 ]
 },
 markt: {
 motivation: 'Das Wettbewerbsgleichgewicht koordiniert dezentrale Entscheidungen über den Preismechanismus und führt zur effizienten Allokation.',
 theorie: String.raw`
 <div class="section-block">
<h3>Marktgleichgewicht</h3>
<p>Im <strong>Marktgleichgewicht</strong> stimmen die aggregierte Nachfrage $D(p)$ und das aggregierte Angebot $S(p)$ überein. Der Gleichgewichtspreis $p^*$ und die Gleichgewichtsmenge $q^*$ sind bestimmt durch:</p>
<div class="math-block">$$D(p^*) = S(p^*) \implies q^*$$</div>
<p>Die Marktnachfrage ergibt sich als horizontale Summation der individuellen Nachfragefunktionen: $D(p) = \sum_i x_i^*(p)$. Das Marktangebot als horizontale Summation der individuellen Angebotsfunktionen: $S(p) = \sum_j y_j(p)$.</p>
</div>
<div class="section-block">
<h3>Konsumentenrente</h3>
<p>Die <strong>Konsumentenrente (KR)</strong> misst den Wohlfahrtsgewinn der Konsumenten aus dem Marktaustausch. Sie ist die Fläche zwischen der Nachfragekurve und dem Gleichgewichtspreis:</p>
<div class="math-block">$$KR = \int_0^{q^*} p(q)\, dq - p^* \cdot q^*$$</div>
<p>Bei linearer inverser Nachfrage $p(q) = a - bq$ vereinfacht sich dies zum Dreieck:</p>
<div class="math-block">$$KR = \frac{1}{2}(a - p^*) \cdot q^*$$</div>
<p>Die KR misst die aggregierte Zahlungsbereitschaft abzüglich der tatsächlichen Ausgaben.</p>
</div>
<div class="section-block">
<h3>Produzentenrente</h3>
<p>Die <strong>Produzentenrente (PR)</strong> misst den Wohlfahrtsgewinn der Produzenten. Sie ist die Fläche zwischen dem Gleichgewichtspreis und der Angebotskurve:</p>
<div class="math-block">$$PR = p^* \cdot q^* - \int_0^{q^*} MC(q)\, dq$$</div>
<p>Bei linearem Angebot $S(p) = cp$ ergibt sich ebenfalls ein Dreieck: $PR = \frac{1}{2} p^* \cdot q^*$ (bei Angebot durch den Ursprung).</p>
</div>
<div class="section-block">
<h3>Gesamtwohlfahrt und Effizienz</h3>
<p>Die <strong>Gesamtwohlfahrt</strong> $W = KR + PR$ wird im Wettbewerbsgleichgewicht maximiert. Jede Abweichung vom Gleichgewicht (z.B. durch Steuern, Preiskontrollen, Monopol) erzeugt einen <strong>Wohlfahrtsverlust (DWL)</strong>:</p>
<div class="math-block">$$DWL = W_{\text{Wettbewerb}} - W_{\text{mit Eingriff}} > 0$$</div>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Horizontale, nicht vertikale Aggregation</strong> Marktnachfrage: Bei gegebenem Preis werden die Mengen addiert ($D = \sum x_i$). Die inverse Nachfrage wird danach umgeformt.</div>
<div class="warn-box"><strong>KR-Approximation</strong> Die Konsumentenrente unter der Marshallschen Nachfrage ist nur eine Approximation des wahren Wohlfahrtsmaßes. Bei quasi-linearen Präferenzen ist sie exakt, sonst nicht.</div>
</div>
`,
 formeln: [
 { label:'Gleichgewichtsbedingung', eq: String.raw`$$S(p^*) = D(p^*) = y^*$$`, desc:'Angebot = Nachfrage', variables: { 'S(p^*)': 'Angebotsmenge', 'D(p^*)': 'Nachfragemenge', 'p^*': 'Gleichgewichtspreis' } },
 { label:'Effizienzbedingung', eq: String.raw`$$MZB = p^* = MC$$`, desc:'Soziales Optimum', variables: { 'MZB': 'Marginale Zahlungsbereitschaft', 'p^*': 'Gleichgewichtspreis', 'MC': 'Grenzkosten' } },
 { label:'Wohlfahrt', eq: String.raw`$$W = KR + PR$$`, desc:'Summe der Renten', variables: { 'W': 'Gesamtwohlfahrt', 'KR': 'Konsumentenrente', 'PR': 'Produzentenrente' } },
 ],
 aufgaben: [
 {
 text: `$S(p) = 2p - 2$, $D(p) = 10 - p$. (a) Gleichgewicht bestimmen. (b) Wohlfahrt berechnen.`,
 steps: [
 { text: `(a) Marktgleichgewicht:`, eq: String.raw`$$\begin{aligned}2p - 2 &= 10 - p \implies 3p = 12 \implies p^* = 4\\ y^* &= D(4) = 10 - 4 = 6 \checkmark\end{aligned}$$` },
 { text: `(b) Konsumentenrente (Dreieck über $p^*$, unter $D$):`, eq: String.raw`$$KR = \frac{1}{2}(10 - 4) \cdot 6 = 18$$` },
 { text: String.raw`Produzentenrente (Dreieck unter $p^*$, über $S$; Minimalpreis bei $S=0$: $p_{\min}=1$):`, eq: String.raw`$$PR = \frac{1}{2}(4 - 1) \cdot 6 = 9$$` },
 { text: `Gesamtwohlfahrt:`, eq: String.raw`$$W = KR + PR = 18 + 9 = 27$$` },
 ],
 result: `$p^* = 4$, $y^* = 6$, $KR = 18$, $PR = 9$, $W = 27$`
 },
 {
 text: `Im obigen Markt wird eine Mengensteuer von $t = 1{,}5$ eingeführt. Berechne den neuen Gleichgewichtspreis, Menge und den Wohlfahrtsverlust (DWL).`,
 steps: [
 { text: `Mengensteuer verschiebt Angebotskurve: $S_t(p) = S(p-t) = 2(p-1{,}5)-2 = 2p-5$`, eq: null },
 { text: `Neues Gleichgewicht:`, eq: String.raw`$$\begin{aligned}2p - 5 &= 10 - p \implies 3p = 15 \implies p_D = 5,\qquad p_S = 5 - 1{,}5 = 3{,}5\\ y_t &= 10 - 5 = 5\end{aligned}$$` },
 { text: String.raw`Steuereinnahmen: $T = t \cdot y_t = 1{,}5 \cdot 5 = 7{,}5$`, eq: null },
 { text: `Wohlfahrtsverlust (DWL = Dreieck zwischen altem und neuem Gleichgewicht):`, eq: String.raw`$$DWL = \frac{1}{2} \cdot t \cdot (y^* - y_t) = \frac{1}{2} \cdot 1{,}5 \cdot 1 = 0{,}75$$` },
 ],
 result: `$p_D = 5$, $y_t = 5$, $T = 7{,}5$, $DWL = 0{,}75$`
 },
 {
 text: String.raw`Aggregation: Zwei Anbieter $y_1(p) = p$ und $y_2(p) = 2p - 4$ (für $p \geq 2$). Bestimme das Marktangebot $S(p)$.`,
 steps: [
 { text: `Für $p < 2$: Nur Anbieter 1 aktiv ($y_2 = 0$, da $2p-4 < 0$):`, eq: String.raw`$$S(p) = p \quad \text{für } p < 2$$` },
 { text: String.raw`Für $p \geq 2$: Beide aktiv:`, eq: String.raw`$$S(p) = y_1 + y_2 = p + 2p - 4 = 3p - 4 \quad \text{für } p \geq 2$$` },
 { text: `Horizontale Addition: Bei jedem Preis die Mengen aufaddieren.`, eq: null },
 { text: `Kontrolle: $S(2) = 3(2)-4 = 2$; $y_1(2) = 2$, $y_2(2) = 0$ → $2 + 0 = 2$ `, eq: null },
 ],
 result: String.raw`$S(p) = p$ für $p < 2$; $S(p) = 3p-4$ für $p \geq 2$`
 },
 {
 text: `Erkläre: Warum ist das Wettbewerbsgleichgewicht Pareto-effizient? Nutze die Bedingungen $MZB = p^* = MC$.`,
 steps: [
 { text: `Im Gleichgewicht: $p^* = MC$ (Produzenten) und $p^* = MZB$ (Konsumenten).`, eq: null },
 { text: `Daher:`, eq: String.raw`$$MZB = MC \quad \text{für alle am Markt}$$` },
 { text: `Pareto-Effizienz: Keine weitere Einheit kann erzeugt werden, bei der $MZB >MC$ (Wohlfahrtsgewinn möglich).`, eq: null },
 { text: `Jede Abweichung von $y^*$ erzeugt DWL: Für $y < y^*$ gilt $MZB >MC$ — unausgeschöpftes Wohlfahrtspotenzial.`, eq: String.raw`$$DWL = \int_{y_t}^{y^*} [MZB(y) - MC(y)]\, dy >0$$` },
 ],
 result: `Im GG: $MZB = MC$ — maximale Gesamtrente, kein DWL, Pareto-Effizienz.`
 },
 {
 text: String.raw`Analysieren Sie den Wohlfahrtsverlust (Deadweight Loss, DWL) durch einen Höchstpreis. Gegeben seien die Marktnachfrage $D(p) = 100 - p$ und das Marktangebot $S(p) = p$. Berechnen Sie den DWL für einen staatlich verordneten Höchstpreis von $p_{max} = 40$.`,
 steps: [
 { text: String.raw`Schritt 1: Bestimmung des Marktgleichgewichts ohne Eingriff:`, eq: String.raw`$$100 - p = p \implies 2p = 100 \implies p^* = 50, \quad q^* = 50$$` },
 { text: String.raw`Schritt 2: Analyse der Situation bei $p_{max} = 40$: Da der Höchstpreis unter dem Gleichgewichtspreis liegt, ist er bindend. Die angebotene Menge sinkt auf $q_S(40) = 40$. Da $q_S < q_D$, ist dies die tatsächlich am Markt gehandelte Menge (Short-side-Prinzip).`, eq: null },
 { text: String.raw`Schritt 3: Bestimmung der marginalen Zahlungsbereitschaft bei $q = 40$:`, eq: String.raw`$$p_D(40) = 100 - 40 = 60$$` },
 { text: String.raw`Schritt 4: Berechnung des Wohlfahrtsverlusts (DWL). Der DWL entspricht der Fläche des Dreiecks zwischen Nachfrage- und Angebotskurve im Bereich der nicht realisierten Einheiten zwischen $q = 40$ und $q^* = 50$:`, eq: String.raw`$$DWL = \frac{1}{2} \cdot (p_D(40) - p_S(40)) \cdot (q^* - q_S) = \frac{1}{2} \cdot (60 - 40) \cdot (50 - 40)$$` },
 { text: String.raw`Berechnung:`, eq: String.raw`$$DWL = \frac{1}{2} \cdot 20 \cdot 10 = 100$$` },
 ],
 result: String.raw`$DWL = 100$. Der Höchstpreis führt zu einer ineffizient geringen Menge und einem Wohlfahrtsverlust von 100 Einheiten.`
 },
 ]
 },
 monopol: {
 motivation: 'Der Monopolist als Preisnehmer-Gegenstück setzt p >MC, erzeugt DWL und verdient einen Monopolgewinn.',
 theorie: String.raw`
 <div class="section-block">
<h3>Monopol: Grundmodell</h3>
<p>Ein <strong>Monopolist</strong> ist der einzige Anbieter eines Gutes. Im Gegensatz zum Wettbewerbsunternehmen (Preisnehmer) wählt der Monopolist Preis oder Menge strategisch. Er sieht sich der gesamten Marktnachfrage gegenüber.</p>
<p>Die <strong>inverse Nachfragefunktion</strong> $p(y)$ gibt den Preis an, zu dem der Monopolist $y$ Einheiten absetzen kann. Sie ist fallend: $p'(y) < 0$.</p>
</div>
<div class="section-block">
<h3>Gewinnmaximierung</h3>
<p>Der Monopolist maximiert den Gewinn $\pi = p(y) \cdot y - C(y)$:</p>
<div class="math-block">$$\frac{d\pi}{dy} = \underbrace{p(y) + y \cdot p'(y)}_{MR(y)} - MC(y) = 0$$</div>
<p>Der <strong>Grenzerlös</strong> $MR(y) = p(y) + y \cdot p'(y)$ liegt unter der Nachfragekurve, da der Monopolist den Preis für alle Einheiten senken muss, um eine weitere zu verkaufen. Bei linearer Nachfrage $p = a - by$ ist $MR = a - 2by$ (doppelte Steigung).</p>
<div class="math-block">$$MR = MC \quad \text{(Gewinnmaximierungsbedingung)}$$</div>
</div>
<div class="section-block">
<h3>Monopolpreis und Lerner-Index</h3>
<p>Der Monopolpreis liegt über den Grenzkosten: $p_m > MC(y_m)$. Der <strong>Lerner-Index</strong> misst die Marktmacht:</p>
<div class="math-block">$$L = \frac{p_m - MC}{p_m} = \frac{1}{|\varepsilon_p|}$$</div>
<p>$\varepsilon_p$ ist die Preiselastizität der Nachfrage. Je unelastischer die Nachfrage (kleines $|\varepsilon_p|$), desto mehr kann der Monopolist aufschlagen. Im elastischen Bereich ($|\varepsilon_p| > 1$) produziert der Monopolist immer, da dort $MR > 0$.</p>
</div>
<div class="section-block">
<h3>Wohlfahrtsverlust (DWL)</h3>
<p>Der Monopolist produziert weniger als die wettbewerbliche Menge ($y_m < y_c$) und verlangt einen höheren Preis ($p_m > p_c$). Dies erzeugt einen <strong>Wohlfahrtsverlust</strong> (Harberger-Dreieck): Transaktionen, die bei Wettbewerb stattfänden und Wohlfahrt erzeugen würden, kommen nicht zustande.</p>
<div class="math-block">$$DWL = \frac{1}{2}(p_m - MC(y_m))(y_c - y_m)$$</div>
</div>
<div class="section-block">
<h3>Preisdiskriminierung</h3>
<p><strong>1. Grades (perfekt):</strong> Der Monopolist verlangt von jedem Konsumenten dessen maximale Zahlungsbereitschaft. Keine Konsumentenrente, aber effiziente Menge ($y = y_c$).</p>
<p><strong>2. Grades (Mengenrabatt):</strong> Verschiedene Preise je nach Kaufmenge (z.B. Staffelpreise).</p>
<p><strong>3. Grades (Gruppenpreise):</strong> Verschiedene Preise für verschiedene Kundengruppen (z.B. Studenten vs. Erwachsene). Bedingung: $MR_1 = MR_2 = MC$.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>MR liegt unter der Nachfragekurve</strong> Der Monopolpreis $p_m$ wird NICHT am Schnittpunkt $MR = MC$ abgelesen, sondern auf der Nachfragekurve bei $y_m$: Erst $y_m$ aus $MR = MC$, dann $p_m = p(y_m)$.</div>
<div class="warn-box"><strong>Elastischer Bereich</strong> Der Monopolist produziert nie im unelastischen Bereich der Nachfrage, da dort $MR < 0$ und somit der Gewinn durch Mengenreduktion gesteigert werden könnte.</div>
</div>
`,
 formeln: [
 { label:'Grenzerlös', eq: String.raw`$$E'(y) = p(y) + p'(y) \cdot y$$`, desc:'Immer kleiner als Preis' },
 { label:'Cournotscher Punkt', eq: String.raw`$$E'(y_m) = C'(y_m)$$`, desc:'Optimale Monopolmenge' },
 { label:'DWL', eq: String.raw`$$DWL = \int_{y_m}^{y_{vk}} [p(y) - MC(y)]\, dy$$`, desc:'Harberger-Dreieck', variables: { 'y_m': 'Monopolmenge', 'y_{vk}': 'Wettbewerbsmenge', 'p(y)': 'Inverse Nachfrage', 'MC(y)': 'Grenzkosten' } },
 ],
 aufgaben: [
  {
  text: String.raw`$p(y) = 1-y$, $C(y) = y^2$. Berechne das Monopoloptimum ($y_m$, $p_m$, $\pi_m$) und den Wohlfahrtsverlust.`,
  steps: [
  { text: `Gewinnfunktion:`, eq: String.raw`$$\pi = p(y)\cdot y - C(y) = (1-y)y - y^2 = y - 2y^2$$` },
  { text: String.raw`BEO: $\pi' = 1 - 4y = 0$:`, eq: String.raw`$$y_m = \frac{1}{4}$$` },
  { text: `Monopolpreis:`, eq: String.raw`$$p_m = 1 - \frac{1}{4} = \frac{3}{4}$$` },
  { text: `Gewinn:`, eq: String.raw`$$\pi_m = \frac{3}{4} \cdot \frac{1}{4} - \left(\frac{1}{4}\right)^2 = \frac{3}{16} - \frac{1}{16} = \frac{1}{8}$$` },
  { text: String.raw`Wettbewerbsoptimum ($p = MC$): $1-y = 2y \implies y_{vk} = 1/3$`, eq: null },
  { text: String.raw`DWL = Dreieck zwischen $y_m=1/4$ und $y_{vk}=1/3$, zwischen Nachfrage und MC:`, eq: String.raw`$$DWL = \frac{1}{2}\left(p_m - MC(y_m)\right)(y_{vk}-y_m) = \frac{1}{2}\cdot\frac{1}{4}\cdot\frac{1}{12} = \frac{1}{96} \approx 0{,}010$$` },
  ],
  result: String.raw`$y_m=1/4$, $p_m=3/4$, $\pi_m=1/8$, DWL $=1/96$`
  },
  {
  text: String.raw`Linearer Monopol: $p(y) = 10 - y$, $MC = 2$ (konstant). Berechne $y_m$, $p_m$, Lerner-Index, Monopolgewinn und DWL.`,
  steps: [
  { text: String.raw`$MR = 10 - 2y$. Bedingung $MR = MC$:`, eq: String.raw`$$10 - 2y_m = 2 \implies y_m = 4$$` },
  { text: String.raw`Monopolpreis (von Nachfragekurve!):`, eq: String.raw`$$p_m = 10 - 4 = 6$$` },
  { text: String.raw`Lerner-Index:`, eq: String.raw`$$L = \frac{p_m - MC}{p_m} = \frac{6-2}{6} = \frac{2}{3} \approx 0{,}67$$` },
  { text: String.raw`Monopolgewinn: $\pi_m = (p_m - MC) \cdot y_m = 4 \cdot 4 = 16$.`, eq: null },
  { text: String.raw`Wettbewerbsmenge: $p_c = MC = 2 \implies y_c = 8$. DWL:`, eq: String.raw`$$DWL = \frac{1}{2}(p_m - MC)(y_c - y_m) = \frac{1}{2} \cdot 4 \cdot 4 = 8$$` },
  ],
  result: String.raw`$y_m=4$, $p_m=6$, $L=2/3$, $\pi_m=16$, DWL=8`
  },
  {
  text: String.raw`Preisdiskriminierung 3. Grades: Ein Monopolist verkauft an zwei Gruppen. $p_1(y_1) = 10 - y_1$, $p_2(y_2) = 8 - y_2$, $MC = 2$. Optimale Mengen und Preise?`,
  steps: [
  { text: String.raw`Bedingung: $MR_1 = MR_2 = MC$.`, eq: null },
  { text: String.raw`Gruppe 1: $MR_1 = 10 - 2y_1 = 2 \implies y_1 = 4$, $p_1 = 6$.`, eq: null },
  { text: String.raw`Gruppe 2: $MR_2 = 8 - 2y_2 = 2 \implies y_2 = 3$, $p_2 = 5$.`, eq: null },
  { text: String.raw`Prüfung: Welche Gruppe zahlt mehr? Gruppe 1 ($p_1=6 > p_2=5$) — hat unelastischere Nachfrage: $|\varepsilon_1| = p_1/(p_1-MC) = 6/4 = 1{,}5 < |\varepsilon_2| = 5/3 \approx 1{,}67$.`, eq: null },
  ],
  result: String.raw`$y_1=4, p_1=6$; $y_2=3, p_2=5$. Weniger elastische Gruppe zahlt höheren Preis.`
  },
  ]
 },
 homothet: {
 motivation: 'Homothetische Präferenzen implizieren Engel-Kurven als Ursprungsgeraden: Das Konsumverhältnis ist einkommensunabhängig.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p>Eine Nutzenfunktion $u(x_1, x_2)$ heißt <strong>homothetisch</strong>, wenn sie als positiv monotone Transformation einer homogenen Funktion darstellbar ist. Formal: $u(x_1,x_2) = g(f(x_1,x_2))$ wobei $f$ homogen vom Grad $k$ ist und $g$ streng monoton steigend.</p>
<div class="math-block">$$u \text{ homothetisch} \iff u(\lambda x_1, \lambda x_2) = h(\lambda) \cdot u(x_1, x_2) \;\text{für eine monotone } h$$</div>
</div>
<div class="section-block">
<h3>Zentrale Eigenschaft: Konstante Ausgabenanteile</h3>
<p>Bei homothetischen Präferenzen sind die optimalen <strong>Ausgabenanteile</strong> $s_i = p_i x_i^*/m$ unabhängig vom Einkommen. Das bedeutet: Alle Engel-Kurven sind Ursprungsgeraden, und die Einkommenselastizität jedes Gutes ist exakt 1.</p>
<div class="math-block">$$\varepsilon_{x_i, m} = 1 \quad \text{für alle Güter } i$$</div>
<p>Daraus folgt: Bei homothetischen Präferenzen gibt es weder inferiore Güter noch Luxusgüter. Alle Güter sind "normale Güter" im engeren Sinne.</p>
</div>
<div class="section-block">
<h3>Beispiele homothetischer Nutzenfunktionen</h3>
<p><strong>Cobb-Douglas:</strong> $u = x_1^\alpha x_2^{1-\alpha}$ ist homogen vom Grad 1, also trivial homothetisch.</p>
<p><strong>CES:</strong> $u = (\alpha x_1^\rho + (1-\alpha)x_2^\rho)^{1/\rho}$ ist homogen vom Grad 1.</p>
<p><strong>Perfekte Substitute und Komplemente</strong> sind ebenfalls homothetisch.</p>
<p><strong>Nicht homothetisch:</strong> Quasi-lineare Nutzenfunktionen $u = f(x_1) + x_2$. Hier wächst die Nachfrage nach Gut 1 nicht mit dem Einkommen (ab einem Schwellenwert).</p>
</div>
<div class="section-block">
<h3>Geometrische Interpretation</h3>
<p>Homothetische Präferenzen bedeuten: Entlang jedes Strahls durch den Ursprung haben alle Indifferenzkurven <strong>dieselbe Steigung</strong> (gleiche GRS). Der Expansionspfad (Verbindung aller Optima bei variierendem $m$) ist daher immer ein Strahl durch den Ursprung.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Homothetisch ist nicht gleich linear-homogen</strong> $u = (x_1 x_2)^2$ ist homothetisch (monotone Transformation von $x_1 x_2$, das homogen Grad 2 ist), aber selbst homogen vom Grad 4. Homothetizität ist die allgemeinere Eigenschaft.</div>
</div>
`,
 formeln: [
 { label:'Homothetie-Bedingung', eq: String.raw`$$GRS(x_1, x_2) = f\!\left(\frac{x_2}{x_1}\right)$$`, desc:'GRS hängt nur von Ratio ab', variables: { 'GRS': 'Grenzrate der Substitution', 'x_2/x_1': 'Konsumverhältnis' } },
 { label:'Einkommenselastizität', eq: String.raw`$$\varepsilon_{x,m} = 1$$`, desc:'Für alle Güter bei homothetischen Präferenzen', variables: { '\\varepsilon_{x,m}': 'Einkommenselastizität', 'x': 'Nachfrage', 'm': 'Einkommen' } },
 ],
 aufgaben: [
 {
 text: `Zeige, dass $u(x_1,x_2) = x_1 x_2$ homothetisch ist.`,
 steps: [
 { text: `$GRS = MU_1/MU_2 = x_2/x_1$ — hängt nur vom Verhältnis $x_2/x_1$ ab:`, eq: String.raw`$$GRS = f\left(\frac{x_2}{x_1}\right) = \frac{x_2}{x_1} \implies \text{homothetisch} \checkmark$$` },
 { text: String.raw`Konsequenz: Engel-Kurven sind Ursprungsgeraden. Mit $x_1^* = \alpha m/p_1$:`, eq: String.raw`$$x_1^*(\lambda m) = \lambda x_1^*(m) \quad \forall \lambda >0$$` },
 ],
 result: `GRS = $x_2/x_1$ — Funktion ist homothetisch`
 },
 {
 text: String.raw`Ist $u(x_1,x_2) = \ln x_1 + \ln x_2$ homothetisch? Ist es linear-homogen? Was ist der Unterschied?`,
 steps: [
 { text: `$GRS = MU_1/MU_2 = (1/x_1)/(1/x_2) = x_2/x_1$ — nur abhängig von $x_2/x_1$ → homothetisch.`, eq: null },
 { text: String.raw`Linear-homogen-Test ($u(\lambda x) = \lambda u(x)$?):`, eq: String.raw`$$u(\lambda x_1, \lambda x_2) = \ln(\lambda x_1) + \ln(\lambda x_2) = 2\ln\lambda + \ln x_1 + \ln x_2 \neq \lambda u$$` },
 { text: `Also: homothetisch, aber NICHT linear-homogen.`, eq: null },
 { text: String.raw`Monotone Transformation: $u = \ln(x_1 x_2) = f(v)$ mit $v = x_1 x_2$ (linear-homogen) und $f = \ln$. → Homothetisch per Definition.`, eq: null },
 ],
 result: `Homothetisch: ja. Linear-homogen: nein. Homothetisch = monotone Trafo einer lin-hom. Funktion.`
 },
 {
 text: `Beweise: Bei homothetischen Präferenzen sind Engel-Kurven Ursprungsgeraden (Einkommenselastizität = 1).`,
 steps: [
 { text: `Homothetie: GRS hängt nur von $x_2/x_1$ ab. Optimalbedingung: $GRS(x_2/x_1) = p_1/p_2$.`, eq: null },
 { text: `Das optimale Verhältnis $x_2^*/x_1^*$ hängt nur von Preisen, nicht von $m$ ab.`, eq: String.raw`$$\frac{x_2^*}{x_1^*} = g\left(\frac{p_1}{p_2}\right) \quad \text{(nur von Preisen abhängig)}$$` },
 { text: `Mit Budget $p_1 x_1^* + p_2 x_2^* = m$: Verdopplung von $m$ verdoppelt beide $x_i^*$.`, eq: String.raw`$$x_i^*(p, \lambda m) = \lambda x_i^*(p, m) \implies \varepsilon_{x_i, m} = 1 \quad \square$$` },
 ],
 result: String.raw`$\varepsilon_{x_i,m} = 1$ und Engel-Kurven als Ursprungsgeraden bei homothetischen Präferenzen.`
 },
 ]
 },
 ordinal: {
 motivation: 'Nutzen ist ordinal: Nur die Rangfolge zählt. Deshalb sind positiv-monotone Transformationen der Nutzenfunktion ökonomisch äquivalent.',
 theorie: String.raw`
 <div class="section-block">
<h3>Ordinalität des Nutzens</h3>
<p>In der Mikroökonomik ist Nutzen <strong>ordinal</strong>, nicht kardinal. Das bedeutet: Die Nutzenfunktion $u(x_1, x_2)$ ordnet Güterbündeln Zahlen zu, sodass bevorzugte Bündel höhere Zahlen erhalten. Entscheidend ist nur die Rangfolge, nicht die absoluten Zahlenwerte oder deren Abstände.</p>
<div class="math-block">$$u(a) > u(b) \iff a \succ b$$</div>
<p>Ob $u(a) = 10$ und $u(b) = 5$ oder $u(a) = 1000$ und $u(b) = 1$ ist, spielt keine Rolle. Ebenso ist die Aussage "$a$ ist doppelt so gut wie $b$" bei ordinalem Nutzen sinnlos.</p>
</div>
<div class="section-block">
<h3>Monotone Transformationen</h3>
<p>Eine <strong>positiv monotone Transformation</strong> $v = g(u)$ mit $g' > 0$ erzeugt eine neue Nutzenfunktion, die dieselben Präferenzen repräsentiert. Die Rangfolge aller Bündel bleibt erhalten, die GRS bleibt unverändert, und die optimale Wahl ändert sich nicht.</p>
<div class="math-block">$$v(x_1,x_2) = g(u(x_1,x_2)) \quad \text{mit } g' > 0 \quad \Rightarrow \quad \text{gleiche Präferenzen}$$</div>
<p>Beispiele für zulässige Transformationen:</p>
<p><strong>Logarithmische Transformation:</strong> $v = \ln(u)$. Vereinfacht oft die Berechnung, z.B. wird Cobb-Douglas $u = x_1^\alpha x_2^{1-\alpha}$ zu $v = \alpha \ln x_1 + (1-\alpha)\ln x_2$.</p>
<p><strong>Affine Transformation:</strong> $v = a \cdot u + b$ mit $a > 0$. Skalierung und Verschiebung.</p>
<p><strong>Potenztransformation:</strong> $v = u^k$ mit $k > 0$. Z.B. $v = u^2$ oder $v = \sqrt{u}$.</p>
</div>
<div class="section-block">
<h3>Was sich nicht ändert</h3>
<p><strong>Invariant unter monotoner Transformation:</strong> Indifferenzkurven (Form und Lage), GRS (Steigung der IK), optimale Wahl, Nachfragefunktionen.</p>
<p><strong>Nicht invariant:</strong> Grenznutzen $MU_i$ (ändert sich), Lagrange-Multiplikator $\lambda$ (ändert sich), absolute Nutzenwerte (ändern sich).</p>
</div>
<div class="section-block">
<h3>GRS-Invarianz (Beweis)</h3>
<p>Sei $v = g(u)$. Dann:</p>
<div class="math-block">$$GRS_v = \frac{\partial v/\partial x_1}{\partial v/\partial x_2} = \frac{g'(u)\cdot MU_1}{g'(u)\cdot MU_2} = \frac{MU_1}{MU_2} = GRS_u$$</div>
<p>Der Faktor $g'(u)$ kürzt sich heraus. Die GRS ist daher eine rein ordinale Eigenschaft der Präferenzen.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Grenznutzen ist nicht ordinal</strong> Obwohl $MU_i$ sich unter monotonen Transformationen ändert, ist das Verhältnis $MU_1/MU_2$ (die GRS) invariant. Aussagen über den absoluten Grenznutzen sind ökonomisch nicht interpretierbar.</div>
<div class="warn-box"><strong>Nicht-monotone Transformationen sind verboten</strong> $v = -u$ oder $v = u^2$ mit negativen $u$-Werten können die Rangfolge umkehren und repräsentieren dann andere Präferenzen.</div>
</div>
`,
 formeln: [
 { label:'Positiv-monotone Transformation', eq: String.raw`$$v = f(u(\mathbf{x})),\quad f' > 0$$`, desc:'Äquivalente Nutzendarstellung' },
 { label:'GRS invariant', eq: String.raw`$$\frac{MU_{1,v}}{MU_{2,v}} = \frac{f' \cdot MU_{1,u}}{f' \cdot MU_{2,u}} = \frac{MU_{1,u}}{MU_{2,u}}$$`, desc:'Kettenregel: f kürzt sich heraus', variables: { 'MU_{1,v}': 'Grenznutzen Gut 1 unter Transformation v', 'MU_{2,v}': 'Grenznutzen Gut 2 unter v', 'f\'': 'Ableitung der monotonen Transformation' } },
 ],
aufgaben: [
  {
  text: String.raw`Zeige, dass $v(x_1,x_2) = (x_1 \cdot x_2)^2$ dieselbe GRS hat wie $u(x_1,x_2) = x_1 \cdot x_2$.`,
  steps: [
  { text: `GRS aus u:`, eq: String.raw`$$MU_1 = x_2,\; MU_2 = x_1 \implies GRS_u = \frac{x_2}{x_1}$$` },
  { text: String.raw`Partielle Ableitungen von $v = (x_1 x_2)^2$:`, eq: String.raw`$$\frac{\partial v}{\partial x_1} = 2x_1 x_2^2 \qquad \frac{\partial v}{\partial x_2} = 2x_1^2 x_2$$` },
  { text: `GRS aus v:`, eq: String.raw`$$GRS_v = \frac{2x_1 x_2^2}{2x_1^2 x_2} = \frac{x_2}{x_1} = GRS_u \checkmark$$` },
  ],
  result: String.raw`$GRS_v = x_2/x_1 = GRS_u$ — Transformation ändert GRS nicht`
  },
  {
  text: String.raw`Was ist bei einer monotonen Transformation $v = g(u)$ invariant, was ändert sich? Ordne zu: GRS, Nachfrage, $MU_1$, $\lambda$, Indifferenzkurven, Nutzenwerte.`,
  steps: [
  { text: String.raw`Invariant (ändert sich NICHT): GRS $= MU_1/MU_2$ (weil $g'$ sich kürzt), Indifferenzkurven (gleiche Niveaukurven), Marshallsche Nachfrage (gleiche Optimierung).`, eq: null },
  { text: String.raw`Nicht invariant (ändert sich): $MU_i$ einzeln (multipliziert mit $g'(u)$), $\lambda$ (Grenznutzen des Einkommens), absolute Nutzenwerte.`, eq: String.raw`$$MU_{1,v} = g'(u) \cdot MU_{1,u} \quad \text{(skaliert mit } g')$$` },
  { text: String.raw`Schlussfolgerung: Nur ordinale Konzepte (GRS, Rangfolge, Nachfrage) sind robust. Kardinale Konzepte ($MU$, $\lambda$) sind nicht interpretierbar.`, eq: null },
  ],
  result: `Invariant: GRS, IK, Nachfrage. Nicht invariant: MUᵢ, λ, Nutzenwerte.`
  },
  {
  text: String.raw`$u(x_1,x_2) = x_1^2 x_2^2$ vs. $v(x_1,x_2) = x_1 x_2$. Zeige, dass beide dieselbe Nachfrage erzeugen.`,
  steps: [
  { text: String.raw`$u = (x_1 x_2)^2 = g(x_1 x_2)$ mit $g(t) = t^2$ — streng monoton steigend für $t>0$. Also: Monotone Transformation von $v = x_1 x_2$.`, eq: null },
  { text: String.raw`Nachfrage aus $v$: $x_1^* = m/(2p_1)$, $x_2^* = m/(2p_2)$.`, eq: null },
  { text: String.raw`Nachfrage aus $u$: GRS$_u = x_2/x_1 =$ GRS$_v$ → gleiche Tangentialbedingung → gleiche Nachfrage.`, eq: String.raw`$$x_1^*(u) = \frac{m}{2p_1} = x_1^*(v) \checkmark$$` },
  ],
  result: String.raw`Beide Nutzenfunktionen liefern identische Nachfrage — Ordinalität bestätigt.`
  },
  ]
 },
 marshall: {
 motivation: 'Marshallsche Nachfragefunktionen beschreiben, wie die optimale Konsummenge von Preisen und Einkommen abhängt.',
 theorie: String.raw`
 <div class="section-block">
<h3>Definition</h3>
<p>Die <strong>Marshallsche (gewöhnliche) Nachfragefunktion</strong> $x_i^*(p_1, p_2, m)$ gibt die nutzenmaximierende Menge von Gut $i$ in Abhängigkeit von allen Preisen und dem Einkommen $m$ an. Sie ergibt sich als Lösung des Haushaltsoptimierungsproblems $\max u(x_1,x_2)$ unter der Budgetrestriktion $p_1 x_1 + p_2 x_2 \leq m$.</p>
</div>
<div class="section-block">
<h3>Herleitung (allgemein)</h3>
<p>Die Marshallsche Nachfrage wird über die Lagrange-Methode hergeleitet. Aus den Bedingungen erster Ordnung folgt die Tangentialbedingung:</p>
<div class="math-block">$$\frac{MU_1}{MU_2} = \frac{p_1}{p_2} \quad \text{(GRS = Preisverhältnis)}$$</div>
<p>Zusammen mit der Budgetrestriktion $p_1 x_1 + p_2 x_2 = m$ bildet dies ein Gleichungssystem mit zwei Gleichungen und zwei Unbekannten ($x_1^*, x_2^*$). Die Lösung liefert die Marshallschen Nachfragefunktionen.</p>
</div>
<div class="section-block">
<h3>Beispiel: Cobb-Douglas</h3>
<p>Für $u(x_1,x_2) = x_1^\alpha x_2^{1-\alpha}$ mit $0 < \alpha < 1$ ergibt sich:</p>
<div class="math-block">$$x_1^* = \frac{\alpha\, m}{p_1} \qquad x_2^* = \frac{(1-\alpha)\, m}{p_2}$$</div>
<p>Jeder Ausgabenanteil ist konstant: Für Gut 1 werden immer $\alpha \cdot 100\%$ des Einkommens ausgegeben, für Gut 2 entsprechend $(1-\alpha)\cdot 100\%$. Die Nachfrage steigt linear im Einkommen und fällt hyperbolisch im eigenen Preis.</p>
</div>
<div class="section-block">
<h3>Eigenschaften</h3>
<p><strong>Homogenität vom Grad 0:</strong> $x_i^*(\lambda p_1, \lambda p_2, \lambda m) = x_i^*(p_1, p_2, m)$. Wenn alle Preise und das Einkommen proportional steigen, ändert sich die Nachfrage nicht (keine Geldillusion).</p>
<p><strong>Walras-Gesetz (Adding-up):</strong> $p_1 x_1^* + p_2 x_2^* = m$. Das gesamte Einkommen wird ausgegeben.</p>
<p><strong>Slutsky-Symmetrie:</strong> Die kompensierten Kreuzpreiseffekte sind symmetrisch.</p>
</div>
<div class="section-block">
<h3>Fehleranalyse</h3>
<div class="warn-box"><strong>Marshallsche vs. Hickssche Nachfrage</strong> Die Marshallsche Nachfrage hält das Einkommen $m$ konstant. Die Hickssche Nachfrage hält das Nutzenniveau $\bar{u}$ konstant. Beide stimmen nur im Ausgangspunkt überein.</div>
<div class="warn-box"><strong>Randlösungen</strong> Bei perfekten Substituten oder bei Ecklösungen versagt die Tangentialbedingung. Dann muss direkt über Nutzenvergleich optimiert werden.</div>
</div>
`,
 formeln: [
 { label:'Marshall-Nachfrage', eq: String.raw`$$x_i^*(p_1, p_2, m) \quad \text{— nutzenmaximierende Menge}$$`, desc:'Aus GRS=p₁/p₂ + Budget', variables: { 'x_i^*': 'Nutzenmaximierende Menge Gut i', 'p_1,p_2': 'Güterpreise', 'm': 'Einkommen' } },
 { label:'Homogenität', eq: String.raw`$$x_i(\lambda p, \lambda m) = x_i(p, m) \quad \forall\, \lambda > 0$$`, desc:'Keine Geldillusion (Grad 0)', variables: { 'x_i': 'Nachfrage Gut i', '\\lambda': 'Skalierungsfaktor (> 0)', 'p': 'Preisvektor', 'm': 'Einkommen' } },
 ],
aufgaben: [
  {
  text: `Leite die Marshallsche Nachfrage für $u(x_1,x_2) = x_1^{1/3} x_2^{2/3}$ her.`,
  steps: [
  { text: `CD-Formel direkt: α = 1/3`, eq: String.raw`$$x_1^* = \frac{m}{3p_1} \qquad x_2^* = \frac{2m}{3p_2}$$` },
  { text: `Verifikation via Tangentialbedingung:`, eq: String.raw`$$MU_1 = \frac{1}{3}\,x_1^{-2/3}\,x_2^{2/3} \qquad MU_2 = \frac{2}{3}\,x_1^{1/3}\,x_2^{-1/3} \qquad GRS = \frac{MU_1}{MU_2} = \frac{x_2}{2\,x_1}$$` },
  { text: String.raw`GRS $= p_1/p_2$:`, eq: String.raw`$$\frac{x_2}{2\,x_1} = \frac{p_1}{p_2} \implies x_2 = \frac{2\,p_1}{p_2}\,x_1$$` },
  { text: `In Budget einsetzen:`, eq: String.raw`$$p_1 x_1 + p_2 \cdot \frac{2\,p_1}{p_2}\,x_1 = m \implies 3\,p_1\,x_1 = m \implies x_1^* = \frac{m}{3\,p_1}$$` },
  ],
  result: String.raw`$x_1^* = m/(3p_1)$, $x_2^* = 2m/(3p_2)$`
  },
  {
  text: String.raw`Homogenität vom Grad 0: Zeige, dass $x_1^* = m/(3p_1)$ homogen vom Grad 0 in $(p_1, m)$ ist.`,
  steps: [
  { text: String.raw`Ersetze $p_1 \to \lambda p_1$ und $m \to \lambda m$:`, eq: String.raw`$$x_1^*(\lambda p_1, \lambda m) = \frac{\lambda m}{3 \lambda p_1} = \frac{m}{3p_1} = x_1^*(p_1, m)$$` },
  { text: String.raw`$\lambda$ kürzt sich vollständig heraus → Grad 0. Ökonomisch: Keine Geldillusion — proportionale Preis- und Einkommenserhöhung ändert die reale Kaufentscheidung nicht.`, eq: null },
  { text: String.raw`Allgemein gilt: Jede Marshallsche Nachfragefunktion ist homogen vom Grad 0 in $(p, m)$.`, eq: null },
  ],
  result: String.raw`$x_1^*(\lambda p, \lambda m) = x_1^*(p, m)$ — Grad 0 bestätigt. Keine Geldillusion.`
  },
  {
  text: String.raw`Leite die Marshallsche Nachfrage für quasi-lineare Präferenzen $u(x_1,x_2) = \ln x_1 + x_2$ her ($p_1 x_1 + x_2 = m$, $p_2=1$).`,
  steps: [
  { text: String.raw`Lagrange: $GRS = MU_1/MU_2 = (1/x_1)/1 = 1/x_1 = p_1/1 = p_1$.`, eq: String.raw`$$x_1^* = \frac{1}{p_1}$$` },
  { text: String.raw`Budget: $x_2^* = m - p_1 x_1^* = m - 1$.`, eq: null },
  { text: String.raw`Besonderheit: $x_1^*$ hängt nicht von $m$ ab — kein Einkommenseffekt auf $x_1$. Einkommenselastizität von Gut 1 = 0. Quasi-lineare Präferenzen sind NICHT homothetisch.`, eq: null },
  ],
  result: String.raw`$x_1^* = 1/p_1$ (einkommensunabhängig), $x_2^* = m-1$. Quasi-lineare Präferenzen: $\varepsilon_{x_1,m} = 0$.`
  },
  ]
 },
};


// ============================================================
// STEP-BY-STEP SOLVER PROBLEMS
// ============================================================
