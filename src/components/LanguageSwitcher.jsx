import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="flex items-center bg-gray-900/50 border border-gray-700 rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-colors duration-300 ${
            i18n.resolvedLanguage === lang.code
              ? 'bg-brand-blue text-white'
              : 'text-gray-400 hover:text-white'
          }`}
          aria-label={`Change language to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;