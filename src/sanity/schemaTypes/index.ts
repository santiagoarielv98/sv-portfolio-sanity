import type { SchemaTypeDefinition } from "sanity";
import { contactType } from "./document/contact";
import { experienceType } from "./document/experience";
import { profileType } from "./document/profile";
import { projectType } from "./document/project";
import { skillType } from "./document/skill";
import { skillCategoryType } from "./document/skillCategory";
import { localeBlock, localeString, localeText } from "./object/locale";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localeText,
    localeBlock,
    profileType,
    experienceType,
    projectType,
    skillCategoryType,
    skillType,
    contactType,
  ],
};
