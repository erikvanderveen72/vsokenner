// VSO Adviestool — Vragenflow en advieslogica

export interface VSOAntwoorden {
  heeftVSOOntvangen: "ja" | "nee" | "verwacht";
  dienstjaren: number;
  brutoSalaris: number;
  redenOntslag: "reorganisatie" | "disfunctioneren" | "verschilVanInzicht" | "ziek" | "anders";
  concurrentiebeding: "ja" | "nee" | "weetNiet";
  alGetekend: "ja" | "nee";
  dagenSindsOntvangst: number;
  werkgeverBiedtVergoeding: "ja" | "nee" | "onduidelijk";
}

export interface StapConfig {
  id: string;
  titel: string;
  beschrijving: string;
  type: "keuze" | "slider" | "nummer";
  opties?: { label: string; value: string; toelichting?: string }[];
  sliderConfig?: { min: number; max: number; step: number; eenheid: string; prefix?: string };
  veldNaam: keyof VSOAntwoorden;
}

export const stappen: StapConfig[] = [
  {
    id: "status",
    titel: "Heb je een vaststellingsovereenkomst ontvangen?",
    beschrijving: "Dit bepaalt welk advies het meest relevant is voor jouw situatie.",
    type: "keuze",
    veldNaam: "heeftVSOOntvangen",
    opties: [
      { label: "Ja, ik heb een VSO ontvangen", value: "ja" },
      { label: "Nee, maar ik verwacht er een", value: "verwacht" },
      { label: "Nee, puur informatief", value: "nee" },
    ],
  },
  {
    id: "dienstjaren",
    titel: "Hoeveel jaar ben je in dienst?",
    beschrijving: "Je dienstjaren bepalen de hoogte van je transitievergoeding.",
    type: "slider",
    veldNaam: "dienstjaren",
    sliderConfig: { min: 1, max: 35, step: 1, eenheid: "jaar" },
  },
  {
    id: "salaris",
    titel: "Wat is je bruto maandsalaris?",
    beschrijving: "Exclusief vakantietoeslag — die rekenen we er automatisch bij.",
    type: "slider",
    veldNaam: "brutoSalaris",
    sliderConfig: { min: 1500, max: 12000, step: 100, eenheid: "", prefix: "€" },
  },
  {
    id: "reden",
    titel: "Wat is de reden voor het ontslag?",
    beschrijving: "De ontslagreden bepaalt je onderhandelingspositie en WW-rechten.",
    type: "keuze",
    veldNaam: "redenOntslag",
    opties: [
      { label: "Reorganisatie / bedrijfseconomisch", value: "reorganisatie", toelichting: "Vaak goede onderhandelingspositie" },
      { label: "Disfunctioneren", value: "disfunctioneren", toelichting: "Check of verbetertraject is doorlopen" },
      { label: "Verschil van inzicht", value: "verschilVanInzicht", toelichting: "Meest voorkomende reden bij VSO's" },
      { label: "Langdurig ziek", value: "ziek", toelichting: "Extra aandachtspunten rondom ziekte" },
      { label: "Andere reden", value: "anders" },
    ],
  },
  {
    id: "concurrentiebeding",
    titel: "Heb je een concurrentiebeding?",
    beschrijving: "Een concurrentiebeding kan je belemmeren bij het vinden van nieuw werk.",
    type: "keuze",
    veldNaam: "concurrentiebeding",
    opties: [
      { label: "Ja", value: "ja" },
      { label: "Nee", value: "nee" },
      { label: "Weet ik niet", value: "weetNiet" },
    ],
  },
  {
    id: "getekend",
    titel: "Heb je de VSO al getekend?",
    beschrijving: "Na tekenen heb je 14 dagen bedenktijd om te herroepen.",
    type: "keuze",
    veldNaam: "alGetekend",
    opties: [
      { label: "Ja, al getekend", value: "ja" },
      { label: "Nee, nog niet getekend", value: "nee" },
    ],
  },
];

// ─── Advieslogica ───

