/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Components
import { VDataTableServer } from 'vuetify/labs/VDataTable'

import { zhHant } from 'vuetify/locale'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VDataTableServer,
    Swiper,
    SwiperSlide
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6'
        }
      }
    }
  },
  locale: {
    locale: 'zhHant',
    messages: { zhHant }
  }
})
