import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  ExtendedCard,
} from "@/components/extended-card";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Icon } from "@/components/icon";
import { Typography } from "@/components/ui/typography";
import { getFormattedDate } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";

import type { GetHomeQueryResult } from "@/sanity/types";

type Props = {
  experience: GetHomeQueryResult["experiences"][0];
};

export const ExperienceCard = ({ experience }: Props) => {
  return (
    <ExtendedCard variant="solid">
      <CardHeader className="flex-row gap-4">
        <ExtendedButton
          size="icon"
          variant="gradient"
          float="none"
          aria-label={experience.type as unknown as string}
        >
          <Icon icon={experience.type!} />
        </ExtendedButton>
        <div className="flex flex-1 flex-col gap-1.5">
          <CardTitle>{experience.title as unknown as string}</CardTitle>
          <CardDescription>
            {experience.organization as unknown as string}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <ExtendedBadge variant="default">
            <Calendar className="mr-1" />
            {experience.date?.start &&
              getFormattedDate(experience.date.start)}{" "}
            -{" "}
            {experience.date?.end
              ? getFormattedDate(experience.date.end)
              : "Present"}
          </ExtendedBadge>
          <ExtendedBadge variant="default">
            <MapPin className="mr-1" />
            {experience.location as unknown as string}
          </ExtendedBadge>
        </div>

        {experience.description?.length === 1 ? (
          <Typography variant="body1">
            {experience.description[0] as unknown as string}
          </Typography>
        ) : (
          <ul>
            {experience.description?.map((desc, descIndex) => (
              <Typography asChild variant="body1" key={descIndex}>
                <li>{desc as unknown as string}</li>
              </Typography>
            ))}
          </ul>
        )}
        {Array.isArray(experience.skills) && experience.skills.length > 0 && (
          <>
            <ExtendedSeparator />
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <ExtendedBadge
                  key={skill.title as unknown as string}
                  variant="ghost"
                >
                  <Icon icon={skill.icon!} />
                  {skill.title as unknown as string}
                </ExtendedBadge>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </ExtendedCard>
  );
};
