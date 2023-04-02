export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  vite: {},
  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
});
