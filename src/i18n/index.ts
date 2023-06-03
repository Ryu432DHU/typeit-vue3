import { createI18n } from 'vue-i18n'

const messages = {
  ja: {
    home: {
      rankings: "ランキング"
    }
  },
  en: {
    home: {
      rankings: "Rankings"
    }
  }
}

export const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages: messages
})