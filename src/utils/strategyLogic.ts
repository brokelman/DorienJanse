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
  recommendedPackage: string;
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
    if (
      page.pageTitle.toLowerCase().includes('omega') ||
      page.metaDescription.toLowerCase().includes('omega')
    ) {
      violations.push(
        `Page "${page.pageId}" must not mention Omega-3 in main SEO title or metaDescription`
      );
    }
  }

  return {
    allValid: violations.length === 0,
    violations,
  };
}

export function recommendTrajectory(input: KeuzewijzerInput): TrajectoryRecommendation {
  // Strategic Pillar 1: Het Vitaliteitstraject (Basis Fit / Lekker Fit / Premium Fit)
  if (
    input.primaryChallenge === 'energy_recovery' ||
    input.systemicSigns === 'fatigue_inflammation' ||
    (input.primaryChallenge === 'pain_chronic' &&
      input.duration === 'years' &&
      input.systemicSigns === 'slow_recovery')
  ) {
    return {
      recommendedPage: 'vitaliteit',
      badgeText: 'Advies voor Duurzaam Herstel · Praktijk of Online',
      title: 'Het Vitaliteitstraject (Basis Fit, Lekker Fit of Premium Fit)',
      subtitle: 'Herstel de balans tussen belasting en belastbaarheid en vind de oorzaak achter aanhoudende klachten.',
      explanation:
        'Jouw antwoorden laten zien dat er meer speelt dan alleen een lokale spier- of gewrichtsprikkel. We brengen je totale herstelvermogen in kaart: slaap, ademhaling, stress, voeding, je immuunsysteem (laaggradige ontstekingen) en ingesleten patronen. Waar passend nemen we ook gericht voedings- of supplementadvies (zoals magnesium of Omega-3) mee in je persoonlijke plan.',
      keyElements: [
        'Uitgebreide analyse-vragenlijst + Intake van 1 vol uur + Persoonlijk plan',
        'Keuze uit Basis Fit (€ 130,-), Lekker Fit (€ 220,-) of Premium Fit (€ 370,-)',
        'Focus op ademhaling, slaap, belasting/belastbaarheid en blijvende gedragsverandering',
      ],
      ctaLabel: 'Bekijk de 3 Vitaliteitspakketten',
      recommendedPackage: 'Vitaliteitstraject (Basis / Lekker / Premium Fit)',
    };
  }

  // Strategic Pillar 3: Duursport (Hardlopen, Wielrennen, PT & Running Bootcamp)
  if (input.primaryChallenge === 'endurance_performance') {
    return {
      recommendedPage: 'duursport',
      badgeText: 'Duursport & Bewegingswetenschap · Dorien & Michaël',
      title: 'Hardloopfysiotherapie Pakket (4x), PT of Running Bootcamp',
      subtitle: 'Begeleiding door fanatieke duursporters die jouw sport van binnenuit kennen.',
      explanation:
        'Zowel Dorien (bewegingswetenschapper, sportfysio & marathonloopster) als Michaël (Hardloopfysiotherapeut BLT3 & trainer bij AV Triathlon) analyseren jouw techniek en ketenbelasting. Met videoanalyse (buiten én op de loopband), loopscholing en gerichte krachttraining bouw je blessurevrij op.',
      keyElements: [
        'Hardloopfysiotherapie pakket (4x voor € 290,-): 1 uur intake, videoanalyse buiten & op loopband + 3 trainingen van 45 min',
        'Personal Training (30 of 45 min) of Small Group training (max. 4 pers.) in de oefenzaal (65 m²)',
        'Running Bootcamp in Nieuwland (ma/do gemengd, vr vrouwen & Moeder/Kind – gratis proefles!)',
      ],
      ctaLabel: 'Bekijk Hardlopen, Wielrennen & Training',
      recommendedPackage: 'Hardloopfysiotherapie pakket (4x) / Running Bootcamp / PT',
    };
  }

  // Strategic Pillar 2: Langdurige / Terugkerende klachten (Fysio, Manuele Therapie MSc & NKT)
  return {
    recommendedPage: 'fysio',
    badgeText: 'Oorzaakgerichte Diagnostiek · Dorien Janse & Michaël Kornmann',
    title: 'Persoonlijke Fysiotherapie, Master Manuele Therapie MSc & NKT',
    subtitle: 'Waarom ontstaan klachten en waarom herstellen ze soms niet vanzelf?',
    explanation:
      'Bij langdurige of terugkerende klachten onderzoeken wij de volledige bewegingsketen én de neurofysiologie achter de pijn. Dorien zet o.a. Neurokinetische Therapie (NKT – als enige gecertificeerde fysio in Amersfoort), Fasciatherapie en Dry Needling in; Michaël combineert Master Manuele Therapie MSc met Dry Needling en actieve revalidatie gericht op zelfredzaamheid.',
    keyElements: [
      'Neurokinetische Therapie (NKT), Fasciatherapie & Dry Needling (Dorien Janse)',
      'Master Manuele Therapie MSc & Neurofysiologie van pijn (Michaël Kornmann)',
      'Vergoeding vanuit aanvullende verzekering bij gecontracteerde verzekeraars (of Intake € 68,-)',
    ],
    ctaLabel: 'Bekijk Langdurige Klachten & Fysio',
    recommendedPackage: 'Intake Fysiotherapie / Manuele Therapie MSc / NKT',
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
    errors.phone = 'Vul een geldig telefoonnummer in (bijv. 06-14184448).';
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
  <meta name="description" content="Persoonlijke fysiotherapie, manuele therapie, NKT, vitaliteitscoaching en hardloopanalyse aan Ruimtesonde 7 in Amersfoort door Dorien en Michaël." />
  <meta property="og:title" content="Dorien Janse – Persoonlijke Fysio, Training &amp; Vitaliteit Amersfoort" />
  <meta property="og:description" content="Loop je vast met een langdurige blessure of verminderd herstel? Ontdek de aanpak van Dorien Janse (Sportfysio &amp; NKT) en Michaël Kornmann (Manueel MSc)." />
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
        <button type="button" onclick="showPage('home')" class="hover:text-[#14332A] py-1 whitespace-nowrap">Home</button>
        <button type="button" onclick="showPage('fysio')" class="hover:text-[#14332A] py-1 whitespace-nowrap">Langdurige Klachten &amp; Fysio</button>
        <button type="button" onclick="showPage('vitaliteit')" class="hover:text-[#14332A] py-1 whitespace-nowrap">Vitaliteit &amp; Leefstijl</button>
        <button type="button" onclick="showPage('duursport')" class="hover:text-[#14332A] py-1 whitespace-nowrap">Hardlopen &amp; Wielrennen</button>
        <button type="button" onclick="showPage('over')" class="hover:text-[#14332A] py-1 whitespace-nowrap">Over Ons, Team &amp; Tarieven</button>
      </nav>
      <div class="shrink-0">
        <button type="button" onclick="showPage('contact')" class="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#184E3B] hover:bg-[#123B2D] rounded-lg transition-colors whitespace-nowrap">
          Contact &amp; Afspraak
        </button>
      </div>
    </div>
    <div class="bg-[#EFECE4] border-t border-[#DFD9CC] px-6 py-2 flex items-center gap-2 overflow-x-auto text-xs">
      <span class="font-semibold text-[#14332A] shrink-0">Pagina's:</span>
      <button type="button" onclick="showPage('home')" class="px-2.5 py-1 rounded bg-[#14332A] text-white shrink-0" data-pill="home">1. Home</button>
      <button type="button" onclick="showPage('fysio')" class="px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0" data-pill="fysio">2. Klachten, Fysio &amp; Manueel</button>
      <button type="button" onclick="showPage('vitaliteit')" class="px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0" data-pill="vitaliteit">3. Vitaliteitstraject</button>
      <button type="button" onclick="showPage('duursport')" class="px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0" data-pill="duursport">4. Hardlopen, PT &amp; Bootcamp</button>
      <button type="button" onclick="showPage('over')" class="px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0" data-pill="over">5. Team (Dorien &amp; Michaël) &amp; Tarieven</button>
      <button type="button" onclick="showPage('contact')" class="px-2.5 py-1 rounded text-[#3F4E47] hover:bg-[#E4DFD3] shrink-0" data-pill="contact">6. Contact &amp; Verhuur</button>
    </div>
  </header>

  <main id="top" class="flex-1">
    <!-- PAGE 1: HOME -->
    <div id="page-home" class="page-section">
      <section class="max-w-7xl mx-auto px-6 pt-12 pb-16 lg:py-20">
        <div class="grid lg:grid-cols-12 gap-12 items-stretch">
          <div class="lg:col-span-7 flex flex-col justify-center">
            <p class="text-xs font-medium tracking-wide text-[#5B6B63] mb-4">
              Dorien Janse – Persoonlijke Fysio, Training &amp; Vitaliteit · Ruimtesonde 7 Amersfoort
            </p>
            <h1 class="text-4xl sm:text-5xl lg:text-[3.35rem] leading-[1.12] font-semibold text-[#14332A] mb-6">
              Herstel bij de bron. Presteer zonder pijn. Leef met blijvende energie.
            </h1>
            <p class="text-base sm:text-lg text-[#3F4E47] leading-relaxed mb-8 max-w-2xl">
              Waarom ontstaan klachten en waarom herstellen ze soms niet vanzelf? Samen met collega Michaël Kornmann (Master Manueel Therapeut MSc &amp; Hardloopfysiotherapeut BLT3) kijken we aan de Ruimtesonde 7 in Amersfoort naar het totaalplaatje: van Neurokinetische Therapie (NKT), Fasciatherapie en manuele therapie tot ademhaling, looptechniek en je totale herstelvermogen.
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <button type="button" onclick="showPage('contact')" class="px-6 py-3.5 bg-[#184E3B] hover:bg-[#123B2D] text-white font-semibold rounded-lg transition-colors text-sm">
                Plan je afspraak (06-14184448)
              </button>
              <button type="button" onclick="showPage('vitaliteit')" class="px-6 py-3.5 border border-[#CBD2C9] hover:border-[#184E3B] text-[#14332A] font-medium rounded-lg transition-colors text-sm">
                Bekijk het Vitaliteitstraject
              </button>
            </div>
          </div>
          <div class="lg:col-span-5">
            <div class="h-full min-h-[360px] rounded-2xl bg-[#14332A] text-white p-8 flex flex-col justify-between">
              <div>
                <p class="text-xs text-[#A9C6BA] mb-2">Team Ruimtesonde 7 · Amersfoort Nieuwland / Calveen</p>
                <h2 class="text-2xl font-semibold text-white mb-3">Dorien Janse &amp; Michaël Kornmann</h2>
                <p class="text-sm text-[#DCE7E2] leading-relaxed">
                  Twee gedreven specialisten én fanatieke duursporters (AV Triathlon Amersfoort) onder één dak. Uniek in Amersfoort met gecertificeerde Neurokinetische Therapie (NKT), Master Manuele Therapie MSc, Hardloopfysiotherapie (videoanalyse buiten en op de loopband) en Vitaliteitscoaching.
                </p>
              </div>
              <div class="pt-6 mt-6 border-t border-[#264D40] grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p class="font-semibold text-[#E8B878]">06-14184448</p>
                  <p class="text-xs text-[#A9C6BA]">Direct contact &amp; WhatsApp</p>
                </div>
                <div>
                  <p class="font-semibold text-[#E8B878]">Ruimtesonde 7</p>
                  <p class="text-xs text-[#A9C6BA]">3824 MZ Amersfoort</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- PAGE 2: FYSIO & MANUEEL -->
    <div id="page-fysio" class="page-section hidden max-w-7xl mx-auto px-6 py-16 space-y-8">
      <h1 class="text-4xl font-semibold text-[#14332A]">Langdurige Klachten, Sportfysio, Manuele Therapie MSc &amp; NKT</h1>
      <p class="text-base text-[#3F4E47] max-w-3xl">Dorien Janse (als enige fysiotherapeut in Amersfoort gecertificeerd in Neurokinetische Therapie - NKT) en Michaël Kornmann (Master Musculoskeletaal Manueel Therapeut MSc) combineren NKT, Fasciatherapie, Dry Needling, manuele mobilisaties, ademhaling en inzicht in de neurofysiologie van pijn.</p>
    </div>

    <!-- PAGE 3: VITALITEIT -->
    <div id="page-vitaliteit" class="page-section hidden max-w-7xl mx-auto px-6 py-16 space-y-8">
      <h1 class="text-4xl font-semibold text-[#14332A]">Het Vitaliteitstraject (Ook online mogelijk)</h1>
      <p class="text-base text-[#3F4E47] max-w-3xl">Gericht op het totale herstelvermogen en het vinden van de oorzaak achter aanhoudende klachten: balans tussen belasting en belastbaarheid, slaap, ademhaling, voeding, stress, immuunsysteem/laaggradige ontstekingen en ingesleten patronen. Keuze uit Pakket A – Basis Fit (€ 130,-), Pakket B – Lekker Fit (€ 220,-) en Pakket C – Premium Fit (€ 370,-).</p>
    </div>

    <!-- PAGE 4: DUURSPORT -->
    <div id="page-duursport" class="page-section hidden max-w-7xl mx-auto px-6 py-16 space-y-8">
      <h1 class="text-4xl font-semibold text-[#14332A]">Hardloopfysiotherapie, Wielrennen, PT &amp; Running Bootcamp</h1>
      <p class="text-base text-[#3F4E47] max-w-3xl">Hardloopfysiotherapie pakket (4x voor € 290,- incl. intake 1 uur, videoanalyse buiten én op de loopband + 3 trainingen van 45 min), Personal Training (30 min € 50,- / 45 min € 75,-), Small Group en Running Bootcamp in Nieuwland (ma &amp; do gemengd, vr vrouwen &amp; Moeder/Kind – gratis proefles!).</p>
    </div>

    <!-- PAGE 5: TEAM & TARIEVEN -->
    <div id="page-over" class="page-section hidden max-w-7xl mx-auto px-6 py-16 space-y-8">
      <h1 class="text-4xl font-semibold text-[#14332A]">Ons Team (Dorien Janse &amp; Michaël Kornmann) &amp; Tarieven 2026</h1>
      <p class="text-base text-[#3F4E47] max-w-3xl">Dorien Janse (BIG 59064209704 | AGB 4108710) en Michaël Kornmann (BIG 89920543304 | michael@dorienjanse.nl). Praktijk AGB: 4094632 | KvK: 64964744.</p>
    </div>

    <!-- PAGE 6: CONTACT -->
    <div id="page-contact" class="page-section hidden max-w-7xl mx-auto px-6 py-16 space-y-6">
      <h1 class="text-3xl font-semibold text-[#14332A]">Contact, Openingstijden &amp; Verhuur Praktijkruimte</h1>
      <p class="text-sm text-[#3F4E47]"><strong>Praktijknaam:</strong> Dorien Janse – Persoonlijke Fysio, Training &amp; Vitaliteit</p>
      <p class="text-sm text-[#3F4E47]"><strong>Adres:</strong> Ruimtesonde 7, 3824 MZ Amersfoort (Nieuwland / Calveen)</p>
      <p class="text-sm text-[#3F4E47]"><strong>Telefoon:</strong> 06-14184448</p>
      <p class="text-sm text-[#3F4E47]"><strong>E-mail:</strong> info@dorienjanse.nl | michael@dorienjanse.nl</p>
      <p class="text-sm text-[#3F4E47]"><strong>Verhuur 1e verdieping:</strong> Behandelkamers (16 m²), cursus-/groepsruimte voor yoga/pilates/mindfulness (31 m²) en oefenzaal (65 m²) per dagdeel te huur.</p>
    </div>
  </main>

  <footer class="bg-[#14332A] text-[#DCE7E2] py-12 mt-auto">
    <div class="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div>
        <p class="text-lg font-serif-display text-white font-semibold">Dorien Janse – Persoonlijke Fysio, Training &amp; Vitaliteit</p>
        <p class="text-sm text-[#A9C6BA] mt-1">Ruimtesonde 7, 3824 MZ Amersfoort · Tel: 06-14184448 · info@dorienjanse.nl · michael@dorienjanse.nl</p>
        <p class="text-xs text-[#8FAEA1] mt-1">Praktijk AGB: 4094632 · KvK: 64964744 · BIG Dorien: 59064209704 · BIG Michaël: 89920543304</p>
      </div>
      <a href="tel:+31614184448" class="px-5 py-2.5 bg-[#E8B878] text-[#14332A] font-semibold rounded-lg text-sm">
        Bel 06-14184448
      </a>
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
