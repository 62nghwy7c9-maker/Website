# Anleitung: Domain verbinden — zum gemeinsamen Durchgehen und Üben

Für Kira und Papa. Einmal zu zweit durchspielen, dann kann sie es beim Kunden allein.

**Dauer:** etwa 90 Minuten, davon 60 Minuten Warten.
**Kosten:** eine Testdomain, grob 5–20 € im Jahr (je nach Anbieter, ungeprüft).
**Ziel:** Am Ende habt ihr eine echte Adresse, hinter der eine echte Seite steht —
und ihr habt es einmal absichtlich kaputt gemacht und wieder heil.

> **Der wichtigste Satz vorweg:** Nichts hiervon ist endgültig. Jede Änderung lässt
> sich zurückdrehen, solange ihr vorher einen Screenshot gemacht habt. Es gibt in
> dieser Anleitung keinen Schritt, der etwas unwiederbringlich zerstört.

---

## Was hier eigentlich passiert (ein Absatz, dann wird geklickt)

Eine Website besteht aus zwei getrennten Dingen:

- Die **Adresse** (`musterdach.de`) ist bei einem Anbieter gemietet — IONOS, Strato
  und ähnliche. Der heißt **Registrar**.
- Die **Dateien** der Seite liegen woanders, auf einem **Hoster**. Wir nehmen Netlify.

Beide wissen nichts voneinander. Sie zu verbinden heißt: beim Registrar eine
Wegbeschreibung hinterlegen, die sagt „wer diese Adresse aufruft, wird zu Netlify
geschickt". Diese Wegbeschreibung heißt **DNS** (Domain Name System — das Telefonbuch
des Internets). Wir ändern darin zwei Zeilen. Mehr ist es nicht.

---

## Teil 1 — Vorbereitung (10 Minuten)

- [ ] Konto bei **netlify.com** anlegen. Kostenloser Tarif genügt.
- [ ] Einen Ordner auf dem Rechner mit einer fertigen Testseite darin
      (mindestens eine `index.html`). Notfalls reicht eine Seite mit dem Wort „Hallo".

---

## Teil 2 — Seite online bringen (5 Minuten)

- [ ] Bei Netlify einloggen, zur Übersicht der Seiten gehen.
- [ ] Den **Ordner per Drag-and-drop** in das dafür vorgesehene Feld ziehen.
      (Wortlaut je nach Oberfläche etwas anders, aber ein Feld zum Hineinziehen gibt es.)
- [ ] Netlify vergibt sofort eine Zufallsadresse, etwa `keks-1234.netlify.app`.
- [ ] **Diese Adresse im Browser aufrufen.** Die Seite ist jetzt live im Internet.

**Halt hier kurz an.** Das ist bereits eine funktionierende Website. Alles Weitere
ist nur noch Kosmetik an der Adresse.

---

## Teil 3 — Testdomain kaufen (10 Minuten)

- [ ] Bei einem beliebigen deutschen Anbieter eine `.de`-Domain kaufen, die niemandem
      wehtut — etwa `kira-testet-1234.de`.
- [ ] **Nur die Domain kaufen.** Kein Webhosting-Paket, kein E-Mail-Paket, keine
      Zusatzangebote. Die Anbieter versuchen an dieser Stelle, ein Paket zu verkaufen.
- [ ] Zugangsdaten notieren.

**Warum eine eigene Domain und nicht gleich beim Kunden üben:** Beim Kunden hängen
seine geschäftlichen E-Mails an derselben Adresse. Ein Fehler dort kostet ihn Aufträge
und dich den Kunden. Hier kostet ein Fehler nichts.

---

## Teil 4 — Verbinden (15 Minuten Arbeit, dann warten)

### 4.1 Die richtigen Werte holen

- [ ] Bei Netlify die Seite öffnen → **Domain hinzufügen** ("Add domain" o. ä.).
- [ ] Die Testdomain eintippen.
- [ ] Netlify zeigt jetzt an, was beim Registrar eingetragen werden muss.
      **Diese Werte abschreiben oder abfotografieren.**

> Nimm immer die Werte, die Netlify **dir gerade anzeigt**. Niemals Werte aus einer
> Anleitung im Internet — die sind oft veraltet, und dann funktioniert es nicht und
> niemand weiß warum.

### 4.2 Beim Registrar eintragen

- [ ] Beim Domain-Anbieter einloggen → **Domains** → die Domain → **DNS** oder
      **Domaineinstellungen**. Das Menü heißt je nach Anbieter etwas anders.
- [ ] **Screenshot der kompletten Tabelle machen und speichern.**
      Das ist euer Rückwärtsgang. Nicht überspringen — auch nicht bei der Testdomain,
      denn genau diese Gewohnheit braucht ihr später beim Kunden.

Ihr seht eine Tabelle. Was die Spalten bedeuten:

| Spalte | Bedeutung |
|---|---|
| **Typ** | Art des Eintrags. `A` zeigt auf einen Server. `CNAME` zeigt auf einen anderen Namen. `MX` sagt, wohin E-Mails gehen. `TXT` sind Notizen, u. a. Spamschutz. |
| **Name / Host** | Welcher Teil der Adresse gemeint ist. `@` ist die nackte Domain, `www` ist `www.` davor. |
| **Wert / Ziel** | Wohin es zeigt. **Das ist das einzige Feld, das ihr ändert.** |
| **TTL** | Wie lange andere Computer sich die Antwort merken. Unverändert lassen. |

- [ ] Zeile mit **Typ `A`**, Name `@` → Wert durch den von Netlify ersetzen. Speichern.
- [ ] Zeile mit **Typ `CNAME`**, Name `www` → Wert durch den von Netlify ersetzen.
      Gibt es die Zeile nicht, neu anlegen. Speichern.
