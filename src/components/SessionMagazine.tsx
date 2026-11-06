import React, { useState } from 'react';
import { ArrowUpRight, Eye, X } from 'lucide-react';

interface MagazineItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  location: string;
  tag: string;
  fullStory: string;
}

const magazineItems: MagazineItem[] = [
  {
    id: 'onda',
    num: '01',
    title: 'A ONDA',
    subtitle: 'A BANCADA PERFEITA',
    description: 'Tubos que quebram oco na maré seca. Em Olivença, a onda é rápida, pesada e exige comprometimento no drop.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=85',
    location: 'Praia do Backdoor, Olivença',
    tag: 'SLABS & TUBOS',
    fullStory: 'O Backdoor em Olivença é conhecido por todos que buscam o verdadeiro surf radical na Bahia. Quando a ondulação de sul se alinha com o vento terral matinal, a bancada rasa joga para fora uma cortina de água esmeralda. Não há espaço para hesitação: botou para dentro, é visão de tubo do início ao fim.',
  },
  {
    id: 'viagem',
    num: '02',
    title: 'A VIAGEM',
    subtitle: 'A ESTRADA SEM DESTINO',
    description: 'Carro carregado de pranchas, parafina no painel e o mapa aberto em busca de secret spots virgens pela costa.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    location: 'Litoral Sul Baiano & Costa do Cacau',
    tag: 'ROAD TRIP',
    fullStory: 'Viajar com pranchas no teto pela rodovia Ilhéus-Itacaré é uma experiência quase espiritual. Estradas ladeadas por Mata Atlântica e o som do mar ao longe. Parar em vilarejos de pescadores, checar as marés na boca da barra e dormir com o barulho da arrebentação.',
  },
  {
    id: 'galera',
    num: '03',
    title: 'A GALERA',
    subtitle: 'ESPÍRITO DE COMUNIDADE',
    description: 'Quem divide o drop, divide a vida. Amizades lapidadas na remada, no incentivo de cada manobra e no açaí pós-queda.',
    image: 'https://images.unsplash.com/photo-1520116468418-095984416eb9?auto=format&fit=crop&w=1200&q=85',
    location: 'Prainha de Olivença',
    tag: 'LINE-UP FAMILY',
    fullStory: 'O Surf Livre nasceu dessa essência: a galera local de Olivença e Ilhéus que acorda antes do sol nascer. Quando alguém dropa uma bomba, a praia toda vibra. O canal é o espelho desse lifestyle onde a camaradagem na água vale mais do que qualquer troféu de campeonato.',
  },
  {
    id: 'mar',
    num: '04',
    title: 'O MAR',
    subtitle: 'ENERGIA E RESPEITO',
    description: 'A imensidão do Atlântico nos ensina humildade. Entrar no oceano é silenciar o mundo e escutar a própria respiração.',
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=85',
    location: 'Oceano Atlântico Sul',
    tag: 'OCEANO VIVO',
    fullStory: 'O mar é vivo, imponente e soberano. Cada série que entra no horizonte carrega milhares de quilômetros de energia acumulada. Flutuar sobre a prancha aguardando a próxima série nos conecta com o que há de mais primitivo e puro.',
  },
  {
    id: 'sessao',
    num: '05',
    title: 'A SESSÃO',
    subtitle: 'SAL NA PELE E ADRENALINA',
    description: 'Horas dentro d\'água até o braço não aguentar mais remar. Aquele sentimento único de sair do mar de alma lavada.',
    image: 'https://images.unsplash.com/photo-1455729552865-3658a5d39692?auto=format&fit=crop&w=1200&q=85',
    location: 'Batuba & Backdoor',
    tag: 'THE SESSION',
    fullStory: 'Aquela queda clássica do final de tarde: céu em tons de laranja e violeta, vento parando e as séries entrando lisas e cavadas. Duas, três horas dentro d\'água sem pensar em nada além da próxima curva na onda. É isso que nos mantém vivos.',
  },
];

export const SessionMagazine: React.FC = () => {
  const [activeStory, setActiveStory] = useState<MagazineItem | null>(null);

  return (
    <section id="sessoes" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#2EC4B6] rounded-full animate-pulse" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400">
                REVISTA EDITORIAL • CAPÍTULO 01
              </span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
              A SESSÃO COMEÇA <span className="text-stroke-cyan">AGORA.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-md uppercase tracking-wider">
            Cada capítulo revela um fragmento da nossa rotina no litoral baiano. Mergulhe na essência de quem vive pelo mar.
          </p>
        </div>
      </div>

      {/* Editorial Magazine Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {magazineItems.map((item, idx) => {
            // Asymmetric layout span
            const colSpan =
              idx === 0
                ? 'md:col-span-7'
                : idx === 1
                ? 'md:col-span-5'
                : idx === 2
                ? 'md:col-span-4'
                : idx === 3
                ? 'md:col-span-4'
                : 'md:col-span-4';

            return (
              <div
                key={item.id}
                onClick={() => setActiveStory(item)}
                className={`${colSpan} group relative rounded-3xl overflow-hidden bg-ocean-900/60 border border-white/10 hover:border-cyan-400/50 transition-all duration-700 cursor-pointer min-h-[420px] flex flex-col justify-between p-6 sm:p-8 shadow-xl hover:shadow-[0_20px_50px_rgba(46,196,182,0.15)]`}
              >
                {/* Background Image with Water Zoom */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out brightness-[0.75] group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
                  {/* Subtle water shimmer on hover */}
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Card Top: Number & Tag */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-syne font-black text-3xl sm:text-4xl text-cyan-400/90 tracking-tighter">
                      {item.num}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/15 text-[10px] font-mono tracking-widest text-slate-300 backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* "VER" Action Trigger */}
                  <div className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white group-hover:bg-[#2EC4B6] group-hover:text-ocean-950 group-hover:border-[#2EC4B6] transition-all transform group-hover:scale-110 shadow-lg">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Card Bottom: Content */}
                <div className="relative z-10 mt-auto pt-16">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-300 uppercase block mb-1">
                    {item.location}
                  </span>
                  <h3 className="font-syne font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#2EC4B6] group-hover:text-cyan-200 transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    <span>LER REPORTAGEM COMPLETA →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Story Modal / Drawer */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div className="relative max-w-3xl w-full bg-ocean-950 border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(46,196,182,0.25)] flex flex-col max-h-[90vh]">
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden flex-shrink-0">
              <img
                src={activeStory.image}
                alt={activeStory.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950 via-ocean-950/40 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setActiveStory(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-[10px] font-mono tracking-widest text-cyan-300">
                    {activeStory.num} • {activeStory.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-300">
                    {activeStory.location}
                  </span>
                </div>
                <h3 className="font-syne font-black text-3xl sm:text-4xl uppercase tracking-tight text-white">
                  {activeStory.title} — {activeStory.subtitle}
                </h3>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <p className="font-syne font-bold text-lg text-cyan-300 leading-snug">
                {activeStory.description}
              </p>
              <div className="h-px w-24 bg-[#2EC4B6]/40 my-4" />
              <p className="text-slate-300 leading-relaxed font-sans text-sm sm:text-base whitespace-pre-line">
                {activeStory.fullStory}
              </p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  PUBLICADO POR SURF LIVRE • ARQUIVO BAHIA
                </span>
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-5 py-2 rounded-full bg-cyan-400 text-ocean-950 font-syne font-bold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors"
                >
                  VOLTAR À REVISTA
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
