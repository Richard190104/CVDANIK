import { getLocale } from "./locale.js";

const infoByLocale = {
    sk: {
        name: "meno",
        email: "email",
        phone: "cislo",
        address: "adresa",
        description: "Popis",
        shortDescription: "Krátky popis",
    },
    en: {
        name: "name",
        email: "email",
        phone: "number",
        address: "address",
        description: "Description",
        shortDescription: "Short description",
    },
};

export function getInfo(){
    return infoByLocale[getLocale()];
}