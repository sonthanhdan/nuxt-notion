/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
 
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        "medium-quote": ["source-serif-pro", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        "medium-paragraph": ["source-serif-pro", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(10px)" },
          "20%": { transform: "translateX(0px)" },
          "30%": { transform: "translateX(10px)" },
          "40%": { transform: "translateX(0px)" },
        },
      },
      colors: {
        muted: '#74808b'
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}
