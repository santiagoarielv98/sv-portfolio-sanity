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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Ícono",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "level",
      title: "Nivel",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(100),
    },
    {
      name: "category",
      title: "Categoría",
      type: "reference",
      to: [{ type: "skillCategory" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title.es",
      subtitle: "category.title.es",
    },
  },
});
