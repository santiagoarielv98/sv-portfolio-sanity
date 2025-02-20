import type { GetHomePageResult } from "../../sanity.types";

export type Hero = GetHomePageResult["sections"][number] & {
  type: "hero";
  content: Array<{
    _type: "hero";
  }>;
};

export type About = GetHomePageResult["sections"][number] & {
  type: "about";
  content: Array<{
    _type: "about";
  }>;
};

export type Experience = GetHomePageResult["sections"][number] & {
  type: "experience";
  content: Array<{
    _type: "experience";
  }>;
};

export type Projects = GetHomePageResult["sections"][number] & {
  type: "projects";
  content: Array<{
    _type: "project";
  }>;
};

export type SkillCategory = GetHomePageResult["sections"][number] & {
  type: "skillCategory";
  content: Array<{
    _type: "skillCategory";
  }>;
};

export type Contact = GetHomePageResult["sections"][number] & {
  type: "contact";
  content: Array<{
    _type: "contact";
  }>;
};
