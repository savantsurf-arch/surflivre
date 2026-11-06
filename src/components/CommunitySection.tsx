import React, { useState } from 'react';
import { Users, Send, Video, Camera, Sparkles, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';

export const CommunitySection: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [surferName, setSurferName] = useState('');
  const [spotName, setSpotName] = useState('Praia do Backdoor');
  const [mediaLink, setMediaLink] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaLink) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
      setSurferName('');
      setMediaLink('');
    }, 4000);
  };

  const whatsappUgcMsg = encodeURIComponent(
    `E aí galera do Surf Livre! Gravei uma sessão em ${spotName} e quero mandar o vídeo/foto para passar no canal!`
  );

  return (
    <section id="comunidade" className="relative py-28 bg-[#010206] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-900/15 via-teal-900/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 mb-6 shadow-sm">
          <Users className="w-4 h-4 text-cyan-300" />
          <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase font-bold">
            A FAMÍLIA DO MAR • COMUNIDADE SURF LIVRE
          </span>
        </div>

        <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-6 leading-tight">
          VOCÊ TAMBÉM FAZ PARTE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] via-[#00F0FF] to-sky-400">
            DESSA SESSÃO.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
          “O Surf Livre não é só sobre pegar onda. É sobre acordar cedo, cair na água, viajar pela Costa do Cacau, conhecer gente e viver histórias que ficam gravadas na memória.”
        </p>

        {/* 📸 UGC Call: MANDE SUA SESSÃO */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-ocean-950 to-[#030712] border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(46,196,182,0.2)] text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-[#00F0FF]/20 text-[#00F0FF] text-[10px] font-mono font-bold uppercase tracking-wider">
                CONTEÚDO DA COMUNIDADE
              </span>
              <span className="text-yellow-400 text-xs font-mono font-bold">★ APAREÇA NO CANAL</span>
            </div>
            <h3 className="font-syne font-black text-2xl sm:text-3xl uppercase text-white tracking-tight">
              DROPANDO NAS BANCADAS DA BAHIA? MANDE SUA SESSÃO.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl">
              Tirou foto do tubo ou gravou a barca no Backdoor, Batuba ou Tiririca? Envie o link do seu vídeo ou foto. Os melhores drops são publicados no canal do YouTube e no Instagram oficial!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(46,196,182,0.6)] transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95"
            >
              <Video className="w-4 h-4 text-ocean-950" />
              <span>ENVIAR MEU DROP</span>
            </button>

            <a
              href={`https://wa.me/5573999999999?text=${whatsappUgcMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/5 border border-white/20 text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>MANDAR NO WHATSAPP</span>
            </a>
          </div>
        </div>

        {/* Form Modal Dropdown (Expandable UGC) */}
        {isFormOpen && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-black/90 border border-cyan-400/50 shadow-2xl animate-in zoom-in-95 text-left max-w-2xl mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h4 className="font-syne font-black text-lg text-white uppercase flex items-center gap-2">
                    <Camera className="w-5 h-5 text-cyan-400" />
                    ENVIAR FOTO OU VÍDEO PARA O SURF LIVRE
                  </h4>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="text-xs font-mono text-slate-400 hover:text-white"
                  >
                    FECHAR ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                      Seu Nome / @ do Instagram
                    </label>
                    <input
                      type="text"
                      required
                      value={surferName}
                      onChange={(e) => setSurferName(e.target.value)}
                      placeholder="Ex: Pedro @pedro_surf"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white text-xs font-mono focus:border-cyan-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                      Pico da Sessão
                    </label>
                    <select
                      value={spotName}
                      onChange={(e) => setSpotName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030712] border border-white/20 text-cyan-300 text-xs font-mono focus:border-cyan-400 outline-none"
                    >
                      <option value="Praia do Backdoor (Olivença)">Praia do Backdoor (Olivença)</option>
                      <option value="Praia de Batuba (Olivença)">Praia de Batuba (Olivença)</option>
                      <option value="Prainha (Olivença)">Prainha (Olivença)</option>
                      <option value="Pedra da Cachorra (Ilhéus)">Pedra da Cachorra (Ilhéus)</option>
                      <option value="Praia da Tiririca (Itacaré)">Praia da Tiririca (Itacaré)</option>
                      <option value="Outro Pico da Região">Outro Pico da Região</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                    Link do Vídeo / Foto (Google Drive, YouTube, Instagram ou WeTransfer)
                  </label>
                  <input
                    type="url"
                    required
                    value={mediaLink}
                    onChange={(e) => setMediaLink(e.target.value)}
                    placeholder="https://drive.google.com/... ou https://instagram.com/..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white text-xs font-mono focus:border-cyan-400 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>ENVIAR MATERIAL PARA A EQUIPE</span>
                </button>
              </form>
            ) : (
              <div className="p-6 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="font-syne font-black text-xl text-white uppercase">MATERIAL RECEBIDO COM SUCESSO!</h4>
                <p className="text-xs font-mono text-slate-300">
                  Valeu pelo drop, {surferName || 'surfista'}! A equipe do Surf Livre vai conferir o arquivo e marcar você no canal!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14">
          <div className="bg-ocean-950/80 rounded-2xl border border-white/10 p-6 shadow-xl">
            <span className="font-syne font-black text-3xl sm:text-4xl text-[#2EC4B6] block mb-1">
              +500
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-bold">
              ONDAS DROPADAS
            </span>
          </div>

          <div className="bg-ocean-950/80 rounded-2xl border border-white/10 p-6 shadow-xl">
            <span className="font-syne font-black text-3xl sm:text-4xl text-[#00F0FF] block mb-1">
              +12.000km
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-bold">
              ESTRADA & SWELLS
            </span>
          </div>

          <div className="bg-ocean-950/80 rounded-2xl border border-white/10 p-6 shadow-xl">
            <span className="font-syne font-black text-3xl sm:text-4xl text-pink-400 block mb-1">
              +3.1k
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-bold">
              FAMÍLIA NO INSTA
            </span>
          </div>

          <div className="bg-ocean-950/80 rounded-2xl border border-white/10 p-6 shadow-xl">
            <span className="font-syne font-black text-3xl sm:text-4xl text-amber-400 block mb-1">
              100%
            </span>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-bold">
              ESPÍRITO LIVRE
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/surflivre1/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 text-white font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(244,63,94,0.3)] hover:scale-105 transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>SEGUIR NO INSTAGRAM (@SURFLIVRE1)</span>
          </a>

          <a
            href="https://www.youtube.com/@surflivre_"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-syne font-black text-xs uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:scale-105 transition-all"
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>INSCREVER NO YOUTUBE (@SURFLIVRE_)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
