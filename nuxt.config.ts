import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    renderJsonPayloads: false
  },

  build: {
    transpile: ['vuetify'],
  },

  runtimeConfig: {
    public: {
      API: process.env.API || 'https://nest.avei.ovh',
    }
  },

  modules: [
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify({ autoImport: true}))
      })
    },
  ],

  pinia: {
    storesDirs: ['./stores/**'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      }
    }
  },

  nitro: {
    preset: 'bun'
  },

  devtools: {
    enabled: process.env.NODE_ENV === 'development' ? true : false,

    timeline: {
      enabled: true
    }
  }
})