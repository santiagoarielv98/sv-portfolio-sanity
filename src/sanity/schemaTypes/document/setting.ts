import { defineType } from "sanity";

export const settingType = defineType({
  name: "setting",
  title: "Configuración",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripción",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "keywords",
      title: "Palabras Clave",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "author",
      title: "Autor",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "footer",
      title: "Pie de Página",
      type: "localeText",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description.es",
    },
  },
});
