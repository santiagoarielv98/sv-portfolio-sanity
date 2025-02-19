import { sanityFetch } from "@/sanity/lib/live";
import { getAllSections } from "@/sanity/lib/queries";
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
  const { data: hero } = await sanityFetch({ query: getAllSections, params });
  return (
    <main className="relative">
      {/* Global patterns */}
      <div className="pattern-noise pointer-events-none fixed inset-0 -z-50" />
      <div className="gradient-mesh pointer-events-none fixed inset-0 -z-40" />

      {/* Hero section */}
      <HeroSection hero={hero} />

      {/* About section */}
      <AboutSection />
      {/* Experience section */}
      <ExperienceSection />

      {/* Projects section */}
      <ProjectsSection />

      {/* Skills section */}
      <SkillsSection />

      {/* Contact section */}
      <ContactSection />
    </main>
  );
}
