// Verzekeringskenner.nl — Alle data en FAQ's
// Bron: Rijksoverheid.nl, Zorgwijzer.nl, Independer.nl — indicatief 2026

// ===== ZORGVERZEKERING 2026 =====
export const zorgverzekeringPremies2026 = {
  basis: 145.00, // Gemiddelde basispremie per maand
  aanvullendBasis: 15.00,
  aanvullendUitgebreid: 35.00,
  aanvullendCompleet: 65.00,
};

export const EIGEN_RISICO_VERPLICHT_2026 = 385; // Verplicht eigen risico

// Korting op premie bij hoger vrijwillig eigen risico
export const eigenRisicoBedragen: Record<number, number> = {
  0: 0, // Alleen verplicht (€385)
  100: 6.50,
  200: 13.00,
  300: 19.50,
  400: 26.00,
  500: 32.50,
};

// ===== AUTOVERZEKERING =====
export const SCHADEVRIJE_JAREN_MAX_KORTING = 0.80; // 80% korting
export const SCHADEVRIJE_JAREN_PER_JAAR = 0.053; // ~5.3% per jaar

// ===== INBOEDELVERZEKERING =====
export const GEMIDDELDE_INBOEDELWAARDE = 75000;
export const INBOEDEL_WAARDERINGEN: Record<string, number> = {
  "Studio/klein appartement": 30000,
  "Appartement": 50000,
  "Tussenwoning": 75000,
  "Hoekwoning": 90000,
  "Vrijstaand": 120000,
};

// ===== OPSTALVERZEKERING =====
export const GEMIDDELDE_HERBOUWWAARDE = 300000;

// ===== FAQ DATA PER PAGINA =====

export const FAQ_HOMEPAGE = [
  {
    question: "Welke verzekeringen zijn verplicht in Nederland?",
    answer: "In Nederland is de zorgverzekering verplicht voor iedereen die hier woont of werkt. Daarnaast is een WA-verzekering verplicht als je een motorvoertuig bezit. Andere verzekeringen zoals inboedel-, opstal- en aansprakelijkheidsverzekering zijn niet wettelijk verplicht, maar worden sterk aangeraden.",
  },
  {
    question: "Hoe kan ik besparen op mijn verzekeringen?",
    answer: "Er zijn verschillende manieren om te besparen: verhoog je eigen risico, bundel verzekeringen bij één verzekeraar, vergelijk jaarlijks premies, kies alleen dekkingen die je nodig hebt, en bouw schadevrije jaren op bij je autoverzekering. Jaarlijks overstappen kan honderden euro's schelen.",
  },
  {
    question: "Wanneer kan ik overstappen van zorgverzekering?",
    answer: "Je kunt elk jaar overstappen van zorgverzekering. De overstapperiode loopt van 12 november tot 31 december. Je nieuwe verzekering gaat dan in op 1 januari. Je hoeft je oude verzekering niet zelf op te zeggen; dat doet je nieuwe verzekeraar voor je.",
  },
  {
    question: "Wat is het eigen risico bij de zorgverzekering?",
    answer: "In 2026 is het verplicht eigen risico €385 per jaar. Dit betekent dat je de eerste €385 aan zorgkosten zelf betaalt. Je kunt kiezen voor een vrijwillig verhoogd eigen risico (tot €885) voor een lagere premie. Huisartsbezoek en verloskundige zorg vallen niet onder het eigen risico.",
  },
  {
    question: "Heb ik een aansprakelijkheidsverzekering nodig?",
    answer: "Een aansprakelijkheidsverzekering (AVP) is niet verplicht, maar wordt sterk aangeraden. Als je per ongeluk schade veroorzaakt aan iemand anders of andermans spullen, kan dit in de duizenden euro's lopen. Een AVP kost slechts enkele euro's per maand en dekt het hele gezin.",
  },
  {
    question: "Is de informatie op Verzekeringskenner.nl gratis?",
    answer: "Ja, alle informatie en calculators op Verzekeringskenner.nl zijn 100% gratis. Wij zijn onafhankelijk en ontvangen geen provisie van verzekeraars of tussenpersonen.",
  },
];

