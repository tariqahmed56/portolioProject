/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '128': '32rem',
      },
      colors:{
        blueviolet: {
          500: '#8A2BE2',
          700: '#5E217D',
        },

      }
    },
  },
  plugins: [],
}

