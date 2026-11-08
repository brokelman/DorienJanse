import React, { useState } from 'react';
import { Copy, Check, Camera, Layers } from 'lucide-react';
import {
  PageId,
  JOUWWEB_BLUEPRINT,
  PAGE_SEO_CONFIG,
  JouwWebBlock,
} from '../data/siteContent';

export const JouwWebBlueprintView: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<PageId>('home');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const blocks = JOUWWEB_BLUEPRINT[selectedPage] || [];

  const formatBlockForCopy = (block: JouwWebBlock) => {
    const lines = [
      `=== ${block.sectionNumber}: ${block.sectionName} ===`,
      `JouwWeb Element: ${block.jouwWebElement}`,
      ``,
      `KOP (H1/H2): ${block.headline}`,
      ...(block.subheadline ? [`SUBKOP: ${block.subheadline}`] : []),
      ``,
      ...block.bodyCopy,
      ...(block.bulletPoints && block.bulletPoints.length > 0
        ? [``, ...block.bulletPoints.map((b) => `• ${b}`)]
        : []),
      ...(block.ctaText ? [``, `KNOPTEKST (CTA): ${block.ctaText}`] : []),
    ];
    return lines.join('\n');
  };

  const handleCopyBlock = (block: JouwWebBlock) => {
    const text = formatBlockForCopy(block);
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopiedId(block.id);
    setTimeout(() => setCopiedId((prev) => (prev === block.id ? null : prev)), 2500);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      <div className="max-w-3xl">
        <p className="text-xs font-medium text-[#5B6B63] mb-2">
          DEEL 2 · De JouwWeb Bouw-Blauwdruk voor Zelfbeheer door Dorien
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#14332A] mb-3">
          Kant-en-klare JouwWeb Blokkenstructuur en Copy
        </h1>
        <p className="text-sm sm:text-base text-[#3F4E47] leading-relaxed">
          Elke vernieuwde pagina is hieronder vertaald naar de standaard visuele elementen van de JouwWeb-editor (<em>Strook</em>, <em>Kolommen</em>, <em>Tekst + Afbeelding</em>, <em>Uitklapmenu</em>). Klik op een pagina en kopieer de definitieve teksten met 1 klik naar JouwWeb.
        </p>
      </div>

      {/* Page Filter Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-[#EFECE4] rounded-xl border border-[#DFD9CC]">
        {PAGE_SEO_CONFIG.map((page, index) => {
          const active = selectedPage === page.pageId;
          return (
            <button
              key={page.pageId}
              type="button"
              onClick={() => setSelectedPage(page.pageId)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                active
                  ? 'bg-[#14332A] text-white font-semibold shadow-xs'
                  : 'text-[#3F4E47] hover:text-[#14332A] hover:bg-[#E5E0D5]'
              }`}
            >
              {index + 1}. {page.menuLabel}
            </button>
          );
        })}
      </div>

      {/* Blocks List */}
      <div className="space-y-8">
        {blocks.map((block) => {
          const isCopied = copiedId === block.id;
          return (
            <article
              key={block.id}
              className="bg-white border border-[#E5E0D5] rounded-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#EFECE4]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#5B6B63] mb-1">
                    <span className="font-mono-tabular font-semibold text-[#184E3B]">
                      {block.sectionNumber}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-[#14332A]">
                      <Layers className="w-3.5 h-3.5 text-[#184E3B]" />
                      JouwWeb Element: {block.jouwWebElement}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-[#14332A]">
                    {block.sectionName}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyBlock(block)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#184E3B] hover:bg-[#113A2B] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Gekopieerd voor JouwWeb!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Kopieer Definitieve Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid lg:grid-cols-12 gap-8">
                {/* Copywriting Column */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl p-5 space-y-3">
                    <p className="text-xs font-medium text-[#5B6B63]">
                      Definitieve Copy (Klaar om te plakken in JouwWeb):
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#14332A]">
                      {block.headline}
                    </h3>
                    {block.subheadline && (
                      <p className="text-sm font-medium text-[#184E3B]">
                        {block.subheadline}
                      </p>
                    )}
                    <div className="space-y-3 text-sm text-[#2C3B34] leading-relaxed pt-2">
                      {block.bodyCopy.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                    {block.bulletPoints && block.bulletPoints.length > 0 && (
                      <ul className="space-y-1.5 pt-2 text-sm text-[#2C3B34]">
                        {block.bulletPoints.map((bp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#184E3B] font-bold">•</span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {block.ctaText && (
                      <div className="pt-3">
                        <span className="text-xs font-mono-tabular text-[#5B6B63]">
                          JouwWeb Knop-element tekst:{' '}
                        </span>
                        <span className="text-xs font-semibold text-[#14332A] underline">
                          {block.ctaText}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Strategy & Image Direction Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-5">
                    <p className="text-xs font-semibold text-[#14332A] mb-1.5">
                      Conversie- &amp; Positie-doel
                    </p>
                    <p className="text-xs text-[#3F4E47] leading-relaxed">
                      {block.strategicGoal}
                    </p>
                  </div>

                  <div className="bg-[#F3EFE6] border border-[#E5E0D5] rounded-xl p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#14332A] mb-1.5">
                      <Camera className="w-4 h-4 text-[#184E3B]" />
                      <span>Beeldadvies voor Dorien</span>
                    </div>
                    <p className="text-xs text-[#3F4E47] leading-relaxed">
                      {block.imageAdvice}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
