/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        red255: "#FF0000",
        red251: "#FF0101",
        red230: "#E60000",
        grey: "#FBFBFB",
        darkGrey: "#282D30",
        lightGrey: "#74798C",
        lighterGrey: "#9B9EAC",
        blackBg: "#020203",
        blue: "#4AB8FF",
        yellow: "#FDCCOC",
        yellowBg: "#F9CE23",
        pink: "#FD5181",
      },
      boxShadow: {
        boxSha: "0 2px 4px rgba(0, 0, 0, 0.0212249)",
      },
    },
  },
  plugins: [],
};
