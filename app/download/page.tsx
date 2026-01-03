import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import DownloadClient from './DownloadClient';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Download EchoReads - iOS & Android App',
  description: 'Download EchoReads mobile app for iOS and Android. Access thousands of premium magazines, articles, and digests on the go. Available on App Store and Google Play.',
  url: '/download',
});

export default function Download() {
  return <DownloadClient />;
}
