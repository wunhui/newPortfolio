import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/app/locales/en/data.json";
import ko from "@/app/locales/ko/data.json";

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources: resources,
  lng: "ko",
  fallbackLng: "ko",
  debug: false,
  keySeparator: ".", // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;