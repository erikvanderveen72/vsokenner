// Woonkenner.nl — Alle data en FAQ's
// Bron: Nibud, Rijksoverheid.nl, Belastingdienst.nl, Kadaster — per 1 januari 2026

// ===== HYPOTHEEK 2026 =====
export const HYPOTHEEK_INKOMENSFACTOR_2026 = 4.25; // maximale factor (afhankelijk van rente)
export const HYPOTHEEK_MAX_LTV_2026 = 1.00; // 100% van woningwaarde
export const OVERDRACHTSBELASTING_WONING = 0.02; // 2% voor woningen
export const OVERDRACHTSBELASTING_STARTER = 0; // 0% voor starters (18-35 jaar, tot €510.000)
export const OVERDRACHTSBELASTING_STARTER_GRENS = 510000;
export const OVERDRACHTSBELASTING_NIET_WONING = 0.106; // 10,4% voor niet-woningen

// ===== HYPOTHEEKRENTE INDICATIES 2026 =====
export interface RenteIndicatie {
  looptijd: string;
  rente: number;
}

export const renteIndicaties2026: RenteIndicatie[] = [
  { looptijd: "1 jaar vast", rente: 0.0445 },
  { looptijd: "5 jaar vast", rente: 0.0415 },
  { looptijd: "10 jaar vast", rente: 0.0395 },
  { looptijd: "20 jaar vast", rente: 0.0425 },
  { looptijd: "30 jaar vast", rente: 0.0455 },
];

// ===== KOSTEN KOPER =====
export interface KostenKoperPost {
  naam: string;
  beschrijving: string;
  indicatie: string;
}

export const kostenKoperPosten: KostenKoperPost[] = [
  { naam: "Overdrachtsbelasting", beschrijving: "2% van de koopsom (0% voor starters 18-35 jaar tot €510.000)", indicatie: "0% - 2%" },
  { naam: "Notariskosten leveringsakte", beschrijving: "De akte waarmee het eigendom officieel wordt overgedragen", indicatie: "€700 - €1.200" },
  { naam: "Notariskosten hypotheekakte", beschrijving: "De akte waarmee de hypotheek wordt vastgelegd", indicatie: "€700 - €1.200" },
  { naam: "Taxatiekosten", beschrijving: "Verplichte taxatie voor de hypotheekverstrekker", indicatie: "€400 - €800" },
  { naam: "Advieskosten hypotheek", beschrijving: "Kosten voor hypotheekadvies en -bemiddeling", indicatie: "€1.500 - €3.500" },
  { naam: "NHG-kosten", beschrijving: "Nationale Hypotheek Garantie (0,6% van hypotheekbedrag, optioneel)", indicatie: "0,6%" },
  { naam: "Bankgarantie / waarborgsom", beschrijving: "10% van koopsom als zekerheid bij de notaris", indicatie: "€250 - €750" },
  { naam: "Bouwkundige keuring", beschrijving: "Optionele keuring van de bouwkundige staat", indicatie: "€300 - €500" },
];

// ===== NHG 2026 =====
export const NHG_KOSTENGRENS_2026 = 435000; // maximale koopsom voor NHG
export const NHG_ENERGIEBESPARING_GRENS = 461000; // met energiebesparende maatregelen
export const NHG_PREMIE = 0.006; // 0,6% van hypotheekbedrag

// ===== VERDUURZAMING =====
export interface SubsidieRegeling {
  naam: string;
  beschrijving: string;
  bedrag: string;
}