export const FAQ_ZORGVERZEKERING = [
  {
    question: "Wat dekt de basisverzekering?",
    answer: "De basisverzekering dekt onder andere huisartsbezoek, ziekenhuiszorg, medicijnen, geestelijke gezondheidszorg, fysiotherapie (beperkt), en verloskundige zorg. De dekking is voor alle verzekeraars hetzelfde, alleen de premie en service verschillen.",
  },
  {
    question: "Heb ik een aanvullende verzekering nodig?",
    answer: "Dat hangt af van je persoonlijke situatie. Een aanvullende verzekering is nuttig als je regelmatig naar de tandarts gaat, fysiotherapie nodig hebt, een bril draagt, of alternatieve geneeswijzen gebruikt. Reken uit of de extra premie opweegt tegen je verwachte zorgkosten.",
  },
  {
    question: "Wat is het verschil tussen natura- en restitutiepolis?",
    answer: "Bij een naturapolis heb je een voorkeur voor zorgverleners waarmee je verzekeraar een contract heeft. Bij een restitutiepolis kun je naar elke zorgverlener en krijg je altijd de volledige vergoeding. Een restitutiepolis is meestal iets duurder.",
  },
  {
    question: "Krijg ik zorgtoeslag?",
    answer: "Zorgtoeslag is een bijdrage van de overheid in je zorgpremie. In 2026 heb je recht op zorgtoeslag als je inkomen niet te hoog is. Voor alleenstaanden geldt een grens van circa €38.000 en voor toeslagpartners circa €48.000. De maximale zorgtoeslag is circa €127 per maand.",
  },
  {
    question: "Kan ik mijn eigen risico gespreid betalen?",
    answer: "Ja, veel zorgverzekeraars bieden de mogelijkheid om je eigen risico gespreid te betalen via een maandelijkse opslag op je premie. Zo voorkom je een onverwacht hoge rekening wanneer je zorgkosten maakt.",
  },
];

export const FAQ_AUTOVERZEKERING = [
  {
    question: "Wat is het verschil tussen WA, WA+ en allrisk?",
    answer: "WA (Wettelijke Aansprakelijkheid) dekt alleen schade die jij aan anderen veroorzaakt en is verplicht. WA+ (beperkt casco) dekt daarnaast schade aan je eigen auto door diefstal, brand, storm en ruitbreuk. Allrisk dekt ook schade aan je eigen auto bij een aanrijding, inclusief eigen schuld.",
  },
  {
    question: "Hoe werken schadevrije jaren?",
    answer: "Voor elk jaar dat je geen schade claimt, bouw je een schadevrij jaar op. Hoe meer schadevrije jaren, hoe hoger je korting op de premie. Je kunt maximaal circa 80% korting krijgen bij 15+ schadevrije jaren. Bij een schademelding verlies je meestal 5 schadevrije jaren.",
  },
  {
    question: "Is een allrisk verzekering de moeite waard?",
    answer: "Voor nieuwe of dure auto's (jonger dan 5 jaar of meer dan €15.000 waard) is allrisk vaak verstandig. Voor oudere auto's met lagere waarde is WA of WA+ voordeliger. De vuistregel: als de premie meer dan 10% van de dagwaarde is, is allrisk te duur.",
  },
  {
    question: "Wat gebeurt er bij een schademelding?",
    answer: "Bij schade meld je dit bij je verzekeraar. Bij WA-schade vergoedt jouw verzekeraar de schade aan de tegenpartij. Bij casco-schade krijg je ook je eigen schade vergoed, minus je eigen risico. Een schademelding kan leiden tot verlies van schadevrije jaren.",
  },
  {
    question: "Kan ik mijn autoverzekering tussentijds opzeggen?",
    answer: "Je autoverzekering kun je opzeggen met een opzegtermijn van 1 maand. Na het eerste jaar kun je dagelijks opzeggen. Bij een premiewijziging of dekkingswijziging heb je een speciaal opzegrecht van 1 maand na de wijzigingsdatum.",
  },
];

