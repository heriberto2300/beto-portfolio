import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ttcommon: ['var(--font-ttcommons)']
      },
      colors: {
        materialGray: '#D4D4D4',
        materialCream: '#F9F2ED',
        materialBlue: '#C9D6E9',
        materialDarkGray: '#838383',
      },
      boxShadow: {
        cardShadow: 'rgba(191, 180, 140, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
      },
      keyframes: {
        spinReverse: {
          from: {
            transform: 'rotate(360deg)'
          },
          to: {
            transform: 'rotate(0deg)',
          }
        },
        tick: {
          '75%, 100%': {
            opacity: '0',
          }
        }
      },
      
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-slow-reverse': 'spinReverse 15s linear infinite',
        'tick': 'tick 2s cubic-bezier(0, 0, 0.2, 1) infinite'
      }
    },

  },
  plugins: [],
};
export default config;
