# Makroökonomik II — Lernportal

Interaktives Lernportal für die Vorlesung Makroökonomik II an der Georg-August-Universität Göttingen.

## Features

- 33 Konzepte mit Theorie, Formeln, interaktiven Aufgaben und Intuitions-Karten
- SM-2 Spaced-Repetition-System (SRS) für optimale Wiederholung
- Interaktive Canvas-Graphen (Budget, Indifferenzkurven, Slutsky, Monopol, Hicks, Marshallianische Nachfrage, Isoquanten)
- Hell/Dunkel-Modus mit sofortiger Graph-Aktualisierung
- Vollständig responsiv (375 px – 1440 px)
- Keine Backend-Abhängigkeiten — Lernfortschritt via localStorage

---

## Entwicklung

### Voraussetzungen

- Node.js ≥ 18
- npm ≥ 9

### Setup

```bash
npm install
npm run dev       # Dev-Server auf http://localhost:3000 mit HMR
npm run build     # TypeScript-Check + Produktions-Build nach dist/
npm run preview   # Vorschau des Produktions-Builds
npm test          # Vitest (einmalig)
npm run test:watch     # Vitest im Watch-Modus
npm run test:coverage  # Coverage-Report (≥80% Threshold)
npm run typecheck      # TypeScript ohne Emit
```

### Ohne Bundler (Legacy)

```bash
python3 -m http.server 8080
# Browser: http://localhost:8080
```

---

## Architektur

```
mikro-portal/
├── index.html            # App-Shell (Vite-Einstiegspunkt)
├── css/styles.css        # Gesamte Styles mit CSS Custom Properties
├── js/                   # Legacy JS-Module (ES2020, no bundler required)
│   ├── main.js           # Bootstrap, globale Exposition (window.__*)
│   ├── state/
│   │   ├── appState.js   # Einfaches EventBus + current/tab/streak
│   │   └── storage.js    # localStorage CRUD
│   ├── data/
│   │   ├── chapters.js   # CHAPTERS-Array + CONTENT-Objekt (alle 33 Konzepte)
│   │   ├── srsConfig.js  # Konstanten (Keys, SM-2-Parameter)
│   │   ├── masteryData.js
│   │   ├── conceptLinks.js
│   │   ├── intuition.js
│   │   ├── fullExams.js
│   │   └── stepProblems.js
│   ├── ui/
│   │   ├── graphEngine.js  # Canvas-Basisklasse (DPR-aware, CSS-var-basiert)
│   │   ├── graphs.js       # 5 interaktive Graphen + Animation + Tooltips
│   │   ├── renderer.js     # Theorie/Formeln/Aufgaben/Intuition-Rendering
│   │   ├── navigation.js   # Sidebar-Aufbau, Badges, Fortschrittsleiste
│   │   ├── rightPanel.js   # Formel- & Verbindungs-Panel
│   │   └── graphPanel.js
│   ├── features/
│   │   ├── exam.js         # Schnelltest (10 Fragen, 20 min)
│   │   ├── fullExam.js     # Vollständige Prüfungssimulation
│   │   ├── examGraphs.js   # Graphen in der Prüfung (Hicks, Marshallian, Isoquant)
│   │   ├── mastery.js      # Beherrschungs-Checklisten
│   │   └── srs.js          # SM-2 SRS-Scheduler (CRUD-abhängig)
│   └── utils/
│       ├── answerChecker.js  # Tolerante Antwort-Auswertung
│       ├── theme.js          # Hell/Dunkel-Toggle + Graph-Neuzeichnung
│       ├── keyboard.js       # Tastaturkürzel
│       ├── toast.js          # Toast-Benachrichtigungen
│       └── mathjax.js        # MathJax-Render-Helper
└── src/                  # TypeScript-Quellen (Vite + Vitest)
    ├── types/index.ts    # Alle geteilten Interfaces
    ├── utils/
    │   ├── answerChecker.ts  # Typisierte Portierung
    │   └── srsAlgorithm.ts   # Pure SM-2-Logik (ohne Seiteneffekte)
    └── tests/
        ├── answerChecker.test.ts
        └── srsAlgorithm.test.ts
```

### CSS Custom Properties (Theming)

Alle Graph- und UI-Farben werden ausschließlich über CSS-Variablen gelesen:

| Variable      | Bedeutung                        |
|---------------|----------------------------------|
| `--bg`        | Seitenhintergrund                |
| `--text`      | Primäre Textfarbe                |
| `--muted`     | Gedämpfte Beschriftungen         |
| `--accent`    | Primäre Akzentfarbe (Lime)       |
| `--accent2`   | Sekundäre Akzentfarbe (Cyan)     |
| `--accent3`   | Tertiäre Akzentfarbe / Warn (Rot)|
| `--border`    | Grid-Linien, Rahmen              |
| `--card`      | Kartenoberfläche                 |
| `--font-mono` | Monospace-Schriftstack           |
| `--font-body` | Body-Schriftstack                |

Dark-Mode ist Standard (`:root`). Light-Mode wird über `body.light-mode` aktiviert.

---

## Neues Konzept hinzufügen

1. **`js/data/chapters.js`** — Eintrag in `CHAPTERS` ergänzen:
   ```js
   { id: 'mein-konzept', title: 'Mein Konzept', cat: 'Grundlagen', num: '1.X' }
   ```

2. Eintrag in `CONTENT` (gleiche Datei) ergänzen:
   ```js
   'mein-konzept': {
     title: 'Mein Konzept',
     oneLiner: 'Kurze Beschreibung',
     theorie: `<p>Erklärung mit $LaTeX$...</p>`,
     formeln: [{ tex: 'y = mx + b', label: 'Gerade' }],
     tasks: [{ q: 'Frage?', steps: [{ text: 'Schritt', accepted: ['Antwort'] }] }],
   }
   ```

3. Optional: Mastery-Items in **`js/data/masteryData.js`**, Intuitions in **`js/data/intuition.js`**, Links in **`js/data/conceptLinks.js`** ergänzen.

4. Für SRS-Tests: kein Aufwand nötig — `getDueCards()` findet das Konzept automatisch nach der ersten Aufgabenlösung.

---

## Tests

```
src/tests/answerChecker.test.ts  — 33 Tests, 100% Coverage
src/tests/srsAlgorithm.test.ts   — 24 Tests, 100% Coverage
```

Tests laufen ohne Browser-Abhängigkeit (Vitest + jsdom). Neue Tests in `src/tests/` ablegen und in `vitest.config.ts` unter `include` registriert halten.
