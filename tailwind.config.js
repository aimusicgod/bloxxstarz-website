/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#00E89A',
          purple: '#BDB8F8',
          pink: '#FF2D78',
          gold: '#FFD700',
          orange: '#FF6B35',
        }
      }
    },
  },
  plugins: [],
}
