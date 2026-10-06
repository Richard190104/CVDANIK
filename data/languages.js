import { getLocale } from "./locale.js";

const languagesByLocale = {
  sk: [],
  en: []
};

export function getLanguages() {
  return languagesByLocale[getLocale()];
}
