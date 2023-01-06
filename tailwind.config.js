/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F9F5EA',
          200: '#F5B700',
        },
        secundary: {
          100: '#37AFB9',
          200: '#319098',
        },
        terciary: {
          100: '#665446',
          200: '#563319',
        },
      },
    },
  },
  plugins: [],
};
