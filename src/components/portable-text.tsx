"use client";

import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { portableTextComponents } from "./portable-text-components";

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
          className="prose prose-base lg:prose-lg dark:prose-invert prose-li:marker:text-primary"
        >
          <PortableText value={value} components={portableTextComponents} />
        </div>
      );
    } else {
      return (
        <PortableText
          key={block._key}
          value={block}
          components={portableTextComponents}
        />
      );
    }
  });
}
