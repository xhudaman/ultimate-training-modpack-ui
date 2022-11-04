/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("group-hocus", [
        ":merge(.group):focus &",
        ":merge(.group):hover &",
      ]);
    }),
  ],
  corePlugins: {
    backgroundOpacity: false,
    textOpacity: false,
  },
};
