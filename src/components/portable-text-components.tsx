import type { PortableTextReactComponents } from "next-sanity";
import Link from "next/link";

export const portableTextComponents: Partial<PortableTextReactComponents> = {
  types: {
    code: ({ value }) => {
      return (
        <pre className="my-4 overflow-x-auto rounded bg-gray-100 p-4 dark:bg-gray-800">
          <code className="language-{value.language}">{value.code}</code>
        </pre>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="my-5 text-4xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="my-5 text-3xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="my-4 text-2xl font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="my-4 text-xl font-bold">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-4">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-blue-500 underline hover:text-blue-700"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1 py-0.5 dark:bg-gray-800">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 ml-4 list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 ml-4 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};
