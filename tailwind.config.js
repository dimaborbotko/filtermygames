/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-img": "url('./assets/mainBg.png')",
      },
      boxShadow: {
        "main-box": "0 2px 10px -1px rgb(0 0 0 / 0.40)",
        "inner-bar": "inset 0 -2px 2px 2px rgb(0 0 0 / 0.25)",
      },

      colors: {
        "active-link": "#558582",
      },
    },
  },
  plugins: [],
};
