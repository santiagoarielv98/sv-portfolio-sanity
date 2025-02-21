import { defineType } from "sanity";

export const profileType = defineType({
  name: "profile",
  title: "Perfil",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "title",
      title: "Título",
      type: "localeString",
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "resume",
      title: "Currículum",
      type: "file",
      options: {
        accept: ".pdf",
      },
    },
    {
      name: "bio",
      title: "Biografía",
      type: "array",
      of: [{ type: "localeString" }],
    },
    {
      name: "objectives",
      title: "Objetivos",
      type: "array",
      of: [{ type: "localeString" }],
    },
    {
      name: "socialLinks",
      title: "Enlaces sociales",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icono",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "platform",
              title: "Plataforma",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ["http", "https"],
                }),
            },
          ],
        },
      ],
    },
    {
      name: "availability",
      title: "Disponibilidad",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Disponible", value: "available" },
          { title: "Ocupado", value: "busy" },
          { title: "No disponible", value: "unavailable" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title.es",
      media: "image",
    },
  },
});
