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
        naraja: "#EAA664",
        rosaClaro: '#FFC4A9',
        rosaOscuro: '#FA8D74',
        rojo: "#BE5944",
        rojoOscuro: "#670000",
        verdeoOscuro: "#62C8B7",
        verdeClaro: "#7AE4D9",
        
        grisAzulado: "96B1AD",
        
        
        
        verdeClaro1: "#7EECCB",
        verdeClaro2: "#91F3B7",
        verdeClaro3: "#AEF89F",
        verdeClaro4: "#D1F986",
        azul1: "#36ADE4",
        azul2: "#628AD4",
        azul3: "#8864AF",
        azul4: "#993B79",
      
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
