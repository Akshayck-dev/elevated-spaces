import { createFileRoute } from "@tanstack/react-router";
import { Process } from "@/components/sections/process";
import { SiteLayout } from "@/components/site/site-layout";
import { useProcessAnimations } from "@/hooks/use-process-animations";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Caeris Homes" },
      { name: "description", content: "Our five-stage design and build process from consultation to handover." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  useProcessAnimations();

  return (
    <SiteLayout>
      <Process />
    </SiteLayout>
  );
}
