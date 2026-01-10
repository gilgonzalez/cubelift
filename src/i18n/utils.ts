import { routes } from "./routes";
import { t as es } from "./es";
import { t as en } from "./en";

const translations = {
  es,
  en,
};

export function getTranslations(lang: keyof typeof translations) {
  return translations[lang] || translations.es;
}

export function getPath(
  route: keyof typeof routes,
  lang: "es" | "en"
) {
  const slug = routes[route][lang];
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}
