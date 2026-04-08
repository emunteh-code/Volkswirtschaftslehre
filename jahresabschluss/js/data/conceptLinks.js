export const CONCEPT_LINKS = {
  rechnungswesen_intro: { uses: [], usedBy: ['gob_rechtsgrundlagen', 'inventur_inventar_bilanzansatz', 'buchen_konten'] },
  gob_rechtsgrundlagen: { uses: ['rechnungswesen_intro'], usedBy: ['inventur_inventar_bilanzansatz', 'anlagevermoegen', 'umlauf_bewertung_verfahren', 'verbindlichkeiten', 'rueckstellungen'] },
  inventur_inventar_bilanzansatz: { uses: ['rechnungswesen_intro', 'gob_rechtsgrundlagen'], usedBy: ['anlagevermoegen', 'umlauf_bewertung_verfahren', 'verbindlichkeiten', 'rueckstellungen'] },
  buchen_konten: { uses: ['rechnungswesen_intro'], usedBy: ['buchfuehrung_orga', 'anlagevermoegen', 'werkstoffe_erzeugnisse_buchungen', 'umlauf_waren_ust', 'eigenkapital_kapitalgesellschaften', 'eigenkapital_personengesellschaften', 'rechnungsabgrenzung'] },
  buchfuehrung_orga: { uses: ['buchen_konten'], usedBy: ['erfolgsrechnung'] },
  anlagevermoegen: { uses: ['inventur_inventar_bilanzansatz', 'buchen_konten'], usedBy: ['erfolgsrechnung'] },
  umlauf_bewertung_verfahren: { uses: ['inventur_inventar_bilanzansatz'], usedBy: ['werkstoffe_erzeugnisse_buchungen', 'umlauf_waren_ust', 'erfolgsrechnung'] },
  werkstoffe_erzeugnisse_buchungen: { uses: ['umlauf_bewertung_verfahren', 'buchen_konten'], usedBy: ['umlauf_waren_ust', 'erfolgsrechnung'] },
  umlauf_waren_ust: { uses: ['werkstoffe_erzeugnisse_buchungen', 'buchen_konten'], usedBy: ['erfolgsrechnung'] },
  eigenkapital_kapitalgesellschaften: { uses: ['buchen_konten'], usedBy: ['erfolgsrechnung'] },
  eigenkapital_personengesellschaften: { uses: ['buchen_konten'], usedBy: ['erfolgsrechnung'] },
  verbindlichkeiten: { uses: ['inventur_inventar_bilanzansatz', 'buchen_konten'], usedBy: ['rechnungsabgrenzung', 'erfolgsrechnung'] },
  rueckstellungen: { uses: ['gob_rechtsgrundlagen', 'inventur_inventar_bilanzansatz', 'buchen_konten'], usedBy: ['rechnungsabgrenzung', 'erfolgsrechnung'] },
  rechnungsabgrenzung: { uses: ['buchen_konten', 'verbindlichkeiten', 'rueckstellungen'], usedBy: ['erfolgsrechnung'] },
  erfolgsrechnung: { uses: ['anlagevermoegen', 'umlauf_waren_ust', 'eigenkapital_kapitalgesellschaften', 'eigenkapital_personengesellschaften', 'rechnungsabgrenzung'], usedBy: [] }
};
