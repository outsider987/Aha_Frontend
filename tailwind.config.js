module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      greyscale: '#181818',
      navbar: '#1B1B1B',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
