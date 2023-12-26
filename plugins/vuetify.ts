import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          colors: {
              primary: '#150E00'
          }
        }
      }
  }
  })
  app.vueApp.use(vuetify)
})