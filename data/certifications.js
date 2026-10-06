import { getLocale } from "./locale.js";

const certificationsByLocale = {
  sk: [],
  en: []
};

export function getCertifications() {
  return certificationsByLocale[getLocale()];
}
