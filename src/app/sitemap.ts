import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vsokenner.nl";
  const lastModified = new Date();

  return [
    // Tier 1: Homepage
    { url: baseUrl, lastModified, changeFrequency: "daily", priority: 1.0 },

    // Tier 2: Primaire pagina's met calculators en tools
    { url: `${baseUrl}/advies`, lastModified, changeFrequency: "daily", priority: 0.95 },
    { url: `${baseUrl}/transitievergoeding`, lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/ww-rechten`, lastModified, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/wat-is-een-vso`, lastModified, changeFrequency: "weekly", priority: 0.9 },

    // Tier 2b: Voorbeeldpagina (hoge zoekwaarde)
    { url: `${baseUrl}/voorbeelden`, lastModified, changeFrequency: "weekly", priority: 0.9 },

    // Tier 3: Secundaire pagina's
    { url: `${baseUrl}/bedenktijd`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/onderhandelen`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/juridisch-advies`, lastModified, changeFrequency: "weekly", priority: 0.8 },

    // Tier 4: Referentiepagina's
    { url: `${baseUrl}/begrippenlijst`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
