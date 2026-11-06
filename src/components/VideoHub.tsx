import React, { useState } from 'react';
import { Play, Clock, Eye, ExternalLink } from 'lucide-react';
import { YoutubeIcon } from './SocialIcons';

import { realVideos } from '../data/realVideos';
import type { VideoSession } from '../data/realVideos';

interface VideoHubProps {
  onSelectVideo: (video: VideoSession) => void;
}

export const VideoHub: React.FC<VideoHubProps> = ({ onSelectVideo }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const categories = ['TODOS', 'BACKDOOR SLABS', 'OLIVENÇA & BAHIA', 'HISTÓRIAS & RESENHA', 'SWELL CLÁSSICO'];

  const filteredVideos = selectedCategory === 'TODOS'
    ? realVideos
    : realVideos.filter(v => v.category === selectedCategory);

  const displayedVideos = filteredVideos.slice(0, visibleCount);

  return (
    <section id="videos" className="relative py-28 bg-[#02050e] border-t border-white/5">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <YoutubeIcon className="w-5 h-5 text-red-500" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
                CANAL OFICIAL • @SURFLIVRE_
              </span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              ÚLTIMAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-sky-400">SESSÕES.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-xl uppercase tracking-wider mt-3">
              Vídeos 100% reais do canal Surf Livre gravados nas bancadas de Olivença e Ilhéus. Clique para assistir em tela cheia no Modo Cinema.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@surflivre_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-600/20 border border-red-500/40 text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-red-600/30 hover:border-red-500 transition-all self-start md:self-auto group shadow-lg"
          >
            <span>VER TODOS NO YOUTUBE (@SURFLIVRE_)</span>
            <ExternalLink className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-bold shadow-[0_0_15px_rgba(46,196,182,0.4)]'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cinematic Grid of Real Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onSelectVideo(video)}
              className="group relative rounded-3xl overflow-hidden bg-ocean-950 border border-white/10 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer shadow-2xl flex flex-col hover:shadow-[0_15px_40px_rgba(46,196,182,0.2)]"
            >
              {/* Thumbnail Container (16:9 widescreen) */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-108 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-black/30 to-black/40 group-hover:opacity-40 transition-opacity" />

                {/* Duration & Category Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 border border-white/20 text-[10px] font-mono tracking-widest text-cyan-300 backdrop-blur-md">
                    {video.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono tracking-wider text-white flex items-center gap-1 backdrop-blur-md">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {video.duration}
                  </span>
                </div>

                {/* Big Center PLAY Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2EC4B6] text-ocean-950 flex items-center justify-center transform scale-90 group-hover:scale-110 transition-all duration-300 shadow-[0_0_25px_rgba(46,196,182,0.8)]">
                    <Play className="w-6 h-6 fill-ocean-950 ml-0.5" />
                  </div>
                </div>

                {/* Cinema Mode Hover Prompt */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase bg-black/90 px-2.5 py-1 rounded-full border border-cyan-400/50">
                    MODO CINEMA ⤢
                  </span>
                </div>
              </div>

              {/* Video Info Block */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400/90 mb-2">
                    <span>{video.location}</span>
                    <span>•</span>
                    <span className="text-slate-400">{video.timeAgo}</span>
                  </div>
                  <h3 className="font-syne font-bold text-lg uppercase tracking-tight text-white group-hover:text-cyan-200 transition-colors leading-snug mb-3 line-clamp-2">
                    {video.title}
                  </h3>
                </div>

                <div className="pt-3 mt-auto border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{video.views}</span>
                  </div>
                  <span className="text-[#2EC4B6] font-bold group-hover:underline">
                    ASSISTIR SESSÃO →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredVideos.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-4 rounded-full bg-ocean-900 border border-cyan-400/40 text-white font-syne font-bold text-xs uppercase tracking-wider hover:bg-cyan-950/80 hover:border-cyan-300 transition-all shadow-xl cursor-pointer"
            >
              CARREGAR MAIS SESSÕES (+6 DE {filteredVideos.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
