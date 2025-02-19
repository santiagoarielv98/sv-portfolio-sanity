import { defineType } from "sanity";

export const experienceType = defineType({
  name: "experience",
  title: "Experiencia",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "localeString",
    },
    {
      name: "organization",
      title: "Organización",
      type: "localeString",
    },
    {
      name: "location",
      title: "Ubicación",
      type: "localeString",
    },
    {
      name: "type",
      title: "Tipo",
      type: "string",
      options: {
        list: [
          { title: "Trabajo", value: "job" },
          { title: "Educación", value: "education" },
          { title: "Voluntariado", value: "volunteer" },
        ],
        layout: "radio",
      },
    },
    {
      name: "date",
      title: "Fecha",
      type: "object",
      fields: [
        {
          name: "start",
          title: "Inicio",
          type: "date",
        },
        {
          name: "end",
          title: "Fin",
          type: "date",
        },
      ],
    },
    {
      name: "description",
      title: "Descripción",
      type: "array",
      of: [{ type: "localeString" }],
    },
  ],
});
