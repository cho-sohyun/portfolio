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
    },
  },
};
