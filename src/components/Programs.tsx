import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROGRAMS } from '../data/mockData';

interface ProgramsProps {
  onSelectProgram: (programName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-[#121212] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-accent"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                OUR PROGRAMS
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-[0.95]">
              TRAINING<br />
              <span className="text-secondary-text">PROGRAMS.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-secondary-text leading-relaxed">
              Every regimen at FORGE FITNESS CLUB is built upon sound training principles, progressive overload, and movement integrity. Designed for long-term athletic health.
            </p>
          </div>
        </div>

        {/* 4 Premium Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="group relative bg-card-bg border border-white/10 hover:border-accent/60 rounded-sm overflow-hidden flex flex-col justify-between transition-colors"
            >
              {/* Program Image with Aspect Ratio & Overlays */}
              <div className="relative aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={prog.image}
                  alt={`${prog.name} at FORGE FITNESS CLUB`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/40 to-transparent" />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-accent font-mono text-xs font-bold tracking-widest uppercase rounded-sm">
                  {prog.number}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white mb-3 tracking-wide group-hover:text-accent transition-colors">
                    {prog.name}
                  </h3>
                  <p className="text-secondary-text text-sm sm:text-base leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Focus points */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    {prog.focus.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-secondary-text">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire CTA */}
                <button
                  type="button"
                  onClick={() => onSelectProgram(prog.name)}
                  className="w-full py-3.5 px-4 bg-[#222222] hover:bg-accent hover:text-black text-white font-display font-bold uppercase tracking-wider text-xs rounded-sm border border-white/10 hover:border-accent flex items-center justify-center gap-2 transition-all duration-200 group/btn"
                >
                  <span>ENQUIRE NOW</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding health & fitness claims */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-secondary-text/70 uppercase tracking-widest font-mono">
            * All programs are subject to physical readiness screening. No medical or guaranteed rapid outcomes implied.
          </p>
        </div>
      </div>
    </section>
  );
};
