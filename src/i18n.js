import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    home: 'Home',
    about: 'About Me',
    portfolio: 'Portfolio',
    contact: 'Contact',
    welcome: 'Welcome.',
    email: 'Email',
  },
  id: {
    home: 'Beranda',
    about: 'Tentang Saya',
    portfolio: 'Portfolio',
    contact: 'Kontak',
    welcome: 'Selamat datang.',
    email: 'Surel',
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n