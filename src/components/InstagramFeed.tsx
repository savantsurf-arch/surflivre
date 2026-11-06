import React, { useState } from 'react';
import { Heart, MessageCircle, ExternalLink, Play, Film, Image, Layers, X } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { instagramRealPosts } from '../data/instagram_posts';
import type { InstagramPost } from '../data/instagram_posts';

export const InstagramFeed: React.FC = () => {
  const [activeEmbed, setActiveEmbed] = useState<InstagramPost | null>(null);

  return (
    <section id="instagram" className="relative py-28 bg-[#030712] overflow-hidden border-t border-white/5">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <InstagramIcon className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-pink-400 font-bold">
                MURAL OFICIAL • @SURFLIVRE1
              </span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              VIDA FORA DA ÁGUA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300">
                TAMBÉM É SURF.
              </span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-xl uppercase tracking-wider mt-3">
              Fotos e Reels reais postados por Aldenei Aquino no Instagram oficial @surflivre1. Clique para ver ou interagir.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/surflivre1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white font-syne font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all group shadow-[0_0_25px_rgba(236,72,153,0.4)] cursor-pointer"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>SEGUIR @SURFLIVRE1 NO INSTA</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 6 Real Instagram Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramRealPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveEmbed(post)}
              className="group relative rounded-3xl overflow-hidden bg-ocean-950 border border-white/10 hover:border-pink-500/60 transition-all duration-500 shadow-xl block cursor-pointer aspect-[4/5]"
            >
              {/* Genuine Cover Image */}
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/30 group-hover:via-black/40 transition-all duration-300" />

              {/* Top Bar: Profile Badge + Post Format */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/75 border border-white/15 backdrop-blur-md">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5">
                    <img src="/surflivre_logo_transparent.png" alt="Avatar" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-white tracking-wider">
                    @surflivre1
                  </span>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-black/75 border border-white/15 backdrop-blur-md flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 tracking-wider uppercase">
                  {post.type === 'reel' && <Film className="w-3 h-3 text-pink-400" />}
                  {post.type === 'foto' && <Image className="w-3 h-3 text-cyan-300" />}
                  {post.type === 'carrossel' && <Layers className="w-3 h-3 text-yellow-300" />}
                  <span>{post.type}</span>
                </div>
              </div>

              {/* Play Badge on Center */}
              {post.type === 'reel' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 to-rose-600 text-white flex items-center justify-center transform scale-90 group-hover:scale-115 transition-all duration-300 shadow-[0_0_25px_rgba(236,72,153,0.7)]">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
              )}

              {/* Bottom Caption & Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end">
                <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase block mb-1">
                  {post.location}
                </span>

                <p className="font-sans text-xs sm:text-sm text-slate-100 font-medium mb-3 line-clamp-2 leading-relaxed group-hover:line-clamp-3 transition-all">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-cyan-300" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  <span className="text-pink-400 font-bold group-hover:text-pink-300 group-hover:underline flex items-center gap-1">
                    <span>VER POST</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link to Reels */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/surflivre1/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-pink-500/30 text-slate-200 font-syne font-bold text-xs uppercase tracking-wider hover:bg-pink-500/10 hover:border-pink-500 hover:text-white transition-all shadow-lg"
          >
            <span>EXPLORAR TODOS OS REELS NO PERFIL @SURFLIVRE1</span>
            <ExternalLink className="w-4 h-4 text-pink-400" />
          </a>
        </div>
      </div>

      {/* Interactive Modal to view official Instagram Embed or open directly */}
      {activeEmbed && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveEmbed(null)}
        >
          <div
            className="relative w-full max-w-md bg-ocean-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-5 h-5 text-pink-400" />
                <span className="font-syne font-bold text-sm text-white">
                  POST OFICIAL @SURFLIVRE1
                </span>
              </div>
              <button
                onClick={() => setActiveEmbed(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-white/10">
              <img
                src={activeEmbed.image}
                alt={activeEmbed.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-[11px] font-mono text-cyan-300 mb-1">{activeEmbed.location}</span>
                <p className="font-sans text-xs text-white leading-relaxed">{activeEmbed.caption}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={activeEmbed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-lg text-center"
              >
                <span>ABRIR REEL NO INSTAGRAM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
