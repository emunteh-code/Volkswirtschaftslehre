// platform-added-drill — trap MCQs from authored theory (Recht Gutachten patterns)

export const CONCEPT_SCHNELLTEST_DURATION_MS = 5 * 60 * 1000;

export const CONCEPT_SCHNELLTEST_ITEMS = [
  {
    id: 'recht_cc_annahme',
    concept_id: 'willenserklaerung',
    stem: 'A macht schriftliches Angebot. B liest es, willigt innerlich zu, schweigt. Vertrag?',
    choices: [
      {
        id: 'ja',
        label: 'Ja — innerer Wille genügt',
        trap_feedback: 'Falle: Annahme braucht empfangsbedürftige Kundgabe (§ 130 BGB) — inneres Zustimmen reicht nicht.'
      },
      {
        id: 'nein',
        label: 'Nein — keine Annahmeerklärung',
        is_correct: true
      },
      {
        id: 'widerruf',
        label: 'Ja — Schweigen gilt als Annahme',
        trap_feedback: 'Falle: Schweigen ist grundsätzlich kein Willensäußerung — Ausnahmen (Handelsbrauch) gesondert prüfen.'
      }
    ],
    explain: '<p>Vertragsschluss: <strong>Annahme</strong> muss nach außen kundgetan werden — § 130 BGB.</p>'
  },
  {
    id: 'recht_cc_280_rueck',
    concept_id: 'schuldrecht_intro',
    stem: 'Sachmangel beim Kauf — Käufer will zuerst Schadensersatz prüfen. Korrekter Einstieg?',
    choices: [
      {
        id: '437',
        label: 'Sofort § 437 (Rücktritt)',
        trap_feedback: 'Falle: Rücktritt ist eigenes Institut — Schadensersatz primär § 280 Abs. 1.'
      },
      {
        id: '280',
        label: 'Schuldverhältnis → § 280 Abs. 1 BGB',
        is_correct: true
      },
      {
        id: '325',
        label: '§ 325 BGB (Rechtsfolgen allgemein)',
        trap_feedback: 'Falle: § 325 ist Meta-Norm — konkreter Anspruch über § 280 ff.'
      }
    ],
    explain: '<p>Schadensersatz bei Pflichtverletzung: <strong>§ 280 Abs. 1</strong> — Rücktritt separat über § 437.</p>'
  },
  {
    id: 'recht_cc_gutachten',
    concept_id: 'was_ist_recht',
    stem: 'Gutachten: Was gehört an den Anfang einer Klausurantwort?',
    choices: [
      {
        id: 'meinung',
        label: 'Eigene moralische Wertung des Falls',
        trap_feedback: 'Falle: Fehlstart — Gutachten beginnt mit Tatbestand/Norm, nicht Meinung.'
      },
      {
        id: 'norm',
        label: 'Sachverhalt strukturieren → gesetzliche Anknüpfung',
        is_correct: true
      },
      {
        id: 'ergebnis',
        label: 'Sofort „Ja/Nein" als Ergebnis',
        trap_feedback: 'Falle: Ergebnis am Ende — vorher Subsumtion.'
      }
    ],
    explain: '<p>Gutachtenstil: <strong>Norm → Subsumtion → Ergebnis</strong> — keine Alltagsgerechtigkeit zuerst.</p>'
  }
];
