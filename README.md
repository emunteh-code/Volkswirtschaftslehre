# VWL Lernportal

Statisches Multi-Module-Portal auf Basis von HTML, CSS und JavaScript.

## Struktur

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   ├── common.css
│   │   └── portal.css
│   └── js/
│       ├── common.js
│       ├── live-portal-bridge.js
│       ├── modules.js
│       ├── portal-core/
│       │   ├── app.js
│       │   ├── features/
│       │   ├── state/
│       │   └── ui/
│       └── r-lab.js
├── mikro1/
├── mikro2/
├── makro1/
├── makro2/
├── statistik/
├── oekonometrie/
├── mathematik/
├── finanzwirtschaft/
├── internationale-wirtschaftsbeziehungen/
├── jahresabschluss/
├── recht/
├── r/
└── politisches-system-brd/
```

## Was bereits live ist

- `mikro1/`: bestaetigtes Vollportal aus dem bestehenden Mikro-I-Projekt
- `mikro2/`: Live-Portal mit Mikro-II-Themenlinie; der offizielle Kurskorpus liegt jetzt unter `source-materials/Mikroökonomik II/`. Die Oberfläche ist teilweise quellengestützt, aber noch nicht vollständig entlang aller 20 Vorlesungen rekonstruiert; Status: `docs/audits/mikro2-official-source-ingest-pass-1.md`
- `makro2/`: bestaetigtes Vollportal mit coursework-basierten Makro-II-Inhalten
- `index.html`: Landing Page mit Moduluebersicht und Filterung
- Landing Page: progress-aware Resume-Bereich fuer alle Live-Portale
- Alle weiteren Modulordner: dokumentgebundene Live-Portale auf Basis der jeweiligen Kursordner
- `R-Lab`: wiederverwendbare Browseroberflaeche mit WebR-Fallback fuer Statistik, Oekonometrie und R
- `portal-core/`: geteilte App-Logik fuer Live-Portale statt mehrfach kopierter Shell-Dateien

## Erweiterung

1. In [`assets/js/modules.js`](assets/js/modules.js) ein neues Modul anlegen.
2. Fuer neue Module ein Verzeichnis mit `index.html` nach dem bestehenden Modul-Shell-Muster anlegen.
3. Fuer R-Kurse `rLab.lessons` im Modul-Objekt definieren.
4. Fuer voll ausgebaute Spezialportale lokale `courseConfig.js` und Daten beibehalten, aber die geteilte Logik aus `assets/js/portal-core/` verwenden.
5. Fuer jedes neue Modul einen direkten `href` auf den Modulordner setzen und die Inhalte in `assets/js/module-content.js` dokumentgebunden pflegen.

## Hinweise

- Technische UI, Monospace-Elemente und Coding-Bereiche verwenden den SF-Mono-Stack.
- Das R-Lab versucht WebR dynamisch zu laden; wenn das im Browser nicht gelingt, bleibt ein Check/Hinweis/Solutions-Fallback aktiv.
- `clearAllData()` leert jetzt nur noch modulbezogene Keys statt den kompletten Browser-Storage.
- `mikro1/` und `makro2/` nutzen jetzt eine geteilte App-Core-Struktur plus Portal-Hub-Switcher.
- `makro2/` wurde mit `npm test` und `npm run build` verifiziert.
- Exam-OS-Zielbild und aktueller Gap-Stand: `docs/audits/exam-operating-system-current-state-2026-05-27.md` und `docs/architecture/exam-operating-system-spec.md`.
- Wiederholbarer Exam-OS-Audit: `node tools/exam-os/audit-current-state.mjs --write`.
- Wiederholbares Quellenregister: `node tools/exam-os/build-source-registry.mjs --write`.
- Wiederholbarer Seitenanker-Index: `node tools/exam-os/build-source-page-index.mjs --write`.
- Exam-OS-Readiness-Gate: `node tools/exam-os/check-readiness.mjs --write`.
