// ============================================================
// CHAPTERS & CONTENT DATA — Makroökonomik II
// Benchmark-grade authored concept line based on course materials
// ============================================================

import { COURSEWORK_TASKS } from './courseworkTasks.js';

const section = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const math = (eq) => `<div class="math-block">${eq}</div>`;
const warn = (title, body) => `<div class="warn-box"><strong>${title}:</strong> ${body}</div>`;
const cloneTask = (task) => ({
  ...task,
  steps: Array.isArray(task?.steps) ? task.steps.map((step) => ({ ...step })) : []
});
const practice = (id, extras = []) => [
  ...extras.map(cloneTask),
  ...((COURSEWORK_TASKS[id] || []).map(cloneTask))
];

export const CHAPTERS = [
  { id: 'zahlungsbilanz',   title: 'Zahlungsbilanz & Nettoauslandsvermögen',            cat: 'Offene Volkswirtschaft I', short: 'ZB' },
  { id: 'wechselkurs',      title: 'Nominaler und realer Wechselkurs',                  cat: 'Offene Volkswirtschaft I', short: 'WK' },
  { id: 'kaufkraftparitaet',title: 'Kaufkraftparität',                                  cat: 'Offene Volkswirtschaft I', short: 'PPP' },
  { id: 'zinsparitaet',     title: 'Ungedeckte Zinsparität',                            cat: 'Offene Volkswirtschaft I', short: 'UIP' },
  { id: 'offene_is',        title: 'Offener Gütermarkt & Multiplikator',                cat: 'Offene Volkswirtschaft II', short: 'IS offen' },
  { id: 'nettoexporte',     title: 'Nettoexporte & Wettbewerbsfähigkeit',               cat: 'Offene Volkswirtschaft II', short: 'NX' },
  { id: 'marshall_lerner',  title: 'Marshall-Lerner-Bedingung & J-Kurve',               cat: 'Offene Volkswirtschaft II', short: 'ML' },
  { id: 'geldmengen',       title: 'Geldmarkt, LM-Kurve & Zinssteuerung',               cat: 'Offene Volkswirtschaft II', short: 'LM' },
  { id: 'mundell_fleming',  title: 'Mundell-Fleming bei flexiblem Wechselkurs',         cat: 'Offene Volkswirtschaft II', short: 'M-F' },
  { id: 'wk_regime',        title: 'Feste Wechselkurse, Trilemma & Paritätsverteidigung', cat: 'Offene Volkswirtschaft II', short: 'Regime' },
  { id: 'wk_krisen',        title: 'Currency Boards & Währungskrisen',                  cat: 'Offene Volkswirtschaft II', short: 'Krisen' },
  { id: 'phillipskurve',    title: 'Phillipskurve & Inflationserwartungen',             cat: 'Geldpolitik & Glaubwürdigkeit', short: 'PK' },
  { id: 'zeitinkonsistenz', title: 'Zeitinkonsistenz & Commitment',                     cat: 'Geldpolitik & Glaubwürdigkeit', short: 'Commit' },
  { id: 'barro_gordon',     title: 'Barro-Gordon & Inflationsbias',                     cat: 'Geldpolitik & Glaubwürdigkeit', short: 'B-G' },
  { id: 'taylor_regel',     title: 'Taylor-Regel & geldpolitische Reaktion',            cat: 'Geldpolitik & Glaubwürdigkeit', short: 'Taylor' },
  { id: 'aggregierte_pf',   title: 'Produktionsfunktion, Grenzerträge & Skalenerträge', cat: 'Wachstum & Fiskalstaat', short: 'PF' },
  { id: 'solow_basis',      title: 'Solow-Grundmodell & Steady State',                  cat: 'Wachstum & Fiskalstaat', short: 'Solow' },
  { id: 'tech_fortschritt', title: 'Technischer Fortschritt & Goldene Regel',           cat: 'Wachstum & Fiskalstaat', short: 'TF' },
  { id: 'schuldenquote',    title: 'Schuldenquote, Budgetrestriktion & Monetarisierung', cat: 'Wachstum & Fiskalstaat', short: 'Schuld' }
];

