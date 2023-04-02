export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  vite: {},
  css: ['vuetify/styles', '@/assets/css/tailwind.css', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
