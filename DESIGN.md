# Webgewerk — Design-Architektur

Quelle: Refero Style „Apple (España) design system"
https://styles.refero.design/style/c9cabb96-32fa-4896-837a-f2497ce1c856

Alle Werte unten sind als CSS-Custom-Properties in `styles/tokens.css` umgesetzt.
Wer den Look ändern will, ändert **nur** diese Datei.

## Farben

| Token | Wert | Rolle |
|---|---|---|
| `--c-accent` | `#0071e3` | Einziger chromatischer Akzent. Nur gefüllte CTA-Buttons. Max. 1 pro Sektion. |
| `--c-link` | `#0066cc` | Inline-Textlinks, Pfeil-Links |
| `--c-ember` | `#b64400` | Badge-/Statusakzent („Neu") |
| `--c-ink` | `#1d1d1f` | Headlines, Fließtext, Button-Label |
| `--c-ink-2` | `#474747` | Navigation, Icons |
| `--c-ink-3` | `#707070` | Sekundärtext |
| `--c-hairline` | `#d6d6d6` | Haarlinien |
| `--s-0` | `#ffffff` | Seiten- und Kartenfläche |
| `--s-1` | `#f5f5f7` | Alternierende Sektionsbänder, Footer |
| `--s-2` | `#e8e8ed` | Hover-Flächen |
| `--s-3` | `#fafafc` | Nav nach dem Scrollen |

Finish-Töne für Bildflächen: Sky `#c8d8e0` · Citrus `#dddc8c` · Starlight `#f0e4d3` ·
Silver `#e3e4e5` · Blush `#e8d0d0` · Indigo `#596680` · Midnight `#2e3642`

## Typografie

SF Pro Display (Headlines) / SF Pro Text (Fließtext), Fallback Inter.
Skala (Minor Third, Basis 20px):

| Rolle | Größe | Gewicht | Zeilenhöhe | Laufweite |
|---|---|---|---|---|
| display | 96px | 600–700 | 1.04 | −1.44px |
| heading-lg | 80px | 700 | 1.05 | −1.2px |
| heading | 56px | 700 | 1.07 | −0.28px |
| heading-sm | 40px | 600 | 1.2 | — |
| body-lg | 28px | 600 | 1.14 | +0.196px |
| body | 21px | 600 | 1.38 | +0.231px |
| body-sm | 17px | 400–600 | 1.47 | −0.374px |
| caption | 14px | 400 | 1.29 | −0.224px |
| micro | 12px | 400 | 1.33 | −0.12px |

`font-feature-settings: "numr"` auf Zahlen.

## Raster & Abstände

Basiseinheit 4px. Skala: 4 8 12 16 20 24 28 32 40 44 48 52 76 80 120 144.
Seitenbreite max. 1200px · Sektionsabstand 100–120px · Kartenpolsterung 28px.

## Radien

Links 10px · Karten und Bilder 28px · Badges 36px · Buttons 980px (Pill).

## Komponenten

- **Filled Pill** — `#0071e3`, weiße 17px-Schrift, Radius 980px, Polsterung 16/11px.
- **Ghost Pill** — 1px Rand `#1d1d1f`, Radius 999px.
- **Pfeil-Link** — `#0066cc`, 17px, Unterstreichung nur bei Hover.
- **Karte** — Radius 28px, weiß oder `#f5f5f7`, 28–40px Polsterung, **kein Schatten**.
- **Nav** — 44px hoch, transparent → `#fafafc` mit `backdrop-filter: blur(20px)` beim Scrollen,
  Links 12px.
- **Footer** — `#f5f5f7`, 12px Text in `#707070`, Links `#0066cc`.

## Regeln

**So:** Riesige Headlines (80–96px, Gewicht 700, negative Laufweite) · Sektionen durch
Wechsel von `#ffffff` und `#f5f5f7` trennen · 28px Radius auf alles Flächige ·
`#0071e3` ausschließlich für gefüllte CTAs · Fließtext 17px/400 · enge Zeilenhöhe
oben (1.04), offene unten (1.47) · Farbe kommt aus den Bildern, das UI bleibt monochrom.

**Nicht so:** Keine Schatten. Keine weiteren Akzentfarben. Keine Headline unter 40px.
Keine Trennlinien zwischen Sektionen. Kein Radius unter 10px auf interaktiven Elementen.
Keine Verläufe auf UI-Flächen. Kein Fließtext zentriert.

## Bildsprache

Produkt zuerst, freigestellt, eng beschnitten, auf Weiß oder auf einem Finish-Ton.
Hochkey, schattenlos, kein Lifestyle-Kontext, keine Illustrationen. Icons monochrom,
Strichstärke 1.5–2px.
