/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  themes: ["pastel", "coffee"],
  // themes: true,
  // themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  darkTheme: "coffee", // name of one of the included themes for dark mode
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  themeRoot: "*"
}

