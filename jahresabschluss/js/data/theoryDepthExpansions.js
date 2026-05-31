// Source-distilled depth (Jahresabschluss VL) — merged in chapters.js

const block = (title, body) => `<div class="section-block"><h3>${title}</h3>${body}</div>`;
const warn = (t, b) => `<div class="warn-box"><strong>${t}:</strong> ${b}</div>`;

export const THEORY_DEPTH_EXPANSIONS = {
  eigenkapital_personengesellschaften: {
    html:
      block('Eigenkapital Personengesellschaft', `
      <p>Kapitalkonten der Gesellschafter (z.B. Kommandokapital) bilden das Eigenkapital. Entnahmen und Einlagen laufen über Privatkonten — nicht über Gewinn- und Verlustrechnung als „Gehalt“.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Geschäftsvorfall → Soll/Haben → Wirkung auf Kapital- und Erfolgskonten. GoB: Vollständigkeit, Richtigkeit, periodengerechte Abgrenzung.</p>
      ${warn('Entnahme', 'Entnahme mindert Eigenkapital, ist aber kein Aufwand in der GuV.')}
    `)
  },
  umlauf_waren_ust: {
    html:
      block('USt auf Wareneinkauf', `
      <p>Vorsteuer auf Einkauf ist aktivisches Durchlaufkonto; Verbindlichkeit beim Lieferanten netto + USt. Bei Ist-Versteuerung: USt erst bei Zahlung ans Finanzamt.</p>
    `) +
      block('Klausurpfad', `
      <p>Buchungssatz mit Vorsteuerkonto; Abschluss: Vorsteuer mit Finanzamt verrechnen. Periodengerecht: Umsatzsteuer-Zahllast zum Stichtag.</p>
    `)
  },
  anlagevermoegen: {
    html:
      block('Anschaffungskosten und AfA', `
      <p>Anschaffungskosten = Kaufpreis + Anschaffungsnebenkosten − Skonti. Planmäßige AfA linear oder degressiv nach Nutzungsdauer (AfA-Tabelle).</p>
    `) +
      block('Prüfungsstandard', `
      <p>Investition: Aktivierung Anlagevermögen; jährliche AfA: Aufwand GuV, Wertminderung Bilanz. Sonder-AfA nur bei gesetzlicher/tatsächlicher Begründung.</p>
    `)
  },
  buchen_konten: {
    html:
      block('Kontenrahmen-Logik', `
      <p>Aktiva: Soll = Zugang. Passiva/EK: Haben = Zugang. Erfolgskonten: Aufwand Soll, Ertrag Haben — Abschluss über GuV auf Eigenkapital.</p>
    `) +
      block('Klausurtransfer', `
      <p>Immer beide Seiten der Buchung und die Bilanzwirkung nennen; „nur GuV“ reicht in Klausuren nicht.</p>
    `)
  }
};
