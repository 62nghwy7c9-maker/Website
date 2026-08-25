# Was 51 Designsysteme gemeinsam haben

Auswertung der öffentlich zugänglichen Refero-Bibliothek: 51 vollständige
Designsysteme, 725 ausformulierte Regeln, dazu die Messdaten aus den jeweiligen
Originalseiten. Erhoben am 25.08.2026.

Methode: Alle Style-Detailseiten über den RSC-Endpunkt geladen, die Datenobjekte
aus dem Flight-Payload gelöst, im Code aggregiert. Rohdaten in `library-analysis.json`.

---

## Der zentrale Befund

**Die Systeme widersprechen sich in fast jeder Einzelfrage — und genau das ist die
Erkenntnis.**

| Frage | dagegen | dafür |
|---|---|---|
| Schatten benutzen? | 53 Regeln | 36 Regeln |
| Ränder/Haarlinien benutzen? | 26 Regeln | 57 Regeln |
| Runde Ecken? | 40 Regeln | 45 Regeln |
| Zentrierter Text? | 9 Regeln | 6 Regeln |

Gemessen an den Originalseiten: 33 von 51 Systemen verwenden **keinen einzigen**
Schatten, 18 verwenden welche. 23 Systeme runden mit höchstens 8px, 4 machen die
Pille zur Signatur.

Es gibt also keine Regel „Schatten sind schlecht". Es gibt nur Systeme, die sich
entschieden haben — und sich dann nicht mehr widersprechen.

**56 % aller 725 Regeln sind absolut formuliert.** „never" kommt 152-mal vor,
„only" 117-mal, „exclusively" 27-mal, „non-negotiable" 14-mal. Das häufigste
Thema in beiden Listen ist Zurückhaltung: 41 % der DO-Regeln und 43 % der
DONT-Regeln handeln davon, etwas *nicht* zu tun oder auf genau eine Möglichkeit
zu begrenzen.

Gutes Design ist in diesem Korpus keine Sammlung schöner Elemente. Es ist eine
kurze Liste von Entscheidungen, die konsequent durchgehalten wird.

---

## Worin sie sich doch einig sind

Diese Werte sind über alle Stilrichtungen hinweg stabil. Wer keinen Grund für
etwas anderes hat, nimmt sie:

| Entscheidung | Befund |
|---|---|
| Basiseinheit für Abstände | **4px** in 61 % der Systeme (8px: 18 %) |
| Fließtextgröße | **16px** in 45 %; zwischen 12 und 17px liegen ~75 % |
| Anzahl Schriftfamilien | **1–2** in 73 % der Systeme |
| Kontrast | **77 %** aller dokumentierten Paarungen erreichen AAA |
| Bunte Farben insgesamt | Median **3** — die Hälfte der Systeme kommt mit ≤3 aus |
| Dichte | „comfortable" in 65 % |

**Der Größensprung ist das eigentliche Hierarchie-Werkzeug.** Median der größten
Schriftgröße: 64px, bei 16px Fließtext. Das ist ein Verhältnis von **4:1**.
18 % der Systeme gehen auf 128px und mehr. Hierarchie entsteht nicht durch viele
kleine Abstufungen, sondern durch einen großen Sprung.

Dazu passt eine Regel, die in mehreren Systemen fast wörtlich auftaucht:
Zeilenhöhe oben eng (1.0–1.1), unten offen (1.4–1.5). Der Kontrast zwischen den
beiden macht die Hierarchie, nicht die Schriftgröße allein.

---

## Die sechs Muster

### 1 Eine Aktionsfarbe, und sonst keine

26 Regeln fordern ausdrücklich **genau eine** Farbe für Aktionen. Formulierungen
wie „Use #bdff00 lime as the ONLY filled action color; never substitute another
hue" oder „Reserve Cobalt #5266eb exclusively for the single primary action per
page — never as a decorative accent, icon fill, or secondary button".

Die Farbe ist dabei fast beliebig. Die Ausschließlichkeit ist der Punkt: Wenn nur
eine Sache bunt ist, weiß die Leserin ohne Nachdenken, wo sie klicken soll.

### 2 Tiefe kommt aus einer Quelle, nicht aus dreien

Jedes System wählt **ein** Mittel, um Flächen voneinander zu trennen: Schatten
*oder* Haarlinie *oder* Flächenfarbwechsel. Die Regeln sagen das explizit — „the
system relies on hairline borders and surface contrast, not elevation" gegen „Do
not skip the 1px hairline border on cards — the shadow alone does not define the
card edge in this system".

