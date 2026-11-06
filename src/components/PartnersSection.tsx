import React, { useState } from 'react';
import { ShieldCheck, Flame, Sun, Sparkles, CheckCircle2, ArrowRight, ExternalLink, Award, ShoppingCart } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
  </svg>
);

export const PartnersSection: React.FC = () => {
  const [activeTemp, setActiveTemp] = useState<'quente' | 'morna' | 'fria'>('quente');

  const formulaDetails = {
    quente: {
      title: 'ÁGUA QUENTE / TROPICAL (22°C A 28°C+)',
      tag: 'IDEAL PARA O NORDESTE & BAHIA',
      desc: 'Fórmula de alta densidade desenvolvida sob medida para o litoral baiano. Não derrete no calor do bico da prancha e cria grumos consistentes que travam o pé no drop.',
      hardness: 'Extra Hard • Grip Firme',
      color: 'from-amber-400 to-yellow-500',
    },
    morna: {
      title: 'ÁGUA MORNA (18°C A 22°C)',
      tag: 'MEIA-ESTAÇÃO & DIAS VENTOSOS',
      desc: 'Equilíbrio exato entre maciez e aderência. Pega rápido na prancha e mantém a elasticidade ideal para manobras de borda e aéreos.',
      hardness: 'Medium Hard • Aderência Rápida',
      color: 'from-cyan-400 to-sky-500',
    },
    fria: {
      title: 'ÁGUA FRIA (ABAIXO DE 18°C)',
      tag: 'SWELLS DE INVERNO & SUL DO BRASIL',
      desc: 'Composto ultra-adesivo e pegajoso para temperaturas baixas, evitando que a parafina fique cristalizada ou escorregadia no frio.',
      hardness: 'Soft Tack • Cola no Pé',
      color: 'from-blue-400 to-indigo-500',
    },
  };

  const whatsappMessage = encodeURIComponent(
    'Olá! Vim pelo site oficial do Surf Livre e quero garantir minha Parafina Intense Wax artesanal de 70g!'
  );
  const whatsappUrl = `https://wa.me/5573999999999?text=${whatsappMessage}`;

  return (
    <section id="parceiros" className="relative py-28 bg-[#02050e] overflow-hidden border-t border-white/5">
      {/* Dynamic Lighting Glows */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-yellow-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-400/30 text-yellow-300 text-xs font-mono tracking-widest uppercase mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>PARCEIRO OFICIAL • GRIP DE ALTA PERFORMANCE</span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              PARAFINA <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-[#2EC4B6]">INTENSE WAX.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-2xl uppercase tracking-wider mt-3">
              O grip artesanal que segura a sessão nas bancadas mais pesadas de Olivença, Ilhéus e pelo Brasil.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-yellow-400/20 backdrop-blur-md shadow-lg">
            <Award className="w-6 h-6 text-yellow-400" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-mono font-bold uppercase text-yellow-400 tracking-wider">
                100% ARTESANAL • 70G
              </span>
              <span className="text-xs font-mono font-bold text-white tracking-wider">
                TESTADA PELO SURF LIVRE
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid: Left Products Visual + Right Features & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Product Showcase with 3D Float (6 cols) */}
          <div className="lg:col-span-6 relative bg-gradient-to-b from-[#060c1c] to-[#02050e] rounded-3xl border border-yellow-500/20 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden group">
            {/* Ambient Background Logo Watermark */}
            <div className="absolute -top-10 -right-10 w-64 h-64 opacity-5 pointer-events-none">
              <img
                src="/partners/intense_wax_logo.png"
                alt="Logo da Parafina Intense Wax - Parceiro Surf Livre"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Image Stage */}
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 mb-6 bg-black/40 shadow-inner group/img">
              <img
                src="/partners/intense_wax_products.jpg"
                alt="Caixas da Parafina Intense Wax Artesanal 70g - Fórmulas Água Quente, Morna e Fria para surf na Bahia"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

              {/* Floating Badge on Photo */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-full bg-black/80 border border-yellow-400/60 text-yellow-300 text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <Flame className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  PRODUTO ARTESANAL • 70G
                </span>
              </div>

              {/* Formula Badge Bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-yellow-400 font-bold block">
                    FÓRMULA EXCLUSIVA
                  </span>
                  <span className="font-syne font-black text-lg text-white uppercase tracking-tight">
                    RESINAS PURAS DE ALTO GRIP
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full p-1 bg-black/60 border border-yellow-400/40 backdrop-blur-md shrink-0">
                  <img
                    src="/partners/intense_wax_logo.png"
                    alt="Selo Intense Wax"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Formula Selector Tabs */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block">
                ESCOLHA A FÓRMULA POR TEMPERATURA DE ÁGUA:
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(['quente', 'morna', 'fria'] as const).map((temp) => (
                  <button
                    key={temp}
                    onClick={() => setActiveTemp(temp)}
                    className={`py-2 px-3 rounded-xl text-xs font-mono uppercase font-bold tracking-wider transition-all cursor-pointer ${
                      activeTemp === temp
                        ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-[0_0_15px_rgba(250,204,21,0.4)]'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {temp === 'quente' ? '☀️ ÁGUA QUENTE' : temp === 'morna' ? '🌊 ÁGUA MORNA' : '❄️ ÁGUA FRIA'}
                  </button>
                ))}
              </div>

              {/* Dynamic Formula Info Card */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-left">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono font-bold text-yellow-300 uppercase">
                    {formulaDetails[activeTemp].tag}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {formulaDetails[activeTemp].hardness}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {formulaDetails[activeTemp].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Why Intense Wax + Conversion / Direct Buy (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#060c1c] to-[#02050e] rounded-3xl border border-cyan-500/20 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            
            {/* Top Brand Block with Floating Logo */}
            <div>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-2 bg-gradient-to-br from-yellow-400/20 to-cyan-500/20 border border-yellow-400/40 shadow-[0_0_30px_rgba(250,204,21,0.2)] shrink-0 flex items-center justify-center">
                  <img
                    src="/partners/intense_wax_logo.png"
                    alt="Logo oficial da parafina Intense Wax"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-[#2EC4B6]/20 text-[#2EC4B6] text-[10px] font-mono font-bold uppercase tracking-wider">
                      PARCERIA OFICIAL
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      BRASIL • BAHIA
                    </span>
                  </div>
                  <h3 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                    O GRIP DA NOSSA GALERA.
                  </h3>
                </div>
              </div>

              {/* 4 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all">
                  <div className="flex items-center gap-2 text-yellow-400 mb-1.5 font-mono text-xs font-bold uppercase">
                    <Flame className="w-4 h-4 fill-yellow-400" />
                    <span>TRAVAMENTO TOTAL</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Cria relevo de grumos firmes e duradouros na prancha para aguentar cavadas no trilho e aéreos sem escorregar.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all">
                  <div className="flex items-center gap-2 text-amber-300 mb-1.5 font-mono text-xs font-bold uppercase">
                    <Sun className="w-4 h-4" />
                    <span>NÃO VIRA MELAÇO</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Resistente ao sol forte da praia. Mantém a consistência no calor do verão e na capota do carro sem derreter.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all">
                  <div className="flex items-center gap-2 text-cyan-300 mb-1.5 font-mono text-xs font-bold uppercase">
                    <ShieldCheck className="w-4 h-4" />
                    <span>FEITA ARTESANALMENTE</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Produção manual e lote controlado em barras de 70g com cera e resinas selecionadas de altíssima pureza.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1.5 font-mono text-xs font-bold uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>APROVADA NO BACKDOOR</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Testada nas bancadas de pedra de Olivença e do litoral brasileiro pela equipe e atletas do canal Surf Livre.
                  </p>
                </div>
              </div>

              {/* Quote from Surf Livre Team */}
              <div className="p-4 rounded-2xl bg-yellow-500/10 border border-yellow-400/20 mb-6">
                <p className="font-syne font-bold text-sm text-yellow-200 leading-snug">
                  “No mar de Olivença, quando o swell entra com pressão, você não pode pensar se o pé vai escorregar ou não. A Intense Wax é o que cola a nossa prancha nos tubos.”
                </p>
                <span className="text-[10px] font-mono uppercase text-slate-400 block mt-2 font-bold tracking-wider">
                  — CANAL SURF LIVRE • OLIVENÇA / ILHÉUS - BA
                </span>
              </div>
            </div>

            {/* Direct Conversion Actions: WhatsApp Buy + Instagram Link */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 text-ocean-950 font-syne font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 fill-ocean-950" />
                <span>COMPRAR PELO WHATSAPP (PEDIDO DIRETO)</span>
                <ShoppingCart className="w-4 h-4" />
              </a>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://www.instagram.com/intensewax/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 rounded-full bg-white/5 border border-white/10 hover:border-yellow-400/40 text-slate-200 hover:text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-400" />
                  <span>VER NO INSTAGRAM @INTENSEWAX</span>
                  <ExternalLink className="w-3.5 h-3.5 text-yellow-400" />
                </a>

                <a
                  href="#destinos"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <span>RADAR DO MAR</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
