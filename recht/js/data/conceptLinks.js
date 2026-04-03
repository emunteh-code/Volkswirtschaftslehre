export const CONCEPT_LINKS = {
  was_ist_recht: { uses: [], usedBy: ['privatrecht', 'methodik'] },
  privatrecht: { uses: ['was_ist_recht'], usedBy: ['methodik', 'willenserklaerung'] },
  methodik: { uses: ['was_ist_recht', 'privatrecht'], usedBy: ['willenserklaerung', 'dissens_anfechtung', 'schadensersatz'] },
  willenserklaerung: { uses: ['privatrecht', 'methodik'], usedBy: ['dissens_anfechtung', 'trennung_abstraktion', 'stellvertretung'] },
  dissens_anfechtung: { uses: ['willenserklaerung'], usedBy: ['trennung_abstraktion'] },
  trennung_abstraktion: { uses: ['willenserklaerung', 'dissens_anfechtung'], usedBy: ['schuldrecht_intro'] },
  geschaeftsfaehigkeit: { uses: ['willenserklaerung'], usedBy: ['stellvertretung'] },
  stellvertretung: { uses: ['willenserklaerung', 'geschaeftsfaehigkeit'], usedBy: ['schuldrecht_intro', 'agb'] },
  agb: { uses: ['willenserklaerung', 'methodik'], usedBy: ['schuldrecht_intro'] },
  schuldrecht_intro: { uses: ['trennung_abstraktion', 'stellvertretung', 'agb'], usedBy: ['schadensersatz', 'ruecktritt_widerruf'] },
  schadensersatz: { uses: ['schuldrecht_intro', 'methodik'], usedBy: ['ruecktritt_widerruf'] },
  ruecktritt_widerruf: { uses: ['schuldrecht_intro', 'schadensersatz'], usedBy: [] }
};

