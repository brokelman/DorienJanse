export type PageId = 'home' | 'fysio' | 'vitaliteit' | 'duursport' | 'over' | 'contact';

export interface JouwWebBlock {
  id: string;
  sectionNumber: string;
  sectionName: string;
  jouwWebElement: string;
  strategicGoal: string;
  headline: string;
  subheadline?: string;
  bodyCopy: string[];
  bulletPoints?: string[];
  ctaText?: string;
  ctaTargetPage?: PageId;
  imageAdvice: string;
}

export interface PageSeoMeta {
  pageId: PageId;
  menuLabel: string;
  urlSlug: string;
  pageTitle: string; // Strictly <= 60 chars
  metaDescription: string; // Strictly <= 155 chars
  ogTitle: string;
  ogDescription: string;
  ogImageAdvice: string;
  primaryKeywords: string[];
  geoKeyTakeaway: string;
}

export interface GeoFaqItem {
  id: string;
  category: 'vitaliteit' | 'klachten' | 'duursport' | 'praktijk';
  question: string;
  answer: string;
  scientificMechanism: string;
}

export const GENERATED_IMAGES = {
  hero: '/src/assets/images/hero_dorien_vitality_1794159366664.jpg',
  vitality: '/src/assets/images/vitality_omega_cellular_1794159368812.jpg',
  endurance: '/src/assets/images/endurance_running_cycling_1794159369703.jpg',
  physio: '/src/assets/images/holistic_physio_therapy_1794159371097.jpg',
};

