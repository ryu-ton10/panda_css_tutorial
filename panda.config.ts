import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  layers: {
    "recipes": "panda_recipes",
    "utilities": "panda_utilities",
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          red: {
            value: "#ff0000",
          },
        },
      },
    },
  },

  themes: {
    primary: {
      tokens: {
        colors: {
          text: { value: "red" }
        }
      },
      semanticTokens: {
        colors: {
          muted: { value: "{colors.red.200}" },
          body: {
            value: {
              base: "{colors.red.600}",
              _osDark: "{colors.red.400}"
            }
          }
        }
      }
    },
    secondary: {
      tokens: {
        colors: {
          text: { value: "blue" }
        }
      },
      semanticTokens: {
        colors: {
          muted: { value: "{colors.blue.200}" },
          body: {
            value: {
              base: "{colors.blue.600}",
              _osDark: "{colors.blue.400}"
            }
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});