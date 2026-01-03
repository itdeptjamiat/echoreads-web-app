import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import MagazinesClient from './MagazinesClient';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Magazines - Browse All Magazines',
  description: 'Browse our collection of premium magazines covering business, politics, philosophy, religion, and social issues. Discover insightful publications from expert writers.',
  url: '/magazines',
});

export default function Magazines() {
  return <MagazinesClient />;
}
