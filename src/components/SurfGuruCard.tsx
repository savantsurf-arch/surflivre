'use client';

import React, { useState } from 'react';
import { Waves, Wind, Clock, ExternalLink, Compass, ShieldCheck, Flame } from 'lucide-react';

export interface SpotCondition {
  id: 'olivenca' | 'ilheus' | 'itacare';
  name: string;
  badge: string;
  surfguruUrl: string;
  wave: {
    height: string;
    period: string;
    direction: string;
  };
  wind: {
    speed: string;
    direction: string;
    status: string;
  };
  tide: {
    state: string;
    nextTide: string;
    bestTide: string;
  };
  energy: string;
}

const spotsData: SpotCondition[] = [
  {
    id: 'olivenca',
    name: 'Olivença (Backdoor)',
    badge: 'CLÁSSICO! 🔥🔥🔥',
    surfguruUrl: 'https://www.surfguru.com.br/previsao-do-surf/bahia/ilheus/',
    wave: {
      height: '1.5m a 2.0m',
      period: '13s',
      direction: 'Sul (195°)',
    },
    wind: {
      speed: '5 kts',
      direction: 'Terral NO',
      status: 'Noroeste Perfeito',
    },
    tide: {
      state: 'Seca e Enchendo',
      nextTide: 'Cheia às 13h40',
      bestTide: 'Seca (Laje Exposta)',
    },
    energy: '1.480 kJ',
  },
  {
    id: 'ilheus',
    name: 'Ilhéus (Batuba)',
    badge: 'ALTAS ONDAS ⭐⭐⭐⭐',
    surfguruUrl: 'https://www.surfguru.com.br/previsao-do-surf/bahia/ilheus/',
    wave: {
      height: '1.8m a 2.5m',
      period: '14s',
      direction: 'Sul / Sudeste (180°)',
    },
    wind: {
      speed: '7 kts',
      direction: 'Terral Oeste',
      status: 'Suave de Terra',
    },
    tide: {
      state: 'Meia Maré',
      nextTide: 'Baixa-mar às 19h10',
      bestTide: 'Meia Maré p/ Seca',
    },
    energy: '1.820 kJ',
  },
  {
    id: 'itacare',
    name: 'Itacaré (Tiririca)',
    badge: 'BOAS VALAS ⭐⭐⭐',
    surfguruUrl: 'https://www.surfguru.com.br/previsao-do-surf/bahia/itacare/',
    wave: {
      height: '1.2m a 1.6m',
      period: '11s',
      direction: 'Sudeste (145°)',
    },
    wind: {
      speed: '6 kts',
      direction: 'Terral Sudoeste',
      status: 'Terral Protegido',
    },
    tide: {
      state: 'Secando',
      nextTide: 'Seca às 08h20',
      bestTide: 'Todas as Marés',
    },
    energy: '1.150 kJ',
  },
];

export interface SurfGuruCardProps {
  lastVerified?: string;
  className?: string;
}

export const SurfGuruCard: React.FC<SurfGuruCardProps> = ({
  lastVerified = 'Hoje às 07:30',
  className = '',
}) => {
  const [selectedSpotId, setSelectedSpotId] = useState<string>('olivenca');

  const currentSpot = spotsData.find((s) => s.id === selectedSpotId) || spotsData[0];

  return (
    <article
      aria-label={`Resumo do mar em ${currentSpot.name} via SurfGuru`}
      className={`relative w-full max-w-2xl mx-auto rounded-3xl bg-gray-900/80 border border-cyan-500/30 backdrop-blur-md p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.7)] text-slate-100 overflow-hidden ${className}`}
    >
      {/* Brilho Atmosférico Interno */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header: Título & Logo Marca do Portal */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-cyan-400 font-bold">
              GATEWAY CARD • TELEMETRIA OFICIAL
            </span>
          </div>
          <h3 className="font-syne font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
            CONDIÇÕES DO MAR • SURFGURU
          </h3>
        </div>

        {/* Badge da Condição */}
        <div className="self-start sm:self-auto">
          <span className="px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-[11px] font-mono font-bold text-cyan-300 uppercase flex items-center gap-1.5 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
            {currentSpot.badge}
          </span>
        </div>
      </div>

      {/* Abas / Botões de Navegação por Picos (Mobile-First) */}
      <div className="mb-6">
        <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2 font-bold">
          SELECIONE O PICO:
        </label>
        <div className="grid grid-cols-3 gap-2 p-1 rounded-2xl bg-black/50 border border-white/10">
          {spotsData.map((spot) => {
            const isSelected = spot.id === currentSpot.id;

            return (
              <button
                key={spot.id}
                type="button"
                onClick={() => setSelectedSpotId(spot.id)}
                aria-pressed={isSelected}
                aria-label={`Ver previsão do mar em ${spot.name}`}
                className={`py-2 px-2 sm:px-3 rounded-xl text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer text-center truncate ${
                  isSelected
                    ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {spot.name.split('(')[0].trim()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de 3 Métricas Principais (Onda, Vento, Maré) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
        
        {/* Métrica 1: Onda & Tamanho */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Waves className="w-4 h-4 text-cyan-400 stroke-[2.5]" />
              <strong>ONDA</strong>
            </span>
            <span className="text-[10px] text-slate-400">{currentSpot.wave.period}</span>
          </div>
          <div className="font-syne font-black text-2xl text-white tracking-tight">
            {currentSpot.wave.height}
          </div>
          <div className="text-[11px] font-mono text-slate-400 mt-1 truncate" title={currentSpot.wave.direction}>
            Swell: {currentSpot.wave.direction}
          </div>
        </div>

        {/* Métrica 2: Vento */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Wind className="w-4 h-4 text-cyan-400" />
              <strong>VENTO</strong>
            </span>
            <span className="text-[10px] text-emerald-400 font-bold">TERRAL</span>
          </div>
          <div className="font-syne font-black text-2xl text-white tracking-tight">
            {currentSpot.wind.speed}
          </div>
          <div className="text-[11px] font-mono text-slate-400 mt-1 truncate" title={currentSpot.wind.direction}>
            {currentSpot.wind.direction}
          </div>
        </div>

        {/* Métrica 3: Maré */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-1.5">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              <strong>MARÉ</strong>
            </span>
            <span className="text-[10px] text-yellow-300 font-bold">IDEAL</span>
          </div>
          <div className="font-syne font-black text-lg text-white leading-tight">
            {currentSpot.tide.state}
          </div>
          <div className="text-[11px] font-mono text-slate-400 mt-1 truncate" title={currentSpot.tide.nextTide}>
            {currentSpot.tide.nextTide}
          </div>
        </div>

      </div>

      {/* Call to Action (CTA) Principal de Alto Contraste */}
      <a
        href={currentSpot.surfguruUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir previsão completa de ${currentSpot.name} no site do SurfGuru em nova aba`}
        className="w-full min-h-[52px] py-4 px-6 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-syne font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
      >
        <span>VER PREVISÃO COMPLETA NO SURFGURU</span>
        <ExternalLink className="w-4 h-4 text-black stroke-[2.5]" />
      </a>

      {/* Carimbo de Tempo no Rodapé */}
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Última verificação manual: {lastVerified} (via SurfGuru)</span>
        </div>
        <div className="flex items-center gap-1 text-slate-500 text-[10px]">
          <ShieldCheck className="w-3 h-3 text-cyan-400" />
          <span>Energia do Swell: <strong className="text-slate-300">{currentSpot.energy}</strong></span>
        </div>
      </div>
    </article>
  );
};
