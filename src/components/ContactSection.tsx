import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  User,
  Send,
  Lock,
  ChevronDown,
  CheckCircle,
  ExternalLink,
  MessageSquare,
  FileText,
} from 'lucide-react';

interface ContactSectionProps {
  selectedSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedSubject = '' }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedSubject) {
      setFormData((prev) => ({ ...prev, assunto: selectedSubject }));
    }
  }, [selectedSubject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim()) {
      setErrorMsg('Por favor, informe seu nome completo.');
      return;
    }
    if (!formData.telefone.trim() && !formData.email.trim()) {
      setErrorMsg('Por favor, informe seu telefone ou e-mail para retorno.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `*Contato via Site - Porfírio & Souza Advogados*\n\n*Nome:* ${formData.nome}\n*Telefone:* ${formData.telefone}\n*E-mail:* ${formData.email}\n*Assunto:* ${formData.assunto || 'Consulta Jurídica'}\n*Mensagem:* ${formData.mensagem || 'Gostaria de agendar uma consulta.'}`
    );
    window.open(`https://wa.me/5511970074653?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="relative w-full bg-[#080a0f] text-stone-200 py-24 overflow-hidden border-t border-[#c5a367]/15">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#c5a367]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative corner flourishes */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-[#c5a367]/20 rounded-tl-3xl pointer-events-none hidden md:block" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-[#c5a367]/20 rounded-tr-3xl pointer-events-none hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#c5a367]" />
                <span className="font-cinzel text-xs tracking-[0.25em] text-[#d4b57b] uppercase font-semibold">
                  ENTRE EM CONTATO
                </span>
              </div>

              <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.12]">
                Estamos prontos para atender você.
              </h2>

              <p className="text-sm sm:text-base text-[#a3abb8] font-light leading-relaxed">
                Entre em contato conosco e tire suas dúvidas. Será um prazer atendê-lo.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6 pt-2">
              {/* Endereço */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0f131c]/60 border border-[#c5a367]/15 hover:border-[#c5a367]/40 transition-colors">
                <div className="w-12 h-12 rounded-full border border-[#c5a367]/50 bg-[#161c28] flex items-center justify-center text-[#d4b57b] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-cinzel text-xs tracking-[0.2em] text-[#d4b57b] uppercase font-semibold">
                    Endereço
                  </h3>
                  <p className="text-sm text-stone-200 leading-snug font-medium">
                    Rua Padre Maurício, 119
                  </p>
                  <p className="text-xs text-stone-400">
                    Vila Diva (Zona Leste) – São Paulo, SP
                  </p>
                  <p className="text-[11px] text-stone-400">
                    CEP: 03351-000
                  </p>
                  <a
                    href="https://maps.app.goo.gl/Qz4sBASZUnD5DPC97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#d4b57b] hover:text-[#faecd0] pt-1 font-medium transition-colors"
                  >
                    <span>Abrir localização no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0f131c]/60 border border-[#c5a367]/15 hover:border-[#c5a367]/40 transition-colors">
                <div className="w-12 h-12 rounded-full border border-[#c5a367]/50 bg-[#161c28] flex items-center justify-center text-[#d4b57b] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-cinzel text-xs tracking-[0.2em] text-[#d4b57b] uppercase font-semibold">
                    Telefone
                  </h3>
                  <a
                    href="tel:11970074653"
                    className="text-sm sm:text-base text-white hover:text-[#d4b57b] transition-colors block font-medium"
                  >
                    (11) 97007-4653
                  </a>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    Atendimento imediato via WhatsApp
                  </span>
                </div>
              </div>

              {/* E-mail */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0f131c]/60 border border-[#c5a367]/15 hover:border-[#c5a367]/40 transition-colors">
                <div className="w-12 h-12 rounded-full border border-[#c5a367]/50 bg-[#161c28] flex items-center justify-center text-[#d4b57b] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-cinzel text-xs tracking-[0.2em] text-[#d4b57b] uppercase font-semibold">
                    E-mail
                  </h3>
                  <a
                    href="mailto:contato@porfirioesouza.com.br"
                    className="text-sm text-stone-200 hover:text-[#d4b57b] transition-colors block"
                  >
                    contato@porfirioesouza.com.br
                  </a>
                  <p className="text-[11px] text-stone-400">
                    Retorno em até 24 horas úteis
                  </p>
                </div>
              </div>

              {/* Direct Map Location Box */}
              <div className="rounded-xl overflow-hidden border border-[#c5a367]/30 bg-[#111520] space-y-0 shadow-lg">
                <div className="p-4 pb-3 flex items-center justify-between border-b border-[#c5a367]/15">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d4b57b]" />
                    <span className="font-cinzel text-xs uppercase tracking-wider text-[#faecd0] font-semibold">
                      Localização do Escritório
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-400">Vila Diva • São Paulo, SP</span>
                </div>

                {/* Map iframe */}
                <div className="w-full h-40 bg-[#0a0d14] relative">
                  <iframe
                    title="Mapa de Localização Porfírio e Souza Advogados"
                    src="https://maps.google.com/maps?q=Rua%20Padre%20Maur%C3%ADcio,%20119%20-%20Vila%20Diva,%20S%C3%A3o%20Paulo%20-%20SP,%2003351-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter grayscale-[0.35] contrast-[1.1] opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 pointer-events-none border-b border-t border-[#c5a367]/20" />
                </div>

                <div className="p-3 bg-[#0d1017] flex items-center justify-between gap-3">
                  <div className="text-[11px] text-stone-400">
                    <span className="text-[#d4b57b] font-medium block">Rua Padre Maurício, 119</span>
                    Vila Diva (Zona Leste) • São Paulo - SP
                  </div>
                  <a
                    href="https://maps.app.goo.gl/Qz4sBASZUnD5DPC97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-gradient-to-r from-[#c5a367] to-[#dfc28d] text-[#0a0c10] text-[11px] font-semibold tracking-wider uppercase hover:opacity-95 transition-opacity shrink-0 shadow-sm"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Abrir Maps</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#0e121b]/95 border border-[#c5a367]/30 p-6 sm:p-10 shadow-2xl shadow-black/70 backdrop-blur-md">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#161c28] border border-[#c5a367] flex items-center justify-center text-[#d4b57b]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-cormorant text-3xl sm:text-4xl text-white font-medium">
                      Mensagem Enviada com Sucesso!
                    </h3>
                    <p className="text-sm sm:text-base text-stone-300 max-w-md mx-auto">
                      Agradecemos seu contato, <span className="text-[#d4b57b]">{formData.nome}</span>.
                      Nossa equipe jurídica analisará sua solicitação e entrará em contato o mais breve possível.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#c5a367] to-[#dfc28d] text-[#0a0c10] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-[#c5a367]/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Falar Agora no WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          nome: '',
                          email: '',
                          telefone: '',
                          assunto: '',
                          mensagem: '',
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-full border border-stone-700 text-stone-300 hover:text-white text-xs uppercase tracking-wider"
                    >
                      Enviar Outra Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-900/40 border border-red-500/50 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* 2-column on tablet/desktop: Nome & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nome completo */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Nome completo"
                        required
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#141824] border border-[#2b3140] hover:border-[#c5a367]/50 focus:border-[#d4b57b] focus:ring-1 focus:ring-[#d4b57b] text-sm text-stone-100 placeholder-stone-400 transition-all outline-none"
                      />
                    </div>

                    {/* E-mail */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail"
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#141824] border border-[#2b3140] hover:border-[#c5a367]/50 focus:border-[#d4b57b] focus:ring-1 focus:ring-[#d4b57b] text-sm text-stone-100 placeholder-stone-400 transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* 2-column: Telefone/WhatsApp & Assunto */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Telefone / WhatsApp */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Telefone / WhatsApp"
                        className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#141824] border border-[#2b3140] hover:border-[#c5a367]/50 focus:border-[#d4b57b] focus:ring-1 focus:ring-[#d4b57b] text-sm text-stone-100 placeholder-stone-400 transition-all outline-none"
                      />
                    </div>

                    {/* Assunto Dropdown */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                        <FileText className="w-4 h-4" />
                      </div>
                      <select
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        className="w-full pl-10 pr-10 py-3.5 rounded-xl bg-[#141824] border border-[#2b3140] hover:border-[#c5a367]/50 focus:border-[#d4b57b] focus:ring-1 focus:ring-[#d4b57b] text-sm text-stone-100 appearance-none transition-all outline-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#141824] text-stone-400">
                          Assunto
                        </option>
                        <option value="Direito Trabalhista" className="bg-[#141824] text-stone-100">
                          Direito Trabalhista
                        </option>
                        <option value="Direito Previdenciário" className="bg-[#141824] text-stone-100">
                          Direito Previdenciário
                        </option>
                        <option value="Direito Civil e de Família" className="bg-[#141824] text-stone-100">
                          Direito Civil e de Família
                        </option>
                        <option value="Contratos e Indenizações" className="bg-[#141824] text-stone-100">
                          Contratos e Indenizações
                        </option>
                        <option value="Outro assunto" className="bg-[#141824] text-stone-100">
                          Outro assunto
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-stone-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Sua mensagem textarea */}
                  <div className="relative">
                    <div className="absolute top-4 left-3.5 pointer-events-none text-stone-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Sua mensagem"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#141824] border border-[#2b3140] hover:border-[#c5a367]/50 focus:border-[#d4b57b] focus:ring-1 focus:ring-[#d4b57b] text-sm text-stone-100 placeholder-stone-400 transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button matching Image 2 */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d4b57b] via-[#e2c792] to-[#b88f4c] text-[#0a0c10] font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 hover:opacity-95 active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-lg shadow-[#c5a367]/25 font-cinzel"
                    >
                      {isSubmitting ? (
                        <span>ENVIANDO...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>ENVIAR MENSAGEM</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Microcopy with lock icon */}
                  <div className="flex items-center justify-center gap-2 pt-2 text-xs text-stone-400">
                    <Lock className="w-3.5 h-3.5 text-[#d4b57b]" />
                    <span>Seus dados estão seguros conosco.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer separator line matching Image 2 */}
        <div className="pt-8 border-t border-[#c5a367]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c5a367]/40 to-transparent hidden sm:block" />
          <span className="font-cinzel text-xs tracking-[0.35em] text-[#d4b57b] uppercase font-semibold text-center">
            PORTÍRIO & SOUZA ADVOGADOS
          </span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#c5a367]/40 to-transparent hidden sm:block" />
        </div>
      </div>
    </section>
  );
};
