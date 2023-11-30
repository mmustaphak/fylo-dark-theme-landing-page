/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mobile-curve':"url('./src/assets/bg-curvy-mobile.svg')",
        'desktop-curve':"url('./src/assets/bg-curvy-desktop.svg')"
      },
      fontFamily:{
        'raleway':['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}