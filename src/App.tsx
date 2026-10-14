import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Trainers } from './components/Trainers';
import { Membership } from './components/Membership';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [selectedProgram, setSelectedProgram] = useState<string>('');

  // Handle smooth scroll navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 76;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Program selection handler (from Programs section)
  const handleSelectProgram = (programName: string) => {
    setSelectedProgram(programName);
    handleNavigate('contact');
  };

  // Plan selection handler (from Membership section)
  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    handleNavigate('contact');
  };

  // IntersectionObserver to track active section for nav highlighting
  useEffect(() => {
    const sections = ['home', 'about', 'programs', 'trainers', 'membership', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary-text font-sans selection:bg-accent selection:text-black">
      {/* Sticky Header Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Page Landmark */}
      <main>
        {/* 1. Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. Facility Highlights / Key Info */}
        <Stats />

        {/* 3. About Section */}
        <About onNavigate={handleNavigate} />

        {/* 4. Training Programs */}
        <Programs onSelectProgram={handleSelectProgram} />

        {/* 5. Trainer Profiles */}
        <Trainers />

        {/* 6. Membership Plans with Indian Pricing */}
        <Membership onSelectPlan={handleSelectPlan} />

        {/* 7. Facilities Gallery & Lightbox */}
        <Gallery />

        {/* 8. Contact & Interactive Enquiry Form */}
        <Contact key={`${selectedPlan}-${selectedProgram}`} initialPlan={selectedPlan} initialProgram={selectedProgram} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
