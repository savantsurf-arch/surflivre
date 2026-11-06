import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'SURF LIVRE',
    'VIVA O MAR. VIVA A SESSÃO.',
    'PRAIA DO BACKDOOR',
    'OLIVENÇA - ILHÉUS - BAHIA',
    'TUBOS PESADOS',
    'PRAINHA DE OLIVENÇA',
    'FREE SURF CULTURE',
    'ALDENEY AQUINO',
    'ROAD TRIPS',
    'SAL NA PELE',
    'NO RULES JUST WAVES',
    'SWELL DE SUL',
  ];

  return (
    <div className="relative w-full py-4 bg-gradient-to-r from-ocean-950 via-ocean-900 to-ocean-950 border-y border-cyan-500/20 overflow-hidden select-none">
      {/* Side fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="font-syne font-black text-sm md:text-base tracking-[0.25em] text-slate-300 uppercase whitespace-nowrap hover:text-[#2EC4B6] transition-colors">
              {text}
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#2EC4B6] shadow-[0_0_8px_#2EC4B6]" />
          </div>
        ))}
      </div>
    </div>
  );
};
