import { MetadataRoute } from 'next';
import { blogData } from '../lib/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sqemebi.ge';
  const routes = ['', '/about', '/services', '/projects', '/contact', '/blog'];
  const blogSlugs = Object.keys(blogData['ka']);

  const sitemap: MetadataRoute.Sitemap = [];

  // Georgian (default) — no /ka prefix
  routes.forEach((route) => {
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' || route === '/projects' || route === '/blog' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    });
  });

  // Georgian blog posts — no /ka prefix
  blogSlugs.forEach((slug) => {
    sitemap.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    });
  });

  // English and Russian — keep locale prefix
  ['en', 'ru'].forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/projects' || route === '/blog' ? 'weekly' : 'monthly',
        priority: route === '' ? 0.9 : 0.7,
      });
    });

    // Localized blog posts
    blogSlugs.forEach((slug) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.65,
      });
    });
  });

  return sitemap;
}
