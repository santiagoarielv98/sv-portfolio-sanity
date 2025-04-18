import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Briefcase,
  Cloud,
  Code,
  FolderKanban,
  GraduationCap,
  Grid2X2,
  Monitor,
  Server,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  FaAws,
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaLinkedinIn,
  FaPython,
  FaReact,
  FaSass,
  FaUsers,
} from "react-icons/fa";
import {
  SiCloudinary,
  SiAngular,
  SiAxios,
  SiDocker,
  SiFirebase,
  SiGooglecloud,
  SiGraphql,
  SiInertia,
  SiJavascript,
  SiLeaflet,
  SiMercadopago,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReactquery,
  SiRedux,
  SiShadcnui,
  SiSpringboot,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiMaterialdesign,
} from "react-icons/si";

export const icons: Record<string, LucideIcon | IconType> = {
  ai: Brain,
  job: Briefcase,
  education: GraduationCap,
  materialangular: SiMaterialdesign,
  monitor: Monitor,
  server: Server,
  cloud: Cloud,
  cloudinary: SiCloudinary,
  typescript: SiTypescript,
  react: FaReact,
  redux: SiRedux,
  mui: SiMui,
  sass: FaSass,
  nextjs: SiNextdotjs,
  angular: SiAngular,
  figma: FaFigma,
  java: FaJava,
  springboot: SiSpringboot,
  nestjs: SiNestjs,
  linkedin: FaLinkedinIn,
  firebase: SiFirebase,
  aws: FaAws,
  docker: SiDocker,
  mongodb: SiMongodb,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  gcp: SiGooglecloud,
  github: FaGithub,
  gitlab: FaGitlab,
  laravel: FaLaravel,
  supabase: SiSupabase,
  html: FaHtml5,
  tailwindcss: SiTailwindcss,
  axios: SiAxios,
  bootstrap: FaBootstrap,
  inertia: SiInertia,
  leaflet: SiLeaflet,
  tanstack: SiReactquery,
  swagger: SiSwagger,
  javascript: SiJavascript,
  graphql: SiGraphql,
  scrum: FaUsers,
  prisma: SiPrisma,
  shadcn: SiShadcnui,
  mercadopago: SiMercadopago,
  python: FaPython,
  Grid2X2,
  FolderKanban,
};

export const getIcon = (icon?: string) => {
  return icons[icon ?? ""] ?? Code;
};

export const Icon = ({
  icon,
  className,
}: {
  icon?: string | null;
  className?: string;
}) => {
  const Icon = getIcon(icon ?? "");
  return <Icon className={className} />;
};
