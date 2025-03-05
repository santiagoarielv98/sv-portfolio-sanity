import { getUserData } from "@/lib/global-data";
import type { Locale } from "@/lib/i18n/config";
import { sanityFetch } from "@/sanity/lib/client";
import { getHomeQuery } from "@/sanity/lib/queries";
import { cache } from "react";
import AboutSection from "./_sections/about";
import ContactSection from "./_sections/contact";
import ExperienceSection from "./_sections/experience";
import HeroSection from "./_sections/hero";
import ProjectsSection from "./_sections/projects";
import SkillsSection from "./_sections/skills";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

// Improve caching for homepage data
const getPortfolioData = cache(async (params: { lang: Locale }) =>
  sanityFetch({
    query: getHomeQuery,
    params,
    revalidate: 259200, // 3 days
    tags: ["home", "projects", "experience", "skills"],
    cache: "force-cache",
  }),
);

// Set to 3 days - homepage data doesn't change frequently
export const revalidate = 259200;

export default async function Home(props: Props) {
  const params = await props.params;

  // Using Promise.all for concurrent data fetching
  const [data, user] = await Promise.all([
    getPortfolioData(params),
    getUserData(params),
  ]);

  return (
    <main className="relative">
      <HeroSection />
      <AboutSection profile={user.profile} {...params} />
      <ExperienceSection experiences={data.experiences} {...params} />
      <ProjectsSection projects={data.featuredProjects} {...params} />
      <SkillsSection skillCategories={data.skillCategories} {...params} />
      <ContactSection
        profile={user.profile}
        contact={user.contact}
        {...params}
      />
    </main>
  );
}
