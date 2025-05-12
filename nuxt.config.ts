// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/styles/main.scss'],
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Noto+Sans:wght@400;700&display=swap" }
      ]
    }
  }

})
