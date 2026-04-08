// ============================================================
// CHAPTERS & CONTENT DATA — Makroökonomik I
// Benchmark-grade authored concept line based on course logic
// ============================================================

const section = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (title, body) => `<div class="warn-box"><strong>${title}:</strong> ${body}</div>`;

const task = (text, steps, result) => ({ text, steps, result });
const step = (text, eq = null) => ({ text, eq });

export const CHAPTERS = [
  { id: 'makro_rahmen', title: 'Makroökonomik als Denkrahmen: Fristen, Variablen und Sektoren', cat: 'Einführung', short: 'Rahmen' },
  { id: 'vgr', title: 'Volkswirtschaftliche Gesamtrechnung, Inflation und Arbeitslosigkeit', cat: 'Einführung', short: 'VGR' },
  { id: 'guetermarkt', title: 'Gütermarkt und geplante Nachfrage', cat: 'Kurze Frist I', short: 'ZZ' },
  { id: 'multiplikator', title: 'Multiplikator, Sparparadox und Fiskalimpulse', cat: 'Kurze Frist I', short: 'Mult.' },
  { id: 'geldnachfrage', title: 'Geld, Anleihen und Geldnachfrage', cat: 'Kurze Frist II', short: 'Geld' },
  { id: 'banken', title: 'Banken, Mindestreserven und Geldschöpfung', cat: 'Kurze Frist II', short: 'Banken' },
  { id: 'islm', title: 'IS-LM-Grundmodell bei Zinssteuerung', cat: 'Kurze Frist III', short: 'IS-LM' },
  { id: 'politikmix', title: 'Fiskalpolitik, Geldpolitik und Crowding-Out', cat: 'Kurze Frist III', short: 'Policy' },
  { id: 'realzins', title: 'Realzins, erwartete Inflation und Risikoprämie', cat: 'Finanzfriktionen', short: 'Realzins' },
  { id: 'arbeitsmarkt', title: 'Arbeitsmarkt, Lohnsetzung und Preissetzung', cat: 'Mittlere Frist', short: 'WS-PS' },
  { id: 'phillips', title: 'Phillipskurve, NAIRU und Inflationsdynamik', cat: 'Mittlere Frist', short: 'Phillips' },
  { id: 'islmpc', title: 'IS-LM-PC: Rückkehr zur mittleren Frist', cat: 'Mittlere Frist', short: 'IS-LM-PC' },
  { id: 'erwartungen', title: 'Erwartungen, Glaubwürdigkeit und Politik', cat: 'Erweiterungen', short: 'Erwart.' }
];

