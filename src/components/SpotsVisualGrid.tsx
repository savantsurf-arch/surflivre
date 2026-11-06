import React, { useState } from 'react';
import { Compass, Waves, Clock, Wind, ArrowRight, Play, Flame, ShieldAlert, Sparkles } from 'lucide-react';

interface SpotVisualCard {
  id: string;
  name: string;
  location: string;
  image: string;
  level: 'Casca Grossa' | 'Avançado' | 'Intermediário / Todos';
  levelColor: string;
  tide: string;
  bottom: string;
  swell: string;
  wind: string;
  waveType: string;
  description: string;
  videoId?: string;
}

const spotsList: SpotVisualCard[] = [
  {
    id: 'backdoor',
    name: 'Praia do Backdoor',
    location: 'Olivença • Ilhéus (BA)',
    image: '/spots/backdoor.jpg',
    level: 'Casca Grossa',
    levelColor: 'bg-red-500/90 text-white',
    tide: 'Seca e Enchendo',
    bottom: 'Laje rasa de pedra vulcânica',
    swell: 'Sul (180° a 200°)',
    wind: 'Terral Noroeste (NO)',
    waveType: 'Tubo oco, rápido e pesado na bancada rasa',
    description: 'O santuário dos tubos baianos e base do Surf Livre. Drop crítico rente às pedras expostas.',
    videoId: 'ksH4xyUWZ_A',
  },
  {
    id: 'batuba',
    name: 'Praia de Batuba',
    location: 'Olivença • Ilhéus (BA)',
    image: '/spots/batuba.jpg',
    level: 'Avançado',
    levelColor: 'bg-orange-500/90 text-white',
    tide: 'Meia maré para Seca',
    bottom: 'Fundo misto com pedras e canal profundo',
    swell: 'Sul / Sudeste (170° a 190°)',
    wind: 'Terral Oeste (O)',
    waveType: 'Massa d’água pesada, junções fortes e paredes cheias',
    description: 'Segura as maiores ressacas do litoral sul da Bahia. Pede remada forte e prancha com volume.',
    videoId: 'ywJZqaINhFI',
  },
  {
    id: 'pedra-cachorra',
    name: 'Pedra da Cachorra',
    location: 'Praia do Renascer • Ilhéus (BA)',
    image: '/spots/pedra_da_cachorra.jpg',
    level: 'Avançado',
    levelColor: 'bg-orange-500/90 text-white',
    tide: 'Secando para Baixa-mar',
    bottom: 'Laje de pedra e canal lateral',
    swell: 'Leste / Sudeste (110° a 140°)',
    wind: 'Terral ONO',
    waveType: 'Esquerdas e direitas rápidas que quebram rente à laje',
    description: 'Point clássico de campeonatos profissionais baianos com seções perfeitas para rasgadas e aéreos.',
    videoId: 'eu7cYP-lo88',
  },
  {
    id: 'prainha',
    name: 'Prainha de Olivença',
    location: 'Olivença • Ilhéus (BA)',
    image: '/spots/prainha.jpg',
    level: 'Intermediário / Todos',
    levelColor: 'bg-emerald-500/90 text-black font-bold',
    tide: 'Todas as marés',
    bottom: 'Bancada de areia compacta e valas',
    swell: 'Sudeste (130° a 160°)',
    wind: 'Terral Oeste',
    waveType: 'Paredes manobráveis, fáceis de ler e divertidas',
    description: 'Pico democrático com água morna cristalina e séries consistentes para treinar manobras de borda.',
    videoId: 'MCrnYx32vmc',
  },
  {
    id: 'tiririca',
    name: 'Praia da Tiririca',
    location: 'Itacaré • Costa do Cacau (BA)',
    image: '/spots/tiririca.jpg',
    level: 'Avançado',
    levelColor: 'bg-orange-500/90 text-white',
    tide: 'Todas as marés (melhor na seca)',
    bottom: 'Areia grossa com pedras nas extremidades',
    swell: 'Sudeste / Leste (120° a 150°)',
    wind: 'Terral Sudoeste (SO)',
    waveType: 'Ondas rápidas, cavadas e com rampa de aéreo o ano todo',
    description: 'A capital da alta performance do surf baiano com tubos e rampas constantes mesmo em dias pequenos.',
    videoId: 'xTDOQ-zUTI4',
  },
  {
    id: 'jeribucacu',
    name: 'Praia de Jeribucaçu',
    location: 'Itacaré • Costa do Cacau (BA)',
    image: '/spots/jeribucacu.jpg',
    level: 'Intermediário / Todos',
    levelColor: 'bg-emerald-500/90 text-black font-bold',
    tide: 'Baixa para Meia Maré',
    bottom: 'Areia da foz do rio e bancada de pedras',
    swell: 'Sul / Sudeste (160° a 180°)',
    wind: 'Terral Sudoeste protegido',
    waveType: 'Triângulos perfeitos que abrem para os dois lados na foz',
    description: 'Cenário de cinema onde o rio encontra o mar em meio à floresta nativa preservada.',
    videoId: 'W7BSUMoO76E',
  },
];

