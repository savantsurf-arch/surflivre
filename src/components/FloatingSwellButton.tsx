import React, { useState, useEffect } from 'react';
import { Waves, ArrowDown } from 'lucide-react';

export const FloatingSwellButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o FAB apenas após rolar um pouco para baixo
      setVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Atalho rápido para condições do mar"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <a
        href="#radar"
        className="group relative flex items-center gap-2.5 min-h-[52px] px-5 py-3.5 rounded-full bg-black/90 border-2 border-[#00F0FF] text-white shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_35px_rgba(0,240,255,0.9)] hover:bg-[#00F0FF] hover:text-[#030712] transition-all transform active:scale-95 cursor-pointer backdrop-blur-md"
        aria-label="Rolar diretamente para as condições do mar hoje"
      >
        {/* Radar Wave Ping Effect */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>

        <Waves className="w-5 h-5 text-[#00F0FF] group-hover:text-[#030712] transition-colors stroke-[2.5]" />

        <div className="flex flex-col text-left">
          <span className="text-[10px] font-mono tracking-widest text-[#00F0FF] group-hover:text-[#030712] font-black uppercase leading-none">
            AO VIVO
          </span>
          <span className="font-syne font-black text-xs uppercase tracking-wider text-white group-hover:text-[#030712] leading-tight">
            CONDIÇÕES AGORA
          </span>
        </div>

        <ArrowDown className="w-4 h-4 ml-0.5 text-cyan-300 group-hover:text-[#030712] group-hover:translate-y-0.5 transition-transform" />
      </a>
    </aside>
  );
};
