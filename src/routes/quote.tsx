import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRevealAnimations } from "@/hooks/use-reveal-animations";
import heroVideo from "@/assets/Villa_design_and_construction_an…_202606261727.mp4";
import logoImg from "@/assets/logo-caeris.png";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Quote — Creo Homes" },
      { name: "description", content: "Request a custom quote for your architectural or construction project." },
    ],
  }),
  component: QuotePage,
});

const serviceOptions = [
  "Architecture",
  "Interior Design",
  "Turnkey Construction",
  "Renovation",
  "Consultation",
];

const areaOptions = [
  "Less than 1000",
  "1000 - 2500",
  "2500 - 5000",
  "5000 - 10000",
  "10000+",
];

function QuotePage() {
  useRevealAnimations();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "h-14 border-0 border-b border-border/20 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 text-base sm:text-lg transition-colors";

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row font-sans">
      
      {/* Left Column - Video Background (Sticky on Desktop) */}
      <div className="w-full lg:w-[45%] lg:h-screen relative overflow-hidden hidden lg:block sticky top-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        
        <div className="relative z-10 p-12 h-full flex flex-col justify-between">
          <Link to="/" className="inline-block hover:opacity-70 transition-opacity">
            <img src={logoImg} alt="Creo Homes" className="h-16 brightness-0 invert" />
          </Link>
          
          <div data-reveal>
            <h1 className="text-white text-5xl xl:text-6xl font-display leading-[1.1] mb-6">
              Let's craft your<br />dream space.
            </h1>
            <p className="text-white/70 text-lg max-w-md">
              Share the details of your project with us. Our team of expert architects and builders will get back to you with a customized proposal and consultation schedule.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Header (Only visible on small screens) */}
      <div className="lg:hidden bg-[#111] p-4 sm:p-6 text-white">
        <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 min-h-[44px]">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-display leading-[1.1] mb-4">Let's craft your dream space.</h1>
        <p className="text-white/70">Share your project details to get a customized quote.</p>
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-[55%] min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-12 lg:p-20 bg-background text-foreground relative z-10">
        
        {/* Absolute Back button for desktop */}
        <div className="absolute top-12 right-12 hidden lg:block">
           <Link to="/" className="text-foreground/50 hover:text-foreground transition-colors flex items-center gap-2">
             <ArrowLeft size={20} /> Return to site
           </Link>
        </div>

        <div className="w-full max-w-2xl" data-reveal>
          {submitted ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-red-600/10 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h2 className="text-5xl font-display mb-4 text-[#C8A45D]">Quote Request Received</h2>
              <p className="text-foreground/70 text-lg leading-relaxed max-w-md mx-auto">
                Thank you for reaching out to Creo Homes. Our team is reviewing your project details and will contact you within 24 hours.
              </p>
              <Link to="/" className="inline-block mt-10 border-b border-foreground pb-1 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-colors">
                Return to homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Your Details</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <Input name="firstName" required placeholder="First Name" defaultValue="John" className={inputClass} />
                  <Input name="lastName" required placeholder="Last Name" defaultValue="Doe" className={inputClass} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Contact Info</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                  <Input name="email" type="email" required placeholder="Email Address" defaultValue="john.doe@example.com" className={inputClass} />
                  
                  <div className="flex gap-4">
                    <Select defaultValue="+91">
                      <SelectTrigger className="w-[110px] h-14 border-0 border-b border-border/20 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-base sm:text-lg">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">India (+91)</SelectItem>
                        <SelectItem value="+1">USA (+1)</SelectItem>
                        <SelectItem value="+44">UK (+44)</SelectItem>
                        <SelectItem value="+971">UAE (+971)</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input name="phone" type="tel" required placeholder="Phone Number" defaultValue="9876543210" className={`flex-1 ${inputClass}`} />
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Project Information</label>
                <div className="pt-2 space-y-8">
                  <Input name="location" required placeholder="Location of your plot" defaultValue="Kochi, Kerala" className={inputClass} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Select name="service" required defaultValue="Architecture">
                      <SelectTrigger className="h-14 border-0 border-b border-border/20 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-base sm:text-lg">
                        <SelectValue placeholder="Service Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select name="area" required defaultValue="2500 - 5000">
                      <SelectTrigger className="h-14 border-0 border-b border-border/20 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-base sm:text-lg">
                        <SelectValue placeholder="Built-up Area (Sq. Ft.)" />
                      </SelectTrigger>
                      <SelectContent>
                        {areaOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Textarea
                    name="message"
                    required
                    placeholder="Tell us more about your vision..."
                    defaultValue="I am looking to build a modern 4-bedroom villa with a pool."
                    className="min-h-[120px] border-0 border-b border-border/20 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 text-base sm:text-lg resize-none pt-4"
                  />
                </div>
              </div>
              
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="border border-border/20 bg-background flex items-center gap-3 px-4 py-3 min-h-[44px] rounded shadow-sm self-start">
                  <div className="w-5 h-5 border-[1.5px] border-border rounded-sm bg-background flex items-center justify-center"></div>
                  <span className="text-sm text-foreground/80">I'm not a robot</span>
                </div>
                
                <Button type="submit" className="h-14 px-12 bg-red-600 hover:bg-red-700 text-white rounded-sm font-medium transition-colors w-full sm:w-auto text-lg">
                  Submit Request
                </Button>
              </div>

            </form>
          )}
        </div>
      </div>

    </div>
  );
}
