/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        border: "rgba(0, 0, 0, 0.1)",
        background: "white",
        foreground: "black",
        muted: "rgba(0, 0, 0, 0.04)",
        primary: "#ff5941",
      },
      animation: {
        "background-gradient": "background-gradient 15s linear infinite",
      },
      keyframes: {
        "background-gradient": {
          "0%, 100%": {
            transform:
              "translate(var(--tx-1, 0), var(--ty-1, 0))",
          },
          "25%": {
            transform:
              "translate(var(--tx-2, 0), var(--ty-2, 0))",
          },
          "50%": {
            transform:
              "translate(var(--tx-3, 0), var(--ty-3, 0))",
          },
          "75%": {
            transform:
              "translate(var(--tx-4, 0), var(--ty-4, 0))",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 