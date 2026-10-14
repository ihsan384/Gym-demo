import React from 'react';
import { Award, Clock } from 'lucide-react';
import { TRAINERS } from '../data/mockData';

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="relative py-24 sm:py-32 bg-[#090909] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-accent"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                OUR COACHES
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-[0.95]">
              LEADERSHIP<br />
              <span className="text-secondary-text">ON THE FLOOR.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-secondary-text leading-relaxed">
              Coaches who lead by example. Our trainers focus on movement quality, injury mitigation, and personal accountability so you never train blind.
            </p>
          </div>
        </div>

        {/* 3 Editorial Trainer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative bg-card-bg border border-white/10 hover:border-accent/60 rounded-sm overflow-hidden flex flex-col transition-colors"
            >
              {/* Portrait Container with Editorial Ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black">
                <img
                  src={trainer.image}
                  alt={`Coach ${trainer.name} - ${trainer.specialty}`}
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-transparent opacity-90" />

                {/* Highlight tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-sm">
                  {trainer.highlight}
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-card-bg">
                <div>
                  <div className="flex items-center justify-between text-xs text-accent font-mono mb-2">
                    <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                      <Award className="w-3.5 h-3.5 text-accent" />
                      {trainer.specialty}
                    </span>
                    <span className="flex items-center gap-1 text-secondary-text font-sans">
                      <Clock className="w-3 h-3" />
                      {trainer.experience}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase text-white mb-3 tracking-wide">
                    {trainer.name}
                  </h3>

                  <p className="text-secondary-text text-sm leading-relaxed">
                    {trainer.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] tracking-widest uppercase text-secondary-text/60">
                  <span>ON-FLOOR SUPPORT</span>
                  <span className="text-white/60">CERTIFIED COACH</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
