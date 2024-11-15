/** @type {import('tailwindcss').Config} */
// Importation de fluid, le plugin de tailwind pour mieux gérer la responsivité
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract
},
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights),
    extend: {
      screens: {
        xs: '20rem'
      }
    }
  },
  plugins: [
    fluid
  ],
}