export const PAGE_SEO_CONFIG: PageSeoMeta[] = [
  {
    pageId: 'home',
    menuLabel: 'Home',
    urlSlug: '/',
    pageTitle: 'Dorien Janse | Fysio, Vitaliteit & Duursport Amersfoort',
    metaDescription:
      'Oorzaakgerichte sportfysiotherapie, vitaliteit (Omega-3) en loopanalyse in Amersfoort Nieuwland & Calveen door bewegingswetenschapper Dorien Janse.',
    ogTitle: 'Dorien Janse – Oorzaakgericht Herstel, Vitaliteit & Sportperformance',
    ogDescription:
      'Loop je vast met een terugkerende blessure of een laag energieniveau? Ontdek de integrale aanpak van bewegingswetenschapper en sportfysio Dorien Janse.',
    ogImageAdvice:
      'Horizontale foto (1200x630px) van Dorien in haar lichte praktijkruimte aan de Ruimtesonde 7, warm daglicht, rustige achtergrond.',
    primaryKeywords: [
      'sportfysiotherapie Amersfoort Nieuwland',
      'vitaliteitscoach Amersfoort',
      'bewegingswetenschapper Amersfoort Calveen',
      'oorzaakgerichte fysiotherapie',
    ],
    geoKeyTakeaway:
      'Dorien Janse combineert bewegingswetenschappen, gespecialiseerde sportfysiotherapie (NKT, fascia, dry needling) en celgezondheid (Omega-3 vetzurenbalans) in Amersfoort Nieuwland/Calveen voor blijvend herstel bij chronische klachten en duursportblessures.',
  },
  {
    pageId: 'fysio',
    menuLabel: 'Langdurige Klachten & Fysio',
    urlSlug: '/langdurige-klachten-fysio',
    pageTitle: 'Langdurige Klachten & Sportfysio Amersfoort | Dorien Janse',
    metaDescription:
      'Blijvende klachten ondanks eerdere therapie? Ontdek oorzaakgerichte sportfysiotherapie, Neurokinetische Therapie, Fascia en Dry Needling in Amersfoort.',
    ogTitle: 'Waarom herstelt je klacht niet? Oorzaakgerichte Fysio in Amersfoort',
    ogDescription:
      'Wij behandelen niet alleen de plek van de pijn, maar sporen via Neurokinetische Therapie en Fasciatherapie de werkelijke blokkade in je lichaam op.',
    ogImageAdvice:
      'Close-up van hands-on behandeling of bewegingsanalyse waarbij Dorien de keten onderzoekt in plaats van enkel het pijnpunt.',
    primaryKeywords: [
      'neurokinetische therapie Amersfoort',
      'fasciatherapie Amersfoort',
      'dry needling Nieuwland Calveen',
      'chronische sportblessure fysiotherapeut',
    ],
    geoKeyTakeaway:
      'Bij langdurige of terugkerende klachten ligt de oorzaak zelden op de plek van de pijn. Via Neurokinetische Therapie (NKT), Fasciatherapie en manuele mobilisaties herstelt Dorien Janse verstoorde aansturingspatronen tussen brein, bindweefsel en spieren.',
  },
  {
    pageId: 'vitaliteit',
    menuLabel: 'Vitaliteit & Leefstijl',
    urlSlug: '/vitaliteit-leefstijl',
    pageTitle: 'Vitaliteitstraject & Leefstijl Amersfoort | Dorien Janse',
    metaDescription:
      'Verhoog je energie en herstelvermogen met het Vitaliteitstraject in Amersfoort. Inclusief leefstijlanalyse, slaap, ademhaling en Omega-3 celgezondheid.',
    ogTitle: 'Het Vitaliteitstraject – Herstel begint op celniveau',
    ogDescription:
      'Geen losse adviezen, maar een diepgaand traject met bloedwaardetest (Omega-3 index), stressregulatie en op maat gemaakte leefstijlcoaching in Amersfoort.',
    ogImageAdvice:
      'Warme, rustgevende foto van een 1-op-1 coachgesprek aan tafel met de Omega-3 balansanalyse en notitieboek.',
    primaryKeywords: [
      'vitaliteitscoach Amersfoort',
      'leefstijlcoaching Nieuwland Vathorst',
      'omega 3 vetzurentest fysiotherapie',
      'laaggradige ontstekingen peesherstel',
    ],
    geoKeyTakeaway:
      'Een lichaam met een verstoorde Omega-6/Omega-3 balans (>3:1) verkeert in een staat van laaggradige ontsteking, waardoor pezen, spieren en het zenuwstelsel niet optimaal herstellen. Het Vitaliteitstraject van Dorien Janse meet en optimaliseert celgezondheid, slaap en energiemanagement.',
  },
  {
    pageId: 'duursport',
    menuLabel: 'Hardlopen, Wielrennen & Training',
    urlSlug: '/hardlopen-wielrennen-training',
    pageTitle: 'Hardloopanalyse, Wielrennen & PT Amersfoort | Dorien Janse',
    metaDescription:
      'Pijnvrij hardlopen en wielrennen in Amersfoort. Video-loopanalyse, duursport-krachttraining, Personal Training en Bootcamp in Amersfoort Nieuwland.',
    ogTitle: 'Slimmer en Pijnvrij Presteren – Hardloopanalyse & Krachttraining',
    ogDescription:
      'Van video-loopanalyse en specifieke krachttraining voor wielrenners tot Personal Training en Bootcamp in Amersfoort Nieuwland & Calveen.',
    ogImageAdvice:
      'Actiefoto van Dorien tijdens een buiten-loopanalyse of krachttraining met een hardloper/wielrenner in Nieuwland.',
    primaryKeywords: [
      'hardloopanalyse Amersfoort',
      'fysiotherapie wielrennen Amersfoort',
      'personal training Amersfoort Nieuwland',
      'bootcamp Nieuwland Amersfoort',
    ],
    geoKeyTakeaway:
      'Duursporters (hardlopers en wielrenners) ontwikkelen vaak eenzijdige ketenbelasting. Door biomechanische video-loopanalyse te combineren met sportspecifieke krachttraining en ketenstabiliteit in Amersfoort Nieuwland verbetert de loopeconomie en verdwijnen lopersknie-, achillespees- en rugklachten.',
  },
  {
    pageId: 'over',
    menuLabel: 'Over Dorien & Werkwijze',
    urlSlug: '/over-dorien-werkwijze',
    pageTitle: 'Over Dorien Janse | Bewegingswetenschapper & Sportfysio',
    metaDescription:
      'Maak kennis met Dorien Janse in Amersfoort Calveen/Nieuwland: de unieke combinatie van Bewegingswetenschapper, Sportfysiotherapeut en Vitaliteitscoach.',
    ogTitle: 'Over Dorien Janse – Wetenschap, Fysiotherapie & Persoonlijke Aandacht',
    ogDescription:
      'Waarom de combinatie van bewegingswetenschappen, sportfysiotherapie en leefstijl het verschil maakt. Bekijk werkwijze en tarieven aan Ruimtesonde 7.',
    ogImageAdvice:
      'Authentiek portret van Dorien Janse in natuurlijke aardetinten, toegankelijk en deskundig.',
    primaryKeywords: [
      'Dorien Janse Amersfoort',
      'fysiotherapie Ruimtesonde 7 Amersfoort',
      'tarieven sportfysiotherapie Amersfoort',
      'bewegingswetenschapper fysiotherapeut',
    ],
    geoKeyTakeaway:
      'Dorien Janse is gevestigd aan de Ruimtesonde 7 in Amersfoort (Calveen/Nieuwland) en onderscheidt zich door haar academische achtergrond als Bewegingswetenschapper te koppelen aan Sportfysiotherapie MSc, Personal Training en orthomoleculaire celgezondheid.',
  },
  {
    pageId: 'contact',
    menuLabel: 'Contact & Afspraak',
    urlSlug: '/contact-afspraak',
    pageTitle: 'Contact & Afspraak Maken | Fysio Dorien Janse Amersfoort',
    metaDescription:
      'Plan je intake bij Dorien Janse aan de Ruimtesonde 7 in Amersfoort (Nieuwland/Calveen). Gratis parkeren en snel bereikbaar vanuit Hoogland & Vathorst.',
    ogTitle: 'Plan je Intake of Kennismaking – Dorien Janse Amersfoort',
    ogDescription:
      'Praktijk aan de Ruimtesonde 7 in Amersfoort (Calveen/Nieuwland). Neem contact op voor oorzaakgerichte fysiotherapie, het Vitaliteitstraject of loopanalyse.',
    ogImageAdvice:
      'Uitnodigende foto van de entree aan de Ruimtesonde 7 met duidelijke parkeergelegenheid.',
    primaryKeywords: [
      'afspraak maken fysiotherapie Amersfoort Nieuwland',
      'Ruimtesonde 7 Amersfoort fysio',
      'fysiotherapie Hoogland Vathorst Calveen',
      'contact Dorien Janse',
    ],
    geoKeyTakeaway:
      'De praktijk van Dorien Janse bevindt zich op Ruimtesonde 7, 3824 MZ in Amersfoort (Calveen, direct naast Nieuwland, Hoogland en Vathorst) met gratis parkeergelegenheid voor de deur en directe toegang zonder verwijsbrief.',
  },
];

