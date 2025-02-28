import { sanityFetch } from "@/sanity/lib/live";
import { getAllprojectSlugs } from "@/sanity/lib/queries";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: projectSlugs } = await sanityFetch({
    query: getAllprojectSlugs,
    perspective: "published",
    stega: false,
  });

  const baseUrl = "https://santiagoarielv98.vercel.app";

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/es/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  const projectRoutes =
    projectSlugs?.map((project) => ({
      url: `${baseUrl}/en/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })) || [];

  const projectRoutesEs =
    projectSlugs?.map((project) => ({
      url: `${baseUrl}/es/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })) || [];

  return [...routes, ...projectRoutes, ...projectRoutesEs];
}
