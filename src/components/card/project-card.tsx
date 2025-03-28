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
import type { GetHomeQueryResult } from "@/sanity/types";
import Link from "next/link";
import { Typography } from "../ui/typography";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  project: GetHomeQueryResult["featuredProjects"][number];
};

const ProjectCard = ({ project }: Props) => {
  const locale = useLocale();
  const t = useTranslations("project");
  return (
    <ExtendedCard
      variant="default"
      className="group flex w-full flex-col overflow-hidden"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b">
        <Image
          src={urlFor(project.thumbnail!).width(600).url()}
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
          <ExtendedButton
            variant="gradient"
            size="sm"
            className="flex-1"
            asChild
          >
            <Link href={project.links.demo}>
              <ExternalLink className="mr-1 h-4 w-4" />
              {t("demo")}
            </Link>
          </ExtendedButton>
        )}
        {project.links?.repo && (
          <ExtendedButton variant="solid" size="sm" className="flex-1" asChild>
            <Link href={project.links.repo}>
              <FaGithub className="mr-1 h-4 w-4" />
              {t("source")}
            </Link>
          </ExtendedButton>
        )}
      </CardFooter>
    </ExtendedCard>
  );
};

export default ProjectCard;
