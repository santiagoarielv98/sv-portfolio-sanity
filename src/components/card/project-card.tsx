import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Icon } from "@/components/icon";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import { useLocale, useTranslations } from "next-intl";
import type { HomeQueryResult } from "../../../sanity.types";
import Link from "next/link";
import { Typography } from "../ui/typography";

type Props = {
  project: HomeQueryResult["featuredProjects"][number];
};

const ProjectCard = ({ project }: Props) => {
  const locale = useLocale();
  const t = useTranslations("project");
  return (
    <ExtendedCard
      variant="default"
      className="group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <div className="from-background/80 to-background/20 absolute inset-0 z-10 bg-gradient-to-t transition-opacity group-hover:opacity-50" />
        <Image
          src={project.thumbnail!}
          alt={project.title as unknown as string}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader className="relative">
        <CardTitle className="group-hover:text-primary transition-colors">
          <Typography asChild variant="h4" className="inline-flex items-center">
            <Link
              href={`/${locale}/projects/${project.slug as unknown as string}`}
            >
              <span>{project.title as unknown as string}</span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </Typography>
        </CardTitle>
        <CardDescription>
          {project.description as unknown as string}
        </CardDescription>
      </CardHeader>

      {Array.isArray(project.skills) && project.skills.length > 0 && (
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.skills?.map((skill) => (
              <ExtendedBadge
                key={skill.title as unknown as string}
                variant="ghost"
              >
                <Icon icon={skill.icon!} />
                {skill.title as unknown as string}
              </ExtendedBadge>
            ))}
          </div>
        </CardContent>
      )}
      <ExtendedSeparator className="mt-auto mb-6" />
      <CardFooter className="gap-4">
        {project.links?.demo && (
          <ExtendedButton variant="default" size="sm" className="flex-1">
            <ExternalLink className="mr-1 h-4 w-4" />
            {t("demo")}
          </ExtendedButton>
        )}
        {project.links?.repo && (
          <ExtendedButton variant="solid" size="sm" className="flex-1">
            <FaGithub className="mr-1 h-4 w-4" />
            {t("source")}
          </ExtendedButton>
        )}
      </CardFooter>
    </ExtendedCard>
  );
};

export default ProjectCard;
