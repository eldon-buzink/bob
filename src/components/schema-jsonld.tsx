import { generateLocalBusinessJsonLd, generateServiceJsonLd } from "@/lib/structured-data";
import { siteConfig } from "@/lib/site-config";

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
  const json = generateServiceJsonLd(service);
  
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
