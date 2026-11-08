import { PageId, PageSeoMeta, JSON_LD_SCHEMA_STRING } from '../data/siteContent';

export interface KeuzewijzerInput {
  primaryChallenge: 'pain_chronic' | 'energy_recovery' | 'endurance_performance';
  duration: 'recent' | 'months' | 'years';
  systemicSigns: 'none' | 'slow_recovery' | 'fatigue_inflammation';
}

export interface TrajectoryRecommendation {
  recommendedPage: PageId;
  badgeText: string;
  title: string;
  subtitle: string;
  explanation: string;
  keyElements: string[];
  ctaLabel: string;
  includesOmegaCheck: boolean;
}

export interface IntakeFormInput {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export interface IntakeValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof IntakeFormInput, string>>;
}

export function validateSeoMetadata(pages: PageSeoMeta[]): {
  allValid: boolean;
  violations: string[];
} {
  const violations: string[] = [];

  for (const page of pages) {
    if (page.pageTitle.length === 0 || page.pageTitle.length > 60) {
      violations.push(
        `Page "${page.pageId}" title length is ${page.pageTitle.length} (must be 1..60)`
      );
    }
    if (page.metaDescription.length === 0 || page.metaDescription.length > 155) {
      violations.push(
        `Page "${page.pageId}" metaDescription length is ${page.metaDescription.length} (must be 1..155)`
      );
    }
  }

  return {
    allValid: violations.length === 0,
    violations,
  };
}

export function recommendTrajectory(input: KeuzewijzerInput): TrajectoryRecommendation {
  // Strategic Pillar 1 (Kroonjuweel): Vitaliteitstraject & Celgezondheid
  if (
    input.primaryChallenge === 'energy_recovery' ||
    input.systemicSigns === 'fatigue_inflammation' ||
    (input.primaryChallenge === 'pain_chronic' &&
      input.duration === 'years' &&
      input.systemicSigns === 'slow_recovery')
  ) {
    return {
      recommendedPage: 'vitaliteit',
      badgeText: 'Kroonjuweel Advies · Hoogste Duurzame Impact',
      title: 'Het Integrale Vitaliteitstraject & Celgezondheid (incl. Omega-3 Check)',
      subtitle: 'Herstel je fundament van binnenuit én los fysieke blokkades op.',
      explanation:
        'Jouw antwoorden wijzen erop dat je lichaam niet alleen lokaal overbelast is, maar op celniveau moeite heeft om ontstekingen uit te zetten en energie op te bouwen. Door fysiotherapeutische ketenbehandeling te combineren met een vingerprik-bloedtest (Omega-6/Omega-3 ratio) en leefstijlcoaching pakken we de werkelijke rem op jouw herstel aan.',
      keyElements: [
        'Laboratorium Vetzurentest (Omega-3 index & celwanddoorlaatbaarheid)',
        'Integrale analyse van slaap, ademhaling, stressbelasting en voeding',
        'Oorzaakgerichte behandeling van sluimerende pees- of spierklachten',
      ],
      ctaLabel: 'Bekijk het Vitaliteitstraject',
      includesOmegaCheck: true,
    };
  }

  // Strategic Pillar 3: Duursport (Hardlopen & Wielrennen)
  if (input.primaryChallenge === 'endurance_performance') {
    return {
      recommendedPage: 'duursport',
      badgeText: 'Duursport & Bewegingswetenschap',
      title: 'Biomechanische Loopanalyse & Duursport-Krachttraject',
      subtitle: 'Efficiënter bewegen, hogere loopeconomie en pijnvrij presteren.',
      explanation:
        'Bij hardlopen en wielrennen telt elke kleine schakelfout in heupstabiliteit, pasfrequentie of rompcontrole duizenden keren op. We brengen je bewegingspatroon op video én op de behandelbank in kaart en vertalen dit naar gerichte techniekaanpassingen en krachttraining.',
      keyElements: [
        'Video-loopanalyse (cadans, grondcontact, heup- en knie-uitlijning)',
        'Functioneel ketenonderzoek door Bewegingswetenschapper & Sportfysio',
        'Sportspecifiek krachtschema of 1-op-1 Personal Training in Amersfoort',
      ],
      ctaLabel: 'Bekijk Hardlopen, Wielrennen & Training',
      includesOmegaCheck: input.systemicSigns === 'slow_recovery',
    };
  }

  // Strategic Pillar 2: Langdurige / Terugkerende klachten (Oorzaakgerichte Fysio)
  return {
    recommendedPage: 'fysio',
    badgeText: 'Oorzaakgerichte Diagnostiek',
    title: 'Oorzaakgerichte Sportfysiotherapie (NKT, Fascia & Dry Needling)',
    subtitle: 'Wij behandelen niet het slachtoffer (de pijnplek), maar sporen de dader op.',
    explanation:
      'Omdat jouw klacht steeds terugkeert of al langer aanhoudt, heeft je zenuwstelsel een compensatiepatroon aangeleerd. Met Neurokinetische Therapie (NKT) en Fasciatherapie testen we welke spierketen niet goed schakelt en herstellen we de natuurlijke samenwerking.',
    keyElements: [
      '60 minuten 1-op-1 intake, ketenonderzoek en eerste behandeling',
      'Neurokinetische Therapie (NKT) om foutieve brein-spier aansturing te resetten',
      'Fasciatherapie en Dry Needling voor directe ontspanning van de keten',
    ],
    ctaLabel: 'Bekijk Langdurige Klachten & Fysio',
    includesOmegaCheck: false,
  };
}

