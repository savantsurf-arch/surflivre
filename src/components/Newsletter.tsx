import React, { useState } from 'react';
import { Send, Bell, CheckCircle2, Shield, Waves, Loader2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [preferredSpot, setPreferredSpot] = useState('Backdoor (Olivença)');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="alerta" className="relative py-24 bg-[#02050e] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-ocean-950/90 to-[#030712] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle wave light */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 mb-4 shadow-sm">
            <Bell className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase font-bold">
              ALERTA DE CONDIÇÕES IDEAIS
            </span>
          </div>

          <h3 className="font-syne font-black text-2xl sm:text-4xl uppercase tracking-tight text-white mb-3">
            QUANDO O MAR ESTIVER CLÁSSICO, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF]">VOCÊ FICA SABENDO.</span>
          </h3>
          
          <p className="font-mono text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8 uppercase tracking-wider leading-relaxed">
            Receba um alerta direto no seu e-mail quando o <strong className="text-cyan-300">Backdoor</strong>, <strong className="text-cyan-300">Batuba</strong> ou <strong className="text-cyan-300">Tiririca</strong> alinharem swell de sul, vento terral e maré seca.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              {/* Spot Selection */}
              <div className="flex items-center justify-center gap-2 mb-2 text-xs font-mono text-slate-400">
                <Waves className="w-3.5 h-3.5 text-[#2EC4B6]" />
                <span className="text-[11px] uppercase">SEU PICO PRIORITÁRIO:</span>
                <select
                  value={preferredSpot}
                  onChange={(e) => setPreferredSpot(e.target.value)}
                  className="bg-black/70 border border-white/20 rounded-lg px-2.5 py-1 text-cyan-300 font-bold text-xs focus:outline-none focus:border-cyan-400 cursor-pointer"
                >
                  <option value="Backdoor (Olivença)">Backdoor (Olivença)</option>
                  <option value="Batuba (Olivença)">Batuba (Olivença)</option>
                  <option value="Pedra da Cachorra (Ilhéus)">Pedra da Cachorra (Ilhéus)</option>
                  <option value="Tiririca (Itacaré)">Tiririca (Itacaré)</option>
                </select>
              </div>

              {/* Email Input + Button */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail de surfista"
                  className="w-full px-5 py-3.5 rounded-full bg-black/70 border border-white/20 text-white placeholder-slate-400 font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(46,196,182,0.6)] transition-all whitespace-nowrap cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin text-ocean-950" />
                  ) : (
                    <>
                      <span>ME AVISE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy note */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-500 pt-1">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>Zero spam. Apenas alertas reais quando as bancadas quebrarem perfeitas.</span>
              </div>
            </form>
          ) : (
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-cyan-950/90 border border-cyan-400 text-cyan-200 font-mono text-xs animate-in zoom-in-95 shadow-xl">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <strong className="block text-white uppercase font-bold">ALERTA ATIVADO PARA {preferredSpot.toUpperCase()}!</strong>
                <span>Você será avisado no e-mail assim que o mar subir e o vento virar terral.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
