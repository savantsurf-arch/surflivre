import React from 'react';
import { Play, Waves, Sparkles, ArrowDown } from 'lucide-react';

interface HeroProps {
  onEnterWave: () => void;
  onWatchVideos: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnterWave, onWatchVideos }) => {
  return (
    <section id="inicio" className="relative w-full h-[100svh] min-h-[660px] flex items-center justify-center overflow-hidden">
      {/* Background Hero Surfer Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_surfer.jpg"
          alt="Surfista em ação manobrando na onda em Olivença - Surf Livre"
          className="w-full h-full object-cover object-center scale-105 animate-[float_20s_ease-in-out_infinite_alternate]"
          loading="eager"
        />

        {/* Triple Dark Contrast Overlay (ensuring high WCAG contrast) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#010206] via-[#010206]/55 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/25 via-transparent to-black/85" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(46,196,182,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
      </div>

      {/* Main Center Stage */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-16 sm:pt-20">
        
        {/* Surf Telemetry Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-cyan-400/40 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(46,196,182,0.25)]">
          <span className="w-2 h-2 rounded-full bg-[#2EC4B6] animate-ping" />
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase">
            OLIVENÇA • ILHÉUS • BAHIA • 14°57'S 39°01'W
          </span>
          <span className="hidden md:inline-block text-white/30">•</span>
          <span className="hidden md:inline-block text-[10px] sm:text-xs font-mono text-emerald-400 font-bold">
            SWELL MONITORADO AO VIVO
          </span>
        </div>

        {/* Centerpiece: Official Transparent Surflivre Logo */}
        <div className="relative mb-5 group flex flex-col items-center">
          {/* Ambient turquoise back-light glow */}
          <div className="absolute inset-0 bg-cyan-400/25 blur-3xl rounded-full scale-110 pointer-events-none group-hover:bg-cyan-400/40 transition-all duration-700" />

          {/* Official Transparent Logo Image in HD with descriptive ALT */}
          <div className="relative w-64 sm:w-80 md:w-[420px] lg:w-[480px] max-w-full drop-shadow-[0_0_45px_rgba(46,196,182,0.7)] transform group-hover:scale-105 transition-transform duration-500">
            <img
              src="/surflivre_logo_hd.png"
              alt="Logo oficial da Surf Livre - Marca e canal de surf em Olivença, Ilhéus Bahia"
              className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Atmospheric Water Shimmer Bar */}
          <div className="w-48 sm:w-64 h-2 bg-gradient-to-r from-transparent via-[#2EC4B6] to-transparent rounded-full blur-xs mt-3 animate-pulse opacity-80" />
        </div>

        {/* Tagline */}
        <h1 className="font-mono text-sm sm:text-lg md:text-xl text-slate-200 tracking-[0.25em] uppercase max-w-2xl mx-auto mb-8 font-bold drop-shadow-md">
          “VIVA O MAR. VIVA A SESSÃO.”
        </h1>

        {/* Hierarchy of CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto justify-center mb-4">
          
          {/* Primary CTA: Check Wave Conditions (Electric Turquoise Gradient) */}
          <a
            href="#destinos"
            className="px-7 py-4 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_35px_rgba(46,196,182,0.6)] hover:shadow-[0_0_50px_rgba(46,196,182,0.9)] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <Waves className="w-4 h-4 text-ocean-950 stroke-[2.5]" />
            <span>VER CONDIÇÕES DO MAR HOJE</span>
          </a>

          {/* Secondary CTA: Discover Intense Wax (Golden Amber Accent) */}
          <a
            href="#parceiros"
            className="px-7 py-4 rounded-full bg-black/60 border border-yellow-400/50 hover:border-yellow-400 text-yellow-300 font-syne font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 backdrop-blur-md shadow-lg hover:bg-yellow-400/10 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>CONHECER A PARAFINA</span>
          </a>

          {/* Tertiary Action: Watch Videos */}
          <button
            onClick={onWatchVideos}
            className="px-5 py-4 rounded-full bg-white/5 border border-white/15 hover:border-cyan-400/50 text-slate-200 hover:text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 backdrop-blur-md transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>VÍDEOS</span>
          </button>
        </div>
      </div>

      {/* Wave Immersion Scroll Prompt */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
        <a
          href="#videos"
          className="pointer-events-auto flex flex-col items-center gap-2 text-cyan-300/80 hover:text-cyan-200 transition-colors group cursor-pointer"
          aria-label="Rolar para os vídeos da sessão"
        >
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase flex items-center gap-1">
            <ArrowDown className="w-3 h-3 text-cyan-400 animate-bounce" />
            ROLE PARA ENTRAR NO MAR
          </span>
          <div className="w-5 h-9 rounded-full border border-cyan-400/40 flex items-start justify-center p-1 group-hover:border-cyan-300">
            <span className="w-1 h-2 bg-[#2EC4B6] rounded-full animate-bounce" />
          </div>
        </a>
      </div>

      {/* Bottom Wave Transition Mask */}
      <div className="absolute -bottom-1 left-0 right-0 h-20 pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-fill text-[#02050e]"
        >
          <path
            d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,90.7C1248,85,1344,43,1392,21.3L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};
