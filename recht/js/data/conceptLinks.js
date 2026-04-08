export const CONCEPT_LINKS = {
  was_ist_recht: { uses: [], usedBy: ['privatrecht', 'methodik'] },
  privatrecht: { uses: ['was_ist_recht'], usedBy: ['methodik', 'willenserklaerung'] },
  methodik: { uses: ['was_ist_recht', 'privatrecht'], usedBy: ['willenserklaerung', 'dissens', 'anfechtung', 'schadensersatz'] },
  willenserklaerung: { uses: ['privatrecht', 'methodik'], usedBy: ['dissens', 'anfechtung', 'trennung_abstraktion', 'stellvertretung'] },
  dissens: { uses: ['willenserklaerung'], usedBy: ['anfechtung', 'trennung_abstraktion'] },
  anfechtung: { uses: ['willenserklaerung', 'dissens'], usedBy: ['trennung_abstraktion'] },
  trennung_abstraktion: { uses: ['willenserklaerung', 'dissens', 'anfechtung'], usedBy: ['schuldrecht_intro'] },
  geschaeftsfaehigkeit: { uses: ['willenserklaerung'], usedBy: ['stellvertretung'] },
  stellvertretung: { uses: ['willenserklaerung', 'geschaeftsfaehigkeit'], usedBy: ['schuldrecht_intro', 'agb'] },
  agb: { uses: ['willenserklaerung', 'methodik'], usedBy: ['schuldrecht_intro'] },
  schuldrecht_intro: { uses: ['trennung_abstraktion', 'stellvertretung', 'agb'], usedBy: ['schadensersatz', 'ruecktritt', 'verbraucherwiderruf'] },
  schadensersatz: { uses: ['schuldrecht_intro', 'methodik'], usedBy: ['ruecktritt', 'verbraucherwiderruf'] },
  ruecktritt: { uses: ['schuldrecht_intro', 'schadensersatz'], usedBy: ['verbraucherwiderruf'] },
  verbraucherwiderruf: { uses: ['schuldrecht_intro', 'ruecktritt'], usedBy: [] }
};

