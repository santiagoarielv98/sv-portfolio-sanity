import { defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Herramienta o Tecnología",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "localeString",
    },
    {
      name: "icon",
      title: "Ícono",
      type: "string",
    },
    {
      name: "level",
      title: "Nivel",
      type: "number",
    },
    {
      name: "category",
      title: "Categoría",
      type: "reference",
      to: [{ type: "skillCategory" }],
    },
  ],
  preview: {
    select: {
      title: "title.es",
      subtitle: "category.title.es",
    },
  },
});
