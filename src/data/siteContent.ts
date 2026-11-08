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

export interface TariffItem {
  name: string;
  description?: string;
  currentPrice: string;
  advisedPrice?: string;
  highlight?: boolean;
}

export interface TariffCategory {
  id: string;
  title: string;
  subtitle: string;
  footnote?: string;
  items: TariffItem[];
}

export interface TeamMemberProfile {
  name: string;
  role: string;
  email: string;
  registrations: string[];
  intro: string;
  specializations: string[];
  sportsBackground: string;
  vision: string;
}

export interface BlogTopic {
  id: string;
  title: string;
  category: string;
  summary: string;
  keyInsight: string;
}

export interface ClientReview {
  id: string;
  context: string;
  quote: string;
  author: string;
  treatmentTag: string;
}

export const GENERATED_IMAGES = {
  hero: '/src/assets/images/hero_dorien_vitality_1794159366664.jpg',
  vitality: '/src/assets/images/vitality_omega_cellular_1794159368812.jpg',
  endurance: '/src/assets/images/endurance_running_cycling_1794159369703.jpg',
  physio: '/src/assets/images/holistic_physio_therapy_1794159371097.jpg',
};

export const PRACTICE_FACTS = {
  name: 'Dorien Janse – Persoonlijke Fysio, Training & Vitaliteit',
  street: 'Ruimtesonde 7',
  postalCity: '3824 MZ Amersfoort (Nieuwland / Calveen)',
  phone: '06-14184448',
  phoneHref: 'tel:+31614184448',
  whatsappHref: 'https://wa.me/31614184448',
  emailDorien: 'info@dorienjanse.nl',
  emailMichael: 'michael@dorienjanse.nl',
  practiceAgb: '4094632',
  kvk: '64964744',
  dorienBig: '59064209704',
  dorienAgb: '4108710',
  michaelBig: '89920543304',
  openingHours: [
    { day: 'Maandag', hours: '09.00 - 16.00 uur' },
    { day: 'Dinsdag', hours: '08.00 - 16.00 uur' },
    { day: 'Woensdag', hours: '08.00 - 16.00 uur' },
    { day: 'Donderdag', hours: '08.00 - 17.00 uur' },
    { day: 'Vrijdag', hours: 'Op afspraak (overige tijden in onderling overleg)' },
  ],
  insuranceNote:
    'Vergoeding vanuit de aanvullende verzekering bij gecontracteerde zorgverzekeraars. Geen contract met: CZ groep (Nationale Nederlanden, Ohra), Caresq, Zorg&Zekerheid, ASR en ENO.',
  roomRental: {
    title: 'Samenwerking & Verhuur Praktijkruimte (1e verdieping Ruimtesonde 7)',
    description:
      'Op de 1e verdieping van ons pand aan de Ruimtesonde 7 in Amersfoort zijn representatieve ruimtes per dagdeel te huur voor (para)medici, coaches en personal trainers:',
    spaces: [
      { name: 'Behandelkamers', size: '16 m²', usage: 'Voor (para)medische consulten, fysiotherapie of coaching' },
      { name: 'Cursus- / groepsruimte', size: '31 m²', usage: 'Geschikt voor o.a. yoga, pilates, ademwerk of mindfulness' },
      { name: 'Compleet ingerichte oefenzaal', size: '65 m²', usage: 'Voor revalidatie, personal training en small group training' },
    ],
  },
};

export const TEAM_MEMBERS: TeamMemberProfile[] = [
  {
    name: 'Dorien Janse',
    role: 'Sportfysiotherapeut, Bewegingswetenschapper, Vitaliteitscoach & Trainer',
    email: 'info@dorienjanse.nl',
    registrations: [
      'BIG: 59064209704',
      'AGB: 4108710',
      'Lid KNGF & Centraal Kwaliteits Register',
      'Enige NKT-gecertificeerde fysiotherapeut in Amersfoort',
    ],
    intro:
      'Na mijn studies Bewegingswetenschappen en Fysiotherapie/Sportfysiotherapie heb ik tien jaar in een grote fysiotherapiepraktijk gewerkt. In 2015 startte ik mijn eigen praktijk aan de Ruimtesonde 7 in Amersfoort vanuit één centrale fascinatie: waarom ontstaan klachten en waarom herstellen ze soms niet vanzelf?',
    specializations: [
      'Neurokinetische Therapie (NKT) – als enige gecertificeerde fysio in Amersfoort',
      'Fasciatherapie & Dry Needling',
      'Ademhaling, Slaap & Vitaliteitscoaching',
      'Hardloopanalyse (buiten en op de loopband) & Looptechniek',
    ],
    sportsBackground:
      'Tot mijn 25e heb ik fanatiek geschaatst, daarna op landelijk niveau gewielrend en inmiddels ben ik fanatiek hardloopster (in 2023 liep ik o.a. de marathon en ik ben al jarenlang actief lid van AV Triathlon in Amersfoort). Ik ken de belevingswereld van de geblesseerde duursporter van binnenuit.',
    vision:
      'Ik kijk naar de totale mens achter de klacht: van de samenwerking tussen zenuwstelsel, spieren en bindweefsel tot de balans tussen belasting en belastbaarheid, ademhaling, slaap en herstelvermogen.',
  },
  {
    name: 'Michaël Kornmann',
    role: 'Fysiotherapeut, Master Manueel Therapeut MSc & Hardloopfysiotherapeut BLT3',
    email: 'michael@dorienjanse.nl',
    registrations: [
      'BIG: 89920543304',
      'Master Musculoskeletaal Manueel Therapeut (MSc, 2020)',
      'Gecertificeerd Hardloopfysiotherapeut (BLT3) & Dry Needling',
    ],
    intro:
      'Sinds 2016 ben ik werkzaam als fysiotherapeut en in 2020 ben ik afgestudeerd als Master Musculoskeletaal Manueel Therapeut. Sinds begin 2025 werk ik samen met Dorien aan de Ruimtesonde 7; wij kennen elkaar via AV Triathlon in Amersfoort, waar we beiden actief zijn en waar ik ook hardlooptraining geef.',
    specializations: [
      'Master Manuele Therapie (MSc) bij wervelkolom- en ketenklachten',
      'Hardloopfysiotherapie (BLT3) & Loopscholing',
      'Neurofysiologie van pijn (biologische en fysiologische processen achter pijnervaring)',
      'Dry Needling & Sportrevalidatie',
    ],
    sportsBackground:
      'Zelf ben ik een fanatiek hardloper, wielrenner en fitnesser. Daardoor weet ik precies wat er gevraagd wordt om na een blessure weer met vertrouwen op te bouwen naar je sportieve doel.',
    vision:
      'Mijn doel is om cliënten met positivisme en heldere uitleg over hoe pijn en herstel werken weer vertrouwen te geven in hun eigen lichaam. Ik stimuleer zelfredzaamheid, zodat je zelf de regie houdt en niet afhankelijk wordt van zorg.',
  },
];