Wer alle drei mischt, bekommt kein reicheres Interface, sondern ein unentschiedenes.

### 3 Die Form ist tragend oder gar nicht da

„the pill shape is load-bearing", „the 20–24px radii are a signature",
„rounding is reserved exclusively for pills". Radien sind in diesem Korpus nie
Dekoration. Entweder eine Form ist Teil der Identität und gilt dann überall, oder
es gibt sie nicht.

Praktisch: höchstens zwei Radiuswerte im ganzen System — einer für interaktive
Elemente, einer für Container.

### 4 Weniger Schrift, mehr Spannweite

73 % kommen mit ein bis zwei Schriftfamilien aus. Die Vielfalt entsteht innerhalb
der Familie: durch Gewicht, Größe und Laufweite. Mehrere Systeme legen sich sogar
auf **ein** Gewicht fest („never apply bold or semibold weights to it — the
whisper-weight is the brand's signature restraint").

Auch die Laufweite folgt einem wiederkehrenden Muster: negativ auf großer Schrift,
neutral bis leicht positiv auf kleiner. Ein System beschreibt das als bewusst
gegenläufig — enge Headline, offener Fließtext.

### 5 Ein Satz, der das Ganze trägt

**Alle 51 Systeme** haben einen `northStar` — durchschnittlich 85 Zeichen, immer
ein sinnliches Bild, nie eine Kategorie:

- „Electric terminal in a deep forest vault — lime phosphor on midnight olive."
- „building-scale typography on painted concrete"
- „clinical blueprint on frosted paper"
- „Monochrome editorial struck yellow — a typographic monolith on white marble
  interrupted by a single flash of electric yellow."

Keins sagt „modern und clean". Der Satz ist der Prüfstein: Wenn eine neue
Komponente nicht in dieses Bild passt, gehört sie nicht dazu.

### 6 Farbe kommt aus dem Inhalt

Wiederkehrend über sehr verschiedene Stile hinweg: Das UI bleibt fast farblos,
die Farbe steckt in Bildern, Produktfotos oder vollflächigen Farbblöcken.
„Let the four brand colors sit edge-to-edge with no card padding, no border, and
no shadow — the color block is the component."

Das erklärt den Median von 3 bunten Tönen: Ein zurückhaltendes UI trägt starke
Inhalte, umgekehrt funktioniert es nicht.

---

## Anwendung auf diese Website

Was daraus für Webgewerk folgt — und wo die Seite noch nicht sauber ist:

**Eingehalten.** Eine Aktionsfarbe (`#0071e3`, nur gefüllte CTAs) · Tiefe
ausschließlich über den Flächenwechsel Weiß/`#f5f5f7`, keine Schatten · 4px
Basiseinheit · zwei Radien (28px Flächen, Pille für Buttons) · eine
Schriftfamilie · Größensprung 17px Fließtext auf 96px Display, also 5,6:1 ·
Zeilenhöhe 1.04 oben gegen 1.47 unten.

**Offen.** Die Seite hat noch keinen northStar-Satz. Ohne ihn fehlt der Prüfstein
für jede weitere Komponente. Vorschlag als Ausgangspunkt:

> Werkstatt in Weiß — riesige, ruhige Schrift über sauber gefrästen Flächen,
> unterbrochen von genau einem blauen Signal.

Wer den Satz ändert, ändert die Seite. Wer ihn nicht formuliert, bekommt beim
nächsten Ausbau eine Sammlung statt eines Systems.

---

## Grenzen dieser Auswertung

- **51 Systeme, nicht die ganze Bibliothek.** Die öffentliche Oberfläche gibt
  über alle Sortier- und Filterwerte hinweg genau 51 eindeutige Styles her.
  `?page=N` wird serverseitig ignoriert — 200 abgerufene Seiten enthielten
  dieselben 20 Einträge. Mehr ist ohne Anmeldung nicht erreichbar.
- **Die Regeln stammen von Refero**, nicht von den Firmen selbst. Es sind
  Interpretationen fremder Websites, teils mit Fehlern (siehe
  `REFERENCE-STYLE.md`, Abschnitt 10).
- **„Gut" heißt hier: von Refero als vorbildlich kuratiert.** Kein Beleg über
  Conversion, Verständlichkeit oder Nutzerzufriedenheit. Die Muster zeigen, worin
  sich handwerklich anerkannte Arbeiten einig sind — nicht, was messbar wirkt.
- **Die Messdaten sind Momentaufnahmen** einzelner Seiten bei 1440×900, nicht
  ganzer Designsysteme.