export const subsidieRegelingen2026: SubsidieRegeling[] = [
  { naam: "ISDE - Warmtepomp", beschrijving: "Investeringssubsidie voor een warmtepomp als vervanging van cv-ketel", bedrag: "€1.500 - €5.100" },
  { naam: "ISDE - Isolatie", beschrijving: "Subsidie voor isolatiemaatregelen (minimaal 2 maatregelen tegelijk)", bedrag: "€500 - €5.000" },
  { naam: "ISDE - Zonneboiler", beschrijving: "Subsidie voor het plaatsen van een zonneboiler", bedrag: "€1.000 - €2.500" },
  { naam: "ISDE - Warmtenet", beschrijving: "Subsidie voor aansluiting op een warmtenet", bedrag: "€3.675" },
  { naam: "Energiebespaarlening", beschrijving: "Lening tegen lage rente via het Nationaal Warmtefonds", bedrag: "Vanaf 0% rente" },
  { naam: "Gemeentelijke subsidie", beschrijving: "Extra subsidie van je gemeente (verschilt per gemeente)", bedrag: "Varieert" },
];

// ===== ENERGIELABELS =====
export interface EnergielabelInfo {
  label: string;
  omschrijving: string;
  kleur: string;
}

export const energielabels: EnergielabelInfo[] = [
  { label: "A++++", omschrijving: "Nul-op-de-meter of energieleverend", kleur: "bg-green-700" },
  { label: "A+++", omschrijving: "Zeer energiezuinig", kleur: "bg-green-600" },
  { label: "A++", omschrijving: "Uitstekend geïsoleerd", kleur: "bg-green-500" },
  { label: "A+", omschrijving: "Goed geïsoleerd met duurzame installaties", kleur: "bg-green-400" },
  { label: "A", omschrijving: "Goed geïsoleerd", kleur: "bg-lime-500" },
  { label: "B", omschrijving: "Redelijk geïsoleerd", kleur: "bg-yellow-400" },
  { label: "C", omschrijving: "Gemiddeld geïsoleerd", kleur: "bg-yellow-500" },
  { label: "D", omschrijving: "Matig geïsoleerd", kleur: "bg-orange-400" },
  { label: "E", omschrijving: "Slecht geïsoleerd", kleur: "bg-orange-500" },
  { label: "F", omschrijving: "Zeer slecht geïsoleerd", kleur: "bg-red-500" },
  { label: "G", omschrijving: "Nauwelijks geïsoleerd", kleur: "bg-red-700" },
];

// ===== NOTARISKOSTEN =====
export interface NotarisKostenIndicatie {
  dienst: string;
  vanBedrag: number;
  totBedrag: number;
}

export const notarisKosten: NotarisKostenIndicatie[] = [
  { dienst: "Leveringsakte (eigendomsoverdracht)", vanBedrag: 700, totBedrag: 1200 },
  { dienst: "Hypotheekakte", vanBedrag: 700, totBedrag: 1200 },
  { dienst: "Kadastrale recherche", vanBedrag: 50, totBedrag: 150 },
  { dienst: "Inschrijving Kadaster", vanBedrag: 75, totBedrag: 150 },
  { dienst: "Overige kosten (post, kopieën)", vanBedrag: 50, totBedrag: 100 },
];

// ===== HUURRECHTEN =====
export const HUUR_LIBERALISATIEGRENS_2026 = 879.66; // maandelijkse kale huur
export const HUURVERHOGING_MAX_2026 = 0.049; // 4,9% maximale huurverhoging sociale huur
export const HUURVERHOGING_VRIJ_MAX_2026 = 0.045; // 4,5% maximale huurverhoging vrije sector

// ===== FAQ DATA PER PAGINA =====

