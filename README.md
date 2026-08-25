# Webgewerk — Website

Statische Website für die (fiktive) KI-Agentur Webgewerk. Kein Build-Schritt, kein
Framework, keine Abhängigkeiten: HTML, CSS und ein bisschen JavaScript.

## Ansehen

```
npx http-server -p 8080
```

Dann http://127.0.0.1:8080 öffnen. Ein Doppelklick auf `index.html` tut es auch.

## Dateien

```
index.html          Startseite
impressum.html      Pflichtangaben (mit Platzhaltern)
datenschutz.html    Datenschutzerklärung (Vorlage)
agb.html            Hinweis statt Vorlage — AGB gehören zur Anwältin
styles/tokens.css   Alle Design-Tokens. Wer den Look ändern will, ändert nur diese Datei.
styles/main.css     Layout und Komponenten
scripts/main.js     Navigation, Einblenden, FAQ, Formular
assets/img/         SVG-Bildwelt und Favicon
DESIGN.md           Die Design-Architektur, aus der gebaut wurde
REFERENCE-STYLE.md  Die vollständige Vorlage: redaktionelle Fassung + Messdaten
reference-style.json Referos Rohdaten (30 Typo-Stufen, 54 Abstände, 23 Farben)
CONTENT.md          Seitenplan und Texte
```

## Design

Gebaut nach dem Refero-Style „Apple (España) design system"
(<https://styles.refero.design/style/c9cabb96-32fa-4896-837a-f2497ce1c856>).
Die Regeln stehen in `DESIGN.md`, die Werte in `styles/tokens.css`.

Kurz: Weiß und `#f5f5f7` im Wechsel statt Trennlinien, ein einziger blauer Akzent
(`#0071e3`, nur für gefüllte CTAs), riesige Headlines mit negativer Laufweite,
28 px Radius auf allem Flächigen, keine Schatten.

## Was vor dem Livegang zu tun ist

- **Firmendaten** in `impressum.html` und `datenschutz.html` ersetzen (mit `[ ]` markiert),
  Texte rechtlich prüfen lassen. Für die AGB gibt es bewusst keine Vorlage.
- **Kontaktformular**: Es sendet derzeit nichts an einen Server, sondern öffnet das
  E-Mail-Programm mit vorbereiteter Nachricht. Für echten Versand in
  `scripts/main.js` die markierte Stelle durch ein `fetch()` auf einen Endpunkt
  ersetzen — und dann Abschnitt 3 der Datenschutzerklärung anpassen.
- **Kennzahlen und Referenzen** (40+ Agenten, 62 %, die drei Cases) sind Platzhalter.
  Vor Veröffentlichung durch belegbare Zahlen ersetzen oder streichen.
- **Kontaktdaten**: `moin@webgewerk.de` und die Telefonnummer sind erfunden.
- **Bilder**: Die SVGs in `assets/img/` sind handgebaute Platzhalter im Stil der
  Vorlage. Echte Produktfotos gehören dorthin — hochkey, freigestellt, schattenlos.

## Schriften

Bewusst kein Google Fonts: Die Seite nutzt den System-Stack (SF Pro auf Apple-Geräten,
sonst die jeweilige System-Grotesk). Das spart eine Anfrage an einen US-Server und
damit ein bekanntes DSGVO-Risiko. Wer Inter erzwingen will, legt die woff2-Dateien
unter `assets/fonts/` ab und ergänzt eine `@font-face`-Regel in `styles/tokens.css`.

## Geprüft

Mit Chromium gerendert (1440 px und 390 px): keine Konsolenfehler, keine fehlenden
Ressourcen, kein horizontales Überlaufen. Tastaturbedienung, Sprungmarke zum Inhalt
und sichtbarer Fokus sind vorhanden.
