import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TAVERN_INFO } from '../constants';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
  const fullTitle = title ? `${title} | ${TAVERN_INFO.name}` : TAVERN_INFO.name;
  const fullDescription = description || TAVERN_INFO.tagline;
  const siteUrl = "https://taverna-giorgos.gr"; // Placeholder

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical || siteUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={TAVERN_INFO.name} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />

      {/* Local SEO Schema Placeholder */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": TAVERN_INFO.name,
          "image": "https://picsum.photos/seed/tavern-hero/1200/630",
          "@id": siteUrl,
          "url": siteUrl,
          "telephone": TAVERN_INFO.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": TAVERN_INFO.address,
            "addressLocality": "Χωριό",
            "addressRegion": "Ελλάδα",
            "postalCode": "12345",
            "addressCountry": "GR"
          },
          "openingHoursSpecification": TAVERN_INFO.hours.map(h => ({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": h.day.includes("Δευτέρα") ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] : ["Saturday", "Sunday"],
            "opens": h.time.split(" - ")[0],
            "closes": h.time.split(" - ")[1]
          })),
          "servesCuisine": "Greek",
          "priceRange": "$$"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
