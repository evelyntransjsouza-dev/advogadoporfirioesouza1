import React from 'react';
import { Logo } from './Logo.tsx';
import { MapPin, Phone, Mail, MessageCircle, Shield, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07090d] text-stone-300 border-t border-[#c5a367]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <Logo variant="full" size="md" />
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed pt-2">
              Soluções jurídicas com ética, transparência e excelência no atendimento. Defendendo seus
              direitos em São Caetano do Sul e em todo o Brasil.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141824] border border-[#c5a367]/30 text-[11px] text-[#d4b57b]">
                <Shield className="w-3 h-3" />
                <span>OAB/SP • Ética e Sigilo Profissional</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs tracking-[0.25em] text-[#d4b57b] uppercase font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#faecd0] transition-colors cursor-pointer"
                >
                  Página Inicial
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="hover:text-[#faecd0] transition-colors cursor-pointer"
                >
                  Sobre o Escritório
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('areas')}
                  className="hover:text-[#faecd0] transition-colors cursor-pointer"
                >
                  Áreas de Atuação
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contato')}
                  className="hover:text-[#faecd0] transition-colors cursor-pointer"
                >
                  Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Áreas de Atuação */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs tracking-[0.25em] text-[#d4b57b] uppercase font-semibold">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('areas')}
                  className="hover:text-[#faecd0] transition-colors text-left"
                >
                  Direito Trabalhista
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('areas')}
                  className="hover:text-[#faecd0] transition-colors text-left"
                >
                  Direito Previdenciário (INSS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('areas')}
                  className="hover:text-[#faecd0] transition-colors text-left"
                >
                  Direito Civil & Contratos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('areas')}
                  className="hover:text-[#faecd0] transition-colors text-left"
                >
                  Direito de Família & Sucessões
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Informações de Contato */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-xs tracking-[0.25em] text-[#d4b57b] uppercase font-semibold">
              Atendimento
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5 text-stone-400 group">
                <MapPin className="w-4 h-4 text-[#d4b57b] shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/Qz4sBASZUnD5DPC97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#faecd0] transition-colors leading-relaxed"
                  title="Ver localização no Google Maps"
                >
                  Rua Padre Maurício, 119 - Vila Diva (Zona Leste), São Paulo - SP, 03351-000
                  <span className="block text-[11px] text-[#d4b57b] group-hover:underline mt-0.5">
                    Ver no Google Maps ↗
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-stone-400">
                <Phone className="w-4 h-4 text-[#d4b57b] shrink-0" />
                <a href="tel:11970074653" className="hover:text-white transition-colors">
                  (11) 97007-4653
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-stone-400">
                <Mail className="w-4 h-4 text-[#d4b57b] shrink-0" />
                <a
                  href="mailto:contato@porfirioesouza.com.br"
                  className="hover:text-white transition-colors break-all"
                >
                  contato@porfirioesouza.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer / OAB compliance */}
        <div className="pt-8 border-t border-stone-800/80 text-[11px] text-stone-400 text-center leading-relaxed max-w-4xl mx-auto">
          Este site possui finalidade estritamente informativa e institucional, em consonância com o
          Código de Ética e Disciplina da OAB e o Provimento nº 205/2021 do Conselho Federal da OAB,
          não configurando captação indevida de clientela nem oferta mercantilizada de serviços.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#c5a367]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Porfírio & Souza Advogados. Todos os direitos reservados. porfirioesouza.com.br</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-stone-400 hover:text-[#d4b57b] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Action Button with Notification Bubble */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <a
          href="https://wa.me/5511970074653?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consulta%20jur%C3%ADdica%20com%20o%20escrit%C3%B3rio%20Porf%C3%ADrio%20%26%20Souza."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale Conosco pelo WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#25d366] to-[#128c7e] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white" />
          </span>
          <MessageCircle className="w-7 h-7" />
          <span className="sr-only">WhatsApp (11) 97007-4653</span>
        </a>
      </div>
    </footer>
  );
};
