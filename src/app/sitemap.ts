import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  const staticRoutes = [
    "",
    "/about",
    "/campaigns",
    "/adopt-a-child",
    "/impact",
    "/gallery",
    "/blog",
    "/csr",
    "/volunteer",
    "/contact",
    "/donate",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route === "/donate" ? 0.9 : 0.8,
  }));

  const campaignSlugs = [
    "langar-daily-wagers",
    "rural-girls-education",
    "mobile-health-vans",
    "clean-drinking-water",
    "winter-warmth-relief",
    "skills-livelihoods",
  ].map((slug) => ({
    url: `${baseUrl}/campaigns/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const focusAreaSlugs = [
    "education",
    "healthcare",
    "hunger-relief",
    "environment",
    "disaster-relief",
  ].map((slug) => ({
    url: `${baseUrl}/focus-areas/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogSlugs = [
    "sustaining-hope-daily-langar",
    "digital-classrooms-punjab",
    "clean-water-project-success",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...campaignSlugs, ...focusAreaSlugs, ...blogSlugs];
}
