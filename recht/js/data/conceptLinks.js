export const CONCEPT_LINKS = {
  was_ist_recht: { uses: [], usedBy: ['privatrecht', 'methodik'] },
  privatrecht: { uses: ['was_ist_recht'], usedBy: ['methodik', 'willenserklaerung'] },
  methodik: { uses: ['was_ist_recht', 'privatrecht'], usedBy: ['willenserklaerung', 'dissens', 'anfechtung', 'agb', 'schuldrecht_intro', 'schadensersatz', 'ruecktritt', 'verbraucherwiderruf'] },
  willenserklaerung: { uses: ['privatrecht', 'methodik'], usedBy: ['dissens', 'anfechtung', 'trennung_abstraktion', 'geschaeftsfaehigkeit', 'stellvertretung', 'verbraucherwiderruf'] },
  dissens: { uses: ['willenserklaerung', 'methodik'], usedBy: ['anfechtung', 'trennung_abstraktion'] },
  anfechtung: { uses: ['willenserklaerung', 'methodik', 'dissens'], usedBy: ['trennung_abstraktion'] },
  trennung_abstraktion: { uses: ['willenserklaerung', 'anfechtung'], usedBy: ['schuldrecht_intro'] },
  geschaeftsfaehigkeit: { uses: ['willenserklaerung'], usedBy: ['stellvertretung'] },
  stellvertretung: { uses: ['willenserklaerung', 'geschaeftsfaehigkeit', 'methodik'], usedBy: ['schuldrecht_intro'] },
  agb: { uses: ['willenserklaerung', 'methodik', 'privatrecht'], usedBy: ['schuldrecht_intro'] },
  schuldrecht_intro: { uses: ['trennung_abstraktion', 'stellvertretung', 'agb', 'methodik'], usedBy: ['schadensersatz', 'ruecktritt', 'verbraucherwiderruf'] },
  schadensersatz: { uses: ['schuldrecht_intro', 'methodik'], usedBy: ['ruecktritt'] },
  ruecktritt: { uses: ['schuldrecht_intro', 'schadensersatz', 'methodik'], usedBy: ['verbraucherwiderruf'] },
  verbraucherwiderruf: { uses: ['schuldrecht_intro', 'willenserklaerung', 'methodik'], usedBy: [] }
};
