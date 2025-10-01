import { siteConfig } from "./site-config";

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.business.name,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    url: siteConfig.site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.street,
      postalCode: siteConfig.business.postalCode,
      addressLocality: siteConfig.business.city,
      addressCountry: siteConfig.business.country,
    },
    openingHours: siteConfig.business.openingHours,
    serviceArea: siteConfig.business.serviceArea.map(city => ({
      "@type": "City",
      name: city,
    })),
  };
}

export function generateServiceJsonLd(service: { title: string; summary: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.business.name,
      telephone: siteConfig.business.phone,
      email: siteConfig.business.email,
    },
    url: `${siteConfig.site.url}/diensten/${service.slug}`,
  };
}

export function generateFAQJsonLd(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function generateAggregateRatingJsonLd(rating: number, reviewCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: rating,
    reviewCount: reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}
