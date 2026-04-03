// ============================================================
// CONCEPT LINKS — Makroökonomik I
// Prerequisite and successor relationships between benchmark concepts
// ============================================================

export const CONCEPT_LINKS = {
  makro_rahmen: { uses: [], usedBy: ['vgr', 'guetermarkt', 'geldnachfrage', 'arbeitsmarkt'] },
  vgr: { uses: ['makro_rahmen'], usedBy: ['guetermarkt', 'geldnachfrage', 'arbeitsmarkt'] },
  guetermarkt: { uses: ['makro_rahmen', 'vgr'], usedBy: ['multiplikator', 'islm', 'politikmix'] },
  multiplikator: { uses: ['guetermarkt'], usedBy: ['islm', 'politikmix'] },
  geldnachfrage: { uses: ['makro_rahmen', 'vgr'], usedBy: ['banken', 'islm', 'realzins'] },
  banken: { uses: ['geldnachfrage'], usedBy: ['realzins', 'politikmix'] },
  islm: { uses: ['guetermarkt', 'geldnachfrage'], usedBy: ['politikmix', 'realzins', 'islmpc'] },
  politikmix: { uses: ['islm', 'multiplikator'], usedBy: ['islmpc'] },
  realzins: { uses: ['geldnachfrage', 'banken', 'islm'], usedBy: ['islmpc', 'erwartungen'] },
  arbeitsmarkt: { uses: ['makro_rahmen', 'vgr'], usedBy: ['phillips', 'islmpc'] },
  phillips: { uses: ['arbeitsmarkt'], usedBy: ['islmpc', 'erwartungen'] },
  islmpc: { uses: ['islm', 'politikmix', 'phillips', 'realzins'], usedBy: ['erwartungen'] },
  erwartungen: { uses: ['realzins', 'phillips', 'islmpc'], usedBy: [] }
};
