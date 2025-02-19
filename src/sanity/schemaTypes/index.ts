import { languages } from "@/lib/i18n/config";
import { defineField, defineType, type SchemaTypeDefinition } from "sanity";

export const localeString = defineField({
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      name: "translations",
      title: "Traducciones",
      options: { collapsible: true },
    },
  ],
  fields: languages.map((locale) => ({
    type: "string",
    name: locale.code,
    title: locale.name,
    fieldset: locale.defaultLocale ? undefined : "translations",
  })),
});

export const localeText = defineField({
  name: "localeText",
  type: "object",
  fieldsets: [
    {
      name: "translations",
      title: "Traducciones",
      options: { collapsible: true },
    },
  ],
  fields: languages.map((locale) => ({
    type: "text",
    name: locale.code,
    title: locale.name,
    fieldset: locale.defaultLocale ? undefined : "translations",
  })),
});

export const iconType = defineType({
  name: "icon",
  title: "Icono",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nombre",
    },
    {
      name: "icon",
      type: "string",
      title: "Icono",
    },
  ],
});

export const sectionType = defineType({
  name: "section",
  title: "Sección",
  type: "document",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Título",
    },
    {
      name: "subtitle",
      type: "localeString",
      title: "Subtítulo",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title.en",
        maxLength: 96,
      },
    },
    {
      name: "order",
      type: "number",
      title: "Orden",
    },
  ],
});

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localeString, localeText, iconType, sectionType],
};
