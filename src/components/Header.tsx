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
    { label: 'SESSÕES', href: '#sessoes' },
    { label: 'PARAFINA', href: '#parceiros' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-[#030712]/50 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Marca Oficial */}
        <a href="#inicio" className="flex items-center gap-2 group" aria-label="Surf Livre Início">
          <Logo size="md" variant="full" showTagline={scrolled} />
        </a>

        {/* Links de Âncora Suaves (Desktop) */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
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
          
          {/* Botão Secundário: Parafina (Borda sutil, link externo Instagram) */}
          <a
            href={instagramParafinaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-white/5 border border-white/20 text-slate-200 hover:text-white hover:border-yellow-400/50 font-syne font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all hover:bg-white/10 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>PARAFINA</span>
          </a>

          {/* Botão Primário: Ver Condições Hoje (Fundo sólido ciano/azul vibrante, texto escuro) */}
          <a
            href="#radar"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-[#030712] font-syne font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(46,196,182,0.6)] hover:shadow-[0_0_30px_rgba(46,196,182,0.9)] transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <Waves className="w-3.5 h-3.5 text-[#030712] stroke-[2.5]" />
            <span>VER CONDIÇÕES HOJE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#030712]" />
          </a>
        </div>

        {/* Botão Hambúrguer Mobile */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 cursor-pointer"
            aria-label="Alternar Menu Mobile"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-300" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#030712]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:hidden border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-syne font-black text-2xl tracking-tight text-white hover:text-[#2EC4B6] transition-colors flex items-center justify-between"
              >
                {link.label}
                <ArrowRight className="w-5 h-5 text-cyan-400/50" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href="#radar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-[#030712] font-syne font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Waves className="w-4 h-4" />
              <span>VER CONDIÇÕES HOJE</span>
            </a>

            <a
              href={instagramParafinaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-white/5 border border-yellow-400/30 text-yellow-300 font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>CONHECER A PARAFINA NO INSTAGRAM</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
