# Kundenakquise — Websites verkaufen

Ziel: möglichst viele zahlende Kunden in möglichst kurzer Zeit.
Stand: Leadliste liegt noch nicht vor. Alles hier ist ohne die Liste umsetzbar.

---

## 1 Der eine Satz, auf dem alles steht

**Die Website wird gebaut, bevor sie verkauft wird.**

Ein Kleinbetrieb entscheidet über eine Website nicht in einem Gespräch. Er
entscheidet in drei bis sechs Wochen Zaudern: erst Angebot einholen, dann mit der
Frau besprechen, dann verschieben. Das ist der Engpass — nicht die Zahl der
Kontakte.

Der Engpass verschwindet, wenn es nichts mehr zu entscheiden gibt. Statt „darf ich
Ihnen ein Angebot machen" heißt es: „hier ist Ihre neue Seite, klicken Sie sie auf
dem Handy durch." Der Kunde entscheidet dann nicht über ein Versprechen, sondern
über ein Ding, das er sieht. Das kürzt den Verkaufszyklus von Wochen auf ein
Gespräch.

Warum das geht und für eine normale Agentur nicht geht: Produktion kostet dich
fast nichts. Eine Agentur muss 15 Stunden bezahlte Arbeit riskieren, du riskierst
eine. Das ist dein einziger echter struktureller Vorteil — und der ganze Plan
hängt daran, ihn auszunutzen statt zu verkaufen wie eine Agentur.

Risiko: Es kann aufdringlich wirken. Deshalb nur nach der Ankündigung durch deinen
Vater, nie kalt, und immer mit dem Satz „wenn nicht, lösche ich sie" als echtem
Ausweg.

## 2 Der Preis — entschieden: 0 € Einrichtung, 49 €/Monat

**12 Monate Mindestlaufzeit, danach monatlich kündbar.**

Vier Gründe, der vierte ist der eigentliche:

1. **Niedrigere Hürde als jeder Einmalpreis.** Heute zahlt der Kunde nichts. Es gibt
   keinen Betrag, über den er nachdenken muss — nur eine Unterschrift.
2. **Deine Kosten laufen weiter.** Domain, Hosting und Support hören nach dem Verkauf
   nicht auf. Bei einer Einmalzahlung zahlst du ab Jahr zwei drauf.
3. **Kündbarkeit verkauft.** „Wenn Sie unzufrieden sind, hören Sie auf zu zahlen"
   nimmt genau das Risiko weg, das ihn bei einer Schülerin zögern lässt.
4. **Der Bestand arbeitet für dich.** Bei Einmalpreisen musst du jeden Monat neu
   verkaufen. 20 Kunden × 49 € sind **980 € jeden Monat, ohne einen neuen Verkauf.**
   Das ist der Unterschied zwischen Jobben und einem Geschäft.

Die Mindestlaufzeit ist der Gegenwert für die kostenlose Einrichtung — sonst kündigt
jemand nach zwei Monaten und du hast umsonst gebaut. In einem Satz erklärbar: „Die
Einrichtung kostet Sie nichts, dafür läuft der Vertrag ein Jahr."

**Bekannter Nachteil:** Das Geld kommt langsam. Fünf Kunden im ersten Monat sind
245 €, nicht 1.000 €. Wer 12 Monate im Voraus zahlt, bekommt zwei Monate frei — das
holt Geld nach vorn, ohne das Modell aufzugeben.

### Was drin ist

- bis 5 Seiten, mobil, Kontaktformular, Impressum- und Datenschutz-Gerüst
- Domain, Hosting, SSL-Verschlüsselung (das Schloss im Browser)
- **Pflegeseite mit Zugangscode** (siehe unten)
- eine Textänderungsrunde vor Livegang, danach 2 Änderungen pro Monat inklusive

### Was nicht drin ist

Shop, Buchungssystem, Logo, Fotoshooting, Texte neu erfinden.

Kalkulation grob und ungeprüft: Domain ca. 10–20 €/Jahr, Hosting auf einem
Gratis-Tarif (Netlify, GitHub Pages) 0 €. Die Marge ist nicht das Problem, die Zeit
ist es.

## 2a Die Pflegeseite — bewusst klein halten

Der Kunde bekommt eine eigene Adresse mit Zugangscode, auf der er selbst Daten ändern
kann. Das ist der Grund, warum das Monatsmodell überhaupt skaliert.

**Aber: keine Seite bauen, auf der er alles ändern kann.** Ein 55-jähriger Dachdecker
loggt sich in ein vollwertiges Redaktionssystem nie ein — er ruft an. Was er
tatsächlich ändern will, sind vier Dinge:

- Öffnungszeiten
- Telefonnummer und E-Mail
- „Aktuelles" (Betriebsurlaub, kurze Meldung)
- eine Stellenanzeige

**Genau diese vier Felder bauen.** Vier Kästen, ein Speichern-Knopf, Zugangscode
davor. Das deckt fast alle echten Änderungswünsche ab, ist an einem Nachmittag
gebaut und braucht keine Erklärung. Ein vollwertiges Redaktionssystem wäre zehnmal
so viel Arbeit und würde seltener benutzt.

### „Einmal verkaufen und nie wieder anfassen" — fast

Von selbst laufen: Hosting, Verschlüsselung, die Seite. Da passiert jahrelang nichts.
Trotzdem kommen: „Ich komm nicht rein", „die Seite ist weg" (meist eine abgelaufene
Domain), „können Sie kurz…". Rechne mit **ein bis zwei Kontakten pro Kunde und Jahr.**
Bei 20 Kunden sind das ein paar Stunden im Jahr, bei 100 Kunden ist es ein Job.

Genau dafür sind die 49 € da. Ein Monatsbetrag für „ich fasse es nie wieder an" wäre
unehrlich. Ein Monatsbetrag für „es läuft, und wenn etwas ist, kümmert sich jemand"
ist richtig.

## 3 Wen ansprechen — das Punkteschema für die Leadliste

Jeder Kontakt in ca. 3 Minuten prüfbar, alles von außen sichtbar. Spalten und
Punktwerte stehen in `leads-vorlage.csv`.

| Kriterium | Punkte |
|---|---|
| Dein Vater würde persönlich anrufen | +3 |
| … kennt die Person gut, aber nur schriftlich | +2 |
| … kennt sie kaum / nur beruflich flüchtig | 0 |
| Inhaber ist der Entscheider und erreichbar (1–20 Mitarbeiter) | +2 |
| Website vorhanden, aber auf dem Handy kaputt oder erkennbar alt | +3 |
| Gar keine Website, obwohl Kunden online suchen | +2 |
| Website gepflegt und aktuell | −3 |
| Google-Unternehmensprofil gepflegt, Bewertungen vorhanden | +2 |
| Kunden suchen die Branche aktiv online (Handwerk, Praxis, Gastro) | +2 |
| Reines B2B mit festem Stammkundenkreis | 0 |
| Über 50 Mitarbeiter (Gremien, Marketingabteilung) | −2 |

**Stufe A ab 9 Punkten** — zuerst ansprechen, Demo vorab bauen.
**Stufe B 6–8** — zweite Welle, nachdem A funktioniert hat.
**Stufe C unter 6** — nicht ansprechen. Nicht „vielleicht später". Nicht ansprechen.

Der Punkt, der am meisten zählt: **Website vorhanden, aber auf dem Handy kaputt.**
Das ist der einzige Mangel, den der Inhaber in fünf Sekunden selbst sieht, auf
seinem eigenen Telefon. Alles andere musst du ihm erklären, und was man erklären
muss, verkauft sich langsam.

### Harte Ausschlüsse, egal wie viele Punkte

- Kette, Konzern, Franchise — die Website kommt von der Zentrale
- Es gibt schon eine Agentur oder einen „Neffen, der das macht"
- Dein Vater will nicht, dass du diese Person ansprichst → sofort raus, ohne Rückfrage
- Öffentliche Stellen und alles mit Ausschreibungspflicht (dauert Monate)
- Jeder Kontakt, der geschäftlich mit deinem Vater verflochten ist. Ein misslungener
  Verkauf kostet ihn dort Geld, nicht nur Sympathie.

### Gute Branchen

Dachdecker, Elektriker, Maler, Sanitär, Tischler · Physio, Heilpraktiker, Zahnarzt,
Tierarzt · Fahrschule, Pflegedienst, Hausverwaltung · kleine Kanzlei,
Steuerberatung · Restaurant, Café, Hotel garni · Immobilienmakler.

Gemeinsamkeit: Der Kunde sucht am Handy, entscheidet in Minuten, und ein einziger
gewonnener Auftrag zahlt die Seite für ein Jahr. Genau das ist dein Argument.

### Schlechte Branchen

Onlinehandel (braucht einen Shop — viel mehr Arbeit, anderes Geschäft) ·
Einzelselbständige ohne Budget · alles, was nur über Instagram läuft und damit
zufrieden ist · Zulieferer, die ihre drei Kunden seit 20 Jahren haben.