export const OFFICIAL_TARIFFS: TariffCategory[] = [
  {
    id: 'vitaliteit',
    title: 'A. Vitaliteitstraject (Ook online mogelijk)',
    subtitle:
      'Gericht op het totale herstelvermogen en het vinden van de oorzaak achter aanhoudende klachten: balans tussen belasting en belastbaarheid, slaap, ademhaling, voeding, stress, immuunsysteem en ingesleten patronen.',
    items: [
      {
        name: 'Pakket A – Basis Fit',
        description: 'Uitgebreide analyse vragenlijst + Intake van 1 uur + Uitleg en persoonlijk plan.',
        currentPrice: '€ 130,-',
        advisedPrice: '€ 145,-',
      },
      {
        name: 'Pakket B – Lekker Fit',
        description: 'Alles uit Basis Fit + 1 vervolgconsult ter evaluatie na 4 weken.',
        currentPrice: '€ 220,-',
        advisedPrice: '€ 235,-',
      },
      {
        name: 'Pakket C – Premium Fit (Meest gekozen voor blijvende verandering)',
        description: 'Alles uit Basis Fit + 3 vervolgconsulten ter evaluatie na 4, 8 en 12 weken.',
        currentPrice: '€ 370,-',
        advisedPrice: '€ 385,-',
        highlight: true,
      },
    ],
  },
  {
    id: 'fysio',
    title: 'B. Fysiotherapie & Manuele Therapie',
    subtitle: 'Tarieven indien niet aanvullend verzekerd.',
    footnote:
      'Vergoeding vanuit de aanvullende verzekering bij gecontracteerde zorgverzekeraars. Geen contract met: CZ groep (Nationale Nederlanden, Ohra), Caresq, Zorg&Zekerheid, ASR en ENO.',
    items: [
      {
        name: 'Intake Fysiotherapie incl. 1e behandeling',
        currentPrice: '€ 68,-',
        advisedPrice: '€ 70,-',
      },
      {
        name: 'Consult Fysiotherapie',
        currentPrice: '€ 45,-',
        advisedPrice: '€ 49,-',
      },
      {
        name: 'Consult Manuele Therapie (Michaël Kornmann MSc)',
        currentPrice: '€ 56,-',
        advisedPrice: '€ 60,-',
      },
      {
        name: 'Plus Consult Fysiotherapie / lange zitting (45 min)',
        currentPrice: '€ 68,-',
        advisedPrice: '€ 72,-',
      },
      {
        name: 'E-consult (30 min via videogesprek)',
        currentPrice: '€ 45,-',
        advisedPrice: '€ 45,-',
      },
      {
        name: 'Hardloopfysiotherapie pakket (4x)',
        description: 'Intake van 1 uur, videoanalyse (buiten en op loopband) + 3 trainingen van 45 min.',
        currentPrice: '€ 290,-',
        advisedPrice: '€ 295,-',
        highlight: true,
      },
      {
        name: 'Knipkaart 12x zelfstandig trainen (op afgesproken tijden)',
        currentPrice: '€ 85,-',
        advisedPrice: '€ 90,-',
      },
      {
        name: 'Niet nagekomen afspraak (<24u)',
        currentPrice: '€ 32,-',
        advisedPrice: '€ 35,-',
      },
      {
        name: 'Tapen (eigen bijdrage na bijv. zweepslag/enkelverzwikking)',
        currentPrice: '€ 15,-',
        advisedPrice: '€ 15,-',
      },
      {
        name: 'Hooikoorts taping (2x intapen incl. tape)',
        currentPrice: '€ 32,-',
        advisedPrice: '€ 35,-',
      },
    ],
  },
  {
    id: 'training',
    title: 'C. Personal Training, Small Group & Running Bootcamp (Nieuwland)',
    subtitle:
      'Running Bootcamp is op maandag en donderdag voor mannen & vrouwen, en op vrijdag speciaal voor vrouwen (ook Moeder & Kind bootcamp mogelijk).',
    items: [
      {
        name: 'Proefles Running Bootcamp',
        currentPrice: 'Gratis',
        advisedPrice: 'Gratis',
      },
      {
        name: 'Bootcamp Abonnement 3 maanden (1x p/w / 2x p/w)',
        currentPrice: '€ 80,- / € 140,-',
        advisedPrice: '€ 85,- / € 145,-',
      },
      {
        name: 'Bootcamp Jaarabonnement (1x p/w / 2x p/w)',
        currentPrice: '€ 305,- / € 532,-',
        advisedPrice: '€ 315,- / € 545,-',
      },
      {
        name: 'Bootcamp Knipkaart 10 trainingen',
        currentPrice: '€ 100,-',
        advisedPrice: '€ 105,-',
      },
      {
        name: 'Personal Training 30 min / 45 min (individueel)',
        currentPrice: '€ 50,- / € 75,-',
        advisedPrice: '€ 50,- / € 75,-',
      },
      {
        name: 'Intake Personal Training (individueel)',
        currentPrice: '€ 75,-',
        advisedPrice: '€ 75,-',
      },
      {
        name: 'Small Group (max. 4 pers.) Knipkaart 10x 30 min',
        currentPrice: '€ 185,-',
        advisedPrice: '€ 195,-',
      },
    ],
  },
  {
    id: 'massage',
    title: 'D. Sportmassage (Ook als cadeaubon verkrijgbaar)',
    subtitle: 'Gerichte dieptemassage voor herstel en onderhoud van je spieren.',
    items: [
      {
        name: 'Sportmassage 30 minuten',
        currentPrice: '€ 39,-',
        advisedPrice: '€ 40,-',
      },
      {
        name: 'Sportmassage 45 minuten',
        currentPrice: '€ 58,50',
        advisedPrice: '€ 60,-',
      },
      {
        name: 'Knipkaart 10x 30 minuten',
        currentPrice: '€ 375,-',
        advisedPrice: '€ 380,-',
      },
    ],
  },
];

