'use client';

import React from 'react';
import { siteConfig, getAbsoluteUrl, getPageUrl } from '@/lib/seo';

interface StructuredDataProps {
  type: 'WebSite' | 'Organization' | 'BreadcrumbList' | 'Product' | 'Article';
  data?: Record<string, any>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${siteConfig.url}/library?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        };

      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
          logo: getAbsoluteUrl(siteConfig.ogImage),
          description: siteConfig.description,
          sameAs: [
            // TODO: Add social media URLs if available
            // 'https://twitter.com/echoreads',
            // 'https://facebook.com/echoreads',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            email: siteConfig.contact.email,
            contactType: 'Customer Service',
          },
        };

      case 'BreadcrumbList':
        if (!data?.items) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.items.map((item: { name: string; url: string }, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: getPageUrl(item.url),
          })),
        };

      case 'Product':
        if (!data) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: data.name || data.title,
          description: data.description,
          image: data.image ? getAbsoluteUrl(data.image) : getAbsoluteUrl(siteConfig.ogImage),
          brand: {
            '@type': 'Brand',
            name: siteConfig.brand,
          },
          category: data.category,
          // Only include offers if price exists (don't fabricate)
          ...(data.price ? {
            offers: {
              '@type': 'Offer',
              price: data.price,
              priceCurrency: data.currency || 'USD',
              availability: data.availability || 'https://schema.org/InStock',
            },
          } : {}),
          // Only include aggregateRating if reviews exist
          ...(data.rating && data.reviewsCount ? {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: data.rating,
              reviewCount: data.reviewsCount,
            },
          } : {}),
        };

      case 'Article':
        if (!data) return null;
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title || data.name,
          description: data.description,
          image: data.image ? getAbsoluteUrl(data.image) : getAbsoluteUrl(siteConfig.ogImage),
          datePublished: data.datePublished || data.date || data.createdAt,
          dateModified: data.dateModified || data.updatedAt || data.datePublished || data.date || data.createdAt,
          author: {
            '@type': 'Organization',
            name: siteConfig.brand,
          },
          publisher: {
            '@type': 'Organization',
            name: siteConfig.brand,
            logo: {
              '@type': 'ImageObject',
              url: getAbsoluteUrl(siteConfig.ogImage),
            },
          },
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

