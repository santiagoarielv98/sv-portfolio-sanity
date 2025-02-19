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
    },
    {
      name: "description",
      title: "Descripción",
      type: "localeText",
    },
    {
      name: "thumbnail",
      title: "Imagen de portada",
      type: "image",
      options: { hotspot: true },
    },
    // {
    //   name: "gallery",
    //   title: "Galería",
    //   type: "array",
    //   of: [{ type: "image" }],
    // },
    // {
    //   name: "skills",
    //   type: "array",
    //   of: [{ type: "reference", to: [{ type: "skill" }] }],
    // },
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
    // {
    //   name: "featured",
    //   type: "boolean",
    // },
  ],
});
