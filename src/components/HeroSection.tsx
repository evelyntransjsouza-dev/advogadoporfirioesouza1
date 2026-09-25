import React from 'react';
import heroBg from '../assets/images/hero_law_office_1790294943837.jpg';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onContactClick: () => void;
  onScrollDown: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick, onScrollDown }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Image with dark luxury overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Escritório Porfírio & Souza Advogados"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] scale-100"
        />
        {/* Multilayer gradient overlays to match image 1 dark moody aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090d]/95 via-[#090c12]/80 to-[#07090d]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-[#080a0f]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(197,163,103,0.12)_0%,transparent_60%)]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[68vh]">
          {/* Left Column Content */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 md:space-y-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-4">
              <span className="font-cinzel text-xs sm:text-sm tracking-[0.28em] text-[#d4b57b] uppercase font-medium">
                SEU DIREITO, NOSSA PRIORIDADE
              </span>
              <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-[#c5a367] to-transparent" />
            </div>

            {/* Main Headline */}
            <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-md">
              Excelência, ética e compromisso com seus{' '}
              <span className="font-cormorant italic font-medium text-[#d4b57b] relative inline-block">
                direitos.
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4b57b]/40 to-transparent" />
              </span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-[#c7cbd4] max-w-2xl font-light leading-relaxed">
              Sua confiança é o que nos move. Atuamos com responsabilidade e dedicação para oferecer
              a melhor solução jurídica para o seu caso.
            </p>

            {/* Call To Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#c5a367] via-[#dfc28d] to-[#b88f4c] text-[#0a0c10] font-semibold text-sm tracking-wider uppercase shadow-[0_4px_25px_rgba(197,163,103,0.35)] hover:shadow-[0_6px_30px_rgba(197,163,103,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>Fale Conosco</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/5511970074653?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#c5a367]/40 text-[#f2e2c4] hover:bg-[#c5a367]/10 text-sm font-medium transition-all duration-200"
              >
                <span>WhatsApp: (11) 97007-4653</span>
              </a>
            </div>
          </div>

          {/* Right Column / Empty for desktop space or watermarking as in Image 1 */}
          <div className="hidden lg:col-span-4 lg:flex flex-col items-end justify-end h-full">
            {/* Big Monogram / Signature in Bottom Right as in Image 1 */}
            <div className="p-8 rounded-2xl bg-[#0a0d13]/70 backdrop-blur-md border border-[#c5a367]/20 shadow-2xl flex flex-col items-center text-center space-y-3 max-w-[280px]">
              <div className="w-16 h-16 flex items-center justify-center text-[#d4b57b]">
                <svg viewBox="0 0 48 48" className="w-16 h-16" fill="none">
                  <path
                    d="M12 9H23C27.5 9 30 11.5 30 15.5C30 19.5 27 22 22.5 22H16V39H12V9ZM16 12.5V18.5H22C24.5 18.5 26 17.5 26 15.5C26 13.5 24.5 12.5 22 12.5H16Z"
                    fill="url(#heroPSGold)"
                  />
                  <path
                    d="M26 23C27.8 22.5 30.2 22 32.5 22C37 22 39.5 24.5 39.5 28C39.5 31.8 36.2 33.8 31 34.8C27 35.6 25 36.6 25 38.6C25 40.5 27.2 41.5 30.5 41.5C33.5 41.5 36.5 40.5 38.5 39.2L39.8 42.2C37.2 44 33.5 44.8 30 44.8C24.5 44.8 21.2 42.2 21.2 38C21.2 33.8 25 32 30 31.2C34.2 30.5 35.8 29.5 35.8 27.8C35.8 26.2 34.2 25.2 31.8 25.2C29.2 25.2 27.2 26 25.2 27.2L24 24.2C24.6 23.8 25.2 23.4 26 23Z"
                    fill="url(#heroPSGold)"
                  />
                  <defs>
                    <linearGradient id="heroPSGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#faecd0" />
                      <stop offset="50%" stopColor="#d4b57b" />
                      <stop offset="100%" stopColor="#9e7732" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-cinzel text-lg tracking-[0.25em] text-[#faecd0] font-bold">
                PORFÍRIO & SOUZA
              </span>
              <div className="flex items-center gap-3 w-full">
                <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c5a367]/60 to-transparent" />
                <span className="font-cinzel text-xs tracking-[0.35em] text-[#d4b57b]">
                  ADVOGADOS
                </span>
                <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c5a367]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Mouse Scroll Indicator as seen in Image 1 */}
        <div className="pt-8 flex flex-col items-center justify-center">
          <button
            onClick={onScrollDown}
            className="flex flex-col items-center gap-1.5 text-[#d4b57b]/80 hover:text-[#faecd0] transition-colors cursor-pointer group"
            aria-label="Rolar para a próxima seção"
          >
            {/* Mouse Outline */}
            <div className="w-5 h-8 rounded-full border-2 border-[#c5a367]/60 flex justify-center pt-1 group-hover:border-[#d4b57b] transition-colors">
              <span className="w-1 h-2 rounded-full bg-[#d4b57b] animate-bounce" />
            </div>
            {/* Chevron */}
            <ChevronDown className="w-4 h-4 animate-pulse text-[#d4b57b]" />
          </button>
        </div>
      </div>
    </section>
  );
};
