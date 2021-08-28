import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import resources from '../public/translations.csv'


i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'rus',
    lng        : 'eng',
    debug      : true,
  })

export default i18n
