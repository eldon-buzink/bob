export const siteConfig = {
  business: {
    name: "Bobsgroen Hoveniers",
    phone: "+31 6 81 08 41 28",
    email: "info@bobsgroen.nl",
    street: "Groenstraat 9A",
    postalCode: "4716 SK",
    city: "Sprundel",
    country: "NL",
    openingHours: [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-14:00",
    ],
    serviceArea: ["Etten-Leur", "Zevenbergen", "Prinsenbeek", "Breda", "Roosendaal", "Sprundel", "Hoeven"],
  },
  site: {
    url: process.env.SITE_URL ?? "http://localhost:3000",
    title: "Bobsgroen Hoveniers – Tuinontwerp, Aanleg & Onderhoud",
    description:
      "Professionele hovenier in Etten-Leur, Roosendaal, Sprundel en omgeving. Tuinontwerp, tuinaanleg en periodiek onderhoud. Gratis offerte en transparante prijzen.",
  },
  social: {
    whatsapp: "https://wa.me/31681084128",
    instagram: "https://instagram.com/bobsgroen",
    maps: "https://maps.google.com/?q=Groenstraat+9A,+4716+SK+Sprundel",
  },
} as const;
