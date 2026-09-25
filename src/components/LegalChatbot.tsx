import React, { useState, useEffect, useRef } from 'react';
import {
  Bot,
  MessageCircle,
  X,
  Send,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Minimize2,
  Clock,
  Shield,
  ArrowRight,
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: string[];
  ctaUrl?: string;
  ctaText?: string;
}

export const LegalChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 'm1',
      sender: 'bot',
      text: 'Olá! Sou o assistente virtual do escritório Porfírio & Souza Advogados. Posso direcionar seu atendimento para o advogado especialista de plantão agora mesmo.',
      timestamp: 'Agora',
    },
    {
      id: 'm2',
      sender: 'bot',
      text: 'Qual assunto você precisa de orientação jurídica?',
      timestamp: 'Agora',
      options: [
        'Direito Trabalhista',
        'Direito Previdenciário (INSS)',
        'Direito Civil e Família',
        'Falar direto no WhatsApp',
      ],
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  // Auto-scroll when messages change or typing
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setHasUnread(false);
  };

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const sendResponse = (userText: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: 'Agora',
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: Message;
      const lower = userText.toLowerCase();

      if (lower.includes('trabalhista') || lower.includes('demiss') || lower.includes('salário') || lower.includes('hora extra')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Compreendo. Nossos advogados trabalhistas cuidam de rescisões, horas extras, verbas rescisórias, assédio e acidentes de trabalho com total sigilo.',
          timestamp: 'Agora',
          ctaText: 'Falar com Advogado Trabalhista no WhatsApp',
          ctaUrl:
            'https://wa.me/5511970074653?text=' +
            encodeURIComponent('Olá, selecionei Direito Trabalhista pelo atendimento virtual e gostaria de tirar dúvidas sobre o meu caso.'),
          options: ['Ver outras áreas', 'Agendar ligação'],
        };
      } else if (lower.includes('previdenciário') || lower.includes('inss') || lower.includes('aposent') || lower.includes('loas') || lower.includes('auxílio')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Perfeito. Realizamos planejamento de aposentadoria, pedidos de auxílio-doença, BPC/LOAS e revisões com análise detalhada do tempo de contribuição.',
          timestamp: 'Agora',
          ctaText: 'Falar com Advogado Previdenciário no WhatsApp',
          ctaUrl:
            'https://wa.me/5511970074653?text=' +
            encodeURIComponent('Olá, preciso de orientação sobre benefício do INSS / Aposentadoria com o escritório Porfírio & Souza.'),
          options: ['Ver outras áreas', 'Agendar ligação'],
        };
      } else if (lower.includes('civil') || lower.includes('família') || lower.includes('divórcio') || lower.includes('pensão') || lower.includes('inventário')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Entendido. Cuidamos de divórcios, partilha de bens, pensão alimentícia, guarda, inventários e contratos com condução humanizada e segura.',
          timestamp: 'Agora',
          ctaText: 'Falar com Advogado de Família/Civil no WhatsApp',
          ctaUrl:
            'https://wa.me/5511970074653?text=' +
            encodeURIComponent('Olá, gostaria de conversar sobre Direito Civil e de Família com o escritório Porfírio & Souza.'),
          options: ['Ver outras áreas', 'Agendar ligação'],
        };
      } else if (lower.includes('outras') || lower.includes('opções') || lower.includes('menu')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Selecione abaixo a especialidade desejada ou clique para iniciar conversa direta no WhatsApp:',
          timestamp: 'Agora',
          options: [
            'Direito Trabalhista',
            'Direito Previdenciário (INSS)',
            'Direito Civil e Família',
            'Falar direto no WhatsApp',
          ],
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: `Recebi sua solicitação: "${userText}". Para lhe atender com prioridade máxima e sigilo profissional, o advogado responsável já pode iniciar seu atendimento pelo WhatsApp ou telefone.`,
          timestamp: 'Agora',
          ctaText: 'Abrir WhatsApp com Advogado de Plantão',
          ctaUrl:
            'https://wa.me/5511970074653?text=' +
            encodeURIComponent(`Olá, iniciei atendimento automático pelo site: "${userText}". Gostaria de falar com o advogado.`),
          options: ['Outra dúvida', 'Ver endereço no mapa'],
        };
      }

      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse]);
    }, 650);
  };

  const handleOptionClick = (option: string) => {
    if (option === 'Falar direto no WhatsApp') {
      window.open(
        'https://wa.me/5511970074653?text=' +
          encodeURIComponent('Olá, gostaria de falar diretamente com um advogado do escritório Porfírio & Souza.'),
        '_blank'
      );
      return;
    }
    if (option === 'Ver endereço no mapa') {
      window.open('https://maps.app.goo.gl/Qz4sBASZUnD5DPC97', '_blank');
      return;
    }
    sendResponse(option);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    const text = inputMessage.trim();
    setInputMessage('');
    sendResponse(text);
  };

  return (
    <>
      {/* Small & Discreet Floating Trigger Widget - Placed directly above WhatsApp */}
      <div className="fixed bottom-[88px] right-6 z-40 flex flex-col items-end">
        {!isOpen && (
          <button
            onClick={handleOpen}
            className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d111a]/95 border border-[#c5a367]/60 hover:border-[#d4b57b] text-white shadow-xl shadow-black/90 hover:shadow-[0_4px_20px_rgba(197,163,103,0.4)] backdrop-blur-md transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-2"
            aria-label="Abrir assistente virtual de atendimento rápido"
          >
            {/* Small glowing robot badge */}
            <div className="relative w-6 h-6 rounded-full bg-gradient-to-tr from-[#c5a367] to-[#dfc28d] flex items-center justify-center text-[#0a0c10] shadow-sm shrink-0">
              <Bot className="w-3.5 h-3.5 stroke-[2.2]" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#0d111a]" />
            </div>

            {/* Compact label */}
            <div className="flex flex-col text-left pr-0.5">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-[10px] font-semibold text-[#faecd0] tracking-wide">
                  Robô de Atendimento
                </span>
                <span className="text-[8px] uppercase px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                  Online
                </span>
              </div>
              <span className="text-[9px] text-[#d4b57b] group-hover:text-[#faecd0] transition-colors mt-0.5">
                Falar com advogado ↗
              </span>
            </div>

            {/* Unread indicator */}
            {hasUnread && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4b57b] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c5a367]" />
              </span>
            )}
          </button>
        )}
      </div>

      {/* Chat Window: Small, Elegant and Non-Intrusive */}
      {isOpen && (
        <div
          className={`fixed bottom-5 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 rounded-2xl bg-[#0e121b] border border-[#c5a367]/40 shadow-2xl shadow-black/90 backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-300 ${
            isMinimized ? 'h-14' : 'h-[500px] max-h-[82vh]'
          }`}
        >
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-[#121724] via-[#161d2d] to-[#121724] border-b border-[#c5a367]/25 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-[#182030] border border-[#c5a367]/60 flex items-center justify-center text-[#d4b57b]">
                <Bot className="w-4 h-4 stroke-[2]" />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-[#121724]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-semibold text-[#faecd0] font-cinzel tracking-wider">
                    Atendimento Jurídico
                  </h4>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    Advogado de plantão
                  </span>
                </div>
                <p className="text-[10px] text-stone-400 flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5 text-[#d4b57b]" />
                  <span>Resposta imediata • Sigilo OAB</span>
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1 text-stone-400">
              <button
                onClick={handleToggleMinimize}
                className="p-1 hover:text-white rounded-lg hover:bg-stone-800/50 transition-colors"
                title={isMinimized ? 'Expandir' : 'Minimizar'}
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:text-white rounded-lg hover:bg-stone-800/50 transition-colors"
                title="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body when not minimized */}
          {!isMinimized && (
            <>
              {/* Message List */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs bg-[#0b0e15]/70">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                        msg.sender === 'user'
                          ? 'bg-[#c5a367] text-[#0a0c10] font-medium rounded-tr-xs'
                          : 'bg-[#151b27] border border-[#c5a367]/20 text-stone-200 rounded-tl-xs'
                      }`}
                    >
                      <p>{msg.text}</p>

                      {/* Direct WhatsApp Call to Action if available */}
                      {msg.ctaUrl && (
                        <div className="pt-2.5 mt-2 border-t border-[#c5a367]/25">
                          <a
                            href={msg.ctaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-medium text-[11px] shadow-md hover:opacity-95 transition-opacity"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>{msg.ctaText || 'Falar com Advogado'}</span>
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Quick Reply Option Buttons */}
                    {msg.options && (
                      <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                        {msg.options.map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionClick(opt)}
                            className="px-2.5 py-1 rounded-full text-[10px] bg-[#1a2233] border border-[#c5a367]/35 text-[#faecd0] hover:bg-[#c5a367] hover:text-[#0b0e14] transition-all cursor-pointer flex items-center gap-1 group"
                          >
                            <span>{opt}</span>
                            <ArrowRight className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
                          </button>
                        ))}
                      </div>
                    )}

                    <span className="text-[9px] text-stone-400 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 p-2 bg-[#151b27] border border-[#c5a367]/20 rounded-xl w-16">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4b57b] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4b57b] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4b57b] animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Fast Direct WhatsApp Banner at Bottom */}
              <div className="px-3 py-1.5 bg-[#121724] border-t border-stone-800/80 flex items-center justify-between text-[10px] text-stone-400">
                <span className="flex items-center gap-1 text-[#d4b57b]">
                  <Shield className="w-3 h-3" />
                  <span>Sigilo profissional OAB</span>
                </span>
                <a
                  href="https://wa.me/5511970074653?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20r%C3%A1pido%20com%20um%20advogado."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#faecd0] hover:text-[#c5a367] font-medium flex items-center gap-1"
                >
                  <span>(11) 97007-4653</span>
                </a>
              </div>

              {/* Chat Input Field */}
              <form
                onSubmit={handleSubmit}
                className="p-2.5 bg-[#0e121b] border-t border-[#c5a367]/20 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escreva sua dúvida aqui..."
                  className="flex-1 bg-[#141926] border border-[#273042] rounded-xl px-3 py-2 text-xs text-stone-100 placeholder-stone-400 focus:outline-none focus:border-[#d4b57b]"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="p-2 rounded-xl bg-gradient-to-r from-[#c5a367] to-[#dfc28d] text-[#0a0c10] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity cursor-pointer"
                  aria-label="Enviar mensagem"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};
