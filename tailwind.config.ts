import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1f44',
          dark: '#060f22',
          light: '#122857',
        },
        sky: {
          brand: '#38bdf8',
          dark: '#0ea5e9',
          light: '#7dd3fc',
        },
        flame: {
          DEFAULT: '#e84c1b',
          dark: '#c43d13',
          light: '#f4743e',
        },
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'Barlow Condensed', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      boxShadow: {
        navy: '0 4px 24px 0 rgba(10,31,68,0.35), 0 1px 4px 0 rgba(10,31,68,0.18)',
        flame: '0 4px 20px 0 rgba(232,76,27,0.4), 0 2px 6px 0 rgba(232,76,27,0.2)',
        sky: '0 4px 20px 0 rgba(56,189,248,0.3), 0 1px 4px 0 rgba(56,189,248,0.15)',
        card: '0 2px 16px 0 rgba(10,31,68,0.12), 0 1px 4px 0 rgba(10,31,68,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
