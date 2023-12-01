/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main: 'hsl(var(--blue-main)/ <alpha-value>)',
        footer: 'hsl(var(--blue-footer)/ <alpha-value>)',
        testimonial: 'hsl(var(--blue-testimonial)/ <alpha-value>)',
        intro: 'hsl(var(--blue-intro)/ <alpha-value>)',
        'call-to-action-gradient1': 'hsl(var(--call-to-action-gradient1)/ <alpha-value>)',
        'call-to-action-gradient2': 'hsl(var(--call-to-action-gradient2)/ <alpha-value>)'
      },
      backgroundImage:{
        'mobile-curve':"url('./src/assets/bg-curvy-mobile.svg')",
        'desktop-curve':"url('./src/assets/bg-curvy-desktop.svg')"
      },
      fontFamily:{
        'raleway':['Raleway', 'sans-serif'],
        'open_san':['"Open Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}