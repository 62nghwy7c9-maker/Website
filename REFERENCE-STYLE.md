# Referenz-Style — vollständige Spec

Quelle: Refero, „Apple (España) design system"
<https://styles.refero.design/style/c9cabb96-32fa-4896-837a-f2497ce1c856>
Abgerufen am 25.08.2026.

Das hier ist die **vollständige Vorlage**, so wie Refero sie liefert — die redaktionelle
Fassung in den Abschnitten 1–7, die gemessenen Rohdaten in Abschnitt 8. Die Rohdaten
liegen zusätzlich maschinenlesbar in `reference-style.json` (Referos eigene Extraktion). `DESIGN.md`
daneben ist die verdichtete Fassung, nach der die Seite tatsächlich gebaut wurde —
sie enthält nur, was für dieses Projekt gebraucht wurde. Wenn die Seite erweitert
wird, ist dieses Dokument die Quelle.

Zwei Werte der Vorlage sind fehlerhaft und wurden **nicht** übernommen — siehe
„Bekannte Fehler in der Vorlage" am Ende.

---

## 1 Farben

### Akzente

| Name | Wert | Rolle laut Vorlage |
|---|---|---|
| Electric Blue | `#0071e3` | Gefüllte Aktionsbuttons — der einzige chromatische Akzent im UI, sparsam für CTAs |
| Link Blue | `#0066cc` | Inline-Textlinks, Chevron-Text der Pfeil-Links |
| Ember | `#b64400` | Oranger Statusakzent für Badges, Validierungsflächen, kurze Statuslabels |

### Text und Linien

| Name | Wert | Rolle |
|---|---|---|
| Primary Ink | `#1d1d1f` | Headlines, Fließtext, Button-Label |
| Deep Gray | `#474747` | Navigationstext und Icons, mittlere Betonung |
| Mid Gray | `#707070` | Sekundärtext, inaktive Navigation, gedämpfte Labels |
| Quiet Dot | `#777779` | Füllung der Paginierungspunkte, tertiärer Interaktionszustand |
| Hairline | `#d6d6d6` | Haarlinien zwischen Sektionen und UI-Elementen |

### Flächen

| Name | Wert | Rolle |
|---|---|---|
| Paper | `#ffffff` | Kartenflächen, primärer Seitenhintergrund, Buttontext auf dunkler Füllung |
| Canvas | `#f5f5f7` | Alternierende Sektionshintergründe — das graue Band, das weiße Sektionen bricht |
| Cool Wash | `#e8e8ed` | Dezente Buttonflächen, Hover-Flächen, Paginierungspunkte |
| Faded Surface | `#fafafc` | Globale Navigation im geöffneten Zustand, erhobene Panels |

### Produkt-Finish-Töne

Sky `#c8d8e0` · Citrus `#dddc8c` · Starlight `#f0e4d3` · Silver `#e3e4e5` ·
Blush `#e8d0d0` · Indigo `#596680` · Midnight `#2e3642`

---

## 2 Typografie

**Skala:** Kleine Terz (1,2) ausgehend von 20px Basis.
**OpenType:** `font-feature-settings: "numr"` auf allem Numerischen.

| Rolle | Größe | Gewicht | Zeilenhöhe | Laufweite |
|---|---|---|---|---|
| display | 96px | 600 | 1.04 (100px) | −1.44px |
| heading-lg | 80px | 700 | 1.05 (84px) | −1.2px |
| heading | 56px | 700 | 1.07 (60px) | −0.28px |
| heading-sm | 40px | 600 | 1.2 (48px) | — |
| subheading | 32px | 600 | 1.125 (36px) | +0.128px |
| — | 24px | 600 | 1.17 | — |
| body-lg | 28px | 600 | 1.14 (32px) | +0.196px |
| body | 21px | 600 | 1.38 (29px) | +0.231px |
| body-sm | 17px | 400 | 1.47 (25px) | −0.374px |
| caption | 14px | 400 | 1.29 (18px) | −0.224px |
| micro | 12px | 400 | 1.33 (16px) | −0.12px |

