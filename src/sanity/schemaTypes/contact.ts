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

//
/* 
title.en: Send me a message
title.es: Envíame un mensaje

description.en: Fill out the form below and I'll get back to you as soon as possible.
description.es: Rellena el formulario a continuación y me pondré en contacto contigo lo antes posible.

form.nameField.label.en: Name
form.nameField.label.es: Nombre
form.nameField.placeholder.en: Santiago
form.nameField.placeholder.es: Santiago

form.emailField.label.en: Email
form.emailField.label.es: Email
form.emailField.placeholder.en:
form.emailField.placeholder.es:

form.subjectField.label.en: Subject
form.subjectField.label.es: Asunto
form.subjectField.placeholder.en: What's this about?
form.subjectField.placeholder.es: ¿De qué se trata?

form.messageField.label.en: Message
form.messageField.label.es: Mensaje
form.messageField.placeholder.en: Your message
form.messageField.placeholder.es: Tu mensaje


form.submitButton.en: Send Message
form.submitButton.es: Enviar Mensaje

 */
