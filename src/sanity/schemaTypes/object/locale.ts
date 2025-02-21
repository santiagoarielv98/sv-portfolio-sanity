import { languages } from "@/lib/i18n/config";
import { defineField } from "sanity";

export const localeString = defineField({
  title: "Texto Traducible",
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      title: "Traducciones",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: languages.map((locale) => ({
    title: locale.name,
    name: locale.code,
    type: "string",
    fieldset: locale.defaultLocale ? undefined : "translations",
  })),
  preview: {
    select: {
      es: "es",
    },
    prepare({ es }) {
      return {
        title: es,
      };
    },
  },
});

export const localeText = defineField({
  title: "Texto Largo Traducible",
  name: "localeText",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: languages.map((locale) => ({
    title: locale.name,
    name: locale.code,
    type: "text",
    fieldset: locale.defaultLocale ? undefined : "translations",
  })),
  preview: {
    select: {
      es: "es",
    },
    prepare({ es }) {
      return {
        title: es,
      };
    },
  },
});
