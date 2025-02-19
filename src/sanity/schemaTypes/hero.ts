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

// en: Welcome to my Portfolio
// es: Bienvenido a mi Portafolio

// en: Full Stack Developer Specialized in creating high-performance web applications with innovative technologies. 🚀
// es: Desarrollador Full Stack Especializado en la creación de aplicaciones web de alto rendimiento con tecnologías innovadoras. 🚀

// en: Hire me
// es: Contrátame
