/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: '#B9FF66',
        },
        dark: {
          DEFAULT: '#191A23',
        },
        gray: {
          light: '#F3F3F3',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-primeui')]
}
