import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        keyframes: {
            glow: {
              '0%, 100%': {
                boxShadow: '0 0 8px 4px rgba(59,130,246,0.4)', // light blue
              },
              '50%': {
                boxShadow: '0 0 24px 10px rgba(59,130,246,0.8)', // brighter blue glow
              },
            },
          },
          animation: {
            glow: 'glow 2s ease-in-out infinite',
          }
          ,
    },
  },
  plugins: [],
}

export default config
