import { createFileRoute } from "@tanstack/react-router";
import { ProjectCTA } from "@/components/sections/project-cta";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { SiteLayout } from "@/components/site/site-layout";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Maison Noire" },
      { name: "description", content: "Explore luxury residential projects delivered on time with unwavering commitment." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  useRevealAnimations();

  return (
    <SiteLayout>
      <div className="pt-24">
        <ProjectsGrid />
      </div>
      <ProjectCTA />
    </SiteLayout>
  );
}
