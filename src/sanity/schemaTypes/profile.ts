import { defineType } from "sanity";

export const profileType = defineType({
  name: "profile",
  title: "Perfil",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "localeString",
    },
    {
      name: "email",
      title: "Correo",
      type: "string",
    },
    {
      name: "phone",
      title: "Teléfono",
      type: "string",
    },
    {
      name: "location",
      title: "Ubicación",
      type: "localeString",
    },
    {
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
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
    // {
    //   name: "interests",
    //   title: "Intereses",
    //   type: "array",
    //   of: [{ type: "string" }],
    // },
    {
      name: "social",
      title: "Redes sociales",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Nombre",
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
      type: "object",
      fields: [
        {
          name: "status",
          title: "Estado",
          type: "string",
          options: {
            list: [
              { title: "Disponible", value: "available" },
              { title: "Ocupado", value: "busy" },
              { title: "No disponible", value: "unavailable" },
            ],
          },
        },
        {
          name: "message",
          title: "Mensaje",
          type: "localeString",
        },
      ],
    },
  ],
});
