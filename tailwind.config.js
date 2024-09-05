/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '412px',
      // => @media (min-width: 412px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024',
      // => @media (min-width: 1024px) { ... }
  },
    extend: {},
  },
  plugins: [],
}

