/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'raleway': ['Raleway','sans-serif']
    },
    extend:{
      colors:{
        intro: 'hsl(var(--color-intro) / <alpha-value>)',
        main: 'hsl(var(--color-main) / <alpha-value>)',
        footer: 'hsl(var(--color-footer) / <alpha-value>)',
        testimonial: 'hsl(var(--color-testimonial) / <alpha-value>)',
        gradient1: 'hsl(var(--color-gradient1) / <alpha-value>)',
        gradient2: 'hsl(var(--color-gradient2) / <alpha-value>)',
        error: 'hsl(var(--color-error) / <alpha-value>)'
      },
      backgroundImage:{
        'mobile':"url('/src/assets/bg-curvy-mobile.svg')",
        'desktop':"url('/src/assets/bg-curvy-desktop.svg')"
      }
    }
  },
  plugins: [],
}