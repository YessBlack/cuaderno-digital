import enTranslation from './en-US/translation.json'
import esTranslation from './es-MX/translation.json'
import frTranslation from './fr-FR/translation.json'
import ptTranslation from './pt-BR/translation.json'

export const ALLOWED_LANGUAGES = {
  ES: 'es-MX',
  EN: 'en-US',
  FR: 'fr-FR',
  PT: 'pt-BR'
}

export const LANGUAGE_LABELS = {
  EN_US: 'English',
  ES_MX: 'Español',
  FR_FR: 'Français',
  PT_BR: 'Português'
}

export const ALLOWED_LANGUAGES_DEFAULT = ALLOWED_LANGUAGES.ES

export const ALLOWED_LANGUAGES_DATA = {
  [ALLOWED_LANGUAGES.ES]: {
    name: LANGUAGE_LABELS.ES_MX,
    translation: esTranslation,
    countryName: 'México'
  },
  [ALLOWED_LANGUAGES.EN]: {
    name: LANGUAGE_LABELS.EN_US,
    translation: enTranslation,
    countryName: 'United States'
  },
  [ALLOWED_LANGUAGES.FR]: {
    name: LANGUAGE_LABELS.FR_FR,
    translation: frTranslation,
    countryName: 'France'
  },
  [ALLOWED_LANGUAGES.PT]: {
    name: LANGUAGE_LABELS.PT_BR,
    translation: ptTranslation,
    countryName: 'Brazil'
  }
}
