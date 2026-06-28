import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { ProjectCTA } from "@/components/sections/project-cta";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { WeEnsure } from "@/components/sections/we-ensure";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhyUs } from "@/components/sections/why-us";
import { YourStory } from "@/components/sections/your-story";
import { SiteLayout } from "@/components/site/site-layout";
import { useHomeAnimations } from "@/hooks/use-home-animations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caeris Homes — Luxury Home Builders & Architects" },
      {
        name: "description",
        content: "Luxury home builders and leading architects crafting dream residences — architecture, construction, interiors and turnkey delivery.",
      },
      { property: "og:title", content: "Caeris Homes — We Build Your Dream Home" },
      { property: "og:description", content: "From vision to reality. Architecture, construction, interiors and turnkey projects worldwide." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  useHomeAnimations();

  return (
    <SiteLayout>
      <Hero />
      <Services />
      <WhatWeDo />
      <ProjectsGrid limit={6} showViewAll />
      <ProjectCTA />
      <WhyUs />
      <YourStory />
      <Testimonials />
      <Stats />
    </SiteLayout>
  );
}
