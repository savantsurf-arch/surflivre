import React, { useState } from 'react';
import { Send, Bell, CheckCircle2 } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative py-24 bg-[#02050e] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-ocean-950/80 border border-cyan-500/20 shadow-2xl relative overflow-hidden">
          {/* Subtle wave light */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Bell className="w-3.5 h-3.5 text-cyan-300" />
            <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase">
              ALERTA DE SWELL
            </span>
          </div>

          <h3 className="font-syne font-black text-2xl sm:text-4xl uppercase tracking-tight text-white mb-3">
            QUER SABER QUANDO A PRÓXIMA SESSÃO COMEÇAR?
          </h3>
          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mb-8 uppercase tracking-wider">
            Receba notificações quando as séries subirem em Olivença e episódios inéditos entrarem no ar.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="w-full px-5 py-3.5 rounded-full bg-black/60 border border-white/20 text-white placeholder-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(46,196,182,0.5)] transition-all whitespace-nowrap"
              >
                <span>ME AVISE</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-950 border border-cyan-400 text-cyan-300 font-mono text-xs animate-in zoom-in-95">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>VOCÊ ESTÁ NA LISTA DE CHAMADA DA SESSÃO! 🌊</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
