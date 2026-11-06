import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
}) => {
  const sizeClasses = {
    sm: {
      img: 'h-7 w-auto',
      container: 'gap-2',
      tagline: 'text-[8px]',
    },
    md: {
      img: 'h-9 md:h-10 w-auto',
      container: 'gap-2.5',
      tagline: 'text-[9px]',
    },
    lg: {
      img: 'h-14 md:h-16 w-auto',
      container: 'gap-3',
      tagline: 'text-[11px]',
    },
    xl: {
      img: 'h-24 md:h-32 w-auto',
      container: 'gap-4',
      tagline: 'text-xs',
    },
  }[size];

  return (
    <div className={`inline-flex items-center ${sizeClasses.container} group cursor-pointer select-none ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Glow behind the logo */}
        <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full group-hover:bg-cyan-400/40 transition-all duration-300" />
        
        {/* Transparent HD Logo without white background */}
        <img
          src="/surflivre_logo_hd.png"
          alt="SURF LIVRE"
          className={`${sizeClasses.img} relative z-10 object-contain drop-shadow-[0_0_15px_rgba(46,196,182,0.6)] group-hover:scale-105 transition-transform duration-300`}
        />
      </div>

      {showTagline && (
        <div className="hidden sm:flex flex-col text-left border-l border-white/15 pl-2.5">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-cyan-300/80 font-bold">
            CANAL DE SURF
          </span>
          <span className={`font-mono tracking-[0.2em] uppercase text-slate-400 ${sizeClasses.tagline}`}>
            VIVA O MAR • VIVA A SESSÃO
          </span>
        </div>
      )}
    </div>
  );
};
