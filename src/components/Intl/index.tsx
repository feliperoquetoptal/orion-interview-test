import React from 'react';
import { IntlProvider } from 'react-intl';

import enTranslationMessages from './en.json';

export const languages = [
  { value: "en", label: { id: "settings.languages.english", defaultMessage: "English" } },
];

export const translationMessages = {
  en: enTranslationMessages,
} as Record<string, Record<string, string>>;

export const LanguageProvider = ({ children }: { children: React.ReactChild }): JSX.Element => {
  const locale = navigator.language;
  const validLocale = locale.split('-')[0];
  const localeMessages = translationMessages[validLocale];
  return (
    <IntlProvider key={validLocale} locale={validLocale} messages={localeMessages}>
      {children}
    </IntlProvider>
  );
};
