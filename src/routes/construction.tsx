import { createFileRoute } from '@tanstack/react-router'
import { SiteLayout } from '@/components/site/site-layout'
import { PageHero } from '@/components/site/page-hero'
import { FinalCTA } from '@/components/sections/final-cta'
import { ConstructionStats } from '@/components/sections/construction-stats'
import { ConstructionFeatures } from '@/components/sections/construction-features'
import { ConstructionPortfolio } from '@/components/sections/construction-portfolio'
import { useRevealAnimations } from '@/hooks/use-reveal-animations'

import heroImg from '@/assets/construction-hero.png'

export const Route = createFileRoute('/construction')({
  component: ConstructionRoute,
})

function ConstructionRoute() {
  useRevealAnimations()

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Construction"
        title="We Build Your Dream Home"
        description="We are world renowned for delivering inventive engineering solutions for challenging construction projects. Our architects and engineers create strong, innovative designs for complex buildings, keeping function, schedule, budget, safety, and sustainability in mind."
        image={heroImg}
      />
      <ConstructionStats />
      <ConstructionPortfolio />
      <ConstructionFeatures />
      <FinalCTA />
    </SiteLayout>
  )
}
