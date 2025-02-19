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
    },
    {
      name: "description",
      title: "Descripción",
      type: "localeText",
    },
    {
      name: "icon",
      title: "Ícono",
      type: "string",
    },
  ],
});
