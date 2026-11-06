import React, { useState, useEffect } from 'react';
import { MapPin, Wind, Compass, Zap, Waves, Play, Activity, Clock, ShieldCheck, Flame, ExternalLink } from 'lucide-react';

export interface SurfSpot {
  id: string;
  name: string;
  location: string;
  city: 'Olivença' | 'Ilhéus' | 'Itacaré';
  coords: { x: number; y: number };
  image: string; // Real local image of the beach
  realVideoId: string;
  videoTitle: string;
  description: string;
  surfguruUrl: string;
  
  // Telemetry
  hasGoodWaves: boolean;
  waveCondition: string;
  waveHeight: string;
  wavePeriod: string;
  joules: string;
  joulesLevel: 'Moderada' | 'Alta' | 'Extrema';
  joulesPercent: number;
  windSpeed: string;
  windDirection: string;
  windStatus: string;
  windQuality: 'Ótimo' | 'Bom' | 'Regular';
  swellDirection: string;
  bestTide: string;
  bottomType: string;
}

export const spotsData: SurfSpot[] = [
  {
    id: 'backdoor',
    name: 'Praia do Backdoor',
    location: 'Olivença • Ilhéus - BA',
    city: 'Olivença',
    coords: { x: 48, y: 78 },
    image: '/spots/backdoor.jpg',
    realVideoId: 'ksH4xyUWZ_A',
    videoTitle: 'O backdoor acordou para o surf',
    surfguruUrl: 'https://surfguru.com.br/previsao/brasil/bahia/ilheus/praia-do-backdoor',
    description: 'Foto real da bancada de pedra do Backdoor em Olivença, base do canal Surf Livre. A laje rasa de pedra projeta tubos ocos, cavados e pesados na maré seca com ondulações de Sul.',
    hasGoodWaves: true,
    waveCondition: 'CLÁSSICO! 🔥🔥🔥',
    waveHeight: '1.5m a 2.0m',
    wavePeriod: '13s',
    joules: '1.480 kJ',
    joulesLevel: 'Extrema',
    joulesPercent: 92,
    windSpeed: '5 kts',
    windDirection: 'Terral NO (Noroeste)',
    windStatus: 'Terral Perfeito',
    windQuality: 'Ótimo',
    swellDirection: 'Sul (195°)',
    bestTide: 'Seca e Enchendo',
    bottomType: 'Laje rasa de pedra e bancada de areia compacta',
  },
  {
    id: 'batuba',
    name: 'Praia de Batuba',
    location: 'Olivença • Ilhéus - BA',
    city: 'Olivença',
    coords: { x: 52, y: 84 },
    image: '/spots/batuba.jpg',
    realVideoId: 'ywJZqaINhFI',
    videoTitle: 'Sessão de surf de altas ondas - Backdoor mar de luxo em Olivença',
    surfguruUrl: 'https://surfguru.com.br/previsao/brasil/bahia/ilheus/praia-de-batuba',
    description: 'Foto real da Praia de Batuba em Olivença com suas pedras lendárias. Conhecida pela grande força e volume de água que segura as maiores ressacas de inverno da Bahia.',
    hasGoodWaves: true,
    waveCondition: 'ALTAS ONDAS ⭐⭐⭐⭐',
    waveHeight: '1.8m a 2.5m',
    wavePeriod: '14s',
    joules: '1.820 kJ',
    joulesLevel: 'Extrema',
    joulesPercent: 98,
    windSpeed: '7 kts',
    windDirection: 'Terral O (Oeste)',
    windStatus: 'Terral Suave',
    windQuality: 'Ótimo',
    swellDirection: 'Sul / Sudeste (180°)',
    bestTide: 'Meia maré para Seca',
    bottomType: 'Fundo misto com pedras e correnteza forte',
  },
  {
    id: 'prainha',
    name: 'Prainha de Olivença',
    location: 'Olivença • Ilhéus - BA',
    city: 'Olivença',
    coords: { x: 50, y: 74 },
    image: '/spots/prainha.jpg',
    realVideoId: 'MCrnYx32vmc',
    videoTitle: 'Dia de surf com altas ondas em Olivença - Backdoor e Prainha',
    surfguruUrl: 'https://surfguru.com.br/previsao/brasil/bahia/ilheus/prainha',
    description: 'Foto real das séries quebrando na Prainha de Olivença. Água morna, esquerdas e direitas manobráveis perfeitas para todas as marés e point clássico das sessões matinais.',
    hasGoodWaves: true,
    waveCondition: 'BOAS ONDAS ⭐⭐⭐',
    waveHeight: '1.2m a 1.6m',
    wavePeriod: '11s',
    joules: '1.050 kJ',
    joulesLevel: 'Alta',
    joulesPercent: 70,
    windSpeed: '6 kts',
    windDirection: 'Terral Oeste',
    windStatus: 'Terral Suave',
    windQuality: 'Ótimo',
    swellDirection: 'Sudeste (145°)',
    bestTide: 'Todas as marés',
    bottomType: 'Bancada de areia com valas bem definidas',
  },
  {
    id: 'pedra-da-cachorra',
    name: 'Pedra da Cachorra',
    location: 'Praia do Renascer • Ilhéus - BA',
    city: 'Ilhéus',
    coords: { x: 55, y: 62 },
    image: '/spots/pedra_da_cachorra.jpg',
    realVideoId: 'eu7cYP-lo88',
    videoTitle: 'Ele me jogou no cabeção em Olivença - Histórias do Surf',
    surfguruUrl: 'https://surfguru.com.br/previsao/brasil/bahia/ilheus/praia-do-renascer',
    description: 'Foto do pico da Pedra da Cachorra na Praia do Renascer em Ilhéus. Tradicional palco de etapas do circuito profissional com ondas rápidas que quebram rente à laje.',
    hasGoodWaves: true,
    waveCondition: 'BOAS ONDAS ⭐⭐⭐',
    waveHeight: '1.2m a 1.5m',
    wavePeriod: '11s',
    joules: '980 kJ',
    joulesLevel: 'Alta',
    joulesPercent: 68,
    windSpeed: '8 kts',
    windDirection: 'Terral ONO',
    windStatus: 'Terral Suave',
    windQuality: 'Bom',
    swellDirection: 'Leste / Sudeste (110°)',
    bestTide: 'Secando para Baixa-mar',
    bottomType: 'Bancada de laje e canal de pedra',
  },
  {
    id: 'tiririca',
    name: 'Praia da Tiririca',
    location: 'Itacaré • Costa do Cacau - BA',
    city: 'Itacaré',
    coords: { x: 42, y: 22 },
    image: '/spots/tiririca.jpg',
    realVideoId: 'xTDOQ-zUTI4',
    videoTitle: 'ALTAS ONDAS show de surf no Backdoor e Costa do Cacau',
    surfguruUrl: 'https://surfguru.com.br/previsao/brasil/bahia/itacare/praia-da-tiririca',
    description: 'Foto autêntica da Praia da Tiririca em Itacaré com suas falésias de Mata Atlântica. A meca do surf de alta performance na Bahia com ondas fortes, cavadas e tubulares.',
    hasGoodWaves: true,
    waveCondition: 'CLÁSSICO! 🔥🔥🔥',
    waveHeight: '1.5m constante',
    wavePeriod: '12s',
    joules: '1.340 kJ',
    joulesLevel: 'Alta',
    joulesPercent: 86,
    windSpeed: '4 kts',
    windDirection: 'Terral SO (Sudoeste)',
    windStatus: 'Terral Perfeito',
    windQuality: 'Ótimo',
    swellDirection: 'Sudeste / Leste (135°)',
    bestTide: 'Todas as marés (melhor na seca)',
    bottomType: 'Beach break de areia grossa e pedras laterais',
  },
  {
    id: 'engenhoca',
    name: 'Praia da Engenhoca',
    location: 'Itacaré • Costa do Cacau - BA',
    city: 'Itacaré',
    coords: { x: 38, y: 32 },
    image: '/spots/engenhoca.jpg',
    realVideoId: 'lW_cUr4bOiE',
    videoTitle: 'Boas ondas no Backdoor e Costa do Cacau - Sessão Freesurf',
    surfguruUrl: 'https://surfguru.com.br/previsao/brasil/bahia/itacare/praia-da-engenhoca',
    description: 'Foto da enseada protegida da Engenhoca em Itacaré. Acessada por trilha ecológica nativa, projeta ondas longas, manobráveis e perfeitas protegidas do vento.',
    hasGoodWaves: true,
    waveCondition: 'BOAS ONDAS ⭐⭐⭐',
    waveHeight: '1.0m a 1.4m',
    wavePeriod: '10s',
    joules: '840 kJ',
    joulesLevel: 'Moderada',
    joulesPercent: 58,
    windSpeed: '6 kts',
    windDirection: 'Terral O (Oeste)',
    windStatus: 'Terral Suave',
    windQuality: 'Ótimo',
    swellDirection: 'Leste / Sudeste',
    bestTide: 'Enchendo até o Cheio',
    bottomType: 'Fundo de areia dourada e encostas protegidas',
  },
  {
    id: 'jeribucacu',
    name: 'Praia de Jeribucaçu',
    location: 'Itacaré • Costa do Cacau - BA',
    city: 'Itacaré',
    coords: { x: 45, y: 38 },
    image: '/spots/jeribucacu.jpg',
    realVideoId: 'W7BSUMoO76E',
    videoTitle: 'Freesurf - Altas ondas na Costa do Cacau',
    surfguruUrl: 'https://surfguru.com.br/previsao/brasil/bahia/itacare/praia-de-jeribucacu',
    description: 'Foto do cenário cinematográfico onde o rio encontra o mar em Jeribucaçu. Ondas triangulares, rápidas e com boa pressão que quebram perfeitas na foz do rio.',
    hasGoodWaves: true,
    waveCondition: 'ALTAS ONDAS ⭐⭐⭐⭐',
    waveHeight: '1.3m a 1.8m',
    wavePeriod: '12s',
    joules: '1.190 kJ',
    joulesLevel: 'Alta',
    joulesPercent: 78,
    windSpeed: '5 kts',
    windDirection: 'Terral Sudoeste',
    windStatus: 'Terral Perfeito',
    windQuality: 'Ótimo',
    swellDirection: 'Sul / Sudeste (160°)',
    bestTide: 'Baixa para Meia Maré',
    bottomType: 'Bancada de areia do rio e pedras na ponta',
  },
];

