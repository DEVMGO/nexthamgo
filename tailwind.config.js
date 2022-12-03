module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgNavHome: 'rgba(38, 43, 62, 0.5)',
      },
      screens: {
        res1: "1410px",
        res2: "1230px",
        res3: {'max': '640px'},
        res4: {'max': '700px'},
        res5: {'max': '900px'},
      },
      boxShadow: {
        normal: "0px 0px 10px 0px rgba(0, 0, 0, .2)",
      },
    },
  },
  plugins: [],
}
