import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2366EB",
          light: "#F0F1FF",
        },
        // gray: "hsla(0, 0%, 100%, 1)",
        darkGray: "hsla(0, 0%, 20%, 1)",
        yellow: "hsla(45, 97%, 50%, 1)",
        lightBlue: "hsla(220, 83%, 53%, 0.1)",
        glassmorphism: "rgba(255, 255, 255, 0.60)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