export const CONTENT = {
  makro_rahmen: {
    motivation: 'Makroökonomik beginnt nicht mit einer einzelnen Formel, sondern mit einer Landkarte: Welche Größen bewegen sich gemeinsam, auf welchem Zeithorizont denken wir und über welche Märkte laufen die zentralen Anpassungen?',
    theorie: [
      section('Kurze, mittlere und lange Frist sauber trennen', `
        <p>Im Kurs werden drei Horizonte unterschieden. In der <strong>kurzen Frist</strong> reagieren Produktion und Beschäftigung auf Nachfrage, während Preise weitgehend träge sind. In der <strong>mittleren Frist</strong> passen sich Löhne und Preise an; dann rücken Arbeitsmarkt und Inflationsdynamik in den Mittelpunkt. In der <strong>langen Frist</strong> geht es um Kapital, Produktivität und Wachstum.</p>
        <p>Diese Einteilung ist keine bloße Einleitung, sondern die Logik des ganzen Moduls: Gütermarkt und Finanzmarkt erklären die kurze Frist, WS-PS und Phillipskurve die mittlere Frist, Erwartungsbildung verbindet beide Ebenen.</p>
      `),
      section('Die Kernvariablen der Makroökonomik', `
        <p>Makro I arbeitet immer wieder mit denselben Größen: Produktion $Y$, Konsum $C$, Investitionen $I$, Staatsausgaben $G$, Steuern $T$, Geldmenge $M$, Zins $i$, Realzins $r$, Preisniveau $P$, Inflation $\\pi$ und Arbeitslosenquote $u$.</p>
        ${math(String.raw`$$Y = C + I + G$$`)}
        <p>Wichtig ist, dass dieselbe Variable je nach Kapitel eine andere Rolle spielt: $Y$ ist im Gütermarkt das Gleichgewichtsergebnis, im Arbeitsmarkt aber mit Beschäftigung und Produktionspotenzial verknüpft.</p>
      `),
      section('Sektoren und Denkfluss', `
        <p>Haushalte entscheiden über Konsum, Sparen und Geldhaltung. Unternehmen investieren und setzen Preise. Banken vermitteln Kredit und Einlagen. Die Zentralbank steuert Zins oder Geldmenge. Der Staat wirkt über Ausgaben und Steuern. Gute Klausurlösungen benennen deshalb immer zuerst, welcher Sektor auf den Schock reagiert und über welchen Kanal sich der Effekt fortsetzt.</p>
        ${warn('Nicht sofort rechnen', 'Makrofehler entstehen oft schon vor der Rechnung: Wer Zins, Realzins, Preisniveau und Inflation nicht sauber trennt, setzt zwar Zahlen richtig ein, interpretiert aber den falschen Mechanismus.')}
        ${warn('Frist nicht vermischen', 'Gütermarktlogik mit fixerem Preisniveau und Phillipskurvenlogik mit endogener Inflation gehören nicht in dieselbe Kurzantwort, wenn die Aufgabe nur die kurze Frist fragt.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Grundidentität der Nachfrage', eq: String.raw`$$Y = C + I + G$$`, desc: 'Geschlossene Volkswirtschaft ohne Außenbeitrag', variables: { 'Y': 'Produktion bzw. Einkommen', 'C': 'Konsum', 'I': 'Investitionen', 'G': 'Staatsausgaben' } },
      { label: 'Realzins', eq: String.raw`$$r \approx i - \pi^e$$`, desc: 'Nominalzins minus erwartete Inflation', variables: { 'i': 'Nominalzins', '\\pi^e': 'erwartete Inflation' } }
    ],
    aufgaben: [
      task(
        'Ordne die folgenden Aussagen der kurzen, mittleren oder langen Frist zu: a) höhere Staatsausgaben steigern die Nachfrage, b) höhere Inflationserwartungen verändern die Phillipskurve, c) mehr technischer Fortschritt hebt das langfristige Pro-Kopf-Einkommen.',
        [
          step('Kurze Frist = Nachfrage bestimmt Output bei trägem Preisniveau.'),
          step('Mittlere Frist = Löhne, Preise und Arbeitsmarkt bestimmen Inflation und natürliche Arbeitslosigkeit.'),
          step('Lange Frist = Kapitalakkumulation und Produktivität bestimmen das Trendwachstum.')
        ],
        'a) kurze Frist, b) mittlere Frist, c) lange Frist.'
      ),
      task(
        'Eine Aufgabe fragt nach der Wirkung einer Zinssenkung auf Produktion und Inflation. Welche Modellkette ist die richtige Grundstruktur?',
        [
          step('Zinssenkung wirkt zuerst über Finanz- und Gütermarkt auf Nachfrage und Produktion.'),
          step('Erst danach kann eine Produktionslücke über Arbeitsmarkt und Phillipskurve die Inflation verändern.'),
          step('Die saubere Reihenfolge lautet daher: IS/LM → Output/Arbeitslosigkeit → Inflation.')
        ],
        'Zuerst kurze Frist über IS-LM, dann mittlere Frist über Phillipskurve bzw. IS-LM-PC.'
      )
    ]
  },

  vgr: {
    motivation: 'Makroökonomische Modelle brauchen Messgrößen. Ohne saubere VGR ist nicht klar, was Produktion, Preisniveau, Wachstum oder Arbeitslosigkeit in den späteren Kapiteln überhaupt bedeuten.',
    theorie: [
      section('BIP auf drei Seiten lesen', `
        <p>Das Bruttoinlandsprodukt kann von der Entstehungs-, Verwendungs- und Verteilungsseite gemessen werden. Ökonomisch steckt dahinter dieselbe Größe: der Wert der im Inland erzeugten Endproduktion in einem Zeitraum.</p>
        ${math(String.raw`$$Y = C + I + G + NX$$`)}
        <p>Für Makro I ist die Verwendungsseite besonders wichtig, weil sie die direkte Brücke zum Gütermarkt bildet. Konsum, Investitionen und Staatsausgaben tauchen später als Nachfrageblöcke im Modell wieder auf.</p>
      `),
      section('Nominal, real und Preisniveau', `
        <p>Nominales BIP bewertet Mengen zu aktuellen Preisen; reales BIP hält Preise eines Basisjahres konstant. Nur das reale BIP misst deshalb Mengenbewegungen. Der Deflator oder Verbraucherpreisindex übersetzt diese Differenz in ein Preisniveau.</p>
        ${math(String.raw`$$BIP_{real} = \frac{BIP_{nom}}{P}$$`)}
        ${math(String.raw`$$\pi_t = \frac{P_t - P_{t-1}}{P_{t-1}}$$`)}
        <p>In Klausuren reicht oft die Faustregel: nominales Wachstum = reales Wachstum + Inflation, jedenfalls näherungsweise für moderate Änderungsraten.</p>
      `),
      section('Arbeitslosigkeit und Erwerbspersonen', `
        <p>Die Arbeitslosenquote misst den Anteil der Arbeitslosen an den Erwerbspersonen, nicht an der Gesamtbevölkerung. Deshalb muss immer sauber zwischen Bevölkerung, Erwerbsbevölkerung, Beschäftigung und Arbeitslosigkeit unterschieden werden.</p>
        ${math(String.raw`$$u = \frac{U}{L}, \qquad L = N + U$$`)}
        ${warn('Bestands- und Stromgröße nicht mischen', 'Das BIP ist eine Stromgröße pro Zeitraum. Vermögen, Staatsschuld oder Geldmenge sind Bestandsgrößen zu einem Zeitpunkt.')}
        ${warn('Arbeitslosenquote falsch bezogen', 'Wer durch die Gesamtbevölkerung teilt, misst nicht die Arbeitslosenquote, sondern etwas völlig anderes.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Verwendungsseite des BIP', eq: String.raw`$$Y = C + I + G + NX$$`, desc: 'Makroökonomische Nachfrageidentität', variables: { 'NX': 'Nettoexporte' } },
      { label: 'Deflatorbeziehung', eq: String.raw`$$P = \frac{BIP_{nom}}{BIP_{real}}$$`, desc: 'Preisniveau aus nominalem und realem BIP', variables: {} },
      { label: 'Arbeitslosenquote', eq: String.raw`$$u = \frac{U}{L}$$`, desc: 'Arbeitslose relativ zu Erwerbspersonen', variables: { 'U': 'Arbeitslose', 'L': 'Erwerbspersonen' } }
    ],
    aufgaben: [
      task(
        String.raw`Das nominale BIP steigt um $6\%$, der Deflator um $2{,}5\%$. Wie stark wächst das reale BIP näherungsweise?`,
        [
          step('Nutze die Näherung nominales Wachstum ≈ reales Wachstum + Inflation.', String.raw`\%\Delta Y_{nom} \approx \%\Delta Y_{real} + \pi`),
          step('Stelle nach dem realen Wachstum um.', String.raw`\%\Delta Y_{real} \approx 6\% - 2{,}5\%`),
          step('Interpretiere den Rest als mengenmäßigen Zuwachs der Produktion.')
        ],
        String.raw`Das reale BIP wächst näherungsweise um $3{,}5\%$.`
      ),
      task(
        String.raw`In einer Volkswirtschaft gibt es 40 Mio. Erwerbspersonen, davon 36,8 Mio. Beschäftigte. Berechne die Arbeitslosenquote.`,
        [
          step('Bestimme zunächst die Zahl der Arbeitslosen.', String.raw`U = 40 - 36{,}8 = 3{,}2`),
          step('Setze in die Arbeitslosenquote ein.', String.raw`u = U/L = 3{,}2 / 40`),
          step('Wandle das Ergebnis in Prozent um.')
        ],
        String.raw`$u = 8\%$.`
      )
    ]
  },

  guetermarkt: {
    motivation: 'Makro I startet in der kurzen Frist mit einer einfachen, aber mächtigen Idee: Produktion passt sich der geplanten Nachfrage an. Daraus entstehen Gleichgewicht, 45°-Diagramm und später der Multiplikator.',
    theorie: [
      section('Geplante Nachfrage und Konsumfunktion', `
        <p>Die geplante Nachfrage $Z$ setzt sich aus Konsum, Investitionen und Staatsausgaben zusammen. Der Konsum hängt positiv vom verfügbaren Einkommen ab.</p>
        ${math(String.raw`$$Z = C + I + G$$`)}
        ${math(String.raw`$$C = c_0 + c_1(Y - T), \qquad 0 < c_1 < 1$$`)}
        <p>$c_0$ ist autonomer Konsum, $c_1$ die marginale Konsumquote. Weil nur ein Teil jedes zusätzlichen Einkommens konsumiert wird, bleibt die Nachfragekurve flacher als die 45°-Linie.</p>
      `),
      section('Gütermarktgleichgewicht im Keynes-Kreuz', `
        <p>Im Gleichgewicht ist die Produktion genau so hoch wie die geplante Nachfrage.</p>
        ${math(String.raw`$$Y = Z$$`)}
        <p>Im Keynes-Kreuz ist die 45°-Linie die Menge aller Punkte, an denen Nachfrage und Produktion gleich sind. Die Nachfragegerade schneidet sie im kurzfristigen Gleichgewicht $Y^*$.</p>
      `),
      section('Was verschiebt die Nachfrage?', `
        <p>Höheres autonomes Konsumverhalten, höhere Investitionen, höhere Staatsausgaben oder niedrigere Steuern verschieben $Z$ nach oben. Bei gegebenem Preisniveau steigt deshalb die Gleichgewichtsproduktion.</p>
        ${warn('Y ist gleichzeitig Einkommen und Output', 'Gerade weil Einkommen die Nachfrage beeinflusst, entsteht der Rückkopplungsmechanismus. Wer $Y$ als rein exogen behandelt, verpasst die eigentliche Logik des Modells.')}
        ${warn('Z und Y nicht verwechseln', 'Im Diagramm ist $Z$ die geplante Nachfragekurve, $Y$ die 45°-Linie. Erst ihr Schnittpunkt liefert das Gleichgewicht.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Geplante Nachfrage', eq: String.raw`$$Z = c_0 + c_1(Y-T) + I + G$$`, desc: 'Gütermarktnachfrage bei linearer Konsumfunktion', variables: { 'c_0': 'autonomer Konsum', 'c_1': 'marginale Konsumquote' } },
      { label: 'Gleichgewichtsbedingung', eq: String.raw`$$Y = Z$$`, desc: 'Produktion entspricht Nachfrage', variables: {} }
    ],
    aufgaben: [
      task(
        String.raw`Gegeben seien $c_0 = 180$, $c_1 = 0{,}75$, $T = 120$, $I = 220$ und $G = 200$. Stelle die Güternachfrage als Funktion von $Y$ auf.`,
        [
          step('Setze alle gegebenen Größen in die Konsumfunktion ein.', String.raw`C = 180 + 0{,}75(Y-120)`),
          step('Setze Konsum, Investitionen und Staatsausgaben in $Z$ ein.', String.raw`Z = 180 + 0{,}75(Y-120) + 220 + 200`),
          step('Fasse die Konstanten zusammen.')
        ],
        String.raw`$Z = 510 + 0{,}75Y$.`
      ),
      task(
        String.raw`Erkläre ohne Rechnung, was im Keynes-Kreuz passiert, wenn die Staatsausgaben steigen.`,
        [
          step('Eine Erhöhung von $G$ hebt die Nachfragegerade parallel an.'),
          step('Der Schnittpunkt mit der 45°-Linie wandert nach rechts oben.'),
          step('Die Produktion steigt, weil Unternehmen auf die höhere geplante Nachfrage reagieren.')
        ],
        'Die Nachfrage verschiebt sich nach oben; das kurzfristige Gleichgewicht der Produktion steigt.'
      )
    ]
  },

  multiplikator: {
    motivation: 'Der Multiplikator ist die eigentliche Konjunkturmechanik des Gütermarkts. Er erklärt, warum ein erster Nachfrageimpuls eine größere Gesamtwirkung auf Einkommen und Produktion entfalten kann.',
    theorie: [
      section('Herleitung des Multiplikators', `
        <p>Aus $Y = c_0 + c_1(Y-T) + I + G$ folgt nach Auflösen nach $Y$:</p>
        ${math(String.raw`$$Y = \frac{1}{1-c_1}\left(c_0 + I + G - c_1T\right)$$`)}
        <p>Der Faktor $1/(1-c_1)$ ist der Multiplikator. Je größer $c_1$, desto stärker reagiert die Produktion auf autonome Nachfrageimpulse.</p>
      `),
      section('Staatsausgaben-, Steuer- und Sparparadox', `
        <p>Eine Erhöhung der Staatsausgaben wirkt direkt auf die Nachfrage und wird dann über weitere Konsumrunden verstärkt. Steuersenkungen wirken ebenfalls expansiv, aber etwas schwächer, weil nur der konsumierte Teil des zusätzlichen verfügbaren Einkommens nachfragewirksam wird.</p>
        ${math(String.raw`$$\frac{\partial Y}{\partial G} = \frac{1}{1-c_1}, \qquad \frac{\partial Y}{\partial T} = -\frac{c_1}{1-c_1}$$`)}
        <p>Das Sparparadox beschreibt, dass der Versuch aller Haushalte, mehr zu sparen, das Einkommen senkt. Aggregiert kann dadurch die tatsächliche Ersparnis kaum steigen oder sogar unverändert bleiben.</p>
      `),
      section('Automatische Stabilisatoren', `
        <p>Proportionale Steuern oder Transfers dämpfen den Multiplikator, weil mit steigendem Einkommen automatisch Kaufkraft abgeschöpft bzw. gestützt wird. Genau deshalb sind reale Fiskalsysteme weniger extrem schwankungsanfällig als das nackte Grundmodell.</p>
        ${warn('Erstimpuls und Gesamteffekt trennen', 'Ein Ausgabenimpuls von 100 erhöht die Produktion nicht nur um 100. Die Folgerunden sind gerade der Kern des Multiplikators.')}
        ${warn('Steuer- und Staatsausgabenmultiplikator nicht gleichsetzen', 'Staatsausgaben wirken eins zu eins in der ersten Runde; Steuersenkungen nur über zusätzlichen Konsum. Deshalb ist der Steuermultiplikator kleiner.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Gleichgewichtsproduktion', eq: String.raw`$$Y = \frac{1}{1-c_1}\left(c_0 + I + G - c_1T\right)$$`, desc: 'Aufgelöste Gütermarktgleichung', variables: {} },
      { label: 'Staatsausgabenmultiplikator', eq: String.raw`$$\frac{\partial Y}{\partial G} = \frac{1}{1-c_1}$$`, desc: 'Wirkung einer Änderung von G', variables: {} },
      { label: 'Steuermultiplikator', eq: String.raw`$$\frac{\partial Y}{\partial T} = -\frac{c_1}{1-c_1}$$`, desc: 'Wirkung einer Änderung von T', variables: {} }
    ],
    aufgaben: [
      task(
        String.raw`Es gilt $c_1 = 0{,}8$. Der Staat erhöht $G$ um 50. Wie groß ist der Gesamteffekt auf $Y$?`,
        [
          step('Berechne zuerst den Staatsausgabenmultiplikator.', String.raw`$$1/(1-0{,}8)=5$$`),
          step('Multipliziere den Impuls mit dem Multiplikator.', String.raw`$$\Delta Y = 5 \cdot 50$$`),
          step('Deute das Ergebnis als verstärkte Nachfragewirkung.')
        ],
        String.raw`$\Delta Y = 250$.`
      ),
      task(
        'Erkläre das Sparparadox in drei sauberen Schritten.',
        [
          step('Haushalte wollen mehr sparen und konsumieren deshalb weniger.'),
          step('Die geringere Nachfrage senkt Produktion und Einkommen.'),
          step('Weil das Einkommen sinkt, ist der tatsächliche Anstieg der aggregierten Ersparnis viel kleiner als beabsichtigt.')
        ],
        'Mehr gewünschtes Sparen drückt die Nachfrage; das niedrigere Einkommen neutralisiert einen Teil des Sparversuchs.'
      ),
      task(
        String.raw`Gegeben seien $c_1 = 0{,}75$, $\Delta G = +30$ und $\Delta T = +30$. Wie groß ist der Nettoeffekt auf $Y$?`,
        [
          step('Berechne die Teilwirkungen separat: Ausgaben- und Steuermultiplikator.', String.raw`\frac{\partial Y}{\partial G}=\frac{1}{1-c_1}=4,\; \frac{\partial Y}{\partial T}=-\frac{c_1}{1-c_1}=-3`),
          step('Wende beide Impulse an.', String.raw`\Delta Y_G = 4\cdot 30 = 120,\; \Delta Y_T = -3\cdot 30 = -90`),
          step('Addiere die Effekte und deute die Logik.', String.raw`\Delta Y = 120 - 90 = 30`)
        ],
        String.raw`Der Nettoeffekt beträgt $+30$: gleich hohe Steuer- und Ausgabenänderungen wirken nicht symmetrisch, weil Steuern nur über Konsumquote in die Nachfrage laufen.`
      )
    ]
  },

  geldnachfrage: {
    motivation: 'Der Finanzmarktblock erklärt, warum der Zins als Preis der Liquidität bestimmt wird. Haushalte verteilen Vermögen zwischen Geld und Anleihen; die Zentralbank verändert diese Entscheidung über ihr Geldangebot oder über eine Zinsregel.',
    theorie: [
      section('Geld versus Anleihen', `
        <p>Geld ist liquide, trägt aber keinen Zins. Anleihen sind weniger liquide, werfen aber Zinszahlungen ab. Deshalb hängt die Geldnachfrage positiv vom Einkommen und negativ vom Nominalzins ab.</p>
        ${math(String.raw`$$\frac{M^d}{P} = L(i,Y), \qquad L_i < 0,\; L_Y > 0$$`)}
        <p>Mehr Einkommen bedeutet mehr Transaktionen; ein höherer Zins macht Geldhaltung relativ unattraktiver.</p>
      `),
      section('Gleichgewicht auf dem Geldmarkt', `
        <p>Bei gegebenem Preisniveau trifft die reale Geldmenge $M/P$ auf die reale Geldnachfrage. Im Gleichgewicht gilt:</p>
        ${math(String.raw`$$\frac{M}{P} = L(i,Y)$$`)}
        <p>Eine Erhöhung von $M$ verschiebt das Gleichgewicht zu einem niedrigeren Zins. Eine Erhöhung von $Y$ erhöht die Geldnachfrage und damit ceteris paribus den Zins.</p>
      `),
      section('Anleihenpreise und Liquiditätsfalle', `
        <p>Der Anleihenpreis und der Zins bewegen sich gegenläufig. Kauft die Zentralbank Anleihen, steigt ihr Preis und der Zins sinkt. In der Liquiditätsfalle wird die Geldnachfrage bei sehr niedrigem Zins nahezu unendlich elastisch; zusätzliche Geldmenge senkt den Zins dann kaum noch.</p>
        ${warn('Preis einer Anleihe und Zins laufen gegenläufig', 'Wer beide Größen in dieselbe Richtung laufen lässt, verpasst den Kern der Offenmarktpolitik.')}
        ${warn('Nominalzins ist nicht Realzins', 'Im Geldmarktmodell wird zunächst mit dem Nominalzins i gearbeitet. Der Realzins wird erst mit Inflationserwartungen gebildet.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Reale Geldnachfrage', eq: String.raw`$$\frac{M^d}{P} = L(i,Y)$$`, desc: 'Liquiditätspräferenz', variables: { 'i': 'Nominalzins', 'Y': 'Einkommen' } },
      { label: 'Geldmarktgleichgewicht', eq: String.raw`$$\frac{M}{P} = L(i,Y)$$`, desc: 'Bestimmung des Gleichgewichtszinses', variables: {} },
      { label: 'Anleihenpreis', eq: String.raw`$$P_B = \frac{1}{1+i}$$`, desc: 'Inverse Beziehung von Preis und Zins im Einperiodenfall', variables: { 'P_B': 'Anleihenpreis' } }
    ],
    aufgaben: [
      task(
        String.raw`Das Einkommen steigt bei unverändertem Preisniveau und unveränderter Geldmenge. Wie reagiert der Gleichgewichtszins im Geldmarkt?`,
        [
          step('Höheres Einkommen erhöht die Geldnachfrage.'),
          step('Bei unverändertem realem Geldangebot entsteht Überschussnachfrage nach Geld.'),
          step('Der Zins muss steigen, bis die Haushalte wieder bereit sind, Anleihen statt Geld zu halten.')
        ],
        'Der Gleichgewichtszins steigt.'
      ),
      task(
        String.raw`Die Zentralbank kauft Anleihen. Beschreibe die Wirkung auf Geldmenge, Anleihenpreis und Zins.`,
        [
          step('Beim Kauf von Anleihen zahlt die Zentralbank mit Zentralbankgeld; die Geldmenge steigt.'),
          step('Die zusätzliche Nachfrage erhöht den Anleihenpreis.'),
          step('Weil Preis und Rendite gegenläufig sind, sinkt der Zins.')
        ],
        String.raw`$M \uparrow$, Anleihenpreis $P_B \uparrow$, Zins $i \downarrow$.`
      )
    ]
  },

  banken: {
    motivation: 'Makro I hört beim Geldmarkt nicht auf. Banken, Reserven und Kreditvergabe erklären, wie aus Zentralbankgeld ein viel größeres Einlagen- und Kreditvolumen entstehen kann und warum Geldpolitik auch über das Bankensystem wirkt.',
    theorie: [
      section('Banken als Bilanzintermediäre', `
        <p>Geschäftsbanken halten auf der Aktivseite Reserven und Kredite, auf der Passivseite Einlagen. Wenn eine Bank einen Kredit vergibt, entsteht typischerweise zugleich eine Einlage. Damit schafft das Bankensystem Giralgeld.</p>
        <p>Für Klausuren ist die Bilanzlogik zentral: Jede Kreditvergabe verändert gleichzeitig Aktiv- und Passivseite.</p>
      `),
      section('Mindestreserve und Geldschöpfung', `
        <p>Bei einem Mindestreservesatz $\theta$ muss ein Teil der Einlagen als Reserve gehalten werden. In einem stark vereinfachten Modell ergibt sich daraus ein Einlagenmultiplikator.</p>
        ${math(String.raw`$$m_D = \frac{1}{\theta}$$`)}
        <p>Je niedriger die Reservequote, desto größer kann bei gegebenem Zentralbankgeldbestand das Einlagenvolumen werden. Real ist die Geldschöpfung aber nicht nur durch Reserven, sondern auch durch Kapitalvorschriften, Risikoprämien und Kreditnachfrage begrenzt.</p>
      `),
      section('Zentralbank und Bankenkrisen', `
        <p>Die Zentralbank versorgt Banken mit Reserven, wirkt als Lender of Last Resort und stabilisiert im Krisenfall die Zahlungsfähigkeit. Bei Vertrauensverlust kann dennoch ein Bank-Run entstehen: Banken sind liquide verwundbar, weil Einlagen kurzfristig abziehbar sind, Kredite aber langfristig gebunden.</p>
        ${warn('Geldmultiplikator nicht mechanisch überdehnen', 'Im einfachen Lehrbuchmodell ist $1/\\theta$ nur eine Näherung. In modernen Systemen wird Kreditvergabe nicht allein durch Mindestreserven beschränkt.')}
        ${warn('Ein Kredit ist nicht bloß Weitergabe vorhandener Einlagen', 'Im Bankensystem entstehen neue Einlagen oft gerade durch Kreditvergabe.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Einlagenmultiplikator', eq: String.raw`$$m_D = \frac{1}{\theta}$$`, desc: 'Vereinfachtes Multiplikatormodell', variables: { '\\theta': 'Mindestreservesatz' } },
      { label: 'Geldbasis', eq: String.raw`$$H = C + R$$`, desc: 'Bargeld plus Reserven', variables: { 'H': 'Geldbasis', 'C': 'Bargeld', 'R': 'Reserven' } }
    ],
    aufgaben: [
      task(
        String.raw`Der Mindestreservesatz beträgt $\theta = 0{,}1$. Wie groß ist im einfachen Modell der Einlagenmultiplikator?`,
        [
          step('Setze in den Einlagenmultiplikator ein.', String.raw`$$m_D = 1/\theta$$`),
          step('Berechne den Wert.', String.raw`$$m_D = 1/0{,}1 = 10$$`),
          step('Deute das Ergebnis als theoretisch maximales Verhältnis von Einlagen zu Reserven.')
        ],
        'Der Einlagenmultiplikator beträgt 10.'
      ),
      task(
        'Warum kann ein Bank-Run auch dann gefährlich sein, wenn die Bank langfristig solvent ist?',
        [
          step('Die Aktiva der Bank bestehen zu großen Teilen aus langfristigen Krediten oder Wertpapieren.'),
          step('Die Passiva in Form von Einlagen sind kurzfristig kündbar.'),
          step('Wenn viele Einleger gleichzeitig Bargeld wollen, fehlt kurzfristig Liquidität, obwohl die Bank auf lange Sicht werthaltige Forderungen besitzt.')
        ],
        'Der Bank-Run ist ein Liquiditätsproblem aus Fristentransformation, nicht zwingend ein sofortiges Solvenzproblem.'
      )
    ]
  },

  islm: {
    motivation: 'Im IS-LM-Modell treffen Gütermarkt und Finanzmarkt aufeinander. Erst hier werden Einkommen und Zins gemeinsam bestimmt und Fiskal- bzw. Geldpolitik in einem gemeinsamen Diagramm analysierbar.',
    theorie: [
      section('IS-Kurve: Gleichgewicht auf dem Gütermarkt', `
        <p>Die IS-Kurve beschreibt alle Kombinationen aus Produktion $Y$ und Zins $i$, bei denen der Gütermarkt im Gleichgewicht ist.</p>
        ${math(String.raw`$$Y = C(Y-T) + I(Y,i) + G$$`)}
        <p>Sie verläuft fallend: Ein höherer Zins dämpft Investitionen, dadurch sinkt die Nachfrage und das Gütermarktgleichgewicht verschiebt sich zu niedrigerem Output.</p>
      `),
      section('LM-Kurve bzw. Zinssteuerung', `
        <p>Im traditionellen Modell kommt der Geldmarkt als steigende LM-Kurve hinzu. Im Kurs wird häufig mit Zinssteuerung gearbeitet: Die Zentralbank setzt den Zinssatz direkt, sodass die monetäre Bedingung eher als horizontale Zinsregel gelesen wird.</p>
        ${math(String.raw`$$i = \bar{i}$$`)}
        <p>Das ändert die Politiklogik erheblich: Bei horizontaler Zinsregel entfällt das klassische Crowding-Out über steigende Zinsen.</p>
      `),
      section('Gemeinsames Gleichgewicht', `
        <p>Das makroökonomische Gleichgewicht liegt dort, wo Gütermarkt und Finanzmarkt gleichzeitig im Gleichgewicht sind. Fiskalpolitik verschiebt die IS-Kurve; Geldpolitik verschiebt die Zinsregel bzw. im klassischen Modell die LM-Kurve.</p>
        ${warn('IS-LM ist Kurzfristlogik', 'Das Modell erklärt Nachfrage, Output und Zins bei gegebenem Preisniveau. Arbeitsmarkt und Inflationsdynamik gehören noch nicht in dieselbe Antwort.')}
        ${warn('LM nicht automatisch steigend zeichnen', 'Wenn der Kurs ausdrücklich Zinssteuerung verwendet, ist die relevante monetäre Beziehung horizontal.')}
      `)
    ].join(''),
    formeln: [
      { label: 'IS-Gleichung', eq: String.raw`$$Y = C(Y-T) + I(Y,i) + G$$`, desc: 'Gütermarkt im Zins-Output-Raum', variables: {} },
      { label: 'Zinsregel', eq: String.raw`$$i = \bar{i}$$`, desc: 'Horizontale LM bei Zinssteuerung', variables: { '\\bar{i}': 'von der Zentralbank gesetzter Zins' } }
    ],
    aufgaben: [
      task(
        String.raw`Die Zentralbank senkt den Leitzins bei unveränderter Fiskalpolitik. Beschreibe die Wirkung im IS-LM-Diagramm.`,
        [
          step('Die monetäre Kurve verschiebt sich nach unten bzw. der Zielzins sinkt.'),
          step('Der niedrigere Zins erhöht die Investitionsnachfrage.'),
          step('Das neue Gleichgewicht liegt bei höherem Output und niedrigerem Zins.')
        ],
        String.raw`$Y \uparrow$, $i \downarrow$.`
      ),
      task(
        String.raw`Warum ist die IS-Kurve fallend?`,
        [
          step('Ein höherer Zins verteuert Kredit und senkt Investitionen.'),
          step('Weniger Investitionen bedeuten geringere geplante Nachfrage.'),
          step('Damit der Gütermarkt wieder im Gleichgewicht ist, muss die Produktion niedriger sein.')
        ],
        'Die IS-Kurve ist fallend, weil höhere Zinsen die Nachfrage und damit das Gleichgewichtseinkommen reduzieren.'
      ),
      task(
        String.raw`Graph-Check (Achsen- und Bewegungsdisziplin): Im $(Y,i)$-Diagramm sinkt der Zielzins der Zentralbank. Was verschiebt sich, und was ist eine Bewegung entlang einer Kurve?`,
        [
          step('Die monetäre Bedingung (LM/Zinsregel) verschiebt sich nach unten.'),
          step('Der neue Schnittpunkt mit der IS liegt bei niedrigerem i und höherem Y.'),
          step('Eine Bewegung entlang der IS beschreibt den Übergang zwischen den Gleichgewichtspunkten nach der Zinsänderung.'),
          step('Die IS selbst verschiebt sich erst bei Nachfragekomponenten wie G, T oder Investitionsvertrauen.')
        ],
        'Saubere Diagrammsprache: Zinsimpuls -> monetäre Kurve verschiebt sich; Anpassung zum neuen Gleichgewicht -> Bewegung entlang der IS.'
      )
    ]
  },

  politikmix: {
    motivation: 'Erst mit Politikschocks wird das IS-LM-Modell klausurpraktisch. Hier wird trainiert, wie Fiskal- und Geldpolitik Kurven verschieben, wann Crowding-Out entsteht und wie ein Policy-Mix die Wirkung verändert.',
    theorie: [
      section('Fiskalpolitik im IS-LM', `
        <p>Eine Erhöhung von $G$ oder eine Senkung von $T$ verschiebt die IS-Kurve nach rechts. Ob daraus vor allem höherer Output oder vor allem höherer Zins folgt, hängt von der monetären Reaktion ab.</p>
        <p>Bei horizontaler Zinsregel bleibt der Zins konstant und die Fiskalpolitik entfaltet nahezu den vollen Gütermarkt-Multiplikator. Bei steigendem Geldmarktzins kommt es dagegen zu Zinsanstieg und teilweisem Crowding-Out der Investitionen.</p>
      `),
      section('Geldpolitik und Crowding-Out', `
        <p>Eine Zinssenkung verschiebt die monetäre Kurve nach unten und erhöht die Nachfrage. Umgekehrt kann eine restriktive Geldpolitik einen Fiskalimpuls teilweise neutralisieren. Genau diese Kombinationen werden in Klausuren oft als Policy-Mix abgefragt.</p>
        ${math(String.raw`$$\Delta Y = \text{direkter Nachfrageimpuls} - \text{verdrängte Investitionen}$$`)}
        <p>Je steiler die LM-Kurve bzw. je stärker der Zins auf Einkommen reagiert, desto größer ist das Crowding-Out.</p>
      `),
      section('Sonderfälle: Liquiditätsfalle und straffe Geldpolitik', `
        <p>In der Liquiditätsfalle ist die Geldpolitik schwach, Fiskalpolitik aber stark. Bei sehr straffer Geldpolitik kann selbst ein großer fiskalischer Impuls fast vollständig über steigende Zinsen neutralisiert werden.</p>
        ${warn('Crowding-Out heißt nicht Wirkungslosigkeit', 'Auch bei Crowding-Out steigt der Output häufig noch an; nur der Effekt ist kleiner als im reinen Gütermarktmodell.')}
        ${warn('Immer die monetäre Reaktion nennen', 'Die gleiche Fiskalmaßnahme kann je nach LM- oder Zinsregel zu ganz unterschiedlichen Ergebnissen führen.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Staatsausgabenimpuls in IS-LM', eq: String.raw`$$IS: \quad Y = C(Y-T) + I(Y,i) + G$$`, desc: 'Mehr G verschiebt die IS-Kurve nach rechts', variables: {} },
      { label: 'Fisher-Approximation für Politikmix mit Inflationserwartungen', eq: String.raw`$$r \approx i - \pi^e$$`, desc: 'Relevanter Finanzierungskanal bei gegebener Inflationserwartung', variables: {} }
    ],
    aufgaben: [
      task(
        String.raw`Die Regierung erhöht $G$, die Zentralbank hält den Zins konstant. Warum ist der Outputeffekt größer als bei unveränderter Geldmenge?`,
        [
          step('Die IS-Kurve verschiebt sich nach rechts.'),
          step('Bei konstanter Zinssteuerung steigt der Zins nicht an.'),
          step('Ohne Zinsanstieg werden Investitionen nicht verdrängt; der fiskalische Impuls wirkt daher stärker auf den Output.')
        ],
        'Der Verzicht auf Zinsanstieg verhindert Crowding-Out und macht Fiskalpolitik wirksamer.'
      ),
      task(
        String.raw`Erkläre Crowding-Out mit einem Satz zum Diagramm und einem Satz zur Ökonomie.`,
        [
          step('Diagramm: Nach einer IS-Verschiebung steigt im neuen Gleichgewicht der Zins.'),
          step('Ökonomie: Der höhere Zins dämpft Investitionen, sodass der Produktionsanstieg kleiner ausfällt als ohne Zinsreaktion.')
        ],
        'Crowding-Out ist die teilweise Verdrängung privater Nachfrage durch den zinsbedingten Rückgang der Investitionen.'
      ),
      task(
        'Eine Lösung behauptet: "Fiskalpolitik wirkt immer gleich stark, weil nur die IS-Kurve zählt." Wo liegt der Denkfehler?',
        [
          step('Die IS-Verschiebung ist nur der erste Teil der Analyse.'),
          step('Die Endwirkung hängt davon ab, wie die monetäre Bedingung verläuft (horizontale Zinsregel vs. steigende LM).'),
          step('Damit bestimmt die Zinsreaktion, ob Investitionen stabil bleiben oder teilweise verdrängt werden.')
        ],
        'Der Fehler ist das Ignorieren der Geldpolitik/LM-Form: dieselbe IS-Verschiebung kann sehr unterschiedliche Endeffekte erzeugen.'
      ),
      task(
        String.raw`Before/After-Graphwalk: Zeichne gedanklich zwei Fälle derselben Fiskalexpansion — (A) steile LM, (B) horizontale Zinsregel. Welche Unterschiede müssen in den Endpunkten sichtbar sein?`,
        [
          step('In beiden Fällen verschiebt sich die IS nach rechts (gleicher Erstimpuls).'),
          step('Fall A: steile LM -> starker Zinsanstieg, kleinerer Y-Anstieg (stärkeres Crowding-Out).'),
          step('Fall B: horizontale Zinsregel -> kaum/kein Zinsanstieg, größerer Y-Anstieg (schwächeres Crowding-Out).'),
          step('Die korrekte Vergleichsaussage benennt immer beide Endpunkte (Δi und ΔY), nicht nur die gemeinsame IS-Verschiebung.')
        ],
        'Policy-Graphkompetenz heißt: gleicher Schock, unterschiedliche Kurvengeometrie, unterschiedliche Endgleichgewichte.'
      )
    ]
  },

  realzins: {
    motivation: 'Makro I wird realistischer, sobald nicht mehr der Nominalzins, sondern der für Investitionsentscheidungen relevante Real- oder Kreditzins betrachtet wird. Erwartete Inflation und Risikoprämien werden dann zu eigenständigen makroökonomischen Schocks.',
    theorie: [
      section('Vom Nominalzins zum Realzins', `
        <p>Haushalte und Unternehmen interessieren sich nicht nur für den Nominalzins $i$, sondern für den Realzins $r$, also den um erwartete Inflation bereinigten Finanzierungssatz.</p>
        ${math(String.raw`$$r \approx i - \pi^e$$`)}
        <p>Sinken Inflationserwartungen bei konstantem Nominalzins, steigt der Realzins. Genau deshalb kann Deflationsangst selbst ohne Zinserhöhung konjunkturdämpfend wirken.</p>
      `),
      section('Risikoprämie und Kreditzins', `
        <p>Im erweiterten IS-LM-Modell ist für Unternehmen oft der Kreditzins entscheidend. Er setzt sich aus risikofreiem Zins und Risikoprämie zusammen:</p>
        ${math(String.raw`$$i_L = i + x$$`)}
        <p>Steigt die Risikoprämie $x$, wird Kredit teurer, Investitionen sinken und die IS-Kurve verschiebt sich nach links. Bankenkrisen und Vertrauensschocks laufen genau über diesen Kanal.</p>
      `),
      section('Makroökonomische Lesart', `
        <p>Eine Finanzkrise kann also auch dann rezessiv wirken, wenn die Zentralbank den Leitzins nicht anhebt. Relevanter ist oft, dass Kreditaufschläge steigen oder erwartete Inflation fällt und damit der Realzins nach oben gedrückt wird.</p>
        ${warn('Nominalzinssenkung reicht nicht automatisch', 'Wenn gleichzeitig Inflationserwartungen fallen oder Risikoprämien steigen, kann der relevante Real- oder Kreditzins trotzdem hoch bleiben.')}
        ${warn('Risikoprämie ist kein Schönheitsdetail', 'Im erweiterten Modell ist sie ein eigenständiger Schock, der Investitionen und Nachfrage verschiebt.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Fisher-Gleichung', eq: String.raw`$$r \approx i - \pi^e$$`, desc: 'Realzins bei gegebener erwarteter Inflation', variables: { 'r': 'Realzins', 'i': 'Nominalzins', '\\pi^e': 'erwartete Inflation' } },
      { label: 'Kreditzins', eq: String.raw`$$i_L = i + x$$`, desc: 'Leitzins plus Risikoprämie', variables: { 'i_L': 'Kreditzins', 'x': 'Risikoprämie' } }
    ],
    aufgaben: [
      task(
        String.raw`Der Nominalzins bleibt bei $4\%$, die erwartete Inflation sinkt von $2\%$ auf $0\%$. Wie verändert sich der Realzins?`,
        [
          step('Berechne den anfänglichen Realzins.', String.raw`$$r_0 \approx 4\% - 2\% = 2\%$$`),
          step('Berechne den neuen Realzins.', String.raw`$$r_1 \approx 4\% - 0\% = 4\%$$`),
          step('Interpretiere den Effekt auf Investitionen.')
        ],
        'Der Realzins steigt von 2% auf 4%; Investitionen werden gebremst.'
      ),
      task(
        String.raw`Warum kann eine Bankenkrise die IS-Kurve nach links verschieben, obwohl die Zentralbank ihren Leitzins nicht anhebt?`,
        [
          step('Eine Bankenkrise erhöht häufig die Risikoprämie auf Kredite.'),
          step('Damit steigt der für Unternehmen relevante Kreditzins trotz konstantem Leitzins.'),
          step('Höhere Finanzierungskosten senken Investitionen und verschieben die IS-Kurve nach links.')
        ],
        'Nicht der Leitzins allein, sondern der Kreditzins entscheidet über die Investitionsnachfrage.'
      ),
      task(
        String.raw`Gegeben: Leitzins bleibt bei $3\%$, erwartete Inflation sinkt von $2\%$ auf $1\%$, Risikoprämie steigt von $1\%$ auf $2\%$. Wie verändert sich der Kreditzins in realer Rechnung?`,
        [
          step('Berechne den anfänglichen nominalen Kreditzins.', String.raw`i_L^0 = 3\% + 1\% = 4\%`),
          step('Berechne den neuen nominalen Kreditzins.', String.raw`i_L^1 = 3\% + 2\% = 5\%`),
          step('Ziehe erwartete Inflation ab.', String.raw`r_L^0 \approx 4\%-2\%=2\%,\; r_L^1 \approx 5\%-1\%=4\%`)
        ],
        'Der real relevante Kreditzins steigt stark (von 2% auf 4%): Doppelbremse aus höherer Prämie und niedrigeren Inflationserwartungen.'
      )
    ]
  },

  arbeitsmarkt: {
    motivation: 'Sobald Preise und Löhne reagieren, reicht reine Nachfrageanalyse nicht mehr. Der Arbeitsmarktblock zeigt, wie Verhandlungsmacht, Markups und Institutionen das mittelfristige Produktionspotenzial bestimmen.',
    theorie: [
      section('Lohnsetzung: WS-Kurve', `
        <p>Arbeitnehmer und Unternehmen handeln Nominallöhne aus. Je höher die Arbeitslosigkeit, desto schwächer ist typischerweise die Verhandlungsmacht der Beschäftigten; je günstiger Institutionen für Arbeitnehmer sind, desto höher fallen Lohnforderungen aus.</p>
        ${math(String.raw`$$W = P^e F(u,z), \qquad F_u < 0,\; F_z > 0$$`)}
        <p>In Reallohnschreibweise ergibt sich $W/P = F(u,z)$. Die WS-Kurve verläuft im $(u, W/P)$-Diagramm fallend.</p>
      `),
      section('Preissetzung: PS-Kurve', `
        <p>Firmen setzen Preise mit einem Markup $\\mu$ auf die Grenzkosten. Bei einfacher Produktionsstruktur gilt:</p>
        ${math(String.raw`$$P = (1+\mu)W \qquad \Rightarrow \qquad \frac{W}{P} = \frac{1}{1+\mu}$$`)}
        <p>Die PS-Kurve ist horizontal: Der von Unternehmen gezahlte Reallohn hängt in diesem einfachen Modell nicht von der Arbeitslosenquote ab, sondern vom Markup.</p>
      `),
      section('Natürliche Arbeitslosigkeit und Produktionspotenzial', `
        <p>Im Schnittpunkt von WS und PS liegt die natürliche Arbeitslosenquote $u_n$. Sie steigt, wenn Verhandlungsmacht bzw. institutionelle Faktoren $z$ zunehmen oder wenn Firmenmarktmacht $\\mu$ steigt.</p>
        ${math(String.raw`$$F(u_n,z) = \frac{1}{1+\mu}$$`)}
        ${warn('WS ist keine klassische Arbeitsangebotskurve', 'Es geht um das Ergebnis von Lohnverhandlungen, nicht um reine individuelle Arbeitsangebotsentscheidungen.')}
        ${warn('u_n ist veränderlich', 'Die natürliche Arbeitslosenquote hängt von Institutionen, Marktmacht und Erwartungsbildung ab und ist daher kein Naturgesetz.')}
      `)
    ].join(''),
    formeln: [
      { label: 'WS-Kurve', eq: String.raw`$$\frac{W}{P} = F(u,z)$$`, desc: 'Reallohnforderung der Beschäftigten', variables: { 'u': 'Arbeitslosenquote', 'z': 'Institutionen/Verhandlungsmacht' } },
      { label: 'PS-Kurve', eq: String.raw`$$\frac{W}{P} = \frac{1}{1+\mu}$$`, desc: 'Reallohn, den Firmen zahlen', variables: { '\\mu': 'Preisaufschlag bzw. Markup' } }
    ],
    aufgaben: [
      task(
        String.raw`Wie wirkt ein höherer Markup $\mu$ auf die natürliche Arbeitslosenquote?`,
        [
          step('Ein höherer Markup senkt den von Firmen gezahlten Reallohn.', String.raw`$$W/P = 1/(1+\mu) \downarrow$$`),
          step('Die PS-Kurve verschiebt sich nach unten.'),
          step('Der Schnittpunkt mit der fallenden WS-Kurve entsteht bei höherer Arbeitslosigkeit.')
        ],
        String.raw`$u_n$ steigt.`
      ),
      task(
        String.raw`Ein stärkerer Kündigungsschutz erhöht die Sammelvariable $z$. Wie wird dies im WS-PS-Modell dargestellt?`,
        [
          step('Höheres $z$ erhöht bei gegebener Arbeitslosigkeit die Lohnforderung.'),
          step('Die WS-Kurve verschiebt sich nach oben.'),
          step('Der neue Schnittpunkt mit der PS-Kurve liegt bei höherer natürlicher Arbeitslosigkeit.')
        ],
        'Die WS-Kurve verschiebt sich nach oben; die natürliche Arbeitslosigkeit steigt.'
      )
    ]
  },

  phillips: {
    motivation: 'Die Phillipskurve übersetzt Arbeitsmarktspannung in Inflationsdynamik. Sie ist der Schlüssel, um zu verstehen, warum ein Boom nicht nur Output, sondern auch Preisentwicklung verändert.',
    theorie: [
      section('Erwartungsaugmentierte Phillipskurve', `
        <p>Inflation hängt von erwarteter Inflation, Markups und der Lage des Arbeitsmarkts ab. Je niedriger die Arbeitslosigkeit relativ zur natürlichen Rate, desto stärker steigen Löhne und Preise.</p>
        ${math(String.raw`$$\pi_t = \pi_t^e + (\mu + z) - \alpha u_t$$`)}
        ${math(String.raw`$$\pi_t - \pi_t^e = -\alpha (u_t - u_n)$$`)}
        <p>Die zweite Schreibweise macht den Kern sichtbar: Inflation steigt, wenn $u_t$ unter $u_n$ liegt.</p>
      `),
      section('NAIRU und Inflationsbeschleunigung', `
        <p>Die NAIRU ist die Arbeitslosenquote, bei der Inflation weder steigt noch fällt. Unter adaptiven Erwartungen gilt näherungsweise:</p>
        ${math(String.raw`$$\pi_t - \pi_{t-1} = -\alpha (u_t - u_n)$$`)}
        <p>Liegt die Arbeitslosigkeit unter $u_n$, beschleunigt sich die Inflation; liegt sie darüber, sinkt die Inflation.</p>
      `),
      section('Erwartungen und Verschiebungen', `
        <p>Steigen Inflationserwartungen, verschiebt sich die kurzfristige Phillipskurve nach oben. Langfristig verschwindet der Trade-off: Dann liegt die Wirtschaft wieder bei der natürlichen Arbeitslosenquote, nur womöglich bei höherer Inflationsrate.</p>
        ${warn('u_n ist kein Zielwert für Null-Inflation', 'u_n stabilisiert die Inflation; er bedeutet nicht automatisch, dass Inflation null ist.')}
        ${warn('Kurzfristig vs. langfristig', 'Ein kurzfristiger Trade-off zwischen Inflation und Arbeitslosigkeit heißt nicht, dass dauerhaft niedrigere Arbeitslosigkeit durch mehr Inflation gekauft werden kann.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Erwartungsaugmentierte Phillipskurve', eq: String.raw`$$\pi_t - \pi_t^e = -\alpha (u_t - u_n)$$`, desc: 'Arbeitslosigkeitslücke bestimmt Inflationsdruck', variables: { '\\alpha': 'Sensitivität', 'u_n': 'natürliche Arbeitslosenquote' } },
      { label: 'Beschleunigungsform', eq: String.raw`$$\pi_t - \pi_{t-1} = -\alpha (u_t - u_n)$$`, desc: 'Bei adaptiven Erwartungen', variables: {} }
    ],
    aufgaben: [
      task(
        String.raw`Es gilt $u_t < u_n$. Was sagt die Phillipskurve über die Inflationsentwicklung aus?`,
        [
          step('Die Arbeitslosigkeitslücke ist negativ.', String.raw`$$u_t - u_n < 0$$`),
          step('Mit dem Minuszeichen vor $\\alpha$ wird daraus ein positiver Beitrag zur Inflationsänderung.'),
          step('Die Inflation liegt über der erwarteten Inflation bzw. steigt relativ zur Vorperiode.')
        ],
        'Die Inflation steigt bzw. beschleunigt sich.'
      ),
      task(
        String.raw`Warum verschiebt sich die kurzfristige Phillipskurve nach oben, wenn Inflationserwartungen steigen?`,
        [
          step('Beschäftigte und Firmen gehen mit höheren erwarteten Preissteigerungen in Lohn- und Preisverhandlungen.'),
          step('Bei gleicher Arbeitslosigkeit resultiert daraus höhere tatsächliche Inflation.'),
          step('Die gesamte kurzfristige Phillipskurve liegt deshalb höher.')
        ],
        'Höhere Inflationserwartungen erhöhen die Inflationsrate bei jeder gegebenen Arbeitslosenquote.'
      ),
      task(
        String.raw`Trap-Check: "Wenn die Arbeitslosigkeit bei 6% liegt, muss die Inflation fallen." Warum ist diese Aussage ohne Zusatzinfo unvollständig?`,
        [
          step('Für die Richtung zählt nicht das Niveau von $u$ allein, sondern die Lücke zu $u_n$.'),
          step('Nur wenn $u > u_n$, ist der Inflationsdruck negativ.'),
          step('Ohne Angabe von $u_n$ (oder äquivalenter Information) ist keine eindeutige Richtungsdiagnose möglich.')
        ],
        String.raw`Aussagen über Inflationsrichtung brauchen die Arbeitslosenlücke $u-u_n$, nicht nur den absoluten Wert von $u$.`
      ),
      task(
        String.raw`Graph-Shift-vs-Movement: In der Phillips-Grafik steigen Inflationserwartungen bei unverändertem $u$. Was ist eine Kurvenverschiebung und was wäre eine Bewegung entlang derselben Kurve?`,
        [
          step('Höhere erwartete Inflation verschiebt die kurzfristige Phillipskurve nach oben.'),
          step('Bei gleichem u liegt der neue Punkt auf einer höheren Kurve (keine Bewegung auf der alten Kurve).'),
          step('Eine Bewegung entlang derselben Phillipskurve entsteht dagegen durch Veränderung von u bei konstanten Erwartungen.'),
          step('Damit trennt man Erwartungsschocks (Kurvenlage) von Konjunkturbewegungen (Punkt auf Kurve).')
        ],
        'Diagrammregel: Erwartungsänderung -> Shift; Arbeitslosenänderung bei gegebenen Erwartungen -> Movement.'
      )
    ]
  },

  islmpc: {
    motivation: 'Das IS-LM-PC-Modell verbindet die Nachfragewelt der kurzen Frist mit der Inflations- und Arbeitsmarktlogik der mittleren Frist. Es erklärt, warum Konjunkturimpulse nicht dauerhaft zu höherem Output führen, wohl aber zu einer Anpassungsdynamik von Inflation und Zins.',
    theorie: [
      section('Die drei Bausteine zusammenführen', `
        <p>Im Gütermarkt bestimmt die IS-Beziehung die Produktionslücke, im Arbeitsmarkt bzw. über Okun die Arbeitslosenlücke und über die Phillipskurve die Inflationsdynamik. Die Zentralbank reagiert schließlich mit einer Zinsregel.</p>
        ${math(String.raw`$$\pi_t - \pi_{t-1} = -\alpha(u_t-u_n)$$`)}
        ${math(String.raw`$$r_t = \bar r + \lambda(\pi_t - \bar \pi)$$`)}
        <p>Genau dieses Zusammenspiel beschreibt, wie ein Boom über Inflation eine geldpolitische Reaktion auslöst, die die Wirtschaft wieder Richtung Potenzial zurückführt.</p>
      `),
      section('Okun-Gesetz als Brücke', `
        <p>Um Produktionslücke und Arbeitslosigkeit zu verknüpfen, wird Okuns Gesetz verwendet. Übersteigt der Output sein natürliches Niveau, fällt die Arbeitslosigkeit unter die natürliche Rate.</p>
        ${math(String.raw`$$u_t - u_n = -\beta \frac{Y_t - Y_n}{Y_n}$$`)}
        <p>Damit wird klar, warum ein Nachfrageschock nicht nur das Einkommen verschiebt, sondern mit Verzögerung auch den Inflationsdruck verändert.</p>
      `),
      section('Anpassungsdynamik', `
        <p>Nach einer expansiven Fiskalpolitik steigt der Output zunächst über $Y_n$. Die Arbeitslosigkeit fällt unter $u_n$, Inflation zieht an, die Zentralbank erhöht den Realzins und drückt die Nachfrage wieder zurück. Mittelfristig kehrt die Wirtschaft zu $Y_n$ zurück.</p>
        ${warn('Kurzfristiger Boom ist nicht dauerhaftes Wachstum', 'Im IS-LM-PC-Modell kehrt der Output zur natürlichen Produktion zurück. Dauerhafte Nachfragepolitik verschiebt also nicht das Produktionspotenzial.')}
        ${warn('Zinsregel ersetzt die alte LM-Logik', 'Spätestens hier muss klar sein, ob die Zentralbank Geldmenge oder Zins setzt. Für die Dynamik zählt die Reaktion des Realzinses auf Inflation.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Zinsregel', eq: String.raw`$$r_t = \bar r + \lambda(\pi_t - \bar \pi)$$`, desc: 'Reaktion des Realzinses auf Inflationsabweichungen', variables: { '\\lambda': 'Reaktionskoeffizient', '\\bar \\pi': 'Inflationsziel' } },
      { label: 'Okuns Gesetz', eq: String.raw`$$u_t - u_n = -\beta \frac{Y_t - Y_n}{Y_n}$$`, desc: 'Produktionslücke und Arbeitslosigkeitslücke', variables: { '\\beta': 'Sensitivität von u auf Y' } }
    ],
    aufgaben: [
      task(
        String.raw`Beschreibe die Dynamik nach einer dauerhaften Erhöhung der Staatsausgaben im IS-LM-PC-Modell.`,
        [
          step('Kurzfristig verschiebt sich die IS-Kurve nach rechts; der Output steigt über $Y_n$.'),
          step('Über Okun sinkt die Arbeitslosigkeit unter $u_n$; die Phillipskurve erzeugt steigende Inflation.'),
          step('Die Zentralbank erhöht den Realzins; Nachfrage und Output werden wieder Richtung $Y_n$ gedrückt.')
        ],
        'Kurzfristiger Boom, mittelfristige Rückkehr zu natürlichem Output bei geldpolitischer Straffung.'
      ),
      task(
        String.raw`Warum kehrt der Output im IS-LM-PC-Modell mittelfristig zu $Y_n$ zurück, obwohl die Fiskalpolitik dauerhaft expansiv bleibt?`,
        [
          step('Die höhere Nachfrage erzeugt zunächst eine positive Produktionslücke.'),
          step('Diese Lücke erhöht über Phillipskurve und Erwartungen die Inflation.'),
          step('Die Zentralbank reagiert mit höherem Realzins und neutralisiert damit die dauerhafte Nachfragestützung.')
        ],
        String.raw`Weil steigende Inflation eine geldpolitische Reaktion auslöst, die den Output wieder auf $Y_n$ zurückführt.`
      )
    ]
  },

  erwartungen: {
    motivation: 'Erwartungen entscheiden darüber, wie stark Politik wirkt. In Makro I wird deshalb sauber zwischen angekündigten und überraschenden Maßnahmen, Glaubwürdigkeit und Zeitkonsistenz unterschieden.',
    theorie: [
      section('Erwartungen in Konsum, Investition und Zinsstruktur', `
        <p>Haushalte orientieren ihren Konsum nicht nur am heutigen Einkommen, sondern am erwarteten Lebenseinkommen. Unternehmen investieren auf Basis des erwarteten Barwerts künftiger Gewinne. Und langfristige Zinsen hängen von erwarteten künftigen Kurzfristzinsen ab.</p>
        ${math(String.raw`$$V_t = \sum_{k=0}^{\infty}\frac{\pi^e_{t+k}}{(1+r)^k}$$`)}
        ${math(String.raw`$$i_{lang} \approx \frac{1}{n}\sum_{k=0}^{n-1} i^e_{t+k}$$`)}
        <p>Darum wirkt glaubwürdige Politik oft schon über Erwartungen, bevor sich aktuelle Größen mechanisch ändern.</p>
      `),
      section('Temporäre versus permanente Politik', `
        <p>Eine einmalige Steuersenkung erhöht das erwartete Lebenseinkommen viel weniger als eine dauerhafte Senkung. Deshalb fällt der Konsumimpuls deutlich schwächer aus. Derselbe Gedanke gilt für Zinsankündigungen: Eine glaubwürdige Zukunftsankündigung kann sofort lange Zinsen bewegen.</p>
      `),
      section('Glaubwürdigkeit und Zeitinkonsistenz', `
        <p>Politik wirkt nur, wenn private Akteure die Ankündigung ernst nehmen. Eine Zentralbank, die niedrige Inflation ankündigt, aber später doch Beschäftigung kurzfristig über Überraschungsinflation stützen möchte, leidet unter Zeitinkonsistenz. Regeln, Reputation und Unabhängigkeit sind institutionelle Antworten auf dieses Problem.</p>
        ${warn('Ankündigung ist nicht Wirkung', 'Ob eine Politikmaßnahme sofort wirkt, hängt davon ab, ob sie glaubwürdig ist und wie stark sie Erwartungen verändert.')}
        ${warn('Temporär und permanent trennen', 'Viele Klausurfehler entstehen, weil eine einmalige Maßnahme fälschlich wie eine dauerhafte bewertet wird.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Barwert erwarteter Gewinne', eq: String.raw`$$V_t = \sum_{k=0}^{\infty}\frac{\pi^e_{t+k}}{(1+r)^k}$$`, desc: 'Investitionsentscheidungen hängen von Erwartungen ab', variables: { '\\pi^e_{t+k}': 'erwartete Gewinne' } },
      { label: 'Erwartungshypothese der Zinsstruktur', eq: String.raw`$$i_{lang} \approx \frac{1}{n}\sum_{k=0}^{n-1} i^e_{t+k}$$`, desc: 'Langfristiger Zins als Durchschnitt erwarteter Kurzfristzinsen', variables: {} }
    ],
    aufgaben: [
      task(
        'Warum verschiebt eine permanente Steuersenkung die IS-Kurve stärker als eine nur einjährige Senkung?',
        [
          step('Konsum hängt vom erwarteten Lebenseinkommen ab, nicht nur vom aktuellen verfügbaren Einkommen.'),
          step('Eine permanente Steuersenkung erhöht viele zukünftige Einkommen; eine einjährige nur sehr wenig.'),
          step('Deshalb ist die Konsumreaktion und damit die IS-Verschiebung bei permanenter Politik deutlich größer.')
        ],
        'Permanente Politik verändert Erwartungen stärker und verschiebt daher die IS-Kurve kräftiger.'
      ),
      task(
        'Wie kann eine glaubwürdige Ankündigung zukünftiger Zinssenkungen schon heute die Konjunktur stimulieren?',
        [
          step('Langfristige Zinsen hängen von erwarteten zukünftigen Kurzfristzinsen ab.'),
          step('Sinken diese Erwartungen, fallen langfristige Finanzierungskosten sofort.'),
          step('Dadurch steigen Investitionen und Nachfrage schon vor der eigentlichen Zinssenkung.')
        ],
        'Der Erwartungskanal wirkt über sofort sinkende langfristige Zinsen und damit frühere Nachfrageimpulse.'
      )
    ]
  }
};
