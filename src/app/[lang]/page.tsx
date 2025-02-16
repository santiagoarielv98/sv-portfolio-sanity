import { Check, ChevronDown, Code } from "lucide-react";

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
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

function CardDemo() {
  return (
    <ExtendedCard className={cn("w-[380px]")} scale="none">
      <CardHeader className="flex-row gap-4">
        <ExtendedButton
          size="icon"
          asChild
          shine="none"
          float="none"
          scale="none"
          gradient="none"
          variant="soft"
        >
          <div>
            <Code />
          </div>
        </ExtendedButton>
        <div className="flex gap-1.5 flex-col flex-1">
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <ExtendedBadge>View all notifications</ExtendedBadge>
      </CardContent>
      <ExtendedSeparator className="my-6" />
      <CardFooter>
        <ExtendedButton className="w-full">
          <Check /> Mark all as read
        </ExtendedButton>
      </CardFooter>
    </ExtendedCard>
  );
}

const Home = () => {
  return (
    <main>
      <section className="flex min-h-[90vh] items-center justify-center relative">
        <div className="mx-auto my-20 max-w-4xl space-y-8 px-4 text-center">
          <Typography variant="h1">Welcome to my Portfolio</Typography>

          <Typography variant="h2" className="max-w-2xl font-light">
            Full Stack Developer Specialized in creating high-performance web
            applications with innovative technologies. 🚀
          </Typography>

          <ExtendedSeparator />

          <ExtendedButton size="lg" className="font-display">
            <Code className="w-6 h-6 mr-2" />
            Get Started
          </ExtendedButton>
        </div>

        <div className="absolute bottom-4 animate-bounce">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </div>
      </section>
      {/* about me*/}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 space-y-4">
            <ExtendedBadge>
              <Code />
              About Me
            </ExtendedBadge>
            <div className="flex items-center gap-4 max-w-2xl mx-auto">
              <ExtendedSeparator className="flex-1 from-transparent to-primary/30 via-none" />
              <Typography variant="h2" className="text-center">
                About Me
              </Typography>
              <ExtendedSeparator className="flex-1 from-primary/30 to-transparent via-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
            <div>
              <Typography variant="h3">Who am I?</Typography>
              <Typography variant="p" className="mt-4">
                I am a Full Stack Developer with a passion for creating
                high-performance web applications with innovative technologies.
                I have experience in building scalable and responsive web
                applications using modern front-end and back-end technologies.
              </Typography>
            </div>
            <div>
              <Typography variant="h3">What do I do?</Typography>
              <Typography variant="p" className="mt-4">
                I specialize in creating high-performance web applications with
                innovative technologies. I have experience in building scalable
                and responsive web applications using modern front-end and
                back-end technologies.
              </Typography>
            </div>
          </div>
        </div>
      </section>
      <CardDemo />
    </main>
  );
};

export default Home;
