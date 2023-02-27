/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.4rem',
    },
    extend: {
      colors: {
        "primary-light": "#B03945",
        "primary-dark": "#a82d49",
        "secondary": "#43131C",
        "custom-white": "#FFFEFE"
      }
    },
  },
  plugins: [],
};