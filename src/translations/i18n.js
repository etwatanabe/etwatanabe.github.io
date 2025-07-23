import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './en.json';
import ptTranslation from './pt.json';

const savedLanguage = localStorage.getItem('i18nextLng');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      pt: {
        translation: ptTranslation
      }
    },
    lng: savedLanguage || 'en',
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
      cookieMinutes: 10080
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;