// VSO-kenner.nl — Alle data en FAQ's
// Bron: UWV.nl, Rijksoverheid.nl, Belastingdienst.nl — per 1 januari 2026

// ===== TRANSITIEVERGOEDING =====
// Bron: Art. 7:673 BW — Per 1 januari 2026
export const TRANSITIEVERGOEDING_FACTOR = 1 / 3; // 1/3 maandsalaris per dienstjaar

// ===== BELASTINGSCHIJVEN 2026 =====
// Bron: Belastingdienst.nl
export interface BelastingSchijf {
  schijf: number;
  van: number;
  tot: number | null;
  tarief: number;
}

export const belastingSchijven2026: BelastingSchijf[] = [
  { schijf: 1, van: 0, tot: 38441, tarief: 0.3597 },
  { schijf: 2, van: 38441, tot: 76817, tarief: 0.3748 },
  { schijf: 3, van: 76817, tot: null, tarief: 0.4950 },
];

// ===== FICTIEVE OPZEGTERMIJN =====
// Bron: Art. 7:672 BW
export interface OpzegtermijnRegel {
  dienstjaren: string;
  maanden: number;
}

export const opzegtermijnen: OpzegtermijnRegel[] = [
  { dienstjaren: "Korter dan 5 jaar", maanden: 1 },
  { dienstjaren: "5 tot 10 jaar", maanden: 2 },
  { dienstjaren: "10 tot 15 jaar", maanden: 3 },
  { dienstjaren: "15 jaar of langer", maanden: 4 },
];

// ===== WW-UITKERING =====
// Bron: UWV.nl — 2026
export const WW_MAX_DAGLOON_2026 = 274.44; // bruto per dag (incl. vakantietoeslag)
export const WW_PERCENTAGE_EERSTE_2_MAANDEN = 0.75;
export const WW_PERCENTAGE_DAARNA = 0.70;
export const WW_MIN_ARBEIDSVERLEDEN_WEKEN = 26; // 26 van 36 weken

// WW-duur: 1 maand per jaar arbeidsverleden, max 24 maanden
// Eerste 10 jaar: 1 maand per jaar
// Daarna: 1 maand per jaar (was eerder 0.5, maar per 2026 is het hele maand)
export const WW_MAX_DUUR_MAANDEN = 24;

// ===== BEDENKTIJD =====
// Bron: Art. 7:670b BW
export const BEDENKTIJD_DAGEN = 14;
export const BEDENKTIJD_ZONDER_ADVIES = 21; // als werkgever geen bedenktijd vermeldt

// ===== FAQ DATA PER PAGINA =====

export const FAQ_HOMEPAGE = [
  {
    question: "Wat is een vaststellingsovereenkomst?",
    answer: "Een vaststellingsovereenkomst (VSO) is een overeenkomst waarmee werkgever en werknemer het dienstverband in onderling overleg beëindigen. Het is een alternatief voor ontslag via het UWV of de kantonrechter.",
  },
  {
    question: "Heb ik recht op een transitievergoeding bij een VSO?",
    answer: "Bij een VSO is de werkgever niet wettelijk verplicht om een transitievergoeding te betalen, maar in de praktijk wordt dit bijna altijd opgenomen. De hoogte is minimaal 1/3 maandsalaris per dienstjaar.",
  },
  {
    question: "Kan ik WW krijgen na een vaststellingsovereenkomst?",
    answer: "Ja, mits de VSO correct is opgesteld. Het initiatief tot ontslag moet bij de werkgever liggen, er mag geen dringende reden zijn, en de fictieve opzegtermijn moet in acht worden genomen.",
  },
  {
    question: "Hoelang is de bedenktijd bij een VSO?",
    answer: "Je hebt 14 dagen bedenktijd na ondertekening van de VSO. In deze periode kun je de overeenkomst zonder opgaaf van redenen ontbinden. Als dit niet in de VSO staat, wordt de bedenktijd 21 dagen.",
  },
  {
    question: "Moet ik een advocaat inschakelen bij een VSO?",
    answer: "Het is niet verplicht maar sterk aan te raden. Een gespecialiseerde arbeidsrechtadvocaat kan je VSO beoordelen en vaak betere voorwaarden onderhandelen. Veel werkgevers vergoeden de advocaatkosten.",
  },
  {
    question: "Is de informatie op VSO-kenner.nl gratis?",
    answer: "Ja, alle informatie en calculators op VSO-kenner.nl zijn 100% gratis. Wij zijn onafhankelijk en ontvangen geen provisie van advocaten of andere dienstverleners.",
  },
];

