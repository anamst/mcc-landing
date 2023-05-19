/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      headlines: ['Jura', 'sans-serif'],
      regular: ['Plus Jakarta Sans', 'sans-serif']
    }, colors: {
      "white": "#ffffff",
      "black": "#000000",
      "yellow": "#FFCC00",
      "form-bg": "#FFFFCF"
    },
    fontSize: {
      "xs": "0.5rem",
      "sm": "1rem",
      "base": "1.5rem",
      "md": "2.25rem",
      "lg": "2.75rem",
      "xl": "4rem",
      "2xl": "6rem"
    },
    extend: {},
  },
  plugins: [],
}

