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
      name: "languages",
      title: "Idiomas",
      type: "array",
      of: [{ type: "localeString" }],
    },
    {
      name: "socialLinks",
      title: "Enlaces sociales",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              title: "Icono",
              type: "string",
            },
            {
              name: "platform",
              title: "Plataforma",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "availability",
      title: "Disponibilidad",
      type: "string",
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