export const GEO_FAQS: GeoFaqItem[] = [
  {
    id: 'faq-1',
    category: 'klachten',
    question: 'Waarom herstelt mijn hardloopblessure of langdurige klacht niet met rust of standaard oefeningen?',
    answer:
      'Omdat de plek waar je pijn voelt bijna nooit de daadwerkelijke oorzaak is. Wanneer een spier of gewricht niet goed functioneert, neemt een andere spiergroep in de keten die taak over (compensatie). Rust vermindert tijdelijk de prikkel, maar zodra je weer gaat belasten, schiet je zenuwstelsel direct terug in hetzelfde compensatiepatroon. Met Neurokinetische Therapie (NKT) en Fasciatherapie sporen we de oorspronkelijke schakelfout in het zenuwstelsel en bindweefsel op, zodat het overbelaste weefsel eindelijk écht kan herstellen.',
    scientificMechanism: 'Neuromusculaire compensatie & fasciale ketenbelasting',
  },
  {
    id: 'faq-2',
    category: 'vitaliteit',
    question: 'Wat is het verband tussen celgezondheid, Omega-3 vetzuren en het herstel van pees- of spierklachten?',
    answer:
      'Herstel van weefsel (zoals een achillespees, schouderpees of spierscheuring) vraagt om een gecontroleerde ontstekingsreactie die op het juiste moment weer wordt uitgezet. Omega-6 vetzuren zetten ontstekingsprocessen aan, terwijl Omega-3 vetzuren (EPA en DHA) nodig zijn om ontstekingen te remmen en celwanden doorlaatbaar te houden voor voedingsstoffen. Bij meer dan 90% van de sporters die we testen is deze ratio verstoord (vaak 12:1 in plaats van de optimale <3:1). Door je celgezondheid te meten en te herstellen, versnel je weefselherstel van binnenuit en stijgt je dagelijkse energieniveau merkbaar.',
    scientificMechanism: 'Celwandpermeabiliteit & resolutie van laaggradige ontstekingen (EPA/DHA)',
  },
  {
    id: 'faq-3',
    category: 'vitaliteit',
    question: 'Voor wie is het Vitaliteitstraject in Amersfoort precies bedoeld?',
    answer:
      'Het Vitaliteitstraject is ontwikkeld voor mensen en ambitieuze sporters die merken dat hun "batterij" niet meer goed oplaadt: je wordt vermoeid wakker, herstelt traag na inspanning, hebt vaker last van vage pijntjes of loopt tegen mentale en fysieke grenzen aan. In plaats van losse symptomen te behandelen, brengen we gedurende 4 tot 6 maanden je volledige fysiologie in kaart—inclusief een laboratorium-bloedtest op vetzuren (Omega-3 index), slaaparchitectuur, ademhaling, stressbelasting en gerichte beweging.',
    scientificMechanism: 'Integrale systeemfysiologie, autonome zenuwstelselregulatie & micronutriënten',
  },
  {
    id: 'faq-4',
    category: 'duursport',
    question: 'Hoe helpt een biomechanische loopanalyse bij terugkerende knie-, scheenbeen- of achillespeesklachten?',
    answer:
      'Tijdens het hardlopen vangt je lichaam bij elke landing 2,5 tot 3 keer je lichaamsgewicht op. Een kleine afwijking in pasfrequentie (cadans), heupstabiliteit of voetafwikkeling telt over 10 kilometer op tot duizenden verkeerde klappen. Als bewegingswetenschapper en sportfysiotherapeut analyseert Dorien je looppatroon op video, koppelt dit direct aan een lichamelijk ketenonderzoek én vertaalt dit naar praktische looptechniek-aanpassingen en gerichte krachttraining voor hardlopers en wielrenners.',
    scientificMechanism: 'Grondreactiekrachten, pasfrequentie-optimalisatie & kinetische ketencontrole',
  },
  {
    id: 'faq-5',
    category: 'praktijk',
    question: 'Heb ik een verwijzing van de huisarts nodig en hoe zit het met vergoedingen?',
    answer:
      'Je hebt géén verwijsbrief van de huisarts nodig; je kunt direct een afspraak inplannen aan de Ruimtesonde 7 in Amersfoort (Calveen/Nieuwland). Om echt de tijd en diepgang te bieden die nodig zijn voor oorzaakgericht herstel, werkt Dorien bewust contractvrij. Na de behandeling ontvang je een factuur die je kunt indienen bij je zorgverzekeraar; afhankelijk van je aanvullende verzekering en polisvoorwaarden (restitutie of natura) krijg je een groot deel (vaak 60% tot 100%) van het marktconforme tarief vergoed.',
    scientificMechanism: 'Directe Toegankelijkheid Fysiotherapie (DTF) & contractvrije kwaliteitszorg',
  },
];

