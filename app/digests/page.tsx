import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import DigestsClient from './DigestsClient';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Digests - Browse All Digests',
  description: 'Browse our collection of curated digests covering business, politics, philosophy, religion, and social issues. Get weekly summaries of the best content.',
  url: '/digests',
});

export default function Digests() {
  return <DigestsClient />;
}
