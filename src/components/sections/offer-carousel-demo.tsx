import { OfferCarousel, type Offer } from "@/components/ui/offer-carousel";

// Sample data for the carousel
const sampleOffers: Offer[] = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop",
    imageAlt: "International travel landmarks collage",
    tag: "Discount",
    title: "Up to ₹3000 OFF",
    description: "On International Flights.",
    brandLogoSrc: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=40&h=40&auto=format&fit=crop",
    brandName: "Travel Co",
    promoCode: "EMTWID",
    href: "#",
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop",
    imageAlt: "A delicious looking burger",
    tag: "Discount",
    title: "Snack more. Save more.",
    description: "Get ₹75 OFF on purchases of ₹299 or more.",
    brandLogoSrc: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=40&h=40&auto=format&fit=crop",
    brandName: "Burger Joint",
    promoCode: "TWID75",
    href: "#",
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Logos of popular streaming services",
    tag: "Discount",
    title: "Flat ₹550 OFF on Timesprime",
    description: "Exclusive offer on Times Prime Membership.",
    brandLogoSrc: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=40&h=40&auto=format&fit=crop",
    brandName: "Timesprime",
    promoCode: "TWID550",
    href: "#",
  },
  {
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=60",
    imageAlt: "A person holding a phone with a payment app",
    tag: "Cashback",
    title: "10% Instant Cashback",
    description: "On RuPay Credit Card transactions.",
    brandLogoSrc: "https://images.unsplash.com/photo-1580519542036-ed47f3e42b09?w=40&h=40&auto=format&fit=crop",
    brandName: "Rupay CC",
    promoCode: "RCC10",
    href: "#",
  },
  {
    id: 5,
    imageSrc: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Gourmet food on a plate",
    tag: "Offer",
    title: "Flat 20% OFF",
    description: "On dining at partner restaurants.",
    brandLogoSrc: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=40&h=40&auto=format&fit=crop",
    brandName: "Dineout",
    promoCode: "DINE20",
    href: "#",
  }
];

export function OfferCarouselDemo() {
  return (
    <div className="w-full bg-background flex flex-col items-center justify-center py-16 px-4 md:px-10">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Deals of the Day</h2>
        <OfferCarousel offers={sampleOffers} />
      </div>
    </div>
  );
}
