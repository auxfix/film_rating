/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const addLocaleData = require('react-intl').addLocaleData;
const enLocaleData = require('react-intl/locale-data/en');
const ruLocaleData = require('react-intl/locale-data/ru');

const enTranslationMessages = require('./translations/en.json');
const ruTranslationMessages = require('./translations/ru.json');

addLocaleData(enLocaleData);
addLocaleData(ruLocaleData);

export const DEFAULT_LOCALE = 'en';

// prettier-ignore
export const appLocales = [
  'en',
  'ru',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return { ...formattedMessages, [key]: formattedMessage };
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  ru: formatTranslationMessages('ru', ruTranslationMessages),
};