export const FAQ_WAT_IS_VSO = [
  {
    question: "Wat is het verschil tussen een VSO en ontslag?",
    answer: "Bij ontslag neemt de werkgever eenzijdig het initiatief. Bij een VSO komen werkgever en werknemer samen tot een overeenkomst. Een VSO biedt meer ruimte voor onderhandeling over voorwaarden.",
  },
  {
    question: "Moet ik een VSO tekenen?",
    answer: "Nee, je bent nooit verplicht om een VSO te tekenen. Het is een aanbod van de werkgever. Als je niet tekent, moet de werkgever via het UWV of de kantonrechter ontslag aanvragen.",
  },
  {
    question: "Kan ik een VSO weigeren?",
    answer: "Ja, je kunt een VSO altijd weigeren. Je werkgever kan je niet dwingen. Weigeren heeft geen negatieve gevolgen voor je arbeidsovereenkomst of je rechten.",
  },
  {
    question: "Wat staat er in een vaststellingsovereenkomst?",
    answer: "Een VSO bevat typisch: de einddatum, transitievergoeding, eindafrekening, concurrentiebeding, geheimhoudingsclausule, finale kwijting, en afspraken over het getuigschrift en de vrijstelling van werk.",
  },
  {
    question: "Wanneer krijg ik een vaststellingsovereenkomst aangeboden?",
    answer: "Werkgevers bieden een VSO aan bij reorganisatie, disfunctioneren, verstoorde arbeidsrelatie, of als ze het dienstverband willen beëindigen zonder langdurige juridische procedure.",
  },
];

export const FAQ_TRANSITIEVERGOEDING = [
  {
    question: "Hoe wordt de transitievergoeding berekend in 2026?",
    answer: "De transitievergoeding is 1/3 maandsalaris per dienstjaar. Bij een onvolledig dienstjaar wordt de vergoeding naar rato berekend. Het maandsalaris is inclusief vakantietoeslag en vaste toeslagen.",
  },
  {
    question: "Hoeveel transitievergoeding krijg ik?",
    answer: "Dit hangt af van je bruto maandsalaris en het aantal dienstjaren. Gebruik onze calculator voor een exacte berekening. Bij een salaris van €4.000 en 10 dienstjaren is de vergoeding circa €13.333.",
  },
  {
    question: "Is transitievergoeding verplicht bij een VSO?",
    answer: "Wettelijk niet, maar in de praktijk wordt vrijwel altijd minimaal de wettelijke transitievergoeding opgenomen. Vaak kun je meer onderhandelen, vooral bij sterke ontslaggronden van de werkgever.",
  },
  {
    question: "Moet ik belasting betalen over de transitievergoeding?",
    answer: "Ja, de transitievergoeding is belast als loon. Je werkgever houdt loonheffing in. Afhankelijk van je inkomen betaal je 35,97% tot 49,50% belasting. Je kunt de netto vergoeding berekenen met onze calculator.",
  },
  {
    question: "Kan ik meer krijgen dan de wettelijke transitievergoeding?",
    answer: "Ja, bij een VSO is de transitievergoeding onderhandelbaar. Het wettelijke bedrag is het minimum. Bij een sterk dossier of urgentie van de werkgever kun je vaak 1,5 tot 2 keer het wettelijke bedrag krijgen.",
  },
];