- [ ] **`MX` und `TXT` nicht anfassen.** Bei der Testdomain ist es egal, beim Kunden
      hängen daran seine E-Mails. Übt es hier schon richtig.

### 4.3 Warten

- [ ] Netlify zeigt selbst an, wann die Verbindung steht.
- [ ] Danach kommt automatisch das Schloss im Browser (die Verschlüsselung). Das kann
      noch einmal Minuten bis Stunden dauern.

Insgesamt kann es **bis zu 24 Stunden** dauern, bis die Adresse überall funktioniert —
meist geht es in Minuten. Grund: Die Änderung verteilt sich langsam über das Netz.
Genau diesen Satz muss später auch der Kunde vorher hören, sonst ruft er nach zehn
Minuten an und sagt, es geht nicht.

---

## Teil 5 — Absichtlich kaputt machen (10 Minuten)

Das ist der wichtigste Teil der Übung. Wer einmal einen Fehler zurückgedreht hat,
hat beim Kunden keine Angst mehr.

- [ ] Den `A`-Eintrag auf einen Unsinnswert ändern, speichern.
- [ ] Die Adresse aufrufen: Fehlermeldung, oder es geht noch — weil der Computer sich
      die alte Antwort gemerkt hat. Auch das ist eine Lehre.
- [ ] Den richtigen Wert wieder eintragen — **vom Screenshot ablesen**, nicht aus dem
      Kopf.
- [ ] Warten, bis es wieder geht.

**Erkenntnis:** Der Screenshot ist die ganze Absicherung. Ohne ihn ratet ihr, mit ihm
dauert jede Reparatur zwei Minuten.

---

## Teil 6 — Der Ernstfall beim Kunden

Läuft genauso, mit drei Unterschieden.

### Vor jeder Terminzusage fragen

> „Haben Sie die Zugangsdaten zu Ihrer Domain — oder wer bekommt die Jahresrechnung
> für die Website?"

Liegt die Domain bei einer alten Agentur, braucht es einen echten Umzug mit
**AuthCode** (Umzugsschlüssel). Das dauert zwei bis vier Wochen, und der Vorbesitzer
lässt sich Zeit. Häufigster Grund für einen geplatzten Termin. **Erst fragen, dann
Termin nennen.**

### Zugang, in dieser Reihenfolge

1. **Bildschirmübertragung im Videoanruf, 15 Minuten.** Der Kunde teilt seinen
   Bildschirm, Kira sagt, wo er klickt. Standardweg — er behält sein Passwort.
2. **Eigener eingeschränkter Zugang**, wenn der Anbieter das anbietet.
3. **Der Kunde ruft den Telefonsupport seines Anbieters an** und lässt die zwei Werte
   dort eintragen. Kira schickt sie vorher per Mail. Für die ersten Kunden völlig in
   Ordnung — dauert zehn Minuten und wenn etwas schiefgeht, war es der Support.

**Niemals das Passwort des Kunden annehmen.** Was danach mit seiner Domain oder seinen
E-Mails passiert, warst dann immer du — auch wenn du es nicht warst.

### Zwei Sätze, die der Kunde vorher hören muss

> „Ihre E-Mails laufen unverändert weiter, daran ändere ich nichts."

> „Bis zu 24 Stunden, dann ist die neue Seite überall zu sehen."

Und einer nach dem Livegang, schriftlich per Mail:

> „Wenn Sie den alten Vertrag kündigen: **nur das Webhosting** kündigen.
> **Nicht die Domain, nicht die E-Mail-Postfächer.**"

Bei den meisten Anbietern steckt alles in einem Paket. Kündigt er das Paket, ist zwei
Wochen später die Adresse frei und `info@…` tot — und für ihn sieht es nach deinem
Fehler aus.

### Termin klug legen

Dienstagvormittag, nicht Freitagnachmittag. Falls etwas hakt, ist der Support des
Anbieters erreichbar.

---

## Teil 7 — Wenn es nicht klappt

| Symptom | Wahrscheinliche Ursache | Was tun |
|---|---|---|
| Adresse zeigt noch die alte Seite | Der eigene Computer merkt sich die alte Antwort | Anderes Gerät oder Handy im Mobilfunknetz testen, sonst warten |
| Netlify meldet weiter „wartet" | Tippfehler im Wert, oder falsche Zeile geändert | Werte Zeichen für Zeichen mit der Netlify-Anzeige vergleichen |
| Kein Schloss im Browser | Zertifikat noch nicht ausgestellt | Ein paar Stunden warten, dann bei Netlify erneut anstoßen |
| `www.domain.de` geht, `domain.de` nicht (oder umgekehrt) | Nur eine der beiden Zeilen gesetzt | Die fehlende Zeile ergänzen |
| **E-Mails kommen nicht mehr an** | Ein `MX`-Eintrag wurde geändert oder gelöscht | **Sofort** vom Screenshot wiederherstellen. Kunde anrufen, bevor er es merkt. |

Die letzte Zeile ist der einzige echte Notfall in dieser Liste. Deshalb der Screenshot.

---

## Nach der Übung: seid ihr bereit?

- [ ] Ihr habt eine Adresse, unter der eine Seite erreichbar ist.
- [ ] Ihr habt es einmal kaputt gemacht und selbst repariert.
- [ ] Ihr wisst, welche Zeilen ihr niemals anfasst (`MX`, `TXT`).
- [ ] Ihr könnt in einem Satz erklären, warum es bis zu 24 Stunden dauert.

Vier Haken = der erste Kundentermin kann stehen. Der erste am besten bei Papas
eigener Firma oder einem Bekannten, wo ein Fehler nichts kostet.
