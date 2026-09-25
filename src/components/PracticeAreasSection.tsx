import React, { useState } from 'react';
import themisStatueImg from '../assets/images/themis_statue_dark_1790294965948.jpg';
import { Briefcase, Shield, Users, ArrowRight, X, CheckCircle2, MessageCircle } from 'lucide-react';

export interface PracticeAreaDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  topics: string[];
  icon: typeof Briefcase;
}

export const practiceAreasData: PracticeAreaDetail[] = [
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    shortDesc:
      'Defesa técnica dos seus direitos nas relações de emprego, rescisões, horas extras e assessoria preventiva para empresas.',
    fullDesc:
      'Prestamos assessoria contenciosa e consultiva tanto para trabalhadores que tiveram seus direitos violados quanto para empresas que buscam conformidade legal, redução de passivo trabalhista e gestão estratégica de contratos.',
    topics: [
      'Rescisão contratual indireta e justa causa',
      'Horas extras, intervalos e adicional noturno',
      'Insalubridade e periculosidade',
      'Acidente de trabalho e doenças ocupacionais',
      'Assédio moral e discriminação no trabalho',
      'Assessoria preventiva para empresas e adequação à CLT',
    ],
    icon: Briefcase,
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    shortDesc:
      'Orientação e suporte em benefícios como aposentadoria, auxílio-doença, LOAS, pensão por morte e demais direitos previdenciários.',
    fullDesc:
      'Auxiliamos cidadãos na concessão, restabelecimento e revisão de benefícios junto ao INSS e na via judicial, realizando cálculos minuciosos de tempo de contribuição e planejamento previdenciário.',
    topics: [
      'Aposentadoria por idade, tempo de contribuição e especial',
      'Planejamento previdenciário personalizado',
      'Benefício de Prestação Continuada (BPC / LOAS)',
      'Auxílio por incapacidade temporária (auxílio-doença)',
      'Pensão por morte e auxílio-reclusão',
      'Revisão da vida toda e cálculo de melhores regras de transição',
    ],
    icon: Shield,
  },
  {
    id: 'civil-familia',
    title: 'Direito Civil e de Família',
    shortDesc:
      'Soluções jurídicas para questões familiares, contratos, inventários, uniões estáveis e demais demandas do direito civil.',
    fullDesc:
      'Atuação humanizada e firme em momentos delicados da vida pessoal e patrimonial, garantindo a proteção dos seus bens e a resolução ágil de conflitos familiares e contratuais.',
    topics: [
      'Divórcio consensual e litigioso (judicial e em cartório)',
      'Pensão alimentícia, guarda e regulamentação de visitas',
      'Inventários, partilha de bens e planejamento sucessório',
      'Reconhecimento e dissolução de união estável',
      'Elaboração e análise de contratos civis e comerciais',
      'Ações indenizatórias por danos morais e materiais',
    ],
    icon: Users,
  },
];

interface PracticeAreasSectionProps {
  onSelectAreaForContact: (areaTitle: string) => void;
}

