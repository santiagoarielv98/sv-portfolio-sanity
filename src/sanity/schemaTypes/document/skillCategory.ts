import { defineType } from "sanity";

export const skillCategoryType = defineType({
  name: "skillCategory",
  title: "Categoría de Habilidades",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripción",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Ícono",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title.es",
      subtitle: "description.es",
    },
  },
});
