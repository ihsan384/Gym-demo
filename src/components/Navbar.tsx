import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROGRAMS', href: '#programs', id: 'programs' },
    { label: 'TRAINERS', href: '#trainers', id: 'trainers' },
    { label: 'MEMBERSHIP', href: '#membership', id: 'membership' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090909]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
            : 'bg-gradient-to-b from-[#090909]/95 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="FORGE FITNESS CLUB Home"
            >
              {/* Minimal geometric symbol */}
              <div className="relative w-8 h-8 flex items-center justify-center bg-card-bg border border-white/15 rounded-sm transition-colors group-hover:border-accent">
                <span className="w-2.5 h-2.5 bg-accent rotate-45 transform"></span>
                <span className="absolute w-1 h-1 bg-white rounded-full"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-white leading-none">
                  FORGE <span className="text-accent">FITNESS</span>
                </span>
                <span className="text-[9px] tracking-widest text-secondary-text uppercase font-semibold mt-0.5">
                  CLUB • PUNALUR, KERALA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`relative text-xs font-semibold tracking-widest uppercase transition-colors py-1 ${
                      isActive
                        ? 'text-accent'
                        : 'text-secondary-text hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#membership"
                onClick={(e) => handleLinkClick(e, 'membership')}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-accent hover:bg-accent-hover transition-colors rounded-sm group"
              >
                <span>JOIN NOW</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2.5">
              <a
                href="#membership"
                onClick={(e) => handleLinkClick(e, 'membership')}
                className="text-[11px] font-bold uppercase tracking-wider text-black bg-accent px-3 py-1.5 rounded-sm hover:bg-accent-hover transition-colors"
              >
                JOIN NOW
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-secondary-text hover:text-white bg-card-bg border border-white/10 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[60px] bg-[#090909]/98 border-b border-white/10 backdrop-blur-xl transition-all duration-300 ease-in-out overflow-hidden shadow-2xl ${
            mobileMenuOpen ? 'max-h-[460px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex flex-col space-y-4">
            <div className="text-[10px] uppercase font-bold tracking-widest text-secondary-text/80 mb-1">
              FORGE FITNESS CLUB • PUNALUR, KERALA
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`flex items-center justify-between text-base font-display font-semibold tracking-wider uppercase py-2 border-b border-white/5 ${
                    isActive ? 'text-accent' : 'text-primary-text hover:text-accent'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-secondary-text font-mono">0{navLinks.indexOf(link) + 1}</span>
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#membership"
                onClick={(e) => handleLinkClick(e, 'membership')}
                className="w-full flex items-center justify-center py-3 bg-accent text-black font-bold uppercase tracking-wider text-xs rounded-sm hover:bg-accent-hover transition-colors"
              >
                JOIN NOW
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