export const FAQ_HOMEPAGE = [
  {
    question: "Hoeveel hypotheek kan ik krijgen in 2026?",
    answer: "De maximale hypotheek hangt af van je inkomen, de hypotheekrente en je financiële verplichtingen. Als vuistregel kun je circa 4 tot 5 keer je bruto jaarinkomen lenen. Gebruik onze calculator voor een nauwkeurige berekening.",
  },
  {
    question: "Wat zijn kosten koper (k.k.)?",
    answer: "Kosten koper zijn de bijkomende kosten bij het kopen van een huis bovenop de koopprijs. Dit omvat overdrachtsbelasting (2%, of 0% voor starters), notariskosten, taxatiekosten en hypotheekadvies. Reken op circa 4-6% van de koopprijs.",
  },
  {
    question: "Krijg ik als starter vrijstelling van overdrachtsbelasting?",
    answer: "Ja, als je tussen 18 en 35 jaar bent en nog niet eerder gebruik hebt gemaakt van de startersvrijstelling, betaal je 0% overdrachtsbelasting. De woning mag in 2026 maximaal €510.000 kosten.",
  },
  {
    question: "Wat is de Nationale Hypotheek Garantie (NHG)?",
    answer: "NHG is een garantie van het Waarborgfonds Eigen Woningen. Je krijgt rentekorting (gemiddeld 0,2-0,4%) en bent beschermd bij betalingsproblemen door onvrijwillige werkloosheid of scheiding. De kostengrens is €435.000 in 2026.",
  },
  {
    question: "Welke subsidies zijn er voor verduurzaming in 2026?",
    answer: "Via de ISDE-regeling kun je subsidie krijgen voor warmtepompen (€1.500-€5.100), isolatie (€500-€5.000) en zonneboilers (€1.000-€2.500). Daarnaast zijn er gemeentelijke subsidies en het Nationaal Warmtefonds voor leningen.",
  },
  {
    question: "Is de informatie op Woonkenner.nl gratis?",
    answer: "Ja, alle informatie en calculators op Woonkenner.nl zijn 100% gratis. Wij zijn onafhankelijk en ontvangen geen provisie van hypotheekverstrekkers of andere dienstverleners.",
  },
];

export const FAQ_HUIS_KOPEN = [
  {
    question: "Wat zijn de stappen bij het kopen van een huis?",
    answer: "De belangrijkste stappen zijn: 1) Oriëntatie en budget bepalen, 2) Hypotheek vooraf regelen, 3) Woningen bezichtigen, 4) Bod uitbrengen, 5) Koopovereenkomst tekenen, 6) Bouwkundige keuring laten doen, 7) Hypotheek afsluiten, 8) Naar de notaris voor overdracht.",
  },
  {
    question: "Heb ik een aankoopmakelaar nodig?",
    answer: "Een aankoopmakelaar is niet verplicht maar kan wel waardevol zijn, vooral in een krappe markt. De kosten liggen tussen €2.500 en €5.000, of een percentage van de koopsom (1-2%). Een goede makelaar kan vaak meer besparen dan het kost.",
  },
  {
    question: "Wat is een voorbehoud van financiering?",
    answer: "Het financieringsvoorbehoud geeft je het recht om de koop te ontbinden als je de hypotheek niet rond krijgt. Dit wordt standaard opgenomen in het koopcontract met een termijn van 4-6 weken.",
  },
  {
    question: "Hoelang duurt het koopproces gemiddeld?",
    answer: "Gemiddeld duurt het koopproces 6 tot 12 weken vanaf bod tot sleuteloverdracht. Dit hangt af van de complexiteit, hypotheekaanvraag en beschikbaarheid van de notaris.",
  },
  {
    question: "Kan ik meer bieden dan de vraagprijs?",
    answer: "Ja, in een krappe markt wordt er regelmatig overboden. Belangrijk is dat je niet meer biedt dan je kunt financieren. Het verschil tussen taxatiewaarde en koopprijs moet je zelf bijleggen.",
  },
];

