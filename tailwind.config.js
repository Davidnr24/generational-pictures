/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        'max': '2000px',
      },
      minHeight: {
        'min': '500px',
      },
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cairoPlay: ["Cairo Play", "sans-serif"],
        notoSans: ["Noto Sans", "sans-serif"]
      },
      colors: {
        'logo': {
          DEFAULT: '#711AAE',
          'main': '#7000ff',
          'second': '#00d397',
          'secondDark': '#00845e',
          'light': '#9faeb7',
          'secLight': '#bff4e5',
          'white': '#ffffff',
          'black': '#2F012E'
        },
        'colorBar':{
          'white': '#c0c0c0',
          'yellow': '#c0c000',
          'blueLight': '#00c0c0',
          'green': '#00c000',
          'purple': '#c000c0',
          'red': '#c00000',
          'blueDark': '#0000c0'
        }
      },
      borderColors:{
        'logo': {
          DEFAULT: '#00283f',
          'main': '#00283e',
          'second': '#00d397',
          'light': '#9faeb7',
          'secLight': '#bff4e5',
          'white': '#ffffff'
        }
      },
    },
    screens: {
      //mobile
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      //tablet
      'md': '750px',
      // => @media (min-width: 768px) { ... }

      //small laptops
      'lg': '1000px',
      // => @media (min-width: 1024px) { ... }

      //big laptops
      'xl': '1500px',
      // => @media (min-width: 1280px) { ... }

      //monitors
      '2xl': '2000px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}

