import { createI18n } from 'vue-i18n'
const userLanguage = navigator.language || navigator.userLanguage;
const defaultLang = 'zh_TW';


function loadLocaleMessages() {
  const locales = import.meta.globEager('./locales/*.json')
  const messages = {}
  Object.keys(locales).forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales[key].default
    }
  })
  return messages
}

export default createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") || defaultLang,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || defaultLang,
  messages: loadLocaleMessages()
})
