import React, { useState } from 'react';
import { Compass, ShoppingBag, Hotel, ShieldCheck, Sparkles, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';

export const SurfTripAndMerch: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guia' | 'merch'>('guia');

  const tripItems = [
    {
      title: 'POUSADAS FRENTE AO MAR (OLIVENÇA)',
      category: 'ONDE FICAR',
      desc: 'Acorde vendo o mar do Backdoor e Batuba da janela. Opções a 2 minutos a pé da laje de pedra, com café da manhã regional e suporte para guardar pranchas.',
      highlight: 'Acesso a pé aos picos principais',
      tag: 'PARCEIROS LOCAIS',
    },
    {
      title: 'SHAPERS & CONSERTO RÁPIDO DE PRANCHAS',
      category: 'SUPORTE TÉCNICO',
      desc: 'Bateu a quilha na laje de pedra? Oficinas locais em Olivença e Ilhéus realizam reparos em resina epóxi e poliéster no mesmo dia para você não perder a próxima maré.',
      highlight: 'Reparos no mesmo dia',
      tag: 'BANCADA LOCAL',
    },
    {
      title: 'AULAS DE SURF & ALUGUEL NA PRAINHA',
      category: 'INICIAÇÃO & EVOLUÇÃO',
      desc: 'Para quem está começando ou quer evoluir com instrutores locais que conhecem cada corrente e pedra da Costa do Cacau. Pranchões, funboards e softboards.',
      highlight: 'Instrutores nativos da Bahia',
      tag: 'ESCOLA LOCAL',
    },
  ];

  const merchItems = [
    {
      name: 'LYCRA OFICIAL SURF LIVRE UV50+',
      type: 'VESTUÁRIO TÉCNICO',
      price: 'R$ 139,90',
      desc: 'Tecido tecnológico de secagem rápida com proteção solar máxima contra o sol baiano. Modelagem anatômica que não assa a axila na remada.',
      badge: 'DROP LIMITADO',
      color: 'Preto & Ciano Neon',
    },
    {
      name: 'BONÉ FIVE-PANEL "VIVA O MAR"',
      type: 'HEADWEAR STREETWEAR',
      price: 'R$ 99,90',
      desc: 'Aba reta em tecido leve e respirável, fecho em fivela e bordado frontal de alta precisão com a logo oficial da marca.',
      badge: 'MAIS VENDIDO',
      color: 'Preto Fosco com detalhes Areia',
    },
    {
      name: 'CAMISETA 100% ALGODÃO "ENTRE NA ONDA"',
      type: 'LIFESTYLE',
      price: 'R$ 119,90',
      desc: 'Algodão penteado 30.1 de toque macio. Estampa silkada cinematográfica inspirada nas sessões de inverno em Olivença.',
      badge: 'ED. LIMITADA',
      color: 'Branco Off-White & Preto Vintage',
    },
  ];

  const whatsappMerchMsg = (item: string) =>
    encodeURIComponent(`Olá! Vim pelo site Surf Livre e quero garantir o item "${item}" do Drop Oficial!`);

  return (
    <section id="trip-merch" className="py-24 bg-[#02050e] border-t border-white/5 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Switcher Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-[#2EC4B6]" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 font-bold">
                SURF TRIP & LOJA OFICIAL • BAHIA
              </span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              EXPERIÊNCIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#00F0FF]">COMPLETA.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-xl uppercase tracking-wider mt-3">
              Planeje sua surf trip para as bancadas de Olivença ou garanta os produtos oficiais da marca Surf Livre.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('guia')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider font-bold transition-all cursor-pointer ${
                activeTab === 'guia'
                  ? 'bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🌴 GUIA DO VIAJANTE
            </button>
            <button
              onClick={() => setActiveTab('merch')}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider font-bold transition-all cursor-pointer ${
                activeTab === 'merch'
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ⚡ DROP OFICIAL (MERCH)
            </button>
          </div>
        </div>

        {/* Tab 1: Guia do Viajante */}
        {activeTab === 'guia' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {tripItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#060c1c] to-[#02050e] border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-[#2EC4B6]/15 text-[#2EC4B6] font-bold">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-syne font-black text-xl text-white uppercase tracking-tight mb-3 group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-300 font-bold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {item.highlight}
                  </span>
                  <a
                    href="https://wa.me/5573999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20Surf%20Livre%20e%20gostaria%20de%20dicas%20do%20Guia%20do%20Viajante%20em%20Oliven%C3%A7a!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                    title="Falar com a equipe"
                  >
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Drop Oficial (Merch) */}
        {activeTab === 'merch' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {merchItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#060c1c] to-[#02050e] border border-yellow-500/20 hover:border-yellow-400/50 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-yellow-400/15 text-yellow-300 font-bold">
                      {item.badge}
                    </span>
                    <span className="text-xs font-syne font-black text-white">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="font-syne font-black text-xl text-white uppercase tracking-tight mb-2 group-hover:text-yellow-200 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="text-[10px] font-mono text-slate-400 mb-6">
                    <span className="text-slate-500">Cores: </span>
                    <strong className="text-slate-200">{item.color}</strong>
                  </div>
                </div>

                <a
                  href={`https://wa.me/5573999999999?text=${whatsappMerchMsg(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>PEDIR PELO WHATSAPP</span>
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
