// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      link: [],
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'description',
          content: 'descrição'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      title: 'Titulo'
    }
  },

  devtools: { enabled: true },

  css: ['~/assets/style/main.scss']
});
