import type { SchemaTypeDefinition } from "sanity";
import { contactType } from "./document/contact";
import { experienceType } from "./document/experience";
import { localeString, localeText } from "./object/locale";
import { profileType } from "./document/profile";
import { projectType } from "./document/project";
import { skillType } from "./document/skill";
import { skillCategoryType } from "./document/skillCategory";
import { settingType } from "./document/setting";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localeText,
    profileType,
    experienceType,
    projectType,
    skillCategoryType,
    skillType,
    contactType,
    settingType,
  ],
};
