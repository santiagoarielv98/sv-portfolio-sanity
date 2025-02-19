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
    {
      name: "interests",
      title: "Intereses",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
