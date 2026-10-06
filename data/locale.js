export function getLocale() {
  return localStorage.getItem("locale") === "en" ? "en" : "sk";
}
