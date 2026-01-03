/**
 * SEO Configuration - Single Source of Truth
 * 
 * This file contains all SEO-related constants and utilities.
 * Update these values to change site-wide SEO settings.
 */

// Site Information
export const siteConfig = {
  name: 'EchoReads',
  title: 'EchoReads - Your Digital Reading Companion',
  titleTemplate: '%s | EchoReads',
  description: 'Discover the world\'s best magazines, articles, and digests in one beautiful app. Read anywhere, anytime with our seamless reading experience.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://echoreads.online',
  ogImage: '/splash.png', // Default OG image path (will be converted to absolute URL)
  ogImageAlt: 'EchoReads - Digital Reading Companion',
  author: 'EchoReads',
  brand: 'EchoReads',
  keywords: ['magazines', 'articles', 'digests', 'reading', 'ebooks', 'digital reading', 'Islamic literature', 'Urdu magazines'],
  locale: 'en_US',
  type: 'website',
  
  // Social Media (add your handles if available)
  twitter: {
    handle: '@echoreads', // TODO: Update with actual Twitter handle
    cardType: 'summary_large_image' as const,
  },
  
  // Contact Information (if applicable)
  contact: {
    email: 'info@echoreads.online', // TODO: Update with actual contact email
  },
};

/**
 * Generate absolute URL for images/assets
 */
export function getAbsoluteUrl(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${siteConfig.url}/${cleanPath}`;
}

/**
 * Generate absolute URL for pages
 */
export function getPageUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

/**
 * Generate page title with template
 */
export function getPageTitle(title?: string): string {
  if (!title) return siteConfig.title;
  if (title === siteConfig.title) return title;
  return siteConfig.titleTemplate.replace('%s', title);
}

/**
 * Generate metadata object for Next.js
 */
export function generateMetadata({
  title,
  description,
  image,
  imageAlt,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
}): {
  title: string;
  description: string;
  alternates: { canonical: string };
  openGraph: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: Array<{ url: string; width: number; height: number; alt: string }>;
    locale: string;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images?: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
} {
  const pageTitle = getPageTitle(title);
  const pageDescription = description || siteConfig.description;
  const pageUrl = url ? getPageUrl(url) : siteConfig.url;
  const ogImage = image ? getAbsoluteUrl(image) : getAbsoluteUrl(siteConfig.ogImage);
  const ogImageAlt = imageAlt || siteConfig.ogImageAlt;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      locale: siteConfig.locale,
      type,
    },
    twitter: {
      card: siteConfig.twitter.cardType,
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
    },
  };
}

