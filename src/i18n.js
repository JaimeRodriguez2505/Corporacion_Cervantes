import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa aquí tus archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(LanguageDetector) // Detecta el idioma del usuario
  .use(initReactI18next) // Pasa la instancia de i18n a react-i18next.
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si la detección falla
    debug: false, // Ponlo en 'false' para producción

    interpolation: {
      escapeValue: false, // React ya se encarga de la protección contra XSS
    },
  });

export default i18n;