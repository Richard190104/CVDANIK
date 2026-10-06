// v data mame spolocnu premennu locale ktora sa uklada a cita z localStorage
import { getLocale } from "../data/locale.js";
import { getTranslations } from "../data/translations.js";

const languageSwitcherContainer = document.querySelector('[data-js="language-switcher"]');
const languageSwitcher = document.createElement("select");
const translations = getTranslations();
languageSwitcher.setAttribute("aria-label", translations.languageSelectorLabel);

document.querySelectorAll("[data-i18n]").forEach((element) => {
  const key = element.dataset.i18n;
  const translation = translations[key];

  if (translation === undefined) {
    throw new Error(`Missing translation for key: ${key}`);
  }

  element.textContent = translation;
});

// tu definujeme dostupne jazyky a ich labely, ktore sa zobrazuju v selecte
var avbLanguages = { sk: "Slovenčina", en: "English" };

// zobrazenie jazykov v selecte
Object.entries(avbLanguages).forEach(([value, label]) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  languageSwitcher.appendChild(option);
});

languageSwitcher.value = getLocale();
languageSwitcherContainer.appendChild(languageSwitcher);
document.documentElement.lang = languageSwitcher.value;

// vzdy pri zmene vola funkciu changeLanguage, ktora ulozi jazyk do localStorage a reloadne stranku
languageSwitcher.addEventListener("change", () => {
  changeLanguage(languageSwitcher.value);
});

export function changeLanguage(language) {
  if (language !== "sk" && language !== "en") {
    throw new RangeError(`Unsupported language: ${language}`);
  }

  localStorage.setItem("locale", language);
  window.location.reload();
}

// ked chces pridat jazyk:
// pridame ho hore do zoznamu avbLanguages
// v datach pre kazdy subor (person.js, projects.js...) pridas do jazyk a preklady pre vsetko

// ako prekladat fixne texty:
// ked chceme pridat text ktory sa NETAHA z json dat ale je napevno v html - napriklad <p> Text </p>
// pouzijeme atribut data-i18n="nazov". Teda v html to zapises takto: 
// <p data-i18n="tvoj_kluc"> Text </p>
// potom v translations.js pridas pre tento kluc preklad do vsetkych jazykov vratane slovenciny.
// takto:

// const translations = {
//   sk: {
//     tvoj_kluc: Text
//   },
//   en: {
//     tvoj_kluc: Anglicky preklad
//   },
// };
