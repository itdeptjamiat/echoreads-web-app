import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import HomeClient from './HomeClient';

// Homepage metadata
export const metadata: Metadata = generateSEOMetadata({
  title: 'EchoReads - Your Digital Reading Companion',
  description: 'Discover the world\'s best magazines, articles, and digests in one beautiful app. Read anywhere, anytime with our seamless reading experience.',
  url: '/',
});

export default function Home() {
  return <HomeClient />;
}
