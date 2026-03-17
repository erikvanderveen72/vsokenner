// Voorbeeld vaststellingsovereenkomsten — 3 situaties
// Bron: Gebaseerd op gangbare VSO-modellen bij arbeidsrechtadvocaten

export interface VSOVoorbeeld {
  id: string;
  titel: string;
  situatie: string;
  beschrijving: string;
  kleur: string;
  iconColor: string;
  kenmerken: string[];
  artikelen: VSOArtikel[];
}

export interface VSOArtikel {
  nummer: number;
  titel: string;
  inhoud: string;
  toelichting?: string;
}

export const vsoVoorbeelden: VSOVoorbeeld[] = [
  {
    id: "reorganisatie",
    titel: "VSO bij reorganisatie",
    situatie: "Bedrijfseconomische redenen",
    beschrijving:
      "Dit voorbeeld is van toepassing wanneer je functie vervalt door een reorganisatie, krimp of herstructurering. De werkgever neemt het initiatief en er is vaak een sociaal plan of afvloeiingsregeling.",
    kleur: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-700",
    kenmerken: [
      "Initiatief ligt bij werkgever",
      "Vaak sociaal plan van toepassing",
      "Goede WW-rechten mits correct opgesteld",
      "Transitievergoeding is standaard",
      "Vrijstelling van werk gebruikelijk",
    ],
    artikelen: [
      {
        nummer: 1,
        titel: "Beëindiging dienstverband",
        inhoud:
          "De arbeidsovereenkomst tussen werkgever (hierna: 'Werkgever') en werknemer (hierna: 'Werknemer') wordt met wederzijds goedvinden beëindigd per [einddatum], met inachtneming van de geldende opzegtermijn. Het initiatief tot beëindiging is genomen door Werkgever wegens bedrijfseconomische redenen, te weten een reorganisatie. Er is geen sprake van een dringende reden in de zin van artikel 7:678 BW.",
        toelichting:
          "Het is essentieel dat het initiatief bij de werkgever ligt en dat er geen dringende reden wordt genoemd. Dit beschermt je WW-rechten.",
      },
      {
        nummer: 2,
        titel: "Transitievergoeding",
        inhoud:
          "Werkgever betaalt aan Werknemer een transitievergoeding conform artikel 7:673 BW ter hoogte van €[bedrag] bruto. Dit bedrag wordt uiterlijk betaald bij de eindafrekening op de laatste werkdag, dan wel binnen één maand na de einddatum.",
        toelichting:
          "De wettelijke transitievergoeding bedraagt 1/3 bruto maandsalaris per dienstjaar. Bij een reorganisatie wordt vaak minimaal het wettelijk bedrag betaald, soms meer als er een sociaal plan geldt.",
      },
      {
        nummer: 3,
        titel: "Eindafrekening",
        inhoud:
          "Bij het einde van het dienstverband vindt een eindafrekening plaats van het salaris, opgebouwde maar niet genoten vakantiedagen, vakantietoeslag en overige emolumenten. De eindafrekening wordt uiterlijk binnen één maand na de einddatum voldaan.",
        toelichting:
          "Controleer altijd je saldo vakantiedagen en openstaand vakantiegeld. Dit moet volledig worden uitbetaald.",
      },
      {
        nummer: 4,
        titel: "Vrijstelling van werk",
        inhoud:
          "Werknemer wordt met ingang van [datum] vrijgesteld van het verrichten van werkzaamheden met behoud van het volledige salaris en alle emolumenten tot de einddatum. Werknemer mag deze periode gebruiken voor het zoeken naar ander werk.",
        toelichting:
          "Vrijstelling van werk is gebruikelijk bij een reorganisatie. Dit geeft je de tijd om nieuw werk te zoeken terwijl je salaris doorloopt.",
      },
      {
        nummer: 5,
        titel: "Getuigschrift",
        inhoud:
          "Werkgever verstrekt Werknemer uiterlijk op de einddatum een positief getuigschrift, waarin de functie, werkzaamheden en duur van het dienstverband correct worden weergegeven.",
        toelichting:
          "Een positief getuigschrift helpt bij het vinden van nieuw werk. Spreek eventueel de formulering vooraf af.",
      },
      {
        nummer: 6,
        titel: "Concurrentiebeding",
        inhoud:
          "Het concurrentie- en/of relatiebeding zoals opgenomen in de arbeidsovereenkomst van [datum] komt per de einddatum te vervallen. Werknemer is vrij om bij een willekeurige werkgever in dienst te treden.",
        toelichting:
          "Zorg dat het concurrentiebeding expliciet vervalt. Anders kan het je belemmeren bij het vinden van nieuw werk.",
      },
      {
        nummer: 7,
        titel: "Vergoeding juridische kosten",
        inhoud:
          "Werkgever vergoedt de kosten van juridisch advies van Werknemer tot een maximum van €1.250,- exclusief btw. Werknemer stuurt de factuur van de advocaat rechtstreeks naar Werkgever.",
        toelichting:
          "Het is gangbaar dat de werkgever bijdraagt aan de juridische kosten, meestal €750 tot €1.500 exclusief btw.",
      },
      {
        nummer: 8,
        titel: "Geheimhouding",
        inhoud:
          "Partijen verplichten zich tot geheimhouding over de inhoud van deze overeenkomst, met uitzondering van informatie die moet worden gedeeld met adviseurs, het UWV of de Belastingdienst.",
      },
      {
        nummer: 9,
        titel: "Bedenktijd",
        inhoud:
          "Werknemer heeft het recht om deze overeenkomst binnen 14 dagen na ondertekening zonder opgaaf van redenen te ontbinden door middel van een schriftelijke verklaring aan Werkgever, conform artikel 7:670b lid 2 BW.",
        toelichting:
          "De bedenktijd van 14 dagen is wettelijk verplicht. Als dit artikel ontbreekt in de VSO, wordt de termijn automatisch 21 dagen.",
      },
      {
        nummer: 10,
        titel: "Finale kwijting",
        inhoud:
          "Na volledige uitvoering van deze overeenkomst verlenen partijen elkaar over en weer finale kwijting ter zake van de arbeidsovereenkomst en de beëindiging daarvan, behoudens de uit deze overeenkomst voortvloeiende verplichtingen.",
        toelichting:
          "Finale kwijting betekent dat je na afhandeling niets meer van elkaar te vorderen hebt. Let op dat alle afspraken goed zijn vastgelegd vóór je tekent.",
      },
    ],
  },
  {
    id: "verschil-van-inzicht",
    titel: "VSO bij verschil van inzicht",
    situatie: "Verstoorde arbeidsrelatie",
    beschrijving:
      "Dit voorbeeld is van toepassing wanneer werkgever en werknemer niet meer goed kunnen samenwerken. Dit is de meest voorkomende reden voor een VSO. Er is vaak meer onderhandelingsruimte dan bij een reorganisatie.",
    kleur: "from-sky-50 to-sky-100",
    iconColor: "text-sky-700",
    kenmerken: [
      "Initiatief meestal bij werkgever",
      "Meer onderhandelingsruimte",
      "Vaak hogere vergoeding mogelijk",
      "Concurrentiebeding bespreekbaar",
      "Mediation soms geprobeerd",
    ],
    artikelen: [
      {
        nummer: 1,
        titel: "Beëindiging dienstverband",
        inhoud:
          "De arbeidsovereenkomst tussen Werkgever en Werknemer wordt met wederzijds goedvinden beëindigd per [einddatum], met inachtneming van de geldende opzegtermijn. Het initiatief tot beëindiging is genomen door Werkgever wegens een verschil van inzicht over de wijze waarop de functie dient te worden ingevuld. Er is uitdrukkelijk geen sprake van een dringende reden in de zin van artikel 7:678 BW, noch van verwijtbaar handelen van Werknemer.",
        toelichting:
          "Bij een verschil van inzicht is het cruciaal dat expliciet wordt vermeld dat er geen verwijtbaar handelen is. Dit beschermt je WW-rechten volledig.",
      },
      {
        nummer: 2,
        titel: "Transitievergoeding",
        inhoud:
          "Werkgever betaalt aan Werknemer een beëindigingsvergoeding ter hoogte van €[bedrag] bruto. Dit bedrag is inclusief de wettelijke transitievergoeding conform artikel 7:673 BW. Betaling vindt plaats uiterlijk bij de eindafrekening.",
        toelichting:
          "Bij een verschil van inzicht kun je vaak meer onderhandelen dan de wettelijke transitievergoeding, omdat de werkgever het risico van een procedure bij de kantonrechter wil vermijden.",
      },
      {
        nummer: 3,
        titel: "Eindafrekening",
        inhoud:
          "Bij het einde van het dienstverband vindt een eindafrekening plaats van het salaris, opgebouwde maar niet genoten vakantiedagen, vakantietoeslag, dertiende maand (pro rata) en eventuele bonusaanspraken. De eindafrekening wordt uiterlijk binnen één maand na de einddatum voldaan.",
        toelichting:
          "Vergeet niet om ook pro rata aanspraken op een dertiende maand of bonus op te nemen als dit in je arbeidsovereenkomst staat.",
      },
      {
        nummer: 4,
        titel: "Vrijstelling van werk",
        inhoud:
          "Werknemer wordt per heden vrijgesteld van het verrichten van werkzaamheden met behoud van het volledige salaris, vakantietoeslag en alle overige emolumenten tot de einddatum.",
        toelichting:
          "Bij een verstoorde arbeidsrelatie is directe vrijstelling gebruikelijk. Gebruik deze tijd voor sollicitaties en oriëntatie op de arbeidsmarkt.",
      },
      {
        nummer: 5,
        titel: "Referenties en getuigschrift",
        inhoud:
          "Werkgever verstrekt Werknemer uiterlijk op de einddatum een positief getuigschrift. Werkgever zal desgevraagd een positieve referentie verstrekken aan potentiële nieuwe werkgevers. De contactpersoon voor referenties is [naam].",
        toelichting:
          "Bij een verschil van inzicht is het extra belangrijk om goede referenties vast te leggen. Spreek een concrete contactpersoon af.",
      },
      {
        nummer: 6,
        titel: "Concurrentie- en relatiebeding",
        inhoud:
          "Het concurrentiebeding en relatiebeding zoals opgenomen in de arbeidsovereenkomst komen per de einddatum volledig te vervallen.",
        toelichting:
          "Een concurrentiebeding kan je ernstig belemmeren bij het vinden van nieuw werk. Zorg dat het volledig vervalt in de VSO.",
      },
      {
        nummer: 7,
        titel: "Outplacement",
        inhoud:
          "Werkgever stelt een outplacementbudget van €[bedrag] exclusief btw beschikbaar. Werknemer mag zelf een outplacementbureau kiezen. Het budget is beschikbaar tot 6 maanden na de einddatum.",
        toelichting:
          "Outplacement kan waardevol zijn bij het vinden van nieuw werk. Het budget is vaak €2.500 tot €5.000 en belastingvrij voor de werknemer.",
      },
      {
        nummer: 8,
        titel: "Vergoeding juridische kosten",
        inhoud:
          "Werkgever vergoedt de kosten van juridisch advies van Werknemer tot een maximum van €1.500,- exclusief btw. De factuur wordt rechtstreeks aan Werkgever gezonden.",
      },
      {
        nummer: 9,
        titel: "Geheimhouding en communicatie",
        inhoud:
          "Partijen zullen zich wederzijds onthouden van negatieve uitlatingen over elkaar. Over de reden van vertrek communiceren partijen dat sprake is van een verschil van inzicht over de toekomstige invulling van de functie. De inhoud van deze overeenkomst is vertrouwelijk.",
        toelichting:
          "Een wederzijdse communicatie-afspraak beschermt je reputatie en voorkomt dat er intern negatief over je wordt gesproken.",
      },
      {
        nummer: 10,
        titel: "Bedenktijd",
        inhoud:
          "Werknemer heeft het recht om deze overeenkomst binnen 14 dagen na ondertekening zonder opgaaf van redenen te ontbinden door middel van een schriftelijke verklaring aan Werkgever, conform artikel 7:670b lid 2 BW.",
      },
      {
        nummer: 11,
        titel: "Finale kwijting",
        inhoud:
          "Na volledige uitvoering van deze overeenkomst verlenen partijen elkaar over en weer finale kwijting ter zake van de arbeidsovereenkomst en de beëindiging daarvan.",
      },
    ],
  },
  {
    id: "disfunctioneren",
    titel: "VSO bij disfunctioneren",
    situatie: "Onvoldoende functioneren",
    beschrijving:
      "Dit voorbeeld is van toepassing wanneer de werkgever vindt dat je niet goed genoeg functioneert. Let extra op: je werkgever moet een verbetertraject hebben doorlopen. Is dat niet gebeurd, dan sta je sterker in de onderhandeling.",
    kleur: "from-amber-50 to-amber-100",
    iconColor: "text-amber-700",
    kenmerken: [
      "Werkgever moet verbetertraject hebben doorlopen",
      "Sterke positie als dossier onvolledig",
      "Onderhandelingsruimte bij gebrekkig dossier",
      "Extra aandacht voor formulering ontslagreden",
      "Referenties extra belangrijk",
    ],
    artikelen: [
      {
        nummer: 1,
        titel: "Beëindiging dienstverband",
        inhoud:
          "De arbeidsovereenkomst tussen Werkgever en Werknemer wordt met wederzijds goedvinden beëindigd per [einddatum], met inachtneming van de geldende opzegtermijn. Het initiatief tot beëindiging is genomen door Werkgever. Partijen zijn van mening dat voortzetting van het dienstverband niet langer zinvol is. Er is geen sprake van een dringende reden in de zin van artikel 7:678 BW, noch van verwijtbaar handelen door Werknemer.",
        toelichting:
          "Heel belangrijk: de VSO mag niet vermelden dat je disfunctioneert of verwijtbaar hebt gehandeld. Formuleer het neutraal als 'voortzetting niet langer zinvol'. Dit beschermt je WW-rechten en je reputatie.",
      },
      {
        nummer: 2,
        titel: "Transitievergoeding",
        inhoud:
          "Werkgever betaalt aan Werknemer een beëindigingsvergoeding ter hoogte van €[bedrag] bruto. Dit bedrag is inclusief de wettelijke transitievergoeding conform artikel 7:673 BW. Betaling vindt plaats uiterlijk bij de eindafrekening.",
        toelichting:
          "Als de werkgever geen volledig verbetertraject heeft doorlopen, sta je sterk om meer dan de wettelijke transitievergoeding te vragen. Een rechter zou het ontslag waarschijnlijk afwijzen.",
      },
      {
        nummer: 3,
        titel: "Eindafrekening",
        inhoud:
          "Bij het einde van het dienstverband vindt een eindafrekening plaats van het salaris, opgebouwde maar niet genoten vakantiedagen, vakantietoeslag en overige emolumenten. De eindafrekening wordt uiterlijk binnen één maand na de einddatum voldaan.",
      },
      {
        nummer: 4,
        titel: "Vrijstelling van werk",
        inhoud:
          "Werknemer wordt met ingang van [datum] vrijgesteld van het verrichten van werkzaamheden met behoud van het volledige salaris en alle emolumenten tot de einddatum.",
      },
      {
        nummer: 5,
        titel: "Scholings- en outplacementbudget",
        inhoud:
          "Werkgever stelt een budget van €[bedrag] exclusief btw beschikbaar voor scholing en/of outplacement, te besteden binnen 12 maanden na de einddatum. Werknemer kiest zelf de opleiding of het bureau.",
        toelichting:
          "Bij disfunctioneren kun je vragen om een scholingsbudget om je vaardigheden te versterken voor een volgende baan. Dit is belastingvrij.",
      },
      {
        nummer: 6,
        titel: "Referenties en getuigschrift",
        inhoud:
          "Werkgever verstrekt Werknemer een neutraal tot positief getuigschrift. Werkgever zal aan derden geen negatieve informatie verstrekken over het functioneren van Werknemer. Referenties worden uitsluitend verstrekt door [naam contactpersoon], die hierover afspraken maakt met Werknemer.",
        toelichting:
          "Bij disfunctioneren is het extra belangrijk om de referenties goed vast te leggen. Spreek een contactpersoon af die positief of neutraal zal refereren.",
      },
      {
        nummer: 7,
        titel: "Concurrentiebeding",
        inhoud:
          "Het concurrentiebeding en/of relatiebeding zoals opgenomen in de arbeidsovereenkomst komen per de einddatum volledig te vervallen.",
      },
      {
        nummer: 8,
        titel: "Vergoeding juridische kosten",
        inhoud:
          "Werkgever vergoedt de kosten van juridisch advies van Werknemer tot een maximum van €1.250,- exclusief btw.",
      },
      {
        nummer: 9,
        titel: "Geheimhouding en communicatie",
        inhoud:
          "Partijen zullen zich onthouden van negatieve uitlatingen over elkaar. Intern wordt gecommuniceerd dat partijen in goed overleg uit elkaar gaan. De inhoud van deze overeenkomst is vertrouwelijk.",
        toelichting:
          "Een geheimhoudingsclausule voorkomt dat je werkgever intern of extern communiceert over eventueel disfunctioneren.",
      },
      {
        nummer: 10,
        titel: "Bedenktijd",
        inhoud:
          "Werknemer heeft het recht om deze overeenkomst binnen 14 dagen na ondertekening zonder opgaaf van redenen te ontbinden door middel van een schriftelijke verklaring aan Werkgever, conform artikel 7:670b lid 2 BW.",
      },
      {
        nummer: 11,
        titel: "Finale kwijting",
        inhoud:
          "Na volledige uitvoering van deze overeenkomst verlenen partijen elkaar over en weer finale kwijting ter zake van de arbeidsovereenkomst en de beëindiging daarvan, behoudens de uit deze overeenkomst voortvloeiende verplichtingen.",
      },
    ],
  },
];

