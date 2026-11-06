import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { PartnersSection } from './components/PartnersSection';
import { VideoHub } from './components/VideoHub';
import { realVideos } from './data/realVideos';
import type { VideoSession } from './data/realVideos';
import { CinemaModal } from './components/CinemaModal';
import { InteractiveMap } from './components/InteractiveMap';
import { SpotsVisualGrid } from './components/SpotsVisualGrid';
import { SurfTripAndMerch } from './components/SurfTripAndMerch';
import { SwellJournal } from './components/SwellJournal';
import { InstagramFeed } from './components/InstagramFeed';
import { CommunitySection } from './components/CommunitySection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { WaterCursor } from './components/WaterCursor';
import { FilmGrain } from './components/FilmGrain';
import { FloatingSwellButton } from './components/FloatingSwellButton';

export function App() {
  const [activeCinemaVideo, setActiveCinemaVideo] = useState<VideoSession | null>(null);

  const handleEnterWave = () => {
    const target = document.getElementById('radar') || document.getElementById('sessoes');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchVideos = () => {
    if (realVideos.length > 0) {
      setActiveCinemaVideo(realVideos[0]);
    }
  };

  const handlePlayCustomVideo = (videoId: string, title: string, location: string) => {
    const existing = realVideos.find(v => v.youtubeId === videoId);
    if (existing) {
      setActiveCinemaVideo(existing);
    } else {
      setActiveCinemaVideo({
        id: 'custom-' + videoId,
        title: title,
        thumbnail: 'https://i.ytimg.com/vi/' + videoId + '/hq720.jpg',
        duration: '08:00',
        category: 'SESSÃO LOCAL',
        location: location,
        surfer: 'Aldenei Aquino & Equipe Surf Livre',
        views: '1.2k',
        youtubeId: videoId,
        description: 'Vídeo real gravado no local pelo canal Surf Livre.'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#010206] text-slate-100 selection:bg-[#2EC4B6] selection:text-black overflow-x-hidden">
      <WaterCursor />
      <FilmGrain />

      {/* Floating Action Button (FAB Pé na Areia) */}
      <FloatingSwellButton />

      {/* Sticky Header com Duplo CTA */}
      <Header />

      <main className="relative z-10">
        <Hero
          onEnterWave={handleEnterWave}
          onWatchVideos={handleWatchVideos}
        />

        <MarqueeTicker />

        {/* 1. Radar Costeiro & Telemetria ao Vivo */}
        <InteractiveMap
          onPlaySpotVideo={handlePlayCustomVideo}
        />

        {/* 2. Guia Visual dos Picos (Visual > Texto) */}
        <SpotsVisualGrid
          onPlaySpotVideo={handlePlayCustomVideo}
        />

        {/* 3. Parceria Oficial: Parafina Intense Wax */}
        <PartnersSection />

        {/* 4. Vídeos Reais do Canal com Filtros e Lite Embed */}
        <VideoHub
          onSelectVideo={(video) => setActiveCinemaVideo(video)}
        />

        {/* 5. Diário do Swell (Jornalismo de Surf para SEO de Cauda Longa) */}
        <SwellJournal />

        {/* 6. Guia do Viajante & Drop Oficial (Merch) */}
        <SurfTripAndMerch />

        {/* 7. Instagram Oficial */}
        <InstagramFeed />

        {/* 8. Comunidade & Envie sua Sessão (UGC) */}
        <CommunitySection />

        {/* 10. Alerta de Swell com Formspree */}
        <Newsletter />
      </main>

      <Footer />

      <CinemaModal
        video={activeCinemaVideo}
        onClose={() => setActiveCinemaVideo(null)}
      />
    </div>
  );
}

export default App;
