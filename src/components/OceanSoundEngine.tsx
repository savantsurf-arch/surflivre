import React, { useEffect, useRef, useState } from 'react';
import { VolumeX, Waves } from 'lucide-react';

export const OceanSoundEngine: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume] = useState<number>(0.4);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const isSetupRef = useRef<boolean>(false);

  const initAudio = () => {
    if (isSetupRef.current) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Pink noise buffer generator for ocean acoustics
      const bufferSize = ctx.sampleRate * 3;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
        b6 = white * 0.115926;
      }

      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;
      noiseNode.loop = true;

      // Deep ocean low-pass filter (simulates distance & water mass)
      const lowFilter = ctx.createBiquadFilter();
      lowFilter.type = 'lowpass';
      lowFilter.frequency.setValueAtTime(450, ctx.currentTime);
      lowFilter.Q.setValueAtTime(1.2, ctx.currentTime);

      // LFO for wave swells (8-second natural swell period)
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, ctx.currentTime); // ~8.3 sec period
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(320, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(lowFilter.frequency);

      // Dynamic swell amplitude modulation
      const swellAmp = ctx.createGain();
      swellAmp.gain.setValueAtTime(0.5, ctx.currentTime);
      const ampLfo = ctx.createOscillator();
      ampLfo.frequency.setValueAtTime(0.12, ctx.currentTime);
      const ampLfoGain = ctx.createGain();
      ampLfoGain.gain.setValueAtTime(0.4, ctx.currentTime);
      ampLfo.connect(ampLfoGain);
      ampLfoGain.connect(swellAmp.gain);

      noiseNode.connect(lowFilter);
      lowFilter.connect(swellAmp);
      swellAmp.connect(masterGain);

      noiseNode.start(0);
      lfo.start(0);
      ampLfo.start(0);

      isSetupRef.current = true;
    } catch (e) {
      console.warn('Web Audio API not permitted or unsupported', e);
    }
  };

  const togglePlay = async () => {
    if (!audioCtxRef.current) {
      initAudio();
    }

    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      await audioCtxRef.current.resume();
    }

    if (gainNodeRef.current && audioCtxRef.current) {
      if (isPlaying) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.4);
        setIsPlaying(false);
      } else {
        gainNodeRef.current.gain.setTargetAtTime(volume, audioCtxRef.current.currentTime, 0.4);
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current && isPlaying) {
      gainNodeRef.current.gain.setTargetAtTime(volume, audioCtxRef.current.currentTime, 0.1);
    }
  }, [volume, isPlaying]);

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Silenciar som do mar' : 'Ouvir som do mar'}
        title={isPlaying ? 'Silenciar maré' : 'Ativar áudio das ondas'}
        className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 text-xs font-mono select-none ${
          isPlaying
            ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300 shadow-[0_0_15px_rgba(46,196,182,0.4)]'
            : 'border-white/10 bg-black/40 text-slate-400 hover:text-white hover:border-white/20'
        }`}
      >
        {isPlaying ? (
          <>
            <Waves className="w-3.5 h-3.5 text-[#2EC4B6] animate-pulse" />
            <span className="hidden sm:inline">SOM DO MAR</span>
            {/* Visualizer bars */}
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 bg-cyan-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
              <span className="w-0.5 bg-cyan-300 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-2" />
              <span className="w-0.5 bg-cyan-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-3.5" />
              <span className="w-0.5 bg-teal-300 rounded-full animate-[pulse_1s_ease-in-out_infinite] h-1.5" />
            </div>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ÁUDIO MAR</span>
          </>
        )}
      </button>
    </div>
  );
};
