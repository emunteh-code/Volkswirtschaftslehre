// Source-distilled depth (Recht VL / Übungslogik) — merged in chapters.js

const section = (title, body) => `
  <div class="section-block">
    <h3>${title}</h3>
    ${body}
  </div>
`;
const warn = (title, body) => `<div class="warn-box" data-warning-placement="rail"><strong>${title}</strong> ${body}</div>`;

export const THEORY_DEPTH_EXPANSIONS = {
  privatrecht: {
    html: section('Sachenrecht und Familienrecht als Randzonen', `
      <p>Im Grundkurs bleibt der Fokus auf AT und Schuldrecht; Sachenrecht (§§ 929 ff. BGB) wird über Trennung/Abstraktion berührt. Familien- und Erbrecht sind eigene Bücher — in Klausuren selten Startpunkt, aber für Systematik nennbar.</p>
    `) + section('Öffentliches Recht kurz abgrenzen', `
      <p>Hoheitliche Gewalt (Polizei, Steuern) folgt anderen Normen und Gerichtswegen. Verwechslung „BGB = alles Recht“ ist ein häufiger Anfängerfehler.</p>
      ${warn('Prüfungsstart', 'Bei zivilrechtlichen Fällen nicht mit Verwaltungsrecht oder Strafrecht beginnen, wenn die Fallfrage privatrechtlich ist.')}
    `),
    formeln: [{ label: 'Normfinder', eq: 'AT → Schuldrecht → ggf. Sachenrecht', desc: 'Systematische Suchreihenfolge.' }]
  },
  willenserklaerung: {
    html: section('Zugang und empfangsbedürftige Erklärungen', `
      <p>Willenserklärungen werden mit Zugang wirksam, wenn sie empfangsbedürftig sind (§ 130 BGB). Bei Angeboten und Annahmen ist der Zugang beim Empfänger maßgeblich — nicht das Absendedatum allein.</p>
    `) + section('Angebot vs. invitatio ad offerendum', `
      <p>Supermarkt-Preisschilder, Schaufenster und Auktionskataloge sind regelmäßig nur Aufforderungen zur Abgabe eines Angebots. Das bindende Angebot kommt erst durch die Kundgabe des Kunden (z.B. an der Kasse).</p>
      ${warn('Schweigen', 'Schweigen ist keine Annahme (§ 151 BGB Ausnahmen beachten).')}
    `),
    formeln: [{ label: 'Zugang', eq: '§ 130 BGB', desc: 'Wirksamkeit empfangsbedürftiger WE.' }]
  },
  trennung_abstraktion: {
    html: section('Beispielkette Kauf und Übereignung', `
      <p>Kaufvertrag (§ 433) begründet die Pflicht zur Übereignung; Eigentumsübergang erfordert ein wirksames Verfügungsgeschäft (§ 929) und ggf. gutgläubigen Erwerb (§ 932 ff.).</p>
    `) + section('Bereicherungsrecht bei Abstraktion', `
      <p>Ist das Verpflichtungsgeschäft unwirksam, kann Eigentum dennoch übergegangen sein. Rückabwicklung läuft dann über §§ 812 ff. BGB (Leistungskondiktion), nicht „automatisch“ über Rücktritt vom Kauf.</p>
      ${warn('Kurzschluss', 'Erst Verpflichtungs- und Verfügungsgeschäft getrennt prüfen, dann Bereicherung — nicht umgekehrt.')}
    `),
    formeln: [{ label: 'Übereignung', eq: '§ 929 BGB', desc: 'Verfügung über bewegliche Sache.' }]
  },
  geschaeftsfaehigkeit: {
    html: section('§ 107 BGB — lediglich rechtlich vorteilhaft', `
      <p>Ein Geschäft ist nur dann ohne Zustimmung wirksam, wenn der Minderjährige rechtlich keinen Nachteil erleidet (keine Verpflichtung, kein Risiko). Ein günstiger Kaufpreis allein reicht nicht, wenn Raten oder Verbindlichkeiten entstehen.</p>
    `) + section('§ 110 BGB — Taschengeld', `
      <p>Leistungen, die der Minderjährige aus Mitteln bewirkt, die ihm zur freien Verfügung überlassen wurden, sind wirksam. Grenze: Umfang des überlassenen Vermögens.</p>
      ${warn('Zustimmung', 'Fehlende Zustimmung macht das Geschäft schwebend unwirksam (§ 108), nicht automatisch nichtig.')}
    `),
    formeln: [{ label: 'Taschengeld', eq: '§ 110 BGB', desc: 'Wirksamkeit aus eigenen Mitteln.' }]
  }
};
