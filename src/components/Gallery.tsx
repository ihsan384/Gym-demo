import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';

export const Gallery: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! + 1) % GALLERY_ITEMS.length));
  }, [activeLightboxIndex]);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
  }, [activeLightboxIndex]);

  // Keyboard navigation & escape listener
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeLightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#090909] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-accent"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                OUR FACILITIES
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase text-white tracking-tight leading-[0.95]">
              FACILITIES<br />
              <span className="text-secondary-text">GALLERY.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base text-secondary-text leading-relaxed">
              Engineered with Olympic standard barbell racks, precision calibrated cast iron, and high-airflow conditioning zones. Click any image to view in high resolution.
            </p>
          </div>
        </div>

        {/* Varied Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer bg-card-bg border border-white/10 hover:border-accent transition-all duration-300 ${
                item.span || 'col-span-1'
              } min-h-[260px] sm:min-h-[320px]`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(idx);
                }
              }}
              aria-label={`View photo: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-sm group-hover:border-accent/60 group-hover:text-accent transition-colors">
                  {item.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <Maximize2 className="w-3.5 h-3.5 text-accent" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="font-display font-bold text-lg sm:text-xl uppercase text-white tracking-wide group-hover:text-accent transition-colors leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-secondary-text">
                  <span>EXPAND PREVIEW</span>
                  <span>•</span>
                  <span className="font-mono text-accent">0{idx + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={handleCloseLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleCloseLightbox}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 p-3 bg-card-bg/80 hover:bg-accent text-white hover:text-black rounded-full border border-white/20 transition-all duration-200"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-8 z-50 p-3.5 bg-card-bg/80 hover:bg-accent text-white hover:text-black rounded-full border border-white/20 transition-all duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-8 z-50 p-3.5 bg-card-bg/80 hover:bg-accent text-white hover:text-black rounded-full border border-white/20 transition-all duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Content inside Lightbox */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-sm border border-white/20 shadow-2xl max-h-[75vh]">
              <img
                src={GALLERY_ITEMS[activeLightboxIndex].image}
                alt={GALLERY_ITEMS[activeLightboxIndex].title}
                className="w-full h-full max-h-[75vh] object-contain"
              />
            </div>

            {/* Lightbox Caption & Counter */}
            <div className="w-full mt-4 flex items-center justify-between text-white text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-accent/20 border border-accent/40 text-accent font-mono text-[10px] font-bold uppercase rounded-sm">
                  {GALLERY_ITEMS[activeLightboxIndex].category}
                </span>
                <span className="font-display font-bold uppercase tracking-wider text-base">
                  {GALLERY_ITEMS[activeLightboxIndex].title}
                </span>
              </div>
              <div className="font-mono text-secondary-text">
                {activeLightboxIndex + 1} / {GALLERY_ITEMS.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
