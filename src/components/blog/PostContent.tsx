function renderParagraphs(content: string) {
  return content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={index} className="mt-8 text-2xl font-bold text-primary-900">
            {paragraph.replace(/^##\s+/, "")}
          </h2>
        );
      }

      if (paragraph.startsWith("### ")) {
        return (
          <h3 key={index} className="mt-6 text-xl font-bold text-primary-900">
            {paragraph.replace(/^###\s+/, "")}
          </h3>
        );
      }

      const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={index} className="mt-4 leading-relaxed text-gray-700">
          {parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return (
                <strong key={i} className="font-semibold text-gray-900">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </p>
      );
    });
}

export default function PostContent({ content }: { content: string }) {
  return <div className="prose prose-lg max-w-none">{renderParagraphs(content)}</div>;
}
