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
      name: "form",
      title: "Campos del Formulario",
      type: "object",
      fields: [
        {
          name: "nameField",
          title: "Campo Nombre",
          type: "object",
          fields: [
            {
              name: "label",
              type: "localeString",
            },
            {
              name: "placeholder",
              type: "localeString",
            },
          ],
        },
        {
          name: "emailField",
          title: "Campo Email",
          type: "object",
          fields: [
            {
              name: "label",
              type: "localeString",
            },
            {
              name: "placeholder",
              type: "localeString",
            },
          ],
        },
        {
          name: "subjectField",
          title: "Campo Asunto",
          type: "object",
          fields: [
            {
              name: "label",
              type: "localeString",
            },
            {
              name: "placeholder",
              type: "localeString",
            },
          ],
        },
        {
          name: "messageField",
          title: "Campo Mensaje",
          type: "object",
          fields: [
            {
              name: "label",
              type: "localeString",
            },
            {
              name: "placeholder",
              type: "localeString",
            },
          ],
        },
        {
          name: "submitButton",
          title: "Botón Enviar",
          type: "localeString",
        },
      ],
    },
  ],
});
