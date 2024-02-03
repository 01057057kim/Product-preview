/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors:{
        'd-cyan':'hsl(158, 36%, 37%)',
        'd-d-cyan':'hsl(158, 36%, 23%)',
        'cream':'hsl(30, 38%, 92%)',
        'v-d-blue':'hsl(212, 21%, 14%)',
        'd-g-blue':'hsl(228, 12%, 48%)',
        'white':'hsl(0, 0%, 100%)',
      },
      fontFamily:{
        'fraunces':'Fraunces , serif',
        'montserrat':'Montserrat , sans-serif'
      }
    },
  },
  plugins: [],
}
