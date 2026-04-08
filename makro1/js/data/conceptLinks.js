// ============================================================
// CONCEPT LINKS — Makroökonomik I
// Prerequisite and successor relationships between benchmark concepts
// ============================================================

export const CONCEPT_LINKS = {
  makro_rahmen: { uses: [], usedBy: ['vgr', 'guetermarkt', 'geldnachfrage', 'arbeitsmarkt'] },
  vgr: { uses: ['makro_rahmen'], usedBy: ['guetermarkt', 'geldnachfrage', 'arbeitsmarkt'] },
  guetermarkt: { uses: ['makro_rahmen', 'vgr'], usedBy: ['multiplikator', 'islm', 'politikmix'] },
  multiplikator: { uses: ['guetermarkt'], usedBy: ['islm', 'politikmix'] },
  geldnachfrage: { uses: ['makro_rahmen', 'vgr'], usedBy: ['banken', 'islm', 'realzins_fisher_erwartungen', 'realzins_risikopraemie_krisenkanal'] },
  banken: { uses: ['geldnachfrage'], usedBy: ['realzins_risikopraemie_krisenkanal', 'politikmix'] },
  islm: { uses: ['guetermarkt', 'geldnachfrage'], usedBy: ['politikmix', 'realzins_fisher_erwartungen', 'realzins_risikopraemie_krisenkanal', 'islmpc'] },
  politikmix: { uses: ['islm', 'multiplikator'], usedBy: ['islmpc'] },
  realzins_fisher_erwartungen: { uses: ['geldnachfrage', 'islm'], usedBy: ['realzins_risikopraemie_krisenkanal', 'islmpc', 'erwartungen'] },
  realzins_risikopraemie_krisenkanal: { uses: ['geldnachfrage', 'banken', 'islm', 'realzins_fisher_erwartungen'], usedBy: ['islmpc', 'erwartungen'] },
  arbeitsmarkt: { uses: ['makro_rahmen', 'vgr'], usedBy: ['phillips', 'islmpc'] },
  phillips: { uses: ['arbeitsmarkt'], usedBy: ['islmpc', 'erwartungen'] },
  islmpc: { uses: ['islm', 'politikmix', 'phillips', 'realzins_fisher_erwartungen', 'realzins_risikopraemie_krisenkanal'], usedBy: ['erwartungen'] },
  erwartungen: { uses: ['realzins_fisher_erwartungen', 'realzins_risikopraemie_krisenkanal', 'phillips', 'islmpc'], usedBy: [] }
};
