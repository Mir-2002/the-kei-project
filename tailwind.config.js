/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        message: ["Shadows Into Light", "sans-serif"],
        main: ["Sour Gummy", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
