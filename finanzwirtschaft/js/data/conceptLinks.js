export const CONCEPT_LINKS = {
  finanz_denkweise: { uses: [], usedBy: ['liquiditaetsplanung', 'kapitalmarkt_institutionen'] },
  liquiditaetsplanung: { uses: ['finanz_denkweise'], usedBy: ['intertemporale_wahl', 'kapitalwert_fisher'] },
  kapitalmarkt_institutionen: { uses: ['finanz_denkweise'], usedBy: ['intertemporale_wahl', 'kapitalwert_fisher', 'kapitalstruktur'] },
  intertemporale_wahl: { uses: ['liquiditaetsplanung', 'kapitalmarkt_institutionen'], usedBy: ['kapitalwert_fisher', 'auf_abzinsen'] },
  kapitalwert_fisher: { uses: ['intertemporale_wahl'], usedBy: ['auf_abzinsen', 'renten_endwert', 'izf_kapitalwertfunktion'] },
  auf_abzinsen: { uses: ['intertemporale_wahl', 'kapitalwert_fisher'], usedBy: ['renten_endwert', 'izf_kapitalwertfunktion'] },
  renten_endwert: { uses: ['auf_abzinsen', 'kapitalwert_fisher'], usedBy: ['izf_kapitalwertfunktion', 'izf_grenzen'] },
  izf_kapitalwertfunktion: { uses: ['auf_abzinsen', 'renten_endwert', 'kapitalwert_fisher'], usedBy: ['izf_grenzen', 'unsicherheit'] },
  izf_grenzen: { uses: ['izf_kapitalwertfunktion'], usedBy: ['unsicherheit', 'kapitalstruktur'] },
  unsicherheit: { uses: ['kapitalwert_fisher', 'izf_grenzen'], usedBy: ['kapitalkosten'] },
  bezugsrecht: { uses: ['kapitalmarkt_institutionen'], usedBy: ['kapitalkosten', 'kapitalstruktur'] },
  kapitalkosten: { uses: ['bezugsrecht', 'unsicherheit'], usedBy: ['kapitalstruktur'] },
  kapitalstruktur: { uses: ['kapitalmarkt_institutionen', 'bezugsrecht', 'kapitalkosten'], usedBy: [] }
};
