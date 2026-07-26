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
        // ── New Premium Palette ───────────────────────────────────
        // Accent / Primary action color → Teal #0F766E
        royal: {
          DEFAULT: '#0F766E',
          hover:   '#0D6B64',
          light:   '#14B8A6',
        },
        // Background / surface system
        surface: {
          DEFAULT: '#FAFAF8',
          card:    '#FFFFFF',
          border:  '#E5E7EB',
        },
        // Text system
        ink: {
          DEFAULT: '#111827',
          muted:   '#6B7280',
          subtle:  '#9CA3AF',
        },
        // Teal shades for utility use
        teal: {
          50:  '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        // Dark mode surfaces (navy- prefix kept for backward compat)
        navy: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          850: '#18202E',
          900: '#111827',  // dark primary bg
          950: '#0D1117',  // deepest dark bg
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card':       '0 1px 3px 0 rgba(0,0,0,0.04), 0 1px 2px -1px rgba(0,0,0,0.04)',
        'card-md':    '0 4px 6px -1px rgba(0,0,0,0.06), 0 2px 4px -2px rgba(0,0,0,0.04)',
        'card-lg':    '0 10px 25px -5px rgba(0,0,0,0.08), 0 4px 10px -5px rgba(0,0,0,0.04)',
        'card-hover': '0 20px 40px -10px rgba(15,118,110,0.12)',
        'glow-teal':  '0 0 20px -4px rgba(15,118,110,0.3)',
        'glow-blue':  '0 0 20px -4px rgba(15,118,110,0.3)', // compat alias
        'glass-light':'0 8px 32px 0 rgba(0,0,0,0.06)',
        'glass-dark': '0 8px 32px 0 rgba(0,0,0,0.40)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'slide-up':   'slideUp 0.4s ease-out',
        'fade-in':    'fadeIn 0.3s ease-out',
        'spin-slow':  'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(8px)', opacity: '0' },
          to:   { transform: 'translateY(0)',   opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
