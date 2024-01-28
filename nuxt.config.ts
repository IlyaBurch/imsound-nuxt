// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    "@pinia/nuxt", 'nuxt-swiper', 'nuxt-primevue',
  ],
  primevue: {},
  swiper: {},
  // ssr: true,
  // runtimeConfig: {
  //   apiSecret: 'process.env.API_BASE_URL', // can be overridden by NUXT_API_SECRET environment variable
  //   public: {
  //     apiBase: 'process.env.API_BASE_URL', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
  //   }
  // },
})