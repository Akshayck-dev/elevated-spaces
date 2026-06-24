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
      <DialogContent className="sm:max-w-[600px] bg-[#0c0c0c] border border-white/10 text-white p-6 md:p-10 z-[110]">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl md:text-5xl text-white">Get a Free Quote</DialogTitle>
          <DialogDescription className="text-white/60 text-lg">
            Share your project details and our team will reach out.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-16 text-center">
            <p className="font-display text-4xl text-[#C8A45D] mb-4">Thank you.</p>
            <p className="text-white/60">Our team will contact you shortly to discuss your project.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="modal-name" className="text-white">Full Name</Label>
                <Input id="modal-name" name="name" required placeholder="Your name" className="h-11 bg-black/40 border-white/20 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-phone" className="text-white">Phone Number</Label>
                <Input id="modal-phone" name="phone" type="tel" required placeholder="+1 (000) 000 0000" className="h-11 bg-black/40 border-white/20 text-white" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="modal-email" className="text-white">Email</Label>
              <Input id="modal-email" name="email" type="email" required placeholder="you@email.com" className="h-11 bg-black/40 border-white/20 text-white" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-white">Service Type</Label>
                <Select name="service" required>
                  <SelectTrigger className="h-11 bg-black/40 border-white/20 text-white">
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                    {serviceOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-white">Approx Area</Label>
                <Select name="area" required>
                  <SelectTrigger className="h-11 bg-black/40 border-white/20 text-white">
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
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
              <Label htmlFor="modal-message" className="text-white">Project Details</Label>
              <Textarea
                id="modal-message"
                name="message"
                rows={3}
                placeholder="Tell us about your vision..."
                className="bg-black/40 border-white/20 text-white resize-none"
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
