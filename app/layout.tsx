import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/Providers';
import Layout from '@/components/Layout/Layout';
import ErrorBoundary from '@/components/ErrorBoundary';
import { siteConfig, getAbsoluteUrl } from '@/lib/seo';
import { StructuredData } from '@/components/SEO/StructuredData';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

// Root layout metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.brand,
  publisher: siteConfig.brand,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: getAbsoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: siteConfig.twitter.cardType,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [getAbsoluteUrl(siteConfig.ogImage)],
    creator: siteConfig.twitter.handle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // TODO: Add Google Search Console verification code if available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon_io/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon_io/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <StructuredData type="WebSite" />
        <StructuredData type="Organization" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <ErrorBoundary>
            <Layout>{children}</Layout>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  );
}

