// ============================================================
// INTUITION DATA — Recht
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const INTUITION = {
  rechtsgeschaeft: {
    core: 'Ein Vertrag ist wie ein Händeschütteln per Gesetz. Beide Seiten müssen sich über die wesentlichen Punkte einig sein.',
    analogy: 'Ein Tanz: Einer bittet (Angebot), der andere willigt ein (Annahme). Wenn einer nur nickt, ohne dass der andere es sieht, gibt es keinen Tanz.',
    exam: [
      { if: 'Angebot prüfen', then: 'Muss so bestimmt sein, dass ein einfaches "Ja" zum Vertrag führt.' },
      { if: 'Inhaltliche Übereinstimmung', then: 'Angebot und Annahme müssen sich decken (Konsens).' }
    ],
    bridge: 'Privatautonomie bedeutet, seine Rechtsverhältnisse selbst zu gestalten.'
  },
  vertretung: {
    core: 'Der Vertreter ist das Werkzeug des Vertretenen. Er spricht für ihn, aber die Folgen treffen den Vertretenen.',
    analogy: 'Ein Avatar in einem Videospiel: Du drückst die Knöpfe (Vertreter), aber die Punkte gehen auf dein Konto (Vertretener).',
    exam: [
      { if: 'Stellvertretung prüfen', then: 'Eigene WE, in fremdem Namen, mit Vertretungsmacht.' },
      { if: 'Offenkundigkeit fehlt', then: 'Eigengeschäft des Handelnden (er wird selbst Vertragspartner).' }
    ],
    bridge: 'Vertretung erweitert den Aktionsradius von Personen.'
  }
};
