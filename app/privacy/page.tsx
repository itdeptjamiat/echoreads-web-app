import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy',
  description: 'EchoReads Privacy Policy - Learn how we collect, use, and protect your personal information. Your privacy is important to us.',
  url: '/privacy',
});

export default function Privacy() {
  return <PrivacyClient />;
}
