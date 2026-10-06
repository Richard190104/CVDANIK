import { getLocale } from "./locale.js";

const experienceByLocale = {
  sk: [],
  en: []
};

export function getExperience() {
  return experienceByLocale[getLocale()];
}
