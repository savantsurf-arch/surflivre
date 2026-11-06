import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { VideoSession } from '../data/realVideos';
import { Logo } from './Logo';
import { YoutubeIcon } from './SocialIcons';

interface CinemaModalProps {
  video: VideoSession | null;
  onClose: () => void;
}

export const CinemaModal: React.FC<CinemaModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (video) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in zoom-in-95 duration-300">
      {/* Ambient Ocean Glow in Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Cinema Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4">
          <Logo size="sm" variant="full" />
          <div className="hidden sm:flex items-center gap-2 border-l border-white/20 pl-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-slate-300 uppercase">
              MODO CINEMA • 2.39:1 SURF FILM
            </span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-red-500 text-white font-mono text-xs uppercase tracking-widest transition-all border border-white/20 hover:border-red-500 shadow-xl"
        >
          <X className="w-4 h-4" />
          <span>FECHAR [ESC]</span>
        </button>
      </div>

      {/* Center Cinema Screen Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto my-auto py-4 flex flex-col items-center">
        {/* Cinema Video Frame */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border-2 border-white/15 shadow-[0_0_80px_rgba(46,196,182,0.35)]">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom Film Details bar */}
        <div className="w-full mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-1">
              <span>{video.category}</span>
              <span>•</span>
              <span>{video.location}</span>
              <span>•</span>
              <span className="text-slate-400">{video.duration}</span>
            </div>
            <h2 className="font-syne font-black text-xl sm:text-2xl uppercase tracking-tight text-white">
              {video.title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-syne font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>YOUTUBE</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Subtitle / Brand Watermark */}
      <div className="relative z-10 text-center py-2 border-t border-white/5 max-w-7xl mx-auto w-full">
        <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-slate-500">
          SURF LIVRE • PRODUÇÕES INDEPENDENTES • OLIVENÇA - BAHIA
        </span>
      </div>
    </div>
  );
};
