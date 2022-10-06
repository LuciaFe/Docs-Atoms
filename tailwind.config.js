const toRem = (strs) => `${Number(strs[0].replace("px", "")) / 16}rem`
module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./node_modules/@atoms-studio/nuxt-components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      boxed: toRem`1440px`,
    },
    extend: {
      transitionProperty: {
        button: [
          "transform",
          "opacity",
          "color",
          "background-color",
          "border-color",
          "text-decoration-color",
          "fill",
          "stroke",
        ],
      },
      fontSize: {
        "large-button": toRem`24px`,
        "small-button": toRem`14px`,
      },
    },
  },
  plugins: [],
}
