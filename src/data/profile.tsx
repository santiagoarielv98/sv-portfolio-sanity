import { Github, Linkedin, Mail, Medal, Target, Users } from "lucide-react";
import type { ReactNode } from "react";

interface ProfileData {
  personal: {
    name: string;
    role: string;
    location: string;
    email: string;
    languages: string[];
    experience: {
      years: number;
      description: string;
    };
    about: {
      description: string[];
      objectives: string;
    };
    achievements: Array<{
      icon: ReactNode;
      title: string;
      description: string;
    }>;
  };
  skills: Array<{
    title: string;
    description: string;
    category: "frontend" | "backend" | "cloud";
    technologies: Array<{
      name: string;
      level: "basic" | "intermediate" | "advanced" | "expert";
    }>;
  }>;
  projects: Array<{
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    repoUrl?: string;
    category: "frontend" | "backend" | "fullstack";
  }>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    technologies: string[];
  }>;
  social: Array<{
    name: string;
    url: string;
    icon: ReactNode;
  }>;
}

export const profileData: ProfileData = {
  personal: {
    name: "Tu Nombre",
    role: "Desarrollador Full Stack Junior",
    location: "Buenos Aires, Argentina",
    email: "tu@email.com",
    languages: ["Español", "Inglés"],
    experience: {
      years: 1,
      description: "Experiencia en desarrollo web",
    },
    about: {
      description: [
        "Soy un Desarrollador Full Stack Junior con una sólida base en desarrollo web y pasión por crear aplicaciones amigables para el usuario. Mi viaje en tecnología comenzó con aprendizaje autodidacta y formación en bootcamp, lo que me ha dado una comprensión sólida de las tecnologías web modernas.",
        "Me enfoco en React.js para desarrollo frontend y Node.js para backend. Me entusiasma aprender nuevas tecnologías y mejorar constantemente mis habilidades a través de experiencia práctica en proyectos.",
      ],
      objectives:
        "Crecer como desarrollador asumiendo proyectos desafiantes, contribuyendo a aplicaciones significativas y continuando mi aprendizaje junto a desarrolladores experimentados. Estoy particularmente interesado en dominar las prácticas modernas de desarrollo web y mejorar mis habilidades de resolución de problemas.",
    },
    achievements: [
      {
        icon: <Users className="h-4 w-4" />,
        title: "Trabajo en Equipo",
        description: "Colaboración efectiva en diversos equipos de desarrollo",
      },
      {
        icon: <Medal className="h-4 w-4" />,
        title: "Aprendizaje Rápido",
        description: "Rápida adaptación a nuevas tecnologías y frameworks",
      },
      {
        icon: <Target className="h-4 w-4" />,
        title: "Entrega de Proyectos",
        description: "Completé exitosamente múltiples proyectos web",
      },
    ],
  },
  skills: [
    {
      title: "Desarrollo Frontend",
      description:
        "Construcción de interfaces de usuario responsivas e interactivas",
      category: "frontend",
      technologies: [
        { name: "React/Next.js", level: "intermediate" },
        { name: "TypeScript", level: "basic" },
        { name: "Tailwind CSS", level: "intermediate" },
        { name: "HTML/CSS", level: "intermediate" },
      ],
    },
    {
      title: "Desarrollo Backend",
      description: "Desarrollo de APIs y lógica del servidor",
      category: "backend",
      technologies: [
        { name: "Node.js", level: "basic" },
        { name: "Express", level: "basic" },
        { name: "PostgreSQL", level: "basic" },
        { name: "MongoDB", level: "basic" },
      ],
    },
  ],
  projects: [
    {
      title: "Portfolio Personal",
      description: "Portfolio desarrollado con Next.js y Tailwind CSS",
      image: "/path-to-image.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://tu-portfolio.com",
      repoUrl: "https://github.com/tu-usuario/portfolio",
      category: "frontend",
    },
  ],
  experience: [
    {
      title: "Desarrollador Full Stack Junior",
      company: "Empresa Tech",
      period: "2023 - Presente",
      location: "Buenos Aires, Argentina",
      description: "Desarrollo de aplicaciones web utilizando React y Node.js",
      technologies: ["React", "Node.js", "TypeScript"],
    },
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/tu-usuario",
      icon: <Github className="h-4 w-4" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tu-usuario",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      name: "Email",
      url: "mailto:tu@email.com",
      icon: <Mail className="h-4 w-4" />,
    },
  ],
};
