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
        slider_bar_l: '#FF5C01',
        slider_bar_r: '#FFD25F',
      },
      spacing: {
        navbar_desktop_w: '5.7vw',
      },
      maxWidth: {
        navbar_desktop_w: '5.7vw',
      },
      screens: {
        follower: '1440px',
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
