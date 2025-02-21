import { defineType } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Herramienta o Tecnología",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "icon",
      title: "Ícono",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      title: "title",
      subtitle: "category.title",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle || "Sin categoría",
      };
    },
  },
});
