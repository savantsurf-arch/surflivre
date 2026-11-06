/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#02050e',
          900: '#030712',
          850: '#060e1f',
          800: '#0a192f',
          700: '#0f2747',
          600: '#163b66',
        },
        brand: {
          cyan: '#2EC4B6',
          neon: '#00F0FF',
          teal: '#0d9488',
          foam: '#E0F2FE',
        },
        sand: {
          100: '#FDFBF7',
          200: '#F5EFE6',
          300: '#EAD7BA',
          400: '#D4A373',
        }
      },
      fontFamily: {
        syne: ['"Syne"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'wave-flow': 'waveFlow 12s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        waveFlow: {
          '0%': { transform: 'translateY(0) scaleY(1)' },
          '100%': { transform: 'translateY(-10px) scaleY(1.04)' },
        }
      }
    },
  },
  plugins: [],
}

