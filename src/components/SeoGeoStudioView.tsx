import React, { useState } from 'react';
import { Copy, Check, Download, Code2 } from 'lucide-react';
import { PAGE_SEO_CONFIG, JSON_LD_SCHEMA_STRING } from '../data/siteContent';
import { generateStandaloneHtmlPrototype } from '../utils/strategyLogic';

export const SeoGeoStudioView: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyText = (key: string, value: string) => {
    navigator.clipboard?.writeText(value).catch(() => {});
    setCopiedKey(key);
    setTimeout(() => setCopiedKey((prev) => (prev === key ? null : prev)), 2500);
  };

  const handleDownloadStandaloneHtml = () => {
    const htmlContent = generateStandaloneHtmlPrototype();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setCopiedKey('download-html');
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Header + Standalone HTML Download Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E5E0D5]">
        <div className="max-w-3xl">
          <p className="text-xs font-medium text-[#5B6B63] mb-2">
            DEEL 3 · SEO, Socials (Open Graph) &amp; AI-Broncode (JSON-LD GEO)
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#14332A] mb-3">
            Copy-Paste Vindbaarheid voor Google en AI-Assistenten
          </h1>
          <p className="text-sm sm:text-base text-[#3F4E47] leading-relaxed">
            Plak de onderstaande paginatitels (strikt &le; 60 tekens) en meta-omschrijvingen (strikt &le; 155 tekens) in JouwWeb onder <strong>Pagina-instellingen &rarr; Zoekmachines</strong>, en plaats het JSON-LD AI-Autoriteitsblok in de <strong>Head-code</strong> of een <strong>Embed code</strong> blok.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 shrink-0">
          <button
            type="button"
            onClick={handleDownloadStandaloneHtml}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#184E3B] hover:bg-[#113A2B] text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            <span>
              {copiedKey === 'download-html'
                ? 'index.html gedownload!'
                : 'Download index.html (Netlify & Browser)'}
            </span>
          </button>
          <button
            type="button"
            onClick={() => copyText('raw-html', generateStandaloneHtmlPrototype())}
            className="inline-flex items-center gap-2 px-4 py-3 border border-[#C8CFC5] hover:border-[#184E3B] text-[#14332A] font-semibold text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap"
          >
            <Code2 className="w-4 h-4" />
            <span>
              {copiedKey === 'raw-html'
                ? 'HTML Broncode gekopieerd!'
                : 'Kopieer Deel 1 HTML-code'}
            </span>
          </button>
        </div>
      </div>

      {/* SECTION A: PER-PAGE SEO & OPEN GRAPH METADATA */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-[#14332A]">
          1. Paginatitels en Meta-omschrijvingen per pagina (JouwWeb Zoekmachines-tab)
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PAGE_SEO_CONFIG.map((page, index) => (
            <article
              key={page.pageId}
              className="bg-white border border-[#E5E0D5] rounded-2xl p-6 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#EFECE4]">
                  <div>
                    <span className="text-xs font-mono-tabular text-[#5B6B63]">
                      Pagina {index + 1} · URL: {page.urlSlug}
                    </span>
                    <h3 className="text-lg font-semibold text-[#14332A]">
                      {page.menuLabel}
                    </h3>
                  </div>
                </div>

                {/* Page Title */}
                <div className="bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl p-4">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-[#14332A]">
                      Paginatitel
                    </span>
                    <span className="text-xs font-mono-tabular text-[#184E3B]">
                      {page.pageTitle.length} / 60 tekens ✓
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#14332A] mb-3">
                    {page.pageTitle}
                  </p>
                  <button
                    type="button"
                    onClick={() => copyText(`title-${page.pageId}`, page.pageTitle)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#184E3B] hover:underline"
                  >
                    {copiedKey === `title-${page.pageId}` ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Paginatitel gekopieerd</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kopieer Paginatitel</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Meta Description */}
                <div className="bg-[#FAF8F5] border border-[#E5E0D5] rounded-xl p-4">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-semibold text-[#14332A]">
                      Meta-omschrijving
                    </span>
                    <span className="text-xs font-mono-tabular text-[#184E3B]">
                      {page.metaDescription.length} / 155 tekens ✓
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C3B34] leading-relaxed mb-3">
                    {page.metaDescription}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      copyText(`desc-${page.pageId}`, page.metaDescription)
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#184E3B] hover:underline"
                  >
                    {copiedKey === `desc-${page.pageId}` ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Meta-omschrijving gekopieerd</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kopieer Meta-omschrijving</span>
                      </>
                    )}
                  </button>
                </div>

                {/* OpenGraph & GEO Summary */}
                <div className="text-xs text-[#4A5A52] space-y-1.5 pt-1">
                  <p>
                    <strong className="text-[#14332A]">Social Share (WhatsApp / LinkedIn) Titel:</strong>{' '}
                    {page.ogTitle}
                  </p>
                  <p>
                    <strong className="text-[#14332A]">AI / GEO Kernfeit:</strong>{' '}
                    {page.geoKeyTakeaway}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* SECTION B: JSON-LD SCHEMA.ORG AI AUTHORITY BLOCK */}
      <div className="bg-[#14332A] text-white rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-[#A9C6BA] mb-1">
              Voor JouwWeb &rarr; Instellingen &rarr; Geavanceerd &rarr; Head-code (of Embed-element)
            </p>
            <h2 className="text-2xl font-semibold text-white">
              2. Het AI-Autoriteitsblok (JSON-LD Schema.org: MedicalBusiness, PhysicalTherapy &amp; FAQPage)
            </h2>
          </div>

          <button
            type="button"
            onClick={() => copyText('json-ld', JSON_LD_SCHEMA_STRING)}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#E8B878] hover:bg-[#DDA860] text-[#14332A] font-semibold text-xs sm:text-sm rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            {copiedKey === 'json-ld' ? (
              <>
                <Check className="w-4 h-4" />
                <span>JSON-LD Code Gekopieerd!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Kopieer Volledige JSON-LD Code</span>
              </>
            )}
          </button>
        </div>

        <pre className="bg-[#0D231C] border border-[#264D40] rounded-xl p-5 text-xs font-mono-tabular text-[#D6E4DD] overflow-x-auto leading-relaxed max-h-[460px]">
          <code>{JSON_LD_SCHEMA_STRING}</code>
        </pre>
      </div>
    </section>
  );
};
