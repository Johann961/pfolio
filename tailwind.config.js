/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep darks — hero backgrounds, footer
        'ink-950': '#09090B',
        'ink-900': '#111116',
        'ink-800': '#18181F',
        // Surfaces — cards, section bg
        'slate-card': '#1E1E27',
        'slate-border': 'rgba(255,255,255,0.07)',
        // Text
        'fog-50':  '#F8F8FA',
        'fog-100': '#EFEFF2',
        'fog-400': '#A0A0AE',
        'fog-600': '#6B6B7A',
        // Light section bg
        'paper': '#F4F4F6',
        'paper-dark': '#E8E8EC',
        // Accent — white-on-dark for CTAs
        'accent-white': '#FFFFFF',
        'rule': 'rgba(255,255,255,0.07)',
        'rule-light': 'rgba(0,0,0,0.07)',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.025em',
      },
      fontSize: {
        'display': ['clamp(3.5rem, 10vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-sm': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      },
    },
  },
  plugins: [],
};
