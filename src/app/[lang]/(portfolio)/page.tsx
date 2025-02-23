import { sanityFetch } from "@/sanity/lib/live";
import { getHomeQuery } from "@/sanity/lib/queries";
import AboutSection from "./_sections/about";
import type { Locale } from "@/lib/i18n/config";
import ExperienceSection from "./_sections/experience";
import ProjectsSection from "./_sections/projects";
import SkillsSection from "./_sections/skills";
import ContactSection from "./_sections/contact";
import HeroSection from "./_sections/hero";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

export default async function Home(props: Props) {
  const params = await props.params;

  const { data } = await sanityFetch({
    query: getHomeQuery,
    params,
  });

  return (
    <main className="relative">
      <HeroSection />
      <AboutSection profile={data.profile} {...params} />
      <ExperienceSection experiences={data.experiences} {...params} />
      <ProjectsSection projects={data.featuredProjects} {...params} />
      <SkillsSection skillCategories={data.skillCategories} {...params} />
      <ContactSection
        profile={data.profile}
        contact={data.contact}
        {...params}
      />
    </main>
  );
}
