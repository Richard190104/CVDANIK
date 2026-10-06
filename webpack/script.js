//********************************************************** */

// ukazka ako nacitas data z data/person.js

// nacitame skills
import { getSkills } from "../data/skills.js";
import "./lang-switcher.js";
var skills = getSkills();

// v html mame element, kam chceme vlozit skills
// data-js je len random nazov pre selektor ktory som si vymyslel, oznacil si ten element v html subore
// a tu ho viem jednoducho natiahnut takto
var skillsContainer = document.querySelector("[data-js='skills']");

// pomocna fnukcia na generovanie kontaineru pre skill
function renderSkill(skill) {
    //vytvorime div a dame mu classu skill, aby sme ho vedeli stylovat
    const skillContainer = document.createElement("div");
    skillContainer.classList.add("skill");

    const skillName = document.createElement("p");
    skillName.classList.add("skill-name");
    skillName.textContent = skill.name;
    skillContainer.appendChild(skillName);

    return skillContainer;
}

// pre kazdy skill si zavolame funkciu na vytvorenie elementu a vlozime ho do skillsContainer
skills.forEach((skill) => {
    const skillElement = renderSkill(skill);
    skillsContainer.appendChild(skillElement);
});

//********************************************************** */

// v skills.scss je to nastylovane pozri tam
