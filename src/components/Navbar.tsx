import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../data/siteContent';

interface NavbarProps {
  activePage: PageId;
  onSelectPage: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'fysio', label: 'Klachten & Fysio' },
  { id: 'vitaliteit', label: 'Vitaliteit & Leefstijl' },
  { id: 'duursport', label: 'Hardlopen & Bootcamp' },
  { id: 'over', label: 'Team & Tarieven' },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage, onSelectPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onSelectPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E0D5]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="text-xl font-semibold tracking-tight text-[#14332A] font-display whitespace-nowrap shrink-0 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#184E3B]"
        >
          Dorien Janse
        </button>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Hoofdnavigatie"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#43534B]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors border-b-2 ${
                  isActive
                    ? 'text-[#14332A] font-semibold border-[#184E3B]'
                    : 'border-transparent hover:text-[#14332A] hover:border-[#C5CEC9]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#184E3B] hover:bg-[#113A2B] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Contact &amp; Afspraak
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Sluit navigatiemenu' : 'Open navigatiemenu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-[#14332A] hover:bg-[#EFECE4] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobiele navigatie"
          className="lg:hidden border-t border-[#E5E0D5] bg-[#FAF8F5] px-6 py-4 space-y-2"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activePage === item.id
                  ? 'bg-[#EAE4D7] text-[#14332A] font-semibold'
                  : 'text-[#43534B] hover:bg-[#F2EFE9]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activePage === 'contact'
                ? 'bg-[#EAE4D7] text-[#14332A] font-semibold'
                : 'text-[#43534B] hover:bg-[#F2EFE9]'
            }`}
          >
            Contact &amp; Afspraak (06-14184448)
          </button>
        </nav>
      )}
    </header>
  );
};
