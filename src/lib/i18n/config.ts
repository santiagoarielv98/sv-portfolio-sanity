const flagIconPath = "https://flagicons.lipis.dev/flags/4x3";

export const languages = [
  {
    code: "es",
    name: "Español",
    flag: `${flagIconPath}/es.svg`,
  },
  {
    code: "en",
    name: "English",
    flag: `${flagIconPath}/gb.svg`,
  },
];

export const i18n = {
  defaultLocale: "es",
  locales: languages.map((lang) => lang.code),
} as const;

export type Locale = "es" | "en";
