import { defineType } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "Sobre mí",
  type: "document",
  fields: [
    {
      name: "achievements",
      title: "Logros",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "localeString" },
            { name: "description", type: "localeText" },
          ],
        },
      ],
    },
  ],
});
