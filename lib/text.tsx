import { Fragment, type ReactNode } from "react";

// Renders *asterisk-wrapped* words as amber italic. e.g. "a *different* lens"
export function amberItalic(text: string): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic text-amber not-italic-fallback" style={{ fontStyle: "italic" }}>
          {part.slice(1, -1)}
        </em>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
