import type { SchemaTypeDefinition } from "sanity";
import { localeString, localeText } from "./locale";
import { sectionType } from "./section";
import { heroType } from "./hero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localeString, localeText, sectionType, heroType],
};
