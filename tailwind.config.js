/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: {
          900: '#FAFAFA',
          700: '#E4E5F1',
          500: '#CACDE8',
        },
        gray: {
          900: '#161722',
          700: '#25273C',
        },
        zinc: {
          500: '#777A92',
          600: '#9394A5',
          700: '#484B6A',
          800: '#4D5066',
          900: '#393A4C',
          /*
         Check Background '#57DDFF': '#C058F3'
         Bright Blue:
         */
        },
      },
    },
    plugins: [],
  },
}
