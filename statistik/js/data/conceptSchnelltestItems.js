// platform-added-drill — trap MCQs from authored theory (Statistik VL patterns)

export const CONCEPT_SCHNELLTEST_DURATION_MS = 5 * 60 * 1000;

export const CONCEPT_SCHNELLTEST_ITEMS = [
  {
    id: 'st_cc_z_vs_t',
    concept_id: 'testen',
    stem: 'Stichprobe \\(n=25\\), \\(\\sigma\\) <em>unbekannt</em>, Normalität plausibel. Welcher Test ist standardmäßig korrekt?',
    choices: [
      {
        id: 'z',
        label: 'z-Test mit \\(s\\) statt \\(\\sigma\\)',
        trap_feedback: 'Falle: Ohne bekannte \\(\\sigma\\) und kleinem \\(n\\) ist der t-Test die VL-Regel — nicht der z-Test.'
      },
      {
        id: 't',
        label: 'Einstichproben-t-Test mit \\(n-1\\) Freiheitsgraden',
        is_correct: true
      },
      {
        id: 'chi',
        label: '\\(\\chi^2\\)-Anpassungstest',
        trap_feedback: 'Falle: \\(\\chi^2\\)-Tests prüfen Verteilungsanpassung — nicht den Mittelwert einer Normalstichprobe.'
      }
    ],
    explain: '<p>Bei unbekannter Standardabweichung: <strong>t-Test</strong> mit \\(t_{n-1}\\)-Verteilung. z-Test nur mit begründet bekannter \\(\\sigma\\) oder sehr großem \\(n\\).</p>'
  },
  {
    id: 'st_cc_p_value',
    concept_id: 'testen',
    stem: 'Du erhältst \\(p = 0{,}03\\) bei \\(\\alpha = 5\\%\\). Was ist die korrekte Entscheidungssprache?',
    choices: [
      {
        id: 'prob_h0',
        label: '\\(H_0\\) ist zu 3\\,% wahrscheinlich',
        trap_feedback: 'Falle: Der p-Wert ist keine Wahrscheinlichkeit für \\(H_0\\) — sondern die Evidenz gegen \\(H_0\\) unter Annahme \\(H_0\\) wahr.'
      },
      {
        id: 'reject',
        label: '\\(H_0\\) verwerfen (\\(p < \\alpha\\))',
        is_correct: true
      },
      {
        id: 'accept',
        label: '\\(H_0\\) ist bewiesen',
        trap_feedback: 'Falle: Nicht-Verwerfen heißt nicht „\\(H_0\\) wahr" — nur „nicht genug Evidenz gegen \\(H_0\\)".'
      }
    ],
    explain: '<p>\\(p < \\alpha\\) → <strong>\\(H_0\\) verwerfen</strong>. p-Wert korrekt als kleinstes \\(\\alpha\\) formulieren, bei dem noch abgelehnt würde.</p>'
  },
  {
    id: 'st_cc_ci',
    concept_id: 'schaetzen_eigenschaften_intervalle',
    stem: 'Ein 95\\,-\\% Konfidenzintervall für \\(\\mu\\) bedeutet in korrekter Frequentist-Sprache …',
    choices: [
      {
        id: 'mu_in',
        label: '\\(\\mu\\) liegt mit 95\\,% Wahrscheinlichkeit im Intervall',
        trap_feedback: 'Falle: Nach der Stichprobe ist \\(\\mu\\) fix — das Intervall ist zufällig. Richtig: 95\\,% der Intervalle über viele Wiederholungen enthalten \\(\\mu\\).'
      },
      {
        id: 'freq',
        label: 'Bei vielen Wiederholungen enthalten ~95\\,% der Intervalle den wahren \\(\\mu\\)',
        is_correct: true
      },
      {
        id: 'test',
        label: 'Das Intervall ist identisch mit dem Ablehnungsbereich eines Tests',
        trap_feedback: 'Falle: Test–KI-Dualität gilt für ein festes \\(\\mu_0\\) — nicht als Bedeutung des KI für \\(\\mu\\) nach Beobachtung.'
      }
    ],
    explain: '<p>KI-Interpretation: <strong>long-run Coverage</strong> über Wiederholungen — nicht posterior-Wahrscheinlichkeit für \\(\\mu\\).</p>'
  }
];
