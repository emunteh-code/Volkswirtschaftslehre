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
  { id: 'zp_kurve',         title: 'ZP-Kurve & Zahlungsbilanzgleichgewicht',            cat: 'Offene Volkswirtschaft II', short: 'ZP' },
  { id: 'wirtschaftspolitik_offen', title: 'Wirtschaftspolitik im Mundell-Fleming-Modell', cat: 'Offene Volkswirtschaft II', short: 'WiPo offen' },
  { id: 'wk_regime',        title: 'Feste Wechselkurse, Trilemma & Paritätsverteidigung', cat: 'Offene Volkswirtschaft II', short: 'Regime' },
  { id: 'wk_krisen',        title: 'Currency Boards & Währungskrisen',                  cat: 'Offene Volkswirtschaft II', short: 'Krisen' },
  { id: 'opt_waehrungsraum',title: 'Optimaler Währungsraum & Währungsunion',            cat: 'Offene Volkswirtschaft II', short: 'OWR' },
  { id: 'phillipskurve',    title: 'Phillipskurve & Inflationserwartungen',             cat: 'Geldpolitik & Glaubwürdigkeit', short: 'PK' },
  { id: 'zeitinkonsistenz', title: 'Zeitinkonsistenz & Commitment',                     cat: 'Geldpolitik & Glaubwürdigkeit', short: 'Commit' },
  { id: 'barro_gordon',     title: 'Barro-Gordon & Inflationsbias',                     cat: 'Geldpolitik & Glaubwürdigkeit', short: 'B-G' },
  { id: 'taylor_regel',     title: 'Taylor-Regel & geldpolitische Reaktion',            cat: 'Geldpolitik & Glaubwürdigkeit', short: 'Taylor' },
  { id: 'inflation_targeting', title: 'Inflation Targeting & EZB-Strategie',            cat: 'Geldpolitik & Glaubwürdigkeit', short: 'IT' },
  { id: 'inflation_kosten', title: 'Inflationskosten, Disinflation & Opferquote',       cat: 'Geldpolitik & Glaubwürdigkeit', short: 'Infl.-Kosten' },
  { id: 'wachstum_fakten',  title: 'Stilisierte Fakten des Wachstums',                  cat: 'Wachstum & Fiskalstaat', short: 'Fakten' },
  { id: 'aggregierte_pf',   title: 'Produktionsfunktion, Grenzerträge & Skalenerträge', cat: 'Wachstum & Fiskalstaat', short: 'PF' },
  { id: 'solow_basis',      title: 'Solow-Grundmodell & Kapitalakkumulation',           cat: 'Wachstum & Fiskalstaat', short: 'Solow' },
  { id: 'steady_state',     title: 'Steady State & Konvergenz',                         cat: 'Wachstum & Fiskalstaat', short: 'SS' },
  { id: 'goldene_sparquote',title: 'Goldene Sparquote & Konsummaximum',                 cat: 'Wachstum & Fiskalstaat', short: 'Golden' },
  { id: 'tech_fortschritt', title: 'Technischer Fortschritt & langfristiges Wachstum',  cat: 'Wachstum & Fiskalstaat', short: 'TF' },
  { id: 'budgetrestriktion',title: 'Staatliche Budgetrestriktion & Primärsaldo',        cat: 'Wachstum & Fiskalstaat', short: 'Budget' },
  { id: 'schuldenquote_dynamik', title: 'Schuldenquote & Stabilisierung',               cat: 'Wachstum & Fiskalstaat', short: 'Schuld-D' },
  { id: 'ricardianisch',    title: 'Ricardianische Äquivalenz',                         cat: 'Wachstum & Fiskalstaat', short: 'Ricardo' },
  { id: 'schuldenfinanzierung_monetarisierung', title: 'Schuldenfinanzierung & Monetarisierung', cat: 'Wachstum & Fiskalstaat', short: 'Schuld-M' }
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
    aufgaben: practice('geldmengen', [
      {
        text: String.raw`Inflation-Targeting vs. Geldmengensteuerung: Die Geldmenge wächst kurzfristig stark, gleichzeitig steigt die Geldnachfrage wegen Finanzmarktunsicherheit. Warum ist ein reines Geldmengen-Signal für die aktuelle Inflationsdiagnose dann nur begrenzt aussagekräftig?`,
        steps: [
          { text: 'Die beobachtete Geldmenge ist nur zusammen mit Geldnachfrage und Umlaufgeschwindigkeit interpretierbar.', eq: null },
          { text: 'Steigt die Liquiditätsnachfrage, kann hohe Geldmengenexpansion in Teilen Kassenhaltung statt zusätzliche Güternachfrage spiegeln.', eq: null },
          { text: 'Inflation-Targeting fokussiert deshalb auf das Inflationsziel und die Abweichung von diesem Ziel, nicht auf ein einzelnes Monetäraggregat.', eq: null }
        ],
        result: 'Starkes Geldmengenwachstum allein ist kein sicherer Inflationsbeweis; bei instabiler Geldnachfrage ist zielorientierte Inflationssteuerung robuster.'
      }
    ])
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

  zp_kurve: {
    motivation: 'Die ZP-Kurve ist die fehlende dritte Lesart zwischen IS und LM: Sie zeigt, bei welchen Kombinationen aus Einkommen und Zins die Zahlungsbilanz gerade ausgeglichen ist.',
    theorie: [
      section('Definition im (Y,i)-Raum', `
        <p>Die ZP-Kurve beschreibt alle Kombinationen aus Einkommen und Zinssatz, für die Leistungsbilanz und Kapitalbilanz zusammen gerade null ergeben.</p>
        ${math(String.raw`$$LB(Y,Y^*,\varepsilon) + KB(i-i^*) = 0$$`)}
        <p>Mehr Einkommen verschlechtert typischerweise die Leistungsbilanz über höhere Importe; ein höherer Inlandszins zieht dagegen Kapitalzuflüsse an.</p>
      `),
      section('Warum die ZP-Kurve positiv steigt', `
        <p>Wenn $Y$ steigt, verschlechtert sich ceteris paribus die Außenbilanz. Um trotzdem Zahlungsbilanzgleichgewicht zu halten, muss $i$ steigen und die Kapitalbilanz verbessern.</p>
        <p>Die ZP-Kurve ist deshalb im Standardfall positiv geneigt. Je höher die Kapitalmobilität, desto flacher verläuft sie. Bei perfekter Kapitalmobilität wird sie praktisch horizontal bei $i=i^*$.</p>
      `),
      section('Lage relativ zur Kurve', `
        <p>Oberhalb der ZP-Kurve liegt bei gegebenem Einkommen ein zu hoher Inlandszins vor: Kapitalzuflüsse dominieren und die Zahlungsbilanz weist Überschüsse auf. Unterhalb der Kurve ist $i$ zu niedrig oder $Y$ zu hoch; es entsteht ein Defizit.</p>
        ${warn('ZP ist kein Gütermarkt', 'Die ZP-Kurve sagt nichts über Gütermarktgleichgewicht an sich aus. Sie ordnet nur Außenfinanzierung und Außenungleichgewichte im (Y,i)-Raum.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Zahlungsbilanzgleichgewicht', eq: String.raw`$$LB(Y,Y^*,\varepsilon) + KB(i-i^*) = 0$$`, desc: 'Leistungs- und Kapitalbilanz müssen sich ausgleichen', variables: { 'LB': 'Leistungsbilanzsaldo', 'KB': 'Kapitalbilanzsaldo', 'i^*': 'Weltzins' } },
      { label: 'Perfekte Kapitalmobilität', eq: String.raw`$$i = i^*$$`, desc: 'Im Grenzfall wird die ZP-Kurve horizontal', variables: { 'i': 'Inlandszins', 'i^*': 'Auslandszins / Weltzins' } }
    ],
    aufgaben: [
      {
        text: 'Erkläre, warum die ZP-Kurve im Standardfall positiv geneigt ist.',
        steps: [
          { text: 'Mehr Einkommen erhöht die Importe und verschlechtert damit die Leistungsbilanz.', eq: null },
          { text: 'Um das Außenbilanzgleichgewicht zu halten, muss der Inlandszins steigen und zusätzliche Kapitalzuflüsse anziehen.', eq: null },
          { text: 'Darum gehört zu höherem $Y$ im ZP-Gleichgewicht auch höheres $i$.', eq: null }
        ],
        result: 'Die positive Steigung entsteht aus Importanstieg bei höherem Einkommen und der kompensierenden Kapitalzuflusslogik über höhere Zinsen.'
      },
      {
        text: String.raw`Eine Volkswirtschaft liegt unterhalb der ZP-Kurve. Was sagt das über Zahlungsbilanzsaldo und nötige Anpassungsrichtung von $i$ oder $Y$?`,
        steps: [
          { text: 'Unterhalb der ZP-Kurve ist der Zins für das gegebene Einkommen zu niedrig oder das Einkommen zu hoch.', eq: null },
          { text: 'Die Kapitalbilanz kompensiert die Leistungsbilanz dann nicht ausreichend; es liegt ein Zahlungsbilanzdefizit vor.', eq: null },
          { text: 'Zur Rückkehr auf die ZP-Kurve braucht es ceteris paribus höheren Zins oder niedrigeres Einkommen.', eq: null }
        ],
        result: 'Unterhalb der ZP-Kurve liegt ein Defizit vor; Anpassung läuft über $i\\uparrow$ und/oder $Y\\downarrow$.'
      }
    ]
  },

  wirtschaftspolitik_offen: {
    motivation: 'Die Klausur fragt selten nur nach dem Modell, sondern fast immer nach der Politik im Modell. Diese Seite verdichtet genau diese Regelfälle: welches Instrument wirkt unter welchem Regime und über welchen Kanal.',
    theorie: [
      section('Das Mundell-Fleming-Theorem', `
        <p>Bei hoher bzw. perfekter Kapitalmobilität kippt die Wirksamkeit von Fiskal- und Geldpolitik mit dem Wechselkursregime.</p>
        <p>Unter flexiblem Wechselkurs wirkt Geldpolitik stark über den Wechselkurskanal; Fiskalpolitik wird durch Aufwertung und Nettoexportverluste ausgebremst. Unter festem Wechselkurs ist es gerade umgekehrt.</p>
      `),
      section('Regimevergleich als Schockpfad', `
        <p>Der saubere Klausurpfad lautet: <strong>Regime nennen → Erstimpuls benennen → Finanzmarkt-/Wechselkursreaktion → Nettoexportfolge → Endwirkung auf Y</strong>.</p>
        <p>Diese Reihenfolge verhindert den typischen Fehler, direkt ein Ergebnis zu behaupten, ohne den Gegenkanal mitzudenken.</p>
        ${math(String.raw`$$\text{flexibler WK: } \Delta G \Rightarrow \text{Aufwertung} \Rightarrow NX\downarrow$$`)}
        ${math(String.raw`$$\text{fester WK: } \Delta G \Rightarrow M\uparrow \Rightarrow \text{kein Aufwertungs-Crowding-out}$$`)}
      `),
      section('Politische Lesart unter Prüfungsdruck', `
        ${warn('Regime zuerst', 'Ohne explizite Regimeangabe bleibt jede Politikantwort unvollständig. Dieselbe Maßnahme hat im flexiblen und fixen Regime unterschiedliche Endergebnisse.')}
        ${warn('Nicht bei IS aufhören', 'Im offenen Modell reicht eine IS-Verschiebung nie als komplette Antwort. Erst der Wechselkurs- oder ZB-Kanal macht die Politikbewertung vollständig.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Flexibler Wechselkurs', eq: String.raw`$$\Delta G>0 \Rightarrow \text{partielles oder starkes Crowding-out über } NX$$`, desc: 'Fiskalpolitik trifft auf den Aufwertungskanal', variables: { 'NX': 'Nettoexporte' } },
      { label: 'Fester Wechselkurs', eq: String.raw`$$\Delta G>0 \Rightarrow \Delta M>0 \Rightarrow \Delta Y \text{ stärker}$$`, desc: 'Die Paritätsverteidigung akkommodiert den Fiskalimpuls', variables: {} }
    ],
    aufgaben: [
      {
        text: 'Warum ist Fiskalpolitik unter flexiblem Wechselkurs und hoher Kapitalmobilität typischerweise schwächer als unter festem Wechselkurs?',
        steps: [
          { text: 'Unter flexiblem Wechselkurs erzeugt Fiskalpolitik Aufwertungsdruck.', eq: null },
          { text: 'Die Aufwertung verschlechtert die Nettoexporte und nimmt dem Erstimpuls einen Teil seiner Kraft.', eq: null },
          { text: 'Unter festem Wechselkurs wird dieser Kanal durch Zentralbankintervention blockiert; der Impuls bleibt stärker im Inland wirksam.', eq: null }
        ],
        result: 'Der Unterschied kommt aus dem Wechselkurskanal: flexibel dämpft Aufwertung, fix akkommodiert die Zentralbank.'
      },
      {
        text: 'Formuliere für eine M-F-Klausur die Minimalstruktur einer vollständigen Politikantwort in fünf Prüfschritten.',
        steps: [
          { text: 'Schritt 1: Wechselkursregime nennen.', eq: null },
          { text: 'Schritt 2: Erstimpuls auf IS oder LM benennen.', eq: null },
          { text: 'Schritt 3: Reaktion von Zins bzw. Kapitalflüssen erklären.', eq: null },
          { text: 'Schritt 4: Wechselkurs-/Nettoexportkanal anschließen.', eq: null },
          { text: 'Schritt 5: Endwirkung auf Output, Außenbeitrag und geldpolitische Autonomie festhalten.', eq: null }
        ],
        result: 'Genau diese Fünferstruktur macht offene Makropolitik klausurstabil und verhindert reine Ergebnisbehauptungen.'
      }
    ]
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
      },
      {
        text: String.raw`Paritätsverteidigung unter Stress: Märkte erwarten mit hoher Wahrscheinlichkeit eine Abwertung. Erkläre die Kette von erwarteter Abwertung über den nötigen Zinsaufschlag bis zu den binnenwirtschaftlichen Kosten.`,
        steps: [
          { text: 'Steigende erwartete Abwertung erhöht unter Zinsparität den erforderlichen Inlandszins relativ zum Ausland.', eq: String.raw`$$i-i^* \approx \mathbb{E}\!\left[\frac{\Delta E}{E}\right]$$` },
          { text: 'Zur Kursverteidigung muss die Zentralbank deshalb Zinsen erhöhen und/oder Reserven einsetzen.', eq: null },
          { text: 'Höhere Zinsen dämpfen Investitionen und Nachfrage; die Paritätsverteidigung verschiebt Anpassungslasten auf Output und Beschäftigung.', eq: null }
        ],
        result: 'Je höher die Abwertungserwartung, desto teurer wird die Verteidigung des Fixkurses in Form höherer inländischer Zinsen und realwirtschaftlicher Dämpfung.'
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

  opt_waehrungsraum: {
    motivation: 'Der optimale Währungsraum beantwortet die Klausurfrage hinter jeder Währungsunion: Wann lohnt sich der Verzicht auf den eigenen Wechselkurs überhaupt?',
    theorie: [
      section('OWR-Kriterien nach Mundell', `
        <p>Ein Währungsraum ist dann "optimal", wenn der Verlust des eigenen Wechselkurses gut durch andere Anpassungsmechanismen aufgefangen wird.</p>
        <p>Prüfungsrelevant sind vor allem: Faktormobilität, Lohn- und Preisflexibilität, Fiskaltransfers und die Symmetrie von Schocks.</p>
      `),
      section('Kosten und Nutzen einer Währungsunion', `
        <p>Nutzen entstehen durch geringere Transaktionskosten, weniger Wechselkursrisiko und mitunter importierte Glaubwürdigkeit. Kosten entstehen vor allem dort, wo asymmetrische Schocks auftreten und der Wechselkurs als Anpassungsinstrument fehlt.</p>
        <p>Die ökonomische Kernfrage lautet deshalb nicht "Euro gut oder schlecht?", sondern: <em>Welche Ersatzmechanismen stehen ohne eigenen Wechselkurs zur Verfügung?</em></p>
      `),
      section('Klausurzugriff auf die Eurozone', `
        ${warn('Nicht nur Vorteile aufzählen', 'OWR-Fragen sind immer Abwägungsfragen. Handelsgewinne, Glaubwürdigkeit und Integration genügen nicht, wenn asymmetrische Schocks und starre Arbeitsmärkte die Anpassung blockieren.')}
      `)
    ].join(''),
    formeln: [
      { label: 'OWR-Abwägung', eq: String.raw`$$\text{Nutzen der Währungsunion} \gtrless \text{Kosten des Verzichts auf den eigenen WK}$$`, desc: 'Kein Rechengesetz, sondern die Prüfungslogik des Konzepts', variables: {} }
    ],
    aufgaben: [
      {
        text: 'Nenne vier klassische OWR-Kriterien und erkläre kurz, warum sie den Verlust des eigenen Wechselkurses abfedern können.',
        steps: [
          { text: 'Arbeitsmobilität: Beschäftigte können in boomende Regionen ausweichen.', eq: null },
          { text: 'Lohn- und Preisflexibilität: interne Abwertung ersetzt teilweise die externe Abwertung.', eq: null },
          { text: 'Fiskaltransfers: Schocks werden zwischen Regionen geteilt.', eq: null },
          { text: 'Symmetrische Schocks: Wenn Länder ähnlich getroffen werden, passt eine einheitliche Geldpolitik besser.', eq: null }
        ],
        result: 'OWR-Kriterien benennen die Ersatzmechanismen, die ohne eigenen Wechselkurs Anpassung ermöglichen.'
      },
      {
        text: 'Warum ist die Eurozone eine klassische OWR-Abwägungsfrage und keine reine Pro-/Contra-Liste?',
        steps: [
          { text: 'Sie vereint Nutzen wie geringere Wechselkurskosten und stärkere Integration.', eq: null },
          { text: 'Gleichzeitig treten asymmetrische Schocks, begrenzte Arbeitsmobilität und unvollständige Fiskaltransfers auf.', eq: null },
          { text: 'Die Bewertung hängt deshalb an der Stärke alternativer Anpassungsmechanismen, nicht an einem einzelnen Argument.', eq: null }
        ],
        result: 'Die Eurozone ist eine OWR-Abwägung, weil der Nutzen gemeinsamer Währung gegen fehlende Wechselkursanpassung bei asymmetrischen Schocks steht.'
      }
    ]
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
    aufgaben: practice('taylor_regel', [
      {
        text: String.raw`Regimeentscheidung der Geldpolitik: Inflation liegt nahe dem Ziel, aber Geldmengenaggregate schwanken stark. Welche Größe ist in einem Inflation-Targeting-Rahmen der primäre Steueranker und wofür dienen Geldmengeninformationen dann noch?`,
        steps: [
          { text: 'Im Inflation-Targeting ist die Zielabweichung der Inflation der primäre Anker für Zinsentscheidungen.', eq: String.raw`$$\pi_t-\pi^*$$` },
          { text: 'Geldmengenentwicklungen liefern ergänzende Informationssignale über Liquidität, Kreditdynamik und Risiken, aber ersetzen das Zielkriterium nicht.', eq: null },
          { text: 'So wird verhindert, dass instabile Geldnachfrage zu mechanischen Fehlreaktionen führt.', eq: null }
        ],
        result: 'Primärer Anker bleibt die Inflationszielabweichung; Geldmengenaggregate sind nützliche Zusatzindikatoren, aber kein alleiniger Steuerkompass.'
      },
      {
        text: String.raw`ELB/optimal-inflation Mini-Case: Zwei Volkswirtschaften haben denselben Realzins im Normalzustand. A hat langfristig $\pi=4\%$, B hat $\pi=0\%$. Bei einem starken Schock können beide den Nominalzins nur bis $i=0$ senken. Welche Volkswirtschaft gewinnt mehr geldpolitischen Spielraum über den Realzinskanal?`,
        steps: [
          { text: 'Nutze den Realzinskanal:', eq: String.raw`$$r \approx i-\pi$$` },
          { text: 'Bei gleicher ELB für den Nominalzins erlaubt höhere Inflation ein stärker negatives erreichbares $r$.', eq: null },
          { text: 'Damit hat Volkswirtschaft A mehr Stabilisierungsraum; B stößt früher an die reale Untergrenze des Politikimpulses.', eq: null }
        ],
        result: 'Die Volkswirtschaft mit höherem Inflationsniveau vor dem Schock hat an der ELB mehr geldpolitischen Realzins-Spielraum.'
      }
    ])
  },

  inflation_targeting: {
    motivation: 'Inflation Targeting ist im Kurs kein bloßes Schlagwort, sondern ein geldpolitisches Regime: Zielgröße, Reaktionsfunktion, Kommunikation und Informationssatz greifen ineinander.',
    theorie: [
      section('Regimekern', `
        <p>Inflation Targeting verbindet ein explizites Inflationsziel mit operativer Unabhängigkeit der Zentralbank. Der Prüfungszugriff lautet deshalb: <strong>Welche Zielabweichung wird beobachtet, welches Instrument wird bewegt und über welchen Horizont soll Preisstabilität gesichert werden?</strong></p>
      `),
      section('EZB-Strategie und Zwei-Säulen-Logik', `
        <p>Im Kurs ist die EZB-Strategie als Mischform aus Zielorientierung und Informationsbreite relevant: Konjunktur- und Schockanalyse stehen neben monetären und finanziellen Indikatoren.</p>
        <p>Klausurtechnisch gilt: <strong>Monetäre Aggregate sind Informationsvariablen, nicht der alleinige Steueranker.</strong> Primär wird auf Preisstabilität relativ zum Ziel geschaut.</p>
        ${warn('M3 nicht mechanisch lesen', 'Hohes Geldmengenwachstum ist kein automatischer Zinsstraffungsbefehl, wenn Geldnachfrage oder Finanzmarktstress das Signal verzerren.')}
      `),
      section('Vorteile, Grenzen und ELB-Bezug', `
        <p>Inflation Targeting stärkt Glaubwürdigkeit und Erwartungsverankerung. Die Kehrseite zeigt sich bei sehr niedrigem natürlichen Zins oder an der effektiven Untergrenze: Dann wird der Spielraum über den Realzins kleiner und Kommunikation/Forward Guidance wichtiger.</p>
        ${warn('Ziel nicht mit Instrument verwechseln', 'Die Zentralbank steuert nicht direkt die Inflation, sondern Zins, Erwartungen und Finanzierungsbedingungen. Zwischen Instrument und Ziel liegt immer ein Übertragungsmechanismus.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Zielorientierte Reaktionsfunktion', eq: String.raw`$$i_t = r^* + \pi_t + a(\pi_t-\pi^*) + b(y_t-y_n)$$`, desc: 'Inflationsziel und Auslastung fließen gemeinsam in den Zinsentscheid ein', variables: { 'r^*': 'Natürlicher Realzins', '\\pi_t': 'Aktuelle Inflation', '\\pi^*': 'Inflationsziel', 'y_t-y_n': 'Outputlücke' } },
      { label: 'Realzins an der Untergrenze', eq: String.raw`$$r_t \approx i_t - \pi_t$$`, desc: 'Bei gegebener ELB hängt der Stabilisierungsspielraum an der Inflation', variables: { 'r_t': 'Ex-post-Realzins', 'i_t': 'Nominalzins', '\\pi_t': 'Inflation' } }
    ],
    aufgaben: practice('inflation_targeting', [
      {
        text: 'Warum ist in einem Inflation-Targeting-Regime die Zielabweichung der Inflation der primäre Steueranker, während Geldmengenaggregate nur ergänzende Hinweise liefern?',
        steps: [
          { text: 'Das Regime definiert Preisstabilität über ein explizites Inflationsziel; daran wird die Zentralbank gemessen.', eq: null },
          { text: 'Geldmengenaggregate können wichtige Zusatzinformationen über Liquidität, Kreditdynamik und Risiken enthalten, sind aber bei instabiler Geldnachfrage kein sauberer Einzelanker.', eq: null },
          { text: 'Die klausurstabile Antwort lautet daher: Zielabweichung zuerst, monetäre Indikatoren als Ergänzung und Plausibilitätscheck danach.', eq: null }
        ],
        result: 'Inflation Targeting bleibt zielgeführt: Primär zählt die Distanz zu \\(\\pi^*\\), monetäre Aggregate liefern ergänzende Diagnosesignale.'
      },
      {
        text: String.raw`Zwei Länder stoßen beide bei \(i=0\) an die Untergrenze. Land A hat vor dem Schock \(\pi=4\%\), Land B \(\pi=0\%\). Welches Land besitzt mehr geldpolitischen Realzins-Spielraum und warum ist das für Inflation Targeting relevant?`,
        steps: [
          { text: 'An der ELB bestimmt die Inflation, wie negativ der Realzins werden kann.', eq: String.raw`$$r \approx i-\pi$$` },
          { text: 'Bei gleichem Nominalzins von 0% ist der Realzins in Land A niedriger als in Land B.', eq: null },
          { text: 'Das zeigt, warum sehr niedrige Trendinflation zwar attraktiv wirkt, aber an der Untergrenze geldpolitischen Puffer kosten kann.', eq: null }
        ],
        result: 'Land A hat mehr Realzins-Spielraum; genau deshalb ist die Wahl des Inflationsziels auch eine Frage makroökonomischer Stabilisierungsfähigkeit.'
      }
    ])
  },

  inflation_kosten: {
    motivation: 'Inflation ist in Makro II nicht nur eine Prozentzahl, sondern ein Wohlfahrts- und Stabilitätsproblem. Genauso wichtig sind aber die Kosten, Inflation wieder herunterzuholen.',
    theorie: [
      section('Warum Inflation reale Kosten erzeugt', `
        <p>Inflation verzerrt Kassenhaltung, Preisvergleich, Vertragsbeziehungen und relative Preise. Im Kurs sind besonders prüfungsrelevant: Schuhsohlenkosten, Menükosten, Inflationssteuer auf Nominalvermögen und Fehlallokation durch unsynchrone Preisanpassung.</p>
      `),
      section('Disinflation und Opferquote', `
        <p>Eine disinflationäre Politik verschiebt kurzfristig Inflation und Auslastung entlang der Phillipslogik. Genau daraus ergeben sich Arbeitslosigkeits- und Outputkosten der Disinflation.</p>
        ${math(String.raw`$$\Delta u \approx -\frac{\Delta \pi}{\alpha}$$`)}
        ${math(String.raw`$$SR = \frac{\text{kumulierte Outputverluste}}{|\Delta \pi|}$$`)}
        <p>Klausurfragen verlangen hier fast immer: <strong>Inflationsrückgang nennen → kurzfristige Kosten benennen → Rolle der Glaubwürdigkeit ergänzen.</strong></p>
      `),
      section('Glaubwürdigkeit und Geschwindigkeit', `
        <p>Je glaubwürdiger die Zentralbank, desto schneller sinken Inflationserwartungen und desto kleiner fällt die Opferquote aus. Ohne Glaubwürdigkeit braucht dieselbe Disinflation stärkere reale Dämpfung.</p>
        ${warn('Nur auf die Zielinflation schauen reicht nicht', 'Eine erfolgreiche Disinflation wird nicht nur am Endwert der Inflation gemessen, sondern auch an Outputverlusten, Arbeitsmarktfolgen und Erwartungsanpassung.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Disinflation und Arbeitslosigkeit', eq: String.raw`$$\Delta u \approx -\frac{\Delta \pi}{\alpha}$$`, desc: 'Schnelle Disinflation erzeugt bei gegebener Steigung reale Kosten', variables: { '\\Delta u': 'Änderung der Arbeitslosigkeit', '\\Delta \\pi': 'Inflationsänderung', '\\alpha': 'Steigung der Phillipskurve' } },
      { label: 'Opferquote', eq: String.raw`$$SR = \frac{\sum_t (Y_n-Y_t)/Y_n}{|\Delta \pi|}$$`, desc: 'Kumulierter Outputverlust je Prozentpunkt Disinflation', variables: { 'SR': 'Sacrifice Ratio', 'Y_n-Y_t': 'Outputlücke' } }
    ],
    aufgaben: practice('inflation_kosten', [
      {
        text: String.raw`Die Inflation soll von 6% auf 2% sinken. Die Phillips-Steigung beträgt \(\alpha = 0{,}5\). Wie groß wäre der grobe Anstieg der Arbeitslosigkeit in einer Ein-Perioden-Näherung?`,
        steps: [
          { text: 'Der Inflationsrückgang beträgt 4 Prozentpunkte.', eq: String.raw`$$\Delta \pi = -4$$` },
          { text: 'Setze die Näherungsbeziehung ein.', eq: String.raw`$$\Delta u \approx -\frac{-4}{0{,}5} = 8$$` },
          { text: 'Die Rechnung zeigt die Größenordnung der kurzfristigen Disinflationskosten, nicht eine naturgesetzliche exakte Prognose.', eq: null }
        ],
        result: 'In der groben Phillips-Näherung steigt die Arbeitslosigkeit um etwa 8 Prozentpunkte.'
      },
      {
        text: 'Warum kann eine glaubwürdige Disinflation dieselbe Zielinflation mit geringeren Outputkosten erreichen als eine unglaubwürdige?',
        steps: [
          { text: 'Glaubwürdigkeit senkt Inflationserwartungen schneller.', eq: null },
          { text: 'Damit verschiebt sich die kurzfristige Phillipskurve günstiger und es braucht weniger reale Dämpfung, um Inflation zu senken.', eq: null },
          { text: 'Die Opferquote fällt also geringer aus, obwohl das Inflationsziel identisch ist.', eq: null }
        ],
        result: 'Glaubwürdigkeit reduziert die reale „Bezahlstrecke“ der Disinflation, weil Erwartungen schneller mitziehen.'
      }
    ])
  },

  wachstum_fakten: {
    motivation: 'Wachstumstheorie beginnt nicht mit einer Gleichung, sondern mit den Datenmustern, die erklärt werden sollen. Die stilisierten Fakten sind deshalb der Prüfungsanker vor jedem Modell.',
    theorie: [
      section('Stilisierte Fakten des Wachstums', `
        <p>Der Kurs nutzt die klassischen Wachstumsfakten als Orientierungsrahmen: langfristiges Wachstum von Output pro Kopf, steigende Kapitalintensität, relativ stabile Faktoranteile und deutliche Unterschiede zwischen Ländern.</p>
        <p>Die erste Klausurfrage lautet daher oft nicht „Welche Formel?“, sondern: <strong>Welches empirische Muster soll das Modell überhaupt erfassen?</strong></p>
      `),
      section('Konvergenz und Divergenz', `
        <p>Solow impliziert bedingte Konvergenz: Länder mit ähnlichen Strukturparametern nähern sich ähnlichen Steady States an. Große internationale Unterschiede bleiben bestehen, wenn Sparquote, Institutionen, Demografie oder Produktivitätspfad systematisch verschieden sind.</p>
        ${warn('Arme Länder wachsen nicht automatisch schneller', 'Schnelleres Aufholen folgt nur bei ähnlichen Fundamentaldaten. Ohne institutionelle und technologische Voraussetzungen bleibt Konvergenz aus.')}
      `),
      section('Wachstumszerlegung', `
        <p>Wachstum wird im Kurs über Faktorbeiträge und Produktivitätsrest gelesen. Genau daraus folgt der Übergang zu Produktionsfunktion, Solow-Residuum und langfristigen Institutionenfragen.</p>
        ${math(String.raw`$$g_Y \approx g_A + \alpha_K g_K + (1-\alpha_K) g_N$$`)}
      `)
    ].join(''),
    formeln: [
      { label: 'Wachstumszerlegung', eq: String.raw`$$g_Y \approx g_A + \alpha_K g_K + (1-\alpha_K) g_N$$`, desc: 'BIP-Wachstum als Summe aus Produktivität, Kapital- und Arbeitsbeitrag', variables: { 'g_Y': 'BIP-Wachstum', 'g_A': 'TFP-/Produktivitätswachstum', 'g_K': 'Kapitalwachstum', 'g_N': 'Beschäftigungs- bzw. Arbeitswachstum', '\\alpha_K': 'Kapitaleinkommensanteil' } }
    ],
    aufgaben: practice('wachstum_fakten', [
      {
        text: String.raw`Das BIP wächst um 3%, Kapital um 2%, Beschäftigung um 1%. Der Kapitalanteil beträgt \(\alpha_K=\tfrac13\). Wie groß ist das TFP-Wachstum näherungsweise?`,
        steps: [
          { text: 'Nutze die Wachstumszerlegung.', eq: String.raw`$$g_A \approx g_Y - \alpha_K g_K - (1-\alpha_K) g_N$$` },
          { text: 'Setze die Werte ein.', eq: String.raw`$$g_A \approx 3 - \tfrac13 \cdot 2 - \tfrac23 \cdot 1 = 1{,}67$$` },
          { text: 'Der Rest ist das Solow-Residuum: Er misst nicht „reine Technik“ perfekt, sondern alles nicht direkt durch Faktorwachstum erklärte Wachstum.', eq: null }
        ],
        result: 'Das TFP-Wachstum liegt näherungsweise bei 1,67%.'
      },
      {
        text: 'Warum reicht der Befund „Land X ist arm“ nicht aus, um schnelle Konvergenz vorherzusagen?',
        steps: [
          { text: 'Solow sagt nur bedingte Konvergenz voraus.', eq: null },
          { text: 'Dafür müssen zentrale Strukturgrößen wie Sparen, Demografie, Technologiezugang und Institutionen vergleichbar sein.', eq: null },
          { text: 'Ohne diese Bedingungen kann ein armes Land dauerhaft hinterherhinken statt aufzuholen.', eq: null }
        ],
        result: 'Konvergenz ist konditional: Armut allein ist kein Garant für Aufholen.'
      }
    ])
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

  steady_state: {
    motivation: 'Der Steady State ist die eigentliche Langfrist-Lesart des Solow-Modells: Dort entscheidet sich, welches Pro-Kopf-Niveau eine Volkswirtschaft bei gegebenen Parametern dauerhaft tragen kann.',
    theorie: [
      section('Steady-State-Bedingung', `
        <p>Im Steady State sind Nettoinvestitionen pro Kopf null. Die Investitionskurve deckt gerade die Break-even-Investition.</p>
        ${math(String.raw`$$s f(k^*) = (\delta + n)k^*$$`)}
        <p>Mit technischem Fortschritt wird aus \\(\\delta+n\\) die effektive Verlust-/Verdünnungsrate \\(\\delta+n+g_A\\).</p>
      `),
      section('Komparative Statik', `
        <p>Mehr Sparen erhöht das Steady-State-Niveau, mehr Abschreibung oder schnelleres Bevölkerungswachstum drücken es. Genau diese Richtungsaussagen sind klausurrelevant, bevor überhaupt gerechnet wird.</p>
        ${warn('Niveaueffekt nicht mit Dauerwachstum verwechseln', 'Eine höhere Sparquote hebt den Steady State an, erzeugt aber ohne technischen Fortschritt kein dauerhaft höheres Pro-Kopf-Wachstum.')}
      `),
      section('Konvergenzpfad', `
        <p>Links vom Steady State gilt \\(sf(k)>(\\delta+n)k\\): Kapital pro Kopf steigt. Rechts davon schrumpft \\(k\\). Der Steady State ist deshalb der Anker für Konvergenzfragen und Übergangsdynamik.</p>
      `)
    ].join(''),
    formeln: [
      { label: 'Steady-State-Bedingung', eq: String.raw`$$s f(k^*) = (\delta+n)k^*$$`, desc: 'Investition deckt Abschreibung und Verdünnung gerade ab', variables: { 'k^*': 'Kapital pro Kopf im Steady State', 'n': 'Bevölkerungswachstum', '\\delta': 'Abschreibung' } },
      { label: 'Cobb-Douglas-Steady-State', eq: String.raw`$$k^* = \left(\frac{sA}{\delta+n}\right)^{\!\frac{1}{1-\alpha}}$$`, desc: 'Explizite Lösung bei \\(y=Ak^\\alpha\\)', variables: { 'A': 'Produktivität', '\\alpha': 'Kapitalelastizität' } }
    ],
    aufgaben: practice('steady_state', [
      {
        text: String.raw`Gegeben sei \(y = 1{,}2\sqrt{k}\), \(s=0{,}3\) und \(\delta+n=0{,}12\). Bestimme den Steady-State-Kapitalstock näherungsweise.`,
        steps: [
          { text: 'Setze die Steady-State-Bedingung an.', eq: String.raw`$$0{,}3 \cdot 1{,}2 \sqrt{k^*} = 0{,}12k^*$$` },
          { text: 'Vereinfache: \\(0{,}36\\sqrt{k^*}=0{,}12k^*\\Rightarrow 3\\sqrt{k^*}=k^*\\).', eq: null },
          { text: 'Damit gilt \\(\\sqrt{k^*}=3\\) und also \\(k^*=9\\).', eq: null }
        ],
        result: 'Der Steady-State-Kapitalstock liegt bei \\(k^*=9\\).'
      },
      {
        text: 'Was passiert mit dem Steady State, wenn die Sparquote steigt, aber technischer Fortschritt unverändert bleibt?',
        steps: [
          { text: 'Die Investitionskurve \\(sf(k)\\) verschiebt sich nach oben.', eq: null },
          { text: 'Der neue Schnittpunkt mit der Break-even-Geraden liegt bei höherem \\(k^*\\) und höherem \\(y^*\\).', eq: null },
          { text: 'Die langfristige Wachstumsrate pro Kopf bleibt ohne zusätzlichen technischen Fortschritt trotzdem unverändert.', eq: null }
        ],
        result: 'Mehr Sparen hebt das langfristige Niveau, aber nicht die dauerhafte Pro-Kopf-Wachstumsrate.'
      }
    ])
  },

  goldene_sparquote: {
    motivation: 'Nicht jeder Steady State ist normativ gut. Die Goldene Sparquote beantwortet die klausurrelevante Frage, bei welcher Kapitalintensität der langfristige Konsum maximal ist.',
    theorie: [
      section('Konsum im Steady State', `
        <p>Im langfristigen Gleichgewicht gilt \\(c^* = f(k^*) - (\\delta+n)k^*\\). Mehr Sparen erhöht nicht automatisch den Konsum, weil ein Teil des Outputs nur noch zur Kapitalerhaltung gebraucht wird.</p>
      `),
      section('Goldene Regel', `
        <p>Die Goldene Regel maximiert den Steady-State-Konsum. Dazu muss das Grenzprodukt des Kapitals gerade der Break-even-Belastung entsprechen.</p>
        ${math(String.raw`$$f'(k_{gold}) = \delta + n$$`)}
        <p>Für Cobb-Douglas folgt im Standardfall: \\(s_{gold}=\\alpha\\). Das ist eine besonders klausurstabile Merkregel.</p>
      `),
      section('Über- und Unterakkumulation', `
        <p>Liegt die Wirtschaft rechts vom goldenen Kapitalstock, wird „zu viel“ gespart: Weniger Sparen kann den Konsum erhöhen. Links davon ist zusätzlicher Kapitalaufbau konsumsteigernd.</p>
        ${warn('Goldene Regel maximiert Konsum, nicht Output', 'Die outputmaximierende und die konsummaximierende Sparquote fallen nicht notwendig zusammen. In Klausuren ist genau diese Unterscheidung oft die Falle.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Goldene Regel', eq: String.raw`$$f'(k_{gold}) = \delta + n$$`, desc: 'Grenzprodukt des Kapitals = Break-even-Belastung', variables: { 'k_{gold}': 'Goldener Kapitalstock' } },
      { label: 'Goldene Sparquote (Cobb-Douglas)', eq: String.raw`$$s_{gold} = \alpha$$`, desc: 'Bei \\(y=Ak^\\alpha\\) entspricht die optimale Sparquote dem Kapitalanteil', variables: { '\\alpha': 'Kapitalelastizität' } }
    ],
    aufgaben: practice('goldene_sparquote', [
      {
        text: 'Warum kann eine Senkung der Sparquote den langfristigen Konsum erhöhen, obwohl dadurch der Kapitalstock sinkt?',
        steps: [
          { text: 'Rechts vom goldenen Kapitalstock wird zu viel Output in Kapitalerhalt gelenkt.', eq: null },
          { text: 'Eine niedrigere Sparquote reduziert zwar \\(k^*\\), spart aber zugleich Break-even-Investitionen ein.', eq: null },
          { text: 'Wenn die Wirtschaft überakkumuliert ist, überwiegt dieser Konsumeffekt.', eq: null }
        ],
        result: 'Überakkumulation bedeutet: Weniger Sparen kann den langfristigen Konsum steigern.'
      },
      {
        text: String.raw`Eine Cobb-Douglas-Volkswirtschaft hat \(\alpha=0{,}35\). Welche goldene Sparquote folgt daraus und was ist die ökonomische Merkbotschaft?`,
        steps: [
          { text: 'Bei Cobb-Douglas gilt direkt:', eq: String.raw`$$s_{gold}=\alpha$$` },
          { text: 'Setze \\(\\alpha=0{,}35\\) ein.', eq: String.raw`$$s_{gold}=0{,}35$$` },
          { text: 'Die optimale Sparquote folgt damit unmittelbar aus dem Kapitalanteil der Produktionsfunktion.', eq: null }
        ],
        result: 'Die goldene Sparquote beträgt 35%.'
      }
    ])
  },

  tech_fortschritt: {
    motivation: 'Mit technischem Fortschritt wird aus dem Solow-Modell ein dauerhaft wachsendes System. Hier sitzt die eigentliche Langfristlogik des Pro-Kopf-Wachstums.',
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
      section('Solow-Residuum und Institutionenlogik', `
        <p>In empirischen Wachstumszerlegungen erscheint technischer Fortschritt oft als Residuum. Das ist kein „reiner Technikschock“, sondern eine Sammelgröße für Effizienz, Organisation, Wissen und institutionelle Rahmenbedingungen.</p>
        ${warn('Residual nicht mystifizieren', 'Das Solow-Residuum misst alles nicht direkt beobachtete produktivitätsrelevante Wachstum. Es ist interpretierbar, aber nicht fehlerfrei „wahre Technologie“.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Solow mit technischem Fortschritt', eq: String.raw`$$\dot{\tilde k} = s f(\tilde k) - (n + g_A + \delta)\tilde k$$`, desc: 'Kapital pro Arbeitseffizienzeinheit', variables: { 'g_A': 'Technischer Fortschritt', 'n': 'Bevölkerungswachstum' } },
      { label: 'Wachstum pro Kopf im Steady State', eq: String.raw`$$g_{Y/N}=g_A$$`, desc: 'Dauerhaftes Pro-Kopf-Wachstum folgt dem technischen Fortschritt', variables: { 'g_A': 'Wachstum der Arbeitseffizienz' } }
    ],
    aufgaben: practice('tech_fortschritt')
  },

  budgetrestriktion: {
    motivation: 'Die staatliche Budgetrestriktion ist die Buchhaltung hinter jeder Schuldenfrage. Ohne sie bleiben Tragfähigkeit, Primärsaldo und spätere Steuerlast begriffslos.',
    theorie: [
      section('Periodische Budgetrestriktion des Staates', `
        <p>Neue Schulden entstehen aus alter Schuld, Zinslast und Primärsaldo. Diese Buchhaltung ist der Startpunkt jeder Schuldenfrage.</p>
        ${math(String.raw`$$B_t = (1+r)B_{t-1} + G_t - T_t$$`)}
      `),
      section('Primärsaldo und intertemporale Lesart', `
        <p>Der Primärsaldo trennt laufende Fiskalpolitik von Zinslasten. Über Vorwärtsiteration folgt daraus die intertemporale Budgetrestriktion: Heutige Schulden müssen durch künftige Primärüberschüsse oder Seigniorage gedeckt sein.</p>
        ${math(String.raw`$$PD_t = G_t - T_t$$`)}
        ${math(String.raw`$$B_0 = \sum_{t=1}^{\infty} \frac{T_t-G_t}{(1+r)^t}$$`)}
      `),
      section('Klausurfallen', `
        ${warn('Primärsaldo ist nicht Gesamtsaldo', 'Wer Zinslasten und Primärsaldo nicht trennt, verwechselt laufende Fiskalentscheidung mit Altlastenproblem.')}
        ${warn('Buchhaltung ist noch keine Tragfähigkeit', 'Die periodische Restriktion sagt, wie Schulden entstehen. Ob sie tragfähig sind, hängt erst an Wachstum, Zinsdifferenz und künftigen Primärpfaden.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Periodische Budgetrestriktion', eq: String.raw`$$B_t = (1+r)B_{t-1} + G_t - T_t$$`, desc: 'Fortschreibung des nominalen Schuldenstands', variables: { 'B_t': 'Schuldenstand am Periodenende', 'G_t-T_t': 'Primärdefizit' } },
      { label: 'Intertemporale Restriktion', eq: String.raw`$$B_0 = \sum_{t=1}^{\infty} \frac{T_t-G_t}{(1+r)^t}$$`, desc: 'Heute bestehende Schuld = Barwert künftiger Primärüberschüsse', variables: { 'B_0': 'Anfangsschuld' } }
    ],
    aufgaben: practice('budgetrestriktion', [
      {
        text: String.raw`Ein Staat startet mit \(B_0=100\), der Realzins beträgt 5%. In Periode 1 liegt ein Primärdefizit von 4 vor. Wie hoch ist der Schuldenstand \(B_1\)?`,
        steps: [
          { text: 'Nutze die periodische Budgetrestriktion.', eq: String.raw`$$B_1=(1+r)B_0+PD_1$$` },
          { text: 'Setze ein.', eq: String.raw`$$B_1=1{,}05\cdot 100 + 4 = 109$$` },
          { text: 'Der neue Schuldenstand enthält also Zinslast plus frisches Primärdefizit.', eq: null }
        ],
        result: 'Der Schuldenstand in Periode 1 beträgt 109.'
      },
      {
        text: 'Warum ist ein ausgeglichener Primärsaldo nicht automatisch ausreichend, um einen gegebenen Schuldenstand tragfähig zu machen?',
        steps: [
          { text: 'Bei Primärsaldo null wachsen Altschulden weiter mit dem Zins.', eq: null },
          { text: 'Ohne Wachstumsvorteil oder spätere Primärüberschüsse kann der Schuldenpfad deshalb weiter steigen.', eq: null },
          { text: 'Tragfähigkeit verlangt also mehr als nur „keine neuen Primärdefizite“.', eq: null }
        ],
        result: 'Ein Primärsaldo von null stoppt die Zinsdynamik nicht; Tragfähigkeit hängt am gesamten intertemporalen Pfad.'
      }
    ])
  },

  schuldenquote_dynamik: {
    motivation: 'Für Makro II zählt die relative Größe zum BIP. Erst die Schuldenquote macht sichtbar, wann Zins, Wachstum und Primärsaldo den Pfad stabilisieren oder eskalieren.',
    theorie: [
      section('Schneeballeffekt und Stabilisierung', `
        <p>Aus Budgetrestriktion und BIP-Normierung folgt näherungsweise die Dynamik der Schuldenquote.</p>
        ${math(String.raw`$$\Delta b \approx (r-g)b - ps$$`)}
        <p>Ist \\(r>g\\), wirkt der Schneeballeffekt gegen den Staat. Ein ausreichend hoher Primärüberschuss kann die Quote trotzdem stabilisieren.</p>
      `),
      section('Niveaulesart statt Schuldenstand-Fixierung', `
        <p>Ein steigender nominaler Schuldenstand muss die Schuldenquote nicht erhöhen. Genau deshalb ist die Nennerlogik des BIP in Klausuren so wichtig.</p>
        ${warn('Mehr Schuldstand heißt nicht automatisch höhere Quote', 'Wenn das BIP schneller wächst als der Schuldstand, kann die Quote trotz höherer Nominalschuld sinken.')}
      `),
      section('Stabilisierungsbedingung', `
        <p>Zur Stabilisierung der Quote auf aktuellem Niveau muss gelten:</p>
        ${math(String.raw`$$ps^* = (r-g)b$$`)}
        <p>Diese Formel ist das Standardwerkzeug für schnelle Prüfungsrechnungen und für politische Urteile über Tragfähigkeit.</p>
      `)
    ].join(''),
    formeln: [
      { label: 'Schuldenquotendynamik', eq: String.raw`$$\Delta b \approx (r-g)b - ps$$`, desc: 'Zins-Wachstums-Differenz und Primärsaldo bestimmen den Pfad', variables: { 'b': 'Schuldenquote', 'ps': 'Primärsaldo in % des BIP', 'r-g': 'Zins-Wachstums-Differenz' } },
      { label: 'Stabilisierender Primärsaldo', eq: String.raw`$$ps^* = (r-g)b$$`, desc: 'Gerade ausreichender Primärüberschuss zur Stabilisierung', variables: {} }
    ],
    aufgaben: practice('schuldenquote_dynamik', [
      {
        text: String.raw`Die Schuldenquote beträgt 80% des BIP. Der Realzins liegt bei 4%, das Wachstum bei 1%. Welcher Primärüberschuss stabilisiert die Quote ungefähr?`,
        steps: [
          { text: 'Nutze die Näherungsformel der Schuldenquote.', eq: String.raw`$$\Delta b \approx (r-g)b - ps$$` },
          { text: 'Setze für Stabilität $\Delta b = 0$ und löse nach $ps$ auf.', eq: String.raw`$$ps^* = (0{,}04-0{,}01)\cdot 0{,}80 = 0{,}024$$` },
          { text: 'Interpretiere den Wert als Anteil am BIP.', eq: null }
        ],
        result: 'Ein Primärüberschuss von rund 2,4% des BIP stabilisiert die Schuldenquote.'
      },
      {
        text: String.raw`Die nominale Staatsschuld steigt, zugleich wächst das BIP sehr kräftig. Warum reicht diese Information allein nicht aus, um auf eine steigende Schuldenquote zu schließen?`,
        steps: [
          { text: 'Die Schuldenquote ist ein Verhältnis aus Schuldstand und BIP.', eq: null },
          { text: 'Wenn das BIP schneller wächst als der Schuldstand, kann die Quote trotz höherer Nominalschuld sinken.', eq: null },
          { text: 'Für die Bewertung braucht man deshalb immer Zähler und Nenner zusammen.', eq: null }
        ],
        result: 'Ohne BIP-Dynamik ist keine belastbare Aussage über die Schuldenquote möglich.'
      }
    ])
  },

  ricardianisch: {
    motivation: 'Ricardianische Äquivalenz ist die Gegenfrage jeder Defizitpolitik: Ist ein heutiger Steuererlass wirklich Vermögensgewinn oder nur verschobene Steuerlast?',
    theorie: [
      section('Kernidee', `
        <p>Wenn Haushalte rational vorausblicken und künftige Steuerlast internalisieren, dann ist eine defizitfinanzierte Steuersenkung kein echtes Vermögensgeschenk. Der private Konsum steigt dann nicht automatisch.</p>
      `),
      section('Warum die Äquivalenz nicht immer gilt', `
        <p>Liquiditätsbeschränkungen, endliche Horizonte, unvollständige Information oder fehlende Erbschaftsmotive durchbrechen die Äquivalenz. Genau deshalb ist sie im Kurs eher Benchmark als empirisches Naturgesetz.</p>
        ${warn('Ricardo heißt nicht „Fiskalpolitik wirkt nie“', 'Die Äquivalenz zeigt eine Grenzlogik. In der Praxis wird der Multiplikator oft gedämpft, aber nicht zwangsläufig auf null gesetzt.')}
      `),
      section('Klausurzugriff', `
        <p>Saubere Antworten trennen immer: <strong>Welcher fiskalische Impuls?</strong> <strong>Welche Voraussetzungen der Äquivalenz gelten?</strong> <strong>Wie verändert sich deshalb der private Konsum?</strong></p>
      `)
    ].join(''),
    formeln: [
      { label: 'Äquivalenzlogik', eq: String.raw`$$\Delta T_1 = -\frac{\Delta T_2}{1+r} \Rightarrow \Delta C_1 = 0 \quad (\text{unter Ricardo-Annahmen})$$`, desc: 'Verschobene Steuern ändern den Barwert des verfügbaren Einkommens nicht', variables: { '\\Delta T_1': 'Steueränderung heute', '\\Delta T_2': 'Künftige Gegenfinanzierung' } }
    ],
    aufgaben: practice('ricardianisch', [
      {
        text: 'Warum kann ein heutiger defizitfinanzierter Steuererlass unter Ricardianischer Äquivalenz konsumneutral sein?',
        steps: [
          { text: 'Haushalte erkennen, dass heutige Steuersenkung spätere Steuererhöhungen impliziert.', eq: null },
          { text: 'Der Barwert ihres Lebenseinkommens bleibt damit unverändert.', eq: null },
          { text: 'Die zusätzliche Liquidität wird gespart statt konsumiert; der heutige Konsum steigt nicht.', eq: null }
        ],
        result: 'Unter den Ricardo-Annahmen verschiebt Defizitfinanzierung nur den Steuerzeitpunkt, nicht das Lebenseinkommen.'
      },
      {
        text: 'Nenne zwei realistische Gründe, warum Ricardianische Äquivalenz empirisch oft nur unvollständig gilt.',
        steps: [
          { text: 'Haushalte können kredit- oder liquiditätsbeschränkt sein.', eq: null },
          { text: 'Sie haben eventuell keinen perfekten Horizont oder internalisieren Steuerlasten zukünftiger Generationen nicht vollständig.', eq: null },
          { text: 'Dann wirkt eine Steuersenkung zumindest teilweise wie zusätzlicher verfügbarer Konsumspielraum.', eq: null }
        ],
        result: 'Liquiditätsbeschränkungen und endliche Horizonte schwächen die Ricardianische Äquivalenz typischerweise ab.'
      }
    ])
  },

  schuldenfinanzierung_monetarisierung: {
    motivation: 'Der Finanzierungsmodus ist eine eigene makroökonomische Entscheidung: Kreditaufnahme und Monetarisierung verschieben Lasten unterschiedlich zwischen Zinskanal, Inflation und Glaubwürdigkeit.',
    theorie: [
      section('Kreditfinanzierung', `
        <p>Bei kreditfinanzierten Defiziten steigt der Schuldenstand; spätere Tragfähigkeit hängt an Zins-Wachstums-Differenz und Primärsaldo. Die Last liegt primär auf dem Schulden- und Refinanzierungspfad.</p>
      `),
      section('Monetarisierung', `
        <p>Wird das Defizit über Geldschöpfung finanziert, fällt kurzfristig weniger Marktrefinanzierungsdruck an. Gleichzeitig entsteht aber ein zusätzlicher Preisniveau- und Erwartungskanal.</p>
        ${math(String.raw`$$\text{Seigniorage} = \frac{\Delta M}{P}$$`)}
      `),
      section('Politische Abwägung', `
        <p>Prüfungslogik: Monetarisierung ist kein kostenloser Ausweg aus der Budgetrestriktion, sondern ein Trade-off zwischen Schuldenentlastung und Preisstabilitätskosten.</p>
        ${warn('Nicht „Schulden wegdrucken“ sagen ohne Zusatz', 'Wer Monetarisierung nennt, muss auch Inflations-, Glaubwürdigkeits- und Verteilungseffekte benennen.')}
      `)
    ].join(''),
    formeln: [
      { label: 'Seigniorage', eq: String.raw`$$\text{Seigniorage} = \frac{\Delta M}{P}$$`, desc: 'Reale Finanzierung über Geldschöpfung', variables: { '\\Delta M': 'Geldmengenausweitung', 'P': 'Preisniveau' } }
    ],
    aufgaben: practice('schuldenfinanzierung_monetarisierung', [
      {
        text: String.raw`Finanzierungsmodus-Vergleich: Zusätzliche Staatsausgaben werden alternativ (A) über Kreditaufnahme oder (B) über Monetarisierung finanziert. Welche makroökonomische Zusatzwirkung ist bei (B) gegenüber (A) besonders zu beachten?`,
        steps: [
          { text: 'Kreditfinanzierung erhöht primär die Schulden- und Zinslastdynamik des Staates.', eq: null },
          { text: 'Monetarisierung verschiebt zusätzlich die nominale Nachfrage und kann Inflationsdruck erzeugen.', eq: null },
          { text: 'Damit ist (B) kein kostenloses Entkommen aus der Budgetrestriktion, sondern ein Trade-off zwischen Schuldenpfad und Preisstabilität.', eq: null }
        ],
        result: 'Monetarisierung reduziert kurzfristig Refinanzierungsdruck, erhöht aber das Risiko inflationsgetriebener Anpassungskosten.'
      },
      {
        text: 'Warum ist Monetarisierung politisch und ökonomisch etwas anderes als bloß „eine andere Form der Kreditaufnahme“?',
        steps: [
          { text: 'Kreditaufnahme verschiebt die Last primär in den Zins- und Rückzahlungsprozess.', eq: null },
          { text: 'Monetarisierung verändert zusätzlich Geldmenge, Inflationserwartungen und reale Kassenhaltung.', eq: null },
          { text: 'Damit betrifft sie Preisstabilität und Glaubwürdigkeit unmittelbar, nicht nur die spätere Schuldentragfähigkeit.', eq: null }
        ],
        result: 'Monetarisierung ist ein anderer makroökonomischer Kanal: Sie verschiebt nicht nur Finanzierung, sondern verändert auch das monetäre Umfeld.'
      }
    ])
  }
};
