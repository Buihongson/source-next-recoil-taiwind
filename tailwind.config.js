module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: {
        100: 'blue',
        900: 'red',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
