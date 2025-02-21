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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "organization",
      title: "Organización",
      type: "localeString",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "start",
          title: "Inicio",
          type: "date",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "end",
          title: "Fin",
          type: "date",
          validation: (Rule) => Rule.max(new Date().toISOString()),
        },
      ],
    },
    {
      name: "description",
      title: "Descripción",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [{ type: "localeString" }],
    },
    {
      name: "skills",
      title: "Habilidades",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    },
  ],
  preview: {
    select: {
      title: "title.es",
      organization: "organization.es",
      type: "type",
      start: "date.start",
      end: "date.end",
    },
    prepare: ({ title, organization, type, start, end }) => {
      const startDate = new Date(start).getFullYear();
      const endDate = end ? new Date(end).getFullYear() : "Actualidad";
      const date = `${startDate} - ${endDate}`;
      const subtitle = `${organization} - ${date}`;
      return {
        title,
        subtitle,
        description: type,
      };
    },
  },
});
