import { defineType } from "sanity";

export const sectionType = defineType({
  name: "section",
  title: "Secciones del Portfolio",
  type: "document",
  fields: [
    {
      name: "title",
      type: "localeString",
    },
    {
      name: "subtitle",
      type: "localeString",
    },
    {
      name: "identifier",
      type: "slug",
      options: {
        source: "title.en",
        maxLength: 96,
      },
    },
    {
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Hero", value: "hero" },
          { title: "Sobre mí", value: "about" },
          { title: "Educación", value: "education" },
          { title: "Experiencia", value: "experience" },
          { title: "Proyectos", value: "projects" },
          { title: "Habilidades", value: "skills" },
          { title: "Contacto", value: "contact" },
        ],
      },
    },
    {
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "hero" }, { type: "experience" }, { type: "project" }],
        },
      ],
    },
    {
      name: "order",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "title.es",
      type: "type",
      order: "order",
    },
    prepare({ title, type, order }) {
      return {
        title: `${title || "Sin título"}`,
        subtitle: `${type} - Orden: ${order || "No definido"}`,
      };
    },
  },
});
