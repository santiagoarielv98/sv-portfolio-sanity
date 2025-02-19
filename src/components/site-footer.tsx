import { ExtendedSeparator } from "./extended-separator";
import { Typography } from "./ui/typography";
import { ExtendedButton } from "./extended-button";
import { ExtendedCard } from "./extended-card";
import { Code, Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: <Github className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="h-4 w-4" />,
  },
  {
    name: "Email",
    href: "mailto:contact@example.com",
    icon: <Mail className="h-4 w-4" />,
  },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary/5 border-primary/10 border-t">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <ExtendedButton variant="ghost" className="font-bold" asChild>
              <a href="#" className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                <span className="font-display">Portfolio</span>
              </a>
            </ExtendedButton>
            <Typography
              variant="body2"
              className="text-muted-foreground max-w-md"
            >
              Full Stack Developer specializing in building exceptional digital
              experiences. Let&apos;s work together to bring your ideas to life.
            </Typography>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <Typography variant="h4">Quick Links</Typography>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <ExtendedButton
                  key={link.name}
                  variant="ghost"
                  className="justify-start"
                  size="sm"
                  asChild
                >
                  <a href={link.href}>{link.name}</a>
                </ExtendedButton>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="space-y-4">
            <Typography variant="h4">Let&apos;s Connect</Typography>
            <ExtendedCard variant="solid" className="backdrop-blur-none">
              <div className="space-y-4 p-6">
                <Typography variant="body2" className="text-muted-foreground">
                  Available for freelance opportunities and full-time positions.
                </Typography>
                <ExtendedButton className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </ExtendedButton>
              </div>
            </ExtendedCard>
          </div>
        </div>

        <ExtendedSeparator className="my-8" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Typography variant="small" className="text-muted-foreground">
            © {new Date().getFullYear()} Santiago. All rights reserved.
          </Typography>
          <div className="flex gap-2">
            {socials.map((social) => (
              <ExtendedButton
                key={social.name}
                variant="ghost"
                size="icon"
                asChild
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              </ExtendedButton>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
