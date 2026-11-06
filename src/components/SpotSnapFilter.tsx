'use client';

import React, { useState } from 'react';
import { Compass } from 'lucide-react';

export interface SpotOption {
  id: string;
  name: string;
  tag?: string;
}

export const defaultSpotFilters: SpotOption[] = [
  { id: 'TODOS', name: 'TODAS AS BANCADAS', tag: 'GERAL' },
  { id: 'backdoor', name: 'Praia do Backdoor', tag: 'Tubos' },
  { id: 'batuba', name: 'Praia de Batuba', tag: 'Volume' },
  { id: 'pedra-cachorra', name: 'Pedra da Cachorra', tag: 'Laje' },
  { id: 'prainha', name: 'Prainha de Olivença', tag: 'Manobras' },
  { id: 'tiririca', name: 'Praia da Tiririca', tag: 'Altas' },
  { id: 'jeribucacu', name: 'Praia de Jeribucaçu', tag: 'Foz' },
  { id: 'engenhoca', name: 'Praia da Engenhoca', tag: 'Longas' },
];

export interface SpotSnapFilterProps {
  spots?: SpotOption[];
  activeSpot?: string;
  onSelectSpot?: (id: string) => void;
  className?: string;
}

export const SpotSnapFilter: React.FC<SpotSnapFilterProps> = ({
  spots = defaultSpotFilters,
  activeSpot = 'TODOS',
  onSelectSpot,
  className = '',
}) => {
  const [selected, setSelected] = useState(activeSpot);

  const handleClick = (id: string) => {
    setSelected(id);
    onSelectSpot?.(id);
  };

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* Container com Snap Scroll Suave e Padding de Foco/Sombra */}
      <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-hide -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="hidden sm:flex items-center gap-1.5 text-slate-400 text-xs font-mono shrink-0 mr-1 font-bold">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>PICOS:</span>
        </div>

        {spots.map((spot) => {
          const isActive = selected === spot.id;

          return (
            <button
              key={spot.id}
              type="button"
              onClick={() => handleClick(spot.id)}
              aria-pressed={isActive}
              className={`snap-center whitespace-nowrap flex-shrink-0 min-h-[44px] px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer border select-none ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-400 to-[#2EC4B6] text-black border-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.45)] scale-[1.02]'
                  : 'bg-black/60 border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40 hover:bg-white/5 active:scale-95'
              }`}
            >
              <span>{spot.name}</span>
              {spot.tag && (
                <span
                  className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-cyan-300'
                  }`}
                >
                  {spot.tag}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
