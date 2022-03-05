module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'first-color': '#66806A',
        'second-color': '#B4C6A6',
        'third-color': '#FFC286',
        'fourth-color': '#FFF1AF'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
