/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        redtext: '#D03227',
        bggrey:'#F8F8F8',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}