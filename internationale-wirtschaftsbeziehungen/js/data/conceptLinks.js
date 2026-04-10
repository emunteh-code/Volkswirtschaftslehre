export const CONCEPT_LINKS = {
  handelsfakten: { uses: [], usedBy: ['ricardo', 'heckscher_ohlin', 'krugman', 'gravitation'] },
  ricardo: { uses: ['handelsfakten'], usedBy: ['tarifmodell', 'heckscher_ohlin'] },
  heckscher_ohlin: { uses: ['handelsfakten', 'ricardo'], usedBy: ['verteilung_handel', 'krugman'] },
  verteilung_handel: { uses: ['heckscher_ohlin'], usedBy: ['wto_integration'] },
  krugman: { uses: ['handelsfakten', 'heckscher_ohlin'], usedBy: ['gravitation', 'wto_integration'] },
  gravitation: { uses: ['krugman', 'handelsfakten'], usedBy: ['wto_integration'] },
  tarifmodell: { uses: ['ricardo'], usedBy: ['quoten_sanktionen', 'wto_integration'] },
  quoten_sanktionen: { uses: ['tarifmodell'], usedBy: ['wto_integration'] },
  wto_integration: { uses: ['tarifmodell', 'quoten_sanktionen', 'verteilung_handel', 'gravitation'], usedBy: ['wechselkurssysteme'] },
  wechselkurssysteme: { uses: ['wto_integration'], usedBy: ['zinsparitaet', 'kaufkraftparitaet', 'trilemma'] },
  zinsparitaet: { uses: ['wechselkurssysteme'], usedBy: ['monetaerer_ansatz', 'overshooting', 'trilemma'] },
  kaufkraftparitaet: { uses: ['wechselkurssysteme'], usedBy: ['monetaerer_ansatz', 'balassa_samuelson'] },
  monetaerer_ansatz: { uses: ['zinsparitaet', 'kaufkraftparitaet'], usedBy: ['overshooting', 'trilemma'] },
  overshooting: { uses: ['zinsparitaet', 'monetaerer_ansatz'], usedBy: ['trilemma'] },
  trilemma: { uses: ['wechselkurssysteme', 'zinsparitaet', 'monetaerer_ansatz', 'overshooting'], usedBy: ['balassa_samuelson'] },
  balassa_samuelson: { uses: ['kaufkraftparitaet', 'trilemma'], usedBy: [] }
};
