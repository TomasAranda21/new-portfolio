/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {

      colors: {
        amarillo: '#FFEFAE',
        rosaClaro: '#FFC4A9',
        rosaOscuro: '#FA8D74',
        rojo: "#BE5944",
        rojoOscuro: "#670000",
        verdeoOscuro: "#62C8B7",
        verdeClaro: "#7AE4D9",
        grisAzulado: "#96B1AD",
      
      },

      fontFamily: {
        fontPrincipal: ['Inter', 'sans-serif'],
        fontSecundaria: ['Fira Code', 'monospace'],
        fontTitles: ['Mulish', 'sans-serif'],

      },

      fontSize: {
        '10xl': '13rem',
      }
    },
  },
  plugins: [],
}
