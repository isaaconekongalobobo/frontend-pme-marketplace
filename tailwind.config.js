/** @type {import('tailwindcss').Config} */
// Importation du plugin fluid
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
export default {
  content: {
    files: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extract
  } ,
  theme: {
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    extend: {
      screens: {
        xs: '20rem'
      }
    },
    colors: {
      'main-yellow': '#EEB740',
      'black': '#000000',
      'white': '#ffffff',
      'black-marroon' : '#2B2A28',
      'gray': '#D9D9D9',
      'transparant': 'transparent'
    }
  },
  plugins: [
    fluid,
  ],
}

