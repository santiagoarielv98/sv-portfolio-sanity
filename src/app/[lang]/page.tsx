import AboutSection from "../_sections/about";
import ContactSection from "../_sections/contact";
import ExperienceSection from "../_sections/experience";
import HeroSection from "../_sections/hero";
import ProjectsSection from "../_sections/projects";
import SkillsSection from "../_sections/skills";

export default function Home() {
  return (
    <main className="relative">
      {/* Global patterns */}
      <div className="pattern-noise pointer-events-none fixed inset-0 -z-50" />
      <div className="gradient-mesh pointer-events-none fixed inset-0 -z-40" />

      {/* Hero section */}
      <HeroSection />

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
