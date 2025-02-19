import { defineType } from "sanity";

export const skillsType = defineType({
  name: "skills",
  title: "Habilidades",
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
  ],
});
