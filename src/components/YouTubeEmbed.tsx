'use client';

import React, { useState } from 'react';

export interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  location?: string;
  className?: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  videoId,
  title,
  location,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Fallback para hqdefault caso maxresdefault não esteja disponível
  const thumbnailUrl = imgError
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-black/90 border border-white/10 shadow-2xl group ${className}`}
    >
      {!isPlaying ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
          aria-label={`Reproduzir vídeo: ${title}`}
        >
          {/* Thumbnail Imagem Otimizada (Facade) */}
          <img
            src={thumbnailUrl}
            alt={title}
            onError={() => setImgError(true)}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
          />

          {/* Gradiente Escuro de Contraste */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 group-hover:opacity-60 transition-opacity" />

          {/* Localização Badge */}
          {location && (
            <div className="absolute top-3 left-3 z-10 pointer-events-none">
              <span className="px-2.5 py-1 rounded-full bg-black/85 border border-cyan-400/40 text-[10px] font-mono tracking-widest text-cyan-300 backdrop-blur-md uppercase font-bold">
                {location}
              </span>
            </div>
          )}

          {/* Botão de Play SVG Customizado */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#2EC4B6] to-[#00F0FF] text-[#030712] flex items-center justify-center shadow-[0_0_35px_rgba(46,196,182,0.8)] transform scale-90 group-hover:scale-110 transition-transform duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 ml-1"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Título Sobreposto */}
          <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
            <h4 className="text-white font-syne font-bold text-sm sm:text-base line-clamp-1 drop-shadow-md">
              {title}
            </h4>
          </div>
        </button>
      ) : (
        /* Iframe Injetado Sob Demanda (Zero Impacto no LCP Inicial) */
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      )}
    </div>
  );
};
