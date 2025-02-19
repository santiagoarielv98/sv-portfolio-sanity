import type { SchemaTypeDefinition } from "sanity";
import { localeString, localeText } from "./locale";
import { sectionType } from "./section";
import { heroType } from "./hero";
import { experienceType } from "./experience";
import { projectType } from "./project";
import { profileType } from "./profile";
import { aboutType } from "./about";
import { contactType } from "./contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localeText,
    sectionType,
    heroType,
    experienceType,
    projectType,
    profileType,
    aboutType,
    contactType,
  ],
};
