module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false,
  theme: {
    fontFamily: { scada: ["Scada", "sans-serif"] },
    extend: {
      transform: ["hover", "focus"],

      borderStyle: ["hover"],
    },
  },
  variants: {
    theme: {
      extend: {
        transitionProperty: {
          scale: "height,width",
          spacing: "margin, padding",
        },
      },
    },
  },
  plugins: [],
};