export const FAQ_BEDENKTIJD = [
  {
    question: "Hoe lang is de bedenktijd bij een VSO?",
    answer: "De wettelijke bedenktijd is 14 dagen na ondertekening. Als de werkgever de bedenktijd niet vermeldt in de VSO, wordt deze automatisch verlengd naar 21 dagen.",
  },
  {
    question: "Hoe trek ik een VSO in tijdens de bedenktijd?",
    answer: "Stuur een schriftelijke verklaring (brief of e-mail) aan je werkgever waarin je aangeeft dat je de VSO herroept. Je hoeft geen reden op te geven. De datum van verzending is bepalend, niet van ontvangst.",
  },
  {
    question: "Wat gebeurt er als ik de bedenktijd gebruik?",
    answer: "Als je de VSO herroept, blijft je arbeidsovereenkomst gewoon bestaan alsof er niets is gebeurd. Je werkgever moet dan opnieuw onderhandelen of een ontslagprocedure starten.",
  },
  {
    question: "Kan ik de bedenktijd vaker gebruiken?",
    answer: "Binnen 6 maanden kun je de bedenktijd maar één keer gebruiken. Als je binnen 6 maanden opnieuw een VSO tekent met dezelfde werkgever, heb je geen bedenktijd meer.",
  },
  {
    question: "Telt de bedenktijd in kalenderdagen of werkdagen?",
    answer: "De bedenktijd van 14 dagen telt in kalenderdagen, niet werkdagen. Weekenden en feestdagen tellen dus mee. De termijn begint de dag na ondertekening.",
  },
];

export const FAQ_WW_RECHTEN = [
  {
    question: "Heb ik recht op WW na een vaststellingsovereenkomst?",
    answer: "Ja, mits de VSO aan bepaalde voorwaarden voldoet: het initiatief moet bij de werkgever liggen, er mag geen dringende reden zijn, en de fictieve opzegtermijn moet correct zijn verwerkt.",
  },
  {
    question: "Wat is de fictieve opzegtermijn?",
    answer: "De fictieve opzegtermijn is de wettelijke opzegtermijn die je werkgever zou moeten aanhouden bij regulier ontslag. Gedurende deze periode heb je nog geen recht op WW. De termijn is 1 tot 4 maanden, afhankelijk van je dienstjaren.",
  },
  {
    question: "Wanneer start mijn WW-uitkering na een VSO?",
    answer: "Je WW start na afloop van de fictieve opzegtermijn. Als je VSO eindigt op 1 maart en je hebt 2 maanden opzegtermijn, dan start je WW op 1 mei. Je kunt je wel direct inschrijven bij het UWV.",
  },
  {
    question: "Hoe hoog is de WW-uitkering in 2026?",
    answer: "De eerste 2 maanden ontvang je 75% van je dagloon, daarna 70%. Het maximale dagloon in 2026 is €274,44 per dag. Dit komt neer op maximaal circa €4.492 bruto per maand in de eerste 2 maanden.",
  },
  {
    question: "Hoe lang duurt de WW-uitkering?",
    answer: "De duur is afhankelijk van je arbeidsverleden: 1 maand per gewerkt jaar, met een maximum van 24 maanden. Je moet minimaal 26 van de laatste 36 weken hebben gewerkt om in aanmerking te komen.",
  },
];

