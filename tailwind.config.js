/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'forest': {
        100 : '#eaf2ef',
        200 : '#b2c9c1',
        300 : '#7ca093',
        400 : '#517b6c',
        500 : '#385d50',
        600 : '#1c362d',
        700 : '#0f261e',
        800 : '#061812',
        900 : '#010c08',
      },
      'soil': {
        100 : '#faf6f5',
        200 : '#f2eeeb',
        300 : '#eae6e3',
        400 : '#e9e2dd',
        500 : '#e8d7cc',
      },
      'fluorange': {
        500 : '#FD5F00'
      }
    },
    extend: {
      fontFamily: {
        'display' : ['NaNSuccessTitling'],
        'sans' : ['SuisseIntl', 'serif']
      }
    },
  },
  plugins: [],
}