### Schriftfamilien

**SF Pro Display — Display-Headlines.** Gewichte 600, 700. Zeilenhöhe 1.04–1.07.
Fallback: Inter, system-ui.
Rolle: „Hero-Headlines und Display-Titel — Gewicht 700 bei 80–96px mit negativer
Laufweite bis −1.44px erzeugt das typische Apple-Gefühl der riesigen Headline,
die in Weiß schwebt."

**SF Pro Display — Sektionsüberschriften.** Gewicht 600. Zeilenhöhe 1.14–1.38.
Laufweite +0.007em bei 28px, +0.011em bei 21px.
Rolle: „Sektionsüberschriften, Kartentitel, Zwischenüberschriften — Gewicht 600 mit
leicht positiver Laufweite liest sich warm und zugänglich."

**SF Pro Text — Fließtext.** Gewichte 400, 500, 600. Zeilenhöhe 1.18–1.47.
Laufweite −0.022em bei 17px, −0.003em bei 44px.
Rolle: „Fließtext, Navigation, ergänzende Absätze, kleine Labels — Gewicht 400 bei
17px ist das Arbeitspferd."

---

## 3 Abstände und Layout

**Basiseinheit:** 4px. **Dichte:** komfortabel.

**Skala:** 4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 40 · 44 · 48 · 52 · 76 · 80 · 120 · 144 px

| Maß | Wert |
|---|---|
| Seitenbreite | 1200px |
| Sektionsabstand | 100–120px |
| Kartenpolsterung | 28px |
| Elementabstand | 8–10px |
| Innenabstand Sektion, seitlich | 40–80px |

### Layout-Architektur

Vollbreite Sektionen von Kante zu Kante mit großzügiger Innenpolsterung; der Inhalt
liegt zentriert mit effektiv 1200px Maximalbreite in jedem Band.

Hero-Reihenfolge: Eyebrow-Label → übergroße Headline → **ein** CTA-Button →
Preiszeile → Produktbild, das die unteren 60 % des Viewports füllt.

Sektionsmuster: zweispaltig (Text links / Bild rechts, alternierend), dreispaltiges
Kartenraster, oder zentrierte visuelle Bühne.

„Der Rhythmus entsteht ausschließlich durch den Wechsel von Weiß und `#f5f5f7`
mit 100–120px vertikalem Abstand — keine Trennlinien, keine Karten um Features."

---

## 4 Radien

| Element | Wert |
|---|---|
| Links | 10px |
| Karten | 28px |
| Produktbilder | 28px |
| Badges | 36px |
| Buttons | 980px |
| Kleine Buttons | 999px |

---

## 5 Komponenten

**Filled Pill Button (primärer CTA).** Der einzige chromatische Button.
Radius 980px, Fläche `#0071e3`, Text weiß 17px SF Pro Text 400,
Polsterung 16px horizontal / 11px vertikal. Höchstens einmal pro Sektion.

**Ghost Pill Button.** Transparent, 1px Rand `#1d1d1f` bzw. `rgba(0,0,0,0.8)`,
Radius 999px, Text `#1d1d1f` 17px/400, Polsterung 16px horizontal.

**Pfeil-Textlink.** Keine Fläche, kein Rand. Text `#0066cc` mit nachgestelltem
Pfeilglyph (› oder →), 17px SF Pro Text 400. Unterstreichung nur bei Hover.

**Unterstrichener Haarlinien-Link.** Für Navigation und Footer. Transparent,
Text `#1d1d1f` oder `#474747`, 1px Unterlinie in Textfarbe, 12–14px SF Pro Text.

**Feature-Karte.** Radius 28px, Fläche weiß oder `#f5f5f7`, Polsterung 28–40px.
Enthält Headline (40–56px SF Pro Display), Fließtext (17px), optional CTA.
**Kein Schatten, kein Rand.**