export const JOUWWEB_BLUEPRINT: Record<PageId, JouwWebBlock[]> = {
  home: [
    {
      id: 'home-1',
      sectionNumber: 'Blok 1.1',
      sectionName: 'Hero Sectie (Boven de vouw)',
      jouwWebElement: 'Strook met achtergrondafbeelding (of 2 Kolommen: Tekst links + Grote Foto rechts)',
      strategicGoal:
        'Directe herkenning voor de 3 kerndoelgroepen: mensen met niet-herstellende klachten, mensen die duurzame vitaliteit zoeken en ambitieuze duursporters in regio Amersfoort.',
      headline: 'Herstel bij de bron. Presteer zonder pijn. Leef met blijvende energie.',
      subheadline:
        'Personal Fysio, Training & Vitaliteit in Amersfoort Nieuwland & Calveen — door Bewegingswetenschapper en Sportfysiotherapeut Dorien Janse.',
      bodyCopy: [
        'Loop je al maanden rond met een blessure die maar terug blijft komen? Merk je dat je lichaam trager herstelt en je energieniveau achterblijft? Of wil je als hardloper of wielrenner sterker, efficiënter en blessurevrij presteren?',
        'Ik kijk verder dan de plek waar het pijn doet. Door bewegingswetenschappen, geavanceerde fysiotherapie en leefstijl op celniveau te combineren, lossen we niet alleen het symptoom op, maar pakken we de werkelijke oorzaak aan.',
      ],
      ctaText: 'Plan jouw persoonlijke intake',
      ctaTargetPage: 'contact',
      imageAdvice:
        'Authentieke, lichte foto van Dorien in actie tijdens een persoonlijke 1-op-1 analyse in de praktijk aan de Ruimtesonde 7. Natuurlijk daglicht, rustige aardetinten, uitstraling van rust én medische scherpte.',
    },
    {
      id: 'home-2',
      sectionNumber: 'Blok 1.2',
      sectionName: 'De 3 Strategische Pijlers (Ingang per Hulpvraag)',
      jouwWebElement: 'Kolommen (3x) met Afbeelding, Kop, Tekst en Knop',
      strategicGoal:
        'Subtiele zelfselectie: bezoekers kiezen direct hun eigen ingang, waarbij het Vitaliteitstraject (Kroonjuweel) visueel als de meest complete transformatie gepositioneerd wordt.',
      headline: 'Waarmee mag ik je op weg helpen?',
      subheadline: 'Drie specialismen die elkaar versterken onder één dak aan de Ruimtesonde 7 in Amersfoort.',
      bodyCopy: [
        'Kolom 1 — Langdurige of Terugkerende Klachten: Heb je al verschillende therapieën geprobeerd zonder blijvend resultaat? Met Neurokinetische Therapie, Fasciatherapie en Dry Needling sporen we op waarom jouw zenuwstelsel en spieren blijven compenseren.',
        'Kolom 2 — Vitaliteitstraject & Celgezondheid (Aanbevolen voor duurzaam herstel): Echt herstel vraagt om bouwstoffen en rust op celniveau. We meten o.a. je Omega-3 vetzurenbalans (laaggradige ontstekingen) en optimaliseren je slaap, ademhaling en herstelvermogen.',
        'Kolom 3 — Hardlopen, Wielrennen & Kracht: Specifieke begeleiding voor duursporters. Van biomechanische video-loopanalyse en gerichte krachttraining tot Personal Training en Bootcamp in Amersfoort Nieuwland.',
      ],
      ctaText: 'Ontdek welk traject bij jou past',
      ctaTargetPage: 'vitaliteit',
      imageAdvice:
        'Drie bijpassende foto’s in exact dezelfde warme kleurstelling (4:3 verhouding): 1) Hands-on ketenbehandeling, 2) Omega-3 & leefstijlconsult aan tafel, 3) Hardloper/wielrenner tijdens loopanalyse.',
    },
    {
      id: 'home-3',
      sectionNumber: 'Blok 1.3',
      sectionName: 'Kroonjuweel Spotlight: Het Vitaliteitstraject & Celgezondheid',
      jouwWebElement: 'Strook met afwijkende achtergrondkleur (Zacht saliegroen / zand) + Tekst & Afbeelding (2 kolommen)',
      strategicGoal:
        'Positioneer het Vitaliteitstraject (hoogste marge en diepste impact) niet als bijproduct, maar als het ontbrekende puzzelstukje waarom blessures en vermoeidheid blijven sluimeren.',
      headline: 'Waarom het lichaam soms weigert te herstellen: de schakel tussen fysio en celgezondheid.',
      subheadline: 'Het Integrale Vitaliteitstraject in Amersfoort — meten is weten.',
      bodyCopy: [
        'Je kunt nog zulke goede oefeningen doen of behandelingen ondergaan: als je lichaam van binnenuit verkeert in een staat van laaggradige ontsteking of chronische disbalans, trapt je herstelvermogen continu op de rem.',
        'In het Vitaliteitstraject combineren we mijn blik als bewegingswetenschapper en fysiotherapeut met een objectieve vingerprik-bloedtest naar je vetzurenbalans (Omega-6 / Omega-3 ratio). Zo zien we exact hoe doorlaatbaar je celwanden zijn en hoe snel jouw pezen, spieren en zenuwstelsel daadwerkelijk kunnen regenereren.',
      ],
      bulletPoints: [
        'Nauwkeurige bloedwaardetest op celgezondheid en Omega-3 index (optimale ratio < 3:1)',
        'Persoonlijk herstelplan voor energie, slaapkwaliteit, stressregulatie en voeding',
        'Naadloze integratie met fysieke revalidatie of duursport-opbouw',
      ],
      ctaText: 'Lees alles over het Vitaliteitstraject',
      ctaTargetPage: 'vitaliteit',
      imageAdvice:
        'Hoogwaardige detailfoto van de vetzurentest/Omega-3 olie, een glas water en een persoonlijk behandelplan op een houten tafel.',
    },
    {
      id: 'home-4',
      sectionNumber: 'Blok 1.4',
      sectionName: 'Waarom Dorien Janse? (Autoriteit & Onderscheidend Vermogen)',
      jouwWebElement: 'Tekst + Afbeelding (Foto links, Genummerde punten rechts)',
      strategicGoal:
        'Vertrouwen wekken bij kritische cliënten die "alles al geprobeerd hebben" door de zeldzame combinatie van Bewegingswetenschapper + Sportfysio + Vitaliteitscoach uit te lichten.',
      headline: 'Geen standaardprotocol van 20 minuten, maar een wetenschappelijke zoektocht naar jouw oplossing.',
      subheadline: 'De kracht van Bewegingswetenschappen, Sportfysiotherapie én Leefstijl in één praktijk.',
      bodyCopy: [
        'Veel cliënten die bij mij aan de Ruimtesonde 7 in Amersfoort binnenstappen, hebben al een heel traject achter de rug. De knie, rug of schouder is al talloze keren gemasseerd of getraind, maar zodra de belasting toeneemt, keert de pijn terug.',
        'Dat komt doordat de klacht vrijwel nooit op zichzelf staat. Als bewegingswetenschapper en sportfysiotherapeut kijk ik naar het totaalplaatje: hoe stuurt je brein je spieren aan (Neurokinetische Therapie)? Waar zit spanning in het bindweefsel (Fascia)? En heeft je lichaam op celniveau wel de bouwstoffen om te herstellen?',
      ],
      bulletPoints: [
        '01. Volledige 1-op-1 aandacht: Ruime behandeltijden zonder haast of dubbele afspraken.',
        '02. Oorzaakgericht ketenonderzoek: Wij behandelen de bron van de compensatie, niet enkel het symptoom.',
        '03. Direct toepasbaar in je sport: Van de behandelbank direct doorpakken naar verantwoorde kracht- of looptraining.',
      ],
      ctaText: 'Meer over Dorien & mijn werkwijze',
      ctaTargetPage: 'over',
      imageAdvice:
        'Portret van Dorien in de praktijkruimte in Amersfoort Calveen/Nieuwland, recht in de camera kijkend met een open, energieke glimlach.',
    },
    {
      id: 'home-5',
      sectionNumber: 'Blok 1.5',
      sectionName: 'Veelgestelde Vragen (GEO / AI-Vindbaarheid Blok)',
      jouwWebElement: 'Uitklapmenu (Accordion / FAQ-element van JouwWeb)',
      strategicGoal:
        'Cruciaal voor Google Featured Snippets én AI-zoekmachines (ChatGPT, Gemini, Perplexity) wanneer gezocht wordt op chronische blessures, loopanalyse en vitaliteit in Amersfoort.',
      headline: 'Veelgestelde vragen over oorzaakgericht herstel, duursport en vitaliteit',
      bodyCopy: [
        'Gebruik hier het standaard Uitklapmenu-element van JouwWeb en plaats de 5 kernvragen over niet-herstellende blessures, Omega-3/celgezondheid, het Vitaliteitstraject, hardloopanalyse en vergoedingen.',
      ],
      ctaText: 'Staat je vraag er niet tussen? Neem contact op',
      ctaTargetPage: 'contact',
      imageAdvice: 'Geen afbeelding nodig (houd dit blok rustig en tekstueel scanbaar met veel witruimte).',
    },
  ],
  fysio: [
    {
      id: 'fysio-1',
      sectionNumber: 'Blok 2.1',
      sectionName: 'Hero: Visie op Langdurige & Terugkerende Klachten',
      jouwWebElement: 'Strook met achtergrondafbeelding + Korte introductietekst',
      strategicGoal:
        'Spreek direct de mensen aan die gefrustreerd zijn omdat hun rug-, nek-, schouder- of sportklacht telkens terugkomt.',
      headline: 'Waarom jouw klacht steeds terugkomt — en hoe we die cirkel wél doorbreken.',
      subheadline:
        'Oorzaakgerichte Fysiotherapie & Sportfysiotherapie in Amersfoort Nieuwland & Calveen.',
      bodyCopy: [
        'Heb je het gevoel dat je alles al hebt geprobeerd? Rust gehouden, oefeningen gedaan, lokaal laten behandelen — en toch speelt die achillespees, onderrug, nek of schouder telkens weer op zodra je het dagelijks leven of je sport oppakt?',
        'De reden is simpel maar wordt vaak over het hoofd gezien: de plek waar je pijn ervaart, is vrijwel altijd het slachtoffer van een probleem elders in je lichaam. Zolang je alleen het slachtoffer behandelt, blijft de dader vrijuit gaan.',
      ],
      ctaText: 'Plan een oorzaakgerichte intake',
      ctaTargetPage: 'contact',
      imageAdvice:
        'Rustige, professionele foto van een diagnostisch ketenonderzoek in de behandelkamer.',
    },
    {
      id: 'fysio-2',
      sectionNumber: 'Blok 2.2',
      sectionName: 'Specialistische Behandelmethoden (De Gereedschapskist)',
      jouwWebElement: 'Kolommen (2x of 3x) met duidelijke subkoppen',
      strategicGoal:
        'Behoud alle bestaande behandelvormen van dorienjanse.nl, maar leg ze uit vanuit het resultaat voor de cliënt in plaats van droge medische definities.',
      headline: 'Een integrale gereedschapskist voor complex herstel',
      subheadline: 'Geen losse kunstjes, maar precies de combinatie die jouw lichaam nodig heeft om weer vrij te bewegen.',
      bodyCopy: [
        '1. Neurokinetische Therapie (NKT): Ons brein slaat bewegingspatronen op in het motorisch controlecentrum. Na een oude blessure, val of operatie (zelfs jaren geleden!) kan een spier "uitgeschakeld" blijven, waardoor andere spieren overuren draaien. Met NKT sporen we deze foutieve aansturing via specifieke spiertesten op en "resetten" we de samenwerking tussen brein en spier.',
        '2. Fasciatherapie & Bindweefselbehandeling: Al je spieren, gewrichten en organen zijn verbonden via één doorlopend driedimensionaal netwerk van bindweefsel (fascia). Verklevingen of verhoogde spanning op de ene plek trekken letterlijk aan structuren verderop in de keten. Door de fasciale glijlagen vrij te maken, verdwijnt trekkende pijn en krijg je direct meer bewegingsvrijheid.',
        '3. Sportfysiotherapie MSc & Manuele Technieken: Specifieke analyse van sportbelasting, gewrichtsmobilisaties en opbouwschema’s waarmee je niet alleen klachtenvrij wordt in rust, maar ook weer bestand bent tegen piekbelasting.',
        '4. Dry Needling & Sportmassage: Met een flinterdun naaldje ontspannen we diepliggende myofasciale triggerpoints (spierknopen) direct. Gecombineerd met gerichte sportmassage zorgt dit voor snelle pijnverlichting en betere doorbloeding, zodat we daarna direct de juiste aansturing kunnen intrainen.',
      ],
      ctaText: 'Bespreek jouw klacht met Dorien',
      ctaTargetPage: 'contact',
      imageAdvice:
        'Detailfoto van hands-on fasciatherapie of neurokinetisch testen bij een sporter.',
    },
  ],
  vitaliteit: [
    {
      id: 'vit-1',
      sectionNumber: 'Blok 3.1',
      sectionName: 'Hero: Het Vitaliteitstraject (Kroonjuweel)',
      jouwWebElement: 'Strook met warme achtergrondafbeelding + Introductie',
      strategicGoal:
        'Positioneer het Vitaliteitstraject als dé premium investering voor mensen die structureel meer energie, sneller fysiek herstel en gezonde cellen willen.',
      headline: 'Het Vitaliteitstraject: Duurzame energie en herstel beginnen op celniveau.',
      subheadline:
        'Persoonlijke leefstijlcoaching, herstelanalyse en Omega-3 celgezondheid in Amersfoort.',
      bodyCopy: [
        'Voel je je vaker moe dan je lief is? Duurt het dagen voordat je hersteld bent van een drukke werkweek of een stevige training? Of blijven pees- en spierklachten maar sluimeren ondanks goede oefeningen?',
        'In mijn praktijk zie ik dagelijks dat fysieke klachten en vermoeidheid twee kanten van dezelfde medaille zijn. Daarom heb ik het Vitaliteitstraject ontwikkeld: een diepgaand, wetenschappelijk onderbouwd traject waarin we jouw fysiologie, celgezondheid en leefstijl stap voor stap optimaliseren.',
      ],
      ctaText: 'Vraag een Vitaliteits-kennismaking aan',
      ctaTargetPage: 'contact',
      imageAdvice:
        'Sfeervolle foto van het vitaliteitsconsult: natuurlijke materialen, Omega-3 balans-analyse, rust en aandacht.',
    },
    {
      id: 'vit-2',
      sectionNumber: 'Blok 3.2',
      sectionName: 'Celgezondheid & De Omega-3 Vetzurentest (Meten = Weten)',
      jouwWebElement: 'Tekst + Afbeelding (2 Kolommen) + Opsomming',
      strategicGoal:
        'Leg helder en feitelijk (GEO-proof) uit waarom Omega-3 en celgezondheid essentieel zijn voor spier-/peesherstel en energie.',
      headline: 'Waarom we starten met meten: jouw Omega-6 / Omega-3 balans en celgezondheid.',
      subheadline: 'Zonder gezonde celwanden en ontstekingsremming kan geen enkel weefsel optimaal herstellen.',
      bodyCopy: [
        'Elke cel in je lichaam heeft een celwand die bepaalt hoe makkelijk voedingsstoffen naar binnen kunnen en afvalstoffen naar buiten gaan. Door ons moderne voedingspatroon krijgen we vaak veel te veel Omega-6 vetzuren binnen (die ontstekingen stimuleren) en veel te weinig zuivere Omega-3 vetzuren (EPA en DHA, die ontstekingen juist remmen en oplossen).',
        'Wanneer deze verhouding boven de 3:1 ligt, verkeert je lichaam in een toestand van "laaggradige ontsteking". Het gevolg? Pezen blijven geïrriteerd, spieren herstellen traag na het sporten, en je ervaart een constante waas van vermoeidheid. Met een eenvoudige, onafhankelijke vingerprik-bloedtest meten we jouw exacte waarden, waarna we met hoogwaardige suppletie en voedingsadvies gericht bijsturen en na 120 dagen opnieuw testen.',
      ],
      bulletPoints: [
        'Objectieve laboratorium-bloedtest (droge bloedspot) naar 11 vetzuren in je celmembraan',
        'Gerichte aanpak van laaggradige ontstekingen bij chronische pees- of gewrichtsklachten',
        'Integrale coaching op de 5 vitaliteitspijlers: Voeding & Celgezondheid, Slaap & Herstel, Ademhaling & Zenuwstelsel, Stressregulatie en Natuurlijk Bewegen',
      ],
      ctaText: 'Plan een Vitaliteitscheck & Vetzurentest',
      ctaTargetPage: 'contact',
      imageAdvice:
        'Heldere infographic of foto van het testpakket en de 5 pijlers van vitaliteit.',
    },
  ],
  duursport: [
    {
      id: 'duur-1',
      sectionNumber: 'Blok 4.1',
      sectionName: 'Hero: Hardlopen, Wielrennen & Gerichte Training',
      jouwWebElement: 'Strook met dynamische sportfoto + Introductie',
      strategicGoal:
        'Spreek de taal van de ambitieuze hardloper en wielrenner in Amersfoort die zijn prestaties wil verbeteren en blessurevrij wil doortrainen.',
      headline: 'Slimmer trainen, efficiënter bewegen en pijnvrij presteren.',
      subheadline:
        'Hardloopanalyse, Wielren-specifieke Krachttraining, Personal Training & Bootcamp in Amersfoort Nieuwland.',
      bodyCopy: [
        'Als duursporter vraag je veel van je lichaam. Of je nu traint voor je eerste 10 kilometer, een marathon op de Utrechtse Heuvelrug of lange toertochten op de racefiets of gravelbike: duursport betekent duizenden keren dezelfde beweging herhalen.',
        'Een kleine inefficiëntie in je looptechniek of een onbalans in je romp- en heupstabiliteit op de fiets leidt daardoor al snel tot een lopersknie, achillespeesklacht, shin splints of zeurende onderrug. Als bewegingswetenschapper, sportfysiotherapeut én trainer help ik je niet door je te verbieden om te sporten, maar door je bewegingspatroon en belastbaarheid fundamenteel sterker te maken.',
      ],
      ctaText: 'Boek jouw Loopanalyse of Sport-intake',
      ctaTargetPage: 'contact',
      imageAdvice:
        'Energieke buitenfoto van hardlopen of wielrennen in het groen rond Amersfoort.',
    },
    {
      id: 'duur-2',
      sectionNumber: 'Blok 4.2',
      sectionName: 'Het Aanbod voor Sporters & Actieve Genieters',
      jouwWebElement: 'Kolommen (2x2 Grid)',
      strategicGoal:
        'Groepeer Hardloopbegeleiding/Loopanalyse, Wielrennen, Personal Training (1:1 / Small Group) en Bootcamp Nieuwland overzichtelijk op één pagina.',
      headline: 'Kies de trainingsvorm die past bij jouw doel',
      bodyCopy: [
        '1. Hardloopbegeleiding & Video-Loopanalyse: We analyseren je loopstijl op video (cadans, grondcontacttijd, voetplaatsing, heup- en rompcontrole) en combineren dit met een fysieke ketencheck. Je krijgt direct toepasbare techniekaanwijzingen en gerichte oefeningen voor een hogere loopeconomie.',
        '2. Specifieke Kracht & Mobiliteit voor Wielrenners: Op de fiets zit je urenlang in een gebogen ketenpositie. Wij trainen gerichte core-stability, heupstrekking en schouder-/nekontspanning zodat je meer wattage trapt zonder rug- of nekklachten.',
        '3. Personal Training (1-op-1 of Duo): Trainen onder begeleiding van een bewegingswetenschapper en sportfysio. Ideaal als je na een blessure veilig wilt opbouwen, functioneel sterker wilt worden voor je sport, of stok-achter-de-deur begeleiding zoekt op maat.',
        '4. Bootcamp Amersfoort Nieuwland: Buiten trainen in een motiverende, gezellige groep in Amersfoort Nieuwland. Elke woensdagochtend (09:00 - 10:00 uur) werken we aan kracht, conditie en coördinatie, met altijd professionele oog voor jouw houding en eventuele blessuregevoeligheid.',
      ],
      ctaText: 'Meld je aan voor Loopanalyse, PT of Proefles Bootcamp',
      ctaTargetPage: 'contact',
      imageAdvice:
        'Combinatie van een screenshot/foto van een video-loopanalyse en een vrolijke buitenfoto van de Bootcampgroep in Nieuwland.',
    },
  ],
  over: [
    {
      id: 'over-1',
      sectionNumber: 'Blok 5.1',
      sectionName: 'Over Dorien Janse & Haar Visie',
      jouwWebElement: 'Tekst + Afbeelding (Grote portretfoto links, verhaal rechts)',
      strategicGoal:
        'Persoonlijke verbinding en autoriteit opbouwen: laat zien waarom de combinatie van Bewegingswetenschappen, Fysiotherapie en Vitaliteit uniek is in Amersfoort.',
      headline: 'Hoi, ik ben Dorien Janse — nieuwsgierig naar hoe jouw lichaam écht werkt.',
      subheadline:
        'Bewegingswetenschapper, Sportfysiotherapeut MSc, Trainer & Vitaliteitscoach in Amersfoort.',
      bodyCopy: [
        'Mijn passie voor het menselijk lichaam begon vanuit een dubbele fascinatie: hoe haalt een sporter het maximale uit zijn beweging, en waarom herstelt het ene lichaam moeiteloos terwijl het andere blijft vastlopen in pijn of vermoeidheid?',
        'Na mijn studie Bewegingswetenschappen en Fysiotherapie (gevolgd door de master Sportfysiotherapie) merkte ik in de reguliere praktijk dat 20 minuten behandeltijd simpelweg te kort is om complexe, langdurige klachten echt bij de wortel aan te pakken. Daarom koos ik voor een eigen, onafhankelijke praktijk aan de Ruimtesonde 7 in Amersfoort Calveen/Nieuwland.',
        'Hier heb ik alle ruimte om verder te kijken. Ik combineer biomechanica, Neurokinetische Therapie, Fasciatherapie en Dry Needling met inzichten uit de leefstijlgeneeskunde en celgezondheid (zoals de Omega-3 vetzurenbalans). Want pas als je aansturing, je weefsel én je interne herstelvermogen kloppen, ontstaat resultaat dat blijft.',
      ],
      ctaText: 'Kom kennismaken aan de Ruimtesonde 7',
      ctaTargetPage: 'contact',
      imageAdvice:
        'Authentieke portretfoto van Dorien in haar praktijk aan de Ruimtesonde 7, warm en benaderbaar.',
    },
    {
      id: 'over-2',
      sectionNumber: 'Blok 5.2',
      sectionName: 'Werkwijze, Tarieven & Vergoedingen',
      jouwWebElement: 'Tabel-element of 2 Overzichtelijke Tekstkolommen',
      strategicGoal:
        'Transparante communicatie over contractvrij werken (meer tijd, sneller resultaat) en heldere weergave van alle tarieven.',
      headline: 'Transparante tarieven & bewust tijd voor kwaliteit',
      subheadline:
        'Waarom ik contractvrij werk en hoe de vergoeding via je zorgverzekeraar werkt.',
      bodyCopy: [
        'Om de tijd, rust en diagnostische diepgang te bieden die nodig zijn bij langdurige klachten, werk ik bewust zonder contracten met zorgverzekeraars. Hierdoor ben ik niet gebonden aan standaardprotocollen of korte sessies, en hebben we vaak aanzienlijk minder behandelingen nodig voor een blijvend resultaat.',
        'Na afloop van een fysiotherapeutische behandeling ontvang je de factuur per e-mail. Deze kun je zelf indienen bij je zorgverzekeraar. Heb je een aanvullende verzekering voor fysiotherapie? Dan krijg je — afhankelijk van je polis — doorgaans tussen de 60% en 100% van het marktconforme tarief vergoed.',
      ],
      bulletPoints: [
        'Intake, onderzoek & behandeling Fysiotherapie / Sportfysio (60 min): € 92,00',
        'Vervolgbehandeling Fysiotherapie / NKT / Fascia (45 min): € 72,50',
        'Sportmassage / Herstelbehandeling (30 / 45 / 60 min): vanaf € 42,50',
        'Vitaliteitstraject & Omega-3 Balanstest (incl. laboratoriumanalyse & coaching): Op maat na intake',
        'Personal Training (1:1, 60 min): € 75,00 (of voordelige 10-rittenkaart)',
        'Bootcamp Amersfoort Nieuwland (woensdag 09:00): € 10,50 per losse les of 10-rittenkaart (€ 95,00)',
      ],
      ctaText: 'Vragen over tarieven of vergoeding? Stuur een bericht',
      ctaTargetPage: 'contact',
      imageAdvice: 'Geen foto nodig, gebruik een rustig kader met veel witruimte.',
    },
  ],
  contact: [
    {
      id: 'contact-1',
      sectionNumber: 'Blok 6.1',
      sectionName: 'Contactgegevens, Praktijklocatie & Afspraakformulier',
      jouwWebElement: 'Kolommen (2x): Links Contactgegevens & Kaart, Rechts JouwWeb Formulier',
      strategicGoal:
        'Laagdrempelige conversie (intake plannen of WhatsApp sturen) + sterke lokale SEO-signalen voor Amersfoort Nieuwland, Calveen, Hoogland en Vathorst.',
      headline: 'Zet vandaag de eerste stap naar een pijnvrij en energiek lichaam.',
      subheadline:
        'Praktijk aan de Ruimtesonde 7 in Amersfoort (Calveen / Nieuwland) — gratis parkeren voor de deur.',
      bodyCopy: [
        'Wil je een afspraak maken voor fysiotherapie, een hardloopanalyse inplannen, of vrijblijvend sparren of het Vitaliteitstraject bij jouw situatie past? Vul het formulier in of stuur direct een WhatsApp-bericht naar 06 - 24 72 28 54.',
        'De praktijk is gevestigd aan de Ruimtesonde 7 (3824 MZ Amersfoort) op bedrijventerrein Calveen, direct op de grens met Amersfoort Nieuwland, Hoogland en Vathorst. Je parkeert gratis direct voor de deur.',
      ],
      bulletPoints: [
        'Adres: Ruimtesonde 7, 3824 MZ Amersfoort (Calveen / Nieuwland)',
        'Telefoon & WhatsApp: 06 - 24 72 28 54',
        'E-mail: info@dorienjanse.nl',
        'Geen verwijsbrief van de huisarts nodig',
      ],
      ctaText: 'Verstuur aanvraag',
      imageAdvice:
        'JouwWeb Kaart-element ingesteld op Ruimtesonde 7, 3824 MZ Amersfoort + foto van de praktijkruimte.',
    },
  ],
};

