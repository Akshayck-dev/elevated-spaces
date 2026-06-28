import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/site-layout";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";
import { ProjectsHero } from "@/components/sections/projects-hero";
import { ProjectsFeatured } from "@/components/sections/projects-featured";
import { ProjectsStats } from "@/components/sections/projects-stats";
import { ProjectsWhyChoose } from "@/components/sections/projects-why-choose";
import { ProjectsProcess } from "@/components/sections/projects-process";
import { ProjectsTestimonials } from "@/components/sections/projects-testimonials";
import { ProjectsCTABanner } from "@/components/sections/projects-cta-banner";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Caeris Homes" },
      { name: "description", content: "Explore luxury residential projects delivered on time with unwavering commitment." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  useRevealAnimations();

  return (
    <SiteLayout>
      <ProjectsHero />
      <ProjectsFeatured />
      <ProjectsStats />
      <ProjectsWhyChoose />
      <ProjectsProcess />
      <ProjectsTestimonials />
      <ProjectsCTABanner />
    </SiteLayout>
  );
}
