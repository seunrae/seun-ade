/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'widescreen':{'raw':'(min-aspect-ratio: 3/2)'},
        'tailscreen':{'raw':'(max-aspect-ration: 13/20)'}
      }
    },
  },
  plugins: [],
}

