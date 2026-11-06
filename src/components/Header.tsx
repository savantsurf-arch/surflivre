'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Waves, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

export interface HeaderProps {
  instagramParafinaUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({
  instagramParafinaUrl = 'https://www.instagram.com/intensewax/',
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'RADAR DO MAR', href: '#radar' },
    { label: 'PICOS', href: '#picos' },
    { label: 'SESSÕES', href: '#sessoes' },
    { label: 'PARAFINA', href: '#parafina' },
    { label: 'DIÁRIO', href: '#diario' },
    { label: 'GUIA & MERCH', href: '#trip-merch' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#010206]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
          : 'bg-[#010206]/60 backdrop-blur-sm border-b border-white/5 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Oficial */}
        <a href="#inicio" className="flex items-center gap-2 group" aria-label="Surf Livre - Início">
          <Logo size="md" variant="full" showTagline={scrolled} />
        </a>

        {/* Links de Âncora (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono font-bold tracking-widest text-slate-300 hover:text-[#2EC4B6] transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00F0FF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Duplo CTA com Hierarquia Visual Clara */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Botão Secundário: Parafina (Borda sutil, texto claro, link externo) */}
          <a
            href={instagramParafinaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-white/5 border border-white/20 text-slate-200 hover:text-white hover:border-yellow-400/50 font-syne font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all hover:bg-white/10 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>PARAFINA</span>
          </a>

          {/* Botão Primário: Ver Condições Hoje (Sólido ciano vibrante, texto escuro) */}
          <a
            href="#radar"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-[#030712] font-syne font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(46,196,182,0.6)] hover:shadow-[0_0_30px_rgba(46,196,182,0.9)] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <Waves className="w-3.5 h-3.5 text-[#030712] stroke-[2.5]" />
            <span>CONDIÇÕES HOJE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#030712]" />
          </a>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 cursor-pointer min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Alternar Menu Mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-300" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#010206]/98 backdrop-blur-2xl flex flex-col justify-between p-6 lg:hidden border-t border-white/10 animate-in slide-in-from-top-2 duration-300 overflow-y-auto">
          <div className="flex flex-col gap-5 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-syne font-black text-xl tracking-tight text-white hover:text-[#2EC4B6] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                {link.label}
                <ArrowRight className="w-5 h-5 text-cyan-400/50" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10 mt-6">
            <a
              href="#radar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full min-h-[50px] py-3.5 rounded-xl bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-[#030712] font-syne font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Waves className="w-4 h-4" />
              <span>VER CONDIÇÕES DO MAR AGORA</span>
            </a>

            <a
              href={instagramParafinaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[50px] py-3.5 rounded-xl bg-white/5 border border-yellow-400/40 text-yellow-300 font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>COMPRAR PARAFINA INTENSE WAX</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
