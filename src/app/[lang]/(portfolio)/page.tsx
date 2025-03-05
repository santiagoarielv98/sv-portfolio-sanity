import type { Locale } from "@/lib/i18n/config";
import { sanityFetch } from "@/sanity/lib/client";
import { getHomeQuery } from "@/sanity/lib/queries";
import ExperienceSection from "./_sections/experience";
import HeroSection from "./_sections/hero";
import ProjectsSection from "./_sections/projects";
import SkillsSection from "./_sections/skills";
import { cache } from "react";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

const getPortfolioData = cache(async (params: { lang: Locale }) =>
  sanityFetch({
    query: getHomeQuery,
    params,
  }),
);

export const revalidate = 3600;

export default async function Home(props: Props) {
  const params = await props.params;

  const data = await getPortfolioData(params);

  return (
    <main className="relative">
      <HeroSection />
      {/* <AboutSection profile={data.profile} {...params} /> */}
      <ExperienceSection experiences={data.experiences} {...params} />
      <ProjectsSection projects={data.featuredProjects} {...params} />
      <SkillsSection skillCategories={data.skillCategories} {...params} />
      {/* <ContactSection
        profile={data.profile}
        contact={data.contact}
        {...params}
      /> */}
    </main>
  );
}
