import React from 'react';
import { FACILITY_HIGHLIGHTS } from '../data/mockData';

export const Stats: React.FC = () => {
  return (
    <section className="relative bg-[#111111] border-y border-white/10 py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {FACILITY_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center pl-4 border-l border-white/20 hover:border-accent transition-colors"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-none">
                {item.value}
              </div>
              <div className="text-xs font-bold tracking-wider text-gray-300 uppercase mt-2">
                {item.label}
              </div>
              <div className="text-xs text-secondary-text mt-0.5">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
