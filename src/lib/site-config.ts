export const siteConfig = {
  business: {
    name: "Bobsgroen Hoveniers",
    phone: "+31 6 12 34 56 78",
    email: "info@bobsgroen.nl",
    street: "Bazuinlaan 131",
    postalCode: "4876AX",
    city: "Etten-Leur",
    country: "NL",
    openingHours: [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-14:00",
    ],
    serviceArea: ["Etten-Leur", "Zevenbergen", "Prinsenbeek", "Breda"],
  },
  site: {
    url: process.env.SITE_URL ?? "http://localhost:3000",
    title: "Bobsgroen Hoveniers – Tuinontwerp, Aanleg & Onderhoud",
    description:
      "Vakmanschap in tuinontwerp, tuinaanleg en periodiek onderhoud. Gratis offerte en transparante prijzen.",
  },
  social: {
    whatsapp: "https://wa.me/31612345678",
    instagram: "https://instagram.com/bobsgroen",
    maps: "https://maps.google.com/?q=Bazuinlaan+131,+4876AX+Etten-Leur",
  },
} as const;
