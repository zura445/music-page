/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FA7453",
        sky: "#66E2DC",
        lightOrange: "#FFB964",
      },
    },
  },
  plugins: [],
};
