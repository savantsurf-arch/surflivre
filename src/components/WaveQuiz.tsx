import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Compass, Sparkles, ArrowRight, CheckCircle2, RotateCcw, Share2, Flame, Waves, Palmtree, Video } from 'lucide-react';

interface QuizOption {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  resultTitle: string;
  resultQuote: string;
  idealSpot: string;
  recommendedQuiver: string;
}

const quizOptions: QuizOption[] = [
  {
    id: 'comecando',
    emoji: '🌊',
    title: 'COMEÇANDO AGORA',
    subtitle: 'A sede do primeiro drop e da espuma branca',
    badge: 'INICIANTE VIBRANTE',
    icon: <Waves className="w-5 h-5 text-cyan-400" />,
    resultTitle: 'A PURA STOKE DO COMEÇO!',
    resultQuote: '“O melhor surfista no mar é aquele que está se divertindo mais. Cada onda surfada é uma vitória inesquecível.”',
    idealSpot: 'Prainha de Olivença (maré cheia) & Valas protegidas',
    recommendedQuiver: 'Funboard 7\'2 ou Softboard 8\'0 com volume generoso',
  },
  {
    id: 'evoluindo',
    emoji: '🏄',
    title: 'EVOLUINDO',
    subtitle: 'Cortando a parede, rasgadas e leitura de mar',
    badge: 'LINHA & PROGRESSÃO',
    icon: <Compass className="w-5 h-5 text-sky-400" />,
    resultTitle: 'BUSCADOR DE LINHA PERFEITA!',
    resultQuote: '“Você já sente o timing da onda e sabe quando acelerar ou puxar o freio. A evolução é diária e o vício já tomou conta.”',
    idealSpot: 'Batuba & Pontas de pedra com parede longa',
    recommendedQuiver: 'Fish biquilha 5\'8 ou Shortboard All-Round 6\'0',
  },
  {
    id: 'radical',
    emoji: '🔥',
    title: 'RADICAL',
    subtitle: 'Tubos ocos, bancadas pesadas e aéreos',
    badge: 'CHARGER CASCA GROSSA',
    icon: <Flame className="w-5 h-5 text-orange-400" />,
    resultTitle: 'BOTOU PRA BAIXO, NÃO TEM VOLTA!',
    resultQuote: '“VOCÊ É DAQUELES QUE NÃO PRECISAM DE MUITO. UMA PRANCHA, UMA PRAIA E UMA BOA ONDA. O tubo é o seu santuário.”',
    idealSpot: 'Praia do Backdoor (maré seca com swell de sul)',
    recommendedQuiver: 'Step-up 6\'2 round pin ou pranchinha performática epóxi',
  },
  {
    id: 'surftrip',
    emoji: '🌴',
    title: 'SURF TRIP',
    subtitle: 'Na estrada atrás da bancada secreta',
    badge: 'ALMA VIAJANTE',
    icon: <Palmtree className="w-5 h-5 text-emerald-400" />,
    resultTitle: 'O DESTINO É A PRÓXIMA SÉRIE!',
    resultQuote: '“Carro carregado, parafina no ar-condicionado e amigos na barca. Para você, a estrada e a fogueira no final de tarde valem tanto quanto as ondas.”',
    idealSpot: 'Costa do Cacau (Ilhéus - Itacaré - Barra Grande)',
    recommendedQuiver: 'Quiver triplo: 1 Fish, 1 Performance e 1 Mini-Gun',
  },
  {
    id: 'lifestyle',
    emoji: '🎥',
    title: 'VIVENDO O SURF',
    subtitle: 'Cultura, imagem, maré e estilo de vida',
    badge: 'ESSÊNCIA PURA',
    icon: <Video className="w-5 h-5 text-purple-400" />,
    resultTitle: 'VIVA O MAR. VIVA A SESSÃO.',
    resultQuote: '“O surf moldou seu horário de acordar, sua alimentação, suas músicas e suas amizades. Estar conectado ao oceano é a sua religião.”',
    idealSpot: 'Olivença, Bahia • Em qualquer condição de mar',
    recommendedQuiver: 'Qualquer prancha que deslize na água e faça sorrir',
  },
];

export const WaveQuiz: React.FC = () => {
  const [selected, setSelected] = useState<QuizOption | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSelect = (option: QuizOption) => {
    setSelected(option);
    // Trigger radical confetti blast
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2EC4B6', '#00F0FF', '#ffffff', '#0284c7'],
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleShare = () => {
    if (!selected) return;
    const shareText = `Minha onda no SURF LIVRE é "${selected.title}"! ${selected.resultQuote} Descubra a sua em surflivre.com`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="explore" className="relative py-28 bg-[#02050e] overflow-hidden border-t border-white/5">
      {/* Dynamic Glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 mb-4">
          <Sparkles className="w-4 h-4 text-cyan-300" />
          <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase">
            EXPERIÊNCIA INTERATIVA
          </span>
        </div>

        <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-4">
          QUAL É A SUA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-sky-400">ONDA?</span>
        </h2>
        <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-xl mx-auto uppercase tracking-wider mb-12">
          Escolha o seu momento no mar e receba a frequência da sua sessão:
        </p>

        {/* Options Grid */}
        {!selected ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {quizOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt)}
                className="group relative rounded-2xl bg-ocean-950/90 border border-white/10 hover:border-cyan-400/80 p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(46,196,182,0.3)] cursor-pointer"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform">
                  {opt.emoji}
                </div>
                <h3 className="font-syne font-extrabold text-lg uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {opt.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {opt.subtitle}
                </p>
                <div className="mt-6 w-full pt-4 border-t border-white/5 flex items-center justify-center gap-1 text-[11px] font-mono text-[#2EC4B6] group-hover:underline">
                  <span>ESCOLHER</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        ) : (
          /* Dynamic Result Card */
          <div className="max-w-2xl mx-auto bg-gradient-to-b from-ocean-900 to-ocean-950 border-2 border-cyan-400/50 rounded-3xl p-8 sm:p-12 shadow-[0_0_80px_rgba(46,196,182,0.3)] animate-in zoom-in-95 duration-500 text-left">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selected.emoji}</span>
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-cyan-400/20 text-[#2EC4B6] text-[10px] font-mono tracking-widest uppercase font-bold">
                    {selected.badge}
                  </span>
                  <h3 className="font-syne font-black text-2xl uppercase tracking-tight text-white">
                    {selected.resultTitle}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Tentar novamente"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Radical Quote */}
            <div className="p-6 rounded-2xl bg-black/50 border border-cyan-500/20 mb-6">
              <p className="font-syne font-black text-lg sm:text-xl text-cyan-200 tracking-wide leading-relaxed uppercase">
                {selected.resultQuote}
              </p>
            </div>

            {/* Recommendations */}
            <div className="space-y-3 mb-8 text-xs font-mono">
              <div className="flex items-start gap-2 text-slate-300">
                <span className="text-cyan-400 font-bold">PICO RECOMENDADO:</span>
                <span>{selected.idealSpot}</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <span className="text-cyan-400 font-bold">EQUIPAMENTO IDEAL:</span>
                <span>{selected.recommendedQuiver}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#destinos"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <span>CONTINUAR EXPLORANDO →</span>
              </a>

              <button
                onClick={handleShare}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? 'COPIADO COM SUCESSO!' : 'COMPARTILHAR RESULTADO'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
