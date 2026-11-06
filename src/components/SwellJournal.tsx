import React, { useState } from 'react';
import { BookOpen, Calendar, Waves, Wind, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

interface JournalEntry {
  id: string;
  date: string;
  isoDate: string;
  title: string;
  spot: string;
  image: string;
  metrics: {
    height: string;
    period: string;
    wind: string;
    tide: string;
  };
  paragraphs: [string, string, string];
}

const journalEntries: JournalEntry[] = [
  {
    id: 'swell-backdoor-outubro',
    date: '28 de Outubro de 2024',
    isoDate: '2024-10-28',
    title: 'Swell de Sul bate com 2 metros no Backdoor: Tubos ocos na maré seca',
    spot: 'Praia do Backdoor, Olivença (Bahia)',
    image: '/spots/backdoor.jpg',
    metrics: {
      height: '1.8m a 2.2m',
      period: '14 segundos',
      wind: 'Terral NO (Noroeste) 6 nós',
      tide: 'Seca às 07h15 (0.3m)',
    },
    paragraphs: [
      'A ondulação de Sul com 14 segundos de período encaixou com precisão cirúrgica na bancada de pedra do Backdoor nas primeiras horas da manhã. Com a maré seca no ponto mínimo logo cedo e o vento terral alisando a superfície, as séries entraram constantes com tubos largos e cavados.',
      'Quem acordou cedo pegou um dos momentos mais clássicos da temporada em Olivença. A laje projetou esquerdas pesadas rente à bancada rasa, exigindo drop no trilho e leitura rápida para completar as seções sem raspar nas pedras expostas.',
      'O mar manteve a pressão até a meia maré enchendo por volta das 10h30. Para quem pesquisa como está o mar em Olivença hoje, os dados confirmam: quando o quadrante Sul alinha com vento fraco de Noroeste, o Backdoor prova por que é a bancada mais técnica do sul baiano.',
    ],
  },
  {
    id: 'sessao-batuba-inverno',
    date: '15 de Outubro de 2024',
    isoDate: '2024-10-15',
    title: 'Fim de tarde clássico em Batuba: Volume pesado e junções fortes',
    spot: 'Praia de Batuba, Olivença (Bahia)',
    image: '/spots/batuba.jpg',
    metrics: {
      height: '1.5m a 2.0m',
      period: '12 segundos',
      wind: 'Terral Oeste 5 nós',
      tide: 'Meia maré para Seca',
    },
    paragraphs: [
      'A Praia de Batuba mostrou toda a sua força no final da tarde, recebendo grande volume d’água e segurando as séries com parede cheia e junções com pressão. O cenário perfeito para pranchas com mais área de bico e volume sob o peito.',
      'Diferente do Backdoor onde o tubo é seco e raso, Batuba entrega uma onda de manobra pesada, com seções que pedem rasgadas fortes e batidas no crítico. A galera local da Surf Livre marcou presença e registrou imagens cinematográficas sob o pôr do sol dourado da Bahia.',
      'O mar permaneceu com excelente formação até o anoitecer. Para surfistas viajantes que chegam a Ilhéus buscando ondas consistentes, Batuba é a garantia de surf com tamanho mesmo quando outros picos da região sofrem com vento maral.',
    ],
  },
  {
    id: 'trip-tiririca-itacare',
    date: '02 de Outubro de 2024',
    isoDate: '2024-10-02',
    title: 'Barca para a Costa do Cacau: Altas ondas na Praia da Tiririca',
    spot: 'Praia da Tiririca, Itacaré (Bahia)',
    image: '/spots/tiririca.jpg',
    metrics: {
      height: '1.2m a 1.6m',
      period: '11 segundos',
      wind: 'Terral Sudoeste suave',
      tide: 'Todas as marés',
    },
    paragraphs: [
      'Nossa barca subiu a rodovia BA-001 em direção a Itacaré para conferir as bancadas da Costa do Cacau. Chegando na Tiririca pela manhã, encontramos o mar funcionando com ondas triangulares, rampas de aéreo e boa velocidade em ambas as direções.',
      'A Tiririca é conhecida no cenário nacional como a meca do surf de alta performance baiano. Cercada pelas encostas de Mata Atlântica nativa, o visual da água esmeralda e a consistência das valas tornam cada queda uma aula de surf.',
      'As sessões renderam conteúdo valioso para os próximos episódios do canal no YouTube. Acompanhe nosso Diário do Swell semanal para saber antecipadamente as datas de entrada de ondulações e as melhores bancadas para cair na água.',
    ],
  },
];

export const SwellJournal: React.FC = () => {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry>(journalEntries[0]);

  return (
    <section id="diario" className="py-24 bg-[#010206] border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-[#2EC4B6]" />
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-400 font-bold">
                JORNALISMO LOCAL & RELATOS REAIS • ILHÉUS & OLIVENÇA
              </span>
            </div>
            <h2 className="font-syne font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-none">
              DIÁRIO DO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF]">SWELL.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-xl uppercase tracking-wider mt-3">
              Relatos autênticos das sessões, comportamento das bancadas e histórico de ondulações registradas pela equipe Surf Livre.
            </p>
          </div>

          <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            Atualizado semanalmente após os swells
          </span>
        </div>

        {/* 2-Column Layout: Left Selected Detailed Post + Right Other Entries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Selected Entry (7 cols) */}
          <article className="lg:col-span-7 rounded-3xl bg-gradient-to-b from-[#060c1c] to-[#02050e] border border-cyan-500/25 p-6 sm:p-8 shadow-2xl overflow-hidden">
            {/* Entry Photo with Overlay */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black">
              <img
                src={selectedEntry.image}
                alt={selectedEntry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-black/80 border border-cyan-400/50 text-cyan-300 text-[10px] font-mono tracking-wider uppercase font-bold backdrop-blur-md">
                  {selectedEntry.spot}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[11px] font-mono text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <time dateTime={selectedEntry.isoDate}>{selectedEntry.date}</time>
              </div>
            </div>

            {/* Metrics Chips Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-3 rounded-2xl bg-black/60 border border-white/10 text-[10px] font-mono">
              <div>
                <span className="text-slate-400 block uppercase">Tamanho</span>
                <strong className="text-white text-xs">{selectedEntry.metrics.height}</strong>
              </div>
              <div>
                <span className="text-slate-400 block uppercase">Período</span>
                <strong className="text-cyan-300 text-xs">{selectedEntry.metrics.period}</strong>
              </div>
              <div>
                <span className="text-slate-400 block uppercase">Vento</span>
                <strong className="text-emerald-400 text-xs">{selectedEntry.metrics.wind}</strong>
              </div>
              <div>
                <span className="text-slate-400 block uppercase">Maré</span>
                <strong className="text-yellow-300 text-xs">{selectedEntry.metrics.tide}</strong>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-syne font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-4 leading-snug">
              {selectedEntry.title}
            </h3>

            {/* 3 Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {selectedEntry.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Autor: Aldenei Aquino & Equipe Surf Livre</span>
              <span className="text-[#2EC4B6] font-bold">Relato 100% Verificado</span>
            </div>
          </article>

          {/* Right Entries List (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2">
              OUTROS RELATOS RECENTES:
            </span>

            {journalEntries.map((entry) => {
              const isSelected = selectedEntry.id === entry.id;

              return (
                <button
                  key={entry.id}
                  onClick={() => setSelectedEntry(entry)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all cursor-pointer flex gap-4 items-center group ${
                    isSelected
                      ? 'bg-gradient-to-r from-ocean-950 to-cyan-950/40 border-[#00F0FF] shadow-[0_0_25px_rgba(0,240,255,0.2)]'
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-black border border-white/10">
                    <img src={entry.image} alt={entry.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 mb-1">
                      <span>{entry.date.split(' de ')[0]} {entry.date.split(' de ')[1].slice(0, 3)}</span>
                      <span>•</span>
                      <span className="text-slate-400 truncate">{entry.spot.split(',')[0]}</span>
                    </div>
                    <h4 className="font-syne font-bold text-sm text-white uppercase tracking-tight line-clamp-2 leading-snug group-hover:text-cyan-200 transition-colors">
                      {entry.title}
                    </h4>
                    <span className="text-[10px] font-mono text-[#2EC4B6] mt-1 block group-hover:underline">
                      Ler relato completo →
                    </span>
                  </div>
                </button>
              );
            })}

            {/* Newsletter Callout inside Journal */}
            <div className="p-6 rounded-2xl bg-cyan-950/30 border border-cyan-400/20 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300 font-bold block mb-1">
                QUER O PRÓXIMO RELATO?
              </span>
              <p className="text-xs text-slate-300 mb-3">
                Assine nosso alerta de swell gratuito e receba a previsão antes de todo mundo.
              </p>
              <a
                href="#alerta"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2EC4B6] text-ocean-950 font-syne font-black text-xs uppercase"
              >
                <span>CADASTRAR E-MAIL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
