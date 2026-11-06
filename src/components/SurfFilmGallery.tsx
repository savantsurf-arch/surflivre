import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Film } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  title: string;
  image: string;
  location: string;
  date: string;
  session: string;
  filmStock: string;
  camera: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'g-1',
    title: 'A BOCA DO TUBO NO BACKDOOR',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=90',
    location: 'Backdoor, Olivença - BA',
    date: '14 DE JULHO • 06:15 AM',
    session: 'SESSÃO 42 • SWELL SUL 2.2M',
    filmStock: 'KODAK VISION3 500T',
    camera: 'CANON 1DX • 70-200MM F/2.8',
  },
  {
    id: 'g-2',
    title: 'SILHUETA NA ALVORADA DA PRAINHA',
    image: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=1600&q=90',
    location: 'Prainha de Olivença, Ilhéus',
    date: '28 DE AGOSTO • 05:40 AM',
    session: 'SESSÃO 48 • VENTO TERRAL',
    filmStock: 'FUJIFILM PROVIA 100F',
    camera: 'NIKON F3 35MM • 50MM F/1.4',
  },
  {
    id: 'g-3',
    title: 'ESMERALDA EM ALTA PRESSÃO',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1600&q=90',
    location: 'Batuba, Olivença',
    date: '02 DE SETEMBRO • 09:30 AM',
    session: 'SESSÃO 53 • MARÉ SECA',
    filmStock: 'CINESTILL 800T',
    camera: 'SONY FX3 • CAIXA ESTANQUE',
  },
  {
    id: 'g-4',
    title: 'EXPEDIÇÃO ITACARÉ — VALAS DA TIRIRICA',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90',
    location: 'Praia da Tiririca, Itacaré',
    date: '19 DE JUNHO • 16:20 PM',
    session: 'ROAD TRIP SUL DA BAHIA',
    filmStock: 'KODAK PORTRA 400',
    camera: 'LEICA M6 • 35MM SUMMICRON',
  },
  {
    id: 'g-5',
    title: 'O LINE-UP SAGRADO DO ATLÂNTICO',
    image: 'https://images.unsplash.com/photo-1520116468418-095984416eb9?auto=format&fit=crop&w=1600&q=90',
    location: 'Costa do Cacau, Bahia',
    date: '05 DE MAIO • 06:00 AM',
    session: 'SESSÃO DA MADRUGADA',
    filmStock: 'ILFORD HP5 PLUS (B&W)',
    camera: 'HASSELBLAD 500C/M',
  },
  {
    id: 'g-6',
    title: 'A CORDA DO LEASH E O CORAÇÃO',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=90',
    location: 'Olivença - Batuba',
    date: '11 DE OUTUBRO • 17:45 PM',
    session: 'SESSÃO DOURADA DE SUNSET',
    filmStock: 'KODAK EKTAR 100',
    camera: 'CANON EOS R5 • 24-70MM F/2.8',
  },
];

export const SurfFilmGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const prevPhoto = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  const nextPhoto = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryPhotos.length);
  };

  return (
    <section id="galeria" className="relative py-28 bg-[#02050e] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Film className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
                ARQUIVO FOTOGRÁFICO • 35MM
              </span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              SURF FILM <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-sky-400">GALERIA.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-md uppercase tracking-wider">
            Fotografia analógica e digital de alta sensibilidade registrando os melhores dias no mar de Olivença e pelo mundo.
          </p>
        </div>

        {/* 35mm Frame Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl bg-black border border-white/10 p-3 pb-4 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-[0_15px_40px_rgba(46,196,182,0.2)]"
            >
              {/* 35mm Film Top Sprockets & Info */}
              <div className="flex items-center justify-between px-2 pb-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest border-b border-white/10 mb-3">
                <span>{photo.filmStock}</span>
                <span>{photo.date.split('•')[0]}</span>
              </div>

              {/* Photo Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-106 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Film Bottom Metadata */}
              <div className="px-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  <span>{photo.location}</span>
                  <span className="text-slate-400">{photo.session.split('•')[0]}</span>
                </div>
                <h3 className="font-syne font-bold text-base uppercase tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[110] bg-black/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-300">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                {galleryPhotos[selectedIndex].session}
              </span>
              <span className="text-white/20">•</span>
              <span className="font-mono text-xs text-slate-400">
                {galleryPhotos[selectedIndex].location}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-widest transition-colors"
            >
              <X className="w-4 h-4" />
              <span>FECHAR</span>
            </button>
          </div>

          {/* Main Photo Center Container */}
          <div className="relative max-w-6xl w-full mx-auto my-auto flex items-center justify-center py-4">
            <button
              onClick={prevPhoto}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#2EC4B6] hover:text-ocean-950 transition-all"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] max-w-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(46,196,182,0.2)]">
              <img
                src={galleryPhotos[selectedIndex].image}
                alt={galleryPhotos[selectedIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <button
              onClick={nextPhoto}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#2EC4B6] hover:text-ocean-950 transition-all"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Technical Spec Bar */}
          <div className="max-w-7xl mx-auto w-full pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <span className="text-white font-syne font-bold uppercase tracking-wider">
              {galleryPhotos[selectedIndex].title}
            </span>
            <div className="flex items-center gap-4 text-[11px]">
              <span>{galleryPhotos[selectedIndex].camera}</span>
              <span>•</span>
              <span className="text-cyan-400">{galleryPhotos[selectedIndex].filmStock}</span>
              <span>•</span>
              <span>{galleryPhotos[selectedIndex].date}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