export const KNOWLEDGE_BLOGS: BlogTopic[] = [
  {
    id: 'blog-1',
    title: 'Hoe een laaggradige ontsteking klachten in stand houdt',
    category: 'Vitaliteit & Immuunsysteem',
    summary:
      'Waarom sommige pees- en spierklachten niet herstellen zolang het immuunsysteem op de achtergrond continu licht geactiveerd blijft door stress, slaaptekort of voeding.',
    keyInsight: 'Balans tussen belasting, immuunrust en weefselherstel',
  },
  {
    id: 'blog-2',
    title: 'Slaap en herstel van blessure',
    category: 'Herstelvermogen',
    summary:
      'Tijdens je diepe slaap maakt je lichaam groeihormoon aan en vindt daadwerkelijke weefselreparatie plaats. Ontdek hoe slaapkwaliteit direct je blessureherstel beïnvloedt.',
    keyInsight: 'Fysiologische weefselregeneratie tijdens de nacht',
  },
  {
    id: 'blog-3',
    title: 'Ademhaling en hoofdpijn',
    category: 'Zenuwstelsel & Spanning',
    summary:
      'Een te hoge of te snelle ademhaling zet hulpademhalingsspieren in je nek en schouders continu onder spanning en houdt je zenuwstelsel in de actiestand.',
    keyInsight: 'Koppeling tussen ademfrequentie, nekspanning en spanningshoofdpijn',
  },
  {
    id: 'blog-4',
    title: 'Voeding en maaltijdfrequentie',
    category: 'Leefstijl & Energie',
    summary:
      'Elke keer dat je eet vraagt je spijsvertering en immuunsysteem energie. Wat doet het beperken van eetmomenten voor je energieniveau en herstel?',
    keyInsight: 'Metabole rust en stabiele bloedsuikerspiegel',
  },
  {
    id: 'blog-5',
    title: 'Gebruik van magnesium bij hardlopers',
    category: 'Duursport & Suppletie',
    summary:
      'Wanneer heeft ondersteuning met magnesium zin bij spierkrampen, verhoogde spierspanning of intensieve trainingsweken, en welke vorm neemt je lichaam goed op?',
    keyInsight: 'Spierontspanning en elektrolytenbalans bij duursport',
  },
  {
    id: 'blog-6',
    title: 'Omega 3: belangrijk voor herstel van klachten',
    category: 'Voeding & Ondersteuning',
    summary:
      'De rol van vetzuren als ondersteunende bouwsteen bij het remmen van ontstekingsreacties na fysieke belasting of bij langdurige peesirritaties.',
    keyInsight: 'Ondersteunend voedings- en supplementadvies op maat',
  },
  {
    id: 'blog-7',
    title: 'Trainen voor de marathon',
    category: 'Hardlopen & Duursport',
    summary:
      'Praktische inzichten vanuit bewegingswetenschappen én eigen marathonervaring: hoe bouw je kilometers op zonder onderweg uit te vallen met een overbelastingsblessure?',
    keyInsight: 'Periodisering, looptechniek en ketenkracht',
  },
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    context: 'Langdurige klachten · NKT, Fascia & Dry Needling',
    quote:
      '“Na jarenlang van behandelaar naar behandelaar te zijn gegaan voor mijn rug- en heupklachten, keek Dorien eindelijk naar het geheel. Via Neurokinetische Therapie (NKT) en Dry Needling ontdekte ze waar mijn lichaam compenseerde. Ik beweeg voor het eerst in jaren weer vrij en zonder angst.”',
    author: 'Cliënt uit Amersfoort Nieuwland',
    treatmentTag: 'Neurokinetische Therapie (NKT) & Holistische blik',
  },
  {
    id: 'rev-2',
    context: 'Hardloper / Ultraloper · Videoanalyse buiten én op de loopband',
    quote:
      '“Als fanatiek langeafstandsloper liep ik telkens vast op dezelfde kuit- en achillespeesklacht. De combinatie van de videoanalyse (zowel op de loopband als buiten), gerichte loopscholing en krachtoefeningen bij Dorien en Michaël heeft mijn loopstijl compleet veranderd.”',
    author: 'Marathon- & Ultraloper (regio Amersfoort)',
    treatmentTag: 'Hardloopfysiotherapie pakket (4x) & Loopscholing',
  },
  {
    id: 'rev-3',
    context: 'Vitaliteitstraject & Ademhaling · Meer energie en herstel',
    quote:
      '“Ik kwam binnen met aanhoudende nekklachten en merkte dat ik geleefd werd door vermoeidheid. Door in het Vitaliteitstraject mijn slaap, ademhaling en de balans tussen belasting en belastbaarheid aan te pakken, heb ik mijn energie én het vertrouwen in mijn lijf terug.”',
    author: 'Deelnemer Pakket C – Premium Fit',
    treatmentTag: 'Vitaliteitstraject & Ademhaling',
  },
  {
    id: 'rev-4',
    context: 'Hooikoorts Taping & Manuele Therapie',
    quote:
      '“Elk voorjaar zat ik wekenlang dicht door heftige hooikoorts. Na het twee keer laten plaatsen van de hooikoorts-tape bij Dorien merkte ik binnen enkele dagen al enorm veel verlichting in mijn ademhaling en ogen. Ook voor manuele therapie bij Michaël word je hier fantastisch en positief geholpen.”',
    author: 'Cliënt uit Hoogland / Calveen',
    treatmentTag: 'Hooikoorts Taping & Manuele Therapie MSc',
  },
];