**Produkt-Finish-Swatch.** Rundes Quadrat ~80px, Radius 28px, gefüllt mit einem
Finish-Ton. Kein Rand, kein Label — die Farbe *ist* der Inhalt.

**Sektionsüberschrift.** 28–32px SF Pro Display 600, `#1d1d1f`, linksbündig,
Laufweite +0.007em. Ergänzender Text optional 21px.

**Globale Navigation.** Höhe 44px, sticky. Hintergrund wechselt beim Scrollen von
weiß/transparent zu `#fafafc` mit `backdrop-filter: blur(20px)`.
Links 12px SF Pro Text 400 in `#1d1d1f`, Abstand 8–10px.

**Promo-Ribbon.** Schmales Ankündigungsband über der Navigation. 12–14px,
zentriert, einzeilig, weiße Fläche, schwarzer Text, optionaler Link in `#0066cc`.

**Produkt-Hero.** Weiße Fläche. Produktname 17px zentriert, Hero-Headline 96px
SF Pro Display 600 in `#1d1d1f` mit −1.44px Laufweite, zentriert. CTA darunter,
Preistext 17px, Produktbild füllt die untere Hälfte.

**Farbvarianten-Bühne.** Zwei nebeneinanderliegende Karten mit 28px Radius auf
`#f5f5f7`, je ein Produktrender auf seinem Finish-Ton. Kein Text.

**„Nuevo"-Badge.** Reiner Inline-Text in `#b64400`, 12–14px SF Pro Text 500,
oberhalb des Produktnamens.

**Paginierungspunkte.** ~8px Kreise, aktiv `#1d1d1f`, inaktiv `#777779`,
7px Abstand.

**Sektionstrenner (implizit).** Keine Linie. Sektionen wechseln zwischen `#ffffff`
und `#f5f5f7`, 100–120px vertikaler Abstand.

**Footer-Rechtsblock.** Fläche `#f5f5f7`, Text 12px SF Pro Text 400 in `#707070`,
Zeilenhöhe 1.33, Inline-Links `#0066cc`.

---

## 6 Regeln

### So

- SF Pro Display 700 für Hero-Headlines bei 80–96px mit negativer Laufweite bis
  −1.44px — die enge Laufweite auf riesiger Schrift macht Apple-Headlines architektonisch.
- Sektionshintergründe zwischen `#ffffff` und `#f5f5f7` wechseln lassen, um Rhythmus
  ohne Ränder oder Trenner zu erzeugen.
- 28px Radius auf allen Karten und Produktbildern — diese Rundung besänftigt das
  ganze System.
- `#0071e3` ausschließlich für gefüllte CTA-Buttons. Nie als Textfarbe, nie als
  Dekoration. Inline-Links nehmen `#0066cc`.
- Pill-Buttons mit 980px oder 9999px Radius. Eckige oder leicht gerundete Buttons
  brechen das fließende Gefühl des Systems.
- Fließtext 17px SF Pro Text 400 mit −0.022em Laufweite — die kanonische Lesegröße
  über alle Apple-Seiten.
- `"numr"` als Font-Feature auf allem Numerischen für einheitliche Ziffern.
- Zeilenhöhe oben eng halten (1.04–1.07) und unten öffnen (1.47) — der Kontrast
  erzeugt Hierarchie ohne Größensprünge.
- Die Farbe kommt aus den Produktbildern. Das UI bleibt monochrom.

### Nicht so

- Keine Schatten, keine Elevation auf Karten. Hierarchie entsteht durch den Wechsel
  der Flächenfarbe und die 28px-Radien.
- Keine Akzentfarben über `#0071e3` und `#0066cc` hinaus. Selbst das orange Badge
  erscheint höchstens einmal pro Seite.
