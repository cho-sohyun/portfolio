/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['NanumSquareNeoLight','NanumSquareNeo','NanumSquareNeoBold','NanumSquareNeoExtraBold','NanumSquareNeoHeavy','NanumSquareNeoVariable', 'sans-serif'], 
      },
    },
  },
};
