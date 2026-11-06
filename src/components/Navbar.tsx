import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { OceanSoundEngine } from './OceanSoundEngine';
import { Menu, X, ArrowRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';

interface NavbarProps {
  onEnterWave: () => void;
  onOpenCinema?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnterWave }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'EXPLORE', href: '#explore' },
    { label: 'SESSÕES', href: '#sessoes' },
    { label: 'VÍDEOS', href: '#videos' },
    { label: 'DESTINOS', href: '#destinos' },
    { label: 'GALERIA', href: '#galeria' },
    { label: 'COMUNIDADE', href: '#comunidade' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ocean-950/85 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <Logo size="md" variant="full" showTagline={scrolled} />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono tracking-widest text-slate-300 hover:text-[#2EC4B6] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2EC4B6] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-4">
            <OceanSoundEngine />

            <div className="flex items-center gap-1.5 border-l border-white/10 pl-3">
              <a
                href="https://www.instagram.com/surflivre1/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram @surflivre1"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@surflivre_"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube @surflivre_"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-red-400 hover:bg-white/10 transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onEnterWave}
              className="relative group overflow-hidden px-4 py-2 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:shadow-[0_0_25px_rgba(46,196,182,0.6)] transition-all transform active:scale-95 cursor-pointer"
            >
              <span className="relative z-10">ENTRAR NA ONDA</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity" />
            </button>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <OceanSoundEngine />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-ocean-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 sm:hidden">
          <div className="flex flex-col gap-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono tracking-widest text-cyan-400">SURF LIVRE • MENU</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-syne font-black text-2xl tracking-tight text-white hover:text-[#2EC4B6] transition-colors flex items-center justify-between"
              >
                {link.label}
                <ArrowRight className="w-5 h-5 text-cyan-500/50" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onEnterWave();
              }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-ocean-950 font-syne font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(46,196,182,0.4)]"
            >
              <span>ENTRAR NA ONDA</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-around pt-2">
              <a
                href="https://www.instagram.com/surflivre1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                @surflivre1
              </a>
              <a
                href="https://www.youtube.com/@surflivre_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white"
              >
                <YoutubeIcon className="w-4 h-4 text-red-400" />
                @surflivre_
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