export const PAGE_SEO_CONFIG: PageSeoMeta[] = [
  {
    pageId: 'home',
    menuLabel: 'Home',
    urlSlug: '/',
    pageTitle: 'Dorien Janse | Fysio, Vitaliteit & Duursport Amersfoort',
    metaDescription:
      'Persoonlijke fysiotherapie, manuele therapie, NKT, vitaliteitscoaching en hardloopanalyse aan Ruimtesonde 7 in Amersfoort door Dorien en Michaël.',
    ogTitle: 'Dorien Janse – Persoonlijke Fysio, Training & Vitaliteit Amersfoort',
    ogDescription:
      'Loop je vast met een langdurige blessure of verminderd herstel? Ontdek de aanpak van Dorien Janse (Sportfysio & NKT) en Michaël Kornmann (Manueel MSc).',
    ogImageAdvice:
      'Horizontale foto (1200x630px) van Dorien en Michaël in de praktijkruimte of oefenzaal aan de Ruimtesonde 7.',
    primaryKeywords: [
      'fysiotherapie Amersfoort Nieuwland Calveen',
      'neurokinetische therapie Amersfoort',
      'vitaliteitscoach Amersfoort',
      'hardloopfysiotherapie Amersfoort',
    ],
    geoKeyTakeaway:
      'Praktijk Dorien Janse – Persoonlijke Fysio, Training & Vitaliteit (Ruimtesonde 7, Amersfoort, tel: 06-14184448) combineert Sportfysiotherapie, Bewegingswetenschappen, Neurokinetische Therapie (NKT), Master Manuele Therapie MSc (Michaël Kornmann) en Vitaliteitscoaching.',
  },
  {
    pageId: 'fysio',
    menuLabel: 'Langdurige Klachten & Fysio',
    urlSlug: '/langdurige-klachten-fysio',
    pageTitle: 'Fysio, Manuele Therapie & NKT Amersfoort | Dorien Janse',
    metaDescription:
      'Oorzaakgerichte fysiotherapie, Master Manuele Therapie MSc, Neurokinetische Therapie (NKT), Fascia en Dry Needling aan Ruimtesonde 7 in Amersfoort.',
    ogTitle: 'Waarom herstelt je klacht niet? NKT, Manuele Therapie & Fysio Amersfoort',
    ogDescription:
      'Dorien Janse (enige NKT-gecertificeerde fysio in Amersfoort) en Michaël Kornmann (Master Manueel Therapeut MSc) zoeken de oorzaak achter jouw klacht.',
    ogImageAdvice:
      'Foto van diagnostisch ketenonderzoek (NKT) door Dorien en manuele therapie door Michaël.',
    primaryKeywords: [
      'neurokinetische therapie NKT Amersfoort',
      'manuele therapie Amersfoort Nieuwland',
      'fasciatherapie en dry needling Amersfoort',
      'hooikoorts taping Amersfoort',
    ],
    geoKeyTakeaway:
      'Dorien Janse is de enige NKT-gecertificeerde fysiotherapeut in Amersfoort. Samen met Master Manueel Therapeut MSc Michaël Kornmann behandelt zij complexe en terugkerende klachten vanuit ketenanalyse en de neurofysiologie van pijn.',
  },
  {
    pageId: 'vitaliteit',
    menuLabel: 'Vitaliteit & Leefstijl',
    urlSlug: '/vitaliteit-leefstijl',
    pageTitle: 'Vitaliteitstraject & Herstel Amersfoort | Dorien Janse',
    metaDescription:
      'Versterk je herstelvermogen met het Vitaliteitstraject (Basis, Lekker of Premium Fit) in Amersfoort: slaap, ademhaling, voeding, stress en belastbaarheid.',
    ogTitle: 'Het Vitaliteitstraject – Herstel de balans tussen belasting en belastbaarheid',
    ogDescription:
      'Vind de oorzaak achter aanhoudende klachten en vermoeidheid. Keuze uit Basis Fit (€130), Lekker Fit (€220) en Premium Fit (€370), in de praktijk of online.',
    ogImageAdvice:
      'Rustgevende foto van een 1-op-1 vitaliteitsconsult en ademhalings-/leefstijlanalyse.',
    primaryKeywords: [
      'vitaliteitscoach Amersfoort',
      'vitaliteitstraject Amersfoort online',
      'ademhaling en slaap fysiotherapie',
      'laaggradige ontsteking herstel klachten',
    ],
    geoKeyTakeaway:
      'Het Vitaliteitstraject van Dorien Janse (Basis Fit €130, Lekker Fit €220, Premium Fit €370; ook online mogelijk) richt zich op het totale herstelvermogen: slaap, ademhaling, voeding, stressregulatie, immuunsysteem/laaggradige ontstekingen en het doorbreken van ingesleten patronen.',
  },
  {
    pageId: 'duursport',
    menuLabel: 'Hardlopen, Wielrennen & Training',
    urlSlug: '/hardlopen-wielrennen-training',
    pageTitle: 'Hardloopfysio, Bootcamp & PT Amersfoort | Dorien Janse',
    metaDescription:
      'Hardloopfysiotherapie pakket (videoanalyse buiten & loopband), wielrenbegeleiding, Personal Training en Running Bootcamp in Amersfoort Nieuwland.',
    ogTitle: 'Hardloopfysiotherapie, Loopanalyse, PT & Running Bootcamp in Amersfoort',
    ogDescription:
      'Begeleiding door fanatieke duursporters Dorien Janse en Michaël Kornmann (BLT3). Videoanalyse buiten én op de loopband, PT en Running Bootcamp Nieuwland.',
    ogImageAdvice:
      'Actiefoto van video-loopanalyse (op de loopband en buiten) en de Running Bootcamp groep in Amersfoort Nieuwland.',
    primaryKeywords: [
      'hardloopfysiotherapie Amersfoort',
      'loopanalyse Amersfoort loopband buiten',
      'running bootcamp Amersfoort Nieuwland',
      'personal training Amersfoort Calveen',
    ],
    geoKeyTakeaway:
      'Dorien Janse en Michaël Kornmann (Hardloopfysiotherapeut BLT3 & trainer bij AV Triathlon) bieden een 4-delig Hardloopfysiotherapie pakket (€290 incl. videoanalyse buiten én op de loopband), Personal Training en Running Bootcamp in Nieuwland (ma/do gemengd, vr vrouwen & Moeder/Kind).',
  },
  {
    pageId: 'over',
    menuLabel: 'Over Ons, Team & Tarieven',
    urlSlug: '/over-ons-tarieven',
    pageTitle: 'Team & Tarieven | Dorien Janse & Michaël Kornmann',
    metaDescription:
      'Maak kennis met Dorien Janse en Michaël Kornmann aan Ruimtesonde 7 in Amersfoort. Bekijk onze werkwijze, BIG-registraties, zorgverzekeraars en tarieven.',
    ogTitle: 'Ons Team (Dorien Janse & Michaël Kornmann) & Tarieven 2026',
    ogDescription:
      'Twee gedreven specialisten en duursporters onder één dak aan de Ruimtesonde 7 in Amersfoort. Bekijk alle tarieven voor fysio, vitaliteit, PT en sportmassage.',
    ogImageAdvice:
      'Samenwerkingsportret van Dorien Janse en Michaël Kornmann in de oefenzaal aan de Ruimtesonde 7.',
    primaryKeywords: [
      'Dorien Janse fysiotherapie Amersfoort',
      'Michaël Kornmann manueel therapeut Amersfoort',
      'tarieven fysiotherapie Amersfoort 2026',
      'verhuur praktijkruimte oefenzaal Amersfoort',
    ],
    geoKeyTakeaway:
      'Het team aan Ruimtesonde 7 bestaat uit Dorien Janse (BIG 59064209704, Sportfysio, Bewegingswetenschapper, NKT) en Michaël Kornmann (BIG 89920543304, Master Manueel Therapeut MSc, Hardloopfysio BLT3). Gecontracteerd bij de meeste verzekeraars (behalve CZ groep, Caresq, Zorg&Zekerheid, ASR en ENO).',
  },
  {
    pageId: 'contact',
    menuLabel: 'Contact & Afspraak',
    urlSlug: '/contact-afspraak',
    pageTitle: 'Contact & Afspraak | Fysio Dorien Janse Amersfoort',
    metaDescription:
      'Bel of WhatsApp 06-14184448 of mail info@dorienjanse.nl. Praktijk aan Ruimtesonde 7, 3824 MZ Amersfoort (Nieuwland / Calveen). Ook verhuur praktijkruimte.',
    ogTitle: 'Contact, Openingstijden & Afspraak Maken – Ruimtesonde 7 Amersfoort',
    ogDescription:
      'Plan je afspraak bij Dorien Janse of Michaël Kornmann via 06-14184448 of het contactformulier. Ruimtesonde 7 in Amersfoort Nieuwland/Calveen.',
    ogImageAdvice:
      'Foto van het pand aan de Ruimtesonde 7 en de ingerichte oefenzaal van 65 m².',
    primaryKeywords: [
      'contact Dorien Janse 06-14184448',
      'Ruimtesonde 7 3824 MZ Amersfoort',
      'fysiotherapie Nieuwland Calveen afspraak',
      'behandelruimte huren Amersfoort',
    ],
    geoKeyTakeaway:
      'Praktijk Dorien Janse is gevestigd op Ruimtesonde 7, 3824 MZ Amersfoort (telefoon: 06-14184448, info@dorienjanse.nl en michael@dorienjanse.nl, KvK 64964744, AGB 4094632). Op de 1e verdieping zijn behandelkamers (16 m²), een groepsruimte (31 m²) en oefenzaal (65 m²) per dagdeel te huur.',
  },
];

