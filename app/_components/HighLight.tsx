"use client";

import { Fragment, type JSX } from "react";

export interface HighlightChunk {
  text: string;
  match: boolean;
}

export interface HighlightProps {
  query: string | string[];
  children: string;
  styles?: React.CSSProperties;
  ignoreCase?: boolean;
  matchAll?: boolean;
}

function getChunks({
  text,
  query,
  ignoreCase = true,
  matchAll = true,
}: {
  text: string;
  query: string | string[];
  ignoreCase?: boolean;
  matchAll?: boolean;
}): HighlightChunk[] {
  if (!query || !text) return [{ text, match: false }];

  const queries = Array.isArray(query) ? query : [query];
  const flags = ignoreCase ? "gi" : "g";
  const pattern = queries.map((q) => q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const regex = new RegExp(pattern, flags);

  const result: HighlightChunk[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push({ text: text.slice(lastIndex, match.index), match: false });
    }
    result.push({ text: match[0], match: true });
    lastIndex = match.index + match[0].length;

    if (!matchAll) break;
  }

  if (lastIndex < text.length) {
    result.push({ text: text.slice(lastIndex), match: false });
  }

  return result;
}

export function Highlight(props: HighlightProps): JSX.Element {
  const { children, query, styles, ignoreCase, matchAll } = props;

  if (typeof children !== "string") {
    throw new Error("The children prop of Highlight must be a string");
  }

  const chunks = getChunks({ text: children, query, ignoreCase, matchAll });

  return (
    <>
      {chunks.map((chunk, index) =>
        chunk.match ? (
          <mark key={index} style={styles}>
            {chunk.text}
          </mark>
        ) : (
          <Fragment key={index}>{chunk.text}</Fragment>
        ),
      )}
    </>
  );
}
