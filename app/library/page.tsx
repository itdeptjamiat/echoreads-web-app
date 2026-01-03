import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import LibraryClient from './LibraryClient';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Library - Browse All Magazines, Articles & Digests',
  description: 'Browse our complete library of magazines, articles, and digests. Discover new reads, filter by category, and find your next favorite publication.',
  url: '/library',
});

export default function Library() {
  return <LibraryClient />;
}
