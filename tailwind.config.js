/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        Mycolors: {
          'color-one': '#c1a300',
          'color-two': '#d1c59c',
          'mywhite': '#FFFFFF',
          'myblack': '#000000',
          'mybrown': '#261709'
        }
      }
    },
  },
  plugins: [],

 
}