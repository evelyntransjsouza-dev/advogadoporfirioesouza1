import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { PracticeAreasSection } from './components/PracticeAreasSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { LegalChatbot } from './components/LegalChatbot.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState('');

  // Handle section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'areas', 'contato'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectAreaForContact = (areaTitle: string) => {
    setSelectedSubject(areaTitle);
    scrollToSection('contato');
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-stone-200 selection:bg-[#c5a367]/30 selection:text-[#faecd0]">
      {/* Header Navigation */}
      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero matching Image 1 */}
        <HeroSection
          onContactClick={() => scrollToSection('contato')}
          onScrollDown={() => scrollToSection('sobre')}
        />

        {/* Section 2: Sobre o Escritório & Nosso Compromisso matching Images 2 & 3 */}
        <AboutSection />

        {/* Section 3: Áreas de Atuação matching Image 4 */}
        <PracticeAreasSection
          onSelectAreaForContact={handleSelectAreaForContact}
        />

        {/* Section 4: Entre em Contato matching Image 2 */}
        <ContactSection selectedSubject={selectedSubject} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Discreet & Fast Legal Automated Chatbot */}
      <LegalChatbot />
    </div>
  );
}
