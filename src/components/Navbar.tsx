import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Language, Translations } from '../translations';

interface NavbarProps {
  t: Translations['nav'];
  lang: Language;
  onToggleLang: (newLang: Language) => void;
  onOpenWaitlist: () => void;
  onExploreDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
  lang,
  onToggleLang,
  onOpenWaitlist,
  onExploreDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#030305]/90 backdrop-blur-2xl transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Luxury Brand Wordmark */}
        <a href="#" className="font-luxury text-xl sm:text-2xl font-bold tracking-widest text-white transition-opacity hover:opacity-80">
          RB<span className="font-light tracking-widest text-zinc-400">KING</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-zinc-400">
          <a href="#projects" className="hover:text-white transition-colors">
            {t.projects}
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            {t.features}
          </a>
          <a href="#ai-engine" className="hover:text-white transition-colors">
            {t.aiEngine}
          </a>
          <a href="#aws-cloud" className="hover:text-white transition-colors">
            {t.awsCloud}
          </a>
          <a href="#monitoring" className="hover:text-white transition-colors">
            {t.monitoring}
          </a>
          <a href="#testimonials" className="hover:text-white transition-colors">
            {t.testimonials}
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            {t.pricing}
          </a>
        </nav>

        {/* Zone 3: Language Toggle & Actions */}
        <div className="flex items-center gap-4">
          {/* Architectural Sharp Language Switcher */}
          <div className="flex items-center border border-white/15 bg-white/[0.02]">
            <button
              onClick={() => onToggleLang('en')}
              className={`px-2.5 py-1 text-[11px] font-mono tracking-wider transition-all ${
                lang === 'en'
                  ? 'bg-white text-black font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <div className="h-4 w-[1px] bg-white/10" />
            <button
              onClick={() => onToggleLang('bg')}
              className={`px-2.5 py-1 text-[11px] font-mono tracking-wider transition-all ${
                lang === 'bg'
                  ? 'bg-white text-black font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              BG
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onExploreDemo}
              className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
            >
              {t.watchDemo}
            </button>
            <button
              onClick={onOpenWaitlist}
              className="inline-flex items-center gap-1.5 border border-white bg-white px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-black transition-all hover:bg-zinc-200 active:scale-95 whitespace-nowrap"
            >
              <span>{t.earlyAccess}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-400 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.08] bg-[#050507] px-6 py-6 lg:hidden">
          <nav className="flex flex-col space-y-3.5 text-xs font-mono uppercase tracking-wider text-zinc-300">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              {t.projects}
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              {t.features}
            </a>
            <a
              href="#ai-engine"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              {t.aiEngine}
            </a>
            <a
              href="#aws-cloud"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              {t.awsCloud}
            </a>
            <a
              href="#monitoring"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              {t.monitoring}
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              {t.testimonials}
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              {t.pricing}
            </a>
            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full bg-white py-3 text-xs font-mono font-bold uppercase tracking-wider text-black"
              >
                {t.earlyAccess}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
