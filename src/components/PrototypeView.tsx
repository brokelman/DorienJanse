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
  Building2,
  BookOpen,
} from 'lucide-react';
import {
  PageId,
  GENERATED_IMAGES,
  GEO_FAQS,
  PAGE_SEO_CONFIG,
  PRACTICE_FACTS,
  TEAM_MEMBERS,
  OFFICIAL_TARIFFS,
  KNOWLEDGE_BLOGS,
  CLIENT_REVIEWS,
} from '../data/siteContent';
import { KeuzewijzerWidget } from './KeuzewijzerWidget';
import { IntakeFormInput, validateIntakeForm } from '../utils/strategyLogic';

interface PrototypeViewProps {
  activePage: PageId;
  onSelectPage: (page: PageId) => void;
}

type TariffViewMode = 'both' | 'current' | 'advised';

export const PrototypeView: React.FC<PrototypeViewProps> = ({
  activePage,
  onSelectPage,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');
  const [tariffMode, setTariffMode] = useState<TariffViewMode>('both');
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [formInput, setFormInput] = useState<IntakeFormInput>({
    name: '',
    email: '',
    phone: '',
    interest: 'Vitaliteitstraject (Basis / Lekker / Premium Fit)',
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
            <span className="font-semibold text-[#14332A]">
              {PRACTICE_FACTS.name}
            </span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">
              {PRACTICE_FACTS.street}, {PRACTICE_FACTS.postalCity}
            </span>
            <span aria-hidden="true" className="hidden md:inline">·</span>
            <span className="hidden md:inline font-mono-tabular font-semibold text-[#184E3B]">
              Tel: {PRACTICE_FACTS.phone}
            </span>
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
          PAGE 1: HOME
          ========================================================= */}
      {activePage === 'home' && (
        <>
          {/* HERO SECTION */}
          <section className="max-w-7xl mx-auto px-6 pt-10 pb-14 lg:py-16">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#55665E] mb-4">
                  <span>Dorien Janse (Sportfysio, Bewegingswetenschapper, NKT &amp; Vitaliteit)</span>
                  <span aria-hidden="true">·</span>
                  <span>Michaël Kornmann (Master Manueel Therapeut MSc &amp; Hardloopfysio BLT3)</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[3.35rem] leading-[1.12] font-semibold text-[#14332A] mb-6">
                  Herstel bij de bron. Presteer zonder pijn. Leef met blijvende energie.
                </h1>

                <p className="text-base sm:text-lg text-[#3A4A42] leading-relaxed mb-5 max-w-2xl">
                  Waarom ontstaan klachten en waarom herstellen ze soms niet vanzelf? Loop je al maanden rond met een terugkerende (sport)blessure, merk je dat de balans tussen je belasting en belastbaarheid zoek is, of wil je als hardloper of wielrenner sterker en pijnvrij presteren?
                </p>

                <p className="text-sm sm:text-base text-[#4A5A52] leading-relaxed mb-8 max-w-2xl">
                  Aan de <strong>Ruimtesonde 7 in Amersfoort (Nieuwland / Calveen)</strong> bundelen Dorien Janse en Michaël Kornmann hun expertise. Van Neurokinetische Therapie (NKT – als enige gecertificeerde fysio in Amersfoort), Fasciatherapie, Dry Needling en Master Manuele Therapie tot video-loopanalyse en persoonlijke Vitaliteitscoaching.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      navigateWithInterest(
                        'contact',
                        'Intake Fysiotherapie / Manuele Therapie MSc / NKT'
                      )
                    }
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#184E3B] hover:bg-[#113A2B] text-white font-semibold rounded-lg transition-colors text-sm whitespace-nowrap shrink-0"
                  >
                    <span>Plan jouw afspraak ({PRACTICE_FACTS.phone})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectPage('vitaliteit')}
                    className="px-6 py-3.5 border border-[#C8CFC5] hover:border-[#184E3B] text-[#14332A] font-semibold rounded-lg transition-colors text-sm whitespace-nowrap shrink-0"
                  >
                    Bekijk het Vitaliteitstraject
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-full min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-[#E5DEC9] border border-[#DED7C8]">
                  <img
                    src={GENERATED_IMAGES.hero}
                    alt="Dorien Janse analyseert de loopbeweging en houding van een sporter aan de Ruimtesonde 7 in Amersfoort"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover sepia-[.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                    <p className="text-xs text-[#D5E3DC] mb-1">
                      Ruimtesonde 7, Amersfoort · Door duursporters, voor sporters én niet-sporters
                    </p>
                    <p className="text-lg font-display font-medium leading-snug">
                      “Wij zoeken de achterliggende oorzaak waarom je lichaam niet herstelt — en geven je het vertrouwen in je eigen lijf terug.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FULL-WIDTH 4-COLUMN TRUST & FACT STRIP BELOW HERO SPLIT */}
            <div className="mt-10 pt-8 border-t border-[#E5E0D5] grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-xs text-[#5B6B63] mb-1">Sterk Behandelteam</p>
                <p className="text-sm font-semibold text-[#14332A]">
                  Dorien Janse (Sportfysio &amp; NKT) + Michaël Kornmann (Manueel MSc)
                </p>
              </div>
              <div>
                <p className="text-xs text-[#5B6B63] mb-1">Unieke Specialisatie Amersfoort</p>
                <p className="text-sm font-semibold text-[#14332A]">
                  Enige NKT-gecertificeerde fysio + Hardloopfysio BLT3
                </p>
              </div>
              <div>
                <p className="text-xs text-[#5B6B63] mb-1">Vitaliteitstraject (Ook Online)</p>
                <p className="text-sm font-semibold text-[#14332A] font-mono-tabular">
                  Basis Fit € 130,- · Lekker Fit € 220,- · Premium Fit € 370,-
                </p>
              </div>
              <div>
                <p className="text-xs text-[#5B6B63] mb-1">Zorgverzekeraars &amp; Direct Contact</p>
                <p className="text-sm font-semibold text-[#14332A] font-mono-tabular">
                  Aanvullend verzekerd · Tel: {PRACTICE_FACTS.phone}
                </p>
              </div>
            </div>
          </section>

          {/* DE 3 STRATEGISCHE PIJLERS */}
          <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20 border-t border-[#E5E0D5]">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-medium text-[#5B6B63] mb-2">
                Persoonlijke Fysio, Training &amp; Vitaliteit onder één dak aan de Ruimtesonde 7
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#14332A] mb-4">
                Waarmee mogen wij je op weg helpen?
              </h2>
              <p className="text-base text-[#3F4E47] leading-relaxed">
                Kies het specialisme dat aansluit bij jouw hulpvraag: van het vinden van de oorzaak achter langdurige klachten en het versterken van je herstelvermogen tot video-loopanalyse en Running Bootcamp.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* KROONJUWEEL: HET VITALITEITSTRAJECT (BALANS BELASTING/BELASTBAARHEID) */}
              <article className="lg:col-span-12 bg-[#14332A] text-white rounded-2xl overflow-hidden grid lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#A9C6BA] mb-4">
                      <span>01. Het Vitaliteitstraject (Ook online mogelijk)</span>
                      <span aria-hidden="true">·</span>
                      <span>Balans Belasting &amp; Belastbaarheid</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                      Het Vitaliteitstraject: Versterk je totale herstelvermogen en vind de oorzaak achter aanhoudende klachten
                    </h3>
                    <p className="text-sm sm:text-base text-[#DCE7E2] leading-relaxed mb-6">
                      Wanneer klachten maar niet overgaan of je energieniveau structureel laag blijft, kijken we verder dan alleen het bewegingsapparaat. Samen onderzoeken we de balans tussen belasting en belastbaarheid, slaapkwaliteit, ademhaling, voeding, stress, het immuunsysteem (laaggradige ontstekingen) en ingesleten patronen. Je ontvangt een persoonlijk plan op maat (waarbij onder meer gericht voedings- of supplementadvies zoals magnesium of Omega-3 een ondersteunend onderdeel kan zijn).
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#E4EFEA] mb-8 pt-4 border-t border-[#264D40]">
                      <div>
                        <p className="font-semibold text-[#E8B878] font-mono-tabular mb-1">
                          Pakket A – Basis Fit · € 130,-
                        </p>
                        <p className="text-[#C9DBD3] text-xs">
                          Uitgebreide analyse-vragenlijst + Intake van 1 uur + Uitleg &amp; persoonlijk plan.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#E8B878] font-mono-tabular mb-1">
                          Pakket B – Lekker Fit · € 220,-
                        </p>
                        <p className="text-[#C9DBD3] text-xs">
                          Alles uit Basis Fit + 1 vervolgconsult ter evaluatie na 4 weken.
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#E8B878] font-mono-tabular mb-1">
                          Pakket C – Premium Fit · € 370,-
                        </p>
                        <p className="text-[#C9DBD3] text-xs">
                          Meest gekozen: Basis Fit + 3 vervolgconsulten na 4, 8 en 12 weken.
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
                      <span>Lees alles over het Vitaliteitstraject</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        navigateWithInterest(
                          'contact',
                          'Pakket C – Premium Fit (Vitaliteitstraject)'
                        )
                      }
                      className="px-4 py-3 text-sm font-medium text-[#E4EFEA] hover:text-white underline underline-offset-4 whitespace-nowrap shrink-0"
                    >
                      Meld je direct aan
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5 min-h-[280px] bg-[#1D4237]">
                  <img
                    src={GENERATED_IMAGES.vitality}
                    alt="Vitaliteitstraject consult en persoonlijk herstelplan bij Dorien Janse in Amersfoort"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </article>

              {/* PIJLER 2: LANGDURIGE KLACHTEN, FYSIO, MANUEEL & NKT */}
              <article className="lg:col-span-6 bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-60 bg-[#E5DEC9] overflow-hidden">
                    <img
                      src={GENERATED_IMAGES.physio}
                      alt="Fysiotherapie, Manuele Therapie en Neurokinetische Therapie behandeling in Amersfoort"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-xs text-[#5B6B63] mb-3">
                      <span>02. Dorien Janse &amp; Michaël Kornmann</span>
                      <span aria-hidden="true">·</span>
                      <span>NKT, Manuele Therapie MSc, Fascia &amp; Dry Needling</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#14332A] mb-3">
                      Langdurige Klachten, Sportfysio &amp; Manuele Therapie
                    </h3>
                    <p className="text-sm text-[#3F4E47] leading-relaxed mb-4">
                      Waarom herstelt een klacht soms niet vanzelf? Met <strong>Neurokinetische Therapie (NKT – uniek in Amersfoort)</strong>, <strong>Master Manuele Therapie MSc</strong>, Fasciatherapie, Dry Needling en inzicht in de neurofysiologie van pijn pakken we de bron van de klacht aan en stimuleren we je zelfredzaamheid.
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-4 border-t border-[#E5E0D5] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectPage('fysio')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#184E3B] hover:underline whitespace-nowrap"
                  >
                    <span>Bekijk onze behandelmethoden</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>

              {/* PIJLER 3: DUURSPORT (HARDLOFYSIO, WIELRENNEN, PT & RUNNING BOOTCAMP) */}
              <article className="lg:col-span-6 bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="h-60 bg-[#E5DEC9] overflow-hidden">
                    <img
                      src={GENERATED_IMAGES.endurance}
                      alt="Hardloopfysiotherapie, videoanalyse en Running Bootcamp in Amersfoort Nieuwland"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-xs text-[#5B6B63] mb-3">
                      <span>03. Door Duursporters, Voor Duursporters</span>
                      <span aria-hidden="true">·</span>
                      <span>AV Triathlon Ervaring &amp; BLT3</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#14332A] mb-3">
                      Hardloopfysiotherapie, Wielrennen, PT &amp; Running Bootcamp
                    </h3>
                    <p className="text-sm text-[#3F4E47] leading-relaxed mb-4">
                      Van het 4-delige <strong>Hardloopfysiotherapie pakket (€ 290,- incl. videoanalyse buiten én op de loopband)</strong> en wielren-specifieke krachttraining tot 1-op-1 Personal Training, Small Group en <strong>Running Bootcamp in Nieuwland</strong> (ma/do gemengd, vr vrouwen &amp; Moeder/Kind – gratis proefles!).
                    </p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-4 border-t border-[#E5E0D5] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectPage('duursport')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#184E3B] hover:underline whitespace-nowrap"
                  >
                    <span>Bekijk Hardlooppakket, PT &amp; Bootcamp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            </div>
          </section>

          {/* INTERACTIVE KEUZEWIJZER WIDGET */}
          <KeuzewijzerWidget onNavigate={navigateWithInterest} />

          {/* ECHTE KLANTRECENSIES (SOCIAL PROOF) */}
          <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-medium text-[#5B6B63] mb-2">
                Echte klantervaringen · Ruimtesonde 7 Amersfoort
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#14332A] mb-3">
                Wat cliënten en sporters ervaren bij Dorien &amp; Michaël
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {CLIENT_REVIEWS.map((rev) => (
                <blockquote
                  key={rev.id}
                  className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-7 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs text-[#5B6B63] mb-3 font-medium">
                      {rev.context}
                    </p>
                    <p className="text-sm text-[#2C3B34] leading-relaxed mb-6">
                      {rev.quote}
                    </p>
                  </div>
                  <footer className="text-xs text-[#4A5A52] pt-4 border-t border-[#E5E0D5]">
                    <strong className="text-[#14332A]">{rev.author}</strong> ·{' '}
                    {rev.treatmentTag}
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>

          {/* KENNISBANK / BLOGS VAN DORIEN (SEO & AI AUTORITEITSBEWIJS) */}
          <section className="bg-[#F3EFE6] border-t border-[#E5E0D5] py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-10">
                <p className="text-xs font-medium text-[#5B6B63] mb-2">
                  Kennisbank &amp; Blogs op dorienjanse.nl · Wetenschappelijke verdieping
                </p>
                <h2 className="text-3xl font-semibold text-[#14332A] mb-3">
                  Artikelen &amp; inzichten over herstel, slaap, ademhaling en duursport
                </h2>
                <p className="text-sm text-[#3F4E47]">
                  Klik op een onderwerp uit Doriens kennisbank voor de kerninzichten die ook als autoriteitsbron dienen voor zoekmachines en AI-assistenten.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {KNOWLEDGE_BLOGS.map((blog) => {
                  const isSelected = selectedBlogId === blog.id;
                  return (
                    <article
                      key={blog.id}
                      className="bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#5B6B63] mb-2">
                          <BookOpen className="w-3.5 h-3.5 text-[#184E3B]" />
                          <span>{blog.category}</span>
                        </div>
                        <h3 className="text-base font-semibold text-[#14332A] mb-2">
                          {blog.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#3F4E47] leading-relaxed mb-4">
                          {blog.summary}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-[#EFECE4]">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedBlogId(isSelected ? null : blog.id)
                          }
                          className="text-xs font-semibold text-[#184E3B] hover:underline"
                        >
                          {isSelected ? 'Verberg kerninzicht' : `Kerninzicht: ${blog.keyInsight} →`}
                        </button>
                        {isSelected && (
                          <p className="mt-2 text-xs text-[#14332A] bg-[#EFECE4] p-3 rounded-lg">
                            <strong>Praktische toepassing:</strong> Onderdeel van de integrale analyse binnen de praktijk en het Vitaliteitstraject aan de Ruimtesonde 7.
                          </p>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* GEO / AI-KENNISBANK & FAQ */}
          <section className="py-16 lg:py-20 border-t border-[#E5E0D5]">
            <div className="max-w-4xl mx-auto px-6">
              <div className="mb-10">
                <p className="text-xs font-medium text-[#5B6B63] mb-2">
                  Veelgestelde vragen · Fysiotherapie, Vitaliteit, Duursport &amp; Praktijkverhuur
                </p>
                <h2 className="text-3xl font-semibold text-[#14332A] mb-3">
                  Directe antwoorden op veelgestelde vragen
                </h2>
              </div>

              <div className="space-y-3">
                {GEO_FAQS.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl overflow-hidden"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#EAE4D7] transition-colors"
                      >
                        <div>
                          <p className="text-xs text-[#5B6B63] mb-1">
                            Focus: {faq.scientificMechanism}
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
                        <div className="px-6 pb-6 pt-2 text-sm text-[#3A4A42] leading-relaxed border-t border-[#E5E0D5] bg-[#FAF8F5]">
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
                Sportfysiotherapie, Master Manuele Therapie MSc &amp; NKT · Ruimtesonde 7 Amersfoort
              </p>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#14332A] mb-6">
                Waarom ontstaan klachten en waarom herstellen ze soms niet vanzelf?
              </h1>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-4">
                Loop je al langer rond met een blessure of pijnklacht die maar niet overgaat? Bij <strong>Dorien Janse</strong> (Sportfysiotherapeut, Bewegingswetenschapper &amp; enige NKT-gecertificeerde fysio in Amersfoort) en <strong>Michaël Kornmann</strong> (Fysiotherapeut, Master Manueel Therapeut MSc &amp; Hardloopfysio BLT3) zoeken we naar de daadwerkelijke oorzaak achter jouw klacht.
              </p>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-8">
                Wij combineren diepgaand ketenonderzoek met kennis over de <strong>neurofysiologie van pijn</strong> (de biologische en fysiologische processen achter pijnervaring). Ons doel is om je met positivisme weer vertrouwen te geven in je eigen lichaam en je zelfredzaam te maken, zodat je niet afhankelijk wordt van zorg.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() =>
                    navigateWithInterest(
                      'contact',
                      'Intake Fysiotherapie / Manuele Therapie MSc / NKT'
                    )
                  }
                  className="px-6 py-3.5 bg-[#184E3B] hover:bg-[#113A2B] text-white font-semibold rounded-lg text-sm whitespace-nowrap shrink-0"
                >
                  Plan je intake bij Dorien of Michaël
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#E5DEC9] border border-[#E5E0D5]">
              <img
                src={GENERATED_IMAGES.physio}
                alt="Hands-on ketenonderzoek, NKT en manuele therapie aan de Ruimtesonde 7 in Amersfoort"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[320px]"
              />
            </div>
          </div>

          <div className="border-t border-[#E5E0D5] pt-14">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#14332A] mb-8">
              Onze specialistische behandelmethoden
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Neurokinetische Therapie (NKT – Uniek in Amersfoort)',
                  desc: 'Dorien is de enige gecertificeerde NKT-fysiotherapeut in Amersfoort. Na een oude blessure, val of litteken kan het motorisch controlecentrum in het brein spieren verkeerd blijven aansturen. Met NKT testen en resetten we deze compensatiepatronen.',
                },
                {
                  num: '02',
                  title: 'Master Manuele Therapie MSc & Pijn-neurofysiologie',
                  desc: 'Michaël Kornmann (MSc) is gespecialiseerd in complexe gewrichts- en wervelkolomklachten en de biologische processen achter pijnervaring. Gericht op herstel van bewegingsvrijheid en vertrouwen in je eigen lijf.',
                },
                {
                  num: '03',
                  title: 'Fasciatherapie & Dry Needling',
                  desc: 'Zowel Dorien als Michaël zijn gespecialiseerd in Dry Needling. In combinatie met Fasciatherapie ontspannen we diepliggende spierknopen (triggerpoints) en maken we verklevingen in het bindweefselnetwerk vrij.',
                },
                {
                  num: '04',
                  title: 'Sportfysiotherapie & Revalidatie (Oefenzaal 65 m²)',
                  desc: 'Vanuit de behandelkamer schakelen we direct door naar onze compleet ingerichte oefenzaal van 65 m² om je belastbaarheid sportspecifiek op te bouwen.',
                },
                {
                  num: '05',
                  title: 'Ademhalingstherapie & Spanningsregulatie',
                  desc: 'Een verstoorde ademhaling houdt nek-, schouder- en hoofdpijnklachten vaak onbewust in stand. Wij brengen je ademhalingspatroon in rust en tijdens inspanning weer in balans.',
                },
                {
                  num: '06',
                  title: 'Medical Taping (€ 15,-) & Hooikoorts Taping (€ 32,-)',
                  desc: 'Ondersteunend tapen na bijvoorbeeld een zweepslag of enkelverzwikking (€ 15,- eigen bijdrage) én effectieve Hooikoorts taping (2x intapen inclusief tape voor € 32,-).',
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
          PAGE 3: VITALITEIT & LEEFSTIJL
          ========================================================= */}
      {activePage === 'vitaliteit' && (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 space-y-16">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-xs text-[#5B6B63] mb-3">
                Het Vitaliteitstraject (Ook online mogelijk) · Dorien Janse Amersfoort
              </p>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#14332A] mb-6">
                Het Vitaliteitstraject: Herstel de balans tussen belasting en belastbaarheid.
              </h1>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-4">
                Waarom herstellen sommige klachten niet en waarom voel je je soms structureel vermoeid? In het Vitaliteitstraject kijken we naar jouw <strong>totale herstelvermogen</strong> en zoeken we de achterliggende oorzaak achter aanhoudende klachten.
              </p>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-8">
                We brengen alle bepalende pijlers samen in kaart: de balans tussen <strong>belasting en belastbaarheid, slaap, ademhaling, voeding, stress, het immuunsysteem (laaggradige ontstekingen) en ingesleten patronen</strong>. Waar passend binnen jouw persoonlijke plan kijken we ook naar ondersteunend voedings- of supplementadvies (zoals magnesium of Omega-3).
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() =>
                    navigateWithInterest(
                      'contact',
                      'Pakket C – Premium Fit (Vitaliteitstraject)'
                    )
                  }
                  className="px-6 py-3.5 bg-[#184E3B] hover:bg-[#113A2B] text-white font-semibold rounded-lg text-sm whitespace-nowrap shrink-0"
                >
                  Meld je aan voor het Vitaliteitstraject
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#E5DEC9] border border-[#E5E0D5]">
              <img
                src={GENERATED_IMAGES.vitality}
                alt="Vitaliteitstraject en leefstijlcoaching bij Dorien Janse in Amersfoort"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[320px]"
              />
            </div>
          </div>

          {/* DE 3 OFFICIËLE VITALITEITSPAKKETTEN */}
          <div className="bg-[#14332A] text-white rounded-2xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <p className="text-xs text-[#A9C6BA] mb-2">
                Officiële Pakketten 2026 · Zowel in de praktijk aan de Ruimtesonde 7 als online mogelijk
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                Kies het Vitaliteitspakket dat bij jouw hulpvraag past
              </h2>
              <p className="text-sm text-[#DCE7E2]">
                Elk pakket start met een uitgebreide analyse-vragenlijst vooraf, gevolgd door een 1-op-1 intake van een vol uur en een concreet persoonlijk plan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1B3F34] border border-[#2C5B4C] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#A9C6BA] mb-1">Pakket A</p>
                  <h3 className="text-xl font-semibold text-white mb-2">Basis Fit</h3>
                  <p className="text-2xl font-mono-tabular font-semibold text-[#E8B878] mb-1">
                    € 130,-
                  </p>
                  <p className="text-xs text-[#A9C6BA] mb-4 font-mono-tabular">
                    Marktconform advies Amersfoort: € 145,-
                  </p>
                  <p className="text-xs sm:text-sm text-[#DCE7E2] leading-relaxed">
                    Uitgebreide analyse vragenlijst + Intake van 1 uur + Heldere uitleg en persoonlijk plan van aanpak.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigateWithInterest('contact', 'Pakket A – Basis Fit (€ 130,-)')
                  }
                  className="mt-6 w-full py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Kies Pakket A – Basis Fit
                </button>
              </div>

              <div className="bg-[#1B3F34] border border-[#2C5B4C] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#A9C6BA] mb-1">Pakket B</p>
                  <h3 className="text-xl font-semibold text-white mb-2">Lekker Fit</h3>
                  <p className="text-2xl font-mono-tabular font-semibold text-[#E8B878] mb-1">
                    € 220,-
                  </p>
                  <p className="text-xs text-[#A9C6BA] mb-4 font-mono-tabular">
                    Marktconform advies Amersfoort: € 235,-
                  </p>
                  <p className="text-xs sm:text-sm text-[#DCE7E2] leading-relaxed">
                    Alles uit Basis Fit + 1 vervolgconsult ter evaluatie en bijsturing na 4 weken.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigateWithInterest('contact', 'Pakket B – Lekker Fit (€ 220,-)')
                  }
                  className="mt-6 w-full py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Kies Pakket B – Lekker Fit
                </button>
              </div>

              <div className="bg-[#235042] border-2 border-[#E8B878] rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#E8B878] font-semibold mb-1">
                    Pakket C · Meest gekozen voor blijvende verandering
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-2">Premium Fit</h3>
                  <p className="text-2xl font-mono-tabular font-semibold text-[#E8B878] mb-1">
                    € 370,-
                  </p>
                  <p className="text-xs text-[#A9C6BA] mb-4 font-mono-tabular">
                    Marktconform advies Amersfoort: € 385,-
                  </p>
                  <p className="text-xs sm:text-sm text-[#DCE7E2] leading-relaxed">
                    Alles uit Basis Fit + 3 vervolgconsulten ter evaluatie na 4, 8 en 12 weken om nieuwe patronen duurzaam te verankeren.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigateWithInterest('contact', 'Pakket C – Premium Fit (€ 370,-)')
                  }
                  className="mt-6 w-full py-2.5 bg-[#E8B878] hover:bg-[#DDA860] text-[#14332A] text-xs font-semibold rounded-lg transition-colors"
                >
                  Kies Pakket C – Premium Fit
                </button>
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
                Hardloopfysiotherapie (BLT3), Wielrennen, PT &amp; Running Bootcamp · Amersfoort Nieuwland
              </p>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#14332A] mb-6">
                Door duursporters, voor duursporters: slimmer trainen en pijnvrij presteren.
              </h1>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-4">
                Zowel <strong>Dorien Janse</strong> (schaatste tot haar 25e fanatiek, wielrende op landelijk niveau, liep in 2023 o.a. de marathon en is jarenlang lid van AV Triathlon) als <strong>Michaël Kornmann</strong> (Hardloopfysiotherapeut BLT3, hardlooptrainer bij AV Triathlon, wielrenner en fitnesser) kennen de wereld van de geblesseerde duursporter van binnenuit.
              </p>
              <p className="text-base text-[#3A4A42] leading-relaxed mb-8">
                Of je nu traint voor een 5 km, marathon of ультраtrail, of klachtenvrij op de racefiets wilt zitten: wij combineren videoanalyse (buiten én op de loopband) met loopscholing, ketenkracht en motiverende trainingen.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() =>
                    navigateWithInterest(
                      'contact',
                      'Hardloopfysiotherapie pakket (4x – € 290,-)'
                    )
                  }
                  className="px-6 py-3.5 bg-[#184E3B] hover:bg-[#113A2B] text-white font-semibold rounded-lg text-sm whitespace-nowrap shrink-0"
                >
                  Boek het Hardloopfysiotherapie pakket (€ 290,-)
                </button>
                <button
                  type="button"
                  onClick={() =>
                    navigateWithInterest(
                      'contact',
                      'Gratis Proefles Running Bootcamp Nieuwland'
                    )
                  }
                  className="px-6 py-3.5 border border-[#C8CFC5] hover:border-[#184E3B] text-[#14332A] font-semibold rounded-lg text-sm whitespace-nowrap shrink-0"
                >
                  Gratis proefles Running Bootcamp
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#E5DEC9] border border-[#E5E0D5]">
              <img
                src={GENERATED_IMAGES.endurance}
                alt="Hardloopanalyse en Running Bootcamp in Amersfoort Nieuwland"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[320px]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-[#E5E0D5]">
            <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-8">
              <p className="text-xs text-[#5B6B63] font-mono-tabular mb-2">
                01 · Hardloopfysiotherapie Pakket (4x) · € 290,-
              </p>
              <h2 className="text-xl font-semibold text-[#14332A] mb-3">
                Videoanalyse (buiten én op de loopband) + 3 Trainingen
              </h2>
              <p className="text-sm text-[#3F4E47] leading-relaxed">
                Ons complete pakket voor hardlopers en ultralopers bestaat uit een uitgebreide intake van 1 uur inclusief videoanalyse van je looptechniek (zowel buiten als binnen op de loopband), gevolgd door 3 gerichte trainingen van 45 minuten waarin we werken aan loopscholing, cadans en ketenstabiliteit.
              </p>
            </div>

            <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-8">
              <p className="text-xs text-[#5B6B63] font-mono-tabular mb-2">
                02 · Running Bootcamp Nieuwland · Gratis Proefles
              </p>
              <h2 className="text-xl font-semibold text-[#14332A] mb-3">
                Maandag &amp; Donderdag (M/V) · Vrijdag Vrouwen &amp; Moeder/Kind
              </h2>
              <p className="text-sm text-[#3F4E47] leading-relaxed">
                Verantwoord buiten trainen in Amersfoort Nieuwland onder begeleiding van een sportfysiotherapeut. Op <strong>maandag en donderdag</strong> voor mannen en vrouwen; op <strong>vrijdag</strong> speciaal voor vrouwen (ook Moeder &amp; Kind bootcamp mogelijk). Keuze uit knipkaart (10x € 100,-), 3-maandenabonnement (€ 80,- / € 140,-) of jaarabonnement (€ 305,- / € 532,-).
              </p>
            </div>

            <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-8">
              <p className="text-xs text-[#5B6B63] font-mono-tabular mb-2">
                03 · Personal Training, Small Group &amp; Zelfstandig Trainen
              </p>
              <h2 className="text-xl font-semibold text-[#14332A] mb-3">
                Individueel (30/45 min), Small Group (max. 4 pers.) of Oefenzaal
              </h2>
              <p className="text-sm text-[#3F4E47] leading-relaxed">
                Train 1-op-1 in onze oefenzaal van 65 m² (Intake € 75,-, PT 30 min € 50,- of 45 min € 75,-), kies voor Small Group met max. 4 personen (knipkaart 10x 30 min € 185,-), of train zelfstandig op afgesproken tijden met de 12x knipkaart (€ 85,-).
              </p>
            </div>

            <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-8">
              <p className="text-xs text-[#5B6B63] font-mono-tabular mb-2">
                04 · Wielrennen &amp; Sportmassage (Ook als cadeaubon)
              </p>
              <h2 className="text-xl font-semibold text-[#14332A] mb-3">
                Kracht voor Wielrenners &amp; Herstel-Sportmassage
              </h2>
              <p className="text-sm text-[#3F4E47] leading-relaxed">
                Gerichte core- en ketentraining voor wielrenners én stevige sportmassage voor optimaal spierherstel: 30 minuten (€ 39,-), 45 minuten (€ 58,50) of een knipkaart 10x 30 minuten (€ 375,-). Ook verkrijgbaar als cadeaubon!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          PAGE 5: OVER ONS, TEAM (DORIEN & MICHAËL), TARIEVEN & VERHUUR
          ========================================================= */}
      {activePage === 'over' && (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 space-y-16">
          <div className="max-w-3xl">
            <p className="text-xs text-[#5B6B63] mb-2">
              Ons Team aan de Ruimtesonde 7 in Amersfoort · Praktijk AGB: {PRACTICE_FACTS.practiceAgb} · KvK: {PRACTICE_FACTS.kvk}
            </p>
            <h1 className="text-3xl sm:text-5xl font-semibold text-[#14332A] mb-4">
              Maak kennis met Dorien Janse &amp; Michaël Kornmann
            </h1>
            <p className="text-base text-[#3A4A42] leading-relaxed">
              Dorien werkt niet alleen! Samen vormen Dorien en Michaël een hecht, deskundig team. Beiden zijn actief bij AV Triathlon in Amersfoort en combineren wetenschappelijke diepgang met jarenlange eigen duursport- en praktijkervaring.
            </p>
          </div>

          {/* 2 TEAM PROFILES: DORIEN & MICHAËL */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.name}
                className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="pb-4 border-b border-[#DFD9CC]">
                    <h2 className="text-2xl font-semibold text-[#14332A]">
                      {member.name}
                    </h2>
                    <p className="text-sm font-medium text-[#184E3B] mt-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#5B6B63] font-mono-tabular mt-2">
                      E-mail: {member.email} · {member.registrations.join(' · ')}
                    </p>
                  </div>

                  <p className="text-sm text-[#2C3B34] leading-relaxed">
                    {member.intro}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-[#14332A] mb-2">
                      Aandachtsgebieden &amp; Specialisaties:
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#3A4A42]">
                      {member.specializations.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#184E3B] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl p-4 space-y-2 text-xs sm:text-sm text-[#3A4A42]">
                    <p>
                      <strong className="text-[#14332A]">Sportieve achtergrond:</strong>{' '}
                      {member.sportsBackground}
                    </p>
                    <p>
                      <strong className="text-[#14332A]">Visie op herstel:</strong>{' '}
                      {member.vision}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* OFFICIËLE TARIEVEN 2026 & ADVIES AMERSFOORT MET TOGGLE */}
          <div className="space-y-8 pt-8 border-t border-[#E5E0D5]">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <p className="text-xs text-[#5B6B63] mb-2">
                  Volledig &amp; Feitelijk Tarievenoverzicht (2026)
                </p>
                <h2 className="text-3xl font-semibold text-[#14332A] mb-3">
                  Tarieven, Pakketten &amp; Zorgverzekeraars
                </h2>
                <p className="text-sm text-[#3F4E47] leading-relaxed">
                  {PRACTICE_FACTS.insuranceNote}
                </p>
              </div>

              {/* Interactive Tariff Mode Switcher */}
              <div className="flex items-center gap-1 p-1 bg-[#EFECE4] border border-[#DFD9CC] rounded-xl shrink-0">
                <button
                  type="button"
                  onClick={() => setTariffMode('both')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    tariffMode === 'both'
                      ? 'bg-[#14332A] text-white font-semibold'
                      : 'text-[#4A5A52] hover:text-[#14332A]'
                  }`}
                >
                  Huidig + Advies Amersfoort
                </button>
                <button
                  type="button"
                  onClick={() => setTariffMode('current')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    tariffMode === 'current'
                      ? 'bg-[#14332A] text-white font-semibold'
                      : 'text-[#4A5A52] hover:text-[#14332A]'
                  }`}
                >
                  Alleen Huidige Tarieven (2026)
                </button>
                <button
                  type="button"
                  onClick={() => setTariffMode('advised')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                    tariffMode === 'advised'
                      ? 'bg-[#14332A] text-white font-semibold'
                      : 'text-[#4A5A52] hover:text-[#14332A]'
                  }`}
                >
                  Marktconform Advies Amersfoort
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {OFFICIAL_TARIFFS.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-[#14332A] mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#4A5A52] leading-relaxed mb-5">
                      {cat.subtitle}
                    </p>

                    <div className="divide-y divide-[#DFD9CC] text-sm">
                      {cat.items.map((item, idx) => (
                        <div key={idx} className="py-3 space-y-1">
                          <div className="flex items-start justify-between gap-4">
                            <span
                              className={`font-medium ${
                                item.highlight
                                  ? 'text-[#184E3B] font-semibold'
                                  : 'text-[#14332A]'
                              }`}
                            >
                              {item.name}
                            </span>
                            <div className="text-right font-mono-tabular shrink-0">
                              {tariffMode === 'current' && (
                                <span className="font-semibold text-[#14332A]">
                                  {item.currentPrice}
                                </span>
                              )}
                              {tariffMode === 'advised' && (
                                <span className="font-semibold text-[#184E3B]">
                                  {item.advisedPrice || item.currentPrice}
                                </span>
                              )}
                              {tariffMode === 'both' && (
                                <div>
                                  <span className="font-semibold text-[#14332A]">
                                    {item.currentPrice}
                                  </span>
                                  {item.advisedPrice &&
                                    item.advisedPrice !== item.currentPrice && (
                                      <span className="block text-xs text-[#5B6B63]">
                                        Advies: {item.advisedPrice}
                                      </span>
                                    )}
                                </div>
                              )}
                            </div>
                          </div>
                          {item.description && (
                            <p className="text-xs text-[#5B6B63] leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {cat.footnote && (
                    <p className="mt-6 pt-4 border-t border-[#DFD9CC] text-xs text-[#4A5A52] leading-relaxed">
                      <strong>Vergoeding:</strong> {cat.footnote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SAMENWERKING & VERHUUR PRAKTIJKRUIMTE (1E VERDIEPING RUIMTESONDE 7) */}
          <div className="bg-[#14332A] text-white rounded-2xl p-8 sm:p-10">
            <div className="max-w-3xl mb-6">
              <div className="flex items-center gap-2 text-xs text-[#A9C6BA] mb-2">
                <Building2 className="w-4 h-4 text-[#E8B878]" />
                <span>Voor (para)medici, coaches &amp; personal trainers in Amersfoort</span>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-2">
                {PRACTICE_FACTS.roomRental.title}
              </h2>
              <p className="text-sm text-[#DCE7E2] leading-relaxed">
                {PRACTICE_FACTS.roomRental.description}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {PRACTICE_FACTS.roomRental.spaces.map((sp) => (
                <div
                  key={sp.name}
                  className="bg-[#1B3F34] border border-[#2C5B4C] rounded-xl p-5"
                >
                  <p className="text-lg font-mono-tabular font-semibold text-[#E8B878] mb-1">
                    {sp.size}
                  </p>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {sp.name}
                  </h3>
                  <p className="text-xs text-[#C9DBD3] leading-relaxed">
                    {sp.usage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          PAGE 6: CONTACT, OPENINGSTIJDEN, VERHUUR & AFSPRAAK MAKEN
          ========================================================= */}
      {activePage === 'contact' && (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16 space-y-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs text-[#5B6B63] mb-2">
                  Contact &amp; Afspraak maken · {PRACTICE_FACTS.name}
                </p>
                <h1 className="text-3xl sm:text-4xl font-semibold text-[#14332A] mb-4">
                  Neem contact op of plan direct je afspraak.
                </h1>
                <p className="text-sm sm:text-base text-[#3F4E47] leading-relaxed">
                  Bel of WhatsApp naar <strong>{PRACTICE_FACTS.phone}</strong>, stuur een e-mail of vul het formulier in. Wij helpen je graag verder aan de Ruimtesonde 7 in Amersfoort.
                </p>
              </div>

              <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl p-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#184E3B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#14332A]">Adres</p>
                    <p className="text-[#3F4E47]">
                      {PRACTICE_FACTS.street}, {PRACTICE_FACTS.postalCity}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#184E3B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#14332A]">Telefoon &amp; WhatsApp</p>
                    <p className="text-[#3F4E47] font-mono-tabular font-semibold">
                      {PRACTICE_FACTS.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#184E3B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#14332A]">E-mailadressen</p>
                    <p className="text-[#3F4E47]">
                      Algemeen / Dorien: <strong>{PRACTICE_FACTS.emailDorien}</strong>
                    </p>
                    <p className="text-[#3F4E47]">
                      Michaël Kornmann: <strong>{PRACTICE_FACTS.emailMichael}</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#DFD9CC]">
                  <Clock className="w-5 h-5 text-[#184E3B] shrink-0 mt-0.5" />
                  <div className="w-full">
                    <p className="font-semibold text-[#14332A] mb-1.5">Openingstijden</p>
                    <dl className="space-y-1 text-xs text-[#3F4E47]">
                      {PRACTICE_FACTS.openingHours.map((oh) => (
                        <div key={oh.day} className="flex justify-between gap-2">
                          <dt className="font-medium text-[#14332A]">{oh.day}:</dt>
                          <dd className="font-mono-tabular">{oh.hours}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#DFD9CC] text-xs text-[#5B6B63] space-y-1 font-mono-tabular">
                  <p>Praktijk AGB-code: {PRACTICE_FACTS.practiceAgb} | KvK-nr: {PRACTICE_FACTS.kvk}</p>
                  <p>Dorien Janse: BIG {PRACTICE_FACTS.dorienBig} | AGB {PRACTICE_FACTS.dorienAgb}</p>
                  <p>Michaël Kornmann: BIG {PRACTICE_FACTS.michaelBig}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F3EFE6] border border-[#E5E0D5] rounded-2xl p-6 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#14332A] mb-2">
                Afspraak maken of vraag stellen
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6B63] mb-6">
                Kies het gewenste traject of consult bij Dorien of Michaël.
              </p>

              {submittedRequest ? (
                <div
                  role="status"
                  className="bg-[#14332A] text-white rounded-xl p-6 space-y-3"
                >
                  <div className="flex items-center gap-2 text-[#E8B878] font-semibold">
                    <Check className="w-5 h-5" />
                    <span>Bedankt {submittedRequest.name}, je bericht is ontvangen!</span>
                  </div>
                  <p className="text-sm text-[#DCE7E2] leading-relaxed">
                    Wij nemen zo snel mogelijk contact met je op via{' '}
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
                        interest: 'Vitaliteitstraject (Basis / Lekker / Premium Fit)',
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
                        Telefoonnummer *
                      </label>
                      <input
                        id="intake-phone"
                        type="tel"
                        value={formInput.phone}
                        onChange={(e) =>
                          setFormInput((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder="06-14184448"
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
                        <option value="Vitaliteitstraject (Basis / Lekker / Premium Fit)">
                          Vitaliteitstraject (Basis / Lekker / Premium Fit)
                        </option>
                        <option value="Intake Fysiotherapie / Manuele Therapie MSc / NKT">
                          Intake Fysiotherapie / Manuele Therapie MSc / NKT
                        </option>
                        <option value="Hardloopfysiotherapie pakket (4x – € 290,-)">
                          Hardloopfysiotherapie pakket (4x – € 290,-)
                        </option>
                        <option value="Gratis Proefles Running Bootcamp Nieuwland">
                          Gratis Proefles Running Bootcamp Nieuwland
                        </option>
                        <option value="Personal Training / Small Group / Sportmassage">
                          Personal Training / Small Group / Sportmassage
                        </option>
                        <option value="Verhuur Praktijkruimte / Oefenzaal (Ruimtesonde 7)">
                          Verhuur Praktijkruimte / Oefenzaal (Ruimtesonde 7)
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
                      placeholder="Vertel kort waar je tegenaan loopt en of je voorkeur hebt voor Dorien of Michaël..."
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
                    Verstuur aanvraag
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* QUIET FOOTER WITH EXACT REGISTRATIONS, OPENING HOURS & ROOM RENTAL */}
      <footer className="mt-auto bg-[#14332A] text-[#DCE7E2] py-12 border-t border-[#264D40]">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="font-display text-lg font-semibold text-white mb-2">
              {PRACTICE_FACTS.name}
            </p>
            <p className="text-xs text-[#A9C6BA] leading-relaxed mb-3">
              Dorien Janse (Sportfysio, Bewegingswetenschapper, NKT &amp; Vitaliteitscoach) &amp; Michaël Kornmann (Fysiotherapeut, Master Manueel Therapeut MSc &amp; Hardloopfysio BLT3).
            </p>
            <p className="text-xs text-[#8FAEA1] font-mono-tabular">
              Praktijk AGB: {PRACTICE_FACTS.practiceAgb} · KvK: {PRACTICE_FACTS.kvk}
              <br />
              BIG Dorien: {PRACTICE_FACTS.dorienBig} (AGB {PRACTICE_FACTS.dorienAgb})
              <br />
              BIG Michaël: {PRACTICE_FACTS.michaelBig}
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Adres &amp; Openingstijden</p>
            <p className="text-xs text-[#A9C6BA] mb-2">
              {PRACTICE_FACTS.street}, {PRACTICE_FACTS.postalCity}
            </p>
            <ul className="space-y-1 text-xs text-[#A9C6BA] font-mono-tabular">
              {PRACTICE_FACTS.openingHours.map((oh) => (
                <li key={oh.day}>
                  {oh.day}: {oh.hours}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Verhuur Praktijkruimte (1e verd.)</p>
            <p className="text-xs text-[#A9C6BA] leading-relaxed mb-2">
              Per dagdeel te huur aan de Ruimtesonde 7 voor (para)medici en personal trainers:
            </p>
            <ul className="space-y-1 text-xs text-[#DCE7E2] font-mono-tabular">
              <li>• Behandelkamers (16 m²)</li>
              <li>• Cursus-/groepsruimte yoga/pilates (31 m²)</li>
              <li>• Compleet ingerichte oefenzaal (65 m²)</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-2">Direct Contact</p>
            <p className="text-xs text-[#E8B878] font-mono-tabular font-semibold mb-1">
              Tel / WhatsApp: {PRACTICE_FACTS.phone}
            </p>
            <p className="text-xs text-[#A9C6BA] mb-1">
              Dorien: {PRACTICE_FACTS.emailDorien}
            </p>
            <p className="text-xs text-[#A9C6BA] mb-4">
              Michaël: {PRACTICE_FACTS.emailMichael}
            </p>
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
