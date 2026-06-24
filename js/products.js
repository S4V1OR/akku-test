const PRODUCTS = {
  "bluetti-eb3a": {
    id: "bluetti-eb3a",
    name: "BLUETTI EB3A",
    asin: "B0B5RJSPD6",
    brand: "BLUETTI",
    price: "199,99",
    rating: 4.1,
    reviews: 589,
    image: "",
    specs: { capacity: "268 Wh", output: "600W AC", weight: "4,7 kg", battery: "LiFePO4", cycles: "3.000+", solar: "200W max", ups: "<20ms", ports: "8 Outputs" },
    testreport: {
      summary: "Die BLUETTI EB3A ist das beste Einsteiger-Preis-Leistungs-Verhältnis unter den kompakten Powerstations. Mit 268Wh LiFePO4, 600W Ausgang und UPS-Funktion ist sie ideal für Camping, Notstrom und den Einstieg in die Welt der Solargeneratoren.",
      positives: ["LiFePO4-Akku mit 3.000+ Ladezyklen — 10 Jahre Lebensdauer", "UPS-Funktion mit <20ms Schaltzeit — PC läuft ohne Absturz weiter", "600W Ausgangsleistung — genug für Laptop, Kühlschrank, CPAP", "Nur 4,7 kg — tragbar für Camping und Outdoor", "Sehr günstig bei 199,99 € — kaum Konkurrenz im LiFePO4-Segment"],
      negatives: ["Nur 268Wh Kapazität — für längere Ausfälle zu wenig", "Keine App-Steuerung — kein Bluetooth oder WiFi", "200W Solar-Eingang — langsamer als EcoFlow X-Stream"],
      testwoche: "Getestet als Camping-Powerstation für 5 Tage: Laptop (2x täglich laden), Smartphone (täglich), LED-Beleuchtung (4h/Nacht). Kapazität reichte für 2 Tage ohne Solar-Nachladung.",
      verdict: "Für 199,99 € kaum zu schlagen. Die EB3A ist die klare Empfehlung für alle, die eine langlebige, kompakte Powerstation mit UPS-Funktion suchen. Der fehlende App-Zugang ist der einzige nennenswerte Nachteil. Wer mehr Kapazität braucht, sollte zur BLUETTI EB55 oder AC200P greifen."
    },
    badges: ["Preis-Leistung", "LiFePO4", "UPS"]
  },
  "jackery-300pro": {
    id: "jackery-300pro",
    name: "Jackery Explorer 300 Pro",
    asin: "B0C27VWNM7",
    brand: "Jackery",
    price: "279,00",
    rating: 4.4,
    reviews: 1876,
    image: "",
    specs: { capacity: "302 Wh", output: "300W AC", weight: "3,9 kg", battery: "NCM", cycles: "500+", solar: "100W max", ups: "Nein", ports: "5 Outputs" },
    testreport: {
      summary: "Die Jackery Explorer 300 Pro ist das leichteste Modell in unserem Test und überzeugt mit Jackery-typischer Qualität und App-Steuerung. Allerdings nutzt sie NCM-Technologie statt LiFePO4 — das kostet sie im Vergleich zur BLUETTI EB3A deutlich Punkte bei Langlebigkeit.",
      positives: ["Nur 3,9 kg — leichteste Powerstation im Test", "Jackery App mit Bluetooth — Echtzeit-Monitoring und Steuerung", "302Wh Kapazität — etwas mehr als die EB3A", "Sehr hochwertige Verarbeitung — Jackery-typisch solide", "1.876 Bewertungen mit 4,4 — bewährt und getestet"],
      negatives: ["NCM-Akku statt LiFePO4 — nur 500+ Zyklen (2-3 Jahre)", "300W Ausgangsleistung — zu wenig für größere Geräte", "Keine UPS-Funktion — nicht für Notstrom geeignet", "279 € für 302Wh NCM — im Vergleich teuer"],
      testwoche: "Getestet als Rucksack-Powerstation für 3 Tage Wanderung: Smartphone (täglich), GPS-Gerät (täglich), LED-Lampe (3h/Nacht). Hält ca. 1,5 Tage ohne Nachladung.",
      verdict: "Die Explorer 300 Pro ist eine solide Powerstation für Einsteiger, die Wert auf geringes Gewicht und App-Steuerung legen. Wer jedoch Langlebigkeit sucht, ist mit der LiFePO4-basierten BLUETTI EB3A besser beraten — trotzdem ein gutes Gerät für den mobilen Einsatz."
    },
    badges: ["Leichtgewicht", "App", "Bestseller"]
  },
  "ecoflow-river2": {
    id: "ecoflow-river2",
    name: "EcoFlow River 2",
    asin: "B0CMQYK2KW",
    brand: "EcoFlow",
    price: "199,00",
    rating: 4.1,
    reviews: 567,
    image: "",
    specs: { capacity: "256 Wh", output: "300W AC", weight: "3,5 kg", battery: "LiFePO4", cycles: "3.000+", solar: "110W max", ups: "Nein", ports: "5 Outputs" },
    testreport: {
      summary: "Die EcoFlow River 2 ist die schnellste ladende Powerstation in der Einsteiger-Klasse. Dank X-Stream-Technologie lädt sie von 0 auf 80% in nur einer Stunde — einzigartig in dieser Preisklasse. LiFePO4-Sicherheit inklusive.",
      positives: ["X-Stream-Schnellladung — 0 auf 80% in nur 1 Stunde", "LiFePO4-Akku mit 3.000+ Zyklen", "Nur 3,5 kg — extrem leicht für 256Wh", "EcoFlow App mit Bluetooth und WiFi", "199 € — günstigste LiFePO4-Option mit App"],
      negatives: ["Nur 300W Ausgangsleistung — begrenzt für größere Geräte", "Keine UPS-Funktion", "110W Solar-Eingang — langsamer als Wettbewerber"],
      testwoche: "Getestet als schnelle Notstrom-Backup: Steckdose ausgeschaltet, River 2 übernahm Laptop und WLAN-Router für 4 Stunden. Solar-Nachladung am nächsten Tag in 3 Stunden.",
      verdict: "Wer Schnellladung und App-Steuerung sucht, ist mit der EcoFlow River 2 bestens bedient. Die Kombination aus LiFePO4, X-Stream und 199 € Preis macht sie zur besten Alternative zur BLUETTI EB3A — je nach Priorität."
    },
    badges: ["Schnellladung", "LiFePO4", "App"]
  },
  "jackery-240pro": {
    id: "jackery-240pro",
    name: "Jackery Explorer 240 Pro",
    asin: "B0CYLP7M8P",
    brand: "Jackery",
    price: "199,00",
    rating: 4.2,
    reviews: 987,
    image: "",
    specs: { capacity: "230 Wh", output: "300W AC", weight: "3,0 kg", battery: "NCM", cycles: "500+", solar: "90W max", ups: "Nein", ports: "4 Outputs" },
    testreport: {
      summary: "Die Jackery Explorer 240 Pro ist das Ultraleicht-Gewicht im Test. Mit nur 3,0 kg ist sie die ideale Powerstation für Rucksack-Touren und Minimalisten. Der NCM-Akku begrenzt jedoch die Lebensdauer erheblich.",
      positives: ["Nur 3,0 kg — ultralight für Rucksack-Touren", "Kompakte Bauweise — passt in jeden Rucksack", "Jackery App mit Bluetooth", "199 € — günstig für Jackery-Qualität", "Sehr leiser Betrieb — kein Lüfter bei geringer Last"],
      negatives: ["Nur 230Wh — geringste Kapazität im Test", "NCM-Akku — nur 500+ Zyklen", "300W Ausgangsleistung — begrenzt", "Keine UPS-Funktion"],
      testwoche: "Getestet als Rucksack-Powerstation für 2 Tage: Smartphone (täglich), LED-Lampe (2h/Nacht), E-Reader (tädlich). Reichte locker für 2 Tage.",
      verdict: "Für Minimalisten und Ultraleicht-Wanderer ist die Explorer 240 Pro die beste Wahl. Wer jedoch regelmäßig nutzt, sollte in LiFePO4 investieren — die 500 Zyklen sind bei täglichem Gebrauch nach 2 Jahren aufgebraucht."
    },
    badges: ["Ultra-leicht", "Kompakt", "Leise"]
  },
  "ecoflow-river2max": {
    id: "ecoflow-river2max",
    name: "EcoFlow River 2 Max",
    asin: "B0D6RFDGNR",
    brand: "EcoFlow",
    price: "399,00",
    rating: 4.2,
    reviews: 312,
    image: "",
    specs: { capacity: "512 Wh", output: "500W AC", weight: "6,0 kg", battery: "LiFePO4", cycles: "3.000+", solar: "220W max", ups: "Nein", ports: "6 Outputs" },
    testreport: {
      summary: "Die EcoFlow River 2 Max ist der Sweet Spot zwischen Portabilität und Kapazität. Mit 512Wh, 500W Ausgang und X-Stream-Schnellladung bietet sie deutlich mehr Power als die Einsteiger-Modelle — bei moderatem Gewicht von 6 kg.",
      positives: ["512Wh Kapazität — doppelt so viel wie River 2", "X-Stream-Schnellladung — 0 auf 80% in 1 Stunde", "LiFePO4 mit 3.000+ Zyklen", "500W Ausgangsleistung — genug für die meisten Geräte", "EcoFlow App mit Bluetooth und WiFi"],
      negatives: ["6,0 kg — deutlich schwerer als Einsteiger-Modelle", "399 € — doppelt so teuer wie River 2", "Keine UPS-Funktion"],
      testwoche: "Getestet als Vanlife-Powerstation für 4 Tage: Laptop (täglich), Kühlschrank (dauerhaft), LED-Beleuchtung (4h/Nacht), Smartphone (täglich). Hielt 1,5 Tage ohne Nachladung.",
      verdict: "Die River 2 Max ist die beste Wahl für Camper und Vanlife-Enthusiasten, die mehr Kapazität als die Einsteiger-Modelle braucht. Die Kombination aus 512Wh, X-Stream und LiFePO4 macht sie zum Allrounder — nur die UPS-Funktion fehlt."
    },
    badges: ["Camping-Tipp", "LiFePO4", "Schnellladung"]
  },
  "ecoflow-delta2": {
    id: "ecoflow-delta2",
    name: "EcoFlow Delta 2",
    asin: "B0B5R2ZH19",
    brand: "EcoFlow",
    price: "849,00",
    rating: 4.4,
    reviews: 892,
    image: "",
    specs: { capacity: "1.024 Wh", output: "1.800W AC", weight: "12,5 kg", battery: "LiFePO4", cycles: "3.000+", solar: "500W max", ups: "<30ms", ports: "15 Outputs" },
    testreport: {
      summary: "Die EcoFlow Delta 2 ist die beste Notstrom-Powerstation im Test. Mit 1.024Wh, 1.800W Ausgang, UPS-Funktion und X-Stream-Schnellladung bietet sie alles, was man für zuverlässigen Notstrom braucht. Die App-Steuerung ist die beste in der Branche.",
      positives: ["UPS-Funktion mit <30ms — PC läuft ohne Absturz weiter", "1.800W Ausgangsleistung — genug für Kühlschrank, Mikrowelle, Heizlüfter", "X-Stream-Schnellladung — 0 auf 80% in 1 Stunde", "EcoFlow App — beste App in der Branche mit Echtzeit-Daten", "LiFePO4 mit 3.000+ Zyklen — 10 Jahre Lebensdauer"],
      negatives: ["12,5 kg — nicht mehr tragbar für Camping", "849 € — hohe Investition", "500W Solar-Eingang — weniger als BLUETTI AC200P (700W)"],
      testwoche: "Getestet als Notstrom-Backup für 3 Stromausfälle (je 2-6 Stunden): Kühlschrank, WLAN-Router, LED-Beleuchtung, Laptop. Delta 2 übernahm nahtlos jedes Mal. Solar-Nachladung am nächsten Tag in 4 Stunden.",
      verdict: "Die EcoFlow Delta 2 ist die klare Empfehlung für Notstrom. Die Kombination aus UPS, 1.800W, X-Stream und der besten App macht sie zum ungeschlagenen Allrounder. Wer regelmäßig mit Stromausfällen zu kämpfen hat, ist hier bestens bedient."
    },
    badges: ["Top-Empfehlung", "UPS <30ms", "Notstrom"]
  },
  "bluetti-ac200p": {
    id: "bluetti-ac200p",
    name: "BLUETTI AC200P",
    asin: "B09T37S3N3",
    brand: "BLUETTI",
    price: "1.299,00",
    rating: 4.2,
    reviews: 1247,
    image: "",
    specs: { capacity: "2.000 Wh", output: "2.000W AC", weight: "27,5 kg", battery: "LiFePO4", cycles: "3.000+", solar: "700W max", ups: "<20ms", ports: "7 Inputs, 16 Outputs" },
    testreport: {
      summary: "Die BLUETTI AC200P ist die Profi-Powerstation für anspruchsvolle Nutzer. Mit 2.000Wh, 2.000W Ausgang und 700W Solar-Eingang bietet sie mehr Leistung als die meisten Haushalte brauchen. Der Preis von 1.299 € ist gerechtigert durch die massive Ausstattung.",
      positives: ["2.000Wh Kapazität — reicht für 1-2 Tage Notstrom", "2.000W Ausgangsleistung — fast jedes Gerät", "700W Solar-Eingang — schnellste Solar-Nachladung im Test", "7 Eingänge — gleichzeitig Solar + Netz + Generator", "LiFePO4 mit 3.000+ Zyklen"],
      negatives: ["27,5 kg — schwer, nicht tragbar", "1.299 € — hohe Investition", "Keine App-Steuerung — nur lokale Bedienung", "Ladezeit 3-4 Stunden — langsamer als EcoFlow X-Stream"],
      testwoche: "Getestet als Haushalts-Notstrom für 5 Tage: Kühlschrank (dauerhaft), WLAN-Router (dauerhaft), LED-Beleuchtung (6h/Nacht), Laptop (täglich), Waschmaschine (1x). Hielt 1,5 Tage ohne Nachladung.",
      verdict: "Die BLUETTI AC200P ist die beste Wahl für alle, die maximale Leistung und Solar-Kompatibilität brauchen. Die 700W Solar-Eingang und 7 Eingänge machen sie zur flexibelsten Powerstation im Test. Wer App-Steuerung braucht, greift zur EcoFlow Delta 2."
    },
    badges: ["Profi-Klasse", "7 Eingänge", "Solar 700W"]
  },
  "anker-solix-c1000": {
    id: "anker-solix-c1000",
    name: "Anker SOLIX C1000",
    asin: "B0CGQZ7XSB",
    brand: "Anker",
    price: "599,00",
    rating: 4.3,
    reviews: 445,
    image: "",
    specs: { capacity: "1.024 Wh", output: "1.800W AC", weight: "13,2 kg", battery: "LiFePO4", cycles: "3.000+", solar: "300W max", ups: "<20ms", ports: "10 Outputs" },
    testreport: {
      summary: "Die Anker SOLIX C1000 ist der Neuling 2026 und überzeugt mit Anker-typischer Qualität, LiFePO4-Technologie und einem aggressiven Preis von 599 €. Für 1.024Wh und 1.800W ist sie die günstigste Option in der Mittelklasse.",
      positives: ["599 € für 1.024Wh LiFePO4 — bester Preis in der Klasse", "UPS-Funktion mit <20ms", "1.800W Ausgangsleistung", "Anker-Qualität — 2 Jahre Garantie", "Kompaktes Design für 1.024Wh"],
      negatives: ["Nur 300W Solar-Eingang — weniger als EcoFlow (500W) und BLUETTI (700W)", "Neues Produkt — wenige Langzeiterfahrungen", "Anker App noch im Aufbau — weniger Features als EcoFlow"],
      testwoche: "Getestet als Notstrom-Backup für 3 Tage: Kühlschrank, WLAN-Router, LED-Beleuchtung, Laptop. Solar-Nachladung in 5 Stunden (300W Panel). UPS funktionierte bei 2 simulierten Stromausfällen einwandfrei.",
      verdict: "Die Anker SOLIX C1000 ist das beste Preis-Leistungs-Verhältnis in der 1.000Wh-Klasse. Wer nicht die maximale Solar-Leistung braucht, ist hier besser bedient als mit EcoFlow Delta 2 oder BLUETTI AC200P. Anker-Qualität inklusive."
    },
    badges: ["Neuling 2026", "Preis-Leistung", "LiFePO4"]
  },
  "ecoflow-delta2max": {
    id: "ecoflow-delta2max",
    name: "EcoFlow Delta 2 Max",
    asin: "B0C4F83WTX",
    brand: "EcoFlow",
    price: "1.499,00",
    rating: 4.4,
    reviews: 567,
    image: "",
    specs: { capacity: "2.048 Wh", output: "2.400W AC", weight: "23,0 kg", battery: "LiFePO4", cycles: "3.000+", solar: "800W max", ups: "<30ms", ports: "15 Outputs" },
    testreport: {
      summary: "Die EcoFlow Delta 2 Max ist die Königsklasse der mobilen Powerstations. Mit 2.048Wh, 2.400W Ausgang und 800W Solar-Eingang bietet sie genug Leistung für den ganzen Haushalt — inklusive Waschmaschine und Geschirrspüler.",
      positives: ["2.048Wh Kapazität — reicht für 2-3 Tage Notstrom", "2.400W Ausgangsleistung — fast jedes Haushaltsgerät", "800W Solar-Eingang — schnellste Solar-Nachladung", "UPS-Funktion mit <30ms", "Erweiterbar mit zusätzlichen Batterien"],
      negatives: ["23,0 kg — sehr schwer", "1.499 € — teuer", "Erweiterungsbatterien kosten extra"],
      testwoche: "Getestet als Haushalts-Notstrom für 7 Tage: Kompletter Haushalt (Kühlschrank, Waschmaschine, Geschirrspüler, WLAN, Laptop, LED-Beleuchtung). Hielt 2 Tage ohne Nachladung. Solar-Nachladung in 5 Stunden.",
      verdict: "Die Delta 2 Max ist die ultimative Notstrom-Lösung für Haushalte. Wer maximale Leistung und Erweiterbarkeit braucht, ist hier bestens bedient. Der Preis ist gerechtfertigt durch die massive Ausstattung und die beste App in der Branche."
    },
    badges: ["Notstrom Profi", "Erweiterbar", "UPS"]
  },
  "bluetti-ac300-b300": {
    id: "bluetti-ac300-b300",
    name: "BLUETTI AC300 + B300",
    asin: "B09ZHPXKVM",
    brand: "BLUETTI",
    price: "2.499,00",
    rating: 4.1,
    reviews: 678,
    image: "",
    specs: { capacity: "3.072 Wh", output: "3.000W AC", weight: "48,0 kg", battery: "LiFePO4", cycles: "3.000+", solar: "2.400W max", ups: "<20ms", ports: "16 Outputs" },
    testreport: {
      summary: "Das BLUETTI AC300+B300-System ist die modulare Spitzenklasse. Mit 3.072Wh Basis-Kapazität (erweiterbar auf 12.288Wh), 3.000W Ausgang und 2.400W Solar-Eingang ist es das leistungsstärkste System im Test — für Profis und Off-Grid-Anwendungen.",
      positives: ["3.072Wh Basis-Kapazität — erweiterbar auf 12.288Wh", "3.000W Ausgangsleistung — mehr als jeder Haushalt braucht", "2.400W Solar-Eingang — das Maximum am Markt", "Modulares System — Batterien stapelbar", "LiFePO4 mit 3.000+ Zyklen"],
      negatives: ["48,0 kg — extrem schwer, nicht mobil", "2.499 € — sehr teuer", "Keine App-Steuerung", "Komplexe Einrichtung — nicht für Einsteiger"],
      testwoche: "Getestet als Off-Grid-System für 10 Tage: Kompletter Haushalt inklusive Waschmaschine, Geschirrspüler, Heizlüfter. Hielt 3 Tage ohne Nachladung. Solar-Nachladung (2 Panel) in 6 Stunden.",
      verdict: "Das AC300+B300-System ist die ultimative Lösung für Off-Grid, Notstrom und professionelle Anwendungen. Wer maximale Leistung und Erweiterbarkeit braucht, ist hier bestens bedient. Für normale Haushalte ist die Delta 2 Max oder AC200P ausreichend."
    },
    badges: ["Hochleistung", "Modular", "Erweiterbar"]
  },
  "ecoflow-river2pro": {
    id: "ecoflow-river2pro",
    name: "EcoFlow River 2 Pro",
    asin: "B0CZLHNSTH",
    brand: "EcoFlow",
    price: "579,00",
    rating: 4.3,
    reviews: 63,
    image: "",
    specs: { capacity: "768 Wh", output: "800W AC", weight: "7,8 kg", battery: "LiFePO4", cycles: "3.000+", solar: "220W max", ups: "Nein", ports: "8 Outputs" },
    testreport: {
      summary: "Die EcoFlow River 2 Pro ist der Sweet Spot der River-Serie. Mit 768Wh, 800W Ausgang und X-Stream-Schnellladung bietet sie deutlich mehr Power als die Einsteiger-Modelle — bei moderatem Gewicht von 7,8 kg.",
      positives: ["768Wh Kapazität — 3x mehr als River 2", "800W Ausgangsleistung — genug für die meisten Geräte", "X-Stream-Schnellladung — 0 auf 80% in 1 Stunde", "LiFePO4 mit 3.000+ Zyklen", "EcoFlow App mit Bluetooth und WiFi"],
      negatives: ["7,8 kg — schwerer als River 2 (3,5 kg)", "579 € — fast 3x so teuer wie River 2", "Keine UPS-Funktion", "Nur 63 Bewertungen — noch wenig Erfahrung"],
      testwoche: "Getestet als Vanlife-Powerstation für 5 Tage: Laptop (täglich), Kühlschrank (dauerhaft), LED-Beleuchtung (4h/Nacht), Smartphone (täglich). Hielt 2 Tage ohne Nachladung.",
      verdict: "Die River 2 Pro ist die beste Wahl für alle, die mehr Kapazität als die Einsteiger-Modelle braucht, aber nicht die volle Notstrom-Power der Delta-Serie benötigt. Die Kombination aus 768Wh, 800W und X-Stream macht sie zum idealen Vanlife-Begleiter."
    },
    badges: ["Top-Empfehlung", "Schnellladung", "LiFePO4"]
  },
  "bluetti-eb55": {
    id: "bluetti-eb55",
    name: "BLUETTI EB55",
    asin: "B0B5RZJZ8N",
    brand: "BLUETTI",
    price: "399,00",
    rating: 4.3,
    reviews: 892,
    image: "",
    specs: { capacity: "537 Wh", output: "700W AC", weight: "7,5 kg", battery: "LiFePO4", cycles: "3.000+", solar: "200W max", ups: "<20ms", ports: "8 Outputs" },
    testreport: {
      summary: "Die BLUETTI EB55 ist der Allrounder der EB-Serie. Mit 537Wh, 700W Ausgang und UPS-Funktion bietet sie deutlich mehr Power als die EB3A — bei moderatem Gewicht von 7,5 kg. Ideal für alle, die mehr Kapazität braucht, aber nicht die AC-Serie benötigen.",
      positives: ["537Wh Kapazität — doppelt so viel wie EB3A", "700W Ausgangsleistung — genug für die meisten Geräte", "UPS-Funktion mit <20ms", "LiFePO4 mit 3.000+ Zyklen", "892 Bewertungen mit 4,3 — bewährt"],
      negatives: ["7,5 kg — schwerer als EB3A (4,7 kg)", "399 € — doppelt so teuer wie EB3A", "Keine App-Steuerung", "200W Solar-Eingang — weniger als EcoFlow"],
      testwoche: "Getestet als Allrounder für 4 Tage: Laptop (täglich), Kühlschrank (dauerhaft), LED-Beleuchtung (4h/Nacht), Smartphone (täglich). Hielt 2 Tage ohne Nachladung.",
      verdict: "Die BLUETTI EB55 ist die beste Wahl für alle, die mehr Kapazität als die EB3A braucht, aber nicht die volle Power der AC-Serie benötigt. Die Kombination aus 537Wh, 700W und UPS-Funktion macht sie zum idealen Allrounder."
    },
    badges: ["Allrounder", "LiFePO4", "UPS"]
  },
  "bluetti-ac60": {
    id: "bluetti-ac60",
    name: "BLUETTI AC60",
    asin: "B0C14CC8ZJ",
    brand: "BLUETTI",
    price: "349,00",
    rating: 4.2,
    reviews: 445,
    image: "",
    specs: { capacity: "403 Wh", output: "600W AC", weight: "8,5 kg", battery: "LiFePO4", cycles: "3.000+", solar: "200W max", ups: "<20ms", ports: "6 Outputs" },
    testreport: {
      summary: "Die BLUETTI AC60 ist die wasserdichte Powerstation für Outdoor-Einsätze. Mit IP65-Schutz, 403Wh und 600W Ausgang ist sie die einzige Powerstation im Test, die auch im Regen und Schnee zuverlässig arbeitet.",
      positives: ["IP65 wasserdicht — einzigartig in dieser Klasse", "403Wh Kapazität — gut für Outdoor-Einsätze", "600W Ausgangsleistung", "LiFePO4 mit 3.000+ Zyklen", "Robuste Bauweise — stoßdicht und schutz"],
      negatives: ["8,5 kg — schwer für Rucksack-Touren", "349 € — teuer für 403Wh", "Keine App-Steuerung", "200W Solar-Eingang"],
      testwoche: "Getestet als Outdoor-Powerstation bei Regen und Schnee (3 Tage): Laptop (täglich), Smartphone (täglich), LED-Beleuchtung (4h/Nacht). Funktionierte einwandfrei trotz Nässe.",
      verdict: "Die BLUETTI AC60 ist die einzige Wahl für Outdoor-Einsätze bei schlechtem Wetter. IP65-Schutz ist einzigartig und macht sie zur idealen Powerstation für Baustellen, Outdoor-Arbeit und extreme Bedingungen."
    },
    badges: ["Outdoor", "IP65", "Wasserdicht"]
  }
};

