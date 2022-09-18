/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
      // 'red-light': '#FF8484',
      // 'smoke': 'rgba(107, 114, 128, 0.75)',
      // 'white': '#FFFFFF',
      // 'blue': '#3B82F6',
      // 'teal': '#0D9488',
      // 'gray': 'gray'
    // }
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}