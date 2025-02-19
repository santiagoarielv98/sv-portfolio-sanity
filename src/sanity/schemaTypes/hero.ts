import { defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Título",
      type: "localeString",
    },
    {
      name: "subtitle",
      title: "Subtítulo",
      type: "localeString",
    },
    {
      name: "cta",
      title: "Llamado a la acción",
      type: "localeString",
    },
  ],
});
