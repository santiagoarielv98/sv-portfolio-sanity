import { defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Proyectos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 50,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Descripción",
      type: "localeText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnail",
      title: "Imagen de portada",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Galería",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "skills",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    },
    {
      name: "links",
      title: "Enlaces",
      type: "object",
      fields: [
        {
          name: "repo",
          title: "Repositorio",
          type: "url",
        },
        {
          name: "demo",
          title: "Demo",
          type: "url",
        },
      ],
    },
    {
      name: "featured",
      type: "boolean",
      title: "Destacado",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "thumbnail",
    },
  },
});
