type BreadcrumbItem = {
  name: string;
  item: string;
};

export default function BreadcrumbSchema({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: it.name,
      item: it.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