export interface Aandachtspunt {
  titel: string;
  beschrijving: string;
  prioriteit: "hoog" | "midden" | "laag";
  categorie: "vergoeding" | "ww" | "juridisch" | "beding" | "termijn";
}

export interface ChecklistItem {
  tekst: string;
  prioriteit: "hoog" | "midden" | "laag";
  categorie: string;
}

export interface AdviesResultaat {
  brutoTransitievergoeding: number;
  nettoTransitievergoeding: number;
  belasting: number;
  effectiefTarief: number;
  wwEerste2Maanden: number;
  wwDaarna: number;
  wwDuur: number;
  fictieveOpzegtermijn: number;
  risicoscore: number; // 1-10
  aandachtspunten: Aandachtspunt[];
  checklist: ChecklistItem[];
  samenvatting: string;
}

export function genereerAdvies(antwoorden: VSOAntwoorden): AdviesResultaat {
  // Berekeningen importeren inline om circular deps te voorkomen
  const maandsalarisInclVakantie = antwoorden.brutoSalaris * 1.08;
  const brutoTransitie = Math.round((maandsalarisInclVakantie / 3) * antwoorden.dienstjaren * 100) / 100;

  // Netto berekening (vereenvoudigd met 2026 schijven)
  const schijven = [
    { tot: 38883, tarief: 0.3575 },
    { tot: 78426, tarief: 0.3756 },
    { tot: Infinity, tarief: 0.4950 },
  ];
  let belasting = 0;
  let resterend = brutoTransitie;
  for (const s of schijven) {
    if (resterend <= 0) break;
    const vorige = s === schijven[0] ? 0 : schijven[schijven.indexOf(s) - 1].tot;
    const bereik = s.tot === Infinity ? resterend : Math.min(resterend, s.tot - vorige);
    belasting += bereik * s.tarief;
    resterend -= bereik;
  }
  const nettoTransitie = Math.round((brutoTransitie - belasting) * 100) / 100;
  belasting = Math.round(belasting * 100) / 100;
  const effectiefTarief = brutoTransitie > 0 ? Math.round((belasting / brutoTransitie) * 10000) / 10000 : 0;

  // WW
  const maxDagloon = 304.25;
  const dagloon = Math.min((antwoorden.brutoSalaris * 12) / 261, maxDagloon);
  const maandBasis = dagloon * 21.75;
  const wwEerste2 = Math.round(maandBasis * 0.75 * 100) / 100;
  const wwDaarna = Math.round(maandBasis * 0.70 * 100) / 100;
  const wwDuur = Math.min(antwoorden.dienstjaren, 24);

  // Fictieve opzegtermijn
  let opzegtermijn = 1;
  if (antwoorden.dienstjaren >= 15) opzegtermijn = 4;
  else if (antwoorden.dienstjaren >= 10) opzegtermijn = 3;
  else if (antwoorden.dienstjaren >= 5) opzegtermijn = 2;

  // Aandachtspunten genereren
  const aandachtspunten: Aandachtspunt[] = [];

  // Altijd relevant
  aandachtspunten.push({
    titel: "Fictieve opzegtermijn in VSO",
    beschrijving: `Met ${antwoorden.dienstjaren} dienstjaren is je fictieve opzegtermijn ${opzegtermijn} maand${opzegtermijn > 1 ? "en" : ""}. Zorg dat de einddatum in je VSO hier rekening mee houdt, anders loop je WW mis.`,
    prioriteit: "hoog",
    categorie: "ww",
  });

  if (antwoorden.werkgeverBiedtVergoeding !== "ja") {
    aandachtspunten.push({
      titel: "Geen vergoeding aangeboden",
      beschrijving: `Je hebt minimaal recht op €${brutoTransitie.toLocaleString("nl-NL", { minimumFractionDigits: 2 })} bruto transitievergoeding. Onderhandel hier altijd over.`,
      prioriteit: "hoog",
      categorie: "vergoeding",
    });
  }

  if (antwoorden.concurrentiebeding === "ja" || antwoorden.concurrentiebeding === "weetNiet") {
    aandachtspunten.push({
      titel: "Concurrentiebeding laten vervallen",
      beschrijving: "Zorg dat het concurrentiebeding expliciet wordt opgeheven in de VSO. Dit is een standaard onderhandelingspunt.",
      prioriteit: "hoog",
      categorie: "beding",
    });
  }

  if (antwoorden.redenOntslag === "ziek") {
    aandachtspunten.push({
      titel: "Let op bij ziekte — ontslagbescherming!",
      beschrijving: "Bij ziekte heb je ontslagbescherming (opzegverbod). Een VSO tekenen is dan meestal nadelig: je komt niet in aanmerking voor WW (je kunt niet solliciteren) en vaak ook niet voor een Ziektewet-uitkering. Je werkgever is verplicht de eerste twee jaar je loon door te betalen. Schakel altijd een arbeidsrechtadvocaat in.",
      prioriteit: "hoog",
      categorie: "juridisch",
    });
  }

  if (antwoorden.redenOntslag === "disfunctioneren") {
    aandachtspunten.push({
      titel: "Check het verbetertraject",
      beschrijving: "Bij disfunctioneren moet je werkgever een verbetertraject hebben doorlopen. Is dit niet gebeurd? Dan sta je sterker in de onderhandeling.",
      prioriteit: "midden",
      categorie: "juridisch",
    });
  }

  if (antwoorden.alGetekend === "ja") {
    aandachtspunten.push({
      titel: "Bedenktijd loopt",
      beschrijving: "Je hebt 14 dagen bedenktijd na tekenen. Staat de bedenktijd niet in je VSO? Dan heb je zelfs 21 dagen. Binnen deze termijn kun je de VSO zonder opgaaf van reden herroepen via een schriftelijke verklaring.",
      prioriteit: "hoog",
      categorie: "termijn",
    });

    aandachtspunten.push({
      titel: "Bedenktijd moet in de VSO staan",
      beschrijving: "Controleer of de 14 dagen bedenktijd expliciet in de VSO staat vermeld. Ontbreekt dit? Dan heb je automatisch 21 dagen bedenktijd.",
      prioriteit: "midden",
      categorie: "termijn",
    });
  }

  aandachtspunten.push({
    titel: "Juridische kosten laten vergoeden",
    beschrijving: "Vraag je werkgever om een bijdrage van €750-€1.500 voor juridisch advies. Dit is een standaard verzoek en belastingvrij.",
    prioriteit: "midden",
    categorie: "juridisch",
  });

  if (antwoorden.dienstjaren >= 10) {
    aandachtspunten.push({
      titel: "Onderhandel over meer dan de transitievergoeding",
      beschrijving: `Met ${antwoorden.dienstjaren} jaar dienstverband heb je een sterke positie. Vraag naast de transitievergoeding ook om outplacementbudget, vrijstelling van werk met behoud van salaris, of een hogere vergoeding.`,
      prioriteit: "midden",
      categorie: "vergoeding",
    });
  }

  aandachtspunten.push({
    titel: "Correcte eindafrekening",
    beschrijving: "Zorg dat vakantiedagen, vakantiegeld, dertiende maand en eventuele bonussen correct worden afgerekend in de VSO.",
    prioriteit: "midden",
    categorie: "vergoeding",
  });

  // Checklist
  const checklist: ChecklistItem[] = [
    { tekst: "Teken de VSO niet direct — neem de tijd", prioriteit: "hoog", categorie: "algemeen" },
    { tekst: "Controleer of de transitievergoeding minimaal het wettelijk bedrag is", prioriteit: "hoog", categorie: "vergoeding" },
    { tekst: "Check of de einddatum rekening houdt met de fictieve opzegtermijn", prioriteit: "hoog", categorie: "ww" },
    { tekst: "Laat de VSO beoordelen door een arbeidsrechtadvocaat", prioriteit: "hoog", categorie: "juridisch" },
    { tekst: "Vraag een bijdrage voor juridische kosten", prioriteit: "midden", categorie: "juridisch" },
    { tekst: "Controleer of het concurrentiebeding vervalt", prioriteit: antwoorden.concurrentiebeding === "ja" ? "hoog" : "laag", categorie: "beding" },
    { tekst: "Check de afrekening van vakantiedagen en vakantiegeld", prioriteit: "midden", categorie: "vergoeding" },
    { tekst: "Zorg dat de ontslagreden WW-proof is geformuleerd", prioriteit: "hoog", categorie: "ww" },
    { tekst: "Vraag om een positief getuigschrift", prioriteit: "midden", categorie: "algemeen" },
    { tekst: "Vraag om vrijstelling van werk met behoud van salaris", prioriteit: "midden", categorie: "algemeen" },
    { tekst: "Overweeg outplacement of opleidingsbudget te vragen", prioriteit: "laag", categorie: "algemeen" },
    { tekst: "Meld je op de eerste werkloosheidsdag bij het UWV", prioriteit: "hoog", categorie: "ww" },
  ];

  if (antwoorden.redenOntslag === "ziek") {
    checklist.unshift({ tekst: "Overleg met een arbeidsrechtadvocaat over ziekte en VSO", prioriteit: "hoog", categorie: "juridisch" });
  }

  if (antwoorden.alGetekend === "ja") {
    checklist.unshift({ tekst: "Noteer de datum waarop de 14 dagen bedenktijd afloopt", prioriteit: "hoog", categorie: "termijn" });
  }

  // Risicoscore (1 = laag risico, 10 = hoog risico)
  let risico = 3;
  if (antwoorden.redenOntslag === "ziek") risico += 3;
  if (antwoorden.alGetekend === "ja") risico += 2;
  if (antwoorden.concurrentiebeding === "ja") risico += 1;
  if (antwoorden.werkgeverBiedtVergoeding === "nee") risico += 1;
  if (antwoorden.dienstjaren >= 10) risico += 1;
  risico = Math.min(risico, 10);

  // Samenvatting
  let samenvatting = "";
  if (antwoorden.alGetekend === "ja") {
    samenvatting = "Je hebt de VSO al getekend. Je hebt nog 14 dagen bedenktijd om te herroepen. Laat de VSO zo snel mogelijk beoordelen door een advocaat.";
  } else if (antwoorden.redenOntslag === "ziek") {
    samenvatting = "Bij ziekte is een VSO extra risicovol. Schakel direct een arbeidsrechtadvocaat in voordat je tekent. Je WW-rechten en mogelijk recht op een Ziektewet-uitkering staan op het spel.";
  } else if (antwoorden.heeftVSOOntvangen === "ja") {
    samenvatting = `Op basis van je situatie heb je recht op minimaal €${brutoTransitie.toLocaleString("nl-NL", { minimumFractionDigits: 2 })} bruto transitievergoeding. Teken niet direct en laat de VSO beoordelen. Er is vaak ruimte om te onderhandelen.`;
  } else if (antwoorden.heeftVSOOntvangen === "verwacht") {
    samenvatting = `Als je een VSO ontvangt, kun je minimaal €${brutoTransitie.toLocaleString("nl-NL", { minimumFractionDigits: 2 })} bruto transitievergoeding verwachten. Bereid je voor door je rechten te kennen en alvast een advocaat te benaderen.`;
  } else {
    samenvatting = `Op basis van je gegevens zou je transitievergoeding minimaal €${brutoTransitie.toLocaleString("nl-NL", { minimumFractionDigits: 2 })} bruto bedragen. Gebruik deze informatie om je positie te begrijpen.`;
  }

  return {
    brutoTransitievergoeding: brutoTransitie,
    nettoTransitievergoeding: nettoTransitie,
    belasting,
    effectiefTarief,
    wwEerste2Maanden: wwEerste2,
    wwDaarna,
    wwDuur,
    fictieveOpzegtermijn: opzegtermijn,
    risicoscore: risico,
    aandachtspunten,
    checklist,
    samenvatting,
  };
}
