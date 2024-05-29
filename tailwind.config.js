/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ["Inter", 'sans-serif'],
        'lobster':  ["Lobster", 'sans-serif'],
        'comfortaa':  ["Comfortaa", 'sans-serif']
      },
      colors:{
        'green-7': '#334646',
        'green-6': '#638889',
        'green-5': '#9DBC98',
        'green-4': '#99BC85',
        'green-3': '#BFD8AF',
        'green-2': '#D4E7C5',
        'green-1': '#E1F0DA',
        'beige-2': '#EBD9B4',
        'beige-1': '#F9EFDB'
      }
    },
  },
  plugins: [],
}
