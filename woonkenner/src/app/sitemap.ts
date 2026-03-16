import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://woonkenner.nl";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "daily", priority: 1.0 },

    { url: `${baseUrl}/hypotheek`, lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/kosten-koper`, lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/huis-kopen`, lastModified, changeFrequency: "weekly", priority: 0.9 },

    { url: `${baseUrl}/verduurzaming`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/huurrechten`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/notaris`, lastModified, changeFrequency: "weekly", priority: 0.8 },

    { url: `${baseUrl}/begrippenlijst`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
