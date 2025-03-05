import { sanityFetch } from "@/sanity/lib/client";
import { getProfileQuery } from "@/sanity/lib/queries";
import { cache } from "react";
import type { Locale } from "@/lib/i18n/config";

// Cache duration for profile data - 7 days in seconds
const PROFILE_CACHE_DURATION = 604800;

// Enhanced with long-term caching and specific tags
export const getUserData = cache(async (params: { lang: Locale }) =>
  sanityFetch({
    query: getProfileQuery,
    params,
    revalidate: PROFILE_CACHE_DURATION,
    tags: ["profile", "global"],
    cache: "force-cache",
  }),
);

// Add a utility function to manually invalidate the cache if needed
export async function invalidateUserDataCache() {
  try {
    await fetch("/api/revalidate?tag=profile", { method: "POST" });
    return { success: true };
  } catch (error) {
    console.error("Failed to invalidate cache:", error);
    return { success: false, error };
  }
}
