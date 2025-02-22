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
        source: "title.en",
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
      name: "content",
      title: "Contenido",
      type: "localeBlock",
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
    //  mas campos
    {
      name: "startDate",
      title: "Fecha de inicio",
      type: "date",
    },
    {
      name: "type",
      title: "Tipo",
      type: "string",
      options: {
        list: [
          { title: "Personal", value: "personal" },
          { title: "Profesional", value: "professional" },
        ],
      },
    },
    {
      name: "status",
      title: "Estado",
      type: "string",
      options: {
        list: [
          { title: "En progreso", value: "inProgress" },
          { title: "Finalizado", value: "finished" },
        ],
      },
    },
    {
      name: "keyFeatures",
      title: "Características clave",
      type: "array",
      of: [{ type: "localeString" }],
    },
  ],
  preview: {
    select: {
      title: "title.es",
      media: "thumbnail",
    },
  },
});
