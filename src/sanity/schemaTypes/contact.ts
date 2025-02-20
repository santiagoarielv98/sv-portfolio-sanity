import { defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Contacto",
  type: "document",
  fields: [
    {
      name: "title",
      type: "localeString",
    },
    {
      name: "description",
      type: "localeText",
    },
  ],
});
