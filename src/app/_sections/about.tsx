import { ExtendedBadge } from "@/components/extended-badge";
import { ExtendedButton } from "@/components/extended-button";
import { ExtendedCard } from "@/components/extended-card";
import { ExtendedSeparator } from "@/components/extended-separator";
import { Typography } from "@/components/ui/typography";
import { Code, Download, Medal, Target, Users } from "lucide-react";
import Image from "next/image";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    icon: <Users />,
    title: "Trabajo en Equipo",
    description: "Colaboración efectiva en diversos equipos de desarrollo",
  },
  {
    icon: <Medal />,
    title: "Aprendizaje Rápido",
    description: "Rápida adaptación a nuevas tecnologías y frameworks",
  },
  {
    icon: <Target />,
    title: "Entrega de Proyectos",
    description: "Completé exitosamente múltiples proyectos web",
  },
];

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-20">
        <div className="pattern-connector pattern-connector-top pattern-topography" />
        <div className="pattern-dots absolute inset-0" />
        <div className="pattern-connector pattern-connector-bottom pattern-circuit" />
      </div>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <ExtendedBadge
            variant="gradient"
            className="mx-auto flex items-center gap-2"
          >
            <Code />
            Sobre Mí
          </ExtendedBadge>
          <div className="mx-auto flex max-w-2xl items-center gap-4">
            <ExtendedSeparator className="to-primary/30 flex-1 via-none from-transparent" />
            <Typography variant="h2">Sobre Mí</Typography>
            <ExtendedSeparator className="from-primary/30 flex-1 via-none to-transparent" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Left Column - Image and Quick Info */}
          <div className="space-y-8">
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <Image
                src="/path-to-your-image.jpg"
                alt="Profile Picture"
                fill
                className="object-cover"
              />
              <div className="from-background/80 absolute inset-0 bg-gradient-to-t" />
            </div>
            <ExtendedCard variant="solid" className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Typography variant="small" className="text-muted-foreground">
                    Ubicación
                  </Typography>
                  <Typography variant="h4">Buenos Aires, Argentina</Typography>
                </div>
                <div>
                  <Typography variant="small" className="text-muted-foreground">
                    Experiencia
                  </Typography>
                  <Typography variant="h4">1 Año</Typography>
                </div>
                <div>
                  <Typography variant="small" className="text-muted-foreground">
                    Proyectos Completados
                  </Typography>
                  <Typography variant="h4">10+</Typography>
                </div>
                <div>
                  <Typography variant="small" className="text-muted-foreground">
                    Idiomas
                  </Typography>
                  <Typography variant="h4">Inglés, Español</Typography>
                </div>
              </div>
            </ExtendedCard>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div>
              <Typography variant="h3" className="mb-4">
                ¿Quién soy?
              </Typography>
              <Typography variant="body1" className="space-y-4">
                <p>
                  Soy un Desarrollador Full Stack Junior con una sólida base en
                  desarrollo web y pasión por crear aplicaciones amigables para
                  el usuario. Mi viaje en tecnología comenzó con aprendizaje
                  autodidacta y formación en bootcamp, lo que me ha dado una
                  comprensión sólida de las tecnologías web modernas.
                </p>
                <p>
                  Me enfoco en React.js para desarrollo frontend y Node.js para
                  backend. Me entusiasma aprender nuevas tecnologías y mejorar
                  constantemente mis habilidades a través de experiencia
                  práctica en proyectos.
                </p>
              </Typography>
            </div>

            <ExtendedSeparator />

            <div>
              <Typography variant="h3" className="mb-4">
                Mis Objetivos
              </Typography>
              <Typography variant="body1">
                Crecer como desarrollador asumiendo proyectos desafiantes,
                contribuyendo a aplicaciones significativas y continuando mi
                aprendizaje junto a desarrolladores experimentados. Estoy
                particularmente interesado en dominar las prácticas modernas de
                desarrollo web y mejorar mis habilidades de resolución de
                problemas.
              </Typography>
            </div>

            {/* Achievements */}
            <div className="grid gap-4 sm:grid-cols-3">
              {achievements.map((achievement, index) => (
                <ExtendedCard key={index} variant="solid" className="p-4">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <ExtendedButton size="icon" variant="gradient">
                      {achievement.icon}
                    </ExtendedButton>
                    <Typography variant="h4">{achievement.title}</Typography>
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
                      {achievement.description}
                    </Typography>
                  </div>
                </ExtendedCard>
              ))}
            </div>

            {/* Download CV Button */}
            <div className="pt-4">
              <ExtendedButton variant="gradient" size="lg" className="w-full">
                <Download className="mr-2" />
                Descargar CV
              </ExtendedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
