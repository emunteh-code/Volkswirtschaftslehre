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
      <p>Immer beide Seiten der Buchung und die Bilanzwirkung nennen; „nur GuV" reicht in Klausuren nicht.</p>
    `)
  },
  rechnungswesen_intro: {
    html:
      block('In der Klausur: Rechnungswesen', `
      <p>GoB: Vollständigkeit, Richtigkeit, Klarheit, Fortführung, Periodengerechtigkeit. Bilanz = Vermögen (Aktiva) vs. Kapital (Passiva). GuV = Aufwendungen vs. Erträge — periodenbezogen.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Geschäftsvorfall → Buchungssatz → Bilanz/GuV-Wirkung. Inventur/Inventar als Bestandsnachweis vor Abschluss.</p>
      ${warn('GuV vs. Cashflow', 'Periodenerfolg ≠ Liquidität — Abschreibungen ohne Zahlungsabfluss.')}
    `)
  },
  buchfuehrung_orga: {
    html:
      block('In der Klausur: Buchführung', `
      <p>Doppelte Buchführung: jeder Vorgang Soll und Haben. Kontenrahmen SKR03/04 — Sachkonten vs. Personenkonten. Beleg → Buchung → Journal → Hauptbuch → SuSa → Bilanz/GuV.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Organisation: wer bucht, wer kontrolliert (Funktionstrennung). Periodengerechte Abgrenzung: aktive/passive Rechnungsabgrenzung.</p>
    `)
  },
  umlauf_bewertung_verfahren: {
    html:
      block('In der Klausur: Bewertung Umlauf', `
      <p>Niederstwertprinzip: Anschaffungskosten oder niedrigerer beizulegender Wert. FIFO/LIFO/Durchschnitt — Bestandsverbrauch und Endbestand. Stichtagsprinzip am Bilanzstichtag.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Bewertungsverfahren Auswirkung auf GuV (Materialaufwand) und Bilanz (Vorräte) erklären — nicht nur Methode nennen.</p>
      ${warn('Permanenz', 'Bewertungsmethode über Jahre beibehalten — Wechsel nur begründet.')}
    `)
  },
  werkstoffe_erzeugnisse_buchungen: {
    html:
      block('In der Klausur: Werkstoffe', `
      <p>Einkauf auf Lager: Wareneingang an Verbindlichkeiten (+ Vorsteuer). Verbrauch: Materialaufwand an Lager. Fertigung: Fertigungsmaterial, Fertigungslöhne, Gemeinkosten → Erzeugnisse.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Bestandsveränderungen in GuV (Erhöhung mindert Aufwand). USt immer getrennt buchen.</p>
    `)
  },
  eigenkapital_kapitalgesellschaften: {
    html:
      block('In der Klausur: EK Kapitalgesellschaft', `
      <p>Gezeichnetes Kapital, Kapitalrücklage, Gewinnrücklagen, Bilanzgewinn. Ausschüttung: Gewinnausschüttung an Bank (Vermögensminderung, nicht GuV-Aufwand). Jahresüberschuss aus GuV → Gewinnvortrag.</p>
    `) +
      block('Prüfungsstandard', `
      <p>Kapitalerhöhung: Bareinlage vs. Sacheinlage — Aktivierung und EK-Erhöhung. Thesaurierung vs. Ausschüttung Wirkung auf Liquidität und EK.</p>
      ${warn('Ausschüttung', 'Dividende mindert EK/Bank, erscheint nicht als Aufwand in GuV.')}
    `)
  },
  verbindlichkeiten: {
    html:
      block('In der Klausur: Verbindlichkeiten', `
      <p>LLF vs. kLF nach Restlaufzeit. Rückstellungen: ungewisse Verbindlichkeiten (Steuer, Pension, Gewährleistung) — Bildung GuV-Aufwand, Auflösung Ertrag. Abgrenzung zu Rücklagen (EK).</p>
    `) +
      block('Prüfungsstandard', `
      <p>Buchungssatz Verbindlichkeit vs. Rückstellung; Bewertung zum Erfüllungsbetrag. Passivierungswahl nur bei gesetzlichen Vorgaben.</p>
    `)
  }
};