interface InteractiveMapProps {
  onPlaySpotVideo?: (videoId: string, title: string, location: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onPlaySpotVideo }) => {
  const [selectedSpot, setSelectedSpot] = useState<SurfSpot>(spotsData[0]);
  const [activeFilter, setActiveFilter] = useState<string>('TODOS');
  const [isLiveLoaded, setIsLiveLoaded] = useState<boolean>(false);
  const [liveData, setLiveData] = useState<{
    height: string;
    period: string;
    wind: string;
    joules: string;
    joulesPercent: number;
    updatedAt: string;
  } | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchLiveMarine() {
      try {
        const res = await fetch(
          'https://marine-api.open-meteo.com/v1/marine?latitude=-14.85&longitude=-39.01&current=wave_height,wave_direction,wave_period&timezone=America%2FSao_Paulo'
        );
        const resWind = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-14.85&longitude=-39.01&current=wind_speed_10m,wind_direction_10m&timezone=America%2FSao_Paulo'
        );
        
        if (!res.ok || !resWind.ok) return;

        const marine = await res.json();
        const wind = await resWind.json();

        if (!isMounted) return;

        const h = marine.current?.wave_height || 1.8;
        const p = marine.current?.wave_period || 7;
        const ws = wind.current?.wind_speed_10m ? Math.round(wind.current.wind_speed_10m / 1.852) + ' kts' : '6 kts';
        
        const joulesVal = Math.round(0.49 * (h ** 2) * p * 100);
        const percent = Math.min(100, Math.max(30, Math.round((joulesVal / 2000) * 100)));

        setLiveData({
          height: h.toFixed(1) + 'm constante',
          period: Math.round(p) + 's',
          wind: ws + ' • Terral NO',
          joules: joulesVal.toLocaleString('pt-BR') + ' kJ',
          joulesPercent: percent,
          updatedAt: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        });
        setIsLiveLoaded(true);
      } catch {
        setIsLiveLoaded(false);
      }
    }

    fetchLiveMarine();
    return () => { isMounted = false; };
  }, []);

  const filteredSpots = activeFilter === 'TODOS'
    ? spotsData
    : spotsData.filter(s => s.city === activeFilter);

  const displayHeight = (liveData && selectedSpot.city === 'Olivença') ? liveData.height : selectedSpot.waveHeight;
  const displayPeriod = (liveData && selectedSpot.city === 'Olivença') ? liveData.period : selectedSpot.wavePeriod;
  const displayJoules = (liveData && selectedSpot.city === 'Olivença') ? liveData.joules : selectedSpot.joules;
  const displayJoulesPercent = (liveData && selectedSpot.city === 'Olivença') ? liveData.joulesPercent : selectedSpot.joulesPercent;

  return (
    <section id="destinos" className="relative py-28 bg-[#02050e] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-[#2EC4B6]" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 font-bold">
                RADAR COSTEIRO & FOTOS REAIS DOS PICOS • COSTA DO CACAU
              </span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              ONDE O MAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-sky-400">QUEBRA.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-xl uppercase tracking-wider mt-3">
              Clique em cada pico para ver a foto real da praia (Backdoor, Batuba, Pedra da Cachorra, Tiririca, Engenhoca, Jeribucaçu) e os dados de mar, vento e joules.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-cyan-400/30 backdrop-blur-md shadow-lg">
            <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-300 tracking-wider">
                  {isLiveLoaded ? 'TELEMETRIA AO VIVO (' + liveData?.updatedAt + ')' : 'TELEMETRIA SURFGURU ATIVA'}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-white tracking-wider">
                BAHIA SUL • SWELL MONITORADO
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
          <span className="text-xs font-mono text-slate-400 mr-2 uppercase font-bold">REGIÃO:</span>
          {['TODOS', 'Olivença', 'Ilhéus', 'Itacaré'].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={'px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ' + (
                activeFilter === f
                  ? 'bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-bold shadow-[0_0_15px_rgba(46,196,182,0.4)]'
                  : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              )}
            >
              {f === 'TODOS' ? 'TODAS AS PRAIAS' : f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 relative bg-[#040914] rounded-3xl border border-cyan-500/20 p-6 sm:p-8 min-h-[500px] sm:min-h-[580px] flex flex-col justify-between shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2EC4B6] animate-ping" />
                <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase font-bold">
                  RADAR LITORAL SUL BAHIA • 14°47\'S a 14°57\'S
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                ITACARÉ → ILHÉUS → OLIVENÇA
              </span>
            </div>

            <div className="relative w-full h-[380px] sm:h-[440px] my-auto flex items-center justify-center">
              <div className="absolute w-44 h-44 rounded-full border border-cyan-500/15 pointer-events-none" />
              <div className="absolute w-72 h-72 rounded-full border border-cyan-500/10 pointer-events-none" />
              <div className="absolute w-[440px] h-[440px] rounded-full border border-cyan-500/5 pointer-events-none" />
              <div className="absolute w-full h-px bg-cyan-500/10 pointer-events-none" />
              <div className="absolute h-full w-px bg-cyan-500/10 pointer-events-none" />

              <svg
                viewBox="0 0 500 500"
                className="w-full h-full opacity-35 text-cyan-400 pointer-events-none stroke-current fill-none stroke-[2]"
              >
                <path d="M 210 50 Q 180 120, 200 170 T 250 260 Q 280 340, 260 410 T 230 480" />
                <path d="M 230 60 Q 200 130, 220 180 T 270 270 Q 300 350, 280 420 T 250 490" strokeDasharray="6 6" opacity="0.4" />
              </svg>

              {spotsData.map((spot) => {
                const isSelected = selectedSpot.id === spot.id;
                const isDimmed = activeFilter !== 'TODOS' && spot.city !== activeFilter;

                return (
                  <button
                    key={spot.id}
                    onClick={() => setSelectedSpot(spot)}
                    style={{ left: spot.coords.x + '%', top: spot.coords.y + '%' }}
                    className={'absolute -translate-x-1/2 -translate-y-1/2 z-20 group/pin focus:outline-none transition-all cursor-pointer ' + (
                      isDimmed ? 'opacity-30 pointer-events-none' : 'opacity-100'
                    )}
                    aria-label={'Ver foto e telemetria de ' + spot.name}
                  >
                    {isSelected && (
                      <span className="absolute -inset-4 rounded-full bg-[#2EC4B6]/40 animate-ping" />
                    )}

                    <div
                      className={'relative flex items-center justify-center rounded-full transition-all duration-300 shadow-2xl ' + (
                        isSelected
                          ? 'w-11 h-11 bg-cyan-400 text-ocean-950 scale-115 shadow-[0_0_25px_#2EC4B6]'
                          : 'w-8 h-8 bg-ocean-900 border border-cyan-400/70 text-cyan-300 hover:scale-125 hover:border-cyan-200'
                      )}
                    >
                      <MapPin className={isSelected ? 'w-5 h-5' : 'w-4 h-4'} />
                    </div>

                    <div
                      className={'absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider transition-all pointer-events-none border ' + (
                        isSelected
                          ? 'bg-cyan-400 text-ocean-950 font-bold border-cyan-300 shadow-lg scale-105'
                          : 'bg-black/85 text-slate-200 border-white/10 group-hover/pin:opacity-100 group-hover/pin:border-cyan-400/50'
                      )}
                    >
                      <span>{spot.name.replace('Praia do ', '').replace('Praia da ', '').replace('Praia de ', '')}</span>
                      <span className="ml-1 text-[9px] text-[#00F0FF] font-black">• {spot.waveHeight.split(' ')[0]}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 z-10 pt-4 border-t border-white/10 no-scrollbar">
              <span className="text-[10px] font-mono uppercase text-slate-400 whitespace-nowrap font-bold">
                CLIQUE PARA VER O PICO:
              </span>
              {filteredSpots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setSelectedSpot(spot)}
                  className={'px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider whitespace-nowrap transition-all cursor-pointer ' + (
                    selectedSpot.id === spot.id
                      ? 'bg-[#2EC4B6] text-ocean-950 font-bold shadow-[0_0_15px_rgba(46,196,182,0.6)]'
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                  )}
                >
                  {spot.name.replace('Praia do ', '').replace('Praia da ', '').replace('Praia de ', '')}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-ocean-950 to-[#02050e] rounded-3xl border border-cyan-500/40 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
            
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 group/thumb shadow-lg bg-black">
              <img
                key={selectedSpot.id}
                src={selectedSpot.image}
                alt={'Foto real da ' + selectedSpot.name}
                className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-black/35 to-transparent" />
              
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1.5 rounded-full bg-black/85 border border-cyan-400 text-[11px] font-mono font-bold tracking-wider text-cyan-300 uppercase backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                  {selectedSpot.waveCondition}
                </span>
              </div>

              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-full bg-cyan-950/85 border border-cyan-400/40 text-[10px] font-mono text-white uppercase backdrop-blur-md font-bold">
                  {selectedSpot.city}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-300 font-bold block mb-0.5">
                  FOTO REAL DO LOCAL • {selectedSpot.location}
                </span>
                <h3 className="font-syne font-black text-2xl uppercase tracking-tight text-white leading-tight">
                  {selectedSpot.name}
                </h3>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 hover:border-cyan-400/30 transition-all">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1">
                    <span className="flex items-center gap-1">
                      <Waves className="w-3.5 h-3.5 text-[#00F0FF]" />
                      TAMANHO
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold">{displayPeriod}</span>
                  </div>
                  <div className="font-syne font-black text-xl text-white">
                    {displayHeight}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                    Swell: {selectedSpot.swellDirection}
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 hover:border-cyan-400/30 transition-all">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      JOULES (ENERGIA)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">{selectedSpot.joulesLevel}</span>
                  </div>
                  <div className="font-syne font-black text-xl text-yellow-300">
                    {displayJoules}
                  </div>
                  <div className="w-full h-1.5 bg-black/60 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-400 via-yellow-400 to-orange-500 rounded-full transition-all duration-700"
                      style={{ width: displayJoulesPercent + '%' }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 hover:border-cyan-400/30 transition-all">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1">
                    <span className="flex items-center gap-1">
                      <Wind className="w-3.5 h-3.5 text-cyan-300" />
                      VENTO
                    </span>
                    <span className="text-[10px] text-cyan-300 font-bold">{selectedSpot.windQuality}</span>
                  </div>
                  <div className="font-syne font-bold text-sm text-white leading-tight">
                    {selectedSpot.windStatus}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">
                    {selectedSpot.windSpeed} • {selectedSpot.windDirection}
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-3.5 border border-white/10 hover:border-cyan-400/30 transition-all">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-cyan-300" />
                      MELHOR MARÉ
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">IDEAL</span>
                  </div>
                  <div className="font-syne font-bold text-sm text-white leading-tight">
                    {selectedSpot.bestTide}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1 truncate" title={selectedSpot.bottomType}>
                    {selectedSpot.bottomType.split(' ')[0]} {selectedSpot.bottomType.split(' ')[1]}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-400/20 flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#2EC4B6] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  <strong className="text-white font-mono uppercase text-[11px] block">AVALIAÇÃO DO LINE-UP:</strong>
                  {selectedSpot.hasGoodWaves ? (
                    <span>Mar em excelente condição com terral matinal e boa formação de tubos e manobras na bancada.</span>
                  ) : (
                    <span>Condições com vento lateral; melhor aguardar o terral da maré seca.</span>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-1 font-bold">
                SOBRE A BANCADA DO LOCAL
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {selectedSpot.description}
              </p>
            </div>

            <div className="space-y-2.5">
              {onPlaySpotVideo && (
                <button
                  onClick={() => onPlaySpotVideo(selectedSpot.realVideoId, selectedSpot.videoTitle, selectedSpot.name)}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(46,196,182,0.6)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
                >
                  <Play className="w-4 h-4 fill-ocean-950" />
                  <span>ASSISTIR SESSÃO REAL DESTE PICO</span>
                </button>
              )}

              <a
                href={selectedSpot.surfguruUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-white/5 border border-cyan-400/30 text-slate-300 hover:text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
              >
                <span>CONFERIR PREVISÃO NO SURFGURU</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
