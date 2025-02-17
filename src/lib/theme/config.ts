export const colorScheme = {
  light: {
    en: "Light",
    es: "Claro",
  },
  dark: {
    en: "Dark",
    es: "Oscuro",
  },
  system: {
    en: "System",
    es: "Sistema",
  },
};

export type ColorScheme = keyof typeof colorScheme;
