import { useState, useEffect, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { areaOptions, serviceOptions } from "@/lib/site-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function QuoteModal({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-open after 10 seconds if not seen before
  useEffect(() => {
    // Check if the user has already seen or closed the popup in this browser
    const hasSeenPopup = localStorage.getItem("quote_popup_seen");
    
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      // Only open if it hasn't been submitted yet
      if (!submitted) {
        setOpen(true);
      }
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [submitted]);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      // If user closes it, remember it so it doesn't pop up again
      localStorage.setItem("quote_popup_seen", "true");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    localStorage.setItem("quote_popup_seen", "true");
    
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 3000);
  };

  const inputClass = "h-10 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 text-sm";
  
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="sm:max-w-[420px] bg-background border border-border/10 text-foreground p-6 z-[110] rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="mb-4">
          <DialogTitle className="font-display text-2xl md:text-3xl text-foreground font-normal">Get a Free Quote</DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="py-12 text-center">
            <p className="font-display text-3xl text-[#C8A45D] mb-4">Thank you.</p>
            <p className="text-foreground/60 text-sm">Our team will contact you shortly to discuss your project.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Input id="modal-name" name="name" required placeholder="Your name" defaultValue="John Doe" className={inputClass} />
            </div>

            <div className="flex gap-4">
              <Select defaultValue="+91">
                <SelectTrigger className="w-[100px] h-10 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-sm">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent className="z-[120]">
                  <SelectItem value="+91">India (+91)</SelectItem>
                  <SelectItem value="+1">USA (+1)</SelectItem>
                  <SelectItem value="+44">UK (+44)</SelectItem>
                  <SelectItem value="+971">UAE (+971)</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex-1 space-y-1">
                <Input id="modal-phone" name="phone" type="tel" required placeholder="Your number" defaultValue="9876543210" className={inputClass} />
              </div>
            </div>
            
            <div className="space-y-1">
              <Input id="modal-email" name="email" type="email" required placeholder="Your email" defaultValue="john.doe@example.com" className={inputClass} />
            </div>

            <div className="space-y-1">
              <Input id="modal-location" name="location" required placeholder="Location of your plot" defaultValue="Kochi, Kerala" className={inputClass} />
            </div>

            <div className="space-y-1">
              <Select name="service" required>
                <SelectTrigger className="h-10 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-sm">
                  <SelectValue placeholder="What type of service are you looking for?" />
                </SelectTrigger>
                <SelectContent className="z-[120] bg-surface border-border/10 text-foreground">
                  {serviceOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Select name="area" required>
                <SelectTrigger className="h-10 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-sm">
                  <SelectValue placeholder="Approximate Built-up Area (Sq. Ft.)" />
                </SelectTrigger>
                <SelectContent className="z-[120] bg-surface border-border/10 text-foreground">
                  {areaOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1">
              <Input
                id="modal-message"
                name="message"
                placeholder="Your message"
                defaultValue="I am looking to build a modern 4-bedroom villa with a pool."
                className={inputClass}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              {/* Fake reCAPTCHA for visual similarity to screenshot */}
              <div className="border border-border/20 bg-background flex items-center gap-2 px-3 py-1.5 rounded shadow-sm self-start">
                <div className="w-5 h-5 border-[1.5px] border-border rounded-sm bg-background flex items-center justify-center"></div>
                <span className="text-xs text-foreground/80">I'm not a robot</span>
              </div>
              
              <Button type="submit" className="h-10 px-8 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-colors w-full sm:w-auto">
                Submit
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
