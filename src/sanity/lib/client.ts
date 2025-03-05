import type { QueryParams } from "next-sanity";
import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Default cache duration - 24 hours in seconds
const DEFAULT_CACHE_DURATION = 60 * 60 * 24;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Using CDN for better performance
  perspective: "published",
  stega: {
    enabled: false, // Disable stega in production for better performance
  },
});

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = DEFAULT_CACHE_DURATION,
  tags = [],
  cache = "force-cache",
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
  cache?: RequestCache;
}) {
  // Define content-specific tags based on query patterns
  const contentTags = [...tags];

  // Auto-detect content type from query for better cache invalidation
  if (query.includes("profile")) contentTags.push("profile");
  if (query.includes("project")) contentTags.push("project");
  if (query.includes("experience")) contentTags.push("experience");
  if (query.includes("skill")) contentTags.push("skill");

  return client.fetch(query, params, {
    cache,
    next: {
      revalidate: contentTags.length ? revalidate : DEFAULT_CACHE_DURATION,
      tags: contentTags,
    },
  });
}
