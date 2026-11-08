import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Check,
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';
import {
  PageId,
  GENERATED_IMAGES,
  GEO_FAQS,
  PAGE_SEO_CONFIG,
} from '../data/siteContent';
import { KeuzewijzerWidget } from './KeuzewijzerWidget';
import { IntakeFormInput, validateIntakeForm } from '../utils/strategyLogic';

interface PrototypeViewProps {
  activePage: PageId;
  onSelectPage: (page: PageId) => void;
}

export const PrototypeView: React.FC<PrototypeViewProps> = ({
  activePage,
  onSelectPage,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [formInput, setFormInput] = useState<IntakeFormInput>({
    name: '',
    email: '',
    phone: '',
    interest: 'Het Vitaliteitstraject & Omega-3 Celgezondheid',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof IntakeFormInput, string>>
  >({});
  const [submittedRequest, setSubmittedRequest] = useState<IntakeFormInput | null>(
    null
  );

  const navigateWithInterest = (page: PageId, preselectedInterest?: string) => {
    if (preselectedInterest) {
      setFormInput((prev) => ({ ...prev, interest: preselectedInterest }));
    }
    onSelectPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateIntakeForm(formInput);
    if (!validation.valid) {
      setFormErrors(validation.errors);
      setSubmittedRequest(null);
      return;
    }
    setFormErrors({});
    setSubmittedRequest({ ...formInput });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#172620]">
      {/* Page Sub-Selector Bar for Quick Prototype Previewing */}
      <div className="bg-[#EFECE4] border-b border-[#DFD9CC]">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#4A5A52]">
            <span className="font-semibold text-[#14332A]">Actieve pagina in prototype:</span>
            <span aria-hidden="true">·</span>
            <span>
              {PAGE_SEO_CONFIG.find((p) => p.pageId === activePage)?.menuLabel}
            </span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Ruimtesonde 7, Amersfoort (Calveen / Nieuwland)</span>
          </div>
          <div className="flex items-center gap-1 overflow-x-auto">
            {PAGE_SEO_CONFIG.map((p, idx) => (
              <button
                key={p.pageId}
                type="button"
                onClick={() => onSelectPage(p.pageId)}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activePage === p.pageId
                    ? 'bg-[#14332A] text-white'
                    : 'text-[#4A5A52] hover:text-[#14332A] hover:bg-[#E4DFD3]'
                }`}
              >
                {idx + 1}. {p.menuLabel}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          PAGE 1: HOME (Directe propositie: Oorzaakgericht herstel, Vitaliteit & Sportperformance)
          ========================================================= */}
      {activePage === 'home' && (
        <>
          {/* HERO SECTION */}
          <section className="max-w-7xl mx-auto px-6 pt-10 pb-14 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#55665E] mb-4">
                  <span>Sportfysiotherapeut MSc</span>
                  <span aria-hidden="true">·</span>
                  <span>Bewegingswetenschapper</span>
                  <span aria-hidden="true">·</span>
                  <span>Vitaliteitscoach</span>
                  <span aria-hidden="true">·</span>
                  <span>Amersfoort Nieuwland &amp; Calveen</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] leading-[1.12] font-semibold text-[#14332A] mb-6">
                  Herstel bij de bron. Presteer zonder pijn. Leef met blijvende energie.
                </h1>

                <p className="text-base sm:text-lg text-[#3A4A42] leading-relaxed mb-6 max-w-2xl">
                  Loop je al maanden rond met een blessure die telkens terugkeert? Merk je dat je lichaam trager herstelt en je energieniveau achterblijft? Of wil je als hardloper of wielrenner sterker, efficiënter en blessurevrij presteren?
                </p>

                <p className="text-sm sm:text-base text-[#4A5A52] leading-relaxed mb-8 max-w-2xl">
                  In mijn praktijk aan de Ruimtesonde 7 in Amersfoort kijk ik verder dan de plek waar het pijn doet. Door bewegingswetenschappen, neurokinetische en fasciale fysiotherapie én celgezondheid (Omega-3 balans) te combineren, pakken we de werkelijke oorzaak aan.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => navigateWithInterest('contact', 'Persoonlijke Intake (Fysio / Vitaliteit / Sport)')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#184E3B] hover:bg-[#113A2B] text-white font-semibold rounded-lg transition-colors text-sm whitespace-nowrap shrink-0"
                  >
                    <span>Plan jouw persoonlijke intake</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectPage('vitaliteit')}
                    className="px-6 py-3.5 border border-[#C8CFC5] hover:border-[#184E3B] text-[#14332A] font-semibold rounded-lg transition-colors text-sm whitespace-nowrap shrink-0"
                  >
                    Ontdek het Vitaliteitstraject
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-full min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-[#E5DEC9] border border-[#DED7C8]">
                  <img
                    src={GENERATED_IMAGES.hero}
                    alt="Dorien Janse analyseert de loopbeweging en houding van een sporter in haar lichte praktijk in Amersfoort"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover sepia-[.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                    <p className="text-xs text-[#D5E3DC] mb-1">
                      Praktijk Amersfoort Calveen &amp; Nieuwland · Ruimtesonde 7
                    </p>
                    <p className="text-lg font-display font-medium leading-snug">
                      “De plek waar je pijn voelt is bijna altijd het slachtoffer — wij zoeken de dader in je bewegingsketen én celherstel.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL-WIDTH 4-COLUMN TRUST & OUTCOME STRIP BELOW HERO SPLIT */}
            <div className="mt-10 pt-8 border-t border-[#E5E0D5] grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-xs text-[#5B6B63] mb-1">Academische &amp; Klinische Diepgang</p>
                <p className="text-sm font-semibold text-[#14332A]">
                  Bewegingswetenschapper + Sportfysio MSc
                </p>
              </div>
              <div>
                <p className="text-xs text-[#5B6B63] mb-1">Tijd &amp; Persoonlijke Aandacht</p>
                <p className="text-sm font-semibold text-[#14332A] font-mono-tabular">
                  60 min 1-op-1 intake &amp; behandeling
                </p>
              </div>
              <div>
                <p className="text-xs text-[#5B6B63] mb-1">Herstel van Binnenuit</p>
                <p className="text-sm font-semibold text-[#14332A] font-mono-tabular">
                  Omega-6 / Omega-3 Celgezondheid (&lt; 3:1)
                </p>
              </div>
              <div>
                <p className="text-xs text-[#5B6B63] mb-1">Bereikbaarheid &amp; Toegang</p>
                <p className="text-sm font-semibold text-[#14332A]">
                  Geen verwijsbrief · Gratis parkeren voor de deur
                </p>
              </div>
            </div>
          </section>

          {/* DE 3 STRATEGISCHE PIJLERS (BENTO HIERARCHY) */}
          <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20 border-t border-[#E5E0D5]">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-medium text-[#5B6B63] mb-2">
                Drie integrale pijlers onder één dak in Amersfoort
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#14332A] mb-4">
                Waarmee mag ik je op weg helpen?
              </h2>
              <p className="text-base text-[#3F4E47] leading-relaxed">
                Of je nu al maanden vastloopt met een terugkerende blessure, structureel meer energie en herstelvermogen zoekt, of als duursporter pijnvrij je tijden wilt aanscherpen.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* KROONJUWEEL: VITALITEITSTRAJECT (COL-SPAN-12 OR 7 FOR PROMINENCE) */}
              <article className="lg:col-span-12 bg-[#14332A] text-white rounded-2xl overflow-hidden grid lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#A9C6BA] mb-4">
                      <span>01. Het Kroonjuweel voor Duurzaam Herstel</span>
                      <span aria-hidden="true">·</span>
                      <span>Leefstijl, Energie &amp; Celgezondheid</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                      Het Integrale Vitaliteitstraject: Waarom herstel begint op celniveau
                    </h3>
                    <p className="text-sm sm:text-base text-[#DCE7E2] leading-relaxed mb-6">
                      Je kunt nog zulke goede revalidatie-oefeningen doen: als je lichaam van binnenuit verkeert in een staat van laaggradige ontsteking of chronische stress, trapt je herstelvermogen continu op de rem. In het Vitaliteitstraject combineren we een laboratorium-bloedtest naar jouw Omega-3 vetzurenbalans met persoonlijke coaching op slaap, ademhaling, voeding en beweging.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#E4EFEA] mb-8 pt-4 border-t border-[#264D40]">
                      <div>
                        <p className="font-semibold text-[#E8B878] mb-1">Meten = Weten (Bloedtest)</p>
                        <p className="text-[#C9DBD3]">
                          Objectieve meting van 11 vetzuren, celwanddoorlaatbaarheid en jouw Omega-6/Omega-3 ratio.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#E8B878] mb-1">Sneller Pees- &amp; Spierherstel</p>
                        <p className="text-[#C9DBD3]">
                          Door laaggradige ontstekingen op te lossen reageert je weefsel eindelijk wél op training en therapie.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onSelectPage('vitaliteit')}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#E8B878] hover:bg-[#DDA860] text-[#14332A] font-semibold rounded-lg text-sm transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>Bekijk het Vitaliteitstraject</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        navigateWithInterest(
                          'contact',
                          'Vitaliteitstraject & Omega-3 Vetzurentest'
                        )
                      }
                      className="px-4 py-3 text-sm font-medium text-[#E4EFEA] hover:text-white underline underline-offset-4 whitespace-nowrap shrink-0"
                    >
                      Plan direct een Vitaliteitscheck
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5 min-h-[280px] bg-[#1D4237]">
                  <img
                    src={GENERATED_IMAGES.vitality}
                    alt="Vitaliteitstraject en Omega-3 celgezondheid analyse op een eikenhouten tafel"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </article>

              {/* PIJLER 2: LANGDURIGE KLACHTEN & FYSIO */}
              <article className="lg:col-span-6 bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-60 bg-[#E5DEC9] overflow-hidden">
                    <img
                      src={GENERATED_IMAGES.physio}
                      alt="Oorzaakgerichte sportfysiotherapie en fasciatherapie behandeling"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-xs text-[#5B6B63] mb-3">
                      <span>02. Voor wie alles al geprobeerd heeft</span>
                      <span aria-hidden="true">·</span>
                      <span>NKT, Fascia &amp; Dry Needling</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#14332A] mb-3">
                      Langdurige Klachten &amp; Oorzaakgerichte Fysio
                    </h3>
                    <p className="text-sm text-[#3F4E47] leading-relaxed mb-4">
                      Blijft je rug, nek, schouder, knie of achillespees opspelen ondanks eerdere fysiotherapie? Wij behandelen niet enkel het pijnpunt, maar testen via Neurokinetische Therapie (NKT) en Fasciatherapie waar jouw zenuwstelsel en bindweefsel compenseren.
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-4 border-t border-[#E5E0D5] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectPage('fysio')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#184E3B] hover:underline whitespace-nowrap"
                  >
                    <span>Ontdek mijn visie op complexe klachten</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>

              {/* PIJLER 3: DUURSPORT (HARDLOPEN, WIELRENNEN & TRAINING) */}
              <article className="lg:col-span-6 bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-60 bg-[#E5DEC9] overflow-hidden">
                    <img
                      src={GENERATED_IMAGES.endurance}
                      alt="Hardloper traint pijnvrij in het bos bij Amersfoort na biomechanische loopanalyse"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-xs text-[#5B6B63] mb-3">
                      <span>03. Duursport &amp; Performance</span>
                      <span aria-hidden="true">·</span>
                      <span>Hardlopen, Wielrennen, PT &amp; Bootcamp</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#14332A] mb-3">
                      Hardloopanalyse, Wielrennen &amp; Gerichte Training
                    </h3>
                    <p className="text-sm text-[#3F4E47] leading-relaxed mb-4">
                      Duursport draait om loopeconomie en ketenstabiliteit. Met video-loopanalyse, wielrenspecifieke core- &amp; heupkrachttraining, 1-op-1 Personal Training en Bootcamp in Amersfoort Nieuwland haal je meer uit elke kilometer zonder overbelasting.
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-4 border-t border-[#E5E0D5] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectPage('duursport')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#184E3B] hover:underline whitespace-nowrap"
                  >
                    <span>Bekijk Loopanalyse, Wielrennen &amp; PT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            </div>
          </section>

          {/* INTERACTIVE KEUZEWIJZER WIDGET */}
          <KeuzewijzerWidget onNavigate={navigateWithInterest} />

          {/* CLAIM-TO-PROOF ADJACENCY: CONCRETE PRAKTIJKRESULTATEN */}
          <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-medium text-[#5B6B63] mb-2">
                Bewezen resultaat in de praktijk · Amersfoort Nieuwland, Calveen, Hoogland &amp; Vathorst
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#14332A] mb-3">
                Hoe cliënten en duursporters het verschil ervaren
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <blockquote className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-7 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#5B6B63] mb-3 font-mono-tabular">
                    Hardloper (Marathon) · Achillespeesklacht van 14 maanden opgelost
                  </p>
                  <p className="text-sm text-[#2C3B34] leading-relaxed mb-6">
                    “Na ruim een jaar sukkelen met mijn achillespees en talloze kuit-oefeningen ontdekte Dorien via Neurokinetische Therapie dat het probleem uit mijn heupaansturing en een oude enkelverzwikking kwam. Gecombineerd met een kleine cadans-aanpassing uit de loopanalyse loop ik nu weer pijnvrij 50 km per week.”
                  </p>
                </div>
                <footer className="text-xs text-[#4A5A52] pt-4 border-t border-[#E5E0D5]">
                  <strong className="text-[#14332A]">Jeroen van den Berg (42)</strong> · Amersfoort Vathorst · Traject: Sportfysio + Video-Loopanalyse
                </footer>
              </blockquote>

              <blockquote className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-7 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#5B6B63] mb-3 font-mono-tabular">
                    Vitaliteitstraject · Omega-6/3 ratio van 14,8:1 naar 2,6:1 in 120 dagen
                  </p>
                  <p className="text-sm text-[#2C3B34] leading-relaxed mb-6">
                    “Ik werd elke ochtend geradbraakt wakker en had continu vage schouder- en nekklachten. Uit de vetzurentest bleek mijn celgezondheid zwaar in het rood te staan. Door het Vitaliteitstraject, gerichte Omega-3 suppletie en ademhalingsoefeningen is mijn energie terug én zijn mijn peesklachten verdwenen.”
                  </p>
                </div>
                <footer className="text-xs text-[#4A5A52] pt-4 border-t border-[#E5E0D5]">
                  <strong className="text-[#14332A]">Marloes Hendriks (39)</strong> · Amersfoort Nieuwland · Traject: Integraal Vitaliteitstraject
                </footer>
              </blockquote>

              <blockquote className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-7 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#5B6B63] mb-3 font-mono-tabular">
                    Wielrenner · Pijnvrij klimmen na 3 jaar lage rugklachten
                  </p>
                  <p className="text-sm text-[#2C3B34] leading-relaxed mb-6">
                    “Op de racefiets kreeg ik na 45 kilometer steevast een verkramping in mijn onderrug. Dorien maakte eerst de diepe fasciale keten rond mijn heupbuigers los en bouwde daarna met 1-op-1 Personal Training mijn rompstabiliteit op. Afgelopen zomer zonder één minuut rugpijn de Marmotte gefietst.”
                  </p>
                </div>
                <footer className="text-xs text-[#4A5A52] pt-4 border-t border-[#E5E0D5]">
                  <strong className="text-[#14332A]">Bram Verhoeven (48)</strong> · Hoogland · Traject: Fasciatherapie + Duursport PT
                </footer>
              </blockquote>
            </div>
          </section>

          {/* GEO / AI-KENNISBANK & FAQ OP DE HOMEPAGE */}
          <section className="bg-[#F3EFE6] border-t border-[#E5E0D5] py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-6">
              <div className="mb-10">
                <p className="text-xs font-medium text-[#5B6B63] mb-2">
                  Veelgestelde vragen · Wetenschappelijke achtergronden (GEO Kennisbank)
                </p>
                <h2 className="text-3xl font-semibold text-[#14332A] mb-3">
                  Antwoorden op veelgestelde vragen over herstel, celgezondheid &amp; duursport
                </h2>
                <p className="text-sm text-[#3F4E47]">
                  Heldere uitleg waarom wij verder kijken dan standaard symptoombestrijding.
                </p>
              </div>

              <div className="space-y-3">
                {GEO_FAQS.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F5F2EB] transition-colors"
                      >
                        <div>
                          <p className="text-xs text-[#5B6B63] mb-1">
                            Mechanisme: {faq.scientificMechanism}
                          </p>
                          <span className="text-base font-semibold text-[#14332A]">
                            {faq.question}
                          </span>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#184E3B] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#5B6B63] shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 text-sm text-[#3A4A42] leading-relaxed border-t border-[#EFECE4]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* =========================================================
          PAGE 2: LANGDURIGE KLACHTEN & FYSIO
          ========================================================= */}
      {activePage === 'fysio' && (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 space-y-16">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs text-[#5B6B63] mb-3">
                Oorzaakgerichte Fysiotherapie &amp; Sportfysiotherapie · Amersfoort Nieuwland &amp; Calveen
              </p>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#14332A] mb-6">
                Waarom jouw klacht steeds terugkomt — en hoe we die cirkel wél doorbreken.
              </h1>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-4">
                Heb je het gevoel dat je alles al hebt geprobeerd? Rust gehouden, standaard oefenschema’s afgewerkt, lokaal laten masseren of behandelen — en toch speelt die achillespees, onderrug, nek, heup of schouder telkens weer op zodra je je sport of werk hervat?
              </p>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-8">
                De verklaring vanuit de bewegingswetenschappen is helder: <strong>de plek waar je pijn voelt, is bijna altijd het slachtoffer van een schakelfout elders in de keten.</strong> Zolang je alleen het overbelaste weefsel behandelt, blijft de werkelijke blokkade bestaan.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() =>
                    navigateWithInterest(
                      'contact',
                      'Intake Langdurige Klachten & Oorzaakgerichte Fysio'
                    )
                  }
                  className="px-6 py-3.5 bg-[#184E3B] hover:bg-[#113A2B] text-white font-semibold rounded-lg text-sm whitespace-nowrap shrink-0"
                >
                  Plan een oorzaakgerichte intake (60 min)
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#E5DEC9] border border-[#E5E0D5]">
              <img
                src={GENERATED_IMAGES.physio}
                alt="Hands-on ketenonderzoek en fasciatherapie bij Dorien Janse in Amersfoort"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[320px]"
              />
            </div>
          </div>

          <div className="border-t border-[#E5E0D5] pt-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#14332A] mb-8">
              Alle behandelvormen logisch geïntegreerd in één aanpak
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Neurokinetische Therapie (NKT)',
                  desc: 'Na een oude blessure, operatie of overbelasting kan het motorisch controlecentrum in je brein een spier "uitschakelen", waardoor een andere spier continu overwerkt. Met specifieke spiertesten sporen we deze foutieve aansturing op en resetten we de brein-spierverbinding.',
                },
                {
                  num: '02',
                  title: 'Fasciatherapie (Bindweefselketens)',
                  desc: 'Al je spieren en gewrichten zijn verbonden via één driedimensionaal fascianetwerk. Een verkleving rond een oud enkel- of buiklitteken kan letterlijk trekken aan je heup of schouder. Door de fasciale glijlagen vrij te maken ontstaat direct ruimte.',
                },
                {
                  num: '03',
                  title: 'Sportfysiotherapie MSc',
                  desc: 'Diepgaande biomechanische analyse van jouw sportspecifieke belasting. Wij vertalen bevindingen op de behandelbank direct naar een verantwoorde opbouw richting hardlopen, wielrennen, veld- of krachtsport.',
                },
                {
                  num: '04',
                  title: 'Manuele Technieken & Gewrichtsmobilisaties',
                  desc: 'Wanneer een gewricht in de wervelkolom, enkel of heup mechanisch geblokkeerd is, kan de omliggende musculatuur niet goed aanspannen. Met gerichte mobilisaties herstellen we de natuurlijke gewrichtsbeweging.',
                },
                {
                  num: '05',
                  title: 'Dry Needling',
                  desc: 'Met een flinterdun, steriel naaldje prikken we direct in overactieve myofasciale triggerpoints (spierknopen). De spier ontspant direct, de doorbloeding herstelt en we kunnen meteen de juiste aansturing intrainen.',
                },
                {
                  num: '06',
                  title: 'Sportmassage & Herstelbehandeling',
                  desc: 'Gerichte dieptemassage voor sporters die zware trainingsweken draaien en spierspanning tijdig willen afvoeren voordat het een blessure wordt.',
                },
              ].map((method) => (
                <div
                  key={method.num}
                  className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs font-mono-tabular text-[#5B6B63] mb-2">
                      Specialisme {method.num}
                    </p>
                    <h3 className="text-lg font-semibold text-[#14332A] mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-[#3F4E47] leading-relaxed">
                      {method.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          PAGE 3: VITALITEIT & LEEFSTIJL (KROONJUWEEL)
          ========================================================= */}
      {activePage === 'vitaliteit' && (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 space-y-16">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs text-[#5B6B63] mb-3">
                Het Kroonjuweel · Integrale Vitaliteitscoaching &amp; Celgezondheid in Amersfoort
              </p>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#14332A] mb-6">
                Het Vitaliteitstraject: Duurzame energie en weefselherstel beginnen op celniveau.
              </h1>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-4">
                Merk je dat je “batterij” minder snel oplaadt? Word je niet uitgerust wakker, herstel je traag na een drukke werkweek of training, of blijven pees- en spierklachten sluimeren ondanks goede oefeningen?
              </p>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-8">
                In het Vitaliteitstraject behandelen we geen losse symptomen, maar optimaliseren we het biologische fundament van jouw lichaam. Inclusief objectieve laboratorium-bloedtest naar je <strong>Omega-6 / Omega-3 vetzurenbalans</strong> en celwanddoorlaatbaarheid.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() =>
                    navigateWithInterest(
                      'contact',
                      'Vitaliteitstraject & Omega-3 Vetzurentest'
                    )
                  }
                  className="px-6 py-3.5 bg-[#184E3B] hover:bg-[#113A2B] text-white font-semibold rounded-lg text-sm whitespace-nowrap shrink-0"
                >
                  Vraag jouw Vitaliteits-intake aan
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#E5DEC9] border border-[#E5E0D5]">
              <img
                src={GENERATED_IMAGES.vitality}
                alt="Het Vitaliteitstraject en Omega-3 celgezondheid bij Dorien Janse in Amersfoort"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[320px]"
              />
            </div>
          </div>

          {/* DE LINK TUSSEN OMEGA-3, CELGEZONDHEID EN PEESHERSTEL */}
          <div className="bg-[#14332A] text-white rounded-2xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <p className="text-xs text-[#A9C6BA] mb-2">
                Wetenschappelijk Fundament · Meten = Weten
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                De directe schakel tussen jouw Omega-3 index, laaggradige ontstekingen en peesherstel
              </h2>
              <p className="text-sm sm:text-base text-[#DCE7E2] leading-relaxed">
                Om een achillespees, schouderpees of spier te herstellen na belasting, zet je lichaam een ontstekingsreactie aan. Omega-6 vetzuren fungeren hierbij als het gaspedaal, terwijl zuivere Omega-3 vetzuren (EPA &amp; DHA) het rempedaal zijn dat de ontsteking weer uitzet en celwanden soepel houdt.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-[#264D40]">
              <div>
                <p className="text-2xl font-mono-tabular font-semibold text-[#E8B878] mb-1">
                  &gt; 12 : 1
                </p>
                <p className="text-xs font-semibold text-white mb-1">
                  Gemiddelde startwaarde bij sporters
                </p>
                <p className="text-xs text-[#C9DBD3] leading-relaxed">
                  Meer dan 90% van de mensen die we testen heeft een sterk verhoogde Omega-6/Omega-3 ratio, waardoor pezen en gewrichten in een sluimerende ontstekingsstaat blijven.
                </p>
              </div>
              <div>
                <p className="text-2xl font-mono-tabular font-semibold text-[#E8B878] mb-1">
                  &lt; 3 : 1
                </p>
                <p className="text-xs font-semibold text-white mb-1">
                  Optimale streefwaarde op celniveau
                </p>
                <p className="text-xs text-[#C9DBD3] leading-relaxed">
                  Bij een ratio onder de 3:1 en een Omega-3 gehalte boven de 8% nemen celwanden voedingsstoffen optimaal op en worden afvalstoffen efficiënt afgevoerd.
                </p>
              </div>
              <div>
                <p className="text-2xl font-mono-tabular font-semibold text-[#E8B878] mb-1">
                  120 Dagen
                </p>
                <p className="text-xs font-semibold text-white mb-1">
                  De levenscyclus van rode bloedcellen
                </p>
                <p className="text-xs text-[#C9DBD3] leading-relaxed">
                  Omdat rode bloedcellen zich in circa 120 dagen vernieuwen, begeleiden we je gedurende 4 tot 6 maanden inclusief nulmeting, gericht plan en hertest.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          PAGE 4: HARDLOPEN, WIELRENNEN & TRAINING
          ========================================================= */}
      {activePage === 'duursport' && (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 space-y-16">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs text-[#5B6B63] mb-3">
                Duursport &amp; Bewegingswetenschap · Hardlopen, Wielrennen, PT &amp; Bootcamp Amersfoort
              </p>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#14332A] mb-6">
                Slimmer trainen, efficiënter bewegen en pijnvrij presteren.
              </h1>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-4">
                Of je nu traint voor de Marathon van Amersfoort, trailruns op de Utrechtse Heuvelrug of lange ritten op de racefiets en gravelbike: als duursporter herhaal je dezelfde beweging tienduizenden keren achter elkaar.
              </p>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-8">
                Als bewegingswetenschapper, sportfysiotherapeut én trainer kijk ik niet alleen naar je pijnlijke knie of scheenbeen, maar analyseer ik je volledige biomechanica, pasfrequentie, heupstabiliteit en krachtopbouw.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() =>
                    navigateWithInterest(
                      'contact',
                      'Biomechanische Video-Loopanalyse / Duursport'
                    )
                  }
                  className="px-6 py-3.5 bg-[#184E3B] hover:bg-[#113A2B] text-white font-semibold rounded-lg text-sm whitespace-nowrap shrink-0"
                >
                  Boek een Video-Loopanalyse of Sport-intake
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#E5DEC9] border border-[#E5E0D5]">
              <img
                src={GENERATED_IMAGES.endurance}
                alt="Hardloopanalyse en duursportbegeleiding in Amersfoort Nieuwland"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[320px]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-[#E5E0D5]">
            <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-8">
              <p className="text-xs text-[#5B6B63] mb-2">01 · Voor Hardlopers</p>
              <h2 className="text-xl font-semibold text-[#14332A] mb-3">
                Hardloopbegeleiding &amp; Video-Loopanalyse
              </h2>
              <p className="text-sm text-[#3F4E47] leading-relaxed mb-4">
                We filmen je looppatroon vanuit meerdere hoeken en analyseren je cadans, grondcontacttijd, voetplaatsing (overstriding) en bekken-/heupcontrole. Je krijgt direct toepasbare looptechniek-aanwijzingen en gerichte oefeningen tegen lopersknie, achillespees- en scheenbeenklachten.
              </p>
            </div>

            <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-8">
              <p className="text-xs text-[#5B6B63] mb-2">02 · Voor Wielrenners &amp; Gravelbikers</p>
              <h2 className="text-xl font-semibold text-[#14332A] mb-3">
                Ketenstabiliteit &amp; Kracht voor op de Fiets
              </h2>
              <p className="text-sm text-[#3F4E47] leading-relaxed mb-4">
                Urenlang in een aerodynamische houding zitten vraagt veel van je onderrug, nek en heupbuigers. Wij combineren fasciale mobiliteit van de voorste keten met gerichte core- en bilspieractivatie zodat je meer kracht op de pedalen levert zonder rugpijn.
              </p>
            </div>

            <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-8">
              <p className="text-xs text-[#5B6B63] mb-2">03 · Maatwerk op jouw niveau</p>
              <h2 className="text-xl font-semibold text-[#14332A] mb-3">
                Personal Training (1-op-1 of Small Group)
              </h2>
              <p className="text-sm text-[#3F4E47] leading-relaxed mb-4">
                Verantwoord sterker worden onder het toeziend oog van een bewegingswetenschapper en sportfysio. Ideaal voor revalidatie naar sporthervatting, sportspecifieke krachttraining voor duursporters of het duurzaam opbouwen van spierkracht en fitheid.
              </p>
            </div>

            <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-8">
              <p className="text-xs text-[#5B6B63] mb-2">04 · Buiten sporten in Nieuwland</p>
              <h2 className="text-xl font-semibold text-[#14332A] mb-3">
                Bootcamp Amersfoort Nieuwland
              </h2>
              <p className="text-sm text-[#3F4E47] leading-relaxed mb-4">
                Elke woensdagochtend (09:00 – 10:00 uur) heerlijk buiten trainen in een toegankelijke, gezellige groep in Amersfoort Nieuwland. Functionele oefeningen voor het hele lichaam met altijd professionele aanpassingen wanneer je rekening wilt houden met een blessure.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          PAGE 5: OVER DORIEN & WERKWIJZE
          ========================================================= */}
      {activePage === 'over' && (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 space-y-16">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs text-[#5B6B63] mb-3">
                Over Dorien Janse · Praktijk Ruimtesonde 7 in Amersfoort (Calveen / Nieuwland)
              </p>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#14332A] mb-6">
                Bewegingswetenschapper, Sportfysio MSc, Trainer &amp; Vitaliteitscoach.
              </h1>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-4">
                Mijn drijfveer is simpel: ik neem geen genoegen met “daar moet je maar mee leren leven” of het eindeloos herhalen van hetzelfde standaard oefenprogramma.
              </p>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-6">
                Door mijn achtergrond in de Bewegingswetenschappen én Sportfysiotherapie te combineren met Neurokinetische Therapie, Fasciatherapie en orthomoleculaire celgezondheid, help ik mensen in regio Amersfoort (Nieuwland, Calveen, Hoogland en Vathorst) om hun lichaam weer echt te begrijpen en duurzaam te versterken.
              </p>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#E5DEC9] border border-[#E5E0D5]">
              <img
                src={GENERATED_IMAGES.hero}
                alt="Dorien Janse in haar praktijk aan de Ruimtesonde 7 in Amersfoort"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[320px]"
              />
            </div>
          </div>

          <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-[#14332A] mb-3">
              Tarieven, Behandeltijden &amp; Vergoedingen
            </h2>
            <p className="text-sm text-[#3F4E47] leading-relaxed mb-8 max-w-3xl">
              Om volledige 1-op-1 aandacht en ruime behandeltijden (45 tot 60 minuten) te garanderen, werkt de praktijk bewust contractvrij. Je ontvangt de factuur per e-mail en kunt deze indienen bij je aanvullende zorgverzekering (afhankelijk van je polis wordt doorgaans 60% tot 100% van het marktconforme tarief vergoed).
            </p>
            <div className="divide-y divide-[#DFD9CC] text-sm">
              {[
                {
                  service: 'Intake, ketenonderzoek & eerste behandeling Fysiotherapie / Sportfysio (60 min)',
                  price: '€ 92,00',
                },
                {
                  service: 'Vervolgbehandeling Fysiotherapie / NKT / Fasciatherapie / Dry Needling (45 min)',
                  price: '€ 72,50',
                },
                {
                  service: 'Biomechanische Video-Loopanalyse & Ketenonderzoek (60 min)',
                  price: '€ 95,00',
                },
                {
                  service: 'Het Integrale Vitaliteitstraject (incl. Omega-3 bloedtest, analyse & coaching)',
                  price: 'Op maat na intake',
                },
                {
                  service: 'Personal Training 1-op-1 (60 min)',
                  price: '€ 75,00',
                },
                {
                  service: 'Bootcamp Amersfoort Nieuwland (woensdagochtend 09:00 - 10:00, 10-rittenkaart)',
                  price: '€ 95,00',
                },
              ].map((row, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <span className="font-medium text-[#14332A]">{row.service}</span>
                  <span className="font-mono-tabular font-semibold text-[#184E3B]">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          PAGE 6: CONTACT & AFSPRAAK MAKEN (INCL. VALIDATED FORM)
          ========================================================= */}
      {activePage === 'contact' && (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <p className="text-xs text-[#5B6B63] mb-2">
                  Contact &amp; Afspraak maken · Directe Toegang (geen verwijsbrief nodig)
                </p>
                <h1 className="text-3xl sm:text-4xl font-semibold text-[#14332A] mb-4">
                  Zet vandaag de eerste stap naar blijvend herstel.
                </h1>
                <p className="text-sm sm:text-base text-[#3F4E47] leading-relaxed">
                  Plan direct je intake aan de Ruimtesonde 7 in Amersfoort (Calveen / Nieuwland) of stel je vraag. Ik neem binnen één werkdag persoonlijk contact met je op.
                </p>
              </div>

              <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl p-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#184E3B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#14332A]">Praktijklocatie Amersfoort</p>
                    <p className="text-[#3F4E47]">Ruimtesonde 7, 3824 MZ Amersfoort (Calveen)</p>
                    <p className="text-xs text-[#5B6B63] mt-0.5">
                      Gratis parkeren voor de deur · 3 min vanaf Nieuwland, Hoogland &amp; Vathorst
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#184E3B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#14332A]">Telefoon &amp; WhatsApp</p>
                    <p className="text-[#3F4E47] font-mono-tabular">06 - 24 72 28 54</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#184E3B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#14332A]">E-mail</p>
                    <p className="text-[#3F4E47]">info@dorienjanse.nl</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#184E3B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#14332A]">Behandeltijden</p>
                    <p className="text-[#3F4E47]">Op afspraak (maandag t/m vrijdag)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#14332A] mb-2">
                Plan je intake of stel je vraag
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B63] mb-6">
                Kies het traject waar je meer over wilt weten. Na verzending plannen we samen een passend moment in.
              </p>

              {submittedRequest ? (
                <div
                  role="status"
                  className="bg-[#14332A] text-white rounded-xl p-6 space-y-3"
                >
                  <div className="flex items-center gap-2 text-[#E8B878] font-semibold">
                    <Check className="w-5 h-5" />
                    <span>Bedankt {submittedRequest.name}, je aanvraag is ontvangen!</span>
                  </div>
                  <p className="text-sm text-[#DCE7E2] leading-relaxed">
                    Dorien neemt binnen 24 uur contact met je op via{' '}
                    <strong>{submittedRequest.phone}</strong> of{' '}
                    <strong>{submittedRequest.email}</strong> voor:{' '}
                    <em>{submittedRequest.interest}</em>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRequest(null);
                      setFormInput({
                        name: '',
                        email: '',
                        phone: '',
                        interest: 'Het Vitaliteitstraject & Omega-3 Celgezondheid',
                        message: '',
                      });
                    }}
                    className="mt-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-xs font-medium rounded-lg transition-colors"
                  >
                    Nieuwe aanvraag invullen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="intake-name"
                        className="block text-xs font-semibold text-[#14332A] mb-1.5"
                      >
                        Voor- en achternaam *
                      </label>
                      <input
                        id="intake-name"
                        type="text"
                        value={formInput.name}
                        onChange={(e) =>
                          setFormInput((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder="Bijv. Sanne van Dijk"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#CFC8B8] rounded-lg text-sm text-[#14332A] focus:outline-none focus:border-[#184E3B]"
                      />
                      {formErrors.name && (
                        <p className="text-xs text-[#B42318] mt-1">{formErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="intake-phone"
                        className="block text-xs font-semibold text-[#14332A] mb-1.5"
                      >
                        Telefoonnummer (voor overleg / WhatsApp) *
                      </label>
                      <input
                        id="intake-phone"
                        type="tel"
                        value={formInput.phone}
                        onChange={(e) =>
                          setFormInput((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder="06 12345678"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#CFC8B8] rounded-lg text-sm text-[#14332A] focus:outline-none focus:border-[#184E3B]"
                      />
                      {formErrors.phone && (
                        <p className="text-xs text-[#B42318] mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="intake-email"
                        className="block text-xs font-semibold text-[#14332A] mb-1.5"
                      >
                        E-mailadres *
                      </label>
                      <input
                        id="intake-email"
                        type="email"
                        value={formInput.email}
                        onChange={(e) =>
                          setFormInput((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="jouw@email.nl"
                        className="w-full px-3.5 py-2.5 bg-white border border-[#CFC8B8] rounded-lg text-sm text-[#14332A] focus:outline-none focus:border-[#184E3B]"
                      />
                      {formErrors.email && (
                        <p className="text-xs text-[#B42318] mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="intake-interest"
                        className="block text-xs font-semibold text-[#14332A] mb-1.5"
                      >
                        Waar gaat je voorkeur naar uit? *
                      </label>
                      <select
                        id="intake-interest"
                        value={formInput.interest}
                        onChange={(e) =>
                          setFormInput((prev) => ({ ...prev, interest: e.target.value }))
                        }
                        className="w-full px-3.5 py-2.5 bg-white border border-[#CFC8B8] rounded-lg text-sm text-[#14332A] focus:outline-none focus:border-[#184E3B]"
                      >
                        <option value="Het Vitaliteitstraject & Omega-3 Celgezondheid">
                          Het Vitaliteitstraject &amp; Omega-3 Celgezondheid
                        </option>
                        <option value="Langdurige Klachten & Oorzaakgerichte Sportfysio">
                          Langdurige Klachten &amp; Oorzaakgerichte Sportfysio
                        </option>
                        <option value="Video-Loopanalyse & Duursportbegeleiding">
                          Video-Loopanalyse &amp; Duursportbegeleiding
                        </option>
                        <option value="Personal Training (1:1) of Bootcamp Nieuwland">
                          Personal Training (1:1) of Bootcamp Nieuwland
                        </option>
                      </select>
                      {formErrors.interest && (
                        <p className="text-xs text-[#B42318] mt-1">
                          {formErrors.interest}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="intake-message"
                      className="block text-xs font-semibold text-[#14332A] mb-1.5"
                    >
                      Korte omschrijving van je klacht, sportdoel of hulpvraag *
                    </label>
                    <textarea
                      id="intake-message"
                      rows={4}
                      value={formInput.message}
                      onChange={(e) =>
                        setFormInput((prev) => ({ ...prev, message: e.target.value }))
                      }
                      placeholder="Vertel kort waar je tegenaan loopt en hoe lang dit al speelt..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[#CFC8B8] rounded-lg text-sm text-[#14332A] focus:outline-none focus:border-[#184E3B]"
                    />
                    {formErrors.message && (
                      <p className="text-xs text-[#B42318] mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#184E3B] hover:bg-[#113A2B] text-white font-semibold rounded-lg text-sm transition-colors"
                  >
                    Verstuur intake-aanvraag
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* QUIET FOOTER */}
      <footer className="mt-auto bg-[#14332A] text-[#DCE7E2] py-12 border-t border-[#264D40]">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="font-display text-lg font-semibold text-white mb-2">
              Dorien Janse
            </p>
            <p className="text-xs text-[#A9C6BA] leading-relaxed">
              Personal Fysio, Training &amp; Vitaliteit. Oorzaakgericht herstel en duursportbegeleiding door Bewegingswetenschapper &amp; Sportfysiotherapeut MSc.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Praktijklocatie</p>
            <p className="text-xs text-[#A9C6BA] leading-relaxed">
              Ruimtesonde 7, 3824 MZ Amersfoort
              <br />
              Calveen / Nieuwland (vlakbij Hoogland &amp; Vathorst)
              <br />
              Gratis parkeren voor de deur
            </p>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Snel naar</p>
            <ul className="space-y-1.5 text-xs text-[#A9C6BA]">
              <li>
                <button
                  type="button"
                  onClick={() => onSelectPage('vitaliteit')}
                  className="hover:text-white transition-colors"
                >
                  Het Vitaliteitstraject &amp; Omega-3
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectPage('fysio')}
                  className="hover:text-white transition-colors"
                >
                  Langdurige Klachten &amp; NKT/Fascia
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onSelectPage('duursport')}
                  className="hover:text-white transition-colors"
                >
                  Hardloopanalyse, Wielrennen &amp; PT
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-2">Direct Contact</p>
            <p className="text-xs text-[#A9C6BA] font-mono-tabular mb-1">
              Tel / WhatsApp: 06 - 24 72 28 54
            </p>
            <p className="text-xs text-[#A9C6BA] mb-3">info@dorienjanse.nl</p>
            <button
              type="button"
              onClick={() => onSelectPage('contact')}
              className="px-4 py-2 bg-[#E8B878] text-[#14332A] font-semibold rounded-lg text-xs hover:bg-[#DDA860] transition-colors"
            >
              Afspraak inplannen
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
