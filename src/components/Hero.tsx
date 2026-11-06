import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onEnterWave: () => void;
  onWatchVideos: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnterWave, onWatchVideos }) => {
  return (
    <section className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover scale-105 animate-[float_16s_ease-in-out_infinite_alternate]"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-wave-breaking-in-the-ocean-1240-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-surfer-riding-inside-a-wave-barrel-40748-large.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(46,196,182,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
      </div>

      {/* Main Center Stage */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center pt-16 sm:pt-20">
        {/* Surf Station Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-cyan-400/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(46,196,182,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#2EC4B6] animate-ping" />
          <span className="text-[11px] sm:text-xs font-mono tracking-widest text-cyan-300 uppercase">
            OLIVENÇA • ILHÉUS • BAHIA • 14°57'S 39°01'W
          </span>
          <span className="hidden md:inline-block text-white/30">•</span>
          <span className="hidden md:inline-block text-[11px] font-mono text-slate-300">
            SWELL SUL 1.8M • TERRAL
          </span>
        </div>

        {/* Centerpiece: Official Transparent Surflivre Logo (in place of Image 2) */}
        <div className="relative mb-6 group flex flex-col items-center">
          {/* Ambient turquoise back-light glow */}
          <div className="absolute inset-0 bg-cyan-400/25 blur-3xl rounded-full scale-110 pointer-events-none group-hover:bg-cyan-400/40 transition-all duration-700" />

          {/* Official Transparent Logo Image in HD */}
          <div className="relative w-64 sm:w-80 md:w-[420px] lg:w-[480px] max-w-full drop-shadow-[0_0_45px_rgba(46,196,182,0.7)] transform group-hover:scale-105 transition-transform duration-500">
            <img
              src="/surflivre_logo_hd.png"
              alt="SURF LIVRE Oficial"
              className="w-full h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
            />
          </div>

          {/* Atmospheric Water Shimmer Bar */}
          <div className="w-48 sm:w-64 h-2 bg-gradient-to-r from-transparent via-[#2EC4B6] to-transparent rounded-full blur-xs mt-3 animate-pulse opacity-80" />
        </div>

        {/* Tagline */}
        <p className="font-mono text-base sm:text-xl md:text-2xl text-slate-200 tracking-[0.25em] uppercase max-w-2xl mx-auto mb-10 font-bold drop-shadow-md">
          “VIVA O MAR. VIVA A SESSÃO.”
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center">
          <button
            onClick={onEnterWave}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:shadow-[0_0_35px_rgba(46,196,182,0.7)] transition-all transform hover:-translate-y-0.5 active:scale-95 group cursor-pointer"
          >
            <span>ENTRAR NA ONDA</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={onWatchVideos}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 border border-white/20 text-white font-syne font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-md transition-all transform hover:-translate-y-0.5 group shadow-lg cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/40 transition-colors">
              <Play className="w-3.5 h-3.5 text-cyan-300 fill-cyan-300 ml-0.5" />
            </div>
            <span>ASSISTIR AOS VÍDEOS</span>
          </button>
        </div>
      </div>

      {/* Wave Immersion Scroll Prompt */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
        <button
          onClick={onEnterWave}
          className="pointer-events-auto flex flex-col items-center gap-2 text-cyan-300/80 hover:text-cyan-200 transition-colors group cursor-pointer"
        >
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase">
            ↓ ROLE PARA ENTRAR NO MAR
          </span>
          <div className="w-6 h-10 rounded-full border border-cyan-400/40 flex items-start justify-center p-1.5 group-hover:border-cyan-300">
            <span className="w-1.5 h-2.5 bg-[#2EC4B6] rounded-full animate-bounce" />
          </div>
        </button>
      </div>

      {/* Wave Mask Transition Bottom Curtain */}
      <div className="absolute -bottom-1 left-0 right-0 h-24 pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-fill text-[#030712]"
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
