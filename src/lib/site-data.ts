import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

export const CONTACT = {
  phone: "+1 (212) 555 0188",
  phoneHref: "tel:+12125550188",
  whatsapp: "+1 (212) 555 0188",
  whatsappHref: "https://wa.me/12125550188",
  email: "studio@maisonnoire.co",
};

export const services = [
  {
    title: "Architecture",
    description: "We craft beautiful, inspiring spaces that open a property's full potential.",
  },
  {
    title: "Construction",
    description: "We manage every stage of construction, from design to completion, with exceptional project management.",
  },
  {
    title: "Interior",
    description: "Timeless, elegant interiors that balance quality, comfort, and the way you actually live.",
  },
  {
    title: "Turnkey Projects",
    description: "Complete design-to-handover delivery — one studio managing every stage of your residence.",
  },
];

export const projects = [
  { img: project1, client: "Mr. Moretti & Family", location: "Lake Como, Italy", slug: "villa-aurelia" },
  { img: project2, client: "Mr. Whitford & Family", location: "Manhattan, NY", slug: "penthouse-47" },
  { img: project3, client: "Mr. Sterling & Family", location: "London, UK", slug: "atrium-hq" },
  { img: project4, client: "Mr. Laurent & Family", location: "Paris, France", slug: "maison-elysee" },
  { img: project1, client: "Mr. Chen & Family", location: "Singapore", slug: "orchard-residence" },
  { img: project2, client: "Mr. Al-Rashid & Family", location: "Dubai, UAE", slug: "palm-villa" },
  { img: project3, client: "Mr. Nakamura & Family", location: "Kyoto, Japan", slug: "zen-retreat" },
  { img: project4, client: "Mr. Bennett & Family", location: "Hamptons, US", slug: "coastal-estate" },
  { img: project1, client: "Mr. Rossi & Family", location: "Florence, Italy", slug: "tuscan-manor" },
];

export const whyPillars = [
  {
    title: "Flexibility",
    subtitle: "An inclusive model",
    description:
      "A team of creative architects who combine vision with disciplined practice to create beautiful, inspirational spaces tailored to you.",
  },
  {
    title: "Simplicity",
    subtitle: "More clarity, less noise",
    description:
      "We focus on making your home a place you love — timelessly elegant interiors with equal attention to quality and comfort.",
  },
  {
    title: "Adaptability",
    subtitle: "Evolves with you over time",
    description:
      "From design conception to construction completion, we handle every aspect with unmatched project management and transparency.",
  },
];

export const guarantees = [
  "Timely Delivery",
  "Premium European Materials",
  "15-Year Structural Warranty",
  "Assured Lifetime Service",
  "Direct Atelier Craftsmanship",
];

export const testimonials = [
  {
    image: client1,
    name: "Isabella Moretti & Family",
    location: "Villa Aurelia · Lake Como",
    quote:
      "Maison Noire has exceptionally delivered our home with strong experience, dedication and commitment. Their professionalism was evident from the first design meeting through to handover. On-time delivery, quality, and customer support — we recommend them without hesitation.",
  },
  {
    image: client2,
    name: "Charles Whitford & Family",
    location: "Penthouse 47 · Manhattan",
    quote:
      "From start to finish, the process was smooth and hassle-free. The team was friendly, attentive, and ensured every need was met. They went above and beyond at every stage — thank you for fulfilling our dream residence.",
  },
  {
    image: client3,
    name: "Amelia Sterling & Family",
    location: "Atrium HQ · London",
    quote:
      "When we decided to build abroad, finding a professional studio was a huge challenge. Maison Noire maintained timelines, transparent budgets, and seamless coordination between design and site teams. They delivered one month ahead of schedule.",
  },
];

export const serviceOptions = [
  "Architecture Design Only",
  "Interior Design",
  "Construction Only",
  "Complete Turnkey Project (Design + Build + Interiors)",
];

export const areaOptions = [
  "2,500 – 3,000 sq.ft",
  "3,000 – 4,000 sq.ft",
  "4,000 – 5,000 sq.ft",
  "Above 5,000 sq.ft",
];
