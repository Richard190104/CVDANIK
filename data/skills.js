import { getLocale } from "./locale.js";

const skillsByLocale = {
  sk: [
    {
      name: "JavaScript",
      level: 80,
      description: ""
    },
    {
      name: "HTML",
      level: 90,
      description: ""
    },
    {
      name: "CSS",
      level: 85,
      description: ""
    }
  ],
  en: [
    {
      name: "JavaScript EN",
      level: 80,
      description: ""
    },
    {
      name: "HTML",
      level: 90,
      description: ""
    },
    {
      name: "CSS",
      level: 85,
      description: ""
    }
  ]
};

export function getSkills() {
  return skillsByLocale[getLocale()];
}