/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        FF_Mark_W05_Bold: ['FF_Mark_W05_Bold', 'sans-serif'],
        FF_Mark_W05: ['FF_Mark_W05', 'sans-serif'],
        FF_Mark_W05_Thin: ['FF_Mark_W05_Thin', 'sans-serif'],
        Beaufort_for_LOL: ['Beaufort_for_LOL', 'sans-serif'],
        Spiegel: ['Spiegel', 'sans-serif'],
        Proxima: ['Proxima', 'sans-serif'],
      },
      colors: {
        LolGold: 'rgb(208, 168, 92)',
        lolGray: 'rgb(41, 41, 41)',
      }
    },
  },
  plugins: [],
}
