export const CONCEPT_LINKS = {
  finanz_denkweise: { uses: [], usedBy: ['liquiditaetsplanung', 'kapitalmarkt_bewertung', 'institutionen_marktunvollkommenheit'] },
  liquiditaetsplanung: { uses: ['finanz_denkweise'], usedBy: ['intertemporale_wahl', 'kapitalwert_fisher'] },
  kapitalmarkt_bewertung: { uses: ['finanz_denkweise'], usedBy: ['intertemporale_wahl', 'kapitalwert_fisher', 'wacc_leverage'] },
  institutionen_marktunvollkommenheit: { uses: ['finanz_denkweise', 'kapitalmarkt_bewertung'], usedBy: ['bezugsrecht', 'modigliani_miller'] },
  intertemporale_wahl: { uses: ['liquiditaetsplanung', 'kapitalmarkt_bewertung'], usedBy: ['kapitalwert_fisher', 'auf_abzinsen'] },
  kapitalwert_fisher: { uses: ['intertemporale_wahl'], usedBy: ['auf_abzinsen', 'renten_endwert', 'izf_kapitalwertfunktion'] },
  auf_abzinsen: { uses: ['intertemporale_wahl', 'kapitalwert_fisher'], usedBy: ['renten_endwert', 'izf_kapitalwertfunktion'] },
  renten_endwert: { uses: ['auf_abzinsen', 'kapitalwert_fisher'], usedBy: ['izf_kapitalwertfunktion', 'izf_grenzen'] },
  izf_kapitalwertfunktion: { uses: ['auf_abzinsen', 'renten_endwert', 'kapitalwert_fisher'], usedBy: ['izf_grenzen', 'unsicherheit'] },
  izf_grenzen: { uses: ['izf_kapitalwertfunktion'], usedBy: ['unsicherheit', 'wacc_leverage'] },
  unsicherheit: { uses: ['kapitalwert_fisher', 'izf_grenzen'], usedBy: ['eigenkapitalkosten', 'fremdkapitalkosten'] },
  bezugsrecht: { uses: ['institutionen_marktunvollkommenheit'], usedBy: ['eigenkapitalkosten', 'fremdkapitalkosten'] },
  eigenkapitalkosten: { uses: ['bezugsrecht', 'unsicherheit'], usedBy: ['wacc_leverage'] },
  fremdkapitalkosten: { uses: ['bezugsrecht', 'unsicherheit'], usedBy: ['wacc_leverage'] },
  wacc_leverage: { uses: ['kapitalmarkt_bewertung', 'eigenkapitalkosten', 'fremdkapitalkosten'], usedBy: ['modigliani_miller'] },
  modigliani_miller: { uses: ['institutionen_marktunvollkommenheit', 'wacc_leverage'], usedBy: [] }
};