## 4 Der Ablauf pro Kontakt

Nie mehr als **fünf Kontakte gleichzeitig** in Bearbeitung. Grund: Wenn die
Ansprache nicht funktioniert, hast du fünf Kontakte verbrannt und nicht fünfzig.

**Tag 0 — dein Vater kündigt an.** Kurz, per WhatsApp oder Mail. Ziel ist nicht
der Verkauf, sondern nur die Erlaubnis, dass du dich meldest.

> Hallo [Name], meine Tochter Kira baut Websites — ich habe mir das angesehen, das
> ist richtig gut geworden. Sie hat sich eure Seite angeschaut und einfach mal
> einen Entwurf gemacht, ohne dass ihr irgendwas zusagen müsst. Darf sie dir den
> Link schicken? Wenn er dir nicht gefällt, ist die Sache damit erledigt.

**Tag 1–2 — du baust.** Texte von der alten Seite übernehmen (die gehören dem
Kunden, das ist unproblematisch), Fotos von dort ebenfalls. Genau eine Sache
inhaltlich verbessern, die du im Gespräch nennen kannst.

**Tag 2–3 — du meldest dich.**

> Hallo Herr/Frau [Name], [Vater] hat mich angekündigt. Hier ist der Entwurf für
> [Firma]: [Link]. Das ist keine Skizze, sondern eine fertige Seite — Sie können
> sie auf dem Handy durchklicken. Die Texte habe ich von Ihrer alten Seite
> übernommen und an einer Stelle geändert: [ein konkreter Punkt]. Wenn Sie sie
> wollen, kostet sie [Preis] und ist in einer Woche online. Wenn nicht, lösche ich
> sie am Freitag. Beides ist völlig in Ordnung.

**Tag 5 — einmal nachfassen. Einmal.**

> Kurze Frage zum Entwurf: online stellen oder löschen? Eine Zeile reicht, auch ein Nein.

Danach Ruhe. Ein zweites Nachfassen bringt fast nie einen Abschluss und kostet
deinen Vater Ansehen.

### Am Telefon, die ersten 20 Sekunden

> Frau Berger? Kira Moewes, die Tochter von [Vater] — er hatte mich angekündigt.
> Haben Sie eine Minute? … Ich habe Ihre Seite auf dem Handy aufgemacht und da
> verrutscht das Menü. Ich hab Ihnen deshalb eine neue gebaut, die können Sie sich
> anschauen. Soll ich Ihnen den Link schicken?

Nicht mehr sagen. Wer weiterredet, verhandelt gegen sich selbst.

## 5 Einwände

**„Wir haben doch eine Website."**
→ „Ja. Machen Sie die mal auf Ihrem Handy auf, ich warte." Danach nichts sagen.
Wenn sie tatsächlich gut ist: ehrlich sagen, dass sie gut ist, und gehen. Das ist
kein Verlust, das ist Ruf.

**„Sie sind ja noch Schülerin."**
→ Nicht wegreden, sondern umdrehen: „Deshalb sehen Sie sie fertig, bevor Sie
irgendwas zahlen. Bei einer Agentur ist es andersherum."

**„Was, wenn Sie studieren gehen — steht die Seite dann still?"**
→ Die einzige ehrliche Antwort ist eine Zusage: Die Seite gehört dem Kunden, er
bekommt auf Wunsch alle Dateien und kann sie jedem anderen geben. Das schriftlich
zusagen. Kostet dich nichts und nimmt den größten Einwand komplett weg.

**„Was kostet das nächstes Jahr?"**
→ Gleicher Preis, festgeschrieben. Keine Staffel, keine Zusatzposten.

**„Brauchen wir eigentlich nicht, wir haben genug Aufträge."**
→ Sofort beenden, freundlich, ohne zweiten Versuch. Wer sagt, dass er keine Kunden
braucht, ist kein Kunde. Schnelles Aussortieren ist ein Geschwindigkeitshebel, kein
Scheitern.

## 6 Weg 2 — die Schule

Die Schule ist kein Kunde. Sie ist ein Schaufenster und ein Zugang zu Eltern, und
Eltern sind Betriebsinhaber.

**Reihenfolge, nach Entscheidungsgeschwindigkeit:**

1. **Förderverein** — drei bis fünf Leute im Vorstand, eigenes Budget, entscheidet
   in einer Sitzung. Hier anfangen.
2. **Abi-Jahrgang, Schülerfirma, AG, Schulband** — entscheidet sofort, zahlt nichts,
   liefert aber ein vorzeigbares Ergebnis in Tagen.
