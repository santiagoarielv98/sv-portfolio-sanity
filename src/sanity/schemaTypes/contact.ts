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
    {
      name: "formLabels",
      type: "object",
      fields: [
        { name: "name", type: "localeString" },
        { name: "email", type: "localeString" },
        { name: "subject", type: "localeString" },
        { name: "message", type: "localeString" },
        { name: "submitButton", type: "localeString" },
      ],
    },
  ],
});