- Keine Headline unter 40px. Das System lebt von übergroßer Schrift.
- Keine Ränder zur Trennung von Sektionen. Stattdessen die Flächenfarbe wechseln.
- Kein Radius unter 10px auf interaktiven Elementen.
- Keine dekorativen Verläufe auf UI-Flächen. Komplexe Produktfarbverläufe gehören
  in Produktrenders, nicht auf Buttons oder Karten.
- Kein Gewicht unter 400 im Fließtext, keins unter 600 in Überschriften.
- Keine Hintergrundflächen hinter Textlinks. Nur Farbe und Pfeilglyph — nie ein
  Kasten um einen Inline-Link.
- Keine zentrierten Fließtextabsätze. Headlines dürfen zentriert sein, mehrzeilige
  Beschreibungen und Begleittext sind linksbündig.

---

## 7 Bildsprache

Eng beschnittene Hardware-Renders auf reinem Weiß oder auf einem Finish-Ton, ohne
Lifestyle-Kontext und ohne Inszenierung. Wo Menschen vorkommen, sind sie beiläufig
— sie zeigen Maßstab und Textur, nicht Emotion.

Produktvarianten: zwei Geräte nebeneinander auf ihren jeweiligen Finish-Farben,
jede Karte ein flaches Farbfeld mit zentriertem Produkt.

Detailaufnahmen: extreme Nahaufnahmen (Scharnier, Kameramodul) vor neutralem Grund.
Keine Illustrationen, keine abstrakten Grafiken, keine Dekobilder — das Produkt
*ist* das Bild.

Icons: monochrome Linienicons im SF-Symbols-Stil, Strichstärke 1,5–2px.

Lichtsetzung: durchgehend hochkey — gleichmäßig, schattenlos, sodass das Produkt
zur grafischen Form flach wird statt körperlich zu wirken.

---

## 8 Gemessene Rohdaten

Die Abschnitte 1–7 geben die **redaktionelle** Fassung von Refero wieder. Daneben
liefert die Seite gemessene Rohdaten, die direkt aus der Originalseite ausgelesen
wurden. Sie liegen vollständig in `reference-style.json`. Herkunft laut `meta`:

| Feld | Wert |
|---|---|
| Quelle | `https://www.apple.com/macbook-neo` |
| Site | Apple (España) |
| Erfasst am | 03.07.2026 |
| Viewport | 1440 × 900 |
| Erfasste Elemente | 1505 |

Wo redaktionelle Fassung und Messung sich widersprechen, gilt die Messung.

### Was die Messung ergänzt oder korrigiert

**Laufweite steht im Original in `em`, nicht in px.** Die px-Werte aus Abschnitt 2
sind korrekte Umrechnungen, aber `em` ist die Quelle und skaliert mit:
96px → −0.015em · 80px → −0.015em · 56px → −0.005em · 28px → +0.007em ·
21px → +0.011em · 17px → −0.022em · 14px → −0.016em · 12px → −0.01em.

**Die Display-Zeile mit 96px hat Gewicht 600, nicht 700.** Gewicht 700 ist gemessen
bei 80px, 56px und 32px. Die DO-Liste der Vorlage behauptet „700 bei 80–96px" und
widerspricht damit der eigenen Messung.

**Die Typo-Skala hat 30 Stufen, nicht 10.** Die zehn aus Abschnitt 2 sind eine
kuratierte Auswahl. Die Messung nennt zu jeder Stufe zusätzlich Kontext und
Häufigkeit. Die mit Abstand häufigste Stufe ist 17px / 400 / 1.47 / −0.022em
(664 Vorkommen) — das ist tatsächlich das Arbeitspferd. Danach 12px / 400 (267)
und 17px / 600 / 1.24 (117).

**Die Abstandsskala hat 54 Werte, nicht 16:**
2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 20 21 22 24 25 27 28 30 32 34 37 40 44
48 52 54 76 80 88 89 90 100 104 105 110 119 120 144 160 195 201 208 216 222 223
277 298. Basiseinheit 4px, Dichte „comfortable".