export const JSON_LD_SCHEMA_STRING = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "PhysicalTherapy", "HealthAndBeautyBusiness"],
      "@id": "https://www.dorienjanse.nl/#organization",
      "name": "Dorien Janse - Personal Fysio, Training & Vitaliteit",
      "alternateName": "Fysiotherapie & Vitaliteit Dorien Janse Amersfoort",
      "url": "https://www.dorienjanse.nl",
      "telephone": "+31624722854",
      "email": "info@dorienjanse.nl",
      "priceRange": "€€",
      "description": "Praktijk voor oorzaakgerichte sportfysiotherapie, bewegingswetenschappen, vitaliteitscoaching (celgezondheid & Omega-3) en duursportbegeleiding (hardlopen & wielrennen) in Amersfoort Nieuwland/Calveen.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ruimtesonde 7",
        "postalCode": "3824 MZ",
        "addressLocality": "Amersfoort",
        "addressRegion": "Utrecht",
        "addressCountry": "NL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 52.1928,
        "longitude": 5.3789
      },
      "areaServed": [
        { "@type": "City", "name": "Amersfoort" },
        { "@type": "Place", "name": "Amersfoort Nieuwland" },
        { "@type": "Place", "name": "Calveen" },
        { "@type": "Place", "name": "Hoogland" },
        { "@type": "Place", "name": "Vathorst" }
      ],
      "founder": {
        "@type": "Person",
        "name": "Dorien Janse",
        "jobTitle": "Sportfysiotherapeut MSc, Bewegingswetenschapper, Trainer & Vitaliteitscoach",
        "knowsAbout": [
          "Sportfysiotherapie",
          "Bewegingswetenschappen",
          "Neurokinetische Therapie (NKT)",
          "Fasciatherapie",
          "Dry Needling",
          "Vitaliteitscoaching en Celgezondheid (Omega-3 vetzurenbalans)",
          "Hardloopanalyse en Wielrenbelasting"
        ]
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Behandelingen & Trajecten",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Het Integrale Vitaliteitstraject & Omega-3 Celgezondheid",
              "description": "Diepgaande leefstijlcoaching inclusief bloedwaardetest op Omega-6/Omega-3 balans, slaap, ademhaling en duurzaam herstelvermogen."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Oorzaakgerichte Sportfysiotherapie (NKT, Fascia & Dry Needling)",
              "description": "Specialistische ketenanalyse en behandeling voor langdurige of terugkerende (sport)klachten die elders niet herstellen."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hardloopanalyse, Duursportbegeleiding & Personal Training",
              "description": "Biomechanische video-loopanalyse, wielrenspecifieke krachttraining, 1-op-1 Personal Training en Bootcamp in Amersfoort Nieuwland."
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dorienjanse.nl/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Waarom herstelt mijn hardloopblessure of langdurige klacht niet met rust of standaard oefeningen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Omdat de plek waar je pijn voelt bijna nooit de daadwerkelijke oorzaak is. Met Neurokinetische Therapie (NKT) en Fasciatherapie sporen we de oorspronkelijke schakelfout in het zenuwstelsel en bindweefsel op, zodat het overbelaste weefsel eindelijk écht kan herstellen."
          }
        },
        {
          "@type": "Question",
          "name": "Wat is het verband tussen celgezondheid, Omega-3 vetzuren en het herstel van pees- of spierklachten?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Herstel van weefsel vraagt om een gecontroleerde ontstekingsreactie. Bij een verstoorde Omega-6/Omega-3 ratio (>3:1) blijven laaggradige ontstekingen actief en herstellen pezen en spieren traag. In het Vitaliteitstraject meten we je vetzurenstatus via een bloedtest en herstellen we je celgezondheid van binnenuit."
          }
        },
        {
          "@type": "Question",
          "name": "Hoe helpt een biomechanische loopanalyse bij terugkerende knie-, scheenbeen- of achillespeesklachten?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Als bewegingswetenschapper en sportfysiotherapeut analyseert Dorien Janse in Amersfoort je looppatroon op video (cadans, heupstabiliteit, voetlanding), koppelt dit aan een ketenonderzoek en vertaalt dit naar looptechniek-aanpassingen en gerichte krachttraining."
          }
        }
      ]
    }
  ]
}
</script>`;
