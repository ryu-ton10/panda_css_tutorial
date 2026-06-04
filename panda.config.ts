import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          red: {
            value: "#ff0000",
          },
          blue: {
            value: "#0000ff",
          },
          green: {
            value: "#00ff00",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
