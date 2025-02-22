"use client";

import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

type Props = {
  value: PortableTextBlock[];
};

export default function Blocks({ value }: Props) {
  let div: PortableTextBlock[] = [];
  return value.map((block, i, blocks) => {
    if (block._type === "block") {
      div.push(block);

      if (blocks[i + 1]?._type === "block") return null;

      const value = div;
      div = [];

      return (
        <div
          key={block._key}
          className="prose-lg prose-h2:max-w-[32ch] prose-h2:text-5xl"
        >
          <PortableText
            value={value}
            components={{
              marks: {
                // ...
              },
            }}
          />
        </div>
      );
    } else {
      return <PortableText key={block._key} value={block} />;
    }
  });
}
