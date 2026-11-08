import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { PageId } from '../data/siteContent';
import { KeuzewijzerInput, recommendTrajectory } from '../utils/strategyLogic';

interface KeuzewijzerWidgetProps {
  onNavigate: (page: PageId, preselectedInterest?: string) => void;
}

export const KeuzewijzerWidget: React.FC<KeuzewijzerWidgetProps> = ({ onNavigate }) => {
  const [input, setInput] = useState<KeuzewijzerInput>({
    primaryChallenge: 'pain_chronic',
    duration: 'months',
    systemicSigns: 'fatigue_inflammation',
  });

  const recommendation = recommendTrajectory(input);

  return (
    <section
      aria-labelledby="keuzewijzer-heading"
      className="bg-[#F3EFE6] border-y border-[#E5E0D5] py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-medium text-[#5B6B63] mb-2">
            Interactieve Zelfcheck · 3 vragen · Advies van Dorien Janse &amp; Michaël Kornmann
          </p>
          <h2
            id="keuzewijzer-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#14332A] mb-3"
          >
            Welke aanpak brengt jouw lichaam het snelst vooruit?
          </h2>
          <p className="text-sm sm:text-base text-[#3F4E47] leading-relaxed">
            Geef aan waar je nu tegenaan loopt. Op basis van onze integrale werkwijze (Sportfysiotherapie, Neurokinetische Therapie, Master Manuele Therapie, Hardloopfysiotherapie en Vitaliteitscoaching) zie je direct welk traject bij jouw hulpvraag past.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left column: 3 Interactive steps */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E5E0D5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-xs font-semibold text-[#14332A] mb-3">
                01. Wat staat op dit moment voor jou op één?
              </p>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {[
                  {
                    value: 'pain_chronic' as const,
                    label: 'Langdurige of terugkerende klacht',
                  },
                  {
                    value: 'energy_recovery' as const,
                    label: 'Meer energie, slaap & sterker herstelvermogen',
                  },
                  {
                    value: 'endurance_performance' as const,
                    label: 'Pijnvrij hardlopen, wielrennen of kracht',
                  },
                ].map((opt) => {
                  const active = input.primaryChallenge === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setInput((prev) => ({ ...prev, primaryChallenge: opt.value }))}
                      className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium border transition-colors ${
                        active
                          ? 'bg-[#184E3B] text-white border-[#184E3B]'
                          : 'bg-white text-[#2C3B34] border-[#DCE1DC] hover:border-[#184E3B]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#14332A] mb-3">
                02. Hoe lang speelt deze klacht of wens al?
              </p>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {[
                  { value: 'recent' as const, label: 'Korter dan 6 weken' },
                  { value: 'months' as const, label: 'Enkele maanden' },
                  { value: 'years' as const, label: 'Langer dan 6 maanden / komt steeds terug' },
                ].map((opt) => {
                  const active = input.duration === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setInput((prev) => ({ ...prev, duration: opt.value }))}
                      className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium border transition-colors ${
                        active
                          ? 'bg-[#184E3B] text-white border-[#184E3B]'
                          : 'bg-white text-[#2C3B34] border-[#DCE1DC] hover:border-[#184E3B]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#14332A] mb-3">
                03. Hoe is de balans tussen je belasting en belastbaarheid?
              </p>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {[
                  { value: 'none' as const, label: 'Goed, puur een lokale blessure of sportdoel' },
                  { value: 'slow_recovery' as const, label: 'Ik herstel trager na sport of drukte' },
                  {
                    value: 'fatigue_inflammation' as const,
                    label: 'Vaak vermoeid, hoge ademhaling of onrustige slaap',
                  },
                ].map((opt) => {
                  const active = input.systemicSigns === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setInput((prev) => ({ ...prev, systemicSigns: opt.value }))}
                      className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium border transition-colors ${
                        active
                          ? 'bg-[#184E3B] text-white border-[#184E3B]'
                          : 'bg-white text-[#2C3B34] border-[#DCE1DC] hover:border-[#184E3B]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right column: Personalized Recommendation */}
          <div className="lg:col-span-5 bg-[#14332A] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs text-[#A9C6BA] mb-2">{recommendation.badgeText}</p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {recommendation.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#D6E4DD] mb-4">{recommendation.subtitle}</p>
              <p className="text-sm text-[#E4EFEA] leading-relaxed mb-6">
                {recommendation.explanation}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#264D40]">
                {recommendation.keyElements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E4EFEA]">
                    <Check className="w-4 h-4 text-[#E8B878] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#264D40] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact', recommendation.recommendedPackage)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#E8B878] hover:bg-[#DDA860] text-[#14332A] font-semibold text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                <span>Plan afspraak voor dit traject</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate(recommendation.recommendedPage)}
                className="px-4 py-3 text-xs sm:text-sm font-medium text-[#E4EFEA] hover:text-white underline underline-offset-4 whitespace-nowrap shrink-0"
              >
                {recommendation.ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
