import { MetadataRoute } from 'next';
import { siteConfig, getPageUrl } from '@/lib/seo';

// Get all magazine IDs (hardcoded + can be extended with API)
const getAllMagazineIds = (): string[] => {
  return [
    'genz',
    'freedom',
    'jamal-ul-deen-afgani',
    'the-global-landscape',
    'gaza-palestinian-resistance',
    'toxic-call-center',
    'decolonization',
    'mukamat-e-iran',
    'real-cost-capitalist',
    'essence-salah',
    'foundations-love-prophet',
    'islamophobia',
  ];
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: getPageUrl('/library'),
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: getPageUrl('/pricing'),
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: getPageUrl('/download'),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: getPageUrl('/articles'),
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: getPageUrl('/magazines'),
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: getPageUrl('/digests'),
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: getPageUrl('/privacy'),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: getPageUrl('/terms'),
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Dynamic product pages (magazines)
  const magazinePages: MetadataRoute.Sitemap = getAllMagazineIds().map((id) => ({
    url: getPageUrl(`/content/${id}`),
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...magazinePages];
}

