import React, { useState } from 'react';
import { Waves, Wind, Compass, ExternalLink, Activity } from 'lucide-react';

export interface CoastalRadarWidgetProps {
  className?: string;
}

export const CoastalRadarWidget: React.FC<CoastalRadarWidgetProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<'windy' | 'telemetria'>('windy');

  return (
    <div className={`w-full rounded-3xl overflow-hidden bg-[#040914] border border-cyan-500/30 shadow-2xl ${className}`}>
      {/* Barra de Título do Widget */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-white/10 gap-3 bg-ocean-950/80">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2EC4B6] animate-ping" />
          <div>
            <h4 className="text-white font-syne font-black text-sm uppercase tracking-wide flex items-center gap-2">
              RADAR DE ONDAS & VENTO AO VIVO • OLIVENÇA / ILHÉUS
            </h4>
            <span className="text-[10px] font-mono text-cyan-300">
              Coordenadas: 14°57'S 39°01'W • Modelo ECMWF / WaveWatch III
            </span>
          </div>
        </div>

        {/* Links Externos Oficiais */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.surf-forecast.com/breaks/Olivenca"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 hover:bg-white/10 transition-colors"
          >
            <span>SURF-FORECAST</span>
            <ExternalLink className="w-3 h-3 text-cyan-400" />
          </a>

          <a
            href="https://surfguru.com.br/previsao/brasil/bahia/ilheus/praia-do-backdoor"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-[#2EC4B6]/20 border border-[#2EC4B6]/40 text-cyan-200 hover:text-white text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#2EC4B6]/30 transition-colors"
          >
            <span>SURFGURU</span>
            <ExternalLink className="w-3 h-3 text-[#2EC4B6]" />
          </a>
        </div>
      </div>

      {/* Container do Iframe Windy (Ondas em Tempo Real em Olivença) */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[380px] bg-black">
        <iframe
          src="https://embed.windy.com/embed2.html?lat=-14.956&lon=-39.006&detailLat=-14.956&detailLon=-39.006&width=650&height=450&zoom=10&level=surface&overlay=waves&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=true&metricWind=kt&metricTemp=%C2%B0C&radarRange=-1"
          title="Previsão de Ondas e Vento em Tempo Real - Olivença, Ilhéus Bahia"
          width="100%"
          height="100%"
          loading="lazy"
          className="w-full h-full border-0"
        />
      </div>

      {/* Legenda de Telemetria Rápida no Rodapé */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-black/60 border-t border-white/10 text-center font-mono text-[11px]">
        <div className="p-2 rounded-xl bg-white/5">
          <span className="text-slate-400 block text-[9px] uppercase">Pico Base</span>
          <strong className="text-white">Backdoor / Batuba</strong>
        </div>
        <div className="p-2 rounded-xl bg-white/5">
          <span className="text-slate-400 block text-[9px] uppercase">Ondulação Ideal</span>
          <strong className="text-cyan-300">Sul (180° a 200°)</strong>
        </div>
        <div className="p-2 rounded-xl bg-white/5">
          <span className="text-slate-400 block text-[9px] uppercase">Vento Favorável</span>
          <strong className="text-emerald-400">Terral NO / Oeste</strong>
        </div>
        <div className="p-2 rounded-xl bg-white/5">
          <span className="text-slate-400 block text-[9px] uppercase">Maré de Tubo</span>
          <strong className="text-yellow-300">Seca e Enchendo</strong>
        </div>
      </div>
    </div>
  );
};