export const FAQ_VOORBEELDEN = [
  {
    question: "Mag ik deze voorbeelden gebruiken voor mijn eigen VSO?",
    answer:
      "Deze voorbeelden zijn bedoeld als referentie en ter informatie. Ze geven je inzicht in wat er in een VSO hoort te staan. Gebruik ze als checklist bij het beoordelen van je eigen VSO, maar kopieer ze niet klakkeloos. Elke situatie is anders en het is altijd verstandig om een arbeidsrechtadvocaat je VSO te laten beoordelen.",
  },
  {
    question: "Welk voorbeeld past bij mijn situatie?",
    answer:
      "Dat hangt af van de reden van je ontslag. Bij een reorganisatie of bedrijfseconomische redenen past het eerste voorbeeld. Bij een verstoorde arbeidsrelatie of meningsverschil het tweede. Bij kritiek op je functioneren het derde. Twijfel je? Gebruik onze gratis adviestool voor persoonlijk advies.",
  },
  {
    question: "Wat als mijn VSO er heel anders uitziet dan deze voorbeelden?",
    answer:
      "Dat hoeft geen probleem te zijn — elke werkgever gebruikt zijn eigen format. Waar het om gaat is dat de belangrijkste elementen erin staan: einddatum met juiste opzegtermijn, transitievergoeding, eindafrekening, bedenktijd, en WW-proof formulering. Ontbreken er onderdelen? Dan is dat een reden om te onderhandelen.",
  },
  {
    question: "Hoeveel transitievergoeding moet er minimaal in mijn VSO staan?",
    answer:
      "De wettelijke transitievergoeding bedraagt 1/3 bruto maandsalaris per dienstjaar (inclusief vakantietoeslag). Dit is het absolute minimum. Bij een verschil van inzicht of disfunctioneren kun je vaak meer onderhandelen. Gebruik onze transitievergoeding-calculator voor een exacte berekening.",
  },
  {
    question: "Moet de bedenktijd in mijn VSO staan?",
    answer:
      "Je hebt altijd recht op 14 dagen bedenktijd, ook als het niet in de VSO staat. Maar als de werkgever het niet vermeldt, wordt de bedenktijd automatisch 21 dagen. Het is dus in het belang van de werkgever om het op te nemen.",
  },
];