**Radien nach gemessener Häufigkeit:** 28px (70×, Karten/Bilder/Buttons/Links) ·
9999px (17×) · 36px (8×, **Buttons** — nicht Badges, wie die redaktionelle Fassung
sagt) · 10px (7×, Links) · 999px (7×) · 980px (4×) · 32px (1×).

**Schatten: leeres Array.** Die Regel „keine Schatten" ist keine Interpretation,
sondern ein Messergebnis — auf 1505 Elementen kommt kein einziger Schatten vor.

**`font-feature-settings: "numr"`** ist für beide Schriftfamilien gemessen.

**20 Kontrastpaare, alle auf Stufe AAA.** Die niedrigste dokumentierte Paarung
liegt bei 11,51:1 (`#e8d0d0` auf `#1d1d1f`). Das System kennt keine grenzwertigen
Kombinationen.

**23 Farb-Tokens statt 20**, jeweils mit Kontext, Häufigkeit und CSS-Eigenschaft.
Bemerkenswert: `#0071e3` kommt auf der ganzen Seite nur **3×** vor, ausschließlich
als `backgroundColor`. Drei weitere Farben (`#00a1b3`, `#8668ff`, `#ed6300`)
erscheinen je genau einmal und sind Fremdkörper — vermutlich aus eingebetteten
Fremdinhalten, nicht Teil des Systems.

### Was der Screenshot zeigt

Refero hinterlegt einen Screenshot der Originalseite. Darauf ist erkennbar:

**Der Haupt-CTA im Hero ist schwarz, nicht blau.** Der „Comprar"-Button ist eine
Pille in `#1d1d1f` mit weißer Schrift. Blau erscheint auf der sichtbaren Fläche nur
als Inline-Link im Promo-Band darüber. Die Regel „`#0071e3` für gefüllte CTAs" aus
der DO-Liste beschreibt also nicht, was die Referenzseite im Hero tatsächlich tut.

Für diese Website wurde bewusst der **blauen Regel** gefolgt, nicht dem Screenshot —
eine schwarze Pille wäre die zurückhaltendere Alternative und ist ein Einzeiler in
`tokens.css`.

Der Hero-Aufbau bestätigt die dokumentierte Reihenfolge: Eyebrow („MacBook Neo"),
riesige Headline, ein einzelner CTA, Preiszeile, Produktbild darunter.

---

## 9 Nicht verfügbar

Die Seite führt einen Abschnitt **„Agent Prompt Guide"**. Sein Inhalt wird nicht
ausgeliefert: Im RSC-Payload steht nur die Referenz `"$1e"`, und Zeile `1e` fehlt
in jeder Antwort — bei drei aufeinanderfolgenden Abrufen byteidentisch. Der
Abschnitt ist serverseitig gesperrt, vermutlich für angemeldete Konten.

Wer bei Refero angemeldet ist, sieht ihn auf der Style-Seite und kann ihn kopieren.
Alles andere auf der Seite liegt vollständig in `reference-style.json`.

---

## 10 Bekannte Fehler in der Vorlage

Zwei Werte liefert Refero fehlerhaft. Sie wurden bewusst **nicht** übernommen:

- **„Primary Ink" als Verlauf:** `linear-gradient(184deg, #1d1d1f 20%, #0000f9 76%,
  #252525 95%)`. Ein Verlauf mit Knallblau als Textfarbe ergibt keinen Sinn und
  widerspricht der eigenen Regel „keine Verläufe auf UI-Flächen". Die Vorlage nennt
  daneben korrekt `#1d1d1f` — der Wert wird verwendet.
- **„Citrus Gradient":** `linear-gradient(184deg, #1d1d1f 0%, #dfe74f 33%, #5a7e2 100%)`.
  `#5a7e2` hat fünf statt sechs Stellen und ist damit kein gültiger Hex-Wert.

Beides sieht nach Extraktionsrauschen aus, nicht nach Gestaltungsabsicht.
