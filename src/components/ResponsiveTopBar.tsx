'use client';

import React from 'react';

export interface ResponsiveTopBarProps {
  location?: string;
  swell?: string;
  wind?: string;
  coordinates?: string;
  status?: string;
  className?: string;
}

export const ResponsiveTopBar: React.FC<ResponsiveTopBarProps> = ({
  location = 'OLIVENÇA, BA',
  swell = '1.8M',
  wind = 'TERRAL 🌬️',
  coordinates = "OLIVENÇA • ILHÉUS • BAHIA • 14°57'S 39°01'W",
  status = 'SWELL MONITORADO AO VIVO',
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center px-4 py-2 rounded-full bg-black/70 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.25)] select-none ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-[#2EC4B6] animate-ping mr-2.5 shrink-0" />

      {/* Versão Mobile Curta e Impactante (md:hidden) */}
      <span className="block md:hidden text-[11px] font-mono font-bold tracking-wider text-cyan-300 uppercase whitespace-nowrap">
        📍 {location} • SWELL {swell} • {wind}
      </span>

      {/* Versão Desktop Completa com Coordenadas (hidden md:flex) */}
      <div className="hidden md:flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase whitespace-nowrap">
        <span>{coordinates}</span>
        <span className="text-white/30">•</span>
        <span className="text-emerald-400 font-bold">{status}</span>
      </div>
    </div>
  );
};
