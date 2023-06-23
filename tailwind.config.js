/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'green': '#50EFC0',
      'grey' : '#A6A6A6',
      'grey1': '#353535',
      
    }
  },
  plugins: [require("daisyui")],
}

