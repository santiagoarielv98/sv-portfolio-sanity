import type { Locale } from "./config";
import { translations } from "./transalation";

interface NestedTranslations {
  [key: string]: string | NestedTranslations;
}
type TranslationKey = string;

export function useTranslations(lang: Locale) {
  const t = (key: TranslationKey): string => {
    const keys = key.split(".");
    let value: unknown = translations[lang];

    try {
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = (value as NestedTranslations)[k];
        } else {
          return key; // Fallback to key if translation is not found
        }
      }

      if (typeof value !== "string") {
        return key; // Fallback to key if final value is not a string
      }

      return value;
    } catch {
      return key; // Fallback to key if any error occurs
    }
  };

  return { t };
}
