/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  purge: ['./public/index.html'],
  theme: {
    extend: {},
    colors: {
      primaryGradientFrom: 'hsl(249, 99%, 64%)',
      primaryGradientTo: 'hsl(278, 94%, 30%)',
      error: 'hsl(0, 100%, 66%)',
      lightGrayishViolet: 'hsl(270, 3%, 87%)',
      darkGrayishViolet: 'hsl(279, 6%, 55%)',
      veryDarkViolet: 'hsl(278, 68%, 11%)',
      white: 'hsl(0, 100%, 100%)',
      noColor: 'hsla(0, 0%, 0%, 0)',
    },
    fontWeight: {
      500: '500',
    },
  },
  plugins: [],
};
