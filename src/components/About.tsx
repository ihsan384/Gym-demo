import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CORE_PRINCIPLES } from '../data/mockData';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#090909] overflow-hidden">
      {/* Decorative vertical lines and accents */}
      <div className="absolute top-0 right-10 w-px h-full bg-white/5 pointer-events-none" />
      <div className="absolute top-0 left-10 w-px h-full bg-white/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-accent"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                ABOUT OUR CLUB
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-[0.95]">
              MORE THAN<br />
              <span className="text-secondary-text">A WORKOUT.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-secondary-text leading-relaxed">
              FORGE FITNESS CLUB is a dedicated training space in Punalur, Kerala, designed around structured coaching, dependable equipment, and consistent progress. Whether you&apos;re starting out or advancing your strength goals, your training belongs here.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          {/* Left Column: Dual Layered Images */}
          <div className="lg:col-span-7 relative">
            {/* Primary Large Interior Photograph */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                alt="Modern premium gym floor interior with heavy equipment and mood lighting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs uppercase tracking-wider text-white">
                <span className="font-bold">TRAINING FLOOR • STRENGTH ARENA</span>
                <span className="text-accent font-mono">PUNALUR</span>
              </div>
            </div>

            {/* Secondary Overlapping Athletic Photograph */}
            <div className="hidden sm:block absolute -bottom-10 -right-6 md:-right-10 w-1/2 aspect-square rounded-sm overflow-hidden border border-white/20 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                alt="Athlete executing compound barbell deadlift"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest text-accent">
                DISCIPLINE & TECHNIQUE
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details & Vision */}
          <div className="lg:col-span-5 lg:pl-6 space-y-8">
            <div className="p-6 sm:p-8 bg-card-bg border border-white/10 rounded-sm relative overflow-hidden">
              <div className="text-[11px] font-bold uppercase tracking-widest text-secondary-text mb-2">
                PUNALUR, KERALA
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white mb-4">
                BUILT FOR THOSE WHO VALUE SUBSTANCE OVER NOISE.
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed mb-6">
                Most commercial gyms settle for crowded machines and unguided workouts. At Forge Fitness Club, we focus on an environment where real progression is encouraged, form is monitored, and every member is supported.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('trainers')}
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-accent hover:text-white transition-colors group"
              >
                <span>MEET OUR TRAINERS</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Three Core Principles */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center md:text-left mb-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-accent">
              OUR FOUNDATION
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl uppercase text-white mt-1">
              CORE PRINCIPLES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {CORE_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="p-8 bg-[#141414] border border-white/10 hover:border-accent/40 transition-colors rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="font-display font-extrabold text-accent text-3xl mb-4 font-mono">
                    {principle.number}
                  </div>
                  <h4 className="font-display font-bold text-xl sm:text-2xl uppercase text-white tracking-wide mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-secondary-text text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] tracking-widest uppercase text-secondary-text/60">
                  <span>STANDARD</span>
                  <span className="text-white/60">FORGE VALUES</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
