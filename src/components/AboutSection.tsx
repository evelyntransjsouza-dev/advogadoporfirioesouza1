import React from 'react';
import justiceDeskImg from '../assets/images/justice_scales_desk_1790294955896.jpg';
import { ShieldCheck, Handshake, Users, Star } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const commitments = [
    {
      title: 'Ética Profissional',
      description:
        'Atuamos com transparência e responsabilidade, mantendo sempre a confiança e o respeito de nossos clientes.',
      icon: ShieldCheck,
    },
    {
      title: 'Compromisso',
      description:
        'Cada caso é tratado com atenção, dedicação e foco na melhor solução jurídica para o seu objetivo.',
      icon: Handshake,
    },
    {
      title: 'Atendimento Personalizado',
      description:
        'Aqui você não é apenas mais um processo. Oferecemos um atendimento próximo, humano e eficiente.',
      icon: Users,
    },
    {
      title: 'Excelência',
      description:
        'Buscamos constantemente a atualização e aprimoramento para entregar um serviço jurídico de alto nível.',
      icon: Star,
    },
  ];

  return (
    <section id="sobre" className="relative w-full bg-[#080a0f] text-stone-200 py-24 overflow-hidden border-t border-[#c5a367]/15">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#c5a367]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#c5a367]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        {/* Top Part: Sobre o Escritório with Law Scales / Desk Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#c5a367]" />
              <span className="font-cinzel text-xs tracking-[0.25em] text-[#d4b57b] uppercase font-semibold">
                CONHEÇA NOSSO
              </span>
            </div>

            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.1]">
              Sobre o<br />
              <span className="text-[#f5e6ca]">Escritório</span>
            </h2>

            <div className="pl-5 border-l-2 border-[#c5a367]/70 py-1">
              <p className="text-base sm:text-lg text-[#c5c8d1] leading-relaxed font-light">
                O Escritório Portírio & Souza Advogados nasceu com o propósito de oferecer
                soluções jurídicas completas e personalizadas, sempre pautadas na ética,
                transparência e excelência no atendimento.
              </p>
            </div>

            <p className="text-sm sm:text-base text-stone-400 leading-relaxed font-light pt-2">
              Com escritório localizado na Zona Leste de São Paulo e atuação em toda a capital, região metropolitana e âmbito nacional em casos estratégicos, combinamos rigor técnico, agilidade e proximidade humana para defender seus interesses com máxima dedicação.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#c5a367]/25 shadow-2xl shadow-black/80 group">
              <div className="aspect-[16/11] w-full overflow-hidden">
                <img
                  src={justiceDeskImg}
                  alt="Balança da Justiça e livros de Direito"
                  className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border border-[#d4b57b]/20 pointer-events-none rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Lower Part: Nosso Compromisso & 4 Cards */}
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#c5a367]" />
              <span className="font-cinzel text-xs tracking-[0.25em] text-[#d4b57b] uppercase font-semibold">
                NOSSO COMPROMISSO
              </span>
            </div>

            <h3 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-[1.15]">
              Dedicação total e ética dos nossos serviços.
            </h3>

            <p className="text-sm sm:text-base text-[#aeb4c0] font-light leading-relaxed">
              Atuamos com responsabilidade e foco em resultados, valorizando cada cliente e
              buscando sempre a melhor solução para o seu caso.
            </p>
          </div>

          {/* 4 Cards in 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {commitments.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-xl bg-[#0f131c]/90 border border-[#c5a367]/20 hover:border-[#d4b57b]/60 p-8 transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgba(197,163,103,0.12)] flex flex-col space-y-4"
                >
                  {/* Icon in gold circle */}
                  <div className="w-14 h-14 rounded-full border border-[#c5a367]/40 bg-[#161c28] flex items-center justify-center text-[#d4b57b] group-hover:scale-110 group-hover:border-[#d4b57b] transition-all duration-300 shadow-inner">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  {/* Card Title */}
                  <h4 className="font-cormorant text-2xl sm:text-3xl text-white font-medium tracking-tight">
                    {item.title}
                  </h4>

                  {/* Fine gold line divider */}
                  <div className="h-[1px] w-12 bg-gradient-to-r from-[#c5a367] to-transparent group-hover:w-24 transition-all duration-500" />

                  {/* Card Description */}
                  <p className="text-sm sm:text-base text-[#9fa6b5] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom flourish line matching Image 3 */}
          <div className="pt-10 flex items-center justify-center">
            <div className="flex items-center gap-4 text-center max-w-xl w-full">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c5a367]/50 to-[#c5a367]/80" />
              <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.3em] text-[#d4b57b] uppercase font-medium whitespace-nowrap">
                SEU DIREITO, NOSSA PRIORIDADE
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#c5a367]/50 to-[#c5a367]/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
