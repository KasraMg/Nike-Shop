/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "500px" },
      sm: { max: "767px" },
      md: { max: "900px" },
      lg: { max: "1200px" },
    },
    fontFamily: {
      playpen: "playpen",
    },
    extend: {},
  },
  plugins: [],
};