3. **Offizielle Schulseite** — zuletzt. Da hängen Schulträger, Datenschutz­beauftragte
   und Barrierefreiheits-Anforderungen für öffentliche Stellen dran (BITV —
   *ungeprüft, ob und wie eure Schule konkret darunter fällt; vor einer Zusage
   klären*). Das dauert Monate und passt nicht zu „so schnell wie möglich".

**Was du dort holst, ist nicht Geld, sondern drei Dinge:**

- **Eine Referenz, die jeder in der Stadt kennt.** „Ich habe die Seite der
  Gutenbergschule gebaut" wirkt lokal stärker als jedes Portfolio.
- **Das Elternnetzwerk.** Nach dem Livegang genau eine Bitte an den Vorstand: einen
  Absatz im Elternbrief oder Newsletter — „gebaut von Kira aus der [Klasse], sie
  macht das auch für Betriebe". Das ist eine Empfehlung von einer Institution,
  nicht Werbung.
- **Die Lokalpresse.** Wochenblatt und Stadtteilzeitung nehmen „Schülerin baut die
  Website ihrer Schule" fast sicher. Reichweite exakt in deinem Zielgebiet, kostenlos.
  Das ist der eigentliche Ertrag dieses Wegs — nicht die Seite.

Für den Livegang der Schulseite trotzdem eine Rechnung schreiben und sie auf 0 €
setzen mit Vermerk „Referenzprojekt". Damit steht ein Wert im Raum, und der nächste
Kunde bekommt keinen Nulltarif erklärt.

## 7 Übergabe: die Domain anschließen

Der Kunde behält seine Adresse (`musterdach.de`), du hängst nur die neue Seite
dahinter. Fachlich: **DNS umbiegen** — DNS (Domain Name System) ist das Telefonbuch
des Internets, es übersetzt die Adresse in den Ort, an dem die Dateien liegen.

**Nicht verwechseln:**

| DNS umbiegen — das ist gemeint | Domain umziehen — nicht nötig |
|---|---|
| Adresse bleibt beim bisherigen Anbieter | Domain wechselt den Anbieter |
| 15 Minuten, sichtbar nach bis zu 24 Stunden | mehrere Tage |
| zwei Zeilen ändern | AuthCode, Kündigung, neuer Vertrag |
| kein Risiko für E-Mails | Postfächer können verloren gehen |

### Vor der Zusage eines Livegang-Termins fragen

> „Haben Sie die Zugangsdaten zu Ihrer Domain — oder wer bekommt die Jahresrechnung
> für die Website?"

Liegt die Domain bei der alten Agentur, braucht es doch einen echten Umzug samt
AuthCode; zwei bis vier Wochen Verzug sind normal. Häufigster Grund für einen
geplatzten Termin. Die Jahresrechnung verrät den Anbieter zuverlässig — öffentliche
Abfragen zeigen seit der DSGVO kaum noch, wem eine `.de`-Domain gehört.

### Ablauf

1. **Screenshot des kompletten DNS-Bereichs**, bevor irgendetwas geändert wird.
2. **Nur A- oder CNAME-Einträge ändern. MX und TXT niemals anfassen.**
   MX (Mail Exchange) steuert, wohin die E-Mails gehen. Wer sie löscht, kappt
   `info@firma.de`. Das ist der eine Fehler, der sofort einen Kunden kostet.
3. Zugang holen, in dieser Reihenfolge:
   **a)** Bildschirmübertragung im Videoanruf, 15 Minuten — Standardweg, er behält
   sein Passwort · **b)** eigener eingeschränkter Nutzer beim Provider ·
   **c)** Anleitung mit exakten Werten zum Selbermachen (scheitert meist).
   **Nie das Passwort des Kunden annehmen.** Was danach mit seiner Domain passiert,
   warst dann immer du.
4. **Domain immer auf den Kunden registriert**, du hast nur Verwaltungszugriff.
   Nimmt den größten Einwand weg: „Die Adresse gehört Ihnen, ich verwalte sie nur."
5. **Weiterleitungen** für alte Unterseiten setzen (Redirects — Regeln, die alte
   Adressen auf die neuen schicken), sonst laufen bestehende Google-Treffer ins Leere.

### Zwei Sätze, die der Kunde vorher hören muss

- „Bis zu 24 Stunden, dann ist die Seite überall zu sehen." Sonst ruft er nach zehn
  Minuten an. (Grund: DNS-Änderungen verteilen sich verzögert durchs Netz.)
