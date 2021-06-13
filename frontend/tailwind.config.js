module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.{jsx, js}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: '#23242B',
        lightGray: '#2C3034',
        lightBlue: '#788BFF',
        lightGreen: '#009F92',
        lightPink: '#E57F84',
        lightYellow: '#F3C269',
        lightRed: '#EB2525'
      },
      fontFamily: {
        sans: ['inter']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
