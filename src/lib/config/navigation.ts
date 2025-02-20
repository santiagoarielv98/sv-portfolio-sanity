import { FolderKanban, Grid2X2 } from "lucide-react";

export const SECTIONS = {
  HOME: "#home",
  ABOUT: "#about",
  EXPERIENCE: "#experience",
  PROJECTS: "#projects",
  SKILLS: "#skills",
  CONTACT: "#contact",
} as const;

export const ROUTES = {
  PROJECTS: "/projects",
} as const;

export const navigation = [
  { name: "nav.about", href: SECTIONS.ABOUT },
  { name: "nav.experience", href: SECTIONS.EXPERIENCE },
  {
    name: "nav.projects.section",
    href: SECTIONS.PROJECTS,
    hasSubmenu: true,
    submenu: [
      {
        titleKey: "nav.projects.section",
        href: SECTIONS.PROJECTS,
        icon: FolderKanban,
        descriptionKey: "nav.projects.sectionDescription",
      },
      {
        titleKey: "nav.projects.all",
        href: ROUTES.PROJECTS,
        icon: Grid2X2,
        descriptionKey: "nav.projects.allDescription",
      },
    ],
  },
  { name: "nav.skills", href: SECTIONS.SKILLS },
  { name: "nav.contact", href: SECTIONS.CONTACT },
] as const;
