import { createFileRoute } from "@tanstack/react-router";
import { ProjectCTA } from "@/components/sections/project-cta";
import { SiteLayout } from "@/components/site/site-layout";
import { PageHero } from "@/components/site/page-hero";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Caeris Homes" },
      { name: "description", content: "Get in touch with us for your architecture, construction, interior design or turnkey projects." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  useRevealAnimations();

  const inputClass = "h-12 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50";

  return (
    <SiteLayout>
      <PageHero 
        eyebrow="Get In Touch"
        title="Let's Build Something Extraordinary"
        description="Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen and bring your vision to life."
        image={heroImg}
      />

      <section className="py-20 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form Column */}
          <div data-reveal className="space-y-10">
            <div>
              <h2 className="font-display text-4xl mb-4">Send a Message</h2>
              <p className="text-foreground/70">Fill out the form below and we will get back to you within 24 hours.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <Input name="firstName" required placeholder="First Name" defaultValue="John" className={inputClass} />
                </div>
                <div className="space-y-1">
                  <Input name="lastName" required placeholder="Last Name" defaultValue="Doe" className={inputClass} />
                </div>
              </div>
              
              <div className="space-y-1">
                <Input name="email" type="email" required placeholder="Email Address" defaultValue="john.doe@example.com" className={inputClass} />
              </div>

              <div className="space-y-1">
                <Input name="phone" type="tel" placeholder="Phone Number" defaultValue="+91 9876543210" className={inputClass} />
              </div>

              <div className="space-y-1">
                <Textarea
                  name="message"
                  required
                  placeholder="How can we help you?"
                  defaultValue="I am looking to build a modern 4-bedroom villa with a pool."
                  className="min-h-[120px] border-0 border-b border-border/30 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <Button type="submit" className="h-12 px-10 bg-white hover:bg-gray-100 text-black rounded-sm font-medium transition-colors shadow-sm mt-4">
                Send Message
              </Button>
            </form>
          </div>

          {/* Map & Info Column */}
          <div data-reveal className="space-y-10 flex flex-col">
            <div>
              <h2 className="font-display text-4xl mb-4">Our Office</h2>
              <div className="space-y-4 text-foreground/70">
                <p>
                  <strong>Address:</strong><br />
                  123 Architecture Blvd, Suite 400<br />
                  Design District, NY 10001
                </p>
                <p>
                  <strong>Email:</strong> hello@caerishomes.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div className="w-full flex-1 min-h-[400px] bg-surface relative overflow-hidden border border-border/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1714652414737!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <ProjectCTA />
    </SiteLayout>
  );
}