interface SpotsVisualGridProps {
  onPlaySpotVideo?: (videoId: string, title: string, location: string) => void;
}

export const SpotsVisualGrid: React.FC<SpotsVisualGridProps> = ({ onPlaySpotVideo }) => {
  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);

  return (
    <section id="picos" className="py-24 bg-[#010206] border-t border-white/5 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-[#00F0FF]" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 font-bold">
                GUIA VISUAL DE BANCADAS • COSTA DO CACAU
              </span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              ONDE A ONDA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF]">QUEBRA.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-xl uppercase tracking-wider mt-3">
              Fotos reais das bancadas de pedra e areia. Toque no card para ver o resumo técnico de maré, fundo e direção do vento.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Passe o mouse ou toque para ler a bancada</span>
          </div>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {spotsList.map((spot) => {
            const isHovered = activeSpotId === spot.id;

            return (
              <article
                key={spot.id}
                onMouseEnter={() => setActiveSpotId(spot.id)}
                onMouseLeave={() => setActiveSpotId(null)}
                onClick={() => setActiveSpotId(isHovered ? null : spot.id)}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] bg-black border border-white/15 hover:border-[#00F0FF] transition-all duration-500 shadow-2xl cursor-pointer"
              >
                {/* Background Photo */}
                <img
                  src={spot.image}
                  alt={`Foto real da ${spot.name} em ${spot.location}`}
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-75"
                />

                {/* Dark Contrast Vignette (WCAG AAA) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 group-hover:via-black/75 transition-colors duration-500" />

                {/* Top Header: Level Badge & Location */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-bold shadow-md ${spot.levelColor}`}>
                    {spot.level}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/80 border border-white/20 text-[10px] font-mono text-slate-300 backdrop-blur-md">
                    {spot.location.split('•')[0].trim()}
                  </span>
                </div>

                {/* Bottom Permanent Info (Title + Wave Summary) */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] font-mono tracking-widest text-[#00F0FF] font-bold uppercase block mb-1">
                    {spot.location}
                  </span>
                  <h3 className="font-syne font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-tight mb-2">
                    {spot.name}
                  </h3>

                  {/* Quick Preview Chips (Visible on Mobile / Resting) */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-slate-200 backdrop-blur-sm">
                      Maré: {spot.tide.split(' ')[0]}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-slate-200 backdrop-blur-sm">
                      {spot.bottom.split(' ')[0]}
                    </span>
                  </div>

                  {/* Expandable Technical Telemetry Layer (Revealed on Hover/Tap) */}
                  <div
                    className={`space-y-2 border-t border-white/15 pt-3 transition-all duration-500 overflow-hidden ${
                      isHovered ? 'max-h-96 opacity-100' : 'max-h-0 sm:max-h-0 opacity-0'
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                      <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md">
                        <span className="text-cyan-300 block text-[9px] uppercase font-bold">MELHOR MARÉ</span>
                        <span className="text-white font-bold">{spot.tide}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md">
                        <span className="text-cyan-300 block text-[9px] uppercase font-bold">FUNDO</span>
                        <span className="text-white font-bold truncate block">{spot.bottom}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md">
                        <span className="text-cyan-300 block text-[9px] uppercase font-bold">SWELL IDEAL</span>
                        <span className="text-white font-bold">{spot.swell}</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md">
                        <span className="text-cyan-300 block text-[9px] uppercase font-bold">VENTO FAVORÁVEL</span>
                        <span className="text-emerald-400 font-bold">{spot.wind}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                      {spot.waveType}
                    </p>

                    {spot.videoId && onPlaySpotVideo && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlaySpotVideo(spot.videoId!, spot.name, spot.location);
                        }}
                        className="w-full mt-2 py-2.5 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(46,196,182,0.6)] transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-ocean-950" />
                        <span>ASSISTIR SESSÃO NESTE PICO</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