export const FAQ_WOONVERZEKERINGEN = [
  {
    question: "Wat is het verschil tussen inboedel- en opstalverzekering?",
    answer: "De inboedelverzekering dekt je bezittingen: meubels, kleding, elektronica, etc. De opstalverzekering dekt het gebouw zelf: muren, dak, vloer, keuken, badkamer en vaste installaties. Als huiseigenaar heb je beide nodig; als huurder alleen een inboedelverzekering.",
  },
  {
    question: "Hoe bepaal ik mijn inboedelwaarde?",
    answer: "Tel de nieuwwaarde van al je bezittingen bij elkaar op: meubels, kleding, elektronica, keukenapparatuur, sportspullen, etc. De meeste mensen onderschatten hun inboedelwaarde. Een gemiddeld huishouden heeft al snel €50.000 tot €100.000 aan inboedel.",
  },
  {
    question: "Wat is de herbouwwaarde van mijn woning?",
    answer: "De herbouwwaarde is het bedrag dat nodig is om je woning opnieuw te bouwen. Dit is niet hetzelfde als de marktwaarde of WOZ-waarde. Je kunt de herbouwwaarde laten berekenen via de Herbouwwaardemeter van het Verbond van Verzekeraars.",
  },
  {
    question: "Dekt mijn inboedelverzekering ook diefstal buitenshuis?",
    answer: "De meeste inboedelverzekeringen dekken ook diefstal buitenshuis, zoals uit je auto of op vakantie. De dekking is vaak beperkt tot een percentage van de verzekerde som. Check je polisvoorwaarden voor de exacte dekking en eventuele uitsluitingen.",
  },
  {
    question: "Is een glasverzekering nodig als ik een opstalverzekering heb?",
    answer: "Standaard opstalverzekeringen dekken glasschade vaak niet of beperkt. Een aparte glasverzekering kost slechts een paar euro per maand en dekt alle glasbreuk, zonder eigen risico. Vooral handig bij grote raampartijen of dubbelglas.",
  },
];

export const FAQ_AANSPRAKELIJKHEID = [
  {
    question: "Wat dekt een aansprakelijkheidsverzekering?",
    answer: "Een AVP dekt schade die jij of je gezinsleden per ongeluk aan anderen of hun spullen veroorzaken. Denk aan: je kind trapt een bal door het raam van de buren, je morst rode wijn op iemands bank, of je hond bijt een voorbijganger.",
  },
  {
    question: "Hoeveel kost een aansprakelijkheidsverzekering?",
    answer: "Een AVP kost gemiddeld €3 tot €6 per maand en dekt het hele gezin. Het verzekerd bedrag is meestal €1.250.000 tot €2.500.000. Voor de kleine premie biedt het een enorme financiële bescherming.",
  },
  {
    question: "Wie zijn er meeverzekerd op mijn AVP?",
    answer: "Op de meeste AVP's zijn meeverzekerd: je partner, thuiswonende kinderen (ook als ze studeren en uitwonend zijn tot een bepaalde leeftijd), en huisdieren. Inwonende ouders kunnen soms ook worden meeverzekerd.",
  },
  {
    question: "Wat wordt niet gedekt door een AVP?",
    answer: "Niet gedekt zijn onder meer: schade met opzet, schade door motorvoertuigen (valt onder autoverzekering), schade aan geleende/gehuurde spullen (soms wel met uitbreidingsdekking), en schade door je beroep of bedrijf.",
  },
];

export const FAQ_REISVERZEKERING = [
  {
    question: "Heb ik een reisverzekering nodig?",
    answer: "Binnen Europa heb je met je Europese zorgverzekeringskaart (EHIC) al basisdekking voor zorgkosten. Een reisverzekering is vooral belangrijk voor: annulering, bagage, repatriëring, en aanvullende medische kosten. Buiten Europa is een reisverzekering sterk aan te raden.",
  },
  {
    question: "Wat is het verschil tussen een doorlopende en kortlopende reisverzekering?",
    answer: "Een doorlopende reisverzekering dekt al je reizen gedurende het hele jaar. Een kortlopende verzekering geldt alleen voor één specifieke reis. Als je meer dan 2-3 keer per jaar op vakantie gaat, is een doorlopende verzekering voordeliger.",
  },
  {
    question: "Dekt mijn reisverzekering ook wintersport?",
    answer: "Niet standaard. Voor wintersport heb je meestal een aanvullende winterportdekking nodig. Deze dekt onder meer bergredding, skischade, en specifieke wintersportongevallen. Check altijd of wintersport is inbegrepen of apart moet worden bijverzekerd.",
  },
  {
    question: "Wat moet ik doen bij schade of een noodgeval op reis?",
    answer: "Neem zo snel mogelijk contact op met de alarmcentrale van je verzekeraar (24/7 bereikbaar). Bewaar alle bonnen en bewijsstukken. Doe bij diefstal altijd aangifte bij de lokale politie. Meld schade binnen 3 dagen na thuiskomst bij je verzekeraar.",
  },
];
