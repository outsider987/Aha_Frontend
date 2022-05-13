module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        greyscale: '#181818',
        navbar: '#1B1B1B',
        navBarUnFocusBlue: '#00D1FF',
        inputFcous: '#FF9B33',
      },
      spacing: {
        navbar_desktop_w: '5.7vw',
      },
      maxWidth: {
        navbar_desktop_w: '5.7vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