export const FAQ_HYPOTHEEK = [
  {
    question: "Hoe wordt de maximale hypotheek berekend in 2026?",
    answer: "De maximale hypotheek wordt berekend op basis van je bruto jaarinkomen, de hypotheekrente, je vaste lasten en eventuele schulden. De woonquote bepaalt welk percentage van je inkomen je aan woonlasten mag besteden.",
  },
  {
    question: "Welke hypotheekvormen zijn er?",
    answer: "De twee meest voorkomende zijn de annuïteitenhypotheek (vaste maandlasten, fiscaal aftrekbaar) en de lineaire hypotheek (dalende maandlasten). Sinds 2013 moet je annuïtair of lineair aflossen voor hypotheekrenteaftrek.",
  },
  {
    question: "Hoeveel hypotheekrente betaal ik in 2026?",
    answer: "De hypotheekrente in 2026 ligt gemiddeld rond 3,9-4,6% afhankelijk van de rentevaste periode. 10 jaar vast is het populairst met circa 3,95%. Met NHG krijg je vaak 0,2-0,4% rentekorting.",
  },
  {
    question: "Kan ik hypotheekrenteaftrek krijgen?",
    answer: "Ja, de hypotheekrente is fiscaal aftrekbaar als je annuïtair of lineair aflost over maximaal 30 jaar. De aftrek geldt tegen een tarief van maximaal 36,97% in 2026. Je eigen woning wordt belast via het eigenwoningforfait.",
  },
  {
    question: "Wat is het eigenwoningforfait?",
    answer: "Het eigenwoningforfait is een bedrag dat je bij je inkomen optelt vanwege het bezit van een eigen woning. In 2026 is dit 0,35% van de WOZ-waarde. Boven een WOZ-waarde van €1.310.000 is het 2,35% over het meerdere.",
  },
];

export const FAQ_KOSTEN_KOPER = [
  {
    question: "Hoeveel zijn de kosten koper bij een huis van €400.000?",
    answer: "Bij een woning van €400.000 betaal je circa €20.000-€30.000 aan kosten koper. Dit omvat overdrachtsbelasting (€8.000 of €0 als starter), notariskosten (€1.400-€2.400), taxatie (€400-€800) en hypotheekadvies (€1.500-€3.500).",
  },
  {
    question: "Zijn kosten koper aftrekbaar van de belasting?",
    answer: "De meeste kosten koper zijn niet aftrekbaar. Alleen de advies- en bemiddelingskosten voor je hypotheek en de taxatiekosten (indien nodig voor de hypotheek) zijn in sommige gevallen aftrekbaar.",
  },
  {
    question: "Moet ik de kosten koper zelf betalen?",
    answer: "Ja, de kosten koper kun je niet meefinancieren in je hypotheek. Je moet deze uit eigen middelen betalen. Dit is een belangrijk verschil met vroeger toen je meer dan 100% van de woningwaarde kon lenen.",
  },
  {
    question: "Wat is het verschil tussen v.o.n. en k.k.?",
    answer: "Bij 'vrij op naam' (v.o.n.) zijn de overdrachtsbelasting en notariskosten voor de leveringsakte inbegrepen in de koopprijs. Bij 'kosten koper' (k.k.) betaalt de koper deze kosten zelf bovenop de koopprijs.",
  },
  {
    question: "Wat kost NHG?",
    answer: "De kosten voor NHG zijn 0,6% van het hypotheekbedrag (éénmalig). Bij een hypotheek van €400.000 is dat €2.400. Je kunt dit bedrag meefinancieren in de hypotheek. De rentekorting verdient dit vaak snel terug.",
  },
];

export const FAQ_VERDUURZAMING = [
  {
    question: "Welke verduurzamingsmaatregelen leveren het meeste op?",
    answer: "De meest effectieve maatregelen zijn (in volgorde): 1) Dakisolatie (bespaart €400-€800/jaar), 2) Spouwmuurisolatie (€300-€600/jaar), 3) Vloerisolatie (€200-€400/jaar), 4) HR++ glas (€200-€400/jaar), 5) Warmtepomp (€500-€1.200/jaar).",
  },
  {
    question: "Hoe vraag ik ISDE-subsidie aan?",
    answer: "Je vraagt ISDE-subsidie aan via mijn.rvo.nl na uitvoering van de maatregelen. Je hebt facturen en foto's nodig. Belangrijk: voor isolatiesubsidie moet je minimaal 2 maatregelen tegelijk uitvoeren.",
  },
  {
    question: "Wat kost een warmtepomp?",
    answer: "Een lucht-water warmtepomp kost gemiddeld €8.000-€15.000 inclusief installatie. Een hybride warmtepomp (in combinatie met cv-ketel) kost €3.500-€7.000. Na ISDE-subsidie betaal je €3.000-€10.000.",
  },
  {
    question: "Verhoogt verduurzaming de woningwaarde?",
    answer: "Ja, verduurzaming verhoogt de woningwaarde. Een verbetering van 2 energielabelstappen levert gemiddeld 4-8% meer woningwaarde op. Een huis met label A is gemiddeld 10-15% meer waard dan een vergelijkbaar huis met label G.",
  },
  {
    question: "Kan ik verduurzaming meefinancieren in mijn hypotheek?",
    answer: "Ja, je mag tot 106% van de woningwaarde lenen als het extra bedrag wordt besteed aan energiebesparende maatregelen. Dit geldt ook bij NHG, waar de kostengrens dan €461.000 wordt.",
  },
];

