import { MetadataRoute } from 'next';
import { siteConfig, getPageUrl } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NODE_ENV === 'production';
  
  // In development/staging, disallow all crawling
  if (!isProduction) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
      sitemap: getPageUrl('/sitemap.xml'),
    };
  }
  
  // Production: allow crawling with specific disallows
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/delete-account',
          '/delete-data',
          '/login',
          '/signup',
          '/forgot-password',
        ],
      },
    ],
    sitemap: getPageUrl('/sitemap.xml'),
  };
}

