module.exports = {
  purge: [
  './resources/**/*.blade.php',
  './resources/**/*.js',
  './resources/**/*.vue',
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center:true,
        padding: "1rem",
        screen:{
          lg:"1124px",
          xl:"1124px",
          "2xl":"1124px",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
