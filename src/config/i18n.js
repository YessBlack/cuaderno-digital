import { initReactI18next } from 'react-i18next'
import {
  ALLOWED_LANGUAGES,
  ALLOWED_LANGUAGES_DEFAULT,
  ALLOWED_LANGUAGES_DATA
} from '../resources/i18n/constants'

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: Object.values(ALLOWED_LANGUAGES),
    fallbackLng: ALLOWED_LANGUAGES_DEFAULT,
    debug: false,

    resources: Object.fromEntries(
      Object.values(ALLOWED_LANGUAGES).map((lang) => [
        lang,
        { translation: ALLOWED_LANGUAGES_DATA[lang].translation }
      ])
    ),

    interpolation: {
      escapeValue: false
    },
    missingKeyHandler: (key, type, error) => {
      console.log('missingKeyHandler', key, type, error)
    }
  })

export default i18n
