import { getLocale } from "./locale.js";

const educationByLocale = {
  sk: [],
  en: []
};

export function getEducation() {
  return educationByLocale[getLocale()];
}
