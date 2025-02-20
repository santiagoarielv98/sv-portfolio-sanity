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
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "phone",
      title: "Teléfono",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .regex(/^\+?[0-9]{10,15}$/, {
            name: "phone",
            invert: false,
          })
          .error("Debe ser un número de teléfono válido"),
    },
    {
      name: "address",
      title: "Dirección",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(200),
    },
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "phone",
    },
  },
});
