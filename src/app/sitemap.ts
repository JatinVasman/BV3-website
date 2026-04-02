import { MetadataRoute } from 'next';
import { blogs } from '@/data/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://businessvolunteers.online';

  const blogs_urls: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...blogs_urls,
  ];
}
