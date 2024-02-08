/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    /* colors: {
      "morado": {
        50: "#F7F0FE",
        100: "#F1E7FE",
        200: "#E3CEFD",
        300: "#D5B6FC",
        400: "#C79EFA",
        500: "#B985F9",
        600: "#AC6DF8",
        700: "#9E54F7",
        800: "#640AD2",
        900: "#33056B",
        950: "#190236"
      }
    } */
  },
  themes: ["pastel", "coffee", /* {
    mytheme: {
      "primary": "#5900ff",
      "secondary": "#946400",
      "accent": "#009a00",
      "neutral": "#2b2027",
      "base-100": "#fcfcfc",
      "info": "#0084d8",
      "success": "#00f6b7",
      "warning": "#ff9500",
      "error": "#ef4444"
    },
  } */],
  // themes: true,
  // themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  darkTheme: "coffee", // name of one of the included themes for dark mode
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  themeRoot: "*"
}

