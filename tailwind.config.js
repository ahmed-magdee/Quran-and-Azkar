/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html,js}", "./js/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        main: "#baa600",
        second: "#4f4b29",
      },
      container: {
        padding: "15px",
      },
      screens: {
        headerScreen: { max: "767px" },
      },
      animation: {
        "spin-fast": "0.5s spin linear infinite",
        "rotate-img": "0.5s rotate-img linear",
      },
      boxShadow: {
        box: "0px 8px 20px 0px #4f4b29",
        icon: "0px 10px 15px 0px #4f4b29",
      },
    },
  },
  plugins: [],
};