export const FAQ_HUURRECHTEN = [
  {
    question: "Wat is de maximale huurverhoging in 2026?",
    answer: "De maximale huurverhoging voor sociale huurwoningen is 4,9% in 2026 (inflatie + 1%). Voor de vrije sector geldt een maximum van 4,5% per jaar. Huurders met een inkomen boven de inkomensgrens kunnen een extra inkomensafhankelijke verhoging krijgen.",
  },
  {
    question: "Wat is de liberalisatiegrens?",
    answer: "De liberalisatiegrens is €879,66 per maand in 2026. Huur je voor dit bedrag of minder, dan valt je woning onder de sociale huursector met extra huurbescherming. Daarboven is het vrije sector.",
  },
  {
    question: "Kan mijn verhuurder mij zomaar uit huis zetten?",
    answer: "Nee, als huurder ben je goed beschermd. Een verhuurder kan alleen opzeggen met een wettelijke reden, zoals eigen gebruik, dringend eigen gebruik, of als je ernstig tekortschiet. De rechter moet hiermee instemmen.",
  },
  {
    question: "Hoe kan ik mijn huurprijs laten toetsen?",
    answer: "Je kunt je huurprijs laten toetsen door de Huurcommissie. Dit kan binnen 6 maanden na aanvang van het huurcontract (sociale huur). De Huurcommissie toetst of de huurprijs in verhouding staat tot de kwaliteit van de woning.",
  },
  {
    question: "Wat zijn mijn rechten bij onderhoud?",
    answer: "De verhuurder is verantwoordelijk voor groot onderhoud en gebreken. Kleine reparaties (tot circa €150) zijn voor de huurder. Bij gebreken kun je naar de Huurcommissie voor huurverlaging totdat het gebrek is verholpen.",
  },
];

export const FAQ_NOTARIS = [
  {
    question: "Waarom heb ik een notaris nodig bij het kopen van een huis?",
    answer: "Een notaris is wettelijk verplicht voor de eigendomsoverdracht van onroerend goed. De notaris stelt de leveringsakte en hypotheekakte op, schrijft deze in bij het Kadaster en zorgt voor de juridische afwikkeling.",
  },
  {
    question: "Wat kosten de notariskosten bij een huis kopen?",
    answer: "De totale notariskosten liggen tussen €1.400 en €2.400. Dit omvat de leveringsakte (€700-€1.200) en de hypotheekakte (€700-€1.200). Daarnaast komen er Kadasterkosten (€125-€300) bij.",
  },
  {
    question: "Mag ik zelf een notaris kiezen?",
    answer: "Ja, de koper mag zelf de notaris kiezen bij de eigendomsoverdracht. Het is verstandig om offertes te vergelijken, want de tarieven kunnen flink verschillen. Let daarbij niet alleen op de prijs maar ook op de service.",
  },
  {
    question: "Wat doet de notaris precies?",
    answer: "De notaris controleert de eigendomssituatie, stelt de leveringsakte en hypotheekakte op, regelt de inschrijving bij het Kadaster, beheert de geldstromen via de derdengeldenrekening en zorgt voor de sleuteloverdracht.",
  },
  {
    question: "Wanneer ga ik naar de notaris?",
    answer: "Je gaat naar de notaris op de dag van de sleuteloverdracht. Dit is gemiddeld 6-12 weken na het tekenen van het koopcontract. De notaris stuurt de conceptaktes vooraf ter controle.",
  },
];

