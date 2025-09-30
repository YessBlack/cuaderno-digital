const fs = require('fs')
const path = require('path')

module.exports = {
  input: './src/**/*.{js,jsx}',
  output: './src/resources',
  options: {
    debug: true,
    func: {
      list: ['t'], // buscar t('key')
      extensions: ['.js', '.jsx']
    },
    trans: {
      component: 'Trans', // <Trans>...</Trans>
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx'],
      fallbackKey: (ns, value) => value,
      acorn: {
        ecmaVersion: 11,
        sourceType: 'module'
      }
    },
    lngs: ['es-MX', 'en-US', 'pt-BR', 'fr-FR'],
    defaultLng: 'es-MX',
    defaultValue: (lng, ns, key) => {
      const translationFilePath = path.resolve(
        __dirname,
        `src/resources/i18n/${lng}/translation.json`
      )

      let translations = {}
      if (fs.existsSync(translationFilePath)) {
        const translationFileContent = fs.readFileSync(
          translationFilePath,
          'utf8'
        )
        translations = translationFileContent ? JSON.parse(translationFileContent) : {}
      }

      return (
        translations[key] ||
        (lng === 'es-MX' ? key : 'MISSING_TRANSLATION')
      )
    },
    resource: {
      loadPath: 'i18n/{{lng}}/{{ns}}.json',
      savePath: 'i18n/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n'
    },
    nsSeparator: false,
    keySeparator: false,
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  }
}
