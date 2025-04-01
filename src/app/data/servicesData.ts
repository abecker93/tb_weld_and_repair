// src/data/servicesData.ts

export type Service = {
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  price?: number;
  image?: string; // image filename in /public/images/
};

export const services: Service[] = [
  {
    name: "Mobile Welding & Fabrication",
    slug: "mobile-welding",
    shortDescription: "On-site welding repairs and metal fabrication.",
    longDescription: "We bring the shop to you. Structural welding, custom metal work, and emergency repairs — all done in the field.",
    price: 100,
  },
  {
    name: "On-Site Equipment Assessment",
    slug: "site-assessment",
    shortDescription: "We come to your location to evaluate the repair.",
    longDescription: "Get a hands-on inspection of your equipment with a clear repair estimate. The $75 fee is credited if work is scheduled.",
    price: 75,
  },
  {
    name: "Drop-Off Repair",
    slug: "drop-off",
    shortDescription: "Bring your equipment to us for in-shop service.",
    longDescription: "We repair your part at our shop. Ideal for smaller jobs and gear you can haul.",
    price: 50,
  },
  {
    name: "Pickup & Return Service",
    slug: "pickup",
    shortDescription: "We transport equipment up to 3,000 lbs for repair.",
    longDescription: "For customers without a trailer or large equipment transport, we’ll handle pickup and return within our service radius.",
    price: 60,
  },
];
