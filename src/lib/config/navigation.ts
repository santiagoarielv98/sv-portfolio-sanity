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
  { name: "about", href: SECTIONS.ABOUT },
  { name: "experience", href: SECTIONS.EXPERIENCE },
  {
    name: "projects.title",
    href: SECTIONS.PROJECTS,
    hasSubmenu: true,
    submenu: [
      {
        titleKey: "projects.section",
        href: SECTIONS.PROJECTS,
        icon: FolderKanban,
        descriptionKey: "projects.sectionDescription",
      },
      {
        titleKey: "projects.all",
        href: ROUTES.PROJECTS,
        icon: Grid2X2,
        descriptionKey: "projects.allDescription",
      },
    ],
  },
  { name: "skills", href: SECTIONS.SKILLS },
  { name: "contact", href: SECTIONS.CONTACT },
];
