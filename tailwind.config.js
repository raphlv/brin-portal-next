/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brin: {
          red: '#DC2626',       // BRIN Official Vibrant Red
          redDark: '#991B1B',   // Deep Crimson
          redLight: '#EF4444',  // Bright Red
          redHover: '#B91C1C',
          redSoft: '#FEF2F2',   // Soft Red Tint
          navy: '#0F172A',      // Deep Slate Navy Text
          dark: '#020617',      // Very Dark Navy
          cardDark: '#FFFFFF',  // White Cards
          border: '#E2E8F0',    // Clean Light Border
          borderDark: '#CBD5E1',
          cyan: '#0284C7',      // Vibrant Blue/Cyan
          cyanHover: '#0369A1',
          cyanSoft: '#F0F9FF',  // Soft Cyan Tint
          blue: '#2563EB',      // Royal Blue
          purple: '#7C3AED',    // Purple Accent
          gold: '#D97706',      // Gold/Amber
          goldSoft: '#FFFBEB',
          slate: '#F8FAFC',     // Light Background Base
          slateCard: '#FFFFFF', // Clean White Card
          silver: '#64748B',    // Subdued Text
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 10px 25px -5px rgba(220, 38, 38, 0.25)',
        'glow-cyan': '0 10px 25px -5px rgba(2, 132, 199, 0.2)',
        'card-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 20px 30px -10px rgba(220, 38, 38, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'light-grid': "radial-gradient(#E2E8F0 1px, transparent 1px)",
        'brin-gradient': 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
        'brin-hero-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
