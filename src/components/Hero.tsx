import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#090909]"
    >
      {/* Background Photography with Natural Editorial Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="Athlete training in modern strength facility"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Balanced contrast overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/40" />
      </div>

      {/* Main Hero Content: Headline, Description & 2 CTA Buttons Only */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase text-white leading-[0.92] mb-6">
            FORGE YOUR<br />
            STRENGTH<span className="text-accent">.</span>
          </h1>

          {/* Short Supporting Description */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
            A dedicated strength and conditioning facility in Punalur, Kerala. Structured training programs, quality equipment, and expert coaching built for real physical progress.
          </p>

          {/* Two Essential CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('membership')}
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-black font-display font-bold uppercase tracking-wider text-sm rounded-sm transition-colors group"
            >
              <span>EXPLORE MEMBERSHIPS</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('programs')}
              className="inline-flex items-center justify-center px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 font-display font-bold uppercase tracking-wider text-sm rounded-sm transition-colors"
            >
              <span>VIEW PROGRAMS</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

