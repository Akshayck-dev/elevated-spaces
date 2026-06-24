import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { splitChars } from "@/lib/split-chars";
import { areaOptions, CONTACT, serviceOptions } from "@/lib/site-data";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-8 md:px-12 py-32 pt-40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div data-reveal>
          <p className="text-eyebrow mb-4">Get a Free Quote</p>
          <h1 data-split className="font-display text-5xl md:text-7xl leading-tight mb-6">
            {splitChars("Come on, we will help you build your dream home.")}
          </h1>
          <p className="text-white/60 leading-relaxed mb-10">
            Share your project details and our team will reach out within one business day.
          </p>
          <div className="space-y-4 text-white/80">
            <p>
              <span className="text-meta text-[#C8A45D] block mb-1">Phone</span>
              <a href={CONTACT.phoneHref} className="font-display text-2xl hover:text-[#C8A45D]">
                {CONTACT.phone}
              </a>
            </p>
            <p>
              <span className="text-meta text-[#C8A45D] block mb-1">Email</span>
              <a href={`mailto:${CONTACT.email}`} className="font-display text-2xl hover:text-[#C8A45D]">
                {CONTACT.email}
              </a>
            </p>
          </div>
        </div>

        <div data-reveal className="border border-white/10 bg-[#0c0c0c] p-8 md:p-10">
          {submitted ? (
            <div className="py-16 text-center">
              <p className="font-display text-4xl text-[#C8A45D] mb-4">Thank you.</p>
              <p className="text-white/60">Our team will contact you shortly to discuss your project.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required placeholder="Your name" className="h-11 bg-black/40" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="+1 (000) 000 0000" className="h-11 bg-black/40" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@email.com" className="h-11 bg-black/40" />
              </div>
              <div className="space-y-2">
                <Label>Service Type</Label>
                <Select name="service" required>
                  <SelectTrigger className="h-11 bg-black/40">
                    <SelectValue placeholder="What type of service are you looking for?" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Approximate Built-up Area</Label>
                <Select name="area" required>
                  <SelectTrigger className="h-11 bg-black/40">
                    <SelectValue placeholder="Select approximate area" />
                  </SelectTrigger>
                  <SelectContent>
                    {areaOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your vision, location, and timeline..."
                  className="bg-black/40 resize-none"
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-[#C8A45D] text-black hover:bg-white text-meta">
                Get Free Quote
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
