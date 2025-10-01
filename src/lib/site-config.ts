export const siteConfig = {
  business: {
    name: "Bobsgroen Hoveniers",
    phone: "+31 6 12 34 56 78",
    email: "info@bobsgroen.nl",
    street: "Dorpsstraat 12",
    postalCode: "1234 AB",
    city: "Amersfoort",
    country: "NL",
    openingHours: [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-14:00",
    ],
    serviceArea: ["Amersfoort", "Utrecht", "Soest", "Leusden"],
  },
  site: {
    url: process.env.SITE_URL ?? "http://localhost:3000",
    title: "Bobsgroen Hoveniers – Tuinontwerp, Aanleg & Onderhoud",
    description:
      "Vakmanschap in tuinontwerp, tuinaanleg en periodiek onderhoud. Snelle offerte en transparante prijzen.",
  },
  social: {
    whatsapp: "https://wa.me/31612345678",
    instagram: "https://instagram.com/bobsgroen",
    maps: "https://maps.google.com/?q=Bobsgroen+Hoveniers",
  },
} as const;