// ===== BEGRIPPENLIJST =====
export interface Begrip {
  term: string;
  uitleg: string;
  gerelateerd?: string;
}

export const begrippenlijst: Begrip[] = [
  { term: "Annuïteitenhypotheek", uitleg: "Hypotheekvorm waarbij je elke maand een vast bedrag betaalt. In het begin betaal je meer rente en minder aflossing, later verschuift dit. De meest gekozen hypotheekvorm in Nederland.", gerelateerd: "/hypotheek" },
  { term: "Bankgarantie", uitleg: "Een garantie van je bank aan de verkoper dat de waarborgsom (10% van de koopsom) wordt betaald als je je verplichtingen niet nakomt. Kost circa €250-€750.", gerelateerd: "/kosten-koper" },
  { term: "Bouwkundige keuring", uitleg: "Een inspectie van de bouwkundige staat van een woning door een onafhankelijke keurder. Hiermee worden verborgen gebreken en achterstallig onderhoud in kaart gebracht.", gerelateerd: "/huis-kopen" },
  { term: "Eigenwoningforfait", uitleg: "Een percentage van de WOZ-waarde dat je bij je belastbaar inkomen moet optellen. In 2026 is dit 0,35% van de WOZ-waarde.", gerelateerd: "/hypotheek" },
  { term: "Energielabel", uitleg: "Een label (A++++ t/m G) dat aangeeft hoe energiezuinig een woning is. Verplicht bij verkoop of verhuur. Een beter label betekent lagere energiekosten.", gerelateerd: "/verduurzaming" },
  { term: "Erfpacht", uitleg: "Het recht om gebruik te maken van grond die eigendom is van een ander (vaak de gemeente). Je betaalt hiervoor een periodieke vergoeding (canon)." },
  { term: "Executiewaarde", uitleg: "De geschatte opbrengst van een woning bij gedwongen verkoop. Meestal 85-90% van de marktwaarde." },
  { term: "Financieringsvoorbehoud", uitleg: "Een ontbindende voorwaarde in het koopcontract waarmee je de koop kunt ontbinden als je de financiering niet rond krijgt.", gerelateerd: "/huis-kopen" },
  { term: "Hypotheekrenteaftrek", uitleg: "De mogelijkheid om betaalde hypotheekrente af te trekken van je belastbaar inkomen. Geldt alleen bij annuïtaire of lineaire aflossing over maximaal 30 jaar.", gerelateerd: "/hypotheek" },
  { term: "ISDE", uitleg: "Investeringssubsidie Duurzame Energie en Energiebesparing. Subsidieregeling voor warmtepompen, isolatie en zonneboilers.", gerelateerd: "/verduurzaming" },
  { term: "Kadaster", uitleg: "Het Kadaster registreert wie eigenaar is van een perceel of woning in Nederland. Bij elke eigendomsoverdracht wordt de nieuwe eigenaar ingeschreven.", gerelateerd: "/notaris" },
  { term: "Kosten koper (k.k.)", uitleg: "De bijkomende kosten bij het kopen van een woning die voor rekening van de koper zijn: overdrachtsbelasting, notariskosten, taxatie en hypotheekadvies.", gerelateerd: "/kosten-koper" },
  { term: "Leveringsakte", uitleg: "De notariële akte waarmee het eigendom van de woning officieel wordt overgedragen van verkoper naar koper. Wordt ingeschreven bij het Kadaster.", gerelateerd: "/notaris" },
  { term: "Liberalisatiegrens", uitleg: "De huurprijsgrens (€879,66 in 2026) die bepaalt of een woning onder de sociale huursector of vrije sector valt.", gerelateerd: "/huurrechten" },
  { term: "Lineaire hypotheek", uitleg: "Hypotheekvorm waarbij je elke maand een vast bedrag aflost. De maandlasten dalen in de loop der tijd omdat je steeds minder rente betaalt.", gerelateerd: "/hypotheek" },
  { term: "Marktwaarde", uitleg: "De geschatte verkoopprijs van een woning bij verkoop onder normale omstandigheden. Wordt vastgesteld door een taxateur." },
  { term: "Nationale Hypotheek Garantie (NHG)", uitleg: "Een garantie die je beschermt bij betalingsproblemen door onvrijwillige werkloosheid of scheiding. Geeft ook rentekorting. Kostengrens: €435.000 in 2026.", gerelateerd: "/hypotheek" },
  { term: "Notaris", uitleg: "Een onafhankelijke juridische professional die verplicht is bij de eigendomsoverdracht van onroerend goed. Stelt aktes op en schrijft deze in bij het Kadaster.", gerelateerd: "/notaris" },
  { term: "Onderhoud (groot/klein)", uitleg: "Groot onderhoud (dak, gevel, installaties) is voor de verhuurder. Klein onderhoud (tot circa €150) is voor de huurder.", gerelateerd: "/huurrechten" },
  { term: "Overdrachtsbelasting", uitleg: "Belasting bij aankoop van onroerend goed. In 2026: 2% voor woningen, 0% voor starters (18-35 jaar, tot €510.000), 10,6% voor niet-woningen.", gerelateerd: "/kosten-koper" },
  { term: "Startersvrijstelling", uitleg: "Vrijstelling van overdrachtsbelasting voor kopers tussen 18 en 35 jaar die nog niet eerder de vrijstelling hebben gebruikt. Maximum woningwaarde: €510.000 in 2026.", gerelateerd: "/kosten-koper" },
  { term: "Taxatie", uitleg: "Een officiële waardebepaling van een woning door een gecertificeerde taxateur. Verplicht voor het afsluiten van een hypotheek.", gerelateerd: "/huis-kopen" },
  { term: "Vereniging van Eigenaren (VvE)", uitleg: "Een verplichte vereniging voor eigenaren van appartementen. De VvE beheert het gemeenschappelijk onderhoud en de gemeenschappelijke ruimtes." },
  { term: "Vrij op naam (v.o.n.)", uitleg: "Bij verkoop v.o.n. zijn de overdrachtsbelasting en notariskosten voor de leveringsakte inbegrepen in de verkoopprijs. Gebruikelijk bij nieuwbouw.", gerelateerd: "/kosten-koper" },
  { term: "Waarborgsom", uitleg: "Een bedrag van 10% van de koopsom dat je als zekerheid betaalt aan de notaris na het tekenen van het koopcontract. Alternatief: een bankgarantie.", gerelateerd: "/huis-kopen" },
  { term: "Warmtepomp", uitleg: "Een apparaat dat warmte uit de buitenlucht, bodem of grondwater haalt om je woning te verwarmen. Duurzaam alternatief voor de cv-ketel.", gerelateerd: "/verduurzaming" },
  { term: "Woonquote", uitleg: "Het percentage van je bruto inkomen dat je maximaal aan woonlasten mag besteden. Dit bepaalt mede je maximale hypotheek.", gerelateerd: "/hypotheek" },
  { term: "WOZ-waarde", uitleg: "De Waardering Onroerende Zaken. De gemeente stelt jaarlijks de WOZ-waarde vast. Dit bepaalt de hoogte van gemeentelijke belastingen en het eigenwoningforfait.", gerelateerd: "/hypotheek" },
  { term: "Zelfbewoningsplicht", uitleg: "De verplichting om de gekochte woning zelf te bewonen. Steeds meer gemeenten stellen dit als voorwaarde om beleggers te weren van de woningmarkt." },
];
