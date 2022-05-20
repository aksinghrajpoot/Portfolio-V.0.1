module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      fontFamily: {
        primary: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "rgb(124,58,237)",
        current: "currentColor",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