export const FAQ_ONDERHANDELEN = [
  {
    question: "Kan ik onderhandelen over een vaststellingsovereenkomst?",
    answer: "Ja, een VSO is altijd onderhandelbaar. Je bent niet verplicht het eerste aanbod te accepteren. Belangrijke onderhandelingspunten zijn de vergoeding, einddatum, vrijstelling van werk, en het concurrentiebeding.",
  },
  {
    question: "Wat zijn veelgemaakte fouten bij onderhandelen?",
    answer: "De grootste fouten zijn: direct tekenen zonder advies, geen tegenvoorstel doen, emotioneel reageren, dreigen met juridische stappen zonder onderbouwing, en de bedenktijd vergeten.",
  },
  {
    question: "Hoeveel meer kan ik onderhandelen?",
    answer: "Dit hangt af van de situatie. Bij een reorganisatie is er vaak weinig ruimte. Bij een verstoorde arbeidsrelatie of disfunctioneren kun je vaak 1,5 tot 2 keer de wettelijke transitievergoeding krijgen.",
  },
  {
    question: "Moet ik zelf onderhandelen of een advocaat inschakelen?",
    answer: "Een arbeidsrechtadvocaat kent de juridische mogelijkheden en heeft ervaring met onderhandelen. Veel werkgevers vergoeden €750 tot €1.500 aan juridische kosten. De investering betaalt zich vaak terug.",
  },
  {
    question: "Hoe lang duurt het onderhandelen over een VSO?",
    answer: "Gemiddeld duurt een VSO-onderhandeling 2 tot 6 weken. Dit hangt af van de complexiteit, de bereidheid van beide partijen, en of er juridisch advies wordt ingewonnen.",
  },
];

export const FAQ_JURIDISCH_ADVIES = [
  {
    question: "Wanneer heb ik een advocaat nodig bij een VSO?",
    answer: "Altijd als er grote belangen spelen: hoge transitievergoeding, concurrentiebeding, complexe pensioenafspraken, of als je twijfelt over de voorwaarden. Een advocaat kan ook helpen als de werkgever druk uitoefent.",
  },
  {
    question: "Wat kost een arbeidsrechtadvocaat?",
    answer: "De kosten variëren van €150 tot €350 per uur. Voor het beoordelen van een VSO betaal je gemiddeld €750 tot €1.500. Veel werkgevers nemen deze kosten op in de VSO als onkostenvergoeding.",
  },
  {
    question: "Vergoedt mijn werkgever de advocaatkosten?",
    answer: "In de meeste gevallen is de werkgever bereid om een bijdrage van €750 tot €1.500 (exclusief btw) te doen voor juridisch advies. Dit is een standaard verzoek bij VSO-onderhandelingen.",
  },
  {
    question: "Kan ik ook een juridisch loket raadplegen?",
    answer: "Ja, het Juridisch Loket biedt gratis eerste advies. Dit is geschikt voor eenvoudige vragen, maar voor daadwerkelijke onderhandeling of beoordeling is een gespecialiseerde arbeidsrechtadvocaat aan te raden.",
  },
  {
    question: "Wat als ik de advocaatkosten niet kan betalen?",
    answer: "Bij een laag inkomen kun je in aanmerking komen voor gesubsidieerde rechtsbijstand via de Raad voor Rechtsbijstand. Je betaalt dan alleen een eigen bijdrage. Informeer bij het Juridisch Loket naar je mogelijkheden.",
  },
];

// ===== BEGRIPPENLIJST =====
export interface Begrip {
  term: string;
  uitleg: string;
  gerelateerd?: string; // link naar pagina
}

