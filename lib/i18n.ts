export const langs = ["en", "mn"] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = "en";

/**
 * Any user-facing string. A plain string is shared by every language;
 * an object lets you add Mongolian later. Missing `mn` falls back to `en`.
 */
export type Localized = string | { en: string; mn?: string };

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

export function tr(value: Localized, lang: Lang): string {
  if (typeof value === "string") return value;
  return value[lang] ?? value.en;
}

/** URL for a language: English lives at "/", others at "/<lang>". */
export function langPath(lang: Lang, hash = ""): string {
  return (lang === defaultLang ? "/" : `/${lang}`) + hash;
}