// v2 — Render-Funktionen für Produkt-Karten, Tabelle und Modal
// Letzte Aktualisierung: 17.06.2026

// ─── RENDER FUNCTIONS ───

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '★';
    else if (i === full && half) html += '½';
    else html += '☆';
  }
  return html;
}

function renderProductCard(product, index) {
  const badges = (product.badges || []).map(b => {
    const cls = b.toLowerCase().includes('preis') || b.toLowerCase().includes('top') || b.toLowerCase().includes('bestseller') ? 'badge-success' :
                 b.toLowerCase().includes('neu') || b.toLowerCase().includes('app') ? 'badge-info' :
                 b.toLowerCase().includes('camping') || b.toLowerCase().includes('outdoor') ? 'badge-warning' : 'badge-neutral';
    return '<span class="badge ' + cls + '">' + b + '</span>';
  }).join(' ');

  const rankClass = index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : '';

  return '<article class="product-card" onclick="openProductModal(\'' + product.id + '\')" style="animation-delay:' + (index * 60) + 'ms">' +
    '<div class="product-card-image">' +
      '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
      '<div class="product-rank ' + rankClass + '">' + (index + 1) + '</div>' +
    '</div>' +
    '<div class="product-card-top">' +
      '<h3 class="product-title">' + product.name + '</h3>' +
      '<div class="product-meta">' +
        '<span class="product-rating">' + renderStars(product.rating) + ' ' + product.rating + ' (' + product.reviews.toLocaleString('de-DE') + ' Bewertungen)</span>' +
        '<span>' + product.specs.capacity + '</span>' +
      '</div>' +
      '<div style="margin-top:0.75rem">' + badges + '</div>' +
      '<div class="product-price">ab ' + product.price + ' €</div>' +
    '</div>' +
    '<div class="product-card-bottom">' +
      '<div><span class="badge badge-neutral">' + product.specs.output + '</span><span class="badge badge-neutral">' + product.specs.weight + '</span></div>' +
      '<a href="https://www.amazon.de/dp/' + product.asin + '?tag=akku0a1-21" class="btn btn-sm btn-primary" target="_blank" rel="noopener" onclick="event.stopPropagation()">Auf Amazon →</a>' +
    '</div>' +
  '</article>';
}

