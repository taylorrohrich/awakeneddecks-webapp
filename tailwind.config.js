/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/helpers/cva.ts",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        grow: "grow 1s ease-in-out infinite",
      },
      keyframes: {
        grow: {
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      spacing: {
        screenBody: "calc(100vh - 6rem)",
        contentBody: "calc(100vh - 12rem)",
      },
      colors: {
        quill: "#5c4739",
        parchment: "#e0d4bc",
        mythic: "#373e56",
        dark: "#d4e7c1",
        legendary: "#f6de69",
        epic: "#6e2c7f",
        rare: "#5f7f7d",
        common: "#635d4b",
        gryffindorRed: {
          50: "#ffe3e3",
          100: "#ffc4c4",
          200: "#ff9a9a",
          300: "#ff6e6e",
          400: "#ff4040",
          500: "#ff1818",
          600: "#e30000",
          700: "#b10000",
          800: "#810000",
          900: "#5e0000",
        },
        slytherinGreen: {
          50: "#e8faf1",
          100: "#c5f4de",
          200: "#97e6c6",
          300: "#6acdb0",
          400: "#47b99e",
          500: "#2d9e8e",
          600: "#1f7a7b",
          700: "#12575a",
          800: "#083639",
          900: "#001c1e",
        },
        hufflepuffYellow: {
          50: "#fef9e6",
          100: "#fdf1c1",
          200: "#fbe788",
          300: "#f9d649",
          400: "#f8c22c",
          500: "#f6b30f",
          600: "#d99700",
          700: "#b97a00",
          800: "#975d00",
          900: "#754000",
        },
        ravenclawSilver: {
          50: "#f7f7f7",
          100: "#e5e5e5",
          200: "#ccc",
          300: "#adadad",
          400: "#919191",
          500: "#787878",
          600: "#606060",
          700: "#484848",
          800: "#303030",
          900: "#1a1a1a",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};