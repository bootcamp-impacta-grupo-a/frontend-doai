/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        corfonte: '#2D3854'
      },
      fontFamily:{
        texto: [ 'Nunito']
      }

    },
  },
  plugins: [],
}