export const GEO_FAQS: GeoFaqItem[] = [
  {
    id: 'faq-1',
    category: 'klachten',
    question: 'Waarom herstelt een langdurige klacht of sportblessure soms niet vanzelf?',
    answer:
      'Omdat de plek waar je pijn voelt vaak overbelast raakt doordat een andere schakel in je lichaam zijn werk niet goed doet. Na een eerdere blessure, val of periode van overbelasting kan je zenuwstelsel een compensatiepatroon vasthouden. Dorien Janse (als enige fysiotherapeut in Amersfoort gecertificeerd in Neurokinetische Therapie - NKT) en Michaël Kornmann (Master Manueel Therapeut MSc) onderzoeken hoe jouw zenuwstelsel, gewrichten en bindweefsel (fascia) samenwerken en pakken de bron van de overbelasting aan.',
    scientificMechanism: 'Neurokinetische Therapie (NKT), manuele ketenanalyse & neurofysiologie van pijn',
  },
  {
    id: 'faq-2',
    category: 'vitaliteit',
    question: 'Wat houdt het Vitaliteitstraject (Basis Fit, Lekker Fit of Premium Fit) precies in?',
    answer:
      'Het Vitaliteitstraject is bedoeld voor mensen met aanhoudende fysieke klachten, vermoeidheid of een vertraagd herstelvermogen. We starten met een uitgebreide analyse-vragenlijst en een intake van een vol uur. Daarin brengen we de balans tussen belasting en belastbaarheid, je slaapkwaliteit, ademhaling, voeding, stressniveau, immuunsysteem (zoals laaggradige ontstekingen) en ingesleten patronen in kaart. Je krijgt een helder, persoonlijk behandelplan (inclusief gericht voedings- en eventueel supplementadvies zoals magnesium of Omega-3 waar passend). Het traject is zowel in de praktijk als online te volgen.',
    scientificMechanism: 'Balans belasting/belastbaarheid, autonome zenuwstelselregulatie & herstelvermogen',
  },
  {
    id: 'faq-3',
    category: 'duursport',
    question: 'Wat zit er in het Hardloopfysiotherapie pakket (4x) bij Dorien en Michaël?',
    answer:
      'Beide therapeuten zijn zelf fanatieke hardlopers en wielrenners (en actief bij AV Triathlon in Amersfoort). Het Hardloopfysiotherapie pakket (€ 290,-) bestaat uit een uitgebreide intake van 1 uur inclusief videoanalyse van je looptechniek (zowel buiten als op de loopband), gevolgd door 3 gerichte trainingssessies van 45 minuten waarin we werken aan loopscholing, cadans, ketenstabiliteit en krachtopbouw.',
    scientificMechanism: 'Videoanalyse (buiten & loopband), loopscholing (BLT3) & duursport-specifieke kracht',
  },
  {
    id: 'faq-4',
    category: 'praktijk',
    question: 'Worden behandelingen vergoed door mijn zorgverzekeraar?',
    answer:
      'Fysiotherapie en manuele therapie worden vergoed vanuit je aanvullende verzekering bij de zorgverzekeraars waarmee wij een contract hebben. Let op: wij hebben géén contract met CZ groep (waaronder Nationale Nederlanden en Ohra), Caresq, Zorg&Zekerheid, ASR en ENO. Ben je daar verzekerd of heb je geen aanvullende verzekering, dan gelden onze transparante praktijktarieven (zoals € 68,- voor een intake incl. 1e behandeling en € 45,- voor een regulier consult fysiotherapie).',
    scientificMechanism: 'Gecontracteerde fysiotherapie & transparante praktijktarieven',
  },
  {
    id: 'faq-5',
    category: 'praktijk',
    question: 'Kan ik aan de Ruimtesonde 7 ook een behandelkamer, groepsruimte of oefenzaal huren?',
    answer:
      'Ja! Op de 1e verdieping van ons pand aan de Ruimtesonde 7 in Amersfoort (Nieuwland / Calveen) verhuren wij per dagdeel representatieve ruimtes aan (para)medici, coaches en personal trainers: behandelkamers van 16 m², een lichte cursus-/groepsruimte van 31 m² (ideaal voor yoga, pilates of mindfulness) en een compleet ingerichte oefenzaal van 65 m². Neem voor beschikbaarheid contact op via 06-14184448 of info@dorienjanse.nl.',
    scientificMechanism: 'Multidisciplinaire samenwerking & praktijkverhuur op maat',
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
        'Directe herkenning voor de 3 kerndoelgroepen (langdurige klachten, vitaliteit/herstelvermogen en duursporters) met de juiste praktijknaam en zonder overmatige focus op supplementen.',
      headline: 'Herstel bij de bron. Presteer zonder pijn. Leef met blijvende energie.',
      subheadline:
        'Dorien Janse – Persoonlijke Fysio, Training & Vitaliteit aan de Ruimtesonde 7 in Amersfoort (Nieuwland / Calveen).',
      bodyCopy: [
        'Loop je al maanden rond met een blessure die maar niet vanzelf overgaat? Merk je dat de balans tussen je belasting en belastbaarheid zoek is? Of wil je als hardloper of wielrenner sterker, efficiënter en pijnvrij presteren?',
        'Samen met collega Michaël Kornmann (Master Manueel Therapeut MSc & Hardloopfysiotherapeut) kijken wij verder dan de plek van de pijn. Door bewegingswetenschappen, Neurokinetische Therapie (NKT), manuele therapie, looptechniek én vitaliteitscoaching te combineren, pakken we de werkelijke oorzaak aan en geven we je het vertrouwen in je eigen lichaam terug.',
      ],
      ctaText: 'Plan jouw afspraak of intake (06-14184448)',
      ctaTargetPage: 'contact',
      imageAdvice:
        'Authentieke foto van Dorien en/of Michaël in actie in de oefenzaal (65 m²) aan de Ruimtesonde 7 in Amersfoort.',
    },
    {
      id: 'home-2',
      sectionNumber: 'Blok 1.2',
      sectionName: 'De 3 Strategische Pijlers',
      jouwWebElement: 'Kolommen (3x) met Afbeelding, Kop, Tekst en Knop',
      strategicGoal:
        'Heldere ingang per hulpvraag: 1) Langdurige klachten & Fysio/Manueel/NKT, 2) Het Vitaliteitstraject (Basis, Lekker & Premium Fit), 3) Hardloopfysiotherapie, PT & Running Bootcamp.',
      headline: 'Waarmee mogen wij je helpen?',
      subheadline: 'Persoonlijke aandacht, wetenschappelijke onderbouwing en sportieve praktijkervaring onder één dak.',
      bodyCopy: [
        'Kolom 1 — Langdurige Klachten, Fysio & Manuele Therapie: Waarom herstelt een klacht soms niet vanzelf? Met o.a. Neurokinetische Therapie (NKT – uniek in Amersfoort), Master Manuele Therapie, Fasciatherapie en Dry Needling sporen we de bron van jouw klacht op.',
        'Kolom 2 — Het Vitaliteitstraject (Basis, Lekker & Premium Fit): Voor wie structureel meer energie en een sterker herstelvermogen zoekt. We analyseren belasting/belastbaarheid, slaap, ademhaling, voeding, stress, het immuunsysteem (laaggradige ontstekingen) en ingesleten patronen.',
        'Kolom 3 — Hardlopen, Wielrennen, PT & Running Bootcamp: Van het 4-delige Hardloopfysiotherapie pakket (met videoanalyse buiten én op de loopband) tot Personal Training en Running Bootcamp in Amersfoort Nieuwland.',
      ],
      ctaText: 'Kies jouw route naar herstel',
      ctaTargetPage: 'vitaliteit',
      imageAdvice:
        'Drie bijpassende foto’s uit de eigen praktijk: 1) Behandeling NKT/Manueel, 2) Vitaliteitsintake aan tafel, 3) Video-loopanalyse op de loopband of buiten.',
    },
    {
      id: 'home-3',
      sectionNumber: 'Blok 1.3',
      sectionName: 'Spotlight: Het Vitaliteitstraject (Ook online mogelijk)',
      jouwWebElement: 'Strook met warme achtergrondkleur + 3 Pakketkolommen (Basis, Lekker, Premium Fit)',
      strategicGoal:
        'Positioneer het Vitaliteitstraject met de drie concrete pakketten (€ 130 / € 220 / € 370) rondom het totale herstelvermogen.',
      headline: 'Het Vitaliteitstraject: Vind de oorzaak achter aanhoudende klachten en vermoeidheid.',
      subheadline: 'Herstel de balans tussen belasting en belastbaarheid — in de praktijk of online.',
      bodyCopy: [
        'Wanneer klachten blijven terugkeren of je energieniveau achterblijft, ligt de sleutel vaak in het totale herstelvermogen van je lichaam. Hoe slaap je? Hoe adem je onder druk? Hoe reageert je immuunsysteem op voeding en stress? En welke ingesleten patronen houden je klachten onbewust in stand?',
        'Op basis van een uitgebreide analyse-vragenlijst en een intake van een vol uur maken we een concreet, persoonlijk plan (inclusief leefstijl-, ademhalings-, voedings- en waar passend ondersteunend supplementadvies).',
      ],
      bulletPoints: [
        'Pakket A – Basis Fit (€ 130,-): Uitgebreide vragenlijst + Intake (1 uur) + Persoonlijk plan.',
        'Pakket B – Lekker Fit (€ 220,-): Basis Fit + 1 vervolgconsult na 4 weken.',
        'Pakket C – Premium Fit (€ 370,-): Basis Fit + 3 vervolgconsulten na 4, 8 en 12 weken.',
      ],
      ctaText: 'Meer over het Vitaliteitstraject',
      ctaTargetPage: 'vitaliteit',
      imageAdvice:
        'Rustige foto van Dorien tijdens een coachgesprek, met focus op persoonlijke aandacht.',
    },
    {
      id: 'home-4',
      sectionNumber: 'Blok 1.4',
      sectionName: 'Kennisbank / Blogs & Echte Klantrecensies',
      jouwWebElement: 'Kolommen (3x) voor Blogs + Tekstcarrousel voor Klantrecensies',
      strategicGoal:
        'Autoriteit bewijzen voor Google en AI-zoekmachines met Doriens bestaande kennisblogs én authentieke klantervaringen.',
      headline: 'Inzichten uit de praktijk & ervaringen van cliënten',
      bodyCopy: [
        'Toon hier 3 tot 6 kaarten naar de bestaande kennisblogs (Laaggradige ontsteking, Slaap en herstel, Ademhaling en hoofdpijn, Voeding en maaltijdfrequentie, Magnesium bij hardlopers, Omega 3 voor herstel, Trainen voor de marathon) gevolgd door echte klantrecensies over NKT, loopscholing en hooikoorts-taping.',
      ],
      ctaText: 'Maak kennis met Dorien & Michaël',
      ctaTargetPage: 'over',
      imageAdvice: 'Sfeerbeelden passend bij slaap, hardlopen en ademhaling.',
    },
  ],
  fysio: [
    {
      id: 'fysio-1',
      sectionNumber: 'Blok 2.1',
      sectionName: 'Hero: Langdurige Klachten, Fysio, Manuele Therapie & NKT',
      jouwWebElement: 'Strook met achtergrondafbeelding + Introductietekst',
      strategicGoal:
        'Positioneer de unieke combinatie van Dorien (NKT, Fascia, Sportfysio) en Michaël (Master Manueel Therapeut MSc & Pijn-neurofysiologie).',
      headline: 'Waarom ontstaan klachten en waarom herstellen ze soms niet vanzelf?',
      subheadline:
        'Oorzaakgerichte Fysiotherapie, Master Manuele Therapie MSc & Neurokinetische Therapie (NKT) in Amersfoort.',
      bodyCopy: [
        'Loop je al lange tijd rond met rug-, nek-, schouder-, heup- of sportklachten? Bij Dorien Janse en Michaël Kornmann onderzoeken we niet alleen de pijnlijke plek, maar kijken we naar de volledige bewegingsketen én de biologische en fysiologische processen achter pijnervaring.',
        'Ons doel is om de daadwerkelijke blokkade op te heffen, je met positivisme weer vertrouwen te geven in je eigen lichaam en je zelfredzaam te maken — zodat je niet afhankelijk wordt van zorg.',
      ],
      ctaText: 'Plan jouw intake (€ 68,- of via aanvullende verzekering)',
      ctaTargetPage: 'contact',
      imageAdvice: 'Foto van hands-on behandeling in een van de behandelkamers (16 m²) aan de Ruimtesonde 7.',
    },
    {
      id: 'fysio-2',
      sectionNumber: 'Blok 2.2',
      sectionName: 'Onze Behandelmethoden & Specialisaties',
      jouwWebElement: 'Kolommen (2x of 3x)',
      strategicGoal:
        'Behoud en verduidelijk alle specialistische behandelvormen inclusief NKT, Manuele Therapie MSc, Fasciatherapie, Dry Needling, Ademhaling, Sportmassage en Hooikoorts-taping.',
      headline: 'Specialistische zorg afgestemd op jouw lichaam',
      bodyCopy: [
        '1. Neurokinetische Therapie (NKT): Dorien is de enige gecertificeerde NKT-fysiotherapeut in Amersfoort. Met NKT sporen we verstoorde aansturingspatronen tussen brein en spieren op die vaak zijn ontstaan na oude blessures of littekens.',
        '2. Master Manuele Therapie (MSc) & Neurofysiologie van Pijn: Michaël Kornmann is gespecialiseerd in complexe gewrichts- en wervelkolomklachten en legt helder uit hoe het pijnsysteem werkt, zodat je weer vrij en vol vertrouwen durft te bewegen.',
        '3. Fasciatherapie & Dry Needling: Zowel Dorien als Michaël zetten Dry Needling en myofasciale technieken in om diepliggende spierknopen (triggerpoints) en bindweefselverklevingen direct te ontspannen.',
        '4. Ademhalingstherapie, Medical Taping & Hooikoorts Taping: Van ademhalingsregulatie bij hoofdpijn en spanning tot ondersteunend tapen na een zweepslag/enkelverzwikking (€ 15,-) en effectieve hooikoorts-taping (2x intapen incl. tape voor € 32,-).',
      ],
      ctaText: 'Stel je vraag of maak een afspraak',
      ctaTargetPage: 'contact',
      imageAdvice: 'Close-up van NKT-spiertest, manuele mobilisatie of medical taping.',
    },
  ],
  vitaliteit: [
    {
      id: 'vit-1',
      sectionNumber: 'Blok 3.1',
      sectionName: 'Hero: Het Vitaliteitstraject (Ook online mogelijk)',
      jouwWebElement: 'Strook met afbeelding + Introductie',
      strategicGoal:
        'Focus op het totale herstelvermogen, de balans tussen belasting en belastbaarheid en het vinden van de oorzaak achter aanhoudende klachten.',
      headline: 'Het Vitaliteitstraject: Herstel de balans tussen belasting en belastbaarheid.',
      subheadline:
        'Persoonlijke vitaliteitscoaching in Amersfoort (of online) voor blijvende energie en een sterk herstelvermogen.',
      bodyCopy: [
        'Blijven fysieke klachten steeds terugkeren of merk je dat je energie en herstelvermogen tekortschieten? Vaak houden verschillende factoren elkaar onderhuids in stand: een verstoorde balans tussen belasting en belastbaarheid, oppervlakkige ademhaling, onrustige slaap, stress, voeding, een overprikkeld immuunsysteem (laaggradige ontstekingen) of diep ingesleten gedragspatronen.',
        'In het Vitaliteitstraject brengen we al deze pijlers rustig en grondig in kaart. Je krijgt inzicht in waarom jouw lichaam op de rem trapt én een haalbaar, persoonlijk stappenplan (waarbij we waar passend ook kijken naar gerichte ondersteuning met voeding of supplementen zoals magnesium of Omega-3).',
      ],
      ctaText: 'Kies jouw Vitaliteitspakket',
      ctaTargetPage: 'contact',
      imageAdvice: 'Warme, uitnodigende foto van een 1-op-1 vitaliteitsintake.',
    },
    {
      id: 'vit-2',
      sectionNumber: 'Blok 3.2',
      sectionName: 'De 3 Vitaliteitspakketten (Basis Fit, Lekker Fit, Premium Fit)',
      jouwWebElement: 'Kolommen (3x) met Pakketoverzicht',
      strategicGoal:
        'Presenteer de exacte pakketten en tarieven helder en overzichtelijk, met Pakket C (Premium Fit) als meest gekozen optie.',
      headline: 'Overzichtelijke pakketten op maat van jouw doel',
      subheadline: 'Zowel op de praktijk aan de Ruimtesonde 7 als volledig online te volgen.',
      bodyCopy: [
        'Pakket A – Basis Fit (€ 130,-): Uitgebreide analyse-vragenlijst vooraf + Intake van 1 uur + Heldere uitleg en een persoonlijk plan van aanpak.',
        'Pakket B – Lekker Fit (€ 220,-): Alles uit Basis Fit + 1 vervolgconsult ter evaluatie en bijsturing na 4 weken.',
        'Pakket C – Premium Fit (€ 370,- | Meest gekozen voor blijvende verandering): Alles uit Basis Fit + 3 vervolgconsulten ter evaluatie na 4, 8 en 12 weken, zodat nieuwe gewoontes écht beklijven.',
      ],
      ctaText: 'Meld je aan voor het Vitaliteitstraject',
      ctaTargetPage: 'contact',
      imageAdvice: 'Overzichtelijke weergave van de 3 pakketten met duidelijke vinkjes.',
    },
  ],
  duursport: [
    {
      id: 'duur-1',
      sectionNumber: 'Blok 4.1',
      sectionName: 'Hero: Hardloopfysiotherapie, Wielrennen, PT & Running Bootcamp',
      jouwWebElement: 'Strook met sportfoto + Introductie',
      strategicGoal:
        'Benadruk dat zowel Dorien als Michaël zelf fanatieke hardlopers en wielrenners zijn (AV Triathlon Amersfoort) en de geblesseerde duursporter van binnenuit begrijpen.',
      headline: 'Door duursporters, voor duursporters: pijnvrij hardlopen, wielrennen en kracht opbouwen.',
      subheadline:
        'Hardloopfysiotherapie (videoanalyse buiten én op de loopband), Personal Training & Running Bootcamp in Amersfoort Nieuwland.',
      bodyCopy: [
        'Zowel Dorien (voormalig fanatiek schaatsster en wielrenster op landelijk niveau, nu marathonloopster) als Michaël (Hardloopfysiotherapeut BLT3, hardlooptrainer bij AV Triathlon, wielrenner en fitnesser) kennen de passie én de frustratie van een duursportblessure uit eigen ervaring.',
        'Wij helpen hardlopers, ultralopers en wielrenners niet met het advies om "maar te stoppen met sporten", maar analyseren je techniek en belastbaarheid zodat je sterker terugkomt.',
      ],
      ctaText: 'Boek het Hardloopfysiotherapie pakket of een gratis proefles Bootcamp',
      ctaTargetPage: 'contact',
      imageAdvice: 'Actiefoto van video-loopanalyse op de loopband in de oefenzaal én buiten in Amersfoort.',
    },
    {
      id: 'duur-2',
      sectionNumber: 'Blok 4.2',
      sectionName: 'Het Specifieke Sport- & Trainingsaanbod',
      jouwWebElement: 'Kolommen (2x2 Grid)',
      strategicGoal:
        'Exacte weergave van het Hardloopfysiotherapie pakket (€ 290,-), Running Bootcamp (ma/do gemengd, vr vrouwen & Moeder/Kind) en Personal Training / Small Group.',
      headline: 'Gerichte begeleiding voor jouw sportieve doel',
      bodyCopy: [
        '1. Hardloopfysiotherapie pakket (4x – € 290,-): Bestaat uit een uitgebreide intake van 1 uur, videoanalyse van je loopstijl (zowel buiten als op de loopband) + 3 gerichte trainingen van 45 minuten gericht op loopscholing, techniek en kracht.',
        '2. Running Bootcamp Amersfoort Nieuwland (Gratis proefles!): Buiten trainen met veel aandacht voor looptechniek en kracht. Op maandag en donderdag voor mannen & vrouwen; op vrijdag speciaal voor vrouwen (ook Moeder & Kind bootcamp mogelijk). Keuze uit knipkaart (10x € 100,-), 3-maanden- of jaarabonnement.',
        '3. Personal Training (1:1) & Small Group (max. 4 pers.): Individuele intake (€ 75,-), PT van 30 min (€ 50,-) of 45 min (€ 75,-), of train samen in een Small Group van maximaal 4 personen (knipkaart 10x 30 min voor € 185,-). Ook een knipkaart voor 12x zelfstandig trainen in onze oefenzaal (€ 85,-) is mogelijk.',
        '4. Sportmassage (Ook als cadeaubon!): Voor optimaal spierherstel bij zware trainingsblokken: 30 minuten (€ 39,-), 45 minuten (€ 58,50) of een voordelige knipkaart van 10x 30 minuten (€ 375,-).',
      ],
      ctaText: 'Meld je aan voor Loopanalyse, PT of Gratis Proefles Bootcamp',
      ctaTargetPage: 'contact',
      imageAdvice: 'Foto van de oefenzaal (65 m²) met loopband en krachtapparatuur + buitenfoto Running Bootcamp.',
    },
  ],
  over: [
    {
      id: 'over-1',
      sectionNumber: 'Blok 5.1',
      sectionName: 'Ons Team: Dorien Janse & Michaël Kornmann',
      jouwWebElement: '2 Kolommen met Portretfoto, Biografie, Specialisaties en BIG-nummers',
      strategicGoal:
        'Presenteer zowel Dorien als Michaël uitgebreid met hun exacte achtergrond, sportverleden bij AV Triathlon en BIG/AGB-registraties.',
      headline: 'Maak kennis met ons team aan de Ruimtesonde 7',
      subheadline:
        'Twee bevlogen specialisten en duursporters met één gezamenlijk doel: jou duurzaam en zelfredzaam laten herstellen.',
      bodyCopy: [
        'Dorien Janse (Sportfysiotherapeut, Bewegingswetenschapper, Vitaliteitscoach & Trainer | BIG 59064209704 | AGB 4108710): Startte in 2015 haar eigen praktijk na 10 jaar ervaring in een grote praktijk. Als enige NKT-gecertificeerde fysio in Amersfoort combineert zij Neurokinetische Therapie, Fasciatherapie, Dry Needling, Ademhaling, Looptechniek en Vitaliteitscoaching.',
        'Michaël Kornmann (Fysiotherapeut, Master Manueel Therapeut MSc & Hardloopfysiotherapeut BLT3 | BIG 89920543304 | michael@dorienjanse.nl): Werkzaam als fysiotherapeut sinds 2016, gespecialiseerd in Dry Needling en sinds 2020 Master Musculoskeletaal Manueel Therapeut. Werkt sinds begin 2025 samen met Dorien en is expert in sportklachten en de neurofysiologie van pijn.',
      ],
      ctaText: 'Plan een afspraak bij Dorien of Michaël',
      ctaTargetPage: 'contact',
      imageAdvice: 'Twee professionele, toegankelijke portretfoto’s van Dorien Janse en Michaël Kornmann.',
    },
    {
      id: 'over-2',
      sectionNumber: 'Blok 5.2',
      sectionName: 'Officiële Tarieven 2026 & Vergoedingen Zorgverzekeraars',
      jouwWebElement: 'Tabel-elementen per categorie (Vitaliteit, Fysio/Manueel, PT/Bootcamp, Sportmassage)',
      strategicGoal:
        'Volledige transparantie over gecontracteerde zorgverzekeraars en de exacte tarieven voor 2026.',
      headline: 'Tarieven & Vergoedingen',
      subheadline:
        'Vergoeding vanuit de aanvullende verzekering bij gecontracteerde zorgverzekeraars.',
      bodyCopy: [
        'Wij hebben contracten met het merendeel van de Nederlandse zorgverzekeraars (vergoeding vanuit je aanvullende verzekering). Let op: wij hebben géén contract met CZ groep (Nationale Nederlanden, Ohra), Caresq, Zorg&Zekerheid, ASR en ENO.',
        'Plaats hier de 4 overzichtelijke tarieftabellen voor A. Vitaliteitstraject (€ 130 / € 220 / € 370), B. Fysiotherapie & Manuele Therapie (Intake € 68, Consult Fysio € 45, Manueel € 56, Plus consult € 68, Hardlooppakket 4x € 290), C. Personal Training & Running Bootcamp en D. Sportmassage (€ 39 / € 58,50).',
      ],
      ctaText: 'Neem contact op bij vragen over je vergoeding',
      ctaTargetPage: 'contact',
      imageAdvice: 'Geen afbeelding nodig; houd de tabellen rustig en overzichtelijk.',
    },
  ],
  contact: [
    {
      id: 'contact-1',
      sectionNumber: 'Blok 6.1',
      sectionName: 'Contactgegevens, Openingstijden, Praktijkverhuur & Afspraakformulier',
      jouwWebElement: 'Kolommen (2x): Links Contact, Openingstijden & Verhuur, Rechts Formulier & Kaart',
      strategicGoal:
        'Exacte contactgegevens (06-14184448, info@dorienjanse.nl, michael@dorienjanse.nl), openingstijden, AGB/KvK-nummers én informatie over verhuur van behandelkamers, groepsruimte en oefenzaal.',
      headline: 'Contact & Afspraak Maken',
      subheadline:
        'Dorien Janse – Persoonlijke Fysio, Training & Vitaliteit | Ruimtesonde 7, 3824 MZ Amersfoort',
      bodyCopy: [
        'Wil je een afspraak inplannen bij Dorien of Michaël, starten met het Vitaliteitstraject of meedoen met een gratis proefles Running Bootcamp? Bel of WhatsApp naar 06-14184448 of stuur een e-mail.',
        'Samenwerking & Verhuur praktijkruimte: Op de 1e verdieping van Ruimtesonde 7 zijn behandelkamers (16 m²), een cursus-/groepsruimte voor o.a. yoga, pilates of mindfulness (31 m²) en een compleet ingerichte oefenzaal (65 m²) per dagdeel te huur voor (para)medici en personal trainers.',
      ],
      bulletPoints: [
        'Adres: Ruimtesonde 7, 3824 MZ Amersfoort (Nieuwland / Calveen)',
        'Telefoon & WhatsApp: 06-14184448',
        'E-mail algemeen / Dorien: info@dorienjanse.nl | E-mail Michaël: michael@dorienjanse.nl',
        'Openingstijden: Ma 09.00-16.00 | Di 08.00-16.00 | Wo 08.00-16.00 | Do 08.00-17.00 | Vr op afspraak',
        'Praktijk AGB: 4094632 | KvK: 64964744 | BIG Dorien: 59064209704 | BIG Michaël: 89920543304',
      ],
      ctaText: 'Verstuur bericht',
      imageAdvice:
        'JouwWeb Kaart-element op Ruimtesonde 7, 3824 MZ Amersfoort + foto’s van de behandelkamer (16 m²), groepsruimte (31 m²) en oefenzaal (65 m²).',
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
      "name": "Dorien Janse – Persoonlijke Fysio, Training & Vitaliteit",
      "url": "https://www.dorienjanse.nl",
      "telephone": "+31614184448",
      "email": "info@dorienjanse.nl",
      "taxID": "64964744",
      "identifier": [
        { "@type": "PropertyValue", "name": "Praktijk AGB-code", "value": "4094632" },
        { "@type": "PropertyValue", "name": "KvK-nummer", "value": "64964744" }
      ],
      "priceRange": "€€",
      "description": "Praktijk voor persoonlijke fysiotherapie, sportfysiotherapie, Master Manuele Therapie MSc, Neurokinetische Therapie (NKT), vitaliteitscoaching, hardloopfysiotherapie en Running Bootcamp aan Ruimtesonde 7 in Amersfoort (Nieuwland/Calveen).",
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
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "16:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "08:00", "closes": "16:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "08:00", "closes": "16:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "08:00", "closes": "17:00" }
      ],
      "areaServed": [
        { "@type": "City", "name": "Amersfoort" },
        { "@type": "Place", "name": "Amersfoort Nieuwland" },
        { "@type": "Place", "name": "Calveen" },
        { "@type": "Place", "name": "Hoogland" },
        { "@type": "Place", "name": "Vathorst" }
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Dorien Janse",
          "jobTitle": "Sportfysiotherapeut, Bewegingswetenschapper, Vitaliteitscoach & Trainer",
          "email": "info@dorienjanse.nl",
          "identifier": [
            { "@type": "PropertyValue", "name": "BIG-nummer", "value": "59064209704" },
            { "@type": "PropertyValue", "name": "AGB-code", "value": "4108710" }
          ],
          "knowsAbout": [
            "Sportfysiotherapie",
            "Bewegingswetenschappen",
            "Neurokinetische Therapie (NKT)",
            "Fasciatherapie",
            "Dry Needling",
            "Ademhaling en Vitaliteitscoaching",
            "Hardloopanalyse en Looptechniek"
          ]
        },
        {
          "@type": "Person",
          "name": "Michaël Kornmann",
          "jobTitle": "Fysiotherapeut, Master Manueel Therapeut MSc & Hardloopfysiotherapeut BLT3",
          "email": "michael@dorienjanse.nl",
          "identifier": [
            { "@type": "PropertyValue", "name": "BIG-nummer", "value": "89920543304" }
          ],
          "knowsAbout": [
            "Master Musculoskeletaal Manuele Therapie (MSc)",
            "Hardloopfysiotherapie (BLT3)",
            "Neurofysiologie van pijn",
            "Dry Needling"
          ]
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Behandelingen, Vitaliteitspakketten & Trainingen",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Vitaliteitstraject Pakket A – Basis Fit",
            "price": "130.00",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "name": "Vitaliteitstraject Pakket B – Lekker Fit",
            "price": "220.00",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "name": "Vitaliteitstraject Pakket C – Premium Fit",
            "price": "370.00",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "name": "Hardloopfysiotherapie pakket (4x incl. videoanalyse buiten en op loopband)",
            "price": "290.00",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "name": "Intake Fysiotherapie incl. 1e behandeling",
            "price": "68.00",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "name": "Consult Manuele Therapie MSc",
            "price": "56.00",
            "priceCurrency": "EUR"
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
          "name": "Waarom herstelt een langdurige klacht of sportblessure soms niet vanzelf?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Omdat de plek waar je pijn voelt vaak compenseert voor een schakelfout elders in het lichaam. Dorien Janse (als enige fysio in Amersfoort gecertificeerd in Neurokinetische Therapie - NKT) en Michaël Kornmann (Master Manueel Therapeut MSc) sporen de achterliggende oorzaak op in je zenuwstelsel, gewrichten en bindweefsel."
          }
        },
        {
          "@type": "Question",
          "name": "Wat houdt het Vitaliteitstraject (Basis Fit, Lekker Fit of Premium Fit) in?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Het Vitaliteitstraject richt zich op je totale herstelvermogen en het vinden van de oorzaak achter aanhoudende klachten: de balans tussen belasting en belastbaarheid, slaap, ademhaling, voeding, stress, het immuunsysteem (laaggradige ontstekingen) en ingesleten patronen. Keuze uit Basis Fit (€ 130,-), Lekker Fit (€ 220,-) en Premium Fit (€ 370,-), zowel in de praktijk als online."
          }
        },
        {
          "@type": "Question",
          "name": "Wat zit er in het Hardloopfysiotherapie pakket (4x) bij Dorien en Michaël?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Het Hardloopfysiotherapie pakket (€ 290,-) bestaat uit een intake van 1 uur, videoanalyse (zowel buiten als op de loopband) en 3 gerichte trainingen van 45 minuten voor looptechniek, loopscholing en kracht."
          }
        }
      ]
    }
  ]
}
</script>`;