export const begrippenlijst: Begrip[] = [
  { term: "Arbeidsovereenkomst", uitleg: "De overeenkomst tussen werkgever en werknemer waarin de arbeidsvoorwaarden zijn vastgelegd, zoals salaris, werktijden en functie." },
  { term: "Arbeidsverleden", uitleg: "Het totaal aantal jaren dat je hebt gewerkt. Dit bepaalt mede de duur van je WW-uitkering: 1 maand WW per gewerkt jaar.", gerelateerd: "/ww-rechten" },
  { term: "Bedenktijd", uitleg: "De wettelijke periode van 14 dagen na ondertekening van een VSO waarin je de overeenkomst zonder opgaaf van redenen kunt herroepen.", gerelateerd: "/bedenktijd" },
  { term: "Beëindigingsovereenkomst", uitleg: "Ander woord voor vaststellingsovereenkomst. Een overeenkomst waarmee werkgever en werknemer samen het dienstverband beëindigen." },
  { term: "Bruto maandsalaris", uitleg: "Je salaris voor aftrek van belastingen en premies. De transitievergoeding wordt berekend op basis van het bruto maandsalaris inclusief vakantietoeslag.", gerelateerd: "/transitievergoeding" },
  { term: "CAO", uitleg: "Collectieve Arbeidsovereenkomst. Bevat afspraken over arbeidsvoorwaarden voor een hele sector of bedrijf. Kan aanvullende ontslagregels bevatten." },
  { term: "Concurrentiebeding", uitleg: "Een clausule die je verbiedt om na je ontslag bij een concurrent te gaan werken. Bij een VSO kun je onderhandelen over het laten vervallen hiervan.", gerelateerd: "/onderhandelen" },
  { term: "Dagloon", uitleg: "Het bedrag dat het UWV gebruikt om je WW-uitkering te berekenen. Het is gebaseerd op je gemiddelde inkomen in het jaar voor je werkloosheid.", gerelateerd: "/ww-rechten" },
  { term: "Dringende reden", uitleg: "Een zeer ernstige reden voor ontslag op staande voet, zoals diefstal, geweld of werkweigering. Bij een dringende reden heb je geen recht op WW." },
  { term: "Einddatum", uitleg: "De datum waarop je dienstverband officieel eindigt volgens de VSO. Rekening houdend met de fictieve opzegtermijn voor je WW-rechten.", gerelateerd: "/ww-rechten" },
  { term: "Eindafrekening", uitleg: "De financiële afrekening bij het einde van je dienstverband. Bevat openstaand salaris, vakantiedagen, vakantiegeld en eventuele bonussen." },
  { term: "Fictieve opzegtermijn", uitleg: "De wettelijke opzegtermijn die geldt alsof je werkgever regulier had opgezegd. Tijdens deze periode ontvang je geen WW. Duur: 1-4 maanden afhankelijk van dienstjaren.", gerelateerd: "/ww-rechten" },
  { term: "Finale kwijting", uitleg: "Een clausule in de VSO waarmee werkgever en werknemer verklaren dat ze na uitvoering van de VSO niets meer van elkaar te vorderen hebben." },
  { term: "Getuigschrift", uitleg: "Een schriftelijke verklaring van je werkgever over je functie, werkzaamheden en duur van het dienstverband. Je hebt hier wettelijk recht op." },
  { term: "Herroepingsrecht", uitleg: "Het recht om de ondertekening van een VSO ongedaan te maken binnen de bedenktijd van 14 dagen, zonder opgaaf van redenen.", gerelateerd: "/bedenktijd" },
  { term: "Kantonrechter", uitleg: "De rechter die arbeidsrechtelijke geschillen behandelt, waaronder ontslagzaken. Als werkgever en werknemer het niet eens worden over een VSO, kan de werkgever ontbinding via de kantonrechter aanvragen." },
  { term: "Loonheffing", uitleg: "De belasting en premies die je werkgever inhoudt op je bruto salaris. De transitievergoeding is onderworpen aan loonheffing." },
  { term: "Non-concurrentiebeding", uitleg: "Zie concurrentiebeding. Een clausule die je beperkt in het werken bij concurrerende bedrijven na beëindiging van je dienstverband.", gerelateerd: "/onderhandelen" },
  { term: "Ontslagvergoeding", uitleg: "Een vergoeding die je ontvangt bij ontslag. Bij een VSO is dit meestal minimaal de wettelijke transitievergoeding, maar kan hoger zijn door onderhandeling.", gerelateerd: "/transitievergoeding" },
  { term: "Opzegtermijn", uitleg: "De termijn die in acht moet worden genomen bij opzegging van de arbeidsovereenkomst. Wettelijk 1-4 maanden voor werkgevers, afhankelijk van de duur van het dienstverband." },
  { term: "Outplacement", uitleg: "Begeleiding bij het vinden van nieuw werk, betaald door de werkgever. Kan worden opgenomen in de VSO als aanvullende voorwaarde." },
  { term: "Pensioenopbouw", uitleg: "De pensioenrechten die je opbouwt tijdens je dienstverband. Bij beëindiging stopt de opbouw. Check altijd de gevolgen voor je pensioen bij ondertekening van een VSO." },
  { term: "Proeftijd", uitleg: "De eerste periode van een arbeidsovereenkomst waarin werkgever en werknemer de samenwerking kunnen beëindigen zonder opzegtermijn. Maximaal 1-2 maanden." },
  { term: "Relatiebeding", uitleg: "Een clausule die je verbiedt om na je vertrek contact te onderhouden met klanten of relaties van je voormalige werkgever.", gerelateerd: "/onderhandelen" },
  { term: "Reorganisatie", uitleg: "Herstructurering van een bedrijf, vaak met gedwongen ontslagen. Een veelvoorkomende aanleiding voor het aanbieden van vaststellingsovereenkomsten." },
  { term: "Sociaal plan", uitleg: "Een plan dat wordt opgesteld bij een reorganisatie met afspraken over ontslagvoorwaarden, vergoedingen en begeleiding. Kan van invloed zijn op je VSO-voorwaarden." },
  { term: "Transitievergoeding", uitleg: "De wettelijke ontslagvergoeding van 1/3 bruto maandsalaris per dienstjaar. Dit is het wettelijk minimum bij ontslag per 2026.", gerelateerd: "/transitievergoeding" },
  { term: "UWV", uitleg: "Uitvoeringsinstituut Werknemersverzekeringen. Verantwoordelijk voor de uitvoering van de WW en andere werknemersverzekeringen. Je vraagt je WW-uitkering aan bij het UWV.", gerelateerd: "/ww-rechten" },
  { term: "Vakantietoeslag", uitleg: "Het vakantiegeld (8% van het bruto jaarsalaris) dat je werkgever jaarlijks uitkeert, meestal in mei. Wordt meegenomen in de berekening van de transitievergoeding." },
  { term: "Vaststellingsovereenkomst", uitleg: "Een schriftelijke overeenkomst waarmee werkgever en werknemer de arbeidsovereenkomst met wederzijds goedvinden beëindigen. Ook wel beëindigingsovereenkomst of VSO genoemd.", gerelateerd: "/wat-is-een-vso" },
  { term: "Vrijstelling van werk", uitleg: "De periode na ondertekening van de VSO tot de einddatum waarin je niet hoeft te werken maar wel salaris ontvangt. Je kunt deze tijd gebruiken om nieuw werk te zoeken." },
  { term: "VSO", uitleg: "Afkorting voor vaststellingsovereenkomst. Zie vaststellingsovereenkomst.", gerelateerd: "/wat-is-een-vso" },
  { term: "Wekeneis", uitleg: "Om WW te krijgen moet je minimaal 26 van de laatste 36 weken voor je werkloosheid hebben gewerkt. Dit is de basisvoorwaarde voor een WW-uitkering.", gerelateerd: "/ww-rechten" },
  { term: "Werkgeversverklaring", uitleg: "Een verklaring van je werkgever over je dienstverband en inkomen. Nuttig bij het aanvragen van een hypotheek of huurwoning." },
  { term: "WW-uitkering", uitleg: "Werkloosheidswet-uitkering. Een tijdelijke uitkering van het UWV als je onvrijwillig werkloos wordt. De eerste 2 maanden 75% van je dagloon, daarna 70%.", gerelateerd: "/ww-rechten" },
  { term: "Ziekmelding", uitleg: "Als je ziek bent op het moment dat een VSO wordt aangeboden, is het belangrijk om dit te melden. Tekenen tijdens ziekte kan gevolgen hebben voor je Ziektewet-rechten." },
];
