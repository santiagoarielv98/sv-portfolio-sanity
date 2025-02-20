import { sanityFetch } from "@/sanity/lib/live";
import { homeQuery } from "@/sanity/lib/queries";
import AboutSection from "../_sections/about";
import type { Locale } from "@/lib/i18n/config";
import ExperienceSection from "../_sections/experience";
import ProjectsSection from "../_sections/projects";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};

export default async function Home(props: Props) {
  // console.log(await props.params);
  const params = await props.params;

  const { data } = await sanityFetch({
    query: homeQuery,
    params,
  });

  return (
    <main className="relative">
      <AboutSection profile={data.profile} {...params} />
      <ExperienceSection experiences={data.experiences} {...params} />
      <ProjectsSection projects={data.featuredProjects} {...params} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
/*     
<HeroSection section={heroSection} />

 About section 
<AboutSection profile={profile} section={aboutSection} />
 Experience section 
<ExperienceSection section={experienceSection} />

 Projects section 
<ProjectsSection section={projectsSection} />

 Skills section 
<SkillsSection section={skillsSection} />

 Contact section 
<ContactSection profile={profile} section={contactSection} /> */
