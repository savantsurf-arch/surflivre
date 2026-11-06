import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, Compass } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#010308] border-t border-white/10 text-slate-400 pt-20 pb-12 overflow-hidden select-none">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 font-syne font-black text-[18vw] text-white/[0.015] pointer-events-none tracking-tighter whitespace-nowrap select-none uppercase leading-none"
      >
        SURF LIVRE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" variant="full" showTagline />
            <p className="font-mono text-xs text-slate-400 max-w-sm leading-relaxed uppercase tracking-wider">
              A experiência digital de surf film e lifestyle de Olivença, Ilhéus - Bahia.
              Sessões brutas, viagens inesquecíveis e cultura praiana autêntica.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 pt-2">
              <Compass className="w-4 h-4" />
              <span>14°57'S 39°01'W • OLIVENÇA, BRASIL</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="font-syne font-black text-xs uppercase tracking-widest text-white block mb-4">
              NAVEGAÇÃO
            </span>
            <ul className="space-y-2 text-xs font-mono tracking-wider">
              <li><a href="#" className="hover:text-[#2EC4B6] transition-colors">INÍCIO</a></li>
              <li><a href="#explore" className="hover:text-[#2EC4B6] transition-colors">QUAL É A SUA ONDA</a></li>
              <li><a href="#sessoes" className="hover:text-[#2EC4B6] transition-colors">A SESSÃO COMEÇA</a></li>
              <li><a href="#videos" className="hover:text-[#2EC4B6] transition-colors">ÚLTIMAS SESSÕES</a></li>
              <li><a href="#destinos" className="hover:text-[#2EC4B6] transition-colors">ONDE A ONDA NOS LEVA</a></li>
              <li><a href="#galeria" className="hover:text-[#2EC4B6] transition-colors">SURF FILM GALERIA</a></li>
              <li><a href="#comunidade" className="hover:text-[#2EC4B6] transition-colors">COMUNIDADE</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <span className="font-syne font-black text-xs uppercase tracking-widest text-white block mb-4">
              CANAIS OFICIAIS
            </span>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/surflivre1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-syne font-bold text-xs uppercase text-white block group-hover:text-pink-300">
                    INSTAGRAM
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">@surflivre1</span>
                </div>
              </a>

              <a
                href="https://www.youtube.com/@surflivre_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">
                  <YoutubeIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-syne font-bold text-xs uppercase text-white block group-hover:text-red-300">
                    YOUTUBE
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">@surflivre_</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} SURF LIVRE. TODOS OS DIREITOS RESERVADOS.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
          >
            <span>VOLTAR AO TOPO</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#2EC4B6]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
