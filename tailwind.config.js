/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto' : ['Roboto', 'sans-serif'],
       'imperial' : ['Imperial Script', 'cursive'],
      }
    },
  },
  plugins: [require("daisyui")],
}

