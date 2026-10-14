/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090909',
        'background-secondary': '#121212',
        'card-bg': '#191919',
        'card-hover': '#222222',
        'primary-text': '#F5F5F5',
        'secondary-text': '#A1A1AA',
        accent: {
          DEFAULT: '#D6FF3F',
          hover: '#C4EC33',
          muted: 'rgba(214, 255, 63, 0.12)',
          border: 'rgba(214, 255, 63, 0.4)',
        },
        border: 'rgba(255, 255, 255, 0.10)',
        'border-strong': 'rgba(255, 255, 255, 0.18)',
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        ultra: '0.3em',
      },
      boxShadow: {
        'accent-glow': '0 0 35px -5px rgba(214, 255, 63, 0.3)',
        'accent-glow-sm': '0 0 15px -3px rgba(214, 255, 63, 0.25)',
      }
    },
  },
  plugins: [],
}
