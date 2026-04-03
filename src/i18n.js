import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enRes from './i18n/en.json';
import thRes from './i18n/th.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enRes },
      th: { translation: thRes }
    },
    lng: 'th', // ภาษาเริ่มต้น
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;