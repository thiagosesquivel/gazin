const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      yellow: colors.yellow,
      blue: colors.blue,
      blueGray: colors.blueGray,
      red:colors.red,
      indigo:colors.indigo,
      green: colors.green,
      purple: colors.purple,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      warmGray:colors.warmGray,
      gray: colors.gray,

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
