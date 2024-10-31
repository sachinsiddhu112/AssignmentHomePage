/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': 'rgba(12, 15, 17, 1)'
        
      },
      backgroundImage: {
        'heroBg': "url('/src/assets/bgcopy.png')",
        'background2':"url('/src/assets/background2.png')"
      }
    },
  },
  plugins: [],
}