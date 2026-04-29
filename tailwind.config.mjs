/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#050507',
        surface: 'rgba(255,255,255,0.03)',
        'surface-hover': 'rgba(255,255,255,0.05)',
        border: 'rgba(255,255,255,0.06)',
        'border-hover': 'rgba(255,255,255,0.1)',
        primary: '#6366f1',
        secondary: '#a855f7',
        accent: '#ec4899',
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        text: {
          primary: '#f1f5f9',
          secondary: '#64748b',
          muted: '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
        'primary-gradient-soft':
          'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.15) 50%, rgba(236,72,153,0.15) 100%)',
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '16px',
        btn: '12px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
