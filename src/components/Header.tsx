import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'areas', label: 'Áreas de Atuação' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  const whatsappUrl =
    'https://wa.me/5511970074653?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consulta%20jur%C3%ADdica%20com%20o%20escrit%C3%B3rio%20Porf%C3%ADrio%20%26%20Souza.';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0c10]/95 backdrop-blur-md border-b border-[#c5a367]/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#080a0f]/90 via-[#0a0c10]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
            aria-label="Porfírio & Souza Advogados"
          >
            {activeSection === 'sobre' ? (
              <Logo variant="scales" subtitle="SOBRE O ESCRITÓRIO" size="md" />
            ) : activeSection === 'areas' ? (
              <Logo variant="monogram" subtitle="ÁREAS DE ATUAÇÃO" size="md" />
            ) : (
              <Logo variant="full" size="md" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 font-cinzel text-xs lg:text-sm tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#f0dfbd] font-semibold'
                      : 'text-[#a3aab8] hover:text-[#e8d5ab]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#b88f4c] via-[#f0dfbd] to-[#b88f4c] rounded-full shadow-[0_0_8px_rgba(212,181,123,0.8)]" />
                  )}
                </button>
              );
            })}

            {/* Direct Contact Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#c5a367]/60 text-[#faecd0] text-xs font-medium tracking-wider uppercase bg-[#181d28]/70 hover:bg-[#c5a367] hover:text-[#0b0e14] hover:border-[#c5a367] transition-all duration-300 shadow-[0_0_15px_rgba(197,163,103,0.15)] hover:shadow-[0_0_20px_rgba(197,163,103,0.4)] group cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#d4b57b] group-hover:text-[#0b0e14] transition-colors" />
              <span>Fale Conosco</span>
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#c5a367]/50 text-[#d4b57b] bg-[#141822]"
              aria-label="Fale Conosco pelo WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#d4b57b] focus:outline-none"
              aria-label="Alternar menu de navegação"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d1017] border-b border-[#c5a367]/25 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-cinzel text-sm tracking-[0.2em] uppercase py-2 flex items-center justify-between ${
                    isActive ? 'text-[#f0dfbd] font-bold border-l-2 border-[#c5a367] pl-3' : 'text-stone-400 pl-3'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-[#c5a367] text-xs">●</span>}
                </button>
              );
            })}

            <div className="pt-4 border-t border-stone-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-[#c5a367] to-[#dfc28d] text-[#0b0e14] font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#c5a367]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Fale Conosco pelo WhatsApp</span>
              </a>
              <p className="text-center text-[11px] text-stone-400 mt-2">
                Telefone: (11) 97007-4653
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
