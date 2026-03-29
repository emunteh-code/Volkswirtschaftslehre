const sourceRoot = "/Users/enowmunteh/Documents/Uni Göttingen VWL/Module";
const BRAND_ACCENT = "#486b19";

export const MODULES = [
  {
    slug: "mikro1",
    title: "Mikroökonomik I",
    shortTitle: "Mikroökonomik I",
    summary: "Haushalts- und Unternehmenstheorie mit Aufgaben, Graphen und klausurnahem Training.",
    accent: BRAND_ACCENT,
    type: "quantitative",
    status: "live",
    href: "./mikro1/index.html",
    materials: [
      "Referenzportal aus dem bestehenden Mikro-I-Projekt",
      "Portal-HTML in Module/Mikrooekonomik I/mikro1_portal_v3.html",
      "Interaktive Grafiken, SRS-Wiederholung und Schnelltest"
    ],
    sourcePath: `${sourceRoot}/Mikroökonomik I`,
    portalState: {
      progressKey: "mikro_progress_v2",
      srsKey: "mikro_srs_v1",
      lastKey: "mikro_last_v2",
      chapterCount: 33
    }
  },
  {
    slug: "makro2",
    title: "Makroökonomik II",
    shortTitle: "Makroökonomik II",
    summary: "Offene Makrooekonomik, Wirtschaftspolitik und Wachstum mit Aufgaben, Intuition, Graphen und Exam-Modi.",
    accent: BRAND_ACCENT,
    type: "quantitative",
    status: "live",
    href: "./makro2/index.html",
    materials: [
      "Bereits migriertes Lernportal mit Kapitelstruktur, Aufgaben und Vollklausur",
      "Graphen und technische Beschriftungen im SF-Mono-Stack",
      "Interaktive Wiederholung, Schnelltest und Lernstand"
    ],
    sourcePath: `${sourceRoot}/Makroökonomik II`,
    portalState: {
      progressKey: "makro2_progress_v1",
      srsKey: "makro2_srs_v1",
      lastKey: "makro2_last_v1",
      chapterCount: 34
    }
  },
  {
    slug: "makro1",
    title: "Makroökonomik I",
    shortTitle: "Makroökonomik I",
    summary: "Kennzahlen, Guetermarkt, Finanzmaerkte, IS-LM, Arbeitsmarkt und klausurnahes Training in einem Portal.",
    accent: BRAND_ACCENT,
    type: "quantitative",
    status: "live",
    href: "./makro1/index.html",
    materials: [
      "Haupt- und Nachtermin-Klausuren aus 2018 und 2022 plus Probeklausur",
      "Zusammenfassungen zu VL1 bis VL8 fuer die saubere Stofflinie",
      "Tutorien und Uebungsblaetter fuer Kurzfragen, Rechenwege und Diagrammtraining"
    ],
    sourcePath: `${sourceRoot}/Makroökonomik I`
  },
  {
    slug: "statistik",
    title: "Statistik",
    shortTitle: "Statistik",
    summary: "Statistik von Datenbeschreibung ueber Inferenz bis Regression mit Aufgaben, Visualisierungen und R-Training.",
    accent: BRAND_ACCENT,
    type: "quantitative_coding",
    status: "live",
    href: "./statistik/index.html",
    materials: [
      "Vorlesungsfolien VL_01 bis VL_14, Uebungen, Grossuebungen und Tutorien",
      "Coding-nahe Statistikpraxis mit Wiederholung, Verteilungslogik und klausurrelevantem Datenmaterial",
      "Datensaetze wie titanic.csv, GrowthSW.csv, HousePrices.csv und Zuckerrohr.csv"
    ],
    sourcePath: `${sourceRoot}/Statistik`,
    rLab: {
      intro: "Diese Aufgaben greifen die typischen R-Arbeitsweisen aus Tutorium und Uebung auf. Wenn die Runtime nicht verfuegbar ist, bleibt die gleiche Uebungslogik mit Musterabgleich und Hinweisen erhalten.",
      lessons: [
        {
          id: "statistik-basics",
          title: "Tutorium 1: Vektoren, Schleifen und Funktionen",
          source: "Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_01_-_R-Loesung.R",
          prompt: "Lege v als 1:20 an, multipliziere die Werte mit 1.5, setze Werte groesser als 10 auf 1 und kapsle die Logik in einer Funktion fun().",
          starterCode: `v <- 1:20\n\na <- rep(0, length(v))\nfor (i in 1:length(v)) {\n  a[i] <- v[i] * 1.5\n}\n\n# Aufgabe: Werte > 10 auf 1 setzen\n# Aufgabe: Funktion fun() definieren\n\nprint(a)\n`,
          hints: [
            "Nutze ein if innerhalb einer for-Schleife wie im Tutorium.",
            "Die Funktion soll einen Vektor entgegennehmen und ihn veraendert zurueckgeben."
          ],
          checks: [
            { mode: "code", type: "includes", value: "fun <- function" },
            { mode: "code", type: "includes", value: "if (a[i] > 10)" },
            { mode: "code", type: "includes", value: "return(" }
          ],
          runtimeChecks: [
            { expression: "exists('fun') && is.function(fun)", label: "fun() ist definiert" },
            { expression: "exists('a') && any(a == 1)", label: "Der Vektor a wurde mit 1ern angepasst" },
            { expression: "exists('fun') && identical(fun(c(4, 12, 20)), c(4, 1, 1))", label: "fun() ersetzt Werte > 10 korrekt" }
          ],
          solution: `v <- 1:20\n\na <- rep(0, length(v))\nfor (i in 1:length(v)) {\n  a[i] <- v[i] * 1.5\n}\n\nfor (i in 1:length(a)) {\n  if (a[i] > 10) {\n    a[i] <- 1\n  }\n}\n\nfun <- function(einvektor) {\n  for (i in 1:length(einvektor)) {\n    if (einvektor[i] > 10) {\n      einvektor[i] <- 1\n    }\n  }\n  return(einvektor)\n}\n\nprint(fun(v))\n`
        },
        {
          id: "statistik-histogramme",
          title: "Tutorium 2: Histogramme und Haeufigkeiten",
          source: "Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_02_-_R-Loesung.R",
          prompt: "Lege Gewicht_m als c(52, 61, 66, 68, 72, 75, 79, 83, 91, 97) an. Erzeuge mit breaks = c(40, 70, 100, 130) ein Histogrammobjekt ohne Plot, speichere absolute und relative Haeufigkeiten und gib die kumulierten absoluten Haeufigkeiten aus.",
          starterCode: `Gewicht_m <- c(52, 61, 66, 68, 72, 75, 79, 83, 91, 97)\n\n# Aufgabe: Histogrammobjekt ohne Plot bauen\nhist_obj <- NULL\n\n# Aufgabe: absolute, relative und kumulierte Haeufigkeiten berechnen\nabs_h <- NULL\nrel_h <- NULL\nkum_abs <- NULL\n\nprint(abs_h)\nprint(rel_h)\nprint(kum_abs)\n`,
          hints: [
            "Die Tutoriumsloesung nutzt hist(..., plot = FALSE), um auf counts zuzugreifen.",
            "Relative Haeufigkeiten entstehen ueber counts / length(Gewicht_m)."
          ],
          checks: [
            { mode: "code", type: "includes", value: "hist(Gewicht_m, breaks = c(40, 70, 100, 130), plot = FALSE)" },
            { mode: "code", type: "includes", value: "hist_obj$counts" },
            { mode: "code", type: "includes", value: "cumsum(abs_h)" }
          ],
          runtimeChecks: [
            { expression: "exists('hist_obj') && is.list(hist_obj)", label: "Histogrammobjekt wurde erzeugt" },
            { expression: "exists('abs_h') && length(abs_h) == 3 && sum(abs_h) == length(Gewicht_m)", label: "Absolute Haeufigkeiten stimmen" },
            { expression: "exists('rel_h') && abs(sum(rel_h) - 1) < 1e-10", label: "Relative Haeufigkeiten summieren sich zu 1" },
            { expression: "exists('kum_abs') && identical(as.numeric(kum_abs), as.numeric(cumsum(abs_h)))", label: "Kumulierte Haeufigkeiten stimmen" }
          ],
          solution: `Gewicht_m <- c(52, 61, 66, 68, 72, 75, 79, 83, 91, 97)\nhist_obj <- hist(Gewicht_m, breaks = c(40, 70, 100, 130), plot = FALSE)\nabs_h <- hist_obj$counts\nrel_h <- hist_obj$counts / length(Gewicht_m)\nkum_abs <- cumsum(abs_h)\n\nprint(abs_h)\nprint(rel_h)\nprint(kum_abs)\n`
        },
        {
          id: "statistik-stichprobe",
          title: "Tutorium 3: Ziehen, tabellieren und relative Haeufigkeiten",
          source: "Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_03_-_R-Loesung.R",
          prompt: "Setze set.seed(5), ziehe mit sample(0:6, 20, replace = TRUE) eine Stichprobe, berechne absolute und relative Haeufigkeiten und speichere zusaetzlich die Stichprobensumme.",
          starterCode: `# Aufgabe: Reproduzierbare Stichprobe ziehen\nStichprobe <- NULL\n\n# Aufgabe: absolute und relative Haeufigkeiten bilden\nabs_h <- NULL\nrel_h <- NULL\nstichprobensumme <- NULL\n\nprint(Stichprobe)\nprint(abs_h)\nprint(rel_h)\nprint(stichprobensumme)\n`,
          hints: [
            "Die Tutoriumsloesung nutzt set.seed(5) und sample(0:6, 20, replace = TRUE).",
            "Fuer relative Haeufigkeiten hilft prop.table(table(Stichprobe))."
          ],
          checks: [
            { mode: "code", type: "includes", value: "set.seed(5)" },
            { mode: "code", type: "includes", value: "sample(0:6, 20, replace = TRUE)" },
            { mode: "code", type: "includes", value: "prop.table(table(Stichprobe))" }
          ],
          runtimeChecks: [
            { expression: "exists('Stichprobe') && length(Stichprobe) == 20", label: "Stichprobe wurde erzeugt" },
            { expression: "exists('abs_h') && sum(abs_h) == 20", label: "Absolute Haeufigkeiten stimmen" },
            { expression: "exists('rel_h') && abs(sum(rel_h) - 1) < 1e-10", label: "Relative Haeufigkeiten stimmen" },
            { expression: "exists('stichprobensumme') && identical(as.numeric(stichprobensumme), sum(Stichprobe))", label: "Stichprobensumme stimmt" }
          ],
          solution: `set.seed(5)\nStichprobe <- sample(0:6, 20, replace = TRUE)\nabs_h <- table(Stichprobe)\nrel_h <- prop.table(table(Stichprobe))\nstichprobensumme <- sum(Stichprobe)\n\nprint(Stichprobe)\nprint(abs_h)\nprint(rel_h)\nprint(stichprobensumme)\n`
        },
        {
          id: "statistik-korrelation",
          title: "Tutorium 4: Scatterplot, Pearson und Spearman",
          source: "Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_04_-_R-Loesung.R",
          prompt: "Lege die im Tutorium verwendeten Metacritic- und RottenTomatoes-Werte an, zeichne einen Scatterplot und berechne sowohl den Pearson- als auch den Spearman-Korrelationskoeffizienten.",
          starterCode: `Metacritic <- c(6.5, 7.1, 8.1, 9.3, 7.8, 8.1, 8.6, 9.3, 9.4, 9.0)\nRottenTomatoes <- c(8.5, 8.6, 9.4, 9.2, 9.8, 9.2, 9.4, 9.6, 9.8, 9.7)\n\n# Aufgabe: Plot und Korrelationen berechnen\npearson_korr <- NULL\nspearman_korr <- NULL\n\nprint(pearson_korr)\nprint(spearman_korr)\n`,
          hints: [
            "Nutze plot(Metacritic, RottenTomatoes, ...), damit du die Datenwolke siehst.",
            "Die Loesung vergleicht method = \"pearson\" und method = \"spearman\"."
          ],
          checks: [
            { mode: "code", type: "includes", value: "plot(Metacritic, RottenTomatoes" },
            { mode: "code", type: "includes", value: "cor(Metacritic, RottenTomatoes, method = \"pearson\")" },
            { mode: "code", type: "includes", value: "cor(Metacritic, RottenTomatoes, method = \"spearman\")" }
          ],
          runtimeChecks: [
            { expression: "exists('pearson_korr') && pearson_korr > 0.7", label: "Pearson-Korrelation wurde berechnet" },
            { expression: "exists('spearman_korr') && spearman_korr > 0.7", label: "Spearman-Korrelation wurde berechnet" },
            { expression: "exists('pearson_korr') && exists('spearman_korr') && abs(pearson_korr - cor(Metacritic, RottenTomatoes, method = 'pearson')) < 1e-10", label: "Pearson-Wert stimmt genau" }
          ],
          solution: `Metacritic <- c(6.5, 7.1, 8.1, 9.3, 7.8, 8.1, 8.6, 9.3, 9.4, 9.0)\nRottenTomatoes <- c(8.5, 8.6, 9.4, 9.2, 9.8, 9.2, 9.4, 9.6, 9.8, 9.7)\n\nplot(Metacritic, RottenTomatoes, xlab = "Metacritic", ylab = "RottenTomatoes")\npearson_korr <- cor(Metacritic, RottenTomatoes, method = "pearson")\nspearman_korr <- cor(Metacritic, RottenTomatoes, method = "spearman")\n\nprint(pearson_korr)\nprint(spearman_korr)\n`
        },
        {
          id: "statistik-bivariat",
          title: "Tutorium 8: Kovarianz, Korrelation und bedingte Verteilung",
          source: "Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_08_-_R-Loesung.R",
          prompt: "Lege einen kleinen Zuckerrohr-Datensatz mit Wasser = c(8, 9, 10, 11, 12) und Kalorien = c(18, 17, 16, 15, 14) an. Berechne Mittelwerte, Varianzen, Kovarianz, Korrelation sowie den bedingten Erwartungswert von Y gegeben X = 10.",
          starterCode: `Zuckerrohr <- data.frame(\n  Wasser = c(8, 9, 10, 11, 12),\n  Kalorien = c(18, 17, 16, 15, 14)\n)\n\n# Aufgabe: Mittelwerte, Varianzen, Kovarianz und Korrelation\nmu_x <- NULL\nmu_y <- NULL\nvar_x <- NULL\nvar_y <- NULL\ncov_xy <- NULL\ncor_xy <- NULL\n\n# Aufgabe: bedingten Erwartungswert von Y fuer X = 10 berechnen\nbed_muy <- NULL\n\nprint(mu_x)\nprint(mu_y)\nprint(cov_xy)\nprint(cor_xy)\nprint(bed_muy)\n`,
          hints: [
            "Die Tutoriumslogik arbeitet mit mean(), var(), cov() und einer expliziten Korrelation.",
            "Fuer den bedingten Erwartungswert kannst du die im Skript genutzte Formel mit mu_y, cor_xy, var_y und var_x uebernehmen."
          ],
          checks: [
            { mode: "code", type: "includes", value: "cov(Zuckerrohr)" },
            { mode: "code", type: "includes", value: "cor(Zuckerrohr)" },
            { mode: "code", type: "includes", value: "mu_y + (cor_xy * sqrt(var_y / var_x)) * (10 - mu_x)" }
          ],
          runtimeChecks: [
            { expression: "exists('mu_x') && identical(as.numeric(mu_x), 10)", label: "Mittelwert von X stimmt" },
            { expression: "exists('mu_y') && identical(as.numeric(mu_y), 16)", label: "Mittelwert von Y stimmt" },
            { expression: "exists('cor_xy') && abs(cor_xy + 1) < 1e-10", label: "Korrelation wurde korrekt berechnet" },
            { expression: "exists('bed_muy') && abs(as.numeric(bed_muy) - 16) < 1e-10", label: "Bedingter Erwartungswert fuer X = 10 stimmt" }
          ],
          solution: `Zuckerrohr <- data.frame(\n  Wasser = c(8, 9, 10, 11, 12),\n  Kalorien = c(18, 17, 16, 15, 14)\n)\n\nmu_x <- mean(Zuckerrohr$Wasser)\nmu_y <- mean(Zuckerrohr$Kalorien)\nvar_x <- var(Zuckerrohr$Wasser)\nvar_y <- var(Zuckerrohr$Kalorien)\ncov_xy <- cov(Zuckerrohr$Wasser, Zuckerrohr$Kalorien)\ncor_xy <- cor(Zuckerrohr$Wasser, Zuckerrohr$Kalorien)\nbed_muy <- mu_y + (cor_xy * sqrt(var_y / var_x)) * (10 - mu_x)\n\nprint(mu_x)\nprint(mu_y)\nprint(cov_xy)\nprint(cor_xy)\nprint(bed_muy)\n`
        },
        {
          id: "statistik-tests",
          title: "Blatt 11: Testbefehle und Verteilungswerte",
          source: "Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_11_-_R-Loesung.R",
          prompt: "Reproduziere drei typische Kommandos aus Blatt 11: einen zweiseitigen Binomialtest, die obere Normalverteilungswahrscheinlichkeit fuer z = 2.2 und den kritischen Chi-Quadrat-Wert fuer 10%-Niveau bei 11 Freiheitsgraden.",
          starterCode: `# Aufgabe: Binomialtest aus Aufgabe 4\nausgabe_binom <- NULL\n\n# Aufgabe: 1 - pnorm(2.2)\nausgabe_normal <- NULL\n\n# Aufgabe: qchisq(0.1, 11)\nausgabe_chi <- NULL\n\nprint(ausgabe_binom)\nprint(round(ausgabe_normal, 3))\nprint(round(ausgabe_chi, 3))\n`,
          hints: [
            "Der Tutoriumsloesung zufolge lautet der Binomialtest: binom.test(23476, 578268, 0.04, alternative = \"two.sided\")",
            "Fuer die obere Restwahrscheinlichkeit hilft 1 - pnorm(...)."
          ],
          checks: [
            { mode: "code", type: "includes", value: "binom.test(23476, 578268, 0.04" },
            { mode: "code", type: "includes", value: "1 - pnorm(2.2)" },
            { mode: "code", type: "includes", value: "qchisq(0.1, 11)" }
          ],
          runtimeChecks: [
            { expression: "exists('ausgabe_normal') && abs(ausgabe_normal - (1 - pnorm(2.2))) < 1e-10", label: "Normalwahrscheinlichkeit stimmt" },
            { expression: "exists('ausgabe_chi') && abs(ausgabe_chi - qchisq(0.1, 11)) < 1e-10", label: "Chi-Quadrat-Wert stimmt" },
            { expression: "exists('ausgabe_binom') && inherits(ausgabe_binom, 'htest')", label: "Binomialtest wurde wirklich ausgefuehrt" }
          ],
          solution: `ausgabe_binom <- binom.test(23476, 578268, 0.04, alternative = "two.sided")\nausgabe_normal <- 1 - pnorm(2.2)\nausgabe_chi <- qchisq(0.1, 11)\n\nprint(ausgabe_binom)\nprint(round(ausgabe_normal, 3))\nprint(round(ausgabe_chi, 3))\n`
        },
        {
          id: "statistik-anova",
          title: "Tutorium 11: Varianzanalyse und Boxplot",
          source: "Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/TUT_11_-_R-Loesung.R",
          prompt: "Lege region und anzahl wie im Tutorium an, erstelle den Data Frame d, fuehre mit aov(anzahl ~ region, data = d) eine ANOVA durch und speichere den p-Wert aus der ANOVA-Tabelle.",
          starterCode: `region <- c("NW","NW","NW","NW","NO","NO","NO","NO","M","M","M","M","S","S","S","S")\nanzahl <- c(74,215,103,79,129,82,39,57,103,147,97,75,234,269,125,222)\n\n# Aufgabe: Data Frame bauen und ANOVA rechnen\nd <- NULL\nvar_an <- NULL\np_wert <- NULL\n\nprint(var_an)\nprint(p_wert)\n`,
          hints: [
            "Die Tutoriumsloesung baut zuerst data.frame(region = ..., anzahl = ...) und ruft dann aov(anzahl ~ region, data = d) auf.",
            "Der p-Wert steckt in summary(var_an)[[1]][['Pr(>F)']][1]."
          ],
          checks: [
            { mode: "code", type: "includes", value: "data.frame(region = region, anzahl = anzahl)" },
            { mode: "code", type: "includes", value: "aov(anzahl ~ region, data = d)" },
            { mode: "code", type: "includes", value: "summary(var_an)" }
          ],
          runtimeChecks: [
            { expression: "exists('d') && is.data.frame(d) && nrow(d) == 16", label: "Data Frame wurde korrekt angelegt" },
            { expression: "exists('var_an') && inherits(var_an, 'aov')", label: "ANOVA wurde ausgefuehrt" },
            { expression: "exists('p_wert') && is.numeric(p_wert) && length(p_wert) == 1", label: "p-Wert wurde ausgelesen" }
          ],
          solution: `region <- c("NW","NW","NW","NW","NO","NO","NO","NO","M","M","M","M","S","S","S","S")\nanzahl <- c(74,215,103,79,129,82,39,57,103,147,97,75,234,269,125,222)\nd <- data.frame(region = region, anzahl = anzahl)\nvar_an <- aov(anzahl ~ region, data = d)\np_wert <- summary(var_an)[[1]][["Pr(>F)"]][1]\n\nprint(var_an)\nprint(p_wert)\n`
        }
      ]
    }
  },
  {
    slug: "oekonometrie",
    title: "Einführung in die Ökonometrie",
    shortTitle: "Einführung in die Ökonometrie",
    summary: "Einfuehrung in die Oekonometrie mit OLS, Inferenz, Diagnostik, Probeklausuren und R-Training.",
    accent: BRAND_ACCENT,
    type: "quantitative_coding",
    status: "live",
    href: "./oekonometrie/index.html",
    materials: [
      "Masterdeck, Formelsammlung, 12 Uebungsblaetter, 2 Wiederholungen und 3 Probeklausuren",
      "Coding-nahe Oekonometriepraxis von OLS ueber Inferenz bis Heteroskedastizitaet und Autokorrelation",
      "Begleitende Uebungen zu Residuen, Modellvergleich und erweiterten Schaetzverfahren"
    ],
    sourcePath: `${sourceRoot}/Einführung in die Ökonometrie`,
    rLab: {
      intro: "Diese Coding-Aufgaben trainieren denselben Workflow wie die Uebungen: Modell aufbauen, schaetzen, Output lesen und Ergebnisse sauber interpretieren.",
      lessons: [
        {
          id: "oekon-lineares-modell",
          title: "Das lineare Modell: OLS per Matrixrechnung",
          source: "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/01_Das_lineare_Modell.R",
          prompt: "Nutze die gegebenen x2- und y-Werte, baue X = cbind(1, x2), berechne b = (X'X)^(-1)X'y und pruefe das Ergebnis mit lm(y ~ x2).",
          starterCode: `x2 <- c(-3.40, -3.41, -3.42, -3.45, -3.46)\ny <- c(-4.02, -4.03, -4.04, -4.06, -4.08)\n\n# Aufgabe: Designmatrix anlegen\n# Aufgabe: Koeffizienten per Matrixrechnung bestimmen\n# Aufgabe: lm() zur Kontrolle schaetzen\n`,
          hints: [
            "Die Musterloesung nutzt solve(t(X) %*% X) %*% t(X) %*% y.",
            "Vergiss die Einserspalte fuer den Intercept nicht."
          ],
          checks: [
            { mode: "code", type: "includes", value: "X <- cbind(1, x2)" },
            { mode: "code", type: "includes", value: "solve(t(X) %*% X) %*% t(X) %*% y" },
            { mode: "code", type: "includes", value: "lm(y ~ x2)" }
          ],
          runtimeChecks: [
            { expression: "exists('X') && is.matrix(X) && ncol(X) == 2", label: "Designmatrix X wurde aufgebaut" },
            { expression: "exists('b') && length(b) == 2", label: "Matrixschaetzer b wurde berechnet" },
            { expression: "exists('reg1') && inherits(reg1, 'lm')", label: "lm()-Regression wurde geschaetzt" }
          ],
          solution: `x2 <- c(-3.40, -3.41, -3.42, -3.45, -3.46)\ny <- c(-4.02, -4.03, -4.04, -4.06, -4.08)\n\nX <- cbind(1, x2)\nb <- solve(t(X) %*% X) %*% t(X) %*% y\nprint(b)\n\nreg1 <- lm(y ~ x2)\nsummary(reg1)\n`
        },
        {
          id: "oekon-annahmen",
          title: "Annahmen: Exogenitaet und perfekte Kollinearitaet",
          source: "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/02_Annahmen.R",
          prompt: "Lege y, x2 und x3 so an, dass x3 = 2 * x2 gilt, baue X = cbind(1, x2, x3) und pruefe mit tryCatch(), dass solve(t(X) %*% X) an perfekter Kollinearitaet scheitert.",
          starterCode: `y <- c(-4.02, -4.03, -4.04, -4.06, -4.08)\nx2 <- c(-3.40, -3.41, -3.42, -3.45, -3.46)\n\n# Aufgabe: perfekt kollinearen Regressor bauen\nx3 <- NULL\nX <- NULL\nkollinear_test <- NULL\n\nprint(kollinear_test)\n`,
          hints: [
            "Die Skriptidee lautet x3 <- 2 * x2.",
            "Mit tryCatch(solve(...), error = function(e) 'singular') kannst du den Fehlschlag sauber abfangen."
          ],
          checks: [
            { mode: "code", type: "includes", value: "x3 <- 2 * x2" },
            { mode: "code", type: "includes", value: "X <- cbind(1, x2, x3)" },
            { mode: "code", type: "includes", value: "tryCatch" }
          ],
          runtimeChecks: [
            { expression: "exists('x3') && identical(as.numeric(x3), as.numeric(2 * x2))", label: "Perfekt kollinearer Regressor wurde gebaut" },
            { expression: "exists('X') && is.matrix(X) && ncol(X) == 3", label: "Regressormatrix mit drei Spalten steht" },
            { expression: "exists('kollinear_test') && identical(kollinear_test, 'singular')", label: "Singularitaet wurde erkannt" }
          ],
          solution: `y <- c(-4.02, -4.03, -4.04, -4.06, -4.08)\nx2 <- c(-3.40, -3.41, -3.42, -3.45, -3.46)\nx3 <- 2 * x2\nX <- cbind(1, x2, x3)\nkollinear_test <- tryCatch({\n  solve(t(X) %*% X)\n  "invertierbar"\n}, error = function(e) "singular")\n\nprint(kollinear_test)\n`
        },
        {
          id: "oekon-eigenschaften",
          title: "Eigenschaften: Monte-Carlo fuer den Steigungskoeffizienten",
          source: "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/03_Eigenschaften.R",
          prompt: "Simuliere 100-mal ein Modell y = 1 + 0.5*x + e mit x = 1:50 und e ~ N(0,1). Speichere die geschaetzten Steigungskoeffizienten b2 und berechne ihren Mittelwert.",
          starterCode: `set.seed(42)\nb2 <- numeric()\n\n# Aufgabe: 100 Simulationen mit x = 1:50 und e = rnorm(50, 0, 1)\n# Aufgabe: Steigungskoeffizienten in b2 speichern\nmittel_b2 <- NULL\n\nprint(length(b2))\nprint(mittel_b2)\n`,
          hints: [
            "Die Skriptlogik baut b2 in einer Schleife mit lm(y ~ x)$coeff[2] auf.",
            "Der Mittelwert von b2 sollte nahe bei 0.5 liegen."
          ],
          checks: [
            { mode: "code", type: "includes", value: "for (i in 1:100)" },
            { mode: "code", type: "includes", value: "rnorm(50, 0, 1)" },
            { mode: "code", type: "includes", value: "lm(y ~ x)$coeff[2]" }
          ],
          runtimeChecks: [
            { expression: "exists('b2') && length(b2) == 100", label: "100 Schaetzungen wurden erzeugt" },
            { expression: "exists('mittel_b2') && abs(mittel_b2 - mean(b2)) < 1e-10", label: "Der Mittelwert wurde korrekt berechnet" },
            { expression: "exists('mittel_b2') && abs(mittel_b2 - 0.5) < 0.2", label: "Die Monte-Carlo-Logik passt zum wahren Koeffizienten" }
          ],
          solution: `set.seed(42)\nb2 <- numeric()\nfor (i in 1:100) {\n  x <- 1:50\n  e <- rnorm(50, 0, 1)\n  y <- 1 + 0.5 * x + e\n  b2 <- c(b2, lm(y ~ x)$coeff[2])\n}\nmittel_b2 <- mean(b2)\n\nprint(length(b2))\nprint(mittel_b2)\n`
        },
        {
          id: "oekon-fehlervarianz",
          title: "Fehlervarianz und Kovarianzmatrix",
          source: "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/04_Schaetzen_der_Fehlervarianz.R",
          prompt: "Nutze XX, Xy und yy wie im Skript, berechne b = solve(XX) %*% Xy, danach SSR, sigma2_hat und schliesslich Cov_b_hat = sigma2_hat * solve(XX).",
          starterCode: `XX <- matrix(c(10,10,20,10,25,10,20,10,80), nrow = 3)\nXy <- c(20,36,16)\nyy <- 63.52\n\n# Aufgabe: Koeffizienten, SSR, sigma2_hat und Cov_b_hat berechnen\nb <- NULL\nSSR <- NULL\nsigma2_hat <- NULL\nCov_b_hat <- NULL\n\nprint(b)\nprint(sigma2_hat)\nprint(Cov_b_hat)\n`,
          hints: [
            "Das Skript nutzt SSR <- yy - t(b) %*% Xy.",
            "Die Kovarianzmatrix ist sigma2_hat * solve(XX)."
          ],
          checks: [
            { mode: "code", type: "includes", value: "b <- solve(XX) %*% Xy" },
            { mode: "code", type: "includes", value: "SSR <- yy - t(b) %*% Xy" },
            { mode: "code", type: "includes", value: "Cov_b_hat <- sigma2_hat * solve(XX)" }
          ],
          runtimeChecks: [
            { expression: "exists('b') && length(b) == 3", label: "Koeffizientenvektor wurde berechnet" },
            { expression: "exists('sigma2_hat') && is.numeric(sigma2_hat) && sigma2_hat > 0", label: "Fehlervarianz wurde geschaetzt" },
            { expression: "exists('Cov_b_hat') && is.matrix(Cov_b_hat) && all(dim(Cov_b_hat) == c(3, 3))", label: "Kovarianzmatrix hat die richtige Dimension" }
          ],
          solution: `XX <- matrix(c(10,10,20,10,25,10,20,10,80), nrow = 3)\nXy <- c(20,36,16)\nyy <- 63.52\n\nb <- solve(XX) %*% Xy\nSSR <- yy - t(b) %*% Xy\nsigma2_hat <- as.numeric(SSR / (10 - 3))\nCov_b_hat <- sigma2_hat * solve(XX)\n\nprint(b)\nprint(sigma2_hat)\nprint(Cov_b_hat)\n`
        },
        {
          id: "oekon-residuen",
          title: "Tutorium 3: Residuen, SSR und Vorhersage",
          source: "Tutorial_Einfuehrung_in_die_Oekonometrie_Tutorium/R/Tutorium_3.R",
          prompt: "Nutze dieselbe Regression, bestimme Residuen, SSR, sigma^2 und eine Vorhersage fuer x0 = log(2700/400).",
          starterCode: `x2 <- c(-3.40, -3.41, -3.42, -3.45, -3.46)\ny <- c(-4.02, -4.03, -4.04, -4.06, -4.08)\nreg1 <- lm(y ~ x2)\n\n# Aufgabe: Residuen abspeichern\n# Aufgabe: SSR, obs, K und sigma2 bestimmen\n# Aufgabe: pred1 fuer x0 = log(2700/400) berechnen\n`,
          hints: [
            "Das Tutorium verwendet residuals(reg1) als Alternative zu reg1$residuals.",
            "sigma2 <- SSR / (obs - K) ist die zentrale Formel im Skript."
          ],
          checks: [
            { mode: "code", type: "includes", value: "residuals(reg1)" },
            { mode: "code", type: "includes", value: "SSR <- sum(reg1$residuals^2)" },
            { mode: "code", type: "includes", value: "sigma2 <- SSR / (obs - K)" },
            { mode: "code", type: "includes", value: "log(2700/400)" }
          ],
          runtimeChecks: [
            { expression: "exists('e') && length(e) == length(y)", label: "Residuenvektor wurde berechnet" },
            { expression: "exists('SSR') && is.numeric(SSR) && SSR >= 0", label: "SSR ist definiert" },
            { expression: "exists('sigma2') && is.numeric(sigma2) && sigma2 >= 0", label: "sigma^2 ist definiert" },
            { expression: "exists('pred1') && is.numeric(pred1) && length(pred1) == 1", label: "Vorhersage pred1 ist definiert" }
          ],
          solution: `x2 <- c(-3.40, -3.41, -3.42, -3.45, -3.46)\ny <- c(-4.02, -4.03, -4.04, -4.06, -4.08)\nreg1 <- lm(y ~ x2)\n\ne <- residuals(reg1)\nSSR <- sum(reg1$residuals^2)\nobs <- length(y)\nK <- ncol(model.matrix(reg1))\nsigma2 <- SSR / (obs - K)\npred1 <- reg1$coefficients[1] + reg1$coefficients[2] * log(2700 / 400)\n\nprint(e)\nprint(SSR)\nprint(sigma2)\nprint(pred1)\n`
        },
        {
          id: "oekon-r2",
          title: "Bestimmtheitsmass und adjustiertes R-Quadrat",
          source: "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/06_Bestimmtheitsmass.R",
          prompt: "Nutze den Datensatz swiss, regrediere Fertility auf Catholic und berechne y_bar, y_hat, SST, SSE, SSR, R2_1 und adj_R2 wie im Skript.",
          starterCode: `data(swiss)\ny <- swiss$Fertility\nX <- cbind(1, swiss$Catholic)\n\n# Aufgabe: OLS-Schaetzer und Modellguete berechnen\nb <- NULL\ny_bar <- NULL\ny_hat <- NULL\nSST <- NULL\nSSE <- NULL\nSSR <- NULL\nR2_1 <- NULL\nadj_R2 <- NULL\n\nprint(R2_1)\nprint(adj_R2)\n`,
          hints: [
            "Das Skript baut erst b <- solve(t(X) %*% X) %*% t(X) %*% y.",
            "adjustiertes R^2 wird mit 1 - (47 - 1) / (47 - 2) * (1 - R2_1) berechnet."
          ],
          checks: [
            { mode: "code", type: "includes", value: "b <- solve(t(X) %*% X) %*% t(X) %*% y" },
            { mode: "code", type: "includes", value: "R2_1 <- SSE / SST" },
            { mode: "code", type: "includes", value: "adj_R2 <- 1 - (47 - 1) / (47 - 2) * (1 - R2_1)" }
          ],
          runtimeChecks: [
            { expression: "exists('R2_1') && is.numeric(R2_1) && R2_1 >= 0 && R2_1 <= 1", label: "R-Quadrat ist plausibel" },
            { expression: "exists('adj_R2') && is.numeric(adj_R2) && adj_R2 <= R2_1", label: "Adjustiertes R-Quadrat wurde berechnet" },
            { expression: "exists('SSR') && exists('SSE') && exists('SST') && abs((SSE + SSR) - SST) < 1e-6", label: "Varianzzerlegung stimmt" }
          ],
          solution: `data(swiss)\ny <- swiss$Fertility\nX <- cbind(1, swiss$Catholic)\nb <- solve(t(X) %*% X) %*% t(X) %*% y\ny_bar <- mean(y)\ny_hat <- X %*% b\nSST <- sum((y - y_bar)^2)\nSSE <- sum((y_hat - y_bar)^2)\nSSR <- sum((y - y_hat)^2)\nR2_1 <- SSE / SST\nadj_R2 <- 1 - (47 - 1) / (47 - 2) * (1 - R2_1)\n\nprint(R2_1)\nprint(adj_R2)\n`
        },
        {
          id: "oekon-tests",
          title: "Intervallschaetzung und Hypothesentests",
          source: "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/09_Intervallschaetzung_Hypothesentests.R",
          prompt: "Berechne die t-Pruefgroesse fuer (0.8 - 0.6) / sqrt(0.0128), die kritischen 5%- und 95%-t-Werte bei 7 Freiheitsgraden und die F-Grenze qf(0.95, 2, 7).",
          starterCode: `# Aufgabe: t-Pruefgroesse und kritische Werte\nt_stat <- NULL\nt_005 <- NULL\nt_095 <- NULL\nf_095 <- NULL\n\nprint(t_stat)\nprint(t_005)\nprint(t_095)\nprint(f_095)\n`,
          hints: [
            "Das Skript arbeitet mit qt(0.05, 7), qt(0.95, 7) und qf(0.95, 2, 7).",
            "Nutze sqrt(0.0128) exakt wie in der Vorlage."
          ],
          checks: [
            { mode: "code", type: "includes", value: "(0.8 - 0.6) / sqrt(0.0128)" },
            { mode: "code", type: "includes", value: "qt(0.05, 7)" },
            { mode: "code", type: "includes", value: "qf(0.95, 2, 7)" }
          ],
          runtimeChecks: [
            { expression: "exists('t_stat') && abs(t_stat - ((0.8 - 0.6) / sqrt(0.0128))) < 1e-10", label: "t-Statistik stimmt" },
            { expression: "exists('t_005') && abs(t_005 - qt(0.05, 7)) < 1e-10", label: "Unterer kritischer t-Wert stimmt" },
            { expression: "exists('f_095') && abs(f_095 - qf(0.95, 2, 7)) < 1e-10", label: "Kritischer F-Wert stimmt" }
          ],
          solution: `t_stat <- (0.8 - 0.6) / sqrt(0.0128)\nt_005 <- qt(0.05, 7)\nt_095 <- qt(0.95, 7)\nf_095 <- qf(0.95, 2, 7)\n\nprint(t_stat)\nprint(t_005)\nprint(t_095)\nprint(f_095)\n`
        },
        {
          id: "oekon-multikollinearitaet",
          title: "Tutorium 7: Korrelationen und Modellvergleich",
          source: "Tutorial_Einfuehrung_in_die_Oekonometrie_Tutorium/R/Tutorium_7.R",
          prompt: "Lege AGE <- c(25, 30, 35, 40, 45) und EX <- c(2, 5, 8, 11, 14) an. Berechne die Korrelation von AGE und EX sowohl ueber cov()/var() als auch direkt ueber cor().",
          starterCode: `AGE <- c(25, 30, 35, 40, 45)\nEX <- c(2, 5, 8, 11, 14)\n\n# Aufgabe: Korrelation auf zwei Wegen berechnen\ncorr_eigen <- NULL\ncorr_direkt <- NULL\n\nprint(corr_eigen)\nprint(corr_direkt)\n`,
          hints: [
            "Das Tutorium zeigt explizit cov(x,y) / (sqrt(var(x)) * sqrt(var(y))).",
            "Vergleiche das Ergebnis mit cor(AGE, EX)."
          ],
          checks: [
            { mode: "code", type: "includes", value: "cov(AGE, EX) / (sqrt(var(AGE)) * sqrt(var(EX)))" },
            { mode: "code", type: "includes", value: "cor(AGE, EX)" }
          ],
          runtimeChecks: [
            { expression: "exists('corr_eigen') && abs(corr_eigen - 1) < 1e-10", label: "Eigene Korrelationsrechnung stimmt" },
            { expression: "exists('corr_direkt') && abs(corr_direkt - 1) < 1e-10", label: "cor()-Ergebnis stimmt" },
            { expression: "exists('corr_eigen') && exists('corr_direkt') && abs(corr_eigen - corr_direkt) < 1e-10", label: "Beide Wege liefern denselben Wert" }
          ],
          solution: `AGE <- c(25, 30, 35, 40, 45)\nEX <- c(2, 5, 8, 11, 14)\ncorr_eigen <- cov(AGE, EX) / (sqrt(var(AGE)) * sqrt(var(EX)))\ncorr_direkt <- cor(AGE, EX)\n\nprint(corr_eigen)\nprint(corr_direkt)\n`
        },
        {
          id: "oekon-hetero",
          title: "Heteroskedastizitaet und GLS",
          source: "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/11_Heteroskedastizitaet.R",
          prompt: "Nutze x und y wie im Skript, berechne den OLS-Schaetzer b_OLS und den GLS-Schaetzer b_GLS2 mit Psi = diag(c(1,1,1,1,1,3,3,3)).",
          starterCode: `x <- c(20,25,30,35,40,60,90,120)\ny <- c(2,0,4,3,5,9,12,21)\n\n# Aufgabe: OLS- und GLS-Schaetzer berechnen\nX <- NULL\nb_OLS <- NULL\nPsi <- NULL\nb_GLS2 <- NULL\n\nprint(b_OLS)\nprint(b_GLS2)\n`,
          hints: [
            "OLS lautet solve(t(X) %*% X) %*% t(X) %*% y.",
            "GLS folgt im Skript als solve(t(X) %*% solve(Psi) %*% X) %*% t(X) %*% solve(Psi) %*% y."
          ],
          checks: [
            { mode: "code", type: "includes", value: "X <- cbind(1, x)" },
            { mode: "code", type: "includes", value: "solve(t(X) %*% X) %*% t(X) %*% y" },
            { mode: "code", type: "includes", value: "solve(t(X) %*% solve(Psi) %*% X) %*% t(X) %*% solve(Psi) %*% y" }
          ],
          runtimeChecks: [
            { expression: "exists('b_OLS') && length(b_OLS) == 2", label: "OLS-Schaetzer wurde berechnet" },
            { expression: "exists('b_GLS2') && length(b_GLS2) == 2", label: "GLS-Schaetzer wurde berechnet" },
            { expression: "exists('Psi') && is.matrix(Psi) && all(dim(Psi) == c(8, 8))", label: "Gewichtungsmatrix Psi stimmt" }
          ],
          solution: `x <- c(20,25,30,35,40,60,90,120)\ny <- c(2,0,4,3,5,9,12,21)\nX <- cbind(1, x)\nb_OLS <- solve(t(X) %*% X) %*% t(X) %*% y\nPsi <- diag(c(1,1,1,1,1,3,3,3), nrow = 8)\nb_GLS2 <- solve(t(X) %*% solve(Psi) %*% X) %*% t(X) %*% solve(Psi) %*% y\n\nprint(b_OLS)\nprint(b_GLS2)\n`
        },
        {
          id: "oekon-autokorrelation",
          title: "Autokorrelation und Durbin-Watson-Approximation",
          source: "Exercises_Einfuehrung_in_die_Oekonometrie_Uebung/R/12_Autokorrelation.R",
          prompt: "Simuliere mit set.seed(7) eine AR(1)-Folge e <- arima.sim(list(ar = 0.8), n = 60), berechne rho_hat sowie d_approx = 2 - 2 * rho_hat.",
          starterCode: `set.seed(7)\n\n# Aufgabe: AR(1)-Folge simulieren und Kennzahlen berechnen\ne <- NULL\nrho_hat <- NULL\nd_approx <- NULL\n\nprint(head(e))\nprint(rho_hat)\nprint(d_approx)\n`,
          hints: [
            "Das Skript nutzt arima.sim(list(ar = 0.8), n = 60).",
            "rho_hat wird ueber das Produkt von e und lag(e) approximiert."
          ],
          checks: [
            { mode: "code", type: "includes", value: "arima.sim(list(ar = 0.8), n = 60)" },
            { mode: "code", type: "includes", value: "rho_hat <-" },
            { mode: "code", type: "includes", value: "d_approx <- 2 - 2 * rho_hat" }
          ],
          runtimeChecks: [
            { expression: "exists('e') && length(e) == 60", label: "AR(1)-Folge wurde simuliert" },
            { expression: "exists('rho_hat') && is.numeric(rho_hat) && length(rho_hat) == 1", label: "rho_hat ist definiert" },
            { expression: "exists('d_approx') && abs(d_approx - (2 - 2 * rho_hat)) < 1e-10", label: "Durbin-Watson-Approximation stimmt" }
          ],
          solution: `set.seed(7)\ne <- arima.sim(list(ar = 0.8), n = 60)\nrho_hat <- as.numeric(sum(e[-1] * e[-length(e)]) / sum(e[-length(e)]^2))\nd_approx <- 2 - 2 * rho_hat\n\nprint(head(e))\nprint(rho_hat)\nprint(d_approx)\n`
        }
      ]
    }
  },
  {
    slug: "mathematik",
    title: "Mathematik",
    shortTitle: "Mathematik",
    summary: "Mathematik von Algebra bis Integralrechnung mit Kleinuebungen, Visualisierungen und R-Lab.",
    accent: BRAND_ACCENT,
    type: "quantitative",
    status: "live",
    href: "./mathematik/index.html",
    materials: [
      "10 Vorlesungseinheiten plus 10 Kleinuebungsblaetter mit Loesungen",
      "R-Uebungsblaetter und passende Mathe-Skripte fuer den numerischen bzw. grafischen Teil",
      "Interaktive Visualisierungen fuer Funktionen, Matrizen, Ableitungen, Optimierung und Integrale"
    ],
    sourcePath: `${sourceRoot}/Mathematik`,
    rLab: {
      intro: "Diese R-Aufgaben verbinden mathematische Grundideen direkt mit Rechenwegen, Visualisierung und numerischer Umsetzung.",
      lessons: [
        {
          id: "math-r-basics",
          title: "R-E1: Grundlagen, Vektoren und Logik",
          source: "Mathematik/Kleinübung/E_1_-_Algebra_und_Mengenlehre/R.E1_-_Aufgaben.pdf + R/R-Skripte/Rcode_E1.R",
          prompt: "Lege Rechnung1 = 1 + 2, HundertNatuerlicheZahlen = 1:100, TausendeinsRationaleZahlen = seq(0, 100, by = 0.1) und ZweiReelleZahlen = c(pi, sqrt(2)) an. Setze x <- 12 und pruefe mit einer logischen Variable, ob x >= 10 gilt.",
          starterCode: `# Aufgabe: Grundrechnungen und Speichern\nRechnung1 <- NULL\n\n# Aufgabe: Zahlenfolgen anlegen\nHundertNatuerlicheZahlen <- NULL\nTausendeinsRationaleZahlen <- NULL\nZweiReelleZahlen <- NULL\n\n# Aufgabe: logische Pruefung\nx <- 12\nx_gross_genug <- NULL\n\nprint(Rechnung1)\nprint(head(HundertNatuerlicheZahlen))\nprint(head(TausendeinsRationaleZahlen))\nprint(ZweiReelleZahlen)\nprint(x_gross_genug)\n`,
          hints: [
            "Das Vorlesungsskript nutzt 1:100, seq(0,100,by=0.1) und c(pi, sqrt(2)).",
            "Fuer die logische Pruefung reicht ein Vergleich wie x >= 10."
          ],
          checks: [
            { mode: "code", type: "includes", value: "Rechnung1 <- 1 + 2" },
            { mode: "code", type: "includes", value: "HundertNatuerlicheZahlen <- 1:100" },
            { mode: "code", type: "includes", value: "seq(0, 100, by = 0.1)" },
            { mode: "code", type: "includes", value: "c(pi, sqrt(2))" },
            { mode: "code", type: "includes", value: "x >= 10" }
          ],
          runtimeChecks: [
            { expression: "exists('Rechnung1') && identical(Rechnung1, 3)", label: "Rechnung1 ist korrekt" },
            { expression: "exists('HundertNatuerlicheZahlen') && length(HundertNatuerlicheZahlen) == 100 && HundertNatuerlicheZahlen[100] == 100", label: "Natuerliche Zahlenfolge stimmt" },
            { expression: "exists('TausendeinsRationaleZahlen') && length(TausendeinsRationaleZahlen) == 1001", label: "seq()-Folge stimmt" },
            { expression: "exists('ZweiReelleZahlen') && length(ZweiReelleZahlen) == 2 && abs(ZweiReelleZahlen[1] - pi) < 1e-10", label: "Reelle Zahlen wurden angelegt" },
            { expression: "exists('x_gross_genug') && identical(x_gross_genug, TRUE)", label: "Logische Pruefung stimmt" }
          ],
          solution: `Rechnung1 <- 1 + 2\nHundertNatuerlicheZahlen <- 1:100\nTausendeinsRationaleZahlen <- seq(0, 100, by = 0.1)\nZweiReelleZahlen <- c(pi, sqrt(2))\n\nx <- 12\nx_gross_genug <- x >= 10\n\nprint(Rechnung1)\nprint(head(HundertNatuerlicheZahlen))\nprint(head(TausendeinsRationaleZahlen))\nprint(ZweiReelleZahlen)\nprint(x_gross_genug)\n`
        },
        {
          id: "math-r-functions",
          title: "R-E2: Funktionen und Funktionswerte",
          source: "Mathematik/Kleinübung/E_2_-_Funktionen_und_Gleichungen/R.E2_-_Aufgaben.pdf + R/R-Skripte/Rcode_E2.R",
          prompt: "Definiere fx(x) = x^2 - 4*x + 3, werte die Funktion fuer x = 2 sowie fuer x = 0:4 aus und lege xWerte2 <- seq(0, 4, length.out = 101) fuer eine glatte Kurve an.",
          starterCode: `# Aufgabe: Funktion definieren\nfx <- NULL\n\n# Aufgabe: Auswertungen\nwert_bei_2 <- NULL\nwerte_diskret <- NULL\nxWerte2 <- NULL\nwerte_glatt <- NULL\n\nprint(wert_bei_2)\nprint(werte_diskret)\nprint(head(xWerte2))\nprint(head(werte_glatt))\n`,
          hints: [
            "Im Skript wird fx als function(x) { x^2 - 4*x + 3 } aufgebaut.",
            "Nutze fuer die glatte Kurve seq(0, 4, length.out = 101)."
          ],
          checks: [
            { mode: "code", type: "includes", value: "fx <- function(x)" },
            { mode: "code", type: "includes", value: "x^2 - 4*x + 3" },
            { mode: "code", type: "includes", value: "fx(0:4)" },
            { mode: "code", type: "includes", value: "seq(0, 4, length.out = 101)" }
          ],
          runtimeChecks: [
            { expression: "exists('fx') && is.function(fx)", label: "fx() ist definiert" },
            { expression: "exists('wert_bei_2') && identical(wert_bei_2, fx(2)) && identical(wert_bei_2, -1)", label: "Funktionswert bei 2 stimmt" },
            { expression: "exists('werte_diskret') && length(werte_diskret) == 5 && identical(as.numeric(werte_diskret), as.numeric(fx(0:4)))", label: "Diskrete Auswertung stimmt" },
            { expression: "exists('xWerte2') && length(xWerte2) == 101", label: "Glatte x-Folge wurde angelegt" },
            { expression: "exists('werte_glatt') && length(werte_glatt) == 101", label: "Glatte Funktionswerte wurden berechnet" }
          ],
          solution: `fx <- function(x) {\n  yWert <- x^2 - 4*x + 3\n  return(yWert)\n}\n\nwert_bei_2 <- fx(2)\nwerte_diskret <- fx(0:4)\nxWerte2 <- seq(0, 4, length.out = 101)\nwerte_glatt <- fx(xWerte2)\n\nprint(wert_bei_2)\nprint(werte_diskret)\nprint(head(xWerte2))\nprint(head(werte_glatt))\n`
        },
        {
          id: "math-r-matrices",
          title: "R-LA1: Matrizen aufbauen und multiplizieren",
          source: "Mathematik/Kleinübung/LA_1_-_Matrizen_und_Matrix-Algebra/R.LA_I_-_Aufgaben.pdf + R/R-Skripte/Rcode_LA1.R",
          prompt: "Erzeuge VektorObjekt <- c(6, 2, 3, 4, 5, 1), MatrixObjekt als 2x3-Matrix byrow = TRUE, MatrixObjekt2 als 3x2-Matrix aus 7:12 und berechne das Matrixprodukt MatrixObjekt %*% MatrixObjekt2.",
          starterCode: `VektorObjekt <- c(6, 2, 3, 4, 5, 1)\n\n# Aufgabe: Matrizen anlegen\nMatrixObjekt <- NULL\nMatrixObjekt2 <- NULL\n\n# Aufgabe: Produkt berechnen\nProdukt <- NULL\n\nprint(MatrixObjekt)\nprint(MatrixObjekt2)\nprint(Produkt)\n`,
          hints: [
            "Nutze matrix(VektorObjekt, nrow = 2, byrow = TRUE).",
            "Das Produkt wird mit %*% und nicht mit * berechnet."
          ],
          checks: [
            { mode: "code", type: "includes", value: "matrix(VektorObjekt, nrow = 2, byrow = TRUE)" },
            { mode: "code", type: "includes", value: "matrix(7:12, nrow = 3)" },
            { mode: "code", type: "includes", value: "MatrixObjekt %*% MatrixObjekt2" }
          ],
          runtimeChecks: [
            { expression: "exists('MatrixObjekt') && is.matrix(MatrixObjekt) && all(dim(MatrixObjekt) == c(2, 3))", label: "2x3-Matrix stimmt" },
            { expression: "exists('MatrixObjekt2') && is.matrix(MatrixObjekt2) && all(dim(MatrixObjekt2) == c(3, 2))", label: "3x2-Matrix stimmt" },
            { expression: "exists('Produkt') && is.matrix(Produkt) && all(dim(Produkt) == c(2, 2))", label: "Matrixprodukt hat die richtige Dimension" }
          ],
          solution: `VektorObjekt <- c(6, 2, 3, 4, 5, 1)\nMatrixObjekt <- matrix(VektorObjekt, nrow = 2, byrow = TRUE)\nMatrixObjekt2 <- matrix(7:12, nrow = 3)\nProdukt <- MatrixObjekt %*% MatrixObjekt2\n\nprint(MatrixObjekt)\nprint(MatrixObjekt2)\nprint(Produkt)\n`
        },
        {
          id: "math-r-derivatives",
          title: "R-AN1: Ableitungen symbolisch auswerten",
          source: "Mathematik/Kleinübung/AN_1_-_Univariate_Differenzialrechnung/R.AN_I_-_Aufgaben.pdf + R/R-Skripte/Rcode_AN1.R",
          prompt: "Lege f <- expression(x^4 + 3*x^2 + 2) an, bestimme d1 <- D(f, 'x') und evaluiere die erste Ableitung an x = 2. Definiere zusaetzlich fx <- function(x) x^4 + 3*x^2 + 2.",
          starterCode: `# Aufgabe: Ausdruck und Ableitung\nf <- NULL\nd1 <- NULL\n\n# Aufgabe: Funktion und Auswertung\nfx <- NULL\nsteigung_bei_2 <- NULL\n\nprint(d1)\nprint(steigung_bei_2)\n`,
          hints: [
            "Das Skript nutzt D(expr = f, name = 'x').",
            "Mit eval(d1, list(x = 2)) kannst du den Ausdruck an einer Stelle auswerten."
          ],
          checks: [
            { mode: "code", type: "includes", value: "expression(x^4 + 3*x^2 + 2)" },
            { mode: "code", type: "includes", value: "D(f, \"x\")" },
            { mode: "code", type: "includes", value: "eval(d1, list(x = 2))" }
          ],
          runtimeChecks: [
            { expression: "exists('d1')", label: "Die Ableitung wurde erzeugt" },
            { expression: "exists('fx') && is.function(fx)", label: "fx() ist definiert" },
            { expression: "exists('steigung_bei_2') && identical(as.numeric(steigung_bei_2), 44)", label: "Ableitungswert bei x = 2 stimmt" }
          ],
          solution: `f <- expression(x^4 + 3*x^2 + 2)\nd1 <- D(f, "x")\n\nfx <- function(x) {\n  x^4 + 3*x^2 + 2\n}\n\nsteigung_bei_2 <- eval(d1, list(x = 2))\n\nprint(d1)\nprint(steigung_bei_2)\n`
        },
        {
          id: "math-r-optimierung",
          title: "R-OP2: Bivariate Optimierung mit nlm()",
          source: "Mathematik/Kleinübung/OP_2_-__Multivariate_Optimierung/R.OP_II_-_Aufgaben.pdf + R/R-Skripte/Rcode_OP2.R",
          prompt: "Definiere fxy(par) = -2*x^2 - 2*x*y - 2*y^2 + 36*x + 42*y - 158, baue neg.fxy(par) = -fxy(par) und nutze nlm(f = neg.fxy, p = c(3, 3)), um das Maximum zu finden.",
          starterCode: `# Aufgabe: Zielfunktion definieren\nfxy <- NULL\nneg.fxy <- NULL\n\n# Aufgabe: Optimierung starten\nopt <- NULL\nloesung <- NULL\n\nprint(opt)\nprint(loesung)\n`,
          hints: [
            "Im Vorlesungsskript wird zunaechst die Zielfunktion und dann die negative Zielfunktion an nlm() uebergeben.",
            "Die gesuchte Stelle steht spaeter in opt$estimate."
          ],
          checks: [
            { mode: "code", type: "includes", value: "fxy <- function(par)" },
            { mode: "code", type: "includes", value: "neg.fxy <- function(par)" },
            { mode: "code", type: "includes", value: "nlm(f = neg.fxy, p = c(3, 3))" }
          ],
          runtimeChecks: [
            { expression: "exists('fxy') && is.function(fxy)", label: "Zielfunktion fxy() ist definiert" },
            { expression: "exists('neg.fxy') && is.function(neg.fxy)", label: "Negative Zielfunktion ist definiert" },
            { expression: "exists('opt') && is.list(opt) && !is.null(opt$estimate)", label: "nlm() wurde ausgefuehrt" },
            { expression: "exists('loesung') && length(loesung) == 2", label: "Die Optimalloesung wurde ausgelesen" }
          ],
          solution: `fxy <- function(par) {\n  x <- par[1]\n  y <- par[2]\n  -2 * x^2 - 2 * x * y - 2 * y^2 + 36 * x + 42 * y - 158\n}\n\nneg.fxy <- function(par) {\n  -fxy(par)\n}\n\nopt <- nlm(f = neg.fxy, p = c(3, 3))\nloesung <- opt$estimate\n\nprint(opt)\nprint(loesung)\n`
        },
        {
          id: "math-r-integrals",
          title: "R-AN3: Bestimmte Integrale numerisch berechnen",
          source: "Mathematik/Kleinübung/AN_3_-_Intergralrechnung/R.AN_III_-_Aufgaben.pdf",
          prompt: "Definiere f(x) = 5*x^2 + 10*x - 5 und berechne mit integrate() das bestimmte Integral von 1 bis 4. Speichere das Ergebnisobjekt und seinen numerischen Wert getrennt.",
          starterCode: `# Aufgabe: Funktion definieren\nf <- NULL\n\n# Aufgabe: Integral numerisch berechnen\nintegral_objekt <- NULL\nintegral_wert <- NULL\n\nprint(integral_objekt)\nprint(integral_wert)\n`,
          hints: [
            "Die Basisfunktion heisst integrate().",
            "Der numerische Wert steckt im Feld $value."
          ],
          checks: [
            { mode: "code", type: "includes", value: "f <- function(x)" },
            { mode: "code", type: "includes", value: "integrate(f, lower = 1, upper = 4)" },
            { mode: "code", type: "includes", value: "integral_objekt$value" }
          ],
          runtimeChecks: [
            { expression: "exists('f') && is.function(f)", label: "Integrand wurde definiert" },
            { expression: "exists('integral_objekt') && is.list(integral_objekt)", label: "integrate() wurde ausgefuehrt" },
            { expression: "exists('integral_wert') && abs(as.numeric(integral_wert) - 150) < 1e-8", label: "Integralwert stimmt" }
          ],
          solution: `f <- function(x) {\n  5 * x^2 + 10 * x - 5\n}\n\nintegral_objekt <- integrate(f, lower = 1, upper = 4)\nintegral_wert <- integral_objekt$value\n\nprint(integral_objekt)\nprint(integral_wert)\n`
        }
      ]
    }
  },
  {
    slug: "finanzwirtschaft",
    title: "Finanzwirtschaft des Unternehmens",
    shortTitle: "Finanzwirtschaft des Unternehmens",
    summary: "Liquiditaetsplanung, Investitionsrechnung, Unsicherheit, Finanzierungskosten und Kapitalstruktur mit Finanzdrills.",
    accent: BRAND_ACCENT,
    type: "quantitative",
    status: "live",
    href: "./finanzwirtschaft/index.html",
    materials: [
      "Liquiditaetslogik, intertemporale Wahl, Kapitalwert, interner Zinsfuss und Unsicherheit",
      "Kapitalerhoehung, Dividendenbarwertmodell, Fremdkapitalkosten und Leverage",
      "Interaktive Visualisierungen fuer Planung, Budgetgerade, Unsicherheit, Kapitalwertprofil und Verschuldung"
    ],
    sourcePath: `${sourceRoot}/Finanzwirtschaft des Unternehmens`
  },
  {
    slug: "internationale-wirtschaftsbeziehungen",
    title: "Grundlagen der internationalen Wirtschaftsbeziehungen",
    shortTitle: "Grundlagen der internationalen Wirtschaftsbeziehungen",
    summary: "Handelstheorien, Handelspolitik und offene Makrooekonomik mit Modell- und Wechselkursdrills.",
    accent: BRAND_ACCENT,
    type: "quantitative",
    status: "live",
    href: "./internationale-wirtschaftsbeziehungen/index.html",
    materials: [
      "Ricardo, Heckscher-Ohlin, Krugman, Zoelle, Sanktionen und Handelsabkommen",
      "UIP, Kaufkraftparitaet, Quantitaetstheorie, Overshooting und Trilemma",
      "Geeignet fuer Modellvergleiche, Politikfolgen und offene-Makro-Interpretation"
    ],
    sourcePath: `${sourceRoot}/Grundlagen der internationalen Wirtschaftsbeziehungen`
  },
  {
    slug: "jahresabschluss",
    title: "Jahresabschluss",
    shortTitle: "Jahresabschluss",
    summary: "Bilanz, Buchungslogik, Bewertungsfragen, Tutorien und Probeklausur in einem einheitlichen Lernportal.",
    accent: BRAND_ACCENT,
    type: "mixed",
    status: "live",
    href: "./jahresabschluss/index.html",
    materials: [
      "Kapitel 1 bis 10 plus eigene Tutorien zu jedem Kapitel",
      "Zusammenfassungen, Leerschema und Probeklausur mit Musterloesung",
      "Ideal fuer Kontierungswege, Bewertungsregeln und komplette Klausurablaeufe"
    ],
    sourcePath: `${sourceRoot}/Jahresabschluss`
  },
  {
    slug: "recht",
    title: "Recht",
    shortTitle: "Recht",
    summary: "Definitionen, Gutachtenstil, Fallanwendung und Schuldrecht-Logik fuer klausurnahe Rechtsfaelle.",
    accent: BRAND_ACCENT,
    type: "text_doctrinal",
    status: "live",
    href: "./recht/index.html",
    materials: [
      "Vollstaendige Kurslinie mit Definitionen, Faellen und Gutachtenstil",
      "Portalmodus ersetzt Graphen durch Pruefungsschemata, Fallkarten und Argumentstrukturen",
      "Klausurtraining wird auf Kurzfaelle und Mustersubsumtionen ausgerichtet"
    ],
    sourcePath: `${sourceRoot}/Recht`
  },
  {
    slug: "r",
    title: "R",
    shortTitle: "R",
    summary: "R-Grundlagen, mathematische Skriptlogik, Datensatzpraxis und klausurnahe Coding-Workflows.",
    accent: BRAND_ACCENT,
    type: "quantitative_coding",
    status: "live",
    href: "./r/index.html",
    materials: [
      "Durchgehender R-Lernpfad von Grundlagen bis Optimierung",
      "Datensaetze fuer Filtering, Regression, Klassifikation und kleine Projektaufgaben",
      "R-Lab mit reproduzierbaren Codeuebungen statt blosem Syntax-Nachschlagen"
    ],
    sourcePath: `${sourceRoot}/R`,
    rLab: {
      intro: "Die Aufgaben bauen einen sauberen R-Lernpfad von Grundlagen ueber Matrizen und Analysis bis zur Optimierung auf. Wo Kursbeispiele Zusatzpakete nutzen, bleibt die zugrunde liegende Logik hier mit stabilen Standardbefehlen uebbar.",
      lessons: [
        {
          id: "r-objects-vectors",
          title: "R-E1: Objekte, Folgen und Logik",
          source: "R/R-Skripte/Rcode_E1.R",
          prompt: "Lege Rechnung1 <- 1 + 2, HundertNatuerlicheZahlen <- 1:100, TausendeinsRationaleZahlen <- seq(0, 100, by = 0.1), ZweiReelleZahlen <- c(pi, sqrt(2)) und x_gross_genug <- x >= 10 mit x <- 12 an.",
          starterCode: `Rechnung1 <- NULL\nHundertNatuerlicheZahlen <- NULL\nTausendeinsRationaleZahlen <- NULL\nZweiReelleZahlen <- NULL\nx <- 12\nx_gross_genug <- NULL\n\nprint(Rechnung1)\nprint(head(HundertNatuerlicheZahlen))\nprint(head(TausendeinsRationaleZahlen))\nprint(ZweiReelleZahlen)\nprint(x_gross_genug)\n`,
          hints: [
            "Die Vorlage im Skript nutzt 1:100, seq(0,100,by=0.1) und c(pi, sqrt(2)).",
            "Die logische Pruefung ist schlicht x >= 10."
          ],
          checks: [
            { mode: "code", type: "includes", value: "Rechnung1 <- 1 + 2" },
            { mode: "code", type: "includes", value: "HundertNatuerlicheZahlen <- 1:100" },
            { mode: "code", type: "includes", value: "seq(0, 100, by = 0.1)" },
            { mode: "code", type: "includes", value: "c(pi, sqrt(2))" },
            { mode: "code", type: "includes", value: "x >= 10" }
          ],
          runtimeChecks: [
            { expression: "exists('Rechnung1') && identical(Rechnung1, 3)", label: "Rechnung1 stimmt" },
            { expression: "exists('HundertNatuerlicheZahlen') && length(HundertNatuerlicheZahlen) == 100", label: "Folge 1:100 wurde gebaut" },
            { expression: "exists('TausendeinsRationaleZahlen') && length(TausendeinsRationaleZahlen) == 1001", label: "seq()-Folge stimmt" },
            { expression: "exists('ZweiReelleZahlen') && length(ZweiReelleZahlen) == 2", label: "Reelle Zahlen liegen vor" },
            { expression: "exists('x_gross_genug') && identical(x_gross_genug, TRUE)", label: "Logikpruefung stimmt" }
          ],
          solution: `Rechnung1 <- 1 + 2\nHundertNatuerlicheZahlen <- 1:100\nTausendeinsRationaleZahlen <- seq(0, 100, by = 0.1)\nZweiReelleZahlen <- c(pi, sqrt(2))\nx <- 12\nx_gross_genug <- x >= 10\n\nprint(Rechnung1)\nprint(head(HundertNatuerlicheZahlen))\nprint(head(TausendeinsRationaleZahlen))\nprint(ZweiReelleZahlen)\nprint(x_gross_genug)\n`
        },
        {
          id: "r-functions-plots",
          title: "R-E2: Funktionen und Vektorplots",
          source: "R/R-Skripte/Rcode_E2.R",
          prompt: "Definiere fx(x) = x^2 - 4*x + 3, berechne fx(2), fx(0:4), xWerte2 <- seq(0, 4, length.out = 101) und werte fx auf xWerte2 aus.",
          starterCode: `fx <- NULL\nwert_bei_2 <- NULL\nwerte_diskret <- NULL\nxWerte2 <- NULL\nwerte_glatt <- NULL\n\nprint(wert_bei_2)\nprint(werte_diskret)\nprint(head(xWerte2))\nprint(head(werte_glatt))\n`,
          hints: [
            "Im Skript wird fx als function(x) { x^2 - 4*x + 3 } angelegt.",
            "Die glatte Sequenz wird mit seq(0,4,length.out=101) erzeugt."
          ],
          checks: [
            { mode: "code", type: "includes", value: "fx <- function(x)" },
            { mode: "code", type: "includes", value: "fx(0:4)" },
            { mode: "code", type: "includes", value: "seq(0, 4, length.out = 101)" }
          ],
          runtimeChecks: [
            { expression: "exists('fx') && is.function(fx)", label: "fx() ist definiert" },
            { expression: "exists('wert_bei_2') && identical(as.numeric(wert_bei_2), -1)", label: "fx(2) stimmt" },
            { expression: "exists('werte_diskret') && length(werte_diskret) == 5", label: "Vektorauswertung liegt vor" },
            { expression: "exists('xWerte2') && length(xWerte2) == 101", label: "Plot-Sequenz wurde gebaut" },
            { expression: "exists('werte_glatt') && length(werte_glatt) == 101", label: "Glatte Funktionswerte wurden erzeugt" }
          ],
          solution: `fx <- function(x) {\n  yWert <- x^2 - 4*x + 3\n  return(yWert)\n}\n\nwert_bei_2 <- fx(2)\nwerte_diskret <- fx(0:4)\nxWerte2 <- seq(0, 4, length.out = 101)\nwerte_glatt <- fx(xWerte2)\n\nprint(wert_bei_2)\nprint(werte_diskret)\nprint(head(xWerte2))\nprint(head(werte_glatt))\n`
        },
        {
          id: "r-sums-data",
          title: "R-E3: Summen und Datenobjekte",
          source: "R/R-Skripte/Rcode_E3.R",
          prompt: "Lege Umsatz als 3x4-data.frame aus den Werten 53, 92, 22, 32, 92, 28, 61, 46, 89, 7, 57, 3 an und berechne rowSums(Umsatz), colSums(Umsatz) und sum(Umsatz).",
          starterCode: `Umsatz <- NULL\nzeilensummen <- NULL\nspaltensummen <- NULL\ngesamtsumme <- NULL\n\nprint(Umsatz)\nprint(zeilensummen)\nprint(spaltensummen)\nprint(gesamtsumme)\n`,
          hints: [
            "Die Beispielwerte aus dem Skript werden mit matrix(..., nrow = 3) aufgebaut.",
            "rowSums(), colSums() und sum() sind die drei Kernbefehle."
          ],
          checks: [
            { mode: "code", type: "includes", value: "matrix(c(53,92,22,32,92,28,61,46,89,7,57,3), nrow = 3)" },
            { mode: "code", type: "includes", value: "rowSums(Umsatz)" },
            { mode: "code", type: "includes", value: "colSums(Umsatz)" },
            { mode: "code", type: "includes", value: "sum(Umsatz)" }
          ],
          runtimeChecks: [
            { expression: "exists('Umsatz') && nrow(Umsatz) == 3 && ncol(Umsatz) == 4", label: "Umsatz ist 3x4" },
            { expression: "exists('zeilensummen') && length(zeilensummen) == 3", label: "Zeilensummen wurden berechnet" },
            { expression: "exists('spaltensummen') && length(spaltensummen) == 4", label: "Spaltensummen wurden berechnet" },
            { expression: "exists('gesamtsumme') && identical(as.numeric(gesamtsumme), 582)", label: "Gesamtsumme stimmt" }
          ],
          solution: `Umsatz <- as.data.frame(matrix(c(53,92,22,32,92,28,61,46,89,7,57,3), nrow = 3))\nzeilensummen <- rowSums(Umsatz)\nspaltensummen <- colSums(Umsatz)\ngesamtsumme <- sum(Umsatz)\n\nprint(Umsatz)\nprint(zeilensummen)\nprint(spaltensummen)\nprint(gesamtsumme)\n`
        },
        {
          id: "r-matrices",
          title: "R-LA1: Matrizen aufbauen und multiplizieren",
          source: "R/R-Skripte/Rcode_LA1.R",
          prompt: "Erzeuge MatrixObjekt als 2x3-Matrix aus c(6,2,3,4,5,1) byrow = TRUE, MatrixObjekt2 als 3x2-Matrix aus 7:12 und berechne das Produkt MatrixObjekt %*% MatrixObjekt2.",
          starterCode: `MatrixObjekt <- NULL\nMatrixObjekt2 <- NULL\nProdukt <- NULL\n\nprint(MatrixObjekt)\nprint(MatrixObjekt2)\nprint(Produkt)\n`,
          hints: [
            "Nutze matrix(..., nrow = 2, byrow = TRUE).",
            "Das echte Matrixprodukt schreibt sich mit %*%."
          ],
          checks: [
            { mode: "code", type: "includes", value: "matrix(c(6,2,3,4,5,1), nrow = 2, byrow = TRUE)" },
            { mode: "code", type: "includes", value: "matrix(7:12, nrow = 3)" },
            { mode: "code", type: "includes", value: "MatrixObjekt %*% MatrixObjekt2" }
          ],
          runtimeChecks: [
            { expression: "exists('MatrixObjekt') && is.matrix(MatrixObjekt) && all(dim(MatrixObjekt) == c(2, 3))", label: "2x3-Matrix stimmt" },
            { expression: "exists('MatrixObjekt2') && is.matrix(MatrixObjekt2) && all(dim(MatrixObjekt2) == c(3, 2))", label: "3x2-Matrix stimmt" },
            { expression: "exists('Produkt') && is.matrix(Produkt) && all(dim(Produkt) == c(2, 2))", label: "Produktdimension stimmt" }
          ],
          solution: `MatrixObjekt <- matrix(c(6,2,3,4,5,1), nrow = 2, byrow = TRUE)\nMatrixObjekt2 <- matrix(7:12, nrow = 3)\nProdukt <- MatrixObjekt %*% MatrixObjekt2\n\nprint(MatrixObjekt)\nprint(MatrixObjekt2)\nprint(Produkt)\n`
        },
        {
          id: "r-linear-systems",
          title: "R-LA2: det() und solve()",
          source: "R/R-Skripte/Rcode_LA2.R",
          prompt: "Lege A <- matrix(c(2,4,0,1,-1,2,0,1,-1), nrow = 3) und b <- c(1,0,3) an, berechne det(A) und loese das System mit solve(A, b).",
          starterCode: `A <- NULL\nb <- NULL\ndetA <- NULL\nloesung <- NULL\n\nprint(detA)\nprint(loesung)\n`,
          hints: [
            "Die Matrix aus dem Skript hat 3 Zeilen und 3 Spalten.",
            "solve(A, b) liefert direkt den Loesungsvektor."
          ],
          checks: [
            { mode: "code", type: "includes", value: "matrix(c(2,4,0,1,-1,2,0,1,-1), nrow = 3)" },
            { mode: "code", type: "includes", value: "det(A)" },
            { mode: "code", type: "includes", value: "solve(A, b)" }
          ],
          runtimeChecks: [
            { expression: "exists('A') && is.matrix(A) && all(dim(A) == c(3, 3))", label: "A ist 3x3" },
            { expression: "exists('detA') && is.numeric(detA) && length(detA) == 1", label: "Determinante wurde berechnet" },
            { expression: "exists('loesung') && length(loesung) == 3", label: "solve()-Loesung liegt vor" }
          ],
          solution: `A <- matrix(c(2,4,0,1,-1,2,0,1,-1), nrow = 3)\nb <- c(1,0,3)\ndetA <- det(A)\nloesung <- solve(A, b)\n\nprint(detA)\nprint(loesung)\n`
        },
        {
          id: "r-derivatives-roots",
          title: "R-AN1: D() und uniroot()",
          source: "R/R-Skripte/Rcode_AN1.R",
          prompt: "Lege f <- expression(x^5 + x^2 + 3*x) an, bestimme die Ableitung mit D(f, 'x') und finde fuer fx(x) = x^6 + 3*x^2 - 2*x - 1 eine Nullstelle auf dem Intervall [0,1] mit uniroot().",
          starterCode: `f <- NULL\nd1 <- NULL\nfx <- NULL\nnullstelle <- NULL\n\nprint(d1)\nprint(nullstelle)\n`,
          hints: [
            "Das Skript nutzt sowohl D(...) als auch uniroot(..., interval = c(0,1)).",
            "Speichere aus dem uniroot-Ergebnis am besten direkt $root."
          ],
          checks: [
            { mode: "code", type: "includes", value: "expression(x^5 + x^2 + 3*x)" },
            { mode: "code", type: "includes", value: "D(f, \"x\")" },
            { mode: "code", type: "includes", value: "uniroot(fx, interval = c(0, 1))" }
          ],
          runtimeChecks: [
            { expression: "exists('d1')", label: "Symbolische Ableitung existiert" },
            { expression: "exists('fx') && is.function(fx)", label: "fx() ist definiert" },
            { expression: "exists('nullstelle') && is.numeric(nullstelle) && nullstelle > 0 && nullstelle < 1", label: "Nullstelle im Intervall gefunden" }
          ],
          solution: `f <- expression(x^5 + x^2 + 3*x)\nd1 <- D(f, "x")\n\nfx <- function(x) {\n  x^6 + 3*x^2 - 2*x - 1\n}\n\nnullstelle <- uniroot(fx, interval = c(0, 1))$root\n\nprint(d1)\nprint(nullstelle)\n`
        },
        {
          id: "r-multivar",
          title: "R-AN2: outer() und persp()",
          source: "R/R-Skripte/Rcode_AN2.R",
          prompt: "Lege x2 <- seq(0, 3, by = 0.1), y2 <- seq(0, 3, by = 0.1), xy2 <- outer(x2, y2) und z2 <- sqrt(xy2) an. Speichere die Dimensionen von z2 und den Wert z2[1,1].",
          starterCode: `x2 <- NULL\ny2 <- NULL\nxy2 <- NULL\nz2 <- NULL\ndimensionen <- NULL\nstartwert <- NULL\n\nprint(dimensionen)\nprint(startwert)\n`,
          hints: [
            "outer(x2, y2) bildet das Gitterprodukt.",
            "z2 sollte dieselbe Matrixdimension wie xy2 haben."
          ],
          checks: [
            { mode: "code", type: "includes", value: "seq(0, 3, by = 0.1)" },
            { mode: "code", type: "includes", value: "outer(x2, y2)" },
            { mode: "code", type: "includes", value: "sqrt(xy2)" }
          ],
          runtimeChecks: [
            { expression: "exists('xy2') && is.matrix(xy2)", label: "outer()-Matrix existiert" },
            { expression: "exists('z2') && is.matrix(z2)", label: "z2 ist Matrix" },
            { expression: "exists('dimensionen') && length(dimensionen) == 2", label: "Dimensionen wurden ausgelesen" }
          ],
          solution: `x2 <- seq(0, 3, by = 0.1)\ny2 <- seq(0, 3, by = 0.1)\nxy2 <- outer(x2, y2)\nz2 <- sqrt(xy2)\ndimensionen <- dim(z2)\nstartwert <- z2[1, 1]\n\nprint(dimensionen)\nprint(startwert)\n`
        },
        {
          id: "r-integrals",
          title: "R-AN3: integrate()",
          source: "R/R-Skripte/Rcode_AN3.R",
          prompt: "Definiere fx(x) = exp(2*x), berechne integrate(fx, lower = 2, upper = 5) und speichere den Integralwert separat ab.",
          starterCode: `fx <- NULL\nintegral_objekt <- NULL\nintegral_wert <- NULL\n\nprint(integral_objekt)\nprint(integral_wert)\n`,
          hints: [
            "integrate() liefert ein Ergebnisobjekt mit dem Feld $value.",
            "Die Funktion fx soll genau exp(2*x) zurueckgeben."
          ],
          checks: [
            { mode: "code", type: "includes", value: "fx <- function(x)" },
            { mode: "code", type: "includes", value: "exp(2*x)" },
            { mode: "code", type: "includes", value: "integrate(fx, lower = 2, upper = 5)" }
          ],
          runtimeChecks: [
            { expression: "exists('fx') && is.function(fx)", label: "fx() ist definiert" },
            { expression: "exists('integral_objekt') && is.list(integral_objekt)", label: "integrate() wurde ausgefuehrt" },
            { expression: "exists('integral_wert') && abs(as.numeric(integral_wert) - as.numeric(integrate(fx, lower = 2, upper = 5)$value)) < 1e-8", label: "Integralwert stimmt" }
          ],
          solution: `fx <- function(x) {\n  exp(2*x)\n}\n\nintegral_objekt <- integrate(fx, lower = 2, upper = 5)\nintegral_wert <- integral_objekt$value\n\nprint(integral_objekt)\nprint(integral_wert)\n`
        },
        {
          id: "r-univar-opt",
          title: "R-OP1: optimise() und nlm()",
          source: "R/R-Skripte/Rcode_OP1.R",
          prompt: "Definiere profit.fun(N) = 10*sqrt(N) - 0.5*N, finde mit optimise(..., interval = c(0, 1000), maximum = TRUE) das Maximum und lies den optimalen N-Wert aus.",
          starterCode: `profit.fun <- NULL\nopt <- NULL\noptimum <- NULL\n\nprint(opt)\nprint(optimum)\n`,
          hints: [
            "Der Intervallrahmen im Skript lautet 0 bis 1000.",
            "Der optimale Wert steckt in opt$maximum."
          ],
          checks: [
            { mode: "code", type: "includes", value: "profit.fun <- function(N)" },
            { mode: "code", type: "includes", value: "optimise(profit.fun, interval = c(0, 1000), maximum = TRUE)" }
          ],
          runtimeChecks: [
            { expression: "exists('profit.fun') && is.function(profit.fun)", label: "profit.fun() ist definiert" },
            { expression: "exists('opt') && is.list(opt) && !is.null(opt$maximum)", label: "optimise() wurde ausgefuehrt" },
            { expression: "exists('optimum') && is.numeric(optimum) && abs(optimum - 100) < 1e-4", label: "Optimum wurde korrekt ausgelesen" }
          ],
          solution: `profit.fun <- function(N) {\n  10 * sqrt(N) - 0.5 * N\n}\n\nopt <- optimise(profit.fun, interval = c(0, 1000), maximum = TRUE)\noptimum <- opt$maximum\n\nprint(opt)\nprint(optimum)\n`
        },
        {
          id: "r-multivar-opt",
          title: "R-OP2: Bivariate Optimierung mit nlm()",
          source: "R/R-Skripte/Rcode_OP2.R",
          prompt: "Definiere fxy(par) = -2*x^2 - 2*x*y - 2*y^2 + 36*x + 42*y - 158, baue neg.fxy(par) = -fxy(par) und fuehre nlm(f = neg.fxy, p = c(3, 3)) aus.",
          starterCode: `fxy <- NULL\nneg.fxy <- NULL\nopt <- NULL\nloesung <- NULL\n\nprint(opt)\nprint(loesung)\n`,
          hints: [
            "Die Zielfunktion wird in OP2 zuerst positiv, dann als negative Huelle fuer nlm() definiert.",
            "Die geschaetzte Loesung steht spaeter in opt$estimate."
          ],
          checks: [
            { mode: "code", type: "includes", value: "fxy <- function(par)" },
            { mode: "code", type: "includes", value: "neg.fxy <- function(par)" },
            { mode: "code", type: "includes", value: "nlm(f = neg.fxy, p = c(3, 3))" }
          ],
          runtimeChecks: [
            { expression: "exists('fxy') && is.function(fxy)", label: "fxy() ist definiert" },
            { expression: "exists('neg.fxy') && is.function(neg.fxy)", label: "neg.fxy() ist definiert" },
            { expression: "exists('opt') && is.list(opt) && !is.null(opt$estimate)", label: "nlm() wurde ausgefuehrt" },
            { expression: "exists('loesung') && length(loesung) == 2", label: "Loesungsvektor wurde gespeichert" }
          ],
          solution: `fxy <- function(par) {\n  x <- par[1]\n  y <- par[2]\n  -2 * x^2 - 2 * x * y - 2 * y^2 + 36 * x + 42 * y - 158\n}\n\nneg.fxy <- function(par) {\n  -fxy(par)\n}\n\nopt <- nlm(f = neg.fxy, p = c(3, 3))\nloesung <- opt$estimate\n\nprint(opt)\nprint(loesung)\n`
        },
        {
          id: "r-titanic",
          title: "LearnR: Titanic-Daten filtern und Raten berechnen",
          source: "R/LearnR/phase3.R + csv/titanic.csv",
          prompt: "Lege einen kleinen Titanic-Datensatz direkt im Skript an, filtere die Ueberlebenden mit subset(), bestimme fuer Maenner und Frauen jeweils Gesamtzahl, Ueberlebende und Ueberlebensrate.",
          starterCode: `titanic_data <- data.frame(\n  survived = c(0, 1, 1, 0, 1, 0),\n  sex = c(\"male\", \"female\", \"female\", \"male\", \"male\", \"female\")\n)\n\nsurvivors <- NULL\nsurviving_men <- NULL\nsurviving_women <- NULL\ntotal_men <- NULL\ntotal_women <- NULL\nsurvival_rate_men <- NULL\nsurvival_rate_women <- NULL\n\nprint(survival_rate_men)\nprint(survival_rate_women)\n`,
          hints: [
            "Die LearnR-Datei arbeitet mit einem survivors-Objekt und danach getrennten Filtern fuer male und female.",
            "Mit subset(df, condition) kannst du das auch ohne dplyr stabil nachbauen."
          ],
          checks: [
            { mode: "code", type: "includes", value: "subset(titanic_data, survived == 1)" },
            { mode: "code", type: "includes", value: "subset(survivors, sex == \"male\")" },
            { mode: "code", type: "includes", value: "subset(survivors, sex == \"female\")" }
          ],
          runtimeChecks: [
            { expression: "exists('survivors') && nrow(survivors) == 3", label: "Ueberlebende wurden gefiltert" },
            { expression: "exists('total_men') && identical(as.numeric(total_men), 3)", label: "Gesamtzahl Maenner stimmt" },
            { expression: "exists('total_women') && identical(as.numeric(total_women), 3)", label: "Gesamtzahl Frauen stimmt" },
            { expression: "exists('survival_rate_men') && abs(as.numeric(survival_rate_men) - (2/3)) < 1e-10", label: "Ueberlebensrate Maenner stimmt" },
            { expression: "exists('survival_rate_women') && abs(as.numeric(survival_rate_women) - (1/3)) < 1e-10", label: "Ueberlebensrate Frauen stimmt" }
          ],
          solution: `titanic_data <- data.frame(\n  survived = c(0, 1, 1, 0, 1, 0),\n  sex = c(\"male\", \"female\", \"female\", \"male\", \"male\", \"female\")\n)\n\nsurvivors <- subset(titanic_data, survived == 1)\nsurviving_men <- subset(survivors, sex == \"male\")\nsurviving_women <- subset(survivors, sex == \"female\")\n\ntotal_men <- nrow(subset(titanic_data, sex == \"male\"))\ntotal_women <- nrow(subset(titanic_data, sex == \"female\"))\nsurvival_rate_men <- nrow(surviving_men) / total_men\nsurvival_rate_women <- nrow(surviving_women) / total_women\n\nprint(survival_rate_men)\nprint(survival_rate_women)\n`
        }
      ]
    }
  },
  {
    slug: "politisches-system-brd",
    title: "Einführung in das politische System der BRD",
    shortTitle: "Einführung in das politische System der BRD",
    summary: "Politische Institutionen, Prozesse und Vergleichslogik der BRD mit textorientierter Klausurvorbereitung.",
    accent: BRAND_ACCENT,
    type: "text_doctrinal",
    status: "live",
    hidden: true,
    href: "./politisches-system-brd/index.html",
    materials: [
      "Aktive Wiederholung zu Bundestag, Bundesrat, Bundesregierung und weiteren Kernthemen",
      "Begriffskarten und Vergleichsstrukturen fuer definitorisches Lernen",
      "Ideal fuer Begriffskarten, Vergleichsmatrizen und Zusammenhaenge zwischen Institutionen"
    ],
    sourcePath: `${sourceRoot}/Einführung in das politische System der BRD`
  }
];

export const PUBLIC_MODULES = MODULES.filter((module) => !module.hidden);

export const FILTERS = [
  { id: "all", label: "Alle" },
  { id: "quantitative", label: "Quantitativ" },
  { id: "quantitative_coding", label: "Mit R-Lab" },
  { id: "text_doctrinal", label: "Textlastig" },
  { id: "mixed", label: "Mixed" }
];

export function getModuleBySlug(slug) {
  return MODULES.find((module) => module.slug === slug) || null;
}
