/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-img": "url('./assets/mainBg.png')",
      },
    },
  },
  plugins: [],
};
