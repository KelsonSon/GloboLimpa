// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'

// Vuetify
import { createVuetify } from 'vuetify'


export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
      },
    },
    theme:{
      themes:{
        light: {
          dark: false,
          colors:{
            primary: '#2083AD',
            secondary: '#1F92BF',
            tertiary: '#728C3B',
            white: '#f2f2f2',
            teste : '#344A72',
            teste2 : '#435B8B',
            nova: 'rgba(242, 242, 242, 0.25)',
            branco: '#ffffff'
          }
        }
      }
    }
  }
)
