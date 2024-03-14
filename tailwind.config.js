/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        logoFont : ['Flix', "sans-serif"],
        // How to override default font, karena pakek sans, jadinya yaudah di override aja si variable sans nya
        // Documentation https://stackoverflow.com/questions/60692794/can-you-change-the-base-font-family-in-tailwind-config
        sans : ['Inter', "sans-serif"]
      },
      colors: {
        'blue': '#1fb6ff',
        'secondary' : '#908B83',
        'primary' : '#EB5E28'
        
      },
    
    },
  },
  plugins: [],
}