export const CONTENT = {
  zahlungsbilanz: {
    motivation: 'Die Zahlungsbilanz ist die Buchhaltung der offenen Volkswirtschaft. Wer Leistungsbilanz, Kapitalbilanz und Nettoauslandsvermögen nicht sauber trennt, stolpert später bei Wechselkursen, Fiskalpolitik und Schuldenfragen.',
    theorie: [
      section('Buchhaltungssystem der offenen Volkswirtschaft', `
        <p>Die Zahlungsbilanz zerlegt alle Transaktionen mit dem Ausland in Leistungsbilanz, Kapitalbilanz und gegebenenfalls Reserveveränderungen. Didaktisch wichtig ist: Es geht nicht zuerst um "gut" oder "schlecht", sondern um saubere Gegenbuchungen.</p>
        ${math(String.raw`$$LB + KB + \Delta R = 0$$`)}
        <p>Ein Leistungsbilanzdefizit heißt also nicht "Fehler", sondern: Es wird spiegelbildlich durch Kapitalzuflüsse oder Reserveabbau finanziert.</p>
      `),
      section('Leistungsbilanz, Ersparnis und Nettoauslandsvermögen', `
        <p>Die Leistungsbilanz ist eng mit dem makroökonomischen Spar-Investitions-Saldo verbunden. Dauerhafte Defizite bedeuten: Das Land baut Nettoverbindlichkeiten gegenüber dem Ausland auf.</p>
        ${math(String.raw`$$LB = S - I = NX + NI + NCT$$`)}
        ${math(String.raw`$$\Delta NAV = LB$$`)}
        <p>Für Klausuren ist entscheidend, ob gerade über Warenhandel, Primäreinkommen oder Finanzierung gesprochen wird.</p>
      `),
      section('Prüfungslogik', `
        <p>Bei Transaktionsaufgaben immer in dieser Reihenfolge denken: Was passiert realwirtschaftlich? Welche Teilbilanz wird direkt berührt? Welche Gegenbuchung spiegelt die Finanzierung?</p>
        ${warn('Leistungsbilanz vs. Handelsbilanz', 'Die Handelsbilanz ist nur ein Teil der Leistungsbilanz. Zinsen, Dividenden und Transfers können den Leistungsbilanzsaldo trotz ausgeglichener Warenströme verändern.')}
        ${warn('Vorzeichen der Kapitalbilanz', 'Prüfen Sie immer die im Kurs verwendete Definition. Manche Skripte schreiben Kapitalimporte positiv, andere definieren Nettokapitalexporte positiv.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Zahlungsbilanzidentität', eq: String.raw`$$LB + KB + \Delta R = 0$$`, desc: 'Gesamtbuchhaltung der offenen Volkswirtschaft', variables: { 'LB': 'Leistungsbilanz', 'KB': 'Kapitalbilanz', '\\Delta R': 'Reserveveränderung' } },
      { label: 'Sparen und Investieren', eq: String.raw`$$LB = S - I$$`, desc: 'Makroökonomische Deutung des Leistungsbilanzsaldos', variables: { 'S': 'Ersparnis', 'I': 'Investitionen' } },
      { label: 'Nettoauslandsvermögen', eq: String.raw`$$\Delta NAV = LB$$`, desc: 'Leistungsbilanz verändert die Nettoauslandsposition', variables: { 'NAV': 'Nettoauslandsvermögen' } }
    ],
    aufgaben: practice('zahlungsbilanz', [
      {
        text: String.raw`Ein Land weist einen Leistungsbilanzüberschuss von 15 Mrd. € auf, während die Zentralbank Devisenreserven im Umfang von 5 Mrd. € aufbaut. Wie groß ist der Kapitalbilanzsaldo?`,
        steps: [
          { text: 'Nutze die Zahlungsbilanzidentität:', eq: String.raw`$$LB + KB + \Delta R = 0$$` },
          { text: 'Setze die Größen ein:', eq: String.raw`$$15 + KB + 5 = 0$$` },
          { text: 'Löse nach der Kapitalbilanz auf.', eq: String.raw`$$KB = -20$$` }
        ],
        result: String.raw`$KB=-20$ Mrd. €: Dem Leistungsbilanzüberschuss stehen Kapitalexporte bzw. Forderungsaufbau gegenüber.`
      }
    ])
  },

  wechselkurs: {
    motivation: 'Makro II arbeitet durchgehend mit Wechselkursnotation. Wer hier Mengennotierung, reale Auf- und Abwertung und Preisniveaulogik unsauber hält, verliert den Faden in PPP, UIP und Mundell-Fleming.',
    theorie: [
      section('Nominaler Wechselkurs in Mengen- und Preisnotierung', `
        <p>Im Kurs wird mit der <strong>Mengennotierung</strong> gearbeitet: $E$ gibt an, wie viele Einheiten ausländischer Währung eine Einheit inländischer Währung kauft. Deshalb bedeutet $E \\uparrow$ eine nominale Aufwertung des Inlands.</p>
        ${math(String.raw`$$E = \frac{\text{Fremdwährung}}{\text{Inlandswährung}}$$`)}
        <p>Wer zwischen Mengen- und Preisnotierung wechselt, muss die Richtung ökonomischer Aussagen sofort anpassen.</p>
      `),
      section('Realer Wechselkurs und Wettbewerbsfähigkeit', `
        <p>Der reale Wechselkurs kombiniert nominalen Kurs und Preisniveaus. Er misst, wie teuer inländische Güter im Vergleich zu ausländischen Gütern sind.</p>
        ${math(String.raw`$$\varepsilon = \frac{E \cdot P}{P^*}$$`)}
        <p>Eine reale Aufwertung bedeutet: Inlandsproduktion wird relativ teuer, Nettoexporte geraten unter Druck. Eine reale Abwertung verbessert ceteris paribus die preisliche Wettbewerbsfähigkeit.</p>
      `),
      section('Klausurzugriff', `
        <p>Bei Kursaufgaben zuerst die Notation fixieren, dann nominale und reale Bewegung trennen und erst danach ökonomisch interpretieren.</p>
        ${warn('Notierung nicht verwechseln', 'Im Kurs bedeutet ein Anstieg von $E$ in Mengennotierung Aufwertung. In Preisnotierung wäre die Richtung genau umgekehrt.')}
        ${warn('Nominal ist nicht real', 'Ein konstanter nominaler Wechselkurs kann mit unterschiedlicher Inflation trotzdem zu realer Auf- oder Abwertung führen.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Nominaler Wechselkurs', eq: String.raw`$$E = \frac{\text{Einheiten Ausland}}{\text{1 Einheit Inland}}$$`, desc: 'Mengennotierung', variables: { 'E': 'Nominaler Wechselkurs' } },
      { label: 'Realer Wechselkurs', eq: String.raw`$$\varepsilon = \frac{E \cdot P}{P^*}$$`, desc: 'Preisliche Wettbewerbsfähigkeit', variables: { 'P': 'Preisniveau Inland', 'P^*': 'Preisniveau Ausland' } }
    ],
    aufgaben: practice('wechselkurs', [
      {
        text: String.raw`Das inländische Preisniveau steigt um 8%, das ausländische um 3%. Der nominale Wechselkurs in Mengennotierung bleibt konstant. Was passiert mit dem realen Wechselkurs und wie ist das zu interpretieren?`,
        steps: [
          { text: 'Nutze die reale Logik bei konstantem $E$.', eq: String.raw`$$\frac{\Delta \varepsilon}{\varepsilon} \approx \pi - \pi^*$$` },
          { text: 'Setze die Inflationsraten ein.', eq: String.raw`$$8\% - 3\% = 5\%$$` },
          { text: 'Der reale Wechselkurs steigt; das Inland wertet real auf.', eq: null }
        ],
        result: 'Der reale Wechselkurs steigt um etwa 5%; die preisliche Wettbewerbsfähigkeit verschlechtert sich.'
      },
      {
        text: String.raw`Trap-Check: Eine Lösung schreibt "E steigt in Mengennotierung, also wertet das Inland ab". Was ist daran falsch und welche reale Folge ist stattdessen plausibel?`,
        steps: [
          { text: 'In Mengennotierung bedeutet $E \\uparrow$: eine Einheit Inlandswährung kauft mehr Fremdwährung.', eq: null },
          { text: 'Damit liegt nominale Aufwertung vor, nicht Abwertung.', eq: null },
          { text: 'Ceteris paribus erhöht das den realen Aufwertungsdruck und belastet Nettoexporte.', eq: null }
        ],
        result: 'Der Vorzeichenfehler liegt in der Notation: $E\\uparrow$ ist Aufwertung des Inlands; dadurch werden Inlandsprodukte relativ teurer.'
      }
    ])
  },

  kaufkraftparitaet: {
    motivation: 'PPP ist der Brückensatz zwischen Preisniveaus und Wechselkursen. In Makro II wird damit sauber zwischen Niveauaussagen, Änderungsraten und systematischen Abweichungen unterschieden.',
    theorie: [
      section('Absolute Kaufkraftparität', `
        <p>Die absolute PPP behauptet: Ein identischer Güterkorb kostet, nach Umrechnung über den Wechselkurs, in beiden Ländern gleich viel.</p>
        ${math(String.raw`$$E_{PPP} = \frac{P^*}{P}$$`)}
        <p>Sie ist ein Niveaukonzept. Für Klausuren ist wichtig, dass absolute PPP eher ein Referenzwert als eine exakte Kurzfristprognose ist.</p>
      `),
      section('Relative Kaufkraftparität', `
        <p>Relative PPP betrachtet nicht Niveaus, sondern Änderungsraten. Der nominale Wechselkurs muss langfristig ungefähr um die Inflationsdifferenz reagieren.</p>
        ${math(String.raw`$$\frac{\Delta E}{E} \approx \pi^* - \pi$$`)}
        <p>Diese Form ist empirisch plausibler und besonders klausurrelevant, wenn nach Auf- oder Abwertungsdruck bei unterschiedlichen Inflationsraten gefragt wird.</p>
      `),
      section('Grenzen und typische Abweichungen', `
        <p>Nicht handelbare Güter, Transportkosten, Marktmacht und Produktivitätsunterschiede verhindern, dass PPP kurzfristig exakt gilt. Der Big-Mac-Index ist nützlich, aber kein vollwertiger Fehlbewertungsbeweis.</p>
        ${warn('Absolute vs. relative PPP', 'Absolute PPP ist ein Niveauvergleich, relative PPP eine Aussage über Inflationsdifferenzen. Beide dürfen in Aufgaben nicht vermischt werden.')}
        ${warn('Big-Mac nicht überdeuten', 'Wenn lokale Löhne, Mieten oder Steuern stark differieren, kann der Big-Mac-Index vom Marktkurs abweichen, ohne dass der Kurs "falsch" sein muss.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Absolute PPP', eq: String.raw`$$E_{PPP} = \frac{P^*}{P}$$`, desc: 'PPP-Kurs aus Preisniveaus', variables: { 'P': 'Preisniveau Inland', 'P^*': 'Preisniveau Ausland' } },
      { label: 'Relative PPP', eq: String.raw`$$\hat E \approx \pi^* - \pi$$`, desc: 'Änderungsratenform', variables: { '\\pi': 'Inflation Inland', '\\pi^*': 'Inflation Ausland' } }
    ],
    aufgaben: practice('kaufkraftparitaet', [
      {
        text: String.raw`Die Inflation im Inland beträgt 6%, im Ausland 2%. Welche nominale Wechselkursänderung ist nach relativer PPP zu erwarten? Wie lautet das Vorzeichen in Mengennotierung?`,
        steps: [
          { text: 'Nutze die Änderungsratenform der relativen PPP.', eq: String.raw`$$\hat E \approx \pi^* - \pi$$` },
          { text: 'Setze die Werte ein.', eq: String.raw`$$\hat E \approx 2\% - 6\% = -4\%$$` },
          { text: 'Ein negatives Vorzeichen bedeutet in Mengennotierung nominale Abwertung des Inlands.', eq: null }
        ],
        result: 'Der nominale Wechselkurs sinkt um etwa 4%; das Inland wertet nominal ab.'
      }
    ])
  },

  zinsparitaet: {
    motivation: 'Die ungedeckte Zinsparität ist die Arbitragegleichung der offenen Makro. Sie verknüpft Zinsdifferenzen, Wechselkurserwartungen und die unmittelbare Kursreaktion.',
    theorie: [
      section('Exakte UIP', `
        <p>Bei perfekter Kapitalmobilität müssen erwartete Renditen in In- und Auslandswährung gleich sein. Sonst gäbe es eine risikolose Arbitragemöglichkeit.</p>
        ${math(String.raw`$$1 + i_t = (1 + i_t^*) \frac{E_t}{E_{t+1}^e}$$`)}
        <p>Ein scheinbar hoher Inlandszins ist deshalb kein Geschenk, sondern kompensiert eine erwartete Abwertung oder geringere erwartete Aufwertung.</p>
      `),
      section('Approximation und ökonomische Lesart', `
        <p>Für kleine Zinssätze wird die Beziehung meist linear geschrieben:</p>
        ${math(String.raw`$$i_t - i_t^* \approx - \frac{E_{t+1}^e - E_t}{E_t}$$`)}
        <p>Je höher der Inlandszins relativ zum Ausland, desto stärker muss aus Sicht der Märkte ein künftiger Kursverlust des Inlands eingepreist sein.</p>
      `),
      section('Klausurzugriff', `
        <p>Rechnen Sie UIP-Aufgaben immer in drei Schritten: Erwartungen identifizieren, Arbitragegleichung aufstellen, Vorzeichen in Mengennotierung deuten.</p>
        ${warn('Hoher Zins heißt nicht starke Währung', 'Ein hoher Inlandszins signalisiert bei UIP gerade nicht automatisch Attraktivität, sondern oft erwartete Abwertung.')}
        ${warn('Erwarteter Kurs vs. aktueller Kurs', 'Viele Fehler entstehen, weil $E_t$ und $E_{t+1}^e$ vertauscht werden. Erst sauber notieren, dann umstellen.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Exakte UIP', eq: String.raw`$$1 + i_t = (1 + i_t^*) \frac{E_t}{E_{t+1}^e}$$`, desc: 'Arbitragegleichgewicht', variables: { 'i_t': 'Inlandszins', 'i_t^*': 'Auslandszins', 'E_t': 'Aktueller WK', 'E_{t+1}^e': 'Erwarteter WK' } },
      { label: 'Approximative UIP', eq: String.raw`$$i_t - i_t^* \approx - \frac{E_{t+1}^e - E_t}{E_t}$$`, desc: 'Zinsdifferenz = erwartete Abwertungsrate', variables: {} }
    ],
    aufgaben: practice('zinsparitaet', [
      {
        text: String.raw`Der Auslandszins liegt bei 3%, der Inlandszins bei 6%. Welche Kursbewegung muss der Markt bei geltender UIP ungefähr erwarten?`,
        steps: [
          { text: 'Nutze die approximative UIP.', eq: String.raw`$$i - i^* \approx -\frac{E^e - E}{E}$$` },
          { text: 'Setze die Zinsdifferenz ein.', eq: String.raw`$$6\% - 3\% = 3\%$$` },
          { text: 'Also muss eine erwartete Abwertung des Inlands von rund 3% kompensieren.', eq: null }
        ],
        result: 'Der Markt erwartet ungefähr eine 3%ige Abwertung der Inlandswährung.'
      },
      {
        text: String.raw`Der Inlandszins liegt 2 Prozentpunkte unter dem Auslandszins. Welche Erwartung über den künftigen Wechselkurs folgt aus UIP in Mengennotierung?`,
        steps: [
          { text: 'Nutze die approximative UIP in Vorzeichenlogik.', eq: String.raw`$$i-i^* \approx -\frac{E^e-E}{E}$$` },
          { text: 'Bei $i-i^*<0$ muss die rechte Seite negativ sein, also $(E^e-E)/E>0$.', eq: null },
          { text: 'Das bedeutet: erwartetes $E$ liegt über dem aktuellen $E$.', eq: null }
        ],
        result: 'Es wird eine nominale Aufwertung des Inlands erwartet (in Mengennotierung: $E^e>E$).'
      }
    ])
  },

  offene_is: {
    motivation: 'Der offene Gütermarkt erweitert die geschlossene Makro um Exportnachfrage, Importe und Multiplikatorleckagen. Genau hier beginnt der Übergang von Binnenlogik zu offener Makroökonomie.',
    theorie: [
      section('Nachfrage nach inländischen Gütern', `
        <p>Im offenen Gütermarkt interessiert nicht bloß die Gesamtnachfrage, sondern die Nachfrage nach inländischer Produktion. Exporte kommen hinzu, Importe sind ein Nachfrageleck.</p>
        ${math(String.raw`$$Y = C(Y-T) + I(Y,i) + G + X(Y^*,\varepsilon) - \frac{IM(Y,\varepsilon)}{\varepsilon}$$`)}
        <p>Die offene IS-Kurve ist deshalb flacher oder der Multiplikator kleiner als in der geschlossenen Volkswirtschaft.</p>
      `),
      section('Importleckagen und Multiplikator', `
        <p>Steigt das Einkommen, steigen meist auch die Importe. Ein Teil jeder zusätzlichen Nachfrage läuft damit ins Ausland ab.</p>
        ${math(String.raw`$$m_{offen} = \frac{1}{1 - c_1 - b_1 + q_1}$$`)}
        <p>Je größer die marginale Importquote $q_1$, desto kleiner die inländische Produktionsreaktion auf Fiskalimpulse.</p>
      `),
      section('Ökonomische Interpretation', `
        <p>Offene Makro heißt deshalb immer Mitdenken der Außenwirkung: Fiskalpolitik steigert oft die Produktion, aber gleichzeitig verschlechtert höheres Einkommen die Handelsbilanz.</p>
        ${warn('DD ist nicht ZZ', 'Die Inlandsnachfragekurve DD und die Nachfrage nach inländischen Gütern ZZ sind nicht identisch. ZZ berücksichtigt Nettoexporte und liegt deshalb flacher.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Offenes Gütermarktgleichgewicht', eq: String.raw`$$Y = C + I + G + NX$$`, desc: 'Gleichgewicht der Nachfrage nach inländischen Gütern', variables: { 'NX': 'Nettoexporte' } },
      { label: 'Offener Multiplikator', eq: String.raw`$$\frac{\partial Y}{\partial G} = \frac{1}{1 - c_1 - b_1 + q_1}$$`, desc: 'Importe dämpfen die Multiplikatorwirkung', variables: { 'q_1': 'Marginale Importquote' } }
    ],
    aufgaben: practice('offene_is')
  },

  nettoexporte: {
    motivation: 'Nettoexporte sind das Gelenk zwischen Wechselkurs, Auslandskonjunktur und inländischer Nachfrage. Genau über sie laufen viele offene Schocks in Output und Beschäftigung hinein.',
    theorie: [
      section('Determinanten der Nettoexporte', `
        <p>Nettoexporte steigen typischerweise mit der Auslandsnachfrage, sinken mit dem Inlandseinkommen und reagieren auf den realen Wechselkurs.</p>
        ${math(String.raw`$$NX = X(Y^*, \varepsilon) - \frac{IM(Y,\varepsilon)}{\varepsilon}$$`)}
        <p>Eine reale Abwertung macht Inlandsgüter billiger und wirkt damit exportfördernd sowie importdämpfend.</p>
      `),
      section('Transmissionskette', `
        <p>In der offenen Makro laufen viele Politik- und Finanzmarkteffekte über den Wechselkurskanal: $i \\rightarrow E \\rightarrow \\varepsilon \\rightarrow NX \\rightarrow Y$.</p>
        <p>Deshalb muss in Regimefragen stets geklärt werden, ob der Wechselkurs reagieren darf oder politisch fixiert wird.</p>
      `),
      section('Klausurzugriff', `
        <p>Fragen nach Nettoexporten sind selten nur Rechenaufgaben. Meist wird eine Richtungskette verlangt: Welcher Schock trifft welche Größe zuerst und wie wirkt das auf NX?</p>
        ${warn('Y und Y* nicht verwechseln', 'Inlandseinkommen erhöht meist die Importe und drückt NX. Auslandsnachfrage erhöht Exporte und stärkt NX. Die Vorzeichen sind daher gegensätzlich.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Nettoexportfunktion', eq: String.raw`$$NX = X(Y^*,\varepsilon) - \frac{IM(Y,\varepsilon)}{\varepsilon}$$`, desc: 'Gütermarktkanal der offenen Volkswirtschaft', variables: { 'Y': 'Inlandseinkommen', 'Y^*': 'Auslandseinkommen', '\\varepsilon': 'Realer WK' } }
    ],
    aufgaben: practice('nettoexporte', [
      {
        text: String.raw`Das Ausland gerät in eine Rezession, während der reale Wechselkurs unverändert bleibt. Welche Richtung hat der Effekt auf Nettoexporte und inländische Produktion?`,
        steps: [
          { text: 'Eine Auslandsrezession senkt $Y^*$ und damit die Exportnachfrage.', eq: null },
          { text: 'Sinkende Exporte verschieben die NX-Funktion nach unten.', eq: null },
          { text: 'Im offenen Gütermarkt sinken dadurch Nachfrage nach inländischen Gütern und Output.', eq: null }
        ],
        result: 'Nettoexporte sinken; der offene Gütermarkt wird nach unten gezogen und die Produktion fällt.'
      }
    ])
  },

  marshall_lerner: {
    motivation: 'Eine Abwertung verbessert die Handelsbilanz nicht automatisch. Marshall-Lerner und J-Kurve trennen sauber zwischen langfristigen Elastizitätseffekten und kurzfristigen Vertragseffekten.',
    theorie: [
      section('Langfristbedingung', `
        <p>Die Marshall-Lerner-Bedingung beschreibt, wann eine reale Abwertung die Handelsbilanz verbessert: Die Mengenreaktionen müssen den negativen Preiseffekt überwiegen.</p>
        ${math(String.raw`$$|\eta_X| + |\eta_M| > 1$$`)}
        <p>Ökonomisch heißt das: Exporte und Importe müssen stark genug auf relative Preisänderungen reagieren.</p>
      `),
      section('J-Kurve', `
        <p>Kurzfristig sind Mengen oft träge. Dann wird zuerst nur die bestehende Importrechnung teurer, bevor Mengen angepasst werden. Genau daraus entsteht die J-Kurve.</p>
        ${math(String.raw`$$\frac{\partial NX}{\partial \varepsilon} < 0$$`)}
        <p>In Mengennotierung bedeutet eine Abwertung ein Sinken von $\\varepsilon$; wenn Marshall-Lerner gilt, steigt dann $NX$.</p>
      `),
      section('Fehleranalyse', `
        ${warn('Langfristig vs. kurzfristig', 'Marshall-Lerner ist eine Langfristaussage über Elastizitäten. Für die unmittelbare Wirkung nach einer Abwertung muss zuerst an die J-Kurve gedacht werden.')}
        ${warn('Vorzeichen in Mengennotierung', 'In der hier verwendeten Notation ist eine Abwertung ein Rückgang von $\\varepsilon$. Wer das übersieht, interpretiert Ableitungen schnell falsch.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Marshall-Lerner-Bedingung', eq: String.raw`$$|\eta_X| + |\eta_M| > 1$$`, desc: 'Langfristige Verbesserung der Handelsbilanz nach Abwertung', variables: { '\\eta_X': 'Preiselastizität der Exporte', '\\eta_M': 'Preiselastizität der Importe' } },
      { label: 'Richtungseffekt', eq: String.raw`$$\frac{\partial NX}{\partial \varepsilon} < 0$$`, desc: 'Bei Mengennotierung verbessert fallendes $\\varepsilon$ die Handelsbilanz', variables: {} }
    ],
    aufgaben: practice('marshall_lerner', [
      {
        text: String.raw`Eine Abwertung wurde gerade beschlossen. Die Handelsbilanz verschlechtert sich zunächst, verbessert sich aber später. Wie lautet die saubere Diagnose?`,
        steps: [
          { text: 'Kurzfristig sind Mengen oft träge, Preiseffekte dominieren.', eq: null },
          { text: 'Dadurch kann die Importrechnung zunächst steigen und NX vorübergehend sinken.', eq: null },
          { text: 'Mit Zeitverzug greifen Mengenanpassungen; bei erfüllter Marshall-Lerner-Bedingung verbessert sich die Handelsbilanz.', eq: null }
        ],
        result: 'Das ist die J-Kurve: kurzfristig Verschlechterung, langfristig Verbesserung unter ausreichender Elastizitätsreaktion.'
      },
      {
        text: String.raw`Graph-/Formel-Link: Wie verbindest du die J-Kurve im Zeitdiagramm mit der Elastizitätsbedingung $|\eta_X|+|\eta_M|>1$ in einer schlüssigen Klausurkette?`,
        steps: [
          { text: 'Kurzfristig dominieren Preis- und Vertragsbindungen; der Zeitpfad kann zunächst nach unten gehen.', eq: null },
          { text: 'Mit Verzögerung reagieren Export- und Importmengen stärker auf relative Preise.', eq: null },
          { text: 'Wenn die Elastizitätssumme hinreichend groß ist, überwiegt langfristig der Mengeneffekt.', eq: String.raw`$$|\eta_X|+|\eta_M|>1$$` }
        ],
        result: 'Prüfungsstark ist die Verbindung von Zeitpfad (Graph) und Kriterium (Formel), statt beide isoliert aufzuzählen.'
      }
    ])
  },

  geldmengen: {
    motivation: 'Auch in Makro II bleibt der Geldmarkt zentral: Wechselkurse, UIP und Taylor-Regel setzen voraus, dass Zinssteuerung und LM-Logik sicher beherrscht werden.',
    theorie: [
      section('Geldmarktgleichgewicht', `
        <p>Die reale Geldnachfrage steigt mit Einkommen und sinkt mit dem Zinssatz. Das Gleichgewicht am Geldmarkt verknüpft reale Geldmenge, Aktivität und Zins.</p>
        ${math(String.raw`$$\frac{M}{P} = Y \cdot L(i)$$`)}
        <p>In der linearen Standardform ergibt sich daraus eine positiv geneigte LM-Kurve: Höheres Einkommen erzeugt mehr Transaktionsnachfrage und damit ceteris paribus höheren Zins.</p>
      `),
      section('Geldpolitik und offener Zusammenhang', `
        <p>Eine expansive Geldpolitik verschiebt die LM-Kurve nach rechts bzw. unten. In der offenen Volkswirtschaft wird daraus über UIP und Wechselkurs ein zusätzlicher Außenkanal.</p>
        ${math(String.raw`$$i = \frac{k}{h}Y - \frac{1}{h}\frac{M}{P}$$`)}
      `),
      section('Klausurzugriff', `
        <p>Aufgaben fragen oft nicht nur nach der Richtung der LM-Verschiebung, sondern nach der kombinierten Reaktion von Zins, Wechselkurs und Output.</p>
        ${warn('Nominal ist nicht real', 'Maßgeblich ist die reale Geldmenge $M/P$. Eine steigende Preisstufe kann die reale Geldmenge trotz konstantem $M$ verknappen.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Geldmarktgleichgewicht', eq: String.raw`$$\frac{M}{P} = Y \cdot L(i)$$`, desc: 'Reale Geldmenge = reale Geldnachfrage', variables: { 'M/P': 'Reale Geldmenge', 'L(i)': 'Liquiditätspräferenz' } },
      { label: 'Lineare LM', eq: String.raw`$$i = \frac{k}{h}Y - \frac{1}{h}\frac{M}{P}$$`, desc: 'Zins als Funktion von Einkommen und realer Geldmenge', variables: { 'k': 'Einkommenssensitivität', 'h': 'Zinssensitivität' } }
    ],
    aufgaben: practice('geldmengen')
  },

  mundell_fleming: {
    motivation: 'Mundell-Fleming ist das Standardmodell der kleinen offenen Volkswirtschaft. Es zeigt, warum das gleiche Politiktool unter flexiblem und festem Wechselkurs völlig unterschiedlich wirkt.',
    theorie: [
      section('Drei Märkte in einem System', `
        <p>Das Modell verbindet offenen Gütermarkt, Geldmarkt und Außenbeziehung. Für flexible Wechselkurse ist vor allem die Kombination aus IS, LM und UIP zentral.</p>
        ${math(String.raw`$$Y = C + I + G + NX(\varepsilon, Y, Y^*)$$`)}
        ${math(String.raw`$$\frac{M}{P} = YL(i)$$`)}
        ${math(String.raw`$$1+i = (1+i^*)\frac{E}{E^e}$$`)}
      `),
      section('Flexible Wechselkurse', `
        <p>Bei flexiblem Wechselkurs ist Geldpolitik stark: Eine Zinssenkung löst Abwertung aus, verbessert Nettoexporte und stabilisiert den Gütermarkt. Fiskalpolitik verpufft stärker, weil höhere Zinsen Aufwertungsdruck erzeugen.</p>
      `),
      section('Klausurzugriff', `
        <p>Fragen zu Mundell-Fleming sind fast immer Regimefragen. Nennen Sie zuerst das Wechselkursregime, dann den Finanzmarktkanal, dann die Gütermarktfolge.</p>
        ${warn('Nicht mit geschlossener IS-LM verwechseln', 'In der offenen Volkswirtschaft kann derselbe Fiskal- oder Geldimpuls über den Wechselkurs zusätzliche Gegen- oder Verstärkungseffekte auslösen.')}
      `)
    ].join(''),
    formeln: [
      { label: 'IS in offener VW', eq: String.raw`$$Y = C + I + G + NX(\varepsilon, Y, Y^*)$$`, desc: 'Gütermarkt mit Außenbeziehung', variables: {} },
      { label: 'UIP-Kanal', eq: String.raw`$$1+i = (1+i^*)\frac{E}{E^e}$$`, desc: 'Finanzmarktscharnier des Modells', variables: {} }
    ],
    aufgaben: practice('mundell_fleming', [
      {
        text: String.raw`Vergleiche dieselbe Fiskalexpansion unter flexiblem und festem Wechselkurs bei hoher Kapitalmobilität. Wo ist der Outputeffekt typischerweise größer und warum?`,
        steps: [
          { text: 'Flexibler Kurs: Fiskalimpuls erzeugt Aufwertungsdruck, NX werden teilweise verdrängt.', eq: null },
          { text: 'Fester Kurs: Zentralbank akkommodiert zur Paritätsstabilisierung, Aufwertungskanal entfällt.', eq: null },
          { text: 'Damit ist der Outputeffekt unter fixem Kurs typischerweise größer.', eq: null }
        ],
        result: 'Bei fixem Wechselkurs wirkt Fiskalpolitik stärker; bei flexiblem Wechselkurs wird sie über Aufwertung und NX-Dämpfung teilweise neutralisiert.'
      },
      {
        text: String.raw`Before/After-Graphwalk: Expansive Fiskalpolitik unter flexiblem Wechselkurs. Welche dreiteilige Schockkette muss die Diagrammlösung enthalten?`,
        steps: [
          { text: 'Schritt 1: Gütermarktimpuls (IS nach rechts).', eq: null },
          { text: 'Schritt 2: Finanz-/Wechselkursreaktion (Aufwertungsdruck).', eq: null },
          { text: 'Schritt 3: Außenkanal (NX-Dämpfung, partieller Rücklauf des Erstimpulses).', eq: null }
        ],
        result: 'Die M-F-Antwort ist nur vollständig, wenn Erstimpuls und Gegenkanal explizit im Vorher/Nachher-Pfad stehen.'
      }
    ])
  },

  wk_regime: {
    motivation: 'Feste Wechselkurse, autonome Geldpolitik und freier Kapitalverkehr sind nicht gleichzeitig zu haben. Genau dieser Zielkonflikt wird im Kurs über Trilemma und Paritätsverteidigung analysiert.',
    theorie: [
      section('Trilemma der offenen Volkswirtschaft', `
        <p>Ein Land kann höchstens zwei der drei Ziele gleichzeitig wählen: festen Wechselkurs, freien Kapitalverkehr, autonome Geldpolitik.</p>
        <p>Fixe Paritäten kaufen Wechselkursstabilität, verlangen aber meistens den Verzicht auf geldpolitische Autonomie.</p>
      `),
      section('Paritätsverteidigung', `
        <p>Wird eine Abwertung erwartet, muss die Zentralbank den inländischen Zins anheben oder Reserven einsetzen, um den Kurs zu verteidigen. Bei unglaubwürdiger Parität kann das sehr schnell teuer werden.</p>
        ${math(String.raw`$$i - i^* \approx \mathbb{E}\left[\frac{\Delta E}{E}\right]$$`)}
      `),
      section('Fehleranalyse', `
        ${warn('Fester Kurs heißt nicht spannungsfrei', 'Gerade bei glaubwürdigkeitsschwachen Regimen kann ein fixer Wechselkurs den Anpassungsdruck erhöhen, statt ihn verschwinden zu lassen.')}
        ${warn('Trilemma ist keine Meinung', 'Das Trilemma ist eine Restriktion. Wer drei Ziele gleichzeitig behauptet, muss zeigen, welche der Voraussetzungen tatsächlich verletzt ist.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Trilemma-Logik', eq: String.raw`$$\text{fixer WK} + \text{freie Kapitalmobilität} \Rightarrow \text{keine autonome Geldpolitik}$$`, desc: 'Politische Restriktion der offenen Makro', variables: {} }
    ],
    aufgaben: practice('wk_regime', [
      {
        text: String.raw`Ein Land möchte den Wechselkurs fest halten und gleichzeitig eine expansive Geldpolitik fahren, obwohl Kapital frei mobil ist. Was sagt das Trilemma?`,
        steps: [
          { text: 'Beim festen Wechselkurs bindet der Finanzmarkt den inländischen Zins an das Weltzinsniveau.', eq: null },
          { text: 'Eine autonome Geldmengenausweitung wäre ohne Kursanpassung oder Kapitalkontrollen nicht dauerhaft haltbar.', eq: null },
          { text: 'Also kann das Land nicht alle drei Ziele gleichzeitig erreichen.', eq: null }
        ],
        result: 'Das Trilemma verbietet diese Kombination: Bei fixem Kurs und freiem Kapitalverkehr ist keine autonome Geldpolitik möglich.'
      },
      {
        text: String.raw`Ein Land verteidigt einen fixen Kurs trotz anhaltender Abwertungserwartungen. Welche zwei unmittelbaren Verteidigungskanäle hat die Zentralbank und welcher Binneneffekt folgt häufig?`,
        steps: [
          { text: 'Kanal 1: Devisenreserven einsetzen, um den Kurs direkt zu stützen.', eq: null },
          { text: 'Kanal 2: Zinsen anheben, um Kapitalabfluss zu dämpfen und Inlandsanlage attraktiver zu machen.', eq: null },
          { text: 'Höhere Zinsen belasten typischerweise Binnennachfrage und Konjunktur.', eq: null }
        ],
        result: 'Paritätsverteidigung läuft über Reserven und/oder Zinsanhebung; der häufige Preis ist eine konjunkturelle Abschwächung.'
      },
      {
        text: String.raw`Regimevergleich als Grafikfalle: Gleicher externer Schock unter flexiblem und festem Wechselkurs. Welche zentrale Visualisierungsdifferenz muss genannt werden?`,
        steps: [
          { text: 'Flexibles Regime: Teil der Anpassung läuft über den Wechselkurs (Stoßdämpfer).', eq: null },
          { text: 'Fixes Regime: Kurs bleibt gebunden, Anpassungslast verlagert sich stärker auf Binnenvariablen.', eq: null },
          { text: 'Gleicher Schock heißt daher nicht gleicher Anpassungspfad.', eq: null }
        ],
        result: 'Exam-Logik: nicht nur Schockrichtung, sondern die je Regime unterschiedliche Anpassungsvariable benennen.'
      }
    ])
  },

  wk_krisen: {
    motivation: 'Währungskrisen sind der Stresstest fixer Regime. Im Kurs werden sie über Currency Boards, Glaubwürdigkeit und Krisendynamik analysiert, nicht nur als historische Anekdoten.',
    theorie: [
      section('Currency Boards und harte Paritäten', `
        <p>Ein Currency Board bindet die Geldbasis hart an Reserven. Das erhöht Glaubwürdigkeit stärker als ein gewöhnlicher Peg, macht Anpassung aber auch rigider.</p>
      `),
      section('Krisenmechanik', `
        <p>Verliert ein Regime Glaubwürdigkeit, steigen erwartete Abwertung und Verteidigungszins. Das verschlechtert Binnenkonjunktur und Bankenlage und kann die Krise selbst verstärken.</p>
        <p>Im Unterricht dient Argentinien als Leitfall: nominale Stabilität, reale Aufwertung, Rezession, Vertrauensverlust.</p>
      `),
      section('Prüfungslogik', `
        ${warn('Nicht nur Reserven zählen', 'Währungskrisen hängen nicht nur von Devisenreserven ab. Erwartungsbildung, reale Überbewertung, Bankenschwäche und politische Kosten der Verteidigung sind ebenso wichtig.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Erwartete Abwertung und Zinsaufschlag', eq: String.raw`$$i - i^* \approx \mathbb{E}\left[\frac{\Delta E}{E}\right]$$`, desc: 'Je unglaubwürdiger die Parität, desto höher der notwendige Zinsaufschlag', variables: {} }
    ],
    aufgaben: practice('wk_krisen')
  },

  phillipskurve: {
    motivation: 'Die Phillipskurve verbindet Inflation, Erwartungen und Arbeitslosigkeit. Sie ist das Bindeglied zwischen Konjunktur, Disinflation und den Anreizproblemen der Geldpolitik.',
    theorie: [
      section('Erwartungsaugmentierte Phillipskurve', `
        <p>Kurzfristig hängt die Inflation davon ab, wie stark die Arbeitslosigkeit von ihrem natürlichen Niveau abweicht und welche Inflation die Akteure bereits erwarten.</p>
        ${math(String.raw`$$\pi_t = \pi_t^e - \alpha (u_t - u_n)$$`)}
        <p>Liegt die Arbeitslosigkeit unter $u_n$, entsteht positiver Inflationsdruck; liegt sie darüber, dämpft das die Preisentwicklung.</p>
      `),
      section('Kurzfristig vs. langfristig', `
        <p>Kurzfristig gibt es einen Trade-off. Langfristig ziehen Erwartungen nach; deshalb ist die langfristige Phillipskurve vertikal bei $u=u_n$.</p>
        <p>Diese Trennung ist zentral für Zeitinkonsistenz, Inflationsbias und Opferquoten bei Disinflation.</p>
      `),
      section('Fehleranalyse', `
        ${warn('Keine dauerhafte Tauschbeziehung', 'Die Phillipskurve ist kein Menü, mit dem Politik dauerhaft weniger Arbeitslosigkeit gegen etwas mehr Inflation kaufen könnte. Langfristig verschwimmt der Trade-off.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Erwartungsaugmentierte Phillipskurve', eq: String.raw`$$\pi_t = \pi_t^e - \alpha (u_t - u_n)$$`, desc: 'Inflation, Erwartungen und Auslastung', variables: { 'u_n': 'Natürliche Arbeitslosigkeit', '\\alpha': 'Steigung' } }
    ],
    aufgaben: practice('phillipskurve', [
      {
        text: String.raw`Die erwartete Inflation liegt bei 2%, die natürliche Arbeitslosigkeit bei 5%, die Steigung bei $\alpha=0{,}8$. Wie hoch ist die Inflation bei einer Arbeitslosigkeit von 4%?`,
        steps: [
          { text: 'Nutze die Phillipskurve.', eq: String.raw`$$\pi = \pi^e - \alpha(u-u_n)$$` },
          { text: 'Setze die Werte ein.', eq: String.raw`$$\pi = 2 - 0{,}8(4-5) = 2 + 0{,}8 = 2{,}8$$` },
          { text: 'Unter natürlicher Arbeitslosigkeit liegt die Inflation über den Erwartungen.', eq: null }
        ],
        result: 'Die Inflation beträgt 2,8%.'
      }
    ])
  },

  zeitinkonsistenz: {
    motivation: 'Zeitinkonsistenz erklärt, warum eine ex ante vernünftige Geldpolitik ex post an Glaubwürdigkeit verliert. Ohne Bindung wächst der Anreiz zur Überraschungsinflation.',
    theorie: [
      section('Commitment vs. Diskretion', `
        <p>Ex ante möchte die Zentralbank niedrige Inflation versprechen. Ex post hat sie aber einen Anreiz, über Überraschungsinflation die Arbeitslosigkeit unter ihr natürliches Niveau zu drücken.</p>
        <p>Genau diese Differenz zwischen angekündigtem Plan und später optimal erscheinender Handlung heißt Zeitinkonsistenz.</p>
      `),
      section('Rolle der Erwartungen', `
        <p>Je rationaler die privaten Erwartungen, desto schneller wird der Inflationsanreiz antizipiert. Dann bleibt am Ende höhere Inflation ohne dauerhaften Beschäftigungsgewinn.</p>
      `),
      section('Lösungen', `
        <p>Regelbindung, unabhängige Zentralbanken, Reputation und klare Ziele sind institutionelle Antworten auf das Zeitinkonsistenzproblem.</p>
        ${warn('Nicht mit Fehlentscheidung verwechseln', 'Zeitinkonsistenz bedeutet nicht, dass Politik "irrational" ist, sondern dass sich der Anreiz zwischen Ankündigungs- und Entscheidungszeitpunkt ändert.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Phillips-Anreiz', eq: String.raw`$$u = u_n - \alpha(\pi - \pi^e)$$`, desc: 'Überraschungsinflation wirkt nur über Erwartungen', variables: {} }
    ],
    aufgaben: [
      {
        text: 'Erkläre in drei Schritten, warum diskretionäre Geldpolitik ohne Commitment zu einem Inflationsbias führen kann.',
        steps: [
          { text: 'Die Zentralbank möchte Arbeitslosigkeit unter das natürliche Niveau drücken und hat deshalb ex post einen Inflationsanreiz.', eq: null },
          { text: 'Private Akteure antizipieren diesen Anreiz und setzen ihre Inflationserwartungen höher.', eq: null },
          { text: 'Am Ende entsteht mehr Inflation, aber die Arbeitslosigkeit bleibt langfristig beim natürlichen Niveau.', eq: null }
        ],
        result: 'Diskretion ohne Commitment erzeugt einen Inflationsbias: höhere Inflation ohne dauerhaften Beschäftigungsgewinn.'
      }
    ]
  },

  barro_gordon: {
    motivation: 'Das Barro-Gordon-Modell formalisiert Zeitinkonsistenz. Es ist der Prüfungsfall, in dem Verlustfunktion, Phillipskurve und rationale Erwartungen sauber zusammengeführt werden.',
    theorie: [
      section('Modellbausteine', `
        <p>Barro-Gordon kombiniert eine Zentralbank-Verlustfunktion mit der erwartungsaugmentierten Phillipskurve. So wird der Zielkonflikt zwischen Preisstabilität und Auslastungswunsch formal greifbar.</p>
        ${math(String.raw`$$L = \frac{1}{2}\chi \pi^2 + \frac{1}{2}\lambda (u-u^*)^2$$`)}
        ${math(String.raw`$$u = u_n - \alpha(\pi - \pi^e)$$`)}
      `),
      section('Diskretionärer Bias', `
        <p>Unter Diskretion setzt die Zentralbank einen positiven Inflationsanreiz, solange sie $u^* < u_n$ anstrebt. Mit rationalen Erwartungen landet die Wirtschaft dann bei positiver Inflation, aber wieder bei natürlicher Arbeitslosigkeit.</p>
        ${math(String.raw`$$\pi^{D} = \frac{\alpha \lambda}{\chi}(u_n-u^*)$$`)}
      `),
      section('Regeln und konservative Zentralbank', `
        <p>Regelbindung eliminiert den Bias. Ein konservativer Zentralbanker reduziert ihn, weil Inflation in der Verlustfunktion stärker gewichtet wird.</p>
        ${warn('Beschäftigungseffekt nicht doppelt zählen', 'Im diskretionären Gleichgewicht ist die Überraschungsinflation antizipiert. Deshalb gibt es keinen dauerhaften Beschäftigungsgewinn, obwohl die Inflation höher ist.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Verlustfunktion', eq: String.raw`$$L = \frac{1}{2}\chi \pi^2 + \frac{1}{2}\lambda (u-u^*)^2$$`, desc: 'Präferenzstruktur der Zentralbank', variables: { '\\chi': 'Inflationsgewicht', '\\lambda': 'Arbeitslosigkeitsgewicht' } },
      { label: 'Inflationsbias', eq: String.raw`$$\pi^{D} = \frac{\alpha \lambda}{\chi}(u_n-u^*)$$`, desc: 'Diskretionäres Gleichgewicht unter rationalen Erwartungen', variables: {} }
    ],
    aufgaben: practice('barro_gordon')
  },

  taylor_regel: {
    motivation: 'Die Taylor-Regel übersetzt geldpolitische Reaktion in eine einfache, klausurfeste Leitzinsregel. Sie verknüpft Inflationsziel, Outputlücke und Realzinslogik.',
    theorie: [
      section('Regelform', `
        <p>Die Taylor-Regel beschreibt, wie der Leitzins auf Inflation und reale Über- bzw. Unterauslastung reagieren soll.</p>
        ${math(String.raw`$$i_t = r^* + \pi_t + a(\pi_t-\pi^*) + b(y_t-y_n)$$`)}
        <p>Sie ist keine rein mechanische Wahrheit, aber ein sehr gutes Prüfungswerkzeug für stabilitätsorientierte Geldpolitik.</p>
      `),
      section('Taylor-Prinzip', `
        <p>Auf Inflation muss der Nominalzins mehr als eins zu eins reagieren, damit auch der Realzins steigt und die Nachfrage tatsächlich gebremst wird.</p>
        <p>Genau diese Forderung heißt Taylor-Prinzip.</p>
      `),
      section('Politische Deutung', `
        <p>In Aufgaben mit Arbeitslosigkeits- oder Outputlücke entscheidet die Regel darüber, ob die Zentralbank trotz zielgenauer Inflation lockern oder straffen sollte.</p>
        ${warn('Nominalzins reicht nicht', 'Nicht die Höhe des Nominalzinses an sich stabilisiert, sondern die Reaktion des Realzinses relativ zur Inflation.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Taylor-Regel', eq: String.raw`$$i_t = r^* + \pi_t + a(\pi_t-\pi^*) + b(y_t-y_n)$$`, desc: 'Reaktionsfunktion der Geldpolitik', variables: { 'r^*': 'Natürlicher Realzins', '\\pi^*': 'Inflationsziel' } }
    ],
    aufgaben: practice('taylor_regel')
  },

  aggregierte_pf: {
    motivation: 'Bevor das Solow-Modell gerechnet wird, muss die Produktionsseite sitzen: Grenzerträge, Skalenerträge und Pro-Kopf-Formen sind die formale Grundlage aller späteren Wachstumsaussagen.',
    theorie: [
      section('Aggregierte Produktionsfunktion', `
        <p>Die gesamtwirtschaftliche Produktionsfunktion verknüpft Kapital, Arbeit und Produktivität. Für Makro II ist die Cobb-Douglas-Form der Standardfall.</p>
        ${math(String.raw`$$Y = A K^{\alpha} N^{1-\alpha}$$`)}
      `),
      section('Grenzerträge und Skalenerträge', `
        <p>Jeder einzelne Faktor unterliegt typischerweise abnehmenden Grenzerträgen. Gleichzeitig kann die Funktion konstante Skalenerträge haben, wenn sich die Exponenten zu eins addieren.</p>
        ${math(String.raw`$$MP_K = \frac{\partial Y}{\partial K}, \qquad MP_N = \frac{\partial Y}{\partial N}$$`)}
        ${math(String.raw`$$f(\lambda K,\lambda N)=\lambda f(K,N)\quad \text{bei CRS}$$`)}
      `),
      section('Pro-Kopf-Form', `
        <p>Für Wachstum wird die Funktion in intensive Form überführt. Das erlaubt die Analyse von Kapitalintensität und Produktion pro Kopf.</p>
        ${math(String.raw`$$y = \frac{Y}{N} = A k^{\alpha}, \qquad k = \frac{K}{N}$$`)}
        ${warn('CRS ist nicht steigender Grenzertrag', 'Konstante Skalenerträge bedeuten nur, dass alle Inputs gemeinsam proportional vergrößert werden können. Einzelne Grenzerträge können trotzdem abnehmen.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Cobb-Douglas', eq: String.raw`$$Y = A K^{\alpha} N^{1-\alpha}$$`, desc: 'Standardfunktion des Solow-Modells', variables: { 'A': 'Produktivität', '\\alpha': 'Kapitalelastizität' } },
      { label: 'Pro-Kopf-Form', eq: String.raw`$$y = A k^{\alpha}$$`, desc: 'Intensive Form bei konstanten Skalenerträgen', variables: {} }
    ],
    aufgaben: practice('aggregierte_pf')
  },

  solow_basis: {
    motivation: 'Das Solow-Grundmodell erklärt, wie Sparen, Abschreibung und Kapitalintensität langfristiges Niveauwachstum bestimmen. Es trennt sauber zwischen Niveaueffekten und dauerhaften Wachstumsraten.',
    theorie: [
      section('Akkumulationsgleichung', `
        <p>Im Grundmodell ohne technischen Fortschritt und ohne Bevölkerungswachstum wird Kapital pro Kopf durch Ersparnis aufgebaut und durch Abschreibung abgebaut.</p>
        ${math(String.raw`$$\dot k = s f(k) - \delta k$$`)}
      `),
      section('Steady State', `
        <p>Im Steady State kompensiert die Investition genau die Break-even-Investition. Dann bleibt $k$ konstant.</p>
        ${math(String.raw`$$s f(k^*) = \delta k^*$$`)}
        <p>Eine höhere Sparquote hebt das langfristige Niveau von $k$ und $y$, aber nicht die dauerhafte Wachstumsrate pro Kopf.</p>
      `),
      section('Konvergenzlogik', `
        <p>Liegt die Wirtschaft links vom Steady State, übersteigt Investition die Abschreibung; rechts davon schrumpft die Kapitalintensität.</p>
        ${warn('Mehr Sparen heißt nicht mehr Wachstum für immer', 'Im Solow-Grundmodell hebt mehr Sparen nur das Niveau. Dauerhaftes Pro-Kopf-Wachstum braucht technischen Fortschritt.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Kapitaldynamik', eq: String.raw`$$\dot k = s f(k) - \delta k$$`, desc: 'Akkumulation im Grundmodell', variables: { 's': 'Sparquote', '\\delta': 'Abschreibung' } },
      { label: 'Steady-State-Bedingung', eq: String.raw`$$s f(k^*) = \delta k^*$$`, desc: 'Investition = Break-even-Investition', variables: {} }
    ],
    aufgaben: practice('solow_basis')
  },

  tech_fortschritt: {
    motivation: 'Mit technischem Fortschritt wird aus dem Solow-Modell ein dauerhaft wachsendes System. Hier sitzen auch Goldene Regel, Wachstum pro Arbeitseffizienzeinheit und die Trennung von Niveau- und Wachstumswirkungen.',
    theorie: [
      section('Arbeitsvermehrender technischer Fortschritt', `
        <p>Makro II verwendet den Standardfall arbeitsvermehrenden Fortschritts. Dann wird die Produktion pro Arbeitseffizienzeinheit analysiert.</p>
        ${math(String.raw`$$Y = F(K, AN)$$`)}
        ${math(String.raw`$$\dot{\tilde k} = s f(\tilde k) - (n + g_A + \delta)\tilde k$$`)}
      `),
      section('Wachstum im Steady State', `
        <p>Im Steady State pro Arbeitseffizienzeinheit wachsen Output und Konsum pro Kopf mit der Rate des technischen Fortschritts $g_A$.</p>
        <p>Deshalb erzeugt mehr Sparen auch hier vor allem Niveaueffekte, während dauerhafte Pro-Kopf-Wachstumsraten aus Produktivitätsfortschritt stammen.</p>
      `),
      section('Goldene Regel', `
        <p>Die Goldene Regel maximiert den langfristigen Konsum. Für Cobb-Douglas gilt im Standardfall eine besonders einfache Regel.</p>
        ${math(String.raw`$$f'(\tilde k_{gold}) = n + g_A + \delta$$`)}
        ${math(String.raw`$$s_{gold} = \alpha \quad \text{(bei Cobb-Douglas)}$$`)}
        ${warn('Goldene Regel maximiert Konsum, nicht Output', 'Die konsumoptimale Sparquote ist nicht automatisch diejenige mit dem höchsten Output. Entscheidend ist, wie viel Kapitalerhalt dafür aufgewendet werden muss.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Solow mit technischem Fortschritt', eq: String.raw`$$\dot{\tilde k} = s f(\tilde k) - (n + g_A + \delta)\tilde k$$`, desc: 'Kapital pro Arbeitseffizienzeinheit', variables: { 'g_A': 'Technischer Fortschritt', 'n': 'Bevölkerungswachstum' } },
      { label: 'Goldene Regel', eq: String.raw`$$f'(\tilde k_{gold}) = n + g_A + \delta$$`, desc: 'Konsummaximum im langfristigen Gleichgewicht', variables: {} }
    ],
    aufgaben: practice('tech_fortschritt')
  },

  schuldenquote: {
    motivation: 'Am Ende von Makro II laufen Staatsverschuldung, Wachstumsrate, Zinsdifferenz und Geldfinanzierung zusammen. Die Schuldenquote ist deshalb der richtige Prüfungsanker, nicht bloß der absolute Schuldenstand.',
    theorie: [
      section('Periodische Budgetrestriktion des Staates', `
        <p>Neue Schulden entstehen aus alter Schuld, Zinslast und Primärsaldo. Diese Buchhaltung ist der Startpunkt jeder Schuldenfrage.</p>
        ${math(String.raw`$$B_t = (1+r)B_{t-1} + G_t - T_t$$`)}
      `),
      section('Schuldenquotendynamik', `
        <p>Für Makro II zählt die relative Größe zum BIP. Daraus ergibt sich in guter Näherung:</p>
        ${math(String.raw`$$\Delta b \approx (r-g)b - ps$$`)}
        <p>Wenn der Zins über der Wachstumsrate liegt, arbeitet der Schneeballeffekt gegen den Staat. Ein ausreichend hoher Primärüberschuss kann die Quote dennoch stabilisieren.</p>
      `),
      section('Monetarisierung und Politiklogik', `
        <p>Defizite können über Kreditaufnahme oder Geldschöpfung finanziert werden. Monetarisierung vermeidet zunächst den Refinanzierungsmarkt, kann aber Inflationsdruck erzeugen.</p>
        ${warn('Schuld ist nicht gleich Schuldenquote', 'Ein absolut steigender Schuldenstand muss die Schuldenquote nicht erhöhen, wenn das BIP schneller wächst. In Klausuren ist diese Trennung zentral.')}
        ${warn('Primärsaldo sauber lesen', 'Der Primärsaldo ist der Haushaltssaldo ohne Zinszahlungen. Wer ihn mit dem Gesamtsaldo verwechselt, rechnet Schuldenpfade falsch.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Budgetrestriktion', eq: String.raw`$$B_t = (1+r)B_{t-1} + G_t - T_t$$`, desc: 'Dynamik des nominalen Schuldenstands', variables: {} },
      { label: 'Schuldenquotendynamik', eq: String.raw`$$\Delta b \approx (r-g)b - ps$$`, desc: 'Zins-Wachstums-Differenz und Primärsaldo', variables: { 'b': 'Schuldenquote', 'ps': 'Primärsaldo in % des BIP' } }
    ],
    aufgaben: practice('schuldenquote', [
      {
        text: String.raw`Die Schuldenquote beträgt 80% des BIP. Der Realzins liegt bei 4%, das Wachstum bei 1%. Welcher Primärüberschuss stabilisiert die Quote ungefähr?`,
        steps: [
          { text: 'Nutze die Näherungsformel der Schuldenquote.', eq: String.raw`$$\Delta b \approx (r-g)b - ps$$` },
          { text: 'Setze für Stabilität $\Delta b = 0$ und löse nach $ps$ auf.', eq: String.raw`$$ps^* = (0{,}04-0{,}01)\cdot 0{,}80 = 0{,}024$$` },
          { text: 'Interpretiere den Wert als Anteil am BIP.', eq: null }
        ],
        result: 'Ein Primärüberschuss von rund 2,4% des BIP stabilisiert die Schuldenquote.'
      }
    ])
  }
};
