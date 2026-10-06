import { getLocale } from "./locale.js";

const projectsByLocale = {
  sk: [],
  en: []
};

export function getProjects() {
  return projectsByLocale[getLocale()];
}