export const PracticeAreasSection: React.FC<PracticeAreasSectionProps> = ({
  onSelectAreaForContact,
}) => {
  const [selectedArea, setSelectedArea] = useState<PracticeAreaDetail | null>(null);

  const handleConsultSpecialist = (area: PracticeAreaDetail) => {
    const text = encodeURIComponent(
      `Olá, gostaria de conversar sobre ${area.title} com o escritório Porfírio & Souza.`
    );
    window.open(`https://wa.me/5511970074653?text=${text}`, '_blank');
  };

  const handleOpenFormWithArea = (area: PracticeAreaDetail) => {
    setSelectedArea(null);
    onSelectAreaForContact(area.title);
  };

  return (
    <section id="areas" className="relative w-full bg-[#0a0c11] text-stone-200 py-24 overflow-hidden border-t border-[#c5a367]/15">
      {/* Background Themis illustration element matching Image 4 */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-20 lg:opacity-25 pointer-events-none mix-blend-screen">
        <img
          src={themisStatueImg}
          alt="Estátua Themis da Justiça"
          className="w-full h-full object-cover object-right filter brightness-95 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c11] via-[#0a0c11]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c11] via-transparent to-[#0a0c11]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Heading matching Image 4 */}
        <div className="space-y-4 max-w-3xl">
          <div className="h-[2px] w-12 bg-[#c5a367]" />

          <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12]">
            Especialidades jurídicas com{' '}
            <span className="text-[#d4b57b]">condução técnica, direta.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#b8bfcc] font-light leading-relaxed">
            Atendimento humanizado e estratégico em cada uma de nossas áreas de atuação.
          </p>
        </div>

        {/* 3 Cards Grid matching Image 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practiceAreasData.map((area) => {
            const IconComponent = area.icon;
            return (
              <div
                key={area.id}
                className="group relative rounded-2xl bg-[#0f141f]/95 border border-[#c5a367]/30 hover:border-[#d4b57b] p-8 flex flex-col justify-between transition-all duration-300 shadow-2xl hover:shadow-[0_12px_40px_rgba(197,163,103,0.18)] hover:-translate-y-1.5"
              >
                <div className="space-y-6">
                  {/* Circular Gold Icon */}
                  <div className="w-16 h-16 rounded-full border border-[#c5a367]/50 bg-[#161c28] flex items-center justify-center text-[#d4b57b] group-hover:scale-105 group-hover:border-[#d4b57b] transition-all duration-300">
                    <IconComponent className="w-7 h-7 stroke-[1.5]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-cormorant text-2xl sm:text-3xl text-white font-medium tracking-tight">
                    {area.title}
                  </h3>

                  {/* Thin gold line */}
                  <div className="h-[1px] w-12 bg-gradient-to-r from-[#c5a367] to-transparent group-hover:w-28 transition-all duration-500" />

                  {/* Card Description */}
                  <p className="text-sm sm:text-base text-[#a3abb8] font-light leading-relaxed">
                    {area.shortDesc}
                  </p>
                </div>

                {/* Saiba Mais Button/Link */}
                <div className="pt-8">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="group/btn inline-flex items-center gap-2.5 font-cinzel text-xs tracking-[0.25em] text-[#d4b57b] uppercase font-semibold hover:text-[#faecd0] transition-colors cursor-pointer"
                  >
                    <span>SAIBA MAIS</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Area Detail Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0f131c] border border-[#c5a367]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-stone-200 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-stone-800/60 transition-colors"
              aria-label="Fechar detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#c5a367] bg-[#161c28] flex items-center justify-center text-[#d4b57b]">
                  <selectedArea.icon className="w-5 h-5" />
                </div>
                <span className="font-cinzel text-xs tracking-[0.25em] text-[#d4b57b] uppercase font-semibold">
                  ÁREA DE ATUAÇÃO
                </span>
              </div>
              <h3 className="font-cormorant text-3xl sm:text-4xl text-white font-medium">
                {selectedArea.title}
              </h3>
            </div>

            <p className="text-stone-300 font-light leading-relaxed">
              {selectedArea.fullDesc}
            </p>

            {/* Topic checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="font-cinzel text-xs tracking-[0.2em] text-[#d4b57b] uppercase font-semibold">
                Principais Demandas Atendidas:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedArea.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-[#d4b57b] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleConsultSpecialist(selectedArea)}
                className="w-full sm:flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#c5a367] to-[#dfc28d] text-[#0a0c10] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer shadow-lg shadow-[#c5a367]/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar pelo WhatsApp</span>
              </button>
              <button
                onClick={() => handleOpenFormWithArea(selectedArea)}
                className="w-full sm:w-auto py-3 px-6 rounded-full border border-[#c5a367]/50 text-[#faecd0] text-xs font-medium tracking-wider uppercase hover:bg-[#c5a367]/10 transition-colors cursor-pointer"
              >
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
