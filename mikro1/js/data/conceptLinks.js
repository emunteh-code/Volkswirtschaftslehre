// ============================================================
// CONCEPT LINKS — Mikroökonomik I
// Prerequisite and successor relationships between all 33 concepts
// ============================================================

export const CONCEPT_LINKS = {
 kmm:      { uses:[], usedBy:['budget','praeferenz'] },
 budget:   { uses:['kmm'], usedBy:['hausopt','slutsky','cv_ev'] },
 praeferenz:{ uses:['kmm'], usedBy:['indiff','ordinal'] },
 indiff:   { uses:['praeferenz'], usedBy:['grs','hausopt'] },
 ordinal:  { uses:['praeferenz'], usedBy:['cobbd','lagrange'] },
 grs:      { uses:['indiff'], usedBy:['hausopt','lagrange','slutsky'] },
 lagrange: { uses:['grs','budget'], usedBy:['cobbd','ces_u','hausopt'] },
 hausopt:  { uses:['lagrange','grs','budget'], usedBy:['marshall','slutsky','cv_ev'] },
 cobbd:    { uses:['lagrange','ordinal'], usedBy:['homothet','marshall','slutsky'] },
 ces_u:    { uses:['lagrange'], usedBy:['skalener'] },
 homothet: { uses:['cobbd'], usedBy:['marshall'] },
 marshall: { uses:['hausopt','homothet'], usedBy:['elast','slutsky','anfang'] },
 elast:    { uses:['marshall'], usedBy:['cobbd'] },
 hicks:    { uses:['hausopt'], usedBy:['ausgaben','slutsky','cv_ev'] },
 ausgaben: { uses:['hicks'], usedBy:['shephard','cv_ev'] },
 shephard: { uses:['ausgaben'], usedBy:['indnutzen','cv_ev'] },
 indnutzen:{ uses:['hausopt','shephard'], usedBy:['lambda'] },
 lambda:   { uses:['lagrange','indnutzen'], usedBy:['slutsky'] },
 slutsky:  { uses:['hicks','marshall','lambda'], usedBy:['anfang','arbeit','cv_ev'] },
 anfang:   { uses:['slutsky'], usedBy:['arbeit'] },
 arbeit:   { uses:['anfang','slutsky'], usedBy:[] },
 cv_ev:    { uses:['hicks','ausgaben','slutsky'], usedBy:[] },
 produktion:{ uses:[], usedBy:['grts','skalener','kosten'] },
 grts:     { uses:['produktion'], usedBy:['kosten'] },
 skalener: { uses:['produktion','ces_u'], usedBy:['kosten','gk_dk'] },
 kosten:   { uses:['grts','skalener'], usedBy:['gk_dk','gewinn'] },
 gk_dk:    { uses:['kosten','skalener'], usedBy:['gewinn'] },
 gewinn:   { uses:['gk_dk','kosten'], usedBy:['markt','monopol'] },
 markt:    { uses:['gewinn'], usedBy:['monopol'] },
 monopol:  { uses:['markt','gewinn'], usedBy:[] },
};
