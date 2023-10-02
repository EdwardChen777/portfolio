/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#00040f",
        primary: "#33333E",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        testGreen: "#64ffda",
        other: "#8892b0",
        header4: "#ccd6f6",
        focusBG: "#3D3C5C",
        hoverGreen: "#3D955D",
        dimExp: "#8892b0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      borderRadius: {
        extraLarge: '12rem'
      },
      gridTemplateColumns: {
        'projects': 'repeat(auto-fill, minmax(450px, 1fr))',
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};