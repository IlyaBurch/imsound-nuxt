// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    "@pinia/nuxt", 'nuxt-swiper', 'nuxt-primevue',
  ],
  primevue: {},
  swiper: {},
  ssr: true
})