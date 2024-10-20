/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "NanumSquareNeoLight",
          "NanumSquareNeo",
          "NanumSquareNeoBold",
          "NanumSquareNeoExtraBold",
          "NanumSquareNeoHeavy",
          "NanumSquareNeoVariable",
          "sans-serif",
        ],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        extrabold: 800,
        900: 900,
      },
    },
  },
};
