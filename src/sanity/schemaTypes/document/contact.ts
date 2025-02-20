import { defineType } from "sanity";

export const contactType = defineType({
  name: "contact",
  title: "Contacto",
  type: "document",
  fields: [
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
      name: "address",
      title: "Dirección",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "phone",
    },
  },
});
