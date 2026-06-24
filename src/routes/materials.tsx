import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/sections/before-after";
import { Materials } from "@/components/sections/materials";
import { SiteLayout } from "@/components/site/site-layout";
import { useMaterialsAnimations } from "@/hooks/use-materials-animations";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "Materials — Maison Noire" },
      { name: "description", content: "Premium materials sourced from heritage workshops across Europe and Japan." },
    ],
  }),
  component: MaterialsPage,
});

function MaterialsPage() {
  useMaterialsAnimations();

  return (
    <SiteLayout>
      <Materials />
      <BeforeAfter />
    </SiteLayout>
  );
}
