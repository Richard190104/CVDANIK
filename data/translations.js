import { getLocale } from "./locale.js";

const translations = {
  sk: {
    pageTitle: "Životopis",
    heading: "Životopis",
    introduction: "Osobný životopis",
    languageSelectorLabel: "Jazyk",
  },
  en: {
    pageTitle: "Resume",
    heading: "Resume",
    introduction: "Personal resume",
    languageSelectorLabel: "Language",
  },
};

export function getTranslations() {
  return translations[getLocale()];
}
