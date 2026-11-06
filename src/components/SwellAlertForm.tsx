'use client';

import React, { useState } from 'react';

interface SwellAlertFormProps {
  formspreeId?: string; // Substitua por seu ID real do Formspree (ex: "xbjnvqkw")
  className?: string;
}

export const SwellAlertForm: React.FC<SwellAlertFormProps> = ({
  formspreeId = 'SEU_CODIGO_AQUI',
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Se o código ainda for o placeholder, simula sucesso localmente para teste
    if (formspreeId === 'SEU_CODIGO_AQUI') {
      e.preventDefault();
      setStatus('loading');
      setTimeout(() => {
        setStatus('success');
        setEmail('');
      }, 700);
      return;
    }

    // Envio assíncrono para o Formspree sem recarregar a página
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      {status === 'success' ? (
        <div
          role="status"
          aria-live="polite"
          className="p-4 rounded-2xl bg-cyan-950/80 border border-[#2EC4B6] text-cyan-200 text-xs sm:text-sm font-mono flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(46,196,182,0.3)] animate-in fade-in zoom-in-95"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 text-emerald-400 shrink-0"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          <span>ALERTA ATIVADO! Você receberá o aviso do mar no seu e-mail.</span>
        </div>
      ) : (
        <form
          action={`https://formspree.io/f/${formspreeId}`}
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-3 w-full"
        >
          <div className="relative w-full">
            <label htmlFor="swell-alert-email" className="sr-only">
              Seu melhor e-mail
            </label>
            <input
              id="swell-alert-email"
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="w-full min-h-[48px] px-5 py-3.5 rounded-full bg-black/80 border border-white/20 text-white placeholder-slate-400 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all shadow-inner"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2EC4B6] to-[#00F0FF] text-black font-syne font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(46,196,182,0.6)] active:scale-95 transition-all whitespace-nowrap cursor-pointer disabled:opacity-60"
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4 text-ocean-950" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                ENVIANDO...
              </span>
            ) : (
              <span>ME AVISE</span>
            )}
          </button>
        </form>
      )}

      {status === 'error' && (
        <p className="text-red-400 text-[11px] font-mono mt-2 text-center">
          Ocorreu um erro ao enviar. Tente novamente em instantes.
        </p>
      )}
    </div>
  );
};
