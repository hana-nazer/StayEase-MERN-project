/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'sandy-beige': '#b88364',
          'dark-green':"#586B53",
          'white-smoke':"#f5f2ce",
          'custom-gray': '#33442F',
        },
      },
    },
    plugins: [],
  }