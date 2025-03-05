import { sanityFetch } from "@/sanity/lib/client";
import { getProfileQuery } from "@/sanity/lib/queries";
import { cache } from "react";
import type { Locale } from "@/lib/i18n/config";

export const getUserData = cache(async (params: { lang: Locale }) =>
  sanityFetch({
    query: getProfileQuery,
    params,
  }),
);
