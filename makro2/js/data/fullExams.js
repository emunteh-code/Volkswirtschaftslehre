// ============================================================
// FULL EXAMS DATA — Makroökonomik II
// Practice exams built from the provided exercises/tutorials
// ============================================================

export const FULL_EXAMS = {
  probe_2025: {
    id: 'probe_2025',
    title: 'Probeklausur Makroökonomik II',
    subtitle: 'Krisztina Kis-Katos, Georg-August-Universität Göttingen',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 16,
        type: 'wf-block',
        preamble: `Beurteile die folgenden Aussagen als wahr oder falsch.`,
        groups: [
          {
            context: 'Offene Volkswirtschaft und Trilemma',
            questions: [
              {
                id: '1_1',
                text: 'Die Exporte eines Landes können niemals größer als sein BIP sein.',
                correct: 'Falsch',
                feedback: 'Falsch. Exporte sind ein Bruttowert und können in sehr offenen Volkswirtschaften das BIP durchaus übersteigen.',
              },
              {
                id: '1_2',
                text: 'Wenn ein Land mehr exportiert als importiert, resultiert zwingend ein Leistungsbilanzüberschuss.',
                correct: 'Falsch',
                feedback: 'Falsch. Zur Leistungsbilanz gehören zusätzlich Primär- und Sekundäreinkommen; deshalb ist ein Überschuss in der Handelsbilanz nicht hinreichend.',
              },
              {
                id: '1_3',
                text: 'Den J-Kurven-Effekt gibt es nur dann, wenn die Marshall-Lerner-Bedingung gilt.',
                correct: 'Falsch',
                feedback: 'Falsch. Die J-Kurve beschreibt die kurzfristige Verschlechterung nach einer Abwertung; die Marshall-Lerner-Bedingung entscheidet über die spätere Verbesserung.',
              },
              {
                id: '1_4',
                text: 'Ein Land kann bei freiem Kapitalverkehr einen festen Wechselkurs und gleichzeitig eine autonome Geldpolitik beibehalten.',
                correct: 'Falsch',
                feedback: 'Falsch. Das widerspricht dem Trilemma der Geld- und Währungspolitik.',
              },
            ],
          },
          {
            context: 'Geldpolitik, Schulden und Wachstum',
            questions: [
              {
                id: '1_5',
                text: 'Wenn die Ricardianische Äquivalenz gilt, erhöht eine Steuersenkung den Konsum nicht zwingend.',
                correct: 'Wahr',
                feedback: 'Wahr. Haushalte sparen dann einen größeren Teil der Steuersenkung, weil sie spätere Steuerlasten antizipieren.',
              },
              {
                id: '1_6',
                text: 'Folgt die Zentralbank der Regel $i_t = i^* + \\alpha(\\pi_t-\\pi^*)$ und gilt $\\pi_t = \\pi^*$, dann bleibt der Zins trotz Arbeitslosigkeit oberhalb des natürlichen Niveaus unverändert.',
                correct: 'Wahr',
                feedback: 'Wahr. Ohne zusätzlichen Arbeitslosigkeits- oder Outputlückenterm ist die Reaktion bei verschwindender Inflationslücke gleich null.',
              },
              {
                id: '1_7',
                text: 'Im Solow-Modell ohne technischen Fortschritt führt eine dauerhaft höhere Sparquote zu einer dauerhaft höheren Wachstumsrate des BIP pro Kopf.',
                correct: 'Falsch',
                feedback: 'Falsch. Die Sparquote erhöht das Niveau von Kapital und Output pro Kopf, aber nicht die dauerhafte Wachstumsrate im Steady State.',
              },
              {
                id: '1_8',
                text: 'Im Solow-Modell mit Bevölkerungswachstum, aber ohne technischen Fortschritt, wächst das Produktionsniveau im Steady State mit derselben Rate wie die Beschäftigung.',
                correct: 'Wahr',
                feedback: 'Wahr. Ohne technischen Fortschritt bleibt Output pro Kopf konstant; deshalb wächst das Produktionsniveau im Steady State mit der Beschäftigung.',
              },
            ],
          },
        ],
      },

      {
        label: 'Aufgabe 2',
        points: 12,
        type: 'text-block',
        title: 'Wechselkurse und Kaufkraftparität',
        preamble: `Verwende die Angaben aus der Aufgabenstellung und arbeite sauber mit Kaufkraftparitaet und Wechselkursnotierung.`,
        questions: [
          {
            id: '2a',
            points: 3,
            type: 'text',
            text: 'Land A sei das Inland. Wenn 1 Schilling 3 Mark kostet: Wie lautet der anfängliche Wechselkurs in Mengennotierung aus Sicht von Land A?',
            correct: ['1/3', '0.333', '0,333', 'einsdrittel'],
            feedback: String.raw`Aus Sicht von Land A gilt in Mengennotierung: $$E_{2017} = \frac{1}{3}\ \text{Schilling pro Mark}.$$`,
          },
          {
            id: '2b',
            points: 4,
            type: 'text',
            text: 'Bei $\pi_A = 10\%$ und $\pi_B = 20\%$: Wie groß ist der nominale PPP-Kurs am 1.1.2018 in Mengennotierung?',
            correct: ['0.364', '0,364', '0.3636'],
            feedback: String.raw`Unter absoluter KKP in Mengennotierung gilt $$E_{2018} = E_{2017}\cdot\frac{1+\pi_B}{1+\pi_A} = \frac{1}{3}\cdot\frac{1{,}20}{1{,}10} \approx 0{,}364.$$`,
          },
          {
            id: '2c',
            points: 2,
            type: 'text',
            text: 'Wenn tatsächlich 1 Mark = 0,4 Schilling bringt: Ist die Mark real auf- oder abgewertet?',
            correct: ['aufgewertet', 'überbewertet', 'ueberbewertet'],
            feedback: 'Da der tatsächliche Mengenkurs über dem PPP-Kurs liegt, ist die Mark real aufgewertet.',
          },
          {
            id: '2d',
            points: 3,
            type: 'text',
            text: 'Ein Big Mac kostet 4,59 GBP in Großbritannien und 5,79 USD in den USA. Wie groß ist der implizite PPP-Kurs USD/GBP?',
            correct: ['1.261', '1,261', '1.26', '1,26'],
            feedback: String.raw`Der implizite PPP-Kurs lautet $$E_{\text{PPP}} = \frac{5{,}79}{4{,}59} \approx 1{,}261\ \text{USD pro GBP}.$$`,
          },
        ],
      },

      {
        label: 'Aufgabe 3',
        points: 12,
        type: 'text-block',
        title: 'Offene Volkswirtschaft',
        preamble: `Arbeite mit den Standardgleichungen der offenen Gueternachfrage.`,
        questions: [
          {
            id: '3a',
            points: 3,
            type: 'text',
            text: 'Welche Wirkung haben Steuersenkungen bei konstantem Wechselkurs und konstanten Staatsausgaben in der offenen Volkswirtschaft auf Produktion und Handelsbilanz?',
            correct: ['produktion steigt handelsbilanz verschlechtert', 'produktion steigt', 'handelsbilanz verschlechtert', 'defizit steigt'],
            feedback: 'Steuersenkungen erhöhen Konsum und Produktion; wegen höherer Importe verschlechtert sich die Handelsbilanz.',
          },
          {
            id: '3b',
            points: 3,
            type: 'text',
            text: String.raw`Bestimme den Nenner des offenen Staatsausgabenmultiplikators bei $C = c_0 + c_1(Y-T)$, $I = b_0 + b_1Y - b_2i$, $IM = q_1Y$ und $X = x_1Y^*$.`,
            correct: ['1-c1-b1+q1', '1-c_1-b_1+q_1'],
            feedback: String.raw`Aus $$Y = c_0 + c_1(Y-T) + b_0 + b_1Y - b_2i + G + x_1Y^* - q_1Y$$ folgt $$Y(1-c_1-b_1+q_1) = \dots$$ Der Nenner lautet also $1-c_1-b_1+q_1$.`,
          },
          {
            id: '3c',
            points: 3,
            type: 'text',
            text: 'Ist der offene Staatsausgabenmultiplikator größer oder kleiner als in der geschlossenen Volkswirtschaft?',
            correct: ['kleiner', 'smaller'],
            feedback: 'Er ist kleiner, weil das Importleck einen Teil der Zusatznachfrage ins Ausland abfließen lässt.',
          },
          {
            id: '3d',
            points: 3,
            type: 'text',
            text: 'Was passiert bei erfüllter Marshall-Lerner-Bedingung langfristig mit den Nettoexporten nach einer Abwertung?',
            correct: ['steigen', 'verbessern', 'nehmen zu'],
            feedback: 'Bei erfüllter Marshall-Lerner-Bedingung steigen die Nettoexporte langfristig; die Handelsbilanz verbessert sich.',
          },
        ],
      },

      {
        label: 'Aufgabe 4',
        points: 9,
        type: 'text-block',
        title: 'Mundell-Fleming und Trilemma',
        preamble: `Gehe von ungedeckter Zinsparitaet und einer kleinen offenen Volkswirtschaft aus.`,
        questions: [
          {
            id: '4a',
            points: 3,
            type: 'text',
            text: 'Bei 50% Wahrscheinlichkeit einer 10%-Abwertung: Wie hoch ist die erwartete Abwertungsrate?',
            correct: ['5', '5%', '5prozent'],
            feedback: String.raw`Der Erwartungswert beträgt $$0{,}5\cdot 0 + 0{,}5\cdot 10\% = 5\%.$$`,
          },
          {
            id: '4b',
            points: 3,
            type: 'text',
            text: 'Um wie viele Prozentpunkte muss der inländische Zinssatz steigen, um die Parität zu halten?',
            correct: ['5', '5%', '5prozentpunkte'],
            feedback: 'Nach Zinsparität muss die erwartete Abwertung durch einen ebenso großen Zinsaufschlag kompensiert werden: 5 Prozentpunkte.',
          },
          {
            id: '4c',
            points: 3,
            type: 'text',
            text: 'Welche drei Ziele des Trilemmas können nicht gleichzeitig erreicht werden?',
            correct: ['fester wechselkurs freier kapitalverkehr autonome geldpolitik', 'fixer wechselkurs freier kapitalverkehr autonome geldpolitik', 'trilemma'],
            feedback: 'Nicht gleichzeitig erreichbar sind: fester Wechselkurs, freier Kapitalverkehr und autonome Geldpolitik.',
          },
        ],
      },

      {
        label: 'Aufgabe 5',
        points: 12,
        type: 'text-block',
        title: 'Zeitinkonsistenz und Staatsverschuldung',
        preamble: `Nutze die angegebenen Gleichungen direkt.`,
        questions: [
          {
            id: '5a',
            points: 3,
            type: 'text',
            text: String.raw`Im Barro-Gordon-Modell mit $L = 1{,}5\pi_t^2 + u_t^2$ und $\pi_t = \pi_t^e - (u_t - 0{,}05)$: Welche Inflationsrate wählt die Zentralbank bei $\pi_t^e = 0$?`,
            correct: ['0.02', '0,02', '2', '2%'],
            feedback: String.raw`Aus $u_t = 0{,}05 - \pi_t$ folgt $$L(\pi_t)=1{,}5\pi_t^2+(0{,}05-\pi_t)^2.$$ Minimierung ergibt $$\pi_t = 0{,}02,$$ also 2%.`,
          },
          {
            id: '5b',
            points: 3,
            type: 'text',
            text: 'Welche Arbeitslosenquote folgt daraus?',
            correct: ['0.03', '0,03', '3', '3%'],
            feedback: String.raw`Mit $u_t = 0{,}05 - \pi_t$ und $\pi_t = 0{,}02$ ergibt sich $$u_t = 0{,}03,$$ also 3%.`,
          },
          {
            id: '5c',
            points: 3,
            type: 'text',
            text: 'Wie hoch ist die zusätzliche Steuer in t=4, wenn eine einmalige Steuersenkung eine Schuld von 100 bei r = 10% erzeugt?',
            correct: ['133.1', '133,1'],
            feedback: String.raw`Die Schuld wird drei Perioden verzinst: $$100\cdot 1{,}1^3 = 133{,}1.$$`,
          },
          {
            id: '5d',
            points: 3,
            type: 'text',
            text: 'Wie lautet eine Standardformel für die Veränderung der Schuldenquote in Abhängigkeit von Zins, Wachstum und Primärsaldo?',
            correct: ['(r-g)b-ps', 'deltab=(r-g)b-ps', 'schuldenquote'],
            feedback: String.raw`Eine gängige Näherung lautet $$\Delta b \approx (r-g)b - ps,$$ also Schneeballeffekt minus Primärüberschuss.`,
          },
        ],
      },

      {
        label: 'Aufgabe 6',
        points: 9,
        type: 'text-block',
        title: 'Wachstum und Produktionsfunktion',
        preamble: `Nutze die Solow- und Cobb-Douglas-Standardergebnisse.`,
        questions: [
          {
            id: '6a',
            points: 3,
            type: 'text',
            text: String.raw`Bei $Y = K^{0{,}5}N^{0{,}5}$ mit $K = 21$ und $N = 7$: Wie groß ist die Produktion?`,
            correct: ['12.12', '12,12', '12.1'],
            feedback: String.raw`Es gilt $$Y = \sqrt{21\cdot 7} = \sqrt{147} \approx 12{,}12.$$`,
          },
          {
            id: '6b',
            points: 3,
            type: 'text',
            text: 'Wenn bei derselben Funktion beide Inputs verdreifacht werden: Welche Art von Skalenerträgen liegt vor?',
            correct: ['konstant', 'konstante skalenerträge', 'crs'],
            feedback: 'Die Exponenten addieren sich zu 1. Verdreifacht man beide Inputs, verdreifacht sich auch der Output: konstante Skalenerträge.',
          },
          {
            id: '6c',
            points: 3,
            type: 'text',
            text: String.raw`Im Solow-Modell mit technischem Fortschritt ($\alpha = 0{,}4$, $s = 11\%$, $g_N = 3\%$, $g_A = 1\%$, $\delta = 7\%$): Wie groß ist die Goldene-Regel-Sparquote?`,
            correct: ['0.4', '0,4', '40', '40%'],
            feedback: 'Bei Cobb-Douglas gilt in diesem Kontext die Goldene-Regel-Sparquote $s_{gold} = \\alpha = 0{,}4$, also 40%.',
          },
        ],
      },
    ],
  },
};