- „Kündigen Sie **nur das Webhosting**. Nicht die Domain, nicht die E-Mail-Postfächer."
  Bei den meisten Anbietern steckt alles in einem Paket. Kündigt er das Paket, ist die
  Adresse zwei Wochen später frei und `info@…` tot — und es sieht nach deinem Fehler aus.

### Verkaufsargument daraus

„Ihre Adresse bleibt, Ihre Google-Treffer bleiben, nur die Seite dahinter wird neu."
Eine neue Domain hieße bei Google von vorn anfangen.

### Was remote geht und was nicht

Alles per Telefon und Mail — Texte, Freigabe, Änderungen, Auftragsbestätigung.
Ausnahme: **Fotos.** Bei Handwerkern der größte sichtbare Unterschied zwischen
billig und gut. Handyfotos des Kunden reichen meist; bei den ersten drei Kunden
trotzdem hinfahren, weil du drei richtig gute Referenzen brauchst.

## 8 Die ersten drei Wochen

**Woche 1 (ohne Leadliste möglich):** Angebot und Preis festschreiben. Rechtliches
anstoßen (Abschnitt 8). Förderverein ansprechen. Drei Betriebe aus dem eigenen
Umfeld suchen, die auf dem Handy kaputt aussehen, und dafür Demos bauen — als
Beispiele, mit denen du später jeden weiteren Kontakt überzeugst.

**Woche 2:** Leadliste filtern, Stufe A dem Vater vorlegen, seine Streichungen
kommentarlos übernehmen. Erste fünf Ansprachen.

**Woche 3:** Auswerten, nachlegen. Bei jedem gewonnenen Kunden am Tag des Livegangs
die einzige Frage stellen, die neue Kunden bringt: „Kennen Sie jemanden in Ihrem
Gewerk, dem das auch helfen würde?" Direkt beim Erfolgserlebnis fragen, nicht Wochen
später.

**Ein Betrieb pro Gewerk empfiehlt den nächsten.** Der zweite Dachdecker kostet dich
fast keine Arbeit mehr — Aufbau, Struktur und halbe Texte stehen. Deshalb: nicht
breit streuen, sondern eine Branche leerräumen, dann die nächste.

## 9 Abbruchregel

Nach den ersten zehn Stufe-A-Ansprachen zählen:

- **2 oder mehr Zusagen** → weitermachen, Tempo erhöhen.
- **1 Zusage** → Angebot ändern, nicht die Liste. Meist ist der Preis zu hoch oder
  der Umfang unklar.
- **0 Zusagen** → aufhören anzusprechen. Weitere Kontakte zu verbrennen, verbessert
  nichts. Erst herausfinden, woran es scheitert: Kommt keine Antwort (dann liegt es
  an der Ansprache) oder kommt ein Nein nach dem Anschauen (dann liegt es am
  Angebot)?

Diese Regel schützt das Wertvollste, das du hast: die Kontakte deines Vaters.
Die gibt es nur einmal.

## 10 Was vorher geklärt sein muss

Keiner dieser Punkte ist von mir geprüft — das gehört zu Steuerberater und
Anwältin, nicht in ein Strategiepapier:

- **Vertragspartner.** Wenn du unter 18 bist, sind deine Verträge nur mit
  Einwilligung der Eltern wirksam. Sauberste Lösung: dein Vater ist formal
  Vertragspartner und Rechnungssteller. Das löst nebenbei das Vertrauensproblem
  beim Kunden.
- **Gewerbeanmeldung** und ob die Kleinunternehmerregelung greift (dann keine
  Umsatzsteuer auf den Rechnungen, aber eine Umsatzgrenze).
- **Auftragsverarbeitungsvertrag** mit dem Hoster, wenn über die Kundenseite
  personenbezogene Daten laufen — bei einem Kontaktformular ist das der Fall.
- **Impressum und Datenschutzerklärung** jeder Kundenseite. Du lieferst das Gerüst,
  die Verantwortung dafür trägt der Kunde. Schriftlich festhalten.

## 11 Ein Widerspruch, der auffliegen wird

Die bestehende Seite in diesem Repository verkauft KI-Agenten-Projekte ab 18.000 €
und Audits ab 4.900 €. Wenn ein Dachdecker, dem du eine Website für 79 € im Monat
angeboten hast, dort landet, passt nichts zusammen — und er fragt sich, was der
richtige Preis ist.

Vor der ersten Ansprache braucht es eine eigene, sehr einfache Seite: das Angebot,
der Preis, die Demo-Beispiele, eine Telefonnummer. Eine Seite, mehr nicht. Das ist
Aufgabe 4 in der Liste.
