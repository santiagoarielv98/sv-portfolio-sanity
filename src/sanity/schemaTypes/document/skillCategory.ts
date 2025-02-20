import { defineType } from "sanity";

export const skillCategoryType = defineType({
  name: "skillCategory",
  title: "Categoría de Habilidades",
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
      name: "icon",
      title: "Ícono",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Orden",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description.es",
    },
  },
});
