import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thehithub.in'
  const lastModified = new Date('2026-01-05T09:20:57+00:00')

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sports`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rules`,
      lastModified,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      priority: 0.8,
    },
  ]
}