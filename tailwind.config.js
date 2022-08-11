/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "1": "0.1rem",
      },
      colors: {
        "grey":"#F7F7F7"
      }
    },
  },
  plugins: [],
}
