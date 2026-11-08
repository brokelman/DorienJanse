import React, { useState } from 'react';
import { PageId } from './data/siteContent';
import { Navbar } from './components/Navbar';
import { PrototypeView } from './components/PrototypeView';
import { JouwWebBlueprintView } from './components/JouwWebBlueprintView';
import { SeoGeoStudioView } from './components/SeoGeoStudioView';
import { generateStandaloneHtmlPrototype } from './utils/strategyLogic';
import { Download } from 'lucide-react';

type DeliverableTab = 'deel1_prototype' | 'deel2_jouwweb' | 'deel3_seo_geo';

export default function App() {
  const [activeDeliverable, setActiveDeliverable] =
    useState<DeliverableTab>('deel1_prototype');
  const [activePage, setActivePage] = useState<PageId>('home');

  const handleSelectPageFromNav = (page: PageId) => {
    setActiveDeliverable('deel1_prototype');
    setActivePage(page);
  };

  const handleQuickDownloadHtml = () => {
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
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#172620] flex flex-col">
      {/* 3-Zone Top Bar Contract Header */}
      <Navbar activePage={activePage} onSelectPage={handleSelectPageFromNav} />

      {/* Workspace Mode Toolbar (Placed below the Top Bar per Top Bar Contract §2) */}
      <div className="bg-[#14332A] text-white border-b border-[#264D40]">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div
            role="tablist"
            aria-label="Strategische Oplevering (3 Delen)"
            className="flex flex-wrap items-center gap-1.5"
          >
            <button
              role="tab"
              aria-selected={activeDeliverable === 'deel1_prototype'}
              type="button"
              onClick={() => setActiveDeliverable('deel1_prototype')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                activeDeliverable === 'deel1_prototype'
                  ? 'bg-[#E8B878] text-[#14332A]'
                  : 'text-[#DCE7E2] hover:bg-[#1E473B]'
              }`}
            >
              Deel 1: Interactief Design Prototype
            </button>
            <button
              role="tab"
              aria-selected={activeDeliverable === 'deel2_jouwweb'}
              type="button"
              onClick={() => setActiveDeliverable('deel2_jouwweb')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                activeDeliverable === 'deel2_jouwweb'
                  ? 'bg-[#E8B878] text-[#14332A]'
                  : 'text-[#DCE7E2] hover:bg-[#1E473B]'
              }`}
            >
              Deel 2: JouwWeb Bouw-Blauwdruk (Alle 6 Pagina&apos;s)
            </button>
            <button
              role="tab"
              aria-selected={activeDeliverable === 'deel3_seo_geo'}
              type="button"
              onClick={() => setActiveDeliverable('deel3_seo_geo')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                activeDeliverable === 'deel3_seo_geo'
                  ? 'bg-[#E8B878] text-[#14332A]'
                  : 'text-[#DCE7E2] hover:bg-[#1E473B]'
              }`}
            >
              Deel 3: SEO, Socials &amp; AI-Broncode (JSON-LD)
            </button>
          </div>

          <button
            type="button"
            onClick={handleQuickDownloadHtml}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1E473B] hover:bg-[#275A4B] text-[#E8B878] text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download index.html (Netlify &amp; Browser)</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1">
        {activeDeliverable === 'deel1_prototype' && (
          <PrototypeView
            activePage={activePage}
            onSelectPage={(page) => setActivePage(page)}
          />
        )}

        {activeDeliverable === 'deel2_jouwweb' && <JouwWebBlueprintView />}

        {activeDeliverable === 'deel3_seo_geo' && <SeoGeoStudioView />}
      </main>
    </div>
  );
}
