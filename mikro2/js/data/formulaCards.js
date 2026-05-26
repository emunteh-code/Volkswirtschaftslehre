// ============================================================
// FORMULA CARDS — Mikroökonomik II
// Exam-OS derivation layer. Cards are source-anchored but remain
// concise enough to render inside the existing formula tab.
// ============================================================

const MODULE = 'mikro2';

function card({
  id,
  conceptId,
  officialNotation,
  displayFormula,
  intuition,
  derivationSteps,
  assumptions,
  appliesWhen,
  failsWhen,
  substitutions = [],
  examShortcut,
  graphicalInterpretation = '',
  relatedTaskFamilies = [],
  commonMistakes,
  anchorIds
}) {
  return {
    id,
    module: MODULE,
    conceptId,
    officialNotation,
    displayFormula,
    intuition,
    derivationSteps,
    assumptions,
    appliesWhen,
    failsWhen,
    substitutions,
    examShortcut,
    graphicalInterpretation,
    relatedTaskFamilies,
    commonMistakes,
    anchorIds,
    sourceStatus: 'direct-source'
  };
}

export const FORMULA_CARDS = Object.freeze([
  card({
    id: 'mikro2.monopoly_markup_elasticity',
    conceptId: 'monopol_preissetzung',
    officialNotation: "E'(y), p(y), C'(y), |\\varepsilon_{xp}|",
    displayFormula: String.raw`$$p(y)=\left(1-\frac{1}{|\varepsilon_{xp}|}\right)^{-1}C'(y)$$`,
    intuition: 'Der Monopolpreis ist ein Aufschlag auf Grenzkosten. Je elastischer die Nachfrage, desto kleiner wird der Aufschlag.',
    derivationSteps: [
      { label: 'Grenzerlös schreiben', text: String.raw`Nutze die Kursdarstellung des Grenzerlöses.`, math: String.raw`$$E'(y)=p(y)\left(1-\frac{1}{|\varepsilon_{xp}|}\right)$$` },
      { label: 'BEO einsetzen', text: String.raw`Im Gewinnmaximum gilt Grenzerlös gleich Grenzkosten.`, math: String.raw`$$E'(y)=C'(y)$$` },
      { label: 'Nach Preis auflösen', text: String.raw`Isoliere $p(y)$ und lies den Aufschlagsfaktor ab.`, math: String.raw`$$p(y)=\left(1-\frac{1}{|\varepsilon_{xp}|}\right)^{-1}C'(y)$$` }
    ],
    assumptions: ['fallende Nachfrage', 'inneres Gewinnmaximum', 'Betrag der Preiselastizität größer als 1', 'Grenzkosten sind für die betrachtete Menge definiert'],
    appliesWhen: ['Monopolistische Preissetzung mit differenzierbarer Nachfrage', 'Aufschlagslogik über Elastizität gefragt ist'],
    failsWhen: ['vollkommener Wettbewerb als Preisnehmermodell vorliegt', 'Nachfrage unelastisch im relevanten Bereich ist', 'Kapazitäts- oder Mehrproduktrestriktionen den einfachen Monopolfall verändern'],
    examShortcut: 'Immer zuerst prüfen: Ist die Elastizität als Betrag gegeben? Dann darf der Klammerterm nicht negativ werden.',
    relatedTaskFamilies: ['monopoly-markup', 'monopoly-welfare'],
    commonMistakes: ['Elastizität ohne Betrag einsetzen', 'Preis direkt mit Grenzkosten gleichsetzen', 'Grenzerlös und Preis verwechseln'],
    anchorIds: ['mikro2.monopol_preissetzung.vl02.p02.markup']
  }),
  card({
    id: 'mikro2.third_degree_price_discrimination_mr',
    conceptId: 'preisdiskriminierung',
    officialNotation: "E_i'(y_i), C'(y_1+y_2)",
    displayFormula: String.raw`$$E_1'(y_1)=E_2'(y_2)=C'(y_1+y_2)$$`,
    intuition: 'Der Monopolist verteilt Output so auf getrennte Märkte, dass der Grenzerlös in jeder Gruppe gleich hoch ist und den Grenzkosten der Gesamtproduktion entspricht.',
    derivationSteps: [
      { label: 'Gewinnfunktion', text: String.raw`Addiere gruppenspezifische Erlöse und ziehe Kosten der Gesamtmenge ab.`, math: String.raw`$$\pi=E_1(y_1)+E_2(y_2)-C(y_1+y_2)$$` },
      { label: 'BEO je Gruppe', text: String.raw`Leite nach $y_1$ und $y_2$ ab.`, math: String.raw`$$E_1'(y_1)=C'(y_1+y_2),\quad E_2'(y_2)=C'(y_1+y_2)$$` },
      { label: 'Ausgleich', text: 'Beide linken Seiten müssen derselben rechten Seite entsprechen.', math: String.raw`$$E_1'(y_1)=E_2'(y_2)=C'(y_1+y_2)$$` }
    ],
    assumptions: ['Kundengruppen sind trennbar', 'Wiederverkauf zwischen Gruppen ist ausgeschlossen', 'Kosten hängen von der Gesamtproduktion ab'],
    appliesWhen: ['Preisdiskriminierung dritten Grades', 'Gruppenpreise oder Teilmärkte in der Aufgabenstellung vorkommen'],
    failsWhen: ['Konsumententypen nicht beobachtbar sind', 'Selbstselektion über Menüs statt Gruppentrennung modelliert wird'],
    examShortcut: 'Nicht Preise ausgleichen, sondern Grenzerlöse. Preise unterscheiden sich typischerweise wegen unterschiedlicher Elastizitäten.',
    relatedTaskFamilies: ['price-discrimination-third-degree'],
    commonMistakes: ['gleiche Preise statt gleiche Grenzerlöse fordern', 'Kosten separat je Gruppe statt über Gesamtmenge ableiten'],
    anchorIds: ['mikro2.preisdiskriminierung.vl03.p03.mr-equalization']
  }),
  card({
    id: 'mikro2.cournot_symmetric_duopoly_quantity',
    conceptId: 'oligopol_cournot_bertrand',
    officialNotation: 'q_i, q_j, P(Q), C_i(q_i)',
    displayFormula: String.raw`$$q_i^*=\frac{a-c}{3b}$$`,
    intuition: 'Im symmetrischen Cournot-Duopol wählt jede Firma ihre Menge als beste Antwort auf die Menge der anderen Firma.',
    derivationSteps: [
      { label: 'Gewinn aufstellen', text: String.raw`Setze lineare inverse Nachfrage und konstante Grenzkosten ein.`, math: String.raw`$$\pi_i=(a-b(q_i+q_j))q_i-cq_i$$` },
      { label: 'BEO bilden', text: String.raw`Leite nach der eigenen Menge ab.`, math: String.raw`$$a-2bq_i-bq_j-c=0$$` },
      { label: 'Symmetrie nutzen', text: String.raw`Setze $q_i=q_j=q^*$ und löse.`, math: String.raw`$$a-c-3bq^*=0\Rightarrow q^*=\frac{a-c}{3b}$$` }
    ],
    assumptions: ['simultane Mengenwahl', 'homogene Anbieter', 'lineare Nachfrage', 'identische konstante Grenzkosten'],
    appliesWhen: ['Cournot-Duopol mit symmetrischen Firmen', 'Reaktionsfunktionen oder Schnittpunkt gefragt sind'],
    failsWhen: ['Preiswettbewerb vorliegt', 'Stackelberg-Timing vorliegt', 'Firmen asymmetrische Kosten haben'],
    examShortcut: 'Bei symmetrischem linearem Duopol ist der Nenner 3b; bei Monopol wäre es 2b.',
    graphicalInterpretation: 'Schnittpunkt der beiden Reaktionsfunktionen.',
    relatedTaskFamilies: ['cournot-reaction-functions', 'cournot-welfare'],
    commonMistakes: ['Monopolmenge pro Firma verwenden', 'Rivalenmenge beim Ableiten als variabel behandeln', 'Cournot und Bertrand vermischen'],
    anchorIds: ['mikro2.oligopol_cournot_bertrand.vl06.p03.reaction']
  }),
  card({
    id: 'mikro2.stackelberg_leader_quantity',
    conceptId: 'oligopol_stackelberg',
    officialNotation: 'y_1, y_2(y_1)',
    displayFormula: String.raw`$$q_1^{S}=\frac{a-c}{2b}$$`,
    intuition: 'Der Führer setzt zuerst und berücksichtigt die Reaktionsfunktion des Folgers bereits in seinem Optimierungsproblem.',
    derivationSteps: [
      { label: 'Folgerreaktion', text: String.raw`Bestimme zuerst die beste Antwort des Folgers.`, math: String.raw`$$q_2(q_1)=\frac{a-c-bq_1}{2b}$$` },
      { label: 'Einsetzen', text: String.raw`Setze die Folgerreaktion in die Gewinnfunktion des Führers ein.`, math: String.raw`$$\pi_1=(a-b(q_1+q_2(q_1)))q_1-cq_1$$` },
      { label: 'Führermenge', text: 'Maximierung liefert im symmetrischen linearen Fall.', math: String.raw`$$q_1^{S}=\frac{a-c}{2b}$$` }
    ],
    assumptions: ['sequentielle Mengenwahl', 'glaubwürdige Bindung des Führers', 'Folger beobachtet die Führermenge'],
    appliesWhen: ['Stackelberg-Führerschaft ausdrücklich gegeben ist', 'Rückwärtsinduktion verlangt wird'],
    failsWhen: ['simultane Mengenwahl vorliegt', 'der Führer sich nicht glaubwürdig binden kann'],
    examShortcut: 'Immer rückwärts lösen: zuerst Folger, dann Führer.',
    relatedTaskFamilies: ['stackelberg-backward-induction'],
    commonMistakes: ['Cournot-Reaktionsfunktionen simultan schneiden', 'Folgerreaktion nicht in das Führerproblem einsetzen'],
    anchorIds: ['mikro2.oligopol_stackelberg.vl05.p02.stackelberg-model']
  }),
  card({
    id: 'mikro2.intertemporal_budget_present_value',
    conceptId: 'intertemporaler_konsum',
    officialNotation: 'c_1, c_2, m_1, m_2, r',
    displayFormula: String.raw`$$c_1+\frac{c_2}{1+r}=m_1+\frac{m_2}{1+r}$$`,
    intuition: 'Heute und morgen sind zwei Konsumgüter; die Budgetgerade vergleicht Konsum und Einkommen im gleichen Wertmaßstab.',
    derivationSteps: [
      { label: 'Sparen einführen', text: String.raw`Periode 1 verbindet Konsum und Ersparnis.`, math: String.raw`$$c_1+s=m_1$$` },
      { label: 'Periode 2', text: String.raw`Ersparnis verzinst sich mit $1+r$.`, math: String.raw`$$c_2=m_2+(1+r)s$$` },
      { label: 'S eliminieren', text: 'Setze die Ersparnis aus Periode 1 in Periode 2 ein und löse in Gegenwartswerten.', math: String.raw`$$c_1+\frac{c_2}{1+r}=m_1+\frac{m_2}{1+r}$$` }
    ],
    assumptions: ['zwei Perioden', 'ein Konsumgut je Periode', 'ein einheitlicher Soll- und Habenzins', 'Preis des Konsumguts ist auf 1 normiert'],
    appliesWhen: ['intertemporaler Konsumplan', 'Sparen oder Verschuldung gefragt ist'],
    failsWhen: ['Kreditrestriktionen gelten', 'Soll- und Habenzinsen unterschiedlich sind', 'Unsicherheit statt Zeitperioden gemeint ist'],
    examShortcut: 'Bei Zinssatzaufgaben immer den Ausstattungspunkt markieren; die Budgetgerade dreht um diesen Punkt.',
    relatedTaskFamilies: ['intertemporal-budget', 'interest-rate-effects'],
    commonMistakes: ['$c_1,c_2$ mit Naturzuständen aus Unsicherheit verwechseln', 'Zukunftswerte und Gegenwartswerte mischen'],
    anchorIds: ['mikro2.intertemporaler_konsum.vl12.p05.budget']
  }),
  card({
    id: 'mikro2.expected_utility_two_states',
    conceptId: 'unsicherheit_versicherung',
    officialNotation: '\\pi, c_1, c_2, u(c)',
    displayFormula: String.raw`$$EU=\pi u(c_1)+(1-\pi)u(c_2)$$`,
    intuition: 'Unsicherheit wird als Konsum in verschiedenen Naturzuständen modelliert; Nutzenwerte werden mit Eintrittswahrscheinlichkeiten gewichtet.',
    derivationSteps: [
      { label: 'Naturzustände trennen', text: String.raw`Definiere Konsum im Schadenszustand und im Zustand ohne Schaden.`, math: String.raw`$$c_1=\text{Konsum bei Schaden},\quad c_2=\text{Konsum ohne Schaden}$$` },
      { label: 'Wahrscheinlichkeiten gewichten', text: String.raw`Gewichte jeden Zustandsnutzen mit seiner Wahrscheinlichkeit.`, math: String.raw`$$EU=\pi u(c_1)+(1-\pi)u(c_2)$$` }
    ],
    assumptions: ['zwei Naturzustände', 'VNM-Erwartungsnutzen', 'Wahrscheinlichkeit pi ist bekannt'],
    appliesWhen: ['Entscheidung unter Risiko', 'Versicherungs- oder Lotterieaufgaben'],
    failsWhen: ['Ambiguität ohne bekannte Wahrscheinlichkeiten vorliegt', 'Grenzen der Erwartungsnutzentheorie explizit Thema sind'],
    examShortcut: 'Hier sind $c_1,c_2$ Zustände, nicht Perioden. Das ist der große Notationsstolperstein.',
    relatedTaskFamilies: ['expected-utility', 'insurance-demand'],
    commonMistakes: ['Zustände mit Zeitperioden verwechseln', 'Auszahlungen statt Nutzenwerte gewichten'],
    anchorIds: ['mikro2.unsicherheit_versicherung.vl13.p03.conditional-consumption']
  }),
  card({
    id: 'mikro2.production_efficiency_grts',
    conceptId: 'gleichgewicht_produktion',
    officialNotation: 'GRTS^1_{KL}, GRTS^2_{KL}',
    displayFormula: String.raw`$$GRTS^1_{KL}=GRTS^2_{KL}$$`,
    intuition: 'Produktionseffizienz bedeutet, dass Faktoren nicht mehr zwischen Sektoren verschoben werden können, ohne die Produktion eines Gutes zu senken.',
    derivationSteps: [
      { label: 'Faktorbox', text: 'Verteile Kapital und Arbeit vollständig auf beide Sektoren.', math: String.raw`$$K_1+K_2=K,\quad L_1+L_2=L$$` },
      { label: 'Isoquanten vergleichen', text: 'Effiziente Punkte liegen an Tangentialpunkten der Isoquanten.', math: String.raw`$$GRTS^1_{KL}=GRTS^2_{KL}$$` }
    ],
    assumptions: ['zwei Produktionsfaktoren', 'zwei Gütersektoren', 'Isoquanten sind im relevanten Bereich glatt'],
    appliesWhen: ['Faktor-Box', 'Produktionseffizienz', 'gesamtwirtschaftliches Optimum mit Produktion'],
    failsWhen: ['Ecklösungen oder nicht-konvexe Technologien auftreten', 'nur Tauschökonomie ohne Produktion betrachtet wird'],
    examShortcut: 'Produktionseffizienz ist nur eine Bedingung; gesamtwirtschaftliches Optimum braucht zusätzlich die Konsumseite.',
    graphicalInterpretation: 'Tangentialpunkte der Isoquanten in der Faktor-Box bilden die Effizienzkurve.',
    relatedTaskFamilies: ['production-efficiency', 'factor-box'],
    commonMistakes: ['Produktionseffizienz mit Pareto-Effizienz im Konsum gleichsetzen', 'Vollbeschäftigungsbedingungen vergessen'],
    anchorIds: ['mikro2.gleichgewicht_produktion.vl17.p03.factor-box']
  }),
  card({
    id: 'mikro2.principal_agent_participation_incentive',
    conceptId: 'information_moralhazard',
    officialNotation: 'IR, IC, e, \\bar u',
    displayFormula: String.raw`$$IR:\ E[u(w)|e]\geq \bar u,\qquad IC:\ e\in\arg\max_{e'} E[u(w)|e']-c(e')$$`,
    intuition: 'Ein Vertrag muss den Agenten zur Teilnahme bewegen und gleichzeitig den gewünschten Effort anreizkompatibel machen.',
    derivationSteps: [
      { label: 'Teilnahmebedingung', text: 'Der Agent akzeptiert nur, wenn der erwartete Vertragsnutzen mindestens der Außenoption entspricht.', math: String.raw`$$E[u(w)|e]\geq \bar u$$` },
      { label: 'Anreizbedingung', text: 'Der gewünschte Effort muss für den Agenten selbst optimal sein.', math: String.raw`$$e\in\arg\max_{e'} E[u(w)|e']-c(e')$$` }
    ],
    assumptions: ['Effort ist nicht direkt beobachtbar', 'Output hängt von Effort und Zufall ab', 'Prinzipal gestaltet Vertrag, Agent akzeptiert oder lehnt ab'],
    appliesWhen: ['moral hazard', 'Managerentlohnung', 'Prinzipal-Agenten-Aufgaben'],
    failsWhen: ['Effort perfekt beobachtbar ist', 'Adverse Selektion statt verborgenem Handeln im Mittelpunkt steht'],
    examShortcut: 'In Moral-Hazard-Aufgaben immer beide Nebenbedingungen nennen: Teilnahme und Anreiz.',
    relatedTaskFamilies: ['principal-agent-contracts', 'moral-hazard'],
    commonMistakes: ['nur Gewinn des Prinzipals optimieren', 'Teilnahmebedingung vergessen', 'Adverse Selection und Moral Hazard vermischen'],
    anchorIds: ['mikro2.information_moralhazard.vl20.p02.contract']
  })
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);
