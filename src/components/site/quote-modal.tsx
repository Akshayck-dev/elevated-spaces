import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { areaOptions, serviceOptions } from "@/lib/site-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function QuoteModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-background border border-border/10 text-foreground p-6 md:p-10 z-[110]">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl md:text-5xl text-foreground">Get a Free Quote</DialogTitle>
          <DialogDescription className="text-foreground/60 text-lg">
            Share your project details and our team will reach out.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-16 text-center">
            <p className="font-display text-4xl text-[#C8A45D] mb-4">Thank you.</p>
            <p className="text-foreground/60">Our team will contact you shortly to discuss your project.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="modal-name" className="text-foreground">Full Name</Label>
                <Input id="modal-name" name="name" required placeholder="Your name" className="h-11 bg-background/40 border-border/20 text-foreground" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-phone" className="text-foreground">Phone Number</Label>
                <Input id="modal-phone" name="phone" type="tel" required placeholder="+1 (000) 000 0000" className="h-11 bg-background/40 border-border/20 text-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="modal-email" className="text-foreground">Email</Label>
              <Input id="modal-email" name="email" type="email" required placeholder="you@email.com" className="h-11 bg-background/40 border-border/20 text-foreground" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-foreground">Service Type</Label>
                <Select name="service" required>
                  <SelectTrigger className="h-11 bg-background/40 border-border/20 text-foreground">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent className="bg-surface border-border/10 text-foreground">
                    {serviceOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Approx Area</Label>
                <Select name="area" required>
                  <SelectTrigger className="h-11 bg-background/40 border-border/20 text-foreground">
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent className="bg-surface border-border/10 text-foreground">
                    {areaOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-message" className="text-foreground">Project Details</Label>
              <Textarea
                id="modal-message"
                name="message"
                rows={3}
                placeholder="Tell us about your vision..."
                className="bg-background/40 border-border/20 text-foreground resize-none"
              />
            </div>
            <Button type="submit" className="w-full h-12 bg-[#C8A45D] text-black hover:bg-white text-meta uppercase tracking-widest mt-2">
              Submit Request
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
