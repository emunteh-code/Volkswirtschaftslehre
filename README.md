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
├── makro2/
├── makro1/
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
- `makro2/`: bestaetigtes Vollportal mit coursework-basierten Makro-II-Inhalten
- `index.html`: Landing Page mit Moduluebersicht und Filterung
- Landing Page: progress-aware Resume-Bereich fuer alle Live-Portale
- Alle weiteren Modulordner: dokumentgebundene Live-Portale auf Basis der jeweiligen Kursordner
- `R-Lab`: wiederverwendbare Browseroberflaeche mit WebR-Fallback fuer Statistik, Oekonometrie und R
- `portal-core/`: geteilte App-Logik fuer Live-Portale statt mehrfach kopierter Shell-Dateien

## Erweiterung

1. In [`assets/js/modules.js`](/Users/enowmunteh/Documents/New project/assets/js/modules.js) ein neues Modul anlegen.
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
