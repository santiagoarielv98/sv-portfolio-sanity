import { sanityFetch } from "@/sanity/lib/live";
import { getHomePage } from "@/sanity/lib/queries";
import AboutSection from "../_sections/about";
import ContactSection from "../_sections/contact";
import ExperienceSection from "../_sections/experience";
import HeroSection from "../_sections/hero";
import ProjectsSection from "../_sections/projects";
import SkillsSection from "../_sections/skills";

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Home(props: Props) {
  const params = await props.params;
  const { data } = await sanityFetch({
    query: getHomePage,
    params,
  });
  const sections = data.sections;
  const profile = data.profile;

  const heroSection = sections.find((section) => section.type === "hero");
  const aboutSection = sections.find((section) => section.type === "about");
  const experienceSection = sections.find(
    (section) => section.type === "experience",
  );

  const projectsSection = sections.find(
    (section) => section.type === "projects",
  );

  const skillsSection = sections.find(
    (section) => section.type === "skillCategory",
  );

  const contactSection = sections.find((section) => section.type === "contact");

  return (
    <main className="relative">
      {/* Global patterns */}
      <div className="pattern-noise pointer-events-none fixed inset-0 -z-50" />
      <div className="gradient-mesh pointer-events-none fixed inset-0 -z-40" />

      {/* Hero section */}
      <HeroSection section={heroSection} />

      {/* About section */}
      <AboutSection profile={profile} section={aboutSection} />
      {/* Experience section */}
      <ExperienceSection section={experienceSection} />

      {/* Projects section */}
      <ProjectsSection section={projectsSection} />

      {/* Skills section */}
      <SkillsSection section={skillsSection} />

      {/* Contact section */}
      <ContactSection profile={profile} section={contactSection} />
    </main>
  );
}