export function validateIntakeForm(input: IntakeFormInput): IntakeValidationResult {
  const errors: Partial<Record<keyof IntakeFormInput, string>> = {};

  if (!input.name || input.name.trim().length < 2) {
    errors.name = 'Vul je voor- en achternaam in (minimaal 2 tekens).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email = 'Vul een geldig e-mailadres in.';
  }

  const cleanPhone = (input.phone || '').replace(/[\s\-()]/g, '');
  if (!cleanPhone || cleanPhone.length < 9 || !/^\+?[0-9]{9,14}$/.test(cleanPhone)) {
    errors.phone = 'Vul een geldig telefoonnummer in (bijv. 06 12345678).';
  }

  if (!input.interest || input.interest.trim().length === 0) {
    errors.interest = 'Kies waar je belangstelling naar uitgaat.';
  }

  if (!input.message || input.message.trim().length < 10) {
    errors.message = 'Omschrijf kort je hulpvraag of doel (minimaal 10 tekens).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function generateStandaloneHtmlPrototype(): string {
  return `<!DOCTYPE html>
<html lang="nl" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dorien Janse | Fysio, Vitaliteit &amp; Duursport Amersfoort</title>
  <meta name="description" content="Oorzaakgerichte sportfysiotherapie, vitaliteit (Omega-3) en loopanalyse in Amersfoort Nieuwland &amp; Calveen door bewegingswetenschapper Dorien Janse." />
  <meta property="og:title" content="Dorien Janse – Oorzaakgericht Herstel, Vitaliteit &amp; Sportperformance" />
  <meta property="og:description" content="Loop je vast met een terugkerende blessure of een laag energieniveau? Ontdek de integrale aanpak van bewegingswetenschapper en sportfysio Dorien Janse." />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="nl_NL" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #FAF8F5; color: #172620; }
    h1, h2, .font-serif-display { font-family: 'Fraunces', Georgia, serif; text-wrap: balance; }
  </style>
  ${JSON_LD_SCHEMA_STRING}
</head>
<body class="antialiased selection:bg-[#184E3B] selection:text-white min-h-screen flex flex-col">
  <!-- TOP NAVIGATION -->
  <header class="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E0D5]">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
      <button type="button" onclick="showPage('home')" class="text-xl font-bold tracking-tight text-[#14332A] font-serif-display whitespace-nowrap shrink-0 text-left">
        Dorien Janse
      </button>
      <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-[#3F4E47]">
        <button type="button" onclick="showPage('home')" data-nav="home" class="nav-btn text-[#14332A] font-semibold border-b-2 border-[#184E3B] py-1 whitespace-nowrap">Home</button>
        <button type="button" onclick="showPage('fysio')" data-nav="fysio" class="nav-btn hover:text-[#14332A] border-b-2 border-transparent py-1 transition-colors whitespace-nowrap">Langdurige Klachten &amp; Fysio</button>
        <button type="button" onclick="showPage('vitaliteit')" data-nav="vitaliteit" class="nav-btn hover:text-[#14332A] border-b-2 border-transparent py-1 transition-colors whitespace-nowrap">Vitaliteit &amp; Leefstijl</button>
        <button type="button" onclick="showPage('duursport')" data-nav="duursport" class="nav-btn hover:text-[#14332A] border-b-2 border-transparent py-1 transition-colors whitespace-nowrap">Hardlopen &amp; Wielrennen</button>
        <button type="button" onclick="showPage('over')" data-nav="over" class="nav-btn hover:text-[#14332A] border-b-2 border-transparent py-1 transition-colors whitespace-nowrap">Over Dorien &amp; Werkwijze</button>
      </nav>
      <div class="shrink-0">
        <button type="button" onclick="showPage('contact')" class="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#184E3B] hover:bg-[#123B2D] rounded-lg transition-colors whitespace-nowrap">
          Plan persoonlijke intake
        </button>
      </div>
    </div>
    <!-- Mobile & Quick Page Bar -->
    <div class="bg-[#EFECE4] border-t border-[#DFD9CC] px-6 py-2 flex items-center gap-2 overflow-x-auto text-xs">
      <span class="font-semibold text-[#14332A] shrink-0">Pagina's:</span>
      <button type="button" onclick="showPage('home')" class="px-2.5 py-1 rounded bg-[#14332A] text-white shrink-0" data-pill="home">1. Home</button>
      <button type="button" onclick="showPage('fysio')" class="px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0" data-pill="fysio">2. Klachten &amp; Fysio</button>
      <button type="button" onclick="showPage('vitaliteit')" class="px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0" data-pill="vitaliteit">3. Vitaliteit &amp; Leefstijl</button>
      <button type="button" onclick="showPage('duursport')" class="px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0" data-pill="duursport">4. Hardlopen &amp; Wielrennen</button>
      <button type="button" onclick="showPage('over')" class="px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0" data-pill="over">5. Over Dorien &amp; Tarieven</button>
      <button type="button" onclick="showPage('contact')" class="px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0" data-pill="contact">6. Contact &amp; Afspraak</button>
    </div>
  </header>

  <main id="top" class="flex-1">
    <!-- PAGE 1: HOME -->
    <div id="page-home" class="page-section">
      <section class="max-w-7xl mx-auto px-6 pt-12 pb-16 lg:py-20">
        <div class="grid lg:grid-cols-12 gap-12 items-stretch">
          <div class="lg:col-span-7 flex flex-col justify-center">
            <p class="text-xs font-medium tracking-wide text-[#5B6B63] mb-4">
              Sportfysiotherapeut MSc · Bewegingswetenschapper · Vitaliteitscoach · Amersfoort Nieuwland &amp; Calveen
            </p>
            <h1 class="text-4xl sm:text-5xl lg:text-[3.35rem] leading-[1.12] font-semibold text-[#14332A] mb-6">
              Herstel bij de bron. Presteer zonder pijn. Leef met blijvende energie.
            </h1>
            <p class="text-base sm:text-lg text-[#3F4E47] leading-relaxed mb-8 max-w-2xl">
              Loop je al maanden rond met een blessure die telkens terugkeert? Merk je dat je lichaam trager herstelt en je energieniveau achterblijft? Of wil je als hardloper of wielrenner sterker en blessurevrij presteren? Aan de Ruimtesonde 7 in Amersfoort kijken we verder dan het symptoom: van ketenanalyse tot celgezondheid.
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <button type="button" onclick="showPage('contact')" class="px-6 py-3.5 bg-[#184E3B] hover:bg-[#123B2D] text-white font-semibold rounded-lg transition-colors text-sm">
                Plan jouw persoonlijke intake
              </button>
              <button type="button" onclick="showPage('vitaliteit')" class="px-6 py-3.5 border border-[#CBD2C9] hover:border-[#184E3B] text-[#14332A] font-medium rounded-lg transition-colors text-sm">
                Ontdek het Vitaliteitstraject
              </button>
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="h-full min-h-[360px] rounded-2xl bg-[#14332A] text-white p-8 flex flex-col justify-between">
              <div>
                <p class="text-xs text-[#A9C6BA] mb-2">Praktijk Amersfoort · Ruimtesonde 7</p>
                <h2 class="text-2xl font-semibold text-white mb-3">Waarom een integrale blik het verschil maakt</h2>
                <p class="text-sm text-[#DCE7E2] leading-relaxed">
                  De plek waar je pijn voelt, is zelden de werkelijke oorzaak. Door bewegingswetenschappen te combineren met Neurokinetische Therapie, Fasciatherapie én celgezondheid (Omega-3 vetzurenbalans), halen we de rem van jouw herstel.
                </p>
              </div>
              <div class="pt-6 mt-6 border-t border-[#264D40] grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p class="font-semibold text-[#E8B878]">60 min 1-op-1</p>
                  <p class="text-xs text-[#A9C6BA]">Volledige aandacht zonder haast</p>
                </div>
                <div>
                  <p class="font-semibold text-[#E8B878]">Geen verwijsbrief</p>
                  <p class="text-xs text-[#A9C6BA]">Gratis parkeren voor de deur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3 STRATEGISCHE PIJLERS -->
      <section class="bg-[#F3EFE6] py-20 border-y border-[#E5E0D5]">
        <div class="max-w-7xl mx-auto px-6">
          <div class="max-w-3xl mb-12">
            <p class="text-xs font-medium text-[#5B6B63] mb-2">Drie specialismen onder één dak</p>
            <h2 class="text-3xl sm:text-4xl font-semibold text-[#14332A] mb-4">Waarmee mag ik je op weg helpen?</h2>
            <p class="text-base text-[#3F4E47]">Of je nu eindelijk van een slepende klacht af wilt, je energiepeil op celniveau wilt herstellen of je looptechniek wilt verfijnen.</p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <article class="bg-[#FAF8F5] rounded-xl p-8 border border-[#E5E0D5] flex flex-col justify-between">
              <div>
                <p class="text-xs text-[#5B6B63] mb-3">01 · Oorzaakgerichte Fysio</p>
                <h3 class="text-xl font-semibold text-[#14332A] mb-3">Langdurige &amp; Terugkerende Klachten</h3>
                <p class="text-sm text-[#3F4E47] leading-relaxed mb-6">
                  Voor iedereen die "alles al geprobeerd heeft". Met Neurokinetische Therapie (NKT), Fasciatherapie, manuele technieken en Dry Needling sporen we op waarom jouw zenuwstelsel en bindweefsel blijven compenseren.
                </p>
              </div>
              <button type="button" onclick="showPage('fysio')" class="text-left text-sm font-semibold text-[#184E3B] hover:underline">Bekijk Klachten &amp; Fysio →</button>
            </article>

            <article class="bg-[#14332A] text-white rounded-xl p-8 flex flex-col justify-between">
              <div>
                <p class="text-xs text-[#A9C6BA] mb-3">02 · Kroonjuweel voor Duurzaam Herstel</p>
                <h3 class="text-xl font-semibold text-white mb-3">Het Vitaliteitstraject &amp; Celgezondheid</h3>
                <p class="text-sm text-[#DCE7E2] leading-relaxed mb-6">
                  Herstel begint op celniveau. We meten via een vingerprik-bloedtest jouw Omega-6/Omega-3 balans (laaggradige ontstekingen) en optimaliseren je slaap, ademhaling, voeding en fysieke belastbaarheid.
                </p>
              </div>
              <button type="button" onclick="showPage('vitaliteit')" class="text-left text-sm font-semibold text-[#E8B878] hover:underline">Start jouw Vitaliteitstraject →</button>
            </article>

            <article class="bg-[#FAF8F5] rounded-xl p-8 border border-[#E5E0D5] flex flex-col justify-between">
              <div>
                <p class="text-xs text-[#5B6B63] mb-3">03 · Duursport &amp; Kracht</p>
                <h3 class="text-xl font-semibold text-[#14332A] mb-3">Hardlopen, Wielrennen &amp; Training</h3>
                <p class="text-sm text-[#3F4E47] leading-relaxed mb-6">
                  Van biomechanische video-loopanalyse en gerichte ketenkracht voor wielrenners tot 1-op-1 Personal Training en wekelijkse Bootcamp in Amersfoort Nieuwland.
                </p>
              </div>
              <button type="button" onclick="showPage('duursport')" class="text-left text-sm font-semibold text-[#184E3B] hover:underline">Boek Loopanalyse of Training →</button>
            </article>
          </div>
        </div>
      </section>

      <!-- GEO FAQ -->
      <section class="py-20">
        <div class="max-w-4xl mx-auto px-6">
          <h2 class="text-3xl font-semibold text-[#14332A] mb-8">Veelgestelde vragen (Kennisbank &amp; Werkwijze)</h2>
          <div class="space-y-4">
            <details class="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-6" open>
              <summary class="font-semibold text-[#14332A] cursor-pointer">Waarom herstelt mijn hardloopblessure of langdurige klacht niet met rust?</summary>
              <p class="mt-3 text-sm text-[#3F4E47] leading-relaxed">Omdat de plek waar je pijn voelt bijna nooit de daadwerkelijke oorzaak is. Met Neurokinetische Therapie (NKT) en Fasciatherapie sporen we de oorspronkelijke schakelfout in het zenuwstelsel en bindweefsel op, zodat het overbelaste weefsel eindelijk écht kan herstellen.</p>
            </details>
            <details class="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-6">
              <summary class="font-semibold text-[#14332A] cursor-pointer">Wat is het verband tussen celgezondheid, Omega-3 en peesherstel?</summary>
              <p class="mt-3 text-sm text-[#3F4E47] leading-relaxed">Herstel van weefsel vraagt om een gecontroleerde ontstekingsreactie die op tijd weer wordt uitgezet. Bij een verstoorde Omega-6/Omega-3 balans (&gt;3:1) verkeert het lichaam in laaggradige ontsteking. In het Vitaliteitstraject meten we je vetzurenstatus via een bloedtest en herstellen we je celgezondheid van binnenuit.</p>
            </details>
          </div>
        </div>
      </section>
    </div>

    <!-- PAGE 2: LANGDURIGE KLACHTEN & FYSIO -->
    <div id="page-fysio" class="page-section hidden max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div class="max-w-3xl">
        <p class="text-xs text-[#5B6B63] mb-2">Oorzaakgerichte Sportfysiotherapie · Amersfoort Nieuwland &amp; Calveen</p>
        <h1 class="text-4xl font-semibold text-[#14332A] mb-4">Waarom jouw klacht steeds terugkomt — en hoe we die cirkel wél doorbreken.</h1>
        <p class="text-base text-[#3F4E47] leading-relaxed">De plek waar je pijn voelt, is vrijwel altijd het slachtoffer van een schakelfout elders in de keten. Wij combineren Neurokinetische Therapie (NKT), Fasciatherapie, Manuele technieken, Dry Needling en Sportmassage in ruime 1-op-1 sessies.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-6">
          <h3 class="font-semibold text-[#14332A] mb-2">01. Neurokinetische Therapie (NKT)</h3>
          <p class="text-sm text-[#3F4E47]">Reset foutieve brein-spier aansturingspatronen die zijn ontstaan na oude blessures, vallen of littekens.</p>
        </div>
        <div class="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-6">
          <h3 class="font-semibold text-[#14332A] mb-2">02. Fasciatherapie</h3>
          <p class="text-sm text-[#3F4E47]">Maakt verklevingen in de driedimensionale bindweefselketens vrij zodat trekkende pijn direct afneemt.</p>
        </div>
        <div class="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-6">
          <h3 class="font-semibold text-[#14332A] mb-2">03. Dry Needling &amp; Manueel</h3>
          <p class="text-sm text-[#3F4E47]">Ontspant diepliggende myofasciale triggerpoints en herstelt natuurlijke gewrichtsmobiliteit.</p>
        </div>
      </div>
      <button type="button" onclick="showPage('contact')" class="px-6 py-3.5 bg-[#184E3B] text-white font-semibold rounded-lg text-sm">Plan een oorzaakgerichte intake (60 min)</button>
    </div>

    <!-- PAGE 3: VITALITEIT & LEEFSTIJL -->
    <div id="page-vitaliteit" class="page-section hidden max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div class="max-w-3xl">
        <p class="text-xs text-[#5B6B63] mb-2">Het Kroonjuweel · Vitaliteitscoaching &amp; Celgezondheid Amersfoort</p>
        <h1 class="text-4xl font-semibold text-[#14332A] mb-4">Het Vitaliteitstraject: Duurzame energie en weefselherstel beginnen op celniveau.</h1>
        <p class="text-base text-[#3F4E47] leading-relaxed">Met een objectieve laboratorium-bloedtest meten we jouw Omega-6/Omega-3 balans en celwanddoorlaatbaarheid. Gedurende 120 dagen optimaliseren we voeding, suppletie, slaap, ademhaling en belastbaarheid.</p>
      </div>
      <button type="button" onclick="showPage('contact')" class="px-6 py-3.5 bg-[#184E3B] text-white font-semibold rounded-lg text-sm">Vraag een Vitaliteits-intake aan</button>
    </div>

    <!-- PAGE 4: HARDLOPEN, WIELRENNEN & TRAINING -->
    <div id="page-duursport" class="page-section hidden max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div class="max-w-3xl">
        <p class="text-xs text-[#5B6B63] mb-2">Duursport &amp; Bewegingswetenschap · Amersfoort Nieuwland</p>
        <h1 class="text-4xl font-semibold text-[#14332A] mb-4">Slimmer trainen, efficiënter bewegen en pijnvrij presteren.</h1>
        <p class="text-base text-[#3F4E47] leading-relaxed">Van biomechanische video-loopanalyse en wielrenspecifieke ketenkracht tot 1-op-1 Personal Training en wekelijkse Bootcamp in Amersfoort Nieuwland (woensdagochtend 09:00 - 10:00 uur).</p>
      </div>
      <button type="button" onclick="showPage('contact')" class="px-6 py-3.5 bg-[#184E3B] text-white font-semibold rounded-lg text-sm">Boek jouw Video-Loopanalyse of Proefles</button>
    </div>

    <!-- PAGE 5: OVER DORIEN & WERKWIJZE -->
    <div id="page-over" class="page-section hidden max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div class="max-w-3xl">
        <p class="text-xs text-[#5B6B63] mb-2">Over Dorien Janse · Ruimtesonde 7 Amersfoort</p>
        <h1 class="text-4xl font-semibold text-[#14332A] mb-4">Bewegingswetenschapper, Sportfysio MSc, Trainer &amp; Vitaliteitscoach.</h1>
        <p class="text-base text-[#3F4E47] leading-relaxed">Om volledige 1-op-1 aandacht (45 tot 60 minuten per sessie) te bieden, werkt de praktijk bewust contractvrij. Je ontvangt een factuur die je kunt indienen bij je aanvullende zorgverzekering.</p>
      </div>
      <button type="button" onclick="showPage('contact')" class="px-6 py-3.5 bg-[#184E3B] text-white font-semibold rounded-lg text-sm">Neem contact op met Dorien</button>
    </div>

    <!-- PAGE 6: CONTACT & AFSPRAAK -->
    <div id="page-contact" class="page-section hidden max-w-7xl mx-auto px-6 py-16">
      <div class="max-w-2xl bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl p-8 space-y-4">
        <h1 class="text-3xl font-semibold text-[#14332A]">Contact &amp; Afspraak Maken</h1>
        <p class="text-sm text-[#3F4E47]"><strong>Adres:</strong> Ruimtesonde 7, 3824 MZ Amersfoort (Calveen / Nieuwland — gratis parkeren voor de deur)</p>
        <p class="text-sm text-[#3F4E47]"><strong>Telefoon &amp; WhatsApp:</strong> 06 - 24 72 28 54</p>
        <p class="text-sm text-[#3F4E47]"><strong>E-mail:</strong> info@dorienjanse.nl</p>
      </div>
    </div>
  </main>

  <!-- FOOTER -->
  <footer class="bg-[#14332A] text-[#DCE7E2] py-12 mt-auto">
    <div class="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div>
        <p class="text-lg font-serif-display text-white font-semibold">Dorien Janse – Personal Fysio, Training &amp; Vitaliteit</p>
        <p class="text-sm text-[#A9C6BA] mt-1">Ruimtesonde 7, 3824 MZ Amersfoort (Calveen / Nieuwland) · 06 - 24 72 28 54 · info@dorienjanse.nl</p>
      </div>
      <button type="button" onclick="showPage('contact')" class="px-5 py-2.5 bg-[#E8B878] text-[#14332A] font-semibold rounded-lg text-sm">
        Contact &amp; Route
      </button>
    </div>
  </footer>

  <script>
    function showPage(pageId) {
      document.querySelectorAll('.page-section').forEach(function(el) {
        el.classList.add('hidden');
      });
      var target = document.getElementById('page-' + pageId);
      if (target) target.classList.remove('hidden');
      document.querySelectorAll('[data-pill]').forEach(function(btn) {
        if (btn.getAttribute('data-pill') === pageId) {
          btn.className = 'px-2.5 py-1 rounded bg-[#14332A] text-white shrink-0';
        } else {
          btn.className = 'px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0';
        }
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  </script>
</body>
</html>`;
}
