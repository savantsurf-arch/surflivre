import React from 'react';
import { Users } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';

export const CommunitySection: React.FC = () => {
  return (
    <section id="comunidade" className="relative py-28 bg-[#030712] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-900/20 via-teal-900/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 mb-6">
          <Users className="w-4 h-4 text-cyan-300" />
          <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase">
            A GALERA DO MAR
          </span>
        </div>

        <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-6 leading-tight">
          VOCÊ TAMBÉM FAZ PARTE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] via-[#00F0FF] to-sky-400">
            DESSA SESSÃO.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
          “O Surf Livre não é só sobre pegar onda. É sobre acordar cedo, cair na água, viajar, conhecer gente e viver histórias que ficam.”
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14">
          <div className="bg-ocean-950/80 rounded-2xl border border-white/10 p-6 shadow-xl">
            <span className="font-syne font-black text-3xl sm:text-4xl text-[#2EC4B6] block mb-1">
              +500
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
              ONDAS DROPADAS
            </span>
          </div>

          <div className="bg-ocean-950/80 rounded-2xl border border-white/10 p-6 shadow-xl">
            <span className="font-syne font-black text-3xl sm:text-4xl text-[#00F0FF] block mb-1">
              +12.000km
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
              ESTRADA & SWELLS
            </span>
          </div>

          <div className="bg-ocean-950/80 rounded-2xl border border-white/10 p-6 shadow-xl">
            <span className="font-syne font-black text-3xl sm:text-4xl text-pink-400 block mb-1">
              +3.1k
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
              FAMÍLIA NO INSTA
            </span>
          </div>

          <div className="bg-ocean-950/80 rounded-2xl border border-white/10 p-6 shadow-xl">
            <span className="font-syne font-black text-3xl sm:text-4xl text-amber-400 block mb-1">
              100%
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
              ESPÍRITO LIVRE
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="https://www.instagram.com/surflivre1/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(244,63,94,0.3)] hover:scale-105 transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>SEGUIR NO INSTAGRAM (@SURFLIVRE1)</span>
          </a>

          <a
            href="https://www.youtube.com/@surflivre_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:scale-105 transition-all"
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>INSCREVER NO YOUTUBE (@SURFLIVRE_)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
