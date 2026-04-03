export const CONCEPT_LINKS = {
  handelsfakten: { uses: [], usedBy: ['ricardo', 'heckscher_ohlin', 'krugman'] },
  ricardo: { uses: ['handelsfakten'], usedBy: ['heckscher_ohlin', 'tarifmodell'] },
  heckscher_ohlin: { uses: ['ricardo'], usedBy: ['krugman', 'wto_integration'] },
  krugman: { uses: ['handelsfakten', 'heckscher_ohlin'], usedBy: ['wto_integration'] },
  tarifmodell: { uses: ['ricardo'], usedBy: ['quoten_sanktionen', 'wto_integration'] },
  quoten_sanktionen: { uses: ['tarifmodell'], usedBy: ['wto_integration'] },
  wto_integration: { uses: ['tarifmodell', 'quoten_sanktionen', 'krugman'], usedBy: ['wechselkurssysteme'] },
  wechselkurssysteme: { uses: ['wto_integration'], usedBy: ['paritaeten', 'trilemma'] },
  paritaeten: { uses: ['wechselkurssysteme'], usedBy: ['monetaerer_ansatz', 'overshooting', 'trilemma'] },
  monetaerer_ansatz: { uses: ['paritaeten'], usedBy: ['overshooting', 'trilemma'] },
  overshooting: { uses: ['paritaeten', 'monetaerer_ansatz'], usedBy: ['trilemma'] },
  trilemma: { uses: ['wechselkurssysteme', 'paritaeten', 'monetaerer_ansatz', 'overshooting'], usedBy: [] }
};

