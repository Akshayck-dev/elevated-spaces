import { createFileRoute } from "@tanstack/react-router";
import { ProjectCTA } from "@/components/sections/project-cta";
import { QuoteForm } from "@/components/sections/quote-form";
import { SiteLayout } from "@/components/site/site-layout";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote — Maison Noire" },
      { name: "description", content: "Request a free quote for architecture, construction, interior design or turnkey projects." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useRevealAnimations();

  return (
    <SiteLayout>
      <QuoteForm />
      <ProjectCTA />
    </SiteLayout>
  );
}
