// ============================================================
// INTUITION DATA — Makroökonomik I
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const INTUITION = {
  vgr: {
    core: 'Das BIP misst den Wert der gesamten wirtschaftlichen Aktivität eines Landes. Es ist die Summe aus Konsum, Investitionen, Staatsausgaben und Nettoexporten.',
    analogy: 'Wie das Einkommen eines Haushalts: Es zeigt, wie viel produziert und verdient wurde.',
    exam: [
      { if: 'Reales BIP gesucht', then: 'Deflator nutzen: BIP_real = BIP_nom / P' },
      { if: 'Arbeitslosenquote u', then: 'Anteil der Arbeitslosen an allen Erwerbspersonen.' }
    ],
    bridge: 'VGR-Daten sind das Thermometer der Wirtschaft.'
  },
  guetermarkt: {
    core: 'Die Nachfrage bestimmt das Angebot. Jede zusätzliche Ausgabe erzeugt eine Kette von Einkommen und neuen Ausgaben (Multiplikator).',
    analogy: 'Ein Stein, der ins Wasser fällt: Er erzeugt Wellen, die sich über den ganzen See ausbreiten.',
    exam: [
      { if: 'c1 steigt', then: 'Multiplikator steigt. Fiskalpolitik wird effektiver.' },
      { if: 'Steuersenkung vs. G-Anstieg', then: 'Staatsausgaben wirken stärker, da Steuersenkungen teils gespart werden.' }
    ],
    bridge: 'Der Multiplikator verstärkt autonome Impulse.'
  },
  finanzmarkt: {
    core: 'Der Zins regelt das Gleichgewicht zwischen Geldhaltung und Wertpapieranlage.',
    analogy: 'Ein Preis für Bequemlichkeit: Je höher der Zins, desto teurer ist es, Geld unverzinst in der Tasche zu lassen.',
    exam: [
      { if: 'Zentralbank kauft Wertpapiere', then: 'Geldmenge steigt, Zins sinkt.' },
      { if: 'Einkommen Y steigt', then: 'Geldnachfrage steigt, Zins steigt bei fixer Geldmenge.' }
    ],
    bridge: 'Geldnachfrage ist Liquiditätspräferenz.'
  },
  islm: {
    core: 'IS-LM verbindet Realwirtschaft und Finanzmärkte. Es zeigt, wie Zins und Einkommen gleichzeitig bestimmt werden.',
    analogy: 'Zwei Waagschalen: Die eine (IS) muss den Gütermarkt balancieren, die andere (LM) den Geldmarkt.',
    exam: [
      { if: 'Fiskalexpansion G↑', then: 'IS schiebt nach rechts. Y↑, i↑ (bei steigendem LM) oder Y↑ (bei horizontalem LM).' },
      { if: 'Zinssenkung i↓', then: 'LM schiebt nach unten. Investitionen steigen, Y steigt.' }
    ],
    bridge: 'Politik-Mix: Zusammenwirken von Fiskal- und Geldpolitik.'
  }
};
