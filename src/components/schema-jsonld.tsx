import { generateLocalBusinessJsonLd } from "@/lib/structured-data";

export function LocalBusinessJsonLd() {
  const json = generateLocalBusinessJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function ServiceJsonLd({ service }: { service: { title: string; summary: string; slug: string } }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "LocalBusiness",
      name: "Hovenier Jansen",
      telephone: "+31 6 12 34 56 78",
      email: "info@hovenier-jansen.nl",
    },
    url: `https://www.hovenier-jansen.nl/diensten/${service.slug}`,
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: Array<{ q: string; a: string }> }) {
  const json = {
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
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export function AggregateRatingJsonLd({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: rating,
    reviewCount: reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
