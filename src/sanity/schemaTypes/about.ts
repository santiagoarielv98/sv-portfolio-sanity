import { defineType } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "Sobre mí",
  type: "document",
  fields: [
    {
      name: "iam-title",
      title: "Quién soy",
      type: "localeString",
    },
    {
      name: "objective-title",
      title: "Objetivo",
      type: "localeString",
    },
  ],
});
