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
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(10px)" },
          "20%": { transform: "translateX(0px)" },
          "30%": { transform: "translateX(10px)" },
          "40%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
}
