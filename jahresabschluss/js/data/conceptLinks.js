export const CONCEPT_LINKS = {
  rechnungswesen_intro: { uses: [], usedBy: ['gob_inventur', 'buchen_konten'] },
  gob_inventur: { uses: ['rechnungswesen_intro'], usedBy: ['anlagevermoegen', 'umlauf_werkstoffe', 'umlauf_waren_ust', 'fremdkapital'] },
  buchen_konten: { uses: ['rechnungswesen_intro'], usedBy: ['buchfuehrung_orga', 'anlagevermoegen', 'umlauf_waren_ust', 'eigenkapital', 'rechnungsabgrenzung'] },
  buchfuehrung_orga: { uses: ['buchen_konten'], usedBy: ['erfolgsrechnung'] },
  anlagevermoegen: { uses: ['gob_inventur', 'buchen_konten'], usedBy: ['erfolgsrechnung'] },
  umlauf_werkstoffe: { uses: ['gob_inventur', 'buchen_konten'], usedBy: ['umlauf_waren_ust', 'erfolgsrechnung'] },
  umlauf_waren_ust: { uses: ['umlauf_werkstoffe', 'buchen_konten'], usedBy: ['erfolgsrechnung'] },
  eigenkapital: { uses: ['buchen_konten'], usedBy: ['erfolgsrechnung'] },
  fremdkapital: { uses: ['gob_inventur', 'buchen_konten'], usedBy: ['rechnungsabgrenzung', 'erfolgsrechnung'] },
  rechnungsabgrenzung: { uses: ['buchen_konten', 'fremdkapital'], usedBy: ['erfolgsrechnung'] },
  erfolgsrechnung: { uses: ['anlagevermoegen', 'umlauf_waren_ust', 'eigenkapital', 'rechnungsabgrenzung'], usedBy: [] }
};