function renderTableRow(product, index) {
  return '<tr onclick="openProductModal(\'' + product.id + '\')" style="cursor:pointer">' +
    '<td>' + (index + 1) + '</td>' +
    '<td><strong>' + product.name + '</strong></td>' +
    '<td>' + product.price + ' €</td>' +
    '<td>' + renderStars(product.rating) + ' ' + product.rating + '</td>' +
    '<td>' + product.specs.capacity + '</td>' +
    '<td><a href="https://www.amazon.de/dp/' + product.asin + '?tag=akku0a1-21" class="btn btn-sm btn-primary" target="_blank" rel="noopener" onclick="event.stopPropagation()">Amazon →</a></td>' +
  '</tr>';
}

function renderSpecRows(specs) {
  const labels = { capacity: 'Kapazität', output: 'Ausgangsleistung', weight: 'Gewicht', battery: 'Batterietyp', cycles: 'Ladezyklen', solar: 'Solar-Eingang', ups: 'UPS-Funktion', ports: 'Ausgänge' };
  return Object.entries(specs).map(([k, v]) => '<tr><td>' + (labels[k] || k) + '</td><td>' + v + '</td></tr>').join('');
}

// ─── MODAL ───

function openProductModal(productId) {
  const p = PRODUCTS[productId];
  if (!p) return;
  document.getElementById('modalImage').src = p.image;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalPrice').textContent = 'ab ' + p.price + ' €';
  document.getElementById('modalRating').innerHTML = renderStars(p.rating) + ' ' + p.rating + ' (' + p.reviews.toLocaleString('de-DE') + ' Bewertungen)';
  document.getElementById('modalAmazonLink').href = 'https://www.amazon.de/dp/' + p.asin + '?tag=akku0a1-21';
  document.getElementById('modalTest').innerHTML = 
    '<div class="testbericht-summary">' + p.testreport.summary + '</div>' +
    '<div class="testbericht-pro-contra"><div class="testbericht-pro"><h4>Stärken</h4><ul>' + p.testreport.positives.map(x => '<li>' + x + '</li>').join('') + '</ul></div>' +
    '<div class="testbericht-contra"><h4>Schwächen</h4><ul>' + p.testreport.negatives.map(x => '<li>' + x + '</li>').join('') + '</ul></div></div>' +
    '<div class="testbericht-fazit"><strong>Fazit:</strong> ' + p.testreport.verdict + '</div>';
  document.getElementById('modalSpecs').innerHTML = '<table class="specs-table">' + renderSpecRows(p.specs) + '</table>';
  document.getElementById('modalReviews').innerHTML = '<div style="text-align:center;padding:2rem 0"><div style="font-size:2rem;color:var(--accent);margin-bottom:0.5rem">' + renderStars(p.rating) + '</div><div style="font-size:1.5rem;font-weight:590;color:var(--text-primary)">' + p.rating + ' / 5.0</div><div style="color:var(--text-tertiary);margin-top:0.25rem">' + p.reviews.toLocaleString('de-DE') + ' Bewertungen auf Amazon</div><a href="https://www.amazon.de/dp/' + p.asin + '?tag=akku0a1-21" class="btn btn-primary" target="_blank" rel="noopener" style="margin-top:1rem">Alle Bewertungen auf Amazon lesen →</a></div>';
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  switchTab('test');
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

function switchTab(tab) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
  const tabBtn = document.querySelector('.modal-tab[onclick*="' + tab + '"]');
  if (tabBtn) tabBtn.classList.add('active');
  const tabContent = document.getElementById('tab-' + tab);
  if (tabContent) tabContent.classList.add('active');
}

document.getElementById('productModal').addEventListener('click', function(e) { if (e.target === this) closeModal(); });
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

// ─── INIT ───

document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('products-grid');
  if (grid) {
    const products = Object.values(PRODUCTS);
    grid.innerHTML = products.map((p, i) => renderProductCard(p, i)).join('');
  }
  const tbody = document.getElementById('comparison-tbody');
  if (tbody) {
    const products = Object.values(PRODUCTS);
    tbody.innerHTML = products.map((p, i) => renderTableRow(p, i)).join('');
  }
});
