import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: 'rgb(201 168 76 / <alpha-value>)',
        'gold-light': 'rgb(232 212 139 / <alpha-value>)',
        'gold-dark': 'rgb(160 126 46 / <alpha-value>)',
        charcoal: 'rgb(26 26 26 / <alpha-value>)',
        dark: 'rgb(13 13 13 / <alpha-value>)',
        cream: 'rgb(253 248 240 / <alpha-value>)',
        ivory: 'rgb(250 250 245 / <alpha-value>)',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9a84c, #e8d48b)',
      },
      boxShadow: {
        'gold-glow': '0 0 50px rgba(201, 168, 76, 0.3)',
        'gold-glow-lg': '0 0 100px rgba(201, 168, 76, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
