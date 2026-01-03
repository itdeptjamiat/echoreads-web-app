import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import ArticlesClient from './ArticlesClient';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Articles - Browse All Articles',
  description: 'Browse our collection of premium articles covering business, politics, philosophy, religion, and social issues. Discover insightful content from expert writers.',
  url: '/articles',
});

export default function Articles() {
  return <ArticlesClient />;
}
