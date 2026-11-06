import React, { useState } from 'react';
import { ShieldCheck, Flame, Sun, Sparkles, CheckCircle2, ArrowRight, ExternalLink, Award } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

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
              <img src="/partners/intense_wax_logo.png" alt="Intense Wax" className="w-full h-full object-contain" />
            </div>

            {/* Product Image Stage */}
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 mb-6 bg-black/40 shadow-inner group/img">
              <img
                src="/partners/intense_wax_products.jpg"
                alt="Parafina Intense Wax Artesanal - Linha Completa"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

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
                  <img src="/partners/intense_wax_logo.png" alt="Logo" className="w-full h-full object-contain" />
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

          {/* Right Column: Why Intense Wax + Features (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#060c1c] to-[#02050e] rounded-3xl border border-cyan-500/20 p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            
            {/* Top Brand Block with Floating Logo */}
            <div>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-2 bg-gradient-to-br from-yellow-400/20 to-cyan-500/20 border border-yellow-400/40 shadow-[0_0_30px_rgba(250,204,21,0.2)] shrink-0 flex items-center justify-center">
                  <img src="/partners/intense_wax_logo.png" alt="Intense Wax Logo" className="w-full h-full object-contain" />
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
                
                {/* Pillar 1 */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all">
                  <div className="flex items-center gap-2 text-yellow-400 mb-1.5 font-mono text-xs font-bold uppercase">
                    <Flame className="w-4 h-4 fill-yellow-400" />
                    <span>TRAVAMENTO TOTAL</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Cria relevo de grumos firmes e duradouros na prancha para aguentar cavadas no trilho e aéreos sem escorregar.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/30 transition-all">
                  <div className="flex items-center gap-2 text-amber-300 mb-1.5 font-mono text-xs font-bold uppercase">
                    <Sun className="w-4 h-4" />
                    <span>NÃO VIRA MELAÇO</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Resistente ao sol forte da praia. Mantém a consistência no calor do verão e na capota do carro sem derreter.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-all">
                  <div className="flex items-center gap-2 text-cyan-300 mb-1.5 font-mono text-xs font-bold uppercase">
                    <ShieldCheck className="w-4 h-4" />
                    <span>FEITA ARTESANALMENTE</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Produção manual e lote controlado em barras de 70g com cera e resinas selecionadas de altíssima pureza.
                  </p>
                </div>

                {/* Pillar 4 */}
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

            {/* Action Buttons: Contact / Instagram */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/intensewax/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-[#2EC4B6] text-ocean-950 font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
              >
                <InstagramIcon className="w-4 h-4 fill-ocean-950" />
                <span>CONHEÇA A @INTENSEWAX</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="#destinos"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-yellow-400/40 text-slate-300 hover:text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
              >
                <span>VER O MAR HOJE</span>
                <ArrowRight className="w-3.5 h-3.5 text-yellow-400" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
