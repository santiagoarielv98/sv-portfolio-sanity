import type { SchemaTypeDefinition } from "sanity";
import { localeString, localeText } from "./locale";
import { sectionType } from "./section";
import { heroType } from "./hero";
import { experienceType } from "./experience";
import { projectType } from "./project";
import { profileType } from "./profile";
import { aboutType } from "./about";
import { contactType } from "./contact";
import { skillsType } from "./skills";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localeText,
    sectionType,
    profileType,
    heroType,
    aboutType,
    experienceType,
    projectType,
    skillsType,
    contactType,
  ],
};
