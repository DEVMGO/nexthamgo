/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgNav: 'linear-gradient(74deg, rgba(16,46,70,1) 0%, rgba(22,105,122,1) 47%, rgba(16,46,70,1) 100%)',
        orangeHamgo: '#ffa62b',
        bgNavHome: 'rgba(38, 43, 62, 0.5)',
        borderNav: 'rgba(255, 255, 255, 0.2)',
        blueHamgo: '#16697a',
        bluelight: 'rgb(5, 119, 175)',
        courseBlue1: '#128391',
        courseBlue2: '#3bbdc6',
        courseRed: '#d81159',
        courseYellow: '#ffce1f',
        black33: '#333',
        black44: '#444',
        black66: '#666',
        black99: '#999',
        bgDataHamgo: 'rgba(255, 255, 255, 0.126)',
      },
      screens: {
        res1: "1410px",
        res2: "1230px",
        res3: {'max': '640px'},
        res4: {'max': '700px'},
        res5: {'max': '900px'},
        res6: {'max': '1000px'},
        res7: {'max': '1200px'},
      },
      padding: {
        foter: 'clamp(1rem, 4vw, 4rem)',
      },
      gridTemplateColumns: {
        16: "repeat(auto-fit, minmax(150px, 1fr))",
        17: "repeat(auto-fit, minmax(160px, 1fr))",
        18: "repeat(auto-fit, minmax(200px, 1fr))",
        19: "repeat(auto-fit, minmax(250px, 1fr))",
        20: "repeat(auto-fit, minmax(270px, 1fr))",
        21: "repeat(auto-fit, minmax(280px, 1fr))",
      },
      borderRadius: {
        bgCours1: '70% 30% 44% 56% / 41% 44% 56% 59%',
        bgCours2: '71% 29% 36% 64% / 47% 49% 51% 53%',
        bgCours3: '40% 60% 67% 33% / 47% 36% 64% 53%',
        bgCours4: '30% 70% 67% 33% / 30% 30% 70% 70%',
      }
    },
  },
  plugins: [],
}
