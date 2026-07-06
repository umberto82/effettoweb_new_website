export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "EffettoWeb",
    description:
      "Web agency a Roma specializzata in siti web professionali, e-commerce e marketing digitale.",
    url: "https://effettoweb.com",
    email: "umberto@effettoweb.com",
    telephone: "+39 329 4248 683",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roma",
      addressCountry: "IT",
    },
    sameAs: ["https://linkedin.com"],
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "€€",
    areaServed: "IT",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servizi Web",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Siti Web Professionali" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-commerce" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Marketing Digitale" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manutenzione e Supporto" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
