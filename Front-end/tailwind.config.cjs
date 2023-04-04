/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#0F9B8E",
        background: "#343837"
      },
      fontFamily: {
        "sans": "Roboto, sans-serif",
        "title":"Oswald, sans-serif" 
      }
    },
  },
  plugins: [],
}
