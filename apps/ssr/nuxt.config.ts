import { themeOptions } from './app/assets/themes/my-theme/theme';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Projeto RPG',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Plataforma incrível desenvolvida com Nuxt 4 e Vue Prime.' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
  ],

  primevue: {
    options: {
      theme: themeOptions
    }
  },

  components: [
    {
      path: '~/domains/landing/components',
      prefix: 'Landing'
    }
  ],

  css: [
    '~/assets/styles.scss',
    '~/assets/tailwind.css',
    '~/assets/css/main.css'
  ],

  vite: {
    server: {
      fs: {
        allow: [
          '/home/fsm/Área de trabalho/projetos/projeto-rpg/vue-prime-base'
        ]
      }
    }
  }
})
