module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lilac: "#C729F2",
      },
      maxWidth: {
        30: "30rem",
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
